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
    "3oNLZG4UM5ScQQ3pxS4udcZMBuKGtdLa44jfr2ig86HSjR2ZHkHvbqvb3L5CsfqbUF1FGVTcb7s2kpqcURMAumj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hf8Qxf7pRprT5vFXVfjCQZxunrT3uLDVQFGFBJpzrWZuWDa6ynKWxkwSjKUtRHHY4Gsz2xyRsQbL1nu2Q48znZR",
  "key1": "daws8EeEwCW4RjFTWtxkimH75DkJF1nxL9eCWQUv7kS6WMw6qR27Jd23M4kHB34qie2VVsgJqeCLqHVeXjjVcXe",
  "key2": "4gsv2VyfixKJHmEYDFSiPWHAS8L63TdQ11j99XuCFn7QhgCBDSH4xQTPkHDNs9Yt7VL2hCd5BUAzKV9JXibcAZWD",
  "key3": "59jxkpiUV7E4QEjycTjkTDdTaDps4kjHZknwyL47UH2eaEP8KwtWTZJWmWLYocJ8uWq12Y2KJxzfkXGKtkMmfq8N",
  "key4": "Z7ZyVrUrmZ8Q8KNdyc8VueC4BGVf2ZrebAavHU7jr5xTwtXZ8AKYM83EdrGwUDXLsevqw5AzDwEK4SBhfup7NLr",
  "key5": "n3VeCSqL3HdyxGh69F194ebTzU4ja5LfguocNnx4nMSDVvypmuX5zZMMHJ8XvjjMRruU5ggpa3U4bXNLZWZbESn",
  "key6": "WGA25j8G2crd4Q6A98ce5mTcAwSBdwhzk87jUoqGGch6Vkgx898YcGTUCvbj58WjB87ZDp2QX9HiD5yhSyqVDy6",
  "key7": "5bY2hofvxz5xrom7weAHygvLm2KtCS7jkiJLF82DPUDk5pTEWfnbLYt3MdYz9qXeNtjTdgVWApeho2w9jdh3PuxE",
  "key8": "2dViAnMa6bDqJSBPp2spr9TDP2nECS9qdcnhLsckw5Ye8scmogsX6777bzd2sB1b7tosCZyHsJUvRxoqVxqfxMQ6",
  "key9": "PYSRp5fTD8gS4Z8jRqxRUwnVB1NdHhe3qXtjHEebUdy3UEWa8cvVJUVJtUvZ3cc3b64HomWdVdKq3p6XA4A3Hkv",
  "key10": "53LSG55XXGzm822xxMhhQVW97juDanqqQ9VJFZrLSNNoG8kdLDxD788sYgEiAq9WtnvsBMfYoVTPUfmmbPkmRn2E",
  "key11": "3MbmaBgeBpt5S6Trjf6wzJqcxApPJi14vsVxZQfMoKEm8Mr1LsqqecJqr5SYkvVMeRBPUqme499KvJMo2tLxfa2n",
  "key12": "4YhcrMZLQjW3RDJo7AX7CF6qHVHiLaZ9t19uEMAPTthq4Mdm8EtcoUuwP2obkMG7GT5DRxqpSYg7J1P2KPDgXMPy",
  "key13": "5PethiSSd6oCwr9m2b6nahyzegZty8cZw3VR88wp9c4Wfcp4DrcSBC4ugN2iqTNv7or52jZjntEWtq6bphQNMLBC",
  "key14": "5jrsiSNWzpNF5eAeVfqooHJuVRvFBLWm7syVn4qnwfNxvqvfBs5yyqyeieabeoMr5FRJ3H7HAo96dNFmvdwAxgAh",
  "key15": "5mL2qUkcfjFmySDBBCrkgztSbwvUTVMEAAXDK1v6sEZPPyf9ms6VwJpqwow1njDV3m6JmLfH9DFbDfPxCgGiZbX2",
  "key16": "4MZiq7hBi32TqJWHP9YDVBZU938XWD7nEcsXsQWi9tKruqYf7WxYReVVZQmrzhrbmqvNDEzo9hdHBKZ4cVAUqm5L",
  "key17": "mF2VvbeEBjYx2vTcN6fZ32fCw3x6wh1Trxi77qwZqLxqUUSCjQuJimSWwMzUAKHcWGn2GM7smjU68G2D8oJvCFD",
  "key18": "5KQsMyG894Ue6nNavBu2CDRK2nq1hv25fsL6vCDGZ7nrkrrDeJgL5Y7aEc5VKVrHVM5Vs7Ep56BhWj1VM2TRCE1M",
  "key19": "4sCcFdJ45P35ZeMAxXxFDGgoJxJJxcf3LZeAMdcGw2miEqfsyziMMwzBMGmt1SJ3WAnHCiVGd1nneHnjrtMH7JvQ",
  "key20": "rG6Fizr9Xha5JGHwzYE4jg1TvAY4TvT7pjK781nybbCaNZSE2cVvcmwco8dns5SqSeFJXntnzM5neUbjWWD71mn",
  "key21": "5QqRpPKsEoNPqxkpzhxyLDAB56eQ5Q1HEh3pP8nVpNFi2icVEi6Tg9Rj7RcXpsNL81jpcSPx8h945MfVG83F76XL",
  "key22": "5LQYuAvYxk5oRdDe8X1dVayyDow3V22m4gcq4RRWMHVnAcrbAApo67zWmV1mRgqwQRvdgbVbYAcwJueFvJej9xv5",
  "key23": "3X5M2W8754FGjupitejDU7wVzChrDHiGJbLrH7gqkTGX2hASjJFCAgUxR5wSgLZ1iqsV4fydq5E1pr6cXPBkdA1N",
  "key24": "3uz7Jyfw2KTwJeEs1mCxH5GKZ2s1iKmE1VMfme9zV6UDHwdRmCNM85dFYVjdkayvHxCsNPL5JK18Qq3CBNZHEddG",
  "key25": "4s1tAm7eQrfhZYofoqrHtAGgHtYWYCiC5KWEUa4tkvwTFNkemmoNSUtoP6SafhkX55UQBtLRkjMXm75ZxAcCqsoF",
  "key26": "2vtsgYReerbZFowDVwUVfEPHfMZFRuZaybbHZ9n4picZJaAJvTHEe3m51D5cJLn7s3D9JDFAumpoarS3Y1SQWA6T",
  "key27": "Gz5Vo9dGvsyPa1hNdKm1vyin3JLw4MH4ywWSe9yhtC1dmW4vb5qxAGW3J8nm8nsDZ5KD7XwXTD1cWAVXJxCya9e",
  "key28": "2Rc5kY1MHj4C2NkZeffp2JmbrLnnp43aqgq4C1QzFwRkAVTyJguct4SemY2udfbg1Vy23yt36W1U787GU3HD5EbV",
  "key29": "4TP8FrayBw3T4WL5vKUfyWgDR1GCeyso2f7mRALvjxjTeZnXNwBjm5ncHi6T5VeBXdKsHCGCnuiHwoXX1ZEPF9pA",
  "key30": "29oxvbiKTYmiXZKbEBUiTJMsDsAQZ3umVP2rw9MNyGD1xyZ6mHYLwUNDgJmp3XQQQdmwJrhyKoNhoK7ZeN7qDi3R",
  "key31": "4PsDsUAkWAT5qRFToqGZgwo21CPPQN22pZotHcm4YwjdnA4xgKy9GvNBbhfByiEktXTzTtuhFaHSMwitTJsjTMdV",
  "key32": "3pjaE14D1aBZsJQGj8sC8NkWb5iCf8uHZFXFNZ7cQvqScWWSvvkA4uxEiV1p2bGEtc3dQvtdzAH9FHTM3P3ZrU3V",
  "key33": "x5qu1QuCwiVkGhGXNpWXibYM6umG5LUn2YMiuErNKreUcU5WPwViLiDffEZQYwqSgzUmz25eESM2ccReQNfFrma",
  "key34": "2rc7ihoCfvFHn737oNn6bRZCgNNS7PDzcT46rCnWMGQjoG7XXYLnvvh6rXSLZzBZNQ2nZNMH6HgDNj2NYGAm3bjM",
  "key35": "4wuPwiNVPeG9cWWknDTHBnV6kUtLBnK2Tr1K4Tk7s8sbu8Lxj22qjLiXhwKpTNKyP1ZBApoveJqzAh1wxvErHXxB",
  "key36": "2ACeWUGSGDQFkbHWWox2FXFwpY9jXpC4K84peKpCxVetHsq82R9EYqi5rvFsK9vkkHPhom5CF4a31SiTcWGARwRV",
  "key37": "4h3pPXbc7oZu1ikpeSLaESkoCZrcbgeJZJGharNwgz5gkq1JLHituwntTvjvFwpgkMJ2uHpR57BwfMdWKeWBmJ5Q",
  "key38": "2nfAWZAQu8NQmc4f1YHJmLSt19Xq4akthXkFdonbd6QY9CKifdgMtw7iBodTd7tVkYiRnhzgLsDte3Jg2R9xM5a",
  "key39": "4TjkKahcUAEtEvgZ2VCTjgbyittzmdLG3UEfFGiZTnqHrTuaoTNmzNCjCxdAe4G2Zc6gNEERECxu3NrfVqyircsX",
  "key40": "4w6jjhk4YhKEWcEjGtXnUtELk58zQgVkzpNk7dGbNTpPjhm643rw5p4Ec6eNuPQFQMuJxMvgExy2omakahXCRi47",
  "key41": "vvYHBm869rLhG4iiFDtwiip512iEyPMMFLKPskrepS9MnDpF28huTaKiWipGx8NXczYBichM2L8qbJnzUjD1ABr"
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
