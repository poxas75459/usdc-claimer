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
    "5VjBtRWK3uKrtt86uUTkPB6wKGEtP824Js2T3hRZB9s1f2mPAPs6poQKGs8dTRpPMeA9uhzuDLX9BK8RCUAfxXUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DwtVFNN5DrvykuMWYQ5PBSFQV4n2qQXjcoRsWkxZwFQNc3Foet6B54wmpmqtFjYNPniezmJfiKvGa1suxK7Nwzz",
  "key1": "21cUuuAGeBtxURVxvWa2AmqnCZw8qN6xUcsuYogmmTxhN12J2pZbxGYg3i7W55qqxxuAV85WezN5VELhniUK11J3",
  "key2": "48vV4oVjtuxkstVQEzXszyQXffH5HcKfLk1KfdkhfrhBboYb5b8LqvkBZngWmzGfv9XDYnpDMy1jLcS5ZRZ9HQjT",
  "key3": "5AXTevUtAuzV9r1KoaeJfVFpyY52PtRW4eeKzm7hZ9TVBhVMkFEW5417cHiq1UrEbbSZZnpsZkYK7RrGASzsxNzw",
  "key4": "2uLQUkX6ReX2VQ6qX1viPC2EDPEe9KrvXcQaJNRigDFjKdWCmZhBqrteRRc2p1E6BEZCzoKtxN5hNm4fDAXLTHJU",
  "key5": "BMXjJgbpR6AFK7GcU1ZNQh6jYJHSGXTMDeUpkJDK3gkd4EUEKX2VCCUNto128rgEZ2xYNnswkXLDrpDutAzH6AY",
  "key6": "4sASABmyAfZXVHJC6sxXNUSHCzCAWRdpp42ZqY4qTuphpXM7diPyjcXo3QkfoXLvcaT7r7XExwzyZgMrnNfM6qf3",
  "key7": "5TiuBB5oycaPxUx7wPVoUizjF8nUZRfvp9FqgS78AJRF82teoDNuW5KfniJdb154EF2tuMcEojBk4vjpq6KsV7aL",
  "key8": "5WStW1MiXP3bgYLwGZjY9UeJimweBsfmdNF3oZU5Yx51S83T8z2dJDS7syYhDwxsu6Tv9ADwTWEjDuCVHiH4cHXd",
  "key9": "2a3mZYrjcRb4NQAi9wsg97rDPhq4uAebGrMatNixunm1V3n8GrhvSe4Da4xwPvLdMkSia3giNXvdKFRfoKPd1AcX",
  "key10": "4nSMQ2isCiSSJkf6M6jrvaLbXef7wKHDos7JTiafeBoGpfFRrRgCqsJP1aP8GkpJfC941sJWhxPbJRZvT4Vk7Kwq",
  "key11": "4JMAfjj92SZPh97KKMQSeBTJznXttkGKr6UFdt6avrRUz69DUQyPmHHccuMfrivtVSyPQGGiWZk2VGBnEBLetHSi",
  "key12": "mYLXXaUM23EGin5JWrBy6uq4fvRd4211tSMhmnyuYHoETwEkNGBLjZ5JdTP8C7BEhiUiYpvwLgPG73zABMrwnsj",
  "key13": "4kmHk6WeuHhbLq9PjtxuEDtveKjziVVfWAJ7zF3PExBgo8MUEaBj99L15fJTbBWUuwZjBXdDAk4MN7btfXJs75rb",
  "key14": "3xVinK7KEGKp7xbtWFEv1GJUoVgN1x8pcJSoJ3wkSUYo2uZWv625XrUpDJVSnzWLLKqTEF7r7i3ZoGRdkJcMC6aS",
  "key15": "3hhJ8ipnLDQdrYQZ3kgwdtoRyoXKPvVasaq2eZHBgJqZzkP3XadXv5Gg1HGuj3h7Z5EcnGSFLoE5z7T3HBwrBBps",
  "key16": "5oTC9kLgFEk5nVTBTNMMd368ANdY3uSFm8U8jixPQLXFbHDnM9WDVpQypmQoJeYEXjjesqJQGBzE5GExgSHvD2UV",
  "key17": "3BByDv7vBCqAfptbvMzMnfBdPJAd5LDwMQLM5mP5cmSxwBrKKx5vcKLmtEG5RuyG1mhXa8Ag77dvUTBH2XJmH1Mh",
  "key18": "4c58VB4oJNgNnRmVGyCqgQwdsSNvUbRDNnrS2hkmrbHJVgx8NJyaJotn8z68fmdunzDEFsFTXmb9srpNXR8NjhrV",
  "key19": "4SGtzo38vnrtddY6xqnqjgcJiWiczSmM34YzKsXFRNTQhNpPjp9C1aviuAgSdgHExYQ2WPgHdMEnVJPW4BH9HRbB",
  "key20": "4Kc2DsJQzbHTjUKgm3FUfWZ6L2Wxge4KzuHz8aUnHjw9pXMcRWfZbwGeco29PVhK6LZUq8SnGJZGdsNS3vpKfhVE",
  "key21": "TYtkgu8i1pzyjmPvijnNwSnCKAhM5XnQdgXtMoaAfmfHnC9fwoF1Vz6SzFsnZLBhtnVreqhpU593b3Ep63YCBJp",
  "key22": "3F8ajPZaUj2Rq7oxR5zBFMYU4oi7j4vvh4uVdLXmbXd7N6wQJMQV1ePdhrmT11guCeBnnHXywZL2w49CjnYRCRCD",
  "key23": "3BzsS9d1YEtf7E11sTikdaXj7NBt1onDPYPhQGQgWQaGTPfv4YNEuSheUgeQwggm2vounjSvJGfx68iAwkMCtDsf",
  "key24": "e8RGHAvufT3qgRDbwdkFUoydtpB7BiR8Cc2w5Xpg8hkbfCJqz1AhfHaTSLS2jZMMxEbY4nXxFXdnEbUkw5VFyxx",
  "key25": "61U5tWwmp7XaN9paZRDkFysPVJmNeVuQWU4v9EK2qMboKJFeYMyhuA1dAxq59BUVU3dyjXHttccKNoHQKYSA3gkF"
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
