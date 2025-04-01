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
    "31C1YFCQ2AS31eRytHfqZwwxbqWzRkzdbbPvRhCrBMkbtv9c3vPUJsQxZjwwoZX91sqhM12S1z7eUTR2ekv7VEsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSdwg5VPJNVzhmMx8w2Jo2A3NmuqWk49QRi5VMq6V2QdHRfwU9Uc5Denx8CUbHgffB2cXgLCxtxbdjKrzBwiEhi",
  "key1": "4bvS888hv7q43dLVSrQHPspUyoHVXtci6C9pufTnix48uNSpWgTakxXFsLbXnJLH6VDNxhvCLwiiX7VjAkxqfeLr",
  "key2": "4iBcwGKwvxr3wpJUhW3RCsgk8BkjjyiG4ZB5wqzQ4UZbHBrTsEZnkBAPywBDsVbu6E3nLGZ7u1SqFEfwh7UGNTC5",
  "key3": "5Sc8LPvnbpHLhpqX856AeT7MP1qGfKaMNWTnLgTrG4Jstj3SBmbhfqzstg2PF7TRWhnXn7RM2qd5aR5GQpd3kWSN",
  "key4": "5A3VSnYVcn7ahomj7qQ8nf9gz6JTJWsUGSjjmVqKWFfL3tmNvURoYBp1Dh65EeKKe2embvuzwRZC9czr1vSRDKiM",
  "key5": "5a3miQrHZAdXJPYQmC4YfhvciNU6A2RqFx3N9TuQDyZufMw4GM5EyqAgJ2imB6iB2CZ3sTyEokPUA4gtgigYt7gT",
  "key6": "3XC69zf5iKh7CB63P6dguCLzPqdNq7DSCQdHmjaAUT5znVsEqV9TPgsfsp2M8Ehpc7oGzg94qfCyCBZFg5fiG4Fy",
  "key7": "2EUHwTzUkoATGdQGoYD4KDN3sWSh1jkMyXFPnqfNZHPeTx2adLmx4YawjxrWuKMGj4kUjjnEnru9octzCB1Fi9mi",
  "key8": "3GEo2eH5mHfZErnmcockUdwMPKrz3PVLcStHSZcc6rPfqDBmmN4kvhQR1VhjCPGWaZWgdqRGQac4tYDbkt9axmpB",
  "key9": "dUAh5N9bgvDRepsvgkd6YdEiFvrnXzspu4KN2cWcwtZUAfzNcoFeGh78z9WXVPVyXoA83VAD36oNBXAdcopL3Fi",
  "key10": "y9iBdzKrzJ55cP42CxYTohyyQYCvXAu8wEbQfkik4aPngB39WVYKuzLnyAXT3UzBmGSSHhyuQeQPBy94yZPD4ic",
  "key11": "4147WkgGHKYqDdGVzhZntGCtDwKjhJtv1Gu3QcPwYXp3ZKjAEejZ89u63xnrZoQKFWexEDQG8Ub28k9zso3i1oSg",
  "key12": "2Pmg24zydDRqXRG4bGyReYiJW6Qvbu1CdCw8wDiY3ETY5CzPHnoLChap4cFBXBwrBPysi5eC2ug1HycEeQubBRC7",
  "key13": "5suXYJbqSG6Dca1BUhcz2REWuz826DzWnC6H5e4P9uQ17GrdfrVRFiygJT9SGRcK7W83BMHb8BP1bmXZvAphKsv6",
  "key14": "4a9HELMz8hrn7piMoG5bmzdyht6HZh7qEoMv3uFbgo6EutbQ85geQh6hxGJAEsyrWTsE5V81XCrCuavNFeAfk3p6",
  "key15": "GMAd2XD7stM2zJZ5Z7Zir8AWk51jXNYZwFumAEUv5egR5tLoP1wo3Eu2Co1rJ8x1WsqQY9st9uNen6sPs7VfuQC",
  "key16": "55BEK2gcpkm2rXgrnKAmTc7c9itWMPArww5s14fByf1JAQMZdTy2dy7n7DJBvFNtBskFnQnfm2hFix9p9fkDene2",
  "key17": "225UJjaGYZJKuucNmTuRjYoD8ZNcFs7kj8inwJQAigazwbujrDtVMic29ZQPCMnt1K5fahDoSH1AuDo2uSoGKWTh",
  "key18": "Un3QXtZkFsfCh2SU5h3eTrQHb9BLet43acb1p5jzfD23iZ9T6hKcCt11C7nDBCo9A4JCGm8RvEL3PW5EyiHoHYk",
  "key19": "4LbojzRDVFKeDLamyjkopYzAT3MPyLa7EwKcn8DA8uV5QWJRpzzZxibs4RFo6KxhPfBvW4ui5QKo4W6e58J4rEbh",
  "key20": "65xP4xdANFe7GojS5gzAjwwEb6tbxR9PU4zY7QJA7wGiDmiGyYwV26oS9rxxU3cmV6rDLmrvgemueFWGHX8AyX1w",
  "key21": "2Lk9zXxzLWM1Nu4rt89nAFj79NgeMmTvcQChH79t2hV8mNMxxpGet3xnTMZDGxXTx5eKD3MKurpq5fKd1QGozem7",
  "key22": "4R8tMFPpBZAoS64Ae4irCYzrQE3V9cxVtfe3ceb8xQGvAinCoggdt9QbTVHQHWUjEvfby4gXTAjMzPWSAZk3piTm",
  "key23": "4nN9qNpud7EpV9rt5MSRH3LXPvABdmvJXB5KYD46AZLHsM3uCEG9C2yVXGT4pzbHzsvoXZtFFNCftbDYcmUmEV3x",
  "key24": "5XzL4QELVXa8prR6urh3h8hs7KEWMbLjNS5rSGo12i9wEPrCS1q9byvf2oE9YFWNPgqnQNLxEbqyudehd617VqVD",
  "key25": "66Vk5VjHd6V8b1LSsrc94sBaUzrrRWiNcbYVgFVgeZvf3u5WtuVfn8rD1iDw1xD2C5zTjXUid3V1tD6WJAvSiXcg",
  "key26": "5wJsUwDhH6G8JVYJTHesfbVrNJVVm3ydaRjZsQDYA2D5wbFvq5pYUDre3o5SLAQTiMtQ9LMq3whijXbyPsQqjUjk",
  "key27": "2yeoE1vnRwHU8qWFmb47976aZoCcnzbMwYhTeuwVNihFB8FK67Ucg8kzQctiCvyjmX1CT18f2HgMhynxdwXLwm25",
  "key28": "4HiJx6AgSqnTSukQx8FMcBY3r3gCceegmfkCAuDeRHbd9EXnnzegcRZ3CeHnNcyEMHV7aippMn8pRUmTTPNq2sH4",
  "key29": "66F6MDv1TrtuU6MgaM84URYEuHVwzpc383zZ6NNhrdABpgDPVoPRBZQhyvnoRmXxtsEonTsr6tDYsE7AxHor3sm9",
  "key30": "4u2skxTYPgxeHTA217kzwbC1hwy23Ft2LKKbHrZN5dx968pA1tn4KwLubzU5DERQFqwk8K7tp9f4hr4fBHWTT5Y4",
  "key31": "2wgDykZqpxTUXtKg4CRdX12MpttHK27DfAYiiVEvs8vvZVzi4fgwYRsY9Kx6rGjVPiLVNRRBJfypNntuAGdk4Exg",
  "key32": "4TQoVe8ZimKpaBU8k2QeMfAhv7pGFGhE3SnoCd8wEhtmpwLf1JQ2KjS4MUrZb2ZKJULA4AFSmy9YcFR5fG4L7grs",
  "key33": "2ZcU2PpswsUPeJRLj3KesCuWrQZQkUMRmSkNBNWzvfd6Lj7g6ru5jCEArDWK9ibdxnxc6jbMfD8gNG2pBEfDrK1Q",
  "key34": "3ooWCM2g2NpEwCGXbHUG5H8G542yHn5rAykM8s63tycto3TMhLgXGMZrvBagiWD4tN9EcyVBW7E6ooG6urhbXqRm",
  "key35": "2hHknkfbRFwEei3m2jTmmpQVNwRNW1MvCo3VkwFzRfmxPDUVybjEvgwnj6WXoUWNE1EewDQ3pnCZNnjF9JpA5mFT",
  "key36": "2Cz6teyNek5fCyV7Xo6voT8a7Vf51fswqndb4Z431q1PnqtTnwFLzSEGtRxdfuu51f3RgUkFhjpietn2bXHSeUaY",
  "key37": "5X6VMRPtP8GEbfARB1mZcWrQSbJFsafqGGkERdNdzQtcGu3sodHBm5dGhc8zfDUZPNtkCf7K5PVKbK8jntEET997",
  "key38": "tZJ2DYrB2qQ9RiN7gVnfsr15gtmYyQFNCq4z3Fx8uJkvjhKry32HnKQsVNfwK1gA6sDEeCVBANbPkAK6mGwjGMQ"
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
