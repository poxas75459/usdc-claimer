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
    "8BXheQy5huBXNqa2hdigkfgWqeGgmTmgV16LM85o4cTkxtdoDDPyNHLYBXS5AzPafHPvicrqhCK3wScAavmeHnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o5Dh7w8Zsv7vceXCUmeJfPsvBBNUfoLbmnvEF6o1piw9FLoPa52ESLLp65TmgAqNMwe7vSMibCVpoibHQiRBBMr",
  "key1": "5117LBJLrP8kgw1vuXyRYXQrUAbkuZqG2ofC9ivxqGkLGhYxsoVw1WB9aV1dNwWmm5B2bUTxHDpCmhFQbC9eN6pb",
  "key2": "2Crhj91jSoPE1cwqsH5zJg1sR1P2NTvwkKx5wPMXF9qqe8Y6bDWtXBHP1WCLsqZJXTVuupp2isnG4Qy372P7uEJM",
  "key3": "4AGvXdaF1WG3RTdHbZuVMg3J8GahnjiAg1dURoKAtHL45HGRHQzKLnkFdXmPz6nbEwAj6Xvk9m3MDDXuAyN8mPJE",
  "key4": "2rGaLZ4Vf2pSkVcRLyipVvcvqyTJxAGX8s1jnfSQwVY8k3iwxR4EVcYQX3XJiarZ7iJMKqAkrTcfk9FA23x4WY1S",
  "key5": "5nvjUHAi515D3U5CHSVsDSGqsADvSvmSt5re4C81gtjUGhyhBzL7nqULUf8Rcg8bbyw4PhSCx2h1Ckb8tRRboE4H",
  "key6": "3Kt7QatDmkxzUkUKCYwK6q1HvrFH3o5wQg3sX3QNfNhS9iR2yFiuRiTpduhTJP43SYBEujteqc74adKot6gwsN17",
  "key7": "4Ceu4H82itYQeGSdMuHJwCve4WvxJMJHyzYCaNVTLGRPzBW3szu4sk9ZHhtjw5nFBML317fyEqiXrAeMXfxiCSio",
  "key8": "2YnBwbWLUEdHo555KuZUGABdRtHW7Z9jPMQbaggAXDqMqpaCBVmHSixzZrkYLrCxULxRYP8BdxJagQNhFCPJbCUT",
  "key9": "67K68cisDP5BZH6QkqnajxZ5zrByCW2TfMnKXxEEVdhexUkENQZ65NAFwxPGfMkqGKiVfgAGFSuWgVr2tUkA91MB",
  "key10": "27ZMH6KDJzaqBbESofcWqSWkPkVoaKaURx13u8oaY1ukhjHvTNbJ6Bv4peQhUJTGhFijRaK1HvKrMQ2sQQAUiCir",
  "key11": "2QexN6s5db1eFeGTTatbPP3pBHMNWcaB8LfzhVS8PFuPE27ckkTvq662vTv8zokPbYBqAXkbDcGqPYUp2q61JBFp",
  "key12": "5kGrxp3qmBQroDWWDtD3S1tTxUfNhDbAuNjkRxVWJqghmaT7JiNzaCEQTUwgFfwkofYwRMK5YoTF4xLi8ii21P4e",
  "key13": "4EDwyLnyiXnUHYjMCH3wkpXsJZ4CkTjLKaCPmMTm38TNEU3JLKFK7zypT5MTwzu3uLU3rLVyzsVCd1CKqYhBGck9",
  "key14": "4F5bXNM2NjqMbvLqm8qbsKTyogM7pTojam8x9LJ2KNYapfLdfffC2i3Pa8EY4ZazZzSHCAYGXhPkSLxcubjwT2Nx",
  "key15": "2Esfa9KBgUf55DzYKD8tcPh3wNvd1YrwynCq2gFr8rM6REVTDGi2TmSYvsn9ocDcKsXv3inSEkN9prpU13DUwQ7a",
  "key16": "gUWbkVr6NP8R3f7ZTTMY4ZtpyY5xjxuqQwDeg6zhyGtAoYA7ib2hXEeew5vwFuHJjz8gEvaWhtQRHKrrZhk2mPP",
  "key17": "3y6N8oaMwVjRrdCzJD39Wh6j5ngwLdWUuCyRN7kaz37EGwYZDjvg8nyikwHWQYZFP4zDbwm3Xg3h7Ppt9WYaEFy9",
  "key18": "4TMcbnxBrnNXvM1p4NWRPpEdKUfgaKXkzTd381pPYV6LMDUEFCCMx2zzhtew3GS45L3mqyy2P6QmUromwz55CArm",
  "key19": "hoMUY3Cf3kDgP4yYHHFebGhbr5hJxSjpFXSeLMgWMpDiqKuXsMPSujSs4LceiwS2umNbATb2BN9YbVDNvfRRpFo",
  "key20": "3FE7N5HYXjP6WynQPKQz2nU2jfDiE4Y52X2VxERPsLPAexC9bY586cqrYG37WxW7GyNzYZUmQWCU1vyC7NAcxVfC",
  "key21": "5Fze4HDWNtuB5Dhb65ZvWdD4sULRnEhmvVjGWPx2sm89qEeSimznq5ARVDYsaM4xfuNBVRYmPF18BNTfg8md4CYj",
  "key22": "5hbcq4XmxUMZNRVJSU9FqaLtMW6BzFrPSYiz6WRQ4Qu8X7b7bAwZswHFt2fB2ShkkV246GzmotSGFd2sNcJx7s9w",
  "key23": "2aRAiRp9NC2LuXgakZFotGt7ousE9dvPH5dqAqvT31rEACvZ9WCLZiLjBwNXbkCC1Kh3L6j7z6aFPjkpY2RR35Lo",
  "key24": "53Sdxaz7ixquGz5vMfZ5GUDbkzAUKThFpcpsStXRztpYJhu5rRiZJGMS8JkakDc1rQeu5totjbmYHkgV1AaYeAo3",
  "key25": "4XEBbcAcPQ9J9uxy6q9ai1b3xGZMjnjVE3DqcPxgSuj8WB1teeT6zuuoxMH46tEZE3aTnd2F5KqfCHeGVq6dsCcc",
  "key26": "4hKSVNzeyVGATC5LH1Ga3ShNdsyoMX3vFqi21L9y2JdX7dbZe3hvmvm6XBrcYJVLBmjyi668K3hWmHRqQYvidcV",
  "key27": "5hCgXVw8qSa9PPx7KoWLPKTUpRzqE2GgzreeArVBRZ8Zb9NhLpWgERihDRXMh77dbmk7aJNHThgCXWMxiFiWYW9B",
  "key28": "4eieo8xBDN3jg1AuEG9WkamH46kiU1YU3urVtqDNvqvb2vq6nUQBGR1HdRN8jUYqRYiTevGGgb7xDaUQPamhjKgZ",
  "key29": "Nw8AWnxPYrzyMcXaQaUH4rxq6XvVxamFoGM5T1VPaXCUqqe2XvpHuDkQFFBwWekFvGdNJpR9M2k8tvzWgtpS7Ab",
  "key30": "4mhjAkUbrLzdhk7TNq3oF69taKqr1dWBYY2eoDBL2pdqobaCjbUTXmfk3Vxsh2RX4WHrNQJh8R9fk8Um5iCe1Wy6",
  "key31": "3E45BBqjF9jNgrtxPs8dL6jUu9d2erSjSzP9u7ku2JFDBkQsxn3mFxpP1BEce5436X55HCbB1o3YvnnRrBbeFf2c",
  "key32": "2DeSUsmyraX311aPjsUbvBk6kT8jKHDhmETXc2gHUwe9k9XGXrz5rCrMJBHczXmb26r6crUetteoE7AR7eVEpeZi",
  "key33": "4D6GwQoXZyfmCDKwhARxpVofAZj88Xkz88ghUgmRDGRqxtc7YGbescMqmUhdWkiqFHzth13SsMzjGfc6gu2wzsV6",
  "key34": "3dCudXpci6JEF7vgp1oiAQxeUqacu4mqHgL2wkkd5rL8jQqRAGeeUmawCjbqgXQrF2m1ZAeQAeGG6pLbVyLaLref",
  "key35": "64WJNK7BxAg9Fr3QqthiNRQwAguBxjW12Zp3KEAAujzDbTmi76EQK2VzYqvwWkYKCQGH6WaeruW8gYv2WafcGeBQ",
  "key36": "5C4bZ1uqCkYvqL2DRDCrUu9btZaGa7wLhoiic9iSXPhjUaW12iqaJxgqBod8JD8ZhQxM8RC3erJPPgtN2GuYaWZ7",
  "key37": "55Vz9EEkNp4KEL6JtqxaMdL6bVUknaE8fyTV2HYD8Xy9CeS2n5mLhHYySPokL8Rjx37B9HYqgGWypDxi8Qa7pTkf"
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
