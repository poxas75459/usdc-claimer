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
    "2wVk6ngEUzi4NWtQ85SBnbKTt5Zic4knjQACsNM1AYArsx4KYAB1otXhKUA8bcSM3mPYM6bcpHSSn9xn1DzDs8yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAK2SFkV36S3Jg2Y38KHEMFjzf6txF2y12aEeCMkQDN2f5pGTPgR9TEJ9g1SW75NrAVcUVe5ZiNGMjssJkN7n18",
  "key1": "up95Ho1e6QyyQs741hkBaxRPfMdpKmmwNzUU5xkxgwKTBYCVVNg8VLYy2NYpif5WGfXZBuy7PvQGddsWZuPHpwK",
  "key2": "5XYP7LR8EeXT16yiSNuFk7CduyFD6cqPt2arBUVBGZz7mTgbsX3QJeymuPcPvdbp3m3L2ThAPaC7q8qBrbMiNgLP",
  "key3": "37DHMEo98omHVQupA9YRSTyKELW4FYVLyFtpJNB3DmyQqGW8mA5NeWzngaGcyX9iQeRzvnJsL4vBAagJDGHWNh9U",
  "key4": "3o3nnWUhjeE3YiQayTYcz8LTnfYRYFmAkLnpjsDpgjDR6MtnGRDrZnwGwjDRUeT97pByAomk6c9MkaH1CEcTgyAb",
  "key5": "2j7QmeF4v4QFhQaFsYFaY8kN2B3aZNcgTkt2D1YK2Sz5nytSDWat16D1ntCK93GwUm8VxHFUPcuEv5BWXYJ14cqo",
  "key6": "5JanfgKuYpxYxbDAVpLtJNNz1sgkHoQj9ybgm3XPetyHPpR5nyadbgsAs12RUtrZsbcuCFf4V1FKTc97GivFds1J",
  "key7": "s2jfDs34JBnMrQiBDgkvHJeU12uWndMgXZ54vR4BHF8AG5hJdCvGyDoA3UD19jjbSbEHE9xdYLGJcVvSuis6swX",
  "key8": "2E5UHkfqBGiPyKq4vbre1Due5Kgf1XsxTUSwnfzYo84nAhyMcTg4wiGTp2GZGoGDsA1iHHRxYtFaR2CeR4nzJ5vr",
  "key9": "FBBxhGMJJDBkgnDoXtba5cxJZSMiicdKjt1aQUE8cVaPLeLJq4DLvZRHsKpZYXHUpGBejD8zbUBpeVouycEJ8C9",
  "key10": "4tBLVtdQsmqHfa2MXJPKq31mdq1MMvTYUAYC4icCjPHbeKMEhke87RiMtUULpsCHSm9SYzgtg59T7uZo2YneDLF7",
  "key11": "KUoqfUvzThRAi3Ww1MDkjs1yjsHXBkiyrGDoLYz7skCCzv7h4JwbbGf4Przi9rF9pGKUiRsCsc3FfGkD6Y4Yw5b",
  "key12": "346rBLaUbSQtEZFpSHJgMZ44jhy5GFy32ZaR94sRcYKDK9q6WLrr9hLB2zYjZ75zShALBi563hbN6RR8PFotjZ1T",
  "key13": "az7EtuwBgc7vNfaZ8SCYAATqCqkTGCgz3BzpazwxPNKHCEEYbEpaeN7fu4cUciD5ENBoq4Y15vSkZqa4TfvVmmj",
  "key14": "5xuoFM3JgdzWPkdPTqCzMF5o8k2MgXLZEU8sAHykLWQWiQKKhu82SkPSaSu3NG5yeti7qPLGfS1Wy3G7NVY2P4Ut",
  "key15": "gpkVQu7LVZyCBuYYiJnBUXJVpntZ1JtNzDETUFYmZadT61VyT6chQLatZAMQVeYZuvoXhER4a1iRATn5pcuFAcU",
  "key16": "3XsjWarbijnU4c1C4LJeLcXY3w2oxUK9Egf6QYZ9BCfHDg2pjqYHNJyFLmorkiRgG9kfdsuUzj1gqufxwg23GsgR",
  "key17": "5Ji5NQq86dVLv8Bbp2zoSueNG8wKsZVoFnqYs1ydDXHz9onkZzSfX7M79EdwGwptWFiPvLxH21RWZLtzfavV5hsW",
  "key18": "3nYsMKNMMhHCnm5YhGNGaYngaW5g1UK9ioieH1bzsEmys9ENeGcNZBqj4JAHrAhzb1Dkj3E2oVrwwdKzU61oyBno",
  "key19": "mSDzhVcYELxgaPCmh6PteFCPziYkZGNc5rfrcgpfAA5cgrhXzz7dRoeHUfHRtC8UbyQTksi6SVhWFtGeYhU5Pqy",
  "key20": "4FRpVCJ2NRawMVapQtEnqzVAWt5zzrqeaY1iT4dzwYkzeNS6CKWg1F3wDNwiLjQHVNxnVGzCvzTDfx9TyfTfzKv8",
  "key21": "rLvj7yuVTj4w7j3x1vDzC1EAe4Dw4LWQA1LX3cHFeNkdfJ7KDbqkvrSu7TuG9uPmyMg6x899Y8JfEQSwpjXEa1R",
  "key22": "KVLMNsjDU2Cz4WNdqV1xkhnsMYppsvRWwTPWC2p9XoVNzo26G5D1WSZHQ7qWnVsHToSGVdNMGvcP19aB66ftNRh",
  "key23": "2o3pw35uHjm341QXi8WUTXDweLgXi5y35NsdTi3W8jmR8S4KUhtHtrke5DqxfHtnTTRY1w3fHekMZofHtJ5oeZFL",
  "key24": "wc7mAGygN8V7fZn4k8aoxhUi1zsW1ScpuiqvtJmgzgMaBwQkMd8f6YMqeUU2BVrqJsJc6JQunuC3oLAHLmLd9md",
  "key25": "5G8ctGfMNKUr9wJ4yUZJeJNsWid68UZjJxxPigwXt5fTEUQKnN7gdRP2bU8y2BDfhf3R1wAyhhH3jpx8SfmJYRQH",
  "key26": "ze4KqwgYU7HEPYy8G2bdfK5KbvKn99fnyDLoYoAxAycww4m1ax6LHdgDZvS6B3GQQG4uDL7sScaap9oZsCZFgqi"
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
