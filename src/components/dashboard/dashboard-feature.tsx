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
    "5YzZGcfvwCRiQcaxKSVtHv7saZooZQbY9AFZooNtLbye4Q4frDcYMeJyy9UqWwaZefiaq666UwBdgvrRxqK7CjmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wbHVoov6NQRLdAn19GM89bvMGoV9wkK6hVdU6XJcQL3oDd5dGr6Ru1SL7eropTnRmowCuYrhDAyiVawndpG2cwB",
  "key1": "4ob7y7nAQnPRyYzXV1n9JEhHYLLcNTcTFEisiQELszL8hzod1P2Gwj5Ab1wVimpSFmVHMyRGBReX1tCULsyVR3Ce",
  "key2": "3KEVEhhhcxrM7sSe5CMWSyWYJK13mmfB2rjrhSDq9RfhR4VRADXauQ9dj8M1iUb7C9oU9qfjuo7WZKsd7sqB5KAJ",
  "key3": "Uj8y3afq3zJTNnCzgT9i2p8nNrfxvBCaMm5o7qaojKF4kKmGx7j3bfiLMw6PJqHLWXVGKZ9ahfzEwnE6Nse5HS3",
  "key4": "xz1JHCaQYBX9zKcYt9z81GeuNbtAxvU88QgeUGJsJEaN5cpykARo3Jc8tJQimHotVP3SiFrasa7kieEM23oPfyD",
  "key5": "rathP2FbfthemZFWnHwoKpD73i58nbokjEyEPZC9iRGxh5JyqFADZEt785L66xeYEC1vMuz14w5CDYRThz2t7BG",
  "key6": "2XSFVMiQnHajAU7CYyy5GVd5NF41djcsZmpdEsysMoB7gTZRpVPRoCnjjtg2AwEgHmt6BX44E6f2jY7CmLya4wzf",
  "key7": "4NpM6FBxJTgpvWdYpYWVmNchy3xeSvhYcAQwCvXYqGhwMrH28bDcfZefTguqsknXZymdMASbW4Pvvpvp7nGTuWra",
  "key8": "4Hb1oHge9GjmhXJSCTn9qRzfXHXdjPBPWHDrwL2jQy4gvu24poPrSZq4Rd3ozCeigF8wRHgrNFpWan8WiPkFNEU",
  "key9": "32xHcpt3NBuCwwdwn6Xoq8TWjbzafEPuB54hA5jKbbFJywZeam5CC55shJ2dQRyAfbQzuWd3RKDed8SyS395KAbC",
  "key10": "8g2wFx7hrkexMdXXKmuxd9gYXpBmRe4zBLnzccU3hv8w2rgSz5AZWqyxrvfiCPoMco4SMcLLKw8YX2ABvWe8mEa",
  "key11": "2QevGbedNojFByQYHLMKRipJ3dqMfNodMmUobVrRwXjNQHXrNep7vBoh1C83h4WiWubDCUUWSGFBkQXe9oPtyXKU",
  "key12": "3nA8RT8fMMDoBvrxyW8JsKAcpmU3sQiJEbqkuM8U1wVE52Px8QxDGFoofbHCNSY1jhvW7UPSf1BiMWYAf3S5YHiS",
  "key13": "3M3ZnwHaX4gbGwhhTdGf41rFSvzPtpuedPZCdSRZ3uoGxBtUhTZsqaumWFSr3QLpJhpFWMW4vy3LkNWCbjAPDcVv",
  "key14": "33CWtV4gppW7rTsCsnhjzxQPezTVK6tLqnspCHmWj8cfZh4RLPhohh2893NbcmeZwViTNZ4NsdgX4bYMEVZWe6VZ",
  "key15": "5JiayvTPMvQSGKrNXjP1oByXkhPNNeBV5uuA4varhnwPrjpKFVe5R2U7yCXsbVW7yJ4oYmxHrdwBgZo7D6bNXYQS",
  "key16": "3gmCd87Sc9BucNjs5tf9JGh1DqLVh7wR62j61HGcqvkJv7BpyzFJafG99iJyUmEK8aBAfC9pmBC5ZTRmfkwySFMM",
  "key17": "YCH5MJUSVFvEJXHF4ATU52ZWQwE1nXtS5ztZ67YjdQF29azXR3gt1MwB1JkSxA6wQoZe8be3e9GoLSApMusij2n",
  "key18": "32kmTZas1ZFTvBvCLyENonmmd3CsK5XaYAHBdA1CVrymXdc2g898Mk3bShxA99dteMHeUCtnfzFwkdGExYZreLqQ",
  "key19": "3RhZFaHkWyriFcU6MEXgLUwV2Y7vUaUYWnZzsfKK72ZHhNmfhHQNKJMxQTCTSUZvQX7QZeFswRnEE6Va9BaF88eu",
  "key20": "pneoDZjjBpU9f7Rihr15dAQG7vfkK3VDY1BVdi4YZbqzjoUcXxtvVZj92wk1shFwpvamqESzs9EwAq8MVY25GoR",
  "key21": "25TDSfoYB631uRV1vUGuhdayASBy5kGhv6Fh2TZmznPCJCq5yuioVhywtjZWRrt5Aj8Uxk4MQsiMJ55eFDeVnXZT",
  "key22": "4fVXLtxUCPAayMjCQLDrie1hz6SDH7BPPsBYMpRTUQU2L6f7vLWLNr6sBCWec3DSdLyzCnNhXUT3ep1H5frh3Akp",
  "key23": "3JnXkjRipjA2npv7TFuyJzjcnsvHNaUHBH8m9LBg3JkKxm9Bat9duw1KRAr2HGf5uGo1i2GEAfTkBWALShSFt7JR",
  "key24": "2saMp3qDBuA6sjzUbsDNPg87fAjdp7UjYWr5fQJy29iixfZDoN23EmM2wQrZahsjbCHabxwn9zQDxqeTHZLSj8XC",
  "key25": "51BQz9MDJJF6Lu9YfmbKEkpwc6nUPr3LA1g5wdCpPFWbDjwJvg27mYCkuwJb9vKaAUJ5SfeycmgituRudDK9ta78",
  "key26": "M3RibyysagQN9c7aXbFNoCEXtr2Up3c78HLEN26bzNhAP8HtPrdvnfxXxS9bRrytGNkc41oFkFJa7M7PuQXhpQK",
  "key27": "3WStW6WQJw4nSEAVpQBqqYfnUfF2uZBcWLgHNCQwazVB2Z4aPfd5yPWv431XLDuhKstavDP5YNno4MaipQHM5WRZ"
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
