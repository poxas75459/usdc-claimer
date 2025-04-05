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
    "3QDZYzF9ij3tnEHxp6VYWkEc41bKcWtpjEAamvC4nwubJBdBMFwtPVbABeaM35C9BcyjCJmhSuyt9on3Fsvp1WQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YAnJQLFjL2y2XLennJHW7o1sLxB71w7jPnSPt3hZfmDX8qVfFPTGNWh15Zi71AgW4EERatv3KEeQhzecfdRchoX",
  "key1": "2m6vjsNdEk5S7T3Jyrmzdebn1Pi2VDjvYWy2aBH9fsTmm6Hf11eEa382PLVrjW3VTxNJt8xq68Wdb3szt1ArvU4r",
  "key2": "2FqKWv9xZ6JGRhyZo2h6oon95Qh6omEboTBbeSvXBrEonMSAVS4SStod59u5zEKdDbALaa3UkfzqKvAD1V5PDRoW",
  "key3": "2xPa63dSgN42pXiEAp7PjQqEeVvozwEsLesPPk2DjE7WnrA8qJLZr1LqzfBmv4RoEBsMYsHF34K1Zf92PHjTKg7x",
  "key4": "5fcYS1ct3oghf8spfh9yL8idfz4fA4k4u9Dzat1vgsCLZ4x6UGmvwWho6StNK8CzfpsUuj6U93Na9giVk4dcawPh",
  "key5": "2fw4ZnrMNuqLNGv2Fq4iE22RCjNbSQLQqfVVnmbV62snWFCFJTF5Ffd8FybzXEjQe72FhYXfPFGoHmZZxsJT4gQZ",
  "key6": "5x1Vqx9gX9feusiSgPJGnT5yLDY2TVGdKCeA5tFWCC1K63MtUcimtECy9P2Wm9v2yn4XNMTsYXE5zLWo7HGfQE1X",
  "key7": "3ko6tcSADDn9hig2hUkcwsnKGzFmqgbovHyBi1owz1FBCCZWmHzQqAPkjv6Qih9GA6hSuwYHhFdQKhZ4A5Y8Gfjx",
  "key8": "49G8xoiyNxgf499AiVSLHkusCLCsbpc98SXD7je4s5vJWWhXBUB84ywLsFNW4JoDUunfzowaeJguyC1KRdZzUafc",
  "key9": "44nmgf5r34uLvestv4LBqo4t4jUibP9VteGDeGB5g8ZJ6ZzRsah7FctMuSbgHtCCEegT8gvGmYVVCn3USxJh8ygY",
  "key10": "5aysQyhMFsMEwmEUtut9obhaYQ6UsdgjZa5XZGY46xjrGFddRoiKtJWVHLNnPreDHVpgcz8mpq47eUbFQtTdPsoQ",
  "key11": "56yUCFQwrhKiApusGziJPnGRdzWqB6yjnN2xqm5hQniPDKMvtTmWJEWdHkqEruVHJMz3n6TbXLz7zy4JA5a5JewW",
  "key12": "5S5y9deGQCrA3LTCrexWL8zTB4DD5rMeinaBJdzz9jHehbwzmwBuDFXpfQhzqRSQ4QwNALxUimcM3NHAmXsXLAC4",
  "key13": "5gQE8C74pRLm9xrfd3PBiRf2Xv3S879MFc9FS9KmUXpdR2VVd2RfjjVAqj1ipYuwkJ1Uy5QGDR5X8iAmYYrZDsps",
  "key14": "3nBYk9LiyU2og5gzGXxD3dL6Crrpoo4FHFR89yTH4u3nZVCpjuSdZfUwzAThZU2Pn8dC4hjRQgsFVqWuzijtvjcx",
  "key15": "6ccudDfC1exTNmM82k3jEesqc1kQLne5CLeMu118H2X91oDY2yG9MpbyG8NrsyfPPp2ATW3HkXDmWaZoW4Lo3t6",
  "key16": "5nSpt3VGiNWoKXqzx5kWmeWA6CrhG3HMDpw4Yv2sFs97KHrdURvKRHEcjSCEqhzwCueGxpnBLCojdAE4EfwYpY3F",
  "key17": "4586haJ99tay5mQCcXR4JDqyK3j2gTH9HPhzTDKx5TteaWRzQVJpXtBpDjFJKDw9GNuZwuAhm317wgkci6m1g1p5",
  "key18": "416cafnDhFV5DXEm8g63SgCjhc4N3cfwp8eucpHKce2JNQWY9KGTZ3yLRspN9CU9scqAjpZ265jFQX7A9CXgUcFd",
  "key19": "43MHMEBjFu1UzTBf6ZtsE4xAf6PNMnEqsaZCDFeXzJY9qGizHGhSxTJUh4gsMeuuh8yD9iNTPvWDb6qHANxsnEk2",
  "key20": "5VLj7f1AijzB8vVG6f9Z6WnoNCxbYv1fnpziG39jS37gnrVXhWua8wmusf1CyXtUoVYiHUqCAwhFPo9ikKzkpGNE",
  "key21": "3Wtmtpwk8f9te8YH8GQQZdBFBMmxago4HWDdxDeAeb12m3v8W1iHE3MYPSUyhKnidkNd2BUkbhUektfs7sk53KQW",
  "key22": "2SvAY58bScwvKzq7gjVn9KG3gP7v66WerkXny6sypiQK4pqD1UuDxtj2T4XrRjwNTxkpuv16SvCW7L8rYXfzXNmp",
  "key23": "633PyEXFDhFDtEMbJw87HPUT4KUZavJ7WevvdfhtHZiZDsV7NGnwtMQ7BjNKKMjwUzTBNyXpjAZJz1mWthtBJtFs",
  "key24": "5Y7DLZZfozywi978pZa4GEPrLRVCcHqCXKwaBM2e2tohHPjrWfuWgV9hwt2x1SJ1B7FaG7XioGZkFTMuDosto8em",
  "key25": "ntqF7RHgcntUmcC4qY6P32ctv9AiF2W8e6ShzxDUeyfJSjn6fwUJmG3EDRsPnuhbDb5PF29tmDuRTjNHcL1Up5M",
  "key26": "9sjJfoKTUiYiqz3Ab2x1cV4Xn3JzEYzJEBcU2om1mRC1kfqAP3k6xAJH5U2pZjMqHLQPCjDXvGDyUqAsHLMF9ya",
  "key27": "62xegNpHDS5UW2sM6skTBw4z8njBP7ZWfH3T4aqk5xj8UwzQvTvtTAv9nXbEhkUXXYQ1DpQ5EdyowyD3npeZmMsU",
  "key28": "5Vn21mdyzFu1Uy5P48FUn5Hu5eKfnCEhtXRkc5Xo48Sq3r23ZPusqBzF4hYCMSaByVK8Vh1X9ePByWawzitLGNMd",
  "key29": "2h4Z2U641xS7XZFkMGpxYf7ywqoGPXrNuaAgB99XQYYHQ2r87UKcwb4DdziKV4vxw3i6GHdbUYUzNEcmkgGFkd2L",
  "key30": "4CRLnSg61EGchEKyjgHDTYqQG7dNw5RG7Jv6crLxTBvCqgCRzFB3kDjBNzyscSNYmimCdbtECvRCCCrjk49VJMD9",
  "key31": "AbkzruhUYt16eVLAUamv6XZke2i5HznfHfFRkRitdtmAA9Nk6zWhXByP3CHoAgYagbQ4br3LGaqfxrBUxV5xEii",
  "key32": "4G2R9ttNKYmqYas17RNfm1TUWyMSATzMHqjtizmLxR79JnKZRD3BAg4xkgSwheJ5jT99pSLtHkcR9a8myYmtqxeH",
  "key33": "22kJDxshgB5DEFizF1ddezXNBCFEiuV3dFaEp5mg7cFmNXg5JXPveRU8XtE88EhCnLxCq2TnfTMFV2Jf1akpCHzj",
  "key34": "Ah9kB2rQ3JorDAULog5CpJDiLxgMZyQc46DMDaLxm51UJEoeD6faA2Tmq8dFoxLdxm4B8MRJqEDTLvVG56UEKXP",
  "key35": "3Xc5Vq5nxJsx7F4dh6jqKZsxWok8KMfUeUuT11XRYkvd14GD8pYyWSKUHwFpwABVKfY29RQF5W8MKaE42dcuGsHo",
  "key36": "5n4kR1mVz4w9RaxSaFvnevXmctEM4qjVW3CFyhWzsRyqzirCrHYgezXxj72HyyuziNP6yqqMRUHknXi5N5XPNCoo",
  "key37": "ERSFCTGk57LqC3w2jMD7JgBCqPzmM1EtZoakCHMNNtmCXKKpRTY5FyuKRsnQBxqnQqq259u49sBtCsReLa3x28y",
  "key38": "2FmFi7nMvChu1mQdH6f5YVX1ktKq5aoqce4trhxhM34tMhyjXN9xQDwRN8BmhQ8WnVnQbXW7WxsrTPnW3ciU8H34",
  "key39": "2j1LoksLHKGf62oF7CwPoKJ5Xnqh8NUN1R8odWP8Lx4dmSDF1uCuYtBL5pqx3WunYx5jksU7zv6bdjQXwL4ntZry",
  "key40": "3gU4we8h3b84Jby3T7tYY7btu78jZb9aGqv9qxTtFdnt7gmWetfXASQRfDhBW3k4EKdsygXsX6XZdDaJkjwr4DNH",
  "key41": "27XrEVET8J4bhoZ1atu6JLk6j1Wv1p3duJjzQVM3zoGx3cSsb5p4UpEpLKX8B1Tcmvrphe91tPqkJm8seuDyzgqt",
  "key42": "4YWHUUQnEcfWXTTMmzRY4bzExfocmJbx73k3wF5b5mo942BcaT98GxZFSiD2iefz53yXMtpxFV7wDwWmrucNPov1",
  "key43": "3AaCJXKK5PEcEzGDM1eiCzfSh5hbJiNezu9eNL11mdXARUAg2es4F8o2ZHwRmm1nkBazVEQr9pXZu4fP9pG6MQ4i",
  "key44": "4i2uaZKTVYmYPzw8pZi5BCL3ChhcfTQRbvGYstwKdpwVKZQHFK2mwunoCHKttD41hRXif9vKL2VpwLEcVCP7gqDL",
  "key45": "2M6zwK2UGDEE8AJUDd7vN61VikgQ7dk1xAKQ8xaJmb59qym3hS4M94UyNhrRHu3h96KhDaPYmQpPss2jfPBjzxrX",
  "key46": "2E92AKBTwCWMWDwCsHkNshh1BhSCwYv993iLcuuTmhjb3s8GA4uywPgRK2HjL3d92S3H4pDLA6YeR5sxejUd3dvH",
  "key47": "4wan1Qocr7QfZfQ4YyjQsRCh3kCdt1bT7opAXUz3ycoqbNhjXyJmQ5m6RmzUAZW6Xv27sXXShiUADgH1x1CzZMDo"
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
