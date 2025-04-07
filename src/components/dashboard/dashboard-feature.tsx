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
    "5whUMnXgWhYsZH9i5Xe48ZuLfpSeb6BZhQdmem9pfUAKUFarNmgngoSaLTUoqmBzdgAt5HNY31YAcwHXDApfW6Yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgzhZRsJhH6GgDgJpyp2cCDfbSSEthrek4fELrwMkD2dex62eFtBp9A3NN5U4hT3WTUqGC1Hcht6J1tNaKk6GJU",
  "key1": "5jC37HDj7N1z6TK6R6dzB8o1zVi8WQunw6KH12aEcuYTL4WgCxtBKX4DFoxYtN9ZY6uCnQFyt7ThydUovDt4HzmF",
  "key2": "2JdbBk1qhNiMu1MxzJ47NQGaEKkZt6HXgTt4VUNfFJ7cREQXbRcxZ9UAdq1yoRhBSjwTFPpbqkDdQS6h2SHvmJ2w",
  "key3": "4WsFD1DXfj1eaHK1FVLf6XYvFLNdaN9HDcFKPjyogDJVTa8VDKx2mXUx4HAHrTda3XUufvMHRHoXrzBwkf8m3wRu",
  "key4": "4Qgoav96aoDrSTvtr41VfrR5JRgvYcMfiZxRB6NAigkRNRwAUqjX425P17EuFUscbkkNbwih6Scru7SNKDW5Vp93",
  "key5": "5pX2tNr2QuiZrR1Q4tSiFQ5S4JusFJoJQos7WXh2UWVZqUNwS6ZbXyoAcfSRwwH6F4W3nepK9Y7Jx7zgZ2LZn869",
  "key6": "28Mnh23VphgtmbjNtoqj8TWbxF1N8cbg6SPMm5cLYZY1aG3eQKbSThWmJw37XkkLTenKp2pJtZnVU9vgidFTHo5B",
  "key7": "3y3BNs3MM5UoUC5NU5oNjEPREPx7511WpinezgcZjHnbRW8WdSGZdueSukzSLiTbzfeYjoYLydHUERdxVh47DjAp",
  "key8": "5xM8oHzwn41w6rPCSYyMGsfGJcisE8KxJE5nYZDgiKHtRVw13muY687ieZ1kdgsbVbMoSMjX6Zs2wRtjciWbZ5iY",
  "key9": "4rDqibpenvdDnC2zbdgustEtXa2yJNwNM9qEzBj1JJD95kLaq6eJQmdPW8TwHKJP7x6pwXVMUfHb4UMmi8D99UnL",
  "key10": "3prigfxqVFeARw8RJDWdJn1LNYW8DA32RMytWFyiWSfx5KyCRgpWuqXtRCo1PMLGeQpStt8j4YBGqC9UXsf2DUAy",
  "key11": "4Xh68GuomfmLQgfrbHFqHKLq6hapFjLtS4pm2LRFd2LnEBJWbjaimYE6bBqXcLYtPg16iV7oqEy6QN2qAPmecX7S",
  "key12": "SCBvYyPrBa2YbMzPXzT8W1d42aEi7Rc8espXs8PcK3ikeqKpu1BcATpdiPMY2m7pfVicNrkhQowcnuMKSDdRzyM",
  "key13": "4NjH7yARGbynJpMLuKVHJxmLCpssokBAo7C4YgWDZuSsyfFun32nm1FgPbbtVQBGRYPJKgjHGY5EfG77UAZQX2dF",
  "key14": "4F94XJwGqJD1KU7kueFmnufFwKheYkF8U84WdJJkEQnyqYAA45Q94oZYHVvQbLC9NqHpVTewyw57cpJmzCPkfnSB",
  "key15": "41Xx5Af8P7ArW8HnuzwLXKPTvaiS2xAriyVfp8bKvqEKdwW6D3NC7grCgCCqoDDw6GTJmmXZWCVGQ6dd7tGzGa2Z",
  "key16": "5nQt546HBdMBrjpWKv6K8TBvLhb61o5BuXRFmawy9G2YAPAYRJRhq3fkWkYj9JPWCHMVJgTUxh1XW7zTS4pod53L",
  "key17": "4NxRFu74wgKhJJwqr2FZk8Uo54Gz5dHMeS8dtHK79CnDkZpuuAamSkRuHfrNqAseuFDz6JGLTewXmrLAxsVZTznQ",
  "key18": "2uF8dDG7HZ6pzHPdvMYNs1SF4X4fcFFvcnN1WkuBWRmKqcizG9tUs3dKG4dTBdJMutiyCQCio4oeUtFmEb9gkM89",
  "key19": "8WXNrzy3V872DS9vbdr7euANAXpm3th9FmjcSP7aH7n4ZhoqT5RPtB7GYzqEz9esnHNzbyTE5t4MPYWW2F1HQM8",
  "key20": "5n8NePzEcozESoRUdN7NvjUke22ZRxQXVE2xBZbJ9L6Nw3H2uAQfpNTCq4BFhaBkCGfTsXbd9NzKNfDwzZGufmU7",
  "key21": "29krvedgR4G5HxH1Qwt3Au2EWsWvMFN1WCoXpkViBDjgjqGDqeu14Kz9XMJFLuqWtsKEZdKbpjmvP7zzmqVTrMqr",
  "key22": "JqMB36ecAnQmvKttoxdpKRRyrzVnJAeMANkkuiaigJMDr5XknrnafmKwi9KHhH5nsrsa8BEgz2eX8aK9LgBURCw",
  "key23": "5vX5sbW4UVEcaFUxLjrvCYzYcyiJKXLWwSNJbWBxZw8RDRXWco7Q9KrJGyqGje337RoVVLvfnS7iTW5eV85r99PA",
  "key24": "3WQD7MHAUcTrZ3NdpofUcox8yde5ay9a9F1dRPRjXk4o8ujTHAJ7FbToikoVWwSgAu4hMjcFAN326dqXRLpZ3vs7",
  "key25": "5EnvU2qeo2VwQYSTPtbcw7wQwA8wzauqjXSm6MjiJsvHiMS85yv1Q1PEbY9AfzwAPhaxQihRp8KkfuHzjwis51dW",
  "key26": "2niwdGG5BKtTLbVjMzyEDvvTEFNdyPBDToPZkJYBguz4zUFKSaq4hc5opLecEXRmSp2Dnfa8MzQJpKPkUXUMTVga",
  "key27": "2LFvodmPGytBaN4H72mzSHMEodbKpQCQB4g38G8eT7bNXUc3Dufk33wwLGaTrRYyeBkRdbofKSpr1BKAxisoh1z7",
  "key28": "4t9XVpuBqVgzoq9EA9D6oKKMWHaY8x1DAbtxhNRGewF4Gfvecsik8j5KAd4SqWwBYgjBny6eZNGsVrCbKUk9UwYm",
  "key29": "48fPnnNmaZqJFU3Zfv6A64AdKWpWTq1zMTptaxZn4x1D7PiYszgwFjKsAZVhbLTsTEGUFa3xDyyD7RyArVmACZA3"
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
