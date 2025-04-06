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
    "5xHAQ4WvNXPRrmcKWZHGBdXQwp3yLWobJHpjQmdU6TfxivtdFEmGxMZp28vQRCasXoqzXkDrXuAwNSFJ6xiCcdwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zehCRjnxqFs8rzH5dNZX2RmWd5zs5hRb6fpuRyumXnKn5Euut495AzmZQiUAGNs9ozA1x9t5B8kkZhw6TjnVJjD",
  "key1": "YFHJ2MSN17ETtG2XzScvksDb39yn9YSVAGhmduVxEGaRFLsvJEYFJ6s9MPHStEdWopUZVyLuvc1HsdFSjjLimWR",
  "key2": "5rwCx558G9ekrUprxGRupM3MEP78Sizqipg9gaNiky7HmqPvFtcnjzrPWzdi253q2UNKvuG1iR3F5QAY6Ef87rwZ",
  "key3": "25stpk8rYEucdtckzLPf1x26aP64NsghiRXXRkdYEWGjSwy1LPxH8Gm8BLwFFtwPbsapLVHtHKWqhrTDUarfGaiU",
  "key4": "2tazj5PCVJiNiq1aks9qbi4ES1BwBGdHKAJnQ42LP58nspBcgz59M57tsAib11NKh6szSSpDpDYDLfPUU6mNxUKi",
  "key5": "34ehXBrcWisLDRQDU8go2NBXrg4ynCMq5h3JaMSvAJKhMW9jfFqUcUsHny7eSE1h5PSRYPYaoy1YTV9dXz3gqbyL",
  "key6": "2ko4vQBb61C8u5CbxQLNWkA5HRRQssShf5rLsvFFpNssfrYXFw6jHYmpDmB65ahdBQqt3DDmTPhSGrPB5xy2vQ39",
  "key7": "3kqBjngFQjEe5Upc7kptSiBoDyBrceNrbAfFjNRBNuUMHRUf2xb1UTbLEAbn3VCeoXPyuurfueVM3ab1avyt1VS2",
  "key8": "kookXitRqPPPRaK7UmA7KwXj46mAZd6TMUyWpL6DCyqH7zkNXXzDo81f5AJWENvKB4uf5pjCs5A1mWkyMnaCK5Z",
  "key9": "Bvj35Rkr9tmp8889Jq29wbQNbz6DZKQtkyKzigHLfFsPTFdr5PytDzDUBd5VtbazSVvr6E27UYsMCSkzojAjThw",
  "key10": "m7uMRHYq9zk3ZewGWitdHvR3nmWmq8V4xKWXX56rTCLqVJtRVzvF7MCMtNi2UyCW6Bg8mruDaJT3ryVSby2wMdA",
  "key11": "2CgvSW4Uy1FXSHZj95ydEk76UQpFMG3x3PfsYLKMWwpnfVKrE96xdPAFbE21kme5mTJCX99WvQWSKfQ58qAbTyuS",
  "key12": "3igwmxPifxeVyAeXT2myDJsZbUNKHLwZyiXQUjPUjNaAcJJ2NMVuWMKb11G8ntQPbEnRx4zhVKvxAeDKrKdZSdV5",
  "key13": "9MoMkamWizFd3M5bEvYdUi81rnxAK3uYnxMmv9gsQdkMzaGeFzH3dF4vaxPx5tvxxHJhsBYzTbqUHTNsJ4utqoW",
  "key14": "5pKGyS5qW47gvwbaHJbJg9i8NTNRaMZJwdodbgqkMjBM5qTgTvX8MW9T4DYkvKhNSuE7mH2kQweroZtWz8usXTK2",
  "key15": "5q11skYzUbbNbZs3zUiLwTZP3WHCiDm4HSGiLoJk2SquNLRw4JTtoKkGsPw5YtpS9zrt8Fx6NZVL8AuyEwtju1ai",
  "key16": "AamrcmRH1uhnMsVj3dbvYVM7Loeuqj7psJb8fQLrS1RbpPAJJ5aMG3965zpu88iFr72orFUEQpkrTcRAqknXhxP",
  "key17": "3tiRS7yJkD24cstooqs4ao21Z3bbfBffN8Mvn2iMkHndcxe9ekkuDkvQYNoNfWWPUvNdeQAZjhTnYzcrYzgfFGXe",
  "key18": "TC7fnvXvrjjFoqzT87tkn5cqphEd8RspzeCwuCGdqCTvyod1gcX2hezzNdJwqnzQs51be6hfyE6kkcB1XU5vM85",
  "key19": "2TRHuFj66w1JFXp413zZWPLKdJzVKEkdgqS8UVBqrGTNJHg5XuV3d4KtPm3nFC2wUXSs5xM4D3DHGCVfDP1yuSfG",
  "key20": "2qLrxAuhJHeL7MournVQxryPV3PSNjXYhkwWSMXiMmK2iXmPsS6GhAPAj6NM37dSGyAFaSXus5XLjqNTptLnK13T",
  "key21": "2MgQxKoCzPrV9vzjoYCVCdjuDQnYYaf92kkuo8CXhxDudsM4KzkC7QAWHFzPzwdb4WrJ4pfkZWdtxLS11jZRysfL",
  "key22": "BvhDghfgyB8rWV9vNyfpfhZSy1fLAzi84RUXBrQWHjsaZJUQ2BzADvrYvxpQEhVnSPt4JZ8TnocSJMjuUtJ6g8J",
  "key23": "4YTNDnLtAw4WAdzL1yr5dLZj8gpLCTDYZurGP6gTjpt7VBn6pw8hKATWfgMmEhRzgL2NXuMPLdC9vkBJbR8BQLPE",
  "key24": "5y7pH18jiE2LsZ13wNQ1hJYSswvHoyDhAqeeTTmCG6FnbwntmaeP3Ydsfw2FF3TWPuV8H8fDFgd4KDsv929KiQTQ",
  "key25": "2PHCcYWriCLEUjCdrAE38ALH61jwSSbe81JxvP1rz5bysLNLVd2R39i4oKDpdJZQjgvjaRipXgiJHoqLuNXE3Mw4",
  "key26": "2i5mEiuf5VahMtDUposmK88AjR3qezQyWtvaL4ZxohEsDtZqSBNNoLoNJT7t9GBtCutnANQSmK7d949a2DBY5BMH",
  "key27": "2iUZXQE1s8yMTLBsuBJ8aFJ7yhUN9vjD93qVBCwEmrD7aGthR77KKh9q1rrC4T14ry7zEcnCEW9CZ4fv6KFbFFX3",
  "key28": "5HXHymbpgFQZQc927xmEkoCu22pDtyCoZW1SNzJkJk5bQmkxxgfcvTxWSdX6YgiUbiWvbWnoxuHaQodju1esUZCk",
  "key29": "53sKmHqZtJB9Z4HRFtLYCWHYNGn84psuznfws6q4doCN8MDRn9ZMW3RRkSNSwetXgpVUm54KEZz3MmrdFqNhmwDk",
  "key30": "5DE9ifqEU3NdppvnRQCTYP7jvoM9gDJ6AQcCWSjtFRn5MqRbRZxRo2NCC9JFTirrD3j2c5qnWzMNPoEKePXCBwzT",
  "key31": "3t28EUDQkNr8LkUBLeUVVfw1qBxtAy8cQkreHdAZEVCkhZWbeuYoexWBY5TQwZ5nzfpyTcKPjdpDq8hBXjCVxX6v"
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
