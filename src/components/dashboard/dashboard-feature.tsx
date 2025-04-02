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
    "9qyw5wSWPgUw2BQ5jX61FnasbnETCwvG5vfkcat5cMsNsVwrfnGfvqFEEgw4pcGxjGYKBGrsDC2oV72S9YThZMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuPCDTRDED6df2JyQGUw368M48gYKBhqCDwd9XzXB4NYZB7V2QoJdrmon8BoNqycFJAuBuvz9RQe1tC1ZvysHuY",
  "key1": "4fQ7cCzGDuS9Pcy6f9t4HfVpVGUVViCX7cuWSnawqB1wAvkNxgFRBqc5YUJyhENrD25YbrXmawc346oJLgeC4rc7",
  "key2": "218XJLsCxNGDGQGvYAg6GWDtiC5iYP4Ek4t9QewBrCcyVjq6izZKJ66X7AQJQpjZtuYm9viKNda7KZUWcGQmYKFt",
  "key3": "5Ws3gLJ7WoAWvuDnRC8JkapmDCoY1M3dANYbTr1jr3teZsQU19UbnBqFh3q4uG88Jqgn6EysrNF3o9YRKYZTcHaR",
  "key4": "4GB1ZZqwehjgFaKP839oPDJVE9bsb2x3xWh67Kth6jj5y1wN9M5VnqatwWAjxVX7bQRFaqJbQoHiK1vtrSmKj4D4",
  "key5": "3b5Fe3CzXcLGUX5B6fK4BtHhfjZtQRzjb9taNbU1Fb7PD3HfftGyjNVnDR9iyeJceB3x1emy52wzJyS88eLCZiPt",
  "key6": "4skMhsR18Gejxeik5XCWKtGRd6tfCYMDHyAS7Q4UzNwYZPNAFhCdnufhmSdRnLmMBQvgaU3psZNwKZgTUBdn9um2",
  "key7": "5tXmByQy7nKBYFFL5qc9rErTCvk8QQ68BkdeSyQwFECfD85whKuBmgGTHLALaRmBiAYtXiPTvPuyXyiwycpf1vhx",
  "key8": "5BRQq4C3Cct1khr3hc6BLPHpDAA1RzFdHkx6GGK8SHnHxhZLLDqyuW5AQDUAXAA7VcDC6Do2vDiDfuUsQsQEdkcf",
  "key9": "1zi2cXhF7NZMxDcCRqG11XRA7v9fkR2oYweaayqNa6zad5Jvk3xckDWKevjQnAJVKqCcigHFziQ3d3pEEr6gTE2",
  "key10": "7UzxoAsuGKaFizM8u7eaqA3hckeAVGhzjuL4W7tmr3L4SSpbbREUEAvVod7LNRwngmvqHCYRNJhNRDq8ExyNUZo",
  "key11": "2a8e9ZzNEQCYzmrXdGGFZknzRaSHYogK2ZWjRjDsarWbhfubYhRi7QdjqWwSGzgiuEjdMLD1ytmdSqyWKiUeYox1",
  "key12": "5o9iqBuAHqDHqcn9e2QzwCE4gWT3XkfC4VEoBrYMHorp95HQGENGmwbFncihbAd9F3TyMydVrwCBFt8LkRcrewrk",
  "key13": "53MnjfkHPyvS8DX3pZzTFaTeJiQE6dCBujeCQytsr43py2T3Cr5sjJzGgJXYXfgwvoSxdPavDJ2L7Sr5Yivndzfk",
  "key14": "2C15U8bmduqAPp96vNEeYUyZxpMSfJnNy6BRJaJhK5vjXhu55CRtJ1wg8y5yH7CWJ5scsqg2C5Jtt6eHXZMbNRgk",
  "key15": "2YQkZMhCTqmK9yBcevWBJcUsPVgNkYs6A6b6u7okzni2hvTawNJBUvVC2b4vkKF6DSNCjULAtdBvbPCt3M4UH7PQ",
  "key16": "3tUd3aWyrdwhQaWc88guuuBkofoH4PxcSFEDs4mCrmfTM1EN1DmQBaRyDnQnf1hipoV87EnDWsqxBpavCkdecZXh",
  "key17": "2PmPjSSrsmcFe4mM8VqhZtKUdjdNiPvY3TVnJQ9e9tJqvoSU1EpzVw6GdGGkou62qwRTQHh6hmaCv1sJShb9VKU6",
  "key18": "3mibotDNshbAtDb5y4KMbYezsy4V9ykrj5xaqjtULQCC4xNxwpjnhLNsdZW1iUR5UfkTVH23w6EdcB8AHEXegxxV",
  "key19": "5BxXfBxehjW8o9TpTRf5yd6FCtXuiSbR8M6HKyH5wXEveM7R4J33LAuP2KsyRW8TAhkSprmqUkVsZmRuT8iQ1Edb",
  "key20": "4S7KZ63XjHJEEuJe85p9VKHLngKamZc9eL4L11Y5fygKyEkBdubd5YKykUvLasDx8GD2yDDj2cfr5XrPTzvLVibh",
  "key21": "5T7WRkPFJm3qjYh4pYS4FxvqYt1uSm1chC6hnAH3s4qWS6q4Wi9ECQGY2zJcyi5krYC3pwUa8Th39zY32PjneNV8",
  "key22": "4CWeQGtH5u7ZuoFJtC9f3X4qKmaS3aTPFPpqPcEVFxqypXzEzaPZnKzgFXJudqWvbANFStKH3Vd8dWMtuCyUGg8L",
  "key23": "4upZGyzwg2Vh8yy3T4wZC3W8zDBvwaCSm9bs26hoLwtqdi7XgGxhPiZbs29VARZ3fbCuCveGRdUZZpm9AYGZnkSd",
  "key24": "2HHpnxRrTUoTUHhDYuLuSQp3fs9Ese89mSLMFeBiTNwdqntYXcTAingbzh126sQsgAHemJsfEWJx8eCvfzDT6UVC",
  "key25": "5UtP7RmpjMuk2esqynTMQbxUqCu5oDX9sLi5FqnwV2rgKv8Yunm1rPihg2cTcM7fb1wQgcAXkUcLB4m4paSamjfT",
  "key26": "CzKcDaoHoTAwhBP7wJ5HF6XLL3MZM7XdNP3JFiXU7QGuLPhaDtdbasjG85XNiZ5HnbUW8HTdAvv1wYFRYiiB9u6",
  "key27": "3TEsCcgfuwWrgFwy4gBFpZ4Lk3f81gMThD9dwvrTkJFE6EPEmn97NTuaZ8LtHcDr9a92UnNWTuHotXacSWaUXh1m",
  "key28": "666Ys26ohRgH4Jo9mjp79cvHyiukQeMjV5fNqpdyNYhtHy6VQrpyAB9Z8SbQmFmnRbz6kvGEtSwnPsXHG6YpLBJn",
  "key29": "3EVoxBKgyPFt5A7Ds95NpBfDYcQHZJz8aDXWreEwCMq63hV1qh91MdsJTtHxGBbpw385ukrvgsu2mwecKPkuNjio",
  "key30": "2fR9Q6SaY1uxkefUTNrdpYEwA5qS8hLc2Q3vCZpizZgav66hCpJeMCP8PrrmKE7gXPbHXjurFiYBoLFGsBi61yX3",
  "key31": "2GV7gUSZwuJAzLi9eMrWMafvsTS5mrrpB3RWoNPi1MsM74Y3xyshZ8hqJRMvewq4HuXLmZbpZgtw6z2wbZRoX4D7",
  "key32": "2VY4LZbT63uRL6rAxmsBgYSHDXEdcgeLbHrPGZAcfAbJC56urePm4ZEnGRjdoabXMz7ufqgfBkWd5iavK2dchEKK",
  "key33": "3fwXhYzpuGwaYRrdrLzcuqeEvdEjaKJypfv3J99nDULGQEjWnMpGTaJ4PJgjrMkVGndjfEiUYRCSAbF8XhdeCUoj",
  "key34": "5JA7PVVhpPLf8yuXDWt39esY9XUvd3xer61aCmWj5Ye6wa65Pt9spdG8HXeW1XiVQgAyZUHCfUeGJGAYvieLnvE9",
  "key35": "36sk2ZgdHfB5ND6pe7CX7GRQHzkDfexgYg6bZoVFLvtAEAEARkoWGJbcA93ELguw1cutvxka5LWiaNus3BT6cWdt",
  "key36": "3zUBLzewZDKagNuX5sNvwP47ExB71hw4mrTUPhmLoBxYNtk1hnsAR6RuJxLyb9ZHBdBKggbFTFDnirMJwtCHVNWA",
  "key37": "3uy9W1N7hYzKgLGHG5UVVNk8qhE2phwGhEJ9q2c7WNjGJtL97YU7rdxzhrCqn32XRRA6ApXeovj7FwG3w2ayv6r8",
  "key38": "58Vg8P5GoqddL6zompTiuiX7NUmktm9naB8XYaEF4qoEon77AoU9dD6fLKk9GER3gA4YzMd7ejwrsz5sZPKBnMzA",
  "key39": "DPy9z2KUYiNF9HRiJiQQH7vDEExoFDxk1RrUdfi5hNXg2eFd2aMnkHEFDaZ4yoQU6J6hgd2UNY2XgaHh67c8NJp",
  "key40": "5mXK3G4mwtRxHKwppie2xS3MHsBonNi7mPhAqQ26eiMycpBqa8gGZZqbHbvo4BGPTh4gKdmhUTy37zcGBrjhKKH4",
  "key41": "56LH6Vked1mCTsz1voK5ef83eokK183UjprWsKzBedU13xnSUweoK3aFz3VuKQdWuVDu7LwcuCSRXJaCAjtNTqon",
  "key42": "xnzjgC3XxKRET82HhgjMw6JBC9jDpXaZGnm9B1Wj7NVBP1UQvyHhmk5gV4KV9HAweMN8ez1nNNw99s6m5J3ZD7H",
  "key43": "3kaYpd7MJUq28muXncZQ5spZ9PWVxuXAoj1drWxksYQyL4FAcW4q8RqH2geWb8xGDtQiX87xLEeNRsbGGvWnJ8eg"
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
