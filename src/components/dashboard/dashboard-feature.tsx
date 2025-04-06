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
    "ajLhwziEAzQrC69U8VsiykayWvkfAJV5gk2t1RBuoRNmj3DFarLi1hRU9Bqhc4Gnczwx1GRfeNPj7ccfqkaY2Q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WT63Y2zhT2xJBKzoHkqwcY6Nxg3boURd4XwxywkAw6MYYDkmvvK8gYZewy16UEq2F7TcfVnPKXVkvkBysGPG8qf",
  "key1": "2JXzP86fxLkxJ27sRS3QSBpjfjAuDRooXA6JKy1LC1qayeGqTqTur6gj12q6nSzj1wWyWVN3FbDHbSSv4AGSE33e",
  "key2": "2nA3vR8TAy6sD2xxxzPPTnF6v6uq9zCKscVS3KnmueRc3h2AjUCv4CHHNg5U3aVaFAgVnTiCt5Tgwf77AnNwrZQc",
  "key3": "4zgMc5ZtRdovQDhvKdLwwAh991yRSsKj3kyU8LVxijHhGkyErB7Zm9ETMwffrKz8mUDnxv6HkpAg3DBnHy8SuENX",
  "key4": "2XuEpxpitvVv74hABZctUe7MtCVxiDE9Piw12iEAH5GTDxwo7vbcrUtfhUYmSb88yaB8PBKP2cLk4FtehcuzVRai",
  "key5": "4wQt296CBzvBWXiJ2xox4ZKHuXMxDG6LRZgyDs7LEY8fUvKmkfWWmbFk2hsSUoGBgwcF49DiYACGWX4nFQwrThhj",
  "key6": "4aHNt4Li6q6oggSsZCr3QbkMmBexf2a5jCNPq5Ayu8ETBjaWPYZi2J8JhPPToEQASzBEf7RSnHmvZGuFUmx9a8q5",
  "key7": "Nxb73nKjLr7gQkhLLjqRyQ6EjQK9CvZK5ihV4QxwM9HxQgsNtbSjcJ7BPBBJpHEBZKk6P8zBSaYuHma7JetweG3",
  "key8": "VKDqoqVTKGAoDVBTrwtu4aQiyKcBc6m4baGF9r116Nd6rBWuy5pPvPvgx6yCa9QiYyZWCiYRk3chGASjLUMCbas",
  "key9": "oRHX3dprZcGmyLfefjjZf2mkyP9N3f1vTCMKFAJVend92s3KTPYuSEPDEDAAQ8T3teSyGR65RqujNP2GhQTWv8k",
  "key10": "28A3M17KDq5G4E92D8dvj5GvpQwZG7ad3RpRKSpFFSnCYkiZApEdp4MZuFWne9zdKPqhwcojsJUCKL8KHSfc2d36",
  "key11": "vs9s9nMepPgUfX5KprmH6PFdsvBcHHRMpPULgVPLveiwfrh5hjtfpoU8PrdcjdAqcdsScSBcyKL6pdVzN8SrREU",
  "key12": "3XJ5wtKGNgGVJw4dqj3CmsUg9aEWX2g8wN2yZP56PaWB1ZA7tMF9rp33v6bjJhQQg2mPToCsB7PYvfHce6M18RNB",
  "key13": "2BMuGbZa8Vm82ATBuCXtpfFZgveT4G1rN4p39UciksPT4z6BnvsjMKHBZpqwbCsn2m715rn8L4r9F5nFVLzEK4zy",
  "key14": "3EMw4NBojHEx6WeH6uJr3wLHszg4CteKa8URxz8Y9z9NBGnNenmqiWPoW9yAmYVFUQ6n28hEsCwvjq1f2erjfL8c",
  "key15": "rjtgzrVweRCwwdFBvtHkUiwXM42quUNvf4nRv46mbJZi9vB6WYUuECeQ9zGBXxBbtUcRVLWdmxrLMaSNKX7uZme",
  "key16": "5nuRZXPT4BFVc69ZaN3nH64FzPzAukv2hzMgEfoeyA5a56TKnkVXSFQUpXsg259YKKZtj3hPpHxVmkAxy1jX7vnv",
  "key17": "5M1btQVWLwVvrwbeuqeve3PJmpG1BeR4RGtZUvV8KcMRf5D4AGV9Mj93sMKn9F83bkWro5ZChpMrrRgWqoFfiqie",
  "key18": "8c2V6qdApGd6WuRqbLmcjD2jcmdPrcfrMat612xY5rThDQ2uH4K9qTWHJ6nS6bhGcYENPnsZW8sBWRhdRPtJwdL",
  "key19": "3Tp4DQfqBdvrvBNmU38CDUqyJs3HbQez61EmMmCshsz1EGQKvL95nk4zxoDdz22F5euURkeh68qRW9q5PjqB7qEe",
  "key20": "4RDJRZC2pYYTyTzAXFFjgHHcbQ1ukitC5ifTNa2gzFXTNXHPR7qrAnFJmWZiVRMAV7rfMju8hcCugabYnxMX4ev1",
  "key21": "5bHZkE9YvvkZ2xMSowmgBnUffQszB5NjLyo7WDxJXCnpPKBQQhKgEbwmeX88TSc357Db8kC5oJqKk9V4RAvB7Boq",
  "key22": "2YxHewMTsG3k3L2SkMVdKQ27qT2gP7NrXVzNpAQJSd1W4ngYjXY5WuGmpEZk7VZWx12ARePMKL45C7QufXWedq4z",
  "key23": "5vVSfoXwazDhAJYp1Er9NnErmu6f7k8QGqx8jb9WUsZ1g8tqbQdvpwxYEAcQKHEfR7tFGqVVZjB8LgkJ6uhqrcyg",
  "key24": "4MX4T3Sbpwn6Boc2tCzMgMhywqpREg8i699NVM6tn7S29Co1S7KgawcxUEK4EtYKENrHqgSh955XPhDy6VoSisV8",
  "key25": "754SKYN3oXtL1ofV18EBdd9Y1sQTb45hRriUyjDWKhjqCRaZfcncUiamWcmPCF7BVCnCKooevhUnWQQtEqQ7RB5",
  "key26": "51XhjEqRbZXWHYJ3P3PuR4QmJhJD3UmVCAM4ktib13UyxkkZ8DFNx3SPHUrwpfcWFfuNDoLga4avgmCKUNQah5pM",
  "key27": "2TLwjnnz5UK7vJUwq4mDWGeYEun5oai2nooY8vEeneueaaLiA1AupkxXXFC6QHyX6UgURiyCkkboaJ5SfAPDHvw2",
  "key28": "2fMhL8tNxq42mxTzHAGnjS5H1YAAkNhSPHFpvE3Upj8LxPG7svRpBGeezZsfaXujr996gG3pmHbPHmHX49reNrKA",
  "key29": "5JAQ8vZDs52iZahCkohqWTBqUcDPPGdc1utZmbnArKgitMgXZ42JE6v64taS2znrbEkib7kxHQrMU8Hksje2Ckxj",
  "key30": "3q8K2kBfvDN71rWDM5ejqbda6KbSk8riptvc1QjRnxYySbpStabJEwjJ2ti7DCVrcUNi7j2CUMoPNgYuzp1z5iAb",
  "key31": "2scUmsxUahws3ZY3x6VXbK2gbdZXw8YjrkvwQnaCCCnHR6iGYFXuLDLsCS3PfHNaeB4Ack4mpmbib8Pskfvmxsfy",
  "key32": "4BgX5iLrnRvoPem6XTAsxrRYqF2SRX9GwbGPBEHEceuuxwToHvtJMUvjX1wpfVet5TNUsjbd55P41RK5XNyvfTqu",
  "key33": "3inhzZx2aYnjC5CU22cMDEVLiexAGAMH3a9vjeKo6g2SoQp186sQEeo78YEHZdhSKVx1ys1wwhTXs2gKnreWoKs1"
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
