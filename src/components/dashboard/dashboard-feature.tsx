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
    "3Hj3HpK124NkwX5qAPBtVbSz3Ps5TMfQAMai1oX97CttQPpXDaJGTxZ86fRktFAiSLe9oVQaYPQB2FBEWot6Z3ii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JrKwNa1NtwA8qafWxSSiMkLaCeQt72j6873k4JeKHavkufvkgPpogjpmX5mB3JULDgr3gTjEezm6wSt1oCSeMPG",
  "key1": "2mmzFnt9uaQeetxCQTDSyXkbq3CsfkuKJQ7Ke1HBEMakUbur6sYipVTN5C1KSZfe5uUDwdr8PofpksbW5vtnYSFw",
  "key2": "31dZuwWvUiwYfWda4rseJkUdN4iLfjJd5uTLcdAT8QdvtZS4HoRkGjKzxR1C96hk8wHpn6i1vcZtFNiSCHm84ksF",
  "key3": "3XG6HUzW5rbDv5qozsrdAFihdX8fmRo6TUQuGYtLCgp81LsLP5HCgdFaUu3kFFuD5figU5NFwr9vAwum9o6TkUA5",
  "key4": "3iLHbw1rCVDZdm4xzor7yopLHgG7HKy1du7brsTcYtS1FsYws3j1Dn66Mds8cbu5S3NiApAaHDzRHh9eL1o92LPB",
  "key5": "kdz1W1ttGzfuqsHFTKx1ya2PhKrJewy8pBxwhHt9yeTurQafhWE9djsdAP6JnagJm6neGfERhruaCEvPqakVCh2",
  "key6": "4SuPFZmPd2taJPWiUujo29UzpwdgeWwywaTYMFHJtHAHtRpPdDoZG886z8rpiw9h8n7f4Qtqv1UePxu1PaEFmVqY",
  "key7": "32dnKWUnm58ezyy8Rj71xkwdNB84vbCq6q8NfjeXfQWZt9RuPCEj2P8fvKY4JJwK4kjc2NTuoQDAC1HALsgMkJMb",
  "key8": "2mZLVBNz6cXrHEbWw3srN1yCWskUPUhb1wZhdmqMbfuveJXzsJ6mPe3jxdrHmaYvrTzwDhHHqX9zv13ke3e1LkyG",
  "key9": "4csNfgYa5T2waYvLfBtK8peLRh4kBMa6T122jV3MA75MbYHiBxqFUzLtyJh6e4NXuQ363d5Wh5pJN4VXRc1x9bDt",
  "key10": "51CZhmYTEWjeUUhR9bZKEi3FdRUQB9LAaS6YURhNVCiKUJR1Eq6hxQSjMeEdhoDeGUkuH5gGTaawLGEUUWmxZC1o",
  "key11": "x5aXfvvAwn5mjaFEjxCAArDkTyiGp8Lwm1tytojp6HuFueSNTKUQ8jyWVpTjHqAgrcLxxDgpJL5Nt5tgHungv2C",
  "key12": "3Pqwd3doV6gikHppGTCeMxxt1Q7CaTPE11BY2U1uK3SnTP16fcY9kv56JPnJyRcafJtjNLd2AXsgjHDZCHtM1ySg",
  "key13": "3oGF58U5k24evj1dEU2m3WCJuXB1SjoYnGeyGdK3Ag5pAZqo5hwh6mFi2NLPvgUTQZ2J2GoQkrhbpBAjDmpj2kwJ",
  "key14": "3DzzbtPrKzxjWRDGuDKSug89jDNb8T3LfKYEX83qUCpCqhD448cngyhf2VzDQHwvdbKKQaE3YxAG9jH4gqbaCj4o",
  "key15": "dyx4ZQBvu9JDdWqzJNC1aV7hw2J2jzDwyYFQ8d8A3YuWx5thRh69UytjE7Z6AefvnSJjtE3sQZKhgEEh4YNFPFc",
  "key16": "Ltz7oPLkjKJZ8864PUDRiZRDwEEPwN4EvBt69fPheSa6ac8m4RCFdgY1cKtgTpEi3fMa2ZMiEnFyyooyNWo3gdS",
  "key17": "5uDUwABoa6eRBLbvX2zDum5ZCzFDL32VnLYPSYuBop7jKEahsF4mKnTe2Kw4jDGTexQCfWVdFU1Xyp11EFrNGxAX",
  "key18": "61voMj7fayGqJEWL1erDQPWzNB6hnLXuYoCvcHEMsTpif8BTq5KJ7NEzBxKfbcFxW76XFtgjVWAZqX1H9ejKuqaF",
  "key19": "4xZ9QspKbBn7pxfzquYsXwNMngX57k9DjaJa5MiHojF9iMvySid6RuQ5WuXkaovewhAw8kUfRD3XEZAetFm53s7w",
  "key20": "3KpzboXTLbHNBi2q95U2EF7KzqLDWrzQ9RDZVZPCZv2366XgxHjaijztKWMvZEbV3bmX67ypdGWEGbs5e2wodNnK",
  "key21": "5Mqvgx9rJdyaLXXaSDQULnzEscg9nCojgMnb3WdugtdYmuCYtL1LGuwhiVMTbRLidRUdhE5dLNyxPdCFG5z1REBJ",
  "key22": "3eQubVnKtWiJVw2jtFG4iCUhjjTEf45MV84gSFCTwLWjiMTLyuzVBb7XJRcviRPNBSapBJWHFVogcw4i2a2e1fG1",
  "key23": "Xf2umitVwYzauyRTbd4hoWzYYrEzvwCtcVy6jFe16b5eKm2YFTfRkTVCAhVUGkFNQRuP8p2Rtp5o8xZCMXmkUG2",
  "key24": "MYRu7tpFsAgaLgonN5AkVW625rrAVaFv2CZfcSPAbfthzZvdhTmfH8bvBeMXhrmFQt4uwt2ijB3yWQTCayaFcGv",
  "key25": "4LVGnhrWH2kZ9zU7vaQZkeY73LqEK4MJK8FH9uU7zZK73hzuSetuZhTortcULRkE3hXXTcUY4GDJnMDiAiVBjV7",
  "key26": "5Ni1EkuymY179f2NEFjJFTn25yNEcSmP5wNUvYDoWbUGScGpHmsmPhkgJCiKPgvfjEX5UnDiLsz4tWLWBtobV3Zh",
  "key27": "52DcTrQHnPh9ccGHYYjRJT55hg38MWYuT4xGXGVnYkWFqXbE42xSh6HFLr6Gvg4fuwYZXsJWqvX16teoqwpaWaVb",
  "key28": "36PohykbTthpq4ZruzmnycbxT4QLBLq4EQacn4NA2ur9jWAdDP7khdLcTJC41YaEDD9byvxfG4xK91rzjhourxrE",
  "key29": "3xFRDAgzZyQ4i6NtvaaPwe7neEEWyycVUPaCunBTXgE5VURJn1ZhTwTm8px8MUBvDAaSYmy9CJdVtrQ4365x75Uc",
  "key30": "v2iGZjFyQTnXXxyt1GkqWWEmUxAKqJuhHFA1ReDUGcufKCCmTAUMxZ8AEhQWzhiACxoWbUNyLagg8R4izH1Sfha",
  "key31": "3y5NBEE32JyFz6FryWjZj7LVb5hbZ3pn7BnzRY2VcrHJ8LH51Rqv3fhAuM1FnUbq4KL5ipT6diVyQCKscFEF22hd",
  "key32": "2DMA2aCyhzZEQCcogTbGUZdTicgjq4of7N3bzqupRv7FbyxS9dmmXPxEbTss6LRpFWSNQUKLWsZCWkwEPsBG3ZuG",
  "key33": "3MnnN8QGkwW7gFpSoiwkPKDBHWZjXQV7jmpvhtC6ZaqXnmmqruJGddY1ekPf7hY5ByHtSKWoZx92RWrK9dZg4taz",
  "key34": "3b6ey2G3dzyHrBpas2Stv3HMay24wpttmPTJ5tdT11FWkjkhb6AbmbnNUEZzARA4BoWsPwDREmUF79MMnjtLf99v"
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
