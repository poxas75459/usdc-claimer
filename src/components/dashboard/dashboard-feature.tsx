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
    "5csM9WF2bAe1aLLMJnH8K6YhPHwLrGdqKbAN11imMVmD4Kxsb7fhCkUJNQxck8ELojroeSZoPetxb3xZyCSHvBdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V1NnrPXEoKdYocAwSWHDZqRaMG9ni7KW9J9mckZ4LgiMr3bwrmU5VgSn11rm6EWftZ1nFFcaA61Sq4skCH88nKe",
  "key1": "FR5WDwMZEzJf2VUwb1FkBs5n999c1X86KGAXnE5FZFod6hVgtxsXogZXgppBTGSwHduRPpraFf4DcZkJyBb8QYA",
  "key2": "2mBcCWYFY3JicNpwDVKKj6gXzkru24vYoDChD1BPsHWBqSzfm67Fi1MkpdeqF6qEGmMbGCdPEakW9bNtCcjZu5Sr",
  "key3": "43rvJKXqzz86rn9MjJWf7wBpPeTnf12kzG3xC8A3vpxxHcuH2xdoZDJxZG6BzLMetK7RoAVeMbLFazFyFdGRatQv",
  "key4": "42H4GzyyXUNm5gdHTMHrR44TVChgyAuz3NwbqAAkD8egWGb9za1sodDzvjNqbECwfE9UCvQUjEKm5UDwnaVEKC1x",
  "key5": "33a9RL5rf5RynTydvTma9wmE36P2X4k5V7XFoLyEjtZ5W7781omMTVBYgwTrgun9edkucPXd5RE8ec1Qn9jETcjJ",
  "key6": "5JHNEHCDSDbJBDJAyL4AjYABeHkiPVLCAgCwmEagB3xeAncoBpG7ghWdt2onzZ6jpCZFSDo4pcd4cXNQntMmCCdK",
  "key7": "5JkwMihZRpzSm6TvGiPy5M6sjAkLrbVzyJHCCZQuZ6GEs6GHtTkVDxmPvU4g9fUZ5ZcoaVi2uhZwt3JfiScPg9X",
  "key8": "33foe8hQ7N2h3sW7Chnh1WoCF8MgUD1yrav9QXnGFovZyLiFve1WqrERaSa5QibSoBgY8hsu8zdwbunY9nPhPGwv",
  "key9": "CnrvX9a9yR6wJgqz5T1L7dEtwwvvfBzPtbdLqXpUkZZL7vMeqWbo9J7AwRG63RDTa1qm5fvEu6fdHeQC6wzaiHv",
  "key10": "2KsS9VmmSn4KbydNsimC4PZZFztLpcktYSkNgSpP2GJx6sniFQ4FzFCVW4EdsMc6ht3dmB4my9GHVGbJPEBPPoLf",
  "key11": "53VMmiW7gjBq9j9oDVLyF3Q7Ue9PCXKKa1wmp1BWWWonHUsoMSA1Kw2w9y3anWLEdDWaWWFtYZ7yaPRyvPpeADQs",
  "key12": "4VfhdsRyZEuB7esrcH6NP2AFNfWSvYjA6qbCtBPvL7XicwEj9ynFzMFeeUrHEEEay78hS5DX3KUbchgxAD12NHN1",
  "key13": "5PEBMKWC4Wj4ZP3ztKQbDzuxr6wNEdw3KQac8rLZ7ypqD7NNELPDxKaBf9kUb6kxhV1XvEksJ4ZyeJqjnJ7LFcLs",
  "key14": "5FsZQx9XUJ6c8KNeQuWp6TiTPunXedA9MfXCCjxpwgtWQcFC3FR2QyRsFQpsDE7mGpm1sV8grQy27sBuj25iu6jx",
  "key15": "31HFHSesW2ToVc1WAeWAQ2CVyhhrvMtkhbzatKkwF6VAdhSh2W7PVZxq3FYoAJRXtzgpP4dXSF1HUhgVNH5CH6eu",
  "key16": "Jwp2958VK9L6o5AWGGiz64FH4nYXrt1ax3n72UQD4DfU79d8xqDacEhi22XKMdDh1shixZuwxS7NgVkeRBDsGWZ",
  "key17": "3K7jQ9viLd8dXQwVuUCHTdeWvZMYJibwyogUA1pbGfptB2qJFx9KCVWpnULcGcZpRtMQMjqkKNi43dgZzUigFFvm",
  "key18": "3qKM7VxP2MKgD9zBxGToLo2JxN8eLWBV7HhCjReW1jXU3XMsfNrbwpy5aEzZu87yaZtipqcrVxrAueBmYnzwMsUA",
  "key19": "5iDWh5Ldxdr4Gm1vToT1F8qj7HKyXCshkZCNH3jkZipjwpxRPn4GWUz8bF95sk97ptxWNrtZWzn4mcMZUNvinsZm",
  "key20": "2JFkFuZeaFF6jMoJQ6L2ZxNirf2k2WffzqDCGYZc2kTj9x7XjwubDikbHHh18Es7U42sBARWr1SBqSfHySFobQfA",
  "key21": "3WPHGnsvkFnBWwdyFwomQr625G8yJRfGRCfkSk6g9exVub9f5KndWtDQXWsF4wHWYJ6bidXDWXzYrxqjo9SKNFvb",
  "key22": "x8tzNNJ97N4xfLq5DsGjWycJPV8krATxy9CbQTGz2a97v7nyP2ZBS8vuSHDcs7DkLpqyJMsyDmJnvj8SxbiwVAH",
  "key23": "4o2dA1H4gzRk9n55bwQcfH9m34hasCD1k73NLfyNN6yNmgfUMcbwX5pXtr4rdMh55D3wSkGYJwUa2pnBAGaim5Dr",
  "key24": "4YGDQH1D1SAG5fHjaxmqCLDuVRZQvko1AANdEzLtSkwuiEoEUirNdSKFvGieFS6DBSemqTfNYkQXG7x8d4aRzXy6",
  "key25": "4qZWWp7jDPGQjGzgrsQyKapCd7Efk395x3PFn15ywiwmRCUjS2GwNEwth3gBH2oaS9Do4cbQLutAdXhun3w2GmA6",
  "key26": "4rfXfQvW5kEzG7dHBUowBQxuDdhnDgg2XHgnV77woxyM79Z8pqmoktd2h6CEhQWEdKrTrX9p8iCtgQ7xSwECqDkt",
  "key27": "4YNsmpqgrXskyqXHRE8E1Sy6bGFL18MwxbUWiRjc9TpYZ4xNjAvi7HjXGMT3hDtanFnCjW5gVXZjsqFkh1oSGGPH",
  "key28": "64E5d46xcsbp5QCxTDbKJ9VcP5G2ZQ4G11yaJbFGtVqhym5Zfg5CX3LDZPTKqtQ3iaSMTyqiY6uVwzysixacRqgN"
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
