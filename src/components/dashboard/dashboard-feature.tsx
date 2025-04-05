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
    "LspL9fymK1eCPUUGY7cWJDHudj9qH5ymHkkjPxXm2jJojaLgnW7xrB7JAtkVpYL5J5eRVtaVocqptN2w23qYJF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yDs4h4Hj3GK7AcojZnT9BePif2pfEm56Ps1DzKevyqEjQ3PN8fK9hh1qRHXkfhgqeMYSUgqzFpHLDkgki7smzrN",
  "key1": "4XqubmyAhN1ZKDEV3tRMraKcCMFTFvQTtrCUrZGx2HugXG41KnYqjUQamdUutwSQQHQ2NWU2VFnPfNoZuXjSGhwi",
  "key2": "zGpRTroVhQiJZbwQaX9irJbe1dfpfi7Ka3weAiY5NWByfp1WQXQLbpTGLbXrF8gG2X5QS73pm6vtcnSf57sKiDZ",
  "key3": "UNKsVW6M7QtVEy1KaS9FCrzJskFSVuiS8Yx5FQTy3CFn12cm1hKaRwBLv1yW3RPqTqC72yNT4WghPojjx7rzU3o",
  "key4": "5jy1L3aCjvogjVoHx9mQCUP3UTg16ujcnBvrrBcMRErqmYq2RAwu6s3ybXY9EDq4ABPo8fmKQDNDokDwqqN68VH9",
  "key5": "5bfw92kjMgWk7sYADgNA7G28fvN4Qe6fS7tL4isRPBip31ykvC11sMTVzvKQhs5Hk8hWVU4fzYtBvpqjoddm7EMG",
  "key6": "4AoaDxUGdywXHenPdtWiuhr3a3d7TMHTfw55F2UiFtRLVsErPPo91W3C3c1MMGoHjguoh9eTKVDYrpBGcJNRuy7i",
  "key7": "5H2JhxZ6nExtoH895hWo3FURfX3cQs4ioMFUGrdK615ueFsn3z4hkuXqysR9Ru1vNbZJYi1FqhhddLxydC3Yg1sA",
  "key8": "CXvmxvgW1i17WjX9HXyneQsFLQZbUwb48GpewrerWoENsxnuaThKjSJAN58vWBe4YinGW1wD6mYWVDcyfPHsW4i",
  "key9": "5bn3ExYv5xNj5bzHwB8VLv7KxjasCru3jtn8xw7DTK66tJHkeHUcxBDtwHdcU6d9bLrFg7eWRPxdz6cU4UYjrUT7",
  "key10": "2t2V49DMKhRdc9yJBBsfcB76XfxsKXHdKU5AVLRxBwwMqRUN4ha5tpCUN5kpGPE33BgQiAqVQf7CQ8id6ZG3PAJw",
  "key11": "5rVUKX7tKteBSo1iraZZydD3wLy4TJxhzfPxVmmmWqGhKrR2nbC5QiLxJMF2nCPyt33A4kAU2gwJQoRzKvGQ5GdC",
  "key12": "4YUbnbkPHPnJMW5ahdnPKmd4NNtU9yTvbx12DvGtUkrA3TSd7kkzGtAvpE6hPXBhs9MWmXcrSttP5TyeKSJ4YQfy",
  "key13": "2qsnfWhRKw5uACCSKYvgSEKXxS6EXg2ZATZfyaUgGtqzCwsLLUwmfPmVg2uDnxVHwqxfueLMBFW3AfSxznmtqQ1c",
  "key14": "5RG2JgJ8d99UY2Xi7EJRdMNRnzA7RiHA8VZNUzvHC9xcXjUjZbXcFBBVrDv1htBtckWBEKo4J8LwMPTGdcwDFCnF",
  "key15": "a9ZuBRZWTkEV2SRV62CFRr6b1ThdXLadYuvNkEF51wteZvNFPoxZrePVL7mMixUdUTXCYuxQ8kiX7hAtgbBWnVV",
  "key16": "4yvKKCdqe6QtsSAke7R2vDZ1p3ogXjgfPn5Vf1xzHZQ3g79nYxGKwZHvKrecsGcyf43i3B1tdAU6FaKJ1bpNnKkk",
  "key17": "xCb1W4WBqmxQcvtaLPd2NbD4xCrdEVVYsTfNKb6umeeJEwEZtYDmvt3P3AwMBNTsrWSAtwEnocGgMhptTqhnLPd",
  "key18": "c2tga9CfpYkY9dBrAKRexvdkn4MoQRmMfbESgyPShxN84eFXErPsGGYTkhe93U9ofNdHucmFZPSERoqPC6kTcJW",
  "key19": "3xKqXUxDcWjuX7G7bEuu3rZjf1CKmBJ4hbYNHyuNoS53qYWxcrUEPckdN71VbSm8z2XLfFkpxhgPvwdxGgVt2S8o",
  "key20": "2rpBtZxG5cta5XJn3q5s8tDjbNQDtNs248wYN3ErssvwgHAuMUkJsVjHX6jCYZxwcEMXHqsWBjFYPQPPu8sfopiC",
  "key21": "4oAzDXNBGFxZfKFkTufVFopNqQNJwBU6DUvsUVEi5jPUHwv38ViuuW4PtLQuMYTTBozoUvrDHSZFhUdppGNtTEum",
  "key22": "5kJx1xWNDCjGMh4BTXB95WAA47EVPFLoHSoAa4oK66mZLpwWYegLPAd37gRUKDAP8Ebzf4iv149TXDATrt8q78gZ",
  "key23": "2XD5uisdtBaTypZevrKZYdvTD16xR2YdBpLHUpWJDR3ex8cE8m7K3GPcWjQ3j9gZPgreXh2GonHeZJXVY4yEgg2b",
  "key24": "59XozDJwxdgQd3Kzh9rGKpwt67D2MTwipShLeJ3ssWFGhAxZLoXDpuVTrue77YSGX2nzvBeCpkKw4tgGw2vLdtn3",
  "key25": "4DCK7MhtyxuRJAnAydeFQgkCWFG97Ti3iMaNQ3NJAv7i8YZpmsbejCJ9M5XzPj7k6ihgK8fLvmJwCv9N16kCz5ey",
  "key26": "5BitP2XaqE6swQftpu1kdEzkzy8wZHJz5cxETdr2jcsShFYdWuvAgxfTGwDyXcksvvsbNnzKyT4SgXBARJPjtYrL",
  "key27": "4XZqcDRV6T9FqC3gb8ycU7QuQq6FrssCWt3SYxT1DPyG5s1sgyfsEmNjTz4hFxHbiid8FDkXU64V1KHVwHNpfXkH",
  "key28": "2jQgTEjtczLFF3PrexpoRmt6FHmKTPPh5BvR4Yk2c6zgRgiwG4trPC5BpAom7gM6LnTuYi1ijPLmCsu4TfimNinj",
  "key29": "67FjfhLzkwFaFrFYyoWu8FSHzDzreisth6raec5r8crCRyu5MLPqzpZ8PtB3qPu1bWvu1CUy4nsBuXQFsiBKXeXY",
  "key30": "4Vta9187BBCzTsUG2RaDWA6pHb8T8gS565dGp61BSQrKSNqKcgaJDHdwuCBEebbW3xHMrqT7ppVN5NSEMzvZQmes",
  "key31": "4Qv9uVRLUReg92irajkSKr4HbTfj8DjLngVJiSUAJDpSKw12U8CEBsmAEGPrkneLrz853cf4EpBpu28C2AccVMS9",
  "key32": "5WZtyyHKKRpXMSuNBffS58WCJTG9HoSTZ179jbvJaFbm7ycuJcpVYC7SgPpBeZPV1KCKbdnJ6BReDwRu9ku5Uc9S",
  "key33": "2miw26uUkTCejFjeeEfaLGC3Fd231hrUHhXJTbtUacAktwG8ap4vC9MppBGBdFndv8kNLbbpmqjk7qv7yQzPdnKQ",
  "key34": "4cjCfA4JaRGCkmWRJxXZX5fWEWprgtx4tTV7GhDwgJhsfALFseB5jvxpRiJih8bDwPJtA8jz87GLpdZTqEwokGEC",
  "key35": "43g1PS234K4coMaJd2z3t1jY67483CNy2BkaPCk42EeznHsm9C3e3673qnutum5T4TV6AfHYyy6iYeG7ASVoD8rR",
  "key36": "3yGMjZqszF1EgUqM8kdcX8yH5N6zLqMbAaarNwJUa7DMcBAfeKeAwmU1sbZZ72Ch7M49GBciyThsKz6FV3ELQ5CV",
  "key37": "22XKHe3H1shER5Yvwrh2zzRQbSnU7HZcj4Bi3dtVWuvnFYNiTMgJxecjSswd5zSZJZ3e1Hc29gSfZACEZgKLY3Zu",
  "key38": "494XBG2DEVu6AJYTUuiDMtfQynqkse2kxRe9kjjdXu5mjb4shyLo3bXSwvbsp7LVBtTRr3U7CNGMaHzaevqKbphq",
  "key39": "246BEdwQPMKPYCa5PQJ6We1973DqLCpKi9g9EtV7peqh2uoLzsXL4ovY1PBSFZkJUcSPaAikmd1KtJjngKZVSdWN",
  "key40": "643Yyjrcx1JYRA1sukcMnAPBNDqeKgPhbVAMvx8vxeCjCpnjaKoaN6JcUBSNcZg8332wD1AuipZNPihVrDcjdMVZ",
  "key41": "3YvAp9T6AyJkE4cHHorJeNS8uJdptU3sNDE39JdUhLBnh71Hoe7GFwvauqBSGEPdQ3K9udmSe8FLKf476RkMbqAs",
  "key42": "4ZUuf3nKE6iu5mMtQGYtuWQ3L4NLKdq7LAofr9ceNtTnoTGoQzfzEPTVe5afy2sRKiMcYQ9mX2Qt4iSq35X5GrXs",
  "key43": "2XTPU8UkNXQ8VFZHscAtt3dbtnCimudNUjEXJAZjpK6VTa95t5X8gsF5gGT7npk83bkmvMNFPT3F2HPDmspNPJ8k",
  "key44": "66p1KLGTmqLGQmPihdx6ugruRtHJL378SNugnY1JL8bseZafrSeZPB7FZHSetDHsGUusU4wCnRZ7Xocd5oWCtPMA"
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
