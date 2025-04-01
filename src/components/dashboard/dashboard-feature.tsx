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
    "wy5ZwxWszSHgtKg13Yq3FEEPF4orr8Dwus7cuBd9yt1MUCsQvYAyUkTYPyCxbmjyvNCzbPD4bvbb3Xz1erps4gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yoKEDf1FJ2ZC7UGMXRJQL1dk8LH5XgoHs1QkzjBw3ThbiZdrm1mQn5HLNswg8QXNoueUVybNDzzwDBbdY1fQfxo",
  "key1": "4hwLmaCJLphGuca5J48w6HJbMuDxtjnqxfdGMMqhdsTy1o6oncgqV2dVbabVZ9LBEUDwotnCqVAD9kN71XhHgnG5",
  "key2": "2oAJnY1GfVmQ3XonWwMEkhU9mhXLh8m7yoChXRN9iKNyHcA26vaRmTKSufmJq7Kxkba2rYEVpyrANi7BEE8t1ccg",
  "key3": "2bixyBgDAnE82BfBBWz7JWPqqW94mbN9NGHGuJLvRfBkZ4MhrjXzTe8Jrh6ExiRSNgoWActcov3PAi7pmZXKS8B3",
  "key4": "5yF8nZ8ES4a1zBRcgXPSxf7HcFbZcGLDuV6izxX5GNxsrwo642iU2Z4W5QyxEkhxVVSKLH15rDopnSKi7G6GjXAB",
  "key5": "4PeyKXKJVm8qtjqASpfEkqatcKihMGmxeZth9E4SJhJS7PYFPBQek431XN4StPWprfYWMhERog1VBB3gWVM9PLMY",
  "key6": "443WidRF7jR4sJk5KC71RbBWGJpYTp2dFzJkJTcRYtvBWijKwnKzPTZnbyoWmLDq86fKehSVEYVdbBwThvQVQ5Vj",
  "key7": "5pb59yYgtmBxabdsGYWnCthceCzZQ8vgBYECAQLCW1Km1JWsBWNG5ri618opSfkN18ocaiZDMufBuMgyxCNSM9Wt",
  "key8": "3Sv8n5LWniZTQAsV2aBPPQzPukU6uUCanob3fsm9C6g7DZFPyboGZgLdkmrXFC2NvZs9x4VW2tg9GjHhPYNCo5qm",
  "key9": "3KsiwzcsKgw4Dr71UELzDQugLcuLPX27M9t1vfnaa3cboyw78G7PbNzErJ183UzgyyEVVG3VUEo75Bpi7oNfk1ok",
  "key10": "4WCRJEDxcuTwwa8sR36GXhFiDK6LqLcZPezX19SmanYC9Mx9quUnXzSiGiPBvp4Xv2afZG82JWvoh3tqe9D8HHm1",
  "key11": "61NhvJoVXF5XGexYJfz4v5LvJJacqY5U2L7ofZSzM5EutoThnXTZXAoKJCSNF9MzLCBYVtQpUFiW1GrUCmtW75mv",
  "key12": "2B9nG4fRboEhkhvxURnFgyawBXpEPVLB4QKosqgjpTS3mYS8C7vr4GDe6BQT1ozNKFum8egwK5oVnamtTS669yCx",
  "key13": "2cvevNF7vruAmx6FKNmLdkHyB7ZGCmnxQYmuUE23Cj5jto3qMyum37qYfUAtyMdJprsP6RSZqPFhLrzj6nVCoJdm",
  "key14": "4kT68bmo1YJWwZhWFpquAwCRTSFuRf1S9ssUup1LQfac2WHdbNofpWgw3xEmt8fPzqHeNfxjdpEKxwUvhGL3Sx2C",
  "key15": "4mFwt39ApxR9JY8nNPsE1KxnWdKJRcRHoL6vRDo3xoWvxkWofC6cF9NRBDMQzrU4YSmYSM7hYJurnYHzysLDHD7Z",
  "key16": "36WdnLPtNY6KEgHkYcW8mioMgoUrrEri6qmmNAFMgMphetSMLy5br1ezEXFb5ynH1tpAsvHk9p6PcUdtbo9vZ1jS",
  "key17": "28twtQSB89UsVMvmxW29SrkdrvTgJCcDrfs81L42xZDEQwzGkPJaJh6WoZK7JYD2N2VuS8N74EoecGDz6rZa6Vij",
  "key18": "GnWpNd6JYbsr1tM9whDWYTKhv9hbFTqcsHj2Uaq77qAZWoM9uw5Kz7jiw37HtYoERFUgitqnbVpyhiXP1CDD4A5",
  "key19": "2SBe1fkPmMLpJAEw4YgonHD6ERfPHxKXAH3vBzy8SWGhjw6VcDQUQSBCa9kc8gk1cuZsT3peN9GZtxvqGVXHY7c7",
  "key20": "2qDxdUdA4G93oNyeGNXURYwk6KoQn4awjiFTCSbfdG3nUUbHinuB1maz9GB8gtuN8zrdGakWEmrhBVdqMBJKhQEy",
  "key21": "Y4hsSzngUZ7UL4cSaPKgEy5tnHmx6yoW9tSMqcz6HHBqESnGXztAewjefJf4YQDkmQ1QQVjnHVP4onKnVBFSWAp",
  "key22": "3QUYtCa3wzrSND6pSzwUqAfE7AJEhzDQNtzrsDsz9tPcmFtvkoWHQMn5q5LSQLtcMP2UswFSZmg7HN5kPGoxzG3r",
  "key23": "ejt12JP4Nrq9zz9srmTWxPkgAtWwKy6kFaKzbUMf1skJcX61BRUEgmLHiA1YxrqLKVGuq3HursadGRg2af2G1U8",
  "key24": "2m8FVesbi2Ek4GLk45LbqJPn9q5g9GXpuHpD6qZjALaRinGbfXtFXVQ98FSc4wG4JXLtrkvcBriSzmYvcvppFMWV",
  "key25": "4PW4YnxdXCPcNmkCMU3KquHzCYmygKWYZ4cvSe6ueCXBq1RE9XadJX2i47CBvovHqgTCH82RK22kQbP7Efm9igj4",
  "key26": "2BR8eeTrXp27EjjnZToxvpNmXBNAnzAsLz4baHs4ZfZrb1vgYjP6evPjsfYyVgZQxoj1ravVrps2ApUq1Y5DkKhZ",
  "key27": "2CcsLC6AsHW2g9vW4qT2D9sTbqkaRD2s7RkUeZaqxijmZQqSLAXVGozbaugvakVALmEh52uzqLyfempkyBVQpRxC",
  "key28": "5Ji8yDrVo2PKopLWbKjvX8PtDsQzMtVJHgGjMUE6r3vRwnZLUmfc2UTHkVVjAM1mvLyM1dnW55MSYj4FSTb7Np4d",
  "key29": "4xVRtiJbBYbAvfc6oPbzVqf97BQimET4x3zcCCFAPkRUjrju4KfVVKpzdmAaHqSR31QBsjDuA6FLrvJPKjZd5tfw",
  "key30": "SP6XkiNGkTnURc2kjtuX8tcYsMksgtk3z4Ys9wQnShiWpLYvuW3LorkdqboGR3TDnP3haWJouMAob4D8wg65Er1",
  "key31": "4vGEEBtahEayGfW72XFTom8aPmVu3DAVbpzuuimgZKrNnUbYcDH6C4xVwuqbw1UWfMvKmn1yEPET4mhbgfZTPpFp"
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
