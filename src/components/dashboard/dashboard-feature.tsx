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
    "3hyHeSeFt91nyhdcpyJ8GgnMxqGrnFdmCFf6Uf4NhL225irmTZr9he6irutorGtiUQ5HQrcD4Fobp3nixCt6H4Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NNKe5uckCmgCu8EFc1yszQyEnWxpGs18FUnfyUrsLxufVYiu19gayJohZkyc8KgTMeESyMxbzugrpeftNhTnM8o",
  "key1": "zzg7dUU5dUhq4dCtV2i7wvXgRLGJczuTbbQCLMUANvApQnFfC4XVESG4uuxdEN9om5i9wP1FTWof3o7QQnhX6B9",
  "key2": "63SXVJ78VxGBu43HVfcfUqEByR3LfJMHMm1kZ9Q7yt5Be9onqDRp1EyDMLtLtvto224jJx1dXvmph9QUHvCjLUWm",
  "key3": "HYq5m9uoAQFVJJzneN5L3s17M9XRyhp7Gw4NS6cNdDhCm9MJV5bkzSHkwwDGcLKTYZ3y1s6UcLJ4kUMBUM5S7S6",
  "key4": "5gqsuMcLfthQmWVPaP2rAxR7sUsKoaV6D8sksfXiZbSmSPCjzuRGCvKkBv2GDDUVcMPhP4VDTahiG426ck9jWPy2",
  "key5": "39udZxBw5FjRq1yKS4GKE4pc2ZsVYLM76uuMFvjFCUhan7hCm9bVwHrxNsBnUQ3Pyg6JowzCU7SzF1MV6NDq4355",
  "key6": "2kpi5VnNfKBF8ktFxwFtfN8s44BQpmwQvC8RHmmLhUyqU1TCceQwX3ewzBw1WmAJ8G7LRTTSotg4bNVPFUM1XtS2",
  "key7": "MqLPpHLudF9Buei3yA5PGk55uf6Uj9WDTzcNpnhFCsc5ipdef3RkW88FRcVqmy31cKanvWXTYMer5UHvpodit3c",
  "key8": "2QVxEUW8BrUzNgfawqLM9L62HpQbxWVDBVg6aQm2L9smySN9qRjug8EgbcXKHhWp3B5RzJPTbNfdnfs1LWHpUypP",
  "key9": "2vYkuX5EipussodnKKxwsqZP9tpr53w5svCVPG9wKjochAz9Y1oMVXWtZeutz8VyLW9d7RvSpoCYBBPyeYgHt5bY",
  "key10": "2dZbt3CZtC9qASuC9hmhQYTmzwymjePzE2uhCZve7FWnrKjKAZQERtVPPzWq1QeVR61eRj5isozRbXr5gNQqj6iG",
  "key11": "ByF6GK6r9W4M4gM9usBfPHHYAcLvKT8jTxbTynHJT9aLRVr1whF8nAxBXuNwZydFzbkNZDopHEkyMzYKRnCugDE",
  "key12": "2hezH296pGkZoscyPYcYRdTASJD2BqgiZBXHpNozQHnTtopAxwPUZqTx2G2GpzGCJm9uG13yZxcEsH5VWEUtqGfU",
  "key13": "5WiFU6CNAjzYBPN9EVtDB2im9PMATFuKfrMT48jZ7XJRMETJG49h8NW7kbWRBa1tZhmdFMUuvGmARUTFfEraP77F",
  "key14": "2HkfcopriYpz9xLVLu9CMgaqBteobQSKukMK3fopyX2raF18uwYncqSTQXiqmy776hDbScT2D4m5n7SCrpMqQkqx",
  "key15": "48tKaqAnu8henJeBJB9KBqAgfSzL5EvKfiF9WkcxhXbHk7oK1oFnbC18ENJ5G2BTHmbk2FMa4CwCh4cYC1d3fQpm",
  "key16": "39SPfUJ9R863WzzH6Fbx2VH7EGukJJPrayWRx2PPtRGt1Rt4J8Rz7miGzrp7xzkKR3U9RaJD3ubdzJ2CwdtoxB5g",
  "key17": "4Lc9EE3YVRmfzvckE1PUR43a4mZ5VUgpyjfW5ZGb7fyyRLToar5HaoU1zh7rwbH5U6QcN4XRtQZDdu4ya6xdb6W4",
  "key18": "3rM6K5kLi7KsBEJkLRfNkG76kVTMxhc7JTkynQiYHhkPL7nnUQRHw6QbJiNiyt9MMfxfQAd8tvRvxpNu7qdHdyX5",
  "key19": "2zAmjGtiZUFQYPT5gHViQLs4yxMRwA2bavtburh3eAZQnyfmgyCXn5CV2UFCPLnn4hZxhu6SVNwWW5hDsx3MKY9h",
  "key20": "4n7CVAzKyFt1LxakGhPycDBPwv6iYoKGaVczZn2izHYDcQTpLp3PoW1QPqPZrhV9YbzHDi6Lhe9vwGgDftGNv2qf",
  "key21": "5bMJK9fL6CzA6YRF94digWhWFmXT2jckBWkxQUtFCxCARwi25kT3XvrEasfXv2rro6S97Jcp8GSnyuTtDZzfy86Y",
  "key22": "ikHyiVNXTy8jWMSgjjRJ6jZJ8eStHgfgNPsEtvyBRT8wNxFrF2zjQqTtxssFJ26iro3mmDpFKMp7aobgdgMpyvh",
  "key23": "2WPANbqLpCzqjiJTkkYB1ZmiZywszHkDSDTV1SYoS8rnZQaSxyJRmuvDdo9CUJbrwSNzyPCEQiseN654EAQs3DA3",
  "key24": "s1X8D7w2KXPrE78cGDq3PUKiE4Ef9nPVeFjyzMDMzF1riPVD33gfMPjqr1QEiCFaXXFrMoN2d1Rss23kNHN2C6z",
  "key25": "419t35mtLchivwLAs8MzmkRy7yvtYkr7vBmoEE469MG2NZxRaRiFNYJB53gScHGAbD6E5nzZ3zD6CGUcHD5RkGK2",
  "key26": "4BqgYQ899hkwNRpcPfEj2dg5EenpmZtMbjfnKJtqvF6T2XsgXtUeurUFCQ4p6GzC4nTopFodqiSR785J5QCF5Td6",
  "key27": "p8AGAaMBkWp9p9TsYev696sMHx1sYwoDSMsUnqtYfa1MYrRGcUvUi7Bs5dFYLHAAwxQMwoSez2yAjj1LFPtMxqS",
  "key28": "5sF5Q71zkf88BhCWctDJy11eUrEmXFk5ZnkevcmiLs5gUFMTMjxRex2cn4Upmo4bJcuGRPeh3FLA5s3ZVn9DFQJU",
  "key29": "tvGTmgBgxLTSySyy5ydWFjKuPg6VgXpfHfjKp7B9tfqfbnszmRboapK1SajNq9GxuNv69bPhe73Z2nuxeoTxz4Y",
  "key30": "51v4EDNW9PVYCg8f7Rk9ML2QaHXZ6MVdkt4J3i652tN9KrWheHfY86Yi7sY1KFdqH8KdfWxm5hutrEkTgGcYM9hA",
  "key31": "5oJVwq9GjT56NAUWQ21GFnha4RwE56JFne8UmUBL3EugYDji74taCgzyzsa9x9sg8RTuBWn1vzSykjskhnrLGo39"
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
