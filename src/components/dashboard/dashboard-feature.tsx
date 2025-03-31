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
    "2b3WZeak2VS8EMdGzv6Z2Es3WzLvbsiuxMi93ivzUydTFpujDjpNGV7SZB1L1Atp7f1omBGnzWFEM3zz3Uj6mTGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fy4DuqAj4tWawCirfUAy1B8ZHtW4SC9AHFbMyGYPzVrt7qjkHaySpzp5hfgk8bbseg1bksXgv9P3HkofK9kV9tY",
  "key1": "5cW9Jsh2oMBhVRERA4QBCWjHyTc51LXyyihjioTZD1tBJtYRL5rECV52GmAYAJhdv6Nri7GfMJR964FewtPLVrAp",
  "key2": "3a3yPkiNXCui6kUyYLoFJFoQAgDbr4L65gojxS1hbXdgpBcwepT45YeMdTMAt3XGrAAtk8RSmAd6wNcrSmqxsaLG",
  "key3": "59jE4B9cm4oyYyy9Ju14btS8wT5GqVd4kUFErK9ZcYGCwxpjAmQwht1yH8fbU7fd2aVRMfspyiGf8wqwkELmy9PC",
  "key4": "4koyofXYf6mojyCbfaFDEkRB1heserk1juqH9YozuoVcq7NiZ4obAo55U4wGTmVk47eWmjw4zxnXbFwJQf8RwVWJ",
  "key5": "3XnW9sSn9JMd7VTsrDw11vEVrR4LvCecFU2Uza2r7jiwCyCZ6P7gVeqoCVhe1sDVwmikNctEJSwU7mRaCTMgSrR",
  "key6": "2YDbPQJBG6Q7DWMQprjySwJ6A3PaFEpTm1xZNL4HC6GsTJ4wHQUQ5gFg1Hfe1445oc4ATtBMVqXwJ4651ohZ3h2e",
  "key7": "2F5NMSagzpJtUfN9sQy3UMoBJmRrWPk7f6e5K9ATXqdezyHvZ7DKVmueBRP4FtXLwrLQ5HMZ6wsSDQvhcYBzy8L4",
  "key8": "5gmVbufFb8qXtw3rQGxnjGufjzBJuFjvpqR5pEYEAXPaHDa8VvWE6WQqMmdKZHsTCPKfTzW8E3aGWLCt6eYnk7Kg",
  "key9": "4Z5DFpSXTZoEWXthgfmprak8Z5HN2nLhkcso35dETiF5PLBrSGRBmy3fWkBU88fET6XPuxWeaDbo2jshssnJAzJJ",
  "key10": "iY2VN5dZmbPdgvQSQiExj8PLSjvFq1bfvPCAGLimwxTde8pTgaJtQPDo2vmaYth8paPBc7jXusHZgZmdd6qdiJy",
  "key11": "359J9NRy1VETRMGUZd65X9bG62i3D2EA1VoVRkgGHBUP8tveogZZnxJyrD5zDB93DyR4jtZ9pP4iV27Dg47oNTX3",
  "key12": "2jjcjX4q8hbystd6UbssiQEejD4ZuDxJPvGcsQ11PPG3UUYSHHiyviMAtVGFGgAWNQyo7wLXBJRQZ2xTmcyZ7HeP",
  "key13": "4WhdCxHp1wHkft5ayrTyn4M9zKb6Fay3MKTFj6dD89yK4pD5LkwXDkJ69wMioU8SUhH3PvwNsTmmvULVyRReLQyd",
  "key14": "yq2ugRxUt1jRAWm7YTxmRVkseru2oT89FUZdDyEtnjkQz7kxrmiudD5sQTstDdgWavYVCWP1JhroUH6zoNQtwau",
  "key15": "4o8c7cQBsuJ8LRDCStCanmvTRchnGcSU4FFDFxCNcLduWfNwWf5jgyoJqzJnNZWpDNXkHCFwKJSBjNjjne5WTPvL",
  "key16": "2guJVNaJg8QdydyhW8KGCYMzXAbFDuXht8LNh4HYiJU8LqSvf5LEKn2VBjF99oefwinC2WknWQ4E6oN3BeCdDT6u",
  "key17": "5SzFVzEtkn7jGGTnNk8cRoe2nEP1mvPsr9wHv2fj4BuFYGbKsqJBzVVwVPz9EGA8z8yd6hPzZu7hmyVdRPDPEwhm",
  "key18": "2tF6sKs3GaXrGZWfDn5LBxMCnG6G7CvDuijTiHp1GKhyAmDVr68MhgMKJUbeacn5rh1dovoXM6NB8RJq2MJeJ1hM",
  "key19": "pT5sYhvJ3eoMpQ1FTkQWcavXvFuFmVj3zze1oMBmpm7KyH35uEZSVeiJzbt5R5pbg9LMz89kJSXxxwDC2NVVPWK",
  "key20": "2aZYqZ2DVTRPUzEHj8NUSgCmv4cLzE2PXa8T5s7sMExx1m8B66g73Jyyg8DLJuKN7bbUWQa3DFVUckHkd6jqSEf8",
  "key21": "3XDZekp6tSAysRkNiFvH6n8E3mDUP3UqyUCyJaFg32zdssFdvpNtQshGADP76haATbKmQ56o31KTMAgYtFjYydcL",
  "key22": "4f8wLK4ce45VuofQHYGQsMFJGryT6zR7TeCxwCzZJdg9m2KMryQkRdUnyvCCYHXt2R2ojpzdhwWZQ7g8sHJEYnWJ",
  "key23": "hd9H9QdxhCorDCNrQh4j96aiAencwpE5P5WERzz2rsUXmJpba5wZg1d3dASDandM88QAvgXnmFgkdBjtw6xdMKF",
  "key24": "MZng4sCjBTwj56PtdPV5iGenwA3kMH1ue5iaSza16btRKWc7cRg3eZsxSbsHZd7vqpXbzzkMj3zFVNXm59QqNUn"
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
