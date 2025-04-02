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
    "2X429DpNJ92Kp6rTn9iE951TWJU5d3jXj6BRPHgHqZHeoaP9eS3ci6HzZ4YfqfBM6aFoDVncE6vroWkdtqRvxJDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kFK374KYfANukQyjiJQUfDTdDv93EyZxEfXCnmT9DTboGxFsV3EcbewVukncrnpzTp3JzPkcwHTq5QYiaUafU5W",
  "key1": "hPb4C2wFHAjej8e3TxnLDQrQxNu8iikpLnNdYPT3352F17zYWqZt6UN2NR24ezHRz8bSCfSJ8HqLSbx8jnDwBjZ",
  "key2": "59HmLc5WaQP6JYehiT6VMUe4EKByYCBN3keRCPLNZfm7DVJLkLut5nspemh2rc3f7tG3KF9aE6pjnvvKuYaDpG5v",
  "key3": "4Par85xs13VyFfn6CGzAzk4X83tNqmiMhrT1vP74r19M7i885Ac7wKQr2jnLFu5rGpJD3ESqBhPJ9mawoUW9JHwT",
  "key4": "CVBbASkZL5bVecvdfTZpsfnNJwDK1VH9tKfxasmdFVERgrZbGf1kBgCrCX9ofJgyqEGAcRbDZd2wR2CGbpAd64V",
  "key5": "5qsx7V5qGHZ7mzZ7pQ7ptRvgWx6nTPA41d7GxC3AtzPzdWgd2Thmykepe4iUa8HunB9kH8yJv1PuZYxewGzAABVg",
  "key6": "44m8qZH6sX8Zz8HgzfUhAAGjhZKUbQq16iuFPFvmXgntGjvFRR88VBN7WBTJzLogXKqzhzyfRX9mJt2iqtmerC4f",
  "key7": "4SDtUzRD4WVqvH54SPSvJaAjshZFbnHxjARBMUBctyAhfs7ej21R1t5GG4tvuq5N9X8JbWY5M3dFYuXG3BUmvK4G",
  "key8": "2QXAcaQxWZdNdZ9Q9tUXuK32zpGei88si3L4RWqyQczWN6cR9bbeg8ERfrPeu23F2oFkMk3CUwPd6tv7BgfthyWW",
  "key9": "2hfdujgqgJqxwbbsUsAenAsssYjbUoq3vhWXNz2rdu6NttzhLpTUKaktJ6AjNC9DFACsrKDUuEuyScDEFLKKTdGQ",
  "key10": "3pt2N59ebqVqGu2L6pNuUjipTtPtibhSY5VSGFYka2ty5AYm5NKsE3dHFgWpjahnzFH18p4Z4TdLrqr86sj7UDcu",
  "key11": "jAtCAvS1zujaESxpWp5CrRnuKSpaPCbjGNhfFNPctXiSsyHFMA7vKcsngB9WUWKB29zScTKWbxxHy7re6hMZKq4",
  "key12": "4EKakDmkhYHC5fUN7A1XgranP3iyQAehr8h348ZYys4JfpnTxJiwPzwqiKhbNPJy7QAmj7PP9jZqQTwz41fYik6Q",
  "key13": "3hyHKfoGZgyWovDQZRa8Y9WgKE2Xswd5r5YY1Wm2zbMVnJtEoTCJhuygaviMG3jFsjg4LVqyC66tAQaXMR9gc37L",
  "key14": "2cyoekUGZcoTKkmBANVXqA5vXFyNs8zh5UnbTgYKF93J6DrvrQUDSSsbf4DUPhwFVfepDbCZrogx7yRCy18uyvPi",
  "key15": "6JLbr6T7WSAtyJQrLWovm1dnDBLH7nUAYn3FGc6ohyip5opYR6jvBT4V6Nhz4kDRPZodtEQrxVzUeiVGNsM8ZjX",
  "key16": "5WfEXP3aXrtCq7FuagnrScLmUARyoGTYHk5W1zRnngCpN28o6KZe8k83UxPEcg2MkFSsXdtvgP9Pskb2wzyxbZDD",
  "key17": "5FRhQimJaZ3mC5xQRRK2YoYYrDtna6gxUzgd14aoaTHEgpJJ4vfV1xFfe6f7kiLcaJzef4NsPV7ESuTGg3uHHBNz",
  "key18": "mx5i5LJ8kvMJuUhqi9ibwVVprr96UfzJoMQb5ZMaBwKio8SULYp7GhH4VRebcyahR4jsQLLsQB1sPqQd3CWkss5",
  "key19": "4QpLhQhMV8pHotdcZJehPSPv9yfMAoW9BUvEQjHEetj4UgZ4enm1KoLbe2VWxUxBrUVbtLcjxdbJ6PxxREufde24",
  "key20": "44cLumMTddtYR3D5qPNTs5ZJYaBkuegypD3uUjm1T1PWCqFGnxsQ5KZeYAiguNRtKHUQ6j4aJwSTkJqHjcFSJqnj",
  "key21": "4RiCtXpD9v2LeoUQ4FExRti9UtW92MamqQevSZuSVpRuCcCNAWH4D9MzDQXnfvmyA3Vuzx7jHWcPJMjz2QeMfot2",
  "key22": "5TWrEkqgdVPFNGWxTqWvLh5M4y7fxfcqauJy67pzDQQqvRMkprcBYEfZD4yanUcqt5Tf3K1xKbAm8Cu6diJijeeH",
  "key23": "3g42T66CKg8S6sp9grsYvwHnN7GpNahWRBmmC9y4xYQrPmncZihH9vbJgoWpYHKLrioZL4MMrn8wyMqGRRh8CDRy",
  "key24": "5Bd8sP8nuYGJcxJcwnViru2tGSLzHHu8B7xwwtPARGT9aEnVMCDWqiYoo1FNmPyVcLRaFr8QRW5TPWSKZPYLZqE7",
  "key25": "44Q7cUpWDeQCD7qqEp8bmxmfSMUTF616vo7NxbemeyFD6t2PFJw1orXqtwE4Ed6uNfhQgCETAc26SNTnWiaSgZHx",
  "key26": "daWwtgVLoM4B9AJmBj3kkq3GaHmMbUXgjWuTgAbKmbywTyATpHDHkAxEpvCueh23XJjQinTsidNvvSHJE2qk8bG",
  "key27": "4tzEJD26uYmaHwDPM13uXMmxuowNwcKSX6B4SbUHabfYgPSFQK4YMby4THxpmcQBvnCLspA3nV6WSXLZ7toewWct",
  "key28": "4q4rLRWLafibXqnnJ8nfudcML48yfyUzHFi2m6d1bojW9vfK39UZreYntYiZXBzBF3XTkh8fw2rRveAHHeS5PKE4",
  "key29": "43aQTKFmvLYfCVPGj3fBMCWrJAkF2wzKJ3jjhrXzdDwhBcMeoycLLskFSL5j1ttdzKBqFZCV6hm1f4T3pf3sBai7",
  "key30": "QkiwmDAoMGHfcpgt8ghMAMdie4cwerXqnaSgrp6nQWU17UWz64itvdVXfMp76mQbJsUNnzKmEb3kGTTW13y3Xz7",
  "key31": "4eYWZGtAxXfn7v3SXzKQUPhnof77a8Krw2WrMK1LS7sLp3Y4CCVfFu7P28pLrk6shS3NYM881TFrind4CQjrjbu8",
  "key32": "3A7iooFzzJ1hDF2JTYM14hL3hRsghyJpXV8MdJbD17egRpJuUcPyBxxWZ7rXm2T8XREGqrF4VZYRhpvsEKQdaPKu"
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
