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
    "2DztgFH4tFSK92maMmJfiFZeLa14jEh9CnL7Ur3a6AwTGkqiz39z8iYJZxqrf9bNskpWLxnjR8CvX8PvL63zDSGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2txhcAkBNEEZeBDHr3QVSXpwn4j6zTKaqkM68oUSnXdMhGTfHX4qg2ypgFZVtWMm5cVs623m3oh6UFxUXbucPaFc",
  "key1": "2FhuQKfGyXz99WCnFk9tz4GjXbZNfBxJAwCtTt4K8rJ4zu8GQPedRtAcCjfKt5udwrdWZnbgyUnu3hmFK5keFeKD",
  "key2": "5ftHfM8qDFRXoq8Mb5utGzv2g8HP5B1aiMUVusJA888J6qVJhduxXXM8LwJvAzPRsguX9ndTRvZwRj9XBeYnWNc7",
  "key3": "6F7Ernr1fg9iDfmbGCSCVob1U1KwbenyjsHR1SwQsSXjG5UFABUpqM6dSaM3G6nCY1TNWPernNxs3aXfxZoQ3Bk",
  "key4": "3G97gG6k4cpNcxXgKNtdBTY2XrkbFSkeW5yWZwovv3EGXrq3fKJWpUV5HZdxcu2PT2TowzBspLnWcSW1jtBKmeW5",
  "key5": "4m2bTwkCvXWmgRQ1iaJiZJFD18CQxx5RW88t4STJG3617Q1X9At1D8ZoSZ6Jh2Gc7PDo2aP7YFTZkRreXGLMyPrU",
  "key6": "32cwWx2BDb9YXV7Sd7YzBRiM8LAJajoz2WEvK4sU7aPWCE1q8DVGseCec7LWxcvUXFHZQpGpuRAnEE6zyrdqjWjX",
  "key7": "5x1AgVd2wrXb9PS8bSKMhiaWr7eZq3WX6SMnk5noJSketxhBWgQ4jURnGn6JKNHQLj1o6mBKBT66eqqTAhWx9jnZ",
  "key8": "4hMHfhUqLsL1xDfdTDcxpa8YhXsFjoykRZD4d1qxPBFDnAirTqA7Q86dws4so2BPAudDwFdsbvmadE7yrNRmsAo2",
  "key9": "4tyMWirPbfPG6d5YXyHSP7Dvw6ZA1KEGGKdL1iK9K3jDzXySkA1XUj4HPn8HF2zDvyqpAgY2RDbUajyhbFwCtBzp",
  "key10": "4qLtLPE8faqsDRP5tH1uB6yHVtTW1ru9ymWm4Jxg1ZfTfMhZNV4DPDesRfd9AwSLkE1zBtNVVcKjhXthRbEM2pSM",
  "key11": "GGMY5oPSknsUKxMn7kcakp8xhnWf6FDC4tjtNZun4ro3NYqzUqgo1Gi5WfWkzrsgLvpw5wAgA55QZzSiWs8V4Dz",
  "key12": "2HayRVkaiTNGvKggxfdAdjYTK9LjEnR3mVXY2Wcus5gCQrp7WxUQ3jqwKtHcL6NQBozDVzqeWPrni6qLq7b2U1kC",
  "key13": "4Xe6RMBi6VT893b2AVUXLJuLLYciYjysZbJqrnYyvqkdS24RYqUMUmQMZcc7Fmt4k6Zc1PQrGeQWcShjVpU6RZNb",
  "key14": "2MNNGEpg6CQzeRuBTySLXGie6xwjWmz4MjYmcZCaW71JKzwgQz9N5VA3mtWE5b3CKipXoEEYNUFFP35ATfvmSGVN",
  "key15": "4dV4PmWiX3avpTosCCinAQdFzbxoKjRjSsqpiY1Y91QaJ3majZqsLRkKWhDAA7XJHegLxTB3SCoPzJCZdnXUiH5E",
  "key16": "2AyZraveb4b3yBsaeGATJaZymvBoi2P3yXHYkgiMN7n9Dqta1eS1ED62F6n75XMuXbAwxsRZarsR1ZQEQ8BKpdVy",
  "key17": "5ZpinkaS9NmP1utyhNRcKNpSxXdLScAZ6X2zz7USxJJBsikxshwUzz58aFPyEH7WKDonrtLNbrHUQft1P5rfTZ5V",
  "key18": "5BbNhPvnsdGorvy2wcAn5F8AK3jqxLoqJy8x8RZBk3U6gVwgaTgPNXnuAj7pap6eKDQk8a9SPAafp4kmY2DuyE9A",
  "key19": "2izesQVJgUmrwtADnU8GxnvHwhHNhJjqLJZs853NwmeTfd9daNNaVVPxJWvAffzE2THeQMQVLNtKLwsFr2ZEhYmV",
  "key20": "5wquexeqgBJpNWWqCLeFn3gURnwUVjPUwojeWVnKp3gywQVdzYjzXfERu4sW1XUnXsHKVNfuV2gMX7Qohq91wP8K",
  "key21": "5dxvsM2G6q9UTPEshdaQoiooMmwBgDMf8haZ9xmHmueqWuVmTkPNEaAeh3v8L2LmahwsbTcDDu2LcT2gjh6xdWk5",
  "key22": "31ci8UbpAeLMtLfcHjfLGcSRVM6uz1j66r5eEQdU56jL3NMbDpD8ACjNCybNupsshZMDfjsEbVBFdXzo44hnwbmB",
  "key23": "453PA5soCUkepEu1v9EsZsv1eMQ6CZrLHQdyfku3vQiJJa3jb4gh82hfJXtoBJVqzstejVFNawbXwcRqvXjArvhX",
  "key24": "44uHMXMvSjPMEEKza1B5VrQwANMNDh1sReNPJegECxDossHwA2D7rMVvEkqVj1nYBByCuVqbtPanL87GYmFiTuAm",
  "key25": "3BZifuxPWzQ56L2LpDVQjP4MyHPVrDUjXLDwiVNPw9ws5kQca7LZ43vCaX79Um2c87bNSXjp5YnBj83vjS3AToZd",
  "key26": "4A79e7kjCvtkgNxMpp2jZWhXZ4fpBeoLjA2Tc1XASsgZXP2imwwQnstMiZs5T2gSqQgFy83q7U41sf86TKiMwdkg",
  "key27": "4fiuFb9GtcWcbA8K8oVBdBUL1JFekJ5axA44s6NbWDBZETn2wfYYktC3WZHLGm5caPwJAm6XAquch5HM46Jqu945",
  "key28": "5KHaUUpxtH5AwEUPhpWu4CFXK6YE11M98DLpo61sADm2TwfVhwPnPjdiBrcGXf3UabMsQ3oq9NaV7WPuopheGmft",
  "key29": "4HYHLMm3PVmebwnM3yWmuserRd5Gpx7gWrEtoSBmztGf4cs4DkcYqwXzokbQ7tZWtvmy8pCaWVLfh6cYKFQwKDeS"
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
