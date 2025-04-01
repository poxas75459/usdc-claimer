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
    "5fS3giYguxapm5yyfcew1ruxTkAxJDXF6ijc1appCzrCF6VezHwTkvwzsPdeS6FvRQs8E7umMa1AA2368gNEtR7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RhNck6mWaQSjrPEAS3MDUjY3engSaK7JBEJXgW1dMk5zEE3t74i5VTMdkeswCfz6F2pAg7F6tNbvYkxLuV7k6CU",
  "key1": "VkbtiznjWCEBfg3G917DFnYuXXuMSmm9tpo594GnXQifK5ggYc81YXxv6CbMEagZxsnGuztCAGhktySRpRevgxN",
  "key2": "23tEBMcoMBEFgk97Z5kYoKbkhfN34CB9Ysbm7a1i7xTKxV4Wnb3wT8R6zRNVRTtTWYyonZJidKS8Dbg5Z8c6SKiA",
  "key3": "o5c8ck7K7HrxoppAQ1m7Hfiqe416BruPyLyH1gi2xa42Y64Q35hBmDwBGbXtYgEpebUh6arhv7VgpSejR65BcPG",
  "key4": "5Y2GB7w9bUohnW3QCaYK3crM27fMHw2GGZKkwnHZB6YzdnxLsY2VtsCvMY8EwUcVLwUcKNdmgK3RdsW9Mp67bZMy",
  "key5": "oWUxNJmbEfnACdYTn5kketigwUBWxsZuo4UyjjjKeHL9nHoYjuv9qHDggPkpvQzB2oaVFwhwJpzFtkycxj2DVsn",
  "key6": "5CBo2xoWmocixwaMpRnM7UXNCAwE3W1V4eCrEYQrgVpuvQpSaveogPAKwShEgeKC54paeSPTLyUyrd2G8zrtFgXe",
  "key7": "3Nkgp1xkaxKGEY3nqPWy2EL3vWuMFXYjZrzA869oducF81mgXJpDpz1iGziw3tFqx49aeX9dLxT2e8Doy7m4xXsT",
  "key8": "2keW8PHctGm25AFYk7RMyhzepPUJEyLhsSkMUvjvVbX7QiMaLAmmvfJuePV8SiZJm9QMdYDnhEz3UPGSTRAAxeWB",
  "key9": "5zxUT2kxG3nKXyAAfnpL7sjGW3GBYHbWgwZY7GfFMu3HnxjNoXGvxbwfpwzwgmE3u6BNB4uxagCJfqnaybRHt9rU",
  "key10": "254fJis61WDu5Mx4Kxwdsp5m2fi8Sqtzp2DhF2ezxCK9fqpkopBf7BiSbuKCSY2P7hXf7sCKedcR6wuQQHR18AVn",
  "key11": "3EzcZBN3qRLezDa5xjm9yWYGBnhk3Nq3JEQ8SXSHZLxAUtU1SK26mYCbc1Vi8ShrssSeiiDs31dByJL3pcL9pFaV",
  "key12": "2KJuT772knCynm9uhF83R4W5cmio4fPFREXTZK8Liqs4REF1F4Bgp3MtJRZq7rk9GJnh2XbY6VZoiKCUX3jf1jRM",
  "key13": "3RqsbEYmMM4yUnhxicBHFCfjqdzjyBsDptoFgKV2QWU1UGjb1Y43DybtZ2GmThdB9fVEP3xDFVHwTwhUNM61KgtM",
  "key14": "nkTj5feJom7wbpRQiJKzmWGZPDtNmY4NoQ7Pj7zUcgFAste97FMqtJzaMiY6m787C9DbGimihe6Nfo33SmXrzw3",
  "key15": "3YCqa8o2u3GpEm6r5u91Jho2oi9kQ2v2cz5ZYYyqTQGUqkKZ7jiNDLJZB2bVDmq3vEJJMWy21aYwKmT7C9kizoU5",
  "key16": "3VdAEK1XQzqvUYDtPSmL6wrN67ZuAYKtWqnKVtmNEYoSBbb1dGXGZcvxDeC6UrqiGoeuMLF7h4qwiAc97MBuLeyS",
  "key17": "5PHbhKzgtbHP1kj9STCbjHWi1pcvzHryakf8zGncoMUHGkUtw3pdtTQHPaRsT7kUS8oZuSn9enZL2boAoPPn3LZF",
  "key18": "SsxM2BcbCoMpsXAqGk8yv7nwYMzqm6rrtmXiXTJcETRJZRkTZaprhdtBFhbRKmtUCC6Gvs2UG5R4D79xY6tcW3t",
  "key19": "2sb3neXNms5vfLrecrUNhdeKcjzkLirKCLEDfVXgrKjpGjyiHnq5jKtqHa4wrPaCxNcPBBk75a2DGzhZFajTkw9",
  "key20": "4SQFHaiRifSD2qSLWY6TgLEuwytPCCjNbxiuk66KG37T5Z7EnMv6HsjGUsVmyv25ozbP2aDKnd3AcUz5TkGHWaQ5",
  "key21": "GPhtCvnkYsT2vQhzexKzguKX3WSEq2gJCWAimmsadBrdTGtrv4HJYJaZzApRW5anVFUbzRu794G52JoCkwaDFiQ",
  "key22": "26anTNtzFyujt5Rptb3KkBA8ciemn9akpKSDExqgo3VRj3XxmTs7ykhnqB7CStLVAQZFNKtFQXuSieRDMZiR4oKL",
  "key23": "2xLjXqmrLwFWXE5KF6HAsyE57BuepmBvWpR1K2WXbUea1F3xUbSCeJrqavSXbWEL7FHKoHZm4PjSjFEAZBtpimpB",
  "key24": "4QA6jzp3p6DAJaSiJEYaRFMf9Ergtu1a6113BQMXyYg5VLuJfHUkouSfqcvG5EKCUbcEmAKjUVFmhtvZMJT4mKr",
  "key25": "8CFoyQBkmbuhiLpF43UfmYyfBU52EXE5NNZ9ekWBBF48sirtCBFrudgHrcBEP5N3jP9djzEc9F149AofzSMDFfV",
  "key26": "4trHQEpad8CKgXJf9hBSLCXtwgFx6Hy7FvqZ7APbERrxcEFBVjALBmdV6UA4dUsNorjjf6CMJjdpgfioeV2mjxWV",
  "key27": "459G7ppbcgbkAv4y7jeaharR1QT3WbnLThfERAKDxkcxjF8FAu6Mm7AAKVLU7Ba7YywDApdNGZh5Jzn32Cv6pYSx",
  "key28": "7VftQHTz7HxH6XiGiqFzWLWZSVACU2yXWZQ88SnGtUN26bX6NfSigwC8Ybk94RmEkPdCJXkd5T75Nc3gY46Ligs",
  "key29": "c5J9eEmpFZDbHT4tvmDYMiDeiUjWDRrD8yZjcRzqcuV5xTF8pad3EDc4qkyiUfKCLmr4smGMj7VQW8EJDc5uDSM",
  "key30": "2Ywuw9dCVSwnsvyRqMtbEpTvrPdQr7DwVh6trVBPEoEaX13EuVMwr2i74pYvkV1nxFg8TgdRf73BSZ53w3x9SdC1",
  "key31": "2xMJWqup28NLkDmBWd7HqAHikgz2h4cZT58uCxK1R9NmcvHiqbMXAg6J3wXLBnftzac3FzsshD2uCiZfnXL3z9U6",
  "key32": "3K6sP1Hs7jTDtqQ7confAx6ECfo5PC49H2u8VnPRbkyR49e174wN51BCz6odmEbe6AvPo4qqc3AF56zVcj2NGQQG",
  "key33": "8M6MT4SauJXYDz2yUJFoCsCXdwrvCSyDwLSUMc4JRFwsxpCyy6DiQFhhSfB8emotbZFKhT64noNgCkeXa6rBGwt",
  "key34": "G6xwSLvP7XcWY37TxMx2nTfYt1RmMb3vc2TWTZ4dCNWGppSsAPgcSSgN1ryc44R9g1XwXBt5ZHcP8bEvPwQZxXc",
  "key35": "3Zq83ChRTcUz9BXVXP5LCYUaSW2Z4HED3Y3ifDL7btVRHVe5Sh1imJBkZ1JavK15SrMEWFHWP7yQyv37tNbrLRpv",
  "key36": "3hPgJjVcyMDWqJbc7yp34NhyrNY1jNSPnmGfAcuaw6GoYvLYKRBKPVwK3QF1k9A3dQPLa4wM1bKWg49RkX8mpyyQ",
  "key37": "4BM5rFwyfd8cfzu9xzTDHQva1zhbDwAKgKJtb1XX1Bn5y3eKVCUHiABHchcryi4EeZpMCpyExHqzxeQ2M3bRycUy",
  "key38": "2TEVrAgX5u4pGajVRcN1bf3YUMo3GZJUMprzHfRxtRdmn4Ea3ckUgXNcb6uBVMJnNrzCUdjnn1Q8kUnZV5LVWudu",
  "key39": "2voTgkDZKZ3xrHuYRWTknsnHmXnW4pqdkm8PqyPRwXiADkHqAHn5JPa9YEU3wMdTYxSx7pxmUBsakydqULgTrZpD",
  "key40": "5KbKqyDenL2CXnqNsm3EFBbAaEsk5o3fBG22sAbzoCq4CC1s2fgkMRgWdh8ocEcgBFjLMq8YLf63f79f9DMAWzB",
  "key41": "2bUHkDoKYxqm9qDq5YLMhYgKYm2oTYGjbd9wRXBq6Gk4pGfL5Cc3RmimKLTssxvcz4zZQr9LyVkKGSJisJCGPRNb",
  "key42": "jkTFogE5bRdQCktymnPMqfQrKNf8KezPg52wn65epL4oM516RC2SUwwDz8TXsYqoWDjATbYRGBU3kLeFYUyXSev",
  "key43": "51C5jypdfnvpcY8d7HE7kYSUY39syXN13XApdnPsyd249cBkJTBauLvuisY1FiMSiQjBy46WRapW6S355jQ8VrXY",
  "key44": "diUwvCBagB2yhayWWFc3t1zHAVtCE23mhCGBe53YUscCNP7w83nmJrEPgPdqwqY5jJDB2B8j25eyv3qhhNzn9h5"
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
