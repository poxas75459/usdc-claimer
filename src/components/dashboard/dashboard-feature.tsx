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
    "4nXxSimxCrUxZKtxLeRgqgKHnUDguBPFqpbyeV5P1YR3SGdXjDgBwRekHWj3577MkTWF2CrdRRZ64WYUsPGYSCLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JfHJxar2guEKiHDJdSQm6kSJ7MtbWB1cqcDdnuBHox8WPUuuvsPqe6sqRAehDJp4U5Rd5U4V1ww2zpSMTAZ8eFW",
  "key1": "5U5ZFFXA9Hy6oUJ7h392ao7rijvMUU8N2hb6nCdeSVo4kj2CeXgUwwb4ewXoyPCrPQpDJqpJQVDkGZZ9tXoJ7kTG",
  "key2": "4BPCtapGrDGv6gczxESaXB7KfCTGftLZFS5ufjuGcFJFJjuXFcksu1dcUmNaC3YLYjsajGT5j5AB5SEzTjrnzVid",
  "key3": "4zJ3kAzkYZ9TxABYqA45PBRn42TQ9oLKfhrPL6b2oEe7F23FiHgQFnJPX9iVhV1KmY6c1jQmyiPUmitoBPp9QXg",
  "key4": "3fQ5729vp8h38zFnwV2wemxYFM6smT14yxW3d6MmEzUcvrU9zMzecVjWmmHL3fWmNxNeULYsEQV1MrJoXFyFAJ18",
  "key5": "5NACxPGhnzNCmwX5Mu3cc9XKptPMdMJrPrrWNM9tCfhDUmdBg1AUefvF4k8Wk4HFRZ5VvBqJK6TGgSQpzJZ4Mazy",
  "key6": "34KaCRbjzrC8hSupxmUEXFRxEcW2ks5hvQxxuMqmGyfkfnhmS4nhcy33W3B3ar8RkxyxnF4QR38c54pMV1bZtmqa",
  "key7": "3ajVg4Dy6jnWpZns47Je9TANiYrwsvTPHaQD7WksUwHoLwA2feQf7VaQTwPJZwjDrdP7uAJYU5PinkGxF1itRdnY",
  "key8": "5KFDzpVcSYrCHCmyWJsrZcNu2EXpcjyPze4gbjB6F71FHPuSD6Z88uLCUYdEkxYBvEYgCjfu5t1cztsy2tL9WtyS",
  "key9": "53Gq3UpzvuSXrZGbEMZ1CwArQvNT9BAWTk7jSuXGvfYEnwZJ3nBKMXrGXUqg17PjhNBzHhLBefXUEHoSdsrKGSeh",
  "key10": "Umx7MX5MxU5nw1srepcnnm633ntPgbzgjhmi5PnJe6T16cSAofip9efAVwcdUg66C7HVEDG4ofknVdEoUXswVBE",
  "key11": "3gjnsZMfR81xddkdvyPbnXFoWtayGqzCb1GqR27tULwvFbRKaUEK4iRKGF3qJscvFpnP8enR6WVZfjk7jbFW51km",
  "key12": "2aHDqUbkvDtaTKqbJ7ZjLX9yeiERjowCV36foon2g9S9og1qDauhC32pJx7XFR5hnVCBSgbcHuhCYDMWarJ3Mrnh",
  "key13": "UDXk23Htg51twVEAJ7MYJrspkZqKk2R8ZjFeZkUd3CMH3paQG1e49fBuSyCkjDz7ZyHRg6bZHjpGdtCiu4NkjK2",
  "key14": "55PcfjPDkqyey8EQELidXczqBfn5sK9kGwdQqSVkPQQCMXnFXz2J8oGNwL4Ld9W1bkLgARoFUGudyzHp75ZAQcXK",
  "key15": "4RrqZK9pxJJc8P2JhgBMKjKAijVtzpeAHRRxSjkML6zZUb4v9bVkTXiWFkSsSmss7AzP7oa1v3f3JpZMTDYMgjFo",
  "key16": "3AQLXzBX4oDd3SttTRGtmxijMdU3ds617C3diojiUioZ7RUqfcHPVE9ovmDnhPLtzEbhdbrNv9vmb6N8MgUWZmpN",
  "key17": "2c22j7kxnFPDAvTvBea64ECUonNFHturxH66syj6CVcuoXHRpYh3iKWivxW7xR7CgP9xHj6GcCDDqZR23FjYYJTv",
  "key18": "21mwKTx9fAWU6zTNL8Mn1FBEZHKKv63S541DJ2Rcd39zvA8hXhkMCpCGSmrNjaquQ2KE3mJXqyqwK2HCkv7RXpbE",
  "key19": "4BwFa3zU4ZGLxAoarz42jHF5Mi8tz9qcBbkaZRyDpUcBGpRaMb7KfZfQBCWhUNjDPixPdYrxvuShJ6hv5xouTuju",
  "key20": "4SKEuoQmvoGjsobFACWLsmfBmCtCqNWmE3UXhj1zC52Bbk7Vf1BgjiRtRFYzzc4kmsGQG7rMZaRbJDtCChfkbRB1",
  "key21": "4BETFEhhmSrDQ8kqEPG14TEkXaNBemApo2969mGGGnbgRC95zVpyPkWrtLktVA3gdMFwpJB9wSF7G68roDcprqs2",
  "key22": "4zeTiVE7jBgyyKJzqFs4sLuhysE3FkpqEWkVv7qr9dLaRwYn5fDxaUDGGsM6QSR5qNRFrMDwFZ281WxpwdKTStak",
  "key23": "5fwpGq94Yu73VuEF7UEzrRKeYT7YqxAduuXzEncPLz4xQ6L1bS1FxZjYmgCuRcCKGE3x952YERiRZnVFDdhDrx5c",
  "key24": "4L6fPWEFXeXzQXBGWUj5Lf7YLFB8LxRdhDbyZojC3FCY8JVBPPd7c4zd3mgGozFXrtHXeqNkcELbTKNSugHNyJK7",
  "key25": "5c7tFGRXdbnhUrD84DmZu6UaHt8sRbU9WiPCEBgunAdvygd8oA3zBxNyrAoAv2TDhvL682q4Cb1uauN2iTmjdyXK",
  "key26": "5Y4FC6pMBxJCYHxfVKB1pitmHbdk3cUGxu24yduGMXQWm4YHctzedjhmN8kjM6vEFBDo4Ekb8HFKJpMbsFgXWtsQ",
  "key27": "4tiCxASJ1ue77WYPLJN9d3r2YYpFCG2pBjRuMYtE8seAoPGJWjtVhvp6CPL6NJkvsKhPQj5SKDsn9kb3WMtZngnC",
  "key28": "2FUdKzAPfdrAXBBe3Z3FzzQQNuEcxMpbtkiYJLicBmf7GJRCf2zEsYc3kFYBYY5EzaoNPycpEyL8mBZXPN9gpZNc",
  "key29": "5qq1fsRY9vWjKn5Arz6vHkYpvghaDC9LtHGjYc5eGZjCLQDRSNhg19J3xJPUPHn4vZJKzdMzKVzj3Bw5mkrKoXKP",
  "key30": "5CXrRmr4ShVKc3Sq3B2uHkVbWeB3dCS7yGsn7kqiF1FekTRY7NfNGFEexWtoFxCPfJzttbeRxrmXwj6Wbg98xJix",
  "key31": "4Aeg2i2Uo5mMLaUme5sJ9kf9euLk6ezhzjt7RvV4n6qZoPHKErbzzoqRpgQ41QDWBcSQ3grouKKBf27bTXANVMbg",
  "key32": "ue3tatJF2gKx2wMiz3LBJ9rfFKAShbd31thmBfMwAYQWWAKK7UYj7WnVxo59oBNU8LR7mVJXL2NwJ6qe43EDEjA",
  "key33": "5dVq6xBrEcRQnexiAvwVUQNtsRjvgtK4q9reTFtiNcuwU92eijS2wzQ8S6pGe154jMSSJjHwjGZRBbcqfhmBzMRB",
  "key34": "3ryATmpYwMmZsZn43V7uDJcbG9LHPnS35z1H7ormyZCUXVqLEi1bNCSbX4oc8XYrsZxg5wt4CCEkvt3FJ1wo9Q1d",
  "key35": "56c9CQkbV4ZyA2i2Jo4JiE7wX349fCvtqp5MvdG7FMTGgB2xwwPmuYrrSGcCpj7of5qMCckwmw78t9JXkd8XDEcP",
  "key36": "5sYDWRJ1DyJ9Zm2irZXnUQkWsEzxiu1zVMTweNzMxHWHgrYW3ZitJYhssFBZrdxF71KSp7ar2UtvKss9otvQK68H",
  "key37": "3oKjv5HbAfGerPQz9KMn2ZLrRat9iyxBAdqGppwinHXnGKhP7HamHdK13WnPoB7SRxgWZZsZGmRSGkQv6qpaRLsX",
  "key38": "3WaTTKyduTFvQ9z9c161h1WxdZB9hi7tzmSsWkxczYBTgL7F5mLZTgU2NSvAuSMDT74jCVYtkSaUrXiyXJW4UQzM",
  "key39": "49ciRP8jKDVQ8C4w9SvYPuBP4cnN84faJ7akxFGBgdNhJPKeoU3Aw7ZKsRp32gKYBiXCQodbsRDDKbbQpSLiEH5T",
  "key40": "2DRfqrQH1n3A1RyKLP2TT9CF6GAmV2foKuuoPBZVtp8wpjLz2CPxCQN1QeJut7VmLthr9zMSrhUDoCbBXBBkfhDX",
  "key41": "3p8GBvctYYq6RUwPedJL3rXGWJ7h79D3LFSToQsa2FjoJXjPHNBqK4GFjeZgpngQKx6ryq8G5fLb6NzPiF5NXy3z",
  "key42": "5gQSCshTLbMy85st4LQD6d2mnQy6CAR8iQx75R7NPnw5bKSovJBiisDvqkabZWe1M3c7yEsk1TvygKHZ4iz5tdfX"
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
