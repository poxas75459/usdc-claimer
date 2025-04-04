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
    "4YM5U9ufi2RVJybcEpPNB49QPivYWwm7DCVm4Gdrx2AwJjJF4g5o9ZCuHYLDz56j1rWyunbehrBpgmDG9ckmM2Tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P3hk2JW3e1UeXq9oqD8S3r43Pj5F8yQY7oZYq8mGNEyP35vr9NHShW4woa8XZRS4fn5KooyBSuwzMoN8j6zFX5q",
  "key1": "3H89GyhH56oUJSiBGJ32D1k5uFhCECVu4imd2b1jwi4k6SzTFWkDW69n3DECfNMFBnN86Gcu5pJEywfQRXpMLML6",
  "key2": "2CjKmS9Ae9EoCftumLrbgGMus4EDfp4YSnxwXc5jHPE66jCKWYVsfbzVzC4cUPTxNDiMg8csYBwhQT6ZLjnKYLqa",
  "key3": "TyaJStk7i9vj3iwCBmPGbi4yskacEzmsMjgKG9bwTUbL7zTeSATJaex2Srvos6AAJ1tvjB6kre3NtBDNJYrAUwG",
  "key4": "5oMdgsTkmDtjuYBhPz6vcCWSpzoJDRdE46Vye11yHtJMFegrF89uBK7viHfraZHi9d6oAtdpTqxziVEZrjZJtB5w",
  "key5": "3W3KrSx949JwsBqi3mZAEKRFZmehTryfWqgfU3HeeGTDjecnMfH7W5xYPaeUkUNsKhRwUVCFNta8S5FP1UdBHddg",
  "key6": "5BLT5H7dKW4hdUnd3tw6F4YWKP8vR4SxypNUGqKhKBM471m8jLyRC4EjuKbBHSECfATYEUdFpr8KjjuW2YLNRDb7",
  "key7": "4EzTLhJsR4wLsu2rXZM2LqFDx1RdqfPtwvQWiMWsKByHVdYtFX6rWmzro9xujot6gBHeru5xg7fth4jVKbUE1ZGr",
  "key8": "31KnRLErz7cw9sVqSjMzHhfWDM4VQdxjN4BQQtwtWigo9o3EVPeLBJFJwg891n5cH7YswtC8z94LSLa1kZUWv3Cu",
  "key9": "4a4vEGZQCw5fPxy92tVqyRFApE2a8bXk1qzsFyeH5HVY2Xo2nFRXXKzPUjpH2c7db8emnnwkCKrawdPHbT42MoYk",
  "key10": "5AyigbRXApt2J8ndRWSjspQ8UX7ioXe5vga3X1wYK3nFEsbfnzXmWAFiC1i7fXPtRaCGhsjwid8wWeGpf1JJaQaP",
  "key11": "2a1Wj3VQp8WV3N9dZWbv3jgYKfdeLGzz4NgfbBW6vUWHn5rnx3tuzbwPuBuHFm64xxHbRZuzSRQcRaqbLsAokefK",
  "key12": "5xyVd6LrxmpSBVkN3oYBAYf5yBnUgMgeiygaNsqaMSNhheeFh7Seq3MT27RhaHXyjLK8WDbcKMutqL5nLZSWv7GT",
  "key13": "3uxvHC5Yh8djDaiEqPDanwEDvCjK2wYHy9MCZV64pLXhXpqi6pHqLYqhioh5BK8bSPGmwBXMKxXQypg5mtZCbYeA",
  "key14": "38MTx99UJt7vfWpTNC4FRvv1MpCHgAVvv7CQvAn3nB2BDvsCeXWk2zLL6ZZrr1YegRhn817TATyEtw27tHgzV8MN",
  "key15": "4LD76vPYC1xYFzgEoXJjnh9N6iYShc2CowGey9i5ojy17QHzRJjhvQjcG9utfaCRCSad9jCVmCofUVJMGc3duXyS",
  "key16": "4DpiqKs38YfvFc1BCYVeTTqjX2HpR1nLSY6mtogsjELx1e7EytFrGB78csaTYBGKHt3p5GYV4h6W2E7SynQYtWry",
  "key17": "2mUVMRkHjmJakqHmBrevsm1oDtdYWFHh3VViNUJchWKVHJpM92MKPyGJBMgFLTU8Sg2ffWxZVHZyBZkWkG1szuCB",
  "key18": "2bJtG6B7K1E9y3vwUNhVHomYNx3BGNiNEskZSo5hVDAbJNw7Hrz4Umy2TogU1dV6tAX2FEs1dJ3xRJx7fNYWoouJ",
  "key19": "38hzNbG1351iPsP99FJmk49ZYoaD3CGzozTuMjYaY8MThhF7ZYVtzrzSi5GN8r3yjJvCxhDZDcrn5YJrunR32E2Y",
  "key20": "4ksWmiQGSt5Hzp1oCSednkFQdEhEFDhq5T6sW51mcbeKYADacN7ZLv8kd8mYUMcDqzs7E29ovWxD2S6W9FqNbGRX",
  "key21": "37LWjGKfJfmqpMvaZJX1R9xV14ZQujVEDcwxE85DJ7CiNGoGhYL4HcfLKrpUbyKLmkMis7em1fDyqUGuMRbR3a7R",
  "key22": "4GKwkCk4zsYiFLmYKtXWZducCZ8hZ6yN7wx8FFHtvSo8B2SE1KkkcjbRFrxjnAJy5QGFZwqxmCCxZJwLrJhhqqmj",
  "key23": "4igqrUKXFa6RRZN2N6t2GXTRNwGzHYwDf8eXxyr12ewJiL9ZfZaK3Ypd9Xv25pa1ZCEQFEbhbgq6vqC9FnkPvKrr",
  "key24": "332SAMJ1viqSN2tnTL4cUENeXbAJsPbVdc7KimazXBUK8vntsAUWUosgeVuSFpjac5AqEZ6LeUa1VQFBvWZs5A39",
  "key25": "44Q5hhW758hW6dmvvuLv5pUuFbqUBxeY9UC3azhhQhrqiaV3qd3GUtSEnG6wWWRx25kwkLR4bNwoBJr6JBAfpujJ",
  "key26": "2Cjj7DuRo94eUSPCNGxUiBLyEYHo8JaxJv6rLYKhZra23W7MifuZh8mk6HAqgL41k35PffKfmV6dUXRmxn8EkaSN",
  "key27": "3ucU5zM2tAEN4qKa2suaTX23bGLSgKaW9t1rj9YRQ4qYjyFcyEndhphaBndS1vVEojYo2mD3fspkrAaPWQs83ngQ",
  "key28": "2pe5Qy5zqP8S1yz1SyDoa3dBGzyjeCcG1Nb2vmZpssW2KJRJCubDeTi5d5z9eG33z25SdFGvBY72HRpj6J4mHAqT",
  "key29": "4kKFfJ2kUBDxA7NJt9SLBzVjuWwpAEq3yVJgiPiSkur1CQF34njFgJF3wo4Bge8JDzwXFkX6f8boC8KBmibQzgB9",
  "key30": "3CQFu7V1abY2YuKdDAACMFjkp2uDEwm3g9TaMYrqh5AK7KkemcMpcFJEpN9BKxQwqmr6panTURfvXZ7DNF2oAncL",
  "key31": "5bMTfgY3c3gJ9arztuqPtTkuVwtETe4bhdEP5r46iECxL6HRWN1ErFzoCaeP8MMoGrCPWA9UtjtuKprgRAnMAWGJ",
  "key32": "5BHJyqdz8wakuuVwpcR9KM4LbzuKDcBomc3j1cnaxDC6uKCWsAjewsEkVCj3jqsUaYK6Y6einJUgCnVHGU3fUavn",
  "key33": "3rv37iDtsu38aHn5rDpYryyprwXGi9ePqBCDvHBP3Pk7gkd82nWPk54pxzrgf7KsYoA2zrvhadqkC59Sez74PErt",
  "key34": "2EjhsBJjNXyif9uFxk9NiqTENTUb8xQ2u8TC51TnEutZ9894Hx6zUcJvPKkLsjo7aQN53BfMAPLMY7a5rPEe4nw2",
  "key35": "4k8Ts9hUBCM1TPtemYojEEJ3W3EPdefPq4fkkBQGnJRinrSJPUCRoC3mmJdv3tNg3J55WKLGudfyehQ9ZfTCa1rd",
  "key36": "yr86nPHmeEeKH7wLSkP5xNiZWLgo8qN3r95VLNmHZYRGHpigFnYPX3PS26Jhhk3TxYuef2HVE8r2JLwSBJ1f1sx",
  "key37": "VEAnC4VtMwHxVFFpJv4m1JeDA5sGCTp7crkeu34sTGDLHM95A8UxkM7uvGCoxAhLcwD7NkFiS1tqx7oPMozvtsD",
  "key38": "HosMFtdW9hx9xXZJYJBEHaRzi5kkiJ9ajiFSdtXo9vgyFd28bRUNCc5uGhTR1yFr5DtaXqAbaJmT7VQTEwwLzkZ",
  "key39": "PB4xzBxGpNZ1eQRN3jvrREV7q8rLc5HqhMLqwHCnjUKzgNop3fg6aogP1poD6bFtQbU4yN3BxnHGntbTdAPS9ny",
  "key40": "2jFtcs7JZGX8d1cN67wnTAmwRtMKRNamcAE7ENZrhj1jJ3bkNHUSWYmjnUwcNaNjwfRaih73iNHVMRCo8UaGc3cu",
  "key41": "t5TSVNRU2VRPd3ngaGWhRhLsdVkn1oziwrgFzpDheMfAcrH74DcibfLRgowHvuYMrCp4cRS6ksGsnhxNmePZmsG",
  "key42": "3RtPjh3JHa6ZjpRygqTse4J9hNnFDSeDS9zaxj2inKFpzitjKpfLbajwT3XRVJXQ2ua4Kq76WbJeDuDiy5Pj2MF",
  "key43": "2yp3aeakmfB3BejS6iY9bUi1qSfM5yDB8VyvwcQTZizT7cqZyfikHSDMuEPhVUJgug8QaxPECmX7G8KStf37zgLZ",
  "key44": "3MuEcBemUuwL4AMJX3MCnZk2eFETonAPf9rbPiNq7ki2zgT3jirGNR85Z9N83mBxD9vi6xCw3maUVhX3V33VgZCZ",
  "key45": "4Pr6hxPtqdxnEGNPPvAQADr9oqDxCgQShpHH566usGaCkhzJqB6vtr3D9P5EFupvRaRsY1LVKNgncv2cHTgQ6LSV",
  "key46": "4MAAp3GrFmEgpTgUEpaTRbfy147DW1c7ZhPimrhfPutyyMxHM3mLPhs3o5H44wBAKQq3bKo9ZLiGDpYFGHXqZoqN",
  "key47": "WhyCPMWKBcpWc4oj3kJXJJcT1WZeKyqANmGzgQSd1r2HYN3znve3KEnsjNU6mmKyCya6tNBgeEctB2cm8GoBuzu",
  "key48": "rcCaAUy4JkxKJjUa6C7CRWJvWFMCnK493yo9CrPVDt5pMQkdVyRSheTjA6F2fyhB7owoJWuTvxrGsSoDNxtCGaT"
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
