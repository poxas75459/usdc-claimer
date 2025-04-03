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
    "xn4UUX61qjL13QPZJmV89WyZyM7b3apgw21sSKmFsE5FkLobuAYA4qoYEC868ZunDiLQ1VBgWZfzqGF57P4AQuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i9cGcAZoifWbxJg6wA4a45UTbrjZEpEj1JKb5w9muSihoDjLrrCmMFoYtB54twcTFA3xVF2LbzcNp1hVVkk4wsR",
  "key1": "43KUhcFjV7Z6byCS5tGPQCrvELPHEUiXT2GHpdGdkDdKqNPnrLcdvqtmPBs5eriKMwqb9nfvBC4TyFxafN7a4jXK",
  "key2": "4zdvrdxqP26S86d1JDiUorktoaQEtPCYjj5sRSwH63J8dXCZ5EFTB1dgp8moAwAuhX7Snh5ahUk8AM5iF3UTkT9z",
  "key3": "28tEZruGCGSesLvUvA9xU5h8HuSp7UGVKFjjU1czfR7i3FSUqPvs1qXfaLRZZEW72ngu2Pqbc6ZA7dA5dcFQrbwV",
  "key4": "2ZsPTpUD7APjJEDPR1BWM1jCnoDrEQY5kS6C5DtVVcqjAAWV14QEqBvSS23fdfaPcJnZn24yxj6Nm3fixE9VtKMc",
  "key5": "3edsCzrgRDZrqsBEnx1tsxAfNYLW5CZ4SEd86LeXNmdwTRBCubBM3AV4F9zY1H4q66NV8CVRYSsCnCjndkKYA4R3",
  "key6": "2kc6GfJ73LEPVRSa5md8eoqCpztktvj65xQwKmRk93SYh8ighm5vuEoB3svKN3jkJxH3mX8u8PvZFUpWRkQAHuVZ",
  "key7": "3LcRs7uztbb6vuoSdgRe6LfkHhQFXBdTFqz62aXz5hsGuaj7mi8ve2kMKuPGCD2PByocUKHTYuHRUzPiCSae2u4D",
  "key8": "93hEDAYfK4XsxcUZr5eWZjUhKdnoKwQuSWeFmmu46MKi3wVoPNGab3HH7BuuwE3f9jba6PRLERQpRdHZa3vS2vT",
  "key9": "4UJcXoA5et1fEAN2WDemAbNiLWi5L2S3fDKicuqEGfA8EPgqJNpYWGkqTtVAVaHsDF3KsLXVEpDGdSTiCgjY5NWD",
  "key10": "2L4URSTGTQ5yRcSjmCaa99uMviraEPkCY3Yr9MpenpisQNMNKVhW7hLAJxMhKbA2W78YkqbhUL7SHeLbUUmWWVYP",
  "key11": "Yvt2C8j1ftMmZWuZhkwNHt6eDwvZhpp9mTYKE9arg4iRuSjWRxeXF4nmr4qFjCZMD8GMMCUW6BnBx5DPqbkxASC",
  "key12": "3uadVvz4C3QfWMzcojoLgKz7fDWRUkh86CqQJyGjTscNK2r1WprKL1gZxzibrCgkfm8oZDqW4AeRqpLa8xZBb2br",
  "key13": "4xQMUFCWXLsLTLf5ycv6Ynz1siuHqgzzFtXfF2yaiafGd8dpeEiacdRZmDYVGT1icKeynJKGeVzJ4eSJAJ4GHjrK",
  "key14": "4niew4SSQbwSqbhf1xitSEsdCAK8H6Vz8qKk36R5MLpyW8ekiANRMifA1yUG12qxLyJxvYSuaY8YxFuaXsGR6Nnk",
  "key15": "BGzdFhg848PidiCkDVj8KXcEiaLSR4BY4U5RQcjokJg5WD45pg4YmozFU2YRVEiHQXGKnbb8oiZ3E4sxxhZnMW7",
  "key16": "3eYshaRpDG3TF8EhsAxbU1WLv9GyeFbtGoBP1dQ9NnXJqwePzWvR1tKb19rrzFS4RbT87vDCJQGnfuWFBrxXKDec",
  "key17": "5fhbxad1DzjwdaCQ9QBTtyLdudkSx4jCzxyvLCN9ywCJumRJiZCwy9Kx2iyNEB5iEbzAfLJEbyX9imNNv9isC2vN",
  "key18": "3aBQTWkFvY3qhAnaJrsSnYoqwk8GedCgMqovD5oHTcW8mptwrvJaKVhg4a9zUmrp33w958u4UoXLzpiiRYHxyLby",
  "key19": "46JXxcpQEdEbC2uD9waDT95pck3G5JAAhsBGnUZST2uTTC3pLGm9aXPF59zLM2b42gGTatzsEAFdN9JLmWgzzX4r",
  "key20": "Z3eys7ygAM3cybo5Nd9orSrYBdkGr3s3e3BRbHveC3HYKaxMfM3RT6DcrLUt1FtYgfYG3iDCZXLFwSokjzFNLsR",
  "key21": "iFoXByESLqGGd2CSxb6ScFDA3p1kKPDom7XqFRvzKrdrUtKW1DqvGjk5rRVY17gdGHyd8mmsV6Px9ipCM6AEpu2",
  "key22": "4QUF621Mf8kq9KfMdjGPtptrC6X5S6jsQv2AtZLh9JStqSyPAcYG4SW5zwRN7erptFYJuquuY1bxiwdxs16Vt2vV",
  "key23": "2tEwQEnqgwmZfXnHKwH7uc7YzekLhsKwR1PXkj9EpSG6VPfiVG9HqTcPfHbAf9vcPm2oFHzAhXyDC7mhmsRNqv32",
  "key24": "51ALdikvRzzNhMZtj8qwyGDG18jsB9dXfbXx2H3DVkCvpeyyG2xbd847WuHgzGBmJhDzUwEHnAQ6ZAjrDSmaXkWV",
  "key25": "8FyYvS1WgseFwbhRKUnD1a4qcU5siBtLyKtjm8gSERYZVYTGGTykcYwox3hUeZjRnkVgB58JpMB26eQeaLKThQV",
  "key26": "62uP5v1JTscZXkb8EVzhVtenhasZfNfVDwX7Wv9rX18vzPzt395a9ETNrgWo6tGGYsWWhQJ1mE6e1GNA7iZgBwQg",
  "key27": "21tiTMAArNpDBLdhuQKte3YmWEJvgirqKYkZ8fuY8GtJnVXtsV71t28GWoqpVdsZTeYWpBaA6rDBhp6uwXo6GLEz",
  "key28": "3S8p2vbD91eQq5Xk21wJpTs8jEKHMhKE8DjGQdJZUJGp1MF68ua2jK67vqdJrGbq4vuUJ8iD1dpiP5raxNRxEKE4",
  "key29": "5gogcupTC2dg9gs2kyq1asXT8mjh4KpXBpwnaQ9DT6hx4YF5a1SwjfG68nZX9K2PdRGgTgdWp4r4oLrnEF7GAtpG",
  "key30": "44HcNKJxYG3ZoixeE2xSJftsXL6TfQCcChzQABw4T9BmVxGNFijEqLKtQokQGEqXqdN2Fvw9RMvZz8ssTkBDSFgc",
  "key31": "5Eps6k21v1TjyVcmf9KzFkMQeSUT4C589PtDz9VLR3gSiPk48h9YkGSbKEJtk7pSu5mor8fT1m1szG5rfsCd4AMq",
  "key32": "3aAXsm8hMEkQbkDU8foeTAQsygxJ1gXadp4UBadq3uWdw2r24bPr8QsmkEVHzAbbvZp7BX1NBeAVuTdr3XVRuhmg",
  "key33": "2chXbD3iWdTagSc65SKP646uvuugTSTu6mn1wf1bBG4kjBYZ4gsh9J31EQ7uPbgSyEH9teCLbsRomJK6mr2449Ly",
  "key34": "2qgqrjfhYhssCkHT9EkGKeLXVL4AY7N3JBDdTyuNSen5PkCEMqWVqAeHrPqxUFaUYfUS2VYJsTfNVtJ55hPSnUGy",
  "key35": "31H1h5acXPbQPLH5UiC8vntJEJHALSV83EEdfoiezpKM8Sz7UDhrLXKv7DDQEdzB9CwTHc2oo8RM4osL925migXQ",
  "key36": "5TmgooTx8iGR3At37GGmyfSkQWbnDry1bU5vMWiGDc8ZaDiuix4rRgsrdLSc5qwFzGFxcWq9NtNJi3mnNzu2dGkG",
  "key37": "3JkNB4U7PqCKi5gVBrWS3RSy2xnhpgr1vnKXJZcrFJPxkWuVM95zrdgHJYa158wytcCLvagdDpEJucy6rdUPdmkY",
  "key38": "4i15Y8jThnoMxdxJMmEVseHqgouLgm6LSKpX15W77bHFPSAN7stLSQ7U9yDDrk4BfMDSVPDrSK9QMYcfLs4fXuTD",
  "key39": "2jAGPAgDp7cPGZxssRMeAPiGqQYBxHJVoLkQUzLPfoDMRiZ88MisMvrzrKg43sXnipHz6Ft9jEEWeGkwXw3cyuie",
  "key40": "3ckdkCPvA4U4z3Z5v59NcCCdeswnqSTYgWmpGGvQDLJjSg7ae6y2xhHVVvj1F2EgVUrcz91VmZ2yn3ayYbHqmqkr",
  "key41": "3JyAeFgfg3wBp7kfnN8PU36sBSxvcXdrbsCPd6w7dkhLy2rt5sWSD5KLUfnA3LPj2NT6ZqZAtf5dBn6px2jchada",
  "key42": "5aczJKD8mMCkx3Naa85zXBTDezEPSnJx1Qt6qx7ZaPVSryDj5WK8WwKFhobczyCjzjmJTVqzovEtvNoSUjm18sa3"
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
