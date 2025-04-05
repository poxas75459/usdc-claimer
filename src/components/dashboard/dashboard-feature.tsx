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
    "56rx3oW5kGx1tDaL5R8Cdq7x2EjcDRcwUzpLNZMvqhovJcEdEKGCDoMm8vVXLAtQnZ2iF63aA2RjqhUoWzBmZPLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PANYWR9aZsPFGxrN5gheD61vE2wkzEPkPUvXDQbAQw3wrsFt6PHAbW1nd6S6cRksBGmzmiBXhMdiV97XMcQavQh",
  "key1": "Mq3EgZ5dRaETbaodEtkVQUx6WtT4xiXrw3icaTaKfSqTEhdBZTyExdm7U3L1qQf6ZBG6ZmJUAQaCxvRrT2uSdoN",
  "key2": "uXU7KtdopSwCZ4aPiiJvZiDifuRu3tws2sRqqGN56pwaFakY2kt9A7NeRTmoSCVLM5YheaFU7gZMTQtkKsiTH75",
  "key3": "ge6TZmCmtqrUAYbwSAXuLjcimb8idmszTUTid7U9KuSERSS2cyVfpNX79hztJUQxJ36rUj8Jg69goCE7jmCLU2n",
  "key4": "2sxFmUJi4aY965VwVBFGfUuahWuCNiCGmcsq2Lx4Pp5t1S5UxZ94MBDVS41As2wnXF8SMV5RrnmkqB5Kqzirpsup",
  "key5": "4ntFBgphfBXu6etqaRbDHAXTVD6v5hTFEHtb16UkkA8aEJvY8yAHZG9Hmx2dHrnSTifsBdJPBpuzXQbanZgirNSL",
  "key6": "4WfQDH3hvPmPh67Ct6fBsrhpTxaDFj193tu4FqoHBYddrbnva3RV1jBMLgYP6UevgueE1AVEFqEez6TE7ZNW25Eu",
  "key7": "4dbCgd3kSmzbyAScCgKdtQbtaGfHWUraMrufPfkt551j8CiQWCuSYvi8MtWHsLPCd66dg4vsFuFstpa3ojbWMHSj",
  "key8": "31bY4EAUqyBDKxEjMjg6bY6gsg9C1AAV7qmZEVKnXjfTBEqqXAok7vmujnLwxh2qiJVmWd8nAi4EHgyXPinB8Vco",
  "key9": "2paWqyZD7vgmp1GpureWWdhSVm6hwbLZAyhNptaAeUSyn3sEYUCiPhrAkMnro22x57Efq8cCJhYP59Ntp4g3U3en",
  "key10": "3hftxsxzzATqGPx5MCqxfZUooyL9tKTqvWFMbsmXjDawDPok5S6Nx2buWqtjZrHeqWk3Ty3b8MaXJ9pScxYzuEF9",
  "key11": "5hg9jypQ1vqYQk2UUpMdspQawcqGDAn6ichzmSyVxNzgVun9xd28dhTtesTgxbnp2GQa5yQdkgvvHZrqi8YYTCof",
  "key12": "3dyZYjQnYTyuwVzMJUwQMvwGg8HH4LZAyve9jpY2fosR5BaE82tUQMYH89yqNN7L2ttMvWRk9jan3jvxG85Uzfkw",
  "key13": "327kJtnAHHYkouGy7CTSuuWnKePxa1apbCnGv8Wr65eBF7X9cyedjNfPXZzPq1hjYeqgcEoYcbe7ayVQUk69yx7p",
  "key14": "DwxF4nrf1woZ5KMvC6V8KGwgANVq8SwGa6Gp8ZNda4iSmbzT1hKXauThi7oBRKS3pQqQVeC4W8nMsxfNkrDbQom",
  "key15": "2wA8MiGY8YuB8pRJ5e47pn2tCNQ3PF7AooQspSQpYWWrxKP2umbC6bEv2d3nWwQa2LDkvqPhxffvnYvQPn36rnEU",
  "key16": "3GJSCQPbdGSDmVuQ2HdL5KwJgsoBjbB3vQN4ckXMmq8kTsqBmtMUW4YWjC2KdHoTGtP596Nu2UfaRe7v93QwHDoq",
  "key17": "2hqu3z7o9P8qLiSYNZtU5YrxbmJCiCyMSohTTgTfFCj8LpeUCX7c58jsPzKvSdvFmgnvjuPHfftAhqmoj8nyTFvX",
  "key18": "5GePxwh4meTMJFLQVjbuAx7wm7H1fQ6Kjw7gKwrxRAXhRMuwg6BxNqZcsDyJkan9e5dndNSEBUwLVcJHStUF7i7u",
  "key19": "5tbxniVjdvvCkg2XDALZrFK6LQcufduFJED3kbCyepW2NjvrXiKGousr8guSzCUVG9ntGw1HtvT63oDdjCiDFqa5",
  "key20": "5nNzHBUhdY7BSxDQBMgHbSS8i3S7S6VFhHndK5Pf6RFuky4exiaV2svvdNtcn4UBti6eSePtkVVGU5NGpcr34kfD",
  "key21": "2nU3ELjc6wFpiVPqKdoTEDuWiDGNK1PvVJ2SAed4MEaU5zLAxe4k7kD8FU5vh5wCaxYg9vTpK3Y6Uyn7D4YsrCPJ",
  "key22": "28bhY3kiTYXUsAXZtLrfcvoASyJzBZmkwarCuR2HwPJyUgmKBjjd9PX37XGduj2VEqqR98MbWVD2w6b2Z2TmwJE7",
  "key23": "XcmN57deqxLUUuom13NRwRjfzig5rVTtUn6eCquaFEs4Vfv3aPHNExcypbMH5F8rbBgG6BQJaT3ECgUjXsj2jvX",
  "key24": "2D7hbjWqTLevwWqumh65BB36aYMy1vxEFQ84Vp4KwVEyYDuwkbCww4NcyYPcK4Cp67ghcAx4BMvSvSBrbeyMdiwq",
  "key25": "4pkjw5SZZZJES4x9Ya9SZ54Bnk8AbiEZnr9XcMgKHVSvozrwiUPvwnRq7rA2536zvJrYTW5CPQdxHeEDSB6c5t6j",
  "key26": "HKMka61Pi37XCKqHf7mc68P1v67JVhWEfkJj4c2bdSbXwGREZ5rUeC9QYG9nyNDzTArSDeonfQhTGyKdsgj4xE9",
  "key27": "3wYLn5riKJWStKBmmmmnhyBqCnWxmZ7dCVuXaosV1Lxm2EThA8yMZhbzB4m12tYrqDWCkrUzbZDCZzk4etxVNfuq",
  "key28": "55fRsAr5wAsmpHHMyjzR7r8H9LWt1au475iFu3s7kNEtvYV1fRL3hchSrzLjr3sV66kSJ72kVb35KKN4N8E56dSQ",
  "key29": "51yXwPZrP7e6ER8DuVBi4NQjYmAJYQ9ob8qf4d97wvLSgSuWg983m82nFvND8jphGn8yo639zTGZYyNDbGnYnFEz",
  "key30": "Uzcxhg7URmFL5tqNPoajQx1zVSBFwFUbHBTEz8NH5awg2n9R6BvpgQuY56oUtwVs37ELfBYhgK3WmMVnbqqwrR1",
  "key31": "4WivxQzA7onbcW6cBvC3LypCPq91q5NVUHZDQtiZtat6HuiNtPrLuFLzRhRDqH2qPfyD8FCn7yueo96y83GyjpXA",
  "key32": "5SFUPEFM4KYhE5wSW33JtRzXK9byx8SF8Ps2wKHUXePebDxtUeZBcSW4gcUhV7VudpJNWoEKmr89ALeGh5m4M7aP",
  "key33": "4pD2QbqiLAy1Ai17XrNoUN95EDngASCgLg2VCFMCqqCezYLLzjbCfzhqC8bk9QqGFBrtaLDRZR4kuQNJVTpgnmgw",
  "key34": "494QZgDRhxSXkzTwuek1vEvdHh63gBTaYnXHRgTL2s72CZ4Sc3aTtKfYdS23h6Ky2pGekqKmE88C7R61UcEJowFk",
  "key35": "hphGDjS8EmRX4aJGQiaKN7K6g5rqmRHFFriWw643dUPVSwYX1NbrgiJaqkLDdzTbHsvcpp1Hbr2TCuC7wnTRNL3",
  "key36": "sgCSh7o1xuDG8ZxS2z5kjoKrYcAPcsxcaW64zxg8t2Q1xxunuxTQhCfHC7W34RUAipMteEi2qJrEvxmqsX9ujUQ",
  "key37": "4QECcKiYx1UjGzqHVAokqR3kYJeEgYeJWpHeViDsQ6KPAGvSRPzMZEMaNk28JEvSDny4XBTwTCQ2ZVi4hh6M8dCi",
  "key38": "2nUZE8T2LVEJarKdvJbQXa7N4tNWiF9A9MtvBvvCzW1vd3PWwVtErorxbZxURhye7NcraewPCFrgM73Zt5GHcK3f",
  "key39": "2iao9H16H7aHzVGiztPrWu7axCeyCpdapgNW5YCxTsq65bA63ErdF6DFT7mdzDhpxWftR4LY4tTvEzp2XYTtc72Y",
  "key40": "FEfyD4iwFe8jkdTH3NkPtMiFinPF2atf65LQWXbyva5Uy6DeZVsE9ARMLs6y5NA9G5pVcwkP1XHz1uawMN2Momo"
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
