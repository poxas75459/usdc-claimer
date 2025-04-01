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
    "2P5Kfh1BGY1JWoF7PdiQEJ9nQW4R7gnbAUmHDrmHZCjp8N2Z7L39d6im94c8AvBVK5SZ62BK3jLA95wzqghQXbhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C3K6zstJFCmJw9y5L3rBhrZVvZjW7FpY5Wfn8tyKJfnhpwVsoShZPhBxU48iqk5zAkbVbhVrGqKKRrHvT7Zcdfr",
  "key1": "VYXRjUN8hNcC9HhdqYstpxtp8GKmBf1DBS3LHeqPnbBR1p2mAM1hmnrMp5gswG7MS6UDyadQcch6hvEpB4EKyq7",
  "key2": "4vWtVuwd2dGpu4RLADj37xbSqPVTRo9VxbGyesdBTfeyXFWaMdAKt1wjyMfpPqgX5FA8t5sHzauxU5xy7f4EDpBh",
  "key3": "61adn3WU6xxRvxGiWWydYvKVFYZnboewmPe4SXj8UDD13w8aUGigtHfhsNRvAPrnfbV3YEQGyhz4ze6uTzpPtKwc",
  "key4": "4QLizdr4whRMxkNTZDS8dm3nxoZmmKteXTxmWYApKQjasAEekdxPzehmWJdG7vrdJnRr9DcchdfcKwpBfebZvRga",
  "key5": "gsPR2ghcu27YXQcxGeEtbs6FEuDsAvXf3wURjvoSNaLmTNwJKyMyuy979CShiCnfUXQpCAMDQswkNTaUjYAZoq2",
  "key6": "5TMvhd4jBNJsuJgvEfH9MCDdME7p9p7UdH5jKyxz3rpp54FULup41PARPfdoE7NmnDiQG28RQuL4nMCELgtSp6zE",
  "key7": "2tRrzdgq3Tr69HL2TL5kqcxt1TGpyPbcP1Qxh426HSJP9akgAGADjQY9SSRz8wAhFkxjcBFKZf1adJ78JJrfavwB",
  "key8": "5CKb7RrJ2c1CuKEj64DEFNRYaicMqzWivxye1DYPRfpnyoeefdgxSkePzTZyHo3BUa7wHLQ8nzMTEEfnmJJct9PL",
  "key9": "2yDV6YrvhFTWfQH182qVt3uk1Jhxda8JmG14G2Mt3HnPbPyTHQixoKeZPiqaz4ndzYiynLLkCJrQnwvbQoCocwAE",
  "key10": "t6EcqXBh8vZnuq3vj5hJry6xRJEHTx8iFoYCYXNVGeiafRreGM6x9SMusz3m67tySQRXXywy7vpTwSemsvErCSS",
  "key11": "z27kQLPF5Ycb1aUYKzh2D1PPyoJRWynNqewNAX4EYv5219fY68Jt871Zb9g6PQyK4c1PevQ2c7gTqim6fZ7fLhj",
  "key12": "3iCog6BN6VRtfNUpNArJnhq4P7Pw71ED1FaSPbDsivDsXmNXvRyCenazDvJ9KUjKCaSZYfBtpvCr1CxXLSdLhVdd",
  "key13": "3jpTsEfNwddtXzshRZLEg6eP3ASj8pYGTcXgKK1Linxqekhdm2PHbJ81iexBjuDuJNw52jBM6kNgnsBr6dfMmJfu",
  "key14": "3SMAYGSEDmGBY7NPgfRPWaazadZf4CqsPdXDyjYnfszMdyebpTWA8v8Xj6E9EQLvCXPJVYo44KqsnnsbFuwRCQya",
  "key15": "3kYZRok3eG9UY2EzriAp7ogmTfHCps9CPVtLmHt4FY8JryPVGCZdaYgFHMk1y6k3GsszkpUWR5dgz46tY9XnWu25",
  "key16": "4Ww1x5azc5EcfmV3NvTBK9PXdCLNpUfynFd9q6ZDiDdaPuK2pNRCHUui9eDVZf9BU19n9npB19NX8PgdjU6iYUzp",
  "key17": "3my3yz6vHADnJjFtJRRC1vg2cajztCXxaPujoFx4ouFrAxXyPufLAQcKq2mZFe97LVPBkhf1ZxguaJDGBL6tFGC9",
  "key18": "5QQP2WEbyS9vQcECUBHhp4co7PCtHkW7sKVdRL39a6XMBcZoVHYn7DJbiHYWCZkSLkkFhpTuuDJs2apwXPtHtL41",
  "key19": "4Vbz8vTQ6MbAhfE7TrD1E3RfFM9oG4M4L3NiJBpsKqHKAhCqRF1tCSrW6kFgeBmWkG2qSMXBnzpUX95Qy9BjXkPh",
  "key20": "29BrSiM6CSQ7h2erdF93sgG5Xj2jnqzCUrUhNhVhCwt8Q8Yjgh3tggR6Lfp9gE5ePzg9G5VecFYswKNZEu7DvEto",
  "key21": "24A2w5xETc7FP61EkmFAmfrR69VJzfNmtiieqRojw8hydn3jaVcLSQ5E9KSxAbWbyN9qmWLCUqVdywLCU6xUUMVz",
  "key22": "5dTCrJmQkpok6of1qtNMH1ULVLHM6W2ngSC1USp9Wf9yWtH9AoWfkPW28ykF894tqK7k9LAkUcUX4paxd5LmZh3F",
  "key23": "3QEzp6qoUPnXTpanHMFfo97Mj1tcsewWPFdNer8MAawQVanYmxXnkZdArUoSFzmUkPBR5R4FmtuFHfQGJbFBPQPf",
  "key24": "5Nm6qFwE9VGrSNYRcsTiNyXykvNT7XxAowoY2mcpHcfknoV9Ai3QNDJWSa6AFGz2kowTXJJgs9DGnRWK8jJmso4h",
  "key25": "5qsdjVHtBNsGSvBbbz8wwkXuS33jkFsnpzBc6vQuDKc2SfoUH2mvuhao3D7Drf46qf4DjpSpqopiegS8UqEWC7nG"
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
