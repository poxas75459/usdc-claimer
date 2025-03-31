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
    "3i3L1KRwDwEUxLNBMmRSqaBsdpXsdRhunKT7qK9DjHnQicA6ytjo3MeV3KDh5Zigzwy9waXxwBTbAgMWP8J7RgNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sdk1NmAU55uXjmZ6qdRjnuS7iGCTU3QgrL1WaE5iVpxhpAyPM5rZsaynYQihsiqGvbowLEnuhMYMZFHKpPtANwH",
  "key1": "3SX7rqbsvtwALmpp9cjqLnhxxcT5MB5VFhUDUetPtKXnjVH5JQc8wFXXKvaAZshh45EQMXBuhuZPt118XhfvXdfc",
  "key2": "2HuWZPDPn8LmWZ3kMjvSt5FNmxapvsvHgM9gRKPgaijgzpJY1qxkn9tmwJSeDQaeNP2WfZt29wERciG5QdTrPuq7",
  "key3": "3T3sC2gRoqgvzRMx78Y6eUd25UFCThZTE4iQBzsod2YU39sngVeEWpbNk5JXTEd8WLWZHyBK6PhrMYqHdHPPGYLs",
  "key4": "3QqBSG6R6U4oABDyAAQii8oL4UrrfcoE9E8i2Y2mhGN6z3H61b3UBADNL9kuEHQ72pMMQxPvtwGQFe2sb5Yc7weH",
  "key5": "FDv1cJD4pnG7jqKdtGpAjaFWMZqrSEcVBM9jziCqZZcCB1LBC5RmVUm6d68FKQtDhSEmRk43nKiZKiUL3kJ32LJ",
  "key6": "5AZqQFDAHV6waoY8Dw6a6HXz8v3Lh72z9PWYCzAh8Zz3QdD6vS5UUQiaz9rcoNW4EseFwb2wN7j3dYiZ9jGmDXF8",
  "key7": "3Dh7KzkitufnRQAMncf7cXd8SNTA2DybSbqu9dkhRxw7deqAMi76eqdSLpURSfdQdjvmHCZBoLWpLCpCZseHQcYo",
  "key8": "Dtcq8QAiixsi9ebBGRpJ8VJjj9WCTdYsjrGahVaf3V4KGZN7AivDiqbgBYzV2AoTpjWR4egtiLhDegB3SttKBrY",
  "key9": "4mUixbj4XEyez8FEu7DRzD1iL8e6PTXreLYdvgK2kuxhdvzbj29TQxG8ZrpwftTMkZoZt4VHcbKkKY6qZf9rSa37",
  "key10": "3dLfJyscLjTUJ3ZwUg3p3655YMbm8rAKoZo2tDhtW4d4kLc8td7wEoUPWUECsUvcNfii8AbRYKN2z7cC8cUFes2U",
  "key11": "42YoMnWa3kPH5Ud1YuXUUkMSxXYEA3wuEANx9h6ACK1EueL6sNFnawLrSzGyRjZNJ7pnsBToXiGQ5ZBDXUBmnV1F",
  "key12": "3YM7oQETxEuty9CJ34g9TuUS7iC4Pgd4ASbvxuytuc5Sf2TM3UFGDDjCHx7RMM9Ayy3f5bXMvHvZpm7UVSpYsCkt",
  "key13": "65TXLUEht4Qxz1ANXB6qN4yQ9rJZdejshpMm5t4J5qrS65BStr8hTgW93xr99hBomqhriYpB9fPMj1mNnWJGtVi1",
  "key14": "3g3EBnT1S4j5RZvwP2YuJm8aQBku2fRBPe5QTuKBbpP2Y1uNd44ZjpBBNQobtmVR5rTTg46cnBmyDeyafFUBaP6z",
  "key15": "54GJ5c6uiVpKCoSZWneqVmZwLAxpGfc23XXvUiQUnJ67ac6P336NLcJDLPFAv6VbKJ61JNSmHeWEMMVjG9MtLPHd",
  "key16": "4q1K2pVa8s5becDttjJ6YMKtjnnqPr8cKK9KY7GwfZTmUbAkEjJF6eRD24P7nNSyLwMxdU2fMg5H5qW7swLJjfij",
  "key17": "5HyT2jJagerW9CUdjwQ8FaGFggM2bykKaGe8pnGKR4ChHDSRsGY67PnuhkoneT9BnjCgyfsZsDg5qwjzSjN7m6S6",
  "key18": "4NToC2s8A9vsJVotCnRU71Z1TTUUddweD7HCZNK3hNB95Bq29YXhV8qPu1ZN7sQUrTJ1Hf3BwJxpr9ggREVyBmz",
  "key19": "3XjYa7bYr6XpKRRJiguZ6sRhioK81SmwAS85vDdW6ZxMDxQnAmHNVmZBXXSQdvSxExdj1uxTUcXB9aLJXJohCndB",
  "key20": "2B22W5HeBdTW983e1jPQKA4jRT1fAKmqjuYt6aawyutxujKQzN7UhVQB8e2dpce1agJa6cegoGwqV4mp3G7JqFae",
  "key21": "2qnAsn8Rv2refiE7WUzPkcSyq4J3grngCxQDyDPF8NN9MhUa8W5pz6tjhcR5LSnXjNmP3oHi932uAUEwxYrCjDRe",
  "key22": "5eEv812EUWLVnwggLjdfhFKxqqfcAcZ8pJYjoL7uQRepE3X9SKqJhHj5BEfATXbCTkxYS7PBDGVkEjPgnuZC8pFi",
  "key23": "w522eA5vExWFkCVsPiC6DogR869D9hoKrV2PCaysmMMn2SAPJc689n72ZRKUeJexmyv38DqVs2129tSMmTQPPki",
  "key24": "3yZzk67LSAVxeat8TFn4Zd7LzegzAxEgzJRKuaspiSLy2t1iNDrL1W2Seum2L7e1fgkH57aDZ1cEhYEntYUtq8Xx",
  "key25": "4Ffq6w2GBYb65FBNRidbVTTZsg4sz9dS4XAHAmP13zeCRpYFoUqrU7LgdvcBvzLWgMe3217BBnuwV9C5zVQsh1t1",
  "key26": "3JVH3dfvfoq8Qhupo6nbwGr2PJV1SWvhF8T9C73ZbHuQ2HNHriJf17zdekP3Fp1MPsEb6itftMYETSTkqySB49DK",
  "key27": "3NWfnUR3ao4XNdCzogBtYawGbhEg4Tdw28PQS3D6yaGxM3aJzqvpZPqPHDL3BeNz5QmAKJ55X4buDhtKSnwrjcYq",
  "key28": "3btEnqgRdVxEYxHzoxEVGDM144c2Ke5UibX7GbzufKQnhfLn9vuJDwti1rsAJMSUjRHPFreeCdqn8qwrcapo54bM",
  "key29": "5HyMz4BVxquWm59sryVrvDSQ8aCVNe6LponFifYGfR6kSZqzN4X4tpdQzvLaj2n68CzrVQqP1rFnVCc5L39u6sEm",
  "key30": "5oZxojxQ4hAC99FgNA7n3W1WESYtriC6njmcRrYN5a8hztt2cU1fa8nTQkpE5Q7LjhQZ1nnuoATPwrgz13PmVnnJ",
  "key31": "21p5m1Hb9V5ran544tPtyiGBn5JT7xCFw9J7FbGuq4nEH13oEVjz4JLaGCwR6Yqyv97mS1q3StcJKxcgQJj49FuW",
  "key32": "PPK6U9vXDnkSNFsepFd1ezx5ArJeLnJqCHEXJTt2vZq6dM4kBJaQJA6c76V2PFfFUD9FJTWeb9KvqTPfB7RDsnL",
  "key33": "55PY8uhMUK2gbGyNQvxLfYkosEM88vdqmgiaKYYcKuT3XVpYmD3a6LaHoRX5yW6DaxExmnMQcBwYEZEGdu73zAR4",
  "key34": "AwBsDqVDVy8LVrLePwcnrLgsYwFobbPSdWccteTXFJsVn1uceMNXTma9461mtWeuvvfmXAQ7eUK6z4x6TtMAr8v",
  "key35": "3A4M8SLMk8ayvBPUbLpqVxpSRTxLqXertex6dHwZbZrEedFqHgXXsnQKiyvEWuDnJUbfJRnaktFnsyKZJs4HaWuu",
  "key36": "SuZJqdEJfqVg5xz4ss31m9oPhmaLArgAtHfzb1sjN8EGow48x6MfwjMXiYCKnY6UKYRM8gTW8hQ6EREqEeaYVEu"
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
