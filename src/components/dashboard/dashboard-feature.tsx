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
    "2V6UHRvjLWCUxAqd42tbwaKk4QLLmSkFm3AifsDLt7GXA7GB9Qjx5UZE6rWx1D2pEfkbRJGaDJJtKkwoxX6LQMRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vwGwpkvm7uGCZ2oMeUouUJdXaabwkCeC6SP9b4WHCfufMTzXK9nqYLqbdZHDYJxtveTtFi8FSxkBF5pztBFtW6T",
  "key1": "cbwABgfcQZy78BehNayrZd73NbhqpbNWEfdBw8tq6a6mGVu7w2fRvLUHwEehKP7xMQNFxwtedpL7dy7qC4RxXyk",
  "key2": "asKRycDrm58ZxPs2rWnBUnipWYi5cTbKhTDH3QqW9fAagfUQiPFNfaJesEtEAw8NHfYnjVmCM6MBdEtJYnvXmG1",
  "key3": "5X49e5897Hrx47Hx7YurqY2pfac4PxAyuptDEwg6tux2UAYgzLLMmaWqChYRiqH9knsbyS6QJUfKM76ozzQhjRNT",
  "key4": "4SYjR9Eh1ugurQt6ya86zktidWxALXgCRQMTAxgaSbVDosEtPn1pAnwEKmvtRw3Wcj4GzzYLosRs9UE4ujhDsEHM",
  "key5": "2Y38K2rRsgPNtjxdxwjQ77iS7K9vUsSEyTZXunwbQ8uoFBYzoG9WiNdkAY3KCh1SH5tCoGpJfJqt7jyzH9UhEVzy",
  "key6": "4rgjiihYpbJw8GVgwm2MsGt9Lt2RvLFY84Cyc5RwdrsvzPq6wZfRMDxeRt8DWesUhDAcFjzzZ54S6HTmATATGcbB",
  "key7": "3tmNAtroMMcNx94LbtCQxSipxnssJcZynLWw1NTpK6PBYueLxoWNTLCnQa4GEAsNpUkP3TZpJYPkXHdTBSQWWjFH",
  "key8": "4FePJEKG6dQUymc2cs2fxpjH9FpBTQ7J9hdBVmE4Dy3ABfJthTxh7vJTGWBwtd5p3p1efbzZGChcoLc6sC4LazrG",
  "key9": "3xBez7Z39t7xmtk4Ae3KakSoLQipGMUPJd5XU2sU14ykjARU1x3ecvknevENQZ7vCnDQCpMWSKWDp3kq5cQqYcPK",
  "key10": "5B7RHry1hDm1EcxPRgBQYGTvpAziYJKL5qk9Uz7Smp7p81rT4mH3CvpP68Ezemg1AyQ9nwBqbVwdWYkpYe67LtgM",
  "key11": "3LyW5NqsbW6cVFLWK8fnZ9bNecMKkzFu5M2vMnGoSa1dSdreF3sQjh8VJF8PJXuoTWkMryU2e2Sj9YNLL7NuZg76",
  "key12": "LLJTcwXRXLTTrnCcN8iucGbM9VkjXbwUhFu71G9j7pZMSkbnynMZziPsFznKWUW2zG1q5M6XEEo5VXzMrxGD7Yy",
  "key13": "EHv2rRqNd7wmCAUYSQVB9TsMZhgFfDk69o1TwLf243RNhLcoaCYm2jfRuZdwwdcPTyyi7kxqq2NUhGfoPoeuNUx",
  "key14": "41wwRDTj5r34m9e1adLNA4bAWaefH4gUzMMxZhD7Twty3EhTAyFLsVtavg67bApDhJLxPbx4zq5jLFwjHshuFK2n",
  "key15": "5f1wscxMsKUGuw5XCDKaLnXMPtr84auPMYfcQE2QifgUxVvzkuTHBYVEYaznjqGGTugHmYfrShRfHK5X6uqtkziL",
  "key16": "2AbePsEHuhEtXi4rKsMEJa9DgjyJUXa4cdfJTGmzbohVTCd1up5md8UE1nuL6cB2ba2uTkAkftVYKjqcusvFZ2VZ",
  "key17": "3a7Gsm4uCTfYNrMHo3PhcXjZbg3c4mEcKAEyLxteMSEn6hUpoE3R7fKKcDs6oLXhy6aSSq4d4jSAdosVQeBkZBJF",
  "key18": "AvsAGoYWAv8z6dNAtFPNJzmWZgMr2NA6z765fvcy714Ux9SeUiRPFHiCeUghYNsXysmxj58huQr8pqTpgBX7LuK",
  "key19": "3NsUgJB1xS7qFAb1rdKJuugfUqvRxkVcGtTj9Q8daTnuN98ruw6yg9vpcJdcNBAZMmArSXMbdFdPrXzSTzk3UhPs",
  "key20": "32Qo5UpZ6F6cP4nbQ8bTkc3UsWzgsuvKFVnnBe2Cyy8ap9S8e1am2duaLohcuFbuf1V1RZdKZ1cMroT9CC8TUZdM",
  "key21": "3etkkvhPkM87vsz47X4mNT3FF9drvsgBnJNFVLrFkXj2wT61J5fYbWNdwQJbr9WZ1Yi4JbtZCw6isUYujJApQ2kz",
  "key22": "54Vmb3JPWxxZrjXyJhH3Gxit5684912kXqqkJzkVmWDmqrzsdem2fkN7YWFEHtiNkaw3BRjV1zkTSP9BrkspJeGi",
  "key23": "2pNDnPdgqR5PnW8nvkCcJ1xJtGFyz1wfUkfFpvam8MUGqtA97muDg38yyHN3iUWY7P4TEMUBMsz1tRxnoLbsUpP5",
  "key24": "4bPUpYTvy5wqxpT8GQPYFrwC3iZor7UzGjkiiFJMrNHKGEiCbLdv4vCo8QVM9Ast6cd9D4QPRShqn4uVm2TmvT5X",
  "key25": "3ocJeDrjPgL9EzecCLBongXvoJGLSzWTPq1UouUbDxDKmDM4w1tVftrys9x3fNjQ8tXE5sfqH3WWaZ9W2thDz2PG",
  "key26": "4qJxk7L2uzMdhgHAUV5wqGodi5VphcVCq1k7N3kR94NxZGQk1FYhZPoqCZJaTYonHyV5zpBTY81szrvqyLo6WKHx",
  "key27": "4hTnVkQjkz9tYcAwmZKQ49gJK7n7LWULAJzosSP85ELWtYZb2JR2Crfg4mcD5NdUos86in92penoifJ9iixNKkRk",
  "key28": "4ThmfxejrHJNo6UEWHvkbZVdALqWiHqn5n1MMYx6Sr1DX4grJKa1xeUehN8VwkB2T9FEFey2qr9Ga5s6KLiSvRXs",
  "key29": "5hk5obYEduus45CXZzgDXsb4L5dmDTdNwKRdhN8pMc5XgUAr4iRbRjQF2k7XN5g3yU6zzL4QH9oDsGVkWkDCTBAD",
  "key30": "3f3giinJHPNahrMbLWGsMHwpZCayzr5wiGjGWdgWjEEEsPRbKP21iRjU4HC2S1jnVpPNFnFQdcobqKCgRKofBCqh",
  "key31": "4Z27KbQBAH15kyeiGExRR38ipZr7PV5W3RCUjtFPKfjhQBiarSisH5y8fXmAw99w7T6hijrsrkJPLccaraU59x4N",
  "key32": "28CfWrrkGzcvet2jqPhtSTL5oSWycobQykzZVqeU7u5WBn774Eamapm5UxStbmzCuZBnad1iz7DkKkLDkBJY3HYk",
  "key33": "5rxUexvBLRWSL385urxibBXNRbpsRpTuochf86rj6GB5G91NkTKy677H3XZcEtXJq8ah45ynYRW1YMNrtgWo1emW",
  "key34": "36Ds9ipAHHAz5zi6MzuUGkYYhTEpPWGw9JtTeXQyqGYfbz4gD4psjjdE3fCtPWNAePEfniwF3urG7bfNNiCqTmAk",
  "key35": "3rG94ifmDxXDP1GosaF4XxZDftN5EbrVCgkW1AXQD1M7XeF8jRHYukWcdDbrB4rdYLjYKnPWPRzPrFqdQvKd9Bu7",
  "key36": "4bXDYiihKxw6TyT98qeztYSCH45MtonnUhoHhmicKrLrfs6eiFy8uYRMeMZYc5ebUbHRjMzXpbenfGC5p8RvkLaE",
  "key37": "s1V9G5rgVymJCfrQryYLQzbKpQcoowCmXznHMEAysNZnDb3FtYk1MVWCMjafFJCNVZCef19ZHYJFowfpAQjwonn",
  "key38": "4ukBXFtP5LrRd4MH5zAZ5yswJEYmGxmRGCMCykfR3rXuX5QdKpGrimgQ2FTa4uhKE3tQHouUav28CBYzzXkvgBx2",
  "key39": "5tGjyR94dvW6yq5Q5mozkfVWrb7waaBuSgocWucvAzRtcURiKWReHJ67sie7e5n4aUgEctiFyfzCxNgiDMyn9WNv",
  "key40": "31daQFHfExUuXjAaLbVVooHaznHN6TLfeyKFEmx4ABduZoDDJe5T4Dy2rFNGtUUWQRiNm2meQuYEArYoCCcDdiVJ",
  "key41": "44e3pC31KZNDQ5SkP4nN4pZ62UY8EyapriN9vXSzAnSjiV9vRcJ2zAJK1kYTJKcjDtkcQy5Bvw4LroNLbUkEz6na",
  "key42": "4jA67byMDdmwkiNgU1aBS6hA1xuHRt5wYttYJgTZmM5BnBuqz8fauunk3KXd9CPMMcxorBgcU9z5wCr5Zmf2cDJz",
  "key43": "387vg8XZNCFxfF2v4qD9ryLqDvenDQedXhgqwHEX1HZNhDvf7KfAV3G7iAruxGurZdnM6WUtkfhCAVcfzCQeJj81",
  "key44": "4ZkhHGWwSpBjxifUXK7inEmAJpEbPPBB7NRHLt3kiHYAcvdcHp51rN8sq5rYjNt7CzGhrZFLyhDhGDoAW4RQ3Zde",
  "key45": "3o1apwiecSgyiHBCcuTZUm1qXDz6FxbLGe2LUsYV2172vNtDHXTjzNpT6AXtir3kuqkod9kCSn56iobVM7y5RqTG",
  "key46": "28kyFYSHZi12v6aCXyt1kXJyDMVQ6BL5DYEukvL7iG9gLUmAdDEJkBa3wHxRBr8y7GornsmogVXCzZwC5wXxj84m"
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
