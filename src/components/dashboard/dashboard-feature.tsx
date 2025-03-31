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
    "zTyfBsDb7ffAMqArNdfpA939JvFQXUNLx7XvaDbTLAbjwndWAmPFgGxe14QnzfT3ruF1VLB7DwzrWrpak4gvh69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vhJLcrdmotthFV2yfhQRKjfASiuV1HMqziRf1ckb6bwErYSH3mKDiqpfKzZ6qon2PjEa2bH8hyvCDE9QyMxHWsp",
  "key1": "5cJSTSB1NMvZQisphNygVn5ugo29rSCvQbcBwEgKMxktuxJWLpWFMNDazWsCJTBmBGVJQKNuM5aC9B69pHyYT7Py",
  "key2": "Mqk3hDMhXsLL4EBmRiaRXM3GfxjxD8TAmLoBP5zwCsk5xg9HUV9RBbySZ5X3fkPjf1qLgoq7dDtLdHaBpJCQoBA",
  "key3": "hmomeJ9V6u6ZAg1XrtBnM7nx8FLEE8RZpv4cWnefdN1VbVNUa2GcbpN2MhMR9Mg324JC3jMzSsM7XBtPAcQQopH",
  "key4": "5hdi3bJLh3eDH4KZL8VTAcN25g9yXmeAkxdhM8z7Yjheiuxm1v7cJSLS2g8gUYG3LzErb61jCGKgR2E2DSvzpW1f",
  "key5": "3U4vCdyB3igXAvg3EJdik7a8K9j8cM7hstQRtLdT5zazt8vx5iT1FoHDjyHRMcw3UhmZFTNZCKR6hztGi9uWrfbR",
  "key6": "4EHzntxLagGWXyWNFgwGsBTcamapmjy4GAkSc2ZML9MN6U48zzxRRMWMFWzYgm3Eopg97Hs8yaWPYxV3CAfj3Ahb",
  "key7": "4YwVJ9oLNA3dPTpRY7aQVcM5ncANofGdzucaQN6BtLGFBFhsAemxQhvu9MX93tX9Sw2mqJkoKgCfry4Y933qgPUt",
  "key8": "Zo93Mbyt6qqyJhwJbTuwd9N8aA11zhg1f6z3YzHQfkuycpaLE4Ery7KrW4UNgD5kE5NTW3jaa14xFUGvkuzskgZ",
  "key9": "5kh15pKimoUTRotNSuU7kGK967nm26DXBwmAF677GwmqATbr3hhWW15Rmg2xdNse4wmb6qXUXSwVVnGoXpKtoKpS",
  "key10": "3qq2mmod1uPopgQUZGErPcsJcUeZeNd3AnDVjVsxkVjG9DPCof7eFZG9ztEnSEvDpEbmVVGXvYVDoj279U8isN5t",
  "key11": "3EQApPSx4dARb1wvFroeWJBFv5YgQ3GbcQSU1nUWDP2Hu1ZwrRizmokxsTj8p2eKdvy2fc4T3yL4UPPN6ZnWYvJZ",
  "key12": "47QxLVqg7cx3ic3qKb3zUKtxMXjJuWHWfDzAVd9edm8hV6EQ7GWWtUKpWXzFskVQnoB14EUR241oPa6CdduwQVx",
  "key13": "35ZzDHTXzC3Y397MNNgRStfgQ3tV1nVdw9DM8qgbFw17St2RNUUqT3vTQyJiLMVCFXivaXEe58FAW4yRBUDpkVrA",
  "key14": "4oKeRFaU75A8GJQyibMzJSFLa323KZuRXHRCe3XqUy24rtjmTKZFRTidjrzi1Yqf4vPKLRkyAaP1Ti4KEhKRWThR",
  "key15": "24uDQDM6b3uAXipRTn6WirFruatwMzPfrQm4K1D3zWdh8c1Z9kgVr4roZ35epFtmEc3wz4Kr7VhivAcMFnkXDQUq",
  "key16": "25on6uhJupDaBxsvYZ24n1GYmvQ2NZSskb69xoWxU1vwhbC3yQRbTH2Y42C33tdM1dRvb1mFUzRwKxeivUnLqAjT",
  "key17": "4s1HiAwY8N4mYQwCocw36d2P8h87Fp1zAHWQX9jLwjo8SYnH4syigqxsE83NEQdD8SZRp5zoY37DyZ1AUetLbudV",
  "key18": "5yd4Kyhy6BeFmM8AUMqAGyACLpC8u3xGvPv6m4tCCWrpuEpC6FB9ggiVBq86N3pks7qEtYQXAhsMLdTKwemVuKWN",
  "key19": "32BVGfAAXFneNMo7UqHbbRsLJFuUb8j9apvg8DWgdBEPF6aK5MCRMkMmZM27yAsWtRNtfa6yaQubv8gFbsGhCcMa",
  "key20": "46BiKAAu77terHCReBKxWVYYBkw1ffWkVee9RHRJdhe7GujzytYsjadkFYwHBwT7k6Y82yWGNGEjF6P5iU6eg2g9",
  "key21": "5ukGf7rkxWA7PpdvopcPaT2z9ExCENnfEMpDvfusGMHv5fG77QSf8D6J5dU6MFEBeuKr5g1EbtKZAXvSTYAjVp28",
  "key22": "hwEHG8eWB4MvahKLAnEiTCYmCQ83vhQbMPXAto2mginvQEpstDeNQFzVA8XCsSEK5ZxwvxmLRTmVADLZyjg1RQR",
  "key23": "4S3wNvLBpRzu8njYyC1TVNCSHFw6Z52ePjjR3K96tsx9W67XvLj6f4Ys7bqseRhcmLqXfMo3smq4Gvjo64mRNiVp",
  "key24": "3G2Uxt1Xzxu1Xekg1BFs1W5V5oFpcn3gWWmiLCTkc2Dh9fkyjtYGVHtWcVZhgrCxotukGp6rfTUgMK56iEgnMzJm",
  "key25": "5RNHqHnEZGw3Q2PQFqdjJQvJqCaYfWQphzHH7U558Pk8weRHQwaaB1pExAWQ8R3unk2jRpgFJrqC1dgqpoWsp6ru"
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
