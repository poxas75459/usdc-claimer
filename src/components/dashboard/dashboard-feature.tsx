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
    "2TMiERxUNcFFBiD8txZ1p5u6KKBmDgQYrnVFrvCwa2wDvoC5xekm287EonA1z7hTaNnMiS8GANtdHPQDucftRbM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4RTK1HuiJoUggbNyx7LZsgYbooRjBNfDA9r9hcGg84RuZQUTJFAqwA9nGzSumgkwpFhrb8EDSaNAVCYpAGjGLp",
  "key1": "3cW72E1Cy8vEvUzMkLzmU2FL8exPXAP4Kqdf9BPiHkzavvb6r3hjNetpeH7SF6a6XubA1mmKZKFmqVLeiJA69i3P",
  "key2": "2uVKuEH3o524rARajH7C3qLTUqMRFVMkZ8MBCkE2fvnvFdpQYfKf3rZEAZCKkQP47eTmtRMkGjwxnajB7pf1qU5t",
  "key3": "3cjoMHasq8FH8UM6Vqa91DS1LZGYJVVVqHe4HoZGCcNqkB1VosoqoWoZDtZVgj8pZjjkofxLyvTzZoJKYA6X9ZFA",
  "key4": "3HLYtNWgvFAZszpnJTBwe9eyBo2vbecLYbcR7bJG3XkPKor2tfZeyod9dfBgyR7KBFHxobMRjSdDPYB2wDpGYo4v",
  "key5": "61MNjTvjK684vdeeRGmu4hv4JTu3iuhKFtAszGwtFLgiyxHxqxL3VkJsrWCCkNJLjuNW8RMxHKHPRjp7ThEr5kRy",
  "key6": "5RzPAd4SHJSLHspoRk9kpN57NU5SPJL1Q2Us1nKZ4RGpv43WBi5ujRtwSAQswKBUio8GwCq4ssaA4FmcmXvHVsPF",
  "key7": "kNnzmVGeZr8NbyKsgs28KuCtJxczfCdgKz7uoX7qgYG4YJuSCD79DFZMLFqKoBov3ZcbSKdjrYewPA4gSopVQij",
  "key8": "4ynNRTQKgzjxR8tkDbqzAk34UUbHb37fbmo9wiWBdyWCdpDzvEXiENA82UsMeZnruUYW9yYxAaEGzwAUP7SASvUc",
  "key9": "5yirVi5tTbEuVc283PQMQsnTJBaV3oScbhoteZZciaeoPZJdGP4YG6A6M9ig5pY99B8sbCcNXvMRsVQcTq76ehPJ",
  "key10": "3B3mYZkddkGDsVj11C5q9LEaXamUSUuFsMfFkHpnEKpusFowuCcfeNxnKjKh6MVJQk6eDo9dowq45k2Kxpr5bp3f",
  "key11": "45iLc6FFdSkzLVyhSoKnD9EkSZoaCxgJMmaatsFScSDgDvvAUrTdUUG7CQujowHWQBDRMY1zjw6NuLL3mdawEQba",
  "key12": "2zpFoN4Qsf2wy8ix8jYv32BwnngbM7NARzU8FJKq8oPc6Z8jNJMeHXi7R72qmR8B8J8ckRsyzMAbSA9iGRSZeeJv",
  "key13": "4WvktLAbgaY8S5MXuQmksbjdbrCWYKXygTJJgqe6saNSzAHg883Aq8VCnNnHTGL1xCnhggS5Q48HbUZwcVDNHu99",
  "key14": "4ccdCo9eUXG9aNYfeBp9WGxHZyoNzrErCXqXeNV7EjBKqwkNE4DFr9UciF397x935APy4z2MPpEbQRHDqjtbxKr5",
  "key15": "XaAzMECKUf1JnHS5v4eAQQSsjvA7SCSnvXUe6GKC4pZmb7McQaqrVMXvxwRj8atNmsUsuyfCNYrDekLbdHYR3Jc",
  "key16": "4QdgZBhEZaNj8qBRBCpDRrjH9QVhdaH8U1AD6pHu5162SRULoE8JbGfAdkG3m56R1oTigPZ1ZFUuGutBN2YnCP74",
  "key17": "395G1HeHqrTsHst5cFhrPUxLyFmeqUG3MQ4vJycMwgcKYFrjDkfVw8vAkGZFnqm83ijon3RGzJZxqikw3JiukCmJ",
  "key18": "2NXbzXL5o8WEzS9nkrrDc4gsj3hv7a8sUyeqzEQG8xHTX9H6qP6GTC4DZtL9CLE9pLLcTNn678EEJydsRfKA5MsD",
  "key19": "23aBdweX45o7ihrKSQp9ndTfpRoaDAkc1PQ3atmnrkHX1vB3LmL1FsmgedLecp3dMfZCgAYbJWETPSefPfyKgdfS",
  "key20": "2a692vcLAPTdgFVHQ8xt71ymeUAuEcubBgvip3ZhPyc45oSY4BkLSxxkybWGhPUyF789ChAJYusZD1iGoGf29MEt",
  "key21": "3dC6Je2MvgrCnsk4EDWv5EQeiVXEruicNWKL3RCioujr76oN6D7YXouM6sfr2MtdVDm1PsdLLs3An35k97ZsDSPw",
  "key22": "21KyeGjoTBCo9CGUBAwCZa72WeAHy9jc8UpkfstB7G6ESFbkSLGmUFYpkEKMiACtKmPkt9rEbF6pmnvV3rzhP5vA",
  "key23": "4fipm2tovRUeSZori9XpkXJFnU4R8MCfp2fdmQhqkSQcsN6bZLdcDTJLHDGwSYrkcLLH7dwHsriHDyvrZ9UEpcrd",
  "key24": "5SgFpgjofuNAvhSwfvVpXfeQ7eBdGGQQLwbgHWDaSRSiNT2KjsKmh6ytjfayzLcZtF3JBPqx7uTE3u88py8Cuj4o",
  "key25": "2StGKxEgzEzP8jkLxMxoxvZCWWCqBVnwcv5GmZrYxepK2dWM743rmGFcGPb3G8r3vZUAj9yGJU9RkP4ofSV5VLW2",
  "key26": "4q4QyBsR3aMqKNwGEFY9UkZsNJByFkZTzgozmM4VHbwMBZEr4ZyD2UVZzMvUgvm9uYq9ZJHcPwUvQ1uefQLgExEn",
  "key27": "58JmNf7s1tRRtk87QrJFRx432Nyc3Cg6f2niU5KnudFk2zCPucRPtZxxwLA7tXfrGD5v8svc3ESnqe2tNecjFX41",
  "key28": "62e5RTkKLV8t25aSe1GoMjbRuLx9oDYJPg9yc7HNM6SWduSentanK7UDY7npx5PH8DwUi1HGTM9yysTLiCb96YCj",
  "key29": "3Npggw6JvHmud6ZsMy7LPwKTQcmKztZtZeyqpZ3nHTVMdiB5PPVXQv65mQZsELDocfQe736aj8TzSczzwMJnLutw",
  "key30": "jM8g6bMUM7h1KhRSeask3gvxJ9bX3P7h28M6j49rGD2NmHpjtjE9G2rWamJqGhX7TVdFUaULHEYJnKfWZzPhcSh",
  "key31": "5B5MAbk7WXRoQMuqW4vB6wUCVvbPbpSCNLAQ1gjxMZLdV9THVpcQoGnYmUKXdSTW9FQJxe4yTr3Myup7sReEuQ4b",
  "key32": "THZRBrxTq25Z1N26TnQ325KBLrRfNqFHR8Sir7gvQThmvnTvcHVceoBj5PZgyYVkCduTb3EE6uTLwSSVn5WSoMK",
  "key33": "2vzd1dc1tc2zciPrvpC4vGAcMcL61fc2JgnYuHEtJSsT385dhGvZtHbY4BLMfCzFENS7iaP8ui5kskYuxNdoPyw",
  "key34": "2Ak3tkYfNmGB2cPzaTwhGoNBoozy72HbvpKC5PrnjkCgKks7HsUqx9bdBRLGqqnoHw8rLDZ4p69M5rTMhz6VDKmk",
  "key35": "shpNFMQjg9AM35JjE6bQJvvDzNSQQcKri3kChbvZwCbeKQchxCVjDmx9ZNMoHtq6q9jovQSLWLdadFMYGDwS3Qb",
  "key36": "5tDVreQBVte7iZBFuWGNjfdEtGNEBdGoLev5RS6ZPTxsRjCzvkxEVwDoyV4V6dRuj6Xy3GQG2y6XKvAmD914YgkK",
  "key37": "2SruockHJxyujZuhRGTtmZohitF7dXEiNJ2AZNDFHR3EHk7bcu7ZPx8Kx25u1p2Nsrj5jCY6fACixKq4tWQBUs6u",
  "key38": "2HVXVwtiLGPC9AuubXUKaJvZ99R28Vu5VoZa2caqt9BdktHJp4GRvk6R2Y6Ju1gikKWEQhmfYKm2MP8qotK49AM4",
  "key39": "5CqBdnnF1YYeeGcTCHtGqfLNgjyCg1KPur4GDbkcjW9Wt7z1YWpTXATtTuFREM56HZDVwegqXHEnCuR7BrgzjK8v",
  "key40": "4Z6zQdyne8YpUEYyWF77ThHgr5bNbp5Lz4PkBNhJNvBdzwsstBUq7rxZHCnXKnGdDwZUMUmRJ4RgMSg6Do5aiFHK",
  "key41": "5FQuiiPg39JCYXJDzWvgVQDaDE5cLJhqsDPKxaDj9G4rzRcqjBujesXtavijrE9H2cM9VXJKQBqvjfjkYjYiB2cR",
  "key42": "4dPzHfB8srzGvxdksztg6gEKj5Khho5Jck1FvzAVsj5veLLTQaD6nzjNrn4DSLBiEFfisCpAwzuYsc42aYEEvUKx",
  "key43": "4WPZx2oVYYVSHX1DTJttY19uQf2TftnmxhmhsaeTnqocPMrDxWismQVA1Du91YySY8kabDhpFNqF5fXVcy8i3PKr"
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
