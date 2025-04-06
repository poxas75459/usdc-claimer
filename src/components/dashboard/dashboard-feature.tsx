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
    "5qT2558pjouKtAFH4X9xGxd8agiRYpjyhgEnwvtCZTVqGtdptBP5JZbFyuWfLKTraFqy5Ct1jswVJfoChN1f5Lzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58MJobioipDTJu6s3EzKpXbwYMPdpuLBjdfwt1ePeYsadBHxWnnQYRWLL1K6iV619DYGwM4g3tPQxgdaA7FzdbTw",
  "key1": "5ywy9jRa3bTUgtMBpjdJwqbADYHxhgsQzQcq5UCo37JYsisEvGoMkvzGMECtEqrq8i39cKcPAi3uiTWoLJ6Jw8ky",
  "key2": "62nr42z68shGSYvBHtnv7fthAPRN9aXjxAoVJRuopNjgn8XrRY5HMPn1xrhUyUfB2jeYTBGFzndL48qmeGRrXM8W",
  "key3": "U8gTR5SUXvg6FmqxsAoTxGnQrREiiQs9KsY1cX8NMxW8cUtu8VVqVGwe1q2z6RsAThwC9DCWVXnkuk4Av8webdX",
  "key4": "2YSX9pTxwhUfw3eXxEzPiDddRbM2o5F9U77KXD3bs36wfsHRUi1FD9ccSZG4ZKUeJYvHtic96VPrfdqnmfDuz6cD",
  "key5": "4pLaAyUHzk2Q1MVyESicbeCE973frZC6jkJm88Er64s2MQeC92sydW7G3gYenV2bMCoLcSe9MpCMVH5uAzoXqQNH",
  "key6": "2ScQeshui5zMEsbp3ThtfgQGXuHaF4RaUB381mRzgQTbVeMxccWXwajkYeuoVzd9GxBWQq9BpWE1iUJzPMS168Vs",
  "key7": "5asTAbbT3Nc6Q6HvWpvmQ3qUuJnB64opvtiK9JA947Udd87WnASDkXa7Zy2hC5psm3ZovwjxP2kTWeBRrrSDXzNi",
  "key8": "4EQm6rEnidEZSYBC7j5DAMvr9rbn3bkJCUyECZkfwWC2aS7abhs1BFh67vwtkWy1XphixKsVQ8VajUdvYeGhnu79",
  "key9": "4NGVea5jWMcc8VFcvsnJxyRrq9Y7Xe2swKrqb8RHXUtVCtMFr4Ubi6cgjz6JDY81ktxGRwTe3i23rAPiXMCM9zME",
  "key10": "4eJCMS5BJxtyHkWKu1fYeAh5NJo9t4KC2scuiDFfXZ5VbiF78qimg2ZG5PKGdy9YtKLWnvpQVXBQCbBeeA3Q2okq",
  "key11": "GqSVv1yvtHSvz1dsxLTqWf5YXHwzM3v79xyGm2osQVmUATKsLa6wkZaU7Eh7NMiBjaY78Q5GwAdWmSbytxWLdGE",
  "key12": "57oxQXNy6yD79ssGRMveT3bffzbPfeSqEPkbs8AmTYp5pbUThdY53iGT1cVUwZoszhxRAXKChNRBVHBerP2G9b4z",
  "key13": "2g8vgDfrSPmNVXdoumNXcoCFByGQQ24Kwmf9TodirVmRNWQmbDQLTKX5csBDCgfzZ7y6ZTCpuLzNsdkyRtZnkU8Z",
  "key14": "3bSqxkcVrmCaXUxB5LbPkvGdq4MdnEVHvkjBy9x2S9gUsA5Tx8NWhnF5DxWf8DwH3yJi2d1iJshiAivLkxs9Qg1F",
  "key15": "2CwTqKbVKtWQm3m2UGp6t5G24jWMY4cvQFcV8x63ikhWN9RimSQUGw3BS3kUC4Fm7o7yyH1mH5vRJezmznBwrafy",
  "key16": "2nkiFDkex9imVT4u2TnSRqd9RozQk9VXkTPiJvwzAuJJNFpA4ZSEh6L1JRHj2ekCsJTjatEwzDP7ZSRJZLtBD8zx",
  "key17": "3AemYkUmyJhBYtnvTWvMn3RAKCNqLNucCh22W51bVDUEYn5KDZBFhBogb1krmvJYF2xxzDYxcAFQi7FHbP3bSvJb",
  "key18": "58FZowtx4GJ2iCebgRvUiHeqH7sxTfEokzYzF5bPMxDgKLNCQWFVPmJGFUYTMh3Ttf6FXrFY2iKk1sf7j6RS9aUp",
  "key19": "2uiPKdC8LLV5xKjo7kDNGSer1ky9RFXSfu5mDxD3ChGLUeiqDFvyvcqk5AmpAPjxZXZAWnBzLQeEjmWMf3o9ibb1",
  "key20": "2YF9hXaKrp8wpWtvzZTdayTSySnqQudMoFRbQzu4tV7buV7AZ4xiWnyPTN7JfDQ8KqLp28TB6QJE7xHEAM3g2Cd5",
  "key21": "4fSY8VNc3kTxEJ99w7ecgccH3qz6RCwpYSR1Xe31XqnhrhGqr5deJQVRDodfsS8Qr2BhHLwzpWbabyX7PKpmtzMN",
  "key22": "5gv8uUr4VEWGnXwYsm6z9YXgKAX16VrBcc1PeNaCJAMKdJ9tV4brWykR3kDiF1fi636gz45czfJKKF74hU8gzPuJ",
  "key23": "2LPjkHmz3Rs9qiaZ9VApomKFxn1ijEYck94hZTvgb5hDnrbdbppCpCuv9bv2aphez8wUJZXDg9TyrwF4uCMvJsUA",
  "key24": "2t4DNrfxbgYGtRPm4VUVdCAwpKWw2m86ZEishj4G3KguhHxmg45W28iCLQvMyLM8iP6dJJH3khXHfJSc5PeDFmCN",
  "key25": "2oH3wfxTuyGorkUaWmn4Sw3VjFCyPKANmE8qcqVKAHwM2GjfEyqgUdt6foMHDEiwjDKeRqL8QpoK5oFetSv7pkpr",
  "key26": "2bAdKQard3JgmQ2VqZYMpkGU92W3RfjLUgKhEpFea4LAHwaJCxsc6FkQxZsxpwf8vVSX6UAGYtpmeCjGe7Daxp8i",
  "key27": "4N2xJYcwvpwGfATqmtxTWqM7FdTTxhBVXRbvK7BYyXjhU5rNnRDR74mpMuMWPAidBoDqnZsD6JA3zT3wcDbDoP4V",
  "key28": "4wB5URH8jhp9wUWXShjxcbWvBChRY6bNw6xJNLNenurd7bUWDyKo5hs9RMLWHxPmiJqAQcvV59vVZk7bEcRLUpaf",
  "key29": "62WqJ3jAnoVpTfWahS1G2iicnSct54yqRP2r1PGVHUPeFygqxiAyGanixPyxoXzeWCJo1h6pnaPjUFyvK7YnL6Fd",
  "key30": "3cCgVY8Pim3FX8KEcyG2Fjj3UQ9cWkmJ3QLittGP2VifyxSAch3TjFHMgM3N16sLozVcLBsk7L4oowotyqv1fNVx",
  "key31": "3Rou9NjFPAKAdnHvL14iDMTc8rk2tN3o4V8dzcizHkJvdpvTgYNgBQHD8H63dMxH2JJxwBh1uQ3boEsGaRmfhmgK",
  "key32": "nSSy8Rmy9eTkT7Ea7EhSK7s1CearhJHfiRA2dYhTthjAKkb3zbSMohJRydbJi2eCatUnKc6XQ3FPgxHdYdUK58r",
  "key33": "3yikUugvzezshFboU65Dzu3tSRjFxQSpDcgfVp8JZvLuUfg1vN5PUsyVK3D9fzNZ2UVbf9hfa6gQLj299EnTCKEA",
  "key34": "iwwavyE2rE4dvw7z8C2Nk5U5XEEDZhMdmASwwVHf2a32Cjw38pficUHdti9rp3JCy5E3c5kbMEZM1gS5LWuYM6m",
  "key35": "2AAABdp3S4WoF9eQKvRAh35XaTKZukt6iDQGXWxvmLP4pRRaA4knNsc9ikTJkRYQFkA91Y1qpB8QBt4mRuXJE6hs",
  "key36": "4kZ6DdpKF9gVyiiNWrhw1pZYKyNSEXnt8ttnuNaKHnL5EY2KT3cvLmZYRQALRZsWoBhq1wE98CtbjhNZmsQKk6oA",
  "key37": "51HgYJtv4WqTY1Kpq1sUL77EdbbyftZbZB4VwHED4FMHZWNgwAYoare1PkXvoWFjc6TmVs6HdztgjwtMy6n6TKCj",
  "key38": "5WSzNe4AUxQ2viPtk43gtPfBG4LPEaKpXA5DPCdLWB5YcKqdC2eVAE565TN4x5Fd9aHa9QecbcPuqSsdfXH2XKBp",
  "key39": "24dsbRDBF1ztKXX7hpHzxiNh7FRBhWZM6dMRtyURJzr1oPMLC62GFUbuitGTvvz9xubNJLJpAdmyqew6ZEsVLqkc",
  "key40": "Hgd8ZBKxTFQd3jF9dDZWNJDNhPtmEZrdEXTiebjvtxmTfmGj9YgEyumg4urB3NEoPVyxRExFTGrYqjLiX3donwD",
  "key41": "2u2G2G2hbY59mEM1BCZ8KJyR7dWXMHh99roHcXJkCria1UVUNiB8in7wKkozbdnAorJyioTSeeCBuTG2SPaaB6k"
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
