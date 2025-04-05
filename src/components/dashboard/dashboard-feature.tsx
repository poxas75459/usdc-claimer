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
    "4fr2PYT5Uf4fjz6kEpz6pQmprwcrVqUhb8wgFM2fq8egrx4H6KLXh8bmNamGa4vzMBK8VcszXwF3uJHiek4CaR6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RYpKUGbAkowroj7siHHLfreT7VR65RnJbGW6kXwzFXHrJSEe5jN98Qryy4d2ZbwNRBpZHSH24kAHoa37b3Q64xB",
  "key1": "5YvcZnZTvd3AsX7gzhZah61csXLoxyPwUYfduD39Yym5VuCnmM33nbJAkbabQ1DmVq1vBFnckb328emWvUZLS4Zy",
  "key2": "38v7h5vSANG4K8zpvNLmJ2puSioc7wZ8WKUjimYRXhjuRQynRcepeQG4XLDiDpgQjWXVsLRfr9mqnNpQH6asoQuN",
  "key3": "5aVwbvJXXPqfZKpDhisZTkMsrdqG1GBUbJ3oJfqrfgeh6ZaRKyGuGD6i2b5KviuizpimNMjKJ7WCeRkr262JdhM4",
  "key4": "3gKD8KXUPzE2LJ1kSHBrPza4wzm83u2ALF8ETWHuPcrkrH87gPYo6CtWWD5pLSPHmK9fSGneypz4pyK6xdyyiRgn",
  "key5": "4a9YXGTdhyekyPfTqw6ebtJhbZMxszYhgJg8WYnbyFuN4LNMCtTZwdstwkpHvHYx4rr24eherW3jk93ESJNeNC8r",
  "key6": "2qggySuk4t4ZBwsqGLJMWtiJeqmDh17HiQmeQTkFG1LC4nnJYaUvycZigPYnvRqYpxJtPTbz7J9ny1wuc51rWPwP",
  "key7": "vZ6vj2TkV3iXUVACtVef7GPya5XhTmR5GYNRtqYCY96Vj6Sr14Dcms7oBG6jHZw71EBVedshVFVJFUfhBkTDEfk",
  "key8": "2poLCqvxZbcGhCquG1BbwsPGCECMQqhTMXehaHpQw1GMdAceCE7NkDxMLUgd79xGDuRZP5Va8eoZUZo32rsdsCJk",
  "key9": "3TUotgYKQ5E7gmy687VPhThcisqQcAoGEDaPpcrDhK84GoHptqzj7jfba1NncfmDGvAmJsGTQZ7YFr8UBuhEDE3v",
  "key10": "66u2DGN9yEvomh3x3YpnHz5fp8nBdwtV5ykc5nydNcNE3qwwfeKeFvDd4ywwV6r1TK3KYEHfjmdxskTZWjpMPVPN",
  "key11": "3cRq6mQwMWmHFvNDfS8gYKV3XQ6a9ATkgCKzKSVcCpKonaMxrwCjjiYuzV9jFzjKtYr2idEHGmuVGPk263FxJxze",
  "key12": "5Hm3PNfox1xAgMcYwJ3nXXdiJCEG3HKDwd4pYTD5x838HELFTaMFN8bs1wTfughv4nGEwDG3QxKfrqNoYwRhQdXt",
  "key13": "2Y6eeaosDUKnBSaKZWh3bPo8BuCD2CFMvoVvDbtgj7RsoEpnrQEMa7c4F8MJipAucu4LzxVjFeTruiqi97uUDNZr",
  "key14": "3EiLHCLz1JzV5cUfK7Nrh3anFsfudWzzYB3xRkocDT5jYE92NKeYrYp2iFTAhdexYwrM8xstpcgSC7ctJAax8KDm",
  "key15": "3h1sDWhvK3pA1z83BofeYBxUh9PuHxnHAeDmp56zJ8y9hpQSdqvuTZizKhgo9GhrEisBePUZRcXTVjRDQmknAPEx",
  "key16": "ZNya4QFV1s53t3NFwSkW1W1qqptxQFqv5rmDhAGfQB463vLjtzyoVaBtG3knZCAySNukLbPanz848u4gK6F4KYj",
  "key17": "2HpyPPMjGZ7Fy47X5iHPFTcSw5qKTftAN8SkFdzx9jwDgzAsu6udPpEpGouqHfFaAwjF9moAETVTVVakiGPukzh7",
  "key18": "5tAkKo2RtPjkN1FSWkfwPtVqrfvRY4i1eFEZMCqJMigantizFNZvjFrksjppsatd1TK6qgKYo4KmnRef7M3QanhY",
  "key19": "4NqQ3DW4kN27rQYyKJ3QCcNTnR1b4y7tskkp7kCnoYYaTx6XFMuHEz8ryg1UpkVDrUVkjQPV9fk7PPkZrTL1SPKa",
  "key20": "3YjBEo8SDhikqdSvBD6FGZsdBHe2LHFzbs84gnp3acFwvANcyD8fSq5j36F9zZGu53jAMXBWhkf45HjPXTLGpuSZ",
  "key21": "48hVuqaE9cQPF2GZtoBHLtPSyBQFggK8X6JshkZx9Jr9FovULpNcmsXyizDCrko4x8DCGjPEbqTnrAuYLgz5oY1U",
  "key22": "KifgYAePvEywYF6PH8QtYYpvTQUSTiYamL4WyPHWBLpzQLwADGBLMV71YHkM2QpUcmnrt5yMkmFmNRK85GseeRP",
  "key23": "3wDDrhuy4LD8SmrsgW3SkENRzLypzRof1jBdkQ8ZURSGHcAUR6kGomVQCnoKWva1gaoiYDnMVJMygMaVnqhnz9K6",
  "key24": "QESGb5sS2k3frgK4WEheDJUBZZj9iGyGFqXis13VJKakznJeKgVgJx7AEsGahqeuLtiCAWKyvw2UTXWLC1TxoAd",
  "key25": "5X4Fg9CQKSNkiEsoN3Vqc1KLg2TjpuKSbtCSgW6X1XX8ZnNDMTvwoCug3YQ9S5BWf3XAU3CgsKxt6v5MCHkwqa5i",
  "key26": "4WtbRhYftHBYm492jbuK9e977W9eNgzP1Jfq27x8Vg3p6tgXKbyKoooXPQDsSzgCqFKWKrjQxCZtD5UHwFEUggzy",
  "key27": "4LKNLH7LwVceyY54LcsFT3Kvu733rZr5PU6eA6sPLyeg3fpx3zTZ4taKtFoyxEjeGT1LWkQuLrtwJt58LPEHHKwk",
  "key28": "dsSzTBZnKY6TTx7mnbR9m1PwXQYqJ5MDYdgoLZTs928D7X5casNse7vkAS7FqwF6SuD4oXKoPDBHzbHU1wc9cL4",
  "key29": "2D2bju3An7E2fB3ziY3fvLTfWmFu28qd8bxhjMi5tDcX89dpeB9wrWP4QgopHWNmXdVCQSRr9GBNdBW4SxS1UF2z",
  "key30": "4Zz4Qb9XLkBShPz6FSBMexzhwxm3EwXw6HtPNDtFvGbNxcLRgSFx7knikWRDfB8FaLnThFFo78pkdo5DrhnYoJUF",
  "key31": "34ULGpopSUY9mdox1VknM2u5UEaExgpcj7kEE1yFwFKNqvb78mMbZHbK4wmP3NtWHzeFEm86PL47bFtkURokJ6V5",
  "key32": "FWRxzkACbag1sMk97wFKM3uAz4PPuQKYAoM7Q3TfnSpVkZEJ1brr8td9zo3kV6dwb9Ptyv9UstJcyraM2Sdy6gP",
  "key33": "3Q5jt3geJqzFS2iBqnrubV2EAvWT3numZ1kzuAVpqUbPtMseAP3FG9Dskyt74W5PT4TSFSFouqXW4cGEHugBVYbC",
  "key34": "CjAYD7DSyF4n5VqiZPXibV9wBz2rFabXyCtNa5dnGcN9jQkKnJUTPQvTh9FLm9rrtsUQdjJ925VADYbkbm5Q8Np",
  "key35": "5preESvzH6aEFF22UMdTUCmFghQiUi8SwubBHhcaby8KboVfdcrV5wRvib6u2b3qJmJhdaBfSJGktK34rpWS13Zd",
  "key36": "5WgeH23EpsFX2AhnZYjhsXLq3DLsxAm3nVrzfw5bEGFgwM16Da5hGCzgRE8Ye5sQsinUUuc5WUSkDjX2TJwwqdp5",
  "key37": "1SfLetM8W26HZ38mR63WPeJfdeogxWatt7PQekoPG8CXmdCpNaZQNMFHXD9vfDrfkxjumeHJPtR8Er3kCv7E1n9",
  "key38": "2FT9UrgtUvcLFVUSBr8qtnhvu6WgWGaqngckmd3NL17AZNWoCuThgK8aWSz2KRoQR2M9watup12Yoz3TPqX4EgZr"
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
