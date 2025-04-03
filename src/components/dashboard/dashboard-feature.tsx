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
    "4ghwKRsLKMTCFX4DcupPDDPp8YbdW3WQGbLueemgb65aj78L4mnn335XYw5f8g8XPfV7z3tiyRnMLyjUyedgG6sG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uDKiChKdChgs587buwVA3age7XQAzQKFCP8vShHUvPF26gKMj2e7DwaGpVMuN5FB7pVg6LsbPjofWNYnyJUUTJi",
  "key1": "3qTrNsE8ttgquANULjY84iAufVcsCWgjKUk1syDxLavH9c2gNxmkUuucU8HzibaPfUzFtpYnt5MUzncrmo4EgnGA",
  "key2": "5zafYgLobDb8xATB3YoPMs4ds1etRxZkUfkiLhKAUgYvQT31xPqNocXRerJaXuxmbNAGS9xedWFMGPQPdVnZ9nFW",
  "key3": "4MvcHrTZt1iYYudQvrGt4QTZkKLkShUh3EMw2674ABP1ERYqnHHZWfgmPGWRQpysjBoTd9Ly8XVcziVBbCPsozWy",
  "key4": "2MBeru7kaDfC4nD4D764qS8XbzSKfQDVpTGBxFRUmQ5VnuDWLKp18NeDgKYqqz7Tb9yj1tRHHqJ1fC5TrdD7Uouw",
  "key5": "5amdX6DaGbSJHGeNWEHRDwRjuKEYxo7cpVgVJ8dhffaALns7XEG2s3vLq5iCnMcZKxQVQv1EdL3XeoLFocdmyQT9",
  "key6": "2vz9R2jdFG7A781Q8zVDWPmJyAkBGopZQidjaUyZ7u7ywd3p7Dp7uY66kjywNaLwTJ4i444GAZuPMxmNFojdmh7u",
  "key7": "kNfzQmmc8kC3oHaJsH1nuu83yZiUGMYyZYUScqKBncKQEs6866AmXs8xTwQ3X1Vidfo2QSuK4bmP8ei2rAYZsiZ",
  "key8": "5qvYxSFcWCyDpTsq33qazmn5jY8kdrmAxGY2NC84iK4uytAWUp3wdJio5cKupyCgjms7wdx5AazHn5esSudnjrJg",
  "key9": "65JLGm5UC87GrwNUzqBtPKuvZiK5aJ9Um2vupExcZysPGiHSoe5SPq6GswkkpgrDwQU9TsuCqaMZVuwPFKVPnXmY",
  "key10": "3MKspKzF5NMXFTPoWedmg8Qt5qGPBipsooArQgpMpFAPd8DizP9FLVXjeyouoqAWz2MUwcT4b1NhLX7Xc73Stbeo",
  "key11": "5iHEw4X76sRfhDARyhfGxHTfksc9p2QV4CcS2frQ8T7faBgQxfcxmGxiLduDewV5EeTU9MomCvvLMmY38hVGNe3d",
  "key12": "4jqrsXcFbEGC8jmSrnrDTPJJ1ovJkgE4JyacERt9PmsDewS6qsJ5RREM6SvRMuxjYsrNVoQmaMMJLqadEL4JPXqa",
  "key13": "3S5y28ZYC7NUTrbw1spA4DEUfBe58HTzgkYWPCMPYdNDi3HNN3FmGkXLSceh8mJZfPw4nhRw5V4QDtQP3oAnHKEw",
  "key14": "2tiUV4BsVQWt9MTV2ZC7XeZoqktAbbeGzwQ5egXJbsfVrJKVJxSKKRtGeJEAx3uz5BAyWkagnHbAyUMMSBabU4hG",
  "key15": "B5AMAA4ZEMf7tTXMaf8xsBRxZfYSsmGcoR6Kt4Y5LqSfFq6V8YByAgNhGqefAETFdbriWbiUi4Dmbn6uz9mua5x",
  "key16": "TNyhfNLsPQqeotU58352eVQShZHDy19vjvQo2EUaDCxn2J8W9PCurfZsAnjURCxswJyGm9Enm7txvdH2TBvWNh7",
  "key17": "45HsUQEfhR8X9C3bjL4psEbjAzNoPw3ZHzyhFCfjZYt66sKDxjyVJTkbuuknQqmhiRtdQtQjJc3REmjcM7e6NkUo",
  "key18": "57gYV542kRG9H2o7dAmik4XyD11QhYfrFso6gZsGrcu7SmUQjPtv8wdDd4QAe36eBBptrJGbZxKBH2a6vCzhPnvS",
  "key19": "4zmsHwbfCKUAUfjvxJSQvfGvVfi6ZMjbi8LJQEFfY38PYwm5RXwPkHFHwRe6tdSsW3EfLhH63GAnTYJqoknjdd8V",
  "key20": "3M5crxZnhqUg95BudczFRRfYN9dVrWcntAYAAunPLKMDqieX7wy9UYaCfpipEqoMHdXBVgVsNbR53rFqzus5QqHv",
  "key21": "ZhBRpF56G2M9tMowoa59Hm89Ux6GyrvSs8aztVzwEVL8VCqrS9cea4g3RV9cz94GqnVcxoqr7TMxxFUEJaeaCZ6",
  "key22": "24DrUSVwWtZGicgaEvCvkqcit3uxpFa7UpuTiQY1BRfbX9f9xCQc3mgYarEVxTEwRVs8JBtcQp7Ket3k2oZVswXf",
  "key23": "23kWNCEZCinQgmrzuWTxpmfpH88gfZq22vijfQ8YYmEX5aaDWPEnvcEP9DTF5J2ZtiKNfAhQHbKGgcAELiEhKohR",
  "key24": "64dGyMxdXtuyCr1ZE6H3dMhFarzbaX1fxcm8mqGJ8ZYwkDM15KXbbwXP7dz7e8Vd59rWPSRzXvsVvUbEe5dTqbKZ",
  "key25": "2vz2r1jz9m4426k6zfpLerpnxe9w5wHER8YPQEQxvSP8msSmEo9WgLDZAg8euuZafSHQgsRpy3LzM9WQePVqon4c",
  "key26": "4ifPC9xe5ukD71suX8s1tLHfjhocXZLmqoVDwzhXdT5XRyG8p9omxRUz7s6wDfb9fMSLpgNP5W8KYpQSsLsR1C99",
  "key27": "2bhP69smC71vKDxBmPaCqzAChYrjq5pkLk7UtioZAaFCet22R27JewTd4Yp8nKFaaLwPUJMikon1U8CtZt1XZN65",
  "key28": "3iPrQo2dYNdXNTCxZHS3MK2bz1RW1Ar94WZXMfDH6c1NuoMKqYXr2s92NLcN5k1eFXZ3hhWh1bY58UGdrYSHbrqT",
  "key29": "5jEpJXuksNd6TjBQvziAxgfVR4nv7ArAeE74fcYcVAU423ynN1CRycutp7aqWeVUv3LZrkZ45rxz2Yxc8NPQPaeY",
  "key30": "3v6ENDkmZC4bFGc51TmgqHZre3Z6KEvgG3Zfw6VGmVHSFoPZLqgkhup6tn77BNcrHCGyp2ao9YhBaadP3wWrxbEb",
  "key31": "TzL1B25ZW1nDjggbUhCEX6KBLFTEYzgU9erpQzk6aGpPWhRhc8ATsZC9ZBAkDcAGLr4WaUarZyrunCVcxq7RXe6",
  "key32": "5fy15Q4FL3RQAacKjgtDbWi4S4C4z3Pf4wwX8huiNzV67T6MR1KXLfJWpEj8FMx2pEfEp332YgfVvebd3ssQFcXD",
  "key33": "o9rmH3xgoGNi4JfmgCMFCohp7BSj1Pt1BDk9LkgjkR7uy4Sh3umb9W9Cr1rCYUvFPW2N2wE5eemTQ4zgXJLwiZa",
  "key34": "jCEnZWREdqHQdzCBQxoAXZfqcKqwo2kMomX6hiUzB1njTzae8pVd6kgLbF3kvWBVh3W1BHJwxyou6dK1wYLS9vQ",
  "key35": "5yG39APgrHhRHX1dXLpfeZS1rAM7hTJktUMRn36bFP9MWMvRmNkEJfZZiveUcVoNZxC5knW4LoAN3GnmyTPtzVR4",
  "key36": "qFCJwM4bYZoNAssotm5GwCMYdHWonUwsWZoLzBThrPki7uthcpKCJaXRumy3xXKzQzn8xaeZMn2zAEaAoDnhr23",
  "key37": "5jNUpZkzuf7eGncsc43P8tGXQTjBAaTFLhhuUkNV2pjb1WL1zgEHcg2q5TUiCHUaJUb3xtj96Tm791XmiQRJ1Bju",
  "key38": "gJVLW7rhYu3hqcMVGbuyXgvqFHQg8uaAZbyt7bhYGNgSSPu5L3hLarPcF8kLpcKjjwhnLcD1pJKc41Y4tK73EsL",
  "key39": "4f9wZuwJ2LeD93iX7ZqgyELQovhXBXAdwB6dn9tSvnAMxZbpVZqk8WTF6MaZxyqJt4YLEm3TAC8z4KJcNqhWZ7W1",
  "key40": "RiB1M5nwN6Q5xqwPzuuJ7ikbhTY4yuT9zkuXYjHnHYdLrEymKSqwu5rT18Sn7EGkW6rb4XF4HFwL6Yhpj4mWWki",
  "key41": "28ZLHFSAaKjZyjbz2JnfjjLESGAYpPn35VGFbTdNrACdZLC7u9XqERYeegupS7kBRKQ2jWac3MEpVUa3Mi6yPbFs",
  "key42": "mgHQXRTPvPD1wrtNQdssFnNFfaYedp71NzdmvipXyYidUewwZyaSsKYUdyPJqmHBvJrVNcjRwFLaYKZqJDhWLLX",
  "key43": "4C8RhV1b2LUpw1Me8CRUKPpactRGMZ83igwavwz4WikkNGaM8ES1bvokgS3A6GQLBzAGebjUMJSq86EM8MEhrdFh"
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
