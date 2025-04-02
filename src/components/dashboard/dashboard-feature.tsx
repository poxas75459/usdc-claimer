/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2d9K98jQfkrqns68SQvJWUv4UASuXRjPtV8rXChdDUQSXje8yJhRPKEf6EnWtgujzFjdL91fbkH4kBG7AhzJgrmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8mWAe22qH4TQNmck6CgoZ22giv3L8FHpxPpvLxgf6awhFZZbYnQRBF8xyU2fSdbytbL6rTd1KvhDjBPGL32AQ4E",
  "key1": "2see58AC1VtX8yr9jYeFWfUgnS6mLMRBxSaSW4iVNLmkEDGUEsMU3wxMNzrL1JAj2HBopkvLjnXiubWuayNkKFxM",
  "key2": "4F3s8vMfHmLPdeQ3cGSbjYk91gHoFYjZLDAh8EVRD27oF2pFtHXGipomsC2HKwZs7n2vB2WWXNQ3P3fpCU1BZiZC",
  "key3": "22jCaeWBfzRmG1MrBtYR1eX8nq4fVwHwk6YXWiqTXwDbuyWnzxhZTTr8hRkkRmhy2D9HXBShwy1SU24SQaaxhfD1",
  "key4": "2jRe91pQRRkMyF5eXm8HEfosRzrT3MWiGx6PUEC5n2AzE6vtEKaYyBfzifUhdzTawLxQXSCbtUHfooFvgWMf87xk",
  "key5": "5i7EXAx4VTXVAt3rQj8ZR496C78wgrUKCM3oXSRAjevoCADA2rbmDs5Edh8uaz8PgKLpxCJEyhQ8YgN4SmzhavD",
  "key6": "2Hv7cP3KmvU67RFmaKRsr9Fcd3vkFcVpSrugo87hi8a1X1aZyqdHyaStSMm5x9pUC7NWAxu1SxS7S89nWq3VkKzq",
  "key7": "4mWFgCfDvXY4ic4m2K4bAAMnVSzCkpNGBjoLWL2nnwUU8TtzqySQNHDvppzV9NMSydbZFkns6i79Cizq9dxE1bbe",
  "key8": "em3xUqiWeXuKuywtdC3i9tKw9ia9nPRwbKSdNqTE426eo1WenTCPnUgGmZZW8ciqhoQeWj9FE8aSBC4Berg4SM7",
  "key9": "2jENAYtx6X6k1pE6XMMotmczGxyVea1rveVd9dp8nKxREbPH8tGu9WNDqErmk1HenMvtpkmZkW7s53CQ5TtNtikE",
  "key10": "5HPHmSDMy4mSB9mrNMkMK43ZmwNMA6ksCBgQpgmQeBiKWY7D1tv25YYY8FJL6hxox8FFPKHPEWwFViVhdpdLJSBL",
  "key11": "5nd9FQksmvvCXYwDAvXEJxQfMdeLLCWLewLyAbLWqPxhfiNm4u8EiR1uAiEGyXwDCX68JzKRberJTB23jwBSfX1q",
  "key12": "4pGzJxip2F5WhLQyhgb9LCeeN7ddYxTEW3faT8QxjyHhdAxFes1z35QH5ZvoZFsqNF2RDgfm1XRdLMZ343vRzTDX",
  "key13": "4cxcAtfgeYN2d9tPua7Egtk3deEtNta8BtPv8JeSpKkTxRSjtYDfy8JM9mj4DUjq8AxSSkwHuARnNTS2asuJkmDj",
  "key14": "53onxgrz8Wmvu5b4KNawoQejXgAEJoLeFEXcYVJ5iT1xkpddkCrYsrcuSTYtoW3fEqMD9FkQv3RRzt2PcyKWTob7",
  "key15": "4iak3WXrEvftk3QWfieAXqjGuCVNHThEmtKXF1ooCACRHaeTHFXqVaq9yXhibeycJ1T9Boyc3NZAzfi1CNGT4rEp",
  "key16": "5FBuJF9WdRakSs5KtgqK8EeBCUL5c8fkjLUtfJy68Rigaic88JcUu3GSfgpFMctpJSRpby5cBJ8HPcUV1droaHZd",
  "key17": "2LemcaBtKjipZkMj6XXNNYqwbThBMmo6BW7YKuE6841ucgDCFERPmDrkXTvNo3KgcMvKQbHaSFHQ1AwGbXd9jerf",
  "key18": "23bSafMn6yTtZCtGSUA3RnJcTxGLRmHNt2BtG1qfewwpHrAQuugWEZvq7uQw98VkWJrsMXWsBNVwDisxD2tfPWK1",
  "key19": "3ei5HK7H6jVpUFMoNMqvfrFQgutEoZ2EnutqdcovGGBU4evVMDhogEsVcfD3rsrURCxwv5TmRcSEVHyDZEqth8hY",
  "key20": "67PS5DTGPrkHwyGJ4FT2gAqtfdjXbfgoeA3LYU1oZZfoZZ8nHbW8UGBKJMiEE5kJJ8kf8HT4fotVcqSWQQ2XkncZ",
  "key21": "vC6HP9S5FsqQnqq1FeUteCh8v8yFwTwVF8HwWkhfNQNsRXAf1HC8t18jTwkSF8dn4Xqx5oqd5RUrJ65kTShYo3y",
  "key22": "3Vu7Z8gebmb9LTekn9FrzbmzK4iSVp96Ly1bNKkQcCtToWGFdA1V7NSx5JMdNLMF9Zq2UqPtxHV7SQyuN4C2EZsC",
  "key23": "2pegZptxuDenqki9mEb59vvfTU1eK7nN8UJs9k9odg4m528HarZNpatzVkGvCDukGitN3HP1USedAKjFwrXwUHWu",
  "key24": "3CsBAurrbQ3cAyAgKZ669uTxhhZkPfVdjAuXRFYX88LroSzenwz7kh8TrtopniECDcVP62K3pkZCVPtHVYbLxaVk",
  "key25": "4ed19FdFeqt1ohFs3M9H9zsfCRam8LXqbydndyCVSu8jukWsjEZgGMWL8ScsxdFCsCbFFai54st1zi1GTxqHqNZU",
  "key26": "3GeG9yYMFRcG7LRyZHDMzX1DPQeSDphYxcXmG2JxSBHRhYS6f3WdBAGTBp4EAzoMnA8zSyt813CoLdhzxCR5AD17",
  "key27": "5i5P9Az4CfqPDDpiSz3K3HvcEJ4NRhyrJN1q4hkdiXMCMiTREuh8towR9MJFUQudXMPtLYvJzAmr4krhypjZiWUH",
  "key28": "eA2V3wmupTAGXpYYDBUsHtWyz54xk2jLfpMCSMybCTrtTpgz121AiUeycS5AurZ2nPj1an3iY8U7F2p5H95ym3C",
  "key29": "RkfUJ6W1tGFjHBdGUvcHekTbveu3hQgcCrGreoZB6x4N6HTEvErUsgir1bEotijhe3ELxQnoDrkBqsWBJ2PYpuS",
  "key30": "4Z7sqH9aXdkoe8TV5sZboTk2EyYAp4RVA6HgBi2Q3nMcYpJFTgcc9qs2Sm4rskcboZiH39kvpyMr27QvtHBWuEsk",
  "key31": "h5GC6q7ELzPTLWgFap4Z2z2LFsQnxEtAtkK3RWSYnHfmhFj71TcSpp5NCmSRNp7RRCaTQHDPWrwahmLrnxPUfzb",
  "key32": "47on8ymUx2hQfnYnf3RfNZcPFX72cYFZLE8QPib2iMVrgL46xjYezEdagEPdvne7Yuzpr5HX4ZSWK884o4rbU16N",
  "key33": "3bTwFJ8iGkk8xmtNd1sq5tjERVGckuCLBgKfsqp19HYw4GXse42QMW1f4PjPi3JFr1rQMZGr8jDwBQvvKdFtEpga",
  "key34": "AuB7YYJDirbrkVGjpJgFiNLhdrjX94V2Krc9eCQxs448Ba7Ek82ryvEoY1T5pNRFbB74KHfkP2p44ZqE8kPXTa6",
  "key35": "5VTV6gs5zhQ8BzbxJT4H9GvHRAEt26kAa1QdKmNtJGnKUcgxUYWfX9Szv84RgGWD5wkRLkfekXWpC3XE7sS9eEbu",
  "key36": "4d6Fw8hESY6sBH92gGgmX6rUGEpxiXjBDT7Wiys7ucj8zDm8JFs31r7bDkrnNfPdswLpHQF3cvnk7kHx5Lib7Pz2",
  "key37": "3QuooRQPeaLRjcvRLDxAEavXGTVJZcneCyqZ4JnyZ2qzXyUZakFFi7NStUc7RcFCBwcWtW3dcTVtQyr2sw9xpJNC",
  "key38": "WXGY2X1p4nf4UCYTiucavcHXsKwP7ZEpE5TuGvjnTC6sfgkn1qSCjWseVjjoekXTUaKNgaRnHCXmvoTuCa6gjLJ",
  "key39": "2T1TJ7VYb1e2pu3HRL4pvuWWUh5QPHXB7SQhHX4eD2zBRZXZhS2Ydxu1Ygk76PNMx9bPnny3kLpq27keZZSobgmP",
  "key40": "3MNpyRB5JoganohLHxm4G7MuavfRhtJJN5NZrHcGq4LSx6BAVpud2JouZiX5PUv7uNaTyWqEcouWk4xSRRq8tY18",
  "key41": "vZSiALMNR88LNgEr1yMvL9rR6Q3PoaPMDoajgYJjLBeCmYtjR1dbnvfLYh3xXEkKp7oaFh3yxVdrASa1BEAtmnr",
  "key42": "43NzK7Ms78inJvge29ycfYWkuhAmwvLo6DZzBAC6VyGMhGFvEPPMnTbVNXpZARhzW3q1M8Ak1hhCgUR6gAW61R6j",
  "key43": "5eYL9rCeLVCVwuJAATUMbaWog15jzgGy1TD67hAyefYJnJLNYVGEFYwZ67FF8dJPWZhTGXhpAAcBHWBP4MQWmtY7",
  "key44": "kTAuq9toPW7kUbGQrDgWjU59DLiVUSe1be9BPNrzkLdpiZpfc7YFFLuJuEo9TqtJJ291Nv8xZzZgSiS7yqPiVYt",
  "key45": "5GS9sygkhEaCK2CWJwDs9B9kNWnjudM4EQvwNrtNdS1Adwas4Q8yVNj5mptCqXtpyDWD4QtBUtvm7pGxcHhGnNnC"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
