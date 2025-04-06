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
    "5NfmCDVncMvvTyhYxJQc38NwzHKE5TfHYapV82u64ES3qJNTStm9CcP4eXoxHxGRYBJf3aJ1q6DX57BAw2HSmVtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HFnqAhqJk2fzqJLtUhasoqbz9FKzjZ4SgFQbZPWC7bqQ6GQbSpeCBVgwX2VUKkhKyaek7989WnXcPHCsKZw5pF5",
  "key1": "2Vuyxm8yyb3tHYGNnBy6kXkBJeUg3nM4KZcy7oJoT6R93iwf5uwhoo49sFFaysmxUFijtwKTwmtLUKhrkB38jcHe",
  "key2": "53sEccUaCHzZTNig1tn9hXfmCj5xbj4J1UpGgT8GS6gbLAMgvWjErMfdwJidjsDBRq2q7trnVxRrN9q4FoGjqGVe",
  "key3": "LEhYsZCzi8N2JRdmURSpHRR5nSVZByY1PFgy91pDoTQ6s7uQ3GFzdLrY6n1JSEvb3rQ1KAJ2tHmASrVkFrYAf2m",
  "key4": "5o9TjAESRd1NM3HHpMPXPtSk1B1wf2A3DMid8sbFtkNemvrzcJuVE8gqjyLGNAzktUhMKWfaBUYxAsa3rtuuskWB",
  "key5": "1TzpDEuQUdta8vbg7n6WnDPoGsEQXtY6R4pXGZ6GE2rKPcLVbeYp6eJZCaSCBj9mbv2dGwMRwEsa2KdQA6ipFQp",
  "key6": "3aNoB1MkPfu3qvuDgLvi7UhibANZyGG8oVrH2hwjfpZXLhzSrwTGBYaUYgrvJNvcAFkfBzhet1B59jHaFM9P2fQw",
  "key7": "2cCBfd9yyzA9bxkBcxZN86zgMP1dfGxGnonhDqf6bVwUo3mNcfNkkntcTMs5sNVzSScWPL1PT7pR5suzZRqUA7zm",
  "key8": "nsh41nWDTd7THWUx6m5yTwNte4Ed91kAtLCz9JfPnpE76y21b3wfLEed4vHwPzfc5VYY7WHJopNn1A4EbjzZKR1",
  "key9": "3s3dBjSgi4uBePEb5BZou9HuwDQodCjDM8CNB51zgZ21kNGgEDEicsJikeZxyMEa9R5BD3L61JBpSs2KEiEEGH3N",
  "key10": "3pTdkGHhywiTghiz1g4rggTPBFSggXxxCyXqzkLGahQzwzvKd6CZ4e7UwuxTx7SjNvD89quWfyNUkEuqthYwsKVe",
  "key11": "xYHL8uW94U6hau1TcHV48XiLi16PpyLb1NwgAeN9EdHWzYUWn3nWzRyA3cEWd2pXK6bHfmmoMkEtekRVNuoFaWa",
  "key12": "3ZV8teMMbYn9HoqCNYj3okZHVM1qz9SKw31TEUQVdjsLMBhoqQGkPr3SvQVediM1Yu3pgeiG6ADbKHY7QFqQb5Fa",
  "key13": "3sTrVzMLKogfQBACP7zCVjYaXU3UgqDb6FoEqxutp5wK4iVTqUQV9FuW6KGNZ4qTxLGMitoCitKPrZs2AP23JWub",
  "key14": "3f4Aq3iDh6XUW7PBZ6BcxS56ugnYsZA14qzb7AErUr6Sz1jRnoD1pC7UGnB3oz2akjHKzQBERR1rCC6BjB8JWPSV",
  "key15": "4XQhUMuN8wZVURhGEdiPqexG5GkUdRZ3PXCjR98r9YuyfeujwKBQ4ZFJZXRuYoVGXVimuJ2oqusrDeQgb5En8dVN",
  "key16": "4i1aPembeJYmguG7dfte6xvAsgDqo5t7tEbhFeUsZdf3EaJ6fTwWpBZWuYKzeSUfY923VZevcyHqjxqC8gMhuVGW",
  "key17": "2LQEZDLr6K8yGxR6xk5nPBX4eUv9G5zRAF48Cv7sFJScLA7fFa63z5qNdomr25kM9WByqaAsWWXAyYApDaCrSbGe",
  "key18": "4RDrDszo5St6qST2fRN2jEigJ4wBZMzjZiAKXcSErteGXSJzwzdwSmXCKmtUYL824v5AS7Akq2ehgEFP9KHNWamV",
  "key19": "25DezDhxnVeT1VX2umzz7kEDutjaRnwgzs62fTWSLgH4hjFz6C2YTZkbtVVtWRZnNvAY7kAWiLUMv9wjStsgWfSM",
  "key20": "2DEzZe2nUeiyvfdg645mE8Dg9q1RXYTsh3JXLJZ95sskADwkZonpHuNLgdseFsxcCCSHoWkTCJqXXFcScQBCmr6p",
  "key21": "3HkJWcrDdwfL3aTbnhyy28LPzkrQ3MAhmmTrF8NKWHEs9jR3gygVnwXNVHGcA3qaSyqECggURDUKUWZxkbZZLhSp",
  "key22": "KxF1UJsqSX6cChyDKV1eRMkFZdnFgWhbsQwAPhgAm6259BrFaBUYZBBLPXWEbRCBBuMZgrpBbYRvTqJn935JUCd",
  "key23": "2MNRDpogTxpnK6JK7e2Xy7aBP3tJD9mkvN1XsUwuRLS7Pw1uzLwqWo3NJmQdMsG2gT6kWfYLETEaSAgBjm45HfcC",
  "key24": "55jGvGxUL6HkKxpFhPbLGWUkVCF7qyJH7ytwHVhm3Kvpzm6HZj3N5gKuXvsNoB9DzZzsS6y45zLvV4F6qpFZHy5E",
  "key25": "3P9rxZNAYc3VZ5rdR1BpWAk26wbi9f9HjapAsL1FMKmb4PZSK5LkQHmdmB6fvd3BwCndA5ZRPqe1mHnU5himdQdr",
  "key26": "2ZYnC2X7WZzPcFU1bKtAp1dQiUp2xo4nQnTfG1zVRPfYRxgoEVzFyVjwfUNGWDTmPehGegBe5621Ati3EwUPW14E",
  "key27": "58bPwHSzG7BBfVjcmoxH1ivhvsbapRZdHiEXPpc9cqKXSzGsUxuRA98xdcoawE2BnqAcktXvHyD6YqdiA7M4phBN",
  "key28": "2GXgeHSf2FWHq2bsnNxfsLc5RuN7zr3c8hwVe82t8d7qLsH8BCke9MdWXXJWbMMy8Se5nNFdfw5vv9j3t8Fcdq7m",
  "key29": "4VcDeq5tLdVXPaEgUZmHQ1WSbgHX6qvQBfBY2Ww2J3VCRznUDNFcrWyj74wVEyMcuxw9jmBSzurhr4HVgprVuhrt",
  "key30": "5cJ1WkTEuoNXLmUfa8addUYcAjZgcbwsDZ682W6Y6nJBZbrsDPp9U9jCrfdykZMd5VjgyBEbyPfBt3eTyXWcvVBq",
  "key31": "3e1Btvky5CtaiVvrCxNbqbeZGk8eczUQsUd4ABVuZrF5unHGxtvVqcKYkZTHc157GWn7BbHi31Yi7WvRwT5jRdYj",
  "key32": "3vBzRD59zRrdBhEJ3BsJf1nCf6wck2RLtdc7Ewykb9BBpgmczhhwMjicupR9vhRRGcUKXS181eU4zpCAHWVtC6JZ",
  "key33": "3oz9FXtQ9LpWmuPHNmGK7JXS7cEmncQCmkXfkfZUmTAZqYZunW8S1mT4LK8D3LcHaNeLTNSK22nS4nNjZSKBtcPG",
  "key34": "3JXnMxhwxyXMmXhguYmW4fmAAoyRNMY8JffdpUC4SpnBP6A1sTeK6JgAKDFfHyP5nseTGrChRw8zj353qDMx57tF",
  "key35": "PTMjrJDe9hKx2YiSPLMjioSujQyZT3Q1h785nTn85G7uRp1pBkZQzvqhxipSnB3qgySgfgBMof4MHAy71TMME8z",
  "key36": "3kjUGYktx3LqRwBJvPppMRihuG6dNKDBRsPQifcbLRVByfeqo3x6LPzoB51zzpaD9XehSjgfY8T4qU8H34PEaPe1",
  "key37": "3SXvQY2Rj48EX3M35yoVDhUzu6W13Wq744SVsB6Vwe1JLbDVfJYBY2utdz5WDj7S7SedGvTtvNxsyTvwYKGBiKq1",
  "key38": "5s1SPrAMmS8GJuqX5bGjWfWVxHxw7bXorT2zY4JeNwQwPJy8WUDSuUtGhDeorMeCKENRnAG9cBLQ1pEfLioqZsXr",
  "key39": "3dKtiYxEJXpuMwNfLfezRFGpP39DvFq5chcrZVtUeaJQm88hSMs35D5U5GLkvDfT2URZ2bHhSwb9obyAKvyZaQ7G",
  "key40": "4qcdY5LVSExn57h7dS6Rx4ck3JHJsN1fcfttA7nT6AapqkWoKofurgujUvx7dobugvzbbp4tBDSUaZjVGTbYEmeu",
  "key41": "nnHY4WqGasHtG2D5Vuq2r4uhvqUxYz5DFEHLQh5qia97v2n1QL3QrgmEA4Jks1uKHt9f8eexUi1TjXraWdkSRSc",
  "key42": "HzpXs7Y7yUL2rZuoWh3seNw36GXYafYku7GiVKeBxCUa7PeXPQXxkPMbf43cr9Ytjqpn8cbQVpDZMDf3vihLhfz",
  "key43": "5VPhzRb8Av7uMWsyoT8BjafowwPfxpZgZQUPDErHUXqGwaXHWS3fcSjoPvy2eEdFegMy5vaJh34Y6MB9CSSHLyiY",
  "key44": "2DGM4GZJqbivM1m7iSEuuj8VHk2wBZSvst6hd8xUHZFxFZA8skEMKNXSPKQsfdRNVkvcAkBxGwkbQHeN4K7Lovay",
  "key45": "2W3oPj3Dv39nVZ97iEThsu6B82du92bSzktb31JME4Wt1JmBwJv62MnPCsMHPQryJYZ6QRJWvcxinMFH84af9nVu",
  "key46": "67VF5Ryt2YZemNwqyPJqcuPyq2YkU8tVWWHDHqyTAMj8CTRiXDfCJdugwVXcutDHVKQR8P62uvPEamzxP3sHdEro",
  "key47": "3HM3Z9EFyNyxddV53168QKTviMzWeGTypcFhQiwhwWCT5yf1PaaD8rKE5H2pCycreDZQymECfVnpBpTeAbEDytRm"
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
