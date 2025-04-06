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
    "2MNDYCvZKoMP5S7LEzd3rDXJ9qPfTYnNe9ktP4p7982HmjBnbX5JHTkz3BVuGkJXJYdcLGktLiPqqcXawR5EoGNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwwgKHqCMCVAq3js86um7SoMX2E75qYE1xKiPaPb3ZQFCxCw53pS7i2xaw8TQieobQ82dWNXoDSK2HWkioZiEyk",
  "key1": "M9UNa3DMAk19VLiwnJWH7cFTbc1o1bBcwi84FxJzqAnbaio78z1cjXmdNNMAuc3qwPEEjoeqXfnXGN7DQqrPkEz",
  "key2": "59GtLGg54VvMv71zFsp2JSY4QheYFoBSguMDSyT7qS6ZPnJtrbZDfRoJm5jufsdDKqXv4bunGRGxmVUZp8gzX7QE",
  "key3": "2bra9TSvW42qqumXUV8v5ud87NfJ2grqGgsoj44b29PT2dkEL3jtSWTuq5h7zqK91jX7MvUm7NHf3DbvJrFKk7mz",
  "key4": "2ZZ3kpsDGYeYxXADjywJoj3bpomjwgp9xnTcrxAq1YBAkDtqDETZWg4VW7D4un6ZgxNj8yjVgeA423rB2CP8MWym",
  "key5": "5kW7d1rXKEk1WwijcyaPeNw43gXuxypHCHXnjCqhwgSLsCidRJ581q4YantVMNE3aySEqE7i98B6k1kirAGxLkN2",
  "key6": "2Xm8aTvtnsTnybPv1v45FpHJWfzGdbufgBUQexXHAiDbcbFZnKJhmEAw4pp1ZF1hXmMyQxszoECsHnE3DSPBHUoH",
  "key7": "5wLLn4hJBGimC5byZEKwM5MTu93nVm9kREaRy6dL2BvKTU6M6zEryHqVrfkCv7FKdQQc2oeANehmWh3HMr8T8Gs1",
  "key8": "3YNphLXTfgpnPwYhyotM1TgbEhgbTsmrek248Ek3z1CLsPvJNLwtY6b1LqbXm73mwW6E3YL5XdNHvp4KXEawG8hQ",
  "key9": "ubGJCuQ6UDm2GsMmxw6yRUuXouConotVFwnAJXwjxZit3xKWDrLdwhNcdQr16vutYtXNtZqBxp4okV8RQXAt38J",
  "key10": "3T6dce9MCHsMy6p9gH7HPYp7B4V7reJfeHTmJoNmVP8NAbKMExVELHAzXErKDnpXSo6SMLgfFpBJHR3c9shmyu1v",
  "key11": "4qAcqnW7ezxRMxAWUbbE9YrYhv6tDwG49Z3boLstECbQhexq3E59a486ahK7nrGR5gJHnZBMttYqA7QdH8un6bTi",
  "key12": "5MgQqpsnBMUFptARqxLcZ895KdNZdNqkdYsbQMbS7wGkqGpw7bsWjsF9p3e5T3eJcfAvwUmRCmj2ZCvQbPVkSqer",
  "key13": "3HnQLh916iixaFxZyhi9y9g4ZLukjhgmr3zXL1AQ7JhBX9qus1MF5Ru2oxHbA4pSPSVfgDbKX3HQdWujGkp67eEz",
  "key14": "5MWvkeoeYiYyThLDKXysyky6G6SLqy4LndUK8D9TbQzpz4xSzpzMGdZJF97gq7B2kuqkEcFKQ3urEEDFCAeJjWaG",
  "key15": "2s6amW6mtodcav6aJZAwsuwCkwTskn12GUcfuLJxDrypj99JdmbxF1MHv1xanwD4mHxsp7oyQkRP3oiHMuk9ufF2",
  "key16": "62mL3JNso8zgGhXqLC5QrmeAgBWtKFhBxuF91z6LNwRKpzxqmFzQ4MKN18osA3EYW2VXWfNnwKp4j2x7d11aUJeB",
  "key17": "4V38CM7DLGTjNJ167KEUBZyRJXyZ7STEYhEX7S7TQ6Djd5oV2YEdA2sgMsUvFgAEdxYQirFqLB5ReDJxANR7efjG",
  "key18": "4XjLng4miXi6yNn3pFFhEoijXoPBaMNjtmdrPWGMGqXbq6DAnkaqkmWR4HQ7bN1etXU7kgdZiyGyrUgT1eWR6xeJ",
  "key19": "3RhbSgJBkvbHvbP1UdsmxuPshwJu2wHQ5tuZ5HfCA8ahwwU6Hzdy2ZzDtMFQWv74PuSXe2LN6gEZzbtYwbd79WxJ",
  "key20": "2SvAQ7NQmoc1c5Gcf6TneA3WoMCaEfseEvUTjxHsdrBzgPdfqLTUvZbipg7uCyHwCLMicvndmEQoDPuv26rxt6xh",
  "key21": "5QbUpAK7H2FxdcMMyBTqNnnTctJK6o2SLuDT81PMhMpN3xK8MdjYTtfQseaz7E31hj3BVH88KhVLEDivtguTLiS9",
  "key22": "DA7jQzj5ZrSRUaNVWCTLPCixBNx9pnUuLzAKCrror7pHzy1Taswt3kxhD2vkY7TiBW8qBXri4qXW5dE1TYBSVCQ",
  "key23": "2M4b65pXLE1TJNLw7W6vgzQYMA9hmsG1J3B225Kd7eRMmezD7wnTys67ULxMhwkHAX5KC78URHHovXP3t7uNtZ3x",
  "key24": "VNXDAeCury3M4ypTnGG6RtERDms1Ug5j1TdN3xD5PMDsYAhsxC7Ehv5mAMMhqHTnch42wEQkibiMVZsWK2ZwKc9",
  "key25": "CYnJGrGSVLuxYVMXCGycr5F7XPTkjKRr87wQ7GN9KnXpsX545bd8gHMNXD8kRaCdLW2HvuWSwGo7FatoK2EzDwV",
  "key26": "5UaS3J66P5JgXhFULjPAugUA9Dk1tYHsGLkHP1Fq4sDrfFLkhtuTgXBQPkvjdcdNAss9suZL8ZkaQFvySvZ8tasE",
  "key27": "2qtBjApHvpQbndmunPQ9HH8gN51GUGDo83puoSBG5nAheDVf9E79NwxdRaQRBL6vEgCoVUMPfqFmv7BCc9C82Xhv",
  "key28": "3fAsHDgR2Ta4Sv9D4ripL19zrab3g1Cvr12SRfHbB4PEzYVwaiwGuWkxpT2GxVAH2eA6AZH8iuAJvjoMv7h5s8Yt"
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
