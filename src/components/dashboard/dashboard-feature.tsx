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
    "5MjFRyR6SfR6g51ixbPMKw7w9qgakXDha4mEbda46sUFvwh2QrMXroXvN5Hdt2ou7NeuTGR7Ud4x5r6e6xUqV65C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51zG6wM9z8rFuAYEBXUxjtYgwfNtSWkasVXvAF93rF5mtjrwtdR7vQFwxC3sxEHQdeSVYmHgMJToKsLSxmLHeVrB",
  "key1": "NhnkwGa1naarWpBH3iAVrqmx6iXKxU4JkXxbaEJceR6fuv8Qris4TpCVXr9KKBhnugKt8DZAp6qDpntZeXvmhMc",
  "key2": "3Nun1BrhxRPqe8fcxGWmyoF1NJ8MoqV1fybxAzErQJiLnkksBymaEdXX6JmZ1cf5eQ6HCPzZv8NMrrDe12VKEwSq",
  "key3": "2qvd7H7R2GmeFMmD9MtkwMG9ttbmZtFQvxadYRBe2oziii42phoFfvtAxEhb9zpYGS5QEZpDcnXEY5xhqe4Qmmac",
  "key4": "7RuiG92U7z9NPBrZ2ncM3M55zKVSpayY59EDf2uB17GHK6E98woH7N4uVB5afjpFWg8MLAbDS3esboRvvF1DJsa",
  "key5": "3WKw16uguKyy1TKL9pQqvhCyvEGSuvz2keqgzkMF9JcyuPQ2YFZjn7wRvbY6zBuAT14vxWnmUTXxLDRtctZXe4to",
  "key6": "H7VhSEBMxUyySfP49h2i59cAKAaDmW5GDmb9EVVSgZYMvdWafrt8pxZHMWbriZHvy3zvnbD6kQWqRB9ZJ6qv7qs",
  "key7": "4ouqnHRo3u88KE6eWGhj14Kvt4ADFwbN5BqMtrUZCT7g3jdWoxzcEvTcGU5S9nBhJRqDq8SvWVkTdgcqEGp56aFz",
  "key8": "2rd2Sx38MK6f8tyj5kY6YGcvJoXwWNMK7tpoYrpDPvtp2XsqC2WXNUY6QMXKiQWqPYq19rGn662G6KLdVaXosj5J",
  "key9": "2TWS1hqh18EtVWzoAsAYbDceAdAVFXxEax3epWKuQQNUUfYBiR6z215YszPWUFoeFnoRRQE9VMgrE1bUfgT8Nxm1",
  "key10": "4NcDJLg3hhYaRwJ7Kg1sPUumXKuYMY9WjBH2bgx4a9GiszcRBo9vhZZkqhTebKRz1bMaDVZV2cfsktACLGEsLzbZ",
  "key11": "5Ta7UogChueC4DfgxoxJosyXGydrpGu38JFjS4bfw9UaFwawFKMHt6DP2yPTALY4y1jQdmmzs3CGmDMwVyFCczMW",
  "key12": "3j4ak1HqEbebLeJiopF1Ch6qPQ7BjEWXf6uSLxCmPtPm1Pfx1askL6AfKTJusR2TqPxejEajVvRknca45QQh35Wg",
  "key13": "4RFJycQgtNaKBNpuMvzgLTGceVNKwSUxQVgYehxTzdKQmjuNgj3KzJSFSfgUjdYv1M1zjwxWhWBBZ9gnAuMKMo6H",
  "key14": "5BGvkByeVucp8K3L11c1ZiRJb2J3Xot4tqrqTvrz9JL5zz6qkowphTXAfugJEeBm88uj3mW38rj1B6pn5XH22qxg",
  "key15": "88puDewZGDhzczyeDm4PiGMRA1ctAc6TSFm8srLQYxR86Li6SF3jhMVTu9eHCSuFMW1U2mN8eoaUhA1SQ8eMVj4",
  "key16": "2Cvwemo1hMrNjxCznFR5AtN7ySP6rYfJ8GqDs8pnfnfnAHjzSsvFmdj1eZgHyZp4ThQhYy45qDA5CW5hQPDGESYH",
  "key17": "53gngbajH15TpmcLaFD2sX9YHn7joZc1YKgsRz432NZM6XmT1RUaoJBUVQ996mcEYaunNV1sukXSucFKeHxMM7WS",
  "key18": "4EmstJ6Nbn72Rp9RaZQ32MTGbN9fWuAF7HdUdsMU84wcVJJ4VQgkZbC9fFqbfMASc8mFkaEFSyPeWmpFHrfnR9R3",
  "key19": "2z9MTQzfGSwDKqAZoLyc3PCMWwvzeg3BGAuir6VPngabegZaxoJxrhkM5cSNU9FdiHvA4b6x2g49gG1Y1hSaHP1q",
  "key20": "497BGEU25mtLMHjc85Yq9SfquBVypZW7nUPUYF46eFAnAMMPNEFNPLYA1nEdRXWxSeVud4X4cQYJHi2FcRCrj3oV",
  "key21": "5ojFEJ6qFgkYiSsrL9ztCmUyhmuLMYXTTxBKrdeGX7w3DzYq4BKx1wZJJ6TYHKXStjkfZUkYFjAgmduyB1ryFKeS",
  "key22": "5E1APqY3UC7xfNdsWQpzGvqu7vo8qsSBJZs1ibkBBwDZjfRS6VupaDBTzZKg7uxGhTG7FWsfQpGs5CbdEaf6tsKQ",
  "key23": "ZVkME63z6dSCDyqE5WPsJkeFD6J1Vj1peLo2GRz2xDwK9JP7WhYMUna8ExXLQ3yx1wvn3sACu8Z1qKcF5RBjLiP",
  "key24": "2pJ2TJH4fcky2JpRoG7PbNwEuhGBFCNUjPLab2zswgrCPBHoDFgfmDBTFzUKCywnMoFPhcR8aNXj6FeoyZUQgasY",
  "key25": "5ZUbvUyzkm2UdNLBGzd3K95VrZH6tSvRNou1FpdKsg3zsvuxq1W4Pm7WYYpufvJqpznMX3Fuj7C2stdwT9PkT5ap",
  "key26": "5M9umZDAuYe85fTL2YWPNkRvEtYaKAUkn7Wbc7513LsS8WvNDeyFzJVkyFx8NMr9ojmCrBpSEvWn35c85sureNn9",
  "key27": "2NyAzoj9tsTQ12s4aDKiGYRBm6JrAsZsTrkZdzutPCNNYED2FLyDZrq2QRPTCDSYoqU8kVvoe7RQwiyhQHsWpwjE",
  "key28": "71nqpihLQZNB3jpw92i3x7RckU8hrCxWKLzyUzK4hpPaVNzJaSsaunMT56z5fnRY4qY4ijgpnZRw7qXcbETep7n",
  "key29": "62UJuCxRSbEYj6PfuXcGsRktPCsnY9znouJApAV5BaHhoe41xVQ2ecprEy1woKGWbChoaWC8bFgBd9Mq5povzxgV",
  "key30": "5uPL1mkmytUyCjR8dFBT325gLvzerX2oZ95g9YrSsFKAGrHoiJhLpMLC7g1cQ1Uhhrzo557m6zWxmAYay6idXaaZ",
  "key31": "4tnhy9AKAbHeRXj34QpqhWN61TgSo9EbLiBCs3TMg6j3MZj4brPBmkJYVnFpbbPAgbuT7NvnRB8YKiAbWbK43VNq",
  "key32": "3MVbBSEhunVH6wXwTUdgMrn1eFJ8SzMtt8N4Uc4vt5kJPsZ4G83k32oThVUeGAHrd8QYadGubKM3RG6eTvxCfRdv",
  "key33": "2eD5dLGjNfNz3uVavBKzAXUAvQ8Tk5GwbjxUHJBpHKpZuD6q2K2NZFR2yutMDEZHC85ouRpectxphXZwsfuZ13aw",
  "key34": "52BCpp8WmXANpjCGwAZUWWeFQV1ptXLMsjbr38c7Resi2GZHsUvNAYSmnBqGCjXnvdvaj1cSNhRtu5oqGrgH3kJv",
  "key35": "2BRshfXtJr6VgTkDJMtbeEUGNApjw5T1EgfzPsBnVJTZG3i4fFto74jqDtuvagNQdWRmdZ6NvKs1M8pJZ12DnPaK",
  "key36": "MfofKVzbkMLous7NEbqq2YamJWQNrv34U8Xkuana3DQQE32dUMRZPmDmJ5eSYm95yaq1cALV3e5PbN5oSwcDhsW",
  "key37": "2EytoRy9pPwqNZBU4r2jitvUpg3CMsgcsKid8SRTULvtPnZ6arn8medTeqwqWyNZvxPKmk83TDNJ1ucWCDonSFSY",
  "key38": "5T9J5gcjCEY7ARAysfpDzDVCUsEFAfW1UJYrdCBgunsTc4PdpwTeRUoHyzo6ShftaSafRPy8M7rrWxMdC9g8szZg",
  "key39": "5jkyoiR3DA9cyg9JjRo4XfFcZfXsMZM9K3yoFhQ51EBf4tozpReX3XtdBqURwJnu37LR9nsnLdCYTH59oQvznBKo",
  "key40": "8FC4JDkdnFhcpig9KcCetTxs2jt79BdCsPEEZFS25BJbWnCHvknTKrPgawMFJrF59hUrBhFgF3u3drDSkKKos5J",
  "key41": "5Jq8fuHwnsccnyrHzjX7aMTnV2exKYiG8EckY9miQ6fNRYdLHo2GFSy7xHXSAhernqZs9CDqeZ8mYi4XZ5d2aya",
  "key42": "3gZVXCTW4hvptzLzs6hVnhhgtiDZeuqxFL7iZtPrZpzRQGrHBGt4MnNEMc9K1UjS4Hs6yzfo1hC6TpV3vEVWWiZX",
  "key43": "3cS7uBc7SmdmJ1rT5V3EVPheBD1egh5KahMgBDMymmgPyqBvDh4bASnK54qqhMeZw3fxTnQeGWqcL14Pfc3mMZu1",
  "key44": "8Dkwmqz9ohpEErgZSQ3wWeUPt1foWgvPSYTHHN7p7airuLXrtsAzd74QEozpJT4MQeJGEfgY47eaaHoA68bnUnd",
  "key45": "5xQxMocNckdh18ecmT26d3rEuTmeWFSQXS2ZwFMDxURxdfMnBLt2tS3npLCu4amQQRYSgmY6Vd3KP9JFcwHH26D8"
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
