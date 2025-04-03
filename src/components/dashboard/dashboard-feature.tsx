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
    "3ijqeP5BgkqEQfsT37KTCZn6UfgfiSaf87zDwrUTs9oxf3k6Pv1j2Nw6tNiivbZEFgRsWTyze66CevvmxzcRMWeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56f5gPkMPMGUYLng8Qfn9TrooMrtygjhXa48iXHCPizfUZDv2Yr6HkuwJ7CZ7mLfz9XYoJ9gXaYVqUgwUCnQbrCP",
  "key1": "4bxeqqUGQwTQhUNL5MEcw9tofDhhmf24BqXfDbF7viwvyLZxzvGehfG8E9zKP9TDiUvnJvrSg71qnhiDyXkfSwwU",
  "key2": "4dD9jgfmi6dxhGVgK5md5Jg9tb2gKoy7T6LS7bBTohGUz3TrLKLudyUgCgVpy3H5mJ34qJkWmLnULVZQPMXjzSSJ",
  "key3": "3ty6s9R2PrKYkF2FMpgXaEBir7feq5KZLUGDFHqtqyKMigi3doEZAn8REU33ZLHt6fdAhn9QecSXi2JKhW6Ej2G",
  "key4": "3maPTd59zug4ipgPgqkroDBGYsP2VuMJTba3GNogib2QGPCnygNnvfAFAZkTJSERQcaqKiMHLeXj9Cr3eZZQ3TZz",
  "key5": "3wdVKazRWFbioqUPyj8vpZttFsYhghaJtgkQSehGm7QLUVBHMcjTWkmT7Q8wn4aj75tHZNz7SqtuQuUwgsJrsibA",
  "key6": "2fje6PtChMVVdnQP7novwYYuzGksz5QCtcAMJRr61MzCkWadHeL5NbcnYrs8SWWiFtMXZLy18qbwqjVTf61rt8qb",
  "key7": "43WStg4CWoNKDkaBYTyn1A4X1bSiJDPFQuW4AddkzPh5GazSVAtCrbtZmW8Z57gayqVBeBNNAMDHrjSGq6eJfm5r",
  "key8": "63Lm2rkcgV3JwbT9dzMZme667BJLwDsAMUpL4jv8DvT5XdfcgPitY7ypBonP9JRz4Ww2ktHmBDp5zqhRUJPTdMmp",
  "key9": "8C2oDoJxhdMcqjnj5p2UtF7M5neNz6awRV1aUmaBbiNuFU2WQLigK5sv5Cy5GzvBt24TeXXeaLVfdx8sHmAzCw5",
  "key10": "4s9HkePcdSJYpPnyYXZ4z3U9c8KowWTnffL6rd6VnmPmv8Bn81VSPdysDAvfyknb7K4B2iSvR2KVKHb1jW25QYWv",
  "key11": "2VjLCy4a2413X4vwP4u54ESQyuVSGfHZkaaf1T29Gp6CXWRHGPG9voqV2adauLCPgPXtGnKnXuMhuFaK95oudX28",
  "key12": "3UrsxkyNugL28g8DcR3g3rgsdwUAEy1Wfy7mS6uBLgDUCZyZ691YwSe2N5fqDcczm5u2bKZ5iZ3CGb5fxxz5EvhP",
  "key13": "29dG5z2FKxnwk3vGtfHmaoNbi3mFa8Jeh3b3R128SfDGhFneydrg5JbTprkkKwPCrAD7u4vF8S1rEQJ6eJ4rBQRT",
  "key14": "3ieLgxDcWKZbz1vMuYcimV3BBQVLPRkPTRoPGa5PxY2ZWxTv7RCeqQv73yjpwWncJSYfKgHsmiBQrj4vVWany5io",
  "key15": "4y1hAi2KeRa7Zr86pz4fvdksXFCVtPrsXQjrtGBmoNKHeA7pfZFWoaiQkmjPmvTY9DfZm9nmxcsXvfcKyjWa1ztJ",
  "key16": "3zp5g4FZeTnyTavDffthBMAtjM74hgz2uZzFTTeQrxYxzhB89P9ZQdjWpGggXJkai2wnagef6FpTHwgW6i9RwsnJ",
  "key17": "3A4xQxZLQowoTx7uZhgUa8tnLMrPWURPrAV4iaWbK2eH61bA84vKzPq2LuUcEhjVNEsnK8KqAznu8zmUPBYCyNRJ",
  "key18": "4t5zrvGQgoKVDzr6cKmc9ZGJoBFK7BLqwJpwGkAWG6FA2DWU82PACUXXYweqNwSENxdNshaTKTQMcn4chDtAAWx1",
  "key19": "2Y8zZZYGfLoJp29LmuBRCUVut42KLtoCvDa8TwdPFAM5Agh6Mt4A7jtMovWCj7eFLhRuQna1YLvK3xyuQSp3WwW5",
  "key20": "3QXHLJ2gbHv7qSFVxuCJhyJExJQkkMCopXM34u8EJemQgbqarDYcw7AUUxATmzJWnQVZHTP14xk1DygUQ7YPzEJk",
  "key21": "3jBDUu3bcRAndY94d19E2FQtXdyL6v1DFoWgMKBa77fzdGia1dsm9T23GZp4MGsVtHRDpnedGvFaYvVMoJwUnTS5",
  "key22": "4ZDq838auan5897b6yH69ZmzTfqPPPQeUyV6cg2vrFDQJ7Qv4JGL355pzGyMfFg3WEwDr94H3qknu1Y3aiwGVE8P",
  "key23": "2a2CH8CGN71RRjeHxbYSawxCxfcjic2xjq81pmJTGasK1CNjs8jV52gdoWMw8i2uqn9vkE5H98nJFVKMcCK32pN",
  "key24": "5ZYRRJuJ9o7TyLQHJZ5ui3aYbhPG5mcBDXxvFB2y46psSYSirgUfmdARybz5ubrUw25jtRFLShSjpEY1mFnRRUH6",
  "key25": "4Wv4LacsbpVgzHE2HdPFYcc4sgh8wav5Vo8bnTMRU4gnHzzuxA6e3fKrJkgDaZWS8LfaVPVJLPjzVum5UQjVqof4",
  "key26": "94isdpgUsb25oBWaXuBAxSVvnbEoQnMDYXpgBRfygTihSb23W3poQgHwH57kofphVDkeMcKof4zEUXSy2n7kzMy",
  "key27": "r1fgHvVxWCsV4rTZhwEhuvCA2nkaZP1rX6cCXreW9ELJaG7yCswmkutwN5kFeHitbpZYKpttTZWHWvuVv9WpYSk",
  "key28": "285hjkfevvoKEj7TSviVbtQYW6ibi3UE73sxXPSGmbXxS1awUwrDwnGju9ThLULJ2352RPuMCzndtgk9dAPwpvEm",
  "key29": "2ukVeGdvnV2vN3mhDtySsCsxJ3BUzMcCNSRNuVdQwQ3Z2EfyVxauPTtQ5GQqenhTq2wUyswj3Fysv5KnuewJNFo6",
  "key30": "579sNcnsSSvESJLByr8Wie3CeEa2eqaNfKm1LnybQ5vYHXfJA3ne3rBcWL3S7HXAwdFbkdw7f5RtoERtbjcyJRq9",
  "key31": "4LStaEsHiisPDFwo5cUjDz76XunaLu593VGhTUHDCE6YKr4pk5Lkaq62ZdGLQFZhFJLFChVFwx7a9qm4dfTcMnqp",
  "key32": "5QBdtdpuHNsFpvnF4G74WW1HPc56VujqwFC9DrP8WDypTiHsdXb2KzaysbVzM2acF1skeyk6h3nq3dLEDPqPr8h8",
  "key33": "5o5J2UD8oYFC98H49mqYCJodqzJHYJJ6qywDqDu3W2cT2B51FWC5WShG98BziLKBSz19JUAK9C3uSpaeN7HB9L7E",
  "key34": "4rDvZLQHVobAdnFRX16k7sxUyMHvyWwWJBFLosu4ybDJJeprkQAnQhmcZbNQ7tjXZmJZJFnYb7796L8E4N474LPu",
  "key35": "3Hj2bhq5vDJruXxD1i3KjsJ2BB7LEUoShigdA3rptWo1Y1fxLFK3Kraw1iDBJD5XuJpeYdiZE9XuZWyJyVv4pegN",
  "key36": "4ZtwrJD8khucQG9DPr85xSXK51t2tU4rhtcVW7q5VJ9Ppw1dzRCZxxPwy9ru1JypkhpksNXSCHysaAGwMpDJx87v",
  "key37": "5GQTQBU67kDZFRSCx7ydSdKTuCGUieFCGjmpeekAi88x8NYAhRRbtBKWh43BwX65GRR9C2n4cXHF3HVxFpNBdUor",
  "key38": "545Qo4bCna73Mrxo5ki8RkVck75nxoot32JF2R7Hwmp8542H492ae2yLVhdterCzM5C4i5faYVbigr6uWCQt9YKp",
  "key39": "qKgxQBAsncKLd1VT7vw1wL6xUtfnsQrueh1SR6h7Yc4CDiKxg2PD5g8pzZ44apPun3EMCzHXaq1PUPXNqXbTdWq",
  "key40": "4pYwpDiPP3b6eGt4ueRu7w2pWz1QdBqpJP2PgxDq3NLFtZWH7Pv3LofBm3L9aaseXZZyjJ6X7fTfR6UDSPhAJbvc",
  "key41": "28jwrBeJBK78u18dxZnCCtetWeFnwyurd4hiRhrLmGcbgN1zDZ5FCW9MLGoosfyYW3oYpST9aw4kwvJynPd1DFzW",
  "key42": "3kXDqtZDwkr4eZyAGczgeTR8xUFNvSzjHa1ZDZtqvQCgvRWuNas6hryLbFjwHENwRqfh8MMT2pnohEiQgVhioJSg",
  "key43": "3ciMa4PbaQhdwu1765xZGNGaD8VV3gHZWMqDEfoqx4beb9QDtiU4QLSPWn8q1uPQh8h4s9AtDcfL8TAcUj1L4AVe",
  "key44": "JH7b264QMqrxp4Qij5jXXZ1jddgDgUNYkjfhVdhTqMgsb4bEhun9S9DCrvAakqfJ4CLgX1R4unqhXWtf9ms9a56",
  "key45": "48uCFoWa2dtDBDUGjU1VeuAQUyCngo5sQ72N8ATnFQ87XxwJAC21HB9rJ8ro1KcxxTUi2PEXgnPFRmHv2cJeqfKB",
  "key46": "3YBU97SQyKgaozfamcVj9XWgKBb7XpfQhNyR3jVNB3MWBbWe7cGzUrT4jsecWmysjESqKF719K1xuqyx2kWq9FRx",
  "key47": "3SRUdKg1iC8fipsTfVktrWwRGhNKg5G7NjbiMEhXfZkpnRdfLGmjFQp8xTe5Nn99wiDf6C8mrssDikAZ5DkTLzLW"
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
