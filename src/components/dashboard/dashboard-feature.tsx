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
    "5Mne9ZNrfPBWSvRF3Z38HKiGcYFDSJNbetk3uZckv5NTqJpu4JR836285AhEq4JVAPbDA8MnUCWvdGBqgFLghtbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeEiWAzJjRbeSTWVCwizEMYaQXEsSK5Mg6GR786WU4cYFozpaSBsijHKAaYiLfASyG6Ubaw9ewy98hhg7NeHkLf",
  "key1": "2qvdn3eMMDJ1cpYmdKvpradkbo7MH3HHyTy7FLcRwrBdjMdHrExkcEgD4wHTeqjjMZYEadSEYC6t21dTdaBBKvDu",
  "key2": "5nhByMo8kffM1uFPHrT37WsKfogmYSB9ELY5ZgtoGUYpcoXkQNbQ3DJyPUx1kKBc1EvXBhVfTE1KguhEj1gw9skc",
  "key3": "542eHs41t7mfFEpqDYzuX2gPU7fx9gBsSLe7CBHgAcdawWYwX3bZrV5TNYSUV4K6xbTYRRRUG3NxU2H7XXBvpE5P",
  "key4": "4MkeVMov1Q3mXuXnxhQDUGFJ2nfVzqoo4wjrTuz2YpB4gz74uPSJ5dAiLMYBhpGoijVL5khuLsKhxiDHaQxDvmSs",
  "key5": "2qqf5EXAMwJBxFbxSHpxWkfMssfp9LATnBGXYtEk6xvMvVF8eXZGVPDAdreKZ44ph4PQw3juqQxcfY4LTQUGdWhq",
  "key6": "3C6XSLYM3sKt3KjRGznSAn6hrj6obfaKuEwvteDFQLDR72ns8yFQ1UMobE5QfKJy2rsE2XntydRxuvjnKq52ofur",
  "key7": "4ih3DYxBea8jdPxJATbVMP8NfiJEobKyiGN4GfHWJ42916Su18cNRXB6FWGWreTYQG9aYFFoxtTJVHUpBsWKLiuT",
  "key8": "5BfML7j7bjD9tPuX7rhHceJ7oku4UNM1sjGtyPiJPbH1A6mUo8x5wYwj1jP9c5PcCrMg14q32ZyE7dJSn5rNJXN1",
  "key9": "5TgUp28iBstKvQmoMR3ad5D4Ek37r4yLX6pt361YGFUA8sQdiqR8bYwjtaJJtHsvZUXtjxYQvdutioPJKE9c4iiK",
  "key10": "2eXWkhJ6o3oJgZdssfT6X2pNyjTJYaKYHwGK8Sve8KJhMW3NPj7VMEJHSZs9vqdoNwxNLqYncoMjq8RhSreJx96j",
  "key11": "44V6vyLxxAhgnbCVeSTqPWxFNbT6rQbEifkQDpo9nmLMFWLW6hgWos4MQJPJ5irV4b11aYdUUJXZ2QXEPUCovwSm",
  "key12": "5xwgyaSDAFLwDTuFXp5jHLhcxBb1X5eWaFyN3r16oHhnk4s65vVuZJ6czmucLcsuirNozHdBpCHoJvAJL2aXJ38k",
  "key13": "4VsNUVBmax34BDFCUMopJ1KPVwDcfhNxivaetXEa5e4zJVV4L8sCULHf5WKAAUmGa8Mrzd2L71VLKXZdfC41oGL1",
  "key14": "4QCYzRFku5pbuUgk1dr5HhquaBEebkyhntJeZF6iBD8T8d87h7qt7zDsXMrh63Nir8bpHbssZbFnYqGWmHFpnapd",
  "key15": "FKLS1Pw4got9kPZ2p29AV9c1J2BUZ1pwT3YbVof5PKD12wr9ZpeUH1q73PcsXt5PsLyPjwiyR1eotjdftRUiaL6",
  "key16": "56AfuZYkBrqZJXm16SyrnjGzDcCFWHQ387CSP1hGQEtfYrx91Dab74xmNoHCV9Zd9MYrC6u7i2vgSDY7VEnvD762",
  "key17": "2W5Fyf9W6DAjeE7MajJYAT12d2CrLAGKNyJFbcediUFC1EduCQtVCbNYd8LvuVC2WMQEbjWLZCDvkmSQsx3GM3Lo",
  "key18": "GyqGpdrKSc4SPuVbkkzcdiipXBEB2i2vFU4mZ9LfGAhbm4RX684yY8qZthYUmTkfq2j1fnkGYRnRpKom1ShUvmV",
  "key19": "5jeQqtUuRADP1X4zahBvteoaHQV6DVuBTjzHJx5o24Bjdhpt5ybAgszUyPFeuJz2nh3fSH5r2ZYb6D5m23ff6ra3",
  "key20": "2ZFaf5DE6ZTc7jCXmxXj6jWZLu4vkYU8opY4MQTTPoXqs6nAqYK2QfEFXuEaYxeedr8kHSWVTymCBBZb6Ka9BDcJ",
  "key21": "4YtamygA1qSm5ajjnRLJNm779HEUVhKdvWmfeq2nkjyeVH7qpUWCS63rb3NhyMC3ZPh3jDs2pmoUGS6AV6pF8NE",
  "key22": "nWr1TL82ZibtTSzR7tpe76vdz9dFivL3PwpVP5FRVnXcRKEvQC3Nh1RpwSRUtpGPZzLCG9ri5Km6FiCraxZCuQk",
  "key23": "3W2ox8ePttkqHGUjbTA2TdnoJr3CPtBq5Nuw5CAuVkQoQ4mMg2eVX8qn4jbNE1KYAfwjgCLKG4kD7NmVaBG259gM",
  "key24": "4F4tqxumqHYN4Q1pnKiTdbxkrbmJbqA9xtp5p6jmGNQzcyZ7cGXrPzwrP6kVdmz4ojFFmbwWPovAn3UaZjKQCQpg",
  "key25": "3haLuQ5Rg6DiCsK6AXHb4RaxiAATgkPtJna5zP9Q4G1pksodTm2Y1wePLBP4iRqvh8GqfCDU3uUyc3LKFNFzKBzi",
  "key26": "3y9gyDx5PxugwBQ6AoUmV1uBiBXD8AKM79b6kJgsHHnMgLF3bteK8efxhB25KG5wMgM85dYnq4ngzMQSp5fZgSMT",
  "key27": "qiZRSnEeroCv1M8qAAs7atX9xGXoZWaCLxTx1a324Pq9y4vskCGW3jej1FyQ5XZhAAiDT7jrykqeaG9jYrZL1vU",
  "key28": "36ZFh4a6VVeuFieUbsdsV3NKEyxiMYmqm1kp1YNRP2HXqtEyuYenLEFM6jPaX91LzP9oA1Yn6z3Pg97M8SVQUZpB",
  "key29": "83ZfbhojxUWq17deJPcgAVWNbRnV2imNhEUnimhsFD6Sb9VpdikATvkgspngFKxDhNDqizoDYeGEMSvFDHmLd6R",
  "key30": "2n2sCe7aW63UeWocjWBNaXu3NL5p6mmzyq9GVq9GDCyaEjqD1x5YavLi1TnvNxJNFbMHhrxqg7WRh1JghQPV9Wnq",
  "key31": "4aBbP3gLAMBWDaXN9zVFHgoLdRP9R4gpurpJNkncN9p4aLnWnD7rbLUFwNcqaSJxGiQxJ6nX5bxAXLcnYwKyGej6",
  "key32": "D3zNHkfZzjWSr5khMQtfiTHuDnkWi7orb9e3CvHFPz4aVUpPdQazoWPMZn8RuDrBYLuBfUrD6zWjnyMihvUmDHp"
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
