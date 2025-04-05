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
    "XxFGcoYCXuXcZCasn74cU63E7e59q4pud9NCTDewfDxoqn6M6r1JuJyHnRaMVLHdfmqtZnVdyhmSHEwqsune5bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gipnS1BxNqGAWMMXnCMoatvywHHpPKM6jPWS8bNqSzGpnfNYQk7co6z3VPfn6q5owG49KS7YiYfM8BpT1GAmmHY",
  "key1": "2pmk7KvKDYhUYydnFSQSNQTk7rqyX27hSigyWWcLs1RXFRLDRf61xanWGtgpBBNkZ1Hnxksi3pHvpk1rfNeGUA9y",
  "key2": "5bowxEJ5aLK5xSDkPYuMDzdZNx35TePeXdKt1u3w4bseEbuRd9viNMFojqWTiSd7USNoE1cyLbk4EsZbncaokNZv",
  "key3": "2ocsBF4qb68HTjwLrSuWiHkNC8qj5fWZ2P2UBTvLSSu8xRTFq9hEYb7WebrV9RdsyPY6Xr7RVL4MsDF3BB9Bpkxv",
  "key4": "21LMQ8zHmJCeZcRffTnvyK69mTvH1XTDNc8LYW5Kp7QnFXZYddGnxXToPqA7BFq44CGhhFg98h15EgAuB8qjVweX",
  "key5": "5rAkMSqn2ScdmpSeKq3MD8qQxEgfkk6YHJbKQ7RZXmk3Q4qz1DswKeXsratgyzSe1yQiLSTCYeYkRv7EcRX73mkd",
  "key6": "2c4Rutcn8w2JaBPv3e7vpF3U5GkdjbxKGYUWW4WVWj4Dch3c4DfY6mLhioXVEe8Zo2iMf4Lnnpnn6emRNQ8FKghd",
  "key7": "44GeaQFv1ifpuv49DgknWWc4pkNEXLvMtR4puVX3VqdyzTkiBk7ZCneuafvK3Xw1VodGN1YUCKjW5Df647xZsnuZ",
  "key8": "3Bd4N4aktBEREMhEc5ReFZGSgkeZaoaC8yUtqcnuRpbn3XduS4SoEgnnbDYSPppqAEszZxz4oavGLVYdMK2JsR72",
  "key9": "4Gr72dug8ECH7ZJBLY9eJWPZuGquNnLEEZ9WnfafqUNNrVQDFM1D1c3NkKQduwgbRTSfnns5G3YDq7so33BDaoPY",
  "key10": "3Y7TNNfL4e6ESibaJDTmMv3KXJ4RKnWKn3eynqQndUo7YqmkthiAFh4ybd6Yw4CbPHRHixg7Nde7KtbhmXZUA54H",
  "key11": "643Ue9jdsJhCaJuTJwYPu2QfpBANDR2aGyyxx8CfZmM5XLTS6xfa57fVDqz4AGUcgtyGhNo1h9phLQ3aUEu1BC22",
  "key12": "V2QDQkur3aFhYtwahrUEFASWFCmseycXXApaDfvmzmYxCbURPbxtKshC2RdJDBsPnUesBcQs42eQ1g8gEA1es8o",
  "key13": "2EUTSyvAmTYTKNhqCGKQNa2NNSb2SSmgFYc2feNBvW7iR5Mzzwu4RSNpPuYeFQNtu3atfyFGNSoP7fHMKtkUJFVc",
  "key14": "4VyKzueZkdVBWV68aHqHMkwJ29kNyp9oh86H5NnjqYiMesaqa1r4rRYZCAFRVvUpGEFVoL2r4EKMq36WjSN24Qkx",
  "key15": "344uNwi58AJKcsDAn1GHX1LvC6iZgKXy6mrEqafdeBnwkV3uUY3gvSucPUkHZvXfjUQCyjAfrNtahFFroobj73yC",
  "key16": "5WmDc8hjBfiwijKRGvnfop687kNa6vKh3oCaJHXBSqC13edapsc43ZfupfUpDKCCruKoCz6JQMFivLwdcWnZx9TN",
  "key17": "41TGxbp6z17j3mz2vNU9YzViFufGM3XJc82Q8NCb18Chbi5NeQia25qvFHMWcvWXszJJxZ6mvFb4dKgZvT3gxRHC",
  "key18": "4ugzC8YHC8EwdPmszrd7ZwtMT9JMpNJNC4cRioncJqsJXrNQbhkiN9dLJzecYxUY3mjG3zY2FmcVHJ5KKauvdNx4",
  "key19": "2R5QrYoKDy2rKihiH34hHogTo2mSdGVcVLmRzsRBxFJVk74nzYEd9wDHVWUv6XBFGuG7xhUZ86Laf6PjypjhaRwi",
  "key20": "3wWuhs2fnkX6m4h4M2JmkGjcr9j6cV2bu4VpzvjBBJbuF3QU8QEzxDRF1ZjuN9CB2F5c777ZUaubj3CBpf2Vnw7T",
  "key21": "xz5aaydRrbLR5UzPcBHdUPSi1MRKB7TYFBQcFr2AYS5z9xSALHbwWGP2wMqZMQPR7nUCprM6iiXtLjLt1Qz3ySN",
  "key22": "cLFXeD7yQNCaYhCXyYdQfThef6aXrjRceEYriqfWqVLMgSWLEJzZgtrSPkv4uTxVRarGzfrQCLCyMH1pVBbrDGo",
  "key23": "4MMMCyTxLSX3Wx7KiLByuowFTdPkM41AdJrVbyXt3LhgDbTweFNYufTAt5S9fcLbfCGTXvoMRAeGAEYMF4PAtmxL",
  "key24": "smCK8WLm8kM7Dyg4rqdbUa3Ph1whLKyxJcv9yM7fnwxGq69vGNVfoodwh2HBVAWHZriqHN4uA5cjUKJhqHNu8ai",
  "key25": "4SwY33zq4SjHihqZCg31gZorf6rqsqCae9dBKpXWw3Eqxx5cfYXZqfvzKnuviDGjKvCLVqzARbq9oQxbCkycaNvf",
  "key26": "235UovQEQFkqTrqcBnQggjAbPbesDhYC8RCATMRB86PtqvDQzWjWijoFzvLk2kXHauoTm9cW6nydycWKaUYdQvX2",
  "key27": "MciAwpJdLy6L13DdP611SkiQxpXNVNnHTqDdzJNXZhMYPPL2wUHMBGSsdJEKbFBVriZXtjsz63q4JucWCcBJ7rR",
  "key28": "4Exx6qDhWFiSysA6zzv9cqYnj4itwaL7sN8jneAYP2YWA7WA4nJHrhd5h93tB2aSykH2dkUE2HgTRkgAghGxXLu9",
  "key29": "54VPtUxPiqRZp3EHVeewveBAkVwsnwfqtZRw9J8SiabTxcYUFVEuRdEFvKmE6Azg9XSqztfuaQ6DrvNWc2mGrnja",
  "key30": "upNHVa5piTBjP7UJExSzTEuPwxLmb9DaqMauFpzB69BAcwCWRLFjxKp2oLsgWsJ4FmQWxnUej2huuLeiDuR8jbw",
  "key31": "4g2kqkfJU1gvVFY9iVweb1vXJJK7MxhwLEbddtGSKRJtAvpm8YeiCTiEgH6zzLA7WjbWjbjrXMk6bD3tgwkz8ZaF",
  "key32": "34bx8pS8AmKK2PMkFaG1pKxC2ej2bDKsH1hX3wi17ZFGzoj7dXUHhCtn22jyefS13aGzXi3F7A3m4nCtsF6w7VEA",
  "key33": "2hbkFQmdAhY8wtkpXxgTgWmTZG7xnURT8hK1f66bFkbLb9eEWgWpBsG2wmAgPkxrUPc7CMFRfyXLYLXGBqrq4dcd",
  "key34": "fnRMJ5qQFU67X218nvL3i59dd1BwE2Mr8F7uWvQWhRkKuyVHzR6A2UTqjGEZSFSYiWsMxiojQuNQM9aTpF8Ds6T"
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
