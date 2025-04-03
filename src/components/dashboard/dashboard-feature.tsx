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
    "2eK1WbXtGAW9e1TZFAZuMMnwgPj4AjpmY8m1iX5WPvSVfzTNg3JEGwyg2FtYiFe5mvce2kkZz3rNnsgvxyjvATXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5zv7o81g3oTUWb5kKf4pi4UeQyPbs7UQ5uK18Duyt5RJjUdxng7JMpRXmmCupxF6cT43dTYmQohSKpBANj6u2y",
  "key1": "58QSVYtKM4RSArzbM3gWbUvJWmgBWJNSdwSE98awtckUzdDz3BZChpNniMaxgst3kNJkyUsxLKpncVUkqUDL5Ddr",
  "key2": "2dmKp7jA6MPvQ2fJBpJjRCxufMf1CcnMAjkHQrfEWEsAGNSMwFqHsnxDMtN5jNPLUoTLjr93S4yRhaPFswgvroqT",
  "key3": "4E9QFPfLvZb68GUiBvFcrrZ53ct3j6JYaj7obRVgYK7JXaWJ6osAB2vvkdMPgutYKn5onQkY8vurfPPmmt4tAUGu",
  "key4": "5BxqeCc85YTTW3bvgmhKXMzHRMKubiL91nqtk2hfot7ag5xpWUj168RZqGEXjhMUJX9a7CzN5tC6PxiUSUMmLQT3",
  "key5": "4AjD2QJ67nSJembnd53ayhseUjvV3JKVx2PeHMykWHLqfvGWA2rGwAR9CRfNi3bY7xduKhpesP3XUXe1VH3Ker1T",
  "key6": "x5Wyzza8VCU4nExUE8haYyLemfZQvg1PBTfZrjJb9nHtUUTPgqSR4KKRxHNvX8HFVH1TUH2pXPh9WVmMRxwkoyG",
  "key7": "ecux8Xx5nUxAWHUVHnkvTPhFSvRYb13PG8SA15Lz7wZmEsLBgC6QErrXm8eggitiwezjcLtMpuB4yRQPDFhMFzp",
  "key8": "4Spv7RTyX7uk6EydZmkpsPQ9KL6CWt13gwbCiFDdMcgJniWuvEWEaJhCL7WvpQz9Vf3NUzkMtquXQsictkdFccQC",
  "key9": "5DWtkB2NzPq9x7fmi4HMSHBJqq7PEUTBhuRUWyaJZUbAMTWrhVSo8Hh3YRJEDVRXVki3dp3thJsdsRgt4i5Eck86",
  "key10": "29jmJ3kE9LpmQJ2E9WJ4hhrtTUVjUkW8NRrLv6HC2RCyfKykNX46dieuzRAkyA1uveHBQjouJGSpaDTuGbUg9Z8n",
  "key11": "8vYFG9M5uY4WTNPeCNSJGqp5JsNPEv8MqnLzf8AVt2z3XZVfGeRuh6GszL2bjUTi6woiXCM6oeUqgiPA4odxTtb",
  "key12": "3xaHo4qm5B5KP8keU9CaxeXztLoFuzc25UUVUYuVc6aMi4sdQJhYp6WxWDUiJG1znAcm2vVgMznbFECubnyiTXH",
  "key13": "5wBed1f1eobvSGVKuJ3jVNmyAQJK3MCrP6cABCZQWUf9LAXGxPL1bFn45mrfw7dnxdNtRK1f3jmVu7Z7tQbj85dX",
  "key14": "3k996skhL3o9pprDeKBZqDL5kjU13NVuDgJqaiB4X1FnMyaAyYTYdSx9Y8UhfTeQUB1A4nBkUjBmRL6r3V9tc2xJ",
  "key15": "rSkLvsdAGLfP7YqK5dK7wZog8BuaKJcDnrQVrwKyD6av3UDovdYmgWQYvpXCmyemXN5FNAjuKnK5epPgKgNRcgX",
  "key16": "2GaNvDxxhKbDNSLXtUg5CGDp3mNsgdtoKW9NMTyLFSC3hutW2BxhdyjzCQtqBzNCGHBHwJL9cfnWhVJou47NPSJX",
  "key17": "3iSjwFkriPAWjdQAFVLgBZgHojQHrw7UmEHEauhPQGEvUwZN6fu5mRUb236QLggEq3LJZYBDe3kMAjpTFHEQoaky",
  "key18": "YAsXHM7LAwshUZhEFNGsYVSgKPPcU4opoRMUrSsLJcfJEtTH8qapkp2VdwatEqbVLn1e19ZrGH1rMhxPagebwvw",
  "key19": "niwQ6WiRDM9GuQd1aAZW3aSB9XFY9z5EVcKKecX1xbC4jcUEwhHwU7ubXHDVfEBGxJM52spcAhXZrF7jTVtm9GP",
  "key20": "3g6jCUhYzZ62covb5PFzqyRtJLjHPNizDux8JYEWwFzLzN7bzKUf8cnXXitJtatVpDRWKZkaVDikUJ226mBvnyJe",
  "key21": "uqhd2ZJXdCtdQUa1Yd35iKhcbPwqDYbdjeoqaaeFzatLfgGLgkK3MNzzafooMK96RJ6gLSTJkDdJyyctSkBLNPn",
  "key22": "2yAVbccreonJu11yDy8ZcB5tLZfySJAcKsc6X4JjB1TqkmUoZyXXea3wS2MvbmqSodCeWR2BWaWLTMR91izgfSUt",
  "key23": "cEF2DUZbKBfgkGV5Nasc6CTXwxK74Z22Gb7EAuEXZL1czVLCnAbVm4J3iGK5Vjqw28LWUpXQHT93mjFc3RYGG59",
  "key24": "2Bar1uPmnQoB9mekWUuBgdFGZ1HB3EkcCRZLHD5VsXS75Na3wSpHfJqzvPkDMRALdoyhNqmc29rzcPVzdgZQFMoE",
  "key25": "3MM2NLgCoj4Cstj1RSVZBWFtjqSuXM8xvWBypzrog49xNaMPxu9WbDsWzjgeXE5c3JQzjcLFK2B4mJijEWwHaAXw",
  "key26": "2m5GGRL6K4j7bSKvfCVgsxHFeSZSwmzuKwsfvCkpmFMkJ1sXWVHb7GGE3HpQnJmDSYGdQzyPDXvG5N1SQDh5fLbw",
  "key27": "4mfnJue7qpjok5FznSPwLPa6qB4ToNsjE9E8AeoWosGarhoNWKuLuKDXZwEEj1gPMhbFiZLcr3fHAQi2UiUQv4mQ",
  "key28": "2cfhLsqTvKeTrKH7fycQEjB8T1PADMuBF4TQnW8pf9HCpYibSNLat5c119WTQ1zJjBSco47ixdct7h1SduwMa2jY",
  "key29": "2EbNvedRvp2TfB9JghAU5hpkbJvu4i96VLpsTGDGaA7md5XzdApBqaVDE3jYTgyCh5iGrxBygYZ6Uoy4myQSRCNs",
  "key30": "5HJCU4oLeVkTx6gW7bx6w7TVLwd6AJTucPfv9BjasiBvVYg7VuWdFFqxJv8zJ1yYwifCJvVieviQCike2rbmReZD",
  "key31": "2uN2Wb412czGsidSCLCvovFnsu9apxpTwXVrqEV63TUXrpyM4nAdPEirmdnAQqBo1fhojM2DHbSfbyxVBo3EtexY",
  "key32": "2spvZkqts5VpBqnRgPwNvRD8Gh6AApeNWBdkC3Xnjao8NajxJVErb81HieAYv8mmqdSipZhj7yX3TzDfrC5zyu6Z",
  "key33": "4TdLCudyirRBdH9hxasbK845bCmUbDhTwK8Xk2aAHXRN9ShmuVTEeAYnbqEMJNX3abEpPb91F6ViYsEgXcMWohUo",
  "key34": "2hUJrNVaQpxqL7fWHKW2XcAo885WAJQcNLEJCrxro6tRNWA1zW6HF5fEd3Xk4KRNeDXxYzLWSLXBdgUrX4e7YAmw",
  "key35": "37ZkCYktBqr6T1SZ6pn87WRNZkVV9ajLceUHUQqxkRrVsdbmnwDPyN2T9u7aY7jbutogKHDiwqU53ySwNYBwvNRE",
  "key36": "2TgrSL9CSmqP3q9zdAvMjFV5aNGLVaLjWbqwBsQshESj5vPTJbMhTaeM8ehPCUL1tM5vVT8WsKQv8fqVj8s245LR",
  "key37": "63pUkhZn5RTUME4DnhQxGSqKftrbcqiCLhf7kQdveXChh5XuJp8AEZV7tf4U2m8meBHhTZUwKDrfpoS8QcLWwpA4",
  "key38": "26CsamXYTWkWrPvuGRAas6abHyaPATMBXZvu9CQ3dKApfRr5aDqnRGYYoiirgKW6hLiowzhXJ1e9yQ3fTNEzCWQc",
  "key39": "yaG6skmJD6rsh1hr2w3LQUgUQBYrWN7bJnWSp726nMTBNRML1AY45Gh2uPHMGU6GdtdMrrVhrb3XzvJ9J4PgWn7",
  "key40": "3BngVxdCxR671g7fyDCd6kUA7vmbWc8Z2zfxv4fmTrr4cJKSarFNg3W4fTtPXqvdEW8Yw9qQmXzu9sC4zA3JoCJw",
  "key41": "2RSp2AYejsNj7zqsNGVLhoBSqyK4grMPAtvyHg4dCNDpbk6n5h7pSKTPECGoxjoqXtd2zzetanNd1kPTZgCfKs2b",
  "key42": "3rbCnnuFbLJ2dnyXTTJCctJ3EjtZxGaxw4o7ojxGP5oWqkJpX9iUKv6cP4A8sfJ3mbQFKAkGJ3gbZzshAtwhrpmk",
  "key43": "5zVqaZYBvyRikoCrirSF3iEEewxVDc2zrzSGU3kD5b9bXLREELyxSC19pMNGt6tSFZenn2YHPpyLo33TPSuqpyhS",
  "key44": "3A8ks3ffGRnwvypokm82JLSGGpiZtpGGrxHrBiA5PgGuJBmh7987VZqqBb6PNCK3MkDcmdpzZ1NhzLUKSBDkrQU3",
  "key45": "2bb6owi9x5TeYeTuVGwGykD37L6yuTKHx9uoGRcWcyChAiUQAKNN7hJUKRMFLV3KkiiChts5yyjJzg5sxbnGsZKa",
  "key46": "3UReNbwFEubEjB2mr27MZ6w4CiC5G8nA2Sf3JcDhjBBVkFuiozHUvCeqTsSQNpL8tZkzhLKgp8SDs5WPLhJbtbHd"
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
