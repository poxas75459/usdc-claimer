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
    "24TX1ksMZqao5QZGp417AVJg7cwvWxsbU15AuUsPinujSES9SkLRxEVae8e4boKjE2xP8PKDMrkCTFQX3bippBvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34eKoau7eeHMoNR5raa6g2B7TmBuJrWQrxnZTd58LRfPVvHWcJpADJ5G82XcdHNe9ePfikexWhosnYR3BKGsiYK6",
  "key1": "5rQC2F7txBb6pFNuBBBnahehaHGSnnHawZcmaBKqP3tPhmsqQEtZhoimekfa5chHrBP9KUH2BXdh1NtN5mw7NdQo",
  "key2": "4HjzMXVawasbw7uCCtnZs7QZVu5uFMFYsb1SHGC3SgTv7vyFYSnc2yf2g5SFc9hG5v5qh6f8uuDTFddkfHLGrhvf",
  "key3": "3nZkmAKceQUSFPNVWJMKtUgCCBuEdz9UKoZ2WbZwxNRYLzzWUjQzPtp53XDYLho4Fvdmgb2mfXEPXo4sYR6uBTuv",
  "key4": "3vWa52iD7RfYWaTq27ufHAamHfY1LYaUtcJV81gpEX4PeniPh9f19aSK1LvQSAyb6CqNoqCyPt1DBU4j8UW2drAZ",
  "key5": "62L5VNrBA6Lf4aKYr3X852qkKXbSx4KXNFVeD81mh62qbVL8M3Gst2DY75nZqPui7DxBZMu8cE4oyhdHtfT3gPpn",
  "key6": "531qWB476XhUrQkkn7RKDaiHFfTjyLxHWbUoJb9yFXtofVhHVmfFcjRcSGWNV2VwmNAocrYH3jSeurCcWtpXewY7",
  "key7": "UZ56JwJhztjza6ktUaF4ahGkJ2JKi6Nzks96EGXFiwk3J8PKuhETKjVZHdi4tdfRXahxbdA44x8tatmmXX8kUfi",
  "key8": "5caCmU7aWPS7rdBeaeyFbWT7Ch4s1h6aVMpQzMKNVrUSuHnD3Q6CsgSh8L1tj4dSNCCexwkTZjvKvWcFNJggBCgb",
  "key9": "52yP2YvYxjs5aBQUD9XA8WQ3bD8qHR8LUzokVtfV2sypzE6Gtb3zs1LU8F2KxHyLE93dM7ckzerp25StwYKirATw",
  "key10": "5jbEKtXGN8RaEC6Rwao1F4tU34CQetCgQ7LK6aLRwKBkV5n14XvADNFTGR3VsohiPTc44VSBty7aYnqn1gETJCCN",
  "key11": "5AiJMQKm13ATFuossH65h7PUyWHomrntVd67e7z8i4QXGKRKkiFQxe5TpKhryUnWTQKvA2M1NgBxRbRUGk3aDyDo",
  "key12": "4WCZQhMragDYS6A9XfTSdDTqF1XGLUcCwMMw34G65622yukeB11H2Sr6bGwn2Y74iRoukNZvFvnQdLXrK5YdqzRL",
  "key13": "3577ZgbVafrkGiybnZkMTQTAye1QPbsi3Sj7i8PKPMo3ncSzcPZcsnKTNbEahedoaWEyy7feB6qHAP7Fq3pSoh6R",
  "key14": "525n9QEzmQWSBUwFADocKBd4nX2PfvWYZWZNpwzmn2P3HoaD5zYFngt15i4DkQXZv5VicWY67J4uEFVNmwZUoW5N",
  "key15": "3NZjXXUcY2MypYvateJ2cwvuVUZ8paLmUDJMCHcfiKejFowyJiNPRHfubK8wAKYTFu4ti9kB524z4MZA6dKAVmfa",
  "key16": "3hgmyANft61xKRp58Q2Zx7MJEK4Dp7nwyPcndTkXVC7mdE4AdaXksp5DbEqR83MxhpkQKPBcPofgu4uBaQRaSi4F",
  "key17": "Tcj6GtG3A4wda7Ad42aP5XirsF6qGRXAwS72Sz8gxCKqj5Vu9YGmHmQiVqWU9Qjx8Aymhu1SQaHCrD633oTqEMT",
  "key18": "5BNpgD51JnXHYsoLu5RoW4bVKRdgrea8dfitzeShe7kLEX1FJ2ddUPKwh13w96wDZYK5fe5Wra7VDiwNwDByhwDg",
  "key19": "2fCzXZ74JrBoXTX9A6PmdGZkSHhFkXRSAfvnWrAGpdRykBjAnwo9vA5MMjFWzFiJFkQn8k5f9B1ex4aiAFmJjT68",
  "key20": "36ZQUzQ5wCDbmNqFCDveKLhnNEmDiXk7rAxAFiqfRn1ao9Fepm95g5yP2uubms5uQuF1rFxuyvi12FB3h7ZgHKf",
  "key21": "2TPnpvtt1wB8pbRX7u5WZzgXtF575x5WvAPnQu2RvoWBGJp3DSseW1PFFtETkifam3djSm977DMXdYhdFZ44RRtv",
  "key22": "47h5uSAm6ZhTdMjkBiA7mJoB7Ea6oQwirY6NqV9FfnM9estHR5x7DxiGFHXEsAFH2FopV9wjKGwi2oGu3c5N9LrR",
  "key23": "5QKg2cu8eVo4N3Mnbf13E7dizAxJJjX56ZnypNetHRmdag9EDeUwmnMCvVXSL5mrHziUTgrcdEwQtyr3L5pKbape",
  "key24": "Q8DxXnwwH4ay9f2cwZ5Ukjbc3k46s91jdypw1gRdVzjq4WDCrnrJoHx76H67qBK4dkznmf6dRVyvoaPS9iBK1b4",
  "key25": "YvCUFGzuTHnoop4R8LpMWwj1tMwug1V9VZmVa3YBSaW5NAgyYZ4hkPER2rweT8xXL7XhZeKNHtjiFu6v5PYM1bc",
  "key26": "3uCDS781wUcZQNtS2TV55n52H9d9D1RJ2E9zanB6dE1rddaPjf33qx3dTzyARLNBrqKuc6oJQCVRP91Pp7MBJ449",
  "key27": "BCVVraNiGH3EZMPEB8xiM8nDEdHRZBynaFBxkSPWEEGYLwB4RzVHJfyeeFhvSjgxQbvoEd2M8w3KoQFRPsaFu3q",
  "key28": "3zJs3QqWpEUpMnuu9qcobkMwJSoB5eZVaSpkk6fmdndrt4qp8xmnYXccwBJSTbfUJ44eiVvmkbVhoYMxc4NqVrte"
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
