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
    "59waVAof4GgWQnkrCLLbqbu3oK8sY46571TVFUmccMgcq3cEQvG2X6AcMBu7Bk8HSBoHq4cJzNHfR37dkxRRjUxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Qqsyc4wYAUuBMSazBxdn5mHg4HEp35orvpXwyiBxuavhdZMtWPKj1KdUHj2ZgPMVhb1w2RGZ3XtMDYbH5uYUjV",
  "key1": "5F8WN7cyfqpJ8ToW4hhzFMoFL66bUwXYjMegzkDM1awWgmKo6RyaX1TaTLp1LJLEFKBmE9xLP8qAnuCNyK2WK3a4",
  "key2": "2qu77CKStPKwSSC25UYKfshyMx6Fkv3znLtqwttPp6LMAfyyeziQhjaGyJ3ebZYEJWav7CzjiXvfdzC4s7Hyub38",
  "key3": "3Y8AkBGMFiLtBYHDtR7CgCr2F8PoteJKvh878Dw54wAR8Yy1c3dj8pMc4V3Y2Xcx2Cts3UK7tUDajQkpv6QADUdc",
  "key4": "5AC2NvPR8bKv9o4MmRVA3qXnsyRXf98ZPZ2chV6mNkwTyYh4ZHeFNaMY5uDmay64d3hZXWQL9KMR3seLs54fTu6X",
  "key5": "3o8MdWc9hSVCu7fAb8FqWxrZkEqAsWaBh7KwwCDHGzX3Ac4mLzFo9tsM9tozzpgkhN2P9DxS4oTrK7hpEaokoQAs",
  "key6": "38f69wFJpBiMNmeB9tCT4pgceHnt66KazEWBit29TTnrY9cMaq5BwrsS6KU9RX5Su8vWynKFLDaQsE9KUpSZTEAh",
  "key7": "2qzXbCNJm3mtjmsa1EMG5RgaunaQAcA4ouBDBQrdgutdqdv8wrZ39fa42aXtfmjrZta7SQxQ2QfwTKPEddtJWmUf",
  "key8": "3WGwN68nCRbMgLyVb7ADmCJE3yAaBQSWabuuo1uGdGHhCzUkexBKStaP5VkzPuy9K8eMHRsJ8km7y5LEacYHBwPz",
  "key9": "3GbBNvYQTuyvN3qGZtsW46GeuanbaineMBuCSdA6xP732LCRAuiBUoHCi6ULXwiP161htU8zhQGJ44Sj3zSHS8C2",
  "key10": "1ZnEV2xZkzFEuAi5mjkA943HkUfkWYHXnm298XrU9LVQSNJ6iJCM3i6PqCfuWJH9C3BUAQe1hCXcUNzuVYj9xzw",
  "key11": "4Fx3vASK53hQ6Z6nt6BXF3NwBLxHo56PG73iUiYgv8Ry1xrnHsxY8h2Tnj24qjUQx6byK4SwvmNyGUjHcc4EPMj5",
  "key12": "5wZ9mm1F2kCqXiSe7zNZbvpHFDFQCkmpJuYSB196gNHMroAjDSfXi9HsByjmM3sR4UaJXbhuXFSkBvdWGPJ9qnqX",
  "key13": "5qCrnGfHPCXDGKnsqX8sLxCFGp5TjRuGTMi3SF3XUvAp2S2Je497gADt4xaMtJRzxB43CmzazCQwU3aQ1Lsn8zrr",
  "key14": "ye2LMBZaaARGkwuVEiKyjovj6D5MB8NHFcLCDm22ve6yv3dcoFWEhXkxMX14gH3JE8MVbTXWFTujw1invtz5oBh",
  "key15": "5U1JpTySDcR634cnRJbpv3MhyXWV7WgauHkXknx6w7Ub58zfS6A2Ae4Lw34FpsoPMWbncS2cJpFajap8DYZy3o56",
  "key16": "8gi2KGgFkyz9LaK5xVXkA7tqXA1LpCmQ2qvyZJZtwWAkAWY5TsR4DiDEQ2mCkpu1pWHx38Xnf5sEiNLh6SRRfXY",
  "key17": "2yEAbXEFZn5nGXQVJYutYHgrwyMTfP9E13tH8bCuvrGhPm3fFWnHMokHHeR53LFwgYYW5RTJ7RtHfKYewFbAg6Uo",
  "key18": "3dHkwju2rP518NVJzSbRuAEDMADjXNdqBgSgp952EfFLc5amQkFKYQAAZKnjsunijZezRoreJsPotZxANC8dfxsw",
  "key19": "5PtW3CXNmafE5AsvtcBMpZ8nYTYcTiGqg8XrsGFJLFsmgDV11ysofta6mHTM9TeLMbNE1rtDPWRGLGis5UPGVydf",
  "key20": "428rTwXCGJA9xfvFH87GURNEYNwXqxg9R4eenCXnTWt615g1268EhtD8Mt1mtpyqfYfBJWWTKodoxqXQyH5Y6aUS",
  "key21": "5Yht9QNMcZNK1uzRZM4TLzmnVdbTHtszZLXPf812mUUwpY6gJagCZWjfLAdysd9RaDTi2D716WF26bfhjrwfY2yH",
  "key22": "5nspZkG5i6uZK52jWiSBwepv9BuCs1ubwdqZtNQLz3zBQt8PgpMJsu4dD3iyekAAzuZ9sH7MR2FW9LByv5hvh47R",
  "key23": "Ak9WJzYby51xqkT6hxc86pGjynTiECWR8HKj6MAcMYoWofYyxfAE1m7YroU5xK3G9DnDEfVN1dea6YN4BmAeRa7",
  "key24": "48hpekgyscR6AFTnKtCdSzBY67CzwMRcriKqFa1AQ6TjMZJNBYi4yAZs9jY21pAE2fWQb7rLEQTGghRU24jpQWNv",
  "key25": "NJ6VTpom8G3RWKbm2rMLKk2cbDnCLJbB9Ux9ADe5yAngrptXzNveo7hpJmoXzm7f4MESQKd2uKxi2fv35zENvjF",
  "key26": "39rxXQNqmzj7y9oM1RhSXQpBvbgUMadi9ARpAkKyRTzKnSwnJALbWASHgB43o4Mtc4WaVsVVdNZ56sLymUb7fKip",
  "key27": "44koboeWDjxuhpkuuSxbGXidEycDfCVmZGV84yAgc9tE4vz2EWKPeaw61YhKJyK75eJoXnTb67ysbEskz5SEH9CS",
  "key28": "4kzjzRyZBKMKkhAQwzEavz9hHLwDPron22CnUBdUm3jeoFGsZyMmsbQGS27dQzaf1cLKGXNpeBZ9dSzN9xV55Pj4",
  "key29": "2vUEWFb4vs6J4FwzkvLbYPAktmGDH5ZEtgRYhA6r4ZCYB9k76QyfpbnoC7PgrVJv8krFq8mYcgZH9o1S2qAYSiFf",
  "key30": "29XAkRLUMaQ9rnqE9AFF8BiewiH7gFgiKAKqncr6nMrJ9uePuEbbGBbwjAVURcNEwpJk4qvcQXrAHphN27mo4wTn",
  "key31": "5ccfMdrKEg8Q45aJ58cssHvp1jpgWUsPDVgJhKp6UmDXER8gSiB65K3g6r3JukahWkRUkjCTCSpXHcZw3ih9fQcW",
  "key32": "2rJw7UYSL9xdggXJpZYZn3xeRR7hhT9Xcpa1bH52g2Nxd9UTVPkSN7iHLRdoETuCu6DPSyJZAQ2qAeYJgRe1Fm58",
  "key33": "42nZs3tMWkSMmKfGRqx3iWP4fdDDGHtMLFX4kDU73tb3bCWXyXtT1pfQ6V3ZSTuPpWhVLayqKhJh7fu5KTkSDnBF",
  "key34": "4uDmBb3YvM5ma4pUU7pnco7iNCxdKiiJ5kgRnEwP4ccsUW7VBx6GrcgqwMLAMLbxN37knWUK6jYhoLzfq3vWQi7W",
  "key35": "CWVbk9edFSGjLeJxKtAWzuSNZeyXB7acyBJB3JaREycEBaUx6EMBhauLz3qSXUM5ShMupwTnPwnbaYyVFVsncoo",
  "key36": "5hDqRWTS7tM55WHcGrCYJHdUjeye4D7b6niHR27NLbT5DRgT8yvYrgxeSS57isiNmNt2Tauad1XE9LszsTST5XC2",
  "key37": "5pxDqSbZ5MJeq7JKNuag5GDp6suEN6A22K9KTcxSshi97BqZCwJVhQPduAqkMmsJsNTdq3GdtaFCBLFjkYHNHntP",
  "key38": "4HotN49G4fTtGJKp4ppUitA4SBGi7s3S3BFMVn6J5Yfvs9FkGdGyGqTKVCmVUBdzR1EuZ3SXG8hNmsEtcksGG5wk",
  "key39": "5sgVbdmBPG881YzVXuYUJTDgzmiG4HArPhWJLJFFhxFj5UFCNZE1Gd4GzbzWVcw77nNqYTqng545H5kLHA2qRLFM",
  "key40": "5KArWzk3rr3dT6Wga3Q6sQipLYiXtwAkXkenTYGzrWZj3mm8jMhwvU3qKHR7TmWRUoJ2seoeCifVxePLxvXyF8JK",
  "key41": "2rnzSfttmDP7LZcFktuBbCbvtWepgN9kjtSDypsxEzGtPFCLCwaxApen2oZu2YSoTg5cBskpLkP4y57S9NVmykd1",
  "key42": "2iLLDKN5CzdXPp5CNQHA2EG4C16oZSGJZSLUZyELZCAFR29Hhoi7sJX5FWqK1kvQhnVHJebDKykNjGBWfQ9ZLJgF",
  "key43": "9YeCQTQQJc3bnogt55LSRhiJGak7jhW2RWCnrtChBFx3NMyCfHLWhzBNnZ8fbBpzifgJqDeWxDVumi2gZym21Tu"
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
