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
    "2cHR8jz1FnMxKW7m37pxrFwRxAQd5eJ1CpDFdtMEabPyS8g8m93oXVPzu3jkfVSjw8W7MnzjyMYxz4GsnavCXXsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CXbhEyNf3MtBFqSgVJU5uizKzbWRvNUF1Sh9DV2SJCWPVLtbgokwLW6LFPW5rZdXBsoweE3noS5rBAbhWGiRpJ",
  "key1": "2UyKHD5ZSCALKoNDCXKphHaeAmRYL6wDAkMiiSNjpG7mEKLDVU263gg93UBXn6qBcokaJUmHsVyFS4cZWN2Eabp2",
  "key2": "2th2ZQfMJ8DT4aMg15Fqh7Qt23VquFBbMNLPUTjUsDNY74C4L3StDU2AYw2bzMriUBhmt893zVU6Mr4YFomJm6sc",
  "key3": "2Udk2J3rW8mPPvVTq5a9PrHgw1WAS58yMvJy6XhMatcw37z6nsPtXPCeEkrxUveNYm2M2hxKcncaHYXLdE993Csn",
  "key4": "2GNzYB9zufGemVbLzgE3tqgNuCcSEZyVKXxA3FeuMCGWw7nDoBjoCgZg2NnX2wyMKECA9XBkpT5caJuZ8v5gaeyF",
  "key5": "7br6zggfDWhGsJF8Z2hC6zywRoX9RnVVb4FAsYm2ZAF6bmr8k8pNmEGjXsjxk8u4c8hAVECW7hACu6PQAnWoBjL",
  "key6": "RdfgB8C1CvHbNM9rxS3dwPbB1yKNkuXGn2f9j4xBumSMjvRJe8YAqufXkdA1SeBaXBgaHstm2QypUSqwVpv7yNb",
  "key7": "2fmzEL68xTHTuUwgShzkY9fK2XDVnTsdCGoXEcaxzBsbURS1iMhQjES5CdAri5GUgS9ydQ87spWTZgFT1cjh9UWP",
  "key8": "32rgUPRLJ4KbEJbrooh8xdBhxZfi7DhVx32f2pVwfreU1PS6ZS6Vt5ZQV8oCWirtf6qB8k4H9ourN9gXZCBY2Sp2",
  "key9": "2GLPG2vHWJQ8hgrxLkCX5F48tXLd4WGNfwV67UsY3NVTB6Edu2zkAgFHi4pT49Tipvv3kAK2MpJFyni6ftpnfQ1m",
  "key10": "2mdN449gxzP6bGjpop8Uy8jGTat93deMy5EiCFobr7h9mhFVaxVQXJLSZvBtY3JE9edixGPYES1uPpsX6xFdDAuG",
  "key11": "6Yy9jwB4bFYdLbtQNjKerDf7MXUSZxiGicQG3Z144tpUqPeQ21icuXRfjDStw728a4gS96526Fch52Wn3BvjFoN",
  "key12": "4EvKhv6mXtTN7FXEWvkBeB5kCLxUDzYWsKpjYxMZS6aLw7LiycUsXNM53X2cqFduiCJHYSED4PaPe1tGnStEoxRi",
  "key13": "2CBM7yCgnT8t7pTZNnBnU2VU1nGjZAr3ZFjhvzdUkvqSNXbV5bJRvHY8ip55ng9f29ibX1LhZVTj9GdnVXnXxJir",
  "key14": "2ECU9LpWL9V9LVncaD21xuvi6x7F7T3tQvzkiV7bCLapSyENLJqZcTBHt3EjJmPmRGkA63UsvwQbV5T5srzN25mY",
  "key15": "4WAPnQDZUNMb1bjWxoMQBT5X8fP9n7fdUDnCmbVPp1CmcVtuwVZcRQeihMVVYogWTuTTEWM4yFVp4xAZsCkTNweX",
  "key16": "3oGJxcZEwb2g3pysenPNiSLw1swCTBArUT8Xuc2QDLPHYF1zY8WC3bFNSAyJfgzKpckvtFS7ovyLbANWKngTYnp5",
  "key17": "3gF1obc5FXdYDiCAJj27fLncppWoErXptwWuVyFwUtb1XSw6MYGi2VuWGUj326e4e8to1QyRFFdhWnTn38dj9CXd",
  "key18": "Yx1cev1tESr4h1RCZ8SjVR1NYMRBqxqM6hd69dPwJRw33q6yNtNjDTw9f9iMqSJGxwvwqXsTQp1BSeB8jfxvNJs",
  "key19": "4AEj5oeMXBAKftHHhyquhpPrzQ4RziyXzkSLN7S9CKmyJ74odGz7dezi3e7RkT2iSMExVxSp3cuyBrYdui2HGcNe",
  "key20": "5WprFZEX4dxBemFhcVwRDo4355p6D6HTqQEuoGaYJZ8xJVL4hxhhp9tdey8iSUAwLvAbYkU9prchQGJBssnwst4c",
  "key21": "hEDmG6gNfeucfiuCivUQHyi4FH6jd3mc4kSKq4gxGzs3kVNNKsLYzmBECVkVJmYUUx5tvUQPUeszf6kNpBkTgMx",
  "key22": "4Lc9Yc3d13hCqRQph9nRMpXzWPcQ3NRR86yvdLLwqebt78nKDBmPAp827N5gQyQnFATbBqkuFruqoLdS2AjD55N3",
  "key23": "4x6wJsFPUsBzp9AZK2By6i6Gp7DVYWKwhgbDXW3sXX4yTJPswEtDYoNRYbwRGAT6v1Vk1Aebns6Qu1aqACMS7Aeg",
  "key24": "3eGjum1s5k4g5sTxWvpaQ7stY3vWgsAz4dtSspU3GPYbjSrpykcj11rPnFuSsnAngGWYxFoCXCEWaJu5eWQGM77q",
  "key25": "5D8pPixt4DKGmigUKsbsykAVWBCpHAbydgDWqFZdRtg2qoKwtBVzZEfr4PaGWVZoRmZzuwZN4xJ8jHyf56H9ggD8",
  "key26": "2iDWuDsuEoGGTwc3iajkukun4WJUaxeQpTbcDEP2bGNJxxVKHhB2RqanGrHGGHF3wqFfgSpwCK2GmdhpaopCWFPv",
  "key27": "5EWL43RhHxt5GKz2nLuZQGPZGDFLULNPuo2wb6bttqJsJUNYjR3cioVfWSw2wnV4NUhiKDG7ujA3zmt4pf9FMaj3",
  "key28": "2ar9Qp7ub8i6EJ9kX9HwwBn4THN1wvXbACiBkCqqKed3QVX33hMe86tvS57cV1YFvfRLfhDSKwHy6MfFRvdJWVXN"
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
