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
    "XbwT6GhvFfWWSbyEwPYmfKcdQHCdeHPfLWXGB3Am5f876hXkuda2oafB46XYcfX6JtTmR8y67QktyZ7LuoDBydg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpsBZu6uh151ff9zMb9FGDDzFhFZjEsHvZFJkh7RU2EohQEHehDXU3kypCqvdT5VdhzuNpfVLhehefxQfcBA8Yu",
  "key1": "4kzyDD31Pk7wGjSvmX9ESE7PunrWLX3viAJzbwEqodwVC2cUa5H3GWCpNBZSdSJkWvm2jTQzmBYZtHqhADwpE6Sn",
  "key2": "5PBwSnDxZzCtya4hZVn55oVCbdMrEtxSWKv6RAL9etCZgeKAhGSaqAWnEMGKAiDu7sFGmRRjc6sxivLpqWTnwtSh",
  "key3": "28JN6VfoRCAeKsnBaimmxo5RGVFEs9WfCU2xQmJRiwECrUwe53N6RPtnuUcvF7AfbHgBLc5RRJM8zUd9KSMJ16x3",
  "key4": "TAyztJt4r3AAVbNUCu53dEvP5jZ91asX2CJjVefBt67Biz8tGVm7YfYuFvi95EvhjHrNmideNjSvfYhSRW7vMD1",
  "key5": "4vM1tmr9EAHHUqMfciMXjF5t9pvMdsgr3sp4rVsD2ZobibVLz7d7eq7Zf3mCrMVtJ9CzjZt8Boij9aBfBWeEW1w6",
  "key6": "45eDDYrPuksoWJTxSFeX9iPhdUtLEskfWxnsxoJWyPSHYD5qwS4U1Hd6dQiYP3zRPkDnwNXJThTaLyciHFE81Xh2",
  "key7": "3JYHa15Augsoy1wUHVM3d8DhPc1cBrzWNkJ1BHEcnkH6d7Jz8tupiN66k3YZvYAfE2pCfZiLDBMrZGx7tKdbnA28",
  "key8": "5pSRkhsFzgGXFkFXB5S7FY6uV3anUbRBw9FWxj24jCcH7vyojgnVFUAuybcjocXbLX8CqqLMHcLfw7mDiELEWLEy",
  "key9": "4G93WmNCPr7kSYnFAqpa8ysBQXcncTBghpxcM6HSUqNMgztnEw676nwwAsmYSvdTuJ2BHMUVMqFcnUaSUyAUkVha",
  "key10": "jBSXtPEnTQ2KNGfNToxm9NeC7C1CPDW6auvSdCbE3oVPuutWZsu5kVxQsYd8tnswbficGyjDx6SheJd1Cpw6LKB",
  "key11": "5m5FVsUbsexgQx4UMwptTpdTZy669Lr6ewCYAhecnuc9m1xgt3QWxczfpA7TcMt76XoagLP5SqCZa9rMAgm6XoFv",
  "key12": "66dYjmAJGmmmBTgtUwb7XvpZWAvWnbNzjcz2F7ha5SKRqG14mm9YLo5Q25fuDQ7tst4Um9QTpT5ffMtPw7EkrNG",
  "key13": "45FbQz82YNKLMKFT2Kd6grngEuPvvN8S1qm6daabJCHT3gcD1QMysVf7D3fLs6LAjWNNMQndHDphrmSg4gYTxv7z",
  "key14": "vbvstLyoVJZQuCkh2ocVcSiv589FCPhX5oU8XAcJ4BzTFuof2Uz66j8FvyrXwqyvGSkHM8q34cpCZbWE6WB3NJH",
  "key15": "65tXLjW8NURGSvu3Rf3SRMa6BZkJ861Kotfqqq2C6YTjBMg4BtQmQvArCLkDaHYuCnWfzpK8TAhEUb9LRXihG25z",
  "key16": "2K22Sw33RLGVWMT9UonNeomY19SKBXT7p1Hu1zEw9C8Ka5247xeKK4EE4E81voYQZBc4reUrDGbkyrkQCzHHcxbA",
  "key17": "33QRVpCvUCeK1H1F8MQSdNfS1vb4Qrcs2ZvRKyav4ZfkqCZv1W2yyafoGoXBR6nFZcJZ4SRRcjvXzeFf8ymW1Bbf",
  "key18": "4qU9sjuzuJAihQGuJA6Kks9iK7LPZXLdxYho7k7i9HHcxEExX5nea21n7iTZiYoPXTeYdjdyW7gbRXFKeQwRZoum",
  "key19": "4G4bCwu2Pj4SuVSKoVu569uwFaeCHyDCGLRH263Fzb4ZzDSQmiuMhHQNtHDBC6vkAbrruwU9pSRsfbBtzKeQvPo5",
  "key20": "3zMKU26AXGQzniV9E6v32QukJQiVZhzDK2gMT52VVfFsUuG2RVgDNEQAs2HYZ172QHUJKC4AXoq4YQ5VNjs56M4V",
  "key21": "4eQe3S7kchA6HPvgxqkCw2DgG7EpqtqRq2waKxgWfMJaXVfKt3dx9NrXtVUHheU5Pvua4kQPPWxuw274AsRGzCxc",
  "key22": "7XgVsk9Jm6UyViRZgRMKq15n23tRxmr77qV8Y6xZrht58Mny19v2FSb4wdtKuNnEvXzwpHUZFZ8kBGyedRrgcAm",
  "key23": "5PqK8WgShCsW65m96HftSgGWQ17SpD3cuyRVdXSXs8bjEQhVVVHeYJ4ivpsppmkRho8Gk76UN2oN5S2g3xGRqjfG",
  "key24": "4FGVrEWjPV1GA6s2Mq58uuSsWE852vkL4S4CRGwp7iDwezF9zKGLaRskxurdvsn2bra69njgqwjUM62QHNkUeZEq",
  "key25": "2Yq3uGjhZHhw7eqCHL26THyRPUBNeeXWaBUefvJCVaRXT6grqf5fUHU5neSH1sjbhsqXMqytM7Vov43xYv2bs5Jv",
  "key26": "UnCVCPxSweqrZPA9i4yFGHPaSd4yQSdXjB2rzgHpZj2NENDdAxa2hHwnjNjqoLqYvb9GAbcbWw3SqGwJuDpTCn4",
  "key27": "sKUm4ppdpQv5new3HGMUHwC6igWA1pK6dERq7BFy4tDBLL3xYtHaEKrrnFmvKaR4AWs24j5mhX2jqTijjsHLghv"
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
