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
    "3r2m32rKBAGk6H4FFrQueEzeDb2t8JyECu5s3em3X9Ubi2BBzS29c5WqWpbX7MoxUd1VhcdRFrduTNdTWQ3ZXrts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bMz4fcxvrY1mFMfwp9K9seMp8swLEjAmdakX9ujrYX4HuRXL3S7zftfpm7RLPMfw9Hs8Q5aWzfvuoRje1mfk7a5",
  "key1": "3CxEK2FsiaibBqREe9nxS3q7yy6guxc2APBLPY74ix1QPq2ofVm4rSQtMq29n1qdx19ygQziJ1R5sgEENv4LG1x4",
  "key2": "5JdvuV4Xt6EAZhXTPb1aBTU4idibKCJaEwXG4go9yWD8CJidzfaPfukadHUKBx8z16F2EqZqNSC3iCYPc7bbPU7N",
  "key3": "5LYrw3o9chjWheThWkyomQecmVunM6uNSkwy32fC7CTDgFYZrW7zc8jyQad8He3VT7zB6rGHTaeeH4ie7QL8X1z2",
  "key4": "2yJrsEbKsTjHMrcFSb4J2uKN73ehYSzpmDhukZ1NbGKvXSWbgx22cAAPMEo5GEeMBZQnhCowbmJisHmhrMbJmw1",
  "key5": "AWZyYtF7P6UXAiBAEqqG6kmfXuwRqzojAdCq97JvZj5QQgovB5YiWbBnetKCucgKtjmtDLJJgvjrQGwLN2cR6Zd",
  "key6": "2on4kSY77xozciDEwWNT7xe5ZE8z9qw3kN9rkwDEGYFE6WGHsxjjJusaiyEFsWQkfSXSDd1NQMQCX2pGSbp3Wbck",
  "key7": "2kw2bJZvvX7iBfsp37qCa2dKPoUkXAGMk82a65QW2Y4oko3enVHWnXxFU4KAS2dzk5JEVy4fTr92CpNiMwTnDYHo",
  "key8": "5ZLPgSakRorbbhWpNdHaExtZq7EH95vHuteqqTrdw7GCVLWv8wAzxoMyb1FhaVW1gb32d4wT5LtqMZPT7Z1CUBb5",
  "key9": "Fn9fzhNrBtuLe15UzNSjmXD1khTeqUYbpFWAuBwVnXUf759djCURVmpQGQeLrfn1s7v7ysLwv6cY8JWy2Sv5Eps",
  "key10": "4ca55tQEuQWaTzbyDnzY9T9w9L7mb1NCuZw62SJPMP1uqmnLtcR6zrGMujVH12mUTENkP2BaV25is5vHNN4UynwP",
  "key11": "kjLJzLVvMMnw5BzpWjJuqBziUxT3WqrZ37evZCtPVxQayA7fEcaXRRFFFjkFf2TCGjhxMkbskCDmxgxdWBfDJbx",
  "key12": "44kAMmHTWu2ejSj9JyX1QLf868Wz8ccUL78mzF4oQCzC9DNmprukc62VcMkW2tJuTgwo3B1MVRFRwWMjKcp3fahm",
  "key13": "2RYFCRmvMnL22w8XoxCT33UJmRfK8CVjAUKuA7EWAV1HJDtE1JsSjyfaWWwLiZEHfx4PaR2XAeZ8FikvUuY4X8Ep",
  "key14": "4xBenEos2u1GUrnTeCRvt41A1DvJ1xfQf1RLQBeRPpo46gfwqXzb881VJZYzUv6jW1Jk7h4Xj7q6fQmKSXSNEdKE",
  "key15": "42Kzok2rzxeZjEtz8Uwg2v7qmg1BSeUfPZj2M4UQU8a611WQkVfAQwpdvYX5Vyk3BhAYEs5ARdNWsJFMeWi956yH",
  "key16": "65TJjt4zCFsBvAd1WXjeFRPc6BGEqtdzc2TGmtgWGsdcwnu6FEeFuSvz5upVvRRDNpvnysKGWPAtsJ6rDofQ7Zdo",
  "key17": "5PVrW1D1HRYwJHR4jMv1DpGUFzJgNskttPuSqHshkziKwpPJfeq9waLjM8mHaddSBbUv5vW2wsRCnxc3AjLcgBK5",
  "key18": "55Zca4d81se9Xx2yTsbVGW3VJNzGDCD6sqgTy54eYsBumt66kL53YeDrYTyGDKfo5rKMXWRASYaGdJq6ijbTnB3c",
  "key19": "3HmaZ83T7JCwuyZPpopSrnYREPyCsLCZDP5jSHuLWTw5mRx6Mq5Eup6o4xe5oKAbe89QUAZiZtMTzGFAARknZsuV",
  "key20": "dDkBr6QYthK4XCpnNsxTp5y2NwKWafcd5NNcTiLiMTNGhfNjjPZENncDK1hCeiWU2mLtLNUsHNVRXCtisZVNgc7",
  "key21": "4ZGqhArG571UvfLacTharCrG5cBH9HzGNL8EidpXsYxe5cFLLhVThd5beRKwZMkMJKdGR7u7zZUs81F4dPsBMN3S",
  "key22": "D9bRu2Ru7EqJbA2vQvG4NGhmCWJJVcMd3B8JkKWrrEVJHtYGZ68wATRAXQhNuWjMZVZZaFf82xSh4uFp7xtPNyA",
  "key23": "CH22yYH5X8h56n4cSEpjvgwQHGG2fuf4j8bWsFWPKy4GahG9pfxHT68qJM3UQMLFtwenzQg3b926e68sbeG3iw3",
  "key24": "4VpTkRZQPfCXsGdxAXzB4AuwAGxKEMC7VRcbn17RDWetmTkcnXkVBuRR4BzyfFe4napSqPa9mMu1k6BYz9zPn2ts",
  "key25": "49TGUZBHpSFVjtTraijGPpzq3gTryx7bDiGSBVPxkB94yUm6yNjuTGrhvW6fdTLfhmbCS6Y5j16tcqkTbCUGMgkw",
  "key26": "McgFzYXBMTNVrRXr2whVQdUpm16YTpe3smfePJpWmb2osPu1d2QRSA2xB56cwkxNxAqyWyGaQtRP8gytpq51RZL",
  "key27": "3h5vACYBxW2EfFtdUSByisx1WqJfWLkJmYtdzS9TtswC2URzjZhjpbQ4tDMmLfFwpmedv3a4Xg1okt7vsiiheqGJ",
  "key28": "547o5zBEHQ2mhHLGZyEXsUePXFf7d2ntFTXb4FtU5QAnebaEf1mRSMfC1T8igK7HnRohez3nQLe1CD3cqQeRfpfR",
  "key29": "211WbskdppnDNU1HeLFWEmW3TFQ4RqMdXypbs8SCjhapuRCURfamSEhHFE2BmvvyNgPUrUPwfN39HMGkANF1uZSF",
  "key30": "3h85vdZ6M3pympvLs4SGSzzJRHjUQzPDQ5HaWkmNYSTmgAH11JkyRouBQLXLyNJdsxKDBdCMVrE6no1dsC8gTPne",
  "key31": "4Ar5JMb2UTE6wQCzdiwpofDexwk1FP614fE7AbsCe6VCiKjHU7abTXBQQwCDsKvzDNTeM9Sh9Wrf4VgnUAV5UhEG",
  "key32": "3j2Drbckx9bgJkHM9T2ySZegcBrbw4ZNWgmqasBzDS7jr6ch4YfsJsTKiSAzni4czbdwWxJ8oZ9Lkwn4gJcMfotM",
  "key33": "45cjediyEEd1r3kk5Ud1btWCxPayU6GyHQhc6TVfNcGsFxe1XFo1DhWdD7BTznpTfbmwhjezG3Z1tzjnWBpgRpEf",
  "key34": "5y9pTU1H5ARgdWnej8dudrbFfAouQmCkyFujejr8gSWd7eh4E7G3DUyebucmQWEtDuF3K9KxvtuKbopVc5iZXvJk",
  "key35": "uYP6AWhnTVpbjMeGgY92ozyEWr6k4NjU8DzjaKiAzHv7BKa888QfdAD8PDeDK7yD8Puxp4T7wek1KJFWCFAGVgK"
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
