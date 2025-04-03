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
    "5Bd5wNmEuirVSM6YvrDYeP873zNKpDe59GiLMhessb7VqAh8u5Uf4f7jhfMuiwLhyvJPRXAZELKy4MefzbvKMqqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "218cRVX8xAgTZwHLGwx5nL9TmWc3X1advQqSsUyzuqB21tCR2uJHVsuKughzDLc6hjiTswoJDP8gqMUSZquF6M6N",
  "key1": "Su4K2ocaHwkPygJw126iZ48ZzJMDbHu7Dj3rKpCGJgNCLQ6u3f4EkFLH94uUGZXorjy5dNhC7y11Rk3Cjp2A15h",
  "key2": "5cMuD96NZ1KcqDVCJTzC9AkL8DRqNKKopH7YGCX2dM3EodKUXg7NFMgtHd7cnjjtv2YyrbsDhE7WMiwMkUQJsjjF",
  "key3": "35UhmM8wQi3ngKsCnEzB3VEq1Meydu3hDw6qSqd2gKKkzF4K7jJNsg2W6v6w8zbM97QBi8KqaLCwiWG5HSzMbqCX",
  "key4": "5XnN8BA7PHaWJqmWKckP1wWqFWa6yyq1TfunvhBCZBcTH4VL8LittXisVv1wFHuDWgMqqGkmgNamPrEtq2StV759",
  "key5": "2sryKecPoQLg5UnLS4ZaE5e9mDzFG8k96ybctx6aPw9MHTE5Q6NaQ6rYWxYX8SoV2xzzxpXvgDRpueuuSN1GEw7B",
  "key6": "5GBPeguyBSC8AhxRELnnKodq7gVkgspch2uKeLwUWFM2YWRnBxi2g7xyp753TCoUhwPvt7pEBeYyX8XYAG2piaXD",
  "key7": "RbdxL3apHJBZPJE8qKC7Yncnp3YJNrTi1FVbTLimGQ3vKJHYFaCsgBNPiTQf1PLFxfjuxxUow7oSgGSSJ4JKsdK",
  "key8": "jLhjuWsSeyjJ8WM5E8HFiXYZusk2ZgBTTafu9bPqKqtBNyibT1m42pB11Ji2mtNeztWpR4Uc9kKHXtfUbAZD4oe",
  "key9": "kMj3oNvGiCnat79oSGgJNSre3puTqkWVA2hqDAbRwbmeW3HgeikaZm9uWUvL82fht4HJUZki5tTCnwp7k8dVUFz",
  "key10": "yDMWATTneiZWAyHQDZSHuuhmQ6h2AxV2DFzJCaAwAqcXpRvGfCAFEq6oDPz44DhHwoZi8n7qvuBXt3nVC147o5G",
  "key11": "3Q6ckyYg9ZNMDXTCzMaD9MubADFcy9KptCJRFFn7PceBtcAnZoa23bgT3tQ4FGmX1GnR5HvBagfi6dcbgui539Bz",
  "key12": "3bramUri2WG41MZ9GBDEpNR54Z3ByAy2so3FHVVRUCKFkzCzSLvpYrnLrhSiujrSbA5RxSwHwCbSdrCMhSnkEfwi",
  "key13": "ZHVQ1zYwM3xoNNNrkmM8p1edZGLGk9gNdX1zoay7rgD6sHc8yMnKTaN59MedEgRuN3B5ULbUzcp3thbamYpuggp",
  "key14": "hD3oxGWEb2hMAau92pcGoDBp1LfpaBn6V8tycK7x5QgERJd6yxebgdsYd72wcdCaB5zdq8avpftPLJmfNpQqDwj",
  "key15": "56ZcfXzUodoj8nS9P3EbVLac2twocApYqhct8itc4zpsHDw181UWTxS5VLT1mL4JDPWcmVT6GJBhpbJW8Eg9Pz1h",
  "key16": "3sAt6V1konLMyQ8NRtiftHXWGJHu2fmTCur7VknFo1oVCBxU4nD7z4cMTsL78cfx5RC5jRXe8EzYLTVhdi8e3BBy",
  "key17": "X8TAY4nk4Xu25qd8RKzRgcbsmW5rRLXLdBG7KYMaHdaq7Shd2TjLt7VsBPy7zLVVqecVFiMvLCGi2STgwwxF2DK",
  "key18": "3HZ13JFpa6S6H8nZmQf5HrZ9Uh6SYQFtgR8taQxeZUrHZiqWBETNwDHA9GkerwnY4gi5PQYC82ozk2yG669o5FT8",
  "key19": "4oMqbSG9jzKLGMVhfskWoJzqYTeaL4hfGXVYhRy7VYHf1u27Tix8NRsYAwsBT9sVY7wztc5uG1pYGLT61ZFfGT2L",
  "key20": "3ZXF6KTv89YYmsuNJVuN8N7n7uC3HUVhxP37UMemj29Z5NPd7nQRjm8TRiLJm3EgWSPCuyNfuWxe2FXELYa5yNPz",
  "key21": "N2XcB7ykseC1F8d3HPai9Pd5KuuVE6Y5LwRwvqqdHVsihd96JQDoYk3iH7dBUrNNMAW5p7Ce3gH4mpc2syY9qAg",
  "key22": "2wHFMWgv9QPsTTF9wYPUjjoy6ZfA8y3ZgrpHRsnuy1JM6f6osChw9DS6tC5B6BQV4UZCQ6RVX9bjLTPHYj3rQ87r",
  "key23": "43d2GoWbKpjq59WNaKVw45qW3Jv7zpBFbMxsmjPPKSv7eomx2Ckf1onCh7rVnou8dTQzVzqx9JG5fpfuF1wPTdbM",
  "key24": "24nFPpJzDA4ETwhwM1CnvnyFUtiDAUPseyFFwkAgPcErvLDbDnnxse6jz6q5LxioKG9PFz2GTgUKvxyaRD2USM36",
  "key25": "5mof6fQtdTKupHuZbFz4qpfVEVHPG5qJ5fpeVJkmUZXMuAcDVjwpmsLEGQJ4TEaVY1jyDyUriigCujvhgG3eZKyn",
  "key26": "3sbEdRJxRHeEf34ZbURnJ7QbssZCPqFBqAinMfrNRt15YmZUW8T4es6tfe1JREhvGuvEGxrYmJvSnKVncU97CTQL",
  "key27": "5xL1zTW1PMR3op2vrvfTx9cubgnnp7amY5acLPswrDtCp46agQ5YkEHRMaY7qhAE4odZgqpgq4v2nPAx7u7pCmz7",
  "key28": "2iPUAWEp3uLR31FVpY6cDepx4DzkEp6rTpHpdcPDKbygsn2ts2fUsjw7feX3TuN3NPFTpThYz2PpgDrR2g1mtEGa",
  "key29": "2BF3XGyjgxhCQSegED1qKfeiDzbSEk8VoadHNoxoRY9LXVnCxJ4ybAeMKKSFfqbUMjckJoNsNqKKpVmroaZFa1Qe",
  "key30": "5LycCKy6H2NkqiiSnqut2aruUqN5ThWC6bFbj7nTZBLa8ucLdtPNM1XqffWmtnKu9uLYC4AEH4JEgydncKsnx5VR",
  "key31": "5DywWf7sKoy1WKVh3ncqNNoKfDxE8xPNgiHAv3GwzZ7ihNmqNE3qUAJar8Nftf4qpHsjw8MvUor61dFbaaWgzVtu",
  "key32": "3sXNy4sAKjjr2p9TEUu7JqnrxjP4bxWiQFJewSSabjaLgF9B5eMBTiNDZSYVrA8XtP63qHNyvYb1iysyUqSuSXQm",
  "key33": "4Dk4448k1HP8eRBvK1Jv4LtK9tqNHRw6wbd3havzLHnTxnwm8ChEFH9dfk3rmkgdHemiP2nfAZdem4FsBcZ6bAKw",
  "key34": "4YT25mGwKt7VCD9xMFGdpeLWtqu2fEBvtmc7s2iBvQ8MVJ23JxdmNwHcVr3mkixmkKQyzngpep8AwTsgqyrY71FA"
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
