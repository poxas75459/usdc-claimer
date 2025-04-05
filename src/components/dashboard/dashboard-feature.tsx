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
    "mPRMb7Lq49owHhHPD5dGxxoDBrwiiKy91qYYRxiAzCeZ69sgZqQx8N1yhyBXGGD6xWadbBW4jRJdQyaunsVfDZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWLd8jvh9EAMCrzZrH1UG3JHDhiHB6tDbivHjJBj1nBpmu9HFsZ88sXE372uaKhxxoQzyPL7kBfz1Hzqqf6wWTG",
  "key1": "4QDiSrE3TfnTNVJd18gphVH3xTQHwudLpVt1qViMfZxwwg93GNQTW6dcy2jGCSvJCyTvxZAdhEV9FW232MYrMK4m",
  "key2": "63kynBtW23jPs1XqbjRX4XkNsPfBsr2wUmv7t9q8w7Rhc1Rb5mGmfFhrV9b1BuTvDFQGJxRhWutGYZWNJXqf4WPU",
  "key3": "4HQM6VNkpxxkHYjvM6XDudw7LzFJWiLfujqJR6FPDPiHDQQja4t5Y5KnwXCrCCp8id9in68h5DGaQ81B88d5Ye3s",
  "key4": "2N4iH8XBE3WoByrSrDnB3LPB8KZL4MYaUW9czjv2fwP6JudFqUG3GekynoGSkKH3WRiyhJ35B63f7hGDWfDBwz6n",
  "key5": "2AgwRvm6NroV3FszTHnHA2Qb6UsCT8g3bVnyPt5ELFf6LTJfYfWEK4UfdL1rfsHBeKcjqUM7yPTMHXNaq4UnKjfA",
  "key6": "31diLrkMgZN7gohE6J1zHRbpoe3u9peRQE27L4wWGWEetHmoqJ3qi7NG4Agf4cMn1afq97mYUuQZYBKSXVnFzsYX",
  "key7": "2evGtRMPSVuywTcCuFatfrAc13eyuLSpBeXmTZ3778ySSa76fCaS55fZVBiRwAXiiPAcmJ2A7sRkmpoRCnkox1Ro",
  "key8": "8nobzm4EPA6vFctA7WNTiYArdmdhQDyuwFqArynMaduNi1diZEdwhzQ2APpjihhVkq61LmxBKPWTmTY5NsDAMMw",
  "key9": "ynKpq8BBtAatf5TX3k9BFYvteM7dRoys8wq75fpEwn7mHt3xVAKEFwzNxS1tHc9KdtnCEQAKQLKSiFh5yPKB6yf",
  "key10": "5zZQBicQn915qLVEdJAJShTfhZAZJBNc6umTiCR9ZsYHevpborZqpLQMchGyo7gLFRZ3Jwg42zj5ck7rbE4jURMc",
  "key11": "2yzfiXzduauCw9DUvd2uoj9Us6rY3zwWshAtEoePXyapbsV4tfKBs6MxwfJ45Ptfr1j2qHqmCVYWFo5GHAc2D3mn",
  "key12": "2rnGxGHWtyvYyi8qaGvXGD9w1WrkQiKpz9Dh2CzuEirGzD2o5pfaD15s9Kgj4XWBHVWN2UZBTKAcZdyvFn4DPax3",
  "key13": "4frs3ksE1MGysaCTnv4U87E4ER8cxgo27XRhXMinCH4Nqt8qdEqPRzVHJC8BjsAQwgt5NXiQ7tcxHfwdP4grhUv3",
  "key14": "3jz7Wvvf8ryZCPmxJzF25HYEf54TtsBVZUq773DZPJEACE7D7vgT44AmMGf5rbQ2FxmWbSnojEhZgBce9ta8BTNh",
  "key15": "5qchE6PcLdZ2ASa8qS4rD6PgakhCFYPpZNMFPjKwvMaFVWZoScp3y2WiJpxUFaF98bkfKRhm6fZTAjYgVCSULYLX",
  "key16": "3UosgYSMPCsgfukkbKuS6TtfNkY5JTmEqVo7axagCN2EkPjvKnor1SkRXbzVZVt4nd1mkt95QfLXMk3QzvwPrCqT",
  "key17": "4wyFDY5UMtPbjvW54AyH8utMiB64KfhoEeEo1SMRbUHZorEStop4ovwxrB7sDzXD1aFmrXhnaJoxu6fSy6ZnLXwe",
  "key18": "3KsHDobKE4eK7tGFA5biE4bRGZMdGQ9A7VnBAJUc1CzaEgrxbbrLTAVwvkRwB4cb95DxeTB4MFJDM3jWsuyxPy1H",
  "key19": "4PoffRcWqU96QYygRRg3kJZKUGt6bXFEUfdYCdERAhQBbvYyZ4hTeu9EgYAGJSBqdnnYSCB6HiqyyAZsituHLume",
  "key20": "4bQ3ZHpHKSXYketwgwSHNf1zinH8fBoT2qovLQiXu6jWJ9VCZS9ut4YhquWEuucxiTW53hfBuBvoibn9iYCeBsqc",
  "key21": "4xyDb5N2zt7UKiLPCbGPjDNAtQHDPVEV81Pk4TJXDwdFf64jRTNP8gGUtKXGVRCHxy46WZKJnYC9c53sJAe3VWjj",
  "key22": "3t9YUu3oQwePKmiGVaQ5NDhRepmaDsYjvHrhQczZAkWekYTGr9ZKYcqU637J5vs1R2Vf7gHfA33ZEtgUYQJy8SJ",
  "key23": "93Q3Eco2PpagqE7b2DaXooLpsZpz2rk7Pj2eK4MQsaa9EE6ojbP3HREwG813LE6xuiXFqX5wFd5Pit5yGncnLLJ",
  "key24": "34gXAkzsrTKWwFb3DCb3uyhM98Vkts2kuL2u3tZwQa3hFiCeddQuPbeZc4EcZgLPz6KCSUS9dNXfjoabwkAebLEV",
  "key25": "FnrddUqX8cr4BsG4MEtwY9wpEmszjyJNYRGfrrcq1fmGrzJfjt9vc7VJDcELXGSo3UJ13dQwGeDfvGgcgBkV58B",
  "key26": "3doQt1hqtHumUF3quzHPNwisgPHSN3CFn2jin9A4jRuV5DJNWvsgQyyJFtMM1jopLqaE6v1kKZVfDM2zHP2zyTqj",
  "key27": "123XJng4xoQaSn7SALKTjboQQA5hr4mfB8Coctf3HGuGaK959afA41SJoT2Vi6Bt2Cu9AkaNPP97GcdxLCRnnGw1"
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
