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
    "3ro7KABYS8mGBxwXPWf85pPTioPfABnNWkYupdJWyCBXa3Aq7vfccG5w8KrPmio7M6Yr6S779uJFNC2rfd1AmSWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P577uLrCV5gsgBAedfCbiu7w5ZwzfoXBJBUveaNTVGDxf8fWwx8wie8TRF3s55VSzm46dKhn16eU84TFxLbTeqo",
  "key1": "2skgDxDyTxQuhZCtQc49U8k9xN8m7HfS9dpVUeQ6w51kp5mgvp5Ev45NkkvXD7y7pBzT9B7c5b3gkymgFqSjEhU6",
  "key2": "Ydb6w8w2mDDkSDGoPfJTdRkd1pW3yC17SKDeZT1EwtY8c4XCgzzaguZPCMfR81xHBVuR7RktUHqamdyBCooR8HK",
  "key3": "3pShT5G3kWWoAs1cCoXbCSHGWgCJTKKTpYyCJhBVuQmnZNniJ5N7diTPSdXjvDaHnJ8DHcbQ7dNPVecXEBtL3KKj",
  "key4": "3bE3Ntu27ejWcmbSmFsw56QCqvRbEVwofrEB2nrDgdEzvFtyqi5iahY6kCQ3gMicvwDBZqDYZDB2DLTQZ62DMoZV",
  "key5": "aHc9MGXqjQq8uYWPRr2T98nhEKwD2gQybmfHgZtqfeHfTtQkpeupUyCLzQtrSdFC8p7s9m5najFHNynTKzESdnz",
  "key6": "676F3VRJbRYVc2cmWVkqyEeYzUGAhjHWb66S2uHARTidfw3eht9LGPxCNDvLzi7FY12bof8pCLk6Kwnf7m7Hmzyd",
  "key7": "55PC9dMuM14aceTwHbtohcYMaMqH2Mnnem7XFef1VRJcD69hX9ofwshbUFJWGJcxhBLKsL6dZqNZYXGP6ja4h2NS",
  "key8": "4BwrfQ8PsaibnpX3tkYALuohkYHEy1fcZiankQ1LPdgNXJpwWtkMy44wnBGyTpo8M9wGw6UGbsz6yVjR88aHBGaA",
  "key9": "5o9aRqnkJyWW8TuvH5mJsV27E2BACpVKG6cPwvdApehpUREHn3U7v9R5fVumrwaepi3cMyhgyiJTjg3FT3695R9N",
  "key10": "5y4U4p2VhZFKVKF7K72VuqLQ5Wfrwb4GdyTeQUqkyURrV1txURAa4h5izZwnsGzXp56j5TmJ5wdk1CsFdqs3Y8oh",
  "key11": "34VGtypUvSJd34ejhxP2btCoFpkEN3uUmQaqe5NA2Cgv53hgALmWT9V5oQsUxbNfGpHRauPNRAN1thDfE2PLWxBo",
  "key12": "5UP9rvoSjP78QijGGybFJGxBAfk7kUqyFsBaRnE7Wvxj3hU1ThX8CNC71jDa3TSWhiMHNfrov4nQ5faK65jkFpx7",
  "key13": "5zDensypGVVXrfohreULxsD8VF8cpTVH77bXrgW2MW5QJq1GtMgfvjV13ikfQDk6BBPQbFV9Ckr5HxU7Nbw8XZRX",
  "key14": "41F73ZYksGiUE7GBuSB3ueBk68fh5VbcuM7JEP6CQtNRCMjUArLR66occmGeKKWfEgFEgr4hFUPmDwwcA7Zxq1vG",
  "key15": "hJHDbSo6aXqFLVwHZqTU1d9HC4ZJGyBPZTXoUeaiKzjUFrMkfgpDDEgpnqZwLywF4ZtD2su2XxA5hCF2JcDhJ9m",
  "key16": "5kwUUfcWXH8JSiLX42C8S9rzx47UQAmZhqt46edejNZSCW4RABnZBzjA1ssCk5cLJeQEvJBBK5Jea5Nw6D9mjVEx",
  "key17": "5Q2mprtQ5FRUTJB8yJhkVoLaHtWuq4Y2E7bxZcg4fgV14C3qf42sNkDTXMeEFyGd3zrvktMTnkn1vky62ARPRP5T",
  "key18": "5eL3ABAsPeAANRrvnpdkxZcWA8sE4mL7qqe83Wtqxy3ALY1JSsY7VQoZYJhG7rhj4sVXjNdgQfz117Mv7wiRiYVR",
  "key19": "5UW51Ukug3TuXXuo1or3WD35Dvpsts4TDHj62KC8WRmmkoaTPURFxJUWmvYXojkDa6qEvwzhgs2pXXJii9hZPz2L",
  "key20": "52LtSwLq2NhH1RbGziHQCdCLx5KJMB23WJAR3kmAE6sQa91EJURQx4ooGrpAb3o3qzNNN1EQqMqaqj3h9t1jHkTo",
  "key21": "5z1fppAAX4xHkCKY8H5zBag94TfC2xaDA2dUGeGdKGLvpgEoi1HNEVkNNQoEBW7fmwyvxK7iXLfELRKgGz2nn3hM",
  "key22": "CUEpQtfgiCE2jKCFh6GAKGjY18dw3Xww1wF2LWizWwfh1Tg6wae7BX8fNUz72r4FtPQbX1XteTUcPDpbd111mfC",
  "key23": "24QjALGbDvJnxji598GV4n2Y7LiZNGPu7sDckRsuUxiwNEf9nwghudDSR6ukbpCsh9KzfQuLkWyup4xZTugcRCNY",
  "key24": "4YxSz3q3Y8ExkMtBDFqJocWynhfPk4gDhyfiCQveeCi9zVvV517GH1sSmKW14uDQYBdGwMiWezTNbDbFWYyEa9Bf"
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
