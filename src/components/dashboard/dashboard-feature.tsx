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
    "SoQ4rApb6sb2BtEJJFgQQvUFgD4B5De1dfSGbfqoSZHfDzdJeMcSTQXfAd3AJ5JXsapXnb1abeRvaQbR5zYgWUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6WG2JeK7myfxWwZyMDd9MRSVyiG9WKU1NSTdHRHLVWqWu4hXdVXCXqXcZCVuZeFM7jcX3X5CtvrNCrW1oUT17S",
  "key1": "5t1DpnGYiKFriacAwGawTgex96U35cL9xBg1PzMHwxcmA5VyVPGbz123d9mYfgb2sXKomGTb7NsuCZ1m2QFVNAmq",
  "key2": "54WyPYTdEyWcs8j8zhfCCxbrjBKDVndsZWpw6SfaE1fDC21ajRXThzZa9TG2sbf1QRaUcqLi5rouiJp2DKgLmKRt",
  "key3": "YgmcXtcNt9jDdQCNaSMMCsDzNphCwoDwizQEwth3sFWZX1FiA7HzMVYzsmkWeb6hsAjawrkPDsv6Ks3pp43TP3H",
  "key4": "4a8rCV7w8CJvvZTHAYQSNsDPYS8bCiWTTdGU9c6N2oU6RJsCwG3n9dCWCfwUcgxr6G2YMuG3CTUZKG8YHav18jS3",
  "key5": "3tGFyLVEzVCDbXTgPJtAyVt5HK23VWHQvnqALC5qhFreD5K3U5oGcoZW5ZP3aYBNyz9V7qAFvZWZRf73LZyvpaQe",
  "key6": "2MwQYwofpPwqWXZB3qKVJ1j3e2i8AMPJbQevuHmHApHR5xg9Btx3Ego1fejcXjRjsZjLhHdGWqTnYVKcEtNi3VqY",
  "key7": "4nAwttuhuuxU9TXnCyzQoxCxyhLTDU4KPgCb2BY3QZa8r2ffaCcTvqPQyBymCbPVbWrtjEFAahdghpTyZj2m99e7",
  "key8": "25xca4gHYGBMm16roLxm45VYaf9tviVkJwZpSL8XNuc66EV2cML3gRvcvrLiSdomEoZUNhbrYomoQMtKEWcASCaQ",
  "key9": "5jgfxEzYij1nhRnSWu7XPe7xE3Z64MrtycxWM265377sC8datpteTnDuUr6NgQi3UZNpjDUNJMpFHE9Vp7A7SwxD",
  "key10": "166gSt5958ho4EAWmJqVaysLrt1y456Hcy97aPDUkNk7WZeYwpDNDwDLjEfyvXsiyBfksSkYFnQMiZvNhyTjbUH",
  "key11": "5C4kvY8DcKBXFKv8hc4LhdLN2tKwjSQnNhZyKCaZdKJfRR1SqDoUvU5xZ2AvzDaGbp2nDiV3Dzygp6y1vvQvxFEQ",
  "key12": "3HF4vXBUvLiDJBiEQXmps5cXMFCjYP2AFkZZkxHMLHCdAzQtBUf7zKpUSX1mJXuAxeDvRzN6aL3d7LWe2t4855WV",
  "key13": "32FyUEryBanxosaXepdx9WXe3aTRpdqYurRtezgBYqZbNJ3pij3ix1T72vZ5Cx3igdUTeam9vWEcpzAqWXGWVHQF",
  "key14": "2G5VBFeDDVbDtfi5hsrjJEePfmHEpdBfhsmaUdNWxM4mrqWopSZMfLeTA6qb8TaQb7iNJWXmkonN7k77yKTYNUKk",
  "key15": "5pohnQXVZE12CeaL4kVmuEDcriQK9C1MFfcipCAvFbSZzsKL45ZqUd29AmdNQy83oncyAim2rFT2xMCoJQsLCeQF",
  "key16": "2Uodrq8Uxbm39JZDpiWEKq3i5WqKq3NcWMrwPHeqzoeerVehJY5f29kD6dCwwJDhsbrqyFd5pyuKnZPxc72vx1RN",
  "key17": "5btVqofjQq9EX86xfiFwPEgvcSnsiXKVpKBAeBPJW5vYgtM7BJCnt9DZGfF24Wkfo1pALNagW7TYLrf567Wbr5KW",
  "key18": "5dVRWXrg2srusL6aCB1WfQ4dFgDi2Sfa6rarvWiZLKYcctu6JCVieZ5GZCHf9JdP7UbiDdZ8vZQghMKDxWNghaRX",
  "key19": "ZJatxsLRmhJVNVMSwPMRUh1QAQEMVUssnjmiBTDsMxTUyxTHm72E4YkkBtZfKJF4NcTobRxAW1Ge7HnRpjAx326",
  "key20": "4MryfJUDQK8hR3sDAZnbBXebJdkNWhFLhhWv6zbZhxN1ijuLcMfUGrZHroZw7hhDyeQzXkSMKtrHyKRBPPmUM14A",
  "key21": "3HHSPbuwGAioS6wzd4CRbLeKKXDp9dEvBfYvJ7VkXM5GvHBd9nun42M3QSQuoy72rKHJNw1YxhpshAVPpnWWf1DK",
  "key22": "46BJzVTpN3kFYasG7dQ4RnErQ8vGWyEzVe1f93HsiYnsaGiskyd7bS8CN4HRopAzsZsZ7jBumVS7ZqLzSVBZmR7G",
  "key23": "5GpPfTJCbks6zQ2pYPJhimEuvYUhSQApkiV1WFuV4kXrB78ZbySpEW8op7uhmn1psFjGcaKvzEcbuvWcyotvaE3Y",
  "key24": "4dB5a9FVzwkyjAQ9f4Qe9ZsXdyzwbjF1Pc6XFufRvPF8aHZQhb7wCvfzs7XeJ7XEPc9YnPNHHU8m5Svjespmi6XX",
  "key25": "5i9YVjs4X3t7fWAcUMTG85FUSi9U7B9FaTer1KDTPeKXqQbF5T3xwF8CamimoNseriKw3idASTDSktXRaod8Wh2U",
  "key26": "3mPQ2feCmAdFsCDxRMYYfsR7u9Lqqf2Gq6ffvDprw32pV97nH4H2ojHF1hvrrJQ6dTj6LLBxXvJhjKZuRUijbBH5"
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
