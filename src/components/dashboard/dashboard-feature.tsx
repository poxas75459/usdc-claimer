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
    "5nMzGhhUQWepCAbuMZd6giee976HZVz8Pe5EZ7PHSZzUmexX4b5BxkHnd9TAjoHJWsfbi5sd1qmnpHMnYkPpkufg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GN2SZ3jBenuRMz4svLS8zQxBCrXr2vi5GmJw2mk5QJXqR8LHAqHSYSs35NxDbnEoTm5fLkzvRmC9bQz6ufva7fz",
  "key1": "3D3dDDAqEy43eeyc9hPpmtV85WiabttBxgC4hHq71Vk2bNVmoFNu9D69fHyGau4mtXH9REMCV9YHEYJzJPk2NTf",
  "key2": "dpDLAv7hwj9S9t6gWMeV7xjYKLomc2CyAaAYfbSpP5RgV3q9QaZ9oa947F26TkXZqs2Upy9nSok6L27Nn7BFtyr",
  "key3": "39YRd14Q99CRd9f7yQC7JoN7LqAMjnZH7ZUYeK4y5uy7wEeyNKCqeyr8V3zSzPP6n2AYnjX3iqwCc5TjQVxmFXGH",
  "key4": "2V2AdAztvUMbh9oVyPRc8LKGJhLjncZuJhintBfu6tx31TVxypdgDC2KBD7cQ41WJUv3H4LhsSccg6kYc2zCMPSW",
  "key5": "KDoV8AKizApXrkuXyJog15wXKhHfsMjD8FjXsueJ27ppywYimDEhSZFLJTc7eq2djmTgzG5SqbQoebXL2bJrZ9P",
  "key6": "4CeLca1bcUkbGNXocaJozdWu9RH4zz7y1ChYYhnSAo6wtXF3HiV9929CYqAAvjcctNNj5NVkXg34d1bCVF6PgjQM",
  "key7": "aym69yVfSkCeu1YaopLkWwAVJj9pFv22yn8FMsmmvWruEeT8gByv6KQymqN3eewtSCuhueuPP2DN7mitYb6j6oi",
  "key8": "2BaKfjQvEszLSHhYmxQRSQkiti7iibRwFKzaKGAJqHHtGkXYAxy6nTxZEsubZbCw73Fdp3odVfeH4HdwBt69stoZ",
  "key9": "3Nu6e6fsT5L3msnVGuPCvgUFXt194PWyPh7WdFpLudBRLufZp7RswjLoQHZGtwH3QjjJPUBWVrbT8Xq8jptqt47R",
  "key10": "yzyCnTniF49F5FSuwTN8Jd13Juadv3a3HftskKNyw4D9aRhhZ48n5DgdVUWtRziYtMvy45NUKGZcLmDaYKZ223m",
  "key11": "5wubCP7LdUcfBHF3H52dvEPjZsroye3WvBjzCixzvCaEz4z98wwZ5n7TGxHuMqv9eANRcbU3Lyyt89EcUcjU3ep4",
  "key12": "2LmamqMKUkKXb9dLFCNLCdSDsvYb8dCRz4thXAoydkLvNgMNyQW5bPazc3aGXj7eSHAX9S3XTsEEgyXjuc6bMbse",
  "key13": "hvxqUZmQeJAspcZ5pkXMzc3jPL7Mvjg1wmK4Zh2jZDpkwtFArQjFwXTm1WmQpRj4PzZj6U1dQrrjNT8y9bJCDVu",
  "key14": "24wiG1PTzGKc8HuTyYhdEAZX8FSCJx3uW8Wjyg9SMGwEqrrLpcmXFfLf9xEo2Axaq8cnkrPsZhHPEKQ8FAUFCfh5",
  "key15": "3X3GWoio3aEHs9TYm9iQvv7XPyE4uxPT6VaEkEywpopQMtr3jByCdPrNtfTnWk5qy5fto9Y8TRH1PKikBYP9quae",
  "key16": "23Lf8JecTeNktimBisAadWNva9AKpJ971jJ91zDrPCcZhAwwExrkxuk9xrsrnRFADJjKhcsoHwiwbYe2QaYpmd76",
  "key17": "4vqNKzRFrE6mZDGztLBse3uqvpAt1HjAb4YQYhCzsmZ1MPcDrNrNKPqKttHU5xXrMzH2VLeBeGc78tgS9TSXQtYD",
  "key18": "5nVD8k4qvbiohm3jsVtr4XtB8oprheoW8TijupAvBA2i3QUUiWPXWS91MXGfRqhmV6ph2ZYugp5oYdz4Zi3JBMYQ",
  "key19": "5ztdjjk6N16edzaAWN3uMzaoq9r2p8nxZC3nrTknzKVQ2Rw5MmbMSLHmo7kcuhYiSMaXRrxJjTTu3pR7nECst6q",
  "key20": "2PMxPR3QNsZVTumCYKnCgtfawRe3j96nUPxZqKQ2or1xUFeEcT8bKkW5eSG1cAEpz2VScf14BGdhnAzFGXDbKhAB",
  "key21": "5gK7ksMX2myViqR3KWemntfMVGnmvaHAgQpwt8YcBV9wBH5VtE1Lbc3VzB4jwqoDTBz2QPNXMtQ94T7V253DBEhK",
  "key22": "36qD6ouSrTzyJcJ86X3kWdz4AqGrtWtbE2dw8dJphmaLtkf64TfPF8orRmJB8mFjsXwWDWpLgHfzmXz8jfwwr7rF",
  "key23": "8aP3m2Xz128RbQQ9dAvA8MHr8KDwgANwt2oxv11FFXpGfcAS4M5idv8GeiCZCJ5QStPt2vJaMTnsrapPyDVUxSv",
  "key24": "2QGFW9h8XwB3tVWQUbDDTbfEqNhfXiUpsKbZMutCjk7w3r8rYGLjkoufuLLPTXuuUc4TuYmwebXQohiVxFJbUY8y",
  "key25": "2MMuZmv19awqaUW5xtyskRcJke5E6QfTUTQzwgRhWABYvdrfgJrT3XWGv1VA9LSX2PiJd67jJ4mpMXdWWT5m7Jzx",
  "key26": "2xcyVuVpmmkd19G9uuSXDa3sY9bsW6Ym621PTZJrwumCMbARGZq12QqbmbZ2Vb3jXZBioTt2uv3rupadA9PMDMvz",
  "key27": "26wSDbr1RFmzy5HUtoVFcSZPmZE9gpM1QqiTtn9QkfepkdZKdA2eWtzB3jeTsuqHWuRdisaA6BkzAdWsJCKj2RAL",
  "key28": "583aDnqgAKupfRwXxcTMAYVrjFnFKndW9HDKCdBKLpt6FghRkEdNgSpZVMduyRtXbBFSAsdDNPCttraoKXov8PSy",
  "key29": "4BTvCkVZsxPrkezw9SiF9AvB1Ew5Tng6JUAUFeBDUU8qLNMk1TqogGiHHTR8oYeTN5AKsfGYHzbve3851iVnQegk",
  "key30": "25eXADhgZysGweQ3GyquFcJNEm6N2qGmRPK7KeW1EiCtQuo4Y16PKn1j8kxseXq7esMNZqke9xLAYLhM5WzM9FaR"
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
