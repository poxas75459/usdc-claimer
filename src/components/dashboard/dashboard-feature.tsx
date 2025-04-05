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
    "6jVbjSY3MBrhaH9Y6WhM3iUa6b5DgQMiwWtqoqr2JYigL1AG5iDfwXDF1z4FfgNTFjJbCnEGyqdRy1qt8QFywkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kxxoKzHxwNjBQyZELphGxWCEpQK2PX1E1mE2bog12w3a9NX14oMCaEQjsJAb9kV8SnXMZ9YmjRMKAWpc6fzwKDP",
  "key1": "23bVgTUDsPHtu7rEhBPkf31XK8R26YKxVRR4saJ21sUcXTFBpbAawvathSXBeD74YffVT4u34ph9PW2mwLm2GW3U",
  "key2": "R5mssPU2h99BdQF7PQQqBTZDreD8iXCkS5MFLepddiNt5a6U3V4dK8ChdafXzQ9H6mqjzVU5pViH3qz4m3RpoSD",
  "key3": "2BuoX3ErfiLx7d1ym2buCBTPAq5rKPxYS6Eym9pRSQD8pKiL3hs18YqgtYzJcM9BRVxmzCWZryKpdm9bpjYtKMT8",
  "key4": "7djAVeV2JohnegboqsFuhs1sdW8s2Zi2Fv6EzdEJDf23TLAzkLNwMzw4t6SPhkesgy2jFQSoUi5Jnh49y8Rta4x",
  "key5": "4aCSRNaFKTWW9rf2WvbsegPYW66FQns2dLN7WgTyxqxoCVMv1i9A5fUPETtemtka58L2LcWnvNWhHiYP2kJegyHt",
  "key6": "4bYYmJQx63rLafrJD9fWx6muhBvmYJyBo2JVm57zWzvXxbi79ACfJCBtutr2czx1CquGNxgP6NPjomhLDzYGjHBi",
  "key7": "5wnBtX5NjnCH4VKijQumEeKRhbCJ4Jef5V6YRFStQynQbNfbY2xAwiTKn3V1pc4RP4URVtPK1xPWaJQRkKQx1L3z",
  "key8": "4Jc7GsfoPe6FKHxY2RcwhgTorNEvSQdj2CumBBqsdmg7nUcQqJxLi93qn6R923zqXtAyHg1xG434h6ArGNztBXp2",
  "key9": "AnyhbzC2NZv6Kd4z4HxN7GqGD5ZtYYnCPuoS1wmor1vSNBYqgtnFQTafPy1T9AaZMWd496Md1YwBfrEhCbJcQep",
  "key10": "qpFKD3kDcfmTAppksTck3jaHfpwhZSWCs3emaJMLkjnJq45zSc43qM1VAAMGrtd55ULXi2GuPs4z4WAF1tq1h7M",
  "key11": "2qCHZN74sALnPM4BZecgvycSdYaZXHWdk2Yc3id2UFy2B55xTxvdoyDqZndZM861mYZFRaxv1AtKDkuTtPNTKvh9",
  "key12": "4Y66GJGveYCkV2DJY1b2zSP5P6n8MQztAPoPzQ4HDqEAem8N3zYeKZYoRHR3h98Pe4quhpR7cTBT1ayhzZd3fGmX",
  "key13": "2Th5xTgpSEfTXZUiG3VVTXSp4G4HbLeJtNR7MtdxZxpmoJRnKt2837P5V62K8PJznN4rfsajJJkF6aNbBfqhNfeA",
  "key14": "3MFAng4uEQb5aeUCU1R11VDZn1C9GQ7hBz2dVJseK4c4buFXexMYuhwzfYPi1oRvDuD5DC84m1KVT5b3VLzS5xD2",
  "key15": "2AiHgUfdonLXtdVE87oi4invpNAUwHQ27fs3RKJidE6L6zjLxnFfs4AtsD1HUBtWSEbJpy5j6wL6rRyF9dRppZEA",
  "key16": "4DmJReLQewvdip8NLoySMZs2c6arQWqb2mB5x5XWZtbbHz5PVmouvLJZbptFhBxU7Hu2Hcwv5CqME7fKAMEpJdNr",
  "key17": "2YFQ3StaqZoYYPDmR7ASZkzpGg2YgEQjGDGUQXdtPJufuxs63MdHWE6DC7Rop4ygx8EYefUAPb3D9BD3wFGsBDVq",
  "key18": "4cZ65i1GkHScGYoXAiqq1X2c19AABtihH3XAFP2A6X3nMph25Lj12vgJXea1FadhwqqW4DE8X7xZ8MHEoiQnRTiS",
  "key19": "3YAPTyzN8U4GGYNFGboiFBNjqPpGYMYSA865P9tTfVGpyfWctAPTgbpKKADwmhTvaz2ra5zWnFQQDMp4f7MvsyPw",
  "key20": "5XB9CCFzdasfjzCwyLA4wwre7NUfqq1fwvUehF29NBQh5mVAVHKd1DQKTXNAb6oapK2HCwTbp2kWH7PJqQjWCMRP",
  "key21": "9Datx8RbRitYeVrSB3JC9CDdV5gSbWNU1i5BWU5zFbUb3522nr3BKo1AZFSxwUexPhK9AzB2pyWaqgY8RFMEW1d",
  "key22": "2VrFVyL1cwX8cZhcCY2rChazGDXQqtw37nX8Fx5FcgmsMAJYziTCibLoY3Cc7quSkWvbkEH2deyTX82ExspPUeKx",
  "key23": "3EUiQDtUYDyqu2rTzmT9RwaiTTYWhg4TKDE3XjBRAUV2uGjrDKkQhQpc4F3Sxin1Epqx8cKdvs855ApHpXCfPvAY",
  "key24": "5wgBMRFZq5wt6Ldy9Lu9poakjzcL6BvHHLeNxxcse65qM9m5Jr8ijNxGk7yqK1Z73PkGNKdZXjnQwzvfG3Lde9LL",
  "key25": "3J1pRv5Btfa4VBwhRaGBbiY5bdZWsCymKrp5M3t73jAYFtwg7hSicQ7pr4EZnswUrGrBby3WEZQwD7F3gXQDXvvF",
  "key26": "3qdmxmnVjjAQQQnaJ3pkMfXaUEuDeZ4pDAWzCnaFFiw1eXUYK33iuBKK3cZrQHGt7oZxTtw6AemouyoAYPUnabwq",
  "key27": "41pw6MeHyicDU1bFTFXvD1Uvi6yUpJPqmhD658Xs9iww63SSwJUtYaRMMeb4hoAQVHrYr5QHdRPjHoF8tZPagyPX",
  "key28": "qMxxMCGVH8iBKWgAXPZ8w5kropH1yu4JhVFS6w3LzrUK7VdpheTv4QhPtgBuNUTwrHFiJW5rryMcLiyKSirSRHB",
  "key29": "3HuhFqPQQnUFrwjU5PA4wRvDi6b2wXvJVR9ZBX5e2RNSK28ayQegjE9NBSfmZ9y9BYtNpUnWUZaihKXrEvYDiYUM",
  "key30": "3PyaVnksjM6Pypuc49p3afjspfWWCgyZh4iX5XTTM3fDqWosW2yZCt4JtAnpRGw1Ccj5eQLu9knVRGzv1W3p2Bry",
  "key31": "2QvJnx2SgD2qy3f4KT3YW8rRLt5k7uSbsne4HbP4C5fSTaVXtBEQDf6awBWJLPdtzpVeUcwvhAyKWTWNRAXtVeq9",
  "key32": "3rAAYbaotwBVZyoeE8Ukr5NgNgHS7YJvHuotSaCyHvhmeReMRb2JHHbB6vpZ3BAsE2SdcnYMedtrr1BcQq9xbPRC",
  "key33": "3p3v8WAN4gnRzJxcpbbPvVZMnaaGqQh698UdXL6M31gAB4goPCjCJ4aarJBsraL1k8TwTF7tubEvDEtW7YkweFnw",
  "key34": "5CQuccQVFC3WciRTb3JNKVyv51JxQsqJZnSZw5i1HmmnxG7VsVn9844VFPn2AxN25H7zNh6BmQ9FKMnT4KnJDnmU",
  "key35": "5Dp73CnutRAwdZZmUpjaqWbqvjCabyqgUZqQpdwEukSYHHTUrDHywWbVoyvxyP3gESTepymn1fopq1RGs9Aq3Ldp",
  "key36": "2jJKLgi6qFSuDEfuUiPUJBR3aokkqgqDBgd9gm5kp5kacf22dtxW8Y7J5Z2N9u2HseZBM2aeGnY8jfg8s8epWLPE"
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
