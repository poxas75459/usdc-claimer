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
    "5XEG8eqVhjGbu56aKUtrTGB6KhehJqVBCMsgvyGx4vz62qwUbhJpMM3gwyhpuSvmKtLj9FPyjeHzmK3EFLDDvyYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdbaYfjxmqPctCiPVcZcV2DKh4s8pJ55d7xSPMJT4rX7nz8Te6sCXR6dCGzfd4p5ny6RoijrkhaZaoxN3avrfvT",
  "key1": "4abJAxB7cwzZDGuDxzwKhsKZvWKcegATW3Thmv28NVHCmUsKVQGxkNvnHQsNzzH9sBDXu6cYDFT2iqT9cBHT3ZH8",
  "key2": "iXhce2pHGE8vw1nAdyDAqhX6kRMLYGD9dKwffWa2p7iixsXtcXkDALvZ6MEK1uLAneNwpdmeQk6mnNNgtGwKy7d",
  "key3": "4dBZzeMT5ZWVsPwA2HmnXS9hgWsEKuNnjcRk9oceDJDDiRzomRVmLrfHk5RpMFzfTydma42NKDFbH6gz1X6neXyY",
  "key4": "a2rkLpEvPUS7jnhZYGiL1CupyvxaqfUts4DPuihbGcLpuyyQC9U6drMyxsqh95dRmvpoEArt3zZjYUtm4P6BW8w",
  "key5": "3H67GwUninSQYvN6tjNAZUwb26fAbnWak6n6Y2vtr9Ezq3qj9EC5kMUpvCNmXAfinAfn4f17A93zBibor9HomQcY",
  "key6": "awGQVqYq5Dwi7WaNkEhptbvBtneJwYbbBp5ZcHprHtPuAvd1c3aPpSX1JU7LoqwJK7jFZzfeMAjmoTutRx6z6gB",
  "key7": "4LdwCytuYG4yXcpWbH5jdLZDeHer9Fcwb9fhd7Dkm1zNhhfd2CafJDGNb4caEEpVJ9X5wDixiX3Hd9BixtubrpFP",
  "key8": "2JGPCuFfZNMRD71NoUwUFu3UdNuVnYmyzuPzxhpKtRj9iAZKWTnLbbYq6cUeQkFTSKRHw22bhB2jzJfWjosXQowt",
  "key9": "5zQ8nk5jnqqRyog3wM9tXvu5xQ5s7EQXTNoqozzKNXzNqn7GiEiu7sx3ZBSejLohNAYvpZ2s4p8kMjkC3B3iU1rc",
  "key10": "54Zv4CHWjSRVkiVU7PG8jzrjxFf2qnW4TJ4hkMTVirchQtaMBxRUx8UeuBuj7fKJ6upLwnJ2VMdjvmu1VAJbLvoz",
  "key11": "5gQB6H8SsGfspMb3VRakKa4NTAFkh58ssP6k662mesRok3gjxG37GYokQVPXxVZFeYqGJL8gqzbsUmjXXjbM1UNV",
  "key12": "5k7GHcXDauxUBek9ByxgouzADRQtSzjGmqojwWWLumakfev22N9UVU7ibhzEZeY3sjwTPAw8rTgaftAY7YhbeKkP",
  "key13": "2SwpGFFCV8qLygBjLqStG2E97pfhGMtHGiimq9PuRHwq3sUUsd3UMqhFr2n7vLzNbpmur6Q91ktq8TrkA6u2Sex2",
  "key14": "26aQjecYLYYJ1zz9TzQ7ujbsYG9qHm9XAD3a7oyjiunQLUw8dZGcXviNrdzfrNgPtXasUAkVtunhoNwiepeMmXtM",
  "key15": "3b7Nr83qMvrn3F29vtYUu7Ch84YvGetwytDwDHeWpF96rmdz3KJu8VFMSsf94Sm23o1jn74bbZXzMFwH5gseqaxU",
  "key16": "4MH63RfLv2KQuuVSwFLAAXR7vru8zjKbzT2rSMozA9rN4ZhEoVHdEv1zt8MK88FPN68FKJfnvoDNfxzS9PEvYREN",
  "key17": "3m2tKFSqFX18F7DWNWyjSXk3B7Ei9e7ffjooYckZrERtrs2r8JQ3CbytcKu1i91NwBEK2qJ6v1RKRNHufQAXiwEX",
  "key18": "5h5cgvariiw8PjksyrUkFcUgynxBdp1v4vNdHhsq9cHbWP5vBERwvQcyqAFZtdvU68QaxBgvxeh1qk8U6Mw7uhPC",
  "key19": "5vmYQ5D7npXBygh5rTSVrgjyUVJWDtRqkrtXaHBTQBnqBQU47kA6cUJ37ui4KYzjNiAMcG4MY9G666U83AhrbMJg",
  "key20": "5Y54tazfWv4V2jKbLigomaXrve2EfVM7jBmBfCHqV5XnuYHzDese5f6x4tcivrMfDJG4vTpkvXLXitgtsXm77j1b",
  "key21": "4ehA4eYqjogj6qvHHwqgQH3umGvqMbBjGPifsSQh27RZN7RuJnJDCwvJp5aDX4zMXxLRpecbF2nnsitL3SqgXNdF",
  "key22": "2b7GwpvwosnGzmtqRan6j8CCuZoJdimMXfph29aqTZkTAUApRDz1ZUKLXBEyZGbHQRA4ytBU5k2g9QCrCKPJBQYP",
  "key23": "5jMVFfpKGyyg5oMEh4aBMXJfDz1VxvZng3RbjHJdGcTrZ2K6ooxt3zcSWY7rQi6jJvyeC18qvTzwb3YfXCKDSuth",
  "key24": "5RpVzJmJq2Vz7pzCmXYgWetzvbi3DKxcTqotVn433hdhEoEDcETecnAJNEb5zsGP27Dx8FA94EaAmocsKwFJv6C8",
  "key25": "44HewPQGwL51qDh1Zvf2xubaS6aJ1bB2GiTp1VitMC7p9stt9fGcHZqvZnsLfqxR6pzm19hUFnaRcKhocvNNDYug",
  "key26": "3WvU7YipibwDkLL2CjDWG1uCMJuNnEffEppnEhp9fHqoBRt9Td1BA7HxDKciawcocuPdEtYLh7Rn418eqrJZjwra",
  "key27": "yeBw2qNYXpH9cRb5JyK6MuPS1zG3MdgaKkDV1vByvx2fW7rXt1Kq6qsgdaLCpg5WWJYTQ3rpkWEKJ3iX4VVsySs",
  "key28": "5rQkiaPpcZWxoPJ3LTDGtn7mUa7KQvGBWkNJDtaW43312KYeN7TQzFN8nsv18meaFY7XG1ry7h8qGNH5wSTyHXrG",
  "key29": "3sLAahTfZ22zJrFi8wwMSxM9LzZe6iynTbXWW5HjzSCmsz7bZCTGSrgtxi8SzucqwU5ABDcYGmrpRt98UnH9Vrao",
  "key30": "dqM6AqBsYUtV671mvqTPyxCt9b36f6MBsAacbZBKYTVuEptFkRhCCECyskjPhxeSLqmMqH7ctQ2SccGVEff1qx9",
  "key31": "4JV5t7WtJe3tmwrVcW6aWJHD5BDreUr9oQBdmvmVPw6y6ZRBSh7iE9eCdgGE1dKAmGQp5ZfhPBsWVxYBSN92FKsS",
  "key32": "38SyUNYKKD2uCsBWZE8HdKWoWxB1Gd4ybWWfnCk5ebBK8sefjfMDJP2kJJE1eF4TYydHPQTLdHH1ELYDokzKT2YL",
  "key33": "661gcPSNVfWXq7nRW5Dk2a6USBCZj3qqoBJ67MWRufTpsvDHhqGJPuwSDN7JFB2S2pMtnZfQiJU4nN2mr3PopUQi",
  "key34": "NRfspEV8DyQNnrdhgt4egX8c9rhr4UGvgqR2B1rQXhwzjfF86Zb5qNQ8CG5edN8j56B99m5Lu29PdHPT69jGbx6",
  "key35": "xu8Djarj9bZX1Q7USyQb4rgHL9jCfzzYTMurViZFwpguvdLD8PS6x1Lwf1zE9CEzdnK1PC84hamYusgrCjJhRfd",
  "key36": "23kNKcrKEuPHWT52sE3wzdENrjVtXcDwjgv1BmuArRt2uVLWwfgE2sWDyXLGZzPV51fQr8Bh4WbwM5qTskd9An4A",
  "key37": "4dF6ytgKfawJbFTGCi8VbpU4RdyGmCfeSVmNkUkgp6t2VDXhHzueMHNHQRMstbPZDR3Eq45XSP6LA7j91AHygvUp",
  "key38": "2Xej6YuL2b6Q6L1xSJjVxenH7yjqY9rFKRr8VGY3NGFLzmcvhUFzXhFiiHTZqdhkHzaVdaC5vPvjavE6j4fXJdcX",
  "key39": "4EYqCeChpsxmyNMQLZurCigEEAZmarjP9bfw8t8Tev9epZjuetBDoyWWvUYtsbVjGjRshwYWWAXknXEjFN4fYX3K",
  "key40": "yJZ8AVHFWravXFUJGehD1oN9gaCRnoWY9ZjBwVUqXeHtaapk27R2vZuTGLhJsRPw2Q7kqpNjWdADwZMW53JpjEU",
  "key41": "QuC5PE6GHockT5Q3xv23Se1WCkN8oFRqvTQbVZPbq3hFTNSnb1W41bKWkfKNaAPy1LmhPY9jnpMvt63d42jmJvJ",
  "key42": "5RPUf5CA2E9wyT1YEf89sBGjWHo3at9ZXJ6Hq4HinHSbnhBcpNVwRhiqwHJSNgYz4D57HW19HZnAUDBAW6dX8tex"
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
