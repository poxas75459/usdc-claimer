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
    "4NdPprU3mhr9Jejvf9mRx8C5jyb82upjfQnNopedMUf3SXCsUvzB6cTq7ck6MAiCNEfo2jPUT1dc31hoLvsUcnLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t7hVyPpYr6Tcjj6WQcrUNj2EXYidJa1nTcUYTmKb7NH4yG5aJaf8KwQrwwTZBQeZCyjNntyxLNDJPUfwZ8N4oL9",
  "key1": "4B5cZDCYSxTuiZQS2EpzApqtYRcc3R7Dw44oNzjNWgcPNNVdDP6gsozFdZk46YUHXWVHnZoL4ThMsAU9Vnxa7a2w",
  "key2": "2ffdTj8Revxk7ftzCiddKoizUDbBv9MXjRbqGLWqQL1SJt8XANc2BpXXZxiTYtK1W4DHqKL7VzgGMVtU3L8sCHpj",
  "key3": "4GBu5Xmq3fTtuoXH7CjaaN7gmpUyajZTQorGEPxzcnjtSW8WLFgouxC8Rbjh3GfdkQzsksVFZQcfRdgPYh4D5n1q",
  "key4": "5FpdAwDtRdTdhtz6sBMLC2T3BVPEuVN5mixT82RCsS5SN8TxkxoNm3MfUvQ3Crq568ntif3owuaXh9rayE42DpWp",
  "key5": "3KUo6AWXhqXWqY1dTZc4FV2ngZQYcScFuTeZKLJirTE7VzVFctsdXWtEX61XhpmL8qgZPSqAsMooqhVNjiMMz5bv",
  "key6": "3BNHV9GLF1acJo2tJv5S2K1qYS22PjTBKWrxj7m7bQb3WckLMGDYkVn1QnERb51Zj3LndBMfzsidvSsPTBVcj28v",
  "key7": "2tSuERsGmrtBkXnuZkEpgpKuE3ttr1crEFsFXUx4JCQ5b9ToDSoH3gPavj7rC2kSxAb7LKFSHW8dW1igSMReppYs",
  "key8": "qJxYN8S5EHVrY5UkGqioLjYQXridh6DcjLuVott3oydbxM6ifoLMQNCrVWnrhpALGezhTopG3Wde9CYQhp2pahf",
  "key9": "3iyWwCwPtekoqeXy2SAbb12i9rBb4VFbbyv6W5HKepTAJgsJ73BA5Hx4ASWBnVxTtAGUjW8Z9p493WxKK4bYigqU",
  "key10": "3P4EriYHw6KoPSAYXS2qeJyqpCoRTpA3UcDgpsEXi6Y5eDJLDkDpFuDbjoTCVFvqZxwVrarVfBuGe6BCubS6jidJ",
  "key11": "5VKLLC8E3JMqJLc2aNcexaeA8xdATq7P7zd3XS8ZTQqG8HepZ9VNrDH7UhuatwMBtppNyz82CNbdwjTK92WPo3Rc",
  "key12": "2U5QdxbaM7r59aajJFMHSAqsmosXM5VQh3X1TKvb5FWUx1bZzB4Xa2GaFtm22sbHiBV8QWtRjgnSZGBqmRJ6wxQw",
  "key13": "4YGPdfNQBR1F5bjwvbE3Rc7XqcGC1ahrZLTpeBitRgfc2W8TF31tGicJzTPfX5soMq5HCDETauaN3ZqoVi99kpVQ",
  "key14": "5Q9aQo4u3JHawFScgRgpMKAHYLkEtGZCMx2y8SRmtrS78Z114r7iyx67NfwZKUCnxiaQPyrtYELpPjU6CC2qLVbp",
  "key15": "KUd7gM6waSddKwnCHrDitF1LkUEQvxgCAaK7MZiAY455oDkScYmdrmgqQMkgdLAhjpgVW8N5jEajfx92XFsuabn",
  "key16": "5NBRXLFUK7w1AD2VBkMSWZfNQXwK2vZT7f7h1a3sbEm5t5zVtuPxwMcpRL755U6SApa1M3amcDZeHGMhg38zETk",
  "key17": "4vkkzmqtkhYjtpxK59SKyXk9udkfPiy2fYQ6dy2q6Gs6RrBrjZbM9CMkA3bawQM9Waunw9AT6Y3LwenG3KuNmsk6",
  "key18": "3ikpUAtHr81237ThGJw5roQ8GWootySNoKSQ3FTMoSSC7L7KSsYBeQg2GmM2dHYqmwjk62DKnt94FkgX4kC2Ykgg",
  "key19": "4ryD9fuYqgtof5jLd6Rp9azZmYn8jbdvYvmor2opV5XwRqzw7KBwZNi6FL4me3b88RyfJJtuUMjwGymoZUktEjpW",
  "key20": "3VQ4BLUdbPkmVYFzLAtKp1gx2741iXD9yrQLvc4n4T5yG9QpBim3vDo92Z6C6aDXeXcb8PhAWsppS3FCtFxfKYKK",
  "key21": "5Pjtf37wMHf3VjK1TyasXBpomoeaXupRQ18pMHrXxiUSUGHArpLReyoyvAfdTCNymnUKr2CMqGXMg3FsYabh6Gxd",
  "key22": "24cZM8g8mimCYkzTNuSKS5Hda7UDfRygYSYvZJRU5dLPwatk82sN9PJVjf9sD6iT4xvybee2XfND58f77tEb1uFj",
  "key23": "4ehzbDvXBFFqoFPkBLVg64VgpQpmxiAGQRJeRzhMjHzX6fS42s97wb5kALtstgq93bPLPRRS4wfVg26L5g7jii3U",
  "key24": "2G29jXDgtPULFEQYZDzB3c4ACL1hSNy8Rhpk7mQ3bwfiMK1ArySihqSstsJCJ499cQbY1ujHtT8DahnjCWyE7ZwB",
  "key25": "3m3RK76cdbfKLZZYyDwF6VXVcFdU3S4myuHdUu5rVVRWH3uCU7M5b7yed5xP2JmWQAQnNEqmLoDiACNctDF56CXU",
  "key26": "dYXNDMZFLKwvLK9fqGAEJmrpPCjk6xE25RR7jBeimekai5QarksLBC4BK1bLfQZmQnt5v6jPtm15pk2UYEdYuZa",
  "key27": "3m6kJ4xY73zRLnLFhiNvSTi6WRHBX6ebxctaV914At7QvTZhka8tGKCwLYHVrxkLTJksrbCSmtv5wywtNgeroQS4",
  "key28": "5e4KgmC5jHuEpSpZFmtqERd8xtCEWTasrc2RqqoCXRsGPcEauyPrWEwLz5Lk3UZvK6sSU3SG7jNpDiHMZUVzadSE",
  "key29": "jrJiPHzm8x57BTSa47uJ2CcF1f4pkCXXgRGGzsg9fzw2YB8azaV5Yyx6BbKxV4nKFpArZmHpAkBPZFp7WeMswRU",
  "key30": "5UH918G4twnPQHL3Unw7ewrzh4tBsj27y2BzV7Vkrzj6KYrtF7r23Zwbd325hu2j42JCRs4tuXSAtsB7f829fmQo",
  "key31": "4VQHQvxQ7nfgWLxAMLTWGd66t5tsZMDmRD122vShLfNjhguffGmsj9e3ygcSeFvQkNyttYYhLs2CibFswqTwZh4X",
  "key32": "YyGJc1Bx5WeLY9JGRtaY4N7gR3evx7CyEqavKEAxuJJErYqhP44iwktVZJBmfRXutiv5M79EnqDAepwqFJcpU6i",
  "key33": "5Jmco4mSScBaAStibiqUAxyprBd34x5GroNEdvJvrh5uXnFi8gqUZ1WFf5AyamBatdj4GdT7N9Ar5DuQzPBriLk4"
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
