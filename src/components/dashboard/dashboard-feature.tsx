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
    "5MqHRYv49wrdSmMdqWvm8eAmXX49KLeSbaiX2yiUaQwE6V7YjiZJbgq1MMTstacRZ3js8essD4VeataAmcRo9KFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326ECVXuc5ftugDh2zuLpghks6gaVmBRh7MayV1hFof1FBoqtDfaXt4NuznoR1Cn9UPpdPFUyjDBEH6YDCmMpXiJ",
  "key1": "2dMFP2DdmtYr6q2zkTqoht1iEas1p47KbYL5icYw4ZTYk1Hedryua75mNWC6LNV2x8zMwuYfVzMJf2maJrKWuyye",
  "key2": "2K1KAT28tK5MruHenEtUZ9KYneZFZbYWY7TPzgxtzTPzQBQ1Zd5zn9RjDPyr76jFEwFX1jJC4TsrVMsVGPGmr4qm",
  "key3": "2QCxY5tbszdsh1aF5eZteSz6ofnBeo5ccqnVAd4Vo4YQU7F5if7n2qmKhpFkHKgxJumkJtWQoGamWXQ8yLRrV3Pw",
  "key4": "44LitJrQJqf6dRatmZ7myxujbuVNG1YML2raTZB1ciVL6m4KfHZT3a4qdx9FEhK851vqUbQtjYMoXcDqxTaYDnF6",
  "key5": "ZdRsmzcoPS5y1Jnzp4kwBtLtKZ6ghCzYHvfYvTB3WCAKJBHDAMVDfMMDmZRhG5SHnEtJ1xzH4M4zVhBLgENcEUj",
  "key6": "3zi7LqwnmCUZM5He4Pinj2F9Erga59aKBFTQgUqp2m34uTaq1ze8Px4kt1wwpcMUQR7aGsGTmoa1E1185sCVxPzJ",
  "key7": "3fahhzfEjPbQGB85LKE8otCN95A2U4Z9zpgN4wQ2WtCE9gz4Eth7GriJEH8SPE962upy5MPWcmLgvry6Zb4XaxfT",
  "key8": "27BB1JbSU7UMEgBjJ44kPVmqAusU736YVP7kfXX4u1nF3DbcFeThWYXfCog6uS2owtJrGcYtuJEt9YrFrWkU7Qjy",
  "key9": "4ECVJTNKM3kaNJJZtdPMbQN5KeF7NzerfRGB2Yzpao3jAvywjzHpNkgNhdpWqNeFzed3F3rGpR3FVTW7Z4HSVg62",
  "key10": "4PK99v3v3J2XMQpEskmA4348PLFubba7zYT1S3P1MBFkE3WmZ7cjQBtyLh8tteTBumo7QMfHYpYoaPd7r4ryGAiy",
  "key11": "eDq46nKc4jkdgBxaUqkWQsNVSMeCirgKWFYbbu383af5UnBf1zTUG3WTLbF7ACTU53RrD3ogKmvzw8AAu2uiJG7",
  "key12": "5mFP3HYRdd5def5BVPKSj5iQajbdyLFjCWDqEQchb95HeV6X2ohWcMAG7qf1BSXZc8suPb8FZmsMFEfCpST21dd2",
  "key13": "fxK8z8Me9N4sy8nkzd1K3VzqopEy8as79ihnARaGRx95XqxZ1o2GHCi6j5F9LNMTkNiDoUn8T4cu6xXd7J1FqdF",
  "key14": "3ZZgsL5en5tFRo6NMPmUZxAvWJ9WgkW5pw3AN3jdHmpcz6GLaxt19CevWWsijxZkEhG1Lo3SV9P1JVPL4bas6S8T",
  "key15": "bCeTrQVHXfresGgmTrknxMdFATNRC12fbehr5A5Dm7L4LqDe8CF5eG4FcR4Mo7xvYvk5maDr4NWn27MniXDEm2s",
  "key16": "3wZp7LR4KcLd5xKkJoQESVQQNHjGsKLV8j4QbhLBpQNYcGyQqHFpNDRbMn1uWUJsNow99np6tWBQ6FZo68qpmgyM",
  "key17": "SdbCbT32wNR2ER8zjxwsErmb7E2xMiSrqa7xbni2rbPyGfaRpANUVL42sbvFgvJZY9oHATQHUt4dDDDXbRdrhZE",
  "key18": "4pYbjyGAMeB6b6fKwSEz2JvuH9ixM4dziEvgV6fGqM1xSFQ6mFR9Y9HMkK9AJ9pxRyBcuHuLYS1ykT7WUYAwGUxa",
  "key19": "37cEcD3r9KjUpPUJF6yMHGBKsLCeRS4vNY9M2xdm8rokebdhwJ6TJFDMN3rrYrf6DeG7dmcJ1a6s2VthpMmb1pGS",
  "key20": "5rYXc19X5eidCGjQ8EQK17Xy2AXUwpQ7twupJvCnTRXpEfk2Ph2KmE3CEvtwV615bAUhTwPUVpc3nMUbvZ7AQxko",
  "key21": "W31P7QYnCt8eBJgtt65Q8brUddkKqnVJZaSGhuvkCsELkJjCGXDVvJxo3dmgmXr6kEeByfTRve1QR3FnXJ1gdfu",
  "key22": "21Pq4waqst1ep3ks1FxYwKCqcWPoZKpsZa4t6qbGz7mjPbbihUkJhf2TxBPCaxcYMw1t6Y9dCt78uths6k7YRYxk",
  "key23": "3z64FjmFHJxcPXQszXn3SCeXrZwNiFwyqsjpoQKoq1jur21FPsPqCdzRcT8C2cGB6wXsWRmroYuVFAfdYj48y9C7",
  "key24": "2NgqRmF9qnTjbNLTj1kXD1VjeN3kXQxFjph6EJncdmVYXt4K6Lktmb95Hw57iy4J7UAAd9T2gMtZ731YeeXcDeAy",
  "key25": "4q12anqKu1TCFTSeVxPS44Va25J54sdNHiCHUdeT1fRyVkKyUvWzcZq9PkiiBnFpMtDk8vXdhL7GpfT8j59m2p9W",
  "key26": "2Qhvi9tZkQvVdNRriGiQMFVMrThrtxJPZyjSZQkDGfJhZQrRSdoenG9ryfaoEKR6WrjvhFgoaT8YMTG3Ng12xa5y",
  "key27": "628tD2sgesbN6o3eSvtrfURsQaJRA84Vfm4uT8c7yCroRWH3zpCvkGffFycKMxBgWYpyoh7uXrFtPWTch39woqpp",
  "key28": "3vfRqUJ1J4BkX5PBv2mWn6ECdLbfFZcmi47HxJ1VcAL7mxc6f8LpYBR2AegW3BG9DEg1n2HV34AUBUKATmnWcwUD",
  "key29": "5VSUU8YBE1hLoXia8RKVp5JiZYbs1QL7ug7jGVDUmHZDsWJRQtNvDnoerBp1ASUvqh6mzs4vrmtvP2b5GDsPxQ2P",
  "key30": "36fBf4m1SbtvHAmh9r6b5odYyHbwXNFxmAw4JvHp6FhC5zDMDMtT2XZ1mMNqaJgVDVAYJX5SsvJZAXSq57d8GiSM",
  "key31": "3mh123wSM31yFu7gotG964pR8Zzg6xFu3Xpbo4aM7aGq7orL9neS3PQosMGxoJTJQaYbTW9Vt7rN8x7URjSJuBzd",
  "key32": "pNEWFtwSATksLBwR2maEcjYPHJhh4dggnVTMD69nv1sf5kuwaX7YeNUWcfvtu5dgc8MFqfbghpsT8x8rMCaPzf9",
  "key33": "3roLk7rXwc2xXpRQDG8reWB2sKfdi1T9rMii8bpJnhTU27HkD3XWvb9qLMDZKTXRUfE5YpT6eR1Smr2oobPChCY7",
  "key34": "4iTVWZ4KZ4LDduNXKThkedRcwRfz5e3pmS6AyYt4NUh3SXiv7sjujV2xEqQwM7qasv3YmDfisjXhgZ8vVCU2aBB5",
  "key35": "3F4RKAmGfdwGmu5r4KRpyu2G8dc89hXMifGwXP6rTsZtDKc4fJevH9s5CK9fZ3swrRiwe4M9XqLy84EX7pg3yM3X",
  "key36": "2asUPh77i4N31g9Xt8r4VQ4xC4bkkEjUbzxP5jGGX75SnNz19qBtvRHcMtN1oRdhouvqBNbYyEiYbe7nJZzZMaJq",
  "key37": "23r39u2EJ5gLn1YX96YNLzgw8eKg3eYQ3rijpLAnonfWvq3bzQmnTdcei8YGZ5HHjohykSXhge2Yh2398HcXwJKu",
  "key38": "4Yf788rKpLHEsn3fLHXMyfxNnurQN3HMGrPDn6G2TfB9n8BRAgMZqdLL6ZDmL6bhnoPDhHG38qwJveiGDDLUyr3z",
  "key39": "2qqcdiRJqPQd2cpyAdXcKYWVRfFG8wmLEhXGZHLbfcEF5h1sfcAcb5VxUjTKoeB3k846x3AAyhX8omg5cmE1ZLnM",
  "key40": "5a8FGJwhVSUsth4aqTASmxezTxYDRr5r4VR1qRfMrUy7Y8BYnpazqEeLJiQ5DNUaE8BPnXGFJapdWaUBF4r4rXWA",
  "key41": "53otgvycFYnbDJqB6oeLu581wwGwLMCGnQcYhwtkwpjQWXiASGZJkDydmtZL1hbYrqtQaDHBNVYaZcPJAfRRhnzv",
  "key42": "4kUvFdzwCDgutuqnf5KXFhtaDkpCvf94Ur8QUnaB78mzQDfaKL44emSqaaCHbPaxYgbofCiBvS7WsfX9wrkXNcZo",
  "key43": "gQF3yqLW7PcyB61NBJSmHR6zSpXF3WYEBje8pFhBuDP8mfAo2GsXNiptEWpdgCcQfS5Q217kXyu9V7UZutXpRaJ",
  "key44": "m7QaznpFyEMAwqvnPCjYjATGFf1SpTXBTt51WGC6JJdepaUP9WamJfXzP3uDpjEM6PjMss4Emtz4XFqePAFvzPs",
  "key45": "iNLZ5bSHWwyWmZwcKMiEdAsCEnTDqKnVH2zaGrCASnAyGMEm9f1x18Eat2HwXruZcZ69c2rypNonSo4x6h21fxZ",
  "key46": "3dNzB6a9LvkezzZQxSVSeuavbAguNafaKmEHekr3rv48jCZQsC3SrRfyedUctgG1TRBHzPq9g1hfaNYBDqmneT43",
  "key47": "4JmgMHFRV7TTGyeVo2DuynSWV3buwmqHtakZcjLptJqfkTWsosW4nMbrHp8wn6jAfE4VLReq6axTSamGYKEP4W9j"
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
