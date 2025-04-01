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
    "qqkJmyjxPLQjX7GGnpejhsUzhkUW1zY4HQYVzxyFDvQmPgeP65nFotnCXMVhFF1aWGs8YRZw9MSc5zU6EJhtYHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c592DHeKcARdCbmv4grw5PTQSpbtXtGmCiRJzdnML9jqmoEbXrJ74HDCC4qPyRsPoqBfBokWaVsxtW9vvqiEZUx",
  "key1": "9ikXzyi5XjFEUT8zxYutbyjHwJPtqtmyeD7Tw7aDKYPWprcBgVS9dwzo6e8fZcYhcVaH31BnnmYQ5GTffkQ8aeC",
  "key2": "gg2agxRnSuMgr45ngJmwCnj8ykDxUj3r5JC5mPTcipub8VVam12R52ULSRk7fSAEfMoGkhNcnEArk1fahas7B1G",
  "key3": "39UuEKKt3x7UhUXG6YX8k5KJnqRXY5fZ56W8iW2gp56hktwFTvH9dP9By4kpbai1AM8YvxydLj1BABdwcsheTSbq",
  "key4": "5zzKvJm9oVgkxWeMGVndrrx4NHVzgEtXkqd2ESS8GqxheAjawxx9xxugps9Q6AjF8UwyWqxv7om14L2J14Hgbs61",
  "key5": "3HSJj6GxEU7RhkPZ4WnfDvZXjFJX1sNkzVFXwZTxRTV7KMwpmxbW35nvphHkfDupYDfm6hcRQD9WwP9dfFWLSGmJ",
  "key6": "213QToYrc2VCyrEThmUXrZyYcDyr54Lvvu8EXuQkgi1KxE7fgeS4DaMW7sXzmtwMATdBX1We2yfZuhVyuEuMwXBX",
  "key7": "2ghasYuFHA23zgyHZYRhW2ePGda3wiGqTH4mdiRPj28LKM58x1GFAe8GEKBHV2eX24eUGmzoV1DtNzrEBKob8MGQ",
  "key8": "551WWLKCnREkDiD8w9esKJLJ7hzzs1drNHH9LmqwZ5CNPMS7ZfxdH1Lk4rN2dBULBH3SpcwX6HZNNnJUVq6kTjTB",
  "key9": "2nsgkemjep8xgSx5mHJBQ3WcQXER4S8Ue82GbBCdPQ8t1t3xXXxV3Sd6X2TikYd9eUmCozwS7jJjTH2dvDsqRBs9",
  "key10": "2cWy4Be5mDSyW6XfJ8syUyyutZHfRErvrkzZSGXTUsizQcs7fRUELYdLeJbUAmGwMru2kLuc7Lqca719XVWvBJJR",
  "key11": "55FScPLqRjdEpeoxYLfTLaXfPhG65UsEejHggEwTmkuoEjXgQxdraiFWLjgY47LB1fsdMT2YeLk4n5SqZW4scxTx",
  "key12": "4VyeXiy54RNYUGfGbnFqRTG6RsPpvAMnn6bavTasBu55na3vo7eQkZ96yLYvboNvhVKyhcnQZPzuchRJRjjFRxqc",
  "key13": "21WQs7QLMTwB35kDB2uviUq9ncBNEUwTTE5pPru1DJ7UPs8bbYE11nCTPxV8YtmCE8TzAutSfSyZARe2CGoK7Pfv",
  "key14": "363Rp78LkszoQitJNWNCWSWcdj6LnSXXkQamU4T71XxWLHxGUiuow6VgwYYFfP7cDPfP5uF9z9giKd64KpkTxMJ8",
  "key15": "4FFVzrLqPNA3LE148wQSKLFcc6w2jpJoN3jJGMPVsQNdHHkLhkcAzhc9peFuwHux3wbH3zcCaLQcWtM4q6bfbpeL",
  "key16": "4ZsZaYEGPgT46Qt8sZrx18Wd49vCQkmpqLDRV3bxy47CGNvSFetA2zCTJgFyfP23Mb2eUt1bDhy47GGxWBuRx7cJ",
  "key17": "51reY2zN7fcYPUePTcjNQY33ht1CedRFUAhrDM97i7JJiWdPJgzyUwxMQrHjZ5drR5wERrujZASEZWGpnYV5QViK",
  "key18": "3XdXfzcH8ePGEUfoK8cFBaM2MeCgQFX17cdT8Mq2fxM5wpjtFeTjqsbXrF5NWNEqEpQg3fyG67SGpqySELYvnqnq",
  "key19": "DiYPJgrnoJAXZubSMwEQ6y4TfZHccsovVC4E7yPdtST51kweueCWKZkePb7WjikKoC4aGfLZZ6STFHbgAa9C4Wj",
  "key20": "66rtouZ8NaxNjjySxJvV7soEcEDVruf5TqWRWMNLqCgj9LXcGa5DM2ycFM19XmkCo2qMp5rbpdVaRFUc5srf81Bc",
  "key21": "4kzEegqAV2bLWmbFfeo1UvrbYKQQHGVEAyWhMF4Ktj2DXnmivC11TaUNhZhbJjYaYmuWWzYD5SJL5Rx7snx96uNN",
  "key22": "29w72gJ6cx4y79rtzPdSQw3PHU6Q3dP25t4PTuw3vs2it6uYwS7CL2nmdWQifvg1aa5JrtA4x3yvsDBjGiiLSXvm",
  "key23": "2s7fHN3nNaD5whKV6DQu4pT29iNhtyE82nLgcBLgomE1Wpkd5bwePCiUaKTA51qbTreziT5baBesHVZM9ZQjVTu6",
  "key24": "129nuBNPdtfszvYbrgjoZTk7NJ7nYGVkMGBwTnpAnaatSQg3zpripwC2ayiuXsLh1XQRwLm37iuQcBSuKuHQnesX",
  "key25": "5uiKr87f9jAzLAUtE16jEe7n4ykziM3L4YcaqruyUczyNWMYVk4FY1oLRMjEf2eA8ifWygTu2wdFwgh1zW1CWajo",
  "key26": "kQy3cRCSyCBHiQTDMKxyd8YvdD5ZzZS2Kdv8BSGt8Cy9m47ZS4H2LTyVq6coaBRgDG4K2A7bpwzAX7uVvnbDdDi"
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
