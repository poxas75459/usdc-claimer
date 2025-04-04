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
    "4YQnt4eNcjbAMtwSWLB16EQXLSkdsJTx4jLt6mjYnfrx7H1mYVutTUCQSVUnNcUwm47Lfi4A5VULA1r2ZUagncuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eauHSamioPuYR5ViVqB6KKpqmSfUgJ7JYSzi8fvz8pNwB2aULLLSQomqAQ2dDFXSw852amNYo3DwBTvL6UUB7p9",
  "key1": "5k4gUjRHZcRCZ4MFfoqZ5vD3fNzkBXkMWjkaRxaG926jcDjhRb5hpp1KvTtFeahu25frMhLj3WfE2kDeLZdNEkiS",
  "key2": "vMTNZ9tM1fNmPw36DvpFQyURSp3wW4KZ8HsX1rty1e8uFzCzHqPLwnDqgDvTxqQvrmCBTv96wPHoa2j88jYsxhU",
  "key3": "2kujRXeFbFUbRfcEcXonCemyFQisWT6opN5GLoLUuHqhCxy7UWo6CjRfrJPF7NhQaLvhWPVHLVdm77Sy19zNJ3FY",
  "key4": "rVab17hzPxLFWEBtnUtmeHCBwozGQ8PzydpwnkEch7zujLWR3f6rceqzSvjhkHYGZ7HhyhzpAgwWzxBHvLYJVYC",
  "key5": "2a2U8uNygggdVu9ZDu8nGsP8UL4baK6ct4smQnGKjiKit68Bd8fxWaTsZkd4BK9ju1G8DyuLFragNA1puBCGXDXu",
  "key6": "4KrcNJ7TDKDLLaJacTNN4Y9aT6Xr46DFf1yNAxmSgupg6t9B14QEATt5pmwz8Wa1Gv8HpesjHBXhdfAZCBcLjCN2",
  "key7": "238rNAz29FCUWVCAMrVxupgcMbqCrbjxLFPknsn8b7oJ8HAVqwbbDG6dCfaQyCRZ1gHyPWPjADn7L3dznuwpargs",
  "key8": "4uAyBbBatZBeWekXZSGWXTGm4CjqxrpUJ1bsdcrqTcNupD9dkmAx48LzvaPfrx6xasKBWMeR4T4DxvnAsVbzTvah",
  "key9": "RoKiBa5vRrxJ4YXTzkpaBCXtDAfpadxDpamDye7FLC3odK475ZtKUJ2orHdkFgNB3DEgPnururBD3HRXbaDCvgV",
  "key10": "5maBVc2xv9aiYfF9QWs5D7UWFzD7wDobMWmSmo89weywkwyky32UwkAaiXVGKv8EJv8rFxvcm63mqwzhcTauvQ5T",
  "key11": "4wdiXZ7VSeZ5TDtTpJei62zr4Z3FDUP1gKZTFYZXReFDo7EDcj765YbPMbhSG6dK7DBfAyo1HaUgMh2oJRmz7HJn",
  "key12": "4Yj9uytA7kuj6hpQeaSTR5Fk3DVa8vbKHq6MEhp1RhW1PHBz6hMrNygjXisYhGHaxC33FRwHxXwHuqWQPpjad7c7",
  "key13": "4zDARRHguuuS9wbAgFqUhqwtENqZ9BikukK3YuLRDkBGcsLKpVvffhsL1wj6U3XAJZUcswpuz4mxNMDyiS6TziiM",
  "key14": "3FwgE8pkXNQux8HwdGsgk6UJv6DjnJsk1hwZe5ZRXqvm2aZTPqmUHG3CHSDtXQzYxqVvBEwkUaAVi6xC8559hnJi",
  "key15": "5JjjULbBBk4csXuHu5fQKp1bU2xkM3Hzy9XcphZ3ciuj7v1Qir7gpboqcCiWWp7tsx8ytdr6ibYopMKW3AyF4UNt",
  "key16": "c7THYLuiAd5wEbrjxXwesCmYkMv5mrGCx226ADuEdKuTz6STSk8HpByhAUpJdU3dTuHszWP7iNepL6bo5UDNFyG",
  "key17": "hhDD4Nr38Gk481YnMs82c3BgdUKjzHM24twwArQQBqtUV69BtjccYuGDaWNp4YSET944Rkhfk7hTeyXGox4Prwg",
  "key18": "PBFGijLdZp7cCSyCLLtBpsm4fgKjn2ccwTmMvyy8Bp6tBcfBwVoXiMqh2Nx2FNaDmykCoaFnDMHW8QyhVUEyyGJ",
  "key19": "31X7Y1RnvWHhbavHxCAtDgCRgB5HrRs8kD6NfVKDmH7hsFppEhmBhm3Qbac7Gk7wdp8S3YuNGFeLRFwj1deGpewb",
  "key20": "55Qsh6e9wDpM9tTPVogZSFWWKjiSBBeyJ3gfKcWZDPRWu7pQY4u7Rqscse1dLXbYapU8DT7JbfeE5jEZvu5QrV7d",
  "key21": "2HkuotuePSQZxfV1yUA9Zu79sCPuikRzAcy9QMjck1pfXLM5UjttsJdfi6jRKi4G1imRt56ZwNHjypihGKcAJoRP",
  "key22": "4xZk8T5sQQbi2qb59Mpkxif6eBbt51NETo7Qd8MjhTttuZSEgjxJw8Wz8LmJHtqapZ3ME61HsA9ZgP8dZY1mqHiQ",
  "key23": "65jrjXSz1FS7WfPwmSYusGnPggmPeFoPgmrr6Y9JcefCcX5wmWPgWwHMurwgEA16FGhHzcGKNmzuocD4QMWfy9BD",
  "key24": "2iJWX4V1R978Ju6nbxcvdhH7Jpa7ofk7fhu8bApa4QTJ5a4j3mkdkLbpLeb5bgx32vCwydZR1nhRJ4Upg8xqEYD3",
  "key25": "2LeLSmasoV5HJbqCJy8tTUW8y6G4Xt6aFovfF4uzHDGFCcHXDCVpe27NQiHLBpA3sS6rxBYuxh1C326xRVBFjBX7",
  "key26": "diwPgX7toVkmcjVEGBQd9hR3tsJDmR3zfwgEXaUf1pjQpPSJ2YEEYWcSSkZ5NSgKLXFpEfs5F8FD1ffW7xGLaQi",
  "key27": "34a1to1WMJDJjxnkS5vxZfgVDgfiLVtwyo9AeTW2hMHooVhdbstpwhZwxfDPi1y5ytAMqs2Q75sT5kdYnTS36pwB",
  "key28": "w7pD7aqpBcaTDH5VJy8SdDezrSy3N1FAbbYmuNsAWqCv5FbgKhXAhBRtDavbWoXeUo67XTQFry1eo27PVNG7k7y"
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
