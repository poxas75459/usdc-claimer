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
    "3oG3kfwx42sZkzk9ESVSMRZcuRQLoUS5WiAjfazqhbUFGn6hXijeZCtMWy2EwR2sVhDn6fhtAnTDwBt2pgh7DwVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JRqA3bVwQa6TgiCsaAzkc3cJiq7RRT2csRGfjjEYjVQyrVgYydSU7Tfve8ukQJjUec4XqxWuUTJwwcYjVFssq2e",
  "key1": "kpUqRcCsZEc1F2m9A41XkahjhPoVYvakwtiNgcDuKeXbk8ARKjE4e44My8ZU5Tms1FGs7jEQ1spfWTXKxGU2VBf",
  "key2": "27KgXbkWxvDeZx2UjeCwytzhtfoheCj2RwGfx5QJT2aP7k1cGz6GpBiMSEpECjAymc8wipPQwRtto33s9p4HJF5e",
  "key3": "Cp2LyrY9JqwnDfrrtQaVivGLwRhYwUKp9Gx91yFLUxKceM7PazhSfbs6MBwymB5Z7wFnDRpx1VcKU2WZd9SpaK6",
  "key4": "4qfsMx3BN9dHEpNWCGgGCW2VU9nXzdEdbTG88J253RR6zLezKJ4r7pPEiDCMX61pasuaRXkWGSdcrHSRfin4e9DA",
  "key5": "5EZz4HJvAx2UQzAf3Ar7Rc7RXX2rEvtFDk1d2gF9vhRewicfjvbZtmuv3ScwLcTE3rbE4Hcm3ioUoHZi9rSvQwHr",
  "key6": "5fLHpjCL5wrad623ZVMFzS5DrvhJ2WKezWXg8T2njtAcrYnbHuWBpTKbKApLxAj8SXCDysuvJxbUWd932zSZYywh",
  "key7": "59b6p8djYzMDmb8ppyLHrkrvyvdQ7yLmpkUSFapSaMTU4ZKUoGTRvTiDLMrb9GdnoizAUW57JwZXErp6Qt1gLcDu",
  "key8": "296fwmkwA8wSyYv2cqB44uyqmKdrCYuAtXDeryki3vN7aS5pzpDjW6yDcyyuv5RxkxMSVW1RCz6f4Yd51yW7yiXP",
  "key9": "2dtH9JNaF26fkB2FrGSV8kq5axBQyxSYxGLRRa85X8WbHcPzfzkMLGqK7hfqsMkJJwe2Wm5hhMGBhLmghaHcJAmd",
  "key10": "UxowhMnWvf62GPn6W61BJCybBLDwXjYwGAM7EvQZQsPJEfGHZ3tsG7xi3VAnoGBCqGCrcXtaDg94nPqrkwp8V2m",
  "key11": "4npwoDwrDhrp1GkeVNcVwifg9tSYeKDGxQzLoDYJ2Qi1WYsR49r7grWreD8hMJtqHtMMwAHBgQERQY6u4NKbDPdz",
  "key12": "wKZgZcwMpVbYc28dRU49QoPg35JroQTybSwUd9ovCiWTokkqiuJVf1eomrbEymuYRbnfsjyCfevRtXRAN3w1Vis",
  "key13": "5q749v8aJDmjdemjvxWnGgEVHBU1VNRkmeuSVm4U6YwCLQpswV7wUd5mbyf9aUSN6WH84oW8jjgWgiTmUjzWipPf",
  "key14": "2utmLXpZ1froKNBzboCTL7NpgcyBknmCJE7L5Hu5aDeBuG2w8HsSSKfmfabGp7LGrmtLBdRGBNBwc6JQPQ2ZLhUB",
  "key15": "4smr9UHafL51966EyAerxhsiHArwXWhRB4fX4TvkGd2XEhyjG5uaJHDCeU8onAzvWtdN7UBWDfNjzr21zNWL3GYY",
  "key16": "patF6aPzAyTtQhLG75Ma8L4k7rckT3P75xBQGL1QZH15zSxNMiyk3WqJH4ncYdvBiCbFmPKZkpknknYAoUvBLU1",
  "key17": "5pP1g7fL5gLuGfPCQqtpH3hi25BT6x8evGKdxrLrQDdfkLb24GfDjErdb3xVvfs3BM1nFjzkDdrxVwuzpRdHvH4M",
  "key18": "5JTJA9ZSECG1b5S7EV6UaZ45TzvdyYBmHMBTCTTdMHqh152fCzudCTX7wKadRvpP6PDRs565JoAYeUKRXPZ7upMe",
  "key19": "2YFfRavhB9HFHLKjMHpQXeEMjmUpmb4RCyoEjjxsUHu6kjS1sy3pqAkmKbBwqFz6LLABgvsFe62GGLWXBncMDMn3",
  "key20": "5g2pDekvHRkUMgBZtJSvzvmu6vRSUbYCj15r2aSRpmWgsEF5g2dboQXzMNKxf31XWCqMD6Q9FfFL1Ho24m5KKE1k",
  "key21": "46i5kbNXVNDQaxy3KiGH4B46mZnZoFNAfTZmUiesrz6mJHghTVQmgRLS57ijsRgQsou4HVvkb2dsTMzP2Uv4biSP",
  "key22": "4S4msN53ypY2TLTgxcWiuYLwvYHEEVwXPJnKzHL6igpqmh2KrP22AE223dAw2wzXnR6BdBknHi7RCnbuHJ4pM4m2",
  "key23": "PNNzJDJHhb1HpEqwxyLac4rg8RZBosmTLo5FQyRPeryfibP1k2KcYcyg7AxmPNWqUUpvHWzFHwrwHzqv4WB1iVj",
  "key24": "24BV4VD6HD9jVQwXWw43XYbjLa3AzwdT6wrpU3qFHAoNwSrCJxayhxVm8RzZin2G87LacZ6Dypsryd3vdLRAqnh1",
  "key25": "5P3P3TauXwBJVczRAf6sQiNyurAxWqFT7G23JmfrirxhbShF2kLNQqT1asmLqoN4uRJAJfKu6kjsidE7eGXTuUmz",
  "key26": "4KzK1ET7LhcUv7hUPYSG6sHsuregt2Vbk8L73K8AskuLDTepGbEExztQo6J13dbBEvQ69TsnhVT6n71jdGEBCvfm",
  "key27": "3BpMraqFkWttaPxdAYSFGa6YJGxi5HoFxHWZKKu6rL7UvMerYarXn4UxF8QEUwfD5edqJDqu8TZpukzDCPBdi2MX",
  "key28": "5tD8c4vtWjBqsXy5juUff5fvuNiuxjY6poLTH9pu6qeu2H79yEiNUpaSj6SCN9eT8dd9LNfxHGAabtAT3cg6WBcp",
  "key29": "SVuB1xv1V9pXdz4hJonKY35G7FKTYDixNG9iRu9wA1frR8PpNWbFw1fxY1tEaUD358fhDGPUUEx5CuWqPT7sFZj",
  "key30": "2uNKbbfZkQVNGWKwCfniDxHL5PCqXsQAVAziRCvHQMVcits8f5KjyPCn4hxokfDUsUkZ2C7KNafoFgZvrZyh8r9Q",
  "key31": "2zUAwAcKv6b51LRLgw1fXmBsEwTS3eGDiAbGJZL4CLT9RVqDtvi961zdssvbSKqyQG61qsjaSvrMVQNL4F57jDN9",
  "key32": "WbE5TJg4B8DFnWdjQKGmf6oNnDvAVpTyn1MxRseQt6Yck7V9ghW4UmdSZC8QKHEpvRZfcTX2Eii2HW65o3W3xkV"
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
