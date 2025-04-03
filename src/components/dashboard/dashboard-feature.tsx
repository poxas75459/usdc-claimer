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
    "5w7n9SnJgc99h2e6ou9td1pVJ5qr4ZXvJ19nEaznhGAHMYQzQsLZEchy8XjG1FakbbEcA4gCEAFxDJVo52KRQi8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38SgR7bzBFtx4koFCqncb6JDSPZc6i824Xz1iW18ELWkA8r7pbZjNDaqGBL4yjZ83BFyuuS4FAFkPPdVz2ZdXevy",
  "key1": "4BCSrjD2CBiQAF8EFt8H93kizW61dVsrijAAuL3zc215M5xwbXZzd5euaVmqVSm4syWcHKo2eZCGrpCGsPa171dE",
  "key2": "5e3gYwa7fWM2gTwWuSPijdGgro9Byw4rNpF3BqtF4vDsmFoz2CUb6hhRcvp4M7ibRUShcCLHMnRwXimVzU7xJdct",
  "key3": "Dxy95HP4speWKj8HMmtKf9D9swZom6NhFAmNCApxphucF9UHwc3iUgHDjR4Jd78zaXXimvRrcyoetVCYxg6FERR",
  "key4": "3SGX4VG9GPmSNkie8sTtMuZcpNLxKPVbtb2n8LUxGajaTVUucTbANnzwUQZr5QX7CkHdPHEbo7p8x6mQ433G1afq",
  "key5": "BctSLEQsGktYDV3LnBCbmy3NHZuqgY6XwAWSSDvnC87WQkdKMwMHRXiSvP7si1nx1wpEvH5VYVTGuu8NdLj154j",
  "key6": "38bayixzVorVksRyrgnTLp9LrXHQiPyVd7STvtNx7XdWxWat3d3k2DSdrZd4bxSknKcnrqRZZgvTnHy5fsW4oheV",
  "key7": "2bf1VWTqZpZzXRANUZ4dbm5CmMLvrs958B1tWrYoJdedpwywku5BQ5tAG8BPHc3z3CTW3j28rdry5aaRPThTh9ya",
  "key8": "55McVuLeYAE2HjhKng1Q6eaFyMbtDwSVyJvwMsBYfpS9ibJANwRdrAtVebD2oTnAFHMHc9JzfTFVtCzq1Zh6hzoG",
  "key9": "Kf6JETU5YhqVJKrfHhyvSsmfhH8ATKevY3Xx3tzfnuTRp3WYqKWib93AFNkwntrReSKzb7ZtxsY1MQHuHwFPJ9q",
  "key10": "2W71Vwhbahv5TnsTKXQBoBuo5WoYWRWsKjJ9pE4kx8oKaXkhxqUZVruLd7TULhFETy8ytMc6Fshaa5NCqTUnZcak",
  "key11": "5FLjRi8gdzn1dsHnpmWrAHLTp3CPvbcPqZe8MU4aZasc94WNpjugcsHerBchm5peYu1fa9bNiTwyGeimw3iCnALe",
  "key12": "2Uo5JPrKyxVtozp9bu5EYZX6KAyQGeLJBdZgSdJoChvRxenf3nFvSE1aqFSBJwCnKRHpxmokqVwHx5EDYXZya3Nr",
  "key13": "3MvcP3ZG3NujKZ622k8KrFWqQnhMGaf7TY6wpgHjYT1VgsAjriCxH2TGY9aLDyrdR3UA5bJMXmAcGqac1b1vf3my",
  "key14": "2C3MYPuEzfGxkD9C1mKY35PySkr1iKBHEGaRu8JnYCeZhYn9EfoD78BkJVU89qBttGK8CVNcJ2Fm9EozuNTkDEpv",
  "key15": "2EDNvMnHeSsnoxei4iamxaTm49jHQuKKw3B4CAitLNviWDvfwb35r7vZR1QwrbHGJofmq64fQ5QH9brUJeivKpKq",
  "key16": "4hSTiC8GuhtLZS1LjfXAPmmiJjCwcWu1h4Ymq7j5DEcDK8nWrmqhgJHaPTTo2Q387DRY56RhuPYLFHDM1MPdQjzJ",
  "key17": "2VmL2XFMXJKhzMY1WampED8cafFvfg6atvcXMp4rf7jd9NtNyEs3rDSGKnPsVAXcae6teioBYjNm7nGv7aNHRnSN",
  "key18": "5tRdekkKp5oxaLmhSk6yivduQqbJUJsqP62Jr9fgGW8jdFnRBbse6w6h46RevUmxN7DJGLqmTNsQnoJFuWsnpJeY",
  "key19": "J2ZDaYMDP8xVqXcLRwZN7FdWW6hMGz69mgsizebwKALH9r81yKUzy4ABfg7gEw4W5DQszSwVSNW4mMLASvc138k",
  "key20": "4xDYJSmWMhwHEcGfNtzXuQJB4zutzJQh55fArJkjL6w9X7xfjdS2yLsbUcF6HwUSeM3rNRh7fd2tyNQjgh9tDe1o",
  "key21": "5jH93rZHgPiGAHiPbNAGHS4W3KHYd2DuuzGDYiP3DVRhfS6GwL86hK6o2a8F8vmg4UPdS2CqXGsnUJ4HEQhz1QV6",
  "key22": "4HLnRxM7EuAj49wVxsqS9CBsD8Xp9GjRW4eF9MyQi8Bw53T1dEmSGm53SuGijiHDPkffoq7mxczE9R41mZ7PHU3v",
  "key23": "27MdFsX8vY5EpLp3Gkkg1ptbkbGj3Srmfq45SY35gvt8QmJ4U5C8RuA2gp2qW3e5GHGnResCMsrMsZrgCbHmy977",
  "key24": "4EwA31QyX6tCdyNVfGddo1uxv2udAtLSz9ZX6V8ecLMzDrfDaa2vw3oJh2CdE62iSNRavcARPKdL73NcSmt1hpHC",
  "key25": "2dqPg7bsCvoaAK3sPAeXKyxpxvWcUx1p4jdaAbw4W7PKxfyy6xWmc4PmDqEd4Gd9xcFojXduu59npswFLrzRc9bX",
  "key26": "3GG1ianVmz1rPdneLoVh5bUeapaLKcPz4mWBPdtWF3KMmZ3XMiWtXz7RjYH9vPdWviyJtYh7UfTSqt8KQEeYD8iK",
  "key27": "2JnLv38t5UKaNdFRKw4mwSXF5p6JtSSX3c3sk9EucaBzasRxUvG22Mw77RbSTBWZJ9MjzkbGT7Mfvx6kbfGKyDEi",
  "key28": "3oFpF8DGHiE5QbZojh6tZDdJaHaisnDqcKJ3ZCcxtecWKbGDQ3hFRmr9iXniEz3YY6yMXPJZfKaANqic853gSwBk",
  "key29": "2R7Ho2WHPbACx9TCsY56zba93WcxUM2zdhKi6fdFASxjW3jaZahK5rnXgHQVEgCpCotwJWow5UDsiBwYxGza1wRt",
  "key30": "2sfQWBe6Jf4WDoE8soJk4YBENBvJqWZ1JykuHYQfmgGk9aRiNDTz5kTHiUhhVZMmGhkwMPxrJF6ndGL4Z3DuDLXf",
  "key31": "F3nQmGcLd5VWsJWPsy8rucufbKoXcaEiRy9PGmYCBfKE6gGPFS6te9kmdg1tMWtxsGs2QruE62vMF551Gr2iYo6",
  "key32": "4eaXHrJBhAbNRnT3CWi1EW5YBwCAmR6jb15VyDCDsbRQ1zcMRTrCYxHFWkkETQ3aNL5jG4NRqvyqpVmX66vh5GoJ",
  "key33": "4AFnCmP7JYM9ueFqeSy6oPFJdXhvUTjriwxq3gumZZwYE8zKargHLbtjradEcHYbzQr1A4cgCBwgqVuKNZUxZ83j",
  "key34": "3Y1fEAxxsn5UHzV36S52mPEa9gqh3ve17as4TTxnKpNE53uW5YQYpdf3C4fqasQ2jsnCPAdyBZJsiK7KL2ryZFvB",
  "key35": "8GCLn3dnRmcQ2Htuixh3w2nBSMEy8wzUcXadV6mjVz8xBpat9USsBhowpnS8QPWpnrW1XvP4sdGPWqeBra3c1KM",
  "key36": "orX2tQP5W3NFjUnPmWXkBY3G8Xru2aKCFMsDiu1afshJLpwuQKwGumwYZh5RXh9boU99JoJCHC9L7ZNV1E3a6ZE",
  "key37": "35q9kEKUpiB1v2KvcovT4QqoCjmfU7T8LmJQSsD2QbiuxFxUzC5KVRNpvaGAs4fmHLc7SQprFyah7WrDmATsgNHy",
  "key38": "wxnWXZiJSjgxnF63dwtcDqvgoeJP4aMHf6YwvaqqmMcQFCyPTNKKyQXfz5QLCaw2iNZ3nvio5M6TEaGd8KzfigY",
  "key39": "tMGvegzbtn2bgyYaMzemvk6ieMrecwmraZqJzrXmBR1mfZAvkATSB12UcsiaLzDxGTni2W4eKGXatVTQ5mQEEFH",
  "key40": "ZMddErA9isKiFcTEWfFJ4GkJqYW4VaSLwymdjTjYBnw8uFSxdzgeoXRBC3TmsWsCcDcaCMQJxryqQZh4TX6SuGD",
  "key41": "3ZWgow4WvxsufgVuTwi8WdtpKgKJ6dXB9RGrddX45XcWWdoK9VHD4Bw7Zp4YdBku4cwULGhkW3HZKBJzFhvVYbiD",
  "key42": "Un1nYKsUgNNc2qMV9HLty1Kja8rGj12CffVTpkMhTqPZNViMQGEBeYFW22qbKtXd1Ce52dn4vaaxtvQ2ToFV1zV"
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
