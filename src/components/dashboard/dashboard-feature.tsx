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
    "5GyauCL9CP9SSDM6J652YweqFkgBKzCYS6Maewhx9u21cSTQYhkhnsPPjT9nuhRhNTZ2PbjGnUmBTa1S7bE3bNUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFZzMkChv1W6xBc2Wzod85NabCQVyUVGB88kN95mSy8zWieAxrH9KoeYo5LpSF2YeXhgzojr5kFsGwqRkALecWS",
  "key1": "4pGcL16NZxh1SHRtzz8TqvAZPJBSRr8HL4cmQrSk6K6VDEpe63Ho11nQMqLpqs5zT5uynwHKBiS81YJEb8E4YKjb",
  "key2": "5StPtbwxMq5N4MuVAhb98bciJPQB1a42dgzFsB1HXvrrYNQ1AAFJNzMe6hB6KVxVnvsDVjsge15bCuxWUBBNudsj",
  "key3": "2fD6cZoN8jHsSZUVTiwo1bey1vAzViDQnN8BLnabkv2a7vATEGkW5sp9G7Ekp47KJCzSaSUNf3APFvQ7JFLazi6",
  "key4": "3bEMdGwzzSAun5f59y4TMCX1CYaByq6VSkiAwMfoLpydCKYSxTrnm225uYYnuhQYASgvj8oFGg7R7UonwLa8waMC",
  "key5": "2Bp3pbb1C8yKFiyhTV9LgYqszkT77GrasFxq4n8wBrrmKD1JZi3JAtQjukD9zLvUNSjimYgkZev5BoPg4TdPPrEH",
  "key6": "3TTomGppu3x8ajrGh7MtijBZF6xTba96isb4R9CULw74rRfJN9ANrnyty8UeipaJC1kCi5juxZZPMPDAb8ceDe36",
  "key7": "26o1KR7RrxBDDDucStjwMkZ3JgWPeHhNF2JEoXAMbkxGQkqcMuwsGotiU8FA12qys14x4HA6biqkPnbaoCDuVLPK",
  "key8": "652f5r6m1ujEoo5iaqzSDKKrmsUmGKE9EDbUg1QGqNu7bqX6Y9apCrWLgPfi75hzgGdFGRFMsvUxwS6UWjc1mdKG",
  "key9": "4DkfarPkNkrKjQy9VJ9cors2V6QjSayadcoRTdjxmGvU42ELuYmMY8Sg1fPpJ7CvsDvNa4iaG3djRvJ6ushu97H4",
  "key10": "R16rZkMZjkqGWGRfR3h4Gqh8pCkVPudqQLEoNKrvQqmanmmcH7RpQUSqNgvfRPeST7gMRwxrUNi2rSu54UdQYKz",
  "key11": "nUQjTorN2stWVhnj8x9PXhucr96P1SadD2VkBcpwz9tUrBntDJMVyN4UVMLhtcVmEqgTVcMSNWfZxgn5JHj1W5n",
  "key12": "m3MihpW7T9iuBz8qcNYGUdBCRSQaJkAMM3vfbp3xyjnXT2KBAN6NL9s735E6vejXY2bpcharSih6d7TXK6Jva3r",
  "key13": "589g3Xxpndjy8kB4km1MrADSjeTA2xQnsMZHfaLVVAJ2vGM9zcC8eLczW98qYNJn9dbaLUMP9BuNg5wYJaJG78fo",
  "key14": "26vX3PrgYc5XnS1ASAH85ihteo6mCERxFQdVyuWKSjZgWsvubpDc8kHJrWeTsCdi1JsxKsKeQWpZ9J9Ngow7Smpx",
  "key15": "4inyFBHhkSZZiUDX3sx3Rbp45zTAU8zhx4g3irS3zA5LUDpurhGkjX7r6adcVTTTUPFg4ivyBmZm6oYoGiezdrkJ",
  "key16": "37myVNS2EyW7v769GcZrn4Q3nQhkQXTTiGVDmNAgteGzPogT9aVUaq4xXDM9vDAcUoDfM3nAT83FT7WEzVgbprPY",
  "key17": "2mEsmDfh5VpGqP5bn3eJ5ec2yJR9QU7e7sGdcxfpKAXT8Kkz3kZEiqfSyKHWa7b4WgjiumrEaz7vbohAv1kfZAB1",
  "key18": "66KLJG9Bkm3PrYxsi13e1NuM5seE3aC8z7xhSq4QVC3HYg5Z7osnWCupsMicnTf4aKRPm4XEJPAbLNLrMLRiDWDQ",
  "key19": "RcvbPDN9NfbHqzKTqrpsXZXzAHHM6xANgFGtKuSLAggGvEwUBNF8vkrjVTmiQ1T8vPGk1LxzvwcGinbpw4S6XZw",
  "key20": "5Xm85KdtZoVENWHGHXH7kdhZoFsZqcw9Ke4FUfpicVSZRdVcv7C6GkETYWKKBjDEn7dKNUBHSF2YHYwqr8SQQeoZ",
  "key21": "5zS9X3fZPBZ9nzTqCiPtduqgtMFS4WamK6vTzcYR824GZLNXauo1XRvKVFbsf7TfJKGMRUaFKptRoUpFyayARFUs",
  "key22": "gY1cWj3RobGsZ4G9KC1QprPe7U6ADeT3fqDqzvyBQFbXPKKjgwHtRotuuAbw6AhQNH9KvJbU6JiYNGDqj3AeUuX",
  "key23": "X2YsrehJvfJCiHZ77WLHZ24NZF44QWd1e8ak2EmV6YwrmtUjeqa71khx2KgpDhidJcJM58bLccFjcmCYJBvzpQP",
  "key24": "33rtdna27bEY4fm4k7cYeubmu2EESbcRy6koExv1v5ACUkJ4QjBj2rXMqXJ8NdU4rKCTjFip5mLKiNT9UXEmMYDu",
  "key25": "5ZQVNws6rqgsUZZKY3KWay2FKzzu7PuEb7KBJ54TjifS7RQ6SFAvV24z71iRrZ18SRgxiPrd89MdTrs3w5MJuivV",
  "key26": "2cBwFXbn9znNmdJXC2o38aBsn8xvDDpiY3rVJLD1NVmZ1oXJ7Y5kVhs4digBQDEBzM7U4wmF5huc64X8sh5wxk3F",
  "key27": "4aphjnUoYb2ADxwVYeEZwr1qZm5yAMHhZEvDWC46WQNeGT8xMKQK2eVcVWEVWJuUUjE7Y2FyAehS7tf8fqNHhMLS",
  "key28": "4SM2oq1rEc5p4eyCZZB1C49odF1r6dcdGdhjXP2Lpti9CWPHcZcDf33nt7BsTNxiBmB4n1NsWt7x1neMnvdaJaew",
  "key29": "kofUtx4NbNeXtjfKTq78CjXSrkJrpxJ6jtKtW7krx3753VZ5RzuWQryg7iXMMWWKmvekmCAsbrq2JBEzp7iqLhH",
  "key30": "5MvkjgX68V3jzfyn5QDurqd5aUn6qedD84DmsgUCfxTUeNrZnfS6nVmrPwDctCSVQVfT9aFiyHemeczNdr2SeY7b",
  "key31": "5q8uRAVhF8EirJG5vE2hb6PCNPNYjB9saoqPGtNAvB4S3e8gKJ7jwpyHnBG9Ei1icmHfrvpZsnf59hLf7iGu4r8m",
  "key32": "cVqDzC9mTD7skf42k4LaeRXcMEhxctcsdNcFxqbfQ2mGd8PNeH16xyrtAJSu3GEUcvjMPpGFCsGrDEbyJd7MhhM",
  "key33": "3Ykdp5naNqHtYRPtHbbARFDh9bSvM8pvW6dJ9tt7DWoQkUh6ysngpc5VtBpfDkcUsDNm5yEP6iuoau1TEHYRQbXf",
  "key34": "4rxpRzrQpedAMaH74drhCfDzWL5dnMBreQiZjRr8ENthpjR2TkE46ubbEBhs2sBtyvSZ6sZ5hpH77jAmMH73MUja",
  "key35": "5WiHhn6QkgYJYGPQi1JBfm94Y7r3VpAfUdeaCCnKC916HS5CYUTmV6FxEcgA5JKTehcfhTT6NmkFoCZ8YzCSAcRG"
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
