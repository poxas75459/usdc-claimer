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
    "3v5v3BmzfmJX1ZznLxzG4pJkBjrzeJFWjcsZGtzcptjRsNjTSc1KVGZGHhzUrHG2LaRUXnwwi8d3wRnte6sbqmU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tpkccT6YxN8aEFUHySSRp8ioWc7YVpFEN7hAmMtHGM5ome7e2eSdP4nXxPxYB6DoRqB4N7R9Tn1smAMvb2eUmRn",
  "key1": "5JR7pc7DBqjdpW7wzTa9KyoxySh6gQNxxD2qWuvDmbaDUYEkC7F4648eS8ENJMNsDTdow82KBgH2FWWWy1XbGThG",
  "key2": "3wcoGkJM8vPmjaiQW7mzPGV86AxdsFNXjjXJjKq7XFrYpMfHbxr7XshN3ScJ6wiuQEr9eAzG7QQkqZiC99sycqga",
  "key3": "2wnHznyAgNeoQrS7SxE8ZgFVfragGaLm7q3NdsgWWXHioTxpeG8ffpKN5ZrK1dK14am12wy8jeqHK1t9u1zeBnnB",
  "key4": "2xPwM96aE18L58h7uFcNQND7JUhr32K3GWJ3vPKk5X537jn9NVXpePWS9TLPkbyiVnMF6ayscdKqr6odgjdAgfYZ",
  "key5": "67FsdAK3LKG37U2ddZCjjGswrX36Jv4BrvG3hRtCBJnwazVyN5mmkue1FP8F3s4Xqj8i6cb78C2AJBGTXeji8d68",
  "key6": "YPsSJuWzZMtraHU5mNSNQBgJw2hTpXW9rV7QAceW5b1s3tJCSnKJ6jEsfLfgzCffFQZjB9BrCrXmUsJjrVcjxPr",
  "key7": "2utnzCqgjYDTNLLd4N2SNzZkfiyVZxUSKQ13zdBbfqnbANwqB2LsfjpELruGYwy4JCqGPqde2p9ynTxqhfZEzBgk",
  "key8": "2ebquU6dgYva4r5VEULUrjnan573D5RCJd7rAj4woDLHUz5k7RJWFLh1Gk8gj5xQ2fd5ygHdaFy7KnF2aL9FkmLX",
  "key9": "2NxcWjqiLgDAWtCX6TKvo1ieBys2m3zXKxLaQCCVcPrTNXHkqDK6xxjRnU4Ju7kP9MgEc4V1UkycHvTStRhnq9VF",
  "key10": "5P6mKdrMhzbafZua4b9mbq39rAd3RELu6ekjJRxkEpJt1jHN1A6e9VRYg9FV7YMwvKPc5PqQJS9EFVTNDySXeypu",
  "key11": "4h9ukRg7MZeviwkY682d2abUdMfDszeUy3CR2g3dVEMUUEFULdvV9zyU163ZDWDzV3U7219c6WfNHE1AEv3p3MeK",
  "key12": "3BobWLJmb2Lf7nYvn4fM1hCmvpN4Dk1zkfwyaNqdCzetsyYpgsX1MpA1cE2vDCtAtcdN9xmVkLWcDHrk3HaRTbw",
  "key13": "3ZFh1fmdbBgLmht13S7SiD5qvutJfQ6nCmbFSnfUEirAqj5CdFKw6zzC71LhobNF3vb4n52B2HpHNBMJS9S4rYg9",
  "key14": "4CVAQfD92tJ1ovP7MHiEtjvE9jBesywd1vJxk8jZ6KufjdwSzkfXnNQENCDoASytj7CrqS425rKSvqHwp5TECktt",
  "key15": "5dyLTUghvBdbAi76vV78QTBJbK5isMmuTJshfjFEnvdrWBUAxq31qtFdS16r1oVbNw8eFvfKCzTDEd8B9PKbxcxr",
  "key16": "g1EGY2DuDBBeLhQWU67FhCF31VtzA3StCkJFZsrqbWKD9cyiS8ii7w7sYrnc5LahkszkkuQt3aY1i9YP9qUKmZc",
  "key17": "4ymDAFtZQ934LrW8CFiPMM97nLmYRx5mc4mVk7KjrjL6kQ69Ev4dJjdGHKLcCpELXmDHSzXBuwygZ5D6xWpTePB1",
  "key18": "2E2VWpnKoXBHFNp1C7u6v3aN2QXRrdc6S7Msc5kJSAaCXJfNtr2Pmdv9Wnj6f6iLvTeby1UnaCg6tPKJoYyqEMpK",
  "key19": "3HzD8MCRpofmgdR6jNpnHMU5Ptids2NC6TximhjDaxLpyCcZwjKsVMNbria2MiBLjUbTWLKLFS7a6cLNf8YrUpyB",
  "key20": "3MLYstnWvNMUvHQSxuYYvzphvSDMMyCVmTLGKfcKUYvmfvfsA3cbQy1vcmeZgsE4FD589rFZAMjduwzQLQyjaz5f",
  "key21": "W3HoUbLHBonotw91BKTAgMbRr8tCSCcdRLEjSJZEpCTWbLVyxLMQ52hP9FjJJuJ3prrWckQHAuWVQYeGjm9Mwte",
  "key22": "2o8k5jME7QNZE8Y77ZbXyS1YgVMHxy2cuTELHK5ntx9muz84FvSn3ctHsoHBXNiXgDYGTtn9P6ucU4PGxVouKdA1",
  "key23": "ibDEyhp45365HzPnsnCotagLQ6SMuEA2f3bXCH6fqJAo3hxMXVfVtrgZ5zPhaJ8ch62pYjNJ7CsqjEQcTKeSCfw",
  "key24": "3BL32mkvd6QpBggzquBbUvyP2ARx17xucic5wuTPwqo7q4AQbSD2MoL49R5UeQDgfEnnTL41o6oXKceS6qua5eZZ",
  "key25": "vdLyQwcfta4a6d9HHWeFaPtbffwMusKzyzvNKY4ELtCQb2aTxUGGB3TrmM5zefiamSQzCz4reBLqQ4expRG6dQ3",
  "key26": "3bkjJdCGYJ7t9DHnZqzvhFhDtB4cFaJNGk1PdXa3XFT6Di9gy92SHKtwnNPHTCn44RKLfy6tEJduLc8jvy7hthxv",
  "key27": "2kZ4h7z4v8wZoUATgpryV6fEtHvpPPykULNWLSMSBGpbJt7JXyxv1TNHxN5qir21eQPNCPm7pCncUR6t5Ca4B3Ck",
  "key28": "3uS6LvyY5vey5wL2yY4LWTM2ANMkJx99ogwHYsxHgpChSUfkCyzRz55KXchnn2tgPShf5nGpkCRMCTtazsJ2JiUu",
  "key29": "2qJX9oMjYGdZquZkAQywL3hLXUQ5E22XSq79wkM8GTe5ZmF2mKRza2fTLduGsytYy1Vw8yzNqwCRB9wt6humBKP6",
  "key30": "CkYdEbVf7gw9LumMifakQHAVdRq6nuZJb9DgS5KUimF9f8Xu3BHHD8e5H4TmQxwoWeuhut9wcjc1dquDqJ5AWwC",
  "key31": "54Wr4gD8moG3te2x7TaoC5G2henezMJYu6WcUw5giZMBnHQSyqFNfRLzHWq8MvX5Q3RnQEpMDA97eronB11dd7Gk",
  "key32": "39WcRJGBQJyteYwmQAF9qkseEaWdwbBFtFJsV8ZYuAkiyfJrcmqj2xckpY3FkjYu8Hzfok3DWzL4uvSPXDYZpf8E",
  "key33": "4w69CnzNRRup3p9CREMVKWa5zqWYXMXeyyBa9SxvisdzWnpt8ZGvJPLBMihUvbCE1ieiMhmTVjpkGyiBE7ZvGn4c",
  "key34": "q1QD7htKtwE69fg8gPwnnNZhabZe386EhspFFUhMg1j721cQDWLQTC8py2a5cXqt92k3WWEUntcFN9BmyxzPFtd",
  "key35": "2m6BJBBaSZFDfmnjzKQzMxpT5SDmC3kZaepe7pdr5S2hCsn275ikFNxYeJZBhJECFKgn4YFSqCjKMZcqB5GMpH1d",
  "key36": "3dZ361CLXcFMVgp93oNwwynozsRLRJX1Wf9JD1t9bPi2HccUuyrXEVxXAMEuN1vsBdnPf7zvHaSDJMwaV4jo84E6",
  "key37": "5zwaLZdPcK1bzdYyGmQRgaomm4nCyiSgfWtpMfc1yFM6hUMesdX35jmTDV4NvsbcpAaBu1ex3Gn5NiRpVpnKCTcb",
  "key38": "32PwVePmjDVJt8iwLadrwo5aGv7vkJhEoqnqppJTEV3wiGhR3z2eGDnYVSdfrFmwKw8JPg9QK8wEsCtJicZf9xM9",
  "key39": "55LB1dWMsRQhweuTVZTexTVo7KWaWctcK2cP9WKZfCfwVy4BcTt98SGb8koYoh98FmECapG8JHcXfALzeQ3rAYZa",
  "key40": "4YJ5iofFsVudCUdCKFanwEm5oG7wssgWVwoukb3ppRSbX5smhJta3T9Ebr2oN2rXom51HmkUmqv8rM8QrMf3jWb9",
  "key41": "3HjkHKSabkPyySE9uSsssYdq6r3FML8AiFervbh27Jjy5ghSyShs7ZtadEyQXBxmeHWEq4JVaPPGNr7YZafLhNDe"
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
