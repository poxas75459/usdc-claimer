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
    "3RW8pbnfRUuAqdxcThQ1jmUYbfnHSz8YdmBqaSzzAz9BX1J3f3HT1tgmq6y8YHss8eUYjVmvf541ozWBzmPKycHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyrmB9bdk1QBhfgqrMsYyYvkDNHhG7vpmZ8jEwTf7WmqnKe3NZbEJRrK4wC3duKW5ur8C1D3Xn9mL2depsN66XA",
  "key1": "27R7jv1oiKkaRG4UHAZnbLR7vUxqTynVhsjBofJt3MY3t2sQqTfwxKfP6FRr2Qqw91v4wFWeDocpWoaMr5izVJhh",
  "key2": "3o9FR9rMHcvpVWGCMT4MCzbWL5fMKGAxjhg2rW1NqarjJScibS7UJYWpmveXVjmh5aAXgKhU2KVn2sEaywHsK4UQ",
  "key3": "4CMj4HkM2toxN5R66bXkYTxFHoS9TXWZTF6eu22UoWBwtNs2HwfSbfj23ijcae58sd5JikzNLmqFa1tWnZvLdFr9",
  "key4": "5kWNb1Qq5mpsS9Vpg1KuT9ZuVVBqfMXUjQyYDPMhVCibsJbtBzhJPS1VLPMReogNfVWwaVUJuMKtf5W532fgQMZx",
  "key5": "38ADZNjP359M6Wnj9z2GQhQUJUBm2BFjA8KvZYQEiiiEs5aozwucMiEMN82HshXGdsCx72d9Gjn4fmKhKJP7iqyD",
  "key6": "3itKeH2Wizo9TFCbR4BpUQ89afuCa1NJ1z99zBS6a3QyJGC9nW5anehHWf4xfhxZV5VnJM4NmXW4PUvkbWu7Csu6",
  "key7": "4Df2JjqdPZWs24KixJSKpNmD6dzgqEgv5wvznivH2B5eh2YmsUf29rmzvXebrPQLs9qKa5zM2rgYDC5fEE4RcRrS",
  "key8": "3cPeKAwkTqY1mvZsxbbsi7MkMTJiNqcRBNFSimBUJdevoPRvFGc327BWTW5WGKhvN7kFAq3N37kfxebacAgww3fG",
  "key9": "5eEvKVqgFZmvyhPbUaRbaLJ7o3hLcUrU6ANUoaJpFDUtDUYHdhwjunjUdniFwJzfxtVP1KUvkr9PfgrwdMXKqgY3",
  "key10": "3TN8XmArpNdsNV2tWYKbosyy7VT5uXk5vnV1tLcp5YpVkiZyLBmVqhTfnEdyUG1x8qpAzWWPrXpTmSp2r9VrcAki",
  "key11": "3yzS5NFxheEqrq9kY3zWga2vJmZATtNAyoVoVjktCknEUMazw1DrD7JPFr5GfSuEZwzhF9G6nuKwPNLbRJDtVnUz",
  "key12": "3K9wtDgpuze8uw1gkN45vvujDRc91UAzHQf6x75KKhDT648iwDck1JaE7k8goiYKh63DMDv5gdSSYem2G8woTqzJ",
  "key13": "45PyVbRauW2yGMGnoeWDWqh96Rnyq17mEtzjbiH1DdrpTnD5xFvpeSMtw4BWeqdRKuvvNr7suP63UoBQDVHv6kAZ",
  "key14": "4JXFGmeVUQTGJQHZdhV8Gf4VGU1CQotwLQ3ZZdMLd7qYrKToG3rwrrHpTPGuUVrzKQgATjgTEPffgSd6kCLTLVRc",
  "key15": "56MWQuGsDYFNm3d57WFvMndKr8t4v9GkHjG4uhJCPhJybvhgHktg2KAdV53mDMRBVyd1rQ7RBEHBrHERkHm3Qx2H",
  "key16": "4YorMR5oxcf3uY2Ykz2TjsThN3S1XShvANKYKvsVrbcX2R9dzQarKv778ASFDWZ6QodHPyEyt6xRy7UiM8qX46Fy",
  "key17": "38az8tzWga6CJ4ZcEEYAYPnP9WY3k9NNFkH79VduWfC7V6haUncQmk6qi5uTkbVNbRkj6Fq21T1z8qLhjH4rxicS",
  "key18": "5hvsubHrzPf13D1mXMoVzSGegKFeeyp99q4AZguLmxYSi5mH8wvkFYRcuEMec71t2ETLUmcjKe7NphxP2F9a5fyp",
  "key19": "5fBrH2cxePsQi3pBYVnTVjQV67rtpmE5Un9U3CJs43TJCapJEMAahzka1y4D5V6wpGZ8y32sVqeEZX9U2LHDmUsj",
  "key20": "14cFCJi75rKqfSNKs2Y8tpHsdmwFqGhafDdsyoGJqVfaZdLj1unoXhJk3pj3cpTMr4gMkzSdnBeP48zrbsnZKY7",
  "key21": "2XzXgPNsACqW11puUrEZFSEZrdXAB5zCWr9Tuf9fcxZdaxPH5BhFgCDiQtk59gqBKKFktF5yfZzXxf6ShP3a5h6d",
  "key22": "PV6qmN463KJmujG7B62V5CW8nyngd5kLk7mPhGxToo74aXSEArcHmyxqsgfmhGM7WjDmQf1JcASYfR9vdmKQoBh",
  "key23": "2qyD22q5XCzJ7h26sG3tn1Jz3XdCNmsEKossLxUk8KddyWg4n9hBA65Y8uM9LEQuiSXwSqMW5mwcCNMztGjmCrKh",
  "key24": "3g5VPGsT9HHHhT19KMA7Hpd4L2pmwMxJXRvCP6HyfeoNYuLpxgu3xprpWLg7xk7bAkwbcb6PvpHeSpKNNWzqmUfN",
  "key25": "2K2oMsu7kFYXgzqK2HqLw6Mwuzzoq6HSAAPNRgoHKtAm1hxZB59D7u2h12KcJnbo2CSVzhM9Bp4zZvNUaHX2ZrKJ",
  "key26": "2uPy2PKxqMe5ZzdSMn6iURkzztwKs97VVypXYZngC26rsA8o44qarNa2WPUpayviZJ1P52ZGG4hwDssjVcdq6XYi",
  "key27": "5y7z1opAt4YtYLXGU8NE5vJDNbmXy3qBwQuMDS72EQiTi69LV56ZgcUeXexg1YWHirMEzs34HctGUSdscH52z9xY",
  "key28": "2RVCjiNN4zfhg33jpGH2rfjPDWSjCMpHdT7QudXBA8xkdLoixdTwimSWGi2jygEsnQeAnqZ4xayS6fAU3DCKupZi",
  "key29": "2WYVjVxb1sJepr9jRsxxHS4KPaHqYsm9zPp5iahZbHJ5puTkGKVymxho71LbyaLM7WUQVnM8FfVzeXzvMyKh6Wzj",
  "key30": "5bYRiCqedotDSU2QaPh2V2xoMoro2jvsDkuyHhsiKvTj5TEY49rh5GtiFZTKcE2CcG4cHSvkhFhc4oYGzK6GoDRv",
  "key31": "6493gx4rJQkgTzyyMH5ttmXdUjKoBkVcFkarhMsxWAeRhfT1ubwggiKa98EVgdrTMRNz5P1Y21xsrUYqnznAyngg",
  "key32": "2LonRao4Hth55CGiUXT79P8F1g6SN958WmrVKPA1FQ4PNDgbL1qbrQbH39NMM1wfjvZW6kw2wLTZqX7PMDsqBpu4",
  "key33": "4cZGHCWPFeLs8g1vSPBGvqF8GA5wsWuPKvibAEt8d6No3wVeK19zwJ5R8L2eitvwYwJABioXRw1z9BXSEumKuTiB",
  "key34": "Jty2svzNi9jNNoPkqJtUwt2YezUpQE5RXYkVKzmk879jJjh3KcQErohcN8krEo7HRFnXTZfymGpGSj9eSD58J5c",
  "key35": "3rZhJQAdkE19qzqeoioEmWKELgV37MXwARsyfksZe7ZXci6Az6TJtqLx1NinetDUnSrQanroesHqTsEJx6SW2Zux",
  "key36": "3cvQV1CNmwEwmZESaAhCJhaQJZwSBoKQuFHbvZMnK4t1L4MmfLmsiHJf7fvyrPEvfnuhQ4szxNYSacKBtiPeJKqN",
  "key37": "284gYAtrxaNFxufGKa4Cy2SkcpH3Syx9cwYVGbVZnAtqeES2MASEcnckDRDJKdtLKb3gDJHA9d9ds9E36j5d7kwX",
  "key38": "4w6A3dyKAQUYa6yMDo8v628z7e7QjMb4JBkKhQBG5ZYaez27PQJEU7cs5uxQBBwAHnWjp7kBwy8Ykb9w4d8soXN",
  "key39": "2d9nYxQmkBgBocqFyx4HipJyYm7xxcpp7h1YVPR1tifRsrw5HsaRTZwVo5uq6urK4wVbvpj6TfvCzj4dk4DRsyMN",
  "key40": "iYb7b1NnTiA2hsbKUM1pvSA96pfjxqazinyvRiHi3dteGJeCi1C66DdGX6vwzLrG2ghhmrwa4pZGisrj6WFGhbi",
  "key41": "fBz44n625y6HVWnoL2AxbsWcBrwaKeTHawcwjmehRpYwnPEszwHZaux6EteznA9LCw8sC2dc6wwam5Z3zajiBkh",
  "key42": "3oiTWiVcXZ3wb9NXtvf16Sbuwjy2MaDaT3YY2F6rDnG2nmKh3e2uc6i2bRtNxHYHeWRjBye1C7TFxEtrWmrHsPTW",
  "key43": "3tsXFQJMCVjn9NVdhj4aqZqpvNXU8hkjUADZD19sNaY9TuMjjeKVeQzn3Qs6HZkzRPQT27vRZqz8NzsjhfXAmJwY",
  "key44": "3AFU7jHRFPg9QST6UWiorVQ1qvaW2UHq978bXmB3Njxf3TQvm4QvKwioxxcW25oquDzhN9ouDEtHAwxpkKienuV8",
  "key45": "42xBU5QFh6c57ZRn3FDousgwQ2Y8RgN9VKF5b3FfW2z9aL94zvA9x12S8AfE8wnstLLrR8TfGSu8EmEeMmp4rbr2",
  "key46": "56SnQs3psAfS2E91fihNX8KMrtkrZ2NF3Tfr44PzMwrEJKbmfTx7Ha5rE2eGe9yEHkjc6aoXjWf9Adb7ZpwLz2DX",
  "key47": "VNWHjqiciGQ1pXKXEG3UJDuup6dD4eyso8Z9vvsJFGSUzZjVzJMSqv3RC3mzk9e6RNx9CgfagTj5cAZEb21BAbV",
  "key48": "5m5VQ7vvNcdF9GMmtS3aJkR7ky8ZpCX49DLRTLfDRcjMpiVBMfxjNXcW3QjNyi1ycpYtf28R2dvunJscrqBwS97"
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
