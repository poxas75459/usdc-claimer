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
    "miy85B1PaVipKvjrssWZkNsiHhs2Hdgunn58jLvvud7vNKzYpKyYtAQ3HiKwBXfHfvJLcVhNkEVN1NJgr93f2nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EiFporEWFfEcAut411rbDiWeyRP8GCDVjVv2YrvSQ37koMCBEszK3TSTZMMJhtQK3K3MSetZpmEUGpHQ2JAkaNY",
  "key1": "59VVMyTaa54roDC9ediw6QmnUxsPW68H5aaUta761tgTDctAFF6ZFB1ftjH9ynbUstBVoZ5Uf3fFXzQ7BgghtPwc",
  "key2": "RSU9vhkD6usv9398GeuhVqwwtVAsr2FqHmZPBsMLosn57kXkc2RQiWPuchnMGeHbbUTEBX4JVs9QTcwu1vDBRj6",
  "key3": "4zV4f9wr7g6D44qxs9iPY5x3PnNmZTSXhEfCKXntYtRjm4vucFMr116bqxAW2gmweZqAbSkqSDBU4Ke9Um82p2xW",
  "key4": "2bCP6anFhxxGY9CuYYWfZmdd1b5hkhdfP59eW3YwqrpgJ9ShXB4dGxHm6JfEM9T45CZCzQSujkhFhFZCV66ZRzDn",
  "key5": "3tanSGiz51skCdNXuRNRGCZBE7EJLjUEhtfSjEqWLUD9mdeZLLW9zNBxPLMEFZYAFRaDCaJgubLPyubJDFP6ydvu",
  "key6": "2YbbtGP6PRMrdf3PuPxU1HNFnrT6wFfAb96xALwPdipwGcLk6Atatf5SQXkg8TynxoLFPnqtakqWT2EbZ2DKr4wx",
  "key7": "2SErivXaAfqYByGM1apUzr8UsHrSPaco8BFpuHcrRN9xN4KuWvFY4vLPjG1Q9sWT1ijHvKi7bCMjaaAQENP258eu",
  "key8": "TWvcoZ9otY7sUduQDK2Kj2GXhe8g8Vhh6m3zPpeK5srGFn5Co2uF8RTBUvfLi3ore45f6LkocZn36RpRf4BhiCG",
  "key9": "6ZLMnQYRwnrGQEjf9ccjczWkVxdAkVR2tjKG4mU7zjxFDBzx6eRGqgt2JrwBAj5m7saTBMBF9K7PBFJditrFaH2",
  "key10": "3QRm62irMZcLVmHcXKfbppMEFCR7BFQep1YjtZiwYnpQSD1uyQ2pfVwsxZ4PXnbDYz4heTLBxKKAach9HHzsqE4U",
  "key11": "3X9ELMcr36gutpdm6MDr4mqqgjbjgmcHsDHxfwvCpzDUeuX6gW2heiKK7S5HVjUZKye5XHqMmLmwfmPYWeqkBixC",
  "key12": "3K7oUj9jzSkXc9QmStZLs4Ue4bMWzGJXoWLHrgHWUzb61rKAwiipBfaNdFBQzUXLQvr2XhS3J4XX9QsBF2tsvqre",
  "key13": "7gX6akdR2q6DseHx5yFco9skM8eor6Jd2jtjURB4wubRpHc1aFEJPHbsDud3bSVkzJYkvqBJrLwbstfbpcnStad",
  "key14": "4e5gXNVEPCQWtHVEfp8s3yi2FCvnmAwPod9V8XQbzXYfuyAMTTKDVxJFgDGmkNZALjPXRU2yVDMryREEQvbKdNgQ",
  "key15": "5ibWV3ejKePen968HHxYBydWWs3mCmGMcPV96gRDqGhGvbMS4oY8etNGCjg5DE1Hw3Whx41aenfqkYRPWaUHMLR1",
  "key16": "5MPVPbQSMTXVp81JmtmEbhSjWG7dcuWuETVpDMwbGgGoaqsjAi6hdn4BJu3h4nQURrG8htLqoewZBeyX7H38vNsa",
  "key17": "2A7wg7HtVkSp6NuyQQY4morStpVFU6Nj6YtZTPpTiQhvxqZ6G54CRrVVoLvaQ7RVkaekVbNb4jxoqhQwDWRhGzRs",
  "key18": "5nzR4dg4MCwdqGdwNFDpQMfkm9wGcKwRKhcaKjoExE8PPei7QBfhUp3pQSNDbFLbGCpCV9bPZ8UbpGFHpQRmXVjY",
  "key19": "3Dak1xFQWfZPDtaG5QrE5MVd5FFtQcZca4QFnojJspFP6v5ys8jQRtnAhaVNDcQjmMStvTDWChQ1arf2YY78fYN2",
  "key20": "3TGnscbpAPYZ5ZgJkoAzg4hb65V2MTssJcadoRGw15Z1Ka3wUacMWueMSxohuB5JaUCbkrVooh4QTMCA8JL4ijpz",
  "key21": "4dcgMJqVR97kkVJpjkNEssipDMPFA66Yh88biqRb9BsJtKs9xRD397ry1bYryofEWRjVNxK7iMmmJvZeK8RC7RFg",
  "key22": "3jDAmob3R1xoMxuN5NKsQHr9tCyJsAuJMVPMZrHWLP4bTJQ8FkxdSkv5cWbmUPoZiPrvwWAMWYwo7bWdtZT6BVEk",
  "key23": "4N8yenZMadraYYAeGuLksxZc71R9nBiT5u5HMifQ8hKA8UbyEwh7xBaMSfJtJXSqXVyWivhiX19rphbx9Kgqxn51",
  "key24": "39LiH2D1DuPva2mToXXbPyoXkSGKGQQ9Qi1RGWFLAzrTfjg4XiaeoKDeo4Wi9asjqTMteR16HEj6NTGk1r6UsJRC",
  "key25": "5aehqodMxQxocxfa5sHsY9BJEfnMeXpnpLS3tN5BmCtJmNp2kdi7Vp7FpBhyaCwuxZ64xEEGpr9AeMaZBPjEwRur",
  "key26": "5aoS3hfWL3wHiUG1tnDvbFEhowWkKdrY7YLHDZFcAVDV8GHqbMNRPmahZuhyiScwS9htJm3VFas233tcr9Bf3Ghw",
  "key27": "2Y4wZBvUbFrA9yoH7tgsNZ1AuxkEGDanrzoJn8MP4yP9Bckom3WB719qSyvWcAwhDyoQTsYo9TMR3MmMVwj5DCqc",
  "key28": "5J7oUbPTrGqVGJ8RdoRa798WePAMtnGtJUmXyZKUvSVTHEmnRegwGEHaiAh3iEeTn99ctun1gK7oscVyW1sykw7r",
  "key29": "3HMHkoonUkow29FSWSLvyTCNtm3fr2K5LfFDHaA2Gd1vN3FawRjYUAGpXU5NPCyeDh3LwHX32agubpNuVszNt39U",
  "key30": "Tzn4dkkWeR2JsqmvoFNbVZfxVBWTtz3PYNFZNUqezoFh6NiaUbamWa1oKScVuv7uxPfcQKRip9tgQsaTkppAAau",
  "key31": "5U99tDGuCXgM3fXdTjXp9xngPGhtRPxTNQKoUAcwiBZRWp8zgwAuHBbK5EosTAoqeX3uqbrYqbnBLceqxXjRuzzh",
  "key32": "444SWQsEse4Tg6BWFkBpKQwjZCMtPf4PvvRLRh6Z2J135Yxeghqxb6yTGv2CyrCoHKLezwAEKDmRw1n6T71qJcMJ",
  "key33": "4quLBKikd2FT68ANLwxqa7yxZqjvFrUGkpRMvBnxzLHWmEVvz3H9246b47ip4VFA95hqfQrckcDtowx58whpY24v",
  "key34": "35oVrgC83Be1TJNLhB4mJPt4QvhcGHJEG2DPoALaWA7KLLkJmb5BFGjTGqjLLGe6HibfFbHCMcvW2tiXuGZF7nnz",
  "key35": "3gQSeghrQaX6LW7kWPCUgYm6Vz2TfHNairyeSwg829U2PCCKdQJHNAsCV8kRUrqKetotNDhEDNQgHHPLywiKL2Gr",
  "key36": "aYACyJ9MS2jWeMmjypg9NtYtDzeDg7cRb6NZBZPATKzS1J6gNUPuucfYed1RWC2aa6WWSABMHAKwWzi9k1sqcnL",
  "key37": "3ZrVUHERU4YHVCfW6pxAAhZiSafhC9oMntQ3j7fCoXw9N67FG9vsBuUgTSTTv7wQ3RHuzehxD88NpXcrC7hc8zWA",
  "key38": "2qjUarqWnvVy1jMPd9ZYjtFR3QM8H8vkULe2tk7mJicUAmDAD6Y4NPMPGbNYEK4vTjmAehLKQN4PShoLiqPqV4DR"
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
