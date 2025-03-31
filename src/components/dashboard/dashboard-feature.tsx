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
    "4Ytru7DNurdEcMj6pJ97YoNiT6pHqQ2yoSoQSk2y3NjxjBZi1vKzSsHPFBy1KzMtwFB1j7QAVYL4EVkSekrjELyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45cCmoku82BzrZPQuBvrLsZka5WBfqv7WnvTSpxPB1akxZHZ2yKd29CwM6Bb1GMXyGsh7iFzpxhV7sTJm8imy56C",
  "key1": "4Pvbhwf1DSoTFdxucS2go2KEopfQFCKkznxeyVbb18VZ7qzW4CEhbcmszKRrMLGa4rzrZvvpqvUCHhEiJRDLFVVF",
  "key2": "2XZ2XxpEmq765HLgYnssziYZcUWGMBZ3xisEvwaaZpi8tVAoyQEjkg41KbUf1VEU7xcjqr8kZ7jeXyNV5zCxTYib",
  "key3": "3m1o9c9ifVYiJQUGBcF86SjuFJ1WuGHdDuUxF7RKxiVUEqR48fAaRdpZPZrCCzgu4J4c6mTFDb4wLhNLhacLNUiS",
  "key4": "3s2hGh9v6WaKKBAxwU1DrKwYoY3qPwpTDxCroyLHVwsaHcVgJfAYX9wSqnfEvUUYhwVN1zKHGrkQAQP7FUELqfUg",
  "key5": "2uy2xwFTKZpot9fbncKm5opko8PHXrKbKoFToPyCg9GQsbHbvN5G5GWv8sGcNpoPxZo6uro8ZkzUR8A2azeARjZZ",
  "key6": "3CyXfh53nJ6EKUhyNX79fZPxNfdyeCihxLDXGxNZDLkiVKSLi1yHqZ99Um2jGdKGpbvafPF482gZKpirAijpY9oK",
  "key7": "4nUKLgLGYagpVsRTPLhKF5JWDQqAnXkDhczU2e3KB176FfBVhSvRqbJeTaL3EBzRjbJwYBVijeCm21fUCYad5ebL",
  "key8": "4F85qe4zzy5x9THtX1sZvTzZruPAgGG9KufsKom9vpW5pvcD4h6MgsdPgMEEY7LDtJpdAZEnukcbCeLj5SPEBcn",
  "key9": "212g6s2s252TZxnRqoUQ96angV4doMiqcViDAQZyV8sWEEoASM49u8XarzUmW5amtxqsi5YAnqcb5D269i5cpuJG",
  "key10": "ejvDQLp672uUvFcfryDN5UnZweXnTCMZ3gX4Q17L2vibQjTbXErXueiWevJm7piGoxnsDVE9zS6Ghrid1yuEESH",
  "key11": "2etDcmiZnxHt9M9hVQTJVXAbv932wo1V7ySkHs62e7ALpc4ZWhKwNzFSGUaXJdBXEQeSvDv83XkwF5NP9KTdeV37",
  "key12": "J3JzxgpNSz3CTnzG69SQXREQBxmeejCWSzE6EHqpaK8MyAegthxu2WNbLfVDs2tY1doDHUuzzjmhWXCQ8HtonXJ",
  "key13": "5bkW1Wy3ERVpvQurdG98Vjo1ranEUV5cBrgSDoLtLGLkVqPRSPSxsJoLaekHBeDdygDAk9Zir7D32Nf1Z1VVyvaC",
  "key14": "59ZzaBQ4ta7VRFriMMHFFj3C9EgBkg6za2h9x4NbrAeMPDsdhaFF87uHSdksfsYhqPjGKxY6y8q9cQMFXEb5QYAB",
  "key15": "4HhnS3ZeS57r3EGrxRyYKxALQeTvG85349T2xjnEBTXrEiowmgPV7ENbGWbvQhSHjS1JhQvtFXb3Zn2JRMxDd3G3",
  "key16": "4stSYSHwgwwyb4mgjKLicZjeNdZDta1HiG2pB6m1e1s3N9QzuXP9pMrHSYi4Diq3XG91tkiMYcGNLPnedKeSj1Un",
  "key17": "4Jku8a5LCXZipy7trszpGC5qQ4kSGmzMWQVpjLh8RbS7XnPWGjeDLPdvq4DA5cq4Vv21wUq4gv4AMT2Ym2j9ccGy",
  "key18": "3tGWD64vVuj5hTbPt3hmYfb62ScMWKZSBU2QFSSpwXNLUCnbyGB5Myk41RdLRw8HZvzYQv7EtQuHt1oLN1YZxqbW",
  "key19": "8h2VyFadfKuMQXZyhPoPRsnCj8zSBauvRnDdh5cjTczgF5MHyZLTBsFNkLCxrGb3f7qZfHNWfaPFHwqrxiTeC5T",
  "key20": "5wYaUU5MRNR4vxXwgrzqL9Q4aJEahJDRA1DjpcXTk3iPuB4od4ozKaJPTNNTmitRYeAqii78g9m2ggpZdN73iVu6",
  "key21": "3MbjN7d8xa97qRdK5nXfZreYZxhGpio9bMVYY456XXStgALxiwZnbr7TpLboUXJPxmJgjQ81DwXocjMXKcJ4USVA",
  "key22": "2aZHR8FW86YkyAJmFwRA1gPzR35UgJQBCp5in4b1ZhzgTErDQp82zfCS8go973DJLfpypoitqnwFJvQYQ3RDRSf8",
  "key23": "22h9ZuetaNGev5rK4hBkZrVpFr32AVntQxg3AFYU5AQM88EcBqrrmJiVqPuujHE8gTzJQKVPRrFbuCWYMNiAPho8",
  "key24": "5xbryz1ooMJXecjtXxP5qZBoQqPLC9yKoeTBhFEGYA4t1gYUef61EHK4G3uj9dtHV9EQJEfgtwu35ZA6AWKU7d79",
  "key25": "5FrZZ4yig1vKv57x13StryK8gFStq1JijyWaqTfWkx1mqoSPSjELkLHQ9KtPbPVsciorEpU17AgLhsVx4iACH5hq",
  "key26": "4vh2Cg97VazBcuBC1dqthdyY6eJ7PsLrxW2GwfswV3kLo9HS1yPF5zF58oCooZmSW1XLJSzBxNs9Cqbj8UGKCtxt",
  "key27": "5F2cTtFUs1o3YRAcAkwaEmWayYiwmA8neZPYKtFRoks9kFErN1SAnr22ShLyeUVKUWR2gTkp3TENH3dcZG6dUNFd",
  "key28": "4v5g5oVJcsagYB9yNCcmLSeiMiXzmbM24urZWHFTgfzy2ZBSExEkzLLuhMnDwXxVkK3NwbcaAptjRfBnpMBmmCuf",
  "key29": "VRMocDjdmSL2UcQL4e49UUgZPnEWMAd3xGSoGMhPsNPH4kmB33uanQtRXoXKqD3e1wBFedPqCgdwRR8N37NYsNR",
  "key30": "2i2tm9t5U3eBuFcLUuZ3J1Xmfpxduuk1gts6cqTm9To8QAUUJGnXE4cfft3wiRKjQweNwY41mppLhmpJt9Spo1bJ",
  "key31": "4E68T4pmyXqWZweEkjHrwZCkUXjoG3ZC3pcG8zJSGwRm4GtxVQ4HNgStY1oXq8kDNQMreMUFyVHpACx9RQ1KmTbf",
  "key32": "3ud83ib6Y1ctjNHe8fgRgJyLTYRFcakxm9nGsjodtkhTwzRsxTS1d2kdYCcbazQ98RpavFzMaH8YmmqB5KJTDn83",
  "key33": "2PnRM6DQH2ir8Pan1qVkCe9uZj5dsMngPhnfK16QrJ4JdAf1NEkYS5auC8QTZotUgUAqMMVWkkt9fZ2kvZsHRVVd",
  "key34": "2CcNsDHgT2z6xAG7RmvefT1Jd8xAg1SsrYbknF2hDS57GFuesvgtfvezaKcpq3uyGRo1mP4c7kCczTyc2bJBqCdd",
  "key35": "8PW6EGcKifTLyHsnGPvY2NAgDpN7HpLiirKyNFCbFX5ga2S7J2tgM7fZuWNGhpJ7HCLN9BYHCySVhakW73rfthn",
  "key36": "Ehhv2YyU6NFFcj9z4dwXL7v1TYj5hLokbHMuBaV8ErBKbaNNKbFBDcLebFY6HER5ZpZauhUV3tYtFvWrSb8pFxo",
  "key37": "2NLoLituskbD5U7m4eAyxsA3QvcGE2764pSHexAFqr3ddUqhwWki8WwpaXf5RC18Ca4VHKwjYb8RtYF8yB6cMdW",
  "key38": "4sy6vi5zG9c9DBbvxq7JPr6Hj424gpPkdrLNrB3QYWGyshePoR51PEogGqeLuEbqqJ7gRdcdN2M4rENC3TQB39Mi",
  "key39": "4VeuFEMyEKryCtN2wYB87rFwBocVPL8F2LXoAuGxeneiVEb27fNLk4KZec9fTDFYqME4mCurdjuLBuD2vSep4zRS",
  "key40": "thnJ5DFJZeYDMGC2R4wDh6CF6WknN7aQ2w6YYRu3cdnTtGonSnBHtG7oLLhhXegnpFNCnfWi54ENDPoFxVsZ7Sd",
  "key41": "5KNEiesrwkEVdkztRcxzVdNjRLayxCqBgaMVPWcgc5gwWTJ2aecBT6MFubYncWmgkwf9rFwzLr9WLMbJpJE3tepX",
  "key42": "2VH1bPCagYoET9FZ4AEvB3aQjCvcnZwFsjYkRRoriYxBnA1GsFUcJXWFqNzDmeD83d925EoSjEFMZuScGSH9wnPw",
  "key43": "9WREj7eKQjXHdvX9LkhwFP3ZPP85p3WvzjQQEQyUkUbT7TTX4jSAiczNZzyHpgL3kTfwT6kA7c4N7cb5pzNbHUd",
  "key44": "2719oNs952QJWk6Wr8RdSTtQZM3mCroTEu2GcZXX9CDaB2qNQFTdcUZkSc6G4njBxedB96dZBHyfJcDsJRxKvxMX"
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
