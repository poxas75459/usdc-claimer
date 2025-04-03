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
    "5sUyx2S3spzYADFKdE1uQNozwMG6GxTj97rL86LSGgDaW8C5ceLfRbQVeeyTL1qL42j1314NX4W5zsn3JedAerxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VG7XBFkcPqsgiDDuyf294Xnscc1wqtC6D3y4jvwKJ35QTFFiZXNDuwjwjEbUtyfLaZzFH42tcKo3n7XU3mNGDQr",
  "key1": "2VgkHVyxAdzM2b6SQv1Pw4Z7XRAncKHsA2o27nrf3V13A6rkmTZdWmNxZfHoRVFtRUEhqS6ZgLAqAezXhBhGW8kd",
  "key2": "4YznYoWeZZF9seTFnNcdnwW87zZQBuh19GbsurJ4NKrr6d4WYEegH1JFfQfQbWpWLG3ZjFuM4VZs1eYYhmBDsck9",
  "key3": "1zK1UBxF6ZQ7aJBD6MDMTkohLsfZYgc8DvrnVoqpP83Vs9NgrAbZArWwRs9H5XheS15fUP7jSofVXWFkFksbE92",
  "key4": "3mmCTPAUDTuFAM1KruQRDYtvzD5oYC7fvg5AexGXmRSJdtNjQGqoJNyFAAx2QaEZMCkdMAdmXmCxRXD3urNw7SSt",
  "key5": "33bZrnTEo2GNQrtbKB2zdzrEoweCGTsS3XAyxXVbdoqNB9Xkb8YUJDDJD5JnAEa5FrFz8nKQbkQ4Ki6xnYvurK9m",
  "key6": "2bUTqNMVM4btYfJ1kQov2PuxF2sczMCh17WEkhqkDwwBXio71BoAhGcX7YKrzpBzYSbNQ8RASsQA663yy922pn8W",
  "key7": "29C4qZow34G3g3aP6yAN3y7KEZQknq42hFUpWnJ1ewzqm3QARLCBhNw7V7HPpr89ijbSQFbvExVbiShDhzP8uLia",
  "key8": "3rtVDASww8qZSrvkKUGoAhKKiX7Gy46FSNW2sEzMUFgfnPHhB4cU7X1Dk3Dwavv3WogPzyzmS9PvK6qXcCvFdbPF",
  "key9": "4nKM9KxDKHZAB4nnfvTAGbLAHDw1kS6X8oWKBnjtG7MZHsaUz96y6CCZoBgTbfE4C3xL7vpTqxzTqsksyobzXvfT",
  "key10": "3LWvoKbsYmg4ii3qD2jJ3vTDacMD57fiXxWc1iPhF6a8CaJ2bU6n6eJpYsCKLjBz4gZXNBNpqaSkfu3obT8cvycy",
  "key11": "2xnfbb2cdRk5Bu1iVbEWvJdRni9PTH6RhEH8DkkUSSuKzBqox6YT7yprj2jF4GXm9cFdy3XHJSMNXxJDiTDpmYC6",
  "key12": "2YyYryiLxdfy4n9UksQMXauSSPWyZGWFtNqEQdpyk7hXxxzhF7s68x9JYyBnNM9mLkaS3ZrGm4fhBwRY4SagvPBW",
  "key13": "5cs9353DqnEBdu4ijEAe7YgMfsxBMN8BqwGz1KYrsC7X75hKMtEzinCWY7HKr9AuVdvJDrbJdoFeU1bpEn3JcBzX",
  "key14": "22xf44i5h7gXPu1JSGmQUcZb61PKuDrgsijZH5tPVEuNh1AD4YgNfAaN9wS6ZwQZeYvR2FBVW1LmqCwaibP8LdnU",
  "key15": "2i4orA5LNgqqDrZjF2iSZX44xowTA5nWH8XXbK2riKK9m1Y2qJ88xRL537h5YGXCHUe2sY9iQjyHnpSbu7UhrgUu",
  "key16": "65Bb1FSRN7QV9rMwa8di9bnP559a5HeVqzj8LHh8SzpLSUgX5rm3sYKTFfGDUDehX1MuAU74Ld9gTe4tv7Ttabn6",
  "key17": "3eMmfuN444b2gT5AVxw5F5mwWiSzNEXctXCmxdEkWZBEbVRYDvMxKFLRtk6cQwVkxPsYAGQ1z7PAkyzRSbDSXgLb",
  "key18": "2G3LendzxLgWBjUqDTinRju9YyPMg8VUX9tS26jdAe2pJnh9E2cDznmk3zyTiQTesZW9RgB6MvCkpsFtMQxs9Mi9",
  "key19": "3isyEf5G9anva8JiqwZQvV9jGVEeWhPxk3KBbgZmD4nBG7cYp61Yy15AKwVrihrBq7aubuPXu3XeEG875cRXd1og",
  "key20": "31fH29iQyCQDZhgXVsBxvzqSGp4Ao2FoTjY3GvM9KSdG22YyXSGK2uHHxzLTHVgvq4t96YxnmqwzxjDJKUbaCSzT",
  "key21": "mwCWEwHRrSPcGp4WxjkosXk4tRydkewwEtn5p7BXXjKTHVsAeFUXc9Gd8thFHHrQeJcgHy3WT1rDjHF8HiWFnCV",
  "key22": "QPAB1rmvhgLGGn7sndzhQU2jq5vxrKK8fP19N6To7tmuntgvmVGQ58rmMzQKXh3FLMjVt32aME67hza8Da7QpNS",
  "key23": "2hMPbecwQDrDmBgq2tAsZbfStLfmZwNtJHrbr8EPiyUfvipoPaDabLh6wzw9MfpXMamvF7c4rkUXNFKqKw5sJUPN",
  "key24": "bhF4NZVwZu3nZQPxfe56WafytJv9HRMdk3xj7F5XaDKmMiYeignMNaPJj1TYhd6vjCjupQ9J7cbSv1saQqHxyZY",
  "key25": "2eNkPCVBeb6M2EEMTEip5jBdHx4yCJU1voWtJQWXNPr7zLv7ZyDzq4zdxn81QZvZ3LZL9MCAfCn3gCHfp83jkcqf",
  "key26": "5m8omCmrkoUFXQdTJGe6hXqkcei5KWiPX4pTQg1PobVaDdaZz9Dd9SwM2cLrrPX1T1fTiMSEnMgcjengmPC9b3PK",
  "key27": "4v17y1F8Z874MnGLdMWVH6DotiogYJ6WHdXV1rVKJtJmZ1FsAsqbf8359GPdvYmL1BAsHL634wxRfU9Gg7XWkp7a",
  "key28": "48hcrjL4M8UETZFkcyimHraRH92fyvao8Ex3zjtnbQCnyvAFMvC7n9Q6ABo6jrVm2UmVaSiaafv4FYGJftu9gbvq",
  "key29": "3gs7KwGrYMZifpok3rpSoV4w2qq638xdGj1GAdZYQGcApZ99VSKgx4v8b98HkBhCheikBz4BhfCqurzEgzMUSsQP",
  "key30": "2CDsTu6yzRKkPeDbo3q9p6NmhbBH98tmUqGobaxNmsrwG4nghAZXeLiPSUApMdWCQ6DQpU6JdRBZ2PCYiE7ahnXV",
  "key31": "428kDbzyqf7dWgxZ3eLC4ftM1PC4PmoA3YvNrCZbszFTb8LncJZ1evytV7d3EbBipzRioDfZKgmnukxdCPGJtHm3",
  "key32": "5PRTa64Qa7G1grY4qMeKRGXQf2cgC2pgPjckoTcXjEjCUnW671xQZ3ynZUoicZKb3U44sMPRM1eqUoWbdYJbhotE",
  "key33": "91pXw1TQSNGcgQxrgWk6DQzYkbtqxKvZgLrhwW7NxbYtu3XdiqrvSXF2aEHLBD3YQbUTzxa3yPe1ethZGwKWRAA",
  "key34": "fFKaajmTG6h5dBWxWxQBouW5Q8QM6sTx1uNAeSt7cu4sbDfP3k37nYz9JzrpUpboe1mkkB12BqgnDpxSyPJJaw8",
  "key35": "E1R1APUqiJ7ncsqkhxG4DosU6FppR9RQ5MHoZwmHLAZEMasWdkDciXRfaLgzQAVmWnb8k8TYZZc98s3NnrQeqNA",
  "key36": "4N6UstmwFm66eJzXGMUrNbRMzbaJz2cPK7RMGsqHCHKJVDQESYwFLZmHVKsK8CaTwUZDRfeAaiQ4trqTXsu3NMbV"
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
