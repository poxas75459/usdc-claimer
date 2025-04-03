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
    "5kCzkmKmGrbp2Z82PGcmN1Nd27MFkbBDRkGzoAKdGxgCADwBKFxT5mmb7cqL1hshKRBWPbzCQjtEtTzexJwtvseM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qEGdb3ZuaHrLAz7dyXJzNMY8XZJJA6bWNc8FwFFuYaCcJRSYTmzoQXySP8isQisKzRJPH6JCn8dqmbbMESjRyaM",
  "key1": "2Y7y7UPDE4NTCogywJyeuxjYGVY7j66c1AS5WDRw6ZoDbhRc1nv6XouDS1XyVUS8BNoFiFyuZPm5o9u5ZBayH6h2",
  "key2": "2aaA5UNtLEzqBDwJ3c4fbzWi7XyiQqhBRo19AHGibJzMcTVRhNNWRNp15H34ijaHBrqP3Eu2FB1JwhYcTamAsKKN",
  "key3": "QNMuk1sB8k19vkPFEbpUGef5FugUhzbe7sHaEWQuX7H7CLdDXYUcvCeTZeuWWx9eaYSsqvSNMdBJ1c9TLf8e99J",
  "key4": "3SgR32mnHymDJMhA6aspxXUpw6CjyKUq46eMTbUzFZx2v2RCnndziSysLqcjg1DBLBp2yQJFdcFDdYCa4cTpieba",
  "key5": "55mQeujdQ1U2a2ivWbWVzjg3qyVvKqc9i9z6UpH5as6thMYCHGPr2viZ7TZtkUCzdoyiwzKHYRUJM5uLTtKz4axe",
  "key6": "4cVwvxyXs78nxwVhSQJHASf8cQBduE3Kz1ZV1nDeAcMYkqHyx3w2BZJbXdEVbWLqyiiaNvBmMwk2cwp4Qyrb6JAz",
  "key7": "zDpfEXfizkG2et8xN3SNMReESiquENRvRwfst2Yx8WF1YYaakVXufbuD3ytNEMoq1Fyuni2RHijj5sr7bsBAvDc",
  "key8": "RMbzoMjiiiKehY8ebTQVsxU5Bh7gmdnKCKbq4gPkSiBCGZdXnG3ibxkgUiRdmqW5SHgbrZosbxkActGvoLmGypm",
  "key9": "5n51KMw4PATuzZx5W4NpCrKT7zEXQjyFVbhjuJSJSVUzZFFrojQnAevhaackNfPozrc69jQcVFd2YrroxZUHMv1e",
  "key10": "39Peo5P5mcmQxo1NS1kkp6fMcizBo9WmngSYvNLN9Myd1Jvb8fRs14NmtqGGRJrrEKj9vgBUMiKuQqsqD4DHZCoG",
  "key11": "5K26aV26FAF9bZiH1qfb9oMGwMnRwoDQYFXDeeVc1TsSYH9p64TgRcb7fzCiEGAuqNYxMkdtvQ96gQAKoFRLUW64",
  "key12": "5UexZMqA9RQJMGsk2btpmfPzuLZGth9AzG1Cr4ZBpwcLgsNckJzfgoxj4raniSzF19jGqmTjqdtXtNhB7BbkfQRf",
  "key13": "26UXEHoBhm9Pb4zeA1YPmxurr45Batgy5jGZYBLWNar8ge8HvQFKf83FPwaVaGodCVmGqdejgeBU13Jd68sK6iye",
  "key14": "2vQv4qU4JMR27cepPKTvRd4MH6rrn4cRYqnaJeQNyXa1GJcwNGrUwJWAERrqB8oJbbyBjVNdXdwFyoyHbSCc4dKb",
  "key15": "dmALWETB3Pw4ptY61muRiiuNo6cJtFDPUrHpdQPFtx2VKrAbWJFyY9Bn4yuEzaro3iN7Rqi3yoUmRm7tT8utB7v",
  "key16": "2faeMcv2JfB6FkG5EdmQhjh8Sg6Gs2rxMEZZx5Ag2St1QitFkXmNbH19AAQUn7dSXoLPecBPvoJJ4KRCVYidBMWG",
  "key17": "2XJ1UFQ3xq3sHaQVpL3GLnU4SbggibASdFNmDRqvCmbY8pDm4XarnuTZm6DSafr9oXgEcitrLo4pQntKELW3hPGf",
  "key18": "2VaoPAAeoHe9i9j54cPMxhtmmUF18WSVMD9BFLGA79U1R52iWWukJXTztgRiMtFmzh9Q5PLBppf9qsvaFjhrYA74",
  "key19": "Fuoz352tEFcnX5L2QQXg3wabnb2msBFE1wgWNXvC29MW1VC2uceN3veFwuAP5Zb72Upbh7qCJqSxL6vEfhRAx2z",
  "key20": "CGkHirUq9RaxE3F5espSmz7TLNBkdGammGxwGH61iBrjYvWASoMgZVi4AWcD3x9tgsfeXbECVc51MCVT9tj1Soe",
  "key21": "5akTtDxnXmJSi6tbqbV9B1vetFPtVdXnDiY8HtXUPeLyVkKnQa5kf6zcCc1scbr6LdLTmrfUcdDvjgVLZDUqAZHQ",
  "key22": "3AqhmGhntsoeKZJn1Y2KLUSp4qozB9os8drCfMSHtAnKmFuwongGGRoUzd4qkSFkPMxjPdGLFK5ofSA2nsGLXxAW",
  "key23": "2fSSSYJ22gmLYcRx9Y9v8nmyqNieq4v1H3iHN7KFBojSxFQk5tMqAV23rBJEwu95cMjjD7yFJ1irF9MRSVQfBoQb",
  "key24": "8C9kQYYa7mVqbvGjQGg4xRdqBHiVV4MVcQhCXECoNKsWtrgya1Vp59x8BS7CESpNBeyNVtvCMpGnesRorAnHSLB",
  "key25": "gGKjk4pchuEMNHh5Rb11Tt6umCXeSpAZrbV3d2w2DSFuMWU3sqq4DT9dAimpu4JMYAWvzn7TKotCZpGzbzja8h9",
  "key26": "59QdbqHJTEGSsQzyosQmaEEkVNAsDTUnda5ekiVszMvvQEpLqKtpfSADpYGYkCsYKzfbEkr8zJb97TY2jdkJJJDo",
  "key27": "4DmB4xVUNHUyv8FHRqzMWSvqs3MVJaC7shxhmyAHYT9oa3ghUANCvNNhcA6Hcdkqr4C8TnXCR4LaCnk3ZJA6fgS4",
  "key28": "3o9DjzMA2Awu7oynKA9TjwSKrn2ZtKgR8fqt5KxMz3Uz74rYWByiqAhA82cL3FFvVX7hYUV8muXLQTSTtnRy9gzh",
  "key29": "3Ekynb1r1TToDMcZ8p6xGVjkF5pfoSC9Mj7z4R6YDsLSu4voDVRZk1sP18vHxBYaH5bnXMhRvjYsEn8WBVS9Bsjv",
  "key30": "4wcotFCB9oaDC7Rt7Aeh8hBrhiqBnLo59Cc66dLx5fVoWtsfQC5rsKhfVrsq7o39pdoK1GgMM2E8A8WdDxXTirm3",
  "key31": "2VYZUGDKbmJmTFcAQAB84ZKCfyt2v5CPWwD662ZkvNnBEC6RCE9c8E8rJEPe83f8ckvtfQBse94KLUuYDUk1cEQs",
  "key32": "vo1npBC1FLZDMGA8DHELoFp2GRqZMXjsm8Zf8KtyFPnFpnAGTbLBgZRrkGNM94xmnWCW1VPzdUSkmTfip6pBdzP",
  "key33": "2YsGEgqbsrXRwdm55rhM4poTfADMVwqmLRCVZ9WgB4LUJgtzMwsH9Tsu9L94x7xfCxce7BQ72GHETwrH3g6QnwcC",
  "key34": "5RLUnpQqyeDzeGQRuxa9zroWETBLQmid1baeos1hn2XiGfUyGNFPwnypfwVzHE38aprVSNhtTghb7C4pKqp4SKuz",
  "key35": "36phUZGHc9CxL7Y42NHhjTCxhLvPbnxtE8KfHJkUzrU7FGj9FswifaC23Wn3JEvBURGAdavnB3RYLNuUUE24h48C",
  "key36": "4X6fCQbHU1HtKzypdmUyufyrXPnkoVT7B4LCqQFgAiVx4UGcHZ6gcGL1rR5WPK9fLhQrJE9dX9bYrWn8W8ve1NfS",
  "key37": "5jL9GK5cJmH3XE8tc9devAUYG3iJCwteNku4Qd8eJ6C2FHGaGkcALaToPGL9roswgR51AZnpAAKEV4zJHFUK8Gnv",
  "key38": "3YsY1TBogn25FmdUZSPeu6aE5VwPEBDMYdf6NoZc1XXKcFzk1P8hAmDapRB4mpJ5dAtTxzL6BRzP51PRoFvrzGMu",
  "key39": "2Ua6atJXgmNFJcr16d7DPPQPH9oY77qEseraNtjSfcJr24n8HNRDVdL7LHwG1AoDzHLWMkVQwxTFC1FHtT5UsNvP"
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
