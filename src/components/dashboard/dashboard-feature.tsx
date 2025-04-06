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
    "4PcLFLZ2mgYcyuN1hVPdbeigxJC6dPfFdqB4qnkj1NZchQSXUuGBZf8gKubyCvVd9wqio1wpNigD6M81ArjkL5aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45XN538ZbPP98GqEPVcBcKSNTBmd1xXAL1rEn4eTjVfPjcFpVk8yTwBPiESa7x2oegEV3pDx75aLz3vXvkKxgna2",
  "key1": "XhW1uuCMkeD364k4SbQx3r2xcjWbxh4X1JWuKwvjaKaKLjewnybRerzPUZPPAfWnknbx3siVDaQs5owqc6Vg2TZ",
  "key2": "4LdEMSVDy9P1ShLZCgRV1nVCM3io2dKuoGsjgktDzb6RqDtcERagSgSryNQvHttnGVDXX4rC8hWEuJSEUkSyTk5d",
  "key3": "3kYMWguDYw6nyHCXWyFqJJWXq2wjjbUufrbB6B9acc5WdwruPFjwCUZWtBqE9GXqDUq59HsY2ppXzBqWdT2Sg3Ag",
  "key4": "3zfbG3u9vHUg1QFqshUkHsUP4UGJbvyxjr2nVcLEtyJaFGWzCp9p4Nqb2H4DEH5Giof9FLkgyZMgiSWLUdJBfNqE",
  "key5": "5bboqJVtptZL2bGPYrD6uYFRYBpKVJfQ3EWeT9vb5JpYYSypFvAbcXtv4tPGxDN79BN9saJTggmEcw8oAvUnYxu",
  "key6": "78PtKJ1G88kX8dft1nju4vXNYHGtgA49W139zTx24qoTdRXnoAdxo2JhSHtf16K44RDgiFjihs63z6SZhNQDrAB",
  "key7": "4tkkRJ8qfsDU78FUi1xz5nFSsEqaKuVKH27uGQH3WwS2fXpXkmhhwBrRRTKkPvGT1LsoyTbg6dmU5JJu3mKC2K1M",
  "key8": "3wYaVE8ignp6Q14NHhYJMz76NaaNFrNBWiATpLa5cEzrpkX8WGXtbwKHrYFdYBJNfxEooKZE2xGx3AJ8d2Bx94iu",
  "key9": "3XfUdQAvnbAXegqz2aShqk73DLRBzoBVdoxyUmYeiT1ygUi9jyQXweauwUSaFGFv4iodnXYqWh7rxiXhiGRH2Eqq",
  "key10": "2quXQ52uofYtj2xyZKpJsTBTtiE4BKeT2XC2XNgC7sgzX9BAEiV6umV6NTtwGCaVAsegnjo61uDA8bRFzpCLdfVv",
  "key11": "45M4sJtKJr8Eazc1Wow8PPgm1q35UWeGMFrJqDKeiBLDkPLbKNiJvYftWJoJaw5y9Z7zBbMw6F4ATTnasrn3CESQ",
  "key12": "4VYfkG6NqUefxNNummo5YNT2UGKP7hbHefp9AJCdGLcKMB97broxriAsb5n3jdRcK6LxJVEPHAzroqPquDsuCN9i",
  "key13": "2yJuKnpLYpdhRv5dtTKxov3CqRWpypMJ2fF3YLUA6AhPKxvRzkLxvWBzLiDP3YXQGyCD1VY4cydcY8cauhnvgXu4",
  "key14": "dhmPdyKHjRLpKXkysbz1aWaWyqJ5LFqEPLnpYZCfW1M3vWo1KsB6TJrav6ZBpVnHi2Q6QnhfPmuKnzdDGyKBBEq",
  "key15": "2uxRYqH3vY5Hbf6jeNA2LDzzsUWpL6XW8YMon7u35tHkpEojUJcNKeqxt2zh1ar44vTuLfFtK7DvHtNR338sWnDd",
  "key16": "Vr6e3EAP47yrqNLrPsRLKTq1S36We2FRfwt1bVDahrYhyGEpRTKKZj1yNFh1cuRxfrjW2o3F8AU97mfffgjXRq3",
  "key17": "1v9EtrdkMRRTK9zTixnJmgsTymd7Cy8envVFGcZMBaeeXYwjQwwQWQVaJG1ugq987UxkE2PR31gJCKztbAFTtKP",
  "key18": "4W2E7q2iu6f3KGeAYCEh4giUae4cWNAStLXL8sfzBP4sjgwGvvqTD4yThRE6kiR57EQRXvNA39iAtqhitm2Suexo",
  "key19": "dJ5HUZpFLfU78tRgr7w1MRgLe9dtvhfXScmfYgVNYnAvzjeP7WhTCLJ1mK8Mf5ySpv794hCVetBpoUbgDq7hr6J",
  "key20": "4XgUPDCDqSRFP9WGsUDpcsNv8yMBPhVerb7Du49ZLsEd76x7G33RDjigiWXZfzL1Lj8xPHzUAh4JS9V73vytoqED",
  "key21": "4dveeQMLdL18NyA2XKcXnduGu28VvWrUmM1e5MAnrsHf7hcqdw6Hyy6jYzfFf7F8D5pasx4A1JK2Du9u1CXJ3koL",
  "key22": "3Y3GxxnewmnZ46wdqZYCCp5Fq1ZvxhdcxfCcGPb96HnnYFydEPZdLcchP2XtFxezfbaU9fx1rYmj5YuvSmSquj7m",
  "key23": "2pcvbqdf9RiWYYstudbWeUJbgzG65qQFtUHR9PWf2CnTVhP4UH7T6bWFkV4xFXVfTe4GjTkv68pi1V7LWFANF4NK",
  "key24": "54w8yAxBWtUvTe7Q26BzipBNac3jorHSusSfJ4ExXyD6Ep98cScL3XK4VDE8obRP9ni6S8kiRJSjxtmzNZoCMgWW",
  "key25": "2uuZUXY1N1xUpPHiWwbanmPX7XX37A2n8mDzNuy9nfMsaoDz1LetfmRfpoUidK5hDRkmDJzmZnH7brj8saF6n3zs",
  "key26": "59sAe8abghsyexSrwRR8REeBmCUJyRJy1smix58v1JZtbaMQqM73rUMiGjUoYZ8xN33UWtskp56Yj9guSZoCm6C7",
  "key27": "63bSp9LkxkPFVrNNXbdw8BYVSZ8HRs8a2Am1ZcEvfDxYDMu4bvBd8HftN9YosygcvUoh4PL7byqrwnGEajjLDGHW",
  "key28": "mscmbCHPCa9iuFHNeX7s4rdJaMmU8YnsUn3iteyyheS2mPsynqK7X2eARKfp33uNPmXagK3fG852yTUB8fqW6og",
  "key29": "5dXJ2wPJgH33N4nR2KM93FbTrufdenvnZbjUDt4qrV98K2YAvnL8hGeS7mPbdy56A6Hzf5g2pPNb3bbgEkeng7ow",
  "key30": "5TrKRCYmC7vNrZcrAMVdSNKSBegg4DeDR5DNWH5rr8euQ2QT7ZA1LSMGD74ZVSzKWqPVEUsYg7mCJxEhX4X9ciou",
  "key31": "4Z4JBpsfisfdao3XtFfbRVuXk2BmogGy6cSYioDc9WcvfHAatgds4UiACAb66GjqQMNWRfLpCfkofG6xgfMvkheV",
  "key32": "29MhJBKcGQpgvGq4HM5AZrtNxaTNCRtfN8zErY8cbmUeJ3WuE6cuJ1ytTJCpxoqzWK6ErjutXG9c58qtwjGh7JeY"
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
