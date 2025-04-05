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
    "2UMDpJ6phRLjE6RkKafsuMzpoeSAMhSdnEL5rrxBiH2isZoHXCmEucpF4tV6Fw3aL6VwmT8fzqjM74fvxqFWJcDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKAVQeYsXVbjkbVw5t2TPybHaLirST8t9niKSM52UEXBUkuenSVNSFg7CWTShWXfKPdidS4k2v89L3Smv8wm2g7",
  "key1": "2Q9B697h9LptxDepSAR4BPhyTWtKZ1UVuSGR3mci92c9qZrmYUVQvQdPUtwRMCN2vph1y4aYGU99eJJU7f6x2hV9",
  "key2": "2xyEAAyghnwEFQ49pUJ4yLRvbSdLChjGPTHYzUJdffdtzZbhhttrhhVvLcXGqjUtNpcWYDc42WR7Bsd7p4bbL6R3",
  "key3": "Eh4GQh72bEc2bbHdryHZhEr1YAMVpjaphh5nYoxSC9tDu6izcZuEBw3hh7Z4z5toWqitrXe7shU1cDQq8KAjGm4",
  "key4": "xChrfSEPLbE93oT6VosPkeC9fnGLjZgPpEa1sqqj7zoQQzyQyuvF8y2JovZEbyD4Xpgo6DN2dQQ7vxpGT9EMP7V",
  "key5": "5iE1n9rfiHpdUrK3TMdMm2d8S5nseW8kkfXza1h3L6BH3kvjWwcaCfU6hW9bhLc4TYyKndPTm4MebJco4j5SdfHi",
  "key6": "5mmTLBepxp3Ch6P3jhuP8GZixVRYWv5N5eKrnacii2eoJ5YhEpsRaD7ZKNx8h8ehwdKWFNygxy4RM79CapStabsH",
  "key7": "2d4fjn14fmLBEzLU2Y4tivAsu4iWmHzGuJCbvFrz4r7Zr69vyzUeMtMBEzMnMtRV7C2nAe2ZEQw1X4ZR1pvrux32",
  "key8": "53YNeuvfwdMmcfQrPNhPbqtcmtQUvLMwWmKi2R8GfaWcr3zNXqJgCXtC9LXQuydjiPd6HGFc8QGbLo4dWdVfdcQ1",
  "key9": "3eqH8ZAqcNAwh2QhPeXtooGYkroQ3gSdqS6ufeJNXpLnu11FeFKZFMDeFvM5SfXTxg7wdveB415y1bNWado97RGP",
  "key10": "4kuict7msgsrqYMwMfGrjFyJdcxQ4jQFo1nPqyBNSSJ7RgMYjNN72ZEKXi9VdidhA1NeRoad63jojzffpLnnX6vA",
  "key11": "4BeMyeNdgJRMJujEz6nCiPvtBWXE8pvhyWy3ndhyoCrtionGkjjer6Lr6bJUAhZXrGNJW4sgXwJiu4Joa2dok1KR",
  "key12": "4MKW3bYZes1PK7eUboYuwwAtLHXkhPh5Ra67yHVoS5mWiuoj5aX8rzCfHj7k3zM4CFPxQ7ct9RErMqLGDDAgzZZ1",
  "key13": "5rwXU9kt5HyXrATfBiykMmLhdasoMV7ag2e8msrCRgLvcHK8PWbZ2G3Fv7SFa7YWfZbZeiobPVkc8Vq86uKa2j6v",
  "key14": "mY9Cr2fRxfcqYomuup5GdTk6MvLHRcCSfFrosxB4tRELjhbVrBpqKyQeX6ZAFh3WKdRnFY6gTw75eahAEtjzmB7",
  "key15": "4X7WYH5ADLxdRbWPPGnw53R6fXHD3aeXEKgeo7RLT8QiEYwN8qXyPhhmP2j3CT5hCSofoCUzcmNDUDrJwZutG6av",
  "key16": "36XPt9d98GxCg2uKb6AEmZrS8Eo8uXvL1WfMh74GfCw6CjL5v4RYbQ5XtvxC6Lx8SHG9gWYKEmjWX8X7RZ4VDpr1",
  "key17": "2aEFtfLgWzZV24LKNkymed4at51zBwRRBGJ2aRrjNaWVYKPuKEvsTqcZ4STMchEoicUqLhP2qVzmpd6S22Tc5dLK",
  "key18": "Ai4WZKHk1eiSQ2A4CsDT3zRn3bN6ZcdkGXfV3We1Q2PW4Jimka8LGsbk8kJdB6azXEgSydaCTYGmKVTxJpRd8Rz",
  "key19": "4ffxnyx4j9eEdXYBSd2fZdrPXJ36TYsehoW6hbvaoK6dEXJVQX6F6fDRhDt7zwyg9TKaLVfG82wPhSn6HAT7WMKW",
  "key20": "3wEsfUgjPMc9tH291piJGFMVsYEjK26UCt3kDhMTTwFbHojXpBMrCxMqsZgUYk6zqNk6mqj9tcwa8Ne1gVnju1dL",
  "key21": "SKLjk6rJwy89959NkHy1hCSGErA5hVNqmWXDRt3dtQnr7hQVMMEqnutNd9dKPkCY7hetiP85jPXwfdudkBav5a7",
  "key22": "3RuigVU5wNRKagaJdhnqTXR4pC1VJXJj8em3fM4YpMCKLCagoRS9rASK4bzuUKRcxH6DRmPGADHE9R5MApBmGB4S",
  "key23": "pbkMCDrizNv1oJLDn19Qt99qYoMgcmqtbqyPQHTSQ1cKyz8csekjdCnuPkEaNNqxjQbguKrMz95s3LhbLHrosPc",
  "key24": "3163KgXo1i4uizTt6iMX47mgGXcjoa9KkGHnN45YDVyv4JAVDKpEFwwZE517iM5Nh618RXiv7uDYyCgbCZDG4UVo",
  "key25": "3nTAhFf2QmmZE2sp5D9aBCkJQa7BqjFnsHpuiwc6khEqEybiYFUnkvKqA9eKcfDeWJNycae3BoKyN6iw7CMzDKxz",
  "key26": "4uFLxpfc6bopo5V4CzPVreLo6rvzL3c1WHBQdJQjWXWDH6nUqfzYXuWpriYwyXsK4uqMn2obijSHX9dyjx8bTvCC",
  "key27": "2hm63R73eqNDxUyKtJ62twCAeo2zZYQqhVfhGc7xzPg8BUZCsu2SYBvGKQsJnchNFg1z5TZ3UrV6znKjwnsWeUP6",
  "key28": "2EgijwgZ1cwQrrh39vmpF2CxDAAR6sDMbFkjuETMfF3LpPRZJaZiN1J7SfDXGrJtoPPkNnWULBAUXqwGbMxdWiRu",
  "key29": "2xSUGa2diuYHqPVoDasFq3oaHR3FsVVenQj8a3NUaKtvQLfhWj1df83BY2mwTaakn1s29k98PKwSapmNtcXM8v9",
  "key30": "3CChYwYDLdcZZKpFHkg8gX7neogrPkPzNwumuPZKH5V2hA2geZAMe4aGcozo6Xoseodk5rVMcP3FS9LMSsYmAK7j",
  "key31": "3fjVPXuMREwVFakxuvuaxKBLfu7QfCjkvVqhCDQ3AJhZtopynTRELGchexet7NGjutynPfDAewXGyjLN8BJpka2x",
  "key32": "4WRfeyFHVpQBRvbqfrDAVQfNmT2VSgTyrSGn1UWgbDx4428QwwTWUfHc7DT8VsS1hMeeEK3PvxPWVgtq2KtqSPDN",
  "key33": "5ERw7pPSJY6w1fWhiRSbZmmpoEChMMsn8FTK58L18bGqGNCLkVNHqQWkq6N3RCU9icTPTE8sDKWMnyVtVKbfVySs",
  "key34": "5gX6TN2RCcAcy1S3Jnd8AMpDDEbhL6wYcAjayHosJ7Tfm2itSGkuqs8TLoWvzKAogx2Z1qzCAAQu578gFhjuMZmM"
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
