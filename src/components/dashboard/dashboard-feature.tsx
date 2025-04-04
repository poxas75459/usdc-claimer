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
    "5doND3NEAWnDQSC2NVVSwAqNyLyPdx5oAup66Ttm7wBUjQeisneb72XfcqK6TPe4LZYcnzjyURta46kJfkXifFeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z7u86RPyUo569sRGLzK1Lbf285iZnuCno9m3tWkRb2GucirXKSW6Qj5Z76zGVtj5bgyu6y6cGZb7xMVJW3vTShq",
  "key1": "MkEAgFPfswRktVoqguQur4dRnEbHWhdzBqRrZS4CjFNPPn1tRiMJ669QzB8x5eTQjMqzz1ecNg1XfJ4mDzhgyHi",
  "key2": "QQ58RZBzv5LG79CBdkoHs7DaPm33kFxRXSjP8uhAVocnfrHtwuqqD8xBkSSf6TcRDvcU2gmoPbZZtBpHLbyfcMT",
  "key3": "2CTd8kn15nLkKR2cepBoSVyovqVkRZzhH15pMYxoM9Tq2Y2opHcQ9GcJR5t73vd5XAw99je8uKrRpBXcrFWaPdnn",
  "key4": "3WM6bp8kKT3Tv5tqgvgK8DE3qwfFWEsFa9H8R5FuDgenos1pe9EN6uG9gsw4DHAh7HvdUvJDMppHXhokBS4seMED",
  "key5": "S3AfaJotJ25Guc3LJz8K5nQxLJosQf5fbCLr8gBqrxbFf7C1MHw537Axnxs74wZMRVNhadJvAN8319tiV1Cq99F",
  "key6": "sa553atP91aJJGLeVQK7YA5uqkrtVFFMbzNYTuJ5KJFp1Zsa5t43V1WqQJTP6xrFTL8qfHQsVB3nG2azL4vTjD6",
  "key7": "3N2cwbhHfLy5qzLMB1jGS9Yo9zWeeJdiZ87Eq5NrmPESNsSkdvQVxgbqmJdER9MDVu2WRQ7Cq69cHKsRxuADRpkB",
  "key8": "3Z4kW4V1eJA49YKrqQpT9sMiuqygTbnEKAeeKKmp5dQ5CAkJkppApux4wrgEcpzwE3BvyExnqouUDKYRMPHPukvU",
  "key9": "32S6ZTc57jTu22fuVtHda287gHfw49RYLU1YdyYGNFQX4R5KyzdVvdLzGQMtebMbmpXGCjpzMkS4vcEmhcEPTsqA",
  "key10": "3SKLsveg4VnGPRB7rSW3GTNY627TdxEBNpy1ojAvpFf1gmaSZU6MfcAnX1Xo5gjsdeePmwsSgaSf4j5wjjKRexf4",
  "key11": "63ygvkRK6oagjAAtbSwRxHAaUnzFdzBJKpoXsT4udfomNqNUiMrSA3pD5o7QQZLGwHpDaCni5cKg7m3YbbLuE67e",
  "key12": "2Vvahgc7mLux6B8NXPK2PGaavJLaSHPo7MVNcXJZmAQdQ38HVYuEGTD1JNJArM8haU5FHcKYRjsydvTxCp1saJeV",
  "key13": "3Xh4Ekbo5mWiHSqEcktuXjwELCe9npu7yit713t9x4Nn5fYru8m3qvskZuA3XkPQ7VbAtqMLUyk9h82reMshgfto",
  "key14": "4MzZywx7h2hDMTtuzVC57tZGx4HQvpBaCLbyY7eZCRJq2ZhPm8PqhFMC7PPrPWofNVFWHqVqmJyhjcvy5KfNVpGs",
  "key15": "5GXqQSZtCFyqiJGZEr3J9XRdc3wc8YSinej68CNptJfh7j33a95eiw3pXEepHpiCPhuVJwBTQspXN6qgvP4XoiHo",
  "key16": "46soRfdsLhUE6L5M7V3wawnX9GJ9QtrEfCHg2bMWABQyrarcuJinXUEvijkBCynKoGcLGpDnQu8WRAaw6PrEaehV",
  "key17": "ML9GNmewZEk4RMQSRc1BpBWsTM4NpPyEPgzzVcRugfdLLMTAEhLnTKKFQewAjuJoWGADmmx8f5H7gKEJsmqpuTY",
  "key18": "23CE1X7t55mknKAPGvMgtYPYo1RnScaZ2GcStXTg4gbAkjnvfAMKojTYhD4j1Sq6KzFrtKyEMnm6fpnhDyPfwVc3",
  "key19": "29FCvtpiquGZ8jRrTTJmtvTYw9chZU7BT7spZweYBpANoP2msdKkJ93pBSLPFBkFExR9vLuoCFccfcmSiLTos7vN",
  "key20": "2M43Qxu5TohzfStiWn9HusKEiTGmRQEvqWHPpe2qi8sZ511M2PY8WTEs69bBCspG6c7dDxPu1wLJbmRuSZTScvCk",
  "key21": "3dLEejwfHBVonQPNcfbCrJLZo2WMXK532Cn1qTkVy3ZxceT1UdiyfdeWCRNVGDdDeASVFh1Hd285a66bTAzpue5w",
  "key22": "ojqweLEu9zJAtWiKo35xrmMGdozxmzUWWnwH8PHDY25z9vntP4CmjyGTRGyepV9EMTqZ3uvTaMtGvXv4EZQMw2m",
  "key23": "5iBvZFAYukSmUiEMfkvNUNxPG1ZxfCBM9VBZ52w2SvH7LmzaXmjMRqcshDCegX2W4nKfhktESLZsWZRF5Qvrv9Ff",
  "key24": "58ATgV4kWetUYze2n914jwjVqAZMtZLqhus5RhocMXVRoS5hvMYseqBNT26agZrazhpEPZymH5qwRcaXJ6Zigcva",
  "key25": "651PLJyot7V7LUBh6CLB1F4uFunMSc2Z9LJvfTYdRuBZkfdkpRXfwGzZDK1xAtnPtaDRWMhAtnLYxPaAo6GNKoWK",
  "key26": "2GCs3yi1mFuscqgjGaM8AbQoPYDwTaWmLerMpun2bh8GwtBsu5X9tzF3aL7AsTGZrrqvLA5Acdv9431JegQPcQtx",
  "key27": "4u43YK5SmHHXuupYkt3TjDTUuP8H3srdn4xUGNsgVJQhjAxxN9rVNSfXdHsunCkFSDPjiTeZzCFYSyQhr7Vc7BeG"
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
