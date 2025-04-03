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
    "4HXhqkqyaCBDSWLaqTXJA51as7bcYXJBPpWGsGYNvUPa2kqdbeCF1pAeReJXWYT4AzFgj6p39xACcftdzCGRDDKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65jez7u8zN6km4D9iULyq4oGfoBN8HGEKLMGmSkp3XJ11McjGhYzWLa9xExcFKq5rHThFc5JMZ8bPUJ1rFdJN41b",
  "key1": "5ug9JnrmyRWboDsrY15qLSaVrvLjGGbj48mRagFGz14LgvvmCXor8AyMctfs1rtQx9GkTG7MqGi3e2mDGgEcVMiK",
  "key2": "5UY663TMDcnuhBv9tgLB3c3ff4Bh8umU9nAGDY34if6ntykMxSsgcPzgmRdFQ7WxD8ySJnhzjJvqt7ct7zqGrjNn",
  "key3": "4UfXKH1kMkTedcU4zxdJJSpxXEvU8YKa1R7PkJT9gd1ARVC8VwZQyZhpztrA8Q8aKZu6doK81M3QUevSa9qK6skX",
  "key4": "3Vv19qbUUJ2JNKicK2duTDpCS3nhMRqTW3jMzhTCuhDkMF1QXzDpxRMDMcErwUzyTwZy8ZrLMRBVf8fu2CAPyQRA",
  "key5": "2TevgZFJHW7LmqZ9gusKpRsoX7xnaswt4BT7dGDVc8iUg7HzuT1qRWwURZeSpjyvGXR6RZSBNQuGdY2JEnRgesHe",
  "key6": "4vRFnTYCahXsj8L6uBFNxLY2Azgk7xELdeziNoqCDYjTtpcxTzCrbo9QLU7TsjkzDnNRifq4SCL75dUWfXEaffjm",
  "key7": "iQRFWmWdoU59pxRY28bF5fQazeHB1R2qcX1kmhtSjYczT7yNwyJLrTvXB8pRH9qGj9Mmi4wYcAUeGZqKKVW6yeR",
  "key8": "3BGuqUQ3ChB316tVNybJp8jMqkUJRe7nMPX3z8rWEtQDnzkqjMUJkegqgNDnaVRdHYk2cjan44t2rai2VsjXKEuS",
  "key9": "4opqvhS6rEnrX4gMaFBHhfL4kDKqmzQr2u4y8vaHguby7jvcPixNNMLFovMgL1YRMxSQ2nvSs5sepYtzs58LEa2T",
  "key10": "59tpo88UVT6irYMuvddH7haYHy2FnV2EJye1QwtUAVW7E5jWe8QXcD95av7ik1ksH9YpFMQacbioemeHUYRVJ5cb",
  "key11": "4oQsVz3967gZDw1xi2quHiJEEyGvzJseJveLygRhVNpZVZSBScvGU4CzKoW5ruNjG3itfrqQnBK49qDhNTMjAzFY",
  "key12": "2j1ety4ZehsQsVGLePG9XNzBRxoKJ62ChKKhi9rsutxQMkauJSUPnxCmZNus6pGVnjpbnYR912hXtyFxiMigoDZ7",
  "key13": "3YmEEbC8jy9tkxWFAukzAVwfkAys9bTyzUeCZCpWysQbty1F5XbbjWCArgxTFEw2HqU8coqeF6q4fk7GbmTN2Kvb",
  "key14": "3i3A9yCGFu2fC4Fuvfs52eFu4xrWeRgZH3zHRTXpqweujgKoAKwCoL7gadn5WNnVdpZj6fkkkukbxKnd7EvCj9Fi",
  "key15": "2kcWzWP6GrzQ6iVghFJL8vprcoUFVpiPGdDryojvxFVktB35cWJd7ok7R4PJrw2XHBdxbdkNso8R3Br7ZegCnt6Z",
  "key16": "2ubieZHoFwRJAqem9ZjrLCmo7TcHcyDiQBKVQzH1nhzbvyEVLCbeq93kNu4SwH2NkxkXVJKq9qaep8SaEpfZ89WA",
  "key17": "3ZU13Ajz7VJTg23URJr4LiHAeSXX65LCn5tw73jGTLyxxBFoo8foSvLRG3eD3GcXrdJ1hDNXH6KcaNoohmXG1w2a",
  "key18": "5CYousX22cj6seEEDt8mYm96dEzCYQerufjFBrMFuJvN9FDYjogxndpGj3Wm4is3mg4DyScJ2vWUpsjzwD24JXyD",
  "key19": "5vp6bKCijXoK3JhrZd2tKRSk5C3MLb8UmoHAzBQHDvVeB3rv4ThfGXc238xc8cPe1wA8GHtgfb1tMfo4hhayoFQ6",
  "key20": "5nQYYqv3vVWRMCjSyxfiiGU6Zw3Zcy8W66BNpUUeiTSwGchvSxj3pvG8iELFAJ4zg9vtCcJCTKWXXMwCFMq9PHvP",
  "key21": "5C4ufxbuE4kGLfNtvnW6QiBfNkvhjHdpFbdsuMCjVS61Ac2f1vJnpLMRisRoKLvkuAecAUH1v3uP31ZzAE58HV4v",
  "key22": "5MQD32U4iznWTnWeS3exkjw8WEC9VdHn9FxYrQ26PwEyhkutJ18S5z9rS6QJ7VPTQM6C73V5TW75d51jDNAbjisN",
  "key23": "2jUqM3bzCFYumfaoAkvWaQagctam1QGiRQACnBRpB7143WtWBcgvR3tWzZ4dBxervx336aPhED9LeWvGdy7AFvKq",
  "key24": "5xsR7rUqWejnF4teufHp1pro8TwxUv9pRgCjbaJz2wSk186Uh5zHAV3Qc13NuZbgk2KzqeTBfxSNuUN49PRPXajT",
  "key25": "dmTLSrwew4ziDCTSvPLpBaktv8xeZEEyMpSktni74Czvzn1Ua4xo6JpBbX8VY7YDScTqGesoZddER6mvjTd7Ck8",
  "key26": "2Shotb6bwoGj14ojYFSyZ33dJLjs5pcH8o4V4oK6eK9dBSoYLJtwKguHVtJXCf5Y88H3RKpjcgUhpoFbomtBLvVV",
  "key27": "QoEubbJPqYFJcK8iaavAGSuEPrjz33pv1YgL23hTmdk9JThK5dxTrDbrNKJD9U5zj99kF4U18wYWmP3TZvEpjme",
  "key28": "3KhadQzhNgFJrRTqvFCai1ErPHYraKT2ShBPA1S1F83MrZGm7kCQDrQMTZbnhhgJwq1ZedLFpTeLw1sTXDvToEeU",
  "key29": "2oh1QjFW68ssGG2xTV3FNG6JS8N5qYrg4usDipRspr3JnecWohoPQzE9kBrqeRP6bL1gH9j7zbgfrPkcAY7LjmqH",
  "key30": "37jaD3gr6HBznExechvxfcywxQHdBoNTv55z1BUKZCrNVForkdndiwL3D22Zhvv594ALcFzfTTv3n3wKiP5Nrmyj",
  "key31": "itJ2KaFUA9JPgRQXUU1os6Er8F1mr8DSQYszLZXAEZNwX8BPVvV4LqmpZcChLHJshmq4sQ8h9wDuX9t9jj4a3ps",
  "key32": "2NrAUZGkaJYNPJFzmSW7XUBE1e1gRtoqK6Z3UhnuUyW5EPTG13vyFnnsN1aDVB8BPg653QvuLUDD3d4ZHoKDv6yH",
  "key33": "3pzvvif98Xo43SSheNZpv1oqbPbdV1bnz3y3c9rADhYcmKZy41nf85Gvsn1JWhtjb38ZrgWM1JEiUV5ndcUEsAro",
  "key34": "5VWYJwzXdto5AxHgPYDxH2SZZ6bgvqRorWiFjwFTVBhcksDM7hEkzE6E31kSyfemVwseu61NDZHtWPdpxKpa6XYT"
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
