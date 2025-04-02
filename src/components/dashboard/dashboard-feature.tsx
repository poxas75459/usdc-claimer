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
    "2QNYoPNQsCCxnjpFhvaTJv8bR5nMFYuowHf4mBEwSv8JUTgZ4zgcfeKarJbCi9ECeNSni88nXi4JYtBDNGg8dfqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kcvk4tHwfj2C6ViuyzvAwb4SUneQSahYFThG8UxGv85GdhHJVE9qmjqr3wAqooGKhA5jbps1xwy5hTytFmPqFFT",
  "key1": "5naDhGfvAYumWikM4n8UBMcxG21UtMjEcSLU21qfFxiviSmNJn7VAR8WmaNQ78DFnK92xybKvR6zHmVLhmMNR9T7",
  "key2": "3BQAiGUQQc42u6tnkEp1THXf2rYQadfTCNwhnQQUhNWpXs2XWtH39f3DjYrUS6wMCEEfJpR55h5neAkALrbbajsB",
  "key3": "Am9jjBrDU3kejuaVXGgFwTg9NJRy2Ldz4uYrxN2MznVY5rw1oDa9mWutLH7Zvq8PRJNnQFQbUnkVkG67oLKM9wE",
  "key4": "3poDSzpQ5jLjvCPZvus9utYpp4zZR5AGiwE7bH4invqLy6KixispqAAZPyStJjDpJMUKbJrHtygq2JjM2jZd5SpP",
  "key5": "5aN1BQi5daHqotehyrcDqGWbTqDueU1tAX6wu51BcBHaadPqASt1C2EyLvTjrrditWJvyc1qZC3Q4oGcyQYnDyXh",
  "key6": "2iz6EpFQf49MHsxb9cpWThVYQm9qpXNWSk6obNWffNQXGUnk9KSEyguidUJyXi5pcueeyLG94RYHWEnsvU7C2HDc",
  "key7": "5qp11J5XTCPP7yzZWy7jEAARKMHjA2erWu8Bk5jYtW1qccMH7ZeWHivYnKKL3xowrSMLvcf8rvZbQFMWrgtLjMSd",
  "key8": "2z7Pddr3jmEQCJwt2AUrr65Gcf1M1wwFwZPLy4UHhvSMdZu3VFGJUoujHSJdHWt5375SF5AazMUUGb8mBQE8Pw6g",
  "key9": "Si5CrceA5cR6tG8U8jZTg8oNQ7rqKmRsqfNG4fc8g6mEFqGJDVrSxhsf4ctBfmCZyxPAnQqeZuaNih269sb7SDR",
  "key10": "2u4bd48HbtR5WvNWQGdm4TrWtrGAXtbAWnjr3XYDgYJheGKSVzd94BTj3ha4Zb4kZsRp13QSUt4AAcwk4eNAEVDV",
  "key11": "5pGcyVb9qfMUJ9AZLbaMor7PK9ibBrV4yxqeHbGLogmbkPGcgqrM3fgS92sL8gYFQxgrv3wVaAA6MRTAqcdg7t2v",
  "key12": "3K2eSJBKVLTEGoF7xpdDCSmicAqfyDZqUwCsDwjPrADCPopMHWuXy7G3wLJ6m4BDPGQnwHWWt9ZMV7LAdf7RxbJX",
  "key13": "2D4DfwkqcCQhMBLwNFHEv4HvJnwj9Eq6wfgVSqtJd5AKFsyLaUEL9fw1zQLUuJwMUcbu89H6xd6vtJwLu1kDdbS",
  "key14": "iZDpQg6xVNB1BzTzwBiNoPanNPQdJzweBbTHtib3wnSm9hA4ADw22i24CFD8EMAD9F7rhZjwkEzXBtjhjfDmnP8",
  "key15": "4Nc16fu7vhuXsMma1u8Cim9ABJZ1trDWkbX1ZyxcFDRzJbpJiuAqmKc9vZnZqzf9nVgGUfBJmfNLLV6Mb9NFfuDz",
  "key16": "5uZBa1p5sUGbc15gjjoaNYq3QLwyjWgE9isFBm71pHnKXcPgaNNuhDBrTyXmBpoXRWEc8QF1iZ9HWPRXDPHfUoRc",
  "key17": "wseFcdHhGiCi6LWXeCahcYFif5K57JPdrhgfVqdvQDekJ7UVkFvXWCf6B47rYaq7mt7xEEqa9jqjKBP41uNopey",
  "key18": "5RLAfD99W9yLoovUQf6tXjZguZgxmTdyFhLKj5ZaPgpYNvzJPr93xMSaPGwz19won31eFMFK5qz75yJULBhxKeBu",
  "key19": "2MkPhgny95YsEusTZb7CewMXfovGZHFmx2oxh3iisb2qGpA3cPe8WKqnJC2JPtB45V1w8ukxrCPU6To4EjctVgq3",
  "key20": "324hdg3rzTmbbg8gtkmYdC39bBhcUqZKWjNhZgy3GA7ZBdTF3xK4EX88PWJt71GuaZBr5kBPhK1mgkJidCwSHuNc",
  "key21": "2ighhXLdR72UPNGggk4j5KZpU7ysxKLEYhqavFWeHhnyNrYXRiznj8uB1PFxhLvW5X5yg6b9J7YLGqAAfhfNW5kU",
  "key22": "EsTR9AFhpbEiRcurncPJVqTGDLRSbA7ZASGbAMh3mYg2gossPYBqXG9oKN9LZ4JovJ5d4AcVuQww3VUBdQFQohx",
  "key23": "3k1AXZsbFQfq6yjV6conuCc7JU2XsNiBUNwc7AQQ7oKzBumeJQyzXpfNUkghjWXoERA5XcCZShPLeHSSxLiSCuB9",
  "key24": "2tSSK85oeTauVD24LQTkyt64XMnd8WmdsHFCRCbiWNzXm32RAHTwsjGcNABokQv4hbtz6Ftr8ytePMe3YSWBUkyA",
  "key25": "3tBhEWAiUNToNdTB35pgtXvQNrJciCJeicAPS2Bmbyc8xpcYXBnFB85weJ9eJnSNbn7EUYPyb1S8BmoWhP93cPge",
  "key26": "54hPEL3EvFr2naNyaQkPdZKedfxxxQL17sf6sFN6jHqTgEfLiQ9TXB8WNk7hooGqeq76FScuiuLUxLKRt9DvfETz",
  "key27": "4Zk6v3ucyLPAK38WULrFZKgDGs1iaDu3SBCm43W5ZGrtdmbx75Vx68r3gwPX5CbUX743U68d3HXtsk8uKh39wRJp",
  "key28": "49Nd636rLqJvQyrnevtZVXef7d6f2FsSE9nkXs7TMQCseV9YU5X32MUzTt7zQrVhZ89bAWjRrTJSuGLhjqvGRksG",
  "key29": "56HKbS3ybXLAFsR6otVqEDvWLUHwni5HsWqc53P2dsn6zzpLLK21s3k2mG6uciq11fuArqvKxyPm9XfzetcuShDZ",
  "key30": "4ti8hjW9QX6yTfHsDb6AW8CFHMv9cDaUUGgWuQH73APPC6SahV7jsFcQdhjexcfvAWRFsZSAuhfYDM6SR3rz7Jsu",
  "key31": "64rSgHdNfK9XjCrHY2tJo2QVUzR2V1eFWVitmT5m6csaB35Gevf4Zu6Fwrsn2isaQNEJtPnr2c58mbVnsXTQ45wF",
  "key32": "2xspuDtWM5KHZq15Xnc5BnYnbTGPw4Un9PaTF4Dmv7FcZca9GAQwH3updsXnLCC44YMwn5LvdehNDsFCpeeKte97",
  "key33": "5JC1XjSnQs148HUSQWaUny3BFZLBB9FoFHqf8qxXdaMrZwt8ZjuWbieXqpg59rtCde1R71WoWwTLd3XmxGUGseMz",
  "key34": "2zv1ACQuikTd25fV73L3EPxgLNSdKCZBwY4BMs7PAJKr6Unx6CecjiP8S6zSjFdRzNUfhcwCZJhq67D8FvqrJUR8",
  "key35": "4mAXna45DyZMT23F6fadWbECGGfT9DrixrbuPBTyud475q8gvzASJpiaY9Evx7ZcJRLmP1yrmVs9Y9qfBYgd6AkQ",
  "key36": "2YxvDBRDbkSMuUuKdnSaGC1hNeEpTNBJ6QEVXEbTProLxGGjKqGGqiuXDyUSps8p63H4ivNaFyipo6ZMyMGocva2",
  "key37": "55f1s619y8xfqnp17wLB7qhaaDBssB3HEHH7RaP9s5dqRagpXvhZfo3KYBwA1QRVztE4JjGJoEb91Ev33XMGAPpv",
  "key38": "66CFrm8d19ZgmzcLCMMHhMpHCEX42y6xg9PxspEntPPepnRzFUMfm3rNpyxzc8nYXfPVCJxigbXi6zcbFbHqn5Hk",
  "key39": "5R7twomzZ79J3ukXDL8XnUzdLPLXRyoPg9T2Lcrdo7XMgPxs1vUJayNM8nD78v122U6RsbTJ4qGpyWBKQTkzGZyF",
  "key40": "4HGaSHjbw8DaERxceXn6gmDQwYxMQqf9QnVZxyYiPhr2VpR962JvnKeqm7V5e9NY2SDnVCbfTdpRnt6hbspfe8cU",
  "key41": "5BaYE4JychuMV596E467XEwc6WAawxTHyZwNSyHa5YZ84ieHBArs85AvsYJdfR9YbrGKn3JvBYJWSWzW2EPnZbji"
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
