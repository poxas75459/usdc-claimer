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
    "4JRcg3d5tMc8gntE5AVoEi97TehAvCBpnNFnaLnThMyqSXj1uRiSkL7VZUjfowSs1CqDuQFNQxpAFGtZMukqrhVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cNoeQ8S9ew3pQRUAHz6qkR59ku2SC7ViezjbXZAxvWHkGCf9Rt2rzTW7hDaNKKC6heFYR8nysd4gXNBefoJV4cT",
  "key1": "45yY7y8mMdUJiPohwUoXuDSXsBDnBJFtz9AxNqhpgqzsXazA6YQ7jngJxihddwBTzwW4rJPrg4XhtiqVwdySE1Z2",
  "key2": "kj4BMgnsHaQuZSE9cNeJeCmYssZvSaihjKo9irf53dpoDa9ofxPbXnzAgFDgS9NXY6Z6huWYS1EpBcnvXZZbfyS",
  "key3": "44bAv3pDGCA9AaYJK33MajBkRmrwAKu21iusivhecJGyAqSoKmMTtji1sam99CrLGRFGj75iUkiA4482sfQkEreH",
  "key4": "3cvS3uTacWqtH19Fmkfzcyrn4H4BtCgz7goS1J2M2SJmJzxRRBnUTQzjUL3vE6KwXeDTB8AXJiQNaCaxShDEdXxa",
  "key5": "5mCbdSwr7kMPb5nGx7p7hhJoLAxsawhQiiZTF3jgRN5TUgf7WTu6F7E3UYfvNSQiuPpNDeqBmQnpxoHsayjvm3as",
  "key6": "iL9asnskJzPh5jtJDr83XwvzdSARVdLVjee5ZVrifrLZt4HC8RBipsH6hCja86o2AisdieP72pDXdQRLdX4Thgw",
  "key7": "35QkSQxAv8kmh32YD1zbvqgQMkQ5yY4wwc5HG2mJPxhM7PiDMgHqiLTwHeiYVcWk8EXmzf5QnEugJavhC1o8QxqY",
  "key8": "2vEopQa6fZ2emNJ7ANZRBE2UpRRcRbrjY3j4PGQzXBf716Z1VDqNjWUfERFcerEfe3AnETge7NC8YqFF23zH1HWK",
  "key9": "5C18Zw7Q3Ai6aMX9dCd5HkAvg4h5XdyDGVJHKgV9LjuJmS5EU4qJzpkwziGHubzpgGeSEqzjtHWvu9TnLspecTqb",
  "key10": "5brPQR4ZZQLheGNtR4LDENL6PgP6qNoma2grrbrqCynUW8QDoRavndMSjxNZKNVd1uc6pWLCLPBiPqngmZ2fzqiS",
  "key11": "3x4dQyoQFhE4A3bG3TjS36driRrAexQEpqUxAVLwdcdqwpyDkGfRfPsvjrXskPX37pxJ4M2gwTxLCwEwpi6yxof3",
  "key12": "4HLUZcjuRrjhwvvaRb7tS7drGAGjz8gAzstKu8XxrxRQm7Xx5xhGnVoyuVkiyW4qdt648wFSV5jMAcacgNoTGKzi",
  "key13": "4vToxoBH3vZuRQdzkJnEmxwPjiDT6Z9SLUEtwCRd5UyPqVz9ZHvauxShja6fqB9jZ2nDr8c93Pbj9WZbEu1fNAkJ",
  "key14": "3Ydt7aTikHuPpruaNAzubJf2zWMgiky7EgJjHGeT8bP5bxeQAC916g2ofmRaxtqf834SbqSAVNrjZMJs6nspZrkU",
  "key15": "5MbrnBxb7RadP4D3xxraF99AYta9CoAoddFAiHfu4yxyRqNX6aJKWrEzKTedyFwnBjRdG5KXvpATMeufjFJGCdxn",
  "key16": "61dAM5UsGDVQZhZtetscNq8kTgphU9w2AabbF2MFVfJDpGRtun4qHrZhTaEqPTC5JiP9D5pNy4t4aZMy97ivxhnE",
  "key17": "57GAcWc1Jf88hAKFAb1PA5LehENhFJ2W8SeoU9yKMYXj7ggbv7eZpvVfG2KC4e4B45WMH2BmLGPvmY5k4uF3q5Pr",
  "key18": "3NN44fu7VxuDmUPAWidYALkFCAab4M8QDgdqsk52tdqbH3Lek4DMB2LfpN669zdSCvtdMmK4zab8uBPgWHc18vVw",
  "key19": "3pZ6PiexCzCXcPJpTcvAA7WAYmELmBmvvfMv5jCDoK9GZ6Uc4GaQsThvHiAxqDWaEvJa8E9zHH9Ni6jZAQRvQJRJ",
  "key20": "4XksSFdSMbC2RzWxhziyGi4H1ETxZtZMUphDM8UdPeL8j3LQ3GUtNGJJhTUZTEVvTGriu2kDWsjj8buooVVRakZc",
  "key21": "4mVdi2i2X9VskhFTm3eJrbb9FLz5U5gZQnjBQS9JQdDhh5Xvt3SAi5NbvDLJ32J66AdiDUVMNLkDQkrMsYN9FsPy",
  "key22": "N9NhVqfyeB1hKxk4QV1ddPkAQuwXdHmfGvRH1TP8UVqPf9hG2SgeNqgKtVR7eFRaejiPqxepSVxcVUxujJiFecx",
  "key23": "51ESdwC1vxM9fLTwHiwbuVYF86CREXTBZbn494AonTBL8hevbuH5fK4YKFNdafhSxubbGoSDQLGLoqirnnsAEUJN",
  "key24": "2QhrbpcaVKkr7sb4geqZKoreshioZqFurn3eRpEmEsTxQuoMa9d4SL3rb9dQrt4tDzWTzJwbbEMZA7i8hnXCQyMp",
  "key25": "2gWgvvA8gZY6ek5AsTKbBf1V4SVScKjqRSCBBHEG1Cq5fPDebJyn4KnMkddsbNEXDh4qzL5c5EqHhmb2X268yGpW",
  "key26": "2hFMaa5y1Xv3vqmiDg2pejEcgG4Lk7cUbiS3eHcJfPusruBFgsruP5geTKn27xLQZotQu1CVAwURmKVZULuvJLdi",
  "key27": "3YPqBC9sZpaP6rXhvMzNsR2wGhAJJVYQh3UNRKN2vZkeVkaxUxYDfecwQdUmVoB6zg2tWvoMZkQmrPjJXozityFS",
  "key28": "3vbVMx4guyMojAQ83nLxjgEQ2Ex6vTG3nT5wN19Yep9BAq3LRRJyLQP4wKAhKcjPY13YGnARrivQKaiFg6piACRM",
  "key29": "2NCmHzDdpk6se6XvwVzjP6nj563AuxtEGMEXQrLBuQNZzj2tEwmUUr2mP8AmRJbqMbcK4rsnxm5qLsS54EKiteLv",
  "key30": "5t8SPySCeBezFLTmRdBZjeWqjDeib3YNXH9KaTE5o2AgwYc5uPdXedY5LFPcj8129T5nKJ9vRxQnqSSnWTeqTPoq",
  "key31": "3s7C65hk43zzNqDJqtqAZjJJqRXB3oB1jHciEHei3uUvzX89R6kmsjkVzXJMGm5mvNowert23SoSCek2J4nyyRqt",
  "key32": "3E58N9c1h6irWxudeMaZ9a26fX9EYRVuw7ABhtZeRccpRL4YjTCfyAymn1kbxmjEfwisiSW68ErXvUKczCV38qJA",
  "key33": "4fahaHcAFcd7deTkLPZtwLjKoxpz4wc5DTvJxLzqvnA1A9DunguCHCTVs8SRZzCSgkuvivaf8rKhAcuRvuzUBhWE",
  "key34": "neDtypCF7s7fJmti4aoQCpRMknKXd5sHzuHiNfn7TFtrXq66qkEVkaouBaapqPRPkXc2qq1ZxCkhWHHMmJJ7kAt",
  "key35": "55ujc7gcGcJjGFMzW4NTKxo2am7XtmXZabz5b9exKanqguCnYHW5oMuNSRzy2d7NojK6fJg3aK2B438sQAe9PqyG"
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
