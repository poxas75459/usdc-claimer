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
    "8x1Dh7WLERdQ2gtYxzU2cHaGqpf83ZfriAtuULdDYUqK6TA8eSUVTkjmMVbAm7URTxFH5A9yAFwYg7Y6NsMTjFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZyzynvfGijGgMvbMkDWN5iDQznTqw9yFggEJcnzSvc4AZ1dn27Kgk29s2LwrZ84sMw3gRYnznh6vULkz7jN4ojn",
  "key1": "4hxNwCoFVaRJnN1H6ddj28FSTrqtxzVypYPunhZPNMczD5omYVjG43s2fCgTdwGuGrudTNtxiu9aVDtJu8CJ6RsY",
  "key2": "5bCLr8bSCY2cKWh6cdEBfm9YvFyiDUL3eZBbqAcEKhz9sPCScmuFbGJukXWbiw6uRuuQFan8XCZG8Zn8XBXNAkha",
  "key3": "AT1Gj5k6wXCZbe5KZSvVeNjBdjEgfJUWzRZNr2fzvPHf6Zk8GXABs1F8k7Qqf4mcyqeEbVqUNidYPYSkkXtoRE4",
  "key4": "4t6QYRe8PWWjUQe2g9zeoeNNRfHwGf186yw4TTnxTJFj4RMd57fQqrwFsnuJCWAF8QebvsL9CYvXtLHiZz5Hj74X",
  "key5": "xisQHR5hBk4qbnn2QkteJwkB1Dbrj759ydNX4g3XAtP5yqMYJgQMUVMNsWAVeLN1z6N1VjEFNktysqKiqL1yXAd",
  "key6": "54VW3pGKQboNTazKJBNrP6kgcAuaKo2Wq2Jf5qFgLw8c1gWpmjuve1M9exz8SwbFVTXMqyEuiu1y7VpbCy9raX1J",
  "key7": "4fB1FEP1fAhZHkpikBnTuU4kXyB1BdtpmyUmxRGmh55tSCUEPmPbtiKG2QakD2ow6vJmbxz5CgZ9RwZWkd23yJFF",
  "key8": "2KyMTQHCbf6fy8mK9C6TtTRsKRCFfh5C3WnCPWY4uzQyNvrpQAMC3XbcK2sDggoPLKjnyiURKWjycohT1D2iPHyW",
  "key9": "UhcwyYjSLfk1oUus4DiUoKxwEwSDkrsc5MdpcxomdrjV2tWK6haaD8irH2gSN185rxuMyySZJnVimtbBMy5PvXR",
  "key10": "5pwJSzKK9wMeTue7m84hxbCxfb2c8LHVZSsor8cJ6Aqu8FGhXtDyC7LvZ8rCab51wpjoFmubVEnMrheVVhcfcbij",
  "key11": "5MPRWb5YvnWFmE9t3w5ELUDgcSxQuA9WXG4jQFAZGYANFgEbqLnSe8wa7k29FaDWPyQGqv9A8ina6L55od6wAW5u",
  "key12": "3stRDdTr3kja5mhFpHcx6W3iLTmBrvKmP8T9kr27BmvaQDV5dSPZUR5KVdQiY7DUdNNhEoSxCXSP6FiieuD389pR",
  "key13": "5MNYJsoMe8eQXDY5KhK4fooQZs7GXr4CzHTKeKeFZBqHm1zmzBLAaXonn8fyXDLwrPGNUiefQ3DURAQDfbU2QBb6",
  "key14": "5ZoyodU2kVe6HTDrxRzPUAVCMjvnS73CoHZ7LZ6JxwHQcaYziaqCumi1bk8QuwzPgbej283rYzDLhG5PBCVAtR98",
  "key15": "4LRy9qDh1t23dApJjdQytXLGyJs2TyYZFMHN9xB3V4U8WuCe781KchYUatTLwxtiJngksoGUrGseZJ1aMuJN3mhE",
  "key16": "2gAUSx6JKz9Udi9QyC3yYFCtEvxCf7WpD8hhtdNETPxtmLyrE5kPXEugBTt6ACTEXGvY7N1fVoH9tx2tcC4aXxsC",
  "key17": "SUkTpGgUrHhL3Xrei3TJ9ceekwkqcrLy3ZvLBDX955tc6VoggyGVvCxjGtGHLLrR7JU7XQfpyuSY6UWyJsVVuUF",
  "key18": "2m7CiJWFrbFtTKgoP1ECEabdfZDEzPLbFJMryDiKz8MveAqN7QMDhrg95eLAwuCXbPXs1GfQCyUGyMnW7gCrvdc",
  "key19": "4jjNtLUv87L9P364WTpao1LGFm2oJmgQTFDMeFCP9zFNPbY85mcnbycRQGoWfr3yedBZwR2aLY8Xu4xqzEfd6v7S",
  "key20": "42ajsV5JFWm2kgTPFdYj3rPYvsV4AUamjcaFsNAP7DTvP8kicVubxynhEp4kAL8S4M31pCpb9Lh8W1DbV3qAdV2r",
  "key21": "4xmWpB3pGPPt3QT7HAkoLZ5ZgAV56iD6zazPwZQ7Z6Mkqouz82Tu8C7TWcRpaduvVkyNvwGqkFES8B2TvzM4WwBp",
  "key22": "2Kg5Evbq746H9kvbA82XSKCvwuz3zVBYYt4WjucAvrWqo2FgKQsSTMMRS7Y2s1Y5HBikZxy1c6nNpv4sEgM7XEof",
  "key23": "4kxLqu9Lt9jmGNEZE3NzNQWXDvQrRGrC7bgGjvXL5pPk6ANbT4YXqsNYeRkAgZPXdCoSy6n2w3LMwJnTj3uq6Pfa",
  "key24": "Ak6YEpGqVcPCnqwZKDPWSH4z79i1k8CUFqRcsBbSpnwLFrDHsamD5GbiqCkyAAvpVG25oMaKk1NYrvU6NQABf7E",
  "key25": "2xhYhmmP8HdzZSpVdU8rrPgm6NLPCqktSGk78r46AuVffV98RSxBPAgVEudPiwo6DEmuHnZJsE1WJJQAzyfrsW2k",
  "key26": "4epb8kbqjSxp9LME1iqwoTeuagzFy3RpHsWN3XqUTyMYjp4Zt6JeYkmoJ8GwgDqqnHBfxFUqhmBYhaxAiRXvhy3y",
  "key27": "2m7JA6YdWvUm1eTcTMjARsP8Gyc9AnmT1gcwefybxAzD3X6kXM4wN2y4Ujz7pz9fvSndxWPcnA5RaaNA1AGuvkAW",
  "key28": "dHdRicUtcj3WPgG1eng3CtqSgLbFc1VhCG3rjRsSF6dDdzPpd8qhHvC7BG8aTjpiY2tpqR7cN8V3N3cuXkrED5n",
  "key29": "3dcSgvXMQ23XfVuNGmPyrVmepDbRNLpQZEePARhGLHYnUXBvNHdBAjqmE9qk1GLeYKWmjJ2vTPCgK1WErCJmefoE",
  "key30": "4t9fV9426xKivXTm2eZN8cZbJR5jfxxAC69riJZRWpM6Qd6WCcRArefqifFNDLPdRtfDYpvPcM7A7utyjdL54aS4",
  "key31": "KorvH1PBRQszpXPonYGqev8qy4QzBQEPBx4azB9f3UVafGuPBRMbgUJveUZMngXNNKqCfFm3eut8jkMABmndxWQ",
  "key32": "2qePUxZnZWm2eNDkoprUU7uLYptB943oPz432g9J5P3YP7vXbbt3kF6SKyN85gFWGvXZ2Bi67bE4uyQuh7mU5vrc",
  "key33": "635EmQpoAwyMWjGHdd88AcRsuGeUFvVZkZqYNQvVFUFmGsEGPJTUZdz36sr8AfU7nb5d94RXeoQh6wsJMcNqfSj8",
  "key34": "3ufUHKcYMm3MWnP8nkZFZk4cB5sbayBWxLvn9Ffb725QP5mHxpoLE8s3miZQLDBRf6UjTg1Bu3URufW6FssNvzJz",
  "key35": "5DER6hfFkHd9ktryZrX1wzyf4Jv1BL3sdGcsFbD9BWWWKuX6PZSr3b3eWQw2uTzY8GtqKGXb8qVx4w5ECyHNsaUs",
  "key36": "yTznkddqN2FP2Rfg2Ztn5Xutrxg2NjZCGtAtj1mkhtpMjuaBGrpiVWxtGdpzsDXpFX3KNrUNwDXbU8pk8LWVRN7",
  "key37": "KmRxrsErFBchTmnDjCC3irpouEdtge72mAunnyMHT2QEjriVSeig9ZTfJ9hQzwu4d6P64AcUAkkfQg32DvcZhXN",
  "key38": "AZAVX214wd9dvajToukv5R7zWQCLRbqgnsudpZrxiu9JJRzqdjxqR4S7YyaYUTyQKEFWgLKxQevKdAX3zgJ63Qo",
  "key39": "4Ug3dJPVgA15gjJEFfBeVpEXc4Bw5jLHmj4KPthYPHR1m2XypgXBcQE9GvG5stDrbXJva89fZxYE3FUbsYafurd2"
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
