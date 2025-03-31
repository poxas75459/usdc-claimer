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
    "3fiwsLeL1UK2XQnAyeMqsp2QsEqhgJAmPszWBR7Q62SA6Zf7nTFQsjP25mAJXwg78t2wSSRT6xy5MqmGx52rbJFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eMkP6WWb3viZnVFHnera4Bfvt24GnZQjPLmHZq1Jazyo5JfP3ko8r3hXjoEXKLVbcwMAe2vhryrPWyZxYaSfquh",
  "key1": "5dhZsiBK4oYmLTz7Wojgk35pqiG5fukLarKKz8LhRq5k4YHbkfS6iij3yULzUqkHszpx7TrWcRBeBWNXhfMmvG2m",
  "key2": "5ATXrQjD8o7hgEeoWrGYUhfMxUeHzeZkSfwnWVBX6uxtuDqRmFx81d1YwVqC2ZEJ8SagBwEm2UqxC4dZ1zCQbosq",
  "key3": "5bAwpbStneB8aK1nnTrvKF1jA5sKWyNoNxfMMqSxxjqbxV5M4zkJj8kJbG3NjMKrMzraD9rX3abEHA8n6D17TJk",
  "key4": "4wbLqvfvpPBi1kZVzuVFTCv8dQwHa6BkPJ24EHJgBnMgUQDK1XQ6rb9e8v7XqYzcpxY86fkdXmqa64PEupuV5ruZ",
  "key5": "2886ZPPB4kaN86sWBYHXPPje7Phf7883AqTNbycmFAvzqEvBJEeGLmXYwnDHUXC8imf6BGfB175FPUv9HxngPYS6",
  "key6": "2aCmAaUJPs7YCYPRynsLV7zJZo7Gi8BK2bx3vd7Bh2q2qejXSEPMbhUoyS6C7m7LrQ5JznL6iz76REuGuypxhRca",
  "key7": "4ocdkwusChNw1vpEezRCgrn6imRBofwD7FhByugz1qwHfXzJ15tpYb1ywKbJaNP8ZQGKuwgXcjyPpzZUHJjDGmPk",
  "key8": "3eVkC8uGyur8eAja2enbnx62BJwyDYuumeesbocmahQxS7ft6GDTYdLsqdT9TF4zuDzFmroZxCM6yCioCTns5BLS",
  "key9": "2gb5jgCVbyM2wFt7937PM1wTx1b2k8UiQcBgrzJELxi9BkTEYd9qVR1AgGRyuFW9kzZsAaC1PcHsjGXAkxJRK537",
  "key10": "CT9wJLzZvp73bSWES9ewHCM6pTtSvRvrHbYg9CkYnLXje77Gqpeipy3JvAaqZ28vNGAYCDdTeLP7RWbXPRvu9jC",
  "key11": "GNCcChsT9igEA6oWbfZz63kUuGQcdT1NpNvBuTKKnhwd7xnbseqr6N9x9dkK2Vy4Ffagifnj6WxbaBr8C3UAnyf",
  "key12": "2nmpFLExoP2xcaxNytnmWXu5VVYcfwMxczToVkbbWR3S2PLt79LPH6kLLJaL1godsVfpQM4Bu8tPSXAmRpEgvA2r",
  "key13": "2u71RYdRZLpgyBgiBAq6MHynEufXp2rDi65FknZ2kyW2x3pJ59SsjF7jf8WsKbxj5Z9C7a3Ka8U5JukDKGiLBDsE",
  "key14": "aVCVihZVYYuDmWgzZ2DkV6SLG1qYD67HCavYGb8vfrFbcYxAbV58pfhsgx9gHjk2oVpdsADRuJtgxUwrsnCNCuu",
  "key15": "2P2oG1FfB9jthjZeEeF1FoS6T88SWCWby5WhwXAXrsZYUUe4Fz6Gev7ZMUEN32Pd2uADs1jfbyBzTQ6WyrWibGHv",
  "key16": "5yBf49LxpoypAH7HuE6CxB1N3vV6dFmPJ792e2Hh97Bw6AcYTcMzzcvjbPKEoZ4L64H5ksNyeoRwTaVvcPsoBcuZ",
  "key17": "QJKbDcubRca5ZsHDLm4cQJT7EiZssE55XfNL5KdiE7THowKaP9T9BKcj4AXokpppDxBZiiichWs9EGzTX7Xpy9j",
  "key18": "6BWSmweWYSYENzwJoN3GDxEbh5SDzffd7yVHkTdv179oVXSrYFV7cqTn426rnsMj6Zd1KCCq1s2mQX9KWnUfDQj",
  "key19": "37Yu9pXRNA14fnawKonFytQk4vQvNUFBjkd5M3pJBEF9hvYZf83crzkZLQYs3HWZznnstweZRda1N1x2m26v84xu",
  "key20": "kKsSpTw9iU9S6HoT6VGMvaFuDMEWNPNhP3c9A1ksX92u6NM2irrr47PsSRdrxJBeA7uLkRcHQLKXeo9ov7iWWhS",
  "key21": "53JVL8VCaZm7HV3WTZtgPp9jo4FH6Jh5JTpfBiNTyn7V3732MNwqbXq4zXuNauBhs2fT6xTba4dbH9EzHVML4Cah",
  "key22": "45Me7bFHSrNfgGeap3jXeXShZe2rFTLahfcK4jt5QstutkK7DwkqDDAf2XNA8wxhE5T51v9KRBud5ax1h5eax6Y2",
  "key23": "22Dq1E8q4JjgmCT4XNEtzFP3UjWD9hCYkPFZ1Gw5mZy5LD5N8zdrSz9GwpZeDW7oxYZgVKuWY8suRaZnM697fVZN",
  "key24": "2F91q94L6GAMH9h2U3zWx3oePYujwiCZwMkgrivS17EKRMu1vwSv5yNWuGtJ1C4JaFiWY9EjrJR57HSUaN6zASRp",
  "key25": "62YbfAy51gxGVbi6sn149qvCjrgrJgDc2EAN1uz499hozTpXsgj4pk9cMeU5TwuGWade4cdPbu5xYSLVjSTharXy",
  "key26": "5weHZgnSkuXLV6y9os96f98B9awvxPt8or4oXC4BLb8JWdJSJgA74MfZgCCxjBr21qHE2HnwmNCN26uYYshajroL",
  "key27": "2R4Yazb4yTaqqgG7KkT8NxiB7BdAqntJGA8koEgLywyChxjsMePEsL9A6k6CuodRqxotvWUpWwvXGbXN7nCKrbM9",
  "key28": "3Tsufihn4WJszSC9oxoouTEmR777APc9CcpHs5XBTTSzMjmoqSiLA5Da8Bw7d4JxyweTxUtop2xvc7wXrFaGzbYm",
  "key29": "3t4xDWSWMBR6LhdfbSn1LTuqqHa5rtvLuA2scgz7sxFB81ntUF8QzLjhhxrw6jxTSmjoR3uywj2DsxdHsxJ2PgMi",
  "key30": "4fTqgNYDaJz8TMspeCAMjsoq7RJr9bksMdwLC7hnci5VUFq2qyc5BrSjLiMcvAMLALwdXWMAMXEWnSLWrrE68baH",
  "key31": "bEQ2moQZLCQbutwcXKg88SQUfyenbNR49Yxdmibu2hzTSZapmPSKN7Dkyu43dUqMXv5jNX2241QET9qoRYq8VBn",
  "key32": "514AF8xPM46uMPjnF56L6F47YFLxRhjGPgNjhFQqsEr7zURXZqH71xnJ6eoyp7eaSwtKKoR9YqwDivxW2oUGPZMv",
  "key33": "3QUWS7mCqg3hxcozWEKY3fU2jwu54gy2GqaTo141LnSCBvMEsLWGR7sV33uQxVKc9M2VQfUf32D965p1cUXgoLv4",
  "key34": "2VJNosD6rw66sz7bj7cKr8myWxP4MjyTB9LsMmWRePjEuYnXKk1TGj5YFPMznceRuJKiorN15FykF3R4iNPCV9GQ",
  "key35": "4knfu6xChNMrfD1Res1LGEmzykrn2UB774wU3yWPD4Bj43nfea8RAwKVE97dbdLRVn3j2aBxoS2UqcZxL9j7oakD",
  "key36": "6vpK7qxTr4wJ9EYvQuhEcXJwtR6JCJijLRA9PPngPZYdxbcAjbNyjrR94g2DcyeE6KkAaMbRFiJLRBCiSgjGXbX",
  "key37": "4FWBjW3x9LurNzxBsDh8ZE9iDXtfKnRt1gaXn9mnXbahkZJ5mw9ah7C4C78NTvP8rjDVu8y1D89HqDiz5ShEutkZ",
  "key38": "358BFbHt91JzHFAePzCNo6mdpgX2eT5Q7JaWeePtprEpN7PQc4krTYvBxnJs3yPAu1jGHw5AE2qkdTXeFqD4cD4q",
  "key39": "5d4Hh3uiA51ehF3k4DR7X1rzGiAJr6Hvy15MFup7Eu16ghEmtNpUe4dFeiRo5t6jWqX2Z1cXdah7V3A4Z2rr4KAv",
  "key40": "5yA9nTbyZ2X3Jqxmo5QiWrndGbx6mCKTLcqUjNKdq2sKN38iH1RfNKbtVss5URrQji3niELk7qxk1WTUfqjQnneQ",
  "key41": "agpLG2H5UdFBtEE4VdecFnqWXY2swkry8UfgUJC4QU6xSD8TYmjN4TChp7V7yrQXTyWVEzjbSb4i5GUAZ1mhuZq"
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
