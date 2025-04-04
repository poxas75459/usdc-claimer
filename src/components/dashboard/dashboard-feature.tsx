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
    "4fjw1fKRaGJyBc3S33pfaU7dMhVQSHXYJEdMxtvm5ECxEUxvgZxEXSrNMPxbmraHjvia7kq6YHg8tCVmiQdzBA7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bHQeSd43ysum8yVrvk26sK7QB38RjbTAp97QqkdKbZRBxnjSZwVu7yWw4X7GoB9CYtmbZCmibwB3QS9SSS6pQRo",
  "key1": "33kNSwwJTgeSEj2c9DSsxGAtHiTNGJDjmeb9cJ3nCDN9P5QGe79N1RvzYWN33pBTm4NAnQXUzUVcmEzXCa2iLWaq",
  "key2": "K9WnAgKNrTQwTtwaah4CKFwMGNe7vY8nNFWvV9vyxPUmAKwxXvCkpLNXLPe9h2xWkDQQ6BF55syoSu1G2o8bnuQ",
  "key3": "2y7LabkcdZ9eV6gN6qYPxQwgScApBUrG3oCQsPCNZcXfjsi4jetNmQ2FbBKdUbuWtr2aqVYrdZVdPCQXddBJLEVq",
  "key4": "1jBTbJXfKkRgVbvDS8hCNEVsAhNHv35R6qizci1z5ZLfwk4btUrmVRdt5KSgpwpisCdYLd5S3SV2Ziq5ALyhoK9",
  "key5": "HfVbdJQgSihQgKvdRW8z8K6CEbpfxdQRsi1BsF2Bwpz6GJ7ZcYk2t3JZzxqjy8xdxhE2ndK8xHg6nLXPJ4AtmYj",
  "key6": "4i7t4MLf2bVygdptBEonjg2q7RutY8SHWn6YjeyTYDdREEsg3yKhqQDPaLo5XJStCxiwWw65joyyDf2R5f7i9PhV",
  "key7": "fn8sJYtEzU2Yftcs8QaqoCXpmZKzoB3BWj4qd8QuBnz43G8WCgBxwprYgXma57Qezte4y1hHM643gogMADX9oHA",
  "key8": "T4SQSWNw7RARsxRbvMow1H5U3JVy3odiaft2HXYxe7ELj842KiRvYQ7LtKPLXRUZrmA81hAVWdFAb2VTHC254KP",
  "key9": "29SmM6JQVqNV8EaMymTcWsK298rZQfJexXruS81XTnReE5rCdAPC3veh9nD3RXnkzwck2bHYp2QACy2yxVGVMDuB",
  "key10": "P4zNkVLzkAFkNBYXsXW7ew97zgKhYW3yexsWZmSKa1ZJuRnfdYJbJwKfwJ2nMhqVToeiUPC4spnq9UMtJGhwrP8",
  "key11": "4KZ6ML3XwbCBtavLdtyUhXTsxGHPN4Qh5twP4NH2NQSXWEq2iUT2C2BTJ2FFga7eoHGFKez6NGGYStDvbtW8ZkaC",
  "key12": "FJW6DfQPuJV4mijC3pueXUWikCZD1dMJCbYsEn7We4XAQhQqMP144u8eDwBGUhEx5CT9oj57VYmfJdU2KzY8Er6",
  "key13": "3uyHQBY82cy3xgQsSUTVkbWQyFnA6iV8PDAnvH8uev7Roosbs3vAwbNd29UnTrh98c49jUmTYNS3pB6UF12y9VEF",
  "key14": "4tYw6k8HBUB4vae2sh2SFqauAenmHLX7dAm4tcP6QFxpBFGtki5r9RX92kHtYTtpfyTT6AqqAyuXSh57UzERhuZH",
  "key15": "qhXQPUhycG5rhTrERMekarataJBhngDM5aETmmCSmPv3oQgYSE429Sw1iSr7kZL9gAgC9kpZsYTmiem3pme4DdB",
  "key16": "665i1wmy2GnHjVKHZTwGUkH4kmi8t1zEL2P3cEkF1R28KafivsTpfjW4cgtHnosq8wvgCrZXMNxGFbWh72vDGKEM",
  "key17": "5Z2E59EYo9yACmKRF5gQ6XqnS6NsQ4ARRXEMTSnf2rtuyDTH14GgmC4s9rPL6D72X7gD8GJ2pFiTkJPySTdXEW4B",
  "key18": "5KRKH2usFHsKvcDHcQSv1QczMiZXkc3hoS5d5y9hUavKXuDatFEMj1t1NgYMW8NYgdTWQEXsSp2EFvgLnUi23Grc",
  "key19": "2aebaEjEm3K3iGgKcW4Vy47tMKhpVpnnG15SGdsJ3wfu9SsK4YHayy1LXfYaxdS1kuGgBGNhUpWtuHRCy4uhH2j1",
  "key20": "M4ZJqRB2qJTYFBHvYm8pvPAWcm3eowKPbyngGLi8cHbF4y87qMy1rErXW7LCvmUoiK9vNLkzf3zcLwcVDtCoCP3",
  "key21": "41s8TRXXWVTNYqXmZTYxxBDv1grF2ecKa7aivC8srwemCHcguzA9ZHAQdjHMRrqJ6va7TinEwwUq46tTAdGbJkTa",
  "key22": "3D4CHAD2SMVTC3m2yqtgn5ho8xbbBWU8viWfabBRRk64u5eqUFDhYBcSyYnoqm8Y2gc3GptTM3xaicSdUSG6iveu",
  "key23": "5552GeWjssAcE6G2v5WLMUhZCJpRbfjdvdqRNrTJ6F7NSrxjtiEpevmdGvLUtEDRAdHFx322so9G2cmugxPuDjSF",
  "key24": "EnKaEQxeVtCG5KBDKmQJ4hEMRNFLGvGAroqWZ1KP5ANGiKcQbqLYBKJGSMUT18PBEYR85VyeASJGcHP4DxRA5Rf",
  "key25": "29yWMHNGPA6PgkWq71VSxmW2pvUaGQBJxXtvZdvyhMvW9DkSZNwpzP3ijGnUY7aA37n4crxdzj4ovwjRpFH3D1Lh",
  "key26": "2ULsw9ZKgxWWxvEJjAyRdB1JMYmqdGBS1qrUehLGWJR4tN49w52mN4rDLY1M6pJGDxvwbt6udVHQStg9ot41THhq",
  "key27": "4hWniS5g5ss9e5ifxE8AbMB864JLHNa4cziH6VWPbGiJZArYKXhbyPC6DagzqoCYMNV4YR2Sp7u5dvJZND8XWWi1",
  "key28": "4LU9hLHS81GzuWwLAnHJwHhVZW3gC9BEaa6vjQ8kH63nMGRwa4SHfZzhAgF4vrRsfdkBBVEJh1x236AtnzUAkSoC",
  "key29": "5rVEaHN1fGbWAAiboUx4miXXw6m2fnDvhRJwCKbUfJRgEdbddfBmmGSEiBXSd6zkpvnA6ZPadu6LNVtNnoRJgZtm",
  "key30": "31rEdaB6p7KfKvmccpZ8GbMZprMWXT8MvJjNC8X8sPxvNejK67to9c3mPMZe2wRTrZVKUsKcpCy24YTxVp1aAtbu",
  "key31": "3LLYpFG8j2mcNM7Su1MMcbFhMXuMJq2ccyMMY7vr9BcHWMUAFPyZvKtVysMgvJADeVNTbVYePmu5WSo4sruWjJow",
  "key32": "P1LNvkvygxcYD9rRjzxp8ciQxMS3iSbNZ8WCLGPz7YSVG3nXoM4sRdTqsFJcCYBm3oW7FqDYgLhRAw685voFWoF",
  "key33": "pkro3QBsoC5W7NGScdVCkvKhyt5HAHe6DDrSGRLDyWENgcuwbxfgWQnDho2BCgwkxNwjS7XbeQTaScNaMoL3Bhj",
  "key34": "hRJStbQYoZkicAXr3o3xqY3GpknWFEffzMZQq4G9nSZYcXfT7HXodYQ8i96rFCpXcdTttJFwApkFxf4kR1bmieW",
  "key35": "5wJoPnuv7EY8Epxuj8AR4Rghf6AMixFoMBk5wPz7QuMTjo1vuyR1R5td9Ye9VMZv18EKVMTEsaeupRrD7ynsq2Rw",
  "key36": "5JVj2tSbv8A8s812HBUKk2BodLMjtiG7vrJKE3RXdJN1HKT16CGpfsDgD2QfRRs7unxp1yAzfkQUt34QTmpVGBqP",
  "key37": "2V4QF58ZheqNn1uUsbrupe54ZtVYQxtgWThRQx1QuNbQbNwLhbovqt4oVUNh4XMussDQ3yiattPRJeZLmBvELBkJ",
  "key38": "2usiDY7HWSLYU7vYP9ns3H4nqM916yU7oYY8tD4kusdPp45anveEiAMRbnL2gueBpv7xjDx5yUuoLo3tGr6T7YWp",
  "key39": "5MDgtigWLJFLeYLmK6xXs1nYzXPx8yxh7J3ZroHxw1TDeHdf2tZfD9PTBShMBuY4CrrKKgeBkiqMCffGg16orVL7"
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
