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
    "5NbGcdnXNkJBesyXvBkBbCs1yZ8ZtForMJ451B6b78cXYDptUFqnd2orsamehNGF5VLqhbjnzeoVEPaqEjWFeoYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kb43N6FmqCm5KiZbr4rY3VcHe1FJ1nghRHoyL8krNNe85JSLq1W5L4qAEhHDj47UpvKo8nqPa19YASmJtsxKkny",
  "key1": "54edgZNwTKdmfufRUqJ7KnBJ2PAN1QDw9UqZo1E5NiJxgXvMtNZ69ZmbKtzC4kz2eoLGRv4vLJ4MVz1Vb4GdwmbP",
  "key2": "2MTUpgFbT3CNoocWnVbUdxzGygg7c48kJkzKHwmiic2PRaUcGk5VpU2V7d5QVYqy6Bc5UP8TpiqMUQ1xGWusj7tG",
  "key3": "5aCRqzgt6YD2SqimSCmo4KNT8wCwpmGXmUjsqy8SqHekcqdoeowFfJe81T14pGzWnHuZFbH1goHqXc9f91CHf6M3",
  "key4": "5PZh6i6SQTEMkfLjsUWeCvVGwyBhmA8T6hrkYLMDPi2UYDzGYzQtTQqpajnBsdZPKqn2GVGL8ExCCv5hPrRoJJAk",
  "key5": "T1K4f3SLhPYfTMkcTjJ1kvJNqZJqU12feqZhwciPVCnZBHragfsuKFZrz7au5XJVE8GndmxFkTRQMsBTvoRah4u",
  "key6": "EDv7arP86vwqbY1PmCwgiGVTVjUg8PBvLM8cDC6A2vbvLP3C4aVRZ13jsLYz1SJ28LohreaFhM42Frmx5votDku",
  "key7": "5L4iX7JUUxSZPy4ivb4FeNSdovi4stcXCeW726E8BPjekz7vkuTALzrgiR32vMy42BP6vzGy4hHtHEFvV9AjdV52",
  "key8": "K8RaFsH1RZzgLJt6nzJT6Thw2ZavChv3g3uJBijZ1JM1Ba7RXWoYj9BmAvFUemqspjMFWyrTARZrLoG2EHZ68pM",
  "key9": "2a6RA5HjF8RU3LG3TaxsAGajQUAFYdKmf4T5nesR6k3Y62PSVwhMgqAGcjowpt3BZx9CjXegu4DBQ7B6MUAQ82yT",
  "key10": "5qqHAVd9HZwpJsJ8XmvMtt1Yyn18ko3ubttDAAEBPKuHQxPM8xg19SPz47jKH8b8W53MgvVJfEU2aEt2B5jLhNUS",
  "key11": "2Y2y4b5QeRRFBJbvjDSCknMc7pLhFkkEjxGwarpgu9CksLYgTxE8aRhwtcufFvLfAzKHi12iLdt4Lvy48roErw3o",
  "key12": "39KuESzf5R3ZJjaVwVTcjoC3CJeBqzaFFK3ZyYufoNcAXsJy5B5XYCm6Cg8b2CfoPfCfnx5UJ58iLV7k15pYgAss",
  "key13": "2u6AQAqrR4QSwWqtQUnjNhnghNTLhNqHyMAuqxfPwxBxmp8mjVSZ1pJTTSCa1PsdYjCUpd1Nia4PVCMarui8kfaj",
  "key14": "3XQNrgWouHfSnJMUy2dwfbEQu4jvQVEjepkJDPwaikfL3PmviXCrr6EJH4dH1dk1k8fgv2D8dpsak3DoEvwscAaA",
  "key15": "4Bn1VGnVFRhGLvcstStYZfoJ9zYtewzZCjYTRYJB1awqcPCNB3CpMwdfGQJcLBHcfxtTcBHG5QJX1keoEPsM1QTw",
  "key16": "5wnA6prkpAca8S6NmFE5thmDhaBcvbZoBLpL2kQ4GhNUCPsuTsRws3krL97qExMTE8AfP4cMMkkWy25yoktk7F8n",
  "key17": "4hh6yxdiiw6iiuT8Vs2GjD1pYJqGEokXvS5STnUUcofBdJ4FZteLayxe6DW5JbbUhEcjxxTBCth2sCxjGBAjYiMu",
  "key18": "2hQ3t8ZnY6vk3LoS1bmzGFKATQwZQ9obV8pfzf1jGmwSYB3wbXEF1XHFtPfHwwMFLt3H1Rnw6cqMWZ9d5Jecs6BQ",
  "key19": "2tXxZs7yAWsNB1FogaV1HmxitRQ7K8EJXMqAqj36gzyBq6UKDJYG4VRLigSYYH6pJxH9Va8Whkz2EhNEHMsSnidW",
  "key20": "5FZvvyfKqn96w1RLoQvBVgrQDG35SAsT6meMiEW7PKoawHyHxk3dgKB2mktrxjABEHSUofdXBAd886oDW68hnxXF",
  "key21": "5dbrWhHQyYjYDcwnC9aaf3xS8aLyy7Z99rTMvtjMFwCE3pTymFXoZKfcUKJNBLG1xMc2UjonFkhojT4FaU9w4Kgv",
  "key22": "YxFhFLaR4qetTpH8G5X1wfTy9ibBHj3pBWB9UMckTMkLrwamj2Y1w5K4o1NGM96DzLCU32tMZADvsxpfHXKgtCR",
  "key23": "5ankr3HsGWurxPvrrwU8H4m3T1NLaZbE2FjzDTdyifBmftoiaxMfkxUVcMwAdbPZcCEdZ2dLoiBTQa86cfT8Vtwa",
  "key24": "RjcfbWH8oTgKw6icbTL6hrTBuTWFuh7VNQm82p3zwTAAEqvanAo6XMzihH6wEpLhLYq2WpDZHHHqNSDbtHzAiru",
  "key25": "2MJfS73jfu6UijgCuy5bFa9ZCVXCiEsRRdNtRGriVTykBoPVbgF1wyTaRGtzWthdsW4mvHUcMJuNYayQtXFSxvQy",
  "key26": "4UTiWL7kY2BMRk9rdCmFzvGiTK7WUFskqiPuvTknDkVEit6NxDVw3YgyKh8vq9WJ43VmnhyqtJPngNfS3N7Rhhf",
  "key27": "5JF9MwyeAZU71ZDLV8rDoPtx862Npfjj3SKsLAEmQEacMbuXhATa3V8xZK584kEaUYym8HdRsUv1YSNNh41vQWWK",
  "key28": "345TqUqLWs5C6bLNG4bsDNYuGUawzQjYdNoQeFuPEWrG293zU1FaG8G4kpkvcGMybJwmPVLz7vabnPV3Zf1qkQro",
  "key29": "3kHfKrkQdZBMC6Anv3eUqu7xVsNRTNJk8NRGZiX1CUByqVqZdKxQpeSXcqUVjUBNe2W2EKQyaCWnMPVAcHQrgj5m",
  "key30": "4UZZmvgGKkTusRwRw82fkR5chPPzqmkmU3NcVTFnaNTBntnHyKpYsnt38xY9KqD53yS2xBTzhSackCBBSJQQ7GpR",
  "key31": "3RbScq6KXLXYyNYWfWFYcuswR4NR9pSKM6m2bQ6ecLnRogWTLqxSpyR1YaeHyoGseWvtpcBbghek3WQvQ2F3x7Qe",
  "key32": "4y27GjQwqtzx1mT59FwPT9rG17fB7MPyx9bi1tGAipq4ZnAY37KDmCNscbnk3VowJc9UBw8voH7BjBwPL9mWxToQ",
  "key33": "3rUJ59rvMiZ8kbRzoD3jZPx67MnH8eUMiv9fnvV3FzzT8pGNUPEdgGDhh2Ra2BM2LijXmd8RrTPmGe9ePdVtZAVP",
  "key34": "3wmXC1dV8b4VMJhSSki4PYPBQ6kGZxHz2ZDKRapmKNkf3H9AHpiHfiMQUbKFsSaYGc28Z1sm1GUgbSNJPsALjyje",
  "key35": "bsJtuJvky6aTDFVUT1TaG6aVu3sqXPmuCQkPAXfFzfhcbca5KZbDy7dqnvfW24edzCpLVsDcawXJfttXM1prqS6",
  "key36": "4orYGu85tHqDVeieuYfppz9a3w8ReDA3rssGfxixNJ7PpjbPRLUNPKtUsyDB3ikpyWAYCA9DRyx1WfaFwrowZbXW",
  "key37": "3AyUK7umYcctwqTTeveg9xDL3uEv5AjtCvKwFkpSabQssGMoW7GZb71QbCWoMXuiXsCWPo9njNwf77tZB7yWWfbG"
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
