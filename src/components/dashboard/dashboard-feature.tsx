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
    "23HxDt4mf9W6aE2j7Q5rLYtpbNqnji9qAxsJBvV92y7gCNKoU6fMhyzwVx57kMrcZzTnj9SLWtUzprdzujN5fRDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yN4kXUjk51opBmTr2FNEG4RUc5wJpqh3jHwwpqrvf8QNhprj47cHZEprCR5h4m7VaXMwf3edTjbWCHo6mQm1NzA",
  "key1": "28PYP9YZh1LHvk5fuUrbMhQY1k6qrNWXfSG3PaLSTKBMyfsQhf5geurpu2x8cMCZnHScjaq9ziiQq1vW3HXNxrcU",
  "key2": "3WzbdYCo9TgRGF7ARGdunu9Av6VqfCRgVLzeMqK7JHLjs4NX8iwL8kHCe5XXMxQmUFUbeh8GFM5hgYLTvsaDha7N",
  "key3": "2PPyxzcJjKX2555V8Gj8eJhfBwvNrR2TJybt5ky9ysrLj4fxe1t1L7mwKjo7foRsUeBNmYqf3nz5e7yeB2xEJM2e",
  "key4": "JnEvRwzodUqXfK6iD2s7LySfUmzbcPhs1BWrCWSTdPhgFSTCwVc4poqpWjrwdCQAX2Ak7yqfo47J1Gfj3viH6z3",
  "key5": "234UBe2MqQ284pNnK763fukiErVEENvt5negwaSCctJ2odvP8dzsBWqMGdemLJzATXpQLCkJihzN3xLz6JsyEpAN",
  "key6": "2fbjyAdiJ7gktvfKvj1JkcL88pS35ZGhWEZBjbY345RjZ6EJGEpvTYUSGHgrnhfhpzwFbeeUAyEJKhrwF89Y6aBU",
  "key7": "4c3A28LkBWeTL3gZbZo3H8X9PL7VLEZv7LEPcFxV78fEjfEJgqMSgqGPVMsk38JULmBnGvy8saxN8oagaje4uKqm",
  "key8": "2BBvSNEX35GBPpPEpt6jkvLSuQ2grCyFNpRcisSgMEMAX9V9vYPzjge9Brvk8DXW6Yyh6TT1ChyUXSDqMxU86DXY",
  "key9": "5LD4FTocbeamDvPBVk62mhcdYsg3Ebthjwyrh9x3MERWeXBgwXyJXs3GaKq8JPPaxRNAqPnNnRCiFvM48WuCPg3s",
  "key10": "5kqUvtRKPd77HnFt8UC9hMeGBrZavaEx5VYcHTcLtq3biZ9xBrMG59DwiaeA3QQmxZCvqC7cd6fRZnNnJ2MjpjBC",
  "key11": "2JXjRkLDcNqH1W6ANF84mjv1e9XxsWcqwPJHvYMiq4AtkwQyb4vuWrR8fjpu7W65QP7SUbwmjDBZ335hwM9GDXJM",
  "key12": "3W3T9DMS7tCAUUatMNszqu4vAC2hbgqf2UqazDBY4FUP6TfwzPiEe66RthEAwc1o2r2KitjiA4ucugykpDRpbCZA",
  "key13": "5Ez2Hfc2noA8WUkaan13ZyVcdojs1N5Qwcp3ZXrUawUije7y65gyBWLN5W3uVDL9B2fRET65h9R1BANkLbBAz5hz",
  "key14": "2rJL2YbMv9AQprSTxMgMmjDHcumUHcRBv71hV9FTJbbCHAWesy8CyrwrCHkTyKFofaTpmWWTwtyGvsSNFYYkxVGH",
  "key15": "5sZspNxhFg69KJMmPVhnPN6jgdcxdVb6EDnru5J7rpiTxchnWkbH3AtBqjVroamRiNfdRCTs92qKThrv2spcJ4xa",
  "key16": "97pG1wZ2C65oRgTR4xj4SFbQUzi36kE6kMjt3zqSS5eRQPZs7orMT37vNodizxAV2X9U69RR9upCcW4sNKTKPus",
  "key17": "4dnzp4iHWYVZDm3sKcPg9eVCu21kKDRY2sT8KuugdY4WKoVhGdUzbTKBJNn8DYmWk7PQgGBuWu6iGzHDrJY5wF5d",
  "key18": "oHYWUVPa51ckidDebg7Nv1YmkiqVbCPcLLrNeg3pHhqbhgp8pbZMdYTSindSJjZxJtf6N7tkeNkrsUJEXT3gm4X",
  "key19": "xm1yZ4oK8JnuqY31F7txuwLSkwbF4zirtprXPP4ks6GJfZiEunaGPTZLXhDKM9jQKsgWjhHfwj84T7F8TAfpgBN",
  "key20": "2PWbh45e9xbVj5zvt97kopbLniwDt7hSStchZMNmXAZ9JSFRazDvzLkUNW23Vgs3zj1MDub2RX18Uvr7subhzfUL",
  "key21": "3NqbWYyqwQVTCnghbXdCMRcxcYCAEmCz5fNaTrUCiQQY8npR2qDcSHuA8HyTjZEHfvwdEH23nH8pKfLX5VNqqyy8",
  "key22": "3EsE8V2SED2arpNUCGLB7HSRRzKGF6c2HPFWMTTsonkQUwpHuxAhG2hcbwsFP4jvMSgiTY3N9TFNeQV8MeYXJmJu",
  "key23": "4m3U1c329r5XQvzMQUQshE3XacMEHYZnxeGdkcCmLFUDk2dBwPwz8R2A7CaWcXPQp1DKE9XMq52ETMuoZYNPDm5h",
  "key24": "25XrV8H3BVVEyacCwZ7vvB39FuBS31xTtyhbTX3DGY5okPDaXyB9GHr9aK4VHSsWp9j9Y5QJX6DD43muYLNphh4d",
  "key25": "5S76TvKgMairXEihz5XSPyjKYKnPpQpD7JURR6sjNWnpuHE7YVSRkdiPYnmoA5SwdBPmPgYLNhHkbvZGAzAJCvYm",
  "key26": "5JiTJJc4tG5343rkcVKXMcKWQX9sBU94QUewmSsMZc78VhFpH8iyoCdmAkAiqERa4hLt4CrEPRvfVQm84tLSMHBA",
  "key27": "5wMwvaepVRM8p7fsiFbFS7Cturrr3rmXiVc4ap7Af5vwwjenLZ4hFUCseffR7JYYV3JgszxisxQieJfU7U3i8CC9",
  "key28": "5CSGhwkvcZYq2Jm1ARJgmzyaaPXNkMetoMtFxTmhACSRbxjCnF8diNgwBquH5uxv54fwC2WmAML4ncH41z5QfHFM",
  "key29": "49sxQSdoYiBNR8nf7apb5ZAGYRySjRSgRnLjRZomzyQ9tfLMnvEVwSgyzucR6WV9zhGn4CsUHfakCzf5eZY4FQkg",
  "key30": "2EBgdcR6srTkDomyzKn852bXouePahsmYQ3WfP9fBmtNsRTFGsY9ePpPa7iqr6ahFkyF65Lhqhi3DhpjzYWKTohX",
  "key31": "2xD172yL5SSxhiYw9SRS6tM4AaWy75y6RYfxBux1LaAx7gsAwjuyodwKsMUQA9yXQruTDH7C8o4fMNdqz4tvoAw8",
  "key32": "e3sGDACDavP7gQ9ZB6ojGi9kgcfVit8vUrtJW7zvok4yWB82wq5V9FNapotAsaE6iSBF1b7bJB2PwsM9J9UCL6b",
  "key33": "35rfn2jTAR1VE4g757mn7THBY5iWs82jvpfnUfGqUVLRY8YTV5ct66cPWJoKdZMq6grRWHnSyCaAyih8hNe19idV",
  "key34": "vvhA7sfqaVo5Xv4RKjaeSgCpUWtTr4dRPMRKspKnWKTizSY1ENQrUMLckC4zorLYzLjZa9Ld7s6GBfHnFfENBu8",
  "key35": "3rxbde4U11VhC6qH8dT4wsXz2sJAiq6amJ5miVctEsumGfCNaE7Q6KTegHXDt9KhRUDAicjJ6vAX9xybRovh9C3g",
  "key36": "2L9GDi2HzJvRMvy9optAuxpDXScpEk6q5mA2trPYH4eJHjhsVJ2of9yLop8gFooGnQV3g4pZ2yPUqpmeTQxHbtHU"
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
