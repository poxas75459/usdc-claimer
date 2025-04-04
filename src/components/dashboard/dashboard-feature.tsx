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
    "4ZCm3pCp9zYuKX4C7RvQJd7V81BHAxH71sFoyuL9xTnzHW9SGUoTxefg1DsXvjUEf6rSdKAPPaFCvdujorsB1YL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kk7UwJiETn5TTZc8J858VmQ2Y3AHKewaUjmkw51GaWdPc73eEVLySuh8spMkrfeCXFS1GeQK3xRc6UweT78TUf2",
  "key1": "sXLhfgpv8h8mJ88qVBBunJa7edXLovQDvBdbghLVrpvY1uCvuJ6ap3sd2PbhkB8CVAfHJ5b1ohN6mRv4fGAWbnS",
  "key2": "4b4xNS6Cg4nS7REqDhASP5DqmuVEufLhgeviK7JpdjkQdKh5WPjHGdXSfQ577CPQx8aWvAige6AZ4FcbGTtQtcan",
  "key3": "29C9zysSrVmu1uJh5LRrwL8j5HszHwMQXoXUztYaKjK63pAfmDGc2JN7SS2fhFfURWG6g3LCc6Pfwucv39PEiLT7",
  "key4": "5Sek6Yj9pBoQTKrk3AkiaFjzjZmN6X51rpez2KQfYuGpdjtXELLSDz9f5RynF7z6NsBPeWkoBzoCUC3ccZcjEG1Y",
  "key5": "3gfPYozMi1Z875CLApAbv9nQtzpehT8T65ZV3hjyBYjBribkVDKZwjmnqfzX9tLH3AkGae9pTN36Yf7MiYNSxJtA",
  "key6": "4eUVziEBAHztEDrR7txBzG3BBBu2LFidLL8cgVLsa1aLMNo9WBTeLLKDcRmQbuVouAcNstkGamDJs3swKU8GPt51",
  "key7": "26aUaF4qn3iHUm8P6FN4916T3bkkpqsPn5Jnrwp4C5Su6d23iUJrH2QZpTouZn59oEtZ5yQZzbNym6uAtU7wSQTc",
  "key8": "4YJ72xPjv98e6BDE6MR5zb8Tw1GRim2CU2QCNG6SbgkPkr74fMKWkN2pL6eVkoWDFQxMUB3ALLuKiaf4eN6CwnxY",
  "key9": "2xk659Debyk32YbGApKLyM7XD9Mw8LwZ1iKBquxqvmmZNz96QbvkqUgwvktYnwGFqxtiXR7chy6f237evzzxXp6i",
  "key10": "5FDK4N4fBAUdiRfmTMbzXaaJFDpT8WWwb4matVdGPdGSkCLZvRR7nV2fTbZAMSHV869BsAMXbkn3uLKzFCNzSDD5",
  "key11": "4ZGb6kdgnfHCEjg8AP5Evu1a6HLPnhrEi4XzyYbLjk4ffyHzZTinqeUxCNAAV8sp3erecxCfXUvKketn18DjEiy7",
  "key12": "3vM4fK3JpchG8ATeVrNUQuJL8oeNjmxHJstspbLsfzVVPee6qkCA4i967LsxzaQCu73sZDnjws2T5uwRmtdErSPy",
  "key13": "48PZJPgGEbWL3fVSLJontbfdgZbVifMBoc9dP1UtP3rmL7ZBikn4WUET1dEqezgfcBqeJ3zFL9onUkUgbaTXp2TU",
  "key14": "4F8KbL7ucxP74X1EP3XZqStipHLpeDQN2XCwDZUomB63Lr7ACgv3HJUBmze5Carqk4toAdV1nXGYaKYqUt3dYH6v",
  "key15": "3dunQyLWaX1MMGKnC7sCYGkV2NTCfFuTPMpk14fFHyikkNEM8eRLb465PEFsCwyXKhF1v3Vw6zH2UDY9Yo4xqVyB",
  "key16": "3vrPmEDW83nzhKeAKD75GaFRdXR5S29quWnoJ7hfr26GJXpKsCZ2ng9bAocYU15uVXrPp6w8YHFXSerbDH1coST4",
  "key17": "31Mo3hDcf7bVnRu8pNPhd7hHR66gAdxMTNaAw4DeYRQ363x5h5zkcYGGj8wRM2bFwAkMnzriYkYcUdATDbvpyVQq",
  "key18": "LRxDtaD46LJqSVutgFjBotaTPNJFWZYmGsVB2BqV5eKEoBSuNFp4x5idkG5MdkAKXwk1Ro2qJrpv87xoyFW8hJj",
  "key19": "HTaHyknf7xg5d9Bw8zCZcFRrJ2pinSJMTXANxjLeehN5hGsG1JxvkuHhi2gApMdnkZ7pRKtE4tkpWeW32apxJgQ",
  "key20": "5HZwTSFkpQmF8sRLR5TkigwUXfw6q7wdkyRkm7tyF6VsJLYMHcFneFUYtTMhBvymVfPsY7K3Npuxoq6LUS3ZZWBD",
  "key21": "24XSn6Ct7jP5cDwUrdZEggCQA7ViH7bbR4jDVnb7nJ87Pk7PGn1yvCN9uEcm7T7ZYixoyr5YwzsAqqQc6sLwSj7b",
  "key22": "9PZfnBgDkP9hpDE6hBGgj4EjXLFguTwpZap7NTguqV8BuqD6uFE9BFRRZ24KgReSLXEYDJqn3YfJj4mpW4VAcJk",
  "key23": "37rZhH4C2rXpsmp42WX6Q6dRM8K5wuS3j71hBSv1eqrvgmSnD6u4nanPJzdU37EF6bcXQBsCirNf45Mh2xYSDjg4",
  "key24": "4s5TAVR9SCLsiUm21vFcg1FSWJWmivvJw6VhV8SKB4JB3tGpJsqMdfg5TJmzRsA1YF93rKqbU1PLt9kJz84ZnWF8",
  "key25": "5pzCY8ZDZiJF2uYHtc6nkRRoTpBdSjmNtnhbif8oe7rTf4LyxCu4iHfk6L7TTW3RnkyeGpx3THYnEvZ7mNMZ99Si",
  "key26": "4k5rKYhv1N32ZoQf45CxhAK9Ce9q6x83v91gwBFL4jh2JNp64wzpvfuaLyujW8CLQwETb8XMrAbKd1U3oxCz9JEA",
  "key27": "wbozLt6rx1qgrQjotEDLipi7MMotedS77UkPT4uyu8BqVTrdfb7JCeEKtFTX8qRUrdRzd4zdsQzi9ySQBhPXAuS",
  "key28": "41EU7myxxrAsgFb3Jzmk5jKTeYckLqqcySPQnbirE2okhrL4ZZvyiSKeeRWEERTir7yhjgfXzLtH8kDFGxAiqJYY",
  "key29": "293vM6cmbRBAe6XGsG1fAxwupcJUpPCvL13ooEAnvYh4vd564n67N6YW571UmodkPmvmc2vCdztzzNKWepHxpAMv",
  "key30": "5PRYcqX8ReA1MJxvqwHB9fo6kjut3tXq4nCA2ZP4rgzjtw6EuzreA67YvH1jrkkeHWu66fCNMwjAWWtV4EwtZYsw",
  "key31": "4t9a5ZLXbQebTneAPgp6MUmW35PuR9rvKvcYaVeihuXzqVBSKZ1k7JBaA6naivFrpB7biQUkJ1UKuwzvDHWvP3B4",
  "key32": "AhtprBiEKPM4ukwfQV7EvEGxzz4Ee16Yi2Z6ZDPr6M9isUDvbmUEb3K2NAqLRaFUmyNfoM1SW4T2anj1rseAiEi",
  "key33": "2m5mf7Yd1xQ5LzdUYZkx19SbLts2ET2xdxVxmQDL4kUyL8SQfSSCyJ34kp6ayDPTryeC3fchFLZ5VHZvrtAvVK57",
  "key34": "3ftZ3hNhUofEadmvP2RD3SCFV3EwWbn7d1RcExskpDNmnM4MVoZcbXqnTpghEskksQSLaVuBUJQrYx4LHdnTjhC3",
  "key35": "4j3JSZBHZRWYv2kwDQTF99p2sxzfB4tsR2koG9e5fQNh7KzoVpYmgvPKtVMGWwyCsXZmU8gDzdCRy2ZmzFfnT25T",
  "key36": "txEyZyfz1odbegEr6c1p489qCYRyqGpgyAnWJ38MJtTJ99FdDqWtVtdmmc3HFY7VouVAoeNX4WCG5kzFty3y9U6",
  "key37": "34CLgoA1i2RY6CHg8Ys23FpoUqQrLZjqpraz1ocMgQG1bgHkUoCq8eYB2VJSYs6Bb4B5qced3edaGd4J7FjFByVD",
  "key38": "AbrPYLgLLywDcdw6b7pVJ9A9dKvZF3JLYifR25uL3ifY8MDokd5jbWt7ASUoJyjmBuDbgVfMJgoSv1sy9ZwwmhR",
  "key39": "3sYh41S9aSgpouqAm6cHXTa7DWrsQidjK1v6p87CJwr7wyAfwYYj165wjZWHaMbzPfV1W1zoZMXd74E5LHwXoUmT"
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
