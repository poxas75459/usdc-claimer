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
    "fm1MziqHRs5Kz4iHk91cGBQ2AYoepVPJaaFnQMagj3sjUnxYPR4egLaw4vbummgHhXhBe7wfgFoRpgkdCkrC5mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heK8mkPw8kmzrwXgkFtXUiiPGPeUTMrEjFugLQP7EtFNPzuv18qttKkPMtJafnaiefhELArLG7Vvu59DvBy4hhq",
  "key1": "CYLpdoUuDppSvoDeXiTE8EsNEmc2TStKSGiZmLf5giUYXQ8e2kv3xKWjvkuc1XCmXnBUBp6V9UD4eJA7NsxGEzV",
  "key2": "FrUHSmiKc5zdxn2xJ4nbGieqTeFSfgQjEi3JFkXDQV3mtw172TqETWDrnzF7ZQwpnZwLMqhr9uMjhPwr5EhtdBQ",
  "key3": "4Axm8NHjzRdZHjNMf2DS7J2RhuisnEY8hS9io3fqpMfjeWdHnVvxZ9baiizMhqDMR81CC8GhpUEZLivV35BbSBCD",
  "key4": "38LQvAo7655rBjsi5XsfANAyqfXysDiWSBYNL1PNYp9VY16ZWMycFRLrCiSYwM2qsNScS4jTshjwq8S6AhFQk8Ra",
  "key5": "5pTt62LdtaiTAH5HFoE8X8fDYT94scJm3M6gKKQAeRMxhj47729A8wpspLk9MXxQsGXDc8u1pnxMcJJ5bMS3YsNH",
  "key6": "5T4YrR1zbkMVJJzjN8qGLTgPeu883nuPjc1erKENjpivei2RPWQLp4TSdoqpLiRMK5fEExVmxPgcpHP3rBj66D1A",
  "key7": "4BnyaWvFHRBtRJjjx2MXUiYHduCyneaXQFmMKqmFRMtatTiYTUinLHUFmrd7zA8DjB7hMSxAAcoG74qXXQVuDgTb",
  "key8": "5fWNWW39WRs9S5xg2BFvbvdYKDoZBogMefcVLGU1rxu7uQKg9JFqkcRLN9SE1BQ3WJ8nbtFCFLUCuBoPijYWFVV",
  "key9": "3T79Qhxt5Jay5zmngUTFQmVexrZswDrPi1gvcnDUuxBjMLBGbbYWuYhTA11eMjusmraZChv9A3mAjuucdpMHc7Ss",
  "key10": "i8Y5GFgNcSfSqiVLtSX3j5kEb42auppeFNscosckziuajgjzrxHn3cWTj74La7ixBtTW8xJddvH9YNVJa648S7E",
  "key11": "4uX6NgzYKNjoS8QfsNEnhkyNPSd6nHbaWxaaXWEMXcNr3DH65xq8thhMs5TCjdxP8Mg1KZg3Q3DZiifB852nVJdg",
  "key12": "zjZcJx7oNmpmtbY4tXk7ErMz3aikhzQVoWMqt89WnTfeLdkF3z5x1b11muV9dYLLpVMEfvcfQ4ArZ67AtLdDqqk",
  "key13": "23sBGiPr84xkSBa9wUKuokKSRhtcmCU4mnisj7bdg86VMWih1TkKrtjNEnxGLn5xH8pUMUE9H46sunnufycuJyro",
  "key14": "46iW1g7NtqKY11SpAFZiGdDSvwWg8GPRzg87bWF2Fz4JqBst61aDaFwpLMJtLS5i45UTxzGLsyLZRpWSRzUa46oA",
  "key15": "4HnhGJY6Tb71oKJniArmpkL2uZcq771hRqXUzthkWG23R21A7cqX4CskqTHKCYXXpbpL9RJx9pEhBJJVWATidU9e",
  "key16": "jk8M3zRdXi54NYUYG8hXhThVFjMpr23ahjAxrfEuF4ohphSmU3psL5p4wBsmixye7sPpVM8qzGVABZYKa9pnwnw",
  "key17": "XniYqv6Jd7GrBRbKaskT8Vqmn8S5DtLoppbpYtthbv9HW4WrrDgQkoVmV9BNF7F23KV1zqPsjBh9ULVLQxxkm1E",
  "key18": "611z94tfF7LU14yZsbEg8TV9ePGphqZz3L6XCVLbrTETgBiSeWgjh7RiGtbamz3e7WKXaWE4z3kk81KNUi8XVUqw",
  "key19": "3k422Z6rd479A7bDcqCefq4pau6h2rJ9kcL79ucbz8gEChK8g48iVvUswr5jb5Q1d6MhrCvKXUCkVTeog9oB3LhP",
  "key20": "5vwDPY1QTUNMzJq8bHm3rpS7fXuWummX4N6dCvqYhjypKAoGHV1xnkGNipAK7aDLAYetaN6LAHDUG3xysUEnkg7P",
  "key21": "4NT8quaRoFtssro8vLxWvn23h7CLMq3QxANxLsDWmiRW8ouXTonrtdWhFpsCFUayN2fUZpjxnFiQUwFghWmtteXC",
  "key22": "pD7o9v4cU2EiDdCPxPoqoj81mgV2GUzF4nBaaWDEw3nV69nfkmb8gCgjp6PdpLVrQSATod674ZoDCpVbrpjP12u",
  "key23": "5jCsBtgFFfa7y3j7Sqxqn41kywWGBuuDPB3xTgAstQ6Uhz5tdj5srY5NaELxbfgjJzH9D3cGrcJF9hakiLNaxLtM",
  "key24": "5c3hSvPWrjCvCQhfaeA7xnXnBhVg9DFhBwcseaKxJv475AYkjZH96QTM3ifyGQtfV8JGMBRF46TA9W4G8TS7Ypjf",
  "key25": "45CF38r9CoQ4TbXojmH3HsB8uG5j5sRE55ZtoyHRZMqtUqVXE8jT8vxdDPvwaGFh9KzTg1JpPPHwXv2uDhWEHq5J",
  "key26": "5wx3JBWyoz76bP5LiA5nEcR1Xidq4PuB8da5ZgsXsm84bPc2x1J26YVDGkgQPaqzyCoZkNmgLrYTE71xQNyDwuhP",
  "key27": "C22Cg2ZLpRW1dkmYD6b6mcZSJRHoQ4NEbnojnR1aCMcEpqXESgTSmprBw45egeV9fERU1WmsDdX1xHMumT1J2iH",
  "key28": "5X8F5Gjj7ygfNJYtq4kr587Gw9W6eyevPTBd63Y3tde1rFBMuXsP294N5ST1SouBd3BKhpsPuUbzkuxzL7U2gu17",
  "key29": "2F9APFXGt31ARYsB7PjK8VRu8eM1G28ofzQc78ppenrs4eRyLvqYo2aYyRn8A2GrtEe6epxYbD8t3PpHWUJhjUNv",
  "key30": "65JZ5NjtQRYRAUcDM8zGGvyiKqkJEFt7FLZg9RyXkCr6BwUrwraQq8S7ikRgp3Nz4J6HbdmTnnGdcq4Dp3z5PMUC",
  "key31": "2HHPBuCHrSPTotySjXTm3YV1FLndehas6kWFgaAWuj1vXBD3tuMLoBApRdivMWC33fowqAuHoWs4t3fkpa92yNpG",
  "key32": "4S7V2SU7KQt16Dg3Ng1vhJSJVQvpswKawmisHY9c72yNbaFr6S691CAcpjohaGPXZjzjUDm8CxLNGzEJaRJqysdN"
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
