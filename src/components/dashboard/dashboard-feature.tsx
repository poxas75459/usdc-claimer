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
    "4Yu3iJ6x1SPGVv3xQcswZHSJ4sMC4kSGDY7SLseawEPSCPXrgKP1HHPbte7cS4416WGgPu7ZkkMqNiT1tFnGNinR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dB76TCdFFcJYhT5YA9mrHzDbHSkWBCjJGBLKUemeqoWN6VebhHQZja9UWMjBpdXHzrNx39f2PCSTPW44vYXfkM4",
  "key1": "3DRbHCwF69JmVEWwQJhijPMhvYUh1q56neouvygRtjyNwGTbgeqbnqZbq2mc7zWE77kBYLqHYYJVyZHawjuyP92",
  "key2": "5jQwA5sDNR4JxdqbW2Bk4UN2s9zmcCfc1retBV3BG49DRe9qf9un8KnH79ppHTwxdFHKtVTQqyL1PZb6k3WmJ3G4",
  "key3": "H3Yim4XrmytHYqBHQCRb1T8sm6UWcoKuYPMjUcCqdW73Bmu5moA8GTbTzSc3WsH4F93fRKaqnfi7ujATW3FYXh5",
  "key4": "5tEbsYY19UkbgGfhQytHD4Ki5VHaYA3SLP5i9CgcFxWjAjkjkd23YnvhVRy8nrLzbH8mNm92awXX79RmzcephHYx",
  "key5": "3Mxyr51GMqfKg6YVnwiVLBVbHYWQT4iK3kZ33D4YSV38DFHUbpyXHmXBmpwUiuwie539gaHazr5HKkEto5GqJyz6",
  "key6": "3h2jmkKXfR5Z3F9mga6j7B1ZvwtpYXVUVFbnw6cU92eM12KGSxgni8rcqByyZtmPFT6ebPkWNSciWEmdzhm8QA4m",
  "key7": "2SwoT3r83J1kJhsT231hg1b5SZ3nYLdQRrkW7ExYYFccHGxc1zu6r1UqUhCTC3nuBxk3qFz1MQDFb4ovAYEW1Z3T",
  "key8": "2XPtKmMqdpJBVR7VPvtnPojr4rfvkJ7mvWrzR2ET8TDK7bpByvVTuCG5NffutR2oXMma9yJYGnWJqtNqrYbZqMcJ",
  "key9": "28VvBp3D5coravkeUU6QifjpAm5hSp5bSqdztJkCpNVHVWeZEf7rQ2JnyKPhjJBt9hZkScsJLkUvcDLfpjSp27tJ",
  "key10": "2TH6b5nTezzmY2dRSCuK9f5whUXeFJS3jsUhK9WSghBRq5NUVytrAVZEkhXXzknXohzCbcvufGwVaNNj1h95BcUy",
  "key11": "5kbu1sa1RJZr7hn3CVcEuTeSdAMLEL7F7oCeGuqnGXwjwd8B6HmexQzwaMd99QLE4JiKwd1AyNSR2yjvrNmW9VAM",
  "key12": "2iKC4KYBj1hFeaPgbmrfTbF1RbFo74nLtJvJafpJNAkqZ2ZpY19b44yyQfqaKWZoHNPwWsfLgRaUkECk5TcnZ1nN",
  "key13": "5ij8PWtLALHcKDHxLgzqkq4UmLpzEKmuCy28QUfJnLTCumFL8hRuAJsXRk5kAk5irvxc6QCBR9sRty3z9VCkY7D7",
  "key14": "5ZuVg6f2W6x5k8X8Tme53Lv4Wpm14Cj9tKK8XzPpxiB9iMxMRA8kErtX2TpNgF1p7e342ufMp9xPtjbXssCKts3T",
  "key15": "4MkN2ChZBZmQHoDz19Nb6oXcp2RWL3VLeNHMWShURSnV9Qa1m6GYFm1Yddjq5iAG8hSVQYTe3j8fRSLKczXiVa8T",
  "key16": "3nLn6q3RcQqBoHyxp5ge8RYquetSv85xiR11R4Ph8MQ4KtjLnNBev6STQGEmzuwhk8k2cvXDuLeFr1NBCMjEsnyv",
  "key17": "NmrHY1UvBhkBuQCN5UYoYYrq82YcFvR7JGm1n6Aksw4iH3VMTvh1s6hU1urF7uNaKbj2vk2Fxn8fdg1j8jGdVqW",
  "key18": "4D29889RjeWbK5Dtd1E66vQFDN6nGehgN43huiXi2RTxWewQYNdGstsYrbvg9i2D8YEseEsXgh82vejL9gj1hStc",
  "key19": "3NEuisC7LTPE5qY625r4atdmzNdsZndgMmmxPcgainH3cpavskpxURysp5vvFCRfXLihc2zSZHG2b5daMNrT2KVQ",
  "key20": "59PcmpN9hwNrJV1MjtzujZnuXDWwrifmGQzsu5W7awFNkd8CKnkJgrqXrXcSqtTZvPNv5E7iV2CW3UZyixKg6w4J",
  "key21": "aTUcKLr1nu1HSBB1V3HLeZyW46NRxY34BYYYH9CQjsuyCwwDKAjSWXPQ5zdebK92FqdYPswaLAWnAhGzWrEL7K7",
  "key22": "4tvaLUTDsvHKjYq3zHKZcRhcFcK7BYEuAoqh9NhFgxbJJfR1WWVFMC6PPaHYwhquHH2x6ztbY3QiXx3ZfCk45W4W",
  "key23": "3uWw55BLg8EAUxxEuWgdTHdqfihobn5hy6S2k8V7n9VhqKTbMNJpL738A31411QxAq6oSDEsLmw8Y5G18L7KSfyT",
  "key24": "4joWdYrhgbsMm55AJc7kQ8V8PZzbHJWT2uxe9NvKe8n2RxFgrDP6vUtxZQGnRVWA7EDzaiMesFNAUvZobuzKVA3h",
  "key25": "2Az2LDQCsXnu319AnyUqVbn3Mww2iJi5QMHH8KQEmqFE1NX3uc9awbXcQ1QEyBUAG67oTDDeY6LwPV4WLMkvbUc8",
  "key26": "4wHbxNDyQJhnkq3gYP26JkXjC74XozTWjWfYVbtHVgYK4oP3F6LQ85Fz9iaNuUcBFbb4tYZLEYPaYLJGzdTATsoX",
  "key27": "3nDneeVJeX81qFKVWEobvfis5EPyZhHGxtibka8V8HCe6P72rGoNvLV8p2bF9sawF6TnSGdoYFekjtD33xGQouRT",
  "key28": "avqiq2BNqWbnxAvVcuZ7Z6iU8uN3TGNe6mjqVoXshYnoKgft8zLuxDADufgpNqtkd4xtfA6zE4e1nfXkEY4pau7",
  "key29": "qvmgzkTkMNtex5bodwaRKGeHFvDy2WysXGj4JVoogwUMTVY2oVeEgdT7LHPmPQYnjLEPVJQmrRhJSnoC5aBj6so",
  "key30": "61yswejmXsgTGDUi7LWRFaSWwzTVoG113dbU2vKno6rRqhQkBfvrNA27YkeydQw6MarspyQagBtN5Gm8UoFh9q9G",
  "key31": "2XZe4NzbGFzWJ4ctdziT6Z3vDj7644WpdLsme3HEUnc24hoyutzLvvJpX4Ao3XuiMEL826QYpE5K22bBH4hVifJN",
  "key32": "4gs23MDyc7nA9Nqc4VZDuRChqGhRyZd2sKeqzAqoJM9wo2gdvNRnHodvt8rwuUgpV9fJPmH9J9YSMxPfsTfkbGeC",
  "key33": "GhrbKdHfJ1rAbUNZ2DE3PEoVo6Q6pAeMZXccZhMZTBrUKb549F9UPhfpy8oyzdRxeLnros9iZafbrdLncq8TzNs",
  "key34": "5unGCx9ozmCppWN6Sp6giF68377KmZMK1pHcRUv9s1eFMhCZxAG8URPgaBQwzsDdCNFFxrC6biBumiemGC43PeyW"
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
