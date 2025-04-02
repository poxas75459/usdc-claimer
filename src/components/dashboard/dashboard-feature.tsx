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
    "5BebxtiaDnufuJzMetL7BNGVVUy4VEYm6uu41qayRCTWULxbvxTBNjiwmeDja82GbErh3Cmnky48eEhDhZTiPWTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McDCJSH3Wqy4g7gY3hVHGwTA5eydQ8723ce941AJnJtYy9vWENDiFAxCwQzdZoJCDj62kTjXXABTmvpycfdtfhv",
  "key1": "4U2fqK822aGZxEFt3bzqhG9GmRY2FzbCGbL5N4rwoSGCnDQnUiunxUhTZbxDaCvoyRaJc2HGfUpLADxPSqLKpanK",
  "key2": "353DZkkHuqhmyr7DTX1EyULvri14Koq1aKzNMqGxngPNf9DBjETFMMj1npCg3idmopFnQ53aW42kFV56AwsPxXZi",
  "key3": "2BahxT58rPvXpPYc9iYdcnpcHBzWkGj2TGULNHZnyBfkYsGUnVqDgXhKUbzarUdBdsj8U3QZxo4zyZJZ3MpcMzsM",
  "key4": "2T3bw9cYaG42fCpXSXVF7uWUyRoMMmFsd5ij4wfau3F4eo68eQzTpmvRFH7GHDEpbYnVK6kqPW3MDSz1petjaqU2",
  "key5": "2wcKYGkFwR4mF2zketYJ6MfTSQyjyuTf8wgmvDL8WvuXMDiFzftKmbWJKKrFFiCzmvcGsGxdSifcCMLPsDSmsp5J",
  "key6": "5C6VuG98pHx1uiNoSVHaM84AFYkpzTTbxX4LGqZZRCNo6rmr9pj8EzX2zZqvXRo7oJECbkLoDD4GVgAzz3KiPRBQ",
  "key7": "5Yr3o7Uj7PTmDLb1te33AWTs2zSLadV9Q2QRYK4EiufiYhAwkBM7hqgJBPicv4DmuPXUbFofNwKV7JyKY4PATAu8",
  "key8": "5HKHGtprMdrNDDUQMjmNcn67or8pc6chPDb15XYRf5NCuGASfTdGmJBx6WDonMBAbJoWSnQwbcHVyLkH5tNVyQyS",
  "key9": "gHC7LccAoQtSk5dDmGyNYnAHdrBfq2SPQ32nZLQRwVqkEsULdsTvwo8U3WBjvaHWEUpoopW4atZrKAXuJxMsGzT",
  "key10": "5xbhjGxY4a9uT6bDU1RajMeo1ucQYSm4rxvKWCrjhjhLQi1Y1XY5S4Fs5QWD9YCJYb9FSavFFNAMJNtd3ei3KPU9",
  "key11": "5MGF1pMoBXswH2g3fXeH4wD5msQTJY7sBGT9mXjivPo3j43CfrUA9bt25x8eoa15J6AdcqsiUiQo86UC1dEpp7KM",
  "key12": "4eDFZEQK1s28VgjzAW8wXvxzsy6zZX6Kst94KkAo6Bx39vodsodqw9eu6fwmCzFZavzM7BEgVkTotHG7ZC8WioNF",
  "key13": "4CEGb5XiKtmhwb2BXa3Xa7LcsAsT3xhuZ2tD2GM53aqFoBGQdT1ETqXmBQS9fat5o2iyXSMkF1aXwkQpZbqGmSXd",
  "key14": "3Khv7gKnzKzBiKqoNqVEri2Dn36LBeT89FW2TENdGWrY7gXxbPfDgGJSw1hY1hzRf5AjijCHazGaebyPocY5iQAw",
  "key15": "PqsJ9asyRn9YVWTN6uDztk1aTGRHvKNSaXMjFrgRyoQmLBAUp2qaMGLTUfJB3fUJwT5z9BHPDUmijdvmrvioLH3",
  "key16": "5tNct532GrwSTAAUJvwzi6DJuRotCS8ycshwqL9rMiQvETNMySHhU7Aj5WDQJHE6QPnENB9o1sRBHgGLL3f3voGs",
  "key17": "4VURNQpD18dajZZWMHXAuJresvDnwAB4cX7Yj8YHb8nWwmvK85a2GbQ4kffEUipv8GSQxCm4vTiSZjHExMfU38JX",
  "key18": "3ssdo4oMZ31ZPUXLwWpHrw1ZSkAcau6mpX8ALKz7YwHftPDPBR6PGXvUHhGWH3rNfY7npvf8a7dhEmcJ9nNRnM3x",
  "key19": "4z5YY17867WKokb3d9RSZttUCijvazsRDyqvoFoYpsdFxLcnKkaceeqn33p6C8crK1ST4ed9PcnkfognLFU45zwE",
  "key20": "4AUMLQopFjLJyuc9Xp1SK8PH23rNwDHDH1af8dy8EFC4WD2oJXbHFLYcwFZ1AGJA1UPhBxWeY9WRBdMVHJjMhos8",
  "key21": "5mzuyMJWDGUderD7YL4b4NzCmmAzyNgKa8vSt4AtXYNJGFx8f7Co5dKMAs8QYGQBQHJqVaCuVX2qUC99WHxTamaq",
  "key22": "Y77aojiEePpPBobdDdRpDdfgd4YK5QNims483scyKqStmSNB1WVhA5WJ6DxiCXcBNgiDz9NHpamhjgSEqD7SvrR",
  "key23": "61dCBXhhjLdwZjvFtifi1BdhFKsPLjUtQ9UnmSvEEWecnj7itNd6zZSMGBYJaHN8L8TfewSCjNZh1rRv4Mjtxxm7",
  "key24": "3K7FqN9gt8Doi4FgjQWunSuXadFyRKFnCzKVeocuyAyU5fa1BovyDX8U3bJi7wHCfPdXdwDYYgJRfFTY3edUMWd5",
  "key25": "RxgAKjNh6dJx1LVvzzm3P4jETHSfgmVmJkA3i3GEs5xoeCWD4eD5Xeo2eDFnhdNeWoSdA8AJBvEFymVfDSrHCGg"
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
