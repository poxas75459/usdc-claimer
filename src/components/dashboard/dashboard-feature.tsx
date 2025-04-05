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
    "49nowwUpe2YpPrsqEuyNFMXsJFmGwvKY4inHABgRLX62DXojyoJ2rNpoaEtmS6XkQJDsK2Mu1mUxp1jUfiabYc1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n8rb5GyigZppy6fWPfPqCQu67xXLogt1jXHw6AAhSU4sv8z6QtJbc2S1CuNjrtkjPcx2ywuwd1uBMqMNZAGW2Gz",
  "key1": "6FCQh6DqepBNqF4dPoSQPUjVsN5uJMKcKowAEa1nFETYr1hv8fyFbeFhSgyTS1pP3KTk5BeYbSkhmH9Vyg2u8PX",
  "key2": "4HSFbeUCSg5hS3XmynXNz1PKxQyKXW9ca1pcYp6Azm3S52gqkBKWPDQJqf8bQzDRp5PCgaRHUj7bP6f4cGpmxLjm",
  "key3": "312S2bLMzuU9c478ZSQStu1KQQ561NMTnExcTM53yUfzghrQW6UEGKNiGBriKJB448eXCmjasDHxBuZFt5BAfYkR",
  "key4": "2prnrDFXaQdyZRjTbw8YbqTvTNZcThPZ4s9PLihX7rZX5GpniMBXvBT7Rgxo3mjBRh8iPp9uC2t3Bb8S6uAV1Bfc",
  "key5": "rkjbxRTyyRcTkEajBWN4XT8i98gR7wc1134WRiRk32cNZxc1c6iPTFa7A7fwJNBmgjtnDY7M3PRsa6niTPKccmB",
  "key6": "5jXa2YazU1wjk1zR8joKEHsYjwkkBAaGGbobZaadztQL6FY9JCerxbTXUwTcjncH98KBVFP9cwG3wVxeEcAhtH5X",
  "key7": "5jebQi2Wq3cqsHmAwhz7aVpcn4N4CxD7arSX3ixRxcbHqTXbvjnjpa7jTBzt9byeyFviZTy797maqkiUciZZSt7L",
  "key8": "3wa4effCagWTR1A2mH1sSxVthtuyyyoTPo8GcR31FDm4B76Y7hH6RY5iHAxtqFGzFXqh2uEfLVEHtJXmye85X4F",
  "key9": "2GpxpftQCrzBaAXGiyznev25Mmy99wYrDbDfUqDxx4hh4zvokahtHERqSdtVL8RM381hXv5yhU4voo7okdNE93Xf",
  "key10": "LKArJgijTeuwXJ998GL1CDgu1ACRugkUKdXZ76mcWfYRQbCyx3bbVUcr1us7FZMMktiCNFKfRtt9oihiU4UgX4v",
  "key11": "46KkZmPSi4Vv9yxbH951nPv3hzbRyst4ksTYNehhW6zwrmh3fdW9oFWtJq9JtL8BScvcDhcxhZD2QayU7hS1oXgo",
  "key12": "2UYdbg1WXThdixeySR45FJRbdrFDEHBNDpzETLoEJY4d9xGQYETTp5v7L2qrBZp6NL2oMgYMhA1brydJNhxaz3KB",
  "key13": "m7i8nfxxxVwHKG2otMBdAUDtGejKoVQYHypGJ7A5eMA55p1aWQSgTAByL4yiJ4cBSJ4X2z59dTcjsCWHMA9MiBJ",
  "key14": "55Lepm3fN7udagpZD44gSKX36xktD8dtGWVwPHpJbmBrRy3oL48WcG3fa5P7uUsuFo83dUrYvk29RngK9cdv2aWx",
  "key15": "AcYEKJdngDzQsikLJUWZEJyagKXisv6wTCqqwDffLvJde1YzffcceGRrhhqyaz5fusxYJoWMMn2FDo72kfFFvWh",
  "key16": "2yLXEJNWZNssVjendBN6AK1kM2nFfVpY5pE2FxGcbBkTqqVFwGbAh1CAJZFhoUC8JpynXbLii3xkpLxf3GxEu94w",
  "key17": "yEmArm9gJxM9bBACWuPYLZVtnyGyS5Q8PpNXPucZ6nz92EEiAyUNB9xUSdDJvSvuf8zqdJvyYmjTLEyfrozkfW8",
  "key18": "AWHhwVRyAMP6S5NyzN1cVgPWEyHYfb2vYor17aD5Fnwq5Wq8vSYmeThXGFepV9FVCLoiKcVvsiMHNmZCYEsa3CE",
  "key19": "5JhtthXejoB5qgbjH9dowBeTf1pBWNXCXHx4y9T8YxogY7cZaHm5gKNuLs1VDCwFbZUGq7kSYKHU9673qGG9ShtF",
  "key20": "3EEUvve2UFnw61p79NZjcMcVijzsBEcEPpV7tMHDNJgMhPs7Dd2vGTLCMMzy3L79YVF9zfJS354wpyjX28EdPUep",
  "key21": "3baZuVGrHUySSVgUaFDXJDLskP1BhyTwihkZy1dQGSDGHAcB494xRfuo9CN1tUQ1Ug3Yu1e9Azhs42sMfAE2uJPu",
  "key22": "3HVuP6xMY2Tn289dAGBKMtmow1fQxefp4j59RfGdim3nzia5ARzQsL76vmbUeQpGVwHzs4sXWz4e49XU4vzFrhbt",
  "key23": "4sGSEAGex69hGrrAuTBQqNj4ATbPmwUzMM5ebmYWz2M6TvSW8ayt5BejroSnBFhMqpGDxXbVZgt2j9Co6gZnqMcY",
  "key24": "23zmVGmAmDrAnioJTKyX9kSVeroNV9RiPF7jBkoaL8oLQ1TMLEh6sMQeqDLMe8mzMxpKtULbsZ4btExcHTpZZ1Qe",
  "key25": "618svw7xGw2z78SYVMX1iUNv6EGttGqf7aZjxzUrfPyntbidijDhMvaftoMuDoYk8QsFU5hR6Pu7XGA3bYbiykPY",
  "key26": "gje6h4BUyrw9mQA54EFiaVL9utspnzpetp62Tm5TW4e9PA1rbroTSgE8fWnv4owVWsy5QmJGwpThmc8o6zTupWb",
  "key27": "EatNT5FGpEA6FPgAv9haXHsg7DBNX6ZMq9nKxtVLsqubhr3vjd4uMJztWESQjkEBgeTeB1ByFPYaDqF2kYDKBqf",
  "key28": "4mEbQbm3C4A3CnuT8W6SyMdk6XWTA6FtrnyVjtU2kxRu7DQsy2ZdN3ttpTJgvc5FsCjtf7pJZSMwfXX7MMVEK1NW",
  "key29": "66WXtvGqUrdtQFmUS3ZWy8nE5JwWSeHhA5eptqE8UsDDQGXReeRyhp6KgyMNs3fcGWzRd1WVmt9tABy5C7k7RSUF",
  "key30": "67M1AngNkp73wpcz8XEVZVUfHXyjPBZcVoZdxbRuT27uSgnC5Lcoz4VptTDeuK9wMJDdA3pgKMHARm5xZKpHX416",
  "key31": "48bGfG91NQxK7iJmM6KNmidPygBECvoeKAf1rE6UJe4KBncueEYhmuHVskSs3ZwHW18DeVvpRC8mzhVNu79MT6eJ",
  "key32": "3SqP96pBMdJdocsKAYuFeGPT1MEpozrc8VcZbAKq9fUXSPpCbfmVvJVxvq7bwC8Niceji1NesgiAYfKXdCQdurTn",
  "key33": "5aXf8k2RS2TJCd289FcuhcgZVwHsnXkXachFz2sW7nZWXmZzD5KZtdB2umHenBbkvAmL5nu4PKLjmR8KZP5VqoWx",
  "key34": "4A5n6piLA91VexJBMFfQHHRDT7iVfn89VnWzzAm9fQurQ9noAbHC4SSYzhcxcHzDRXsYtSNpp7nnb6St4QdFrupg",
  "key35": "2STF4fe9gXEo523WRixzHdRbWvMaTyjvAWzDW1WfXsJU94mm5LGLxXBrid3xqzj6mdPhXD4sitgH5pmaTV72JLTU",
  "key36": "4kdLhg1TPY2KHkVCvhNPccaWBNDv8Zuaq1DrFtYwdPx3QjrdybEFVRZB7mLfEtqJvdTRAcGVBKirFiCPDsUvUGFG"
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
