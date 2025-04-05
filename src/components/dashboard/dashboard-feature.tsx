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
    "3cF17ujKrdrKFyw6dBqJg72dMH2t6V28gp97bAScnSTBkUKwq5RKqFkuPG2pNNaZBiH31nEkjbcdMbDLED65Aqaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmMaTBcWkzhAz1Mg6F6CxhUmRMbVss9iCvkmDiWdWqbiPRNN8Th5VxJFfyNExhZFYHdp4h9CJzWF99M66zFpbGZ",
  "key1": "5XiCWGTdSCrQ4oL8QgNoVAdNkeGB7H48cYxYhocakWiJ6LckGT5fhC3dFc9SkHsRn7n2pTdfjoMKmEpjvCk28c1C",
  "key2": "ZhN3CfBk1YoSxnneQiA7xmxpSbrYS7m1V6tefy7eFZAunFpGBJwAycEz1AAkUMPb1GuN7xRoJNSV7YvaRqA1mbc",
  "key3": "3tbRcjsgqX6qYmV2617R6YcuRRtQputSCJi6naapuFcWfcaArm3VnrVKbBFNasrSt4JjigWe3vThvGwz3Ex3Q35G",
  "key4": "5tiGvMKosqgiu5vXhW4gyfg4WKHUEf69WvirTvXcheRjHQ5iztkx26kXVtv5VLqgRagtgfs6seMjZw8bhQsNX8if",
  "key5": "5c7gKR88zPMmYhomEPMZWncfK7yyW1uCa8EZ7zA3heE4qTm41kGP6w8qfTBYrPR3G2Vo3QsABuUXTn4YPaiWTzZ4",
  "key6": "5EAtqubpLFj16Ds1xd6LHHMXdiANKoHh4ntxRmwiaa7NGRi47RU8c1iMpjKxGCx26scTWxitMoNGTNKDQXjT6Kza",
  "key7": "3PxUtti9P84YbugxHVxmfTFJhDdjGP6GYg96by65YUiqmrNrnyHJJ3YE39ohRs29gG8brmaiNSDN6CTXJPxQuAMS",
  "key8": "HwcNGDcJParcBm3wXvtv7CX21xBn516mMeYqcdevNm4LBjS82uk6pN4ZGhNZnAte4UwXiWYeyrRyEGjSk75u9Zq",
  "key9": "5JSmG9hkfHGH5yn5GxqBTDz2d59dn6C5fWNvSKaHuR5GQnrtaoqXKarkpKXqtjwwTiUE4AhWfCtxptpZvjyD23TA",
  "key10": "5pJK8sb8xduiB4LtN8VHx8rJiiWHDcCe1NbS6Sg6cjz9xUYXjtHVMN46iv5qaHF2pXRZpK5JChMD8mbKmSqLy4je",
  "key11": "5WutUwBeKxn987T4ZgbJrVw4as1gjYrix1cCvW9Ly1cc8d36NDC6HEimphGxkRM1hYhyhnBkXYHyGUYwcKEKJpy9",
  "key12": "52STjCxStt5Yd4ajgeLSNkqqaKbEfHyLekKGBYB2akVvoNENPmeja55YPAYJdfbF2ZsCnz7D1pDtn2iRzJm8Fjj3",
  "key13": "2UbzVfxbDNgDynGJKsAbfA9qzb1R6a3wPLqGYD5YKyjiA9vTmRigv3mHH2Tx5wNwxydW6bsqqD8tJKv74EV4C3qd",
  "key14": "5yUyviEGorP24rMYZrg975bMW2DHUbQTw1pFXfsp4Q1iiEjfHBG6bSVYpxBmfn74g21BZpL7XqhjTxjwCbWRQiwt",
  "key15": "2fypDmBZHxdaxGwpoVmdy4ePt7W9qSkxcu96cPUdJLp8VWpLsAWf7QvpwWa4MRE3r2pf8v1wcYFyC8iYBsuNGFGi",
  "key16": "4DATNa2oYai1PCvqJsuD6eiRNwgwT6xdzL8PM8JuGQ3QpzAa4mg2i8MVjwCadvKPyUzPfz2mzQSogNLVpbH5a2mC",
  "key17": "2VaPHuV2AQXr6W2wFQguo56M2dfc7oRj9JjhgcJMtDCNi3h5PEmcmkQxcFMXuTSHChzAze9YfRWiRrXr8Ccy9pV9",
  "key18": "5CGjH6wJLtgsDkhzGgEes8q2mRtaAemM9Y98jbHi1FQAH6eoeTZdy2wr15tvdLvUi6PePcaj2qYU7ue8zVH6RcDK",
  "key19": "FSD9NiEzGhfM6Cz6LKPWGMi8VfoLtUfWA2cAF2kt88NAKX7QiKVTDmB6cjSrhqGDwc8XkLjY7PoB2iFWkf3Nr8r",
  "key20": "5KMUhXvLuoQFN8wymZ9Yg24PWUZEXHNpqGvTKDZunYKVXKj44DN9yaFJWDG9XPq3xXuxyRQKtKCby4cpswpjqam9",
  "key21": "5DPeWyondUjvJNJVcru2RUWUnCYq7YmmcA8vKpgP2TxsjCPrEkd28gKBCbSjx6bpWyGdj5mBrxifGXGfMDJiEWJV",
  "key22": "3FJgBt5abahEo5t6tsmcg36YEaJ2qi6tJeMRzig8rBGYJAJEJDDZYrSV3x6wJTK8aD6HnqHXYmGLFP2HiBeYgZE6",
  "key23": "5HkbVcBzMPe8X2UxXszdtvTBp9aR9daeDn9EnJcwFWmWs3RStsAVXdYH3rMcvKWqzWsoSFhGAHxFhS85cyMPEwzT",
  "key24": "4K7bGKkSNyg882t78NLnTiCYtyUuErnyqHML1Txca9UvdNcARnBzEAytcHiz5peT5XxijZSAMmjwBXtABju3ubev",
  "key25": "5XnSZGJE8h26Sr9wzhKnyi4DYLAFgBT4VKFZunYxr55C4BRJx88XXq8f94feRPR8Gmm4kPZgHA7VUgy7ZQtUiiQf",
  "key26": "DsunAVcGVxdNzDGRy5aN84kUaKr3GNEehBqcFDvATiiVkz7Quipc9tqJae5bZwWtBimcXaPX3TU6Etac28iDFBG",
  "key27": "4s9jYMpnav6cz5KoKiA8jFjojKiNT8QPLfJSwapUbZ8aexvGRDy7NgQM5ZwmxHrPMSJCvRamD3sXXQ3GKnsCSxj4",
  "key28": "4LL1iotrRb2oSthkM9YHWeJ7pTevx2mLxcZ2bLW4pg72Ztfmwx7831SKc6869QFxmvchupbwNqw6ycsk2opEQNVM",
  "key29": "3xGQaNMWnCHcFvSUyLA5jjKUvNm42p3PmGmheCPxvL9gyxT63qiJmuonVCcjAW4UupawXogd7voe51bowniLNWXZ",
  "key30": "3SEgXkHJTUKWzUWQ7jXK4DN12zkh2ZnkiN5mGynzpj4pAHGoGM3N5Hb5cY1V3Vtr3s5mWaP1MKF2WBPR3u96JHXX",
  "key31": "2T5W4tBdfji8pLBbzZNG1kW13sNvyy1y8YE7HPKHDjGtAbF3xGynNtMMjmH5ZgoVw8zPQChd9jMUwviBfYDnSUEY",
  "key32": "bDBqNcWjzL9pcBN7XxtYTt2ewhkgHoqVvendmpts9WZw3218HwtGi1nbQFz7s7QbCw1V6eSakKaGNozCgnc1gcY",
  "key33": "5aVbk2mA2Sb2CbtEQAdzpB8vniFQiTaFNRUhgqSS6JVyTpWNoDoLQaydmCroKTsMyr52e54ZsckfZdez9XyrGHQ5",
  "key34": "xMRYevwrHfKozu3n4wiZiuwWVVuHUe4cXGnLgMknkWqajWp56xnMxVFxxBVxmB5EE3upvgG9iguHCwrBNbJmLuA",
  "key35": "5mecWow1RPTgjyQMsyTvLFBEDyjLaG3QN3u9naiwNCDaG7s7NXd1CcdXh8KAL2rCMBsm1EiEQp9ikuXJRp8R5Ved",
  "key36": "2eNRVnzsf3B52i6cbNPH3FgwG7kQ53zaNEyNE4EriLRAhWhVUeAkf9mf8J7BGtyQT1MDep1ZsQ3h7kbeyX1BNtiP",
  "key37": "Nu46YVfU4ZDEdnPPkPs56EdsVwG6rMVo2ZWPoDeMvGdb75F9gZppf4TUgTJCtmUuASvMkiXks7TkrHfYC1mSvd9",
  "key38": "225uF94YGLCVuFew3dS2N1ft7fghtc93ycM3SiRdhmbUL1QhapBeobRXA1dvgszhKRA5De1xvVLT8URwipwkbz1X",
  "key39": "4PZ91WEfGa2iyFSwWbsBNWPvid7qTMsQZzmaP4KVRY3XpYH48u5dTyrcUvst4yVgA6LLsweoWTE8yhqpszkTcn3y",
  "key40": "3A2rUdtA8qMTFMPi4rEME4sjecgiPGuQA4oovUEGA6oYrUS7YrMUPFuGpFUNMav4CGMFK61kebnw6mYw5XTP5wxE",
  "key41": "Eh1NXG2n1mC9SzFLqTxX3hb9d8Qtdy1gKJiKh3vr4xUKRcFqVacsJkwavME7FEbdfFYS1s7fKBqrqo1UMLoYckZ",
  "key42": "5mWNmkUWxB3cWARm9EPP4JLYM3svsteRamwshqt3cJY9J8uhZiWc2eDD1QLWkLz67BBcfEtJoAQjw35k1hGR5842",
  "key43": "KRUfGasTLxt52j4qpEWMHPfJSAhs7ZbwnXe8weWZ44UqjzBwpDHTJPeEBYf3viv162aSnB8tT6jqyc7hxaLRzif",
  "key44": "2JAAdiSEyHauKcTE6prQA11a5gzb4RNuic2HbJeH9ERhvcUkE4Sga4YjacEWDZsxbvp2MvuXFkghhJN7xJjsQVfJ",
  "key45": "3HLqBAtFddyqDZGoJxsV21k39PkTaxP2Hj1nwe2ytHZJo8LRGfXpbYuZf2mpqK49cGSGQnSXDcJyfJHQaVKAeDgK"
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
