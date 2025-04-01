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
    "S3BBpAFLr7UH4SwgfBWzMRDtdA3TzKoJUcxd3M6pezcmyRCLamDurwFh2bQadWRrczkweyNMmmKNUoiTh5wsKby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzURcE4MT5Vu9r9T1caXDaqmPiwweq42kWj6DibSxL2CY5upZPoUYUZFTfVTVqxXi69XPd2LGmGU2ttsFyL6hTW",
  "key1": "2wZ2kRVFwhbbEhrN4ZgVSRrKB3YUitvmuQxRNU28frn28oWQ43qjTrtJWxcrfLVPj3XsYawGXCUwsNLeYu9mM9D5",
  "key2": "cnwPTuSU8Ci1793k4Kh6zXYBYP36cY44u9emz2q2jUVxCp4rvkVdkvGDp6XaJcaeC8RBQBX6Uzyonm9bKQAbTDu",
  "key3": "4UmUDtAmFqBRzTv9F85cb2o4TwkiaH6roVqvzhoURN65F9FjVbswBc8u9TTCrGVVCFxts2fJuTTNB382m9XrTcTB",
  "key4": "h8QCSXxSyWYb4KcdUaY4DkYmze5QYTi1Pm2jTYre5jBpF4nSDH1Z9eSPGpGjWb9iJA4N6fZXaW5pDN48tZtPamp",
  "key5": "634LumMsSK6GCPFnW6cdC8EErLQEMTNck23Gn6QhtZ9igScxFaz9EjsarCmBxBR6ejhJB2TEi6tgaU2ieaki4N65",
  "key6": "5x4cdDA6HaYRcJXNHUsTqA4kocNswsEFXYNYuXLJaoeQQqsiwDKN4Rn7qi9BjTffssCukFaqgsGecERX93f1jYCM",
  "key7": "4xd3U4DYuNbzCL9gVYZcJV5CjjwBkm7zZjPcbshwCm5vTzL3Yaq9jyPu1Hn5ssCZjnGepo1QmG2PbHZDrb8EsLTm",
  "key8": "TueyQSUVUE1ZxV6PtfNUmDoy2PrEDc2c4Xt5MN8G1SZvZ56wB4XnbkyvfrcjjFdAHhQDyRP7MYPqw1kc58HYHLx",
  "key9": "59VDvH7X5fGXZFmdkYT2uiKSCVtG2vuHhZtAun885c1adKA7wXH6r3wYjSgUEDzsXTs4P5nZGy3HJuNeR7hbh9mX",
  "key10": "3G2LuGCqyq6XHM3QzWw9KQP9i3ZLxk86C1VeccwKNDZ4UxcMxqt7U4ZTsNWEhHbnWQ9hoApCm4v9W4JfBU6VrczY",
  "key11": "3F4LDyrUymUTFTFApir5r5PcZbHWkoZwNzQED9jHmhAUcVHzMP85RpVQTmeNNc7PpoQnE6D5CeRJr82t4sDEqwoc",
  "key12": "EdxTcEqFp9scMGesE1qHCaaiJEbqspi91UKY7ecfN5g68S1GGJsvbiKEQWkoriN8R1si1cPQ3xg9dAqMn1NttXY",
  "key13": "HauVCTLwVXQBS9xdegYjfmiEtMSjrHoqS3DCH44SKRpf8ks6mkT6gVdRFiJ5jCzHtaEeivzufdx7CcfGeAAncrX",
  "key14": "3N3uP57CGCyufsU77QVo5D9FSZJAxXUCrqwoLBsQvxbko9ZF36LGXNBRgkPy9G6Gnfvg7k5xUfbqdhDSvwcFngsE",
  "key15": "4iuGkJQh2hddtLuJEYp4FYTm7A3VRrSLnnTe9vvgc9ea8hALx5gCRUJ7CCNWizysk6mUzqUjDBnkAJ2HHUjvoahF",
  "key16": "vMArD7r1RTpy9QJUzjFmimXDjSkHgDbnrEbEY1UrybbCzUMb644WC2hajM9AQgFwxoC1q87bWgNp7xmosbmLwEA",
  "key17": "4ekVjockbmw2LMpvfCiRqYufx9CTrv2iqWHibdSZ6Hj66PnaP3WHpU5C5pKnchmM8ZthSCPq8ewqfC6mYEk2rcxG",
  "key18": "5nF3XT2owCR9S1Svqij3u6AWeom9qUW5HFAJybDPDJyMDokTtsu2DxktodBu5EU5upFcULjFwoNhygbP7cSWyETx",
  "key19": "3nqpDoLartzjsehsack3U8dcARokNPo6SrGXjJN8oNEF7dhPWbKi6dzv7ftvE6fkJkwwsjZoNXgU51kiYsSM5j3P",
  "key20": "52LRiTvLXPE9tziB3w4ZrdMXifW41NcBzqMcCCg3GzvAEvzKTu1UgsRzpsFsMG5fLkJCPidtbNDn11VEqh6qESLj",
  "key21": "HCpifCDdEqX3NDn9YD85V6fXpWdFUJdpnEW1F13bydehjdYBWy2MSFKkLBxmsDf1iHNieV8L1hRWBRdLSve7gAm",
  "key22": "3i63tP5GaeECHMQAwy7bffZWDSP39unuxMUQQkpd4axSkcvmuCr6BmDamEYwac3mNhWzTFw281ZrFBpsf3YVmy7",
  "key23": "2RKSRVWKvRYASRk1Q62a8NaPgDdJ4XfjnYwYiVjGC5mZRyCe7pTyXfG9uD6s9W73VCRSzSDyhqXAfqtCBzXag2h8",
  "key24": "3zcBUuuD6aKU55GudM8WXySDuLnNTqkuW4cu1cXEH3zJFgpdd3GDCA4T4efQQYL6Kw2BtMFmjdRaH2XpLJtjaF6o",
  "key25": "55UWRYWJyczuPb9555QzcrhhcVBBu2UadVjQD4tr1U8nC39zJrZQhTbEmsuaZ56yuo6ZVHQC2netqZ8XLv2pH9Jy",
  "key26": "5swzougRj9CnRvvx4qvsnaYz3QCgXNnjGnRqBRX7F8FaC2AJtKDb2RC1BBJq2jYbF6wbuKbpijAGdQ4dL1drtyog",
  "key27": "5FfKTAbHYayBrWNpK6XAeW4JMwwQMwUFeJ9QrxtyH3AVZdvsQRXynPsG3P8ViYyJwQqoRywppUzQmL5SRWLuDnkc",
  "key28": "4ogBjBhmW4JzZE8W7Y452wEFPEXSY7SzE5rfV8pHYjMHSEvhQAkPELFvv1tjXdZXSiAtt66omdQpE8ZEyWBwAJhW",
  "key29": "4Sgad9KVXaZQtGHhTWphMPDjeCibHdQ7nTybHcCJMBtTSM8DpkyNMKvsib4XyFvDoaCHLFGJ8friMAyCCEb8GNdp",
  "key30": "5QFHCMDcxv3ywvtyJ5zZuxQLLKY6KzmGws6nyBrr4scEaHkburxtcyrM4hj6x8vd8kTdHMNgGfu7MiJmQgousSZT",
  "key31": "6YpAPb7UzGd3Da9C2DhTwPwkBhAWwGDuJBZ9fRsbReBwvUAR2ALbXqypfMGspvUA2V9JvospnziCRDyPXn8yK5F",
  "key32": "4BUkLHkG3kJ1CrsuJc2BSQXdE4wCuoyHjAd6UdMLHWuJ6TBAq9zdNT9bxyG2bgae1qj3cdJ9bVMH9fNDpVfR7M3w",
  "key33": "4YYzZDHMzsgYL3nCdiagewYWr8SJfN73nYVdcqR5FTxuqjL5BQhTVQyXCunAyiqzAnmQ118VSRnuSQhMJpx87VfR",
  "key34": "3KNSMEcPydoeGzVLGtmaU4TrTbXpdzBBCf31nKxDjpeFDYQ9rJ5JXwCd2bWJ6UNzyyqzHHz3FAkdT86RYBsN9zvr",
  "key35": "AKCy3pSTvjqkLGVvTXKisjC1ZxAgwiCPHR9zQQZ41Z4htBGgTb7UoZPboscKJyU8q1yuYV6vFeoPrHnq3UWWiMD",
  "key36": "3edah1yvtvkcVvignGmoAiPgFbyE4aDF2ZPkafJkr9GEtY2nMVWpM8N9NWChsku4J1g9411TSSdtmzHDqkJ53xG4",
  "key37": "5ZzgGokzXeypGEiWkau8GmQYij36Cz3Z6hth7Dm7Jtqs6GvK61PoYvr8kYhFxQ1YmFzL5BjotM2Ayb7rsBm9Liwp",
  "key38": "fYjJ33xWzzhHH4bLtzBqYx2Ckf4rmS2ZcCfnGdobXXcav2gNTY75uhm21KWQJjgSfEf6DMLZy7uahEpJ8gjVMVK",
  "key39": "5xJ8gt5AakrZG2gy4tbgiWzZvQ52KV36Q3CGtZzSCXzn4MXeNxeQJ6CyUkYdQF8i3GScMbTf19ykWhJwdY7Y7kzd",
  "key40": "47VK7zJCE56F7uydURhsBdX83fkGATBkHHZL3JHjRk3J1MzRvRWay6tqLeanCNcVeLDNZGHGAr19Y9VuP4hVtR5B",
  "key41": "2oTdtfEHJYiu6yC5mDWfsWZh6t6uA2KSc7xCwWDZVqEhucWZncdyw7xU8LpJCeHx3FddSVhRzQmRh6np5FwhTkL7"
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
