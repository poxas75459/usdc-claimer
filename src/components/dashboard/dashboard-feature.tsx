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
    "Y1rGMUgYKVNrYAmdYPydUpeycdqwrqiQ2CTA1wRa4Y4s22kWi4mqJWtLzrcjBWbLkmycaugEa16hhWi4391DebZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AkgeqykJ63ird9GXFFJt3QpbwaRUzXbnzaVKycrX1HBQLo4uFjPtpk2PAyxVasM52cohpsyBDgGB1HbeAqconLj",
  "key1": "2s41zX9Td9qyhjmWK9zvEf55ZBE11tcjeC5zssBfpYGR9unZdCDAQmooG1QhjsYptM689CwDM2iPJAHyFHkvNxZP",
  "key2": "8zPps9RYNptqfLcwor6BWo2b7ghwi8c5bBxn6ntZfjRVF8pzzRXr2viLWLkgUWPA9PKwnS6vyXFbkWK1JGw1Soo",
  "key3": "2Ly5cMkph5xqQ7qxCRj8pHsgkT4rawPisdpHJZgf1oBofGFQ5EiEhKE8tkkasrhKV1uAXgKCA8eFXLNqJPfzHohK",
  "key4": "2AM5pK2g2StscBRgBrwxZNHY2biuqQ9Xr9LkMjsj981kcML4vxCHq8UDUdDQkN7sJ5mfqs3zWnmcVa3MMMCFnAQ5",
  "key5": "27ZdA5ECsaMH3z7mHpAP2dXkgpVq8KE3u9EABpdeE6p3W7T39YeXiYQweY6vwteuiL9q1jNXKdxCtfhTsYxPPcMc",
  "key6": "3TRoFRd4sZyC4YHRwEYvQgNrM8TPWhHCrLCouHHxRjKH11MSvEnBjm264fiBV8nBeFWekuHxRFdGhuvwbkvUBUE3",
  "key7": "5gXzSPJZyhKqSTjgg1dDXryzWoLHKNQaRjsw2zWWcYtDLmHSj5z5rvRjqVWt4VLw8eTmfToFu3PSGiGZgK5iMvoR",
  "key8": "2VDQN371ut84cHmJpYnc2xaHpjiHhkdqzihB6TLBkgGKHzAMjMW1jDEZtkT2hiRob169gwrPMVz1MVHzV4GRVQoj",
  "key9": "5CHHe746mVqUNzjW3jiJzFep6NWPztfavw1b4oLj1acevHiAHbqkzD9S3zmsqjcmpNMHEGLCFfbugFv6F92THFhy",
  "key10": "smv61pztKmb9so9jvhotvtMSET72pupGaKBnY8d1f9P9jXYDXWK6gPPtBdz4ppCT4zWBE7sPqqJtXec87Lg8jEA",
  "key11": "5MgVCsiCcAESyrEPBnt3453Conx6tqbbSvakviDKabyDGiWzD6aJwNtsVYUQmtJ9PQN1H65ZxT4bmeS8DSEJ8xQD",
  "key12": "2p96hhomZAwQeDRV8SUJsWH8tEC5YFXRMP9MZpQbxnzS7gMtGkcarsqH7z7idi86WqhGSb5dLstgKoebUov2cFmw",
  "key13": "5bRG6cRGGapfpn8MSSakPzzz6sLYfSVSa14g86iDBUmmk91umtd9dXxkFNTYhY7cpWcWdBiX2FY9GMtqJSH3fodu",
  "key14": "E4xV5YDw4TNAELHdisnbmn9KnGTrJ2S9sP3tuFjVYapjSD8N8KTcMgcHSjMeMrDwTczWBDnZki9JvRwp1v5wKJT",
  "key15": "3YdC7Ft2uz9GPWoV2C55EaYFUaUackkMNFhpVH3aWaeNTwTR2qjq8NJWRRemWqcoLc6HZt9SqByXnSeWtzkHE8wr",
  "key16": "AhEWuV2H7pr7qjD2fcRhtxeL3hBs1ZrWUpqWpZEKeY26pRUL8bc7g7DdumKHbgYby3eM25UpnzWiEpoY5DX8L6j",
  "key17": "2ZdmUvz7SRPZVSQ1TvzirG7LUkabYkW7AsfmUe58FCxaueF7AZnh11ynJYX5Tito5vkpjo3WsJhdyJwxdqHLJWMQ",
  "key18": "5rEaPwhb9XU42KDF8PHrZ6qVsszz3EQNNyAPJ5TjBsNHDUuVPXCwxvYYNhQQoT4b6X1K9nmwir12pBhG6NyYVNos",
  "key19": "2md1vAsrzdd2DvejKAzoYnPyMNYtnZwhqJ7aXXLCfHiMyyJ7VGBnhXPuQTxDSAYK9ixAMNd55S1SoitimkkWLMXa",
  "key20": "3CPjTLcLBHv5pGY6PGVyyhEeoBgBpVjZ2bqj9YmuH4r3jvcLNkdykxPnc2DiuHtdJ2swFiAN1rQtPBrRfT2Sw2Wo",
  "key21": "4Q74H6CrhZDzupQCrN7bu6Bu3uVBAAZufszUCzEoLJh3K96Giikw5QKytczsyYcWhYE1jKya7hZZuRNkvEBNNpLt",
  "key22": "3D7ebj2skWwmeF5sWsCs3dozjxJNjnGzFqB3tg22mBaaTrCdVGeJ2V5Fn6AhUQX5nF7mKwCEx4hJaapkcVBm4hVn",
  "key23": "4BTyL2GXSdusM2GNKzuRyYSNYgBpQQe8wz8eUn7fbpyXGELQpxLCoJKChJH4Z7dn9dh9Wb4NhgCtoBiTH8zMq3Mp",
  "key24": "5TSWse8fuGmkR8PtGxCFkTcVEw6DZ5A4paWikdKiwxz5JPMsHZYEwqgA8dXYntV4yp1mAq4BLaQ1HXXf674MRE7R",
  "key25": "3MAGbXHQWwMoBa1UAZEDEAGYkqLG7pMTNynL2TAwfmwG1SAN894eMaNJDxSNS1dDkgdoY45dLNDGir4YshYE3NaJ",
  "key26": "31dev45Hi2xTJkQtMQA6NihDPseWbz9JTecPz6VYtut52EJ11QuZaacxQG4BndeMvvq3DdHEpJ6SvpaKwAn26qnn",
  "key27": "3eZSfPeiLFcP23QHTj8eY4iMSTSNXymcwX8XVgKP3prXNJx6s5T8A63hvcjRKTTTniKHKaFRBhWW2mWCNVs45rff",
  "key28": "nCNtptJz1QtPSxhVFZB9opF2v1RxD65ohUMVGZ3CVj2UJm865AytsXoA7vF7DRUh7aXiDp4SB4wXE7B4bTQGGZs",
  "key29": "UmYTwHrBAAa1BXT6HA1Tu56JGRuAkbqXyt2ALZ2gJ8RuoLo5NeAUqzpUQQSzi85GeqJLHdZnjViPnRmih2oMSim",
  "key30": "mVn5jD6eZSSeMXJgceFwVf1B39zJsWCaTU14mFfTK9kDQadts78n8dD6xDm6dMv4WBgU1xpMaZJuhHKoUVNMHtU",
  "key31": "4vBKJfDDXMyNu8aggvdcFTbPzLsNLnEnxe4RdTvtepyEuBuvEUr4S89SrSZpEeenavGux7EBjXJLAnPxHVm7MiTz",
  "key32": "5HRMts5RmN7SZHJc2u8NDWsT8SwXEFQfpcYyb2sQd4frqMwZ8PZHVTPrJoCYfmTg8pDKfGH9ywhVXX9fB3SF8P16",
  "key33": "2KAnpAWyeFJcZeDfAUxPbAegHBrVQPAqWBgWWmxAgbqREne6qfmetGMung5TpaKei88xQku8g77wiNAoYA44z98r",
  "key34": "4CuFtPpH82wY7L91gh6sEL8xUcoEqdTtTcnRJmyLESTFhGdJ5g7AP4r6pKCk2TD4qA3RTkXkdKKht9t323UfkAA6",
  "key35": "31zRGJWfWb1iw3qFcQDutaCjPkHKUwWZ1zSdFYfgZpvpQxwgWN9ZTRysPC2agx5DEbxK54Wa6Zsp5oj68Tc8qLHU",
  "key36": "T8aUq8FNuvUiViiQG9ysXuDYJmz6gKqCEY37XzkcgJ9RSMf6WmmaxoK5Yb1wACc9Qen5nP51ms9ManmXNQZHowp",
  "key37": "36CRUHPsLHfGC8XpxsLHvY7VskRiqLqN8CDb7mohy49jPw47ygbicWyDoexb33MWx7rPULCpHJcqGUf55KEWxsdU",
  "key38": "4373byx75S3tcfjJ4uKgB98rfdvDUcniU9VWQTmyweU3qnHAPniCzgBZQ384hPFQ5ZvTp8d5pmvNBeiDubNsaJqe",
  "key39": "4ZRFXPxjLteFxnWH3iwmS8kjQK9kMFc8wwKS69cw8VcVwzB9mA7J3bUnDSNMCQPgVKoPRrMib9EhZ8vUb1mYZT19",
  "key40": "nqcmuXzaeGpvHQ6E1eiVLGaiD6xN6v71cRKbtZnGhRvSLJS1S8G4bFSBxS3nHQABLTqdZ4p8JevAZPmj2Wq4csx",
  "key41": "664qTkJMkLjUK5w351jDNYejX9QDXUeuopKM7njSVPAhuFysLbY9dnRyUVPCUD86ZS2a5X77vr9uKqmCZWnusQE8",
  "key42": "2vZRLwXhBB63ZHkEA395zSoDMPXsiFq65zuNBbgTRruRs1sYWqNkhsDTVitBCLKckBPq9WekKoRVuqJjMPpCrH9w",
  "key43": "59xvj3hKYfVQfjF5eJNrZNLrHPirMbKpDgXwN7LdgWszDhdxAW4yVpxhe4tN9iLBiaRMhiJvNpTBDt47CdyC9648",
  "key44": "4XqD44CAxXvUFRgXKhWJLHZ4SJmyHPDfV8MaMK1m5m9n4RgpJY3vCit1FydkDvxbF6hkbT48EkW41F75jiM6yzJx",
  "key45": "42ykXmBaSrH4U72Q6rsuj3aAQGEfmgmonKNu7S1bPHeRFr9EdyBfnHxGWaeyzkQRVfui4xrVqCxYPKejhpdmERhn"
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
