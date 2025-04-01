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
    "Khf5572yS7sXx3bV6BvE3CMvthKTNHN5nhiXzEuhNTKG2m9rHufERjqYQhwknZyWfnrD52f1NpE1q1oPQzEySt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZDxF97HjyNKaGuMkEjZerqsst5TMfFRurgyXG3CUywqMFK9S69u4beMk77YKJNqSVhQ47yokRvTt3WKJhbMHGz",
  "key1": "5CpJcFf2UpMcSgws42kgebpuZo3piBCULeoJ8aPvQJw7bDjZyVQzkmjPjnUCGkwLzGepdSndNkz2vNSF6oRH6odx",
  "key2": "2DbZ2ixfLyELPm5vakSUCMkLdRiY6N5yV92LWUvqFB4t8keMwXvTt3TTcX29T6wvKmeeeiivH4V28PvPXJgXZ9Uq",
  "key3": "5Rb4mHdpTDhgSUfbNoygGNnkQwsVfgBpJYePf5vs1kfjQt4fTETbfYKvvGd9odnbajVR5RsGGYsvcKftx92wyfZw",
  "key4": "2bZrdeQ2wVfrZLmpQigaYPGTvvuP67YrSSUbxMJ8UTqpKqSXWDisjoaUK7nFWgK94xMHV8phTEV3r71xCFKghhsX",
  "key5": "571ZZufFkgNpies6D64dXs8Je1w8uKXVEfgNfAuUrUmFhaG1DkQrk4e7EWaosPoE4Nang3VvJRepnVahDoNASUso",
  "key6": "2SaF1KU57YrAKCVdc3A8mfUrWq9rcgJnjCbRipAgqQh4s1qnZuHwstwa8Qv9HDUfESVVVDQzxpfJJkHd6XdPHz23",
  "key7": "4wxt5o97DfucnPRxLiBw2q9NCS6X7wvUg34ijgrmrZXNXhrZGtGBjZRh3L8r7QVyGFr3vzWyKe3o4C7rGGHE393t",
  "key8": "5VPQ5wNcfTJw19i4QN91wgiNFFxQJkgrR1QwYpADdJt5s1ZKexQtrAcx7m8a2dE2cjsz5fQbNg1jHwnRxLePF2a5",
  "key9": "4P1MGusuuaDtPzFhPv8pYW8KnEkcsu8eXSw567a59RKWXUq9onYEFZemXbYraVeVTXEfy1HNdQrA8NXMTBTPDka3",
  "key10": "3rhA4vYCzw23zGjUFQzfHhK6WoWVS5T2tXhuwn2zjWRiA7iEprcznkp5NahYzYKN7UbDhacefwPgU6zUHTfgcois",
  "key11": "2ThPsrrAeW2d9tGwG4FnPcYQCFh6M8UMVB4SDVganvevuS2LkCfm37HZnQeLRytnHhvKwLTBVJzLkTSVhkqukvh4",
  "key12": "25gFJrGtRGQGQFCxVrZ4fq8bWQFvYugrFhHgjzo2Hu8ixGgVGBLbAgPLPcfZtufrLzz8xkFw1X9hDZqRjYoexKep",
  "key13": "29ktjmWGvusEkynNqYUHvqmkZRinq8g5PzvoAovbVgUyW4DgsM7GbMgDy8VgzvVaVuAXppoCLNWbMPNaBPZX9qxz",
  "key14": "5UyZ8kXMA3NbrJveACbPGhmQ1WH8PA5jykK211L2KdbKH1MA1xnjQMhwRRAEw7RS8V6iN9uMHTgnUYCigeRvB2Bs",
  "key15": "3jb7MAVTztghnsms6AKoxPqjb2RJ4au9WZygaB8ojNzXkjRcpfHyjEeFtzm1g7RMUQ7d1UqK4QjpUT7PCGu93dzC",
  "key16": "KZ8dPFx4yRfydcopdj1PWSfU6qfVHB3rZh8knp4MRmu787sQ8EN8yDLho58mpRoDGzeCZHMD3T2RekgK9y6rcTK",
  "key17": "F3gVDfjtBQFveXbjvg25VwbgKjLK4wuykH6UiR5JDHHJyJHX2r8zdrh1BxBTzguuD2u4iZzEEEcTn1apmuj7kUK",
  "key18": "SAtjTaSPZhcu2Jf6aA5kivT1uPqKDUVPsLyfbEh6hcYe2i957LeuD4mBZff4r3p4nikGZrvJJm7ZiatMTmBkH9a",
  "key19": "5pQ298muSna36w6UyeFdMVp17Y8isBMgJ14iiZAtstec8xo8roy4y5HpEfeGhLfk8wCLf5kX3CoztPgqkvFviAUN",
  "key20": "3ZPzszug45kj3TaoAaFj3TtfxVgjHk1o6uecHKSK9JmnRhHHhTt6aMwYua8zLLRjtaTYzRwP5q1Q7K6eqvcGiGa",
  "key21": "59TsAD8X9UDgitcANfCD6v4edHGD49g8TqVWnm314EyU7GniX9NAVeVSu9JLzgGZM89ZH7sQtZ4VA1d8p16eYk8G",
  "key22": "rJN8tsRPZ5NBV6gyRTiHBNTBDkrJ7kJYitG78wJfzgGh8U54CFCoEpQF5UK44CCLQrKa17pWBDbA2ptwNPLtoPZ",
  "key23": "3AnF5rmDvf2bvA31DpoBLaF5Fbs4y2nP267JRJP7iiwvcqgphECdx5CprYu7K71vFbebp8REX4qRpXBKtK7omfwM",
  "key24": "2HQ7yfkBVUaugDHfErmD1UqM73nFe9yMhWN46wACg3CHgsNTJLUQiPaNCumPZDYFSjCA17Xs4iyymTnZLg8aYkZh",
  "key25": "2Z3gr35mMYi1ge8vXtATU4pktXZPCNur6QCyhCqjZnpYZ1StEJQq75d2Lr8EJB3BKoHq7YdVE8DzX7Te5dGVgQKE",
  "key26": "5q5uWmYgjc5DXu6Vna8tQ81qhtFJPRBmDFxdVDb3mwvZktPAgpT2evwWJbGY5V5U2UQ8KZLiuba5ECgbEV1fFVyh",
  "key27": "5vsAuqUhrLnEtVZakJXcDXucr1VhpdwCr8NkzPyduK5qkuQPBYNDiSZwpnc1ysuXurXSQ9ay6ZTecPf8rXbo1vYB",
  "key28": "4seiDPykQdAwXFt1zTqVE2LD9H4gWmjsPeDCraRRjrw8jQVV8QZdzgLVebT3fDPsJEcYBQ23obTxFwiSnUNpvJ1G",
  "key29": "3BkVqQgFFJg7whroHJV5ZCgVVrR4eTCg5ohH1MNmSWs3QKmvbR8PLKgwWhmKi4BoN9Vc5UtNd1MnZRMhqbqMHkVn",
  "key30": "3AogmwysV9hvkQymkHp2CaSW4rscyPWkkdtntDKt3KAzw69BY8gMagUR5dPtcERmAwyusw1jkJTPL1Lm32CgJAYS",
  "key31": "22UNBs5YP6oykNL1P7cKQLANtfq8GV2aiq3ukLg87ThMcL9SQLV8u4hrB2tVvrthcvRqTERJtiFVspoYPaancApc",
  "key32": "5uN2woW3iTVqc8XGVVxdhKrWr1SkkLMKRCEZxnNcGeggBKnP6o5BdYojdu2ijLidnRaAFutcFjL2TdAnQprmFsVL",
  "key33": "58rJYy5RnqxhxXsWmwQze5JtvMAQEYYgqyRksB3zoUbCYwJNDCNj3qLJeMaVvhsN2iHs7z4FDdarShtPa3oEZhYV",
  "key34": "4FYax7b6YSFf4vkwss2wjicoJPfjGzwgzhsshnLyygPcfS6fMpgwgQx7q7iFb5EJHQxiDQHaBC9DS494zhpsXju7",
  "key35": "N9mo5d5dMHvwETGNMk5oGLRdTaazDVX1n3CKS4qT1Q3LTg4ArmmgrSHdSMukAonMfHdFnKmEhnv1ajkJL2Vqm4U",
  "key36": "2Sba6xb6hUP6GXgrQ2PpFpxjC7qsA3kuWox1kyJK7qzfQVZus6PUBfv9SsRgg1A1HSiNXx9CmRWqb3qHEktM3RRG",
  "key37": "3MaNnJSBC9t1usy2CwGLhKTDb76xea9KRDwSvcCppncx5QHPfBxP7ayQJTi71jV9gPHnSjUo9MkJXGgXG7ugr7hB",
  "key38": "34QdwPUWEuuhHSr2ZLHCuvubJL2sxnK5Z8ZKXp5av6m1VooptfPayc1k9V7DByphi5QsxUZECWfKUvqvqkN9xxFt",
  "key39": "67cEqivhbyq6dttAVM1G5tmR3NE6xegnND43L8FB7YJ43CHALPH94zpjoNcYr1puTYjFKKXj3dPebG7A6CNdshWQ",
  "key40": "5CHrtHifKgasHqKeH8A9NX7LwDcpZX2ZwNpU9R1vUQuugEbHRr3mtRKModyNP69J1tXhT94dUXMX9YJxPjAFfgxH",
  "key41": "65XtA4MRRGhGRe5S96RPMeiVnXcUYT1ApPLKeJmCgD8Ph87SyuiidmzGAVB1A9mrMy3hdewqrpJfEck8ciiZvQQF",
  "key42": "2CpVFQ9YescQzcjJw9o16QFB93ac4fhcw1ismgZ98MYrrXwHBRFLXMSK5AH2uCjYQ4jmyuQK4RUKnDfKC3uPh3wC"
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
