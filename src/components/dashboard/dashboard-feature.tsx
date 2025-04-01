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
    "5eeByaJrPfpDZrLVMzbj3zEQ3viigXwNgTd6Pg5ZCNgE7H883b8YkkUd1F176G7hYPM7uptmGPp9tZ28Hmwnb9jV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28PLEuKcRHFHTgAc4DwrEwFXy7bix6rg4HYDaD5TvdfQSUP7nwvKJq6RKsRTm6uzyF4St8eyrqw16JdQLQLN6jRz",
  "key1": "H6Tn94GbJpGFPpkRkyjA3qV4spP65wJw7xuig8N9e2gEWsxnQ97PHKdKnH1tRysgeUghDZFBcEXy9Wqe3dvs3CN",
  "key2": "3PVhmjMFqpVLj5rm8qu4Uwa7FKGHgKyHKCWtezXennfStW6YLgUH6ra7no52bBR2YwRjsED81vin3evTybamHguv",
  "key3": "rsoRUEf3YDPAuyKdgwYGCtVKUgrrNTP6TevSbGnQdchwvpzaqEF8MXu5qJUhikWq1hqS3FmD2KZAECS8a1RTzZN",
  "key4": "QF6n1cUSaU4FkbJsdbAQRpoAkg9wVg7kFqDj8aHsu2xML9qai6DUq4KWENoiU7durQnCcUKwTKxzCcREYyX1XTF",
  "key5": "coJLMhGx1xc8vNY5YjjDos4CWeE8cXFWZ1M18Y6jNWzQoZqkjGwxqWkBQ9FZeZJAFQAa7VA2MWnxc8EK239FoUv",
  "key6": "2Ua27JnWwsZZ8LKMqe9mf5H8TRke1dwmDAcCCYAaxfrZpnRU4JPYpZWTHqftXtT4Lt7fmaE34ocefRCcWtQmpm5r",
  "key7": "3yWQr5fsBJ1JPSGbjvBGd8Q5cDLiQUjpMsFxqQYfuUHvvj6y6H5MS5a6SF6iaQwpWg3Ds22xxjGWkxoxkBbetnxj",
  "key8": "gNdWAXW7FTzbCPnTgxVF36sb4dbXGzYBMeX3SKg8tmbgPgCN9BT35r4izZX3tYLxEjUWFpYowLwoT2doLJSeogr",
  "key9": "2AfitgnUM6EWcC5ogunW57iVf7QNxCPVDqwrHfPXo8mia5Q8GrpgWUUTXJRbzfqspShgV8MJXXWgtrnQ66NB2rd1",
  "key10": "5MZyxXnzSQFuV4dnHvhwqPTrcatoyyFnRgcNV7XUJcE1w4Az2StUqWPLkhkbW4pNR2LRHAxRpLJN4HPABwozWBLq",
  "key11": "56C7881uJHeMk43VoAoTsbfk1bvurR8DyKbHoyuM8cP9JnK3GhvsUFuWTFBvi1P2oh6MxiHESBZSXqqC9hsMwf3a",
  "key12": "61qPNwCNwRVHpv9o2P1egSY5EE2S6Jog188zgD9hhA3AVf23jssrZzMShkaQRdTKZyQTH5sKTXNJQhJTDPd8FzvW",
  "key13": "3JeqCWGDowNB4uwWBVgKzZgrnmd1QPfsAb6ou24mB3Ewj2Qx15ySbqTZsgNCLKzg3VypFovtZ1CTLgLqreo67wWp",
  "key14": "4oK7AJtyK247X657tSjmTVSkJH7tLJgHmWSyMQUv1HfbC4UHfHynL9t42tjq6U4yXTPgUjXZ8iKBeVoK4cU9cAjq",
  "key15": "62TFQnBFDqw3t4KBkiWmefSZ5JdRFauLKSx15mvyao6mP7ZoY1f5xJHr3PKzhkiKCGjuXqbvCPnEphB3UwQi9f4V",
  "key16": "BnvcQC59T5dqwQMsFEQf8i6MVGGkq94bLmoT2WioG7n5m85RP8tuYkpoaXAyrrjxZ2tNKnTU47RTKQr1JdSJv1Y",
  "key17": "uxBNeAGQf2mcNaGVtjRg1dh5CWqiGnondpqDDnYv6M8zi4NaeuD3yBoFRGkKZduZkzGFNHisYriDmQGDAPmPyEy",
  "key18": "Zssa63u5EqZzrj1EwLcJEjvKJrW3TATp8k5eRLHvQGdRkmE6boKwBPXXRLSAFcB4Bq5r5MBiRU8RFm9jtNCAcqP",
  "key19": "3wFb8cDmDmPVP8jaFhtJYhErcpTkcriZNTgyyAUq3hx7DqQCQLNFB57iszzbSRSmbJi5Ry1ZqKv5LQJ9SbZTic3s",
  "key20": "65PdQbCQGCGD3rFivyky6iDrgbczARMH6jd2GzittyD783U6NdkLoFaEf2h5uvDBioEzaS2sJXiHUA9T548PToVB",
  "key21": "5mmHFvQYRcUWPRvjF4fucXy1uqucev8YaE3LxuSbPSCb7u9geEdJ1b2ecwgGjiiM4VokQPs5XgpYMZ7Jib9tusG9",
  "key22": "Ziiean6ERtML13DMpKoBtrrgyjSs8kE2uwZ3AUp1v5XGQEHAVWHtdGcUTVLTDGcLjgyYjfMY2FdHFjCJcwxVnYZ",
  "key23": "4HsEy6EZ5vyqx7bcuFWGG7XPfqWbUJrXWPW66RiaKhvnegKKYWa6Y79DkF8zmRCFwNgfwaz1sgkpRjirBxhYSiHf",
  "key24": "418pPxZACrg2rAYEeiDnpn463Zod5hpipMmLa2zsZuUPHjwYQKbX3N3jkbhWC9GjsoQ2FPzgmbCJTxB7qMzHNoPo",
  "key25": "3bvutzjmjKktD9tvBQzELF5T9hiGYUZahsSNFFWQgLJdbzRKq3VazCxvPYZDs4ZyEZ9WvFEaj6pP59zj5dEoN7wR",
  "key26": "3cm3xGhNRJjUW4hKN1cPchoLgWLWm6nzNXKfKrjsPMsNktn23AwknLu2RR8kFcJ9rxo7DXbvTvyyimRP7nxCPnMo",
  "key27": "4u2Xxp9goMntAFNfX35WFSPzeyh5g7jygJR2fCU2SFFfWGQK1vNy2fKqAF8W7WXN8TiqgCDTwKXimZ6njHco7u2B",
  "key28": "4qfXQWj1rVWmbYdM9cg41RkuWsHGJkUuHXkZdz7MqYX4kH1BzS6ZS4GvfJA7s6VoLzaALPa9VZxeZgccPyoTBZx7",
  "key29": "5dk39BuiXbjsWymz3iYVXPb1m432F6AYkZtf9Rt4z1adr1EvETkkc7vZLfs1htrx4sFpSJdK1ufYo54or47XyT2a",
  "key30": "exCKs5PLK5LhSFYWKqGe6jngK3rFBJZvaeeftTnho3zNZVGy7yT6HGBMTXWp66Zd5J49W4XFh8GWDc16nmkVjma",
  "key31": "5TXesGKEfMyJN6TEDm4i1trku4cPFTd8rQatqn3Tu2hAtowRZUyNyrVY3GjBWTW8RkptCVdpoeX7NiZEV1pSe7S8",
  "key32": "VZYmFdSdtZX4YmmXb6vs675CnUjirCFD5HoF8S3ryoujffo4akZ88qFtF2Z6ej4S8nDJ6atGkC4TJHwCxpoECJG",
  "key33": "4JGKVRKCyU85GtpDFWMW62FnFnJD617uvZAA7mSTXGair56poaH3xNqUSqRq4KSPLdWkAYMXcxLqAVvpntWXFSNc",
  "key34": "4yUgHnrShevSKA9fWGXavkodSGXjVoQkvmiMNdo3nFkPtfGJZNpRNByyQ8A67uAEfBEcU82fuRw5UpVCEH1x6ZHi",
  "key35": "4ruRnJoKz94cuM9rKPw7HYCd4uSgHraAvW9fhjqGn2nHFpQCLxGuo4GrEy2vz6jEZwc7X2xwtXqfFrmNCy7FhwDy",
  "key36": "VKXxLtJbz9fYPxz9GxCdrar7XihraN9Su9nk2WqNMGzBEgPn4nQqME1WxqtyXW7fxH7FjDzozMTG6wmjposDe8L",
  "key37": "3y287i79cUDtjeTuP5FUB2DwW1psWRHpyti6Xm5P93SeF97zyB74eK5DETcR2diQhoZpoVCgCrdZGqubJdBDQASc",
  "key38": "Tdc4v1pL8mjJFaCDyMgvzAwQCBWnQs6npFoBktVBVjHDh9ZvntSWkhqStiKX1azBcz8BL92exTEjcRGtXwU1Fk8",
  "key39": "6483gYqFmNhvjSnv6jBLxpWDAzoE5cL2ZrKAaqVuTEzGLAghiYQ91Q44FGBmkWeetJxHzjXDY6pipuKDEtbuRfiJ",
  "key40": "41YqLUHuwzy41Nv6eAUqUmsiA2eQcXJs8xntZS45VBMzd1iHVCmFppnrKV8L8Sdj4PMNvSxf7xrB2jTQE31aJNeS"
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
