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
    "oJDjHyfTAVrFfiCW9woCW2cPZcww5H3AqUDX8mh9duewiy5yPxSWNe36joYq8vW4ec1i812n6Fr1aDCXBhPGZQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c4ENRo7X2wn6JAFqd5ABNV8LCJtEBc8RSjEZH1842eTNcJVyzh7EHka6RhLCwasS7CQzjGzeBr18mhvrR8X8Rrt",
  "key1": "4bGnr33pxPXfUnL7c5dopavsww43yLeLQMbCrDkKUrMWBKBWFd2BGsX3DhVvFGbCNns7zE2P8nsc1GKtMC6dGFPp",
  "key2": "4s9hf8Ypktkboh13AgsV25TFwU19MsZ1oTnhCpZwjLvVnG6wEV5n2pajC5GyHMfGUtyFwAGZVvbckbujrj7dNBvB",
  "key3": "4p3MPktqkhb6RFmguXT9KNkNvMiywa2JqSFxtUwAiM8Ns6phdd4zW2vjwtDDb81ZqEBPjSYEFMtEttvzZ18wWVaE",
  "key4": "4jEH7XWvKkg2Gr2s6dEoANJa3WZT3yEz3HndUTJ2NFUQkh13axuK7PWyXgKXKwEtbjjTo4Qrx4hodwQNMaXDK3ia",
  "key5": "4jBLhHx8LRxmxNPZEsywkGUvBTUWPFRJ2Q2QdbNrET7pesJtBVrEPqoooNgRpqNtwQjzQcH2RifiBnaiMzkQ8zF5",
  "key6": "3Wh6WJUZpYtZ9xZ1bUfCxPP7ccRmqW5am44u89AXsan8emQNyodjND6DdwnLmAQPpoeXaPvvaAFGWXffg7QXgZKP",
  "key7": "4SECxhdH46W5oosSypqTvWLvWiXF31T9vALxf8MhtW3JK1sKGKPNBBYMvB6Fq2ZvjmV6SutH5DceNCUhc3hSLBxb",
  "key8": "5VhTSDLo3PwZ3GpjjMvbZPh2BrrXCj8WgzKzriJ8RZ2MwLLxyusL3R82CbGqUooZZkJk7CnAP2x6aW6DU2MLpQjT",
  "key9": "jD4yLGp3bcafaahB2oUjD2jG3K5peSsNtXQ3R7QrFsXg4rmnLnS8E2wTp1kGwZ9znpDZWxnhMAHzkt9mzURC4qk",
  "key10": "2b1kSrtpmRtsT4c3KDs5L8ykXypsAktJm4HrUv1zH7SXqMRKL6dmNuXXzcoP53mYUx3NM1Bi7RNazEX4DKL2SWLZ",
  "key11": "tx1kboWsZ9SvVuZny4cK2GBxZBzomKR5KRBiVaQjrwB7D38W2BcXUuCtBtqfmXftukq1K6QRp1SChyjvMUv6scn",
  "key12": "41XuLfmC94hqtZfwQXMYTQgPJ5H38WXSJ8UpnrvkdBn8Rfg3gDZvd7nTky3RooJVVxdYUWxVwvUJb9cqSHuNhqKr",
  "key13": "4bKTQiUfckPw2NdEVYAEjowo3bUP82KfAHGLhgurh5AByChTxSexppLMr1h6NCyJo9TByMNy5hKjPqA79iPFo3tB",
  "key14": "qaKMYwRxjKK51QdLSw4tkHrL8JiCR2WBxKz25Vc9PCgooV8qvXC7ixAA8EkSQs65DCEKGZcJ2pxPPQYMBf8pQ3K",
  "key15": "2bVT1fvNJ5sWSznzcEbCfsX9ayqSqMjzmWZasCSSL5kbYyXrCksoX92oFnY9kj4WNEEPQmTDJLsvZFcbG1yH6pdN",
  "key16": "2mXxwiy3zp13KwiJB8KrCFCuQgkRzBeQBXgvu8NwU9f5Z8FtdBirCkuJqYs1WiCqhCseM86bCWFXdwGmv1SftqzX",
  "key17": "2QTS2CtYeg9XgLxjn4TboAcxFmz3vyqbchDhAsWSfRNRK9BRihnzfnb4Vc3zv3eg4tKzcy92FasXpX8bCJaNAFAq",
  "key18": "5hQ6YTueG7bCgfsyVm4PbAaCzcUS3ndD46a8PqM2DBZSaRZuWgxCwVkjXEmeXnXTqgsSzpxAWdEeusqepzg6msyP",
  "key19": "2qMA9ctCqQdkrKJLRxqNS4mXJDpxSrZXUwCS8khTVpqYhGn8Thjwup9R5kXbjmppdMbo3tMcTETm9dcakfK2eRu9",
  "key20": "3dGGX7bVEcQwZa3fSsqgKLy9n4jgNqSVjp5YouU8iV5JAbA1jbZG3cVxmHGmrnPDquYom8iFZGY3Nu2cBKBgtYRA",
  "key21": "4hdQhV87FUqJ5U1XdJzpbPYTEW4iyNbJyb1vUATRJqM2XjvinvWar5AjUco4Y633EUNqw7XvHeFea1fL9sTm4V4C",
  "key22": "3vaKtso8Mu9DD4KztwBgtJEr4PUS3CnxfiEhTUM12kMHVbrn9siYE6wCMvXsmLnx6jJSf8jLePBzqkKRYazeqkim",
  "key23": "fJsftq4Dr9hcaLVysiJzfP2TC7tvnx8cmzPgBqXfdLWbdWWPWNisrUQjc6Li9XdE7wkY1V7NxMngKJX9zyjAS9U",
  "key24": "5BwWGu5iDX7QfS4gtic51qhXNbwiQ8fzgfJhWUt6sWSwcVV4eXPwDmyMJ8AuqWyWft1N3SgZH38qkGXceuHZno22",
  "key25": "53HU1RcCkcWhSCM7dHESwZZ29w1mvX1PoGYhB23fuuGoEvfqUPsDcD9MeJSc88VQrBXyQBdERYVpLZ8svwYtZ92C",
  "key26": "Fq2L1WVvy4gSGCHVYQiHkg6ZiJjw4VMPuLRqnHY5gJXamoKCsxGLGciUmRiVxLyDtU4yda7Lzv3zEF1rrHgjk9h",
  "key27": "4ZRxmVS34auFcvyNxt87Tv3vB9kC5wLXetbkeqeHbStAmKy8GreaXm7hU5iDpNKZUx5yr6ARAaLwNx8VxQ2aVfrK",
  "key28": "2PMJ5BWSRJt26p4SYGFo6PbqMwQVaC5MnCXkDr2tABDwBAwjJ2yyBdujtwSEtEEB7UVAv9bbhj75bYN2ac2WPUGj",
  "key29": "4CYRUpR2L5PW7ZVs5QC11hxJTXhN6XpsDjufhafRwFqn4Pac9PEHgN4ZxKXraR5snojTp86vnUc3v3GJEv6QyznQ",
  "key30": "3gJnVDAagzbTbu4duJURZWi3vRF7bgizHFTh5N2UZnb6ciZ6TYP2HqqTajR5MwftUcmMKaUzqfw89sWh7ZYKyNSX",
  "key31": "4Bt6MsSAgr2xhdo9nBKtSY2gtGgrnVDLx4Md9DfUtBLcJ3r6j5b8XPf6Wh6eKZx9mbw8SiTMvjGXrA8AjsJNERxj",
  "key32": "4Ltf6RMp3AH2un1ujP22fiHNk1Vc4aT9e5pwsioCzepx5KfXfQxPznCX7gyfvv1N4YY6sgwZPfp4h6aPop1J2RXS",
  "key33": "wgJMvLYqU8P7SWtSyZtqocAQGN5Ttivxh1PvVcqkFhAxrwVu7LhGkkJwwH5xWhtda6rDWuB8nCcrxfrV5Ejndy5",
  "key34": "54ZCk5Lzp5EiRCyqjWZ74M6LBCgoKUXAREFiHMohPHXxuRSpv2XwMUyFeQV84a5Nq99KpMKfxSDwKUViKTBrCevm",
  "key35": "3gnkJGfvWDArvzEJnfEZsceXpdXRxpFqRa8MFwseFpLMr7VxuxAY9gfDBQmrQxbr5tcJyUZFf24afKHbUx5bTuPH",
  "key36": "2wJeFevX8dzaNkCXYSQg3RYH9c72HPLRTMPk5mbaP1BspPjdckcd8TSqME261LrTkScgw9wSF2GZxuSjncc6yCKy",
  "key37": "44qZDky2qcoZRmaggkW5wnu7ALof4yi6MKYsUQMaA5iQ7Z4GEYbqkEmVfCxLDnaDURAhNi9MN9g4vYhJvs3T8gf9",
  "key38": "4hoJK5A6nnpgujLwndxougNT4spEs3BufM3bgTSzJLhTzLjXJ1eyDSczgSX1zJphRMVnnTg4mAf1YoK74EGP9zKV",
  "key39": "42TLQvNEWjzw45ETqhwn9NSEg52yu7S6UWDh5E4DkyQWntPoh7RLSZPJrYFxYeVee7M9xx628FTNGTydaocjB2jo",
  "key40": "53o2rjy4FNvxpV83Qmd6YReDxPwCCAvSXYECxBPzB7P8GZWyQuxwyqs3K8TU1LPAoqQR9MNGYJLMS8avDmB1rjQS"
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
