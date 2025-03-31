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
    "3Li1rgAbTWAbyRC5hW7XeibjTerKSk6R9jnor3GMdEykQCXuGqG4cM3YetUedBo9mFdkn6zW16RdCN4Ukqpx9SMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tTXWpYFNBXiAaWztEiAM9LTVrtgX1a7jzVKEa6FTvVC1JH8EHu3Sc1UNFuzBD1x4cSyg6arP5Nt6yUnEBjXbjEB",
  "key1": "5BHqK7wtG61UUNPJadNXoovucX29fobtFiCAvB9yCMAhfbDDzh7sYRSg3VqhNZ7JkYzdk1FSmR2RtNT9ZsfKppv5",
  "key2": "3veVJYcX34G3SrbgJpkPaC4HAYJS5snkmNsFPWL8zj4fWy9QyZ4YMgcMoKweiKCpEjMS2dLZJSUvL1EAeq8XW6GG",
  "key3": "3A3eo9qLb8erBpJy67bEy77L3fMgbYy6e4RbeWY6GwiQVQJsYWJaMDFC3bSZuRFUnJrVSQ9CQWX7uX3aHLH2hVnm",
  "key4": "2y4gM3dqzw9gYSE8UQfBE2nwZmctbBQRnLEhqHFByoUdVcW7quVH3DnZ8QYZjQp9DC9KsXAbGwfyDPwx63Ajuxia",
  "key5": "52kwkUMbcJ1rc6Mz9kohASSKH8my9SfNUSRdcxz56ebZm9nsPwuKoHrftAJt4d4hNQbumaK1eFcbdBC1D2fRbjyp",
  "key6": "5K33Cxqj6H6Fd9kgLeJU6D4V194FMd58HvZ1F1JUbLmT8YZuMRWZisyLFQiURtxDDR1xFy3J83rnCppPyNd5UaaJ",
  "key7": "jezKZrSWeLWxmedH1bNWWavtdLFkjVTRG16DN9cmDsJ6wrgw8KmeMnH8KQP1WNG3JkqbuCHgbVdNQF4LrKFYtwA",
  "key8": "2cy3NrPGXvNo2QDBG6E8sEJ2oWr9J4gcjc6wh4YsbUdTJRcQMrnkzQ1KikzPMqkt2VNzb7e3NDExpCuqxNYTQVPX",
  "key9": "2QQxPNGQGerzh1D9hsGzdFWyJvNX6m3YpJKXK8A14GfcNXqeQRBiXcvGSV3cMfayVchbqMFQe4Wo6CzuK9g2Vji9",
  "key10": "5ZJpbiGQuwD22ar2czvrZtUykeUuyhb5y2xY7sUeHgyWPmtDusaUvfhGRKgYKSotcKHw6yLtbDbzMs7J1sLkcfQk",
  "key11": "4tgmpJX5Y3d7gXDEA4YkoEr5fvz58D7QJRL5WaiHciWYwDWRXnTM6vBLQ7rzZtZcbvuTgPDoXEJFWDhoVje7Qby3",
  "key12": "3WRTq3DausbCXca8NxhfhdSd6UwniaE8izHYei5fD8g27mxG8PjtF7a21cCd8PiJYJQ4pMdjxvVX3tvijrUw9V5q",
  "key13": "3Bt87D2ssjBEsJwD7oF3BYsVmyi6Gy6su5ZjxNZ17ecdLnD5rPYNzpgHjoJfHMghUFkCCUqDZ2Xu1eu4Sj78MVun",
  "key14": "km37V6QgE9UAMVWG7sv3cDSiU5e4op2AR8DoZoDhxcTd7ZN7NqtrtXU7c63LDBg3bwTPvCCbe6F1psRp9yV1Qri",
  "key15": "3SwiTh1nNVLjhDiYv2McVoMqp8UBY93ZpJmxvWK6gMtQ5TR9THuV6E75jsnRUwSnFw9BEV3ZpPsJrDWovrCLEVqG",
  "key16": "4cAiq6mqpjWZHPzaSCFc41Ft9nrLYxQ82oUukeiKYCPp1CHH5RsLsCz8HVjgY5L9aBX6DX1oSmm34T7Quvd9Kz8t",
  "key17": "rUbsXXJcgAQHqSHahfkuVKi2y5cfrS2rwdqCzhV8Bk8qNLik3GmxRzSAEL6q1tuDxXbCCD3HG9o4U5GnuLWQmxv",
  "key18": "2GWhRqEt3PmgetLcWmD3eGntDTk7WK2ij9w4skxGYjzCqkCNm4AnaitbfRBSkgG7d2AKgzqd7U71Tdf4r2X7uy7R",
  "key19": "5Ep8ahp1ZK3YeA4vjbdQDmRN7EHSZtfWdTghurMgwdoqb995Zf3jky6TfYeghM5uRcUEVDNtAXobDvGwyB8raKtM",
  "key20": "3G1b5yUqcivCF2qWzEaVjwH8hgwjqKvWvMh1UaK2e9A1ALdPFsRNhWChWJLzv7PTb9npvs3RL74Rtsz3rf83qZ1g",
  "key21": "4HcTqBMRtJZyD5cChVtZ7cvoDYaRQo1H1JqGeeehA3D8RABkY41aPSqr9sbMvoVhqusiif6MQ1zCB6EC4e4zQfFS",
  "key22": "2ojJpLoc9n7RNE5qt7B22hYyt7AM8WHg5qYDsWYS9ctbnn3Dwn7F6441mHQKLfCauNaQzKbmsenfcn9zmZmwWTqX",
  "key23": "3NpPUAXa6XxsqqZgvtUwx8B26guYgsUmeXdTDqcpThCD11b4myfe2KXZLrXu58RxHQWxPgG9kGWfYM98xX6EfHxD",
  "key24": "FghmTUx9oB3b8ruuqUnDdxQZAQf2gCWcqFnTN6UbrwVd6dArbymHRb5FJ9DBZSDYnqgcJ9iBNiDwzbaMPyMropA",
  "key25": "nEq5GK1vFqtrhg5heVoDNoBBG3yp7bhdVUoqBmUssDCAgx6GHrDoz2Wy3uuAUKPGJUwASoGWxQrdDsBTeuw9pfL",
  "key26": "2G7U96r1Nd1RGPr8CK9tKAgKzRU51Jge5tQGUjWuiFYn3QcJMrAqKpugtA5Tic9G1wdJyFK2ejDKvgF6o3c2Sbnj",
  "key27": "23Dnag9dWwgkBWNpssY7Kqv7X7wJFfTGTrXN1rEVpoK5e5F8t7yTQrQi4LzrjWUfqAMvDrf6142bfBGeYiZYQj6E",
  "key28": "5VgsCW7ygun7mfTWYiyqxrcYcYnJDSezPoKV7WR7Z4DUH1abejAXLW3h6jwjuNanFS6rnbqRqLjizfu1QmMzCLNA",
  "key29": "HU78DCjNNqFvxHD7yn2Jf5SAZa5kq1DwpFgFLMVFQCs9pws25Fuawr1Va1jj8pghCZVy1qMk7ZLnLFAspyFFv5Q",
  "key30": "5WWwbuCz1q2GdMTE42TqK3yVUM9D1rn3C2bvJEmEYoCXTNwByTMu7gjs8WZ96qmRHnfEwM7LCjPE2Vd4mvFh54L4",
  "key31": "44sd6VujxUt4Ev7gqcpe8jksdgJ5bSbz2LBP1juyiN1PAGmK4hdCDbEUona591e8yNgw62kxLrQWKrKpvM8yvcqG",
  "key32": "2xGPV2LPhp8ts2ALFpAkZcWAq2gkKoEQePYcPtpXz9Dyj4WPFqPJpyjfMQE6835MBzc7ghRMjjy6wuxC4Rjkynyg",
  "key33": "4pLN1ce61tRiHGfwVkGsbnNfBRUoZ1xaCzaxC87f2X4vduwrV8vVyWVpimxxggyMrJLqY6VH1W5MdDmrv3B5umuF",
  "key34": "2vBSe6Zy57QWLPhtQ7xBYKzLJYcUJLsDDWVwc4HR6og4bxbez9J2kcN1ADRUDvB8ebnEhauy7oRzRx3z6NZ361ea",
  "key35": "5xmCRKW4K4m6NuhV4wsF8kZTEp666fGBLT8c2iKmYhid68aq19rN1vVkGdm5BbX7Jck3PrtiaxrcQNF2gwtvmq61",
  "key36": "4JK9qkqP7eEt3EKW1ZxtwfgGw2Qhk7wt97F9UKsJfnWFjGkhMpdmouGqnc63hAMZiL6AsH4y58vgHAd4YYqqJ1B3",
  "key37": "4SmHrFirZjoZHH6WPc8dNHBbQnjiUo5nte6LtijG21NpnC2DvXW1J2BEXQ55WE9R2RPPoHgGikFJUsfdiVjzqXue",
  "key38": "2wgrU6USPgWPuvYEzr7JYtWESnL1Rtbzg47Fuc9SZmverHG5BVG7rDNkhH8ULRt2Ga7Jo1jitDrezKFirEJCqqHM",
  "key39": "UsmwKj6am8xQKLYj7fs2sh7EPEPg8CyXJcRpDgs7idSBsEz63GAAEagktqtUnbbigDsALNpxj9URgh2NHn6YbEe",
  "key40": "2agqm8k3NLgDKbtrotHAi8JusKsmJsmvgWdYnWGwQSuQGLqUpebUbtcNXZvEQ26ekgSpL6JSbaT2tQTGwRmwtdwD",
  "key41": "4ZcGo9HA6mQVnDbDuvUh7qpoz1uXjjFaYc7eviy5dryAw24ycVbVSpWXcHTMxGp32Z9PWXAGgHZbfGk26vCgGotb",
  "key42": "VPBC6WGs1FeZaA799XdS8Z8WcnoFbdhJM9y7wQMLTpACh9C3aFzfTewwKH98M9Ymt3v3C14ZKReV4NCtuQxRUkv"
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
