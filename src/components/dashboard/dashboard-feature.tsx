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
    "5B9KadyVMdFmdC85MqmHfre9j4Y4CX9AK1rPyXLswwuZ7Bw3nH2ditFenHyVX91aJgGesBG3SYyP8oYSs4f27jDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V44e5qnW7dBfHmzHyghT1s7dQfxEEDQ3GiUt5b7z51ThgyVJFhQ1ueU8H1p9Ba5coQqNgbd4L26GmyZhGXuupZX",
  "key1": "3YgY4DwyDGJTR9AeFz8fDxJPXCd9rtHdCx64AY6mUpcHAprXVWpFDbW1nN6kPEV8oaRZCPTAfcwn8ejZgLTN6Vb4",
  "key2": "2FAsAtiVERaAJRMK3LNUgEG2V9ANfC32kpLmzThtjaZBfuaihiwJ6JWXF9VSszajHL2SuSEgYuP7zEBoroJWUNqK",
  "key3": "3DBV8FnRXCimey2VNqyFrwfKTTKPDjUcf1aXy5LsEp4cGFCKnZeG3uCqunCSkSMD9i7eAVuP9oKGXG9gutbhgXhU",
  "key4": "5o9neWBJy75bzvB9cMaZoecmnqK836aYejTpAM6pSsyRyfNDn2VVq1smAtgYAzkQg74RL6cUJzqwq7oqp7NTGJdn",
  "key5": "3gjfhCxGcQbAqHr48P2apXhKYfQk8d95JkUzi4o7VWBH2yBdNzZHLbMQW3ryBbKTvd1kUrDapgBBjGSxVMYuJ4Q8",
  "key6": "2tXs7MoZr6yjPK3yEGPu4Mf8x8sD5bT2uhsE4KLKJNf5Psec6RCeH3Gn5LhQeLfoeospEs3vcvbH217Y8rw66qpb",
  "key7": "3nTBTGibV3GSmUu3xshuBEwhjdnLm8BkegsV8QX3ecaDYwgZ7bYdVJnvFdKD82q8mHx1a4xe7NzfN86FhbFbem5c",
  "key8": "5BxxTX4oyKP1tkWdRrubdjVfA5F4dAqgbM4gjCQw2zHLonTqYThzHjxqbvJKS1S26uxGhc1tXKEQYWe5QNTxZHMZ",
  "key9": "2ZwBNWhsAXHeQsqCS1Mkxn7WLDgSJfxZZR7RydceqSXnobMHVXyWL5EzLVQHU882U9c2pEvkez2Xg5AkX7wxrbbB",
  "key10": "rkcsnGHkmEiuKzs4dZQuReb3rAjZfLLWKwNKP2zJFrqyFJTwzHtJujykY5Ao3w1K9VZGo566BGGy7wcufrhwKDd",
  "key11": "4H3HdWe5iKAuXLxLWSdAHpNTZauPQ3HhDijbZHJXGaF7C54YzrEbvpdwrhTYYBJVqcFHtDa39uAVBvodMCH58BE2",
  "key12": "LGeH8N9qcP6M5PQ21iHD3guDH1tAs1ACrjcy4Yrnd4JXPHdySME2L8pnbYoVMPetXqZaxurSrVxpL7vvyf6pLRs",
  "key13": "2mtpkFaskntynNf6dycvTHZ66bmDbniH9ovoS5K3RzY9EdzhWS1dsFSRPtCcL3V6cruyxJAYbVCuoJZEmoY5vRCZ",
  "key14": "3EviJkRaRsRbXQD2jvJAo48ioQ9kBYzBUC5Jse6Wn7zX5nTQJk81jaL2VcCMAFHXVsfAPJnSSyKnFNAtxNri5pGD",
  "key15": "3G92B32XxbCinPmGTqUYsuFNiLjg3A4YZs9rKGVxGueEsVgekDHmC25MkZqQ5btG9EKKYDME7UeYoG9ffP7ZnP6m",
  "key16": "5ydDua1ugAMQpRnuwdJ7q2Y7Q5a5jN3LMYcYzPzJbmVA1mSDyhzeGRHqiGBVRQwdFZSQ9KuYCVG4HTmMQnoqMqb8",
  "key17": "4Zd4ytfXPHvBMiNy4hBDYgu9599SR2igNjMCscutizGWWL7PAk8yzs3n65oJSeyvE8xaGLgygy3svYbdwj6qMV25",
  "key18": "5VR92kuCKSfATSSy2RLAtdUFHSR3SPF6qea4XW1khMkW5PYmyVHUF1bpVWCnUF5oa2wTEdf16onZgPE24MoCcm5K",
  "key19": "42DA5x9Ph7qSmGDsFqVfbiajjkMVEWN3PKoKKBtG381dmMSE1As8Xz5LzkABREDTDWdJTvQofvoonSHFnRnKbtgj",
  "key20": "2aNScUgZd2JE8XuqCXRmGeRVCbd9BdsG8nxm1XYnqb1hvRoka9o4Ys8TyjoDA7RwhXjGRfDnc2JFMNPosEC8bZV3",
  "key21": "ZjbfQcUkK42uBUeH7GAFrzh93rdNb8CSW72i7ZkVV7LhdHj4moALDSWAVTXd45qweXoaqrNx6pEcWGBRCF8Hnbu",
  "key22": "4RUvubttfCePFN1zivbZ1izFgu33m6gNTdwoqAbBoZs2CtdjUm555Qus4WGKyRB1VwRe2jWFuwPmNre4SdUMGd3D",
  "key23": "2hBSdTLbzQnM876F6cpsZoB1zqrMkwuKeyjNVPJVaeZnAocTTjXGZeiknX9Cz2Pv68C4AxV4MpzJE5TuDMqSDbMN",
  "key24": "E5urnwzYpD8r6ARYsJMASpsjGtKPh6KMUf17RWmKiN4UQpR7tGdyMf6xRiQGZNgxJaJW5TmC6K5dkwnfMvu3Aj7"
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
