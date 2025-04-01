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
    "5LAcEiNHJcMFCcSP2McZLnvZBftWKsZTVUGH6BVwjX6umty24kT2bkZSMR14ggtMkF3eRyWxxy8jzoAqmCJHSkgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o9dP7x2MTLMT7QyyTgLZS3ok1hwhvJw3YtwH6oEY8XLZU25YJEGY7QtXkqEwgQS3FJXmtvxy6nfNGgvXW6hx8fH",
  "key1": "33VgmxRPbYkb9UHEXX5dKDTykTdmUuayEN42mLkRKSvfMJQzaGjPr1hGogiJnHZT6YPa5LzK1e5ApmddUHTWUwhW",
  "key2": "2X7BVFzzdj6N6CPhz376nmFh2V2fjMXxrYJCHQHNfmdjb21NsmkU431KGCz18RWAZikJK9tvWztrLFkcc6aTQx96",
  "key3": "vtN7XDjRsyZpXrk6rdN7K5ZDBvRCADkfyjtGmWro41Ej2PzD1DFvDyscAGDRzEJBdPtnVfTLukQoCDTcbXsPv6s",
  "key4": "2uKrgZCiapbdfcyRgGLodDXekkkiD3tY5ArCH2wAZzfpmLvSXCyQwjpyQZgcKBApSdSHAyLVFv4MLcs57FVnpVtj",
  "key5": "4PXd5S37rs79HpspJ31xnFBYwWfXp6Q6tRs3z2acR2V3bx4CTvbGH5wg4oUWs1ao6FWbJ48kGf3u5GpCSgApx2QR",
  "key6": "3jotoh25PzeyMuPEQcFN8wnY9B67mTWpv7zbpSrfVP23ZSNcvWa9LiKBePXnTp94zqPD2rFefW8pBZAEZLRUg3Da",
  "key7": "2W79X7yJSuPXrPEgYz7CMhgwSjCNvFEtGDgv97UA9GRi2gYhPQme7nZ63xEdNuf3umrSYk1PqKNHFSWMUMb7U6yD",
  "key8": "4cz94yQu34i63ACSrLhrW7ErRnWYQFtiqWwXhJVfCXAC9ZT3B1umPWdhQrdxcTEcSgUim6b6YVfX3NyLtqYXNJZ1",
  "key9": "4whDQVFu3FU3ZkTko5DLUgt2ho53Q5wE8tjJM9p1Ku1k12DdGAbUxjDx6kfTVgzTRxEbDC9QeUQyFm8HBAsZXT6G",
  "key10": "3LDhKPddXCqSroEC2uWaRk6DLGBXVNHMUgUigDYZiv3kPXUhTYs2TfhZx638Aq1YuyhG6weiuizMqbnD3VfxeKWP",
  "key11": "5j3tYzHKawNftVLH7WCMmYGLunhzBcUNU11xXdQR2zHh6HAAmJWJs3zoeykSU5ZSXbHx49QhMUThZeqKDxQAkNzC",
  "key12": "2SKeEUMCekNakBBeRDfjmq98HNRL4nFeiWJcN9BdG2JycwNUdigqFurVveVVrQYEge9ty7g7AcXUijZpWJ7auTKx",
  "key13": "4szBaMkq8Kn4D6XxGZ2dTRrVKq71kPLn3fSshdBVJ2f3cRQEEwsg2hoPog9iwF4Ebsq1nYaTLZbvNn6f9RfA813L",
  "key14": "3p9JySqXBzmidp6vuvdY78Ln4zhBXpV96hARCEixWSCGgL1uqQ3cscuokv6Vn5mVm7G32FujcUsbETGuXD62jgba",
  "key15": "4QA1oPNwGX6y1RZn52TuLrJReuRJBiQt8iXxrbfKBp2fMry2718PG56Jg1exj1es1WX5myEgjNyWXg64LgDXrkwd",
  "key16": "3HRNJFBfmZ59BrrZ8rXfdBZ4tq8FHjtWYchnMJC8sYzSYJwepNV2JbUPMLnEC42aLThVtYNr1qgkEm9VJxQyJr8z",
  "key17": "5jmoPCJHUc6hsvU42MrzMqjD85a4fBgDMKPb2BuCHvsT7AFCZGauyMUhKb1HCvydCMfTMkC6izfSyo2z9cnS6rLK",
  "key18": "4sREB6CteWmnSYvqfatjY4VfLJMHssth4gTbc8Gbqgww94GWZaED8ipPgqwjzfP8gw3asYpts7NUGgKs2vC2oDeg",
  "key19": "5RPGbFLZfLdcCQyxq9pNd9CaEYs5JLqqb3FeKkznzrS7SBWoVHF9xhAYaFHSEd1FYBcsNJukhgPxwy2GmuZsPFDH",
  "key20": "xiJknXCvQ5VMtVsc8okaz9SrT7JZFtkFvVFGbBnnZHEjC33sEavJxgE8xZ6dkRt8pNwfjrpUqxmrNBH681jqWtE",
  "key21": "2v4qozKf4w5xUM3MZL9Pi1JBZMEKYb2Q2RBcsVGSWYLFJFWubxhfmyYgna7vZBsqQrSTvZuzFXCi6vD7v6eHxPfT",
  "key22": "2PPQjPP4V3PTsuP84zMrYKqWyureeXASbSWzDFS1jkL5XLBzKyo3tNs5mSDcHLZVjoxgbLAsFgm11TxkK3XyoL78",
  "key23": "5fwMMpSF9c4z9ceD6veMzP6sLhy63Fi5VrodnCtGKUMTpkp8Rn7csHnKhN2kbdPSpbtEMBcdt3uw8jym1VXmBw1g",
  "key24": "2ZbjD4xDbkHhU53qr5U3JYHHJHZ2ncdHYRxoGEkhbvfGyR8isfsKXxSYLGtL3XZDkEab4BL54WVDBsPH8fxkCzp3",
  "key25": "3jCduBAW6uisDpXpsKZkZgETBYpfUDyRz67NLTKdkZBjANRvQiXaWfLM6bBMk8okJtkcq8W1NSe1NDp2Rr5mQQ5Y",
  "key26": "5HNuRaENGbx69Z6JSTHmv6gLQZx5N4gEAthmmp1WUQawnLYTaJfohWQCe2R3dxvhzBvnsXecsDsayYxfEGZqpeCg",
  "key27": "4ZdduxzZ4qR4WUmK5xPKqYBvMfjMSGwhwL1ATMwdPpqAdtg6sXXEXkgwENmZf2aKZhnGFDiXzWHPeNj1tTMQ3pmD",
  "key28": "K3yL4JYSyPDuTCz53AFEu2UUA5xzKwLg5bnyhChVp3DSy2R83Q9pLTQJVrNLee6EHt1bZP2zyp4VZYnpdcUYJbV",
  "key29": "4ZPRYKHnHqvpYb7kspLHBTcUuUC9pAwGFa869w9CsUyiwfrJxunmqdK9WQy5TGJ191o6m5bbk269ymr1nr2DSK8m",
  "key30": "5WJULd5EHwAdtBpjv5uazMDbm76iqod4vCYQQFfAwgDYEHRND7cf9KtLNTJ5jvRYkHJEsphnzR7qivyDmzWqonPt",
  "key31": "38pYy8iyLviYBjA9tExGct713k1ySoGzVyyTVRmFHkgTEvrWKp268Ti5HKPzX8rmtzA6RHhCBPtHYDDYEM6nbZhk",
  "key32": "2Z7s3GGEXUtBT6xEShJabn2JsRHQ9EZKrCQJNSGkDDEszRXpUJQb7QycrqJuQrMuvim6vSECQVVLSugEvvBfiZrb",
  "key33": "UvzAS1nPWfHNP8nN4gYqQ1qg2Y98AV3C8zk1Yp8F3RahWoiJhG5hRk9pcBVYvp15GwKv1QJJcTpnM5ADuPUU44B",
  "key34": "4aheNK6NNvW7ezPtFRXL3vzjXrpEnuB1auqRj8xUoChHL3jsCXKPQv8bLiaakUYqRcXRpEPMz4iLEfEiREdF6Hgg",
  "key35": "41vE8ZiQcPBvjaZwYXMMykXsYkyY1r6Scegc222UEfjjQHteE2kgPWQDz4gjJVaDopVEesMB5HMSsLPrspVn7Mgj",
  "key36": "49rsRQT7tw3sbKUYps2ifXj5KFp91cGBgYoddVJj9LWZ7L5M5ngbhGjuXA3EqbRJc4KDBcfoRJTRkzdPPSS1FR5R",
  "key37": "3VKn1TNN8Q1W2bQ5N1J8abyrYpwRvUuPCfQ4tz888h7EnnAJyXEeXzBWRR1fLUruiYXatbkVpBCR5cdBZephPADF",
  "key38": "iFfg4xDaq4CRwrPPL3u5VsAmq4Mykwp6MM26in3wmJPj67KufKRA1sLkPQobPqWQn1VtAnbenwN7djUX63igLbQ",
  "key39": "23awrS4Z9oiMGgNLuGqbidU7CWiosaZJGuQyXJybdX8oiQ4aAczGCA4QFjAKTw93pfG5aqS1kMBxnqJfgBX2GgxX",
  "key40": "3pYmkiXUkrTcfBZ7K63FvRvQWsrJdYgTNuxkBr9bDd5uSCYvu4HrRP5Uo2FJdt1FQKoUtifNuFtm3t9kWKJjf33z",
  "key41": "3Z7DV7BgmYS7tiNtJvmjNxfwpyn9jNxwd7bFSYVpPrPzzuiLQsGcPzuvjMjKWYmXQLrmb9JkujXmw6sUSCJmCr6Q",
  "key42": "4xAUqunj698WG9vpUGhBrZWXXQed1hQogMD1gkFWRhGFuDYxuiGvR3koWT7VsFmV2iAiXy28igKXtmezqtbHiEim",
  "key43": "5sRcFAEL9cHuZhoVygxLRTRtHe8usvgzFqWHrdPyJc3E7imUAi3epi9XNvjt9ZBmJE7BwKK6DqkUBnWmWhKvdoFH",
  "key44": "315C5yiYGY86BK5RenR2mKZNbFmrtb1W8UspxkrbaVVGimcH4whxYaYhkcFmQQUAUPX7C9thfeYqgKgj7Aw2gHR1",
  "key45": "2fC733PvX4kGtjmVxn8mCL6GDxgqLPTE6pxhWrR5qEr4Yeu88Fr2JtVWp4Y8sTAbL5MrmDgQvzKg568ArAtqemYR",
  "key46": "45hQUzuqm7ZPmXq3BrMVjcQrHWjmE8QKQ88Xr4wmFPetKdYgbKhkCHFAbVzifULPGGDnCBKkskRKVvK233PLryk1",
  "key47": "pG8rqC2wk8YsrYq8aSSMmYAUKKVTthfsqqhB8n8FezBzsrvmXqk4skwTSZ1RSjMCUkZyxpybbofgohZgSw97HDq"
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
