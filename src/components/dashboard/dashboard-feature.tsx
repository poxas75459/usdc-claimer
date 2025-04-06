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
    "26b5dEZUFVPmbmp3nDPtsHSqfH4irFchnDs9epP4o8ASdd4RgjrfHiRLoqfuZN74HTEmGUceJLRCCyAfn5W3sAy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UiGeYp7Q1nff39mo1L3Co5VBZ7CPcyLAsF64hsGf6refy3YPwTmvi5ZD3G2bFxWAxqMwtPrN357KsTAbqPX4j4",
  "key1": "4iDxBXdDHzEjsHwxcDgmvnaPiHfu4uZj5JMZkAqiV9huG5cevjhJEDrxo86W1hxD7yUbbBj3b6iBXHtF5QroBf22",
  "key2": "6SySkh8YBRNAW1AQAVPXAo6HTjV9nDYzTMuh8MJt1L6pC5wAHji5gqj1mm4drNQQdTfSMLRXB7RSXkiCw8fytaG",
  "key3": "49FNAZc4kP2tM5UEcsqkADWsVrbkf7E4cWLKVJvWsHwpnEVE7qtLhQrrBoA7hBeMJ31p3cuEn6AiH1GvcEZo93Rn",
  "key4": "46CYcMsvuFSfUdRjzqLvSA3m4avWaqQk2URMdkUCm1tELavJ7tBVBuarMdBibwaQeQhDqhV3MFe1rws5kNWYAodW",
  "key5": "6u6ZXyZUXTUT9dyLvN7eBgpWfHQJtgQnK3U2EtxmgqHnQ1gr6UFJbEHiLcBgEY4sNvTPZXQDLaDZu9NRrt9jL8A",
  "key6": "udeiwGeeE7N5zjSetd2R8U4tN7qVZspvY32cezYai7YMdC7izoimyw5bbdZ61bqLsJzwmwfXyKe54VbTRNhoABe",
  "key7": "2K5JwRX43TWwP5ysE77x9bkJ8nFAfC6c74Uq3kdXYBqmcesz5fjaqKWKkaTiyViCpxDhtjn9fowqCjfbUt267SnR",
  "key8": "4zsyvyQMQ78aSDGEfja2fAtRQ3sEkjNV4s47jYuKpGxRZ18XokMn8TL8iRPNgDE8kTHLnLTgmeqkWmQzKjLnWrVF",
  "key9": "4E4Fh82GPWAn4oze3M51Qdsf1u8ZdCeS5PoftNAb6w4nfi2Yi783anxtDuB4SEiJvr6sZ9QXdmtHxf99sKHLh4ef",
  "key10": "3kptjSpBDoFNWtDywB4B368Lk83Wbj9TsrqMa6gSkjPsDuNfyVCjDqiyGMSHCmQerX8WMa6npgrUVLJdA3B1QB7e",
  "key11": "45dhMqLfVJH6rALzxBUkqKphLz2PBwTzUbPEBKeewC97ZBMyDdUisvztWxe3RFTZ1D2PwVoSy6mnLsiqrgJGm93k",
  "key12": "LT1b1DRfJWTLSm77DvKWNVfnHWBveNFvaD1s8evHpZkNcA3xSNmXejsBGVUSdNn31gbJY6szMk5J3R5NNWpvGHo",
  "key13": "Zdg7sTEa21kW4LDJ8Etitr87mK6YMYBieEcbVKzdxZiWCWUrU8Zr3X2izduNaGjKWXeBahpff44azRWjJhCzmki",
  "key14": "9aJhfh3XUYcgBUTAX85iDJKc9Azsq86RGRzRR3V3U9QYVck6q7Q6QP33Qi9NGgzJRAdo3bT3dYyqFtY1SHRh8Zf",
  "key15": "ei1cbAnnxTanHfQU9SWJ1vwNjtuKx3EgYmVCVMaAZVNEQj2QT46zudi6aKAFTFb1foRcCB1dMbYG9XnKJ4CHnpb",
  "key16": "59FbcDgGcJJPussTVqQsgb17ZgsKvfXJAcoNXXps5hEaL6iAYqT5o6v9LHh9mto1EURebCE2jaYVrucR6GMgCrNy",
  "key17": "WkEEHAUnrJqDsc3aeCZyeD7V7XFvuD85YBRtor2J1x6F97r7YehEfQndcFAywFSte4sUn8RMi2Cd2e2y2ScKGZj",
  "key18": "62r7bVXGgLaTRgTnh8uPzTYsaNhktxJUG4u6ygDG55aDsWdk1MofocPtGqAjT2NYEaSbJfvHmJrR2jmySBkbztma",
  "key19": "3DDdipzbLobRx3ZAoemqVYACCAuvbBYR8TxtCpJDszbnWp6mri8hseBuZ1bJ5xtTZtVY5KY7kuaPTFEy1ttBPgNW",
  "key20": "2uB3NmbLSE5w6mLLfyAzy78SSJBAMVi5BTqGHBwgSLoYY3ujY2Enjo3tG8R3aGsRj3LdZC6x4MkHF3THvhKgrhBN",
  "key21": "4zfB3hGZPwgjSfF7iFihWWHv9vB5ABP6XsLrRwqQtLmZtbpQvf67k1wqi7d1bJdb8e84UuZn3CdwGBxd861Tv6tp",
  "key22": "4kEUVdfvZJmB6YxpUNy2SMNjJnCBoHPJ71mrekjc1R3UWD5kkcCZ17AMBzmbp4DUbe993ihjLvPdibHsMevhj1Pw",
  "key23": "3A6zraEgbmwV55Pe4uzYJFFRrro7UsEK7mzs94x58de4ckgKoQiHoUCCYE1nNof3c2b9JkJqakqmP1rDcXjPT3wY",
  "key24": "4iAnjz5xjZxFDGJ1QCmoRzChkz5tSh54EY5yjaGJ3Af4hyYNbfAkTPEdeQF1GwHTDZEb7LdZxm8EiHNhGQ6ChoKj",
  "key25": "5Pf2Ku6osV5BnCXtNWbmLBwRSBTdk4RTHnw1PWiQxcEkSd3xRx54beMmJpnCuQnN91KmnmLtEvdoNWc4ggq2rFVU",
  "key26": "2iP6WvK9Lx2x8QoV9d2c3Fsm2WvXXxTfDvi32baXd3M1MFXcBtb5UQXGV814Hhatu219c2FMuJeDynh8HHFeAmQo",
  "key27": "4HoPYgpA94DyPwFUU6vUTwRXP7mHfLXRAHM7omXouMeu4EKM8RrAZghjLBXCVWEEGw1wmhdr4k5vMvxEmu8jXTpL",
  "key28": "PvnfcHNUQM2qTExiMWe1SUXgS7YKEWao4tKJnYk7yoBvXfybY9bnTwSGbmw7jqRXgxRvS24eDfesKYbmKszM5si"
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
