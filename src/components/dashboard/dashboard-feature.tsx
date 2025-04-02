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
    "3ieYVnj92Ewe87wLK9kL2SRVzBnS3rP68xS5rNLE8c46H4LPjzPS2ogu4X3F1RW4DQrExNmqkPF2GTcfTd59Hmgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2MXXSmxi6gWRwePssQWhZqE9mt5qP41vTTnYT6wKqsdeBd2tQvEzQPhY5hrAm27xbSpcYZMxvix7Ji23N8zyZ5",
  "key1": "3M2tfRNcvEfuVgV48dooM4jdYX3wtHvx6TPJhNWH3G7JCthH18uT22Px7LWsJNPhoMM2kUev1Dw2qumeX167JTva",
  "key2": "2EM6c6PbQSusW6Xx7n5baWJw66N5t66yB6vyzxu4eQBxJC4UDMZRReiw5oiPRMWjobLvUZViFU5C5GvDmySPFxyb",
  "key3": "2zNR6frkC8BioNJp5vfU612nCJnP7aqTjvApXzsT3kVtJrpuxnXFpXiQwh7HMEoJQAiZfwWFUBh6yF95Lj26ExDb",
  "key4": "38AixoZiFGrEdY49ViES7FYf39Eyo3m5jxJLgbbvXE68nYbZW78ZvJYpWkpjVem13XzS3CZeekSKP6xZx5dcL9ct",
  "key5": "cyRqtt2EpCJQLNwUG8bnVsmMVjaFTjxET2neExdpADjyHc5YZP96TSth5xJWKCc2DPS64y3t3YPHTKhAXXp4Rww",
  "key6": "3Vc3yCXRrN2N9RL5oZnLThPNYDgD12fEDJb6bHQTKYqC6F1ZiNbtFNX7whf7fvxksaWNC5xjsaWXu2b9hryCBVco",
  "key7": "5CTBPn9x6NpMHMuvZSFipPeQjHezfeZh6NGHc2ZboxqNM9CTAF7sSh9oiZytqdR9WbzVPYPjP1fsVi1M3cEXTXb",
  "key8": "3EAggRPdfA1WV7d1EGcwC1V8RJwP2NhpDLgJcQyasgnBNZAeM63jkCHtH8WuKnP7JG54SKZwB6juMBa1b1DLNLz8",
  "key9": "4w1pWYZVgppH5A3ghrimfNgviKCxbamT8YRdLBrk4rsFAGA4Q1f4UWZF6DTRLSfTdmazcL9V5NhcwWemaXL5yeNi",
  "key10": "4QxTBJBcfWzTAbHcRjFYuNfNCPBmeShq4dUiLSC7bdnbieD5q9cQnjkdATXbbcguuwfg6dyr5C1Uz1y744PiKsnw",
  "key11": "ooHusy3imbL3Xnr1t81tY6CR9XBQ4ih95B2F4bPpjdKEJ19LtuJwBaWwRLhDi4a1EzH1jAnvNkLMew7xjoH4YGP",
  "key12": "483thPRHyakkHuHP3Wi4j5zK6vLpGwBeGmquezLnLSe78u3p4Ezhx5z2hMCsvpHLSWQuoynCxVXxpYGzfRgtWVFm",
  "key13": "3guwmdPGZ4xkCryYMyqSX8vKeoycJkiYiEQ6EGTCtgCStK5vEGMBRyjzueEisZT4983Pvj39Z3qaH91CuaHNMRSh",
  "key14": "5orz23Gf89FRXcPXBWnjkv3s2KHJSd3YsNvBsPK9snHc7mQMznDRKxHLk9Td7fSSRAGGEELTRKyB2GidU9R7mYSS",
  "key15": "5aastutGbdBU7RoksMAVanEY6aspGtfgj41poLR3Uvw9FW8KumnhKMVLqKe143zPPu4Wir23S5oqsnCauYvqZwTm",
  "key16": "eMR93oKMAqCxGLhLGHZSnznoXdfhZGZTkBWPRy3EbceXrkfxQAQGjCheg72FcV1MnPnVFwuUV4iC3fh56c3iAC2",
  "key17": "5RAsRWjoqYxvMMSQxtxSzsNHH1mpRRPdfX2pc2kL6bBEL6kPX3uM9L13sRbeNgTsCsPYQPM7YeeXcFr8S5A1tFtH",
  "key18": "2ZvWDvGuzZZZHYnxsBoXrz53KkkZNkhaTzN5KzbpMja5f1qK9c8e1v4b5LtMXhZt6qZCCycn3KxhNtan9ujHavHi",
  "key19": "282Sg13aRccAv5UdjoGFqezbw1xYZQr6WWDXv3Wtv2uvafQiDk3chnZE7VDRsHi8Qg8QVKAwaE7bjUtihjYLxZP3",
  "key20": "2URyKSowBkB7ZL5Stn4redQStP7NdSwV4CGihY9LwK5rGpB1XXhNmvxUNhSzYsiWEbqs4y49F5Abex7TKNarQS6P",
  "key21": "4UwQBVQ66XmTtRXGArPa6FCFetm6H8p6PuTUMRLnry776V61jV6ojEn4UhVef2GDZfcnf1ewvGjGX9smqEhNBAUB",
  "key22": "4GzDZKMd1vJmx3UgDNMgzqNPSnuDXTmche9cSubaeP3oeVusHk7HR5XbMRbrYTstedceegKVvBnEFydTjGswFPjy",
  "key23": "56GXUJsNCEs2cd4jnNeZ3iHwuw3upEbaffudMWjBm59f2JZwKxZCiWBC6oxPrj7PpdP5QNn8mE1NfBscixSbus2C",
  "key24": "RrcgEvxUcQjmQS4uH11a3NWqkQbBTR7Mc2vYyrgxxcqJjFAQbezP4MiAixGabtTwJaX4fydqfrWVXEETZby7tYG",
  "key25": "2Gf7waJYvNcq1EtFzm8kh2PVWVimVKdDgG1XQQjBg9KnjPseSyA5qtaJvqLqpQFUUut7Uy6tpHU9H5rEJHnJu3jN",
  "key26": "2fQbnJCjxcTEEh5r586cjBq8jHbrXgLW6qX3BGvVzHmCdp6KmvVbHtAf21NaBg8BgtpbkdDJuZxXQQDRuywKS3iy",
  "key27": "3BEA9ULgZoeR1smpUzKQoQkDc8h2MqynwfG5S6oGwueuTn6MDiWv4Hyqf6cKg17HmoXgXjJT7wSbreGXcAFHXjQy",
  "key28": "3ZBcWTy59RhiQ7fFsrdzVhQcHWw7mHudmsUhcsdLtQoT3cM6h8yLEEGj4k33Axu3ZSZmJwz9RQRAtJNWVnUbNE6T",
  "key29": "59umKh8HxwNEmny2QwrYmJdMyu9BK1ZfaYZrQUVh5SzDLW4tt3UFe4Vr6ANctW9cGZ1xfwEgxpkRXqXvyasUFa9d",
  "key30": "f1NjngwRBMFMeL9BKYJbfh9gPRnXAtYhPi71ynvYD18qBS34GYoEFtyk7LYnbktXmceKzQuEjWGY3hhxfu5QY2R",
  "key31": "iYqVo7fz3PRncxJkE4LigFUzfwdvG3bEXViq1ufVk7hB33CWvcTYumZYNRNctyZvVQF46jiRzWhj2tsVqd6FQ9H",
  "key32": "4RcyYmmVYkKx7i22QAiMomc5rYZZUmzYwW3yhNpSKZcp3VF5DKeBnBHtQvig8PELwVazGnLc9BmaR4kQi5XwHRQt",
  "key33": "2AccT891jEX3fAyPkEMsmiKnQCaJ1j75wfgPsiFBqpyiVtECydjyVWZGeNZvrw9iJh2pEyCjst6DLUdWQL9jtQzH",
  "key34": "5BgT6p89RG4jAm9v15wG2Syv6mqFkJFaf1Vs4zGN8jhKcfTrRBziKUCPtv5jhPiJTBdUwMNTQzLryJiVTbhys5r",
  "key35": "4r8eVjxTKZu12NwvJMoYXLY9gSC94WejpMb5PbnBsgeGTd97DNRjEP4YMcFcDBoTbDU8uNJcz7A7YKo5VhVKEZ94",
  "key36": "3JXSCUif6RyDHaCxp2Hn9LK64DoWsywTnpZjrDu77YcVe3o5Z1bnMCb9o9v5PT6kTwP14WgtyQEpkgnkqgx2fzTb",
  "key37": "39MDdM5j1Via5XDFitbZpxpFmCyBCG2AmwN2yMYEENJDXxxGo97M9zeBA3gyxjaNHjjeGu1bAWmn25zaTxsVTkkt",
  "key38": "5whJMtr6RGMF61XcKBEBG6JDZX3bBBtDVarux4gHpAuh7wqZHRqm6VN4D6Q9Rh5XtuFVv45aTvidNRrD4kpmEkxj",
  "key39": "3fPUrg5A3QNgjSY64VwL5ykgmMpdnLnrkxiFCF6MiZejQ5ETbwCEQ3PCmisE6rMzxY55gP8B4nEJSwALxfntMXSY",
  "key40": "4oBa3ZsWnyx7gQFFVYkkJggFPpm9QUEt7MtUwsaobx8Ck3ZCuZfcXBZpKVNtjrhdbWwGHVbtTkioA53Vufjjq3K2",
  "key41": "4GrDMTo1hVWwM2DY9TCTcniyWCV72FPWbZsdi4ojvEAkNierhSMsyRSjNxnfaFXXhNFxDRLPCXWwmvFE6c6jxyMq",
  "key42": "5ZZUN67FmKD69KL5yEciocrBVrbYifoYBnWzeNUqhLzGhJPEXVn1mb43vfMue94ESZi9LxjzDrQfTgGg5Yb2WR18",
  "key43": "2iHxtNyxCFaNErPK3USGbwEPrS8xC1MUYeKBWuF8MFt4rY1FgeNYik2mPbLtV2j4J8ZKzh9svGCmuZdFqgvU1dab",
  "key44": "54cgsMU22ySwtt8TMbmQY8L3fhgNXxmB1FBsEbePegP6TF7pgfmRmNqpfJySneRzgRx46sKTJdkQesG6wH8rbrc1",
  "key45": "3fWcX6X5jvWz8fJxgAE1RBpmCzso9V5t1gAdygCzHRzcfKK1NhixY699kgcRoUZjpWmwv24qozSgpWU1AjCYANqM"
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
