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
    "3LyF2N1wMerGVL7XNkR3AEaPUczgbZwmuzfrwFzEWkpewbRr9pQHQnDnU1HyiiBwhLsdGGVn63pS5u4ThcxJLeWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwQV2yrXzJi3B2BYEsb28eJZ8BWtuecGZ85igmirCgapQhwUJMMQQUBhzJrCS2p1FAZMuuGiLUGT72ohgwfEURP",
  "key1": "2Sdq6c9uQJ1bQgf6Rhe66dse2A3v4m31tQDsLe71vwjvzGFScFWbM2buUqv2KDXAAcRHtc4aYMS4sig1h68yynje",
  "key2": "5cUKcGrvLueW5PtyDBcuLPjiX4z9wuRjnckwYpivwq2z67DMgNJ7UoKcGJFuuyL3qCjsKJJyRgzsVobqnn35C4p6",
  "key3": "34cF56RMvF3o818Fpan1nzwBf1rQ84A5jjdBMJqqaT25LBTKGkEJX1Frj7cd59uVb4egqyXTcoBqvK5yXAVcXxS7",
  "key4": "5PwPSdFp5GmhMKnaQGZoayxjSU6MiQdJ8EuTKr1Z6kyxsqWpZvVAY2xcyQJAm7cVpJTqMKHHKBUhh3j3WMs1uMzf",
  "key5": "5LmCJkaAWAWtLXznN72aa252i7kGPWeN92stFpcQ4FtX3G9gFW5CaJ3KNpeHdS1x9gSHKd9AzUSLojww6t981HLF",
  "key6": "5fJv4Lhka1PknRgvdb63cwGAAzQVFA341GKnoTgnhZa3kNbzxuX23v3TQH31zWC3FQf2UUd7tTSvJ3MpExBE56qA",
  "key7": "4qoiXLgShtDYhdZY8D5G5qvBXJNYU1zp44HagYKutzhjf8KzCXnYBfR8EoxkZfZctNEbei1ysBbAWvddnT9Cixub",
  "key8": "2n6N4vQvaHz1GoY1Wcdhe1TsQdFA7LTMTxnyt1eryyDLvezrYeB6sWkfwnDEke8UDziTp2LUnEbprwCRtzC8dz77",
  "key9": "5K1uefAd37ZvyQw1ChhRje3RQrebRS6V4yrLrNUdoteo3sJuBwVZgR5jZREkqfPweUQFLaP8vJAk3ADFaA1pKgnZ",
  "key10": "66CtFF3cwiAty5CRk9XPcGQsUrgEnRvh7gCQRJcA1eFgZEQGSPMMvnjMcrz4oXovNsEWnP7sw1tydMBeRvTtWw1A",
  "key11": "E6MznFcv1dPYn1zdQbYLsjJk4hyc5Exns4rtKiqZh3NtYtZ8EGWuH5F5PVqYVqYGaXnpSKNk5r2WjgGi52etPWd",
  "key12": "rXuJ9Luxp2aJGF7LKujePVeRNnSbV1QzpXnU1F9G4t75CJszv4kQx77Mqb5ys2DeeTRcg2NoR7rNk5uoHSiFpRy",
  "key13": "26xR8D8p3uVeRDsxP46VYyesEN1ug6jWvhcG3yhGGKvH2BfBUKzhXwVpVHPGJvR6wtCrPLHpA1YqPSXUrM4e281Z",
  "key14": "5oxrqA6UvqeoQyVbuTrtbZjsHUNkuiAVMd3VzBv5696YaGBbonH3p8jvQY81K1ufaReynt8hbT4aRVtCDGpen3Ng",
  "key15": "r6RSG1i6PyLhuVwEJUfPWzjU3WFAM5Hhcp8JnEJFpdSjYBGMQkMWdvuMLDScT27kwBjX5s8QDBPpWx94VMvcnUT",
  "key16": "3Z6RAz5xv8j1iKzAsFQrjH8fynRdYqTrTSMJpL86fexTFL94kLmpMboiE9k3GKzUGVJG4oV3rBXeykb4DrEuqBZv",
  "key17": "iPKJpQUytS3oCh7c8PnFNLVH45T73oqrh49mS1Za5ESor6xsqXVWcypDKXJwhur4LVJUgw3PQ4rytbZWa5gwtk3",
  "key18": "58ENcenps9N9DU6HeNKeJdFXNeZi7HcNa7Hxn2xHm3s7SuWMJVj8ooz9istQgAXw7T9vTN1AruLTKchb3WPLKMer",
  "key19": "5eR6BmPh7pyTDRoMxg2BdRJq1hJ95FrbizR2ixPDbJdBfUeaZJAEorQroruCJpfbjrXjuWA8PidVGgiYJADPoTGP",
  "key20": "33yhcXQz4B27d2L5kPPbaP3GhDdhur9czpNsxTFbWTCGzJcNQfxvFViy3YzKwq6rfWeQg7gxEm45dt21e5shW3oZ",
  "key21": "5siAjEGnmLnCzSvtW4oDKXhjPmRXoy4Efm3Af9tK7tzkGxXRTozLHN6jqYvnEkz6KgKeLMAP3CiFiLFZ4faMGFEL",
  "key22": "PeUEpxxrmm5E5dZ2Bu6oGzpqwk4pPXE8bt1djKZG4SYPQki5WbbrGdgWCrMCmCREgreo9jLRzteYwYt1akFH8P5",
  "key23": "3nLYCxMhniXqqEpHQgDvkvmMWv5PGzisHAzfR11MnEro8RnXyRMekfSuAe7mermbGeGu4DvnXFWFtpbKuvEzCmix",
  "key24": "5ucBnUpXTRJPJ2gFTXTyEgaVkkgbwQhCnFPKYhi6LfACh7cx42z3qPjEGVU7nSr8fVNfX1PgXSBTLBm5TdVJvPJZ",
  "key25": "5ZNmMrmScYoRFBJyhFv1VjZp9H1PuBGUFw7NCnenr6UgUEuVPsav7iEbscqQhVyR9ERECpZ8no6xGUZGJyCCDXPf",
  "key26": "4tQrZ7i9n2GDRuQRzw7cRmspTLj79CyFzWQQUVGU3mUUKhqzPSFttHhraNtoATvCpyMm8yjygQF7zVe1FmugCoji",
  "key27": "3nkTCnQGHYiQjBhGfXpaMJsuSP22VQNySFRM2fAT9uAqw8Z3CZqVxZGkpKVBy17Fdy5uNhYHbTC9hXunbNd2nMo9",
  "key28": "3ZuYwH3HBTTjYfz56t1MpWu6qcA5i1mQtvVmQty113yszwPiB6VqadQAY4ERqXqP25Do8jXX4pk5GokWgZBwGzLu",
  "key29": "4eG2upP86BoLKWiVVueYMsdXNMyxGqmYVuJ1Pxh6d2WWF24qvbHzExALX9bmPTzh5baB6SGgLJ6QT2FQDC7DWuBW",
  "key30": "3wk2Hc3bKvPBRT5DnfjwL271YoKmuzFrx4tt6XXuMxz4gP3co3Z1cMo6PYF76ew1QfZRivn9UQrBBY8juKd93vvb",
  "key31": "Nt169bJTT1n4y5wrnQYnXhAhKZDAdwgncELjvtGLu8UsyyTzvCH7o7QvPuXzZXj559hESLhQkACUKsPze9y6gL3",
  "key32": "5hU2nFY9ui4e3NaEzi6uERLPg5z5HSjwTtaLx5bD6hgpfZXiUgtJpUxJnJhKh3RUJLxoewm1i8jdCL1axSZbBxtg",
  "key33": "5WXPCnkNSMjasQ3xAeiCs4RGv4giKnb9S4oupJMCyMXgmKb1UGAWewdRwErNmsSAwreJBpiJ7qApV1XSYpnEXzae",
  "key34": "5pnVQ92VHoxFfZvnGViVKqZRxqpkx8LnvuQwPJXvwF2joioqRfgok6cYPZ3VWYTz2wKKV9hJg3UQpid3DzhBHnik",
  "key35": "329h1AHWuvLKBct1e2mTHWCRHUekYRHES2T1HNvaibiXcMvZTDP8yFoE8q1Gpiip38s5zJzWfCPgyFyDwb5wuVYu",
  "key36": "6XMG5BYoRdqEevrWTT5AHt7zGoSynsmG59wgUUP4a8pPsG5dgrJ1tPhq965CuR2aSYsagWNK5zemRQwgen6XRtP",
  "key37": "2cQdETFj9dztZ9ZpNCr263zikPMGY5wVRRwgkRwssPgF1kRg3VH4ioUH1SY7QyrkvqqnuDiHGqSF6Ar5Y5wsLCXG",
  "key38": "2uxVHKd15Mc8mL9JLpjJ1HMVTyXFxgEDnptbfeVFKSrrRgyWf7snyWGSjFGgbRdAsJCdfxVKiVGEtssz1DPDE3Ev",
  "key39": "5YWKDo91UH2TN8dFkoSzaydK2VVsF7Ymd6rH1FUjCNVxJE3fLdEUuyiyFsbLfMKX4UxwZv6t7YrkQA3e3ecCryNV",
  "key40": "2SBiC42uUx2Zw23zbT5wJpyHJrQAQqL68ycwzn1QhjQFXxu1s5EBhy5YzhgrhEi2FTYVqhJiiAmNfXdmo1CzzN9L",
  "key41": "2CXFAJBHtVRJ6waB1sDSXu9iQZdGU3iGGLGuT5JS678VLeQqYJ6VUtnjojMLnBfvBPqrn324cVgWB6C6MkC4Dk2j",
  "key42": "tp8n1u2PFp1HnWR2kszhgzC6qPbGkz6ajBJH1wxJbrmCfgKAtaaT5Ps2xKz9QRRimbREdB9Ar49KD19CbmrNbMs",
  "key43": "3s1AF62YMbcRAQHeu9pZGU7dFVZwZLygDXeo69ov4D96FFpAyN6sbKLEvEX2yHvvRWbrSxCXdEMnZH8kyVTW6Lk",
  "key44": "4Mmzb9qFFvaEHBEEoTKnGzZEJJ4Q9jWj2bxk3rdTY8fYntBow76GKJVXsX53scvpC8EnoNJvSYUVNxkXzN1aA5Pt",
  "key45": "4TcSiovXnCTtsmUY27Dd6Kt8VhR5GuUNR67rHS5XF8v8gSSM9sPRKYuQiEgJMqCPWGrX9eVRdKBsGLH3Pqyr5gKd",
  "key46": "5BdMcyJjVBbcKhSMrQHtcBhCGTNMurfZ5Vo3wAcpeb2U2KXE8zjKngjkDru2M9YQUKkgFU1z2xKTGFVhdA5phBxt",
  "key47": "21hWtVhe9B9VnDs6ijUPQQ9sAVKaiRohGU1eaWJ4Qez3zK2xru3fPb6g9RMqKCNka6iYhN9vuxcHkZnhcJCPyRPw",
  "key48": "2RG5C7u9d7CLWNPn7oAToUYxFjbksaVQn5ia9v7ruPFEoCnVd2M5Ei3mYYTRC2e6xdJvzU96hZrMmERAbvpPGHYQ",
  "key49": "4SDWtUAhpyGygazk1vRot6MNEopzArPE4oGTKfCGAno1pYyZXZWDwkytnY7iz95SJun5FyWFxWzkZNWzsE8orjZo"
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
