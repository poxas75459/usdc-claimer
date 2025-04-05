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
    "24fsM7H8ikf5qnbGXuzrZoMBgbNUGvjvYuj3WUXrPvm2DzjfrUohRJLGNS5gcShMfRxrDwGPTLybX1LMbYHFFdJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D3wvHU7EcittfNeSByup55kkPeAuQUYPsCMqqtrvw5Mm42kcy2gnP3B4qHpwegNgph1xFcWSTmgj3gvvDK6Pr9t",
  "key1": "NnFWrZE2f3jswkLDCTSULCT71SabDDayaCxHTyUYcTT3PcHBLHYPEsR18bQbaSEfQJN6nyMak7cH2ZYB5w8bbST",
  "key2": "5QyJ6YcQ7ssLvFJ17ErWCT4CYreTzR9wNAJQNLvjfgXHmYJgYkbhFiUhvhQBJakir7hJzuw4HvfydQKfJ9CmGBUQ",
  "key3": "649aPLdWyf8d2tBf8gNvFhpixVvjPjZVE9LFwQbyM9CR5GSpcS7ESBHq1HsHcksKKC9nWppvmupqR7CSNeXThgoi",
  "key4": "3iwzS1oDEJr1cdm51RDPnaBmJJje5412NtRquvAZLZFJTCt3Ewoh5fSzC3kwrD7SMNRja7kradgNq6gtko6NNemx",
  "key5": "3SpjafhbJxyv7pkiAUufdrVH1ASsDCvm5ZfcAmAn7wce67STyrMveMch7nqCsj8we1WBYjG21pEFy7zhf8KNqx3H",
  "key6": "3PKaxVDkz6o2hHxwbmVW9Qt5bybRG9W1wVpHhQ9JFAu7pHnv2tHNCTvgN62H6QrHDu1qzAEhR2A66qbrbivpWtoq",
  "key7": "2FScbqwRrNPkbBrpd6L8TWCuZoXyaG4etaR9Kten4mceJatvNw2V4Co56VodCXpGgSjP7n9XecyP3AryFR2aMKSD",
  "key8": "26NV1h2RmWQDfNd6NH2Ezfk8VxeYnPS5o9cRRWvQ9MFjMx7U9FZkLEbTKroMuxka6QBZNyNm6Gs4BzSgeTkTFdTD",
  "key9": "2qDTyZYaLiW1nX8yss2F97X9wdHjptyNRJMqmWszB8W7487VZzA9TUTE4sAqFCEb9e2mY568jeNrxaqn8dSNUght",
  "key10": "3B8ayFhRT1RmCVFthwAea7QNFE8CyKSJbYzngGRvB2oRKNicFZcapiSkSQegZHNLmRj5TEeTxj9oNRCEDz4jrzRW",
  "key11": "4ndEoW8F1BDCqoSBb3e7z1muXTfYBPFRMphrQM7s3R3QTqRVL9PhGuG2y35RmeFNmaoqAbxHNTBZBJ5Df2EZZisT",
  "key12": "rpMAQ78ahcTgrBegjELHMtAC3NAjj68FzXwNheAe7qiSKWYjGDoMzVBPatKnPnjXMgvgB7PstmWMWs9o2zPAhkv",
  "key13": "51f4LSJGNZ9jR8gLrW4uQJVoLHFfxH24pUf4FcNw3WBJnb9rdNXBA38WKLYu9d9JondRLzemQcRpY15o7ABZngPj",
  "key14": "2jqV9uWWRBx5RiGTemh8x15PWBy5Vpx5kceU25ENu5E4m7ckXVhw5hjgs7uQxX61x4rTk9551Q8kU6SuhkrrHR8A",
  "key15": "5K767CQAJHgu23PT3hrhsot2KcYfk5ii1mxMmuBkRqWuVDPikMnaqVUpgoepLgrKa2iBUkPgpuUrTU6y3EqU8Z7c",
  "key16": "4Cy4y3MKpvbh1t4uhv1PxW1X51Ztvpm5bCak7iG9mChUYwhvvogRRBPakUhfJQUXcxkKHAULCQPzwhZjFN8KH4rm",
  "key17": "37uRGqMNhJT4NavBJ3WwDPNBsFb2f6Qi7P9HvA1pyw4Vcx5xgYrWj57ED4H35iKkRy3weXob9ML71Z6FUoEi1tHr",
  "key18": "4sT7C1NvWHBbQ2azyFPD5Eaz35ajyAjBHup2MfUDZhrPCT7JJUEgyToZxhixP6gq5tHp2NuAQDfKTK74dHRqYZ8Q",
  "key19": "64PtTyF18ZPwEmXU7HeXq7P2vrGRXLN1fCdiD26Hi5VPcZM8CpfT4Kyjvam9cuLd2UiRWgZ6LAGJ5WRu42BDuwfS",
  "key20": "3J18w19LThg8zBDotWLLTnydSnnzhRzWYsEvqDcYEp8H2zxiskmD2kjRqvyCa931HJGpGsdb8BvtWEvNs1iR8e5N",
  "key21": "UjtKYQcyx8cNmfN5wwnE6CxfA9LqJn8vYAujbdVcbxFWpG33DbrNzRfv3eiHv8QMmrvAZKCRZDvBnPzsUdrwnzM",
  "key22": "2YQwj4Nk926a24b3PSGhMFzkhvd7BvHtvbR6xji7xmM4BnWVTtytaoCzkpSuDqX3siV3TNeazDFxeEjnTpjC7Jfb",
  "key23": "2esviKPQyEp3X4fKDuWj8sbN7XHpAYbx8MaWBAsv8TmQKPedLtHf7q8iyjKV7rnPwsQSdtscsFyvwYSXyJew3gjH",
  "key24": "HkNavLyfZs1Kc95zNFuTVeEJzRXM1biJgmxwHAhG1TwCyT6xmXKTw33coPU6ENQbjT12LaB3x6HBPBWX5G7dEGo",
  "key25": "2HhVct72p93QmgFbHBVzbnLdUWLZKzishg3zoGQa8v7o6NpQ76ddEDyxbcjSWV1brGY5jmJZ1W3LdYU1ixZrNpjx",
  "key26": "4UJockRCb7neSH5AJwFsti3FYFQd8vtsUTuhnnmuxXwcJR2QHrPnWxg54iWGQezy5P3t5wGhkuPZDHpBgnEkbyq4",
  "key27": "4AbA5UfDh2wYBC3igXPcUBg56afSBaaGvJqVXS5BQYU3cKTQkrW8dnzHQNsM9PerXhVmixL1pLCe78gzP4RWsJud",
  "key28": "49qM55Qa2tGYh3Uk8xmtn65jsL66CXFcZcUfFqiAXgbGGETUErCReDzU5h5YnKJxxQayzBGTNBHcfULNmc1ZU5R9",
  "key29": "4hy67dpK8Kq7pJQPYgX14MkMCkESsWwVHPDSZ3oCKxAMFDQNTNe2cGiUEH5UmEFDQdLCgf5fZ5wEaZWx8q9s1PkJ",
  "key30": "2mHLFGJmyq7e1wLgp4eXJuyVheunvqVshucPMAK1FVMqGUXpUHoZLARFpefCpf4hcNkBbHCphivgqJMauQkdwxAq",
  "key31": "5rzZE6PqfsuWMkBCz6w9a4MME4ChUmwzs7JuCKWrwzkf1QSrcJf365oqr5p6hU37rLvhnY4prC7VTyByTBrhsuBZ",
  "key32": "3w3h6XpkYtJuLctdLkETfxN4w9Pxt7zrUVg54n5NyE7tAhkuHb6PVSsJW6ofVhxksaFZyW8X88LEupEAjUJNRVHG",
  "key33": "2gyaJV6FAMEFM7cFeCU4qrDDFPm37axDsnRkQ2CP9pGnYyVTEi8Xi5yAN4xbpptwC4frcPue3fhARSdhiyKaACrH",
  "key34": "4LBVkJQN18jYEF5VyYvfFvPcaME7e7rhHoZDBesdeKZ3YVGimEnX15iAxFtfn95L8SmdsGVw2HSnCBs8oKxCcCjN",
  "key35": "2vu2CMAhonfqyX2BN8jJMr8cNtYzSXsL2LLQ7c7FUC3QsmP2pvbLMpgZTikPMvG6vKZVgwnLX4c1hYbPYm1KC9mm",
  "key36": "1x145oCKCimgWn8PH4zgwtJzybggPbVpwCPzLDkbQXjjXqgAVCVttfYjKvK9sw4MjyNr3samSzs6wtH9BoTrMCJ",
  "key37": "3vSPtaUV1sjPGjBxfZvtdHu8yoLu58odch1bYngcRXpCFuSBr6VU42WfzmGdJ37g3mPf8QM3tGmKwyDhYADJvXn7",
  "key38": "2mFjJwhgM6rDt2qrG7WKFjZw5xcJFezrzjoKyPqrzATdAyYGWxhgWE9EMnwwktpAUDNsb2ov47uQA2poKXcvFceZ",
  "key39": "4SgTDs5FkcY9WWboP5UbXAyEixx4smnX2UCsca81JDdLQhZpVQ4LJ2khQCjMtWvx6hgxFkjpkkQd9mDCAy8pf6LZ",
  "key40": "3tXrByfSYkYgw3XanEr36H1xR9u4yZPTCtkMM2Nna4X5MS3n6iznm6JCuMRCD1qjkMNa9H22P61emWCJKPv7FFgf",
  "key41": "2Wjn7cvUrXqD47pDF4v4DyWSaw4WYwgUwDmzQpRZ6Sd8N2MLMfY21yrPJMZFcfGywGSBa8WEk9Kgt7AJXp4UTYsD",
  "key42": "38VgkJ5kvfbFkwXQ5oDabpdG6fuB283QAbYEA2BzFvA2psK9omaLf2XFtVjo1nALNFKudxX6sarAivsy89xp2yrz",
  "key43": "icMet67ijMwbfcBZeQuEDEQudCfTFYU41wAcUc4v32gN2SbfSu9HZRDajqDtksjEHD2LpDEaNBcHNbVpSCQv1oi",
  "key44": "4Sg5hA98etmvButQQK27Es9V2XwqZ4hYBKmQr8KqTvhRgAN9b1v9k1CJgsms32v3c58bVG5VQtsY1i8Tdkp39i8d",
  "key45": "3nPMZuMSksJhtBpLtG7VCedAbnWor8pHGm52SGPSy8fwK9yAwM52SJmJsqtPtPVSzkKyg99KwLomkAMKRtViHWez",
  "key46": "4HVbd9bxBsAv9YMLY9BgXWXD1cPzrfNDz1fgJ6CZ8TCdkKrDyKxic8TGkpRjm9qHbHFZRf4ByRC1b7GYQEnGE8Xt",
  "key47": "V5FS6ZZkaUt9Vr2rn89yDrtcxesUdJcpPgh7UpMZwMCnwCC92ZypuviyjyzoJwwnk8SFwcWNQnQVX674pdSgxQ9"
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
