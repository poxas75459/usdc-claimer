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
    "5qw7qKBbrCneiSCwU54gfFcKJwDd1QFTZBvt6oR4QBo22Y4PKNC9npTCyMzq7fEMVcTdp8LPNbbQudoDAS2kiUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nMURuuiM6bKq6D6NdUdDyDP4vkkthm8C8y1qgt2k3qGMRUzbaDkL5NTsCwTkkHc2wYmB5XP7S1LeFxPuAhJhHEF",
  "key1": "2tGMdBqDFdcebBGgZ4cqnAGf5BgD9ue1LzcFxMqR9nCmq14bzjWSzdT2L7E5SWH8kw48xwQxn7vkf1ijhj6XyWvZ",
  "key2": "tyuNw9ih3Hizu9Xp9tMd9nu9ZZe2M4F4BzW1esthr32Wb5Fq2rsQJFh4QtRk5RZ5PjNXiVRCn9oprdz36kc815k",
  "key3": "4jus75XJE5ShznPhXLdzuxEs4odvXwbgCepJeVwhaiZTnA2Adfh9hf7apYDiUjauY52MhJRMtKFDTz2aGLFDj7Qx",
  "key4": "4HLeJqFqxdRVXNHMQ5t7sqPMyrhv537N2M2Wim2MQ1gA4tFnX2ZDPycM3ABc7YMD9bSHbpNYRtSjtqemow5q9sDk",
  "key5": "D3uVysWDWrKLPM7NFSzqrnwrSYq3Jpy1QbVzNMwy6u2ofegY3MaK8DDVF2UVJxqzofwxpM5sMReMdrVxTZK3oTf",
  "key6": "3SDfkZS9xeS21tBr3N9DTP8iRhrS3QWtVawXvLYihnBZcnYHj6eYSxq3Ci8fjqf6Dm9bULNCfcoCrZ3XdpTwK2vH",
  "key7": "QJgqn4BgahCnVhBEf8WG65rPTL9E6LtJFCJZKSLmzrSGRtqqygiUkBmx6Q46jGTY2k2mXwyLbsRPw4Ncq4TT3Ai",
  "key8": "5PmMhFaRQgpFXPGqGdM6ymoGsQD5dnAWA2hDLmWYRBxuyxDDKEt9MWA2mpJXhFu3BBuS2PySS2NKmbeBeRyFfHiq",
  "key9": "3YHh81mieqKKEFbqssobr2Dww6gVqGKMr8s9atsbPzdTMUVUBq8CcawTXkUjiKK8jC19Xc8VHphgxus1orMqVHEx",
  "key10": "5aRraDivizyXikVC6Gi2EA6fJbge2JiavdDUcjKZ5EZFxe82dDcTZSNvXy9MLYBidQFji8t5R4vp11G9vMSevu6w",
  "key11": "2QVrbMM8J5w8k73DcvUtr4nK9mgydWizWSEcf7sEq2aZjxsHjeeew3qzGyG8fJbwpDJL5tUVbqzzBHcq8A2HsdUm",
  "key12": "4mEVGAKamGbCGFjiWLZZxTrNF31furhLs9C4iAKU8GceRBhJgiJFpnC7UorcC7sHN6umv4tMq5mxfbxMcUgdkw8j",
  "key13": "3t4D1QC2zsFgnQoj8rzAKEaNBg428vEW7GCZNqKqkpavD7PvMHkawm4n4v3KdnN9dSybB8Y19sEofMqaGdMATyPj",
  "key14": "nmY9M1hqEdDZKoJbJKue8Vf3dksYVkypG524sPQu4gw2MpF2yxhKvdwsex6XthyEZRN2VLQEUbHqr1hYrw4fTob",
  "key15": "2Dctb8hQJ7K3wcBTNhvPaoM1rQ91Jb8P3kNoqA3fPHS7HitiC6BUn4BYqnbLQ9bF8ge5x2ruLP8XT6mzQHtREyyp",
  "key16": "5eR7FMH7pyaTmJPYEtzCNjHUtccbwGWgtFcJCTYPzJs7gepVQJPtTLNvTnMqKhumkMKvz762FHkjLSmQzDVYjXFK",
  "key17": "3fNe7TXp97kDweovDff3Faj8cKpwNx3PZqxhxoHmHGdtJVR6wYyTUiuKHfmGCf6gNxPs7ZXD1sopKF7qkCCewD1X",
  "key18": "zmRNR9wbSWXcVhbzwekFiCwgWikaLpDvXRf2UiB5qbZst1rzsHYzbP3szbhXZWzDWhCyABd2EJ52rzY1Ck6QZLc",
  "key19": "457WYMsffXUQUYf5Q9AiZ2TsVFrPutoiqFPtDz3Wp6htXGjAxbHhMSf93oRnMAizdiyeDVaZoCGppWDn6WdhJSrc",
  "key20": "2s9ATBra65HNVsW8tLpdGov1S1qfa7SCxzgK6spndayFWKtFYYJnkGwMZq9jDt7vhKD5FMxZoCSehyWGea2BuiFp",
  "key21": "5thekH34oyZYNAyQ5C35rvpDfoUjnvz9cCNgZbrXhD9176Qur3S3KiqCWLUwhLaPxPVsyoAtYnep7GPKyvGDyJrC",
  "key22": "31Sc2HMDTArz7V6YnhfzF7dExTMubQ5tcQCvN2NDVsd1agLh6czHj8vYQS453AzxjoK5CZExJN2qxXnGoHgJyT2Z",
  "key23": "4kRY38tqEjSxRsjjrCVdqRfsc7uUPyyMJDvSc5JDxETGDhp2W9bM2R4q8X3YsVHbZ6dAf3hzVQDF3szQsqxc96H7",
  "key24": "3xWEdaKkwqn3WribRcZrMT8jseXiAxhgbfJBp1h1ctDag5YMA54ep8ULcbrizyqdBcVHh5nZp4Sf8JPuVdF4sJHA",
  "key25": "226Aa5csX8YNFMW3thBkD82671q71Gp8A4Uibp1BQXheKRBENnWe1WftwALew87HcpvffYDZK19YkKvJUnD5A3L3",
  "key26": "4u1cBuvFp4RQBTokEKvGe51TnqMTpjfsQG4qR3iC9KnGQAeK6Djkf1QdFcqZ8uMwCMg9T6g67caoHWMKePKPsPGB",
  "key27": "2hndECB9miv6DjiSB6Xj3RbgfbGKDn58ToLVNrz9wmzh7r6mEaZSzMw2zxL92CFViiTs3RZELwQ18b4GLSstzmzf",
  "key28": "5vqx1hXcnPqztEMXp8U5VjuShYda5np8szktKBox2FPVsTSxkYJcbLQgZYXSNLqY5uvhFQ4V5TKdnmg68E7vgQm5",
  "key29": "3Y81F12HYuRaPudmAKXngKxSEDCrrwLrg3s3vMahvqpAtTtxcJ5rXushpWEJftLk5prKRVy4fK44WqBZ4TXAiLXD",
  "key30": "2K4GGCssfwbgmMNyWcPo7TXa9m97gdKt7uVNkTVSimZBkSJtfpt54ZpPT9pP4ehAVwTWtzPb36BWxsNjLsXBNKia",
  "key31": "4sB9rmicuKo6TWvikuHpo6dRkX3tVZsJWiQ349zY1k1LNBjac1iDwqksisjGgecPF8K3xHDTX43M5bewvmZrwfap",
  "key32": "8ieFfU68zbuN7C7BxMwRaDv8SgkdTTV22DNYmqPgTgkm8rUPxffVgFwz99SAhApqwTJAhy1TGAPfJetjGdj1Y9v",
  "key33": "7S1krV1F4BH3k6sCk2Ss3hTdDrFu27r47AUncYuhNXnCtLjt8iRZy7H1dnbXErs1q2QSLf6d5iDN7VZ9LPLB7wz",
  "key34": "5cb2ZnvnmiuFTmnaZteH2yW88tXsP5vgfKooUVANZynvGUAojbsL3GcYAazdhzSQMuVuSmdSaMzhywcx7tk9sXck",
  "key35": "57jiDJURndie1TncLNkCSxKFeac6fApY9KgLAnNsQRmqMR1vdwiwZ55H8e1Ktd7iZtXVrBxbEtHmgARjvupbmvDF",
  "key36": "21mWYgPAazt9pWwf8QjQu4emcnbMKNxPCtnsXqHZVSa4ZtLchVyLhdNWc63i2N1RoaaYA2nf7vsTCiARqqhph7Pn",
  "key37": "51wdDMpbA4S3LQWrKtrcMvJw1bRMA78dgsoaiw3odaEz2xt84FNBfGapLDLY1vtq5buieNicGdLjHvbvGkjRoWZF"
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
