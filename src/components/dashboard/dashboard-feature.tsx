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
    "QpRdjkNwDBEGDzBpYEMXWb1Vmnm7rerJoPpDzDWAHpN423B8mCSABvpxr5Soi9MX9HjNXT4ddHF3NXNsJ96euFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gQ176PGPWHdrHrRjiLzWghUcKPNZDp65Ssciz7zxWjH6hf7zmaASb72QsJRxQ4HsHqKxm8KH9vTeVbDzdQ5YLdG",
  "key1": "4JiWCu5ppsZ7xEEukMdmwwLrgSGCmHAK6pX2JPiHtsjTB8eHNpw5Bik9w5FmrkseyxbAwRKUCpkBonZqhco7ZobT",
  "key2": "3nX7SNH4UVfzZbdBrQub9Wm5U9gD87Ju13zeVonJMc1RvVjztEc3KqWTRyu22MXcVysULZkGsCiU6bXSCoY8z44T",
  "key3": "2pB2tcbSDMWBVJ26c8nx8gijXKC11UWUpBfTLidSSoSico6bBTRUdC6d5QUhm3rfLnhmfohysYw8dAEx4dDyw7Pe",
  "key4": "2vTK49cbyEPnZGx3My5bccD5bgofWddudZAFnWBQrHjMtR4mwjM1t9HHkTdb8wfhgDomRmHYxXUaqfTSq8xD2Hc6",
  "key5": "4ojMgZvFgTHM1PgAGM7Mq9cMqm8fJCPFNxTjzsBfdhftf1j8y1YdTBp4hTUBvVTxkD4p26FaysXoB543f6tx9Yrq",
  "key6": "4xdTGWqVsquoD855ucw9mgKMzJdxtxDa5DnutrvxNt7vvNB5EVucdbPU1VJ1FyNeLxCnQWt7EUGV4gqhvC248Xhz",
  "key7": "2FBZHpsXbRZHyjj8vHmN4T5sM9p2nhNU5mj6sumYGukeuJsejFHsUKy8MVqV4RrBfRHXosfMPJWXT327oxeYNHm1",
  "key8": "4tBNqu8NahTT5CKByAxvQNwMpedrbxHsDpumhFbgkbLbNu1mvEv9sdgqvvohxxJvF6mphG1HP565DxKuZAxtqL4p",
  "key9": "62PnB87PyJxBximW2EVVNNhLJm2QdB6kxpDKxPy4XbmTL3gqto1J3LGZwm69p26SM7RrQye4YwHpoGh1aj8YUY2N",
  "key10": "52qwU3SL87mHY45JwkEKkAqu9c792QDKNT43urPGnuqo3vAwHfhHzsKEskZCf5io1xsnhxsazVv77LAFEygBhLLe",
  "key11": "kQWHMqE5KdRJCdSFW4YWp7s6kDRtCiWQijmHL8mzqDL2Mi6gbzuhZ5habjgMptMDGzGH3bb2x7VrGuMVXtHZFKV",
  "key12": "CwfaP2RPKSdv9E2dXxvSa6sgsds9LDVf92TGwo1fV4yNqxWxTEGqjergWmv5f4u4d21yVhLGEF9ib13phGjdtBy",
  "key13": "4Gh2aJF3g8LNiX6wXksTAYZtcgA9UrRdbL8wahyLxibLzk6N5sQ3hcqeg1cAsTSnCkmaWX7rqGZvXPjBqWcRFm67",
  "key14": "26pUBGcswtFRQyXbuaNipcmyJi2NtkHf1C9AYxvhLUDNqXagAXbyrCjGRsd5zVLn1G9v3G9hGGdLxCaquW92i7BH",
  "key15": "3ApFH7m96akHtA4deNEexDSskkZdqerJUQN9ALeAumgjKsFHGFMudrhc2HdSUDtzuMEvyi3EcTJkjJ9aPZmoRafz",
  "key16": "4Tu9J9Tu9qBB7gbybxq26FT5PfEBSdXyrcqEvmFH3vCzagdtqDhekuL3rkkrXyCJ4PcdmMryKMcmNJkY2inc8Z9a",
  "key17": "5S2odLxowQzGz25yqAshr6uSJNLGmfeHTGQmaPSN5hfdragQ3EixSwNHhETyWfsh3skVzVisJfjF1UH85WrK5YEq",
  "key18": "45Exkv8K66xhvc4d53jmV57ggjVNn7VjBqftfZo1Xt77GsA8AqgEQJjLAZU8Xpzz7psY8xySAeKEzSKEzkr5dkJJ",
  "key19": "44H35eDAGnQaTCtP2Xy4iZzi6cPjGoTPu7UyWEkkjo6tv7ideE6bWgE3vaCGB9K8oTGRqHhbqmALU97j3fWiJ2cT",
  "key20": "4iz9ogSMmgPxG1ozezuVq4zCboN5fi7gAsEWBTvuQjQpW2mv1TwJQ41umQwGSfGR7QAPJJhk6k6nrKBV6ero6RaU",
  "key21": "5RhdDduoybRKTea4mCq4A6vwUgMeRMoRJMTAEKUVNNenLeaeWrbk3dRcTGYsthwVsLm6HkAUiygh5BLrg6iATh3S",
  "key22": "cQdKM11dZqUCfCttrCHSJUknGa6X2ADXi9ryLATWnBPhg9zjHR8yKedeu4KC7eXXVY7mURZYepkoqz6GzmsXstM",
  "key23": "jZ4KWBbckva9Wv5LrjhtVpSa7655yezwtBAShGJG2Bq8Wsg8GagyJ8ey5kh5qSjfDfgdNTH9mmST4oQZguTbVaW",
  "key24": "2kKJwzWBB6ietLiWjfzpyap3wjyfctrcm8sFjJsvmgKqowL9jGoZejULAs1pcTXPn3UNa4tyz5kdZ1PSxTZJVwcQ",
  "key25": "4Lat5FfQUX7BZTznEcFsKh8S4SZRih7UWyu7ku3TT4DC1ekyYcsTGdwpepFNcti1yHPJKLPmcPSa6CxkAHwfwRLy",
  "key26": "4Zk2WTr8XhxJNogwN48ckKM9qFHg4WdpXPChtSXJLMvHCkSoasoj5YYoUiBGGkbbRTgFhMTJTyhhrRaaBTpQC8C8",
  "key27": "2tsg9UfahJFtZ7wU9RXK6ZCUKYbwrY1RbNZ9d5moFHKTMU5LFwGificuqPZBJV1gGDpyn9boPWVxGSuLcPwhkDHC",
  "key28": "2d9Sjf6jwGrh9WV7DTbDUdwEXUtLLXxck4DDBak2FQJs6JJH75i7ygJKxQCJn8TGYmvmpS4eD3iBHUFdpAmNGcD6",
  "key29": "5gsThb9Lt3J86KnsbfXvqwAivQFYDQwAinZ8jpfmgKbnzjy3cHWXK6gBnTEDiujGN37cw5QqUVjz5YxbzrFMg82Z",
  "key30": "5D2MmPedXpcBeQPfs5JJP6qjqas5JCVbiHacZyePQjxNMGQHsi9pjTvqGVSbTyStMpLmPAavG6nbvo6oKsUoRazm",
  "key31": "3Fbqwc2ZkqMAeXAq5zDgL4k1ZePZ1ur6bHUQqq6zgYyg7qbFPo3As5sKWDY2GbV95fCgMuWFEitsexUDaZdnSRrb",
  "key32": "4MxcxiZ1KzBK2z5acMFiZ4Fwo5bgwDKjmc7Q4UW39yhtZyMUrQwMSjfKCgq3EHTMpRouwaNnHotqKSAcHe7jiznb",
  "key33": "2BfPEFF5AD7EQoCNPLMap7jVFe1uJ65ZGBRdwEbL1WMwkBAQPtkAL3A78A653gtGH9WbYD8dgfmfTESc7iaKdWSa",
  "key34": "zr31rKKX6NukJqh4S5q1s8rHftGHG6bSSemHSCnL5NZxtk8aAfvyzFQWGADaRdJuy5rPGiTopbWzQUn8c45CWMx",
  "key35": "4rzZyDWVaKq4b3hMZD8CMHe2FHb1paDvznaN3mePtLefAmrkpT5NLYxfL2jZNNjhPR3q6GfLkVmddmVqgXFEKBAh",
  "key36": "PTgFbcSNj1uRxGkqcQQ2iZJNLVJgM8GK9ebC4S87jH2N6eYuQtzXAukwhAuJLHRM5ZSSQyyVUJ2NLZpLahkQm4U",
  "key37": "uH4ZG9AsRRWtcwrbH8FLJ1M9iR1WTC3toUTm8p2Fx5wUvXBYMQ69Drxhx7yKucod6gMfL7oZRDLak84VPnx6ncj",
  "key38": "2fuwpqyYqoUqYxDi239f1KpiGpQCZCvjbJqjup2TjXgzkpiRui8GK2G4bnXyvtj1u6kQrFX8Yaki76daEmuEnMoJ",
  "key39": "t6HuXgd5Rn4mADEFDBKBGXdEAsg8PHXA73wY4NWTN3z7A6YSWZoEjWEf2cNMB8cbQJZ9fVmrRPWk3aaLqC4f7NN",
  "key40": "4qqbjYfx1cV8Vj7ZRr5xqoj93YicuY3AUSLUzQvG2EnKMgqgUAKuRhNH1jF2Zn1yRWjLU3o3Araw7RBerZA1w7Bs"
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
