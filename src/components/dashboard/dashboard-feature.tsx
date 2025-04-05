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
    "4HwjjXT1SQ7wjKLpGwhhENmsvwmY1jhjNmbTaMAcaeMdbcTJxMMq7bWtAzbG6FKjJcSHj9S1qdRF3ujGu5mHKAYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FS4KLqcC5jd25nTy98vMjUw4xQuQ8WZRFD7m3gvQP8s1X8eYV7k5y7158vkERV7rHf7T4v2A5dpZnGaGTXzdt6i",
  "key1": "52Bt75c8aZEEESfBDgwdHaSj1Q6fPZD3yzuTL7iia85a99GAboCdtkuvnH93kiijiDQmx56CiiHoVxWmh29YtBGh",
  "key2": "DeoKSCYSP2FE7YNgUc1eyXst9ttr6RgPGmrrRJk2GvrdCFegaiN1vAUDhxf5rBHhkHTGPVp5AfoHCV7VAs7pYRL",
  "key3": "54XeMiw7SNFPSVzyZVj2weJ2cSWRe9iXYbspqr3LeEKJHcWZcCSxAhjY29KnTMdu3mHk4TiUCBFh1vEkPd8GKQXf",
  "key4": "5w3SDJmcmLY4RpXNSGdA2a2Uy8hvHcErhuU1nM8PtrFbRLFgvg7TsSrZVA4ShxVaTANmJY3d4ykjP6qJf7Z3nSgj",
  "key5": "5oRRAogg8wHHAb5badixVBJVo7UrAu3w3FoVQVuEAAtiocjqoQCj1vha1Sn13kwLT7ur8TGmKmmPFpMX9htmyj11",
  "key6": "2ABM6qJrjHZz11hj3SZ8Bmdz6ZEJCLUWKDxSdrZEZmewnQ1Wv9vdgBJXZqdpDTYLAmJ7NJpdB7xDsMt9GLKLWJJv",
  "key7": "4YTvWaWQ1Bkxq9MUWFTFG339otKrD9kdrAGRYJSoKZALwfPxFjndSh1KZDhAUVvgF8gZ5Kna8CRYep6SBQ7TCEkq",
  "key8": "4UJ4zN7Msq47SU6e5iyWpn92svQ9uvwXpzYdBT5RTFrzB1CCVxuTN7ZS9fg11qYEu1MeoVAZugKpweQR2TESoG9a",
  "key9": "3b5Ac1G52gmX51ZsR1Rc2fmHsZ6FU81Fju2YG54ptHCqqJzwVWngVc9SexKRQNj9vPsnbzm5oZrCkJAz1aBR6RzK",
  "key10": "29e1ZM5rQc64WbyD6GU2SKsJxB2M8z5T75cwh2MXYWg24vnjBw63M96WWxtQmCdFEKtx9XoH1GuW3VFR8c6iSmMQ",
  "key11": "3VKyi4iBtyhtewb2F4tezXvbgL2dPMvYB9gdQJbQjCxmuwf84eihcJDnf7cz5ibq3MUdVHh14pwwijGKrUUDzqZ4",
  "key12": "4EqN2EUXMik3gwTFSJPU1nHckdqVWkSWMetcugiy5kt3KMCDbgJNc1Mou8kNbssgWmRt23tHaZ7ymkeyqJdRQ3Hy",
  "key13": "shHa1isCSjTmVsRV7Y4rjX9DYc5R6CLAcNLJFDYCtNrNwaMXXm8EBitn22VXuWGAxbj4Dyq4izNDyJicQMQUhk7",
  "key14": "dzcUoLKCRF9rnDXZtgweBCcZAFHp8DPb2mDMxCLPxDuJT5DyByTuJUEpCigrpkNdYxpnts3WJ96BMSw3STbGUvu",
  "key15": "5Vw4Jx4kdrn8fgHbnfAQQ8uBVqgFmnN7DJbWgeWdEYZF7zNHF9Re39Zu76Lmbgw1DTi71zy1Z27tfqGytDzxt8ov",
  "key16": "5s7HFk67NKadmBJHWdUC7ShDYFncBdq3QRsuiGtBJpbu94se3CFQSSyMCMkq3Bh968dNGBoeR3mcKb4qKEUns7hS",
  "key17": "3rvQkWTpSeThyK3Cjyw1uZfxJaRWbQPuDmWwRwqvzkTbLJcsuhRtddqcYQSo8yKxz8We3so526U4ab2CLWFJGE9V",
  "key18": "2coDfzXYndwvw9MQyAF2QYvUFtVX33ncRhLt3Xpr1nCSBbCvmN8Gjd5vsrLpgWk45Qd9jXD6JLxmEx6UsQSWyWp",
  "key19": "58rwjXmdDhXok16DV8j6g9EHcYRkC1zyGtRxLqLF2w2ga6kCwzdy7Q8kw4dGvSLzs8rHgdxJPrK3PXMuKh6uT8mz",
  "key20": "66TrC69N6cosxm6sccnvDG33w7h4oJCAAGcdvu6yMsdyj4idciTgFevP4JyFsFhXsTySe8TFFCsipEBYqRNybmU5",
  "key21": "4YEywbfRoFoZthnwgM5rhu2PHJPowCNFxAa8iYdSqsrkkcXWxWxvpJMB3gKjnJHUfr1ZGkb8JXoQU8KQFpYUowFB",
  "key22": "5NvxuK5FHtrAHmqm4ngiMJQUE86ju31SunzcRLVSnPzXEesSgx3MjoQgUaLmvBGXC9Ak3ME8sy6iAKhYQJRHZ9KB",
  "key23": "3A5XpjAPfbtD8EzvMxKJG8bjCyp3iuwxdm4PBQSnKCRLCZhcfnWeuNRZ7qjkyw6ic8XYnAGuyNWq8J7CbEQrSfX7",
  "key24": "4Zcg1gdbc7pPjiiTjqxe4A7fcfTDdrxQw2yjKMvrNhCRFXMsBarTq7CPF1eR24xjC9Jpx6UhutENBs8rDrR6DQeN",
  "key25": "5pZueYKzzWChMv36GtBDSSL4h7mPBJ2TtPJhpn4U2JBoSZXc4FKcoWpZjqvru2jMrkXrAbmb3DmUZx4RCtzmFazN",
  "key26": "2XQu9brSoyx5i9DHsoZ54d8gb837ShWugi6YXAWyaKHNsWxFMWeG5jhown6prVzBGCptE73tquJ9hs6PjGZCCqsY",
  "key27": "3Th6dSjoQ23w5frpaotyDcha51pJwXAU5Khikt1T4JZwUd3AexdAxhkkbzBHJQjGTv9bouxQg2K6EMA25GnDaR2i"
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
