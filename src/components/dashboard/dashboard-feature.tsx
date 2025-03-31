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
    "24rSGjBNpP5DAx4JcW7tvV6Egk2pDSP3UN5bMqGE2o75mDe6a1V34CXCcsj4RasFfzh5dxVUKFvncYitBrAbNmnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6bvkj6qP7a2CLn34S26Cy3pJvsxSP2q7uUuh6K9ZuJhdPJKiZxkwJWpMNJDDkAiryJXaW3nGcZNJL5DhXmgnVzp",
  "key1": "4t9HqagMiG5zqNoQUg5Z7M27bmtyVvpxodgDqj8iCm4MSGCHQydfCdn82g2jCSxWPsthrz1eaqit5Z37VaBY1XLR",
  "key2": "xVsSUhiT7eAS2zHKg2J1armQgJMd5B4av7N2gJhEUqDnfmSjCAw9pXfR3xpdffUPeWJzNPEYHgF1WeEqKYYnDDP",
  "key3": "2a75qHyiM5bUnnpxp4orQsD2mJBpSWuEApLQwHUP457JsyeVCVoyN84qwSr5BxpZhRgveB8mvttF1QGKWQBv3rfV",
  "key4": "mjYMHpKa2eFwB77CL63yq7NoiM1A5Qft81qZbTcnn9CQigR5aXwD4FiLpaRzXc8HQEWf4MPdAguDNjrUdz3ydyK",
  "key5": "3tNyTb9HBEisNHZb4X4dNExXg1ByjX8CMDBeXsMjNKaNRks5QJMjmMfwMMctPP6pvMuvCJGKZ5ySa5XLscrhroeS",
  "key6": "dNkBqcVpSyiwaM9KB9cM7sbnNPBd8A6TCLEYbYSBYZ4iUekztia42vd1jaEFrKpeZhnRNro3TPnpLEWkpLSP74j",
  "key7": "9xLQFvuZqwvxE1uwMY1vZsz76Yvq5zgx6KUzSc5qc7mYdcKHmutYBJhxDDW5yczZnHBBstDT7HWrSarRexjDcfc",
  "key8": "3U2XbhFhPpvjaXUJyQMzBpotpdrVhrbev6TrK9CuPLd1mC97Za9m2w4GkQDDjVNUQzUtSD2y6vDFbDPuzyjx3LcV",
  "key9": "4zv1hYh7jpZjs1YpmdPchYTCvqFHVq8kgWb4LsWUhbvCzrnkWa7wjSkb2yx5RzDub1JyKNZyG4txcq48qUP1bCWd",
  "key10": "2dYDYJqYUjuH5873edSx1KCPGmyZ6zuumFAcwNeee5Kpw3nrRnjf7kxQaXj4PZyv6y8HaykkmpRicNecNVW2Vaey",
  "key11": "C6UCTsycx3BoU7xjN77t1T2S6VFWA3WPyfkec4mL8J92gP3NL1uVJGNfUith7Aq7wikqcHPFUyNzbBfzzfwhAgR",
  "key12": "3fD4PgPBowcQD3RgdCWLu21wuKxy6FaMyxCc2AKB8wXthSranhX3KGmbMm1FJ98nF2X1tm6J6THh7Gk23sN8b7WN",
  "key13": "4ZBg8hK4b4yqf46e3wPYzJVhWZ8KYyBs3PrFaV2vRuy5rVgNiQSDqPWKvtm4XStLxcNNzoykChUHt5BjMhCWw2so",
  "key14": "3t5Amv5GCmnUYb2dr2k92Z5d1BGYJkbgPAky6DhxXo8vuSo3K7Mu8PGFMcCZqHSS2jMjWbHtJR2FFPagprYVg7Hd",
  "key15": "5FBLZHT76R64uXg3uTHi1ZQdZPLEugnmNrQNtSPG5wBhAXBTwGStUmHNG49w7cRS4EZkY6vSKCqpp1bCNHyb1onh",
  "key16": "64YmS8td95Y1KT4cLyEYP6KqMchmbfXykJz9L2orwYeme6XcZ6GaMRUKBhitgTo5tGCKYb2SENf32XnBmhiMBPo7",
  "key17": "2gFzi2rHgcDxyEwBTXVFja7vwtFME4DC7CGmeZn9SPkdPX7hhMQ9pXiEe7Tx9tRGkzPWWgZoExyJwz1h4jdtCCff",
  "key18": "52GGUaN6N7mPWkuSK8fR5fcwHkeMae6LQ7FEWEDX1D21c1292aBUL5MSaU36DZjyLyJBAX8ewqCpNBEqgUhpX1so",
  "key19": "BcNvWV1aYQGXHFxWi58untYTygiBx5mLB2i9cWuWS4tucz7tT4HGR373v6eX7swJTnqS81w2VH5Rx7zcm9yWJma",
  "key20": "3g2yRTRfSAW9yL6YwzbU24Tc4twZyZx2QhTFeLxgfSLAya7e7EKxhmQ672xWxunpexgUTkDPmv3jnkSbqWcA2wvZ",
  "key21": "4XQq8Nqo247LQik2uUEZPKXqab6CrvrHAXFqDA8qJJxNPJTkV3t5u5N8BG315j3twcxgoNnq2b1QyHFsMhNZMUD5",
  "key22": "2qzC993vp6pXwSA7yAfSBabmERX6Mmv8u2ZpX669B2mPHCbqzxtyKHkX8d2SxmawAEuV6TUpcMc2KrV7H7gwGP3f",
  "key23": "2RzMiG9B3qcPbEzwHLhL7oEi4GxRNPy1kQLFd5hxNRUv5K9fU1PM5oCZ7TyWzWrAhmktz5xChEP1gQrKBuFLQ1zW",
  "key24": "3k5yRPKJw5atqQmcgRyW4Ha9i3rN3avtP2jXQiojDWa6QQnLLgbR8649fcMFSzM3dJijE5fNPNQGPsRqBkB6oKmi",
  "key25": "XHzkq1QxmnkfgbczEkxF3JV19VyJJ9AhFhhRsHem8T4pe2JYEFcNKXVAjKnAxTai7m3mgQEtfjzcaqSWnir5V4o",
  "key26": "2MpCBJMpnPBN4AunYhAuCuQpkmXrVuyinWgUKa775MQG2VcRnXnrrRbfapvD61mXrh8hkvX1XEaa9FUgsBqZoeDe",
  "key27": "6656ejw4xokp2s2Eynmx3WNzsADQfJCZP79a4BkC2TJZFMosxC57MYwTFHeBufKUiZ6kuJq9S8STyrf1PBXKzAJZ",
  "key28": "2s9duQWgk7izDCrDSasNNJn91phfr7rGmJQhwATBKDUgxxHxcxHgB8ZC8MV519ikKjCtgrrecTPn2pUkJ6zKXYx3",
  "key29": "4M6h8YAcwa6fDt3kRcysG3GfJTaf1KmRErAsEUstb7BqMNtzgf4v2weEi7mqZ7s29qzXoQCayYxLxhPJpmbifbKP"
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
