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
    "3HFCVHNfCnRjnoqdahh6BLjdrBz8UGdECxxnFAbXJW1mxwYJvqiqYWGZAGGHgc3KSexhTW5Y3sUkqgMzWy5LHTat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ysB46foYMNMrPH87MWbR1cvfQBBHHSk8fkHax8WVVSucVXJGiHcBCEVh3YCMNGviUyLkFMoQqS26fFU97cXwt2m",
  "key1": "3NhMQppzboNssnZM7NMPscBcmChZEtH5m35rNqAcfJKGAAjPKZZpzw2VYDMcatwQMfn84E5CzRLccmY8bJ51W3SQ",
  "key2": "31AAbdMuvqVLxS8tTwoZgLeTANX5yfxTrqPMvYrjGWAdiAe451gqqoV9A5J9ujfYGsb8M2ZguPrWC4LicquJEYbL",
  "key3": "3XqdDmoLYeEcHV7hSLixKXjjGLWFE3Yb3gkcTfzWkGNx8ahUUNHKipeHokyn8jPE1pKShk4ujpYv8CAAUJzkGCt9",
  "key4": "4ZF8PN8SPKME3v9YJJEaoPkgQemjkW6z12XTakMAVeEiFUWbJ2fBH8rKMnjJFkyXZ37iUYBKoVFzeHBARQo42RsV",
  "key5": "4F4SdFcLp5nnT3QmbDEuJYSgzY39gtKyKFoQe27i1MrbGxDuLavchxe2r5Xa7a8BnwLZVfBzaH7CxVsQAeKAEMSN",
  "key6": "5NVTufgz1BtBsgTVZzDK8Nd1uDAwefW9L2puBSmwDyj5TbeJ9hD6fXMqM94uzWTuGWARiJwy5YUE4rnCA3EnH8bm",
  "key7": "5hJWqswbGcfNCimx86D1ZJt3y33pFWpcmuZDAWpJJSLKyw8K54LNoJhBwdnciRcpC1bkNeuQxs6MY1HYhJj2jjuu",
  "key8": "2ErWXqmexQDBX4Wf5kkcDRgPbmHw9Do4Hw1pTzSCxJaVJNPHZBaScDwjLiFPzhCLwCcNM1Q79ETnZCUzJq6x3Scx",
  "key9": "CmvuUW6Fs6SkfJURghctqzgB4XidWmT97VkSVgmzdJFNvxf4bCdH1Q5AntiDSiZxQbR8NQYWhC1p32Wk6mY42xQ",
  "key10": "4auiUn3jtt3Rjb11xJ8fceSCtVFvfJyqwrgvnKMF2P4vxExbHgWMw2iWnfN8FeA1KfCADZJQUoE8TuYnprCkjS8s",
  "key11": "qfaf1k4tDU4dT766VZsMMZPAh4sjckn8g82K3pg6eHzFiC1xAUNBYhy5Md1M4cVpRnLvfMyJ1N21CYz2iFeBmXS",
  "key12": "h2qAE8DFHHXnMxBg4DcM6dLWmbcJzh1E4ebAPrmcX9HSUfF6q96dYabjDkWwiF9KmobfZvqoaKbnfyxWNBN7vGq",
  "key13": "5PRN5S7MFyFD7d8vUWnUG32gYhm3tVsig9yDFDccfSjToQQ5Y1k4unGcpZkNiN9szUF7D5eUaHvzrn4zzjbLn9eY",
  "key14": "4awbqwWDRPYMCDosmvBdmunMSSsxqHdgbd7xCbV1asYqA1Ns24XoniWBWYbBPBEJUBqGHYGdaYqwiay2xS8ioeiP",
  "key15": "5YMVefwh187cjvEejgAfWbHur6q5E4vtXc38eTYKgTTXCTHSJjUTbMo1e6Pcs722fEZxXukikmcVFPnUDqdfGBAK",
  "key16": "rEsTmkXTj5wTEUWh4PQujRWv8G3RYkVk2FP6PsxgJ1L58kdDhwGp4nLnmnhgLRmoksFYi9tWFkMC7frwy9tMwiv",
  "key17": "5sbz4XmxjemL1kgiP7attZAPeNFbLj5mkj7W3SbXexRppJLTjyK42sq4HriFVm8PytpyLZpQArFjvZBbZB1ePUWt",
  "key18": "45h3b9wQCNraRNqEM5umTWdgZjvNLb4QAWX2HyjmgHmihabuSWuXvi5i6cGYpGtL7GcF15FKksRfQJuHRKvcm6CE",
  "key19": "UYYja5z5wcCyA1WLiYNYzpt3SpP7DiBaBkYuBipvpeDrQxigoAoUo51bQVktfeinS4E29DcHdz5b3Jsa3gg1oHC",
  "key20": "4C5SJgk7aaUTGLkE2JMQcaezkzkUXcsvnu3YYc8VQ71pjrjjwPshoT74ZqBJYcCDzdrvYaX6ABgMFXLue8wKJJTx",
  "key21": "WKujckWS73g3juU6wycrLtaauuaJLeNcxTWg3aMAZZbsSw7zLvjaf7YZuHKismb2u9wLukMnpdWJ8Yr9gvWXKss",
  "key22": "5VhkbNKz27UYUAEpcbeHMFGXc2DWKJLqXUHzVDLL99kdencaVF6GN84m3gCMey6ZvSwt6ZnJNkznCP9k14Ue9xNg",
  "key23": "nFenBpu4EyqPPMffeqYaMHEsdVdSbWJdB8ZbaDYDNzc4FSDUrfgP6ragt4QjtLJ9PPMcHi4RLCH2A5w6LVvqXb5",
  "key24": "2FbAGeK294RhficL9dhfSTwioJkvhL5VFhn3n623Z5sdZjRx6B1g4C6FNrAWTrHxhQFN7mNeEQ3rtWgFfsN8zDNb",
  "key25": "4inf6ZLnjoezKPxewztmt5Q2GbSzaovoYW7WSEJo9XxdKKSVWs5wKEqN1r8LVHwScCy7jqr62sSRjrMDucES5q95",
  "key26": "4WCqWgWuosDNGsB6KZNpvmKeFyNcjddUmR53VCs7kowQrgpWLzH3yS2mtGbwBLC2qKuyDn1ZxtRyCurVnQ6ztMCF",
  "key27": "3JiYTfEGunJo1mm16dNK1jLC4YqiKj2kGorA2M8EorbquJnvTLa42GJhELvmsBJ3AxAPTf53uSN3RZqw3Vh2d9Cy",
  "key28": "g3z4gitZpgyxrrC2CVsHqZsz6rTGWTLh528UnbaZ7fiyZg3kHgj36eZP2U3Ye7h5gF8REAHa3t6RuME7A2ghj7N",
  "key29": "2Dvi6mM3Uk78B21aVRJXZUudRM2z1WfMjSVJnUwJPRbts3G4NgNBhoxhvu2qZoPBHXsVHgL7vPHKUgGn6JGekQrz",
  "key30": "4aKxhc83dRC7wJe6ZAUiGFedBmUbDvkbTvJJmJNboDaDA1D6Zmm8RK3gjqC6E7dZwCz3993Qdx3exhkuNWJRDeDy",
  "key31": "2MUvQ2gMmJQW8TARQE4Fc4csR4jtCEqzyrNLiLmEi5qekWW6kDJMU1jjLaHTpuqFstQGZ6mQUWowHkAmB14LBhez",
  "key32": "4pgaxzGFf7N8DS1Lu3GzRYWaGKmCPbi955hX3LnSwpumorE77dkJRm9i5z9Ny34GiPoZaX4zqK867onsiU9Mzhpq",
  "key33": "3PTyaeV73oKEYCAQLGYqUpbkFABSUEmYXa7pL3YwkofrThuH2CmRu9kjqcBsYnX6R7Lwm7F1ofSTZq5mNR7xx3Hu",
  "key34": "36679CTfDmj1ehFWUssduPTubxY3KTAPikFwheSSLPoTDcRBqKzjPDqhvRv984r6AzzefCSBtmgBNrcVC9FwrdtD",
  "key35": "EHHTgajqMS5ViWD4oGSbdepFJc8VZTkq1YnVJrJf1qJBoJRn8xc4PCqBspsECEEoBEwzPjSranuUfmTyJ4bpQfi",
  "key36": "35HbKaoAA7RxSHipqbArwc8WLkrT7TN91CMzjTFqGt1UncnXocea86uWFKZgfoNPmJxcgW6twoChZfuRHAjc8sEQ"
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
