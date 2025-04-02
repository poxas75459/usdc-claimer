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
    "4ygVSE5V9TBpB8y2zesfch8rwpw5FAgjmVh8Uii1a8LSERjn9pVD7LeK7Tm1YBQT7arytvavhCsQrA3LSLwR7wWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XUR3B1SNEbvm3Q1owKoDaPDJRbszYujesQfrTWhD3uNrhd5WLBxPg4PVsYb6Qj4A7THywzp8ndiFjipQWwYvfjV",
  "key1": "2jhM2bNYSJX8mpsaJhV9PHMJX9yoa9nHzGmEMNt1tPpfcrXV4Er1c4sAKUyZChJ7J8SEpBPtUmL8WkwCtU8aZUQh",
  "key2": "5k6ZPHgiaofkfMBgRcNxbGwxC85AGqYeECWpWRiJn7TamoSULECtJUBxmv4RtGvkRj2HqVU9c5LMH3nDwXMQip1v",
  "key3": "4L2xoe9RFzTVmUEwhQHmoMgcDuED8aekTvMYzdhiCCxeUAAVs44H4e74WSAx41y7f57qio4iQdkBzsNHQSDTCFSn",
  "key4": "67gbs5BezDh171qJgZ7rMZLvQxm5frmuRYjYRMqmSLxmSw757JyAGZZMikKcDNvGZSicrn3AmeE2DjnLuSDBGHE9",
  "key5": "f3yQuQ4hZ6p7eubTgx8JhUMnt4Dg13s5w2WXrFqqkQ83XWNK35jr6TAyTXpbMSh5y3sQHLvJ3fhw2muwS9XYB6G",
  "key6": "5Xe54xFvrcyWVjDG6jxPxtdQBFc9jACAVRKncp8GDES8fy6uiz7WbpBz48zGWfuBS2u2gBe1g6Rj14rbKYz3xGcZ",
  "key7": "4cvWcPy5cP7gYD3iGHj716QxV71apP3m3sSgF5Cphjpb7akhq2K5Jd9u9hkmEioSYAY46HsmiFxuncegaVGRD2p7",
  "key8": "3seYgqfyDWXkM7ZNq7FGG6orG9xPWMY8bsURJ6NES1EbzicapKRRXq9rFeughKBkJX1FjUoh481V6NQ8sMDwVF6M",
  "key9": "dUXKsqf8sXdoA5r4LN25mP9N3HB8X6X85DvX3YeRNpPccuZCTVWgFJt6JbPwgSMpq2ACcoc9KpizbQgxh9VTeiy",
  "key10": "4Q2zaKs1EkERCgW3A1GHVGhwDirvaqugphPvX8Uiuvu4cqEEfVDZvR2Q5od9WGnirm7YstnEJVaVwEdsj1QULiuU",
  "key11": "2s6oyUYNuhkjezCZS7S45AWaWkzBz9e4m9Un3bN4FDBYFsdaKSGqgJfdU9vjoJqAa22DDwkFGMA9DQk2sFNTTrtP",
  "key12": "5AzXiaxJ1xwxmmxEYrWPT3buJ6kREAdz8ENF4zkts6Ky7aVshJZwtXqxR5rspmstva6JRG22BCqiu4X7zCA4w8J7",
  "key13": "5ADaH53npvLQH3mWb2hN7eAVtYoJKQKuqUa79kk9gihWWiBWbjhZBg95zNQ5hZ9cBPSJ7693FGGAvJjWpecMvrzH",
  "key14": "2V7CpUwBmAw1eL7C7rgfmmmQLjLFehJz6yEjAzLjiQxgDna1nCv5Q9D2L3FYRQT9c14oTBpV41Rqat6Mcvee6Zz5",
  "key15": "23YgUnuTcDeks8vNHUiECd8nRtmTK5XVECVNfetwc6dCe2jhoaL9bQrSW3onPwcFtC7wEJc4Nir9Eq29YyaHakBd",
  "key16": "XgtTdWLtBvgTiQeL4i1DwmRUzet6ws9hNrZU7E5SdpBr4Jjn5j9SJFxVmDiZdtxYFTjtriySPAUvEvxg5Cqkr7B",
  "key17": "4nVRcD6vgdCNfYiqNepT8nhccsCTM7ZEDQefsgF5dUhgDMaXXJueSRSUQdrV4XzWGvSRcWugqYzL3FvLC1S5jBak",
  "key18": "i5igW42qUqsGkpWi1KEQ4835JyGYHKsvjwrq6aw7orhXJ948hiTSUpsTaQHsEV962r5aiXqoE6YzanZkbiBMmEW",
  "key19": "2d9SWCyQjx58YR5o9tPdc3g1xaRh7LSpxzT9xY2nE5yt7KXJsQttyJCcp27ahJkcSGin9L9VYzXDM5yG2oGjxv2k",
  "key20": "3ZNGJqdERbCFswgsgXY7Dzgje8HAEwaridvDrCV2xydJ5oGU4nGorio8Rt4V6eEc6khqhfHVLmAw2iS5Jm1t8mah",
  "key21": "x16kqdkXTirm1CoSuXYP9YpDF3nMbKbQrKbv1CiNexweM3KMGaEv8nj21jrsE2NgpWVBvXtJmfvx6W6FG8EZNas",
  "key22": "63efdWUWSCwXWMm3iY3AgQSsjTFQ11aiWe8nVQhT3qpdpifXFcqxeYJouk1QHuwzvo4BZMfUZwU2ybmwhLhRqnrC",
  "key23": "55w2EjGqVhSgdvrXD43yfDy78qNsz7jkUZqdhMeU4U1nTamhzH1friE3XK7rD3MAa9QX6hVJWvGFKR4BWxBQvT1s",
  "key24": "2Nn5Twd2jvgXyQSt81iatZ9pEhp6VBZxoJJny5GJcxCgxn7NGLUHgUryLLCc5Ld935vAGL7YaJXA8S19SuZqNYSf",
  "key25": "2dzuSyKhLK9CEf7NAyg3M9E3YhSUQx3Yn3kKQTUZoLxdq7NmVqGgXpG8kJYYqUPJgr9hqfoUSeH5bJkV45kprbY9",
  "key26": "4fgcWg98TgEDpicEug1kdhCgjxUYZra5Bvm9H1J4pRS6Wu6tprJkzi3dH9M8beaaKrc6MHboFa8rPfrvkpASWfao",
  "key27": "2GCHZebtWNBvu482W1pdpmCDqHgpHfiu5a6ukdRn2T7fNw3oUqiqitmLh9B8AdCtDzE1Bv45oxhRHTLvR2xLQeGE",
  "key28": "2583ezcf75BQQKHuXwdcNgJrD6xpARyBV1ZPxYkbXasQA14fFKLQTweofkE4n2MkGj1DEAtZvkv54G1n8CXNAG2z",
  "key29": "7mKyhCrRa3eWanbopUrSA3c5ErEVio95q1DuBJZ4dND4Juw1vnBbmVVLd3aWE1kkWmXVfW9Hi1auP5zWQH4v3Eg",
  "key30": "3rcvZNeoYyL7XWbSjHeUyibDAB2fQhPw4qqYJBdRKSecfaLZQzFBfVwWEZt4FsjJCCV6ewDKpdGH2qtnN939LeSQ",
  "key31": "fWeSkcc4EJoSPB1LpbBkYMs79YhPPwqsFk85z6fD6QeeKumJJi6xNaxQryGeDRoxzx4nFrmtprnzd785kVLSdV8",
  "key32": "5kJ2RLMRCaZ3wMwd4kdyx7q6U5VBQY4RsrBaEPLEXqo9onSL1ctEMyHqjixTgZvo3L2vrjfamLCnWDQyT9M4f3Qn",
  "key33": "2Vb49LW45jEt2TLdZHkTP3XSdvj9zJ6HcG99hKjGC7T177XAsYKUW8QdKqUSJTxEV59sfcaeGitP2EPdCMjjJpQp"
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
