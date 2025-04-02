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
    "4hgUrGX5tzLSZ7e2o1EDQ2uTZEUW95mL5AxGpAjkPwvrUUgVsSRfL4AXsnkjG43HSZXrrz5dQPQ1f8w9ht4J6YFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ehTpu1EtH4wsF7xcZtwVPyeJvcUBDnRiWYYPgfuNVcf9M4RnpXgtBpghD5EA4MTgkd28BDF4LfTWRxqeX35w5Ly",
  "key1": "2xUXKqkrsEy3SDHshaGva7HHzwPzBUEEpp4Y6gcLZMUiqJ6rXPY8DHyCD7CHMyMRenfCVjZUETFUt1B63E2FVu4d",
  "key2": "3LELovRPF4utXHhRvep56uKkN5vfRWHPNHruaWne81H3YZg4RzB2wXuN3FXW9R6CZuHH5izJPBtGqAJKFRTgXJxk",
  "key3": "4FKyUp6LZujosE2bRoCs2QqTtEtynCHvYqc2LfVCEdWwwPvg3RTxR54VnbXJxf1aMW2L71f65r6mffhtKLoysdQo",
  "key4": "3JmcTattFXPyKwiXuHdgG1sLWckEMYiZGBrsmHEDrxnAsvQN2JhXP8ptavbvQwmEyLBN8BcKWWq9uuqYoTwK4PtW",
  "key5": "3EyPFA15Qk6pRnMRgygBqx7ozvFRgrTrnvkvrGRyNDjRHAyoFTqKTJpQzNSTeoTokN5Mzy9vvM8wp6gWJBzTid36",
  "key6": "4rJJfhJTTrgeVj9cuQhujpoN1h4BGiz1iZui7XNqT5d7kg1r4NEZwV31ywEM9fXH5aWQgunBQZKwobnA8iQpJCLb",
  "key7": "2dtbC6Nfc4QBEDRTbeA1q2JXRCZxqpUPhY3ZC5eXmEjzKi618F8FkfV79WsV4sz4nw4T6kaxiuLbzHHy7HRcE6D",
  "key8": "8AxkURLqvZSgwmMx7GS46UuwcdGEhbWggtX2kMuohPMbwbdGi9v2sbZsBgtvVTrZ3sLFLGRfAWZMrsRg785b93q",
  "key9": "5gtVVAxH2vJJdH6n6mNzFkgC9hYbWSnpcXy6vQvkZUHJ7z5q2gfvPPpZ3ywD5A1tmRgEYc41YCZtDZNwY6NXJECS",
  "key10": "3fCFStzvjVtDFgMxMpbAXHPwmFKvjtj7Nr8gFkdBTTD6xSeeScCaAxrfaSP74GEAvzfXtqS28QU3cSminwxcFPr",
  "key11": "3pmoNJ8aAHLJvUqVnAyMAccSGiVspaWLAQ33zK5zmTLnViU3yhp2FnNE7AJjhd3pBGkRoAjPeyrT9ZGgvF5DWcin",
  "key12": "32u95RGG4KN5QwoqTYGyP788N9wCaE6ni14vJr2TnVoWiStE7Enq9X8Wy4yYuxLz3ETgj4TStZrFzJFECECVfK66",
  "key13": "5XPmsypq7j1LsYFf8wffUJornVfrz2QEtfdskxYjJckg2VeyH4MSbkpHQaVs5VJQt9g2V4JRHPTJWMtCYhdZEAQs",
  "key14": "5UqmtXw4vAFctKZroA4sC2NgiTsj9KHhyyotLw8uFShL8KSFEcBoTJWU529px5pJkmJBqypExCT8uQHz3ALazNpk",
  "key15": "3xNkFq6Afv7wrNs4kGXeE1XPd2abWMfCU1J1wTXetUdghfUAnNs1kAU2X4CTTAn3KZchDHa6ooR5RCbuZq6NB72H",
  "key16": "379kugqBAvnbnh2g3LoK1cBXaQEqb5LMeFMnGvfRnqDyHGrtEVJScYajCqxtAWUogAE9Pmf6Nv4BKNxyBSKnNBKK",
  "key17": "2NxvWWFPn2BEsX9AP5JAfmeEcdyNg7Seip8chBCNTR7nJLeuCxfiJjwGE3Wzrdxgwv1w7ba9BsaT81izbJTE8993",
  "key18": "5Gw7X8JciWmRY6VHNdED9x8EFcbFxBLdjAkBfNetUda1KMhoxARUm92FPkjvnyv4htPBANdaFxNhnzYBCnxfPmXQ",
  "key19": "272BP9MAERJ7uoFcGuoiPbuRSirgV6X6JHQs8PCAkjgLuCNzLb8qKGSHt6ECdYRQrowjE6kRZmgruLkKMFvGtEr2",
  "key20": "3KarvUoT7Da6FUyptM7nzjE1jTwXGWYu2ddZPUxyBQ8WEAzKoSCzhs6aLb86z3Uubnpv2CrK9LmebiJhgichDGYn",
  "key21": "621PgLLF437dLMzKSUsuhs3mVtfZoKdKyToNgyvx2z1Gz8Xvqpm534CagFEDELyhyFTRrWspoTuZSv8yVmx898gm",
  "key22": "3LSaUtL3WbNBikHKouq96mHYaDAYgNtSDVxMN6Mbrv6H5UkxzcHby4rag7cecaTq6kgt7syBYuce2XqxN7WKcShV",
  "key23": "3dMsNXkQrQzzPgmsoDf3BVrFmxasKBR4z2E1oNH5BGeBtTHmN1Kp24nxgfJDvYXVz5o8iUezSwR2UWRMA4XsZt9D",
  "key24": "5bRmGjfXSR3NxtKGUfr4Snsc1KyHtwNt2hWLqy3UqNaWyjeP75RXi5THmTeqAj5UpG2hCDtrn3197BUgyKwX6Cc1",
  "key25": "288W3kmZ5XPjSZf1JNQJiWqSPfAFeyC684amGmYSu4x7udw32NPvhSBo7e5eWKHyDoUZPqHvtopimi8t2QY5qudz",
  "key26": "a1og6dDmktdEWPyatpEs1iRMGPUL2UiwZn9J21GXFGeNBotW978RUx25N4H5fbVprD6DXBJrCAGMAcNk3WY8qUm",
  "key27": "eEvSf7Me7VsrNuvA9gu9ZrZ1hac6p1GS29qP5nSWpqwbhjcbtumMib7K3bx2bkEZU3NVaGKttrSpNJ4X5CySoaS",
  "key28": "p8cER76fbdb2oDVrTbhJvS5b8rL2SpLXGLGd9pvA14JNMHoRVeoDTLTr5mVP4qhq1VHgh962r9wr7WVsyw2R2vT",
  "key29": "4aWseRKY6JhPyk4dZmzk3zhA3muJ7xRusEe9aryTnqRvyRJMQj1hcX8rha2Qr9CFefCu3ojCma5Tw5fe6Ljxmx9p",
  "key30": "vC62ss7kAy9cF2SGgNSRDz3doChA2mbxwf5DFgJtX8fM9mcSQCmBHKKeMvgusxQ6bDXYmnSBU3TUbErPcpS74nF",
  "key31": "nFskMrcKEeQqushQkjzWH2R9NVWGk2TqPLWKKYgLTmek48M9mWmpq5JFZfDcxKJdYkkiXkExX7yeukLSGm2vwJJ",
  "key32": "24ftXPfw79Wepd2J4MpAAYQfqNTrz6LCW52asVTxgQV7H7czq11o4QLfFUDvJwDc7QronDbvunxE6cyjSmbnASZ3",
  "key33": "35ennJ1yunD4DhnW8d6E49TubNnqRxPDDH496tyqPmFH1QSN3zCwvGMReyJoUzJ3KfG5AumRgfe9xvLZALcayJhi",
  "key34": "2NDrbdTzcvrMEKWBZyTyVTmLiN6QX2U77Q2BRGsX9CatNKvw3s8N1WgX9c7AHQ9sGFJJnQr5hZpHh6NMj9gx2ph6",
  "key35": "3uFWKuPuecsgNGu8BhksHowjr9KSrenXDMgQYeTKepMAkQ49Mr84beGmyyjqzDjzLWGbtuPqZLHMT7KLK8psF5H3",
  "key36": "4TPvdWsstQHCY238XH5Cj2LKN5qQXzMCYii78HMX1iwVWi5ux4TnjibW6jDPATjoeoNRDfWpqB7SWHqyNhAWzsmC",
  "key37": "4asXn7tvf5fcwiMNh3gQn5dUEHPdVgaUADq2MzDZ4r9f7nETpf2Qg1maAngSLCepTwMWFqvQKN2f9VqTGeSfqxBX",
  "key38": "5M5x57PkgnVt1GTH3bN9vhLPNzQe6pZ435zW3vDwmUPnWVtKJm6Nfqauhy4hBcaTQYDEq81HhsjXgqWgVUAsQoAp",
  "key39": "WGEiPcywUf8F673deHTNZ3BfSU9fSFmjLmSHbPz2Gn2gmai33nto8yDhoHXuYuya4FBBwC6JV7arVATgguwng8c",
  "key40": "5btZByQAQyvJqeWVokG5A7Ez4noPxyRSj1urJAhp9KLor6NTbPFVXLobu2AeCTDnpg9mWpttwzWM9d4t2SLv5fFC"
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
