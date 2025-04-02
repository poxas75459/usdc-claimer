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
    "35DN928v3iSDUfLA8SiDPp3RX8Buycg4ikxeywG42ExYDHz2PZxCoXjgHzCwzM6TNk7J9JJMnDAqQrfb16Q62myN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NLacsf4NgtwWKgNvA7RoYSG1MGdC7DgxKLQf9NWhoAgDiFGWJjKQvfKRZsSq4FihQZW6D3H7HCrQdQ61aPU8i2B",
  "key1": "57cGZoDFNzHGxypYDnqNgNf968pPD3sXELDgg4iStrPkmmr86GXbjRTaVkpvcJcC9ohgw4P1eFr2YK95qB3eJUg7",
  "key2": "4siUHowAekat8VBjFbXUWTEuw8hbqSjrhtYMMJTgEeyENU58zEdH2f65V9ZWUQM7R8An3J5xYBwa8LnR8Xj6aWrn",
  "key3": "3Mrgzyo1yzzusGQdHxA5DrM5iLt4TvPXmNYWavjrVXtD8hred8SbtwPTrzeAXCHUdKBSLYNq2hVTh6xnLHvonE2m",
  "key4": "4YkUbh5vSgZ614nK46jpFdR9kfm7tUL3PFEHzynKLqwwM6YjzYvvwZTDpjxTuYk6C3WdjmKNiJrABb3m3eb6Xnce",
  "key5": "5AePZhCVmZarkQZ4dwBS54kyuhXFFdDqjMx1P45GQBFZx4fHxyf7gXP4KGMzZg9MJNqxXSYozfFGWpSGqVjXG89V",
  "key6": "5DaruK2vWJR4gnpqDfmjtB58EUC9Y9dWAXyqryWJZ32xxeD7DrNq6W7RrUbJXvDxqYhD9b5akLacYWegVmmDTtPs",
  "key7": "rY1GfW1GWEn6bFQEjbKgUVx6PpMDgLcvUf3kGJ9Kqx5brqTWnzk6Vtk2zTEqRudtCuyJY4TTKTxKnDudUitBAHb",
  "key8": "5aHxnPcDhEadDUdV4i1JCXYTzwYGkQqwmkg5dmmNhCnHcCCAJvdPZyyZ951rqE7kuWLZFi9mECTar4aMshuKXXPh",
  "key9": "4XJoGJ2TN5kEw91rHfBgbwcGpwcwPRjBk7m2t9VPVcy2zovNpfBujZjras8EoYwC5heQ47VPZ3gWJFxjukXZiAR8",
  "key10": "4qQ9AsXXiAFXHFWa8wWPcoA7L6ULN6Xj98E2AKFGZ9AE2PczGi7kft1uXBAxDzNpoLBqqbfYAxg8Lco4yCJUPn9B",
  "key11": "2d4t9zGKucXPfFPMD51NQ64w6SdkqHS9r4PBqt2Cp2E8WSxvr7x8nmR4nPtto36DgXWUCq7tQvbR1pnAA18CPrMY",
  "key12": "3fNmNPqGitHWxanAbeuwkPiC3sBgw9dLcw6553RkkugqnRCKQpgAJ1koGaZr5ENUrn8H6oYN1RuNhsSdhDxQg6R3",
  "key13": "37w5YMwXRfanGMbKeyuAGgY3gHWfm52wWy8PGKQdgTYjBCtVDb6ZSwF8FcefneGoz96471kJgnTVbh1gcx3uLq9y",
  "key14": "3ToCx2BruQsxiaGZbBK95u1ZE99xUF7D2t2U1SZu7QicjydVViin3PEYpej7KJn4Ni8V9pM6kKqf4j89UUZEBeB",
  "key15": "65UoQhiMJFTTMSQgGGsswffZYhV1rrrh3XCRvwcyf8s9hMfeCwXRg75HMJkKg6A9CZqXSfRAUMYRtuaqz23Zro2D",
  "key16": "5RxRkEUKkqadq1rdyFU7vFZRiUhdqutS7vcTAy68oANF11qPa1TyZjiGjYt8GmPNDHvPZ5K9bPyvBvGeUAejbmfz",
  "key17": "5p7SaosgLpUdm2UAQv8U1FjvnkZ9BipXZvipKRNnmDTpbd36chrNpeKcysc4wLGpwHmFRPHi3ceHx3xSgh2jUnJx",
  "key18": "5fLn9SVNFp7QFhF41ZhVVrQPdJWAKYFG516hoiEejfEMdbwmAreucqQ26Vt2DZ2U8f5XmZXHcBpQqa1HVXcb7RDr",
  "key19": "3vzP14peYwGQGtrfe8P42MzMFVuKVJGgfMfiT1vVkZwwL6Raat3XwFwLU71Mp5F4fkAQ84qr46HT5PsqDknw4283",
  "key20": "3PiU8DEUuS7fr4sDRiD2mfz85TBZvA6GPsoqSFMuaRtUqLCv9tUKnJTGAohk9tUXx2hfr3zE4zgjwjD3q8xUx1SB",
  "key21": "2EUmUSvYoBEuRdDEBFZefn4CmBFsRMfD3hVwwDhFze6fUBybs92GEvPqLy3YkaRPRgUSGPAXqFmPmGQpp5mJSPXM",
  "key22": "4GQ8G2hqXdzgR4mMNqgPu3PTcQ4U9vLxvhAMHw13QFghbYqAwUyj7LFaLos9FeRKJ5dwpQk9TgAiwyUc8S7B2c74",
  "key23": "5547P7mjGXx54cWwA4KdNQEKX25ixAdcdb62pcCidfC48HqCGWGmt4dQ9JX1xmdiygY9vfCUZZ6jqQfe7EkRBBYM",
  "key24": "3qgUECkq2mujQSgw2Tz9n8UBFD4T2FqYU2GS6HHYDs8C1YowJStLnmGNgZNxGMfE4kABVJUeJw8rgMx7nBaETMkq",
  "key25": "2dwLcyBvWJeU7yZ6eu7qkPhEMy7SdB8cuedX45mRTzqjB9HZu7WFiVVt6A4Ai97Sj3AgDRFUG98SwwLLhcd68MVs",
  "key26": "3PtTz8x8MFaYodK23nc3dViDxwXL7RiP7FtUYPH2WLQiZteq3KUT5vJYj4wWn8chCtkrFMxWnFr2pGtf4bbUcKu4",
  "key27": "2WFSCho8YjztWMqWW9F3njjf77pgKYJR9eewqwNPWqEn3rZe5rNUDb4tYNDBw8vrtuUrm6cPaukXXcY4n55Vnexu",
  "key28": "2DQcZuyeLqkT5CNEnwR8uwBG1i5CK2wuhHJmdSjW3JQxtfZGXNDdgEeQhJ46C1AtSxvfbdMqKkLp3i6btLkL1yxN",
  "key29": "5mcFfSo4teF52xWbaB3Km9UCf8Ki3kxognfkk73vghVhLF5Q1GfDHrPePFpGzgf9dv8A5reb9zRuuSTq26Lme3Em",
  "key30": "GNtZDSVy3Fa9ZVex28Fc8RYbJ5ftdQtAvtrCWj8xgMFFHH6kmzDa4n1d4LqwF4cYp78VvxU7PKzHkoyXKXfCPao",
  "key31": "eAdwmBRGhwi6y3rP53xJgJ5A6aZpdsnPzL3AFztQ9aGRwT4USxSr7VRAP5WhgdBYSJ8jYGDAvhQq3bXQidm92rQ",
  "key32": "4Cv8WHutQd5NW17ZLUrNjWCYNKnh4v5HMLdjYMgzTUy3bKi8FHkhHUXBwnvQufAtWHkGzJk3mGVua2dHCPhQbM1Z",
  "key33": "zqoFadgeGbb9bitGUUahMqp2PAfNWUoStuS9QmhtoCxtfhggbr3bCJVAGQEeSTHF742KoKtfQFT9UpXbJiU8r6u",
  "key34": "247zXrKTQnn9MhSduTPsMNAczXvVTULezdr8JkdHMQRzUT1jNhDFfqqLk8vhb1rFsm4qkzPaNnuTXMMrAsGnfNUQ",
  "key35": "4ixMhy4p7EV4LpcuoyY31wZdVYkEoUaZuLhQv9h3SNsKrV1momNhtCmSPnMUcbJpp4kgdxS2ftRadq8bF3onKuVd",
  "key36": "2K3E73rSSmeeFB6FAQSk3XqGzVr5KDDf58tVhPvcCueTrWdJY33ec8uzcoAF68RefPGnVUXzj3Sr8QqHiNDjvDDY",
  "key37": "4JbTsddetPDmJiHSFjfbcvkTnqBi5xftSVnSpNXf1ntDkH1v7sLEU2TfswvCYQVVDif38LrRTxwXDh4NDe3Gfq2y",
  "key38": "2XVsifxYKrSWWqZcwcc5UDBMmeqRd7Nxq2rcE1V4zD131wsaPqFfX9UwbmCzosNDMzzcKoKeDZx7YnLsKLfYMdsW",
  "key39": "4aLM9JbP6ZoH52y7jUTMFMjw3wJQUXzYCVsmT1paz9YbsHeWZbAQdbfAe88kVu4foVbVuoEPLqU5wnu8iQS7T6qk",
  "key40": "47KnbGkr448hNLk2ZWgykQ1R4UJ6kKkm8i4YJ2TJjaq31BmWiSWRSCnk2WVs9voqrwaVZyWEHnab2SaQqXeRVtRb",
  "key41": "2eu4wDLvs57cFmbzGmvskzusNajH7wDt6FAM5KC52mRfS79fgMJdxuWqskRZPskieTo9qRvvpqfbiSvJybpWznd9",
  "key42": "3fB8RVDsdrxxa8HY1BPVCGuRDioKPabDCg2bGivob6Cascixu1BHqFme383aGNpanMy5oWugLCYFG9NDrKkwthnx",
  "key43": "3wXeWBjkT3kccZvAepujPhx6auWk9uuDYMDtCBNQnwwQGGJGCSgUfvf9Zds6hEHcEeqjJp9QTFdAiYgqUptSzT6s",
  "key44": "vooEd5QhUroomoB52WfbRLCY64C3LszdfguT9F4snDDYoX3ecaiGTrPakuLFR1s9idC6uPDthzW6Nc9gHKdYeYT",
  "key45": "2ssF7BcutaiMop1pj7BEHa1zMT4xbvzvWekLSFR3ToiM3Vdf2gvRkiUpB7gKLPqVNaPkQz3W33bkQfRcx8G6os6n",
  "key46": "3cbrtn8AP35bpZLVtT94LV9m2diuX58bMw9kBarwa4xt71dRuFKJSi5HhnkUqzFTxC41ED22iVApwKMGR7ixvaBp",
  "key47": "3zBdQRCevWLp4Cix3SRWwi9Xb7uczW3XeSt1N8ThTgcoxbEsxAsUXWUJ67LXnjuuKryVZAnKELNJov4qL9s69DX7",
  "key48": "5gq8K6a6dBbeuRojUG4TnW3QD7CJqpZVcWngMMctWb62hmMUKcHi4NTcgvjPenfBLCbMXeN4knFDcjjZYnTToNfh",
  "key49": "2GV5oJTqJLdXj2dV9KnSLxRoCwjMH2vBeDkoTcKBnG9LyUYgjJ1DxG9SzceXshWaRnkyaM7TqMCg38DD1SwQEhLz"
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
