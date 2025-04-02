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
    "5FYEEqRbNRWrRvUqnEePMBCnu1BwEN44o7X1jHgpsF9xYUUKQmirp7sj9J4xWStfZKgsKGUj5CTjYbgQLeoosbGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CdXWu6nnyAXLXuRjfqeNcAVFBGsuZPKcJChWwwEdmhqdCRZEgpA9gC1MD7JU5LuQyX7VY79SU58hUsYZr5aYpH4",
  "key1": "3S4mPYnxM6248pyDpj4SZNcQBheFnCT5BRn3tqyGJWzufxyh5U2zHasgkyFaRxRgMa2UgsK7HzhmbBh9Lbcdwpuo",
  "key2": "KNFv9fQwKdKfYrp2E823nFgkXTodFBToCeCEvcEa3AVsKXBWJ8sTxAtnVqhQXWnDLhH5F8F8YaH5aSUwzKdTnPK",
  "key3": "NRkhj6nwqy3NZ1GVde8gBy68JEuZ4fUGNUmekZuUyHjNJRbSy648NNjksuR7XsY5SLmoSGc6VTNfh6ZbF84gXSV",
  "key4": "5xNraZnpEpNDvtukW8fTuRCKagnSMPmBMD92xbkYxsVFv14sof5MqZJPgawH7TuMMFZm5Sx34R9Pnh3QfUr1wzDH",
  "key5": "2o9rVfEtTZkfDEezrL2Em7rqsR4awNrqd41ZDYK7UDeJrYUScmhwPzdgWQrHBsCg2ZhmjbkffnurocAvFK2mTCoX",
  "key6": "5uiQ16Y4fUgEFzyhtm8qkW2xyKRMcRurpPRKvj1FdAQvSMGwx2isq7M8KBivki2jUCxyd2GyoMqsqAdUUxd1Csx",
  "key7": "5kdvqNfYgM1DC9XUch9vGiqEtzQJqT8Q3fnxRmdWqynXwXjbAk6PfuyuSjX9b46u2TBV9gokutDrzh47sBCFVSbb",
  "key8": "4XJwejH9THzg3sn7vQr7WHCNyY8Y9gd823LFnfEK76EgvP84e5xhDLzc64i95LGFZVW1rCFXmUoMSwmpsnGeNugR",
  "key9": "3U7C9PnTr88rRGkCKo72bqfo86DpzawUM5gZvtbvMiKmrjf4VykraYDhokhuUvH6Lr3dyYLwo2KVw2GTn3bbVj5K",
  "key10": "EqjgwE135acvedrxdmuQsDFY82kWL9xWR4LKEu75QWXUyXF1NKcLMYxK4fxQcJcAsNSg1vohMs12DARWMNGuc8j",
  "key11": "3zP4pCRd6rkN8rJ5bCmdsxb3ni8kQkMWgdDD2iemEGer2XhLsjFRNnsrT4XUxFSxvQVDq8XEgvLStTQetXDsCEJ8",
  "key12": "5MABsaZUnX8PGRU7LUcD16eBqTXKy7w3L4UysQHxB3N3LVE8YECTFFXistFGWneLF8aHAdv37wkgZAoutBwcBg6H",
  "key13": "66pwTGstGd2o4YRfAA9VoQhztvvmTyrA2j3aCPW9443xqYqevFQ4FA1FvUmn9GPnRgkQo8iyoGAG1bD8hSCizwq",
  "key14": "55FUuBsZiGSs23DZYF5Bi4z2vckxYkC7yWJ6xNd6Pxqq1CpjFpyCWoUqs8xFDf9FgnfJrwGzYvbJs2Z8kPCMYgrG",
  "key15": "4joeD3jkeiXT8h2rQknxJvQMkoADhrR1Mfn7qyXBS93P2rAC9Hzbo5WcHbFS9mCRMdBZtf3XZK8nuA9TF1WksG75",
  "key16": "TEdE85WEPDRD45jE2CzdMCqLGXSKmrLQnGZ2mvvgNazD4CE46Uo95WxjfRKdNPSMJtYa3rMdUgWGg2wFt9QJ88m",
  "key17": "2FArGo7VTWk2r5tYUTB8JiEfPNHQyArxSAHgKjtjiqaA1PUp7HU3Mw3Y8wpTkUt87HsYCQ4Zrj7kk7LjQWALebb3",
  "key18": "48N5oJ12TiD5pFjcgYfmZLnGchvi6zZMtt8RPpLRSXGwjGNRFwSHXqafjdPsJ3mRHVdLRYmBoXvuZmLjWtuDt5YB",
  "key19": "WH4thnhJdp4dpgfQdfMYgUxvbXypa1fGo8qvDJobKGDoVkU5QsXrDdhy6SJfDY5HKqTSri4nJvbagdAouAxkgCm",
  "key20": "xQf1JtGHBHAj1ZtUEzWZMuHXhJ2CAkZRjaGCTRJCK6rqphLuzo3qd2fA41Db1eBx2kCNCReawShSRsoFHwLVjau",
  "key21": "2fPfo5Bw1nbPMma8q5atdVyr57bfGMZqR8XMGsKsqUA7HdJpx9KrdMmHZj32e1DYicgwgNxvFENUdPyH4ZNsZvhy",
  "key22": "5vwG2gX4hV2v9YUyS78KL9XruEptnEKzZH5C5rw1yv2itUGVo7nC9xVtQ69mKyQ5gKQeDNY7hSwtJ1UmbYdv3mYD",
  "key23": "2UWeV35Ss5Rc8WNRyNHnhRogmWexto7zWhN3YWXz9oVjMBKkVS5EFL7L9e7RTcCNkkdXoGzAPM6ZDhXMU98ohsTZ",
  "key24": "3pvAnQKve2ygXLaDYijXeYaGjSc9STNe45Bw6vNWL6CkySGbCBF9fvJLxfkQyYDMucm4kebhen9rYfZuKT8dSjwp",
  "key25": "k9fJYv7PdA5eihGeLsaAXc2aMYebnayFLT22AaMqiF5hnunHdURfyqucRHjkCgj5EeUFLJBNWp7Z4G46TgdCXiz",
  "key26": "3KejAz3tx13Xw7wfwFLtAKhPimk2A9F5jw15xAYnv6smnZYmPm1CN94AFuzoEbGnJrDCK6GefPvUYeHgY23oePT2",
  "key27": "3ChZ2rA1WF5BaYyxGeUc2APXX4pN9GSirGcHNoYwToif973t5L9oPWRD8sUjXcoZogM726w9a6WmPwQuhgwdMxr7",
  "key28": "4Hc7djeghvkpzEyHX9oBF9gZoSX4H84EydYGgKoJU6Gkuirc5cx3Mx4mMLvBzpr7PLzJGcEmzEMt3o1qwS9egutE",
  "key29": "2QKCjjFEyom382avzQbd9BZzYEYoxTRvmjVdNpc5Q2gYmhXXejPWaijUhi4KL4eaZ7yaYz8tpCyxq7LJrhXcxTsk",
  "key30": "MJui9RTH9j98wzmKdxkvbcKxLRj2vjNCZrLTKAqXX7DfLxN7J7QJ9rep1AiizdrvcVbWZ3Ycymvi27uxCZMEtsG",
  "key31": "31djyKtY7fuh3gGvNU25HLd1nvQXtEDh8qu9KUekhBLzWPKfPWxvhD3atDpATSGdEHc2eZ1wUjYFtK3Kcnmd6VTP",
  "key32": "3v9zV54HY7EVBFqfAZCPpqbXmseUenDHRcQEWZ9wYEqSQ9TwY7RPvWpngHuXpL14zPesyhFYj9tEF3VuB62sv2Pd",
  "key33": "4NdDXXjGiNAowrEVH8Swo1STRkqJpGouQbQuUowtyjWv2UQ5mx34iqUtbQUcX6W58avAJ1FPtEPurYWvBTWjm6GD",
  "key34": "2sborDicSKmxVhzszJajQ44e6xAeDe9VQqgVPRmR5kM5yi6HPv8NBnHPpok87LnwTwVpR6cbj2NGKKLpRdtf1TQR",
  "key35": "4FmYpvBYzEeDhgacJ1vHNQTRx1nM7V2dbwc6u2N65yR1tWF2HYgY7KSAfV9jLKXSHkKb666Ff6gCoFRQvoTp5ezv",
  "key36": "25FH6bXcgYeGofcTMd5AYA7oidgjdMRP5Fg22pGoDPMb8kZTuESbcd82C8pfL6DpAT4wJ4tSzvEctxsHMuF2vvBL",
  "key37": "34GRMvZuHnDncfsAiTBQwoQjMkNc39FJ2tHg2AD39GmxV5nmpPDyDeJR3VfQmzvDzriH2At87Qd2CMTEUCBaX67S",
  "key38": "2fzzcGRZAbcDERKijw8x9pMnzppuuvJ7Rp116dgBJg8ktxNqjQaMPqPRfXoh7B3HuU3NEQLUqxGq2fEsTUMczRKB",
  "key39": "3GK2qsKkzJ1qpwQoAzexpR8q6SBfWvYnZrhAJKCndeDkjsnJdqRjRn14Zz5qKc22xNT9P535kBFTZ4KjT3hybyVo",
  "key40": "5XZ21o9oAr5fmdMgUQQVd98d9dY9MzdTeRspwvWwJxvUihG8TdzF1LxAoDEQiRh7oKCFCnv9PMZEjRHMxXQdd7Aw",
  "key41": "KfryQyhLwkWJQ2HJp2rtmG2rLBxBBHpCFb2skBbLwZPcH9MdYpbG1zF61hNJnSnHE75oC5FNaLvaBPZNFiMyuL1",
  "key42": "3dQKLvMVT2enx5PrRMpiBsLUKKpKRFAGFvNy4N7LVyK4f2kYW1CdS9VXQ8w3UfnkRu6cGGPoMEEGioFtqdXoU4pn",
  "key43": "56bqzaTzymToKwK2w7MummWAieHAH3TCPxeXqvz91imyxDxqau2gP1v3fuKydts7qzebtVVhP2vjB7qcL2CJzo8P"
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
