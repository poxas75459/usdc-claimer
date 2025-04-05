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
    "3dtwXTrqaYfkdbq5R16sRcDNsZ4h4wwbm4B5MDyu2pUuns2EjZWi1XuigdYKeGoZoBeDTuihQoxYi7vjkjfSmQQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPKgAdFUh16VxNFv4aLDVKffSoLJo8E82yFnFgLNtXdBNAsoymcF5jrCUyLrLAzVx6LhSRnBNL6beECfPTG7LRY",
  "key1": "4qE1uPfM3L9eM6ruzG6nL17TojLcAxuvmqNeSxqtvZSqPJTMwJvU4SqJi2Qe1DV6QiLHVjToyNbXQDuHZZBbmRrY",
  "key2": "2AeZRV8GRTVo3PQsC8UGgMf5NbPiw8yYjS7YygvEszTFwuJgsrTwwqNhjbYfyK1m1gVJsN8b1hF2JWwkBwRpGBv2",
  "key3": "4uDc65ySW2vDPjKdyWJQXWWi7qE7oTuA56YcmW3PfNBwUtxHWjD526QiUzUo8sA28cXMPAuu65119QWScr9G52k1",
  "key4": "59qhkP5Aj31TQUwCSx5UDBBxNhZAsn8UNjAhd2nTByfKmPamjtRtV19WsubogvGnJYntaYLSvLWKceacvpaeuLSG",
  "key5": "jLcgmSqrSLJ9QkHcJX5WZ4UREEHj6VftsjNe6mpWLuxJLAXASgXutVWeSvmXbTCZF1313NXdsCReie1Szs8f2NY",
  "key6": "3sridK6pzHqm3dvWehzh3E5M27VpEXTXxR4ahEuH9qTM24hKkKNiCYdEcusj6nqDK2zcHCWGK7fuA1DBSSjxDQfj",
  "key7": "4LH7jTb4sfcoc9boLaV2vvvQSsBxtzdtkMg5SpqQvtHyu4trFvWeogmv18XuZGR2tKYxPAEReBwrSDiJN6Rhn5St",
  "key8": "4zCTMXniqKXsDs9n8W6yXNttkB34WoQ5E9abJShnWU633DT6C1bz26MQ1FnuYfXqWPYkqn7MxxfC7cW2JRiSh1B1",
  "key9": "5kSAJeTM3RLJH4yqufgQovNPujPJCjtW5tUoEypjU3utaL8Z5HiN6RpctEPhjbUcg1EA8i2bpu6RAKwVpyHuqA75",
  "key10": "5yd8jh1at1KwYu1NvPMW6ANr681ZKRrSq5auAUJrthZZ18N549i9Mf5fvuDXkp83RoTGTLqwEnrWkJhCo2VMc4YM",
  "key11": "4iHmRHuLvvKKkKMekbEYFCCW3gANnzU2r7QxjFKm8defBH1gsU1zPP827eFxtiVjhs1SLE6SPxHnovnvMx1Rc3vD",
  "key12": "4PJdESbdoxbMN7kaLPP6B2CVyPXRc9xgAwTVHhue421YMa64b7XtmVxGuPdGtG3beACvaHn9cP8nHxjonJXyuEFn",
  "key13": "4Vmc6CQM6DucdNmToPNyTmXK9xQWjP9HdqhCETd2KoLTiBohcVkFecsJkknbYzrfNWoFNiC3yboQc1oKS2wam5qj",
  "key14": "5ihMw8MoPHJMkMTFcXD7cV56nh2rCpQyVK6JXMS4x8xBYY23KTJKnoNgmVT8d1EApschciLaKzgfadbTxTrbg5fs",
  "key15": "4wbAVnVR7JoZS2n7KqAxm6t3FEFvVMHcnptPmBABcvm49mHRjHc9TAifjvjVuuqK8Zn5gdZTkCdaPoYWQWkj5HXS",
  "key16": "FSnV4wLm1kY9CQfZFNjZDDRSQAiW4XJpKdCYWBfLxGhL3dJJotjAV6j4L1cSK5jCQuwQrnMNYDKAro2ehjer3kg",
  "key17": "4SAEXAPb3nmxnRYA58hsdjFxznM8uQTct1Sez1kwgmSmcoGHJMp43253tA7Fuj9jfiT275aLbBhnK3A4KDRMhPjA",
  "key18": "4qCfyHbJLKz5srTyKXBxHvx5Qxp2nF7q59cjsWqNpTkP7W9cSdFWznWvwUoetwMq5e1Cd5LwuS3hpRDhsmkQ7XhD",
  "key19": "3TjuEGv3D18rycFPo6mtKT7H6EkZ72mwVc4RnTGRXG4gNuuV6zWx8unVmRLJW2HHdHGuhBbDnCsEHHG9Ure1rKNU",
  "key20": "5J3zbU83ML2pfjthErdaKaAtAJvJW43T9S5jHNAtzD8ij9uVjiauuhUvAeprtVomvdTdXTvLe2xkRBuNoTNCXSxL",
  "key21": "a2XUmXjESg6WrMBzNwW6TALEDFRmR9abcnac9sUaVYRd2L3yERTjgeMTawLmV967PfYAsyLKByLyhp2biYTUYE5",
  "key22": "3cBZk6R9hQE5kiYqNpwbTsow4PpRJbM9oEcE7bFFofEwJ6wjsyAc3uGeSAEbkcuv1fNbnaJepfjYgabMFb8EYJQd",
  "key23": "4HSNjx7AbYMj42EZT7Li7gYkZ8MAs5BtoMRsWzXZfECZutoqtVq8dCKVgELEeTKCkVhfL6sAohjanjRSBUbUn9VN",
  "key24": "48MvJpeV8Y5A3MEp2i5fapLBNFv9eqRPirMjFP5EhhmWBqWQXFSatByFsCYCCzUqFZhwszBNtFhXq43LMSw7WKpv",
  "key25": "qGkBxxY4fzkdVZvgS8uFtpcx7SzNKhFqo2Ln466Jb3tMcEgnXatYBirXAZmyMBwRbsQf8jzeBniagHJ4Y4o6MyY",
  "key26": "5znZgJfHx41oizNHthJWbtZiHbkQyYkujmpYJWiDTzX4wcSGQRWimTShqZudzWpqy83XguNUrPDJHjiXFn7BwGMV",
  "key27": "oVE62AUpwGovpjoDJij15ob8Mn1gHPMgr3t7p5erp5U4BRY6jRC933rBhQTHvgSjaQ9ZmimDaHgLxMgNEWuZeN5",
  "key28": "3ZRXyAkcESi4uEpM3WbA9QVviWzESxho1Tgxz1MXVP3TSZkGBNbzNNLLdYZaUgNLa87JRR79Dekzjhw7Vz7baqXH",
  "key29": "WCY4azF8utBKkWbfCYRQUhPoftDxF3Q9iRHdjQDQeaZUqrdGDussjo7TRed8F7EQK7pV2C3tFZUTUUYeooKucQF",
  "key30": "2A8MQzkJDKnq9vzJLAQAbKsEHyvgUEFA3riw6ffYNiUsdzXu4UusZJ5vTBWxvsWtQqXPd8F1BAk3REt2PknWeC1n",
  "key31": "4DYNJ7urtJhCGu5KWcMbCj6qezMET9Uye8irXHgjDsstbF75TGogRP7T61d9nZThsuhvn15Mn4oQDaXCBVcTpN8V",
  "key32": "24Qcz7ZBPWWEkKnFVkPpCDyJkBe3JR7DSkNtJLTD3bwzr1ct5a5tzKc2L32hF46WqMu7y2HDNS7jkT4VBqzroAj6",
  "key33": "4n79d7rjVE4NNG3AYmXpLMPSdfA344MsQYBybTW5TwojqVTsqrymixvjcw4nCeUBDhrp8EoJJ2avp6CjnE5gjf6w"
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
