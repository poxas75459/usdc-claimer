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
    "5iZauRr47a71J423s2DLR2iiGgAJEsJJvskKYjyUPdMPcT6c1nKqYcTFPvFczMsf2R3gC9nQ65FTAMexXw1hMkVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38VHtVDp5kGWi6XnKxXmqZJXuEQRo9qcafRfB3NE6o2bAksG6F9HXruYnURuiAsF3jUPDVh7eCRrh4bjNsBirESU",
  "key1": "LbTpUz7XmYSc54PJ1FJheVAJkiUKc14LPKNh9nB8cRMdcaUh1YUM7AeyuxdMqk3YF1v9f2G4BwxqRLWD5VXJJaZ",
  "key2": "U8JyB6rQoFW9fahoFDrogv31D63DFpKTogtVUBm1zgab88W96HzVmBB79g2vE9uy2ZrGip2xHxx3kh4dSUohLFj",
  "key3": "4mjaaq2UykyQj2kScCwBufZfZ1no8gWYHL7AAALwxRJi7QrMMQd8z1rCkuT5noKBMWTGEZ54Hmh2BZKVLysthpY4",
  "key4": "5hWvg7iQemUJVTiaauN6KsuGBEEY5dGfUoe3tDHNS1EvxE9yUe12RXJZH9fHvwoz2NdU3oUc165GQkN49qdJW7TF",
  "key5": "2hNZQXfJVnF35sMU9AjqnwuTJQ8Ag1iTaXDg18Eb8KR3wMucSJ2EvyJqVepTYCvY8cteTwSCrQLCatQTzZ3h9EdJ",
  "key6": "4py1ZhdmkMXTFfHVa7xasEVzGHXbqopN4j2abNZXGEvF2ZRkJBT88PU8HTTDPMyMNbuGVp1fungQXib2YZammwBD",
  "key7": "YWEzVbDY6VXJAaCpL35w31kYs9mUz95sJD1nqKVGXcERCox1NKEqZ1F9b63aXjpDFfoCqi52e4LweKXRux8MQaG",
  "key8": "4AGTk33B3sHKHNfkk2DuCi21GkG7KDHhZcX8Lw9gYs861cuWnTHg7LmddFtsU8bVNfwexGCwaaG8UBp6PuaSoNda",
  "key9": "3yxPoodgVs6rwSFod4rQUJYktd26ZnoVSZa2NBsyn9nqaw3vQdtgxwCJhPEMw72uqKiRAfQQMi1f3LiNkbjRiufv",
  "key10": "K2H3d5by8Bid8PQhxvR1NhDPMFiyGNAAhyRny5KnQF5mbTQvnx948i1bQVjbhoi92KoXNkPso4iQpeHDqFYK22X",
  "key11": "3psHWqiAQxV41zAkyfky9uGqSCHnYeaXZZQfT96v2VDCGUumi9JnqGzzBEeBnRVrNyBkQ2e9KbmF6cRsFe1kaJM3",
  "key12": "3WWEjx53QKQn8JK5U2tTCReQdshNSS75DiPQxoeM5Hw5wLgPsTMRCUy8MBxakt4aAihxo3NYfVb68PLzV8F8vzGe",
  "key13": "4D9ACqQYUWpRFP4JxcPaZDbsQ599Vv7dNHVN69FsJAY12uAF2yDT5VXxmQU8P5U8GTL4azWZC5jxKYfeNCHCeoCX",
  "key14": "65mmnRyt1TnCEQDaYoHjCbTkvLNJ4Y3CrRyZwc67TpRiHdqYmKBnJRubENvDyBG2xQh3o5u5Z3uVBkzqh8kztLHL",
  "key15": "3pzh4nRYSSVRS5tWgX67bMbM6WwKhAzLdPjJ6GdXiuLxi5yTHvYkedqqvHTBbkCc71wabEvRKahp9XQkBNiyPtDL",
  "key16": "5R9DdfpWQPo69YNFPS8wZihjTis8RQNKbX4TpSq93LtVeGtgjHLN6hACAFxKo8sT3Xa8X3LgtAY8ti2Hcni8hQ66",
  "key17": "5rR12r8YFk4j32J5NYNiVcwTTdK63qVfE6CN3Xz9TPyBtG1cy3tMLm9Kryck6R7i3zekBCfmi3wsUoGrGGuoHCgf",
  "key18": "2TiqSxNroNbD3G5PYqWoLs3xUHfrq9oQRc75hi6sKRuCvyC3oEMcoeuoWKAmd9Xj6z3GcC4bacw8RcJ24ox9Qfv9",
  "key19": "48Dd7q26a4qeP6mbu2jswaDTMAErg6ikbQCYbvpZJsBugaiCBLgByfNd3aXCkS2QJVRXUXgmrC8j6aoSLeKAmNB5",
  "key20": "5GddgYj7VgdPoNWrv8rBwaFXCnEYovq9L3PxGctsbSVh9yCT6VmSmDg9zskedY465mcc4f5PizWcbzDWp1yRB77J",
  "key21": "3sgfMBs5pTBsqPnskrYWwHKbFFSZccFASYoeMtA5RkvYcJb98Xi5CpN5W6derztAFggQCxjjmFG9YAveRy4ZWLVR",
  "key22": "3Vb6ESQpMK4yQqEaZVczJH1h71sCh2XJXuiYxLWoBn9gMYSPmEPX71hqzfE7AJffYPAA7wSKhJAfogxZcXP9gTCt",
  "key23": "xpTcW4w3vxShBXLjX1DA2g7guFRRy8P7eR9K2AHtowffxW8Eh1kxteC5WNYNYAQ7sCJLAYehMuNeprnTBVRbzms",
  "key24": "pKQUjYsXyXjqWbCydBnyL1BTmdPrkEXHcrwEkJzFB9SLJsazUyudva8zuYkeb2r8vFzk6LvsoVjCpHMcs61pxXy",
  "key25": "5VptxBJXRomsnf7y8UELmdKUMbimwFecZ1SXch36bE1TMT2SgwaamLsDhNCUszUVBSaxCx9uWYng8hs99xNGu6ic",
  "key26": "3QVqZ6LdASEJPAbvF2hZARVpuzFM3AXbguc8MBXdsXrK5nrhxEimhEgzGRKURSmv9HqgKSKTFJBMJhSZcuBktden",
  "key27": "9Huuez7oYPsEpLHTHa7sA6agHQt1xUFd8GZPTva2KxEVCDRwhXhjawiTAqac7D5KAh4iHM3Tnu75B3d5ppW53V8",
  "key28": "3894axoBn9KvGKqUNsNAErA2ECu6yeQ9YnMjAyqaf6jtWPe3X9gAq71YJcjXhZ9Q67R8Wu1ZtbqZaaZ18QNrNacN",
  "key29": "Cz1B5rDZwCxJaLsLSbE6VKzpPEgYayKDMtjfanbVGfWvc5QkM6RDy5FcPVe1cxMy1nrgKuuFDt6RLWWHKfXJ1Up",
  "key30": "2tyW4K7LNqkcXUKmrNbS6oSxvNJJPq584Dtw5bFYsQjsY1mk18kXRdV2VSTJkenh35x5zks6RDeKQXeTypzNjvm1",
  "key31": "3aY7ESdX8XzzJG1HUaWcM2o926mXpyzFg16sGpj66HVvEoTPzgZnDRxEkGSzcyVrckodFMtKPGkuPxeA5mK5psDL",
  "key32": "3zSFr1RYvDKZXeCU8GnvoTj8hZNxh9wPR5kDSXVt3qW8tuEmgyEYRUuS3CpDEoPTc2rTRRwByksmccWMDKpqpubj",
  "key33": "4hoDUcEyZuFx5zdkN3jdWa8pktGXWmE9tDdBmz3et5ecXqaFefZzRxTBqkpw99su7nAtJ8WMACcth7ZvgrSGgUE7",
  "key34": "5edkEWmLu8t14jn9ZwyrpqjxeVnvuMwi6s1zd8xNqR17Pmak7BNRV7mn9Xa34XfvYSuwhxXwjGQwa46EpQQCHYoX",
  "key35": "2yb6qViiB7cKdqRhde4e4FqKFfqAwm4oPjAnuZoEpaGNhcr4Vw2AsuMeBayhwrU38tprSW4qsXoLd73Ssp2sY94Y",
  "key36": "2DjrcdwvpBo3na37UwMrVBGoSnKw8aGTwb8LNeUQ39Yy5f3JnBPrKkTZ1hiADNDG6gxvvjXP5haNtzAVx18b4Lm8",
  "key37": "5KdDsghSTpZPXfvKZx4r6aTgk15unbPb78NLArktZTVBkQoiT7BKL25D32ZW7hSiNQwWaMuFkCURtmkrfmLepUVg"
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
