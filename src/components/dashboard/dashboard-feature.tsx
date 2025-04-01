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
    "5R1PZjjSwoP1TuMMxTntoeLYaQnRdHQoVHUR7Cmiujswrq1z57bCF5V2jhLeS8r3v3s5jrwsHCZF9W2Y1mJZMNDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kpwtF4L94yY73mHv4JSq5JFKzoxoTcYepfQ2mTjTH5vQiKQ5eskhvpVvGHU8Dxo7vL6BxdxGx2rqJAWLBvNEAZX",
  "key1": "2keLWv1AAwJL59dKGyLV6qDrYChECG2ite2HZKU9ktGbkGZ9RZbMNkG14ukc7HEiGvhhAfdbLEdesuGikWYzFTfZ",
  "key2": "2MhxQ2seEy6EX9z9hpLCVsNQp7TvEuUhLs9xHjRoYXZnDWVU3yvFwAGdeZTJMwR4xbgyhwT27mL6eeDQqbfMGbLw",
  "key3": "2FCW2ze1uWzFixzyA7zanxuMrmkhdz4THdSEgJrfrXgfNQL5dhWFVCF5x1QvV4pcfx8nPsR9ieEfX8ggFoU8VzhZ",
  "key4": "3qgruxMMLQZbPK7STrR3FjGBB5HCUSiVx25SRwBjeHE6aYT5Ddw7PMgdMV1vKbgp4ffCLFxdt83qZptbAFj1uXdM",
  "key5": "4qyKJm1UmM4ewpZkvozZEmR1me872iQYu9NBgrEfxX4FXQBurJVKGSEavHkBEbtEJpLJyGsMBMeRCMEMuy5jesmV",
  "key6": "2BdiUKzys47B9RBYcCVVWr81K4jpyRSdYEyo9vYsVLHvgXBTVkTR5BujxB2kbnawKg2gnEntVCdNTw8AEkh23cRR",
  "key7": "b7X4tEdcjXAaw1CWDqKnsukGBVJnopFNWhswZAFiGbdD9kzbXkzbSMyFSnpaacZ2HjEfvQmNDtXtYQLQnEoprdP",
  "key8": "3V24o4sDcKvv2cK3Baki8CcJvFtZgopYWTmkgWs5xwSCVUXRzs4ty6WUvCRrQkMDXd5zemgwGJqAuWJoHwAccTbQ",
  "key9": "3ozJMEREZdFwhHLmJStbERopmbjj7RfZLW7ncDg43VQDgwuCEJpmuxZUbimxQASJsrUjBGi2uPYBEJwTKFmnBy32",
  "key10": "39HEu5DHpxFgnh2CYSc2S736nGEA5zTgVECTG4LvNuUh2aM9E1KRW6fjpRrLa8hP18yUGV59csG35i52dRDh89B9",
  "key11": "3eLPyRGdztiYLQJmtUttXQcW8CSR2fD19wrSPE2yQMKebmjHQc7dYd84k8RcXxKdJSowqFrAQYRCHmECDbrCtKUY",
  "key12": "4gABBSQrhT5Q2r3B8pERkuD9UTx4mz5qS9qGQ4RvD3Yt71fuPqNwzyby52kkYERnqDVNUdoHeTxB1MELxwsxMdc",
  "key13": "2dzpAYeoGAaJnqTAznmfcs1RMSWGE4wFiEN1djf95fV6jCrGnMJ1RiCcbmFgtM3ZLjFDfM2sMh8SvXYCy8fCLn1y",
  "key14": "4S6GDsuiX45BD2LTWbVnsgZSUjr7vi6ZmDt5Urqp9xeEGmTNnKitYRX9DJZjxnarxdCRFkrrKCii2n8BMfjWy1st",
  "key15": "RQjskCbBN37hgwgf2uJXnq9F3NgzdanABiyR2TYTKi3k6c9kJeVhw91ANdYameCzZMPUmGd1xGnFzaebqniSGJv",
  "key16": "3KejveBTLrM6mTnYW5DQGeW2FFxe55tuUF5VR6FcYQFvJVMKmFRPDqq2yrSgPRFRPG1qutWi6bizYhURErF1x5dZ",
  "key17": "3kWTtPhSW3rM9ZVVJ8JuwqJw8kRHgW2BMnfm8SeYnXEfrnsZ5owPPtzbYMAKVw8NiTyJxhwbD28V8CamxhU8g6SA",
  "key18": "3guCgbibc8GZYamKZ1rsG73k2REHsEz6dM9T2DDri6DAgNnqjw8ADaedPv2kTdS1WZnsmq5Tcf7iwbfEPjBPEp7Y",
  "key19": "2NzopAGs1r31Yk7neRiXqibHAYp9vSDKrRffUh31vCYUjRevxTXmwgVivwigFDBRiqCo7dC3JheiDFBN1ouXCdte",
  "key20": "5j5UKxHVmcqcKLGrWW76gsafMTduGMg5vK1pt5HJuPKiYdw7SvjkYDmF1L3qiWCvETjBS686bVKqDbmTGCyasjV1",
  "key21": "3vWnmq3xHzmA6FwbLEiezsexTBMCoBEe9qudgTFt7gRpZ5SSGbEx7Achdw8jspMULCe1daaX5yKBPCLf22qingYk",
  "key22": "24wFtPdJx58iwjEd88R6Z1YFLqnyWGebrGG5RJsiJ1EZjqxv3X1KUiDL4VooQsDkE8rhcEHPrmUMSzGNvZfFt3gt",
  "key23": "44o6J7j1VAG9nDpcHir6oXt6FAgSnJAdmP3cF3MmvQoQcKBX1UjkhG7U3ES7ZNERgQyAY2nzNat9qZHR7rtv2ZKj",
  "key24": "2uVo3QgKQYmUnYN7XkEJHEGnDXxduGhSCjRtMwrhFjgZrw5rVu6F1nx1G1nvoYxvCzNroHonYRUVsKZBmCcfG8nG",
  "key25": "624hUiPM1jRKHzwEXNWTC58gQdJf3ZcNuaTDhJeDZiHs4kNX73n54SwbWwr68DoQYsaAQStgbLcS14gmnSQtrxDr",
  "key26": "5NS7r35XchX8RvBvwp1XME8XuXSkzsKrXKF57paXS9w5o8wWM7qUadH6vs7GKahpayExQNXycaW5nFTiY7HWweDm",
  "key27": "5Mx2x2CDBPEGNz9B45GkMEevR9MywbgGAVaCjpEZFk3orDmpebY2eiZNxjYoJvr52JY7o9eiFZNXwZBdZBZaUd4J",
  "key28": "3rmjRXm3XGGg25Wj57aKt7vAjFV1d4rRU44366A3o3k3HTUhx5hjs6KWERAJHpDSCXMb3PbiYLbhcXM1zKEXjqZK",
  "key29": "2J9pNtVfuuBf7KyUfwLsfxqtdrDBN19wqJM4U6M2VWm3SMfnfNagJbZHPgBWxtmmPG687mG9ojCo6iX9GUfoNhLR"
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
