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
    "5Erho14oy4KkyUMDPbDWdXt3hjRXU8zbZ6ntxAw2HzJhmDnADvSYAvj149e6zhFR8RFbHACqDN8bGvqrphn1tRHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uqm1Yv67LggffdakRBY2jycuu7vQhP7HwbDiXXuXwk79bMYmRuDiV5eCxYZQ9r7d7Mjakba3uiWkJWbEZ5ku5zg",
  "key1": "2FphQkVHxuWJiHk9u7qtAp9A6pVWHqreKG1xvBaGExZbTvsnukDzZz2VVNKw6VNxv1nLnmuwWJETyxP81diBdMb7",
  "key2": "t9fmjnX2h4aZKVQrnKZfkbgF5kqANaZud3vYeWxXLphCuiyhcQd5YHSVinrLGpL6iAepaVQHSMUwWPdRRqrFMMy",
  "key3": "5gecietNjibisvQD4esPQFNVpvDCpmbBrUxLwy8HXvKofSVzv6kRuPttRYNs76puFWnRDx9qnLMMBvoFrFua9xTm",
  "key4": "3DfVgES3MqgAK8sSiaSEHANmMZXgQpQ8CJhtC3zwq5f4fqVy6LN2SQjEopsmgmNAYFVidyxFvH6FzjB9ShwBaEK2",
  "key5": "yCERK3YsYU92qfhfzUuGCthq1Mr7vUqggpro8JEjQQ5Qk2spAHqLL5cf3q1DtokAiyKjmcvznVZWs5YbbYrDznM",
  "key6": "5m7naECtPmhB64mTWgdotaWP8gZ1pKCy4hM4CMtELQC3KW4UojpEQuHF1jWkKSqEnDE9EvgLrAM3LrPdGy8bwCDT",
  "key7": "gL5FQ3Yi1dxSTrEedqN2SyjjoUonBbxwe3wEngUaWFBJcwgpBNTqhoFHm4ixqUPCqm86oNERG2UFHPo9XdiSk3P",
  "key8": "2syNThuFM3Bp5NGkvZBdaYTAdEhkweDPSp2kBHY4BeMUDkxLwRpQyoZuxjCaSBPSxXLxUHArV7yjdZiz5iQiMcGg",
  "key9": "3v8wu3cFdjfPuxGT3JWgiDMGgD5mhXvft6LRbCJAcdVqCpN3edvTxe2Xx919aTGNW8wmUHLtjjKpZkuUF86tugBM",
  "key10": "5Pf6HMTgLDJh9qtmMsxRLYDp2uoqftXJDhbahzRV7KcAsGyjefaFoUeJeyrsagDFmxL3VweUeWqLiqR4wGapJuk1",
  "key11": "2r6BN1se2WPi3S1G8D2VgsiyYzDtSdd9iC8we3zGxxxFx2CxfftbwxyYcpEPNbD5aHzcuNe2YyDUS1rSM6meg26s",
  "key12": "4EQmKSimynKudCTr4PHeLa2zbhtqtY2XH1cU27ueqeAtBzhLFZtazMV36cccWMVRDnvAk5whTv4vjCKYJ1i1jvjQ",
  "key13": "37vi7dpRWzU5wTManBHSL5pLNXVFSZrVRoZoWrNyk9TcNjejAZiP9hJjHncniAzDHcu1p9z1LbMCpb6SPtkg7NsS",
  "key14": "3SarPNm68EwbDaPkNHx6uCuB6mUwCkHZhMcRebLsNHfCr8U4LHq22TB3vJw4aLreDXCSpC3UHaPE9uVSrWKHXky5",
  "key15": "5DjMJkJVaiy78KnKx8HzNxSNSyy3LEHbd8q79Tw8bLnUPbvfPJRGYX8Q14wCLfwkZfSABaZTqeu4ENoTVTmqDeZ5",
  "key16": "318uYrdWSygF4K6ocDTP1joztkdBoZ7FHmLciXkUSWf2aid17G1gh7EJmJYq2Y5mkTCYSnRBVjZuF475uHSwxKdw",
  "key17": "3dy8L6y5ScbZELWNss1TKtm2D8ZTZoJYLGsDxfzLpmLqYXw2kt5bKg3g5rEce4UmbMnFLMNRNbKmBmw7dkgjkPY6",
  "key18": "26B3Fd5s55cdAw2Sp6qxdzNxVdu4U2SwYxfAi8V7kBAUzGQuqzvuhZcpw7ZagH1ytVJar7zVHrimWBwgDjF28DGW",
  "key19": "fNhKQUTBuwTpayeqPTV5JDw4Bj1kvKPdrSwKaTkwXHH28WB5x12yaUknf6m6Seuh2cmBjpbjsWgyzemHvExsC7P",
  "key20": "4wELWyn3Kzy6jvyfiSpXRi9y4QgKc97CNA1iq1EqXVZqd7A9BroxAyHdxDhVYbALDeYo7vwMDxFkncTBTVuGDMk8",
  "key21": "2u6Zm4jeHik9bAutidedSTssMVPy6926aqS9L9JuDD6BtoFKraCWGyLAwHG9VGsWs55UnADXTxNmp28on4NHPgnw",
  "key22": "2FsDvajfHC48pXi2nUrAJgZwCK3i1ygSiT5Tf7nCCetbuGA6WLxW8XtrLqFHX7KxKrjXY2jxthkTq1ifpNXwDW65",
  "key23": "5ejkDvxPLUNuXZTdDpy6eS6XzJTaNEEGuQvUPCSdRFPVA5uUDc6oRCGypwiHiLCiKhBomoiDe2i5FXgTwA1RH1QE",
  "key24": "3C8pQFT9rkwrDSzUDRgrTWSj1Bws1nvkPpBFdpAe9w4FRYDj5tWyLQaUh5WJRSxVYMTurmfviCE6MwKTZHENbZVM",
  "key25": "4XDdqae5Qj7zRsVdJSTKxXdZvisAWvLecAwbciVN7rWQckSd8tXuCSyVMP1N8H4oah13SUfpRLYwnBFtukKMVgDr",
  "key26": "2SZ1uj2cEJt9WmqNTHvqME3N1ZsXzu2N9JXufnAoc4Vjbcshm72WA8WQTsjDjc4K8DxXbe8ytCkXwUYSEzsLDRqJ",
  "key27": "3pvvZCHbzMHnNE1NRzyrWG93BKbzWxDVgQcMj4pvjrL1sMoYdEe7a9q1fBF38YorpF2DwD7rg9z6Ktdc8s3WuJAo",
  "key28": "2Gjmw8GQAbHdRgksxV4aQHEqjbxjxQqzWPk8j1UsWkXdnHG4y1fG2fyDrEfJ7ZQwjVdvQFKpk36Va8V9BetA3zro",
  "key29": "3tDxGmCCLfXdZvcWUxcgA99hAQqUjsRzDj3jztRMypxEa3P2iAQDR8x2eVCznkimhSNAuf41L3vzAz9Cabrwc7UL",
  "key30": "12skGEyJf7fMzng35sm1xC73utK7SR43h87k19QQ1bD64ePjx3iajG5N7fjevQ5GJNtsFAhQcMiijAoJGUT2bTy",
  "key31": "2fQ9JTemDGZdWFx2RseDk9CiZWDMkFD4Vq8uH1qZUu4uyLNAQW5NC3PYZcHc7SMrSGD4Njpt8PzZfo55e3zCk4kh",
  "key32": "2LJXXy4Bndh7vaUH8DveWApzVh75Sx4jzQC5qsvou9mDhYMAonzDAuBQGgoqKCj9hhnrs19NSB8rVGyBfN8dzsE2",
  "key33": "3BVNHGxgYGVee2DTx4NUosPp3a2c1UwJzWheCYJawax25bB2ZeFCQHWGNy1w215Nhv3UBLgCuR6zCfamPb2Fr3v",
  "key34": "5ZzH3quBFdfqJTwuonMY181RoYJN9KBF6drXF3hib5qEtmM53Ea1AakWzEoE73jCJff6h1956AW7g16FieuN3XjT",
  "key35": "5eUsMVDw9PuxLRmZ5FHRWwpJR9xApSRDRP1s7B6o23ZJoDyACS51ZxuCRXNZdihLwYn36rF3iYqDBtV5eMqX6L7m",
  "key36": "c5WetdgGvqgpApLMytooSETQad45vHohuqRHQzNZQGotavYf8CJxMHbPxypuUP96HZ6qmniSQ8DPC6YcSrZ6KYg",
  "key37": "2JmpV7ESUVY3VaSo5UbzBaNMbM5U3LJuWsCn9dsD5C6m6YjA6vTXVBTbnZiSmeu7DCTYoURtB4U9Ug6fqLZWAvhm",
  "key38": "5K14eW4XZEpu5hX34oxMCRnfgAo6zakuxPeLivnFsqVtcjKPyULPw8Rw7mdZ3u4fMX7puQYe5UwfkDA3H4WmEDtD",
  "key39": "5endCzgjBvsydcjdKLXbA9a65G5wSp57zUu7ThNjoiKY6Qx8HGx6Uc71ZGDMTtrDsgT4UVZZGNaCtK1xBQqpgSN5",
  "key40": "2JHfG9RKS61bLjcCnEnYjW8799C1KyLhKVfHLVZVKzNCM6Yhn7AQyNnm75EUbEHAetM5LuQTcfXfKffTKrddw6nC",
  "key41": "2wWGRjk6GPaNSJi5SKdsaaEbeB6VjuUuYtswkuVkbw9n3F99r8GNLDZLgSQKeQodfKvxU22oE961rcSngPVaBpY",
  "key42": "44BKKoMosyRiXsvn8BEbXkSAV6Zk8tdt6thCrzkNauBWKwKTpczwch2oU3VVN9bZupNGmYiCsSUDT7UcWhF3hpC",
  "key43": "ujDun3Xbny7ugZUhm1T288aTpXPNs4n8Hpydge9GQRErg1pByVj5usVxedGzkRnW9AxdunDMWnx4RwZef3jKkJ3",
  "key44": "5Ei9R6WziuM2NMej5cQbEeDcZ8zFajdikL1sb42ZN4zyY4jPzFvAy1WZy6wvRpGAYMyvpMCtggiKHaeTjt86u4L8",
  "key45": "2n86GegeLWfwFYhCAQKM6KNeBvmBtqKtmubLSJaq5kiyyjkPmNdVicNU6jVqKjaPo5AgHe2fJkpXf7y2W6N237an"
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
