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
    "67opbwuALNhqMtcYqKY9nYhmURMyQxWQ4cg9ozVGj9Tg2zGYaCPZvdKNdTv5FS9YgLJ9tvxRv2C9xGLMWUNAUJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qrF4pBdzk5SkcWiHRfLJBpFBWkf9TbtPwwya8gKYrd5a4UrRTLkmHzWnxLSsD35qJeksx7T7C26XmwQ2Ucujzkp",
  "key1": "3DLw7rhmDSSDvFCLtvwWQhpiDvYZSdGe9JGZH3GtHSE4CrM2QVuHJZA5EEdcfdxy672yEM5nro4yi9x4Bb2csiM",
  "key2": "2x6kou1LwUduwMhynKja98uLkbeG8KLmRF64T4RUG8shjrAYNfe1xLaNqhR9Wawm1Y4ESumJakDDkYwr7HjddkDJ",
  "key3": "3HX7kkj136ZP11hA26BEnVsaS8p34dGpdaVAfLjkfbRhHwbWaYJ6eFb8b4ZcKLFjp9jKhPAvq8SnfwyxnmuTJspR",
  "key4": "ZCgDpRGeiRVjw5fkCAJxqB5QTF4rD3FuoY9QMB2eFGTuQvYrKrpndh6xwqV7FA5necPQkwsimqneZum5A6xPtGm",
  "key5": "5ZjDFYpvwpZAxLrht9vb7mraJGJhw8m6WhbWRCv5SefWBhYG8isscrWE4jVyhAmeVZe3Y7sqcdxrM793eJyNVtQj",
  "key6": "2eH7gxfY7rfE6Qsno4Qd8tV4MkC22EWTTT5sf3nNz2bmtCvoFyJe2readPySusaEJRg1Q18KopDabj8b9wJ3JXHr",
  "key7": "ZpSg4mzWYRaDHkSCnhaewfEawQWjMEvWumuDDTeWMzw6rzgmHvJ4US4VdJmwa3qLi1PYsw9VaJPMxaTu1Q7BZAX",
  "key8": "5LUDQ62UkpD8yMrUqwixDJqHYyQYugrK1AFR6LhDmb7kgbiCViGapb3JTsGpBJGatBqRkEkcLKAkNySBY398kg6E",
  "key9": "3ax3ULyNYz62eb3c6mKFJ9feriVBhajjJTPAXwQi7F8AdE9F1qtxfCjDvTUzXeevriu56qXSHaNXjzzNAnnr3kpH",
  "key10": "5MeDQGUSVZjk47jWht32wgDnug6C9pRN1bnDf5jzSVLW1pzRtmp2NheaM9ZzwopHuKgygi8Xwn6NN1EyhJzmkSXw",
  "key11": "zYxcX9MuyR3m1VcNxYweLMzGfbybj9rHK454FhBVwf11LEQRvv455B9ToT1sikgWMq2Dm6rsTiR4zBTqcpCQJAM",
  "key12": "4jVTiCzLguSQwjfpgTeK3TcvVajyVR2uWxpfDGASSRM9wMMrLFAJR9vBSTDrLnzhv9L9AjZUpwEVtKVVxjmAsFmx",
  "key13": "57aLC56GoURk5NkMgWNfJhtXRvoYFqvq4BBNJBuqrzzth8c3ArFxE3rkfr1a1wHdEdhKTKXJkjr2x2wnswRd2zWm",
  "key14": "RHvVg7Py7cYzbSLVcJ27nTENZmc571HGfghfhMXyYmCdSQK3GocbfExMUAjvJD9jTyGDCLv4uYYvW4PaAMEZcMr",
  "key15": "3eChQF4eAyGTpFwLMQXBGKj3RTJ9BnBPPaTX8dSyxwxBs5VhgQnzUuD9s6JC8Q8tEyYUrcVj5ckMFAJgMZjNKgi9",
  "key16": "NszXQ4yY2oG6Sqbj8BwfkuAusSHAYy7pEvtTibnU73AkN9pGXsqHRN6xkfoXAnJZfUhPbMUiMV7R3SQVbPepRho",
  "key17": "3VTGkegwaiG2LAbA9AHLsny58EgSDUHJfFjk4zkSM7HVFkPDDTnRuvuftXd41tUEc9LNZUQt3ab8DbCEQABtZDDu",
  "key18": "2PaFxHaAgwYSMRY4yPt4dRRmZRS7WDSas6P8tKcnPRKrDt9jSJ7zHbfpzcj29xCoVSeJmYTHvg49ufgQuwdWnfW9",
  "key19": "5KAxfPyiiyEukyY7iC5F4hLGwT8vBtC7MixVy7NKCDHEtUPuPGdKkWRTKdt1G86YLPCv986r5eUmzhtpziZaTeyp",
  "key20": "4HuadKKmnnJfyFtnnS1QVe9LPwH4GS8yN2qxZaYGfSCQL7fNwiY9ZuCQhgTf2a7hVTqMaHAcG6zQbTmYADEPrq43",
  "key21": "U2SRVncjKSsTzEZeZZPTW3QHCM2ZErWiASnzPRPJrhzLRXnijAGH4s2V8Qc3yEu2KwvFXV6M6XSh4BMztyUCpqk",
  "key22": "4EjaVNBuocvA7ZssTyVUUftcw1smnPk5XUH5bzbMCVGMYXt9mvw9yeW34HeXfykNRvxVmm1fDzvwopfVfeXoEhpx",
  "key23": "3eKTpP9nDveGu6c6n77r5r4aDBgaP1xmV8KV8fyBsM9mMbKH4sthWLejVscyi1GGjj1WsCWRrw3XQMRt5HGQihHc",
  "key24": "Bs55Dyr9bwE45nStLdDnDtW7gdxHusd863UNEf5VbW78go9diJtGdJvKnDEPeFKnyr9ZTk4QybYfRVKwe5ZFyVP",
  "key25": "2bbpU4qFXNu3P5DD8tjzHtpzojDeYzYXZV6MwW6pB6fHdHfa5WsiYH7nyw15ua1Pk8uGfBUEq67NLqz8qQjzD2Nt",
  "key26": "5U8cfPbwpBJRsKTN4bXUFGDFvtrbnQS6gCZa7kLvaevQKo1ENC3HbNeu2zDB1ZV9bm4Qr2zf7mGrRGMwNDh5C7Vu",
  "key27": "4mGdPRtDNAMKiQkapzn7SaRdtBVakzhy2pwuHf7MurchtUVdDqdV6Jo9nLvdcCnx54KFiESyQkSSWkeNuA5nopdG",
  "key28": "26X6Ga6f3Q9jRLUcoT5qdUsDFGgivMxpfmEkDszuQSUdNdaWirYc5dmNFcC4vSJRvu1AivuZbU4F5PYNz9DeqR81",
  "key29": "fsKHrzYC84NSVHARDozEHHHNfJV23jgcNEsACXnqttjrbKxdmu3p3UNDDcULWpDsrQHeJ6EKAPRc5mX8q2R9rBA",
  "key30": "BPTo873RMmKr9xR2MtJNNXCvANVdkXEYemn2RXDd4HS2gwh3CkLuPNWyuqbrSNAc7RA59ukC3PpbKQtk12sCuK7",
  "key31": "2QAncM4J2KEfZjqChtUmMF7TcuFoDJmDprnH4RgW6xyK1wbuFmxmnFiEHdGWF7zSVkgiSkPv9c919b7Y6S6fVvRM",
  "key32": "46Vfbpu3Kuw82Mt38iWZA2isQZ9GhJaKJqaxTUn6iRYTg6CeP5kwEK6GKr292jYCBzFpH6ksCM3uoT4stL3gtjky",
  "key33": "5jo14KX9utjhYYAru6LCeadWnxEAfdYKrnQf4bazZKNXyGobJoJZ2Prpqxxz38JGDDoz2H75yGFYpHfUxRU4KZpn",
  "key34": "3Lu3ZhFVz8N9CnAH7etsggHfbguSV9C7kdewnAwYMtMGv57QVUpkEgvuyQSwWUo71LnUyGwbS39iAPNQDq8cNiPt",
  "key35": "txe1oABoxQhoYacR67bSWwGzBVpsRShZXCL9nXxg8BjTc1EK7rhkuTixGhykXp1iaNVPaGGqhUnAsoLAerjEAxw"
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
