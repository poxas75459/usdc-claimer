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
    "2eHv8F1CoDtJK288AFG6hnSfXnCfc3M3o2oL88W9Tm9zcJGHyjUTMe287UbqxfSjgLJNJQDewWdUBq3EJb74eN8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CGe9cnqYHTLHBPLVL9s7PthyUYX43vyDigQG1urC8HJJdt4Rp7fKdAA6K3T143iqkpm3Sb2B7KhMMvR4x99RHFA",
  "key1": "C3CmZB9uNHdVY1nqWfXcJo7JaDtcZcLg3Gpr9kVu2bx9Xutcx13TeyQtegMBjvK6ehRBUDDEDECdFabKH5bugeK",
  "key2": "3hVC6pmHHLc1hxDy5d6DnQtkpaC3QY4mvjvQkc4vM1Tb6pTdGUbmC7TL2o2JAVDA5zB9AqMUPsYP4DYohXjm9L7U",
  "key3": "4YMjdGQWrkPQgL7t19XHWrDDVhMhoyz2gAGPHuJjXSf6FiRUykTbTAfXq1VfJT7viVT9amAb24dL1yv9PU5oHcub",
  "key4": "63dXoHaaqdE2v7bT8B9AmquXRJuy6EeyJKzhq1kkCCA7sqxWSMYDKbFvySSsmTfNMCZsMgodaegxMGWr5FaT4CkN",
  "key5": "3FdN9W7HFkQodrK2jABLdKxesL2HKLiLGbb8TTQmRVQ1goipe3B1QXxXq64AtSvXYYA1uiNLuGFVPZnVC86zbjdJ",
  "key6": "21u5aNsA7SXpnE8i17tSt6WbK2eU3oVpUdgVAywriDxZgGFA7rZ9N3UYf4HgggXHW4uaDRjqzQA8cZBqkvLXbopM",
  "key7": "5w4k1D4BmeZcCGtfxAPr8L3iYfqdtHCcQfqxULjAJzJz93abtf8MADDNhCBBgpxVh7AtNy6Ewp3HedJEYvHN3L3P",
  "key8": "5pzNFecZUNqNTdiF8fqHqTM3m3gpx3wEznUC2VsVWpcYD1LchmZ7ukE6M2ZmmBtP7FUTptjk7Kh5cugRcRs5Pzqs",
  "key9": "58PR7551QjZ35CbykAuYWB7HJk8FBVLNaUXeUPvrCenVg1kDSiNEGBM3i2AxDGJvXgHD1zX4ogPZ6qQhrmmyhimF",
  "key10": "jUJHUCa8dH4hygjPUKjHyR83jhbfFHrttfmbaP3zqc5tyN5nVWT5P4cGRpjSXfwP5HVrAyUsTVwQYosfkF13J8U",
  "key11": "3mzBscKSWSNaJQbtKi7SBHgr8d7DpMdG6yzhvwquLyWv3TY9aSU9QAxxJmPBv9DdJB9JXnnwhzwTwjCd1N5CHKD",
  "key12": "3pzyCQqajiKBVoHasJqPyHCHuFkChvxhif5ozLBGget6bs2paob3i5DSoxfyDLNL3cPEQUg3JKsokibZ9Du8jexD",
  "key13": "335E3DvaovHhcUGx6aCqcGnZ2CpGwnT9jJHb7X7rgMEv4Q5nDADFBBjACqCKS4veNouDzQfhYd7ydifbvwQBNQUT",
  "key14": "39TN3H4J5VTKb3VxixrGYLbGtavwctRFKaptekro4GZQa9zi1rYbawtxhBHHPWP8FD2k8RdBUj8fPsB8k3V4dv4P",
  "key15": "4AAB8p9AesjYithrSGQ1YoWD2GZecHSNHxNPExZXZyRjFuThFdrYPC9iv2NSNgo29ypcNEx4bZjncRTWLqBZ4moh",
  "key16": "xF3in12mJ8MnkGuq5EwuN2gMwNZKLGmqbpSXhSgEs4bvPk3yf5wi8DKmKXS6v4BLAQto9WUySS5E3CaPRdTzyS7",
  "key17": "2HYhnQLkcG4D799dMLi6DT6MmZi1ADUroFzg1TV9L7FNUeQQXTrEJ5QXZAWQLirtGRwupJ3Ad9afUcZunyXLNpT4",
  "key18": "dTLdVLeSjEkGHv6uUSkwHxQbfGf9hjr41hdWeYGspH8gTqvfFuN5tAhM2pQ1XmvSk3JoY3sfkrkuprQozXKwnUh",
  "key19": "4bxc6tfLMssv1qrw1VYwgWNXD7spupVkJ2uE3EVY7iUu3he281MCqwR5xiUD7uHak6v4nXbu45NVry2oYgFjSKYP",
  "key20": "hTuHsin4SVLYfHHvx8Kazy9GogHHTjqWWF1hwFdUbW7S2kUiWeuGEe26kQAZLWHFu9Y3NYccTYnNJuSGfUj994c",
  "key21": "5nVbcfHHqkj9T4xWhB387Hn4TDMfXNygggzmsUJDkbTW62Fjz3hWbAFMw87z5LAJVzUf2qHMpuhZZDywP3yq5V42",
  "key22": "nXh8BL9WYrrbZWEKwdR7EsYubGFY4RgkjxotZKeRXseRcojjKVCSTtNDehSNC8pqHEFJdD1Mxa8kXQ1PRcv4nKF",
  "key23": "2FUfERML2G9kA7WNgQbYCEJuKe9sTW3a6Ba1qCvAM5znA6Pcysoa6RdTJtbgQrhLcGMDaS5yHX4vYuHMNAaZNbj1",
  "key24": "3fVvtAqaiMjwTxgmDS9Td1gTvY1SqKR9i48hesEc9qkrusTvjpEstkDswC2RB1JwSbYvnBjNasdJq7ZxGcpphTBF",
  "key25": "tiZQLKpJpZwmAJULHwpvAMBhNoo37wFXXRXnEVXMspKHSFrAcivCs1qNCNsCrUX5JjGAT4BqRojk2iS9cAvhdDW",
  "key26": "5sG52hQrmpUZ2aZccV652T7saXh83et7FMBJt4HDkhz6vghwMsu83LaedYDQiPeUvUNr5HNez4C6iKcfWBNxqYYq",
  "key27": "3tNRH2pNbdGS2bJ4zMfdKPigtZySoFpd1fuVTzU3LwoboRjX8BG5sqrsezFFveqhrFW5ydA8YJWGdkoqiJu9aPQ2",
  "key28": "4bqVGPBXfU5qAtSJbxZ1cJaJThAuaynfNGzHN8WrhUT8bboTe1XVTDqhLtYMS3fNvHBJiEekcmjw7XSDpo9jALgq",
  "key29": "26V3ZY7zvhHgeHyQGUBWPEBrYbVAgPGWqxY1nW2e3bKiGsWXpVevpwGeA5xJK5Ay4nLwSUBGd1xUcBuot71bjUZb",
  "key30": "56CLSqYETM1TSYfuVE3N5gQvYh6uyGKPsb86VXRs785Z5xdvDPRqc1XQVoMjswG6UF1722FNXhxXPGgNax257Bvq",
  "key31": "Zok3sHxrAGrWXFrJv1q9M1T6XCozBzKUjwhgH7hKtVhTfDxPRqfaJJ8tHnLYDwvrH6D1h5rvQHs1yRZK7Lp5eSU",
  "key32": "371Nhizs53UU3VpH7caEeqbtwY32j4kSvabViG9Qv7AHYuTm4YbC9JHqqAx92LE8N9QEfJrbxJphdEMJzRvndwcW",
  "key33": "5MHdQME4e4QJGt4sFFKXU3tzGvECrd7VGSQdjU4eZUqjobodEfTEFTQNSgoF5ZihH7a5oSfbEJTSazniD2aGLP2C",
  "key34": "4YFmPcX28k8fHdgsLDGt6f3QPuPpncrfjkzEG2rLphDCWU895FGndUGRtWmovbgNW2fCRvgczEhijxsHFxsNE8dY",
  "key35": "5W5Pd41fiWYzZHCk3spv8RWeFDhJULkt8XQ87XZcrX8BiuM4M9DtuhShhKKhViTDfsAqwNMbAdAjfi5ZZCSmQiXS",
  "key36": "3xwSMK9b9DKpLh7F8jaatWiD3gqW6fBxjnCrgZLiGigW8VZfmAbSeFbWwsz3B55XHL7KLw2GYVuqnebQSQmac16Y",
  "key37": "5TQxLLmkmCoqfLkVxcmKHYneDEnw3b9LccPu8gnypH1MmDNKDfYA8VzAEWhN5pWvfKScHtMfNavztS8WUCM2TeDa",
  "key38": "2E52VeSEhvbwJx1tZ1hAfBpkjnbyoS4jMarUx9dPMQ9ZQtheK7n7y3Z5TijiUWLNmg5CARo8p5YhFP4DwZjVkQWb",
  "key39": "3Qfa6daXgZKePMbDqS1eTcBFjbbHPVVEicqB3z9CCQWh7SzNCGefzbW3GvVfkGAjBJWUdNbPaCm92F7yoQDTsmDy",
  "key40": "4L7idL2MQxDLvjYiseNG8MsFnyb64NmiyXgyJjYeQhA59RP6HiAcRK9Gs8SB5GdyLiA2hqezE57MyGQYmccUL5Cx"
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
