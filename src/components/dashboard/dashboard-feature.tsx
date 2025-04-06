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
    "64qad4PokZgB8g6ZAhFiHyFBnDzwAMJvHFwc8DaSHMHvoYmFPN83yCbuageLwBzfnS5aMWym4AfzWxSk1uJ4Jm8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAa4Lh3bG1sMB84eCVzMBd4haWUY6xB8ypKbdzutieDbEYNtCpfRSGbap9nuNKtBBFAGLmyLge3DnHAgd8tX9Qt",
  "key1": "2Sh23XE25azny4C1oNFLSkNxebfdqUqb4JNqUwg7dpB3oQoJCayR4kTjdqThFtR1g4LXGSdNGhzv9WQZVCNqzGFE",
  "key2": "4X1Z3Bq9YjhopCfyEXn7DLW6JL3insTXAaeaEeD88FgZRn4k7shBZNwmFEb3CV1TYiNoEkoPJ9yLUGBZ6QRqvcmh",
  "key3": "3BVaffUEHsYPsj3X8ATuWDNpM4zoRr9BarT6ZyFEa8sV1pC66NC3ZmKuR5HdvBZEnGdmupCK2Pj5ELzTaNjBLJ8w",
  "key4": "2Ek7ZnvRnjF6AN51fW37n1u1ejPnX8xhmgfGNQRRegGAXdwTspdFtJCy1sGzvfBnjnsepA1CXHnyWHJ8P6txSZZb",
  "key5": "3HH1PL21LxnxBzAm7ZFxwbdDb6kL1urmvGKZV3G5jU3c3H323rP2eV4q7Jcnh3uMkeMe1A7ytupEEdDgYk17RtjU",
  "key6": "2kYem7PbnV8twjKcYMpUqdhkuyfBE5AkhKQgLLZ1ejrbs9RbWuS8WBCVxDFHpWccxiBKe4GzpQT71F3EEfvyXwam",
  "key7": "3zQWkhdoswScWCQJ7W1HEB7kYvBb98depUFrXyg7f5DQYkXJHPyJkoo92ajHr7eJJHvavWhjbTYTaWThKEJbUmWw",
  "key8": "3wE38EWfRnpGfjNpb5gYwHRjMsV1RLA83PyRcwHgPrrjZKTEmrRtWtjp8tL5vKAgA35i4oQVZ7cxPsTUrjYCwCVr",
  "key9": "2sGLwcsbKwJP35iN9vEdshV3vKbMfvTHKubnx1oxi14oigW9jvEt7eEyoQKch6sn8MeYNkAGKAnoxWvbkwd8uezw",
  "key10": "3iyBAq6KiYigpD3Z3nBWzFV7v8WFoyzPz26CCxs5Lw38jNHEy1QfKMUVPmRfX2uH6DDZ2WR47G5bYbRMAVbThbri",
  "key11": "5bf3mzjuFZhq7mNgjE6FLY95qLCEiLjyPkUxA8unnsWnpEqTK3rPG2GPf8g8m8JTVAz58h9JLMVokz9wK9usZXKi",
  "key12": "52kitpKghZb175Zpj5BRPLvy7h578QiSiacsKKwrnwK1GmD2x71XQvJdTuLoPiW2CZ5uQUK9ZbVXN5WCud9LLbZp",
  "key13": "3BSxvxftz9nfC6EgitdzxZHabiXYfz5eEoe2SD6ji8UbwwJaTh4CPwnZpgroThgdJQPmKEnkYVEvrBvL81JSyZUi",
  "key14": "2vKxDbn1cZDot2BqAEYkGaC887JuJULaypTSCHNhVX8FawMY5Z2U6qZvjLJethKhgpU84JaxW9wmTdaytWjCWAPU",
  "key15": "gvXaiAdaoJjcCdeebVnEg6yqoVS6YmNaLmmR3KHQiVWMwzdp3EFbBhXgJBqw4f6iFijKRQK5mCZx26UuzGjHdzY",
  "key16": "4FbdxCGRQjqn6aJXwdtJ8fjAcpid9HmthFdi5yx3NVWyzmcGYZ54RUSAY57eNQs6Ke3mRH6kXKQeUtQ19dGmCZK6",
  "key17": "5uqkVsLdEENvXXB2nDLUvEd615nTcHe1cP8AkMoBB3KDXDcsMU2frW3Teku3qxtUGi7K8VxtjhHyaehgKfwU3j8c",
  "key18": "2T9vVkjXJiZmiTfQRZmPeQKi3a1XsLC6QBigaCEQGZvRctwCBfbX8E3Cp1C8VeMnQdZGHLgd5FTVGjbzofDffjvt",
  "key19": "52m4WtDgWqU9ymDQFxq3b2VYh3N8d7yHUbhUFVq4iNp2PbnHbkBxrdHLdVQHzpv7QCRDgBq1HTkkGsiMr5rS5HM5",
  "key20": "4zgtsfrWB1abNj8A3t33LGJSh7tBJJywVPqLk6R4hZktKgqa1PpDWWeiuQg2oNk1HMn6Eu9R65ugGEQ7yyBfASVZ",
  "key21": "RePCQFRaWteGn67jVta7wRkvHweHVjyuaL6ciVWKW3QCem9D7rmQA1AxC9UzDhEEWJQ4iabFnDfgrYcFWYuKJ34",
  "key22": "2GyHtuRLGXG1f5YBteWSJqa429rSECNLhgQJJyxb9Sn7ihbSm9LpSwVgkrGkDXkor8LpyyDNUtR2qcsqFNDhdDSx",
  "key23": "5TSdofox7NZrtcZRaBKXguTVWW37Z8zbv4C2jK7w4vkS6RWszRdsjmS6AJ7PQNyPwSBi9jiyQAnnQZaoxSn4Lhtv",
  "key24": "3UCA2k3bpLmG2gjoW8Aey4d29y6UdVDedR9SEWbvj7Kq4bp9bJwVJuTinVJgdZctMc6XNtd5wWGScJxQuN4mTRwy",
  "key25": "4zRrpviTV6UJ6y7qzXVGsZ2jHP7T3gRjW19cNz5GRkETn1HnhRaVNRS1b4Mot57sRjkrpzAJ3qZ6b8CMF3G1i6a3",
  "key26": "4zYxSLH5YfS12ArE5b5hbcxrSpjGXniLcWru3c7N5xTCvq5kiDGBKNMpxddTCAiQHTRxfiKeE1pR5YWvTFSk5ZRz",
  "key27": "bpYhCiPG2Tr3h9d14xvyVozdnZ5JXJqyysBkKsKQrxV9AbmDauA6AjRrdom7ua2X7QHZkKbSYpzZSjceSLP5HWN"
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
