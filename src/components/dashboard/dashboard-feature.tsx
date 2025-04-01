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
    "EohZc6zAfPkUWwKpy9UzuYCSTtJ3U9Cc7daiCjWUweM39Pb2Vfb2zVpFo18LTayYjLDQeRvzj4xgrw3ykciGUwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wb6QQG8DYRX8sm5KWez6xk3N2EX8uMJPK2Bw3bhghyd486qpZEJrihy6NCooLw5K2ggRAfdP6aor3bUch27YHtb",
  "key1": "4yTXzpoyQoG6cMJZfXfD4ZiADTiNJyVHAaoJQ7mcVdTzXqcN3mqg6S1s8iyGz5jW8qhGp2YVo33de96syxa49Bb4",
  "key2": "5cpxPEYPQhyDwZDCxupRWkXdDgNjvmEBrjP4MRxVHDkHMmxjFM4Z9FoobxLfUCKKfpiDRMPTs4CMEGEUvqeStZGG",
  "key3": "37m5eCECr8M7xNWmhbQQKtwBWBVhJaUCk1kZ1KJaMZUPdd2fackBcBrVGW4oDkjMuDCE3F51poKfiFL4ZypYifM7",
  "key4": "66JgHavJVXGurAj67rsEVemW5x3sqksxQwenZ3SmVTfS6dRf5YLRgKpiaLnabucBsCfKQXLugFmymK3ihj9eK5Aw",
  "key5": "3zoqn1frSXPPpQdktBumXq5K7jNtfPbhogmsn418eEDzNo48V5C9AXsmgKJZS7q37r5KWKx1LaMmsH1KosJrV77h",
  "key6": "2m5Riw8Vae8hb9h9hQm1yoCeqSsHwVzE4ruw2CmKkvCWdZmt7rkgBKPvYamEKerJbzY4jXMSiRoHR3SQG13aZtJW",
  "key7": "3Hz61NGUn3z9C4joaog8QG8ANRwwJ7JiSEAWvmiAp9ee1gcvHMssyvmruSrcLEQ91UnjXG1edkhW2iZUZNAERgFR",
  "key8": "2u1ozkY8XEY8J23zSpdmQyfaPo8hQJN1Qv4asW2SreJcQcCMfKfgayY219Xk6Q6ACp2isqQrXUqsxoZDzbfuQYpc",
  "key9": "3vs4kJQ2roxQJR2AfAgXu5oGPNZhsLdFLeYVgw1gYVMRtT7CHxkWkXxHe6rYst1SCyvSyhaCrExFssVzrw24bD3y",
  "key10": "5v5jcG4QznRMeEty9ZDuht5pkTRSRWvc6Fz3NuhpPvCA7D8igF4HrHZVurLwhHYTyiMDcVpU3caUkZWMtHmy1T7Q",
  "key11": "5jYm4mtUtbPDQ2KrAgKYWYrUqVuPY7pEEGpQjcYhVAcUnTRcHZ26GPqrHWG1MRdFQMUxXfKEyLio7CiQwXaCbkKU",
  "key12": "3qDvWvseVgVuoGSffbQjuDbYNRdjrLHP5qpx38jqrmEX12Dua2r5j52wkzDnnGuxj8FacT5W9nBdziuw1hjxTGzQ",
  "key13": "53J23cEkPqVXV7Fip8KN1wzdatJ85C2BhS8ASASxUtCmQadzySXkZAm52pcYFQPx1eWRrtj2CB4kDqo1j2Vq6xK8",
  "key14": "FWjzLhSqdkLexTyVJugJGTW4M6RyWuy886KEhjmmP4qneqSDWSx4xJ4KheNFxoA1xQNcYon6Tyx6DNRwkM6bca5",
  "key15": "5iok4eSqtUBidftqBhBXUjDx8y3KfDxFmcUhP7xyNnePBrNVrpdUqtuCjCHCVw911JGDdaLNyybwTerT93i3MAHE",
  "key16": "4TwNPUSoxr5JpqP4t6ZsvzdWz8XFpfSZtMNNDKFaTG49Mad3tvmzvTiQfS9jMmfymDtbSzGrBVQgdcQes7XAny5i",
  "key17": "3rF89bbHaKf3t5YjmB1hdmZWQoXZfHWnUjun1LvRLMXxvkpxxVCd5eg5WXXHqgW84zPw3kmU8cQtoqZCeANXtRnC",
  "key18": "GkxfsC8taAZE7fvjPCkWaG3VFUDtLGBBbrPxaWXURrqNzqMXq2ghXAS9uZhZYX1tR3fBxiAgvk9FsJHLUh7vwWf",
  "key19": "5raWtBeELJW6qmmoHF7VpFX82JkMFzmZWZQLnZzrdy2n84NXgbNrhHpUUDaRf19JfLmSoCodPEDZDycza9ZjWyQ4",
  "key20": "5MkvXGuc3NvQbyJxwxWrcUVpTgzzWP5mQPn4iRPe1YN8AfUrfRvnS8ba7jL7aEAnXgHaan6KxRBmeV5Eh7AaA2Np",
  "key21": "5m3EjqdatbVQmRJdkokxZyM9ViQdgEW4JJViYccHrcdgc1aVt6cS8gwBgJpfX5cZkgBaHmpj9Q7TBMuN9APWSuns",
  "key22": "L9CnPmx4mEheLdaCHH53YscjGDQbAsFFRHMi2E14PGYP4PDtT7zn1UTuMLpKyoaPU2CzaLfC7oP2NQFGjQJ115g",
  "key23": "4wLAhmQmVDpWKuhXM886vQQQHeAyWuZckA9XSKpM1NVLzmedcJYdZSscU1aoKghyBBZHRmRMKCuj8paJTCHWm2eF",
  "key24": "59vN69MooJ7ByjBRtRZwreTBZv9MNMNwTdTzyAQTVRt1E9yzjBQCqN7bDJH2HXEomQqsVdkpattSNdHFbMNv1cGs",
  "key25": "2WMiwvrRgmPZwtfzaNViVkb357NCQkfKzLZLrc5Q9bQcV8ZCaWvisF7yWeAiigdC3d8kmBsVGtunEHXQwhK7QeXo",
  "key26": "ZdoUWhVGoREr6cWzohF3AxAkidTm6DTwC3fQKdi93ioZJQs8rTJEWq2FSNrnppAM39pAis1aZL6kf1JY6QbXaJU",
  "key27": "5WaY5BAF2n4ABChRsAbB8UCjMMnpoL2QLrsRGQSzorswFpC8oSqTuHuxiUxTPjCPm3HynVhdUE6oSCfFZAYADGFG",
  "key28": "5i17L2jiF637b8m7vsHByNytCM8WGWiuty6PVnuz7qfzfAYnP8qZfyDAfExrY6MmAQ8exLhY9Frjuzypry6U9xD",
  "key29": "58FcymtXhLRYCgB9YCdRxa352nnYpUJAMhx2rrYFxVFfabtdPWNYitw7yDLNNBmj7DxpBuW77ko6MeDB7RXPFFxu",
  "key30": "3yxGFjHSMdu6vfDsupKGbuF4ttUkXwBvTYtmBRL5AoBCxiyxmsfbbWr2hjkX4ciaJeZReoUaNKtRUEycihYMDPkb",
  "key31": "bEYvCjLNGNqHWWwEiq27hUj1VXhFCTSJh1EsiFJq5dy6SMSwpyCBJ7KJQaCddNNm6Sown3n3CAQQZSX1sER3Smy",
  "key32": "3TCLAdaSvzQW2dktNySKKh4GBskZQFyL9U1H7cbpXzxR8p6rm71aV9LgtbYpReDYPJpZ593aeYPUK9dWDC1Zrzx5",
  "key33": "2xvuJq11bUbXcYiSpLgeyYqJbZtYXDb4DJ358gu4MnYr5J5hr7fUsq6ehfwaZ8SZiUzkEqwDdPCTgrqSCfsveepa",
  "key34": "4bKwzk7JXaF7mbVgSRQjvCzYU5rZ43hcPrL9B4uzCnzNq6ZsVgRkgAjWhT4qv3RF6jzV6Kg6rue2kYxp3XWumrsJ",
  "key35": "3Ur49sDRuXhpxHvoY7hmDQqw4mUAjpysBWBrKoNWgC2fpvfGuxKR1XXvsQSWB8vVdLedKtvjo5NgropvsEHKBRXz",
  "key36": "4hVHAUHAPbToCN5LA15ELLRWP1J1NABa9HMiN33yBB6QJkEKjzvwHCPHfG9EeUrX6YHxbwdCjetuXggDwVHCaKws",
  "key37": "4wHBCyZe67r6kCkcvYpdqUT4MLv1dosHyvx7NrF1HBRBMq26uoXr8vyagzwAShTbV9rEA1hMJtudEGdW3Bsrc4TQ",
  "key38": "2pso1GZbYLFCiHEtJnUARvqXL7bGPPWeX6Hvjz6tzewowGQSwoCJtSKDU1xw3TuWvkwzKJu2Jo6ULka9X2Rcjvrx",
  "key39": "56DGAJSZ171c1yt3BfLmot3mPoQDrofCSRnyKqFfA3uR9J17T4k9T7YPVDQH3PxxWKppWKKgaokE1FqdpHCsXLnP",
  "key40": "3m5BMBwonn53uuLRwnWREa4hog792MxWoFHs9cPGLUh3tvgKRHbaa7EwykaeoYeXqN717RpMrQeUi4GPjEaZALzZ",
  "key41": "5GHLX3mEkN6WcNxPLBiDiaEjBXrV6xp4tKvB3Zb3GmkD2hDZPgwvJLLWPRNz8rcL9SyyqH6pNQKoRtJnJsrHAViP"
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
