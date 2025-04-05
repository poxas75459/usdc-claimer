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
    "5RJFHYt76a8EXbMM3SnadMdtDVg9Wa5bSinCkBgMxpiWhuWotkFbwugBH65DHLUKzwwEPRBp8SiR3kFEtuZYq1Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e39JMAwQHSzZvTbDRSEGTkbfWoLuoCAHJP2k27UTm4LKovWAFFqfomP4zrRTpdqybJVZaVUeixwVK3xrgrzmLfx",
  "key1": "54G9ZnBmSBiY6x78BJG2M7LFL9BZXr2FhnDSBHfKqpKcQkWPXbK9BkmJ8FMZ1tyx63eXrQibBnV1ma8mhzLu91Zr",
  "key2": "PcDtYT8FqWjvGK7pXiDxmX6VaWkiYuiHvNBihMJCa7JXe1Yj8XNUbLeFvfwjkMm9rP1Z5V8H6zSCYeCtPBejMdZ",
  "key3": "2v4QDHcWg4FjBmTu3NHVnmiw141anhPzFhAZRekXiV7r4n5zfsZ8JGDZWxhyQdmpoHEf6a88zYMqoPzk1CDJPScj",
  "key4": "2CiUkK3UBaxmJmbPeQFP16RkEQC6zeMYSbGDxpb2ipPf5jS1PgvQLjPXiKd1Mr99PBP1A72GpMJaS4xn8R9gSbVf",
  "key5": "4TWnxvpUsoceXR91UTXtoWEDEUDhqwdXpigAuUXViufBuHVBgWrJduxF1CHwiTiCCJcbuBpnCj7wKfxLrCVezSuw",
  "key6": "tmQtvFmefdbCVmDXNmDfNFciMR5AWrrJJHz3CqcQVc2ALuaQBsdK4ewmPioJBUQAz9fAv5cRGS4bHE8PDzaLgoq",
  "key7": "4YUA6zsDFt6HW6fQ8L7EGSSkejpS95PHLAp6m988rAS2Xn5HyTekcr9evntSKLKuAPBjfXThVyJ8vWgARr8he4wx",
  "key8": "2a1Xb6xdMqmUzMK2hnEU8yUGWcxMYN7WPK5RjPw4mHK81pSob9ZJFLVjVZrqiZUum3jSmTXfKEGL2VMwgVZs27Dm",
  "key9": "4uSEmDc8xAMtKGAgZSqRd1uRgTvc1oA9eKCn3upwRZQKjWoSpCPToAP3rXvd446mSqaQMUDGnVg3CmGz78J9YC23",
  "key10": "3KJ3GgzCdmJXrZBJ6mjdiwVEaUtgk4S58ccVLbeRuiPShv6ZWwPvQPvGWHQMbsLPX9fNcD9zwyukXqQsBfmcbwHu",
  "key11": "4rMirRkNENgPhxbKo9tLyArU8Lf3PwKWNvq3DWKCw8SYp6uRxgnWid4gfE7Ec4YaS75tEY5KRnXuwnuqxTUm6Wyg",
  "key12": "2Fsz3CfCF4EvLek6vYhp4HEtrRm9yh4K1KxTzUoxqmetcPokGqLWmC1oZFzBuaLFNDZa1x3TEiDdhZHDuhwvjrNP",
  "key13": "4MmT1XCDQbK3yJPT9ZFwcB7hH7adPfGrrVQ4LH3j2Kp39ihxjgncbHmgmq27G6RdxriPeJfaXFYo1cPn8TfwRDrN",
  "key14": "FgMMCzsM62XGsiW7PoG8QurBhPy9rVqEwe7w8ptU2r58EbaVzRbL67d8SmUgsbKVtmAZhLKdC4hJP8cihagqYNr",
  "key15": "pA9DEr2qDjLrSqEoXJtUEf67kgcfoZ91CJLhAVwaFwMXcf9WaY4vr4fBgkSFX4VSvBR7zLaPuqew12BpcH547MX",
  "key16": "37ibQyj4ysufi3b5ynDd5sTcBQ2Wkw89ExqcA53Y3PwHa2vizZAJPUUoA83RgmXjKUEjgEKFp6XkKkUQYqKS5faX",
  "key17": "2iBabNLVLP2bX8TxVeDGqk2uHwJ6FWPdBqEJkU8raibBtckAk2uKMFLhxatgripPPAwmmi9Dt1GGgAEiQGKSppTv",
  "key18": "3ULis6TEcqGfy62dsC3MTp6WGqxbSycFojBMMZQpyNV2zXx2xMaho2hctMd7C2PozWA3Xs6M9DEseT3FK4JRTKeQ",
  "key19": "35veWszvRaSRfX5KaNqo5Xvj1cgWL5rgvn79rS5ryXJbvFUMHesEU8fxXSAYvxFpJXNcZcdXyf36Xx9A5rW7UiQ3",
  "key20": "3BDHhhnddzXy4PSVYsG423zwRsKXCB6LKZBev3Pkbi1ruUpBbUhujyEjUp3a2TEwy88RZFb5zgzBwz5miwm6ce75",
  "key21": "NYmAUBLMUsduFPdHEgGhr18VdqYGXrMKAEXZP1tDZe8agGx2Gf47Fyap5Z2SWpSvBwo1ThcSAHQN17yfyyz3KPM",
  "key22": "4aFnHA2FgX3agKgSNbDyAJN123uGwT4aMKG1exrmX8zFbVbD7T5fLMZm2Xhn1M86r6haQ7s7eSU6UzaYzFFM3M7K",
  "key23": "BQan2gX1oqCvxCJxUcJX4bx4cTphJWkjbdf2Awck4QZpQba53NfrsHGZ4CMdH7sBqoW9R6dWCzq5jA6gp35QPvG",
  "key24": "ficnUXiT9kehh5hBE68CjWoYJVvLHfm5AF4s728x2gTrcnyWSfd7V7N9q9MaCz8cGXiEBUo2whtvNd6zQFDC6EL",
  "key25": "2gwzvjcqCegJYkciTHAQLAbMpRaKfYFKX88qjqbb6AzbS2hKtE1dwJvdrGruGdjUYpBAU6ZjbqeXYy5XFjH94wH8",
  "key26": "4uRwLUJEF8saxwuppLwozrGdaBZCyqc3X4WFGMkmQQiCDGs7TKewWazHMDk3f6eRiZnuXWFWG38nqjMR4BBovmN1",
  "key27": "2iGNqLYDGm6PgPdTNNNFZMdZKaGpnmEHFu1thpKuHFUUTTYVyaTaoXQpsXZXaMhkRqDX9ajcDxtXJYEHJ4CWGi7i",
  "key28": "5ZdoBcNkQZSZimJR22PPwUP5Z4ZLp1bfQ2mHcK1Pj2wk7pUcUMtLqeyHU189e9TpEc8bTsx1J1aonUjp1BfroHin",
  "key29": "5GQocd63Jmno9tSfapNiX1wspC6sF5yqX18ZZ967YhNZ5L3szsax6AZCMjQimZR17gh5A4zkJUfHEH2miENQgapK",
  "key30": "4hoCL6D7H6wRdHcVqG6jweSX4uyA7Tms48GPojfrjvNenKDuHWAfLTqYn2YA2oYaw9oXoAyMCzU3fEaRSpRTti2N",
  "key31": "47NEHM5Ab1kDzwS9H8HMcqNFFPTuwWgkfRzLYTXDoKuCmQhdxxEEHLhCh8UbFVfdMft5QHg5e3CERNvVPqHt9js5",
  "key32": "5Qr7wQRzVzQvf2DH6EEWkrjwxWt8xmgAhZcoU4bPaDNjr6LeiMRTJLejY8ZPWTY1PzzcVojtoF95WfWqu2agrqEY",
  "key33": "ZjHc2ivxAvY1Q8GeuZf8SyFSxczBaAiphNkGNRk5vwFdxk9jQeUSBXHdvCnaAYGsBjwXALHuySPGCgW7fbiRSHL",
  "key34": "28JpCLSjBpjTiEZ4awBBQUYALqdmyfJPuvUqyr8MfjEJqKTK9uNQGKvM8sVcWf173amdQhNgJZZBJa3pWF1nUhJe",
  "key35": "5mb4Acikqp2r92i4X3WCxGqJyScQWkpRjnGRdeTXcoRbCrEoSvWtnohuGJ58sP1L7hP9S4vo2D3rSe4uRGy6P6Pm",
  "key36": "4sGwXTQysutqayHEcGSmcjRwQWjbSu8xmCrovcUVmX9kNWoMAqh2spCF7pxaMkp7ofMTSWYzL8kKJau2CD3TpSqc",
  "key37": "5enZBgD4T8wk4m85LChq5YHNSWHyRhsSgwc2pff6nvgpgqsHL4mrmQguwkXqz84jMyonsyfys6FW2rGiADeiHFDj",
  "key38": "67fYxB3nKJeTaSddMPVBTVDmJgz37rUFzqscxXvATwWNAETBmqjiakso4tqNGpocCgWEpq2PjGxdJyDLJFxymYmJ",
  "key39": "3aVXwQoojfCVwRicCGdVJWjfxLWa4kF2fxwxACm17XPtR1pcPxP9nhLnVDy1ynFxkZjZW6h42GcEvsLAHKqBFAmz"
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
