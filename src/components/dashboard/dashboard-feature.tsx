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
    "yz17w2S4hgPceXGbetyo1u9XKLfQyqC8uFhc1nQREBgwtyy4AFmmTsB34vGzc3vveskKpfwgYidTE9896R21kmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqefoNn8xPNCV9T2ibWGbkzzChpUmHteTSpK5AgjbAYioCsJ7hc9kqVMY37pH5csVr9TGoxNmsz7twn9C8UrD5d",
  "key1": "67jonb1v8fSxK6LHRphfZiUf1NTeLBd3cyXhnuvGeWQqpg1NWzW5ogPNgC94d4nUNbWTJ1VjpZYLiwR8JXxye4oH",
  "key2": "3dLxBniiuECx3jNWVJhhVbZiGbo6gf9NsuxAWNaxCuW8weCPfAnJEgZFtXTKUf7RnTK8Eu1CW6oeTZNfjVBPVoTp",
  "key3": "5fqC7LtKQhkuuoSra7TKzjAEKSb1Snd4kK7BfkG3nGHqKAx5q5eDHkzAmuJzG41T3x3y69VFUgHRf4c92t6jBEH8",
  "key4": "f6A64XunVPXkH3LAEbJMQysNK83eF1mMZCL2yMr94qM9eBhGoz55C4UUHM4dREAtnoBUabnuf6Tk2ELqLfS9FGA",
  "key5": "5NQFGgVzFLyr75wSYLqkc8sP6j9v2UxUhGGeyUmLynMjRFCgQfDXmjNPwLGGz9wm5XtbEMDoiqb4ef7wBs5NmQLL",
  "key6": "56BqBwzdV66kitVnky2KEsSjTGAiR7diVgRvEqiqcHQxFWDgRQFaYMnkfecHpjXupMaKY6ZR1egxHuqCXikCy8oo",
  "key7": "2SAf2VDqmh3EECTZRBvAbmHVbFNJeUtKnKjnKoFYmgrhpm5oLyZekvqyLeZqzfp3QAmPh6UTgVQZBd73wAmLGC3M",
  "key8": "32bSnEbj7dnvNQK3kGyeY95acbyvoBBtzt1LcaDorSnUzQqRxQZmVrJwYPem26Mz4B6cpqgPhWPUuS7eZzbWSDQh",
  "key9": "3WiaNqbJLzDS1wGTiHceuN5WBTBqGNtHfh67aEmR32E6eDFDY2jJA67ttLWv2xknkaufxQ45uBNtj8TiRmCYFuAF",
  "key10": "5qjEio1mVCRbQ8wJwPeixKTrP6W8BvBzBvazHwMjDUrBmTcyqfaUy2egxEM8KDELnkCbSn5et1xe2bbtWfKyAzBV",
  "key11": "veDeNrSE6hyrsfj1K7MBJrttQDgZyboM3RnQ2gMjHRkmhZMgCP4RmwA7nJiJPk49n6Ks2ZBdSPuBwkNeqH6AWeD",
  "key12": "2Gfa14NUabteCDhJjiSD3G2tgUHz9VBZvt8SE11Z6tFTSWGXMF3x7tnpFnV1vX89Nt79Y3PueegpBFdeBohBfSDZ",
  "key13": "5p5xqvbznWCHQa7jQ9Rvn1qFg9S75wz5kFARPqZyuqUydAbWdLcP91gHz8C3wS3xDB2mFBjV9oz3V45aXDxf7AGR",
  "key14": "4mT2BHQqEhXNLMKXUz4fAuj94si3VSt3QUKMkAtPuhAS1W3YppuxSGMPEbsrRJyBbYQh6ZxcjWSeJqTbeLebwiJ7",
  "key15": "3Vk218gB2VETAMHkgcQygw938sMDJFjbBaz6VhPTRM2jLHiwRDycU6DjmMPSBz2ZuoDByhX7vKwCsbp8jqVLTB3u",
  "key16": "3V42MHVv5ArLvaHaUb11khPfNkHqgubJySGfDnQpPKRtXVbc9y4uzKaZiUH8i6QBtKqwbzgtk1kWe5Rio9DeCeis",
  "key17": "4cL3KwgsQR5rPueFKrcxQYsieGjXf2xUiFwWyJVdVyNprvLq85uL9XTZ6SWuGAHBhLmewyNYEYCfvKDu2DCYpj4u",
  "key18": "2KG2WVLTkzzG573GY223oX9UGY7uRPCVuG2tjLoo7YCCPtVGC38YDmwHQGHtpYcbct1vcbsY2xrjxnXSASWbU3uE",
  "key19": "3ugpxNJBk3JmdrgZX47ETtXPVxriBBA8p8AksuaTDwWGQ2XJ2fS664WSCkxATXZGvGtKh47bJnEk2UapAsjNN2vq",
  "key20": "35z3AiAZ3tRmCH2bJzwXZBCfvApbUEpJ2fhPq4vWzstqi4yZbThSE1ykGPaSuyrtE4NkTRvswmQNKN6NrYtshxgc",
  "key21": "5gFYefWarf1VddKwji5QFJMsmdCaRs9C5yBdnfFqZTBV1RTK2SAWKUxKHiZSmfLAST9ZBxV6PfMtfxUrRan9cqZa",
  "key22": "2TR91YdSSMgz2Dpka3eqc4S9cMt8icDNCG8UZUhrJqAuvyNkBQV6zDziLhSxvdNSwPbx9Ts6PQDybbCs1DTFE6bK",
  "key23": "221iU1Qf8Rmg24hTgPNeVLAqkRscuWUkeXpYppBPNrpHmcJafN62Z2VxvS8GnQMZpQ2iUeC3SwjC7bncXF6sb7sn",
  "key24": "3sRWSP6TFSHqWeb7gabGJ8DdmPpC8yqS2wafPNS81ku1Z61fHRice3rWAbHzBakXFvjhZEkshPbFycXbNLXeEKPG",
  "key25": "ZdyvGbGvoxf6YkYuhQAMir6M43y4Xw1uXW8zBgDSUs1DRAnCPiQbS8kTPKDYsx8nveNPCKzEzWpQt4HJfo7KcBE",
  "key26": "2NKrvxqn51wjndr9UvEGVYWwxfYp3wcyYg5TXeyTyqRf85bxcyrjeL8kAbiTbZJCWjetM1hhYH4bXrnw4G57HNJo",
  "key27": "54GEQGNZWA7tiUPiFRYvbVeeTAhfo9HzDhEN6XsgC4ibEnABjyZ4wnfD5hnEXYkoWqA5i2AKTJky7fwDz7RQ4gUe",
  "key28": "2vQJAZjZpsbERwbbJeWfr39QmYKwKxzd2rJbXvomBQxzJLvLTENDzaSmdWRVhLorb5dGhk3nA9DbJVxoSNyBfsoK",
  "key29": "qZszVDdmADNVwP6NTbXJu7SX45NmTfAzhrPfGSXjFemvenp71SoUTWyGD6LexwPKmPyTKxtELjU96F6SWMnEquD",
  "key30": "3zvftzpZ2VaGiRjnAZHPftz8TDGjJHNr6rRypNp6vouu2YrJvTopQqoUvnfWV6p85krGUdsmd9zaAewJR1P4mWsT",
  "key31": "2HEX5teFmW5TFfwZGv1CXnreXxLKfNgBN55fdRe4WyrVBgcvkE4AprpLV9FyjYTju6c7LPB82HKaobvpJHBpGdDW",
  "key32": "5oHAif6m8qxsbNu69y5eAc6FEHknpNYSLj5KcVcuHoop11XmRiwS1xTpmSwvzfWwBiTDTLakxN4mkW9G5z2H9zaF",
  "key33": "VkyU7DmG9WH1FpZLrXS35AU3gZaMC96UkKa46PwQFDRBQRosJ3Lm2h3YtkzCVNTM1sUb2f8eP5yBPX1jbR71Yyw"
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
