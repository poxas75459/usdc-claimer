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
    "5V9T2o989cPJsEbuTnUMgvbkN7iLbiCx9NxkPSPzRWxbh7UA9fVaPDrPBXEQBt7a4Ry2gU6vJuNJ7giaxfjkFJLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37aYZXp37Q5bGj47BzkWXRK5wMBMVKAFzfQuKG4hjGf892t6UAba5wFuuUbvpx6hnua6tXMwrYKwUpkk9Lp7SYXb",
  "key1": "2GJzWwhbQTk9CKf57ndSh8L5zrkESSGsrbN8fuP5jQAZGqRgNfY6Txy5KwKPF56dFpUrb7pJ2MdNXATCuTyT55wz",
  "key2": "3GMZS1AFF6A2F4XQfkwHhN4HbLXY513AvehMJ8FxRFctsmZYoAMNRcL9SntP9vc4vVvYhJJAoKA1ZEzVdnLPAH1a",
  "key3": "3sjrGYx7NLnLnyuqMpCZMVHrgKXf8XyUZWoPCs75FGwL8iH43B6sXbD5Haj97wRVt3Y8cqZkp1uj7RxCzYcv9VwD",
  "key4": "izPveHekkDA9fmspqFJLhU3JfFmphF2BgqHj8KuUk1k6CGoSUVs6FYD45Eu14sufg6pp5S28LGTyrj7VEVfTBVG",
  "key5": "37GeUwETMQWvGV85xnh3eeLqJdPgTE9wpdDANhwwkq8eG2HS4K6LYqnz4Js4a7r6eWV5AyZQZpWhMLTwYsucCr1T",
  "key6": "5abAXreQatSyCDFm6rUByukuNB65tSoVQpBebh4Gb1UW4bmuAGEoxa4x3S9N5VE8Mgu5c4rgHePB2nivjYAWvyjL",
  "key7": "TAbGBiGkecQUX8r9SA5raW2PrYjmmRjQsjMEGZY5Se4GVDeWeNMbrVrNPu3rEY1bYzqw5gwCz1L2Qqo86wUeC9y",
  "key8": "3oHtsdW7kWeZ3YEsScCuQoVFV8AcFe8jKEGV89t1bkrhfNZGs2ySK98Kg9vZfVqMbk6agEbBhYgkPAb6nk4Um64m",
  "key9": "43LpFsWKmw8se1J1phvW2hPHHLmkzBP9iREiPLYDPKskpXSVCHvgKnGDrapGcwaYaYNvbVTqbEXh1X6ezitAQJPy",
  "key10": "31bFS5cfRWMyNn5Hf26396AQN3zkV2YgYy6yu8fqH1m4bE4UyoKLHS9Ua4km7UDxE1K7opH5QVWKHqW3TxjgdQMd",
  "key11": "5pjeTxbqtgd4uqsLTbEcaacT9S9VNBV6G7ghTDcizJMEAiUEF2Ha8Z64azqu8ViiiwW7xGwEWJn5cqrnYQF5eF9s",
  "key12": "5wFk1b9VJmPwiciBtdxF5otsmsTWpNG6qip3izmyRdoapbt4RkuFUgizNRanX5T9iRxKs2DcHd3aZZYSdiJVWzKQ",
  "key13": "K1B13emqJH32HvfnUNH8V8ipuPYbMJHTXMBJbXaiUCQMusi6LC5JBGi2DFFQ6opC9JgC1yL2JyBcxD5t9uR6NRg",
  "key14": "ZEYqAn4oWsQRM1t3KwmNxqZJZsToA5DSZxUNk1cz8Q4Sk6tw6zsjFjr5Gr8YBC15PGpqGyorFvo12eqXRSwV5Pg",
  "key15": "4Yygiu3s8iGZdKArYLkBmUyFtJxxGG4GAihz1Uk6n9pttqJ8EfyGBXewabnc9wjPyGwyaaX53jc5jcjfqzoV3DZ5",
  "key16": "3BS1Tedyx96kcxEf6k5kehSstpPiHp4qnbkjYQRZfz1CVdN6wceMmqaQB27dr7WYRLjHR3sxGb6QSYXbGqc1XREn",
  "key17": "6NuZ9arncWsA6ag5jyezmsu1ao4cN3toef23gd62EKFmvKPZbREcRpk9JqUwBTYyxjxFfMGnBK7aAJTNpKFwTBN",
  "key18": "gFeCLMi2UPCvxcHqGtq15NajKwP26EsToYT1nAKZT2GeZhgUKC426BNb3QrWm7rjAXUrAhUjN4bph71VPkJBGSm",
  "key19": "2bNtgHafejxUUvQwWBGcY8mTKDESkqxa99pzXQdx7eAX9dZMCNtskKwHsUVS8aEfkapetCKgwwDMZ1FRM423Jcjh",
  "key20": "2SGf1eQPnbeyypYReSq9PK9P2qyxDWe6UEaW4EwcbPadAbEyDHkUqEPcHq2KrJ5oYL5GGuhuhuwDpstQTsi6caRg",
  "key21": "3dHLg8mGM1FEzaReSVE7CcUk421FR6wMcjppzAKhzEyBx2gytC2XS8YfnFiiE5bRFWicKyKu6WFC4C4Arcs4UvSU",
  "key22": "5PNG2NZ9bW7e4EfWy3ToWahpZzuSdFJJB5zppJ7ve2d7C132zMyMhFMAQpR9yySziUErGNGyAphVFLgYRZB98p26",
  "key23": "4F8vCmsGpggR1z6J47anaNh2TGPktR8dG7VKRiXfTSWJY31doigyYK1hM1mSLPc3Qpfje8sCpfokJd5NsGXhXy9B",
  "key24": "2S3UnaUyDgg6RM6yzH87PDCdgURGAEG7Gdvx6shxWFqpYsyEw2J6eBVrXMcvLieYH5nFYTGfAa2orpfvHmBMM2s3",
  "key25": "8UJJUYi8cjVpBCEknhAQo5ygqEoQc8hrjUG4LpfLZdCiDgi1fiwLbf7A9TENGEr66i965xTFEhyWrVfn6iRrPaR",
  "key26": "9XoYDf4D8CVWQzBSET53JjTYT89AHj6rLwRhe3jP6iW7iNEagYq1iecJPTzhw7Qw7FwSoXJ4agZTUWSZDrgELF8",
  "key27": "5EnKwPhnKcMJ93gnwcQyKvJgLRhZ46CgoWPPQWKzLXMxs6oAr5jrBdCarwR4jm7MLHHrgio2Qm2V3Mwf5EbDTy67",
  "key28": "6agqwTP72vaPpULAsVbfNBbmZzbRB2ye4VXdFyDGXZ2okzTiWF9gFXiHcZNxdX3E2uKbWKbGjRoKHZ5PGMUbjWG",
  "key29": "3mMdE33GxTLedUp75g1jRXp9zVLZVBmTgiFdKw7VgUeF1hNjzX6ydCSujjr7hyyXWV4Vqp274Ho1Hg66uyJxdCUX",
  "key30": "U4r82qbRKpkWDWiEbqaZKvGdtpCiqYfKkUMEoa17S7zCVhLhryPrzkPSe4qjUHD6ZYHzYQrC9a9ifNrQa5a4J2c",
  "key31": "5cPoboCEXWisXZp8qYF37h39V6Hadcaeron3C9mDnqK8Cux51WqP1az1ZuG66cPJpEdy5RSrGDh66WeJofAGpSQa",
  "key32": "661FYJtXzcrPA187bk5bomX2ShqS3HqNNZbBgKY56wBeUkpPnuDkAwUEbu1niGgnN4gJSW931mDzPPoSi1Hdrcfp",
  "key33": "4DfLTvsoAUWD8yMg9QKHYMZzS8V2VLSrWMb6x9KdnuyAntsEXVpPcTkaM7C3vcY2qCmMFe8JzYMBPPRAkrPGDcDG",
  "key34": "3khjX8erFZrFEcMJKfHYgdfGeebMtPHVz5dWC4Adug5EtW3P89tMTjBhSfVbNxG3CVpCmCoMMSbANd3R5BdQ7BVy",
  "key35": "4348hqLBjTaMXVCWQuvt87crkfo235hC5s7iz8ykbEtUxnw5dmEdXDyHkbBbaEtZusDn3hkrSXHfGMZFrgG4s36q",
  "key36": "27SsS3XgfkqyHVLSnHbDYaGY9gWoRS8UNpmH2zPkpFi1C1VVdF6jCoT7H5C9aXkFQWHswXjEmmdaJZsSBpGBorRS"
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
