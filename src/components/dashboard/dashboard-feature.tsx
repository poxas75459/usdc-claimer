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
    "27oP2T9w8dZyVACXLrW5Kt7z718Xp2pJmVUZAY2Zv7GMHyfE6Z1fLW5S1KDhnf259rGkUP1Uwmrg6nCmqvNweULG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGY37BPgv2z9w4KZZhCeBq9Vt1is434Tte7Ni79RGubLqkKwTWkkBTduoVLaZRm8L69qcx9tZwy8zECuBbL86Ki",
  "key1": "2tcV2Jy7sikoPLviygB2nrPSVaGDgd6bnNQeqeVL2Z1xGQE2QF5VfYmGgXv6vyYkN42dpv1ZSgJDVXboSDWbGnQ8",
  "key2": "2Fq2YTJgjJa1VxFDLCynmKacf7qCuztf1arWa9VicerczD2w84AKmEqdCGFC9Qw5kU53a4Ns9ne1n9TwXQwRYwiy",
  "key3": "5tinBVAWq3GDgjbmpRz151b1tknwgRqNWHvQX4ndjafWUiR4UBuq6vWDWF8topHZGJd4Cs5TgyB8BoqU5pnZySZd",
  "key4": "HaHhzK8tLHggCqfDzQXexhG6xaJHHg1QSVX8XczKUBWyXhBC8hJ4EniT11W9ibqPk1v4u9U6b3ijkr1VZhykmGj",
  "key5": "2SpEomZzQHJVqPVYUVhqJsZ4zzReYAQdtZt5sNFD1Fw6JcqVUVyhWYZJf36RmpU2YNHhj5fv4QWrbvBXGZLbiH1M",
  "key6": "azF3HJTSqL2hX5J1GCgyRVhanEg4HNC6FhkqHYEHUMnaDG8nAztTykNEH3pcChfN1YbLphJgKYvyYkqw8DWn8sW",
  "key7": "3WqjL2LbfqpCJMfdikpuaqBwi7JWULSQhseZKDoNsQTbG1X4Gprwdof3iJ21uUcuQE73n7ueymfkDX3d84QEHoye",
  "key8": "4R1d2yWU4C7MaRaQzYo5unHKB2tK2Uk48ywX2LV5qguXoQrKoA2XtfNtR5cyCAzVUVXAh4LdLa2z9HS3B48mMb3z",
  "key9": "43THJzzCrB47LpGnCtLZUxhA5pHXL8sZwH5tWKzMqrpyEbicutopHBwkHBb48Z8c1LjgjBx5TkDFKfWjYje9Ked",
  "key10": "4XpB7TZK7QuCRb8y6XwDAA8cN46fjWdppSiYwAED8Lrsx1CquCrvX6HGtGaSwCngjM85gcs1Q3eYAcSyfNBgEAAU",
  "key11": "nrEmr4SpYAhSmAdMCX2o3haqf28mWNsjmbEjrjQJNkL5xS53AaMcjUZfHRZJWCT5DNQk5QfL4RoWMV7JbnKk5fs",
  "key12": "Zm7gXAhmCHcU4DoFzJNM4MkLryvTwiYoZDeNRu1zJtoQ6uCRnXz2fhio7z8wKycKTjZ3Bm21dT6p6WfLbnRtXdZ",
  "key13": "2LN422M1Dj5W4WQP8xPo3ZL7heNpWMv3rWbUdiZqMcW64GHmQ3S5F3JDKB4ykx5QYKaRtgQ6Ujq9bP25mffNzbhG",
  "key14": "5z2CociHP8wKCkWyeU34fNkbKDF1VLmkzcKbf2Y6Z259o9vsrF28gq7bPqRG4ERxcebzPPgJfyLh1fZ9xEgWykeZ",
  "key15": "4ueESWXN5HK5UGC1ehkEwQ1ttX2DmMYxdS6akhJkFVsptiW13kWcxUtL85h9ru8Bd3bom9LF2dkvLJ5asjRYuPin",
  "key16": "WyTacgaFTz89JqudPq4TyZFUXSj2nwUbf8VvAmfJccpomspa8R5VyGWKUGRUV2kmVwJEFoQDEKbaeHGnKCdJkQi",
  "key17": "31JXkt2KN2Nm9pEPHKyWoQNwNdzP71EUH5TcEtSdSwuj5LvMi1H5EiXD3w7vxDAHdR5AL8eTJeot3P2EPH16q4au",
  "key18": "4umP4TvMA3V74vte3xTUsnUM8eEshNUhbA3CpLxtxkcABPwPf764VW8GxyG2jbNtkoF9nRnRjoXdonpDtbaWi5gz",
  "key19": "48jmFdo9WVDV9hSFiUh4YrpVdEgSgUhsZy3xtLoL3cKoUCq5pL15Vrv7FzStCodt69DYphPHTVepXvPiA1KHa84F",
  "key20": "QT1ZjuxfUb3DNgwknUDbNyEiqrETNBPcxXhjtMoSCRDsjF5ruuu5bWYQejAmsLmsyArkjDpddMXVaDD2cjMVX7M",
  "key21": "5DG2ZTQERFeEZNB5kJhjNVTMKzYsUMBipYouu7ohobS4v3RnQozZeVEid3saXKbDaGL3L22zLBLUyjXEfb52cVjT",
  "key22": "2YNQZTjxZm1kZvexutkfpB5zVsBqxEE7ujK7L6zWmovtgJnohuRsoaUBNoVUHJSpRzXXYCfeqpk8gwd7Rp4t4wFA",
  "key23": "nJ1Xawq4Q3j7YRFFhSbKnfqKFMyZeauxXTy9BaaXV6EJC86LQhm5noooGn4wKezBM1TwCtnuCWnNX8Vit2jhiga",
  "key24": "34WD3biihAif9s5nRmvnzjZ5gECa4veUHs5Mk5g8f45uQFhqt9k1PFSisfHPrApePmQWEWiBuSGqBCFovWEbXT59",
  "key25": "32SQBUfpLET2YfTMrUEFjwoKCr1AfyZWD1TFtAPtAuZqkxkuM88fgdgtwMjJDxuyVKg6VzBbXKC6cehdNEZiWKAV",
  "key26": "4Uzf6jtvWT7N2Z4Jt1UWJWLvL7ZijTUyZR7uYAfXE4bkmDbj3F3kxj2WDduUEj7EztBVgfYmmj4YQAJ7J4WAnnLh",
  "key27": "3569uVcXA9yahoxMuR2EQAKB98BUC7rxsRJM6DnHHd52AsMMC7ATAoNxHzqjrXvmQ4T1qqZnbDpug8LqLg2pQgvN",
  "key28": "61pcYXSkUk394bLmLPvAXH3DRfexrgp5McUJyQBXGPpFAa3d7UW19zetYyFWFoN4VooBpXu9kbUm9wkpUCa5mrXh",
  "key29": "43ACj1TH8vbULpLvJydVoMszTrjCucozZNLmBZqCH5BTTddqsPyXz7gVkbJL6W1pUtPB5Jxg13VcGKC5Wkhh2mnW",
  "key30": "5uZSR1N8kU8PRki4N4fEiLC5C1Q9QN9dDJrgTT6L3cAm7PsJLbTrUQVyMdJGitbUo2nJB9254FT36AhXiiJMPxbg",
  "key31": "2zenVzW5u7Xx3WBX2Ax8yAeAXnUcDEPegQw9an1PNdwyr7bAYFyNanezRC9wBFW876yjyCjWqokd7NNzUA2JH5TQ",
  "key32": "4C1nyhdmGm7HYmxsuPy4aAnJJBKGbW2ZWe8A65FW6rz1fuVMJokZ7vN85suYNbXiyTYbrXnq3dBpi1C317Qs6MUy",
  "key33": "57u136mLTV1HFx5ZKeRtqc47nJBz2K2sA4pUvUhoWibxRHYfKuHd2bjSfyM4Eshv9jfdGrcWZCPxg3bgKSKKrpWS",
  "key34": "5SSFD25QEn5bFHt1thsLtq4sFpwMBhmm8nXfLQkmQCMtWkjPoTZPu6ThDHnTTtiLK2eEWMF6n7Td76L8piG4VrUn",
  "key35": "4SffcN1cYWitbvgb8DbeeuJMBidrnkBkKsi71ApqqswjDhdU1EoCQSmGkqsQQKLmq37jGZ5yMyXct9FZhnX6eUjh",
  "key36": "2kNk5ob8ed7pQDsPuJ5aibFZPpgjsaHRzm6yRs7kVcMizHqtcp5idhB6eH5EHZYqHb25wqxh7aNAGHVXmuiMRBKD",
  "key37": "nJqjwTxBMhGBPNZjPFrH4cWptw6md5mULq24UXbJBEpMxvgyqePpYVG37qmt1L4pg4Umtc1VyNkfUy8GQEw3dBd",
  "key38": "2Kh1Tk2a88S1VifxEZAVUvDqP6q733uZatKGdXrSdM3VkGjkmt4aT6FmYUSBFNKbTuNXhSP9dKnjeVyXiFv2cTWc",
  "key39": "5wkX2CQDqH3pdy2mT6DsBMtmpXLsrjdxa6CBtAWyCBr6A1nRzxWrXA5RtUjXY5wqfRKHTjEdxtvqA7H2FJov49Cb",
  "key40": "622EJ1oSiiMbuTQVM921ZKyJgkJwuj42W8TrGbBDx6ECmHR9aZzx3J8JSXiMN1xB384PUkrkTfBP2BBXJ7dzC9Db",
  "key41": "4hW3f9QLCZnVHfP47iiW41mutUaTeS9yEznchfpheFEQLaQCgwewMGZX6D1WrfozNn18YsVgEiqNXTbZjeFa17NT",
  "key42": "3FBzCiGyFmyUkMPV7rwozPtzQ6Pdppe5rRSsZsLK9p1WwnqY1KmmXHuQDX4UAomPDbdkEUVEVw8jxhJMBVNWPP3q",
  "key43": "5EwiDYSNJDumcjCM62Tctco4XGULy44KCSxfnXZ393XfvohUaHLm1UpY2eFfcVnHty2sK4XpPQsuchhSL6iz1uex"
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
