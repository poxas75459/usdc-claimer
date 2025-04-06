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
    "66Kga7veUXRMVHUHvPNnX8aqcxuGurTpcwrsk41YA36WwHF4uq2fpXaXDjdZPJasm5Zihq9bcXCDeDeAEopuwHuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Rt3s8fEjEfWVS6sK1xvxwnv47cMZ8TgiqgcupK5Qi7sa3hqtb2ecYqb5Fhe5jbJkQix9SL2LzuXbYCKEez9tmg",
  "key1": "4hbhri7gKkSov9SDuYSkQ7KWCmfUcBG6yV4fkXX3iB72y3sbWvHbK4qFGWvoNAAEyk3LmL9DXzQ77wonP7M5HVkb",
  "key2": "3aaZ1WvaE7aB9ttkkqRdtrvTzQwjDwDFkTCTScjxWpB86Tno6mzNArVewnMWDANgkuVtpERvBYrCsYakYiuu1Dkr",
  "key3": "2kReCuDtGTHgHwCY4VnwyBqxgmXHUF8kBXrX68B5fh7XQNJpK3p3haxC7xjmrTtBarFWJ8iDs21FzJeA9sCEnGRm",
  "key4": "3Z1dp2YWybx1v4VBdY5ECKBrPgcvyo8VWiPLesztFrUNMENdJzqr1QFSfNMutiyEmyXRmWKZGhsZ2UZ2SRnKp6bN",
  "key5": "5KeYsMa2VSxFe37qsWzu1jctj7XNCGPJUTtzX1yiHvLmrK2ir3q8ZG5p3Fyo3jKkx99JU636cW59tyGF61AwfWq",
  "key6": "4hFQwjZtRJmFmLghjQu8V2bJHyFMDn5NzW7WjNpMpX2phHs7L81UgsQ5wcJasBzevMTWUUxhKHqWKFmEZsmnB92t",
  "key7": "41sUAzCqBC34U8FFwNrVQSUNQ58fhHr1NConSi4o4d4bzrya8DnpVJxUFrUyemkPhLXo9ZREtzU7WtKdvFLufSkk",
  "key8": "58mQerFJVJZ1ZcGkwEckW8wHeHBnsxfcYBGeLXMjJCDX5YASYBiWFymHheeSPRUAmbuYmTyQVuMf1H1nnQUxWBBb",
  "key9": "3y9Y23gL9gQJbVfXCgnGV8Vhu82rcEFfVQoouRALhMSS8PeDkxVR54n68JVifExMNHF1x714hcekPcQCLfWw1GEt",
  "key10": "5NrFm2K5hsJeSmkLrxB3PjvTuzNHgcjYEUPQVQZzKD6hb21vXjeQ863GThs18UpoyVzApvFiPmz8NBiuwFvuq1HD",
  "key11": "5kquAw9mmr3cmAdXVVp9TBd1qMENUs7png2UeS7wHjG9fEAzjNqDjKLhtiWbUQ7Ybab8q2NAY5M3k3v1Fftw2bH9",
  "key12": "39aoHhm9G8P3gbuoKknDEpcrxgaRULe3MkzPVomyv9bch48ULPtRMgBAi8DX9bh28mUMvWrjSdVpa3tMeqjcyxLv",
  "key13": "3SVHm9UE4JPExFa2jn5BifT7Try3zVUmCp47Ea7z27Twr3ViqL7WCe7BdnCefx6RhJkQR3KvmLAtmYvjyMyvw5Ln",
  "key14": "Nau8dNj7ehfZrzMdUW6Ti6Dq3n5XnwAgSkrSymYHPVxvo3PBWu2HgVpbuM8h57xH7qYS7Qiv4vkzh2YDcdV7Q2p",
  "key15": "f2Fkjc7T2WWAe85q5vPiJf63vUhbpCwNnXLuX6QNBZoguRsKHLGqbR2q1JjvUybTFJLJ2DPDNChaRr7p5yskbDZ",
  "key16": "2QQNkJ82pberL6nWi56P3m5ACT2n7Nt3sF1PKga5Yssm64ZXm2STwQCCeTRQ3x4QPbX3VJdWEHeUhZL24T9AmMcB",
  "key17": "ZhQgiVR4V4G41Xy8QZVh8ELDpPMLsSunjcyEoFrVtXQnmLY5RsojkuQ4MsDcFeC9ESgPCYoApt9V9pxzSpD546C",
  "key18": "3uLQDgMqRPwDbLXw4TJBQjsCwgsC1pQXSZKHMjUU7diBYMfehTArw8wUozQFeUSxZddMoWW5JK8nGgC5ue8sSKH1",
  "key19": "oAFuoacMoPeVgYu4DSdYZ3KRHeuWpgFbqs6cEemPjjuqhNYpCT1sJJNXyhua9dXQzb4yAnVu5No3XrB58pZdA2M",
  "key20": "XTZuRMqF21uLy3gVEhjG4oo4BMXEcui3SknnGnqc4Eq4znWpSU83JeEMHx39uLME9dwoSvuk8sVXA25c2GKqB3d",
  "key21": "4pjzryPt9XBDSSsN6kKRPeg5BPC69muVP99xZ8aMpo2zWoqEfrPTjZ9ttKTZGpGX9GrFXcXqarEizM1hoX6RcQ2v",
  "key22": "p4E5nKuhjfzJmzMKEBbdhtn9bTmUm32wVVRvHJygkH3r9RN7eRJS2GUghctdnpHbfwMGk8EnFNAKkPZjVb5NjpA",
  "key23": "5cT7ZyZMWJDZeG6cPN5VoEuqrTAmFkiDxagjQnfyPBDXqrAa2E8gToZkGvfBsh5x3G8SrtAyZbmfKgsfqmwFAAHe",
  "key24": "cMuF9YjE5reWRGECX9uqRJdPyWvVL9ApujqQPefTctg7nxnKHxBGUGs4p6jCMbwXXYDEmZaXxdGWZAD2LF7eVsu",
  "key25": "vXYJqF7SHQbtFf7PzPdZZiRgTgo21w5qRH9Av5V276tWmwvGDw7KaqiweF4hZFzoPV8Unw6tNJTmADmMG8CLA9G",
  "key26": "5vfKhRfSg7bbgRxo5TvAcEw7gAy4nkHF7XBMLWrtPXYqSCiwRACvFseVudZenuJ558U4qMrL2VC76VCHhhWHNAGC",
  "key27": "3Eux8wPYnpZVunfx7E3beexkhGHe8vXqMuVf3J4FMsAGcMqSYWUFbwZCRA8VVFMFvGDdPD6Uh8gQwbjq8u1osCeV",
  "key28": "2YjnPQrp3ejkJ7B9XBWLthWgTK25quAM9czjk2Hvn8vPHyjfGxEGN5DFr2YbLdwioG6pbBwNUDtytgM7mDggj5yK",
  "key29": "QzZ8HMzF7uALCJumZUWkxwvDB2jjE4UVdjfWF434kUHAtmqk5vjbtg7gGzgyUYZ57Wai7p3tm24ahPinmKRucQB",
  "key30": "473SEnSDwTmvcHnBSnEdxw4ydESkgJaPyb3zbPgBxJtmTGbvtU4xiMj4Tz1Gjkpw8FecVvXTDYnadHSvkT42GJfD",
  "key31": "ASmj7NLyqeDm6NFACAwCMB6JWNCKAD2tc5bYrUouwPb7FG8bxy8GvuU3tLMiFS5G5oemGTxe6ZRokj57SqpgkJz",
  "key32": "5Acxz6Vsk38fG1wiKjiQc82M66hscu5VtM94h9M4oH5xNMSzyFFNiaqCoTG3oFGLMGGbECbaBuDsPwNNY3uLkAJx",
  "key33": "2SJtQ8jY5ZQVMLjDaHUb6hCFiXJHdNbyiwnVmr5WAFXg9AfHvEWLwoijWpsbNTV86iLb5aMZ7U3oYbCKUCNohmX7",
  "key34": "2X594V9NWCQpmZkJ3DwWkERNrG1iwdqL8Px1XvBbJgmd6r2cduu9G5jJEhf543YjpdYrGtnMM9UdNWhawn88ezKn",
  "key35": "2yqKQwrukGggAHyWvCcw5jtgv1gEwQkqpVrsUrJSDFg2Cp81zPqn9UxatJdHbUh5WhdzX5TpMsmkWXMeensGxVvG",
  "key36": "56qnH4McD6kd7S4kFiFAGrHiuu5NVgPzwUw3tqtY5iDxQ4v8dt5oJTW1bDzMB1LxNazhMc2CMKGeNvmZZW8goeEw",
  "key37": "2kGzTaBhDFknsZ7mCipaqDfkFLFDPgTv1iTHE4YobYXPMd6v9nuVLENkY5JgdTqZod8Cdt6tVnaZECPrYFdN432C",
  "key38": "b2JcgRxWvLWLseALFYbaFt5g4WjGD7ZoE5NHNNxgEYSYcCoSntwRttEUTBev8H5QTmcumU3U9wM4jmbjd3yFzEA",
  "key39": "4JmyABcUf4GbjbytW5sAxYPV3YPATcXF2qsRLgRbQL4y56gmWUU4q6yu99dUSrNRarHckDHF56WAvK4oXvwc4iE5",
  "key40": "8Qedkp4MRWrsYDrpbmUfKkEkTtGfeakXM7yFwryK5yLyDawqb32MXSG1kkPNjS3qXx6NhC2ijXMP2qqSbd9af4o",
  "key41": "655a8xoC8LEUwSHLFFSsbFAhEFcb6NGTjF5NC3QHUcZUYMsNp7V4DANpTNU4K8RDkW5tizgNeCQiaSNhqhQgQu1E",
  "key42": "UAa5cfzQdShettm8jzG85uEHqE8g7FdzToDK8LjAVpRW9cNCCG9Vk8cci1aCehvHT3qF5JCKtHS68cdajmAjBdx",
  "key43": "5d5hZnnKUoS26GXWVpPfQuTo9XfTbXNJnwKaFihUFRpijK7SkvwZH9Uu975WowpbqtBC6oE6Rtzzovh3p4mju9ok",
  "key44": "3XDWTKPkgdhgEKMzPsvGbbyvL9m6jTN7tEKDK7S3K63LRaZBtugWXxWpoBKbzUbVYJ3A5WtNNtaphW546FWVWMwX",
  "key45": "UAEX2y7xudGYCEq3w44hfvDgKyUx63tFy79cQvopXjwH4T5oPRim2qhi3FwVDzSKfUVLfiqs8NGKQ549ReT6Cwr",
  "key46": "632rNR3KiDrCTQUbiLbq9WVbTRymhswPZ732RVJWMHeUekNokN13riMReHhyXTvKpKfJ9adCfUQFg5tti9Ur6DT5",
  "key47": "3btyk51rMMnhaxLU9PRVp2JSYHNXnfUWRWM2JxwRDmrYM3EEFxXAsGgEqMk7GJTtmGgxgDHSaD26MjnrtHRgehc9"
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
