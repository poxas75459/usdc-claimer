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
    "4TmdmjHUsE5B8hZwgSxMmVQhvTeu1C8v8E74SaTTEqdzFMT4LFfqLeK14WfuMPCWTwdScBRLvVELifEqTnmBEuZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uhBXfRaQZo9K9qYfXqk1UweNrXN3Q2qGn4bRxTvszcbMCkabGxWuNAMscPPkLV9dWuqMmZ8XdzeL8i5qVsnNwYG",
  "key1": "5dnhCRc2DYvPAMNqe7cUsMysaDG7m55Qe8Qwy52haP7qTe16EhNBPd4Lh7pCoW4e8294Hj4QEVkx9kaMWrZZJA2z",
  "key2": "3AEuCnsucTAas7UurCrNmDFUKGJtZF1nbcf6q2FcAqzW7629AdGV8iSjEcx47S8ZB7gMfPG88dy5r2ajSuhbjMW6",
  "key3": "2kt6D4e6LXvqAHeb6H63fg33eMynoadwmhtHvqvcmHPeDEKEBV62uZcigWCZhaXfrB4fMx3QvEEapCwEhSt8UxqU",
  "key4": "32oefryT7T6GnnAwZpeNuyecBVUwdKDsoEakvQiiNTPrqoQ2uEYNHDTebNKgpCWpFu6bvRSBueYqY5UgnV1Xgp22",
  "key5": "5pcEEEdRjcXjC25WD6nAXUdUS1UxCWe5fA2EiseT15AvnjwsDionTgHmPM5Z2WoRLoUAJSHSwwMV3ZDfehHwoaVG",
  "key6": "2wXhPopJc5fqxM7xY1J4R3dyLzFUSeui4CqRvs9XeiAf4e9Y1AbWoSiZskw333CBjjJL2Ke8RNquecQ9T79JBF2F",
  "key7": "AiiG9io9eqH6q41taa6yhYpNFK4i8HhBmdnYcGHRqVQipzruWPz4S2f37G21gUXNev5ypJRetbcAhepSqkprFED",
  "key8": "2LCWbwJAb42P46zjRnBfaLwXhkKNNWKxNXNM1F7DWrL2RBxxZ9TKMMHYSD39X6Uv1royH1uF9hvPoqRddM2H68pJ",
  "key9": "4ABrYwdZkmZ8rso4AUpiCPwikaEv8VguoAfYTWppypeF1P3ADoE9gAYBbeJpHBXXYQAeZCXKiEtS3RFKs8ar3ASg",
  "key10": "3DCpdxJvF9AfAYQ1jkkJkaMjqza6gwV3rttBdyTjEshK8yaA6uWTXc7VkuQR7vMvvHEb4VsZZmnE2VmcP93dksw9",
  "key11": "36afHWV8ARYAmwUvVNQGFZjAGjL65Ei91ucuoBRUcE2EmqiP5Unyj3KCd1LahtdNrTEhwwEMaJscSRLityuScqfB",
  "key12": "5HdaQZWHJaQ2RYfJTZAPzN6s54GSSq8ZnftPi2fWs3LkCH5PEGPFxgkmQRteJHEaH7qEzgDxvZE5XCe5SvBJ7SH7",
  "key13": "5syyrr2sBpv1imkTt45pRteD3tP2zKSq6Qse35bEwCyvh6pDXuuid91bh3Rd5qfDbeW2hL1dq9gjPoPeCfSp2VzJ",
  "key14": "4h6jM9BMG9oQ4XZeSo25Fspp2FVU5enKGKsmCt2eA6P43fYp4tkJ5ijEgMFYvwe7f71RP8pFUxWxbuT4YjSm98Sq",
  "key15": "4PM89PcmQu7hYNvEbQ2c4bB2UqTDqUKTzXgNU4nC5VT9fsEirGrBJVpQPZvTSNpgAYwN9ufY9TC8mYJrHvMvn6uz",
  "key16": "X3TniNx7q23cEQfELVr2SCL26SR1mVERjHADFJ7dEfhJPBZSJ9wM28aAChBavW989wzoV7L274ezj5YXKxWPgus",
  "key17": "3jaQZxrBAy51dZmT7m2nvD7DyRDudvCtL1RU4SxqEdrFyfJRBWp2S6jPVmQhVa6bJE1xeJqsvt3ZKTuPHZiXyBKY",
  "key18": "59WjtAyU3kbRRmcAVzu95DW8yeQQ6q7mZPScfAsxBY2gurkSpJavtNbJdZVdjrNnhdWguEQBFBt4RPFnY4Ai2LSh",
  "key19": "3H45pqi7XjhtVwiBu4jDTo6Ua15XbCrkxstcge1M7MnKm374cZifgk4PLSNm66X9T4Tbsm2zsW9zEfGxAXCE4PSM",
  "key20": "4oq2uRPRmihVhJRxT2Lnkfiwn7LKvoe1U2i8G1BYp9kauchYjUrjUifvXiocTDvyfMmqovryhvJUXKhsNVBuuMuM",
  "key21": "3rH9tLeMcdmWMPXJCnHGeRftDEmE9nWtjAaYfujE2SVYvLa4VU792cXEyyvw79KVF5JraksqXFvkz6h1oLPP9LJk",
  "key22": "MDwyDjtbVd7d1q7wTWBzWbd2RJzaqaT6xoC1WxW8xAZWuQaiNJbVHVHjpfPup7H7Eb4csUU1fPfadqPZY7hGHYD",
  "key23": "365j2LutMEAsDGkUqEJBFR6RapmbMk1T15vHvGFFnXQUzkBoFLJF5gpmgnqdckLhVyATgadCbsqcE9qG7HDRfBfg",
  "key24": "5jwpwHZdRD4YQcxvxdLhqabTha1iRWRQbUmgvpJrBtMb1tzTEXPr2htKT4A8PQZjk83QFTL6ML8Z9og5e6RepNwv",
  "key25": "3rqzXUy4nHXsNHaLspS8FuyKgExdaBsBV7zCgjxib1YXpkFa7z6BuwovUntNyueVB7TFUFTBAMwjPPfKxhUm7vTr",
  "key26": "2PS3Cdjk4Yj1qoGgbpEB9Ybd6bj1fsiYhn3CCAJmy6zA76iGhRkyMfeZXcT81VkFnUM6xGQKpMocqreJDDM6QMxg",
  "key27": "2vZFqwYU5eEJfiv5wQGczMhLPL7dnY8QnSbR6jU7zTrG88RnrVWRyvkzhjBtZY9KZRr7LPvrm7j5agq81Kq7p98x",
  "key28": "3oBwxfzeFDgHUfx3vwu91QpwJyqGW7UDfosTRqQW4jdfs4tCiYQw6v6ndApbDETjeYZe3Zws3FEf8nkcDAetHu4s",
  "key29": "5ic1wrS11RVFJGYFFPy4aGrHFQZYpnHWH4at6NXmHztbqtTFKeV6dHFQbdVUD99hKoqLD5RStsMG37bQQWC5MCYE",
  "key30": "4iQsGkfWgLXsnaZPxty9CeWcs4sFrASWirsf63rSm4W1S4pW4WSxf6DAGcE5vXPcsyRbpopimJz5oqAeZ8QFyCY3",
  "key31": "338CApJPnavg9gw2nLnvVyF4UgQ9vNvmDGSpwr6EsoHFub5UfwKr9M699jfHCRC1YLedUYKUEq4DahnvcaSJNsF4",
  "key32": "4iKJeJi7G7YBhobY4HRg13GYq7QgZZJHkq4uSxkuzJiK7Y7aSRUJnodysdNXRj7VVJmyAdFiHfufiku9odLhn28z",
  "key33": "4HQ6DUt8ApYBiUyL2WnGU3KeQ1kuX6zcQnJ2aGjWMe8qkkzwyxFM9rBMzN9YYRE9RP6Atky54eoVgG8M7WXhrLMh",
  "key34": "cC413LMdgKGoTNFk5wJi7noM3tK48mAytgeDpG41wWHC13faMFiHznYKrFA37rQgj2WZogNGCK1RaPgdAsQnEfv"
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
