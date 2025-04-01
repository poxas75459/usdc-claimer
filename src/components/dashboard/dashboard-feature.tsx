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
    "4u9LTWcPLkq2GnUaHQLL9AEz4ZEnKHdpwa9Rysd9qzM35gTBCqVnevwq5ztjbsadhGcCQFoijFGvFEbKePRoemSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aWMk1PbdbSQBRN96GJKbRChiT9zSBLjrnTfFQT3Es64okqvYviNK1dk5yYCGnGG9v4eGN4AgT4nYdo4LEFm1Wm9",
  "key1": "2p4nmRNUxwgziqoUadM75ZmRNBd3w4jfHj3H7J6VoPdJauM88567DXBk4SqtmhUAHxyooNQuTnznLpeApx4j3Xcp",
  "key2": "3HmzWtSLpLzU9imgV8NWZQiPYXAztrejw13vgpyNdDjhR5pXucBxSM5Z62zz4tCz4m7jSXVKZ8osyjkWEnGwACdQ",
  "key3": "4EJ7ktdEmdQdKR2CNGFytro8ZxqBjMLYo59pQCtVZGC3rUx4K9uZiGvYxdEDMBYE1fzgPuqJ2DPLLidQ6GvnrYqW",
  "key4": "SLKdYEpvpMrDBsfFAsnFBJUcAk3psA8UXCVt7ThUjSvDZJFWeGe52qBqrjBSx6AdHFrAwJND6WfHiJoDGgj2vv2",
  "key5": "5dHHdzsn2yBmFoyxxXoirP9xNPzZZ4wvUKdeSZ9wUH3yvz5xNpQgumeoiQ3Q2BLNFrPdbMCKMHE2Mg9usvxf93sm",
  "key6": "4xPbmDtxoR1opyiUMjXDzjLLxBKPCqqXFPUJvSMDHsH1QsTuV3uYsXYV1YQ2vnktpAKRgziwRCrnbRXn3GvSsiTF",
  "key7": "TeWjRFNmZJ3K6YKYdb5ZGwc56ZfrqEVBXTwQ6DZxd9phCURjAYKZJcYB1gV99SvTLfQcokqoKV8oiW1C1rFFnsQ",
  "key8": "2obECQgZqvncps2EsNt6CDUgZV6mxeKjacurAL2tjYNdgdQPWThSFjkUWoCHFvrBpq8Z6ZyqJtLqxB212NYNjfBW",
  "key9": "2JAPFbzUXNiXYWtRiPxsGG7pZ7SfLdxKCmwxqVHpu9kbWXLZhvhUTqeK1wbf3CV17siMGjmrPWg1v8fbCq5uYgsi",
  "key10": "2xLTvDVkSmN6Zgc9YnCwwWtfUKCfXmrVbGt9VyX75sWiEfTZdG5jsuvgKRAknLeKXzct1so2dhfpmMz8pE6R14jB",
  "key11": "38mcym5tL8ccfoJPqeVmJ6Jp46ZUX4xPuRViYKMqa1sa4VjXYfLjUPaDCmCfpjNTbF2fFxucvpsScdgQ6vvqN9VA",
  "key12": "3J9uLhprhnGbhqUu19G2yiSRTpw2K3tK2oBLKgnn19WqcJ1gQ1DCH4zaJy3HYQ1xF363tzxdbm2JU62c2g27Wz3u",
  "key13": "2tmrfnxDxqDp5xWzzpPhunykPRcmTR2tKpv3bcYciXP5RWRZ5p1Mmgm74LJihavztQj28yKA5VZrLLx14pvYyrBo",
  "key14": "4U6FqnpFQXH392AEd3CDhpUS9Mm1iBMBcmUD963YvEFdF8EwDtroGgSJGS2VX6VxH9TETLkGtH6DrLARRpjEWWYt",
  "key15": "3YfQszyTDJzf2zECkb6e39qGqVhukJA2Gr9LH6GLRL3wWyr2gYv8BSiXY5nk5pfoGzB1SGNNngG63ppeDdk4iJ2A",
  "key16": "5X2CoVnnrXnXZbR8uA6MB4hFSGJ2Er4XXgk1KqA1xXo26428LP96L6PXMfusyZNEkTG1UwCy7FYy2G44z9Qiyp3",
  "key17": "7nLztoaTRhP9Z7KihKXoqPfCifQah3qHXUC5S3DYN7Q2e8q1aC43fqbfDbFjUcFiXCRDx7tQqobTTym83StjWpy",
  "key18": "2cCjRMJCvd8oS2rs8yweksGB6juT2C47wAqwJeSmh8eUzdfW52PKHwJVYZLZau2RUTvZ7rfnGMZemdfVbjXqvEKL",
  "key19": "2PjJdUUC1Z7othWLTwR7RjePgYACSpkSTberJFKfwjr831DXfnRNqS3VoBkinBnQV55pTtXSHGrg4ggcfxZxvd2x",
  "key20": "37LgayGCPiLVSbTCqBixTnfYiekJscsiCbZ9teeVrfG8mgC4K5FbUUHXsCFQGeUBehLi6okSC89Yu2XHKZLCtdF9",
  "key21": "4NVu4QB6Ntvm7VEX7VzNiGZYvJbovNQBQDKU6cubJnjTeyN4TwY2eFRFRwe3ZuJoeS33FuBXfJjCH6VoQy6RwW7P",
  "key22": "2p9vTAV3zZp5L5BoHJCwZjGsKK87UUNHj5i3WXd3TpqEwbDhyUGSTnSGFCbQCFhjpq842z4b6VaCi6geHB2x2JNu",
  "key23": "4dP3rmSvMJbDHQYs3624UkgVcBoVV2kfUqEHz7qpQBa27gujsgtQ5w8yfiyXjdQDL5jQ4N671b1svmLo8FaPaKF5",
  "key24": "4cTQ9wUnmkRBz72c6C3gBjzfFrCogQCnSWJao2yMvWSMc8UjCqYn3tQQy1M9mgzXtri6s2hX4x7PTt715fjx7H8y"
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
