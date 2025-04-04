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
    "2m4dM4Zdy9UyUqVhACtzgAYe3VoNaBLE4My4m4VLxezHMwFhb8NdrtB6zZhtiSH7chnXvEBk1QcshMp7pKGXGeGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSBghe85x6SELiDZ4h8FEsifaZZT5YAX3RJQVwGSWtg38cwAhGv2xWGxNyMRD8jao4fbU9447ur8oaYF9qyp2yZ",
  "key1": "2RuekZes5oiFYENm3SUCy77jWG1NSVopssL64AP4j2fAwfdq5jNtr7x562toRGJBGVeuVkHpoZQLNfK9cYH8dyKu",
  "key2": "3mNRZDBfpVyUedyrVzG1A9yotS1qD6PwTrta8QAuwLoye5S6d7RPSQwRRztTv4huV4BjokMYVHTm8T1nM4KFEHgt",
  "key3": "2XYZad9ig5RJyAgFKzdy42eDhXU6EhrqW2Me7SWXdsXec7CfbksADDr5xcEDdgPTSsiQrzKygQ5RcxwbdXqCLr99",
  "key4": "5ezvjjDBJprwpcSM4muYEgjPZjq5HmNMRseikZJP8sTzGkp1tLKMuiyvTsh2Vp1otq4dg6GvUYz7KGA6F75s4Kym",
  "key5": "4reNSTGmLqmmHdcC4Fatvh6cLuy1uPHhLZESJSrpYkm1fpRbtinzEerAaPNxapfgJiH8C7JnbTrJvowJKa9nia5J",
  "key6": "3FWrb18AqEA6X6rNYBFGCdRiDiZvQVDHe8jfimf9sdQUpkfgnHLXfEioMKdYPpvW6PC1Ek4Q8iqcX7r5puYgGYf",
  "key7": "4vqEuUHwJ7MryXqgRQMSSKhhhADNMhZgCFMBJ47mAKyxGajmx1zoGGuFMC4ixCRRsg3P1qf31qWVj11NpoWFEyL7",
  "key8": "4z9yorWeWnJzb3LmVVAJR3fqroxWnUAw24ADJ6eYEzr78z87AVfN8x4dkxgGFuSWaE6gzTZDkjbh6QwtiycpewhC",
  "key9": "5aWKYv86XNJYmms8Nzrve1PKXuvxjW87KfbvDQAEfeWesL4CfHokBUVtbJjS6pjDDt6jme7zwEbBAZwhT9g4bASH",
  "key10": "2iRvJ79VZpKUXKBcyA7dHzFDb4XQDYYZSk1HP91i6jhTpJDyjBCi6oZRgBRd854eJH15RVopMkoDSGFikH7cxvmf",
  "key11": "ELo42giBAFogvq1j2vvBTBZ5apzkdoSba4MEcNejmRBZxn2NuxmZJmB9TnFtLo4uszaGQ5uD97s6wH4e2jVTcem",
  "key12": "27kVDJjLg8nm7RfSCbqAvGZbDDPqmE49Ccw1CAWJeVYPWsThxj56wmHvC9MiLbt1G6Gr2bfzpXuPhqdVWzqJPxFj",
  "key13": "3Tq7QmnLh2wnixvUanSfAhG53btQiDFwRZgzwm3oB3PyHoZSe4nY5jaRvkcGid3UF5L7rPNJs5P3SdXVi8P3V1ck",
  "key14": "54iXdThonRxpdjY72bFihYNFonNbWFS63QySRgmh7JtrUjEy59BLpifkMxKha4PXectrFvii4ftEVVqm78MVzyfW",
  "key15": "3XcXVtrc8FRbrUkAgLEiyqhrpzfkmt1wKDPHkDWwq6GPeCnv4vobAwsrcJnZtAwcaXgLkMjviFWdF9WAehTU8VhH",
  "key16": "4TJH1tWyNrGANdgmyCPLj9Pu8RaNn3qdQrBSimD7NmRJ3y4UwYLKAMYr648FKcJEpmGnHRo6nezyxPaYhdSJh82a",
  "key17": "LgcBagfKNVXx3tzXCEn8ysFMeaJtpnDczJcsx73bd82hemf7cU1TzweNSYAXneX1FunZNTgz8bRUEyxF9tK2f24",
  "key18": "NNK6FmUqSWLWzWnmuR2wf2kSx9yLqBv79mbJESNv9qJwhhL5F6GQ9acE5Xbpt2zmvurGqvNw1SrmXkFpFh36ZPh",
  "key19": "3BQNZyHsBXMBViEuc3vDePXpVhZqg8zAFEfd3D84KDe3Whv2LWNhCQG3YuhaQ2h5vEiPjwiJAqCDRRgvhvMQYTaY",
  "key20": "dyiuzrBKB9AcvWmnVZFr3vSJ4nKwpTh7Le7YyxQJgbY8pCE4ttQPNwHLc5pQjYbnjhtc6nYNf1dtzwMDUiFqR4U",
  "key21": "4i5qtJC4dx7UzqNB6rFbWp3AtXEhgk1cHMRenZLj4Vmq7a4VxV6XpRXMXn1z1ZJhspiAVE1bFkFwM3LQ3pboyvE5",
  "key22": "CGzoMSfTMQSMZxjdPrHk8ZWVqksHRXXf9v1go8w7eELZZEX4C1dLK8C7aXVLYJhkqiDn8J4rZuD3Z6M8EZnLsMP",
  "key23": "2riXvn5jHpjQ4iFy5qPYXfV7MJuXnssjHVvgyNHyoxRJvXJdrGzvKGNoqayxawACPPBPC3q8tkqE3kFdPZvx3MrN",
  "key24": "2FRo9ENi1yFjtJbQfaAz8rbZrp3DTmvJSKvWrTtAsxhU7WqUAap8i338M1VUCz5RdUgjfsA4fZcWkzm9sCXxqxUs"
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
