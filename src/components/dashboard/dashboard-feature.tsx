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
    "4dAtHt5Vz5bs3n9TFzvMV6cLYoAkYBG9c45HJUxRNp424TuGYETJZiTpUHm4HxmHfEEvieoj4UFpMnz72Jtj9VNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PzNM5AwXGfjoWS4tjtuqze3jMgLfv3hG8r4Yraxi4795DvTWM1iX2cArJ6pHm7S9DjEdKgjShvgdCPK5K6qa6ZP",
  "key1": "r5HV24VjUrqUfjmYf28B1qFjcBvpwa4QuEpkizqtJdJw1rNzmE76Tfbq7nV3W5MAqXsDupGUeFe7cgsDrcjQWJo",
  "key2": "2kYQ1hxaYtKyy549hzVoejxrMsSKgpzbGwUoKj2hJUyaTjjXwPKodqYDQToromKLzweuMAgmJPyBoF1EknyTeqbM",
  "key3": "5pw7KYvoxowD8cNnDBirdP9CaAyv2GYWMjWbSVHwNQ3uFZWMFzPW3BBHkGTKYdh1G6u4sKJbaqexrAQhWiCE5oF4",
  "key4": "2jfcyGhcZAoVAHo2Cb32diNUBNCbvGVg7SL8nYat6Z21gXPJ4SReKepm9cMF3RLvhR7aX5m2EM49GR435QS3YETq",
  "key5": "4rnpvt8r31s6PtsHbj3YeWXqx8LrxPo2BvMd7PkJFLMSsXt8sJB7aDtym9ydGJ24dKzHLvKGcSMXQwK1P56m5jrf",
  "key6": "x8bsVzPGWxnjZfke53C44hxxHd5spATxMZoUWYkqnuH43ZtTibfSTXPHw4ZW4HjP9UKfGBTLgo8apuqNRB1gc2e",
  "key7": "49kqK7WKD46AMws5WSxZPX1isT5rc1XTDbnsRWaPpC4a8rW2NYCsv2PyD5VHbzA7ar7cjQxJhXAHi2djSV5MaNqA",
  "key8": "tqiQboFuVNy4t2AybMk5tHcGVEvLvV93FRj1wi3dwdD2yeDnt2QGWV2mLgdwNnWcjuRVtGxpqC9nVp3vSWeYS5d",
  "key9": "2TyiiNc4EfiV4YBbaeNHUVq6KxJn4rd3JXVHf9zHgvP8htJXBtDUXve8Zg8z4oZbn5ReLX6tyTZ3PzHuE3fViMvP",
  "key10": "2jzgtLbjMh14oqZQKUsrBsV8x7JbX3hKrnALPL6uMnVx6NyqcfzXpgyv1YDRBGqD3E5hGKA1rbxSHXq1eeMBttcF",
  "key11": "31VEVqkgR9yfFreKfEXPhJnGL63on1zco78mSkxBFu5PhsrSLzv352tBVBjEhwxXzncnSZYCDxDt46WRYs7s5uZZ",
  "key12": "3qjK5cryfUjM8Ax3WKQtMVZMQ11wrUFELonnqgAceR9hjMcaG24E57wrsZNpQ8Sngj92ppzUJghibt8VWNizK6t2",
  "key13": "UEQ59KhY6EuuS3bET4yrkvz2NjM8rfDK2tbsijb3AWHtc4vwm5zFyt6wh3XBpcUnVdXD5Xmtqfk53N71i4UA7sa",
  "key14": "3dM1NVAJQmJfwsKuU77XPWnPKBbWrH961yC92sBaQdJuzth2Z7TxA1CPvwSeeD2pakwzoByyyao8vd3WqqWZbJGq",
  "key15": "5xAcvnuNAPLXMavwu7iapebBvaC2CnH39MBB2t75MToJdSbV6YPz4pSsNcYD3ZBtSetZh4t8ADGrGYzhaCypbPnf",
  "key16": "H76Gp7oBr7aNYM8guoagktkCeK8ehsshhF6kUccyxxV1JD5kY8YzDpZPEwf5a3BdpwvQKbzzrE3JbADKkQK1t5H",
  "key17": "2hYye1tarKCHWKzJyhPASBwUEJpNqCnWtCZUhNiyhoj3p9XiMCFTTHxRH1TKg5KW6KPYMVxfoo8XFDyDF19ZQxv7",
  "key18": "4s2aeqW4q2i24Wqkc8qgjuYF2YAMAye4aucVvN6LKUD2p4wVMachoL2jg8co3npCNbmcNEzsrDuLYDYFVUfU7HvD",
  "key19": "FNd74PWiTGxhmKThWZiGTd6QxsFAAhojeCsbHYzWqw7crgXmypd77BGC9k8Bt27r991XymsVHkHu3JgtAwUyq5q",
  "key20": "4FaUu8RH9av5NGxz4QMazEpEi9znhHtS4kAahV44WYReJMwRpM3jK4MHgg2e6fAT4pDqRKbtFnPqFrfPkwUc1vTv",
  "key21": "5ZqFRhfrp21jK5Eafy3RrV4vrgPuZsVo7Me8nQfRy7BsHyPDLZw2x6A77dnWXLmoXBcSx9Dct3Wx3RPeSUf4Wfhi",
  "key22": "25HxLxNYRquhvuYsv9CpXfkQAY97wkqa8C77GBEUTrsVsLzDr8BQjzUfjSun1982U81wMQkZNCcyPRaASyMDkqKT",
  "key23": "4qaJKd3VLuCYXBvJHHMhrGUQpN4imbArVvF9PAVVFvjguDihkJZvuP3JdU1g6NnME2fAq3FwU8qWaebEHfc4C8Jd",
  "key24": "nYC28YbAadtPzj4GivLPJ9rKNnSRkAfBD3MJp6FYF9BWjJF6RV36CTRYvSiUg5VgaEJkifCHjXPpM2gvcMuv7JW",
  "key25": "5j6atLqW3R8LV9asVcLaUFTnGxxHcNhcFGSJ53piNQY6TXw1cL5KmDS2qarRszz4BqCvvPeuJC7dBzoUQyJTQNsm",
  "key26": "2EVP3XaRNE6i1yZorGGkuxQjeU9gdHv9jgfsU1YKmoLBEqRTB2U27qaLr6aVxDjxavVpBP4a7qEZMU4UzuUTNXQC",
  "key27": "5xQobcLGbMKAfWzu1qfxCW7ofzbYFjzJZwvDVjLEhraWixQJzGnqd4CPHYpNyRdR3gnJYL2pYDmPv2b6qpDzQnKp",
  "key28": "632jRNCcHUQJb5EatMrZTBf84Yo7q6ePTZHrDqqDMZW5ceXuRbPr2PjGJUcFprwgQPGoi9NcF2qn6EWA86n17Ljz",
  "key29": "5RPVNyYWBSay4F1mQizfJ5fKHJS8G1dpogcBvtECejrZcSbfumpo2cYGRZG8F5qqQMPNvnBZmwiFE5kzFpoy9xX5",
  "key30": "5igm7yCVKeSFRmoU8LAHDNkpb47XcB85EeBre1ipkTUigDZ3sH1AyYtAwdW8z9pNd9ruyktxRRo4mATF3HA1VoC1",
  "key31": "4Yzqjt8RJ6Q9NxRQ1PkBSgjBLZUFtLS11TGvAu5W9rrZJQBY2noS11pXfQ5xSq67B3ZXpCKxcJzjVWACDgsN7ydc",
  "key32": "2pXXGP7VfUgX3aDtUqmVYoVWQtA6Br2Djy5SobTXNVrDWYywjNcY9i5tNXg28hXdForsLBbnaRH79daznZzrQmeT",
  "key33": "3zGuBkfuADYKBkXoMNV3oEZnBpqpFNems8SXWwKYxUAhYemW4VqvBAkk7ExjR13Q2y4qx7RZkKfSPgUu7APhE5xx",
  "key34": "4UXwvE68pci9JX7Buji7ZvCJJMpiQwSedbMQczBFXLXkusnMmEPeGNedyKMLs646W51feAzxfGtURpaU1rD2DF3k",
  "key35": "n3bM7ndGU2ng4x6kGEp81LYFNQwa1Bw9HP1GeGfogwYCNGijNA6r6afbtdt9GodGk2ENEns1Q8dfSPsVEa9YvmX",
  "key36": "iUVPoQXcoLwhH9hzGRaT4PhiiYTDmYCuQf43UReVq8EjfBukkcqnWfwmw8E8tkEdwMNLs2pTJpxACuRT2ENDNAM",
  "key37": "3MjWuNwwmwYXgNGrNBzu7RRW4uAz7JmMfMr7pYwRf5xtRzyYN9B2TjXpiMKwS3Ayp4rZN8rHZzjf67Q8FciFcuM9",
  "key38": "PgFkSJGcFBRmoFyQTzY1Up9akhsJMNeNv2YZpe8eyNhyx8AGxHdjjstAjZkrFEaVfQWDBD9JE7SoLqU4fjN9EZF",
  "key39": "5YrFDgcvVzXSAHq9Cu4MC7ZyWjqRvoE9h1hdoaCRoXDG549ZSZTHuDQg7i4fRp7fqu1B38B6rzw7MMPLCBorEXew",
  "key40": "21ksdjEGjFukFQjxnPxrDD34onkdD6n22RoecqELUET1S1duTK4ECvBrMWAq7wGstpeJo4ni1WCapH2EpdGoQHd6",
  "key41": "2auW9PkGUu9JqSU1wLAtAvpWoJN9RHu2TjkZ7CbUcwuStrLu3Y9V5BLwpFFTvddNJcqB9uJjoJjGp81bzDrq2hzc",
  "key42": "3zYhGCV6aVfcf6q4SmM5q8KjPHMQ28drGQ2Uk2xUWbpLRELdm986yFYPi3F94UsZhg8T8qp5ZhiRLbJsW9s6guCH",
  "key43": "2weAcuAEM4aDpawa6gBp6WbJq4oJDTLWauuSsM5PKks4LDbfVT2kq8V93ixxUKepnh4eng8tBd4raU48MTwVgyDC",
  "key44": "4YGfLTfuDbPtbrWm19BvqoVZJeUVjZhhyLFaWupssHmEMEQi8v7S5bBm79b44pWtVaPbgiR7ruYpwG5zkCH6gUX7",
  "key45": "3oJbkQprkXAeqczousHy2ZnRvnFbuQGovZSKeCYmU9cqYWreve8BepcouY5tEDMgU4xDrtP2YE1meXs7E8cSpH9b"
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
