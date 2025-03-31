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
    "4eMkJPrBxeBdYTAh26WLCRsK48mfSX51a77qRwUjpK2o542HxcBwZeKXNz3vo55tJvqDauGfUiDdu4WMmAJHUcjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DmrunEzaXGrKGvJHcnfF8uyTVdDBzfEfXYDCUDF7ctsDJxin8uEAgaQJUQq4gmbk2TdKGEMAoVbwEViHm5CS8nr",
  "key1": "2ucpYhoArZUvPMLCXMYqtMQYv11UxYax2oKMzGsToNro2T7FYfGN1qYMJQRbqwwYr21pguwyhacxeq3hLzAyf6bT",
  "key2": "roBbmLGuVN9yBXnhxgTwaHG9itGb1bFJPxxitn6WZv7F5Yux6nnKd5rXMoZEK4AJHz6stGkFvTyLLuJxdTp3a7P",
  "key3": "4xR4XmmfLsfMPZQQUYUTJ2Mf9cHUC9JaNwLT5bmFNG8M3RiWGr1on1brhqBUYZw9sAy1vBNkY1ReBEmxWsAb52Vc",
  "key4": "2zojkLrU3iJJU9NRzrsq6rdnh6HyRFgd5YXoVvDaK6mqtt1fKSqNx7mFvCjJeHjBFsS9xhJD8tCVjV5NQ3F6UM9b",
  "key5": "2R9p7hRPAQXLb21xjApXTpuH9b48rJQTk35rEtF1oDzS81oyJ45xVEAkChyUaUo5YFFpVgCXLNpdECR9VQc8ELTr",
  "key6": "saLHCDxDk3azv1DE8Jw65EM3L2kvZzqEEWLn9d2yjNt3daVcViDDntiv6b54LVX2b2LAeuZ7BAo1dV3jpXQyRLd",
  "key7": "2Z1JwopawVXMnmhpguG8tCn4nEfvtLgTootKd5bjLzPTeSStagrqN3nL8tL7qwJ3UjN9nUGQBkzp6mRfbuCTawQe",
  "key8": "4wnxUa273xmmXNEMJnkbB3HsNoTohgMVuVrFPtqmWDfxgTWmRiTmgfr4HixF3gF8Ht3jYKwwA6tmtQjjtgwG4ihF",
  "key9": "4GdE8dT1vQCEQ5hGTqFTiJLgiDz4FeuHfkcnmt6t9uuvUvTzS3ZUfsZpSxjcqMyK4mnhk5n2KkdrX2xopg7PCzL",
  "key10": "c989Me1pAoW6jX54SmJ2dkvvtJf9jSigk31fKz8v7GrRFM6BePVWNLyRGvXXzja4Gm4Z9XPv5mni1xVBkCGUYdV",
  "key11": "53YYig1fDH7JTufiezxqtpcRaPRn8UYgPDBos5fWr5vMfaAwwaLMqx5epDP59rZKBixQ5t4T2WG3xBitu9SDyuwk",
  "key12": "3dEWdR7TzZP9HmGgPj66xsjiZUa5wi2DXb7uSra4W9GyEqEc5rjEzVHxsgtQjp9dSVnvCGh58UVxdvBBBJaDcNrd",
  "key13": "5ZhJ6M6cxbEcqtZHhPaREQxT6CYVfJKjxatdYnejByMpPPfP9F7DFpFKBauMpgxRaarAogm8Wny9ymKZza917QQ9",
  "key14": "ZV7m5PPaT1UcDXTSh1GNXc5xn3xvzEphvbnH12KgEEeVx75tXjFkfo77VrLB28aA7HU6i9xu9bjb2FgUBiDVKiK",
  "key15": "5skeDd2bmcMrobSejqjK2z5SBwLLHhPW3xDRgwJixUdvaVUsFPUL2LpWsuJ2aTadAu4r6SWtCkhuFbvt8KZSN1HH",
  "key16": "g8hTV3UmXypnqyHy3PHzDYpNtSLUq3gGf8q6fcqVnyRah9PLcYhB8tfsAsrRHoV5RAMe3Erq91VB7cfp7GJpCXx",
  "key17": "reVKjLMDVjRQCuLNLhoSSZLPnFJqJm2CiiTSsPHaN354TMpbVATNWhHC8N1uHXA6iqGVS963WTHm64CHRc5yBjQ",
  "key18": "L1qScAQjWJEwZgFTfiupwiDyMxVo2kitKZnQx5CqGLX7H3tuY5Dbq28ceLzsWb4q69ZGTrXKGAgcG48zNRPcXAP",
  "key19": "2XHtrj2VUq4368AqFTXjeSS9f5a34kEFWLEoMVaGPfwc2sVcTMAD7gbhCRUDQotx12X1Nu4iRhsP7DEPDskNDYwG",
  "key20": "4y5pxx25DkWiCUdJ8Qcx8ecEHCeJuRiQZnN8hZP9qN4pLQWcdbb49FhH6vhMPTfKXa14xMp4qRDmchNK4gDqxCub",
  "key21": "4By5ZbmUzscKvWwvQ9gCFMNvwhai2RYimmXMwtjavCo8kyYc5gH2SLb1irYuNQXe4gySPovVnVUVxNwuTH1XA1Go",
  "key22": "5598UuXDZY7uzHKHzAXPUrPXH4XZvU1gCVTkMkYwek939Moktgg14pFbyNRVrwiHitGaVBtbuuUzmht6Ekq2rPK6",
  "key23": "3wkNahUXvteTdBLgsVQoQys2zVirTRzC6sL2fzZmtqKvddei2rMiY4GU9fnk6o8va4T1FRyCSSK3hg4XBKsKc7Xq",
  "key24": "3NetG644N8ykk9u6sjLob1E7dLayyaDrWMcPoM7WXCLDgobAWCzYCPTeJrS9JWiXqGfewnoM2EMfoBT91QkBsrLA",
  "key25": "2yLmz8YVB3jpq2HAzsiXvSLmcRHYC8pzUrhaiCGVBRAoh3ohMJH3Q1j4RasxuZCRfN3xzF8zqBQ7uqet2tktUjqt",
  "key26": "hFUZvUcqDmVcuPh3ZAqzwFS8KwQrTWRpbjtcNi8rqBS8QagiaQ1Uq1CyyZbrHupU6kWk6hXmnvFHY7VtcfVdjm2",
  "key27": "5HmEAvKE63Svq1kcqLrQMG9YBxLyHCraLgPk1C62943a6hCsY8vbNyZUVMbqGewu7hX5UimVgAWXUC4J14R1aNke",
  "key28": "4rnomCGBSfKqcFzezWBbzbo37yaG8mTppYz4YWafqq5MJaWVLq78SHVhY6471Vf16wCQ3CDG9QdZgHP2vUMX29mQ",
  "key29": "2bPzxRQxsLDtvEDFDsHeqypCJi5VoSkA2nVLXphuiAg6Pg5xpNcTGcifasJ33d1qbJviBkMQaeQNdAQhbhAv7XJx",
  "key30": "5TeMzSSqqSTWNZtB6n69Qv5vG8uMJn35qPKPJGJo1QTYcAczdxsB8AwJpeZZ8giKVftvrm9uVUTGq5F1f9xC2BKH",
  "key31": "zGS9tvmZ1jQqKHDLKFYr9vvZJ3SMHefY1GepWmaR7MyscoEWadt5MwEjZU22zb3HjQz16mUuN4GWcTThE3neG8d",
  "key32": "642nyZBJsJL5gtN2y9nkXu3izeG6p8v7WZNymRLTezTpmesGj1PFzvtG9Z6CEGPz9XRc7Qfv8i2rYV9JrSENcqvi",
  "key33": "5nbXgouvdhH4qyvB7nN3s4bTG5UV7584iLDqCXq19Lin78B86hVbVo2rGSs8siyw54fVWunZLMGdcrNcjuq9WvXn",
  "key34": "66o3ABTdSLJfYPGWEbBv5JMpTRXxq1AHjA5uRU1YbsdnAqH6LUAT8tT4ESWTJEZ5gVVs427h6c5QfaFFtQmBaYsv",
  "key35": "4n63E4wDnmMtLk4ZghrVP9M7FdMMfyv2dQCRmnLeS38Rhqvjwf3tCmqkWxKtrAMMHUXesrvSS6FSm46Pmp5VgFJD",
  "key36": "2n82hAdjocL98hJZUk4y3vtorzhbQzLyCqMcSLA8VP329VByimBmLmJmAfrV7ggThCCzHYvx7UpesRGQqJCiPssY",
  "key37": "3rtEG7yKuxHLodEU5Uyo4vcFbmbnBctmGYTDrbJgmb5wnTMbVE6YX4MqR7oLApUTagumo9MeAaGtdwvaz1xEC1x9",
  "key38": "o3Ckm6YQpTYZG3DNpTiqKmvnj5Ppej3Uq15b193bAWM64JhFGQB5PkxeorPuvypSs6CJNaWm2XDhUNtHaLFcbxA",
  "key39": "2uPnhkC6Eup71geb3DPh2XRxa7DxqmNfVD19V4EnEftRrHZSHmfhg8gYi56nEEHvEDr316Tcvdsn2gJcmy7cPq8o",
  "key40": "3HgvRBUxbw9ou3j8HxYejEWYZpoDWUf51uWgZaUxw2NZf1KGavUrzvpL9DztQHnErZbYk4FoJCtYta2TEXXdLR1F",
  "key41": "4BZEV6AAgSUCJ9wMdfDqf88mk1srnkXMQJtRcMaQnYfe4tXRcbhBw5Gdq1NyLkYeqKrAA2wE6vXccLzM8cMoNuY7"
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
