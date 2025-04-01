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
    "5dLKpCLdy4pNPGEiomJUBepW3oc781txrvFNXpQsbkNJn9KcvgWtCSDTjh6Cd1K6dBXzPNXjYT5PM1VpwmcdJxyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZJghQPw6gjiXonQL5BWiU4tLB3ARbY3X4U9QfEfkNMqhXSvyNYvDZwNfgErMweRrq68PVQNfxjggvhGTUYfnwSs",
  "key1": "4uigu97VSCikqqpjkyWVLYdLaLGtxfg12UTC9XtYwxuHuBJWPkDZpCpa4pAvGKjYiPkPa9nLYd1Y1oeFKwpXEpGc",
  "key2": "3y6oX4bAAGYTZgfw15Vx71BwGh9pirz8XvHpLAUoCzvFcriAUQMexqjUaDVh8pXdtM2cm3ER3b4NBGWCdG3CJEhp",
  "key3": "3DfNb85gsWZ7DUt4GEvdUPLLMqKZXSR8GCvvYsAwQjoF1q8W1CQYDbxxiHUwQqtDjbPjsgRbiz3fsdYj6F4Grwat",
  "key4": "3iksQngYjZ84sSE8hAN8CymgbdADProhx9FYYx5CfEox8ay9aqXYpcRXtY5aMuMdNaHAemkHVsqcMj9NzL6B6FBz",
  "key5": "35XrnV9ZaM9F4zhqcxZRrN3bJaz7B1TXdreKfvyabSJHcaGmYKbiKpbFVquctN4Zfhj1wSK6JqXjqsm5dH1ZSfSE",
  "key6": "5gS4bAc2JUdDeq2A5DaBXNBcVHkmjewZny7nVRZxAcKyn6Q5rHK2WovoKGnnFGDM3s2G8mZpqwVzJLhjtmKqSCgV",
  "key7": "3kh8Xqth5uodQngdk6hyoBf66UMBgRVCymtKvMCZbmK4F3U4n6gsAcxyG3K3NGXeuqpn72mRWGYV3UuKW9sTxThy",
  "key8": "37mjTAJ8fHjdUfY2GfYwaXz5BSp7smUQiy6es1apt1r68PRnhmTTjtQtkn1Z7GbR2UpFQSE713xmKkBYuHkBU4Qa",
  "key9": "2LFDZm2LcxiejibNwkz7XNnRvwzwEE7qCZY6ZmJG6dHGtD43B4qDNNfJBEu9eaFosKAuuh9zercWdvcJUtams8gA",
  "key10": "QpjGWXNsJ2aTZ4cYzWZY9deGPuz6qqxATxtVdtJAqZh3mR7awEFEZ2UHN4EchhYPyuRtBn5BXY5fQqoy5CfLRxy",
  "key11": "3ptS72HavrQtEu9MaVUTCL7F64Vvx6X7Uyai1RMDj6EXDosCtK3SQ4aDUgf5Po7iDcBSTAJoAsVDFvFZb48mjkQR",
  "key12": "5YCYUboEPyUk2t8Jd4XCutx59oj2e1oVMeB8ivUm4kDHhentyxqRUKk8QjNntwKSpPybf7fRsiVUXyzc3vbeg5bY",
  "key13": "4pLnFUbJMDYZsAMtKFqYq7tbpWFiaXA2ceNVZPf95nPKgLMSKXn6kBv99KBELs5DtKfYQG17tB8NJerUT2bPjaou",
  "key14": "5E96V4FfWiXvAUBGc77zerRYwEJ8VZdVdugtVjzj4XBiZAK5vBYnADRkEfZRMzrtgMeNHm81bPZ9jDAwMfhSpQ2F",
  "key15": "3viubA1DPed2n1HuWBQYp1hGpKLVZNd5YMTBAG67ZMChepnK6UkLanCZvswQbM2FudrjfEbFBkqYnvL4sEM7HRSx",
  "key16": "8Mwqdo56TzEzouz7AbXxcPFtJUNdsGmgfrrJZ6fP6pn6VkrpUtFAyVkfoHRSP5j5YwzWC9VsZc9QN9mxPR6k8ES",
  "key17": "3nTjKsTW1PLhr5m5nA9tbKEcs21xvcCcRFFBJ1C7FXwnwsdGDAghA1uitZTtouHWG7NAEcrVNepUNDf2zVCBSetk",
  "key18": "3m51RKsgvyLX6irXDfceePXLWLHVf4f4ha6JwtkTVypzjhNShmvova3A1zeK52zsBKvHDSTBvpKwHPMRDM5nSCKj",
  "key19": "4ZCnZDeFRiYuixEGDkX14CheWhLLS3SNASZ4neDFrEMjjfQBFuiiMokiE32PG3Z7Pn2r2T3Q3XW1SVcmfw2YEF4n",
  "key20": "4riHSPoPrmQm5bA5xDsKcqMQXiJqRq98MPa2c1wKU45swE4ipGKPRTbBnLpwqKHiwfEUqq3XGud2qw1tdW3bZ5ko",
  "key21": "2rVo4ogPjaY8ePtDGyXgdyXxwz3kp3iDyz67FV2gyiFTpmgMyo3cF4aB48cyNAcPA9CBCmn1ke2jHjSo7qKsg1D5",
  "key22": "392zjAtinhT5u5RN9Jybrcy7BiWUGnsWsCvCFTQKUaR9iq6GQUcgJxq6mPzMHc3gXii9kVBeC6W5hvB2X8cLsHM6",
  "key23": "5wpZqBkcfQ7dKjRu8uH4h2k42wUqHDmw6FxoAnMNDxhStHJjcLSiJvRs4yqbJ47QuspG49MVsRNtkwqhScCL66Sk",
  "key24": "46Ykz545JivjugzKTjLqjTYktsinjw3Abb5QkK1mGsFsRBgrk5YakufwxBrtTbBhXQ3yC6hWu39HMTm3XopEzdXs",
  "key25": "5oTBA3TdShRGAJHwvBNaBp6nnsJS1rRjzkZGdVC4aT4Ng6cdSYWgQfK7KWNeyrzzoTKELU7jN4S1yaeg9M2yV36L",
  "key26": "3zinfr2iXQb2HGyf8KhiDvC85B2VM6fpTfXx7ayaMTPTFAMMdZfRr5esVWP8BP38ZWHUojxymcLeJp1hmdNLDBXh",
  "key27": "zxve47Bt3Z5XxtGLXKRbT2csKwrcFsXWRoyt6sYvYrFiYXp9EjYWTp1ZBPfBSE3uZbrPpruq5JkfSLNdxKiCiBg",
  "key28": "4XUK5g9a9FfoTgogVKz4fLjf2GgazAXauNiXVNgSBQfQxVqTMEjdP8YSpuB9Y2myrKHkRft72zGCwXQGurFtTZxE",
  "key29": "4Lopyhf4zrU5ZLeF6Dx1soMAUZZdKD9Ra9jxJz6Muq1fvcBaBXPBwD5z6UGGS5JuHw8zPXBEp12VQCo1xWyX9QFE",
  "key30": "4GxWz4cj2Q8Q45sXwpjTKi5JjfR8LrmEA36Uq9Nz1Qf3x99zQF32sXRK8YQC7qe2wfbQAj5uVoPbPR4gSwesR5Hk",
  "key31": "3igPmejaZh7R6Sbcaj2FvLcTCeYw2voKpuRkfhVVzQXicFNPKMmm7tj6h82cfC11NY2dE7hwQ3G4Lsbo9sVKHZsr",
  "key32": "3bnTrrCezWqYmi1zk781GFkF1L16cEPyQft3bpk27upcPAvgWiat3x2RF3B18cSL6G5826ojzWY89oAMTqYq1pp9",
  "key33": "5WRDnsjeoXvFjvTm2euFz5hpK36dZDBMHxgNEymVApHhn3YQqgGUmxUHz9DPz2m3zMWy5bDGYyQMU8bVzkNbAC3J",
  "key34": "5QA83K85zKFuMfPSq3LokraBEo5XfpmxkqbZzhQefmF3ggXFRDeU2UgUBxXcWBKDF6YLCXwtDCSDVc842se5DnYK",
  "key35": "5dNXzY1aVMdW4g7VSK7D9eekvPdHX8vyUfiNUiy59kVBKYAHbsaoDtoFU1uNTGwy51X9EDVXpfThugHhXzmo8N2A",
  "key36": "3oEfjJHWYAaLhzHuFVChyqFG9dg3Bc3gAn3kjYYRnwqwUFpyEULC6KJX2XjNWRjUPrVh5bTycrgufggkuJDvEP1w",
  "key37": "3fGxtdMspnmMxJgJjnJ5Mbas8fRm3suvKFE1c8E13fqTEV5DRoqUsixM1RW6McEkupMmevkkWrBrTUQDYSgMfxKe",
  "key38": "34ZFbd7WtbacZEPBooHYy4PbCfsLEyivbyvixtpzcED5KukyPw7HLC1MxzKoTJhmh87gwxXbQvZCeCmtA8ZUcxdb"
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
