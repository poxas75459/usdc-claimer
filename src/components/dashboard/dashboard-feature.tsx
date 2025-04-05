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
    "2LUUVzAueCJaLUY8zVqibwfsTJjh25TxKZq88Un81eg5NKYEuM44gk3Qym3ZUze1W2MR3hAmM4jY8UZ2JexVKkL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXxRDT1cbJWheQWtseQDUpaEaxgdSGmVoTBFcY2u7zzpXr8jKGdS4BC3yCWFx73ToVQAGMhqznMg5LuTLXHYR6n",
  "key1": "5HUWJ5FbxLN66TzfnVCzjHgZadGHra9YEh6ForFZX5gT1FZPDXyjf1MusWL1de7qsfr1wPYPsgzhsGNN9U3NFdY8",
  "key2": "4Mmta6eai37G4s8Xr3gP2y3kTexP7Tj4Br1sXg8QoMBh1wW3QACc2xqBZY36S4gwSXSFRfZjqdyKBDjaVp9Kk5zp",
  "key3": "4uqLUXff2Q7d4Jtg31ne93KhZopnwb6D2eCBdRhPUniC64WZqVPbsBs2dkBsfsYnJweZ8upfe6BM1uvUoAHdGWeF",
  "key4": "BVedz4WaqhXJDXLisorWUvbFXRBZDjX4tAW9qwHZr4SaU1rT4U95MTNZEVCEBmbH2KZJLuCg6MVjdbDbmmfU4o4",
  "key5": "c8weXd1gTtBH2nwMtyUY9ZYRVgDdKrMmZg6r9Fxv4fjTFSvyQRnt6GMiWjpTcCAzQcMxneTGCHyXiS4XgUm7RHc",
  "key6": "3Aef9SyRqMELDkx8YqQm9k51qfFsTseEhYoWFJ9bthEPHgeq9xhHrRdC8FebzHP8vQt8HBiuNUUCkJ278xf9itGH",
  "key7": "2kS3nsKuXgYR1zHJ96wvCZZXpD9A3AWK67bbqWLErmU3hecHWmvLmBnzKgmFdAMSCTvJPeNWhvH2M3YBrgxTEcWu",
  "key8": "4iSozncpPaf1XvRMftTWeR7GcB5kZaFr45ro2vFcfazFN49GQ8Me7AzAPXUjcA4jvbEyQQjGnCAay1KWuoWguaEj",
  "key9": "3vpBFyh4egsr9vErhJSWUWYWYfRDKLUfmQ3U3XZ7jfw9PQQn3pdpXYnGi8kEWL9ee3twgMjm8y6s9SGeJMAtEr8",
  "key10": "4E8EjQ6CHf8q2zivQAztnMy726iUttwAbmSDMbJfZDys9WXbj6zv3AtjDfxFeo3DGCKMuqQF5J6H1osFh3nGvLc7",
  "key11": "3MaNsV2BttK1Zyc7N8mZhEdkDrKLQbuHrhjYFapJ82R9LCAZjnZo2nWnwhgtAzw7b9Bfut6wnVwty8ERFWy6pUwj",
  "key12": "XhT3YHKXekyqNJ1EZsX4Ba4v8Rc6sXa1fknpSQYukMdxx8PpKEDiy42HVZcsVanKDgG98pqxQHV1XX3kNw3W9iv",
  "key13": "84VAkz12Tojte65yxoMXCnoYx4Myc4WDQpgYee14PdAGJEyZHvCDkWR5A5ZjkUbFUrgCrarMkNpNGy1ACSCMQpx",
  "key14": "5txEYowc3Xy1YkmgRHPGmPBsTeqKZPLRUXsqcbZVxhTeadHB6U7rFe2EndpjbeQPfqFFhtVK25gJ5Mrb89wNUY5Z",
  "key15": "5kN9PS7AA3TJWucUcv8UnVF4qvmyxHsQBgdXZXbJaQwBw56zudrB7oaqdL2FJUBnvE8P8rry91LDpgVtbZRBeetg",
  "key16": "3s3Kd85veRhd6msr3LpE1B9ikJ7VYEXDnEiiUvxBZTxXAaXcjKt7t21RQHFbJhwzojqWgvj9eqUo4u4BrjRix6Nq",
  "key17": "3pc5n1FWZieFuA1ztowF441rQzPtFc4Rhf6dh6bsWMB3H2LMRKgH8jRx5UztVUMiMCV5yAJsSnzooPXq3oM5k1ra",
  "key18": "57rAKcrvSfBqN6cwdbXZLu3tPuRPv2jRiAUosqKTx4iP2MFAybWrTqohj5kjreAqRo4TmkKWRjkUe6okWw9W5B5R",
  "key19": "uHLYgQWWcgbN7PCtVwAk8SEwgEdjxsCR1FgWejc28EkZZhjnZznFCv9FWnAtxaKZxbKv8oiJJP7gEp7a1D6WUKJ",
  "key20": "4BksZkCdGM5yFhitaZaeXLm4ZYbA4A2znew5uK6N7VAShE3b5CWevtkCUUfSzHdBCtaPhvce1Xie4mckeeDWYZqu",
  "key21": "4ULN7HkbUHHkeEwsyrod5G9kwczsUiC34xmANkTVXUpRkh8zZ32MMGbCEuuwnksPbsY3N5SoUCU3YzFtomBdLAWz",
  "key22": "dUJj1sSgwcriqS5KBhwGNnLoArnhoPHfVLy942GpwmNpSxDgftpYNHo6E4T64ob5bRHDhGv5NEMeaZQ36xBBHpu",
  "key23": "38hN2qmVLjd3ZgUB7sbNvnLyJ8BxokdYR4raoqkCarYaTaEYaDaTa6MkygVxe6dYvU1yA1CuD9218LCM32ebhsTJ",
  "key24": "3iT3uWYdboRXQzg2boK4rgXAbSvfipnBk8zLpUNC7JkpZWcSB4PVRyQUzJX34SqQagUQ6PgZAivcpyda2Q1CaBry",
  "key25": "2Sdx2mXpJrnFR2QzEnsqUR9mGzoqnAkcMycPLaKfaHcbik9dNa1Zapc4KQqj11ezAPuLDdxvJXgo72mi6VUqSENB",
  "key26": "42tWSrfZEhVxrK11KP6VJNBAp4hTvL5hVvSgmENsimMp1LowQfnV3DBg1AMkk9oaKDDBFFpMaiuundbGX5j5L434",
  "key27": "3EvU65Ak1v3p8z4PcRtrjQmsE2WFxYe3J9Ftfnji44xySuvcwqs1mbDQEG6hCvXX9BJsRDpBc3QWUXuzwVwfjsfv",
  "key28": "3YepVdGjDgfES6KVGsxqL8Q8YbYG5ky42qK5BDJ2M9K2fRhb8QLiVqbJChX8ahaP9ivyMjpTUw2dWoYx78SDjvDV",
  "key29": "2wX3avUAzdPuyqcn2a9Gi67qZrvHhAjCTFWyYMYEr3KFksdLvGLXyU9un2LuyWKJJJ2xVaRQakmJ9HoeCpZHa5Bf",
  "key30": "5YL9TXFjbph5CRZBrPj1fUqoDsmGxL9LBaaPkjYoieB5C5jBaHricLJTVRSZkhNRko8rNM2zzydMDto9T6LQrQW1",
  "key31": "29DUEcJBzo3m5Ugrj9ktrQveem1dAKFkijrB5TC3fvPuHkb3uaWRYH43ZW1cXkH1MFquPhpReAA6c4Nx5B4KM3qt",
  "key32": "2f1h2VXJLMndUEsJf8i5DusWzqKQ4X4cWvQrtfXvgZnB6JBfra42vztXgoeLEkZDYaSMh4wKL1dcGjA3aX3Hafmr",
  "key33": "4Z5Vw8MxVFM6aFShkrBUVUKUtJYcJDhgXAhkeUHhPb7zHKQXhN5cA2Nzj1sq8jRZeNK1rMZqYobEEwn53yCBCDA9",
  "key34": "66VtNf4dPvofQigQNK8wgwebXa2xCcQvNcz7kzDRrB6zqaHRoTsavNBkikdbiux3GEg5qZmfgadftPwFjx9oVXXj",
  "key35": "5fPjmbhPkFKxkduBLhXwJ6WLoYNSTS3YZAT9mFgN3FoqTa7skqYMU7vpBZHTUCMhmbuQMhYpG3iZZQ1uPeQSu6fK",
  "key36": "3etHxFDtZjW3t4HP5KPGfx3K4Y5fqxXYMkw3A7avzvABXVRYhjSRaVdUusNmxRrU4zBk2jU1TkMMy4cayWSXC4Zk",
  "key37": "4jVrsYZJAQ1ZzvaGQyZ9MesKMHdqbCjdRwWV9qm4qaDLeZNGAiLWTYFpbLymtiUKepnjnDmCfEmqV2xyfLDwHikT",
  "key38": "27WKSjDLVGTfCpPqJ8DCgWaaJg8r5vTVbL1LErb27bHsMccA9hGDCxtz9qRLF5MFDwk6SUaxqE3wJuCKyUwaT6ZW",
  "key39": "3tqp3WK4453vBmQXUp6jJhqh9gvN7d6fHLbhaaAETZdfRucbTkxu4hDUxAv4aWcneFRLQCJWH2PZp8ewxUfrb6hX",
  "key40": "3FgahQxnB8bKJsdpJPKNLTu69tJgdxoTbCdbMAb462VLn4vPbnjtbwEUExQ4LqVc8t2CHMYa5LFuf8zGQ2jFKc7q",
  "key41": "4PdWah3nrTFE4PKeoKYFZmwU5T3maPed52KKN4yRBjsDYW8Ra1w1aBCLQGKNrFGTxQ1ccLFt5XkAxEoE2mF78ALn",
  "key42": "57BimrMDmqt1J8jhFayAGc6bPnc7eh9WLFDZsjMkrPnE8EPnRGZ58utHujSQGd1BxhPZ1PUGZgy8EpBegv1xddoE",
  "key43": "2NcvbXWFQkLXssetcJToGFXbA89vVbtXfgrCRnd4rm5GesAA79gSogpWPzwChZD1NfpXyn1UxrmvNKudSgjsGUZY"
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
