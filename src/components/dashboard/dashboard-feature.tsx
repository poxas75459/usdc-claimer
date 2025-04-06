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
    "4p7vd6WDarSC78rBrAo4N4h8ZDLeFKwHYzQndyWiiFVwJcv2DfMdPssZuLkHSHBdoipirNzB6zRVtoDqPAhDj8Jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U8mugYofNoFSao4ZGWyNgfBxnVKveit7FZnL4Tgkg5YxixyZSEjxR7T3QmA1fRSjjbVe6NqfPEoNKpt78aP8qhX",
  "key1": "DYK6WVARFrRHA7CajRWNPcjQXrT3GzLzhhN7gggjRSfaWiNu1Wfr7wpiX8FQszZAb5pMx28RkcsS74jHEXcG5cu",
  "key2": "5Z3r4Wirbkgz7D58pWkoW3Gc6vsD5x8PbN4S5v9A1G7ehsmYyBU8qkXUyoCbmMkyZzgkrMc3hXC12soy6S7tPpWq",
  "key3": "283idFWcXLnY3GSxwkzyyakMmMYLqx3gfiaFFfXkgMkji1mVeTKmXT7AxCJzAoProTBu2m5N6p7JCKp1pnT9G7W7",
  "key4": "5D57VtVW3BKSpHZuqkCfmt4vEHjQTzkkBUsc4qEtL52CEGTHbELggURMpGw2b7jDkPMc4Xapv6Rv4cwtkXgjPcmz",
  "key5": "3NvHqQnbQ6b8cFZazCGe3My4XuAVcXYgnrq6kitdpaVV4ABESP8c7ir8jCcsB2VWnqRCeFRJGKAia6Jus4uiUjpB",
  "key6": "WMiUzoK7tKwDwV7VibWwnpj2BnCDcHUDGEvJymQ7q4equRaUgz5hq3HwMbpEBCcNZB1RiWXNjbB2GxAyyRt4c7j",
  "key7": "3R2NX24SYq12tWbCRiYMThdCE3BWehLvbmmE4ZFyaQkJBQ18Y17PguDTKQzXPRWPXZu3dWYjqaGJwkBYAzVY1htJ",
  "key8": "45X4HEKJ67Hmx6V3E4kVPjiAktgUMTfooLe7BygeMAQDD7CgGYRSpV4y8ZnqZj9Nc4LCDAtW3mYg5eY1ViWFbMYu",
  "key9": "2zuYXLm4VBypnGsj2mKXzkdNGAB7UD9MU1f5tve8AN5VFQ9kVEqphGzfRFXrGqu9kVvTFXpZ5QkxE1Ki7E6fmnAq",
  "key10": "48hQnLXJNsfki7m7LgXREqCeUBWqnuBFcSNBbhAm3YyRTkUQbkmrrhV6KeP83BnpaKvyN2fimZoksxMZ6SnrKGUf",
  "key11": "3jtK9J7bPs5GBJ8M39qD4QYxxZWPg2QYb1zw49GxQNVxqnBe3RpJqwUpQCnMpuuPw6ovJnx9TTLid6ebChPwoMtG",
  "key12": "5viXCgu153YGE5a2CQAd9cnFMm8WHh8Hkv5cz2SobnN8pduQfgkGLvS2yqXB9QdmxFvQMZtoLLDsmeabBHPej1YR",
  "key13": "NnCf73TEZZcMYeNGGN8BbhLThyw3brHSrBnSDeSjcGVaQsbaDF5oPABTZiNdvfrKJwJSXkywW1oYLQJW8xhy33K",
  "key14": "4RngZNUznbRxiJsJNv5s4kcvWnv8hyKMyPa6mdqsQRNNChuyWrXk1P8QYinWGvcn7Q8y9iMW66BYMeBGeu82XDiw",
  "key15": "5kk9424vsKMJBdg86VNjRrrXJ2dNeKXj3DDdakLiQu9Qmtm6LwUhCU82MYR6TViPqveVmVrtUNWjxAwC45Rg1172",
  "key16": "4qnjtrgU2E1BbRqpFBdakbeZwfKsqcXraTxjLi6GWAgBAE8t8uZvV7MsWr6B7F6UFTpEZS4ZKELyjfqSctvtmjUw",
  "key17": "58jfHjEmDZhnKtxBHAk2u7gXEFzQcntfPFY5Cz2KLjVFBzqb6iJQE3KH99B8EwcnBBwUcfMEznHCviaam17LKuQJ",
  "key18": "3upqcXb7H8cP8XN3P6Wg7S2rfpJvTXDX7hx7RvNnG1W1jftc1WuEyDgeZFbVyxoZXxusNV86SmxiTQx2QuPZ6hkw",
  "key19": "5R9ZGpg8jEZPPncw5zLEE7gRpybUkHYYCC6rY7tg4sSEBAeqj6QEXoB5fQwvXoFBg7DuspmAkoxS3Ppg65dpLHTi",
  "key20": "3jcqycPe3pQPYJjFwmJzfnAcDGXxkWA7QzWDvHCyMLjLLQ7ZA5EtkMzYDsiAHsW7LjRbPMBgkQLEAVXKu12YtuFm",
  "key21": "ioCHR7nCmaKcHDMzW8banibutBBW56CMRVV4QMULiLWt9pjgtijaSyHak8uBau5caZGCVMYo5rPunpJCCdh1ZAU",
  "key22": "5keMVNFFc6s2XiVxkQvtvmNsbryVuh58PfkBQycWYaEbWwAmPTMnLT3k2wFbhdZFD49sghybH86EZ9Evhj4yZ6g5",
  "key23": "2dVW8k1DRjdJB2KomTTHqfbuEJfz5LyLbA4Yq4E9GoZv4NSKSXebnNW5ZjJk2VwNk6vogpWdQS69JgNS7JqdHr3Y",
  "key24": "25KGQ51cMjSaiPqUhy2xNpTLyPeewBAvivm5JSVGyQk6Wb4LRPg7yESDg9w58aHEdDwNb3MmHiJaKpss9pDAmJRV",
  "key25": "5WWcktiwweZcWT2nfknCtdmEtF7oTeB3acJpJ49MNNg3QjLSeHTFUjNSWy1zjvd4P6En5yVartRzzJkZMcCAgBYr",
  "key26": "4F8QDhPkLwAWn4HXYYS5MPQ8pFaYWxsttsw7pcMa8P4LoaGVStPMgmeakvrjR37grT6DbJVBBqDE1kpSxLoZAeW3",
  "key27": "2qqY3owpZxmVKGdZtDxm1VFQZATBLVbKPTDAgMuWKz83cFW8ZvRDqSkJMJtEf9JX1sQ5mmneUzki345biEzx5NEQ",
  "key28": "YzQc1RhLu1r4YjN2ch6DdmqeC3zjvvRL96ezScGndjMUGhVaj4rXUaB9E9gYDh5nWZsn4ywayKvtof2MVHTuEKW",
  "key29": "2RMEBx9Xgj1Xag9ATTQmLLe4Wj7N9FMuWdukSiJiEsc62Ys2fPUoc9PqtpAY788sdzKi1j7oPnCNhoq2TqQvk1ai",
  "key30": "5z5LhVY8eswWTr1aXcCubSdumkC1d3FTmvehyjBskUHnhxrVK2REyYSSNHRopNNEjxZpNm5FmWHMf1wNEaK2eVZ5"
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
