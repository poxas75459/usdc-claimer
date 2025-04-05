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
    "5WXC1n59amiBw3g6Eh1CfCYbpZdUXzCVfVJvxSLznLs7roB4wpspv5xmCf4jsriFPtCQt5vVKFLMrMXiAVJbsUiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3at6Gp7DNkVH7q6WWuCX311wo34npprWJJG4hiQYZ4qPXmffA5vDow5vznihSW9EHyucYpUheiWwetsQpZKtJXHv",
  "key1": "3eE4z8HapTqkCPGXUNUgmGKhf8GdPVPM61ofnBEnwX5SeuBvPBGWJJ61jBMTjuEw6qtQTJbKNToWjrmZJ1T5XBjr",
  "key2": "Z4JfWV1yZoXJ59Emuk6zEvaQyK1C9SRKJEMR2H68GjqwaySSXKiqR5Et5gJERxmTPadVKmA7owpFXXZVtuZyUy5",
  "key3": "5yjNAwgxUwuJCNAR3MqEg3x9tsJb4c27BiYkTDuhRyHocULMXM2GnHqje3ybgmP4GzCHWr3EasFc6ta2KtEyJjnm",
  "key4": "4rrNS5cQTN9eNUSfd7jNrC9fAn1ALmb4UKm1Ee4L4C45uwP9E42XLKnPcEcx2tiY32CWxVXEbvoX17NpzubPjZJW",
  "key5": "3RCmzsr9aJ8Cr1seZkBEpZKqrMixyT7oB1eGtR3rvJqgZjGSSjMivbFDBdYDns9125w15sJFRWcHkQmJ6EdxV4XG",
  "key6": "29UJFYC9PVYRDx4SMgVA6VFyir7L2WESZuwcWX2uSpoixP3LoEYj46d5mLDrLS33ZRBXxBa5x1ASyUFYz5aPcs6q",
  "key7": "66TCjqMMWK8oCUTHAgKbBWU1b2fuJG4actAFX9yxvFouRfxGCn325qyEcHmjG6szeZeEyjyrBQYHfnNK29vnCYYT",
  "key8": "4nTxS3BmqgBA8qSC5MEH6xt8TXM8d7EpviAYueeTVppJejrTiG7KC69h5A5y8PWJXJRfdsWzmvR2wnbNC9JNacmR",
  "key9": "2pscVfp5a5M5qHdFVv9K1BdHC13V45QNqUaULztzdz6JGvGzXtai4on8o5nZrz3jgiKuM3J6U8BBWgCpiZ1S2sBY",
  "key10": "3qkhNZh4gvaq6e98yRAmrA55civFWRt62A1Eyomd6g3BUZtaiDXQ8HUKevLtTdsFJ3HqkpJ1EUqfryB2pLchTM1i",
  "key11": "UgfuUVHci1kUSE7cyupCpkwp8P6sE1JYky1kggctTT2ESjQSbWQWWoQo46DNGudodURsZg8X4p3s2C2yorn7qwc",
  "key12": "5qa8Dpkf8Q3UP7rAVyGLV64tjoHRnd75JHgKJ2ZcnRhZ39L8Xm7t5PT8HsUeVZ5vdLh5NK7b3UkbRomDQGtAqeaK",
  "key13": "5Qq3xwQ4bwhnbKdBHm3p1ZtEwyNLR8E3rPu1W1Jcd62qGa49bTVctuN6VG7gxK1MxEDrZupCwfBgHMhvfmNpbQiu",
  "key14": "7TVV91iiXke9hpZoiHkxnrRe9nzZQLx5nysirgCRxyZg3tjPg4xmTxzyDMz1FaJpAuG7Lj5i7aZjYx17V9hJ8sD",
  "key15": "ff5PiNEHWKR7Ta4rTTGFUWt8HRMm5gDEP3yhqmZDKRw9hJMf9iVeZvgPjpX5iDvWZDbE6AcJTdeDox1hFbUWMaj",
  "key16": "4kJVGnyYud5zrSZTCZVJreftb4z4UvLMdE3bJow753J5HjTy5rhhHsGismesZcpAxchTbubSkk4rH2j7iCkXoWMT",
  "key17": "3Vtsoq9whtmAnw7YdeyYeUF7LEUPVeiYW4KGXL6m7cRA3k2wuFRmjPc7trCBMQ3faiBCTJrpRhyyXf12oasVBjWF",
  "key18": "3MjHVSHLYcAASAgNBL4tmsCFkfAwQ2WnDYNNk9u9zQDMqd63mJApQzzBZf9t4e4CmYgzGvETC9g2CeGEXjBRHw6a",
  "key19": "56B8GFGFzKXLxcaUv8698qaswfugvRhZhgePAwt6oecgurwauhnBsk25ynCS3GT7wP7b7oiXtbhpNYSg8NZCQfe8",
  "key20": "4nB8ihnuGfVVTFce221hAJ9oZGVMd5AAErTXyPfHzNho3ULTb2f9pso5bPZ1T2jJNJN74ccAvCk6TsfTvVkiCjgN",
  "key21": "5TeZswxJjjVgspQV83JbBEjwzoh9DrMEx5g3EA8knrAJsvUgn55Lmrw3PN1SVb3y8YKfiej6z17qLhJfKQXj2nAJ",
  "key22": "3UCCSgmvpHkm26gpFqQdURPqU2WdBCGR7ih2tZ7FLS93KYpPRX1FUYnFfZveiksMSsPDA9aF4P1DTNsN4gEM86Lg",
  "key23": "KWx2isKgQJBxdtzn4txUxq45hz34WEVaLWJC45hxKcJ7xp8JLjxod9Noig4Ww7GSYBxZJgGK56zo94qkLPyiASo",
  "key24": "5mQG5NAYxnoS61AbP5im7bL5MgTRhyEw9H7mba369nJnyArQ7pv1k1ydvfNe6fadHNmxRD8xzbrukipbUhE62AbE",
  "key25": "5u88FptKF15Fefk9zX5jLHT49Z5MUckczBrRYH5e7Nxmy8GvzQH8uEu3iqVK49pyboc7RbB4sxrbVU6FsNJY8q6d",
  "key26": "3LC6cJf6F7x3P2pstKbAXRbNJY5oFo7DSXRKco3jb5AxM4Us9GjG8d2DA1uSPW4VQbxsZ5jc54UDb5BJ2Hk5F9J3",
  "key27": "2AViP2rB8YAVTVYeefjt67W1b6R5fGvb9WrmNDzowZz25FfhGcPGiRjwDVS6F2yYne1XZhh9thy6AdKNqXXaeoGh",
  "key28": "44ETcpeSE3CJd24D74gC82HCHxcyaXFTfg6f4zPLkovgxR323T2vpe5LLoYUeekAj77vwjP12CPKeMKHJzZzM5t2",
  "key29": "267wxsH4E5CHFmYwmrN9ZBRAqEsMxteeF3f7J7NfQ46hh78wwfoba6UzXGChhQaM1MysDfitpVwuAHSSYkvM4RCb",
  "key30": "3pbH86Vvh73fQ7NNUTvRVLTxGa97Mm4GUtQSKzhFLN1Md1ABL66RyFQCGUfb2veSnxAiUkhnJ5GaRYzm918wTz4E",
  "key31": "586gDPyrFLUeroXaUKeYTygJqkMSkAw1NUReT6fRdMtvjydbA6s9k6SYScPSi2Bx6jS2bQM4FR3VWAe1id9nwx7Y",
  "key32": "WGKZSWFu69NyN58LHri19qEvNqGryZvq2md2PaUnrnkrnFNfQzCKeEUi3JHKKR4LZ8Ci4ZMkPHsMPR1wBoo7XkG",
  "key33": "2N42PKRLpUeYZjMfCGbi7sPM4zRwr7mmSXBHnhZ8efHe227cCH8B8F8BavqTudDHBVRjQy9L2rcBvJSrUDFgevwU",
  "key34": "2fW3ztm1GQaVP5NGWk7KNRfuoDpokVHo1mkQmFhrUQQGM6yVP89NAuEKAcLZYzR1PT6uLtu7BrRW7GCmnmnMJUKp",
  "key35": "AEgKLyKfAcyepyZ51RhcDWmnn823Wx9XQqFEALNWDRkEtTL5NpPk8vm2tECvxWpt5Adio77EiiFcqgQvjMSwVxK",
  "key36": "3oHffcdjafCCzSqqwomLgswDLdKQk1tyndWn1BDkz2pi5emc9TmMGhWNP5p8ve1DKHa8u5XT7Rr2ezbcbCVkCk1t",
  "key37": "4achpNmUL7QDCMygZLty2S8zsU8tCP4tEqrLaf6QhhP1xgp7ZnzPyFAJbTCW6xA8A4AHMjhrkpgLQJbrSqxaXJFk",
  "key38": "35H89PQVzMsGhakoNfCLMJPpxtvkj9Vs7X3eSv69PN2TsKnmHeMW8WhaJKDyN2L1LWr2wxG14VNtXXMNwD1jASRm",
  "key39": "4ZM8E58t4J5Qm2uUdpS77CJJah8s63jHHh5dFx3iA8mKi3hY8hotyQ7Ugrf3Ctbbhsy9V8WAnVkmX2Jjjot9QPBX",
  "key40": "3kxo56b3x8wMWhLUVSYZaPd1zbtcVm3PuhQCauJeHE9haeVCcdBjyoQa41tWAXCuYy4rQYbCUhrhtEA6By58zdpt"
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
