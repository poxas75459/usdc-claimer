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
    "5wJdv1AjDn365F2wEMpTmkfsAsQRs46omU75vM9mhr2PtqttxpeyTydCHAcpP3yYEX2RHT8EDKoTDmUruRqajtUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6Sx4ogTg9EPqy7GeVoT7WuUYjYYWTLAtNwu1CfpW9yumaxQByCznrWCsK5rHQTktMkomFbMnteXYrS5rW7vv5Q",
  "key1": "23oVunFBfnvRXdhf8qzfgGNPT759zaUL1gHoUZxesrhHaRM8e5Qj3EjWQ3sAuGTPrCcD8hdmH4xNCjT3dBTWNMJN",
  "key2": "TdkdX8rYYKqN4ThbYLxtk2fcA7p8f2UEip7gP2Mkajfug1TnUX7J6az6jS2hxz1cFmyHTxmachuxxL7Q5vDWutr",
  "key3": "5svKCYYGTqG5iSiSBy8Ptye64nyfjp4YWj3kHs59NjodjPToiTnxZ1vHzHMH7z7Ch3n3v71QkqnwqwGKbLjgWh2z",
  "key4": "3EzSaxjAWJTW1LdVWiUNVfZ2n8ZhiQGQMncDcf4fqKAxGZuirnbBCdFHFSUjGaHxtU2k8HbM6Fs4SeJVw157JuiP",
  "key5": "363GsMZftyW8yCXuckwwZCwERZQPjXCEeLK9TnC3An2YWgkeSM4w3GJD5DV2fuhGktvNgAwgxkxeTGtzV86zZPdh",
  "key6": "55hve5SCMBguML4zcrbuDR6vsHTkfjCAVeXBCEsJdFUJdykn8S9SMTYKmwb3nUkngbhPnaDGdE7Fbah1Mm3cQz3f",
  "key7": "3XQsG2JsoSTWUA85XRYLEqUUE5LHnPiLbqjwDAnzRi3QTLAFCpJr4Mjjwkcm1gzhtndFwtofNpj7r9AyFeRSqwE9",
  "key8": "2Wjv4jK9RxkhbJCoMBMDhssT2LaXeFpGWpNsiyQ5D55yBaHCb1pjxTTARQxBeVTwtjXnjMbUXWVkFFMnGoMCQ9GY",
  "key9": "2fj2SS6netGPs8k8SLJjvkrW8nNWQfwenSx8bG6jsSYwB6F7zKouHwiAoLNTcem2yWNtcLbA8YX2DQ384joWt4vE",
  "key10": "3zQLzFbfVXYMf63z2dGxUxisACbN3owdVRKmeCuoWvzYjzimfaJcwTicLgBqPwVGWiLSKiRXPsHyLeQzwERCVJ4Y",
  "key11": "5FDbQU1NNDZsv4T4hnJjXQeFTkrzwNuKgTcHnNb1NHJzUcLnvoseMCQ4KXP5YzhxFBrtBxx8XPupbaqgz91kcX73",
  "key12": "2fj3M81uwVejfDFGqn3NVanJTni3c5wRUJc5j2N8LJQLBVtGJULbbThTAaYbtXYTrQ4m7UK3Hj25Y6xojVNy63E7",
  "key13": "ztGf1NMnkoprZEuZyxG6PXG4XMq22fH1wN5MJTk3EgwkSTJC5RboZMdGJP2y2U2TJGtZ1EiojBiyZVQp6HhAnca",
  "key14": "otSLRGSthYwKEoSczDLdfoiJDmpYWNujxfSkGuGy2vdoiWB4a7bkAoVxLutw1pPkvyBjMRs8C9chuSAtMY4gJie",
  "key15": "5bUcgdzpqptjn9msgVuvMPonYUvCAUePyrmEvn1ZscKVz527p1ZFGLv6BmuJJ5EQMKTswmePbGA8NjgkVqbyJmXM",
  "key16": "2mEdo4ARuWWvwKVXj3oTd6tRN8YyZ962GUgdwvPXsHaBZ5jQ1johZFpRPSSDTQHFRCWVonwjEYkqz6bQ3g6Cn4sJ",
  "key17": "5UzEvMby5yNM3uT8LCW7UjjQgUYFUZ63GpajTmXvzNpQBPQcdzQ6qEUmH3NYR77kApo8ejqFdegu1Fq9KEbbqH4h",
  "key18": "uLvGqx9X2nVLjtzUPKtLBr4eJrRM25tBzaq27x6mBmVo9THJpwZezjcuqbtwLed2Hky63J9V1HrySRMLuXWsAFt",
  "key19": "53V7F4AvHcrdAV2iKetraQz4kanFGBLmPQTynYLqWoFHjEg6pwD42xog9efjqfX5jdUJzwc9FswQ1XZrDosDHRUB",
  "key20": "Fsd6njm56mTUWp6iDWFAtQXNWKRVbP8X1S1LtEX1dHTFp1rwd3bjrx2RR5yogpVtsWo3yBrBCtkMvhU1U7Mb12t",
  "key21": "3SDCm5seaPmKXz8KvEYBPD2kYGRpmbGGNyE86f4uCkhUBPcJXRf2UZKR8AFKa18jSAUfU8YMAaQaC8jMHDsghAHu",
  "key22": "EKrH9FWL3hC8HpMygQ7qXzeB6YgLznr9Sq7BDtgJzRkWzst4XzGB1dTkD7fgsinMbgGYeFV8JtbyhGwLjhMbJaY",
  "key23": "5WNEACQ7wpkWgvghirh8qkXwcyuVyYui6bUrWqiBxC31SsEtDZS1qLyFNTk869RBy2uxgajBYkKCixjrJrsMdJYp",
  "key24": "ujThE3exqGNbtGZS4tutQjUCTnZqqijSCuoCiabUJ6tBnCHpGDKaShFriMpkczmoNrH7b8Ts23Prf1e96uc9si1",
  "key25": "hGgchqG1BApeUx9UdJCYqvjYTuHYrZM41TNZuNpKosaCwKqZELhAB9SWC6iA4S1b2K9RYqgcLQpYwSBweKPk67V",
  "key26": "2CojPZpcDX2WkqhWqLRixTySzXXWNEBsuYWGDxGJyKacYZa4U25YezS55HRPcSgN46tELHEniEJ2rLGuKz6QEqnZ",
  "key27": "Z8jtnkZ8LsMzSq7jGrywHi6A8C9ZDy3MMXouU7fUaqPnSj5v7d2GAompssiL6rDwvmBwmXcWQmw7kbnHeonPYn6",
  "key28": "5VZDScRzjyAQ8CocELroPQZVSz86MpsmfgcMVMhLUEeyEWzTmWHHJH7uBQn7MYm6oHitnh3adS5tj3L8JuH4ZwoY",
  "key29": "5idNu5pcXbHML7kcCvEBybYTQEz7YwteeRSdSP3DDHyshHXa41pyvJ6nyFuhdnN1kwgEnJwWNF3SjxVN3wmkAHH1",
  "key30": "3kPihZS5HQDN7RowTyxGZSZc3DR7qBELM8bJX5oCr8jTrwHKF46wjTqvQo7oUryvjfdwrF4NwEZUu9wUKCpQr76S",
  "key31": "58JvxAZCRKji9Nra6x67TTAfmR9qpbT48wx4xsM2i3PYvMLudQdCksiTu2KaWqke6UsH7bMy5AbwFMhCL5NNKBK7",
  "key32": "2yumWcsTSPyWafEA1pfunbD8VkaGmWf7eqFcVj5z65fJETbU4NREA3NoneeqmRwUw7bwQZjrEcWcfVpYFSc6RTbQ",
  "key33": "5RkxGPv31yVKGfZe1EXJSqDFvTS5ksVtNRiqGXTtG4FtCQNU4VLiazcZrWd5T1quqJBQqyx77su5KhhtGkuYHGvA",
  "key34": "EMbaV2ze2Ds9eJz9apE1U29Ud2KYQPwSohktq9nMm6eWGY8GNVj3GY8dvYfnwotqgPw4tGvTK5ujTw86Kbu9qDr",
  "key35": "2MtcBoqhV4PPXJYoD9PiB5tM86DKo6NwwWKAxryiDt1aY2eLiGtmuFoh6cpozSFcLY5amuXt1H98BP7xqMY1bXAc",
  "key36": "5ahHtk4Vjvzz9Yd5RzCdDD2xMnPWGNQt4kkXdy2AcMyoVx6NN1YvdzHjPMH1UaGyxfFijqCsmPyGh3pYAu4zBfFZ",
  "key37": "4vmYWYxwNvzTd2uz66NF8kfbuFtqPSaQvMzHDr9FfXvkBzfwXn1cf6oJTUDG1monkHWa3beNhabgCYK5K1CmUs8K",
  "key38": "4MbqmJ43c49TeAohbGyqPAGB98Va8qEQsSugaKMdzhMxdNeqokGKa66HMSXqYUMRiRPvaKWnuF29PMSrwxYwrgMb",
  "key39": "2U1YUN6eRND9b1S3sTqodwPN7h6Xwa4GV42RhMDeDLDfnCeH8zRii7eFKhvyVfZgPBAEKTxFWUQ3tRffexz3GUAK",
  "key40": "25k6djwmbbwy4FRsFcAq6qmQxJgd3eormWLTaCqBmahvcUJuUFMTXXpiu7pPc4kfYrPcuEDQXAgg2xHruVwZXz6y",
  "key41": "5UiQ6TAartuL1qBPAZQKzGopdb8aBC5YvPuqeNZw52ZvsZFT8TrS9DCDoCwFfzQ1m2aA6N14wnpB6FnAgp2nr4RS",
  "key42": "3V8aA8mY2GigzTCd6b5JD9TSDjH23fvsGPCf9DcN4jAMsGpSdHkVYyMLiG3NmPGs4ndVDEWLzXdDFWeEDjxzsMKj",
  "key43": "4rD92q1RbGdZtWEvzN3TCrRbEWLKhdQWnyHaKE5AGwSHbjYQwnyETWEXsdPmoyhp7iJnBBjVsGsnCg2vkRwLJGzS"
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
