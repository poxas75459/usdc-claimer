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
    "2JGggoDsZx44auLBwmmpMTu2zArynHBbCtqAKySMwHWL3ep1CazPcsnytLZNzpxehP6WrnKc9zpwojm1wuahP5g5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfFhKrStvhCsgpATYgW8nm27WTDKy97kh8SQUYnKC5AMEx1fCQveAqTnLXsHXap8rt5wYB4TCS7iEUoj7HBm5or",
  "key1": "4TJohbyzU41Mub9Rhe9BNzEcQ66hXemSUtdyyo5ktEXvinXJSEY3jzp6tinqziCHTZgbMBV25u8BMuqkugVMsSFo",
  "key2": "U64MFjKbWYGDqBmhrNreyxmNMaezg2zAANbHncasM2YfWZGfYJpBZKzmsLWDNhsg3rs4Az9BGi4syvoN52SfQLS",
  "key3": "5AuiDAMPzJjCezZmcZLxLGMcX4LgoYLwzWfBA7qvwQPkLTenSrZHUN4PuEsYY88PvXf6fHKKahyUWPRJEzX5hR7z",
  "key4": "wEk1nsP64RPAg3xJTKpwL5fUYp7bgNEWkEED8btWn4eSze8on4EiDpEVy2jcnGnmm24GZzA915HfjvbkVUcC5ir",
  "key5": "44Vihdz4puu3N7AsETUD8uHLQ8toJrBGrkxiavQA9835R2QHXMN88g23yDDcmF4tqvXoEci6aBJdZNiA7WrpUMAd",
  "key6": "2jwfD868uxodme9UxwnB1ke1QDrUBxyQwmw65GL2UwuJ6TZNCnesdzXNCRcPQJsX4Q8AcdvdqkSzXy4rVtQByGEE",
  "key7": "4gbbA4dwebEGWAcWxw4ZzctRHeRMndrJjh2KADyUS6BvQGKVcm2fs59FZdtkLnV54MjHEnPHN9f834CsXCBQeboo",
  "key8": "44vTEYcjgBQuCcmpk4qJWQ1NseFXtDgn6GJ9Te9wzf3baB6HP4hyvAjDgSvHWhL5YYscWDaKZwzkyQ61cWrWUpgb",
  "key9": "BTSKTFLzbjANnmGKZV6CafDCyQoEKvhoy7TtTexrMvfr1x4dQq6rJu9vyzEDDra5Q8f7cHTsoG3ZeubLcutmYed",
  "key10": "5zbRKdnKqCF8HZtGcm6yQ55Fkn7XmfAMshhNjgkvgXFPeYHRtMDqUX8Zq2mMyUL7KW3MJZD6nPCEmHdLMYmNnCNx",
  "key11": "4bAeAQWAopkmPhGz8uJz78BEwo1V8TcrQVh6gx6FQ3rayT8416v7dPFXH77BjDqVox9WRgjPUj1kLaGkhMsTAnde",
  "key12": "4EHJxnQcXJFajuhhmLUfU3YRC9Eu1ApFWWbQ6ogP51ATGa7SxAqsxAV7bozgUaz6LN5JNz1R6KetQGMPNEHFR7CX",
  "key13": "2gCZdM2W3ALwwQGvi92MtCTLYMrtxvVduipeqLp9YXKKqSFx4Q6WBcfZzJyxNRaWGcVUURQBmJyVboAMD5ivMoVi",
  "key14": "3aNcuAAB7GkMjPXHFRtWfEECSYYLsW2KySWgR2eHyy1yzyg8ZQRWvRaTxEiw7GSrNUSEnc5qXNMPZhfUS9zgpjfu",
  "key15": "2odV9ALP8RJiVhXzQfGybc2tGJA3QaFNLfJeA5ZPoLNJ9QVpep8tEEjDMc7q7BWpy5cZ1WPuGFXvnRYC22EScJoT",
  "key16": "bNPYFjVtYamVnT3Utup14JjtksnGZo4t51nVsydNPDJ4HvjyGo6k5tdsUuoMqZDMgSVKVugtVwHtYbPAE4HVCvw",
  "key17": "2FTMnFSAkepikbxRJ9wqQ3WvkXAQJ7d3Zf2U5gmamnPFqFekyRSHQNJZcXc2g6DndMkwmdMV6cFeLACbBhbViaNs",
  "key18": "63KYkrsegb5jdL72QpQDJrEKz6qea89ijZXGpVmXNenfjcauXjLjLhBGACRLzKRPRja3yMjuLrGzoMhdbfYEjJ4s",
  "key19": "67cn5Tiez7NuciZLvdoKigt9Rtoskqkh9K3RR1no5h9ugzXjisu8MWpWdSSuLdRyrPYBrDtbyTrf4xgzZnsTgsty",
  "key20": "x46XN4ByTDHsv8xTNRYeLTtUsebS233uboUNqd4QB6PSy185ic6JLinSwr4i6ifTaLKoeVAc8fmseVdieKHTXri",
  "key21": "2wBm83CR5uGgEbKy6nTd626xJXqRVZ6yM791n9T7q1qKjJAyeNuZfwcSoo6KEmGGQJuH6sfbsHAo4fVjjdC1zrE7",
  "key22": "5FTtLeQdgGCrvqGjH4MP23TfHjZ3R1RvQvaEFrR94zV53UzCN8gdiUettRWNLbpNGJdTCr8zWgWFekK9sS6FCBjX",
  "key23": "2FjsDtiJjdGAiUz7QzxFncvzAF97ih3W26Z9wJtnMpm5QyCRXR5wLbyySFU6QaL5SjS8fEnJ7UyKTQQcV9DHwZUB",
  "key24": "57hcHt6WBbL4Gw63C7vDUftezAof2KYj4nAPKJauz72eLeoi9CDFKJAe1hTDftM61987NYXBVqHyHWzrg334hJFZ",
  "key25": "2trvujycHkdDT1XPxGezayB92BkHdoAo4F4rjPAAExjN1jEE2fnYCxyD15c7yG2FaSy4UCnnLgftBfn4wBJUB39u",
  "key26": "2SfX4E6rYWoNMQfruUrx2BJmgn97D3yZEgzo36yBsH4EMH1cvsKkac2GAn1aaHmN63hwEyNzKwwdcky1X4gX8mVW",
  "key27": "5qrF7ZR5dqU9z18fdSwqkAHDjJYCmuNbfS51Xbbr1yTeVTQnRT8Q8SsGamX4JLkKwLwe2t1t22Js9UyyqaxHakgd",
  "key28": "64WzyJDVCoCRZtwRpv3ycSHJo6xEeSFGBPUxz18tFenjKyewr8qvE3WdjK5zhTmo1N1Qc8s3Xzp1xuQoYFajxCFa",
  "key29": "4YQLZcS2h2mM6Te7RVVSrnjRC7ay5NVoMGkWnqJyNchQf9htwhBgdsjy55Y869hP1rsy6Jkm9wT2fgxaMr95mX4T",
  "key30": "3juFcsaRZ8EthLFeuUwy9vtPGaRLz39YweF1vQPT4nuDrycg7ij4T18gYgeP4RaiFe5ePLG8Erhc5qFwsT9cMuaK",
  "key31": "3XFw5cvcHoNrr3WRGL4eUP1swxPFgsYeHfQTLSTaHGGPsScZKnMdBHDDymYHXz2BkRk5i44mbkgGFYc3tyBVTWWS",
  "key32": "5rWBts9rFt1ztJDhDHP2Sc91i4E1EJj6gEqvZrNrNHWfYhKiBoWwChuRkpUWC1wgSKsraG2nKn2GkjpsW8ZNfjCi",
  "key33": "5DZLj8inXZbb4wX9dSX1RABr931wJDh1Bz7uyeEyMtWo1maZUcSx9KMQbZ4WPKDQYkcSWyPqn4oDwpJRevRtN3aB",
  "key34": "4mn841XtQ9EKq779XnHfg2XXrf9kjfWPL78PupZs3hSKYYg4BDwEoCnaXAH3LJtQKka221PsdnqresSxxNJprrjf"
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
