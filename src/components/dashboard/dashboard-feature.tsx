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
    "2vZiapgami7XKAiUNDn3zKa2NQpTmfFL16xYPJ7fj1cnaagwDyJrSWx24Gn5nTz4bvebGTAkneGJS5XYiqtPExn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q6GbpAQAvTCUW5VkZpZEYWxubsHsGw8A5MKndv4ucSsJ27QxZYcee9CbZWYMo6eSZ8qfBzBLm4fjvMPpS2LhwMe",
  "key1": "QNnAcW6GB8dVqM9pmFKE5K5Dtgz7T8szAJd2uwYKZawRrHbtPjSq1brUVy7awHJg5YQMnWcDJ9PhLGRbdN42qaF",
  "key2": "3yWqKocqMuFehyJwo9tj8HEtJVhuCUvBpVWJ4zsgym62XTNmEyspGEUKG3gU7BuwKg9e8uFN7Vm7K7ggqb7UPJmD",
  "key3": "3L5gZN6hNueyjg5fMVeGZqDj9JSWutzVYkxDm2SH3PmU4uoPNzhPikJ1juY6s8tNAzu4FyA3GhbRbUs9K7PfY82a",
  "key4": "3JwVrYEYo2RHgFz4UZQS1oxQHF8PeVaLRBDMaTWjo6wZ7jDvDxX9rZhY8M6Dktj7vh7RkBZriwzEEZvNmYEWGXqM",
  "key5": "4gThud9yTpP427uHJBvGt2SXXvUuGgZmuZ6Na2yuPESLmmAFPF6KHFoNPoEj8qkbiArgwBCo7RwirbtumhVda3KF",
  "key6": "28ZjUSXKGee2UzbZ33eFa4KrJkqkXXEtqvTTtS6mTVQGrWJ2TYiLmGpab78xSffoLzHymo9RAaEEdx8SxXZMUsd4",
  "key7": "55iTeVhswTAtMiY3tHPomHHR8rD4N5XqXJw1Yh1bsT3nXM7U1EVbXQegeJgdsoxAFMqXKA1otQCZZCxhqjKWb5ni",
  "key8": "4bFQEhyZBZ8ngLwVkkTXJF875qzdcCoFPLjUgpHTfnCgpVqYc8zaDTXHyvbqN12DdNXf2JEJ4CyV5aZ9irAhjJ1k",
  "key9": "sb3s6KEbfXR4ApBJ829CXmAWvE6HSSLaBQiwwhVd5LociJXfhwa5pNsAKAVpNAzi6nfqaQmKGrRk6xYC1M4YVjk",
  "key10": "2VLtA3qXWXwnfvbBo4UM7qurvYKY9yhDVMgemTiU3fnikkKNySG8HY381LqjYTQ5wnYHbhyrZ8qGcxu14k9fkaCm",
  "key11": "3JHom5VUrMHBRunCkQdASN416pxoRua41WkQT9rG4vAPKjWMv6qDMF5KewPmUk2bKqpjhzHwdCKRwWEZ2RY3tWbh",
  "key12": "38gExrZ1Tpv39UrMWTguXsLoYyMm29vqQGFrw4KZgfKm8vZFkqSQvDtNUW5rb2SVvLwrY6rBjSuwpqpiVz6qLLdC",
  "key13": "5mtA2XZVuEcUSSzuFz8BnhDXhPD7GppWRcQzvwf4xXFdiKoSVn28QJviS5hB7AUaEu7ryZkqH4e7SiY5W1Z45WwH",
  "key14": "5HUWyK8oeeCyMpxVuggEDfa5QUwMUkVdyQte4Y8hBwXNNGnmknvEEgoGWYT5DpCzBgdwseBJmbMN34Vj8CJa5ZuH",
  "key15": "51audQxg2s4i1ooA5hRrLj5CV5gsxrNZqUAQaLJZ9FXZdNrS69BYLrqTAGHjfpFkUf1YJExxcqLGmXygg1TSVyeL",
  "key16": "2ZPJNAn9n7DCCnk6qg634m18Zxzc2asSKNc3HCryJUinVDTotv9wd7CMrxuaFwHES1iQLRh9LSebgtWmiBwZLNSF",
  "key17": "3yP8D6YppeztDYWinxXkwYxcbwnMruzVvCbthNaaCfD19Qqxz5wf6DJ74bZLrFvcP8ptbZ8R9PCXSSXhxPHnt6s7",
  "key18": "3hHFBCghFsNARHeyRY9b9xiKGxfE3qEtYkBuxs8wL3waaoL4zkRsm5r6aEEmuZ7ZEH2VwBunQ1QVqfbwRa7mHKrm",
  "key19": "2GECywzyb6huzTj6Thj9dtbES38FN7QQDMCZUTPSgm2P3JY6x3CTH3q9bdZMPNKTn6cgFDrwrMtSvwRCJD2hsiCS",
  "key20": "4GGPCxYc6XRqL1wdpjq9T8ND1rBmHM1pBrLmRWSS62zTGxtHrYW7S9yNcJZjWKje98nAnEp7rsp5Ep5fuFS7juj4",
  "key21": "4v4UyoVwQnSgb4a2sp9LcsQ3woRk2qV2L4kLPEHa5ugQcgddRxvuPokPufBSvP8LgEL6Td7FSE5jtHEimvfYZVSd",
  "key22": "3xwC2BzG2DTFUnyHuHLHnuA36Yug27PEVFGNuyPNacntUDm8bNs1VFsdvgWwAqm1XSuj6qRfk7WYbzfmVDB3Qt1Q",
  "key23": "427hzvckPeYARhrKM2KD1rJVMBry2svFSX44VdphYaYHHwNTVSFPDvRVnyfJ4xDmDzJGnacWYLofwr9uy6tzeC57",
  "key24": "519XnFTjCbUhdPpg61AGCLaSLH4QeQij2FuBcW2hhHPMnqMzVkxdxa4cDeStbVjQr7nx7GP3o9H5cj5yrKSHNcg8",
  "key25": "eoyKa9RF4rMAGuRkpuwVJJLCE3j1puBV4Z7oLgrKxoPo37LSzCSrw5x7xTnT91LrBd8GSuryZeY59T9CXnfwBfv",
  "key26": "smvza2MKRjhEXLxKafRg4zqTE6SYoe9AXoooueKMMiA2AhpsnUBH6TTMP3W9yTHWTGbvcVLXhuB57H7sJVFLQKv",
  "key27": "gbURGxVkn1mrG8EB3mCX2cVkNWzf9M3ZY4XTUQS5D3Tkdyeyd7Jnvef98KhEPv2n5qnPTVWQ2oZMj6WguS7J1kT",
  "key28": "4kfnC5ogE3StzBgpQFwjAtGwUpRQ4eNDi5KgVsB1j9sWxAkLQAx2xhSkJxchjTXQrRP5TQYwJXgWeYPBiyqeA5ee",
  "key29": "3dykDS65Dk8byTKL3Rvw8ichMXZkzV35YvHSoRZ2FH4GmRHcLFfcTSALv9QvXoHwUviuKSQ5i2grRz5jsLd81VR9",
  "key30": "3YARkmwuy9PNjmGm3fjYbLxq4df54d34e8AU4R1LgSuUMLSCxVQ5Ddq4m6qq8iF1q5sCEgpmabNdgowgxkbKzk1g",
  "key31": "42iR8Y2pXhyjm9e47TgbutKJqM9rMLKN58onUCgSnRR7fCyS6m1FW4daC1TT3T95gnr3x1MujzLxSvvQbkcuUBgc",
  "key32": "4cPbiwZQwZysbHxNADoxtQgGDA3oFaNsDTwjBhcsbmPxqa3bTfVKsy737XtUPgraq5wuCaz5bsBaVUyvrYoj8yNz",
  "key33": "2rTDdLFWgBhVK1axatC8DnmDnaKcBCXmPJi758dic6SS6k6xeGQEZ9nA4C4hwyZ9Lah2zasL1nKZzsaLD33Z1ydg",
  "key34": "55YnWZAHSqfGWmZ4od8mTUnhGkmcEK82HECj1GkuaymrSMDZgEky1F4gy1i6efAq5Mai9B1EBy4CrKsZws4mpkmp",
  "key35": "5FCMXEfb2Wzvbiob9Zm6E9Qet4Qftc6EbJuZ8bTwf412rjh9PEEEwsBBFK9EoPdyb5s9DSdRu5VSWP7RCEW6EKeQ",
  "key36": "2qJTn8KDdKEchvb5zy9jLzrmV4wnbuiNMwG8DJegajCNuNeVB3jbXM6N5Cp8v16fgUtQNWS4YdiWkWkZYbRBZrut",
  "key37": "3Qhax66FaDVAgWjiuaTqcf2vQCgrEyN16A4uaiyvuwc7TsHfrHuxS4Yea1HXH2JyZyexXgDXaGKcrKh5oX3r7YY8",
  "key38": "5Vm4BpdKXUXzK4d9y9yxPWsy9mnHfSMuSQDM2mwecDVjhKZijDYZrb6MUzCNBC1pmsLywtBLGbYwfvY6gBRjYDpR",
  "key39": "2z8m494N2L3hjWXBkdXPDnR5Yx2TkE9wNyBBR5gTPnJ77TQttytL34zWEyq2n2yHZw2mJ1dk6TJE5pEagodybiCH"
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
