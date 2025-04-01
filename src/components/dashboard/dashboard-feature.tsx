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
    "5Jd1tZ4r3XJ2sUFSUFUhdcw2LTSmmgzHsFRKwzGGfEMFwZH9aoEkXraQqX3EYysoMavUTWp6AxCJihCnGXotMtfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYwEYZetLVLKXiexeH8RyAwDJ1fX43u376pcK9EjwaoxqAq5iyEz7Bw5orQmFB7PuGkEJe2d5mnr1vn8yyQGEXi",
  "key1": "5aWLSsZhe18mtDSkRCSnjBgjebwQVDnKsFpGRY8dMEXgPuCB5qs6y2rbJ5oMy8hEh7MXeXzUcR5VUWXBPyWQt9EA",
  "key2": "3n4gFkHcpALpkZZAp6tVtDSdtz6icE2YzC2yCSyg2SA9YPwpbZhBhgqvfrJNU8nEYvKEYCYBYBHSG2sVAuvCA9mw",
  "key3": "PM4HiPc1XdBt9BMgmBovkitXJbyZtCzR86n69tLmhWfvYMTqQ5FKFWd7PfotQT6xJz1yjx9VbVaUAWEUjesmorL",
  "key4": "2Wm8Pd7aGqahRoyqhS7wLuiatLbHavs2xmFMtHmy1NYgKyDiCciaVWxC65awBmPwGsWQoK4Q3bBgxnoTnwUcbN46",
  "key5": "2eiMFwEcjEGcb12XGuANKEf6XscUwPMMB3WeUdMZXWiHUSqc8aPvGvf7Km54j6HnrhUKYoBjfbqd8P5og9EQDMtH",
  "key6": "4TP6fxc7LqkFVqJ8Fz8r3kBs1UPybz2YSTCz9x7yViTksTddfkjE62ui58MeETuaX6Cv3gHpzUUqD8puFHq9DSDa",
  "key7": "3RnUHvCEsVRQsHdbJ5ybXV2SDgKBvxwbg7W9jLeNdPHhmf8yPiXkMT76ocsH182D7L6PBSEjR8T5iC1BHJXjHV95",
  "key8": "5r8qNkd5bZkoVoGGDu3r4y1WRRUCMTmsxXLgRnL8oVHqpb5bepfa7dpwPWUZQdEB5ckho1uo8jbZ4qUb7WqW1hG",
  "key9": "5rdGmxasYUNtmsKcDsT27LJAb4ykAaNLtdk8vV3AWom4FGWAZqKVeDnAtbBqzPnLLseXR8g5f17b3HVM2i55VTVE",
  "key10": "2DkgeAGkqFppJzJ8z2F6yoeQ8ZHAftgxQ86ihVpsVxfzysqcXj8x13URFnwFRVutgx8B5uKN5vqTWZj15PiitfDS",
  "key11": "4vEqRxoyWRyQrHTLYtY6REXe8CUvAQKB1mLc4VackS4FPumfqs5pLP6GH4M8vZcGkXtzqt6Q5xsEcpxhNwwp5GR4",
  "key12": "2QrwxCuMnZwPiazhdgFXyYHKNutBn8MXKXaeprA9E3kAZvJp4azMSSgE3t4pLuYcgXtJKJAz7cJAFn32oQWMRPVP",
  "key13": "5LYEkxyq99ZTGKWP5uT4E1pCEHrxbVkkKkksagtQkriwumqM7HxAPf3nk8GfxaukwJ1KwCLYrMdPVM2BrApipwXP",
  "key14": "3zjn4e7zcqY2cdjgV2ERWQhfyqYt5ALD5uxCRZqFU1AyLPDDh3kNnMjffGMHy9qMQSuRoyHqCTbt26wRTDR7dez3",
  "key15": "3Xko9wLfoxAQe8Kc8W452HFyEdrWTWe7AdQpa49ZSNyUTn8fNjqQsoREnojJiD8pXqNyxGA4DFDfusoa8JpfKjyv",
  "key16": "2xTryVuA1yHdmRUn64UEjzvdm6J5mkEqrPjXCeq9AsDu7s4icuTbX7361DYjBWqtqEXWU4k3RGHhESiupWRBeuy",
  "key17": "2fgr3BdmHkFDQV4HLJw3iMAJDW85x3ZEP9Eq2v62b33fpTgJgkPiVwPPZmkr8CPYB1ieP7kuKsfKoeFBwT75qSEE",
  "key18": "4sfcfvJSkRp1E1635M7BrCJyrjneXfA8ct9x1pyp5nS5A1QQQe5BBPsczYEQ5efmCuCbLXqLnTopLBqhpsBKokus",
  "key19": "1Xs2D7RcYSpr252Z4XdytFBsGy1ARexFChc2za5pHymQvocyLjRd2Fz6gVXc5TMAWBX6EKT6zLufPcVS7Vtoe9j",
  "key20": "2qFYTr5YH3QB2GiXXxpZxFhJnWmaQA9hEs1RBjnpnddhvcv1o9t4SV2PsqxqgaKQY7WrkcacKmVVf5Krobv13ULp",
  "key21": "3zQ8gTotXzEhbUnAdtUG2gNoocWwn2Q7xFC1fxVavcDvKqebj1uL11z2ZPqn9J9cU5jLgqFjaYDPM9ATLK5ih1Y9",
  "key22": "5CQCGKzsVghFChiJXT7qoQL3wmAUz52r7h9uih8SdgHzrespUW9X3jYE3msSm8NmgYWoTBZi1VeMBP38Hq5AqRbw",
  "key23": "51tUhSL1fkhHih69RsjZXVFvpmBjnz6KJQfcVx89Ekf7bWTzaVG2TBZ2Z8dvwECo9jPYHBPHLs4UxNqML9gqgsmW",
  "key24": "2a7BbwKBRNdXHe94wTzeD5R7C1xH3uuSPm8b5k2RjNF9HLAcJ4bPZC3j5CKDsrMUFg1WQBJ5Qq4DBNx377GSzEQ1",
  "key25": "4K8pPJDLrrM3YsKYTrKayNrH9cZNvieFjR3Gdqn2z9PoUFrcT19YDw6vwhrCKazYySepd9jxCamj65ThTdEFUT37",
  "key26": "5vkrcWqzoPWzF3njKAzxEp5x9iWTCJnMhwWthb64hyYaan2qiwnUejbZHvoZYVwBTikxKQu5WxzRn7fFiBDmxba1",
  "key27": "2zGz3Lo9cw98vuKGeBEJqSRNAfNSbzrBoih5KSb4xAET34u2p3r3rC8bYEjFR6t38wcwCZLq7nhi4xPaCAH4wMb1"
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
