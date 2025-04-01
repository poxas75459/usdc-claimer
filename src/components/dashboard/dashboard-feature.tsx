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
    "4wCrLmQrs1hofUyunwGLMPkv9ZBxSRpbTc7cYg7R74zUae1EHDMcRn8KNLWkw7Rb1E6ksYW1KCPQVkMSuXqg7tKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Sv5KYPdHqhpg6pgYNsQ3KysWVhLkJqtAkUW1BNQa7Ce2bTQYXNyZkQpcfB3apWjSDCjiqemFtPJLS6ChFftv6t",
  "key1": "3sWBNfhz27tYx9ytsrhiRakngLTHEv6K8cQLby1tBWcMMgbckA4eLJRUwoSYEMQyAvqGG15XLyHKoZjRH7SzrUTu",
  "key2": "3SevPGGLH46bBXhwCTWR6Ljjdwrp9AnULGg1gabReY5CZaEhxXPZKdoRnBxJt7h9F8Etarq1wcxY2kq2QDbbXndo",
  "key3": "4M8yiBrdF82nKfdzTnek52w912JUR8qLkeTesNu542nKEyjp5kftY5oMRtfu3zqS9eQAfZhCZYaAmnugRcj5N56s",
  "key4": "WfuYPywLoeHEev7L45so9cKE9BkSAienMWWcD9bgG9yLUoYPs4VPQVDrHT45otiK7jaQW6kNxvPdG3CAFpGbYVT",
  "key5": "2AZxNxHKvMixTL1t6SxmktxdRXK8iVesWrsRKaKFNcDsU9PZmNx9UWs5YzR7t4m7rjTVE7VBn4eDdNkcQwXkGoEs",
  "key6": "2WbtXZFRZBuAJNGgU4kaqX913NrL7zeMgqP3Mk1aWToJn8hHBMhns8aFaWGt65xfVoFZusNN2sjy1RGP1qsa1agd",
  "key7": "5QpysZWEJFZYkEkLjZgg3o5SdsmyL6kK5TiXKVeVP6jWkMojWXkxp8UPzyUzLXfYo3SMVkpBAXdaiw9bn1ERs7BW",
  "key8": "5WhYatG6tPE3JdqukjGgfyah4zBPdrAKCQUZJvqe8R8UcGTMYx3zt19b1oikQDfRX21eZVjBzJtx1W3pqZFcQP2",
  "key9": "2cqJqVFTbY9xheUGiPyLtJQ8UqxVH1481R5nVpRz6HLGfJ5WNw2WgYRXUsd6CyaPPfinsrTTy5MWwffN1uxA3AxW",
  "key10": "5bKPiTQvWjhBNXiHmtyK8AgmMru6tMmucZ1e2rKU6v5Bp7HwRdHng6R1zUy17puvQAyWqpAV9tfxQHxNFBjuH6Um",
  "key11": "2HZhKLTY9jdmo3NdBcnAfhHpt8tJg2eYUkVJYy4uKdgZJL4VrASNbSUhp7ktbuan7fk1AggbjwPUvnfBePWtvbaj",
  "key12": "4DJ5jQDYwFg775TZP1QgXM1c3wzPhxrp6HZzorTu2a9ogY9k7qFmYZQhaoZ6CG5oddAXRkh81dXGWw4a3L3iuTAo",
  "key13": "4K4gmSLRjqfBiCd9jEfCXuNDfNhvNMEQTiLQDrsz8VvW3ijzN9osQTcqy7jyQmHKRHi9fsj2gN4f6rkB3Xmtc3pF",
  "key14": "3dExW3WaYZpksE5uxLYkt5m3fU1JB8RMfZ6FMMnxprKZLfJoXE3KVaSveQY4u24yTjxEsrfMgNb7iLm6Z12BBTc8",
  "key15": "BkZXum3qXM7p6GNKETxjQbbAvmCKQAFH9EAC7XFEstVRC93QZZvKyFQgyHwczAtZGLHj6ScJEtqNW7Mv9y2BfHr",
  "key16": "32ofp9xsL8jGP85ChwGgUKyvuTGn4jYp7vBJhRCsLn1GYBnqFcyw47Vyps4DmNPbT71cwu6wwC3b3eoo8iMA5Yin",
  "key17": "2qbpwX7xqD2cveRxH1Vg2oLepb82CJuazJxFP9iiRT2FbTiAg4vArNH9dn7mcNurWYNtEkQguAvRWfovpZJ8NPHG",
  "key18": "3orxaG4tZYDchiXnaLPMXBepMf6gqCL3rpCdexfn8b7DdtKoLPwYSHpX3wwJF3MDWb3xi9nJWFMRfQAzrrZaVbWz",
  "key19": "JU9winGyHxzKJxyjA92kb2VAm5UdZGe7hfTjLpHmkVzRZpnvVsr5tGZZKPkXamZ3ugCx7xaXrpxUdczzJDdAAMn",
  "key20": "DguRwUvj5UbfjnQekFfzbVvkaouttYhjRjiPLkS8isWLXASt1D9s2mdvPy3d8UQJgemrjmPKbkJeG7miqZmB2hY",
  "key21": "4hWvfGWGdFSvhm3DsSpUyaahnYeRXPiemmfUo1hg2q1y8wBvzJjAuyC3LP7srjVJ79Pg9kjPjAFujcQcYxyjtoQ8",
  "key22": "P51R7ic9pJZQwcfxK1Q9RMxby9wwKxRFZknXNF4X3kDJgsuxWwWetbPMTpMsEujPKCBVuUwaZhcke5vFZC8EpPM",
  "key23": "5UUuRuh3N5EwhzLNig3SuPuJYQ18WzSkzYbeHBHugWLBsh29vrdWBUCuNz6nkE185debaPiLL6avMqkU6Bi444U7",
  "key24": "45TgoP2zjqwEThGTA9xXfqsu8KL33UJBkED7sz99qqZGs9jNuf8cn4J9LjgwPG6iR2D3xPTzyv48pTB5shXXZcra",
  "key25": "47fLSyYZgPxTYeEKJqTjSkyJFPRAArgFzJXdnqSN144Afbrs82iiB5rhGncQsx1f2KoDdMKiyzMeE5eY8zGU6Hcd",
  "key26": "55uv9oSCuaYJsTUVHjRi6xAQuR5obHLp3Qf25obHFFXPrdKV3pyWCpfE6yfTBh872NNNNGHRckQrr5NKqL3WQiCT",
  "key27": "TUyyXTya7P7ipCKoLbwVva7Q8ynCdA7NrmdVopCenDw96iTqhzzqKmK6t1JKCr6tfUsbHVvcKQdkWk9PRYU7vn6",
  "key28": "63CXbD7LRbeXA5Pzte9SxQy6m9wcdXzhNFkJmmTpCXXHhw57Q149Zub6sJgBsCpaJK1er4S5L6vfhRLX4yKLgz44",
  "key29": "jgqcL7ZSkB3V3D2Si6ahjhTLorHxmVQ1U1FipARqrzzQxyxkBgHsLWV6YFbECmL2EVMLdrDRQ2Xr7dnQfVutTiY",
  "key30": "3ddi8iLPj9hfgzcToBFKLzU3koPaYESyN7KGvpfU2cNk7uv1G8VCwrDvD7zeXM7bUfB4rRY8i1eowq8A4ZC55BgR",
  "key31": "3jXTD7YcNVsyuWfYJyEgPKUhuLSFQ5bEfnXnts9Qz94LNvPiux3q8eYwEG7gp9NjQvhyF7s5sHrBWrQo6jS1bbA8",
  "key32": "BtdBWJyz1zM7KGGY6b8AnvjzfL2dGTmYQyQ53M2ERgdSHCgJCqfzXPYBYFiCs6m7n5vVEJkdYtgrQiUeywTPuof",
  "key33": "43PKENfu3tw2QhBLdfdDfaSSrRfKiFNcrCyecQBsQJ3Lt5aES77jchs8toBSYz4AEfyX8yxdMVJWEwy9sjPFrrCG",
  "key34": "4JPFMuoMynjzFgkQvJ3FgB915gSmrPq9nKfefpEFNUiLPNgJ8XwZv5PCJVvzqVX4ekuLpTzHDbFFz5s5FERi1PYM",
  "key35": "66EfHT5qT6Fax6WaJi7gNfghP7yCzqp2fYTPA29JGk4BG6LCsaycBtRcxTJ1DqGVYQBV4rkaoYLujG38PRUxtTYP",
  "key36": "457JizgZtiKf1hjLPfprV6rRtjsvTRpYks7Wj3bVi39k6Vrvb7X6uh6V1fcnSmWS5NTuFJSWSFLaJrgCkBBn8eAm",
  "key37": "16fvRgYvCNWgSQytRSw8N6FEXXTFE6GEctLzpv2DDQgw1dWp6B2UikSTVRQR2UfzK3JzDuHt8WvcR638jHifAg1",
  "key38": "5GXgzSCJcxdEsGv6K28VtGK4cfwkAsmUz96RsCPJsk4Zm7msHL6211ChY615EuKg91JTBRMRW9Pm1XjrdJSb5Bq",
  "key39": "4qZt85tq4Kj49sm4F3LB2xrjksqT82aRGoGgqLVv4bBMaZUPn7ZeAzJzW6jgob69DESZAUD6cNLnPCnTPyfvYBNz",
  "key40": "4KdNNNcwB4AtikxNVpj6rE1MbP8A5sBSCHzGc3uSLubX8WdxAP3F3fqBga2RZksZnzXznAJyzjnbpe4aJmHLosxU",
  "key41": "2QgAqrBY2W23djCCjmvUV4Ftbej7bMtCEKLfAsBepiEiG6XvLTirP81fHs6jvDmzd7AZgbtTeSVkGHevCxzu6GVx",
  "key42": "2sVEFQ6V7QV8HvY5SLS6qgDcyc8yMAYtmgo6LRA8yFguhu3UyT8Dx9XXz9uoohDCHxe4q83Mjz4P9ZCn7M4eKNEV"
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
