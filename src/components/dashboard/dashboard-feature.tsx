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
    "5dBrKmeuLbcDYdNTuTXyfeM82ocjm95pG6MaWWC65Thk6GQTXBYnEoyTabYHZ3ptafLTx2vceVFi2HYsB7jYcBEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fyH9x1iMLYbNT2kHVtJdPAiWzrABPjcswcpFUKFgNZqeUKkSTiVWCP2PX2BnxP6FEwEindqGopTWm64aB4btyfv",
  "key1": "5Qd3UHYbyPW8rm6jqX7iz6DiHSRdyjbRkJ3jsfx2HwJYa6N8W4XoJ5VWucsVrxBpCZy1r4aiyyPPwXTyRrScAL6i",
  "key2": "3ApT5WMLG8Vhmzy2BfsRzXQPRNhBaKFLpNruGw7B1DWmbeRYYbxYqLLSdM8tBSX9WekjZs7PUvM41DPAwnhCsjyG",
  "key3": "heKeWSR2TBiv2Hd5tsmGYeq3G9HUJeCdmRJWKne6fWRkaViUQMRJ9vfzSWcCf5QMZquWHkyVDxbvWRPVvZb2aSh",
  "key4": "pwkpprPhW8Xo1AirQxT2s6v9KYwrBiUKtwYKKjHHPAmk3pX7iVtyXKuW1cSQVMTCZ2v6f2jEKS6ZrViN1WSzPX2",
  "key5": "5PDYXXiQZfNFVWA1Jd7jUmC8yyt4ZoHJbjYwV2g1RAKTaQVqLCP7mvC59WzyzqqC138aV7x5kJGtVxBdgi1zWrTo",
  "key6": "4LvnMzqQ64yLeqFhiFygVWY7z4Z9FEho9X1yHiaew4fdZyCW1MEsat1S7hjFF5rD6JPaCMRM4ZkQnkeFQ8DWLSUD",
  "key7": "3EY8vgZNg9n9x829gdSYGNCc2w9q8hryUrQ2gLNiT7zDNMa39KMG85sfAECGpgNajmvQqHWtjCfASt4JwDkAharB",
  "key8": "5361Gksg8WcwuDDi2vYkhPijjTztMpNxyMT9keJn2yCeXTjYHCjtWHFFM7cXrg5wH6DUC9th97cLQKxnfyqiUYBT",
  "key9": "2aDyXSLp5jdCwhTYQapbR4niPMHtjNv4twap8XSyXVHrAUj1dE7Kqsb1hzjwyv5uMAH8hCykLQnBSHKwdKPGe285",
  "key10": "5tkcYb5CXuez1VnrBzEwMP2U8SDL7LS4txE4t4hUcM6rQMvypTAaLCxAG7BZnTojMvHXKD3yTLvHTgd8A8fn5uZd",
  "key11": "26NphA6oxb9bkqdpG4CckuUnkfGtXjXgVfzraARdnnEkbEovTBHtHBjPQKLkwwbuvSz62dkBYzbtP98X82gcEKdw",
  "key12": "2L3qg35CMC8WMHK9qJwiJ48GvM1s6B3hnjDJnYazMEoBnR3anoLK15yRnhFzz2v9GSiRbymgCEf91JBRR8rLzNVv",
  "key13": "3RRXWZ9djxeHV2Lj79TkNarqtJUHY8eHJUsNQG7jevF4hezpkxi2xQ1UE13kDF3TepkQsK9NUoxhjmvzzQ4Af2DC",
  "key14": "5PhNMydFB5ozTnDBWHadk1S7HDTs7CYFYp4Esmkt6Kr3xNFdcaKfaQQHCNud41GBvo6zZV5BqXmwRUNTNqx95Q6E",
  "key15": "FURLJuXuPUuniDaTjjWSrXerqS1phweh15pbU4KniYy2xsEUDRrqgrjQv55UvUk35LfnkxAmRhSbstEE8RLCm7H",
  "key16": "3TPJi5Ri2pp6CyveQTLb3cAC7UCXPuv3SPNooZ4mYdGGawmoMbGcTH9HtePTZtBn1ABDtppyh3MwMygA1njiiRBS",
  "key17": "SRSwWVbegnxqfLjFG8eo4SS7gMVvw9NYSmBAMTMoeBcUjkBevuxWHKeet9BhKSoyJjyziXiBLKuF1b2PzeopcDH",
  "key18": "4RFHC7zDJt2ETncRqZpjkP4Bn44mv3CtKBuP3RcN395taVALvJW8MKh6FayeXHxjMfnF7Yjm47K2Hm9MJTkTkekk",
  "key19": "3fc24F6qjj9DbvzcWHRMWZTycsrwKwwkPgkDzz5stHsfFXAkjmZMyP4UWtshEdF996xeXbBL6Cn3nvtAWtv1fDKE",
  "key20": "2RSuXcuMm5XUnfXnyD8Bj2EiZ3MdiBMRmrDD68xzY8R97YHGGXhUkEisXTSRTzEgHyR4tb8kHZii9DQL2QU9CgBH",
  "key21": "42H3S6Vd8LtwjBPgohMCdqTMCwcNFygpLJrcnc9aG3T2ffBF8Mxek6nEejz54cHMGzEMxoULKnp9NjpayJudQZaM",
  "key22": "xXtgmqe1PKf3uFMw8f5tcLJihH9nNiUiFb6BVQTP9NVtxvQg6bDP7BU9j5DTFuQFHoQDkq2qmt6X75w1XCZ2kyn",
  "key23": "3TdGvG3yRDZPM89k9XL8nHJLeYhG7tiZvU1vzxFAiZMcG9v3JKaVD4cDdcYsrWX4dG22tKKDcDk5x9RyHsQvMrp5",
  "key24": "2C5WxZ6Ukq9obBwB6kuFXTHLKKQr5xmGLAy18eghRmCykgth9eUNKY1d8CJ2Z9uNUyS6UnmbRcQDU4NZx73yDdMd",
  "key25": "5Nv6XD63sQWPCSpBJXcTvU5KqrQFoHN7MzJg1aWMzMkh6dknaJPphWMZedzS1jQ7LJArGwqr6CN3amZ9WZ3KFxG3"
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
