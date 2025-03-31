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
    "5o2wbMJVvum6txBLveByQ2xZmeMxAh1GZLuegT2qMtAM1oCvZXbNoJz7rwhF92rq6n2fwARYk57oPCaBfe2ZnSKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7FsMtzcMayk1uiWeGwNMsiGZrUNtiqD7A1QrCtjTZ8qqbcXBVkSkyY3vbBb6Eu2onx31HesnHbubKuPQt59uZjQ",
  "key1": "3Ct4VWpibzHEH8nrz5iYYJKKxgtEQoadxcyFf94pUY2SB7iNE9QLCMTVJYfv7fSeMPjR1i5w1WDbQmvB44JMWmkQ",
  "key2": "EeyxzfhbxrV7VuQrAUPBk8ZH4miv7HR5rSTwYfWf1bXz1D2dwEgzPcPdLgVGvLqMRBu7QrXn3hKX4s3hgcniQyU",
  "key3": "4sxhWdrYFN6ufpBjq26PrZc5cP9TEBrQwNuyifFYQVHSCfmh7vsdaaWJdCzaCvypFjjPLJhi6HJY32EQgZqPEdwH",
  "key4": "58qYcrfVQPaJf78eS55dA44PVj2vpdBjQJqefTwB9mwMBSQSF7ahfFUUsQMgc7PQReQSSKZMee2iDBopWVJkDUQL",
  "key5": "2MUWaT1y1yV8tWycuijX8sQtxii4H8UfdnkU2ffaRhuxyhZz6tVt1t8PtYLV6Rn9fjPUxvVt2vKdafvfDZpMXvaG",
  "key6": "2viMMqJ65NQipe2v4vpNKVjZvBSDhRLe8ot4euCebSJEKAtxPndNUav73wSgSG3JC19aLZh3ai2BLxzNWKqhkYcd",
  "key7": "45xz5gKWN5E5kNb1tjh27V1EEo4KgDHQCFm4p2m9rw6hK4HupfFGJqimaBCPHg7e1841oZ55ArM9KxbSfjZymL1f",
  "key8": "4P61zJTowtKfjUEwi1c1Y9rbdhbqWEWCHk4JdLaHhXcT4YnzraZi5j6f611q8pvEMemcWGGLRKGPeUkr6Y8eURz1",
  "key9": "CcsgmytrCcJ2oyYKnddLAMbjSV5psx1Bia4FHVCU8t4eG3mgL1Bu8Hkfaa3g9Maace82xNKMhdLUxs2BAiZrXpq",
  "key10": "3Ms7j9cQqjup5yfsgBjr1yZVQUjQJWvF6uayc7WYixhduGXJFcg15NGQWjtQFvex9NTyoYu8kmkXJuV9WJDT4cK5",
  "key11": "fM7rxpi8eiJu9V8ebMacSBhzfsbubGUVDpBq2kxJ9y6amdXrD15dRZrcK2FMVxRp2My5kgiemCNioHR2qhNktdy",
  "key12": "5jq8sJnVq21PTopqB6TBuB9whZ512UiTRKZfMSu79U5bo6DBZ5nrLzkKUkiyeTea7wrSHWibeFVE9J35gDw1F2Zf",
  "key13": "5nuTEcvdnEqJvUwzcoR7p1P4tvwaiPaZwGvaox8hUiT6mu89cqD7RwaQ25CVfXYLS14EMFk1Vra62QMoFdHgWcN7",
  "key14": "5a5XgqsKhTQjDhiyQ7KBaF6ijhaJayfq2xAn1PaPBADbPVrr2G1sqs5AHVvMvX3SGWaRdjHrEwYjyCVCdK5ZWsN5",
  "key15": "KwQCqKRCvJLrSupHdU6iC6LRXDhx5wnTwvV7J9kRN2jkvDfVeVkFYT6VS8FeCG9jZiLCQJXziTAXLsPgDSVFkSg",
  "key16": "4T6TVieTZzUxzHGjWm533oMX9Khk39yp1LYJSqtPuc8QuWwDg5cteuEuYYioJHVfXGigcAsG5q48PBeyBWCiCFrQ",
  "key17": "2QuY2ajDf4LQGEQwWrGuu5dYAU7dJ4sK2r7uS5yPS8EKvhBVEhBb9wdTEYDJxJJDpFStvknnFymHyPX25Fto79pY",
  "key18": "63Lccb3kQiyRB8EjhfHBF1ZFWYL7re5SUtqh3ovMdxz5eaqxa39HebnKRBZrqfWxzSZME3oot8DuzUnwEqbqb2sM",
  "key19": "2fKr4qUiH91SdJZuU4d1Hw5mBmMzkPcjaUxr1eyVfzaEUKtqe3jbqDQbaRNG3Nmn36gfV74XK5q6i2sCWn4nQnev",
  "key20": "4LSjVhEbN3wxZD9sgetYp9R385kt6MwZb6MjoNv4CR8QWdeJYAnrHJ8Y6ddZbNFaPeRMtfyP39YZbxQVE9uWFixG",
  "key21": "34w7e7xsKC5C3ARyQD5ctSyiUv5UzhQZTxiWgCQcrdLUGyRHH3AQV6XmLkFrWHw7rzwM2PHPiV2ng6kYoji9p75w",
  "key22": "5feh1DauqwaysZhAq6k8Tm4iDdWZ5f3Fxs5RnsjgCMRnbQAU3vzD7w2x6wVUMvWXuEe4sb4s7r1H1HhcV9eKp7KL",
  "key23": "4ijTJeZ4n6pkwsZPgtcHKXa2JG37ow9YY6j77SQQhb1XFanT8XGDPW2LQi4Lid86BQDCwX67toyn5hLhYTGTHgHh",
  "key24": "3EryzGY1vM8jYSfeWNdsNofEMAUfreWJb9hL7SJozjqWgWsRTknDG5HgZh9Fs1Y2ivZJiQ2GgmEStgpYQx8XySgS",
  "key25": "dUiaQu5kNsfhkV38FabyedzPQQtzkQ4mnLntLxBsUWD6Zqtk5QVCQ4JZsZsF8j9ehhsYGMaSx1knPiwCVWb4yuP",
  "key26": "KjKCn3ZhiDe4Xc38315TuXbpr9tVMfiXPQJkXEYg6TroojFg7Bwr2F1wzpPARkKTyAGNc3nS3veQQEZvk1CjvFE",
  "key27": "5D3DF5jPinbZ4VpTxWXT4vSatSBbWdmYAqq6bYc7WheCZUxqYfD9Pw1J7bXHauwEb8UgSncrbrKJ2TRB4kuiMvCt",
  "key28": "392tNXCEvYjVArS8gKQL7Wb7CVgvrmAsbnvb5nQkc7Y9Sx5msipxnh5GZXY61dHirL7jsJ5oophfFV7FncsfTYr6",
  "key29": "5iz7MomnpLSiPomRcPG4yGmKM2CRQ6pQ3rr3U1tivE7z9fkr6QJ99KShJgiEKtKJ8pzRPBGhpcHg9CZHGJBR8sUJ",
  "key30": "3CUWiVXDqSEbdGtHhVnsCEyfSthLn7EownkminmyPpGX9FV9uMukakU5LgTZmsmbuogcuapiaemAMGhmkJ6F3GQ2",
  "key31": "4wTSMnsHF1eT8tA2CAJ8jAJJxK7A1BGFnDfLitoNQ4u4H3X31HWZ52mE2LkW6MtqqDxfX9AN6DFS1q6NY8cew7Cv",
  "key32": "5uNTj3tppCqa6HmjXQNdiSQDNwgDuZJqJibUtCVRgBQDgXHxJ1Jgd6sRVSFRi8Gx8jtSpDKfZyFG5aaTBnyeZwcX",
  "key33": "2VCPVVH3Ax8qtDXfH2pCX2CQKfT2h6Aw3pENqEH4mDHAREgoCSvBMFvQ6CNTsVhj65uPviPrU2h9Vadr9V5TXLoA",
  "key34": "4v7WzSJy18xLDwxjBCvoTGG37ebNGJ6g1hvpFKhpXiEiXohrsfYWXymGCm3upmtQrNDdH44LzWMj2tmj8GJwVtBk",
  "key35": "35UTpkP4E5KEhXXc5tKG1uC7C9wg7XM2sb8EJ8sbNDr4eihZcZxqSMNVYS22qyPiBD2fajfMdvzpMeuRpATAdjwr",
  "key36": "tZC2T8caQ747Wp3b2DLpyXBHKNT1pHC6a5wxYrv4DNumuACQSv2evSS9QpNxFjTNAUZWBV2VCe6xsDW9DxxoPbn",
  "key37": "SVjGdx988AhimEN54Tz8JAm6kjfEysEwHJTuesFbkGTxsm6dEnYZiQePWdErcj6YJ6w9QuMQ96X6yyPqR8dsWe1",
  "key38": "649Nhjj8AJ9mmKqotD7Fddn7Ejyt3pmsdCsXxcL1ZKoPSaRJK89qDgWBu1r5SDoe95pGEk4VantzLCmo9tTNULkP",
  "key39": "3wrRPcunEPA33yhRHZHJW74ienT3Da67mjGHosAEvpwdXVEyau5FJvGcv86we5Pq4n74PNmakEnfTDuqaSHsehWw",
  "key40": "5j9RZ5aK9Q8sLwvPBtHAu56NNL3aiGbu27korjNVnHwMzK8VmE3RwTktnpJNWejeRZBa4FEwMkKbS3LkALLAkMBD",
  "key41": "4wCttzNiZrwKJ2UDoAwUDpqLz4nTwYbKHsd8Ceb6TMvWbnsAbxBHNausmhNpJ4ZJSvVYHBbhxYFUyttia1uU7LdZ"
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
