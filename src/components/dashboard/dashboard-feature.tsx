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
    "EZqq5rqnrETVzf5wF8D7cVNR8FXCyA3pmWioF6hH77XihAQTPX6ZeAaYirAAMmr3ME5GxXjQah8XECyJRGR8RKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24BtneZVvpzGHkNP4ZfTB3RfGRJUh2NgTDUEDpsbfFsZ5GzshHiiG8hiim6rn6PB2Y8BkaggJg4xoBxWfgqhbhQ3",
  "key1": "P4ba9iqFzFiSmY74R1HBH5RaqYtnQZWwWXF7rg28xSwFJ19bwLP8W2zcB3cQ9fg13mZbxurLdLL3GBbRtPuoRpD",
  "key2": "sFsPMn8bKrygXAyspqKcK3AJte8nwKnNrevqp9BxH6jGayr8hKuSw4aovrAGfCsT2QbvFahFQPKH1UJE4WVeV3o",
  "key3": "HBmkmMG1um7159GA2Xp9maZb2AC1KwjcDTG6fgBmawKbTtNDqAepEvZyRr89G9GG7W59esDfhMaGMfuVinUWM6S",
  "key4": "2oKnC69d72UNBs3dPoKYgd6izVXfrVXqp7UgpH27Uneog6d2EBXQ6oxVWpcwa3NvA1AF4FdEqpSVmHKjerCCU4HZ",
  "key5": "3jC8svTmSU1pwbaELfsr9MRzi5YdNcRj2phRCbdSuMpyRS5VcKgry6a93tRiAg7rKakBub9i63UrVndJRToJ6xy",
  "key6": "wXo5AZebVX4vNTw5nYDAGum9S1UfVLg7bFjAv5y1kMzaKebmJb5Nz3hCjrDHSN4NJRQL2Z3Ra8kCBGyjhq2BhCZ",
  "key7": "4McjrRkAFmNp55GJx8FMnedNMnpeXkdRbAXqA3d5vExidnPm6afiybfRBK1HJ5b9rHxB7vvTpUPY6JgEUMvtya69",
  "key8": "31rS7zHCqvCRFr6ueKoM5qyV1og1hDTwmhbV8w4VJVeZXijTP9BaaTiVza2JwXB2ppnST7in3DGF55JDZLuM4DT4",
  "key9": "5kas1DR6aaiMPwHE8GviYJCwC8z9rgRVfXnaiLq41mVP7AidXTyhF2SR1GmmfXpqMeH3LvHZhn8yxAEKcTNrQ8yu",
  "key10": "33djtQsU7vXNa3rxeu5u6ZyCqSrbgmm8ikk8z7LELkC7pGga51stRTG33L95NerSn81LJ2wRzUaoPfcQv927Ch1N",
  "key11": "5JpNd3c2zhd9NjEuDhGDYVBr96C3XRfQAhxByr4gNx7hRStBvmkUNCBvD8uRkoFRZSP6sTt4KmyzGtvYWZsMTAU7",
  "key12": "2kRoK45ssVakn2W98YYYoKyXSneAqnQYNHrga7jFbHXamGRxpdDcXB1zC7YvuRjt2r7ZJBSNgYiCnJd1hLxVnTXz",
  "key13": "Vk5wnjsFK9S1SNH1mM5QJBSGYVGvrc6VDtiXUmBqGiMmeixWDhm2eMFdubQuWuTPq4Z9MQpAfkHHdMYjqNrkdiE",
  "key14": "3DSmcUC2BaPvTRgSzz625fVn9zpXDVcZjhctrK1T1iyvA3z71zdk8viDANhbnJ1qbHC5XeNrmVxJpqHemqGNf9vq",
  "key15": "5pbV5kRVQ2hXt9Eon6ELgzXtvwfUPzMBwxLZA7FcpCVy14MkzUoUpNNxzLAxCcopSPBuwdgQA8bzjVRxWr2P4cbW",
  "key16": "2FwUZHpNZEvuSjui5PzfqfiqCor5tQCry6dTbdj5G8dD2tdvbM8GWUFok8ZDwoQmxUrSEYRi4BNeaGaxr7KrLJVn",
  "key17": "2ZDj6SM6BXrqTr8qau2rL6ryRotpbMgqZVQuv4snxxqGdgqGgvaYWhQpwGBK1v2iYmbVtfz9m4fnA1FFh2gpoGqa",
  "key18": "QsQsnjMcz1CFdCKjpnvTUP94jRNFoDNYgfYZ597XsG5Ka2BfT1Z9TckB7z1VqyahPhATVQhz4XwRwFbBAYJGdtk",
  "key19": "3c98E3kipPFVNyQqCu38En2sc6SgvmLyjM76SCDYNvyMuKZHJmguC9Nvdh65Jj4zLWM1NyLQ5Qem1p6owjL4XjmM",
  "key20": "23W1b7i7aKaVFYA7t6sjUCmKKuemejdgF4m9UyfGiC3yyAPUg4eCxeirahaG38f3L3iDuwdQ7ZTR4xWf12wqsyaJ",
  "key21": "3misRQS8GPsKVArNkmbepwZ3tdHHdnApt8zKJqhRFQfzHKB6XHpLCPoSdrze2QyGemfYicbS1LvnFSNv8szrVW5Z",
  "key22": "2nkgccey1cAqRhGkH7zWW5AkVEJ4J8rv276A6Xpjo2kAeU2wkRTedxUxgRyce3r6wMvudTCAiMb1rH6kVBfee67F",
  "key23": "2eyquxBW1gR4GaQmmVYJsuTV5BGkbmEy6ZMgTpB4XQAgHTkZcmb5CTVXaGx5317YKKa9Xj79C35x8qJ7onQF4e2o",
  "key24": "4iRz1AHCCTkAsrqp6ZWne6DqgePZrBGrtwmav54jGu9GoHvgfFuSoPgjUxmscMCnJzvns49n6MqYBEFGKSL9us57",
  "key25": "4S3KVXRc3NDiHLpqbrzm5h2VUktnKqeSg9BQgpYKexT3cjAAHThqXAq5U4RTw48yBBRq5CsMSQo3ACSinrLH9Mx4",
  "key26": "3xND7bSKhUFJefDZpSbvkqqWiVU5weAZ6ED7xba8oGrZPSCPU22cKPphouS7vipB8vjfmXMcvqxCduzxNuKDK9QD",
  "key27": "2ktaScQ1o92Qog9J7eFvzyZ7S23AixDTDcy3P6zjRmgng2e48J6NGx595amE6gSVudUs3Nw7ppwnuNRkfVTz4sco",
  "key28": "4Xh7sdVTsmeG12UA5KxsKK5J4cqJKsSjwUwnc8FrcYX7dozPMDX4d3rvfmirJfZ1XoNwELDcL1fffxwm9CYjTGnQ",
  "key29": "52qWvouRTyt9FKtPdxyftwJWkb1kUZzzZBLiaokjBC4K19RS4fyakjNrmkp7vPgVT1eEzgep5khzz6FSByuK1GNP",
  "key30": "5wYzW3U2EWgDbwnmL9k7KiU1B4kJD6vSnooNnd2jsKpvfFtYaFfnqYHu7iGUTZDK19P2hG95mSHNDZi1xvBpy4JC",
  "key31": "2t6ifmkvPJL2rcHaYH3eFHxSiPbdTgmEhnWqbRL2d9zNVqduAXDRmuNRKrEXDrJSeXeVoC6fdvRh6KDnL9EhtdYM",
  "key32": "4ARYd2jGenRWYyxVK3q2akS5kcKLtsHSgUJ91fRqbJ3MbrtGqxZozySnBhqCbdqxwYR96E7trFSV3oCfPC5Pbyiq",
  "key33": "42qN6mmoXcVFDdWXVQaMvhiXiP6VMzSKS2SGxLisShe7njFt3KsWa7j3pmc1w85Xk65QFqmy1dNbR51oytvNr8ev",
  "key34": "2cv1ehknK4sxDqLxBezFcfHdkjjhD7ESYAH6QGMg6PbYzAqvSevzyYZkH2fPGNF9JHm8QWcR8CuZQSZ1FsoCsNTD",
  "key35": "5gaVnFMPaEnaHM5y1rJ92SmpFjbPdnacysCNHYQ2DtmiG7ZY5yHxvKzwfCv39LaarYZ4tDr9a1CQtS9f2LSAeKRi",
  "key36": "3j9H35cNLxGuep5D3SQjTrUJJNpbwxYsRwmzvN5meSKT8rMw71TuJNeevT33rzeaVgAfBqj3c78NfcQjwyDwNwdX",
  "key37": "226BofJUhHjj9KYwYFt5rm37FrJkj1YJ7Ljf9vfLTYk3WseJP7CbnxWZEs3NDc3CJu6kAJg9gzb87f6zfvSPEyMh",
  "key38": "EEspgCdLBbZK34QvBL3jLsiNKu3TBxXQ3jBUnx6YSRimVa54PDcngXd5qofbQVFughfdSqgSvYjd9mEzWKoefu1",
  "key39": "2RY93HyDJg3rLLvM6KYMvwHUJaY3fFxjndY7NbRWAaqUKKDSWmmicv17eHXt6hbavHbTo9xN2SF6zs6DhEkMh9C5"
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
