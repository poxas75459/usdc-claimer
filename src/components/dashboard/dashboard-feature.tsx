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
    "46f997D4GRjoczkNP8QxhAvDDonPdBwV9B1iaF7d7whvDYC9qh1FbdzaUu4e8LPazRM7ARfoEzoPT71NqHjojw8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34KPaHqiYJ18WjuNrVAxehSYHxxcaZo2t3FGe4qgmECj835DVE8H2q52PMk9oRNy7mRW81dxMUPUnkoVP3RfiHA9",
  "key1": "24wMX97tE6x1aZ69GToUBZbhbYQEUWZx19K48HNGhzfAQVMtUM6pjnLc9rHfKUrjdHGHfTjtKnBNLAeZrSqNACJU",
  "key2": "4U6vZRako4WjBpKRSg14tv2WBw4WrV88eQX9KHRfoehArcr8FWJ7eBbjnkoNQooaMrQU59dT4i4Q8WsZidBU34Bc",
  "key3": "3yaA2fABhNYzjNgwbCgfBQvoRLtvnoewmfhQ79FmVAgfdhKUrR9qpvDbzdnAueo6ch7LYRsi3iYoX6sqqs9pXC3V",
  "key4": "22Yc2nr5mqYZ1kfgNkTnX73bbw3Dmc8vSj3oiy5ezdwxdiLmcbguxBCbUXsemqzhzQ7GZhTYtNZNsL36t11xZiCs",
  "key5": "3QXFsXwRhCznKXKXeGGVYBN8ZS6NQPxbbLr6kMQoFdQPgofeAhcR1Hm2oyuvL1taKTSC9GAXrHp2z69tubmHqFPF",
  "key6": "4Wrd982wVF5UJYkUnPPdBgjRGRvLR149Kq8Dgi1JoRRRRBdjLN1U7xWcQohZaDAT5tXS31nnSfLPfpzrXAXKsqDT",
  "key7": "TRjj9qLjx2XYKw7xieR7RmQnHSK5tqjRtGHAZsQrSNadLVYmAR9pk8HrkgqkLuv19eYS8uZfd5Px89YFyQBhwb4",
  "key8": "kU4KMuesLbT6N8MHmQZrrzm86ihhZYepBM2L2b5WJPqz46uHCX3AqBz7Bwxp3sbEW5wRCEDPMbd793nyga3dmjV",
  "key9": "24zCc721xMR4FjQbsZ8DCaiiyAJPHbNQmSzp1nDoiiFtLzsN93BJoCGLmp7tSmbnqEjhXMAijngUAWxFbStUezaX",
  "key10": "N355CQJUCyLRvBmXr6rovUCNqCbj9Ltp1XcZQ74owMpGiJLcKTqECBwVuCkSSaNbLG7X5QQsZ8X68BST6tVhzhZ",
  "key11": "3AngAkt12kXe8rdp7pjzVXoog6pmrMJ7UMzewJrTXieNDwWC4fBmi3AdB3kTg8a3u6nfJLuJEasoCxjRSXFc6NxG",
  "key12": "5XDk9Cz8QKEsreBHxd99xU38CNaERMCMhVG9gWfkiTRt4TdWkQkvCuEX7pExamGecTKo2qbTwAvcYo22oGe987eG",
  "key13": "63gv1YWVLjWYPMZxTcXC7hy1X4CAtwU4EoKQ8YGvW6bQPE5BzX16z2Wtm92HJLCrVsHU9e8ZBNx7jiFHZf1eTgax",
  "key14": "3Fq4AczF2EUc4pyFxcZqwp3mH68CSxyz9Z4iwyE1LmDjnizyZpuY8963UruBpnncLQgd2fxtdEHsbGBVjEMJUav3",
  "key15": "4CE3QtcNoUycsaAuazcziXdb3DvW6TAu4mCjwfEPBLx4tWuU89QfAxq4Kf5ZAgzyA4VEzQchBfuypUiNYWWkQovQ",
  "key16": "2aqJoNTakUSBAnYrPTTvNexUoqmm73PJytrAsNJJ9T4iUpZgcbFKVCLqfTtYav6tNZbni7zorpREQEE8JVpr7Afj",
  "key17": "P5MjEQFtvYWAtAShp4zne33h8JMgnM2BVZyj6BFVk6T867UD6RtQaLvRMqC6H4WbX9A8hA3aMSjZEHLFopCP3CL",
  "key18": "3E1BNQBB1E7VvNmzYkpQcrEKBajS1zJAuZEsEpBLx529eTGLFp7VbtMbJka6VSmdQQK6WrATz4kknTmK8pM9ev2R",
  "key19": "x4XnJnuGvirDgYVnHzsdN1cFejbsBdauKfwuir8hFqzzbr9ufjxiGwqWseoLJkmZiz2ibwyyva96kuPURYq8pDm",
  "key20": "5nz5GEBcnHucF2f7944attawLGSjBsxE8W7HY3TcedHWm2ss3cGmTipnFZkYd5jTvjX8QqahBSLEpD8VUCb6pMGz",
  "key21": "q5MbzYMzzrKDagxeETGPNh6BREaxFQrqzTQS8q3ERTpYc6PzDMZFfZvgGm4CFAYkHtGcT9Rk6unjw3Cj4KPyZ6S",
  "key22": "5UPsjP48HruRffqor4bCmxUBkum1RtAGKnokbcv1NJSg5b5XJuy4aoxBb2bdhGYnwZuGP76DrCSyFgfX1i7AbynM",
  "key23": "3FrR4MxHAPRNQPmQpY1aCcVnESsXmtfLvacM36fPm2cfYa22xcqL3aknaivxBtWDcuRbnmziYBCQLNFptRzfnXGX",
  "key24": "4uzqKiByamgKn9CX9JN3RsNWUQjLGd6ne6kXECkRj7Mr3ESe97E4mwxoy6wdkNzF4DaoBDKhTbF6sVFq5YH1FXku",
  "key25": "5QNUB2Pa1tgGFmiczMnfEjo9LkJGyYXm5ueu9eFXMJsjwrYYTbcLPaM5vBbbKYSbx7PfDtJGuod1tvXj1uR7c67Z",
  "key26": "34tb1VZTxbJtaUG7acfSAPfXdqV7tQGDAJsRtWgHLprbU5nbdqWHCJnLEbYKqDyxA92wNcWeXxyFkgivUU5AaMJi",
  "key27": "53Qppf2KkwCVY3NmB1wWViKadDs69JptuUvPWafTZKoQNxQsHFm2szSELHdKeEvPW4EWLhcx1otNKHmRkVGejWGQ",
  "key28": "XnjVJUztWjbMAHdtKjVPNEkowUNS3FEHPriXk3tZthKDrRj6dqJL51A817XEZ8hWxRF96EB7ertpVRgoJGdXKDY",
  "key29": "EGSLAyp218bjVA4UvVGkrjoayMs88BzxY1z2172ecUPuwMbLiyh5s1mu252jGSWEoJX9skZ5DdnevoebbwGBvZQ",
  "key30": "5RroxsDVpCHcjuFY3VHVxbu9HkSEmd65mehT23YmUdn5T6LFRs9T2xfvyHKmYHZhnf2tHUR4KXEE9jJFRcMDSbsn",
  "key31": "FzdQLdyGuDHFoxovbEcdttnVTwT5uPaQB44DFxxak6w2uXJjForKFpLTUJcqm2Yoh6i3KHS4JkkCWNXw4913wwe",
  "key32": "2mzyeRdviePCWX7AWSTDhS36PDrTqR9UYvUUtrD3GjoYKivDTB6RzQvcgQDFEha5vyK289QPrvQtjWQBCPCEKn6T",
  "key33": "r4EduWmBge83eCxw2eZxhi8xLYsVGiWDzBxauKEvb1h2tkMeKjz3VBHdaV9YZhoRtKnMsJx9qwmkQuYfQiK74sW",
  "key34": "3P6kpsfbn4nugLZDfTD4X4AN5wcNz4DN5kQ4XrhhnTHkBaMgyw111F54G8GUG1PWxQ5ubAqbCmXzoGFLEMeiALqZ",
  "key35": "5YYGTZvkFDoWi56W9DdrJpU186MT6QprLzsgBHWgXQcDPQAmd1phrJhYrVpcx3YLHXPtfGnCBsDbFeG23x3FRWD4",
  "key36": "2eKnwsSqAm1o1chEBgZj9x23LStZp4T87Y4qH6MtH6JzxgG1m1hXaEXUG2Zxbb47A1HCqJFebGXnuqLfxcDSXuS8"
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
