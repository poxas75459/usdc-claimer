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
    "4wCh6GaL85Xa8M4PvDPT4KsMDvUAnEtSnB5Ek5PVAxcx2kytCBiXWoxeD4LMB8ex4o2AyhCfH8n6VqRPBBk6XLun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4muhcjkHhpU3qLdXv281YRmDc3i1wKnZzBE1zPVsFueXCY3HDocTNiYMGzqqE4uevgPTgupxnc5D3Z4CyYhKGQyk",
  "key1": "23TbuDFG6oBLDzWZA3C9aJbe2jN7aCsYtCsTF2bz5iERw8GYfQrFDL4kFktdC2dWtknnJWiTwFSTXL9JQPbW6wNo",
  "key2": "YizcAGAz4iycHg1FVSSYQd9MKFfqDx4SuLmRhkDnC3bSpCtGbMfvFMZQkF44qfZjiRf52BEizs7vp6ZBH612Ekc",
  "key3": "4ShLhr6nN46yzJMUDAPwYVSAcSStaayH6t716xW9pCroqD5VsQu3sd6cEx5LBERqEG8yTyvu5knqozBb2fJ8wuvS",
  "key4": "38JxftjnZX2uBKDapY3qwph9Xwz2fxjkPukcGtsisgcrZoswzcrDFGpQ4bmuuNcj9difJXX8SEGWdXn2EhfiCxp9",
  "key5": "LLF9mLJcDm65nYmGCGLVWwYQKxjcSnJUUUckCUFx97Nh7bdjuvfQ52wqRGbKif1p957QhKbr7VUVmRNvFUnLZVt",
  "key6": "3WEw2dknxFxyBDLFZTi9ETbNE6wP9jKs6KF3qj2Hapjw3y418SgcJnwppCF1meSTfmEg7A8FdtdyqkuALvsxEfPU",
  "key7": "qt3GkMSwrq5kr3dWVTamaFcowHAMRxi67nqAsW5XojMh858ZjJjw1i2ARaZm3YGS1g2dcKyMD5wnM5ydXtsb9eJ",
  "key8": "4XAYmydvTpXbWp8zepJ5j3wP2YBhMUusTmjZoiGdAcoghKh9yrMFA1a8CKfYuvN2ho6ZNnmuczuF6ggYjJ5Lf568",
  "key9": "TQUJ6QuLeNxF4RSaWEmzGHb8Ko5WzSDh4ryD2qXmjqC2FWbENh2y98ZcdTbHXxsd5C9ymA8dmFXoitYfLqK6rZU",
  "key10": "2UP5iLoodFz1Zw5U5TPmrg1PDbP2Xh5WpA6nipWrFTvQLxdDYohj23ArqU8oQju9yGe5UuqGfYXHRVY2gR2rdpUf",
  "key11": "8j8SzxhPEjwye6Axs6RtB9jNpYfuDNxn3rg3qJZxFpotSuHRy4E2v9afuuTnnXQYqugctQtG3Byr4M7H58dZwa1",
  "key12": "2BjVz2wFWZ49TPG7ttLjPeYT6cDDj4HMEmr9uSaPEXsx32WwnRxdZFBYX8Zg5jucxEJbD1kKBCbZ8bRNHPASeYQE",
  "key13": "NQt1rwoxCTgUw4g5zza7YjkU8iXjyTuqtdMgGGMSc75auuPzoC6B7Z1qEguP8b8MhfzPmMpavhSut73H2Gi95Mq",
  "key14": "4tVhk4xVWVL5CcSux6Qm9rvyxhi2qMP9yYHXkdUmKTApLgZfRmYVWVR7so1kGVJKNQjGcqYRm1DpU7EnkyGNctHb",
  "key15": "3L4NGm8pEVSeCJ4QYcGdREHsX5trUotgBLPDQGU9RnM9uabyvVWsckuRSDfF8za2LApycsCqaxXqoiYdaZJwQLuW",
  "key16": "246TefF3FTat34ikmmw7XTUWE3vDdR2uRHoKtixdDaMY4PFzU5uV9Siegh3udCmYFR8FaWtqXRyh3GEmcQXsvRRN",
  "key17": "3PPUVQE4Y9ZZVgJA5znUvMCTV9i1eqz2NvQ9edLdt16m3f2D9tJy3J3xc3s3i5ext71xz6uXRZjBtKBenH6msQAx",
  "key18": "2y2jF6XJy7HKewDJmBuqdrggZBrdjNvT6Kh5cLpbmfrAdbAXFGzSy7uzpMaU9iLBjGgKMBJazFAXUBC3jVYhfpA",
  "key19": "4fTd4fNiZUzBMTDKoJtqsMnFXo796uMGanSLxfMLEgaiyQ1goDXYVHzSFBxR4URhDtgqQY7ZvS7omXKCKqyjqxAM",
  "key20": "4sfaWi3c28JHa5wC2UzuSgT6B3rLzpE2H9xirYUGThFxbYMFcDuX83NL8SD8Vy7hLgUaUBmAqkPYW7SXHL6hF9L6",
  "key21": "43WreL8iLQ1iPFZBfyHCeW9dFtXKayGeA2PS7EBjiP26fUZKkuXYFAWXsSzKsRe6Jick1yHmkW4xsXmtAaBjuu4q",
  "key22": "PQXEEufcLdThEsg4JPVy7GVsN1A3WS1qQVWAXWFF2hxz9r2eyu4Q49pKw7NuRgfFky2xkCXeKntYHK912bi7R63",
  "key23": "2WtVZb1r7UQ54rdbYEw6TqzZKg1bfcVuzjP7Vig5kvXto5iNJyUkfgtEUG13CyTdzA3uVudXB1o1bX25CMz1M41Q",
  "key24": "3XaZZX7XUHaxrkZCgPKa7D7bofy6pTfzHUDKPXFTzy3CXcPvnRR7sWSX9L1H3wKfMdEH9zHbtxd6q75SyEr8wg75",
  "key25": "29NEHab6FjGLfMVfQaCLz9M69cMtLNNJ8FrfdHaMpbbp93oRgLwunkM65DKA1g7ctBM5sL89ecf6tYKqpQPHoZSG",
  "key26": "2waFfinaf9ujoDpQN9w33EVka8rW9pKkkRdK4Uyfx4YeqhaL7fagHEfspJxuGAa5xqVLB3QRNBuy1VhVtYZyyiSK",
  "key27": "5boXiHFDPXLvQP4bzjFUSuzoGkYs1gSjG27NRYBV9SdyyopDZGagU3b3gAsKGW7tRbdLvBS5MP8iyfZWvn1LUX4b",
  "key28": "5VfPAEdXibgPHQ9hqfn8E8xwQDLw8GrTtViKw8ecWHaggnB3nHsny2oquyzsGAsxd2q7GKn2rR27DKi8gYe4hakc",
  "key29": "8LABg6tqf9bnpSste5Fka9gMfY4RqAQWNCtJ76Yt7fwgt6mjqP9D7QLqbMpZ4vgCbF42UzyXnczPETaVRinhbEn",
  "key30": "2HSTWmztSF4horZar7yZbqnjE8LnT82Jaejh4yWnvKzg59KLRKH5kyZKWobad81QF4krkNPQJUzhPFa6H2qtt8EL",
  "key31": "4KDmZM4thMZr3rDruwhZJ9M2F6r5Smq2tysaoCjDR9fMsjTxUq6uTWVUPktaNz5yWxSB3y8pUPKLEqEpZ1zw2vwd",
  "key32": "2kgd5My6eE6rM9NJ3dxNycpY81JPRwpLLK2kusL7HCqmzS3FzTEujG6CtecwCfKN1bRTDmj7mZ3uhE7T5HFLZiqz",
  "key33": "3pDCR22ZNiYqd5k3yjpHL7YPNRLoX78j57WmGNFvoeszvMQz8gok2gMZ7JuwN7zHmT5sdBD8foVHvdeJXRRsWQC6"
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
