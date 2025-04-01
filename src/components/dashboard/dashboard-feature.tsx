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
    "3yrpxgpXsrvYj4tstbp5Qh7BGuRJydCn8qcck5getHdgoe8r3GzmfmLVaMUdXNCpKCeGfQHvRL5xoPEA8kEBorzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b6x3y3rKWfdhbVjPQv5WYFV8tebSkvKeXDCD9j2fG9LPpzuPpXsagJL5zVTMCoo7ktMsAYg1JAf7fDjCaNa8jDx",
  "key1": "3R4RVmeGjACDY86Jn25deEX1dS5BLBCgUCkQ9uTNWrSiw35CM8LfrqAX9ZADXKJMng6n4sEJ6wvLQgdDuR7zk89C",
  "key2": "2qfX8AsSwSL32twVBy5g8CFGd4zL5PzwzX1VtHw6F96G71dhthXw13SvgNfv7FGqh4GVJ6y7sMxWdW5heq2f6dCp",
  "key3": "2bJp19JoJMDQ3rTuPjz5kXph8EZuRuDyK7fYMotmmxWL3pHoGA7KHJWjSJngkhMieZeF8LW2YKprctTKx6ucXJwF",
  "key4": "4K1Tuh7BtszFLDZDYjpWLPDMMgNVoxMx3vqfMynLbaeG9doHFS1DWWWpYAhtGzU1frwKtf9UUuXRhzeqnCgwTsfN",
  "key5": "5qwJkpK2DXab1AXrkwuJHefJsyfiHHEaxpHtVNEW64i5PNQjzueuPn39T8HpesXUX2QaqiKac8RU1YFsshSKCfjQ",
  "key6": "5LNmFD142gXgDjkXLCze7CJhC1ooLfYDeNvq9rk8pHEodYgCu9EgjFs9jqu75hnFJTFhxjjSugjwPbrShKHBu4xN",
  "key7": "3DuXFfqmToF5stzB9PhSFuMCQQB9ZBqEQUGoXiUvwRhZTktWVBZkEZyki8HMZGyy3N2v1nbsg2GodAq6xMJrhga1",
  "key8": "41hYUNrEWecCpTWdvjHvS3wRQNkm49n423khKpVHm6ePxWFJw5jRcaQkV27wZSom1qqseWP4honusgZ3D9z34N18",
  "key9": "2UG71Bz3rhzn7vcSKeYeUPfub74jwTLd46o9i9mj3a2X9YV97smbanmxYqR9YrnxL28TSKiULqpiy3Vw8AP9i9kn",
  "key10": "7PQBQKMHrN8ezScoagVmAhWHyjHQunDMdn3AbCHeZgwPCtYhHnmMadUY6DXghch8dTBuVZzcsd9VTxN2F5XafFy",
  "key11": "4qE2dzEsfyMwjTVeTTm59F6cfMBR3MDYT32iCjdmYwTaKaxFsj9Ai4c49eFraVTm8kAXUG3ehWtcempixkFipiGJ",
  "key12": "4rSrgwpKNnDfAF3HEFpK5QoqbYFG8qaeKAmhPztHTqrHYDzu18oLfv93Z4Y3LLaqrAdjoryytV4Zc97Mc5hZudph",
  "key13": "D9RS1JVncgo7LuprssiQBZKc7fPf6n9FmrKVXNFxWTkFRkZfm9J1eVe8hcG1ictSsfn7rrbYaXHW86DZQtRdrvH",
  "key14": "2htF9zrvNd91WSsRd8irc85b7wcxNFGfKrrVoGqbXjcZr1ZHsvZQFBpAVtE2nBgaw5igfHd2vxxsCRdhup8D8Xb8",
  "key15": "2S8eYeKFYLTMAmW2s63cQVvYwb3L4YDYnwkVXEtRvmeg3H8s71GBHypr1CPyfo2vpVX6zGqJFudYRhfBujapSdfA",
  "key16": "4YgJwWds4k1Y1RBJ71VigngT2gCyyH82kARdEziCzUHZuVsXcpMch1jd7xhRWqz9SoyWqfqmamJsPUvPydmFjMKQ",
  "key17": "3bvDXQZL4o6BzdbZCKj4RTtfVXHEoHzjS5WXve587Dm1VXE77oaLWVhPdDTE7YpGkxukKW2Y1UsYXvvaBbNnBr9T",
  "key18": "3Cwmnhrm1ix4wEtNDJ7ide8jNagSbfkN2kZ6UGLV4LSNa2LvB7vkM5F7AtjLqEgFLSgFwHGX7d32zA9GiZeUJJMX",
  "key19": "4PUayfmZPfjBwR9m4PH3An9dpjJ744EpBaehC6MuchzwFDtFAwi9rKdnHfar4ANC3t2rkumF1YM1MtbnyoS3zQoy",
  "key20": "59QXTDsSzYgTDMBtrThhAxBYYmzq8Bd8KmzAjXyfBe8xgayEZV94vPZ2px3mMKkYvGcjscJYKWbTpzVuGa7LnZpt",
  "key21": "5pqAKkCpzqf16bnsjuiAeAWrNjMtA5ZCK5EpAKupkT4GGSvWYbKZWt6E7Cn3LQ7fBVMFqH6ZPqXfckRBLhXTiau9",
  "key22": "3frqpUfSG87cDhaTcfnaSYv75cnFSfx3TWH6txRYuxpqYtG8CDgBfWCs2mLkCW2CEomTCJpCa4WcWYsasBSDKjrk",
  "key23": "4FzjRxGR4XMB92UrFAAKNh89DjpHsjYW2btksYZpfejupFoNPfC8emkaz3FViEDLXSovvAb3PBEz3sMae1h2cNuz",
  "key24": "5TuP7PWAmcFvw2GKE3MeYuCiqdnq28NNJSFJtQ7XLBmx6qSqnBZ9HVsbqAqq3vnhX9msQ7kZm1xsf5SWU1tt6Kda",
  "key25": "zK6D78EraZLcqAAXzmQsFD6WuAkBhTS5yV3Pju5xNvs9DBcs6oQyeRDxNngo25fALMQzFoeYY9n47cRcpKYmMQp"
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
