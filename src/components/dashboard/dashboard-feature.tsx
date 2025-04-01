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
    "WhhLXf2u9cog3cUW3DbTcvY7uTCvEVhXm8S3Edt7m7SGpckyMcxw9hHdUoXUo53Lu3qYhG6oHroWm733HCvQA5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52X3pFZ99Y4Z34ZUgxWQ3LwYjegxzvznW5r8iwNRgEmt6wkciYBth2oqnbEACbofSFPHnSvGs191pfoZSpNwsBjR",
  "key1": "5JAFCc9RCcqQ2aCU3Gi71BPVAT8uH4Wce8g5hWv5tf8sESAJk7nnTdFGsC2eERd66J8JFq3592LQf8sGcJvvzrKh",
  "key2": "5XP5rKiyUNYVNviSMEntiSbiTAuAcdEn4GFu8Xt3Vg6CAQZhhG9DMLtbizdcymJDqd5VdsHL7ZwLffKkcngVHVz9",
  "key3": "QZmMvET9hNCUkrZiMB5Xhvad8RaFiLsUy1Rt3wbL4SrkNwaaQJ7mbtEB7ZnoEtcLnM6L7H4dsFJPr8qzVowvQzA",
  "key4": "tK4WYGu6gJ984DjkGFbM9GWKBcGoKRS9ZqLEcLn6g5DegJXXaTUaEvrCYTxkQZcGuXyPv4dTf3nwPWzU1LqFHLi",
  "key5": "21us6pYzozapJD18z79vk2dwmD9v7FNxirT44KwvbSMA7Um8UQKohwdAD7cQLSiKeGCPwQx97GxFfb6GHSLA7Ygz",
  "key6": "5wQuA7qJc2nitja1fSTRpPGcYjjDfRkNqeXpqSxN5NHcYbGB1VpWTak29YKr4q57YWhEXxfjsSXJULznrT6tJ5AV",
  "key7": "4BoyG5P686etMyY1HyKcxbioiqyqZ3hKHPuzSiqwtt7djg2vCJUnR4Qda2um55KyqjiiPGYe9npC2umbbeJuAPF6",
  "key8": "2h6ySJuniQosdTUvmGTL1fLpmNfbJJqmyU9Ad8TVmL31djDw3PdaWNFGumhdLKPYYJ6vYjr3efWkyQ7ifzRCHXHU",
  "key9": "4wLaXyyFnrptvgL9Z1Be8ydf8vE4CnJvtck8N7JzmaJZrRWN26kNWMdfeypsGQuYpv9xLHHcBDVJ57XHkxHXtjxj",
  "key10": "5rUfHr9TYizLXwMgtYotzHir5Uh11n9UH9he6MHxe6kY85wjSKEX2jLi7ji5zbasfiScSkHmrKTVbqDX7QsLATY",
  "key11": "3sUiQzr133JG1frDnEfJvr3BcZ96xvWaiVuTkzE8rqoZmt5DSmR6S77j6kTDLbxn5abWhVmmdHWjWg5dGQBmicy3",
  "key12": "55BxztnbwtX25GB2gsseUcSWCJkULt1BJtiuQrZMER2PPSyCv3PW8apmiD2F1pKSw1cCfdKtQ9TCM9VBMhZ6o28M",
  "key13": "3KXhLWP84wZamNXWn8Pi2RvPzmHeS1jFtNsJEd1WoDeuNZbFPmDPncqyYH5JQweqffKrcqYASM6MBSDETQ626WPz",
  "key14": "5EN8fmHnhf5B7wpM7sSZo71dsP6uwYs3SX3mFn2tEhLHGk2ewMTRyYXzjwYV6V3VevRikQM1J5CgPGKQNHvFBmy6",
  "key15": "5VnvPQkDySHeLUVYzMgyyeRoXvAXisdwgHDzVntwvLMwDZ6YkDpYywDqZ9xdoQ2MM79ARssELBaZXLNGW4iJ3cgh",
  "key16": "2FRgRnpy4fe7Zr2CbbXcAMbVEgRpvbfSQvpfY6tVBTAy7kmMXmfhK8oMyQQ2aNVwpKPx12QASNafPuZgNpnAEoAq",
  "key17": "g4eszmrNLu7537wEu8HWwoMrcofTc3k5rL5TXLrREPYomjNAHLBvMX3XK7zLCHDoQH8XBeuue7S3RoFVjEGehkr",
  "key18": "4K8WdvC28b68ZNayknLfHcSMVM5miZMBRzuw8MupD4eKUqxWmqdpoQakGr9C8CRkEfsFJ52v1QovLAYxKbAV7AAx",
  "key19": "2gL9bw6oUaTFTSQH82zfuCigp3PYu76oefz2XTzLFQ59uhA819CtM6moXfwLqEx4B78kbeo3sYCCgVEGo8YYHw8Y",
  "key20": "5E3PA6tcm4ZShq9W6xF3FuJUqcCughmEUcrjzyBt6kAYfjm9zM6B4W7f8kFZdUswk3SJdjMqVH1ciHf3QskQAV85",
  "key21": "4fuexmVBZtdjpDG1GnSF1DE7Kj2kfL4VTZ6UwDRXjcbTMroJvVQYzJVdspwv7po9AFS7JUVpUs6C39GX3S6PzRRy",
  "key22": "5BN5F61RQyVQGynrHum9PvZVAcovYKFUEoHpby5fixDcTP1FdE5p2tbd8P3qrNBKgqmFCCgd2LaFfYkhMSYWpkBf",
  "key23": "4KMCnDgBJpWm7Lo6uw9zWgkMtuUXLEoFDEeVhVjU2NjyxvuuHiDYFiaVQwz38ukdiKfLo3ThHPK7hNczjjyDD8GY",
  "key24": "49tiBVBTXdD9qnjXtrp1Gh3tRMBjGoNcwQdCRi9MFJSYCy8nMtXaCZyxRNpAFwxv3ZnimE2dBavCJzSFapWv9NeF",
  "key25": "4wscMLRTBCqtHwakDKwDNzE2L2HQuJd5pC9QZjaETZcdTQta7DtNC3PRMu4Fzu4mxks8MN7ufCX76cmbv97US9yp",
  "key26": "63tRHHCVFfduvNwwTvq2c92hX6czVzesUSqCCTBGDytwS4QvJhq9ESwZgnNM682kCBv3vfFvMXuBKtXVBs6ZBvHf",
  "key27": "4NbP6mcAWNNmsXRw6kE4uFmzQFFKPjmxFmAebv9RcJXn9eoBoxZSNbjKUukbyAQY65xtRiQKjPCjhqR215XH9G9h",
  "key28": "654VrLSvhjQwRrQu8byhWHcQ9hh1axLKpg1D9km7tK8ZdLAxRvPgnZHFTZBu1QdAVGH8hgr1ZsSdJdRDkVBF7hvw",
  "key29": "64FUygj5eX2p7RLtzBDLqvnCUg9ffG2iVuBXham6HeAJFxk8ts9xUUS6VsNquFfpd8m4bCD6dQpoojpFVmmEjrzM",
  "key30": "3L8Nw51H7cNHq1uKyo5AFg2XTv1ofnrZxV3s5Ksi5L5c4nXUmR5KMFkvwpR5cwvHkHyQyjkLCSXccZw98aQkGbty"
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
