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
    "3HFwEJhQbZT1h1tRP4Lg8sqksoAWp2hx7vhpq1iutNmJ1DYeMevm2mWQziraSStN6GLGZ2aNKo5vTVZrC36XVhzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJ5jGxHQ47pnj9UthRAA7VcypchBeb9y12bDpETpsgeSKej2wvatksYVarEj68DSiTr3oS26QSeEzCVerCwuRUo",
  "key1": "537EsraWVvZUFpbrPYjcMoxhj5vsmqW7g1Mx8cgku9VjUyGjapLb56Xu5L7CRfTKH8VuC8GzgsEfTRbux1ej1RW",
  "key2": "gXmPZc2EdzHKrCyQtbynEGFTTPStAmmUbJCN5xtmPB1Fdgkkw7hUisK66FtqkgJujquLLiV3pnoSxE3771dd6pi",
  "key3": "3upzqXgxahuhPNhUBF51KVSsnaC9TXB9pRC217BrFBUYqDAJBGbU3qUpsYSNbvrfxeYQxWeLixKz1udnjaCJa4BU",
  "key4": "AwG2hoJQEXB8a3ZEcqs1v8AG3SYLGQZNyauDNAp3r7e3YZDupSTN2FXxQ2mbJiU3Ub7vgoSLmJtg6w5Bg9CNgaF",
  "key5": "5iz8dnJ7hyrEf2NNLpkhc5g9AAWUGZSzCfMsAnrUiKbAVC9aPBnCW4RTRwZq9e5rXbeTNBDdNZjBEDzGdo7fx7HJ",
  "key6": "5ePchRCWEtGptD6zgrWHwiDufcUFudqTBYVYTBvC8xnXgNiTohJ1uKocdRXPKmbpdYDnhyZky8suryFG3qDvmeXr",
  "key7": "3s3ubC9ojyzhDtoMjdVEyMLic4JSN3LBV6nkMkxRJ1UpYodyemsiPKxggHWfBP5tapsCotpaPAY2biLQJ4djXahE",
  "key8": "33H2G5NQiqMZ6ez3esbYxcCdAXJ35FB5YHrndu4kbyvWdyJGRxxLbKPVeJtjWDWEAPZbc4ys8phZxE8fjfiR1UGQ",
  "key9": "4ZPEH3c5eBrp6KDTZgkHC1zLCLvk5KvjKvDAuu6o7apW8RYnXaE8Qr8KoN6omivjRYs8RK892KtH4GtZdhc42J85",
  "key10": "2NuNFwZh6ys288zLqg3zGeQeZoxctUUYzdSGcoeAgXG1xwXnRzbrTeaekW9MDaXgL99qCA3Q6cQcy2T6Lpwa9nT2",
  "key11": "3FC1v1mct7mcpwqWayFEbdEGhUvFKDJP3Ux7vQXZGwoWdL78UygB4EpPpYMCaUJUxCRuddmfFwKZf7dCcPqFzFhX",
  "key12": "4PErN23oF5V4XqE1xKmd2qYXiDKJLyWFrKhGGBCggs8aQHnYYh8K79YZuVmRS7wXg9VTJfeVC6n3BeuUQChckDm7",
  "key13": "4293EMqo1HNAoXYRWhCDQJMsZGNHuLr5CAKMrpNyJ5MYVsEnK5E9VKkN3WPGqQGWLeVeyo1zJTWf9dFuhG9Myd3e",
  "key14": "58JTJ2sss2NgyPUEFVqAsR46whVHcE9Kny9Tq4oFrF13zsAWmswe74cMAf6w7bnq7N7LTmef4uTCi6vtP1C9Eyue",
  "key15": "5VGS5fJxuVuoguRxkWjHvehvZFAP8seUPmX8saj5TByJfLC8sr76YNs56y3kJQ8MuYSUpM7aUj1bxUgsYan6AtaF",
  "key16": "5Hbr3x2no3pVbiDa3o8pWZHrZUeiUim1QW1PqBajUCbAdXyYfaTBdMfAscDpZH3uEjoSdz2dhspM5AnHxRmRCb6Y",
  "key17": "nhjZ9TPTEcu5NYuvvubejQUp1wyUbaXmWEyDGQfJg3cpwbMkYffESrDziPs5HAkvzxGTGx3JFNxK37aStnH2BTk",
  "key18": "5ginDYNQhwpWfg3qcfdx19m2XhztmPPyPNusjz9ELH31jWvwkBYDqS74iD4S8D6KqNSwvW8UjdDTpBGHT248sBrV",
  "key19": "55nRFJaHtGMwtyB23d2UgEjmrjy1nbESwz8587CkttaZiXAa5jx8K4k6XfiqdN68xE69cvWjsd8FiyjyE9JWyNKu",
  "key20": "4SF1SopqPRhdp5n4eg89RDzopUckvgRsC1QajsyXdC7jqYCuHdJUy4Ktksi1taHSExsZWN9Erks2eMofunDFKniM",
  "key21": "45aMCtx3fDqdSxMyvyxcMyZAfbwL2aHxZ9D3LsgzSjVQp3nJuJBFPYeoFeaqrw46d49A8gFzHfFfZbHLpdkgEd7W",
  "key22": "4GQ9xEvs8zFGEgCr6WJiTNjFawmPRTniDPSmHfFVi25KwBZoXPybooZ6LHFyEm4kWH159SUQe7vnxsLaMxtJ6Bss",
  "key23": "3Mc9VEjW6HJaHC8Fw5uwtedrHN75a7yETGVJomkwSjAEHCUp5H5dqfC9UTo6bytPXuGYNMdCp2zmBFkh3oNePf8t",
  "key24": "4sej83bbx5dhwsbcRoWGtXmXSxys8sdHSCxyJZS9us4g2WkTB77ByXC9pgMwr4LAZYANYdfN26QFZi9JK2nFikg6",
  "key25": "4skgA97yARTYroy7TU7yvksCRhtVyQZVncFHV3uvpPtZAaiWRZ6XdjFJnucvSNRUxGiUBSvmHjUu1LW5u3nuyB4W",
  "key26": "63sGwvTTJjSEnbkWmrRL5PAegMrLTYScKonaTJgHLAe7oy9z7C3dp1aLDd45m6tzbTsdnnBzkeKxNBkLq4qJ8jhn",
  "key27": "4TWbAKALDcTGXQGAHVZyAJGXwcdRWtBf5XPCxkedjacfuiM8xVGHMjuNeyyZjFweG9YNaoawy8fi9jqBcy4GibVN",
  "key28": "2SWx6Z3zU8wMmGx3n57JJZvWHEUq13cNC6H1vtSLrtMtEgtguQZyPRGKCx7DKwqHBsj6xh5XA8huYMWujCqwceR5",
  "key29": "2UrUnfRyvQBEkKm4Uw99sHVm995bMyfLGnX19XJBVU3cfSbytcQxVVWjbmt15khULqZdKnVaMUTChUPbbd1hq4EA",
  "key30": "3v7jPZXtinBpbXdyUu4zCiZ4ockHGEfiy2KUPg2GUTtd4uuGRMj2E11FTtobjXopYgUxMhFA75VeWFrsH2XFasmg",
  "key31": "yPdjsCcqUQK9oDKdYr2f7kidCGpuQkwvbV3usm2rfFEMc4m9EYmt2ZeEPyZCwF4DpA2txGg6CQe4RPRAeyqwAoq",
  "key32": "wFKetkYmhAfsAH4mvBUwn6YNkerXD6GxEmqpySnTXyyvxm9zsN25YjJmXGCrhnjzKpDLDiYAd66fpCRsue29SYt",
  "key33": "QN95gXj1ARUPrhczHKZQoWSS63dL4wbS91REWGJtKEBMa96afwYrCYiRDhGXzg7wyKbRoK4NstN3LQhEBKX5Hf1",
  "key34": "3bmVcw91m4FVR9WwhSMxnPpGGpCSfhbbCW8juDbqwAL91T8AC3DJVVsxsLWAuuxYK4cukd1Ycfyr8hzgHpD2UpVK",
  "key35": "w1Az8kkFZnhxnmEtXNcsU4dzAiw3WtqyM8aNFW7ag9X8xPnCPdbHiSBEycp9D7NjjmPGUnnbpwL9jjEwCYpHu39",
  "key36": "2jb3jqWpuQwAaVRiRoyE4K4yvsqT5rGP27rwedDH4z3kYTsfsHnh2CkDPKG5TppdXrfQhgn4gz1tcGp2NCAZgWFP"
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
