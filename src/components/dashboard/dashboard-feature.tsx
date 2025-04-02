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
    "2GZEN6kEdwNqbhyif9WNcrAv2h1LmViXfuTDNLDLab14AtVpYxMQwkha8erSbFwB1Tr25zV2GM5TVvXEjCr1QjWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3trLmbrKBcycVf2FQ5eYwSu4auq5rDF4zmWg3YVjTRmYxUWSiHwpbBUJtqkrM8T4uRimQpRy2oSKsdbNrgwjRUF4",
  "key1": "4tUQiq23FB3oiWM5LpZQi26k1XBmV2g9PUrchxA3PvBSxXHynGrbS4tXtog51tRUMmj9d9nJRHHdSscfc2ppe2mK",
  "key2": "52mzuXTDzuNvnKiG6nUa4uFLcCvsgN65W2GKik4WMw4e7rCiMhr36oPSxEAvauRtJMfwfdqsJQEeC2C67TNpL2SX",
  "key3": "4D6DSvdnde3pUXJdjt3CNmhjX2pCvzuPVbRpp5jzW3VFTeGwfKHLrSv9x3AG9o5jCcMxcdo3mU7nF7vNMXuS7vac",
  "key4": "4NXDc2CaTZxnDHAsrKtGvsxMyaAoQvCmorLCyJYr24ZiFPQd8w5Zjs3SsPHk95g3FPwfWgHKRSiPyiXPHpvwT3ED",
  "key5": "5dc5ZCi52Y8Q5wouetbrimteCffDBjkcvD9bppWTP25cUCciUTPVX5sJV9D3K6mJSK1g8jLAaPLZJmb49HA3f1mX",
  "key6": "34UBajMmPv3giU7jQex7XymxFDfW4CGzCJCPBmdeaEzt8wGp2N882ZAPfwBeVXBtgpwZp6jDyMmom1gKYiwgDtfk",
  "key7": "3SraKS1mmoRbuQGiaTFCaPWMTSpkbo2XqcWguJX1q8g6PVBv9sWkrooF9eVy3b7powDJWFq6gpXKyWLuTwHZZuV7",
  "key8": "9bNwgDojQjQiMhQX5Sf9y56wB3erL1pfJ6NiEEfz2CGXMkiqKcv8jFwQgTRMz7gR76PGLtBZLy9ae5UhHNBP6b2",
  "key9": "57fs5XaUyPYo4fHvV81d6ntW46AKLAGzyZ4f5VotDUn7MVNRLQSx912oQP9Q9TJQTWBSjYBUgg8GXDyJaMBg25NK",
  "key10": "5qTTPAejozFAqQD1fHvpXefyVxxJb9u9ZpmzMwYqQQHaA9K2yxqUpAwUm3gGHwQJeE9xMet6Z96NPvXy7gUA2PcL",
  "key11": "33aiu2PLvyJCSKf1Te7GnGuawogShPKEChzZHmbbEg84oBEfCwSGvWS1nYq59N3jsjQyCYcuqfVYiJ5AGDEu9bGn",
  "key12": "55MSRwrCANWMen9oGtZCfxCVrTY6utBUZzA2dgDBw7AxS9aiF7nuKJbSpcDXA1rvsgu22woUTMzLpcPXMYcsfaP7",
  "key13": "41YHd7ykSjwsYJvDii7KbjYwxoP5byUUBjgkcfJaQQFRJTJxrhbQpZCAjAcmFUEkqQZZzESjo5bZCwJxnA8Wmst8",
  "key14": "2p2RkoSKEhmYPxT9HwUCptqJgE2Xoad6DRf51uvUPDqQzSxbTbEB6p55JAbvnzyPjMTx2Y6oxFhwAzAe3Qw9HLZ3",
  "key15": "4BEQ1uPdrVdXfUNd6ait6fLdGWEP7HvtjUJdgDKdKYywqUfLsVgubVAUKBGsB3F6xKj1CsXhYQLVR3Jg3rR7piKE",
  "key16": "4QojVHduDEg9ibA4eLjbhEATVbLSFYRiW5gojZJiR5Zz1xjZs29ZXMdZJaqBWjfh8BkphguqHpWcP4uNdZJCCxdJ",
  "key17": "2U2zGpr6xoYQjTyd3kE97sEGcREJZpoMKkhPfLraGPtcqSiWgxzL8cYapgQJfYEUpiM9qfpa9Mdby22RkZQ5Tu4A",
  "key18": "3tcdGTMupkqUxmPtDJQgryVVLyBpLt3k7HgF7pv4arA4HhX7ATXNzL78UUS6wuyW3RCT36a9C59vDrwC4tUvq2r",
  "key19": "spztR64HY22UnPr3SbbjJ3NAJ7UyVskH7a8D2tuiCp4ayEVTVnKT8nzd8QXEw3JKyNNbNyB6X932nhyfJKpxxSh",
  "key20": "4gCdJ3EwJvz9bRSBCwS3e14Wti1829p2ZeyJzHcCn6Z9AaaBgomKzSD6vBdFU2J52rWciF6a5zmLovx8fgS91c7o",
  "key21": "5paY8xTroTMfwcwnYgjixxHjk8hZt2JR6adJED6DQxhuNozZFtcdfJXm3vzLPehirXCNvJ8F4kuULFjN3JpRCqhM",
  "key22": "3L6gpZaFpwn7QD872hr8Vz2LmuuCRweHSwyoEMiTceYUbPeuv5gY28KQnXygqJXrv63UYbKtThKVKsSofEDmKxzD",
  "key23": "Es4XnmYzpnUjYeQS1YWxeKuCMPE7iEuA9JKTRXgfuaUNdTupKo1ieNMaTHWKmmzPuEFzodinc71BiVyj4oPZ55p",
  "key24": "335vhw968xADnrWLQUiNEtjCwgwA7iKu7uaETcJwjPZJaRYN7h2mn3iVcKvpSdMbiy7AcZaNYHeKExdZrhh5rk1A",
  "key25": "YHpCwiCqxHmHYdFxvbgoet8SohFgr3XKPd7QeVyVgSG3fBfuZSnysEA169mvewgnyKMbpeYktf4X43oLApfMQ15",
  "key26": "4v1mVA9oHJcZxxCRxABiczUrjSywREGZhPs7iE94y6xN6oqdp5pKNscJcfZ7cBQ4KnR81uohtp8c2uMmvZPchfY7",
  "key27": "4y32DT1wvgPRRA4EwtrEbspCTRBKHiXZXz5uUwpQKU5miy5xJtCSCjrV84QiUqtJx7QboZLNSjNNW2cW86KP3Sus",
  "key28": "4EwdDC3ZSG6Jft8ZuebT946CZG9ka2igon5xVXhebW1BSyC47g3YMdZpGWVcJxmzRGnCFZiWVfaftMKx39JeaMo3",
  "key29": "2M3adkDVZmHSU6wb6oWuv2rUNBUD5WYFWkAvsyRz7eTgo7xTL3xZq7bWA5HDffJnoa1GiMRubvz8jHc2TSzxfPCq",
  "key30": "4d79nipq4yw8YmC9S58etHX9a6uGXqebFWkZ35X9Q9hFPJ6Vi1CSCZJzMdfCHDVFpzX8EBf6Wx1fAgj9YuocQJeL",
  "key31": "22E3LgMBHHovs1j24Pnbi8RPXqXxLor1rSXshH5wkkGXuAqfeKKDEJn3SNNCwAMgLwizi4AovfMVoQtwrwiwYYxH",
  "key32": "3Ez9FSF57LXtWXFPjvC7zwSneiP8p14XHNRC276DQZnzSyyQWrPPKvUtwe3PipEnk5KPswQjnmGr7r5FTjdZ1vyv",
  "key33": "5XSq4FrnERUp5C7483eyVQtdvX3qur7AFFrX32jFY9MfKTmT3vJ9ANqMcQyEn6sAwSjxcCs5AkcAmqdfCeibL5V2",
  "key34": "2vPN7s3pByKvErKYeJ92LY6TH4cbD6Uf6JdUqow8DgjXfcE4A4AkhTMJT432rvz4TYdBCSAi1iNCeXEK8vsCyvgR",
  "key35": "3YhCS8kGPPP8JCyP1oghf1dToAda5khhed2bQSdWJtL2jnmgc4CKYc6MVwkLWaT2rpmq8TeJhpvhWJP54ybzMUDp",
  "key36": "2KHiHxx6fd5dmCy3CnkgvRpcJvdPreMQ9ur3Xd7wB7cKEtvFZaYDWoruFweBCazczCaKqyxuQYx8TfgrgqnZ4xaN",
  "key37": "2w5fL6jNrG69w5AoJCFJbBBAyE7TA8ofu2Q3GDwD7gStJj6cUqGrcqe1bnAd7TxyErb1yLvNNtx53ckhpEWE7hqB",
  "key38": "5UTUZzfrcGsn5SV9ycWoeecsRnNwUGbWSzSddKtrrwd6GtCKjvriGzqJytnnZzoTr14yMzcN9MjekveM5ESiWjmh",
  "key39": "3QrhzNpGvqp7Re4fUBgDbXvGhjGqYyzd7GSMYrLCBRkJn1LJtox4Xe5QgyrHqNYwbdbyBgYiVzN2G9xnkEs6BcYV",
  "key40": "Cp1wa7wS58FcGGNVGpFc8MtAmZ65vw8RnGt5pE5zjmcsfSQjou6iUjMTqWMbTFy6vwtuzyPvPQZoA2u65bXgzec"
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
