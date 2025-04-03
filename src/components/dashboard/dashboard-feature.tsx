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
    "2J3E8npM5Me2aZzveYYfXLd6uFu3wPDDYup9uTTioK5ZMDZ7uujnJP5b5WadrRfJJD1q9eCzDL851Xz89KofoEdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUUkjJ8UeNRBqSREkNBQL3f2pdijp1CgJ8ZCzBEWfCoFWA5bxxA8GNvHbEp1WNcUPnRJqQFxJsPVUtdizN7jWz2",
  "key1": "5dytmirPBRCrXiAVb7YwA6QSHMVoj9a4mYsSiVEzZ9YokcJwdnXX9fLJPPZsfmbjq7UA7PvjhTGMLo9PfZRQsFbT",
  "key2": "niVavpFVL4pvRgR69USdg4x4pD1y7XbRmoTMWfxcrT35R9L9p4APWZCZTRvjQ7dKdotMePTAikA4GnAB23k6dVK",
  "key3": "43SCJc4AK4ZLj9kTCA4fvZRr5V2W67VBfgyjt1sGWC6NzeLAJj1Ss3U4LLpb5RYCuFRi4VGttBkBZa3pSGwnSQEB",
  "key4": "sGQvbBvGn1dLFQKSpAmEXszBJ5mdVuTLHsUHf4KP33xryKJtzKkAaZq3peQ4CVX6x2PEVLzKKAp4dso8cxKYNw4",
  "key5": "2twVBngt216kTo1hukcTRqgzFDECckCeBCv5gUqKrmPGcESnMzGhMNCCMKMzWLCPshhj92PdJvjh8RcBTcw3EMhZ",
  "key6": "2SAt7uicM4Gk6hWPtVf6zpM47ptspfRXFsvwDkbFCWm8GP6tP87SzzBv9mkA535MMqHagC4GqiqfN1zsg9xHFHgt",
  "key7": "357QSTUqw6tfnYEN5am8AmpWVafkR7wgQK2UPAcWmwEoZ6MVZcmFnxzQJKSyarvZY7cZYmN5N5dNuwY78nsXXevz",
  "key8": "92GTYVxKuHDT1BZGwkX9Mu6ckotPZZYr42gse868qxXo6YgcVRuBb97q8VUPbNDbBLdu2RahRqydmmyAZNU6kJR",
  "key9": "3SyWmWmAa5jxkvzcfzSHAY9URb4RAbVpy38EpaTuSCTQheDEHTnFApJZzjVYYusviEUTbEx3wvS9SFtf4omCR6W3",
  "key10": "4ayjANGQMyay5wJTAZc8vVLa3LfA6GbZj999WbTdY18SDRTCcr6EugK3Th9TL8SXZGdi3NFXYoPWNDFnxdvK875r",
  "key11": "54sC7HVwYN7nCyV3gJTvjXs9r1oCu4U8cH7F2gSYjXC8HV3h7PoYREx2avMmDXzENNz9hMHcrVxiDW9rsTAgUvx3",
  "key12": "4H6iTLTDrj9Ra8ZtazWtgjhaDVbJwQSVsCzLz68bSyLh3breMm4NM8d94aFCrjL7cMVsfu7oimnrzozf4gwqcBgS",
  "key13": "2hUDaEhqUqqKUytMj1TqMArRuQ6cBq8nb7RRCGqjiCZQuF5QgKd19xdY6uixeZr1BQ8JY9vUBXyrwEzsSaULwqwv",
  "key14": "4SvReb8vrM1EuaaGZ1KebpeqrWgxEY4rjbJASafZwXwkDwujkkMBdaKHwcdVNPWkjTKZyYmphfH4J4HWpL3bRAHq",
  "key15": "2WgyhQbjfYuyzvHb83JpNr3w5neGMt1Ke9t2a6Vo9v7XtQ47eLuZeFkLRCNg74uaGbsx1s3RiUTPCaJF5A5CmcEZ",
  "key16": "ncddNgC8K9JPnDLM1ELCWY3xb6nbC6CZhkcu44LejddMhjbkFptjNNNvz65YzyZjKPxDVrTfjSJ8crfc2Ccdzk7",
  "key17": "5uBz4vYQmNtUxZkTJnAZg3Ehn8x6QsaRLpJsrXwmLoa3CJq1Z9VgxKFRSDGDWAffCxPS6UFYyak1rapcRBa6GQCE",
  "key18": "37gPfPK7bxQMuf4hsYa4iK5hMmPKweoNCr8kjBbGsLyBnsSrx7Jxkmq3Ee2nGTTFZ3gbfj9Mug396PrfKL49Ww3S",
  "key19": "5bpiVpNtFGi9SLRWf3svLASgmTdxzpyrJBbLH6THjefYGADhF96CpidBfiMDnFb2cWPWxDH1yLxq53UvetvEfXXG",
  "key20": "3aprn49FWjG7GTZUgCPny93GGXaLpTuo1fL6nRQU3G7tw6xk1q2Ks8SXXqCrJyLHCqiBU32uXax1iuhX1A3gVcmm",
  "key21": "3EamsvrjxYeE324PdPCTZVSdMq96TUc3RGwa5h97zXCZPXX2rKm7YFtPPYJtVdV73MZA1VjQtFD5JEuJCUcYt8qx",
  "key22": "5f3pGjmk5EaWXR2zbStZMFw5mzf55NxU8tZqY1dUoZXWBcvD2eDdZW6fsoo8DmePnMN3qmHUnRu8uKoJ4jF2wdXo",
  "key23": "2z4SvyufndEmHa5FB8m7Ae9fc7v96UhbkuHL9wyf9a9y5uhyo9ZazFhzWqJUtCM36TQKuLo86FKs91Eakorcrcd4",
  "key24": "2bZgJBUifg6zBnJxpGgCKDuJmPN2tzZV8i8ExRkMZ9YRneFZ3P1Mmr28UJLPAQEcmgjhq9MFnSzC8HdJJQgAHkmj",
  "key25": "3tNehW8aezomzoZ6RShPLqcHH1VGJPG8aTioni8txjuN6cAcQ6xVrgJ9v4uLQEhvxqZ7ZtPBvHBMQSMLSZcdpz91",
  "key26": "Ue1SSTrRJj4gtiWBVzRC41VrxmTWxkUzUXVjz3x4s1aTVxkgrPWWJxJyUV6hvLrrQHzrEfTYho5mjuGJp2x5KAf",
  "key27": "5paTPG2qqmYG4qzjyaKYUnmQKsyKNkSAKtxHyMLHtxPPp23ssijpLsXvDy6LX9xhmGo3w14zAt1nbx1pidZVrAwT",
  "key28": "5L2S8mLZ4zwi7ZT3hfAUuAALpeAQpFd3rVUJyif6auqxBSQg4jmADLZfhVWPRcbnUPKhQhTu6JXAvfTVUGcs1uEm",
  "key29": "57R8rWcBUzNXtvCPx1obDGPwV7nwDZCeABRJh3YT9yJoPZNvUHf6x1vZR6Ma9eHrgdw46TbudejEJMWCKG7PDX9Q",
  "key30": "38JQW2TKpAD1BMFUkTqJzYdKxbhA8gtGuepgbxJQdmQBkgAH9hnkz26r1VX61QzDoVE7d3CSY36nKkvfXNonoWYj",
  "key31": "4756nCmAzfP4bUQf6h5QtHZ7HSM7euwLdwneF7HE3aKTXThwpxgcqx1LNsVvBNaaRNh4MJVZEkChDohvTzjsMVi",
  "key32": "2TwgQgi9A5j2J2YrDsLi8cPaNLBwHWGEhyiYmiqxvuFYToBHYZ8M3ZJoLdetWT6GqDxy8ETAcX2H1pxXMLtb12yG",
  "key33": "2MfzwYc1Posr2ETSx1DtfnyuntK9FpXkzb22xmHNPgUNS7s5qfcitru8HkBChxnUpT6MNkp16k2cATgK15JxqS1s",
  "key34": "5JJpuPDSDeZk9ZCx8ipzZfELMY87Ru4pVjjFrVSAu196Z3RQFQMDxGLDV7wpnpyyNpEstbNFmjur2TsSLJUFVVy6",
  "key35": "2w9vDzrgeyNoLhExRQMzJ583wjWAUMwyWxAFo1E9ATTddBoRNSFrKrmUeMvmc3cAYP1QHfET6fFsuezhUyhku6sc",
  "key36": "3Jw2mGa8HFAk2TtuW7qWDZQ2qRc3hnwH8J4pfbe91VuqEVBPrN1Y1L1UvrQTLbh2jWwV2L5B34kxJRbUBxjYYVk2"
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
