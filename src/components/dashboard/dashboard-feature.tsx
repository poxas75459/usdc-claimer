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
    "3o6MEam5EAWPLzdiB9EtTgAaHy4gXtfTuM9uAUDj2jE5SJmXGMjVe2KsGxTkFismZh3WEqaqKtHUd5hbVxuXksAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E4NTQTZYUCVHi8deiY9qXNUp8T8nnVFQLQjaGLCxWXzecrRy5rqY36BiWDGGm3fZd8VR1c29fQmhsanKE8LRa5U",
  "key1": "5L3D3LXS7gEkyS74Y1rD6vwREwW2e31YudtJDDxFyTrU6Rn8PV34qaVuRUMYgn5DW3dUK9Qv55WaHnWag3sCNBhv",
  "key2": "26gTi9v3DQsXjU6sWjHJZY9WsKhdQeNgYrLggbtmkgPEUie5W199LL23KoG5qucQ1maV9vj7Agd7WnSmJafvg8uy",
  "key3": "5u7sN18xbmC5VmLib9coQP3dtXVMGreV2nJywAu4zHsmcKEVPN8h3EWgq2wQRtzi3LPvSd8m8UA4ZN3B5edF8Xfo",
  "key4": "gunAvoR8uHqRmwzKPDsDa8bRGbjxDtbmxBQ7L5nxAyxY2MHs6GaYpZ8DZnoxitPuSj8zmFmvBQj5VVPzrBognJf",
  "key5": "CLHuyvxwS3MPWFD9hd3LSoHocmkdUqshUHczf9aYaVExMZNmz2Lyd8GFtpyb3DbMdcNCHL8CYALehr6ELi1kCtF",
  "key6": "32odktp1WjNyCmnJDkZ9xoGJA2XK9Cqzwr4xgKznsjLbdkfYEohDBpmKDw56erxDEcgRRaPdyWRKjn8i4zCgg7HA",
  "key7": "3m37fxEujAyp24RZG1EMY1vAgsYC1PXxSvNpx57W2etmaVsDyPERn6c7CiPPWmg1RheA3YwRc5v9keKBzaJCoYDP",
  "key8": "3j6t5EY3xrhu5L5JadQ7LHt3EWe6cnkpvABEtQ4HQNxyCBq39hkJPWRvQkA2JcEERtv6Fz8m5MJG3aH7UZrtDHLe",
  "key9": "35QhEG8jByjm6J6ALbFwj9rLuho6wxxuTGHWdXfYeQzqvCjAJRh1ikVcjNF36aHZzZjZhjbv1MEfyWMUpG9eGKM7",
  "key10": "4i8D6sM2tvLxYM1oSowxSwehYiiFAqsZwHMBLxrTwhAJ9sdu9H7XQQrMfCaKh145sJrrmUBXzT6MxGA3dQqrtLZP",
  "key11": "5dAsvmQLyoYQD4Dn7zBiXXb97wa9hrdZTQS6uSbztXw5ax75ZgYztXVW8VpXwfdQnB2tbx6noQGTGGWFf7ex7QBU",
  "key12": "2n2m9tvE1QhAEfFr4TzkE3YED4YjXFvERJphdFb89r4R9Q4e7ESqYGvbs8F791oLyNJ8o5ZhGYAPFERae4GXsTHn",
  "key13": "4XtQ8SX9d18TaamcN8bsthLCThpUGts6QWYWZ2scHc9MqH8xTq63AYR3mUPCu8jjERAEjAqLBrayZJvT6sFUTHUC",
  "key14": "29NCxjHSe5DfKA88y6LMgUZCgKvJ7J3dLDabzZWmG9gQ5aWpwCPh1939NFSztvdthPfDGb5Kq8EvVeKWwFoEEySR",
  "key15": "3fv8dZuqe169JRfBaNo9DUh3VMsTTAvHvsD9vJwtDXmyiMyGu3RXwpiuv627DkvamszvzKnySTz9wNA8nnZosTdj",
  "key16": "kyGeWKjB5zK6jjSWm9Fi94rqsbkZrJFg5McLAAJbGTuLPMEKn2dJyyYCPMXRWvpB7Lq9FMvhAMgfwCAmnx2HMjn",
  "key17": "2tdy5v3Gs4PGni579u1RyFkuQhKgYMigSjjWTtjaaJyBreX4bCHKherHVrjBPy7pnZKC32nK4fZQGhWb6zmJLP5B",
  "key18": "4Fr3pJU8eV8tSndFfYNgrZpQttg5FK9CqrS9ACUxAjJL3mkvtCxxS2iUrA64T8f32iQXeKJTePbCQvQwKNuGMzBs",
  "key19": "7guu3UbMvjmnPxLX3vrbhXcPj7VqYodx8AmciokWJmR4sEp7o39cPS4tjbyJbqL17Z1kAFF8aTym3HwsZTgbLCT",
  "key20": "52DecxMa49KX6N7hbAbaEBBEqfKWubNoCGsXQ8iJ8VadWAhAZzS67mrWL7vpqbMh3W2eGFbJ25EFd6MYZFUUa5t8",
  "key21": "5sMY6S1dQGFkhXhPmkMDdpE8dMdeUh7WZw8NZZb9eDTubq6p7mng7U9mQKNKVk1mAoT2KvbTyYyw3tDubma6Xkmc",
  "key22": "3zyrNFNZGchdWtD7PBYAG3pH3Z1Bx6FugwJfryXytSbr9jSP6QGeTuzaQozksEEtNZa8jiyuTmEf9osgPYEj8tqe",
  "key23": "4gTkdfjvJHk8HPh9LBwX1dZvPAzAdNUsp6mZZrj3iPwtFJbp95hPXhBrAZhhmDf5FMvxJjbcN5PRdbx7oNPBCNqn",
  "key24": "2Cvt1Sf7QZ12wZottDfS9ti2Ww3HF4MBYHUCDjFVZEM2XHcEYyeDT9KjSRWTARRTw8w29U4h8sqUWbttVJLywb1M",
  "key25": "ULP4M5XkrY1yApEtcEVcs3xJpsTjVCkDu1FMroYun8TyL7FkdmkXeADDtCrM2rWbB3DBq8JZeDXcjC6zuvnhmvF",
  "key26": "5gZcWNMj94et8o8GnkkKPE6uQyeTHZvF1AbvhrkLT9rz7VngFgryUASTnPDqd3qQY4KaEVVreenBxY9RDKXGYVBG",
  "key27": "2XnJkrFhh17r3XwoxHzXphfqixe3ipHqrxmsbxQnas24cYUJTZVi1q82ks89SYL5AebiR8NWV5tG5EXuuopFe2f4",
  "key28": "4TjdWfr7n5prjH3e4RK7vuCknTY8NyXwS4ZCUQNrUTgMJxAguBx9KHTyd1YsKA8uNtGWVQbhCXEGRYDx5wS6cxub",
  "key29": "3qGKXNDtnHfzAonNVjgtvQm8bLxbJxa3UmKeeqUCwMJNkEuQRHEuGwydq24FYf8gvcMJyFwrjfbZM4k1zR4BFKBi",
  "key30": "3Nx3DM4y77bPHV3QkFCA1VkJ9auGDo7davJEzYS9CtKpDxYKKZ9FQSdH3bRahRht1X1iyDNbrV9a8un6NFwXBVMW",
  "key31": "P8xE2djsmsYj9oWKX91akt5XxWn5wY5ptNefz1rUWirJP7nSPDYh3d1m79nr1g3VimTCE1ZySJXjpQXbQX8nS3P",
  "key32": "3tqkN4XzjLTvKNduaWpVxGyRjdah3fkBss3ZuVKWomVEY1wLmomTehZ5iuTWJis31L3EqKtbk7JWfFsjZJS54t5T",
  "key33": "23VA3VaRv8sM7X79pqHsJMpcVn8Lr88367Z8BaveAU9x9kaiEtfBd8SvNFLiorgwK2zeDxUTsSgamFfdowm9xMiG",
  "key34": "2qhj7y3BEcbEAsxM6EpEWSYS6yykDWdor3mNXJqWJG4y4PA9wNmb3TQqv6qUixAVNaGnrBr759qHbjAspVqz8aPH",
  "key35": "2z3G4kTSMkrH8F8eAErpMu6Y2aJRZqihEKUZyMBGK6rxTBhQg4goYXwJAgTgzcD1WbKQaMDRLcAmZTaTzjybK8mp",
  "key36": "39h6hhnfXZ5w8vZjcFNL4EpSf7AnPgAWNCqpig2j7nVZ3G9vAH2JWPoZf3EikhQEpWFoArq41qt9U28y5KHGPXRk",
  "key37": "2EMdX2V6vnW4QaaWqa7wRg7LJ3pk3c1cwgmpJEPvL7rmbLJPxEsrQiJCf9i5Nt27g9qpNkP6uzpBfjKsYzV7GGiw",
  "key38": "2A1bTRWGbUdtq1JP15yAb9yyTp9n9PUaet9SqcdBbsGkU2PGaMJpYJdYazHeHwAhRCKZi7TLnxtbe8PPnu3uwAsw",
  "key39": "fZiKYrC9kLmafRua3jRgAXDuAvPPdkTqcHPQAt8fpFeciBo3NEHtQviQHku5iGsX9xEAxk4f9XLyiY6hEDnwnZ6",
  "key40": "2R9jhkNFoLQnfq9xQykq33k3wYuPpAFbNCbPSYQ6ZwTQYt6oMmBBWXr8Kx83uDPVxcXTbB4WyJVFvLyGnniZ7caW",
  "key41": "4QrQupnsBQVXGFLMV1YdRRxRgd8AvGMThVVLikq47GvuuispUqxCwz8UExcv9qtcjGPKRGdZMYapPWXptc2KUUqA",
  "key42": "3KVjcMUZK3yJFpwbWiS6nfc6tmnefAhn4jJ6Hyy6cwVuokEwFjXyBGgRT78xLk2txRD5oytgSNDGyC3ZpTxyvbup",
  "key43": "4HVdfbnsWd9ECizfY8eDj5x6xu3aR46Tsk4AoipZ5A2esdjkdhHx5gH8ikFaR6nREkqpPEmeYNi3q5293oQjUHaq",
  "key44": "4ctA6TaRKXpyab1JZB3jqM21PYkfoGsC9DiMNtJ8FMKmZgQzdCGQEsankynKHkVTzLQu2Gz1R79hZc2RbpHeUhrm",
  "key45": "4gvQurqGgk83omMfmkuQAvBwrEJhmSj284MQiJM8Vu9rfXTekPNtdBQVKux8avhbc6vCVpA2g18tLCyiSU86Nc5b",
  "key46": "5KxpygwuoLsxcsuvnDEAKtgZvq7FcHkchxdPpgAJ9dACGrNU8nhqbajcWnjMoWfucfixRgjSm12AdeWnEBgwdBc",
  "key47": "5YJJNfbCj6EEHNyeRpJcW3ejEiqgJpUaZ1gqF3z4UUTynijkx1kxwHgXoxSZ58qLkruF9MXjKvu4r97kmXzNgNzd"
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
