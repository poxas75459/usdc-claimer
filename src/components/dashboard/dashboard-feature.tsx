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
    "54bJtchZYWC4J4BvZAewGWgUJDcwGHSQhKXwrhwr2A46S1qttQLBZzxyXzV5sBB8ib4CFo15Hy9PLUYqc9jQ4WBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tj2LJzvREF6e7oQyy6C6MetZHhZX7TvT8QJFMacWV3gz6etjgJbZ7e54g6s5wDBuTjDw2eCJp4vnuvNMHAZNHVq",
  "key1": "uQpsaJ6tpUYnsCjTXUaEN52Nw7STeBUkvLu9MYT6iBgWZM95SMCMsBqTbEbhA7qiHGmujvVYuqBpvszYmXATjSN",
  "key2": "4pPVo84hALss2NPnRxzi45n75AjQ9c5VZfE6zCMqfvTsLUjYbnwyCEo1a7i2KupE47pfnbZsbAXK32Xh9MXTym7r",
  "key3": "9rab5CJktcGm5oSbpXCpMYWG4kqE9js1ixwa3VVM2Ndr4z73ZRW4n8tkdz19CvC9wbfiFfLoKkvwGLVVPoR8MNT",
  "key4": "ocmb8JfNBdbvWs5BuXfW6nHp9bhLAQd6HBv2hLkTkx5A67r81asixTSYr6Q8UJzQUqj9zz45cwkG4ECfCx8Mx1g",
  "key5": "2AdVFBbUJi2cviPyUyc1gsL2SzyrVqmGKkzN9Kr1XihXbHpnA97mAzQ1VFFF2M7iKhZw1sTAVc5p2ccqkunNmmyW",
  "key6": "5dMbnBtHezfisod7Z432mJCn2UaRxtpp48MvAogFWPWAos55Vc63H9kfp2AGA17ygvcFuqxm9VbAauHqfuPhyYRo",
  "key7": "FYn3F3Q2WnANDVKAzxBc2Vvh2KjsLv3qpNj3BuJvq9xBX1sqnZbsenrmS2v1jmBJasMQ3w3Agn4DCYc2T79A6Js",
  "key8": "2TJcsbS2PJhxz6sMNhwLL1nNRMCZMbCVAG9QrDfXWjGKz4Tkh9YEdwUjeywP4uE7GevGu4y3dFrA5hcDehq2KbFv",
  "key9": "5WrC9PuhHy1i4CWxv4aDvEPJ5Nxb3GpWxkvMHA24MzRXU72VYtTvDbYaWPg6XruV1Z1Y2LPkF8gZbeDYXu7Aedgk",
  "key10": "4fwnQSNB561A3ojrDA7bYS6owjjrXE1zXH2PL2B1KcGX1DVe1skcKuNABtG2LK2ZNAZ7W2cTSXwKMdt15ebqbrZZ",
  "key11": "2pWM5VR7K34D3sFnChA9gQHSzvhWFjnstmrvwSwR3iMDJcmcoaQUSVbb1YbsTmEVUNKhHi3vrjm8fbxNPKqQetys",
  "key12": "5hnGQ8X5vbGucUk53spc1Cs4aDfNRYxG11cieu9HYawRFSrSWB3gPJmVDTmwUo1WuhdNJNuGosdu2bqyRGrLNp1e",
  "key13": "ASRsHEJKeW28emgnFLAsjbVcBYBb27h34EgjGEW6YZAQUPHwqYrU4qL4U9s6ssFYLR6BDoBJjASYBWMkNUu9DbZ",
  "key14": "3tD7AeuYbaktxX8qBqhzvsk5zjEJurcj5yZDTjTp1U89jsuNhS5BYGp2y17zzuLyLFp5yWY8yCK2fqUrUWeCdpiq",
  "key15": "5PwLRqHrbAGpZ5FQLMpRjZVek8tCAvK5VHxeTMT67KtikCVgMr6bNbGhXkU8GsFzLtszm7ztMg4XyWV4Bh8gZjMy",
  "key16": "2w25cLVvb17MigQkhoVmU43xmwATzFafuuaM64CXc5DntFmeMaQp5GjPA5t6xeEBN8Tzi1tSGZ36i78fRTVwzPEp",
  "key17": "46vuaLU3Kk837cajtRsgq2wXiXEimb7ntRRyQpQxxhek5MCDeQ268YoKnaGhiLufrokahYXymccS9GJ4pVsUFa63",
  "key18": "3EGf6VSy6W51bsMdxXmcg4NiZNhMPcJSNwXvq7TXZcWYnUDqrKTMVTgmdY9JTYaBNC7Rh84ZL5QcKKBotqggaaYV",
  "key19": "QdZSpWBPWUjf1bxkMcQUqxfxkt4hcgNY6eh9Rc8CG8yDCTXvzoF9HMrBTfJvm17r2NHpkBc7pdPCHVGjHDZeURG",
  "key20": "66eCn7PpkfZ3NyA1xcxpZndSCtnythZMCnTZTbLgrZNo9D9hRTHhLeDWzhGHfo25KAPFsaQ9MDavFjKj1n2H58iJ",
  "key21": "LEqq8tpqzFVAUjSxaVRTKuBk8yXyFcXiEM8bVUoLmeMsUTzc1VE69W7WVbM9Wj3LkJQtUqeMBoaZh9TE7ZeNeHU",
  "key22": "3gJKmgTwsWoeZo7KNQwZuX1gRUQshEk5YVr1nGQP5eYyzmZ8ifQGNX91Jd634WudXx3cCQo1ja1VA81S4vSoTieW",
  "key23": "42ZaEzQDqmXKJui3iC8eo5W6BsStH6vgWZnjkFQdd6krL9vfMUYdWXVnvTMcPXGK6oZ1paP5HbKYRWfK2LAT6oY7",
  "key24": "riERajKYFP1ch9UiFtpiy69GJDPnQ2Bt2Y7LsUzCYK81KLSW3XttXNBY4vdFrMgiUkdsqEAt7JUQ5KSKBnB37hu",
  "key25": "QjEiLkjQP58NYPZzLcMFEMjGGiTP8mS6mLNxy1bZY6g6Da8z7k4a2SLiha5ZeBusybDrt3kEwsoEyAfq3gyaVJL",
  "key26": "hLHgr4M1i488opvfmE8nsSzGffVRqfT8C2yr2gEeDN9gGbNPJToHifruduodrDmFwaqaMAuYZUN1ynSse4pEB3m",
  "key27": "3hAWr6tJDgVrWBoj582yD1KnL5gY2AoR3LQ1ecw6iWxUH5mYHc29m6qYR7wkcYRCjSGG6WTPQw4LFFxhnBJDdp7b",
  "key28": "5s3dXQW9R3ZGKwzDQXiKS1442UtyNHWuRo8NVoS9cys1mFXkMoVQaBgzdkAvfZikAHG6zcMBcSZKDsXJyKeuNRXQ",
  "key29": "3u4QG7iCRGmhEftoL78i894vNCqs9aktGdtvQQxAhpVrGzas6hAFgEhTwK6g2CMixd2MUfzWwMtBmHbJoydBBRpq",
  "key30": "5AD8UsnEjFikVPd4gBQqFbdVTeSmtAvM8W4DEGqiKxsu8YuSGMFUyM7aAhpyKmjtJdz1rQVWX3mrjjUMa1m9SEM9",
  "key31": "62KNXrz3TjLCdnfSn6RckTKK5JA1dPvAwc79qWGK9kdPTDJRcmn9xQPAMrrrrRmVL8HFrXeW3GnfFw4miKcLXRxT",
  "key32": "2NMwRZ2GZsmn7XJaXnX81JLQ7kNSuyo2hFXkSisXpX9FVyTecbuxrtttKXK41W3u7ySokHQ1Wh6CzeBa8t61yEUC",
  "key33": "cfVTMJNeqb1puHDpn3KAEGASfBdsu6j9jzuzLmE2WGXayFbdAx38qiGpnwMS8ZBNMZWemCNzQQBUJD5w33UQYhT",
  "key34": "62yXpBTTUxKz1hQN9F2gWUmywKNC3tsujeVDAULZFJYmuSaEwtgJCF4Ua6EtSD9rbV7TnnKzwhXavTyDM7Yzork8",
  "key35": "42JjozExyk5ChWd7Nczr67TPgoYL2QsByk55V64tpxmNgAEtr9WfG2i5e5xS14ouuMztcTebPHk3nro1iLCxoGAD",
  "key36": "3d9GMKJ4xKw4Bn8tAbKzEtWBm7bXYUnTxgtYoEJqarKVK8vHsdbC69ZCaDdB1ArX1hPagQJBuQEnm3PjREt5HnD6",
  "key37": "2V5TV7HKt51LoBgio5PBbmGgMQKjzcNy1ERkTUJeYcNRYkvLxgJy3sKVrCtNN2qP6RHfui3ZkptwvAjN8b4ZtfDh",
  "key38": "1QCiLuSSFeYRb9Km96g67TDnT21pEA2q6NBcPKnrqngUkiAjSr7kqa6C2NXpQmy9XHRRtW6QUvncVTdwCW7x2Xy",
  "key39": "MrYqXtZ353aPHRoEPzLg81kJJAEunKafktdCmyETBuF1xKAAa5h18qG3Xgk4nCWUGGTprFdg1v7YrMznVgsDduw",
  "key40": "nce39N3Lz5ULFqWSRMoUuCtKHSYsS2jo1U6pu2cdfaMQUQvPxtUYHCVt5L9314kiAbNRzrMmyjgT9XBkToDh46i"
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
