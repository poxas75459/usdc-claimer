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
    "3uaLEZE3m1xmve4KomEJFvHBftz5xsm5i76ACmqwj7PmDZfKpfsmkn9CxjY6J6wqf87yCTBi4hNdxVL9CNHMuCb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Jji9yFcHLLGx2gubxKHCX3aBP1iEe5PThTycXHtX4YR8H8xBMGfwrGUgW4233gKCHQw3qNPU2Pm8iLtj8JFQ1U",
  "key1": "ShF2Vg4Xj5Zo6JdcEEF51w6ZAm5vrU74bbTGaiZGEjW8pMmakQvKswV7wfZgupDNPdxzrrimzv4n4NUvbQcvANB",
  "key2": "2Ws7RjgVpFFLEovXyY6SUEEowFA2UvsuFvAyPdmKiXgQxvoBQYm6KTYccGrPJHhpHwMEgnQPV7W1y9Q3mPG2Dz8H",
  "key3": "2svHdaDgbbcRJ8mAwzRZzuyao5iL4VZKd1jndBthLgJMw9f4zKJDgTexgNQG1Vt4CeTz5Pha57rWXvKynvy62b9H",
  "key4": "PQeBLgEohh54PGcsuVi452cisahitbQqjebqCHXQTBf6ut3FXPr3hzGyftSFjj24UuYZL6AYSsBqhcVXsTaZYNG",
  "key5": "5Q6wxxcL9sbEAuCdK8iq8KHoT2f6M5MgibgPy2YFA6YWpJUraV3StCAs9JJeHV77RZeEhC7mmrVmCUynapAoxXyK",
  "key6": "2W51tfH8XcJLFus4fdyiAsaSHSUnEJWvj4KsVzq84PhbXGoAYFQnDVVxLMrXevPqk5Edongfj82udTukBJwVXYPW",
  "key7": "456RgUTLh8d6kPhcvJPpE1qnPsysmmjRshsrE3EBE1UczpRd8XxqhKfe2aFumvzk4FXd4GfEEeXxqSLUAu31ryS4",
  "key8": "5jeGwBA4Guazd1BfYXqPbTwv3m4bKjCbs8pZQ678QtAtrQYZf69atg1ZgX7UXTCkQMEsQZsdJWkkyRtR7PejdF41",
  "key9": "9knKZEx7FBARRSKYGwiEVw5dW9g3uTRbUgqvKVc8FezRo6jRGqWcgPdmB4JUKh24y5snGHoeTyRvLUD1himaKd4",
  "key10": "64c5F3RrnoziH7TfNn1gEAcvzSPruF3fFCMnZmZJWM7jd6XxZBVA9ekQhgRw6C3kQQYnXAosqxLAjZ6TmHbgLyVf",
  "key11": "kc7D7LSZFU4mwosWBNdR7TQuj3jP5W9zNj1cubVfwdsPVbrXYgS6DhyT5mZ6hJ2QWrutquHiMryUSDHSUqCdz1v",
  "key12": "Wkivbewvyw1HgieGq6Jjw58N8RDavDhGNUfzqkGK1Yb9mCrH3VCzBRDciViEu9YiFXypF4PQgBxXtTiSd4sNt8y",
  "key13": "4VeFR7wxS8WKKqVYyAJcWA9h985usjgcWDq4rFX8vK7xkKXTaE5QvPAKd2dacNfpz2eiuG1C3dguhFNwDLeFGHZ1",
  "key14": "5xPWtRqcjRHkJCKtXFv7PkqCdjh6Yqnx2UZjQgXcx5BQorEm6HiSyyqQahZhDc6AWM91kQvnH179H7nHPpaLBHYZ",
  "key15": "49XdXLM1HwueCZrP8oSC7ASQJEfLKdRkgBWnurAuhxwZJdfFZxiQbE3KQMvRrDpscT1ZKXeDRMoC46SNvx2L8bRp",
  "key16": "2U8bBq369vUzEBk6FbTj3dx72daHXXkaYPkVaDp2JbKsF3rgrV1mv4Bgj9DXeoCTZrqgnpiN46V2snduwLFgvzJq",
  "key17": "3hc82jW8waux6LyuezKjELbjkVpuud94zb6mG8Yw7PyY95CSDKbZ2sPGVKrEPhmBBU3xoyXQDq6kSWDHkAhxbEdP",
  "key18": "5SViX2DgdM8Pp62axsFyad6CiBp4N99iEo41rFDiVicCeLtmBeBop86sKsGDJa9eLj992m753oKS7a5Sn2hSYgtP",
  "key19": "3Y9ctnvQetgZ6Gpq3G1oyHqygULuftZnQqkJokDbBuQ98sCzgvwazkasp1dRnTfzVF34iggpNxXjm1iM1cCzeheF",
  "key20": "2H2qEa4ZxucrbvPC8vtyMybCJXsPtAzg4cESZY5FZt5zEDVPWxjXyYRMqBEebt36KsmDyfjWoe7hM8FW69BC8HDb",
  "key21": "2KZf6KYpckMF9H6h3aXYxLtoGxteogrJnMETbiZD9kZJH1JWZ4y4Pr5BGJExqUwd7HoFyVmRy5d74sujTXZhhwor",
  "key22": "2gBwDc43qefgs5p17ccQLAYiGJ7ihTsrmkjfQqQmRoS688hXEq9N64C5aEiHznD1HZDwEBTrx4NTTtB7e4JHgLcq",
  "key23": "35B9FjoDKjy2Y4QBWvWWr7VPGBdwzqKpET94soNdfv3PoYQStmTk2fB56ZuKquZUyhPfFnhSGGJTip3mXu1wuiNY",
  "key24": "24nNVRs49qEoDA7rkFs2fo2DPfFNATJL7AAxg3bwPKXoAeo5ZPeYsTcBZT722EPy8YSHMNsxGwQp6gWcUR3Ha9Tk",
  "key25": "31dXQc7rm54Ar4vAQgw6qaMbaGA9dg7z33JfWDGpPPizTzAeFh5skaQaTbLRGoXcuMzmyA6YZbCHY7oiVzHKSGLJ",
  "key26": "3eed9nswn3ZZT1y1W6Bj7wX6zWSSN4JLMeinXf7oyUMPTACNxZyXHD2kR46kxhTP5bbd8hc4D6KcnCstYG366WYr",
  "key27": "MS6ve24BxJqN1QsWsyCJrWgpw6W2E9UMsrXsZxTdpN12u2wY53Jbo9xSwWJYidcHyLpQ5BqshotJuC32vciRg5m",
  "key28": "w3Le6AXdXcAEnewF4e5KLyXJi4qfPk1RGigf5EnjKHByGtFiVrKr7HsDNTLqQ9SSpyy4PjWZQRaPdiFuWsSRTWK",
  "key29": "3PEfJyyEFd5ASFXj3zDSrXjxt75KMMbcBG3aC7GFdnybrseZsUg3GdPq51pSz8jERk6gGiHrTQb7ReMdqzMuEw2R",
  "key30": "2gmB9jVXwkMjfa9X4buLQJPyYuyBaCRsraa13d4Z63gHb9EtMA2kjFcAKLoNTeWvE5yD5ikoMEFGE2NBaok1LgCg",
  "key31": "2svpNpks4SKJkFS1vs1sDkeXM5Pm37svjXSCvjj3sXV4kJxL4QYw6WnJt5QdJXZ2DyC2vVmgbJQ7zduDVM3A55zi"
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
