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
    "4vrtPySMSmVHrdxtkjLnwUtfv2D4FifC169Bbu3c72TGkF8YAwx1FbravH1LJGEprR6jQAnQSo41xyeqh5gSXeuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVDpLLkzq6EDErcJbbii18g1eFtsSURmq3zEcuWBDTgbW3wjoUGksXR67EHzWqwKrcK5wEe34GqYVV7D8puPX3",
  "key1": "5dWaT75mV61WWKDsnMBniNXEWr9tW77wBQhxzw9uqqVnxnvcaLt8RDRttRjXxvXCeZ8PuxdQrB1QKXCJKwBE4i2H",
  "key2": "2g6iioYWhe2TRivM1ePVC6FDjQyiW3pLZLhF8GX5Gszt1xV5H4VCzBkVjRKiWMWrbAd5gcQCjXa8HK4U3RP1bWLg",
  "key3": "KsreMeYmwaYJ2L98SGwFJg5zXBnQUEymmpvAJmrJVefnjPcqg9pqgeC2wUoVvqXGdYnDgd6238xSY3G5NHWg5wp",
  "key4": "C9nJDMzmHsqsRQvx8PubVhLfFfS4qSy9PhSeg72KJ3h7y8f8jRvNbdX3W2bByEiBzXNdoDHFEYHBdAMYEtPBvoM",
  "key5": "4NwRyBeHPo5T7AAqQ3SxBTdY9r8kvkTXkjEYet9E4c7QeLnkxjEHW84y6DSVqgPiC2D28TeEv2wYyVPXC57JyaTB",
  "key6": "PXRh9RzqZiFb7bMQVfyMjLAJifHHrnv9LeUR2CycMetJMGMJ9hPGgi7cSQU8aWTfu3ahYdLboYXuCWTSSZtTDvY",
  "key7": "SXP8dkgtKNsBsWmf845Qw69UQCgXnPmPqhquC3b3BjYW1mcYRnVkNNGLikRd6rdms2zCuzrmowBhC3RsmQ9MY32",
  "key8": "4AbsQyN4iAb42j3T9jZtPBNCgbPWSKudffi2UPRSeh2Ud85c6DgKCAfs5rnyYvvmAV5UP1EFY6kEfHeWpHpCgdLi",
  "key9": "4uzi9jsaaZThSHjGQT3JiPWcEwVyjSJZSZGwdP9y8tmLp3FJ2T2jJpPo1KuB7A8L9A7Nm8q4FpPmr8FCrLpHFJ7e",
  "key10": "25aaA9oWDoHxWZyvdktq7GWPqMcDBdMBihqXkdNxUeNuY93crKCrbCNHpry1tws1zCvhYTS8yuvBQp7LGVYiDc98",
  "key11": "4n1NepvrAE6LCnQXtYz4L6o5MMEa7YXAhHkeRsN5s63QEcNCrUFhjbRJGC2fmURZKvr7u526dUxhEkKXRX1up2NQ",
  "key12": "9cgChF7Qd2gX2sgKFyLgJqHzhUCLLHESPsJLWr8MYbQXmYo9sbhrbK8j8Xv5UHTCWm4ChStkUscGCq7GftQgPVp",
  "key13": "31nDzoHfhBdhFcffhZ7oiXkZQrnjN4qqxAcJ2geoRJHPR7EELSdMt2W4v2XdAxjLk8WVwTvTjuaXq2R6kyqrcVW1",
  "key14": "5Q7gh3A4AmVeqDyLEVvHuMgNadP8PxGG311vDA3QYBRT2wsnBqkmHwBi13PFSq5tWDi1saLvb6wj7qRQ7Sw9HXTe",
  "key15": "5DkwADCaV4HGABTwTgJzAoXiMXfA6zaacDKyfLdthKRZ8JhvkaqsXi3faqcUutkXYraC6mCAwtadQDs7Wjxch6iM",
  "key16": "2xMFqYVAnwjfoJJErDgLhZG1bHoJHpeDRxxj9fbb4TfTDVwQCMSfKFxc3PzRfYdnVB1Y9Cj5M28XjCwuaikc3CtN",
  "key17": "4TY9PNVhvo2VNBV6wakm373iKi9L8yV6DdocMfs6CvFbDVmsbkY6iLabbv5oDZLrj3oRQTRbTH7sr6Ccm8DSpGSN",
  "key18": "6644AJswPoPsHWxXedLioFy6nKPgXqFiTNYUbBKgC41MtYUGdPFQZZCPMzvXxKdY532fDuhnXzyJkFW4QbAqvm5d",
  "key19": "3pe1cn5JdjTS1gyHz45RoCm2aMv4g39ABmnhxP8SyzW1yXth4w8pnxFdRDtXXz89H4L2SHmWU4rLKD7ChPZAEcsR",
  "key20": "mnMYskvqeb5SzSSCP2jTDtYg1gK5YeEEe76JcKY7bG2p8NhZs1cXKYT3NB7kppcDLdrtF2fMdB8Tx7j7o3wTNW4",
  "key21": "5B1NCXh7Bw8cQ9aCP3uoVrQfJcMgTzUK3p62HJDKN1Azth7rr2zVpARuf1yPs2hiHo2nNsPAKMxHVBGGbwt67DaU",
  "key22": "3DongRQCDNBSJ6TQq1LkXtHFgF5v39FBpZedMPqmwXbewEYGFsBeTeFqy3X5tpPNEG2ksHEiiuJqfN3tgq3NnQZX",
  "key23": "2tz57GBKZJ5b7yEYkHX31VT2SYeE59hibzj9AdgDrjrXNJ84Px9nE64vB8s359UjtpDmLmt2SdP73HSe3x3iduM9",
  "key24": "4v4xbmZxrekYdU3ZZQapoSHovvwPNxgGBYz1hzBaR4Xs9L5jA38foGWp5WmM8MtkQva9ntJ6KV4qdR1fRUSLHDUq",
  "key25": "5aSkCRWNGSH87P8BQB7c9SQ7bGh7BgSgRid93EYH4CTBBW5UCypVDW1nuJEiXchxUGCs5Asjpwmi8bRMgq8FioxF",
  "key26": "5g5VekKujzohjEx9uHZ1eUvvW9s9W3kj5DYJpJoKGSj3a5g2f8sBCDnCRWMiREvyozLy5qsB736voxwHwN2CLMzc",
  "key27": "ZRNZj6jJ7GG7FYjEW2z5ci6k229JUygUm752T3z8ADH24NHpX9V3hQsed5TejExTxLLW92BR9QWvN5NLyTL9CJy",
  "key28": "48gSNqn1MChuCzUUN2vmq4EdmBgcHMuQK9J9UPvPscv4sSXrCMwkJhPiSmp3MDDwiHjbiT3p9tiMbYSmZ8gdoCZg",
  "key29": "3c7KqBzXYLG9YDkk2bMP7fX57FEYdyHA4w1y8XTsMK2uWSYHTZJL1QBWNYndozNcS4Ryxpi6Rzbk6qboyR84sSPu",
  "key30": "3nxrsqpiAv6GPHcVrLEXrFCBFz1rzjgRAQGGiRJE17dgvHxGZCtYEXREAbWkWeKL5Kay56rynXWb7HU2JeYQwSJG",
  "key31": "3Dd46SYtKL78pCCxhd2UHESKhSDarU2P5qZnfR2UkcevCcCDmncnHwkxSjvj2NBK6cAPhNCM2UW1QGCKkBKnaKmY",
  "key32": "VE8M1N8zQ544kgi2nw16u26MAKL8VMdsBn4sh45WhtYgREFTDNeWrfooA6xCDbN2DhyfCoDmCVucrCBwMrjzCJC"
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
