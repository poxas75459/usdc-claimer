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
    "4udrGzvLoXtMgJwqA78Yf5rPu9qTboksMyXfKbD5zaRLMzWJssV9kVpN4jufiFX6dtwvwtuWckkgzSBxKmCw9JmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asNsDgfu1nrMGiEdeHigyfLaTRdTGZKxLpsz54Zq6k8QUCijS8oJBPSnmFvHFJZ64Rx1jBW8n9rRXUbFXHuBhTe",
  "key1": "5ihpAvZWiJRWdSbRwAozkuzqdvbjsuogyh5VPhQW6cva5d8P3sUgPoUXmmdkFfiDJXzFqjMQhe6bpwsV638z5Mng",
  "key2": "GbLCAK1FZ58EbvkXqaD5GCRrqWoFZfktgTjMbnweksyRqmMjioUodBmRWQwhyBkX1WdQX3JV1tHbxo1WhyMcqrm",
  "key3": "653Yg6p8bdMpmZM1Njnsr3x35yMWYzmcyLEmcU5CuChKeZUVvKatZtE1tC2aVgv6fBd1qBDD8MAHp9gMGJjxRgnM",
  "key4": "2BSS8zBrDb2qoSfMEtAi9mfc1f8XeDvuvz8SJCcnfDL3XSeF5LMPNdbrx4CwVbcbr28A2GA2h8MSVZmfDFmtc3TT",
  "key5": "3Hk6JBKULSxb5VWRuWvUEs6fBqBVjWJbaTXsRFm3jWEW7GJV8DArPrFXjDaV6t7fRoP6kH7TgEFFgiVJrSCmQPBF",
  "key6": "3TUggLtQvk2GrKQdEW4reFVc3ACJgtS9ekhZg81y6PYRzk4UCFGTBq3AHuudBqb6Y4VvdjtA4ArJ8pZrbTMctR3c",
  "key7": "ZB5gAHQtocATeY2GbARtXyzQT9CNi6uAaw5gNPV1u9B3fDttVNtTTH9DMKzKyXNk4aE53XzrMB21YnxyvVwV7mb",
  "key8": "2taRheEwZUMLaWeEkPPQvX4MBsUof8M3tjGffAdL8YBhVEM1zBzRqTMK7LXWf6quarC8ZXKMZKfDHMtj9Q1SudSW",
  "key9": "2pmQdz6cRHTCY1ci7eMc16Tw6iCprqhJ4NkqTXpjZqgZfVEtc1dDEWPi3SuwYijG4vZD8ZD1RfU3iYtofJ5fykJg",
  "key10": "5dMehaZyuC97N4qQebS4icHFYTpUGFdZvqkSdwTN6ACRa2XhAf5vbW2u9UVtHWEXssGHeWbmWViKzf68SJozGN7x",
  "key11": "5iXYAGTMh23qBMjkf2Akom5NenkEymvfPsu4Chu5d9PXacZ6k8sTEB46dMGURcSgXpWHWd6CD5vHxcW8hSbqdp6U",
  "key12": "6qvafPnAtQMvtsRnghEoX6tzHvKkoBmZeT6XrRXrU7HdUohfZnvsfnqNUorqKEn7SJ5FnLT4JRkziP3XEZGdRkz",
  "key13": "5xtgPP2vUJsEnMU3ZDNYwRLCy6bD9ivvjAEsuyMMrtd9gJjWxcxhEiwreYBrXFaBKdpB2PFVndz1FA5g5oYuesaH",
  "key14": "EFppB9WoD3PwGcSpVh4CQWKKjF1tRrgGotb54R54fgp5eHbHWfttaBFYxFz5KHXDt9oRTeHCULT89ZGKtShWdfH",
  "key15": "2xKgk6LJiyMquRV8NH6Kn9E23vZ2i4uqVSJJuHLjQe8TaxjJZui3NCGUR8meeoxU2H7iAW1eu8V3VAyo7ScPd2RQ",
  "key16": "5M1tFbCN5kX3BVb5bkjiWkMdnTRDPxJDJ5B6z2xxToEcoLCxH7yYQPdkq41m5E9jzw2gnPJdjhycBtZZQ2wPBWv2",
  "key17": "45ebuofokdgPBqR5EFabjjxyh4MkbYuxNm9vikpT5G5ahAvxZfJrXrja5dLHHNkfrxefJssVXPiAzKRut9jZrTsp",
  "key18": "atVa8aevzPr4qNVUxEKTCubNxNh659Ennzs5dDVRWwoHaauK3tf7bCrzG3Vf6pB12KZRb7AEMPWnbyi2fUjR66c",
  "key19": "353qhCX1Xh1b4CFpRUh1hrRjKEeHiHpGtZkC1SVYsBbUcfLPwWvU8e7iPXxLjEZa5vbKQbxjy38hKRzZjVJGNiBx",
  "key20": "3raAtJd1Kdsphm2EB2jnSZSYhSXHyaEkmDRW3s6RZ1wCgpQE52bFd4m66BXUiun1iF8Ue7Wpq7zWCjVT4A1WwiUt",
  "key21": "3Wb7ANRqHvPBnmJNvCfuijUWaKc25SC2iwPs4jsHRzzN9pE9cVfaPYDqSHbTz8NiJmcd2xyqYA5cFnYWmUUctF3c",
  "key22": "4SJQvtzLEEPhKXYdwCTKGYDQkQZtvg8SE2DBtC6bf9tHdCiUgeRPtsgFozbyoqdrf9gBsfTdyGioRkx16TN72vJU",
  "key23": "2moKTJ3HtT3PTjUd5WyrFwNy4xVNMc7kC8jeg36KwKsdGr73XEL9c3kvohNLhM75rwdPTYGB8NeY22cQv94ZRcue",
  "key24": "64VXKdj8TZbzPJKMkAdFEJu1rRWXSPaZgd2QfCCrFcRPUPvDUkaAn7SgdoK3y1mdVzqVEbjMABVJs12Vag8Q3QMi",
  "key25": "d2RM8VbeSDi5976EBxv4nTcDcY6JR7a1HCUR8Bh26WWaPacFTWS2YYFzicCUGzt4xCFDcDHUk8trEUWQQ1M3mAJ",
  "key26": "3whBUETjK8YMK7d6bZzxipLnx6bDyU224RDDgsW6dysxeNrPSvZRpVmQSfiYCE6phXCjxcGjUc8wMU8SsNDNZkcz",
  "key27": "4XfvNyqNm9LCWBGAEBJjTXZEGCV55ufBzvrUma7x8pm96wUc6z2G8TTNUPh1vMgb2uh7Mg2D3KoPfQFqeBLCwr4N",
  "key28": "31r1BLYbvK4RLgEz1xNjcCyG6oeH9TyM6GYcimayyJJB7Cagmm1ngUJuTDsMCpVVBgeMuuwqYdJ1SPEHe2TqXGxZ",
  "key29": "5mMWoxwfwUiVCujZoweNe9HiDmNyrwZ48T4m4ZNA4kgry8AEegv8Xr41cGbKWvzNhhQbKJDHxHiSoohPERHCMsbD",
  "key30": "5nXxf7CTELvKVbPFcegzuaZZiKTfU4qGHJ7Nq4Mf8DAdV64vPHxojLNxnkM4JAow78admfWom8Mwe6EC8bvs42m4",
  "key31": "23bpY84Dsn2jHWQSiqV2cgx5EwXbEXwAftnVtJBgEX73pVSR1aswL9zME1hm446Y2b5j82hrjmz71w38jH1jSWUr",
  "key32": "3jFibJMhuKGGsN9iN3vFNFgRVr5znrzQdBKynjHUQ66C85vuMuGHy9TmpP6oYxf4EuDuv7LF84EevT8cJmkHfQG5",
  "key33": "4bhC6FaomQvF7mwjzWLHTf4qVaxKMsenqc6fQJcTDcKXgSFaRaksuJzt6jH7fxpS2eKtZqtVbeazDLRMrB6niPeL",
  "key34": "5Kr1KQDJYFXAbFmaqqAtncEnz5YqNk7S6eLrdQh3Qzo1meoKJ6UvC3LVrHgEPaE7YUd5Xb3cvkKhfz1Q6LodWcPA",
  "key35": "3SkezAUCRCdJsQWoWdgEoGkUfGJZn3CCBG1YomQSdncs7hD6DqukAojWoicv3JW1g9tJC7Weem3K3gddu6QzxdGY",
  "key36": "R6HHPohQtMYBc9eyyTDVVyahB6Jyd9U9iZsGqd6sWzPocjhofS4yuYAcb4HxypY79bKbSqFKbMMrKEfgV7EQQ4p",
  "key37": "w3mLqvitWZNwiMNCEBKipZ3VvXGkXHwxhEsT7oSb3HE5pjmRrygDVBDpsmLRF1fpwx3TNYCHcHhX6aZ9L6AmVoW",
  "key38": "5tDdusvH358QjAHsHHKnvJDmQFBXqmtTX9iVht6Ftr8Yt1royh73fGMw9LyVExzpw5x1ztMGMRbx5eapH8MtGZEB",
  "key39": "5ZmFusUuMwm5dniFwDFXVYrXqjidvgH5brsUVCgFVFjkHLWuBQhn4VBE3XdiDZ37JFtHEijKXbNHYXFyhtzedX3a",
  "key40": "49vgaL54jsE5PyFW6FiPpQv3Aomow4XkASXrJDFiFndmu7FEcqmyXFwNDopPwCBZTPZijCDdM1m462ynuoVB1ixP",
  "key41": "4EbE1RwvbEvxyPLgYwGo7YJcvT9YvLXwHyzNi9sLY4uvNuUfE9Uush2BBZiuJACzM7iiujPTu7ehq5kKp8WnEgp7",
  "key42": "2HS7CyGNAmmrJ3yeb7cHLBzWk4gZv1weQKGyWJKxjTLPY211fmb3BZRSy8J6gfhfdoT7CCCwchQfvwgoKtDwAbkK"
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
