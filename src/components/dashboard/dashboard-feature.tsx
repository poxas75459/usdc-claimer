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
    "4i2s4uMGyLV1B53gEBPSge2qqSgnD5y2rpGXkPXHBNwZ2hEnsU6FrYtLSKo7QapAb4Ua7D1AE9QAKU3tPaTcpjeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PqCTFe2ri6arJiKxEFgwejE7CVU4Gbp4hP9LHaig1i8Z9YETu9mnTFBDQRyhHnYyNgGhv1oAKJqjs3CHuycoVMM",
  "key1": "5EMaAzwCmK8SRov7e7FzfvmayrwqJkztTxJL4PWW6PyPxYAwifYJ6fKLmVpSNqWA6VtPQrgWQnNrxU7T17daQdEm",
  "key2": "3436EsR4M7NFaAJ4KRRkYo3GvjPpQL9YoAUmdKCadH7mc4TqL7BiiwapEmtVMCjq6qy1pKtdZGSFHze8oAxwZkBX",
  "key3": "27vunTTJm8N19nA8hrt1rsFV6hVhWGfTKSBevnPgUcPmo5SGmsqKEcfjPpbqVuqXPUrvy1yB6GKsxqwrYLhUaRJE",
  "key4": "4kBGbUjKRVHnguZFjdHbbiv5Y9jEZjzHhBLoD6xeV4v5WKeG4zTHeuUNw6NizLqj6oYqKZS4sRaa1tB6TiRmPU6f",
  "key5": "3sV7EoZkkEMaPbg4NTfKbxByi67apAzTgp3eQjfsmDoashFX5VLpcsd19stgEcj9Aj2E6xZKfM4wtSUoHiS1RRPz",
  "key6": "2ggehDvhvgXTeUeVheSwjbYa67vvqausBEaYcJBeaJ6QQZSrGTM6cHDRjcsx2nQrDJKA1zWo8K65aiZ9piwSZ311",
  "key7": "5kLdCdskjs2Cvbr3JUQ9DdfPDqHCs2Lts8fuPPaK33T7HvU5nGjiqEoNWrHxvT2LywjHKfzF3DFcnwsmVqeDkG9K",
  "key8": "KKRBPZuztudATiwxFhoiKQQ5Wexvaxe9AS92HR14oDM9DDx2P7a5f3XcTu8R1XwMTRXZghKtT3n8aDArr642YG6",
  "key9": "3hC1vjUotsMwfNaCZJZAwD3zMUrmSNasJiUA5MSVxsryLYF3AGzwL4xPV6ETVB4c7F3yQ5He9wEb8fQQ7K3H2Svj",
  "key10": "3jjSxAD6Kmf8mw8tfdNcNzn2VU63Kae16S1ncwdihgbSZjv3jGbjpgxzewCyXWGX9eJs6LvBQ2kK2XP8tjetjfxU",
  "key11": "2afyMD9phQDFinFPW1ow2s3Pq5c1jSyDKF4qdKREiz3s5C8CsQQUMYUvB9Bq38TtvEAPoiozJwojgpRcjRosPWW8",
  "key12": "4dAeU1HKrnNRrqDc5FvgfgDatppMb9WoNk9rmhUDnTrKELhtKQJ6rw3PKwTiGBUAF22dRxET55tuZtksj8vW2muf",
  "key13": "5mGMWREcz11W79Amk7cJwAcWmnpf8yhs1jWX6Gqo3dGCL58Jk3h1sF78eNC6NxexgJejG58KtSLiiDqioC16dDTF",
  "key14": "5k7GwxdD6BWghGyC9tXieczZevkMXcYSm2yow6BdVbFXxUhCPeanvDmQV1awgkuYeV6VYAXQGmfN7mbQYdZD6NHa",
  "key15": "5ng2yqn9xCcjHBJZp55rzY9M9h4kzs4SexMsA7WsSNyBVSKNKhCdszzQLcnPNFmcjz7Ef79KpastnCWksdSkC1TM",
  "key16": "5P6pVqdhkPDEqZWkCerQmCH6d6HG5r8eJW6udSb6yvme5pfcmTqZuUSTyeyoLAx4aNkJktzMuXEd5aX2cvndaEby",
  "key17": "4brQQEAvE6h4TcgkXUCQBXuNoSDCvoacb7s7pgH1dKuqzJjBAxesCrdUkxYjAsb5WHm2YseQhTgwhkkwCcShuYWy",
  "key18": "4UCUH5HN6WKuAnXNb5jYpAk29thmAWcadYDFZYBD1Una1wsPBixcNnq59yYkzLwdnPa573zazhvg9Mxf8wxB3ek1",
  "key19": "2iTmPP8XEjQYAKSsSSnr8UNEmSN1aNvcELSeXBHFkg4p3KLZzpRZLT9hmt21ays27c1AtBmJHcDqoteBFZPX46iK",
  "key20": "5PP18rD4VmSEy9eBkPTk9emDc6kXRi9KSt6uRa7Vg4VM6GZsqTmJnm5kmogbhAgXUMNi99cZNhr68UabMDh4d51D",
  "key21": "64i2ieMAqSLan1H5SBokqw7Rmd42T95hkchkcjdJjA3if4epkaua12wJ9MWFiKq7QBcCeKHd9JSK9GRb7Km7oq8V",
  "key22": "2RN8uwd12Q6UuMSS7CZGCAgBFyKqdzq5nhCwrYHae5DCHuFzjJHb2odfmAxpKHjXo9zHqYSBvQ1pqPhSEMMqiG7B",
  "key23": "5PtkUiuevrU3NZEBF36LnGQH9YGm5kb8V2f2oziDKd6oHzEAwY4Hpp6G4Dxe88LeUFNaupYpwVreX75hVaG2DnmB",
  "key24": "f9XU1tweGPkzc6RDiWyYtr4SJwYKNGnFJXQhXbR9xXhvC8zkJ3dg7thQJGdZuUNMBUKeSGBfCZYt4HkNQFZD3zn",
  "key25": "hQBNGb7m23zvf7wj1LkL4PkPSFM6VgNB55jN6uRoVVHNYaHhSjcKzDZHaBD8d8jitCiwdJfBgiH2ffG71Z4TduD",
  "key26": "2E4w3YLaey5GtApQ9szFij58qbCXnCoY6S4HgMKjYNnFv3j1ehG5F27vxkMBmHpJ91Ri5JnbXvJXiSTj6WW1yPiH",
  "key27": "Zww6Ko9dkgmVgbxuPmNnv4RUWAWGwYFx5yFU55eYL5CE9ZyiQFGgdiTDm4r1XE82AtxgAFda4acPUvmMq3iEc26",
  "key28": "5qVoRZhTNfW8DtFgEVjGf6bd7FuRRfoFdqeTmQLJ8ViUuXCaoi9N85GdKXxJjEifLmRK8N8eK39txUgUCPbj4XpR",
  "key29": "619P5MD61V1LZi13W7zgg8cWRYb74VVkNRv5Ujgq2hm5rA4ieUE1PGMa7pLisZTM1qHnNBsgCRmAGE8xxVduSG5a",
  "key30": "2C7stPAK4z4qw6y3tit2iFJj3FrLC2Psx45U1mxr7fFqzWYxRSXhLwDeYLiK4hRGRCJyVudrNbj6ntfZPxBTGt8S",
  "key31": "5kCtpS6B9odHByysSKx9DsUnhcdTTgngCbkkLg8eu2mLHJa315H7QJMJi7Teyj7M49muwa4brbFVhGaScz3yLgSx",
  "key32": "5YKA6rU6es1mabPmqSbJTc1e9DJBAxdzuNuL3NnUsjAVzVkhLCJc2eLdVNEJf8VK5jXviobjzcrLn3jNq9CsLrMc",
  "key33": "3rfYyr26GXEGSpfAXbBmqp15VHoX7rgYmZMai1QMFGABfTRfARACn9QKoPHJqPWuMZjp12QwkFU6hL9oSBbjXB3P",
  "key34": "3Doz2qYZUm3LjvuLVjKnCXMixZuVTXdkdpYQLRFAA4qnB6q2Ysx6VCBRxAPeNM3v7YHx7dgiehUvRcAG8NQztHJk",
  "key35": "B16DnE4ycnDEsFBC4Lgep8376FypQXhbMm7JsZ3MXxuzQgbcgKqBeRCN6RxZja2YPWzQ7JRHcSzXDWEoQVtCkhi",
  "key36": "2uvCDi4fnC68GCArZVXVTCQVCXC2SqRrwtbZocdsaRVNEWBZLL7h1he2HrKmtA5Da4qoNuRXNVS5i3Tpr34UvsoE",
  "key37": "3LiMytBUz9bYGt862SPwTtHw4cKDihARD6puzbcu6vnUbpoyuA7PgZeihtHonxnD4RSWGrtFKdnY1bcLY9XcVoMK",
  "key38": "3ENZrWeFn5q2PQCUQPcN2vwP6z9pHjV3EkYmY6zPqZjtcjUWvvNsx7Ht6vv3Su6vNaUpPReUc7VwvjhQLDDkKv5t",
  "key39": "4PwaDeYaajitfdYT4CtUmB3JjfKVFfjvL5RjiLA9JxkYFC5R2hkDP9SScqCeSiNNnSejT1bFjeo1VzVABdsckV3c",
  "key40": "3pEjmokBFHjE5knEF5GeKg28gRdS5PEgud2vk1wan51pfTjvq5scUKvKu7r8ffpnsqHTbSEf28ZDdG3Fh2pQqC5p",
  "key41": "3cjnR1BjmQkABGq82JLMxyEYbNYv3LaqdE8NhNKmBSePocNvJuqovcGy3tcygKeG1KQuxfaWDmTs5BLdyeMeDgBq"
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
