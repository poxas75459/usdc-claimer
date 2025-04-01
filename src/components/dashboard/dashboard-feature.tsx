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
    "3JwRBqNrfzGutxsndLJaCp6QqP2KGBDwwpRvJEFyc7ACK1EBpUKj67D5JKytAbqqZ8WqXvnRLbEGgohZwiiHJvw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D2WN7EzeZTN75yL1Gsr7U8ZNFDST9DUh3o8AtXp61Z3ZEQdYCGP7d9ntFRzzmweATjbqF9Wd8WGBzt3wXSpF3RB",
  "key1": "5GLLGF5TrDZwUkGPgzTKyjhS4V7FPmiZVh41eCnKnTkK4RZrkGx4aDC2RQDWrjekTJc6puL48fi2DAV6gYCAfZjD",
  "key2": "61GV3moMkGvzpAMhWEQ3TnDJmgh22XAcJC4YWVjyGXdrGDWPo45UvBcvMCv2qnASZF9PnwxktPEYFEcq5GzsjB9b",
  "key3": "4U5MuZWoEiyHcmu9fFDx7eyGScKqXxMSC63QuE74MQKamm7jittnmAgmGLjJXdqtU3P7fCc8PffcxVeA8SixqDaD",
  "key4": "3kUpa9nz8B5Jt3rNVTjPPWo9nWYYK1KiscBVh9LMWKGgR3736MENTNu78YaA2XHY5cSQ5S9YAbwP7ZeQtT7GPBTT",
  "key5": "36M7anqJJupvk8HNTMLgLGDoBLCSJf3eeBAb1k9Y6GoLJP5j49HDUnb2rB7EmVhifGTMrPeAZBUYbrYR4gcnWsCE",
  "key6": "5G7FfgSRy8J1qAThSS1bi1gSyXkosmx5MJXjP2oj68zzkGeQTejF9DveLvbzmcSZMAPXP2xzAodmGy7EiUXy25Yy",
  "key7": "nADeK7ibJhGgyDKzWfu3FpKw5u2tqZjgLnNwp5TXoLpqMjHM6mGdA6J5UCNeWZeVa55eyevf22aDsQWDByEgtJE",
  "key8": "5GLQWVATxT6ytzNramQXSVij1U2A1hM9Dnua212MgZhhrEJj1tte2XX9kog7nyNUdAwGc8FMbTmMSNRTGzqcSFsf",
  "key9": "53SbyedTXardsFMpzxCgvttFVwGXP3XjZZQBUzTVXkzHAMq2zNBZDvGcashvnNetDfqMZZuF1o4bAUxKrJHyN2dn",
  "key10": "HqJPtqcS4DpkGhQQwn1sUE2bD1RuCdNLgfWAPkXaA8pYW1NCkaWwCwCfZRstfzxRHDjVampT9uCpFcvQXSCTYqo",
  "key11": "5mEh5AmFYe98aftPfHxhJv36Y3H34gnr6KRJzYEiw8siku6U3JpFX8uyHLQoariH8h65NuF72ZfLvqoJeidR3KVe",
  "key12": "3DKG9LpbuQeX4mmhn93W8Z12gcdcamJUSh4PhuxDEVHNqEkNLzJpjREbgg1P8EpeWpEGQXUxnXzK3Y4qqPKBvG1u",
  "key13": "8AM6yDSaSE33HjBH7Wi1noVJBsDmwBxR4wzy54pSqjDEd8Q3quJKhiwMUnfRi8secq7HdYJG6hR2LJAbNrotFWx",
  "key14": "j5bde8XoUHhiBddkAF8Ruh9Ex26bYNX2ESoQX6sVbMjmesRqViYvNfBieToPtQrUVn4AQmGCzqS4pR4NE7bkGwv",
  "key15": "4wg8nYzPnzLWbyjyCiSno1dAoQpNo1qR38GjAw4WnUQzhkxqAC3iiniZb6fA79PDmix5udiGhiS3c9jkCF7GVeBE",
  "key16": "5tWAnxmknsJBy85QL8mHswyr7rec1mH7M8ZfZah2wW61hPzYwmiiwzo6MKtbhzCbJSb9cjzyfrNtWacymTaCP41v",
  "key17": "3yTLvJXL9AV2py3hCkkq2h7687mFsQKompzPhT3k4Cr5izeNYJtxAdPYB3yoKFiGjvJeB4oRwKZsu69YXtC5YApN",
  "key18": "5inzK6yFqgkNrVCa9dXDgGfyDtsfjwcuRTTvtWCXiLs4L2wGALwFB9SFTR4rerkEGENnFKo7rJoyur1WFXnKwdnC",
  "key19": "3yC8Povjs4rTopit2ZkLqtCJ78qYU6YNu7bzG4bZHeWmeg3FMN86BpVQUMSHsiHAyxjfPv7TbqS6NpqWAUrZfYeL",
  "key20": "5bhH8Nc1Ei4F8tR8n5kJrN2UXQ6zQ72XBQPTMZEsEd11V4Dkxb55UGM9NRKvsNgGJBxb6YDC6TuDzN4acLfHQWnW",
  "key21": "5ofv5CPYPri4wLD3m9n4AVY7a7oCDVDUDYrvfKrCdHShD5THo5chfEZRwuawXBRutDWD8NnYtVTk5Nf9eFD93Me6",
  "key22": "4GcT1LSyYnwQUgDAXWSjrYGq6KNjLZQoLZdgyFpEgHgmEbwWGBRN3Pn3iZ68RLUJbv3v38u2mmkva5ovx1KBuWnh",
  "key23": "3G8k9MwzFbjsNMYeDexkaLKsm6qYqjaBwvUAa3dFwhDQZ8PfBjPnREbGQK8RFbW7nZD7pyHoeUUzkFwq3rwt9dXo",
  "key24": "3zzWpJduDiK1CC1pGGgbNW7fqiAczP1g3Fkz8pyrHkpvXeFPujutV1zFiq7Dt245CsV7J1b7XZXsC523bZAhbwet",
  "key25": "3V1L45CzGUVSqNXDrd7JmgQBeucdrfuFS38wfc8Jph85tz9KNaUobvikFt7AKxW6PYv7SMdd4cMcGNkcb9diUFmB",
  "key26": "2KrerBtbTK5ceEmUDhg8351aroZtnJCDkGEoVXPutDPkVUibVsJapq136QH5bRgNxhpBnB1PZGgLHVPqVKx9XHzM",
  "key27": "4gnBwznRWtQgefYNC2qCU72h5YePbxEcnsV6UvkKuVgVYt6enUobXxksUhcSG1tBDAw7ygNhED1PQFdYdizUMUok",
  "key28": "5iTWyi7sVMCjkPToQpagwv4iMFCgwjp5hFGMvAU8VZUv8FfKEZrM6Vf4iwH14PYVpcxHF98isVouyUPjCWhS9qb9",
  "key29": "LQUNzSkUh6fqoPydPtg5SzAS2rxbZtjAkCLd7c4VuhspgxABzxyAzStnJe2n98GHmNmGETqhVWokpUm44VBXfeg",
  "key30": "2dCKLbyuVqzKSf8CkgMQTrEe5vmaEjJ6pAJeC7wnxQmsX4ADLZXuv65xwiHavBajf33YhkN5d5kCdfivyxZqRfwM",
  "key31": "29DSAsa1E1jmCkXmExVSQywzMsjg5fWppBDtj5mD4qbWXNnCFtSP44vVBtFipPzZBdxGRqYc6Q7t7SGcCz1Ntv19",
  "key32": "5XoeTH9eP2s26MMbwd879RT7rMz6q7qKh3UkqJDnYc1dKcTpuHfK2aArbzvzE2ymwZAfAgjFtBZkcCGqvJtUktwr"
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
