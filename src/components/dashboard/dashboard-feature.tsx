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
    "5S326PccDV3o4adX55mfXWjbvDNNjSpMpRcZKHycEM8S8u3HV3NasEKQCGM2HKG7dRvXUDxL6TYGjnhJPbx1hrpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aSRwchhKh4ijuQDpRFRd9NgzyFhDhoFLCm3Rh7vUTbL22Zv2uUPaNPhTQkuNjRCGJ5RxwBToiWYrMJJNcWZnXQs",
  "key1": "4f5ki4HjDvgw4sJSJTReTMYXP7GZonQfJWxGiHTECtzWjxh7TQCPp8gsbuHc6onGfXRkLQ1YnjSMR9LTbrov3Xqw",
  "key2": "3f7XCpZgoaPToLjLprsBhDU4XJLmd2T7GAi2LYqPPkYu7ZNjHEeMm7xyrQeNPZVbUoTsFX18xLS5JkAk3SLNGWXS",
  "key3": "4iubevzSKLjR9PqjCKksEdX58VVtrcc86cADYhtxwj3hJg246U88QqevYRKqcQn393BshgJbih4hJV25tZcqHPQ3",
  "key4": "4RnLhdPnBFachnrtbFvBc6pjaiNQD63TzwuXppQoiEied9gmZynnyQQpKzYhogJg4buDYPTaLX1Uj5Jn9H7GENFk",
  "key5": "23FgFmhtc1U9yzqTiuAv12EKbvuu44haG2x1LThhNVuDrqFj3cpS7mf7zQyyarR5NWqE1CssVGAdM1tEz1JBaZSJ",
  "key6": "3k43NhB594J2DJ1wBfCYUPFpoBkoQWWqfQ3cGN8b4rNULkB4jNymRxKQxVs3WrRcTg4CsN7h1nVLgVkgu6bvsWTE",
  "key7": "2dR9LvWF1VE6iZMHFRALvAqzPP8GAafDw4Mkied5bUvBQiKRUKtS1xFrVSMgXBjsaosLm3H5m78sMyoZRq83FV6S",
  "key8": "5JjRU5yatCT6PzUTgDd4G6Q2NC85TQpYEQmeYvX41QuayZaBP7gneT8GcTDE7pn7xAMshExSFhChft47BDviroLi",
  "key9": "5FjkyhVxUr3CmefSvYMWzcR4pefZddRfrWjzDoQ55gmd6qyzhguf1ax2wk6Wx24fsL2X9hq9p7E1rYPjGY69A9NW",
  "key10": "zYdqdPkrMZhg53En4EmZJM2Ynge56USK24Ct6ZxiGGmk6JAVACXmz6KadyrHwAbr1mJSzL6MrhTLRYYHXfhdixS",
  "key11": "3zEcHUkL5Wm9jExgcGW9VkisBEoZGPpVeMpRYixZURDPd8GpFbzZ67R2kyL7E955N2SuijtbRasK7jjANZyYKmgr",
  "key12": "4XwkUymtQZ5GvHh41fJmv3qkN9DXcvg4iYD2iqJAV2WVvJnYafoyNTVKH6NfemCydiS7vpxgBhDNNEdZSBKdPC8u",
  "key13": "UfaM9DU6ukCy9aW3DCq9ygaAu6rqx3utc2373KfjrJJehDJCFkfiDeY42gq1kCmf77ZpeyLAUGPGfsSBFw9yLRk",
  "key14": "5RNq9SuG9JEFGnEnYo83zvcZeZiQU8EJNMBd6GRvPwgVjT4cRJgUSuHWBLDm4cWq2ikrNsYGwNGVmtCFrKPN8Vdv",
  "key15": "3btyGZLwoYkSKQFCsb1boqYn3cYEoPhFca2WHgroTFBiK1qSttfTLTLzwzKBCS9mog6rgxyHCTo3NWdrnzbddgzF",
  "key16": "5uGgygpDgHqyNzZmtcgptZtqSTW2LZpYS63D2A9HfH21XtBxtk8EZe1D5Kbgy2Kukyyis9mLBQj6bQjN2wM688wV",
  "key17": "285yRqwydgWZme3KRDjybYUEvczES2L3iUtmrSTzoMv4YE9mjCDSWKpBUr9BQzTRbPWWvYmvtJo2whNzn5EVcLQW",
  "key18": "4hUKqvHPMhY1iD23UKF5rqdreshYw588vrNQiVSZLj1whX7Sbg9kTLjg6gHctT98ZnfzGkwAPZ3gbUd1fD3RPEA6",
  "key19": "5RE999krXkBcCbLgPm3j69qBQAjDYf7RBCA4HMeHsib7nE7TDjDpmrWcLG9chvuZ9dTTByrmE7QMctzDnC9DTC68",
  "key20": "4owFHcqEX3jcBbNdnKYbpUeb1z5BbPSq3zwBuMtbSeVbSAs2H5KefjhvgVwAUJGsNcG3kofRqkxSGeFHyDxmcKTo",
  "key21": "KWWVuaKMH7QpXa6gP6KWATijDrFAAoPtM87xv2r4VZu8obQ2JsJH8QpqvrVeVAPjLZmfJbC1CAsT7V1nRBRSQ4D",
  "key22": "4m3Acz4EE5TLSBZoUGVeCoQRAtcdhwv3pq6RdDZgR5eGAJpUkiXyZfCLhd9duNdbuzv8jNbJDrEpZVnXTSPQJkGz",
  "key23": "5CrwPacojyNDSJtQXb3rdNxXGvvwQ1orcrgmUkaRb8Yy251JPEndtu7d2b6a4jncD3no8wv2W1tGVNiB7K6xzMtp",
  "key24": "3Po9KWb7riYom56QpMfBMmfxMgnUVXFqwQiKkvSn9aPfx8wXYNxM6mNXjEirrSYpjQA6N6US15xGxBKyYt4hhy7B",
  "key25": "2nwT1ko1L882YEuAidgxDsiPj8Bo6p41sGTMQny6ZSsThcuCfYqvxbNWohyAWAHyKzRC6wWMEZTXwRCXb9fy5AwR",
  "key26": "ofHAd4bJKyuDwZ3yrCbBaPpYXkyHpdfGkvEvg9vKyYFpVYNRW6mK2nbB5rtcbDap44PDeaRvPabAFKDXhBbTgxX",
  "key27": "2wXj6x1FnCL7qBquyXLo4ZrLMZBMqhW5pbUmZRMqCT3PE9DCmdYuT347KDJ7NnqvhzpnYWYEeAdsX9HDc5TtThuz",
  "key28": "2tBJSzQHTxon91qTUHtER2y4ABKzDQii8pWzuNQTVUZT576metZN11AYDKUjb8gccL5Lgch9r6d2D7PLzDWkac2o",
  "key29": "34vG14HYb6yaD5jm9gbEV3m5T1rYa39hgtHp9KhFrpnBh8T7RZZSuvMKxG7XodLZ83M1BWbCoJ3YgxDK15B8XS7W",
  "key30": "G7WEN23eEARo489CQMCbmD6i2Fg8K3aDS6rcxGhB5cC5wS8edeWwterQAGh9pwHdrrUTnbAENkRfNTDWnHFH6u5",
  "key31": "4r5s6o9GoxwD6PeqqcA5hM53NDMF5tGEaZJ7TdNDYXyZX5uUJzu9KG93VXm8DFhhRF7u84mfCbZezNQY4StbfhM6",
  "key32": "2ggfPZ8F1XQfyB2bkjvkPvwoAsSwM897C5KGnc4Zi3CekxmgXEvnmbE2Fa2SoZoUYGrNMnuBbQ84na1LME8Cj7Qf",
  "key33": "2vvTpPBY8BAcfFJAWxfeSmmPG2Mmn9CDR4zFv3iocroGSHP3BGMdMHbbpT1vFxvdMCjKMGTfuNBwrUFS3dt1BCDJ",
  "key34": "2Haq3KVrhrXConfbi68n2jPcLHs8DmvfTwDALgwoUikZhvhbHdWTci21nDR5fcsKgAGKuAxoVBi97Hq46Z4N8aki",
  "key35": "518uSEuBW8DPqdMZFLkemV5hSF8asatSYyFWT2Ek4J9mMYv8tQceNNXiaby2qTWY2qsSgRdBPz9pvWsLZrvnVSd8",
  "key36": "2NH8qHt2bGGvN2c5SefyJfvLihbu5BD89pz2aRTnz4hmnEEPt9oNKyvfCWSZJ3arWm8pmsg63sF4MvHmxZtqRLtL",
  "key37": "hF1KcWHeimXHZJTLLQ3dwwH3cH2eH5CAB7d47Tn4HiaSpcdnki9SvJuEnKyz1djUSDqg7wSytxEuWJ7zxoputA8",
  "key38": "5WoPi6zgsioa44xnSYUEQMYWtGzaNWY2XgPkmRnaJ3Xkowfh5hgDGNiWY8k5PcLDujovHKUtaxkr5rQe2V2yWF6b",
  "key39": "3A8Aec41jyqazhs4z2rMmwzMuTk69538cAvTJY16Pj4GUkZbmrPGXhFQ5dV3VHiBBEd42yGFUYDN8c9hsRnH8VSm",
  "key40": "3dT122NctRi4LCdL9hymnNe3e1yy7MkLjUoxGPop9AFSYJ9sRjHKNWMPvqwtPnWda3bAshxFuXuJK1D2Jw4w4AZY",
  "key41": "iVmjPqZzAewMz1Je6VGdhApWhiENiVCPwhaN24NJq6Rk1XX5dHbCTbpcW6qDBTT8WBYSfCJyxyCZ6skHYzEWs3F",
  "key42": "s5rNF9oKa7VeCJBbvrQyDgVp1PqEqnoaSt3qzeq7ZwqAYH7sdb7zPcpa1LX9qiKDPedNido9mafJtscKtqzcjgW",
  "key43": "3ndsebpWgD94P1KRCFAJ1zuyCX5Q2rpTRUaULFtgwRr1isMrTuDxZFWDiUL5JmkZJBjf5tyXyYc6CwfmphDzGAFY",
  "key44": "282Rn5PX3XX6WoW8ygNK5kFrQg5tfYd7TEUg3WdRhQHuSdr4vBwTDns3Etii8EAUYibt68bJSizJVBZRPCQWVtMs",
  "key45": "2NKQFU2A7FHKdjgMugt67ZNSdhbmPVRfQw5QMmmfUjmh3JNVPL8r6ax3x7ZEHzrkz843Fpasj3CqF82prFbcsb1h",
  "key46": "5KhgPLfr2n6ssdZ2CycL4A8ZcRcH7cS4kHqETDBLM6VsjT8PP6VzZ7BwqRmyUi7j2qRoUMmzu5wEXhGuobC3XkDv"
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
