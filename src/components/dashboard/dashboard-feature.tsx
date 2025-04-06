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
    "3FrCGJizH69YqsdsMUpLc8WWgytqwHVmF8jjM5D3Qzf6dsEK4brBCEEyPDkzhUrHkhyQvzfZf8ojB6VkLcgo94jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TCuxR5CNice998WhcFW74WzAWdFeF3CGmuKeTCKya9ZfD6UDxFh1qXkQY52Q2J8yptvN9BZxfcjGDxbx2utcmyS",
  "key1": "5ieLtCfmTDue2CjmFEdcFH4fFxwagdMhis8JafwH7wiB4c8FAqy93k3zK3KFS7Q24vUeqXaGJQTYRPMbSRNVqLhb",
  "key2": "HNVz1NS8q84UtSPF3MnuAutE9xdDgymDRhfGuw6KGSG8jiZugdj8QmWmEnWH2D6UtHEckvC4QLZ5DxUdjS3gVXa",
  "key3": "VAdwFgk5rbFaQ1ujLWhXo35fArM4E3AbPQEEgvX1pqxX379iMmXwiXUFZvodHkHa6pmnJfaA8jVpSkVSv1zPinv",
  "key4": "97PqhxBLhNuyPoxSwUnMh1VdAWziHpH2MhsdoKzgp3YUWXqbcmqbvJp7maYeSsztG4ece2RsfKuJuVVUhankean",
  "key5": "39ewN8b8KX1VSFzU2CGKQBDnyMwBdw5pMvaND3GkWAdbwjWvmhpMwyDj3i5hHqJSHfhKiyi5bivkmbwXVHB6bYsc",
  "key6": "36FhHCYCDUkBQwWjatvwZMWzrDyVecpzUs7eKVtqRnnmazKb6onCNFmmjeEP3TCsvEtWQgNh2mjP32wMPw188tXX",
  "key7": "5ogUpLunUf53cRggZh7ZxT73B1xeyRwvscXFiY8W5zjeQVQhYyF3Xqx46Ec2B3Fe1EKu89bpPGA1iQ5YkHUvCaHF",
  "key8": "5NgnEBZVRnjpz7J5k6XsVRKgqQaygkHyW72gtF6KtJhAfehozb2aTEX553grwUa2TWFDRLwATrpmaTRjMDaoH4E7",
  "key9": "3oYindouBJQnkc91LYCbC9gmke5Bc6BrBRiveF9RnXfivSWNUgj1ELAWvdJNKcHUZhp2wjQG23nsTtugr6zrYAkk",
  "key10": "3sxKw5zxNEgP5a6uUVQYciBfgrft8dNDdQuxWLXPCfHWCZ4XURMAYHC9Dww5YrFYVgz8N24fZnn1hPNDKVpWwh2y",
  "key11": "2oQCxZLcvzKJ98ay5VWspN7hnsrYD2AVVsHYqrgwzgMPep9fZaUQuw29GW8LJYsfVzPkMRP8iTH3ok8AqjsUyjfG",
  "key12": "2MBtxcvkopfuSRsoVF5Ka4LuFExb38asdwdUS4UouYy3DhGNCt13S9HooqxoGNxPDMqnrfG6Cc9Ft5756CE98FAu",
  "key13": "5jcw9De1eTB51KbvqqZzjzrT68vY2uzntruWjcXnbwbHgYC6xH62Vi6iZGqHQqqq1bqH8ERM5Kw14FxazXqQuoFB",
  "key14": "2QAKXowv5KUe9WuxLMMYWD4HV1E1Ex6bQKPifCyHbwnwaALHhFGLLJbe96Prf8P5P5zwsfgMDHUQ9GUuwDhzPKHT",
  "key15": "4nLNacg5FzqQBPRWmuswtwoMM4iRhg4WJ24fCEk8SexZb1WSdBbtAwZkmeAsw1fXwYMH1jooEFeHS377griQWUXs",
  "key16": "5FeyurEf4UTCgDbM3LBoUrEZdCyqj369mX8uc8ectCK117TtEjEg9g54LuPScBBksgJUU2kXpVARRbRQt8DJiyRG",
  "key17": "5rEYihBqv4aGMzaCky1KBUWVkoRJQqNE9A42jj5nDwjYV1s1u9H9u2jp27agSTMnLitHQjePVvn7QAqDFysGdRsB",
  "key18": "44rgTeyanmoZaFFaS73pquh7xqddbBq5HUe7ERzbTLQhW7Yw8SNiMCM1qkvDyLekYdMHWBFujDauz4ucuANfPZEv",
  "key19": "3ViBTkSS6iJK9XyWYktt2zfzAKQV4t2LbzrVHiJjxp5CvHWmkVKCfP26iaWcGCCW9Rhdy1S7B1xvjBWnJRWxLv7R",
  "key20": "4VWSR7sLEPdhdsv7VKzgJfZ79MBem5Xo52tJJ3CD7g8wJrh14hBdPyiKa2QewhHuESe7pQ7PaSi2amMisumtF218",
  "key21": "4WFYrvGHbE61fdVxfoQ9VkbprPRf3WVkRqtmN8uoQsozdcJnbs5ZvdfpJ9wABdtbeJQxRiZetuZCfFV9BAhsS9V6",
  "key22": "37wePiwwCASEh3gH2Gjxa3R4vaZuQmx4yQL1dgxWK4iMRnZF9mGuVsgNxPvbtBH9P6Yon9P82kA3ArUjk3ofn8PL",
  "key23": "5zQTG3ysp7FmvriW1ZS9q7aRXDkjgor8fWqHFHmXBHMm4B3ZhUd8e6epkamtJr8Bj3oAEwHgApNULRiqoRtpgUM5",
  "key24": "wPuK6LKTY3qX6rnZSWYrJeFGzUCrnq3bypSMxNTmekSPmUQrKvn9VPufRRLHpGW6nSq3pRjns3iDhkuQgFvpwaL",
  "key25": "48kbzW7CMfuopa8FpXY16WUSYahKFhJrwKGLy6WTgFAMVBokKWrnNF9SyBqva1WeSbSNDC1gEeYoFLzpeNjkmb42",
  "key26": "5t9WNEAzSDepsa6C7ZZP9r8V2KdNLT73Q1qX3uBpCJU9oJ62bwhjPsHDZ2Fnr5S2gzew5FaePdrbLLcRHGFTJBbx",
  "key27": "3wiug6XSpNG6avzSWNrtKq3DN9AXVXSLn1dethW3QvuPLyUjRkK9RKjGJ7sk1iNrrvpTfDEM5KzshjLpTEYN2iKW",
  "key28": "4T37WReKvoEKWFjKRrygWk52EEx5wAP5412Vf6DQpdi1mQiz8qBYfvWktRSdTMsTi4aFxnWz84Uk981TubwjepFu",
  "key29": "2QpDJHrBW8jbmcrVus1AgkhkmLFnNtEsaEJDfhbccpDS7W89JzoFUaH74KGmW3M7wNBSWBt4WbcMohSewgxjreey",
  "key30": "GvcD8ff4j8nXPUffPKr2WuVkHVQs5oJdEG1dFd1uK4yVvgFMLYoiMWcL64AZ9GZWXUgCrrXt3Kc6G2ifAhRcBvi",
  "key31": "54wzaHUsMmCBkKHnyDupciGpG4BAuCdEPsuYZg2GatekuhGZ6ZRWmMjx3JwDjkmJzTLj4s6vNp6xchs6Ln6jV7tG",
  "key32": "4wFACM6teHaNtRCovC25xLqPdMhKhR6V2qkiv3YdjvpAa1rP13zrBT7zAKn6DSEBR3nUPuZYCPiAe3FLmcN1cRBG",
  "key33": "cgbLikB6KTZTsZnng4sKxNMHT8oeE5nvfZRFBNHZBbvoNpLunt5H3mz9sCbXrP5h14h6JnawP6tAXxM31hLk8Rf",
  "key34": "cD6DUSiapbWZtNWaubaRmyZH9RmA8R36yMHnWXc1tLDS8z7K5fmHnekeG5WmTUoZ1nMT5RzkAoJKR1H2eiDGDmB",
  "key35": "PnLYriduH7rgjUgSKGjHyarPRhSGeP5QonfCwbyCT2ep4v76EwHZGw1dE87uK89mmP2xbtN14yT5QX7PKm8xZYL",
  "key36": "qUh9gH72EtZuCctoGFEXw6urea3CJ8EzMtucmQf579M9kWoXPCbujWtB3x31ZSPYJ6fr6A8fowxyubGBB3g9JCU",
  "key37": "5CjujU4EfWdn3ioM8bq1BDa5Y5DtmXgieHkv4eaBS5hG5H5noj7Qu41GsVDCpwvhkhABsf91yJJEpBf9qBDwWNUq"
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
