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
    "3sVrsHTSkENja9enZRJak1xcH414j25V6UknLxW3rd9KDMoTjgTissYxgcYxeFQPxHXNtHGV1XFzMLpxgKyS51Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UHiHrh2H1aKeUTsBqKJMQCrvwDo6UjFUzm6Hxxqr7VKt4XmGxEdp3uAdWpijEJ8sbWXzNVzjumPXESGynRNyQD7",
  "key1": "5hVooHozEJbsBkpwhJgWMuP4n5E9pdyUrhL7NWww9gyPFcEdZc6oJC3ad6A8ZxADwHMnNVPkoXGkAJJFk9GJ85yy",
  "key2": "JoqGhprZpp85T4s6E2geYNPj5qMiodoAFmpdT3TpHT1htXigTjFkLrmvvT2QmcfSUFdyizvrCerPoVcApssTFDr",
  "key3": "43dhh5aZ1ZptFdy1wcABAwCiTP4xruZJ6UVddaegr6KW16ou2Dhyts4YTo6vt9G3PWRjwGa3zwAbnYkoBfPU5L4d",
  "key4": "5VQ9JqY6gT3wXsB8mBeezDNoBkkuEWGC7dvMgkwgZLfUuyZuNDu7ACqhA4vvqujbvTb6FMDW3ek15xb76sEXWsPk",
  "key5": "2DSAvge6yh3Ey5pVLhNeJWtZTNP1LShFDTfUq4J3UMnc3yUWcb4ofBr3LSbmoeGxhdxS2h7tZsGx8rSuXdU2kgTX",
  "key6": "3x2Fd1oMaSZWU8BmbJCze65utjDCAnMwwob2UTCXUnhA2Vj9bH8qDNBsdUMtZ44emuie2vqw6K7YmtfEwbZp1f6F",
  "key7": "4cLxSpB21641B3zGd7ZrBiGSXevVLgXyt3u1SHUP1wAseXVRa7wdmGf3FdYzuJ2vHtRBbryLoP7Lpr4AqfGdQ94S",
  "key8": "41zk857y1eVerDvT55ne2QvpzgwbTQwq3cU3gZaSnq7mSGEdG9Bz2iMfG7JbbWJKn3kMFtzSqLDJZGXXb4ZuggQn",
  "key9": "2wapQz2nAS7wjjVBL6zngF5ZbfeBP4fTwJge6Eq5H3dx7p51jHmWyVedBs1nz7vkk9hEpeoARoJvYX63J9hwZZn1",
  "key10": "4zbHiqwm4e4ki25TcZbuEkxD7Sagfp2D9JYwvTgaKCjxms4JbgSdgEDwjGQrZjwdv6EvMKrm6bGGgP8q8AnbuGQu",
  "key11": "2inHEbhNG7LpL81Qin9fPkk2uFrhcPoZcwFyF2ecdvKkUNM7hhcjdVbmyaGZbxLzoEZdf8pxyGd6douhNkMdVUnh",
  "key12": "7FGzJhqmYZFyzibJzFEBj7bJ4tubWxiDKSwXE1P5bj5vExzYU7KUWLSKeCWYnVWtRFPzvSCpx5uFkVXhWfVSyGt",
  "key13": "2mzaeY1x5B3a3iUrf5bgsiwVk2qtBBrfXmJUT3W2DBRZ2dqh6Jukqbza2Y2EsqMpLyDswgdUUwxjyTrMAJ82cYPn",
  "key14": "3hXecsQ1nw8jJHnqdYod188kTayD8ZUgT8MXqPoarzQJNi7XSYAtpXTVB1uBBFB1eZvxXjH96Yff9anEwyZVLe5w",
  "key15": "41PDxhNh6DryDB62HgxcJEWqNQ8ZKb5w7VYCKmwAogwTtykKaJJr6bCFZJSMtu94u8dRsTSoDo7S8XXcT2pceQmv",
  "key16": "MyveCF9N7ZoV9ciDaFKZ3RMiKM9aA8Bw8FhEq8qAzTH3BsciNvx8d8h752JTaQbKjTjA6osENBRKCnXS8eSCYr6",
  "key17": "3d8WumTfq962W9na6hJFbPADYDcE58e3PXrbtACAmgnCpepffWVD9acqGjxLvVjbdNTkVN8J3ZV4PT4yNk32soVo",
  "key18": "3D6sZumzCh2o1YT4pFyGECULTdkvf5o6X6uS4RTqvE91pzgqb4bjVS29xGyC7vBPQxSKjwG19XWq6Ao7z8JHtuHw",
  "key19": "44gFGPQmKugDS9P1DKja7NnZczFVeWvkC47uASS6gEbcxYha61MHzLmEqBtpV8w38ox7jqru3drPsXYeqHrEmNT9",
  "key20": "3DaL6SBCN7CbJKoKbiZWHfrLu1a6D8Y8JWpodMc6wXVEYNDvxDAdU4mVx3iWWSLXogCWaqZm2nUJqjnpwvJNuXZ1",
  "key21": "3EvXkydx6dXGVPWf6Mzj7LiU2qNYibm8T1M3tZiACYYwwVc6yiKUURFaAbdNJX6b7VnR3CCRwZV9mg1iHSNe5DQi",
  "key22": "2XjYwxXAehY6hfnVBK76yfGSZk76kz7BQr3KkD35mvSCpjMukTfU2KzhZktKYTgbBca3TP2cJZQ711zjBE3fUHRq",
  "key23": "4ZoefZiGHCaB1KrxQQAgR3aRoDwqR2XZE6WwdecK6fiqQkXCsmiWQLiYkzSUxjttKfUH8WE2ujUjAdFGKBbhFhcq",
  "key24": "3KLbau44VBHAoDTKJWMxFTHxPy17uGqgkgKGJHadn5HsbwZxobUz4NzpSkBQWCU8eUHraLh55wFPt5jDPc2xjMHA",
  "key25": "2Z4Lz7aNa7ekNh5YV97iarZWF9WdVyFxVpRPQ1eRygcCiWNUBXodpsnZCxV9TNW8zBiTMgEiCpAhQ1GCQ4MAkUNb"
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
