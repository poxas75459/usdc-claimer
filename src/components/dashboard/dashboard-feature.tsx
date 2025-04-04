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
    "5qornSDrcYpFsL6VKyLayh2G1XV1gBkoNNduondAkcjXVfAsW7cfrSYezWeyUazznmz8Z5nYUHRHCRL1iM8SJwGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzK5VcjFMC6ovch4SRwzUq7YyjTUqKxCXgS9Hz8ogCUbYjuvqkuPhKxzWdUzPspenHtKqy4MwzwKFJ4muj6suYq",
  "key1": "P4ZpPScjxam1vvSGp6unUEP2Sm8KEZ5VRnXtcc7VapC1PEw7hBAco7j6v7CemZPHSEg9Fh2ZtZiTS9WLAMpLyos",
  "key2": "2U3cecFBzq5GYHsYDLd5RqHbFSHaAjHtnJoGDaKngecyhv9UjWxZWuRZ4H4SLYAUcrnBLJsR5pevnPaXx5aGa7eH",
  "key3": "5Q6KQqvdWZ3gQk62dUxCfr1XroHRBAUwpRm1pp3ZS2Cz6zjrrWJ7FTXaCcdmh8GgUQ4CbLarWrbgBk73Pg91eWL9",
  "key4": "2fiaJpAUHHRLoNdwR2TY555HbTwADf6uiwAhnD8JKbcxRdsuyb3j32SnmocnnWu5yY6hdCtCoDcHtzioW5WSiBj",
  "key5": "4ubU9YNt21zwpUQAnbttB1GvTT6rc431GpRjpQS3XM56pXSqLpWTdPgv7NjtnbSiHW8qBkkamtBxZqFx333mX5nu",
  "key6": "KRVwLxrXLdd46w5GtHMWx35bKNL2kJexbcbheMExTQ2H86mqwqfw7UG8kdBWSQH3UNhYeCsFh9wLQx9eBjrCdn7",
  "key7": "qzf14NjNud3SNHcUvufUtH2FaoH78sgkxi9Gyrbzs9qaWtNtL8DtEQ4YvD45qKD1PssCtaf4Qnar2dAaTMJ9huJ",
  "key8": "4RSuqZJipnyKLgZL3higHWAgihKPKmem8QVi9EoNoD19BoFZmTRMfxZGCNmGSipfBB668Lmq4rSp1oqGX1Smx5y6",
  "key9": "kWGztwCXfRJus4nVB9odgjkdEX84Z2qQGeNfPGfDHqWRPF87TFUvExMwCoB7L2qfQGdnEQTkVu4QFmuMkZmjbMX",
  "key10": "hxojwPJb8qgyvWVKGz1tpz9R4bU8NCxs7KJL8uh7KPFsiAYNwptpENAFLs3avYonENHD3hkrUXQaNs3sxQgMVSZ",
  "key11": "4LjCfkHoVqEcWTc6szKKaezhGpwTGkHis2aZfYNb1kvW9UUcidJt4axB5PRWRenjPa5xRC35LR1VoPzcfMVbYvi3",
  "key12": "N1Nk4s3rB3WakxywVpuY22VxYiaQ12hBnfZCvZLhNWh4eDmgUgf4YkpGTbxVAvWtSEn2fDvgLjz9xQuViSpRmH4",
  "key13": "3sfJnqaEEF6ZBaXaE8gYFGt5rM533C9jdStrKiSTHP1ku2wJravbQ2fEAebE4aAKti1Zat6GWq7tNhRSiuXnq6tx",
  "key14": "4L6DiUSMR39V3cC3RpRgfAMzBBxoSD5QCDLsoBKD2274gEbrKBMB9NheCfjSM5eg1yKqygU5GiHNCouaBA7P7tPT",
  "key15": "3RpLetenuTRR2jSpmid1BEskoHLBJ65chMQnevauDR6JU7L4ynfjnf2b1CAQ9KuUQqbHtgnpE5rj8TAWz8uy7S6x",
  "key16": "3w1tnL1sBpJiB2isrc1J7rNyWpKfdCsFCD8ZksigcW1YCYn3HsodMhGN4mkZ8tueQpJzPgRQFdzoFUz6EE3jpWam",
  "key17": "3t5pqkefQbCuYbnzg4fBTYssWZMZHU6jskgFQbMFctoXNSfzwLk1sziNWHt1ZbWuAfAhKXQUugBJuruBCUHY8Wvk",
  "key18": "262VB7eUtUyR9LxbXxqfXigqsnsXJJFU1fYq7xEmRxtJgJoJPm8Xm418uCwoJbLf3ZxU85v37Uw2kYifoMwbRp9S",
  "key19": "27Lu9ddB8YeVJ1vTKn3E6wiZc2UzWt8DnrukLVg58nGGG93QPGLzLgMq4rsL4a6BukaD8uDUXSMHBoHC3Er8Z1K8",
  "key20": "5nMUnZD7mASPHZ4ZSGyPY1Hw4ANDad3e5yvr5h7sBR8aaTYSwFhsxE5nkpFVbFHHYHA4jNZEYmiJDcNp9uk2DHMw",
  "key21": "5M8DNDpnsN3JG31FvKPhQCxt3xBg5etGeDPCJ3bNNgBo27HnsHdM6Bk6GLfuxrmrBqyj9pA5mbNba92UvNvmmsrK",
  "key22": "2fE8WARYVusjdmhy6q8ApZqpdXrtfNkQ3ACncaEghVCZ6pvKj84jUkNWZ3Ty9uuQDKYJX7Nj8kmj7qBDErUmSrEv",
  "key23": "65ipGTsuzQDfSRWiLqZmvae51aU4TgY45Zez28MMhwgACKSmo9MKUrzuRZ3aznDUDVwTqebAbo4AJm7LMoD1hyDn",
  "key24": "2TqddoQKxzUt7w5YskFoEFLFTpYx5dEeiudoqXn33pV1S52punyN9wE1Rreu4NvR64XzMWWcAz5LXewiqvPaZqpJ",
  "key25": "2uTQ68tMUiJqTJfzWciLozCS3mYTpSGXRcLDYqycsXMvY4EDcqRTGKvxLXvQEuL6g4ZYEmq8RAahecEhnhXLGJZE",
  "key26": "DkR1viBKFvTrAMLyChLK6EyKX8CG2d1BZNWFgE4Zy8oLMW7pxZTMSBfBMH8tYJRg8HmAidumxwR3dk7ud6GRCHu",
  "key27": "3TDAGaWNumfz4NbJ4ARf8mRhhWXenbb2fuLB7TQ5mhpEgbwLxQezocPwMZXBp2SFqGeiiEqyvNAAwJuoEGvieUwy",
  "key28": "3z1APFNScbtuCij39BJi7mHmm3ii21KJTVKraj4CkiHJoGDxnPF4rkfJpFZPPbvAqAyXHb4oCorPa7UQA7LDnYyg",
  "key29": "3zNRwsMc696n3Zjd7har5z5MoFyBSLXUayuLuB92KyQfp6HUFMvUREeMxKMbQ3rcypHFa8kmhdvw7FuHqqtJAJhn",
  "key30": "32ByvY3ikUTkDFHifmjVrsNJ2wsMv7GgBFaQtzCSWAGGb5f8cYQR2J7AN93R1UHfNrihpfRGpiKEB9BzM57n2UA7",
  "key31": "TXpS7ua5DN13zttXpFsM4JF7fsXZ8nkwkhQsPwBHk1KhKrXdEPvHTConTPTqsw1f2mvW4w7UvxjWAQBdBxqrjvg",
  "key32": "42xzdHPyerm7VeYPN6jbLX7QUwEd1Pz4Gsm5a9trnKQjb5e7TgreTQ54ytsZ2MAJr5CjWEYunDkHpx8rUxdztC4t",
  "key33": "sKPAU3VGocjJ5pDmNVpxEFvgzQRos3xnLFWFeCJqzU8X8LDP1i8rRq1QHKbgN4kQte9dEPyy1ELfHm8k7kzG57h",
  "key34": "43d3pe7UGRmBMfEAMksrhrgBWwwUNLmAjbv8pLLtAg8NB5ti94GAt2ei25d19hunYBhgTgavUX8SegeoHZsLBB4h",
  "key35": "26vmGtqBgS5bd3unsJvRYt1gq3eytpCHcrQX1XfBjXSkcTn48sRQwyA3B4hSnU6BBm6bQN2eQryfxoH3t2DWxGzm",
  "key36": "5k5G8x7dxMX5UkRq4kcy6gi8UNyRdd3cGyg3mKyos4TdUedMazsz8BTUr2AFzQmePV25Cbt2iwtv8iNM2N3beRaq",
  "key37": "5A9iUeujRSet1bXHiri3CvQR1oyW6RhpsfkwHA2p6RDG9T39qnAxj2yTBCTWxHv1RN8N7qmL9M83zxVozEZcnA1a",
  "key38": "iQrRBwH3adASSybYg6dEMbqjCE6gbgXA8EmV7azcowcPiiuCe3QyGThgeg27qE6DqY29chiDZYfAXgQTm1KkhiS",
  "key39": "2QdApntkfH2kNJ4DDf7M2CKKGYSDEYZMxwJRpF73kLo2Lz1CznfSiLA4y5WTvUiXrRTrbSKCfvFYR3sEQ3nDAjA4",
  "key40": "4VE2rA2W8fVrgvjT5FbzyotuqY73PrhdtSTJG22ZLxb8TDiXZ3N8UsJCvqYh3FhKx3Zg4ry236N11Pcoc5mBChxN",
  "key41": "5yMaHS3VBsQHJp6wRFJq1sWMat5sjTZrShvG311oWLaRF25CqqBWmCXkrZFhBsfwGXwrpd4LVuMJnnEAV4GMsnuQ",
  "key42": "4UDKH4dn6zbwQRXEWU7CvXDoAbpf9ttgrk7X5a3jHY3kwwefxsUWC9iscpdGgrJg4aaDhY81UtyfdQsdkay4hqRg",
  "key43": "65TTUbkNVdAGYjcU5j5BFi1CtUYEyYVDWYK9d2GJ9bcFGqeYprcTsW8pteTA4R7U2bNhjAfZ8GyCxzzSTBSMrssh"
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
