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
    "2UUsnUtVgA5XmYBbrPnxDFzvZ4M4R3KoaeQNgMngR8HDVo8Sda3vumJZ2j9XHZHvHQukutFtU54WtLMhE9azxLpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ytb9Lc9LACb52gaDPYLeSS5hpugqZmehGKKKYtYF6g4pVmAh3M2SDRn9SxUghrAMUU9Arp4jYxXqxwFU2KPB1i",
  "key1": "4FtxPqyGj9uTdJhKM1K45ASUTTDoTManQhdxAvGnmZos8Bp8cvi8CxYv8uhcmT28BZxhZjeRVSqnL8BmeZL2bHt2",
  "key2": "32p6n95Ro2bzWXhNWwZCfU95FMrAeM8CLZ9sGmCWC9eBRLvqwtnBTuHJ5YF92SDYgR12dm5sDE8HqpjDmu9cV2zg",
  "key3": "2iPVqewadR3sUyNefMwBVBPsAZ6aLakEo6Ww7dRT6jZbQJLuyD4tdyHzPQ5AzJfXsR13VhyckayeX3N77sYQVuEU",
  "key4": "kPYYzZaWHXHWemdjBbxfqNiNyyPgUBZxCyAkyTj3zprJZoggyhxGfUc74UMUCtiB5JXVJgaLwDJD4kBYQtG7Hpn",
  "key5": "UoR6LLfAdvKMCDA8Y3Uc8Ubufx8LLeUBb4Z1hoVoZvtVAHgNojghrFs2C9CW1rEkhnBPBx3HjWVUBP5rf9b29DV",
  "key6": "bPXaxZmhj8Jeqn4wYA8BhzqMJDrSeuGiG1AsTazWHecEVbM9WuCtwY9cV2YyyCoPNYswQbt99LfUs6Wtb4t3ySh",
  "key7": "26WcUgH6ESF8RAAw69UHGSNKnomzG2JKM6c6hjWsnFoequ8UytgWH2vUF83eKT2muGA38u4wpcodMxS7Ydy3iTHp",
  "key8": "5DycEmanF5WjG4LThHuULxEDDdVXV9actYvVc5F6T88Bmh29ns9GNkbYyVLoa9RMvQxaQk9a6bv1m4qKWngq9t3j",
  "key9": "4s4MNqboc4ZkKJ4BHz6ZBStmCrrTedDJFeUa2awoqaK91Exp3r1V6doWx8LBn5Z9acji1aNpRbmALTDR64S3wwbE",
  "key10": "5vZFC48DqhwhMJQaAhn4UDP8SnCAWNhMeGb2t3QxdMmZrZA7jCABeX1pBHgwi8NaeRAoJZ9VWstaGUza3Uo5zmLF",
  "key11": "17UBBZUz157RufjHKNKCBmjJ68gCt7kr7e347z4VbNEHJyz6REBrZdzdmUShZCK1jHY6tcNfQgsg2xborvLABuV",
  "key12": "3GBZhkAnZGGueqveuP2q6cs7skbsn7PXRpXi9vpLR6y9Fab7SMZeQn37uNfryTquV3WXrQSYf6zkmZ67JEdXgTUc",
  "key13": "4K4tfqChzJFomfYDscNbx6X8qRpkuRVhwkoGQ3ajRW6KAmJw9oGeSUcZcU7Hy43eiR9cLxqyz19sZk1qVHtsMhdG",
  "key14": "2HQn6dEbAAoSAPTcBKsRfGruXPTfATsY96JEETPeNBhaEZH6aVDr8ytfiGHu5J2VK4bQJKE9dn8mfWk4DCBi4HbJ",
  "key15": "32KWu4RHg3saYxT3s2YsQ5LhFySkT8XVw2u2KK5BN2NxsZHxgPYcr3WaSHm9RscaP1wdYWk4R7G7bCaThJmiSiUx",
  "key16": "2CWyMKYgo6mtEfQ545EWU5cYvEmSNiztkg7KRBZfUELotL8PtQREzQhzqn8Xeu81jFcUopn8QoJes1NBU1Rydpxu",
  "key17": "32SkUNMeUCxxXDaYfVYQcVctSxc6uh3r31QpEpsuq5ctP3dSjbyZZLQcs8crcuEVWJvLTWLps1uiyLPrBiDWSQvw",
  "key18": "2B9BhJvpU2qpNQyL5tKiZ7oVc2XS5eM8CK4KJ4Bm1DUJVtr2YZ7d6Vi1qCRZQMxsKJybKv9X7N5LtZUKYB2sPa7S",
  "key19": "659PGykvqDt6YDSQJdG4i2gmQrZe8kzPN3vhfprcR3kDq9LWtYxYP1zgonvM69UujyEpN1vQGRWB6d74vDKofP5w",
  "key20": "SxA9AKQ93S8kbfEFFTCPxMYmf3s1M1sJXYGCL3WLVWamTmx4pXGf8bq9DUJmAqEsQvTMLaeKyNiC6Yf5z1WRRzF",
  "key21": "iZYvfqAwL1o4t5kWfLqtkX2W2xHfnpUaUCWE9tmNzBDdYfG8KrsSsraibvS3gQxMQjGhJDTVYzAQDm9XL3LUTQK",
  "key22": "4NGTyFJpL8y3dozFcHAGSCbnFdmP46aCJLpfgFaABfWjiy7MEX59obmRhqSUoUTLLW8UBcxkQQt7AqVgjwUfbCMR",
  "key23": "4BpQjPsMt6VSUzUgyyJG4u5JXWTLvuZaKWDeuRfFK9UgXzyaZRbpkcV5WzQDg6vjfi1b6gzjQ7ibizat5rRcgNPx",
  "key24": "MGs29y9haLF7jEdHETg3feyguyPaUmNqp2FYAgnqHPmzXSvVx7jJ7xZRhavSTWroeaJNrLGpXsi4w5PCYcRFgm5",
  "key25": "3HxVAsN3zMU6o7GSknuDdccHeGMQQsMECfqRt4dyiRaWKAVwSNdJR7zneeZfRXg7hnXNWVNk2jzRs6APeqetfqJ3",
  "key26": "41my3mgutunZT1JzkXPJueSHzEmzVsiQ7ndtRZaitoBwtRXy7Y15fjCDa74cieg4JmXoukbKEDvjtV7EdHWLjpv3",
  "key27": "UJYCVxUDTUQHzHBSGuQrPufuuYiwekkv5CofbSrhufpjojLKG4ni41HJFGEUnw7ftscRvkzWwN68ncdwNQ75TFb",
  "key28": "57nhEHK7i6kC45SbDEgCn13UNNxkRZGnykhXmh3QkWvPqmcAdQ2dxyGhZUz31jpyVju4sskPUaUWyrFy8BDik7iC",
  "key29": "2gPYLdHB9RskMjKLhL8mXCxL2Sn8XzkhRiwdbBXquaXyDdp99bCPDHi2jzSr4TMggRNNSYFZFzEjVbjYEvYthZ5Z",
  "key30": "X8DdgbPw7tJfFvtpAV1fne3WVpoM8ZpVPdJT6GTQUHZW6WneqeydTngAx59hpxdtnXpZ7JYXLRTih5Hx7qQCSyx",
  "key31": "TN6jgwSjBp1nKFRmBmzKU7mW1njRNbhhdjt6Kqa5ZUknkCqEmcHzhAUKtmnbhTKnCksmRMHjqH8eZ9GSk6YUusa",
  "key32": "4S8qS1L1idj1iqYmGvPwEaaM2kCrEey1gNKyMbMZ7dPXWTrQHxz93oVS9MRUThwn4nchRzkjYh7dY95vmqBWr9Js",
  "key33": "2gZeSpPfDeVFiJB5Kp4p1D8UsYmTKMiiNs8FvtHVWXXThvJJQ9AC3uM5ywvDAEPofaUKQAzNeWSgxgPMsYyV3BdM",
  "key34": "uKKtGJkG2GicPUKFeA79JuDDo7KnuKEZQdQKw7vA4T4sHQbzqjdv3bEPDo9L2XWjbrCr5BDh5CqQymQ6TdPiJ4E",
  "key35": "4eHfKZ1sxFW9YKStCv8yiQD1DNHVBNfGxaZw498bqYn5Qk3WVJMr8JvqZUG1TSBppy6V3DLCpH7Rzrk6SThYfgF3",
  "key36": "2oSBqUKsVg8v3AtdkQS8CgGv8ZRRct7bkkeCSHMx2WkwBJRnDJ5eJ1dPC82PCAuyCmk887GWiZmpK23Cd6G477vK",
  "key37": "2kEB2c2mYmp5R8LRT7y4nt2DKgdvoeDfvyqZ22ZaeGWhR4XsE3s3crqHEgGFyPXZqgNJ6FjR6p44tzMuwmnWgZJa",
  "key38": "2Z52HqSyymCQkiwRj6GiV14NcNShTXVZBHboPF3yFj2u3KdTRRjXAsmbb8v3ckSEjwEznd7BkieVZULp2RsEypdJ",
  "key39": "4KgyGJY89J7zLTfH3wYDYCmedfTCwe7YKuANJQbhL51tJDgVfZi7ZXhqsdTHf1LufkK8NS35gdBXQsBDtHCb9EFZ",
  "key40": "PNBkExdYNyZBvBR48gcSrvAmXqCXfeAuDFJsWLmj4XDMGYTijbJYPyHq7rtW2nAuseCLFv4PBQUcy6RGL4uyAnx",
  "key41": "4DpTvSDhTxET6ffcpk9gRVqkYxafbKRXaW2YnWDaEfcFGqzq6RwcCtPwkYCusmRsXRYYbf6s51iqWgQK6TfKJvQy",
  "key42": "63BiNMp9cvkao58dAmaGDhFm5tD1QsHjq6pj9CaCFrrhzhCP9R6UB3dQJzdE25xQ5qMo1oxMbQzE6FuDC8ZWA8KD",
  "key43": "36T61WSHM3Q67SvG2BT8VP8sD27cDePmMa5Fv9HQusbZvK3SJAFWfMTFsuikegH1iwkVGkZwwYewXGZS8y5y4Jmt",
  "key44": "4FGcM9VPWRMh1P7rNYDsHoFtfruPGmiBzcERMxyAdf2Zzxv8BJHCsa4iPX7jpQdSwegfg2f8qLweFUXNR3AfCWPL",
  "key45": "d6EhBy3YrHTLUdkxt3UnCisLs412DeJ3ymLpBrev9qZwYJ2sEdK1n472tHoLpdhNJn5sXwnzXVmJUbq9mW7rfhC",
  "key46": "3RAqPcsnCs1XzNyu6Xr3DgG1tujYJPGLSNsbds85GQeZ3yfziusessPjXnkLBGa18i3WmnukCBXuTPo4Fvpa1B6s",
  "key47": "4akXRX4XWHbjo4Nn5fCUZTvmPqW97PdAqUWtuhz4cXtWdrQskLPCQmZpwJmcqDH78ZqpEWkNe3tUnxbv9b6sALqi"
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
