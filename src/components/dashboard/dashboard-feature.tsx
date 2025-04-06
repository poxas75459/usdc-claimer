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
    "2V3q5kpc3HQEDqi8GkaRLqDk9RYJxAPmnKagQxSxDZgX92yJhTUxf2BjZdZomodYUaNDQwzJVdSKXBKohynqTeKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUhJMDgmBW1jen5MQhx9fCKmQE4Rn2YL2Dnz77KigB81oGFkQUc1qZ4nXqyH2gWQFWb62T3DupdZP1xdXCuJDgq",
  "key1": "M6tYm2uXVPRH7H8rjihFEvX64ZQhZwSEW8GDBY27bmb7voWkT6Td1nksC9Ntvyphi72RVRBZi7yzJv3PextDSUt",
  "key2": "2mR5GGUkxfiVaNdBYMyikGPsYJLkNepZrZt3bbdLcUSeUx35jcbK9bts7EEzTyEFuzURDuiLCEkNJ5TYS5oFxQVX",
  "key3": "62VhKWUJpg12yRrbgH3hjryvQrBREeBoua4kRhMDuUZzvGPVpMwqBZXjRTDkfP5QxbF5aVW7qwDMKWND9uqGu8uX",
  "key4": "25BuzXpUQPY6uqsukDWMfrUMToLtYCmnELq2e5VT8gXJ1eH7sVA41wHBXD6gY2Mi1ZCrAfs5v9qnHqM4EEvp4JZn",
  "key5": "2DyS5SRD7fKrmx1vG4Nz9jti83tx7tUwxZiTUTPkLCZ239qv41e1bNRsi4ySC8uHAdkfYuw8ZYn18WNH88nxLpCc",
  "key6": "3FxcfmS2LNaMLyjmjtZGJTE3jwim5oAH7H8QM969qcRSLmNWYhwgpH1yZqomHffAthMUtnVRAVvAhyhw8WXtxfzt",
  "key7": "3xws18anF7G2DMbqA6eKfNLJ2LwiTTV22nY1f3jBA7r3B6EPn5PEnTeu8BYX1gsgYbEHtP5pwJmCh6mbKo7UmXrV",
  "key8": "gMdMEBRCvkzwgYnTg9JwF4AiFzNTe7rmGNEP4MesJEjQ65u3ApmAfW7uQ4S82qdL8dKzKcnTfTW2jqszSZARXWd",
  "key9": "KkU7zSookZBCL83candoZezadGzxm5RjKjAjowFUesXdEkmJEEWfcVgCEgQfUTNucrCxMc62Bc6EUAKfXMkpnVx",
  "key10": "2mDu3LjHDJZYDYyw6zPaRutSA7KkfB7PCuWCfT4bxgC9Mjp7WGRCZDi1LshUaR97TYvGQFcmowfh2i69NUt7sh7o",
  "key11": "38iFfmorNfH6VZhfKi6JQNWKM4Aci9UkrnGupDVMh7DFNCPfoVhWqheJtsvAS7AzuyqJJjCXag9xzw5YcNPDeSxa",
  "key12": "axsCK9NKXGFfCU53reFc14PW2grhkdrnBm9VG5CcVq6CQC7i66HecFEmUNynTWHxUYw1JffrdeM6a9fTm5UxZqe",
  "key13": "2S5G1DUr4evPPqD9ohftjXxBRppGWpmiEkohanrottfKuHY8JEhmAkJjncSq4DryEKrQ8AAs5bmD4uAZADXwcdEg",
  "key14": "36TFAy11fVZYuvbz4FyBPXQZUHNxoDaSxUdMPjo1HND7Ap18LKqYJyLjXbYHCW1j6QiSMYj1gAABnxJAVdT5LPtL",
  "key15": "L4Ct4meYTZThnFWfPHYJ6muZpDNJq2ysE2VquFnxTjuprXmdbVUb9Tf9D7rJ4KxRVQ89GtLHspdMJKKBPn9UCp5",
  "key16": "21XWB8jJtsLNs6S7Xu7jrAtVxJT7geGSCEZPjYG9vzNfJeLZQNMrkiBnSXV5R2mxMDLgNjUk1iaDrMf6GPmyvpdh",
  "key17": "4QAekJxBiyB11dUc6aNbY8k4CBtdH7jfRF6bRsjgfym73RyCNaqHTxrB3wzPdXkg5EEZ3Wt5uqqYjAXgjQ1SHLTC",
  "key18": "33XYL6kRSkmmD1pvuL5vSMUW4YQ3oAmraUkA6gUQurxtt9v2Gxu2HAHtQAfq7penofGktUD7Qkg2qAYzHm2ZQJ2L",
  "key19": "K3pFaseHSsRnP9LAsdG6byBHcVJDDPpEpapszH8DgEhjxYwBr5dz4CKLcjH4hfJKqU2YpH6iYF7oYM8T1tcor1z",
  "key20": "3RH6rMCgo6jmhtpT7c9LizYb4UtY48KAqtmc566rUZEv1A3VJzXWQS6nLkiWZX5QWLvGMugwKNkQUoW6uhP3zF5B",
  "key21": "UMGpqjmqWyLaxoyu8Vzy6WDRN25GHjebWDfiRFsoMDfLisRio1o1jfur52KJCAFtvcuowt4qqTkAMtNBRp7gB8y",
  "key22": "4EjcFwSvFSQQrhxrWktEoACuKfnp8VEjsakWvTo8vZyd5noP56Ao8FeejDu5ijyEBALAZmgrs4mpEo9Md8zaKC1g",
  "key23": "5KihydUxJDVQdZ1zYUR2XYV9SZfnJYWHi75MEAYV5oGTscAeFdSYsRNUAo92pKC3LXUCXhgxx1vygV4xitqRH7Kd",
  "key24": "5ApDdDttbsoHx9xgq4MBhDTeohm2m5P2j3gmHx2jkS9TZdUTXRK2PxSXqtSECjEVJpAQntsZE4h7HH8pmJi7nJ16",
  "key25": "oLXkg68N48yWyczrVB8vhrSBx2eMk3PZihd9CFBhBsyNWvHzebJ9Ck6vbMcRucsdZXsZK2GYCDWYr4T6ygHXJnr",
  "key26": "5JTsALxNK9vTDGgStxN9R2NdwpiqdunJiXWrJkJct81uexQyzbjPLQ6iAcfQTMvjKHUBxMTDXYZm9LJp8QAg27TG",
  "key27": "5LyM3iCg17RhTsMg4oVYCyRs2598UsvN9b6uJiJSQ7QhRwmszGvAkg311Y4vrJrgkuxzXGu3kvC2a6MVZc2BhQnN",
  "key28": "5ZADemyBe3gwwx3JzoemvnKC7f9rqRR2HpQGqniVh1k9RKtHRppCHK7wzqCTBU2p7ycT5PoMJNJNMV9MhueYXYBW",
  "key29": "49nPz9ATQ3KwjFiSD5qdqR2UjZFi2yTXc19Xu7qGcXPE2hjFNrxPwF2NEDNenRXQXKfEGPgP7erAjatAusyxfMt3",
  "key30": "hvWXEGQ8T4qQGEEDop4HsG8wTJ9KH8oajmTYX5LZ47KZa484UFXwL79Nhgec6CExA72e2rX7UxZWnuGmhFTbNqj",
  "key31": "3iQKenS1QdvN48o77zBhnWt5RZzUE8L3KBAZKca9HkXFys2ACFAQa6AuKDvntd1RYayW1zBpDmSK4F7K1wVfeuus",
  "key32": "GXitGCgfGMDyiFn8WKdGyQJGaGK4trDAk4xYEUciah4PGzqQdaACwmAsVcbmhqRoXCxBHb1GZY7A778eUDxsBnd",
  "key33": "5fqLfMbfPmFmYqkGshV8j7xmStmohYjciUj7p6k2jJW4uZ99R1sz5L4FsVfPCFN5WoJ3C7f17w3TpG8H4JRuNeQt",
  "key34": "2hb644xfi9weJnh4ZAno2XyJUmREAQovNjHzEroS47wPo7WRtddyzu6n3PTDRaLc1NchRZ4HBEcmKTDupET9QPf5",
  "key35": "4c6ggHRkLTKSTi8AotHJQYtQfLoRipykkv5ytGrJLeC2Y4a5hAYwYHTbSwxdVoaBtZkjBTuovh48VVimAmJ3vLrp",
  "key36": "2nAKbscUBL2s3SmfAtD4zJhZ4LjKsCZojjSmwH4QToLmwn4jv9URjam4iLhQ4LqN51H7zTfwGQbMXhs2AGf3rfjo",
  "key37": "3ibnmRmkAx3mv4ZnQq23aPpsReZSXJJbx1ZscrSmCeYJF282pweSz943AbrGfjVtSpCD37Xg4U49LvjtcN2DAuQe",
  "key38": "33iqQz4nv2XV6puEovdW23uQD66iiMZ9MG4gpzAjZURXKFfpfVQn4972ha8Jv1EHudMfFYQe6f4w3VQTsEuvu6uW",
  "key39": "3ygUn4cvhXnB84KLLChq2KCWLiVcwRdBpW39rC6F8h3sYcfejWS1xj2TAMaZ45dQB5WSYsgXNyC5WDQa52py6pwW",
  "key40": "4c91rRoVMiaKv2YKbmG9w2MPFZ5ZaY717X8Jh5kJuKUxx5ych9dDH2PNZz4B9FBFXCuuSzhTJELzsx24QKmeQMdF",
  "key41": "3pVocDRQvVtC9RmJ4U95iLDiHY1zGGEs3gB8mFwsSSmRZ1sBzyCJq1YCw5zA9Lf8pEZwYk59hkdaoMA8oHQu6nFr",
  "key42": "3ZQWT184ud9mptutvweSn9EDFrx8XT5Pqwe24atnCfbxRGAWWbmUUydvb1AxwnDDw6Gdip5Nb199Umpq3CqNt6nq",
  "key43": "aaPbGouhkoQeaHeaTnbyke6fFppkaPqCaLr7YLkWUejLetiPd1jNHEvGfEyUMdr6gaDgTJ4n9Cz3zDVDhHXR4wB",
  "key44": "4zwKbEhMNrJHq1yojgthArjbn2po3orhK38fJd7dfnaShpnTUpqBxfvL7fimCS4Q6RwQyDkFPrZd8TnxaEeX5cpU",
  "key45": "9ToPhTz4UPdSYerVBK7pHzBR9vLeBvVEsjdCoKaZbhpkKH832xnF8XRLGzDRe77cMQ1SSDBD4EpBM3mpz6i4o7z",
  "key46": "5PvmhZ2GpKCqcpePnJs8Z9mheS1fM9rSerPWoeXiC4meoWaT3qBUaR3opYKwYs5NEC8xiCMvfmqhickworWh2t8n",
  "key47": "JgTvMJBWFRpuZmvvoxtfh19uC7KiKeey9tjCtvEo3FD8FmK97cdP9cAB1AYVMEocxeiycEbxV1QdijEQQDkFNwH",
  "key48": "5y5uB9rdcMPir7wG2WATPAnRvV1JWdsL5tNvVD6wm3Cx8BjXDf2w1Ly7MwSZT4ckG1DtQVtHL5r71FP1o8M73NCz",
  "key49": "7Q2aUu7Ggy9JkuJp7pkCTa3uDrboAJmQtzyhGZH4W999iU3gNmUqtRhenqpbeWfSrzLmLXhHTv1CKb67tbxmE4D"
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
