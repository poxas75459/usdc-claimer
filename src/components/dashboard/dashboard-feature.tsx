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
    "2EobyoP6aFBCaetoUeZU1us9PhyXijnLsECJWskFhXCPadnFLJyKZc3DvZSw3vH65Uo2BF4NdCeDtzNQCt39weGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u3cCbsBXNFvEkDN6yYnsEc1Nz8evURiphpzRXd9pD46odVx35sQUru4sofDwJKtZRHShTVDnFbrHB1xyVTHWWqm",
  "key1": "2trM7n3uu3thSsCR7agYF1Bt5QXguV2P5oPQFhQJBi5WQ1msr7gpMXrP2qyb954AStEoLUqokwrEaTGqCF9XDepN",
  "key2": "2xYHrYGrF1yZd7GoimAgNSBdnvJfkSmP9iovLwNrnx2XjtpTWhiLr1YzTjPaKFVKp9vjn3oU5aTsA2YzwEVTCRss",
  "key3": "29RYrZc6nJmUwiWGCzWftcxgvDc8wf4UBtsYXB64RPzKy2n4MXhJeCfBgarQCfB2yhdSpfRPNUyFMLHtVRH4E5cX",
  "key4": "6VNB7XvXtTqF9PCtfJjMfqbdAGCxp9zVpWKiuQymBNTXiFg2PeQD3XR9yazt4ET2TEF8bMt1zUWEGBxnTmohrEZ",
  "key5": "4RapqchGdNMqMs6bXUXibRnYEpHq2fb88WTBRuqv2w1WKXcL1sBmGhoW98oQXcjK5cpcc8rxtgz4jAXWZzigXA2p",
  "key6": "2L5N2UFCzi8cpx3qcWeE6K5YRSYqUkce1J41TbRUXndTkn9LwU1U1jy4nVHhWXLysJW1Fg4LVL9gdkAbEorUU5Fu",
  "key7": "4ChyJsDGUU6tfUYrbDe1KfLzGdXgtYHaQW6nGBzJQuEgAoQ3aPebmLohcampJqStTZiud9agrtqVtbpXiqFnN2gu",
  "key8": "29ovuRcYSc8XGDDRM3kiMgTuWfr9BAhrbTRdDY2LKMWtnm26363rz2A4XX6bFZm3Y3gSWC94rUZ96QMMxjUZKkQz",
  "key9": "3aewX4PW5YkQ9iiAkCnRoCP3QJAQkP4X4KV7ytjX6wzexGWqMWpe8a5hi28SaBWpEBCoGXADfNg94yJ2KjZV6g1q",
  "key10": "qfjaxpAXiWH8ut3pQLryjNxB8k3HgnHKSsB6HA2jTPpDitFQ7LXHHCm3xRvKvmVa4kd5nzFpybzZVyR3dRfSVrd",
  "key11": "3MfPpsgGxT4R1EHhfT3ccXDah8FneWG51P46garUeqGeaN3E5psx8BwsXdZngvwKJMkPof6FfdQvDqmMZFCyxfZr",
  "key12": "3Zsi7Dmv4Zu4PVyczvoW68CyYxY8FGsmRC1ojELK4eBnLjh2xJD6RTYFVcGJdTXKJmcT7RVY3wiwHqrcp9ZLJhyL",
  "key13": "My6D2iwkMfcps41wJYaTFgfSMxUvKh6g6CVDTJYXXUyumcbpyREAQPbWsYGiwbBcREcVQfcKs54WYHD3V2VMymG",
  "key14": "3LdHdZMVrzsSEJxDq8u2a3M22z9QbXfgTHSA55rmis3axFTRJUwvy5zW6EGAXi2FK4ZJKg9Xdh92LhQvJuuQEEac",
  "key15": "5f8WLMtX9iJ1yPWSS8qdiq2uHpuvuanYfjgw6wtjgFsqQr6DvCZUM46uftEv3X3PVofoU8iv9rqnV1ws25Dhtuey",
  "key16": "gv3FTQYEphgnYpSTYc6MyhKonVc7FUFkM6wELceRQ13YiKFgTnYZyh65rgWPxpwjk2S11keRv3n22bCUu2QzEdy",
  "key17": "4ysAiYsXSvcveJRJfVdP7q1wij5huyZWybkMStbepTg53A6axAYnHxbtrPZXNftbyFQ3NqGQvEVuUaDECrRvMBbs",
  "key18": "51EnY3RGeNQJFtAhaTTvkLsts5xqkS46CkXfcsp77X7tMFSvimr7RB9PDCsBUCCB7GrzucREmy9irbowUEdYawen",
  "key19": "4eSKpengRRteB2g7uiYzNrCuvx5GQFWPGpy67KAg9uJQ47rAwmQhFvaRV4EydmjnTSAMeLT1jrmhWFq3s5VdVCPu",
  "key20": "64eFv9DMcP9vsDm6PY1fNMNb2anNCTe6YvPbJNJCegy5BShJ6SQgZHbqRcUMWq73Hvm3vqmD3XP7wFjrMjBC9D9m",
  "key21": "3ckPCoturCUxSyBJp4Bgye35pct8xL6dW8Kt93ohPLX8fkie6dbUbaLN45udCoHVmJAsWmuqgyCSuRkqDg1GVxr8",
  "key22": "4FYTbQAfEns8t4hoV3bT1e1yE8yLT9EoPrXCGz7YSKyWiay6FZJSBgWqyPbMXbup5PEeNyQ7FfFHnREhqMGdzsPP",
  "key23": "3xtK4735BGsaF8NZbXP5GyXdMvdFCRWJY5qhNomFKCJEwpjekEeUjrqYaJfgAgpPNDgpW4jDgs3eFDccEfLkC4bZ",
  "key24": "4gwkQvaPqTCUqjFLwWqR4uonk5Uz6DD7591EKfh1WNiKURwRuoWwjdDCmBctDMUaHymnXD1MpoEnpJRWJH7tbyDT",
  "key25": "3D6GjpAUeUsW6Q7GcyzAgwXJWym5iE6JakQBER2aMVwg5ymaTJZY7HqypNh3T8AYxUz8tBNbShyqEjPLo2RQPzEj"
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
