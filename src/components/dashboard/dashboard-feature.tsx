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
    "4ubp8VZdkZUpehxhYKtr2gqyVMEvZmaf16ZjHZUWcCV85NmkhwGY9GqCn1utUKt96GtijVtQunoNFNn6DN76hMKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MzHrEAMCpQjBrxq2qXsPDshKDSW1RfUMELCULtTorRxfbzcbjQPvU5EeSUxuEcPSRftJCdiDjpkkX6KPmUTYLd4",
  "key1": "4h8HK4w3hKAW8m91HdjBpA6YspBxcviKtUDTNXhfbaWHE6CvG5yvKZxQ1mHpZDqc2GopDf7BQrcwyNzmDmDznz7e",
  "key2": "S9e7sP9Mmrjr8WxbfH9tz9ju7UkoJnSuf1nPSNrDHcRZb5CaWdAVoDkCWkdvUf9iBxQyaUNjGpRm8pTBtmhNQEM",
  "key3": "5vcXdA3rneo2w2DGAj6UWJA5gMVJpQGqksgFMf9XNFynW9br8MgGkQnzAuHFCAMuRBmZ9EhjnjyvbQpRPxfzJjqo",
  "key4": "22h37UGnUr66QcyJyY5yWzWEVRKjdSkhv5S59tAYgpajf3ZAcEo2kfrQ2nJ1yqjNKP1ANpuwotk7Wpf792GWwcSX",
  "key5": "2jebvxTBZiAXiC7qqF41XhGy9sjvKnXM4ZJ38UBuJiWrGX3UQhEoH3mqLRJFrK4hTgKYNmee5Q4bcn4gPJBMBe2e",
  "key6": "3yAJUCLpBLYK1RCKv2zu6NjhNsHCt5QGjxcNuPKvDPU9dmuq6WXkLnojz4RJeiJFMiP1m39yR3eX5h59HHnR8ASC",
  "key7": "4RCKh5RF2FEkcTVsEJiX9xHRsXFDQ4c7CVRJbPhThW2PuvSdTVJNqJ49K1753f8nmS69AcJdF3LoYabbR6J22rqp",
  "key8": "3Xh8cVSCEfyU9SqNStPPUE7u9hQ7vbWkZrEpydWv16jdWmHyvJNA1NgcVNU2mR4kaTLtgYRivZXD5Qe6nJZVy9i5",
  "key9": "2Ymar86y8CDP4dGmxFgLCR7QKeW9aW2XpRCdvVCC8pCNGNRQoqy8H1CkfT7brLTguzPw1RPVfGK19qs1RJgozYG1",
  "key10": "3wFK6KmKwU1KtoauhPiPcrCL9Ds8z2vz5XU2H7AZcyAu2HZVJx3ue5Bw7VfEskwpnuxSqKchC6ZMSQsPS8d81mfa",
  "key11": "4MfhVKE5deFxaz8bhMmmAEHqXzaxycntwKHBTJNA3eD5FjwhVbvYDUiEWtbhdSUELv2YMMWjhnDsN9wZmoBpk5Dk",
  "key12": "3nUzBkA43v17qU6FzVRSr3rbkZWTRhLWqxxPTH538C3PoEHvXcSNWH5rX4Nmu4ARqgiBSDJtedwrCpmgbgLf2JGy",
  "key13": "5qsjuf7LVMw4Pq9vyrZ1ASwMLxqP5GjEeFQg8uToEVaGVFMphrp4hpWEU6AtBRsRBHewNt9QUgXekyMQVjkpzPfY",
  "key14": "3hVjcVwqCciqo5EPthKuLYxMtwE6zJzvqprhgzXTHoSm5inwq6KMGG8ziTfWaCrYPp7PXk4BMfnmV9wjRWCpm8UE",
  "key15": "4JMUnb1c9dbEd1Qt6Wt3fgQaSZ67CraVU8pYkWqTjFNJCBKtwtQ13Nans1NTBdd978fPhCa9FSQiW1VWA3JE51zE",
  "key16": "z37YoxQDb4a7Sx1wVC9r4M8JPw6RJq2J1wG2EaFgTNuHzYoWMsiS3sEfmi3Zq4Cues13aLKv8wNJfdhPfabb1zo",
  "key17": "2wdRrDUpoWyuL2xMsJBigLq8zk6uyv6oyGtx9CrvbYqr9CdCHfa3usmMjGFRc5jGcRqrV4EaLS9PRcsPWihHZLkY",
  "key18": "21NEPSUXVYEqH133RD7H8mpfFp3QnbRVgYjbcP9iQna9e4DT9BthD42pSUCJY9Zo2H5ygogM8N436ho6wVgxDZr3",
  "key19": "4xGxZUgtdwbXQHMDDohZqAHBF3ugkCtium2wqzz7WTWmQWFAsLmDur8gQ8Z2MYS4zVu3u82u6z3gXQsLHDvrVAK1",
  "key20": "4d3u1C41nskNyR2FrV9bM6ZPKHfzmK7DRDj3GfFQ2Vb9wsp3btKS6SLpfUYktRag9XS5AJsou67oWuqCic8sA399",
  "key21": "5SgckLJDA8XLzQmwaAdCeKr7xHqNzxAVQWjp6XPyGNMeR2CgA8ujf3obHTcsUq3FJXwV3aacUwern3VPvsAjarnf",
  "key22": "35gLRc8GwmLHZvy6EJ8naSDHPwQQXMwEiEtZhCxtfyuCKuTKFsG7mBJEgjodrvjQBJ9esrpqAb7ihddowcxYfQFh",
  "key23": "3CcyiLNTZSh6bTd3LWBSHABGTdko4RdDCAeexV1thYTDZxF51iE6E4coBq2kXGfCPUGxbQPCsk7qjtnKkZmPDLMH",
  "key24": "3cb8feDqeS5MT3p4U8w227uHS4zx4pzgVSWTgFuDFpChviZ6zfepL6Hj1XLzExZmHjGrsJ8V8MQ511muP7XTvFgf",
  "key25": "4tyWMNM1hhkuMjEfaxfbhgNenEq8n4ZktunNnsdWwp5HFTEuynA8W8hAtecPU7za2whA8WMSSGCKd1X2Jheqs5iN",
  "key26": "5facsamyCTQn7dHpLRtEBqYG1WWv4jjbpMrh57g3WSEtd7cM9op5a7t8mq9gUMGeDSCgzbHUN9TeRGGxVE43B2yK",
  "key27": "5GUGkExB5QihBMUsY94CJiukZRfSj3KTXF5vxKun3RYeF2Qpobh5gazo1HA82r8TKDGim5h1p4jtt9xWgf398Fc1",
  "key28": "48L511yGxWbijH6o4E9McGLnjqUPDXC2PmrQhsstrkWGSpdXxWCmjhcfYyHyzokCevmfRXgK8Hb92mCYGajnw8k2",
  "key29": "4UjHBorm1GWbXZUtdbMLPZmih9KVzVUyd6zVt45cxrbMd6ff7QZw75tsP2xqFpiksoJjLad9jaHjQ9zPznNJW8Rm",
  "key30": "1SVvaotZiGH7XnBE6Eo2CF3Us4rWSAi2gmtZMg4VjiqfMrgL8E9qNYgK5yrSPb7UuScEc46TPb9C6iUy2pNhLjR",
  "key31": "4Fisw5QcmW1sjj119EJdFdAWwKb6c53rhNmCSD5b1WUNU9AU8nfQsiRqU3oWThwJ8cG4B6Ur5Y2z24j9WU76xF98"
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
