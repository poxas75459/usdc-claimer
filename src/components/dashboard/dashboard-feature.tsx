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
    "VLW9PkjHGycZybvutMCCif578Uq3S5b6f8MCtEHF5w4zfkeXHCVCcNNChqjnQxgH2aMLATuDFbmPm8G4fvSdXf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xd8wvS53ohNDjwppysjUehRHqEVEzEsewvHUqTYaMzaz9AcgYzSRHmQYVczFJJ7yfkGJmdsxp5S1bp6n4bF7GVq",
  "key1": "3bdjGdV3UR6YzHEoGZXhR2bG3VxN1d7Fq9EfQdvhkeX8f2JBRmwY2QqzD46xNjsP9ABmnufcL9xmxPb7BCd52jvz",
  "key2": "JTewyRBvpHa8mywcqTPRCUqaKEaHPEZ7etM2SJJuCFhEm1JkHigEaaZ8kgc4vi4KssqFJvNQLKrdJwjkyvxs7Qr",
  "key3": "3qiTfaaT8hCvBMqKmZAmHdHTC3ScvaMMKXH3MyRBH3ocn2kKNqk4nxnTqjJnNJxv1wx5YJjzu8ZzZmpX8pzG1uZA",
  "key4": "62iTM8Dy7SbRUtX6TwfXj7Ja8X9WyZARabmnXTXvuXgMkxGHPHMC4m27qLFkUvhd9PivktGogPkiRMaAWGDUYucs",
  "key5": "4wV1Cf4Ep2THjiBKSVXeJEJ354KZZg47VirR27fPXzYV663xJ8bKyVmFpwX9xakWn7xZeZmjMAquyUMxU3ZwZj7g",
  "key6": "2BTnq4WEcC4UqTjf3rLEYNVND6oW8NTkjdYWUPyuydKtj4ow8RbFMUD4212oNBky77mZtbhNr5fYXrzXwHDfZgKC",
  "key7": "GzjrfaLCUcnohgBHXjBd47ncxsbR9H2DLFtgP62mmQnrNhxAo5BPNAtYAw2QASDy9rVvSL6T1ut4DhSVTQkGUbQ",
  "key8": "2pmxFbrhpsuujYmvxX3MLMCagD8LYp5TS6h9jvBdxrXKqJ81Q3eaSX2z95giPkK2gj5utprTXn8YaT4Dp6pmdg9U",
  "key9": "UWtbsqU7HpGEYrZdz46AWMRWF8jXvs6u9Uu3JsQbEu1ysK4jeU8zdPERXyo6WnCsACCFEzzMQHCHp9ksat7iLPF",
  "key10": "4ePuavsRUHjrC6sTrY6MkUdoF2TRchKXqkaoV5ccPHNQzqX86GKanJvBMRbyNk6xGefAvKoMyWWatUDE3c4awDUm",
  "key11": "c6u6jgxJWt3RNWyVnS9JGYMwW1dJL8ATgghDiVnzeijRADqtKKEmfvKCUQvikhKa4ftNvqs3oW7BhMc8GW9UYcV",
  "key12": "2Hu8bQETQCgoVzVNUmMbLRAyWktbLcx4TC6W26XDYa9DeqVBBiPUSukpQktmF49Udz6af1K7XtuR9o8kJPFSTh2o",
  "key13": "2RDA1bBmL5yChK4o7MsrzprQFJuPTBnzBa8oJVezEPLLYN4cdJwmWnmq9tyZgAtnWrmTSQRMWAQmpgdQ2z2EpCMS",
  "key14": "4pvD23hNwnBZxisY6jk7gf2v6z5TworwYzy2hbbKKSNk8hcyBcu4JxjJ4WnGDtMMDLfRHwvfBev1U1cUjdZT3dim",
  "key15": "21Gq8Z49Ky6tg8kiCWCuiodY59TYiWLTt19xpMMeGeCg8EoGzT36J6oc5reHdj4BTy7pzeeisa7VurfhZAYYTqkm",
  "key16": "2LGPgjdemmQeiMEcwftCHfiktVYuXMXBud5wWBcanqrb3agVNsjrWWmnqkxhYiMZNhoX4BhAKrH2ohsmwVbbq1Zk",
  "key17": "5cTk1BXZAN9xndKKwvRwpekfntjbuAHj93dX4qJCLUZbRHD6DYBTkdQWgUdKaSqxJ4h6kWaEZ6AkaNN7HhN7WPyD",
  "key18": "5i4i5nQVq5nacxAL8FyFhYJ7CGbpQ8Bh942FqP6z7zEne1ziKtaXSDFGneQJoJ64DoQ7iLTKMrvYjVW7UgLnL69V",
  "key19": "41sVyECRDLQXAyQk3VYu613EpMPbReYuxVaYMX8k5ShKrrCrjqnq447vtrED9cjJ9pbYZQwjLWWCuGdkXie5iNH3",
  "key20": "3gza1QzY8BxCuZdgbQwdMChMgNbcsyQCRMpmDUBrbsFUXXcD9vaYPKsbVZ8U4rNZHocd1D8kJbRAia5SerDG6AQx",
  "key21": "npgaoHiQcG8DwohzLr555dJGqAzThgXKdXnBXsPqdZhpoZhA8jzfsW237uEbBYqf4s4Xkhdn5wDY82XE72cMAbv",
  "key22": "yJJwJS6JdUfEfrcPtzEUJZRFweVJycePLeSkZAaUj3y9e9ZKVkGSz13MbuaYRpxAq2jhF6ZR4vFQ9JTaXiMYVa4",
  "key23": "hceeEzeMy1X43xin4ACoL7opz3pcZZHCzn6WZwrgLCJ7UmoVs3pbr9zNWBbp42UCxGZ9rLQtcd1f6TWriPnft9k",
  "key24": "4sPZ1WWVAKXEE8kZmVtGkN6jnLZqfLUn8PpGH84PHQ1JpfvPe8NgbxEiX1bdzHj2cgLCWpYv1xqMEopC4T4Q3MfG",
  "key25": "3gBCvEcrWGyJcnp3f3SvAvkDfbuv5dLDyRduqtzPQpFYZxazAm4hw79gQhn1CavStfddZCJVfdEHxsxQ9QWwc4Y2",
  "key26": "5EnYLCpMYUS2hni4owJEcwaDwXLDu6Sjyi6R6bPM9d9bzTkhGG7zDNk3QWhHpLfMx2vgS4KPywdupX3pM5wkRS6Y",
  "key27": "4tjtoyWfVoskwkSHT7xUjnCANbbmzZTSpC9UjWyW4Q2p3y8BJGDu3qKxHpiG2iwRPwq5tC4koBSAR4uq3WxhJiXB",
  "key28": "26jEkHJcTeD2H7y3pBuadMiV2whtLsHqRVYhk1NDa5o1JpK9kcLs3P4nB6ofaHFivaR8AT87BhcSA6FYMvvhD4NL",
  "key29": "5dAUSYiqBAFEorNFJfkqFcLeCz2Lu19yCwD28mKofW73R5AudGCJye6Cn3Re57uC2kk67Na4JCXEeCtkfwFu1ESX",
  "key30": "4Yww2BkQXFj1EukzVjfN5zU6JZ8t4FX49KxVh2m4QimpAavFTFxUunCuZUoNmPdJJozaWheQfVHb3uEABUtbezLe",
  "key31": "54W2byyZZg1qyUo4f6FAibWhbxG59HzMf1z5scvc6XVeKiwteEqe2Q7Zyv28936gSofCX8uBVmrEHc7t3KvNqsV9",
  "key32": "597CDywFa8xPkKXfANZED2Vjo9kPx9vA42A5E3gXeAWYAw3StVpv1xkGQUES4KTZ7rAqmiZDBuUnKcBsxakFDkhp"
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
