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
    "zQz9iTKzLjHQkjMGsNtbkFKyv3LU1ac3LREbrCbuPditAyBEQqGK9xtTg56X6hQZifF7QuVz7FU9mYPFCMJtUKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NomBuEwf62MRF7t9VfijpVtGEz3oHvrp4tML6kW8J83wUUXR3dnznJR1VoiQkvTPyQM3G9uhZmUCRVx8mFnTHc3",
  "key1": "2VaoB81ML2XrmerbAxaDKPRHL9hNM5V8gA4PvNbCaPao2EgyKDkuf1pUf84WJzyRtbtyU2dYYcK6CqSjHhV3Ez3d",
  "key2": "2VNQ7o7q1G45bkAUdW2ZbZGqVpUYdVGnd8y3gnXWfU7JAm4aqCnYUkxuqJhdQQ3adWgxNKqpAs5FX4dvs3GVNZsA",
  "key3": "4CwiTThwXYBmRJ2cMWbPKjTs7drPchm3tg9ixBDSFNZnELNs2ULuQae3zgF4CchPndWWM39UP1uqps9EKX5FUwRm",
  "key4": "33jL8RUbxj9ZafrU8hcTx8NajouoAZ6poNcWaiq3rhgReLDLLuErkXgZ4TB8jy4zP4G93BFEKsLcXEmQfZVcbLM",
  "key5": "5qvCty7L1MJzhA67x1ZGrWHFjpJkczcnrmfqJKjGDMsNTiLFqVBAcTLorkXsStnAiQFApsWdNp1uzchgvZbvxmZe",
  "key6": "2EVRs7Wn5DSJqhcmw6YyA66V8qfJVgcmcCN2JTeQ1sCu1KsGZpjFGos3jTUeXyf44GqHRfVCb5TYqRGAFTcCUdrA",
  "key7": "bVZtNfb5U7ATXkbVE7Wg9J1D3jFLksyn7k4TyPmfE9kCdwdbzGM2VWUYiXisUeCMKJbrsMRvovztSfv2SC7kuQs",
  "key8": "5HUevrBNz8tmS2eUhMMdYWFdU3KvDrNfza5q6ALkQuHoSM8MBx37QCindnirDYqz1z77mssiekpesBWULAjHVtgS",
  "key9": "4QVkCcRr2SRVT3aRootiJcJzL4nVb3hPka8BYbfWtoSJMybGiFfGChJgNFL2FwYiD7t2cq2Ra7EbwaV891sLPS2H",
  "key10": "3MwtMQRhfQZkzpSCZZ61aBxME886Jr4MLztYLAjYktYpac5v4erJ7kMqkkxqDckBqFX23EJwgd6mrS4ALu6mUpsG",
  "key11": "2kcnr93fLPXn75FArWFxiHGBhnuXjq8HrZcsRCovUhWAUKcvryFgT5LdUTQ53iKyQku3XsZHKWx9pWjVPeNUdYJr",
  "key12": "65MBW7C5CV4spfgkNoW14T1Ui7wDquFTE1QYXRiCsQ4ZhJsxnb9buzCiM83FQqApY743ogvNJxXWYo6ft34oQRgt",
  "key13": "26qxRNrQQDvQKfv6acMjeTgPxgq2ZSaZrdXvFaut12jHLSCuPxGcFPRU9zSEhpdB8Zv6A9QJWE2H4jbzhZyNm5BY",
  "key14": "5BazeS1nNSRqo5GajtRs3VVtJq7i7WCwbBrjiTmbEtR1sE7HNC54Efx4RBDvheAKd1uAgzB8CX1pxUonf8vB1ED4",
  "key15": "5qNoqfypLPcUoR3hPfnNePsA4bn2DHaU9SceGX9VCqCD8NtMdHXibGJbeTgJH9MBULvGuKSgW3pgGkxkXebfmoky",
  "key16": "5Pija5osb5LApb7tpuzSeQ1A9KDewUd7821gZWmJCmy9BzmgHefkoUDxXxaRWF3e5KToScP1NXwZBXQ1kZH3MmS6",
  "key17": "33HZqNLXtnNPKUTPGr5MbjnsA2npLhHuM91yp9ZnCPpPG3rsxB8n7uq355pWGonjEcbvdPkWpzby4HKumKkpWr48",
  "key18": "5VzbTT2KUDeF841wY3ugrFaWKDQiaimZbF8u5JwV8ZkMzz9tGzEuSZVS8uL88XtLtPc1yS8UZfPzH7QVc53UjmMx",
  "key19": "2Ca54pXZiCLvkuRM7Uv5SmgJVUd19U88tT1TN9V1rRLZfR2enV23i6ezVsVMmKZxeW4BQkAzWaRE6WLyzn6E8myd",
  "key20": "4pfobhhgMhJWyionhVqm4ZRs9vnaFJUf5h7pZD3Eh7sJbeXi1DpDjfSVXeKLHp1Lsij4PNFNz1y157RwXpMsypbZ",
  "key21": "55B5rtn4MzpZ6xtzb2rj76Lszsaf49sLvdtxGoGk5LrYsdyHaBiSBMmeYhfdbswfFDvpitZ2eQsx8atvqRxgQ8q6",
  "key22": "4Lja6qB7AAcizxkKGhb8z8Fj8RtJPeP694yjrTgFeakwbgKr8E3B3Ltqo8bSsoVzfM1djySNBk6WgoAHADqUm2Zy",
  "key23": "5qAQTnjHecxcXW3Ga3eDqPmms8LeZJ1u1YoofCKw5Z1VcqYdGN5SWyStRTLGfnJ3ub2ewkscbEEFox1Sxk8V1xpJ",
  "key24": "sWHQFEnJuf2eAX7181GbR1RqYpCLFVP7U5ZQ9FKJD8xSLHAL64Ld7ftbhiJs3ydDhdKJYnnthBK9ALoMrj9mN5c",
  "key25": "2ZAHr1FEBo5qi4SoPmQWNqHPtBhdmrUJmNh5dV2CvyD38x5X2B6QZ54qR9eENafMUYGdKNbaoX8dkMhxDNeqsXjY",
  "key26": "45M7iuS7oY9HyU94yH3d3ciwhgcKnLwLjvZwk3oAJo51pzu42Tr21LefGb4C23wtWkNtr3z2bi5cbHCP4JTM9GEz"
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
