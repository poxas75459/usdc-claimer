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
    "5WLYNFKh3nUXnPuNeya4ocEBAsvhEipPsybY7LzFb6Vt6G4ENxo4ddMWHCHF5XVM8oxjDXUzYoipvvHbRYHbSgh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HiXWtcj5EdbdVC8CLNxwLUMuVD4ifVZAVo6qbFUDUGAW3twMREWsQ7hJ9cXAThvK4CGo8AWs8tJwxhJaeaYx57q",
  "key1": "2coo1UwgDq4brdLf2u1spDp5ndDH6NM7PMQZSfZYhwj4AupSWD6P3b4jMrUseFs6PrPVFGFWgZuwRTdnJrQaJqzf",
  "key2": "HBY9febfwdjgFWU8Fgk85XQCcEmZkBSekPkvDiw9HBBzxKmfNAzrrsYdziQoV2RSZvPowKKMTss5SfUFQ8KpeRX",
  "key3": "5d6L1Xsc8gmh89id3j8P1HDknRUwsy5R7k8UaGKGPa87Xq9pXZyVNBewgCWDNpTaicDUjGsZpDkZ3D1LVEqm5kbZ",
  "key4": "T767sP49wASh47YqTqbU1tK8bAbrtWQsKWdBmfwF7RegBXyhdMmbsK2p5q3iPNfsX4JNYK9Eb4mYzrNdbaU7WAV",
  "key5": "59TayADmV8xkG6EeVTCzkUapbVAQ8BKYnoXdvN7HH6U8ou4Kk3H6MyxMVmrCYtNFcuVKF57fThKE3aHSwTRcDLpS",
  "key6": "D7C42xcB1K1HCftntVrXsFY7Hg2DBWtPzU8an66djNYmb9Hk1RRRyH5mv35djuyRDDfEAx2q7gwGdHDgPL4XX3H",
  "key7": "5dd1Xxco6MCmAjngcBBTCZHtJSd1EMdCkhVy5LhEzeokeVUrRpJ52cSBLPyKnaBXK3CDRXqnqKwKriJPugDUdyUG",
  "key8": "3PH5VpvKEmRz359YhQpQasDS3MNmF5hriy2ed6ZpamiNPpaXoj19A3jB4tLwPQomSKT2WD3cZWHkCfJsbVeys8qF",
  "key9": "PgDHbfiNHrG7QrqouX7enfzM6VDVvbfF2Gd6c5GtkW9VsDFEV9zmDpyBpYNcRihXusw26qRNYC42zzrHjNPfLjA",
  "key10": "MJQEsLdDNrjypJcvcHuDAxRZ8jeEK5Sa1c7aR44RuihQZdEfXj9XfrHfJUKnKGAK2vAFHKUt6YQDL8K66zzi9j4",
  "key11": "34Q5rMX5kgM3x3V9aErCmQKFysFM1TpYUFaN57MHGenhQnakZteNSPnR96joayeFXwtWQvn3JNaUyvjTf3RvwmUs",
  "key12": "62DSXhjgpVnT3Ee3p9GcUUUDzARggkAzvQyXMFYZE7DMDBqvVWvcmtJ2NLfeb4cvx53VXA7WQJqRHihmgrK6sjBd",
  "key13": "4RnLESu4MoDAxBNjBCWhkSXhwYUPJBsDdNco1hzMTT1fMfzSRnKAGHX1nhnufddJgyKGdB9Trjh58nn73T67ApzW",
  "key14": "5vBp1CkTK9o8NSdXsbdbr9ju8gjbPSXE3WjNXTrhNzPoYfXqL8Y82xDTYmLqA7aW5YLjK6AsmKw8haZs6jAhfReZ",
  "key15": "3QNShJm2zs2R86y8ew9KXrEKXhm8uBgKUe2kfgpWQKvcwUWrbJs8d3SpimoYFsawxfhTAWPwnqFbp6LgaH53gkRt",
  "key16": "5fH5hyzb4oqiX37yejCCN8xaHv2LwVc7XfN2B3ifofcrCMHSbBVSn3AeJnt7qzeSh8emHk6LmyNXv7u76EbcSXh7",
  "key17": "61A8egwgsiJwJrjt3rw42VNEMznisgxfzZGcppdRuKUZFiFoLYDVYUfLujFmZjSzhZdgAiyc9egXxzM3Ajatgxdt",
  "key18": "qwqUyJ9tddVvoSAetFKLaFY3zr2JUvALJ7s56Dm86tJNbrDkgqd9gdgYANKTs5TeuAPFZWJ3GT7u36pqFf2cYjp",
  "key19": "zT8eQuh9fE6A7Gb6nySbY4hjViXvdkbgmgbwBRxGU5uTHdQqjjP5HCNvYq3d1WuXYtoFChMsgm8nTP2viqcHxj2",
  "key20": "2vkd7kMsGESB4bntjXhX7MxxqhrRghSnUBLFM7ERtH7Kr71yBPuD2wZA6XxYEXKLf9Xo32krp4vwpWTPPR3qDeut",
  "key21": "5XX9YNU4aSZE5Z1sscNvSNzYRzjRPmcLn4DiCDJ7A3XYjFpeAQxmuT2B7o2YNgWD5uW1m4bj94Db7RXBtPfahfRP",
  "key22": "3MV51WVC7dT1kbyLN6j4fjVgdAimdUZpPwUc3FdSjmGc7oNt8x3isKnyKhVRKX33EeXF8mQ1EuHd3QhdyjYV5hnU",
  "key23": "5c34SaAWzaNP12pnhzmppRM735ZWiRjHRcaGmdGpfXXxq2rHBmTegsN262Z3LfT39MnjphJ1ojZpGJoZKG8wrdz3",
  "key24": "5nNLQJsuT7qh9Mhb55ivkFWp2qZuLbd4ZuQhpo1mbHtGQQzWT5a8X3dYXr1NCKFViVjAXcftDv7RaEuE4EZjyVKJ",
  "key25": "3MLhsvTghHPrnjcCCJdo13HNRaCmzhtQM8HZhCbAX5oSpF3Pz5AjbW28acUxAQ6CawtG6RuqGj4tH6sDbrWdaJzt",
  "key26": "3UNKgmhXKPndUiMmK66RpfDUMApKnXSmrszTuqxGeA2Vcc7FwZo1nA6GArZzT3Z1aoyNQ2YgYNaekZJDXhhqT5TR",
  "key27": "2mbvJ5W6dHCy8qZtqHKtcSy4cCsTmMtgPdwkACpERAhBdKa7ntGFnFXmdu9Ucp9QrCVPpCu3ctnHV8qJtqeBhNmg",
  "key28": "3zQvF7HYa7X29EjkcprGYTyjQhPiWbnhEHt9qsnSGXuRN5ZZSzXgQZDqayJJbmfPA6tKaGPwi1yQ5xfYkz6k7jho",
  "key29": "5vhRnLyMcpiaFhRL57PXx9EL5fiUYQ36qHaGN6NthbvnQQNrxSLrt5h3Ky5JYsBAWq7fUWA3Zp9JHYdtjyZfhwrr",
  "key30": "5ZA6DrooM68HVVEjHcyPywfL9fEGKVjvYVwNhKMzowuf7W6QA1vukHjkh6Gqe3qpGyTCus7umdutgnmi8MdSPpYy",
  "key31": "2mkVbNcJZRU49kBzWTYKat5dS9YSEDfc2cAH4CyJNzfNuhPFnAJnA2Jbj2z45QtNm2udNLzPdamWG6eGfhET9msU"
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
