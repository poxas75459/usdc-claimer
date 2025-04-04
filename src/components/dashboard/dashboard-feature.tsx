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
    "5LZ3NvHQxJ1XyEoopWGptPquhsXK6TEjmcLb4h5Mvc9LErxrSoXPncxxuBjtfVhotCjQkKb6DDW1LNs7jXgUPRF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FF6vVfJ7qxV6bVUhwX18TVZVr1pqBvr1Gm78vG6BWDCoJsFLWiXHqduvtAFGcxixXu5FHKquN8Yj8WXbeBQUCxq",
  "key1": "479nF939mV1ahcE3iGW1KvTje8TQqsJTrMKAis8xexBNHr1CX9UM8EsyUhT36WoWo2n1FoS8ymQBxj6TFEZ7wftj",
  "key2": "3BeRuSqtL8PamQ1BfGvcgBnpWDwUYagtapkREuTazLaRXR4m9FxSGoDq5ufd1N99dX7zxnnNB8YLuWUaTh3URLfM",
  "key3": "41VC7fs2Eb37HM4KSVu3ufnhU9bCjfnPHeLBJBVBjSCNYdYn8hMPTqvUVvsd3mKCoX71ipgiavqRRHjdBAuBEjRN",
  "key4": "61qRGbyAQkhnsbb6dYm6yF9orqcqRcrxD8mn23oanVxTxw3gCfLJTVj4BRdp4K4hWr4V6kPFA9i5hNF6i5mYW8wh",
  "key5": "2juH5zHpxYudVoqFSbY4rf3RECn4j6AcMzzZdC8yfAYHQHQaz2eYTqJhWtuZicvMQoeALoURsvPRZAs5U4mWB7yE",
  "key6": "mYS8GHZnHwcqXrRjJyheswcuQ41eNXiMWXN5Wc7gxruiiUYjWCLXUZEPz7r9LUR7hjB6cnceP2ARDuiJcGtKA3e",
  "key7": "2fvfWGFXesLhKsSuAtwuV1P369Br1znR8iWd2xHa5q1hCG1saw6EmSPGLEtxp2mMeCm2B8sdwTqCqA5UFJ9H9n38",
  "key8": "676euhkKc1atEjXjm8XiMystj8QSBfQA1UfN9XbB42vrB4YmaM5wF7yLtX5JQPPJkjDPYs3pGqgM1KPEZa43r6SV",
  "key9": "EsWHmJpMq2evYqifJ1UMH4B3vFLXVKkwyNBPCCCBvdEn3Wd7XYwBXV6n4DW17ZHTPHo3GpQnvPFDzh5eTQXx7qT",
  "key10": "5ViLTGmzfdhsUWHtLUUNnNMitAWpjk1kiHgG4ECDs7BFKLXpQCyVBNxLapuAq5HixTrJE2r9eUbj4VyXViXbzpeN",
  "key11": "2QzuDHcEWqfHxL9kYUKmAB7vo6JV9enNysknN5svgiWt99ddeMAkmWsAGpZsrjxEEM1RuRrnrPviAGypFc3NcVN5",
  "key12": "5LrmsKbs5nZsgbyetN9vXPcXbY94FmCvaQUG7kueksfvZX147meCbJoPaodZWuamTRnnkS9uxYV2oexfQZwNbxk4",
  "key13": "3bQ79VSmwPYR7X8AijZfUSEkfaUah8c5Nv4RUhZhCC89NpKYgrBRS3bQ6deS26Tkq6GK6Tw54Wxb15g86XuE82h",
  "key14": "4JCFoAxV99nLHew6m9sgPTBGwR5M563QwqmhUt6yWZcte9mhWMYUx9J1xryzFuF3sCujk4GWEbbRXGTLu7T9KiCy",
  "key15": "2Z1vUhKM6WDW98kZJqE8VZd1b7AYBT9UTc3zGk369f3kwHNvKP4Z8GfmyXVJHaVkuTrsRbg2g3HAHRX33topsRER",
  "key16": "5TVyvQ9pskS8Vk9JZLkdXyVxbseTM6o2PLSmXuRmx5HFRiikoZeFSS9CNNefrBgRMKPGgsurWqoYTViEz1rxqLrk",
  "key17": "EVdNeqUVspiKe3E9NFWs35iZhtgMjD2Y2hsziJq7EyyxWEXiK85MPYYwtPhRne8ynpSaxAr5C8t22P6uGbptYqZ",
  "key18": "5x5wqHKMSgEKciQKFCPUK1KFAyN7eQXJPwiqTXSsK48oY71zomD2oCdHGKorXWZ5urgzquEapV4yYgkxoRWDuZYv",
  "key19": "4LVRg4NqdjSQyaM2aughZSHTetxrcA8G4x18BpBwxDpWt8oCAsZZnap9Lp7r9LuJebh22pgwG2tfW9oMR71qX2aL",
  "key20": "33Fs2Ta5fNLfSZsc6NhSYF22nTwm2WAD8FwfW2z78SLDYeEzAHyDx3sReDif6cHn3wH7Kuzu7bgoQFTA7tA9DigD",
  "key21": "2CgiVJx8hfNtg8sAGm1t3RcJmigT5GzaWeYsukaxfhphuCM6b8T3s6BCXjtWrBfkRPiMyCFQu8LdeAspvkTU5G6K",
  "key22": "41LLuMJ16TXz8aVbzDAf4RSpDjbM5CUpYAAPpsdRfy2iYm4zpenbupzZDUNBKvwLqM38Xy97DSs2G91pAsXzcDCJ",
  "key23": "26uTJFawDFCoc73mtjpxK7Aro3mkoFzUu3hvWEiHm7uJWt5YzBCQJmXds3o3fmyy7T6uyWoVvfNrYE3635X1XmMg",
  "key24": "4VTc3NCVSYEAuq64MhPNSDpM81sPSywqQTwuMVCi1BRieg9C5yaPgtMDeGCDwwKecUTYoUmJFGX7L4Y4qgWDLbuv",
  "key25": "5qjfCQXaAwCPTg42mht5bQzQkDWc34kSNTokUPLqsuWoRRFYAN7YN3AxiZWzmqVjBa1Rpt7AgXAraAQJFqXFg9f8",
  "key26": "5trSuqawETNypuD1wYwxpXbtfA2cVXyr4qJf3M7QFXRbgoRHzQfULw6PKSABKCBhfFcvzymoXMGayFDZrMDQH4kU",
  "key27": "2q8reW5ULZoRGQhLGwCBvnmPYurUc1PikWEKRNe4dxZvdQ4c5YSMQEYfLynTT4sR4m6Uz951q1X792kg9nGqhLPs",
  "key28": "4PhTVyjtp456eC59KX3eQ8ARHPNUSrUeeRu39yGwuP65tjQgRh81Yz27warNUAM6M4qxpDZwxSTi315B8rULgD2o"
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
