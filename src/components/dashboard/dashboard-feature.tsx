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
    "kM8sjx2qUZTmGQBkuLGMWxUhj86HxmZGaRSFpZcu7P338zUnvBRKUprQtMhSk1Chvrey3btWcwAWXwnUtFMEZeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KxkkzuGRSm3tB4yEZww81brv9bYvD9CHMLX2xoWxTjKEpyp48hWYNsQvBMu2q3w33K8ZLD85gLDvMWFsWTTCkKB",
  "key1": "RLSyuREpF9YyzMqNfo8ZJtzWMdvtkRb68PDzYtevKVihFaux7JsuRaZMq1DoBL5Sj98Y9H9F6jgcq63c9zHJDvG",
  "key2": "5s1QNH4S3mkynwXkFQeVWg2n6SGCB6bYg6hRu7Wjk6QCLf6Nw61F378BHaj2z96EPNLNwFX2vdY5pHy7wUYYTruA",
  "key3": "3VHX9iPwnocxAwo9UdeR97CWEj6Mv961KBd65J442AstiM1e9ABEshppXamPUMcoYtMp2KSSS8y9evD5TfNkpHbf",
  "key4": "4Rqr9emjEPLSLqYti2RkzHrF73fLNBMgf3ewx98dYvz6Y774ve7XkZpB26j698fYt7FSgYDJGoJEFLzzEhYcr21F",
  "key5": "5UtvnfLwkavBmMeuJJnfq1aYkjGhPfWVd9MRe3g3ebDdLVYrijqwzyE43Jz6eHTRPbQ5uZRExbbJRwHUuKWzrFFp",
  "key6": "5tKB8BA4gjJywG1RKmKB6BHXb3rsakVKBVzKXaeww6Bhk71ZG2bfgDqHqfSjhMYBt9MyXTKu1SoXwXJrZ87CY1Uu",
  "key7": "42gPQkrtAaKsmjRmthALrxkMit5w6J15vEbKsSd9nrtnFXAZWJgrNQcWkvjcbfKEXGycB13J2G6t24TLSZ8RpiAe",
  "key8": "XkRe4RRCh7zHhHYfscEDRJEjsnnL2mU8SHAL3YtNn3uhTtgbBYMkKWe4YDYZkBZiamrQX6T9FZEJ7dw1ApBBmMi",
  "key9": "2gA4EASK6kyKXHWKZgzidSigC3hpZxYu5DHSH68mpwUfcumtF3Z2nBPizZWS9ZfZnrXWTt3UyR5JgYCU6V22Vbsa",
  "key10": "3UDuk89UMA6W9LDa47bvgqoA765CJ6Rt7CoFueEqv7krztXeKV9xFnLoj5huMKb7qAPbFaRvuSDQPMRS7gxCJfVb",
  "key11": "2c63kmJLR5QXBhUNhQVe7PU45rDc8pzXxoM7KiGtMJXtYVgkQ23oWXz64WtaRcs1gJPeyNqTKrroWsLHH6m2bZdn",
  "key12": "4qhGm3g4q8qnu9AV7RLwzZedmnf5NicwRULeDSE5cVw9JJ73UcfwaaU6WLVKg7f9qudXE7HfSmmYArXiPV3PuxHy",
  "key13": "2GGA38zJcunWpdE17CeZVBsPvaZ2MB55CgXDhU52MeAizf9goRP7mfKwCcc5zw73JGYfBtUFaCoKbVkwEwyFGgKw",
  "key14": "2PkZDLHMPkUoYFJmTBPY5KMYXCT6mfzoR3qBbxxv5zHQN5iCXAkCJbGfRMHcCZAiHo7vcuPCq8yDG8UCajDKjMiw",
  "key15": "3HdsACr9MLcgVVHhFnGqM7um4o2GqB5a9ptaU6U37h55dqSz1a4ik9XFPmY2fJ24dfpRj1neR9JFJumnxcmhj1Ak",
  "key16": "jeS5hHVY6mqeL9DWiEuDFY6bcH5hAtruKnLt9dCnBdmexSNTbChoLvjD1V8GZK6weyNSakS3YCejr9Qb8VgoeDL",
  "key17": "3aBvqFcbcKY6gWy3MkEAPHpyxDhF7v6hRedr9gDSdMTeaNXHYe4efvkqKeis1dYVSmHU5aJT6rvZw8xZ8Js3SyR5",
  "key18": "3S7nHsdip6NEEhVNFKqKDxQQV5wyeSbSugj2b2Zvam3Nhw24HP8Uu3x8oaFdk4zR2WWK7gbmqeVBanZMNDiSR45q",
  "key19": "5damwPzsiy8uFw66fGtqtN2AmUzd2Nm1h2TZDW3zYvmyiRpH1u86VaTde8dHkrU33Mu85rsEnpkwvsEU4PeQD5ar",
  "key20": "2VsngkZtheUuGzqxakyFZUKewc3ZQ5NpzkBYr8qAzKSzXToo9FYwiqAZk2vHxqH16UqyAxp2SWq4V92LqoCUfErG",
  "key21": "4Vue7sjCwfKuToSa55YcRs9V1NjW1jjEj4EEMcDzSYgn3EM96byP2CeDXUQFgYspQtyAPvPFZtYt3msqoh2SXce9",
  "key22": "21bnKkLtpz5bF41h3Tce52QtDvKnmBWBa8KxU3p5DUduNWYX1Zc5KZNcmjgMqXUtWiopbGkBwaZahUqbDYhnhpr4",
  "key23": "2FCLbVbLdaxRMm8mJU48YdeFkzAV3fDW3M4TSJfdMmTSyCgyZgZUH34wR3BAAixwpHBpSmDvV7km9iziSPZwLzPd",
  "key24": "2rnvtL8nQvjSmS6MDaS1yGrGDn4tXx52WqF2v3jkPbAEYsM8Sa1WGn8fLqiPH1pUgdwxjv3BJQRhCqiuDwTTMajY",
  "key25": "4SRn2iju6hM9KiecbcF7cUSaVXjrsRu1TwQ8WUHcYK2Z2Syi37tZfNZ9tLyh6MtmdKJiRiLBr6G2X44Aj2woXqvj",
  "key26": "5k99JvWZgaivqQaDdMWmpJb6CkyVEf8tmPgHpzfLkGmh82fLY6bSG6ZifpHnvnuS7L64zLHZjeCgR7YuaqWaf4UJ",
  "key27": "3qVXKVjTYaXTwyTNX864iYsXrjBjkqeWnoy21G3b7QGy41mZFjNv5BV4jPPYpm1hSL7x1xktveY4AyF5kZsS5JYL",
  "key28": "34eCeNwrWfoJhSRNKSd7GfNWRpP5mDXT7issKxms88jV5cSiWAdNrC9tHrB237VenvVCem4imQnGhUzBQsXHeN43",
  "key29": "3X1LTqPjrmhAACJce5fLSAM2DqDfEEdEh8NaK3gJqcAKP4PnMDgrc1Xymoc8UHNxh5ioaNYFnAzUAbZmcyiwiggv",
  "key30": "KzTH1bNbtuGYGsJyyGeGyDb3g2UCmF8JoRBaEamnTcLM9WTndZLitZ4dPs8f83zGRxoS492vLkQB2N3mSsHvD2W",
  "key31": "5qEeYag6qG2Sn5dK3tiukXq5M2EoXdnYGYN9s9vEFwk4JSnn8Dpk12doxWXhXCZ2LAB2GxrYCx4U1DyHQriu9abd",
  "key32": "1rrtGWqK7wiSHRWaU7aFHLvPPuGq4wp1dRQCJVyqUQamb9P837Zrszufr1HzdvEUeniXZWuK2pbWNoricvMs923",
  "key33": "3JpKXmL41QejYUYsaokTjMet4ftGQEkzBCkp87xPHym3knuF91yX5YGJEpiV211K2SE96ok2gCsotByGWfzk1Tdd",
  "key34": "3zjBaM6sh8iWvbeXs2iiEESX3cGqpz2uUx31cwyQQkbtcuJELY4Q2GH5agyomYyDLhxe9PDngSi8vCqS6mzLB5z6",
  "key35": "3L4y6ZoGmJytS4myX9E9SzvsBbectAaPFwmAJBdRVmhfVYKMKPnCsdnukC39TU4hp1Wr7WrdCQWvBeRgP83u33nv",
  "key36": "3jvJfh6VbAY5FnBMDYoQbpBpuDR22VfLmK5A5XL9YbEsvxJc7MCv7nrRidZaY9tvuGXh7kg5K361bxMHsAzstfb8",
  "key37": "5v41wte9QVkL7tCzmwE7yTTEbfXKKAGFUMfnyYpjDu2ZBJieqDYbsGt9YFoM4ki2mGTDScCJS5tS6NpP5LMRSUum",
  "key38": "5RXz7VmThaEcJmfS9fTSKAZLtWzSwNkyRchKoX4KusWLDrU2u1WAa81FBjMJPfAn6Yy6TutUvUmwCkififC5ty2g",
  "key39": "4BKjpAmK5PYVeg7XNofvX88Xh3dQopxX1mcjwQijuWLx5Lfejvsnrg58js55xcyeHLVtmP8Np8iuSey4iK73mU9F",
  "key40": "2LTWdSKxoabC58otaTcZRNMEuhphBHsi4kT3hN6wZH3YAXsKo4MPcfBpZKK9znp5ZuAv428z13sHjwPfmkLcKQMf"
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
