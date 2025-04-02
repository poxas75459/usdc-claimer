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
    "eQwPL2sYroqFqWPi3zc7sWok6LonhArKbgcJYUqdAPHPHW8MQfstQJv23vdFy8UfEVgfuPPfTkh8rhWNHv4NvZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zs2mBAcmxbophxLNS9mYfEBU1MbDdE7wEY1dkoGSshZTN5hewwbtHfY2Nu43DuwRrRA7e5zwjiUAZWY1bzjC58v",
  "key1": "8kAp4xRpgPZPCDFiAC9PDwccKyFbYRCUWvx6Wpa1qLa9frfWQ5sdvtaM6LS3jkWov6AczAPNenNTJqRhrY7ubEj",
  "key2": "2DonhVeMDyvcrqkLfnS6DrNqiDEGrprnHb3j4AUrVLq86WnMtiCX67BLexqJzX9tRffEKRGAwoxjW9yJkceCGoMG",
  "key3": "2YpXiuYKRUnNw16TQM57WesYdrKMPKFciUBVu9SbhnQBBVeN1jdHnHfc4Cz2cG7XUUyNVUgqAnENFqppgD5mKQcP",
  "key4": "4cG9csCNrimge4WerapAzXfMWzPtMkE5kLtwMb7R48g4RptnU2ZEgnEKkqgdBBMJqnjLE46aiCRJH4dKkRmKRWPU",
  "key5": "46otLnYSGnMSEN7jcZ9RiLmiX8Jo7pCPTHqKRq1r6Ygq6aEuyKScxDvE234NvH2CsEtbK29znGGo65aP8nuQiiVh",
  "key6": "3LhBK72GTqX8vzB9ZDx8LSrEWWZS2M5rZD2WekRZAJHJsh1ir7ZvC3cH76kpXEDKVJRCbEdS2ZUAk1LFfvuuhYht",
  "key7": "2DYQJY99kFKxCWWxVppxPrEvmEuVFCentK27DefYrzVByfq96xHJHio4c1iT2VsXUf2PkjdR3yxyREAebj4txpB1",
  "key8": "KVbKgMpqHNZfPo1t3cesDwfLbKnjrRyCoufFt9x44DQyneMuBTzsb23CSCS4oSqBYSeuhjgzHoXNYLtLAUBuuEs",
  "key9": "48Phj2FYaWDs56Ncm92KUFgiNG8nGuQjmohNkPMVRxwXVEubJ274Z7VKrFnLwvourc4cm9SpKuXtq2ezVSBmthfv",
  "key10": "4mZNS7s7uMWFAHSxD1gq6wgRofBJrb4iuqdAUKMy3QtiGjxcmQLZ8TnbzDxW7a38ivCY95ZgVN35TATf6dc13Qsg",
  "key11": "2Z1AefgjHMuGbZ8dS1ZVThtoWEpJWhSekqv6dbB7fRDNghLzFPnyLbWAQddtszVKyuM9iey2jczQQ3oBtP65ftWS",
  "key12": "5d6JpibeJkTn6dWVt5FabUv4cYVZinDjX2cFCirMyTmxpqmLHz8noqDG83NCrhXrh286mektNaeGUj2YXaA6WAFM",
  "key13": "28An1uw7kqaqgsNR1pGJi2WZsMK46ZfkuTK8xKxsdNZofuF1j6L3psbwcQizYZwz6KFoFGUwD9tPhTx5DF3PSMnx",
  "key14": "KE6vmr6SvWgtxoGjEPV74m1gKeyzpsewV5ezUp51JJUWnR2QTbu8pi6MJnAxE8XrMnondNrvdPNZKQwS4ajaqNX",
  "key15": "4NZuqmiShQJZjRmDSk7LweazCjRFVYFSLN9JAjr7b6yACSeYcv5W2SwK323K28k5T64VXLbJbAmZgXaCwdePAmxo",
  "key16": "Q2mbZNnMpjQuvJjcdBcHR3ZrC7iABnkUdh8AP9iGgeDYPwoLEE9a1SXgBGGKmhZwndtoWvVg4JwVaCzJBQZEsKv",
  "key17": "2cADhtXzHmTDasJkJThj1gytpqWQhwuFHxZb3n6Yo7axh1ZobpsCLBCYYudPzuwh7kS8o8XT5AvNKyHH4UWPZa2h",
  "key18": "3jyUDcnRrVJYSfErLHr1k3vvF6sw9HNm5iL9mHA2QjARNc45dAPbGo6Th7KwqPtFBBXurQ7YH2jUKQen9ttvjqSB",
  "key19": "4Z5NXyApZG9uhPKZ8dpRruRgDd7rW4bPEB3YuX6cU4K8m3QmN4HrK7EWdhjA7dQZDMvk4wnfzKEyUuo48M72pARR",
  "key20": "Gs7pQDDMezYbx22Be6AA4AtEHiiuYnZudfRv7p8aRqMQyEwfLajFyfpzLYUPEcQDZPHt5W5oesguzvcb4WD1nkA",
  "key21": "3E6YRjCBiSkqTEbnmV1fa9jxLfyZgpgyRM5DwdApRkgYh5SEYMv9Y17PYi3eu545ZAxdfTNvZYA2p71xBLmGXe8g",
  "key22": "4jrMbz7LMNREjM7JMpwWJGW7tfiZyYnnDDoCcTfHUzMzXAMs853pDJRj7ovn5nwb8XXC3FQErs2R1QEvbkLC3uTi",
  "key23": "ib3cLGUnWPVLohFjbF2t6YLWddMJuFv4DtbkzbqzxFWa8BDexnbo3mDCYfDSAzZ9cqwUrtHDE1TXovgTx15PN83",
  "key24": "29PnUYNFrVkgMh7FfdBYikaBFymt8oKhPDuejXS6BF3VhknDpGfRy5DxB3zdxsSzrK1J5VM6K1xxLJytuqrk6ZLh",
  "key25": "4qN2emnfzjACMVC6jjzuiKeUm7DkmwT63M711K12oxiUw9Q7AWUVwxDTE12Jx64sZ9JvT4G5di6F5Nmg15UNyAMK",
  "key26": "4Z16jCFCQL6gcVoZZ7bpMRU8epjzyz3uD4MV3mMwpENqkY369Z5H4eGHwQ69eFb35AjuyiRb6se6PPwKEmAhAUBs",
  "key27": "2QBCrbExpJQVWeVKcTK93WuDa6HmqFtPcxebpU1QNijV3BcxKNcTG1veCePpBv28ohdFkBWTRt9BvMHmqtkFJSpB",
  "key28": "2DhyChpuY5x9n8oF6uNyYhQ4YCo5ScVZSKaZpVLpQHsxje9WSz4uu7hpjpbP3ntiUQpnuEe9jaXFSrpdjr9QnsHM",
  "key29": "4YjTJDvVMidKzn8Kj3s2EPmPpFBTuEkiVEWXL8aRfVPF4MeW1goRn4Tv8qu8Lhrid6Wnf5cWLK5RZSsXB49XjtGJ",
  "key30": "2D2TC1Najd5prXJBa9PJNZEKdtyVuTrKEpuA13D1TRJxqxcnCsf48QBTsMLAhFwUB11hNfharN4gkmcJQDCBXfD3",
  "key31": "2Bk4tQpQYbLv34JF2jU4k8tWoL6JeXMDyADX3xHWFZzK56r8hYJsyW29wzLwXcN56XCArtV9rj8uBs2MZbLTsxUR",
  "key32": "4xHAyELf3dRto231uMx5RzmJc3EdHAt8jAkusA57UNVPbU7326AmrVSq6wDP4a29WeoUttEV9XGf6sArn89u5QPe",
  "key33": "5akuMBMu9W5pxBoQXuwpsphV7xNmmLXbARNNKChHsJ7VWULpVexBRRCR7W6yW9p3ki42jXDqkeJZVJJKuWbetzSo",
  "key34": "DHqHrM26zAWLTfGJSz6EqPWuJ9dvYNL9Emw44tGd6XWUkD43uu5WNMZtSJxcKzSmabCMKbt9SJ7xbx2t7pT4o3R",
  "key35": "1sYGekdkhdF9weExqgEARpbskpq3M9rUHLbzskNLAEiQRqFwxnNjYY1fW4csDtBvPnfzaYtCKKfbpSL2KdXP111",
  "key36": "4WayG4zkfw2RVGZdacQEx3ex4sR1foRHiZfo6AgPSCCnsPEY37KC6W92ZQqYTfgCAnJU9rnxpzmJzKfysq2BfYTd",
  "key37": "2EBLRHuqBRg4jKTTDXpXNQzKwM33MbePeWADd7RsUxjKwL3TLSZCRT3YbJE7nVV5pBSracsNJ2vsRLfs1WEpXZvA",
  "key38": "4JZW6g6X2YaScBRoMz7bQSv3aRFL5JfLPsBEnAZu9Gpvq2Bk691NR3jKcogGdEPPLhYsJBr1wZhZQyrJoswgtEA",
  "key39": "4E54zBcZu3hqQFn3Z1cxiicNqSbRR6bXigSouMwPWTxpcpPcezLwBDXa4xgLw3V3p7tyyENgUi8esdAPmNAtVBC1",
  "key40": "2k9vTFV8Y6b4FE7RwidukYqfDh23rnSK8dnyx5HfqEwoV3RrYJrAyQxKybxNSfvsmD7pN9sH9WfqRkBtxtYLWSQ3",
  "key41": "PhreHPC5HEYjJAgZA7puHndUuc1oBzMVwz2rnaqh4irQR868Ch4TFNFc4uYnQbyGJ4xcz2yhxsGekfM8zUE5Egw"
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
