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
    "59eogYzitu5bncoBdB5rW7wrsqBnpjAfNqqvuhYtYoPy86CCaUDXXH1VsiL94zHCtkeCs16F6pTjuN7B7Pr3AQ5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xh1fdYoUqNmhe7qJnXVJxuKNTztnkbUKd2H9hRi3CaT1Jh3PgGmgaX8e1bZqESWUgQNt1Dr5Kr4DuiDPpBVjMSH",
  "key1": "v9Vrdq3iQbBf2rgey6pZxThxY8wp3khP1n1WaAudH6gS9RACmZ3xDjzq9QEZDwHzdkkTXe5NYmzJWirrArxx3AF",
  "key2": "4qw4CGjgEAymaue2sVH7rkMYEthwJ5nrW9sR7ARz5vSyaDpsxsdYNZVd8uF9hmoTQHodtX9BKgv4H15B169XiPC4",
  "key3": "5udhEjLjiCPUnHMrJ4aHsBCLv4VELeoiDTgbZ4aKd1bYkiRq6JxCT1tJJNwvZ8RSn9FRJDZZBFvSWFzafB1PiohV",
  "key4": "3eVUJqYc9MuyD9XQMM5ybJxiTLhT1v39P6Dz9eFvLiRg4vRw5oUWFZpYdmg2bmN25e1EMjHaT5Sas6QYkRJyPfLs",
  "key5": "nMwaxwrTXq7Tub9m2bfkPNqMAeBK5cLUse1S3qJ7P9wwtnc4Ne5LQy1Gvdhz2m7fWWjBZgEioX2TkebjWCAEDFV",
  "key6": "49AN3YnB1TpacRhvwkwMycTnvV77vdBdrWheCHBYAtGB8NV3QVYa2AP9rVPwJob6hvcezhFYY6vWMFWmDZXWrGVT",
  "key7": "3QFXyVYaDHoAbwcYJHyWWfhBfhKWyc8soWB6QPwHpzXcPZXtQ4eCMzzoUXz4XZV2hVCRYfJkhdmYhSkPuf5PASh6",
  "key8": "CQeMWfSgE4U3s6scUkrgY2dhMGrWswN2EbihFYtugfqDRbPgvNSJMPy5r9TH51RXVWG3Qnt6KDRAtuNxAbGd5aw",
  "key9": "5d6aLDe2jirRbQEvAxCHRJrGffDMGZAWfEoRiGKLSJ4jUpkzWitQPdUqputrjwRXZim2igTrm4bsxjqcfKMQXQVY",
  "key10": "2wWhXr8FYr5qP2xhgU1tjN9QHWoVBx6ktLVDtLqeBjRpHqB52tPaudqW3QZuQ7Y7wFXs8cgK1f4B4Hmo5uWfU9T2",
  "key11": "415tn7DeJYABFqApL6yPxcfW8WM515896u8T4zHYPVQpEuEc6cRErdEn5WGuJu3fyu49nvBeEPa7MtHGMmGLg1Bp",
  "key12": "4s7hUtqoMhVDb336ZYZ3KPG2NiYevdCbpf9q1QNxZi1NoP1Lzo5uRHPfG2JkVi5DiyNdJUv6PKJs9ss4NyJenJnZ",
  "key13": "326QVJkJHgerGfBV7VjzrwuY33xVHSetdekf25tDMu2AWC8TPePgf1BwMoXrt9F3eLd2cyKXj9ttsNDrh1JGNBLE",
  "key14": "2VDm2JTRqPrTrXytPNq1L6MBmDi2aJv5aTqynvCcd3AnFG3LN6dB38vETEYtcnL2XWxKS1bMcXzku4zQZVhz5JgA",
  "key15": "49rUseeKgoMKRMPvuw6dnkh87gbNBS2FD8QVvxf4ZNbE8F1ABc25U8U1yDfGnkfHG61W9Dtsv8vPBzA2Lcnd6yRc",
  "key16": "6ckMx7J2RQUDBu2W18c6yFZsCybhWCtB4hmtkHC24mZvDhTi74fNzexirEDnh6QBPmwuQH1TpKfiAMu3UHivoRC",
  "key17": "3R4ERBx81Y2VXsPhsRrfhq2tkUmho8YYzKq5qSW3iSfGJSd76WYzh7v2aM4oi7AWBfNUp3YdxFt79JFrw5vKkuEd",
  "key18": "Ps65sPvpbqrCLCpb8uYZNRz1oXxSMSgcHsbzqkwdEBRJ1ydCAfyCA7ZL9tqTr8ULNnPtts7nFxBtFnkuA4dhkx7",
  "key19": "5wcUUzCduVZitjRYi6bDLqx8uvoDih7aMA7LWRmsHvrh6UuGhdgsZGYanvRdsgQLUdEx62gvTSVG55aX1qsjm5E9",
  "key20": "4vUMcCT5PpgLBKTSraw9wqza5pDiC1s7Wcu9AR2oCocdDLxodhPxNk6X7C7zEopvScuEn7xqFeL7PEiddnMbFU1J",
  "key21": "4kjysRwjhSWurdB6QbU6UwmsQFyqbgaUwUM1qGYF3nYJEqVuTUTXi15RdPQE8ZYVtZoKN4v9FQjCFJFviw1ZcSfN",
  "key22": "Go3XeUXpBkMaziu9eVsjanURPPYxmCJnmN6s2yBwszPtjJ4XH3tSmqDJWU5ZrBeSqfJz8JLwGbde8cFzFMj5N5r",
  "key23": "36uxdnfZGs8HJPP6ffSt2K9Jf5SjFz31PFbhLTDZkXTUSRSgMbEwz9EAi2UzAu69j7VvpuhQvcA8Y4zYTGCNEkJs",
  "key24": "21xrpS7dvzuh7v4D9x9c9nsNDATdPxkmjRKyfM42XaZiPEsua7LSixWkbMZbwRCcjP4HHgkw7xwG7YJCbxWGJCfZ",
  "key25": "64NpbPE6KsJtPoiGFxfVhPWGqDisK8hmqVPgTq1GpXzpRVGtszxThzHErvyvKiHtJ3Yaym9bYKdgEAR2oEFViD6w",
  "key26": "4VMaC8hrfk1vwovcXUWV4RKbP7hEXCwtHBxWEhuVRerVLcSC8KqobyJNySy497eGc1uNiCD3PkptWw2a9WBMSsZC",
  "key27": "2egZjEtrVyfmuye3YCbzeoXD6YUzaAcWD57VrvjRbbzazBBUGaqktxCpRgq7cnvThabpuj7P1W3KrELjeJCAUW3M",
  "key28": "5LFT5ufNLcRRmtAGHHjfcFgwZf9YTRy2z9rSqvoh1JUiXApB1UFsaKf2bpWFJE7pAoPHRfY43uufXxTZxXL3V4Ku",
  "key29": "3o5TnHmbfwrFBorRjaf4XQAUveQK6u79VV9nwjNdqgSuQCz9txNfXjfYzr7X1Mzm4pwz7syvtMCV7DgsdBdtaxMj",
  "key30": "3LZdkVdUU4xEDxFis7WbqTJCYaWD3s5kML8rkPvqt7d6tBPivBgbn7Z82YkHB4fAPppHYbhMD9djEM25MFrK8KVm",
  "key31": "B6ui4j3S41nz5EJu8pDUKH9U6AAaBGjbH4dpSZ7Hjt4dXnsuMx5G7vPSsNs3dfd3iUXM9jb41dHidS45JDWGyR5",
  "key32": "2pJygDsi6gBDDsmdbt4wB4Vta24hLb3fGz6hyH6XqbJz5t8vktf9ADf2aer4u5taNf7QjcEbpecpXAG6rPC1PaAP",
  "key33": "Fct3xZYwvPaReSFQGmba3Mghi94zsjK4pZ55WLFzKFcux5vfFR8T7QvgxpmoCvEEFY1ZLRNWJSmw8uqeLBMxu4E"
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
