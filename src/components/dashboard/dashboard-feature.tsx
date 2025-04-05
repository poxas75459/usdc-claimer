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
    "4NeefCscAG497CVGirJD4Dm3N3SFNWR7Vn1tVzfPwDGxGjNYZRVQY2Ua3QpjPsHAmpNmBJFu1UdqFBvEeqfb6BGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RNL4XWV7iKQZKrQGW9E4sgzt7PiJGFq68og5XdrH1kp3xFyhkmm4pwAJwo6ss2w9Ujj3pdvcg18u9bB1TKvYUjT",
  "key1": "AM6P1yWvvoXoufwEuaeLc6RyNDWV4JVW6xcnSBQ9sjhhXy8fkTXdfDqurXRehF2bmkmGTYryNxBXFnBWkUzJVGw",
  "key2": "4PrdsmUNCGhyRtV5qr4H7jUXcL3zx8295g2jugZ6diawR8siHHQQVMHADKsX6E9sDfaw9z6f1NXVv69NT17NkE5z",
  "key3": "5pSMRFjJNZ3v1JZWZgWDcoZYD4LyBSqN5vB1dk4TQ6aH2zAgdEYsndkuRssQYby9n8WyxLf8czJEmsLfEojS3zBS",
  "key4": "5HM1WCb9vZNHDEYwRJ3B1pjZUBbPrms45JJ4ZNEkqr4TawfADSYWG3fkAd8vBUP8wCgdkVJvL7VvTZNsEJEacfdY",
  "key5": "3SjLaPJpJbHoChRXVgERhYWHpVK9ttsKxMYXw71RAvZ1NSCb7K7vMMXno8Mnt6EgmutH4oiet4cc79AgRkm1G3Ef",
  "key6": "3VvyAMkTLuGimdpZoqEu5vRtVLBgTFu2vVx4Uq7YoMheS2Q4YXoFixLUZeZcGKvCfNCH7fythboKLJoiXiur4sjf",
  "key7": "4n5BjqtWYsATj1E4nh4jkefRiXKgNj7jFb7FCEUWXAqZgrevoMidm3LukhhziTUtLNdqAw6zcmPmoFBVBaSRErcM",
  "key8": "5uUgH3QXoaqeLnDKmSfNGny7WDFZn7ugbXrf7M1iJRVMcJuNHk1hnhCBHHwxeSDKBcgPoG5TXdwq4y62YarRzAKJ",
  "key9": "2HCxGx7PuQAT7yMLDAnmV351NBuffRe8K9kJEHEB1XVuax61aSNwkDsggyNc1jTcggywKQLXrziHjaEdA3Vd6cV1",
  "key10": "2BwHPKi4VehD8L8FcaqKrkaSrd4aAkEciNdyrVAyQezAVdwS4v2dpWwiyJoUeFJ8TNy9aZbuL1VBJsvUdbMpurd2",
  "key11": "akeDgf8Q1jRMs3K5GN9mt6V7EwUnVfNBG56zbKqtn6WfQX2EE4hFTQdbfJhCYku7vqRNN1uhQxbwggerqLy6ZVg",
  "key12": "47xxAgVsDQCyDBBDMq5oTSDamWEiBikYQKs52VeMiEEPZnhvnRCh3LmmTPfZC6RH53tcafz3QFvxc5ACdSHq4fF",
  "key13": "4jWuV5vPxC6uwYv3MMtY381bAwpUPZyPAMnFbxVXfN1HAPK9h4MbgFftP3pRk5XHp8fAHQVbS4qLj74CURCHrvKN",
  "key14": "2y6LfHxG6z6BsSvt9F3gfGKzxguYf7nnLRXMp9jMPEVLrLM8hdSL9LqqP1MR1G6QfUsTD7Y7aqXNbhzMJ3pXbPSD",
  "key15": "PPqPLiYhbn5SthD1VKT8StCfebEuoyeH7U6p7dxsHJiZE6M9kujgkkxniwSv7qyGHX4R7ZVjENmwdqkuh6Ackr4",
  "key16": "4b1wmywgJ5fLmcjTKd79p9fd4hqTsYu2VYYmepAoFF4FiURDzi1jAYYXM17jLvx8wzGPdmKkGpMjytBo6CjyEXYo",
  "key17": "58aAaLZCBauSgEom8GF8FNa97GwGyfU6ePm8f4WNefhHoJn4VRbjrf2asViLG1NNH9z8tDdicmzyRxsgcRT7ALzg",
  "key18": "cyyxbGUV7kBLVFLkNDu1iCQqMdRaWnhcKBjqDv4fA63h98MMTNxfLKAFzTW29VtXiqgrvg2k2fiNxGuA2Q6kiNi",
  "key19": "3sSrqfW8wyHeZv3s9Skms2BC1Gibf8TSwd48fp7WcPmcmJhjcWnZd9nKe1ZhwZzi5E763Bwmut8aUSQMFesB5SnF",
  "key20": "4FR3edX3RTfqR8b9BL9PmXNch2wW9fbx9FScZPtECu8qdHTxxzxLs385vV3tSD7Wxb7St7141PHyC4V4G71LqDC3",
  "key21": "2Ke3VR7FyA5TFuehfGUZqBDZi6ruoKHCJCYGF8kk56yWtVfv1HBHE1zbP8k5gKaCVNzV29bD5C7wko7JCJQQ2dQR",
  "key22": "aRz3Jft7ykJSRgsGd4Hwu8so6YbT9bbGhp9wXTDr5gnmo9UBHNvJk6vdu9smP6q1MJ7A1NTJMwJzLiCXK9c3H48",
  "key23": "57BGZ73KdyaewgtFrB6caMMLbvE6tnA8JcCmATzMuzieDRhjuSjNGemTqEnnXpUMcS3koLoF2VUE3FMVmroxR7vj",
  "key24": "3XeGQu7qz9RbggWdxVP6KkaaXdPJni1vYXv1Yj3zsnKjkgverdR11wLckEXQBESBLusYoZ5XVn6L5zMt6DNctrgt",
  "key25": "cbA3M1NuwcBQuMnFgJHDtpKMtYE7c2gaATYg3Ehtd4pS3dYfpEv3CLnydqn4uCzUS1y5zLzTSinG5VhMDtthYEN"
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
