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
    "2wxY5DrSapqvD6c81SFnVznFA6mkRzrzv6yfmoZrjMQgYy356XiC6jYMYFScJQdjEcyzZ51bmbnpKPyfoetVesHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rS2Q2S8BmnWH86uoJkr6kE5LeW698rDvqQGK2BmrnSENMPPXajMNZt6oEp4eDL7ThQ2QWNUW8Y5cLmj8uzQ3mjg",
  "key1": "1npULxjaksXeWfPPRP9RJxxgdBwuAsifrv2po9jeAGosQBEPctubon3x4W8Jx8oconK2AWWhyHt5nasjho3JtcT",
  "key2": "2jSMU3ZdWXZSWAA7KUzXUM6RCaN1tnk5pV3V1BXSK1kuKVk92Hqr8rFMbw4QqGbLaoh42TqQzMYoz4dFzaN9pacm",
  "key3": "EfywQER9phFSTCuQF2UJt2GDYi3WqpnLbnBUPHGt2Sb2ZaKu2tMnpTqEMQrPtdAP16uFkYUXk8LzdMZQ7523t64",
  "key4": "4iu6xReeR7R9td77eKETWwrG3MSAPHhfzjvUwF6u9XZNeQkhfUwrXpZSbBkSHhagbtEHUK3aJ21SJw1y36xeCp5J",
  "key5": "51FAj7gxttvnX5kE1BpsVMkYUe3gD2fQU4k1Kc4NngKUByQeDCb8oj7xRL4TF3ceqcqKi2eCua4X31ujfT7aQFzc",
  "key6": "33SgdFRHNu38PsCmxeJi8uk3dTu9aWvhZULQHj7GAS4aDFe2Fb2atMEi5yNB9aUzopFbVLSiNsj87yJ24urTycEj",
  "key7": "4H2rPSR2QpfVJRNZXEMcukkpHd5hBHf8wZm1AHvbrJGTp1uPpVsvasPva91JEQqborK7okhFezBMQdmtagRSTR1i",
  "key8": "4AXmfCKSxXLELpt5rAocnZnXFVwZiuwPoxPBaVycdoBcAtM5kyBBivV2xVUk1rYmqRJeE8cHXM9ZNZM6BaCUkEP",
  "key9": "4RwGufXU6oMGzpQA5SacqDD8qUzSwz1pqhSMJMR7vnZdymhYKV2kqGYMjhNBXXaFUp6JZ9R4pAfKNqkAq5FabATf",
  "key10": "45sz5piNKQYPaipBEkKBSRCTLyJiX6UBMB6miUD6qcPc8Jsb4m83UgykPZRSsSS63TCxxAQBFzdsWBTcT9YoyPAX",
  "key11": "3FQoezFGtQm3c4J4xBCTh8QuCdqciuP3pXTZHM9fyxWgGp7BnpjSpDnYwV7H21RvfymjpBr5meJqWYykZfNF7MJL",
  "key12": "hxTrxJvfgW5rUi2cPsdRsC4VFCiCK4J1RUHGienGT56nCCqpx38wbM9oRhta9N4WjdjnnusZRunhTgyCNDVv2vz",
  "key13": "66E8AMFusVTpiaTv5rHJ9MX2DL5Zemj38feEiW6v6DZ2GpDrjvTHRmYVkmj2P7ZKPCQg5wp5ySZPbxDQ4Gk1dusX",
  "key14": "5VBK8q7Xt2JH3CRXiaQYFaZaSEt7iJ5df63VQ2MD66J1iPuB8XQ9HRY25U9V93kWSLsbYCno2XCZik39DVyzVVrP",
  "key15": "4w3CZ2q1vktLZvF835WHkCeUzyk7RqfzZJ6fmntAACMjX4mqzhda6EEG9jQhTyG3Yn71gyUd7WUCuXiDyd4W1oWE",
  "key16": "3NQoq46ng1U4Xxbx7YFMh6mF7p1CiXwRRYShRoUuHeNdsxBjFdWZMt8hu762jgi6kk7oFY7XeRd9kZz7Jdp5wAet",
  "key17": "XfR9wAcYmrpyJur5tEw9Cd2D6WeQ4hAN3Y1denZtUwzitqsFT2jzmCTnq9uaMccWTjmVnKnj2ZKV8rLJAybrAa5",
  "key18": "54XxaNhNe1rwV6z6HbHDwekSJhhDo5Xzqq6d3uNCP4RbF8VNp9nHkNLirSq3RyNJ8gFvchZQPXSPWMYdF7U4QinV",
  "key19": "WYFxAoHEBqqHbYTTvx51gaybvAg1Gb75ZM1SytDsAumg9CUwGNsyikDTewuNxx7Joqb6anRBDkPa5FEURT2sved",
  "key20": "4mE9G6cpEMnamhXRDP8yZ9kKPSZfsVsNcjtH2LNXHoZha7K2xepuTMpmfJXYZBhaPdvg69tD1JGWSCZxGevjB5MA",
  "key21": "5RFk6qUmcyUBofXBAn2wNDEWhvAWQRdyTBhAGitkKMPJxY5sE6JXSEy8BtYKetr1Tu7Sy3NhUhkoMBig1AY9EUMg",
  "key22": "4BBC3ctWSHd1tSGjc2Kyzfs9YUHVYwXTkkEi8pN4qadM931XjcR6yasTCHtCYjjkK1xM3szevDQV1xcmqBFjFY9Y",
  "key23": "3tFSiy6gJDCD2hFBHy9PEZs382ofhM2tfDsX3cuYqpffeYH8TfFWp3cp85MtsLmPL4SNSdSHNgCAhkVhbepvc7JE",
  "key24": "5K3ieMsmJVwc8ZWkg6RPoXPxLD4EbVUo6gEfhk5pGCj6qhh1LxTZrSpHLvatiHG5Y9XA8rqab65TjuF4hW7wcJ6m",
  "key25": "46XUicARsFuL2NTptxDR12TFBaCUtwMuS6LRzxYhy2Fy9yhwqchPs2EY4ACwR2pftcvU8hJiC4RTwqeHbcibSS5L",
  "key26": "c8Mjf6uJjta3MYb1VdRPZ85BLMp1pC14jFdGSN3DXWbJbXStqBUWgFW1bWpYLG4JBFKGDeZvrwuJz7bGnVC9MS3",
  "key27": "3GBzQAYEQCcYCA7i6GifFPgAD2qBV8QK2vhFqFmXpfK1C2DaWd4utPeEUgFAVz5cURaYjXFda47CmtuFyEMxXrnL",
  "key28": "iFLLAsh6dKUVfbKwWuXCSbmRCieDLguLEDqADrwGu76ho16XSA2MzBvhW1ZsWJSeUVUMDnHBJDvsoqzDyouPPVX",
  "key29": "2fDAF55QNae3BGbwnR3WCs1L5XwfXqhRMdrEMSRA2V6TscWqiaJcSAPdU7RskjS1vTk8oNGgbLXMLcG7HL2MQLrJ",
  "key30": "4fH5HxTVKq47Z81AkoQE2vXUbbgtNnko3zLkLRzPNdQvWCayg7ips8B9aeP2KUM1dD6gSQ6zQ7rKKph3rRYeYocQ",
  "key31": "3niQGMi8dS2whBXnEoGWtUBi4tXnwtehLXE4aqBN1CxrPDzPN5NwiWMfUgwyLp7zadwj67pV48Dj81d7X5xK8Z18",
  "key32": "4Z6dAwYJkENhjbXtNcWMRHQiXrqfyfBmf1fuh2fxrgYFDuSHDHffG1ZAhLmtdrxbPF46bWthos6pgZykW2WjduHh",
  "key33": "2YcCCvozWBLtXNW5ZPGunSDs1DQ31ZjBUMutAvFq2LZCTcRWJ9kjjk3skN4WhKddhm2N72b5t3FNCFh55KsTXvjf",
  "key34": "5L52WjzzZYLAbb1g27DsoLGdYqhFj27sMbQHR9rXA7yPDeX82VxBoHB2MWMYxMmTo8CJTrdiuXXqYkdB1Zriymjr",
  "key35": "5Etk2zGEBJPFSWeoJKMAsAjUA94766ifAWKraaPSaWgmaC3aWpszDr2UBaDMxvRgoitpkQvscGmuZJkoKH7GLidL",
  "key36": "mLQ5zGxvBPPt5vJxeWy1J1ecg32QWBjKV3AD8JUrfGcch6gaXmGBMRvqZcwxvcR2zEo6mdY8WYFDQMdAp33KPfN",
  "key37": "4wd5beqWsvGgu93YqQdfQWPuBRNVuC394vSPk6P6fXLGGteuA4nWAFn9VWiXKBNsfrhXto7Db8JyAaiyKe4SL4bM",
  "key38": "5KJZYXywjWR4FHNgaAKyBYwsDH7vVUxvdAxJW44dDxx6CcqJaBfWwNDu5qn9Krp6fg92hSFXvEE5SosFWeXhSFyD",
  "key39": "45ubDpqiSUdYdtyDnNXVGJxvssnytg43ogxoAjvDUZktwanTtCozP8CF8cj5KXcFLi4d11PqamxLzVWm6MLqtEfs",
  "key40": "42AFZXup2tTt3rGN7sgyN8EAdwoH4DWd1srGvz77AMaEv9efEaEMAsqn8DWnvBYg7MBHcMpxPZJF1Js71qULpg5x",
  "key41": "3p3wj82zV67rCTv8wN2dfepTmPRUeSHGyKaaJjSRSMNK9rauLGigziiRKp7uPGYQ1fiE9nqirpp4WhK38Mi4b6E5"
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
