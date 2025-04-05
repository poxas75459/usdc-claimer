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
    "2p3BZY88ELT7sXwTAUUeW7ovAYxonzN6jYug7LafKVyTgv456Lj2ATLkaktde3P5sADPCQZPxnKmw4sCK2j3Yyux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNK9YcZ6RfMt6MXeVUNNfw7RweYHWoAkQg8u7NGFZKzyrfgDe6eRJGHbTAcmjDFu4sR8yDCc5Fcpbfti57LrnSG",
  "key1": "2zXctqeBQr1pCcUuV7SgVzPRu9RsXqQ15KiY6kU3UQ2AtY1hZsEoZTGRAgm8xbGYLc6cmCUnUiv3dprPTyKSrbTq",
  "key2": "64vdD2TgaEra3jWtKfvP3enn6KTb62FBHtYGa1sSnDmZgeFNpeENFJjWETjqtJYra88E2zxfkAgct2M2DAFfXP4B",
  "key3": "4Ture5NJfwSjbQLtdvCMaaFQrEtHp4GHSwchjzXDxG3BMk7YvEPUL9fyyJorhsM4grD3eYGwWfoQekP5J8UGz2Vi",
  "key4": "4mqKDNtjtW4azKJSwUNay8dJcypfy3FzRxmcXJCtnniUxudj9nQdg4Km9CivVXHHJfE36QRjaKqoFKG6yQiAAVnx",
  "key5": "4sYhgnnuPtNR3EWZJAN6LUxXTNVYr8qgN8dK4GyKQzkNJagbJyezsJQQrc4oJw1GTLfgJ2gxvrrE2kWegzhY3crH",
  "key6": "5YZ2a2qb32ZpS47o5nvNv5r2QxHGrx6iocPB7KmFFH25faQoppGqrVmxFAzbvfD2RNv2HHcTp4x9m9PaSk8jjdR1",
  "key7": "31VwdyK7GagzWnVwy3GbCFXpRtpmPp1aw8o3ZN7QKCFqv8MXR2M9y99v4dECTmRwv5Y1Wx78sMbXCExdfz9CVGWn",
  "key8": "4TmS7ddGAR3Gz9rKhFqo2RRGnCm4mfxuBqVAeUSw1ud52ZCv8VMakARXZ4fPph6VCSjj2LWYAKaDXu3sYUWUNFC4",
  "key9": "2w6p7znZg3GVNxrEGv5ydSQBdgm92N5SXmKjWMEvJdeNDdtuZaVjnPatKhnZfotkJif65zF9hZfFegJkRz5X3pqf",
  "key10": "4GmeNMqDQDqV3TeL94q7YHWhnJYKmV6wpKLYWS32Fc1UXNrLFUdGXoD1ennBbNmWBsb8MxaBB9eR9yrrGwFjGTYe",
  "key11": "Zv1as1pdzw4rcBFrwXLnH6drrVR3t8ZhEt8aFb4Efkq54ZFWN1nz3MMeY3qJz3pTPiKXZoK6ydJHZ9xXsur4JWR",
  "key12": "Zj4JLxvi66hDesDiLvLwHAFRg7J79dfRkYr668k75gpbLaG8vmpifnHuS3kLfSQCxZZHajH5izCfGmi1U46qYtN",
  "key13": "3dBhqn9PSYVrb6AbLHYRWW18bPcy8NDcKdPDcFbDMQNAfWSSxXmGyticMdnDZX9ZKJDuMHGbQRRLtv9QTLfUSrRJ",
  "key14": "5nQ4KWJHTF89saPy2bg7ZUqR3TpZPbQVoQ7i9Xyc8cEWHUPwsfgcRyXAsyriPaSD9t5Mesew6zBQk6115dtWJmgp",
  "key15": "1H837FLvCxKmCTok1kPJrSGiKG4tMup2HBW4TTuxpgBqsTmexv5CbTiSFnrngGXjuAgaoUvBaPYT5kTyVbhYxs5",
  "key16": "3jZLCyaRRpe5b7uyGETuM8BiqaYK48Y95o5ZYKU8zViERozYHQjk8utoUgjENJ6wda9RS2z9z9CxFeqcY7iwG4Kw",
  "key17": "5zHwhdyMiBxBdSoEKNAn5Qgoht7LaUCBZqsU53E8Av3dkUmc1NtWSPSuam1sA5X2gsRru5pdVZG3s4abw32TtVBQ",
  "key18": "4kqL5aA83e7N1obc8eTKCeD9PNuUN2ynHmnZ6ZFfRNaLHHATMRAG1yYRf1JYLAMjFuBb8LJVBi9HSmpYzecsHAXC",
  "key19": "gXbzGujA4vhtNNT7BJAZXkbMEeKm7iZSwzwzcygDtxqpxT2bCzJbFBj1xJfeSp5hYDiSFxtW7JeD1G3hm7XcUeS",
  "key20": "xcMczA616Ez3UuZiQt5zDupuHTafzw8PqWmwGsmZhgUPvgwZuRt8Hb5ww1onMRLFexeW2ciRX6cCSCGqqWYkAw1",
  "key21": "zJ5GK4XMXmPbDgSDirDTyzvckGpmgQEmZsAkUDzzsqFjDvG98RshTFjWmpiBFBkgeTFfXh1q49Tdvb1ByVYM3vN",
  "key22": "5fa9rkr3qYs4zSH8CQGYqo3ErsHUfJUWpxJyQJa1U216b8pWavuAmTzCyNwJBgctLDXYc5ib2ZUjvzVYENmXHquM",
  "key23": "4vv5UboFmUNxWj2xtYD8D1743jDasqTBahXrcgeh6rB77M3VZckZCVjL62Z9y1JQQpRw9cv62Me3x3Gab7zFqbmp",
  "key24": "4csAGFhjzWvxmB9FEooV8LDGEuotMxwd9Ri6AWnX5NWAr2Vk5ebmqrJf7bVoKXySbtS3NbcSdqG4KgqYocjGnicJ",
  "key25": "57HmsuHxfhJp8PrT5m4YgsW9LkM8wyxujqtniBZg22rLAK25TVGQtrPYxojL3eeEvNzgzjAZeXs2ekhhWJozaV34",
  "key26": "2Y574EmbnjoqPCVkUxAn9HK4qebfVNN9sfNNMMvGyMqUtVzHvUNFmpk5YFLzjJYnHPFZBrZ1heynnjRqYYjqsKgb",
  "key27": "3ApJ9oUdGdN8izxwgsfDx5zkCYBpYrpiXRDFqj1xZV9S8B1Vru5ULe4vPsRrdkr37JoATfQjrrZG88AmWbbpwZGj",
  "key28": "4Ddas3qjgT4tf7AHu6LNzCxUu2v2jg221joEaTyRxE3sDPfBLhyjju2noHXLjmAeTdNcavrnfaEKgMFuXFmcDJHy",
  "key29": "NJbm4P9pvGbHZigdgttpbWzbJJaojCPPBzfAvvGDb9nV7Gprusd1q7DspGeLrpcXX7gAqbx4suMpFYS4QKrYnKy",
  "key30": "49DFfsn9vJcdxvCp1QByYLArHmXkuyjUNQfU1NnMsNW7D8sNJoLJGwTBMZXYNRZ3ugqzYGHofvr2ruYj9wJQsGHL",
  "key31": "2tvLH3mkuHrJPDJg4gPsyfnmjkRwqGnTGwQyJFur3t5pnwSGEJPAgkZJPtKhDXJbubfo4MN5t72GnRXD59KV7G6v",
  "key32": "3BB6vr4CTvfL6eGKc4XtFHfMgsjxF1vrjXQnQpnFF45khjCmqmTdGijhxtzizybEjsRLj5M6RQ1x29XgoKsih1gE",
  "key33": "2Hmks6LyLD1YRZDJiT4PAfbpJYhN7uFC1vRVfskUH2yVnoJ7booEvrNVd1dPpMy75mtYuzeGuLEoXzCFfrL2wWbF",
  "key34": "3nKgHRn3tymBP9EcsfC2i7ajcNRuZ15gPixU9Zbj4o6EadpaJnuN1783PRyJ64fyMuQeZsaze9tKTKPnuPwAv7jF",
  "key35": "3NSBihYpBeQmgtjsrC4dwNKzZXLnHQBJS1QpQNDS88E8YqSqw5QghHPTySUKWUmKFh2V8P5mqcS63xxZPuZokP2V",
  "key36": "3kwXq1sFgv7JCVm7KN7kfwDSa6BinHSB6myttG4gF54NveNrR4yVqMsYza1DTJAgpt7rtR3n2g9Chi4P9NFkZEGU",
  "key37": "53uLhQocdtYkjLLMnF9kft4cx93WsRsdM1NJ9dVDox55avxigS9xpfnhxTkPVn5H9ptyWtHKKrBPsms5sJMakLfe",
  "key38": "3Yks6aLKG1rxDJM6wSavW2xrUWDhF2BNjXDx87D6aqrdMDHetMDp3hpc4npGomH5ebKhnK1PxCHk3Z98RJWFg8bg"
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
