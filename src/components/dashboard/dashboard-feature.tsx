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
    "3cneoi2rEh2yXVevmf35SoxqhrS5SaKvmwoksxAp9M4ABNj7e4Qmxs9XZHdABeoLfxNQkXgBKP7QxPwKBnRK4HnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owQWxA3Mh7VWiE8Gut8mQ5Hu87ZThi6CL1t6sYbUAoKdAzDk6gHeTKYyBzRAihC2PBXXwEsgCFw9wHZz2saQmr8",
  "key1": "4QrssQfKfcq7zts2KWqrJ3fm2fA2dkDQkSpQMZmv4yKYmbghfhygVg1j9xDSfffzUUMMHqX9ymDLHjG4bh2Dn1Sj",
  "key2": "54BxhL8oFCxuUyiPjYhbz9rCQgT9kwonzy17BGFZApQt6n5bvXZA1KBzfxa87oVDjxqbVtbRGiHDvMYEoWw5qhJr",
  "key3": "4opRv5N3xFvc1n6nahAMe9FXprp9ReTrMGGdTYfsFyJ5Qog1AAR15Uo15WgN4hYy7LdVhiLjpHt72FMMzWzaeMCg",
  "key4": "4efEvS57me3MFcj9WpfBkq48wHHAgkuSmTFmcsWjJSd87qUEjxts86TCKmwPWyhdFp7j3QV8cTJNNTL1Rtf2WS1H",
  "key5": "nJ54F7H18oBZC58Gnys7JsPHyCLpGu7HqxeL7UstaPCYt8s1qZj8vKzdN9sn65sMvv42ZCg4FmLypZYWqpaTVs2",
  "key6": "64qoXqobAEdx1ZJLuyhXw4TNnddHFhyX12BQer5KZuEdkHwVtByPzJrvirq3qpXDiJmEJrTvJnso85E4DXTx3uYK",
  "key7": "64VfuHTPX7CcCqK3aZe1xP2uJDz7vHBHN3RWHnaHi6qYXt4ZxXgwhMdbTFuqKny7nAvHPSeN2hDHmzSh4pD9o6RA",
  "key8": "33iEJCQgZ3ARspRYsc9ybvqwYYWF2sjoD5dzhEggigbgNsHv65i93Bxf9wNSMHncerpdP7tbH46hF5zyTRz8vMQR",
  "key9": "AtrTnHbJCVhEZSUoR7VEGtLKAVFhNJRsyZf8xEWWdMXWRHLEH8M3L8EzkMKxtPcustfX4nRqQ6DRv6Yy8cA71BZ",
  "key10": "hj3LD6npePT1ohug1GnEdPMAGwgwrDHPE33yBSyaPShe8EieJTA7iETkWtAABCLRTnJPiqAKby6iVhAko467imR",
  "key11": "2ov1UJo29xoHCqCBtimRp2qgoBCsYKBwFAtddwqceMaVahRAedz9ATXMEZZVDbFieKSaSEPXtHX35wyui7VRJLC7",
  "key12": "2dqdi9xHArDPboVmFnWoiVwCduhoY57E71SvBpSE4ryn7ZW7X2BWNhqh5K6oBntW8y1NSZ43X5S2nhSEYyz1V2wW",
  "key13": "2Ev3e1z28toXAR5CPm1pmyh85njD6jKeVVoBFFajaC18NRJKFByyiRtzCKHZDXuead4v9K2PVWmPwfWfCdjttHLL",
  "key14": "2K1vBYPdBwxvpRtmnbs77MYCFdB4JRDPRUVe7PobRnDJxNGBbQb3E72Fc4qivubYYHgNT7hvPxxspLx8KHheuuKU",
  "key15": "37hihsBbs6tjK5KdzuRPewxsNiiRBGsTzd1wqtehPSSFvENcpaB8XcQxu3WBuHBR1L2WrxoSkHgrMtRaP1r9ecHs",
  "key16": "5z8CZzW7BDLfJ2guLNteYZCG8Ap9dGr8KmhQ3zRC9rn24A4zuBBJXTQKzVy4ggNuppnDpCJPWaiodi7FC7tCSJfU",
  "key17": "43q7R1HyQ37Ms8iWrPgiQDoTCxuq8AFh4mVsgpCyh7USLbAQwnnG6vgd8CeCKAdZRMTcEESKQsuJX1K48DeFqyzC",
  "key18": "3K94fnEZxuLr5cxwBwTNQQKxed11GTFmqooMKVspRU2mH6mcEgCFr8vyyDpmZqbLFB33EUEuBwpAQThimFSMWU76",
  "key19": "5oezdbBJyuqyhyxiMGN8pK5YS1npQCnNemPcUX44VLY7paXPJ86i1NvqH8Sk8yHUtwqbnHw5H51Xy17uXPdtFsFc",
  "key20": "2qF3xG3cBD7HDdC4AnaE4NSEbs49DRqjC6QEvHxnmVkN8aaMpZKreAtEWzopwg86yukTgCNEaMqX7drkwhKzUsG7",
  "key21": "XQuevEiYoumcL8VcmrGpuPh65494LGF1ih28HbzKP19uUa6zZTvJwbYd8zrsHMkgjZzQ96vHmN3pmKBALLpuFgk",
  "key22": "3q4bU2jwv2ZfvjidT3K2bk9BfiyY7wxnANxqpCKgusBQ63m7soBttYAZuiJ75zdFTqttTkgCcEEoZABoKT91Ap2t",
  "key23": "3n5Z89YoamJsgFGdGTrWPD5H8Q4d2jcof7JoPN6RBCfuznKdtbuAAiusD1aKKRfbUP7KZj6jLHDh8QvvVG8DU8G7",
  "key24": "5BWxVX8i79qcQjngRH4qzc1cD5oJTswieUb2EPz15mEjahDqfH8ezT1aJekSPC2asbMUMk5xyxWNhAG18MTAPx4H",
  "key25": "3LArd8fEpRyGNM5gRtTw75MWxUeL1AXU4cjQErM5raC9XEz6bbAqvqJKv1eSfVqtZXEvDMstPQc9Nx5rbUJm1bvw",
  "key26": "3BAnNzE9fPQhEM6tMBPPTRNzFXXMscCA5vhY8TNsYeNQb5dc4h8SbQcq93sgWT9wz7RV3xu4oxKHB5v6fckxnCom",
  "key27": "M6SnGeSNYYGTxKcGq2JsYTP3Tn2wY4xfer2YkSZTn4vU1mJWbgboExR7RUE3TJa1Hbte595sfjjt9FWJa4A4VzA",
  "key28": "5Xg1WrvoVTzJrERea8ifFfbBn36GKhhXR9hsiebJUHRSoAhYSDzEx6rWC8KmJXPHiKtA54F1oc7DgzcQrLnYEfuc",
  "key29": "4xTij2P9utVaEUBPTyshrg88FH8t1GAeNpBdiwGgszCXWKdNL8rxDXUjH8iNwXNwcbUYmqzNaRCM7NbyxWKqawSL",
  "key30": "5F3zcmJZmn9sTDhCzirdSgvDWua5QSPyNnZncin84X7m1SfZFjPfJ4hWsRj4KpsAbJdxkE9iJGh2Ct5CAWxaTUrb"
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
