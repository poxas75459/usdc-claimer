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
    "3sJ2whCLYxrZ8vMptPmZ1WUGTUvbqCqt5rbtuNxAyn1AyRytfcqr16vckHL57awsVy6kLQHDuN6KwUVgLm5ht8AQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RHK4MX5e5Nyr2do5gEWa2zrxqjQpQ9kWVzC5CDyjpaXwLzxozxhpeA4uuUQssdZZ96KZkxRdcCd9AQwKrrbL2YX",
  "key1": "4EuvBtgcAJKGRBzeyQ4HuvGVUgt7ux5CfgogH5754bzcUJS7FrVTUqK9DMV5fX1QqJKHbDVWsNN7tNXUJTiZtWoy",
  "key2": "5sC2pwqXatAF3QC686Aw13gWqzjhst9KdpodjZ2SfnLAUNQfC162esAygD5UBrDYPyaXsE4d7E7k6gZzoNmWwHU7",
  "key3": "7jwrsmwXfseBSCk1b3EVdA8wnW7VeFnQ6d1nKRy6eSYUVXd4bm6SSxxkknqs527FCa3JVtuJbM29qLn2zgnVn9Q",
  "key4": "4mJjt6TxF6ayGw35wgtWN1urMyR3kXddrLPLFquD46gQZ3NzdPKcbsxHz9T6Kriop2fuaizPiVnzmYQf3GHj7rvg",
  "key5": "3t2A4LjBmCyRZkKPAdacf4GHPj1eat7qbN9KsZsUGZ9M5Ca8KeXd58JWb9gFmn9dVHzJXX7QdbNaqLXaHYbUDAhb",
  "key6": "46UdQgsEQhuZ98N3BSoL1H9pinhn6R61Gz4ZuG4XFn7sKPVSSRNdpVBKcLo3N7MLXSK9HawYRc2hgdA1grdJxfEh",
  "key7": "2THWTyDaf2cLVt1fgwrSWJVNRdPAA2N623sLp28YGkwWSR7D1JWqvbZrrUbBBzt4qMbDgT1dkVxuZTTfiJcYKwNC",
  "key8": "26WKW9Liba2eubLjekjgxsc4EXUU8SU3Kh9TUxHYzq6HAj992AxpPHjB4T5oT2GsRZML8RjWXVerV9RVdHwwejAD",
  "key9": "67piJQ6pR9e1mXjQyeFrUA2Eo1wBEEZktSdquFsFTmSZq4tZoVCqjtyx69TgZTVpF4f7TCpv5PxYZdiVm5x8wRoS",
  "key10": "2Rx3DXjZDmnHuhouoPSXX5ZwgNJ7MR7KJ6fz5egZYedQi6RKgQsiuEr4hfaEVGcErM9toXGnYjCFYs4FwPKCxw2g",
  "key11": "5npNYEoYBh7KixGJRkgN66MnMK9gE9zRPY3V85jHwHT6k5A7SGXz147dntM5StAc8Tixf9B8iHiRxoDGxuGmB7Nt",
  "key12": "tDqgoar4EUdB2EkXsMpvNbFBfwAr9aFSp2o9ugZVu4AgHE8UQQ3QBXz9rL3oqK7pV5ow49HmX6vdJiDrujp8Uev",
  "key13": "2Zes8CDvkJxz48FQKi8rekdC4tAvTgqQt57Z5DCvBDWEpAgAbzSxPZksJQPJXCLxsm5vHmJ8oZS3VVEAMV9LgwGh",
  "key14": "2RcbaiuED71D7aBWgydGVWWDQwXZffLRdd8pxUezBWF6yDZQkoUH2q5zbqURtb8sL5sbgKe6hMsvVLihJck1E2va",
  "key15": "5o4qahDcCW6P6ugRyDVaN3NKnYyQFitkQEqK6D5EMfM66WWhYSbzkuRV97YgY3mTQNJGG1cV1Xcp4jE8wCGVPsbv",
  "key16": "5HYaVwHRpqg6ecsLrFQvRS7ZFkBSumVGigobhdWjcAtvVL8PyegeDb8xC3GMdg3o9ECMGAoVLBgUQk81Pn8fSF3r",
  "key17": "2Q6tz5ouCaqmyH7x8KEiaJq6zAXp1aww6qi1PhsUrDDCwmuzkx4FY1mUd1mVpSTHwwQRtNDyr3hTy8tDQ3X4W6FD",
  "key18": "FdLtEn16FAdqjCjwLS7hD9P6tbXHuEbkW6seuojeiJ4ePCf1is8Sn8mg4g6CEuAUCCgoBeZ2RvNXmwfGLRmigf9",
  "key19": "4Hb1iFyRrh2Y1frutcjLYMGFhXYCYhX24Dhksyyu3VUDkKZ6G7SJpitCs5fABuXAVyfRqZCNwsdbwV8fYJaSyw3n",
  "key20": "2LU4vZ3hd6c1JaRiDudUxti6z4chDsRNFGoeBPUD1XdCiiTkFjof57TQNYrFQYF2mCfUDrCEgtPsmxQZkn59wKXQ",
  "key21": "4C6VmZ7QqyH8kaPHtZ7mei6a1mRi2KUWFQ2LmKBAymRfxxVbrCLncZbw8js7n4gAkR1F8eApk7TMKSDQaGBJ45vR",
  "key22": "LLaU7f34qrqNZQirXdzmPvCwS1Z29TWEonJx7ERDo5jPGEP2QVNC8RnoT7zC4dUqht1j5KvhJdQqJghro1JEWrL",
  "key23": "5tEjEMyfxTMfGDiZf8f17vkYY2c2HbEmJiKi76wUE2PaCJYstkorySHq7Z2f3LeBe9ZZmM6EjBwj5qtuavwKyVn9",
  "key24": "33KjWE6PzHzaVUZ4eRns2F3MXmGRbxDXfPuXF1R99HeKNsoWrevVqLaNqGP22rj1FYg7mzWsviY6Rn7LfRidqxbJ",
  "key25": "4aqzDdbbMkuKSv8ZAinfKk3Kap5vDv1pSDM5tUgCmLohPbx3XDzUPJz7KsikV7NudD1UQGwbJVMC9hRG2nb6J3oF",
  "key26": "8C9bXtEDf1kCfiEvhn6LyPk4h73XLpPf18djqCd85gqsdtcer3AM6X2QrS4TEcPmw1LXGNfrqjv71pdHV9GvLSW",
  "key27": "35DctLWviedatFJVe1J36tSDQdBCimUk5V52DkdTF47kwTTVRc7prab798Ldvud4QbNfv9GytHeM1aPcP78DwPH4",
  "key28": "5jNCYtPrfVfXC4SCcLGs1Ga35pa7DG4GYBvsFEV2FdchBS1CzJD549hj45PKuyd7Zaw5Xv1yeTbt19tuYZ9pGWbW",
  "key29": "4smxq2aryKKcNHD3fPaLiyfDdWgELfWFZaESEF3N98N1DWyBzZRipTZmEhqbyNmK7iwBEfsqdrhvZYsrsKm4MS2V",
  "key30": "4mPqVf4g6vpZ6CitdhspAjpM4oqicL3zxxsoFAZQx7BimkGSWFMz6uapMaq3c1uwaa2jUjsmuffgordnYUhnm6fC",
  "key31": "4qQHytPArQeTGfMjrB7hT3taFo6J3bakZGqtwebPgNWkc8WVBqUSRtpDfFP9c2rXHrgngeRbA5xa9KsSevQVCarx",
  "key32": "4WXJDUBJpCzA6Jq8D1XPLfTtgS2SXJBaVgbrWQBQEcZG3UuDvLKcv9FyUhJeh6BL1UETu2AYtBjs67auzM5gSV2L",
  "key33": "nUVsBvQD9oQ399tX6V7iKJQbDWdgGG83n7L27PpK8kke1JAtiiSR5uYiWHw3rHy1HmtvVzr24t9PyiacJ4rvfz8",
  "key34": "3URvTUvpCNqUpsy7MiNhEasmDLUxeTLPmvjdgM3Ek3igrzh6rD9kqMw4eUkuL4ZSzQSnPsMmk5BkPi1f9Ef64off",
  "key35": "5fAMEnjKedykVUrx278A5fYN6JmtqVaePgG7nE1vU62dUU3dzChH6roHzuob2HEFejpnC6F4LD5D3udFwL1Az513",
  "key36": "4bat1eGjJxpjCG8ctbMsJ4zyVfC6CAFzY93ypgrtUXnm8Ss7Uz4KTB74hVJeBFiamLt78zn845n2QbuQf9yfrNmV",
  "key37": "3C6e3TnrHDNKeESsB29u7UTF9Ca5MrGKE6VRCTxogjynjkpivhJXVqxDZb4YNvavR1KwDjFGuKogray7Mmks9z4t",
  "key38": "4PdZXXuY7w8b2iWbQD9CcBm5UbthPr3XCF9DYsRjo2pKKXakuRBKAYm1J2EfjiwTkwiJFwkgMcQJZTDf82UYscim",
  "key39": "3ut9aVX8YTkXSyTsYxGckYEpo2D5jQV7HvMhScxgh5FtJm3tKKeaLiZfoMzCS3BUZm2wTkvqXW7C3nugkiYwyPa8",
  "key40": "5Vpqbyu8kBCEm66X2F4itTeuYLfDPDYEYR6dF1uovB6BwHUmNe6q9MJg6GmXhZNKA8fmR2ap98PFRCRkHaEzQpS7",
  "key41": "4vRWbYcaREcVndCJwhxsdgcgZQaQFMvEqypRFiL2gfCsxroqVKwcaAjkxyFp1YFoR3k1m2xv3MW5aNsNjrsdtTEF",
  "key42": "21BTygPXMb8495fN78brKRRdwsWYRQKh9XXLXt27MnHJp9k7WeSuRXvxzDb3JesR8ZgtKJNPEdwZWGy1xvUdbS8w",
  "key43": "5QYWKZ3KuPtUektSL74La2G4aMw47dqkWysrJh5Ckk76my2WJ9HapcintLCrxnZ92Bd6ohBT7996RhEmQSjnrqDn",
  "key44": "5cNgQWjLczk2dE4cf7NHTXj3wSgLzSm1VwirD9wAwci2CEbVBpV4hCkPEq1J3hTGWhTEhbjz9XeiZtUpob2BhCZ7",
  "key45": "27N14XBpXpYa67s4Bo5LBFh7J5kQFNLs49uT23YsF5tFRWBnpPttV6c9aaEA5i8wmBbVUByHDswweUBaDHmjAZRz",
  "key46": "4m32CAQuzWbNapDXQQYiWNAtr4PcUipKGnDn6sbwnvQFPpGkueDvYU6yBZEggNutiSDC7uTfEV3Ga7uEN7aQ6fAK"
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
