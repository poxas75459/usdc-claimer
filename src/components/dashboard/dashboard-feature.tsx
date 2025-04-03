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
    "3Vx7yWqYBviFTyWDJndf3FKjs4XtUWizXbhSHTtJiDigbYVjXNCWfijx5faGoBYe3df5atrdhe1VBYLmtZUWo5rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GAwujE9do8uWZX9w6DnJhSY9a2M9Mqkg8wZK5N43qHcpZbVVWDrYFMd9EMPyuGqhZEJLFWK6RwK6xZYzRBCJ7Vf",
  "key1": "637eaG6U7tq4asbRf8PnkmAx8XuhhrRxDLagGnn5ZQSsSqbdive34YYSdLZ7XFAgFhZfBJcHbaLifsbcAnzEtnV5",
  "key2": "nCGZqcAcFUAD78zxZWzL5Ys6DnFeS5CdSNGvVMVQqu2wcmuBfdVXTA8FBgtQQKy39Qvmqu4CkuCfY52iEXGGbTZ",
  "key3": "5GEWdm5ZQRmgrRan5vjH3yx9gnAnYk2w8fcdqC6QjQHunqFnHUKWNbnxWnJ4z1gAjwciTkDZRXgM3wqpSbwN2MZy",
  "key4": "C2ya2mngjwtZyuUDTEYbnruYJxnuRGN4aDPvSGnXYDEGZ8pL5VPsttQZFxG3HoA29jyvsFLSVS2Y7AwShPZSRKu",
  "key5": "mjgBMJLLkZ4eGEmtVNZzdHStUNhCdGWz4uTo2tUjffQ45RqnhQNju5iFputYLsYVgvALeyqTK81c8CmCc3QEAYh",
  "key6": "5MneQmaKyAceUYvZehHh9mMRGyhH338xYLAdwQAp4pCwM2EEzkPozM37Vcqxrg79adMbf6BqqT4NAxMxm87Td2PP",
  "key7": "4jRHnDaFSzJkUK8FVKUtd23tfttzk3ZwoXgzQXcbwmGMLyXSfnc4RqYfhz2BJikgksairrDjvZwPcGsoWMLP8YtJ",
  "key8": "3DWC4ZsJihSy6REFajFbaa6GnVgDYRbBfoX4yq1s71V5sgQCfQcziHf5mdNHeXUJb9TqyCHY8TpPS3BHPLz6VQjy",
  "key9": "3a3WDaT5aURrq83ekp2wYbX6Nqo1E11WrtPqbgCUeLSj8SaXLusRBiacCNWF7GmE7iSZQrHb9yTYXBH1KERKDvN6",
  "key10": "5CZdz1d3HbLbk5mtcunAaYLPjDrhdmoqz6qeNVS3jCgcSrsFNJsSy741495PbPDTJu1jzpF5YhNNWCrvnn5d8x3w",
  "key11": "2AERbhnTBcSkR4VxDtsC195Nq3QVnzHP4aQgkjWPme7K5fgj46N9XyR7zH9antfTC3MXpTPVHvV19a3KfkQH1q3n",
  "key12": "2ccDpBCF6swJzCyzW6Tu88vipGXz6YXD9St5hmpvgHuymyTuceNFmvJgLNC82tAtNmGKccQSig5tNLkzkzN6oRph",
  "key13": "5PTbJnG34Sg4mtyTfZbu9gBNX2QRfWA9r41TDJnMmDXtCUbD11M82th4a36CX5SuVais1P9PSTEALMG3v2wrbssq",
  "key14": "5jSNWPhDqfUZiaNBX8bvqgepsoBLSRMgnyXwU14Sn5MnW7fusqjSBgEpGzcUX7xQMcjLC7Fo7zawqyWsBDoZYcvy",
  "key15": "5tLYaTzqL2ntnJpFnDaqTZPsn4YAYY8bSspM3QCqJ7YWE6ZDZv3swtEzzgPMZnq5HETHFKoEx1aDdXG1jLTy3vn5",
  "key16": "2ba5F3wPdSvY63jLsorSZ3CCksDdT843Qbg8fNesARLomyAPjV7PG4gciEW1vBarXtSb4nHXeuKqZz2s93rrLrQH",
  "key17": "jjd3BrTYPCdXMJGzeFn5qZNvkdeh6JUkfkvPQDLaE4f2vkM6GT6YH9RShnaJ79HMKnNZN4aNuLYEp8ju5KNHvMk",
  "key18": "2uBw3kwAEDYgFAex6qQX4jAQQgezg2bZP8CHoKLkcEJnU4cEFDaJvVnwzZ2Xf8psFKUXP6ajLYXc5Fp3oZ3qGoCY",
  "key19": "4pvPBsvTnz6RciCvaitydhx2rpD3KricqqDBfjgzXbJVLku33q2PYa1bSW91tWjmfJ6A7gQxvxRi6XhDXEozMtTn",
  "key20": "4apVuqwv7pjryFJdNK3hfFZBEpfkFkJ537sEVTq8nZegMAfoFRnMQTi182teaVkSKDiSJyWtrGbQGEZU6GCTYC3y",
  "key21": "4PXhiuSQ5cWj179fKfJzBmMgipmjsr9Bvehj61n7FamKtgveFYkvBqUshUFbC9BNvBsjJJQ2RfDWqdQQAVvpodDy",
  "key22": "3xQ7jHSiK7AAYUPYjejvMbtw7eEUFEx8s4epiHBTAMJcMT5JJ28CWbxaATQnmpC42PP8ridsjyH5QYiaxf8ErHjr",
  "key23": "5PXYVvwKkzTmiLzFTWfF97PhRT21JzJ88sJfYGP5AwF31jvbWouNHFB8i48XvkDRWLPKmVGAMMrACoWkm6cLaCGt",
  "key24": "3taNqQMT9dZXP2y7juu4RM5mdjuwsZigiyhUAZaHgRyMd4rEM4hVVo223gqG3h1ahyPXFyC8G529vbxNncAzL85i",
  "key25": "61Am13Tw6cw8Dfr5YaBVE1xHJGYa7ML8JsDaRahfVvjDdjxFLQoyRaxKHAmsABgM64yED9MLXbTVeL7FNR2nn3PR"
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
