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
    "4Zxd57pc28BiJeEPZrLTGEKA2xSYW3B4finG9i4ZoRKLfhVqvNuF6av3rRhismiFd3MA3CdxAAzwawQvmXtxkAPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563Pp1oMavk1nMzHKJySbSZ5NkZr3nJqvSsAavfZe9m1nFc8GNsXxA8dEjgh9FGzGsC9ecPH3dUjoEx6xg8mPYx",
  "key1": "4Mfvyz8SEudkscnJviVkBs412coDw1WXEGbD2X1NPxB1DXNNMM8yLdjruZzPxNXY9t37kCRZQZufkhJ8Ckjiy59s",
  "key2": "4ry235uRBBtgswHQedj7pyPxxp4eHBWU6Y1GZjMy4JsTBpoLC8GG64bz7XDpnnVxzbFuhKnKmGtVffCngkPe22dy",
  "key3": "5dyDag9ARvvyDWKjZEe6KLq9YUESiNQZWahNnwxCF5dUZ8wEUh4tuM7auK3LFsPfbrWkEcjhwH372kLXL6iF5sCP",
  "key4": "VYVAsY6o7tRcifJtWXZ43VcKTXx7bqU66h4ddUwUJmigTu6Sz1iYjRaFrAZeuPMygvD3TDER9Vo8Gmsb5AQiZZr",
  "key5": "5natiknjofEiFEnwmMhpvw1aAQsiPhSc5eS7NWXKmw9BH6C8CKyxQZpnRo4v3HYEww4wkSGvgX1tDnCdFMgyeFsa",
  "key6": "GvxPEKP9JLgi3Hs5LWNtGXz7ESY7vBgjpoTQavpYDyXAENa9AjUrBtcfxyYsjPse8sRzJvBDQnzJHmtUoxtfCPF",
  "key7": "5RsgthtbeBukaLMWheQSQ729hQsNJePRBJEta7pJboSdpyNujNCVR4SBEsYpv3WFxUdVJWyCKNwbKbV3GxRUQEso",
  "key8": "3mUuqAw9Cd4ACcqRhaSPfASsnCLe8mUXtwNsZmYKmqraZzKvrM6RVxhSypDpBaF3G8iABL1bLPBmc11Z5uGj6EuV",
  "key9": "3p7f2WtZ9t7uMZtYpv8VjhgiagRSpcMfrjmm8MkjrEjAQzndtJvQu5XdfL9DJpA8Yi3J9emTjwp7of8dzPCsgXGD",
  "key10": "24wutt1CNtCxGzJw8xkKk3THNdzUj843g5f5CuYRtpYzojFr5trsKB3CewGqGmFTfPWn3ouFPzrvhAEqAZ9bHRYU",
  "key11": "3nr4c4cCqLAJSg174GKDr7uywHUUu8fjbNqJVLWquNXvoLtZV9xVwFb4NW6jSHnrjcDKQCqALtwPUGg3rKMMrRme",
  "key12": "2ipisrFHucaDpx7akVUhyEv3tqe2CQ4mirnxefhdEcFEzi1yYifAq8XH8rdjk4u2mpS1J1ydzHaMABfuPJDcKzPT",
  "key13": "3Mt2oDF4vs2pcuVihXFUqBHvxpPEyw4NmjVSr4Y5R8YGAX61dMQbveUuTug9GRcfgLzFQkXfPzjruewpjWPamJeS",
  "key14": "5DKuT8uivaPx1XqggzsUueQMo9HNDPzAnf5rV7PjvuhYzseUqX7FhEVbVMMenbBtWNYTVs199Q2gGqH9gTtmjp3i",
  "key15": "5trbwA5yzwpnh58YerrKozskUCGkSib93efzQqkfQNjCcKPJYBxMF7mdsNuZSS9aGfookzMcSa1JkHQrVMRLYXRF",
  "key16": "5ptffk8wTqxcSgAhqWXJQg3BE6hHEyLs2NdN5QhieM96PT9F6xg2v5pE6ioXDaAMBiotEoX3sHmcfxzdN7x6CYC8",
  "key17": "C3c7ECnMa11QX4nasXMKfMLWYmZ726rRrvY2RHrAhwHuKdaPt4Smibr1zq1QpdKkVkjSU5YrVNWynxQAMoTHd6P",
  "key18": "2oKqga2pyHM1K69tuj3eaJizaSLNv3P8iJLBta1XDqD8nex9xHbhvujy5jbfDMBwz7x5WrbavDXz8WmSrFUWiC2N",
  "key19": "2KTztdegsb7BAG9uSZNLbDV9RYhNAvJnb6hctagNz9B6kakNixWrgVYVTNiQNKU5p3gGb6mZQXjvnkfEsWuTGu7v",
  "key20": "5maRSFTeXkuvYQuTVE8u7ZUrcWJCRd86ben989nKkKPqz62kt4HdGRmjgBPTo1Thkasr7Nw4hYAaiXdDqFkKqbDx",
  "key21": "2kGd7SzrsX1nKF6X93Q5MExca7QEo4kNENFgemX8enpnKe2u1Xz8FQKEZq1C2Q9NgAbQEcbnN2bGJjThLk7M9h6a",
  "key22": "4aTySh9H4xWEjErcf32r6M92K8FoJe7a9NDYkmm2Ee5DEBKmWRzHbkbFUkD1sMKEMda4ArG8akbMW6msuxDreaTa",
  "key23": "J6VFE2qqqZRrg8mQxgKgWeYsoGhU35QdncXG91ADbzUv7ujQyjfti5f5ioESFgeHmn4kE6ayxB6a9y4g3AFaERr",
  "key24": "QhtJLuD9gVmNnPoQz4f23cDq1ixfTBsDAh2VgHy2PzSYNq8fATWUXWy27Y9Gnw6sAmSJjH9rJfAp83u4HhaLZNj"
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
