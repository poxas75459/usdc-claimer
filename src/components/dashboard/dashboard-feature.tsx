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
    "63742YTpJftJdptPNf5cSKRxzAHvC1Bs41UVWidJatWkzrSoTtQrHpvAhGXWcKZ4L83nQVG6hwhsTBzgGPpoLSWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JSaoAXxD8c4CKVXghpeiYy8Hjy4u2V4HyHHdfkhnUYUKNzuVM4qaTgXkWdHHYE8mcWMUatARLaMSwmUmmNZGqZ",
  "key1": "4tXrSBpKVGV6mvTh8Gf1oqagqZ4wVcznHFxwSun98MPmPb8u8Dn9pnsH1HGvkFsR3Sd9We123xFGmipqukTjSJNq",
  "key2": "5vYXFaXHHwDbPfhg7ww7oam2xT3NGeWceBHbzCvFJGhFSRV7mqaL3dQPVSMvx3hK5TrYoFCe8fCTkz9wBXz5HmB7",
  "key3": "yEHyqqLfV3kKhZQqZLC9fzEyw6UnAFLT6mVK4VNCXvxLHxDvhCEZdEqHTLYWJ7d93WtdWce6ZzKSoF24giE95vn",
  "key4": "g8osbiGU5Cbgq9AWix7j2SzbRznJFTBD5rAvsn6Ytpqcp53Rkg7A1DSYMztv2tP4j5NMGjH4D5ZWuBKAYwQUrC2",
  "key5": "3tAscReptJ9bcxNXT96qGNqpgUtoNhVYJW6ouvwhEktn3YoacLToGQZ3HV4LkUf46uuwu6Mrpn8P3MR4xepB21AB",
  "key6": "5wCfVoQU3TocdjuccErV1Qtp34MReP1c7ATGEX5FQTm21GcWjUPridNPyG2Bhi8NvaQiV1fsuP8bvs2HxuEWmvrR",
  "key7": "2r3XuurjZTEXffjfUC3oFcpgrfMrUMo2QoMGdazpVxRYV9LeBk27HVBKmV2aAhYfJ2ZVrgtspQRkLVikYJdNNJX5",
  "key8": "4nXWLv6vsJvZFrpcBkJgZErPURJwFm7gaH7owL1DpFshMwYwS4BwRvqcbWH2Q1TfJj9EfHJVPha9bt57hSe1ZerQ",
  "key9": "5vsHxMfd7v5p5m13v8G5AQRNgUdj3RSRJbrPRnDtLQCHHChUKj3zbRxrf9uyGTaqpRFrDsSte9FErmmUxTASGEJB",
  "key10": "4vWzhx5ZcRXztjdT6XPE8i89CbacTLVoFrfDyHyAM81BEBg51J4zFJsQ9poSEb7GcuVQFNujtUvmpdt8YqY1CUwM",
  "key11": "2a6SBX5q3nu7EsMotNDsYQVTvSXk5bnEy3uqE6UYuXU8Ed7rPXvJJbGoHxgn2AbL3YcWYcedV3hA9m3uJfv1bg85",
  "key12": "3md4Y39y5eVTqncN9s44JdGpaV8L1HMPUeLAfdfpmBFJs2H3KuujJkGvAw8F42Rq7YfVdzw59YA3PAdpqn9jumFk",
  "key13": "3fa7pRAFC56Pjo4FzJneWJzDQuapzCVT43aPDUxuAVfPDExGsqsxRNVHTYZ5bVP3aHiFi3aHN4AUkxv5R64ZUSsd",
  "key14": "4fvSNXegw8AUFJBySfoVigqgLMD3hP13eDsVAZNAWftoFYxFJN2CaTfybAWPFLWAGAgVBj2thoKZgCH7uGzM4F4D",
  "key15": "3HsULUeKumY1dXi7k8mZ3zxPNkpJdpivjcs6uZpjpPK5i5j2L63fY37AYpMutLchLepdFdR3AMouqiReqvofaMPv",
  "key16": "3ByL1x4fMJ7vmtuCgcDpdsJM7SyMaji6bKM18hGQQjwrEL76BY9BvCMv3jakbCzkDqJTE7Jqz6mvJNvyPBPH3nht",
  "key17": "PpKsbeWd5S8SwnPsy3QpjhnfRPz6Z2KBwVAE3UwU7XZVdtKR27uKkuaWZx29KVy8nwqeZF1QaqfUi4K376jDrMR",
  "key18": "3epbL6qTKj9BnfqtS8Txh3uBT6LKjQptJEp3bnWKQdz3iWRBCYvKkWC18FUn8Qhtwm7zNeeADXrUp4zg84DSNsKC",
  "key19": "qAfG8WbHNnwirMM8qn4nPnazXKGrh4beHaFcrmjUNN2P4tTzTtaDASvxNjQBDsSXPGtNmoNkb19VpMiENvPZ7JW",
  "key20": "5LmQTFTWou1ejhwHb2kR6QVU8jQXf5Xme5RtNA4suWaWsvoXk9GHsbZF1Urpj5moKaUXKoBsevjeTyVuyY6skzjt",
  "key21": "3sABJmDfVBUYtJLCEyLSxTiFdpzxFnHrRoBx3BwP19QWdZtrYYsgqxCu8ejrvZR3j5rdtJbk8LA3WX2gd79AmSoL",
  "key22": "5DrFBniV74piKcYyAp67dsBrnjQEDV3EoVfuvoRMVqssr7VA6Z1Zn6iAnKW2MYmdSydMH4GWhUJ8hNFEvHAXPEMs",
  "key23": "4HskHtJ1rsBVoYpfdoKicbyhb5bkud7BXxJAd4BoPFEmQY9HxrDp1WBKiRGP23HjWAQ9xAS7qb2uMQiR5hVmpUQK",
  "key24": "4yi1e7qcLTRrg5B73KFfE6pSc1bnTC9uAQYxX9YxSVsUS9DnvBDnCWNaXnXM1DjJQk6vTQXVqvWVCaA5Fyna3H5v",
  "key25": "42x5kfuZsJyW2H9kN3zzEESGnK3Cx5je1D2tnftSvSykZdcoSpnAbin1oFPD7oDkXWGn5zJ6xj8FQUv49GU3XjaC",
  "key26": "49GcQHL1S6jhZNpEKqewFtYq5SbcxihEYkjaDsW9iRXjRq8Q9hUq6JDDMkT3ZwZYJZvQYT9jAJXboNrv2ukNSnve",
  "key27": "5UnQNadi87K1V2US5DSTwjCQoD8YkiuSNCUa59MS4TmSqyUu7ZDzCBoMADkg2hmMMi9s8SsdxhcKy48jUkJ8WEtB",
  "key28": "w6f8MXE4QqQVkYA3Ybuj7HbPuVHDRPrfCefSpR8Zj34zBvUvcTSRuaRYrswG2jagkzSw6AQXsmDAAy32eQM9RJp",
  "key29": "4oU41RuNhscZerMXBeq8yFoLqzR3jGYLNZVu7NxGNNXf41BsgbYw38vkYvwQPfQnvPuMhzNLmNrLWj9faX4Dkf7S",
  "key30": "4t8WwCkq4e61v3VAi516MhsTioW16nnsge62GhRdFsCJxJ1PNf5YFKdK7pYfAk17vW8ETawPxXq1LSwWNuZd37ze",
  "key31": "43aYF2MZ73dfLxr4x9HhjicZVYyZ2sNMwwroVTPoiyRgv4qV7wef45fmyxfz4TvTRLbYHbrC7UW6ABvwaD7AyAYq",
  "key32": "3yAHEvCe7Un5AApc3hdiA6WC1WWnuuyNYxWk2QHSKhdvgELNBWNmbMpWqHruwvvLTQcyQ4r3JKj4s3UApuSN8wmz",
  "key33": "628JhZSvad5EBhPkSqTkoWkH8QGvR4xfp5H7Jdq8ebmfJRm4gf2N2Syjw45MfBziQRVd7YjGQaGS7tpZSRmjzoE6",
  "key34": "5HzNt2w27GnFhxdxuKnAvdUYQDcT4ornbRCVydQJ2p7CDjFEmgGtrRPwipiNdjpQ4UomAUz9Z5JyLTPqq8YubUM1"
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
