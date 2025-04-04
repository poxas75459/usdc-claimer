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
    "3ebwPVpJXV9rHp6j9gSeqcBrkX8nwN3FHU5ifHTu7ndyTwNzpUfdLHyKdrjzfGaP4bwcqtfMivLWVebCzxzVtJmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5duYP2MivuJKKpRjgUgNzFbsZ87jM1CTw9TGgjW6yxUoGiNzZaTHr5b1dZnjV6pHzz5Ech65V4xHpUbpkHH6vR3W",
  "key1": "3AGJV6hQZCP2U4X8vVNHwwL5819uUydjKudfwt58qr2NmwNjGfQx4FG9sc5b7QasnP6CpezPAo5Ku8zLDpFUvMsm",
  "key2": "3zegWr9xK6GzSdad6VjaduabctGQ9godW5BRfPvxsHnfQuERezegRDKVBAFYKdXVW1MzdEDhNDyu7dtXQb54868Z",
  "key3": "5XBp4DUF7WFppAvGrSSStjL9mvGzYf3u57Evxj8zuJQujPCy8c75abMeQcXjCqQAK1K7SScxTDiKyLGxcoagviHv",
  "key4": "4inMc3JQEPb9U6MyPohPebumY8eJ9kgzpGU5BYPhyPpixeifNEGhc1jrNSm3TueEEytaKUffb2MtY7uGo5eCVhjG",
  "key5": "4nA9vUEQRcu1LYqEpRZVTAAqtX2dW2AekdiQFDE1f9Aa1xHcvrwt2MUCdygfLZBGc9fvbd5MXrsbrdSuNgFqhYgw",
  "key6": "2GKhmrmU4VJhZL5vT41gL5k4Fa8EzVbLJxmG4xYxYEKEdt9nCeQszbjpWboecey3wYNmcmpiRDeg6yd7fnv2DNQz",
  "key7": "RdS5448NmLVN27sTifgjfuw1mdrgvNbJy3x3wY1NpCCKKZxncs7z5orm8vWdWAGCNN7tnrEP46HknFr3FnCV9zk",
  "key8": "Qq4gvyaa3jmh2kWA8vVJ9eRc1TCz5WgzWeJBwfGhQe3UUZpdAM4xAQCozHUiAwKvHyCekE5m3kbbWKVDaFJmeYi",
  "key9": "NxB9397FK3B9sj4ufzGmMDxX6DzfrEW61nrsnvi5ichbienHaBZR6EdTUYHjBvDXDwzK22Na9HkXFh1NQEGd8GC",
  "key10": "4tTVkgGHFZZ3qp9RT4YT9Xa7JQmREEfvJJ57c6DLLzwT9sjTZzmwUR8kBvh7PykBSkC9rAzSqwYPp13YWeU6XH9p",
  "key11": "4ZffZbMBQRYoc4YefL8oh9Ej4exCzNaK4aY2AKVbXySHvsnemGWxiiiaMxBQhEnUsggzLmziwiofSNHWkdmZghu4",
  "key12": "4uqccMyK1t2ZkLgd5nZuVAx9zBBaJXFU6R28ejaBpCj6SA8QE9VGSLhXzX81Kb2FHmuPWF7CK6dL7nVyqrToZtZ3",
  "key13": "5mgn1drgwiELG7e3LTBR4W1yLneYYyyhL6K1Cpci7nKVWjTn1PN4t38j72giYKKAKXhv9wravHVpaN9dSfV6TLvD",
  "key14": "2ELE5rKHHjWsfR9oG8Gmft9KwUB6ix4MSNGUd49mYKSxFjg9DyXhUUb8MSye9rUb2tEU9BjkSrAhrP6CM7ERmmzr",
  "key15": "5sxt4GRzLEpP98bDJnnT1xWz1ssFwJedVs12wGbqU31jYwSRHTeEVCQsqaJUqb8sR6HAtjW2vt5Epg8GGachLGS",
  "key16": "5YgYKSGESDWBhivZmJnXULukgUxoqVK9ybNUcMoQPzKaoYKfMedafGUAQJVeN8n2pFibD1UDe7Dcs5CjoZFjzEk4",
  "key17": "5AkBwZ1UqBXiQLLDxZAPvz9rY74Go2CEEJehisfKvWdXKe9vKVZNtndky2Zm7MaRK75gLrjFk4k7JApuDuwkWM9s",
  "key18": "SWbKU7zYyQk8zKB3bkgTkgax88qbWXiKQyeceikezkZXSqcQCqURa7q4eQYw8DgM9WPA9LHu5vkvNdKk5nNauGM",
  "key19": "5o8Phh1iSjm2Jc7TnFoM83QjtK5KjoWLMKLitHoNLJMCH9XSHwUVDv13PMmqwiEio4maoFNNA3GPf7pFPioCL4Tv",
  "key20": "5tPFLxBtfW77KswiY6UJ3Gnx59gNXKgCsuRR8HSfnzG3vJKCx8EZz2Ncqf9RAGgWCYzfzfbbindV894GCx5r2TN2",
  "key21": "2DhHjPipBvuzonTY18Yu7b6Bx4mXGmUsBoGaCgCb7D7b43sZEJWXPukw6ZBFfYj18Pr8qNVBYivoHwWBgU3AmV5W",
  "key22": "58S6RNnuo7BWDmZftvhEPGEViHfxpXtPS6w3Uc3zAp41RLXgQmY3CGnyxo6fYBQQ6coG2QciNErs3Pf3E18eSNhp",
  "key23": "4nwoinQuMBGWcCrw7oqy5AV3XdXeCPtdJUb59rZ3Tz43mzck55sPce5N2C3wyV8kknj6FxLnj5u5UfjiksQZmQLw",
  "key24": "5ENQx1725v2smV15zz6y7BqHmJrrBcuqhTAN8eQ8HY99NmE4mKbWYRwkPe5zExEtGCE3Lw9Z7o1Pw12TJ3xBYBPG",
  "key25": "5AAyAE214fwT2CnRZAYG3pWtduT1DbsbgoPXes7kuYp4PQzgeW68WMGfCqF9NkfDorDTC73xp8ukXk8z45iXsQfa",
  "key26": "2r4kpqDaAhfY7qX45AiTF4ZDCg4EkMZ5a4j2fDVbqARHrdUkLhnPniMS649VpGkQDkD9ZbVsnYbtCExWbSqywuuZ",
  "key27": "3KKFfgHnXdj6KeenF3S8Lt2Nu61xxLYbZWYBdEXH7zoL2Cy4FcmbmW7AEv2htB5cHZ5zTKbUuDar7sg5RxgAx2oy",
  "key28": "4qQrJbPRmiJfzRCYzGcwurcwgsLqLekwxk6nth3px23Ytds7jqotQZjs89JMtNvq2voCokhA2KbhGVUZ3u4tWDeY"
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
