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
    "387agN1Jk5bGnciUtecftWhr47CbbuRpcyNaq6fqzc6Bxmr5pfWw2KfiE2Ls8fPCpvdJF9DNXDnuFS9HB78oVzLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BrDyd8tE6xnP1EXvNbQsgUB4Qp99WuqSmn1smeunPrkurdXvYkuXptNzuVVBx7VHqWacR32jnK5nbeMXxBCHHqr",
  "key1": "2eZN6UZkiFfG7XLJYjuhGGs5jGZrVoCLxZFPFX6DUQkwhbkFB3nsFcvdttxGrf5AekfyzWwsSFyynLeCrBKCcJHT",
  "key2": "2YbaTfaYAfdr4yLYzMLd7ny3LAgcWe4ULRfKbitmGMBVypTMKs4VZ6nsXrhpiVFremnEgh3SACHZuGH25ips8FMK",
  "key3": "4aJszsatyUrK4gEAYGrvEJpiDdFFJQcyvdWoDWJa7aMM16wdwaoQJrnP9yqjJyfFxmM7ckh3wMTZxmuZUExnfSrG",
  "key4": "27T4UJHD7eBCgzXcQ6Cf2tqrc3PJDb4TQSciRyGvVwu95dQY62iKaRULNQfbuMJTyXgTkC8FDJ32P3GU8BykC2z5",
  "key5": "4R2cMMMpz3vKxWjaHKL3eLF8G4aRdjWnoVAG1wmLRsJ8UeM64wbMDyXjEcptrrDqz5VQk8NW77Bvs1qUajqVnjLg",
  "key6": "3YhaFZPQCBoVKisFUPDKQNVgS7fG7tSPMCHkTyRZdtYDNHswJtFw2UD89Z9mLKhX9d3UM4eJWGzUvzoSdbyoKb3s",
  "key7": "3ZxuUh99tBMbJZwHWK4AkrxpHRpYZsBH1VcVyJKB18JPemowxqJb7wmPA8WtnkrgoFg5zzLiiX6ZjR9p2evpBRdf",
  "key8": "9gvqzSY8RxjNSvqhDwJBDogUM16E18Z9rQNWSz3bN5tZXpvD2Kfj56azJwhvnSCgpoqmzCZewCEWqw3GAQZhpyy",
  "key9": "rbY5kk26h84awhjqxNmncdM8M5qyCKaaErNqsGJDD9mku4QAnSp2WTBb2SwYH33SP65S3HTxpbxDfv41AQvu5Kc",
  "key10": "5zDHqN5EQCax7LeXkWXiHRjq8SjYxfiZuzij41SJLMnMHvTwmfjuyzDhcfRqW2r9K9F3NhdGgLgiP3WdCxWjvcB8",
  "key11": "39X6UmPGMjuk5wcKD9hwDroq3j5TC21jgDkWSqQVqaHjLmSkuVHax9wqDvwBRxsNx3B8WNJHs25LDmP82KCyhPah",
  "key12": "2eV2itfJEY9aePCUsxyEJt1rgszLK8mG7sZo1HY55UXFjJzPnKCW81msuDNk6fcuotpaaUWZwTxZjViMWCLjxY6h",
  "key13": "2bbcVixLPa1SzDLKRV3gjJNdsqQYD1d4viaYqFMR2X7jJjdZKLZLatQ3Dttq5t3ST1caQvQ3DqEC6wTG3PRezVEe",
  "key14": "2RiG2eRTfpzWQRDTrj8nbqhVjuV77xFXBrxNT7fc8sHnGbAx5DGjGGUmih6fK8M3LmLyxACAiCsJ5jSNMDq4sn8G",
  "key15": "2zdvCBnCf4LuBBWvHEh9y4h3ujLbSw5duaJHfjY3CamsZThmonh7yWs3K7u2PvqE2md5UWnLnDe3EiJj8re3HNyp",
  "key16": "62NYgsVFFDJVHoYG9qEmPSYCYLUqg7W5rBaMA4hYpqgNyDsaFUkC8cZxNYTTEvvWQZeC4sRxxZwTSVxbG6Y2zsCN",
  "key17": "Zvsy5aaTFq6CMrSGgGF9vWToHqncaCs9hGy7NUVHbbXR3Mza3mBZjQLyTbWgxf1GrUCzUQaoEqH8qU5TogzdFeM",
  "key18": "5wthYWYDiHmwU8b76xpHjtUxjMM3AEyC8XZxDnwGCKG8VnpeMh64kq6vU9FiV2YzxbjhEHAWcDnWBScRBM66tpkF",
  "key19": "2dHFnsPUQjuUeTtZJmHodTuYY7nLEZg848CxGGJV1wpogbhfrDUgcyhyLH4vL84wPAXY7bKgSbdtpCrtNH185Ndr",
  "key20": "5g36qvjbs1Et294XoF9PioGsPXjKgAkfs81jPgnFqyvJ8oic16G2JNkPjMjvHyZPTkr5iQVpjDMUfAfaoEAr5cXt",
  "key21": "4CmdByb66dw7SoykheuVD3mL5NgwMagy8PU3xUtDSZJhhRa9Stc5G7NquKizQvoQjbCMT3ZySDac8HLGpRvwRGFM",
  "key22": "5zUgzHT7mUTAvViFS2wpmMfRBwoHyVXQq5tjfZCK4sfGe2bkJzLEHrTYHCbKgHADnU5zmT46Rh6kPQ2v5qg5Gx6v",
  "key23": "2gBE55wXki5saLAhxgXuhqnTvgzypqh3v51Wd2gd9JxNRsD29rbymwQA82qs3CKCVkxb6BwhFvfkR1Z6vXvFVboV",
  "key24": "3SGhNp88fRmsYk4ZC9U5q32EXjaA315FVCrYFXqDBZ87ACU5w7yyJNd3PMTWq7eZGh8uG3mpj2QBfvS7fMX1w6Ey",
  "key25": "2wg5i3uJt3DSF9q3judBsTm8gTKMnzsXWBLNB5Bsf64XXxQUqshtSwrWH2usNDnQde2SQUT6Yfiiq9WencyVQ6DN",
  "key26": "2vHfJGCkzmqmVrSkvRwm8Pp31re2iyPj3cMwGDFEKqyzJn8TTNyyuiaRGbUhwSk9oEWddt9RgFnsT1k6jyXxKtW6",
  "key27": "2JFM9uGyiqa4NSKDUVdn1LQaCLtBQXryYSpvaaYSjcnG6YCHc7LpVb2mC7iVPs7W8ThLS8twyroG9U8Em7mXio8C",
  "key28": "3bQewDD4gLeN9efbk2ip2eYMfgbyKnYLgMGjgpnQjztXfBZcexejpsniRFcJCSwnuWFcWLjwYEwVP91jjVZvYzWb",
  "key29": "4bx35AKa8pmUSYgTD2ToygiH5rzDUDeB5RiUtJ2Gnz6aQ8HbY7yMtfVZxL1vD7hHZJCEsj3bnyKqhzXzi93SEqMg",
  "key30": "2qgGsQH94E64Vie7yDHXWMTfjJtqathDCbZwbWKWXZy9kuzJCysyakEfWQHYhJV1Dq14ye9uYdixw22wjNAcRZ7B",
  "key31": "4r1uhHb3WGrn9v4QNdoUgdDBPVSbjYQGRzkexhr4YhX6WF8K8LX28QQNvhBECadj51K61tCzAVFkn2ZEesXzmyF4",
  "key32": "4k9MtTn4rayeK4ME76M74b7pJTSkwzdrQh1xQy7om4m2h85R5Qt1Fh1a3ArKDRMKYrXxWR2pGUdDjummRSkxCtVP",
  "key33": "4zv2zvazWMtqWJWYD8b6K3VSrWffbFZQhtY1NMXdPzs6dF26RGywXDKAf9fEaMar2CdhPRqstbdBTWjb8vKF51oW",
  "key34": "5vvWgt1cg25RqYpMBKyGGTmnGvcGgjqC8S652P7WF4SLzScrcwGpELEuNL656k38MktspqqrVvo7oJD1xYNRBp8Q",
  "key35": "2zq5K4Me5UhUzYBHeEgSn4MbDMC4HHxfMuxCrLD7GJ8io1fGwYPUaPk3F8WboshNqixUvJUDEYGy2hRWrSRTa2gy",
  "key36": "2mcGT6Ag8Uvf7KRpXbptiQe93S7sjGVtDJC7u8GxQQ6hy6ad4zc6zK7SrbrhfSC2n1d7zth3kJMRjGozcedhsVo3",
  "key37": "kD3B9PtaZAWyVD5UL7vDou6Q4sFb7HcAQF7Ax1YuybRbLN1GKN3tpw6Qg8LZ749W71UkBtjbBy6fQHRu95Qsmti",
  "key38": "5Q4d75cyF1JXHq2YkE25imr2dRsnrvAEJ2h2EXoxakg9zJvytUk6DwVh8dwYAusL1cykFGrUGPxALS4t68P7VGgy",
  "key39": "3hrSgw3Q9YvDiqECwauLZFjaft9M945eNWVEnW1YBRkGYayAG116gTRXnjFqhd95up9MC2ECgtHjBuY5jxSzmULj",
  "key40": "4YUKv1gBhcgsMV9qRkBCnKXdWVRgzQV8jKpjVgdKbJ34rY5HEys5RY4ZsRLHJUBK6zHjgaeZ8JoDZFnb1QgytX4P",
  "key41": "23bEeDAaLCafo5VKN22oRhhpVh7oJXN3kjp6VFF9KVETQqbJn8916ZqfpEY7ZMFTWEFZh3DWvTWvMEVKrPCTpbDs",
  "key42": "gxMKFyy5bWqJgraeboCzJ6uYmwS1J1kGjzuQzWde7tH58n5TvJGawAKDwXKQebevmfbiuYYdHjFLsFY59xc3EYJ",
  "key43": "4hY6KND5F6PA3xsNPzEZ9UUEU2K5r6GB9wn19EsL2PcJza8PS2J3fA1ERLXPJV3ZoBSaGtP4h3iiDU1iGcv1u1k8",
  "key44": "5CqAP5axH7ayq7rTo3yVamzHPV7cqatJHsRAjXkjpHPV8yScJXcozbb6CDdQMr9RDajSDEJ1pNqA52baBKwnFdCi",
  "key45": "BoNKQWnuZSDSNL54oM3NfSH3R9tT6mYvaMKq1vnYCnBSim4KySw45eBn29qD7NqtXXmLSrhZ5AukQC1udQ6Wzts",
  "key46": "4TNZ8G9RQDnbLJDypZdaGgsR1Ancmbph39DyCzTRNyLVPHjEZdiWqVMAxyHjHfmDgXXd8wcabYPQo2EmHyw6xEAs",
  "key47": "4bFkR1saFpwm9RaALDABxJBFdj6xgKEMdnAu5HxcUVdgzgyWXQfcKuZJSrUKfTuHgr7sk9M29ZUcc3Ar13gNBNZC",
  "key48": "5x4m9J2kfBnfHRWuTxA6k7pCp6QM2rSNA6b9ytEnYiHCK18eHd4WfgHVAsRSMedofgkDZ6hqss3nCoT5iT9Bj9VF"
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
