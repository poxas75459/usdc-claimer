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
    "4zXYSMJL99wXa1o2yUz2cWcuGAXHCbZ2vMQ8WpNCYS2rEHG3q9YRMQz89wB8tvkiPk7rSd3JFtNDRJhKSqv8ZfPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbebDQ3JUPxUmQmZvZLmG5c6acz5CoZBdNeWkg9wBd95o9eirTEVkarU3X4Mb4emBkU3GYtoPYJgkVMruZAhXbs",
  "key1": "3i7ozR6QLPVP9ksnKdPSXXaoizhtQNEot1bMMt7nyJ9tLSuyHh2yqnGhBDhyCGYFucmUFrt6pto1X1RvQYDjTN3x",
  "key2": "4bevEnAAmLL2jHoZCcE7KX4ynhsF77gym4dBeCCSKvgYBpSCgVnDLPzDPLzgXLnaZKkm52qMmPuN6DSUCzT67ix4",
  "key3": "AqrrJ24Qf5FAHBXLsHSCZRAA4p74UxZrNKgYofTC9ajmgrGzFDaymtfX8Qu8Vr8QD4PBpgeLCjoUoJNipFExE9z",
  "key4": "rP66ZXVDwt7jXbPxbgn6yoQT86MAFr2Wr26N48A8K3Atob8FcoKE7Ks5CVdvxesEWdCMhxjVzgtT2tKSfH83XbD",
  "key5": "5kjGJa3JTwvmUiyVzRxsjhr3pGn5qPvsTsiE86TUs8HpTJjAp7ygSdonDcJEcYeBeKyyCcKEaukFS2YXD8E4pgjR",
  "key6": "Y2ENFwocAM1dWWGyJzYMK7FqTyHq9f2toofGWJvCkbEV1eessx16ZUqAn9HE3YfMTuCujBQMghWkVX56j5ChVWM",
  "key7": "4xC9KkN97wg8WMFTA6jQDgx6u8ZKiGWK7KJwbGmEP9yX53NjKCssKaysQtguneAZLNzHQnpLAkvHK1yDgYKYvzL7",
  "key8": "3YHUhxnpXiCjdugWUBZ5AQmjzQ7NSYfCdXHqGcr9pVQf2gw6MfPGBHPHouEMitJsVqy2SmboAmQAgV1G3j2bZsV3",
  "key9": "eL2bWcjWVWmcGCKNWztArKFtwYP2ZRJeLdaVxEtoHGvMq1v58YMye1GAKyadRi1iLikqv754Rqb1WNnrkXVcFkF",
  "key10": "38y4cPjxgitr8nbjHdbw5B6VohJYDnDxGgoobtgsWjYsGrJis6c6vbE5rEzd5RxPpVVwYcVVNFiVM2nMxhHi6HhE",
  "key11": "3eD4BQ72yhSHD1w9kpWoKd1oS77fWdxwgRzXopVwYHjpjn8Q2dUEH3wgYFk2obszK6ohX8jxQz5Vn4ggANP5qLSh",
  "key12": "4rwd66RjBvFNFByB8S9Bs68efoZuKDM54dtS1LNYkReh2euFMomT9HhFa3MPp26phwSnb5dcoCampVvhWywFqphE",
  "key13": "4RjXLxoh2hftfcBuxsGVtrxYdjGLEA3k6ZqCBxnxQqW5ttB1moZhf6sWCgtAYUgyGm5zRZ5yMx1zP35gwF8TpDW3",
  "key14": "4hkuGjRxiQAVdH7eL1ZVJ1Hkkz1EUih3YC1rpwgegr5oezhNyQiqrsM6u4d8LzDtBdYX9yioMX8RbcnPdzhN1m63",
  "key15": "58dCvzJ4qVER7MjRSwuqeDqFdP2C58FTeGPXs1FD1uZ4QuKn7zxRo3E27PA9mCueWdyBFEDhrEGF1Dqaebfnxq9w",
  "key16": "4HBzsfLmXdpWB9LpcwaMGvue7s62mdD9ERpvBRcaseY4xYx5WU2iLRhpH9UeUNs3oshUn7ppypeaqPDHEqUG4b8q",
  "key17": "3TXaPxeyUakKsMjCAqtdBTVnUttLRhbQLoQMEAcv3kDEWikfGS9ZnmQuL7wD5XKcRJ2uvvSpzv8T2P2MeDKbBrMM",
  "key18": "4YmwT6Kd8iyBFbbcTj79md8d4imT7GZqm6EX5LviE72JHqz5Sj29xZ7DoNE87jcj5z8rWEwjpT326UKFp6wUTSb4",
  "key19": "46kT34yS98eMC5Kd2BUPwXJDrp3GdJq1FAz8KPkSeo9tndyDKtCVBeYoJPPGa5XSSdNmMeUu4eBQi8Gmwggs2a1p",
  "key20": "24tuSMpXDeYS4FJPY6CFPD8DxZzrPDT7bBWEi11uAErs4iGYDiPBr2MpN9TAL6zyNKMJhn52xTZFEVnfvdErHwKr",
  "key21": "5YznJbUBJyTqAawB2NcaDVX6nGkeJ4gmYPH4GoKkQupYCmRHsWGTuSB5U6XqNzs1hCau3Ua2x49p74dpTauyimwp",
  "key22": "5BZU9bxsUrWWrH5PnDCvrRVFb5Ykyr2CKXwqKQ79F1rsnmCXiBRkqfK2j1z7bCqEgo7rKNa8rF8HP5r84USgFRiv",
  "key23": "93MRd937ZBQgZ9qxvD2ppX4GCApZLgSNBCKjTyhiUkoqwFAMu2cwhdaT9pBLuKsPjD69tpnKe2wCdGx5vqQtcjJ",
  "key24": "yjwpi8R3SCVuRFAuGQRsQ5BKTjkwrX1aiyj1tV5jmAH4jejgDGADwGTEijNpBcaGSYrVkJKot6h1AZBW5EbdMqc",
  "key25": "3FLMKc92Q2R1ybTjDfuVyjVud8bBzvSudyjSe5gMoib6NQmNqCZ51r2HxUe9eNpL3DYDe6WjS5ccy42cbLa6thUX",
  "key26": "5RRgNh7QB1uUaU75BDfrtF1MWTTyiS8RRG5jfSN441JRqGra2akYudPTuUHrysKtmuqrAAjHWPGuzVmn4QYAZwaM",
  "key27": "4FB2qmrhdvb9UgsvTDwMxZZCQZqqX7wEWysknyQoMst8jauyDj89xtot65bZ5nyZmhMX49caUUnjufQiVVzCUv3A",
  "key28": "2PYAqkYF7YmB7SdQDgRwD3xQvHznEwkB5JpZA7ZLe4s7VdpUAG45v3Gi1faqE1SuFya66TShPJH9wTusezYq3N5B",
  "key29": "ivTY7uWNfL2tCF2X9uZ43DvBoN7uxyfg44qqLwhTjtYZs5sGwrXCNCpve4UTPHtRzqZv8yvb9K5WxGEhiVJCpMY",
  "key30": "3AABMs7SieFMfuXFGwjr3Bme3h9KCTvLG2xfHZV4hLFwY3n7RYUs2BjTPDhBJQkVwAApJnJyd8J6fUsi5dKVEsk8",
  "key31": "Y3fV5eFbe9rTQFK33YJB6beZzb7tJeY2hAT19cJ7kWvGRw24QsUaeQaMwHvNSkunto9dc2PbwqmVpmu76wvpMyq",
  "key32": "47nBDtU9VUzJJUyQjYDBu8G4kPU8NCuoZR1TCk9VyQZpPAPatrgYcmNTJxZq52S4qzNfxoARsg3gxQiUrEEu372C",
  "key33": "3HfPK7Qf6mkaGuup7fYz6gUFowaguUMX52gNGyk76Sc1SmgGDyYaDz4DvcRSF7G2pX4ugrHYxDyjrmnX4JV47DKP",
  "key34": "5bSUw7Hmudv3V2JCZnotJP8nLSydbXkoB3vgMowCjbpSruAcRMndgZhB87uCNmW5i6QCVoFSn1FdFmPKzKiJk9yh"
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
