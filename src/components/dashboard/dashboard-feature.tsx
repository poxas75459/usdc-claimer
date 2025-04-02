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
    "49kKq1xn4H2qNR2PZ2MuMPaoaZrad1wTPw9tP6SK7ZLBU4UjcLixmeDJo1wmHWLnBJwXtCjHZxBMPKoT6QdLoybW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jU1WdYcET1Lg6x4t77n9vMSoJctN7BE7w1Z9AQi6592gsJgL96G6KYmckRZNdm97g5PG2UQ8XNA8CgfxeKbRFna",
  "key1": "4VvFKmQNhEygR7ZBk4ur2F9BRUUBygTVz78d7eLH5ENsfgTwZQACF8mEZKpuRXU71eRzKukSwVoV4hEnKKjx54iL",
  "key2": "4b3cCp51gjQ16nW9oGVww7eLgm1ecdUr3ec9j2Pp2YQ7aRWVZpPwtnaSQe8o75GQUYpMLXn6HQ1QdXHsGMZeng45",
  "key3": "5k3qfxU4MLfFPPe5jguZfaEbqq4p5VZA6JMK1oGSF79yC6nbLS4ijcE2bxUS6pr6Ei2duaWxuWHxsUT1P1GH4rWj",
  "key4": "3uiR3vCEZpm8HiCRcQWLvi6EQTRqHPUiLSczWmQbM3cZxWQHwRZDmLA2YSfWMRmBqiaQsB6waSSo9zv855wgF483",
  "key5": "4GJxkXQTG1FjCp4zwGqsLyZcZh4pmZ3zDvLD9GEJZS9okTYkeo59dyPJwgnSoiaZ72VUStXZH1wWx6HVia5Lo3ie",
  "key6": "5D2HyToVwsgNfJrPnr6tZJyLSSSp6t9twNka7B9TSVyVfdwg29b11VwBQPb7hvsEi16M6uDaKFgid8GV2xSWWHMo",
  "key7": "3mqT8S9sdVHdB6jUAcixEqeY1PW1FmbXUaNuUPAQg6vGGk1HGSf3skvP6tBHLJgii433JyJAeXFboHiDigdSnqC9",
  "key8": "2EqG4ir8iWL1ds6bcesbyH8gwga8wG5S1R5UU3n8inGDJWZT7HZ85tw9idkccz2xkTHoFS2Bu8HG8Ed5d2U4uT9T",
  "key9": "4RrC81zLFF1RvxqijBvBeFsZECFPb2MkBduQWDbxiawFN3aMoTGbzZZq7KRXqWvfpvcMRuqk1y13GYdfitjJU4bV",
  "key10": "2n4acz4wSVJ6g2uUHmSDBxFmVuZ3KjVRHaFK2muCYJjkce2dVvjLQ2wHUpU9XYnnpQmS9Hqw48jTuu4srMKft2Zs",
  "key11": "617EYKCTHZLvSmehz5wu9Yp5YemmtTHRLTA5DTVnqt5h4EMvpJDHfdTz53WzfuWWAjtqc8Rs7jVySNtWRiyARw8X",
  "key12": "2byn9Hc11CoEDXA9vdqNPtiTapiaAQPu1roq5tmAwKocdGzaGin22xp2nvv7prHVNTwu659DZx4q3QmJbN7wpQAb",
  "key13": "5vf5otGoJaqyWTRfXLf89NPiDed5iMCCTNLFcKK1zbgCmUV8keak16Tm6UjAXvRmfANwfnGfTHJi9v9DZtKoPGfW",
  "key14": "5KUA262ChDjs2SmmECbqVtg9CymHVHUrmaVcspCy2q9ooi7BxzozZUnipdNjQymGH6vg5cKmWCxAV975i2XoPMt",
  "key15": "4bQTxshSNrHQV662yvMcKj9j3UuAd27MYY1Uhr4HhHLv2Dt4oJpqUqb8YhnWiWc3dWkiVWHe996fmrSR7dWQgkB2",
  "key16": "4uq7gEMCK1gWCTLwBZgU2RBWvwsaTCqqUqTqygk3FJ9P8PwRbqkooVcGzVaEG58jkyS1siMjeBDo6zXA4qw4i6d6",
  "key17": "3qizbexLUhbA5xHe6x7oWwSH146u2SySpoNacG7i9s47wy9nZBgR8mRT6c1sH9jhjN6UNjM3ZyE15bqGir76sjQe",
  "key18": "4eSqCbW6KA4Cj1FVpCUHmhttv9LStv8kFu2kSoEaegdey4FN6RiMeAQ9RzqthnJEnid1ztQBKAtMJUwHRQyHSu3L",
  "key19": "4yfLbeKxH15wqwKQvthyCiqotcYRdtBXcMcfewTexxxFrcv53yjDxhjvexDpvi4FhmrNDBmiuqayqrzhfVzqqWEs",
  "key20": "ejhtGj5uYAqRJpiMmvpUFDQvoGTkrVReJhdQpFzzeCowGq7Cb52EhzWYqbVC3kqex3YUPzbcWBVkp3wqqxqrmtG",
  "key21": "4re1hpLd1hxmor1U7TVpTuo8kn4WSPhwMoHFRVCrkLdqxRPHurE9CZsF1Awz1ciczXPFEkxXydRCwLAMPupkbBzQ",
  "key22": "3chP1YShpkjYw5HtXZvajzcjaBS529owvCNUcq3iDXeJYvvUVmfvcvM3HCZwaCEAHQZSoDLWo2BvF7Ey2ijfXCKA",
  "key23": "4dXvPXujpHjA8c1RZBMSf8chNvZKBiyiy83Hr4noUXCr9tVKe1WfWVV5ehR2W5AyCtCeDLANgbfbBnpGoFmf3a2t",
  "key24": "5fHaoxT5Ct1pR6DQwtQyA5MmGahxRYFshS5sZ45P9q2KZNa2QbpzCHt7qz8uBZFHtQNEJbP6MPrPFjCFrpexNxhn",
  "key25": "3xL6J8yi1QYS2UuwCPwLAdnxnj26uhxFdqHQdDsKhQpTYJeLR54FHCJyQaHEZpqmip5WMWGxWR48hcQPacuw2A3s",
  "key26": "63c4HoW9cLWB1dQqWdjtSJNkF7U2rVdQTbscQqNFYyu9fvWvDumjcHvQT77dNGxX7kN76L8KiSUUW6EpCyGLyzMP",
  "key27": "4rWEH7uQg3i5B8T7FAznYzN5eAtELcmxrZy7VbZk7yxZ3o9aJGMFDcarFfNi2LbpDxdaqEa4c77ui1T9u3PuMhhu",
  "key28": "2XaFTreRFZ3dTX9xaQpGLRydGjF6C5dMAzzdnuGYm9RVirQfR6pp8imGtGmQAz8S6jL8vGc2VBgDGwvshVj9Pd7i",
  "key29": "5tkCLX6w31Jj1wTNHRXDzYifVsfh1EaNcoDJBz79CyJTKgEsAoTAkytC3NTMQR9oTE5jCnZqr4ddvi2RB3s94QWv",
  "key30": "2D4v9ZgWAXyi9eoMvrFJY1ewRrB1oMZA4TBAcTFfLtzbBmTVyD1ivbjLYJ2gN11uajQWc177gJFrUWz83stV6YQw",
  "key31": "4DWPop5Ry6JYsFr3XPWPvoBPZRAKegAt6yfH2YrgqkhCuHtmnMkQNFbHkHiM46K7nqBKDyUStqXmS3PKftoH9fG5",
  "key32": "5vYHptMeM5Vsq6dwWppZqXPcLHf6K7hceEhL1uqYhvCyEaZq26HDhs74ediBGoviYftSmP9j5t6dK6uo9CFbjj52",
  "key33": "3n1gZqgsvVvLrTNCmruNvmRMLfYYwNLbFyByysERS1TGA3MqbPRzFHztJLg9YsEvdegbJaU4pAxju1MzVzCzp8Nv",
  "key34": "5Nd8ScMAMLynu8x8MkVYcwG2SL5QrkJcE3wRrCVu8ugca361UoGHLV7PnhS5CQkUKtL5Cip4jUHU671JWDQmBqzM",
  "key35": "5p4H4ycDgi3uUx6fnhe8H664rUvqvm5CRZmNmDb6JBYrGvsus17tWHDg4bXVULCrayHDu7WtXCvRD1nKBydw2bXK",
  "key36": "5eLQaL6rpzTTuTucwyWdkCEBCk7mALhkcS9swqLU8AJGoGvQ3pqPtYmRa61aVTSWf89HLmf4m88RiTjboaVtkSai",
  "key37": "2AvQLh7B9HkqU7uHzJedX6mWmdvH3xrhrTG5hQHpoVd1g4gPgsQsyniSyGYVqhLzDQmwxb7Eya2ijuKf6frRjMe8"
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
