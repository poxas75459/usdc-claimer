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
    "4MhonFYknUbbitAohsqdwV1grFnq8QDtsdf88ymNcc6NYuWsddRCL6GACV2ZsyEoKav32VYutoVEWaY1vHaaYi2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kgVcUAtZ1eoWfbrkQ18nfZHZVZNsVa4zNQNGo63z7FTg5KS2fhUCp8TM4VKBiE2szTt1YtJiDaU223AGV4SM8nT",
  "key1": "2d8rKipkSdrLzMPA3XYTMmgoohsm6P8EmLPNUP2ZuT9kV4TrTmQcLmwovGmBahJXA4aDJFEUmnYd3gZ4ApoUBU3A",
  "key2": "35E7ABtecR5hpwMZXJn8jSMSvMqBen4sUbVVw37iePTxBY2zvgi1BTGFL1abd8YwB7hvX9pUrDH6SzkjHK5MaPBm",
  "key3": "5VGgEgc9z2NsQgowS4t3AZbg187E7oDDtkMoPsAZ1WKF51wo9HX9GvrxHtd9G4qzfy4jFZouCqdwH1VK51XxfJ1v",
  "key4": "3Z75NwuXMFGYRrYVnTRmaeWvP11Q42bh4zVh4LfLXNBW2kJs8juHKj38JCEo421NCuDFX8jSPVVLh6Tfvb4YeybY",
  "key5": "4cS7Jq47GTjCryaRsdLErQ2qMEYu254jWdQtCZ6gdfqQfDJ7QdV8Aef74sDSpJ13kc3N1SdTrjGsdTKZGvj3GN7c",
  "key6": "4MzhmW76SKQryEjPVK8MXfH3X8buBTVCzKJh8g6vmdtKtZvdwVrJ4c3fKzuyfLdqV8UPz1hmBBVBz5BkMJfCRQX",
  "key7": "3zvP2T71ukdB94VP71YFfBUSqX2M37eoBTZ16myKMdWnGgzJ8jk9gLhoZTaxwzNjsWVULTfk611XnWqVgEByyEZo",
  "key8": "A15Mk6Z6KnShjyDzrdrgVpgRpKBAEYGuHxwRBs5EQEgCuVsKHEHUVV6tAzFSyRaqqj6HCpUE7c1VLTSDjLcz6on",
  "key9": "4QFiXwAhjJUEQf8BktZ5SDA8MVnVgbVWxHehUEQiRoBLeYyDvPF1uVeXzdvWMhMxGGWz9bf4xexK7AzAQkVvgGHH",
  "key10": "4ZhjXK8Ji9wQbj2kbVQrPq881oEh2SaESpr1kjdZjdbHRwU465CbLC1xyRozYARfYTXLzouLSgQYMrdeZ28AP63q",
  "key11": "4gFnD5v5wMDgA6yZKr8zBz8jDyRFoniGUzvb2BBaMp5PnMieAqVgsCC2bHvRNeKhrKhxEY3uGeWex2DQ8zGQPqst",
  "key12": "5d8JKCKgGrsTzyR3T8vYzjM9o4hJAtvwFwUh3QKidKpQRwMf3QG34jUHi1WEbWubvG8Z5Bgbe6rf31RN4Y46GQNC",
  "key13": "3pvL51aeQN3SfXKkFqHCv1D6bz2mQ8tdQ55vGbD4pBcDJuxpJT2txqCNCFoQPohGq8ezWwYWuYKjvgZS3ysRiDXN",
  "key14": "64DbhXpTgLdX6uFUpi2cZdtwHqZ52YAPpisRQTqMBqXjHusx9heqD33vhehKUfjBpsh3Zyg8cNgXZPCLAXaK7vGF",
  "key15": "wPXT4fK3rd9sQFCYRtccoQN9ZwnQDoazh8eJVZ3ZdnhLgSpfWjoadek6vQBD5Kc5qqLaoiUnyumwvZ6cBaSJc9H",
  "key16": "2eyC8pupnvywrjGhdUCcnYNaSvNbsyNmiT9CgkqvBV6VNepJxf6SPJ62PqmsS9Jv5kVR65uUSVMvQAMCFxQCPSZ9",
  "key17": "BoFVd5VrhcXBKqarsFH6bsHeyGnsCPYrTu15jgA9MfzbTjuSqDSrRoPTmuUW1eS8RHwcBrvLbK14yYBfW1YvSkf",
  "key18": "3WJ2WyW8V3iDW58LR6oWBwE9Z8N9BYR7D7d21KKw3ZS7PtrdvbFpxG8ud3DJ1G6R1PGo3A6YyWNXygapVKVCmbid",
  "key19": "3xU7GrQJa9GkFMzLED4v4rbKuYDgG4J83pgHPCiqWtSsaxGEv1UseMhZedZMsxBrQTQmwXi83uMSXAGS1zT2UHaF",
  "key20": "5ndByTnQLKKEyKV6qeLLTcMjoAu8yJpp8nMKenuGkWvKaNhZ1dw8ChFVGQeCorpL15Kx2ZtCkGCAi1ZNrbHXkHY6",
  "key21": "4RGcBkgwsUA5LfCmg3Sr8ZWkLJJAnrCTTDKwRN1Ypw4VHxiHrMfBQGWdupxySmazZwV2YAYCiMs5kYfYpS4Q2MMn",
  "key22": "st8vfMSu2MVQGgNzrnKp5GusucUrKoY2FJjUTtqpxDcdqBA7TkqHWjBNGb8VC7i3dYBRH4MCDWrhCM2TSxVjXtB",
  "key23": "2FLZS65FCmeg1MmFLSJUQA48CqKA89HdznSREddzFrSPZ1gPvX1nYTNzj2m45SJ5XpfeTeCjacoGtxFkESUWDt3c",
  "key24": "2hmreN2JRzQ5WfEDPSUJFGYwWecr4bQd82FZbW3g9Gzghn6XCTzWduQyCMz5rWTkhrQWZyVhLxUkjeCRTsiHv125"
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
