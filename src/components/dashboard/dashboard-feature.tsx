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
    "4H1MNxksxELxEhHWeTBYaRvQbc1FZGyfBj5DVMN9kxQaZzyGfUvdTuGaLP9yeSp1TaWtBiVkSERUnLftJQ1Qo3oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xkeAnZa76eALeoUjiY2NspVQ6DANZPcAPsLLdyK5ghYsER2LZK3Upv7WAkMJLhQPRMdvcmr3dc2Ma6HQLKBdVD9",
  "key1": "5z9eXZRoHnRz5NCLXAijK73cw4wsCq46NVfARXFd3ypaunfh6pDA6uZH5t5Wh4k6VrtvmRABTQtt7w9fcvV65qQZ",
  "key2": "3pJMYwYwAy7gw1Ryc8W7PuAbiVwSGHbWNbW1ay94pm43kY4AuzJQsaLMpcv88Y2xMxqdVvUBWfcdndR1QmYbLWKK",
  "key3": "aFfYUibmCJyjXk6KcvmS1GAwR7UJcuVyVYTuhmmibpK6VTEbXgQ6a9sqMMTm8zw6Qsbb6SAfnztyGHQVoPNLbr6",
  "key4": "5BxfeMRhJDeneSswTMnMqNE4G1gnrLviTy9DY2bDh1MPyR8oXarKhxyMrEC4hgkWHL6r5aHV1jWmAUBJPRTLPGue",
  "key5": "hP62KKuLCKLQZmM4PFDB4A4pAAWa6jm2kv1aPNcXBRPQnkX4ULvZE2G5qxdfYhTqNRFZ5FiQYzRZGKS9c9Jgryr",
  "key6": "48VzqLmB2SxSrXqujtGpp6zudWY6iYgSwHYprcdPtKHsxGBKNmWXr19kGnKLU9nyfqpsUinpmSjzoL2o6zucT8Ez",
  "key7": "5ujHzzJVL451FYx1Szat3asj4JkpyLr5xsaZ1R12qv8FvFzVohKwiwnwR438wsZQ3KYWt3MziukpFRSoFeenr7h5",
  "key8": "4J9assam1RiAhZ1sF5mCrJMGJddW2ABuLAGaPzyRhe3BVEYTCbf7qhdwuLtYSMaqLFc6NeuEB8YA8F7fUygScH38",
  "key9": "2yw8TdNp9fvMd3pknD2iZv8JxmAso1v1CQxanXKR3vt3P35arrEYPqMqQVo34WUujuiE6w3nKoVFYRgfbvgJzLSt",
  "key10": "Rad86kzYY7ZbDQTsFdaju84QSC775TYqZYfhZu9rfG849U6475XxzjgPuDGYSszNrP1Bz4DJRgpXCEErAPxAHiu",
  "key11": "29QUjLmSvXaBHE9xWkTAbPCsx5GYBSBVH5FsLdh6omuVHkgdL94gmUgU4qzYFtdp1NZzYqe94viCQ6YcS13QoVuX",
  "key12": "Btksj6wrvugq47rvPcG6AAyvbFjZUzAEGazHDnppeMtaognDtCokzMVv9QjpDPGeL6Wp6Ecc8pVwiiUzAgNEzSW",
  "key13": "2dSUq4a442v9MYXchTzkmrTNe9SFAa3DPmi38DrvVjTFUDaEQa84YRraCHoXK6Ze5nnKoQeyARn5M8JQFRSe843x",
  "key14": "HsHjvEn5ivrhe7VwMXj5zDggo6XPNzn1YnbU2gHCBA4VudcAhYcBoiasY6Mo9B8DxeGMR518UJ74tKukDMTdLZP",
  "key15": "64o7xtyThEAVbUX3SEs9EH5pzLpWziV4HVSyqAzVfqrj6uBiAHXr6iEum1GN4WJQhQfEwqzeyyC5hQYowjBziH14",
  "key16": "4KC7JLADhryxkR53Gpw7KeZ7MD1EDUC4QWW8LCfKLuGTFQzuNuoZd93S1UsN2RqJb8DPak6rxxnujASEgEftTr4t",
  "key17": "62Q5Cp3y1EiBk7s1GWn3C4Megf5ziHoAoiviPDA4NMMAvm6a8hNGskyDa82qw43xkFvWmwGvyz5kREQwD2VDCQUf",
  "key18": "2QSGz9cEUfWcSuRZ5F5pCw9TxiAr7J9crxjELT4a6xG4tWnc9vZsfcx1hJ71GkkXW9HCsEhR5kyM6ZdFsLY6iCXm",
  "key19": "52C6AVe8ACFc64BJQ2hXsDpVgVEmwQPEe3fXVo4YfncyeZJfDSTM1vszjhrbg7PTc1iU8Bva6j9iuc2gBc2t5TrB",
  "key20": "56RSyPvCevrioEgWHXKURTTHdWPx5r6Ph88G2uYdhrD8nXkZqVw2YqCjLqwN79irBTLweJ7dcoDWF7eLFT7QQpxk",
  "key21": "4JRz3k1FV1MGjMoYbwUNH4Y9VD9fcZZi43GbyENqWsfopLJt3nsNeFydJxecdfbNEzuuetr5GkLhvZWzz1pwdMA",
  "key22": "XigECbUFzvq4z2vqnCj3H2jPVKc4sGyyj9hLsZ67x7dp3V2oEvhusH5eNdYbarRk7hkMaoTeRdn72wdQKMEzNCa",
  "key23": "5KgndxTmmubYuxi99cz4LbMkevQFUSpz9VKs7eCXwD8KEHxEsoDbuAx7p1aceKnwxkpBhdnGJeQqJ5FfKi9G4vT4",
  "key24": "2BrRXkRTyhwRv8d7QDDZUBCiG8vTcsLAq55Rh4JNcNfvbm66Gyag1NXxxUDPLZ12XGWjUD1rCUbECVhfuVaFKAAQ",
  "key25": "645t2mYYJkVnpG6HVNk1WDt2PJWxB8aXrKedmwUatuZHWRGCW6gEV8fpYVEkHWMUTG49rSb5QUDUvBn6cNoqa9PB",
  "key26": "2jWNfnHu8xKooLcYbo3f2APWzperx7oj2TbtdiJ9zdCERLy3cKZiaiztLnEL1oUp7wi6eZz3PcmXGpRRgtG2R8LV",
  "key27": "39q9HLAhmL45rH1REMPsqJDvmKQ9k1JYKoSBRC1T4eGhvcH58f7amC1KH4UMLroSPjy8HWPjMgxoqRB4NcSZ3LpC",
  "key28": "gjDq7mbwQWXCGDhFeNHGrKkBniGSqsRLJPm6dxmFqL44C2pWpLSBF9m5UoG3xGSpY41rAFLRW8wf74VLRbuBPRp",
  "key29": "4hrnPDPQ38Pz6ZsYCxSsp4pQWYnqeMaCgaj6zFvyCFN4HKMnU2oz3np4Frf9zfswkeHzKHpqVmhJ6PaHGhEXAxxX",
  "key30": "484efNRmVt8Wm3HW8w6CdMPSBwdHb4UvA5Uc5zSQXPadfM3E9ccaTSyBDfzCMPYU2Jnwk1TBy5RFaBbZnKyjxKJi",
  "key31": "5fXD3om8FXdupH9YqhcsDDTo5T6ihyiNjsM5Q9JbX3Y4g52Xma9ErqXBnV8mYhyVF95L3x1rLnDsC6dULnh4psNf",
  "key32": "5qyR2nqf8UDCneNZwheArtw3nPNS1jhDw3mLCTdbPeiybkAdXVLPEcEYA1YamzZuksKGedRwod9YZzBEkgC5r6sA",
  "key33": "2D7fdRzoUjXxRYfemoWiJPbH8x5PfYnzYZH9PpWMsJVFYMoeLbDKj7rXtJuK2bk3UWioyEZHwdPN3AKE5jnRyRYh",
  "key34": "2vMqgjMiZH1vER4eaeDqXX3kbF26hta9f2gHmnvukBKgV5WpnJffHH8Jmo1XuT2a8Lwxv5JFhsav472jCrzMoeQ6",
  "key35": "5RicNESCDJ6sNSKuV9MvXeRPWuob7492vwwxCRstCufVzYFbZnar9Khehg2pTc2d7KcjQEwDesW839oQhWb8Q69o",
  "key36": "5ZVnuQH1XgCqKWq1i5A8bP17kFNeE2DjyrBrcT5hoTNy7Ws4GzoVxTQ1grubGpoNBQEbNLxGMDobUxRKh2knhSdW",
  "key37": "3aeLfNRGdz5KjdLDbkBvNJpX3erMPAnvmLeEvNr2jY2n5yfmiwxubd5E37fK5K5KAC5fmH7H59ziTqe9yvcs34EB",
  "key38": "51eqbZeb7hbNtKQsn1cBYHnTeFH8keURyVr1rariqgDqQXZVT2yEuLafyfXP7FyuEkD1Cwc9rDnmsEgATXdFwpJu",
  "key39": "3a8ZCgDLMRZAwweTRoq91s2dJrWAeGAv7A1XLuasVuYo1NYB2mBNvM77Ld2zn7bFx8f5tCy1USGfUmEsNuEhKese",
  "key40": "YZ3Lhvxv7UMo2nahnNXfs9wndGZUduqNs3UZ46iEQF5pEDYnR54WDLcwFb2ew5Y7WrEuW7u3N89rZohmv9UUXjK",
  "key41": "5EUk88Z1C2kTWxp2a95otf6z5k6Pun4yQu2Pqr9xxVopgyCgkCoMTaiVbzogpjtiYPrYiJSyUcYMKJicS2gdk2V9",
  "key42": "XkeH8kNHzyT3rYHAepUsn3qCdqPxomakuLtKWCdb4pZMmiGyk9s1CwPuFceB77z51QBTDEuNvCukN2x2FpB32Sz",
  "key43": "4QLsDnf82gsVgrM8JjzCArzq8BDoyiS55GB1GVdWPEvvoxyBoyxHZ4k95YFpzA6iDxBp7qwSeSwicaCm42DwcR1w",
  "key44": "4czW2gnBqpG61YgACPE4tGTuhHMizznmhNSzug6ZRx64Do45DUaUm7jZuzpt8rkkDBuGSbRW2EnUo88X9LTuefoV"
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
