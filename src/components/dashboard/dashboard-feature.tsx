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
    "5eFj7YmZ1p8pGXxCGA5faSvtVUhCxLmDgSWDZ5XqafHuEZkbFJMy8GRTKDvFfiv6FbAVcE2ZBcR2gRAgnSh1gWA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZoBS1KdeMt8D2EH7vMMvxnQpyBbMKJy4JVdFe1geHao3d6VCKzeEiV2daDcYhSBkf3yxDbUReY2qwLnTe7VJvC",
  "key1": "3EXpF5TkPRoJ6Cg34aMzho7FcSC8stWw1wibZVsSNj31guaTzFmaEGHWha9DTmxYi9RD6K9enBWZMreMWEstRtjC",
  "key2": "28xrQAd1yFMQMrS3arMKobH1ii99sADysm1Diyi8zxD6KQmvTExpbnt8w92CqJdj7Fvwcnws4BRnAE6bmB7wSBes",
  "key3": "4GpTbXHadVK19Mu95DsSGbWz4c9h4G7jbfpRbuW7BQsB5jDHsbXTDLpswXjSTxFp8pPfQ9zmRM86AFQzBkJh3ha8",
  "key4": "4isyK64k1fYMqenrNGoKTPTvw5UEgHZYkgFeNEfryMEqaLE3vz6m5m7osTPyHuXzr7KAhkfmVRU7qfAAvtUqyJJG",
  "key5": "5ZScy9w41qH17U5DgwF9m9jGv8YHzmAJKqu8DsFb1s9CZaXQibx2CDt9jCtJJsSTfHQCkKXDbriej3o9QGM8Auh2",
  "key6": "4RE7M1y757fC4RjKhm71RRFSarRMW2szx9Fs1bbj2GiyupKvRndbVY98yrjN7oKDTiuyNhwSP6vNHck6G96vaGxW",
  "key7": "4EboKKGriFAsJfjp5G53pRv6xqZTn3EcuuYV8AkxRwdAzDKvysWSphB9UJwSuXGuCqM5ppkq1YUsEkpcdygK3MyD",
  "key8": "FgQrhrKPzuqnbm9YQQKoLbAbmYxR19fyGrw33dqE7H18nLeFw6wtg1WCvNaQDi9GGwYLDpueupDUSpYZHfr1cFw",
  "key9": "4mvDBm3GVU3MjPetzphrBirprhi56CGexqLaBUFtbh4Pv4T9D8AJ8s6GMLMx2FJZ5hewEYUsUkKgjvmZi14zRxRM",
  "key10": "guhbYtewcDnDRsHaPHhkPMPr5N9jm354ThHyo7Uk2T3iFLXPkVbhQToeyY25ccAjJNm5WtAtegCNjQFQFN1PUWM",
  "key11": "PFNJz62tZLwLirXuwyA3ur59bPJmUDZYAXkC2zbhSdiU7mVFFxgckxYRCkFzSK54uNYGXWhVLdkCpmuV3cXkJdK",
  "key12": "5jMEu5jATgtRyYLeYjnnwp4ToSsA4z5k3cMJ26mNfzBMd1MX8z23UYKpit2GGHaGf5sofUc9QYXyWeWHNujyfrLe",
  "key13": "22Z8MHfsmvMGhKEYKNzbhJKofpgF8jhFWwvh7vmBSk3ocWoGE1cGQrpDvck9L9uFd9YTsENo3AEnFgrCcCMb2hd6",
  "key14": "4pQTpQ7RptU9NAq58exf6ffHBx95JsQenNw3eWaHTGKnKQwSGwsXX9UPBPan32xRxsYxbnk4Ab9ut8r9zceyjLBy",
  "key15": "5f4rCLGxr3VEnh3UeQmocZdcaL9cgff9vLzn1oB137KsANm2xXzFEKPYThqs6MG5XbHcjqHHwKPWvEJQmNwWZ2mT",
  "key16": "4PRGM2xructnZM1BEcJTao2QUEve8kXLmZBEUuUrKU2CRrbh5EcYVCiGwx1eRrxJoZBLFW6kMNnYoaxjexR8d7bY",
  "key17": "3JcFKCfNkwmhBJoEcJFRxG8czQtkfJGyqdrbY4nBvXS92Kr5ifG8gw128CyityvmmdLm1BFCt3TTkdXdxoEV6J5b",
  "key18": "5K1WpNRhETTDd8rL2BG1qfGtbyBQ56cGbxcdHxqkLFp6WdcvE4Do1BS6KAQwRFWMmRAtDUjK2j58JbSTbPH1Fujn",
  "key19": "3pHbeayvVvBkLT2smUsfqaLKiJwo3MN4sDggPrzbRbZ6LoBfhKNUhpscTSsoZ2p5UUkYk8CBA6MWaXewiwTmjaUY",
  "key20": "3k2rJbswneS9U1yrv3pcJV66RFbUsiK2WyQ8L4otL1614EJshrikzqwoPShsDiVeiWWaw4VqNo7BuGoZgYWyMgDp",
  "key21": "4JsdCw8e3VeVM5H6YeqZYM8W9CJKtyXzzGQagigMhCdWMpjKCwrdzVnZowisPGJJiYoTepQyY3rH5rpAU8Gr5GH",
  "key22": "KXBgPAz2wKgaE4bZPAfNw4wGKD3Kjsdy9KpXyJDoFUhxsyvAtfjqdBCWVmaUgKnGPYrcMrvPFSeJvrKeeHS589g",
  "key23": "2ThvZyS78MXhKvzohE6DoA5efPoX2zXoSMgJ6zdrisL9QnJLmnXTs2JPuNataUSpn3uwas6LwqFBqUaeVLs7DUx8",
  "key24": "378pqyStzKJjvDjEeicj9KUEhMdDCUjvh4BKii2DEiVL4rAHHzab6s6ZELv8GJ9bYuet8SDatpaTx74Rv3Y5DZg4",
  "key25": "3LmBLFfwXmf4pR2cxWhgG1Gx8ceG5he3ZjpycP4VKRJExTNsKSRwrsffCXoyy7FhuZarzjuZWaSJznuzz9VPjS4f"
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
