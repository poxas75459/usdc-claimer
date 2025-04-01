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
    "4zFhimhxEQHL2MbC6p8A9GNNMJMRsaGYcSpmEL4Cya6sv4wULAUDDEyXhKczjZVFhJVwdo72L1voVPHa9kVKsX5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9wMfVirmzWj9TfZi6VGkDdMkkwE86psNZ7d6WMVcnMFUxKU6LU1as9BCFyVYbkUquqNHa6Edy5dNuj2jtngUS2",
  "key1": "2xgTLoctrgdgcwC3Q3WjTy5VsK2oA2WaRpZnGYk9qnqrwouibBXpHAjUCBVMzY3L1FAKFCqaNH1YGKmcgte8Jie7",
  "key2": "4WQjwXGjATAhfbPhhepURk9UX7pmAZusJnTBkfZ4EV55KqtsNS4E1sjqRE9t1EsLAMG9262NB3XDekh2L5xqKY48",
  "key3": "Ft5oiWdY5rZSnJvWgbusrdjBU6kztW7MhrKbUmHkxiM9YscVqXND5U1j1FSh6vTgfmrynYUjYjCziKGRs7rXz6K",
  "key4": "2R6SQ8JBwFd2uongvwnKP4t1WbrjfdB5k6cSWC1Y6UvDHWjVUxVVy1yxtebfERR1Hq4fFLPA9Ebc9gdzupgCRHGq",
  "key5": "4yfNhCja5zfxtHBzLLQxKmQGeZhFCchnCGQ8jNNngu38dKesr1dtSCqw3Nu7cuXkz4HAp3GAhB2p4ZCkegWS1sGY",
  "key6": "3ndfrpjGy7oWCNgBQznXe85Cr7dE35U9jdvZBsqjDAfM6kXUeb2tG7W1Ne51gD5RLMnLkX4N4s29aokAyy2cAi23",
  "key7": "5BZ7PjaEuKXnSNZxZi7TXsdAkT1UFCxC6NrBRq69fpq3TpefeN4iYhTqs8uCXXA5kqGtorXuUDcQ6hhAkkMA2QGF",
  "key8": "3Tm4SnWkRB8tmAchrzVaMrGDHqcShwPj3k4okNq3iu8EWTgoNLvKtSQTFvTjgttbdiEsGshgHDkL3RsqPUtbyTrE",
  "key9": "37FwX6qJWY4vRwXocQuWa5BgPexj6171m8f74HwSwbfrJBgesy5TdWped1qomrAJMz6qo9XRYxzNLK9zmSJfUU2w",
  "key10": "3PJLuy6NbV5exvFonUDUXq5VvvxpgB6BRT4wu2bpeY1L3V6hZCJqahL85wBGHkKsRkBndSfEmo9An6gLuxayViZV",
  "key11": "5P3LsHnSERBt6baXgbfV2TTN4DfFWs3VaE6sNmhYJmrKmCpjzqE6r145384wyXbaTePmSZCjiPjo2bpW5kYC5LKE",
  "key12": "7K7sGoPivS8W2irfHnhdFPLw4DzvqK8GaaYAuQEMJiDR9ztbwC4RycRwzaRSsxYfLtRJhqwscdsDKhBZn54aEA4",
  "key13": "4xfu9HstTXbWA4sLW24uEgQ8Zc8GwLSPb57iAswZvFeA4YM5iAd7WNUqEeptrzm65KEjAxfx9yZxpXiTQdaPk8Z",
  "key14": "5xc3xZg6iqxdqvk9UVzido6Exh6NhhUkEpEo1gV2QB66ybTRtJiqCS7wCAbxBBg1kHFkzqL1fKFJQeELZPWgegNW",
  "key15": "66nQqeXmcDceG4Kq91MSQr2ZgqRLmyiainPRCrUmjSnUdCfjQYDDkYUfm2EvWev6H27MVEWjFxCdjgKma9JfLH79",
  "key16": "pqTzVtq638RoxurBkyP3XggEZPmuxVhw852TWFUqctsnB7mDZaWKxuWb1a4FWV6LdzK8bRSMGgvsPANvKwDGdjw",
  "key17": "4KpDUhDbJQH9i2Dp2yvDE1CvLktczRoMrgeqj2Vgi2cp2cKdwezANewKUhTxywgwHeQMVAzeZNHYPTWxLjrtuE8n",
  "key18": "2AQmwixp4Ak6UpcD9vuDZbvhAVbjm8Ciey4VeX1u3f6bkhNNmR58qjWkvDS6mLMJbJE6TigrJyZLvsjREmsLVWWp",
  "key19": "2ZPYCKSk4HnaSFoig131VUyTWSN2fot77VPgZZrZCFu6k4u8eUCFQbsH6YjMeEd93PVGdYYfbFt43ZxhCFoDUqXk",
  "key20": "5mUTMscXAKofqAN2xXGsP6TdmfeLxid5MdUKnj4DaaGKAwckba7dNNsYnLDRS7qASRP881YAoauosbTSUT5eyLCE",
  "key21": "4Yt6ny73xgYPnBGeayZPmyAbust9wo9j1WrcxuDzpUmFt5wFJ6MPykiJz2asYMw1be23py7TVfxa7MSbujAmxVRQ",
  "key22": "Qocs6oVQ4g1VgbNq9dYMXJ5bq2sD69Cy2XzJQSBxkTLhoAhf8duwNd9CXRGMsm4vN9QWHRo2E6YfQPZxpQAszuy",
  "key23": "2STf4wRHq6hUaBVDEGotuMQLiPEpwWEFqn6X7HiZ26A4CnEVRa11tACSeJXRjJ37gSXXqyz2wBR5fA1GSRcTkUQ5",
  "key24": "2mu1cVhB2psEk949ay6obZCp2ekbpfbpyVKrMf4GPcxLW98j681CGbZnnSjWUsfb8a1uKVxmDSTwU9wVBWPQfm9Z",
  "key25": "2VmHtAuhmKZZpB3ErbB72rom5zLaGGxUoTE7TyRuMFeJ4GV7Hqx5eXJ6r4XaeNnX6qgReh5fCy9vu3A7excdFTu9",
  "key26": "LMATcpeZZmqyJm8M199CW5MAXBHS6vsmZ2MmVAdtBcm1hCKgiybWkJUYnNrmKEq61DNrXKuymtSfwVP6yFc7xvx",
  "key27": "2fT4fe3a6efoZhob3TCSpXvbCoKvg3wwkRosWpg1ugn4bDsZVR5HQb2uyuiXQGnfKfHZyvGHDTACx8euvFsJQurx",
  "key28": "39gjR4Z3CTio5LLtbepJVQxCjWe3sdLJ7vmrVVAUry75brpfhRc3j1aTrAVGTFfAT5ZEx8rZ9NHw9DzB9xsJpjrQ",
  "key29": "5FsbCKvVyadggNYyAYnSfGSxSKADqKqfdu4qEZUCDe6sTcvpvRwZwFMfUoA3gxc4BoxU42vtE2wjeCEYXc3D94ip",
  "key30": "3gcanmEus7RCntEGifMJboLUKmvVtPPvDjkJsY4iANajBCxGc1A5rh4zZPU1K3gLXc2USriDSWi58ntRw5zCRufq",
  "key31": "3YCAvjoxBXrhoDaXY8bigtSZGHs5n9He6CKwYeymR9cwzU2Y9XYbwR4ihXzQNxcwnzCmRBKW9AfZn3VShc5yVxfM",
  "key32": "3vxJczFSLGyidYx1CVuuwYkrmFaEXQ8FeugGHexLoJHk17vganaFagZkFUwUE3e6dQJcFfvfLs7xCCjv5KzVfzDe",
  "key33": "5m2YVA6HwoaXNizEWdHciGYQzN3QXWcoBSJ8jPpsEwUVXDguA7xWugUf3hQmzcBAU4wRTo5jfCMnir5S5H4k7c35",
  "key34": "3AuqaWjVXVd6QTe7gHXmV8Hp9L6cdXCUsFNM33tmqCHftxwhLbuHab2SUtyvpRjDi6EwT77fsKR58H3QmAJBPMQ4",
  "key35": "TEscDXvGpQdRt2WUWvXfH5CUPdtxiaod7jEtj3UNJZATqkctP2j3hm9NJGfjYwqVq2yUFxf462c2oDcRwzeNg6n",
  "key36": "38YALtZ9EZFDRikftEVNad2zNfqq3GKiE6awkjvinkm4YxeNi3qWPPoecTVjvsEBMLC9omMaP9xpkeN3sS4HYCmX",
  "key37": "59Fbm7J8wfjPG7KjRKDnHHn9ponm6NKXCfLJpCZEmBvsd3GKR6pim482MAB4KZT49tgL3DtVRwbGi1JCyyCsvFbx",
  "key38": "2UQjY1qMBHwp3muKGnfL4kbAy25iGKhzzYcZtapSyruHMoW9unJGcEM7vTgLHaZL6KLoZWa1LDoAZN8kNeYkYNB4",
  "key39": "piw3rFhauUrHU6NmHQASpASx3nh4eDimkKd8RZWdFDskKutCT13tkxXHKRvRqkYtyYtEu5potMg4mUD52YVfie6",
  "key40": "3HJh4wp8NHeQoZd1QMqMTP4kaZhkxyM26xE5kU77LnA4UQtLimqfRfNkyzzUvaGp42doPgVBoPUgzjc3WkC9mAg5",
  "key41": "sGPMgH8jkuBD1mk7QAstPa7DZnxe6bMX2qgZnvVzq5mxWdX5Qcp47hKzUECrGFeNqpqqgB8aCnCmddPPH1Ymw4z",
  "key42": "k2PwKha7woXsVorm8SSKKJcWG63bXX1c6dN7PAHH4xXTQELGNQnRGmisFFhdQii2CZc6oELQncV6rcAweUBmT51",
  "key43": "2v812KDtGc1sePNPyt55vXy37yhpYbZbNSpkSgYGtC2wQF2SZBfeoAkVZePzaZfAQ6gZrsJ2e9ZDfxq5ybY9S62K",
  "key44": "3NJBZ6B14avmby4Bprawyqxbnn2LZ8X7JNw2HSBFu8gcwPHuEynsbXfkPc8GgPrQFLMeXHqg5wTPtsronfqGFMzr",
  "key45": "4jPctFvtYD8aebAWfM81XeoRq62ptYGSxRn8SFxbt871KW8PsDCVEoPRNbGzuYuBjyur3JC3eYXia2LoGC5mKLdY",
  "key46": "5f1AdwNJdbXEms1JHDATiq9DpgAKxUz11KCjJucwNKGaNtzY7sLoxGSBoHKYNFx2jYkdVsXHv4seqPLzy443ZuUY",
  "key47": "2LweZL8t1q3V7mAAYE7bLDj25g75oi4qYn2fepfKbJYGYZsLZXv5GUEPZDeghgZt2p8dqZsmwJYmQF8f3rFSr273",
  "key48": "2cdcYpj5FeKUAXs1aETQWM28b5Uu98ESVFiYHSfPkDdPPdE9fysd9BDXuePEiRd5pJ3Yov3qs23J3kYtCCxPMtju",
  "key49": "2mYkbTGqBm2Y4njbfnVEkCkoa13ENWwrcVTWDREzpmzr65JYc6b99VtN89gEBVA9qmLALor7sZDTsKxoTEzJ4UiN"
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
