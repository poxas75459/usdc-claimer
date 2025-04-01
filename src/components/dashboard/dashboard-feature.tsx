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
    "9PB4WtrgLbUeFU3m8xH9BnZrQi62uc6oHh4Z4qBvG7N4cS4N5z8h1CHyvp6ovNsFpbTvqvM3oGnztkgjJmLNnaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qckcJwbgy7wV9iHUvEN4xmYDW51ezLwFdWuAaJWkKRX5Dxjzdy94DaKkFnue4daBhgD6EyERkuZGHoRwRAGgx57",
  "key1": "36jtH2dzaHXa29pmCtj55suKgfNrwp1jpfJurhX8xpaSvGaFgf5fSgJRGE1SGfAen3huQpsc9Abevp8UaziB5Rk9",
  "key2": "4Du5csXGVoSKxiTvFeSwFPiXrHUR6Wk1LBjoU4HbtUXGDZDdqVZMTtGNLit8zEM7AyjBtJyySDzhUhPtjERYrEhv",
  "key3": "3VTmc9zkfVB6wCGB3mFEHn5toA7JGEPXvr7f4HqzhuWEAnHKzDs8JQ968TKwWhSpMLRZRq75Tv1EBaa96Es7FKEY",
  "key4": "3DwuYpK7WwCYV5Jhof5m84FecNv1nc63hUZbQv1rKSpPvnCah4SuWLMKZi2uub9San1HAiGJywE7gpqN7dupPeFo",
  "key5": "3R5MwbYAwTY25XVb7MEhbzrSnxkeedsbMVpZk8qs6HvW2n6ERvqeg7B4oG4X9NRRofKs1xmtGBRtBB2rSubKRXtH",
  "key6": "7phwYMyvs4bibtRcQhoEACaDK3vnHDUwaskvTQsF29VoWGw5jhCFm1CFcqPjSNyi9CpUPX8Un1hA5EXT4Eo9fKU",
  "key7": "5hdVWzR7toQBS9gTfu8ScNdLSKdxDuSr6EaEvbbNA2sYvboc2Qig7QfUmvxCLXjiP2rbAxPC9VQy9KHCGEbkRR75",
  "key8": "3KioCaWWR9ZLcRKjhinRJ4gbD4fXewVuyocKH786Uy11v3sXyV8xGfWQgKf7E7MidK8H3t9z2wJiMTvWedpc7dBW",
  "key9": "yfsASSQQnNqpxeW7UVevefMqvzAyHg9Y3krXixv4ZDfgzy5xvuGdZpfpJHMX76wWzG4CdfeF1hYvHXroJ6hM5vs",
  "key10": "o8inxMBf6KFRirjM6AyGvghgaXaT8AZrXYnrFxJpcqZTvfUXMXCEoV93ZeDomSKFFQKEjnC5H1uq9JyvLhvTSpk",
  "key11": "UinyTgnvLb4DZdcj4jNbrMFMAhGpxYsNGLMbJ4NEjFygFckTABKvXzWereZQ2khvh4FeuwiSZ7f87jxu3fbgkjN",
  "key12": "QSpgMmibM59cvDa3u7TQRHZmvXsQqCYpqzKDoKvoFdyKxtLenBd7Pu5ESK64tAfiSjCpLGvg8YR6ZxiJ2vUzHpH",
  "key13": "58u75Qjmi4Ap2YGa5cQEA8B4D5fejwsHn42obWNaqF7Eiy4gPfitvCwR8WzgMVtAnBJ9piMa8UouxtN9C6vCjBiZ",
  "key14": "3hDJh3sujBgKrd4ZZz1pj8Pwbv1r29mFdk8Z7vrCQzu8LVPnbyxzVz5zq9tPYTN9rmUSS9tmdSKMcmFBdHAjtQK6",
  "key15": "3zPNMPwdpHk7XsqdP9VStxFjgV5vfvi6RoNGdsARS8DxpETbNM8RJ4tfS6WTPwtVPi5Yz2YNLYsfeEbkyySdjEgo",
  "key16": "4AtWv42o8imPwv8mWVr5vLpP3DCdKzidvJRmjShz1uAGiWi7ecC8JT4TfenssiEdhhWCC3HqjK4mQr8Sb6WPQGYf",
  "key17": "3GZYWADFAKu4LgLcx2W8sypvrL6mGyWtk4DkTZsjAiaj7fwsvLvpFdNzxGAMkUWaSSUtJNWkfVEVFysKFB3dhWEH",
  "key18": "3adKZuK7RCFmCDMAR8wnMH8AjxDvwsvA6C9CNzk53H4PC7FpdCjw3VjnzJ8jA6mCQgZwg64uA9j4eup9k2mkfbpE",
  "key19": "4wQrUauHKhuiFR6rgZLeRSGb9Fu2WPyVPqwmFwXLL7q6gZDJntTyZ5PRPY4QqE1RXK2baQmeUQXdtB7P8p6aAico",
  "key20": "5KqkrzqTKGEfhpNKnFo848Ri9uGE9MLexiDktbt8y7VndvCnpVyQ5FHZqR2SuevHYJyNJeFhyhh84jjpJrLFctkT",
  "key21": "3NtC1YDXJwabeHdwEopk8p5nCDG2UVKDbSZTAyBywk1XrB2gYGAs8qc6j4gFg8T9KKrMV49nJTtN7Ck5wnVHWTkG",
  "key22": "3YXgjmwmee4MKaNxTErpjNP2odBL7a7onD4ZpodGCxGG43Kd3qrSVAjXqrRBDT2kNJGdn6shTxP3H8GFC8cnqKwi",
  "key23": "2CChZxw1LHTQQCt2szWKasdxQy64nTbuZFzb1iiq4t1muj2ZzcowuhgcjXFYegqqFVkREcjFDi5NZW3esZGvacKj",
  "key24": "UtQhasAeCiTLveCua8h5kB696M49daULRcrqfRzJSfrvP6yRtrz8npZHv8LiWM9f43KLFu6GjB8ZjjYfcdh1ge4",
  "key25": "H9meyKtJ3gQUouPiWRoZbdcZb93oFKdHWbmfmmUuJXM6ZmyvF7RttuLdb83paVFbcoGbQ2sZ57cXvwjPuYNchnm",
  "key26": "fjK6hgyjscuwqjenaE6hh2wtRZP8NuHPxZrwToEPcabPF64TofUKq5Fvhz5rCeDNRuf1gWFK995ZMxS4LsxMbWN",
  "key27": "Ycv1hLvELccSDCpVoZsecDF8hCVYpxRQh83v3cwWzebT1LehzqSAkpWBmeq2HzQJWwx1io8p9EdrwXkwRESvY6m",
  "key28": "pt2aHrfZi3K4Ayu82PpERR7zLvPw4CLisCCwAu4X972Qh12wkMYRhh7CkeaLy8YpSU8NvEPR7ZcDkdPWeX4wLey",
  "key29": "2iA1j3VD2hReMHd4mKAHGcGdd9xC4E3Ds1n175xj5pyAAyc8cfmwLKdjYc6qXf8F4GmvjSYctCspMNxy2CxoJPdu",
  "key30": "3gEd5RYbWxfzpF4s9fBjw9q3Pi4Pdit7swGpT36uSts5wb54GbTS2wxqUnZ9RtNP5s3nZaHDaHgpzg67q57utsdV",
  "key31": "8PnSt7NDHN5MucsjK5SpmpppGceExixcg9emANrbMJfp6wHpVwTquB7fBzwZ9kZFHEcZ223CaZXtnJa8WW6Xdv6",
  "key32": "5hPeGpHz4PqtTP4t8tN4biTxXTb39W4jAdtZutNA6ogdDhdkoiJEkHHDxS8nVNxFn8VbtLkpjUK3VMn6iUoFE2P7",
  "key33": "4rF4xypsqqcBsR5i7Zo7Q71JeT3qRZvxSTERyikVXoXFAYepdLNnUwgU4gnhg7W9giLbAdhYYTruffCvzVhvQA1A",
  "key34": "33g77rGvCK54oeHe59EXMPhxL2qMZNkDoXUchJ5DPbGYVyTv5kWHYXMS3MsTFoJLzjgDFhSCC5guGqACCrHxUoJw",
  "key35": "2MvN8iEsqJa3Rwvc9ekWBxYGCcs3GTHWGqYhyjDNXTTcES1kSjdGNycZP57mvrazt6o1WieZnAuvQUX4D2gt9Qqx",
  "key36": "46HCBF1mJWNBZ4V4MRxPhS3wZer6G3N6sFD7ogq5HxWpDJ8HgkMXVEU57wgtb9uibxnaJjN8dsNTZbTpEdKsevBd",
  "key37": "4A8dC6vCFsLieA1EzuXx2oGB6FefiTSFNxWaxbZ1hfzwkvkvVFKzrZMPegmdk3dAhkkwCwAFeWgVTdwgGATd1yhN",
  "key38": "4soPMecpjAwhSuQrJaUNFgpEwMEA7RqvXiv5DWV2QntL1F5uf9xfpaTF2czAG6jbQkBCwxtQLGXnJmTX3pCRtwwv",
  "key39": "5QFk8KeRyDB82FNqEXqiHNpUWq6jSBf7r7LM63h6UNczpj8Pw6WviRJU9SUfarrzH1E6se9ymbKRJ316MdbExqkF",
  "key40": "28rxqxuZb94SNwzDGkWiXh3DHj51qWjPAQoxPyPup33sGhjEqD6c4QXQ7dNoVCLNNP5AdQPFPNw6VnatD6J4giQE",
  "key41": "48fVch29UPc12fcvBPq9qgzoXf31hKui8wE5eATzYWusArydeTmjKeuEDW91ZK46qcmhPqBya7EgJHtth25eshCY",
  "key42": "5j2UksWzQS7bc5uhUBV5gPF7w6ePea7TRszrg6H68U5xGpYcd66uET6bvbEmjbaN6XnZ2sK4x2oezaYxcic4bj8k",
  "key43": "V1X7aR8C8cCcCJT2EYWxbu1LfzTahziE2Mn5cN2wCN8Vftq9XYbsdyzEFuY8bHR6dzmbSin76yR9RfyWYxGZNJk",
  "key44": "5WinPtpdGFXqgUPV52MMnzySxyNb44vo2Ji5xSie1ZvG6VxEEPrATa6Vn1ChsEyng2mX8hLUVEKjo7qwEE9BHdoR",
  "key45": "4Cscpjo3h1FKDaRLe7Lhkbv6mxUcwho7w4o1KBNPQMs5QjfX5NBPMUR4K8iT7c7JAyw9kxzTXGcw8gdzu4w82VbN"
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
