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
    "4qsQ7qNQ4fKdBXeBwaVNmMaF1QRCL9mc5R2aNwbnxeS8u63wEgjpjGUbyHx5tHo1HPr5YhqossqzgNxJ8jh1WwFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zX8d73EuJ5A8oqCocVXFw5AXMHSiacD1xr1faCzz5kfcvCMbFqkNMb4v3KtWaCM5bwk5HiDtMjmjJBFBpV5hZ5o",
  "key1": "34FwPcEDLn24B9GH6NCocjbureen326PJ5jQ4WKzgFX9Hig81UcAuKzi6S2fHuthUBsApbVyGdm3oXmD7pYnyrgS",
  "key2": "5o33hNnFSyB8SFkDoHoeXaZPrwaurHF9LFQifgo7hVTt6HWUYSPA3cSEVm75M6tTFsBPVU6gDdfivxNQ8n9Hwjrh",
  "key3": "5dz9cePUdqVQxZ7SfXBtrZWY6U7Q6owBd4CXeirvs2wUR499ZBVzFeXJy2FUPT77V4yUuyUbjieeb7CsapJvTZpN",
  "key4": "yGbHyEPnkSQRkUZABEVmtTmuTdxuN1m18rjsxD9fF5qMaPXRZaPEFvWtaMHLAVTuQ6QZg173u5FCjHJGvtcYKZk",
  "key5": "33b3SnXPXeqFbZ7aRbTLxSwGvdhNeEx1L9o27RkmYTbmLWfmnm4yN1wr7dmWbB7G8vr5YA2gSkUXnXCrVcL1Au9z",
  "key6": "5KNMyQSHerdEN2UDde5cXsYyarnb7xRNGqe8Nu84vr8vbaHkeHZieH9AhpY6BwJim9m9mUuUB9Jtrg8zHz7WNJY5",
  "key7": "2MPtq1Y3K29oSpgPjfRnfwXQ17WJgxvd8VttEuK5249abQ6njJYgEtJjYw1DSjWLSLVPYQTgFhH5nmtMV4JZhRDL",
  "key8": "4N7eAC9qmEjXkCLWSuW2zbQ3tSArhJYdFgg8BV6d9LsCPqfrASRDzWV3YVqBekMb3m6XFMyCkuyutZ3MwmJxDEhP",
  "key9": "23WK8evhqYZb4y6inphF2LTfr87sftoJXaRtUGhMkV1gk54AMqFd4qta5L4F29D7Ld6gma3UWx8naoy3JGQcb4nK",
  "key10": "43sGjLajEfH6ParTPaMZFBny6Y3EsYHuCEhLz4pdTjnWKqfHJHxioJguG3DpbxNtSFykBEJHVi98xvae1nKUFnKq",
  "key11": "4Cp8MsUpTGqv7Ri9hXjHEx41UqZRRMiAc7AE87BJHtkKhVbZZ4YshqkQb3nUzG6kWyU7PYnvgjWHVBUFtQTvH6je",
  "key12": "5GmnJXkwQGtk86RLPWNraUNfhXTcmBfq7UCZVKHKowJDLLh1ifuDGEXHNy98a4rbupLUWJAf4p1BxEoJLZWXezez",
  "key13": "5vtY8Teg2h9vGU3qEycXhXSyEAPCroSciQydKHAmPrFjhFczRhubfPBqRtn1gLzuFyje8i4cLe8JoVrKiRtrXDzp",
  "key14": "4Lbe3EhS9eBMiPtfknfwLnDGV62rtF1iLz3nSPmggujpNbCENDKRLXPhhKu6cZZwKADeCm75Hy3oUQkwZEMoSU5S",
  "key15": "LCQzFuuLjMSReXdBGFYSemFPSaHEmBdE46YMPKCYmTtEARTiiS9uRSBqHF3BVy5VWpadVVPDUPK1z5aVV1kKfgp",
  "key16": "46bGh5gMJT4gc9STHHejzQFqVz78bsAvy67pBAfyRAigcSLuSFG5hWoy2swWvwgCSoTeiCLnt9bz8WeKUWhK4GbY",
  "key17": "mHiytdM3ci6uug5R2eTaw56nXa9DwxjbynVkWFQCjhrgwKtdBaUNbSUwEBZWyfhCA8s9JqA3XAcJd397CR9JbcE",
  "key18": "oE7uFFvfoQXe2DYVV6QSngbguD9WkhSrXvByAJgVW8L7XvAWm26dtfW5c1qaMQD3dCvXYnPbCQca5KRu7oMQSQd",
  "key19": "2v9rpLvz6idmbKQ17Tv19QPhwx47aGPH4h1NDYJDwh9vSnfqmGi7fXVeUtWmtn4QUMs5znEDdxh7JY9kFbis6BxN",
  "key20": "4RSrEkRFEK6zY9L8AdmjmJikLPWR5SbjaRdWsihFqLLL1iPy5KF6Zv455Nv3BEzXfbYdTCTW5eYG71dtdC8eNghd",
  "key21": "4AqxQbzGxMYcwPrSD7mS4q2NgU2ShQKvraGzfnVw2cPLN3XdoieF5YcsoTsZfSd5FwbyStrrG5sJHtcRycAzJXWM",
  "key22": "TcffSLJZrbr8fCebWdDKQBBrhNjbHH4vcDaWHykbvGRREpPkAGJ7boo7ivZ2gvFkW28bWLXAn3fz7XN3XjW2VbD",
  "key23": "551R7hBBppF7cMqggNjmz8hV5YMaG1ffF5D1FDtqpeD6hyjuX2VTYBm75PYo2ARS3JsSBrdahbuuZUYBKuV9BRHM",
  "key24": "45LgL3MdQNLM6f6fmh13xcnZCAtLBwDCmuTLk8wTHC49NSKyyqfss2hx2DSM6VMKdYgD1pKKrShakk8E3nRfWL1B",
  "key25": "dGQgqyvTzoQcuUf6PEkQgujP9RWF7kbQze36tUQYbTjKdCE4p4mJzgXEYZ5r3b6XXMkr2NdkgAorZhdsTJWa6xB",
  "key26": "4hD4tUMCtftW58drspeMrReuQo1sANThqdqcgpJTx2FSeGf72RbtLKYuWNCFEEfT1Jig2Ve4Qn1BZQzLUiuBNvWP",
  "key27": "4vPosWcdxc3sMDWrBmDgs5m9YLVM7zAZu3mYvBi4WsuzbrYkm32goE9ipxwtfkjJMHTFfzfLiAVFXXd7SgzKAxmP",
  "key28": "64rkpvZGxFyr8JtA5XaXCNBWBhHRQLTwypaHnx8b2q8iDMqdBpDd1yENRy66sihi4Rt8igfw65X4rZtwCLaxuwAZ",
  "key29": "2LDW9Uhjd2dcLTUGfkU8PAuHApQSRazPjvGbo6zu5gzvuFjJGbxV9raHvxiEuiz6H1GRMs47qEhXW7ZaCqtzPbZr",
  "key30": "5FgoT5tTc1o6Zqbge4RGADXLwe2AUQaRQogPgqnMWTdXeYpmP4Z8aHgMAjrjaoANPZ7cYBreqKU7KVojidMGwtxh",
  "key31": "57z6FMq5mL6P7vdpyn4e1GssAHsaXpVpxh8gteNiM6Mi7oNS2quGT97DQXVsdCzBtqepsyF5dY3KrDsXUAmMjoYy",
  "key32": "5XxxDT4xrFQfummNoEGogyjUdunoKyM7JmLsXFhSrC7XyzUeiJMB5kdbYuW1cwVzQ8dtsEgtDesxQcFDQTJzFtDE",
  "key33": "2wT1isegPobZrJdBUAZem2ARbVubnuVJvjPmjyfuFLH7qhAUepYE8ZWTu8RKvGQqPZ5YTZ5aEWEPGsF6DztpPZbQ",
  "key34": "45G6RcQKpnoF3srcp6rz2xw5hDXSCG1Pez1md24A5BzoKjkcmazGjKqcNtW1X7S5MPW83HyWT3M6kxX4RMP4tSKN"
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
