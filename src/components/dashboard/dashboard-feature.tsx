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
    "2aDoLei5BoCTHsYi1aCz7g7gfTEniDpUqHuBKqXEWqMNNAMXRBKzmLBahzCWrxLQKX1dDGuFjhWkqFzRSf8uhY3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48BLqiiNZHKLg1R6MQPD2QDfQse6XQost9e2N8eeTLfru1Ew5kGdKdVkuT7547R3DiMfVqyboYFZh1vxNfZx5y7Q",
  "key1": "53uz4QqBmYYALUN9kfWh4Qszo6jLJ1Rjfywpn2s6M9S7KHMT2W2NSsaPNph1xV72CAsEXx5BYQQiymXCmL7HeQ1S",
  "key2": "Uifv3xTnDDZgTvUsFQXRrSmEo6aL5RrZfeLm3jbCc7JctP2aNaZPvYxZCsR6wBmfosn69bZsvzajLdnYtgo52rf",
  "key3": "2YhdWM3MsS2uGqMkTxuN2StXPWTwPRRRd2Se2VV4ShmTFPuN8AQXWinDnYAMdg9WeezCv9Q6AbLQBqVEewFNCacX",
  "key4": "2JR8BvApwtG1dq5yALtzcjB84HxUPUxr8cySnYQPFB23zV2wYcUjBKhd2hb4Evs53AAk3y6cyzPTneZg83xzGenJ",
  "key5": "31Z8zHNkJ2H2Rg7HYRqf3s7qQcCJqtq4JL5rTGGug9SzDYbYcP6iA6UcGYQrAe7YDeJjnsw6bNTa8tEYYyYn9EBj",
  "key6": "3v1SzsR3Z31gNJFjyudGxtSb7iCPBcwot31x6rXYwJ2JqhLSv7bNsTx7wZytzZF5p3QawQ8GJpEFmX56MUwhYGNd",
  "key7": "yPwADSzjx8hMKbqpFYH2yqJggPmZdGu7ZTT1Gz1XwXpYUGLMEARYGZAgknzGVffq3tPoo2Hd4JKQWaK6jZ8nr52",
  "key8": "3QPyDoBLhuCgnQqBL8jgGP561AbbciihW1agqPWTjE35DqeUhkFD5MLLaofNkaf9ui83uybyiFpt7XmtzknJgXtU",
  "key9": "WzvVsqeLFpqku3bTVi3hzmP1spSbR5j1hFWrnc8dU8G1k4KxA1d86BXH9Xo83dPRtGvu7gWF9LwWidVmrCE9Bsy",
  "key10": "5K4Mz8Hk8GckAEigZecTxya1KEteuAUxpBoobWBG66VgCqr7EjJoq6WN6LtrhSfWuHSXM8HjvH1fbhgFrfRYawGS",
  "key11": "sg1dnDV8X2hEKJtYCR9PuqRsnRf3dQmaUL8bH499BRan4P5uEGP8sgWUcPY5naAZvje2CpV8f7E65C1ho4Aa4nz",
  "key12": "3gVAmqfcCW2tv1UNigXdP29QnEw8XE66mwEjMiWBs5WzgyyRkJRJ6Y7bMsXcHUrUytL483dk5pVnkuatF9ZTRp7W",
  "key13": "2KgrfBmZGQhtKPFjEXsbBkZdUnZ48giAW58GAbrnTYRka7KqrjsxVTSEhxeQWhphZTiseZnx57niSFa2rzobUrhD",
  "key14": "5Wx39kVDSyzQL9LSFhbTdrsUXEudeQR1ryTTkiyb9SJEqfKQuKSaL9cEc67vFLDdMWtgNYhyqStUzM1BTu7hvp3s",
  "key15": "2XvZx3Uzgw5qMPfnfBbBVoTN57KVBNHNESobhr1sDCGiXrhL8QQDyUWeU3dmKckkLE9ETtuofgsxbqddtUbhVezF",
  "key16": "4xCSgZXuo6gGKECApfjKVDJvbHVRpjKLmXgPCxe3xMNt2VQRWRbqsAP9GsRjiVJiW9bSYUiEDsVPE9sgeUmn8h63",
  "key17": "tEMhCfPrxeY1PyAGzKP34V3NTpQdp2c48AbKq9vM4sdhwPrhvQFraiw322Nx4CUkVFhVEWWnfXVDqZK9QgVqRLo",
  "key18": "5i7NpgXwoH5E7gaabbuwKzKfptJD83BMg4Jp2cctBgGTdxpbdbJ4yTttZEhoTHTX7JiwtXB3urPUHMHFvuHk62mJ",
  "key19": "eTdYBed9KgbSHJARSGJ6sKMfqSwsEepqCWxpzJFSgKAuM2KuzWFatkUrAA49miGPJtgxJsvJw5feEkWtxGW3498",
  "key20": "3t4adCMaHWJ4z8vaJu7B33hB8tLxiarVAJXJJMBsVynTW62vpY31mK8V6sx9oPqrQUNQbib1rXrPTgmEp7McFHTd",
  "key21": "cXqy6aJh8WbBKuFu1qVbsjyq3K7tG7pZN1sVEAYYiiL5CGDU8ZrBApXZ91Q92TUBXzXyVLDJh5GLUsVp2qLx6QQ",
  "key22": "234afR1uoEJvHZeGDvmMr3jfeDvNpQm81adtvyHjJ7kUWo1jeXcPHB1uhVq6FuZC2h4hHSfS4QunH7dJ9KXghfBm",
  "key23": "5QuYVo1fhAwZfCoVU2DmjLJd283wjV2sr4ApcNMoE6UcyVgqrWhtzJD9cXgBPpfZhM8Q9Scn5uzo6RHJF9dpqrSU",
  "key24": "52YQj1Wq9JtcwcUWqe6p5PzSLgdDaM5oK112Pn7owA3LhGMuUrxDoqpKPTaAiYUrhw3qEG7jtjAKv32uVS4caAyj",
  "key25": "4Kj7hfMtjWmmF4W7PQskGZTeJXEaLtjKaKcH8ppXDjN9P3TdcjDrYbVXZWVhqbZxJeDQNXYPvgEZNFZWyo4epLo7",
  "key26": "4LUfNM6rvS21DEFsnrpvAvhMVrsLmHnY3dsiFrmouLWnc1bmTfWwd8NqM5UE7LQkG1uakcdXFe1VXSXsVKbWnxSU",
  "key27": "5yhwnYJwUM4Crzw2id1mu9wLxjYHJBkmXYwCVYG32UD5kznCuLymo71XqSvk6NciRDRwBUbRX2VXS1oZ545nj8ua",
  "key28": "3NGyRuWSMvQJWp2msZAtxc6gMaxXE7mhAvvaHe9iJYDhYPAUDihJ1ikteTNr8GaX5eKcJugNDKipB1zHAvTkT8He",
  "key29": "39yP5RqkSk6LnvLA813Xj2QjGzedS3icV7v1JoMugawexXokgJqAr7zBmEd2b1tG7YKYtzCekJkkdFSQ9dx2Pc8G",
  "key30": "4nSFiujrhn76Sqi9Y6EnPCooEvfognvUWo8iux1yDpuytpwAEsfPWK9ewp9HePikdA4WrBF7UZt3hvHUkMSZWYwP",
  "key31": "3ecKdRFaf8EcehTrktS9X2eZsQrRGsnE5WPkCxxGLF1JBZJbkEL8M1gkvd3ppdaZJiWqL4xffgjFav39AMnZC9Ag",
  "key32": "3N7b7pxqJLJq4sm2LXH9cSuvdrzDakC8fiJirywgUAoc8iRKeBqnPpmiVT66CJnReihsyi3QfNSPQEkjugv2Ux38",
  "key33": "4P22GQ2LP5474QCmX5tYn63kfvrBKSLTPAVqPvdPhqzqqkRLUNTsQMNUB9UaAmEnokHTK99ERs7nTQy9UUREvDYx",
  "key34": "4FKqbPfKrBTyRwXUoHs9WgPZkfXW1Ab9awLVxuQQirPxatuwAeweDgVBuyU14S3TyUehov1AASyouesewcv2KR7h",
  "key35": "3zDBPFCVeo6y7YLbfdsPLsUDL799P27WcftBJJthrLJ6J2L2bgyVNyA2kGDs8xS97EHU6KKTxSGznVHFKVsyoG4o",
  "key36": "4sKCfmcV3JJnjECLkumaBP42gHXYgQAJMAorft4G7NLU4fvJvfYV2FGJtANMMAksdZjRTPPR9jskbhxT2BpjuNLa"
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
