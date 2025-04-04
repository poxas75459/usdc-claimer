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
    "578Bd6X4G1PgypaKFUH7NoBPf8jP8hVHG7CAXK9d4LLQxLPszMhyF5xPgCExfM9UzRfckQzzwi9xSFENWQNQvXyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9srJvpS8HaF6RKv8YYSLjS1kUKaE4w4QzKkiZr5ghTM17WjPyCU9ef84RFLfoW7377BgqzFRkHQgzAG7ojR8ruy",
  "key1": "g8vwbjSoU9CAtn3W17bFM7xgerh83oZY5MjkRJDXKzKwYBj2UCrjfwvnzfyX8GL1u32ghe8b396XFqptjWqkXUe",
  "key2": "4J9TZx4SH3k3uB3jWTM6tbj3JeHUa9LAQex1jceCQov5CMJFzPKcnTeNM7A9ZXTTQ74onN7mRJ6MUq6pf2HUsjny",
  "key3": "21xYaqMt924S5qeqzReESeGZBymvKkWE2QnFdp9mMmwQAHvhQ2sHvitMMLiKtKqbQEHbFwVLEqNYXAqaRZiFQ78p",
  "key4": "4BB6qLm99u1CHQD7mqBV6aG25A1U1yAqgcR3nBDJadEQ8sGwQEpn6QnQacBPNW8iZzAVXXB2ojZquF7UzRq5GCzA",
  "key5": "5niHFpHHLf7ezRN9Xr5AUKD7wcPvpPD2XhsY7f8veJ5N2wmcSLkZ4Uums3Cni3pUKcW8Gomv9e652C9YtSazyeB",
  "key6": "4z5mTdgoaMhfRmwVRSciQZKb1fRLhEx3udyqaQ4UT5umVLMy9bgoinuCLSUf2M4PuYdEJnGEeF3JXgr4cLe9kBiZ",
  "key7": "3zrPQAYtUnW3ud5r6u5kKbWZC6Pc7CMFKXK4TAcdgBwXmRVMKarsaD5ZUqNi8FoDDazEP67egxackXpktSwpymU8",
  "key8": "4Nqnks9mozXVR654Kry9p55vE6LvA5swxdj8wrGJfkZtmcwDzCqArPqdEPEybn5x8dNPa4PG67nLGPGdazN5mSAA",
  "key9": "2mtK1dS2HPmAwzmuEPmV8ZdKgG9pNvD8BPYqCKmDgWQ3s4TEVwNzyozfwRgn2qrvscpCpFzCbNMe3dbN6EHhx4jY",
  "key10": "229U9WdqjzhuYbKyW4Hn6UkDoFquXUom58wQ9x3YNGy7ukrJQxwh4wf9CSp6zG3MWEaLPQFyR8n1gpxr5zb2u7S4",
  "key11": "5riXxwoMU7KbTFYQxW1ZkAfcKC45qDHUqJ2oa6ixxjtXm62vnHgFasD2gXybmswTNifTQaiCEdSmhd2piDGnmoSZ",
  "key12": "57ENHvWccks6gC2ub9S8n6L2eaVReqpa2ibXaazzRhxUGUX5e58TAz4h5Nxissh79eaKunBFYkknD3YoqnpgvK9M",
  "key13": "2bffhJDApLvsMVpKgQqeVdb2MYEUxn1wqe8HXQADx9ghcACFCLkVRQRZq3JnafWHvh3xXA1NSVL4PwTh9GismK7a",
  "key14": "4yR9x41sTdJ93F86gR8z3mdFJ7eAff6urhYixqYwRwx9FTPKY3Q9Rd9UkYjQrS2nz7bQGZKptwHM1JTZY18qTjMR",
  "key15": "3kby61Rsa3aTNQkiwRE4qsWdaMGVhaELRQMV9wbTja89d5CSFSaxxaitMaaLM6NAQ3mJ9JWHi6WcC22gG3mrnTCQ",
  "key16": "4tY1YqipddVCaauq8SuLYGS91A7JENPHszArfTbbdmCVfnZEMtCoDybWj2UY7x57bG6kBRfqHdnyy1AiLpV7ioab",
  "key17": "4sdjGc2UmFkstYdPeFPkVPcVZHZ1X6KuuTKtmV3Rx6j9Rdf9VJZjndgEssmoAvvHNVYykoLq92wYyFVavnEBEVM2",
  "key18": "3jFEeoPniXgYzsFwB7iCproYXSF7evX9gxS28wAzAe8XAuMfWGP5YY1RJMuW5zZX5yDx3z7k9CLSRsYZCf2gRm6m",
  "key19": "2uCF968Gd4xhs37YAFWtPQ8vPNAQeduiz1a8M2Ryn24xuEZGUjcZiiVVpmxovS6USrk7RZmJkiRBkxL74LNR8bBk",
  "key20": "5UzLiMhgjPpt7Ny7x45pAKA7Lw84DUW3Eii32CUL8XTN5LXdqUfBbGhvTmNwHZkqQnbP6uPNKfwb3XV553nUaCzz",
  "key21": "5DiNqLQ1dU9CK32DCzhm2JFjit7MTS9RTatTzN9PSHzoCY2rRtG55bCCKZXuEQ6iymMqCjN13hCoEVr31V5MDYod",
  "key22": "4jHDyzy5jj4K3ZtA9HU1THfcKMbyhxncTP9gd5hNmpYsMzmeYxwgVD5JEgAy2hBS77yBmJ8V5kfPFWUkwN8E6Dy2",
  "key23": "4SVd99AXAgcQLv2gSRogsv8GDHtX6P8Kt67rhpzCyR4r5NXtdbSPxD5fHZy6JQ6niPyGGEfbXJ2oDYgUEDefjZ6b",
  "key24": "5eex5JdkfAipKhPG7VQHGxQeADeW8FoqGD1EuFai4AM8PHEjH4DZzuppgQU9ZxeBRCHXVUoDDamrjPbXn8BGgzVP",
  "key25": "3SLYh3kGVDXbuLFbMeaKNAx3JWqvACUE5VSiUSPuQ8Nr9aRyM9pjXFccrxGabNiNf7N5nwbvhUpUPhbhjg978NPY",
  "key26": "Qc5eT45LUMKe3cnEuoctQnjagqkqC8aa9YLHjTVE7TFz33eBTL9VtK4oTYhw8TA7YGvBLJsZuGHWcCBntmjUAN2",
  "key27": "55neCoEo9ZyNuVJ9VhCPa2FLW4g6teEDruYGyuWiiGQwEJbGQekBT5GjahGbmVX1JpAReo7E9jWEXFNXHLN7Lane",
  "key28": "33q7fReayxfSjtrKXgwcbr4zVgiDCLh77Do1qbtgKQa9CSQuZ6hzweBx7jKgeuTkjQr6TXtcGyqN3CM38n9sMsEk",
  "key29": "sSFrXpw4yj6Hqi6CPKwGbZiHdvmYDAx2D4E6bULcBks1dNsVTsbfiwkK1RmFTCG6Bn5yPpcARykJRx1UC35yzLc",
  "key30": "2nZxNWhBxngASbYAxabDBkj2SJ4WAAghhQ8Coo7XsgEGGmWQe3jQLnY2N83LjCsXS1zYGVbc23znq9HVCodjTqeQ",
  "key31": "nRSwJyVGKp7Mf3CmfHMEkNpoo3NdLV2z3WMQJLfKiYzApUh2UT71TMmdfSXFowPjRudu886u5FqC9hAQ6WfhhDU",
  "key32": "bzuzjbYitqGk3uWDVvsi65eJnHqUJV2WhHsgQCVg5hceSD8BBvKnCnD8dMbXYjMWwjN4CSPn8Dzn91cALWy2DbC",
  "key33": "3TQrDQu2qcEbRCWhrJmSxDouSPaqqS8cmQof9XxgLBcS4ic6ts6UtacyrS3uj4utfdafdwRYujPpVNWxbjkrKDYC",
  "key34": "2nmAhMtUiafW8hZUqharrfmdyxn61xNCZBX4s1wqcKX9VATeY5niRDNCGuDjdM94WHfqZzSpNRaddnsgRKpYyR1K",
  "key35": "3R1iAKx7MxwYmP4w9RVBY1nSdNWmaA21FfbCiuf2wjcGzEHscHNJad86E9Z3ULLY4EyMmMa95BUWyV5Cj4913UF",
  "key36": "5NoJx9QY59UNHKzzrjvZNGnUcFJsLUvqC1v8fcGVcpcLPEr2xn9CpQztUZBZbYkn1eqYiNuf9ir6JH1m1uVYDvh8",
  "key37": "mAjYsBYZgSSPcyfaqkycntpUipRRPrxqiJZz2mTFjPPyHkpJeS394Eq1n6JJqzuBcChDbcrtB4oRURX6kiDNYUe",
  "key38": "RMqnaLVjjv3J1D9XXno3XZs5jt9voK6c3hqpPNmzdFvej5bxoRJuoLNGwoMna3i7jVptqLQZrMojnyotegoWAJi",
  "key39": "36HoEqfzKnfNE1gMiZZkmCAxXqz5FKWSZcff7nQ5uqceJg6PWmAdbArZMvJ3c19iqxLHLxx3yJSaQijm4aWs3Kfn",
  "key40": "3Gm9U9gBRPT1EhBsgGWnsauA5XnHYPaFe1ogbRPuTxLBNnXo3YDfy4wucZnZCkgtnMsqjnhmY4ok72nzgjEoUCaf",
  "key41": "4wncWZbbe85CkdSFa3xRNjaCfg5f81ov8Z7jajJXSPzikhTxxu6A6Yn1pijgzduQuLYA6pabKe97V9QDdrSVKeEa",
  "key42": "5TH1e4zv9GJUE4EE3mMGyQGa3TX5DV9cK6nEwfuZGxNR1Ggb3146AFCnDRyQp5omuifsj83f1DNPCsdosKDnqE4P",
  "key43": "3CNzmqPtQZ6ttksimuRQL4ftepyDg16XEVvRtcMqZqbEGhurWi8HKjmmJaBYrBaEk7yV2tETGeNNVbXXigbdk1Pi"
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
