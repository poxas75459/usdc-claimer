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
    "iEiRfEGNUukm9gDCKyGr5Lxd94gMP9KiVBxk5AUVswZB6PvUotuCyT13865dbqDMHDNd2xdDc3evinhoKkN8csR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q6wwvhyDojog42YmN2ivchsehgwB8H7rYu7TQfDrv9Lg5tN5o28aE1mYdyFDSMu8FswgZDWrWob1KuhJJwvS9Ny",
  "key1": "7aHzBKmRxHVYruf7DJCiCvQP8cabmi4zSHdPxMiRtMfZpJ6ythuMDyfyPqqzxUfBb8uRg7huSN8NZtZeM8GgAT5",
  "key2": "51i18hCoRkHmUoGSz7Fr6Pxz1bzo4yniiHbR2CBBCz5W2KVkHBSsx8ho1ckxQvKzNZXtA5HGjfLXdvjLZ7CB4Z1f",
  "key3": "3jfVtKqXQNimtgQbmb2b6yqD2ywDhU3NBvaHsXDaRDTBR7V3mvN4zseEvVpBCLrp8v4m7w7oCcLpeU2o2Lj8LyKW",
  "key4": "66Cd1aqmZRMs4ZAT3XBKpyof95VG2Y5N7tGmShuEHsDKNam1sVUgN7yoPfXjXhFJxXrUPA32mRo4piVV16ue2fQN",
  "key5": "2997TjrXspyCzAVK4VBSmByq8CQH6pgkjmhh3tcigdcKku1e6w5RYPuJdrwX3kWyfwftpuJYt17bUbUBYJz26ok1",
  "key6": "27CMusNRkt6R2gvbnYRx6aSgAj4xaY7gerg5F5D7Xa6DRv5VJM9fvZf6SpZhiThFH4aRN1RxC24wCvT6bLb1o1Bw",
  "key7": "3gxnaNg3MqJZg1QfRPxzKrHYCTGyHPUcADAbVBXgHJt4VGTZJcY7cupRnR6YpFxHKjbKJ9HAJEdmr1Z2RFNU57kC",
  "key8": "2wRPFB4Dn1M337Kwih1vx4MMFLf1wyjoA8vcUaJN69WNNSCfcbcrqikp1CSfEMdVSD3CVdo9Se1EDyjrDSuTjRhh",
  "key9": "3q5Ceq3rRkdWWciXoYDjyFvKC2xhxfwYwaNJmTxSke5GFfv4bkav7sk9Yfzj22pCB3r6gm1rNurFhEUdcDytrbs8",
  "key10": "X8C1f6EE8ByN6zGWxVy1EtK9XHQKLMfEY8Dkb6hNrFKxzqDN5gymk9LLZyyqNsCwvfn89Vynjqakctwtiafpm5c",
  "key11": "A5qNTaZZyX4mxTNtQYzJMAJTEkskv6MJz8MVTupi9sKwRqNnM2RejAR71Hm85wYb3ztE38v8nMhv6sZnL4BLSvH",
  "key12": "5uZo8wUo1N7QnsMkxvTYrBm46y4MLyrGeUByqKYCJ6RaBXuHV3o6AW7TCjQ7EHpW4vUK6u5ZvxNw6ewDf4GgJbJK",
  "key13": "2nZkBoGtZHqit91Ffpat4wX97q5xGwwYpQHguCpkTrGTUW66FwL14dVK3oDuz4FvQenTjYYHLWuWfAgZ7mbmjeSf",
  "key14": "2gyGbAvnZd5jJJMhrUySfNPVaNMrU96ijy1ej7oXjMPHWJ4QwL8vbFFeNzWJDgshLztAkw1R27L2Bv1EGpwUCdXy",
  "key15": "9FxnjptPxpL4RXMX8hTBLYQsPvgjQ99v9XRKyY1SheaQ8hrBP8TtR4F3ZEn7pa47yrtqz3J2EouG3NNNBfqdySv",
  "key16": "mrkb3HQ5VgVATHtf5Hr9SRpALwg2kiCkhvEsy7iG2tLvL9wsJbCo4HDNR4JNDoQAZmcGvswWSDUUiZrp87EacfS",
  "key17": "4Vc4cPLX5iEwRfoszppULDPRdHQnTqsqtb7c2yziUSZjput3pFFoiLUFG88k6Npgns2NPwoxZ19vmjTCEURCSrq1",
  "key18": "5mwr6GUu5ZV5sB5U1xQWo7hQwo6jt2AJWHArPK6Yh1iW3meNq9ofch3fhQenP4pkc3aA3Q3CwEVBjuzAf3FRn3Ex",
  "key19": "4LWFqwhKv88EC726D62zMGAcc5QCqj9TMFPELrjkFxqzdjEeKhi3UMvU6DvVhDh7ukYVhf5xpKucPSKqtASTViHz",
  "key20": "5rDbDYoUGEAJTSiZB9iQsN2LN4eUKqa5gSyCKvmcjKi7Yx36wVmf61gibyXz2PApiWYK2b3nqMoJW6oB5prG96N4",
  "key21": "FjoJpSCA2GQ4N9MFWA79MGzK2pBoUnTy65wN99Ym1waicMzXwDcDuv4j9NenUaB7EFfSezbCPHKXfPrNWVtFe2h",
  "key22": "3kp8vkM6NhJGtNeX4RsaE1iZfx6JHtw8hjLDzsR478sMiS9TpGRMhyCsWdmaBjpTFwKqU1ZZdFfTPnsJfWfvADzE",
  "key23": "3d3hPrptAzihce46BzNuGqMgo6igJQDr7GPg2iPDS3PGRzsMCQWx8oZQYxVzFPdxKBkDAkbGSmuVbzkxF2CnjNV2",
  "key24": "4SKK4h7pzksYKqs8qn96WC94nAozv5ypgWj472onAk2rZRD9iYPcHoFRNjKUwFCRCUaTJz1Ng81yctPEXs2KXQUg",
  "key25": "5X8oFeTFYrFNrqDgjEFG4Q8YXRhd3DWeBwdXZpNuuX22dRWHUWGwKCNH9sMW3DhpsSDQRKr66wwkTrf2tricj3MF",
  "key26": "3AAK5a8za5jmpAztoSGpwyiKmwF4xtLwFrqdLMseFTwVgLy7iGUcJrJ9TfkmC8yUgs14U8vYFXWDau2QYbenHCyn",
  "key27": "5eTe9PtUQDv3SYQ41WnNNPARhGRprG1ArCfj21qbqiqj5HDMuWXRUKHfvDbTzjNTT6mMDRpUTw4gVnGWTFU158B6",
  "key28": "nSwWjN1tYLY9NBgaaotZDC8iqC3FrWnDgGx4vrn1NjwC8694D4HZP14nASzu4RH5BFjFcC1qQKJs3tubtgudd5m",
  "key29": "61pFqi6YTgjeeeEeE8xDzhebCZEshxfhDMCZAy8pyJTypQgRQB73EfLdJqRKnaXssKMFfEMsMBvSCRfhXRdvgfWU",
  "key30": "3BRv5ivNfLp4WZymhKY2X4ZYY5XphNL9vUj2grvrJbrJ1DjgvHvRjDGBic25Dybg5GBzRuAy7reBckJZjYMpyQDT",
  "key31": "2FLfthfNdkDpt1RiSf2qJYFV5is13a16oa34tiLj3UboLRuP3YvcUutDHZuSmuNVpxVsn7T9CpxYLeqS9b1LbH1m",
  "key32": "2CW7fRuLonnHKHerivsjcDfdXrpqDwYKZWobmA7kuMtuGbWukMJRF3L5BzEB1d159GDuxYP2dd2D1HGcQHJUpVqt",
  "key33": "3hiXvm1hAd3tMR4EtwmB6sqBjGRLan35K8sKhP4RwCU3ENXydcx7io35hLaHN31JQKn4g4AffG8dNMzj59LZHY3o"
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
