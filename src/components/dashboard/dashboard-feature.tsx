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
    "4yTUt2JAnttHSz9yYPewS8XmoCurow43DSU1CqJpRvCuxEFsUoHBwmh1d3NLHt2g88HdKcnGiNnD8GEYDAkKD35a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YpM4CDNvmC1vZ75Hmbyz5vepmBuj6QWZB6q7MdrbgzYcUe9MfDRoAv4pxHbAFWQCjSaZkq9jfb41259ZA7trjx2",
  "key1": "5C2rrEwp2JwaT2LaHznLxFFa9CFWNKxsP9eijkWpBr4JjSdwVEsT5Z8yBoFhxLP3qoRAL7rah6aFxNM6RhT73MkK",
  "key2": "4c4ptjwfsdw8sgMZHZVVCTzSdJLh4R3UkfoCoAxhiwwizPPLYCZDtccZJe79M4NctSkD7N4dMYGi3wgj45ggMpvm",
  "key3": "8fiKrXwKgids2XmHWAXt5jvcciMvo3BmcLsfgLHkpkQbW5aNMVecdUfp3G8UsAtrUaPo6Ph4zRa73Ce47p2Gy8E",
  "key4": "5ZHweeeGwiyWb7Tm4NWMmLUT3chUsg1gJ3Hs4EuD2PEz6sWWXkpd5dY6K1VUL4VDRcYfm7y24soY1pduqKQqRKHj",
  "key5": "5Wn2yff9rEDjf4QxNEju4jGHQi5oR3HBNjorVQYfRzvxXLTGjn3Nbo1U28QARtLrXXcc9T1y8VpAvJDYPSVrJtQ",
  "key6": "fn1txqaFka6e7vr4oJWDGYNwwVVfHVeyPfumL9PycivzYEtNoFao6Uhm8L9NMbDeNLZYpXdDngP6mezSbrV4qkD",
  "key7": "3d3rMVPjN3czcn7aUovZ75xzRmZD6bx9B5CU16K8b591Fq8wqXeST7MnsM2UnFNS2YHxn4P3oas6PDTecU5d8Vpo",
  "key8": "5t5dhtuGBqUt9d9mjwQsMe2xWRAWUHhhC9dr2BKfuj2s9GgJDBuHkVUgQAMJct9GmkuwZhx2Z7BVsQsAr33CFfH5",
  "key9": "URdaLKaP6vnvCy44oBDkqxHJSueJ1iiyRLoygv2S96io6WwybnmqU56yecs3P6mSomRnJgBzMGLiAYpvzbF97Ay",
  "key10": "4rsvAYoGQUW8s3NHeKGteb6BPZh82TRdmN4hDL2R9ZKTPuvBzYFhh2MdCNjdrhLbu6b8TQmeE2Mr51HUYnHhv6ei",
  "key11": "2NjC5YLjd2Ki9cuv4maUiZCFCwLJiACxFUJ6k73XrW1iLEbCv9HonPcnQPSSrn5wa1zyDRxUTk1dQLg2NEEHudLL",
  "key12": "2qrFKzc4KTtsjM3rtLFYYvkUdLgPB4epPH7csSXgNBuHHgmyCsbbRsgzErfXEtH2bB63MCMVqzyRo18fuMvsD8P",
  "key13": "35NMb3z1TM5bVLE7Gmg3xD6k4UByGBjGSvb6At3No6YZBkVANwpnvgxe6uPp31LnZfX8YCLLkkD9tnt7H4qm5Tvs",
  "key14": "3VY3Pi2LT6z4n3F9Ne95GnQAxNeri9meUUdGAyidCPR8pDcfUEpvPVWZDxyweYKk45RVWK5ufVJNfRt45Ddr5SeV",
  "key15": "5wbTpovXtjjgknxjo4SkPv3MERdHmwxbcM5F8MfELTq56qdht7hYnT4JM4rwor961x4yo7iA9Ci5SPgfZxg9yEtJ",
  "key16": "hpZycxHLhYNrUj4mbRjAN9DAd2UT1Upe72tkRzAzzQPCbQGJaqoeU3sG2NmNcR4LfFm8J4xDC1GdzLp7TUdsBdV",
  "key17": "2AsAwTY32eU9sT9BXsE5qQLx8qLTCneV7UZ6rZA8MFGf3jQCWZtfYiitQaxjtMzt41CqnZJkw4DiTgvy3aQZBGU1",
  "key18": "2dfeygzzDZf6sStmxtPASA85LDXtbTB5U3t1GTFRMMdDh8PyfDXT9fuaAJDdURFmRFwMqF7Zmoa1iU2wKfhqShrW",
  "key19": "m7asu6jsji8gjgdn39fwZFsUkdgf7hWRPCtj8FAYnRykyikmLoyQ8treDdiGkiqCdAmFFTQ6rW7zMzNfnCeoQUb",
  "key20": "53Urrts2EFAEBLF3b8Uo4bUwAdiwJa5CaiD1PFEg8BBV4CNA3wfBvkQKmsUTHGHv8X4mpRnMKDETaLfMDoaaAYYM",
  "key21": "5dihDYHfQfqWymmYZpNj4oGpMQ7sFy7oD5n3ZJ8SFiCvh1eTPqYeby51VFiWnnnd7KKVC4NbNMWD4m4Lcg4C8ovY",
  "key22": "SXaodSZar5kD6uqD26c8hQUibXsrySvTk2t3YtQCikY8EPGsCCsocZDZ8W5A8v5DyLarNtRnX7mrk5Tn7f2Phtg",
  "key23": "3TN2WdP6gCx34cUuFQ5ie89CnU1vcVjhWWXGVY8suBf4CixAbpfbDFyNCWwxAieKng2DAvbnWzeRrn4Z3AuA12Er",
  "key24": "4eFdUWEfwCjkp4AoUCcxsw18mhPh3bho5Gs7XFsmRxAVmBpAcsrhN6PRJwxmgp6yf2X84SqPn3yLhqbbLXa59yeC",
  "key25": "3BC2UiGvNRw4LAwN39LPWBoo2DTF2eTwi4YkCPFysmCeUNME5cqNaDKhszrMsfKjYqKJKoDxkst3KJsPV6NJePyt",
  "key26": "XzWjMskFnq6YR4mrYKwXZP35pH7JGWbRa8gtV97dVmVvnJ8m5SqVZWoHqd831pUw9oSi78o7f5PkJeccXSzvRG7",
  "key27": "b6ht6zEmHSe1mRBnYe6UNLfgQDkM1ha76fzgAfChz8r47zGnM6WZ4MmycanHjGS66TkeU5SWJXmPS8GnZ8fnvrW",
  "key28": "WK2QWfPGD6tXUSYWbfcKdNapwSpFN9vYfeDoe1n3Y1XNMgSnhCJKTwqzmXX6MjKojcvYDAwnPfkqWqnCbmEaaVS",
  "key29": "5cRh8JRwtHDLXVbEmVGm2H6bDQPj4Qdbke2Qp5J9VDwkq56xqnHvtmHAGJedPPaNxzXxDr8gv1N38pBQrfiVYRb3",
  "key30": "2JyHUXF3Tj5P81svCQCtZGK2ZscW9SrBAeBzMy76A56D7bickmrGZvu2MuEyKQadQSnRaicR3eb5zv6WYKRHRTFG",
  "key31": "YhBfHcBCemerZW1mA24Qu8RPzGa4AUbJMzpg95Wooi6fyG9HcitatHZkH1ovT4xoS7b1HN2N9QzXmCnq4Hxdkq5",
  "key32": "nTn4fYfYPYoxkQMCMB55iYRhKExNDs4wD9Xb3njK2xMGVhmGoyaMCVtHFfmwveeV311Rp8RdiaEWSEFJowFzgXc",
  "key33": "T5nfTxYyM8225XoReh3qeRRUgPqWqDCBKhyWUdd5QA3s85JuV1sRWB614bnJCxc2SttTzHVHqZzTP6ACh6hF4UA",
  "key34": "2aWDJg3Bj1yS9rBxpdAPWKsV3FdN42c9GTZAx6y2x7FpwemyDjy6FbN3fa9Kvy6oPKBghYv4n2LWrNjp8A8hCDKH",
  "key35": "3MgdgDoMf5h9vK8SSQM7XbHXZb85yLYJVn8juua3cUYKRKxnFTWBTYvgPKfUReCcZftC1RreUmkdDVrKNxfC8YFD",
  "key36": "4DLxk2C7PtFEiWHuBASDBJbTPzzu7bPHbhAZVCTwjXWp8KZ2Ef1rewCQZwSJ3htjiGU57pYDnCphwLJXUYMFMsYQ",
  "key37": "qvYU61Gj9EkHFHSVTf6tSn2m89hXF2aUbS4gG4VWt6HM9AvdRPf6VpbCCpuBUQqZza5JZ4NyY1m9GGCaEwMA4SD",
  "key38": "4LMZSd9D22sJzmZE2obqvgajQRhM1p8q2hX6jYbCjGg7vJ2xFLK7NioyQBCGDrDDWGWuSt9Tc9gme7gMZwDaiQ6s",
  "key39": "5s9craNY6K7U9nJTV6UGQscdoVzjRVq9DuwvLNFpHU2xCW59Cy56go7P5fwjXTtPPKdzE1mo64HnCNm54rCS83TJ",
  "key40": "3Sz2qMeBTymynKEYuFEVp9zWiZz1yBanX5RKvPsGjARx3SMsmPkJSC3xrTaki1DKffmP6pm2YkZw4py4crFWooxX",
  "key41": "bwbBGqjtWNT3Thh27u5LkPpBAMUe54wPZmimgdRRVGuGiXw8KWTUCwELpeCza9s8x48XHrM1cppGRnvRh4Q7zJm"
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
