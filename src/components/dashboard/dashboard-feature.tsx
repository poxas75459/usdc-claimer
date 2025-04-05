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
    "3sp3Ebt1W4wR5qQxHwvcJdxt6f9cArvYPhEUYh8a9v6SS5DpanX2T4fW3FWanLnTu9MiTFra6G46YRgouxWv3gtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24s6qAJTJDFmziBNFymQg1ydtRcDRpqz9KqQTBXHf4b7PZHvj6RSxnxJPZjAwB8NmV1ebWvciPTa8mi69KcwMwpN",
  "key1": "u3B5X7EPaEVwzLyLbXbCyS1mjiJgoG1nigbsPjkhePDEHViHfwV3uxEgJBFvYuUM6HzS7Cdue57K6hH4QwGv4ft",
  "key2": "2ReFUiaKX8a42G3jEKwcw594fLrK8aweZj2NzgKmbes8Rbswm29Yy2KYmT5BqTxQrmupdVqRsW87eSzqNLZhRXMo",
  "key3": "3PNnT4sNwwqJLkNMJ5rDnLCVx9dt9x4dZVwJ4gkN3Lw8pcCGtGaGJmxE2M8mtrnDaeYMBgZ9ukb97FSvjrPTmH9P",
  "key4": "XvgRenqGSKbT8B9qvnjeuazjsmRwPFboXV5JcJSAKuuseCJ4gL3PL1U6L5LN1kxR6Et1uNbXcpVA6cnvVxj8NGy",
  "key5": "27Z9LLxgcKT913dPCXR1fGQYGArK1xGWizathAWvgDphcG32TYVhybrzt2MG67egpciKkd2SkiBByNyG2RXL2vP7",
  "key6": "3wv89YoMPo8xX6n8ibW7yLQcWNMpEoaxZwngpiujrd4mKdDfwPGn3EjQB67oLFv7wvHw6B4nhPBm9cBuHaLq4XtP",
  "key7": "2n1ZUCYSQE4a7bJPRXvYbopCCwFtn8RKpNoQzkeDKRiWnLbDj7URW5aGbpRezvmsUSujkeDLzwbhj4R2kD96GPFJ",
  "key8": "2Y9qf3LBYyCmNwwVQmMKmynZ4fHfeFQaSx5rrswqwNUmLKpDM9aVcBYErd1q4wPaNEUfkfLsqcCwrdovrVNkdeTN",
  "key9": "5zLDt48j6igb8DZ4rZy71Evv2qR11fLBD5Nigyc9KAhwbCe1PVTH9xgtbF4bHVvb1htxsn2uKexSBjP7Fd9QnzN",
  "key10": "5q4TujWjkABeaHqg7G8NvKx15BqpaETASNowoeZetFf6pj4gjRkhB3oP3W9sVvztpNVwJVECtyYu4po4JWeyrpBQ",
  "key11": "sXUZHFgN3myCxrPsD872a7GHSDkaeiqoAFWcV4EBp7CW6tpuypALru8oJarTJviRtuRzTWht4w5S1JySNWKp2tB",
  "key12": "4suTaNF88R3g7qEFhJc8K4vwxXHqws2shpT9MLutXJNfvE81aRifitZuUyzUN3XeAAoyQQWo4XyRtkXJdu8hgRp1",
  "key13": "4y8GrHjw4vGTTJ5eWhc3etA8FWw4NuKhNkBqGVTH5Nn1Q4SeoGDiuDGuzRRweFvRUur21uBPkD8cMR7bUiMvUvSC",
  "key14": "3i2Ee9uGAkignPNPtyxFpWKsngyjSFJcBjcZwHEoMQsnm3hHrsBZ27uTn4wVmFeyjJTAMD7d5Nv3szt7ro7uQUqB",
  "key15": "3zA3dc9dprvCy4RWkDG42NRKxVt4CfEdPfdYVXLkrahkd6JeGa8oTEsDUZ2o7vhhbrXvPbUUZQNy574b7oKinoTL",
  "key16": "4L4446FPAmZQStbQemoupUfbg5eEmT2ooEtCu7wfQtVCxqQmfDrKMuDbXaPLApUmEVhrhnjWwmBnywRRv8NXM2Vz",
  "key17": "5msQiE6r6kq1ELkNPpLHEJQtAwvnmg23MgCFwiJDCwunWDyxtLtQrhuhKWeAKaBqhW7J1NoAJapJURBTBHzm6MH3",
  "key18": "2WZr12qA6JsAMhegRNF8ZasoWDqzQUWESaE49JUvQ358hJTGt2qx95k7sEAgKFHHhK2mhCqDk7xaYLYE8Q76YaCY",
  "key19": "4pSgB5mcaqJBKt9y9DzSwcJL7HWAMbS6RhcND6fWgxcPFkAB14cx7Mrod1FQAFJRYAvJ6z4JmKm6JD72j8iu6kaQ",
  "key20": "4mwrnbrS37Ko5okpxk7zineFFeSJVqF4WxrYZjnkpencNMpYYA7tsgRiMdjfjRFywXREeSdJX7ovHZgJZR74zMML",
  "key21": "5D5hEkNQCZbKNPatkTGQ9ujq68BzP4DCrVWqtQpkfzVoYAXmQYyREpuw6GDCKKNYbiVRrhh5G4UZj3D9UJHeNyys",
  "key22": "3yW4vebWScAJ9U6H3hjxa6FpvqptAxjkxkEuD5aH6S1RL9e5M44FpBtYUtKffYyXqdL5tsGRJecthx52Sf5nt7wx",
  "key23": "D6538swjz6pRugp9hLWe3M3yz79qskSvwtMZ4uZUtXTEMQYbgy4HuiT218VQzDCAdTnwnsuZrFvW6ykqU5AEDo5",
  "key24": "5TJrWjkd58kvBFqdV1dFUXRpw4QJ2YMFXHvBXt7E4nbvnK9ZA4H31bQq15FLDhtfPyahLEDMADr2uvVfKQrQuSYS",
  "key25": "5SBeF9NsDZrrJJAw7hz3AQ1zXKvEJk87rEaKmfvaonzuhff5f3xCe13e2ZgWC6SxSA3Ta2uoLUcE5vgLguRTG9Sc",
  "key26": "HatjWCgoQQyxwY7VikCJ6NkhZWnEyMtnnjQVomupAmt4L9w8k8FDUgBDN9GVHm4X8x5eDgqHmTyQHCDbPLYKN2x",
  "key27": "sACn2BSgJFyDioKyYzK7WqgKM4JNt6xseU2WG6FP2eggLgtpyeWVykhedny84Wxv1r7SNH63zrGxNBZhK2t5dta",
  "key28": "57SvCi5VzoB9ed7K1GWHpEY8KsB9ryCvcjDFavZyQnwxoWrqhZJZqEBFh95uKN9FcpM5D5TZUNPpeSDsjs9Wbwyb",
  "key29": "sGwEoyJeryaVyNC19MFker2vqoA411kC2G4xD9izN3y3s6dMsmxgePMn72Q1L6EdjFPTsS8dRpc3TC9Tmb6urrc",
  "key30": "2oeD2mPusRkXqknfhMdM6UsqGejbHio33MoM5BrmLmxeUveP3PcGEC9fsKwWkfDBEjhjwLHQ1eZ7uFYRcyRxAB8c",
  "key31": "2oQ4gBg4tshdTW5ARwWRHtLQucd7tRhSdqTGuSjBp4chYMMYBYjmAiNCtsWjfvgovjNxAnhM95GKEDPh2E7pJ7FK"
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
