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
    "2pumK9F7YR8ogCU21eKaK2YrHnWbU2x76nbdXZ3XH389ibDbT1eWiAMrh3DVsXm6HwaGEkyRQNSA5nyHo1zjF6eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E3QCmwQZBM23QnJX6YzZEridZRWc6zNo9jEDGWUrLotKb2T2QRPQsy9aAALPCvmnLgzkNSMZT8kcqNJ6jwf8Rqp",
  "key1": "YUdsjV5fScsc78BzNDFWTE2HSfCjsf5rZ6mgbwQpNUU3mXAuvovmhmFaBzPmeGjrJVBYHQXzMJc2ADdFk92Wpbw",
  "key2": "5xmZh9DAy4AgPd9wm5CxgBeThrNfmYPmBQN9gkL1HxoSgCrc9fP3g8UGYkjx65dTLdPvGxohCZP6dH48mdzX9fc4",
  "key3": "2vKxUNtQuGCx94hkFh4t5kkP9m2Hhw5vQBh9Nfg1NoUw9UTmkkN3fvNnew6LRLja94M7GiPjKqALEv5YEJq1AQd6",
  "key4": "4AGRiDENFWHo97ezHk9KJ7F8KzEY9phDNtw7WjPE3kU2r15rqgq3a2qx3RRvkXWMp2jLpi3YTzeVA5qyYx11z9Vx",
  "key5": "5816d5AH1ykShgBwb5a9fwGvmuEGM5K4LM3qFGdVcxRyCPmW9c9gZoFYBxGiwwoW8YySQAahcA5XRKwFAu9uWE13",
  "key6": "2jCH5E7u25H6eXjKmeeL663byZTFHjksiGAvzwQnQSND6mnaQeezCMy9KcfzV4VJxwKtHtuk6YmcwrBb7KaapRQp",
  "key7": "nUDJQEnCXPvdjeowMjE7AyEp8SqpNLMZSVmSJq5maEqd4mfVxKuRX8SiLzTDoRaPsc3Mx3seeHLuFYUu9cFDqua",
  "key8": "4s69xhJ9RvpNkB8LZ6sYK8kwbscU41zTc1JFJLFpSaz5egZifgn3ex5jzmkkEves6jw2YaPtnBiKZHVikYvypcFu",
  "key9": "hRiYaPs6RPKE1q3bWaekrKW2hfPCYVMX8RkLg6uVom9iuw4U8YkKzfAjWqtpRw8ganyiBpUNu5FcZR1QJEXqBxW",
  "key10": "VaEgGzRgcJQtWMxfVQ2bQo6j9jkrH65hyTZpShxNoERgMBDSBoYoRDdAqYw1HjV3bhpx3RVrVb2ZokYKaB7tscR",
  "key11": "3ZBjyMexUEVAoYocLeJi2d66o6NAnxgySWCSNswJJdvPsogHFD6maJFQQoSbNhFPcFFhoni3or65hbtriGo2rhW8",
  "key12": "bgC481HtKWSEaLkGnR5mJy68mwKywr16QbktUMPDTnV4qmqXx1LuSv3njgv3X6iVeE7Ncne91qBgWTvDKFraF7h",
  "key13": "3PmY7HnuDszN87hDXdZnpHnSKiNQD9p7Jbuteb3wrRM1BBRruxbfYMYuQSMmWBv8HhMC96bYeQDiVmPJyHAUgBnR",
  "key14": "5NGyueMKyjJakNB1wKArkhn9wHAphAyuFzhUSG56gKjZDKuoTf7TwjE12vyJwYvLUP62pLqTnT1Xncsq6FmMcu9n",
  "key15": "47cb3Sz6KhRg6L2EB7cw79Gsk37sFQYwgaBBs7H93nMRwxccthTJBQSZPsTgWJA9HYE5GRDMEAW91RTPaGrPyXxA",
  "key16": "4DGRHGshJvhRbvXrXPStDNFTFUmpU5pyn4uRXLZEbHjkMkRQqgeDVmcBo4A7Q7aBp9Yxp747VswL2EfawyUKb3pY",
  "key17": "5UaDcGEZGc3ZWJZhmUETU911EbASsT6CRMEQjNk1yaJAVnodMn44iYUrcc87HCa4Gy9Z1XLZ8t4LNfpRWo8oT8S4",
  "key18": "5F4mkEik2iR4iFLmddXDHzutmqgkfbmCycW8fLXC4sU42Uad4ce9ynUa4bfyp45EAVwpgvCLUTPqRNxxMSi5gKiK",
  "key19": "3T47WUh1dMgsrh9HTZSzuDUX2CiwwqGavQMeumSsRBBV1kvW9xM5CBs56wPgrfopCUdRFkiHFTwzruJ3fftGJgZc",
  "key20": "wAQmLCLiRb9GnMBX77dhCYnCHq8nsAzAcEhfHsrKo8YHjXBs4Ej1uthnD1BCEtPPG5jTKJRSYLPDyPJuNc5uuDo",
  "key21": "42EAZyRozQP3KQaK3YrMgfREDHEpDSvA3NcFwaJHrtVWRW9FzUSKJLMb8zEKiPfVtUv2iq7CJndWmhrFZdr9dT4k",
  "key22": "3Cc7jGvchTKn9C6sSvvqqLxxBJoG4NZWg42j6sL43coAhd4G7G3DNXZ5sCEpgQSsXJBgiBw6pYTSiDUVh8Q2Wi4M",
  "key23": "4ph2P1oNJ9XMwSXiQFozZdg6sMBLD9fo36omd8dWpbKF5NCiVGWyNTLXfHc5QQhXgJq42h74CXRUgEQjKPpNWuT7",
  "key24": "5UbYp4FDHJJh5S5weEvLJXhdMjNZN5AVjp6ZMSr38KnRPKBXiP5T1SHeRRokMHmR9F4VnSuyFxsvExMintw1QZgT",
  "key25": "eBvat2ck4sgQvF4ZkLUnXjJbQPWmnXJzekqbjjqVYbNnv38rBxpqRAaQHkgo4zW8MDUSd2K2xEHQZoug93C6Kb2",
  "key26": "34Cv6bA8yraTTQ4jYdeWjeszMYgdamTgN75bqo1CB2q7ev2FRCZRgbRw6JetJGKQTAjMWyejLc4NuKpncDx1jyES",
  "key27": "NJ9EkwnrRX3Jb7U9aqkybck7dsNRyeodvcFET8xFKXWeb8J9hobjreXRozyKwMzYoALSX5WCy1tC6zxwbmzRHQU",
  "key28": "3zY36naX5RUXDiSQtJtHrryBvN4VFVPfG2rupch1D9xW99tANQM8wZTu33we6jb2hXvFsoWKdg66eBwK7UfPpJqk",
  "key29": "zZkhdyKmab6nWroSbPAy1cTr5mqYnY4iY7M6VS1XZXabHmpmBvge1fiv3SQaZ1oX7fmE55ohUGDqB26NAshz9tg",
  "key30": "3gR36ptxCLEZDrEzd9DTxFgSQzxnczuTBHh51xeYsAvomdkV2dJ8CT2Ee6Sd2VKgPcLg7wr4dStrXjpRQmSgRh14",
  "key31": "4kA3o3pnCoCEt45nJU6WhALwzYVCB1dxzbhi13Gw7ey6VdJddALbbuX3Pfmxq6HeWCrwF8hTdavyNUdSpHdqLZ7S",
  "key32": "5PdB5pgiP1HCPRXRJAG4hTDYYCV8iobTqXf9K4YBk3xgvno1X9Ykdnimp4i8bmqZYyWBoZpoYxRr9Zd2PCvTKC5X",
  "key33": "5N4171SdNczdXJEsoEHuVSXFPSoL2kVQH8gHChhHez5rGEdcupYGuMn93YHwefDLTHS1TCNFX35rTE61rCwFe1Y4",
  "key34": "txSLcL4gQqcN6owKED3brNS4qLBWQiqyxW8RtAJsw4vzDziEHwBKT5wfAsXoHWLyM1NuXmrjb4ARU6x5Jy6571B",
  "key35": "X93Ssdar3UuXsF3MpNx6CGfvTQ5qaHZzY2TLgGghrfstKFBJQmpRxJZSN82CsGtzaewMHrNzt3sczJVSTiizqTA",
  "key36": "3PG32nRuXvcsNm3d2EtXqPhtGNACXQB4Ro8hnvvUvKZaMEPDC8h8rGos79QdVFEGBNTrLsePiBuCHVL4yReUaMPh",
  "key37": "5DbypsK1jrUaac2AEkze8v9v794QLpwzsM6n2KFdiw6QHLZvmDaNCtZVHjeKFFMJxF5u8EGXZFQ99zR9SBJez9TM"
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
