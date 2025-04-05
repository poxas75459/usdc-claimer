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
    "Nh1MDwKfKKMD7XJnsQUwqnbQwSzRmofBonyVrATsqxsPaWxNsRV8w3jewUe2YqPMYFgDkqXfYSL4WSSuJERszSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RU73Gnb3zoTZPgEpMXLNtChFVHuSKXSJBT1rwUvHxp9UXMVL41gYYjPnnuqZjzq3G2a8AFGyt1DJzqhUQAGBMXR",
  "key1": "4ESNbLiEMWKeUYDngyiH6LKc2x3KzU9mkLTbEAVdPwpVGRmno8zeL5bsS4v4WRQjB3S8K2EPfeAzTz7wbQw8ZjRF",
  "key2": "4XXt87A6gVwtGv3jJELwBDvkuhiVYG2USVU7nXsYhHmfsDv4cixXTKDx8QAsv9UD7GG3w3R1CuR2gXzY3XKAjCAa",
  "key3": "26tChLa8RPRr9fn1oEjidfcGdDbKpDxEUxjNHCmQZ1x3okLgeAqMc8WjPEmcvUTGXAntFhUxEF5W8ySV2xHmrBpM",
  "key4": "5qWJChDMFjXB7dwAmgkSDkKCLreukYfhjkGRXbNWUV4fYxuZ4Aq3ambG19Yg2tiVz1MpTgwxw7WXKXufCJnzUayf",
  "key5": "2Hd3nCNPaAjBDP5WedjHK8urWfDQqJJdfZHYvMwKdqqpusRQdgtZMMUT1QFh51xVCKdK5HyVArUY5yn3wBsjLKSn",
  "key6": "ByzdQQKh3N3X3TUnJoimYFsx7nhwbrxntMtpcxhAYxYoUL1tb49SMrAop1djApNi4Lo7qa8qs7EM33mo3GJYjaC",
  "key7": "3sA1bbeWbwb4CrRopyZTW2a7tunWuJaYbAHYzLppmos2yPqGSstDP4BhnWzeLwY5j5JDjogqpxkEF9jjWJm2ZVM6",
  "key8": "4qi8vd1seVKfgowQhYZ9MJnhbsjtDNQMwgdMc8JoEvUAbQ6g8MbJpMPQVvj1DoS2MUsQNHSwi4no8qxT1c6aQJUi",
  "key9": "2HzXjuteG6KXuov9Z1ZP3rfkdDkvpowx9GaV3P1xPZh3NKAykTbPiry7WPomMtfMvjrY43GHEEbN7Dp8aqSQQLRM",
  "key10": "3H4WDdVbUS6rFvYb5sdDmRUDsiW99YcSudbr8AfLLnTe5omzumFivMUL82op5Vo3tow9SF3oSU13Ppz5P37my87h",
  "key11": "3yKXfYTwBwTx9KBqpvmZ9mjULsYnQ15wvnJv3StmD22Q3aiATUp4sUoeteAD84vd314iAFqJBugfQVZ7ZkPKZ2to",
  "key12": "3cjX9XU6DFDXa2tqicx7NV3sJwr7rQgpBdeDbkGcyarD3iGbGXFvK9dWrmN9aCau6bS8KFpryC9bRjLTjgFo1mSB",
  "key13": "56u6jUtrd9TUCk24c7Ka8VQU5Hu1qrn8G1hfMjTF33ZpXP9w6QZWMte3u7SXwW2C1Cd3KsdAqUDez27trjDrqh8i",
  "key14": "k5Hp9vZcbGuVx7HM6oBQR676tWLXdkZHTeXSvphPPoBnkAkTbF7EQsDbz22QZn8AquHpEW3Yty28o3hxmmWvoPA",
  "key15": "5a1zjevzui3hb1Th7VSSepofnjgP2N6s9xJi1bmUVKSUpTpCUxSeVeaCZRxNYmxjih1eVKe5vuTzdTwANB3R66XF",
  "key16": "2GdzpXmmmf9b1bGZH1U56kqCc4Fq7SYWyypFZgJF9j4PUkKv41cWa9Uo8gAao7mwXw2HVh2SNHyy78QzBjC8zz8t",
  "key17": "3nYJ3LAjgY7W5aemSJJcPvU8a1ZmXTkKun8ztyr8f2W8TsAoYgKiCEh8eSzKYX8C4Nu5kKZhPoaYi9E8Fj98Jnk7",
  "key18": "2fm4ienrnX4V2X25m8aesKCW6rSiyGgHDvUgSPDnGfrKEJQ6p9fEtzetyRkbp4T3NCcgV21S23vXRCSKodZmE6Xu",
  "key19": "3VY5houCHgKiaauXUap6aC2vmLtE13HrKA98mb4azzUbnNm6qsn73oCpFj94MmcHRVy3CLrVthjyQT5jFCPGm8Zk",
  "key20": "429M4t2m9ipc9xdZUCfsGVT3rc3vHc4B7ARnozfneuQ34Jz3qd94m7x9bCeTy9txsuz5Tz45HSrPzVm1zpZLt8vt",
  "key21": "4CkFJaHcjLKPFgmvExfjybhgHQKww9f4qnK5wW8w8y8giEofE3sqq29xLgV3eWmd6mM6xqFtsqEBuyvfY5nH7n8E",
  "key22": "4154zpscCAHHiHbnRRquVYYdcuLoLd2Yi1TLb5RUHoYzgXTsN3FG3mbngFmjWj8ccSfwnw1WnfgDqtzfTjtwiVEP",
  "key23": "2pwz6EDKLXwowZUscQBvaWWFyviGUwSF44PnnCktBS6Hhx9rUJEXiKNmQL8rJWMKA68wGKbWKZrpCyrtoc68Y1ft",
  "key24": "38DvBucfXWo81rMN9exX3deZG7Aq3cP9dNpBWoXJqz4DzHEfvPzzcPHZRP37QtSfdaPQtwJxis8e19ZVpdVDNdGu",
  "key25": "2Z8SFkv4Vg7h9J9qFkYztsu2JHKCxyZc1Wbx8mf8xXUy7Wp3Ha3vgudnNRG4JZs6hNTfmugqUoi9L4ummScHMH9r",
  "key26": "QSiggsvPiZkWFo83CjTf3btSt7zDeFfT5Wj9ca4wGH2GG76jnfS9heJaSh5YLhm13a67DqRGU72y2WxQ3cv6L2Y",
  "key27": "4HFXipnDGf6fpAEhHczV2GbYACePyGtS4U2fzZcmwgtYVwr6KGJLyfiBbRZ7jY9LfLwEk6o1WBuat5b8pan94FzG",
  "key28": "43D1FT5b6ibyZ9Xij5XuNnM4JG7e2fmycNk3sxoy1qYz25V9kjfhkvauohU3XaiKZ81dRDJBPev6T8R1a4GyZvFS",
  "key29": "cjgX9WhigfGVLUuKoGUPHLQExAuHpz9AKTv2u6omsCGx72ThLKLYDYBfhSoSgDnFP14RGH6gHSh5p3Kchxaznmr",
  "key30": "2BicKoZr3xxsBtWn9MgX1fcjiMj1jNyZgaobUP3dX2TZkyZCfcHG4Yjj2ynmmcaZMobW7qNFoPqaCVyHuJe5KRwa",
  "key31": "4mPERfv77UnPbysh6EMKiZUFvcjtaA87pJt8UvinnKeFJuSPVNA2uEDKkC56CDL6heuQ8Hpuzk5yi1JVspmupgap",
  "key32": "495tLD2kzAyqxskAtEXV9hGLU4KSzBLXSfrbDcXaryTt9iLSFQR2BbJZQwbKt1YsUN1moj71FAUf7KEptaP6cnBD",
  "key33": "4eryBps2hzGHgg1zmnzdXgqS2741zhjMRPWZiVPwH88CtfVpGaGYMyqQtVavFny7qauz1wb31VZ7FpfmfoaHvvTo",
  "key34": "2zVAeXrFuNMUBz3sfHdUzs5ihW8sr8SPwjzqU3xLvmzCgbGUWCXrVurHsctcUQ2eDT2kNnYcTTTFxAzqKkdsEyZP",
  "key35": "34BXaUNWMxuTCQWdzAfir4qqCgz4a6G8rvm2gBtLmpodddrPU3zBzM5bFhpofeuXdNJxkuDqbKvZHZsnZmtctvYG",
  "key36": "3zDnYStenFLpSgYwXi6kBXDukeqdqeHryjsRYzscdgiY9C1RvJxmEMNan2hwzoLXK4vXJv45euFdp976DQxbawxe",
  "key37": "ALKKsiXQMok8PcVdJhuqLhcmcYBhGL5ASy6wVbqoADEdtcpqu8iNfXziTTQjHvhSbFiVwsL4z7mGpbCF4FycAGS",
  "key38": "4bbEsFoiQeAgRMAHh1KHbimAkdArAeHU3vN1tBdzheT3EcEesf4usV1QRGRgxTn6bB3mjCUzN75MojVd1ES5hTLh",
  "key39": "3fAYJM9qYG2qCvvPVmYT72tJMxFhpdWUAvQEBUKDjWtsVYd61m2fDhSjMFmmbnxKpCxoSaGnypw7AFkxXhLpjkqA",
  "key40": "2XZQ3f2fJNja8DrsZ7xMH4UsDm7KGPMMFeeDERMgbfu4cpKwLXFhypGRkHDBA2zL7fCVMYUmHjjK2gXUvYH84wa",
  "key41": "wL37JbruJHwrV6cmi11r6XUsnndSL4QoeTGRd7DLJfjPHn35xTcErwrip99w38DQwUn1MGcEurW1ai19cH6mKJm",
  "key42": "4ez3QA1GUAetunjG68bni6ZoTBAsdyhsY2QtmCr4puWLkigBFuP5aSG8GRmUppNSm7nWQBy5fdgh9o6kv2Mi2Mya",
  "key43": "5WK4zFt55hW1GNATNAzZmCwSWxcbRvA6GeqwXJn8M3aDKxSQWfwkRqmHAhps97hL54Dsou23jGjkkN69yH6tcLUs",
  "key44": "9Q6Vf8doCMpfQ8i5S54ZLgWkRhcjaR1uU7k18K5eyWXnPR9WuRJmEQNcfA2Vc9EsU4dBandMRXhSS3Cb9rMj9T7",
  "key45": "4VWQWwzB71D9bAHDJxaWUHejY81a84FQVteh2AXrKPUhpqQndLgh1Lg3g4Pi3tA3G2nkZf4a3PLp5EeBzqYaWVjm",
  "key46": "4n8mrGXhTjCFTA4mFj66NH9iuREgkNkr8BWmYJpkqfgo5TVUpuZLG54vx6P9bvzDG2afoBu3oHgWFV87Egb52dKy",
  "key47": "4zuJCpPFecMr1U4xtSAjG34EQTfvhg7HgeRMrH3qc6AUtNiQJxEvuYTXNir4zMHTwe1429pd7rMxFWuNfEbF3isT",
  "key48": "5XranrY6LwnHU26NJCniJvAy8HxQg3ccguiaHiehojUJ5oGnpPwGZVeQRNBbd7ktF9AZiEW4mx5MEBq5G691BNVk"
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
