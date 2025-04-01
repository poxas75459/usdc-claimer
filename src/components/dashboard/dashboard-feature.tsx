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
    "UdeyYnYqmQkRCqz9YJDBuDJumK9wBjvhYSryxDSCPUCT6uvpPa4gpkC46WrXKCVxZstaQ9PxKHxzdhFDgTr5yTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CdzxutE5cXVyXHWnMLsqJDAqAN48jqJ5CQDQ6LSnTNEwggFfGpz1yTBfavadT71vAeXJnyCHutscAoLferVp5ab",
  "key1": "2HCKScZ7v6UQCHT7ctcnox2C5qAshGfdGhf1d2aPTyikM3ELzkB5E74fNkFaFKK3yfV7zPECTQ73Urxvcds3EQs3",
  "key2": "5PpBf9mA9wdwYSUsdmqo5TtQKfKt2hKeJENRgygbhvkkVf1RuY1j5NWCY2Vz8LM7SWkh7eSppHhH54QMpEnddf8L",
  "key3": "4CUYRZkSfUWFtQQ2nmbhuFQabmsB5iTqhakS1yvkRUZEAyNy6bZU1jLreF2on9HUj1YiJFMU2ffNK7dgmVWc5TYw",
  "key4": "4okVKGMdr7ZMVy3fq5Qr1MJjopRqFMkSx3XgAtJP9UL362FBeNFfpSYZpABU8hzTCb4JKKU5G6bMuaciD2YfuLH3",
  "key5": "41D17MdxVBNh4M6pQazTuiqP8LBKsT4JziEzr1fER8xodWC9VTohjxbSnmnoGLb4Ea5DS9WkRkXNTKZ9jozb4rah",
  "key6": "65GGa4FPckLw4Pvt62E8WDErMR9ijADkoteZXcESeSPdBZm7fptUiiVwsrFdyk4V3sG9QDnE9Lki7P44hgeZHKsB",
  "key7": "3cdZEVwVzWnw6XjEpMApD6614mRmnDbtzCVjxVAgAVQMYXmDPQm2yUhYimASq9UGv6og8MbYgud66sqvMEda1TAT",
  "key8": "51EtEsVTw7fPeq9BgrnqtsMxm6DXkVVeaP2RLE59mUSt4B5B5a66yje4dtWFXLPVYKLLiwCTj9zjkuxQHvuSTV8d",
  "key9": "4bKeWRhuX8YxQ8MWomreWkpPTdDbTu6towNX3vEsDqpGoEQfrEq9NbBrLfTeKDmxtGe956y6bwvNrMVwYcV8vZoo",
  "key10": "2HTW54R45LcGhLYdvnRenkZqw1iCRfws2azjoLJ71yBuwmqqv5r4ZrBkFYwjBDGb4TtMu9tgmCUaHv6AkjaPauHa",
  "key11": "565J5REeBnRR3qDmdfP1dEqmsTNC8qpgZaSfXuBZTaMgoR75oGV3kBwJ8YfZmdBQvk9jMCu2rBfQA1wYEF6m11Ek",
  "key12": "2mZkHtdiPfucs4CTEkJJMV53xNywXLX3HWEkNBENWKUEsqy9ZrJDmLtRhjB9BmEToKAVwVrbyyDQXGJ68ZnTjbcn",
  "key13": "5UJN2Na19e8EqEMMwSkbtQ2ak6AWWjjEaJoXZUNkibWtzHtpMmrRRs7B9NxALpfMNJwLQinjgY3tdbGSDGEmYdcE",
  "key14": "2eHZ513hcKEvWNugeeN9qPctcy61mQ2WsJ5GYcuo4Bg7Fw3ETe7d54wfLeWfQTTtqvjSK8Pu9RQsxsGmgpLiPmNZ",
  "key15": "64sSVYnJckvFL9xgon7f39SkqPC4Z2jae2JXnG1n6YC7YoY5i3tC8a1CnHPDkN7nGGTLvZfDxfNjvthHjB981sfn",
  "key16": "57wTuY9tkwoCbMRQ4bPNRrBDDB91WxtS3wnBpNcEmPE94DQaeU8GEift43m8boKGdyY48nF5BZ2qyHgovcotT1UK",
  "key17": "5yJjqK7R6PH24xA8NsEGr7vKRcqVLvbqTBjyk99xQw4GGvatHiJbywWqZZC73C4Mwkj1uNu4d4vFNirZYkfkCfuy",
  "key18": "4qqjjPsF7Mosm9wNdY2LqU95n5itm3ipXEJxe3vykYZHDGZwoFcXwTmMdxmxsGcKmQ6E5Lb8Sdo2rstVxzLqPKck",
  "key19": "3TDiFBaScChiw7wiLQMosSpPy3Cqf27pErs9q9UUDgDe8D8ySKRpQ2siMNUKse9KVcDLXi15yXjf1UHcT49FhHSb",
  "key20": "L4KeBwU5z1bGzhuGauHrDHt4gMM2RmK8G5fT6GRNSTnbsZASri51AUeLcXE9K7532naR3CuEo2ag2joSWymXXMH",
  "key21": "2drB7CfKNkJVJ5hVbz8gdADuMvPyB9zLYtVt67Qqsu2KXWitopRB3mxifZntySr1c8dW5wzkx51RkUN8LigG4btJ",
  "key22": "64dFtKeAzifa1VW7gffadSihTqv7vYLcbJ16oHg6fvT4Aur1EhZPtjs3fKpQoz9VEFUygkgYwaschETPknAMw18X",
  "key23": "4mA3bXn1JwTGnnmNgnwGpeS6nDhjsVHVGYhDPXMT5ug3i4mCfZBUpGUJqKyRGfoCaXj5bYcU99xLcge4jTnvPC7r",
  "key24": "5bLG8mrU4AuMxYar6xyN9rsgHQo8L8zcmwGY3CoUsZSpvVeDw8TqLF8TyFxGJXY2eiqduc1Cb9LCvQPWXZCtstCV",
  "key25": "31SEwnEaVLQ3hFjQbPpKyur27XzZfSDVoEdpowiP6BFaAZnDZbob6VGBMVkDQKnpPSKfXeMi3Gwka4yu5raajYJc",
  "key26": "43T2ZLkMWkSAhxCyfS4dUWoHo7mJSTVJnfAKsCNf6dreaNU2Tm8Z91TT9i1difuXGgdhQzPwRWCdNruR4HLXXume",
  "key27": "2ruszNLPQ8qjrP4rn9VAxeaX8LWoFRxMrZjxRjRC471vUeQMYpsrYGUKrAkgXgKehETuhW4bD4VBdLBXaQaFi5Ch",
  "key28": "37XvfpbPC3myhoZQ3xhhNZ4aFaJ45hSxFbCyXrpL9tbRvqGVV57QjCoPNYSDP78E1in8Z7wUC52zoMpvM9Mj5AgX",
  "key29": "tiCrPdDUmSFzFHcSFtVJcEgYM8WcE2hNgAwbBceKZFkGGXLkB3MD2EkYeTekoCn2Goc6oEDYcAQMr7yfzqnGXQY",
  "key30": "GBHGBHmayFadHEF1Gj4LMRCfdvRV1QvjzmHfuu1QjJEsknKrkXfX62DVxoHdqQF9aUJbfsadr4cgqvmyk1aGMua"
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
