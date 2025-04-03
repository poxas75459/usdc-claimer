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
    "37mW5fEegBSwyZaLWHCwUB8FVcjBt5UMYGde9yRRwyPrN6kgUfebGSGKySFr7t72AUkLCu8igp4qsYsYTdynjRed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YkSgWW9buuknDXDZVsnVXRFj9KJPaVckbdZ6j8hVLdSPS1cexN59UiQWBYw6fEAEB7Wja1FcPQv4BXkMCqyLBmn",
  "key1": "5ZxejMCe4PKRXgPgscx9eVtF7AAP5iaw83soAvLRcBBJp7rAPhT5tXcVSZddXrJvuMTTwYZVB5oGVn78sXCYJ4cf",
  "key2": "2oH5F75VwKvSitffpAF8RQyKPUtDTiEULddkRqxBMTmRnQyuwxKcbzXjNcTuqzrLRiPKvdkrLsQWGaJe3fQMytEp",
  "key3": "61sC7v5Yf9vzCnTsVtN8HaJKATmTUzZ8aWFSDB8Jhe9BMMcf3e398A9yaE1ZyFpsjbffp5v1bekLFtj3XfXmnfuP",
  "key4": "2R4D34HVL6wHsCz4fb9e5Uvub2SvF9DQdbadP7J5FaoD1q8chyuaWqk7UuCnWt2VjKAKxosGDfLicANZjdXokpcD",
  "key5": "3HrUrruPXjdYp9qStWaHd5pAxTN2gdXe91UuNQjDb9kEgNFqo5X5p5La6sU6spSaFE8VgXhMEMP8KHJHMzXbcXBq",
  "key6": "5jBEsFe9ABHomjCjqtVEc4nNwKAfxgz6wkSge43pF3VLHKob9Xqhe6wSiswJKLkhaLjU9zoBWf3EiSakgbB5Xju5",
  "key7": "5KdKenD5eSzWopVuL1ff1tcNM3AfgE3WAtLeiaY91XgZTyvbcvtFtWG6Bs6o77Y2GQnxUSX9JoyiGSFjnX85ofjh",
  "key8": "pLKiXYsWvDVpyZNs7i6NzM9bJSUD7mhXVFLLjqonDG24D4YG4aEq5VwoUb5r15SK5VeiiKyViM45QbZuvRSr8Sn",
  "key9": "2BYgKTRd6KEizPGbik463ANSipf9ZHH4Vq7pwuCwp16LwXfj3XgCief5HyCHSDNEkyahkUVWs12HtSiPpKQcff2F",
  "key10": "3dY8fxctWbgw5G4JbtkMbDNzkaompPttLReFpxkfjGd2y1uSuGsJsxjA5CxMgeYQXggAz8wSTaPu5nURejvVh9oQ",
  "key11": "5bz5fv7i8irbXAygWwzbAbUUZn9JsiLTSsNvvPyeWzf2MdYT1WVkwmFk4R1yTQ6PvDs5sqMQpSzKiFjq9h5UR5vG",
  "key12": "2bmMPUDfJSaxRjCSVz21PnA3a5F1wKzkRpcV4n5ENuYBVrhfiyNAMnsyP3VKUKuPpq1CvvuZ92HTZRRFs2kNhUH5",
  "key13": "4wNGRptjxt8Lo33oY37oRNnu4g7v9t1npU17jVRXRcAB4W528uu2T2VmTyAvD68pQG1Lfj9m4wBzgVe363wAqAX1",
  "key14": "5vByRwZMAi46gESEAUWwcyHFpy5KrGQnbkuaWD4JKh1UpKPqZpQS7i2kTVUJLv4ZgMvP4otkGXG1dJPveXApW1uy",
  "key15": "55iAUJS5kBUYKDTVohx9bQkjBkcf8v2wzGULsqcWxbED8VykkgcofpJu4GmbuXtZhphnCkFw242gW6JFU8GUi92B",
  "key16": "3V3S8afiibaBPQjZPDxF6dULeons3kZ7PwVba1iWMmTcdfLvrTM2jJ4wRtbYdnNsbGcFcsHa9NdS73EqEsiqXfFX",
  "key17": "5hVwdhFLMfksJK5aJD4UUG1EZwtXpjPLkqKvwSLMhSvPXZCTgPGRTdBqXPi5wr9AUunCC7Uh6kJybM6jJURkZ2FY",
  "key18": "2bfcnq79awZH4yeqhttMn84myEvxn6SK1ZHKi8P6J9sLPn1VL9ZMLyyiVj5xxkjooS7Xjb8FCStsdLcyEesMT9YX",
  "key19": "2y7XzF61WCmPuTesjaXekYrDRE3KzeXxyhjpFg1uJ1PWsM8xFi8tZ7B8Q8or7a9ocwxiJNZdVXSmBWuTHe58eQoV",
  "key20": "2mMqAD1fCsT1kq1LesoWw41fPLn3jnsMTmc7z1B7x96qvcFrn58rEhiPoYwrXErHh6BuN7TpGC54NZ6NdfGgFx6F",
  "key21": "2zvjfwnjDbML2nE4Ns2EkcAWxGXB6mmpTecWv5BXpvuU6qq7EusEboP8aVgRA9wsyqr5YQCjdyu6Hvis1zgTcxgw",
  "key22": "2WrSEPQDk9AAANQCoogTVtbc4n28qbbLhaUv1uzaE8jch3EDMgP9rzBCP6KKf66SCLEa5F8vSRep5d6E8mbAU7fq",
  "key23": "5sdNTJXLkAEYkmHHBoskjUEQ9iJZeBLuQbJaDKQ9UhuYB9Z5Ef81qzq9uqiDtHRqR6exuHV783d87YdNbJuMzyoH",
  "key24": "2WCPDvh4Tpp6iFVsd9HNtG4WgEyTmaGmB9gumngTxyaHHd6CSVevEgniCfBfAfySYtedJFqCsmoss3iSoQSDS14Y",
  "key25": "DDcz9BXbKFYm7bfNHkRWmUafGZdkyAywsyDdt4WDmvc7VRmgKZyQUfHPYxzXijuTXFcNF28YWoptxfZo41k9pXf",
  "key26": "2y52EjDxXRF4tJcWNeSAK7YjTo2G9Zci3hAqD89PZag72HDyXXi5CZ31kf3wpApAAqKycww16f5jb76o2qcC9jmK",
  "key27": "5dq1Avv3coUisnBjami5gRotpRtQrKG6M63VW7Lh95cMn1ACyyxrGCCmTC2Zih6jAoYKU4K7kESD5FfjpXv34U1k",
  "key28": "55qKwU5Cood13xm6KpDWbA3YnqcJECCYzhN7ePxErMx6DwSJXJxAQomeTHFHA5JpW6QP2MqL1vDW6fdzqGRreNLi",
  "key29": "61dVNzdgF7Szd9atZ8jG9ngE6cpWrWzUibx3Zzk9UVvpGTrJ6eGTyfmJhg5kwi8d13wzE4c2o1NJqtrEKE638TAK",
  "key30": "3XUKXgFNAd71dx1L42C3p7G61H3AbEx8Dt6Qs2fNUS9FGG86WB3e5jFyM3iPvfYyzQQ6UtWm8xYgyRKuEh4E59Rv",
  "key31": "3RhNDd2eSzGi1u8dnT6aKGDcgkA4XLGUHNAvpRHXq7Ty88rKT718tqDDjdVj2XVRWVp8sqgiEfSTP4zJq8uh1qM",
  "key32": "4X3AJoWnbuWLuh5RCmz7dXNBS5HiCB48BznGdqNV6u98N8Hk6eb3DgmR2Z8BYGmyimXcYktVNoDqHxQSyG56H7aV",
  "key33": "Zn6a7ZdNfjUdV7xXBxgTqcRbJp8YJQdsvBzJLcaYksdaMUz6jMyxDPkiPogK2kYLqB6dyL5ktjQt8jG2S5fRDna"
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
