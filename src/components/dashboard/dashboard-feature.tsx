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
    "5wJEeRf4p4Ye8sbm4tA1BxRZMJS7TCjosrhk6jdemtNsMK4BQZpXwsVKHmXtdaLJ7c89wdoGhAMsaZszqnzqTpff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gmLSZcNPQMeAyLaPySz4hdoFTuBNp4PE57ZzR9viq5XSriGScQZgHxg38x73Ww4qgGmBj3XDNsoMMJ5aM26kM4w",
  "key1": "37RtzHPmxJVQLBJB6nx67VBFQmCujjsonZSi7c2EaRGkXQPUV6iCjPzdvFYEBrM9PB9Riu48HTXtDBjb2pHCfM4m",
  "key2": "fkekWmxYFQRVNTAjPX1gDAkaJXjGUhWpQXYRjj8s94narZZVxem5rtsmK7Ff8w2WA5DVGbQ3eNFsvz9cHg2JhjK",
  "key3": "3bLFKXaGo5mkRp6XRcbEcV3QE433FEoypToD6igJagJMXQYsH6QadJW7MrpetjzjAv8mcpwA9VumGWUAj4ygB8sd",
  "key4": "3YfYAodNG6jsvF5P8NazLLbBKwe5SjSceE1CyypXSabZM1RPy7zj5jLcooLjVk2PqvJJb5c6MPoKy74uuykNZCRj",
  "key5": "94YE9G7SW2efJKu87PkKGV2i7u5hTcKojACDjsU8nfV29A327So8mfQFpo8gEWvoW1oxzjKSwWWWFDXiM1AMKMY",
  "key6": "Q8byVuzedUdypj7237PwWsMMmjT6NkTVvqdxJ9W4vVJAJrkpgGqcHhnzivShWWfMMpLKKhwdrNBPTFsKn1wmDEz",
  "key7": "bE98bYMCyF7PuB18tWSwWBMKdZWFrwgb7VitYU2vHEc5UcjQwgDhBpDw4p5KurQxj8GSrGxk5rP9s2faP5npVxa",
  "key8": "2xEnt1XFBqBF4gRRiEzyxR4yDtf4wSNWTNZyP2sutn5TAjmgpnrAPRhEq5saR7USY16DWmrVyzbCojJDSRtEMyYn",
  "key9": "372Pa7K2HafQhnkfPuBUR75kc3JL47D5zRGoKX5YrJV3QsNKf9LgasWUC3PU4d8LpYqNWtyDyc7ECrqrzwip8ajP",
  "key10": "4BAphV7zmtGKohn4ru6QQZQiJLKfjvYWRDZG1GUyKtzeeMhWN2ecpf55cXp8yWTXFReG4PDGDruJhRPxcKz367df",
  "key11": "22K1tupLyedhSJLomCkCG3UHVBwwWYyBpQMS9QXET1j8iwZAp2msaiB8ZXQUQjBxNM3EAhTwu8QvGLhzAEasKr1D",
  "key12": "3cU1XswgvEUBY7zwt4gJhvJj859ND59Z7C1Xp6YcYnt3gaTSs24LPfEQTp59tu5Yfa3BU1hvQw1pV9zNPF3bYEtN",
  "key13": "3JiAtGFcn9eYA3pwYpe5gJAHkN5iP1TQV9KzfdUUHbz5VjFhndpkYD1qZby5uYvudSuiBkesaS1BynqD6cqyHGP4",
  "key14": "4gsrK4sEj5svWqWv7nJwQrjjgqaBp3iTVqTFywnKD4JaMvqrNrW3TjeZUsMn1FeQBgDGHk2x98EAC6EZQ46s6AWU",
  "key15": "3W5dxkSEqaAJDcsBdKXbtFhYBnGqxsM7cfU3KB6qom8Rj9hmPXFWAvfJBqvnh5tAYu9iMmMTDFHhNtpfFxZPtZnB",
  "key16": "2aYN4dtTRsbUBNREooG2ARjtyNj2Thxv2Kpq2YkfCE7fJVtqhg9PCbkZvkrnxB5YLJbur5M5DKNkjcqu6CYXyMDw",
  "key17": "5aVc8XbjAepXk7TSnpLfX9aj7nECJREhsnkbjKHNLSLETeAJkoLU6J339wtMoyZhuBGqxbSAkoj87C9ELXPN2Ris",
  "key18": "5EcPnoVJuobF9pmvrCQdZNNZyQpxDvjZVeP3GrRGuWbuWiQFa2697yFdjidkjDYGMibzGHvMUShiocvkCVGjqVui",
  "key19": "kKf9pcf9nwebXcoTE4cNaCFinNSnNprMJ8ykHfMebd7hpEQtRwPNa9cv9t6ZVMRu3hjRNJXjfHCgfZ9fLXdzV16",
  "key20": "4C373vgpbmWwPGsBwtg6iZemp7K51DSq1qgzssrC7DPf569pNfLaDnKsHkvZdTwirMY2KSsr4967duY25dyWp724",
  "key21": "YMskrbxfWZUYLUXFhSrdLk5VGuqeAkdeCbbfwwqWzCmfWnHasuFdV9eNLvDxUDiCKmjEdYc5fkAqWs4nMfMACvH",
  "key22": "5964vHtA92eS7GZuzaasfk37S3iWe4QVybvk4VjLniPx844oQVL121BpsKXtTM2mZWZTGCqKdb2Jc685iFAnsqgU",
  "key23": "AuA8Zzyj6XyiniLhDioaXMrGVvMQRS2NzJYBpMKG4NHv2KLvMEHfgcPWrajLJ1Qjs7btBRQv24RuG8ZwbuvhG9J",
  "key24": "2f5dGunxpREoxp6oT6FsDykrj7mh2dddu4jdC77m4vexRU2bHE4uUhCuJwmGbpnqYb2Zamzdzfddz96UHtEZCi3G",
  "key25": "FH56zJUwnJS3g9NAXSjFFpTT9CYmf1XccBJtjeK9zym8MjuSrBK4nApBv2Y1yyUptjP7oaSbqUfHji2GkWqLmi8",
  "key26": "2DhT7DB2r7JA2QBABbNutL6KB8fJRHEvN5Pp3MmsVge46NxNhJz8KCuYwCH9sguNbigitZ1iiqZaEnsDX6RsSdg2",
  "key27": "5QNmebjPcsTrnd9dPNhA5JxannFP1VghFRXSWfTXMVhJ1bxAaaSNoCdCasGGLuPX5g57qzxJ8npCwEJJJqUUZYXv",
  "key28": "5Z8bQrWH8t9oRoC2LDzr5z68ofKBz65tvfHGedMWFccJnve8sBRSwCiRvWLjMtroiec9jMXT93G55XFMDa92mERd",
  "key29": "3sutQZUfpTYbAqDN5AkBZngPKZ7kiEYUhRkQcpTrM8cBYR8p2mqJQWnTc4KaD9h8jSUSzjmYVnEK7mfcYqJQU5fs",
  "key30": "49bt7yXaWMynqn7o4QvrbKFK4g8ze8VGYtW2nGa9pZgtRzQk9byE9A5NNebAGn1wmUnv2uZErZ2SrFWEAWfz4yRy"
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
