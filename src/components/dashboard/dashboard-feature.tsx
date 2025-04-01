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
    "4cj9iobH9cpGbtm82DwkT57D9o3bXnmHPVVTnPNbYDxsKoX2uVx2yZex9pqEVYBz67ErpkqoQ6DiH8p79cHYPTmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QLgGB6jXQiGrH5ED1GdDonoiTipdaY9Hv2Kck6WXfAXAoQrFo9UWWeaQ9spnRfUGk89aGX69FyN9a9ZSmaV8UcV",
  "key1": "cNSNftEynoc3Gu6scYi8LnAcpES9hAmPL4bRxBGo1DQfXJAiPQqy1hSjqjFQPFfirm59thhf25qmwsWnDkHnZNu",
  "key2": "4MwJWRw7qzni1sGUUtnZ5yTwKCgtZfrEM4CBHR5yrWRXWmAMuQNwcBUkoCRpwjhTk5z4PaRn7Nt7v7KP5Zwdnxoa",
  "key3": "2oSqTgaH7nP8eA93gNQQbwUz6FLzpkN6VDNxpiRicE8AfpGa76UYPAVEo3zMPSYwwiqRefCzLroPB8tFxuRXyFo1",
  "key4": "njcRVRVf4xNpCry8ZhnnHYFUi7JaWbemXQ1fFuQgDdFMPhx22Yr7VoiZnELrH7P5jTpWWw8fEKrF8SFG9N4ei1F",
  "key5": "4UCNswueJitkE87w5kw8g23k59ste6prH1xGzkDoF6JkBAf7cDMdTET2Apv1RTFJYP5rRAe8o4uWoZ5wns7MdaH",
  "key6": "L1dHZ1YqAoCiE7Rpcu7HUpubNKpWoosXyeC4Gpp8hNpHbE9884eoVDFHw991Fr6UkuFLqhnGX822PL7j8WX6MbE",
  "key7": "4B9WdeMiwGVzDDDN1ZQHKbkd2dF4dERMvDmk57SXadF2gzurNWvuNu8N541xUpGZwPHLuJ5Wfon9hC8eZAyDAX31",
  "key8": "39BWLSitahuA3tF76b7YFv5sBUXDpAXtFmwtiuH5AMV5Vv6xbadbXktzAXcph4YrzVLezvnCd2UnaXisfF1VJXjP",
  "key9": "3v5hjt1ras29NSmZYpi7UgNhwgWV8JE3j423q5o6yMRtEvSyAZAYQguLC9ZP7PgaA4nJpEEQedWAbKewxPjVnbsr",
  "key10": "3NRfo8DRVxoe5sp4aSU4gm6Qx2iMtHJ9a3F9tonfasm3BX5BzxXUnTGQc4rvTukMZPan3oFCRw9pm2ADuwXHLQWX",
  "key11": "QDt7D323v7s8Tv7bJbJmpMDqW9jpFeHiWQ8ZoGzBRiH2PZMJs9AdHSjioN5uRAmjGpE4XyvzknLZtH5ciNmUp1g",
  "key12": "4eZsRZXwPJKARFW2BZE7BED8tPX88SeYGrqd87cQQt6MfaJ2rYPq1nCD6ULXpmWtkSkRMFDaP1CWNzXAMn2w4A9r",
  "key13": "5uvkCJVjwVf6Fg1rVdwxdjDN1akBFMpYcqMHzuemv4D81aBjZe9yD8Ty476tG9RM48fwhXQyUWbx4DvBmiEr3itK",
  "key14": "3VkhENMU5bPpJMqnERoNoEEEuRFcMNciuxy3N1g1ybL5EGk2rsMXJtwuHivoMB7tPu1E2aNe3mhWXjGgRtMxCZZz",
  "key15": "2Yv9UnVLxnQXiMLcbhraLHDMVYLYPo7A9kDRrgxTUupieoq6vhWqm1ZUZcQWkh6E7wuMsug4TNiDqKBos3NZTk3b",
  "key16": "F5NMe3i88Sd7Ec4smfBMhMFaeiu2sL29PLatR3npKzWUi9QvWFHXa9NrDPtHwbJ8DEbyZcmE6PYf1zUE7SCHhVs",
  "key17": "3ozbCfiAZBN9tsdm5ShKmuNcrHgfkMyyEmEwWiWh8892gJC4NApn4vE7cnJtLvSQewohws3Jn4JyqUkG8dZ9JWWV",
  "key18": "5TDUU6pSPgW2vkkD1EVMmQzudknDREeuUDQ4P1ofrGnxjuYysKAMbLdTzU7PEdnoZqt7SCdUWKGnK6v2VVvoLuEh",
  "key19": "335cHqJRfkiDgYRkzXLuZ9C6GMbakcYGcCHi9DNZAXb9S5auLVpyM6ytFRW59JiNS1TVjtcDh5HSd9jTaPJgBVtz",
  "key20": "2eKrBJDjYzvG76VXm2kUEdasZziKU6i11PWoZL369QZ4jnSPJCnZ7295AACt3UrTru43X8B66SUAkLV4hgrGSbvv",
  "key21": "5944r4dQ1uJEZJKeu6vsLzK4JLk6v7AZyVhM6U4WByVT69qCHnJwVqjjAdfS8mXnMMmczCG19j8dCFsYdzyV2ekT",
  "key22": "5N4tpG6CBWjC6hkTVBkE5W3KQAhyQ4fjJmopxh1uJ6Qec1G3yd3KJmzP8QpaXx29ovKicwPhj3zcKemhxxfDV2om",
  "key23": "2HcyrZPPWerg5yay7SXnrXQJtdsj3miYFyptyrJrJtCE9UxvVkRJhfJv7qMjkYYuQEK9Npph9BkJY4SV3F6TNsDf",
  "key24": "5QsyApHx2wMuHCtQWBLAjUyJodDZeXyWhK3q98HQUwXMhAQ3kuFvpPHXKVHgFMgH6SHfVFfJLTk5FG2JS5EENgWv",
  "key25": "3H6qCmBsYVKYEtUKincSWBcVpgLGpTAmpgWT1PKyF28h45aGgH8Z6aDW2cwwU3M2pLP24Zj7YS5V4Q1YUXLSzrpb",
  "key26": "4RyK7wXUwnt9wBMj1RpiogZA2XW7vtuZyVD8yW7aQnGqPcoPLQTRymWdXzwvg5Yo833gi7RSHMdf81y3pi1MH1kh",
  "key27": "5UQuVAfzBHpYXtTCihsph2YuWAuh5czenXmCyg8LSZCL3Kxs7sQWji4DkkMLL2sPCDz3ejSCFMzfTvso32As5xoP",
  "key28": "cKo59NxuUWvt2F1bN6UTjdUV5NCG1NRXS7BacAEdT2DGAyLQiEiQFvGbeR6vyxWXG6KFqTCvuxc2nA2oHEWZoSJ",
  "key29": "3d2Z242g8Brw1i91ezATLtgPzJ7vaArFRiagDZ9wW4sqzEcaDemkDctrPvZLy7Dw8kCUXpByMyt4Qvk6wcibTc44",
  "key30": "5LYBZcADW1mgmuZtABDQa8eEXWdY9g1KXBgP1pfS3sKmCVwEqnEJxgWrUctCyMUmRTyamwbiJxj9mR2C1ajFBBQa",
  "key31": "4o3VohKvMMrqP44VCX3AjMC9Kd2rYpbZDnAbz9Pi36DB78wqpUyy9QiAiFvWHLLFtEeKHacZMLznyNZzzAHyWiSr",
  "key32": "5G6rLzqM32WfoHSzFrLexca4JP1AGi7JYXVrANdVqT4GHyNtsEMQststioYAiLTt2u9mnYwppVB9M8Swn33jB7t2",
  "key33": "5vPHxvDNHXBt3fZv2kwEmbzU8Bbsc4qWxyEuuAXrfPymT44qgVbZPd3PmYCsgKAw66q73GUMiVsDNve9JeaGYf7H",
  "key34": "5vcbQ3Yms8mgxX4yKXEqTB6CJeWiZSKykswLUp9KJaeTDrSis7vzLUibz3gUJYhDXHnsX9bRjFkqLZ4CQEVEfkcz",
  "key35": "2vRcvTfE4ZuwiUyeitntynQFpaoZnwqe2XKrWeti4mfLEzXXK6sh9UjY4xJf59pCqym1dvKwt7ehMokCC9FPAXVU",
  "key36": "eyAZTmCpqGMjtYtb4VrG35FMDc8u7x6cx7EweJYhBNdEZtyBr1BAqd1C3iMhtGqgYfPSSMEEJyi7y6mNozw8ib5",
  "key37": "42V5vUgmvpg2QThQrHWW6HMTWHjR46UzU5FtkP5xV8ySzhBoaQyHYxLDAwPpQVo7ZQooDjvcY19wtGyWLiq6URM",
  "key38": "jSSncVhAVyMXgEkRtabmRt5Y2L9kJA14XW6PQMDyjeNBVjeRLWoEHr67a4iNSVqr3jXXvY8KrruFsKj21RAHEPa",
  "key39": "53eJwpQWAxC2a54u3q5UMuVXAFfAeNbVu8fZmbcavhxvdDNAkXmjR89Lfga2MwjwnVDWN9tb5zmruXtTkm5Nsn8g",
  "key40": "42NrBZfEXZ4JwZCodLRkiTa2FmQ8ErnWUg7XNWR8GNcEhkRFNRHRv4n3ZEBS9mY7MfXvb2LuCuNSQ8J6viDU4UK1",
  "key41": "5xJ3tMKKHU1v3nFJispqVP6G1FhuShRvG34wsx2QxCwNUTrhQrcbENmk4ietzK4SmRjSPvu5VZuoWqtYuuZKqUfF",
  "key42": "3j2ZrR8tkVN1ogjHZK4SPw31LNDLXzBCgBdxBSrTUUBSXgneqXWwjjbmDWsYLZzwwCS97aqm3qYN6hG6gjDA3KiN",
  "key43": "4EUfz2SnSQZriYMwJL7sLXq8MYgCJ4Whwpuvy7Qi5y9p4aC59hp8VRHiH7SVsu4CH69HviKR6ALqyk47GbdM8ffj",
  "key44": "2v5KAPVPNRT9vStk3HmvyvGyrdGzMyrPzoM4t2vmvyjmNsW1fkqHHSMDRubZ28NDRCyoiMjSWgNKJur4UWMrVYpH",
  "key45": "23S2PK4ZQtEjpi9WMyDujg84B3fziXmjpAeKBfxam9upWvqMzBgqZee9QXagpLW4grnFbvdNnQsimJNy4kGYsEKq",
  "key46": "2TWNEYSMZjmfBEdXCDvZ38Xbcq1DfJMkGxQBFZbfX2h5Q6vR5WP715cpc8QeQRZYuddrfGNTxKUDSsQZRtJQnFWf",
  "key47": "3fUqmp9Q3uSWqzC3pxKoLBqvWVwvXsdV6TRudUuHbj8mRdrJRmd5FR6jJnVaLRZsofwiB2DjDj8CVYzxmnTJzECr",
  "key48": "3bmMXazfPM2JVrfjBUrS9MPuzc1DBYLu98VPgvnWhbpuwtbLQRrRC8ZPmPLyXWXbRvdJVaiwhV2WZwVnPFwmfaWp",
  "key49": "5FkVhq9WzN583gvNuQmvKoyN5VanWozgUXmw7BQ5N2kF4Byy66qJWirUvRLSqTSFQgp74rtbn4szJgneWAbBwmRF"
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
