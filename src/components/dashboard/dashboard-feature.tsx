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
    "2W7DHXs1MELr4SYgEyE7f4xhBZ88SRfWkjhnxcjxRZBiSaAWrQJJUA4NFcgH1q9CLuxsZZ9orjbWbreftwMaTHfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P4QSd4FwP35pWNFztzy8oQHCbLkuo1FFaABnFssiETWnWRmJTigKSxTPKaSUSjxhAsF5nQv2kQweAMcZXKmrc4r",
  "key1": "2rhxPHZG685EF2iH74RK5b5grxYQ1KFT9AvaputJfwBAkpSb6VaQaL8WC1DCqrVZWgnkVnyiJyPZFtqEStLq3Aqo",
  "key2": "3Pjdj4xvaQvJusgANZ81iqEAr9qdgfWwWJdwaCX2j4gG5AL8skrB8RwFG7YBHtEkG2bPtn2jNGzex3XYg1899caW",
  "key3": "5wp3sgAaiBCqjjnZjfQ9TYur4ECDa9D2byvQpzEKuprTDpxBnybpQkqaujyynAemzxfnVzhvdwsEPXA3F9CbENSp",
  "key4": "3fNJQnjM6wjHywdg8qUTERh1Qg7ikx7xh2wW5ZtnyXn2WZnHjMMjH47VCTypHYjL67kKLowRMYcPyYygdkZxLTia",
  "key5": "5zAZmQ4zRyc3hJTNNahD7j6Q8Ep1ZqtNgBXd8TDK75B9nMbuV9gFTjo2m2Q4SzBYDf19uWFgXoZ6BDSFGux2RAYE",
  "key6": "4rFiVsvgdZENkyFNy72HY3FAq5YVtuLffBjKiiKGzr7zJ1mZNrxTzVsr6rZpfh8jWmsSnXDYhpXDsCbmdWfZjo5T",
  "key7": "3niPFKTMniiWqZ9xrFdPfB637o8Eb9UQxA3Md8mGLJfpNa53Gr8QB3nabaAsMrKYVNenkpae83yGsXsBYQRnhvm5",
  "key8": "4TaAYWSDMpopEKuYTjVURb4ekfJTZTFKhwvxwMV7PYDvWp5rM4iYStpZGaAUoBKaUQ2TbyZUbtYptYWxrQM9WxbA",
  "key9": "5dbfSVqJaJwxaiKpYcV286tik1zHKG3xJUuDDF3NsyGfhMyQAigEtTVdEShuVTLpmp93V3u8oFFFvc2JG5jgArod",
  "key10": "3nG9ts5GAR8X4ESrhiZcXkBSuw9cKyAP8nSn4GF8yu94m71NgG82KpsLehxzGQUMgNxLM8kQNxzs9SGJmizxPYm9",
  "key11": "4GeZ1LFXa7ybQhKKCW8E4iU8bH8opREQUM5uz7tUP2uHqJBDPaaip2zVLd7fUZhaYQHMFsWgy2VvYRDkSvhvYCKz",
  "key12": "eL4Ww8gCjPSLNPvovexTPZxRRg2NcfgeCn4XhwaKDDhpn1qDEgWdx3QyPqHyBsMsMeCeiK8E7iYKPqpukXcBvJE",
  "key13": "cVQmZk5bwSjqkvNa63eBezGYAbRLYLnEfEhHHUXDNH145FnJkimvbHJMdhiJVgQNqLhjJTPiXySBJAksQYbS17d",
  "key14": "53NG1mjJgdv8hBTRgmECU7g3b91CwavZ5SBoTLC3hco9Uvvx4ZPw297qqEk3gvfT9PA97tmnjrTBK4Lz5RFTGQCA",
  "key15": "3JN8wCnACzrv2BiHXRhAj2Nwyst8k8KQdvMaS4FeV9Vxme4nxpkRJfichkgB6itMe7DXjL7LRK28WVpwT884MzeT",
  "key16": "49rGqW6ceVDe8LSvAVMB66XXLbwbhezDvCB5BjSBXotEqdVqWR1321PivRpcjwEYETZ4jCueyRbrpUJPdFRGSw3p",
  "key17": "2kkHq2vce1NWWJWj1b5SN4b6pfFLMWhjga8MPPBHL2C4CXQWHadGaqwAVGrbVhojt6u8SqeVTxxUFo9HrEpi2Pmn",
  "key18": "2y5xENLEy1neC2dhaA3RyTW7QMgbmWD6N9tFGitWRGBghPqCC8nwC7vRDrp5kuaMRcBrhi9exiA4e5Et2Xab1psk",
  "key19": "2u29GuNUBKBg7JFUtjJdehGB4gPfZFBoL5pqJwDEK2Q71suob9QJYvxXsqRHX53Ump6HYY8xUf7ZeiYaXWi7mr49",
  "key20": "4dQqGjQUCXmBnSxrUwtnQa5mNetf2G7yQjp4Abn16YisXaE8kqPFL6jQej5HKCUmzpRxc7Dd6kqe893a46YW9B42",
  "key21": "42YKHJSQG2qm86HfDTxm4LFFXyvKzTDdUyyP5so2xUJkXxR6DL4xxUHTtTDVYXYxsSFmTqGxL3sSCcphZMNXfjuz",
  "key22": "ti9pWa3KCUKhxvztZ4gHhywY1xdkMw8ioAuvXJAa9scmhpYuaUA8M2XaYjxvzjTpUbgd7eYnGBm9aVhSKU22YQy",
  "key23": "GoP1dCFC6kjFQGVSWkmrP6RGUaZ6y6vPvWiPdMsFYUDCbgGz9nSDZxBf3dCA6sT5w5zimfJ65Uia19WCBze5hEd",
  "key24": "4o8RrDvoBNDDezM4wHRoeNKoLbriWQNgur6oYASB7TXYhmsWqs6QXbCrRcUMjgLPf6zrUspq5a9WXeBs7cwMWAaC",
  "key25": "VGQQ5gAPE1DFBaWvyWLQWKP2vY1FvC4rE3NejWQ6JHGUiHu6DiQw5rqcyMeEodLjVt2euLiDuZEgfeT3VLZ8nCp",
  "key26": "4TbajGmbjbNepDeCXXypjXEx21YMGVtUwdJdnKActE3WXFLW3y3sqdTA44BraRa6KaBA9ndrqQipQ2fByXEXU8JB",
  "key27": "4sKMf3hT31aMnyWNiih7AKQbhkg18QzzYyMyiYMv7WZwdmxHgxfxZbwEJHcYcqfxyf8JgCF7iAFcwrDhNwrnCLNR",
  "key28": "jGayberM8ATq1nBXkcZzn55xDoV5U6MMpZiZZGRfAF3zhSXgQbcXRmVQdfVT1pfSFDUQecsQdibCiHHx4WkATUz",
  "key29": "3zmbb2pEjvXwU8VnDZdakJs5gSoXcsSKnhDXukcVgmMR7FfDYYBPusAfNPp6JeRHj8bhiRUft8fAHMrqY6Htcp8s",
  "key30": "37g5b9Y7Sr1sCkiLHi8dHPJqdptUmvcF3ijjUj5s3C1XXK5idLWt6oDtP7YkzGptAwZesPgtLU6AwV1PPBQh8G48",
  "key31": "2BLBHCcJY8LctAaoAJizbnY4VEE1QpaSmiCTNNrkzYYSkfjYNv1eDyr69HAwFxrqNvatUVcg2aqMVUKXHLvXCYbj",
  "key32": "43FWC5ZZJgyeSXGJKaM9W32sSMQELHo42aGucGdtwAJEZtxarwj2JhuDbynbjG7ao6ki7HLWYk63R9vkZt7TRi8m",
  "key33": "64SUYATkZTdLD2qU8hr1jgUWKBpmJbfbP9PXFCeGRwC7g8KqhwnTpq1ER35A8n9VULn1thFWPKWSfUC63Qky13Mr",
  "key34": "29CvuzTUVfaoduw8hWoKMCeXT5fD85kDY7WrkTgAQSaK1xxN8yX3vYiT2eEWMyBK45iYTdFWkSzw4D5j5xNXzVku",
  "key35": "5gDVvNis6rduLcDZM9yi1jCuPrtPCGQ4wqpuUGoyZaGJ8AV8pQ94R8Y6w79pRcdQWouxU3AXSUSNdxd6LqchRjAP",
  "key36": "2noxUjcscZ2v9nCtfrNNyga7CvBmRgRYBHMzeJKSrexkLMKneAoMKzJ3uVRECpmjEiz8nY1XR8VxFLY8KVXHiDdT",
  "key37": "53ULFMjoYXTzjHQMKZcnUQVehPyQv1pmKGTH4WQ3K54aQ2A9RgqgqTLaQ1TtG48bikb4oYWvZSHh51swvBM8FMrE",
  "key38": "65eNWYwpgQ4tbyfBoD3szbabxUwAZCfHRqXayFAMXGhtiYTnZCmQUQqsS5oWxbH1RpZncUXW7kHMshv7Fb1RVLaL",
  "key39": "3qSoh37uHWopfrvD1bnLtMJpNGGCKMB1DGKvXyAkySn4Qy7H8BESorQRsT3Y2LmMYgTpeNJBPWizTx9e7xuau1cB",
  "key40": "5RrXznegSmJaSqVQ23epfqxjPiS5hBb5QPqHNTF9rSMFSiN731DEjLWwA4Zmcv4nJTUTB7bzLeHmf5S7DUqEVoHi",
  "key41": "2c27p2JVJecy8naK7nfGe1H2kTRoh1BiUGL7gLc5xyGZ5zW1o5wmwaSDqKFR8hSKGdBAN9M3oDH3FuQveGBj1bGE"
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
