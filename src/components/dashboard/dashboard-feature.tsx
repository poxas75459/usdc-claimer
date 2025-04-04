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
    "4mp2F4mHshGbDVFNc4TUnAiEJfzwX4xf4Tvhgty9bbufsY5eTpHA8wZyBG8c6BmTsvTJVzF8LExdZwuEcf8dyha2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aakNCuTjcoYjaHLuuJGN7fzLRNC3WFYbj8GiEqCGoYJnN4SxJ7pe3Tnkc7q3LKZeyZqvC5o9rrLxbbEmRVdAvz7",
  "key1": "5N4vJdqZc7r4bZPvmGUofrPz4Yehajb3Cws37DWT1JLCa4n8TYpXyawpf6bpNkUakGFtxnqCz69fvvnYctqHD3yW",
  "key2": "2coYo2BREwLgCsas4ZBVN4Tj3Rhi3sjwjcVSTfxFNoZhrtJT1sbqNnXsKhsCMvjaFezn5yuWqTVYrSQzR5CeRPg2",
  "key3": "2WMtzsSQekdwoEsRBa43dLdN6TjkXinoZMVpqUisyMJei2CvFXyJCYwxjj4kA98v2azQk4NxXs6vKpph7F9DUJxS",
  "key4": "3jjBjmM2Nv1KMsTjc4wyPamPdxASGjKTuDoqzVCr6948JcWVEVfqbfnR17mGJdN7QguFic4YyrVinnxRBsxNBhWK",
  "key5": "4XGcTYXe9Mw7BK7Lpk8AK4yCaJLvqNUZ78vSnxa4e7SdfsbPTcTzqhX3FDjzABK8qsFRApPTDci5P5N4rkScnYKC",
  "key6": "2xPuSN3Ye1mjN1hSrkYww7y9qcS8ErGc3PDW962aGqmm213PAdRsSFexWG8vt7EWFYz1WAHK5PH9PLqbDZe1fRax",
  "key7": "2MD8K6k85GEPbbrL5wTF8ZFGsMhULcoc4gKxLwzkDUYJefR91thcif7kUTTeMk8Z5sQdZvHoiisbtibXXa1BuoXT",
  "key8": "2N3318uGYe6SVnCCS6wSWeCYiw67Y25iTQMJ9ktwnebczrmryFVvZGN9TK2GcG7HodNLvhMuu3ESr6UMQprwCsw8",
  "key9": "4ceT3HFHmtDqPKm3HwXytDaRWiUca4Dn84YGZzJdpcwY24CSjWQveDCtKNaK3i56GHHZ4Wjt9wudzZfSemSRDhLz",
  "key10": "3pnwTNAqKfxSgT1Pr2hvMmHvEmWNfiAmQoX4igRRuXW1xXMT8Tn1SReqoXV39kBqNKq5qcjCFAFoPSZffNJTGZVp",
  "key11": "9EPKzVBLqwzP6jXJUiTJZRhKjfPagXDFx5KrzCjHsuY2yXdLK79khyfdf6uXehMJXLzPhDhKPgE5yY9BURq327m",
  "key12": "5oVWezHset1XaJeBsBpjSDoi3MHUJcmxuFgaYyW2AUTC8HM2BcMCMhCcu2gt9X8rQ7CW8iQzZezsYtYTSZ1bazwW",
  "key13": "4u29Ei98scrwQPeLNHvadRAETznFCnicNKTqLdZBKbZQSZeNMx3h4cqFBaCvKzuEFbudgkb4p8bUSR77Rcd6qxMC",
  "key14": "4GRbRg673oRvEyX9cuprRpxSiVQUXL2jkB5kaKtJ52iXSiLmqzYuxxVVT5VspYD9Xo72ahGCJWNz9aaMFpNG21zs",
  "key15": "3syLbg8MzuqNWmYSukENNGzRgasKbaVB6isGx3PQQPz63G5mSeMExNytZ6k62aW3TL7r2ibegeNuvjSNC1fkq8tt",
  "key16": "219qht3JHB2AUjaCVSXzyLec9dyPSdbHF2Jpz6S8WRfhvHpxksMqPWyNcivcBv3nYrpTbC6uzZ1VUAau6V36TUDN",
  "key17": "3AnLrqL9Uw8ELSBF1pRa154WWBkf8UYQsXX56F91nyfFjmBb5pcJbrAuu4zDns7avghkoq5JGfjXAq3bJSEJsfoR",
  "key18": "5XDyoscBoq1SFKJrNx1Ac8XmB66UxTTSfnypR4B5Wjah4YycN3DLAaK4AteugCdjbKZtqvfR3nzZoQ1fDwrKCaPZ",
  "key19": "d2mzVcnEwu2TBizrnYBFbLMCT3SNRXoQ8XeofXHqmzhdeqgh48G1D4UBrWJ2UC7JFog1FCgc6LDbiQpRHfFK8T7",
  "key20": "2wy6AHatB1rdho9ouLxitUsDmquo43YvBSJQPGGgj1JE7papFAcrk6pDb2i3pYcnUA47kSfaP1UbJ4Lf8swpMdXT",
  "key21": "Xw2oaTZctkEqqUKZRCzJY4MPREv5wVYx2LMzBoogHg1fWN2Gk3CAsm6f9jBBzZqwZ65CwLyfSEKx8oQM1Dx4a9b",
  "key22": "5KRhMVUAbY1Y9h8UTcUa43PhW9AtwLZvDxygUhYbUPgJeVPKf6p1xni4afNeLyTDcTYDD73MGHqJPWs5yuJLDGnr",
  "key23": "gMyXyDqrf6eaA5CBgo2eMeYWmGL5JYgHDYnQkrPgZ8aPaWxzf6VH3LAZ6QN3Bj5RMZWjtX8UDjtropfrcLi4Fcg",
  "key24": "5Avygn5Wd5UeRXuGgPEWhLA433upzXyxWDvvrFJtLmTRFmN9V34zzbZfsigdaFxS2CcVgzZmxQZmespHQ9svMDEN",
  "key25": "5rQo6dbXqp3kR9BAGDexBuF3DRzCGqjjSQZ1PcnNeSGrAon1xX3c7mNzWc1BMwK2ze5AC8SmsCJN2GhMeEo8RxJN",
  "key26": "5BbsWmqqnm82aBMb3V2mMiYC1Rgj5fRS8py88rSsw246xWdsBiRHtSjUHruYP2akvHCRBpg61FpHpfk5uZdhv7PA",
  "key27": "2bP8XMKx7tUYUhrxnV91V9tzu9tc2jpBbAfwX37JirTN6KU4nfV2uwiNgbbi1YhHwSALVzkLDZxFyqbEirPzHQZm",
  "key28": "2gRADxJqb8fgf8UzF7iWrXwu59D3xM46bV5kL4g2fdZtjB4wrhqJT8uvZzU2NnKE9xXd8hHfQ7Dc8eEiBEQTVrUG",
  "key29": "r2AnnidnacmZQ8GmYhMuMzBdBwGDp6uG2ye7tAR9Pzsfp6hNbAkusUPfvF7AxqDSZCnVq4YLCGzmZipqQC7NgAz",
  "key30": "65fHRbU82UdU2FgrqVAGs17NVAerQRx2gKFk3nYB3C8f6bZAEDqcxy3UNW78FmRbHKJXegZopaQvsy5ubZM2ggE3",
  "key31": "3uP7mifVffYD4eA74sZBTWe5CBYrnrvdaXaVVSVDSSPwKUuuMHMfAcqbfHtcH8DfQXPxD1XxfhGqmdA4einZFbKv",
  "key32": "5X69bedE5EsDJZNBidjANU3bHRsqZCKL8iQZNmCftHnHU46fKijoTMVJcJmvFdXxfid1U7HVhGFLfdLM3AJz9HPn",
  "key33": "2EhnCQdnd3WAV7Fpw4EvsexXDdT6uqB3bRbZVS5WBDwDspKaocP9cm3jBNEPECQiWdngVpL2etb77B53Yq7Sf9Lt",
  "key34": "2TAYJxG1T3GL5rAfU4beecWbHzDtyvEkejMb37v2Un6LjnhUMV3m5v8BdeKtfwqGsjMMYeVDLSbhFG7VV1wadeCf",
  "key35": "3XpvWe5QLbJEsYtjYMs8FwirctLQsZWiMmb14YHEkmyojZNk4eMf6EJ5JA3jCbDNsLzEABQipqcmdYy94JvuKjz1",
  "key36": "34peN8fhZXfjwPzrt4JjkAZsMj42h47fbfore5p554BSqnWuXAwufAGCsFPTicaEadnbnjHjFaKJatZUo2cn3CHW",
  "key37": "SvTD7tnuFTb1KudLqAwhWPTbFHFdFBaB7o2eUEeA8wZkLrLtJ8w2G3TShFPWrQifV2PdzrmJiiq4QfeR2iADvaf",
  "key38": "4ZvT6HLfQDVnv2yYsavGdx92cP1NXAatqRHnsYMsThZsrgSYD1Z9vTjLprgpQZdgr5MMSr4kCoiSXfAxZ3dSueSH",
  "key39": "43nLywNsvM86n8ytQgtBrezmr4aCqbCYbZ1YmUauRkqZkNXcBjwBEaoV7KycMhkjTyD1GWViMUdCx1kUwUkcFmsL",
  "key40": "5vmJNi1GasGYQuF2okhMT2eZoewgk7NMaqMYTR3NWpXyKqGQxEPX1KKNh8hLor1nvShgDtRUoUHXwZKRJwvJQUEL",
  "key41": "4pNgtGqdhXFL6QrGaUmVLhkLhW5g1BxYTRAdtu83fesnTKRux2c5dx5LYbeFj43sMo2rdfEE5UcWorRpZ7BPYpYX",
  "key42": "5sdCtuyZXJoexqmuz4jss93dNifbradFZmcm64gW2ANq7wH2aBnKiucb2DmwMnRKmiLkKU3jvfQEYaE8wR8CwnLF"
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
