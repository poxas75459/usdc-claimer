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
    "5ELoaQhn5jU1GeQo3yZ9wDvFXDMygD7jhNRLWt7uB5jiHor6DmTqbUQwVVpHrWWwVCKL9tfRAwnSKbWVGpGGVUHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RozUg4hEFN3xB1peunTKNp5Eeefr1aFoRYkYXEKrem3u5wYrWmSBRvNaUYTCvEw2d9PpaPJN3ZkSSHvsbfEVHc3",
  "key1": "rNuN75xr7LYHxbHeg84tLLNhuqYG48yXr4gaQDPqPJ6dUvt1kb41Dri4SEDjEKBbEJUsBZPUnkFebcnbhwutYTn",
  "key2": "552HD8QP1jEEuiDkJNzoMQKMdxHtK9hkzHrT8zyHKjufaAFG2H75HtbNRSv84FWMJ3L9ZqLTYauEz2bQtU84ef4d",
  "key3": "2mN4463WxZKgxz3ovUrs8uzjiNoSZEQTgbYcmg2xGewCQjheytCTdEv2gXPnsdfnE6H333uQ1mLFL4aazDycnnbD",
  "key4": "5QmkrpoUyub2nKrugg9dKWc4aA7t7xLiG9ZbvSHvMjRrRbdNdc8scv2q2Z9sjmikXBkUfG9sbePi5ehYMFDShiR9",
  "key5": "3xWV6AmVeudpnSCm65p74ZJPxcXTtWSagzUF6sFm7kaDothdPew7QPhECrEueNAZ1fQ2pKodBeKYSPps8XyUG3u9",
  "key6": "3EpyKjvtDTENC3gvEBEPktMR6exNNjZxj8HF7VmXAHZghXuWZxNGhMtkuy8tJga9pQZkYW4N5FeoCiXTCCLbyskP",
  "key7": "2ZzueKMxGszmse1cyUmnnmiemPX8tb8Wfgbh5k2sJDn5KqkbotCJYGVUn1tq4ptbWzVzPMeNejnCD46VLFJnYbgz",
  "key8": "4wY9bo3xf3jQ9NDq25wVVShPz9YPzr4artDsPMpPhyYER7DoVFtWi6ohaEvv7zHVQno4xQ4eMHtmDAYKZ6WixhNW",
  "key9": "4Vv8LPACbqcBP4Eio64NQPcRPJMrRSeQTPsDjo7EJzHpesJYHLhFwrMsacTsS2si3X65Pii3PR8foxVTN5unMseU",
  "key10": "5A5X519hK5zwRGzEAxPW76iunh8RfUGKy6vMB1Ys4otXburRcScTxjPJYRxLFchdPXmNsTLNji87Vyf9XdrAe2z7",
  "key11": "598ewx18Pn3mxns5xQzUQcR8yqTJaaY2famSQDca7mbXmTSFWJKvywRmkLFwAU7N2SrvdqCobFSuj5pFupMstgce",
  "key12": "2ccTcq8K5dgYgixBgj5ccWRqbMFCK9kB5a7txfdba7npm32Npqu8bd7xZoKMri5fjgRkvWtm8qSqnd6p1Vuub8Fg",
  "key13": "5hb2GamTC1zxxvX4MmVvDay9tGSFxquUxDG7Rsg8kLbxaGjrHh49csgzucZBAA9KbwvyuyVRvEmNFgVzNbNEsmEt",
  "key14": "2E1bnCTRei6UoFP68U7dCBPQ21KPULss61sVk4kpJ4rKpqJ4rujgu8SHpz12p9BmgVdJE76F9haAtLu7AeCDCwTv",
  "key15": "36gJQd1QSuoUQBM2833TierKnE8H2hW8XYPpCCtfSbd8mCBgQVJ5Ng7DaRmFiW587bEZgZJzVNqGsFMZFSkspNnH",
  "key16": "3Lh8MABVemeUgEm95mqQGdZvjUsYmN9yoSxSUaQAeytTN2L3UWYifpi8UPqHWJR59WjcHQq6fvfN5Txdryf4yckT",
  "key17": "5hYNk6se8MYrMjWEqasADseXXyF81EVgtH3JEdPwntqehLJ6HvAWS3K3inYxFcKtHg9TEwhYZTfaDnuzbBFke2Cg",
  "key18": "5zgNPMZvR6gHgZAmM6k1XDz6Tb9WfDZaJHhLmeJ918wRPJR4AE2pEzmPSvBigWFVsMrULfvCAJCf1edobmpY1JTb",
  "key19": "3v6FK5mhY4593VVD3ch3kYirREhvyYScpWXdUiYuUDzrQUmBJUe7beGDk9u7T5FAwHewkv1BuB8XnN3dpD7B5A47",
  "key20": "3HCSquSFa7pGzom5Zdd3JFQuoLNpVCmYHnNJEeN9UrWZAgmkS9GqjxjpMFHKS2RGMy6JAikqRrJJqUMoKSLM4EeK",
  "key21": "5YcQ7Aqwv2jeDRV6MaEN2G4yENTwdawpARdZLxbKnmPzRZyyyT2Ko8gqTWBsMW8pxZCvqpURv23nvnogSuNn7q9C",
  "key22": "8o5J1uaxwAEU6sRXHUL2ePTRbqpLLhepe667KY4hEvpuZ4jNoambWX9pkN1K6qDeZctaW21z8eGynKfw6AZoMr5",
  "key23": "66BB7nv8Y4ijbioQqmsjhsvXyRK7jXFP615DvGTbF26jFRfPCGYMGhATms27kY7exmqRPHzAyn7RF5hcnDCeWS9T",
  "key24": "2SPvHgjVBsTBGk8SrVxvaFXLo5tvkQfMJXPxcYfXBVCP5kK3sDv1MiuobbjziCphfLHTcG9xrfvtxyCWkZJAvR3p",
  "key25": "4VMtThQ3Aw1vBeEeGabyi8iT8k3VcemjdsFsouHLswSQ3ZfeWZrMMWwPFzXmLmnbCXEUY3CahLbXNSm3LL6tU6Gs",
  "key26": "352g6BHWAVEAWtKNxaT1rKLdc3h16kQxuWgXf1gCSWBMWT6gPiUaDjA1k7NsPWdcuVBaMxkrdxzaeqjZFh6Rxy8r",
  "key27": "3kpigYqCM6n5hub6mELpCK9LU9izf7UMWQ7ioZPqZwfSJYwePk7uJmjZ33assRqbqHwHY9G77Lhg3WNNdZNT8ew3",
  "key28": "2wzVmmM3xkcuZAqm5ER1uT8yU7gt9StynBWque25v5W1UJR3484YexHD81LHmY1Yeckmp3mNB5hsr21DZ71WwvWP",
  "key29": "5WWnb5T2HEwKn6LUF36ibakESCpoR83iQiT6L2AbFgBpGbd2pXWwNDqeQuJLraQTSH2kKZRvkthMm2ZumFMX6iKp",
  "key30": "44jdLRUdHQDPqghFRXQ6RitxQG4hZjR4SthCojmm2VrggaTsik4CbjurtN9PzhzSQxDp2tU4XSoxfwpxLM6WeZvF"
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
