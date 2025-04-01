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
    "5c3deBho8tQnHYtHLkncdmvnk3uaeUSSF5RgvYA9vpJux79qAXVsUPwkSHYRUYvVSCPzYRoLwBpKTRpaaztXBcCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62nZkpTEexF1cjfVAvArgmPtJxu19oukyF4PXfLMhK5RWXzFxHPro8Tb8L8mxASTFnE6fQPGFifiMY1BPpU16Zt2",
  "key1": "FcpqWsfTALN6oMExAj4rMnTyrqE4Uvhpbg21xCmXZwEVLLYhkeqmsNnke9nDAEkweNzLwyrotZ8UexRC5iZvjm2",
  "key2": "3d4h8XdYx32zTXNL9MEeSJZJibKEDWqkEaGYWekELR6vMHZPLoeaX3xZGGUCy1o5mgMUX848NAwCQafPcy8ymLqZ",
  "key3": "5yiaPrsqd8tfSN9bCxwBsYaNxX3Qw5auuzepQhZqyJEBTSQRqjKMkZX6DuDkiWQhJnaCrJy7XaiH1im74C2UCeWV",
  "key4": "5GFVeeGB1oPN866e5dGtrCK572dwKVibFDwAue5TSYAo1wuyCKHvWfKanEtkrdn4pwGWepMDJAeJRWUaEkPz4Juz",
  "key5": "5a9a1jk7CKi3ikXEa4FZWby7xAKk4WvmQPgp7TxXurJvxt6dBeqHzt5Nozjg34y6gTW6VN5UJrEX7HMbaEry8dRB",
  "key6": "4Ht1mjPWMVjvJot6iCUnghCZnvTi8sEcHvC3cr58j4CEhxmuL3HZveNBxWutJpnp2HobZ5DjoPWy5EKzCkS3wbhY",
  "key7": "cSvzPHdTmqte1fYvo7owmeijPVVzmL81VfwGgomcXiEXgb3HjbxfCndLTUf8n89Ks34jrd2YwQt13U3XGZn3qEU",
  "key8": "5AGrAJXybn2SGXavVwSzRf5iJsT3ix8UsecWZYceV64PeyTWFixf4XYvJ1v653pwHnPTpHExViTSmq7yJrqijesz",
  "key9": "3NfeGLzwHAsjn53Tm3zNpL98GtdsGoRNxfMuubGxkgXonvxZyjfNVTfNLrNnJFWUzbFmStqu5wvPaLp3x4gFawn6",
  "key10": "5znKvDJ8jq14nX1ok52Zhsfhz9jhtrwM8r7CkXVEKXGXFfjCA1jJDWajJBB447cEwBy1jc1bntqK3n1raEz7Szpq",
  "key11": "2v8vQM58VVG2Fm8uPCLN1jsSsWsT9MdGPej9QyEgKZjwboaGUuMyH1BbRaKhkfQqtTxtXMNPY6dhTPjFjqbSsmWh",
  "key12": "4qzB4vHjPswExrRdpkikmw7V7UruGD1Ast2jzGWmoRmBeiChPHiJhcwzEEswMsSENnKK6bLVMVy1KrKW1Vnoab2r",
  "key13": "ByTYy3rDZiZAGgtmioJXg9FmTaz6qQ3Rc4tiNPyEA7ny1u3umppfpDC55u6BYPosFc6LAtHNqwFwm6YueWdygjH",
  "key14": "3qQ9SHgwF8czZJF9KZBvBYdNnThSw7hpyKYo8SefsKAHZrsVFCDpGRabQs1usxRopsHzv6nBw8icptm14uTXm1da",
  "key15": "54m4XKadXdFRH5Y1fwZ2gBkjzR85DeZRUMSi6NnEquSg8cBVHGSVAoCzCkUjwmUZp1v2Q1nDgj6Ks6ecrZ6PdB6u",
  "key16": "3GU7x8RjiCceCD5WpYv8d4N1Tzqt6yk5FLwncU1yYTDRDGKh3T9cotd8AMdWUufjAPXDE35384mgeyZAQABNL3a",
  "key17": "3ZJqaGjkrgztMxp8wskUy8dDfZhMdSi7157CpyujABaowyiBN2qC2tXERsC2W3kfLUUpAzcCAaFmgL36on49cdSS",
  "key18": "5oHASNwbbXQrrZxRRXDP1xVnA8Yp5AkywccSy7ts1Cur7fEsXAHyxhveXcdLdXNkTCFCHP4zcQnpPURxfMv2qfSk",
  "key19": "3hiAJ9UhisXG7gYK5wh4tGsi9n7jNLtKeKKrVDohkZqVhvX9rjdKWVC5tsqBEPoqbXXDmE2EouhBoFDMXBcbDnDj",
  "key20": "4VJVD8XafTrgNn8dWNs9SJCkE2RgPpeVDykofpNqnpToYRYR2CwBuZXrEd1cWKPja8c6Rd324ENPsUs5EoDkpMLj",
  "key21": "4YJgRDDYCa77H21vd3K9Z4yVrR51LxEz5rRK11yaL5QQhvm5SrJwkUoNPrr2MwkpKpv5m8S429rbsPoX4rhkUgXR",
  "key22": "4iu6ctKUJtDx1gGRCDCRpsftnXtEA5nDKhTx2Ywhji4DZ5jybqzyQR5ppVypPE7Ag1NrJ8esmPyhohJmspbgT78L",
  "key23": "2XRtnZQ5zyyhx9ycpQVU7xnvxfhhLmtHhU1CmLXPKFVTfi7yvGSsXmdNhXCE9ZvNJqYnsXc5oApixmiE2Hxz3VZ8",
  "key24": "2mGbXoKg1LHAxCynNnDX2WPSKBVcSYr64Ah6aUndspPrXWZjCDm8w1AkyKxkBS72htCJuFEvwsMmmgV4iWM5Wx62",
  "key25": "5Cu746KGYgysT93wQD2VU62R8ZCcDc9XWmtSQ8eBCfAqAt2GrWaXcrRoHYThUQMMu7u9SHM3K3kY2n7sEZGTxbwh",
  "key26": "5YYcYuGTiYiwjG4BK42bXQ4dzM3PKUr1Yt6bki1P1gQctJWq7DR77arhbUvPouEnrdpHPZLD2fJkiAncriJMsAfU",
  "key27": "2uh9Cn8gyMh8PiS2azVxtHagw1NqCHo4KbM2Vsbs2vziDhSHGEphbT1qKfdRWDmGQ2VBRcmV7MaGXB3ZhxqVsWKc",
  "key28": "5DaL8BjxWdkJgFRhoJwUMPkfqT8EEbp4jASUpqXc5ddDbYrb2kShFXyyQSC56VX88wNkoxNuhtFuJb3ZB6EdTh6b",
  "key29": "42GcgiaGtJSonoBRH4cfLVHMc5yYmyCvkW749fgyivcUWPECAZC2SCWoQmoRAXG7e1PrwywPt6zXumsSQTeLTKS7",
  "key30": "5Z2Fck32drcg5ig6tDcB9hmvFnLpVmFBn9zMoiwfULXTB2SVFNNfK45HBusjTh3SSFmpSWQYxpNYn4cFmr1HdCMw",
  "key31": "5kNpKA9xRvLYkZEfSQBTZeCEbau2AVHXnHumN9qHGyT6iVgFky156UR1a3nfx8j7J5yyyHhMR9qmjX3iKBV6d3qS",
  "key32": "2NUAWYKgKRjiy8JfnAVotWbzersu6xPT5pVbKPv2HJRtRViiVWdotzmFiWpFPP8RvAr2GoL33nELqUK5BbA6cTfw",
  "key33": "3dgEbQ1jCADkRSN9Uomubz6fhL7LhxxgFVeZ5mDknUkiMZVRa3pWbsvjQQHwzGSKvBMWMP2KpvtUkUuyakrryoYd",
  "key34": "5kjuQSMqfhTYdEWSWukV6HZjP9rnswttmxebQcXF7vDSAyBfeTtVv9wT34itjxGJ6pHfMdFsPntTEkiz66eaExwS",
  "key35": "2VTnAu9uDpAWniCzHrcCWvxnwaywpwmvrtobjgtWaBcpsrzuYuMUjqg6yvGBjUnekRUL3NXHrJeSMvsXsZxj2Vx",
  "key36": "2KMeZQBokEKAYkrmnVfhqbLZ5fUXtA9oYeGvf3xbygMHcYAk84RukvDHKawWxFYykqNnWZFURnXC1ebh5a1Ln528",
  "key37": "3JZApaEu6yX4pjFS82cJ7B6XyS6n5DpHgkiZ9WAL3ZKUUaKsMd1YR95JBnUuNZTq8cQV1eMTjMgh2RGc1uBYwhs2",
  "key38": "2HepAsyAD2zATVqLoYsSTBoHkhyq12wrZicJQysosz9VNyE5S5y3Gia9CJvzppAjXDzVUQ8rzmZNVKWtN4T9XZ9m",
  "key39": "5Y7BrVShdni4WB3Ra2avmMRdSabNWBYvi1PgCtp4jthMWZGSgaPQZ4MgbNDc6R2XayurPmanVND4U11Hu2dxrKoH",
  "key40": "3VMz1krS7b3KXb5WFxQhL1ek2gPnZM3Nb1jSms21HYyXWcjPf8tczfudbt9Crmtzs8zcvwGcCoZnNPFRURhv86dZ",
  "key41": "3wMitVQewG71AfqgpTs2EQGJUfiEyALNDhUMkot8QJr2PTmYSEeQ3SBKG36Uy1MBcPSVJASQNMqay96BNQxar21o",
  "key42": "4uW2iM3YPq1KhgiUCWjhkBPd5KzL645HihgHdBQqjvgCykBCHz6dzpCa7vmK4MNXYxXXZ44TGbacHoQFbXwhP87r",
  "key43": "jh48Bp5x9P7CbQMyQmcph4MhHrPFz7jxN3xjJAPeQD92ZPWdMxhvNS6ZbzTpQ8AxiqVXTeFCLGBKjZfDXGxepHJ",
  "key44": "5nZ9eCrj9vRrZoWyo6V6HwudsUdrKWbWrXsnxHSTZBJzncyxhJPaUS6zn4hg8wcerZHTFobKKjA7u43SSnCstskB"
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
