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
    "4ZHY2jsMaTMSiCfnVZqqkJjuVhRujUCJYugGg1SRuujuk8SxzcuhtZHwQN55Aa34oqmqEbNZ58Tdaw43PrCAuwzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26oLxwsgD1pF8N2wefuBoLLsZZSD37QgRKVQDJDVewGeZk9oePC3KB9f6WrvAd8x1Kb4fBcBYpnBKFPqr282EAYn",
  "key1": "44np3M5i82CtE5EBfXbLKuTNysDey7LGFikW8tnuh97BjaEv938DfcUuwdo8EqE9Ue5tCcckVDERDCEQjijnQ3Ct",
  "key2": "66uiLUKQFViEFYzL7WgvpERTth8i4raLLsuQ21ouzT8sVNLxynjcLjxiF3njyW6wnXaTmZjQ8KA12f42EYGv9Rk7",
  "key3": "5jmUP7BLnVLoqBRA9q8MqEJA7tKZsgP8EGpT79SjaGvbLTaek5yDaAZ1GPi3DfGfqToXWHdGLmusKQWvHN5QnwYb",
  "key4": "2cy49UzwsEr6XKnFxGBkNFSwfSAThJ1JydyrsiXTr182DT5XKD4Y9rVrLA1eU5f9qTsEouJGeodJk7K2quTBNd4N",
  "key5": "4CaJi5hYgjc4ejPGXMZ8bkpWJjR3mx1kN6RwDnufEpvh4LXoP4EV1n62m2ja6WQsai4mHb2a6wt9bxg4xW1b9hdP",
  "key6": "2fjpd4HgUMY3ouSd5exKqy9MBJmSajrZNgwVwtqveNzyaXxZ27V5zkue8epvNDaGLsVjt6zC3USRQTCcuPPypV1k",
  "key7": "5jPuPZ1jw9avn3SHTmhiidnrZR5aB1U7cUv6jp8XZZ2dSo4qB3KDfrYGD4wBs4o8UV2ABfjP3iRELeJDRoUPU2Us",
  "key8": "3sM66YjSywAJhzaCe4w8oJ51wmyXFpuFtAKVwF4AbeLCa7SwGZCV85sC7rr4ptfN5oTu9szR1z1eT6aavtPVLduE",
  "key9": "4jjB8tFveSEx3WBHFZdYndRQ9qD39r3xexdut1x3PkzpXNxNqK2MCR8qtAhTWNEnnKAMiGUHsVF5gvYRceEKEkHQ",
  "key10": "5Bem3mpGnMQbmHLhXsFHdn651S8j2oUXMBz5Rp7zfHJqnZLhxqU37pAP1FX7bdN9B2wmJZYAe4fXNdL4KySgxYf4",
  "key11": "2eBqxLzE5TEWbpj3sthQdAqYfrHWmaAzH1F7hX8MmeATYvdfonpG3bRoTkSVUi7Gi4hcqQWhRdP22VY679xo51po",
  "key12": "5a9WoHwKGU6zKPc9Zb7R3ryH7qQ7mRBV1mE49DwAH9VXLsXzcgVwGuVdRzLjyC6KDuEFoWuAamE9rgQNomYPpTYp",
  "key13": "2hXyTTpkJ9JPDV2xBG4XrV32Vx923Cbn91JSP5T3jF7d3GZ4jzSzmCC3Pdofd8Wx85nPvEE5XbMvfyPmq12Ca1WV",
  "key14": "3vFZ5mFQUePK9RErhKPEy2zbM5uzaTSrS7np53jna4DRpNxAMmD9mqz7NdF891fND86Dv46TA6M4Kb693ndzZ66h",
  "key15": "4y48a45rCLKiVjxiXNV2tbEin3xGeMhMTntAjvBWNWKH1xcMtZX5yQsx2tmbvqJDicbu6vGqEthmgU7dykhr2HBF",
  "key16": "2jWjooVXWP53eg7tRRiamWf5KHZoyGBLj4tp793qJrUttGW9YFYfAhagdKrj9B2qD7A11wfNqNzGe89jvR6oWDZF",
  "key17": "3GjVShKiZqeG5TRgLV5NGx2BGFPFHh863etNCh2e1eqX54SRUywCyFyagS9uMTL46PhbCyiJsajQsr3FSRewnd9o",
  "key18": "jBMDoNoqHeDf6HbpZGdQFVRP8yUKAE97QenPAX66zE97JPvXvwrLSBJ83hebcjo4bAD5XRL74jjBe8NExTpb8Lf",
  "key19": "2z4nvmHCsbx5abhcLuwYGYwiAAT5rCSEFUauMiukE2VHq8YQYLj1UT7ANinrWP2eZh4vWGNis5A9iht2iAPZgS15",
  "key20": "3BJaG3PKHQWLxjBwAjb99h1e6gDAbkmc7k89Qqo7zXpeoC7RTGH74GSrfxEpFtVE4YhuicFNXErCfTdgWVghpkSi",
  "key21": "2WU8PNDLSvTBGm8JfusqAorutck1MNaqkXE5Y2djMZJk2kJXjV4A8EP47D46ZiJzzVoPE7V5DH67PeZLecDbrhiL",
  "key22": "4U1ryi7R9L2H7jKh7VzjGwqtzuqcMKScLu1qT2uAJ6qQWw7y8tTygjxFu8dJ4yWLaTwkZjmgFDC4qWu1WDdFxPSy",
  "key23": "2szryBCvQY9QTMeQRadFxn61eTVxwwx7wCAeUDJDbq4Au8ANvQmE5Jrjyvo9Z1SWfGSFLQBRvEuf3VcXCQxxVccM",
  "key24": "4UyTLNcpiLUgZAtThd1M11rcEZJuRVMQXbGnGXnkEyDKpJrqZ5f7Myzt9sr4wJDt1XaqC8QeW7Sr6jj7oxtyMuMQ",
  "key25": "ghzV31FxVJVxLW4w6Uior4G4JQqBUzKaa65zY3ThyaFpG1c6injZRhi9YWf8TMpzABzNhgP62mUoakerhEp9SKW",
  "key26": "2GAqoMnaULFduynM2JRqFHe99D8ttysZZvYw1iPRox69vA3h6SGRtFqQjaud1nPHv57GqCoAvTL5MfYVYp4BqtUG",
  "key27": "2g1qNhyY3VQMU9d2b7T4NN2daBs9R8BQ4rsaK38b5xj5XomSqmNU6RUwCPfrLc7Na5DM6Bvnfvo8LQ75KZ3Vtpc9",
  "key28": "5qKSY8zQGjd1F3FwMNzwV5f7UCACqCn9N4oLBC3JrmfpWQdno6rGybcAjXqFZHEv5HK5gG5TCm3J8ACBPgKA3ids",
  "key29": "3ftYdz7FsJbPPcGFXdHZSjspdiF2ssKUpZt5AnfnPZYRAkGYhWb363A7RqxF88KayC6zahPzirbXUkZa9yG4fhwm",
  "key30": "5C2G9jSaE6ZXyKzRiPhY2R3VGoUMkWYHqxBgqTKBBvAmkPm4ePupQ2P2RGUZCJfFMyAuqYqAZTrarXDRqSM4zvU",
  "key31": "547wWEXeUkgcyU4nZ773g1VBswcZsMmfLCw6UjPqMPmef35mLekYGH1P4nSuNunrFFBah3MckWe49Ea5CLavTyLo",
  "key32": "pCyba3Zt1tmE559Ba6NqH91MANBp5BhwWwkv5D2AG62LkGD5Rmskxc3rHuyb6YUnUH1P75VYucxjFY4dcT2L2NH"
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
