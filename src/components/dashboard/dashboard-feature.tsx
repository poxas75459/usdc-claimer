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
    "4ZNrqbkGr1APPJGy2LY8vEgXHYDhwhGGx4k8Ep2KodkcwDgZ77sqwkobEBp3p11CbvJPFpRo9bwQqiYvJ6obmmRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWvVXtqJwHgb1VMiEFRYEHticqXdbVtBQLGLURAmUgkSL9NDnDB46AxgrpzNSUhZkxPDMKCewvxcCavRjXwuMJD",
  "key1": "3qYTefncrFTTeofDVRHABkLBJqk9722LMm6JCUvxdNRtVBG3usWLzmLhg2L715KSpsEjC1tD4J9T2ScebNxmwVLr",
  "key2": "2qKExDDcREYmC4jn2McsrkFPxm4uuWANhfKZnj5XJoJyhog7z2LmkvfAcnEtghrsq19D2YnXb1zQCX7abUkKNm23",
  "key3": "5H5SbRM6pBhCgyC2PM95PjYgLZ4gyu9i1iPzHBpNGn6bGZf7ravobiNQ8V4nTGVcnXMRV42him4s13WyJnfRExme",
  "key4": "4xzwaNsXcAWLqREDYnFkiXn54HtZS48tn2Ms3YfhFXMfwhxWWUorM9SAZfLpCfAt9BrzLfXEx47a9bdoK1zSM1rM",
  "key5": "4xhFZxyejuGD757PRYW173oXJUPnYyMtDCjU9ZiiPbtxCy29NLxtAWMic93gpQX7Dx9V2bwAJQ4PR9RePDABUZFp",
  "key6": "2S7aT6af8sWvqsSATsNzNRUAMzhKmv7YgSdvJsiBBiwwHDYDxx2AuUKKC1T9bYRrt8MWNeoxhsV26KNnqK8pcf5e",
  "key7": "4itLBaeCyFA8EJyBX5sRhPxGG4E75pJLzNnnPaSyLPPk6YZKT16NbpUGo29ekVyLQV1XgTncwYUCeVeiFVStWWjY",
  "key8": "5aJeGWktSZkSd9XQKKxHcCAMsPe7dRtqs3W6uNFoZEcRnyc4LeBfsuuYRoL6ydhq5jw2sA3Pqzwrfnw7NGaGAB84",
  "key9": "5xbmsXryM4NNRRMiKNLPQfhDDH1kmkHVemc6XRtHVpgB4kpeDTu4YWpCi8MxQwr4JhdAiboAsU9o8Tr5DhtFPTvp",
  "key10": "3VXvLbtFb8KDfycmrNxiX1i3wSL4R8ReRnFBZne52jU1aSavZuQE2dy7QAE6MVduo16Bn4v59PxuYaWzA2qAYfyZ",
  "key11": "3un2uUEBopC53PZ1wGrLjqw9S4prrzao67NG68vLZ1hmz8fpress6Vu8EM5NzyyAkuTGapPdow1bqoonXWUnFT7P",
  "key12": "2fhp7DDfX7KuLVgTmC3opdFXyunBLJ2mHvPL7pwtJf9Hi9oj7sJX8aUNhPrsF8o3LgL1pBEf7iNqHTCxQ5jmLjBj",
  "key13": "2YCByp9w5g8GC17tnySyXvuEJGWy6zugniatKxdCV1P9xuz6x1Cbwc7NdbhFYZ4f6uRDVWP1wgJU9y6HYy6QqQff",
  "key14": "43oEEsBWqqz1FQNAyredYfoJSLx8fYXwaQKxsUMBh3jKrEDdQAeRVzNudVGh7CWDmVJR91eK4vP4Yop7A7yBnDNc",
  "key15": "5szp9wotUVNDsTCKB7wyn9am1cMfrGAcVJe962TttbRZVXQ5Z4GzBYa3vBRRJQkwM5W9wu94fjhcy6pJKVqZ2NRT",
  "key16": "3Dqw4XVw9vfQ9jkZuZN2w1wUccDiTGBSjeoQdp1RrJqQrH1Gsiez5Xdcmnog4gqKun1TAMBq2M65Y3tCPJahsN2s",
  "key17": "5UXmF6jffR6Fo1EaLgKPe4DyJPfa1zJPgFQjP2LRtKuTwpUb8GtTcMmiwDDkRwXRNahYUzcp7aEPNZm7kDYi6KLd",
  "key18": "vo4QuMFBrr4og3EE5F6bbuXVQRX4eeZCTaLdZQ7LEgJTvSCRhi7JENqTbtJhcpKVzWPy8jxzz7atGrNStmwxp8i",
  "key19": "3oAdSY8gLfyZdddUo4jD1kR2gX1hmfkR6H86bgqLjPJv9VaZmSido5bW8LtPofBnTdxnuU6gpa6FuDQ5BbDMmrLV",
  "key20": "cBnVFkiH9MNCdsfzZKuZRt43xfLwuM38iicyeMfcnuFxAYg75xqhGq7gy2bJGM1Mr2CX4DPTxaBd6maunv15Li5",
  "key21": "Zs37g6cVwfUTeCycqKEKXLhFRnBNSZt3ypiA8uC6UpsxJNXiRKURDyxreXoH1eKQgkSd2dtBYfQY85t1LmnSymr",
  "key22": "2RWrsPBjsR9quSUd6gUSprJjyBjNFm2wLw7pc4binmxYVQ7DgcZwvX8mDA1qJhS2EBap8kYxa2NtwS8ysTyXLvKh",
  "key23": "pNa4oVVkoVBVeb7NDf1bvGYRmJLhYokv76hGR49spJtZGWEMKsz4S3xgyGfEZF5ygfCUiEWdDtRFNGqsivojbjY",
  "key24": "512W9XXED68uQ5qaEP8sRQtduMBPHHQGgUeEmc8C17mrRmaSJPZkghZYTS1MHUZkDFQQXWQwt2RRnKD5LXu6rMyn",
  "key25": "CfsWWvxbn1TrT3bUkXpynGAEotyryTSNxpjykQugEg5Qqagox28UhryN1oRHbHaLSE2LU1LeqLZMpq9fWpJJqiU",
  "key26": "bGWnR1JZv1eTmq1dUTntbBmfQdc7D3YYrcjyG9YWakFTUZ2pz3us4jrL8wVfWGZgtfYPfkhmzWsz6ajwUE2PPhm",
  "key27": "3QEKZQ8DChcciJRfjP48oPUZZBpXu2UL6GL2k52DRFTEo3j1yktiT1gv55pRiP9phsKNY4SfAh5sqqiGVjKoXeAF",
  "key28": "24ESoCe87je9b2C4f5SxAxLHf5x3ckeMzhfoUr8QxbMsPvmY6oymRGmyZA9Wz9vpu1UDPbFa876tG5NhM7RNtaZm",
  "key29": "5mNBdH3nwR78siaK3ciNnqNgfJCszE6GJgCuHh24i2Uafpnx1ciyDKeqossg9R4emhZABcEaDakCjgUxJxMrKEZY",
  "key30": "2kdTtpzvNkYepmCp7y8GcJ7ouBVeebWxjrgVEg7dKwg8wSxe25eWEr2Si5BZGq9m63BTBEq8XJJYoSYgHCX2DxSn",
  "key31": "4ssDkjcxZTBwF7nePdbguZt4dcG43XvZgDFF79hqNkmWnCx6bmhYtwM4FLA3gZJu4iBnz1zwYxmTqcjeRUS1vB4n",
  "key32": "9i38tyc175xPxXWYTUT8LXakseNHpTvpN6Ru1hRNxAXXpRjf9CsM83chdSc6EYoSctPt3BDat1td9R2YpMYCZpH",
  "key33": "nHix8V1SdVrqCMUbaADXAhsUkz4xFhXqsMaKJKysY1xFSc1rBzCJLQsBKp8UE2mQvccyXXTHoKanWwbnZuFYSki",
  "key34": "3Qt9L6vQtM4kqo7jvtpMoa39vKXdm8ghQmFjraSkYKgMiLLiKy8y2eRuENnDoQcid6Rxh67Uy7AiS4MnakbQRpeb",
  "key35": "5ruH1r6p1eRvNePC5rs7ER8sCKqA1fZwGwgKba7ifN9qz1CuuZhuu2gC4PovPjp6XBc3L6E8Vn3jX5MYFqLpqH4u",
  "key36": "24JmYLCJDH5CButv6gBsnvY8VCmwYcv1dFzWKs5MaW8fBYj5nBLypZztVsZnoLYkDz1GXDQpvWaVbiVwSnd1QBK9"
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
