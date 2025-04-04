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
    "3WetMtB7mrJsQUUH6dzQSj3vcWMTQZs1QKVJBX7fGJn6Y9KGJCBgWd473KEpeBnyF4tthdSaXestqszKwmCuBwJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbUnW9V2RNPXNksc9TwgAPXmP5zoBJcQYscocucZtEJCS2S2spDp4Px9mgurcrFYVSnUaBJpSA2Sy3L18auSPH7",
  "key1": "5xkczWMeHrCgVwnN73aCAfyF5JZWu33u8wNyaYGZCpYK3HpWf8NxKxVXZ7mY1TtruVTBu8ocb9bKNrwbFfzeDuUs",
  "key2": "4vkjNqVprbiwDfHmF5iQUDBEMAMiBrpDt73na8GDSJEtvG18EYJiVHthWvVNw9DfZYNiMS7zgCnfGLusXHAiPgKj",
  "key3": "5dE39iaHp2qLQWFPh5NJZvRA12brNkQTYuD6s2TcUh3rK2JZBzJWQWFzw1NKbdSS3MF96pDpPfL8Xwjz71pMBCUg",
  "key4": "5VHsyAjSCHkH1jFfbnPGDg6MVyuyCBf5H6X14ywp5WwcncSeqZ3jxksnqgJboTXdGeWvgAS4MmHbbVHSMbd6tLqH",
  "key5": "5jVTXcLh7tnfKKryen6gQ4iAQhfa2W2poBk6oaWn3UWMBPxwrtVVZnr9ppB9PGBR8MY2uFTp6b8GhuPx7QD1gSmw",
  "key6": "4pxHPzcMWqcmQShrZu2B6kma5zkGeKkZxz2ksaUq6bYPmcWMwQ7t9ZvBTkzKNSWXLpg3KaaFLmybihGcaiNSMrig",
  "key7": "7WQ9LFQEb5cbAM3snwNN4sRr1yAjkN1FRiWGbS51RqmA392CDvSDbDKqoVyzpERBGUbPQBuNq5TaG1XngFEL3Rh",
  "key8": "5Mj1v5hSLrPhpBjqbLMr2K5EutyzhEdVpCCe84dbPegAghiV9WgLFmwAHQzD6JCezFmgD3H9zTE8dYWLxFPtKAXY",
  "key9": "21EN93ENYPxFGPAVpVhUxNW2jD4dEKaEZRDyYFshnkpEJGHsnq2gvKCk6WuUSVDfMKpN4zNbSQDMufjaPdKFk4s7",
  "key10": "612oqTrTEeBnmRRYno78Jjazq71btZ5xmtH68Fk5WxYSann5GQFKJ1TUNwuD5DZQkRbVm5Cafy3APWWDNUqcZXyY",
  "key11": "4YvARYe4cSbe2MSYv5pWXqdRwwtkyZYx9BKssndVNNDrAg2XJ8orX13MZrcoTd51YYUsDXXkS6VJzGt3R9UTuJkW",
  "key12": "64J1Y1f8oS9ud3SB3Z3Jjm1cNiSPKCdEXGqZM8yfJwyHZqzeZKuautcwHqdv3kWTxJhEVbbFBXvskuqV4RNXovpM",
  "key13": "c1sk25wg9YPmPTPNrmW2xkJK5yTXNmQY4NSEsGRktmrrgqnYeUiPo2ZYct7UBKDzMLMLj4XYbc2BSC2Z3KqxgsQ",
  "key14": "5bbQZPej8BkSKbayc7j4hrBw968WsiGengK2niLCCx9uvNSHR2qRQAj6pcR6tTFkeHZcJbYZPxQVng2pt32qV8sL",
  "key15": "zJKh7ZT8VR4MmE4osgy8jK9D54fMDtNjg9npBAaeG35qzBe3k6TSAxhq7MYBdzGLonf5ywFigBdETKyqBdv5A76",
  "key16": "5tXnQ3xcrUkmLVxA9TcFHa5vd4Nu3wcrUQR1ardD4ynndNsW9hptmJnZu2ksBy4FeVsAd5a6zYHVbsj8Sg5KSSE2",
  "key17": "2xneXHVmarhV1tjnWmkP7buVYRnPj6b9dBrikcr1Yb6teRpNHE8gykK7CG1CDEBb2vRptS4yi3qdenaNDaxkXGrZ",
  "key18": "2ntS4DNkpnLzZmbKqhxreJo6WfBNY8KTUpbts6zXSvKe3QcDWdGRUQVsgQ6jbydM2EYMMokQArH5z4sFpABrSi62",
  "key19": "3ZpusBdme6RGLtjCbWpuLS8vuKmuWHxezneKmW7bUmsYUjVxfwULgFQ7dgZ1UYctMp5juYe1sPK32oPtqtWzrWQZ",
  "key20": "4wXwz9G6YUn6Aeg8Kns3sutQP2XYavSFkcNj8aZir5zqKhVX9CoGJJ79cVddjUW5LgrRhqjdtusyaYhqX8i2z7Yp",
  "key21": "36gYj7VGjSTeRnUR6cbkNgorWWpfGbwxD5P3YJ1qrVKfb6djx8QAMG5t3tZxvzsQZiP4M4LQpjAD6PQhCJFSh1Ua",
  "key22": "JyPGCY58v6BC4sJjUyjyjesPnQqT6ifPULe39EnKBN5oDaxJeAS5kJZbyJccexPU9NvHd16JxJy938vQxqHy7uR",
  "key23": "4EHG6b6CCuBWzjnuXWzvYRfauPvQ5awfwSVbq8WLNdgrzYC9zzJUBcL5GhmbqnKaGPpLf5oZ9Bs48y9aNMyX6SSh",
  "key24": "2Dnm5ggELWxtrFX3SxcR6awhEJuX3s6bi2FskX17sYEvtv52rHTCnvghXSf4SpJrj6L9yj6UYjGkjswExRTiVZKe",
  "key25": "2oM8BpmaBhYaeridWtFZs9RSayjFX9mjCgs87RjLQ4yCVNZLSbvGdnRpngrbAieY2nVmRK6S42dUvwUSGKPnS3Ve",
  "key26": "MKAjzHrRVnr9uYxwCUdRoGv7DGNu6ctgVSj3F77HcsTEYy8ke8uXY2wL86q4B7LxP7AVe7io36bU6wYDsdeDnor",
  "key27": "5RrpG5XX7xS1rn55VgTQirEMePbBgrXwgczxzu8W1mPYtte7enfk9kfVHeYYn961r9Do6FMCJBwkTLR4iPWb9DXL",
  "key28": "5VCYnpXYUEqjNjwDsPcxyJn1v7YNVgsbgRSup23tWBnYathK57vGnpzs8s9Qzn1FfzXfHDrrDMZfjnAd2DUjvo5m",
  "key29": "Ws8YGzkJAjPWHf5QF5G8sS14fw8UkwUh8RyWmU19LNAcYHwe7q74PbHigFH4pW41j1NGmi2xxXXJu9PiJtcPyY6",
  "key30": "4cE2txuoxm9J57ZKbZ37BrLyYmecHEvveGFxeJjk1po39QHpoNXUWh2wH41UUAftAXNwSk5EnQPpTXTDECSygqjk",
  "key31": "Cc2bkZq2iujW2tkKa3dG2fv3MXx8jTjWUDzWTTR4vUVxgFZJ4sRuQhyrYS31U6tZUVNgWfnwwaEZu2QUtthfuuV",
  "key32": "5rhZQwsBXrk9NJV32QHJTR2LzwLcJLqfjCvhKhrMFiCxa1YbvbU49bEZC5sBhMffqs74s5AZUuB3UM3LTUuJfz3Y",
  "key33": "5jyxWHZ2k4D4TSacSTBkaiDv6Ez7WruLVwZKFznpvsuyo7fd8KjsTCtwp4b8B8gNWdnUoHw1RpDXj7n9vcHvoNwv",
  "key34": "4SjyjYBv27ttPcPUtHx1gYz3QhWpWwC6B3fP4jeyAnucuQZ5CkMSgtMJdYtEwUpZLVeQhQgUTgqQ68e8Lp6x2SeM",
  "key35": "5a5e8LzDuX1ZRnCRHwUPPg3MTmYsCHwJW4TLjWUJa4d9KfABmpGNLVtvzzWxmbgekf6TPTjMTQRsM6duvH18uJNc",
  "key36": "37j6WE8jACUWhs2sKYUG6AFd3pCj9qbYv2RhsMsyvRtemDJK8pLwHvVrC6gS46gVLjWwg1txZrzcC8QvG3KLsGER",
  "key37": "5uEGW52zuZHca1wVun1dxK9a7g1CVq7XQ3JzFDCprSoE7uec6A5TbZRw5Pdbe8HYgR68z3pDumJdRbktX94kmnKs",
  "key38": "27D8WqURNVhGY9DHn4BzoYg9retjoW9ybukQWBaXsBmy12ZkpCMtchZ5oNpQnAcCVyKWioHtdF8rpJALSwpL9KJ7"
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
