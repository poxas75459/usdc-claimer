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
    "53mcnds8xPMPujrSzqYiBDTsK6VumLMETJu9YH2LXtdCkaEg3v3rQJsTetiw5Kh1A3xs8kGs2Zcyc2o68hdLAvCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQUgpPJ4mfWHjd1EYjaKbuvRhbrdYwMSEurfjK9sRJrNQbeZfusjD3d6NXTkx8XCyqZiaB2SkWTku2e9W9ongBT",
  "key1": "UiexjvXe83EqWFyCEjaz3fW1UR2nH8VEwZmnJZ7muwpdjRXC3jQRpfxuV6L5FsGbRUXUcD58q7FUw96kQfJs4Zn",
  "key2": "5xPY7fwnFs9bd3G74UkD6tfCxEu4a5Yv4fYzZi8Zkdj2U3wgMx1MiZx29pwDjTXwQgH7Wm5eaH1hU1UoqCL912wW",
  "key3": "2PZ6UJsWJXVMmiFNSALg2aiQNWx3cMnso9T6om8KtNt2uCSTbMSHqxA72YwQxcL1nnfPoourxq5KHYWdCjKZsphi",
  "key4": "TQiXkG2Hyx9d5bWyP5ayZRaw9SyLnfhcigqV1Y9G3uSpNSxnuvSPsqGjXqd9ows8BfYdBfGRySDC9YVdCve3u4R",
  "key5": "YNMkUJo1YfykttyoR9EPvdvxevoRCk6KtCfDo6cchCVn53zo5Zzdx2nRM2EUC7W5VYb9HJ8RjMbwoCCPDvsnucv",
  "key6": "6nGkE1VSz8DFcApJ24nNa6KczhLbGy6JRwHpPAs8zkLdBuaHTkBzc3mmyxubixNT72g7N6Vw1LJavA1uuez8Cj8",
  "key7": "46qMkoCcLQMckcYMFHqvgpsbSYGrSdLcBXxGbj2E7soiCbPGhdi6G6WjW6R7VC9Cr9rwj3g34MFiVoHM2QMnWkUS",
  "key8": "2tpdF8peaKb4mnby1y5VwofDHy5W3dZFoj4otnFfHWRKBonPQyME2e8xBQ8SvwsX7uGi4wYTuqbYVZToaUriD7rf",
  "key9": "4zvjN7Av7Sh19JLXFbZH85nqqnqp1L17fSW1WtVQBh92XUjuDAhuGQrGfSkt7ghtLWrmU3SYkFNQznYeYk4v1K8U",
  "key10": "5jNSkaBp2QchMjiB1CmTc7QS1s6964PZoeFS4m5LzgBh4R9jvMHCxLzzZh2DnuQdPWABd3uVDNNyTM5G7Sv56R2o",
  "key11": "4bW3AUN8tB4p37R6nhkw8HE4kQnS38C13A1YWfMJMVWbZsJaEbfGK3Gy8QgnK4xJskzM745MbmxgKyZyzmq5EAE4",
  "key12": "2hxTYgzrMnMERJmiAgvVvGPniBdjWjUas2aTDbnSJ6YQRtcduzur2Cub1H2MNm249xn9yxe8gUDL6GY77KfVoaKH",
  "key13": "2WAXLWvxPUTDY41UwUKHq39sPFQgZ7ftpgZhoXLxaN1zDCQQR1zsyo6ddMfUbkfvgPXY6vyJ5Xd6bPukyaFmXjeZ",
  "key14": "3KhtBAazmMVB1csJojMnEPBbsrq2mYGQiBmRqConf2TWuDXLhJCigvs6JX6X1Q2ZwmfJKjNegQQCRTrGoLVmC2w1",
  "key15": "3yQWA7HLeggKaudU2wFcxYzGjR98r4yhZAg4nNquXoNUDhPt2DFN6PuAGpknF9jKY41gE5LNE7qFTob7z2KtV4j2",
  "key16": "1g7ynvN8KBHn695Bu6VrjBJvi16vfjKjMoPUTKrmB79rC3ycTqkSDoHbF2QmpuxSibTqkedfjHc95yDQnNo9LtQ",
  "key17": "PxpQQhFZvMwAvsXDcp6na5cHQH35kry6uwgZPuuJQxThbPNBFMbhyRAfTr1r1HjeX14RkufxunavjmCi4LMKtQ6",
  "key18": "2No3zF9H89iPbXqncbghcxG9UGWNLhW21uG7fLDq4wc6YUL6tWitdPwMwQLqwYaTTdB68WoQXHEw8z5Xp1R1UBUB",
  "key19": "3HitYH9FTshJqrsCbuh82pZrWL5xaDiMuwcNx1YtYd2qPXdLCBh1RpLy9x7GRKX13iS2eZ2FqAWmF3xSoZz6XmgW",
  "key20": "218KTwL58WHoM8kh27dC2FCXab4v86aLQEu8nJEPmViuTKGhYn3rbgRTpAwGsgzMbnaifhM8uvWJUSFfQ1VD8NDJ",
  "key21": "5znjNqwSEspWpLUHknNWKaN9uguVRPTicW2vNMsUpZCvHHsD48EchXua3rzJRbdJ4em41Fgf3ebQ5BaFfedgeaEM",
  "key22": "5Sv97SCmGtf8HS8GgvqPY6bY9cYsXMeb4xRfMFbC4VLe3W4W13PrzQagC2WWXtPxf5cenc7MCMbHdKLfA1grLn5y",
  "key23": "3r8P5ZVZSv4FMi34FaUuZriQZBithWY4wP2ZJ5t6DLAKYjoDsCTCZGveNGuk1jNzDwjF31F9LeM895uxamfJRsLn",
  "key24": "3hgtwQXCmKDTuqxZCQw9JNf4wdcdGcjBaASG76BEjHMRF2DCUDgiWBvoHrq9wRvrA4S7mQwV25okrRWJwWT39Ub4",
  "key25": "23ryZcnG27Ej1PPmhc4Fb7fpaJob4GZRciXLuCirL2ZRkLRtcgnUwEjR5SeWeqXbwAG8aTdFVaJpGyUzFHcnLkuQ",
  "key26": "MmW2ftWEeW14RekKd2WHZx2DpvFFfifGy8WQNQaTcodai1S5L9WQB7C444hy57RYjrEZJmGiiznW4Gp8PiUbcSQ",
  "key27": "K2GpWPB1g2crX8hsgJxMc1VQ65ufYTNqFvvwNoDcPUkY7xgHE4yN45exRkaMQScnFEJNVVhBnoyUEhhnKtJgjz8",
  "key28": "3YRqKrscRFVMm2TZQ3wszg9o19maf2b3QPyh4vKzr8w49g9CY7YEdpgPTiR6Yxf13WpHJbvHQWwZTxvAHLjxLoyp"
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
