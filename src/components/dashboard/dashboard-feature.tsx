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
    "4Y6dNTdAxpv1pvZ22eE7ANR6QbXCGujBbm1keZWL6T2MTmQcffhjaaLzd8aYsniEty47SaAG3RoCtGG1occCC65J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AC1Fihhq6BmMr53rb8oP4rGZK5n6uYG96R69dWkg7B5SUvirEoqZuZhdC3CwuiC81usxpTnZavS5jwHTDWpEMcV",
  "key1": "3M6Tovnhmxo3xfkcxFDB7mHyJ76tLVmZPwXByEWHWL8VWvsm6wueEp5A1iHAGS3w2eu1xFBg8sqUFPYSs58kk8cH",
  "key2": "eG332sVL6W4wrYxvSLPJubbN6QNNQhAkSdTZYxvx5B8SM4nrVECqVQxY3kc4bNTJVjgPQHJJashmx9j3WFsf2hq",
  "key3": "3XoDfb9TFL5XtcEPozQqVp3fbXVZnHKBrAbR78MTsaBWn8efBqZF4r8Xcop9RkHPJ4CZAYvbtXHZeS2YjoqNsNKR",
  "key4": "3xphHCe4taXyYy9DNYZTkv1vEzui2eXvFJZ3caWHUFZwCskpnZ5XpeaB5tjHGokPbVtQWwTGjQWK4zikfJARLzRB",
  "key5": "56ifTJM85Mhkm1d9ezjjiqa9LMKKKkKKDbp3RDeD4dSSHC2FAhNQfcSvbbwUhddzUpguu3Qzv2G2neBBy7584vaV",
  "key6": "3QFTCjuEpTUjhikNKP5jbWimiiMNThxEFJo1DM73EDKY2LGszK9kagcvkGZh3wCBGqgi47QjEj34wQJNUQ1mT1wH",
  "key7": "4Fd1Ahb68WjSE87kNy9hBaGy9Zy9ggTB1pLSsrgmKDfbN3CcLj9FwQTvgjrXSaK2gc4qZrHyvTDEF8hBmjvoAmQ4",
  "key8": "3AGY4yTKW5FiARVYVV4resbGsHBHF4VANtHdvA5XjjS9vtiJ2B7t2LAsGvTrRCt8QCvoBpW5kBidZSdo3D6h2SvL",
  "key9": "27MLTryDPmw5gynm13AJrgHgVpJaC11svSxnoXRu41h265fSbyMCitMwvBswmfsZxRTfzgN92wC4ThZmdx22e2z4",
  "key10": "5Y9brMbps8gMYA7C1EkE4zWckxbhXg9U6tAGRn353TfemaX8Mz654YPyBupUraKUyP96ketXL66CLrxz6vXRHPwt",
  "key11": "4z5hMsTob3Rup1gk8iBr6LBfxWSitiWVQyuFLXFFhqu29GxJywxUceQLWMw9fZWkNdJANexmqfP3WujVUg3Qa6Hg",
  "key12": "mHJ56VmxnREjMDsj5fStE7emfbZzC9HbrNvHRSMWDfn79ATnoZxsocLEyTmqBRshDz9uRmRWdJHWTgnkMBiwSqT",
  "key13": "3uCk3phQ8zvh5y4K8CSUtZXDaJ3Mxu8Q18Fh2kfCjXdtiU72zmxS9sjaHReW7toAvXSP36S4FnLqNF2e41omzoVT",
  "key14": "2yUv2zWdocVqkEkUwv5JAzxsesvFpamZLKSe3sGFKPgzqjpF7nCE852zdgzPg77Hc43dBRKJoJckTmUkY7zUiND2",
  "key15": "J78d2yZZPZf2cDB4s5HrRWRf8ea6nsTiM8h9vYZ7U7h6u3hP4nortvUguTBh5VpRGi9sPPrpzAGQLrLvmWnG77D",
  "key16": "63sprghjxxdeTU8U9MRfnZSugDoBtPrArVmuYCuxVzXhX3rWNMvA9G2fXtXuqhcaqC7ZwCaw385Roidm4FektYaZ",
  "key17": "5v7fQNMK5eTorpVFTbewfkkF1V1pzg9copbYcQhuEzf1DkNKTtKnhEYqKsEYbeUPvTXAwLdWxmpJybLUSp61mXPX",
  "key18": "278aLCXbr9gXMbWqn16dTSpxw1HYehFgrgJ2ezWhpXLkN22rATnjDmfR5iY9BhfvUGT2sBbVJLXBis67oYd5hYTj",
  "key19": "4uR1gxgRwGfTT4muFNj3p5faxcfRytQQC7Ui3NGSdpdrfuykb1ojsgHndTVhPqf2Tib3232zrtETyFHB3k7wvvXQ",
  "key20": "2AacLwNLqnYmBWWLjwzt2uYsc9VbXpxc3ESLh5J7MwefcT5J7HD2GQmXqHM446ziTQQeAV434yWtFq9RrC56g6wg",
  "key21": "59CCYJF3zKYKXycpRCM3m9YDXFzKMvKKMCekciRiZDYmJSBpKTn5hemvy7r5Mry3cJhu19HxDy8aQFufDebo8qVw",
  "key22": "4puVNLJE4eYiDoHdpXfcu1s5A6kfzVNi1j7jja5YdGuseRnJGa8nJAuZgJNfQqVpAYn8Y9xkdeC1tsDJBM9wnoLS",
  "key23": "5winFCbLjPV3ksz3mpbiMXWQfEPyjDRr5L55rX6YQLRpGtoj7LPVMh7UqrpFEv7FBQ4pW75mmEoNWCy975RrRwoR",
  "key24": "fPnkm6qNynsgx1qmVbXmCKZQ67pZHstw6KdtA4CUpX4tSQTF4giTDTGCHcZEHaQcwiPwULDuCgFgQZx94Re8QoY",
  "key25": "8A1HsrhtbGNWcyKWjA3qZZLDZGRUvZNpAww1isTR9jxrgbzUpW74Eujqdf1TPUaj6ksbiNC1gQDvczKR93b4Bo9",
  "key26": "WspAXPmgu6RsRF7CKT4NoojUHYcjaEcC1X9FdmnPJdUC8rcXERbJgcAVkqKkSpz9ZzLxwbBAuRtWYFdh5xVvMhW"
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
