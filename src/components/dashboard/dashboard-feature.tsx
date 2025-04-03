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
    "3X4pqNTvND7yTchH1LxT4pzawu4iXsQazmaK9LwJoErjcXsBMVWL9mxwHfqfxw7xhxYjCsSA9g6H7QC1EfeMvhVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tLYNLw4hSguJp2zpToFYHmRjmAxGKZYEFTeZbukthuJoZrVEs5p2PTuHnX2sW5qRxSgc14z7WZ73R7ywpEvVZrS",
  "key1": "2bvxKrVykDkcYHwxE3JXLDUjv8YZvrKqVWncQLta3oLNWJrveH3aaT6Y1UXLrAwSQKhoifkM3oNr2cQFQJaPEvrX",
  "key2": "4Yb9xb1RJjpC7JgFUoDCUqWBGUJwiuv7zVEJv5Z3Gc6iqFQ6GiLbApEguMQdWMvdcGJL5q8Q4NRs3rpZjdJe7FV7",
  "key3": "av1udQURpfjrGRyK3gFTDCB2iqE2vXDsQ9A3cz5NpyGPTtjunTN44xUoZ3GczuYYhrZWawJt4StJAqLdNptSBdm",
  "key4": "26oiFjE8timGFavBZMz9qCiMq8ZemzymkYChAgB8cBeaHvUkLxcwSgviwq29rSjWHxrEUdZ5pUkG5i9A51T55kVj",
  "key5": "2LLFs5jsoH8gCwFGWhACJeNiZjfCxgQ4QbZ63Pt3ivWR79CpuTWUhwSTL3cPedmvo6nALL4Sri4UDy6v8sp43DmW",
  "key6": "3GEuaipNvYyTACpArWhY6yVgqn4mLNnXXhi71vsrrspXgZ8mcK8veLAazCezNWFaDGXX6R79WZLXHd9BmJi96Uxb",
  "key7": "4SE6wik68hzNxmJHcNGgFDaJBVFgPMqAXPcHbxZr3YKXdxc85RkRR5VzX3s8CfLSHc9qwE2M43PmAakzfE6xpVd3",
  "key8": "3YVBQc5aX291GJw6D4yKKsrGngGHoZxewDvdNyCaiMN2H7HqgurGuLvxXc2tTEuEY7KSbiL3URRYUhtqcewEokVN",
  "key9": "3Rf9kRUQew6Z5dAgg6aZg4pnxE9onapsU2siN3Vy2pru6ngUwFAbFZgWNYBqqpx8vshHZDXmgHS5pASRAXKCkk77",
  "key10": "67JNK89XBauX8wf63RVpbDEcW7gRUpeqkAfHPHXEaDdYY57f7nZbk42jYPp3T1ocPsRAtvBCk3C57SzcqdhuJAUX",
  "key11": "2MkR1PR1tPcNzwy8s94Kk6zA7B1nst3yHY4Ro67S4dHUw1TLvz6goLt7c1rDbJPryLUoFehj82TRvAzGoJChXuP6",
  "key12": "4qkcbC4Hjq4ZgU7s2KaKuK62Z6QRJoMFGKzvgCr23Kej6LdVUMcmXmNLgvQ5WZFXGCjeYFjAtdKt2h6vrmA3CFrg",
  "key13": "YJAv7edwLpTt7QnsbH4as7WBwq1V3Zu1cNhvqHTCGiJq4i6cx13UU5HEQQae1VNuSiBw3VViyaa1CsG8Pb67SJH",
  "key14": "5552a7x98fRLjP2R6MjH1ViJyeUSTtTEhHhA6QKJz3yRyz5Vuhb7krF1DoZ1nRLCGE4AJk2qPfME7gCrcz7zZgGN",
  "key15": "3gRcCwubqzx6ZXLxcVN5PbPnQq9rK3eFWcjPKxYSiMJ1KpoQTbHM5z1TH8hSoLUFJhz5mGmwSwExPGdh7mfTiPzb",
  "key16": "o8vA5zpty7Tk5N376j8RPKZPpBFvakdGFhU5QAnnVXPHPPedu8VYhfL6xxxta1N4gczkk6C18SVnV2nRZ8aLstv",
  "key17": "4p3SAawt4XBZ77sryNp8Npc6WCEo6XXYrbKuR4ZMqFaZYHME1oLiS57izEXNVEoeXH74QVFZXTiAnShLXWCnrFwX",
  "key18": "2wDNVaYNpw2TYbH9a463fWf6eQonv2WujgQLY9mTuCe6pZZdCHKSTJ2D3btyF4gj8nEkxuMofjAhFWk6LV8zU1t2",
  "key19": "CMaS6hsvdMkyHynTVToHjDspLuqk3u5wXPT2ABDia6iyt9nH9gq4wVgRHCww4deZkZdQrqM3LXQmDrSLpMKWVtf",
  "key20": "2rBaLihTEhBmZBtBv39pF75SbQGuRtgAMwBQbFEvpjZu3NUGns2Q8d2R6ghjJNf7dYYNa95AXmioEaGjGRN1omQJ",
  "key21": "5MoN9jTcmQe3H7CKics4NZcfspXK9Z7mQAJet8isqLMGxzFgrGbVMvKJf61Fh47WPp89HgoVXRzPUWXf5Go8UZ3F",
  "key22": "44HAWAFbVpB24Mf8nYNWgF8Arc7PkGnaV1Zgw7n7MMoqvBDFt65G3FdM6aMk3ToxXUtQhSrMkYG4GDQcxb3Q6gwh",
  "key23": "4tGPzrxvCbRorCV3uZiwyDzToYWxw56jhD5786i5VFmZH9YkAiZMo8gFYNwf292mwc3Y2qfZDaqjfmtgJJWVWBat",
  "key24": "2dtJr5c6ovA7orzHD1fP6gaAAu5G4rQPCJc3S3zgDxrPNPjbY839RaQutEKMJ42duhBHpSRz1sirSfNKH5V99tdB",
  "key25": "63Ft73kKAFbBvK53xBvzn5onhpJ6cEZYZQqg3w9CxksJH2kmv7iQiYzQ3PDySX5KteHgnJ2bw4HmTafT3ZXGfo8v"
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
