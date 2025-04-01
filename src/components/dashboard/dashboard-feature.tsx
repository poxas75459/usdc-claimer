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
    "4Ewg9K4nXWBJptcGJZAzQ37NBfpoPkk7d6TDHDC7YNHkEoRvLgC23mdAkZq5mDvgHcc1TqSG7TMVFED18733VoPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tpxkHkcUsX2bep1D6LzY7v8x5obR666CZxbc9cvTNQkEe9sLdDVLHMmAKD273msvThY5ysaFyYHzd6xPsY8Zem5",
  "key1": "36mvNRhPeKNqw3z3yvooiWBJwasqaGy98Zyvtwp2d8Q6wUynXsq97jjAkNmsds7x1XNgkKF5SS3dG6GbpD26vC7M",
  "key2": "2aGkeEUzoMHAFKeDfAWemnstVWc5Pg8nC3pHpt7i7aVUzhnaDTAGn1TUikHnWberQxaA52jSCVzdeK7DJdwhCwG6",
  "key3": "4TxfcTX1fLxFzYDjBEdve1b4kysSBbJLoq2yrf5vbo39oDf1WjixyUdssMXDPA4wGmiFiJMsYfRgkSk9kwv6eQsw",
  "key4": "PnzVWLm8HyJQSG8drdzxrC1QjLyo4RFwYC6ozzCw7Sa738GHwNmhUdqUcCyYA8KKpGiWM8xtF3RHi2FYLCPmXg7",
  "key5": "2rP3LoRMGQJBwXJNjaMpH4D8K8xXD9sK1JnoaSCHywDUoCPdwDpHTFRaEmp4REdmvq4FPxWR9gdwXEYbC6WPYTy5",
  "key6": "5Zw9bkqshDBrT9gxiXRwPq9U3Wh3zQxhgTEG11Nhbfmjz98wcZ4PFddusWiNU1a8VmuGbkW5qQLU8n1zxv5r7Uo",
  "key7": "31gBBQEUJH5pZH8SCgCNCcUehJNQbKzJXJzQp5GF3YDwqgneT2CnGhgshQD4SrFJ13FWD6DjQPJKyeRHsVbXCAQS",
  "key8": "2LFknviDqMj2nHG17Z4K8ekh6rnrAJHCFW9cCiM6129yGpPeYrhUpsNCvHJB97pD8BcB3muTDiYFEVNwFgphoETH",
  "key9": "3JDqfkAJYvuJMhRtLdrguw4XvwpQfgSkhWAFc2owtkzA9CgXRXneG4ZFjPNEc1uwRKSXFcBvMLvTMqjVPGMyQuoF",
  "key10": "2yLXJF6fXEd2HFByzGLxgGULqAenuSt8Hk7p2HgCZqxk7HJ2PdJDVhRxeFRAw1xH3v2dooofnN32mqS5oG7hFXef",
  "key11": "4nyJ6quCpAPmvyxKaLLzssZ1HccqXFZ1Eca3gJCaCocvyRAc5Yb31Tb8Qqa5bRkCv6LuoYwqp2iQiYAE8rKutQkD",
  "key12": "4AUHmMrwE6R3NhX9PgPtFVyCjtzPyrdiuhW6H1NpDpYoCXKYtMjyViBfzaDzf8asnvaAR9CYJSrY6eLsrcg1veMg",
  "key13": "43sRcF9KhPQ23sUAUwGgDpxtS6Jpo7xQ48fLxuEoB2BGkWU1Fia5fdoBku6KFhL83eu3E43TfdASxK9XVtgWia5s",
  "key14": "2GJKpsNMsxamLNSJTZPgD3oBrxVaGV6g4Wi65n7CjNMg6HAXPbdQiqrqbNYwpxE47GfzYqGTwriwDzotZ8kSdhCw",
  "key15": "2zFkQbjakWgBuu8Gvjjbg9EYM24BDnmMrvXxMgMaWc5yKUCnMYbNgKo98MPCWiX4Vxf4FJcGestyWVjbKhSVruW2",
  "key16": "3iDvanV6reHU5x5SffxJzDXBB5sWcd2b5Rwb6cNMmABnApELsAytRks5pESnKSWLYR4QZoF6e4s5EGJVUqA1T4K2",
  "key17": "2ri38jTrjtVyV73ueigf6QwLVYAiXtHHPtfcfA6NgufsQcHJ6jC3teWAox1assQ1RteaFLqUaxu17HP9izgxfAvK",
  "key18": "2rhqekbeEELSY3q14dfQVfuxSa53hNQ87XVhnrkMCcd3hjmwPay7QGeMFAVh1Kc3HSx26LA8eiDTm9WGTjTYS8gC",
  "key19": "m2yYDH5dmoH3pi6BRFcyCZbEjrZkmk9W9Qa6s3tSaUVcDk35XQKLj5JAvyCy5HqGsTQSud9rfQeDuGsiXtTXDam",
  "key20": "4YMRooE4YyFSy1vnoivtw5T92GXM2EHFAQSHUz4Qihujnx4GvbBCYQc5Srjj9rJ44Ho766XaXpKZASk5dHYG6CVF",
  "key21": "nL4iaf2ZKePsvGGmN8NbnGrqM5p9f9Cfu9LSm1LycJaAqgeLpVUzPfm16JmMtL6zfV3hbyx3m18axwBt7trqamt",
  "key22": "2jQnFF2dDBoeKqcsd6vjh468W2sUByigex7V1MuPx8ErY2edAAmzsNefLiQDfKCoASvgfJ31yGdqKZJd2NkB1W3u",
  "key23": "4BTCRmfxoeBWPi6LQY899FBVMufUEMp2L8vhEukyccMadYH3bENuqVQkPH9HFWv3YZMNkJhY7dQoBWgeskLxxrjj",
  "key24": "52CG3G4ZRFoqT1Y4LcRs3TsmS9FYf38t9vFQsy7UNrNgykvrciAUw5BthuuNXcmvzRqcboFgeo4Gn4Jc77vUixoJ",
  "key25": "wvvWhg57gr5YBBNsfcsXvicD4jf4LCCSm62DAZS9EpqqykQt9i8ZFoGNxSYLdy1RA2pApoAkVUC76ufaSgHLe7e",
  "key26": "62PGqMnfSchuB8X46UcYhS3sL4NeAzxUAhZ3q3kZKX41YUhh8gSotfw5YZAyQq5AfLweu2cexmrSUeLNeymyaZwT",
  "key27": "3yBkaraYS8VutonJDRUp3GtnKUbSwRBNKDKyFZ95cubSt6ijkfTGSC23cvC6TP56jTgMjEn541RjC8DKLEiHYc8D",
  "key28": "5oHd1rBksp3DNuj7uDrsbDL1Pg4Vbyen9zHaC6RDxC5gZTeD7FBvy4CtKPMKZXCR4cveAPdT1fHz9VCUxPmVxKwB",
  "key29": "2D1b39yT8VaC9uAdgkwcHyNNrQmWQRz1s7KRXEuYg4QEKnT68S9LJitrb4mt12aA4n3B7MhKRyC9HKY1XcnDbBX4",
  "key30": "3aXHxhTEtbnNvsQuwHPfABSPjG5WWxbJoP4Yo5LUUxpXjWLaUh5fZYxasq3Rgd3jY6tXps8QGSUCS6nJzJJRx2qp",
  "key31": "2acUMpjf9yMpZDTazApxt3fCN8EFexQaVm6rFhojrNhNQ8wQLCYN1vMU1VT2JTpjzJDs8FmieQbfCdysQ4eJPEDX",
  "key32": "2YZ9eaLTwLUqzBXXEurW5wb4ik7EmGtaMtg2rZPXNVLTEgdim1GkefgsFb7wBxDqxLbAXdiUMW5JEw5zimq68K1o",
  "key33": "yRdixsdkJMfEZDymETNCc5PrCpwGXMjwgTjuHeLigWpMJ2fanW1AgHCW5nxfpW6vo5MvdiMXf3qF9dCfhmMgBSS",
  "key34": "5NJ5VZga66GD9CKoPKk1mbEEM4rnzHYDgm8waaU5TuVs9RphaMt5Tth6sKLEDTpJzQ8spToNu4cRg244ewKJRi5H",
  "key35": "3FRYWJgjmC3Ho2X69eJTvfRNU2GR4dwawKXhuaE1HyzUHC2mwnGxuivdcWKt9CcRAzoCtwE7Cuhxr5cpKtrkQaz4",
  "key36": "3D7rDKkXxXQZEZUTxR71pg9vfy3Fbgw2AMYtAjP8tXwBLCuq7VuC6R9TfPhSdAvgpHqq3pUFjx6Rai9p1bQqmeXT",
  "key37": "uBBL5Y6e1vCKM3ummWZsNMy5EYQTApvgbJuNZ39CjxFi6VSgH9Db6oijAoQSp6hd7MMN3MFEbii2RLHLn478aes",
  "key38": "4aTSYddCTuMfW1pg2PxqXXpXPf3AkuYTzNpEvmcTgud9uT5asL79KNRSXS2zycoohZP1QvDJ1sTqDLzwsChv82UW",
  "key39": "3tbm4fe2jUx5BLbQpah3jHo5MXz5M67iRTfd2TgNHd7HxNjNVFMTDRAkAm65SbyDPrNgTFVG8WL7efMbxtnyRS2B",
  "key40": "3YwLyZWqqFs1RzyGy34vgn1NPfkvpD1QsuzDbGt79cxHyCinMFUyZAWT8sbgrevp4ZqwXWRspBRedYJPRhjjdLg2",
  "key41": "2fC8KFDRko7Th8eawqpMaFtmTbmbqziEcRzeEiNEXjif3F16Ex58LNhgTvqWbVJC4PWWaag5nY4C74z7itTbqnqo",
  "key42": "2QzDbsGka5gQ5nGL211hnRVVMSr4iyVbN3sZ4xKH7EyDPWSeRLZcP9Bm9GY3QknTVEjjXZbFduARj1Pv6MomsTrY",
  "key43": "4J7arQZvYJhG8Xzn17EkDTCvy8ioyyrwRs15qiJQPbdhUk5kVviemVLQDaanoWYL8QpuxaGxrm9wGNpz1mV3FrZc",
  "key44": "3PeXmmqNFMEztz71Jpbdg4BdA63ck1EsU6sD7jMfVaUyktm1PuqAacHDbkqcUZuFNjLUQxGMgNBBDFGeppoKMncd"
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
