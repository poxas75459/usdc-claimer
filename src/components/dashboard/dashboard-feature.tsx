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
    "JKYS4jCG7urQWQmhwrK59L7ZHmZKJdg6bwqQKtmVtR7mCSSyaPTZdxTxY3aidQcWicPVXxAE67Km9wRfEpiHNWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z8FjdJTsbSwyZZBHpYMbgKC5PNopQELTwPTZUEyJ5cVEGJeaBqYc59pXnsuF1nMcv5tN9V8GRhCR8GhcuULtHCo",
  "key1": "5eGYh9veC3YxkebBqzp4z2wAPXvEFkjHwp8HqkfssjgfMeCqPuoYdNteZqTXrymsTdjzGUBjuSEcasUcBG7zWdPX",
  "key2": "2bejk3X46CYgzcLZUhg5LFRqxSrUFP577iXFPNRdSXgQzBbVcSguRg54UFQBv6qJYsoRSPrB4iP1iP1W72sRhfWQ",
  "key3": "2MTH3gc4Tv2X67VJbaUmyjTZXLskW39YRxfEdbatybEh3us39oV4ZjDEPLVvmiakAY3ybNZgmEAJGyGMon8QyjcG",
  "key4": "4qXMxAFRHurVPtevjDrhgRotp6HjKHfzmqSKNyvGVh4L6Avqvn5UVDqf7nCCsAQhWtbh3d9hWTuL12cxcVcEMc2m",
  "key5": "2FybYjf3r1EmMGiTLy8qZNx5wA9MfDpSZfGXryo9G9JxXfeYM5PRpQ5CaBzKGeMjMC8gZW8PH1VVvhPZrLcWjDVj",
  "key6": "2yxTfnW7mzLBohSDW4uJw8b5F2Qx7UzwjSzJ7yhj8Pg2bV8a38yH63M9jwevGNNDj8njLiMJ77TBmbMXkAdFGi2G",
  "key7": "2KNnBDUjhpVP8GBboKX2XWZbAB6BWMGZeF1TwFoNzWWQibJ8WqWqcuByJXpRJWWSjD66WFY1ZKH175JSGdsVXpGe",
  "key8": "3KVQq1NTZGPScXC9br9jmrbuPvkygADYxNZjtRngTTdvLEGgwP4PyWxeqaWhCmZKx9PUPgTyKmVdgMyBy1danJrz",
  "key9": "3KjbtYsVQgYqSv9AkQXFHrf78cbwN2EnJ4BdrbSFh7F592TUwfChjx3VuWD4S2rcqnEuQCUhH8oaNgTQmxaviDAV",
  "key10": "YjqSQFejpG59ZtpkXqGxgc98fNMs3QGBGWd4QheQUsvntLVnFKjK3MExtfjVSbjWVWLCWkcHG23aCF5qZ7a6w3C",
  "key11": "wZYT9mmX72EpKc2iefcGPbcY2zsAXvWZduGsuz5gPVfRhW5YE6T2epNS8WdAx8KjKPLRMPZh8xGg7aGYtJXRA4t",
  "key12": "4YVRxMEqtrwr6urCPFj83hvm8uiyC2qfjGxdNJZ8d6gXrsszHsF2gWV5oS1iKRo9LnJ74mdHyKDDBT5W5n8sJEUP",
  "key13": "QqwqXDEgSooyLeGoJHtLc5yvC6gSmtxhnrucDpMdKLzBMb6Q8Z82xWEBpzc1LESmyhJxZ6KnMKx1WKVm6ctYWWy",
  "key14": "K4vucQ9TdrVx1xqpZsmR8jVYz1EN6xqjAvfv624Ah43KkWxfu9f7x9YoKGgWKcYouGhRBzJCMyYhVu3YwQZTqrb",
  "key15": "NP4EZTssE6o9We5YBrC54JezG2BtJ6N5HzDrt4LvdcrejBrRjHGtaAQdhvzd2QcsC8fcjjtQ3JBzEHHjUhgBNMJ",
  "key16": "2AjJs8TfZ3rjeyHL614JBHXpvxJPFr3quTN1zDnfgMNWfvLfSAPPZWPJ3HzKcpXLdpGBdt5ytQKwEToZ4f9mz2GW",
  "key17": "2wQTNiTYeeFx5Ff1Zdy1Yr2gBC9VxiGfJqSEjS2dCu9Fa6vzfAxcUY51DjqTYF5Cpg5HwHZwh1n7KtYDpDsd8iQK",
  "key18": "3LkWnjfm2yXUERddqUb6WsnyTjcwXi6X7Ed1xmYUAUMXBpwZGBqNPBgemjaUKa9Xpnvqmm6Kw4BNTGM54sGWTF3Q",
  "key19": "5rCp3jdHRTNUqdrVC9nvvX4cCw1J4bg1Vx7vDn5RFvZBHoXuBsFBE2Z1sLofFhnywjafkBVWzhna3UuZitjYLYED",
  "key20": "5XE3HXGn2CGwKGtXJgHuHiq7hxPMT2etnwXt7AAMxEDJJeioBMnGev8Zc9N75jt9ZGeR4tzPorzKJANexYLBLtq2",
  "key21": "9eVTWeWmESTwYPEQZMoGuKARwhqQe5f2aqRb8EnQTVtVtRJXG3AQia1WqBnxuhVMvyW6GniMpYpRP9hne25qP9K",
  "key22": "3AQRLfPeDzKwPs275BDxtFPRMmJ4tvpxzrXPpwEtK4jx2ck3A1c1e9HELjKorMeRaMGfHa6HShPT2Xx8HEE6qzq3",
  "key23": "5U9P8HikYzFhK1yX3dAqXMfArd7Aqz1ZY7Ty7wNwRon1skzYA9D7Go58EfDg1jU32SWqdK4zb9Sckbmuqroxfh1e",
  "key24": "4SVLqEacdgdjzxFZDohxPZ6bD2iCCNGnthkdt1ZdfdeMic34DsPyR2DUFWfj4jkHdYdUJqoBjSNnT8wZ6mR2A6Z3",
  "key25": "5iYtdrB3Tw5t6wVqSmBuk11dMXTVtAT3hdFhfMpQTGwaZVipJrKHGYoasESFrw4tFu779ZFjToQagU8eyLyD21JP",
  "key26": "72Qpt4cBFEnQBw9YtjZvufLQ9dJTBV5B11FyYm3faQLcrCfhoDVBYevAvcL93SM8YF4NLGNkWjqRDP76sE41ifC",
  "key27": "2y6ZVjVDJ9YNaScn7TPEHLJcp1NVWBBNSNwZbugvw9BtWB3wCScomB8ufvzyFDXovSNzqKSbvXbiMx91Yu4NcHYC",
  "key28": "5rkPhY1UspLU8juHvpkaVR3cAo4sGaJtPfSLcCNGrKtSxdBrRnVSWGpaRiajXfZ52Lj9vZH9Hs7A5sM54ZjhSrya",
  "key29": "4f42nowk6b7SnDrxjgv9fyDe6bQmAoH5SjLS9oZidNe73BDGARfL5YHhTbtccMmWaQjSd1iwnZfdRd2hRfErt3Af",
  "key30": "2W79hwXkt3TVk3YSywMHDhPLoDpCg8xYSXGNXNJzcrWmPctgr2H4A5d4REgxTihCAoqgSn4jp6UP7UCGerpre22",
  "key31": "5Vmr3NW98jFePgaya8vJVYdx6zbCUTqTw4BxkfNho16RgEstZVJ9ETiUVSp2AGvwPCe75qu7rjE1dkAr8cgFzgTf",
  "key32": "42o3wb8nFmUqFf2yK7Evm9RNEf6xWv24c8fz3gBqriZ8hgRSwdfkrtThRmryU1hvTGEpwgJCTfAmz37Bn5YTyCwe",
  "key33": "3cMExatzqtvge3Te24AJ1qpgNu2hfQ9zCQ7Q1pqhTpxP4ojKnggUsCrKbEn7EHujwX1VzWYw26v6tkQYKXSWeRwN",
  "key34": "5qkroj5Xj5tZyYNZAkeK9bVLZUiefkEMiamfLX3o92saxAnzUWVRozUefHyKEtZP9xC29CdxxKM8cWkvk8xkta25",
  "key35": "4MsCMbfFHRCNUswHTCRucNb7apsCvVeAi3hUwPZSBscCPgFTh4xZ6aX4Q1Nb95nzZvZRafhCoht79FxQzfvjWEKW",
  "key36": "UQAAgjbHFN7UVYKratDzAyiYPmwQRJRBkS7m3snzWDqWvFNtKc7EATFAtcuqeX9jipZavzNU7UZyU1FA4qAwG6p",
  "key37": "3p5P2GwNyKrKBM8t22DxWYbmiEmgArokhTG8z4RrStUaS88fvHEkmLbabhHxcZSakLBbT7UqAhHjYykZ6x454hZo",
  "key38": "4oot68m8xsFWL6ThrmgaaSq1jxUrQngwNfwiNFo6XoywSpEmG7T6HJtq1UGximUt1qwcENrsak6ZAYGHB4uxK5cu",
  "key39": "dR7aW5Ljv8Fv2Eq2UFfQLqgp6t7FXYZ2UkwEeB58Wft6pmDSLKCSxXJh49GX53UFr5KzRNYF2HiXhhRCszHc3Ft",
  "key40": "33FuziDhYRQjRhBFGNW5WvKkzEqQFBfmZPF49nhPjqrFM2jE6YU3Be3hdQy9MLESc4Mtz8u3jyCcb4mY3nWrvPzy",
  "key41": "iAuTBvbpA2h7HooTAU6HDJDhmPvtuGMWNJ5CxPtxjA5Nyu1jsgYYxe4uevrX3fjFdJgHnT8VL8usjdXaXAtF72G",
  "key42": "4mmsvSFLTm4RbYHHnn8fGrEokMYjjKKvUd31PPXftnHvr1EVUdtHsj9dkXXzobvqB9nspB1AhGVS6HmNvfPo9iMB",
  "key43": "4KNdmAhixqfXyA5yZhyWE6hTSNhQug8tBP9yGyTAWhjs36PSMN8iZT7vQYveGt13DpX5coRL2nBvkQa7g9viPe3",
  "key44": "5imYZKdGX5KtLpYf3jy2L8MD9noJYSB7rJ3GyG1qQUYXRYrmXwDGP3dmrSwPqUTohtHBBr5fTw3mQEg8QAogD4dX",
  "key45": "67QuZPhNg67LsiXdhoisqm5HdKBD127GfqX7v7BQaNPrj1guUXRbMn1R2jgJCcGNHbPeSj5rFc97wd4vzfXq3nMo",
  "key46": "4sjXS1uaxXzBpvxkChAQdtcMeStXa79e3Kkbcj5ooGB6MS6jqdCCEKtbfa7TNeuS7GF7CB6ahqYjcwNAiN7g9mD5",
  "key47": "2evsCWnoPT5xExFP3NZs3uxJnpx7dXTi2hxmro1cfmQMVJsEFwty4yp7aTX6cVLfetnHHojatcyZpJbL4hEZXeH8",
  "key48": "yqRgCoKnkvbvFeMCmGMBJNwZ9WGXpWLjB14H5m4Xp11ry2wE1jSCyUrojaurcrsnVorsUSfxEDLmBre5onneknW",
  "key49": "3HNnVwDpppE4UN6K6FrXuEPkVnhuVxQhQ9UpUdSPUAtw7YVP7ZmD46Qu8ZgbRGrwVmvV6zpmGJ8WNgRi2PNKYv3u"
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
