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
    "4cozaedUKApSFhWtYDZ7ue9jeC39niHmdpCK73QUVZpRrYo3fjDMAzg5xyzDbpRg7vobr5Xx2fP7bYTyPFEVN2mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X6yjYqDXrnYBK4FSnEFY7tUYzBtaGntMtZzJZrxQ2tMVzcBNmsmfuXuCj8CY8Mq3dz3FMEXTaAgmdNWgyqtmJwc",
  "key1": "4b6fkzKRuMFELhwooXg2KRjBcfP1qmCcSM2ohAZtfbweMFj3hkc7VZcXBdkDFGzeya2TFzEJZdPneUJMia5LRnw9",
  "key2": "258HjFxzHDbUheAwh44CANtVtfu8RfcHSXzVVsmBeycbGw1sYgj8bZPoMho5FA6L1KtpnpSobrdZ3d92u2YgYLnb",
  "key3": "4ZyQ87yXbWog37jxQvGLp9oaav6KWbynJtb5znnXUAKXnhnXE7QvUFAxGdLhe6wY1aQApPdgUG3bimDo6sK47Z34",
  "key4": "anvsTiB2QaKVfJviaXir81iNoHn1b7cLVd4oGbbctiZz8xe6n5SBjZig5etGth5rgCzec1dW8eUAgZ9jP4FjExQ",
  "key5": "2EjNL4TAMiqPC5UCSVBFt4smu3m5ZDoSLVUNcwpAkXwFVxDuokXfHP5ceGMPR1APKvSWGHYm3PcmDc42k5yPvB5m",
  "key6": "2EQFiMPQZShY4ycMxQgSRNqSk9rFc8bhUAsCq3xURATtD2qadjzT9n9qf9pYbPVcu2Y9JzChZFpGLgBXE1h875tf",
  "key7": "3YqaPudesbuXbsRkHBBqvNuxxj14duWUb1as4vUUoNxs9GXuNYJNkXfJNthCuRhW26CyBVZQrmnrB4MC4mqHtF7f",
  "key8": "38hBVbN5BdHbAUgP65w9Fd7A1J5pZ4m38UrgkvuzDWbER9X8dkxuFaKpVvGfod9tMfYUkUFrjLG8bCZbbgfd2i54",
  "key9": "4WNiXAGXgyzpTAUnUnjpFDp3xkDfeiMFWhMnxtk2kdXNvgeq2BMtjVcRk243e1Xzjb8HRK9BkJ3otWe3YSDmW7TX",
  "key10": "4W3Ppgq8DkV6DUkyi5M7CxzuNuhJzqrtyaMvyqWggX7Rh3qYKf5HUFAe7wM3CrYXwwEkn1G4AqbdUpPrydqYZmCW",
  "key11": "4r2KK1rXT8sGLst8odF2zXsnZtDJA8QgCJ7W66q4fjaWQMW5Vx9c7chuoaybfcJkJA33ybbUw5VBi7ufMefZHChA",
  "key12": "5fF69JLtnvpYhsXAYSMKiDgHWLtYhonDVThnYCfU1KFp3gnZDNFCPgGY72Jb1aKhHhUTGUTyuV7wfgeEAwr9RS86",
  "key13": "5xgNUgEYX5tdSzazY3usUnJR8VwdsxgabgPB5zTbJgv9ZkMEbRPNuVkX3WGJHMkpvwjnkPm9STgN5Q8SzV8Pyt3t",
  "key14": "2MUJKgUSUMSqh8jE8JrLmy5tbjvtbPE45xkFfpYS12KTACVcbz2sgTJcQJeHHSBRCDjaiPH8FN3DrG2XPH9ryJ2H",
  "key15": "kMjVoMTq5xEgLvEUF5HKUvky66EQ5ANF6t9NmvPu4jp5GWxmf1mMEWosB3pEcUarNNe3TVLRs7VoNcWTg4HiM2J",
  "key16": "3qn5fwPSciQJt885srfeN8faaNR3TxZPbwZMGzWf5zKZP3MaAxekVKGJGkvxhgzPwJKxaR2Qmkm8vTkH4PJEq1nE",
  "key17": "3koFGHyiYktdBt5HEXiXi16WVPX2tSuseLGPFhH9aqZ1qRYoKPnSs2nHCLPXKmz4DmEWwJnLcw74QyFDfELmUkp3",
  "key18": "eBEF4UT3d8LUaPK9n43uhKK2BMvncCiX6GQh8MncNP75tT4AqHF63j6KAEYrZaAfcB1yo6ovweeacm7MR4gV4fH",
  "key19": "wrm7L2G4dKZeakkeGt5DRpPUSakVseRiX5c6BGGJuDnseeivgoB3X9krgrxSBoZhRbL2QtRtpQpDBYF2FcZA8kZ",
  "key20": "4NcpbGZffh5fyHpT32m6BMsXFQJvx6tFxocx4STd4LZZMjA1cuxQAcDqAfM57oPu1YdXNrg7xRwF2KQ8D2XWZpu6",
  "key21": "64RUTKeL7mGBvvJEHtG5V7zvozxvpxSjT4YM5F8amPLGcUdjn7LjquHBX2KvSBKT5S8XuprNgUnzy2VRgYSoTwpX",
  "key22": "EhmEYwM8iimHg42q4h1iYf9PYndhQtQGnNRf5VA4rrb93CRjsafz7KYNRfxqZeF8rGDHk2HDM2SkCQqj8Q9jbE6",
  "key23": "2r6B7mr6WJNt78soL1DCSQ1CDnGS66LLhDMDEA85EPo1bZFm6iBn1CqqSMUEiuEhoLbkmEyGLdA3KFAbj7cdSfoR",
  "key24": "2U2nxgCVVY5PJdM6esvRRQDMnVeRErWT9gXw1BfgD2j7zi1h6BAd9oKNVR7BYHEGPMY6ERQBgaw9aJRMhQQLwW2J",
  "key25": "5dyBh34vv4TTYFRMQfx4px83XEn1rYaouDZmty2exbgJPeLMtcqgzKd4JhquVKvCekJT4TR2vzfDm5iRfEwMaA1G",
  "key26": "3mpyw39fVRRbj2g998L9jf6PiwvU3oc6Be6pxkiEveQdUeyraVkVGcVQHBiBpqbNAp2vd9xndD9xrEmLRbEGZVjP",
  "key27": "4iAFvS3seaJ52ZQj2f6LhdFUJUf8A6uc8PLs11Y7FmrJmS2nLLjFazccTAMmtnciQAvkTXSbpi6ZJ2hH61eYeMLR",
  "key28": "2wvBNKmrsSMrm9BqDomRgGdwctbFuvkwqejVaBVgS7agdBMgGNwA3At7vqTxbcp39Nxx33L54QRiUcTFPtkYD9QP",
  "key29": "2UaEoDGrJM7kycYUZTRYmC6hifSMHyjqFSxDAcXuTarFJSWEySr6Atz7Aa1WeFoaXkPLp3WfUi9FxQ1CPsnrmsBA",
  "key30": "5Lc8EQqQPCJk9xTgQXfn7sS4EuMoR366mk58syBDzci3wgESTb3FFTEiEM4nNdD6KYbC1tZ1vCzgpgXhrUddBUXn",
  "key31": "22kXeC4pnCXAeZnEPN39VpDW7hmi4bavBVoNcPTwehhX2GeDXAQL1NPTjXQokf4zm3RVMDttDmKNhqBUxYdYXEgk",
  "key32": "2xYEECcgwFbr97NbM3H9pmbnM57Wgm2LJpi5jCgmQ9gtBdXQD5gHiruMVkaNGMynoyeGc3ebVM9uRhEi5aSbED4h",
  "key33": "4hoQ9s57xRzpfB7t88UrV9dh7bGaVCspyZZkPqNUZcULE38c9JUo5TuX7WYs3xS3DPM74btgu1hDQk2qFCrHb2vd",
  "key34": "24LSB69eTrcLkwQ3ukeeJKyvAYQMF9GbTofz6TZhJZ2tDF4YjnCrGakUjWWVxE2thj6xx5Tx7FuXLRuPQfKmTu2D",
  "key35": "3pwFJAdKa5S3zsBN2rzquWNNg636NZVVhfApNg1awdsm8o2Hesi6XsyLwQzxHAdDuUprdCTqb2zWri7nBPBUh9CM",
  "key36": "5hQ44bZH4LTb6bseQ5M22JJaybc5WVpbBqat6U1AkVeLLmnJn5zGAf799kXkxwAnDUFpfrgQ2oLEQD9XAa5riLPS",
  "key37": "GvaVtGzqt5vZdSUACKzr7zyGmppSEWc68bEAab4wQatbeZf752nqaLWBFeJWz1ThVL4PEk2hPBkoX7FjWJgGJoa",
  "key38": "y2Q8dCQw27sQpQkdFwmYASZusHcFnG3X7hFpDMC2oyahouBXmVRRtb1GhgShB54jsgJSdKwEzDUnHEdeampQh45",
  "key39": "5XQnAXoN39GukArWZ51Kp7AUwWAPScLezmNVua8GbPcUhXeDjGnDt5ZgqyE3dtrkH2FgMhStHAiPwLu1gzc1GKz6",
  "key40": "sEpL9VNQRx58yW8JsAAtpgjJuYsn5dmx7euhpHzkFUbyqwTNJdYTizzU8KN7sEF8qMtDg77scYFjC2hFNyuHwSp",
  "key41": "ZKX1CWj9NfKDz35fN55dcYNrhWfRAAHViXNrky2ZmRBug32VGFkGnh57q6PPDGdCLrZLNNxcnzaaVAaD7TF2QEE",
  "key42": "2i6RHcWc1TDYy7nSU8xy3SjJPSiM7YueoLGHoE4nQ5gGYtiwVijD1FvspuR4CBQPJjNip4mjkzSuC7p1z3LJcwgq",
  "key43": "3gsoRiaEHx7mLutRCa8Vunk7Y3qf92jzV6ZDNU7GMhV6g9BuBHZRCcdp7o1pHW4FshoSkXeq5m5fHw9Nkz1XJsZa",
  "key44": "Y2zW6gKJMDnq6ZF2qHfkRtRBnQnPydZ81btuEd3mXpNKkq4zoYnutNvkUtcpC6fd6eTxDTy49bo1ytzKyCg92rV",
  "key45": "4BgPBJt2mtti2nmMLqwK5uMbgcvrEbz9ZMWq35Q34pe6rnModsgNb3vi6koLTdeEgzi2xjgAMzAuKGBY2vFSfmRo",
  "key46": "4nzGUvy7E55w8PCbCUTNir8CLrFpachPUvVqfbXvx5y3GeDxxv4zJfVXVU7WuNwQtVRRMLvNSEQiSb7KvGwGM2gQ"
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
