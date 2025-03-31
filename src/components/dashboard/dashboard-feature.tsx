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
    "FaXx1XbR3u7A1bh7p5JDoeGccJPobHfUexxuJqiEbzMsAethWDzbBof1eV53C3hnn1whWTUimcSxrry9ffxaZoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jfiKwJuSuxuga8ndzxTunEMHZ49LHr7mPuEm4rkto5Y5ZPkbbaK1S62xmYSpeN86yaUYw5ah8GaFdcaX7oVXhHa",
  "key1": "3P9j3JTnzyi6tZqLG2ms56NbwHPgzut1FBqwJEB6tjoXeXhvUYM7DhqeQUtndhMwtva8BJLtqvTHdHsuiWvyb6Zn",
  "key2": "32v7qxm42FQSGfuNbULRKRrXTRcVoBfjjDo51FU991n9YZMae6pMew1vtrNxhLkxmjPbvpg5UuWxTUSc2fPNcyhc",
  "key3": "4tXpDBoXgBopaXaHLSXstsCqqp2XkfEntQ33XSZ6Z6c1SvGbLGWxv1zxfB6WdP1VccHoR6M7CX6DND7FG1HDUmu9",
  "key4": "3UL5devcukvdNtFV9u3nJVZmWkuFYZnSUX2WaN8hAtKPzgTNA1hJotw6ScKLHTS7JZbeuv2fczSjhCC9wCGqmRwj",
  "key5": "5i9QaTNxfbapBzaW2Quynhkk19Y4DRBijjuFvW6ek8DmLAAQJ9zHeYtiVxZk6dm3zoV6ai62bkWi86EKEAbdZc8m",
  "key6": "ty1aYnwhHVqAJSLtUyc5yj9rPoqrKxcLZmmCaDEHhRw7dMGmaEhBiU9WHgq274oVxoaZR3dGFcQfWrvKqdS2qMx",
  "key7": "5zpDt3rNAwZKEMVXACryoHBRKh14pPShnG1HJmbX3PUMEEekM3VGqAMnrXNiT3u8psGGw7PGZnCsrGF6zFLDQUdR",
  "key8": "4zgZPZkArYx9GKaXcDLZ2pQsYBQJaxBjqzUfbeJ4gnSufuHcrYYTh3MVctudSwpSYLvsDEjQAam93hE8BUnhLAN2",
  "key9": "5DMftpEb3RxPV51eyH2LH8LoCD1mZt4tydfJFUF4MSVmWwAEfTEhXgkFnTSjuN5jcvFWYApijeyguKWvgkVPR3Bp",
  "key10": "4TVFc8CVghrQPCTLrgTY8tXSPVposhGtqJfbuKUwE5BgbZiFbELjq1LTYtAH6e3cgS7cruNZk98gDmg8QvGkv5Mq",
  "key11": "5qW97qpTTrtBY991PuLXoSHTEuPJKujNaQTdKRZbmDccvxH8ZuiZVqfJZwpsvGB9HiksUx7Zwuf7suxBYdy79LWB",
  "key12": "2omNJfyvocNLibSPaQ3KC8WDjz45SBdadWpRUoHvGLsKFNP7bpfd3pCdikuTP7dYynmHhn1CAozqzssM37KG4Urm",
  "key13": "4xRmNamAipMnW7GgoG7eHfqDY5kLFNXEv7tPFtGKFa2uhuRvtDPCws9Ym8XwtZ1PPaZFN5oJHEzM4YV5WShpXxo",
  "key14": "3iR8rFfubixG1Ex8G19zBheUhxT3gLHq4mFJakWj3sMKbwKbqmKp3to6FFBER7esdMvoHNkRZc3LPPFhF75gy76t",
  "key15": "3JmVLHXxhi9YK4JS34VGQnNwYUDqQ8oX4Saqqkho4TeQbswGToDd7c8vJuE15DN1dFgirSZgwDmvjGpuw61BAFXM",
  "key16": "3FsfKnzsmseZcbUPag5LXJ2pdfaCvDEQxKr7v6NB8Ub3Gr6fPVZDgmgzgAcbcR65KghjspKfno37qnHMdMWL1XVg",
  "key17": "5iHPTbkGQE9Cr5jnpdmFK9oB2R8iYUDgQF9vd34FV2wW54wQU8ynnxvU3KM3EB4YLYKJu74tt6HpBp2pmmLNif1Z",
  "key18": "2JdRHL6hwcYJSEH4jRQcrFyBtR3sVBqYcS9pyvxYJmLN3J1arWkVdheFLHxNy1jY1Fjaee45JcAEYc44QYKFzwMJ",
  "key19": "3Qkk36ng4ty91W6A76HGDZMrFHSxCfS16YAJEkzTevDjZmL8iiyrBx7xBRmFz5Bs4rgo6UUnXmS1SYRoR2jZAbU7",
  "key20": "2kTjjZDTBWQM4aTcpBiNnWo4omTuKAQs97y1DQXg3FiG5UmXaU8YRziiHiw9YBwpCVtQgNdphmYyzxWD1yRkzSBN",
  "key21": "R1VcB9DosUs4Q5kiuhBkD1sYT2LFbwc2uZbuJtb7bhTHJoU51FJ6HEJphwLMPcRhQ6LyPpf7Q9Vi7zroqbSm9Yt",
  "key22": "5QMQE7THtKArrDVpevJQK5LrQhYUGJS6ArYRqMYVhtdY48R4rToB56KENq9TEEJwDrGf5BTkVehQApFvEZMJw1kA",
  "key23": "56i7keD3SdtJPPwHYCXJWbNDyKbtLG5jADKb9HfuiLgFzEec9duhiV1SfPHGnrp25f5rcB15EWmVHBYVTgz3eUSJ",
  "key24": "24VKKpfe2qfiu7UD2vmWGM76VB6Q89TbL6QAAxdXZtRj6ZJcPP5Mjs5D1FpQMBM5wjzuWb4m15RQb4Yv9Awf1BZ3",
  "key25": "5eBCo12hYsPDpmDN3AT6TzMCnWCc7FnrzquMhK61y4UUtw3BJ99V4zz58RzX39H7p1Nqf8mGmHDQtXtDaUxTRqGm",
  "key26": "kaZEmji9yndLzzHUR6vBHcntBxhKWbV4snPdZbdJM7ymDDKFU97G6GnjDX3fRBPdH6uyx3umD8SNMRu2pwL77ru",
  "key27": "WS3TNBzN2XVjhAh7aj969KYR6PPLefxim4M8aiVCLwnyQpW2cjpDcPfnxeakVGwa8XSKZABFmgwnqgbANfEzKK8",
  "key28": "2LrHviwejN1hnzYw7LapYYULdDVY1GseTgVDs3ju8rU2TX6oZeX39YyCkCcbfEHYhKRxVKUgqKAzqPGNDEsQxmpc",
  "key29": "4gjr7hyeT3WR495UZjUvF2cG4EFqZbWmnq6uPqcjk7F3HVC63HVmovHtJ7urWhE3WHgsa8EJuWu4u4dx3iwqYqs4",
  "key30": "5BWkqi24HUejrgWG72H1zW7m1EULfr5fvV546NYCz2mbhYRXKBGa3hGd5f3d9TLPucWLyovfxcp5894xbGkLZcMT"
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
