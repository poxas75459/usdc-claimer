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
    "55hEanpFeLqppMjkNFDHD4ViaB6DQXv8KG9Liuo93HiJkpDMrqUwvrhV5TwhcaBJfLCNS3hqQ9KY51haQ3kyEr2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m3D3KFxo4DB5SbZ5ykY9ySig3RTHNyQHZ9Dn25BsaKr13MjyirNUPC3k7ajKzPaYVgyQLWZsBDnaJS1Bry9ERr7",
  "key1": "5D3o2Ei9JJkBQLZhWQmqBNUspxEyDNtmp5oqyDpZVgSjJr7dBGdZ4U3pEWoQCmYeLPgzQwUpkZ7mCnX12j6fhP2u",
  "key2": "3wB3G3eb6xqiu9JSaKbSF2MahggRZGmUAc5Q2dSnYyjtv6ezWZ3mVxnY3jc55vN1KxEYYrojRCVHCroEnvv6DbhM",
  "key3": "3FGj6xPbwYFkL4AQ1inS1FggHcPPyH2hmL3zb9uR6GZgwhHx7v85WHEnSiCUWC5vtDWTg7XUe9U77QCa526ebJ5p",
  "key4": "5Jxi2oYuCdxapwphQjhm1F6fNNirwjjnpgzjotgfbo98jP19QCuyHctkUnPkrmZX1jfCaX97EfV5wARn5kc7Wnq1",
  "key5": "3MQZiBrYKurwc4xtLDhUh6vU9ytjQzkV5n9BCucE6uYJzn5Ciu12c9qCzawMY6UMTLJfyVmVBXDUNzrrjqaCRw8a",
  "key6": "2vJcvWc8Kp6zrcaYWvzFkcKzVtfMffePEMZBQG8EeDyRtKcpgbFMgsYpw4X3NRdLEfk5hmhZrAybi8cjxD46hghu",
  "key7": "3zFBX5qGP5EJ1KtpbdDQvJuBEiezAYEv4Ypfxj1CjnfyDaRB35kP5UbbUTo4iQ3R23NZfZ2dPqUQJwpy3jKv5JKX",
  "key8": "2yiWWFVZWaXiHWnim1RN99y2KsCj3m1SnSaLVxg1w9hDbR8qKYZiCHsEc9myy4p94DUAZL85cAvhs9FY3rGRetHr",
  "key9": "2Go9KhZpF7K5X5qX5eXGqUFwjxgyik87ZsbYkVXtpdnQGK4LvseYi3bRDBqaxEa19PtTTDUHeQ4osEDTgThgCfLQ",
  "key10": "22ANorjRwTjPYSpBEQ2dwYVDnQ5tX71kFAENgqfbTJMbwZXwMSc6pKMnMccJc8D5Z6Bz33yJttfj71shpUiwuUBM",
  "key11": "24AnmejDu2yKLDLP83wv2iJMAfaqMirMmsvsM3fxQj4MXFjUnn7GN9jTmawUy21eduvemavKLLbVx5gxdfG9VXmC",
  "key12": "sNgFBY6CySKtyVnvQtnMV8KwWjutUY115JVVSiZaq1q77VK9qnj3vNL6xDMbRhhWrdt7ttYxksbPKUXjRexuMCU",
  "key13": "49xwpDX1LS2Uu1BV8QjvCmP3vEkXpkXoLVpMFe75wJ515wsgYgfD5awTo6og1FNbx35wmYGi849EdhFhD7tKJfwf",
  "key14": "5YeVzQ3F2VvqXpJjkL4gFZRttaAJ8UW3rkD1yM8CUsVRpdTFFQodUNwuXCdWZFA4BbfFvmDw3u2XJ9aQJML7U6Ta",
  "key15": "337szgUyn9PnzD4NTR8x7xPkGHF7M3T8wb6NivYXokkKqyXcvh6Xd5rQ1PNcR9hEm868huecavZWafe1a6ugAb9B",
  "key16": "3PLJaXeVcQ39g4BPm4AK22EZg5ixr7W27DhcKvvDJXgVyinYJe7PRwF4TMNU1e78yrgv6G4ajBukWPbuWFGrhVHz",
  "key17": "8znUW89atGdFLkiS7rkDrdAxFAE7F5B1efiCpkaMTu1WcAALgEnLAG7anwZkJ48codBTyTPhMDcoQ6NugiVSagm",
  "key18": "3xw96hhTC93pNTcquGQPF9SdFoPPi3sGSo9XCbzz2PKpB6mUPvWMeU2LmpnHX5468AM6iPHfx28DJno5AY8xX3Tr",
  "key19": "3PExj76JRH7yiTQf1oUC8XuS1ZjgkCY348v9KK9EX2cBQJQuZ5sjUPSZ3phMurpr5W9BsYRox7y1Zx1b54EQucej",
  "key20": "2hqHhfKJB2x8c8ZYRg9mGYECwsnoiXWJC94USi84xYU1tACMZPVrpL7GMRBvhwQXVhU7yyRWksVXHhe7VdLp6wy4",
  "key21": "fhxrpZLC5vdmebBaaV3QjjjzvdgXs8Jerxd9Qz7BvxutAYzryeazRa6vZWMhSVGGuv3XM9X7eq6yV7CtEbCeZ4M",
  "key22": "5iCf5R8a4aeXZicbrpMEDgQgbHnSVsedSJ7hNZRYWhMYUoNdhtPNu8snxV7NF21dCPkHbuuExkpcyBMEc41qPnDv",
  "key23": "bjK5GsBQ9DToH8vfcjtDjvA1hcFvyquFJ6SqV5wqwcJPQNn8yXAWRC9Yg9cDQgHz2FHxZ3FMN3Th2hKgEjEz44X",
  "key24": "7bfEhxPJ81SdLiTgJzNarmeTQiDXuSYk7AZfFJeQs1ibdkd9e2z8BPjyCg7F9iqcVJQmPvCiec9bBhBm2YuUdjT",
  "key25": "4jD7SCG7fpm1u3fh5HuKB9pwMDPva82fQeAyz6HgA9YiNBjEUAZqx5wTkCpCCGbBiETRBB7VnHmbMuN3jEaY1Znr",
  "key26": "2d4pmU1TFeMh7ey5mc7az2gRt9Q7eVVVvfLEusqxxzwJ4Zduk6EKcaNDdUvtRpJTm6zdau1xhUHZZhXsJxyvWWas",
  "key27": "5SKekMjDjcNfTMUf4cob3rMyyJpyow2rZCV6PiQTNpjZWktrR5guczLrx2pi4nhWcn2NtcyoRSuXpiZ5bGFXWjWb",
  "key28": "5iZrkyz2DZpuXGMPxxgxAkfBqrFTHueDgraKKQvYyJanMgoCFHpNLZRgESNkYm7Q3Uy9yABcjkycHa6xZ6aQmnUX",
  "key29": "25wbfvMJVHDDNDt6wyRHd3HXQ5GzsmCgMf53BiY2Q54m4eLyaG8Uxhd6JCs2Ymj4NN38e4xReB4B9xE5aq887C2t",
  "key30": "3KnETnteePFQ9yKgiC76kHAtxygimgjiJ6VE8wPN7RGM4AcDsFmDmAAmb5fu6Rq6A77PLwPooKUhTFDpL9tSJrLP",
  "key31": "4STvj67gDetbjJF9qPpz3E3xcftBNa7gL1R1MEAfvrJCGyYmoLda19ewEoSHGE8rPcz1Nq4SREP6b7XELDHshVtc",
  "key32": "2ARGm4bT1Vssg3ZebzEVt2avTq5eCZK6mmqQ5EWwPXCX2y4fPP4L5TrLzLdUP7br9A2M1wHcwKb5T63ECShneu7u",
  "key33": "5BdJo4Nzrvas5Dr4EA3aXC8DnpnRcmqRbNZdzbJTW9f47zRjj6UdADxMMBA8joSLdnow2zRHW1vZFNCEywoufoyB",
  "key34": "2SpsTCZsPFQZBm32KW9LZu1AZNDhCyuRD4won616bJicwCCibJHpHiWHYr9DMHc3EkZs1ACDUGMFz2dppjLhVWKy",
  "key35": "4GmPK7MmjMQdxM6YPn9aNWxjCF99QoQBYibv8jphE3NkhVJnvsXwdLoVcefehNrUbscTB4bp3T58NKBax9SsKNob"
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
