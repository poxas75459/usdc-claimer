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
    "4zSATKAEfCJBYjCTenojcWtmSAB6tbnKfTjwn4ELtBEWwmAxwnVJt4aTMpLFsT3mtpL6sgyS5P3uc9HWU5mXzo67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vX8dCr22MtfM9sHh8LYofK5abGUTRLLZpAKqRi76v6vNczDDSnyHncMjxBxYMsTUWtekZPEGYmsj1z3iy4fhy77",
  "key1": "2FAKhQajFLM1p6CggeBn2PfpaYmRyozC9hd8KVUZMHYLyjUYmn7ayAxSvrnnVYc9rRESQzuADZitv99kuyZqBd9k",
  "key2": "4h3PGJztkEF2jDYozf8aJv8zgW3r8CKJLU1xJiovaAL86CPBjXzAT6HCkkeECcG19XppLnKX9busS5tZKKbTtZzk",
  "key3": "3Q4KRhok2bksSx9RH7iFhzUdqmeboGGvCTqb3goHRMGNxhywQ1fatpryRGWMGGDjujsnAB7sEWtsN3bSGDEYeCER",
  "key4": "4HcipJAoSkAUkoazc963KgBXzzd6EB2xMPEyj7xhEcoaN1g8gb8QGS4r1j5KX3shSoZiEkaYvrhF7cq2WLGAJ5TH",
  "key5": "2Pr7xekQD81zhpVEXHjSZ7NbzP7x46sX1Gy3i7f9odg3BRyYshaEFUYX1j2LXmX1ePSZcMSfvRo53Sp26YbdtS7Q",
  "key6": "21pSwJmCwEuTY1Tj4BjuqhS4v9VH7QWcFX2fuaQejJyt9Hvicb1nxNMQoPcM44KYRNa5j7A7gG5Wp98xoXm3Vqsu",
  "key7": "61tXmTjHGcnLxyth8dvmiQaMwc14StXn6NaxJaP9WwN7M9k74wQFSutg3XDr5NfRdSekQSsCpETT6hof9Tyyj6z8",
  "key8": "4aczVnypNjtgH4cWvHx4CrpXWz5qYKDH1erhLdWha1KNViU2rtTSJpZita2at6jVea7H4HfMrmtTa3jLfCoLRnt9",
  "key9": "2cXBh2mRVV8YWzbfwt5MdFw86Qtb44DPVcB4CqQnwiGxzUSgrQgkLfTYWFHuYN4xuMEY3MVk6xCD1QPk7xLLFbeT",
  "key10": "5NpMY5KKBVMh46jzyt5WrQD2WT8dQURLZ6kYdf6oWcgf8FTAHADEWoXAKYRrqz1DwdtFEA5jRVqBFpBarF2GVnhz",
  "key11": "yiTW9pYjp3y2fdffzJQQ25qyjwq5iaucDgipBHnbp7NXj6b6ysNAqiLtKMsjck25Z3cJ34rSWK5w7rQ8puRqRps",
  "key12": "2LHhhg8qJGR3GuYkTJA6Hpvf8oZwECw9nLuM17gSWuuv8igADew7hxhqm2B8ftnPP7z84rnBeP5KYbodnJy3vdJu",
  "key13": "3D8m68q7G4u3LBxf4fhSfmiY8KF3wiqup1EMvdRf7epMhGmden7exWwVcmxBHcHxkox6vxKBGfLbTSEBBGDbUquC",
  "key14": "52HEo6bgnCb41ZpbrFocDSjPhHSfBR7YuR7rVxp9bWrjyPS51AQA8a28dVD4cAvqAkgJBzbFc7rVNQmqtVkp3BH6",
  "key15": "32PRrnpvdGAdMeFSSH5bAQHnxLiwLMxmDsfPVLhqqY4Kjt6Uq8EiUBAFs1PfGQ12C3LfTHtZj7tkrEe3ok2fiWur",
  "key16": "RLib3PYU7PuyX4K3una1SjauQkamfc7aQeGka32N4pAYkrvFWUruA1vVHJoMjqDoaT9xPEfydZLnoXAwGw4dQ1D",
  "key17": "51GjwceF2BqCphun4uaewTrXCu44rbEgZGVXTCHWGDthT4qjEpVx3tAzFMH9pdTBCUTBTyu3BdoY8wjybiBnoiBt",
  "key18": "2EYGWhWNxPLCYNQSSLQv6EXFkc8y16uuZ5Tgf3od2inngKXSmZoadrT8ePC4gwiqsXcM1469ptsywP9Xov4cCYiB",
  "key19": "2mnFhZkL9WF6LrMe9ECYjDakYZjyJS3VACeqfFSp8swsiEqFS81c4VVpDG8jsFWqHziuieDHmwJzg7gbDcTLXD2P",
  "key20": "5HGvRjjjmyX66giq2Y2Mqd9XkRn63DpMrRBPmmYK6pNWfpY4KgzxGtfMQyWjX69DcgGD7CXrViATnpc61mg7xX4D",
  "key21": "4W8VsYPBQQvHiL978cnjRZ7UDgRS9MoTJnBeUEnWRSvLNxvGiPWmYn6yTPmr4umtU3P9aTXNeNDepX6VnJe9aBjQ",
  "key22": "owwnffiS5YrfYsYVgDUaiDu1nZvkGXyPcQoK8we5ao3JcPQ6cYHvJ5BYxc6Yizybf8KhVfLCjrHGk13VEmPHxek",
  "key23": "2fNEuNGC8mU3aFZeu6QAvBZRiDyVUTFM4iFuqtKvrFtJ93pTeCnZj19K7H4dSB8cgv117P7r2bLC8UNnXGMno7wn",
  "key24": "4ZoiDpGw1UYBhVVjeGwcBvvjmpyH5tgRzeRjnkUuGAddCbrZmYXvBgQRSsb9gQk7DnDk4W8VrsWneNTn5J2c8aNx",
  "key25": "7aQYUQxh8czXskN2qNmfxHH39kvFAbNa5tcvkN8pXZoTatU7A7s2KbaxjbnapNHCfzYEgaazxFgadTsx35aybLC",
  "key26": "3sfKE2ipF1MKWEtCd9zhZ8bLYR3gGekZvb1XMMEz2GVfqzqEwyY7SYk6UzyReJ94J5ghgjCrTg6XH7Vz9EktQbuZ",
  "key27": "3wbj4QRCDYwG7NCC9rKrAy4oMTLwHS7v4zwoUL7WSKbhLMmqJdfpSQWPdJMnACVB1uvNa19CBUJLSqmS4Y17goRx",
  "key28": "4xp7nGN8ypCKYgrYXFV1hwLQDNU7jDCPAWyVpDoAgU87CcSrYkoSuQtMemG1pmLuANxUTZKcMQeutHo4vsAfqcm9",
  "key29": "2CkunjT4kuEYuDsmuq69cPKyEBiTHANEuKmwzPh331bctAQYqQ5H9L7DvRXVrMFs8NWd8U5ecBUJjqMbD9VkqeEv",
  "key30": "HoxjEasLwDSLkTMCog2tMU7ujsnvELXK66xMbXYBGGoqNVgQz3HE3faSvrj9ATRgyfLUT6mUQrnAXzXRhFxR33r",
  "key31": "5UqFsG3puduCjjGrrboVv96jjfhgoxDGagobxpsbETFjkQjsrgoycNs6T1Q5DAgZjm913giWD6LFDNKX5wsRajGn",
  "key32": "ZdShUcXwasBHbUZgUBdXnQiadLSTivr1Svkz8QQpYYxMfzAvi1KvLcCdzeTBFksmTtjgASF27Z8W4ZLmSXPHVfy",
  "key33": "41YqXsb6JWwP5yZLnyfCYVAhj2N86SJwRtXBKFRcbS2GMuNW7vMji76a6E7AaEJMPTVuFHEEKD77KRZmMAvXA2qj",
  "key34": "3XwkKhcxX9zQFUsNtUFumkEiqkFJPgJPyKkU9bmyRPYbSJJLUHoejswuDh4bDVP4hNYSAD83nBMj4WVbYY5eARz",
  "key35": "3WnwZQeujGrsjfxuahYXh4jJtfrpoj1ARM1BagPfF9qXAGWQGLtsDRmWZSDUwJUiK2V54K7uciNbGS4j44shMWJy",
  "key36": "496oxnkaChmCu6brgdJTGCMDvicQoZPC2CJPYuajdod9J1nWGp7kzUh63Qqc4ggHMAwtGKqf8kkkyJPM425Pzp3h",
  "key37": "2cBkDxc9DiGcshGJcf7yWgj5gh1AuD1GzAPdFyvby2r8R3TAimv2hcce6s8Avby5NmE4M1gPD5tZ8B7qmd8VEak8",
  "key38": "5Z4xvGc4nS2zGEW7wBVYCQ49rpPkLA1vhCq2g3b3RQyaaJRYVHFKAoSi6M1kj6J5ouhu8VEX1GY5z7RTvGush2vf",
  "key39": "5tQwCPPwQRAYWe9w9uxAjwFtfJmBapvL3BFR2zpXcFc2gpoZudaTbHEDDP6Z5xUv9PG4Q66uDmn3sw7mYvuKRhHM",
  "key40": "4bpW2xHwjes13ZCBLKJGvHKCrVzrPoyi2zDe12q4QLd4rnkzvkVe35x8BbLNrTRfPp6GVSCjm3bgyouBArSTnM5w",
  "key41": "34BhTyE91Vg5QMrjq6QXT56GKs8Le1Vio17MCbxE4sYdNfhPED1xE2rSsTT1Jt9Zs7BTgRaEKvQMTeRgXWZWEvLy",
  "key42": "5vuspi5kQsNwrAqwNPpz3x9aGjvJvvS82t6uAUzHZsgPAaA2gYsyhcLFijno9Mo8P9FmEwKsSff7ZPb2n1eV5cxE",
  "key43": "2Br8a2nzdAwSrh3VRZTDePvPrR1JZQQ1etgHbby4bziwiG1SkLJuqhL58RLr6AZFwQ9aEwrLTZ2jxRnYkXGPHYUB",
  "key44": "4HrgpphTvzffLHH8LiXLrdtEkTtyoMagBVcdUh9o4zhQXDQtdNKZ5TuhPT6PTsinkpa77TTerjNuTswEqeiduAwz",
  "key45": "4w3ePRHTSjyLgSjHNzWSwzFxBS4S7x4vqPqVCS9uoRNpBy8R67ytnzNTjeEkBvTYZF7VCpiMxWvxpEs3xYPmmM9t",
  "key46": "3JAB8T1iPscR5uH4qsVzmPiE5SRBCCw87YrTRAZckA1RKPtrSAiE46QbXUrU5UbDNmVTU3Sh6kG71SfmMDsSND8K",
  "key47": "5K8J2DiKtpB9im4Cn25gpLjx44Fbmag7WpLxV9Dpk15GoJxtxFN5f5fJ9EcPZXyARbCjMu9J6rmaynLicXdy1pNZ"
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
