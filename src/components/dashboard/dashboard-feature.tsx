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
    "2vbvP2NbzYFuh1QK5LyBBnQz5gUSWeeRuNpDn8RAqqaHnHoUmaptMU1vYDRJdJqZ6n7Rv91tbneahS6376nKAVVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZRvRzvywm46LjaSW7ZUPENdNv73WGjC2Jas3ukP5NQjdPtSu8Z5qn7MNA8RzLz1JEZcdBWUfXNzMWxU3D53NyA",
  "key1": "3S1aEBujph78GC7T3CWqH78pBu6hZQKDGpLDvTAiWUuR7iyf7ReixvieLywYdMoVi8S6PXG9fMyZrJreva6VV3Wb",
  "key2": "12316LzueVA8DLML1jv7hHuSq7sYG9aG63ePLTTuHXnoaefQyWWy3DFSEqa5URVi8spgxqidYZH2DDPJcJJ6qaNb",
  "key3": "5ZwChx4yQZN9xjx8MdquksjawUpK1JhcZbFUemvnqq3TPEoffFFo6XYKezUq5A4eAS1GzNcjjXnDpTE4n77ViC1a",
  "key4": "sTwQvfrS9ZULesFaUf5aMDyVLBDWkHBdrQg1GrjsJbvykHGmqfp1TteoLDPmNeqZXgGZj6Jd7jcqKuUBsqHmHfm",
  "key5": "3W531N33AXdg79Nz7azZAYkFbvcaxdkUX5iwaHNcFN6N8cW5veFFkUDGeJ5aqcjVQkYQHXVYCwW84bDrngY6VYL5",
  "key6": "4kG5rXorHpm7Bvm6MLLZMQS7mr7knQDy3EGKFiSPqXNp1oYyAv6s1rpkmpAU2bMRrpXdQ5VcqvYQTHvsxKwxJ7SB",
  "key7": "51p8x2vvN35wftUfEKeBMfnbu1rLEokRCdusxwu65zw57fEARcUidiQzbQaCdHQoTuQgxGxJLqFMXSZGVc2FT6Ax",
  "key8": "5Y1nZfAyQ8ZLk56JWM8LESEPX21fK6aMmM625mq3MZk8eF68Y1LhLxtr6e2R3UnPz6p9dBvUno2aXB77AqLwjM4v",
  "key9": "2yqvvLd8XKioXL6kcnkWnr51oon6F5GC1crnLd37PPMqMP1oH2NewNhP7AoQsHcwL8fLLkyYDpx22EUMLcCgoEFg",
  "key10": "3pYwRsDcS5gpVHqiVtM2r1kK28trpqujjw8UX6fxgWdWeFSJD26QcpSGgXUFTcAfipXPNCbjKPNCj2Bmekr8R33G",
  "key11": "26me7Qy5cHnmwYEMaByNSFd96oQW1xNef88mKNDHa1TqYcDrbCYfYjdq7Pp1zrkh4WKXax6NrgDm58sN9hwJwfAo",
  "key12": "WiyMXvPJKpdMMvVDsKf1QKFEADGTs2xyhmA8QyCZtukNR7hgc5669cCYBFcSZ5g25hvq7359JoDLeBWFjEZr8G6",
  "key13": "43bGreXqwg9u18oFeFN7B8z6juaPRh85NnLWuy3CKnVrsych2KNpY28uzXDkTxd2jDnVoNPgddgcXmLLbcr2cExK",
  "key14": "cnyjfzLwZVPCmtxZ8kVHB2H7EMRAGjeWeWbuYJFDDf46NsCLQwMyUkfSagzeJHXJpU954FbVr7gqhcSVoHhFSuZ",
  "key15": "3Y6uYdDx5U1uuZ4eGuUxjbDJkfAWfk88Jw1KGFQnT2BPZvrZgNEkqDqCV7Sq758eRTRAnQeCUnQw4UgGUbKQqhU8",
  "key16": "LX9bjg9GHxiNQwfUb4JmX8fFXiBCqv3mHLbhbHbCQAwNQ3yLkKuHmo7xswUsiEBu7ob1xebwg4pTWenM4Yof5np",
  "key17": "3mkNojnKMCWzxmvQ1MSG4kwow7SDGRwXzasZrTdphrqq72pemeuCRBgU8PgnvXUdWsMdZEZkRz4b1LQZCs8TBAWe",
  "key18": "3yWTAm74vCegYbQt9iughMdUdwu1E3HmW71Q6L6UgHp8oMF3bRC9uozLVHaEma2nFnh5kj1qyf3FEhfF7gz98Man",
  "key19": "t4LKzQxre5kS2jPcWmjCx1MpJ3GswDNkBik53YFkyQxaFiSqRbxqiPAPqPLG8SFhQs3zoTmLmC17qEAGMjDV18d",
  "key20": "4RDnXpk7pkXa6kCmGfqeA1Uh7FimesmeVtWR9rUph9u6vNLXuMepmZcWeotw9xUFXwg5Y47zGGuhJjWoAR7Y6Jk",
  "key21": "45kjDJkvUSNGxHz92vszWGzwhzwmhUZjvWfgAkEt12C9fsG4gkgBG2jxKpiLpZPT25s183UkqnvWY6Qh2QQ6TsuN",
  "key22": "4eo9yfAtduWQ1wCHrWatqbcmJVXoYei4GxzkBXPUPXathCARASPNnXdUb3f8AhM7zaDMk8YZSoGFZwbuGFUjP2qs",
  "key23": "3n4vseL9qPqUnU6eAePhdD9c6SQ7tz1h67dacjiEdVEKwRz4bTap4Z4BHRkTpD2ZQsP8VgBWYk2FqoYXJkhAjTVD",
  "key24": "5EgyzDKE1zQKB5yDLHLAsPi7By2hP7rWehQvHW6vLHvuQRJ8MAyq9tfUwBNov6KSnhXxJKm7eyVYj8zTWNNsK8B3",
  "key25": "48KpRazKeWwgh5yDHG5M83D9wc7hCrSEGxgcEyJTyM6ZpJJRPg4V4Leg9V96WCnPoB8rJ1fTbkB95xDjKP5KoYfn",
  "key26": "5R2bet71StKPeDT4ogeHhz95EhXmvhSMMftpXWXEowyym5DKjDnbroSc8QP5vMwCQiwrE4RzC9dWqHFq48qEDD22",
  "key27": "TyoGfnbvU4JGKAGcgPkhsPHdEGretLJPERg3s3L4aF5kRFv7FXQZAfdk8Z3RcHteN7w2HC49SmvQRWX4GF8Kofd",
  "key28": "4w9GJdpJGo5h47b8TQD3u3tpx6XVC5xUBNGr3vAdPnnUhZTxHFn1c2zmpSa4C5qhjgeW7Hzmjv54nDWPPKQkkEcM",
  "key29": "5UiNtymTR6rPwZiUTJAyBokcysrSaDHP6S3EQNeknLbPRkWuChEqv4RdzGTHWLUFifU2sMSNkXAhmDQtrpwCxB1c"
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
