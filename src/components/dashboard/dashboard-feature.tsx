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
    "5NvHb7vts7bkeaJsqoBYVXzmmTkWZeAvuyQF1mRx1LrnRDKEUavvenh49jE7zWdB3tXrTZiM3hTxmRKN8B8AXVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KQo4EwkRxENEziFSPMe1hCqtEFeYedcYFjDBxgHMTSuiDPsFETKtmw2gZ7A6XY8TMSbRtuPCUWjFevdPH5jnwsT",
  "key1": "29cUFWEqfCCktHKEKQKkU1nRnTxD1qxQsj3xMXUwG3MhdE2Ha9Qehb15LhswdvoUmzo5uBsywnDr3Jm3Lo5eJ8q4",
  "key2": "JSKTPXPfAvuphFJ4bK75JPGjB2FqTgyc7RTAR6cgvKHcAZNpjcrSWkfidMobJdh5K5ojpiwsbZGgJfMdUZicFx9",
  "key3": "2aFTWXLoPV9grpMEp5KjUQJoAib4JLQkZ8a8jp1FmJJXsM1D6k3v5LoJm7T5udm3PKaJaVr3BpWQmrQPqL6JiXEa",
  "key4": "xVByz9TPksXgdPqFEBcr3ykAH8kfyPeQS2u9DjW5Npn9emQQoGgi6nrZ374zsy3Nb81T4rXA8HoJSsqKBhPuj3m",
  "key5": "4Yb75QnSKHFmPQTyMci6fG9DGSdDSPzy88ohHPkkX9NXeiTMxJgnzXcbgGEjf5dij7Sydh2SSAcdfC7vSSvie6sM",
  "key6": "QhvSbA69ViMcXx3qkEcMWFQXwjGbeNHt3ezXQRBuVkt4in3qgjkD99u6ajuocWc2KogDsKG88R8zJcZSVEskQXC",
  "key7": "2htqTqPgxDwa5Z7FCE9A6r18KUEgPHeyhrHfxqFhLam3Jts6in6sjsm7YhSiAMKv9WjNh4SbTP1UKAzzZypmt4uB",
  "key8": "2tRA2tGj3KoAbsjueppY6MaK2cPYHYSsKHg7but7MCGHVNpzgvLR7Si6bneaJiRTCNfpJhJ6KqazHDaTgrXHgEk7",
  "key9": "5HJhGEEg1qFHQhBzQVGueE7gD4MP5nbMhGHmcS1gJDNRhZGp6RmerdY2UwjTY8F5CfuYXQsxSJyyTwWLuPgp2vv3",
  "key10": "2DL856THXEuRKFL6sim1F7ZU8bvU6MFRBVYVbpMyeSMduDAotktzqK86pYPAVJN1np2N2YYGEtUoFgQzsssAbuqz",
  "key11": "5t81APntTuXthkj7KxmjaeVWYvQAYHQ1jRmVxFEbSZkiVtrsYYnpp8P5HrQnKCqktBMsbQwt5S5z6U6Y68d21pdu",
  "key12": "B9tpKwdswRHiNA9t1ZWJPzc5K2VMuvFawKwfPwoEZRQ3eARtLrKQaGQETgntL9xWccUA5dAtjmGvZAfJ6wKRRRo",
  "key13": "32nquWBXeXH7SYo9kVpMbh6bczT63QsqfR2V6asmz41Ug8fb9LPpiexPUu6KopjmYFgFezdh2cYtezihVqpQpE9R",
  "key14": "53kG9HKpHMZZv6Q3YyeVvFwM7ymj8PSStU8rkiRe16vELhWGnp6Y33nCmTo26FGvjdgVy8K21FL4fkid1FyW5PGu",
  "key15": "3Mh2UaV9kp7YSRLKt447E3SJVRFd4ndHh3ZPmJY4yimWGPT79uSxhLfinS2pAE9QvfWU2s1dj2h4eEDoB1izgMRg",
  "key16": "5oKYjeZVaNhaSNJPxZsj6NKYPHdL9GT54odN3nAtJ3ivK19TovS59WXBCehcNWvUxo6AMGkXGWyLFnEMFJq3XNVK",
  "key17": "2pjHVxwP3fyKSp69jSwbDfZnFCfVf5ixdJYnpDQhLE7gNYJ9o61WTkepAh9ks3b82oaSGobYDtg33unYthn1TPzE",
  "key18": "QkcwXiBNbPrwGss2qtkL8Hnzu18kqkwR1puCWdUTNrv72KMvgkX43KEWFg5VbwDznAeNbPAyL8uvMLE8dtnvDen",
  "key19": "3E58usbmRhzZwi8tiVVM67JhcmRhP7Rx67biRYkWjKjujKeSSoN1w7yYsqpj3TgSEe9ZKkjLtrH45mPVoXijRsqU",
  "key20": "5JAS4R2Tjuq7eK2MEH325MiBxFRMgEB1pWdRKLdMoj4WeXKTfCCrfYyfxw7wYBA3cUSEwZwaWYr6EgoXrduqKNyp",
  "key21": "yq9iLn8wAWqXrviZ2saJY5j5dxM2V94LhnHztVauPXoCyHV1u8JWiczEkfhnMNFY3ZE2i38hd2m3TCr8GpeV7cH",
  "key22": "41GA1tb5yb9ts5nRwkpiouroy6GXbVCiGDtwzVRLU2yUUptE8XnorMZw7LHQDN6Ny3H4v7iaFDN277VasLKmp2oc",
  "key23": "5uuwx8ksYvL8GJYAhfE1gi3BSUtUTQaJ9mezPDuu8Hd26h8pNVCJrqrxLpiLwuHS2HB4uNX9JDwZuUvf14xZVVv9",
  "key24": "4J1xyyhibiNCprn3fm8oJjk5RXaTfT4GEMGjozqBfMbhEC7XU6Z4hTHCYuw9wvdmCn7biXYw8CgTitLDB56cS1SY",
  "key25": "9Lqmz4McfCgYFGi1ALEBeoG23jxTp6QUDM96EoSuH6SCnvRCxVywQH8PJW8FyDXsuLBCHP2cwsXymVQ5kw1Q62H",
  "key26": "3CfZv29s86ohtgm66mivqXsGot9eH7ssTZ7AnWeny9YWg6JX6TmxieZYP6EVjukRU6GDNqCqHPWKQDEZtJgBjHic",
  "key27": "5eMtS3U8R47JdHk2Z7pgBafBRrfp5ShszoKHrbrjarCp28tZy8HfqWSpGLrvV8ACK9TpJc4mWABjsPvA6qmwNw41",
  "key28": "5YL7LsBHK1DWAaChXSsruK67jWWRj7ymF76wNyUaUJQxM4h9K3HRBJ327pf55kzyaz5HhJdDNMPo7CKJQAZw4prs",
  "key29": "3rKt185fiL4Cf8UnHB3Rr3PJ3NXniDxWr4Uw8XYKshnMHdDzyr9nJZ9Fp2HxpjonY8gMu4Hv1p42Jc8fE7bY1jrc",
  "key30": "5AiEkwfLY5Y14teuKVU8mdpM39zuD3s9WKY6QCAvFgwYouxv7RejLYbyTFhrJES6BGuccdpMfCpD14D92Hq4qVC8",
  "key31": "2Jr4YXYEQF6FUpojmBoE75zEbFB57xCo7MGDv7jTxuc2c2CLqV3EXgYi1GUynBWQCszSpFCG2GAjP5HLxPZYfZqB",
  "key32": "3BroLYFApBZ7g8wxwsWykr8NA8hBmZCXfTpdTWYVgMAXNgX4r7ginzULM3W2qFUtWU7mNB6QcGS3BmiLHSeAiyc8",
  "key33": "5EH82NFUzMd11u8LVD6LCDyvNVejmtNgthHnvfuFSrRbpyn3ow9SnfktJGaaQUTU6DsosgxUquJus8Rx2JnCiQZb"
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
