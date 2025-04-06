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
    "3Bn3tQ6eDcFn5bUeNiSyJhacZ8f5yNsy6ePEunwNmEkNcM3wjXAnLjwjg6Q9qmXJnZxeH7v8u1GiKvSjBLzkbxmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ret4aWF2A3rAM66hwrcpghAHEdFah9PeQe9U3u8XqbRq9zjC5eJFgxSCTetZDvJmbFbHYKs6WTS8epPpEiRRj7D",
  "key1": "3pUBvWTbmEoKnFapofwzEfoyuB6QSdfHcHRfDbizgM15aD6pKvJpSUq5bPhaoXwJG1UErtAnsgjBjymYCsVZWLWj",
  "key2": "37tot6uE36TEvZJy3ZdzfEgkACKctq4i2dLfk7kqybAv8fZe1q2ivv6E1FVrV8coz5Pqb3dqDHKDCSr1bw1ztaUx",
  "key3": "3C2eQXiHWLuSeEVcrMY3WWf4AjXHc13s6zUHNLpSVN8gQbu54sw6Ht6m3iBWL9TF9KDhJbk3bYP7zDosdomkFc7a",
  "key4": "gMFTptwpPSnN2BFb5P2jcAMsS3yyZwAeqqdRQ9RErzKJtiE9uFYsrCsFLMmefy2W19KkaZE98vFLeyDoHMLsU27",
  "key5": "2HK2vNH7XGYaiHVH37dhwUeqYqN7pcKiGGVcZDoSb96dsXbRXFQ13pGCjxEMpMGf5uuhFZp72swYbc7Fex8D3yEB",
  "key6": "BZFKQEgZSmKszQ5txqfDxB3uKxaxGrrA8SqtA4GaHy9XiKf41HBD4JNk2wMN7JGsufNsYKhR3dcqj5o2G3H9cjf",
  "key7": "3YXRPVCUes4T7sR1vX3FzjCWvgDYv2nM422j16Z4ykQHHjsTeDLEaZJsDL4oGa7hXYypcCzgc5fQAp7itTq7UDBN",
  "key8": "4NM59gPEhnQzVdUHWmjfM9sp2RJQktohVGTxqekiiyr5GffJBS35LrjGz5HDJcYoh4qWsjmztcUy6gs9o4j2je2Z",
  "key9": "L9LWYjpyvhkVMw88RWGfXHLeSgG7rwvcLLGtBavLMpfRNY3AwMYAhphFRwX7ZfggscAWvt8zoMPtTxTvaTZHkJi",
  "key10": "4Zs395nysztskkf5vi9bCeyFDw98S69D42x4Rtk3fVAMefffDLc17JQs8exsgvi1wiYNG6g3oo4YpeqrPoZ8pC15",
  "key11": "a5mtbkRLRhcmysqaJhcbrQ78nR7JtFu4k4vKNF3Lce5ccbo6LwmWeVdpNQk6R9Hm2ZKvDeqc31dtwtEd85LwWub",
  "key12": "hUX11wi74BdufxUr916tK7YCNvC6bbCZbMf47otH5SwPdSJG2aZMsXmPWUfqx8Dr2viNfdAqNKzr2XWRJrbkGtJ",
  "key13": "5zTgnPoHgPirkzJBBAZCAU7xWR4w3CokQ3SXbgY68wJkxec7B1NpFaJkcbVmBpgMSDSPGqL5TLzbYWBgNyTBhsyQ",
  "key14": "3ADEXkrdoPURjuvPTu8g8KgjKVb6Y8sQZqnBxUwUvbt3gisoKfWfznuiYtkR3EWqcwqwLSv6jCzL7V46kwpJZa8z",
  "key15": "2n7R8vJ9h7zGDfJpEqFdcDGJf8XduDkwfK5UCk65rWjSBQdJ5cMNoruEdqiXNxi2PC1yd93xRxNiyyD4XPCDzuJ1",
  "key16": "2gmdoDcTkE3MwTQAAyD3S8pM2xYaRioWY6yHaMZEN8vHoyntusqa4NU619u3owVmUuKwsUuVydUgvtxEzWjUnzi4",
  "key17": "2LNKTvMgy91gKAAcCEEMYKStc7H4efeY5Yppo7wNxeGFMznkFKquyEUKjM2XV8Ze6RUDAXj5wUDyDKXVMGiw32ry",
  "key18": "3ZewjnvaLxbRKKWZb3UH8AR84nSbKojXabRRuQPGYxo2GarFumqkMUEmpRLeGbKiEMUmvZuxScKayZU1uafje3nB",
  "key19": "2Q95WenLEUmyVgCC3AVTxu84xBfDniqp7adUqjm4d1BPUiUroztTvNf7RH6jBwoRe99k6DwU7Pu6VQKxE4iQKKqb",
  "key20": "5GDPp46VRHN8dmiqmPhK6RusQ4KeXjNZuYSZ9HfdmgMhJvVFxrvrxwQt7MVHT15FaWhmsumMNKomy5VQFVR718yz",
  "key21": "FzqFimsCF3vUpDjsgYRmeR8pJZA4Sr17ZVF6WsGBarV96cEeWuBYcr2tiWGMm2ue5uC4JUAzt64taEGhjZBqRHe",
  "key22": "214BkTaoVZdamYiaUTe7HZ9DzLfiakTjNPVsEstfvVr7dAessrbavhWYFfYzg7SPMqNp754XJbZBMN3gwUqALa4y",
  "key23": "qBneA4a56ERhaPQBiNYH3K7qnRDjvpufURTyypA3J1PHcG6VG83ZJkaZLnuWYrrXdamzmEQpiB5L2mxgnqqigMT",
  "key24": "56kutc7hxWS4qD3D9ThobramLqjnhP8QTpoqaAmVXCGjwGUJH6tFW9SyrLxF25E2a6MtvwKqV9Dign6eezydRpaB"
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
