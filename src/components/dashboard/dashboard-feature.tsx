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
    "44MdZ3K4c7AZu6Mj7nFA29139eVTcuqY8gV2e4Ucn3wj1nneTKwxngzD39NnaFPZbbDVgH86YfoRZDujkCgLdFqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTjJzr5G8F3qUoTZGxuKKXknWevjUfdairZwCZnQYHpW56a7awPFZnzWVEDYAUSype7RrQLwWrCZKNZqTC2DKXv",
  "key1": "XknMEB8qudnuLxQCzD2dt2AfqjD4tpX5o6iPjXhToRvCTGXVMantzdgY3NwKEcKg5uVeNV5sN3wKnNp3ks4gdFC",
  "key2": "3jKxabX3WmhhS3M3PDQxp833hWQzqCrLmB4YHEigbUzb4SaT9qUVqBtkz53VsCvfF6vxcmzFHEDB6ZEoDpnVZ6EE",
  "key3": "3TCAEhNjwXqANsUidbMHToqmyQa7jviLAHLiNwyJLNxX8zBBaHkumutxHvDyineMXZxjASX9wyS9Eo45NUz81CqX",
  "key4": "67N9C3VjtBvRvBLGPwJmvo1KCY9y7RVqSPpDFnSHjBy1EuBUZRXcJheAcfFYBxPwnu68kpzQmbr55vMpJwhmqv5s",
  "key5": "3sWtgCQjn5oYf2un2nMTudHbRJuHSGXBAZKemCKVkZ9VNZy87tpA7LJZnWyjXWYcbEJcvSEZkRZ2o5WWECvdvVCo",
  "key6": "5CQy8Yeh8VTFfKjHSZMX1xFXvRnv5QkyTCjidkKXyLhyHoV3YkL58PDbWZvV27h8qJxZ3pmK5ezFYa7DWwm7w8iZ",
  "key7": "4UA4bohRAw3mKghfc5gBejidMDxgQVHZofzHgZk2RbqzWiVinNEbNJEV5oPHQZNKdWom9Y3D5PaA9reEswSHTsHy",
  "key8": "NFL7AgaMFqGMRMmgmWn3Ex2fuFBsvd7Hydxwa5jqGGJbKV6ZXQVF2RkepqEhTXAM8wMaFRJHwwgxgQUxK4SDUFK",
  "key9": "5ZwHoyJkCaGdiX5o9scjCuepXYDrg6yhzvSwfCnRf62Q9ezr9n3ZwPXjzg2W8ZwijrM7rwFSg5fBd7Wy7oUF9G6e",
  "key10": "3ejvpH5hqRgpza8rGfgN7rQpgt7aQPxY2gSXsmsFf8RmaEzZwFAsxQWw4Bw6tVnFKKpng15Ha6yryTt1Hd1K2DtM",
  "key11": "RY4tw1msZuZdo7CRdWrTRSaVGsEfrmNkSdK7zbCGV79ap83aS7zFBbRAnnviLyRPmoMfjDqPnk6YBdCqxy6CH5m",
  "key12": "5BXWwWaX49rFmobFJb4nkEhSakLM7XTQwkJtZXcmhxMudRNqf5o8sijFgFbwKzBjMYmLANJyU6tF7gaxAn3dnjs2",
  "key13": "4LLi9QQufqvEWTnMvRLcuXqG8guQS8E451meCddUDbCR2N28Hejz852J3KwmWQxfaWKKrTNoZAaRSZRtQQVBzBUP",
  "key14": "4nBER5kVLMAj2TZrhRDeHRa8QxWUjoWZFAJ3Bx2hBg9xiDutBDEA5zKuzte3NmmSKPV7DATLnHg7BNbWL9EAZ2yU",
  "key15": "52DYNEJkr6amGqaDynWMHhu2iNwxL6wYhH6UzKv7FHJm77VctAu1KzyeM11SgUjVmjwMZU6t64Jc75S2Rdstx2dB",
  "key16": "5sLxvWhtzU5YNsG73ZNSLRYpvX5zJw8medYzAxoMGivfkWhD1zG77gMkmw9AWao6Ca9ZCaZ9EZFxSiUyEaaBSLAw",
  "key17": "3MygCtGnFRibkQcZebmfw7MPuieh8iprzUU7yEBAXSGDUxwrpAfvfqZjvqGM5e1YqD7n9kg6226LY8cofJzaEMHj",
  "key18": "SDJd2QCdfH6rQRrJ1QFryDHvRenNBFvauyWCdHN77wVBhZZVy2Xms3X1kjee3eBBYSTgx6oVysAdSCzDpYGzWcF",
  "key19": "qiaV1oGHHp4be1aNUQqqey1JFQrg4n7fGkcnmzSFAneVpd7X58c7BtfM4oaXtbAxUDBbXAE1Cb1HMtRNSeTaBWt",
  "key20": "5fvH34uKLqsb4ZB1XiwgJzdFCZWVgzqq19n3ou7G8N5bEkcAqPT8X5QwdwUFpvRFHKycBKT92BSRWjbyaDTGDKhp",
  "key21": "pjtcahNySbKrenrzAmbd2HfUpTDa6wn1PzzzzUbzzVPbU1shXPjia9wV9zqLY6y8XgHu6KUs6VCtWH9JjFXLqjF",
  "key22": "2n1HYBEqq2Vq6akbkPW1axv1NtVB4Cc2B1hf5LKHMArU6ek4FyfwTReENjyQ6Px5mcMnFoLuq3KzaY44UrnSNewG",
  "key23": "531P6EoHPwxbNK5Egog8HTzZ2CyUeSckknGNQVWryKa3rWcYrdKiFo2BkbCjH2DvA36adbRdenheUNqouGzbm2Sp",
  "key24": "4tybQBBPzToUkwMeWZKs8HofyxbfKhV9sdYPPnSvNWCmWZEejHQufxBK9WZchM3QSTkPdn9uFnMX7qTabeJ42bPM",
  "key25": "4be9UF35v6tDstxmETNRgjBhfSTwrx5LtmAPtJ7yesVnXHV6a9SoXpWgcAmYomMioDQnzc93nw5nRGeub79ASjGi",
  "key26": "23rbW4af2CNAbEzM6SNm5RHdyGRVXTwnQj45oDXgMj11WAwuM7vdhSxtPq7eWHQE8e3GHwbGi6WRErwVbY9xekEV",
  "key27": "35H5fjYVUYiCDnRmhnTEwfHLc1uWuqT9fjo72Gnvs2pLwLTf5r6hAonBmQuf7EJdwSqb7QaFiFkJbyArYxcFagHp",
  "key28": "4vpFRMhFEvgMKKQCWyNCEeS9sshYigGgc9xkiRUgGQX6iTnDiPL8kiizV68B6L1HDH5aNNxwYEAW8JEvmLeV5GnC",
  "key29": "51k5EewX4wZXJvsiNJ9TNbfHhbHEpaEE15Ww14qmR3dTLKQKJZv79EnBmZViy5oVR4Yuq5xAc4tWSsXZ86g9cvm5",
  "key30": "2MUCUN1XQDMmNzEjUjD5QFigWUTKmuoMcuHDzxM3GDq7hDKWe7yF9cRi1pViANu4DjQzoPRsVMhjTtUsQ9DEV7xE",
  "key31": "JweqZXZCecHKngQdCc2Vh9LuRJ7C8A3Y9MgcCbRsAt9dK51JMuZsbaaDKggorfpjCwNoXe98T3CMetCpxAZzcGk",
  "key32": "jJCrDKmTLKKHmmrQjF76CJRbmrMM5E5zYaUQq6nMFchQhAQj18m7hP7x2KGuPiv5vqBtfU4woK6gz3LrBfu3t7e",
  "key33": "5wEy8m7EkhgbKTGNYqXSEY2aWzi8N4cxzZJiLa5tRwviX5B1MgULrzDi5fQ7xC1oRPnjXZEfuL26BbUzZw6j2Szc",
  "key34": "4gAEiq71QfprE9CwkgHCefM9YTd55zLi93HrJEiu1aqJczrnnVXo3MPcrGDN35eVk7gNusKxz2vRqGfBsCrW95Jd",
  "key35": "rtLk7RJyoUrimrxjzdygk8UC6Dx2z5V1iWg9NNSCFzjn9onJdZHEJtrCeBnt8v6jYd2TYmpiuDsEfpb9q4urjr5",
  "key36": "2MfXgwTt9a6GtDQhDcs2GgyUHFqCjTeoUZXyyra328fuiMC2aUhGxQjfc3u2i8JY4xhnRJ1kYmxj1YpaQckJXBEf",
  "key37": "4CmKFXqRyMFyDc5hbQi6QuASfKhap75NPbLmF1f4hX28LuAHePXZRjSgUarfMsY4C98sXggKefPLtGwaaPpcqneo",
  "key38": "3otGRr1mnsHgRQMMBCrCQ9FMbAJhAeo9rNrFxAefK1rXcNc5crsi4pAJS7TpFu323HXPpM2A9dpUfFt9afBtYM45",
  "key39": "4zoodH4PMTuUn1DnVk2ZEyD1Vr2ZwXSpuUAvd7Tibqc2mFgqkDTBPQPJjnV7dZbJuvQ2L2kPdBaQX3FcgkpqAYhd",
  "key40": "3t8DzGcPu6sQhBDoKaNiq8qzFXSoZzxq8uqr3kzrzL1ibbd1G2Frrtrzt1pcfnVMx6VHoJfJZ1WNDRm6qWnr2Z6i",
  "key41": "4PbGP3MYCyumrDHTgLVGvgG6hH7adfTk6qGHFkK29iFyjFHf6NXNM12XQvDQvPGQWGE6qfNxRGBuPcDE3Dte8FRU",
  "key42": "JsDsnuuVs8fMdRK3BA5BMjNQUL1Eg2bJvJJr7XJuquKSGHjF6Z6S1b3ioMMuNRDcVp1gTwoL1sbm3J966qCUYVH"
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
