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
    "3cr42QHdafBKPGhufTBjSdExk2cov4C6MCeHRexrL5SHDVXVrQrjSaxbpVnY7s9E7YYJRXrdrCNGtHA693ySb3RR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PabPBYp3A4JhFbnSMkYs7V77Kqg7kREBfCpX1QMKzg1FBit7y3vyvg51df7pMcXj1MtfnpZDxVwAj2k1BzHQ2XQ",
  "key1": "53RFJvCgRVRVUVUBzxBqz3RJRK2RJVLoVmgkFPigRZzP1maFHuYacWzvtLKojHQj14rrMSWxFLDU76TGUsWPxbeD",
  "key2": "5o7eew9spoeoaZ4NbH5M9hXhmihA14gnyrmpYJunMRv2hGdhtUersNFNyGtDg4D1891CYprHhQHajTJefKxAqt6N",
  "key3": "3G8tdTVBiYFdSFwaKd5unuDcSZx3B4r6z9zyJaj8QGwyDnPEJLfjcjLPhARTs1EBZ1DbmFnYAPvFG6bCuPSRvDnL",
  "key4": "63Co5sKQSDTobS53uF7iYprCdSFx64YN8U97kb7ExNq13edgG2pqNWThzp9ZyzeBjo7ZTA8jwejjFWdj3N8vQHZa",
  "key5": "4FPkh969x9uEHSejvQsRXKe5YQ47UrWZW1SCUN5zDWLqMa4MzC43GMTdEXwHzeSQc7YgbRyAfCSJaoFpPBx9jRWB",
  "key6": "3C19HPbwQYf1mTu1t2qpHX38oGU5B5veQkM7RUqvxEK11DEDckCR5tYQD18QHcMPyWx1A2f54TMtGWaDZRp4vxD9",
  "key7": "5ej1iY9p4ZZUG7jiNNfEPh5jiMQwjHqmrHSXEj5hHUnCCSRo6UTezJcjdAqzHt6doca6XPNAGPzVQ692d3tDmE4x",
  "key8": "dRaEvkF8Z3aVMPfvFYfv5kdvABRDvQAjJdBnv3VCFPrKbU4aaoJB3rGh4RdM8udWxYN4hEEdCyWjycNvZZExGGj",
  "key9": "Bi76zdahuHCtbHmGupYGh9VcUWQ9Kz8woSRiYowsQrSNJYXrk1fipmApXpnAEuWCdaMsvkPqT7sCxLpwoEDEob8",
  "key10": "QXj4PghMXSNhzHm1meaAWdDqDhjpKeLPEV9jBkb1otVBqenLq94fiH6V2eubvyqz4NKT9SmX1WTNFpou1tJo9VB",
  "key11": "4fxMLsEVdN3eFhxe7uUh9v2XbJSKt3dv3zmPGyCNyEVbMAdpswbZo2TcJsep7SGnZ44gcLfFXxwBe4CRSZR5d8DA",
  "key12": "VaYA2WGarEAhcvWdtQoJKGiLYQPS14SiHsCEWCJfWQqJgr3tiVRGFdf5ASPA7TtU3Z2o3uNUCg2CS9PmZjjJSSH",
  "key13": "5kcVgEXxqrNXV7efitn53nF736MW7gGTTjPcRaXVywA9n3a5k3nmvEBmzjVazi8JcTBoanXrAHMS1nznYthmUoxt",
  "key14": "2iQSQQCfzRVcuEMRNGW13wPPRYZCtHVxsBsmTWuBXWBnBD5yMS6xTagyNCiScK8aYjtszn6ncmmuxzg9NGAzpXA6",
  "key15": "3goGhz8m6f39XKESN1PFBBWKNzGG2641H3gUGHUNoZtGUFx8DJwVQtF38prcdfG3N72cdPhQbJaNwqXLAxqqqMgz",
  "key16": "4FzSwey2CrYR8DUBazXupuJfAQXt9zBN9hTxhBk1nAYJGP3QBAkPXaqAN51wm6bt1uLVKxyLD7m45LXqg4724bx9",
  "key17": "4JHLdu9PWN88j8ZS7BT9kE3UEmXLa1k19Rn1q8ZBWyNfi1J24vTJRAJjTp7uUETBVRJ1EWg3KrjgmJiPJoKYk6eX",
  "key18": "37Tdt1qoKZ4dG6Gyz5f5hsdTwvNzoogN7UwEZFpmoJg2agXyUaTSJMRiutzjWJC4xvWdYTUN5LadeyyvNXz45PDi",
  "key19": "2prfntaG2rrrLW1FDyEhj2twwiGt4JHWYBgEYEFGnsTj4h587BgAQPuZbHiwzua1WGckKMFwHL8gH9DXsZTbCYBU",
  "key20": "25M3BPnezUJMDmHJXsMAGCHBEpkNZmqKjfBj6WyDjrxdMVqA95UpDZyM5NJdsDM5Egc2kSFa98n6Ty5BszFW6gYB",
  "key21": "5RHA7LBjQX5ggPFkvcxXdbt92mvsWYcPvVxGAF7uDGwDxGVP8v9WMzEXqZaqwUD13Awb5Djmge1CMpkjz4Paw5KD",
  "key22": "qDRFM7LUychdQRvhk8VQZAYQcM4wwJsNiC7t818y1xqsMAH8DQhLtbBr6SHcRY7rr8cWrW981442TkADZzuczT4",
  "key23": "3LY4czU84gMwe3XjZ3gp6aBrXuhF8pWrgSr5o5RFhhYNQozQ2k5cp2WSHAEowasZ8AUxweK4BSjpxqUmRB92FoXX",
  "key24": "4oKvwwHpPo6uF3GiyExScAbcDwZSrCRTAZAWyTGh2B8vA5HdgYsMDfDXjz7gJMjoKtQVLw2FwHd6JoPeezP61pvs",
  "key25": "4P5wVVN5KHFouGcG7dhMWDTimCT6LTNXfrLjR7ZNGmDBB32zsZAUBU1Qj2mzBwLDouS4ijY9vTCMTH3fgZUA1Wkk",
  "key26": "4PzBUJfVT3dJ8xWaPraMKbbASr5iuzgV8XNGJUgiyM4zHNWbg8nnjD7pRPYCQFnYBZg4cXHv7fzwoUvKMYSYBEya",
  "key27": "54wPHPhkkisNU1uHSHbU9tidF6PBH1eUFzfxcJNQQJcHjYxrokqVLWPyLPtKBQH72eGvi19waWxq2TH6bX63JnLd",
  "key28": "sxcenzFbat9Sfsfb61fooKQLz7q4RAcvcLryVWa2Y3wRCmFgt3wr9RuQMwXhbQLUwt4eYkSUaxzgCXWPdUZWamg",
  "key29": "5A7eCzHHnBMdvUiW6rh7jHem3cUZ2idC4JE31WfTfYGG2chHYcZbe3JwfptWEvsDeSNtR2DZSeqrTBYuZSkYBt56",
  "key30": "4PndaZcW3SKJznvLcD3CcQmDeJTKMiYH7mPLz9TfAeLFx1FSSLffvY9hpwgNF8EaTRjEBWmQ4WmcK2c95x7L2rmE",
  "key31": "4aEaDGxfeMVBp8g6r831BU4UQqdHQWCU9Qe3neabDtShdASF1tJdttCtWdsiQvifHQFP2RBMrR7Rgb61D8dmouvp"
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
