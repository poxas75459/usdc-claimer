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
    "5x1x4iFp5kNzzCDTXfinud4gmGV9fXRiiQP3MuLhKEqZfzFQGBnU2QA3bcN499DUU1kNVDymbuJP4ZUfUVEEdf7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hEYEQeB4r1A8mVCuyB3idTjjG5pjZtdPFwMRbecRzuXSPKJ2fuJCvAdqjJPnTTAHDZrJw37wQpQ4W88RpyM7Xv5",
  "key1": "5Uf53HxvihW9pbrd3JFt3vffZPchCZFFrUpZ2S1UwExB31zWdCUyt6MCZH8ZjF2tMqKNceF33pM8V2GCsHFTBLs",
  "key2": "5DJxqCXfpcMCNs1papsbPN1yNXfNDnEUWfDCY4kWeLtDTFisn4iNvKxHGAC6KTVan1yvPV8t7qmJeZVAmmjNng2r",
  "key3": "5kKnqvGgJjXqgnVgfKGoECZrZ7mDdxsBvBpknWUuyyTTz236N1ArfNtPJSjD4u61sJu4VUutYq9vsiTX1ZBT3T9D",
  "key4": "664aRgoqKVxKF2HKX6M66TPowfNcDBMRiJjiuBswBGhCdKjRs5Chav7D8eo7C62zNp1BdrZxEXmnzSyxM3mGLNMD",
  "key5": "3tZQmdBuxWZaeuZ1ehBV6pe4dHF4dMxMVKZaBk6He34J4oH8oV8eNyJpUBveu9dGNwbiUrqWRqSMYpnPt9CrEgkF",
  "key6": "59dCvdFbyTkeJ8ZZyzunRo8j6JjZKXrh12Uydbe6rGtSVKe4MzVLQC5mxfePq4RZACdFDkMrKX6AXoApdV53FYT5",
  "key7": "5MspkdX3r8vcKBB2YVa1iTtbeVWtqMWZ7hLFSCwSmR1QqeqKnGMDPUft8jgMqz2HA5uuzFc4Ybd8d96KzoRGv1Be",
  "key8": "4U5saX6VgB3s1HYMC5553nzrWQNjxtktCLzWpDFqkssToTdUfCDt52wXuQH841UokRh5GQwoRH89xKSBPFS6NKLe",
  "key9": "QpPSaxVc8TrHifC9WTU4uWCV43NtKov7Fe8MaYnTY7rsXgEqy72bKrgzN9PzpPJycceEh86EP1prnVnN6fFL8DN",
  "key10": "ksiVpuT7b9jzzbhF3cvfbuVdZHXraBTBUPMybfyVX23itGXDmTGTQ1kGsZxQTv5vNu6zK7rNqrhJVgGpQKXcQR1",
  "key11": "LYaP66Y7RP6u4iYgABgKDmshn3BaAMSj3upPotB7gMGyjXk6EVrWNTZkdZ8CwSBRRCq1cYkE3KnvXUCkEEdz3iV",
  "key12": "2RBqsWkbrzmBEm4gQ8akKjj1TJsY6kRyF9mAdVhPwWucEKxrMHJhHnib5ywzuYkS1wdJwGHGBtpUtmsrM4mHr8iL",
  "key13": "3i7LKftvVUAxwZiTvTpvsm3KFTwf7Lvos6VKa5F6weqs6iyWAo7WzYJpiXE4LfvnBQGHNMaC81VhddujEXDtqSVk",
  "key14": "4YpEKxoCVQupZ1MRPAs9p6XYeud3qgyuTTAZk9edJ1Ei85w72D5kDGxYqNMF2RREEabvKSjGh18vMRDeAX5YAsxx",
  "key15": "rod3HNX44UAorL4EL76mxuKjAZm72qc8oJjpC8jtK7YfspmZkmbv4eNXzQ5bubU1bCwKuqAqpsb1yvCCr2s45up",
  "key16": "4hLGcTGYRAcnQ29RgVS8cVPMLW2wHbrYwbq6MJcxdVW8MBZyQLUUgRbfyxVEA7RxXfB4DgiHdJ54D3W13JMoNd7T",
  "key17": "sctk9VQsHR7GpuMXNGLjG8BoEDCQHFcBvw1bZaRjesGCCqyf97RJgEaSKptfth4yU2eFx1mVJ8DUaWeusQpBNEC",
  "key18": "29dW4poCy8ur5htCTz5NGkNUHpZz84GAQP98Qy8UkuXrDGNJbtL1Dy8kdHTfUeDPHJiNMSCWwMBVYeAfFLGHxUyJ",
  "key19": "31rLdo2wsRDdqRAa1Qnprc8HiiYRj7fxYSpRDTZiAtVEHnbULpYowmgKVtk66KEAhQqDRRneNgPpHRMEWNEEinTa",
  "key20": "vpopheNEanePkNHYZ3sAjUqz8MpMEq8bGzi2KTfpCaTqegiqgkz2eq4cBrvTSi2uKfGCwxHgjBhqTrCEHL7PAcA",
  "key21": "3CygEeATTjJzkFCsMddooQRiuoYkyE8uj9oFMadVu5NULco1twggptxs4yrhDk6rXvdVcdXsyFmLiCMSThDbaeqE",
  "key22": "3PvG57RF5rc42jt9nBF51eeesUWioRpLdJQ5mUVcRi9GdnQQzTHLJ3FTdMag8hybWCHbDKxQHSsF8F3oYQdmXmgy",
  "key23": "58zyBoDShVhiEgP97EJXQKDVvLPivNPkEL6xUj63Kv5S1mGr3BN9Pue2uJqWe5rQGtBnQkuHmLTGUyaiaa8t32Va",
  "key24": "RurPC1W2g9aPak94a54qNKLZJmJShtVirHk5omqV5RBhKBjTtXJVgdxdwAdyUNNwwyTFcFSvBrcXcE1QuGhuBrG",
  "key25": "4aD8rCu6QKMZsDZEr9HEU7BRnfVnXGEts1KN9Up7gKXySiPaZ2fcSWjYNRSYQVcoVUikSdUi8xgZstfPANXMAuHV",
  "key26": "SeKzUZ48xTZb47U1PNmWRBudiKe1JrA2BwfqG9bk2XpHjCUgzUAJLTU38ttqfPZntN8MVzjvuZg3KvSy7MUCsJ3",
  "key27": "31pvFsNGwmB7Y61E9F1LT1NqfwUJjP59vXVYPaXHgXkQHRVSWEU4pybLB3fGr6NzWRAARyEfaBhn9Pt1tGKV8ZeG",
  "key28": "3ki5KuFW2TpeyYASPybetdeGRNe3npdGZo872SQogMLAM9QheXgDFt2TfTj9GMMFUzC1f8nDtuEai7Vt1JGJuN96",
  "key29": "4ZB2tRdCnAb7EqsWeWqxenMyEcndrVBJbsCAd8ukxmgB8rqaJVrcqV2f3zUmxsLCzqLUWfxrVWTt1xe5BhYRJK7b",
  "key30": "5HnF6nZK8LtH5M9XDqDbUnaRj9DHdY4t3j2o7jcXpvw9vVb17FVKaUUppAK6ztgcdAeNLf6WRwLPH3q7o37zCE6y",
  "key31": "21TET3m2XuBaE9eMKTKGWRzKRXPyXd1bhL3sKx9i9rEvuMorhRmfrkFbF9HmQgn5SinHHtoMTsWe5b49XH8V4gD6",
  "key32": "2oZQutNXJFfghHqepy5icL9YPUxUVp64dF3MoUj6oCGEL3zSWyWcqoY4JzNkg1Pta4ZjNxw8THr2NXqqky7SfaHx",
  "key33": "5LSEourLgGNYXUbACgdciPmfqbVcf3PCuiLexkYPBtKHu7CaGVuUZVGrTyTaXcYiaN5pX7bekYhPTqe2ffGJdH6Q",
  "key34": "Jv8jcFtm6sR6YvYoGUSYVkyCMSusqtRKvo74UCnfY96QZYpdn9nEQrUBmuHa3Z8N6pCgvCYmEFwU6BP2fgF8BTo",
  "key35": "dmZ2tMq699NqweyTeyqF4UbmCVkWgkb2GVcF84BoKM6recKxUyoZPUj1TNAVC9HQ9Tz4D9APcEz9UEgFWm5tvwA",
  "key36": "4rWBPofnFuHz42WKvKUuAagbdWPgd6pS2ATFG94GZrBHj8EubUSmbyTZRz387zntms4zhP5eQWqdmUiVrjiP36Fg",
  "key37": "3VMFHQdYVyBpg7W2oSkAfMFZcBT3J3dfyBeDWbsrsxaX3V9ui7B6ae6k92ggT2CcYkt38hTYpNNWy2EfHikY13Cg",
  "key38": "33bVuxerW2cqAgZoDFbK7vXbEikhb4EwiTXFfeRvtDa1ChqwWwgjXMeEAB9GTDC5kToSc1mtn11X1hndSiRQGcaW",
  "key39": "gETCG8aub12v5ZWq35h2gY1Qw91845xPs5X4cAj3TXGsRkR6u2KUK5qj7bCoUgAk4AsipDqywc31tVkDfB1c1S1",
  "key40": "5PSWME1NNjBJdoyxyiB67dHqCa3ztCGVZW8FsGdwNmLh63HZRc7GYJ2dfB2fqnaCeoSXvMXCLH65LyrtwYgGWAG3",
  "key41": "31JCHx8qRJyA83LJUXZF8jU1ezqaLFfDXQWMEC24LCa3hRmtX2qDdUAVubpDjofg7YtrgGv1GTUQa1CFQRzjyt9x",
  "key42": "5HYLQ1D3aJfXg2GjJT6GSMC8anptLNpMi2iyXJGM4ZD5mJwLJfrvM6xhZpYzEkHUgh5XFXqSNMeCjKLZSjCfmfji",
  "key43": "3fy4MVe3mmCm6dhvaYk7uPQrJpNM35kY9AUajLF84ADTeoXJaV1NbQEmLuArbHdAJywuebmhjtnAydAr5svz6ajb",
  "key44": "22w2CSoLXDYMQSov7GJqfzh8CRSnXUv1UuiaSLXToCRmzetD9LavLaYEs34Jxs11RTrn5vEDwpzKfdompbX8hhwB",
  "key45": "3bCjX24bzUyiRwAJHmJcYu9fTCeZFyiVYqAmaxGoCSVUQy7PA4mWSnS1xoJnFTY4693nxpywiTzWh8Aeup5w3Pvs",
  "key46": "4C6irMjV4ujwPdVfQtoP31LK4iuVotiuVsSXdCpmUC7bMSx773gpYCJnyedPS9Q3hMS26T7BnT6CwqTAxRSnfaNx",
  "key47": "oMCYWaT1HDVcHoGkmMQ1u8ifuVkF4vBVX8BfRSV8U9CGD8DVLR5yprcmNvrFML7KLWehc1xYp4oqBWK977sLo63"
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
