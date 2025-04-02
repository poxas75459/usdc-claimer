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
    "4ZCDHqQKKWDgCF55XHfebfYn4ftB1RLhsh1JeCgAMww9NBgAdjkVBL7QcmeGWCvzakAeCEMEdRBg8dfUso6VBEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RUpCSTh8QgbRHhLRzRWn3tZrsyx6fi1tNkNwaQF9wQhHgdi3r2Pf6kssB5nd1kuYbFr3zgQxx2vp2FrKgACwiPJ",
  "key1": "576ChSukCS9uHazbc6tgGn93tbrZvtoqwe7xKF1YMNHYU5WBqKFyo162xeU4esAvAbVov1jo4r7u2fkKKinh175u",
  "key2": "j8rxmXm8bAiaYVpTwMWqFWk3H5SQo26F6EU6W1uPPBTnVQmrEf3H4KcrC5oWV9JpUr5so6FzKs82pAQCJoFGWFC",
  "key3": "5kxCDdRRDphe6dYmH1Jhi3i2C44RKxjJC8JBSyHruyo4Bg3k6WWh8t51nn5S3d9dZYWjZ9E48Kzr5YkHvAD5mVgy",
  "key4": "KwsFdiwb4db2gK1Wxhukc83y95zj9ePBhxqmcLnS6KboNczSwSL2uozJwMeYXsvVJ3fTMaFP2UAUQgsRxWfDFfC",
  "key5": "5wDKEG4RMGkGmcird6T7csQ5dXCWVEBSVGHA1AQqs6nXpCFK4xEfG6tUwWMKMVQaAiT8SxsWcuPEoSpn91BNRT6G",
  "key6": "2zFip1jG4u3CGgiGpqy6BiaaPc5WZ2gHzBKipneoTNFejheNEZRwNxu17T1uA6LxSGQvA27suHLdbQDjSXJ9ED8B",
  "key7": "uVLrAB622ike55Nb4H5r8rFSjSUX3uUzzUL1iPB1mFauNwLeJthfnxxJ3ZHf4a9YN3sSdm41P2WSK5yJxxD3xrT",
  "key8": "3aYHgSRHtnV6Sy2THXnFJgo6otQ5Dt4SKFLJ6EAuNbpxHyUvNPzrS6EqZ4XTeZUjZWc4AvETtfYqMFDKEAkrngVh",
  "key9": "51v8MrWDa9kutftM1XJ6Eo2XfnUDtjrMXmLHfzCPzhZwbY8FF2f11eihZ3obeqvKywHybNcwsUBRuzhFHh55EUv9",
  "key10": "5nB3nDNghhwj6DZ1tbSaLUf5Xq43XeZ3jnek3uQnVDTMaPijJ79gw25VqPG9t5jsehAhMD5W8pZc4WrMUhoEbn2a",
  "key11": "5VzHHvXL3Ji2DQWRhgyJruMTUuQH8c1DP2tkxjsNHU1vzGUZxtCTJKd7hRv4Xsr4SQDVErb8AYoF6AuDaPNWdWXr",
  "key12": "5r6oTkxtvpm1XRvdo6iKcGKYMthtbTyu4YwC3hk7Gj2rTWcAfHgA8s7758UBdnUFM476DiwUsBHczHYkRpsGuJm2",
  "key13": "3nQTXBGJSy6o7ZpS9BqeB6pKdyjc3sEsaV2MBpwAn7eX3ccBKm5gRcG6hi3HT1zs2PuUTFSbRs8aKL4oNBs137EK",
  "key14": "2WBQ2tmeMYecGWVNvQe5U4CcFHCmR4ztsihmqpqpUuHtPD168HFpzbxEVAE1wtoW4H4ehgK2zsMhMBp37j45CF9d",
  "key15": "4gSYdZ9hknNjYW5JET5NCTK1eS6kfPsQ37SghGqAFmJaYLyxu7KYHa8aHrUSM9bVZNXfGBjsEwV3EErb2HkodR4N",
  "key16": "582aHF6JCv4owyQnRkii9zFLLfJ8oJuCJSr2z6H2Ur7ZvxdaYXx2wvwB1Q5uSaVFMJPq2CaRAEuqwezSD78xTG6a",
  "key17": "3LLZF86dqEtKFA8HTx74Su2Qdb99wVP1YTSK3Q8YSzWTAw2yTkrvMQRv8aWQnkLVHHikgnWsiihNZfxkd878a11R",
  "key18": "5opApTq4L4si9NW9EKWdGddH3CiXeRhGVk8uBye8X43DE7d8ZrHYhLzGTKVRtevgPeTrEztseGcwsBWNEwQSV1U6",
  "key19": "3bHhGzPYr6ty9EMuHpEAYvUQ4Ag4iaH2152LMEqdnsaRCE4R9CsfuP1hVcj7woGGne8TfPDK2iiYkg9VFd7w27FZ",
  "key20": "UL7smCHe48ve5XqTxqZJ6zQRBTJoKZnkcwbWMi8PjarK1Wz3t1bTgc37qar6CMASvStB6T3ZYbvnYQuFJCcD9YF",
  "key21": "4wiQ95MmU8ncweJL8nJMji2z1VjBZz25XPsSPSqBHUdLqSFu4NkS4tiSAAXiEjdrcCqnK7miaY2w1QKqtEJAQr4g",
  "key22": "5X9sZBaTUFGwcrYeFd9M6ij88Ao8wi5irxiXBnnusnKKmeJX54sNt4caUZAjvtpPxwCgvR6MFJbBSWDW4ggPEXfV",
  "key23": "32xZ1zyU26L4GJS5t5JUaZzu7JGezLSvF1VVWS3o45byAypXW4HEwYkPQKT579briPRv35PNmyqhqUfavR58zPvv",
  "key24": "5CyRuvuLcBwZjkE8kze4Y8Z7RgvXvn54Guf83hW3VsUP231v6MDxrzzCEEB5g7x5RjW478Hmkhr2xmsFzA8sh2fD",
  "key25": "PUkfnnRXVxYFL5zQ5up2GuxxpZLCdVwqvZ6kNeWGd1fCHY9FXtfTgLanSjDBDxdGn4qDNLLbZFmvZoM9WDgNRi1",
  "key26": "4VNDFkxHWixrxFSTzUC7kW75Eu6vS6NTYKcrcj78GHxBCsPh2evi7Af4U2bN6tzZ5o3uETgjXRVoqVwLY7NcA9zc",
  "key27": "4DQ1Dbyy8ZUiEL9FF7H4T4Zc2iNeLuDVejvLcBQVWt4hcFn1mEESdHx5V33sYmExXJnTEK1gDRAVVnqesmy3x6Jj",
  "key28": "4yqHTQ2k1YgN9hvj5fExnkkuoyzkENpYz2Pz8HU63rrE9yoLXaM1p33BkbresEwpnbbFR87HuSU6oVJBNC4h8roj",
  "key29": "54Hd7MfEURhSkEBxDUgWF6tqQYZASgPtZdJx3GySMyhgK54z3j9ixygwwkiEQWuFMaobtfypb51ShXs9bdhsoQrB",
  "key30": "4PJmjiKHf72eWcR2x99TAXNUt1Qrc9TdfbUZaPnFLqFxrfwFfnuCydcYX3gMS6Qkxs2myTcrhru6m7xhW1cUKbvn",
  "key31": "4fmGsy2JZorPCKRz14vnJKYGQHpWtxycJ78GK79SKWD9uCivr3dhz54Ckw1niHgTKb54R64wxy4bLaQaJNCmXKmB",
  "key32": "5yk9jnZMsN9zLhKqgSNsg5DNN7kYo5yef5CJ9LEFAQ7BuQo4nceEB8Wm4EJWwP227gFtoSKzAkTB4JyRGmfiG8Se",
  "key33": "TXzkk4YNkhxZVfgXBjuwqpamKnrGi4zpkzDFutSXx7P5tAUd2R4N63fxy8Ln2g7AQUzXbbwMPv3wQuxwGjVKLhW"
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
