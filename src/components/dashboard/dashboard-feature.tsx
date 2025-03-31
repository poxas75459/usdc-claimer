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
    "2ie8t9v9WG3PihEUBNzEMAW9ZyeJRuGYPCrCTLWfUrXGprxRV5QLzm8BFXbeguBvgZ7ngpcZu9cxgLe8Tfxo3r4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dDrdSjnzsdDJDqRyTrcwiZDRnZpD6zgNbmRPbDu2VCkaaJpYUZY2AuvPvQ36j3uWh1yKdczJfeCNmFe9fqvdBCd",
  "key1": "59CX4w9uo5hyR7b8Quy1JpTheRRzqSAs6Q8JhASqJegRdxr2HeuFEFxc54D3dYy72aQN8AS2kXGLrCdzGZD2qqka",
  "key2": "46cq82hBCbiwXnvwiZPr5wDt6acpJ2ndfRreAoY6p1h1bq3achFJh5hVo6sfsWh2RyfYnCUTS9dWR8v3SRCT2bUP",
  "key3": "3yYdLFCvsNdr1CYzGrJ3F4kAWz77aJ8EAZyxiju3JNB7oW2eHbkz9LDbhRBnaEVnvstk96jLfDhUmYFG38vNZfsJ",
  "key4": "3qLNfDR83ZsJfUu1ysh4jzUt5FUMXPHzDokMk8yeR3o9Zs5FqaZNxbRE85QQ9yfnSgacGzq16Vn76goAkcSDjx7B",
  "key5": "7Aixod3CbcHR1BRb4ysnhJ5ms8y6wPmcZi18UMiChfG4xTRsnFxMRYDFDWAat3eSsvPNe4m2B1GqmL8Mm87fvZz",
  "key6": "4XdvUnxFk7EZdC9nmXrsuQGp9RfLNigKfTCYm2CymmrJMv33LGwgrNHj6DetvbZiBfw5DuZvhFEendpdfS7PHf73",
  "key7": "Rhkffy1UdC3j7VyubPXAp272GCifHJxSrRmaWEYBuZ9WX39XYWpvbMHf7m3ZKkEAsWNmv6zPKEwvR8LycTRC77N",
  "key8": "2TPvxy7jdzbtNaVcFUaWXP1hbufGGzvXj8GENUVAoPK2yFkfzzqWJ9hxQYVA6iMvWXRuSfmvsdja1DtzZdY7GMU2",
  "key9": "3YZhSYBdav3Dj7L6yKXyQb6qz67MoGbXof6sFmiaTs2JfiTJa5QoiYTDwS1Bh85jnFXyzVdxYDk4FnYQd5m2Mwra",
  "key10": "2PRHcepZT9mSu54AevPwzixjkGVZuHnYBx5xhtXqimCkDHD6YDjBpPcXGhSnJAEzbWpJ3ohLMtq372CRFPVHtry",
  "key11": "4es7Q6ZFrXZraWf3ZUe6oTe5z1ofeFpNso3F7Str8HJ4BfDr1gjAv6rKdGeB5qWRAMStGvjeHfBwccXGfRnCjQkt",
  "key12": "3Bdw9ZdzgzJKmN1Zbug9zwZg2y6V8kjasfvUv3jkT8AT6BG7XLg9fkUsDdLdgQ54Wk4DwnDbyXFt4WrTzK42ASk7",
  "key13": "4pPvJopoG69m3R67Ap7qMkXPrvodutqFwRcpZBujUKq81VwupujoZxHjEzhFPgSu77PYN3SQmrJghDLE1EkTRyue",
  "key14": "4UuZYUJE2pgxpt78gYit6qdmeaYLMW4LDGoLEj8a9WX3XxT77W39gbFvHM8BQuskE59rKxZtum1R681m9ok1jHQR",
  "key15": "3crnNFXhdukLgsSb2noYQyiekXkvKTZr1f6wZef6LKM8dNYv9Xw4SwFL4gZA9yrJTTt6EQ71KLDuDuhrc5iwKSW4",
  "key16": "3uA1fBR1rEQhfH13tEgjd1RfjMzCsXa1a2wxvgnVVsgkoVnAhaHCT8ct7Y6tvfv7x8pC3xyqy4bk1Hx65dnboHJ3",
  "key17": "32mEhnLv9yrhEsPuuQeNKh1muERQG49p9663uYSgFU1doCb4JFHjqEUqfmua2F9CPENbmwHhZvCBd5NAJMgpWkHn",
  "key18": "4z43mZ7d1cakvJYbpEdt36d9mA8ewRX13KohM9AAWd6HNwT6cdRnyaYrs6vaeNAqYJPgfy7UPz5mnPXg7X1LU9eB",
  "key19": "2uXeCZ9aWG8tcog7dR2vSWN8VMTzcDmiUaANeUFWajgRUrJ6d7oV5jPGMzF2YZicdsaWezBUoKb6NS8Z4v7akgym",
  "key20": "21x1bWVVg411fxHsY5E4vPuvePUEnzYv5R5HWKXP5ihr98EHQ83FYR6C68nYE1GCfNuNHE9uYUiSMyu3sJUe8Wv9",
  "key21": "58Z1RE8pKmfP3XVTf8KyJRBt3axw1B3KmBVFZeiHweXhFWLaQeAqFbxCkdDXYZmPqbDngobS3M7NAQPMFkpCYpXf",
  "key22": "5qbTT5ReLMxXDx8yZ5zUtiSnEmgFrbKa835wHDB34sT2a8JBQtVsDU4BVxLMru2wLro1iCvses68JRJKJZXqXiDD",
  "key23": "5uVCsJhngbtnhzuZxqtTQ12ZqFqDsmtyKhFPoyZVapamqqQvcXMMmYC8fTWzMvTEJSHE3o9YECcvXZYBE7EZe1Mj",
  "key24": "4f9m4zv1upvsjmDFMXVWTAtAVe95d3HiBK26FVBMmJuKB2QMSBsdzUZXNJhZiuwpiZ6YoG2gCn3QMc6AHgQmGDdU",
  "key25": "2iKh1JrPM9SnG97t6KY7qNSVSGb2Erp2g8oroJN1AeU8dVw3C53CpGBX1e8WaGKv21k8eZrJsFR7hmCKqaZDMXAJ",
  "key26": "25bfaWbSeXw7uprDj7xAKTqruvpgnQq9SPCJfr2WA3dWYNWhRoSMDK8hNsnEBabkXaLSNYBCVTAXsL1mLczQKZFA",
  "key27": "4WzC8kXtuAK2rekvtGehp8W8TJymkgCHE2PEDgiCwVPsJAopj1968J1EvuXG6brNWYx3KU1fZ72EtMP4sYG1Fx9v",
  "key28": "4u5MQwgW8BFAswsLpEAWz5q1RDfwf1Ex2haVTNUjs58fqmHzcHG2swUM8rPNTxTWB1pjdHLWJXxm2ukVYRc1MW4M",
  "key29": "2sFtoib87gfmTNVS9s14Z41MRzf3Sgm6Cp9Yu22oqYnKfKQV66uGnfGewgZeyej41sSotxFhsQ97ZCdZwRbjfFLN",
  "key30": "28Eeoq1ubSXN4jEjw9waHREeHAQTnCGQVNZwtoSWxDzGAGd9ecdcvxU2PyEHcEBVa4fKTDgzAD5M5jNVzmrgX7yr",
  "key31": "2nt6voUzQEM1spFZq7hQePSDo5JUshtgA38ZTU7i5vnX5iJBgmkRrGEGNCLJKn9AUbbm65zTZmsdMqk56SpMN6aH",
  "key32": "2WTpDWiyLKGgK7eGPRZGFJ5FrSsx3bvwJGwHUJNENisjHr6n3VibLobnkwkJGjjTYnxqLTfp7ky2n3DfzxsDanH8",
  "key33": "r7rFjoVWwiQsFqUsAPL299Tcj7ouRY5aDGGw912iUH1Z23kh5bgZpzH2N4Qog98Ps49U2YYiDRD4mFB2uz4CJRZ",
  "key34": "3tewM6ocdRPjvA6mb1V2nNxZ9eLKvpdbkyjiEUQxdYx4UkXub4CfjGLKAmdhGxcPBVDToF628uGoPrmH4Xv4FJVf",
  "key35": "8SBnVdHvvwo4o54Sd14pXLbKtuUqGRtbACab44t1zut4KmoxqHGXrRPxPLv2tG7ejj4TSmXHge68r69SZSBeBdF"
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
