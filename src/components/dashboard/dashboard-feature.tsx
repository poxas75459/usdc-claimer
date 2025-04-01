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
    "3XcVyp4o8R8mqhvRZ5oCJGck8vV6wmYHSGnSJnSubupyHRj63vvcYbfjaMurGnGa9dYRQUGDJEkoK8QgzqpWF6eS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i1RcZM34S8XuXp6KzhjZmPKQE1wXZFkQSewMWN5mj4EUtHYijU93V8qqiYrjJY8VkgppKDQT7f1bxFKUgHUC4Ar",
  "key1": "3XaPDHj4P5hegeq8gkRKS1ZmSsNr4aL6sruu9VYTmRVvMtncADtkWM5HDQUNG2fx6QEzPNETVuUtPXShSyk3zpNZ",
  "key2": "dDZPExdH86JkTuzAG7JS1JjoxSrXzi7rjEV99wpQxtUcQdsoqDJs5tdEga75vdB8kkteNo2UkzREtGUjcvH9hts",
  "key3": "4hGys5mr6RPsuJeBSzs9Zd12DZHmF1XSCFq7nfi93PW4gMbWuW9DUj3maQpN3oUbuKBm2ENSTFRoUw46vf5XBrLH",
  "key4": "4mGB7H5CDRK2Hfe1eMJt8R4WM9XrsdMRmiX2WLpTDTsNBTF2jEZkej77iMhkKeRBDMg96Lx3J2KXntFM2GKWG1jm",
  "key5": "3h4hkvHCXb93hWZgxTsXqohQYcpZVFLS9PyGLShXcmLMFnx59k7ryBUsvxbkWGh7H8orGjqijnesCauVvVs7jFVi",
  "key6": "5qMmTZqynKVD2Tg5wUkEfWvf6WCYww4gYeU7tafxGtmvZbW5aUWdWGeyx2bcZGr7E4bv7qSBwT2TkrsjcHJSnjry",
  "key7": "2nzabPsBZp1fTeFiSqUEAF9mo9opPbs8g8GYgF5fyp6DSGhGSghhYXAX71RbuCHb1ZVNneSosokXRfejFz7fnXMz",
  "key8": "KJn5eFCEJTQsmLKYs4X8X2ceNbzYbeG4itqxu1oy3Snp5g4xrRF4iNNUQkzTjvnvugfSBhd3LmVAdSHZNTi7Wxp",
  "key9": "5deL7tJZx8TV35Kogn5hpmFtn8Ze18z25XUg2zREJWPrXzXdJyosx3kc4s5v9XbqnAQ1PPiT9HNbGzX2vW3M7a49",
  "key10": "3wZtyQTunj6qehtxdRxZuDMLS2XSE8yGCi8W7KwbxySDWwC33McSiTLTyy52w9QoTYSgLATrD8XsRCSygsDQZkSY",
  "key11": "Vx1AHAGzxKzyC47JjRbDuEpc7EMf17KubooreB69SEHDoj56PbjspmYi6U1iasqwE17YNgW6dYY2UwPeRz23SQQ",
  "key12": "3kvHtQfWx3GubtYYuY8zbo9mFcYNDDL7yjtjXP9PJgcTCJKwQJKqxURrXS5eymWNwEDNVSzTHXhwqKCs72Ynm7Fn",
  "key13": "2sVQvG35HF7V6kmEVPHp4obYrRFUS2wThYvGcjSsg2j39p1W8JQ4RQKyVp9fw4BFQTPVMS7FEE3RgnbKuVrS8dG3",
  "key14": "321bQ8qb8GsAopyza13xyTSyxLKeSTyHAGWhhWAsjLMkHCscExrbTCh16u4i5AL6CPKVjnsxqtKedXG6wo8ax67J",
  "key15": "4MgGtf16AHvpupZCXH63M6KddscqUf6fqPqBJcbPVXLNuFfELA9jBXzNCAwKhxVoiAtsBm42i5VrmhU9myTZzGJw",
  "key16": "5sj1EjuhbLFoQcKo6D54Q2tzMjwiLEt7BSGcJZ289XHZovVJu2cAua4wMLtNnyYFb7yZBYhQB1TgV2FeSETZBuYD",
  "key17": "2iiyw1QxxfVQvF8rFyVZH31jN9dbXQfH926mfs7GnG65gme7ogqKRnox6rE3VkdgWqrN2SKpBqWMbFaXgx2KxYij",
  "key18": "3kCRg61Y7BnMhqcAjBdvkW7eSWsVjLubUqCwTxLXpWntpaHMVhJiaDQwhNohTiEXirimvyprv1Se6DjZfPzsG39R",
  "key19": "2NwVynmXcQFSQCQqGQ3GJ5Gjru47W69pT9FaKNrb9iq6yPksY9nhtBNaTYR32HqvMk9kpb5XfHmmrso13qFCLLSc",
  "key20": "2ygEmkzpapCZdXdYPA7RqEAHWA7x7utxpdfwhiBGPcQEJPmkAtR1gCA3ZuAmXbbtYw3qNSpBfTrtz11zksZSTJEs",
  "key21": "3RzErMuDqi4qUS6ZcKyfq18bxUbiHwBJF6TkiEXeMbFJMUyb5GNgkQkhhTPDU3fEUBevPPSxxz5AM2B5JeFkDeQQ",
  "key22": "2R4Zmr8QuyQ4EEC143M6bzgKYphYhtSnjx31JhxqPXuHEMPABkxbDSnByXWjfR4gRs8uBtk1Ec5JEQ3Masti2R2Q",
  "key23": "3xb7ADzPKNNcEY1LJxrRioEtXnsnnNWbH6pqjYSJd6Yah2oqSfavX3HmzfqdnZ78cjZMkMBy169ovsx3Q75tyJoN",
  "key24": "4Ey3nJNRNaJfQrLJfJnRF3hGeC1m9CB5kGRD4UcgBfMZHfCvvKwR2oQeC23EKmAkQrTEGzPMhdEwGpV5oRYr7GvG",
  "key25": "2dKRhFizbGAEPnEZ7SQfkRzBFmD8Db5pUeoz1py6epgaX5qpRLe6qkxoakpMsTgM1Hzanw4EKmUGZTGyqPURXmAk",
  "key26": "3aJ3RXRq9EpEvLu7x8rB9nWAp86qc2tXRzT35qeDNxrpkKqzaZ73pGu8ZkJXxctcwApHwcMzdHxwr4far1ybgugi",
  "key27": "5j8AqLTB6FneFuJiF8Dey66GmhRkCDi5e7rzjPYLKBVKYb6riEPSmwhZwVPXdifmbXqRnsbgCD4ynmTNVUj7e5R3",
  "key28": "5TsDFFjx8x7oX3rgX3YXp2uB3Yp2SVoRQbsyhW9tN7C18wJHgZSY28f59Jowey2b4Tss5jvmcCNFn53Af9Bi5MSK",
  "key29": "2kopJJnb5u1gRny7f8ou5aZapnz7PxkPzDXsjgoYfdoXYT6PHbpUS3Zqmdrw6cfNZJgZ3fainkBQgiK89D8pjJfh",
  "key30": "y7pwLQzXVbuzcwJ5k1EMKY8CWv48HPJRmrjk57bM1aAhxygQH7Svx1eyBcpgfzD5E41kXciVBCXX9eKdCRmXr7m",
  "key31": "4f7ML3ffRN86YMCN1DmfnxpSB5didRJzYNAhVwuLpn6A6o2ELyyixjJjsnweTwZ1nFqaZW9ryHVGyzTUa5PEybo8",
  "key32": "4wpm6iJpqAoGyhDisqzM1BNvLix8vtgF1oJwqkedSSQqqMCmCMeioTxnzfc3HCC4z3X8gvFk31sr4dZS7RS1crsa",
  "key33": "55ChmiMFV8Huk74MjshkGczGcGw6PEornsshJKW7HtgF2CyNgJF2QiiUhGQa9PgXYShVLYJjJtSkRdHz6VrPjUmn",
  "key34": "21wzcWjwCFjP61uGX6wknNpPrV71z6tPMPG6hYhwPu6ttGofYvPVWKQBBjrAEa52nkpUqyKCFAxQerMtR81smtxf",
  "key35": "4fPMeqfcWJDLg1vWEFxciiWNRnEZmrgjeKyFbDo8QdYb78VecTzQPcmWSQMrSvf5XYkwZsVWM9mqT1dk1Kv1hn7K",
  "key36": "3mND3GkRPBNHh9KJXdposheMTGjSMUxePo3VW2bKUnxSW5fhip5RfVAbs2KSHSoW6AnCda5HM7baiZGcmaVHSgjm",
  "key37": "3bu6TtovraVvSRc5tp5EvdXmj9sHWBDsgYgkXQgFTW9U44Ej2tUHd4LgZg4ors9gnqXsFnMt3WpmgUUytqvaz93V",
  "key38": "Mi4PYouDvAM9DsykSEUjdRhcmKG6tBB7QoCuVqD7gDKm5oU3Hp2VjyideM2Jzgu2HtgK3teYNuDhukEEnY42zxE",
  "key39": "4g1WSJMGNCLH5RFmpkbsY5FtgocZxx9te7Aeg3Fok6VVKWXKNGD9nAbPYmRRubrBwpqXYpb2W2vr9GLEHHeWZFc3",
  "key40": "4yWCE1DDYcQWUieNg31Eb8DNGCgiQnaj4tPHd9KHG7YK6jfDw3pmD9HUzZug57hEXkeN8eGt41nuLej6UTHRLA3P"
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
