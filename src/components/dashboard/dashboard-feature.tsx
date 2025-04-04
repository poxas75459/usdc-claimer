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
    "cp6p7JNsLJBmsPK5eZnzpPCJ6usKQXP1ZuyeVBrRrrKn5qVjsH8rfNuffGN8zSZ6tU8yyEn84uRdbT8fDvjKdKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kw9R1oR4vJB71gg7N9uXYVANMYwX7pNZ5hmqoc5XosWwBtcxrjTo2zrjsNpK2KFERV1RhQkCo7nNukju7ot1SEd",
  "key1": "2pA4cCtTgZNksf33XjKQVzNbRUV43MUyfzEvoTiTF4h71dbitoFZiZvGi9gA5WV9WUECmn5Ug4K7gXT3A4mHBwgG",
  "key2": "3DgRBrcLgsnQTwHiF4Np8VZXwoBibRBv65a1LU6Vycp66QQ8KaSvRqFRRo3S6PKQhpQg9vkvQtakWqi6cCHfVcyd",
  "key3": "rxzKkWJDtCUQW3UfpFSN6zeQwA6CNdEuBHVXZ3Dp6qZhtcqHyiNik9VRXEhn2bZmxXkSoSVedhHp8dg3yJ7vafy",
  "key4": "2gymYrECNXMoDecAQhAkxP5xRKd1K9WkHNYcWxCwh2PjEuU92Ccf3XFY25E2K7vyawc5azVvQf7uZyqXYuNzDm4U",
  "key5": "22nK7XpLCj4oWZDbYskgZxQtyoVumiwX3XRqKrP7aDJ3H5VhpedzCcwrkAoEr69SXpshNEMdR9FZeNTHJYdmoJoQ",
  "key6": "WdEAeW15Y27QVNPn7HNbwJhZ6zht2YA38iRrhswpxHSdxMMiS25dDrhJi9vBKj6V2KUJ3EJidZC2Z4nRF8U51my",
  "key7": "62Km3zys9DbQU8fPj5BNXWbFTywPK8E4vaRD8EQRyuDP7YH73SAB7gSAoipCGd6ZaFxKZtmSKLCQE4mdyYReFrrA",
  "key8": "RvEULF5AgjmC1bC52MSQbef8ihMZDMT9vGdo2WPSENako9245mxZUNrXJKXWCrhhXhvG3V8yvBLD3FPzxwELJoY",
  "key9": "5ZE6ZVwTfMuvsz25Fd2B5MViHssoMo1rqj4U1mJxtNCTbTt7c2JAW67vYtWLyHTqUBbHboWa6d7rqDyetd75DHQe",
  "key10": "2dGPejX8hmYrvNwZyWzVcvkB9w7TiaZtAqsJGnPGe8fotfLS5vY8VAiuVLjQwGYvH5YZ5msbJCbe8oVeSstnV6Dt",
  "key11": "54SKybZSTjgCz7EgiKLkGJf28SNrJpa7DZ2e3jWdPvEfSYbg5MheLr1z4dP28wxkTdZdWsAnzvJn5RZ2cYYFqtA1",
  "key12": "3447aZcbTgkPzfqHeFp7HvhUKTZJLedzsi85uuY6XdtJUwC2PqB2eXhqH3WrvE3YfZTRkV1AkKUnMQFKxNqqLJH",
  "key13": "2cAsSLrSgVhhdP8t7v96LXw5DNd6je2mzcsyHgN7f8EFNt2jtqmKxK4eSbDncFxKZzkzLz4vHLV8BFo2cURWoKh2",
  "key14": "4vKuCVKA2XYJctuUGBUzbuEUw6jQ48hFasLBQcUUsNY37UKAMcQpj57N14QijLdfLsnixEvRFxbDqb6zAyNVsX65",
  "key15": "4qfvWNq3oKjLN1UvKTvWzUL1gvv9wkkYMnvyt9J12CJUNparJh9zubN8mQc7FLLhMZECL3wcazviDQy27cgorvPw",
  "key16": "2V68YbWcgYWLRFjuqLJpMTdkNb4EuVMYyXu4j2Zkozp14aE156xFmei6AaUFyLG7cjRQnq8bJjQAXJ7kbYfyfieY",
  "key17": "zVsSZLmGvRdttAvwSuQ7zAWCpja4gppAfkYarAzYhHVyULYKF5RwQt2ReJmcsP5mbf8NNAqMnbaNnx73Peh3FbX",
  "key18": "4QPzwt1f4q4jnVDcUq1Dtjd8bTQGoffQ1L8oZmb9m3jT8DrXMPT9vgiNPLLEJ223natdLQdyrxePki4yXLwezYgB",
  "key19": "27LkPiqkXcUP6jHEZtiEmnGUJkGC2BZfrxZgWkcULk4URnWj3GiQ6yW7NPqY4M3iDxZ4BmckMZmDa2WG3x3vmvjE",
  "key20": "4YSNYrv7VcYNzTdj1L1QwHFi8BcCbk1rsSM2a8PLECFWn2UcAwAfTT9Tsp3yeXYeJxYKBrUWqNJACLJzHq5JqLjh",
  "key21": "4YstZxE5DDmwbaYqcfVXaU8p5KEV2T5Y7izYHFaUQmpbZNU3ZA5T69RtzLvbCVehufWkdeTJVAzaRLMi4FASzvBK",
  "key22": "2kUNxQJwXMoFtUi9NyYS1fDyzsvmqrciG1ZfUuMRjMg6kQToCYAxipQiHwvyybmjRp19fjRhdCtwDJ9ojG8XpkWX",
  "key23": "Zt7r67Xngi3yKMeSpszm8AFdKW3eyL49gWVzHtoND8eXaLShHqkTVfS9ucFADmckCCzg8oS6W1nun2RV3s6yfZU",
  "key24": "2cQdyLXhpmJDLVZfUCtPxPJu7TejqTWDAKqcrP5JZAYspcG15e72YiNZqKktKFjB6Ta3G4mxTVi86Cr7zL3wD5p8",
  "key25": "2S2swN67gBZVSLAngWDSKMuhGyrWY4fBnNCS9RjiHnsKLZvYTXhhLkPVURCCuyjF6f4V5WxF2AvyXPZHTcu9DuHr",
  "key26": "5zzbbhc9si1ewm33jJMGsp9tk4QGbWBKtiCZRdZnB8CSYzn4ttouV5D97S8ziiLBgSn4esNvDWiJiJLw1JMURKNX",
  "key27": "4PSeQDQbggtEb7aJgKtxEHaZRCrg8EodK6t2HCdGdY7i9wcD9sHG9tqJuwh3j5DkmK1xysyX4GKCLxTz6awHqh7C",
  "key28": "5TY7nwVmMXd27uuHYXavGiKMRhvCDEkYwXfb8GMBiCrqjDSAM7UeDHASLAUYFdiYpUqrLXrigSGe4X6q4uDRUfSq",
  "key29": "4fqisduzHFRCbcwfsGhs2imQvikJhvgErgwqVV9uUt2QUYYGTy1pm393e9Awatn5mLxKLDh9AvBkc7xmKys6hi2e"
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
