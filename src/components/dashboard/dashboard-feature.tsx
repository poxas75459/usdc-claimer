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
    "2SGmTGPzvN5naEQFtH5ohW5KDniq4DpKbD7GGCqKsYkiAJ4g5dy1LBsqFRyQfAXuBzgMVZCrKZ4UPM331ma73Soa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJmczbD7TNERjCva6r9kxWhGU1QFfAtAGPn7D7zfYk13Nb7GePdLCPvQL9kjouZ8wfKrHcZSy7QuD1k4rpJjzwJ",
  "key1": "2JJJNYb5xCxgqBRuDfFh78yB8WkwndvZH2mjS4xhaKc1zjwjKf2TP5tzyou2vojTff1jLgUnMK5TK2Hia6fhRVxX",
  "key2": "43dR15fRx6Lfg8X1W1x7Bnqu6UNwrrrKqqYRW2NYafWXz3b7m8Qq4Tw9jcSkPen2Lt2rZ763N97KJBuHyY7teqKp",
  "key3": "5ZZ5yCydb47D8TwnV2VWtYXitG5y4qSrL7keQ8AFfxjBxs8EU5wtqr3Afne4xj8Hg152Apj3H7bxNiEJxrP1LuhZ",
  "key4": "653QR3sUsMNPjPd9nUFcaM8qpTu4eeRE6zVbE5dNK4SX6UKwHcWUQevkq7jesAnXgkgvtsprDc1Sg8HaMob7kjkV",
  "key5": "5toiWNxgx4Si1NHAuRGfpK3qsVvLSBx9MCyUdPc56L1KjZK6QmBwRJoySop41gs3zp8ectZPi3Rvp8NAX1SF5geV",
  "key6": "Mc2jVW4nqWutFsFKKDNxbeo4bLETRULeqTTTaxoUpfCLKUfs1Lo9rY7Vqq1v4bgJRcbX9qLduSQVRpkqvDquLnA",
  "key7": "cwBVKS5ijcLTX9AnGf6h4MN7ftfrnNMjzRj6DKWzjRKC5HVco1m2UBGqSFAD5hcUeQhFfzP1Lw6iG2f12zYLeZN",
  "key8": "9FYNVnj4QPkDXZwkqRzpxKVQjdmpnzf6jY81Ge2NZSEevUM9fL6HCFq2DPghXW1fWhqnEZsGDUFCczZ9pe6SDwU",
  "key9": "5eQKVmznQdJURzVmXo9NdY33skEGtVFRF4VFV4BbQkuo3tN619AU5gfFPAR7V7i152VeiuDDZSVZQzt3HkETvsqN",
  "key10": "2zEEg5WHXMpwE5RDYJVh2FA9fNyac6sRrdrf9THZPKcSxQvzTWzgD6ujV3sSDrfpyq5voHmssSxUf2zpyrqYyUhj",
  "key11": "3F6DXkcAWStwC925qJoJJM8bLXsN3kYr9c2wEBRwZR9RhRPqHP586ghd6pkQHyi9fM8mocchq3FKVYuqzx84QSvn",
  "key12": "aJmKbrGvh6LgkbcUb2ePvGdiqKhp3Ddis7psttbs37H9thVSNnKe7gYYYvsTRxA5z9f8K5s3DWZosY6Usuqf2ko",
  "key13": "5ekNXnbi8AVLkKGmiFVM8RmbdM4cT5AQAxeSF9aQH78YPsb6xMUuRgPLyXB9t4fmXGV8J5PSLbqPEJ8FrPzXKNqA",
  "key14": "uvXWK5d2pk51yPoPq2x5RkL3iKfvqcuB7bzyUedwAGM45qPN6fHuPgbZgzCNBBNdR2DrhGuZGquJYb1kVZhw1Sc",
  "key15": "2CEi9tfb6e4T5aZXn7in9x6uUCGunH9iQF1AmRnfRE7U2Q65cbzLnJ1HRuzJxNjuEcVT8P2FCT3CgT3UHedQibU5",
  "key16": "2QFyeZRFFQ8QbxR5HfWcf4GfCWXmaubWUxoPMSpPxymAjcy5nCbbdNiiHp6yMaBzokk35qVNKTNE3JyKjGEZMPiL",
  "key17": "2nCrTHCFNX5imcDPxRE3BcEWy7ZPS2LSsro6s4DqvCRS417cUffUKaT7aNbETLDnwqccgJUEfXKG1sXHJNFFbjPr",
  "key18": "Zxx35EP5xg8aTjcZFLMST8ocEhCcExwQkQQZCHAy5thgzQEvJJrvYVYcBW2abScGb1c7akMaBi9BbPPXHFJS4Hn",
  "key19": "cqGNvxAWKGYghQZTEqqkfJMk2XiT1S2TEx5oNP6XB1ysNyZz1evCUsnPBC6DxXw5SN4CCbgSiqSRMP7agPFi6q7",
  "key20": "4KG5KsZXnGARbwzQ5CMMw7ZFFvNPdJQmCi5LmviY8CucqCby55WtANoDizvYBbUiDMVy89DKzRTWJgvnp36L3Jja",
  "key21": "5i67yqzchUbBxf53Vr2TBMsqWiVQhNpoVGyYt2tS6KgUNQr7pQnurAZnAHzEJ9J2a6zETZskoU1SrHcchCykLxeR",
  "key22": "2gUFpw9RHzYE6FgYT6MsS6E1J5CpaDRB7rhEqAzk5rXR5P3NkDtBQDTsNW5MGyGumTyq7FQcn4P1ctUoLi15ayVc",
  "key23": "3x6qLfQnyoFVP9KxHw7m1coDi6gTwwGZtJas544JJzvCSVUWvgimrYoT6nzy1DDkySYDYpZQSooiPh2eZGu2G6EF",
  "key24": "2p7x5kU3bwJ7btFei33bk7tPKEttyPZhHcpN4CpPHpVspxeHGhmJLHupf25uSb6V6bKdEtA6wB5p5VN6uXAN5sFW",
  "key25": "3SqLbN6nqLk2Ym4jvsrnsxPzFSu67jghKEtoVFx1GDre3brGwM1aeMnSU2wh2qysMmM6zFgV7mCShUtfZcqySSmU",
  "key26": "5kZmLu5kKcrRLFPjNBjokNNPV8oXwmn58AHT9fNSmpyNVTWNgJr21Knc2gTtGWXk4Uysj8PDAxgM7QMLXAVoDTGy",
  "key27": "5ej6Y1vWgt7B7gjMju9funVsjx7dC2K5DPxGAxAR27UK6N1QrGooiKoBX6x9gjXyk1M7CyQagAGizDqPhVaqoeWA",
  "key28": "4bgMKN3kA1oGj2Jo7W1Bp8JRsNhvkkEnyVZaAsrNCuv719SndLtEsQSDyLWEUWGhemhJpw4HwPWau3jNAxG5aym9"
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
