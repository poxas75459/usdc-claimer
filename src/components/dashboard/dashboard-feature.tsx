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
    "tT8NBnZyGmHRothh3fEM9s4WVeSwtCuaKY97NzEAVQaE4ndRq4iejk5kPxpJapbaH7npEVQcquSPQZBusKmUhzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YStVbtYqXXkCu4tZkfdc67fD48emcBqWF4zp7ZsJDnMBctkoye61dJ8cSWKBnsKpM9QvDGnmPLuPZutm1YXvUrU",
  "key1": "52AhC4fRGLXtq1jgTjENZgWRkPciv9oEUnvPQFbVYaiq6cpB6q4ruNa6Hx6EWGPG9k7TszaKwNLgSwum9Yt9U3TD",
  "key2": "3ZkSP53gp4aSHtuTr4gWuYE3e12frpJ1x9hDcZjEBkGkErXxc5CZfxocvqgCfcpRS2qQczbNrhzE4tkmHRAh8781",
  "key3": "aLRS5TAAW46ZYgXkPsDJ5AJ5UbeFw3ipdYYJe9iMhhx3kN742SWRdPAUnm8kViu9BrD2t2KCifPEYRhVYxCvHau",
  "key4": "3Ne3Ss1exjRniJsWq5MT1N3Lw68kxq5Qoms7vUha3AC6coRQxChUr8GZ35pmZ6WL2k15AKhQcSVFivx9wMbG9Ftq",
  "key5": "4ms5RuyAK5WF5nuAaJTw5RiDA9bYeDyaFUhn63xroHJKZ5qywjUGaiCXDTjB4gYVMnEdb5V77bg42KK92NASqp6W",
  "key6": "56YU6Rd782ibuCzZCkCpUcgg5Dx24eyfRjxM43G7UPRAayb3NmBBmeouctREFuSE9fZmePmsH19Es6YrNmq4m8VZ",
  "key7": "37JJnNPhntaWUdvn4Y3GUTEcLJwfRogHas5h2Avb2y7SqHVxeEuNgHewYFHyaWKu3c4fmFtceCxz6M3MEMAddx9v",
  "key8": "grDjcwafbWmtUZr3ZZU69TWvF5JKK3k87MonX4bG9qkt9zSQxdR2ZLKcyVz6Ymu8CguCwwYNNaAX8vNGne7GKwu",
  "key9": "3mqVsvu447tEE96aCgkhstmzAoRtJ7CuGWuCheKgxydHMLChwwem6uu1zwBN1AZYje8p73BhYAy49X8Z7BLjUEdL",
  "key10": "33arAUbNbFUo46PtobWctnwcq2puZiQJFTv7yKtFsRzUVyZhKoEDrQno3wov8YR8YwPRhEX2ALFKkeq7VqkJjBP",
  "key11": "4L2ZYM81vrk3uPpkyidj8yCjPnz2zW3wLL7kFeAEeYbehu1YtfN4YpNASKCpDVFXzgG1XqghBWp4WnWmDrSvkx5y",
  "key12": "2uSihax7NVBT5b415V2ftLu7ZEJrp3u1KuuyyffmSGy2bMNQEkrQhTQymv7YUSEC3jikyp7DM2DbeoZ5v9BuBK1v",
  "key13": "2Wu4QkdU5WitfTfykXdtZr8TgBvkUQefmFNJzzBXRhLHT7th6ZyBhg9x78evyHxQbNqep6WcLPnSKdkMJGLPcxHQ",
  "key14": "rByhYGhvnGXqEdPq1kYTQSk8BPPyw6AabyjA6JgZEmWEjSDaoG63oRyP4rRo42ysYSEJ71aawj3Uj3Qh2QTgK9p",
  "key15": "3jKrHvGQuHN3ekxLDHjbHcVPpY1jJbZMWHAFUUmfWXgW2dp719Fji9RTgEM4iAQgZLcd6ywefeB3yX7vpyf8vUmb",
  "key16": "34DaQ8TGH5tDt14gPuTLyDNGP31Wg6izasLUnSEa4AXTeHhFJ8uMCwBstFMeCAaEzciDWz13QnKemgRhVQxTpWJL",
  "key17": "4yddHQXmzV6b48fdZDLma3xJVnfgsQfA5U6s5yw6ebcyJeQZaqRNzUjFePPNAJCthJS3f7yCYNFPmwqkheQ6pa3r",
  "key18": "5EkvwDrJkGG3v94jgK4w9ukUbW1h7WtJMzpxsR8xGAxh6HmDrv23tvFYLkJQRPPZ7onePPSVb5hQPrajnHtqSbBe",
  "key19": "3FqXsH4fpCbQU2jjvnu79ioZNvCdpxp6FKG3CjhbBWVYvMcXrkrxJL5D65t5zaKGFrx7Xq2nf1r3sES9GDzLKDfT",
  "key20": "vFKxJ99bxDQvvs5KjgVXzQruEDZGJMx1dHGfmS56MtdHHYUakWUThFWqnV2UkucZPAnixhxmuGjJJyMgwZPAYzK",
  "key21": "2MEpdhquyKGTU8v2aWr6J1JefgAVW2dfqmNrDESKu4Ctg7as8Jb8DiVNANnh3SVRagXA8onKuNqbmUfzwQbhPM7y",
  "key22": "yyhiLGxnjHSremzBhs8H5eknKmUAsUCGzSzT8LgzBRmurziUxfEGphKoZVdRu8xm5xoyMr3VmQcSW4ED96nvr3F",
  "key23": "4RFJh8n4yoPeLnG1EJrppA5SFRF5BthQzAGLfJHX1NnaLeYHi2cRdzgBtQG463TTG9gBbRipiHzsP9cJsMhYYzFR",
  "key24": "Nn1PhUAZSGr5gSYANQczk997ZWfAwEvWb3MjCqD7WyNbZnmxt3KtGEQxmXMENV22btQNJJf5HpoaPoCwetcsVHe",
  "key25": "42UEcZJScsbiRukroJ5NLJYFPm6Ag9nnobpKNwgks5Tqgiv1kq5ZozXeqa9y6vWn7VqKWNpCFwsnGktucAfPYzXA",
  "key26": "5MFxKBiCbUKPtr7Vx5QpDn4TyHbex3vWM9HfUspLzm8a3YWgM1EnQa3kXdNnSYVqaVBpXpojUYSwHNb1CbRtcPjV",
  "key27": "5sHerSb2Tgv5GjdkRvLYrAFM8ZczzdDtmTNXxELA859E9bPik8posHJ7xWWbxrpAcJ99hNaJ6oXfzxcAZ1gkRqRu",
  "key28": "jwxvot7rhSuf5yegBj4TogCGKhxkfCiAEhtZG3y4yCzModRR2XLVEwcHzK4knsiSVMLzYfhLBD22C6ohQvcDuXE",
  "key29": "Z3ssvcPgFE9GsUDq1qihnVJkZcaaSopaFPxn1L7qsaPqn31EVrhgHYmvAmKbhQ2jz9Ykg59XMTdF5Toi6byZJcQ",
  "key30": "2PDYKkSMLJGGarXSPK64mkGFMA1soyiRu3AuomUK3VHjdFDJjbvGttkenmZQKyTGJAN5HERKpnxABJCShZRj5BTf",
  "key31": "5agXvF1xrhhKExHFojQPrNk5Y2TqzygmZue6aqARZgYqSvtCHdViJ6ir5ZSTbxA1rVbC7ZWdFQY2kSDkXWKLm2Nx",
  "key32": "44Dwc2JJTGNsXh9LiTWFwuHL8BG5PXERZLf7rKaXwr9b5dpQ2viL96cDV3U5hiSQUwZ1Qf8HmppwaLp8spUVZuc9",
  "key33": "4paTNvfuNVagr1BUoNNQ1yLs5RQg2Bwc9Va4HJmBiF7FVBsWcVsHqvKabMDAN3nCNsUGUdHSiDq1HLVnPgSpKenF",
  "key34": "5HU1nC43QEhZyq6N18sbnEBNa9qeKtrYHev9Xwb4vxgA7WkH9pqQQqcZ29QpBMT1Nx74E7i6qcexStLCoBTAxQVy",
  "key35": "5EGC3RpPLwaTcdeae3HiJh1AEaM7kVBYnctwfRayZm7a9x852MMzV2FTR1pjKqKZBZtyFVoXXY6Jve491CDeTzQT",
  "key36": "3gJEjSM7h9kaWHjukYEUcZ8GGDkz8wDtQKVm8RpReG1XBsn2rThBXpgB73Za5ygxjkCbGqqYZ3JqCDfgj9MyRsKg",
  "key37": "39eg98sBqAaLQUtcjGpQzADExPdatv1e5rYJRVTHqQ1o6JDTrAFaqXV7eJorxz9ZFPKQYafPpc4FsdQ4qpHP6ma8",
  "key38": "3Jf9j3FqXs3t7Lc3SEDpb31hGt2dNQ27qny4MHghKpFFLXUeYcnJPDZPAFF5o8GeUGHjgRUN6tdj5UvPzSvH5art",
  "key39": "4buH7rghuoUw8wNKjF3dDt16jBfHEfGt1mY3mKyAUju6qguh3gQ9hAvpo7M5PmDJu9GdHSfBz99hMPaHmAH6GjH3",
  "key40": "dW97wiSuYYK4oyR2NzF3UGdwdneLa99mYSFzeJVHohg5xVW2YGga2aUtubZ8ebSHnHn8TzLq45yShyGrnyY5dgT",
  "key41": "5BF2oQDbS6ojoaJFizhpSdRn7G1GaKDxE5PohtbDWpYTKXjLhZpxxKBw4hU2msMNHM1GuTKQ8XRArnMubUQfxHdd",
  "key42": "44EmtfVuzaLkQK4ATrfkLuDMikH9EH9wxcQfwTX6ookXSxgaMp67obUnFkqjAdqN6uJ1FK8B5Mdhkaft6yU53dj6",
  "key43": "3keHWyVMvxU3VNuh3xJdhYuyEKzU8rZEFFEGangtACFHAjXSmQebwJRfCNaLbZ6UzpbXRfpXUSpfr47h7PCHqdbY",
  "key44": "3ChUhf4nekS7CuFDAuQPJHVgHMq7PLj7RmtmjYSKxvAYNBJecRCZ4WJSvUPJydjaHBtvP8hY7wRwMdKvrs57fqg9"
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
