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
    "xSBuU82KLrfaXczXkxDaNwGBSCkc7Ep3nRgkSKBYPx1dePd1PzeTSfZr7C1LpQfEjBTDpWap4AyGizPVnz4dXkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yoVBWo1mJ3okRtLxYsgk5JgkiJoGbxa85ExbKw23BkajmiCKSLAEjEjGudgCUk9rDnztn6Y4uhbrSnGQWvSeGsH",
  "key1": "7Gx9epFZSxFrgyFPoDiWZYrPVVLGrr34YadKzkXdcg6ecaogrdmZFgypCYLzCv16jHYQeqrgH2yDm5sbUEhyNAC",
  "key2": "5BdCt56kdJMQCf4JJswRZdoZPx17NFZkQiBR91PYiVnN9UbhSJ8th6A3KuppK3WPXJkpEkfnkPAe1e1so2SUL3W8",
  "key3": "5sc9jcY7EHMbvnM1C2xkRmUWs2kiwPZWM9jhRnQDPaqXZVWAo6u5Qoa8fJqNM6HtMz9Q292t7fjK49VsQeK3myZy",
  "key4": "7PauMrSrYRxnBvSJWM6aNxkrvYv8ibrCDoFV1e2e6ah1WH2qxSJpLSterk5NC25B8P8EkhoD61mTqSzePwqB6fb",
  "key5": "2CfRp3wLqdfukE6zgJc9sUgz1s6U1pb7iGxZcL2KCnEq1R1ujrrHudSdncD7S2KtR5Nnzj9wiGtxmLYKgJYH1Dom",
  "key6": "Lc62qPf4c7FUfxWp4ap7Ag7cGAsRhYhqnEUsRRcfLpG36BsLHqZA7xmJbzZm54ZfQ1SQzwBYm4uzBxJBYnXGTb4",
  "key7": "2XgcG76TtERMpJB9DVC9bthbeEkCxJ1VXbDW59QJLycBiYoXKjn3b2JnZiydC3n78GpBxsTmUNYxH8CNS7Ln91rv",
  "key8": "5APbvmvjMUfaiAXo5GwDcbD4ZSuF81mNZKttc21QQTJYTUmXzamjUTnnh17nQyRNJ3hr4Fh4YNiKtqMbYZxNfekE",
  "key9": "5jHxsVBtUoLbxJWLvgNxqpCenugXzhe3HE32v8tQQuU9vP8r554KFETwBBnthKpTC5Zhk7LFPEGAJdVu9LpH7dKV",
  "key10": "5VGegrf37CRzhC48RRfbyB3jstKh9okEohm6USw5hepohCPKif89MRBYV6RR7ecpJm14kwknWoyLH5m69FyTDMSE",
  "key11": "2mmhztUYRiVYQTcAVs3LNTquddbfASDuqKncLAL3jxByfzfEqHVH2SDiBAXYnpkuxK4P7f9xmiZATR9v99gqx9rY",
  "key12": "5yjWJU9GomryDM25F344wBvvyh1z1kjKu361YH4VK9wMesfkEgPFQSm4D8M4YveRbWunAqUCGkN1SC1e3RXMoY4o",
  "key13": "3rKkmMp4sYrD2b846bR4AJYYgPNpmQL8RsG6Cqcv3qJws9FeqgUPYWMXkouT6ftWcHZQNyJfTmNJrzgyBgsyVBfJ",
  "key14": "2GZoEg5PSquJqD32hssWKJX9D3Enb5CJAY4v3GzcnnPgfxDgPZshgpyZTU5eHnkWW852sUz51338ZBqxX3H9TyYK",
  "key15": "5sxW1Pawfrs6bVAswJnxGZ5G2nTcezjc8ob86qaJFNSBneCWQRmgvnGR6feomDa3Hx172V1YquqeDGYPvEZT62WB",
  "key16": "5xdoHF7qyrfKgxPEXWDkSr9Z1CWRmjCXsXZH8H75wU9LN5WjJZ3coiezzvptaFXDrNMRQLegMs2L8QLsaDJC2FHU",
  "key17": "mDZ7qjm8qj9teU7TU6rj2CdvGmfv2axkVceB8Q3yDwwaDRkmKG3ukmFqwU5MLz8kc9SrWVqtNhHVzMNtLj1jBJ5",
  "key18": "5WAp6afxPrG5f51k8UEL5se5e1PdRpBFgqQxm4Z2ff1fkxpWS5ubbaKC6uy9MieuPuFJ6HMr15e1a7xehWWiTqVp",
  "key19": "2zCafsPZYhCnd48mZ5UnLeMCyPmYHwVPXFBax5E2FQqKsmm27RUypFLJv5618DVSnMWQUMWw3jyw2fna65YLsY6j",
  "key20": "5mLBEsf8hvGhExWFH6F5qS4vzLGDw6Tcbb3oHmxefgEn7jeit4iFrb5QY1XNJdxVfNkwdWPALG1SecCUpfEcnxxm",
  "key21": "5z6TKzwDNaTrs27a34PmLdR2BvfLKVxSDtn96PJW8WEoBRQMxaEVuXqGbc2gi45NPCgMTvtTHPTnksBHDytBictn",
  "key22": "D8RYjnA4fx6nrteTNcPgSNM7XVnUKijcJ2jiuSQ1ZWuy6xsFYVhiRiJKmbKwyMNt3X6bJG5nTRcgHJsqVj3XE1X",
  "key23": "jBrs84n9Qqpw9WrXLgfAZoKsxYLLWUciuvMwscvVP4w7Cz7qTxpSsmEmJwpkuZ5oMYsD5N3dF2cnZY4VrXSveXZ",
  "key24": "3em7ayMKb1nTntXuVWCjfYmjwCAP3XfDypbZa8HFtzqDE5xfExw4GmPrR1wGUSqrFQnaWyiWV59HinZqKuDj78ie",
  "key25": "4UnncwGA5gD5TQDFVB9jN8QfV3oePaL4emX7wDH9HXCWgrFUkwFhnFPUmzAL1AiqUofJVVQmJcMK7KDKHaocVvpb",
  "key26": "23i6eXfBHWtjdCdFF5A6ppp3fTH67jk4q9fVmjeQdMZJfiwM5jPXHHkChf6pYrh3YPmTuHjBXqBHR6zXSsHmrZFA",
  "key27": "4acxyXpr3FkQQPWL4ZumW1y7gASvCsMwwY6anq8ULP82w1W4CetuiQAHRx753rvt5c7dSJ6yYRjbQS6ukXXaMgHp",
  "key28": "64YDmWWoK235bd6B2ZQ8TX5fyArP3XJVKERKeqS1tDEPxGPmSbrD9PSw6fsbSYjqtoDsqL8BAzv8jopUwgVkCXHZ",
  "key29": "5zZaL6cDSCw8oCvjsGoHRQrStzbHuPU2mxKdhNivzCSpxsBAckGDZuS15SW82zQqAoibwiUQpVKVPMZc8b4YQU1m",
  "key30": "5c2r7gvcPS19EgzxthMHqR7UbswLyt3EGfvWKRiM2VzgGznDsFnenojPEi8Psy1EwJDUoy3spw6S71t9W84N9My4",
  "key31": "5P7nQXNqnew2gEPJp9AshWprhgFBmiJYiymEQGfbswdoRTyssYQkxEjEfwpKuRfjLKeSdxroLkL8EVqSARVu3fCD",
  "key32": "Hy3ytukBmbAYBUS5dHY8HTmXWrGbqtyJsDVx8YP1n8fNhrJLsEcL7peKUSfPuAF8WAQ9RDNoz6FNJbGJLg9c6tc",
  "key33": "38EA9BuBakVm29CC3osmWBfPi9nYR3qfV8U1TqCgNcK1RKqvV5Bw9MTSLCVtPan8yKXGZnpTb1dracCWMda7Lbqe",
  "key34": "4j9jbaAyjfi7gxui3TZfg55yK81Ki1oQjvHZcyRh22sfNvUuhekDFiCPFXB9TypGxXo8oiiE5kCRspe8rboJiN4h",
  "key35": "4ByMjQ49gccFgW9S9CueoKMXvzwwmihhzbaRFiaYKYPVpvCu2Lp9imPCgsG4zJ2xLxyXVmFRrcNZcGsM5jb1dx3q",
  "key36": "3aD2kXytyV96gmiJUo8g3Djo1Vc74Mboc8TxAEGLAD1pZAHRzkyRbq2p9Ty1YwrMoeh158EthAve2n487ZFDYW1N",
  "key37": "5pRcdbDjap9rcKiNdJ95Qco8pyANT4qGxCwkKnX4FJ8fQpvqRBxfhZnAUnMsv32FgDaJABQTJo468LdhHbXFLS5Z",
  "key38": "3Q4Fr21job87T8ugyj37tee9DTBZjzHxwzbBXEmPa1xBzZbN5rW3vvsY1TT2kdzCVpeFGXjUtkEvwHEm7ED81Hfv",
  "key39": "5CT8Ak5XGzwXpKTMCcGjbnYXWvuscERpkFGtVnr7amYnFQSyTQvKPpq4gKpYxq7vrK3acCHCMiBck9GktqXRodv2",
  "key40": "3bsqhWP5fnGYsyEBosue7FWmnnotA4pnKESJn4V3cde924cn7MLYsMuBhD4pLcsMaL7berx568Rjw3PGCysd6PFj",
  "key41": "5fJsVocGUrYt34BLbTc4JrZTMHf5wMfPUMpyynEPUpx9fHHMpFyh9FeFFsxGf8yNFziEgdh3cJPY6s17K3hXn9RV",
  "key42": "5SJEahyCmWjuD6iwJqbUaMnaAUQHoP7xXEf1CTWs8fvU2wonZD7SKtT5Cc6yLZnwFsS3dUKw5MVJbEoD9H2GRD4c",
  "key43": "4bNWvrD6eKwHUpSw4p3tFeYypahoGiqbe2ywm1ZJckLicZdrBHHBofGCFncWZdeHDTVshSmFdwQGirZKEJ6KNgFj",
  "key44": "3YKYf4MEaQsy3JtXtGawdfycSWK7fTBrRbtRqj6h6iskVYVxVt3oVy4guLbBxLC2zhRypV4tSkbEn6D1TW9Vfbza",
  "key45": "5DETAEX7BXcShDBegHD2gidT18p6kmuYHs3Q9TagtbGDhy7jygY85RguRQqeXBcFaYB5EsW1EQHH1P8G5u7mVLvD",
  "key46": "8BziLJAE9nQDLCY7KEsacawxYNdUQTR9Bn2DL6dyy6kU1QSAbwSK2vkMbejHgJagoPkNKBYirGQZeKGvkNPRRAV",
  "key47": "3LD1ktoEgDCLqgQ33Qx1XsycbnDnc93zzhq62uVQZuq3wZArMikwihVWDTbEaHsHwucjo7HnkSLyFpFo14apd86Z",
  "key48": "UzTrCYtLdhjFi4j7ZzNzEGDT526k5NMfq4rN8cPYQaosqfgMiyNnmmCxPZQ8GtpmG3wgxfH7jn1ZpCKKDbuHh5H"
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
