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
    "4mZkNxuiqUSnzTLTSpmgTTfBnRWgLi2cWRbPx4AvCsg9fs8JMPdMcJhYeeCS8W9J2rnrvUUcnBLTeh8hYfi9GcoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QA7Y6RhTVS43iJnMFENnHY2DK19MLD7Zt9DrR2WqF9D43fjMvmokCnj5BxL9FZjJcba92TSt8XXTDqTJ9g2Qpjx",
  "key1": "3kogX2uMFcH6ty54niCJRu3xtpmQoqtYgwK6a2xnxS8XwngSmcwXuzGM5CEN46LRT1uUZZdVb2iwHPzLPsK8XXJa",
  "key2": "5cvEpUNtjZT21fcvuMpxp96Bx7KERP2umDP5SaaDPR3UPXYQDqc9epDJLeTpfihMi2iuyjzqZYbi8F6FjSvq5rbR",
  "key3": "ghYV7zSVfFWxnqg7H9Ts3ULRZRg7nK1jNwHcbWXuaFWKdPYCPStek5Bvb7NLvBfawgJfBCtMd6U9AVqzsY4yrFe",
  "key4": "ZJbPLACmpSsTM3RzGwzkmLrHEH2o82pZ27Xbv21MmaUttdpbpQgFqs4QF3riCoELqs65WE6hJBoogp2ZQkXMNCs",
  "key5": "24VQHH4ULckN7T6FRa6EttLD3bNXXW5yMcwWoiSN1F27N2gEN7ZCxUeYYvdtpEqb2uKpkNTmBWs5Ew1KD9pQnH98",
  "key6": "3dsxcmzipdVqhknNPAbFzAbbcBmkvwgLGgfo4FmHhqrXMi6z4TEH6DfFAJMc4ZLaiVagD3tt3Z294qs7c41LU7DW",
  "key7": "3JGCwV5YMm4SWyW6Dvpyk734Ek4WZPyq4LPEdFDE1BvKPhMcKQNQH6mZQTtPTrSsGwgBdooKGdU6UVy7kTaLWufP",
  "key8": "25dtkr2LUzCarpyPdTG8g33nCti7UK6EwmUhPrvQDp8ihD6KMrk3HgbBoALXvfHuVjCSemGScHUZWps3w1tgmqkL",
  "key9": "5bzZyVFNavQ9tzR4uTBnu9F4x5mGhdtxR2qXzcaGuyNGvyuSB69siy7mavmr1xeKYGPJze3Y1aVBupHdGtrJrS1G",
  "key10": "5nDVP2uXZJ4A2NZUnWrhvacTdMDodZcYytFV6itMtn2Jj31DLGJXfwbhVPchfE1J5MuaUGksBjfoJzK97QBUCEN9",
  "key11": "2XpV6FfJGdA7FzXTcMAggWQA1TCX8WHDz5p2E9hjX4TkVuipBo9QzYm3LpYF4z2dsVEk6GR7AFM9GBEBfz6wEGLa",
  "key12": "61nw2jFpArQjkXWpDErsvQqD9Pr558Co3rzuETbR6LoS69VdEzMJQx6bGWkfvvc4CZL6J1TR9FPpqQBAVavDamcL",
  "key13": "2KJVay32xCEpmY5TAGTRMJjFSnFCiwzT7uGNitHzm2rBfk8R7DhKzLPoXDaNVGbDmo1SugXCdWd3k6c1iG6m736M",
  "key14": "KxpkDrLGLUo6TgxwvnaFZmn1eRE2nT8EuyZ77PN3HnwzoF8YCtz345YoTz2NEW7L2Q5yqEYo4aAWm4KDSPnkpFg",
  "key15": "5Rp52JGtKNJ51euL8avTEdRJto5SvLiSMy5hPpWWjw3qo1JQPs9foSiHgLdsQ5HBnQbajda5jDKzsxtd8oa2VgQv",
  "key16": "25B4PQwnYAcVUg3jZ8zbXqc7jgdbvoMkM4SRUogQrRskNwuoj9dz7B34gHoQPs93eC2A3Qf46shW8UimFN3yhkeW",
  "key17": "nPPjcwK9Jm5vq3Ld1bW9ovy6aQ2t48wYityXF3nrbDZNcTUEzE62McDYpeqVFq1X5eJNPj15yc7o5qoF1hrcVB6",
  "key18": "3e4VtRfViL7ETPnHts4Twj43518hJ5daD4KjoGFUTKyQ78d42vCGo4fNirC1Q2DRhhsndvHxNifXw2jcfVXpoR9",
  "key19": "32Ao8tLM24YLsAsR1MSWXvGQyvuAN5t2fUBK2eZuG4GtoQrdhXLzP9rAfoULPp8KMR1e6svGASTaxq9pdnLamX7a",
  "key20": "3TckdWzMp69aBQ25g95JsiEs53eRWWVwXKhQ5DoSB71QdHokPTxFov7tZjk2c3BeCinusGLgBAyVVUA3fR55zLa4",
  "key21": "7UmAECXKGnhW3t7aiTCJSYAYCoMh9LusAyPWEikrjnKDF4SGYvVVdmn8s9Ewc6kVApVEbBiLyR1yTkhn52yve5t",
  "key22": "ZtaP9QrqQmoxwGmBh1rdSWnB4Az7KEmdgyftsqomw12vfAFCgit9FN8WViWg8zA9zjeDqu1wH5TGAGMeNjojPT7",
  "key23": "3PTrgjoyeoXjgb8fz4TN6Z7HDCtieiTu32YXHZ3qUYhr5L4vgGrfTVe2rHLVvgdD82TT6k7A8P76cyBWuzW7dzYB",
  "key24": "3bceaZgmNXj5xYf6w5njdNxCpXe5VP4jxFHd9UhKzX6bWGBEijGm67pDpRs2qUJNoPb2FRgWuCVzYVaoHAypf8wh",
  "key25": "48DyBPFAoKD8zjk55A7cESrSWxtfYFWHVyYhAtoiQgbffXA5RdYSeVCaCdDSf4HSUHNbL4e6b2MiwumkzvyFhs9C",
  "key26": "3xySLmg8wp8pXQwt9QAFZYDXpNHXdsS1mL54yWw2ebVgYKZRTDXksFAcm1QicHzesi6HXPsPFKCYcSbaLcsTDPLw",
  "key27": "5w5DCPMRD98t6nUtjK5veW1aAvG4AKY6rZh43LVZfAkgetYuULKsJ2tBdZR9nt8hkRZUhWiBUef5J6XzUKy3J2cC"
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
