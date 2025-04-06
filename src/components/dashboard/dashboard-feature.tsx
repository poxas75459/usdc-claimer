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
    "2P1c9vY9iDSpwfuMchXJfZf4S49Ar5pMHyyk5BWAUsgSKjrkJBtHG4uMDn5vKu9HgMLmtYZEZnQL11G7ksb1EdbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2juHELSSon2whQ2Eg7Yk6YMiib6sAV2kQnAEen7JpWnujayeLKP18Zqh9beAmxgpyAWHEiiksCRdbLWuz5Aux8m",
  "key1": "4eKHUd7Ah6VNPdfhqx6ShAXJiLDuQQoMeqJR16Hf9hELGZxKFrc93FvhzDAJ2pvwVeDSEXAzJmBszDZg9vGQN3or",
  "key2": "5TL3vwp57M9gKu5hrV8BjhHmiw3pE4DS8dyTaL3t9cPbWNtJYgYYHiTiRrMJPSGhaHaxDVrQ6egudTStsKAhWa2u",
  "key3": "2PbZ7u3PP8M4zdmMUGcc9nbraAdhhLMb74M6iu97w9uC2rXedtXdDXpzJ3wXbKR2C1LunzqJGbGZRsBXVTRBEUHH",
  "key4": "2xZqhngrukzedc1gu6e8mYp6LNJXKvTZypUDisRSCd7yTyNjcBE99hqgKsySw7SEKhoxLUzNNnJM75w618SwVRkd",
  "key5": "2BA9dRrTe6RavQrA3oY76i2nS6AJzeDir6rh42ZbMzavz2dj1T5Y4bCRZQV5Psm2cg62Q8sH1jQE5ZzhBN5ydkM4",
  "key6": "4YR4UZTvmq5u7yXPejLwU3DgLUCota5pEKzc5sCxThH49bssAMV7p2vyu7sTsoJREtMg9K2QoVM6m3XeVwzvNZiv",
  "key7": "54xqfi7MRZxgySSf3xMaYMj8QopM7M4VpyP122kF2nU5cqvnRkQKBJCgo9sh3wTcuEVWFb1rFSAkTxg6qSeVqyqM",
  "key8": "25AjbyCH2o6FQwCs9bYs2AimTfnyneWw97z2D1deXeufQLN4XHbehQBUGHRqym8t7PVJb2PgdLhBSxG4N8LEqygD",
  "key9": "3ycX5tvTER8outwXqiUrvyu2pTC7hPU9x5AhfLZqjToVbfFM2W8thmyMmrTXZ6ysaECFvqcXukc9TePFEZh31TwZ",
  "key10": "4vBpS3Xc3GSUPxAaQRXQAdP4pjf14JUbtTsgqzpQJ4Hbz6o4ktdWRQ44yTxjtKQorNm1y2ZMo6z4CgLjN4ADmkLJ",
  "key11": "3CFV7GcbFmV74URmEbzyMGmc4jXtKr3ZiY1fqiG6DH1NQXuyNL1xvLZbAQ9QnK8GD6K4M3SZYUiRE1gqMfjRj2pS",
  "key12": "2innyNqdBNF3qFzCep3dNEzAgMWPsM4R6ADYHoDFb2aZo5zge5cGJnFN9N3y84yQdasxL4JEAbFUrPUfL1ZTJhH4",
  "key13": "3jfZA2YqCTHPsMPDGRJGdAXrpGwaXRU9SqPkeCYSsJdsStK4qn4QPThyBiJB81moqga6ttyNsw6t6qtsDRnD9KmY",
  "key14": "4oK4yPkxwbvAdFv88WCjpZi7dEQeVmkZweRN43LJ8SEBykrsP1nMEP9haUzt2U8BqGHs6KvsmVTsyJurVsMQuK1M",
  "key15": "58Ua9rYxtP5e2YB9kAzC3LA1ZSjrANPAXsbx7HeCSZHqqPxvn3s7meukRBBF2ara8FEb6dzLg6x9yYJQ8L3XKY9g",
  "key16": "5bshAy4b5TwwgHTL4kaTByMEobHFDJw1HjTHyNCGZoXsUwnoNFeNPephsHZXD5Cdc5YFgyARaTWfg9wNoMZq7eoD",
  "key17": "PbhRtBLGyRYkVMoorphDaQZpPymEnAFo13CSCJXDLvLfW2D6uHNHNzwCMhXvLXpxb4KHGxx8BChqXzXHBDxEpui",
  "key18": "3WWCccbjMd38EGYwdDsvqM62E6jWorypQ1iUWbB7PKPfgV4BwQBvABosyVoLYzdpNT5sniPfTHYYSTquNDkJPSQ2",
  "key19": "3scA4QwueA1GG9KnQhucgtU9oaJvSEGmuD4SHcLAqvEn94U3UWMbbssB3YyokUShAzhmCQvwUnNugBB5qJT9WQjA",
  "key20": "3dd6RLRd8BY4YXUiT9Y7dvFkfphuqc9RvMj2dx6o7GwLPzK4a6ifBKTCt3zv7UrpV3UbfwifbYy5K5zGsYw6WzLz",
  "key21": "5JkY8SuChCMn6SNjjtKBba8L4aVAp5JwBY2owxEcXLC2PgKyN2LRdbhy8Yd7cp69GKN48WzXKMKShb8Qsnewm39b",
  "key22": "5YoAazVRpXJfGq8saxxVvJwmW3S8nySNpxQweq5RGwvFswC19ZoqEEQUT6qUbUKWDjSiC416QGeaW82A3TtbgRDR",
  "key23": "5wZmAiit5WFw7ey2ZKUUkDeZiqQgG6jegPmzMbbfna7mnn6NGqCUZCF7RcnLdirK923od9kg63AdXnDgAZye5WNE",
  "key24": "DrkKM668aSmUNzEbph2EPz6WyUT8qMPu21rkxdv9c3PJSqYPJSHYQMQyb8gSYgKdMNrQWRWy6XbSMZ1gxzd3EKg",
  "key25": "63LAnZexPeRGRsZmn9dV9GvQeWEYEVjZsyDPCisu1PtfXZoNgNnQZZbUtqrZnLC4jUwS2wsUqn9iCupbmhHP39uf",
  "key26": "5JX58cjW5qNDxWMsVzJZ3VuKZhokALMaQpEvSycWiGgAfUFmuEaZFF1qkmwvsCorU1TLQDsN9K5sN7WyBRHxNgYY",
  "key27": "4cosuG9Qwkgr2iccyjqQ8y9McUFmTnqtPD7Ekvjxx6FVZSBqjAhKKNqCnjJStxrWmhGKUnbrhx4EFHG5RRoJDJQw",
  "key28": "3Rsv2PnXE3c5ZR3i1GUSLDg531WsxMiz5hmCN99E4xXjXEY5t8acxCf4nzwPQ3GvZjo4Znq4h3C7pGqAwpoUHb2U",
  "key29": "eeQHSUT6h2LB2mJZuXPG2nJ5tLqboYAvb8atpJcU2kL9oaodekLdu2DV6RSHkfzXAh5D1hRcBzjJ3abTqeZEkwc",
  "key30": "61isrHkxCYE5WwHemfX7TKCJ4DLppCMX1nzCjqzXikfdQXWFpmsPkMWKykXK2oeqNhWUCTmhS4mRMBGJRBKcJQaY",
  "key31": "4dSBnMpWtEPjQsyAbYd49GU7BWWCV7XnUrEhX9Hv7f5roTDWyVXu4WRpLHVXT7rg1uuW1segR622PovGKaz6jp3q",
  "key32": "22iBDvQkdkd7Gi7LMnDLRpdQTLx6ea75vyhL1XPrju1LVmEKa1kx4sfVsZpgaind3EKr5SuzwCnyMZ6EUbFF9Bjd",
  "key33": "4cBocRMbSAv3pBqkoG8tHKdGjtMATZ2esRAMhYqQGnkD2EPSgLtQdCwQ76zykG5PABTh6BMYiATU96K5HqvgbwFp",
  "key34": "4SzBw9DWZf56NgwMpPx6Fr9J6jZS6gDjq7cBAQsuUUbEeWxpZETi1Ctsk3ZNV3VZ887P9QNx2mViS6hNaVnSDLAg",
  "key35": "2SuEpxD8t7KhL4ibiJt5x8nkgfb5cXmFVawWp8sT7TnFUNsxFGSjH7m7MVH65uwnvYrdhmTT8b1NScSmfHoN9y2a",
  "key36": "2mMFhopqph5aQXkwPnsSAswspkF1n9UjbK4aRuNWhMryijhMp6uiG9oziFyjUnXNw5xmT4rveMxF8mVYL6bsHo6d",
  "key37": "23rcofQVoQjue6TKqgMntED655NSZazzcgpdQHnrdHpkLt4ivGRSspPVNy14sefFsgookVMHdPFMjv63f5Xe2fkT",
  "key38": "iXoo96XCSYLz5KaWdT1HdQonwc94PxNMjaMwgobwjNRAGDztMSgDpLHLNHQxaNcCQz7BT3mMPj8TRu9NFSFcSwB",
  "key39": "5kZHbsinGW6jd3q4BqHp8yUTtjExurC2kCTV2HAnoTWtowBuxRaWakXyxfFQtEamoQXhChC4f82cYncMFz5jobqG",
  "key40": "4Khy7jAG9tkRHtFFZ4GEwBot7jEPVLYuY8q6rnsFi8jrz51JYso688gSLi1GxLFUeifTs2NWPxeH4WCeqRmN5KQh"
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
