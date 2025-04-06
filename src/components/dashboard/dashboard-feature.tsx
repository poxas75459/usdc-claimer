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
    "3UqZdrCcjxATrvXmRyQHHjVYMPMHuGJ8Zhh8UsfDwLyrc9bPv4N5RxJ9nPEBTdx12qvb8Jgc1XUzM5Fq9ESmPRqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D1xL3m9KMsfeXZ93UvjFaRVjbscr2zLogszeV5gSobMzuPtNx2n2Tishni672eudaQBdqsE5k5nj2vcKHV1Vngs",
  "key1": "zPJAdThcHvqusWnmLUqEYkKotcGF1m6FbtLMXKqJ94vBje8M2hvGotFcaw7pR82aznAHP93XYW2oYeEEWjjpXbZ",
  "key2": "4kJp7Ceydgyn7L7p7BvCqGgz5bnULBuUNEFryAp2Wc2xvWdoeVetKg2sXYxbEuAUNTNot9KifxNbCPGi152ytTjS",
  "key3": "5i7LpX2oD6vme9w8SoENcQWqZn7uz43JHgwVtRVk2ZyuaT9fAwMu6KqQddwjTpGSRPKMdZr6DNEBYAkLbENLLJv9",
  "key4": "5tGjGDKNjmJyYnR7tovnL43YtnVVknmhGn5YFPk4kkMYk93GfnjtPW2L1jjkaNMVn9qPYyNaMY78NXHv6U5EW93t",
  "key5": "2qGFSD1X7rcHNPyjxz5fQ1WqQ9AqCgjhKe2NGPQZY1w9aRdYC1GZUSknbSPjRjLwJG57RxYqJySFiLGmyGrizLqi",
  "key6": "5EXHjuVPcsGXUR73UvSwC2YyfTQmrhmPQ4wD83XCBXFnQLfu91mFtWgx9uXhP3zxbRzbXiBL6dp1k51aavv7aDwu",
  "key7": "4rsMjRRczBXe9JBQSh19qmsegD3SKiaKidDU8iTe8EULSwWJh13xaa9mg9LfF32HG7w3eDevk2fNuQkKVsNYag3f",
  "key8": "ej5i846ykxryYFaJPaMJRMGMBfyM1Txy7sTKiFXrQqn3JKTDVWapceqfZjvzvnZr5LjcMTbBt86Pctr2CFd81W2",
  "key9": "ZAj5NVncx6Zf3Wsp453UP9oJ33fjGiWpeUkaWXYnZxmYQpKpx2qXaMCV62TPwCZjTG9tjYXSUxQaSU4eKHG4Fi5",
  "key10": "3tpWATR5kDrhf9E4sf25uAf2ohbMgdvthCYhWKdt3kvfPwhq247CSEniKFmxWR2RkSFx2pt4YHfjSML27wrRLEVu",
  "key11": "3PkHBQcbnhArhj7jRzamKrobFVeVhpmrNmS4VCsMkpj6VUskB1ohwQ2XA36s6AKocPc3REGQMwxUeEPHnPM2YuNk",
  "key12": "2Y9EcnFGZqaqs2gPQqAHkc1WNLQ6CRFQn3Veote7oh3rRVsxHVCxeDezVCQcZP2S4FvDU4gQhmuo72x4FEdakeks",
  "key13": "4vUc4xbsosVLfvn7px3iD7sUirdZbbkCcF19dyNybiqwB636iaBXuDUoXc8veGhd1tm6QyFCG5jA1MeSrR4acHMz",
  "key14": "3P93bwUt6P8sFds5ND1VVLtbBjX22om7uk6vgQBRC2XBcu3fcdMue3Hj6v12bfMZZtNHHWEWDodpUYjiDvz7XW4b",
  "key15": "2rRQTN7YGL5LGD97mx8GhqZ4U9pWgNqqZkE4Dz6vk77xGB4UFscsTxkub74Cvv3qNaeJge8BpEjshhpn8XKi4ZsB",
  "key16": "4U8Fdiznyrv2m5VSsxRL531SHPcFHCqejMjAUKiZHvBeDXFwCpxniieRBreFYsFNX2thQtBHJMwxSJXij5wCHZC",
  "key17": "2B4xjhnKAr8ZJeqyBZB4X4PeYxYc24kMFkU15LMfE6Cd28DPZcnzQCdf3vMaJCTm1tJXyqaLb2rsuE2fNNs2zgcB",
  "key18": "3MgHbsGTeGZ7yQCVacConVVuLy9dmAWToBvBkDWoaQn3NNMpxHqtZNiG37o7hCxzEcHAN7fCUnDj3ukJtXCur5d1",
  "key19": "22RL9jnVRWuUk8KVLC5hm2saTdF3Wr3gZRJtHoAaE8FAe6VV2nMuHTWJKrKEYAHnhtGkrub4jHwj2bQMXF9RKAga",
  "key20": "5e4tZ1VgQra8R4eSRJ8kNrTbjDfZKXJNZxVvesRCLeZ9v1NHPpp87eRLHoVZWvkgWQHNHWfnV6ca5w9tMwgUuxN6",
  "key21": "39FDU893eu3giE7kLgFGCVPueKsZwH88h5EqLtVTvyVTLj4p5NYmd4E1qoydeEm98oRojkWt6LQnSESQyDoYmJLh",
  "key22": "3SCRdrdn5SbtFVSBfXf3NUjumTRRAXXu3WZFDK1A9Xj9VGGMWWVUxwjWzCD4tcpyjonSBCvoFBsJ9B5RdoJDK7Ff",
  "key23": "5XJ7HYVsFeYyeWrUVBLeXbTm1CgYscwuE3Rht4x6LuocdM1iXYG2F9G82EKf9fX2u39aMCqE7KAjfmChJY58B7Qw",
  "key24": "4pA58erMjzoBJSQ4whKpqc8sUQLEi3zgKK8ZhZv2vBHDDtG7KwYUVGWFJZ8RUd97aZ4FLBAVYBzyAYwfJrdM2MgB",
  "key25": "5ri6hJmPWXBo2ZVk3MZbG7mj9V8kBTw2X6Th76qGBBk1LiiTkfzbfW7oouzTG4PSYfYztboVWruh3fW2uhmiiuZj",
  "key26": "2d61AecLvDCdK9M5guVGTaewFfSrvmPkGLSYkDPLTJBcNVsroruZhVCboSsPFRE4cpzwYfGtJCY5LLymb2Mveke3",
  "key27": "58SyBaFCrLDSDZfswQzTLveK4gLsU91L8kquyuKFvNessQq4gFCmvqmSmFVUqQyhUTrK8NTpuFvwwWtis4fznwkB",
  "key28": "EnZrn1EVfritshMhcLQ5yci1Nu9ah1SUuGbKJWHS6vEbtnrZpjNox1rX8BeSdZ2Aas93nUn5EChdk6BxPC9xftz",
  "key29": "55HanvxMcsibBN5ffjgFP1kASmeMqDkKitVvbKT1gEPmhq6KWEUQ5xQSNt7JsddZfTFzVY2oRSYvrJn5j6GGmFD",
  "key30": "2nLYQVM1WowRxdkDHjUdckGmTarVhMCxk9KHrj19SiDABcqUGYvYUgkviXBdfPiCW8YxRwAqvF8nZNSGgxw7HCsE",
  "key31": "3p65TuRv6ffCxd1fTbemYRfmacx91tVXU5GiujpkyayQVTSXArK724MieM47ai41Qg4gpKzpKeYBKMyzGwfWyb7J",
  "key32": "3w33Q1FWvjgocqL41YAtPwJ9QK9bbvN1QVMkpQYPnTX3LQuErxhS1AN9xrP9xHXc7KZfF4vZiFsA9EEGQ5SVGKEQ",
  "key33": "2dsMajrz3AMmvz65z6gpcMNBcirgTaSfMb84hbFSXAcqFuaaa8nPcRNWpcXt8FJDx5rVGpJY2WbQ2ZWPfpvgM9mv",
  "key34": "3JMbGULqVfwhJKjjnLZ6A69b9GJN5ennQ1EPHarJbLUgL9rQpB8ijMd91hCDuL896wzvJ4aParV18SmTtaLRDaAL",
  "key35": "4QhvwwBoazCmyJDaF9kn7xyjY7FuibkU7Z8qUjvv1y1Svrae6RiyCgbM7V7CMmjTq7ddbCoRr4PxCjjZ2GxHYaKJ",
  "key36": "YLL9uPw79BxKbCLziNKbRWxibPRrdqFzBb8eVFs8PJ71sagDJ5cYrz2aRa9jEgNazixy2DNCrpfZCxLUCnUJnTm",
  "key37": "3qWZo88phGx6td2ej1WFJ6f7i84f6AfjuZsBvnWznpfaWkMiop7t3FbFG2wnQUEmY9LUB9vdCMFCMeSt958h5ANM",
  "key38": "2duov6hiLAJD7SXbQtvvspL8ebAPha8xBEKEVXynT1KKZBjUohQJHQNMxTNtZAhELosoJbACmrFFYRcTWCt55UTQ",
  "key39": "Ekinzg79kGhQkhfwjLXWCS2g4wwbCn8Eqs3ie41LKNqktog9yeDRQxKPjykEwpzGgLn3xdAXv5JRx6hTrAMGy1a",
  "key40": "3EpmZnP8wnzqQJgWqqsBC2okd5FMG24dVk91BvViteauv1xA8LFBefLY88uDNXpnxztKWsYcDvQCvuTMkJBiGVEU",
  "key41": "3Z7wcHZK9ibQQtGFPM6oHhM82dpxJ6E27NrPHm7aJ43G6jK9Ddnnk8pCyrqLMumzhKu6yMfU9rJEXTst6AHkVdNb",
  "key42": "5NJGBJceRa6MdJeU7S7Mz4565h5YTt7AMudUAVmXL5FhjdNXdyjRMsbae7awY9AgJgGpWFuvoQq5FWGgb4C7e7Na"
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
