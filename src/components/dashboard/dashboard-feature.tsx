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
    "DxAfu6DQu35xivGbffEkxT2GngorE2zNZzmVzxHzU6SAhUmgpVG7XS2MzWgugD5m97UyjcbKbSvpJURPekBcFYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ff1bw48W53x9TJUQsHZYGFZUY5WBNocDBAGcgRtThoDRjrAfxeTsN4ZKcfHbH3m7Z13VHt5rDdnBWpVHcwyuhwM",
  "key1": "2QA22nYFpkrxSDnp7dd9QmPZzYwYrarEZUau2KhSP382joBDTKXPa6eLa4APiikaE8QvhexGmyYDN6Tin8oguXNA",
  "key2": "4sWuE6FRJffeSxePD9bKisRCXJoVcPNNngHhFnSjVheLHzzLnQA3uzK7k6mK9rQrdpLnfwJWXbMqp7WHJWBZSXj7",
  "key3": "2VCHEjNpBFKrpFoQh7nrVb5oSkSbvqLpZkxxwbsjkUzE7cxLj2f2rNgR9z3pcj9cmX7Ad4LXRdmorpVomr5255cg",
  "key4": "vLpcg9uKh7WMSvUXjGd24SctjKwyGZ5Vv6aRnZumwjSAiwWVTxYyABjJ9Tr4P9jjqcRo1HGaN4Qqy1EdjZbSi6y",
  "key5": "jYhXivXKTBGXPriExSiYJVPi3SGqJPthBDqNyrZHpqvr3nsu2xTiHQCmNBmTmC9CbKH6aQE1MYeanowmcv5EgGu",
  "key6": "5YdrSH1Tw4uC44r1XVw9nDAMgpa6e9pfZezSrTLzu7pNUER1TyK6XA2yCXnydymJge77corC7eSvdM5ZMbpLHYbe",
  "key7": "61VXFwT6cqRmuWkCpdr2TckBi98itSkPjt3yQ2CuWhdRGNi3MdLytLxESJPp2fFEpvZcsLYdzvAbtt4JwAb8sQJU",
  "key8": "4DxjjWUqcCwPeHwRELYLbknPsPi4c8umqPWZopD2PwEgSXK6rX2CVkuJBHKHmhHWaqAHAJ9LE6g6Gswd4vj7DoGP",
  "key9": "4PDwLuxaaQRmKzQcX7NcF6S2r9Ji1PaLNmcxRqSGyUhq991CvHV43ti4DV33CfWg9Gk4Qz2cSFJnTgo24syxUJNE",
  "key10": "2fvdqR5JUHrGhArtPzxXDYi8tisKB3DtVnhvfEjnQiLF5ifNyR9Mi28ZHTqwvAELLZuvhfmhaNr5D7HJhLRMAbuj",
  "key11": "3A95KdRqiFmij2qNdAvVjHxMMdtyVMpXDv3MrHADM1rheENuWPyQPiwWxrq2T6ncZsrc6vqx9CBUD9ixr6jsGacW",
  "key12": "4oWVU4UFMqgtpCtGEtg2dVXASWMiJMN1QSqgvoB9hyQ2vqsGmMR3ec1A5xYFZB8YPHc4NryxDU7nmeQSfGGFJny2",
  "key13": "54WMXHXCizCsojnDndmBtnadDwH6T6ZC34deN8e4mDRADMowbsKiEP5NW4oEXLkYCL5pvBa2EQJ5jMzGJsGMDZ4h",
  "key14": "4ZasB7kqrk7cwC19Qro28Y4ngNSUasuLXjvCusCvfmxHLQkT6a1Dr9fSHCn6T6gfsxG3ceBau7u9MeqS8qDcJfpY",
  "key15": "2rke258DcoWRGn6V5wTUuxr5f2KvBXZ9J62RzQAmRVMQeRgDfnnUuwsddHkEGBsCLvKgkg75BSC4diaqQRwc7wtf",
  "key16": "2YYYoSjTx8yR1ZnMbLRPWecoM8LuP7W2h1xVDGKpjxC1CPfKr8E5meDM2cnDC9D4VUw4qniLJc79QqsxP8fk3idw",
  "key17": "43LUnccqBfcBK2TbfYaZqwVY6ucaoXt5sZNZykVzwMtnfHSXYZv5e83K7BQBAmQKFmqKR54rDGyiZqnsW3SVjMvC",
  "key18": "315KKPYgbDphZs5SFYyKVpK2LtPQ2q5KzNt6GmQZJMvEuQipv27Qn3XirUiS73rmXmXqjCLM7V58CuZQgkZcXjAL",
  "key19": "5hsCfM3gbhhLnVAE3WKe32PZwyWhvcZfTJzUtXNj9ezBDDbzFW4bAqzEP3VLVaVbAiyzASHcqkGAkaTqNQLKifBD",
  "key20": "7cj7rsoigHL48r7ufGVq58gkH26i1wJ8456w8BkeUNRE3QHAukF1ZneMeBbDobw9L54eBANUpGTSFw1MzndJPMR",
  "key21": "64MGoLCfEHbbyzwGKWB3d34yb9xPJnGAqkV1f6bk78XVzdQuvqs2WQsY9946K2MLhzxwV1bAKzLhMxUj2nqB4m5a",
  "key22": "4hCwzNaq9Pw5VqFwj8vA9HJca2kbiXiw17vHiFXB6NSkgVLG3n66Ueu4q6ycfDAcHh9DbjhhuAhTUXqA6AjWLg2z",
  "key23": "2Nf8JZC1aMBSfWychHqgpAy9DwKY4mVHfDzLiiHjYFwz7ByrS2ak7XH36PiakwuwdFcdz7YTcJZegRj6HdtgXj77",
  "key24": "38aJMnTTBnhnybqa5u59M4HMQfiz5JfXtXsXZHykTZWZ5gAH6p1tJocXRknvpY1fFHG8ztwKa65dxzjhQDBMjHdH",
  "key25": "3zsfhvo4rfQ9r6okTzGtJRvrKSYhfzxJm7K6VwrsF5mPHZroExM2QGPUJUQ2q2GNYos9RWP3ZPCVtiR31NsisAY5",
  "key26": "wPvJrouJPLMbPspHScQTd32XKhsXR8bzJvg8ZnhyoqLWQDuXaijdzwSeE7VQUK1p19n6ZLgSGkBehfUzvCsNTCC"
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
