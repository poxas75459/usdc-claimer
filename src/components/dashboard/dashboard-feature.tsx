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
    "2gav3rTsfWwESf4Gd8wdx7SmXAAsMoCnHNAyxQ6o5Z72iNsu2pjkTVMixFwcB9vskGLPPDyzGkjAA4KC6y4ZKPuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UTp3cZBqDwgdSnemPPcLjfptQN8nNtj3SLy8LsepwxnWMNyb4BYN58VZtFtWwoornkUBeMzyyxaZsJYAyCceLDy",
  "key1": "8ZjMnnyrp59P7m9B1tNAxXuhimcu8sVZM1CH8CkLj951rYtVuaVJmSoaXFqCxKC1wzNSYfFRpnA8hNRUpcxdMYc",
  "key2": "4ix3u2biXbbxob11Ng2zHt6rbiRRr63PXALiKhRPw51ESZdf85nUyFnHd4uzkP1bJpinrWtcvid8fbzJazx4Zy8G",
  "key3": "4WLjNGshUzAQHuAYy3D9jAbqyr9FaedmZWNQv7qSSa8TQEkDQf3e2LgwFzRu6ihXxX2eyJq5jPWRi5t4tQQZyMRM",
  "key4": "36YzePGmwcQPHEgmQyHFiyUgF3voaYMvp6nCVZ4ZGkRcmjFn9BtSqzfPirCtSsGdsKfitqKCjbDVeXe3yjyg1T6M",
  "key5": "4n1xxGjLNfvTeNBkCJZimKM2PzezwmuF3Zh4DRHTkmJFUEyn92fGr1pwdAQWnDaX711UYvrULjvqtVFdsexp43nJ",
  "key6": "39Cw8rw8ykJJZiHmUFAjHjHA7iRqEG6Dhk79t9XYHPrHv7veRjb4NXTxpV1DQuncx2eFGRJnyvUZRTHwVxBDervD",
  "key7": "5JGYDWXSsremsoZJmD8DwUv9X1cryRw9yZCnrfESAV4P3kq89mGKbARDGLmpJcKoSLLyCcgkNraZQskLpyjxMzYx",
  "key8": "4nxg57sTawAkqXbzH52UtsXdWCKFmQsg2AGfFu9PWUpe3vpGMWnAdMeU2SkcEWxGW3KJzYJvP5EadBs2Zb5rCivx",
  "key9": "oCt9AEdJQBxcBKP3UAh9ReEddzQA8krUGjDaji1gUvrppU9EpyTGWFqT8QH9t9ZYwMx24VxCWSfdikGyGs68iq3",
  "key10": "3a3cYj9KAEL89QnHtuwUP5X6yNGjCHrHn4meXwxbG6cY2bpbtMNrQufdgJkdZXaGxnGY5nZrbJu6XFaRNY7MXTGa",
  "key11": "4A58sjzF9fVn3whgojBPLTkheSjSfsGBNARYGD1waoryYjWyFTSBDWLsYsLbXR822uxF1xra5CWCCxvAjFtq1dRh",
  "key12": "3UGHuustUdNRVbGMgRu3HeY31aMvo3bba1pnveLBovmtoWs2ycFTysMg5yk2KJL56tcqrSPMjzyq3DrgAUGqiMym",
  "key13": "2p1QPBzLGUZ9LxjsWNoZXPSvGtRpiUo59scB5QtAHEgPUbcvCLxSW9Q7CHG41i9XZsuRUf4gwKGhtjDD22iXJgGe",
  "key14": "3seG6wFqnmNKBXZHeocVhUciTVgQx1CZV7wMkr8DMY1sw77bggtTYQoA3G9ALn9XFzwpeHHbveW9ietXVzEmUAmi",
  "key15": "4KfYt4pKAKWysTguBSLgFnmuxJXq8Eh9kqDAB8b6DtEuZEwbD1VtEemuaer13benkxPd6dfGnDi8Nquntu8YQFgc",
  "key16": "5MGbnvqd2rQ6hy7MVe1RHTL6zA5QTieBFMX6DnwhmhPWjfoxUZLutQ6Q98N7UuZhWT6CBajBNT36SBNBUcw9Jt1r",
  "key17": "3XZzgQy2fLa3ieTWo5LxYdG1Mq2eGQiummmvsL3zKQ2uMAWw2Qojb3WzZcsy9ZQuRgkZ3J6tzRjExtWc91JitHYy",
  "key18": "66hb6X8mhq5bk64bVXnGe8Db4UF2zBfCyxnBtrcWiWxx6jFEhCC7fAWpCfBYedsh9474zbY6YqqUkyvP7TrycS4C",
  "key19": "5jmwzpzmKqnpgWfJsEQVJ5zWiy6Udr7AEQoM188kXaDUkGnjzzQDdyaPAZVH7dEQr6YtZsEVQWGa1ZchG6neQhpW",
  "key20": "2Ce3UQRopr3aTC2EtjUyLM5iPSxunqgHXeabRJFChNCvqcX1Ptx9RcMWJyP5Y4kNemBxx39oNdQouUtDecExzUje",
  "key21": "4AruaMYKJDBefioZrLjAz3cz6RWvtmuApmLvcpEu3Aj37i7ybR6Td1MFZmoFyUSo1KxmuvpuLam6276vjMEWybvR",
  "key22": "ABJLCpHWrfJKQWQC4UWaW4yKzVdoEy6vGz8CzCurKg5P9FPv3xcmzgkH9x3sfXHUMoyGUxVLoqXRE6UreHeTnBQ",
  "key23": "PFdASwVqD4qQML2rZAp4AspgR2PcUjr5yn38Takyx9PiNmyMYh2uaexm7YrgpKKSGsoS9WA6B97zPzgNqZmL2X8",
  "key24": "2hvv9QQ9y3qgSqtyiatEVNcD5ZwgT74cr3hhaYZrBZSjXNQGkeg4koL8sVBWLRufPRMahrNbobKYQtybq38F19Xe",
  "key25": "41UyMhNgAwVFgJNFyrFKSdVaMHFJZff1bqsu5yurMfYmxhpnr37SWWg7kVGmJ3gTcykCzoAd8nHnPsh4qKknQBxz",
  "key26": "4pfyyDkEM8mvqTU6Z26FhNmQNi35sM1z4U2JZkfPh1ZT9uLGReKhQZArRrxziwsxSdjnrVXqNnThWoR8krw1XKbx",
  "key27": "58VUhRop5RBmwbTMAwNqtKvzDZRtRhhaC1kL8r2egNg3EixksBis4iP6aFp1ZKDZLZhVuhT8BVHyDoYjYE9oEKQr",
  "key28": "3kUS68sNq8iByXUpTTULKrmBQ5KRMb3mD8caHwaGdA8dkkqHbNhhqwKMTCCNLgzz9BnLP76szhKpukivXNwEtYpL",
  "key29": "3mbb7CHtVPXrP6MbRmNMyTjSqUyAYKWZXoYzYyajZn5zNdWKcFnD4q5wvvaWnQKfPunNvt2ng3LvUbmfrnvo3DQM",
  "key30": "2TxdzcesDgzMd7Hw3UqJr44fJYGbV2VHZN3EUxU5QzPCKRrQNASLU7Wx1NTCzhzJFe241TGjENvRpP8yG5Q7bwc5",
  "key31": "5Dm3pTAET4Sd1shFBd1QVzEc9HyC6WUoMeuHm4sLCxpS3zpRftEkuRRhW7iQHE1SSd2uRG3V126Kf7tixgN4iWbX",
  "key32": "Zr9TkUGXWwaXDfgwYjPqsSYhVjEBpkh26quRa9ug1GDerHAKyXdL5EnWWd7TLRtHFWGbU2vJXZ4kQWgLGaXKKRN",
  "key33": "5rb32NQSWVu3xhEcyyw8VdTkGd4SqyBLT7rowiyUEBWjYytXTiwuvBuxQQupTLn6zPy3JXFnL4PNZoV2eaGv93g5",
  "key34": "2QMmQoSgAVMLX6pdHGyniaD8K8gEho3EUbz7T1u6nxsyeujMYcB3rugJ5SfA26WRRC4ybv9dK387vE3sLPoLNtLS",
  "key35": "5gAPZhQCE47jx6bwEyBjPcHpDq2vf7fUc1r6Bx4Q7W5EGki4bVWNHUYcASVqzFNLGaS5kyVf9xPVvfsxwPURq4ur",
  "key36": "BbUi9ua5WMXifUS7GZKfP9vavSFJVq8jjoxLg7ywLJxM1L4rSiD1wfCbok6tb5Z56mwzyZvfZRvAX725HJnHcph",
  "key37": "4p8DeGaDLsTnvB6BGymE5Yifcn6Bz5FXBhhiuTqf6xvPkrNcgGv4SEu4tvBV8Xfwv9uNRC2VPA4GSbVmoraLvKe3",
  "key38": "4A2nGDVqdtDxNiqETEpYdBbBuaAHmsFJK59Jqep2JYoWh56FiqQYEtwe5cpgw8f5YJaUy7EX2WDKgh4Qoj3iwXqL",
  "key39": "4kJoQG1QYZSCrGnZFYETmXhJwktKXVuDb1mUmhvfnnY4ohdTvYyNU65Ahkkd1GJefzhAACUyva6YreE7AoG16Sqq",
  "key40": "3HP2TQp3skHXjgeuL4L5Ru4SZAEqSwEN8kHJRLyYLKxJLaP3gNEz5SYaa2A78wtAabCtpmLGAKEHU2f4yid36grK",
  "key41": "JyZeuxBNm4C8B4D7yHPodEM3iau7aEZ1KQYxmZvzYHuTte3sLPL8gULvqs5JN9ZQuKkM66XHucWAp4UCpDzUTTo",
  "key42": "4r7RXz5UiFQj8h1hPZtZVJEbeaYWEbbc4xQu75GDuPYy8aemFkjDRqQ4DQWptrvXqHUNjRiJgXZ1HWfiERZymajR"
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
