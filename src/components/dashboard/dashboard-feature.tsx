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
    "5noJmmm2NVexcTfuq1jtjd53QkSyDCyWigMKpgaMD5ABca6Dk5uoRzm9YDHWKpqYM3Yg9edU5Rogbf4wK2ao5u2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TefxwaskWGEsHtZ5JPqsD3AgUGm4J9TynTTshYfhU1jELn9fJ8J5eCsHmqw87vQUP4hHrZB3Lh8Zo17LTc4CdwQ",
  "key1": "mgQrPiBBuMJa5mu3b5aCYuW9Vc9TpVXvEMuNSZ7ixXpaDmVXG8rUPQx5uMRuj82meT8iJXANyyjK7mNzzUYbaXW",
  "key2": "2uJT6fhDw4uHp62FqJAB9ZpaG4n38cEc16Lo8r2cvHeViy8pqib2ds3qLiwvMuG9EZAm4ZXi2EVCJhp8pKgHcM2W",
  "key3": "zB9kz66DSqtUvgTNrzV4gDumwYV9HJyuJqmpCok1i7TzxbGZp3qdQjECLx2fXPtDKaLBH3S2fZ3ApfMA3y9ZPJz",
  "key4": "3tQvPJhnV1z1QiwEd9qprMVvZXzphFtCBsgqFTok5ZffRdEWYbknqHmUR4wpRHDHUM1c6FgQdVEWxxRWVCSntDYp",
  "key5": "53BYxT1aeakXMQLvbVQGvCJfDc28mGy6T8RNyGziZE9nRwbESFzUJbCqD1TfTQpz21sLtW5rHJC2b8g9R16gt82A",
  "key6": "2ip9BjzoaVdVCaGZeVhpLbifBVNZP6nrXWxqKUnc3ugq7FiDnK47txogYBWEoqvUYWZmoyMESUm1cF6nKjsTTDi8",
  "key7": "5jRTVKRWydR3qDsR9rgUM8j69EmhCmQrZn2jLMxDwDTcwpTARy76fg1DaY4hMY1D3J87Pfa5LzjPU9zAeZfaZ1jz",
  "key8": "5YpcvQMv7cCdTU2no7ebQHQ5S4XH4tWvLF9SGWdeEzAPEF82B2LABsehRQFGBzKeFiW8it2VgifPbsAXMVHb5Yif",
  "key9": "44wfH9xPFAqrXmpaxgHE5e1fkZB6u86mwoXcV4jSpCNJALrLqwfXTKsWbGKTyYyCze6e7mqeSy7jyFjxCCbkVb6x",
  "key10": "5ZxFdNh8aJe4B7Rh8nrSnoUKWXxyYMThirzKzjx1UGC1SS9najQRoLf2vTCCdbNtcGCSCN1cv5h6NxPLgmMoQ1Xy",
  "key11": "3Fc61CJZnqn1ojiBJw2a6RVPhqjppPSChFpJYxx5EAYkqPSUxcKofmdAsiTpiTA9vMvnnV7hmroBzA7Vk4uK9hWY",
  "key12": "4XLSq8DSy8QjQnHQgcxevJm9mQ8z7Rz25aiPbNJF7Eu4fnJ6uKevSMikLMr5jiBrS595fYZN8Cs7SrdQd3WN8dPB",
  "key13": "2FfVP6LECtNBGe1Ma5xvSt9thfBQsFiEcFrFUQwy2rgoKLLkcSrqcmoEzm5L6mp1zrzdUQmXyge8ErmFtweZe1Yr",
  "key14": "NB21GDpiBbovvyhYdUVqUv2yxntsVr1nrt9EoM6JkaGDEQGKeDkQKu61LNSMfWXexzTMbDnaDJKXu4nueDj21CF",
  "key15": "3CYN6zw7YprSCbhjwE2FMHCF1MieVLEZFPU8zycRh8qnG6v3KU877H7BRoymxmbGVN9MS9Ud4WX1SSzi1D5aNTN3",
  "key16": "3FHELw34MKnU2tSooVmWsQP8nUZmtQxY7yPJvRzCA8uMStw5ibn4YHU2Q285htfkkeDyU9DJBrusagdgK4gR1TSN",
  "key17": "LujzqHmT8CeJP13pcgwEunHwj9JuPvzEEjDvPCUQsckfnPCpFko9E4rbDKxNY5PXxzXaF2uNKKrDxcv28R13hvT",
  "key18": "4NVz5AyjQFVxkXa4poQm8SeQasDjxBFkYtS9EFedHujMeA2yz9oCP9qpfbEP2b7mR9ZFuL1fCH6DBBoG9GtXwukY",
  "key19": "5XtEAKbWPn6iWAdx7s6fCUjacbnWD6VRCdbGmads3SWJdekMSip3poUcRhnyjMZNMVc9hNBv3dcsToL7LRYY7ZiT",
  "key20": "2fiGLgm2jv6RKhJTjb5foxWo1dSoM2ykt1rCFfWKidgU5CNbyG3A8fFztrj4KeNs38ctc4cwA9fFirSbYska4T8Q",
  "key21": "2VwE2LRB8kshD1KdnFw7QGxP7gyEAx47nWsi6mWam1K9MXchTbrPWF3ywcZFBrC1djxCttgSzAjT7ebvv9w2u4Rd",
  "key22": "5KiwKpEKnsUHTuXd4NKHaasbUT1Z3wFvMGC7hafL8wAzQzjatttPpbqNuDCBC6PEuscGCCi2WX88XiD5QdoFxETB",
  "key23": "5qScVpmhrPohMPT9JcPZgvWgvwfb7R85wYB4cSRfZWbdu4wfoRaAi9CuDHAwCHUoX5j9vuAZMPzZQbGMdTutdLNy",
  "key24": "4d6wbgkZHVEZ2p8LNweK5wmvj8ZjgQFj7ZSC6KLCS3qtgFMPwU25m1NB3TWGqMdKWPFrCkgvD86WXFW4wMcjgrWZ",
  "key25": "4yW1LEAUn3521kJUwUSLjLEMygqRj6myJwQEEn5fXKtDFeJ6KpxzEd7fHzvDocfjR3j1S79SdyZeTVv3LUuwTiZE",
  "key26": "5CyugD4xUiSrY24f4deiwEr8eeWnmtnd4Y5vcMDLGb9w5uwc7kgpTPoRxbXcZw8UZvUy4biCZ4rvWqbxm8RKRKEh",
  "key27": "2ZFT4W1qPY48UwJjMyNFiAc7nM4SYzKzw7YnHREktZwmMMQEDLXsMwpi5wEbka9ceYi3rbmrujUaQ3gyW6ST1bh9",
  "key28": "499QGPM6pXv9X3yZT144bSVFkRxmpaADEukvpADtxHArJ3Hh324XjvYnjGdV5pTkrXrzcTTkwPEgJwWcbGTLPcNB",
  "key29": "5uiLVBtMTFnfBbzHWf8f5okUAPp5WowiatoNRCFXtfcrfuHX7SsHNNkJHBqNDfZY2SZsPPbhrKzoiLYoQVQFmFZX",
  "key30": "28FKZBcDj3nUanVw6PpH4MF6nvDyqgGiwAsp6csBCZWQdatedtdQSMzWJn4pRhRVeaynLxmn1xFFXPMnarbXMH5s"
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
