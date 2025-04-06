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
    "3cdUzrc3eaeJLPSSTaubup7BjzGx95QhNkQXttVxkiBYv35BqBENRFfkND331gQFMuH9dcKgXm1jHMh15tGPZWXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqqo2UbBU4v7N5a9ySBaX9RBuCYnH7ziHVzpaRLzR8uFydzHQxHKCp44Ht23bV8XKZPe8LixNaoEykKGxyVYtsc",
  "key1": "2epivEUH6uF3dyfEtdH93ZRgDBX3DUoMhSjm9iz8jLgL5FvYXvXrjvjoWsVqFnVtrwhQpx24hzUVPyA2DWzxAWzy",
  "key2": "65dju1D6kMhz2ZVhUgvrWzY5fy1haakCoAFE2ebJu6j52UcKtrpsvwr5QRam8iGdNHxSDzsjiCQH6bdmELe3fP6c",
  "key3": "3DnmrmhzC4St4x1YqakaUjEcByHHRTNCUipCrMNc2d9ExHS862GdoGiHYJmdy8Ra6veiWHEvRXC6MmeXCuMW8vQo",
  "key4": "QcprffT1CZD3Fy1ZcgSWvpQbdEjdhYFWPNvjVXHCMiMfmUQJ3tKpHwkBDsYk8DPqjMS8K9eqcEyoBUwDrCak92Q",
  "key5": "5iiem4gZ2tEVyEMkPhYCbEs3Hoq64QyG6q9heFwrguj2NWn7MJpZkgzySvSap6vWE3pMdy5wGKLPNKn85jJtS7jz",
  "key6": "25DNr5KzvsyxyLNfybX9zrUk5oB1dsbEhHKEaA475QNgR5ABq9jpjgTExvehmoFRDzuwvjPCBrNFFhYNbm8RStTR",
  "key7": "2zprvAs8CRDvnx6G8Nx8jEnU9gBzNLWFsxzjDBmACNSef1fAqU3nbSUhsvRKotaQcigUnqyGmoEmtMcf8i989BxY",
  "key8": "47X4RrrrCdiTaDRuTtt3t6Paj6VduDEFJwdMjxGEL22pYGm3MkftAVm5NBUciibe28kmkWkgYo576L5aTtVEzSK5",
  "key9": "g6NL8zjmw8sSKkCu5ZvbGDwgGfrruWxG3AWDLSfwiuyDp7RA2ZTtHZf78kzRXaNWrv7ijKKFtEQXATQupp21mNV",
  "key10": "5kVQtu1GRLC2TttoTqTgDJFkqJbxfQkqWVSSynAu4J9VEbmjRWo5swrzvYP4LgjdStwpqXJMyqf3s3kfTx8QzFck",
  "key11": "2Qw3q2a97JEAXfLfKtUso1uhc3KMw54WA33H3taTzswkNGEZN7Rr7yDiPqzAL8E178KmaQptxQaK2uYdFJGRyYKm",
  "key12": "3s8PcC4yTjynqFzdMy9HzKqNSy1Rpe6hJFpM7GGhfee22PhqefoUUAfjGsshbPsBFNdBXccDHXNYjgr426FPVCbw",
  "key13": "2PV4b72rUm1Jb2jnkuUYykEwfVNx3zncsisu3rEmoUDdj1ZGhRtqLZnjqJA19t11sLr6YdgmXyS9t8oMkzqEu42m",
  "key14": "2tKKXFs9SQkTBMbsAbarKWF5nXhJf6uzYdwZiks8hZXyNKYyZGvY9SWk2Tc18d3uHvVozqhh78Y5GzgCDMKCfsv1",
  "key15": "2Jhodop2AUnCJbPLV4uToPahVM7wN7V5RyLr8TU5dPYxLzbiLQvrikoB9LhUZHJELG9jDZHkZ7QS8BqhzkxLM3AM",
  "key16": "2LwX7PCkbPa2d91z53pDf5CrR94BZgCHUd88dPM3ig4sKfN3UnU41a8MoMXkpESjsjtnrBGMMZAgWyxYHX7TJ3a7",
  "key17": "4cPsg7za8NLb29brUiP2mzd4mheZh2txpf9zmExLZyW1PMWZZKfcKY2LEABj9ebtMeenTuUmQ45GctngaeXg81DN",
  "key18": "LPUEeC8NHBMU9dz8uxtiVS7gZNgWDLKmubjitV73uZuoQPKUqG89o1ak2WrXTm6UK13vGxvt7duPsKGUD4GqxgL",
  "key19": "4Z7kG1n8Z6WF8qeaJEpLNa5EcMcUtkQYJoA1eQms1f2R45dGHUwA7tf1MFHxFsahBuvAAAG42czVReB1v1vQDznx",
  "key20": "5kPdk6BpmUbMis34EPVqGXeeCz8pExzweJU5c3MVXPQSFTb5dC41daZCxjMAPjo7ooEJNoBh5RWv9HAQxUKU1tgx",
  "key21": "4zMcG6N6UtweqVDtrN6StEuDsFVDorHijb4x6L8JwfrhrPD2JMkw8X8EU2r4wmN6H7JbVTvvWdosEbLqoarcw2VM",
  "key22": "2tdnhxu76rV6VrRcfUbmtrg66JFbugfWLQ33WtoQi3dVBnwVxhPL3bgeLktsBCBQzu6DcDSF5JpEnPswmM7xZkVg",
  "key23": "5CckjCw4TpE2EsJrAtzt2HiFQPv1YBEmiTPECaSduUsnAuQkihj98xXuZcRXj2YdMEn3DsfMZ7mkx6jbzdAFqq6V",
  "key24": "4JvM6HeXiGU9fccujNvqVWcN1oZHsCRqrnr9p6VC18hpuTmMXoTD4qd6xhNr3TaocZvH7CmiQa4QzKig4DgfuowP",
  "key25": "4XJZkkK7yQHXHBKbP6eWMTr781XjaBAQS8CFdB7CR1RW1LHNkWwx1CvU4PiBmNFeBGJT2zZJDstgQLBUUoHHjPsr",
  "key26": "5syGGNiHiH3xdGTRyo2zKpQAnwWWiteh9UFBZYD8Mwkk7o3sm5gTQpZNauwSVHTMbCaCFJ97xFjBNUnJGYPRNWdS",
  "key27": "4SwrU7mWth184tpEY4z4FPmQU29NjnHznM3s5w3paDyQuL2zZ9hsL1BCWzs1KyFRBL7oB5fSC8NV2C3qXfGP8LAS",
  "key28": "3naiRonHvMYdPEkTFLDCJzA93eGm7pEEnoitnJ4NR3obJPwhrPt55g9rBak1qxQEm7nXDNHtEfmD4Hwqsh8toDH9",
  "key29": "5r8ca4kwHz4uesCGLuc7UxmSh8kEfbGDsKkzK7FWumtH9YWCMAHuyN32jnjsXp4m9j5287PMfmMyL2SfJpnmhNDV",
  "key30": "3XD3GjPHqVBc3H3Czf4nWmq1eAFy2uCoCyiwJXAVLMS4afCZfWhcFyBHe23QWLWySHyQHDmEDMJK7vr4qMedRFgK",
  "key31": "56zzXa4Nsh9ns6rCkSTNGkZvoGTwchPJ1zUAhoq3JEtq2Z3Cz4HZofWsC4uHFHorY4pkKLeyRVgEEvkT9zRNj2oT",
  "key32": "2j63K9Ns11xBDkfg7JznHMjPV6GFfznE8cJWQ19KpMTUht4RN5MzDsBeEkhXXGvgYizNhFfsEVM9uPpPQeCudkLU",
  "key33": "4nLvMVz5VbwzbXMxZhf2tuicZg1xgfzumuCdNu7fYjejMzSDBiMMDiR71bFfqreZWSPJ4pRJvaLzc32hV5mNzCMZ",
  "key34": "4Ejiag2f3i7o4G63gxKygbiTFpg7bvEem47NTwZ6Q87wt7NRdP1ihqkr3WbQwFycLsNr57HpxTD6sr6qgBbTiKsB",
  "key35": "4wKRC6H5y3YgRq7fekHHDhGpHv3NXhbXaouoGUjHhSyBtjmiWwam1whBkCkCPTyYC3jchRAvQRWSwW3UBHuPbmD9",
  "key36": "SYeADgWzqmWietZ4Bqog6TZDsx33gy2eD4c8qFUeihAayVDvhpwngLgREhxKYN1V8pzEK8iXFgTBwqNQDnuMCoZ",
  "key37": "5wVn9aDhzwkx1ZLBaqk8ftJhy1ymFf7AMUQ2ysH6mXvVjfNt3itayoZLqushj251Kt2LR6odt5uJPELtMu65Hhps",
  "key38": "2jQQ7ofEBWcqs2a4Bb4g4mNotzTRjPfqQfinVSFYn6xHxeGABjSuhWS1iKU45tAapefGUvt7p3YMxKFoUSi2PU4w",
  "key39": "3Ah1Bpgq58GCcFZo2RC7wjJBhh8WtMC9WZoWBuDrKmUxWUGjdFmoixf6FUoNK2k6RuEPzFqEXS89p26pp6bE3sUs",
  "key40": "3S2jVCRQrA55er5zg1cj5cnvAcndnYfyLy5Pzr4pFc4e9VaATTthdDDBeipxarCSLrKe6VnNeaTgHDgTVcqYwEXD",
  "key41": "i6U3nWmyQg1TN8BpefcdJDBFvBdQGQQFcFJEFuwd5vg3AwnrAeWddU9VtBcWbcqKXSr1pFJAEnMpGtR4SB3ipnH",
  "key42": "2wFbQ8PGE4qyLf7sJ9sLkhpZb16oGGw81s46oRRnZzcWp15G2XciAXNVhNfYKh8STfCjtkfS8uWnwF9cVnydAa5Q",
  "key43": "hJZpiTbDncKSaVaeAaac8URogBtmrriBJjeMs3E2CdMCHFA4FqrM1FGhmfFm4p6T5m3izQxcP5d33yKsj4w1zFJ",
  "key44": "3omY7VKAtdSwm74Q4345ipSPMPTk1eGBbt8QJcuD2JUVuzSkKLcFjhugEqY8q32xaNZFRnmBFT1CpQJfcm2yQQki",
  "key45": "65JAH4vyjLtKkv3qiCirt6Mk7RDga2y1LQFuniX2TgwiEpHuKEzcfAXVDoMAEi6uqTFZnJcANQC4EzeL7cykb8Yq",
  "key46": "2f3kRWygDR7KoyKgitiFhEpzmP4QnbuQ7A23zTMwms471KLFE2Ag6Bt6NVWNY7q5AGsD1KrFJXwdoeWYP6JaSJBE"
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
