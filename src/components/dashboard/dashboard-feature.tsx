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
    "2AZoFi4JGXBsWSs59HsxCGV8McNr4a7inis4fpBStp4Wzz9CxCZdjcn2VtcC21y8fxo9Nj6W69xGq6vt51rt9xM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCyujaBxB7NdwsBeMGBW1hDEv1Da62UbmXYqDb5xNNt5X5kj8WAZLQ15yLk8FG258q4of27YxikuxBtKgLT83oc",
  "key1": "2XhTMAZzwsFvjRijr6h2v7bnACur77GanuQhjnGiPjvasw4cbEhXBRMrW5ZC4NKLitvo5qggAkbuFRsCWAFWrGhV",
  "key2": "27kYSF3EeRGBmets3YZvGbYEuaKjPVDLL6NPKtGGk9p79mGvyr12BKvg6qTXka8qZhXeEjHRnAJG9kfLR2Jz2ytJ",
  "key3": "5kaC4ztCZHLF7wseWP2Mku9wnkEfkZmkyGePnqnZuUQMaivP52aZ8qak8Zj8MenpoqwoHNAVhqL5a24vqdkcWgwf",
  "key4": "yxYBNTnEKrPGdYBhkgqU12sUt6L2G3msW3f1fSj9VtV1B37Z9snxSMQLbQhGv4kZMA3BTmKkQRj5kXXTm11M7Hf",
  "key5": "5cJrqfvC15yBfkQuK9AKjbQhMLjE6YRcDChceTFwCK4xhjdxwRgjVZyC9AS9D1WwUQuf5CwPMBmnFE2jHXkgNAWW",
  "key6": "4p6GnVFMiPFj1vzSENRSgLd1S2x3mkMeCtCCHhi8NYDYDdZodDqdSTKNwcCrNZ1MZVkS1V555G41tMEid6Gm5wZz",
  "key7": "2xs3E6QqqKiWwMTQeDp8PVtedduQA2saAmKeSTy3RVsZ52BnHU75KKKibdNtCh3kbfdxzdZbgNt5Jz9RAdRjsmN3",
  "key8": "3HrZH9NGktXwv3A9YhQkLAhKyCZdWrAKuvwFLwGmtw1r7pomJe6QaJoUm5unwNtU6m5f1aBzuuXz9p515pzeDz9o",
  "key9": "27cvfXso5th5Q4Ry1SMQcbs6WCgkf2vYtFaXQ6voAQF38MveKg1XkUQtq4neEy6WvUDMTDvmVA3ycExN1iQXdAtp",
  "key10": "2hgEH8qQyyaeB3tZR8VRN11KWaRkwQLPxrRY6shttxw64WaqxKKHTSSsGcpyAoZkLZuaNMsKCCZ3q5JZfjD6X4d1",
  "key11": "2JevMozVuf9qoyUnaBTUE5EB8fDq81FfLVdvRtxZyhzDM48XLozpCziT7Lm8RMHY1rwZvheEMiUkfMHYC2HCsVYk",
  "key12": "51jJsvopKMCF6TrnYVwjj8qVUS8uhDB754SxfAod18ekSvU4zzryxGnnGJJYX5mPL7EfvwHjDrZqQqRZr6Gp7iJM",
  "key13": "2uK6TNbyCT1o9y4rFFYjq5FJ3WKxERvCgqhnemXX1wjUqu8kGw5ugY4vLSWMJDmqVhapXJia1sSm1cD5JjtyCAeP",
  "key14": "uXFQU2oaydrebPA5biouM14DChBscwEuMKduUmt2piXJAXdBW3izwNLqRzWiBK9onrGDBeGCUAjt6JSHsENGaEq",
  "key15": "R6jGniUL4ujs7Dd6VxkxhdUNRDYQPBGiFiapk4jndJKuVKYQ52pxVpkLFrvhVPaW4ysZJLHRwNumqrj8eypHu49",
  "key16": "3gvsWzmExHMudTwWL42QYzJi4o2k5GB2VSNDEXfX7MYxjRNMvK7Yvbsn4Uj4KrNTCCfuFop6ki2HCvKhDSFEAVXK",
  "key17": "3qK8gfdTVBFNuEaUonn2sQcwPd6CW7LJV4pUkHuu14kprAZL9nb4kTPJjhQkpMeC42qFAQzZmxci8ocnxi4JciDg",
  "key18": "2ciH6GQottqznAAQqZZc2uKnBJJcD7vCqQoqVP9tRTWBiFkyiDHrdYt9UiZv2eibngSK5vkJUoS36p2Fws9DtRS8",
  "key19": "3kxzGebVBX1DJZnW198pC3ckMFeEWRLQWz4SHmGbGuQ8JQhzSCFQiqySzPDLPAfWJWt7L5H3nR1KpaSsGwtNVFUj",
  "key20": "5e8hLhKWBos2B1XTNVojsEvmVDdSKCRihcCQmk8YLW2Tz9Dhewcmbxkc1oiQQ1dTBcyrE79YArdMXipxdQZtWuqc",
  "key21": "61vrpKDLVXWWAMJffMGBet9Tz9WSFZPiwR4Pax6aKCeJB2YsRTjVZrgSpZJbFSRhTtb9vHfxQjHUp3odfxFrUEFa",
  "key22": "47cdgLUWb2RQzJ4FDLg2TmewTWLd7gcRBZJLThrjMSt7DL44iBFaxjdoyYNYb81S7Nz7mYZnQ4f4FAdavnq8cQkm",
  "key23": "XXPpQdN3Up918WTZqnXt5SbW93FzCq1XP9faUJBGmZPup4Wzbbmq4pYDcDwEN8dKgvtb9pmsahWFaPhDLZs5YDs",
  "key24": "4jgR3hJY8D4vTRE8jdCByGWqSdMrV2piWEA9DgWcZK83b1bhWUwNqpvH7gJsXgjhokZRSMHJCTe3xGVbsdc2VJSX",
  "key25": "bZAF8JhkDcJNTmdr5xz7yJm4Uj8EKYd67L58rQdhuZJRgz27XSWCncMwy6K8uomfLwBDGDE7cQmm6rY4zXSpJ5A",
  "key26": "39RxasaWc3PFzXwPXGt9ySuWXQiRT32HsitwWSbJ6BTFKQjBxAg8zbsiyqpvYReFkczrQYhUcWL1WQ2FVb1WarZ2",
  "key27": "3w3Qpo8ZML2FNuC9qyJG4iMWvWvvy9156vu818aPMpBUZ7XmPLMJigYC8EvLS6nxnDDppKx5UELXDsd4w2ZJK7VA",
  "key28": "5WhPnuSHGxKztUCVZDtLWixx17U2UW7HYStUw9VL9PdDEBi3FMstJjZeJhKNrN8Xy3HtfgAhudLFece9RdzGpUEV"
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
