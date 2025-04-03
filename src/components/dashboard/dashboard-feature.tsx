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
    "5uT43kZJvK17KziLyGxg7WFt36Ua4GEWyRdCJfsQ5PnaJ9yDzFuU1fcYWxzoYxR9wK78YGBDZpeTjdiecHNcSyLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LZa7od7gieRqqfcRt8caKCULkDSvex7198voxRRCMyyAuXRD1vfLvRtaqdhNzwfDg71fSMccGht5X4zrQqnTh1",
  "key1": "3ptkt1jzno67vVDEMr3wS2iv1dQox8Ycm49sRicqPc8XoMBJMPVSxPB8i19RBznEWACxHwrsJM5zvKrSL2P95QRH",
  "key2": "4hXXku6tVGRsFHoqDYJhfU7QFnYMK4Z8Avz7hQtUw5RTLhV4V7TMVsRhxCdUmn1ASwrbYuUm6o6RuYp1sJWYNBp1",
  "key3": "EYzanatGEae8mzeeNt7Cxe9T8oV7f4HMZNNNDZG8TmUpYk4BBhxTZJiwXopxS9T646PoUSpJyPezY6q3YKr9cqE",
  "key4": "3rzFJZ6MHGpCmMPwQQcXaQQnHqWBbHyfHh6BW758Q91nMB4DSp8qiRCEji48WxQiZsUQa8DHnsqACB323dR2f2cs",
  "key5": "4hbuXAZ2fCCzxtXUhzP5WMxB4hDUkS1SwvFGpDfPJKErFCmnh46tgeWsyF3pbqwFvKVNAY7sqpp9j23gxc2FpZzr",
  "key6": "38G9uwKaaV4nGtqoh21AgyyLFz1nzfuajseFC7hTYXkTYEm4y9FCCn4H2vxYbqNkNsNd41Q5VpnbAiC84tduib7k",
  "key7": "2D8V8X2hitWVxwhQsnGSJ8wNxRHB5m6DoyuDGJmduVbYgMfgxsWPuJfNHtv7RMwF6QHPQQCocgtPEEjgww7zMdQg",
  "key8": "34GHsMBUtda4NuBJjjMS9ugrj3WjSpxTjZZuM6sL3qoB2wu55ixXn681VwswvJsKQXjJ6Gy1bb4HHTYC5L4MKdf2",
  "key9": "sygMffU7KXpiq4LVNnQWbqWKra82bSU1BQjtWLAJJfGeWMCEJEFgUGXqdvZcMFK9dRiXYTZx19XUNFimin6Y7M5",
  "key10": "6GbdnpbHobaRW9UKBvXTgW7cUAG3JtZphVuGVML6yWgun9WSi7fk4mnpTpmYAAXYzvBsaQpAbaZxPPSQwN51yrX",
  "key11": "5PWrxKq7uaAK62bAzDYug48mUtW9B9fhkFaY1zLf5m7BeZVFERDKBMKo3U6bXwALwziSS8vX17WmjWSTPLL6b1tQ",
  "key12": "5rYZ7UBreckbip7swRY19qynfwGSibLyNdQALTHkZGyPz7PQs63mBd6LARX71YZrHCwG1rUQvdKrzYuYweMBtF7W",
  "key13": "Da2jDDRJbwFbBJNAkjLKYQHGDuckxWq6pJ856bHfQ2XXrMPntTkYkGvQxMPCc3Fm4aonQ9NuNzXdL2FuWeJf8H5",
  "key14": "2acMMNt8d6GbThxgLzoEhzYC3qYSjK5S8ydfFfHYYsAouzAQ8Fd2dFgk9N6pZg8gPBYxy4wU2x4EKvjPNi8q99bs",
  "key15": "P59gqH7vt16WbTNZvgPc9BPbkKuvzqET6J8Tee8smcnbmuseQ5q7UFv2aZssWuvc3RU1RQP2fkkgozePjR88Y8i",
  "key16": "5fVjG9D7ryF9sb4ZsCjgKE15iBn2nwZpbPmYM8E9iezmC9qoEu2fSKVc6Ptdm2sQa8Fw975Voc2KLkyhr2BFtKwU",
  "key17": "2fE1pSLbEabrXxmr9EAD8NSNMkjFHZCATgaWqPLqH4PMhtkXJiBjhQ3RCHgAcuru9HhQh1ofqeXNNqujQiJe1gDE",
  "key18": "18cDULnWBfjEMnHBPkNUoTneyyqa8JCodrP6uwzKoDF6jGUi9PDYomvmA5pbDTbEa2uvLXSFogKZG5ZK66ch8Dk",
  "key19": "5H5EMsuav86m6QEJxD3j2FNwPHLEUqRhyY5iknf35JZxSaUWaJC5u4aCxFDC4KPb5Bh6eXbNa2a9AcQ5g1iPaFHk",
  "key20": "4B9yW6LbJoBMb7aivQf66g6xADycSJ3s3Sfs25NMGn6kRFFKU7ebUwiSH5zpCyaJkvkoAf7oiHdcggAsK5tiSTGC",
  "key21": "57rcGxAQYsj7jPk6kZC2CDpaKmzgDGTtCDqvPbpjYPbQYmzMcHLu4SsitEGgHDsvjgk1ZGjhLLNZkm4CstZd97XC",
  "key22": "79DxmAsMWZap9pKUxH6kveVmrKc8PjGEmQijBDswsv2dr7Dju4ugyxcr92YQ7ZJJ71XDoSrkajdmaN64AFR1XGN",
  "key23": "2berh6dUQir6PVJbpx81pwkEt2AVnnaHwadw3ebo4g1VnSeU8fyucD6MtF9UZCVWuHLwzZqwXcrHXm5928GYrxyD",
  "key24": "5TamfqmxcSE2UyzKAJGDhoy5ZZFG6hPBTQ2EYE66s8A8qDTnVUHtWHzYQDcj1PPGJpXjBzdTPwvChnseCsxZwAua",
  "key25": "5uHVP4g16DaW1ax4DM5kmn4VCVLtno79voeNTh8PxVK7yVRRUSJvnefa1CfDAFDMVKVma2Pj6dLYTKMtRujpqGK6",
  "key26": "dvAaizcKC6WoRDSx7pLPeYk2YWf6wiR5V1xPyT4uwiFvr6D4npFfJRDF1pmFhMLeEU5LYsPNHCZNGYdADK9gBep",
  "key27": "xSzHKzByWass9B2pa7CTXrfkEgyCG62W72mjGqRCYMUvQ7t2bhJzuSLGB7ZLntoY8y3oZYFPByB41kykxDv7rbU",
  "key28": "5thZBWfWVZUyRaj7cTW8XYHN6woVU6J7cyLxbXm6KRPhWnaFdhpdAz7iQmEbrzyojYHQRduGvZM4X7A6XoddrrL5",
  "key29": "5MEAMfc9jVmDMZFyP7CxqfmP9v6UzSthdmE8m5kFwWVNtkDqZLonXrqTJg2VunU6DVZqhXrxwz1yANA9L2FvQGJa",
  "key30": "2hsffMwCtCh7AkZUXd3VWVXKghYneQjqhBZGgMtmCWpPcc1PtWWUPvxcwik4FBYthoTd7LMKSs1xsjU5LvK4Fopq",
  "key31": "56cwWum92Ltnx3jZCSDHZu1AR5MHo7hZy1Nswi5aPjKR7nNa2aKLASPz4fMXBcB91dSZBMmdUjq8r7LE2dnH5Hiw",
  "key32": "FY5th7EsSBcPFosS81BSPgridZGMLnhCrku2WhRM8JNGKgPdhWo4VUpezfkZxiwuNQLsh4dsqgzsp5KpLyaD2j3",
  "key33": "2BwtDj1sBmY7eL4NJo4mPCq7BpTFa6YPcbv5sxdsQxSgQ5n4sks2ZxNV3rYwxpS1KNHq3krBCfG4nzswXw8ZiN6S",
  "key34": "4xaM5zXrKSnxanx3BsfPBN8VnJWu7PCGFnS7w6mtrwpeJC14dkyzU7P71e6LrFDsymtk49vv9dak6R6b1cBnHzPm",
  "key35": "3vBJjCHBwYpuYNt6mdYZ6AE5T4LKs72nwsxNbWTt5uX8UAsND6wCk3rPjyvgPoM5ZYjtFyFtmr4EUm9v27uT2VNQ",
  "key36": "5xybX6xzkAMjPCvgckmHoYjJTRk16Evhvr3WJwhAWrpSFTdHK5ijjtGDbwSSYWBxdp7pg77qx1tZdrPfncaFfFer",
  "key37": "4CFE8gZWX7NNDJs77vMtZP9BdkwRRwiUtB9xv3a3rcT13hW6xq9d8tfMkM8pKqeyTUnzHPHVTxePdgVZKCtnY13S",
  "key38": "4SmryLZzhAoaC4dELbFhjnF2bKnK4XFjNRrvWYwwz4r39jtEnVrua6UkoMWmy3RHCH8D3jdP8aCWedzDj2Z9xue2",
  "key39": "3fK8fsjiuNp58CPsvXEpy5BQ71LEnpLqShB1GxDTRhvfE4ShvaSg5tRQ3LfcnwGx1gY5uJBUreSkwPKJjqhS5nMp",
  "key40": "57DQ8aViBiycb9y2WfaJLYX1Kzac8uhmQ4REKdv2bcwAt7cYQmAgFKhC6BSkLt8rfWwy9DKmjwo9jveepUdRSt3U",
  "key41": "5uV7guhT85rVVavDDtqiAbC9Jfp3cKQdgdUaz3sFZcasdx4gRC6sEzonhpsWDpAqePKpZ7hFpgpK5LEitBz4X9TC",
  "key42": "4uHrrKRvQVwgivrKypCH887Nwd7RsARufQM5ayLZLcPFnU2mpZd3ZB8GpDXvmYyFHEkuxvuPE6RpkKkHSc32p5jm"
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
