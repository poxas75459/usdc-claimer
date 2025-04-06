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
    "54wTA3Rwn2yGpcWxBsUBX4rvxWf551HqhvJvvqyqSrTz9C7qWGGRuFsEWspmmeKUpodsrugbHJKP1NXZAVP63oiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3EWiTYvKG5hZpUJbrwtfa11i6NzhAZpzMHDDgV2eV7UGy1xok9KnM6ioEkJ6qjMyCXK7H7Pg6EsiLxwsTgFSL6",
  "key1": "3vUkQND5LjyAAi18x53yepQCtdtVNsuHXVpLWEo2qEA8dW41H6Wop5CN6hDVtdVzg94siWJ8ZCVqEuqCLbJJ7iUD",
  "key2": "3SfWFGZRwqNXsCpiZFYPYYA61kTffbgbJZwLxyfB2T84dSBTmAaCT4Qy2srxPfeA9dU4ic8ZTuGpMA55jW1AEVga",
  "key3": "3uYTanuYCU7RXAvGsKvPCQXFRh5PwrHfepgJQq8NDotR76cRM9Gm4n2Qj6HCj3Ea7sx22F6D55LekKNrH3LpSFfx",
  "key4": "2MwmRxudrRuKuyHHbtiRcfUWmCa3t2q47PmUQaaywyUhXDk8vCYyR3GUbB7GvwWRTwVKuvMrRL4ScFdatqGwR49K",
  "key5": "3915Dje1tsY7wHd8Vp683XW1yy6WHbazdVnCfjTM4SVcVL3wAMVgaNEf4i9b5T2Hc97APqV4BfXMcMz1r6nzQVcG",
  "key6": "5oHA3m2uxRMHpinJMbmbDAjEgaLj1MdYy9MXBVTpwDrFdhXvHfD1TrFPBr62rm6DHjZYHrP5nLyDboRuwpsiwVo1",
  "key7": "DaMkv8i2JjYcZuKX8RX8kVCc8cwgPMdEVh6tFUuQGeTRaYCedsu6LSruruHv5UFhei96aXcjC39U4wnLykwa3e1",
  "key8": "2zeSjLf7gjDXgWHRjPGujsox7tczFrbwSJHWoqpub3uvN8ShDAYGorznXBhebHeaV2wp9mcZBn2ePKEaU1eexbwY",
  "key9": "2Y3QS2tq6vRMDYPiJPaGUWhCTAtFpv1sUu46UuVvffNwAnSL2PQEKVMft2tqTVFa5q2ovzTrZVXJrhMVFk93whts",
  "key10": "3ucw4faZ14CkqXUL3zXmiYVbFz6Y9FRBTemxfxHg9YZJDG9FkE3Mg5Vit7fAkQLCVLPQYUCrC21qVyagFeMrq1i6",
  "key11": "5sXtUaFtbdDbrd6AeXzrzHjN9bAJzHod4EWPLEnHxQFgEaiPNTm8Mp7ChZ7okFH3wqPh7YQSYi2p54ENx3d9ZvK2",
  "key12": "54BK4bPJNYWiCfw8D8SszaqjJJF8bvieGFygXKTTB8kj91QeCMezGi62SBTsGTcdKjXV6SL2VemvpaRE8Zer9LTR",
  "key13": "2kfHyugca5RSRHAtafzCTQaY36ebS9YHwve1kBNKBXjgTq4zwwuSp5QGzuKJ47qtEKpnEHMq7Xm6EgLXKcRRrupu",
  "key14": "4zzrpVzims8J3m6yqFqmebx22KMoBJDpF2hDBiJDmjx81DqdSjBZ7kgG858YRuQSWkYy1xaYkY5q669A8Soq2HDr",
  "key15": "2gVY8xhSZe3DQwzcgdthFPRoVAFzdXhv9TYgGi7SJ8zR3YjLHrM8THF9uFLkDVcWbRDaPuUcRFyaB95tbbdJ6hdE",
  "key16": "5bwSELqAAHvH6ESYeHHkMFjQ5BCsZkKzB7E5H9h1Lj5yUBTT3sj6bxWGknbFjTi9F9FjvBuAHF2cnJ4cZK7e13wo",
  "key17": "5fJX5hMuFGJqzkzG7vnth1JRuPESdHAf1KFD7kCE3nePyfakMJ3pMsCGGLfUnLKwnagygV7v2hxeBMHViCmVCYCd",
  "key18": "b7JQ5cJQXJLMt6dgXXdJg6bJReshzTAuRpbhscaHFCyrh9jLaKr5tqRdfmEQikMS84nmetP1WDSE66T25HYmaqv",
  "key19": "HsmJ7NyZx1jFhepLJnPSZVtEdDMye5KP8iiyuz8294DK9GUy4od1QsiX5EVo9hPnFFUAx6AEAcJCTq7MZ7FeU1x",
  "key20": "4eNjbc8qKa4FUzX3cj8sJSiVugXgWzwNCiTBsZnoKYaqmaE6mFMJrtxdmNekBU3yDQENXDkWbqXnYTxiqXt8qLQW",
  "key21": "3YGYLKcU2AwBxzGpjMebq7pAZJCTTVS7nQgg1UYRHqxTYzJ3Mk9Xk7GYjzdADxXdVSQVmuuu1MzRXgLDeS7N6QWn",
  "key22": "2ahpPrzekNNet65srr1a8poFNQvV6tWtGFskBYqp1w4nncABvJWXjP6HWF8o3gTG1foMwt8PQGggtNVs4vsS6shN",
  "key23": "3EZmw6brJz5THdpsE4ngBu3Xt6QodiUiFfyASZJG258aJNXtMgGWERpg3pvH1pNfrzMZDv5BMfBeEWUwCjanyBek",
  "key24": "2aiwJuxZPvSmJSH2gpiVKQdqP8VFKYBVHQeNLczJPSGinLxvcDZ4n3FLqagwTXzmwXCy1izaZbrLXZRsqPNu2nrn",
  "key25": "EKqWvwJE1CcXsXkmHYtLSpy3Pahde9wsBVBjkurvkMgxjMknW7xLKU428Ti1mJnjDosTwdipJJnqNa1NeKa61fg",
  "key26": "DZTyFZu8vg1wCPCx7kREyKRaSc2YgPEkwKaXyXsKinRnr9e1KpFz35gunUUpakgYNjCm3o9VsUinijwTF5zapPK",
  "key27": "sxfr9iwGH8NFPhMyRW9k5UCh8xxDrvedfY74xoBKik4en7ZRsgrh5ad7M6eBybEpQY2UBiJRTZ4bgQcSHCi1U1f",
  "key28": "29DtWRr71BWmWhjseM8nbwBUyws1ZFFN4SPgcSmLtiRkbAzf3NvjnUYqDeXKhVMNVeyZ94rT9UzigGfbq7pKChHv",
  "key29": "4xPMBtrXVNu3MFUnHHVcmZRC3oqEF1aRiS1rVJnFAmqCKighNkNBwsp4VQpGTgH3jf9jemPJy3b7McNxRexxXTqL",
  "key30": "2LHqSUg7ehL5K2JALpjSEKWkRvXDKDsg6zAGRuBRTwGCz4fR5dJayFUiXJnGGa9ixRSVjFo9H92izaXP2VKcEGhM",
  "key31": "2km9x7SaSQyc1Kmr3UAi8EoiwHDbvQpgP87dQ2zHre2mUyyF8Kws7XEh8aoJQ4SbYWsDgFmayvreVXTu3HSAJ2Wb",
  "key32": "5c5NNt8ZRY7L2Wg5pSMJe8DmvDVY7LWkZdQPcy2VMwwZfNeHpmHBTBrF5h48arHRWSZXmMdZyN4tb3pCrruT3esv",
  "key33": "3jQSuwRm7KC8Aj5oNijziQdyKNqxgRGiYR5joviUrWuzdSUw3tHGCBDAWYwAcZDxFraWBa6rTHbGuT9HGj344HLi",
  "key34": "5Rsfd4UwRqXi8j6ipys3xVpZT7vBLT4k8BWxxmJsFQ5n5Xv1pme9MsVTv5DWtKXv6PDdY84Dr38ULD7nuzsYDxi2",
  "key35": "5x9Ztt8i7RRX6TmEaKGkEPGX2JyLWbWhL5aBrpUaCZeTcz24vPv66PHk7mQ2BeSnpBBXcG88k184ooSYCeuoQZ5v",
  "key36": "5AuNnHHCp19jX83BVsV1QRUa6GEFUfV18wCtxKF4E677p87PNMfqasFw2HhP5Ezjk4Ha147RXFZQW8Ew2z4dUXrE",
  "key37": "568MXNgLqQVZWE6VN3fEZQcPx3yjXMVhYzAEgzQkxMs1VDnTvyvVLMoy9BhJVzgdPDVpbW7UWX8AjHtdM1kH3jaQ"
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
