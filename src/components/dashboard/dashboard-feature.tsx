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
    "4Rek62vwd6aSaMzBdkd4wqs4Vd6gcWUws8kWYEXcyMBsSCSdzHVEheaGJFK9JwkMWw3fguPDuQFDJfS5f5ek1Hhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwPHPqv41MuzWJyUBQCsQeoRei2HdZW39q2kqxbMzLnSZUnb7dWRzvs7Z5F3Dih1uGGuDqvdDvaubz533K568jE",
  "key1": "4ZCL1yP4gEEjkYuppRhHW1sx2etbZSEM8AVvuJnM3Fazs3aRwcGV9vkDhsBWR1fEuYkTPuaQ7QgagAWhREbn1Dy1",
  "key2": "6zBzmnDcqoJuVbLhvJboHjUJnfwQUsDFy4NeEhSRqC4nUnAQRnNgR7UHBnUmUHx1UJBX6TWEkBZYom8Y4R9xK9i",
  "key3": "3SYhoe99KRj2Jyc6pxPZgWWpsm5dc67QdBaM1UFmPVbuNHCwhHj47tgQgr67B9W6No82jPvATJGJuyXs8sv7MMyF",
  "key4": "3Bsa5uroBhKqqnxqYzPHmQUrhR2ne3am9mNAsKfrFWbp7pFGX4ecqdKn4wqnE8fDwB6G9ZFbaN92tvjNgucptkW",
  "key5": "2mhHHLvVnqpEwTZizi8P81S33E1cqhBQdvLBowbXXWqm6Eq1banJuQvAQf2mcdLQZMpXbknsonoxAD6t4t8NMYMj",
  "key6": "nQ3SVHvSj7CBB6vbFicDfEXuocZ2sWCRP5uenXKpYjuf9G2of2dHfFc8sGMzqoEQdqDpypF2m2ZPmQvWAFAJjEh",
  "key7": "dhWcLJWM951GBn7VYoifWJJwYTnc5wr4yAyGYv4quPSVBDqxKFbbt6wmsXvneSpDSFbUzBPwWy81PQaZZn7gMzm",
  "key8": "2gpviW48sUHQjU3CuJGXxjWm6bJkVht7pTV3WdnM61fqdQ8UM7bUrjZ72FNfgCgs1WqTQNDwLjXxDFq7wsa2Ua7r",
  "key9": "25MuJor8yMa5KdzbPMjPWLmpodG8iuuSUP47R5YErFoKcrsNhE5YcVWjfBnhm6HH3hczLJL2CHWsgXthUBm5c1Mw",
  "key10": "4Vdv8xxcZGawvRUYSn1BH3fDYjVLUh9xLbZSQRvbeMJUAwUfZQDgTh2mRnnYXh9otWtokC7AcVdUGbi6m4hjUDA1",
  "key11": "5kesV42Jwbiw3sZyLruMt5qb5K9mdhSLa2bUG63pWNN8GTDmKo16nP7dCxqehue9b2BNahBbNUtk2NurthhAdfZk",
  "key12": "3VrEb3Arsh7oYjmfM1Fu9FSLomxXTpvRXFtLX9KLQRsAF6ZQiyfqcXUo5QgMzn3VunsnPqWtgLGkWDQKiJxA6GJb",
  "key13": "34mrMif1kazMixFoYaphQ7eMfLTvZjDWcS1fKLza7zwvzHFwqzT8x53qY9fr3rkMSYD76Pt1FW5jfpypVkEZ1yJV",
  "key14": "4TSGYP2X1Fc1tsB6GTW4Nyys8zJJLYn9L6w3CsLEK9NY5mWtbR289NVkDvqjjVHF1obXuQh4PriauG1XiuqhmEr",
  "key15": "63F79Ys3JnKSgvwZfiD1fTsNnzd17TYhNnyaEn3iXKyNRPd2VKFLJt6QBLXF1VEg4YaFL7aHcKje8PvWaguBv8fP",
  "key16": "443jsVYxFDiDveyehsnMpfxi4Q61mh8QxTmrsUpJsHFauBz5fxhHzH8aZD6npwP9z6mBhRbij3CjvKSrHyqjgsEe",
  "key17": "2Sbt8QuhuBXEQwWMEPg1PDWjxiwhJAYDxEnRpnazRYy94cGUJyrnJGsCer7RqP4azcMjMcBttPYpaNHi5Yzdkg1e",
  "key18": "2j8GRy5bPfUEn7899sua7T1saKZCeuRHmuWeQCcnavW1t7vjenwr9ZzM5qSHAakzobBTMv9SeZnk1c2F9YazQCcZ",
  "key19": "4gcj1w7k2Pa4Pj1AE6tUvV8RLQB1JHD8bM2qpBzXtxQLkBfyPoH6CdEX7ncVStfvEK7fkbojkE8bXnKUS1HsR5F7",
  "key20": "65DAcsxVAKBc5ya3NP7HRme62Tsof6eUbXw1XSDZCcpGBv7z6LNNxBCNm66FcUDyGGFh77yf4qRs6ZueCgvsLhyZ",
  "key21": "5t3c1AFrwSd3pMWLCbhQL1mJaBqJkpiqWBPCb2gyVwYQwErmJ8zKKEaDWLgQxcYjg2Dsi6XGiGLbHDZ7d73RvjfM",
  "key22": "2jA43G6MN2YF1bQopSpZsAm2L9PQvd9uxXeNe7jRZmQwgvCno4AKRqggoCDubKGjK7ATh3hC3exgkw5BPC8FW2pS",
  "key23": "YL95H1nb8qaXTk2Z2snnpajNwTHfWfhCvKMch8krVoeDmLTyejJSUcrdSrXxt4pMu4oMwjDmvgQz9WzPpHz1e2C",
  "key24": "3jgyeXJuMCMwiTqKYZsUZ9Xaf66VYCHBDfLDxm54Z26oN3kdWnoJAg1YxU5mSerYMYqk56EUypjHZ7whudZP6TeP",
  "key25": "5oy2SdouLZGtq6QZhqsB1axKjrs6C5iZH8JjSxUVzMHAqQaMtx63Eazu7D4A1zKVwRdY1VpUxn73t1o8YcY3K5yi",
  "key26": "TutnuHbNPp8vSAQvFf3vJaX1VQNQbXJ88a67Gw85yKavsBKhDt46ZudZAXNA2edyfSGEwd3q9x98kN4dPJWhfzA",
  "key27": "3UpAFxUspJnhGPYZnFzfhi1RmGtaFyfL55aVuVMuGaE77LF5nsj7BSUsFJYTVWP4BDuY48asewo1U55Jxx8Y5tSM",
  "key28": "583Xr9nY19sJhDPyp5DnqJeCcqCVuShMQ7JJbYC99EPhVozgPvaaitDHL8ZJsxwcTV2w8wBdDgumRQ2HBPN4zAqB",
  "key29": "5aut5wTMF721JmfadAbyReD6feqBYgNma2C23WGWC1XuHzWf246fPT3EqvnA5BgUdsXzbNiYPoFF1MbGHAmbqUJT",
  "key30": "3iXA2GgvqfWdCuKWga5QeBM7BDTxZwZ3MkZj92HBLUSsKv1LSubGaB8cYBZAedDFi4dz3gvhizf7TFukJ3ZmaxH1",
  "key31": "2GpticmdJytENgXKtK7H8vFtikSVra2rc6WjhStDT3cCdqBvRtoPzqzLfD5ABGqVDJQTVxW7dLVgszomWEzPFiSA",
  "key32": "2Kor1kFWZmUiHDxg1tqsifgUBByyiLTcQTuRjPKUiGKTdeH6zKX3rKXJSkwsZuLNYCYTrHBAMZ8srskBvKQyk2pf",
  "key33": "2CgJtsu1kkYLxJdBT3vV1Lf4QTUjUgVABR95K67iL61LuCqD2KxZdrpsf3qiFeEhFwaeHyjiCe2nhPpAcV4jpTVJ",
  "key34": "5UWbA1HoiPAGFWC821Hz17yj3STxNCjLxcMtgGbYajRtqr5cMXk42cC2GWB2Hc7L8hiYWGdQCqmG8TYehDziCz3R",
  "key35": "2bKMhKjG8SNJc7xowofGpbksbddFMQHR6h9YzaCwCv81kDE9aHM3BZ9sbRt7YaFMQwYSZpy8dXqVMdM9uagaN4sJ",
  "key36": "4U9aXNudM3G8RvEGaS8KfTAfoB4qiX6gss89CyrHQ9grmKwnVGhSY367CoTtQxpNiVacZrvCaCwY6S74hkP9yKWg",
  "key37": "5EUSELSWzxUrAZ544rwLT1srmwA4GLVWDcFFU85SVDCitZg2tG2qkxQebhMEzg55m5CjgVf9u1BG5emAdxxXqUdY",
  "key38": "3UyEiAY1KKE7R7bggokCGheykKeLKTi4EZWizxyb7GhWeu9jyUMaZHrpRJpRfUFFgs2LxQaTyPqE2sMHHaQo45DC",
  "key39": "3EKB5L5vQFuyeSU6jLXLcX4fEDe6JxszoizV3QpJii4J3nezY2oHer2mRETNS8Ua37gV5BohfvB7wen48mtjWeFS",
  "key40": "5LEeV28WAWxb8eMhrBbWkxNx17r4wcSzXSe2Vxsi4YdRnbCnUvX3fDrTrYa5pfSZ8oXKeqJBFWEgWqEr923yNifs",
  "key41": "5rvHhwErp8VPy2Q1w3ASLzvWEWafcQdRgwW1SujfnxrFgjeUZ6AmbpnFmj6aujJL2eMDSY7dospPHektyvGEWqaY",
  "key42": "3BnDKU2nLBHh26oRfXiuh8iH47wpKvixrP86wV8rakuEfcVP351fhVat6z2APg7BYQc4ypSHBbShnWishaMmH1ev"
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
