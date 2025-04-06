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
    "5NStZjVssgWQE6Vtodpj2YcksZREwSS4Ct9gUvkxvN6QqkZq6kp3oBNLunYCWks5EziTutupJh2GR5KaqHZUwoXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2esHSg4VEyHDu2A7gh7eVVWonaFtsBuxRNYTiBzYarBjZyozpd8RTSn7RHZXvkFEg7Xz1fetZULz3TeK78jgAMAm",
  "key1": "4HjtHj3RdzWnyUmk5nfUtWRBUgwZyaaELAn3tJzrCvawwkDns9hrxotRMTtu1GnUJ6ZTwoghfegxUKa2M9zgbpiQ",
  "key2": "2QA9XD6viy8ESm7ujATjuwtsFNeexJpDGeYVKLeJjMiHfannEWsPKr2NhJm5eYwFDz1TuaJdqR1NByHT49i8YPdU",
  "key3": "e7s3XEeWDaYyjbwFMjWP5G9rWfZQg8HZ6ar9mHijnHtQwxW5HzSu6x7fvWBaZCWJkU3pjeC6hSSmjipLfAm19F1",
  "key4": "3wAVTFFmw7TT1G2VZoFfVavahbEaFrRZK6KxrmYmBz9Kc6hvUbZTuwixAVCHgEBtmeWQ6grqvNNAREEM9hem2nR2",
  "key5": "JJHfnFa71cXSb8ETGucaSPD81MVrgo5njWzzrUr587ebKCMxxSivZXWmLZww5T8m5VbSBRkFVxQY9YmnYbcGr8g",
  "key6": "7RYmAb3xvZvjPC9TsgG1XfheVo1JLgv6QaK7omA9UKRoqwrUS4hy8hnNwV9ayibasSXDgvMa3LdJhsz2zqmAgyB",
  "key7": "35quLMkytGpBnwbP8VExFJ7em2DnMKhdRMUGZMhSENrNLTFuwdoGAvfHueKfvU1JYF1GTkFrza3GjBmWGpQRFKBn",
  "key8": "33GhPBLXCHpz9nJSZEsgU2YXoQ8AZk8qMMikWeDCzS5ogEVbLZQLyt8CkiaNt2qxWtQbxD1rMdUr3TqrBybQKmeB",
  "key9": "2vB8BrdErCvNn79psbGV2CfPCzqh228czhoB3dQTBj2hc3NTWgnbnjXRhNhQ9oyg72H8aHmcT9wotEym2ooa8tND",
  "key10": "5b5WKeHmGfmGjp5GF4uB4HcMYDMCUxBnByCnCFwoAeuX7ydHQMhWcbVPKzWG1dTK32p6wgDpzCmss8xV2ZGKCQcD",
  "key11": "5Krcq5dSV2sHMmKFNHKkgydwdCA8Vo4WfDvXxRkbhspk5XQS5cxsJtWu5vxBqtPmk74snX8LhD949ei3JmLfsqdk",
  "key12": "4JbUKEEt8LQT2yuiKtRcejA5CJW6XXvac5Wx3TRYhmoX2s1o7Z7J9uv1gcMjPhJgv6iyChzP8xfn8rE273PoxzKs",
  "key13": "2R1ZgwhW9ssuA9yKwysbEw1uDD1KuZ2YLDT97y9NPmn661PErvkCW1kojyt9Ur81VPgYvbWJc7DyQV3t9k4iYGpQ",
  "key14": "2GE8sC27jCvzVm25LJLV5gXojXqBvGoqaHcsf3nY7kLN1Mph97RYxsSwAHSxZRhjnJDqQbDrFUxJET7fTvV1sWUU",
  "key15": "gU831DRF6vMZMJPcy75NgBWzzzniWxomEEqhmfKDm7pXKdGg1NY4Eq8itMPo52sVdV3HvKQux1Bp4pBRSma4qoF",
  "key16": "4Poc1BXBu16fc4d3HAPaEc9znUu552tAZ6aQtJcRyaCchLRe8833YWd2xYmBEi7B9fSEGnHH76DY8SkrPgJ3E5ZB",
  "key17": "5BJQsAmfpAa6ai9t9M2WrXhK4no97YFgo1pCRvEbtB6JgAAycqG1yKjQyLGDgLS5UJUqhw5oPi9v7q7wPSpMWb5x",
  "key18": "dYZRJ5rdXrzXqo6ZLQyQYdA3DjLWFvcPQnojCmeM4gppzhQgbwcmKePvaSGMcaqhPZSm4Drda8mEHwyt1eWDRbN",
  "key19": "47siCgz6cUZjFmnzqwaWyJYjHsKH5XBULcqrJdfB63hUbadWLpF9RFYSRzCFvPzCxTYKnBYqe3FVCPipii91fkD",
  "key20": "xodnzVQRk7tXTshpuHT8bKDqD7C2p279bWm7nH3MwGnad1pWqVcJx5ffedtUVRCno7VdMn6Fwcr6c2SLZ7itYVA",
  "key21": "237B6Fmruya82BfovB3iBr4BDWwXoWDdjFKTGfqoZGtUsQ8vMZm6rfBwAG7Tewb6o5jFf5iNnLcStadUDNZAQfmp",
  "key22": "2B8W1A3NL1B1X9bL4bzPxtzLGAHwoWJ9T2BFssftz27YUg2FYnvvdW7NPWBywiaKjmDRuk8e5aih6bm9JQwwmpdZ",
  "key23": "4yicSKjJYNvhU9gANRTzu9gc4JUv8NyxjCMo7sRZ5CpgUQp2A8kT9nRNhkxhMeioopH5zz3HZqNpjj8RFEaBfK9b",
  "key24": "29dFw2BU5SYoqhRtaz6NUFQtvK6QfLnzsuaRhGixa4BzQ5CPzPqc8k3Vf2HcYaDCvdV3zTX71nTk6u3nt64BkkxY",
  "key25": "5W3Pj3xxgRHtfTZAngw8everysbi8MayhtULkYZUwd2CJAXzCGYXLLgJZjHxodqY1TckA6gUwU5RdttG4FnKvkqj",
  "key26": "3hg5FhG52iyMcrv3AsCfH9EoDc2pMv57fQggcbtcmhLbf9edzHZ4VS5Qiu1fuKDZXqsApQfiyPeyfZ8kUGGLebYd",
  "key27": "57SQR9t13KsqwjhoUeexz1e53NFx8HHR2XtytThySaxUV9gaCmXPYPo3ZjMBBMWbe5xrMPMg9NdnzUKQDiRAzvNr",
  "key28": "39kXJubV6JGHpDzmEpmSoEyGV8Z5KEa9BA1FtUB9CMpMVnS5fv9gb8Jge6VMWacmzTHjj5s1TN2zYDeyUyoXgaGM",
  "key29": "5W3WBQCY1AR4bgr2nEM2W7HkncjrZT5WHcqY4toTFg5yEjAkT9MJFqGjL6BYPE5vZgnxesQk7k64HLALKJptbMdW",
  "key30": "2HmaXDTeKVoX6BtZ7GVyCH7Ec66s9HGY7aMYEMB3A52975oZBo7e3PshZhrmfspxjPd7AcGb5TWBRwxN5q7w6y8T",
  "key31": "51Lq3S4wmRjr1JjaNjgyD31eJ3hsxpD27ZNNhezz6XYqXqJho1qQW8dCuPzYNh3WbMKhfdCnyYkug468gRHLgghu",
  "key32": "EsypHCXUBTWFdVtQ8mbUsoCwQvvP1aRbUS5mGQWqoznbGSpUhh9cp742ncEfL9gk6ihzpsqJL3fKQtxTyEyixKd",
  "key33": "62jBmAeLNz2S4kw78QK3581xKj3qBmdM9h3nrMPSwSmPLTCo2LDqoDHGGrJXBw63vYBDBdPDjFQ7aFC6MccRS8sh",
  "key34": "2EKpbCotoNcKdu1aqzyjZWtpS7NLbtLFBXVaG1u2Q22rDL9asNWsrVUM8Ab1G784XWnvhurtiyWwTLcNeStEMoPT",
  "key35": "bvkCETL41tER9Zu6CYGgBErB4MwDiT4hWihMiyjCZCC41V4acmB14HQmSE5NNPbXRwyC2wVL2mbNmnW3mgJube5",
  "key36": "3kLgAyeAWgRqAZucZCFKbLWXG4mPk6wPrEvtjn7Er6zxGgeCZsYa9uXdhkv4pT9wy7NGBTumiGWXfT5dHkV8dS4L",
  "key37": "2BajsZ6rZ6YKkBSvEvbnSdpZiKAmQnnxNg6Uk2rK8QPYKvGk3Uou7hH4Nk1mpzseiQ89bSpsE2v3aBjtvEqdYt2b"
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
