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
    "2m6sDRn2kP88zSeMbjTJvLDXmCqpMZyudHGkznHgmCMMXGtLJrrNb1pyp3uMjY1iHPQj4rVCn13B4MHaRntTZakf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDvxde3fJqxSJNH5NpazBhe1Sv1G6jxjmFYBNyP8zGKAR9rmwCjXxH1GLJeYFP8mTY7Ep8UFvf46yA52cV1L16v",
  "key1": "pqNVUZ2NU66tkjFxkWCSFSx6eB7QWhUcvTASttJ1LWSj5Qt7QNNmPurpCWPa7besjVbEsqrU5bUbUyUaKeptQ1X",
  "key2": "3P3RbGRWoyFpgPMZp67pUixgikyz8bdMumd8pdvGnjJXnutWAt1yUfZm18tDzGs8yEAcoiiaEHoJ3SwgZNgzDnEe",
  "key3": "2K3gs4WwTrgHWJ1ztpSeu5rR9dXzsy9S5KmPRZVNSqzPG12KeSaSGWN1wyFNP59t8WkDCDaMax1UvTfquicGggpL",
  "key4": "5LBD9MM1gpy12pcUS6VUiTWMFA6WdgJ2juN9vurZxnYCRjavB4AoZbMg8FhR5KxqqYnJSzSTrN3Ui1jaxvUiE2K",
  "key5": "2EoBsdasv1ELHcYETHfoeShAue6bX8sjdLihaT6jwSC77Zpk7WUzbJfj2ehxCpGbg71weVTsxZJmMV2BKUVc1txm",
  "key6": "4eEPYMrv2n2Ssr3hk9py19a3fZv3XLKmWMkbz4DbES1pX6p4yNBwuZ5vAW41WpRVNSRZe79U2Qjo5oAS1vhTsmfH",
  "key7": "2ae6wJozzMEKtg4SdA2dxmfTDX3vVw4TnN27YGhKwEZsNavmfcPcWxXtMQBrAzixbsGkG6SShzAKP51ooNTea3KA",
  "key8": "2zUZowj6Z3VhnwYxEERowAanjQ6ASf9BpcyHUUJqnVqufjELfY5sSnZBYd9Ccjy6sFGBxpoJrqXefAL14diWZUpk",
  "key9": "eonThWfuZ1KxSb3VYZWTA94ALEDkruy56mSHfbAUatdMcg48FqzR1M5jjxVEVYpDrj5GpjHmv5zUJt1Q6w31qbU",
  "key10": "4VbN17sQYdKwTYWpWrYfTcK5oquzdEm2pQth4XzGJgG6owSJvDt94qcbBBBwJkpmTEi8tqcFrJC86BC7JAYX52qQ",
  "key11": "4JDtmSAgTPFk79LzH2NV2RhzQNrkiLwMHfWdineKs8BNLnzp1u2xqLFUbrSkGHmww1o9XGugjsqTQn7WDFR4mGLh",
  "key12": "5eQemvV4mkF8cphvvKsjJchBrnmN2z5xun4Ki18E8o4SuwXWr9rewvbtePe5uJgNFXV6LALY8oYDw8Re631rKGWr",
  "key13": "2KU4uv5d6qpYH96uvCF4sv9PkYPR7kDn8P9FotzEEy3A9MeJEuSo97neWonzhZXd911oxSAM1Lonx6yW1NyA8ni6",
  "key14": "mq9kV6burjmo6j6c2EKyKhzqNVhAX7a3M6VH4QRNDxbFNPfrnnpyRzFK78yhn3dQ9pYEJmrNwiUwmVyfSMKQFCV",
  "key15": "3ZT7yR1Gt95g1XWLSeGNEQ1cDtG9fpF9RbsPLNDLfFCrTcJZ6MNLzkPC5B3GsvrFy5pu5ghXBdNZAkwePZzqP9wg",
  "key16": "4Eteo5GxzRZxPesnFVi7v73yBEKJ1p1ECcCkj3Vn3DjNBa1VxgpuF9ujYAV5vSCR7JvX5HkmoaexJ2Uksvp9BmDy",
  "key17": "vfxTjmwHSEMqmz12NwmDUAE57JnU6K4ZUVsGzTdaAxSJ8ZbZx6Y38rzeY4Jm99Awsv6dGkYJTYif4Af18hyTued",
  "key18": "2BbfCGxmF1UhVSsYk7S7TGYvgzTWDSZjFMCFbyfuFeqsoLfiGDKv5hHLhdkrfxXQXAAwyytrdsrScoEJ2ASVhDCD",
  "key19": "icFqjaPn4huWgvo8PbNJrgZf2NpFnNBdpH9eHMQmJTBTUBoYQpvqDDvmR71ukBVSi29KKYLeyQJiUpFMkHNLzSP",
  "key20": "36iKDErXaNJzXbMsn8Hr6mwaBbgpdKMp4bU1AokDGdnrGKk5hXBRCoes8PTw5MzPTD7ZCcwWG1ezzjwauAQWfQWJ",
  "key21": "FqZmDUUMgpyyaZCXXqtGCzutATNudDkgzPYw5un7AjRUtPEwpGr8puSqT5KBctm31ADiZy7M9AYNQHFby3N5Ccw",
  "key22": "26jMY9Me3oWRriCM1nG1amW94GVBya2KKp435C3D1XdNTewd4FFBEjPeYjikG64HCJQF3o4a2xwABLkLkzbc4uZN",
  "key23": "3hoMxfYqjcexzUecwTtU3tMyvKHoTpvwEjsf4fpqy6UnxNzuCMVR1PBVAKFAKP4rL8gDykTZXzMiScZnwfwkL1m5",
  "key24": "4Rdfcc7iwTuwrRVgMaost8x6WxyAxBVewuQa2qMUN6TBC7di4z9g1ZTmz6bz1goYHfPHMDjMuqB4LkAbH4QXeakY",
  "key25": "Ksa5eTDYi2uVTpDmjV9KyH2naMTpHaVPRKpdoxETweHFzYyV56gaVu2dxGXHMjLqZuSt93MX9UtRpRhdW7PdH5y",
  "key26": "NHYFT2sMq6gLrR1zhmrujos9xSFKQQTxq8je9ggwnSThL1dTCwLQDc5dY2DBCPBSwtmH3dhRRUofBc9BqYVqz1N"
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
