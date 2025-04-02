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
    "3EdFe7G21o7rxZv4hrBpPDtgjw9jioDMbscJ5ZwKUimMqjemxQefTP9sYX9Zv8wRvkDcKYgXwk5zpp4HiBcWLXqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65VYBBnXMgjih3aMi6xMh9oyoG3Mn8k7w1HnnyTVz9C4yKBJ6jU5kiwepS3YAPNTASYYQf22bEQVtcJ1P68Dx7RQ",
  "key1": "53XpqfghKQwGhNq8TJfK3PdD4dDpNVPMzDRw977aqwvLTB4f47UjsRoRt3PsmydfBwVLubnKWuz18rXSaYWGmy5e",
  "key2": "4yu9BucXGWj8X2du6rB7SbohvXsppK4ydrqw6TN1zy562NdNUQgu8B6cZbUdM3hy1K5R46WCxQ8diMtfzqngdMYK",
  "key3": "5Bgy7BwKXAsifHsLaC1wVwuLJCmrW7ZHkfy3dWTjH1GTg1vYFkX4ZFuvi6r3doEZuGdJWFpe8wxLRCBGHdZpyT5p",
  "key4": "pQqkXZtjdyCCc25qL6e7vZE2mHGyC3nwPhPwS3TFUy3Z7qz2h79w5SyDUZhZCSaj3Y1ysuPkspNjPA3bYi6u7nV",
  "key5": "2gWYgp3d1wa4YhZcw5SzNTVNeWwZJ9AyoGmoe57F4CxzCvufsSyPGNHvZ9pnbPbjZHCfZmEfTVNkqPiRnyxSicdu",
  "key6": "2yWE5vEr7rfwDLuboJNFLNQLaKbaxx3KPj19bMcXR44f9fnq3mZntKcde5TpS4K3fsm5ZPkxZbKo9YEBVdktJSy3",
  "key7": "2scKsFJjWRtUVADa3oPvxAwz2oTmj7h2kZ9Q124sy6XEWZjNJzhLs77ZvF56MxiongaMXw6DyMrPrDdXyEa9gE9X",
  "key8": "5ajgEHCe21UVRtT2MQjbJJYjA1pSxY8ZMuKshhj7kCYEueWmP1U1JLnR1DfNG9yZ9GQkKm6mVXbaPXVvRtXobKYC",
  "key9": "3hR5PXh6rgTtUissDcVtMPxCDHzVvAcAtWhqnFkxArAGp5ixmNURLhjRVjMMY4KJh86F7hPEn1ZzLdLieg1t1PM9",
  "key10": "CM91zWmLtvSbvvTcAezf6SCm9LZfcdQ46fiucpXFyy66CbpwqMn4HMTRN8iDhDEpWuUVosAUg56AaPKkLzNMZyz",
  "key11": "3or5rztaWPrvnCocUTaWBG5Wk7oohRxNqz46tpFpdRE4XDegJiHDvgJvzobvZAb6hjLWZRBu54GZhcF65EGEJWrh",
  "key12": "5zoqNVgLL1W2exaetUKLpAnJyfdDGj8qZWTmvPcNwPDRD7N5ncf7SyjW5dEwEDk134Zzn2VSVjx7uq7miVQVZz7f",
  "key13": "59wP5Z7vfJdidEFeAovCa3rrWieZCqTQBKGARuKm28jPJgrf3MnBEVFwsZK6UuHDDJPqwQW6qWgGDei4GQGdNV74",
  "key14": "2cNRPGz7NLt6c92DvMoeHcJpV19JzYKphWMTqBuXCMX6eao2A9hRWwGe84koK33RkaqwBhJi29T1Lq2VapT8cwgy",
  "key15": "2mqTdMnJGj9LvF2boXNPJKYerSEoN174DNphk18HUaH4w7kG3boNgBvm4mQuMufauyjuug9pN9hfd7DBy1wWYP3b",
  "key16": "hedhnYmmMdwyxKM49bAg4wPxzm8u8yDtiuhZ9PEu6zL3feZ7bwqXLQvwGUEnbBpzVSkwz9yFeftGnuWdYi9V1vF",
  "key17": "mEntESQzMjiuoiiVzXr3VyGxCBYPdxg5wXwGE69SviRpM91Chi75USM23fg6wKwGEAEtpBmrkBvhWRHsZwaW8zu",
  "key18": "5QHXwMjz4AnC36JCvBCBbEMQyPtHibKbJPnn6gHcuTzSE5FyTZj2CLnAGWX5gifiFcd4ZD2LBbPq2jQaKJkci4a2",
  "key19": "5EgeZw7tpTfEkjthtJ7So1YG6J1vGRr5FMducwVdRvMvhpqHtC2jxBikKoQgDoXUKL5dGRRj2WTwXKAsZ4WWH6Zc",
  "key20": "5GU9GATpCpzfunQPkMd8daRmGUzdw1yc8RnNe8Vf1DACctfF7ESTTMZfQyN1LLALJo1pEGuCXzbgp9RqwfdWf4o2",
  "key21": "Q5vaBbG26J2sAyMKutjgtasJPdHwGt4VJ2nbuh9T8m1D9dfk2CE7PVAB3uY2QUoGa4BGtvxcBZgsrLyuGvrong6",
  "key22": "UPF2ePSTBRjzaHxCM23nvQ57Tn32HAaP2Z1ZjaVhNDTNByvM2t8KZABh9b5cdfHgQYDHxqCx2kd5TBsBU82L1c3",
  "key23": "5T57BVimv9yf7P22JBmBUpNqEjx5WXUuBLn69h3DETFzCtcqDVyNbLUE455HtQhqByaxBU3mYFk5cbxUZK6Bhk6b",
  "key24": "5touF1Fpbsy1P1nFv1n1yLU4eNzjymoU3fex6JUvK7ac24souNVQMne9p3641Qhomq5J4Vuxwj24XbHqFFD2phda",
  "key25": "2xD2WkUoGn3KLRbxeTe3iRtsZN12ge6bVUY4ZQNM4kmugrouoAuxPBuLJZ93HrnvNfdMFZ1zco5qoQL1EaWM1315",
  "key26": "3t6QppkYhpweMGuLwx1TyZQY7QXggotSCyccJfanXdjbJNZw2RAF1dUvj66By8r2RJbVu1spZyiAS8nRsUoUs1HA",
  "key27": "JE47e4wvoTXWBDUtj14VcQs4kEVZqhhix7hAW5i7i8Sxg5PQUeH7MQAQB51XzsXxpjqzqpNBEi91kpy94PPyZ5z",
  "key28": "3FywR364krHHeox25RyBNRvPW8GQhAnUEERb6HvouBXzRb1oB4unucNYiY3YrTAgAsn8PsZth1rwWnFUpchmYfTN",
  "key29": "47cxs1HhkjR4nTw3LryTxaWNiTDtQ7fFM5MGX2ZBb3aBsNmF3kNm2M39t14Mq2zrULDuM3YcH78AY3ypxQFwhz9j",
  "key30": "4Woei2sG1n5xvRnMYisNXoa3KBdd54RK4vD1LhehNoxguFoJNAdwjGSgHoKwDj4eTmBwMGvWPJGMWStBRTDAGMsp",
  "key31": "ucmLFXGXZ1soPkdFR7JQAfxEKtQQa1ZWgVbaEpudBkzhCTe7vkVDs93hTuiKVjS2UVzphSVb28RywJtwHtCzMvd",
  "key32": "2eKUoiYsGZZGwL7KNuzRbikjSz46scVdKdesiucGBzHq5BzF1dqQyJMMZYacYLibvDudFF3t1zhfXzrULC1rTotU",
  "key33": "3Em8A3VuJsHx16gWuM3DeKzk4vRxnDLDD3d5UiWCCFkDMVKG2QgiL9btQXwWoe8rKVHEyX5mhcyPtKUzSkf9mb6A",
  "key34": "51HKFPMCMamD4f6sVtPTeoUWJckPM1yHH9SkVDWiVtb74eJuWKsCr7vdn3HxZh5XWqnhxt2dfPYZBYTDfZMhjK8k",
  "key35": "4s8Z3ah9zpQcBjqj3cg4Jos9VXGB3At9MpRqJaNPL2tcteMtafc8Dg7tL49x6HtnfUM7MipmChcZpNRCKFQjL7BE",
  "key36": "5PDQZnk2tBjibwQUdjG3vVaTR2y2Y5ntKjBQwZ2XZjoG47Jzvjbm7qM4BwDUaZX1YbmiPPLZnxhTfh5LQ6zvmi3G",
  "key37": "rMS2mvVtEDgqW25338QSJrQs51BsQbQvuDy7hGca2HY5MnZCwXPiGiHMgc2WqZRYFTpCAYL7YKVEa1cwwbCXuan",
  "key38": "5tGFuHdwAusKZWySuMQ6vKHS7zAUR49j8r7fZGuzM25iXZVvapkrPpRUYPmFieCr8XisxKTJbAFCX1MK84qsXj9r",
  "key39": "cMgNBGeaM6qfcsZcPEUJNhnoYgTBTxYP6f1NhjCMqhmJuppUHCVBHW3n2Eywq8eTCYzDhzb3AZc6fJwmZJpTxZC",
  "key40": "4WGcB6zCyjcsbrnRcmkRTr3qMMAeomHuy8ymnrPTP8tukTsnLwPzy9Qf8xdEZKsnno9tHWUYo2bVC464J5SKzUzh",
  "key41": "2kwevavSunGa2Tpug5LfmEgxQPPJMxLE13q7jjR4cQn8WQjxjnqDK72fwqr1TTSPZwifauiQ3Pyepr83ZRnFvLF6",
  "key42": "SwL2Eia8eugPu1asLFmKCz9pHegmqtasr3Ao11mvAnfX2KErpmaPnxcBmb9XgUHsJJEXBWck8fzor43oyLbgVwv"
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
