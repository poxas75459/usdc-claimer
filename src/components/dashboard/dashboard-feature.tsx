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
    "4E9bhiahNW15s3iXWFH4V75PfqVrYdgQzh5eBSf3pxFEnUeKf5Tzwmhyi8EDkVveeU2vmSiaKE3n1nTnHA9tQXhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6XnZydp8hLYpv9BFUjpq9WmQk6X9NYqCycQRuVWh67QLQvHnSKygBWbu93ZLC8htwSG4wWox8BV8JwDxsRgtcw",
  "key1": "48hKUeYxMctT6cjPqDZ9tnVYb8kRqQm6y6CUUURXVVGQ7Af8Bt1FXenWSZbKSFyg7TcNZUBeDWJ7iXvwKUHgDqX6",
  "key2": "2peLGQczPdE7R8odBkj3KAybzWU7sa7qkmT9MpbYKKi9UVWAHHJheeNF5FoXwqxMzvxo5WVwgqtx3wMb6tALoT8j",
  "key3": "3u65zS3tQwXzDpnu8pK56E3TnuG7iSKNoPtK72SX26r6LaTMedvFBLr2vwMZkQYzXevYMmy8AskxK9HkH4s16nzs",
  "key4": "4neqgvaW5WPUAm3wbdVysPzq6c81diosaqyMfjSLrZ3cB1RR5ebMXZudUWw8e9s9r3Z2mKsZYWENqQrDEf2ichXH",
  "key5": "3n9jjwXmEdW9z2wN3ZabLuYJLgsb86GEezfGy9Jn8B4sSRSf6DGe7L2EjsKJvdPLLqwatbTK1Dn73nEGhRTRMaip",
  "key6": "2mjv3QXhf6qbmyCK9tRxHZ2aKYpTv4cuLHKuMVyfVpXZhtJNz7Z85sinWXnahfYyGXxpwQcjV4EmbDLjccj9Whrp",
  "key7": "35Db2XN81ksPQuqvzvQuoMznYgWdH6SavzVxN4zf5FZrJXHiQC8kbtfShqFbLHNCKcj8bQtwpcVyBnjCyUpgunHD",
  "key8": "4UWNyRsDHdecvg2uKGDThADyk9AmbvYy82hwzojGbgGFVPTj2u9FxWuAsakzqn2xmCARZr5p9rAHZSqLJskEdK6u",
  "key9": "iiMW7499PT4QL8nd1d9pvvR4fs5zNh6YKU3r7WdXAWZA5t3DFu66r6Zae9hMGzgLLbg2mwCGGmS9qhkw8pCPME6",
  "key10": "5iuqqZE8LB4Mj5kD41CQS8MgdaeQoGWSDCorkgZdwDuWbfoaodDg5NwXzGa8oqg9tqLMAjGjYEp3CZ8Loybpc2Gd",
  "key11": "PsbQNmtkq8o2B7HaB6j1nPbxGhehd39BXeU5JQjb8jUxN1PKpeLYkS8JRxXzmncqmEzJjPiGvMqS3SqiJUds7rX",
  "key12": "hrsGymHJ5jq5huaJEye4tEWLYXGf6PoEDc2MadnKenVfrFLmW1YEaAZnabRAWqH2MPRr7SF3kjWfBZc812FRrjG",
  "key13": "oh5rZKYqtqY3Mwd3M93nBcaoXAcHrTQAogd7rPXYcs4BgNPMtuQr76ukgnfSW5HibEcYTfGCNEJdu9ePcXKS3AT",
  "key14": "2JHaAQbu1MH2axkg1PVw1YQCJrdm52SqDt576cXVwTevCaybmFrYTeqNZXNUtD5hgRGkJ34gwKjGYPMNar2Cox7p",
  "key15": "t863KHehaLSUvsE3kYa6NgvPXomVcBJR3ubReBgZQ2E6XcFbDoQwfxMRYioQwb6GJdBUx2EQ4sgHKF3fxmi63yc",
  "key16": "2NkdNhG5qtGUmyNwxapgBMAmSRLKLcgD17RRroM6BBrhDVG9TLzrC89vqYnoYQmCo4uoYn62Nsg5iyN2UffW2deo",
  "key17": "3NdXLqRE5CT4BzDrF5XzRbQd7z1GoYfygAtfAVGksSsU6x1K7nw4F4JWNK78ucCG2uxWz6Km45ySkBg6ceEDUxfD",
  "key18": "2kJNR9uoiE5tDF6fj5GAXEGDtVufKE8EBXGkgrmc9riF5o7fyG9RSfEHPaHAA9bZUMHic2aBHaXuCEMWyr8ghat4",
  "key19": "wXBqV7ChPwuaorC5aAvVE8y8P3PAmBE6Bt5GtYKetP46wQuVpz5BAFsdH7ZjQMRBrzxdH5bwnNMyKYYXDC7dFdD",
  "key20": "3tdyY2qS7D2MA1pSLu4jtZEXfo42HKpeEzRFHxMhHHiHZ5xvTZJRNFa51WJ7SdwJC3SJt342nYXJYAomccAiRvQw",
  "key21": "52XKH2CaDgRv2dmFCzX5QSqpuKCdK6JsHqenAGfmQdUSLSw3bFM12xoPzd2EhWEjByMYZb4uYeAKq4MhgEaBDEHj",
  "key22": "2BuQoYxYUFxKfDTUQcHRKx59fGTnpqG4Uij3EEbjhgVSuFnGwrrfpekRBPwKq5e2q4MXAKcMDmSAhyh29owQMbMk",
  "key23": "3i4EHFgY2FZZNpaceBMDoQXfoFjtzaLd8GLitcQvkijE1D2PyG99TjNTsTmmd37Eh8MVFmvU58XHTAQAcytrWt8x",
  "key24": "3BZVkzSHBgz6THL96roVwun9jenLPJ781LUpb9VunNchWMevmSYSMEzEJaEQcrsJKCwjZG6aZSs854ZAeiDwsf18",
  "key25": "3MirxpwCe9gRKhNzePHZniWuQF6FMpbhpTBvZ26j4mGCbUuQgRHLsDNdhaRbyvX29sG6m67q5p49csMrBSAhGAav",
  "key26": "2ThND4RQTGyPxwWPspw6TE9nkz9rHnmHyJKJPCQGd6ewfTGjv6AV7GVwnUDzGPFwFzXpUk9PF7ZHnEeftDL49V7d",
  "key27": "4NYyq7DjQ7NnD8HqNqHYvizECxogYLLADxapEBUqLdnippLTwvmNc1tVsEGDwiZZBHE3sWPEuTZ21kFq2R5zT6jd",
  "key28": "56Hjxfw3jQMiTegAPY7UHyoXCkMWjfWME1DamVM3S9G26DjAd2y41s7ixy8FUQBs4zpM6NKGK2k6UMmmKkaYRtDi",
  "key29": "jokpNLq85vWjSMx86fVUYB8aFjEQpuTqRs1g7tJLbEXamaGSRBbRLyw9yfEYb9fJx4AJcYPWQEHwd1o3QY6Vet7",
  "key30": "336ZGxXtWmM5rAg1myPMuEQyi3zqcsbFZCTBnmxmk5kbkCafRFHBF3QofJgsRc5e3gK2Hb3DtT8MBYsH5Lwk64b7"
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
