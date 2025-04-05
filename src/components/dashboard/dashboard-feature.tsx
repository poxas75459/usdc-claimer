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
    "59YAc5aBS1z1Rd6Zm6og1bm9zzdwg3L2Dm7Xdx74dwxpBJmHpo3YUp6BXNSH7brwey4b7eY1djnyW1Jw96CQTXiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TqVXWPKEdVeQoesqcmn4vdg13iUzosdycMG4mYjfejwEg8JZaAd9Li2PbkPJuKm6vRcCXXcc9FSNbHHNHc8o6qS",
  "key1": "2BTA9yj3UUqJGkxXnFRWWFs4gjFfiQoVCMUGJFdfz4N9QjKSWTE4XokgxTQNYgqosbGbiUu2G4g5SHHBVWnz5qLh",
  "key2": "2E2yX3mGouJ327UUbTHV9zeeY7ik1rzd82j5MNHeyD6XjF5MzwBmqwKYBiW88rDwBUyt3HpF28k1GUfdxv5bgNU7",
  "key3": "2LDHdLNCGLCYeMwb1ru7kpNMxXqMkz1QZPJio1Jk8xDuB1YABe655ba6RPxcAYdU1KFKg4isa2MmCbuDHD3exgwW",
  "key4": "Jt4aRHe7k51q2ztYoUpGoQ4ZesbADRaofuRiGXDX1dt5drbza2BkfzDyaF2JcTgV8D33AFpntd4Ef2TFsVFBhRx",
  "key5": "2kHP9xttfoUitD5rmdqcTNLgkWqdfhFwRa24WMKiVhExgP9Lj2bbaq88hycMUXE7wNgFWJ5YS5coG4Uy3Wd5dXSp",
  "key6": "5DxY8sudJjcMQGgjLCJR3jESLg8LbYzGZMWaK9r2B6eUbpJGMjcPNciTAbW7GRqfSe8zSo51dSYXxx79vjTxXctP",
  "key7": "5zUBDLjp82KF5P48Frj6NwCHqLLjrLVkT9JRYYx29h5CCMkGsJWENfu8zgcuqKPejTTHCWcgCnr5r8nCSinremMP",
  "key8": "3BawZmdeDMA6YpYA4R2izgpkpwPXf5UE786aiEJ3a3pr4NstD8UhDSEJCZJcqzFobyhcZPJM53M6FHtxJpwJXNdH",
  "key9": "5AeiRHP5QCWzBoknAy1PUD7VAqbnPgwQA3wPUgeW13W6tvM7vzyAh6uj1bU7S8Qk93iMzk3YpwXZyuUT77pS3PJe",
  "key10": "3v7DKwazLsjcRHWn7iKCkRBkHoGiw1rheFfWQCQJNUz3X1XVX1GjBT2y4x6VqQri9o5eN3efbxXNUYg61EztH7kD",
  "key11": "3odVyAx9u6MLG1fTUFgsntRPRbdeAYe5T2qJWHQeaTEi6SxmgGuyk5kX4pU1aWYePqUPQbi7hAvC9RdZxajmAxhE",
  "key12": "64cCw15xCHHZfP1aL76AAfYadpz9fV3M1rxZ6fBC1ERxHKrEysSpZyGDZnUWyMxxsGkCvHp7iP24LkGNDHtfjghc",
  "key13": "jh3hEwFnnDV6NXE7N2S53W377D92FVp21oJqJAAJNzVgfkciaafhfLR3XMtRGW7eSKpPH8W7xVDtcBuaA5ZsRPL",
  "key14": "67HCjYcFMA6HbaYivFiZTHgbGXK4rHJPhJRxx8p2SuAeRYH3DyZZs4SYKhw5XbLE3rtAkd8zQY1a3NH1U2rUuGNw",
  "key15": "2ojN8AS36YJ8m87YuK5rtL54Dvmrnbsab5CEJuWqAc1VWhV8CT6LWkkQE7K5UVvLZaTyMJvxrofPKpJJqU6H5Tq",
  "key16": "8VqMqLbwewFEG9KWVmAgnyLoLsS1Q3H285r5MesuTjTed6Q3GUciCcLQk7qMv8Jy2k6LRCgo3umTNpLwUGvMJWT",
  "key17": "KGdh4i1QDVh18DB7t3oPbYMJpn8a6FTz9Mq9CyrqeimTp2BuoTqQNDekh8x4baWJ4BgKCd7RbysCNtgFCgkjYpM",
  "key18": "45ZV8ku1PAQfCfBfeDrx6TT8PQjeJJaFcgJSzLH4hD6UV1t4nXgWgTznaTeCbaJwcnii3QF8jYyEFjmHjJBqF9D8",
  "key19": "32N9xN6UChvhdsiEjwwv8ZpL8Hdv4TPCREK6CLM3wCoCBDiZGc79PSaK7kYKYhyotGQsSKV6tttx4Uze9s7gz7uB",
  "key20": "WPw8jYdSyEDXtk2M4mvfnLxiHQdyi3vCEQAPtDHYrtddTPekQqHSzq2bjv6NoKdjQtNxVkw34n9hBnyDCCYrAm1",
  "key21": "2CvaREyWQ1zHUk2YbQx4rPYkqUB2QJ9qLsp89Fixte3JiuMpXRULo2HqXd8cckEduePdZmk96pWGoRwxjyUy1bd8",
  "key22": "3J5icBMgM2srRnoC6fBWZitomB71xgBrepsv73XgwWMkzEcMrM1JDvaXrdVmtq6zZPxTMgjfNa5Y1sGJ5GULdcjz",
  "key23": "5ovMSBzcN1JZVjz1GTP3JAr7gvEgLPDUaxRkM8YUzEyx2Nfxok6LbPtj4jTdXj4YaWxE4LaaXMDRHuVhso9Y9QoG",
  "key24": "SDquL5ffRDeJsZywtg3vy8jGSYX1uzfYNFdFYMq4PZVmquBSUJGrAxEkayZLewqfcW9xNJC4KDAtB9HZ5k8J8iD",
  "key25": "xRysCjH4oS8LkP33gDJRG5CHGj2EjPq3junwZpEKjLLx4dPZXuW6dUCnfJGHQQ4MboEqAiA1NmT2vJubYm9ZhXP",
  "key26": "5Vgin9DiKaXP85HyBN4QkwHLwqkuHykjsN1xFGxpqNmuGcMBURxp3keEc5uhrTcZYQDXYWxwtFcps1G1WK4jKZVU",
  "key27": "29gJmWJTNiT5fbNTe7eX9duYyaSsaDyXC1q9Lre5KLohZcdgCZnoyvhJmEcm7P25ZgvQmGNBpjv4HWk6P4GWQ7Kh",
  "key28": "2ngTKNP2bpihgp5WyyUWAUcGD2EJkexS2cq8rJaGRF4F952Tx8Lg21BLvvVqtN1jZQXdPxYZ2g2Q8T5rWKsr75CU"
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
