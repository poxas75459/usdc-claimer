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
    "42iCF7vwLaxvziS3vXDZUPdRsUupQDXQxRYRLQhURfQ2ML5gfsrndyKnbMZkcVu7NJAbV4CKrNhxuj3Ydpmp55Xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcPXP28fApNBXU3tGkw8FjoXnDQYdygsaQs4WtMFNVsYMEsnHLbxB148mCNbce6zNK9V4tdPWdrbBTvvhZqL4iF",
  "key1": "3psYZ5Cgq7qMzBmLwzKTrHr1gksqjW7M41Yy5xYxFCoeqzTBXJwdC1YeHWgSFJ16zsLjKjWSL2VrPVpLkFWs4PST",
  "key2": "iJgSJsfmyTpyWa4THtHKnswJe1CQnqTS5g2uttra8fAySgDGNYodDXWXgJ3Xm2GMj2XwYK4vmhnbNiqxbK6Hki1",
  "key3": "3nXnb6ZK49tWA8ZS4A62qwnb8NBE9dZseZB65PxHVJKooDQ8V8NKr1EyEZZxYNuVMfLgHjZmFcB3GMNq8B5ZZQZU",
  "key4": "2kZrQJrNBCGBzshJF1m2AR4VSAs6BjaBC21pCx8qQyz3qnHijxic2uF8xWNTYnNmhpTVpX442yYX9gmsue5ozHFg",
  "key5": "3BaX59FopMoTi5ChVthQTy6V7GY6zM9srBBKxCngBsjZz4uWJ98sJBu2tqtUkoWoHX3WmKeMrWRPaaM8RQT8RA8K",
  "key6": "4DzUFkHJi2wjHim6EjaUfZ85FHf3B6YtVM3wr1BNGp6jrYk1LBddrQVnuXbXXNf54HmhZJL1jxxWBuy1egjTtxnM",
  "key7": "v6cY3hH2SXWMTVNtC7pYeCnrMUByDtu4mV9SX8RXLtMScNQzKtdSUBYwGxsN5SVNPNjb4HPsaaAAjvtjFRfwLX4",
  "key8": "4wg2sQZ9Ac8Q3nF52tYbZoVppU9ki5KgjCZZpa4CFuh1paMpuNrCKUz9adKyAqBMgSarEwD9kjAZom3NiTJtmnh7",
  "key9": "2QCBTitPfdjwzfz6XZZE2ANKon62Nm4gQ371N9hxLCKaKLGpVftLsiRsav5o6MmgbpvJcHhefd8AsRpSaby7gmWr",
  "key10": "5cCQjY9GzzvV4NooNC4e1zoXZxjW9xM1NynNCbXCmhYGxios7JS9ZdM28NpLqw8WnYTXdWQHLcEMWRUiRmJygnjU",
  "key11": "2XrK12Ab2cDUtori4vn47s8jB34uUsUSkZ6BhVtAvRmcCedHmrmLDtGmSAd6nJkg1ooJ6MxcY9VXjuUVXAx2Wbty",
  "key12": "5BnAtJWZ39gFre853LxYxGRfsAvXpYXXR564w22sUCettQ7PRqtDSifDyVjEUEfeuyWc4YAKgj9Xq3sW5QfnNRn9",
  "key13": "4SojqAWZrvW2JJrdYxEsf3bRAU1mcAGpa2gnN1fRFM8bgrFr67jbzrMFrxR6yiP81XPGosSL3PKnoUvrYRuGXTqz",
  "key14": "j3r5cbPZEyHbYJXnqFyHm56im6siB7HGTT9ZTDZLg6gwPLm5t3SzLo5NvmhiadvFwtsuPJEnYRmtmQ7CTB8aFPY",
  "key15": "2eCVv5z1BTKgq6qMfY638kNemJgF2Tcay3BQf1hy7sZRXfbgiACTiKU8z2wWEJryMJWTohzMbAwkVsLc5d3BxY3i",
  "key16": "5PP5SfZQBfZvNPj2dy6q5CYNCk2y8SPUpXKDsrBSXwWHTzPwGK6WtC53ekEJQTCK9wrPJCYBgDr7v71ARHJUyB8s",
  "key17": "4LZqLXQ7RJ4xD2ogz9hqaEXv16aY2x3o9FLZ2qyQEjEEim4mkZdAoE1RvFHUaXEBstsxVXLwkVauTNfrqNSW6b64",
  "key18": "C94Q4HktxMwfcvnTLR6oYqyKUceWbobUZWNQSXQX4a1BC1ufvoXCn39kZtWsuQwJrGqYqGCFzyotLPKzm3cNwTR",
  "key19": "57nAc76mWckriLQHHoMKjfy2tGHDuBEe8GjZrivY37UYQDCqpLGH3s9nCskT4YU96yv3MPcWE487ffeSK1hiXWtp",
  "key20": "5xtdTt6TGKdGHKXm1a6DcD6yetFKnZVEQ8n1mqSfEUUZiZRCsHhbxhkt2pQvi9XZBRBKzfwBaE9HVjJJCPhDqnZk",
  "key21": "61T5rv5H8K6CY1ZSPcTuSMtLGP4ukvX4A1mYoGehif2dkgdp8Z449WBy8bPXD7xDUzWH4EskKrc2VEdxRVV8JYCw",
  "key22": "3XQ7Rmv8YNGHCy7Ag5E9E7Q2wUG5KPUQJy8fFsJ1LJajaUPJoGRtUq2uNZhXGNLNarKHBnyc5yrL6BHCYNnHqEiy",
  "key23": "29QLHozK4qMFGCRVGCa7LzRzTWAPZ7ARsmdGMfkhj1Hmcfqk2zkM7HJCHRmYrspbuYZs5au51rtSiwgozTrRYVuh",
  "key24": "4VFXq668AGuanHSmgUA3e3YKPMCUZGk3KzqqyTPkb3QVQoUZ482WdDPjtrXdxHSAwFmLFBXr5MMjBRsmEPyFLYHM",
  "key25": "4dyJwSeXZ6WMNtr3mTZcVWWzv9VZySpcNbr53c7scXtpzZcMEDiwPx2ctcmFinHUsxD4krh35dC8oAgJgdt3U2ND",
  "key26": "4NhyBDGneMwiiYBitnzQc1tEtMBzmCzNkUNEQBtueHU1SQ3yJfYNZ4fZL3M4avWFPAoeqnEqtt8TYzdj6XSab4e",
  "key27": "JmmouaoxJUEwEH9xjr4HSJ5zP3LAzT15krHfYqjADZ5ReoxAL7Q9ifSXQynfRFd9rfJkki1RdZMUakahGyw71pp",
  "key28": "zYUHMbCwNCGWQbo2ihoRQVo4xH7hnxoxdb2sV8cM3VmyEXuzj8gEjAq9fL8MmBxjBKxszSbCvrcAtRh8DrW6y93",
  "key29": "57aq2cTFHr2x8L4sG8mEBtYyxX143DS1sLCBFT6JiP6Hso8QJBYJ32XT7R49biAoSJeKCTgPJbykn3EKD5eT3Jjx",
  "key30": "23J64Lhs8bopoZk3FZztYAhErSKtbrWKN6bwnnAbFzenG4p9mTG3JjtvS6WnJ2KrUmGk8phjgnG2ErPdHer64zQb",
  "key31": "qSCeaoS7S8NiZyh7xZqfLjPskWa7BmdEFaMCtgXhM3QfDABkQMmt8EotZAivP437ianKiYNBMEQJafgxsuj1U62",
  "key32": "5rurcYEBDBL3ACpyFfpkxXKuizRfzuksVY1BLPYQJr7LNqMeJdsnPgDZvwuN9zdjBffoUzbKE9bj6H8JjWAsyLML",
  "key33": "3XcCUMdx1nMbDGM8GvTHcFk9sUxk6G3muSWKLRzvnUjR1CS6GuuhjRd2ZRk43A2G6nFFM9NUxGhaicrs42QUFLTh",
  "key34": "2Pjwnmte7FAJGcqR4tDFeZkSKv2zws23sbntNXWjq9L8qSREPKCjXRfQUUvHB3HWN4ajWUUUvU1cTcM8u4CnWdgn",
  "key35": "4yWZJX41B11yLH6Vk9Xhbj44Bpj36ENKBMQe4VRwjJrLfLwoKdDjRtTipzZGfs995zqgECSWsAb1Nfdu8DtXLJHs",
  "key36": "erd8eg3J2MWizdjz1WFJuVKKPWdf9FAEkX3FJfJ8uH4dzJE7S2XK3cTnSzWpgpESbDrbfdHdhYCQDqNsN6xcMKN",
  "key37": "AUDaEDNcHwFLvPKd8bhri4mzLUPbJ9FW2i1tPtCKvLYrQbiedicB3JYfm1oaxWyF1A61GQE7BT3fQU6hR4ReR4n",
  "key38": "4MR1Pg5un2PcPQb9Fqy8dwZRbWkPEhs5FMvmTG7nzKWw93NRbwfMCYMDbj6XwtWKMfKkEDReiTVcuipPFCDLSYuU",
  "key39": "54tryir3ExNMDBoeENL5jm6EzLeBeWbUFxjt5sZxiBVPFBzrNHVZZ4Xk1f6xBEHCetiCLMKuH54icUsCFBiqTL3q"
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
