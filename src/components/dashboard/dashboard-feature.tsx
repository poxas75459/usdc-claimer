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
    "5XRy9M86BGrAM1nax4nR6ppyaCzeADpF1dLSpbfTdh1DzKJUBfgAXgoSXuuP5f2zBbQ1hw2v9a1PpiPs8tpgXEBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1voWVsKYKH6MEirWc5y8vsYdcXLrwCykJJ15wGdyHTdeTgdSKk5mJkk3qMG3sBkgRQrTLkRvhihXhmmaVKWyPp",
  "key1": "23xQbx4F7ua2YPZSuZVsJ3gbBc9tHK6FGohptvk98wvoYQ8jnHAJpBfch68YHsg5kFC41hRa9Zm2G1pkStoz3vW2",
  "key2": "3eAsEbKxNNUDc79jJofFDcbKroqP2ZdKLUPfmqi9Kf1n1WtT3bpg3i17ULcq8hvxo3sznZZQvMKqFS8JmsgmMzF6",
  "key3": "yURFbSdrv6MEFYXrQRTcYMeF3XozHScy5UNQRFyukSwrj5o7gkADG1qqT18WsRchzxLJ1gHBBPpb5iRdRDDkpco",
  "key4": "63Ncm4RGT2WAkToEnxBzWnamoeQndwoampVYNNgTx5QAQ1bw8VErh6W15MjU26ACuFD5usigGngzpfbmYqDCyWn2",
  "key5": "5KoMnbGpFGdkwg1sA9rqqhWkey2yLWU5p3hMC4ZUAHvC8Dc7tQ7q6gBbrmp5Aeyvh1M3ASbVzkFV5VMMx9bwSsnR",
  "key6": "5XQco3RMXNk2ZTozL8U1tRHseN6RN7XQCMLnSHcUizQg8UTjSBSV1J22o7C7frCc5Q3YXWgPj9rWPfCvTK1HcQVK",
  "key7": "3jPjMQS2hhfYd8zXwon1u3PPazZkeR5FysDEegdVCFgVJq4ie9vd3q2BkjZMDcJ5uxaqsQBwJT7AHPVbPdwLhQTb",
  "key8": "4ywoWn9MLxBj5voANk3rRw6yYccWz9SBvoSohFaxF12w8fa2NJ4ZptU4rFjdV6hw9kBEmnJjHUajo7u2Thbkxa6t",
  "key9": "R2eHC2cJGLY11KHrUqCGqrG52TvWrGPkTS7XEmjMTLf6S8DYQCt4Nzhkexj6JPmZgnuEQqiMjGu1iJmvSZYP5cK",
  "key10": "5zeE3XNMrau17RqvYZzSE74wXGBQj32c21uSUbC7wuRnh8VtfhSchq8A99BNd2EWo3FyjeBGzehoPiWce1nCtrKd",
  "key11": "3k1TkVaQAsezstyZQ9WfHdyMv83F4XnDaxzNkLHYebJAufDtb3jPDrNjLogudAP6gQfzdv8mxEFHpNMjYoUr5xaY",
  "key12": "4xayqxpK3f2yJJ13cbefsnBakDmtZyMVcLLrZXmeW9SbkP3J61SPc8BBXiNvjHfS3NtnLXnUv2vGm4N2jyxqZJcc",
  "key13": "5Gpx6GJvACrSzRVZGKq54jcyZjHqvNK4EJKFWJox5AiHK7B1jiUbCehP5zgSz2LPPWD8DL6yAzxYQezZJHeaZYBf",
  "key14": "BjQqymSnKnWpRDznTvhHKrT1JJ2obSqB19VM52sbctVoZeP6UWdAvfUyvZFtsppgcPiVPvancecN32xPjBcnydN",
  "key15": "3JhEMZ77B5iKT6uwL3tWy3CGrNnbXmrGsxMJvdERityx6K4PGSLo69omHmd9aASwt5uYtRPyC8DN5ao3HzekQtEC",
  "key16": "2AsXh2VPH25xoWHHQYcL1nevKJpa55ckf458jnbjqWLp8zZ2Vim36VTktWDsAQW5hzzE5ZbK8QywydX6PozvfMM6",
  "key17": "3xn46ma38t4BsW8pwXYap1uEHbhiEUm9f9Z1xwLBUuBuPJYMjHXAyC9uHc1tkhVzoQXZyrrv48xXKQ5T5tEwr7VE",
  "key18": "28G6TDB3ySVZmmqb4LcNoCeo3Wo7hEn4M7MeeZtaeahzXnJEUmGHDVRqhrz8D8QfewqQ1KjpqZ3ZdMpkfTAVpQBA",
  "key19": "24TUwguiA767TM8EssNKbXSzkhEqkDeSCHRtmRSiELyTjENU7kh92zP2qrc48QFoK6kN9HHzKV5sMQf65BiWrrFX",
  "key20": "ut6Jb5p5V6gUUhP6S6aRpNHctKGNrQkFCkoJE6jLsgtgDWHzaC8oVr8rXbrpizKVZLTpNXRKPq4eh7CjW5q9hwX",
  "key21": "2cU3jpAHAdP5UU16ib8NiWZ54V5CsYwQ7sgKhtTAW1QaFuZ5oeGE93oc3Du5niy599A6LMwLZ2L1GHUVA6x861Z",
  "key22": "4f2eENKu7vXwJiD8JnDFg123AZHCDvzjdayJ5KoANDQfBL9R4M8AaaeGzJ7TzQWYc9vW2YZsn3bveH3rcnvu4uqk",
  "key23": "39cTXyHCZJFWJ3YnkF85iZreczPVVfjPW7xvED1oYHvBDioU466dErSVUyzvdj2BGFdG1UrJTZPpfFnsYajUVav1",
  "key24": "2GV73nC3gjibukJLDSARgFyn6pXke6GyvyrZEh9V5Xf2SCqbic58rvThZUxXUKhEuSH6peWibzvMqkgSUdQdQhfG",
  "key25": "2SQjbH4rQ8sRDfaX46opbweKV6V6TuYPGgwTxJoLgkjmsaM4dF4K6ZiGqaWKDHK74PqxCE4XnnYL1mzuyDUXpxnY",
  "key26": "2tGz71jkDT539JCiV6opDV9E8K3fABui2oNp7VYbeoUNxJmgbiLxfgvKDGukYZeJPrxnmki9zT23YfMETjj3CF1c",
  "key27": "4BYTDeBd2zeEaGKUTedPE6TnVQu487UUJ7LfjwFN5d8Q2HeNKVMZisLTehZmN9fHsjE6XmDdTzCRCu21fpmjygzm",
  "key28": "4uKQmwyg1N5pzfRUz73dT3QXMcaKs9cT6sD5QM2SywkqdA6HZ8hmsu9wZFV9agK28ebu3P1YYyBM3oM9vxPSF2ab",
  "key29": "2HsKwYYpuyf62LYyj64QukRCgyLvF54GBoWARxEyaf2vniEAQs79xDGqi93Bxecj5jjCvBt4viUXd5L6xZJpBXNQ",
  "key30": "3eDqoNZa6JtoHmseYfDSBqJ2haLiamn3woJJui1fJtKU5K2RmEmMGeA9ecqqCM2Aen9CZraSNJkbRSTdGb4onxfW",
  "key31": "5FhM9NHqaLbChkxqhGTiK87CuRt87njqdJ59oVKp5Rmba1XSmdBr68y1M4npPzACreETTosfDvrEfdAJPgRSMgqG",
  "key32": "ScXHg5cB8FU1dnKpdjUthkE7AEVZXC8FsGnrGDKqzdZKgey2Kmv2ZGWdnRA1cwJKy4Y7MCNDXoMHQVPmPocbLvs",
  "key33": "4Rft1d9tLLnXTGWYmrzcHA4Jbix7gxkmwzpW8k9kiywKLM82U2n3VQPKutBoRX8Q254f6muvDbvC1GbHLuSe1jjE",
  "key34": "4BWFwquoeL3DPdVB9LzByg4kifp6f8wazYhxnRR2TpTyRMoRREYkA1p11ewmWBFNkTCR4ZFyCuYzZieJv18AnqJr",
  "key35": "5xVBd9VgWks3QHFhgpTJFCJJDkVxXCYAVTjWBrUSoZbw3XrqFnTqGhp2D9DTEko5fspRe32kQiGVpYLtxoJS1gYg",
  "key36": "3BauisvRz8vqPDv2GDdFxqM1gsdi5wqbKaimasX6YgStnqeHggrPU4xKV33wLCoGVYrnm7n5SLvxwhjwcKQsgsfd",
  "key37": "iq6fzA7TUt1SWZi2F5nBFrewwgw3ytVD5Y5VZwVLp8WiBG4MByikrF7t6gFW1Sa7zLh79nDFEDzbpDFLz2nmtkc",
  "key38": "4iAUdUkK4mgzkzriA2n4ez8rC83D1xLB5zYjjmfk4Sn6wNrSvkW8cFBdah5GV7td1kQ1J7p5bTorgYHs3S5jfb33",
  "key39": "4khfPPewNTMY2MPRQiHjEJLPB2poQKx7XL7WrooKLStQWFKnC2v2ZN5m8cmU35ePgLxGbZTPeqg2BqRZBaU1yG1H",
  "key40": "2etLdzNpZy7faFhVtrWi54JoGRVN9tGeE8Q1m7rwn9rfNmAxtd9pkJoDjVRifgShXoETY5udQZuFts1DP22GFvVA",
  "key41": "GV3i4HB26NfGk3wsRLGyV7m2DZPoU4byH5V8WtJfsifppx9TakYZbdC7GUcuqdvm5DJ2GYLG6PysHhfT4KpFGnd",
  "key42": "2PaMnyFjqoPou5xdA2Z6eLpCFxyyRvCEmtSPbkuH5hGWRzapYcRPYgTwoc6dd38yKDzD2KkqDpMYibm2AdZZ8DDg"
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
