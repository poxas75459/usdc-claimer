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
    "5RBUkUuAcLDeoqeT1LgaiRL8Nq6Q1ZQRHC8HaX5fXcoJm7umvs6NS5ge2QPa9YnZwRvA3pMesi7SsFAWzjJY1YUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QCZYv1hXA3moCzusJbyiJuxi8UYX6hR8m9mYLNkHPb7Rk7eE7UX8Dshn95L36iiTsgvSSaH1p6h6dsUNzYypZJb",
  "key1": "5gBcRY9prV7MruVNoPUjX8d4uuUaP9Zo8wpUsEc4aRGUjUMbVHLchY9EAgRG5gs8Pn2zXNtiTUx97zSqvsYxhcqD",
  "key2": "2E4E2ARkFB17S8qvAgPCAvSMXDgSBcxzdg3Ypj4egPWfrLfx1DQ2EsQrXPqTcGNsiNtHoBe6EY2TG3DNEo4rnc3K",
  "key3": "4A1rQXNEC1GRZbisoK8deoD48Y2qfHoD4n9zNSwFTUDtKJGcUQu6TTBtjE6XEPawyKdvFBGYFLrVadYmgVTyJQn1",
  "key4": "2LSfpAEzJhnarr9wKWEhAW6Dg3itjgSsd1zBUL6sMTmyxByaqmNADg5hZpRawMaLHWKp1G1ffwjazhbTnryinKvt",
  "key5": "2JauRXLnAdrL2cqKgFeMKnZQkeALU6YZVZHUBGDxLZ9AvXRSCGUJJWws5fVdw9kSVggsGZkiZ9Jfbr2qqmUbvgq4",
  "key6": "2SkLhnYeSG9Wz27MVr5jSSNKnS2EdNP49KMwe8VKoSqjpSGDxrDNQxT5yAPwuuRD5WzeCS6hbGF68prDKSVWckZM",
  "key7": "2zfxuunK2LWsVQu1N6rPy8FLbo7d8Z3WXrnym78CrsCBRBc4Rn6YuZrL1VTiic2wjYc5ioJ3ZockK41CqnJvdQZ",
  "key8": "y8TtsKtm4vHdVUncdoV27V8WaiUhsxL2GhpuE9S7gU66VRdAYVnPfVXGXQ1bCBqg741fFY9HbrXDjRs3e2x8P2x",
  "key9": "TQb3z4PWu2Zg9C8hJNkeq3pk3VU4oFGWKGJ8td84hhMi1DnqbmKdBoGGuuqSJrsG2CTkwD7iAFkmdDpbnLU4asj",
  "key10": "9z1yEZhL3WVeXuFakNnBgqNZr43BDc7SeCUtrPdEAovcFdibAjYDFyRuwUyuUmjQRjNz7t6rPcYnKyQXxVk8HDN",
  "key11": "2xACs7roKiwDJ31hQypjjx891Rt5Za5H9mfCT98WwS2oYHZnzTMksJqxuYbuAfQGg2eJ5MoHSpDYpvWAFnHXyndE",
  "key12": "35Y8BBTfxe1T5QjZ92bDTDAytdiQCMp9ay1N9pgEzUe3SjU1JK147HgMwDuDZdC2TPXFpSKoWWKxScr16boYGUKK",
  "key13": "33UKG6xtwEmJo3deNbsvqJUESAAFCVMBPzxEBBZRW32Ui8ZEB8Mdadnthvipuy6gDAjGPXrXzqnA97cyEk91WkEh",
  "key14": "4AvjH9VxM3yDUkHr7MAkC6yWx9aQ7hCKyTTHb6XwHFXMBSVDnvexYMDhiFGCiDxMCBBwew51dLqNAfow46ktGN6j",
  "key15": "2z2i9Bo97g2NTH3woxx9RnVe2f85mhJyVKzP4tuZUUc8Go2sHfzkg38eunpKdx4nEB7fx2LPqbWUoPCW91vfn1DQ",
  "key16": "61a2bAMdnRL4ARUuvUSobkWqzkCineoGDAMdCinGcDGbcL3kmFQmVmJAmXkYPpK1Fwunu2eTWf2nLseVCgT4V6DT",
  "key17": "3f7LyoaurPUjyLwoxbWTeKa9YZv8SejSFLiWLyTLVxuocH2hKF3wiZb1eBTk8eetbV7saRimTr3czJjebicCC9xp",
  "key18": "3GtX9LaA8bHfRBoH2ekWYp2Wg84z5A7c6xMBTjS1dJZvwr9t6dgchBmzwzDce8MBNY417hELmqMJvfFmUASqoVt8",
  "key19": "2aivdy4LrRCCcsqNCucHActXnFnNH2WyhNhacjsYo4xzANWmjKMLGSTBcipZvAcdGDg3CbNee8tp7DQKgw8xH7ky",
  "key20": "8YWk36xGycYKqVbJcitMnYxQS1mhwGMD3hcfBNUebokMiz6t3fu4uUhzA8TE5NWaMY19PTC3CzkGrk9LVAQjGqf",
  "key21": "ncgMbppnmJ55SufcLeH9VDsiLMVfMnPiGnwhcojUX98tnwKto5VoW2t7Ew7tn46Prhgv1RMfZGnJM2Rbf5hsddT",
  "key22": "2tSxgSrYT2v98B5BiXXKGqnjWkPdwi4B4KXfybvJx16V4y5rwtNLavbQY9N4uhfxsAr719xhZsHTrBGbM1LrGWFJ",
  "key23": "xRHoWt1hAATGWyi7AJgjhjdZXYQPG9AspbS1kG8yTnKW56kG47Cp5mC2Q43WSYHtkGbJnJR9EmrX45EAuZK63P4",
  "key24": "5fMavUjZgcRpuuftEmW5p1JM56EnUsSQHkHL1sSadBzefPCskwzPYEuEqgZYuchwx4Cz6jEyuiGQgqb1wXGkreCE",
  "key25": "4c4nohzGiYu7HEn2FebjZYsC9bNiLsfc3tHb3yQwXELZowoQwgQ2fy2EcpnBjqU8mJQXQeGHuNxFauz1T4sayJMu",
  "key26": "32sE3kWzxoWEt47md7vzodLuxgP9pFPwe9Lwpv4vnbUubMSoEj6R2ZXwzcfj4z2Thn5rqhCRSNMD5Gn3gHNumeJG",
  "key27": "37nSQNVu98k5Ype8rYcBt32HaQQxYb9QjmLVSKuS9yyiq7N9JbzKb5EK22hLUQ9Uomc8rQvdMoP9UL5U7Ga7wgv4",
  "key28": "4xgGBQARo5LnH2TyidxTddTBBGnJAmhXG3FeVesgZAX79zddMKpkp5MMSWvEDpwLNi7bdMhfDeiCw5FNTqeioM6R",
  "key29": "5mmxs1jrReAmVJUJDNYmJXvE8MYSup2qbYAHYM8uRnf42CpqgqV2KK489y8UgjDuKB6unMqzrXAz5RhcnSemn6B5",
  "key30": "4QANdbWbj78Xd7vQ99fCPZZWAK9fp2KG2zNnTCZLXRDvbjFuwApBi4PxCfW24q8tfCLzQSHmF2BhRkPVZHSPLfcQ",
  "key31": "5iUMvpZT3GQV3i9wyekySy6EsHpPyfG148eSmLGdCkzrE7xm7vV8HS51Gv4eaa9msza3hKdnMWxN5UxqUUqhp8BR",
  "key32": "39ywtK1KzLj1oFcqhdtmQA8w2m88PwEGm5NktbqjPuhqhkDALE7GBRjsm2HbWwZVENsh8egEnLLh4qvkuxwimQ5j",
  "key33": "48DrhStucMgjLhQqJvAA9fYZKmg453vs1abbeqGHD4ttafSQCZMNxTQ2qiV7LNyGRCtKN2coA3z75Ui6erWHizVy",
  "key34": "5Cn3SniXFpcZG2SSwbK116ZbGa2oqQ3mPD9PvgsR3MfgYh8DHWcCY92nLiq5PQmQrQje7GCy1cyfftc3ueyfNrzL",
  "key35": "2zQt59hjN67MZeMZntHKbCX2xgVeX1Lcphie23hbhbbhcSZCmGFRqXF6hQvfbHDL3i5nLYVfmbdrB5Lb4kHRFexZ",
  "key36": "23tCFknZMJVA64gpAxDhNVNcXpbVyH4j5ExeyzguB5qT1DzSzzFWhQxd6hv3eiTD7cU3BC4bUM4ig7yXdXyFYNuH",
  "key37": "548nPShXQagAxnRaxhCSE4QxRGb32adJALYuFmDQDRpxFazSHdqQkJ3f5WAr4hYwd5VhpHm9LkzN64fU9oixCKpS"
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
