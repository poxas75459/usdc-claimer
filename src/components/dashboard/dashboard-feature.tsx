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
    "2NCQAqjeUMMpGCHDga4SjjGyebBHXnfUtqSGxajCMimU8V3bgXZaUoiaMR2i2VadYeoknRLMYobkjzQwxvermif6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "444KjkueKkmqEu2EnVqTRsaQfsNbgbMctem3kY1u5ic1eRBYKuCDZhcwZn7Nwk2DZeWYL3XTkHapn7U5eRR5ridr",
  "key1": "5ZoxEeDhE1D8Y57EQUHdh9iR9WxLQEATFyoLyyq9cTHM5u3npxSCtsbGVy2QqKKXH5UgiPUDxtW4srsXHPEfestN",
  "key2": "31Ngw5KVCksL16dFUKPmdQz8yJCJjjeKqX7bdJdpvTUXS3Ve9WLtsdUeJ7ExBstttjy72kWJayivHcUcSz8NuC1x",
  "key3": "2XL6pubGc1p9Vy9rLgevqeGmGux2ooicniZ7m74XMNXsNLdWY2hBrzVviDtqvRrTqeEE5QnQu1oKxnDE9Uq9eVSq",
  "key4": "4ziDdXB796yh6gJUNCQsxp99kT2ff8XPtDTxKWrXXdHy1i6tHK8yRrAFGs3Tkntdzco21xEok5HKFsPsaugmJYSv",
  "key5": "1EGmwDHa3SL9vVzdf4FQDMs29ZRWGVTWD7zcC4Rejum4GHK1nvw31BukrDFPupVuEKo2dWDGSodGRBngfgbtuFR",
  "key6": "5Xjq8bdb1G93dKpGAZTdV6F7NjJ3MgeNRTYxG81cGeW9UBYumZCtqkPkFygghmdkUgzHSiwejjyKckRbmR6Mmkth",
  "key7": "4WoaHLBkwEJq8zqJHPo1yyYoRTynEuRtZRhLJZsx3bGkx64XTnS12aSB4RB2nFne7AyTSS7J1UXLMBK8sRLEkFtB",
  "key8": "3B8BiJ8VkHCxn2G2AjRx7hHtj5G34HjJEWAkykcVPCp3Lr22pAAaXuwCmRgMDTkMtQMB7pZx1KnMM2eM8N8YC17E",
  "key9": "3i5gSySMfMQZ2iRQQm4p5D34rgFzsjmaaPRyJBVW7fuiLWo4bU1iwPUh4WD44KD4YxGgNSWSoh69kzazWohSt9mT",
  "key10": "4YMwKaoDL2xnT6Sj77KwULqjnUr1oZt3udHDAYTfA1Hnq7iWZ5yFpFd3GGCVR5CuJ1XvHhauVSFTcRNd2JeQTdRU",
  "key11": "KyBSAGfwCyj6NgStZbdRdZiviixct9gnj9R6b738L5gdNKneb6u7R5BscZ6TQjSyfPgnKPAAKHtFNcCHEYHLR1V",
  "key12": "5vnQeuSFY7YhKg3jBFgrkrp3MWGiAsPXy2VMHP7iXBBxgpgmuzHeQ295wz8G6Y5jGRK9gGNpck6XgQQMwTPUbD9E",
  "key13": "5hPGvzQaeBS8arKnbXy36b9uuJCgnAjCgvreDfsuSJkMhbEPsJMB7DM53TsLEefedDkSbQGzYFmSeYHN5wWueCPZ",
  "key14": "33oCfr7FXTUfaZRmk5ZaN4mnDh1NrUrWxmFHCzFX6Y7ZSJkKFM4av2ew598Vfb54bLCEVAXZo6NQjsAHmvgR283v",
  "key15": "4hC914PSJoML77DeavSPkFGZhn7VUn5xnfWZbiNH7rLTutJNsCHTzmCMC6HPpp8iuqa32tB8Q4WZ9TS9YGCQRwSh",
  "key16": "41j9bKrg3Wnfwsg8iRtb8vLTeQE1CMZ5hBJqxp5KfxENLfpvNijgfPRKNYGCGmGYTqqCxUMjACwy6CEHmshpVtNL",
  "key17": "sGS6Rv5DBDKwXbrTHEPjN8o6JkozxxanzqgkpuPhWbHwJCFF7Fcyw8C1WJdTcQwQBuCrxh7hBtcpGSLMPqUvmU9",
  "key18": "3zxJZwJo5nz2ZeExbCcJopbP72gsqf4PgCwsusXgRvXqjP6LcGWP44kx9JSKmCc3EEJYwsfGoPggGWPznocHqaKF",
  "key19": "2LPufJdtHqLTwr36BYXZ5kJC7V5o5S3q5kpZDn175he8yaReE1b4t7nuzZKHNgyz36FgLFqo6YX4cFmLSYvsKmzg",
  "key20": "66yrwbn7E8dUunZYMgeQR5Mhvr73WRurXm9Y445FX9ek13z61NZDBfSkDAkzLGeicN8fnMdBPAS6u85Kg2xNsh5n",
  "key21": "5aU23B7nF8nnZHBdDAVQVNMicA8BpMCW95ucE5W6D51HHvPyh9noQ8m7C1B3sHtvPXKAKRb9VSFS6jj54C7sSuEa",
  "key22": "Tuz9QYbUx4uUBedrwenRq1Aak1Sj2iKWRVwKydCV1wxq79ZUiXUynDKHbTz1vRzYqif3SRFWhu7uEDdBv99dzch",
  "key23": "2PY4mKxW7c17ujCqbp9mx5pvipcuZdzkd2XKiWjT8HLqDingZGzWVs8NGpFxnyZAA2t8ki4iPvg58zfufo4gapRc",
  "key24": "2hFZjnGAMp6yziZrFD2S6UUHh8FgsDoXhwQqG4MG7Kaxz6kUxSajBTeCWwDg1QZx1EqzkyoQg3wcK4FCdriwic7t",
  "key25": "5JpphMkcs2FhS2e6XA8QnnriqYxyZj51PXLhs24Qohj4a8LDfJ6ahpBWzxFQ5AXprK1ozoPQYhnmz3X46qg5BTjM",
  "key26": "Axcgn7hd1tiYx2ocZY1KjWNLQGtb2Rw8kyS8nRKzVrzorSRfvfQv3Rpr9ddJGcRwK4w3DNwwAnXQL2vfAKvu5pK",
  "key27": "oSKVo7zwV4aZdNXtAyjQnAYXDsZYPiR39nZTixDuGRoGEmkVWXN61MKpUbJTFiqgc8dB3xkugWK6Vjm6wJuDTRV",
  "key28": "EF1dBCsGjm5n8v3VyJAnNgNhFuodRmLYzu6A9zbXMKExegMSLoqiGNS5QcwbatBGi4Rowxz9MkVCEApcPafsDCn",
  "key29": "3MPAe5RWa7A5epMhjzmeFxUJjEnLzr2m8HMud78dwUHv4PL6DvjYgiEH7iWpZKBVcbb5wyeyMQqvSutBbYmDyJbg",
  "key30": "2wXXhCUfrtzQLVSZ9o7eiyNMiN4BexzvK8rBPksTMG3tHf1pbkWggs3Tx14UnH7CigLKAV8x9jtCXst19xJegj8g",
  "key31": "w2HrwyKkGEYmzSfoMxfR1LCbDS9paW5Mrfe5PUBzYFD5o9JNCxkDap2M3wLYGe4ZNVJLrHUnDqF3pPefY1ytr3r",
  "key32": "46koJnSDssmpT6U2GjmnBP8dVcZvTLgCTqqjgt2pyB7NSkcFYoky5Nh3ZWj2XgHNk1KHB7WeUSqRLtZN9faTBDBJ",
  "key33": "2i1wVNWKeAR3gdm2cSfdy17bm8C17pvfhdapyWt6HBWkJXyWg7QWTXVu3vcZACLzgBBHEEMyCSkFbMCZiLKVUhqv",
  "key34": "2Pnbvmrt1eswCBbbgMwMAjCcZqjELVuiSxny1WzUkUD6tqXv4b81h3Hm6jYwd1FA2hVoAqx3VtWx6mxWKpKe3hYc",
  "key35": "A1ehFZUjF9n6WS257DbternCskpuSfEanM4c3kNNeVARQBJRnfUgTw1uMXybjNyVXtitd2FR4pRsda4QtjqymkS",
  "key36": "2tHaExDwyR8BnVZHgHEeyMgENSUY3XQCL1Sj8oyhRh1dTWzL2yH8t6r56jHG4xPCdn3iBeoxZYmDCW5Az7imPHsX",
  "key37": "3CbaLf6hk9TQhY69VjsLYT8JDaFk59ECb4k7VRpcacpeMDr4YE2qee4BrbiEHHnJw5vFYgdg1KeJx442D1GjdbmW",
  "key38": "xW7qomhYGyxsHDSzZhWV9ViLS5rvQGdbVzoB8Ka5B6FTpvTqWnBKCUjDbjPKpYiW1bwRhjAPC4NrkHN44jHBkqU"
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
