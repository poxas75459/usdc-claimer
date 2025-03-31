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
    "3D9gYgb9pLCCaibivCoNVL6khNDUvY1pprjs4c27TfJakCAgY1cRG2bwmgvAg1BgYC7dnpWihunFGqQx2emSiKCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LvRnuHQyFCFRvLEXwjACc2m3vbhtPmihLTHgJj8BfBtkP2BF1xT8wN9DJWMFMHb6FxupWaVF97DBfrmQTU1zX6M",
  "key1": "3KcU98LxpmBZPdygNMku3se7aqtazniBvZGrqUaGvXxXd5e4N5es8g7o4uybnd1zZ9uRXLpA3jAPPw6K8QXpNQTA",
  "key2": "C5GUYt1M3EKnm2qxAEPBBK7yUTpDrwog1T1CyDCoLPtiXrhVAzb8XBTWCSk7nbc3vMXhV5eqwtvrAdY1hyY4Jj5",
  "key3": "ZfdGKgRB53gshGPcPkA51VydnzEwm7EvUC4BjZf6fmKYNzGifx6nGDBku8S1dTKMUBuoJqmNBGJ7gNRpx6hhkHn",
  "key4": "5koLyVxt2GEY1tSWXfXbAzbPBciRDStKf6yt6VqNz8CvswJp6onguYxFRHCZ2oyurd9Ek5E1NFetsa4LezEiqJmw",
  "key5": "4RqmpW9SvpuyGnALpDxzDftcXgn22CLjuz6RZKuW3ukaNpfPXWyHAWHZ69LVyQpFqXPs79i6NX2o8qK5uN1gT6Ap",
  "key6": "5QgC4VPoM9yu7wn6pypdstkzRQmsBDWwitbC9DqTcbb8n9H5iWwSFuD6dfrw1HrJAzv3ttprz8acSP3qY33X5t8R",
  "key7": "31Auh9PPWjtgM5YgoER8VpdP1i9segkEsTV54JwN1zWS64GEHM6zPEuTrAtXwWpikNbhos3UQuFVzFapujgzko3z",
  "key8": "2Zp3RXPx9SpVFGndqh5u4dp6vpaopiSzRCWY4ueYV6dxCQiwJ97giib3QAsGK87e1LZWk31BKXNLQU6JETZohYSB",
  "key9": "2j5hWgmAZVUzbLk6xaVJPg3VDwyamo3q86i2GtWZctyoL6h5ZXVVAscPD1EL3cD5VrUYYxxs8W7KHexyyD9iSPnc",
  "key10": "2n5iaoZGXMsZPGZH9qRtkKH877k7JWsh31VjTR2RXFaATHQ1WB7ADCcwzRB81FBdP2UgEnvtPh94wGZqL64yuAp7",
  "key11": "64AKsggxBbALEkbs4S4r2ALr4QT4LGpF55eCEgBpPedcYtupBzKk1M7zqvJLidpD4M7jJAhLcqWxGB4HpkRFQ6m",
  "key12": "noaH5PAATXyoqng7uxcvwq12KYgc35zsPfgbTMAuYbht4UiGvJNrpv3rbKDEnuHbm4preadMcpTZVj1m6PKt2Nc",
  "key13": "2CutFKUzhX9CBFU9VmvWMt6sSDstAkEwZPqdbBEP5wdkznBMxNme23oL3yZToUjrxhy3X81itvSeRmxmmtgJ7ik4",
  "key14": "fSndo8J2hfveNmpTVZWRFrvcmvaFnBdzGgKVLR81sEVRdyD9HdhjzGdQsToPC9VKk3scV2xWZjxHf1FEKAm2Zw6",
  "key15": "45DC7c7e3R7k5d6LN43XBBMzFc1FG3mE8L9LroyUEffq4i1qB8a2fedK2kBhTw7NQXjnosCMYuQoFkjPSJo4w7A",
  "key16": "5m4991oVZajiYZp4ABmjc7WFGMDrQLthgpMh45yjeHA9Bxm7KfPxFeyUvMRgogoBbhV6TujhLvxRx54B8NoWxApL",
  "key17": "23vCP8RaLF4ZrCwEqDuBYrQadRS8yB8D3GC2FGPApMPDikdv7S1o6js291DNBCrJJFrW9uvrEPHrrBSHcboEqrXB",
  "key18": "3e1rDM3M4n2tujnb3Fsknrpg8vsBrLp729L9Z7ppKTwFYKtLw9jRrUvW7DRM6R6gCFb3JQ4D357qedaSL5ckKCfV",
  "key19": "5D4giHpXtt9xTtfXEta5Gbw3GHMw3DungDoUuDuR4P85jM2E8hgoP2KKJX2de7xSDN9ej5kjTDMxgoHQvy8nEooV",
  "key20": "NdVH5RBMsafQRgfQfiGBLP4EUAbc4G5huGDbTccNjSh5KWwsacSZiBZsmyNaPUE4VicwrL8kyDgvQy56AE2FUms",
  "key21": "qJAAGTGZQKQzuvhdia4rrhcZFKvfnBCggH4JD2LSu1kdQ6TUeSx6rE8rng86HaTAngb2wur9wYwawqG9xzW5PTJ",
  "key22": "2LbAKwi7gcHorF7CcLfDmCrD1zvvCSnMTdJUKxczvheycu7HmY1U2T1ewwSED9E7VKkWc5GPjCC51EgghZhHqMgR",
  "key23": "b7bQ7BQmd4AyRYWizF2Ny2mfVFUEGvfRFyxgRMiWm1rYsmz9Fmyv1xtuDFWBrPJ4YTJk3ZDDcnPEsFeb7Dmt44G",
  "key24": "2tkRuNnXyC5tLP4XQyxkzEJNoaz5GCc3XkkroUoWvTgtvwguPXRJjgzsuXWYny6eHL4fKwS2n5Gbsm2KfTX9TQQ7",
  "key25": "2fBsEewaDJfXctAHzUV49M2eGvh1eiA5QU3e9HhjT57iD3XQVVYZw4EXpep5iiAKVmpnSN1PjG6UKiSeuykXHTNg",
  "key26": "iaEEJ9NjJ4m2tLdBboRiFUKWEvURtgHryBu5giV2gZ8naGSFemxJPbtfumeyt29M5rbBmDFqnwUjD6Dge1ehAqR"
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
