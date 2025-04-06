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
    "39kf8k2qBSrERyewsHWm1qann8QmPR1DyoDfHgsz9jHsojEdbBUEiDzVAH7M8YTWgxu2Rxcg13y7nswh8d71QS1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KbHCYq77BjHuMYwVdLPYH3J6QBPSqzrEGLyM9DC47gDqmutMiN9jBPqsxgYbsg2qNYdqZiceLfvzZVra9suGr2P",
  "key1": "2KQ8KyEH2J56JrYerWh8fiHkEWMkLAX4PC8hSsc2hkV93spdgwyRFsGaU8YF3fMWYHudKf78TvWiy1VvWebvtPsT",
  "key2": "51Z3USmwzAY84RxwkugfVqhPoqFB2v5xSCED6Hemaiu2hJbs8QKqdkc2Q7vPVJfrH7kTfYJ5HWoXAGGW5JiALF7n",
  "key3": "2xRFi3jPmYRobTYghPnokW3d1eLZJo9Lw1CLxzaNzj43SUzuR9726sb7BRYFFfKqiyf8PwdtBACzs86NcMHocgNo",
  "key4": "44Jm9J7hmvwjbtESFoaAXEZBHVuuSd4kbSUhKAxkg5cXErGB5E9RpgddtR7cTjJ9E1iXMayPEaVJHjMKPf9xY6PW",
  "key5": "53Y2xpJwoZhxsvkoH2mJBs7HHLn6eYPMkzojj5ejMQt34pBWg2G99k89fBLszF8zosjWY6eYe96ysB4WAHnimM7x",
  "key6": "5LfmAKewbD7FoUhpcvUjgq1yq7iCTXyVWPGxTvEdgkaLoBFeGdQ3DJrAoSwg8jKeCgEEd3bERDRq8575pXMk49zL",
  "key7": "42zsuey5HfT8P5uoDkg3XZ5JduN2wi6DjwRjZhqBJFaL41AL5EuP2oNxKJT7FZwqC8aZFjSjW99FuNVucXo9R1mw",
  "key8": "5sS5a5amrxJ9BdfnAJpmUEXD4akFRprtmYczjuGnbUgwdp1TyYLWbsAtxV5E2kMQpzBwEWCi4as13rBGzzaxQP8v",
  "key9": "2nUVSkPThb93ZVD5eCPwSQZgZWbK5ikLZAh75nznQzuT72uZrGjVJK3n8Xu3PVgYjQuUk8ZVvj255RYntTH15Gj7",
  "key10": "3tccNb6ZTk23wihtbfiZdjGVokj4j2BXyaHmS8vn24ezGZyYBusoj4vsPNsps6FKgrkwtQuE7r8pUVNX4ot5c6UQ",
  "key11": "3sVvT8o3JhuL8DL6vH51W7ktE7fsoNS98AEHDQfmuGCzeoZ8CvWaLCuSkb8mBsbTfHu1JCXqeGzznGqKWDWQcz21",
  "key12": "28LqrH7qRxoJcZgTm8w3c3KL2d8ftZA4zAbatHBrwMcXxy4n3mKQybkAVdUovyqnbqJmzS3jgL2WzFWB6WTDMyzF",
  "key13": "31tVBJWgR7Yy19qcn18rnDwTwNERyFTLMzdNDkS3FpH7xDM6QhuPX7mvx1Y98GYwmhtzkNFZwy2ZcEpNyRvDzRYn",
  "key14": "3cf3yxx9KdhqoBsCaaR5XcMbhmrHBHXQaoXHgyxyfa2p2urhehQqUmcpXX5erDhr12PEvM2933SwA6EUkSg8E1Ei",
  "key15": "4EzGSvcazw9k1Y6K1SJcPNAQh2rRnpJbHsrXMFf5zNU2LhGT4V9heHs4gpPTHn1TjAiXHLKq2NFec3PHC8iXdRBi",
  "key16": "5Hv6wLJ4fhKCHpdwQ65Sk6qJYgyoa28CUMPJKCxjid6n4QGkHztpn45xj1m6DGY4j7BRCTA82jJ6eXugn1xAfGdn",
  "key17": "5imPDxBAzAfj9K3Zjhb6xMEJL4SxFYcmXjGxNyexjnZQHi3Xtv7PVYXqiKtfavK2JGk4aWRJoJadJ4vTeQU8cDfY",
  "key18": "2NzMfgcJS4FJTZVaqfWBTBXs1Vr7AMbQSXa2teFRo4ykMSVj3vGZ3tMPgZS9p9DN7ZL7VDwUrNfpRBJAihPBL4Lp",
  "key19": "5w1AGHB4Daqfa6GTtSSBNUpVdSWUJz1AKrf9dmsgGgf4qPhvUppDWCrCyAdTxq7itCkA7ZztAg9CxXYEmhCwkf7z",
  "key20": "5JLhRVKH8Rdg5b9HihswghVPfNJCd12rBTxS7uwiSBQRNQPhu7HEuUmXdJmnLeBjSvtiW5SDSjza9A7TQMutEhUU",
  "key21": "2DqcXcUhp1V38nbSYnuJysNFpmjLRqHADi4KQn6MDdC8ByFYQWHMVm9v9CSnSJRKimyL1h89o4Qnx8uH7KXTCxBZ",
  "key22": "3QC4KT6SuSRKLrRL9La4bbhPCfJX8jwEoHy9kj2PBb5GQfRscBXz81xtHhU1HFkJvaijCkQuvrcCFxsvismAzRF2",
  "key23": "3zhawWDWJ73d74L19B8jnr4a2Qh4a5mkDK8HbHwoUozVjdkANBdjnw8A7SAe3BhfdgYJkrt5TEyP5zLzWbJCRByn",
  "key24": "4jtop9wStpQZzojwgSCqAQ9tm6uJaTETRbQcF1htXyGmp8r7gAESEBpb5D5evh7isheurkd6SM8bcTVhdSXkpF8F",
  "key25": "4Tno14Smsr5ZCxmeirwV6qramXMbmpU9mAuGsEEsQ1P2Ajwu5Q6m7zVX6iC1U9Rqth9oM7yikDTmh6iGBNkhb3oE",
  "key26": "2QXWY4iKtfmpaPb87fanEiGv7f2k2PDwFMy5y8eD6uVhoFvZoar5ApDbCdAyPfBN5CLogMjzprn6LFVVhEckQZX8",
  "key27": "z2LyTH4novFA72mkv8TjQRoEcRPkcVJV6YWKuiNJ4Jc8a5ev1s1rRm4PcupUk2zAwXAa9Dg5u1puv6AgMBjqKWK",
  "key28": "4DsYpeKUH19ZmgmEJJw9xkzrhHJKPib3AxJaAxfNrQw889kgyfojaVhoo9RGx4T7cZ8euUcypRYi3SmnMGQNuAn6",
  "key29": "Y23qRm8RqmxnqYteZzAnBYx2MB7f2gyKzfsrL2Yahj36sQTRQDT87mAdw1jfmqjMFVTxUH37s2WebNBb9mCFAbp",
  "key30": "4TfuoqReWfVwnF7bc1ir2mkfqvSGj2GGA7ipBnSBUCeSXmsNZcTgj1eZ9FRwDxCWGCfiRXcD4qBvirs8H68aGGYh",
  "key31": "2PnmNmQDHENN9RbLFkFRqEjxuNqWSobwLSZSHFc4ZHL1EigVC9iD2HVyfuRFsw5Eg7HEgiaXxQSPNdw8w65a5A1U",
  "key32": "2CQ4K2STX8hShBgyZ2izDtL8qJhQg1JmNJpjz5Vh4GU3MHbjk1WsgZZRU9Lg5FLb8c7ap6eCLMDyuBentGnov4Xe",
  "key33": "2VxMxqxX6CNaMSMEqJGkk9B5bMFrevwv1Nnv4NdeyoRLKexXtm6oxJPr29Hbu1Fewq7EFKfcjiENRSTBP652bWT1",
  "key34": "4QcpTk9HeG74Dr6wpBG16zKTUhboTK8NzRb8B3M2MFZeX4KjsWf5nRgqw9JheMq9dN1JtzhBeM7HQGkihj4kJJdW",
  "key35": "4D8tz1k1Ra48Zbt2cEUZMViHhqRZD8JiCm4ati5RnXG2mHJmmvvfk76gN35b1Qizj1FjzbmYdEajiNJZeCYanRFg",
  "key36": "5MrQg4mKj7CF1Cy6VCMbArXkmWEZ9Ts8J7UpFQWcsVoSfEh1RbxZzFTxMpik8hLH1JY9dgifNrotV6WFJJKVPMuw",
  "key37": "79GTYKsdLZ4fzH3BbdobeWzXwCMpHtqX4Uar97ovaH86r7AMM2o8n5S99tDjRsJkCnUv5qsmo83wtF4ipG6gdaM",
  "key38": "5VoTF6f35BmzQiUto9EHoanVfc2XmHw4N23oLkGvPeGGHgwV6cxK79fTqoQxfGqKrT8zPqZrzbMiyAvzkBrKi7hi",
  "key39": "56WWqgVna9n87FtnLnUAWumz7VZ6tPx4LbVwiLUazLSppQzd9rypSddRDBjZ4SFu8YPcmqogqhKP2mCaB8xEjEA8",
  "key40": "62fxviK4gMfSBdaGtySjjpQPkKXpEpCoLMiyczVsVxGeaQFnWRmDrUVLyFmDi9FiFVoQZM6XavuttFzY4WacX5gX",
  "key41": "28865moPs1ZetWU8uBwKPmCWoq9ZfWWxGm9ARTLtx6BSpGkfgJ5y1NegzTXcZD183GqJ3SCgRwrMUKXz4uNpR3rA",
  "key42": "2z6iYptDGNArLj7SnPR8ek2E2xRg38hhobwnGLowuHdUZY1yqm4zPDAoij81yqAJJwYYNf1ySpcrCcR4QY8Z9XHw"
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
