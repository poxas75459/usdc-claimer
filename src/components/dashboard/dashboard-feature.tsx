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
    "4TLA9R68eiDCE7BUYqbkKMgswDDwwDe8yCXNwMayCsHWfb6bwDP5TJVrZiKMVYJcWa36Rk15HqbD4MfxkxqrhwrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phzYSFuGqCbYP7CuvU7pDHpY6aGPcTDayQFBoQBd2gGM91F55CPVMsfpRNeLWGGJqZfkAm7QjpQ7pwzUuEiKHsi",
  "key1": "2oB8nFWbdWhDkdpXWZEK6YWL4yNP2b5Sn6STgcxt9t7Lt8nHxhERr2rkgr5rsdLa2zq4gcRGdX6JJYitfoWwMTgz",
  "key2": "2si76vkXAryPv9K6o9Hpc85gagjFHikxdavMjprxXEYdxPGonnrUyGiSJaUXVDo2cQHCyWgbNAhb6uU3U4QdeoLL",
  "key3": "3C55wcfRshLDTRGJzCwckLMsG4vCeHiaztWbft1T6bBMyrkinP4m7n7yHm8AN3kprfYAeAoMZb2RTqA7mnsLVJnT",
  "key4": "4Q55HPBmYi2bcz8gbyhjcZq3UnCbYy8hHpdemK9eZuCfrXzvkxkxJoGB8VahiBgkmpHTzSX1dUsdv7EC4cuWJTyu",
  "key5": "5cXxnGsYsDJyMXBZsNKwZMysRtYBYaEa332SoXTs5pmMGh3VSSDiWCfCNCkE2NDrstRYTJxCtmXxw8Tz2Y3t7a52",
  "key6": "2H1dqdScBkVMBhyLQuuZHDXgBP7HpqNCHhAMF8FogA1jmZr4T5MgM2JEXBXVrpRzFNoFWL8Tmv6PrLwerDY22Ffv",
  "key7": "odpMng2ZbsSwYj9Nc4srfnqEK5BZuUK2fFzf3wPRxNbAXvhmAvJ6TJychQafrEVjTNXWEcFA77115Y4iAtDu1xb",
  "key8": "3WhDc8fDADEFJfEL7wACcJBhyHvBQWqxqqU8xw9FB4thYHzyegUqfFh9pLe3maK72Py5ok2cNgGPR9zQaYkxr6Wk",
  "key9": "5bFbF2VFsX46aFHuLz6wDPGSg2DGfp3Jh7joJ7VsQswqDBsFanFjymjzuq1VDTEnCSVVe5dV92u3SewjZnGvdgiN",
  "key10": "36PtidFwKaaztWLwM5XYbHwMuqhXS2PM1whBcKq9AuRYV8AHmmpwE5zhu1DXJrDyD5QmZuKec9hnm8X1U1WXuXgb",
  "key11": "3Bcwb97DyfLiMpxQ8sWY6hvA4TX2ZzHFJ9rUFx1nwHcUJCBkere9cJPkEJ7ReGu2AWDZP2aMAmaACuvrL1xXXThi",
  "key12": "xLoX4GDMnSXg8TLCbVxj7VmFMqV49KMcQeq4r5FfhpNka1GEneb8ry8U1KF87Rtwq8bR7fh71ScSA78PJtay67J",
  "key13": "jwmtYsBBVBo2cKzsQ7MwELcCYNByeE4Nxkba2fG3KGpjRW9CxaCA49rPJwzp1Fh9voeYfpDQ1XJzB7eiQyPYShN",
  "key14": "34ovuKbSMketuxYfp5iW158zxmm8FpU4sNmS9FJGBieZa8pdTb333Niip4g6JT1SD4ZjXD2ju5Fd1iaEFzSG8uKG",
  "key15": "43FLsFwMWiu5X2YG7RxnpLcWSSnxSMmAn15bK7Z1KHRF6NNfWyCwsvXN7sKm8wUqtvbRARWTQ1N76coDigtZ2ms8",
  "key16": "5oj1pWzUrkCj8jW3BcRpKwvQ1UB1qR8YyQAd99SVoJAqpcLQ6SoZ4jLovZUmVkgNiUVCXMYzGMHzLvFSt3Vh25PP",
  "key17": "3Y7BvHR4mSkx47vmpnRJk8TSFwJXynDzb4eswhdm4tB8PnWdg6hu7fyaRPrSk9Ptj3radoVpskbyf4LPfNruArcu",
  "key18": "5inpAChs4DFw5P9Gpn6JeUgRJRYFt8X4Mxj4g9XfCxcsVjXZwHk9g3vv9SYu1UXWFRzMRjzpXeXHt6e4Ep6nN85K",
  "key19": "4d5b9Fows5KctumBQiF92gzwb6MRriosRDpX99p5Avj4SBkhHMhnK3SC5GAg5hxhYMGHDp6fiVYd7L7Kd4kbWD7G",
  "key20": "3BfjyQESPiJAUs1mUZN14Zdij3hz2peZh9GkQVk6qZGtGS5yCfstzEQrdSwaQ6mWi5jRrQFzNNawR2hmqr2DcjJt",
  "key21": "4B9MS37CUGo4wXsgfwy558bWMX98Tt6GB9n6oS5mdiXS9FncMNTcUZYxCDv8oov3gTwSedZwqeUziwxbNKM4q7cV",
  "key22": "66m5sPJfSBHrUgSENGeXvHhqz7TdsqrtrEeULpQvWKFfY2xX4pGvEuV4cgHNDfvmpGSC8jFcRoJWcnkj4TKfhQqT",
  "key23": "32WdDRtJ3v6dNdbDvT2ys2bGajUVhMzo73r7Ny6uBq8oP6uNy5q48zw81qZWbAuk3vftupjJ7m1GDWvCSmnvEXHS",
  "key24": "4mk9PZ2LaEoB9xcmdF49rKc257iuYQA3hYD3NUf3thXxWGMGPrTcVkKhT5sCUmr7EsCsYUMEAxYp3whfznmfUn98",
  "key25": "JuzBrov7BkQzYMjDggoU9PtquGWCpq3ZfKCdNkoWtbThmaqSjJFjZ5c3GgfcBM6xMA9W3AGQVLRwkcYf5PWAR2x",
  "key26": "tZMNiu2wgUd3cdc32UaKz9UxRkaWUR6E8V1hL1PYRV1ka86RPyxkbhSVqhhydzke15ftWramDAMu6UuEikev7Sd",
  "key27": "5nJtSbXCmaztrceosUE6vXtGGgGe8tSm3oSjT6mWDVNeAeShSZsFs8kc4N6LLmVSNErVfgwr5Dh2yLBJiq9KGGRa",
  "key28": "2cqVRTUdt8KxosNDqYJHgSJqphQzSX5wReTcSaQZhcycyAc4eS9UrhW5hCNehE8DeNHoga9rpy2D2Z611K17d45D",
  "key29": "dg3tGfvATe9BSXoR26XhXUUDFZSt6VRqkRVJegBbnzmJz4juFnVPiDWf1Js3FY8YDaSc2SANmhScjGxTfU3onif",
  "key30": "2SsJz8cTfm6SBgk5uYxGyzHsJnuC38wdkwYP5nrN3t4ngL12NjHFcFzkpZcgDBKpxwktG43d4yq5LWibei4Bu6fz",
  "key31": "2o9mJseaGRXseYqJX1KTQYNqbbhbbvSZy884pYXK2fcLBmsANS4TqoCgc1fgPEEfvLWKejpXABv8iUsiSmH2uYyL",
  "key32": "4BdxGCwQxRcq5j77vTE8Sz2KUM3ncZhHgSsxB6ByT1t8TjrkBV8mKBcv5KAGz4XE2VwxVjgDA94AoSf8V7unA5Hs",
  "key33": "fqsHZmccbfxm3QEjTV1mQnU5TYbjaNSDEhC4LYv56jX3BtGWuxJCmibXiTVDHDxKrPWdVhAsKHNypze2ZnQUbFN",
  "key34": "3H9JDiKGm6jpcV3WjcqamM6oMDnmxhnD8vQxHgDR4R3bKWRsRxSUq2zqNQVdbKbdjUTBPcMHHtKygvWZ9oNTh9DT",
  "key35": "4kmGJi8Eq3yGSoKpipKbZYAeQE1KL37ehgp1cuTeooWaVKuway6NtTfgtLDB9EeQ7V6XcCqNUp9RjuynUt9FowPU",
  "key36": "5DDekbu6FFCNVN6kaamXz2XahWVk5utPjPT1z8YaDABLHudak4UrWX7nZR4fYf7stjfe27mQj9PcanDknEHKLJRD",
  "key37": "4AREcfmQNTqFWrviXLcD4PhxoEjUfEE6RvG385B9wbnro9WdawBXHoc6ZKuVAeyyByTVWRx5yn7r49tBqSFbMnxL",
  "key38": "4SZU79r5Cc6J44rUrwda9hsWFBzG5G5iNYRmsgsxbQSBCYCsThut5GzT9EHT9HLv3W6P8N2WSXzzdsLaqhR3beC4",
  "key39": "kQHpczMaW4ZxbjCC19jDYBsLmDbqJY6wGWUu1iVUMbMtFui85U3oQtQqCUzCd9tXdgfV8dhk5ukNhEb8Bgq9T5y",
  "key40": "2JQV3UTWU32YS9u55raqf3jpiB2CPAVrDEbdr9yNdgebWjVugtxpuyHmmE2ARzGtm81XZV2FrmNPzTnWEe6xBaKf",
  "key41": "MAMZviFV2Dj2whdXELUFTQysQfj24LmdH8ZRuXryvu36xKQkYDFBoPtArREJgRziJuq1xYhpHshztRxu36oczg2"
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
