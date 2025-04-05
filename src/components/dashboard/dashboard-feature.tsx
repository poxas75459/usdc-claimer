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
    "4VkViEibvy14TxFWSDNTCR5s4UK3m4iiqdBDEPSE2ktcz9amfVkHWtPXoKpEnubB7KFtHMEPpSV8tpi4xP7u6Pqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VT9nowqZF1henjmfFXDypwpfZJQuQBGe5zGv58WdjeZuE9DGWjkTHGrrWnR1wf5b5pBCtsgoA7k9X2dSHAVf1iL",
  "key1": "65XaLhKH1Eo4KtJ7UPsvuSHJr4Q9haXKsob6h2sHMTvXkz4omhgA4AhQD2czw4gEAzaVsaFNkJs5WXNmSHwThZD5",
  "key2": "27FBtXWRcKCRh5VubcDyep5aYT7KNTYYBej2bs6hNMd3CZCofwiLPXbwjupBXzMdaqaeovqZJkjkEGmouG1ogUUv",
  "key3": "4aHnfTAnr7JuTXgsHaP4CH5g88DjiRb1NUqS8zRkktUPkDQJgcvpeuLbZ6nqEfWjGPLb29pfAEUkiV1K59hV6KK4",
  "key4": "2FaC8v1KPJeD2h8SbxSyFHiswkg7FBH88LB1oAh3oFFmp2ZeccJr8FhNF5PCHr8uENz8pRFgJeCUYgGidip2jmFf",
  "key5": "2o1R9Zds4b4DxP3kRPuDGbdxpEr9DN5j3fRGyhCjtJrc5bVJkCsS22sgJNf2de6kkws94iXGBcmjr98578VYE7sH",
  "key6": "5rKANXL21u4XSRxmRbVRxjcedG2REW1PmkbgM4jpspiZtzq4iPrUbDxfehNTY1ACScVXyMdfm8XzP1CPix8hSLWy",
  "key7": "3bo2ejmZJfg9LP42QtL7GVAYS1N4ptj33XAzVoEYycYKiwXibg2fEsRoygedCV2TFvGZ2cBwPsbuc8MVZXkMYmDx",
  "key8": "4a7b29jNesquaSiKLqwcFfeJoJTDKQXpkBHg6FJsUC2PzPYi3kvyo9Qn4PMtWnJWTzKoZhW91srT1ZEnkNoZieX4",
  "key9": "dwARGth3bdtfvNxewjvv5xCoXYye89XK86VuVSqXtHocppc9QK7orGL5Xo8F9jQZ2vimucYidd3MnGn6sa99NBk",
  "key10": "5uAEibaZxHUYYujnCV9HHJwQziE7sqg7r3V39QHPGnJtkdbTFmieAeFAk1EJzcq9cDMDtju5BSxd8GWJw4wNYMan",
  "key11": "3PHmYzoXYsHpEQySVbSX7pCz3UgdRhLC2Pm7G5NDW4Rc9LxHNifTYiPerzEa5LhY2jMQeZUWbEjTJr38U5dUyU4N",
  "key12": "3RnizsuM7Su2Ww9iukk7hm23Ka8kkvQ2pBVRtroiUa1Frx9D5JSP5ZrYZmRbMB5ek68tbJTMGjtCD32tzQrAEwPe",
  "key13": "3AX8bdpronbQ6JxgjPWRGL8s8upC2TcuZDFFtiEjm7kBvsQmXp3roDVoz18SNTjme9q6bGGiKpKbjYEGu4m1ACbt",
  "key14": "433Y6rZ5LUCQfYHWqP135ibifA9ut2v92iyK4Lx9hGiumAF4ZJmf5muQX6nRYbZ733H16KzMQBWkveYvfivHxDa3",
  "key15": "3mWu25KSsh6oEfBc2aSobPzw1KrVBLGjae6JpV3rMAMg5wq6CDmGsqufDj2SSGUVkrjeJ12oKoyGWpPr8ZvaQxni",
  "key16": "5siygDoszyAjXkebxqN34Md9xehUiWwskWQwxCWD5b8o5xvLSiMFxwLg3m8JUXezVdjz1o4VhG5rm8m5YksHouqK",
  "key17": "5xGZXJg6AoYgnwgTnWk7M3AMckq79UXcbtwti4QCqWeRLxa9uSjV5ZgSfzS4RurJY2QW1yJ3E1dH4Xi9HPnb9QHy",
  "key18": "3NzPkvYAeqq91576mJCnahqoSonZMuvQhdqpyHqndovmCMsJRLqh8iPbtdGfnfyB5S65FMvgtuBGFoHvzcYpozK3",
  "key19": "4EBEA6goWuBsro5Sf52SsjsEAPY2b2vgYvWqJTEdw9RZMY6K6nJxEU2UZrWn6pbxoh75PccD2V7jxj45dEYybz84",
  "key20": "xhudUjifzsdzxtExP5w1e5KmAaYzvnaWS8g7o6kesZ9hybZ1FsirS9WY8aPANRPXntyyrzKvcttDWKTx8gKm1yL",
  "key21": "4TkNTAcHdVQgePU7hHEwUBMqTg3XKm46zdisYjFi5Y9C4XsL1SiTcpyHLfAqR71hPFccxpFPkUSEKY1myu8C6S9K",
  "key22": "5h9f5mDmpjR4wNPPJoLiScbVk3q2P9bpgTi21FCZuP6Eq79YXrUggD8uxdfj6oEmG3qCWBAJvV46T61ogrHp35AR",
  "key23": "4axZy1ChsbmYihgYLZn5o18WXRbtnyrRy5NN2jz5HeUqxZ4fhHBUZBboH4Yj83hmWHp6A5hQLXehNjV7dVr3wtX5",
  "key24": "N3KPDPdq5ZznTZQbrVKjHh5okZfS2n5MCmPbShmMZ9RhjD3fvyx5v74CucuoJmJJeENhJSYLd2UqxFxAM9bvQAy",
  "key25": "49zzcDXuEsogJXBwiiyyVn95tgspiFDxdzKVSYNLFcqWDckYDRVFQqFC6vBfo4f3AxKyZengbeQneShTSm2GZh1d",
  "key26": "3pY1GkqA3UNEZWm668ygrUJJZZM6QFvUNWfNvcawc6DVkb5AgQVmp4x4WLWmzqvENo5d5ysuy56MjhtTkXeb6KQ3",
  "key27": "5BcfQKhkZKPLrSCb52xDsVX2h2R123TahDrCYJc5FUcNNxSimPCjTmzDZHueMWShLDqCFJGSHr25D8GpZaNq5JCq",
  "key28": "3GPpDJSg6WtDd1rY28F6j5peB7YMukn4M5qU9UAo14jsH9akkFn1zz6oq2SPP7odJ3mqaVbS6RCGGwwfGjvmiUe5",
  "key29": "2H5dKGXjiJBfSFzbW6okvsHZJZ9yBFFinqhdcmAGfV5TUsA8rNHX6tAhBh1bKaWHJMzmXPq9UBmEdnpnDmME35gr",
  "key30": "2jH9JkdcuPum7x12muAqaUSZNF7tAvUkxE7zpMh5Mrof9Gtcd5z1kHBDZGKs3MbbpzYDJtWhKuC2XQ5RHZxDG9hS",
  "key31": "39vGRsFwfohAHj3tGv9RQqhPSxa62n84siUmRQUYPLjbaV5x24U7sQeLZgHMbAWC7wGtwP99SsiwynjiFUos9czs",
  "key32": "A7ft33Ugj83J5JNFJLZ8asdWT8Ga7vNZS4EDaKiNkFq4AZxj1roS58eQdcUBUrBqcE2FTMXQs813MvQNSKcJVpD",
  "key33": "2WFDVveH26Dhx2Ec9yzf2Ao4jN4fQFzAECg7ZgizeE6SmFzwzQWttKRoA5xgradGyAf1kduNNnhcsnEs3J18bBgF",
  "key34": "4nbPjy5FLkrM37CseG1Kbknr2nmfWk5FjWA59h5n8bLgeEU9aSoNCcpQLtDC1CHmXjpSJDomCr3mJW2RmwQBDjwX",
  "key35": "ULr7obm9y2mB5q9v5dq1qByvpzvyw7mQDHeEgA7SE9BQoV1h6NvXuKqZut9yHfweyaFLB34CTmNuHctZpbwPZ2b",
  "key36": "5gsXt6QvFfJ8Vdy7hZThrroFj5zjm6LiaVz5kL4i4Un2R41djYsAYvyTtLNe3SxFZSAg1TJKpms894TMP79TaLiu",
  "key37": "4jLRtZWJjfS5ApHL8hbR63fG3EgBVnNMHp3NHrBn14mvR6R9DCMQnMoF8mjXvKsA6vkbka5e8DxMtPKxpMcwCXKQ",
  "key38": "4Y1tD7Vav53cqRfFCaNaqw5JGaZ4sQSd2DvLetEbuon242V8pDJ8iRXtUPovKMTkLrFd9aoHTu6VGQYCvjZq9xBm",
  "key39": "4fmrcmYg6GJFzUqSNTJhRuNrf4KwCpXZUrST7CNom9dYFee1fzjBBg58Bj3Tyja9fTS2xcdnkcqAAPhKZYuu4QCU",
  "key40": "3nHWdBWsFkyhEvUNWxq4f1FrSdza7HGXViKQdBaqzAGRaoyEeMWNw8cRrZjPvY2z9dPtckayCwphm1SLqsDS5sm5",
  "key41": "1cfwHCn7jAkSG7ppwictveL1ZxoPhnHhXZPAFJM1L4DntBJnQYBDPSpn5b83qYSsq1T24UDL8v8sGQURAFNb8yd"
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
