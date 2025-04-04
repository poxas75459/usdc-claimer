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
    "3ajR9U7ZPMDHH7ynn2fF37fpKgyvro1krVMTCaFaVdwVAEbtJPER126aRWhddkTqrwfgTPYnitxu4vVyqAk1GA3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SUtjLxosMtVp29bjqg3hjQ9JrfKbNaNJPm9bFnvRkVRsj42HyWVhMFnPXF6723TTrMd6VMVp7c5ZtaZVrWYoZXy",
  "key1": "2voxV8Y4uPfFm1VmtTjG2ZT8TtfCRjz51xo82ijWb5qwSe21ZYP9LJ2oK3jj3LJa7a4q9ixXw2d6if5qKff3jcv",
  "key2": "4swnKMVioLt197QLVEoP8Zkr9PggsWbow1JohGzfTs2nYKPRiQXE72wXk2wMq452dJdVKz8g2v5iN1cQJGKfb7Ud",
  "key3": "4GCrvhCWLNneBk69HYuKVk6NmphHFseS2yahEs7iQ76wzCU9aZU3cdLgpFKWK7gtARQdcyZr4VqUnYC3MX8mhT1N",
  "key4": "3div9pV1QdhbWTeKzuQ9FWoMAQQFp3oVrTzy6ejFrtRKoWqqKq3nPeowoGUEb4xqS82d38VPEEPSf9BCrxNh3Yj6",
  "key5": "2wUe1YNeuy4QkdaF66EkD7XFKkiCchyqz6XjMxcKnEY9kx9Pa7uDcqVnKmS4xsyZA4tPYG9CCwWpDd46kaphgEHh",
  "key6": "2jk4JcBzHZCiye6brFGTGVtiXXf96h3WcbYrM5nfy7HdS5xXRSijJ1e6W4EDWUC8FyUENqMAxboMUWwDKUAhjJTS",
  "key7": "3a8NSysJygTucZaf82x9vSSg185gvmi5G5FNxfirV1RBUvMg4AbiDS3HyfEjfByUnfaxgcZC2rx1S4z8wketG1sX",
  "key8": "5Lg7VGRyn9paFHDAQTk9T7gAD5ib74tLtG8Lvqb5Bimb6hFo63MLY1WWDree8qEQz8Gv4z9jEPGDBi1T6hdHenvA",
  "key9": "4UuyeiRTDZaHbRSbjBoT3yUGVYX7ZGHu33ugny5eaS3LptxW4eWR4Pfu5uBbmeCXkdtzpVUY8rzyf1f37NfhbAz2",
  "key10": "4pAvAiX6reyRbP42FdGZvunmNSjHXnWArzREWq8DvDAeKZ2Wwgm5G9GEiagNzp7QK1fA2E3SGpkUkhd5HhNibKuB",
  "key11": "5VxXy32DgZnxEG4wTELXbgBy1nWpvgSFUrhzhGJNNo9vZeu1tnCNRXpesRAXs6xCjGtKjNZhLDRSumvyJof7zYhN",
  "key12": "3NexXdAcvdcWfJ6U31ymcGNPQcZPLvFDtmULPYXsabAt9Wb7fXwJazTmwfPhBD5sGzxqsywN1sNizDA1GQrtDr7i",
  "key13": "5HomeAEFrt9waUDogQUZviaGqrYdoX1KaHeJ9ALDbvHNAbMTU4TNmhxfkk6XE87UfdfScJD7CV83UpFVrHNAkARm",
  "key14": "3hvjBDbceQ1Fnn9acRqEeY4sUcJSvUUmQTS2oJfikvdhXK8qrCBSNXkCQGq4eCVmLdjXqTY1PpCtn5EPhED8sNLU",
  "key15": "3cBBUrh3SaHBzYBzdsKDkCoagHaivYeYoRzrSKDh8Md8n7G2rHruU2EW1yRtmvAfR5uuv4i7GU7KvTTwpCKw1Mq5",
  "key16": "2p2aCt7akCdawAt2viwPPHLjxczqUeyQyDzaHJyvyHtJwsfed9gTAzxLJf5twy6HMXxrZwDrSzSLxTgcP2dxtFqQ",
  "key17": "4fcJNwxjt1Eobm4aGKN22NP1ExWA1q6oBm8fSVRJ4cK9EymcrzAheVAixVmdkC7ghSA6yRwzSY81t8HCPDBQPdRi",
  "key18": "uQ1VihwfZfHhshk6UH4XyrV1cXHLackC1hjFLhMNc1ELFBpBAtqUGU7xAqxrkLidXcZN9FAzjh6TACqxjtMarfQ",
  "key19": "67CL3yqXUVgDKrpqQKM5Vu8AN376u9Qm9mvxrSDpaUkeTYEu53bxVH1Ca2iZtacSYE4nFB15cTDBUsnikUzJU2Mw",
  "key20": "627P5g7vnjn6FSZWxDF6zR3Djd3iWZqCNY2jCJyKtKc1mrXsn4rbQ6G9QAiVzsAMjL9gRStgNXw9vAZvN4vX7vDS",
  "key21": "5fb4qGt9kADQ4iZS9rmPxvqvkJZUYW4Qb88B2tQEnm6c4jUdqYS2CHwFqFDiU27rCQDF34ZbpayvfsV24HvVDxGE",
  "key22": "2ddSE3SDHdeqAVrAZS3rgSbhbedhyFPG4JccGuUQTjgcXEB8QV89JtmsyxsuMJaXy8zazP41UXdzQRCc7Sy2tMLo",
  "key23": "5E3bJN2aS9KDZeHeKRdQZNSzJu7ptatJDumXr7QRi9uR287gL935aKgWMUm6QvjeNqTXP5WuMBSLmH8XvdgzJwYj",
  "key24": "5gC4NUBb8RKvrRRhTPq7mrRRJgqg53r6RpSQ5aCafy8yMLwuF3FcwPPptzmcw2Mcn5io5Dg4yGQxPsH2WuV5AD3w",
  "key25": "2BDhK9P7qnGEx1VKGE8S5tLkTWJnGxXWxf2m4hVCuuqQJs3RcBeTDuM3MeQbt4NJtcT2AmQgV19nu6kanhGqqPxs",
  "key26": "2Gn8moaWVNm6sG7XfakfWHpwJyPDzaLhjZEyAWmXwtU6rmp5Nef1XXTZWc8CXWaVkc5TdEkrUCciT8auH6SshAz3",
  "key27": "2XYAjDkUArhYiRZ73cSSNWWwRig5FJwN6VKyhtKnaWPgahomJtmBS3Dtwh7q1JcX4sXjBS4vw5JdDQNFohcMdqVE",
  "key28": "2g4azkGLwCqyh2nk57nf46Uj4BJc37dnUyejxUm1iPSs7Fw8nubtQaAnNbQFwGobqQ7N9R8cj5cCDr3NTe4gobBs",
  "key29": "2CB3v7w5uRyrgXi8WYt8HohFmbxHkMwSMDTaTNxN3fv1fmDiuBKzbuvRkGwGCNdn6hpF35eTsA7VL1odNfRWzKdi",
  "key30": "dDgKbdbNRuktCkc1WvtzTbxRGtqNbTqJTgjGYn86WSAfZM2wvgRYRW9PQgPepugQiECgVL7esca45XYkRztLyeM",
  "key31": "2eFYB67fXGimA6bVqU3hkVY1Bd2PCzB774agoAT42pQinyeA17EBQmdCcyu7R83jyjPAg5jA8c4y88qeEMN2naAa",
  "key32": "3ccHqGyNbsqJmHCBuBuwUXGYFj4WoKPSxRqkn2RD9vfpqGCEVMT623jyduBws9VZjwoSXXSft5FaCcf2NCUBXwAi",
  "key33": "bARvM3q3oVhvkhARvbjZkMzqhTs2NxwCGbAjoKg4S58PTKxFdFzADMsg2gyjJamnyJVdRXyLpfNGP8GqXP5P3pH",
  "key34": "5i5gqCaM6Wp6GbDLpjeGeY3YXbM6dSmbaf3FZwemvbGUGvihie8Mt8VmifRjN8QpcwsK5kAZnWQiHHP3RgB5RfCd"
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
