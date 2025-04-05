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
    "5cgu1BrFStMqXujcPR6HTJx5mL319ZwiCmxgitDHTiUvRZ5VucreWhawWPSJUToRX4WKKAbBf3cThz9imAnGVsa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vchDJMcacDwmMGThzz9tp7Y9C9g6nfpFh5RhLyDtswQ1PEpx6jUnCEWVWEB4ABpMwuteGY2D7HnAaHXM7Q3gz2m",
  "key1": "4TMMvFZd3MVUJHkVNSphncK7unGJ4fvnQpPd179VQ7bECVvnZqWKSuToA84dPwzyswzZ3XJgnJVVDdQMWMbvi42L",
  "key2": "4B5cYQ2aXc4z6MSTVn7up4nB3wC5SscVhaiJmzSqe82j6ueHtVmfQDcwFziNbMqpAe94Kwk8yJ9BwhkEwJYcMsC3",
  "key3": "2vBvGsxb8aFzirJP5TX6bWSFD7bk6XK62YQv2bdHKyRsY8tGwF2tb8LgmSRnGkseZQV5GWjKSVGnA5jtuaYyr3HH",
  "key4": "3ciqX5xr5iJbDssgc8WMoJhoLum72JSHVtHnC4DDuXHAiUDfy1miWMjYjdnCu7jQGyneAFAiCzHyrNkMitQjYqEL",
  "key5": "2pk4pVDCVAQTd1N61BkJsNxrCYp1cduY9ycTMhZzE62G7pB75KcVTwDNCETwv6kdv1Phrf9wk2djTVntudWWUApW",
  "key6": "TFpWHdjC964qc9g69qAEDjDjT4TzcxCcRdCWPX9zjvucycob9GsJitCUC1u1ySXXRvMp3kH7bw2ALAZAgCLpxe9",
  "key7": "3tN5xT2iS6qyLz6AtGoSWauooqSdwxsc2qnPL5dPhakUCKPanSuMRFXZoKMuHm13omBCguhg18TMyJZU7x9kBtfY",
  "key8": "2L6tN5Ztm81MDX4XVgddToEfAZJW4a5Zidk97KvActGY2Wr1gW4Li4xvbq3RVPdumVx3ckpSahqN8GjGKgZjutyp",
  "key9": "4eE9V2vHLDE4xvL5iRmhUzy7kXMfebkbWnyo9kZRibo2jVbiUDPVhmn3q89F3yBZk43GWvvgSEwtSaQ1jMfkgH98",
  "key10": "3o98Rr2fkE2ytNQjeWmg21H9pbg4kh2DHmYMNpE6Ccy1xmQJRrMXvnKnRLtAJZ1dXY4BRQJbLXY91QUcvEtdCVDV",
  "key11": "gubJ9DrGtoCTYyD7NjyXYfcMqL2YCLkU596NXAKiNSvo2PGoTqHLkyEQVsGJdrunDX6i6pBU5VsSPVncWUuPiPF",
  "key12": "2H6D31dfVuerVuCwjYA9byQroLjoEYM6czjiiwJebkr3byJVAbPZeSvMbgUuNDhpHfX4ePF9qqXiZH6G3GH6zFBW",
  "key13": "4oVTCAzBWGddYkfy91HmjXrmaZsvLWKjBHnDCXnZb45rA7Pm7GeAfSfhCYh49BSXqUU4DAEEeN3bBV6boTthYF3Y",
  "key14": "67hnuMTyn93YAuSGNUjRrZtW8ZEUonSigY97gWiHWAPpzthysUjZx5i6wWCdjH6BhC6KLuxUeN4vWfQfTBcsTrL9",
  "key15": "4E5Snx7ymizevG22HwwY4Sf9g9AHc4Z7sdStKoVxXwQVQAoFR78JwtSQGMpVPsKG4EncimfDq4k3qoSgckABUGqS",
  "key16": "2spYH8MpFtmsHSgcbzVdAR9E5FBM3J3S24CzFcjKuKjpNWCyQo2vB2Ryt4gbUiaasWqdk4izqiDEABqQHjFcoTWa",
  "key17": "5cAUChR1bjcofwdXCbeG7kAcX4DRLxrANd3rRFKZbKvKDoL8Vd21kAaEccLzijhxcC19CoCv7WN6KC7kpNhyjeo8",
  "key18": "3k3TNDhLbbP1UzujEuZf7tZcwKt3Lj7n5FfdEwTXXTdxoggAyWqydCK6CCaPyWFBHgXbJpgjJApJ124mwLeCiK3w",
  "key19": "3xFe5tSGAEU28EgiNNVFNLLgSZZ2Y5Ao1yFEVGcDnxsvGgywbNu9USewNgGNshQDZHttJg5czn4KmcQzvu4CHSVv",
  "key20": "57ZtQmVnNi2XKJ3FSa4mL61vToorq24D6w8C9RBTTvToNd41PWosZM5hXV4JFhTUfbvngXn2d9omN9DUnnQACQP7",
  "key21": "48DKyjihC956ZEUyxWp1ZSZcPahC1A3PFwXYJnerGdY98CoXmTGmmSr26UsKLSmQGUtH9hMvMHakRBGE5gPZGGgv",
  "key22": "4ckBDVqnJmwNGXj5Q6vJzDY9ubSDR8963jyRPe6BVv3nEjpy92SY888BtuJP2MtGuBKimziBJzjRyfCfoHxzBAeQ",
  "key23": "3dYGNWkkN86WgWP4SMzBkuKxbHr92vYDYobg7URqUp4MEft5wQxDnrqLacHW1gR1NUHrJoUWooHJpmMA8sNnxsMb",
  "key24": "4VxQ4gacysMi8UNv6RSPVUFHwAkmYo4pX9MZfpCKfaR6bcH5ZAEmJgfzDVj9fTyFJe7aFs3GaSKDkPEd1QjJZQqF",
  "key25": "2eHKMPtBHBq73FYwuhe6cfo4MAdvcwddrRTammYjJDFy78b3QZVj8A6EkFARGo5bqkwGq8M7BYrN6R6EUpdCna2g",
  "key26": "2XMVFjfEA72cp6c76afNRnJcyMDDkHznfZokZVHURUTVvkyyHRUiSJLDEMP7Yu8YtR6AZDZ2yyi3a2dDFZXGC2VW",
  "key27": "5QriBhQredRvRd5uwovgemuvwEFVQdhZXarJeDQPjxrUvv6BdEP17E3k8VP7XmJpfwtuBSGRj43tHZVqiUEfpbnN"
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
