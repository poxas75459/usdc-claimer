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
    "3v9HVh5rxkEk8XL5QqQxrEFBZxovK37Thh3VeF42GtJaCXnCfdWnH5dBv2Le9diYLGa2HWrtPV82D1Q5qsXrLdC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67JjFhx3U7F5cUChJWdK1ETZjNPTgQsjVHyYmKkK6F1xfs1x6mqubqgLmafwSEB7S8AYHKjRB9zj38KzQh8i1ynP",
  "key1": "5vPiUjTAxWNneKj7VcxGFnGcaaxqb1gpYEXUQcALBjxigKW577R8ns7TQV3cN7MxmqScGxH4ZDb883VvfFrtdizr",
  "key2": "2zcGQaL2ux6cZNzQqDYCBDUtoCNGQr2pknysie8Ly9wCcpUsgDB35kJ8P86XWKw34LfC9tXgvs7TgoqTaV8qHRnn",
  "key3": "27mVnPVULHQefQ57HZuPEfuUrZvG6hTXnX8rRso6KYfKENzeCkWaDXYnPpRRX1hkMjCwLXo5NYPjGD4qNbeYz3Uv",
  "key4": "4C6MQQKeAcsSiBfMUPmvZFpd3QNzmdtq9QCDHtDX2PNXDsdbELq2QBHstV5m5pVRPVbDd9txmgr73Y8Fuuh1Pa1N",
  "key5": "5C4zNJiWj7DhbyEjJpkTzV5RriFWx4nPLZm6B7exJ7Q5Nus2FXNu9xmrJmWvcEiWZZ2MqV3xNGZ2JwGa24UDktkN",
  "key6": "4WTPpnKGwB492rMrh5bBSRjmamUS4KXoXGN2YpLquPn3dKcajoZv7rn9Vu3pDVYfeYcT8fyXij9TGpArUKKDHQ8L",
  "key7": "2wc3xk6vuh2MvZjmpoJiUWqXe1DHSGDpn1QvNKen7DMEDzgQzL9SL2Cj8iPXZ4qhJBefJY3yirK6fwegn9GEFWBm",
  "key8": "4suiT4AGRiTQp2KSXNZvZC7RwPXkTShNrVrjoJwygGSbjh2ynBxA9A9QdcYr43ukUpJBmPx7ZbSz7EpksXmJbB5c",
  "key9": "3zCgXTEndNBzSCpaH7FVPL3ZZzSt7HCcubuTHTLE5Ca7ZPEFURwCEgQ7L4H6zEuhBJdgvH1FHpdzNSo8pqNxNHxW",
  "key10": "4BR5EpZd1QNAXusgb9f4nHSBwD3qnaFV8DR3vZZ5mwL3CyxtzjQrQVDkNeNLYHYqgzVL3EtWZUHdiwLWS8piPh53",
  "key11": "2Qz26hgHPxyFq9zReWJBG2sCzWWnqseofDHPdx1kzXuEDZ1FVgd2rU4Kj2ti7uJrywq87AodW4aHCesYees9Remf",
  "key12": "5cY58tmcqZSSsCULUkuGQ9tDbBajwYb8L6F5jRvsyqXMnWn4z1Fbfs7KdfY1GG7QAhziWcwBNUBCzVjjqAjmH8Tg",
  "key13": "3AmQH4M3eBkcy6THS4gQzPgLaU4GoFSyqNs24GVrfH9nc1SShyptp7wY4FKcN5mk3eurMfdLM8DWVbcmcrV9MpYd",
  "key14": "4mZ5qF6rhtmFnfWhdGvaZ7ucQs2AxQbJmHvULE9UsARuv5N4ybugv92hsFqwPzux5eRxTyP4PF2sZXuGqWVsmrAX",
  "key15": "5NaNzNE9AKPvd1jWCXJuAv2agL6r49mpa6HB7AGYhNVE2aXfMNWYUh5FQkQSHA3MybKmxWHkg1ZrCftvtkkRif6J",
  "key16": "3ppzAB7ckBNkBtnZD9kwTh9qoSGbENvcpmMEKQNpdUxW9tQk3F5zNqGAvTpbQ7PVYXiSZKAi18vaWwdHwFCnQZ6S",
  "key17": "4xxWG5mWSnqZvMW5xvxF2mhov7XJXLYXh7Zvmdabc8aDMNDxCaVi9Ez7882gV1hM7zQos3A2Fr1kL3FH7gRJXhgx",
  "key18": "FL96h7TpDbgYfwjF8tiUiHhVqTxgrmpNMXtEwPXU4WXDXDocyy19czMq8zcb9mHrPNJXoFU23Ag2DHHwMhhcMnP",
  "key19": "KhBeDoME8pwtUHYJAn2isUYVyFbzN9VeYz92vXHiMq79deJBKC1acsBD291R122vs14VAr3nyo6J9A7fU3SWDRf",
  "key20": "5woU6TRZdCuvHuHE4JFu3mJsLswpcxsfc31k8uZ2BcewZnEZ8tE9Eyj1jYKPDRT6U7gbpcjpyJo3c5cfn2JCcn3U",
  "key21": "3pVJcux21A5hUs5nDcAPkcREd8DLhsrSBxWPHpPZtx79VCtbfoMqdZLsb3TZ2FmhyyLmhzcoC7yw9Ab2RkRGKWxn",
  "key22": "Xe6GuQeHh2eKWA7gRHp7hW9bwJ2DJVkEkkReY4x6Z9SMYbHTeJP5cwAKYaEiSapERzVJtVhKfLb15bwJRZ5kGgQ",
  "key23": "4nsTrf9TchiWwSMBcU8ZmBB4P9h4vYPRChXjWf1SV29BjMosyj2fqRJ4WKzESMDMXGgYc241WEzyFecry9i37d2E",
  "key24": "2F5axQ9aTppnGFCKzJhrTScy9oDdDXjszgWwh4imYAm9SHT7A6A3GsrAUb6WXTzh1ffsEDaTgTRZ1SAAZsD49xgE",
  "key25": "3AChZgNV2SDactHH8XX2zUxyhKRGBiC32fTcdrm3KZx28xceYf1vFa2q7MdTqGWcKoTG65TgaSrFHGTEe54fW1ZR",
  "key26": "4QX7DMGuzB87APfw84dwcTKsg4A6aYHab1aXQ5dRHBsSc3hoQwGrHGpvtStXxPBo5yTFGRsdyZ6g47mCGPQEqQsr",
  "key27": "2tHks8Uq4L2npgGPDCH94kBzXWyh5NC8TvBMZedj1iA322pgHWEH2mRj4DHeXoNk1A91Hud4cPDrUpnpVLTsBfBy",
  "key28": "5FuiokjaiaQGarnKqDpQW9jPh8XG9WzAYjaWozmWrpqzNBh7wA7xjxQs6pLTpNY8mFNqcb67JqMrStD5FrUERcy9"
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
