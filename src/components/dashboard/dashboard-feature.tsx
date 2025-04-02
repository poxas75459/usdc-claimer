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
    "3Umygr32nD7og66nj5oPP2GJwQpbGvtwCXJo1sYwNuKqYUW1PNTuu7suyZ8ZV9verR3YXmhLUEkZcqDZojm35v3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQjD1yGuYXaxwQwoWRDmjBPmZU4asmd5BVPw1vckV1znHUwyopCceiHkuXXX6ipFPqr245JDao6kLTQ46RdnzEx",
  "key1": "2RgtfcY6V7JPDLW7pPHXi988AgdQddRNFy4etk7SYqp4nAJPAk1Lh5y9C6RhX5wD9AUUJmLTxpkHQBJJoTJefYDy",
  "key2": "39W94aw2scYPx1Q6haWPGGMCceXiRRoUZ2Yc7hTsAQJbh3adwsZ5g5jzMMu5MkJFCXo9izSi5gvYGREDz4hJTETy",
  "key3": "23eRtobMDgGa1hD1xBgMdxABxPttjAGqe4yU63jp8AFASCcFSEWcLesLFPDBaK66vog2chHQj4Qw1ePi73MAfqNN",
  "key4": "4yoaDJZabQpHRQNTiM8Gk5kGbmPc6n3fss6cayG1mjNsUukTu5e5Zoz3TjsbHx56ivEGKP3DD1SaiN7JBCHGmx8r",
  "key5": "4z3Whz8uGhaJdbLNtSqFSrSkoTp4Vaje7fDW4rR5GqVzUmeUpRDEb9dwiGaTePxpM8um6Qe5NLPB1rx5t78LwWCB",
  "key6": "36nnyLYd3RKA8NaZts26F7nieBk8bBofVpUCE1yvyU9kRHAWJ79oT2fhEbF1urXtWMK8y4KpqTXhKLM4FD19RFBJ",
  "key7": "5Vc86snszfNQd3xSZZmgM731DQyzbud2i6G9bRawWkAhfpPBLCNZUGGEuGfNuz2JG2hQ24Nda98KvFJMURwqTR7r",
  "key8": "4Gv48qrJP22RgLTeqiPptTskQuXiBeuvrLSa4CEPPVyS8AEr38KgZDrJoHc7UdCJ65AfePtpacNKxDzXgC5G5cWD",
  "key9": "5vofirr6D2MGKdBdU9D3Z57wzodXrbsjcAmy3fsHw8pCRQxyB2dBGFYCHGg5KnAmXdD12sEAdivs7oQ3kKYexmbL",
  "key10": "2AgjCVg1TK4qz2Hihj1G2Srpfkpbp8FCeKtCcUvySjFCn3MxffBJzR9nSbPyQg9pQ84MyTVoaUg3y9WHq9mMRP7a",
  "key11": "WFGTcxYxJfxaKQME7xKSizJXXWu4Xp2FEtQ7xackc9FnHe5nrZHHFgrSN7sMyRcHEP4NwhTmr7S3eCUNG3okYde",
  "key12": "4q3UEmybwbrfZP6YeYb8stfLhHNMHUuZ1abfDWPZTZ8nFH22PhM5UcVNzv65anPtPhPqBSmRptGsaYG9g1MY6cwE",
  "key13": "4aY3nmQNP78BjwAaWRZk1t5EF84iUt6fXYNtbV1U7kn3Jeo5K6i9BDcy2pVd9g28QyNvSMCpkDmYQbvqMAHZtcZA",
  "key14": "3sJKRsUtqUXnwApeWTNsZXSVLynKK58towmDswW2FqpeHvP3YEgoSsqb6NUihgeAazchiFvQPvaNpLS94PjPHEde",
  "key15": "5hDVLCDuu7HivTZGRFUaYVKA3WKJ1J8kUH9wbqCEJwedYHPJ9UY3DMWZMU2wjqxos4guo7MZzdf33Pfo3jGJXeb3",
  "key16": "5pvi5gEajEJFPYsspknPHod5bUCcNu8P2gfwENooQXiQJW7susaGxYB6u1rCa8gPTy3KVSK6vvsEK2hf3NSKn3oQ",
  "key17": "46htRXfrYEiwVsPCTpLis6fEtPD19jU6hNGRqbGR46uj5VzEYXb8qBDE92WeL6CyZPzt33DKZaLDy86qFNfeHNm8",
  "key18": "3gNUdyUbBKT9gQbUTRFK41yGz1bsDEWiW9XVpEjHNmPSDkdWsPwhjUdjH1kVdnY2NqN7gPV4d6tpXya4p2uwPQMk",
  "key19": "4DmQjLwsRLqA65KJooWBooorrYCyFdr2XTASG4915pUKeNXUJHLioexDHyBhH7qUCXa6TXFZKYWW7wEaHqHCUinP",
  "key20": "2iijwcxFhqqQAfhqUqK4Pu6kFAxrxyVLdJZP8VgDemoZi3TFU9fdmRsPRy53v8pAc1163ZJMy4TNgGjEPyBgSi3N",
  "key21": "btE4xSi964dmfxL7ip8Wz2kCmVS6XVnvutr8m9XNiwxtx7jDWYqxbZriwpuZH7Vz7jXcXHwbQYHsbFw8cZ9bGA8",
  "key22": "2c2Xqoy4MkaRuKwhedUhwRDLEMiovBFKndd8pWWeNp1d13UPqXqopi32CPF3NsTkWV6kNM36FF95BMpBM4U65Ym4",
  "key23": "2UR2qRRigJ35GXx81EL25pMVxeqGR12FhXbpFviDgZDT16PZM8afv1AdMhQdmDU1jMP2ygMuRt4hvLDPYHouu1vT",
  "key24": "4p9wPvhVFEYpA4Dk89ViwP8S9Va9LEQzT1EhhmoEhu8TvV26KUvdxRWLjJ6N52q1zinSpeYwLKPWSA28DvQPRGkR",
  "key25": "31VrQaGxZ4tBwyqKsMtwee9amt7bmAy3wamB1tsiu3tuKE9ChuWAeZVBH1KnEzuQMostmvRRGZfKKroB8z1zbKJr",
  "key26": "2Wrg8dKX97XHvZPN2Mgz6tFac1hR5UDa6e68omqHzPiSuZxGE3bk1peCKtYyYf1BKfp86EwhFw1uzkMjW5WcYgMA",
  "key27": "45UtYn9na5c7Kh1yrSS89g2bMdnsvDJDg1g616XGesU2PLBaCmKAbMAwGwq1ZSpiHdqQFES38eQHAWHPitBpeNtD",
  "key28": "3CPvhGtbUygLpDM2goxNeQw8txoVRFMw7a3TY5XusY2VGbrcWkrVKeN73tAwxYht68FJBxKfjVeXx3YkTC9y2pFG",
  "key29": "22DfE92QQstQRfeobhLFVnBakX8evCrvsyJB9Jf9B3kvGsu2GKr5vH8Sj6L7H2PD31AydRi5dWCKB2mJyVfr7Edd",
  "key30": "3Lsve9RZs4mZyh2R5zGmAurGDRcrp3E6EA1oqPcBnC2VSkrdqe7tQfLwLFHNjfKbxpE24HRcae4BEWa26iLT2nkE"
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
