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
    "66o66Ytza8tDf2i6g9VCBfewKNUhq4CdAsWtEf3zWyVuCiSrKKmZ92wjcqMiZpqFLsJH4knFpi1ao5Yz5FKFsdjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nUKpApCUcHcpe8GrGivQrZjhDwu5oP7kviAyEMMxMACCtSa9DFHke6pkBnsE1oEHiZA9soGaRht4Lw2JRgUXi6H",
  "key1": "zW4vNun3MXUeXgtpj77236TSjGPksGFXErFjHMGGuWdnzLvjbqeVZDzSeK1utZMt43viryELBESnfvz6oPt347z",
  "key2": "5W9uvwA6VLQ7viJhVYq3qCuhppo9XHKZ4kjswVgyNBuB7ZKt6vr2s5Turfw7y5nKG8AmXfVqQTVsk8WvkiDgwnDq",
  "key3": "HZ16oFcbTXUGEEGKnvBbEqVCBJgn6sfh8J1zxZ97nUDNxcih7TZPbmSKsPQbXuqYCL8TdLhbNu7vT9vBTfv1Eft",
  "key4": "3Do6eF691jV1wDrKZBYynvzRFEjbvFfBjgakyZ9fHuBBAp867NsMiVpLGNETPGQmWimXEWHgaXoZgHCHd1ky5QTJ",
  "key5": "4Zfd3zJdzfJkjjyYSYnvZUSkdcTssCaCby3QyFpkMnDwHDok7cKeBFUChZXpi8JQMu9tdzGJBUDx8gg2H83eXWhk",
  "key6": "2gADexYMsreyP4RH5mcK4TvgtBSU2bkmduNrKdB69eLVkPRwt9AyTeJgaSZDfzmYEQicjyT8ZS7yRi5wi88EPRos",
  "key7": "5qvcyNvPxAYisnNCXzu7hns7xMv4Lm8FdHQR7biKDb4LTcsTqH6WwAsVQVmQG1zKeJ7jsfGXPmiaz61MygQ58tSp",
  "key8": "4ZHx3HpeHkpF9doraWxhUVoDS2dXvpJVeVq4cTbrPijb4uZwqUoER11JSS5QPEGBtegeQzNDzWT2phMskHq467oV",
  "key9": "5G8N8farU55CCYmWyuMf8s5Sp6cQA1ysLyWxpsHJbSFdy8ZDn5DJTsV1zriGeTmFJvsJF1upgZZkWrYuY892PQSA",
  "key10": "e8GQDRrdqbAnMeTHomQg98xwrVMLrXRmp9jPNcBL4BvgdRoGhKRBvMzB5yusDu71zeqwAFwKqpY8TQwe2zSKjJG",
  "key11": "3izyWvuaYYepeJ6Ya6BGmXugh1WzowxPXJ7vBcaEBbpjcZusFm2qW8yssXPK3CAjUDDZ7b1kfhnEce9ARe3VT2te",
  "key12": "5a9sC8NTH97AKynfnKsn7R7LyJjc3YroSwRzcGPqayp8rucoRDTnRcvcp1ho6p6k7K57GsEr2NqWbjoRFiYn3XES",
  "key13": "iz4usfVc8H9cxzqmnMD7fCChoeYjFavQwyr7TDEiTsGQEfcmTe2PN9C2TZKZmFnuRhMPdRQCRik4wdn3NAvLurK",
  "key14": "5FtvK4bSMKt6U4bhjucQyURRsg5N1AMFzgjgtJnf4oRz1TLcgyMzTcdYMsF6LBWbB6DFgvREE1xndRUkNY1X2JjC",
  "key15": "2r1PRLaf8gE44AZrbYUFPUZkQfjBdqcc4J6bwjwdANFYK5AcNmhg98jnt2HpEyvoYiyNJGTAQRjdCqi1xjZ8AT8f",
  "key16": "4F1nYF2U41cHwSpgtpSbwjARrEYyKb2sEK26nWCPcDpzkCZSyUMf6NphDa3oh3KgGBbLkHkYwkfUmWkpcwdMQZuH",
  "key17": "hpZfe5QXJ35bTBUM2DRDvbots4UagRJB2HNo8SbUhm9zoTV6Ro9E3W5CevDDTXFNeWGy8fW6qnyUS8neWVTEniv",
  "key18": "511SLAhAfvhb6aL81WwGSXiiqBKHKfKsBBz4inByHm1MBEUifNYEKfFoGcJ4TAkxSTmmpVXrK6tvLpGr2JoomGtv",
  "key19": "66AUBBwNfaj3FHphcsaY1U1pw6q6LV8y4Cbx9job895cbu8e3FS1xMDeH3vRQEyg8b6VwWMs4gGS8kuAqmH1Wx2D",
  "key20": "3wuchWzfNw4knFAFAsZrmnrSBqmhXnbuSgb71S1bub96D6AsrD6Y9adeEgGTYySA8Ac3DHzNBFQrL7HfRgnagrSm",
  "key21": "3J7QHL5SkbRVy95mMpzVmDNk91mRq4zWpeKuKMWfbomG5JaPANbAekQACcM6i7J5arGw9oZJEuJsQHD7LSNMXRsf",
  "key22": "5Z1Q1UDzpFdSQw9QzaP9SePFgimU7gUJiHyTXbABEpuxYdURpHNvXFc9m8nvzZYqVTQJd5b5QaNwy7LDKo1K9Jft",
  "key23": "NVRYh2ptF4AAx1kGH8Ry3ywC9C5aRtuMPRy4U6wBkedaaj5gAgNEKyBqrz8o1ds2FaMLy1p4K61Wb4o2EiQrzSp",
  "key24": "336fwEtyvzphETCPo5kNQJDcYgQq16A4Z83BQuLPVoDfBeiby9mJGTRmwweQ7iQpWQUigDNzWJzv17yszFRpufnq",
  "key25": "5yq3oRqTbvH7wbWCGULMfUTxi8rmwaTRaWvm6hj9E88tgq57mYy3BxN2Sc34f1D1EdKNbt3mJPP6bUDPYg8Pr25s",
  "key26": "2YHpnE2Rz8SL79fLTYuJdPCC6dpK9j1ZDKrejsGfmtYUvD3mJAD6qJW9mhT7GmvoDNrmdmL2YR63bKqeCYZu4XpU"
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
