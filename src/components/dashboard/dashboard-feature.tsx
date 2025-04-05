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
    "3xyaYi1Wfx3DHfT2EBK8ctnL9mK8L3wJVcogNntgJnK4hX1JSQxXu3Bax3GmNEutrLv8ykpaK9Knej4Bus6w1TSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zR73nx5wci5WXgheKT4ahqj6NhVEeZUZPfi4mGmD71fNGjXaUWDoKBHEj3dZUaLf6y81HajmF4EEeyNWtMjVrPE",
  "key1": "4vtjWUsA3nadFA85z1EtaAcUzBKKtwt5zssWQ2aeBr283ETkXcVKRQ8mMCWSmoxgEARQ4RpytndbpcEvpqdRtqoq",
  "key2": "qpojzncdLb9TScpY7Kd1vHNBH15VPJzLQ1e2m3HbhJcdSVmfAYfbL8Ggd9aPy9E9DPpPMRtpdafREM52bVqidh7",
  "key3": "cXaqDLsbWkTKQbEteTJKf7vPoVZMxWMFc7YiYqnL4Ricf7Abgym9HsJ7gM6NCnYgxxBWQpe2VtjmuVrtbymWvJW",
  "key4": "3Qkns5Kt4UUMAbmP1wJemChgc2QiGSkVJTLkEEDX1v1Ss3nCTcxXPe1TojnQaWvczHumS9EBLehXoYYDuNa5Lo8T",
  "key5": "QGKUuytpuVB2biihv15ncVhNrQQxbwbMSz3Px5jMQMNrDjL9DBwrHgWxosTAbNXYkWgN6KgM2A2sn3tW45WsZk3",
  "key6": "34vgmsUKx86q8dvF648dG9qyCAT7435TXUHXXmTMoENvvHfzV2VNJh8NTVky8UfLHTpYrk1rnarahmuUt72WpJqD",
  "key7": "56Pmaggn1jf5cN7Ar9ofeVBrDRoSgcphwgPtGAx6njeznSKoTDkQf2Cqp3YxSCBGryMbn336qTqxMynfPH5LjzVC",
  "key8": "3ZCtomkNkuUBn1YxTpLUpBhbsNpZ4MjQnQpbZEXkem9S74MXhurNztAfo7JyktvWpvfp2EUZvyAHs348kqxRutvd",
  "key9": "4qS1kykPq1A93ssJQkNPC1g5pAzGYknPdSi9vF4fsMw82nesF9kdwWLKPAsMJsXBFCb5wGGPiWjLE8siT41qH1dC",
  "key10": "4z9BYM6vtmmhZqr8zkAv73TG5L6jJqczrR1w4eQb4XWmvPe38GHsB3RnTuRhnserNYtKq1dxTsMabdHTU1AgqHtD",
  "key11": "4iGxJMyonQ6RD5rGu5Tn6tYx26pDhwBGXYm7ZkZ1s5ojb6hmXrtcZgjqKQ9mx2YqJKHrLTQZKF6jmGBPLfyg6iAN",
  "key12": "5uXBWpJkTHtLHHzfAGamSXac9gikLR1N1DXq6SSHBFYPrFJe7N5TUhgvHLRXX1g751FwuiL78Ncbgh1XwLaWqh8Q",
  "key13": "3FBtnPsFMgXuWbwE9NyH2tHxHK7F67BvA8MacWvvwmrvBcGvmQ74Mg2xb4YoATtjyJKxC5hsyN6AUPgHCHuZW1H2",
  "key14": "46Qx5BKjGndD8uTMrSnRuopTtYYXFPyV6XRNGBH565UtPiDfUgAdp93rJoc6o6QpsSQiuz1UEVLSZsyb8SBnNGR5",
  "key15": "8duA9mQiLEvNmxbpR5ozhnMroG43wR2JNXdeHxcGr4MzH9T5dvsv1TDWoVaZiykv7nBb9QXceB7KPfw99NXGSmR",
  "key16": "grpCUrX1jLoWwfFgTv51PYzDFnUXD2shsL1aG3ajQ9uAzXcGUYRbx2Ntq9oQHvM9xxLXpXn1Vwmm4iByydJGmNJ",
  "key17": "2nHkct16nbWY3FvQNv1Rx1G9x4Kw4ps4xx7pPAiZ4HaqfLiGpMGjRFFxK1h1au1MLvRoJHoeKmwPNjSj5p134xfy",
  "key18": "2bQLwGheqdonjH6YzwrrwWPTMfraKrimaJ82yRkiVwaZyo7ZjQDoBApcdRQAfeZp7dL1pZkPxkXRkj37YKaYgWZy",
  "key19": "hsg2N4H8FBsJ4aNvYkcY2kA9Ch6K2WJX9ZAgtMHCCAZJut7rQ4fbsnA9uUCyyVbnLdkPfgcyMBsbXPKRf6PNjh8",
  "key20": "38cxL1LJeV3hp48cdXGpsappxVz6N6mN25UBbcpzTKyNchgUGUmU92ckt915QczxeixZ9sTUcVt29QCb6rf5td24",
  "key21": "4YtPN34ZozHTELWrAHnc2RyYPSebrsqjwfVSxzCZXmsKJ1NhS6mTKVhj2ToTaDHcJSfVwQEfhhKvMUGG56mHMuaK",
  "key22": "3xiNkYRCX2uqyXLAyC3Q8YvKukuF7Eb9S2fZb6ekNpuCE2v1x5WuJPEEcuVCTVTqVPqohaKJUDYF6AfdfowomTHi",
  "key23": "3NLS8dfyK8k5L9a1g5Gh1VbykmV7B2GBfXdnRLScteETyd8WJL1MHLrPwaABLjuudyy17fcusaA6P8vtXhKRwLa3",
  "key24": "52iXdMKHhSApy1XtTckawoABwtkktAR2UfRD1YnLoHegbXn4HV3nz9qdnF8FpcDKZtnWZsmwu79gaGQVZ6QRQ9GQ",
  "key25": "4ePqrv9EJ2To22YwxybiDqG943XJajXcFFoPvUXAmKKvj7cQ6Z8H51Fa6fjBnybJMUeNkhF3gCeczrUfaHHvEHDG",
  "key26": "4qtg7x2wbsuRJEhtvtAiBUWJbxYbfmu8UoQb3dSnqm8oDySDd7HV36jw1opXTkvJM4ojhzt1JyPCnk6BjwTf3ZaN",
  "key27": "47T35W6iJURF3EVGUGvHNJS8zvWDRd6QZVckkrTW853uQ9AzqzStQLDwCayFj2nbqcE6gDoU9VTnQU1EWhHVF1Wz",
  "key28": "5FTX7iDHxYXe19X6Q6Mghvov1Ezq7p3bgVR8jQuz2fay1E5yTL6SYC5EyQhFfYtdNmJjs1JMiVH9U2baXW7jD7Fu",
  "key29": "5oBmEWiDEKYqd7cEwFeP8h7N7DquqAi56jW8233Y93rvYFkx4dNXn54d6r4kLBUwVzQyDtWxBszNZreAqq8NixRg",
  "key30": "4mT8djn8qed4Eh4dDBqRMAwBkmrLXnBnZYSBn9cYaYUxUD2CRpHVmMLq7LnAjmyB4fkZR7CzkS7PchQJVGpyXfac",
  "key31": "4RhnxPMkfpgauxa69SDHZqSggXTvrLWCJtzwp3RhXgMkmUDVEJfFxU7NtrSXML7jVUBACWGe5ZATQVX45DfoUzvX",
  "key32": "2cXTr5MpCoUdhZHYwYzXTGVDF6vUihoaxVqppLKTUkaQfAs9y1UvrVagBsRifeXE5ThrdKPgz8mFyd6xPWoiyZ2U",
  "key33": "38d6PCPh5pRU7vKAsoiXLTn1KBfihcmD85poPQ6yKwPtqS7qWT4anTLESA8PYhSKxaD2aL75Fg2HvT8tRCWaip8H",
  "key34": "279X6uMmHdPgNeDuXCjiR5UBUeRGdkj2dhK68rsXfZPEZXc32M12xcPYNjUoWkiYNSFYhmKKqLJc5PGPQ8KWzqsf",
  "key35": "2umpFGVr7kRiCf35h84gHD6bUr6UmdjNKuGa1xkaZKoNdnFP9jrajBX3MmhPxW9wfgUTF9BBfRwVjCmSrnuCS88G",
  "key36": "2S1TarvP6krEb6RZTz7n2hbMKpGvf8s6AovFUdUETZQvPBRs42HUNhqv7pbQbzgiasNtYLMqUUQMpKWhPDPoor7z",
  "key37": "3YujYgMEqLxaPd7Qk4YLM4vtWMHiMMcZngYiNdw2wdbMSEBzHFzFJ1UNwvZmktVzuj6ubJ9USNS8e4ZsWLJoPBoB"
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
