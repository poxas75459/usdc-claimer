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
    "41iHF9BZNGNQuZprHJV5uXik9WhVk4APz8F4H3nkCGkohtiQptfWv8nXvNruQpGu5j34HADdbca3omHjdPhFpEFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22RYAMqmm2KCQUQotp8M9suUtLQiwe8wLEoZiZPfgB8aBExBme8QmrQxLFpJKd4JKjprYwHxbtpnuibAVb1cqRU3",
  "key1": "2uQqMKs4qhKfGAP8ZVHqpiqoMycN65nM7TNz8m1t8L1yYB8HJ3EXVZ25kWGMWJM5zohKWoC8qTwtqhW9HgJn8vP9",
  "key2": "5SxdNdXarUmwpxVusLpVjAkDTBJv1wyyUkjZ5wSCqSZuCUVtmGpUeFTshENhBBbeQsSiS9E9Krf9Rma5fLCyncoE",
  "key3": "3vHe2tNF1DF4LqebLwaffU8YYiW94Gi35vr4msfw1okLABiUmstEcZEVbZu7XEaZqGfzeWK3syaNebALBvYKRJRw",
  "key4": "2GTip4ZsuAZ3Jaz2o18oXssKkY3Z6TepzqCkoGNUqW79o8o3ac8Bye5ktnfK2CEGG6R1deHvmTfj7LHEfeTiukB1",
  "key5": "2pKVRr2LGnNbwjtYZgVRFFAVoiCMZnxZGofkmxiPehLDmsL1cehVEWGo8Xt8kMdKNefMd1DNYTCR6vPvEjwa6kLf",
  "key6": "4cxt4FXtoVUZ94y8ZSBCmrUeWxCp2MRy7E5gZuxFWFwCX9PeLwnYKWbfye25D1ebyWwnn2jEB91TtgHJMUxmPjmu",
  "key7": "8QPPftwd7SPoWNkHddiA3YcWaugyFVBDMBoxSddGARRTTcf9P58BmXexHZ6vCzT3uHQSsAjGdZ1By4Ro5Mojn5m",
  "key8": "UPGw2vvnbLueZ6rLe9Eq5LBCsCD5QNeNs5K5eQ1RLNptgCo7BwJJ8pB1qEwxiLD5HqGGwFosjVRxUUqNQTpkN9c",
  "key9": "2PNgzgYAFqpn51rJ9KfhbnQXTcJVtnoh9dVj8cmJ9y6FrPTVY1HC9dBR17XofA7hkLE2ggjfkq45V3T4mgMR7kHu",
  "key10": "3DJW8GomboHZTrp1y8X95GJjL4UuKACkNFXcZcKaVYHB8BvKhCZLWDiSdZcaC5ZhfVhCTcT2VH56xkazQsDWY9Gf",
  "key11": "f13vYyPF6qEHAmdFqv63JqRzQSVfDwKpxmqbpcsvRr5wHF9oadyWBmtQwt12XrtpTubR9ufsHkJFKqp5AmWT4m6",
  "key12": "2VoWST53ARp8kk2R5MeJ4dSafqgn6Cn6SejeecjQL8Q7P6CzZhsQ8vzNaqhDGvyjdZaGj7mPoV8rRPoWBv1gkKxc",
  "key13": "5p8Czw1THEVkVF1MzUDsPaV8fNs6QWyVYThhu3AARybpUcEDWyP8Mp7SHGhkt68KZxZFy4tjNkBkviqPWY957kP7",
  "key14": "4PMeQWcPTyonTxdcy9yQDTZcE9wVEuSXbe6ZX6vxP7UdYiZ2Vb6BDL8BBAQviFfpMkHcA8yRMaCjMtcWH5qGYYVL",
  "key15": "5rdaPE2MDjAJb9fXdLkpfLFWsS2FN6jdYJDZbcdxsEKb2vXG2kNMtsp9s2pNeja3h6wZPBhNq4TPwppeZVwJpdE1",
  "key16": "4Yo4kL5Xxj8aCPwowUAJVsrWhaATbz6gKV99JXUE81TwuKqu5sUF5R6Tm4TtHwLtLkrUL4LfyYgXR56eSbu5LFVH",
  "key17": "5LZrZVZTJCiGTuLKmfpGVmVEgNaqJWdG9vCCFXE2GWXuHjci28SNLt9AUBXoYK2b1LVLr3q97vRgjeNCVEsauHCN",
  "key18": "VWVfZNJvuJQf9NsfCUVEar6Gn6AsYY2w6Byy2CJZt9ADrX22wQqRDAhVgiBPkxN7jKpJkrpLutX6SYsZtjZU62q",
  "key19": "2uAjHZ8vYgA5h3aExmw86WefYovtfvj91F6XGzGYhkS4rDibQdsiE4Myf1f3KEECZgu7RrRxDh27d2gfpPf7NCBE",
  "key20": "bbYfZ5jXYRon2YFsNtgRxYJNXoUypmw5xBkJ68uvKrLYbNfsgPt5exbkCX2vL7QmwTD5T9ZTqPx6783CdKKR1HJ",
  "key21": "2DRF2HYT74guZt5VZqv1BHycGZ5qhEkvMqQSHwaiR8ZCkaLBoJGF7rBgZS2WisHoGenujGT6sr1aquVNyUyq6cv3",
  "key22": "61D6yTqfBi1HMrKMV8T6kyP3x7w1xJ36i6cgU3Y5wB4yhVQT8iswftqsEzNjgMenneTq7U1zjELKhQxiUJvBvMHb",
  "key23": "2dgdZ2PrtYkk2wwLACD3wxoT9Ud9jgjf4yU7uSjoc9tAH2FVXriWmV5NnsTSPNvRXooqHjD1n63iDrShBNqKCRCF",
  "key24": "2Uvye6mn3F9myNGaYagzwDT4aR7KKDEC6y2NxY5unVSFDNnc2cStv3xyv9Siii4WVCjxZx2CiURgHgCRaezxqR3T",
  "key25": "5rV8w6tCvgzaczSxryMEzY89u916kQZnmuyKUVGxLAjEqnTYhnAZBRWk4fuZ4M6V5chEDgVHYDoQxrxLUPkAXcLX",
  "key26": "53gqJxvGBsQ22nk4QG9ze3NzQE3S5QKxBB3vKxAWJpMMLNEvCjbwygovFxK5xwPS1HEj2Gq2HLQhBDamVGDCYR13",
  "key27": "3YZko7GKH7uzmm5ZhShVxSZ1Dc19sX2gyyjan6Hv2NQjs7xvS1JY4SUNy5x74mfTY4bkQTJmfsnLm1KrGvHmtYPb",
  "key28": "2AReYzmhp7wwHHDPxQ94HaTvzJKgRvQeqfvDHbGkfXMDE9C4dPycxbtdN74ohZqFdnKhDV2EJLhmVsazu2Xs8UYJ"
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
