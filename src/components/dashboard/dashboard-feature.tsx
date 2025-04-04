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
    "5NUyb6ZkTdS86LPks57riLec68DTB7gcMv5MF5nL7yhD8cRvj1x3knCvswf5VB2XTrzWoLeb6MP6dzVyABEhWAvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gy4sfAHFHbEJTQWRMLGv5ZAa9ViE4b984gh9KpeKrwRFuyPcGQdL44GBALEeWfqDzmWeJVVAE3H2m8UpoJFyF39",
  "key1": "2d5my3mjgeKsP4qicuLeBeaFxE5N1M7XRVNUDzuqSsGHfAutdjH11sDUA3Zozm6x7WBXTePacBDtq4PtqcFkh7xv",
  "key2": "RDT8EcoedDHaMdpFziMu8Ye7VycZ4jGxdmfR3Q2wSvKkgJKsVZHDEZvBLpyZJcbGvfdGUJjDVyGJRwNMEX9E5L9",
  "key3": "59NgpNLSLkautaCpeypvFknG1GRdtnfVuqoy6bwBJeziZru4uojVJPze9eEo71bEm1oncTmtaECLJ7VU3QggytCy",
  "key4": "4e9PhwDsC8UakKtznyyxGKmR9QoZYvSUmRBf1C6HHuVuPjnzMURzsmfUCprSY7JjFi26Kz3pwvMUAZs1tZRRrYJJ",
  "key5": "23n2aSWPMxPx94RGCYTd5jyD9dX46S8RFC896NTkJ3CaHQCf1ex1NtN2PV5Rr1pTP6BjYXX7A9EDJZteEqgo8LAi",
  "key6": "4xgcBno97yHtCGT9vhLdCxfLBjGihSVik3Hq9SfWw934asJXBuzZTWeez2uvZ35YWmy7j3nNLDaqd5tU1dBYnodY",
  "key7": "4BtYqXj5jwUc3LyKtvx9zfYN9bRNodbFn8RXvVAGDyrnZhAVdbK9g2XcQHawX8yDGZ7N4C5gWPeKjaLH4NGVHFk2",
  "key8": "4UEf6HxNjA7xxHtjUTNPxfmUatJnPv2v7TdnCinpViE8Vq2yyfkN7ZyEAw5aZMic9nRmiQBMjCsANqsJx7wzzJxn",
  "key9": "2WikkggSpD4kKnhxaFqT2NgxMbBUEuXKr4M89G9hCMhcVSfSkmtpzCnfcaf26L1nLFJMD58uUo2jPfR7KbghLQ2e",
  "key10": "4HJRbgicemSH5acwk5pij38sNUGdME9yZcAu1R427qM29AsMz2n1iZhgyxrpUeDLVjXE4j84oLfQDv57QDS1gZES",
  "key11": "3ApRVrxMnpMvqvMsTPhx4nyVJTwFVJoBUM641SNxGuwBJWo5BuShYiiNdVyUAPtG3E53c8NA8kzTZzZ1MHc54Twm",
  "key12": "3cTFoY24VhTTd9XBzokVv5SabKQQS8HZLyMD7SyR3Z7iFMqMmFAet7tWtLg4nbzhvtBbrhZv4ryifJFV47oR8FaZ",
  "key13": "3J1mogm6wZZhV6r4uqp8XHdcfCADRHTvWuyArTH9cbsLRQohjpKg4ogGxLMUizjhS1LLtK76P4TJhRyfJgEGQ1DP",
  "key14": "5x8T6eHb8nKVsbdnkTK34fAF57RMPtpEQEVEHkqow4kAQFhS9rLLvnWt1jMf1SVPTUuF8NTpdqkMinFNk4rzaDm5",
  "key15": "4grN9bzCqdjcDPoKNHFHT16QicRftu5NZx95AXJDAXCUXZEXK2jjvC84Ckwmdgn6sdHrrj7hMBPVS4UVA2nrFRPP",
  "key16": "3LFQvZgTkA3TxJThW2rnLWbGx5RnZhPbyeLJu1ExEmohYP7Sa42DojmjqtAXCwbbFUCCixRudV6vT6w4nRzMUZxL",
  "key17": "5BhtfseZYvbvQHJFuUqxvvqTpyuEBPhXS1k4w9JXcFhF5Ay22rmkJCQkTFPkcw8vgoVfTQw1SKErGaqsovKfBHRa",
  "key18": "5hNQyuec4L8QXazfxpaTN7iaW53DgcHZTnX2bUMt1H7MhD59E6BayKfcBQhmknTHBvyecf9mcG3xUgMoRjKqcXQg",
  "key19": "2LNNNJ6Rf8W9xRiJK8TtbuoidQHPRYxND8BiUcsgHTQfs4u2iXHW1yd29YjWwExyS26hz6hPrU7PqLLTxN3c6khy",
  "key20": "3UwjCn7WSU5s6o4XznYZdotJCFbgbWx8JP4uALG1p6FkG2uHWbkRcwnaF1VDquHw6LDZxsXsoUFAUUw5yv7ZH7k",
  "key21": "2osMMhciCRgvT8S4fsDMzAYTsSUKV7eTTnvZaHXqfjihK19k3e16PHZBbg5vw9nuT6ebhRFime8xiWgn28MBiTT9",
  "key22": "28QMEYtouyLxBQ4dRoyVnSK8cmAe1vhQV9EEkF17RnJZS1K5sJ4XQfr9tsweEt2hBcrRcTBwbS5hJq5hNGTumUHM",
  "key23": "49sRuBWRhcA3ZKVCVu1Hr3k1Lm9YcHW7z5WGtHfz7BBxjAaKS8gJNGvKwA4YDsFLfMaPjKAcEC2ndsJX43RFaZzp",
  "key24": "5iznWJFwtEdgMh4ZajFdyk8xrKswaH7QD77EKJLNSCQMY6NSVMGrA3K2LJUtVtM3eBfGwTK3x6BHuaJkCG9g2Neq",
  "key25": "2LgbKrAw3twxJmqwpQ7TQQ8MJzgxwhN9s9excf9THo3M3FphrNXLNYYv9wHajNYG54Eu9bbqgLdR4HF5YPpTgnHo",
  "key26": "4ZwZbCJ96N4sE4XjiLx314eTXeSWUKVB7pymPrYU38Q774bhfVorppsHZCjT6KutKhKtxVvvdL86EK9gEtcVNxJv",
  "key27": "3cWf6X1WH8tGFnBDecfK8ECZuEwmsz7gUbmDb6ZB4QY3PPTeZ35ffuKx7oYc2Tbd7Cnjk2P3w22ec4n3xB2Bc75Y",
  "key28": "2vgXRSsKpvfie2C4VAawgBSjQkr2wztberVC3tmfyjx2UhiDN1fR5R8zxympS65aDQ72Lrw7jkayaTe3498UoHx5",
  "key29": "vdatiN797ZiyWDHwTYX3aqwU6TPRdk4fj3a37V2mj8DrgouuXF4fC1cnD4rPSoLh7zSRsn5D34Di3PcKEKeaoKP",
  "key30": "2Xzv2NkmnnGydtGLZA9cbw8WQkjchNAesJX4MSFNo98vH8XiFrLuuCaHbdcXoPaJamZnRjQwDDCCcGsDtFQc4Xxv",
  "key31": "5BUzr3vJiYYEXTpWmUBXyEJDkJaRtcyPHxsdWZTw5UnaPNPXS96droN5fR7bao3SDTzYqaqDHTQ587yxob2K1g5S",
  "key32": "5Z1uwQC3E3BLperyqEXgkSZz8xX7D8WYvsnn9gkXGqZSXxtN1nbdLiH47Xu5Ho5CA6SUZSWNJoZs7TqiGXGgPNak",
  "key33": "2Evp25TUjih43UKZe7qeZLeFrpympktPrgUUuiNavX1SCtKJyjqLw6StiNvwbFQ3GPyTE9j8jpMNqDxvewYM7d8Q",
  "key34": "62a3xPLQysxD9WQinGXkPCwbB68o7vw3LEdx6iCdozSRJDM94VZgQUXEditq5vDhN2uVT3TKen8E7eFw9kQD2Ndz",
  "key35": "w57jfUFagN6FcvhwRe8XbwrjzmTUQ8VCdA1MQYxRPvyPdVtaYefi6Vpq4otKhbYQRTU8Aa3CZ1zpsyWebBmEmZA",
  "key36": "nrtMrJeH6kjgNSE7c2PQhFjNhVA5eM71g1rwfEfP6FMkdgYAnYFEprYUq8peVs8uKewGzPUKNvSeL6aCNu7WUcK",
  "key37": "46CTugpXL6rLsZxmDeP1geG9MvgRykegvUEENaHMow1mFkhZvPcM5x4RNbPqripvww5Bx8FLJNraKpiFpAn3vTD5",
  "key38": "XFmPrEM4HPRf5pHa8Tx1Q9MSst6xKnkrGQE5aymCgD4SEtEwnhVQtbMvLu7rH83HbEAi5o6x7nRFQ5G7ySnS7nh"
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
