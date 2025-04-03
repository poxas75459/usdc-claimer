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
    "4kTqDJiBj9KCJVcrzFvqHNiwj4DgGDeworgEMiUSUQMcQ7pJf9JUjCwWJjXBrGnWMFohxNmcdHpD89yURaG9GR2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMqoNsAyw4vtoNo6LDUN4koZHHS6RhnqotSaTu9HPAnjPehjQDT94ywqUVNQ5jTCZQT7DPs67oacELfXShTaiuF",
  "key1": "9AD1FKcPDHak7tztwZYo9nRhBr39H8hu8Sp6tF94DCRvqQwc8SfrihqCMYRmSwDoF1NJF1EDv7F4ZbNA8tqWpd9",
  "key2": "2dEV4e9HkRYqEcGwMUfHBEqHDSVpPUqM7mjpMUDvdc9ZeYEwsu4xQQrBvUh41Sa7pYfzE8cMJkqo1p75gR7qz6CR",
  "key3": "f8M8KBKtduaSoDHAHaF8UU4owTcvspc9nDrCBFxGVw3zCTozefDj3Lz4eK4EhAhWHcAYhV3cZ4mzGa7BxsiiPJP",
  "key4": "5ZFJgs7fgA2n3M3bte7TbaP3NbMnG5qTvX1yyFXJoLHALK7LS6LqjUQ6H1X8k4EVN2zUJQTeKqWWfuLQbkvJ68Mp",
  "key5": "5DrAA1gwXgSvk7qCtRiyjYkTZ2mHufRiicwWjKH2aN2FU4ibxBwDiGzSCkpDAsqZo5i7VwykMQq1LMTpximjMC1L",
  "key6": "2NeuoNBKwg8kNgTB4T2gBGYar6qN8MYXdAk51gZJm2DoP1BqQ5HwZh3udLorN3Eoph76UZSg73qiEi7AA6PkDVyD",
  "key7": "2kdjDKaLGow8jQWmKbhpKhTpCZQfpHbANw2tszA94HqVW9i85NDzktPgmWSUN1JijywgEHz17NdZiiZoemLidikh",
  "key8": "3wBrbcduiXKScizFdANpXSdJpH69fuuz3vg6qWNmoVdpEpgh6mssLXyeqZ4gPmiB6SBistUV67mRasUbhPtd8xo9",
  "key9": "a6dwCpnqtR9Z2GffQ5rV2YEDDwafhgBaDzLjjo8fGgqXkpi5exEbvqn1WZD6UcuirjVpCzX8cj872ZKJgRFs6jv",
  "key10": "3PrekvTriPnufc98zqy2NRbiCoDqcPAPydh8vJr1wTPy5ekekf1uvq7btjFuSSo5zZLmMe7LFPdeorhLgZMgrpPz",
  "key11": "2agrRJtMcEVRFYKj6Lainff8eG13LUNfeDSuRo6wDkGqcw6vxiAAkSmRspHqaj8cPSgGrwFTmxhGobimKYjLZrJY",
  "key12": "4FsHxCXgWhpzCxVCzS8FKHuKFG3gsrzD4CYcV6RkxXdhFM2x55pSajQPFpbAww1vcz9ZTzvzdHsVzJKvJDSTsX2a",
  "key13": "4tH5eX9PrXkgyNfsQvCWwW6DSMEqNyCJSZw3P2SNYW9LEfAHwPGkgmo4ZHYjSc7xoBGp5bwE4vhp2Ehq3eXK48aG",
  "key14": "5L6NMxgAN6fafxN6hYc2ZWVwq2yFJoLec53ur47KDeFab5vrF96jxwxjWuEvFidKvPbfAZzPDXzNWdiehDnR5MHR",
  "key15": "4eWL8kLvhrSa2YW7DCfKr234yKxxC21MkebFJuwDh6soN8t7oRaZsFiNvf3VSYXaLfeWeoGBwiqXP2pZttNK44XC",
  "key16": "4v5AupHVjEs6pfbHMRdmqaqktc51TFeUfPtDcmqRsNbdWA2vbBZs54gK6P3u6Zbj1RZNsSuJ8kW9YH22mepdP2bh",
  "key17": "4KLMBQGeerZo7JHLwVVJEs77SdsBVLyr7xcUXVSVfTrnD9JTCMxvFkUyBkASGgaY4XkVgrKPW8RBjJ1oiPy2a9yv",
  "key18": "5aKDk4okHLqbz5WDFL4Ec3KQbCAARapfEtT8oAtzG1VwPjPtWtGqqFGrqVtKBoyejs3jmvya4skaqvQFGJktQLW6",
  "key19": "5kJHR5zwMby12kVeoqi95qrRRgiKxZv6vU4h77ZTf53v299xvGsS9ovT7BYDkVN43uWNoyH9f5YEM7TXAfSKivn3",
  "key20": "3eEicnjfg4BRckXDosCgS1GvrXPEndkUt1gY81a7W9HviK6aXRuxrpYqWxXZXmRFudDfvs41awnerHx6mfmhh3H3",
  "key21": "2HoXGg6do6FgFAYY9b9bLxiDWzozWX5eFSfTWktER6hdiYUJHr2vpBSBUtn6a9YtM5UMpL5y5tcWCme2cKD5CLhJ",
  "key22": "pqvFuh1VKSSXDykn2PcKXK8aKE9NGFPbsxwAi57HdK8KGqGr74qTW6EyyVeLwgaU84iL1EUcDGTK9rSDxjwFNWG",
  "key23": "29syUDVbCv1kPnLgijeiNAkVkzwjP1BZjF4NC4zHSsMM334Ts26aFcNQJsBvjcweZfbovLn9vPKkycPWzyPBpHSe",
  "key24": "3xY11uT8WKwXG1BMUzNLVTFFeK5JBs2L9wioHbsJUHBbAiZu7K23hp8JmY1cPDHLYuYEw7mctgv23jDXnS7Ko6Ey",
  "key25": "4cUaH95KU7KgkjPR5MMcmfNhqpMgH7vwNUusdckfdfWFGZvZvFEBTRAJvdGUuKMf9VM3ZZ1ZA2cN9YbyasjZjuWR",
  "key26": "4g6zc83UEEKmcjD9FnLvvCi2LotfocsrhrFW6DghHE1Haqz6jMhrdvERHF4X8frXAqBCShbqMATrd8JZt8ddmEbe",
  "key27": "6sUMdEo7EEB16XYx1riB1LvYqdmxJgrpLhwgBBZhmefRbnwcfagKGuTW8mVGeLussSqh6mQdKEAcT4u36k9Fd47",
  "key28": "3z88NGniGmiM4zC7DiEU3dNeWyufkhMY74vtFf1KoAhm1CxjqdZ11DbwWerMhB6GFVSwUchGjkvct6RAGgzTD7CX",
  "key29": "m2PHhT8E8DTjD4yzeV1Uu5HKyrqGEeA21c9s47HJJA5iF8yZRVoZFMpJqTZXJYDWBrcgQDHNzBzUjgmRBSyC23P",
  "key30": "2SY96yBQR7JtRumdvqpDUCqRXU3ThMAenF97rrZzinLfw5hELeMCogYi6LKsga7ciA9p1zNYKKdkjCawd1z9X2Jv",
  "key31": "55wHDv43V4aoWRPJCRVv8hKYDBc5i6KsPgSbtWbwhbrtdjSRD2VLnEkc3Ho4tFUhfxjqhiwVgZds5AWwTRfLi5ak",
  "key32": "3h4jCFjAn4EMPdHP4TqCZAr4PZJ3FXB1MmZBjw6TaYyBQe48UEPyqcwqwnHFQrUKrihSuYs1sjUTtwWSbynQ7nVL",
  "key33": "3LJgthYHd8iKbf9jBshAhqjEJ91ZHQFhJLQJRRU3EGeYQAYXmsWjfKhaxTTyocrs1eqDfzRaVjmJ55LonR4YmRTS",
  "key34": "3pXFETzMu9GmWxc3zKDRbJuC7RdqT7mJzWdqhbebmBFkDTXr6QxMMa7LPWaotzofzSXuesfM9TLSiHmyYQVRXUTc",
  "key35": "2nUbamJcw32qvWa7SZPw2T4SATkX4qSq6RKgbuYGjdi1xmMreytJmvV5irendLiQdtutnjYJzTsKx9v6Uov4Ef2E",
  "key36": "XCCrAbDhgYKFWWVncKpTAkA9FsDUSeRzpnYWFzGn8yHURpspNXjdk4d4D63W3M99stBYVpnc4itM6aGrfq2SQEJ",
  "key37": "2pHAejXdbLqrQH72fYJztFcNRcpqAJrRv3TAQt4X2REevnaiZeVJgbcDVd9n4Y9zs1gH2FX1Dba9AUKKtWc2wjha"
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
