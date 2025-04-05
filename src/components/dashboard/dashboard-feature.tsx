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
    "2UhBLvXW2wggpestLGNTLjeyP4vtF1RAnmGygJCF2H3xr3YVkMHVmB11UudM5fMAhgD39ky5vZeaiQALxAnunujW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aptBhRCQJE9NjrLa1PfF8bLd4JyVemWXYysBZq6Zomh1cYXDBTv6m2wGLiDt2rktYKSXcbuUMq1vxznyeXrJ25v",
  "key1": "66FLWQFszFwhwfrwVEmmSzQdG8UANdqJigXo2GJzuXSNPV1Bg8ZXa89WFziPx9XtzFJvjK4VZAMFiJLT3qJeNDZN",
  "key2": "5VrBhQ6iH3UhV1dBBDvYgRBgWJps1yk1EVcqD7RMy2dg38UCF3MHMtpt5UiX5uP7sSFjBdCWQcnpWbCSBv92Ky7",
  "key3": "5xKm5r1yUA9ceD8HZzWWQc412SL7s2tnF48aLSXm1FpW5GCZ5kD1YaCHQcfNoeHq1Z3gtoWu59Hcx36BenUB55gb",
  "key4": "5QffpbZNMd2ntbcBhM7HAPWipMpiRyYFu5kMQsaDAnWwREpJawRZgdgFxvBrzrhDpLULcGkg93jB8xtyqbrpiuWf",
  "key5": "49yrWFTC6TP65MWcMmLXPMGVMwRJhggJ9pHcTtj4VsBDcXvNwgRaqGHBFZRwDxtwprcwGe3rEEDHgTTSUh38rMq3",
  "key6": "3TcCQoCPmpXj7c17NztRR3FCaKpxYoQEUF3ujfAqve2zs3bBjmvxfgfESmUQSDHNDNyeNwn2VjDDckDXE3NWLSnN",
  "key7": "2oofXAez8hXPzpgbwmUJbLLcNtyf6c67jBLm6m26cR9P5YpsvgQCYzj6JXzpbVkk7u9rANoAKe2WtWQRUryJ3Dx4",
  "key8": "QfFqDRFxy14ERDfkqtstVewaZ2xWn9cEN7FvFHDmf3k5eNx5BB9yYUdpEKn2BPtSNWsa1mWUZPpg2rroUkiP5LU",
  "key9": "3tZMFBuTXxYnq7dgVzAVkeeNDB4grX4op4kPZFMapFwfrDKwcSp1d1pEAZaLx1KjBxH3QtKrpVdhsz4Z6ze4XDuz",
  "key10": "Sx7qK1ffzCmaWWPm2JWm1buaHQMxU3C4Q1Kp5HC2or6e8SYUHrC35c4JpgrmfM5BLJTUbrAc98EFnPrR1QgwGEr",
  "key11": "5WPNbufgnrt8htp66WAYVZ4bKBF1CyNsATdHBUhZfbJvDc25mYPd54gjsDvDgPhHbNx6FaziuPucNbE7wpNmYEvq",
  "key12": "5pNyCJynTLohukn7gCyh8JCB9fgZRqGvL4e3noMG53yPDdPCbK1kRKbwuuZPLueu8M2xJtXfhRaZtpM5X7uvFqf",
  "key13": "5LypPnaDarPN6To8b2XJxCi9KL2iciMtzFuwueQavRoGDAvjsvYuCQ9sFY8QTFPQ5saT8henVRWencjTYuRYA3ZT",
  "key14": "4wvMCumg6uT7CotpkwUDkc1jXj8nMsY9PuD4tYovyMbS3HkKqwdAo9yoQYV3FgTNXCivNiE9hFmGMZEmKdXKcgQZ",
  "key15": "2ZiKvtn8Aq9KbNCSEGXHvWws5PqCTNoPu62dAQD4ek5UY1ASHZaZLbJNBhsrHCzoEYKm8QJY1RzWwKkemKq7pNiG",
  "key16": "2rD9BKoLXYMLuMUe7kcBYmS7JJ8CdFGvJz3BVv46FMbut8xezRTaqbii786pZ6GJxPGxjiCeLCPhika9CXmcMyWZ",
  "key17": "4Spn4fUzCt7Tz2KKv78iyT1A58T6fds3E36vZy9UcTqVNnave9Gdjr4fj49DVHhfczzcpUH6UieEcEi2kk9t8AXT",
  "key18": "5gD9wVPxhB6jhnqZ4WobPWZVuS8fVD8hMQmV14rPgpiwJQCTyybgBjF9JVgQP4Qh2J5pEC9hyMGbFDYJztuVAAMM",
  "key19": "3hRhdFoKKzJtMJAma8ZwMonTZSeKowYMG5XLnEDigBGkjJPTWyWDMKXkzS7cgpfiEovpZ31oboYhuvmHF7edbuMK",
  "key20": "dX9S3tqxZ3DXNeebcRSiXszUaZTqXz1rNYw5Tjx4Z3H1p1TZq2zBn9rwTFVfoha8xLL4UCmqgdsj8ijPvLWKq25",
  "key21": "3fUqcxxavQxasU6Y6sNqbjv4n3dziWXLjCUM3ivN9MRRkjpuc5q2b4kMxgisgvD7qm1QE5D9oBgmChVo3eo5ux3w",
  "key22": "4dF9SPJngHRDFSUhdEyeKjKu56pQnK25DYmxPR9uLdd6k5KkuAaFWQyH3sEbuUFCxpBC5VTJLnBv3XSp96jMzh4W",
  "key23": "3Va3bQ924di58NGiYC68StpzLWmS8crAm3pAcK9VMdDpehcCKCeaNiXeusre8W88iVYc2swVn6JPt24A1iUyhEb2",
  "key24": "3KNo8b75MuH52p4w5piKgQdyd2v25ZWwt4Lu5QSTdLaUC9Nw13anwfRPLNQaqmuLTe2qbX3p1JGoAxKf5q7MnMw2",
  "key25": "5LHvP6n8tsM5BENrxsKdTXsCmZ2BmW3GV8QcjVCheRVrANH1Nu9M6B59ujp6M4UpoDPSUhCPFww2PwXGEXF3eNYY",
  "key26": "2KzpgcjDQfzzA4bTZho2a37PEULEXVhqaKHNU9vnUpLTUV29ocQwwXVT68qyt9vmpmwy7y33fPW7iWYs8wCFyGJ3",
  "key27": "3jSDJVRkiTdUk2so3RxuFiXTeGrN9hvi7QJ4gAxXU9JX6z1LbDUjoByG8v2AMhUWVxz9tiz4N7ByZ12fekpxU9SP",
  "key28": "5jfMNwRNvEr9RcAxFXexqV4B8aGpCSf1Gdn8sNrgt9bjoFVkvDJCzE7YLtgHkH7HUG4m6AMGo3TnrWY1LYR62vnw",
  "key29": "2Vd4NNPjdSvDvV1nXtq1SBrcqnpomSzTLgmJK1vdwGwHAN8TjeKFMiPS1TaCKqWeNSdmq8ZLQyjFXr7i3RRbZNPm",
  "key30": "vzGxSVFYbAJznXrmAceUvUyMz8oEjAuGeZL6EBF8AAb2ohqGceeqXNn6JUSLPnjAZTzoZYTbzKdBxjA5sTLv4wN",
  "key31": "44rYzG3quHQXFdCWassioK5rDYbaeKgM4yRVgoHy1i2kCpBNKhQKFyK2RVMhnXTPqn7nFVn7cjyease5eyp7egJY",
  "key32": "5rgFkqfuS8oxAsFzJaQCsq7ypu1AiFcHjTLKXQCUtiBmo6iVTCF6hwQG7CvjKL6Du4kcCBGR8inaGFkHa4oRBR3T",
  "key33": "tD7WgVmxVj5xK8z719VedUgHzA12aBYJLC8kTfZyCfecTLQsK58ATUKERNGoPKwYNFju8QgdZSRyvepDB9JcKfv",
  "key34": "5NpvrukZ8A1mQnEBtS645yvsrpDc9B3kk4vjnF1VfzPgKUj5ubiiZ1YhLP9NRC4o6C97BAXysvKHHpGzwjkGEj1C",
  "key35": "2YRXe4sNw9w8QKR8BcDtfKDafHqa6mLpxNpuNSGcBFGvmtpDSEpSMhVfXz7Licr8MAGjXo8W4igi7XAd1hKKEdi4",
  "key36": "2AWUqRECS4nVebyYxcGnXDo6kar4HbZKEap9uFat6DgtcFVRqMVJC7X7pyMA6gj7T6N6rPHCULkJ7CqdjEyDHqaj",
  "key37": "36ngBRhfurkv57pwnvkb8pPW4vvmeRRnCZBs9jLNmyAAjoXKVjj7o5jnrzTV7XWJuRNgxn6CYhu5K34xmeC2NMCv",
  "key38": "5Jbpna3bC4uqY3XAchb6kqXyxA72w3wmWA1cUvLr2JcwBMo3G2QzirqQyZ6W3Tsf3XHA4ipex34xuPBkzYscYcNV",
  "key39": "4yU9BxqMYRZ39T7EKZFV9Rd6KeAin8rrH8EC4s7t1Jc1Q6gwUC1WY9KwmhHBfZoZtZcxC3yJj9ayUaRKiARSSWUS",
  "key40": "2fYPDzgWrAo8PQ8z92KsvzVHqs6SSWN2jxXLzog1UjC8Phk8TjinFKcafff3vJmUxpw6yUdLrURk89tjmFnasbqT",
  "key41": "5qiwXt7qKGDzB6wejxUFTajoNZAnNdzvjj8qkjg94YupgmuCA2UMresB4jvVEKci6omTB1aRMcUYZyqBf3DY1Sqc",
  "key42": "CPku2AxtUcdyGeFtYwwNin6pYqCMUwNSHLdnQiGji5buNmnMuEhSAvZNsDePLKnGrM9cZbHdMPuRSDzsYCB6xqS",
  "key43": "Zn4K7yQKodpKgaGKQ3pixNauA8mwXDNTC2a2KqMHAyWGrwftz8TRJ3epBSYbw7ZqYs81pp2o7GNmGRGK5TqN7QF",
  "key44": "4aEpcNz3oNb89PD5J1od28fthUvWpKqanE6sPF582CLJM9yg3DLXr1Cdr2xuu61YakEso6u9JvMedJxuAuxMKaxQ",
  "key45": "4p3NrwvRx5fCLbyuxu8GKhpYd9U3iTh6cKfi1njFfRwCEZoiZeKHk3LkY3JS9x43tqSb3kMvtaeMwu6XVhxtCqbL",
  "key46": "3fmX5Pkx9HpirN8Bqr7fJ6c7acXdPc9aheL3ke86aGbJWTdQok3WZr7yuFUZADoktBYxNWMvNr8CmWgqjvhxpvLk",
  "key47": "4MrJ8Q9GR17w1SvTSMkn2jkKevhZD5DhGWHRT2A4Jf4h7LXUjzWcBZT2UXFcaGFWJ3knTgdh6MxS6U2Sjh9LKv84"
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
