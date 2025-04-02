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
    "3cofTgusFNWKzSZ57FTGCZp65S9oFKSgmcg7NGCrfbDF4pnvDULHVAvQidvXyEsY35b4Eo1gzuKKL3nufn45triv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQq1Xn6yKdZAgivCnJnLYcX2YZv5KsMgXopxY3rDBDYxuTLrMFc7bqmmtKzuUvMB9yN6ze8RejvVJ4DSDAerQ7S",
  "key1": "2FjGjHfETe5Evk3rNo2zvdpthiNpm7zXrYkBrBJSAi4pErQUmNSGsaYAVvEvqbtpYMKi8aj3QyCDzKEcdex4D29X",
  "key2": "4WPHSyqDH68UYeR8eV2xAexNteAGFtHhqfokjmsSzxhRma9ESSGNiY5456gW1ayMuUjHf8P9z3ezvdqTAksKWrcN",
  "key3": "dVaS1sNTndHSV8dDhGWaf4yAUo43ZCwWhbgCmUbeU2ze6PZUCatCwnFC7X8ofWJnbFJvGLcZseM6g9p5ozD9gKF",
  "key4": "27XKTvsqA2S8iepzeu6PsF9JPiMqYgq53N45gnSqqWshDGtQ4ChBSfhE529EXT5ZAuukwjJ8ooNeg4hDKJmdhhnZ",
  "key5": "FU15ZFysHAHM9V4yhL3KhhrcJgEMNkgK9oDw2h4b9amX6NA7msMDShhhZAoN6k4zoVwg681UapfC8FfYy3VEfB3",
  "key6": "acJEAyiWVQUe7cbbN6k51h6mXknJsT8VSznVj9upxzriF4yxM8fAnq1SQCFR9WoRUwZGh67zo7c9EsieMwmCUHr",
  "key7": "3romg4bcStiZeEptniQo3UgWpjRVBVdwaCbuxMTKXohtoPv55W3Gwruu7M8mvFuZMXXBiPuNNYouuvwxQy7QXdED",
  "key8": "5wB1J2iQ9udekYKKuFhAiw5kYUo7tbrRy1LKP8FkzQ1t8Jkx6PGACPd3fr3AHwgyRZXiYbPS86DWQ5aDTztkuvg",
  "key9": "61j64L85wq3rJuNxt6wTMuHy2QHAz8ykSX8ViG3QvCresMEDW6rpSgb8VSvwrU7PmxRtZYzfnfLDetteUE3Wkyrd",
  "key10": "d1gn3VR7z12J1PjCNNdukGayhMLJEkywojuzMFsKNLKYHXV6CLJWEnS3U1q1p35ibZaNdiHXhGCTkURcRvo7PTH",
  "key11": "3FVh471gN9JPVjUXDxrvGuGCuikLjc1WMFtcwgrf4Kbu96yr8JGbQgtDJfhaCn6Kxyy3PkUzTxjZ7DfsuKCeSv1U",
  "key12": "2GSPZxtyJrgZsjcmF4UuyMuunTeeidUMb4SU3LrYnKMroivHvz2DVVJ2DyG69iFBKXKa4iS3dxAqjXtRP6T5Zc17",
  "key13": "3C38WWMehjBU3HGaDMou5AqYn4GRdLFrQEAH7FMCABppF2N3jBjbZ9yGU7wtw8j6ygSkNQKYKknrkgKX8xdHJqNq",
  "key14": "4h7Q7Py8pFy73SW9xKSSQUGKnrDKAGHTM1VoGLVCQVrpAigyeUjoJKtdLrjdaQt2TR2wmFqG1wmMry22EUU9Cv1b",
  "key15": "2Rij8UTH75tQwxdwL9u2o16j8QRjWPsdRwo6MtJfbxnS6pWw6MiUe5WAaSX1BkuYKEPrs7eDKhyhNmxaHRNFgCvG",
  "key16": "2Ak9xnbtVUcBMvkNVuGShzwUcFKLA6CJKM9N5KthmJuXwvw2gRhNaeKnNvvw6BSJHP6HqBjSTmXaQYYjvtAfJWfM",
  "key17": "3FCJruzsMSdQTUvuTRrrhM2bGvspHVLACFCvLc588WrppZY56arZskDL2z62cXBVd2BhAuwgPugz35nLEKBWZ67X",
  "key18": "5Qju3YoHGtEJRoXXFYF3Ytc34W9KtX47PuKm9AuB9k2MRcPpXW5YR4TjJGRPJ5DDAFt6g1TwbywNGtuRAKn3gKGe",
  "key19": "5tWjBNu2x17iZazoehJtpgh3vrieiuXn3BDJWaD29d2fTEGYfRByajvCwN8X8iQAF6vAnW4og2AEsbkxJXhUHHGi",
  "key20": "3CihLLuPaiWQF7ThivCEBjV3yhFaETimdBqeST9yTPDtYT1WmU9uqVWupUQ3eYRBcSP899pkmLF7xCeQXxftrUmF",
  "key21": "48KGcgEgMkQj5SRuiuJDZkT7rfEV3tyeVfnnto4nVMkixk3N7p732hPVKoa7Kq7tP1EyZwefEc9EVG9pF3UeTVuy",
  "key22": "5UewjnewKA2Y28hp2ZYgYjUPvx2kBGE6GHwKt8hWmrCjrm4JiQoZZwK3YUEfJwo5rfiygWrLZvzvF4nraLyJnRKf",
  "key23": "3YwF9KZrMURrKmffrBJ1Ykbmfknt7tsL1gtE7XdiVsTZELQM1H5nR5XLmS1syXjw2U9VZ4YgyyLVijzwY6ry84v5",
  "key24": "5vCziH9HoxUzwbnucQHhGBoaHxxvxoWpeHbwismWpGsv3pFh5btY4LiZGJAdciPhoZYZnc7ZbvBEdi2qh32JKwPn",
  "key25": "3ZZyRCzPfcCfwvm1uDw579HZKqg2WewCSPLPfRuHoEBYeffFCaukRecknoZ4xVZWhsAKXuWVfTfMZfsNshH6MmeE",
  "key26": "2p69NsetRyBgjaxeGdZnDrjiwbT73UbS3E2AvHMsziwGXqjhYSu3p7DQMDZJW2HA65DBvGk2SNfoRrd14DC7P6Mb",
  "key27": "CmBBRrJTdm8gWLEZ4tw9pcAXHS7WuD1XaCczKp2EicnWVVBpBRBW5yh3zyCCAEzcBH5LpHcPsUyoAVmU77e8gsf",
  "key28": "2ZmxHRPgXhxoX21pBvHChFjsfJhcA6WTSnU1fiHh3E7se21e4GdURNhz23iggGsk3DvU7GmBphkjSRYqtTTyT9mp",
  "key29": "4qjTpyA28Nyi6UcJRvdFj3P9MrgjRgk8v9UwE5bY2Hjj9Xivx3PsCQmHi8csKXUkhU1zAbgVjrGepL33W3wTCaDw",
  "key30": "dEuS4mSq8zDeJuKzB33as3jtigNPFkUZXY7w8HzrsEyxyS5GKXboteWUkhSTw3tvT5gq8vX1V2UBwLzGv8iHEMv",
  "key31": "2DEKGCQ9KYP1RsbMfRza9hEyj5yqJcnZRUrjE7erWs43EzPe24JX9wTZqqNqogeJmKDx8hepUhR94FkySo27H7co",
  "key32": "3ny4dJFgpsx2zEWRvkq4PisXC8NMP9f3ZWs9yMZNYiLpgdJcPznKiW72vrDcHt4KrTrzmHq6sqAFW4mmhs7C8BCX",
  "key33": "BVRskaAiciiDFmJHRB9Amhf9taKB4ahE7iLAjL2WPJExQ7yBewz69jkbGQre8hVXBnkgKnj1VzWUbCCuBqE1JvL",
  "key34": "4AbQGpLBJFqynpztKBTH2tSXH9woe9NxmGMH3fUxJn8TaHjYK8vKxtC4wjw1oji2w4Fn1jxvd7ozRorceTDvWmzG",
  "key35": "2VEt3CAyj2XeTYytdgB1W7qDvi2qe1A8M14zXyyD6FR3vUQHKbGggkeo8YKzsaMRxCkxEhSNw49QcNqJzBSaN67W",
  "key36": "DA7YNpJ8uwCim3iVU6DMa6moceigMTpG9EK4hDKeWBVw7T8cycXqHMo67m6TYGWSy3Kx1tUhbxFJTZMtchLBmgQ",
  "key37": "5dgn1qV5rzUzcbGhB8zkbKHEBE659qSJHgy9vPKqLgWyfkA7qNqeCaoT8i6aremp8cBpidYZiZVSa1Eq3PWMALRC",
  "key38": "5DZ4FDTabVs5DW7eLdgVCmvYHUmitooHWQCatcPH1z6nZ2LWRYZX59gDyxfJaX8jBQw84VHMXuu8q6GEbSqxKmc6",
  "key39": "2Lpinj18Y9kNjK7mCsBpkpRehWQVPaCSwCVMpgGvPj6BPHtSmf8sJGPL68m8LnZYLE1ZTT6zAoKPxStCjmjMU82H",
  "key40": "3SYqD6487tAqGwPG8vy7MamtpsF7rDSCnTc87aqj3TnMGjsh77aQRpANkK978q7Lq2cXaLfzgUphznTSdM9DzfX5",
  "key41": "gvu6ueKowjtbuPLvLtR6GygDSGk3YsUmt3pMDJpTzST9FeepedbXdff1w4SUzPJiyCagFyy7jAA9LUoy5yYayLJ",
  "key42": "Q1rgiGuNtWM1EML6rgytQhNCU3i83acvY4dc9w7Rgs4HJhUeM7bmag6GNkRgTtbzN6b85zeDDu4JkcUz32PuQyX",
  "key43": "4DuCDQacz23WwTkQaezhmbgDGXa2XQN77K3X1w6wg2eZ9ZVyY8eEsoCjSfLXHvJ4Gfi1MrVBTYFYdxAe9EFqLgez",
  "key44": "j5hL9hfGEfJxY9c14uPi539jmWhZ4TPr63DPAyAZzUDzYHkoF49fHT5VH9i47kfoVgiDPCg8XZ9VN5kGLY5v2FR",
  "key45": "MhUyjacmfTCfuGQx6ZoLKMA6Vkvc7iXtve7mpmAsaqCihgc4kzHXptz2G2mEiz36k3bho9Wwp8Hs6WfQhxwjF4c",
  "key46": "2iNSorF9b4pk8XoZowVoQrgEffHgx6MZBuUp76YzorDgWxrFTbqT6QWuxCjUeNUePJHZuSMTN692u6t2F8Pe7F1A"
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
