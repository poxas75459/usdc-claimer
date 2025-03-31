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
    "c9tC6yE3DcqXVjtD6ggaVPJrouKXaee1Xd67MzayFjqpH5kXMVYzyVwZutH4Sa51sKrJ7vnjXS4N73QcjxngcgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fq4xphRM9ye4xFVFkaKdRW1koNkxhv6kG3xPPamgVrYh18bi6TMuY4eXXqTikDUdXgANMEeXtnok6fkn6qQx37M",
  "key1": "EWPYXMWtddLKAAaogKPuPnTEginGMLHdqvDG31UuCjYAy23sD7keq39T4XMnteSs549xop1uRQdW1ZVN9aQTJ5V",
  "key2": "3vvaF5wiSnQ9JQ62jSXn51CshLq86L1v3xjn4UH8ENGBR7LgchWDPf2kHDvv2fn3L5vYX1rXquaQLPLgT5Shoibb",
  "key3": "2WK6BZsjgJSYWToghneKbGiYUeN3udLFq84mq2ZHopbqcMZdNejYG1UrHZoCqfohCmHB2LA9PpJHP86Sy3M21P2t",
  "key4": "5uQ2kafgg8677KQy1NQcePEzqmiy4sUBwx1gJcZb9ALeyihsVCcWX2EVjSnyKF5FUkQUafaDCvE8ZjXmuw4gA3nx",
  "key5": "4y316BEnfYrQL8vWYAWpbs4LBpJdJm96bdYXGLFxWFryS49CiMf7hSy8Gugx9czGU9E2HnrPMohQcBQx1rZYXSXa",
  "key6": "akhd1vbDmTWsXWjdtYvCr665fHKdXUHGW3Y49hY8RztiQcw6hVrLUgYA8ufpMRFsuFiRh1twtyH3wCvq1Rgz4Gb",
  "key7": "24kBGs17HdBqCbzg5Hu8yJi5WYuufUhPSWK2KqTBrtK69Qptv5oU2EmnzgrsaHr9Wc1hsztzUAaKoKJJo19eF7kQ",
  "key8": "5GWvHcVZjWKG7sHMSzt1zhQAaLUyNWph2YB6xRhYiRh99qs5gx5RfHbmUKUxg1d8RMVCcPHMi67AexsM6gn78tJs",
  "key9": "4kUnNo4sxLAzsHztPrg1UANNesELoMApNc7QSk2UhXZt1LPnuZLaU5R2zph49G7oS9f4QL55tfy6VySYmbV4Rmqq",
  "key10": "3tq5TTLcxuxULNaFufeTRxCXAp8RVB9Bpr3X2sEuqN1Amw5A5VqYfzXEqTBHkLKKivv83KbwXfrQwHU45J4PqURi",
  "key11": "2YEZrF27c8GCQckEFCnWZDZBFGgR5BbngiwVwFn6EfgfdMnGGHvmW3dJE8SP37ASya7LcU7Lr7EZsU1do2GnCEUC",
  "key12": "5PYvzYYuq7XfqXFErrt38odJVzf5G9uvmZoUJZuvsvYGWBdCPszbAE1aBJuyGtjGawZWLjwa7uHnjGgxALZnBMzh",
  "key13": "3obgSmqN5WuUJuUZkNLkRE52K6y2UmhBx9qgafTCV7sU1KFtLgZry9JrxoWBNAJB4k2u7iyuznYUzKErE6t4aHKP",
  "key14": "4eVxaaqxdksprwtA5ygGEf5fbbxaCjUXxJf5vCAPEhjfHi6eccXQTFymVD4JfCTHUXdfY4CjRYXAXkTuzJ9KbLhG",
  "key15": "33TRLpU5rE7RQ3Pm7ubtYKP6RLaDjMjmqBFhsPuC94mpgSs5fgpNyKSvrFYFergL9ArXNBLmobqLqyfYKN8925Ux",
  "key16": "3dZgac6BmsR62N4rt8z5R2kS4iic7fmVvNB9PSQwMt8jhc4YKy8vMNBE6B3uRP9Ci2SWKXEYLSKmZVy4QChhDHiz",
  "key17": "3kgKLMfJX5PJ4p8mAhGSzVwKheuquAW1TqniKa1CRm4Ks4K9YzEpTqTW65uJXFwJFSXdEGigsnQ3NBrrmfiqXMMN",
  "key18": "2v2i3v9iRLQmVPQKKoU4At3Tzq9aWnNBryp91CWRaUdoEi9z47d78N1S6XHNCvGxKSkoCH6oQaB1y57hgwYnD6hM",
  "key19": "2FqwoDGNNJfKaSrdVfYuGU7AYoLuvmw1ctz98kYQdugL4UpfZAB5APNjfTMviyoxBx9K3Spm4CE9hGSREx4nh9aA",
  "key20": "5DsqwdVwCKp5sWnX86BD9KKmx6P2ZLw1MED5QFP4WegBgRKr6Qa1ZJAHVmsmzew7sfsG6gUB9rJS5uxdfaMr6ueX",
  "key21": "2G9G2MwTqVv4agPcZA43tLXogXcvund6ikEudy5ASUSPcGsngiqPVYWCiKU7MGFD3C1s9W9mwA15dZEGD4NKqutn",
  "key22": "53YgBr6y3BwtjfioeUnPkKtcqFc23pFeDbBDuqFf9P6kdczSn1J5PMGvj8VyBPsZCJxTxi1C4mJzrCLNWqSoDZTM",
  "key23": "2NayKnc2cZuKXiag52qbAPKnXowE9gWddoFog6v294Z47mdML4JVGYvPuNJ8Yz4uLMFmDdbj71FKjHMEHyqSZEzr",
  "key24": "2HkN5EdCqHKDnhLg253W4TvuX8SWUomrW9uzSszrdMNJubR7Edq6mguDqGHXvRXgsuaUg1mnj48cpZ2nU9fQjXC2",
  "key25": "4Le4FDLDdDU95Tr7ToNaKD5BWLoNoPgCzaZaWKKm2Px4dV87ipzasPkfqoQXRW8NKwGiag8D6LnuwSVbFoDTxfAS",
  "key26": "2Hpvm7d5kFKREAPqH77awM2hJJkdyJFHyK5xeKmma4sR5KsTh1bemkFoxzjwurDd5ZWonJXzydsoKjjtBF3HeP3r",
  "key27": "2rV3cwPGHm3VdD6WGN4eYQqgm99JidC8g8ecF58ykfzwENk6hBrnphvUu9GJgXEkYHV5uL9iaNUdPjNxrz19Bx6y",
  "key28": "31V9GBAPP7xQGGAgyYogAhin8srcP2EXJnuLc9V9Fd2AgYCZMzV5prW6SQwncBQi2yMGndkmHsPbZ6dnUTPr6t7R",
  "key29": "iBypWdWQLRZM8q6WXD9ji7r8EeU7mQgerGapbLkzPgt8oCv7iGDAoX79YUSqQdGFwyceF2znEvUT1nh5NEPmbWD",
  "key30": "4bq5ncJdsPFQU8n2KRymMPNHcXKxEwuUNZgSvfX2dyuMQMPKrhALK8Thuwk92QXav2w8nQiqojPkrnMGkFNSgRLH",
  "key31": "5NBu5sdDuKZ7aGUr8fKT2LCygP5Y3DgWwXWQtQgXhz3gZLWEaoMDxHwPrjmGwHNLESN34HakMibL8wBAWaFrp37y",
  "key32": "62JNaJ1Nh6Gt29iKPeL1P9W66DbCqzT7hTnKcEy2HHzL9Ux31U9cSpt3uFDEUCDGJJ3VKsdB2Akx5aUr2K6XfriG",
  "key33": "3wP76f7oHuAnSxNKmFgN1NpS4yUFY8Rsa6CJs3W9pPX6pN5KoLZ7HjcLURN8ArjYgtxhVoWZssYv9T5rKwg6Ndhk",
  "key34": "3RW2Mjr6UByTCevxbpc8s3uJ47TVVEVG8v6RVifmQfHTJ71rdhjGZ4ZcW8fkZSDaANzu94e5dCcqBYkFzePxpS3Q",
  "key35": "zkUQQW8qVGaX7JvKDjKotM9akpbkQPgt6ax3u28amw1FPKyZhiuMUksXj66coUtHniur312ZA6BTJxPksEo7jti",
  "key36": "5mAuogBCAY2PJRpnr3HL1RMX7vfcLmzy9nsP4Noc3cU184nVA1Q2UB2wFMpH6XeJ82LKzoRfUSLxmxGmo1RACV7G",
  "key37": "BT8hwu6rjruQMFfU5tyXDxgLmVAypY1KfV3Caqn4WbnLbeww4dn1YfMbP1Jukk6pCAnr1rVVdU9bmpbGBjcq3bv",
  "key38": "3xeLyCULzM6tQBuxLE8WNqrAimQJxeoGqCd6daS388osNzGH95BS3jCfi3PLYKC42U1cvB38rpkWUqNQupbRxwAW",
  "key39": "4hwFCdqm9DPcsbdGQ6heuVaqUBFZKrsatJXtyx9nzFNV7ouWyLagfmW73Ju8QUdyUfWFKuYNLVGdweXUV6q8PNmR"
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
