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
    "3PJ56bhKuNwcCqgspXNqBXbUUsSxnoQC7kQK74i3jpyGxrcUMAewdVYZAPyPBgYje1uzjnHSaSNnF4dm4TzAiojs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkNGomoycMhiaF3s1nCj1XftvYSFdU97DGP7T16jqagRtuknLgc3h1XJJpCngGCMZinoUt2bRmcvuwtS1YdzmrA",
  "key1": "3SzQtCLVqZod7ijXFnQwSL5SqK22jvRdsc8RLWakmgJm6KHeKRkcoYE64Fs1NZcnfhbwAMcvPhwhNjP4NKt1M7wa",
  "key2": "3xgixZY7jQRy9PzPf1KzSfkGcNRKGkow7Nkre85xUW89mGqa241aGwcZStbwajH4MAq1p6ZVXW1cGJfYK8XnqmCA",
  "key3": "4Cz55HHs4JbDxkbgPaQL5q1zWZn1K6AoLjYppEUwGAxKp3a3y2kwLJx7SFbQSiA1qupjkZQS7cypeUVCHEqybhom",
  "key4": "3vxXGUCsL8yVaupG5BVWgQKALG16LXX56WqDExyJovKsCeR5PcpNEyQN6Nw9vHx4wTZAa1mrt5JHSUW2KRcN6qQL",
  "key5": "3uMSa1v9dcdWjV5u6AcGLyw1gbRRH2TnQp4i2b3PuDqkg1YEkuTJvTYs8rHmbaTX67Gp6NTtV3Gx3PD7uEvWGWfJ",
  "key6": "rqLZSJVWMAB2NVAkgxxq8tP8eahZcc246v13nGeRa6s3DZ6AXdqQb9F4uzMSzPwkNpM3qFdxGdx1pEsxAJv3WJQ",
  "key7": "3GUTTHLnuELeNXTgnimzHCBsNL1mUtC7qfM6XSXHABsovKYfTAFYPJaisp24b9CcvN3JbDz4Nwc8PWhQzKMfHfAS",
  "key8": "26c9J9NwNJpyiC4kZVmoDJnTCu1GAC9wpoFf2TcWWyBWMNPGZtdVpUg9gUNjEBfDnJRGoScu1QM6UPuYsH1uAdFB",
  "key9": "5C4xh7tmFLJdB5oZJQnyjCbzFjsn8MxbimQqeN9mgXSuTM38abK4kAsj348o7VF9pS1una2RRnw5ZTJuvW5jaK8D",
  "key10": "1DjJnAaVBTc6AJFLsvuXoSknMfaNLDoAFb8o83a29VUZaXjSfWrqZs1wdEFdghFKjcD1mmDuhxvrbVmPgyUGHMY",
  "key11": "oxzULtMfQbqsDgKRKv44NsY82VQWT6ZuUNB1Br8j57nHtnVW3pD6BKC2dkbqgbeJqYMoK6Taaq8foqrQJazdonz",
  "key12": "5SiRkQNPzFtW72UHaq3nZdownGyyHdyUFYJtDX6jBGJnAQev9LHHx8WZRAebCnLPqFL1BBaZ5cPqbHKx3bys3HUa",
  "key13": "igTcqBwFM2RveaBXhsiHq64BvgS4cqt66UWaQfYUQEj1m95SttJKTqj4Wz179oVR1n7ekb9kazgtnDBG8eLspkd",
  "key14": "3WSVx5hPxSopkgKYsEZYU64qxqSvkTpMkjvVH4DKfavhSfQdtVGHbMHKHbfN2vUusLtSkMXU24LySurgLVM2ruyK",
  "key15": "5pTMWjixBfxmbGYXBAPwJYgS1hmr6kJLK7ekgC35CRWX8Weja9URLuWvPZWoqKtRAjgsLjbx9iHRrKGMDAP99U7X",
  "key16": "dc9c1GbBDpfGoqd6pQPxiXKbAsCULSRiY6Nswck5zdpjdDBPcV2KR9JjqGoNGiGgaZMziRBVUiEAMas1yxqL8Ji",
  "key17": "4VwWudyXGx1wSdiTCXBGdSBUaH2dqZxm1SZe3VqBEpX29oVSLj9FmuJda1cWAwgX1dVxWPQbWDTrssCKpXA1jHyj",
  "key18": "3FmocG8RUtDTryiqsKgyutHskX5uFRFGQM1r9xDXAvN8mGqheG97LSe1mCihTBjxtNtnz1zsGBXSYyaUdKuc5XVq",
  "key19": "4ZM1nR17KTYr6DLxwnbkLFq1Ana8tFdBB9KBvY6uws7WMrB69jk9GbNPAzuuigQHG4RXUyTSNwyfAPQ2bsXn9Z3x",
  "key20": "2djuTJzV2NihZY1shDLgeCjBrE5V6jE8rJP7P3hj6QGjQefPcnfXYSJpUuvFq4iU1FqAgcDHUtSZ8fpPphg5UpVu",
  "key21": "48XBU6pY6i2sbU1KnG84UsbsFis3fgqXx9tUdULAFFvwJEnk3jVNDdPq3gCb8QVKkM1pLbcyB4PkUDtzpv8vfNkG",
  "key22": "5GYNz4su2Lrev6RjqWHPDvSFg9e5XUYjogpGLTkGEzPSn5HCoGo6hHZiBAn2P8b8aWqnhKSRfSPF3LtmjSVZrEY7",
  "key23": "5tdwGajxwK4pkKanLfi4XFnqkABGzesfEbtYhJ4cFA3tPj2q2w5ZZu312Trd9a4uJMwQPGqv8rCeLZXsFDR6jvCr",
  "key24": "5BaCJapGcqmskXKtn8ZaCWi1SmrTDrzak8X9TfGjtJLgAUfthoCZTxjC65rUpDFqqyfv1CPK99J5nUPCFXpNFxhL",
  "key25": "3mLLUsvt8SzF6rXQRe6pN6ZSNsEaiuF98hCMM2XVziZbV9cYJT81EFobtyTvti7zRE2ZnCMMU6GGQcUdQjNHADn6",
  "key26": "fDz5KDscwCLfwKwoPicLC2ebDtUzKrLwCyeeUv32R7tReGmpa5EDkhiatxn7d1PzSFWyLTK5hPXsarAdhUrhUR8",
  "key27": "2eTaopad5oXWumYwutUziLUyBnkbBw2jhds5iZUErYDyUh8LBXpSPEiwBe5dnAoJK5iB6ah5sWnR62wfzEUQXiMi",
  "key28": "5V7c7s5CJdnzCV8uWdGuFWNgDaLteMAmTXKCZrmcJaExGjPG2Na8BqgwKpMWmQHrop2rHeJWbGYLK9ycTmGA8oqJ",
  "key29": "EgHAMAY5h32uGURcwx8v5jX2gQz6sXtLrwDYYB4kcwiJXVUMF14ERMy9BvLBfnbjGttKCyarVP8jzPoD4VN7G5Q",
  "key30": "7zJBNUowYFJzs9Bg6Mviq27VU6AVNWjhdvYqe48k8PG6JLh2UsrbEWYyQw8tQGSRfiZdtfaWuoVeozFZZUxkho7",
  "key31": "2WipEHY7sgJuxWRmP7gk29BbrBhVbJHmKgWMdBU67w2VPdHE1z1sPJqCH3njEg2pZdJ6PiKj5CjTHdxuH5PpDAg7",
  "key32": "2PrHdfd2H766A8MRBEp9thoJDD1LEcPCJHf21g29zHiXZZU7CwhDjcHr7TScmJfQAoTCyf25CJSTmCUXe5sVwLZz",
  "key33": "raxKuBUEegT1pgHJ6uELyTkNdXJYv2sW4NM99C7Uqdiz998seB1SmtYEWajZQ3DfjzzY7d5mBg3RyHYbkfBXYsQ",
  "key34": "22raQzW1bSeLQSbNUbtWk693c4moKcb43dJuJRdmud93Ve7yWpGdh313VSiZTRYaE9GEBy6r8tBpqAc575JoJtsh",
  "key35": "39AEq6ioE17fv4oziPAXxEdxMQNfSge85B18iNH7DbVdNU2wGTe8wHH5mgmPPwaAEoJjGDcwjXxJ1TxRskiyxW8H",
  "key36": "4Gahx8LYTSSFMu2wnubmvK94AbFLgJJQZU2SHehBJ4F7EhsXXwfbD5WzArryLD8vU698YUya2dHoa49rXKyjgCHF",
  "key37": "pi2ukVmG1ik2HwV29CYvoktYWx6DrJKQ57ayvMhP8J85dKaJFAf1yusmFZ1XxkJFtCrF8vDiu1gogpDdL6UHm3o"
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
