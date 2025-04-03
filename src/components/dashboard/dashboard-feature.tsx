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
    "XkASTAHsZRksSrbysjwvtRc53TAMXPrKgBH7rN3SPus3iQ1NcAqx7NQENQMs2kK2i2Ab675PacXhuJbukCPcoVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ubDw1BPeGTG1pLGDf1Pu6bdMdo9uSCB3c8qr92VDhJxj8ooXV2gJpwo4w6anNxXduosf7DQWKc5PYWNcCp9kAi",
  "key1": "2fqKQA77FMiyUNxg1j7XxS69eR17A74CX7C783jPt27LHbafvA9mY47N1VY5ZBTXsstHymveQym8BcKVxtbP8uDZ",
  "key2": "3Nnxi7RFHWDockn27ck3E4r9JLvo3eTedydgh3pRNDCB9ftx9XPW29ixzC2GoMUPwpirpQ3agfuNwJAGgo8GvpGv",
  "key3": "2DK5SheKud9EGfCowHHmCBHHRTV1ZV32Lve19Rh3GhyRgZXvgG8zSSgticLFPugePFDmuqUdbUQEhgWKg5EPBR8b",
  "key4": "4WMExQSjtxQWR3Db375ZFGHGMxPrp9dgBSEo3jqnSJmHY8VyxJggYSWyoaGDdBYEHrrFJxUbh1NPn1GjH9r9V8W1",
  "key5": "3CX7M7aMgC4W4xziGtR6xXzoqYnoG4xCCD71dkgPDz7ta7GHQjmhMJpRsbiss8uY4K5n1aPnJx3M6jWEVkL7nQGD",
  "key6": "345Ao5rXkCgfwMzFU1bd6vtceoT2Sz2qwDvwSXWVoqSG8CCU5VV3PbSq4Qhdi16wHo3Y4iqb6vr6HaCE3BGs1jZS",
  "key7": "5MvfkjvxPvKeRqP5ZRHHAzpGfphbkH6Fb57gqi1innLb633o1RKHQpvEoF2a6ZbybXyzJk2PsCyuxw6HTpDS3C9V",
  "key8": "5mPEu2gfdrQwY2C1m18LmpDPC3SMnwgY9j72uw1CKM4rGhWnLQGo8qMDR2LD1Fv8ueme6FGAKhBvGgMQ31axj7rW",
  "key9": "3jByuxqGAx8LqhokVgVqtiYKPE81Zgkuzk5s1ZYDHfeZN2GzwjcEW28Z9E61NdnaZ7YN24hhcykHb7sREX5y25FQ",
  "key10": "4BW3qCKYsoQHxXyHR5oXzytnK5w1Uu4JyR3YKbGUWfuFeaiGEodrkCNuUYsazX74eGof6KzvtmFF8jEDuf1aMVAi",
  "key11": "DudVs1C4RbwRt5RNwvYdHSK2cV3sC2T6151eF5Xq5JXSCDvpF2buAWjpF7aUubPWqemnnbLyrVehE87KzKVAHpM",
  "key12": "3yL3NuN4PQMKrmU14TScyPkgmnaYg7KNtgVv3tvH2dZKE4VQChcRunvgrRZsmFaoKqhfzUNaDq1drcL2Mi5tXiZp",
  "key13": "675dYM3ePq8hmyiD9upaJW6PbJVMZzbwPeUaocTM8E3DxMhJcvUSirMyBe2RpypBXefENbnvfBqxCuMay3XivaY",
  "key14": "4pRtPYuNApa5VQRjLPRQfymeEG4QJM6K1881kJZniQNVKtCGo6Bat7tjFceErPE11TosSfhVGqQLRA7FqYhSx6mx",
  "key15": "5gwRcYtnVm3fbG5B7HnU2skbyzRGaXtMHgzh9d53Q4E3Aat68hkkoo2A2BgaGaNmmXZzdie92KS65ofG8cgyViPV",
  "key16": "2CdYZQRYkZcAzZB6WLEhP9mycRTPAnREKKZiGAtbWK34FW6NXC3AP7kxUxmTRUvPMwSjDEu7Y6TwMQWZnVvAUD4v",
  "key17": "3PJJ4UUgA85SWmaaBTr1ikXV87btKFquan3PVqSjaUiLdwBnmfc1Ykkiq6unxyQLAdBFnw4TPhJkutEM529uSUY2",
  "key18": "5rit2DCPjVKkaEwysEwFS8f2PyM3o4j5SvteUMZsnXqqsoUG1q7BZ5et1tq7jc3tvFesZfrq98EbYSqWkk9qnwdZ",
  "key19": "5fhsjUuzRqUzNhWrzw4fjnByyF7n8xMpRkzyX554C1athKqTx4cVDhqXCD9aF9iVnKQHSBvg6EF1VYYWr8jQuUQ4",
  "key20": "62hZ4BCZ5NpGhoFF5cpJTZhEjP1jbSfK9z6vmwVvesE12Bx7Uwhn8o8Do52EXXbQpk8EJ5iJjkhhw8RWEkjjHkU1",
  "key21": "3fnv8fEbNiYWaAb1YfgSK1y4kbbBu7SKTYTA1xKyEeomfjzWgTpMeDNYZNgUJQmbsPU6pWWXo1xFz7i8s1FE8PNx",
  "key22": "2dP9QTkUfiSq11aC8f9hxJj3tibLZVn6EGHo7QoPXc17aAmCXzo3b8EzyUBXbgLeW7eLcsSqhcKhPsRefowBZ2HZ",
  "key23": "uc73UtqhcMoLqJ6aGBp1aetnEqEcneu6hNdNBx4szuZaveNddRxxkrSpa2HKZcQ3ixnJb42364eW184uHJ7wq8q",
  "key24": "63kvbyBjcRbKLXes6hy6LxS7Kim59etnzckhEH22iP7N2VWJdDMyKxBr1UBbVZjj724JFbPvKKKpm14BfCyShj2A",
  "key25": "44M5Ngj9gmJLfm86CiwAf3QuG6LgZpdaxzPXpm7gWZeYB4oRnajjCtDk6SutZQYwht5GWSzdVze8EuxR6QRh9v5d",
  "key26": "3TNy7bKxsyvMMjiERyf33ucD1Ud9SfpWcY9tRqiHuwaHAg8KxMYuohhvd7ZWoy4DiYaeSgEt8LihrWsRWY6JqqRx",
  "key27": "25By9trK4FajsPeDhgLF9ERwdCw48ShBp59TNiT6hokcLPuxtcEqb6iPzrDjyWVmvqLku1EjEksxgiMff7M6xnQs",
  "key28": "3g7xuxN9i9UqLg9gbZXGvd8djwiPX4hwov6e6YLaqmbRQRStovL1yjv3Jb6yy683DcXpo6NPx3LgdZ8AdaUbrxvo",
  "key29": "3oeWLRG9aMccwbAhFPFETBjG82R8oh3XpN2H6nUo6ZsGojZmYktqvX2JbbBjdHWSv2jAb3edJ1k2geQ31vgso3Cx",
  "key30": "3LMUBMviiDcZYBwctiaazo1LTTVq1y9Nu4DVZVpfMhbK5soFyfMvtb16PHDCzTqAwTEaxiM67x8te2fFx8LkFTrv",
  "key31": "2mVVpyv84NSQF68wNYaw2hvELZxkxFXZSJfvrJrbUxvQfYj8Z96apU5oC3yMiGHWkP8uWvUw8oH3a5VWYfitMGMr",
  "key32": "34nEo3rD2eHnvX5e8okUp7GPhCuwWdg5kbAEdSMiw1xJccPQoq2aRuTkoxRcbcB4UpPxjJcgQ89SEPn8mXqvZzNx",
  "key33": "5wHtpCcAigqBY67M2SaCLBcFzSsG8e9LdrwagYNaPYhi2k3hrZ1W67gcYb7s1KGNYe2T5RteyBC9zMz6tDFpLYZr",
  "key34": "3Wbft2gK4mxzC2qruqeZy5FjZhFuAhWEFj3339nEAG7AgiQPiEQcgxRCyrAJLE5BqqfRRoLqwdDb5smHkRVjes2i",
  "key35": "4TWLwfZP66FG9WQ4n8cJCDRZrSFm9oDdSgLbeLTZc2w7wRTRDdYUYahNh35P72bHxFEJtRBCNLHkJ8syLR9MT7da",
  "key36": "58JKvv88DSWAcRA14KYiptqBZHdzB2Z1YXdVZSjCxDSNwLiiD6m9UcYztkcwHDJiKDmXHeGFGzi1mjLXR5RhK97Z",
  "key37": "tZew4W6aUamCDJaCdJ7Jbtegr4XW1dB4kZoroxgESt9RwcRHgmUGm1a15RUqgQExrV7ozYs6y334By2RMmRHbKM",
  "key38": "4wKQKb44dFKKiHgnnps4MUaRJx9ifgaH6Axwvi5FGComtUXHVD46G79VmVuWPpRLiVL7U5fSBp5L7F7tyqUDSAr6",
  "key39": "3HUoqFQULVBA7rTtJTvihTd7KPYQUuDUxvaUAnM614TM9JDGjN58hmyNH1eTygzKzq46fxjXegP5AogcVs1b7Y1F",
  "key40": "yKC4Eoh5efM1DW66yGtccsWgkW9z84A1JmatUHFbeECe1g2MT7DASaH1qSJuMgF6ho4V1FfqkPqNS3snWPgTU3Q",
  "key41": "5YFbJZeRkU5JCrbpFCkn9VgmpLW1xRiGvUphYxGeVSRkWBzvRc5jgLAV4kngDsi7F733YfAbeGKwu9pV4pJrMkwr",
  "key42": "4EXGp5WEKuBfMw3FXbLQW6Jsa1Dyhw4XstY3MmMh1uPB1nb1dqGf1CaesDw6z1PKzD8qzNczFJZgk63x7baqbmtf",
  "key43": "7iUhiqLSwf5ir7RfYkdcTcFuKP2WxCrWTkgX3v42DVGoK1QqWC3YJxggRmm9PXNh5ES8K7xhHmWEKLg1EcRa91W",
  "key44": "4k96rt8ev8c1dwvG9qwRJAEGJHsXVcK8EVhwWveL54RPUavijbhd3fAqh21tFT8sD6Hsh3rYXo9mm4AbKbuV67Po",
  "key45": "2aFxAF4UUNTkHsM334T5Fe4nUFnDokj49UR7eMkYJ3bGQC2cjxoHxmGaa4ZDMtb1BHjLwxiu2b2HcUXAMoHt3X5n",
  "key46": "6a1JyvpaFkypFhz35GHiXg4H1toJhRy79aW4sXwXDAnJ7AAHiGmuXt7aUbUZXP7UGhnBdC1oVSFC77cCtsNhNnv",
  "key47": "2vN1BZnUhgTDbtcyowsg5LvHQEXCRff3xHJUgKBoP42hEF133o1rEjHMtjNFeoxDGbKXe83AKmm7jCjA1cbn52P7"
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
