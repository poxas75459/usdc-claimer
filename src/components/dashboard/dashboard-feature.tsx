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
    "4LEdHhkWe1hJPyvpVYwoyewSu9TPB6aWjJnuYkeKN2rLSzamwoJHKXASeFDg8CEU3JTTnqtWMGvMD2KKCyBKkdcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NPPfZL69kyqdNN7u38EVfCdfQ3BVdqrcb5CcVuUvjXqqWVYqLtkk5NpMs58s1QwbHPVPnPGcTHe9CV5hV22pkk6",
  "key1": "5boWHHF1Qxjw2L6hdTrmfeVuCJ3nUCgbmvs7RAa9eGEH8AZvd4ff5uVXKygQpQX5y7oit5Z3TeKLXqVFyKpqXenh",
  "key2": "MAGpwGQQ8rAjKFZjUFaPm3VTfVk7oE1XbvEFXCzJZermCyXHTeKronqNsE4qK9iYCR9Mx1HrDiiWB5uutEt2i9v",
  "key3": "2JEncnwwzLJFzDYzrKtggpDPfRm1vZXECJgGzpUcYxRKfPmvwWYpPj1cRmZTFf8ix3Mr4ghMi878hsetmB5B9nBN",
  "key4": "5ikzPpbySL6PsbDgwkBxC4VWznLsYV9j7nyL2P4LG5J1ixnzyNLHXvSumeC82SgGfTdnGDj7qjBDFccWyL764WYr",
  "key5": "2tszK9cx64di5czYU3zpUkfU9pJLpyzg4wJsZNVqbuV2tzjKRPLmvGX4gTSRoeKn6zqvhrbMRbZxvHF4TbservBF",
  "key6": "2539yG7bgdyQxfPXfxkgdr1ELmWefX5PZJ1cyGWsfqEFz51z7YiFWEQqksxn3LB6A5mbvk9FsZH3vN7CCnSPmbkM",
  "key7": "3FCBoMZJsRaJ9sXctAgpLT7jAPNiXWYHVwTKTNQoNP9NsKx5z33SWvMbP9AGc5rb2dFcDryvqX6vCVydS8J7WMku",
  "key8": "5RQxgVuicqaHCvngcLohT1LfFz9tEicbF4UVBFi1PZxRHd2hQpbCUR2ufw46hY17t2rksnDhDoWkEGU1DPuAvakY",
  "key9": "4WWfYvc3L3NhGDYGNtXwjuPVayNpyescrkAMzzokXFY3o8LbREg6k9EgAiPuLj5egKQu6cbAsJCokDmpt8siw3wn",
  "key10": "QpyHWXJi6s6KiQcic9xK7kqxCwC1XgXQ6t5rGyizF9REnUozDweNZWj8mpzzgGVaXM7dmdPjypRLEDStdikSQ8f",
  "key11": "5YoZgfwuNcoPBuFEXJiJ1dC2hiGRqv1DyyQYzCQN95kYjNseftNfdrxpJsRJZGQusjvqfbBuXkZ5niLZ1QcZam6t",
  "key12": "iBJDh9f9ESAxgFFDStSPLCYVewHcd3sDu4ofZosKUx8pQZhkRzaqCsWzFuuwiEkFh7yToETsBBikjecE9nabhGT",
  "key13": "3Lbdc8PKpNhiu7FSRqhRDnEPnYnNhvN2rpNYRcrZQFgFgtedGxpa7qzFemwXbVzDZBWruW447DSWUMA38g5Se9Ec",
  "key14": "25QE9eCFtmcQGAe2ZNLBo5qG1CP4ejpRoGPZWbDpMhCX8EMdHc3pAEeTqPa8LeGHEmoA8fTnrKQSanQa62jqXhzQ",
  "key15": "3s6MCunJD8WsLbViBtAD5ViMQq1uz64dipDPWGmjkdiZNUeJAGuMVBRRgyPJQLdWCptBZatGFyJ1HCF5WQH2sxDG",
  "key16": "3fKyvpk73gGfgpQdKuwyvRBSNcf5DCv3mtXuRUBoKpKe13nWvA98EehZsUoBBJ3NeqJgY5WdD5Jxntod2Q9Vw19",
  "key17": "5JG3QU1nJ727Yw8m626kzJAfdnuSfa95gnNvtYUPCxQutJ4beG672Fj7QN4uHjeQ8t6N8ueEJCd6ob62ahkzBRzd",
  "key18": "7pBA7oW3XKEG9ZKQ8xvE3MmPFJhSoTdtuvAG4fmedVaPwyi6P465XkpU2ZkjgjZSzfniG8ZrBGCtt3S25ycA3Rv",
  "key19": "3RQCVZ26necnjfJxLnApKnxhHKAGVBnPVioMStCukAVE8uMWE1eQZQUZv8PjisQr5AEZiJnzSqw71snGZvyds4gs",
  "key20": "4EANksVWe9zvwGjVe3b84MtZdrb5GKgAYcCsFhkeUvprVy1NPne79HCNcTLt5cokQZZqsB2Q1RrU6FtmWPnykW6s",
  "key21": "gKFnhXGYmrPayRajgnZFmYWDiL2C6LkiCm7Wq5m5R42rFKewkd6mu5YpZjJURXqdbPHuwAaivk4ZXgSZRuxFLTJ",
  "key22": "5CtP8Gq8rwSNGK27NzNJUWj7L1JHsKAb8UJhBkpg89vQdM8visS8PeQPEWXqQBvR5KhBqQJ7S6oDsAnygy928ow1",
  "key23": "3d1Hf5C5n1epu2Ayshm6UhtknG1hxuQqTyYWXMv3rLUEB6zVpGLmDYcJRbz9pZdD55CVczWQHqpyHePSzgnb82P2",
  "key24": "4aMxyyQYsPtYKU21VEHfZsfNqavbmqpzwp1efu57VwE3dst4yibooZiGQMXaBoG1xCFX611fY94m1drSb7cb3Tmu",
  "key25": "stXoT46VqUzuWXecFQgeL6kFxFeLvveUTUyt4DWqL69E9UVh4G1qK8zMMAhovbKAVMUmgEDzMxWeginWhmrmdk6",
  "key26": "2KK26BR4o6cxJoKPNunnFBsZpFGVzWGmYvFQMmZaTCqYVfregWeCzrds8CSXYReNiFpEFqGjE9bT1yqyQLorjhHW",
  "key27": "4WVxnq1BDeDnJPwntTAe3xHYcfFHjWGvVTvJTBDrXkMugNatVCszx7AkKnW6qdReERoWU14j1GWUunVxL7ysv52E",
  "key28": "57hvUVzZSUy1St162mhzZwBP3UannZAumWYegoPDz6idQZRFyB7UWpnf9c23sj21PJ5uYizy5DBAHy1ybszFt9oN",
  "key29": "41PAbvC8ECuvi2AbAk4Uzs2SXs6bapAWweooy2X4PqnhXsK8MnUWVZ2Gq2qCFAGHLVTftMdRdtDCfcVSkq3Lj3NT",
  "key30": "3jKK9KiXFuckiSNR3Jw87sxoLiQzkW3SuQa6kUcLAeMi3nVFfFWroESab38Bs6gC4GZgaweQLg8BDKgRdp4FkMG1",
  "key31": "3RUGJpzLpZt5pv9gf2Yp4mj8V5JWkQsEMZKZZuVh8Rhp5W1fTAZ1y3kg4mK6WiKkpDTC1V4aqMRz4aNPXZNYTyTK",
  "key32": "2FumKd5BSnNnb6KQ1yL75mD7bDTSnUHV6LCpXuKvn9ZrPwi6cwuQWH86vXFc5HM4EQhViMWMp1tdRvJfM8qeEeiq",
  "key33": "2UoyiFhQxLvtvVg6miGpGdNkt372rTVu2aHYwS836fpyWtXjgCzAd9zju3685ihJNJCcgEcAeaWgriP35wq34f4c",
  "key34": "5ePTby64vTsGZuLnHmy8qAoPX1vGMLLri8mNUgze24RG93tZiEQ4uqpX26xL9j8mEDUqxTzBmzxnKPKAUi1x1ji2",
  "key35": "2UFoHv82aYQoYk8TJHHWCip3DndVAkoYyZCryKyxZDMWysh5wJFHvYAgRWYdbvofdMUVxQt9kVxVtTPiZpMYVSp2",
  "key36": "2TGP2QF8iUTBjJGXgNTgZNDqxEF2WidbBAopFisvV5vDu9ptexXdQRwxc7BQ1CqpVKnfxHHbXvWaqEDVK7Pha2Eu",
  "key37": "MF7oCPprTsHa5E47oFGyhDkDF12dQWfSsfXyuK1dZAEJvJ7vVkJTfa3u61trDmhZJhdiGEvnWregAKFnydX5F37",
  "key38": "NzvJxtdsWFDDJneALL3MwJeshdNUrrosEpcNFbRznqpUi7XBTtfxuFLsCCNUbNbC3wY5sVdtadXrBQvgeX4wYtr",
  "key39": "5YuoLy4rapm4xmQVftRKuAwRCdyahjpuz5A8qSV7mHmEP8w1uTR8LxQ4VshnypgvSYS7kLMsCyKtQYJo3hkuFZKZ",
  "key40": "38d1tHjGbteSuCdBsQg9JtxeyYhrFe8DtRsm64syFsL4bxwgQMPJG5a3TUmnceSyzB3bM46atu9T8dLvbWszFXnq",
  "key41": "RSNSnFuh2Yz4bpHbrcUcHZnn16oSvaganu7dj48RkLvAXbfaXDsAS7fhWihAKZL4mUcqXbxC82XadsfKVJcbvFy",
  "key42": "3pCtUXPRRTaH1dFebUL7Pptr8q2Gy3xsMKsQvPL7n7Ln4T4uhALYDj8GSnKmpetnBVvN3pHDoyLQovSc9qAVKc4m",
  "key43": "3cY7DJToBob4fKfkJE74fk3qa4eox1mg7a8snrFQVkPkxjZnp4Q4guDaUZ2CcnmBubLkK3snCSSkwDV1dLmKRiuv",
  "key44": "3eq1XDxBRXeqzTsgBaJozQKr2rZpHWHG5TSEgp8ahWHqJPC94TNALHHzbiwejw7xTSnDUBZ7H3S47s9VvFQVYiQb",
  "key45": "37PkeWx3M98fKU2h7zPVUkRhLQzMKbxaeTTdicid6QdDdFowkFwADGBxcLeKeNeR48pLYYQcH47kwkWNHsyEHNzE",
  "key46": "3vUzSRuaCTg3VZCC8B5W9zt4rYX5HodZtN45JhQybiqMTPTJdWgfsP5K2EdaXygG9SuK4SdJDXsL8uokTkXWUyUi",
  "key47": "5oaHEaUKtC5uF7uBqLDPkd9qmfRsArorLsKTiECGPbytEk9DohuskqPFG26Ycw1dj5fFHNB42Sw2eNspUhLK4bpt",
  "key48": "28YDycbTYbaggSbMLMm4YjoxjmgckBjToypyvYCAvYjvGUF7eCckCSb4hdy3EQepmyXdh9TSUzV57UnzjZAGqPMg",
  "key49": "vCxQikKkwzfP2WGhhouxsf7gVdU475RNG8eHrKfBJcVg1b6HADiT8z1H9qwazpKiwtRc93yeUbyDwJu7n9HEZWd"
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
