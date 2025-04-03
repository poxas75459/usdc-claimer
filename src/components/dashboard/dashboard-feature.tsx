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
    "ZbRWghHmmyKszEm4Yjg5n31NJurA68dRQP2xwpnFHQMvxGuv2P8KY9ekuKxRRXHPShbYnCg8SQa4ohoMCnKb4Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yet4oD5g8X8ueqQpwuPSNEos8aeTKRLP1zPAxNRghsxafNeW6P497B9Z3bXZZkbunQrwWEPtgS5zC7u7hG53jTY",
  "key1": "3KnqknUXejK6ohdTxfFaHqoz9o7JdHRiZY8g82RxTThHR6e6Yy6rE2UL6YKbGSspRrWMGxoFhPxNLxWEa8fQgEpv",
  "key2": "667Ns5PcnzZs5r4eGpvudStbQCzMjAHznbX4UBnTJSs1bi5X56HKSWWrw66TZdt7JWCaVfoSVBVLbd27wFiRaLnr",
  "key3": "39eWdbwVJVk8YMJ2D6jkbNdSneJHdGXwWssk4Rpc4mnAP8B2R62B8GAkhxmKKFnuRzGvNqg6Wi8yuqJWdHzKrR5T",
  "key4": "c7nJYpYadZvkFg2SaAWb57QzGYbBXBuQ8Ys34MtVtb7g8HLTA46GbsbyFbLAbbLWbsPBvYNUSod3rQ6XQD19KZy",
  "key5": "22KcgzxRJqMd33BJGzprBkHHdZkquHXaVsxUSPeHFAFP6ohsFGSmcabydJU85PGSekpbCjWAVCvEi5JYAeUvThkF",
  "key6": "4CEn36VHU3t8SDYBp3cgjvRj2TrbTsF1pKMLBf7uQLB3MKzqZoNHBBQduTEVPWk5dQREPc3YcekKJD8LuvncoyDY",
  "key7": "5JZfZZWg6JtRKBSaAFbP7rDnPJLYiMjg74pCdTtomCa4yjNdbPrcxQpVHSszUpCYML4ufNVAT5JL2gNPoBA7VihT",
  "key8": "5LeENVDcimgQ8qYBZD8FcpGgRmczAkTyDd1ndGCyEoF7m8f1kByuvVNAJmGy3ECGfqZbRavRmVQ5mEryaty4MJaX",
  "key9": "2KAFC11y2qxuixvR2DL1FDs48E8tLAJqnY9GFyR7S2UgSnGaTFwd3vUPC68qCbt9kAyLqgPvRzbZq2YXBYYGT625",
  "key10": "2aSuSM6XFinV9JN4dLKXfVBx3cKBhdNgTuQ9BHRdbzY93Hb68GEWh5Timp7WqmXSv9eYYHaEQUWc5SoFZxDEtdvC",
  "key11": "3imtQ2FGMzU1VZ5zTFGmPfm7WwtEaWvsrVNA5TitpFP5WdLg6WTF9YQsc4tV4saEhK1WQyJyxzvdqemSeU2e1Syx",
  "key12": "2pHe6pu7c76ghatuTR7AVUM5hXfqYNcSUVMjAsRpz7yETBi3JAkPozV7RWDT8a3KRS7u9THYF5kc6db2EQQ3UGwC",
  "key13": "S5iQJG8gkUiej2s9VJzvNAeyWchiRUB2AZc95apxdhZkHcpLtnVPh3EMK5YFs4ZJhNfLHhJsxiaDJEXtEBiLQ6d",
  "key14": "3TbXKViT8swZctEusrgtAJmNMw57ty3d6fiExtSgGQzrxPxp8mxX3Q6PWvFEooZthxL5oyPjFch39m6JRc6FFNTs",
  "key15": "5YSU8K1n3qFw58UDEt2KSDvqhLWNX2sWYyWH6u6B6PNk11oxzDRRmnohnXN1xGAWpPwWNv72J5GgzfYXvZyLhp3q",
  "key16": "RzY8nmXZzp8UQhuTQL5awqKz7e8RF8YEoE1m1H23R3V2iW42rosEGL9bwTwWjWqhgVRbmV9vCm5y6zDK5KGwt9d",
  "key17": "25xJvaBnB97pyNGUj1MQbGsnuWZ5TfuaVx9pdyxkQn63TBLS3PuHxADkbUQtSQCjnzeVDs48Lko93sSt86xh9V1s",
  "key18": "2ECoS97RkXYnhaT2QDEfusirAHPcUYieEHG8CsHJv8GFZehH69fXHdxhAt6J8rsEeRM9ervLgXshTpT2X8UgPsfj",
  "key19": "3ZBmC5jXrC4jMNPH2zP8dtqQp3T7rXfZbVYQgzgrgvf5Q92egz5tNA6uCXTpducabhT9jRpaLZbyGnjt8TH2uTXf",
  "key20": "3fLKZXeme5DqaR5S2UrC7absUu9gCpxQUpKR7f5EFNPHaEXA5GFJpm1XmyqiVVGo5HBEpC8hm277Snh4VKYUV63J",
  "key21": "3cmqHHAQy6TGLPgfRQuXh58F2njbfe98wjq2dDcT17dqw4CPkyH3WiaHE4Gb1GWe4hqmXNeva2uqbxSj42KDH2bQ",
  "key22": "yCHC2SMgg3S9hyrLR2T4Wzxe2qMyjx65x4qJn2VboFdZsKT92ZkPXgaQETQcwkkeuoLwiCK1EdwQV2go5GMdaDy",
  "key23": "5htXkczkDLCBAMT1kjSZDutLft29oAwkX3azXsEccvzx7T3nrQceTBdpJBE54DVLfShZQTHYtrQxnHyrUmubPpU8",
  "key24": "9iA4H1seuATJ5ndeA4PfZKvu6sm3ycqCkfr93BbSLrdbtyaWenrWfyDiTSLPMrZJ5jkxoHc5Eo6berksKgEmNLM",
  "key25": "3oZ46u3zHefe93DUPrxM6xiFpAVFAuZydMSP4xZoC24DXPA24ueNjBVVsPmhoWwd2fhGVeE5Bv4pozNr97jnWPtE",
  "key26": "5f6YkfABdRRzs71KsEGAoQZHupXEWG4gY6xBN98jNCUBEYZT9P2WDNzdPQgvSzRDwcPEyKdDU9z16j4uVVTENdr",
  "key27": "5EhwXcaSFbJUiMo88Zd7mFXTv5RBHPfhyKRGDgV1WTxMtc7Y1CNDNvcgZUmCpGMVoT56yXRqP8romujh6qCEb4cP",
  "key28": "9MbZGhNXjVTzL4mzVqrEyUw4EH3dogrb98SkYyisEa1mx1xq6xCaxUqSoRGG6DtAxdgXyXqyKAJ8R7nKSRSeXus",
  "key29": "2p97qqvZWXTPxJUuUXxuFKrcTW84QrWagewewARfviQuooEYjMcZbUc7hMEmzAPwShpPBiUnB3PgngGRWo7V5GB1",
  "key30": "3h4EgQ6hrorh9KzXh5G6ZhUqFsZvDeyYGio2xLKAuQJDc1TphP5S5XNuuUGTXKjXHmq1PrLSQCioqdN3sMVNYY2D",
  "key31": "3aVuH3Ckj79YzBmUgTNALe3ehLH481T82SXhnQ7hLe8dF5cu46HV9W1Z9uUByyHhdULBMoFHdX1dHRC4MsBpRo5S",
  "key32": "4k7DfCaprHqzmB3TRvs9w7gP2cQD21mLuhzpLSKacPkzhkpwZJDiWWQwYqgVG68T6fPLihZ5HCAWiuRPszhzj5Rj",
  "key33": "4386gyfWPkA7X8cUMLMFHY9hW8BQmnWNjQFMpXvowrqUsh6P3BfRRW5ADxLLAKf4DkjS8Sn679GYixxZErvSFv2f",
  "key34": "4JrX7kuiv57S38hfyJCJ9xMycSXTLsSJVFnxEqjF8wRTksJBkKkG3KpmYkGHx7vJAJmR7yL3dVLcpXt7CN9MJ8jN",
  "key35": "kY31nnjcuineyqgWcfXo2r1CQ6gRTcedayrLk9FKGL4SwyKKUxcQ5MJkgRQK3xPmTkUTrCqH7Wr8ZYjLyB7Ptbv",
  "key36": "5PNaCYYcQwNpNhdMzNYCPdMbhXeve1cJ5GH1TpPqiZxcVFR9zq8JfhdaS4DYU1QqggSgd9Xqs2L59tpwNJhfxARe",
  "key37": "54qfpzyYFcdKK8NeYvQzX1YzKNoukgY9oS8U9BKLyS4e4Q2S7diNHV49WDnFudsyuAEWCEKEgJntnLKYtL1QAbSZ",
  "key38": "3Kxe72RgvkovRRDNjPpTsMM6bdwKzweAEs13nFqQnQSDyzMeSM6WHRFyYtmLGX4Nsct5m21FnTzEMSYr1qS4DLdB",
  "key39": "5DHFjNqdfiRfNjDvoEpqbYhQTXFQmqMyGdfedLXVKtVGXzARtfNLGzKeEojhe4TQSbvDmFCjbVTkJC7CHd7TuDpw",
  "key40": "48q1dr57yf4kYGm7uTBxi2RDtSB3w4u4kurKa1A3morbAcTcNMdruXp84XrMqZK5cCMifmm5RFHQUnXJgSDNdyfa",
  "key41": "2dfRqe7qp86WpaByRQtArsC145JBhxdAiazajACUv8GGei9SDWrtQ5C96yS14KUxQu9Md8n3k6SZj633kGLfqxPN",
  "key42": "fqCmohZdcFWB8DCyDc6t2mgtogc6x2eb9Dvtp4GQjsTttVjB6EwrcRpBJza4qPotPbCVf6N4Rc6b4UXkpwvLqdW",
  "key43": "33WK38Zp4ny54fbJ4KebwxxWaJ1RbdWWb7wM3heHCqiHWtLP7qk97ChZKFU5ArBFuwNyF7EMchU9pKwpGhkQkZhQ",
  "key44": "3oWGEuZXvZzvGpNdmxYEVvD36sUMfgJiiijp4odmv1Y2DHEvq9MFJKfkAcHexyUwdKcDy9sh5EWUrU5mvzWCuXPZ",
  "key45": "2rRvfe42pUzd6E1EgeTorJhPwR1Hog3sfazjgrGGoLh4XxdR9JT6UXX6bV4eTgFm6y4wtpPcY7J8PoZwub2opN21",
  "key46": "5trP64dujFfNryhS2x35tCVy2MsBT9NRbAyNvQZU1zfhhwU1SB1ZqxcvHUWcaCJnmsHeiGkKWbXr2VqBjPdtQCT4",
  "key47": "4Dw8ovvg1Kg8eDQ9rzZha6qGSXkt12xXaUmz8dWPDS2cmuWQG8JQTg5EccqX4S4LbZaoq3oHaxgeYqPgFQ7S7Rhk"
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
