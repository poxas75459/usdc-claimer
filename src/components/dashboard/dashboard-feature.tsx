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
    "5EKmYrj2koit2rSu1Xo7F3RX3sb28pB2gesW5odhmEXDZtMsjdxsed5WRwwT9zwxotzFWyH4KTYm7wXqMYFN1pBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rhbssrCWwZcYT1T15PMe6jbjJBYyMMxBvieeQcmMMG11kRJgXexURpSqxtmsrkc7HKy6moWfMEXGcsBd7Yuffu8",
  "key1": "5iwfkBwpqjWHRyqPcWGWbR1zG3PPpe2jezyEoR2ceQeMuqg3wBhhYmKt2BT2ejnsvgk5sP7DeprrMAQy8qm4NKds",
  "key2": "64w2GCZuUeZtxVtDzVMjwDSiFaKn374X82R8adadws84pWh35wZvfQ4WnAYsuBFndMigzrBMrTdLse5ChFTdLwvM",
  "key3": "2BLbjWhW9pJWzPZwGVK6Mkaf4Xw4eaAX1yNPULDKLZYBCNbkr8FJBfRyKfP2XcUP34hCLg3FpNC9Hm7hxdgEMQGC",
  "key4": "21Z1Bj8i1zCczC5ayk2zZpfWFbQ6SJkm7EF3y7YbdTiX99xggHESdR8NDpaEU2iEuUMW4fvaox2vkcDt52d9XRoG",
  "key5": "pZcYvYyWtE8XL7ssf7fBEEr2AjkpJNjYSpQtLeqYzSTgN5ZshmwuYttBVdvsbr3BmE6W4obHUMY74eybbyHe3Mp",
  "key6": "61uMSuti46xWCxPMzrcyAixa3XvVMRgzW8LX1KRBzt3TX9nVzTKTaQE1csBBtZZFHUYkwxmg2Ra6ZV8vrzEaENFQ",
  "key7": "oeg3KhdQDQkyEELErHZbHzs8sh6WNVoBVsVBH7LrCWH1yqu9i7E4vvCWLgxAU4NA98ST9CL2NHEUVB4tGBftYLu",
  "key8": "3CroUFz5J8kWQkZKKwCp2mwNobinn3tj7hoquB9cceb8eURZyfwgp3KvQCznoxdUT9FYxBVKGqDoU1A98HdRucyR",
  "key9": "47VWmLMmpiTJrgjQamLUVve2chAAZtGfmpEH7t634Zyo3jEEUn6P1MvWfCB3PLANJavKzDx7Tbj9JodyD5FSAEDh",
  "key10": "jjUYsFjpFbx8dmsuF47ebeT7cPdzJbWLbnpTNzJGFrc8rJqR4kuy3zfuGVmwKjwShoZK1mmBCsUtHdRCyrY1uKK",
  "key11": "mqNJGKmBFSXHqP7K98CPWPMJXqiYqHULovm8ajLnk3wF4g63LZJcy6fND98jraJ3hGr8ro9HuFZZuzNSsopGazo",
  "key12": "eQRkSXZdGs7MNJBG3VoMsxoZbp4Z7mv5NHkfgHYatC81KnzatewjeE3MQc6dsyPHDPdVum4cSsVkCWWNGnZoNqQ",
  "key13": "61srYy2YZdx86uZdNpfoQEuVYisY5vqEkwD74B5qG3ks8FnMwDajZQEHzSt47uhbkSUBHGFNQ8cZwp3xPCDiCMGQ",
  "key14": "3HWhoFqu9NnSg2CMTU2cmynKF7qAKQEKERnJSwnJs1KntuXig3b9svu88v8evn3Rb4EDq2VnnKdh1csEBGnzX1sW",
  "key15": "5br1SvX2614PuKLwQC5vWPuvrUcg2N8DdGPTXko4fL1BmLXpcP1fASgBmwqBS2bwsUdG8eDEsSj69VF3S5MWqFec",
  "key16": "3Yx7PckhewpBnC9ctMwXhtQ8fnvCPkJdCUuJYmFnC2BRAEDcSwdY95mW3H6A1XB5KdmNUXEPP1c4NgYKdSufsyUQ",
  "key17": "5My7ToqVDMVhmVLTpoJMDvy5vDXFvMM1dQ1C3eRXz3qsU27BY73BBi2q329seBypxp2CXJetz8Pk8RA8Der7KCsB",
  "key18": "33gyYusscifDvwy4w7ZTyiJuVguonyJZs7v6rSZcXonc64cQH22texGinmfj4GU2qbncYJEJADSDJYB8Wma4zkPd",
  "key19": "693ABkkUbHKrWAqtB7URzvFiX56AJ133tsbA3bCW2bAvrF5DNus5Pp7YGoVfKcz3xYfizsBUcEDtkkUM9Mu33oz",
  "key20": "43hg4ebL8W1qyRWgsLfXWNwZUNrQADH7yeW37QZh5uoHW4EYdmKDZ561q7JmANqQRc3TuUev4wHaxo7hBkL9vmp",
  "key21": "k5DkUx5NaaAButT4ZUnH65xi2mqFGEF4aPX3K5BdrLGkM83bfeyUcP3sEX9y8S19XueDtRVeVSDB1Jh92DnWd7Z",
  "key22": "3MhWAmRDfGVdWj8Zws6dr5KmBRPhgmUuAhTQB3zgzuByc3XptBpMLW5eFgBm3Xmn2bE3uneM87EyuBPN7mcPBqvv",
  "key23": "3FNC7xjiCyhfAoPa8B1moKxetjQJRpFQqFoCgkZT5NBuigA1zU5j6PMSDvPfrPNRPAwSSC7j2De4dNp9HsAKHswe",
  "key24": "54LcBUV5cZmQDB7RtcknV623Z1HJMrLf4u4GYA5GZPNkCkVHcHqb2FAQqomUSVCSkvqHRzTNwEfau1B3LNcENssk",
  "key25": "krQjPikfz1nsU7ZchMEgL96wfiP4rcpi5jo9NnFL77DzXWUQP62CcogNV1fCEMjERgfHDuAyM4xiBoT4GBo4fNW",
  "key26": "5P51bHDw1Vsb1U7LTMpXE8hXLp3cpparmkaChbkVx7ePDnneeXojZqtyA7DbB9wmPbTroEJD4XnzujG8AfZV5xQN",
  "key27": "326RwHFRGoe4wuxjk4Wk1VrKi83zjb8Yj6zZTstXjrXFvauCu5reSLYLELHDFt26WgtbBCRRPgFr7LTywwagqanj",
  "key28": "53mMRB5jEU3rGTccdSJ4ESmnmiTsDpkJwTSRD5dfNsbmucTpENu3FduNz6ct1FLqYFcrM7GnsKXnMAk9U8pfdB1P",
  "key29": "5CFqfEmfo8MqSv6oSdS51A9ffNM6MR7zKxujusXLufiwmWp1WjySzv4mjBCrQPr5E66aVTHtJymbJi7jbpTLVWo2",
  "key30": "3HGrtRW2K13zTAVFr1pJK1bkRT3fmw4KAPqsdi6Ny9EQLeDeysUMJHrihdDkAuHGG2vZYuXStSg9sGT7faVWzFdp",
  "key31": "4T5CjSLFgotBM4XRde6gq3Jyy8XEN4aS53zC9Fh3zFMXDwSTs4W8a9JsgTkBUe21gHRuf2kqRuTdcKgprVdwJDg",
  "key32": "3zS6BvpzMwwWVyDaZLc4DzUfGXJie3CYnNj73zHFCE9gXbrUk1WBk1ohhbKGFxdy1cLH2wzhs64fyurqprympw5A",
  "key33": "2KNRVzD8NrqFZAuoEtQnvcrjXHU6ThpH6ZLXWGvfkKhaay8mAaNskZf85sFoFmvz6sXS4cqRzCtU3Wc57TYC8ETQ",
  "key34": "GBQMnvKaEXREimSPgd3XLezKjRzWAREqsFxfRLtZoRXBEciqBtTttPiUq2excQQQynJ7ho6bwbbbt2Xnc9wc1XC",
  "key35": "5Nx4oVapw7vLKQUVtdBD5a5UdtHXspwnQbsXrQLEwuy1G7Kp4jKHh1zpyQpUu7BMscoJtEVQpx4ApKDrCkX34g3P",
  "key36": "CDCei2EgmTuNY5vSpA9CNMaTgRwwBR8r9eHeMQ2hpSoNaJtsczchpJwKdrtKs8J2vtaqFRBJBKX11oJTQwZev38",
  "key37": "2cMhNM49uAdZTLsobkrTgD2sCWPj1HHUFzHmBsuJusqUPtSvsVkuYN1chHY7zQTEX5bAWMA3H8a2pJQuYofVaa2F",
  "key38": "4WT5pyfsnw21U3fnmZe81Kyq3JKkMgZV6SQLcTyXRF9YGa7HjQ2GLXeESzJiHpkUy4DsN7yZ7jquBEYiWm4WdSLr"
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
