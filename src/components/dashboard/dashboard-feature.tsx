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
    "iFjQa3nfKPTJUkk1MLMCJDBzKX1kAThUJsKGbfHRcC7DT2w6KTPWJJzm2CHrrw6e6duwMANoc3UuvFVtJGVNL1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41811CWT8isGzDrM8b9YkBLc9G2oWQWgHWm91Lm8LKvR6Fvh9yDMuai2jyPbm9XzvmneVRxS1Keiaujux1727TZj",
  "key1": "3KBGx45GEPn77fTtBhabJWiTPUF4RXEBo3x1CTgbGbwoKbCHoStVeNkaonVJ9kozuV62NwGBSQqxYRBGaNWwxnew",
  "key2": "2oWxpdxx7wVxbQnJDd72Dme87hkKoxiScebpNo7wwogsLCBNX221eJTXcjqrPdmD7nQAnWvkMkDPakmHBtcA6y5d",
  "key3": "5cLPWtfn5zWBEV2rei1EH8Xc8ZLi2NYYhMfExKNAqt4nycrKdeBz2XBoT128a8oHGoBNxS4xPUBGXzJX8tW9Ku7s",
  "key4": "6W5NnSXbgiKL2ZB2Ro5woPJq8WT68yFHV1TugUjCLn3Q61SNer8nKt9ZUSnHEQVuan8XZunJPE4KVFiXmoiVuC5",
  "key5": "5Ftb88rshT9qfUwNU82BiFmuiBbEyNdhimwgBTg6cHHmA62QBTgrJvR4XY45ysTahpF3NEMpL268khqSCj8G71Cd",
  "key6": "24T2Xz9dJd9ywwmDum2FTpDbvFGPb4iuGf3WYJwQqBW1am9ZKAGgorX6LHUUuC4DuJcz8h1jyz2FLp5acBgpNS6B",
  "key7": "2rk123KqGw8GLZRFp7gpZX6z9dBkJbSmoQjB8wGrXyCbNvPVVzfiqT8tUErdTE3CfcR8Vb7EB6EBnC3xVFDKHi3G",
  "key8": "2EaW3JytgWnHBUi4EEgHjXLeMudC5E9FRHqLAro1uGAQMfPyrJHbx3TWYDqq7MYi1GmrQuzjyyFKN8s3XmsjwYoX",
  "key9": "5Z1dg6yuvJJArGpNd3QCXNGick8XTH4AWSzfuiQuNueyf1LDdStYVd79TnL8u9LdmXTJJEYJJDfbgvng9vAdn4UE",
  "key10": "28P4f8uty1FGckC93KTdE6ZALgnnVc7558yfRUGStcu7YSaifwz6cVDsPpLTTrZmqZfNRnGgy6qSM4oHcJHLtr6H",
  "key11": "4roWU9PRPwJPNrT4grZ7M2fR6eHkgrSLddtPDm1guew75ZDF86ep4jWtefRghgS6qeiGAVzgWswDgdQ3MisUbXEw",
  "key12": "2QTsrky68uZAKeZThzhBrajQrv5WiZ9TZ8PESKNCy9D6ojmKYutp7Tgkr8KP9kM525roohcht94gbHBuKhoo9epR",
  "key13": "5n91nC9BDExf3vaPXwzktPYin4rKWzZ9zKkePdP37L8TNZKG8hEjVKE5nf6zKSinEdbA84CiEFQknXjVxFVKc3iq",
  "key14": "N6zRZZWLyK4MEp4Fy2Xhx9dwWEGbBk2ciJyVm1xDh3Zo49AfboTo7MsuD8X6rCQZnMSYSoeD1hXbFfLM8M2EZTa",
  "key15": "5F2KNqk4CuJHAu2Ppr4vDDsMdv9CktekainyX6aagiHbU7F5q4bVonmnW8xovHGiUE8sui3myTEXsjQxRMDrcnci",
  "key16": "aqQQ79WhahN9Ff5KJogm6THsYtzTGXSCwtTA4qQr2xcfMJtda4gRmHhSqZyWScfvArSSYcFcMt9ucgi4wyMq1yE",
  "key17": "5gXUh2abGY2TqSWptERuYLJFWiGfXw2mRnsExvs6H4sNwZdxkMLK27DieeGx2mt9rLkmdhfbG7u6SMdLFH5Ai64S",
  "key18": "f72R8yKqXxiCmstFcM4sX47fbXaxkCVTYvtB6w3oSUPNYW5bjHfqHHX6iXzYoWug3LMYY5zu9pfVjcGRGF9LAGf",
  "key19": "5NAFZhSRWVrYNP3UPqr9xjvkG6U2McDtpp6Eq1xJCGfg6KicNWVGhDjqTnNNr9Bn3Exvqgs1qiggMPPBLkGMSZvG",
  "key20": "22ThXrFacTEcvbWJsZzpuAc9iyeu3sDFgDJzRhz2pvDQn7bZwr2eTYqT3icTRXLSCv3igpJbSEPH2rFB2TBNF6wV",
  "key21": "543YtbR4J1dJJssg2KYcF4uNWzt2g34VWAbV6LpDn2Fo9cM7fb9dgmg9s8tPqAhGP8Hnoo7HLrY24sonkr9frqJK",
  "key22": "3nmYJq428cBpYWUvzxafS2hWuQEt2yq8cYJzv33qmEzhtaumUuka3FhPR8Rxv3b9jeHC7hgZN3i8ZPw2F3g71rf1",
  "key23": "RY6p5DtRig1xr4HCnCt6Cm6aZfno3TXdUqrajGduPjLpLo2pWpEKh9bMf4Tf471vyjhAhw8wRq3RVM3NhwRrfky",
  "key24": "amFeLQ6ib6qUHFPM5EkCDH16RiU9Y8iZyvz66uKnPZJsM2D7wtm3xv8cAmuXSLtt3gP1QbByomP9cGv6JMxRYvf",
  "key25": "5sJWD4F7qTFVGhKQTQY7SA4Up9Ec1gRgHYHoE3MS1wNDspUx3Sf7fjLWemaedQjuLJXFyvfDVfrygBDQzd9BEX8c",
  "key26": "5iMGWcv5wprBYCx6vXK4MyTk8oBgrP2zz9XZoGMyuwKCbKMMtywpsbF9TLgQMbQZKvSGaDGh4NTUYoKjsomVBaow",
  "key27": "58LjL7DS6gynGKqoGEd175bdeDaELZbiy5yZNeUJs2jZmYmupzG2yQDqUjU4j6iBL2WdjH4E2WFDxbPA3spmLw81",
  "key28": "3BkghXe7aAGHA8F5YwGSTKjWW86sVho8BXiHUn2d3RYgJw22eikbrEPDgLbqu8rL2n75JZDdRRzrT7hXPWm7Tdak",
  "key29": "5UtFHCYrtoFc3B9CkKLcqPJCX2Y4XfS9d7kfLFvVcwGHnQKbVvD7s6LmhqUh78FnLNjbHtjZFyMmFGcwjRAxoNBx",
  "key30": "2o7wGC3hpJ74rsxcAC3xSjmjW9ARkaF2Gv6GZSnUrKtXFBPuHRSkJ5UC2GKCFr8DoZVz4rQNKoNtB4pn53WG91iX",
  "key31": "21fANNTu2uFm38KuJ9QWeBjthejToc9E2mqB4pvL6iwZSg2WAa6jpMBVbGV1TBPxvrEhZwezV39ypnwCbuEMi7eX",
  "key32": "5w5sQwWcNocjZEBV1DrMx6Y7A73SzVdPmuVQtWPpCtQYFXitbfsWs22YiuSusm4Mfqv9rBsUQ84MRzzxtq6w9siY",
  "key33": "2gwGzxqvRnpYyyyX4oFDGBr982NZ7kro5qkLdYp1NGRGFXF2auYHfGiBt1SFLFJBTUWWagRcDcQc5zafuCkZWes8",
  "key34": "3HtrNnbwqwgeqbDVxsbnLBhztMp63d8eHPjQ7xS1KXG3osFGP1XxFj9pZ2rdFaxGjJLocm7bQTy1i4uDsz3RZDko"
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
