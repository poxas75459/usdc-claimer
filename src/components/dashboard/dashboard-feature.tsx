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
    "2QWH363Ma8XgckMWRzvA6f5d7sEhk7bM61ssJy2vG6toQqgfSvyUfWfVtC1aFW9TUmzuBbqisPtPshRbT4kkwFSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkmsepGQ8CfnLjzknqw5BTuPaK6NpiYFgfZ1bqVx45okHsCS7pAJk5hJkaE4EfRxhMxf7G25vR9zLpgEhxf7e6s",
  "key1": "2Fcs9Stz2kwSaEBicDixDjvgH8yy3wGwWDDRedBtPAR24udRg8BR6XgfRfxCX5jfCBcxAuUsyvSBGcuo4Hm2h5hz",
  "key2": "2pkb142pRWa3US3cMufq5Ld7ycEcxxjUayEg9MygnZGmUqv5bVf8S7e4dxaQLcHJRJzzqfNW3oA2suV1f33fdYyU",
  "key3": "67qt2b2jyxoT2vCyGnXLvZqkLz6sxwAu57CgEx5wBRkCVaqKcqZvAUNiHLicmxs2BMDzjPgxwovoXwVtMHq58SwF",
  "key4": "2iSRxhS9WPbeEtexQWBbFABw6rFxQgLuxSBe7JXTs1736Aj4xjZw2VrEDexBiiB2nDYVXnuRayQ2BLAwiwY9tWmG",
  "key5": "2MGr6WkTTFPjuSB3E1Bw6adgqX8Ndp1WyRi8gm5dm6cd1HUpZtjcwm6vuUcBV9S8iERyrGxzSm6snDKK8h9Bx4ce",
  "key6": "3kcipqCq9W3rRX8YejmEybb5GQc5kqyiwPNK9XzXFtRzXWDVhL6BfYHgvcActponwsMLNhr5McUuBDnx9fSXdR39",
  "key7": "4XxjTXPTTwmPnUwwpSWzDw7NA37LUJ7Pz2NuNSSambWHWgbc1tsQxoHDCgUKEdAGZnw3fD7V2e3LJ7BPzPjZZ65f",
  "key8": "2fULsaABQRjTjnzR9NemALnf7GP8MzJuDWvtUub13fMbp2zmRULVjkCUCzTpTqRGBxZX4XJ6TL94mYL9TadyjWnh",
  "key9": "U6AE9HK1Dudz99ZALfDcUBDkd23xMcpMEDQ3LXsMm9q46f4AU2iTF4qZnmKgfnSmJDbxWw5gsrnASxjMWzWuCGB",
  "key10": "2oFSsdtePQ8LNYs5zR49LNKRnTrGzygaxKPbDSjVgBU5a3PirqoAtC8AHRR9xagvALRAMx5zC488aYWzfo3ce8zV",
  "key11": "c3xvDsDfrVCcPJTQ2dzrYpBysgqVcnpCjLkQFQzrx98vF6JnhEfVi4JVf7r6uE158fZtkrkrNcheB5Yx1fmwyqB",
  "key12": "2wTMpHNpGWmm8BSE4oC3KvbT9eCy5EU7y3QKVk46r1L1K8GinKyR5aLiwbh49SM85xnVUMo6xgKJUsHVR2D6CqCi",
  "key13": "2umLWkHndw7AVuHyKUkG8eyE3kXZF3QquegRsVjsogEJzyW3ddvKHfqkPQQCRAFS9pJnHHS7ifkpEPSfGNowSsP1",
  "key14": "5xAPhJvKypxX1eYa5JyViL7YMJGoYSoYvCSQzdMgDzHrq2hMoEwzh93B9b9T5yzDoBfcLn2TbxUi6oryEA4PwP46",
  "key15": "3pBcCrfnA9mxMNWoDamce6L16zMz7gqnBK9CT4CWF5XQjYXkDQmhmtKxBEEtiiAa8G55H3KJwLDDBbJznfg9ALXU",
  "key16": "sjK62FNHAdLHCi1wpmXEUJndvv1WYQYN6t7xvRXvG4rV26GHyWkBRKL23x6KVuV97Dib5C27oCf4zxv8uCzhWsN",
  "key17": "61HyVbQGu1uo9dgYU8v4F72hjY7s2KWGEYE7vAXjj8emHc7bCcTETRJ1kkHGJ5NaMkHborrnXLJEuAuHK9KZugEo",
  "key18": "2mK3jEenzjthsNZyjhsLq16N58r3U99Ao4BenpvyKzJqsMhXzK9ghdAuYkWu7UTXu9onQLyLPLfoYHwEJrBLrB8V",
  "key19": "9VxTWnEPQvbe1aAyJUoJ3Ky1SYG3heGxiU3ZkT5jLgnp8epVsvRX8rbi1XBmdrwxrYvhkVW2JZKetLQTTp2KvKR",
  "key20": "3fTQtRR9L9HcaQePGXfyTAeSwnF3dyy9ADi1bbXYikhSHcPSMJmEFmfYAnSqF8VsVRDYzokrucDfixnGhQ5RhHGa",
  "key21": "4P2QFnBKwCei9urAh4qzoEAJew2DHQe26YKWyiNhmM2aUxKNzn1nTo8PqFzYMQW5APKWzNEVEgGnqPiNb8ov9RN5",
  "key22": "3QesXyyjpjQYVwFNsBRV9JKMcYv421m73NNPeiCDU8jpTHpS6sfM1t2vos8ZnVB9JYHnD936E2XwfD5Pkm9BnafD",
  "key23": "3xpcNF4SX2Y4oE1WhUFTjz6VKuGCxGV95nz1ssXCyxSD5UzpDMkXqh8p4VGS1w39xNrx5AQh7aBr1vSA5ESweErG",
  "key24": "5b7oN96oVUcboTxxucpnv3fgFnPiV8jma3ofR19StctszNg19oHE3skBrgUHBhJ2K1PZbad97QVcivpWYdJSQQRY",
  "key25": "3W24VnctatRsDLXC4qnfkKoMmnTufnuXMeQ2Yf7yh5bvGrDQdLcJc2wpXGsBt1JoTXPNQgaXtvtf4D9aXu2ADzgk",
  "key26": "3S1r3UguQikQXgh957aEjeoHjc8rXBhh2beYrEeLiuea2qp3LqXERAaAxucEuhTPmQUDt5UWd9h7Wrc3SMR3agB1",
  "key27": "2GaJHc8QD5NLZgs6N8LLig9dpkEXXsMRd23Y3uph6pu7yfaf54Y6EhpMktAzfdRpzq53CMAmDfEZRt6RYcQCnwdE",
  "key28": "Kj62KrL1G96FMw2yKP3FknJmzs4Bfy8RKDAdWkRULQMJ53rmcrMg2CZ19kBmNNb7PQmCiKxFqUHL67YAQRd5ckc",
  "key29": "2vR8b9j86gwqL5sk6SHkMAKnG7pkDDKdHzngjaEPxHQehWjzYsspmNJbkWVj7Bu9TSHBUXsYnBX1mJx7VUf8RiS1",
  "key30": "63p7XRKCskTuGQLp5t92qkUm2CddQc95xWy6VQSPZJSLW5sDRGbKuTBHJ5WRxud7DNYioUaQW3GfrwmNwaCJ6rCy",
  "key31": "Yc7HQm18bkyRAHYmD7RLs8swz1XHfnmKNWiwbx1KkaB9nhpJfD2THtBNFRmTb3ytUjAaNzh9ZA8rRKyWUpvuXFp",
  "key32": "5JMABJWH1nbkcoPX6wxnXGor4MKVeRKWPMbh6squ5FvDYeEfmaVk65AGRYoQu7NmuSPMt1oFJ8P7i83GzQLH9WSH",
  "key33": "4GbbfaWaggcziCEXGrodat9ZWobrhv7JN87Qmq8MsM9LjHA1y3KLEP7iorp54RHg7UY1UDGQH4cVKmgvWVZbQDek",
  "key34": "498B3r8FHRdiNPmnwhU6GGWr4kPpCfmwowadGjFs5ywfRGCghiNPuq31tWytTDCttdGgpo6y61FLBbKmfYZrtG55"
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
