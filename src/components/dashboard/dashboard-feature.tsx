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
    "gDPyw2feMzGDWaGAmEGy1tyNKuaSfMotC3emGiLpfMdFvj3Lc7pKKucSvNNdM1cFddG1c8xkeU7xZjWWWLgzHj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C9GKXnQC7paxxAcQ35Tpc8UvbSXXyCT5f5t81PKZe4dqsHtGu5AcEpLHZSv741ZbvDfBU1pvRyqBgEe8aZX43p6",
  "key1": "56MrZSoJnY5Qoe9vmLVjCNKLDx3Nqnkx5hiayZVgDJsLiwrvpWmAjCkkGwRMxaFwv7bQX5AjrarRdtgLPwv3MeG9",
  "key2": "2WeYpRvzTQ2g9ppfuBcwbtgebbrboAA6Ti1DFG1G8YKXyu9qZzRjKbmkoEq94d9GG7xetzu1os5GwMCvTb7punWA",
  "key3": "2FgdisvLyXxazysAe9A2TY1EndY2APnSece2saDaS1mS6UR8bifsyxgKm5j7CCQBVQsw83zv6ryG861HpbAQjMPn",
  "key4": "w8dqSi4qazM1Yngn5h3i792in7L82ES9oVVZQ2E2G6ZWztusFwCBs5m9EQoSNj32uujqjTWDLsX2txrRLAmjVzg",
  "key5": "4kuM2fR5SJQEDd9UtoB6GxpA8kRQ8buyfAYUdbT6a3ZCtSt5FksRfxniEH7yJMsqsgECo2DqYgbHRqiJETsG9F72",
  "key6": "5itJsWT7D9mQ1coR1RfpeReU5ZwRUunmPjkRDGUydwuhoWCxhyMcBd1GZrcm7Ya96X9kyULV1GT3Ztj8eo3EFvQJ",
  "key7": "J1FfvaW944WPcHmKQFyCmJL3EBT8h7LZAdAgiSbrt6ziNcwW3iaoYnvBZUxFzoXUrbwUxcUh397Sbhc1CHvLFpx",
  "key8": "34kpR6qVQPpWXTzXXU5tajNwqjfN5HxqitMufqjbPLmAh7TqQzcEe8XrQ2RZzoTD6FxNGX9h5nTSNoHnsqrQCeX4",
  "key9": "5meCMAFxJ5rqNBTPkeUo9SMgx5KSaQ4NJJsxxEU1NrEZBLGAzS62tJmWhycSizKJXaJAUaiP4RhLoq8QF8CLvoLf",
  "key10": "2CWsvFyy3KZCdnZ36ZGk3i9dmPmPs8KYDYmif3iwfhcsrcfKCnZVC6potGZqZisikr1ywxhwN6Q7VD679QdHZqnF",
  "key11": "2uScViVkDVFbxziGDrRR7SLPbY64zxW8Mxp63GBSrkYH52VvnjRQYSt1dcLJez4vG7jgH87adz73miHyNCoBBVjf",
  "key12": "2S6yEFA7RM82Nvx4ajAkTaUjEedjntfpFZecLnE95nHYwmqpEs6BgxybHKP8Uifqi8s28ghJsvkKvG51PrHSU7xp",
  "key13": "SLpRcowR1jcweYACVjJoiXHQw8nuFQy9rxmF3ciRWcjSDSgipyZEEmCwbGyR9uDBAmABdaXhmfqGzvxUbhnY4Ga",
  "key14": "PxC2TRkBe5cwfNPxtLj17gwGfch2wg6SZBNr2yKLxJbvPmM9SWPf48gBUx4wSrVG2M7Av6hhwgeARNoQyyoU3uq",
  "key15": "3M4R9ftC6gvft7Xi8gh15wAs1tsm2S6kjH59bRz3m4tK4dZdnKBNpbVTWiee6QxRg8twc8Lg9cFfoBtzMcGrY7zj",
  "key16": "2c8SGmkaKMBMPcKNFXbzeVX68xDLn3CgK8xnLt9omboyBa2tP5x6M8zyKtG2XuaUXQvkznKJ5PqhHRbTHTMraCWX",
  "key17": "vV1eugGtTXAWeJ4nhgUdbovz9gQJNUZisvTE7FCWf4YqGKchPphCW3pg9oXrSb7r6uLdNwYVAsrrXKQLVr8f21V",
  "key18": "49gsLDEmQFFHhyroGZPSXLzdMF5eU8XsicfK6k7KaZ2qa28AwTcuWCvMFCJdyZL2r1vbFS27KMbgLKZWdbgHgMhk",
  "key19": "48yTwHjvtFvvvjey8qLt851Hed8zSigUuQkYzry6vuw9GDnaQ96NFM4KCFZurP3evxe3QXJrFrxNfGqP7mK7XPgt",
  "key20": "3Ni7ADDJbFZceLkNca7HzxXK9LJ1TXX9MqmusAbMUrWw7BSamieyguAoGhFVYPQUYp1ngBfKHB3uHs7CmosmfvZN",
  "key21": "2pu7GH7p9y3uLAzLMV5KMCupekv5avuSfEThYT2YbsGzNT95QUysXVUfA1TFUGTs6FiyqE5MTDQt3Me41QnkQQ7H",
  "key22": "4dHt3bjNLHuycPFwbnQPBdFpcGLBZWGWcMRFRyw7GkrmM1h9Ya6M1BtP4btxyhHf8ckjg3K1AL69kdvXiPDdeS4a",
  "key23": "59NFLLg3KPZzyHsP1TCF6ErrXZBhryEnxBUekBNG1NLB631rpmHJJSv4QaiCKhVUski7U8LU3FY2xXRNnBjv4nuq",
  "key24": "2j829GvU3TAre4Css11bc33o5G9fHrUk3RYQPRAonPnURXQpkSRSKQUzRabw7pQQ8UNkK5tLaJqcpg6gTuTRQCMT",
  "key25": "36PXjN4m4oJe1o3NBaQ5zhEw1CHKkNZik9z3ZTt2C88Hd5VA1DGU64cGqBJNeCHDiUthvZJ5U8kEn8U8FefTbY1d",
  "key26": "2uDVZZDHkVRrfzZiaryH6MvkH1DbZQrsZkG9ZrdpSsTv3uxtCrCycJzz7hugvLG8sv4nHxsM5xiaBVQZKBrxc2JD"
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
