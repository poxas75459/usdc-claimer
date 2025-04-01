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
    "2WWkzFmBcqGYsfuYJ7J86ufd6tsdPDRpjpUy4qdghPeiUDJ18ccWdUCRy8Ei4LxKcPR59u8vBy8H3AyqwgfZJTLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21aiT7UMg45YraNmkKBf2KkuLE8S2jxuVrxZJ4E4pRFPqWfraEZd5jqs7zj1digfVpy5jK1Kj8TUPjj7QL5NGp2u",
  "key1": "uFuBk16uMmUvY7ptTFA78xvVJzSidEefWrBWXscLeguoYQu47qiZV6h2jZvoZ1iQwRuBzaKaeNo5ioo69DuYsH3",
  "key2": "ogZBnCLt2xtKRXJwNFpP5SSC9nNfbC6AgYfbBZxe6E3ucTEYj2RWgCLAk4tepcUV1XBr3EH39M6Gy2Vq5wKiCKf",
  "key3": "4JqeSPiv2rytqL68vqZXagrBL5WS9cWvDrLUUdUwWwMLfrMpUgm3Mt5YVTtRPrUEgH61UjSP7nRLgzPSGtQzB5FT",
  "key4": "2wCq9fLudK6wwVbtkeQodu5cnWtrkDG4usjxKaMQHExcBJzUVTHjeBco6NhSQ82jSr7QL3JG8MXLzZMzW6Y3BBhy",
  "key5": "2EEz4HJzGAZRsKw3yL8K5HEj5k1vaP65rGQsx51Gt6MoT3wzEJhwiu5gxnWqDLrbLxiFzyX4Mi4rdiyguZYD4Uza",
  "key6": "4TiG9riRxZ3yyVEQSX6bZPA3ysjuDuUn4Vjx8TFqD2CbsgeRLw6s4MLW9igVfPpUrgaeFGaWqkpAGLfGorCFzo5B",
  "key7": "DoPtc6LipyLVpW9Xo8UbG9cZ2LtZHgMf4XYT5jUwiWZp3J9b158T26zUjBBiK63AqkRo3HZHzMb1UN9Dk4VRbh2",
  "key8": "4xsEAfsXZD9ujFL77EW4pvbxtC8jnypWQVRsLbvuNPmDiFSErLxAUnEHsQroiveHfpPHQSF7ZLhqUXBA7WmwHyX6",
  "key9": "5PtUUCPdxAq2z3RXvyurE1nLSCgHYRE5VEMX5FUuTbq86fyoUiX2zfu4qYk9k227NBYSCFzo9AGzEhs6u3xExhqU",
  "key10": "5tPG93ENK17DhPEDCQsAZN24bqbSG5umRWDrY1njTTPqt4jMEJf46nudwK8WhgS5jwuZA8gboxVkjCETYdHKHMUS",
  "key11": "47yNEeXvym7xs9W8z9X1JJzi5q7XWQ4Wc7dUZKQiPiYWmCMUyYPUgmfUBQkKN71JjKfH7X4msnVp7xYuGnRRcFvr",
  "key12": "y5mHAZJunUj4xw3iy2mjspsgMereEHAugjR5T8w43t3Xizc64TBt5En8McVqy7Q127CKyEzE3vH3FCG6UKdUZzZ",
  "key13": "5GVf43MHSp8XA5eKUkxNeaSZ6fzo2SgtteKD9iB2wrX1pKjEQULnfzxxCEU6vqKquT5Zje4n4oQRmpdQxmYYn8xr",
  "key14": "4dcFmyABWA8hoyVewjomBgjhuuEZpVZ3MHrXAeJxPuw1nXN5nVWepocMpjJkr8zrMkynSLnmkJzQ61vmFj375iEF",
  "key15": "36KKwVwKEnBEb92Wx4sdrDKgP8qWWHGBg7EXLFgJYcLZkti8Tj2ZYi3nAvDz1uHGCn3Lt5XnrkYZaRxdgSmCSZcD",
  "key16": "j7ZQg7CLQYzcroDxC8HJHPxUSfWqi7KHDxjnuJtXPqYGUv9yMBLGJYY6JG9t1SV58CGcv3dS97vb9tNuUTStkhZ",
  "key17": "35PjxF4Ve2u2GyMS6Yk6ZeEtonekpYvM3chugihiRERHN56KzL6GZJDPVqVffUWHXZ1uHRE9RzgcFxXsyUg5dSMs",
  "key18": "3vZQFfhxjnA6w7XUPZ6dyXJRmy6UQAd8JKytxwR5VG351wwozwNRj7NE9mGf2CA6wAphusrJG53FC1cVqMG6iGVb",
  "key19": "2pSAXoucmN3uu4o9HUR8ehbB7u18Z7BQhJW9SugHEcPqVw79UFQCjf1AYoeQkRMd5XePMTxsFVyPxTgcuDo7cWfR",
  "key20": "5zrBu9SJAUSBP48FdR6ZLocAHMdXHeeZsX1VDt2juqxZDafCUYUtJTKvivcmk8cHUx4QKuMwWCvvfzd7X4XzaNfe",
  "key21": "57QtKCG7GRZwaqDumHCCVP52FLhbvKmCERbkqDG8nbALgzKXL6YAAsGBLmigmWJbnNPPq72DVKArNjttNhHS8kui",
  "key22": "5AwztTT9WGsDhywqGTZj7fXYAhA3J6Uibsu4XQ6eAnS7sAsmo5jUuG9yzJh9Vka1TqqLhLfco5PQ6dziM5j6thYN",
  "key23": "5NnmALrkuT9ix2TXGABT6ucRb2Ws6c93KQZMG5MKkqCph75NxYNWJw3ZFXgrmHsj5piy9KFVYDcEKBMeQww8r1bV",
  "key24": "65smZQzyMFoYn2wtPdfbyfU9EH8s5LJ1VkkHDEHXabBdKSMv7M5zjEfEKKNbi8VNW3nue2xAqQtEjxM19WR78Dzw",
  "key25": "5CwnxhLtdc1Rf7sbNRXcvjP4GXkszv5LXtL7acHzr8pDVZHqowzwxsyoxc7jPXc1do2DRY2cYUhHYf2aPG55TRhG",
  "key26": "3eVXTLR3nfqeJyGBV6zYfAeQzd35uBmUz7EvKbYr8CJCXQR2nW2VrLsS77ZaFShq3hE3DFNBDF7bDyDtREQMJ8Dk",
  "key27": "39NAxD2X2etkJ381pmwTybT7A7Gr4PvVJ8rdJeoZA1nEN6dSBhM8Ge2Pt7PyCbcbK8JggjQGCynNRCUTsA9jrfVD",
  "key28": "5dm6q4jC7Vxe5zY3Dv1Vg14o3wWnzHaKdErqD3otZTsbanQrtoZiYjD2RWmPA1md9f94L6dcsykcSbekoCtFfeLb",
  "key29": "577jrchem5cTMLvn9bH3LMJvmPwSLmP6t1jyas3FK45kJsHc9naaDzko2B3nPVYUSG9n65VtmUpL7RLYARYtYiTM",
  "key30": "4VFjjNrkHVuvpbGra78nMZqQHmfhp4ZYqXQqP7QqspTYfyELUbNbtMz2kbS3R5k8LgJtp5o9MdwWEFnF7VUXRi4V",
  "key31": "29XPxKevU2aVZEThup9zNayZe6pHv5w1NZaz3bypsoH9yoWGrgEmeYsjYvqBSXn9kcrmcu4kVRJWvqe4pnYJNGGh",
  "key32": "4mJnQd1zXaB1uxKH3Jb372xsTVDcmk93Ubgih8kATW4mVjB3XZ4sWLiAvpM11Ex4aWbSj6Cphg3SkxvT9m6eLcoT",
  "key33": "2EyAMyaLoDtJDKPcmiiP1AfSPYqsHs3cW7FX4FA6GJquPgT17orCusod8vemjNHjZNQNRWHdKkVJikCabQ2UCWCP",
  "key34": "29ZC4dogek8maCVhCur8EoaaukAjtEv63frAX5n7w5LtAkkuzb2tP3XFN1HkC6b6kpZ5K4tvYYoLoqXg74KNrCVj",
  "key35": "4J7fXoPmipHQk3sLfetbJbCV2g18A8WFRRZXedgk5v42J6jyHEjyE2A181TK7DBiKu9NQf4ko9cPLwM5AZqmJFK9",
  "key36": "79etkSPaeQjRqoYgZ6UZL7R8pYRihuaesK3PguMuqQBofS8kPVgj4x2cWxchua4rm8LHLMBLhyhznWJu7cMGvWG",
  "key37": "4mJnkGa1XaVRLpZuUSQ9aujE9Zeg5eQvqJEsS8mJ74eabPHmwN8tLhGKJVgVDeF4tE4tD16AGNz4btRpvbLbPrg5"
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
