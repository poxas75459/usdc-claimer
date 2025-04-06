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
    "35qHcdgQnVBqmsAETYqoUtWvohfwwpqc9us4yiLJgbAjDCkNUfXBseDSPemC7fhwsTwr55GqFvzWy7ZMmfLpGdKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oCHRPuZ9g2p2ZCFR8teqrKD7ZsgPzMQtEnQgTfX2SkpGQzvWeTw7onheQkdzRMMuAGww4RFeEvACAwPLnHWSQEc",
  "key1": "3EMyC2nsrQxrZCk4SQgFbPdFsNiq5sDjMxngAFRJTjUdKXmJ7xFveciJCjv2uMPs2WkS6a3YF32AGfhianMR35eu",
  "key2": "4wK5Hpm1rgj7dcuyiD3tpK9hUEF6htiFUYNnzFmiBdudJDgh8TikFrzqLVRkpvzTVQvQvGyib9hXcVRdHoT17jvb",
  "key3": "2fJzZk8NUXKpgACFPTwhJEFY78TtUMbPswzvEshTHUZy7esPrC1FUR1JG3rnwpkDhdsWtUhEWs1ddpC3QYm6uE6D",
  "key4": "4piknrWRXEqrcyNojDQcUjnJjfAcxsZEUjCRh7tZjD4KQH5DVUDqhtoJLRCCLV5VfxYm4VBqUNey9b57nsgmC9xR",
  "key5": "3myBdDa2ypMW5dmKu7oEQCo6Z8brVkji7rYtLes6h4WptAHFUM5yaMuWDER3SksZgPimjLeqxVK91VxseuPtr8Bm",
  "key6": "5MCDuPkLRFVHroWzm5Wq9nD8NkCwd5Z1dree756cvRQbr83czRUcsd9hcz73zppG1ViDW1SUoh5s1gzq7SqQM4oD",
  "key7": "zScL7TDYtZxyK9an1XYSwfCsicJaPecF2kKGMHGHWaGspPaFNEgLuiXQ1J7Pg1i5737uu7ywFRozWwA85Fv6BFg",
  "key8": "mqYEnDDKz2zXJwPgwFQKvtWXXoeMsrT4wB2M8GZb4tvmG5HS4APX39oZuBNJnM5CmiZ2URKTjNGrUUdTkSCtQXV",
  "key9": "2B7SemFq5NNFiAz4q2Xe73dFGRy3QEMs9ALU6LUVCBy9XNfmnP73WtLwqMXRU5iHHPfd7kN9XeqnCbf1FjkR6481",
  "key10": "44CCww2SiekeDcXBe62C2owLQqn9cwaqFuotszPJRSwgQybF8bhANVHJQ52676aFJSNJupZo51DMMA98Cuyn1vzM",
  "key11": "4Ess75ovUHK6smSdApnhP68LKvhmkcGXpgaS8otEj7apDDZ5VwbVUvX2YNPbNoAq6nJpFoWWAUAACMjEaN39PFtM",
  "key12": "4F9UERZT99ddCiKxxxj89wBATtHVecp5Rc57WKUwSTMMQF4CbbCzwfRPcUUL5MuygJQNVoLMczvoqQKVGnDAffVB",
  "key13": "2Q6JbtnGV8kE6ahozNNwJ9Ab9jCD8BFUXGvvrJiyjcFmCmp82KMrfLaGzPekbseWRWBxkij4YFV4UKzqgiDHXLEs",
  "key14": "4ytS2JPm3MUGFbj6BvXpSwVeEU8ewF2hcZh2PUL8yyS7sPAT2LYxjeqA6q8Bx5ept9zvLYPbe7UcDDPkJHD26FD8",
  "key15": "3u3Zxgt9USNRv7NaaQF9hatRq8VwjdLpxtpuYAEL3BFAFF9KLc4H48pEjXiM7ZdBxnCNzpDZ2L2LGfKtsS2mmSrG",
  "key16": "3kjuiBc4KkXK5RLgWzAAiUvm1eZ6Dk9dBHaaVMSMrkvBJSwmRu3s3NH3C4qPDpRfD5Pxd2Q4XMk8hc8aFTwyKv9k",
  "key17": "2RG3nuR1kTkkL2bSy9Y1fqaGniRXBcb2y891cycgGDznPkHkeZVfoHhzRyXSVwj1Bt9VdsAcANQWYUXgQNS1DH3C",
  "key18": "2PfGrTVuw3rNR7E2tc4VoAvFSfHBvvLRiBfUwVqmMT5LJf9dcdPk6cr4x8PLimCv2qfUwADzocj8X9AzGxtyEDZo",
  "key19": "xjVUkzKTTUe276RhYBHu5633v7oY2aE9yuriXHmqmvagETnfeaurENycYn8xFUMfT728atS8sZ1kt8N3nEstwZ4",
  "key20": "A5PRXczt5a7DXoLYuCuRmx7ysDyUYiW2rLt5j5MVFtN5sQbPnHc7aDRo68iPXZSgCsvjcpJNFk5MiS4QfF5er2F",
  "key21": "BnibCnRMepixRbnDHSya1Atn38XfD7hFTmxuyUosiDYNULxMzhNm9NFcRwanm77bi7VfZuL56rc8tVbeAgkSbAn",
  "key22": "3Yk5o9TxoABb4mPgkwYboPWNUT22f1jKVCJUdDcGuAAiApdTiMPDir5mZnkffw2mgZh8sBaK29xnYyMSze1FG6yH",
  "key23": "2s77sgJNKdszQfZrARBSd9zj8bdamcdNuEd8NuXuVE29mYUmR71ij7L13CV8CjnyJjKuLrgTdT9RBtBGnCcFBk68",
  "key24": "3fwRGXp7687giQR5ZTwb718CHzUciBYu67Ad8fDpALH7muzBhytx4sBHLRkExyD98kqkPFxme7R6eQLJzYz3A5xc",
  "key25": "3sRD7DXneiDMkRmw92c2NMbWBNEL2tppphDcNH1sZmc3Kns6SRRk396o4eb47cDwpHAQKLNtM1FponCACWhAmhnm",
  "key26": "4fkitayHRKxAKoBvusSiwkRoLaSoJmxomZXQoDgkFmAsPv4Ea3KBcPPUoiFthL9PbdZ5qFVcEUBk4N6ZDGpyKdN",
  "key27": "3AJukhATUQpXGtfsNBzKJTuXhYg7fDY5MatYfuwSZDU9QtdjDyJWxVvRAR58sr4d84BX76GFPJNsMAF68FvKjNti",
  "key28": "inp5mcvEu12BuidE7yBHFg5RM494Y3kxfbhVyuUYFiQSWwDwGwKCWuBHqUTZ8gXG695GNkR3q5kUaxsv9a2Spxc",
  "key29": "NphZURB9fjjhYwoJ3B3XZpuSB7EpnSUh4WMZkPE4maTy29bXy3qDoyyLXynHfY5G1uiKwTBPgvfYhtfTE2Jzg3x",
  "key30": "2f2r1uLVheDP9bsnBrxQr7ioBCEy6X18cf57fuStuzogt6cJxVjcyYBrXoZ3m1W7oChsZPzVdJ7CEPYCqtt6gds",
  "key31": "2QMfnQMwrH7TAYt9B7EiPBgm3H3mFwJXDLVEUESCPvpkbxdVP9rCzCnJfueRmGVKqxvxriiXikqRL5MfJYLdjsM5",
  "key32": "3cVzGhp9Ru7quAKQT6DhPSMYz3oZKh7wM1DcqGQA6ucTfGvQDdnrQ34PPy5kBJAu7wgzGC9y4yxMrLK25VSp8nxv",
  "key33": "3Qfb35wsuVVBFn6UXnDrUD1MPhxfmCYaxWEMx2bjLBCdCcoC4xd1EPzyNnDCZjPNigJUjUYMsmy9CQT4f5ZYZB23",
  "key34": "PGNi8GRD9cSHvuq6AaxK5rK82FvyMggkN8BnoX78qB5WtkRezy7eWTEBLgxq4KNVyX1jHz5nhm2byoL7pqnkWLN",
  "key35": "2bNpnbP6qsVVXRt2NHza76PvcNoEDHgtueGGwjmyBfDZQf5bh71pEetsyDCwXM9UHB3fvp3TgqVAPndv7RG1eqki",
  "key36": "2PhMmzCVdBF4B1EdMju3hf53Z1qh4PRGDBeUeKy8PTXUKDKnXBY8Nqejo9YcfCvUoW5AMbGPMmFsQsD3QGSiKZG5",
  "key37": "2bsqXKWTs3XZvtKUzqJf6ZP4EAFBDPuamE6i8qDbUuj1vx75fytMNaL9tnwHXhBKJq4Bk1DnzynzfjCu7YGdHhFt",
  "key38": "2sqcsgEA8b47To5uc836JudsREbZ8sNUjxGLvgJqNheaeajVdNTNKsGBjy5UMTCPU5h9oWyttkAKAi5W9a9NLzZC",
  "key39": "4k7GxxpHkmAg4getDW9uvwTYzhsnf94E3EvXVaJSWXqKVFnv73bNCnnYuX3J2ei1teWzxkGPALjeGTkUhULJivoZ",
  "key40": "5E4ADJnbpmEtfM9QMhLMyNzY52x2xfqzmoG12aEEwphhmxHt8eBczaRBX88pbfyES4T8cufq5owG9LKWwb9RB7yn"
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
