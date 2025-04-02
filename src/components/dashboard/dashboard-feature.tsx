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
    "4w867k7yZgpfXjcSH4W3VrvVjZ5jbZeG3TB7bHLpJ4XFbf1i3ra4nLihyZnMq5jDamrvteHju6V2yDjW1CXpr6YE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YiNREWb9t6ewZZXQNNifLn67zqSYtz6fVY3ok37Fg7kAbd2pSxMA4howeYusYbpvHEm7CWdPn4HbQJ4PVumBzU9",
  "key1": "4sKyPZW9tXhEtGWr3FVbpahvPfhx7fgv7eNH9uKrqdfgjnendvnVi7wcP9ykKJx3Zbnt1x2UJe4qfJntJZM71tJa",
  "key2": "5UMA5fxK77xJfeitB2Y2eTjMsTLTnMNTCxGBppB2z9ZSSNg7xnGRB5sqs96AavEiTcjivjhBRcfyQ7r4mBoNvRBE",
  "key3": "5PYvZDtayTP8kPkwdYofUTt3Z2wjcf6LiijvjEnQ9KeZ5Ly5XZ2sQQg518QQiG3shYN9mgkDWnrevwQgPbrtuQFD",
  "key4": "5tDUvhnN1GKZFMEhYKM6s5DkttPAaya7jepFHNraZF2LtfGoND4qEk6d2jjbDrfFMRJNsQvhEzM47RrLwcXenFxk",
  "key5": "4Q8i8SdWbbqtZLmc5nHy8PBfmPK3Y2y3wNTBZT3FQrrw3W4LRUVkVghJCfwgKXELtgy478SHE7cWZ1x6ig4RBdVM",
  "key6": "43r3XkLA3UgzChCc6HHHyiz1K4bRV2dCoZCU8dTAUF4HLfTU282H2UzBnZLw18Rc24XFGkdt9bGfnWSH41yhbazR",
  "key7": "3kiefEnDevSD4MWzEFXb8zTZDE2VMy2zJJZwZLAWbq3mP3nexVSqxHqntUCKmoSXYfd72bWApL2U939PgRavYuwE",
  "key8": "3BpQYpdb8XNKydVBYuaLxqwQWgUE38w1jG826VPakNSp6L5jxB9E9zrWYEieuSvwgqmRkfv8dP1zf3L44HAd9ZAw",
  "key9": "4xxLukzU3cE74hxv8VHVTpHboMDGKMjw9nvLMbMCiduf1XmoPv4sEqYhbAFTK4eS5RyRxSUZ57WEV6JTQwpF1hSM",
  "key10": "3663ZYqJQtVoZ4tWSmxnjHtK3nk4YHa8xWVCzeANBV1RT3FUAhCNFb1VbjeD3kCNhpDmFoGg7j3f5cjcfCfdG1AJ",
  "key11": "z1785dydaHHRkvJqgaqe38LrTGWmvxiXnk9NpYNhKrKiqmCR5es13vmdUJ5DVbwUwmf7dTaZFSk6ZqbYxhz34Qs",
  "key12": "3vd5fEU1NLpftEM4LVUPHrsWJqiEcFjkhHn43hZfstiMYuapvuzDdkJ2RMtsLZgCScPrRha6ASqZ3GhvY9AkCpKo",
  "key13": "5VLCaN8xAGJBowLEv59jZdAK3LmvjsH7Fy2L44iwUBCo8xfrGj48vMYJzuZVKfTGEAQMWk7wwG6LWaR8FA93tSe4",
  "key14": "4quqfRzfzuHdLxw2AnzYZ4ZnVCKF1MQJtGxnB8YGq7vubvx2Hbbs5yhqGBzVc3Zvc2srTE51pQpEFu1ReA2jJ9Hj",
  "key15": "5mpg5HhwCTKCGrjKzadnTZcq16LrC64bvdhJzdjCcVE7AFjKbsFiyxX2Z4C8Uq2zA6RwWmsD6AHJjdztCrNWB27r",
  "key16": "3Yt4WSxkZRVChaZwodYx24SdhfnjHdTZdCkpdagZwtTeH1HGThW151dq86efJsvTrCmGydAbU1S4MQvxN3sx96Wm",
  "key17": "5V5oQX7ybkmRnMdZSfXtcoZqDBbovfW3np2mVVDmnLj2byDDoemhobyi6rgzFq3gQGjqkdNVv3QSot8XRMACUZp6",
  "key18": "5HRG4tKdbvm4ky38nvaP5c9BqNWNicb9uXsRTEr3vDpzfhvUGSxdHQ1CgPBFZtd5p9bDKHPsbPBtGy4Awb2LurBZ",
  "key19": "45G5KXFx3f6LsfqHfzV2Gb6jPet97WPTzrN9MWkhnJAxFqufBNCbwCPaZViizTQGXyNV2rYRDYxrJB8QuTQWPcAH",
  "key20": "2Gy8kv8tQ8kDPKzm2kzJRPUcZc2N9GggfxjdSCiawGydGaheVSda4wzqrdPhfMJ7zJxypqY1HcfxHKaPfHG1ZhVS",
  "key21": "2vxNHD4c6dWKdgoUEWhZdg2oG8Sf8uya8mmtmtFTnkWhxaFiiqamdXHDknomwHXy5yJ15edviY2jw6UVbFx9kJqX",
  "key22": "63WYojtR9Hp7YiucPHZ2sK3oU2Be43XuCA7AAVb1goYMiHTW8BanZ9mA2iF2MJcNU5NmHoS6B34b9JAoQd4yK4ci",
  "key23": "4Ff2exvJDia5CT1kbTCGLuuZLHPCNPBMrWWcsgwmgiHDTm1WzMgJ29ntzQ7H5JUYJLfDDCZ2stMF5jt1Y9eCox7q",
  "key24": "fgseKdXjjWVfo2PfHTfPVkiWfRcvFXuL1FnBtSyRZwxj74oV4ts1HZW3Ga8gpZ7b6XBMsNo7jGtwyWjVqNnpMgW",
  "key25": "4Wq3W3ioBpW1hCvjojhVKG69bQkoZKdA836bmi6F6fiUkq8sbCqcS993Qv7oU95z4zvTHq9pA5WNPUE3eT7b9UnD",
  "key26": "uBjCH1iMLeFKgLC794fH2UqXatBGbShvggqkajcBwxdNE5hH2seE4b2AcqbmhbN4Etj2Bf8hgbbE5uKatiotGyk",
  "key27": "45DgPofu3ThhKMfwMr8C56hniTiKdgfYkQNSadSvWNw6EvrTntUQSroQnK399vC2k5cNPgFZLj6jSPnQju6kGrGN",
  "key28": "2PFRzjTxHrdHStD13eJpDa8wR82ppEDgguPxAhVRrChkEhGqxCPcGnmkjcr1taqonSZsywFkUAD2qGsqdMCMd1aA",
  "key29": "25P2Fp6t561g25VeqiVwyifz9d8fEFdMG4LFHpeRnQ85PZdMg58yYKS4Ga83rXFdknirQWAkPcUfRcMmCYQRiUeJ",
  "key30": "53AkmLo2gZoxzEtbpZBNY5QkVXY2UNjmBw7VYBupvznVKg8vWBAX4KHXVbCEZ85ujZg3Yuvr5siQLdWbKQkxzCAq",
  "key31": "3eASTSoP4rm4tU4tf7AApT95o6GzPr4kDbLDoJYkTdpPZd8AAFopfDbmfSFLBGuACgQ7iKQ8ESK9qDU81Rg5pzQF",
  "key32": "Ckg47VXpB2qxSZA3dh5URvZUopCG3h8RrVbW58JWwfgdW5BmkYYyMCUy8Rr6vPrWbee3EvymHhnzyzCr3NFqnrs",
  "key33": "2pyWVBezURXP19rwCmBi2Ad2g82hdTB7KRCNjrVeHjAzkeABEHMtjjpxz6Fop7mHSkLhYHNcMCYHHVX1x4mkiq7M",
  "key34": "24wV1N2uqtDJbf65WbBvPQifdksPGEfohPampjbey6BnYC3vWpWhMmghMsZXnEu3AUg56PZZsERUR3pyMWk1QzXJ",
  "key35": "5HQctQ3YUMEjJLEgdtahLFcdfNXYe1nXaPFk1JqEFkeRz6oBBsqVbqQYxDehDmHKgKMDndQ2RAApKZ3vUw2qsDbN",
  "key36": "4pNCXa3aX8nB2faJyVxjWsqKfnhK5TssoQxpTv2bdMdJnbZa8sHo4MbVYK98q6vCxLESfHfHnF3KLTijBpc8o6cs",
  "key37": "2XyKcw27c4TtEgNsgJJ5F7ZRNdMDDkhjtkC7EWfBUNtK6Y14gwEqsp8vgBZ9w4qNXv6k2PcAVPfTUxKDBXbFWhC",
  "key38": "4rs66aznxu9aqFfEA77z8jcFh5cucVbtJjDZUHLUW6i7BQpLWJv3KhBu93ecqzBrPN5AdTt3tnQ45Viq4XPw8Utg",
  "key39": "w8MZMPvisv8QMckuRNa6ihcwbqrdyBXkKwgCUH1MNP6ruUiRaAXfeNH1NRbtaQCLiyixh68tYN6mC2YoBnVLAuD",
  "key40": "AqQBQuFBptFDx1eYgJVSEhqdhmJo2Z5qUsSoWaudf1ESNjYs3Mp4zbNm9prjd86qd2a8n1mbowrYeLL6AC3tAnt",
  "key41": "vzDHwk2eZoXH7ZvzVEfMRkW8ztnKqwLGLmNmc2qmDk4PrRxAQyajphfBDrSbVtktVUABz98z7eKPc9Sf9tj3yQu",
  "key42": "326nSu6rqvJ9pozN1KJKAEDR7hH9kynGvdfpo7QfmM8zQBWTJ8DdtbpNRMBCevFDvp6uE7T1eL5wzDeFLyAUZsHE",
  "key43": "4edWPvi7nUqJA7UFMafe88a8GbbFTHXtbK6D9DpbJWMmtAWWm8753aANuDmCMLw67U6xNvLSCJyRxugXKk7Ji9Jj",
  "key44": "2XoK2F4dtcW92ef1fVbwjnWG1qRs3nyAqrAXbtsDaAM3nuhCJzeNVzSGsit6ZPcHaQmZLYdbT9eyro2ej39kJHR9",
  "key45": "2Nm3SMSSrJ32ARai4JNASr5yAeZH7h8QSkhQxMPT7LBd1JSQXhJi9UB7VUhq3M6QcX4eYBd8QD1CHmi5DwEnskCW",
  "key46": "7opFgtoLU4LY2DdSGAMbULfiFYL4oNd1T5NN7mi136YLTar4evychGLJpZZJtMYXuw8KWRkRtFaCALFYVXYuCb7",
  "key47": "4QG44ehpoedPUyK1XMxkxL9wpw4QbLAdCyit9VzjucHsR4Z8uxMxd7dNfuCDuGHdcx8dviYGRDCqqeeKwxMg2nFY",
  "key48": "ZLUpXR86s1FWCPx37uRs4Ma5cSUHynDATAnyMSgdpAapxqQVw6Y5yEzA2jF9GExJvdzrpBBi3rwKTaFvzaMRf25",
  "key49": "3VoieEnsCVqEPYwFT3rqGHruJtc1G2PEpzmnYux5hb9RM3r19WX1yA46iUB1bCx6s1QG1V4n7qLEiVX7KAQLQTgP"
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
