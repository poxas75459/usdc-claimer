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
    "2CMNEz5hF1C6fvNSvfpVWAV7Kqr1uzcRLPjbcCanFB9Pya2REuuGe6N6q2xPFciSXTSzsJxdJ8J3sM1wGrodERaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgaBUN7uKQ84nJhx8G24ngMFu7k5fG6xAGsge6yGuH44X4xSNXaUxrcpwJnx4WpmNarE6JAAMovi6zk3kCnHPZS",
  "key1": "GL1eUAWNEzsppLDgYT4yGdhZbj9HV277DsvoXChT416FUdV82XEoNSvTPwiEw998BrFRmHTiaeRSEjybmKAXEiR",
  "key2": "5Suw997MaZovZdj1FmQjrr3zvFXcAjUR5ZDT188tencePKioriioh969HhEfPFHQJX4kX845YTAeLP545iqi723u",
  "key3": "2E3uYNwpe8MpoBdsnvBDXnCk3hU4HBFhfHAQ5ggLw9SA79S1TWowTUQWwuamSJuQNhN9caNnVFVEtCpEeDUndvTj",
  "key4": "rTm6YCdVzD3usEYPNHACohfGfwpUqRqhADwsRaDaKPeqRSHT19Mu43YTkMdDr3C7mcuqVPxET9LJkVhUFkbcUjU",
  "key5": "4akCb3b2rhVbuUDLuj2mWFz1jDiRohXYWHTnE6zeCUFK1j4YTUFRSZTQ1nxYb4NYJRQtepRZTHKDucnvSLbmbCC5",
  "key6": "FCUYz62zVRCJoG7AG1bong8Mk2eJndXUUDxR3dk2U2F8BPU69jRj2y9N51PB6k7cfFCudLteSMNsdBP3TmqetsU",
  "key7": "3KKNQvb7KmwVCHpVLZCRyMgRkURtEBZLRPrsbDsuHkzuc9JZG4DtfUp6LWqMPZRXoVyvVjzwAMdTGn5mJSDWY6Tf",
  "key8": "5oybJ7KMw5R4Bua2gK5K1EfBSrSY5dc2knJZJVMoFbs84modpg3M5sbCEVYe3TP6m4v78UAWpXRuvVcbvQT7tkMm",
  "key9": "5gmjPBPC1CJcyaHfethuW7m8opyH3FGtRnw2jppQ1eqiobgHDksBLeBck6V3V31htty9CufCixH4P95uuibuysbh",
  "key10": "kUZpWn6ZYvd6HWNhewC84V2rbkEgqC6jNyEm28JMv7U5niysgy47PFA65kHdvG1TdVte3PvCW7SKoR3jwBEcTFr",
  "key11": "5W7VWTYfQBh8TENwL5Jxsxje6WvR27RxciAMDWwJVRYhy8VmG4agP2tm8xS4WjHdmevySPXkwgNYLP2uJkrxXtuE",
  "key12": "33LhBhXjteGmacd4HwykxpMGX7qTyrLrSN8yz8HPWEW8Juf7bgynfypUi2Wd6m4csa1Je8agu438tgKqnx1JR68Z",
  "key13": "FL4thEPAKv1bbtJHEyWCA18owo6PFxDGzn3GuGu2B7LKCW5Qs36eg4wqWpmiYYQLqz7BEuW6r4vrzJPDPc847Mv",
  "key14": "3G1dDaazQC1E1pJ2Qa5wqTcikP4xoiUrCewqHv1SzakQ7UG4cfUVgbXXYrLWd1Yun4DKFrYyHBdWo4FwKybURYj2",
  "key15": "5sf4g35vSXfQ964QQ3YCXvW9SRv78iCjvjgW8ZjwukaJkArZkSumjk2vwQK6k26qotcJ2Je67AzxvNkezx5KbGDt",
  "key16": "5ieewxFTLNSH5Ps8YyNiy3nk4gfzzPCCycqtxmdTNtFJQMxPavhu9v41xmtqK7ydN5y1GqS6Uh5w9gCA6KGskEYe",
  "key17": "4hdhuB1MHEEh7DWZ8gQz8bJibDfrX6AML6GT4SQBiGb4LV4QDqmmSBWvBqgpddwjqxNX1BvATneYBMRgcSTqJjj3",
  "key18": "o3EzpochyjcanPQVnLd3DataL5JaiVqLabw18G57NzPek57ukKWYnzLMc8UkQgmuU8QizDwDqYEEbgeSb23nHK4",
  "key19": "4ALxw2Bq8ZD6DAwRRQvkLckixmtsWBvAHTtY7UwMh8Cbc7z5ArjXY3oie3WuRq7Ph3w2kBU7DvfGEgiSYF7f5Ryu",
  "key20": "5egfrZs6NVBCAn1TgSKCr9MZQJK4jagpHbnGCMhugs8MKHqg2WUuJCTBmLarzZsxeZV6eJy3rEjcg3ByBTqdFwzL",
  "key21": "3rZJLECdvpLti8Stbi8LrhkrRxiFrAmfa7xG972KKihNhCCptipPsjBKwSZuBag4jG1UL8HCqX77FQNSk4DBFrVe",
  "key22": "3cph9ydWurQZoWeTtsR7uUuVV5C6BJJACDyadmNSzHBfXanAPfu4zfNdNP78cE6K4F7uvPxwVy3DPypRvMLtnW4M",
  "key23": "v8ZjKWL31QAG8YS6ZgvBVmTRtgwuE4FcLjLxqBjqBgXv1XnJn2DGCDxMCBFohS2ExDTbWDZuEspXk9V9tvJCZQV",
  "key24": "2Z6joWefyHUuAAJn1G6cwp7rHFujkaUa9gqi4K4xqz7AEUgRqrUs139Gh5KK94rzkBxJs5WBDbZiCZyMZsqAurRk",
  "key25": "LVmUZdboYvkjUG9qb5MBemq8H7EFaxrPDdSbi96xKjCdZD15vezXZUYyKo5BsS6QGQZing4ky9QRNNMNf3DSfJ8",
  "key26": "2bL4kgRDqgwxGyrDQkTjFHK7K9kStW5NYAHfdZuQJv4kSgRAFrT9A8ycKV9Vqn11QVG151gg7zZEiUHYp634mhVW",
  "key27": "5GD7KRG617cSxL4wJ5rh5MwHFwCQquCg7XVL8SYz7LGauJFyZ5UqqvFXxF7KD9F6421MnMR7JGKx2ejgAQwQTm9y",
  "key28": "RQq9LoH96Euyq76nzKnitCVYTvTRinZxkxZiwCHM8uK8zoJVxydXY1nbcGFyeaXf2nZc4dhStxLcF25KzhYANNj",
  "key29": "4mTGLcpWcgeTHvEGmoMkTeV3LuUjwDSFRLbttktrJvfALPBzQWLRdbRNrVEyYQKYNYFh73Hj2zi2G3RD9BGMUwuG",
  "key30": "4MqWiat6hz7Vu2X5yfBjXM5hPLHVDMmiKJHgzNQkDBy5Ne3fxAhRuo8QktMmidztkBh9yDRpxr75YwszkWjESCha",
  "key31": "5Bnaq1RDMsqHZuMQN6vfhPiD1h9M3ihBfu5Pi6vzJN8kKZhChQJGszVuJgcUSKGENJTpBXx8s4aQCmTb8rW9c6ep",
  "key32": "5RjihRk42VVMg56xsFJAq4BqVKWeBMSoftx2mB55C39nypLW1gYu88tedrffb65TiyyjGJnAJyHFoMNyk6et1BUW",
  "key33": "oNZhEbx9zSpxSieJ6wk7HMgspK9tFqbNSm1aP7h8PFKRQLMyMbNhjooUjerBRiYTwWqSJMLczAG1J4MLe8Mn8yu",
  "key34": "e6E8gx6kv6yvBQcos7V1ynHwtq7hbiAgo132ydK7SB7boLDa25fcv7X2tnd3oNbDKM8wvnDLigsZp1et6azVBFz",
  "key35": "4Zj8Rh8FaUfgCoFYfhg1suQARxyVrKBZAKYFtNHbK9puTTCrAwic2BEtsKKoTTFA7hH5xs1D3SXU1vcNQGjzJ7zU",
  "key36": "3UgxuBEBmpS3EeiqAPHPEHvQusXmjHxwezX87gxZthMxGA2dHT8HN9d3gqP7PJLN6DU3229TxFgrUk5rriVPW2oV",
  "key37": "9aidnxr4cNjpUrd5ACjLMwNX4aG36TTYuErp3Zk3NH5RTXiJsVPJXH6oBJ9qp9nvP3URPWWxU6VuhdJLPWEqsYC"
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
