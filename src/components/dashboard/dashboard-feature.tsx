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
    "TGeLjjumkqCx8bUMjotKJ7YiUxGCrov8sM6WPaNvvb57gz4aQK58ZFYeaYNqUV9hCL5PwiA8HaQNWrdp1XLUgea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44u8AddrWkjq9zxJmwQGUKLfAikGe3oRhsVdR4Gv3zJiPDa9VU9PAxUjfamFXagjuUmiwmaevLwckWWEj7Kkx9Cq",
  "key1": "25edaP3uRwD8dyPckC7qgdSa1mDwYmZhLdceJRa1Nok1BpBiqJhk4wTd7nhrN8jmwWXkrq8vKdEERvudZvAeDVcK",
  "key2": "5WQCy9eGW46tCHRRKsQ76oMT4SeHSft8bU1Y9oMsdReLAUGaEPDbcLENgFEmELTjn2rLAUrBWkSwrmpYLZHu8KQh",
  "key3": "5jRHqAzuCNpeM3smdQGanLw2KUSW668SH6HH7FFePFgmZDxHvKFG5wyiextLu3QmWMUBgCd3WK6P6iMNYMwVBXMW",
  "key4": "5kCaJKEjpHojhQbi9Y5jQDsPCfLamqbcxdnDcEoEa6ezwLWKZ4ViWHUQ3nzursjAL39ofNFkna9VnpcqLRcXgeic",
  "key5": "5ShABDqtKP2W9x5wtNHofxbWzheb8RdRy7r8idNAseets9yjyBVpULToRS8V3NZ46GHbZTHbHRNHH1Ev1WktKUV7",
  "key6": "2fQ4TvrGnPBddXFHxVbbbchE3v5QbJnbH1ZExAJREgquxLrwUjjL5WiboYbQPLbJo1XYXThgs2NnShpp5sZxMrxf",
  "key7": "3LSH8Ye7xEFvCYxEVgDXRWDMjTND6KwZCuXCUD58K5hMgShmqiFSK2N9XAbu1zG4zScVSmk1X1c24QANx2WWJNXK",
  "key8": "5QAc2xPn5T53gKx8dspHDuLKb7eYVb9dm6nwvV4sRmyNfvhQnvFZkLKBpGikuQybVScKuDiWYY3mW88eGhhJQa1",
  "key9": "2EHEnVpEWyFfn4HuCyTde62pRNzJsLs3sJV5JS64XLuoKfbJRrgdcffFaFB6hwZ2AMrxuAeoFbebR1FXgBbLtqwU",
  "key10": "3zZMewaPGJo2uYp8QRJsPYgrQi7idiUcYDJc2Uh1xykS1Y5ciihBtbeyAaRoXgkUnk8kPkkd2DxSBqD9NS2tyJNM",
  "key11": "5rkPWMxA6A97s7siPNrD4jWRVZWY7TVvvA4LQyKbbyFNWa7rjnZytcSBDczyBcXQ2WXfqeZ62n36nJmodivmYzqe",
  "key12": "4nMbaD5Zx6nvcRtYjVWngNLCXJKPmbvu6nWELwvkgbNZyhDiEy9VuRtbM2RS9u1Jh2RVEtyDS7Eie7WqfyHRyEAY",
  "key13": "3ju8LPjFwraQbrdTnNdYsQfpXjYzwAW2qh8hteBUNDvUVmxMDVFnNfrmkoxkwe7p4S2mr9Cqj4ppoY8zWdr82fyQ",
  "key14": "4qeDdEYWGhyXWhY28wpcWT6KXZuMVkNHTsWRKmdA3VNtYzQDvBY84hkNoaAj8oxxxMM9QhwcVJauoSueC7wRs5e9",
  "key15": "2tqA5LcVmYGhpVYezwYdsg76mT3HdxfXcXarWHux9bLzPXb7tcKz9SJPs5dMzB8s7y5PdgV9uM1LfXRKyGSdHbsz",
  "key16": "3rVV2fpohDevBNxLFM3b84ZevFaWcXG6U74Cf5VmEJfg6xwrGSrG4cXMDkymhBQbBxJtykf9nx4RrDNPP1ZyYpc4",
  "key17": "45PPTTwjSmasyaXDnX5XHq7bbw1h2YN6SLdEGpZPviE7Ddd3i1TdBqioyYV5guFhgtoEHaXhhnh6uegxmx1JkgQx",
  "key18": "sw7fvTbCc7m6RZkzFZMU1W9t5n55qpfd9QmKpkacPrM5RyaQS1J6WEv5w4AD4NVLkKazxayBM4tssJTTxFXhy28",
  "key19": "222trZMrs1f4TT7FdMJ4fypReEgdQjFi6YkjYjk2QefyFzjeLHaTHDBV9k4yfkyzfa6r6jqVPeVxz8zKvUFVRhtP",
  "key20": "fHDd9BS1WH7ov3XFeLMqaq8W4pkjuZtNL5SdsQuLHJ9mQUNy3Nta65gvMsa4Ysn83A6nSA7Mc4cUXWubMZP4bwa",
  "key21": "3dh9FXpcBDkaUg2WgMyFjJYNThBMdqGkrTGLENCaW7MLLQ4tXSydufUpgskU9CunP6H3WpsrEJcmsbw19aZ9HHCC",
  "key22": "2ZPTc1kJ8uyXuyqqpqmXbD5eMih1D6doMro5ET4eCGb7RWWzytYX7P47ByFhu8Sh8ao3ag7aeUqdT4FQCdcDAwuf",
  "key23": "47T7WBKzDM7xxW37fRd7byaUtGvpj1esqzCpXDAA5aVzLiNwqvQaf9ME761X8VY64N4q2qKwefaeofSNLxnXmdrb",
  "key24": "4h3EmvPGfApM4eXwatkPyFiC9gzsVXwvnNPtKCrsmQA68S1H9mSXsSU4MkTLwsaFQMj8mb7mgrNcPfvTMXm3QgS2",
  "key25": "5JRtfLvB9FjwNM4AQvhLJMF4TqDTNY4q6XbohrzXupYx7ZgTjDjj7jRoVUEUF4C9UqNdoeXH9hZn1mnicY3BGToT",
  "key26": "5LiaxnRF2Yizd6eNXs7G7S23YMfHniSW7dr6uvfZbJ5nZp9oma2AQgYkgwBxXeYvU7pe8F33RAqXr7xFdkUDkd3Q",
  "key27": "22B3czyNVm4pd3LG81uUfXbGipy5ZVXtgrAFEN7FMnbXBfLALRyvyFQFhC2w4sEw5VBcoTzVoyvrc2bcvmG2XGdE",
  "key28": "2UCGUKczhSVxRWx46YRybTRiHfWCS68Kk95B3aN4HzgtNtB7KwaxuP3729GC9g6USaYaECzyBDg4nRdDY1nsCTEy",
  "key29": "3jdgBUw7qzFPBT2iqTE7p2Sx14Fmv3axtoXYsz7dLimvuSARo68fvaEuXQCEdrTW9fkDGdRhFpZHptidkozznS7p",
  "key30": "2xo5dwAc3pPXA5RKuTU7LuUegZ2jAxRpxQng65wf1jigUeXcVt3MA2cNP9tTA657DBcDgewXCBgv1WHZiT2eUeMx",
  "key31": "3aabQ6Sog43D6EUTHQaLLyVencvH3JWHUfMyYCBcL13QK94jxp9t9jRsm8oZ8wT79K1QdED27v1iyvMiBoyQNmUz",
  "key32": "FHLXHMC631Yi54WnBfyYyj6tdjK8ii6KYQM5QvSQRYhB4E5z1xdSdwD57DvgrhiTYudsHv7xdCwgnWqdEzR9Hhg",
  "key33": "2ZnE8XXkiqpEc8DVPEDyc3VpzaicTDgRR2TLzsUBpf4BqEoHMcLFtrYBN7UnH6AuLtpHqYQFALyaz2S28WUXR6nM",
  "key34": "4ShjuwTCgjNgZdhsBW2GfSimhB8FwRSxoLTRpDPoFv2uFSk8owwrPAf7SNAupXjDbJewzArSe5qEfv3yRboNqV8w",
  "key35": "5WmSoaERhMLrMSKHbZ4o7Dd8kMNFFvTxipGHTeEMRVYY5KxkanDTVvJFwkXXsoXgwzcaxxWQuYsYmt9YvnCJJ5Zy",
  "key36": "3RacWaLz4s8aFSB5tFJByF1KWHi42iWZNfxh8VR1dQnnJpxxN5S3rSCTKDw882R5hn18KJzPnU1HfRBNfCoDYHRX",
  "key37": "5d96kktm7X56UqhAEBcuRDCMzeCdGtMMkCtFxY8aavdAxJunZ9SGcDggc1UjxPXSRa3m4AmXrdJYgx42V6eQbbxS",
  "key38": "3mu18FdJZEdmp3jhZrfVHxaE8WvVqsVpEZ9oNdLvVCrpCbSyV8t1J3NFhXhNmz5jUATveuxBzWkF8pAHbkUWpNPk",
  "key39": "45wGPHFiaNVYNAwSNGFvGJPu8bNT5SJ1DBgAWaZZpDoRWE4TiNf9hYFsnT6nZ5v31nG7E3uTFgQJmBuTobFEDhFm"
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
