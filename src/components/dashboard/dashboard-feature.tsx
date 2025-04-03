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
    "2UDnK4DeFiv9HNja851yHeCFrqQuXYEcpxoQDMJ2dSXChAKkBPPJKWxcDQLf9WnB19PXGF2zZG7vUruVdTGoAyfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24rGAViwC4Root9eEfBEABHJTtYCJoJXBie65twGzGzZyweQffhCyEtnsGYQ9xYPmQCrUiNoQJsqUgNXPhg8qb7E",
  "key1": "5UHHsYiKjXQ4hnUaDuWkejtrX88TAArQVRT2FpKcLPzQ5emQMu4rAAo6LbJebgV3wbexo3r2QDzZiNCwZcAhJpMo",
  "key2": "5q7kJ2JjiD85xmmVeQpmpVE8xqrRuAd283qv2xArFqryXdfo6jAgBgCCj24WrCdJn1JqmWkKWm6oC2eTsqkETVYt",
  "key3": "5SaLrDrCcxZZrdMg8iyzNidknxpDK4P64EYqUrNkP8XQRR5eJBSUcmQ4dpjJhWVKoLHhSyEYPkfkagLavLWieQoQ",
  "key4": "43kmemWvwc4qtgjU2A1NQ7T7o2Pab6j3sFSRxiR8gi3oxAbFZeZmAvpeh1hUxyRUE4KokcrpMhtc17ep9k7dWhQG",
  "key5": "XRCPUxngiaxcBjyekVqcATgChNcuZgsw5Gvex4EHda1pxs3bTPVY2QBHxxhgKpU4hFuF84n6fcYXaUtd18CEaEE",
  "key6": "21HuQUKHzjS5MyGsMFauxdBYFmSJftRp21sKwyoZbVNiWoBDqEqnPNMVqVhV1SdCpd8bN9guS3PdBPcnedPorXyy",
  "key7": "61UK4RHnD6ovRKPAxELtjSoJvne1X14cw8TTFarAh6FiY7PQYzRFnStKURwLL9jDBfYcHaZryootBKfofLYvHZ4L",
  "key8": "2JjwYX2ECAwEVksQpUufuGt3MWMPerwEye8M62GZ1CjG8tK6Q4injLM6btEz6qWGgn2ZLTexSELtJhR41vKfmgDx",
  "key9": "2XQYu8BnjrhpgxgvherSdWkJKmjkNPZyiPUDJbDWgKTRru4rw829BaBjzDXFtdguvczjMAH8ymz6SRR2ZBXsyYDz",
  "key10": "2BmKZrcbZbapD722mZ7a29dAgDApwCf6jFr5EcJXGKGptGZ3f5wg13EEeThdNxr25TUWYBBMJCAwcdRAUmx1mDjX",
  "key11": "TBLGyjfHFfaAS5uZ4BW6muvQbXmXJVoDhFHhXKkJNxXd2e4otMudmCc5U17g81Ztn4L7rf3b2z1XvzAxFtxYb1P",
  "key12": "3PYodAfsS6eSYkscyD42A3omXmdAi6aJc5UW3Vmotz9D7jaZnH7Wb6Hs4LKVHvg7FWe3CTG8e8VczNmA2sH4fKKw",
  "key13": "66doj1gJHDw29Qyu6x89T6W2TrXW8vZ8RzcveXyKHcUaMwmWP62pTXEkztxuZCnfoFJqnme7x5Fv3GGuFw8UbhVM",
  "key14": "31cBbXZSg2oArrp8Gukzk6X93MU3gvY1AVhKshqDsafSRvtTJnYzvo6BfxaJ4BZsXMXqrcVDQ2imrWJuUxS3vNrA",
  "key15": "3zaq7FcMCgp4XpH5rc8dFgAiUZQDwua8tpodZDNpyx1Wmv4NBbWgdJ9XjQVX2RKWRioUE5bvb3Y7XUyoBSXwQsKL",
  "key16": "3G3RKZMSaFSsxa9RzS4mrj21HiMSgzsV7NDgoHKL8dAjgVxBmbFgSngY3YoQeiAz358PLp5cVUTaxwH78HWErJWQ",
  "key17": "3Z2TgJSVFhdEzdQz4RoiQ1KwkXs35sRhimpKwQRBUihXrZFvz7PCjV18zxJrSQrj14qfxgkVYi7g1gRfPz7KxvmF",
  "key18": "DKyVGw3W5Ddfv8qUwewNExs8FffKvtH6EEzi87BQLRo9apXYzHGf9X45nJ6SpfbkXPQrGQFvZsGSJS73VtQz5dQ",
  "key19": "Q34y2jEUCHXo8VdgkSKrBdSDr54YSdU9EQLDDkwuGTBQQd3FuxRWgJ55MieboVC7VbZT82nHfUYNKB9EAPRG8mB",
  "key20": "ak4M4hApi5PVFGSHuSN39e8uPE9BpXK3v6NFLDG6qC8SqgR8hzCKsMw1N8YMsArJYFey4k9YSPo585nc4CQ6SEw",
  "key21": "129ztidmiFCeoq89zy9KWVhnpHKUgyU4orsHAdGoJpbewU9tr2gvi7ni5agvZ6QUvuNVVHjjkN88dzkj3NYuKUK9",
  "key22": "hDU3oFokckLVxxWrxoEGynxbQvvwXMuhTnP8mQPuJxhTbhDfeGi6xJhNEWB7MD7v2fbaWd7XSTiSe2YabVaLk8F",
  "key23": "5P8WaChZiMFpx56Uxq1bbd9bsk7S9L67R7vYdaDqXwSthtTUNpFew3tvgf4jWnAUS28caPnfhAbJsmMfyqmRLr9D",
  "key24": "xrX3Tmo6D8GHL7pEMDxTqdh969LKdXvQhpGcHvdokrfFDw7qPW75QfxAXgiNBtGQQrYTqkaskEAb536gEAbKPzZ"
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
