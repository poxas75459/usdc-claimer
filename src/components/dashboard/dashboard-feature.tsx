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
    "5GZUgEAPgDEnHD2EqLNYEfYBx4apANWc5pLvfi3V7ykmunwRJzDSaoDv2UTfS6hT5bLiTmiEX7qGpLQ528q5NVTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZPogYx1ArcTQBZUTdNuVpTtPXx8g8VkjBaHekph4zYFRgVtNSxgiwid8SSdTePeDxCJVsTAdWJQKsG3mBSWF9HT",
  "key1": "4nbyHJNpq2FUSwfGWpCBVw9kSPBXwV3Qy99RGzpXFrAe5JEGvk6SbASmnKc4eiJY9Gy1yL1DNWxygRgoEuXS1kT9",
  "key2": "47XpvWC3grNMSC3DZEZdF4cRiafR3GaYLYb5xFvR2m4x7gzhPEnKCxKMt5z5KKbTsPEvpV2J6WkmFrMHqrG5uEGP",
  "key3": "2cUZAaUJMesR4C2B1GoPTuVg9DnkgA3TvsSzTmXsEmZnrTvcvxNjrLdChNSswzs7pmBR3AdURawjwzaJZRfPDMRm",
  "key4": "5osot35yXP6BtHY8dkyNXPjSajB3PtN4y8VTvpByAU5HmZXkEHCkMcG3rKYKz4CpnYDTXPAUyNvyRVie7N6Tf7fK",
  "key5": "4UTjkX2vVJ8DCh1QzLKkm2atVXLAxqwSQSo6WgGaQkE2zofR2TSS2zYRuGMcafZdzDwBGuNH5bjXpeyNzFrQKvXZ",
  "key6": "5YAmA4vifkNyhNcXnSLFndAYtA2M2UoQvWEmQ57QgjFHiKnnA7GAYxSm6Apo8vsXUbBfJNCZ6tyEEuU3ePbnwzg7",
  "key7": "2arDW7fBY9w8XGpfCjz6UiEpiRzYdrr4XkvXN9GYzKbnXG8zLwmATet3Lc6EHoGUQwkacbYf4BrjS2xVu44siwby",
  "key8": "3AVDmTCn9T3SjuvcpigR57YzwQhHmEbjD7YXmnKp97EKCQg7rcz4TfNW2qdYA8YJKJ4kPPL3C4NKYCGDQAu699yN",
  "key9": "2QNXxSiajqkgbMyby3WPLmZpK3jQJW7jW6PEe4VSg53qdf7tiq96Z61bWq9YKDLCcU73bwm8pzwJf497rJqFugBP",
  "key10": "5e6ou9VU38R4i8MwD2S3sMrhFWjUufJbAJqyH5CRMrFboTNGN11nFtZabyghc5WPKxtFJyxC3hENexcg8NkLtqdk",
  "key11": "28qVmwZgKnJQv85wHuJk49ggeAuFAhuEnGdmyp1UX1ik4Bm4NhRum7K5Pn4WjdnNi9b8pfgCDHLKF1MruBWUsB6H",
  "key12": "3SGDcQNMqfmX7Xsrmh5bQ1GmF6mocmBPtaD3xfuW4PxZiyQxNP47pNSyfrL1CJMeWHgrUn2c81ksP9cevoeCUudU",
  "key13": "2sSnFGRZjLJPgyBUHRMXVXKUTSTGewiD9fJFfeqthuvjXgaZ553qVV227suWxiPZP9ZyuHMNqbSy9URQ4ZN6QSUH",
  "key14": "2U1tc6xd93SHwUvCUmT8Aq1DQkDh7bzERoW4uyBgQoDJ8HBiHTVMkoU28DXrxCBBdjoLSaYdj6jskm11TV3rNVEi",
  "key15": "37ikvtTFHVirJpBbFXG6GsRmACvt5Q5TL6b14bbzrPkgrSPBhuYu7cckwPYWmcKi2BF1LBT6qxc8DEBKjDy4vvQy",
  "key16": "3YVwdfNdA8qmJQrctpB5aEMH9moRKKPPWvWdgfRSNW7djFwLPrnnJXS7PYthuRhxBYWy3iMuYxTsRPmwPMhqNWzw",
  "key17": "63M71x6MF9PNbrnSY777ZtnTcycetMayENStJdLx7pWzAFXsG7fggHtLEvzrhBsV9PnpxCq7XK7bq5bryBUt2qWu",
  "key18": "3njhtLXLZwLys57LCEzmo4TgaNZtXG2SSTNQuP8vnZPprtJXmCPZimHPYuJWLoKjxAuLEFgmur6Pf3bwhwsQjiyJ",
  "key19": "W9Dt4h5g6BdBsqTcefh7RpPLFJSE41BDMDym71VNaLzpLBx2uTbLoFRW5HXXkgPwfPxC2h2mLsCMuBp3gSA5JvH",
  "key20": "5kLWrzVYnVkeUu5hoYB5aAJqrJekAcdBVKD7eLmAtL8pNZKsmpL2zEMXXN8ZsgMtNKJWdpVkruVcHfEQUCF2syQd",
  "key21": "5UMYXvcNn47rX2PnhcrLoQg2sLbTJWk2E39s4wVWAt1ofAZjMSt53RXEJEPC8sPo1MfTTw4bAoZmagwg6ZhCNMw6",
  "key22": "58wEuHZup2SiHYqAdxSZVKhv6r8eBd4wj1McEKn8yRgdJ5oJEyR9bfyZRNtgyvHdHfDEEJXu761GHkG94R6N2eMh",
  "key23": "2zbvaGMYnujWfMjxHh45FaUXgKKmffraekE1z6nosHh1vzstCiv55Y2MkuFmxpdtFVxsjqYoseHMym7Rk9an2Kw3",
  "key24": "3tdXT8EYhpYLfDKzYm5eoMUqb9AT7sD2t9ZSp5aTao5xBJN8dkNFyjGWxMyygZ16wzCsqPYrjgqDYvw55jhCStcm",
  "key25": "dJhFujCN4G1wRn8h9twjiDoErG5F7e954BuPpj4LDhbXkfeaakTB5zkTEcnw8XCPJGx1S4cR2SpEZSF7BjrzGXv",
  "key26": "GtozouFCi15Gc94mfcWkJSiecaMxPszyqAWCZmtG7ChFr1S1VzUMnzhjThMwXGCcyjPezdM4C15ZRE37jRYEyeM",
  "key27": "4mBugwf6DvyYrfpnafEgwvEaAgS9V61BXYdnwfrzkzdaSae6e8V6Dsg53Wn4SfWHmDAGr8V328B3iSqDQGLPGBLc",
  "key28": "5KX4rjdcZhcGgqaT3NKqJqn7EJkBeuafpjpcbeJdADLJthtX97i55UqykSN1fqSTdqKc3UVjYPdaQGYA6dL6Dz8x",
  "key29": "3pHWAVZ2wEHDa2dm5rKq2DVq8HDumzksBxzai6sT1E2yngYp3XeRyhki8a1gjT71ogcppdLs7GrVJCHius7KcpXu",
  "key30": "9CH6oRqWvnxHQ1sjZdiTqNA1sjwMWiDDm71b1vePWiXybEs9uJDiQx8sQsMnSD5xEN94YrUDvq115rN4tpVNCGF",
  "key31": "34PoVD84oqHqpMQBvs9qdXg5shRjnq8ge3Y7Sd3X1RijjjQG4RTTbEe1tgGVYD1UyHBibB6VREVrSWnY2jCx9YSb",
  "key32": "2x9MsSUc4rE5RrVPqMKBZi3pDmoYYuY5676haFdb4ruDo477ZUEsfNxv7ZMuLe1LiKXTrdkknqExHWvFQpA9d31b",
  "key33": "3LPYa1PSJmHGLAhWQiD7UuX1h7ZxZyHVmRWE7TGhnKRHfi5rKUpDNXjbjwLvgk2pdt7iEZHfNX5LDX6fpDpUujTD",
  "key34": "Htb1d1SZYXgPTW49ngbiGGMLAievLhrZAUxSBt21wciMAGsAuALw93taGmdX55mk8CTFivjZzTCc9ZoirRikdWT",
  "key35": "2hWvvejQbfo8pPn5gGTkqXVYeMYFBsWpm45bFrLNbsAtSGYoajzTtWC8gLZqm5Urp2gEbnneK2yNkcdFsSKDwNQV",
  "key36": "wBh9gWZ3wFBGA2LkLpL5swBfDY8SU6GGYXnxzXz7c83hph9Xtk95pn1Czdo7kRF7vauzJvciLK98673gRFH2c7A",
  "key37": "5RFYjjjLQGtQ13eKrdAWa8qoJwAYxtkPDPoN4Amk5kfguqVh4ZnZoFFUwGb56ykAA2rW3jymB2pRwEEKESFey8uG",
  "key38": "2Q1AjY93xhSHpSmSRdpFpn7euBG48QFrbQMmTs7E2ao4v3FkWRFeH88m8XmUrTz9iZrQ7qR6L6dyio87TYXWkRpv"
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
