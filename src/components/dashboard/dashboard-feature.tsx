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
    "2ujmYfmsrLNFmtho7fcEPKuuePBKJFgBYGW2TsZcQ2yr1mTQYqMGg9SQwvboXQj6oeQoPKnLsiFRJoh2KucA84mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LGMv9wronWw8m8JogCthVCiQDJ5ViwrGVaLwuPizqAKTekm8VnvvaP5fPcbkdixJfRm5xJjF85h9ZpFuhUSjSVz",
  "key1": "2FDiK8btc4NVWNAqb51evQg79umjRLdUqd7edXjENv7oWaZ1br8itMrzEanqzdspebgp3PAFaDwLrEvxTzGsPi55",
  "key2": "zDiEsqPigPoPCpe8E6xHSsfSeFegEgUmQd5JoEMzRAZCvM4MDKXpXvW3QbR7ZmPFA7VCQd1XhzKYmnDuuHfCJWG",
  "key3": "59eaB5pdU6kuikoMCdH7Rjxy4HisCNj8SUaNLKdNBYm5agXXGCrgRVkpqAjPp2WpmZ4nSHkGS5cnBerXEiLwn1AC",
  "key4": "3SA3XFccRxcNEWMbYMahGVBkiF3sBvXzx4oN1wCdnF3RtwQwo7HTpmr1vmwNWswSCLLZMWbqqrCVK421argGV8GS",
  "key5": "45VUzGrP7PK1tmd8DSnDjixiv1k2PnHcN6Rqhaq8jRo6hyE7kj5oHAjfwstsrjGhWMoKff965Vq9qKwBPyCk1NuN",
  "key6": "5naiBeDv2KabWFFPSWQ8ULHTj5b8i5DJtWwCgVKkKZa4wXQ8aAPzSyHNZYyFZnBxLsRHJSC5x4XpmD6Td3wsWj7H",
  "key7": "33eU8NMK9PmJZVJfY6LKdHxdzbu28Eiaso3okexrM4MAszXs1xBzwpnHBYfgfDjW3YAaqKHXUaFTBg7YproEthHi",
  "key8": "5rLSgujcQsQFqhamnTBMuFS7x1DjNzU69CwvvEeMyGfyNBAaRxSJFZx5k97oCQFQNMkPmFxxwkLWuJ93pLu2JfKS",
  "key9": "3JyBQNPggyYR9v5yqx3dykxstmscr21dMjNwnuasNrmmT17F3WfPrtv3jiLAcgm8wEGbYZY9ABeGEi6BmUpMPuVE",
  "key10": "6YoRp3Aks9ada6qik7e73LjvXkvinqviM9X67QEJ1WLGZqfCYef24Ca1vyZAxWYWYxg4DoeqVSwphgVBehXY6mb",
  "key11": "4p5RnZCQ7JUk91Cqea2oDB98pPRJVA7492QfBGNJn92PUxTtv9TumuUCaegfr3Y5XZrB5wcHqfpBeavpupuc5M5H",
  "key12": "3zWQ9cShGqqZnUmiFFcxXVNJdoG9KcZLMYGNznFUeupPz6caaoyHD4h28AfVsNSBvfApfhWixRsyZFGzdBMut6vq",
  "key13": "51RWL96uwoP1d8W6QkqUf45qHr5Wn2d7atgnn5siXM8GNUf5GDbHRyEr8g9w3hUFPe65HHLdWUbF93rYReWbikNE",
  "key14": "3SCgERoTZmTQxjNvaW3KbdLTvTTA7xL9Q7Cy8iYg8cX5rHAzYkEj1iaZeC3688CZHQp9C8xbWEGt1v8PBaiLzXbd",
  "key15": "4YvpQTA6h52seaFpohTHSFjpooo6S6u7bwRWxH3K4PGyZVzpGsYExsiLBmPoz1C8CYxnxRuhMoBbww9GFDGYhZmU",
  "key16": "4PsrBsxGubLw3Q8nM4PPURZmoBLKkoNvPSomLSQZRZb2HtDfJamCeN2RuvLeaFwuL3KjbZNqV7VE6vd4MjPGZYtE",
  "key17": "526Mfapkgbz2BEtH1CTSVfvj8iUyXWDZLvnV52w221ySzsqqPy55XFjWZeAG3JWoqbmcJCYGJUHfSdacBAcLp8Bt",
  "key18": "zLaHaRyTuLrxfPTpnrgXPVdrmJXoXS3RPn4GDNJ9WrNG2oVjtXGDRHcxJVfmgJshCnzBq3GveeLrF3JD5AencSc",
  "key19": "Eq4NUav1TWY5J8BeKPLweFFYLkrBK98BmVrqDwvtqL6jhdLdwyWkZTmraevW6gYVp6jo13dv5crzrRQvz2gBBnK",
  "key20": "2GcWh2drMexs4s8rbTa3zwnTynAU267LxaH72M5qcgi3g6TimoXNPJap3yeqQ71ZCBrLYmDsjVuQfLhY2erGXcHK",
  "key21": "hon8kSa99e4uNjST6Vtk4NEoJG2NbV3UPUKvnz1bvR4nVPFwe1bRDoKWmY2pfhtKPQH1VGjK63MwDrBzStdsJUF",
  "key22": "SxWVYcoeULQ8QLEUpUHf8iQxBc7Gdw1Bx6UEWYmBWrUEDjaSQygzzjDecbXpWVdjxNnX9tMnJCHVqJqG6nHV1k1",
  "key23": "x1j5g4Q73zLiYgY4e1uJeZEemXg5wYWjd14tv47x4UUhLjXoBqrXG1Fviy7Ygjf3FvuVkfE996bdrPic1iMfFfa",
  "key24": "5tuLFx6TqT2RSiP922HDymvxscmYqmjDfQLt8U1zMxrwmKVJRDT7R2kbL3BXLU3Eq4jRoUKm82qQkJZVE7Ei8VQu",
  "key25": "64f7nstudZWY6dEJiCAhuRLD8u7rmELczjQ9s438pumcuLc9WySRursPafaJGQCoWQoEYCAoa9QhVxS2ZErkvu8p",
  "key26": "5Gn1DEbi6NxZDtsa3zXR4ALwahZXReLauXai9rWhHASZ459UkHuHVxESChrWCHXLVPTUckMEYZizR9JhCNCSuHAg",
  "key27": "2UqgiorqhCtJcErMxBDsumieVPA9g4CopqN2sm6XqVAS33H9g12KAVtbyZs8BqtdrSUqFXG9Vqj2QqVruDsYKGGy",
  "key28": "4EMFiSUipXiaqEkygfVpY1RP5HH6BLu7MvTT4eUbBsB1n7Ve45orSXxH61vxWArh4cawprpy1whzoUKDavWNZGSr",
  "key29": "3EbYZPCT9eBxjQYBds4tCwo4wNswnd11jmbSXEWFNafwEHgXaQWuTPckCw4iaraLVgtg2NgJKrWDm7pGkyb19ySF",
  "key30": "45mHWeDmKmkWoVz2pCJYXAogYnXmWj3S2V5rurPevpQehauqD1TiYhW2mQvEdGy7MWZbTiKj1rTBX98NbUwToMDL",
  "key31": "2dEuw5K1s7S3sNtUKpZwTN2hf93PyxpMCdgvZFL8LX7Brax3bPcsgzCkoKYHaymqYLrrzxB6X6mLCuuChVRBHNfa",
  "key32": "5da4wHkZPTKykocoguQWsNGDi7CM4LSb2yun53AzLexhgNVzTWsLMuU65Qtkf98EZxFCQ4bT7NzaCvBLGDPFc2bG",
  "key33": "6Fw1raTTHU61tKR1qCYMe1SfQRgKUzdWJAiggQfKYkepcDSEbRTaxLe11jS1rbxDLf4Fn4HrwZi7hAuVf7Fivw9",
  "key34": "5aAYNXN3wFioQnRhrrPCAQxBzhJuJgDWMfSoACW5mn6WHHXNayfdFC2vKVYrfGKurmRDDVboCbTjnahA5DBr8Cq4",
  "key35": "2tCrZGUxYSEii65Na2EGUEby4YnjSDCpJ2qBUWEgPeT2ETHk1BeaNYs5GdJns9wA1wZdgkXLS1BdAAiUZz2EZAyo",
  "key36": "45LpX3K3w8vPiQpFF15QRRDWr1WNj8t4ykpKVgRAmTBNpzZE5RB7jEpN2juPttMFvvF97xTPPkjra73JYREe8CLs",
  "key37": "4i3xwDiXFmV8xoH45NrZHv1YdWfZptGLP6mZ1ohWi8CR5wPv4KWxtpAMxa3rb4enFx4kt72qQWzuqNmKt7YfG4Ru",
  "key38": "4QrEaQr2DLveFvK1LvJqwKgMf98egnjb5rMDWs2GqaLNfFSEgW8Fg6vr8yx216nDRoHYyFjieYNRaJAcEES7gkfi",
  "key39": "4dV3EmSxqw1rMLmWSdirA35js2wTp91asDDdKwHuduJiGGUDPW33QJskcjDkeihbj8haQrjurWtTLQswUpMjrUSV",
  "key40": "4qm8ZDY1vAok3W5K2qawGGGgT1MgJMrGx2Wa1fhg5KWqtXoRvXQ6WsVdaH1bpa1eSHQZ5Psr13Qc3vXqbVbfR3EU",
  "key41": "MwqTvwHFUmWfevXoQMrWeDHWeGihiM5MeZ5eS1PobFZ2JnefXptTTrhXbANpLRT8P7sgaSmjQsERYc76BcREPqv",
  "key42": "5pc4swSFAi7dqqxpAAKdngjwKiw2Yj8iABaUPrD377rgnZWN9v5C8PK5UeQFT4MHbwt8VyY9QoabzAoeP5THsD3p",
  "key43": "35HyCbmHeLioG1ik7mxgnLrXY7t5AvX2tfEDs6pDTeQ4tXu6dk87nxtxpeYvtKWSSBadMQGXc8nF1aYoyxAVcH3T",
  "key44": "5z61D6Xuz9Tj9u9yXfGquiDRHHrBzPErbq9ENqr2H2v2gdce6C7Ni2Gv8nCT78uZFgBwcTqv8LzUHBfc7nsU4Unq",
  "key45": "fZe4JyHfgXkyq9sWzJ8hsncZ4jhFEHXHbbEqV4HATwrP5gqn8QYjSZQjTT7tzWvTepzFBweJeP6Qon1ChmyFiHX",
  "key46": "N9QcJY4qfRHYYcZndDn9dDmYAxUQgQvVyZ1F7Ebbi4SfPbmeJQSnYDU6Wg2zkj5XyCzy9yAMrmvC4cdqESgrcrw",
  "key47": "2rVAiQFVA9eZmmj3B16r6V6UF7qt26bjovumt5emG2mNZ7Fa2XaRoZ78QY6EygwxExcjbdRXCamesDAY3SNrG3hx",
  "key48": "2bJvsjuFvgopGTSvruh3ct7sxBYehmgFrB247EMqhKUoeXpb7aQ9ysewLGnqvTqtQCbcez9gAoereyLf8WiawQAQ",
  "key49": "5ZVcTUbrDymDKy2i254JVY6P4zfm22RJHM263vFgCQy5JxpQttH6B3NBXSLHshRxaPRs2P7f5sfRe1fVTjNiT7nu"
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
