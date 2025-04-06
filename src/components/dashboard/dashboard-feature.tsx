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
    "2BRg8ZMD64JjJ8bBoM1byCFsNqCnR9PFR2FQsddmgoKo147KhCA5BXfpBVAjBvprEwQShwSqrYUXfQJ5maecTXAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48huTe52JVXATAB6vFspuF4ETvLaMVMTRtKFLg7EEFhqyhFaAtMz4ZnTZTx7rx5c5xmHPW12wbh1jyCj2T382sa9",
  "key1": "54v7cv6sDH41A6rcS64frKwNfcbKdtj9o51td53UzgeTMPe48cA5voHD4TYXugak6QnaWLr6ZSjbdPfYrrzivzX7",
  "key2": "2bAYyXjdirfCVTF2QRSAmPgYW4awygxJmvCxVpiSNGraDbhG94QjHZMZjbtqVZAs4nXBuNvsYfHpmqZZHvH6FBAk",
  "key3": "4SW6TxcDDVPa1V8a8Tp9zpN7KHGAo4u7PeK2AnPysHk4gyMtr3UXX8HiRpUSSnNr1ZzPM7FdUaJ9rAtjn5a1Uxyw",
  "key4": "2acitNYCXioupWepj15DtuLbDJmeGwoAYaMzvy3vGrN9X1KSEPT9A7gMZvx4Btm3LfsJWAJt43pR4DL9XUjEmEF9",
  "key5": "4fdRpSWC1ZdMqe1wzxNaHDiWzG1oYxHm58uBUm6mkKxQPi4isCRJ3W3gzXrhP5YrufUm1hrUpumbqy7yHhTavyCX",
  "key6": "2JwY75mUzcgbwhF7EKGFL8oym1Sa7JT5ojnGKQkRUyDSuNhwdcf6YxGTrqppWG6R46uSMg2ixBSwx1DA1d8amkGy",
  "key7": "YtP4mPUj6qiFFkf2yXfc81a6D93UxzRg3k4wkosiR1aP9mLo6StRL9tQom18LrDiV4C5FMDKDR9bUgdgrLtYvhN",
  "key8": "n3Xon5TVcJMuZvXmT6w8Tiiqyc25Fr3PKXoTxvpuSUWCUN3yCNzPn4q3vagifCQz9oB9JRJ3NEho88zXKqQVKSU",
  "key9": "121mt55kzxPAbm86a3KuwgLw82JUseFWUhuYtwhZoWRuynjfDZmoohECM5qq4Azgt5nMWNxLPkANcmUKbFNm4mnF",
  "key10": "5YJjRJt9EBwbKZ32y6Go8e8NypUk94GWPzLw9zRj4JWa8ptDEGMbUmvnqf2V1fr33TjzEWxqMwSRNQZLPUa9ym5E",
  "key11": "2R12De6fHMDtN2yJKsPWa6JEN37fCAhv9miR6cohYt5VVZnFQZPTD924NLSZemDAsUNHVX1wwP4NeUoe6ATSwfz",
  "key12": "4kaKAoiwDaymMEe9ydSWFFvw2ENpfC8gTqUmrjhbosZ12gEtDDtDLQroAbHbNDgepoB1JXk1b6KaGBbM9bVX2M7c",
  "key13": "3eCNbvwqf5DLJTQGr2T2AnHAdeszJypqFhbFCVGdErGX2BgBYpXTCZ8Q6Kq3AWpkzYjKLXhMXnLwUwJk8L5jy3Aj",
  "key14": "2FwvbatH3TE3vfjnJu1YZYin4kAoNNZWB1rTNVKSB7Q5wDFVSSdbRHUq5BycR23SfLW6H8VQN93XdtijAMeBeqBt",
  "key15": "2AdqF3vP4RnZk7pwskXNnU9hpsJhf4jwVugzPqGgAteepWomAQuToQkkNRSy4QLtQ713DLs7oArZxg68r4gGFBfy",
  "key16": "qs5vg35uvBXxxtGx825bWnCDYGMBzCGGpyQBTUVVa8MYTkr7FTL4QhPQjtVuqCWpXdNFJDTrwMDRfcu7NjrTs66",
  "key17": "QqyWPfLGX2mJT9WBaMmihkKNikphVj1yXWjDLvyq7hw8Z4zUGJgXFDGtURWALxX61EMcVLcQFntr44mEjCRxcNx",
  "key18": "3zboiFSZtqKfu2UVgAbNGZkpdLzxwH1mQjLCWSDJzHCmEkjTTxQ2s17z2y9yThA8psbq6UD3Z5fwmYBZaa72jwX4",
  "key19": "3WNdn9uKZ3joSCaU2bXUKYn6NiLf1gC27iJ9iZqRJYXdYTnKN6UTSuZz4z159zEuQdppBko3h8CRKP4GvLGEahQU",
  "key20": "4EwMuhL8PGJ8fXNP5kk2akYs6gY799L9apgyajL6u5FwYZ2obHco8ezvfKnZUk5iQ9SXCuM9U7VDLQEeG6ZjYqh1",
  "key21": "qhE5KoT6u6zNfriVnAcn3G37zHq1M7ZwHgZ6Ttx3XtJ68K34NxncSSyNJs5juFxJpAGKbdoENkQ3uyn1UF2CuJW",
  "key22": "3GtU3qZmDkdjuFScJUwXV7mrBCXLPknpr3UmTdTPNvTc5pfRzT9hxKWeNmmuaUaQY57GUtfhTwcC4j47XkGYV9gu",
  "key23": "28gkWtbdNbB4bY7HFecfpqWTBvMCjF3zxffjRoRbPvxXGkwoBgXJXFkMMYxy5aBqw2mYGcstJ7TAXbM2NX2W6NFA",
  "key24": "4WX8fvSqzisXjvfY52uDhsSU5Aj6eDFsaP4y7NNuu5Bdk73JTQrH9ac57WChR3sTxiMcrwnJZ59URcFyKZ3W1B9L",
  "key25": "2wTR4t8UDbNnn1xpwyJZSoeErBgWzuudAMSSVxFEv6FgEGANTXHqyBYN7EVS2KBdt7Zgn1YSgvv717YHi8oS6FMQ",
  "key26": "27SF7pxY9Emx22a2tc8ameWiQ4F8ts4W1VmmWn5kAVZmuXtnP8YqED51UHGNVLbgBi3Y4dWMYVeQUbZ1ECWQBHc9",
  "key27": "2gaTEocRhuqAkrPtBWLqf1zKgapFsmr26YuZXrK4cHLcFc1govsyGWN65q1wNafWFHYR5okD8uwUXVsCuKWt96VS",
  "key28": "5jP7P96dXu8VrX8C5zXmvy1mSHdY8pZ6ZWyWZjHgyDTtNyTXZSDTnQh8B6hES1sn5AnnRGCVeq5RCuNwDLZ5iKgd",
  "key29": "K2FMMCppjx5JXjUPpVAzWDV1ETm1Ki6oWSU3nbu1w79SRQAoVkt8aodwoPw7Gv88DzLNRezxKwwXc6RYd6VSvUf",
  "key30": "26xyr6uRHgFFYPuANDMxUUyCVTkum3JTQYtGeeZRYLqQaoDNEHZ8TEziAaijDpmDBgRN3atgZYQjkqgAKYLokybm",
  "key31": "9K2J6M4Thu1bUjddrK6edExYRAVQbRALRNrWAftmsWWsH6kSpjqSuE3yV985mCtjdpm6Vm1ziG1huoWxoVcP9JK",
  "key32": "3FgctDrZg94W8U8oDEd59hHLeuPD9X1t3BFCy7nQVs5Az3tcjtsHp5c1JMTyDU7vgSyE2Ry6ah5j9c7jwBJESWQf",
  "key33": "298mJ1VF49LvWjZJsqZp7rWDRYAVm18GZeTQgLnK71tDLMi1FCTdfvnAZueJEurU6qFC3UuG1uKh34vRx56oQgoh",
  "key34": "3jXuzQPAJadzrtXqFYS19LNZNWyyUNFQdbP5hCyYmV5KPaufKmhekpGLHFvzm6RLfDwaxW72pKr5Wnv8SuBihqbu",
  "key35": "4TyBrvkGGeTB7AvDwWyNQf4zi4wkXFDYi3rNP3fTV55RBcYtLrFGd871b3wwRXGzsREHxncCDDZkVcub4rjbJE5b",
  "key36": "5zJbCQL6ySXBN927zTpfiETdT3TmJiqZ8fFjSZe2wvzAQwHWE5crG7HhgzEHt8YvJHiczJu9ds4oW8dxB1d27jUZ",
  "key37": "5rSaFFenXGPVHHLv1TPAdXPs2ngrxsyndtojH4wjt6dfLmxitZGJfy5e7xNuLX6zbqoSJXqexAo18D7s8NkPLhPY",
  "key38": "6bSDNgxPLT9bsUC3xD3KJDDb9phBHAgYyY2PeUtq2fK8Y5ptDCYogw1tJVAPuFuiNNZBuFXYY2SVvnfniiEaTHZ"
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
