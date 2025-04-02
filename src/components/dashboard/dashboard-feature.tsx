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
    "25X7Axag7Xe2rZ5zo9w62avbc2XX4dpWaHEgL3U6KdWLahwZnbFUqBMceUPK2NVpBXK8m9L6XS8fKpTZYXWbZjoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mrBXjpjVSW93FYb2GXnuD68NAUon4XtTgSEeB6jxJeMa4b1vaECTMi1jFtG2pCHiu6KPoSVdQ8FSfuVujEVyZY1",
  "key1": "6xKg41TDiM31utaRwSzqA8AKKyDzF4BUSKfNVQLGEYpqzwMagfUfBm6EGwqf5ki3zm2Kq9NgCRBswxJyZRjcbbL",
  "key2": "3Dp6pdmS9p3drGvFWyyQ9HChBEee4bk3TWTGMFU5me8MbUBbJsvzhR1MZ9xfP9tS1YwRegadX2NHtyjmeXSSGARq",
  "key3": "2XkeBb3UrYr8JJAyML7DusDz8NnUqY7hu1u9eFRcNJvmTGH5Je5FYEbVATkUfPDsDBPPcCz9WYVb9Y95vexa9KPY",
  "key4": "28HtUB9XydLhtSqod8ps3FPBbM9nrs7ubj8KSYFPCMZYgQ3eUG3nZFeegfKvvuaC3qqoiqYQhqmMjpgD2aEPsEnn",
  "key5": "2MH7YR4rEKEE2mFDGK7eWjP9jAGHJYuRPqHLj9JfCDyFovXAggLVhdxbBXyXfMrLVcjHKuvhXT3APMvzVZ3ovLhM",
  "key6": "2fJvQcRkx24PQjpwsjBvTZYaKgQBodudwXkn7ec4AGYwj81cj3f6JAt825zRYU956ZxCPC1FpdgGBHn26gmGrJDq",
  "key7": "515HgxyXQZoBZe3PFCYbjiMqxAGUguFdSsNJ3HHspuowz3g8xYCS1VHBHcSuBhfJGUeuoNF2xc8RngW7VuQSrUKf",
  "key8": "2Be77NBnjzeDuS68UGLEeZyxvSHq5mRPVf8D6b47gevoCoke6AwBKN4pYnFWeoEXagp4iYKEd43nGrqs2Uht92Zg",
  "key9": "3DhD98Lh5SLNToHWAHJKmxZ8RBotJTYFCjdsnbZAdme7aWz9wgqG5yfaPmZ2wH4jgEjDxYBenEkc88hbc8Y5YkEf",
  "key10": "3ZSpuJHteX8rahTrUeXQSBPHcnWRoi1emiPBSZYGUPLvnB6FJzgi486qBRskWGUmbNE9fX9PbJawLDSFVDNFZg9s",
  "key11": "35UZd8GTFctLutFWyAWVGk5qKpVdFLkRcipz7JVU9CCS7mPeVzmSqPgmmRyKrLuZ7hSXTxHMmJv8vANT5d9u3tvp",
  "key12": "5zziv5Xss47sfd6J5DhaFDkrdwarzz2xACArxwq2ZrQS6SA9hLPe3MWzNaw7u3aa546GV4NwJfAfjEZPgbjKiYSV",
  "key13": "5Hhw4eDSwAx7GHHWPf5aUnB7gE7HePBzUHkK5Kteum9spSLPvn24MGh1gHRhnwSGvSDFcQ3it4hNE2cfHb38XX6R",
  "key14": "3e1cBepm7zVQ8ymDoW1DC4aXzWiSh1BaAb1yG7n85dugo6TnESsEGxtcqaYsNiSyPVvfgs36wRoJ1QXou3HpJaGd",
  "key15": "3Li5qEk2SH5WXaLVS6Ew62pa1y7NUGc1yb6vHHxEKoDRErgFjYzmvjEQ3eV2TYLCMiAskkn4of5YA4wDfdb1Hw2v",
  "key16": "5xTuGQrRihqGHuTCwi5vXk88hMiLMvTkw3WJw23W4UDvAHtNq8q5oTBNeJaCSqPxkQhtLp6Bf9FYPgkPJC9BjQ5s",
  "key17": "3xydkNPjHAXrBSETsqoZAP7ZbijGxyyinmTBfNEX1eMZ9P6YWU9frhpLDJw3HTCG6Son1eyzyBX84WjUs7n4YW7",
  "key18": "2Weg7mhMCjBLJtSNwfzshhx7sX3KUUAtSgFJ8TENCqbRTxhqGVEvyh7q7Lk9xwdbCwmTz1DACEcJc6Kpwzgvujho",
  "key19": "3ZWdzzcnWHq98oc52hWH8ULgptjApxs66Qc48pAtSpXKCimdho5S97RfXVzqLP3n8u7SrSdg1bsQiz8uWvDByxe2",
  "key20": "nR3r1s3LRm56e5kYe1QvXH4jCUkJnYBKSJF7SWxxQ4YgqW8f381uSF9MJzZDfiCegj9MfUnbE3t7GRD6ATq65KP",
  "key21": "2VVMTKommcn9nS19vEzoXd5Tv9sTnAhWvZzxRqJycekKTW8mYHW5FZPPr5gsp1PfKsG4gyVVKguhFWvFWs7BTTmw",
  "key22": "5U8MLpKhq3VZYAkuqgWSTFctSn1ZJJ5khaAvvBn17HhzQk1w65UmDxpjJbdLqswPzVcmPgmQgR2djZw2SRrfwxTM",
  "key23": "2UgCSbrMUBPyFyHiEfvgZ2fhZWFnX8bd9kfu13PVSLErzddFNSW9YFPCbNAEAaKDzFaYkoBHKpqFreHbpQqNzKmT",
  "key24": "ifnmBgJUC6JYutYymbxSMggef8e6tgTp8raT2VwXjsciaAnYxDeyUh61SDkqe2fsSH3aeTtm3wMFu4b2fySCZmF",
  "key25": "4AC7Zaf6kXbhpbvVQCtJWSSun2QhtZ9vbm3LYya5EhEoi8h4AdUoHjr1zXWrqgSrY9fYqu5ch8C1ECCENBX257fY",
  "key26": "SBtVcqZAJVABTQTmwpLkxASVqyNRjn6R2E3Va9TfpiDkJzyr12LEGDQKxr5F9DevPXtmacKbiKxsb6qVqPN6g7p",
  "key27": "MDxsB9w2WfrVeAG1xiDzuzFvC9JGJwqxPs8BhBqzLPgakCe6RJcgfphP3bpxMJvE9QYUkTUxef89j3G3xuANgyi",
  "key28": "2zTaRmkvzqSGKz4az9WsdobYTXXJ5ZczREnNYqkpsybtt2RktCMMcJ4ri6iP6FefkrLrVXG7QMGyEWgbCDf7rDfY",
  "key29": "2pgbqRWLfGfMXVVabpEk6DY6C7tqR1iGZ92wMoy9dvgZawx54VrH1JPx45ZLNWUtFPpzLd9Ci8weFNDVB7L5jnes",
  "key30": "2GVJJQdNyJtQGRoJhbwMLFbFZL2ao4eiLZTLh7cSzk41iVPYXjxUAgtdmetYZHvdkszbDEowRXUokYAnHHSUXyGW",
  "key31": "5v5eE6qoH2r6eN3iSFXVZ6x3d5YVpyjApLHpY6yLa4WKQGLR3yZPtuP19Qavt2iiP2zFvDXsMggnVFmDFGQAS6js",
  "key32": "5Z2X2LdukSfPTfDJjuxc3FxhNj8qecprZUfvx1Lq4UbZ15QV3jx6Lv2Unwx54k21UytSUUVa5LKBZreUm6WJbsJQ",
  "key33": "2fQDWUrf29Pq6PYhJek3DQAk68ZKDGLmhz4h1x9gg5ZmvKEA2uJRgY4pLXmQABb6KZjCPnsbPhYVM87ZAqHeAjNz",
  "key34": "5TunUbHjkoYGsHRqG7SLSt8gFK7CZDmi458tHcV3EJuaV5gbeJ2P4Ay81gS5sCoDAvpn66vwJmuHR976D1tX6Kpf",
  "key35": "35KxVBwqazmc3wvNY9qRw1gKjJwmjtF2kizqeH3UxksVnsZuTWZn3y7VKGZWqaUAjgtCiCNtJE6McRZHCCAmAGy4",
  "key36": "5CzeXSrXbe8ZBrzmQ9TLEpfartpoYzyZ6AYvuf331PTCpvMBdkvi57j7DjZDz3y3ghHPxKsqRoEQCDjLAs6jeRw2",
  "key37": "5tT13kC4HUTTCki7kmFRUr8Yz4ewXnMkGTxkRHcLeQeCVyXq3RmZ252wnt5izJsW8HSpdDvspvnd1y2ZKQtvU2zG",
  "key38": "fkHFn1NGMmf99D1MTU2oiuKyNWYzGThua29tTSu6mb9ngTJRycoqmHjo6jy6XewS9xkDhThcrybLrGLM946TkXd"
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
