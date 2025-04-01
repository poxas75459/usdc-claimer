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
    "FpvqWz5acH7QyxCH4JPDkgMowBSuU6JR1RNp4u9ZqrvXYyjSytJarSRy9GX2GPPyAGHCaQr7GKiXB94stmw5RhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQPFz8dcMVJ8g1jWWJ619EJhZoeTp2xUAdzq16vVWN68dBjGhgiJqXNT4wL2jGoSmeC9dx1SGcgN9zXs6irABjR",
  "key1": "3Gg9kuwA9MCyVyHgE9UBeiVeBs72L771eRf6ZFK3ggmAvHmUJtiGwvyW4DHjk244v4cyirgzp1N23zFMzeAEtee2",
  "key2": "4dFFMG1xnWJTw1VvWEqYTBVZYxfZS167G6cEcT91CiwHVedDTEsikTW3emjJC2JnXAfRH6ERuKJRdTpaxxFJ8uPn",
  "key3": "2nsJRa7sywoQa5bUhhv2CQpYvnzRKvdp5iukPYPZMAuZGgvg8eVjo44fnJ2PFzLxPdimv82rbJFw8oUr2LyUF12z",
  "key4": "5g2A7SZwqrq422SNJcbdf4V3PFHnkHaDZWHWD6MdX8kDh8fedQXnyfHYMvoWzweAL9yfvxAFtUPeUXTswZuzfZpF",
  "key5": "4ppCCHXKNSNqP6uEqduZFBCos4V19G7bu6GNt2wZJM5YFUbPrcEJXFPmmYCrAWh7rN1BU1gx1shyYnHgBy35SkVN",
  "key6": "4gdFSNTbifoKQPAko4GHt8h11KyMgvAut26PvdD5KxUji9LAsq8xbvKs67pAjqXcNxnyrDK7SgzQmv98s8ouNEm4",
  "key7": "5atugVv5ftU3cWps7NVjk1fSraGhM5BWJWoF6KqTuf9meCtdPfHD5oWHSqkT7ZVaaZ1W8ehcxxkyJgk8Gzo8qzKM",
  "key8": "3wqBpLMZxVrwQ5nAxf3x4FW1bE9dJsZtBzKqtJjiL7qrXwVifahtHdoVLxfJh9RGfH2cUFMVSuGR6egNcFhqECr9",
  "key9": "4mVhq3vnhTeyQz8LzRhNgAn3Uq7xqpveQAhRxQg9FagT9jHydG3kdwy8LJhdeugbGQsPteiN7WKnnHKWgDfKSiKj",
  "key10": "58aqCYZorrt14iW3mceCHTzSQSmShWPnGjAMoVa7JtvmviT9feLfdfugAAkbtN6VPeSnp9dArEpbyW3ARkaH7yvQ",
  "key11": "3mY5cRo75FDXgFLzwp8qpQjF5tEyLL55svf3dY2UtSr1gPVbvdndzYwJCGtbu9EWkz3335cvqFZPbAViyKVGgDcF",
  "key12": "Ce2QopwWsNSMvbR2LHV2FyUsCjtYmBDzRuwK9bjdrAgsVRNNYvQCJa5QYvhBFjB9T5oFZTS3RWAd1HEGwU1VtQr",
  "key13": "Hxap8FJTHGmxnHG3LfSUpfTrAAgu2hmYeUr4FcEQUHKFXs7EkGP75xMrG2LqWBib9DnEuA6rFtE3vq3y9rgVgJu",
  "key14": "4bzGmyZR4ajGkhc3DoAfi9K6CdBRtJjZ1DkM9jNgPN8aWDYj7YFxezh2YxUeZYzQgMniwhusBbRrXV3wq1fHC3mq",
  "key15": "3tXJfva8YXot665Dy7cm2PB96kvB7MwFJD44g93yBMboKj5kxLdof62BKnBXkbj51d8fpCYWxgQtQK1wmSNsdCnE",
  "key16": "4zmYQVCCMhsPmGymBp8PsQfhCWckjkgnqYrDrGZkuTkz7HKsN8FKfMeafQ9opZ9sE6gN67NkSp3ZRZjNg9V8B8SN",
  "key17": "4bpEsy23kC9NgTZgrNLHuWKUg2LiNwxzyD9CAe2hXBiuGNZGZFXYendDkN9yWLDSkEbW2GLzXp9j4gVt6uqyUgaY",
  "key18": "3m3G9zupihFWB9vc9XVvRQseMV8WSgXLiuoffBpNk8k8K7PweJ5vkvj9f4qyvQYNc3f1kvaQRgJvJfzyoxGT7cWm",
  "key19": "3nGCSphbnpSYH8Eta2HKKJk7pJsNVGgYAn2MM4fYiA7QS5XkLLscgoGiAjDkDvdm1c5J1QKeq92eRBQEqaLwxd2y",
  "key20": "aJR7yXSNWoAt4Z5MNUH19WSeqsAioiVeV2afybeKGP1nFhuGbvks75vhjE7aXQFpUHVmhVvXcc9TkwuokfFEoxR",
  "key21": "3WjnbWKchFZThGmqHBwgskiLCHD2E42R3yvHVu5JJeaq4RUBXn8dRsCUxvdG5Beo7hUs1aCHn7oVYFzCmVN67tqq",
  "key22": "4dGnnyJ9DWmwFBbPSWpqGmq9n9tRtMmMMd5bcXEEhxRdYmVpszuBgzzAKkR2ZryAUs47GnBKc17K14x45YN9Sfpd",
  "key23": "5mHj4bwejxvwyETaVEaXDdXTUnUXoyYa4H46Da1WTFndz2tX24DpqcFRdBXG7KmSRWpvDGnKya8JaCRSXwtzcziw",
  "key24": "59Kj7U8cmRsN49eJm4who2FZmj2hiQQtq2n7LUZbo5vfeBtgXXXfwMmWh6yxwFpwmW5g2LDkLia5jBUVSHK95ii",
  "key25": "2s61GkmW89jTbBeW5YV1419hDtLKeaPPtFKCh2xwPgrYwu3D1DsT7sgpVQdWtYgNbBVqXetgoT3eeeMJ59Tg1DR",
  "key26": "5eye1bEGLsHG3RvQfGpvjtZxfd1QU4vYrgnrhvgCEZJEm2JoGz55We2FEHEQTRJKopbY9kVnMiY9ynt3pLQW7VkB",
  "key27": "3ZbaZJ4K4s2pzMWU34j5U3jydKNRpNBfGXpVPKDGfScraCWBiipUNaYexoez7A1GdkdQj5c5mubRWsHDm1nnPVru",
  "key28": "3qvGCzyP6mJD4B3NKmX7CbZjBGagtWJLB8NHmdrdhKmNofcGw46vaMovJSgL4WqgA9Nzud9NksWX1bAAMAm548JB",
  "key29": "45nBBwtkscbW8x2v9DP48dKD8tPdXBUfvepm1PmSAAb5G6X2VbqYbDryX2LSf2vjWoWom7SzhvyeEPVnBLz5CVG1",
  "key30": "3btmvQk5Qge257nZuck2jWhJQmsWrPAXmw6qZnkdzDiCJHj9Kr4GeUhsHT7RKdoZqJNmcDHsY9gnKayUH2RYELKr",
  "key31": "62Tz5KRxcSKgXaSgiGcj2v2uxqniTb9yK6oydj1GcN7DCwYXEUU3nv7V6qySVF1AVYyXejHuAYE1oqETyVuFN2Yd",
  "key32": "2nsRuP5jQuZXtHShbELhiNfrvLAj7TfppzxoZZmhZFAuUoRZ3DV4Xf3iZBKTzCsNk6EV2ZizsVeuHnGYF5tHA4mK",
  "key33": "4pKpKMAuTmtNjhmCxyh5PQuQayk8SZzVrqfUY7rDAckDsMUCwtkDcTNUwcokTmvtpgCCLVqiMKxxJZD4eEdKvaqT"
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
