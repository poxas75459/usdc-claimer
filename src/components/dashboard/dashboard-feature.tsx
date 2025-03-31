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
    "2TpfNXdb23iCo9vmbLmQss6ab2w6ErPzmSMc3MwKkUTsfuemY1qGVtfuHcc3HyAiYYeygkYkrEn8SDLsZ22PKxtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFkv87u3WD7cJ2R4ie5rfa9qEKzNEr2g3BqCYH2pTQhXh7kWK4WqY3TbYS4Bccn7xxx8gYvACKNYDJNvmR4uyc3",
  "key1": "5Ggf7ZVR8ZToaxQHLGkb8V8VJJTeDnsDMyT82bnM2ZrZ6QieDoaRwy3TbaVxkPRFEUMEtfvzKFW4ezdE8HQeXupy",
  "key2": "4cm5PcFVkomGHXAJD8tH28bW1EdNaJTdToUzrQbebUKHHmabEi6Ct2WVjdqCM6mqhsXtYFerBmgBqpxJyBJyvJN5",
  "key3": "3evN3mcHvo2rrnbGEcf4R1vjf54oJsyv6hj992qMyFkg4btJqU6v8ZALnuRQfm49aV69hHCVCYCzrQqE1DRKJLaa",
  "key4": "22MNktmbs2o4vMHxMNtZEeebwwzdVjoJyp7fHyLuX6DLRe155Ugn3UPkxYiv2QXt3NJzU3mxoRXpJ1WuNb6oSvW2",
  "key5": "3d1EHyr8Z1UQt7gv9oP3S8BBMS2qRDReDuDbieJ9dVie3KaQP4er3MaD3WvtLvySMuZTLsdRpEeHZvh94Auom7K4",
  "key6": "671jrRknpMEx3vk7tZ6djnxPs91LWFPnoN4JpAacCT5ixaRJnNPZxr7VXKST6XQuhCR1W9HhkdLKk9uUBe7HQrqH",
  "key7": "3ofbfyJ5rdfwGkrJZ2AYHMpoBDHFyZPiNbmAXL4L1S9Gwsc2mK41raKYjh5Ugz99oYsrpRbsLcBxJuhVkmoviVTT",
  "key8": "5tJfT3gqGVPP5rgVFxArEkBw2ALkmbx9PnX83sugAjQtbmttWSpJCLMcfF3LRDqnxdBpWB49V5R7rw4GXgS2ny9q",
  "key9": "XxHPQaubDC7Jy6DPbk3xQ6cy5ojaNH4TJAPvmZW25e1Zvth7ed7wB916a47dcmTg5eQv4LKhqYUV5KXYiEEWyiS",
  "key10": "257K4ygmbF1gumTf7zcSSAAsgoEcj8DqJ3zoxsYFPij9RQgmZ6mHQy7kVkUpnB1FYVDgR8VH7xkVrMFmVYNBUFFf",
  "key11": "5B96wChod1QSSEbp4Q51KB6dAF6d3r3JJD1cPEX28Q4R4Lh9pmsh3Co4LMr9WZ1CitVgZ6MFzmMbj9ubdDgtvRqC",
  "key12": "5bLky1zyQWDiDhGWRMKXjPzc7oVpUUPfjK2rxryWSLFuNi69Uo4rN1dZ7pgSAYNPv8TNTDLA6Kp9gnLxAEUzAirE",
  "key13": "3uWtdgKzaQNVMpGJ5CWLHHDPikd34drUNBSX2icmveazNbE6Z9KHk68SgdRJdMFK7ZMnkXewzGcdny5RUyHujBCH",
  "key14": "3HNdUtCrGCqkj6w1QhLGkdXA2uE4G7kAPai18wmFEFVQS5X8iMoC6xMbU4m9wdLLdDSMBHaApxH1BAo3Fsk2j3Yp",
  "key15": "4GUFBG4FirSbK215LEXRkcnfEYk6n1V7z1RCCVWTHcTsGUQV4GVMNKJP5XNiYwZPFRwCvMCnUQfhuSCrDGG7aHgr",
  "key16": "m7Rbhp8yH3LJVypxsDWeufkT99c2YAxMj6b6QkfNLjScbarmjK4qgL3TcxZ7jqCqfapTkwxgcBEy7jWFiZdQzb3",
  "key17": "3Lg5dVrFqmN7zV1P2dNH75mubKkVYd2Q9cbyCFRpHda5cuYttU371RqGHHFPpCoriGdEPeacgjnmuq2nqscn9zHP",
  "key18": "5KPHWTkxsgvSy5LfmCT4Ls6QvQxLgPmoM94dY7C1aKtjbCevhZBWPcq9CbeoFGMCxevVkMjymUaMurS7q4yXiuoN",
  "key19": "4JGGz5y6SUW5nQFacSS1wQaxBrye2XwvuUhosikobaRAQzzcaVdQrkwDAHUFFEvMQMKnRqu41PvooZdaRuyt2ekq",
  "key20": "5ZRhiHk9ErATydQ4YF3SXQNy9mWhvu8qhuxF4aq1K8WaafAc3dq3JpvaQsr6rMhDnnfS7A9wz4kqTqCsFwqN49zS",
  "key21": "5SDkyejjNUbZNG2JFdRHKR4SDoqc2Zowvbtjo3N5KmBNwGGjKjajERUDXugmMcxjUF9MLNuGfKysrhwfu1fmpVfP",
  "key22": "2SoceQxgFmgtxhgCGKeBGE2kJDKBHCgHGbVBt5WCd85DzTyK8V2QK23SWtDwabQEzC5DuFYf5uB6PArqxHFuQbH9",
  "key23": "2zifRuqsgUtSxx8yM7F9c8NzTqijYygXHGn5STmJb4bGCyHSKpm2PkcccKe13f3ME8UaaCm2phX8ix8Xe1XDqRAr",
  "key24": "2knP8anLTY565TSsd8q936AyCkpYFfk93bU7RRVduZb51h9cQv35qhcmWfKhayp9YFPP3LYXeyieNDTqSLMZmeAP",
  "key25": "3H9XJbVyrr1GS4ZibZg5KT6LXqSEv7pFysEy2TPQak8ie4H5L8dYa8BBMMeyGdFp6KteMSVEaQ1Rs7Ds6onQu6HG"
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
