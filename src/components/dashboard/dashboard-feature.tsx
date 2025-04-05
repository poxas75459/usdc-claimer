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
    "5xQACLidBEe4EgC3RBXUJq3LyEG8Bs2LMVtZ9kvFzJd86jS8ViW5TskorYCPqbAQNgiVkK6HFTt6MpJjMSdwMXEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zyp7VyhrCHSqqjSqueb9GsXLbQ1KbV9rdwC2GQhAGDJuoQUnnUbsYXnrLhkMUmDNCU9WLZFmFDisv91Mj3b7yHL",
  "key1": "5K9GMbqc2DQc76YbwCHepJ4qTiUTZq5R9N7vjTWyCXfrcFVPz7og6jVJWg91nqXFUWRZHv5rYy3QJ944pwqx8yUC",
  "key2": "4r4NenGuxTAsPx54JWEpDbM8Tm2M1WanuNKHEQnxuykQLTZUn5onRhe4pPF1izSkM2Xgf75dmuaGdKSHaed3ivmt",
  "key3": "Za2bpgUVzF5dUZP5TUPp2QEaKsjZNPRdE79CrNQ7osbHL37Ejcys7SUiezxoxvaTuBXFKBdSijcWoqfhzhaX4xj",
  "key4": "66vrtEgVC3ftqnmRLKcKj3axndW56VtVvAaWQpaiQF4rJtAUJJ7HZkNtrGc34Q6BSuAEeKvHRabXu6XguSEtpjLX",
  "key5": "4NrMghkgU7SLWAA1gd8AGVmsB3UPdmgf4NoorKAEi4ZT5TNsyT4ZRgPXUydndds8e4f4TAzU3QtSZ8petQQRXeZa",
  "key6": "3M8ACf63DidwhsWWhhpfRCcVcPTnRYPcpVeic2uhJkmb5sic9xPHzJS4PfZGhY89VFHcGLJv2fgHhSRRLjMHUwEA",
  "key7": "5Ftcz83XPar2yYWvXRLaJWsLJF8gc1E8tFZKYySuWP9ibA8pcsE1oEzwPfxDf87Ew9wyrFUBESMNHdTZjsiCy7u6",
  "key8": "5HsfA5eKHEVMi94RYoTDnKcB1AhuPFdCYnw6YYki4qSxWePTkEpgeXp6RTU58YKLUZCk5agk72zrdxZCP6fXDoLY",
  "key9": "4t732phFLSwoxFEARbYKcgNMQ1tKmwLriA5GSrwN3yfwr3niwZELximWgmfh19wT1NxRiQb45nECmcM4UhgtZcXJ",
  "key10": "2L13bFDkoTgf7DkumyWpCccgokEZs9oaTrbgwWGyoQG1yjHC3Zw3RKZdks1mbSPHZFnMREXwHiCrSCRPjZ7XA7Sa",
  "key11": "2S3UeZBc71kooS3Bgh71ZX7d5NJKUSEAa9148yXYxe3JEkADjTYNj61Mvo17GQFWvnd2AbVG5L16mSuxLBCeTTud",
  "key12": "5oZwhT483MPZnvTeMWCQbiH8fDv57TLUDcBpJHExe42DizSxUYnVLrru9pYyGFAjZuF5QkQ3boCxmUNcveXxFwyh",
  "key13": "2uhLmbgMJ43UqKM2sv8tkugHUBy2cRz1NU7kbGhXvosMxMtD5XyxmsGu1sHYcY46jFKCEmD4RTEZKixjx99vq5K5",
  "key14": "52tJK5iTKq8BNxE5WnmoWvKcaV8HbakhewNeeWwwfGuiDHsfenEG7B8djYeqoUKxWp2XTvg6fwrfnujKptZku1HD",
  "key15": "587g6gxRAcEp7sTJhKWKjBvQueP29FPFGDswCV4K35tJBQyQZhumJ3fA5MyXsaMriSgauTHg54BagAHJZz4UCX86",
  "key16": "5vVndy1oVhYH6DTqEezAsdrvaDPtqYXkyxPctP8eTvSWYjvudNwX1AemReUmHhcXx5ePk2XhihRVE7PgGAKedv8",
  "key17": "EsAp2VAbqDt7sZu4j8sZmzrEpzaehV5A9hXoZsBFgyJV6jgLaUTt4UrFCVWd5c4ML7pYKH3MRsJgCThNXDUknKK",
  "key18": "2FepKTth6ZRV263cgqMEfaRWGtRd3NFu7CJcYfQBGec7UT3phy3CTqPdNL7zQbKQKKtNYiB8uYH1QZWyTxddSauH",
  "key19": "4HZGj52JKLNWX7LVLSbD2BxySp8eRWsVXfCRe5eW6GCQHxQBj2Pcg4ZisCQneCNYXj4znEUduRg6AdKcPce7WnKR",
  "key20": "5uyHkT1jrDzk9b6Kvv28wGBcCWRm3LeJEncJaFw7wECQzXDBsWk6VuTQP5dnTBTHpYvDNoyz1QqCuJJ6FhcXjwHX",
  "key21": "2c9UMd5uUstBvmAmMqjfQvW7cHNDkSfekFVgMW5ynQn97UjUfq9pPnRUN28XjQV9UM7pMhe929mrMQh9vQLsC6LS",
  "key22": "2Z1z8BDwFsX13n23ZPgXLQaVcy1i15yRLWw4igLaRQx8ii5fhSs5As57gzXwvWfdxypEoRyuAETjYQ1f9QfmnGsv",
  "key23": "4WUmjVFXZJ7WCNhotChzuHm5kUuMuyqotFA7aZrXcRnE46sjzLzbHHWwAnfukuwmX1R4yZfukBvZ24wKkJe9JmWi",
  "key24": "fMgDy6mK4aEefL7pyBGmbum9NtAsQm2gZXBqvD8Sz4Lm4eu8UKXWtyA6VmgzvZwgPWroujfoJtXJwS2sVy7xKuj",
  "key25": "5n5i6Qq5ydSh5tBNjV5kxvQKot2bVdYuYx69hJkhWE3AYmxNPsX1bUw4hnuyaFfGxznYUuRSN2EXgjMLhTXPepEq",
  "key26": "4ijXBwB335uDfvuuKHkYHXzLQpPPgkDks77QfKAJvLwKd4oDVcBuRuowYGbnQW5zFnh5SfezGPpeiL5KQnaKf2Et",
  "key27": "5hXrgD3psgFwoBS5BdcCiyCEpDRLNwr8nxQ32bfoGtsEvM4WFF2GxTgR8ibSr99n2AN7juaPH6TiRx7YQDNYiyrr",
  "key28": "5jeaXYTAbNPbPhCRsteVYjgWJTp2dvnjwuk7yXjwqgVbn8kZcQcMw95ePJaEzjJ7hTxrfdSm9us8nZqcDVLYPsiS",
  "key29": "5Z26FRqMgbNJJuZSJv7cDpn8ccg1fS76CmDjcB3BJ8aDfFG87QjZ45HjbrqSZVW9zcJjmvA2V6otE5Rnym6B4MNg",
  "key30": "5qKdpc9aez3PZ6oA8Z7gVeLYgkwDe81NPRPTYmw1RH5Ai4aQgbb7GFayssBBLpNBu1jdmcW6VKPwWKwkmjAmyUU7",
  "key31": "47mvj9NvYFHaaYtvz7DEwUw9E1vNkXdSjhK8WimQ6hybr5NK7icEN6fXzMdwS5kBi6ymRmgtREr8qDpp7JtrLe64",
  "key32": "5WQ7Nb4hcZxXuwbH94ogUcuBkGBB4kFUoJM7QjBdTZTedp8Tx9d5i2ZDRTFfaXfwssGoh9nwnMBi55cjWaorJ7HF",
  "key33": "5Q8gHT1Ru3UeW4XNTXZWMK84Xf5f9EDMEyVtKWJwRDXJdcrirLfLyr2Qum1JfRwDDUwoBpUVAYnx8DkxwfKSnZcQ"
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
