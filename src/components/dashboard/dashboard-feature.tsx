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
    "yXR3hp8iJTxyUqvipc7hCawBvfeNmCQEr4F9bPQe55GTYUCpC4c91vEhgLcFm1ygEEvEBEWxiHDJPF1ZChqbNrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LCv17eseEHYNuej858prP6QkrXh7MfH1JBXgVCD4yun28sd8aA7peSvdC5dwKmugrQ4DTfrVuqkkB3QPFfXuooM",
  "key1": "2kAW2RtLMUEzjwU3XNshwxHxN7W4tRcZL6HpDtRbS3GKLBTzdihFpnoaKPc6DgzCiqAP5hQsYh277GXUzmMKPJW1",
  "key2": "2zSawZ5KWEWXZWUTYNB8L655YXDrTidzoz5CKAirKA5yhePHGcmuQz3Vp5NdNuVXshjC5Kr6qpdfmDkVZueFPQKX",
  "key3": "MbJAEGchuoGVRdqV7D7A1dZ6iwxnHSuCPc2mCDzxD4NGZjw6KBz5SFMRSrmHtANvQ6nUEGnaS2s9SKKBiTsMfNu",
  "key4": "4nWPNmKduDtF17uKkrCZ9nxoWoqituoJhyhzAxDcjeP4KKD1EeVS1CkdT4E8wdzQ2AiHpvkJAsz2VmsFbkRTXnfe",
  "key5": "2ZSMsa1qu2tyri8WeX7fvviyseuheuBq7BidyKhmpcR92VMRJE3CV7MkabeLmb5HDEQ9FDkmB5TveLwXWUAkuYMZ",
  "key6": "3WQMY5eDKmo4t7LWrHbxdXCgnACNHrCLA2FC6chLSAYtdSLoYVjbRVWMhr6USdfBN67hS6mr7JNVifBbjCGBb4Lf",
  "key7": "5r7Bjsc94jpM7psXChJiJP8yebGyCamXFCEi5wAtwdGpuV27zGgfpnhvdHmpAmUJMTYzvL9r3xVjgHhrotoxygR",
  "key8": "2dicS9G8CKBjK2fQe6PUDbjyKvW15czwrSMjKxnUa9ya6nB8E6t16w9UUXdW1X3zGazsfMKuT29zmmc96Et1xr8V",
  "key9": "32JA38DqhgeChXJv8zziXgsrTrfmA8MR9G8Qz4YMqd2eyCcxKdqXRfKZanehMYqZdQ8gaaYAgYFMXptjuWRCqWVH",
  "key10": "2t5E6SWLpEbJzTgxPMkaLGMAevDAr8MMyuSbFXdqyBa12crDJSqQVgTBot1xE1TNUnrFqu1tBD67h7izyxtPxmuq",
  "key11": "4qohH4TBbYz5eZDEFfwE3fo3EgsinQqJZDhBtBNaWcJrxDwiuQZtFQM6mASvEPsiQjZur9ft5NN41BeL88yXwerr",
  "key12": "666mDw2sLaEA347Do3t3CwdkHcmRGGjfKN5vP1FjU8Eo6wHAYsHh5dcCQQ2w74FhhBsTLd6hhmBL4xmpejAJaFLn",
  "key13": "PixvyLCdUBeyXnZPT6h6eFhMEkvNTarWVgipYB4kPkc3DRXfcjP9L33t6YqkoyuHzc6Yq38dR1ANx2CwxcNE5my",
  "key14": "5ubF1P9FxqsDeQHm3uYBhCmtam79RTx1hAFYUTNhpw9NGUbsXeGf7rWVwom3BJ8pr8nbKLzVxofRKWJbWQiMSvhU",
  "key15": "4CTParVFQf2fdGo4FZTDQrH9hi47Me3sAgRkuwCrTSkaKA6KMBywXZZn8xNo71oNyqsKHoWk7KeUSLzTGpREeXXV",
  "key16": "3ZsppB98tMuHdNvRCfJKjbfvU9RwfCdcM6bnVBakfLCH7LoYZfiCgCvbRVef2UixG1izFyJGNvh4f33YwS2zog52",
  "key17": "3aigz1PeZTHCeZGYuB7cUkCEtpXxJ8y8Y7ssL9xbkJJ5h92xPkm8jnwwaRte1XPVtgQxXSTA9ahHv5yYL1M6v4a3",
  "key18": "2FHmYkBSREY2ukn2pqT3au7coQnopAusXQikMeeX7QJP4UZq9ccLzN9v9VSbU5uVusRxxV1V78gbDUZVUmTWCttc",
  "key19": "4MCsbFjpkmS3LRm2f8XFmq4kAAPfxUaTxsyBk3ENFSXp1xsj6E2aAFgYAT1WZ2hDNgUtNK8UcJMjcj4bVTT1QBWm",
  "key20": "3w5A7ckiAJ6hd8R39kH5AiZo5beRoQtQZd8vvoe3BWwS5q5FiE32bMvFKUDzaKg7pc4Mdcf7YNR3DhMUMtLL2GtE",
  "key21": "bmoVTdfAktLZbq3NBzZQcW5waX59zzPbvkb8V8WKEvyiA7omWDGG1zoe7Dp8RmfknxaLdAHL7eRbsnFmu8DskUh",
  "key22": "5iRnjQG1MpyeYTH3VXNojYFshZsg7nGZ4JH1BS6n5BZQMAM2NB94gCH5UEqhG6z8dCP69ruQ7Gu2ppF3fir9oCMX",
  "key23": "VyWgy6d1PbpLfsuxeLCEYiBLHWrYBgSyU5Bus3UHq5VhwtfWfkpiwVnpEhB41qCK14AETTxgqiHEJKXy3sPth6R",
  "key24": "2YywoaKZp9V53qPCsyH7U4CJRiPPAMXNi9yjf5LJwPLNfXssYR7hDwWwQBX8E2D4yxZeYsNc61uShz5eUiNQbP7m",
  "key25": "5uGW4fu5ioCn33jwCyifzwB9i2ndGwMrZ7YB9prE4HZSnaKbgBvqAr9HmvnCUQd7CJ5iwgm6t85KowSrpxHZjQMV",
  "key26": "if9yhLk6rGQrsPUFyT2bAVq4vfHgyUKk3H4FmhhJUQEVTEwzJWejxA4j1b1uTRyfo4YfohaGYMgWjRXTzcLNqAR",
  "key27": "3BDsX95H9WsekmW5jbYQnJXvn9RtvtPPeHef6JeMFc8jpkb4w8V5MxsHZyCgAZoohCMvJ6Baxic6Acv9veT12d7E",
  "key28": "p8FyeH7dJLa7Nt2KaXLU2jQuDXUiyjwyicC58GXN7mFNUoCwbz2HcWPzbKtuyR1zRkmC59BKYftfperfwdxEd33",
  "key29": "3DWiWZmD6HFeGDHHGc2gmomT1MDPMsVMaz8P2C8Uq1dDtLREN7q6mw7HKcSrbvupYiMFuToJ7vvACJ2XHAoEJQTk",
  "key30": "4vFBycKkvSn2W5YEMb8wSixjrVWHzk7v8qiNpQpU79UmqG1j7wZzedTATySWpccVQtSSygjaeAanRwUzSnkFcQUS",
  "key31": "XGJpCsNa6LSue9dkSkPzjfybTHa5jtoxppiAFBjZpKvF3mhKCKmvG6kki5FgfQDcMQ8KMW9CeDfnKD6Zsiwfh4z",
  "key32": "2UyXzGaZqpRR5F4ZB6n1YBubFLA9BAGiz8t7s232ijY8iAREHGwc9bWySELvbEMq8ZiLqpsQbcPKntYi6mgDVFLr"
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
