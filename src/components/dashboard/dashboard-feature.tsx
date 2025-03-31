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
    "2qinpgFdxNvaPezJvMHk9Lgr8cW7PFMuBFsrHHBH8ovJhAXRYCN4P1PhfdShcpNrjQDqh5EFHnaV4G9kDqabYaYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPLqtsnGHykzrQ2bBzFSSUZMD8DYh8swTpUkXwWzgYVJsPXy5fZUb3u144PvvpuJ192nfiTtJUAHuAxxg136XJR",
  "key1": "3ofs359PAc4hm6BZtt6Cqvp7k6VeA5cCj291BWfd4rFuUvAVPr7eeyYJT8uoSrb3ShpHPkU9KbrCQjjCXdQNJHAE",
  "key2": "419qyNBpFiSRvWrUJTtvhSgg3CqjX6wdWKNSYH3spp6cnGppEXgHu3owwK7M9wAWFPuKyTZDkGfya4P16PXisHuE",
  "key3": "2QsSnc3FYm9fiHyLPWzGAZx5u4LqCynvacKhDZk5fpotnbajynpYJFjuAWqMitxpFWytqPhS2XRgKb577ASihbc2",
  "key4": "5HXAXUwiz3SpypA6dRdSAg4D3HZ2wdcPTgfepyQixSiXupK6BMX7g2ScYieVtA8EMmP3Ge7C91JJo8mSwHa5KhFr",
  "key5": "3fEkg2cLBUkryShM8C2UjDfKkMr4hizS4gAJ2wfMApUGUsYjKLiz4na3pEV8hqzu2zZJeoQQ3Mj6wNyY3CFsCtMz",
  "key6": "2SrZt4yHWSKkf3auUa7Aoo7rsXHtKgkaewAY3jyRnvJzhRf2FhTKeYcdVGXQjRyzVabCkQJhHC2rsGvEnS11yU1W",
  "key7": "5hjqqwoDM8L7A2UxLBfZwmTkcvE5NBJ6PDRr9qA6ZfJYyXhw75454yMMb4jCGHAjVgmgnz7Dnga1X9TUe8BxYKm2",
  "key8": "8feLVZzMPXfoT5yQcESEeBE9ezjGyYCtt88pNuughq29od7mcriceh6eBhdMtE9NTibD6qG9qV3fdVWdj28oBUD",
  "key9": "4B6ssu4coyJkA6iid2KNWPZAUJ6WuCqbDVcQrGfpmBRF72asDUVUnca2zjQfWcs17Hix5QzPT54kJj4ujVUGmQbP",
  "key10": "4NKsBuV6uENuJYMXsiEyidBivQbBs2g3aJvPJDsLiprYJEFXHkUgVUykeBxibgdiAcboREHRdTkjDQ2GYmeexxbq",
  "key11": "mUUSTenXznkAbQ3ooeKYz375U6Ggkemaw5fmTB3qsuBsPxtPkAqtVBpus6Xn7FJfXKkPCe3NXTZT26QyVdSsVvA",
  "key12": "wq2qYEjTjApnGyCamCmhhTjarJnB3uAu4fhuA7GDuqsU6vhDqZMDzYtMoDRLZVSch4eRrret6W8P4PS7H1RAq3d",
  "key13": "R464ZPFSMeJZwkKGSvY1j4kZ9ymQLrp3CcjMRhK2kEi8iNwAs1eHpPDzvTNL8hZktYo8hykELZFYkBAHmPh4qJz",
  "key14": "58YLbGsdmZPbUFHNeDqpa7bGCzn93vCUj77c7K2jYUsA4nUVuSV5NwxAATf5nYFHdT8aWUZW7TuAHvCEmQsqnnEf",
  "key15": "2ejNZsyLyXruUUHVSdxjFZHzy4c1Hv8x4Yu6svwwvC9eVhJFSfgLofGU2scx7i9RnoPaGVr4WiWamfKjpyjJQxZ2",
  "key16": "4kYE3ojofw5NiURd4nYHhHz63UjvSrAxRMYVDAuMy1QpMvhW21EzpeLfuhwdmuskV7dyZDE3Az5WD1rtFGAMzvJ1",
  "key17": "3SQKxv4HQ5wC8HfygGEW6sDu6wvqLNDxSQuA6pBmnG3Ep8MHzxZRXUYH1984ne6GGPSNSmAxKBewxzHnG8c8QEAb",
  "key18": "Uf6yrTgKMFdkDH6BKrTFmwMSa6SNcRAP1x2hHQzb8WZiUs39JZRBdMkhGpBeQ2hrGrgrf8geyvmNJ9PFrCXZgnk",
  "key19": "56kSN5h2fmGwm1EUhnxdHbp1M4VL6KWUxYiVgM5RjN9uVqod6XiqZ9bgaoLWQyKBP6rCr5bnN6fctfm7FPHHh1je",
  "key20": "35HjoV5scwZWqhF11aVy84Yi9uVdXgpE9auni8ZUudqo25DYzQ9VmU9A1xfUsMAMU1CRuLdHNhwTUuQfPYsXTzjW",
  "key21": "51hjiMrhMfm5jAjyt65gv9EvvBq7J6siLgniUudhSw32ngVFxBzFWdCaPc1dLT7GurDa8DB3CfwubbP4K66ajvH8",
  "key22": "5EvrhfpURMSe17hA5UfvqKwCA2SSczu8yN3L2uYD5tcYsX731wzQBaVk3VCGBebU5f1m4GfDWD2riGFx9jkGZeP3",
  "key23": "2JAfDm34MNbg3ywk1GGnmy1pAdS6xBgw8nj6XGxEys9JiHUy4vf8dKCvvScUgppY5wxkQH8cotuXJt4MVMFbshgL",
  "key24": "B8rscWn56wg5m6kwhXb8RhP2cHmPhCQN6YgKadfj5ALNJasz6YgwFdsULfvLpLi6XAn8q1X2bFtBgh8pkE4YtDq",
  "key25": "5tK8pk5SKZhsosepteujdLkX4UKMwWDEB3JanmGjpb368P4ZuEGneS4CQPBRheL6itEmUUVxNgo83r3Wvo7kguXs",
  "key26": "4egGrNkBaxRkJB76BStbNH1TDTzQZ8XmUEwkeYyzntKFQtpNaxisUtcaziZthMWcGBMiHy95Pw58dT9tkaU1DXMA",
  "key27": "5NyVWBbhUGZhcbW9g2Y22k11KMi9d5ZS5LzfxbdL4UEFSwna8FpUTyANRfZDMGvfKvKiMXLGXo83VYWyNkQWpGE3",
  "key28": "39WJFmtjrwsxUHvksLLCfVXrWt3gqDaCXBEEURVbuAKTLE7BVfevszm3MXTDRZtqFz4WCwdJHJyyn21x8MWA46Lz",
  "key29": "5Jjz27UkK47J1F3ohRMPu479u9vfhKaMcz3LncS2Z4W191Q554xHquBcPb5zWua8DBuYV8svmuMqYxk7jhUcHSYn",
  "key30": "5vyfx3ww5ZDhEGPKXACysKaDnyn6Ayt6AaZ7edFcTnHeDoP5EL9j2jKQcrbos1AuN8ZE1pDJcfKURhRZLXixVnbA",
  "key31": "5WaGmnzFwGn6WZK2vEJSo6xwAXSHuDbdyb2m5sDqfuhcD78TCGbEE5J2V4pBosyFwBARWyTX5LnwM3WfhCWsEyrF",
  "key32": "22dda3dBPoXrrTZVEytER7rjdKGhHU5tGLUz4B7GA6SUV55e3GW5iVXBoTuECbAViSCKdjmtEcrL34xjN81rb4pQ"
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
