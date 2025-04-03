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
    "3k2Ambp434UXZLzBEKMSJ7MF6QydmAYwpxNnnFQjxc4cS1WNCeDLG5v73URRf2GJNM9h5wAavSoKEfzFYLFvqJqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yz97yQ87mtwiEHfi1dUytvSSxaejcbcvtJVR4HDfuWHiPJuaqd18WqrN6RoFwDgqByZHP57Ho6T8oDjSNfEUT4P",
  "key1": "M2cRzqm7CKBBLpaeAwN2HLoVgDNEcYQZdEKg4zVymStdUwM57q7dTRQkx4D16ofF2Pa8tP5inW9RhSkCF7R2xDk",
  "key2": "2PvzspFphXNA1wQfgyQR9ui62XGhNbJWbu9Qr7Mzq5fLR6Y9pihbC5zooULpbiSp2FQjz3UYKcw5v67iqRkcZKjS",
  "key3": "4jtdT6FwHgYKE5CvsyexE52zmzvNn5Qvv5h7pzktmXuV6x11mkrN91bEpzWxKxhbRvvt8SkBVjoxTPP3X8Yi4d9s",
  "key4": "2dX7NZGEzAf8qgTyS1XXBf8K6k9xDR4CYp2gDmAFCV8tQB1q9o23NCSkfPeePq9fkxp4CmAXCNraxSG6YCSmhA8k",
  "key5": "TQg1vkj5BnrZygyTJ8afKYUtCXcEXrnHr3YXeMbq7XngaxRWNLq1p4vNZWb6FcWQaP2g2YvTNMdpCij1nMmQUGa",
  "key6": "3P3A4uX68DVRJwoHL2yDaWKxF8GwgPMsfPCD1ebFCxht16ypvLMMeEnkRSiGMcmBrUxQgz3VJyy9xSaUFcbSksnk",
  "key7": "3E3NtX1amLjB6Y7RTFU6Yrx4ziRSUxLFN1BcBJK2A8G83y1fTV8wbVv8pcz2qYmyx36YzFb9Mq79dWH93LfAPPH1",
  "key8": "U4yRBE1nFkTCUriPqHFvc4sx4za2xKCxbZ3h4EnFkYpy4bMLvugXGTXaDyNqvp838MeT87kDccwwAFTuFUkbsYp",
  "key9": "zKT7A7XL23Gn3vXYyr5VgaDFf1sXSQhJ5fRAw5iENX9oyHxiiM7GNrV1n2pTQG8sxcY8nofAEdAjrjsrwJ2dweS",
  "key10": "3J7SG5YYHhpemCtVgnGqfZctFT3xcErYDufwPnLrbM8iC92Z2DSrQcE7WyvKvhf9qL9ZMTG22BTjtHw9xboKESHN",
  "key11": "ftXiN4vZdb5q5cMa6vWhjpmhnwoPMziAfuwUKtc569fvYDdMAYBTdbj8yV1stxdaud9A1gnMBpk1uRSNQg16YH9",
  "key12": "3SJRY4bmYwp1Enm9XxdwLKJEiQhFj7j9gZXA5MZGCFjD5wGANK3KnvUrUXp9DkvyKBg4ZrHnfQcE2EWJgPKPHRHB",
  "key13": "2MYdXUrD8Gs3XxAPVRJnWmqEtWKoPX1MKyuoFkc6ADNMStRJSvUF55Qk3dpiYnUzVymAi9XuHTTTKgSoXfxocyd2",
  "key14": "2HBj2UWgd82Vmqrh9j9HmL3jVA6rRArhwrB8EvDX6DWQPvdyUyoXPXvcezeAHjKk7t7JyrRpa4zWDV54PsM2hoMV",
  "key15": "4J5rBUTeQdBTmgV6ikPX1qjuEzDPPgcaqQWxM5AQE7UwUYHjmak1hTFGJGMk36E42MGRNDc92BbJLUbqjfGQ3RF8",
  "key16": "4n2cZZSf8DA7htFMS7vxuZft4vr4Cs2CKDhKEGUy8akENki2gEpfdvJw47VueyjioidZxaQaRCyQuE7t5dzXLtj8",
  "key17": "3dWUwqj4RGp9gNNnmx96KZRJcGMXSSiQVmcZYtkZaLwZLxopVhNuo3g1NRUqkLzCP7VqKEY7WNbFA4XUGTTSQdjc",
  "key18": "3isDCH6Me4cw6feWjpCvFn7xpCPyB2P9qMmrkdHuf43QSJuURELt9fbVveo13kwKDz8djNedGxZoyne2qQEq6BHg",
  "key19": "7dYKPLfjcu4QuNY13ghhUNiEGUu48ucYyiNRs3Lxt5vMzkEjRsv4fkpHq1B4ukwZXKvg75hYQpPMrsvu24LsHdR",
  "key20": "5A4mVYgi52QLjSw6Bo9DPLMYarMEPuDwcMrKxZqSeq22DALn46bD7d2CQqdc7cQRXyxZSijGc9vnY4fQezVV3A4Z",
  "key21": "4BV2LyqdfbJ9gpF5bjB6HxaBKv1msTLTuNb4bQUwS44ta55Ky7SSNwCsLNbpqyePnk5ZurR8mawwq85KRA7YrCqW",
  "key22": "4PWU2WnHPjnnKz6wqeGknwTCG2e6R9syWVphSjF42vm9AJow8G6HK7o2SprsfAH9RuqHbyhwNJPgZKonBJrdzWSe",
  "key23": "4H6n5ibW7wgRwgWocRJVXBoSFxRL7XaiSuCi1aohTnYZ9MEzdzmM4nCLYBeecqvsMbVSGJjX4rRvbFLaECatWerY",
  "key24": "4gk6wZUXNBSTtn53FxmaUza5Ut2vhMJMZGL59CrTiBKR1L6zvRuS693iNuV7TX19q85JJR2rgcTLSyWLarWr1Y21",
  "key25": "4sixMWS58oQBsYnBFeQC6FYx1XtnStLf5HVMQXcWmM5amqCLw8972tuXTXE22GGhMfXineHjGRmU6PxsJKvvhLAs",
  "key26": "3tkBF2Hbg3E25Yf1DaY9JRYSVFqCKoR7roSdjw3pYtmwqyfrBUq2LthYDP4r2xKHMxKS86x8GmCjBhKFqn9yhEDB",
  "key27": "3PBSGGuHGbJrx5iHMH6ZYiuic95dyfGDitRwbYM7RGbpeLzgY6V5QMktpswSug3hnYkFBZCLmeKtJDXFh8nEmFu4",
  "key28": "4L8CuJ5wrdfiB4rcYzQJv7R26CqsagC9622gL3a1sgUdm6n9BV1MiGC7AgrjrkBVgokHcjFfCCsTPTnUWkPGCajK",
  "key29": "5H1zzhXZoFrrsJCSdjrhGh3LkjJVJ1zCiTHNKa9PhPfnYdVpc9p63iyM87ZrBEDVCFSes8TYAQabGRPFDSqUsuWC",
  "key30": "3NYcRvQNSbjxEE5LK77oPmXaEMLm3BD39hVhETYa2tdGrM9GFYKXHXR62cD8UMDKRBoRXcwMuXJcRmV9B4ZhpyAn",
  "key31": "4E6Jyr7KrRm4HnBNJNfnFz8K5UWB2kcKE1Zy3oW5MJZaPy9aKASKh7hG1KdaEYcmwTfz7sRyr3UrN7NScVMCxzY",
  "key32": "66nqzm9zHRncRoKq9SMua7uhWE7G1jcWGzPhxNoMgyf3gqgXRc3m2TQ2iDZhEP9t8uoem7NhNTT56uqdU85fdjCr",
  "key33": "YHYQBmoy3Xx1DcsMC5cDuBsWEeTuxgAsagSPqMQLPr8f5B2Jh1fTP1bSdfdGGWX2dpTzHbneStiu5GK4H3SFt3H",
  "key34": "32AcJcphSpmuHXHbTs1g471YMJ3g4gRZRtHd6tNqaCee5cKp2uWbFXJbESnpC252FY22fQue6hrjcdavHViKVRZ7",
  "key35": "4i4X5fJmDz2qns5VyEn3NJU9rrFHCV5E1t3tS1YwyzS37hB3X55npASG5BpJ6kHTtAuCvwkL6Wix1QJSypeY7bon",
  "key36": "5erCbcNwV1rTBSN3a4atUpJ8yreYSeTNKYZcbXsNmCjXiXuETnkRa3SepCCtN6Vtqm3PVhNLJgs3CQFzyYX9zHes",
  "key37": "5bcDNR5W9c4UEwfKsi8Qekk2zL6GWjYeVBTx43SRYutdNZMwoDP56p9bwMzPM2QiRYpiqGRaqBVZazJ68WFLSxHL",
  "key38": "7f8iJ1vKgngQjk2HjYgWnR8KPpC6sBKTDEnDtmPfJMWMrhHJ9Fe3Bmr5usvRfKGjiKGhpoWaeyQYKLmrhS8vYKh",
  "key39": "4A6T3cG1KQjkubJZ74Kyny5SdsXiT1HQozvUVJY7FyZq7fikoyed1nt1ekabodQXy9GCovUjTN9LVRBfPza3xSWv",
  "key40": "5gDqzPriNviwv2eSQFEpezM8f8znatAxCd6svfN8Qm186HvKY24eULqmjs1C9eYsB9LRaae5ByYP4ccnrWZQW9yE",
  "key41": "4qQw1fWKAQAzMo7rdMggaSFpCALCavTLRnFkrbNYZsS6v2jiqjSgrGMF3vVrY5mTJPb3ze66gFmPZtM9Hr1vnZr5",
  "key42": "Z6zKsjGTdJ8QYh87DKcMC9GAJ9Au7hmhTNchF39WAXPBwdNs8DCfRzMi28qJeffD1BVjg6pJMKZW19iiegrYPYJ",
  "key43": "5KqR2V6qii25JTGikJdZzMQw5WeLRXFj9LqtSpx1XDvj9TDoUHP1VLVSmUd96zfSecxD7aTmLJ7hMTjxF6pQAe6Y",
  "key44": "3NavseebdKRUXJJxRaWzR7eYUDXxN3kfesLNzGP79WFyFFjHxR2trxqKXDk5BBsTnmk9TZ4SbGtbQ4uhNkkncmNS",
  "key45": "4bDwxnY2atmHqjN2FdGxUWpR46FV1GFDLBJ1TPvsBCrzen9QrEpVuoNWpNUu7CELBhszQySkTXFdtUjpsS9ssgxJ",
  "key46": "4P6GG1grxU9uryQCZkxhcrKhfbpLLLnNFAfh3nSLGCpMRM8psS8iNmfELHF31663k1p7iqi9rbDx6ejk8uSiknD7",
  "key47": "4NcAEEjiK68FnPzuK7EDJyNVQGp6TXECegdyFgBs9DHJ1AseGmohZJZi59GAsTX9e4Nf1UapznAGYHNtKqR3Fanc"
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
