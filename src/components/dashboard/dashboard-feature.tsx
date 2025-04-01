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
    "5n26RJDwaDA7mrC7bwe8iRYz1Sn4ea35vVDJZ9Ez1MQZfYxZTduqg55si1udp93XtMc2gHeNo2SRhwTjUicncnwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jtnawu5rvKeoVuys2guj1bhEZWjdjRDtJ7q5bWF4j65VvMUGYWCpy7k1uRTq5cWpj1BC8Wi8e7NZ17cC3ggQGv",
  "key1": "GbDocHx5c8Re5TfaxMX7UidAViuJwQFuvGxdm7QtbaHPe7QMTvMvcrimXc15ZzuFCS5mDE8fZHoPKJi6TCKNdZB",
  "key2": "227xMaJPGTW3VXbXuMZA8Y8ZHsgUt7fkPkvMyPv1N5PYZj8z4aZkVpHStdgCTBWQ9ttUzWxS7Vr733mHtiaL2TYw",
  "key3": "59QbCgWepFYYEWt9psGZUak68MXwc8spNcgB1p6Q8Gtcxcy3p9Z9ZcsAT9fXdDpdAqiMkAHsNBzqed6sKMGDMG8H",
  "key4": "2S1QibxkSCW37ndHk5NjJmTUgZLykTxGUroHCXcyu1meo3StrQE6m554rWFKkuxtTRtzTy9qGpSQHsDzQPcGWU24",
  "key5": "3Q27vhP1cJmPZqtKJwK3WrfA4cwuHkLEEnQdjwHZKk8pjT9ssokv6djQ19VKYujwxPthMaB3o1JKYyV65NbRneEG",
  "key6": "4B4tbfGKxqkmeuV8aFMVokFAHTkT9RjyPtJLMYMJpcytDRhLxPP1vVEk2cFFAgHhUVSzZAALwtPRmzY4eZa5bVum",
  "key7": "38LpVc3MC7Qq9RvaB7dnyf1yMxjfBNJGdAYpWCGoDEAVMKQAY3spVGL2LYNKz1x9S6wgRJWrFAGTwx4S9p8F9wum",
  "key8": "3sRMjZj2qFfJ4stzdPMtWiBGXbzVFXidiGcpMGFv3xMPFQX84QN298YnMsUJpRd2v5GqrLgnJH4aJUTwmcAVmDYg",
  "key9": "4hNxDbocQwCXZ6exx2PGDRSe974hCwaFjteWa5ZVXtxVQAyYtQyUWKgn9od63RnM2pLubmMg42NYveHguiw12xqy",
  "key10": "2tHhW6Nx3krCj62EpRdMvBNzYy5CStfkCJkvNimtx7fSrbQ4zsVF6C1DTESaqWwwL8nj2aGPw3EnP8uCD8eZADMk",
  "key11": "BgJeYnsv3ZWQGsfkV4hB5bmpJHtWyemv8Y2WGSmaCHKKhDSkfdiNPW2bc1Khct8WEEkDMYuRzUK9ky15CdiPR5E",
  "key12": "3ED5AN7CXGLbHQuuGANXqtJmB3wJ5CjuzftYfWc2zrfQ6miFN1ShuZQk1QA8bi7gk9iojjCyreCpDhMTSHuW3WyU",
  "key13": "49iT6VDpM242JJAPqZYDbawKNkuwxdJ9MPSP4xjmevGvAgxvJAogJfT2z8LyiJPw3wNhjn2p7fMkuSs3oYXMc5HU",
  "key14": "2yo43JaVzP63pFJxZeFUwEWiTZD6UCAgbjFJkXbmuGTgXx3ZwsMduqoQbWNWsuv5P7ju876C9meU5UwC2kXkGGBk",
  "key15": "BWqDL1mKRj7ZQsSWewPhtQzoGsY6773rZk8FQFWXuqzsVeSA27nDwn9Vy6kQHeUHKbTwJhC26CqD7w2wfMWLko2",
  "key16": "5oQ4EaAb4k3yA3V85UTx9gTt6eG3q4iSKCfAcuAMYmANePVUg4XA8eC3WqrshxvZpXiFGJkzEjjgHCxF93m58GgR",
  "key17": "32pHr8s5W8cnaSnck4jbUsvWvq5mHAQ7XKxQMcgxhzmPuTsnMmT9y567b4XaG3CyQEdtp7nBBrr8pVCu4jL5Mqw8",
  "key18": "5beRf84XprSN1XWDJG9DfkA1HQsezzbZJJ3GTXnzJj3Tbd8zjrYWJy8pfzoL99m3jXTkvL1bzRRDUY33ZAnQGfuq",
  "key19": "2iotr7sRfrvrEtnwfhcLURdteZu4hyKVPh9KALhEFNGPZTqV95MMH9e9S2urBMhQ6QXchmz8hXpdVJhGrtfyAtLF",
  "key20": "3U1zapycoxS8vzRYUXK1UK3sDsKjK7CR9zpdgiZ944nUjrp5U47KK3vJBLW53RJAi9U4HMcScgiLNSTir6FsafhK",
  "key21": "3MM7YZGLjjt6thtVn7QwAiVPuUPNtCgKguaKp2G7oLfoopeKSAVqXUYBdPcW7BxoZ2T6GQYSR14oKscqAFHpbky",
  "key22": "SBMhV6fPzknRfGfgmaknCwGXfbxg43LDy7jMoVmNvq3THiBoE8LEtFsWj7KnVDUuuWjTtmrFPF54R3rpjVH5UKg",
  "key23": "2RRWoyYQuUhhCwKkqU4WcWfZ4RDHJoa1cT3D57vaJneo1vNJB7FkmzGLD2J1gktL1xB94zf1tssCCtvnKQZi68ia",
  "key24": "5E1vgFt1LqNQ9aG8mD5MWe6K57qnpKH9w5XyWzwHNix7LaLupq8XUhh3HexPKrhqgevqtHeRUdnTpECy5VBQHKtT",
  "key25": "3jQmSMgjjPpqxDcReJ7pAfy47PWpeodTUmdpJ7JUxLhdBBFfUD1Z71h1EWbjbRFfeKZ82tGGJX82XYzM1ttEYqop",
  "key26": "5FiwyQW1veAhFVsWXJoNb2iVeqyA4MZeB3hJSBgp297CoWQ43V8jYvAA1Gw1GAwQxaoKFytaEgL89fa7weYrcFu2",
  "key27": "PRDwfuQwvia4w6GVtVe2rgkppDyGoE4cERMTy9bPTgPEvd5nf6sELyCovkTR6K2auUeNpsVStpdtWdjAgZftZYE",
  "key28": "4weJR9KNQTx2w7fKUDttKhWjRhcW8yNM5PyMkXECCe3i9yePXgQyfZb1CPVz9nfqe2XfgvM65bwqS1UrCvPAXXbd",
  "key29": "4PwQtpsMDCX37J7EJ2Mv2ZDeD8wUcCYnjXxhPa44LBb8VcCKQMvvx5t5KRWWSimYzLHZNvUwLdnGN1Pp99whSbPa",
  "key30": "4zy8YEPdQuDF6rNL3qTd1fTi6VFb9XbFGvG5JJXFLFe2i26AkRxot7bdHbZWFkioWMSdjyRhCcEEBk5CL37UvfVV",
  "key31": "5wEZTPpW6B7b3RHEsNgvhGV6utgXtsw5WrvbNdKBF3e8XhswTzpgbasenM7PV4AEc3rt6ydxwcMJsDm2zHDFmYMe"
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
