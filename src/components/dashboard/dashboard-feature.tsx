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
    "5GYwe67m6jZWLEber4eSGcbEKWFvpfCD22c7v211esjJ8SRqhCd27Wsf7xgBHxKVm4Lhrqdz96NuiSqbfxkivufy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXJRtBLdzzBeN2PKWXjbBLFswWPKyi9uTXcLVuWu68yZc2q6QGqPD3MArL338DmL8x9J9YYs6VwHE7CsKMWpCWP",
  "key1": "66jXG1xQREJqU2x1oXrLKFKtYXjuCSHVWAs9z3h3kxqDZzmLve6ZUwQSDZ1XAGgoqR9CVbMzee3chgqpGiBrMNv3",
  "key2": "zUfZMGh5pkJQcFDwzCttVZ4iCVKiR4EHywCWqyzb1s5YL4LM9qdbBLaoUzHZrqCgjf8UABLVucn7VZG9JAe7Mum",
  "key3": "3nXTvHJPCVNxkjiNZQtRNvPmPntBbwQRaRLp35LSPr8kx7P6J58DEjTZJDvW96qn1w6gmyyTra1Rn8oUjDGDSM2s",
  "key4": "66v4fP2B7orxgGFEHawfa7uQqpkVwoJZi6LRPa6Bg2W2x5FZjbU1DhAd6yqGZbUuw6hBY3c1pWbAAN98yVPNQkEr",
  "key5": "tG341spWZj3s8frfwjqNWi6twNeJWfV4gVkDPVGrVCBhA7xnLnfkwvwJ3NYZwrLVnrCfA83qhy58sPWwx8RfyLN",
  "key6": "4ga2C9x9drR2CqDS1eoGdhP9jmBPpnGJCcXE1eB2PTWdwKvDCaK8a9b9iCZcN4LhE5uXkTeBYRT7FcVAb2m6cQau",
  "key7": "4VsVusiZMjtrA4yMxfY6kkngKVfWsZ5TzXRCzaMpLVWqhBvXE3cfKyNtANvGnhnYMjwoUjjuMBAvFSU4muUXhL4q",
  "key8": "53UkUTP8x7Ry16LzihYaZfAwqK6jm559hNNXepjaeAsiPWVnKc7XkmBimj2RfxdtSeAeLF5HsaorUhpTj2ZdestX",
  "key9": "2VcNhRwuHH5bVhBT8Fg4q5Pq8KTyGmSJSLUAD69aVz57rVfupR6Lq9JY98zwwnLexYb25D1RkmD2YuYciZd2zVTB",
  "key10": "64yU3USsjAFF3xwLCYcuqTJAiHWuWB68NaZEeMcaF5WpvKgUtQHUhsS9HfArAep3ARcsF2DuGzmdbtkLt9oXkXHf",
  "key11": "2fdJYfUY9JJCXqVfjYXaQ7hTy7C5FcY1u8JQ8ED4PqaRby6ZChLvCStWCkq2oMSG8xyWid6f4B8STvevPg6mMbnm",
  "key12": "4xqTpGodGoPFfK5nbMsiFSmALsALGuVubBSegm5QbwSJ9quv2bgo48pDYfYRcnjXsaABQvfmRMk8cWqGZiRWoXhz",
  "key13": "zKhYiHd5u8RGbAk9wcGr9MBDVrJSe8sQHw7ZybvtHTZ3iQVF1SRbw3PgVxftsoXMpiuUJoLdL9P23kx2Zb2Kcsj",
  "key14": "4i3RamEX4xy2rFQXo1oXuuuS9Cbc2vG3QSh1RvNQrZEEzBG8m9mFZE4LmA6QXPXGLB6XKDvJu8y1eLtfpvUcRZd6",
  "key15": "5hQcjAgqGhhnaZ9y6mWzTWVAwgMxdAyBQZR9pe8BWKudX7Uekx9dwzot9KRd5NqDfcwDthSRCUxgWRx5Vp56BKFf",
  "key16": "2SxccZZxY1epaQp3Bfe1T8HbNfHgTJXEhRQa1pDBQK5H65gE8XNF56kmVeyeyDitAvTumuJLjEf213TJzss4np97",
  "key17": "2PshJzY4P6Egq7D3rwseJqps5cDYGjmmJW6yuPPNMJXGx8nQYGPpzWGM7YcFisrpmYmz3DxHhoYKn87WvbWYyrfE",
  "key18": "3FUyJ9mLCukhHCJ18MySEpHL9s2YRf1cTnZbu55qkWut6tgcfoREwY38ZtMMJ7gx2FJn6dL3FTkHNzkd9ZiHLrmW",
  "key19": "4tFxRKnYEqA4GfxjLQDbJhREPhamFirgUXxqtr427ACRiSgpqxv12PKNzCeCbbrtsHQKDjUQDdTQjWiMt2JHGKb",
  "key20": "2HfhRvLUhUHvndHk7HqjeA4NdP632y1fs7N1XV7kJKfBeHLKxGU8W3A18vRnMyXJweyHytFm5Ytv6oaHd9MGaUj3",
  "key21": "2Su8ZDwN4u4fFJC6PwsfryKpwsyemqnac8RCXJRRBuNde8ic5n6uxdv9iF7NtzrT8FCoif1fhJUCHFuqzjB7Dhsw",
  "key22": "5RMe3hmcAQkzpgruFxXf9R1Fsb85PPWqoa8MA9gujHojaSFtJAnxewaV8Q69zCpL1U258SJbhgW51TYJvLu4cwPT",
  "key23": "5Ckn4JKPz6eF2pdbYn7P5ywSJVkHQfY3uhCwm8wFchQVSDFGwJneA2pTH8u8r4Uq2E4EfNxgYdf2Xbv5Am466ymS",
  "key24": "2CDs3vSBHQoeFcrJfkog4N3tWTAL1HAk11HapFkr97jwHMsP3fQtpU4aHnxKVrZ97YAJ2GhMXYRi1CDtqMAa6cSx",
  "key25": "4qTuC4hYKxrnyeiENZcEKKMDtqsTsmKggG4jTuAjM37PAovZgCS8qUZvRHdKjE4dvU8kMc3eznXXcDhLFsYWpCrR",
  "key26": "2CDHLCS5J4XEzrtJBRaUuiupqQ8kPLYxpGYYnWxvbCpeASDdATUpmc7jvynyp4uqXUUDeb8fxB6u4Swdz5Bds7iE",
  "key27": "23ivDNZPf8gpJTpgZGuukyT4dn7Tefi5S7puRQJmc71MeZeT9Y7Ye1UiMrvSu2AyD95cbJDT91m8agQqVLu3kTeR",
  "key28": "63GF99yTxCbEeRrwo3cfThMme6oqwzuYTw6hXWU4h1pG4sEacjtargrEK7w1NBfnSbsgZdeNqUFADqi128mBjk98",
  "key29": "3v1JjDRuE5cEX6Xjk3A9HGeMhd1w8Y2Nqv4qEtg5D2nfMWYrqn3jsJJBQcPN9s7QZEGgdqDrDQxCaMTmFPFD6uE6",
  "key30": "3wWiCQdLzfvXJ5uTV4UcXdXFkuqCHNKMS7o1zHEgcRasCiAC4LJPqDE5Wwmwi2ucsqPytb1AwE1Zr6oNhwHjyu7k",
  "key31": "4R6GxAEP4kadSomuH442GHcbr5bm3GV3PDDL299UGtyWrtLecw5Gs4hnmD1kCYbatyToxEu4aBU5VTHybBPviw5V",
  "key32": "53Ewa9mL8oEPd2nRmEUgQ3oGpDfUcF83LePQ3FxrEmPXZ64bDMM4ojg8Mf3kY3rhTNanboH5iZmqz3C4Q3x3bFrm",
  "key33": "3ivPuirMk6sa9NsiKZ3YYUzBfGvzMWcHnaEVtAUWqPxtoHxEdsp5u7MrXPNVyFS5nuwX4Tv8pR7XGoa73aN5iUBj",
  "key34": "2x1eDxPxXgXRLe5295AMPYVWQefgLMnSAZ9xbLgvGU9cC9ndsNJszE3JVW3puhyou66sn2Wdzpx7Ch1z63X4CWb",
  "key35": "3h12FnPEk8kg3NZW5SGRDQ9oh3UjvGW4CY17G8z3XnyRoFAPaqMuaVqFmAE2uCZmh11Wp2PPuGUxUM1UGqQ5nabQ",
  "key36": "4DLbau8Fjh5uZduq7kDyoLYyiFkgdfNAScH22aUZzR1EvZFuFapYmHHcd3EStYHmnuukw8srKevDmcgnkdSeDusC",
  "key37": "4gDYWkNnc5VUSkTBm6peVUTBooeNUDHQY5gGmjVJw3ga6RrZEpGu1fHzrqQCe5Di5969mAXVAFT1dhdK7tAZV5Ft",
  "key38": "3WPKfxCdBa3TeHPkqW5zo2u7XeBT89hRoyzNk7N6cB6Kxbh3mQ7baoLNfm4z5AUc5jDGUzXNeSbJf2qvGrKcrgXQ",
  "key39": "4iyoHuhxyQZo1q3H3rB36sGtZy6Mt3dMvHK277bHahszczbrZB5xJTppBSXEQweYReSsJnSNvEs54u1fzifPCxPm",
  "key40": "49MTxbfqu8MUMNGFpQqMw9M3mgWX2rR4vGvvxFF8AkSbSEsn8udrFcKZ7FQKTJVTaEPYj343obhdXzyTbG4MSKPp",
  "key41": "26is8Hww4c7iQrLKZKQo4FbbWk6udocyFdMCZAZ5fJhLtbUqQLSR7SkwsTSHJKoiXhL5FaRAmKiJXzafboAjPdKx",
  "key42": "66kvZxrnxazuDQJwyjjCeoQC4e2nYNoGffJUsExKmviZ8rb4YCRd2VEbZAy4S2heR6ZcjNu4s6noxnGccDTTrG1M",
  "key43": "4i9xkiNb33ELfwqJ4j6R3wH1YzsADmG5SJSSzZXtrn77gcuWSjmHFhvi3Mn9NGMuETtnELNwx6S9W2P7ZGrqLKzU",
  "key44": "2v2aNGApnJsC8MkfMJ7pXWhRpUT8kGso6rc56dL8ydsjBSD9M15PsJ5uaazKfLYYAnCTxJvtzYvRpcyyjom7JDVu",
  "key45": "3JTAs2uBbfh64kWKkkpEjBAVymgziivVxFvDBTZsNQnat7rLRM3fN2Nob9CMoMNA9uVGTbFmRgqcRdWwBxRQXQnY",
  "key46": "4kVjU2zonVbUijwz7grfsBciXfpAp57T3RzUX26RjAM2tx96GVRnSL8C5UyWa74UKEcq8ku8wU1ePRUpUcWJGk7s",
  "key47": "EQVZJTrFKNmpbKsR1bzTxrjKbdrtfBEuXQsXmjXKtG7yTUUmErUx7BYz3AT3MQ1GzWpKfBFZLMsk7QCcW3efq1A"
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
