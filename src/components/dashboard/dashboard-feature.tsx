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
    "5T8oUtcZ8iYAnSueRfQUKQH9J1M2ZPkaiAyRJATt1s3NfzDpApqihT4FP1YAyxW4kdBsyXHS42YTLiWXGKNoSuHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ak7h2ajEQ5nVYTm7ZMZf3bsKDZsU7iQqyyCN48UzpFDDYKcXQP2DHfKGREgCXwmFDAH4mfMVbvEPbv6ur7nCWtg",
  "key1": "Yrmac65DcHvJ9ZpbF7hu4ZTPczuX1EgsHZG5Pogz4UjNMokdKbRwHgeiUJJuFZ35vafbQuJsPxJwRhJsww3n3WU",
  "key2": "8WvB4PnjBuCoSNEosGK5rYyVWhXEsDaAxUFZtihNDKDYqUKk2cuwSMHvLGJtuTfSjfGAz2MnNgxByBumSWRXDVE",
  "key3": "3pCw1eL5gmivND9Nxbg9FcBkoc3KPkztXYCP14HQex89MkS3G3zyBBRacMjLR6A57xsHVHuVJBbyd87PETKk4g1R",
  "key4": "2V9XEyZE2JXzugLggQXdrMoAySWMbUDy8y8ViZnp9TxKHjZb1a12ZEk8wJ6HLqa47CC7FEiHzAEGU7TWVxK5ut9V",
  "key5": "24jFJJYX7FQSJxzcxfgbLQBxAjEnS7C5epfcYcsLgZy65swCyWJVaPuVfeMdq4yXuh9zj2cFbNv4pvuwuR1e8ofs",
  "key6": "3GDYhAZuXKzhgkNJeK7E6W1ZgGQbEs8HLtY7WFXwja8tWVadZWXzeB3Uj8QmQUvxNHJFKSdd3X67LKLuCs1awNVj",
  "key7": "4uK4oytxDpSCTiY9DzZ1x6hMph74HQ5yfNLmBoYTaQ71yJam2QjWh8BXo2nggB9LdEpbpBzp7QnSED6Sg6VSrCWW",
  "key8": "4xuYe2M3rNBke3KcfrkeprXucdhA3i1vri72f4mTzWwhXkcNEqqLnLcLgaUaBxLPQf9nDno8dibC9zj8LgnNLK9V",
  "key9": "2rjmfGxtqstxQsd95doHeyFchntrhiUhQdn7koDn3yAGhbif3tdDJqY39B7dkhAArPLVHucD3NhtmUMy6wQ6wfnC",
  "key10": "3MYch32sKSrgfNj1b6aNiYiLArtmtirmQ1wDAUANhv5tPQ6eYEPjMTZGQmKgFxsY2XsDLQxeLroqXbTMy5owJqX3",
  "key11": "4bfcGCQVVvNBozoPbDsmzZmLiPHSjUpKsx1sR6TAP8Tpnf6DEb3YoEQpHLh6HagymbZvmZTdwKRyhfg1q9XufS6Y",
  "key12": "4MGNXUbLtXaoCktnk82LWp8VSAKQd9vFpcXTENeT3TrhZCZnmozzhcye8fTE22ojcdtCkEQ7iH1P37yHRVf9Nr2f",
  "key13": "26fnUJZw5pkdsMxTz5dQgGhE5aLgjVV8S7NVHfzXMtmsPvn5BuXDKKzZMCir6Zv6YvjyPdt381gWveNSghdLqoWb",
  "key14": "KDxepYozeFFnMAMyLcZQmfG3pNDVsTf4Vdsu2kM9gW8mLCLXj2xZz5cMUHSEaXycC2x65Kg7AFwGddBmX8unYuY",
  "key15": "3w28uQAz2i6XXEgxyNnMeD1MuskVRE4eQF7JwJRG9S3zWvKxw8HPPKC1oQn9r8CxcCiFGAJAtCuZRtGM7UD1nm1U",
  "key16": "2HaRqNxvbRCN6kxJiaLoPXtrizrNMjaHYYh1pgoBZuHt3Lnrz1o8yaahzPyv1sx1JPU1h7f1m8QD3mNdYAY7mZK7",
  "key17": "yYMeYxbRfVWthneS41P75sTWvkzxgft5WuWXAPUJ8dRwG8hkbcf39dcq949PWpbo2cjd4td7JY1TKEt5YZVmrRS",
  "key18": "3AYFcRAmtVPiRgMdvJJ9zzHaYxkAvM1DZBWwdsj1UvwUVsDzR6zg2nK6QmANxgEPPQZbFhrkybDJ7aM59ajgXD3h",
  "key19": "3oJDoUCpChhtqEFGsyicMsxwcvQShfGPFF6NuWoeq5GN2UvsdAz5pvhsgMWBFzsSF8o6nSuENmCfGP55SVeoqn9r",
  "key20": "9MgE7HQjdaQARvqWvUtw7hEHKa9ctHZxWA1GmVQPF7NVDn5ZYewDSxvUMPZ9uyGKb3g2nfFqg6DRdgm1LMvfNAC",
  "key21": "2uK2PVnstdwmfo3nxcJgj6posoYpwiyJNcJnoK3pJP7NdmNY7mZdkpzzoPAqHFYcKSKuKp65zBxsneSgVwEcJxSA",
  "key22": "3VuGG1suDURG4EWn6WVosKRoYmgsX4NCppYZFNfkQ7zg7u48VVLT93t3XBT5SZ45Gd5ExrM84dddpMAGq3fuSJKx",
  "key23": "soe6QdiiPobtQdeg11g9owbkZvBcNapYfdxATAPCUAVqAL1YXYZfEGU7fJ6iQkdxcwYz2LVg4TFJThC3TLxM2Uz",
  "key24": "67PRc634cVEpwBzirhgBBzadCtirFk92iVQQ1DCJeZpDbNoKWJYMwhQSoeRRmTT8MB28rxke17Y2ZySM6YXyoPxB",
  "key25": "2y5xasdnbmsPV4wm1PK6P1eRYcbspvK4JdLXtGo9rxepo8PF5aNcyzFXMHteA1bCSkyPhBCZ1nh6PsiFdzBvYzbs",
  "key26": "3qpBbG5Eisuzoz1WXZD8BhG2eNC8kkuqBo9ZKXa1MZX5snS8aD1vzpUPHEnys95CGJ8zECNuS4gTFat5RPushYSt",
  "key27": "64tiFs2eivxhJZ7i3ziXutWr2urHo48EvxAgn5uGVs3Z295dxDH7XKUqWbVzNtG6McYMeZYdSKcTBuZe2j4AGNis",
  "key28": "rfVST16k3SjHz8B5968H2DTxMYcuauFJYYY9gyvmQsWZX3VSr5VoscuuCu6GUCNmnQj1Ya6oULUk6B19SDXVPxY",
  "key29": "2UkCkYFPqTVLvkRw1VAu2ZwYx5JSVfvdzxVs7ud5XxTSaHeyr8gH4fNEfzgaVTpqXZpgTcMDELYU4emiKXC6PF7p",
  "key30": "3UkKDLPPVgNyeAiJRMxLwdKuv6hZD142vEJgWdiyqujgjQYH6K5jLTaiZqp8zhCvqFoW1x8kunZkF4QAb8RYEANb",
  "key31": "oVxrt4TNcAnWuffX4uJM12xdpk1x6mBR1ifNFdW4cor565rHiAQUv6DstwxjF564Ny9bYwGdp8tVevoSTbqLHqz",
  "key32": "4JKygDDKMZumjiDwRPGxZmiqJSXd1eCtezJZyDXRWZVte3SkZG9isU3crHwa19xm9cFzaNQNjyVRDDHSbH3Mdnvb",
  "key33": "3HkqaaaVuudgrcYX5WHnvoU7fZTGyqhfeqMZr5jPZNHT7JVYJpb8hKH2CkVgdeEGb4aqFyZqnwB5dq4WQiS42xVp",
  "key34": "4mi1m4DNJ37ruDUg2JMPQcbAQ2h2WWKhpWovnVMveUfmGv2ENRU7DMd9ZFMjRpLN4Wwbq1Hfw959cwgDJ5P1gFno",
  "key35": "42WyFkD5woMNZDiej1UjNnbKFxcVh47N3ZZWBZq9vd4gQGjA4naNbEtBE5rML1VoPhVkA16oUyCpUMdSbch7jHWL",
  "key36": "4b6s5E5PMs48dQ98LFWWbXdvJSgMxYW1oyvvetcuuEgy6fHk8pwfvbp5GMkbBGkhrB5KFwYhhHDwbpsDBox3aHHN",
  "key37": "3fPjZXAexE6FebmVMY9SKvB9kmmUrsVLoofbPTkN5yX9FA7YP9ocCCJSrYxZ1mJQf9JQM5i7PhZpWPe6X7WnNZLx",
  "key38": "a4rm93CRn3C78zJYx35FFtjXovobiTd38pSQcjEY9PARfk6q4yZYwRV77uSdjLJ8E9iByJxaGmmp4gdz6FNmRGJ"
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
