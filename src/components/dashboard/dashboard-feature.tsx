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
    "2q9w6g6TTWpgnMDSFk5QgvzGjCSW1S87YKULcx7GnkDQE7GjrcnaB5s3sRXq6bkPAxkTQTQmbzxKvW5g9CepexqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9k5T2zVuoe9ejuamQrtFZgiN4wBZCnaJCmEKATaL99vcr4YkfKHLf8BbAWijGLkuSBzcijXxgZ5HBH7Csxgnq5",
  "key1": "3ye8wp8JEUXX17865qMZwHscV4SGH7oAsX2Ns4bgEoJfmHN5tMN9XLo62YQBtG84fbKusFqEgLQJ6tbZfkEtmZjF",
  "key2": "2Gkn7GsQ2o5tj9CSHhUdNRaFSrmsLAkTThhc7AAhFJ3npVj3TEgbxZqU2HazDRxs33Kft8gfFgH4Kp9MBS5GmbLz",
  "key3": "5EFoPZZVqEbHmbCy22uBtWNmnoFJZg4cMYhops6SCNCYxkKqvXfAyqD6PhSK6E4fKYNRwC6ULps1VAx9vsyGFSz8",
  "key4": "2pmokAhateMSp1evkRjoUQ2xHAYVGUrynHgUjwV2aLo4v6RVWcX8XvcQ1uwKYCzuDQfE59QmtH4T5BhvSBp4wdL3",
  "key5": "YdyJgiZLaapT9eEFWNxzYDStY8giudrgDzUpAcYwhN7RQqF2qwFx59LkihTQf87YvWS6SRThogyTinRxqjSPZaQ",
  "key6": "47pZd7vGtHf2mHDn6baXGniknj7UaMH4Tj96ueZFpj9LaD6FrVPP2pSVa45WLzWBaZ1UHKCbbmyWJybvbzu4SNuK",
  "key7": "384gNSjQVeGFwP6kcSrfug2PJXKrVzHJ4jvx8UyXkeqo97itYjbdmXjAaeHggMh1RUCYasAna1WUkJx8C5U5QQJ2",
  "key8": "3CZuAfrCkF44ibP2FMA4FyrG4itbUw6nY75GYKswDeXSDvi5ffTZmgbMg2oE382QW7psZXP3YqFRdqm823fe2SMc",
  "key9": "21cwqWhDN2bGmkGNKzrKsH6rnWTYVFmuS29YJrqeZvK2Ga8msrAkBgfEiFeBsnSEMpmj8hzFrHz39STiwQSm3K82",
  "key10": "5FXTgXi5jG1ucwPEjSWud1ZsBuc8h9kPfA3f3mFQmWXC1BerfkNwRC4SzJNCW51C48wfsz9xsitMxoNCXQZzZmnj",
  "key11": "4y88kmDxYP5wZsoFPEkzNcqBtkGsre8ZoXVsQtHw525vut9w2wT6qKQ3CP1P23S6Zf7hQQPAzCwEahAXJoq7oDPe",
  "key12": "3svibquz67Y45QnLkjpEh9uBgRX1wgVfi2Y5QYLKEDWBzdPho3EfLPhcUN7XfjywUbZmDgTUNhG5Bx8QV5BueANZ",
  "key13": "3kU2kafaeiNk6e1MJcqMCuPwKk5gz4eEuhCi2x4LKa5Wk5gJAtLWAei4H7Q52JBomQfd3JsrghSJBZxZ41ZmVbCC",
  "key14": "wkQcS6vP6Z6LuWNbh3GCuyF5QGqrcQnZxC45kwkUspcZy24ygEijdUT9iW2TcdGbcZpohhGf7qudxD6tEDnAvJc",
  "key15": "2f6gMGHychhKWbpZjfe5Bkyasj2rw8pHxgWgrdodAJbzV5gybajBsAJ7BzACG8Vfw6K47iK8SK8U8g8sAfBhG4Jj",
  "key16": "4AzsSJuktVuadYfxuMPopXThm685NFYD2RTp9b4rvbGkGExUWs1SbTgd7j9UCb6KCEsYrUhcD5KT2suybtu5XRQM",
  "key17": "3NT8d1CDCw47zPbFRWvqgaaJwV4R7TjMZfTnja2kZLrCZnKMjzif4Zez35CAzyaku5o7hJSFuCj4dnzqTQNhgX43",
  "key18": "4bBFhJXw8MzdW6373aaBrkdB4jMkRFbBLi3ThxAxehyFQTp76PtrXpcF7fYf3rgQmaKtixvqgPvSp1eaqRbPv3r4",
  "key19": "5qZ2Tp6RxLf72gyMuVMe6tREhsw4vgFF5DSnjeqvkYz2ACQ6D49hdHvobEp35AR7dVjmxeUptdnUwBVPgMMCju3H",
  "key20": "4k72qS3HisisPS9CdYqPbmkVYpEvWPZdJQe44W284dVb5C3vBCiQAMSg7YewjmUDseiyFsJzZawEqM2ByVmu8hgx",
  "key21": "4ppf6jaN2sGDGJ5pTLxgugEtYaiVUxMSaJ3gDS1aCJB8L8LswGx2YthpG9kmPkZsCPu72TShP9Wc6meJwmV6FVm5",
  "key22": "2FAZMdi98wvzxkL931k9bZjraUaCJgbk8YcBZaroXGmDteYFRtrM7TWRHndRoBeJbqQF61Fy4ozqjf2CfgeAtUQx",
  "key23": "5rynfBbkDqgya76dun6Sxj5hoXdgdzwmmn1juprwPzreMXCoGZruahSLa4xGrxD2RRkaG2yS9Rxtr7ipzApB49hm",
  "key24": "9ddwXAJ1eEScaP5HTQW1zefREVrbrTcxMhx4PrJZekz7XEB1NScawpZmhBS2ZGfT3nXhoBLZ8JsmXxVRkgsKPWi",
  "key25": "nwFoK1QNb7sSFUUdazx3J2J7xMJ1vhphxsyVta9eZfJdB9KtgrfhSTB2j5V7ydpEikaLBc2jK5KP7QC7AhrKr68",
  "key26": "42NKmpC1CvK2RN4r3sgfb8KcBivnxNQSkM6YYpN1Cimuh8PmgcbnCAksLLBvufNjjiMrxxz3qHkLsQ2K6X8DL4th",
  "key27": "4U79hfE7YCdH3RaHPQXEFg6hWVenoVVzEg3ZaFCxVUgV5uMMmt2xE1VZpmwvucFhRzLja3jk1VA4pTFJhtSmk1FU",
  "key28": "1K7hViec285TzPh3Tb8nYeMpCgCxW1p3LG7pWgcWXw6AevgRuqk5SqCRofjyhRgk4LWFSHJ6P8y272xQiC4j1KZ",
  "key29": "YV7yv4fiekTnByeh9vAsVWhBeVVNPqMSqAno8mPbxMihweVn3opGv5txVDKfvBTPTL8iKWbVSV5KaDH4uRPr58z",
  "key30": "3RVPcd9mRKb5QTa9bihynz7L4e5Cr17cqqAgei5SjrVDXjHE642oAwZLZhHJwAUgT1M6fqxuf3X8jVEwEGPDPbhh",
  "key31": "62J47UT5kiUnT15A57J47DxS2E3f6EzjUw1pGvacYUW4f939CKrr9DiZxRq73iwfgQGt5vidjfSNjWtHo3edME8G",
  "key32": "4uhUayQ7k4U55kvLgn3Sn9oBbeRhsosXHCUaQUnhSnk9jC1pZrYojTAomakggf2UrSEea4TrCv7UBqBe6mDingns",
  "key33": "3DubhXkofPs5evpByYZ4whVYrtardwoBnM7XHpgvkw5CbuxcHdVuVkCMTQXdo3R6VVJ4xNP9iQfaNytbLqnXz32i",
  "key34": "4u1MEEDh3yfFgmUVrws9jqx243nuB5qAX2Z9GMVsZuDAG2CDB2e2Jb24CPwnH4Eh18g1PugKtuJhog25QKzsW6MR",
  "key35": "kQEZm9E61ZNn26mpT38wuUYfGUcyhyShtzQCNVduDTctADJ9iXk7bgQD2SwYSw5S2Y93W7URmYJqfmSMdipc1NR",
  "key36": "3VDaDxGRZ4ipexg2zqakwvAwbCknNMPFuarEw5e3xhZL4jR9czFhu3H7XRFZ91cHJNwEi7jmC5mteKkB7LDZxP6Z",
  "key37": "4avt29LjVvKqVEQHbZxQD8zRDD2Jxd9LiFh8UFGn95iEcpNKB5qjTA81FVER51cayX9fK6sbL7W333xhDguw4CgT",
  "key38": "3hPZQ4oFqrFKAmCc2HUC1UKvDHFft8rYnnfJFSMEMrEgv1dYSJ9t8KULYocBjsr3pVrxwS2EAJg2u6ab5eNbayy3",
  "key39": "5d8wC7tWYG5FfSokDwtGEBkytNgi7oBRDiJQwcmmdvij3Bb3h2Qvcf3gLGbJkMV9Stx86ofPXaiDMTBujYbYE6Xf"
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
