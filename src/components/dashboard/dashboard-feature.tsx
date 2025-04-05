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
    "4JzxVgzCkTp5HHANLd9MzbafgukvRKHRrkSJP3zUB6KQu7gB22cbbwwNG1PzoS5rMFtAfuu2JFH3kwfk9cEjGHhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56TpBdSzQQBvYt9LTFe7jL3w6b4csuG2TYBdta28LLoXN2wJaHU4SWYysruL79HVsn3NdGXDu1mH8XcoETNNDDXG",
  "key1": "3a2sK4tLcQCwF8DxSWmap3w6T7iVNzAzsmojd2bVbRyugFLXAkW55Sd2shsyrPKsfaEyCianrNUCK4zKJ66joYze",
  "key2": "65WDamW7xpbSqE7pzRKKFKemkcRXWcpGRsnrHs6ac2jXcZvnyiES9EheDeB6BBu5gpYPd6yPpev4xUiUaAgJVjuw",
  "key3": "5s3hMQhBdqz8jHrQewhbNsxLngoxWRf3m4kFhiAzg2P31cZhoP2mEEBZHS9fwKncV3i1mYdo45qBemFSbCowM4bR",
  "key4": "sFgXq5STV3TeFziB3574ucky9B1dtF4VSZbUkoLPPK8BkxZBgtvRbc8nt5uXriTXW2zPr6vpsooHHc2RAvsn4Ym",
  "key5": "58j4dJbkBRqrMDFbdYmaLvVJ8aLEpCZ9EgybBF3gWfegHABW8x66GuKKC7jNSLy61si1RBmnJhhRe9JgfB7aohcN",
  "key6": "vGMfXLjF9ejh2yguQ232wUxdyUQZtdx7LAgR1kU3eY5MWiGF8vLHCLsWomrnhx5h3SirbCZnCK2aGH5nyKoc5ZR",
  "key7": "3hpj3Bqfu3RWkx6GLwpvFabCKuzM5UEbiAGygHwQV6TnJqHwVUL63ztDXPGDmv5MEpGedtm7ucGafYxPNta6qwmx",
  "key8": "wQubVJkC72nhPW5vTidp3b4yyrzzmANovfg4bHLjxjMHhXPzgRFAyNDtBkyZY4MNjVnPdt8HsekEHWHTKSkAknV",
  "key9": "5cfHbWEyksRS3MGg51GrMX3XZHTcA7HoF8p9FTeM6vyiT1fmUU8gwWTAnDfY7qMKc1wtU2RXrEtAciuX4utXvQoa",
  "key10": "4dsH8E6MjKqBZksnyoBXoEcrEp3ndCZgTJ99hTQhpZNWEwCz3vF7r187Yswyh11CAUpAGBTHcxcUgGWbCr1vQSPf",
  "key11": "4LAdssYU21qBE46EhNcoRp55Bu2p49pfhV1fh2MJSNgo5my5nhckWT5b6M5vFKmkyEdrLHLQRGfsz9z5JK7mqiQW",
  "key12": "2ZvFhC9FxFdDcU5PgZyxUbocivRsiFCfmgmQCwtngQJJr9EDZUmdFWCH6yjE897wC2NjkJYyWzqUwMX6dQ6rUv3N",
  "key13": "pxYnjRUhj1azuifDShKNB1XJFy9BiZvHnqQUAdfq2vetEFSAUosEk1dfCd5Rwq2a48Ve5NxLSZaiw42RRGCxGwY",
  "key14": "5K5Wu4DhV5V5fvgSoKZnbFzGjuezQJfKR9azjUR8qiC2HMrhMUPXdVSS5CE3FrKmZ5KJWSk8dhDHs7Zp7DJiqJU3",
  "key15": "5TLGj6TvyUXL3PUFYtd5L19pUPzkABmMf76NJY36Azbu3RDYBfvLtGykFJGvVewZWfj3fVGwSnteF75Nc9PPNfJy",
  "key16": "3n6PULtAM1T8J4NUXEkRBVEyCy1BiTpE9p2hd5uz6JLDfW8GHuCpZ77x6dXt1MqdewZv4qYYazGyPk8Tgrg5kaJo",
  "key17": "3A8TjjkEHye18KQJ2wGMRQzN5VAhJA9CpeSVJu5RzBvJf2r2Gyxr6uP51Jb7zqyefHd2NA1FrsUUhApkfxMWomfG",
  "key18": "4b2MwiJfFjT3MzCiNRXym7EUaxMP9NHzHDrgciV5pB9aBQfBs52UHwsU4w7s75FuLV5P269Kykec6rcKsNispY4c",
  "key19": "4a8BGhXeU1AqtGjLkHnkTqqJer3hdrmSjZKrqX4KU8W86Cfsk3DMd4LvE2P3M59uLp6SYPEEdVfGffmEmnZaUnQN",
  "key20": "3jji3JpFdxH3Kji7yZbD69ooc3EzVntNBx3ZHYBY38jTEUNTVXPfZfGH42tfFbx6FdZFZ7X8S1Uw86cdpHKXZZS7",
  "key21": "5XbCgnB6pRC1sLjM1wJULcxUYeWaN8FgucxcV7m1EZVw5tor9qaotVHrEhy8chW9SF7tWSXrveWyAsjamtbuu2C3",
  "key22": "5SZRt9BFvEVy9b3Ak2YfcyDQzC8d4RBJgK6TiaiUbA5qSBGaH64G4tcRZEa7o4NxrCwghd4K78mhCpaxpiooLiSz",
  "key23": "qVZA1vgorSpGY7w73mQu8X9zDroH8zBNEAzGJ1LSmtiQDFPgB3VF34dJtz2VrocbSfMj4EbkGAcCv3wdWvT6rYU",
  "key24": "3QQx3hHfabaHL6UocAV7udATcEKSiC8Rzsj3BvoB2gsN5Xph3yH6yv6bbCYxwcCfDZeNccGUmi1tZiLaFX9MEM9",
  "key25": "5DYYMdY4ufXU8v1CQTWQrgmhDydWuwei7Nxonh7L5iebB2X1B7obmbCigD2MaVE8dzKePcyAJxgjG9otHgbCnUXQ",
  "key26": "kkF7ESy3B7coxGmyN2Qk482FweVko2TUa4Q3Kt2XnUG6Ja45UDq7vTaNrz24DXWcwJdfLZpvdiVGCR6XGRqetj2",
  "key27": "F8fssmWyYdfnoMkJbG5hQoWo4XdKtwpsYGAGGJEi6BfWZW71tAvfj5xLEzW9VkLjPfby8vmAuo3uHN759qTmPrX",
  "key28": "2hUYs3UHUKRYXcLzAudEzNNgMwgGFBr5CdEBZctKhz1Fe64ZyghCuur1iuWYhYQSCBQUzGYKmWYm1571FBbwpomR",
  "key29": "4cHtdggvDgTCx5cc6qDXpxBkE6QtEkAjWGGKVNVwtAvpLwvPXVr54DXZKhhjNt9DQYJRRbRG7xpkyeuJLqNb15er",
  "key30": "2jMSQxtXvcS8s9pEedhxasKfrgNCJ9kLazwe4YJpTuAz8W9zuddYTXkZVjVb2y4u9NmJ6qrDR7N8R7JgEc3w6e3z",
  "key31": "5QdtS6kwJP4xKdZjPkvZmiYeMWH8muAbMByyDrAJ6a9GBokaq4hCP4x9PSoE2i9NMfkBhVVXoZRWFtvtWPcPWukG",
  "key32": "YAuSZ5A8PeBtLN732JuNkrYS3JUzKxbkFaRXKk5Ri84QTyLkeeUJPyLweENLT1XBMaTgym8yFu8syKNuTannYbT",
  "key33": "2HSg5UgxXqLRJMLcyDutMySYLJFHo9A1Le4vpos9WYq7F99GN6GgnvgwqAcGMQK5K1CY51cysdFRizcb5nDxuCCo",
  "key34": "2yMeU7nJqP91NnhdpWhJngtoMw9S5bR1RaP11H21zF1K5XdsbbPPnNxGGaaCq3TGzvBCzBFfoCbLiNaozcB27oy6",
  "key35": "4j8SWmqXWKbDmdPnQcQXkz6RYFqDLKeG3bJBH27qdEi981cUzVADWbzTzFoookhmvcwaZhQppfzDxn1RJjAUYDgJ",
  "key36": "4SHoA1jcidQhqKmXeePgRj6scyhvzHNTeGfLNbsvziKujdCDNwgWdkMndAeHe4tWAo9qy1bzzTyoW7LDiz659hQi",
  "key37": "5kdgrkFYVdha1AJWwcfY8dykDt1D5fYyPpPLL2ZoRAA2zYzkS8cDX84V2TxvES5u57E7LMJgKsXhuNHtQpsvpW1j",
  "key38": "4VjwEBTx96jcervtWhP24dsy7FfkNBYcnoZD6Tk1tyqLBQALNFhZU7PNfYC1P7QNwSUnD6bsGXorkB8NzyTWLJmp",
  "key39": "6ApqQBxFA4n3au3N6QDitnbirSFg8swHLNfyEti8BpShaBwiSFNjrKsYP2ReEVXDy1wVtmQjbdHMzWDgJaRehXg",
  "key40": "233Lg9PR5R7jyWya5hfHedhwFmYnYTjRf5uEuTr5qD4GJCbyFBNSNhANVC1BsxNLLqpUQ9tRPKDpnN9tEjCaVVgE",
  "key41": "2yibSNrityLPymyJKqKb6WS8vxfqMFPmtVj1gUpfhqr7kxuc3jugVcV9SpQiXsxxDbpCjixpsq6zmaN9kFj8kFzx",
  "key42": "67Y5Pp2xJVRSgjGfwm1L3CypLD4CeQ6MFAZqyo51mu9wbHugiGjpYJW9G5y7XC3f9nXQvKxmQz8yMneX4AdnEnV7",
  "key43": "qYPibB2XRMYkStaoyGwPNThnQ67JEAfeGaeZZdttxcnzzG413wBYZVwbZMDmsvnMT3cgTE9yHYHNqJ1ZTbvHKQt",
  "key44": "R2Zbruj3vUYZfMxLV34NkRchFXLXKtPqpeRiSrjoFMQaFzcrDkiAWkedUiyXZoZjZBXDDi1F3ftHK7Zc4oFkSTQ",
  "key45": "3VEBJsciFSuDKwahDJBzeGWYiF3uunDLDvwf8DD5HAWd4JqhEQE7BZTbYAhhXkKtn4yWuupmZnS2zeLcafpGiQJn",
  "key46": "3TvzesxAn5GG3JL3NgEZiWM5WbNcQXnRBBSSSrVxhAaVDR5er3NjQZGbLgATsqaSWCeoLwjyrzGncMMuTQL2Kn8r",
  "key47": "57tfRufUvxjT7KNwncAane8fsvKg3sF3DbR7JXH59haucAAE8PvEH8uU4JtHBuFv2mZWZkRN7kRvCDbRL9somWuU",
  "key48": "2B8UGjsA45LHQxF6MJ4R8daYFjV1yfyqQpwK6GzJWiP6WNFzbto9SL4ADGLvHbBX8ZuQJuCWGqKJE5n6kXKEce55"
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
