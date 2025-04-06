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
    "2B99amqPupGP2hPvrhZzNtpCZr5zmTJ5z3hiMx6AGPd3nEBvCdFYNNwb7vKawcXXUVaHPpDSVZyv4MVWEZyhKuRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxSSQ5joqxnoKiYnZKQnuXXq8nTk8mMANqH8TMd24rMctmmiQX8ySUUhAp2kdDjaAreyxVQiKkBhk3K8DQX2iyK",
  "key1": "KjwFgyDzbJQDAvxugSszA9ZHvAypEBP4Byh7Ke2iehhzAka7b31cRarBWA5eprQ4jN2QHLNDNoykPwiTCxU2WDZ",
  "key2": "5FQZ7YeYmEtMXjeuCZJXUMWav9Jok1jitYf382TJg14WbwH6EjVb2GoJwjmD8D2Y8nfhWZgJ4d5rUm4FWjnda4Q3",
  "key3": "2DxGkSd7N3oeoB1bdw6eeZju2carbxBPooR7XEjfHDdLUYtKqc5ZaHvna7QKenkvwpNx8LmFfiVHXuuXsv57JEqi",
  "key4": "4TZJQjWgMk2pwHrR2KaAyN2eNvZCVjwJCoSkYqz9UQd236dA1LFfrQcfiFxtaaiFBp1y5FdRswnxkAAeoikoy3an",
  "key5": "3kVc1Uot5wt4chxpGoofhTq66xzDRDtu6k96cjpHWvCEwxkpuSTjL1zBNYSgX5LVe4Abix63F9WY4MyHnnr9DeJk",
  "key6": "2yPFBtgVYg8qionyjynZd5m8AFanWCKtQY797xahpQYTcKzzvbiAcUu7h7YQaRRUNfhnqz64yzrYZgapDa3hqvEW",
  "key7": "2ckUZdagdGPJjSTTLDdGoYkJU98ybBEq7UQ6XiCgbqGkge2HVyyoCvTCxUnAecLgGt98EpQ5Kt433qHmbgCLHyfG",
  "key8": "JsCFAovUBxXygKp7Kt83m2KSnYWbSjyx3dTx1j8H74VeNCBGKdGGyNhRq7LGB2KGsRAqntiixueJ6nEC6HEkTWg",
  "key9": "4fcfcMSGhMxG3UH1nAVsRdGLb6ivkidoijH1izHoxkrYCGFZz8gy74NccPwEC1C2EMrLTzm1tRZkanmMkJbfD6Zb",
  "key10": "3wkmzcm7EMmVS1LmjCjDhruTtKw7gGNcLkVBzCGw5BaPzZXH8HcYNnQXn5F5Rwfn4U4iFU7bxcnvA9998KJKrf9f",
  "key11": "3Nq3J2kfpV9YGVqWKFG62ZthGKkt9ASboUKBkNuntP5wtaruHi1J293TBWnwqp3nkvFpWGHkoMeWyGmShLbEV4VC",
  "key12": "23EjsTeGDoceKrxSqtx8dehGPqkU6cZWWPmzKw1wv4fqoQaBSGUsHvKJjoxCS6cEU6w8SrQbHAWEsZLLS1indtxm",
  "key13": "2ij5QRB35tpB682fe5duXLVydiEMaiu4pcfFpMfWvRspag8p7qiF1NFxawz5qnx9o8XVrSkVifszNsZChZTA8ubu",
  "key14": "2avQJCh7rAmozq7XXJKBxz34jzHqs4AyKh4jkLgFCeSTTCnMpQwHAW2D8S2PiAqeqrN8SjEGqNUQMnVmeqzDbc5x",
  "key15": "5hVb7V4ZyGb3EA7uFjttAXYvST1oEyr4GKbt7wk5XQkMvTtcCiMFAWKWrnydPbG9PDbjhpKFyhhWUbqJBZEFsUks",
  "key16": "3sE1u4xW2tZFK499GydMbmoaZJjGQAWWAA1QxRWEAhQpvZbXHJVwNJoXs3N6K9FdAQFunBvoK4yhUSMa4npET2cS",
  "key17": "36M8Ce312gLwrMSiBDUtLqUVjbXZSnXcM6zuQWzkw81rFUsnHDaoJ7sqHNizMS5qVmGveKhhUT8jECTkeaj3YN5r",
  "key18": "3fvzQLUr83v81mdQaNXrVuKSpio5Jmsz7w2Uzea52GM9ba6twwBbL4Ethj3o5Xr5EBt23wQnYghKBH6SHL7JUVpd",
  "key19": "FqNamk7ukecAT4Pch19oHsCCcBWW7a1QkhTgmWjFxk3pceVouxKGoCccC2MSCoARc5hFCCEJyGCXUTVFPwGFyy3",
  "key20": "3jrr3T6VH2SHfiqVHTzszsPV7udMZDcKkWZRUpSHetcGboci8PaFtSmUL5HSeUZEaCUikkCqdprB24H7ayWS9VRh",
  "key21": "2CmmpNcah5w4GJN2XZEcqxf339wXhSm1ppR1mMQVrmvvmAK43dwCGoNL4M8htePJZXekLEVhcPUAR4ACLSPsePnC",
  "key22": "2Ww9FkPWaeUn5Uoxm617hTN9yht3LcNWVroFsUsrT5EFMYP5Vvygjj6mZY9q8fDiEJ3nHP17YKvMRCcxYBybUxTW",
  "key23": "nrMj4qRcqsEvRTW955oQbkXG7NsPxwSCAutS3y4rPd2kZUCR73rraJ6UAkpyJJFfuCevdosPiHygJb7shtE8dyZ",
  "key24": "4GK6RnP7adai7iTnnxY5Tii8kxqeV7MwN8S2VLiNLsb24ZfWowdBUVdxwJZd1XMYbXJUUE75FgYkEEACfzqBwXne",
  "key25": "5dwfdxvm9smXqnPGjGxrtPAxGgM69UHMLBfMRhA23444bshMhs6tXFhLGiHNTsJqCWeddBF7LQmr4dM5K6YJ45FL",
  "key26": "3XFC8SF1CtKj8PidQnidsyZRdPcJLrNmY2zWYTAFQLgrdUkJth3jaPcuGWBV3fYgLzY4TNFCenpej5MS6khXdHYs",
  "key27": "2jV1nzHGWiz3ADjnS6QwwmJfhwYZN2mt2m2JpaXpLPspXDgDfeexTWteFdh4hWem633HHrmBpAjwVmq5TK2VqGTn",
  "key28": "2BbtcyqpoqBPRb4FWeFtDzYdKhgS2wic282yi5WdAMdQnsP81PTDzdRjSW6sDpW56S4XwAVfGdAQucAHj4LinetJ",
  "key29": "3EH4zXuRA4XAq7SzZ7opr2PF9fTtR9bDUcaVXbPXqXpB2AmKGFdB1cPgJSviY6L5eJyM8PNKinFP14zsQ9CFguSs",
  "key30": "2dGuDwaENyTJ9vHX1tXLqkDpg7xTkMGxWpYjZencH1SuaDipU3Tuo4mJFCRaZeMS7opJYSsu59ENVGgN8WrZdiQU",
  "key31": "5U8LZmFhFw4844hK6gciG9RK9gDt4saW1EU4TFPqekGyi9fxGHkNapAjLRytwGqek6EppzX3QASBhCXiu9rCNhDj",
  "key32": "2tAH1fUamvAvgCsJM5nUGWqjFyVLo9w4uiHZz2NXwp3NiBppHpHS7znRoGTeMuSNY1aQ8FJiShh5WEt229pf1CmS",
  "key33": "39HR13kAM2hoVbrJhpM9uWSkCBN9figWXWaf1C43fzHhAJtpLhA3jDUsQ8zVmpM7hEY1eNmjqYpiF7cLNcwkXiLQ",
  "key34": "46rxF9wUyP4kzNHJgGQgcfLomVs3CzVmddmRrXGVW2fFfqpFwnEcLzRFHSMEnBsVuyoNqq9yj5Ec3CS4yE7wJabi",
  "key35": "28abxBKy9TY2sKE945GkYsDQLBc7s27cJ4usHLtRbqE1G9EWirWS6fZdNy3yDPQfb87tXh7KTtyME63XUnknAgye",
  "key36": "4NBwFcHrGaGpGXZupayxbiG1QZiFHnvHhC4qznVQmStD5AKs5w96eYAB1bBiyhk5Pj36JrCEqJjTL63EcKxrmmW2",
  "key37": "59wrxwWAxU4qKj55yYmM9GcvqEBq4fUFqvxoVHzGhKYzyUWHecP1TriMvM54MEBpoxZ8FQoxUeb6UHu3Tp3Ay28E",
  "key38": "4hJkJgbVJhmqaJXMmbNPAMLh7DjeCwp7UsAV6q9U4TrRYLAMv7eWJoGyz8tBEn18h4BrFjLiASiFZBTJxHJKiWVY",
  "key39": "5LGWPem5e2crDnKXd4tp3ABPBkMTKm9UsMnhKCotK1NKaNh32g21LYJP4f9SNtvpr7MM2skyjYtsEM8jR6YJMLqk",
  "key40": "5kBMmJNA77HvSVYaYFuHs8yLXF7XkvoLrTfdxq3NdvZjct7qxUeZ8NJZ9kpb6YbBt1TbH6Np1ieXs561i54BiJsx",
  "key41": "2K1D1hJW9GFS81BSxSJ5dvMCMYx5rcbze8HNFQX78vDaTyRVRdBHYd28m7wRUp5GyRZsorZMX1fesTK17GE9ogU",
  "key42": "WZjmxGaBCbApPZDY6kZ3nrdDaYYzfhr8Qu7CQ9Anr8XpQF5J79MQmdRJALDsi7g8Mi9vE65XHT4UvSbxeDqvP83",
  "key43": "vPdw8gSsxxrXyNsQPDgnCQ9zi1pZx3U9noS2cEqV92gKEzDbQze5AhnQaXYyyyXornXCHRGe4SBBi5S3KtCdfXo",
  "key44": "skKzpCbP7dA9gci74mPCxpa4CK5ZTKwznR2YNGqH3EW6GA4cm5Q56k6qDozof3954JuX34Vf8s2UJE78wu4diQV"
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
