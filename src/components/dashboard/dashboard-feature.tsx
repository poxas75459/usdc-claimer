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
    "45A3KAT8XwV8m6qE4yi8u45h8GqyPNNU4SrHBTiBwR3NAGK9t6NgMkxwwB34Wovx86bfXsqgS6JFidqPnF3iide3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NHDW5TJrSF7ju2osoAVkySxE2XJ9asigkdPVjFEnVeo5kjURsmTRZDYKzc7DcLxEEpsr8UvuX3Rt41Q7pJAdsTU",
  "key1": "2aueH7gj9g3o63VJFFeUijnGdpXGqefwVfoDzJCapZGEdTUfrdqUTWiLYzRUfKbDyfjDpFTNaE8hxCJqixd9XPEV",
  "key2": "5LLD8GiA5Gk4T4nsUi4UUyn2prhqskhqPuijpgs3UT65Xk88fuxxXdLnxLp2J77LJkjq95aK7xvQR8wxB6jxFfEb",
  "key3": "4qMNVKT22d7ruu84Acv9S6yu9ZeBXAfWvwjZr6USoaRdvSsBYLrLrSdqGvduEW7EvzNdEvfJgES2M1YSxTsg3b7f",
  "key4": "VVxQYEch3fXZQy1h7q5NXVAdNxYeRiq76R3ngsFwGZAZc4b9dZPgWVQj5kimFhjEyy2bh3fUSPySgyckbgZehPn",
  "key5": "4nhcpo5mPGen9R9F45SNYAHx7z1xz5jswa9gUJc5gQQJCbutzwnaK8N3svixGHL3gC7CjqSCTBbzXWpW4fhjoqVf",
  "key6": "4Y1izXfSY91S2vy4NeGo8s6vi13o6wLQpNZUYg6a4r8EBVAyC2JcjMkat5dZWoTSHanb9bNtr8CMj2sEn6hDSHpe",
  "key7": "3rxwatcmD9kY77bqAhBpBCCeoK7ZG1aDYfi5BjyrUxRUy3yAhha6QQnkEc8yNupajCX24WBhkCgvyXTJTbWNdsiT",
  "key8": "2VVF7ra7Ynq2h6yd1iQ9YeGUV6MknQWkMkEZj42FUT5hM8JMBvV7YJipzGdviKYn23x7FYewKLw4idcEppjgMv59",
  "key9": "34NFwMukWH21wwT8MSP9Z9CApPCsrfdWyH8SpfdKbEeExinq1SsPjtJQkdShzeNMYpeMwGygc3twH986P4ARffVy",
  "key10": "3i87wBQJYzjky2nHbSiN9DkWAAXSvPBx3mxFjqHBjQuo3nE5ymdrRRKdk3VUkVe6Yc6X4eu9R36y3QwtGThXR36C",
  "key11": "4h13uNQAkbrLx73cznRRe8cyKbPMfaV2EHdgrTwjHRG35uyWw6PqFGYwcAWTa3ySGDt6kP1jbNeWwVsZngaNxc1h",
  "key12": "5xkYmEKm9oAFk5JFBnM3PRjrKvJTDrjDNwSVvK3H9V2eAegFtkXU17QaC4J6EgQKfLAFK2MGULG5hGGEkK1SLaCp",
  "key13": "5Dyyx3awHEmBcxKpuJVMZm56LUSUzAZJWhEDri6ZbkS3MGYkU2hJKb3vHvAV3KGbWXBGUM29S8WMhS3jvbtiTndS",
  "key14": "nSFUH9pHKQBWSLjP8LVC63m2DFHf85rqLhwv2kTyh2drVsEmQZdw2r8gmeTboxvk3TuL18sibRPEsh33MpQcAp8",
  "key15": "4ibuLHWc4UX38Q9d9hMVafXs9uyAhnQVgpo9JssbcgqR3qnLvRrQqwdfkZ7EXWHgkkkX5PH6DwRV5xx6xKGuyGyR",
  "key16": "2YbTGp8Rhq5vm2b2J7Aa1s8zw2x11pKtwWawrma1Rv2ajdy7Vqywhpecd5FtZCRwRn1fAgkN3JEFZyoZBQFsVybY",
  "key17": "4fFYoBwM2dnDwVHhw8wuNYocB68TkjFhyiRyBsMLbfrxdWagm7vCzPfvPxi91WE4UGsh9wGHnRU549TZZhdjpLTQ",
  "key18": "61cEmrMTrHaRqLWrhctQ8ewHSJUVMEXxPQt2CVg1shucjBTSeNrAaBLzzKz8FBCjveLuMYScQeQWn8pigyx6gDmZ",
  "key19": "n6FSkL22CUSuiYCjvZREXa8K3Tzkt8TzeTGcyC9GNqxT7hGZGHSGmWq3Cj32srASdUpDxbTg8vbao4aijsvmLNy",
  "key20": "3xtzHGsYgKhfxFDjx1s14MGxHbwF3qTPdPY2kUnt8wpyabb9wHDRdoCgYtuxZiZ69Qj2YNPqHDw6mTxkjrw2xRx7",
  "key21": "4qP55Di8RyKtu1bKkM8RmFf4K3a8kLavEH5pkMcMwq1ZVSdFGjY6VBRbB2ZHMDDPnRChaqcZ9N7mNgeQqkurxJVf",
  "key22": "j7Ycv1gjziMVj99B27RJ9PDQdJF3KLuNb1ZQNvxhtx7VTphimznxSCykkgnjRAPYDUXbp2oDmGZP3AFqfppBecf",
  "key23": "4dbtnQToGjxAwZSgP6KFsfFfs9ZfUaa7oWcohc6GM9w176ksSDQ3oHTpLsNLwmzzxkEsD4EjJkcfKbFyRsrVUEyd",
  "key24": "4Z6hfq8Sj6dG7tLatDywAdhkZKYj9ne9jiQ9YRFsbm1WeBpkfCm74jdyCzJzLMAhXPYPXz5uB2p831VDZvHr6wTF",
  "key25": "5xtksHMLZ7TgWuh5sRdHv8CBcbEsp8apz5iQ74wSJqSCUWmfmpt244gKT56ikgLr845ZRfsETjM46kNiuDwrYdg3",
  "key26": "veZUuYCgAA6KDu6GdwL4K79sn1jXLFNxcQsoehiRhV6DtxqYyJynvQ7b4DcviP94G4f8fBZQABNL2Fpsxg5sH15",
  "key27": "4mqFe6waSFEhbiApyzpVV3ikM6z5v1asmPsvvJYoVYU9p5g6sSyUamo4BnKAkAvkmp4sDFJpK9kEV6GK2AZX2Dyb",
  "key28": "5n36Q9emCQx5Ddv87WiwJcXpV9AAuSPADiTgGt216bGh63FHKSwAG6jy4rZ88n8Hb9quwPtFACiFbABcV9pRHSwG",
  "key29": "2q7aHhBvPHnpPJL1zp9zS54gqNhoXSer5AYLAMQebxSsS26uueKrzFCRCRUvzTveAHZmAbN6u4hMnVwXaNRAqPJZ",
  "key30": "4ZZXTxpd85rbrpRMjjpXegetHcmcTr7VSb9sBzXLKjFdxYZA13i2sxrTN5Vj8UFJCuGCkEyvWtFXC815FidGfWXL",
  "key31": "s2afQdhbxsEaquVmjYVgPEqNXBD4cTRQgJsuii8ciDGTNCBNZWLNRyMEyTfC7CENLVco9Y8iPqcMfqnhZ345VnL",
  "key32": "41UoDdXxFd5kmKUHNUztYhDDsVhQxed89XMQaPei9UDPktZGicYzz5YaknhhHwHSG3ZVgyuBbu4Wt7vWXNqJNr7t",
  "key33": "ScrDHM7KZc8iWjwXGVqi7hHBaqBNz2dw4TMaFuaXXWYNYPkKc1VibWxXSrCg6EFhnNZYHiQEt95eUCsK2cDqws5",
  "key34": "2SqhvCegRZ3uoSmeGg7C93krbqnB9uWgzPV6WLignfPU74xfMVswW6TqptafvuYchgAdpXK4dBEBwgRNA6WUD19C",
  "key35": "2auL2yVpwbeEU5yFnJp8YYCURyuJgApUZTQHXGHUe74EFbwYdKyz2zho65HxLf3XesY98GS8bb42jyKDDLAXa7b6",
  "key36": "41HciPTmrTewJeAd8oAW2GLVorr2LEf19sZBKszBhqYA7W6ZpLMjdAdGFpUoFdD6sP4FAf5DDRVh53g6YH2Ka1rS",
  "key37": "1FKvLfLSAsLZmCQrFfZqWYUcitAWTqeByEpWLUZGiBi1SnpEjLiubVjXgZWs37SoMT9x63gm9PUxaKR8DNHWHKX",
  "key38": "4znYYrFQzqjhtjFZH3fpyDvd6dB6ZdH8mhhdPjWQDngZXvaoGHLXTyFP4CdFm295GPxoi96Wtud8gX8TCezL5xhB"
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
