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
    "4T2vTMLnh3c9Ve78c8wukJXdVsQNdaVRw4BEAfmqfxYfMz29ww3Eb6afbuQPRWbhdA2xHis64qNmUKe55nKCWCJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErC1bjPy5V1RX81suv47iZG59iKLGkYJZy8rNiNupX1p2skdLbEhnD5pLUePSvDZs2Y5SrAHq5wriQ9BSPbboqs",
  "key1": "2diRKEcPDfRWkuNJahvsNaHKkZ4K3DSAhKsHbGSjXN5Qo5oPfP3CciC7TuiAzZtcUNQ146cheDXmYfZt394qCgeR",
  "key2": "5j57Bpg7EMfZkz7fc8BgnEsrVtuAZiuc4CCYmTBDc8zpf8BZ1cHSYobyQkX3LEwFNx8UdbFVxGnTjkojWEPgXdTN",
  "key3": "3P1eEg4SsCgXYKSifm2DwkfhEJBqpAVNPk6bDBqAF3Hv9xTd6pDvzGP5b6iGXmmKUaZTcxS7khCpbeLyAGBB7SsR",
  "key4": "2iqeb3g2geiQ6fMBqApsJA8La1yA8TkNkr9YzGa723JeejPza8Xcej14V4bw3MR6GqV6tQXnsNkJpvXTv8drqqYY",
  "key5": "65KrqVnkc2L877ZDbEWzV4MjVWjTpZ7z3pqrvCUiBQ1JCzdxKKby1NZY2XPnL5zaF1FhR6Vesn8nrViLVsN9rLma",
  "key6": "4oNncYR6wB8DzxLsGGv1TTbNGwHGrYbqMRaZZBgbUkfksY1F5sisvxSG7fRGZgywYmHFXdxeUCePJHnX3coYNS7w",
  "key7": "36Fbr5qab8BwJZaDfrqYZD1qcu24cwXGfypwD5G6nFFCd7RZMGbBEog4Nps8pQuPjP71syneve248HiwVLYwcrbb",
  "key8": "3PwMqRHaR2BfUNDhDA9xqFqqfXiQ76i3u4kXMk6ejnk4fgESLfs1JoUgvAqgPhodmGFCtZPpqcuUS5Ds1nyax8FM",
  "key9": "2Ef2auYQa2zZr2WT5jEiyQwj6bzLFY49aBVBy4hvMBxieRtSpd19PknuHZRC7Ljvo5TRKVXc5aiXuKAbSJxAmXtd",
  "key10": "66uRWrixquq6J7gcFEs2CNg8SnjcRrfpyUghPn4i6NDeQG9PSCEWrj289gj5PUgsd27E3bAkCdQG6uT3GV7htKrq",
  "key11": "622HvJnyjvMTmUZCTUv8k2p9qVxN47TCNuT6mWj3kuimsjoKc773cykHKdBvoqabgcPApDRHj9k5AQ7yWsdfKSsx",
  "key12": "474P5P8EehHE3TkECw3KPoxAAZEKZbmrMy4mxFv9R8yszb9BZ5vVgyGdAiUJ2p1CNsDXuT7cDaCaEhJZHSawjpk6",
  "key13": "4PPmxSW2Wj7HKEWycfjwoZs3R7ZdMJ3MvXCbSgL4dfnJBpPVSb2m2JkzDWUBLTd8gonmBVS52p3FF69Q4irVjR8B",
  "key14": "27PWHgiPQnnauZMt6BJnJqXv1hPGzjgk4qCKp5TAFQQYQJirgDYe19orGnA1fs86nB9r1X57BSeqxLZ4G3rDrA1M",
  "key15": "kqjtGEjU7fKNx6BHV2iPzbJA9LkMSdAhvpC1AQ5ZxDP5shUAEmokXT8ACqmDwaR2Gkh44egkKbbrvrnraqW63sJ",
  "key16": "5DG9VQhh42gER3z9YpgrDZkGM16mhBA3orhMHPbQibw4cqxiR8mEsk1F6XqzuBw2wq8CMjru3i6Cm6k9ndUpNeqL",
  "key17": "Y8TM2VU7KyEofneiL5Liw7fERWiGPNWeBCY3B7SytwhTUWcE8VwSUNBkoKVr6C2seY4Qgbox2XPYecAvCJKqHhw",
  "key18": "3WRrA5PdNhDYsXGmfohxwpDZxmygh7JZmazXLGXSMcAeWakqrRvsic8hmvJg3RoUWVhhmrjYaxiEWQNvGXBdCQn4",
  "key19": "dPQKQnpXSrjScSuxkEKNNCqYGEvTzNrci9kKEE73j2dLjGk3ej6wzHjWNGBovtoMeD6QKKzYor6wLBjePNBbNVt",
  "key20": "4EjABSFshGiLVnGSHYqsjftjTjBLm5WBeQGJRvqsgtrpzrgzLekRTmUKCWtm177ephDJuPd5gPvDu1FeurdXLfDp",
  "key21": "2M1nfZzrf7EJcqemY41MeHnxd6ALEBiQC4qk989eK7gsKc3RVNcUD2LChNrSXtgUDmRBYMXDxgFRexmgGgUEf6RQ",
  "key22": "2x3h8ceBrMha7EAbJan66bwbnip86ewWi6uBinw6CukRPWBRbuNbfv56CzxGChhqaMQHP6DhPFeQTo56dnxKUMoV",
  "key23": "4koZMMBkkWd5uhjpqpQAKdM59PZJ9HifCzgbFYru2mU6ZTZPgsAPdrTMR7gPndWdt26o2nbJ5azqa4c9c5av6pVz",
  "key24": "dYy8Gs2Ukk1kdSqWTmaJdp15dSNDJp2XVMz15rGK2xnuFfqAiLXRSne8w4XZt66EwALsSrUBbG7PBXi6xPxm4fF",
  "key25": "5fgSKstwhUDpn91QpJipxtMAeQW6m6M9MkkACY4owk8Z4j3YJuqGY8EHFDw5FoiN6bGnd61onESpEwzyABGYRJG1",
  "key26": "5QLWocr6TbkrS4mg2zz1WN47syR4129ZFxu4S8vQy9oivWkphgZjnfpAe3huUPVroFMJtyPk4y6YcuywDU1JvyzF",
  "key27": "3KLUYWxn1eUMovPxhkwhFNuXYtSSrhgxj5d3xCEsgBeDPFfLj7ak7oM8NAhXxdBM5Z1uQrYTXRvHQKvcW6SPx7g3",
  "key28": "2a1xzjF38Zibkz853hHLc58RG5rBqLPSzZBH4FkLJja9mXvadGt9h85BmU4sGhS4xooFrqo1bWzgVxQrct4X7wLr",
  "key29": "49TXrACqZ7tbjguWkmB9ukYvHJQysYkUTE95ca8QrVoHSdjvBwKok41GKL3VeYiqB8dN6bM4KjvQUP97CGs7EEv5",
  "key30": "4tXkucQ3Efqwp81C2ZhahEq5sqjk53SCzkEgFZ9AnwG9jeD3qFeJxrHTtEsdeCgVLZcr78uwzuCs3LBJFqfayCia",
  "key31": "2v7Tx7F192T887SVnZSMtxJCdc2cxAcFHMop5hvbYCBpF5JhCJfbMPGWEPpc3i9VMceXbaEpKr9MVyUSEsukoQMj",
  "key32": "4pGG5ArTu5RehZ5zQusxm81NmGAGrKPK4XMAsTSgzFb5TioyPnRMTnt5dNePpnownxjgsyeCx6PzXBGabQzJKuMS",
  "key33": "4Snz2GM35JygX5f72By2Ypd91cRonVS8J3Br5kS2LJVGHt1cwavxDHAx3xii2qePZpvoX1WFL4c7m9nqRChwXHHX",
  "key34": "tedRJMCm48U3WLaV6uYq4Cm8UhYSAV41opz6N7KRqtLfbpsAPGAHPRn4Hge5nHXkzEYXQzYWdyEtqpir9wW12pF",
  "key35": "2StV6vj5wwDBiLCuUPnkMmVSoUwkq6kqxh7KF5EPaU5vZL9xAcNUHbuQQFvfa9qFfad5BFiQd3vHczSjSJCoirHc",
  "key36": "2BymPtjssKxoPWLnznkDYhLpp8Pk97k4G4ZMTBNVNVafu7JHWbJ9yJX3Hf1wHWye4rWPJ6ucfbdDDBt3Tg7npeV8",
  "key37": "32TkQ6mZoVSLup8bdW1mZUNZsE9RWdDKQB3GirVwyYQog8kMZHMz9pAPTLjKC7Y5TESo4Fqv1qvJ39y8pSkqbrHg",
  "key38": "4oDJsD3YcmJSFFnqgtuqcDCYEQhYJN7zkZaP3Mi6MCNnUL8zJcJEgj9bA2fmqinZJCbGVaX1t12iaPCmzniDcqHL",
  "key39": "48KZj3MX5AdmxJ2jeZoCVikxgo9ucybohbT65sF5hNoSMNUKkwNMT8vRd6d4czHk43HQR6nwRJnJhce2eKsfHgzP",
  "key40": "5SpZVJhCHd733UpRxohGuL6XPZHHqCRZRjKXKj6REd3kmQtxCxZC64zNQaDyz8jKJoTsHs55h9tTdHLPxZWaeB65",
  "key41": "2MbhcekaGgtVU6ez9z4XvvymrKCuW6p43ce1PL5q1ScGfNURfEXFkhFSS8jsNgsxGWsQNxpydxwREQSNBLtTrT18",
  "key42": "V7FbKWVJYn1mrneE2Aaf8c8ZKTPYmwdXQxiYjLf14zU9fq3wCGsQM3tdb6VY7pHymFHnM272Qbin2utqhvtGAC2",
  "key43": "4uNmh1mCkx4RUCTwrnXE8dPdygGE7epbHcCo8k4QrySiPX6nJ3grisZCNrdQSLPGENKEasRJEXkkpeC6s368jynz",
  "key44": "5PQYkobShEAYYhKm9VjXiiJtZ7UHyyrqU2xZPYh2zuHe1Qfb7wpuQ884uck9UKNvhJG78h5NBWRP5B4w5ijhTLY",
  "key45": "3aWZqx4cwEcYhX7ALYS6UNMXzqjn6FybnGL6BowzeUw47EcTfy2oV1cQzW1NkucPE7o2zLsh1k5i2AN5SCHHGQwJ",
  "key46": "2EX1CiDXSoeg6mZeZe78wVDyEwcL3xtBJHDSLXBjKmwJ8NjktRDxxYzGZfLm5xy15PDooMmGkeKnVWSQ63nim8VU"
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
