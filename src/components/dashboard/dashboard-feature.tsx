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
    "4VzVwYB9iPMYpRhxZUmxfsrpGTqniAfud5HSRjsqj5cnGdMmRkXaK6ZrYcL33vaPrgtP6JLTBCNh1NBxsuUWLu3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yXdERAjZTb8n5ky95zeyqHgyLExf1UYu9cm7D7RvqQ8mDhHAFK8xkHG1GRFtjAGGxoR576r4BbrC17Q5xgVGop6",
  "key1": "2mdjPKsrLqPiJPdqw1ngmdrx3aGgMPd63HWQbaEDpGxHrVYwZ8m7H7pAjtwXoFqkxGwTRSxDV4nMVi8qteSxDrdq",
  "key2": "2VknE2t5yzyBLbiZq9Fhcb7C6YVtj9eFvrfLYtHSUGQc6nLrfoN1u9SrXjTTZSpbEuWrwUVtpTXTcj2ywuAxCuxb",
  "key3": "4fRTpErDi1omVwpApg5g4n5jFDSDAeeMo5tvCfczTUgFjBa99gX9eePk7zkWQYS5W9iSTgJT1xmJFTdue5p2WRiV",
  "key4": "3wzkPAiPoLNMW6pwemduWJwvgydJNvKQvFKCHQQ2MiTLMxNjtaM6ZbfMzQwAngwkNEc7SkG71mk3bUN6HCtSsd5Y",
  "key5": "2N7jZ9niSgiHW6z9kHzLEXrL16ufjiptWV4iNDyXkUgHBNotnZKt3CY1SsbBvs4GuMMqQwrBo5BvHBCjGxYNh6nR",
  "key6": "4w24VqZvTooEDCx6V3fTkUzdRgKBLxx39CYqaRz3VxAmKu19xgLCcMXArKm81cMhtpV1f1AUaxDMs5SBA93yMRyF",
  "key7": "QAVcH8w1Ah1uaX1ttkh4HHwXYbiD1iF27d35y7Fes9rdCrui8x954nWT2WkAekq3hZxPuCL448HG1WQiWHaCdjR",
  "key8": "n6XHYQWCZosjL9UtxY66amUsvSFTGY7qJpupL2LdLkAHyymrGME9Gpo2y77Wzqnvn3GKmA8nRf1favEiciTXb7V",
  "key9": "21VW3fw1H7bTZy5UgRF3sYDWpeaDFtzvWDTGUqWiYNa3fg5o5H6Eu9tzf2FZmRKNdx1D6is5Uz73faBUr8wgsyBk",
  "key10": "2pwdatDRg3Bhp4tR8eAp2E5TubsN64MHViEZ4Z16uduEzFQBh7fSoNS3tN89jLzeWABvNo3H5kZC1XCnzjo74VP7",
  "key11": "232UXX8pvF9Ub9yYYYd2YTBoh77Ssc5nvakafVPWPN5N72AQH6CDFJttJk8aTzBzgF8BJtjGuNCDzKPutZ4VED2v",
  "key12": "2dWFcoprixCXZGna3sfDE4MQCLqxc75jmt3afVgEPFVRxoLsozPdYaHaDkC48wss2exiL5gLefx5GSzBqYdvZURT",
  "key13": "56yh23oRRkmzP9crbc7yrZU4xZBgWSNBxYRH5rgFDmZjhoJHGE272DRUNPmJd5cJE2CwQxJ6eHGndWK8LLfhbrv8",
  "key14": "8W9RBLmCUfku2WQKUtGWV7DY7YjxBDLDbEyH3kxxrHzfTyX8QPWVgC2PLqHtztnhyZNdyWCWTMxWvR6UCdqJjxV",
  "key15": "5JgGLLFjpjeQ4hBPphHpzH9yWhLdwaehtv7N8kVMnAChC943knR3M9PoPQjv5ZZnVfpB48jTbR3yFbdYBqwLK7CR",
  "key16": "4VsrKWisUjcMpqnZwKL4wp1koB5fHVcEdzKwWNjJ46zV7zYgJ6roFSNM7aqr9d4AiimYkqiEmjjWL1mYNizKuRQZ",
  "key17": "3E8y7Af8FJoYYJ7xSicAt5T3r8aPLt6roM2na4buAWuPxYFkcf6FJaEopxg3XsBtvrZ96raKj8MwMXxdC2VZqmsH",
  "key18": "2fL6zUJmQ7miUCkRtwcHBxgXeaDBMjWgZ1jeegzMAwVjmcg5YYQSvB9A8LFrxoupprG9Zzns6e9gu8LqomxWq8zj",
  "key19": "2grQesAGbSetGYaA5rdC4QPzddopNYX9fPhtVJPLrobf6PSDZjEWaYsw5DxparbD5ZBLwxQRy15euv1Xj6Jzc55w",
  "key20": "4KB1gfhHbdLHRzsHvWREAaMFhaRQZ5vhLZwLGrW3rDFZBh9NMwGVNDP3fELTnTY8uMwJ8AJVZ6qiBFYhen6VDhfG",
  "key21": "4ZZ28jnEgLtorCTH7YChj8u9Jwxs8Yofu8bsGeqBGBWDf9KkydV5f8DoN1jMjoA3j4YUyt2GtAZU2oHvCjfDYEjf",
  "key22": "yYNDk1cgevZLvB7JSNHBQY887H9HyxWjkLWGwHgsM7R5GwdZU7nz65qXNae8p6vYeHHTfpcTE8CNNctwixzRCjv",
  "key23": "3v6TC5HZVspFRY282zr5FEBe6NoM3aJj6K1dGJtG5b9cykQXMbppP3RCqaDwArgkd4sin2Zg1PpjtZeP2LrGTXEZ",
  "key24": "44u6XFjHABN7YdJ75XuS67qnE1BAzpMGGYxuYm7z3kUM4JvGxxz6suoy5wcnCFdTjfMdChLvqFEdV94baFiHpw3V",
  "key25": "HQARe7p5tgRynXbjXHQPCpEMe58wAHmy87FmeqBnM5k1ACf3SYSqnozhLfPwtHqCDPA327T8BmhwPp7RXSQPbqt",
  "key26": "trMowcWKTrMrVo25VLyMQFogECBhLdEwVo9UW7njYsrQXo57c8SvVLoMxYQJLqn8kTYbVzM678QgxvRtAuCbj4A",
  "key27": "8UgrreLJzH2F77WnXQEHVgnDUdbUP9NJbGUNmNC9wC8YNDYqAgXoe2ai8qdLe8obUB46869cZixEAWjceSMZmNZ",
  "key28": "3DW3U3wYopkxCwc14gKsWENwinUs54GMRc4rM9zEG8jcxovfM9e4DWQyDeTt6KCxYqvem5pR9AA4KuuMm1MLb88p",
  "key29": "TRsUbosfsQPnM6Pi2YP2tDJAk6KEoZxi6NJxV2CXehs1XmUnVvvx5VEA7eevG1VeCYcwXhWsURdgZztEu6tfFQK",
  "key30": "sYvBf6x485zMFu8hUrYGzTcBbLKSqsxvaVXpFXo9YMnaFhC8eHHyheN3rMcsu1P3dv8UBerHY3BznRzUYuRNsRn",
  "key31": "5o42HBmkMTw1iuee3XGAmCEDmpVQL1U2aZP28BvDKgmnGpJV8qVp2Hwv1ALYexdWfFGrWiEqBgbwGdRRSsdL23Sc",
  "key32": "rb3ThNEmVfVsDnTgf8DKtVWJ1ofutrJAPogAhGXMRnv5no2hb5HJVDpKr2ecGrWRdvZtNEsd16bLc99kY19J9Wj",
  "key33": "3cVQDq9L6vEDHPWoJzwrTU577vfKKj7oXLQXeg1yHP2v5wCfxmBTyBnXZ7EbFNcLkVeZJiuzKpy4pJ4oB92myQyF",
  "key34": "5rpXGRaQHxHLp2nWXPt2yHpes4iHdvEZc8H4AbQ4gto8NJCqz5cu3mLWsKTPEf812eZdEgCHtoE3R2qfZ9bqVwr1",
  "key35": "2RQf1jUUkFxNh3sFaeYPSvz5iuRETL1ESheYmjShWq8QVRrgJnNSc9RaqgHyfuS88ZkR7TmrLJT1H55zUj5r7Mjy",
  "key36": "2wvx8SGomGQBZwJZhBy16yWeRfMNCU974MEx4E17fLGP95DRDcKePU8he2u2s9GhmPjN5PzejXHvKXsi5T2GX4ER",
  "key37": "49xPrvPqSj3Cgak2tPabKLXPWwLpjYeeJQnAtTKJDRUc7XWWiXcC8dPAAYn5FusVThQ3PVNMX1GqDYd5xsREUjtT",
  "key38": "CiKfiw6QSiqW4f1UWJ6Psc7So9Amb2NxXcRvQosTX5RwzJniwyjeeKid9iTZRfXLxg3Zzpq1HwFw6A3ofmKnskQ",
  "key39": "268FjmCtuZ4UjUJkdiGLfiREyuf2Zck1vGs5nL19Kk7YdabXcg4scDLLZM8U4AZfpVaTUbMeDSeXiCgfzxMbDdpS",
  "key40": "24SxuEKYM3UvDy5KGYWgowyZUfJ2aYp2U6nY7zEjzcj2A5Lz2G7dMSkf1DGvLbwRPXEZR8dPnADLVEgKSankGo6t",
  "key41": "J5a7djsvYbYn4Kvc6Fywkb3RG2qiPNDbKqTquZsdjopYxbJRFtzo7s6JqxMXAhVpufc8HfLPCYE2MXyhwqveVyx",
  "key42": "3QjoF4ojNg4ArXVNg5PrZ7zGYc5pGJWXU3vgnEoHmVxBExBJcYN7faUeajFAKVwRwjtBcqdLENYL3AuWVhgukMMu"
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
