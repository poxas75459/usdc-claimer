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
    "NJN3NkskMo3tx7gNTKKys62VPmf4c2BLTVYGiZeBZZekMbjbSSy2uXZPQ2D9J3EStDNtnr75EBYHBbk3e9wUL2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "296iX13g8mBwzFfWUeB4jmxeawo8Gzqoa3tyv9mHtVBWVnhhZqgmAxbChc8WnhaidFM6McgscfoRFAac6oFz4DsX",
  "key1": "eaVhuznKa7XmzAfskvesygzgsLS3QJ95rPQcCC694f8c7z5EeLb5gTEVHJUkLiMHvngChNM3Hrf8Tpd1d1fKUww",
  "key2": "34hJFquuDeUGJqBtZgTznFj1tGTM5PKQNzuWPiNdVh9de47Jj3fmAjAzaHVPrLbHryutNkf7Dr9ogugKbRVbXSsG",
  "key3": "n8cY3E3AKfbSsbTNkKLQjVJddKY19nrsc2pi8uF2btNncDoG9gXCUTB1q4Dn9JWTRMEyn8VQE8eqtnLhGWs5VXf",
  "key4": "4XbXm5ZjbmsDjwah7E5gcSSEe1e85W3wHp5CaXUyShEatHJz4FvEdmDvMDrRL2mE2mTRytbH2ghCLw2PN1LHrwB3",
  "key5": "3uwuN4sektWxdMCT81SQf9hj9GbgEXTizbdZjCGR1GE6Y47c2cwEapuGFJXYDnQQNbQok42rBQQPMKJ9hEM1wX86",
  "key6": "3GVV6sWonHHxjdP2DWuSxbg7j6pq9nX6otNE4Gw2LBN1tL6ordveY4VHKJ6jH3XjkNCVXiGZXwnzeRG681meqtdw",
  "key7": "NsVDavS7Xemm7H5shu1QwSTrGrLtUezDv1fGtbF81YAhMKLd4aYCNmNGPxPVKfSdy1kW1iXHhYS2sYwKzj4BnNd",
  "key8": "65cMArCo2VhP8Ns5gN7xBpM5Tkv8bvHohuWem11KAygb5tNDSBjt1DdZQTXESBd9P6TKLudwzGLhXvg3mtwMmdWW",
  "key9": "2Thmbiiv4XbKqQ288oVZ3Kref12XhWsiuR4bgi7tRkAPmzeH411FdTiukSS33CWkWtm1rMiKkzXdmFB8VjYkhXZm",
  "key10": "4UENQuyZHLwZJg98ZNRovsjoaceJwN9LhhNkrRyPrrWFd7Jnqn75Qjojxm31vWVHfy8Yz4kAqmCoqvPMybUUdYuz",
  "key11": "3mF46EvQvQcbhjMx4pzrCcfHQT4uM44PUs2HBE1REr8cBek4rf6XVEEtqFG1vRQYQjTTx4XDDWeSSNhNmtfEaSUs",
  "key12": "5aHDSunNEinsdmoMuRJgkhbnuGdut5SzwmMHurbw8TBNXNCkguVdUZ62c6h5X1JGR2QuTLmKdHwEqjXA6edBqthF",
  "key13": "51v2qn4eELFw6Tk25upMTbRzuhky9gjM2gNVVYrYWanTz1DLoXntQmC7gqPujTFok8NEXFUWchRZHcuemqmKF5LU",
  "key14": "4rm7qMD81bSmq8uFxPtRNcMdiB3wuAqbEgmSt8mrRmBLmdAttdtkoYCaaJ7V1yoPkA4No2jUJwVLw7oAGzq7oeai",
  "key15": "4nMiqn23mnNDLHn7Vryw4qyPc1mANTq8hVybVs3Fgim7Mn92CgHDzmrqtUT11sdLvSgQB2EWjVJiSDHLozxoNMX2",
  "key16": "3FH7hgZTJCKHgaXeyeKgb8g3cX6h7kqYyuwZd5zLRRsQih8SZ9LpvoVQbyM7LGLDpQwNWjPCEFg16Abf1ei3iwU3",
  "key17": "3pgta4iKBiLPx1FgMfgGMnXkpwddbqUJDcyfHGAX448USWtyGkpAG2Sv9yw24p6wHjBd9gTioC35Fu9NzfxcFTed",
  "key18": "3ctfREpsos59B1fneZBSAPVSGvqW9Vqs5nEyPBExbtRew3phS7JC618YRaf4PGntEno947cCHvn9ZpWUZmTVFnm5",
  "key19": "y3H4EiAeSmnmro3EqBZb4v7A8JK8RK5SMzrwv9pS2m5xrjQbgpEcC2ogZXCw1GaUoxtXLhKZYbGbtnzMNyYpMoA",
  "key20": "5JEchdB5Yitufri5HcJxEMyPuW9qMyCQURvNUhUneoa9ryxhJmSs2srNqMnxqLRkEGkzgH2McuSqrEi3PLz5w5HB",
  "key21": "3nBE3mvbau4W6tmPk7uU2ZsMy8FT5QzuULRnQjArKSdp1LhoKCJ1eRUUSnF1jEEodsMzHdmuXNBvM29gFTfJT8Xv",
  "key22": "4wfjsXPrA762UmBa6CCiB3BRfJZy8K95YXJkrekRA7E1xChwYNKmPFDNNYqYZtsBatHhpZwKLx4xYVnpEjk2vE9c",
  "key23": "4w6sCZ44eMvwPfN4nSXiF5qsiW7VwTT9CzLxYgyVsuRisc5QZAYPd8WNpu1RSAiN2raxX9GrcZWixHgNVvGvM9gR",
  "key24": "5UMZtBe49QVKZVWBTYAcF1MQDBf9mc3V9kPhKKAkahWjbv5BVyZ8CuoUs9AFP1MNmbfDJ2akYbkEsiUEJeoSDJjo",
  "key25": "5XsC2B28RXW57kWr7RdZocQve4RNkdsCARaveMjKf9GvRHDBGjZkHiqSTjQAtNfDNdV5AdGWCMBDSVMzgfifSZyL",
  "key26": "4z472KiQ94tdVxKzGNbbvxFXnZmxEyH6hwTZZZbjArnfuj875jkvYX59YYtmqSg4yKg3hvjGFn5wNXQwjSpWfpPV",
  "key27": "mxnMSqzBeS6S4LBRztCtK2zvLm3QiMn5ua71r4kukHdDMX7obXuVYN1fiWioguagPw1noaZH6JcgQiK3aBt566N",
  "key28": "326Y9EjTtRJJemyTQL9T26g6J1Q2Ho9sZd7dDYxcJoAvNSbQymLdnR5Yh8njB1DxhoySUD8um4gGqqCNoaEVigMW",
  "key29": "5dgEAaG4KtV5yhwvwWN5fUwFgQd1jiA568APMV5gvDMgBcMy7Etf8TdiQnDMM1BXwcYg9Ha1n8cfCkFCwiNzg9cq",
  "key30": "31ok8stgsuTaER4UPv9SaBr7qfcGNuSzvdCQN86hb8upuMZwgWEfwmLeLWZC4C5LNXQKCBz8GkAsDtBDa2HJRTeF",
  "key31": "3h5A11CixXUY37yP7J2P8RQHNhmG99GDsDNxbaKJJGytqdRuBsKmkiVqEL1gDtYrhHSU7zNjgHzktda3j77kBnEa",
  "key32": "3xnaKJZzpoGQirCjyWkoRUxXqgQy4uhDV5iw7heHtVjXpvTfvxraUZkPDbLWh5MijC58xCp9gXQcdPJKhihH4BYM",
  "key33": "3Gaszv32YJ5gz2VTjEnCdhNZT4Ft7E54vb7bN2Qhw2GTfsaVAhfaB9YRb7mDxWdTxFy81arg3xNukrkZ2hay9Uav",
  "key34": "8tjnaztWvs31WJu22skc8t26dpXKTgsJ1ZDC6DwDWLczCYqPYfezYTuJBzgTZ785999w24iJi5a2bHS979JSMJn",
  "key35": "3Fj288zz85vjbLANjusgSprzoz8UaChQEveUbu8mtdfz52JyVkMzsAc6KfSt5ZT2bkfBVAYUw3M2XczHDxcR33RK",
  "key36": "4wsA34NDRiDqDcf87xCqGUsV7rcUbHppodbYHDc75MPa4JK84SQkBD6i7BxEP7Qm9GGjN6WvovG6jY7apD4GMDR6",
  "key37": "5ABY3jxuwEntkMSgiFyFUn8LSHZvnZfkdWhxUkLCXVU6kFa3mAvAfPj3Unk41ifYwVpzSgvsnpZG15fb8xx4AfGb",
  "key38": "va52bid4ZtXzHZkwNK9GqiyFeSxoiDq1y6AAqZW1UqHRvGtkKzfFN7YTcVenrTY4wPQ8yWz8Lfvds2i5AFHDPLo",
  "key39": "5rCRi5CGMkcGpDYT6d4va7Em7eJNhaXnM1KaiYZMirBY3tu26ZNw6ujH4hKaGBUj1CSbgS5fVYr1kVTAYN6aV4pc"
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
