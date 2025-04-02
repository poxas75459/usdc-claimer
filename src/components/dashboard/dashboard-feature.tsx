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
    "QyiEiWb1dnNUZ2zQwd14rD5Vgasn9wcnB7vZWDLEMePQapwi2F9hQa323CE53Kjpeov7NLuQzSHn3Zhr66udKwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45tqi2gr6LD9mABxc1fscCSxA3AgqxsVtLmhPZXjKEHD7fGu6fezZMCDT6hfbRAKtevxqfzricgGrr7Cfyw5p2Bu",
  "key1": "QukNKV92DCdFzmq6EEFXrgH85U73WaQSKU9Q2CZXNjd1eYTnVDuRXoczVH3dwFTcrpMBmy2PGcGfGhnEdKDNfBN",
  "key2": "2TK6jUTgMDnkDhvK3anSBafzZzpwcaEG2wTaMeLMyKcza2x1eLkbwbyTYgLtdoWxVRVRLeb1fGhJ3SjHgoayEt52",
  "key3": "673WB9TgehTjkhbgLBe3ubos1qC5Laf3vCwNQVDFefQH79VjRK8L89NYvCNCfNVBAauYPVyYKhPAhc2zdZ1ieMx2",
  "key4": "5dcGFvNKYzfdwGvLsJ6eeUqfbCf4vpd5fy5K7xRNGFX5qGKYkjmNchmFANHPZaSj7VPyo46L4rQStBUtrXBfbzPF",
  "key5": "5mmMmmcAkwXiUgES4hrKzjbKiAsFtxH6698ZGWvRoPfffEbgN5DPbjRUgqTFDXRozrqCDhSd7WTWh63M3Vbp1wEG",
  "key6": "5NiTHXVbsT3trPtUNW6i2Jg65khrNcGtcNiQG29NN2zSKki8NbzryysmaJ7NyB6FyMERKq94sH1uTc3C9JfXd14t",
  "key7": "22rabNQTYiwkmrryQZR4BJoKZc2XH3oK3n7B5FadudWg3qchXRKBec39sLa1TQhctRQDGkD9iu5KkDCtrcTAKQea",
  "key8": "2xCdBMavKGJG91bPnmhAEi1c75wbZME9PSmyYonh7mHH2S935nov7AyuJNjxCkP6nsjPkqzfEgEbRN1cqJ5EZLBy",
  "key9": "5RxxLffahPW8yyXjHgsPW18Zpc2sitYmzx8sU6X6ArMrTRTBaQRPCH5q4MD2JJws4RHhahPxhPJ4tEB2S7nB8REY",
  "key10": "J2zA3DoPEb9jVLHmApfGkZNbkYaP5tkq5Wfa5yzmWbHCBCrAbC5i4vefJ7sgSiXfH4mu8W5QB43M8B21cVtN9Lr",
  "key11": "mdEAGisZwB5kz45Vy8iQYdScfha58JPR7XRENmsbpaPJw6boJDzwNAms37b3Lu1PSra2VJDWbpzoXaMbrPR6jjc",
  "key12": "AUAkhvJbnYei7iypvhZhYVd6nmz5kUCC1XdwCH5RBz4txVCLphySeKmaVHHfnvbG9QU7zwECEm7q5wtz65bPTGi",
  "key13": "3nyTjTSYe3Zv5UTDWoSRz58EgPobm7KU7RXVJZDxSKbAKLQt35jQJkbFPUiA2cUhuQVoZzHJUVS8qaWCQh5nDjhG",
  "key14": "4PSaVjDLxdWu5rNK2rDiTgQiHnynZcurGvSdzxCVs1aBDJWjsCxQaZhwaofZEPGaphEqU1wvJhMf5c5sbtNdf2TD",
  "key15": "bZ7RXL2NRmcZJT8UanJWQ6mPoZAXKzVVJRsv7SqnwoKXv2dPPNFQGXRwX3jr5AxTVoQk3JRvcVH4nd4yGTLzFJ7",
  "key16": "5My51tNuJysxHvNT78mYpmg4LqyqVxzizjzRQY2fWkw6Ah7E2wjpz437Qb3dvt3fWxHxBzZ76i1VJFGnnj4tMSz7",
  "key17": "3fXsm1Ef6U9KJQXq2KxS7xq3X2FUEsy7cB2puwyMZQK4742qvEn3LEB4o84dZG4fHWYrBnXnezuq6hdQZujM6SJ8",
  "key18": "56YiHqWTzipiP2F1nTd3ju8n4J1PBzfLJPbQrnbvCH3quWYJ4xU1gWhQRS6sxDPszciC3nn8fGkCH5kQv4RWPPdv",
  "key19": "4K88npDRoPhPjgWxFHqdpVpNg8SKcnMPwdbw885hhyxEtoJcjamh76Cj3YzFCkVMQGquGHft5rZtKFpWdmhPy479",
  "key20": "354G5ESM8LdF2T3mLTVdYK3cin6FhNs23NQYfQ4Apah6QC9nWYjiFTVSjLrXoF9HXoqoUQLo9ovHhaFpRUEDFomE",
  "key21": "37Zg4T6HG2tHzDTGAUAqoNb5RSQ2dAao3sXEyTZQ3RbPrEtA5zdniNnaejUrVL2GVj8YoxK45eyWdCR7Diw32stH",
  "key22": "2298aXJsmRNq2avkhVNmPgYdU5RocFL6wbvvwscbScsiGVJMUoh6D9zVPQ3Vg3Ymt6RCWztWWmpVQk9twguK89NW",
  "key23": "5tJ21a8o5D7qLAEU8ZFNi19PZ2hSDCcv5vTwkneieNSEpTAA7qCqnvGFcHAj9ahNa1yn41Y98aZMAx6KYEQK5zp1",
  "key24": "2sJfXLu5mwPKs82Y3YV41EY1kmAzp47xxfh7wKjt1bJ67SykKL3du1sqVzWckePMTNEXx3V9xk6yGKpXhCrafnqy",
  "key25": "3T7hMSMbx1k5J7kdHXBp73t3CnjFJihgrFQC5QdaqJptgomRgwBD8c8ydxYtGsgizkKWe5H8uJFFaxBPw2U6VGHt",
  "key26": "63Ayr93z6BQ6dnn4bVcpZszcMz15MESuxhacLqoF2uqC7Xpj9Dphk4CstHsApD2ujoNwe7oSLAwKZ6hnYnNKR7YJ",
  "key27": "4dX69JUFgyXckNZRosU29FuBGZmZqMEQ6imxSmFbeYDy7fU7inBzwoXWyk2qzp7ofCHjk5nWDEGBt93p4MWPK6TG",
  "key28": "4gEgHTmFVhkfy1BhDAYpBv1MXweGstwNSGMrLdXT8efS4MXYfwnjQYiFz6hLji9NHcyusoJY7UcqFJ82XPYKZS5J",
  "key29": "4uDygoSxnYetzni5wkgR3hA8CHv6vuXK9Eco5VkVK1GaNQeRPW5qo6ut7WcdS8VwsLuPj7ut9FEDgyfveP6i4jeQ",
  "key30": "5i8AhACsu4RSkZGn9JQHjbmqxTL471VL2fYJBhe6sgwDJ53BhCSFsCrk1ZSh9vavri5NUaxiR5rtZ4ZnyTz5R5E8",
  "key31": "2ZGPr2T7ESJphVrWQQMKSFYuqepMWCBZjZn4Y1WmJAQ4s7JCuh7YRdpdkKmbDTH4prQka8KvuAB7vaNjgYSu6XZH",
  "key32": "51T8UbDJbaSeAXduWNYsLbW7WTRnFJU9FYJDMtFejryhNssMPCPuFghWqcpLR3GCrxN5WEmgjcokC32ds2bNunqT",
  "key33": "47yixCmhJ5WqmDhmNtaTxR3fbwkcYUVJbiEsJ3wogA1x4xLn9cr4ducg7MbTWEEGLonNYqVGWCRNMggC8YF8Nxtg",
  "key34": "u4jWuRvhhw6HmeaEez8KkMLjwPRAsTdgUpBwkZLoRxc9yCyRYSg3yG3JgjJCWqusXgVUgAQ3Un42xzupJYPUdhP",
  "key35": "67L7bEpzziHW3iS5v3mwVgEnxRnqUcXbieWz9L3ECjpsbLR5UdVdqjqKNfXPoxnGSd5SSQAaNm7ZimePAs5pJgFf",
  "key36": "5VCHisb4fszMqi24R1CR64bKtPA4snkPs8aQpxd5hbH1jFxyueh3NgTcQ7UitfDP39M4CUxhL8ezkmw6DtH8X2Ny"
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
