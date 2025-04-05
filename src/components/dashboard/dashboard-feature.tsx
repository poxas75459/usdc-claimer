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
    "3c6Z97mdumUR197sKaCsyvFLFgFNUiQdQCYEZEU1YJLBfMx9UDNgqNTvhFJV3rcRsnRH8Q4sR1uuakYFKQ8vc91h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h9cQQrQUkLLQsZXVztW7vNFUAC3W7epQ8WJPhz7r6iDbXmGLaZMrs799RyWHZqMtGc8ZJuQqHzyKqU4nESWT7en",
  "key1": "CmSU6SwJ6D84uqkZ7UFZUA7xzUBJKCmyKSPPtcLqjd6aCL7sxk8dAP1DULXnsZqg45ZTrDAQ5KomqiYketfNXGG",
  "key2": "2TYmZCwZtxthGUsShmtfh6KuNAQuzNXeD9HktgKMXTTX9FFRTrVe1UgmP3ytMpUA3ocejXfNP9cByztNNmUVgpNw",
  "key3": "5TCHU3BYvuoQcNrW8ZHEfPV3aF2G1HA7DXiKck2qD4WG7F2xmk1XSdPZAudcNT36RSj3UYJx7wbZexbABSv236at",
  "key4": "h1Gnj1d8hCCQ8qXPQhiQ9VFeLLp1Ga8TvUqHM9W4SPB5fpQ1JmRQ4gcSpNd9chYppk8Nze5C5o5th2Sbp5FuS97",
  "key5": "W9Hq5HWFDKsDb4Lp4HaDnR6uJ6cssBt38sfyXXgvC71zKtmwpdNqn6DqCHG1vswGtKK8jCvTkZzuePM2kV7VpGk",
  "key6": "3MBRL7qUY8VJMJNnbJLDJXHa6HFh8URtrA1tvDRHhEfQtZhmxMnYoxiS4ZY4kTDtNbkFkysjfA4Xrogs89VAZ1j3",
  "key7": "5ENunaxXehR6MAXQHxrSNX7NTvXRG1cyTC5nxreiukcCVt6QjEUEoB44DU9RPgFw6y4eXL87143PSKVWbUTwY5mN",
  "key8": "QTaLAFPqZBMZi6ac4GWe5hqxQz9GhhFv1AVyQbhVNcMyQ5bxsDastfZFWJSFibxPUPFWnQT9iYGWyVaN4V1bUSr",
  "key9": "3ZMRPL9jpgikh2fFErc3R3yR7YJmPxSoanYEiombhbBYAXVGpZDuVfvg1jUK2VYAWhHwcHZXhXVRUe8vt64NAdUX",
  "key10": "4jczdNf9NcBe8Bdbia2bfZBUqmZxTC18CsCSuozG1yRCjGeDCEYgcG3jmpVocoysT2dnFmrbqQTpkiNTX8xKzWn1",
  "key11": "d5bHfmKkw42WWSsiFJzzUH3bV8VFuB4jph5neh24o3e5TfLNuZ2hWubMoRnKsme4LSr8G8mS8yGLQnzJi1riSbi",
  "key12": "5DTTy7fMQ11w5RuW1zuTRYWoCwcp7fc978mZGnXANJzLEfWPw3HVTkxVLYkimYqQUAQDMA3Ua7mpUz6h1YKnFq3t",
  "key13": "2BVqFkx9CkaHTzaUATXAf7EZpEGQss6Hi8aVEpUA7pCjrbXKp6h5ggwbHivxNEjzaCrUAHSqWXuhFGwCiyxetmpq",
  "key14": "3i9jwMTWeCxkecB2ii4suNntmTKnVatphtvQFUwo9tHE4wGijGBM577NUrnma94RYdgirXoQkaJR9k1wgi98mQDW",
  "key15": "mFjmpRvvK23LSUY4jLZwGAMJnemC7ajWmgzoSeZSrtkb2yh9wn9CpxKunYLq9PbC8oLQNV5XqfayuG3anWhFGnq",
  "key16": "4zg9iE3fuAi5R15ReBRWA5CbqTXse3kVwjC1RCEFfh6KHZK5c8qxkkjUsfdMYQxcaajyVXhgHM8oZcy3k9hoi6uo",
  "key17": "5w2wP2VvPLS5bgz7XsJz6vBknL2A1RbCVyWDsXEfgLzJ192oQK7zcoyCNxDEein42g7Qdu69USr3mmB71PVGaQZR",
  "key18": "3D5rkYH9SmXGrZQB6gWUpJsWKKF6BmoumkH2NQSkc85Z566mx5VFeVKJV4yDQ3vdQn9HdFLnSncxB7VjUp54DKLN",
  "key19": "fnTDNo9G3BN8BT55JsQwid33DCirZLa4AYWYdNDqgi73KeF9j998iGU3yCBbbKFt5ybLVqNBJKHdq1CxDBheESj",
  "key20": "2WnFVJyM1PkS2mdrAvXgJ3PUqewqxea4F2kuDQuUNP7mc2RtnuPmMamB4KSj43T3Z9AHHeZoczCEbUfeWiYEUSAH",
  "key21": "26jAqBmD16FtZbGtGg3eGhrU7xPeF5eVCD6dZgwX7PdFbhqL24d5WEXzgvtLnDhinUAU6nfAgyqhi3G75ChYsB8D",
  "key22": "5ic3TZMGicR8iQZ6aVtWKEou73KSSPfwQhbbk6wMxvmsBHG48XsowhcShKVX53co5cp8hGR3WSpe15XwKYdvBzts",
  "key23": "5mH3zFApenaEz1hAgcD7Kh9FFr1hNAKiAfBi7orvKLJ4nBYuc4VCw1NBwviPeoH1jVtoetL57uJzy5qkhJjZ7JDT",
  "key24": "2WeYKf6VNKEMFwYTuGXH5ktxZLFyn8w8Ehxrty7ibuPzcfNjX8BaigrotsgVume8byDdWYEf5WESovcmzsAYj3vD",
  "key25": "5bXaDi8ayQEU395n3T8UMNXY3U6MxxgEm9iVdyg1rFTNWLnFuLzM3BV96YFLkpznu8D4cNLTy8WreGe4KTAB3CAH",
  "key26": "5WxB5PArabbB8sdfDK4WQcpvM9P2fUpySu7L7NK9YZyBrp6aT3AxSZKBdpKHWUMn9JuoxkgLbC84nATyc3AzL5fw",
  "key27": "2bMyVFytHRMcFt387hcKntjSY74YYUorWEThJoBo23fjKtaVDHSHFy71K7V8S3SiXAvS2aLh7hoJuNBy1kEkhzDR",
  "key28": "5FA5mrkEuw5n5PxNE393GNNVakbDXj8FqN26xWVVUnTiXjTpw1wRa5GZxeLAbpU5KBnCFYHzJJvC1FXW1QtCJePS",
  "key29": "3Bo3AfqSF4CyNamXyekEvTVxsNRDFUQLvTL93BupEFwy7nZou2CoKk1n149fZS6De8wd2UaFYu9yRi4f8ehd2Mgb",
  "key30": "3H6ZkMH8PRjdxiHK683q8ak5Yue4juZuZ6M7Yvv5PgconPpUeNtjFkNKsxjh6PnmH7zEKeMDfwprc2j44iWRNwWT",
  "key31": "61M957uzcYQbXTC6MqJdkfRDuRJLrhF2JKtmcemogHKAXxjbAugg7xrM4L88cPG2kbyAS1gFUy7rT1u94sL8NgZQ",
  "key32": "3qQBC485HzQgUkXvcwmFLgqkUZYkQWQv9fp9PjMgwUviHjoqv2Wx4zsLWDypBobvHWiicGWpedy78v5HJcDJ2ErH",
  "key33": "3usQM7A2TVKSijvoNNH6Ddjw13LmBJsrUW6P9A3diXo3iphuzi1Y9z2twF9ScTHEdg6xWssdVANK6DdRtwWsSZY4",
  "key34": "4swxXxZTXCMf6tuqwLkhBkyd7XAZEBUgoXiA4ehcjqKDgCYbNaB7x9yKj9GhRa5X3gt37HbhxVcBpp9g31HJfwSh",
  "key35": "5eUriGXQVbV5VXhQQnRoC84wJpz2qXXvnhhofpxSQ9aNM2CFrjDoM4uLR9jKMz2p7L1YtU4yHyfdm2myNR1rtkkt",
  "key36": "4zcyZdv2PS5NpT8hkKuo2JonRvrXKCDqVRvoWeSw9rixdRKqyEPPyt3UiuDd9x8hga4b4Bt9QCDLn81RpvZ4SMfb",
  "key37": "4ie5CXveSwC3hDkL1H2ZspNhR78JidNdrweArPhwGhcVUUL2zY8KMDBfpMK2DCLRfoR7vuMe4BoqnQvVzYo3q4S2",
  "key38": "3tng7n81knkgp4R91EUbHspC5X7M1SyqEbLaUBqJud5V5YQM9M79gaYyeAfL47RTbzmdMBu3mfs9bKBoFuseWwE3",
  "key39": "5SHsP1H2GE6jhCbaTMQrJXFYycHGKgA75FYPYMbSQVB8w2mJ4sJ8HsYQ1Z8tmZzYvhmt7jHZNFQZFoiVSvFkZUfQ",
  "key40": "32EgKdGbDKBtFmtEP4xLUDKmveCVGQKkvfxLdv4aY95YR6Z7t2XeWbTVmBkLP57KfNCzs4Wn6FZ6gjmmJks3kKfd",
  "key41": "35Z3FC7KMXURJJqoTSs1PrDc7ZtSApEBrNaFPawpFVsSeqFPZtPrbum4iuc3mqx1PUftqGvTnX6AVtVnUjEXYSsQ",
  "key42": "NbTTS6VMAC3aq3TMMzfaXxZSMwnWr8KRf9B1rH7NQ37WyBppoLQS6fxbrXYtFnubeoF8NDpJE27ft1hULJ4pQBq",
  "key43": "2ZcrKnGghQEycShfp6TZZ72YoAgc2LWMdvEM8SP1kem9hZo8NBQ9t9ruFkqbg4mV6voqEmgvMj6P7MGoSumvtihd",
  "key44": "5VuC67F96SN2k6EZ2RBGnQ2B77WdABnkeURkqn2z83PZfvFk3enPkn1BXcgK9z7v7xmkQAmjfKHdzxKzSfnjyZhN",
  "key45": "5FXLnYLLibiCvg5e3r3C14umafQT2MqB83uPR1ZnE1VbJ4uETJNVnV9cMHd7k3q5qz2j4SWDZZXdKzXTBmhaSLaA",
  "key46": "42hMUShetxAuVnhqYBQNp5w9GBzZUkvDX4UxSoWowfuVY9ALzA4BCui1VWxy2fWoujuKFRBd9jYJQzGdZojyfWV3",
  "key47": "2pWxr93kTD9bjZCZDaL5qvXMWq4MBf47676uQ3qaaiHShZx14tMXtUcK8dV6Ej38HngMFdjaRM56GVHkQuNL2oVj",
  "key48": "bcV4R4f4JyZHEbob3nJiiAvu4Gp6ZMb3dhX1kDN1ADX418WMzbCUXESUeRJWwz36pGeFhztsoZPgiJq38RuE9aT",
  "key49": "5FTU1SJLVM12vBmrq5pLymYxmDS6VvAkwqngmEmBTLTF596zcaafogqjo4kyaTarjizqERqn9oaUTpdEbSax1nRw"
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
