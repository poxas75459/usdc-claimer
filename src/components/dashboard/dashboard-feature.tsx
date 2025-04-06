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
    "4uzMq1nmnno2S6szt9JEV5fdzgo6AFKTqVvmGB9KNLD1ZCymSDBJS1HNMyCSEV5VzkUnq9kjsuSZTT7ZBWbM6ivP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mv5f9DLjZYgcsCPjsAWkZKNftJwbpcrm56T9KuL1qPXquKp4AV3L61UUoyvHWbWyU2D8Deyr3SwFSYqrnP9juf9",
  "key1": "kFpb8PXvbGfd1KqSqnKQdVizbfMpes2ueVdC1xqLW2RyTpbuRpoxcqi2zPSZzV1FspfFxF7a7eYa7QFyHuzQg9r",
  "key2": "hQEqi1seaDWgGKkgeJ61zFrLNuT86uJRVkoVNKxMi12bS4PKuHPh357sLkgfCRfYx9gXDdHnWUKc6edWFbjdo1h",
  "key3": "45qd2V9XoejmShZCcR8CPuGkoiLf7GejKQft4K96zst6SfJpWkjMRVmLnhP9DCmWCurv8mniZTqEpdTjQeRhfarX",
  "key4": "4N4AubK59DPxD3ZA4h6WwvZYcvuNt9ucG1NvgSyEoMW8pym3raHhkAcLvb25Fq6Mdj6uYm3Kax7uSrs2dJyeYgcJ",
  "key5": "3v2tJTGJXNJQErm6J16KAsK2BeZF92xgdvCKLpjRS48HgJAKg1mw7UARr3ojDFraFw6X7gPmopaCMmgUc7rEJfUU",
  "key6": "3Ktoi9RNWea6bfdRsaKdGTBD7wxFmRyky9Jmr35vWRuGooRpSMBob1aUzYRgFQGL1fTMeGrx2RHu1tSQZVVWivEq",
  "key7": "28QTHMS6LekoSowdeFZYdCHbmqHidq1Wc5LiLSu244NN5WwMRNPTFPQC2xqh4aZiPhf5kLzM96cAy1PxbYajdEx5",
  "key8": "Nwu8mDcqPfGhfvrfTurE4wAYiS951YgqUfvqcbkypBGqjeJvLBsaRox4UBkeRgGeS2EqwJwmZAXj48H4AWBqsu5",
  "key9": "4iZ3DaQuJuYjwx1AK4dfKprWvAUW3tagnZbSg4qcNiBQtUtkSaD8X2buTX9tSKWXUvadKDB3nHyjmHMAET6bfKYd",
  "key10": "65x4wcwx2KQvxxge4zcYwDMA6BTFCTCkLNac7QtbqE7nKAMxei4p54LJCpzCuGWNoDav8NjPWeZmK7cfBZxYWFR2",
  "key11": "42RoU4A1JyyHHUoQYGmwMPtBZQ9X6WbU7yXQzduNkiSb2ewxfui9h4tRbNKkivzDm8gFZa5yu6orsJYLa41LkB3",
  "key12": "2XsM42NGweDgn5UQ9hwcXgS7UmR9JMrBavwoxJZtaW89mEp1TKnpcMchLT7kKeBJ7y2KVUtmbFHCCf7epbdqTexp",
  "key13": "GYx1gXzuAmqJUFMSZGaL8KhbiDLG9YSGf3W6a86Fw7DM4oT52A3AcNC1q9piBWedJAWvXUXxzJTgYSedL1ZmaEW",
  "key14": "2tFfC68yqyZFbZKV6wNmSbudS7hGmXa7Qin3PzbNV4cT4K3FhKJLJxhq7rFyMSBRiPg1QCUBCh8r6XYSf8HiezmP",
  "key15": "5bytHfrfbZj7RfPRouJ1hQuwdZ6iPPVcBr5kS4Z7zXEHwKUxu6P2H5ogf1RmSzFtMML2xNzireTn78nNY8fJ34Ge",
  "key16": "2ZjkWwkgEwzNKkKH5UzB91Pfj31GcL4UY7PbvCr2FNRRnNHpR69HAHe1RUuoZUFTGTYQZhshCcdWXE9QaKZ7Y3WT",
  "key17": "3eJT5Ai7CUaic9XL3cmYfFQbz5Lbpha8UKo8TEQU4nfBEFfRQzwyvpEF17VaWkfSBLo1AR81hedNPoPfauedG54y",
  "key18": "3PaE1Kt3AYcHHN3t7iZLfMWCQXpnutfTSrEHTDdSjVYs7uXzQ2rMtXUiXD5JnDumS5KEuU3bZarQpVHKTqsKFGFr",
  "key19": "2NYPMULCHNmRziquBT8afrMdWeCh8beTLZNx9Fxat3ThN1qDbqyisFrv6eHi2XWQ1rtJcz68wKkqDHVKdAioNZEt",
  "key20": "n3BcWTRzeoe8wV2UK3wmA5GbSLeBWDMhxgS2yjTrfoy5SELLKw8kWkpJUqWZjcU9Rb9UXx7ha4u4CzXtySx7doW",
  "key21": "3AohXzPT642QHaTcKmJn6J3yZkbmgwdfUwyQQaiSX4C96vieQZNVgL5qUU9tpqeQacAjeezQKq5dDYKy9i3oR8LS",
  "key22": "2Y3oeJ8ujMWSbAaWyE9orvM4W7SzVrRHZUcCBYU4mcMUz1Mm3hmnDz5GHn5ys2E3U4CfVGivtrFTEVX5vfie9vL3",
  "key23": "568g4FzT4q8frW9akYZuraKXXA4FUc4QVz72N9vagFDX68vXCnyP5ZqYjbhdyK6fnPdGvb9EVi9qUyCnp4z3qb1e",
  "key24": "2jtL68j3rQxPSCWcJ1MwGEmKm9zGRZFPkbdySNWLzP7NBKu8TpyhJpk528qdv17SuFE2hpyfpnNormqgontbWiJQ",
  "key25": "1TcLfv26jf7C1giEgqGWKoVJb2ys696WU4g7cYhcjMQz7EYDj1syN3PjNbnoJaz2qrV8k2ZqnAZLm98f6zayZpk",
  "key26": "2n5u1BoFwniWhgMNECHoHLntjiczjNsh15hbSh62PqJZAboBieWSPBb1ijPvV8ZEuUePPUcgUnukiohwYcsZn8Re",
  "key27": "2jfX1qu9aktvyh6dLSTNpzmVvVwYdWj5ruG3u9meGMzTTx3wYtt39NiTKdkvqQ2598fayakc1vW1GijUgzuTWkmu",
  "key28": "3tVNaFs51zTAXAxPujhZVQxJ48EiGQchJF5ocQnurJipxbLDptbq3XMB2WGzW2gkDb6smsxo533fXBusaG8C1P8u",
  "key29": "UZPbYT2zVGnN6V3D99MkkHsCxQU14QvpYF3fUah6rSDwjzoK8BKX2d697E7VxTV4855HwHUH2dPGK3s1sER2pKm",
  "key30": "2MteLgLuymLVrKSiaoisadATNKpFLG4qhq7UNDa4tfgqBB8o8Fugju7yAPDF4rAQPZ2LYduTY5GWWv4pgQSz5vWB",
  "key31": "5JePxmEL3Tv4hAFXVUdoPqDDijow14GPEi5egSmdjukJHetJmjRN79hJ3aXGRRnj9uoQuopnZaU8XjJAwV4F7SuT"
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
