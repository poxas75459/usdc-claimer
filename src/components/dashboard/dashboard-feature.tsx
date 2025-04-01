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
    "ApXfSxncukaBXh5Lgvrj1a5rVh1vEqf4yXx6c1bsnG6ze959CnHynyJSo7VTP7EkZRHMnVQ7SYbfN2nqiqp3F9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VEd2NZo8tXXMQQt9jShAcKR2KGgS63pXSdBaK13ZBSVM16JjQiGEttHgg46hjMcQCayNwKfh64cfiraqdzbUWLr",
  "key1": "53ekpwzWm3CVSoR3suYkd7mVdYjhkebr6DGzs6JCjfZ96h4QM6xr2sn4S7LbrLtqtqxbdcgbje1F8cX3rhDtouQ9",
  "key2": "5kiRT56qNvhByXM4qK4CPrHeouo45Tcp48Xs9wqgY5hWL65Jwx3DQuc43jEuXfsxqPNaV5k3RNnat2wYZZVvajLs",
  "key3": "28nUz8J2LPZY6phN3uy5AsfgKsh6sPjEHtPR5XoxBMQoepUEQtS2YRiDQrkRGayHcJfGZwvtaxjuX76MyRfJL5Dd",
  "key4": "35V95PVYt3U88knepN2RD5jXMHBJq8u8m9p7jsXMSAzDrGizhkf2uPQr5T2F7sCdgUfLje5f7ZqPKAq7VeKMFbBP",
  "key5": "4gF8uyzXFppi3nXvGPT5awTkX6ivfcnHMJt4vhy1QLJracmB7xUiVU5DzdTPsL62RzPAUdM6zFCvoHSdtmuecbb2",
  "key6": "5Hx8oJbGWy4VS5FrYquqXPc2wxkmdjYZgZkBPmSPVWLCh7nAFFMQVRc4tpPbEZi2md5Y9YJR6Z3Af8bWpR6vzHeZ",
  "key7": "4voiBny6ihh3MG7oVZT8R4Lmt4C3MHpmM1QbLxm1GCUgDzRcgbv3qJ2ZJE6HsV5aRbGiM64ouKoZ39Pdfu5bxdUS",
  "key8": "4E5P1fjJvdzt9g2qWELUrFNx7jih5s3MBWFoDgbkSNGqAp5Q97BxyTJMsJ2o8AKpAikaB9zrDcLvwcFLAwpAMpUY",
  "key9": "nSY1Zxrb1AZgnojpkV7cVE7HfFfPonnmAe2sU8jeYfUBBpwjijckUr93ECQfVeswWo855CaMp1WdN9hhiidniMw",
  "key10": "5CaXXUjiAi5UUD2kbioASqc7rxMucMfZSMedBjjRvZ5u2Nx4fUspefjwfK3YSg2Xu7fjfzBGZVTQnTZesDWfECdV",
  "key11": "3LunAafpzoFZF6vosDcHHbZi7YGG3YhnG2adbzQwnGHGj9jd8dy9mu6KWisnUL5MRUVrYgg8PTUw5drBF61ercXp",
  "key12": "4UkW9eq3e1PF64ZxfjaNfKm6MB9tYV9c4LwQcjgJkkA3bkZA4eA4H8jGQwq5FK8byy5zbkFePep9Pxq7Jf4eREc",
  "key13": "vKs3ovP5UrmLXa4JeQV12nzZN3zZAB3nc78bc1LPeE3xzJ9a4HXWDrsGbMSmKaNMsM9RH3RJFzqngxBVGVjxUCr",
  "key14": "2Hi1u4fhUEU7YNcvtiVsLXdxvdbkjwWz52RWb4CiUwZcg6bohXBDGemMDNcca1XtkFTfABpV2ELcNKwa5AmnyYmJ",
  "key15": "3pxCcN5dfxyEudgBxyArdgb1jytXqc4kkcq7i9fzwUohmeYBCdSbXWb8VPYUCr2vEatLqkh2zrA5fkj5ZAxSi95u",
  "key16": "aV7tptN215GZkWUoP7nnotgWyw6isxcULXVn9KriHjB2Gunoc8DgRnPs1FPS9soV9dGVSSvxW3kMjoDndAs8UTJ",
  "key17": "2u8LtYFBS6HU85qtPksxVwvHjSLAEA9Rw7PQ5tBWWxThnZ4Vv4xBWK9BeZsJvNsLkLJBtZX5e2aJCusbYnr7PoML",
  "key18": "3ey5hc4rQFuxp1b4ZcydbKTgcdhZpARKRtxfksFjqQyGpQvyqqwQgB5gkds2D5pZzSaMPhevkEL7qW66Rh6LtNCK",
  "key19": "xNfEJ2yUWqKsNLPJSfRk8CSuzCNFj8vQ1B4ExUhLNRnzEdxkoeK3QB6gUxr14LdwwzkMuheCHkrTFEmssAhT8ao",
  "key20": "zxasPv9iiqS3rMnwf6m8pa5pZtNPCHPTvsKVrhYmjGdcka4zvMyeqhTDL8pHXrKU7c9aWYi4gv1eNghqHUU19q8",
  "key21": "41wE6JxWmmzJDSzi83LPEnzNQMdX8cRgVeJyqgykitvZg4jhAQPYpnjtzuNo32S9GGJPGoj5AAWKjo1Rc9qe1911",
  "key22": "4tYpBWGGNggr31MVjAzNxEA5QM6ZeGHUNaS558tdnuDHFdXiUVc9VQe8hYwVZdjduXBni1CX87w66XPPV9j4Ni9t",
  "key23": "52sWZcarkeGrre4Eekz1KLwh6Q79yUQCxSru8wTBFvQ6VjFrNqfi3TTUHrUmQhXkvm7KwtS3hpaW9TyptD91S6eV",
  "key24": "QBmoPDfzaER1gwNaoqpksbeUfvLNGtC2wmEHzVrJcjWmbcxMAAaUrPQgrirkxG5m796oTjcp6rHJ8G6i6XnSkLP"
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
