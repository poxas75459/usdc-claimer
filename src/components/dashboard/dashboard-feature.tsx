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
    "4AYQPWPPLTs6q8WDLfZ5mMpzrvi6FpC8p4quimmB7qsSvDwJZzKRi749q6WWAKGsScUiGpNNbJ4xes3BdWbni1of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rcaHS6kWuZVTfcUSXPaDezThMupXJStCaQ382i74vkEMYqRYbzxbusK7DyoQfjJdDwFuAaNYMcPYbQcKK4gbfa",
  "key1": "57ZqH4SQd2L7FacJkyY9vGab1iX5d3cmuAczx6JBZoVdZyA8xTdWyDtwRH3hFUoX7ZRj5kP1Ttt7EWBJcNcpsveF",
  "key2": "5UoFDSkXhdvCuC4Nw5Ddje5aJ5hqs8wsmH9zsWJMashskUQauDpbc6YTpFTraYeYZHdFDm5jKfKcV4tr62JM3T7u",
  "key3": "2DRaF8hixjYWwp8tMPZ6qqtrU4ySw8GNtpF5d5Pugoz2gW9WQLehEdcN7uhoDvG9Ua7pquCwdvKSaYjTZXKTQirz",
  "key4": "Wu1hqFyUENNCqzpitV9pQRg75yctnz1Jcy9PeHqgcLMpCGEcArM1YLvyeRX4pGRF78JAriRjByN9XRq5fsxDEK5",
  "key5": "4gUSBCVZycfauwickyNWskR1jUpyi8BnVMDAGhkpWsM9Mc9231VDXpiqx2CCHA28Avwtt8mqBmMsRgAn9MLkooEN",
  "key6": "5qKpDoi5eT6oUEXYVfBU2CvFNVKbQGhWSxDzsXQrnUUEMchH7fP7QrM1XeR1aBTxbKyEsSbjHSi83drnJ9Ruzkfu",
  "key7": "3BV3ydze6WkAdKyFeBAdQbXWMHJTTo8jukUQm4rszPRQJzPKXFAKq6HrHqBi4EVxbpqMc9S9ErS2YoBe1gYUqiwT",
  "key8": "Qaf8cG7XFQf2P6iPjhRnPVp5mLsDFHxJCy4wEN3HN2b42544WoWwi3cWde9A1T6apBneekSWSAjWmgpb5vnPxec",
  "key9": "5htUcaaBJHrbq2gPJG5tkpExm6EGooUvewTQDuxminnoCJqQSeukF4VQFCSK5eJzP4KhaXAWoP5MHusQtd67HopE",
  "key10": "46DbCpXrDr297EgALd3Z9jjsjTtFFQbwS3bh5vM64dcDwoZzTJiLTvm6KvTqW998CbWNQYQA2iaLbrmKztJjATjS",
  "key11": "2ZCUQX5MfAQhMr2ok2RNgBoKJfEK9PqgaV2sHmjmQtkPfUPv7WQRrGwEuCdjSxUyXC1Stzd9KrZpghi1DvpGZaaE",
  "key12": "24uCSY8nvHHAg7RHGq9GDato4ZUW3u8dXren1rLxqLSnVwQRdbLf4EH1ZDq2A1K8uJUmYPfRyHKFRgJQtxCkrKGK",
  "key13": "9LXQitAszmR9VuEjNiHdVqjRWa37ASPKvY3To2eEEW4fWSXXanPBZMZbKjh3T7F292fP8su4RwWBtUsRSQZjrFQ",
  "key14": "xaKDykVn4sXDJ8LXaKgNTJchZtAneLtpgkmhvoHyX1Tr19H99k8RgteGLqaZHVHbFxjhhpPTxTwcrUSTquxSmsJ",
  "key15": "65Us1cpniyKRP6dw8ghPyHL2YLQmE85khsJ7RHSa4ZJmttvyo4gw7EgndMndV6sn6qLtcdr4da2gnGp6i6u9Ji1a",
  "key16": "5X4YwyBf7EFvXVr6GnS6LKGwSk8royJ3sU7iNRN64W4goELosHXgKt8r7vy7x9HVVrDRDktQhaQ9eSmPE1du6yeJ",
  "key17": "3oxVSe1zd9AGX6M4cWbTeWE2tJSfXAbSoFYhEEnV65MtfjVFUVE9erLJU7bm4Buwzq8PBd6znsUdP9Uy39EVM1ib",
  "key18": "3DZn4Li9XDSDdjPzf16ZpDu4RUof78LoAY3izaGPZn2PBRQVyaHM7Qq1XNAHw8GrFftybgxeNTeKzF7RZWUuHyVx",
  "key19": "2CacBoZpfVPFn1z5VAbkN5Xm1BbgQkt73baECYc98axYqkxE1TpXR2M8sWkZCnZCzQNZNouVc8sfMbyGg4rcmxZf",
  "key20": "2y5ecArEMUKKfU1Aj6TzAC78eJd3YZkVJ9VNJK5iSVDYFg3MwzmN5hEfidqnMRnmh9TywZWvawszH9BYJKJNMDLu",
  "key21": "25trEUaQc29hsFjYVutmBHw9TtZS8bN9oahzC7P8M2a5UhqxdAqkxmyCr3Z1qbN9ufXZ1kWgWGPAmmNtr61E2QMU",
  "key22": "4gyUZJWafJUjPEYY2AeEz8SarPELoBrhWntH1iJofHQa4KctfMq1kTd58VZSyBy7pNqHDUxhktKRNw7jarFPAAj3",
  "key23": "5NVa4nPy5CJNZq3QLYPQCszCFpRiQwjzjkyzGSQxvxpSXo2pRP8jnnrRgrUTpRr3Xiz5VgAJxiaScb5gNRVJFT4o",
  "key24": "2MGYx4YthvigfUNc3a67eYhEMwTAH3H5sF4VdicDUSbPjU3TP26mwXhyHusxDiA3dZzG27w5GtTsuFkWt7gfiW3q",
  "key25": "59DKJJU8HvMwgHGVe9nj1FtC4vWVaCpqFz83Rinoa4y7smccz7arfec4e7UFEAfq2Mp5YGAu5mhpPRTH6B2bcd7x",
  "key26": "3JQ4YyNokXRamMrn6b968Vv7KxDXARAwHdmmRrkTpKJWKs3qckikGFkLHG32WuLGhibMEam34vGCScGUGDesbqk9",
  "key27": "2FrfAFpNdWTQKqUURe1VMQbDi1Gtf57Z9hrs93q6LEmyt6kq8BT3QFnXmZfrUvKDcYp4yxQ5ujT9Zkwhbgyuhfb7",
  "key28": "3N99Un89w86FFa32B8avjV62PQSJRPyzww3nEiCjkBxWXfSwU1SMnz9wUDqreEdmMnbn28vogvgT2vxaHcgqS5W7",
  "key29": "4oLV7EEEigxpAB317rA8TVnrgDcUgGDVgvtWs5Xcok1cnWPWV43KhfXYrLAzE7Dufsi9vc6n2fThKLBo7vce7434",
  "key30": "4JYx3HmFRkHm2qkYuLvq3fcFDf9p9tZtogEch3rLKoeS2w5k2rwNL4wuCdMnkMuLUBJfiKH9ycstsoiTFwNFPUT5",
  "key31": "5heFw2kY8tTmocXxmcxvDVDKyYdLfRv5qWjmTDcTLAAVK1f7xdsj6ZbFPisivggHnAkqUos3fFh2JrUTLLtGxvMz",
  "key32": "3cfpJFLdK3zEcRppMEp6HqKockFcaM5TSu6n5oiRVHXVadVYBADc9zLUoZQ4ANiVHVWNftjQ4iWT9pa8K87Zq3wm",
  "key33": "SmPNNuKGHCUQQcbYaL4AGV1y6TzinoNvxS7vu9Wvmx7uCupWcDJHNJs4Vstfr9f2KyKgGDQj7Yr9rZPDQdGucYN",
  "key34": "v7WBanCUXd2HPQjWgHDYmbemASGrxs8UHHQmvCmTw3JaSUMmr3v8S1oMGeKoShBRxBTVxChrZemnqWZ1rqGrfog",
  "key35": "4M5h4HTtqXzKhk2fKqwZhrRnbhdH6dMSkam3kCSqTbRnD7RPE9rDrJegcBuPvtD4UNXFZURAeNpAZvL9xDTMKTXj",
  "key36": "2vuWgtrFFK5U9RV1Y9QLCmbsU4rfv217GQcuAUcAyMubmE6Fx56D43F4sfgjtPsa2RKtpgfsyMwL7uLPeAMEvMeh",
  "key37": "UmhrTbvdbzacXqHJmvsnQMag3g7C2i8NGpTkUxBKybg5YwyUxVN1c4CGWUd7RToRJPcwseGktH5YGrS6ayB1tQH",
  "key38": "4GWLJ2kh7aazWrngfPFitGbF5288vfZanb8LnpQGdA1pk2WcoCxW7hX5cJrFunFgCTQRE2F4Lq8c5y3pVGNkSxdc",
  "key39": "3KbuTfVPJ2uwjoSjSF6SVoG12R35Rha1u5bryPRxsSWs9ti1DCGc3HssGV7cc2X2BcqWvLBGDio6ARoYdeyBkcCY",
  "key40": "3CFv5e8JWeTFwJKovwGsMpmGNz1SuAcpj41tRb6dgDgD1TMicqntW4QGpPAfHuUbpkVaMeUYCuJ8aiyH5PCqpBxd",
  "key41": "4w52vQdip3tfzehtTvMkKfyuKUNzBKgpmWp4R6QS88DmDYs6WcmDsaKhdRwpyiZWZz64sHfGieEn5UiBmyddJSqk",
  "key42": "3PVnNies9yYvBWTt2iE5KcJzCituHw5DYtKWYZ6xpWjMjRvSPBe1e1TJndXzorcrXo3rfx9nYcogmqrYW2DjSiux"
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
