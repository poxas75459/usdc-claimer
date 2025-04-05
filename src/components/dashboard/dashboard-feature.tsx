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
    "4U7ZfXkXcnVDTf4EiRxsaChZux6H8FTQwJ7iXMjxceBeF5zQKwatqL3zTpYmkCRxJTg71nhkBiG9THHrZxvd6JPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KtcRwjCyTTxA5aFRQ1LuxMDq3EKXTY2RvzpPb8vzZ85cBH6e6caksgyLhqnmT73anBQTfHa787pZCqdUsiJVKrK",
  "key1": "3nSdyurRfGPcjwSfDy6wxyWiXi6jFJyjnSEhxcgV51xqq6Y5Jp3wViDozCXa8quZCCGyHJLvazM451oJBkpDj79s",
  "key2": "4ahadyC3qf7ib9LWv7k3rRhq9iu6JDh2GpntkziCNSezb4rb4pdY4HQy2GdoBW8GNPVHTCyeVmFxjfaFGCwdybuJ",
  "key3": "2crmqjcgckmf7jV9kHwWjZEbfWHLmuzJC1mtax7ryJRMzX7gDTtG3PoUpxj9KJdHmCMLFkzbZWGqdCoZ34Uzk1NV",
  "key4": "27JDrPaHCVo2vDYAM1BkUy7w1a8U83SvAYG4ncCfcnsReRfmExYUPb3wRsca5G7kQXz1ZSsXjYr32Wy2kQdnARip",
  "key5": "3Ydu5HQUqywLtVCL8X6LG1Yg4hZpjvhyYZNBVN9VdLWLP3xJf3kktZLUVFfVKo3dKReovYeTqrbiZFgtQiFscdHP",
  "key6": "5uFJq3dPRkzxa7xT8vCw1sHFhQQzSran1Rby95VzYRc7zEF8XY3wPzvkWfV1DJGnWFinp96w72KhcAwxDgUnepxR",
  "key7": "3ViY3G4SW7pwLfXUy9Fcc9qcghDQdG42zRjWey2KJZPFjeDqAYwzBG4THBN9Duqafidbck7jJ2XPMojAem8Swa7B",
  "key8": "41KCCengwfmXrU6FTJufJgt4rjYnNaLiNGKUsjPnrHjtbSzjTw2iaywUHvZvBTeBo3PzWgbwLDJaxWYeh6mx3HVt",
  "key9": "5CHYrJwbBDYQZ7P4bHBEeCPUb4z569MeCecU6HHpwvUomPBYeJG9sxL5NsgzV6e6rQcCaGdJD134YGiipTJucpZ8",
  "key10": "Pi3a9Fye24wbngyn861NLyBVYsaDGrWLEeNZtYbFtt2zXZUZWTD5g8RXXjvKoG6FAnrK7VDX6fvpG7kCfAuXYyw",
  "key11": "52Bb9t2nXQg27Dh35XjZ1P87AS5kys8zgLTiNVTPXeUiLiTeJYcDZS35m3BWNiiPq3Hh9ypeWDBo2NK3RJqq7N5A",
  "key12": "23yLQBpR4Ng6THhpk2b9rhvmug6PiHTnBA7TzKQPLRPNdMmVeeCtNb3McBULiDCpRnhEy1EqLD1D7Yv9H9o3PQD7",
  "key13": "5TQsyWKsjeXWz9MK4eBvDas4pTWNjUVBB7NgZRLQYVxa3VNerrBRxCDkoaach5Qf4RhKyw7Hq3fbshAeiArVn3XN",
  "key14": "4zor78rWS2csDdqg6QRpkHuwDWQL2vTjNNecZtAsUWZD3WtHxVgzyMvkMokaDvFXUW8R9G8tLDVsTwvyNshJUh29",
  "key15": "5ELNHNL73jNizbnUAXPCRwrKgU5qMn7uVWRyvmD9w5HWkDNxB9pyykVkBmdjU3GnbABvaq2FwnShHJraPV4pS8nj",
  "key16": "32yQW4WzuKdDochUTTnJsUqczubJGyJjUDBZCyea5bUGqykQXfdstHBpVT94g5YxRcEgxERgzJJYSSaCPbUhYL3s",
  "key17": "msNH17H24Pf4PYz9RqayavFSFLoh2KTmyHdmxEbkjdEmeUixvjp592CKbKXudvTCAPM8C6GAz9c4kP9yxR93uot",
  "key18": "MBcGfKFQ5fXfUcynFrUvxcAc1PhKYJ93jSGfEep79Wv7Pa7J3VCuazWMgEBqtdRU8qdD3rfX3mqA1pjFQtEwVVb",
  "key19": "4QraZ3rHynZUeukHg1fjBMjXjmynk67ddzms9APb5m8UYKEMv9GUxtLiK6KRcjpRMYv3Va957Kc4HdWQmG9qda3h",
  "key20": "5xrwAaDNmkGuc76HuM8g2n18v7i4od2Pw726YZV92mexSvmpViTVofgvD6HxWsJBx1H5VoL7yaziv965Xp9shAPB",
  "key21": "3RA6dxtyH5w4sVX6Tr95V3eVjXprPq6Jyb48ATTM8sNqGiFD4UTRB2XigJDmkyn4VVxWkrnMtY7hxCS48KtpVWg2",
  "key22": "28mbTJ1cH5JWKpRt2cnhXFgF7UMN65dvZYyssQW4tpSKnZKfTyeKAEatuhGvZhJhQpT9rFuJ7ZxcYDrskDJ8eb8J",
  "key23": "5gXgJhNfPYghtYF6mPK35TZ49ZMBJ52c556yczPZwgkr6iMDtdHJ9TxTrWrmdn3UXjBMUnu9XX3jqinA8caQixW1",
  "key24": "5hT8dtge75HJ7wH7T78ZsyEFCE7EHwPUetiM2JxsKjrGVryKy94o7g1hcGcXrHa4nb2LgZMqMDtE2Knmh18C5Bqc",
  "key25": "3xbbxRcoiv1ao3M5A1HxpUWaqSLGc8AvsQJTE21ugGNKgn6nkkvUqY6w62npNwAso1cHD2zg1kSncEbVBhmtSsoj",
  "key26": "2WrQjJYBBowHfozmWvgRJZi7S1HNjAg2UbMQLd7u7Tcq5u7oiJ1fRrsDrDDUgPHrMjfHwUF8ZZ39PVFNnbY8Thro",
  "key27": "4kSH56SS8oBcrExfkgSFAprfYhXnRWPSiyWZBsitc6DHxPv5D7ekbh7kQyS9YhyEaVtoWYz93WpqFHDB2DJ1Fiz7",
  "key28": "4y2Vpm2iQmSWNsCbrFSQM95uJEHekHBek3swR2PLzBvuEhSZibPn3UxWtBjXqEmWx1G93kpsDZ9xQUUjZRoEYyU8",
  "key29": "4xyqk2ULPRMHdJVrftVeUvJJ1W6SzVorJmnNeE1Pgbf4cyJuxtDGyrjsfXHTVPrFNjocnJCxMU1fNtVtvaYoQc9A",
  "key30": "2oxAsduucK2Cvz3K2xG5q1s8JDivfZeys696GDQydrHVNM45L2NTH1MAD6GNScwtwG8ue3hxh1tJdZuBRu738VSi",
  "key31": "2HtWJuQzSgA1zTenmxFhAEQ3RPB89a1KbBqJ3G7qPcYrXtaPfr3agJfDBQF5kTFVP4j3VukDYcuGn55s5gqU2BL4",
  "key32": "4oy6pbmswi3YhS2myuKRRozShES18h3FkJDbJjU8t3xgPYCz7kVCHfUtTAskwGPuiHun1hZAvkcQb5faU2gqtLKh",
  "key33": "3qhthwhA4PNWFGLnKTQpDJKNoVUbKMabVTZGnVVdy64nXGozqHXg3KDRErRMUA7rp5bW9jKWFQfqCTdLfsNhkyLZ",
  "key34": "3ck7atDPztqXZau4EENsy9Xdrh9fok81QeAepdeyDkVhZ65mEM3HoQ7NiKsaxMiicjoQn7eMegm29hHg5dyPuseg",
  "key35": "2SqqFq4pdnKYCYTbgfnVaRW34YvwCxjJbqLztbPVAuXWCCas128udVcMhQfHuvH5C1gxprGjSHJ2Gu5B39BByTFJ",
  "key36": "cnQujKRE5cdbTr4GbiQRGMTJSrCYbumWVxUNPSi2Sw9uu4khZVbN74tPD5Jk1VLKrbauFEFWyR9AQmGNm4w9MeK",
  "key37": "5hvg2acKPgQes8DbMUp1V2Wy5zyzuYGWBMiAwVoNDdW4ny4j6EK4j6F2qbdyRPEYCGS1Emy86CmuRLymfnhd48xu",
  "key38": "4cn3yCWJwzsE1QXeG5LU9irQnVYNJjGmawzab4AYK4CwrGwbD6k1xbnAWAw3mEVYoEWFmXpYq8LUQyMu1iJngdEU",
  "key39": "2rfJfnMfQiw9oqnjQi8nMmNfH5XCnkCQjwwvjrd3DcoG8Rpb1ZaFYD4AXf2kcABGEeUrb5unKhPaSUnWsNoDYNeC",
  "key40": "SspZcNbBdT74BkKLDbnGN3RqxEQB1UEgg4wXQNgSCWoSLEcnAKeAFPDNcZpXBX7Npt2L4xKv4ZuLSPTHoT4eMWY",
  "key41": "4rpkzBDR4Dse1QwCTK2TpqfDdwvU4j16noQLyNWyyvcjN8U1v4Z2LMChJ6bq6H82vDmZATSbrvvwunbRS7VbPGDY",
  "key42": "5brdnkctfgRrcnx9iPs4kQEmPtGN8mr4mv3ZKLZ64pBjxkbhwVwnXm45rzNrabU1noKTqgvTT3vBTTZCXS7VKfxJ",
  "key43": "5N2gwmQjnA9E1FarhqhVsqeiJLCkKS7SdSeakFNB5hcDdNg6tZMifTzrhmcugdgAKjt4C7PB2TGj4agStLqtfg2a"
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
