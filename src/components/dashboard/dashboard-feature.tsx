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
    "4gkki1YPmM5nVfNiD49sgqtrF5vjvLL4LKj5aoXrF9evepnDV22MLYe5U6sJtcWCgVgT8vVUfLNpuyPDqSLw6V3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2idyYJFmWvHcs2bt8pb1TbkerR7irfkwxghnkvGEFPECDQpsAoZ5rrfX9WaEmPzw6St91f2Xw7ckjRfcERnoWjoC",
  "key1": "4egDLKcNqNYHXG5Scmgaq9wya199C5m48VX6rSp7xkm9KcugeVMiR4JJCTkujLzEVydareg3vJncN462nxEkb7Gx",
  "key2": "29V6Knsd3AsQ6LgfnAsq1CkEHFKugbwaAZiYpTwCmNbDysmigt7WX1TUh9km9Qx8YHynW7Hnkzg4S6bhfYcXCcKa",
  "key3": "uvmwuyKiC6XgYLAcWdS3nPe1KMgVSwPgKVECGbAtyGMiZCSdxn8gaQAANPzcMRvjsc59bqHEXBxbWwu4Q5LzxJd",
  "key4": "2ZiSN24fA74sa5StSNBQrZbSHW9ohj2oo6r44p6DN45CGFsW92GtyadfWnV6yey4vnHka4Fwp1JgRqawSpWBQRm3",
  "key5": "5TUnXhua3TDU7LWXA9xqm3w2VLdp1oKCfFm9fTV6MBwquNCZQ2qi9Z139ddJnqC4FSYBAksTR5mNb7qtf7jfHdvj",
  "key6": "ZyN4rczbTiGEQ1FoBRRgBfZ5Y9iJxkzAw3D5ngqk2HaGXtmg4txv9et9RdmfGPn2haVJggKTdamet2SARnhx95v",
  "key7": "5Se3NwFhLAeUMaGZGiGmax51YzK8CNkoDNkfyfGu8T29Gpxs2hTjcsKM6Z7pXft8KuqjzSQTJ2wFkmnP4881idjN",
  "key8": "5p2V1v689uR49vrePqEvqiHyuqssCmaFy3w9Ym9FG3jvx1bfbyEe2NiY2MW5QN2nqymGo28Hys6yGP24c93M6EmQ",
  "key9": "2ZiBKSqTVacA6g6tubw648hT7ufmzM653sEJJQTUNeoz3jVvzZbTvzyEGghxzWExfnSdHybFqKo3khyxRfZr4w8u",
  "key10": "5VN28ftZxRBp6PxezHFp4ptPvfmnhPpMTwqRGQFM2GxGAHHBsyvmUPTTMXPNe8yNDD86wrNtqDh31BLgvNj3sTAd",
  "key11": "3tXRk4yJxDoFFeoeSn63BBUoZy9aWTp4ViBmN2JBHuZ1f4P6MHLF4reYSS9a7UEooqbqLE2ifXj9n72M62wgBb67",
  "key12": "HqwB2Bxu4BUcgWie481S2rgfii2YqRp8YFQi8kpjUE5iXKukE1QnwcqxRsLnNa63QccYxrM7FrYWXC6UmEZR8wg",
  "key13": "3qXRkSJsRYgdYBzRRDiAs8GZCSGAAJF4AMNCHeujXCks6kC49VVpuJJXhZRYEUhfz6Vo5uu19ZNpnSiYGVEirTCP",
  "key14": "54kUeDXZR6L9KHF2CyRzu6eqojoohPPfNhq49E8umG8RvvLzMYcr8qpoegVWchd55uXftoFdTfpLmowEgUvNEYwh",
  "key15": "2ZqapmjGD1x7f8qg4xyifBGt4hzBiar2WBW2z4ARVowPabAMduz5Mqz47mbiBx8YcmA5mWi6YNNhbCXpqbdrMnyk",
  "key16": "4tgQvuyereBrucTJ72QkN6Z2JhJycVZtYRe5oc7t1nTrHDP4mnB766S95enPihsQ5Ch5uat9xtUuQi6nhonoxm9",
  "key17": "3EeCCnFjVZnTowkjRv1RuCjQJzwvjMN54F1ummqN2jSdvTQnLqNQUJ2C7AEoCkzFKjbJ7xsaPC91ojtZmbMfrzLM",
  "key18": "237fYbx9b5iRg1UPKWCKrdm1Dv3Hiq8AKpAe6SSws7XMBbsuXmpKeAavvLZZm2ng1HqXkx5vnyBx3mVV51UVQUbz",
  "key19": "5EpBgTfTDEz9ttgJ4ZT2wudVbch2BYrWwEhHPNBqrhykdDPpfPxaZpvwK9t77NPovWmki8ptjCTR32SRRJ9aNksg",
  "key20": "3dKWj5omn7DH3hHjt1VGKib41sYTsMnZ14HRcc4EWBhsbW7brPWTjA5TvKKiK8qkycEP7XaEqehasfsSGSd1aYPw",
  "key21": "3yTjEFvoRvEv4jnjCWgL2Xi3Qxs3KfQeJF7LSuuP9QYmURgnB231VRmLzM1ekuMBj4YoZvX3cjaG3E3wFfXutRfL",
  "key22": "4XzoxHMTanoMnHr65TmxJE6VvdFxowd5W8qPKEbt6JCJfr6KjX6H4Pzveoiba5k6CrfC5aEnurdkbweEYQ44xZoy",
  "key23": "4dpiaby7ctwfh33uYCAxwhi8N8sS2YdJEDkw7QxiKgubBH9y7YvpdYH5U64wNBwHfNbWkPk32ifa8LqfZtCo7vvf",
  "key24": "5sNng1Km8Tpj2y36RQEwD2hSoc7xdXP7TWDuZt1H271uXFHhTjFEiQ39cT8MwPKbc25ruWzG7DqMmsXs2wLjRAF8",
  "key25": "pUviPYZzCPXZcxn29giG9KZv2ZCxBLs8sVLZYyoPmhHd7UMwGKk51wmGQruN4kpNiKYBA7vJi55jV1jUp8yHPgw",
  "key26": "nHfD4nZAjMnYaDfUCwW3HnBoGB66oRxDmBphfMm2DLJ4ennConmLbVHoahMffrwasw41KxcGxLxabgpuCRbje3J",
  "key27": "2edUeqsRLqack63T7JpSRHDATithXsWatxtiS5jrzFA1qeZgyf2nU3HYrShuETMv7CCJmeEmsKmSiPeDNfDNeJXv",
  "key28": "64StLamH7MfFcC4EaTWAYartPptLfDNMopYQNxVXeRxy7Pc7tyRfxL5P1nKkobhJKS9oyz1GB1Bngy78AoXpvotP"
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
