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
    "4yyQAFfY7DujwvGVPMKpq2WZNVcZK6yStMXhf6WEpWKRgpaqvxt3rDayEiD1bhgFGv7Wwj1mZgVnsRH2ZVY1Kqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jccaeLhKGzGj8779foKcufAzjggR8MGFp49L81S5bF2HwZtSUud4JTa4rGMytbfaKAenjL3HitvkVARcsyRrEYs",
  "key1": "5h7D6FD2dV3fuW32qyAKr5jABQTt7e34XieSPTL8Ge9Z18iiHKPKWQyC1eS3VWvFhJAvYVXB5unqJETs5c2tVmaq",
  "key2": "5iW8g7p6RjUV9fLwKTk9fFyAPkTEVuEZBEewbSXauc7uK4D88HP6cVog6okEoftNT8WHP9KuEcJ2qYgNBhxw4si2",
  "key3": "2gDkskdet17BmpHFvknhsQ8EALcpXSL42s1Ry91jmDvBZBhJjBrMHHoBqZv2vJKNVKJMEK6xLkYNyjqVMZGL4zWq",
  "key4": "2xVUoptANJDrUHudV9AMQkpatfH6hAHGmBXkbFcesgBMTdKtvFjP1Hm8xdPvjiQAb1z99TR8u5PFVwvTyfkn21PY",
  "key5": "wmPYLreeAxm3H7N7nmQGGRLdUHo8GhT256ZFnoX7Cf2UaY7ZX13mCzKQrsj1ZSsPwU23eN3ALSWow2EHW3i6wXM",
  "key6": "4pnqre4ckUKv8qED1HMYETY8XoJDa7UcpdretCwM2rjPjYPZSXsv4EUL6ebcyAxMzz13DX3Sa2sdsrxcAnJYtmA4",
  "key7": "w6YUkHvewSvw7dXzygjuMghCiRBXCdGR8np2oqeTPLcBVADEn9TAzVvqqRMnCfuRPzeaaDSqwkAm3xWs9E8KMdE",
  "key8": "m7tizWUMLGh69oooSqijNnVJhEnPZCwdq1moK6eN8eo5bwZoN8NhRFDR1Zn7jUC1h1jrtxfCJbPd6WaAB7DWCYp",
  "key9": "wJceP3aC6736traCV1S69Ndm2inDvuwpBMEkVHTd7QvTsfNDTKgdgfYGWace2oHMH3xtbPd2mdWmyWuKfNoMUwP",
  "key10": "4eMfLeseywQvFYWEi6LA7cKjBoMi4BofXYvWQ26bxznSGvqhGTeNmPsNR3zLLLoa8BoyrkJnY8whExfvCzuEtFvZ",
  "key11": "4eTiTLsXrqv6mjbyBWyjJ29XjQAbmabXPRvMCXE8DiTvwcj22aF2uEvFwHbErR9LnzJCZA79Pe6oohU6ATzdwaNo",
  "key12": "3WXeTG4ex8RCDt8G6TPFQg19LMYRWdduzWnJaGMeHac474Neg6ebESx4fhGSdyGfjXQLNQak6t2wFYRh9vdvGFxN",
  "key13": "5WxMPBky6Xs6UUyQe37ev9oQqFgYBNaRGr1KYbQUFMArbVac5cYzZSE97aZMhQhvE11bYZwU6vss7ABUjuRcx5Y7",
  "key14": "2r7igswiayMqVu7pjWn1bqYhtr4Xfr4sh3qcwKojXQS3AkSoWJYef9P6gGj29jTmCN1XZJwbihkBip5JA8ieHChi",
  "key15": "4W91Mm1qVhJUJN8Nhtv87uvLdj8bvFVfNh5MA1yokNDXCKkY6BH9fsUq7aiH9DaQRgCGZaCQt8UcfhMXqw6fYMxU",
  "key16": "VtvcUngJb9TBdVC5tvVTER3i9muzWd1UWvs8XR1Q3LndfdM2tWi96aCLnhxzFEfP8Tuyf6zdHNimhpdW5CEdHbb",
  "key17": "5ArnMZruRvfPL9aEr3CXLmU2MAUtsco6pCvCvfcihtesdExsLmRbuPSPDfzFmTxM8Fpv3n1ErGSc9ZMJT2Mr5Y1U",
  "key18": "29RoMTgehftbPLJG5MXP1Qi7B5t6zRQHsxouASfSexSLy2CaRsr1Pz9xonYjJpvCsFgUiDtvgaMVDDgs6PuhYip2",
  "key19": "5iro7iKUD26i2FMmqbtWFDwJtfAa2j8xLxB8rAS8miJ1PooPB2JQhTcRm5dDnpparnsfH1C4YYFBchUDRobJCJSM",
  "key20": "5NodtENASfXJM5eg8Nv69NAHYDVZtu8skG7qxfFEnoEg5mskEScNaQh6S4HPnGWxDamTLp4yfNY4mKQxrD9oEnJD",
  "key21": "2xyPC51QEMZsRrBUWNX9bYRtCMK6fXk3tg7KtSTvH2vCZ8tUPnTGdyMECUi3NUt6NhgCr7muWPECCQFdeNtvsJA7",
  "key22": "2yEMibsWcsVAezg1RYPtkuLL46ufXv1qBUF8r2cBmhFbsY4KvRbXgBeQEDsKw3p2FJ6qsy6Ayz5JeuvjMHKV8wHT",
  "key23": "4AGeysmN12u38qiWHrorLLn1e55cWKfh5JtfdPCBbv7E49emTPNHMuimTtMzFQzfnyHMzDokyqH68SE9cPGh4zrd",
  "key24": "5P4DBsQJskptgThZVM6juUxdt7L8utBTdjhJwQzaxGWihCwNfV6NtzyUHVqhu97Qr19F8pXSQCQsKNoQrngH3Vd3",
  "key25": "22W4gicAiVBUFcJw1Pb76FsgkTULhQGjdX1cVCoULbnVXL7mJGWHnP8gcKwu2biMyQ1vmAzjEAVKQ7hKP6dSWRM9",
  "key26": "5YmtqN1yW2ZUEQCpW8SVFFTmXSVs3sTx8WTnaS6V9jfWs2yqauUUov3q5KrBbPkaudJAUZ1rpucFnRVo1Huhc4eJ",
  "key27": "2sPwskNNUoipZofimfFvNM4MqqrPr26yPUUs7iS1SjSfoAP5JZunHrsej2ecA5nrsboR53haLJUufB3kHCBb72WE",
  "key28": "4MW4ss6bXXh4B9NC4wvJuTWgY2pPDiXcREF1SAJjyjrMi4CyZfCSvBwKawvrSE41mPzxBhMYvuB993FSmVyxTnHc",
  "key29": "28qBguEoT7F5msYYNJNutd6AWyZAe21MefstrJyQbecDyvFnYcYi4EG3TSaToGZJqwx4Ff2o2Kf1rVes6nuUYgbx",
  "key30": "WFUWoY1DoqGMrzCGdrrzJnWxDrfwckGkRDiNpGLBjGD9zkw3ohCw5VHLP2ZRTuCZsqfsConnGk5zx3Ch1pFsky3"
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
