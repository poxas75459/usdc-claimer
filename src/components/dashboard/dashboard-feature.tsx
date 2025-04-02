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
    "2WixXkSKncA6wS2UNktCStNrhtvzQ5gurGCC4uEJStEw4ynxpjJnnNLSCCMa6iy8mZ6NFZRA4E2iNEnUq13QTgQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTpRb5EtNAQkPQBg3gH5JBHB9YQshDK3bKTXaCvzTSvdVVMbkNK8hXHP19A8rJQc9HknUJvokTjRA9nwu6H9udr",
  "key1": "4p6JTagWrfX4BqSXPFWetLFHgcM8prgvShQAU2afgiqELgbm4cPPPMxFam4pJaZjrUHXKvQoAaUYbZ7PhB2SbaD4",
  "key2": "4jTNZ2ijUQHHZdbpdCgMgz41dDrPM1hahk6TZ7GKxvAfk2KxRctKESDbxTvTYtePdJVLPGfvrbU1mWZ8dcdz5z8Z",
  "key3": "3BQnsZ2RbiA1tWkyw92EECfnUDoa2vNvAsVjgPxZhZEuy8MMpYZPwWyMb4mSjA5eFC8LXy8jTYkjB4j5ZL7aQMMR",
  "key4": "45yB2AbAY4d5cNQeTv3FFW6Nm6p7wrfrbDxuKu4K9JZQuGSpBZW3cAzjmf3ALXSsBXQcwRtuj3me7sAH5Ze5XHj6",
  "key5": "2SrYHRR4jrG8B3iKkBnia4cZ77d8wYtzU3Axq1KtWiRKC51HcWnesGbdERfgKyvFbEwWyYJ4Viacn6gGUfiWq2Km",
  "key6": "2Rf1mKuuUKYsovbtMT4JKP92nr8MaKhksxhGwgaoZa8U7sLX6k1nwxJxch5ZvUcf14gLMkV9DLpcrayoAyEXYgX1",
  "key7": "5AQ6x3kMUaKX4nJrySULZh6MjnYuAreHDwwZi7JX1LX2oPTdMxcz39kZ4cLV7FWJocrszkEeRBDaJdmrMrDBmaxh",
  "key8": "37yrp73th7G4VnLAFAEB1HWX9xVxWmcZLQvJvL62KAjczbNWQTySSWyNMCSEjofWvj8qswrbGv48YuqsP6y3S8aP",
  "key9": "65ofuLrBZ5oW7Ng5dVYJphWr5hPrGUdtw9oCQnmtHuEdMcUm6QXxyidp67cRBoHMTXcbFDh2EQuESj3oDYnzv7Zo",
  "key10": "5mQRmp6TJM2rdMKqq2jhvTYoiuBhjTPs64GzxqSXFNHJpzjuFj5FVdkdwpbQLar2f9ZZRvtRA7YjHtiifU5SwEmG",
  "key11": "L8E9yw2eSEz6FNNA3awzQu8k83pt9ah4pyQtUgCUZDZmGarMPhcWAtUdvQoAkKnEGe78oPpEQy6EDzMtJDTGxg1",
  "key12": "51E7Ns2mhpu19riv3JPenEqQiqYrR3meByLeA2SNUPPXLZteHofajuTRtg6T1CpmknecbRW4Ng8kUG3HyDobgrTY",
  "key13": "3oHARwAmnurAdGwnLXYnU45EuNXMTj4BwA1P45xWAMdf3DTXG6QMq9EcdWZzc6r8A6mreUgmEpDvAwpX9uBXzADn",
  "key14": "27eH5tZzpy3oVKZ87mUz6nLKwefocMcUUV3Vn3CFyhofW5tYitvh7Nv2FvtCTxpNvRqASbXrsep5oAbEeHDt7iQs",
  "key15": "4N74yJdRETVg1x1hE7hMLeXVRfRBtCbaoTp6BHnTRBvsr75W4tphH1acVh4A7qoVkfSYNXNuj2SjE5dCqaVV9Fvm",
  "key16": "3x2TEUEJLcBpuJZeu6DVm7SNKs8MzYbByE9R1c4XWWUprfpbGLzuGDsTF5d6os4Dq6np9QkS3LtVseefGSjt362G",
  "key17": "27yxyucrGwDfd8DqeKzbnmryKAEuzsTpRkos2QR3bPsRooZtStuXziaMycvMgnszcqZud3KrwfpDz5oy22Fs494K",
  "key18": "2vCozG7RYd47vPwdyZ7iUSkSCbq8Dkn62jxEMqGt7knFnFbqFpkmNT5og8XGGkjpmbCpkJYAsH3qGmRFDHMDWLbN",
  "key19": "JzXYciYwiYnjn7fU6wTHGiK5z61hgYP1YWRaRrdN5xQRy5ZW12Ub8Ja54Q35wYG1nJuuYMSuq6jDr8Dcqdjfd4j",
  "key20": "5RVxN8RqR8Re2qbR4sjo5xSRvemvLopuDjhrCK7n72wxrnvw4sYob71BUab28ajdXEhcJFcTvj2PUyMwHhGkqv64",
  "key21": "24PeLSSk5hBEctWLLoQyGiBzRrJkjGMd5xUiZVNjaqf3qCLpLn1ruXE8aY1125rwbT3ozCEca6HQ6TgtX98nLXM3",
  "key22": "25ZH7G3fHStvaxFAtLmQdvzwu6wy1NFoxzxDVFWPw1Uu5LZkbYBJeVHqYCoLmH8xnazjXJ39NJqzEtvi6CoJ5DDs",
  "key23": "2L1rzzMPUHKqx1DM7DyfCZJ5knribXmrPCxWe9b939C4Cmpx3EDV8njT2pZx4G9Quw1tXYhJAgR6int7egyR8AwQ",
  "key24": "YrVzpwENSDdubgyCzm1t5vmQYdkEjBNpbuoqBn5VcW8vzDQc2Y4d8wHCjFvunkpVp3Jd8H6Rpr422fXsKgP73MQ",
  "key25": "4StT5smUCQo6o6CRVCb7qXqW5Uat4V2BDmRbT3F5eszSHimQq7rVixb5ecje9sr6bF9Fy32ZnoJrFjGAnNfgtBKH",
  "key26": "2Jd18weQ5pRACkhod7fmF3W4WZJgqteqb4XACehH8aFsCKz6CfSRwKdkk2JP4Uuv36PxA5XVGoY957CFDuG9qpXz",
  "key27": "65bgMwvVunQ3M39MDpjFC1YNUjszvEgSNd4h1CTWDor6NFaVb3tYD4ta4U8U1qVYyg4UFtKRLN7j1th7L5wjDTx6",
  "key28": "4gG9iQghGbBwSqGA2VQpjxH6NJh4NB1ioaXqSxqP69aH5k8RTKqc2GqTApqmbAoubu1njbSXLQ6QM5VwUUwGjGr8",
  "key29": "7fdQVon7E4am3SHyyfh47gNiPbvsazXg9Jfwzv9vUG9cMNsdP3eLz5mRoj9tRjUo13kizYUYAQhJBVbHbVxYcp5",
  "key30": "3YSveygFzqavqn5PVkayz9ggx6mTZCM13khWe1SKjPEszwQAVASdmp9EBZchaurj5Nmt9tiTPBjT6gwn2Ndmd6z",
  "key31": "39oU4BBPeMCiX641Y1qjuiQqNC665zqMGD6wxDM3nDx5T8UbTSo3Q7vsVrUsXLnTMmFDFSp2u5gUmYwSyHNErR83",
  "key32": "2Uww1wCVEJVYtsjS349QDeSN8JL2vSBWXu2DMDvtkqDDNPinbzR4P6Q5NvTS99csX9uiUFNNXih5apsqWG8wvjhV",
  "key33": "dzDqEUmrarRQgPkgo21hHwhQwQf7g94d4BsJdHCqUovhQKBuzj3bjQ3Jtr5yW8PMmxWbsz3sD1ohvqtRYSxv2pS",
  "key34": "TfTxXGENtJkoqX1QG8QpKvbEuoJ623tN7UD9tkS9C23UjwWYU2tFrh8xdxyJii4uAZPCuxDU6Hoa7MszjquMuUK",
  "key35": "3C1HaLpSUPupTXz8Qmv7c1vqSyyUjiHWWxNMc5TasipgM72m8Yve1NkJ3GuwbBBo81SkY72pQaoSM6fUHSwj3VjV",
  "key36": "1ZHnLDehW1GxRJXBboKbQtf5FTDPDhVsaNUxhNdyF8M4ErgeBWUn5vykHaSWEtTWR2aGy49g8zGupmaxc7a8ns",
  "key37": "ALkbVgM4KPkbAJ58U2BmhjXTJFtyQJ1CHxNnxETBQZRCW9HrcKmkEd5cSMsnZDNzAE4DHgP1rWZNfFQTyxYzYqP",
  "key38": "2sbz9F7kZMieJfzoLms57p6LxniZRdyKkH58KAmQtLnh4j59wrnTcTGsokrd1yGHkubQ3mqBR8tLm4GkdXyCifad",
  "key39": "5HEnc3n1LyDgrTQ9x6n56vdX8iGFUNqZVx4jVjJjuvyWRWcaHVNGhjTmeFch51kdpTEHVCy3BhY5FjAgQnrDC3Ko",
  "key40": "J3fEqJ4mMYD9jaBR3radWYscWaJEMzV4SrnVejfR7s6zV2h3AHF1YFb1Sqnnf4ErHZomGe7tgndvc6feSnBeKih",
  "key41": "3rbTDBdGC1GWgG9yJy9w9cPVqNwP9jDmY7wJ2uV2BxyjHTAiJWzpKGKZZmqxQ7crqVXNVufiDd6wkoYgVXvwoFg5",
  "key42": "hwePSCwPCfuzNEej19BtiSEvYbmnyvyCtxPs3uBCQyMCS5X2td9YEuhnPvej1dbjxpgUcTzZuQeWnwFvnR6HuYx",
  "key43": "6FTsZoBoJJ48QYNZFhM6RgDLV7bho7Ey4PtbbppRJNRgde2npkzucvJ3RYPX4zsRazGQEPD1KFqmxPj4crEeSXV",
  "key44": "66YudVQNFbY9ARwjDGJopi4eBdNXVNSycPiBX1c5zwWV3SAT51WPQHejT5Xi7R1uxYeh9CkMbcjtJWNUpgWdsduu",
  "key45": "4iKkkiX9FqdtJMJ7W4kHPGkzCWyqm1iUE7gdUkGPFvq5KCaaZ8rWDXrNjbHwNCheZ2i5MVEajfay1phBM5BXUYXj",
  "key46": "5L8pHUKP9aMBAMgCYfhTLJ8fxKvi6tMdiHzK24Y5GsB2AfJKro1rWaGDxrJHTeqxVYMZHxowaArjTvtmJEefudQL"
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
