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
    "k26sYKobeKStRN73ScCVBw63YfKsGsDKCQ2NGvjhgDjZ4TsfWY3oxNnZH1utbvzq2G1u46D7F8zTfVhZjd6bxkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kPNCpDJZYfJfMSrE1ruJtgVudE58po3byQZbEnPUWG91LgxwP65ZE2rPH53k7trT6EQKpUVdBcvLEE43HdD7xi2",
  "key1": "5GFFoyeteRfyuiU9F8hqFrG1haJdc2n8J8aPpPEgDhPXC5kuWFgNFH6UGhzXVx9cK8Nr9NCdVqFwCj8Hhkt4Duxp",
  "key2": "4VNevek2EpMGTY8R7fKuBe8J4azJFJMoM4RxqYaEw49tAq2e5vMZ5Y1A3V2pvouPg7xV6Q2XeWcXEsKx7TPi2wPM",
  "key3": "5xBEaa6rXFa23qApfPxdo8rLSpiHB7vfFo2QWf3JHZganQZNEJt8iSn7tZXxkFBaMuVWcUJkWcbKtqrEN3z44ZHH",
  "key4": "5S9DNH4nEoyahDeXh3Kss9wMxx4Q2mYma9qWPcJCJaoyWdZpwjw3dEjEgrT6GR7fQnb3VrQcbniwCGRMxq6i68Qo",
  "key5": "4nycron1ZBaJvPm81ppmZKhWCxHzzSGykrEC1exMW27DCBNo9LLhCRJgazwqqbfbAAzj39GiA4NRJhAhw13qMrGy",
  "key6": "5GatujCAMgR3jMmcd9LVBMN2RZ8yP1NuRZf2Mc3wXx4bHcj3nDLZBHmXs3yLRKLhqSoB8CNHVM7qitzyvo6J8Mt7",
  "key7": "57Sccwd99VHhPGZbpKkHN9hdk6EsLEBu4knxYgpeRWHfP8uYQ15WdNwU2PGcMjK4kkcnzjg3srT49ptgXmeygre5",
  "key8": "3g5Q7Sz5RXq9tXtP8JavqmKMofG3BHadysHqMHjyLWEbGsFTmPPv9cqxdkUXmvPu5v9HhD2RrEjo4KWout9hh6Ls",
  "key9": "WhZjkBVGxBtZnc15tzd95YG8mFgDQrjWCk6gzddhFet1kHFcCve25z46MQRtHRzTwug9MUfXooBhyd8oUupbVHG",
  "key10": "ktZKXEMpBVpsLMURi69YF9ENrSwzqEdxwgbQj4h2wyXEdHxn69CGWVfqVZVo74Kk1L78y3Dhxw2vcY8Z2HKizbU",
  "key11": "2cUqCZoFVYCZhb1MM4VUcvPazyJSeMTGvKQeiR1FZT6DieZRarGCtFcUijRfCTFupdodvq1XXGWzwGYMTcpcuXho",
  "key12": "3P4unHvxPHwpTRaq4JLmgFPvZWxH3UzQwn1beWhHbJevyQzg5KQkKGXmjdCz4J9hDRYHPpwJGiBuQF67AwhsYzpC",
  "key13": "65biHLa3QaF1LZicjqbFrypis9ToX5hMQTiG38uCA1L95AzpgaqVkexexKeHQvJgXDWUE2mXpoH78p9pBrjfACRZ",
  "key14": "2GAAKcrbN4r6pYaLVuq3QFpsVNvJirGz9TjjS746jrpxtUtdWj6b6mVGkZztnrsxrBnCrZmrR6fLCjVqxaa3imF5",
  "key15": "4fqd6TQFUVi6FhiuzTvQRXdZXxbBtnUCxrvKjL8Mk5YRcfqAeLhGouMGFKLTu3P1bgewh864oHJF8pBuqcdN7GPf",
  "key16": "df6jB9rEASA89de6EAJGJcsEymrPj5Zxwdv6LFD5ymynZgepVXSwf5Y5mDKqCnPxQeD9sLwzNSzYeC7LjAKftGM",
  "key17": "2jUkTTT9VD89DigkFaaCVyRGkA6skpShbocdnSwUXNqDxfcVqJnLc7WsfK6KigLyfFPHvdwHqPdfGD8UiQjAT4nT",
  "key18": "3ZXizNT9CcJhKt5qH2ak6jgwYHgdxqnNdCgGYx919D2KdvNEeEeviyYzbAo5y6i5xNVwJo13115tkEMcNvi6MQUc",
  "key19": "5BkiYQzJwqt1pUoWrD92Bv4f7gvKfJsmkH8TsNaVSjwmM51NLfJbViwbHZRDQoLcLYGEWqGXNVmCnS6hduKWsSHd",
  "key20": "rcgKGGKrE2KMwRWWP14NPEMBEMEdfUo632AJ1H6u5uESepB9HdZzu5n2ZuqaWEsy1k9pC2VP6A7tnc7XRnmNkTP",
  "key21": "2BostjjtqPbX464KxTzNaqiNeJ4sPRR8Rt22ogLS3vfLddXJpmVNKmEyY2mSiGbPkgMpxmg1g1HSdBhtki4DaVTH",
  "key22": "kmWAJte8A6VXhCz66GyUiDwxuwzRsBFMcG8qTM2pMVR5Q9CGVhQqBDcMna3TrTArrvY9mjSJGsP4z3YHn6fDGMp",
  "key23": "3KvhYCdMneDEQNAQ4e2We2ejXkScDFGEdR7vdTVsfc2j867HHop7HWdtTgj8DZx32oh3kiCW46gJxZDTvczWWq21",
  "key24": "22k99EhJcp1po9DnUk6zhg98aPt4J3YDU7NthacG5gr5QayWfWDBRzH5cUfXKrYPX3zLDLkZAjuzGneiMe9Pq1zA",
  "key25": "3VDhShRVKZEkhwr8Q2x6rejkUBFDTf3ggKjMsPy6hqpCW9MXyozzfrUtH1V2Rr5hcY7Hqy7CaJSAnBg7GoDsUPsq",
  "key26": "2QfvWcTeFwJwLuCxk9iBciacJhECkqiRrTTioDWAf1MXR1o3SshLEeYTVu9ZHyQpQN4T6vc2KRqtxXiKX6ym3RAU",
  "key27": "2hfzhJgUS51oVnXkV29DNEiSoQgYxaJbtXqWQHvbGL3BvjJg7DRcnakqDCg43j6H3T3Spdg2BgUXJi7zFWebSP69",
  "key28": "2cxJfcuM8fm97jygBXUHUE4BB72gmJvJx6Wp8oiuEQJ2Dx3JoaLzYnuuVyeUBEW5xHMVQwTM5oG41a67kAhMeA8M",
  "key29": "4q4ca9k3hKmNCDzzcnv54HMhjAak2LGooAF4ovZjxrrEgtFJ38hEkGvwgftgubR4yrKLrTxquXeMPuY3Zp3MCPEi",
  "key30": "4ig5fdhdXJ14MG2SNbV4HrLv2N5x6CmgJWa4pVK1eVpzmHwYU1WGz9yvswShD8oeVc1Mne9oHP3yc3zeGBV14d6z",
  "key31": "4dzSJWcc1Snzc6mMMrFdykxEA1UdfdEspTHmDNsizkw7MvWXvhuiW8jaHtVJLJ3PqkLcF3YQAVT7ciSUKEt9Ahmf",
  "key32": "4cRrDc5NEthioU5FR2mbUGCfDhHZ9WdwcPEwwnS5fuZWBoXJRtcA9m7qSqXXMNzPAGnv1kk3cUSejmXPAe6aWgaF",
  "key33": "5DcUY8cSVvzWDYm8cXEyARSLtjd5uBaCGcBsuSAiEgJqqDMqk2j8xjbBGVtJR6cm6hu8BrWWHiBoJxNBCxCQFL1m",
  "key34": "2vMPz7EWWmJKB4r66azvJMTEJ64ss2Xd1omRyYskyjp9rNafgCoAwboTjCUmp9PZqGpWHBqgnt2dhJzkogBJvboJ",
  "key35": "5ij6e34tMrvDJkUpogf9FMj5LkpPpJHrGF6L1epXrMrmFqsn75qR1fdfHM7ovjEUdAUrjGWw11hsdBdszFMvbryL",
  "key36": "2SBBqvYBjXMqtjJS19zbHYFchSVYKgBjSGTmNNXmuTgJ2p6egvgsChV9KEnafmvkPTRmFKHSYRxANGPV43rnGgdz",
  "key37": "ngqnzwY7HVHUw1921bxCivUofUvWfUBGFCUbV8CRjrvpiVfJ74m9b95qpYdk6kNRhwWuVAfngkZpA5RjG1TcvrW",
  "key38": "2ytENXsqNMtDF7bU9Lsr8TStAZLpz2z5ckd8QRHjgw8o2Q9WhtCTsKmX8Z5QsQsHrLn1naGjU2G2aP7oXhX4hF8p",
  "key39": "wV5uniWEVe6KpGJD82XDvdbb1kbdjAioMiizN38XQFjiuaZJXo5inQrwDJypEp6N1zDDundfCYxHpTdbofJaYXN",
  "key40": "AAYwHyWAHLDaUVr31mGhpxBeaF1msknBS4fbGX2Gj3DvuEY1VR57gjoBCVEYSDJAzo1hz5wtVBYDGhAuUVoJvJU",
  "key41": "3bGprhy1Yaw6stjNsnZaJ7yFw17irrQL3Qeb5xWBq3qKPix8m5G7DAQifmhcRLthpBqYVkPMpcsZMh9aTH2NQC9Z",
  "key42": "5jtL94GXVfm5vNYSCFf3BaZZpz9P5c9gE5u49HpZ2VTsGWhUmySxW4oscAWthEUrVNyHgj9Q1HN7QHiEb1JhQ3GT",
  "key43": "h21yas8x8JsZA4Acd5rDpwdfxDLxbBYBAvdLVcQQV6LVb1qhe2pKkykgfBqwLV3FFoth2h95KNTT3k9RjBpdugc",
  "key44": "2mKGgqe5d6PGpTDiE2GZhZ4UgyLbSya9Yq442PJUZsfz4GpohsjC2aUYHv2hWY4SLhWU1oKRfRqH1jVcny9MSygV",
  "key45": "4ffzt5ogGf15t197QUSoCpYz95K77C7uSzC5QfFF1pb85wkdHGaiqiqckP7ZGqFYViRDnmLVBfMh5ted7GuSBauk",
  "key46": "67VrVce4KTMGZTRsDrV7uB1waMBCo97qiJmu4rjdqYeeYwGkSJjXqAHK5KX61wndDT3Jvb85fB7Uz83zkdLcEgmo",
  "key47": "2XMtMAA6qQkydxYbyWpED1S9iUFHkSR2aqeTnK6fNe7De58rCqtUqbqEAtv3DiC4WNuAEmsBisX5ZV78aNzSJ3vM",
  "key48": "Gm7ceydyheGM6dFoxgMeez5oo6Y3LUtMMSXqGeL5GVfckmG35hTNW7k2ff3Mqo7xTkjNVVBv3cmPefYrtjZwgiZ",
  "key49": "rzWqnUqKb1FahFLVcWtdb3ycYK99MUhTNd5gd5edjKuYVP5yCX3FR91jLctrCaC1L52EhfKnHSSCYHV9yuuPfKZ"
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
