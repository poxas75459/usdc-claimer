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
    "53XrDvtTpKtJne89vRrvvpmRtY25AC4JRoh64yMwHoMHq8Rb45sraUgtXWo71PpWhHAmTDZoRVymDfiVKCEWe5jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPfFZ7JkCSi6fhypQmkKxWiho5Fk6Kg3ZiAyddj8Sw7ig6HUEA9zG29VYqXDXGwRhMPnShD3rHGxokcBVPWW8Cu",
  "key1": "5e7GrQqDrr8k8cA2LPiQSRaSFbgLEkqFXnF6d6AM2ZCaAoiDHQTy5Vr8Zrap4CofV8zLh9PVnQiJaXL2X9dWZ5nm",
  "key2": "3ePsFxd7ZQ72Js59MJuFGz9YW7w5bPPwrraPimHbGFuV8wWtczBZiZyp2sLtXZYmyhAKCwU1AHXejfowUf6xkZKF",
  "key3": "25Yjps4uX1z8YDjBEz9GCQihRHsW9TPhsoseEVWY2B2dqNarbydUsQBa4G72gTXDRoMccfH2mEUCdJUsKy9sF5AT",
  "key4": "3eVfsH71FZzhWHNhdvudXoZrca3Q9TvaK6YmztUv8L5hQ4N2BR2EkwVEr9NDvq98gbhaiwibbeQXF95qUc8qi4sK",
  "key5": "3gZKT5cwD62aAeT535swpVrTFcyLryhTgm156we3NVnV4M3hBZ6C5TJRY9wmH7KZrtCCqScd9ngRX7JktbDfwo3j",
  "key6": "4YQttztGejmXPUD1uCGMhYaFCoGEJMSXwSbVWxevTsDyyQG1NyfFyJz3tioQfKaoHUGKY7UDUawz2FwPyjr5ZFn7",
  "key7": "2hAvsuVKJ44GJGp37ELPdfch9HFivXR1qgFH9fXuUKEkfGyDYYmnNvt9PWvre7Dg2azTr1GnrYZ1KjjbfJc3AyRA",
  "key8": "HAdnEFmB1zFpHqdf76tbfQYwMsSiCwyHTEBcfDXm5dYsF1Ae4jFWP2rmUyJ98FdV36ssLoGHo3dCnj2qxFHqzgW",
  "key9": "5bH5X6nLzEywvtjfvn7jDwkdWTTUzARJ5FBeFhsk4Ype8zipogBzFbsyncHsPeuiviVR5uG2MhAPwd1mj4DzPEvh",
  "key10": "DH1383UV3fyxyegQaaGoY5c44JbiUmETgR7MAmBfATQmdLDUhrCawXZcUNvmdL1SUQcbVDmnZgZcWEkFGkgK3cK",
  "key11": "3UYoz6B4RhvbEDoyJuznRdFicxTWWLhvToTdP8yaUqTzxAZZoKU4Av5w4verxiRRWFRxoU4kkCneowHytsFP3abj",
  "key12": "4zxBWqyjdHGutUFP8gmvZNghGNLvfksa8ErpFSEfgKFNnvRFSaPyHDzMyLyKXANX8AzJbV2AxmNupePG9J4hQTu",
  "key13": "5124Lm7X75wYb17PioZQpdf31fPD1eHHTTNbbytHzWPdiFkoQNYifPmo7LK2gDVbbHce6ymeoToYwHHEfFocr1mZ",
  "key14": "ARMZuYUaVe19jSiB4mVyp3Miwj5Jv4wpQkEcx7zskFF7KciqV1Fec5EYn3zm8QwR7MTuJtr7GokMqii9tL3F2zj",
  "key15": "5KjNH9BwN4bG532HkiWbTCnWckvbwnE6XKkyPhBQvPy7HmZZNURT3obQmHYpwPKNzotsZ9wFSkgCtdbMwuwCPCCe",
  "key16": "4HCfTv3Rz55eBLJFEkzg6VNKmYGDPEJKsm8CUHnLbXE3GbFN3ZXFSNHiGMhVk2TZYDAP8f1KBe8DtsZjY2DrzC5k",
  "key17": "2kvuNwtMi8rFBZJxFMpbY3tLCQS5ey3q9HovSv5Gdb4WsNPM9YuUHUPu1VQArqJErciJE6X2U9tn9R59LMguU4sG",
  "key18": "3PEWSycR7qYc8NaS39S9ekBBpaAQva3mfgdxh2f4Qx7f9DmTYzpfiTpq3UDP9QJxgCW6qSph5XPBy65Yiq9Q1ba8",
  "key19": "2FZJoKHVbr7KPB1DWzndLWqTE1mEUCveY3ktgnGDWYXfVRcU1zYyUD41uxYzpNtYWRtbVimxHxSiVRktzTNx7sN",
  "key20": "5jLbv7vAtDBCFSFN1p6djXy3w6cuFbFwTeZfqAvUA9t9VEhRAwWn2f3NjBwmysf5FNgFCFBGNR4d3Qp6XWPr1rDZ",
  "key21": "4CdUBuRMrPUNFndRXD7J9wdMvayzTyuFzfJh7Nr3E6XmVi2szCFnNDPJETC5bKKRbF48FfAco28wprzdeoNcuWoM",
  "key22": "2uoGQKmGRbX8VwdyMH3QM7RsZWMbcXvQ3sFFsD81LDrrfHzLvvrmiEmTAteDfrcYzuybo17WvxinF4BYLFJCs1oT",
  "key23": "62jZMzqpkUoCXePhC8Fig4yDDYhgEBgnxGSCKGZDJfDic6GB9ZvBPnMb2j8vNrnjsegABBYuVRPSVnE4Ad3Wr2wK",
  "key24": "2NCcobSFZaPcVRs6eNnMZBk3MaXjua85c5T9SKTmQeCu7chwxmLAQbTiCQ397hS7n2BQoXxr5F4FUimvDfm4Pmeh",
  "key25": "24Tcc5HwguZzwfc6mKZN3R2a5hwCVrupjmhuEcmzTdH3Y5fxWX1NpJ9WKepVg4DovCenyjn8D9D1XEqRfNBUwkAe",
  "key26": "4XbdpDgPUhGNEwxpe5LcZ2Ykn527B7khu7u23JTX2BuzV3cfzDcWwUkVyfWdBpq5hXc4HXQnVwN6GsTQdJ6qtc8u",
  "key27": "dUmS2naEKYciqpCEuR9HDftbLUFhwWgCVs3DWCgfimNU8NMQg26YtpDjmW2cSYVwH3obNioAEjUx9ThhNihTzVY"
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
