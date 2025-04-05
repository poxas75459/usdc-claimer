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
    "639UhBdmKuhW4ThE3uHSrT6PDV954nMS7DPzgyW5Ef2bzAFnwMdXQNSeC9CMrCrdpcQWzazZ9NDJrqUR7TtNZUUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LvLsfzvx2iNWt5Svr74r1Gdhenaf1PwHqU8wGLh1L1nqasSv3kMmq93XqybjwjKYRBycJnP8iY4xYkJbKxsJXQ",
  "key1": "2DmvyKfeNdz1gptT2iFMmkz1GYveMV2cKec1RShnTDiUFzgXDzJkMbGXn8jHNoEfhLKd6FChe2haiao87aFFpqPy",
  "key2": "4JakQTyhN7GJp1Ly12HGxvw7B3JGi6ituVsnesdvAEJgykUTqp9ouJnWX8xogMqvHgD9HZhbGn9xikSSXe1ktcF1",
  "key3": "4FUHEyG2ZAnPmm8urpKkEZvjP2ePtekwbKPGU6XWv668bZZ5hmQvMxLVdtVCqraKv6kjPTunJokZ7itNN1wS2D7W",
  "key4": "gVVgTxdYgtW5p5aQaPFgVbY4C23jePg6W8SnuSonymQzw5Q9AwMhLV4RZqtznnWNK9aqnXxsjjYQQfHU4zhtSCt",
  "key5": "5EvFSJG7KKxqjwzR8xsNySa5Hut3JdTNCPvvYTJxL482vCqN8VS8PMcqVAQGvfdeHsBuESd5C7en5x8rjJJxsWF6",
  "key6": "5GwA2baZ29LEBmr2aMLsURv355nGTAe4A4j9LSG3gX2cYA2DkKnvTjTHiiJbNBsaRDZCHWrGS8FpY9YsHgU4Y3Yp",
  "key7": "4w7UXHztxxo8uEtc85qBU2n9HpB8Z73hDNpDZvTxM7u54mc557DBLjpUo18yo7CusdDerBrPoQhb6zjoDX6wGd4F",
  "key8": "5LGXpL2ey8pbdD56RM5NgRXjWiBSny6mAo7Na2m662L88pLN4bz8u6U7QKmRwJZ4yB62zHZx5ryUFjZPB5MAEBym",
  "key9": "5iB5kWuwTR66E4CHfjoRy4G5sUq8SQT9TuoaQxKWNvhawufBXex8h3vnBBxTD4kr2uKDpQ7jbbXF154QNoPcvCFN",
  "key10": "sYReYM896od5cM736a5i3NekP1mqPDNJfa6jBYb9Kc6Mfa49zmeogF5pWJGfUFAVHXNunuSKAeQdt5SXQDRJMdq",
  "key11": "5DwmZ23MEK3GQT4YjZUwVG5fbcKYqtiMhKLWwKnjYcmJ5o2cHjV7cTvmpMx8nCv1C9krU6PGLwRAKW9bGHJPzCGg",
  "key12": "63hsTom78btRUfGpHBa1m2WpZCiLMXhQ28VSabhCuDZgC7cdZoYrfFyxvQv72US1QoZJeCYxEMCMaMjsYXv7oDM",
  "key13": "5UTxMb1e6Vz4DBTDgU8QNTtBarVcvNi3ssnkzq8fW4kJx4wYH4HCJZWBryBGCGphuvafdMdU7CJ2s8f1SVLZCFhS",
  "key14": "3HTpikvfVnpJBYsiwuijSQYTrnhB2B1viycF5CAb4vrAjLxfWHo9qoWATgBFViTQqGpDPTWZGeX6imDQukEkJPPB",
  "key15": "4L9L6nMb5WAFtRUZRuD9nn1YC69y5hWMZDGY3fzu8i66JEzADFXJu9By7X3U5jD9PLoqfBfdfkzcNH1RVbWqNwmW",
  "key16": "3RH27VupwKL9vVxRboHs167xDPnXYrQwvb7KthHsRcjba13yfJa5hdinHupqp8ZfGXi3E5okMCWGz26D7o6qWrap",
  "key17": "29r3rqsda6Am7fR8h89LqNsbrCYzVwuuoUtR9coGDqob1DnQLbADPJtiYb5Ja1k5m7fSsHxFSk6b13QgyyaUheHV",
  "key18": "DFwjscByXVF6pmhSaW3D5oSNSgzc37FjJR7Z8NSStEacAcbTHm1c7WChvjQVUFjrCe7tms4zxK7Ccg9GpMgkMPy",
  "key19": "5FwmSjMe9TUofRRE4NatHWqW7ip9vxMVeM53q6gvguu6fD6T3Y1X3xmwvQohJFa2v5fhHdeVCbZe8rQohzGNx1R2",
  "key20": "2Rpfab8WQhmcLX9VTTKV4ihFeEy48npr6WXsQ2wnD3sHLJMjdrsQWGhvdF9Q23yE2Pe7U3r3ediZUqFBhrZinEoe",
  "key21": "2WJbbSi9UvY9KCia28sQnqA42HtaTXZSu3fGW88gD5ZK3mXLCgxts5CSc3NUgKT3957cocHXhbkqVs1atB8RuhQR",
  "key22": "4N5GTaEKt8gcmt7DBFhJ3YN3BYcEwPz2sFq5JM3eFN5s2p4ZeX9TcPqaQZLvFi2Ydz3xGiMjbVfdDR2iphCM8bjg",
  "key23": "5tEDB9YFSKb8AKHv4PooELVSwTMCFtxXhTxGfjt898AuTK7osDUf2usmFsV8RGSq2bnWvR88oMzLqiq2kRBdwtWc",
  "key24": "Ajbko2P76KEcNC4atSawGgkk8rtWKV4dsNsi7PUTRoQv6edFpFrHJ4sV3qW7pZmq8uYkiusdHaZ22mh1Gi4uryr",
  "key25": "8H3bSAAfeSqgcpwXBGdVJ1bHwCwmgBWZ9oQGSjyioG2Vy56y6K1dKpXEfeENpuDLRYjvQryhjFcsDBxpLCzZHjU",
  "key26": "2E3F3HMiEUbfU25VC6DpvstmiBHkjNd21pPmDfrvAZE6s6dfM2gpLsWK6XVkGepUif2DH6BFYCymENqe4XXQKHSG",
  "key27": "4aw6MB199YEVZnaMdBULje2gXy8E73r8zfBfKATXfY8nrhaT9psqj3PkFfhmKJ1zcrWCYQWBQBao5pX3mad7MxNY",
  "key28": "5hNpjCd8MsS7WnQrxSG9wvyyHvKv16TEVLUBTbMVSnya2Jevkrds7y6Jhz8Cbv9XWpvQSKWRddDBt9bGGYyASmw8",
  "key29": "2VastxD3mMpncKWKMqgb7S9SokhZhQ88y4Ro9UShAqGNgmyy6FnxR9gworxVi5kWzHHZumNti7emDgd5mY7YDwQB",
  "key30": "2a9J9qcNSKnx8G9SiGTzwEVpFMDBXjtgstpaDG31uVm3wfqQEXXrBjXW2VvEeQRHVBs6pjvu4NqXLfg4qNH1F4qF",
  "key31": "2dEPfAtsn237qcFyxVTn6H7jYWojMi1kvYtX8rPhkK6yVr2dPskiXdgPDGMv9KhMH6zyrEEAaVFBXnV7SsRJkWEy",
  "key32": "4iC3YShmuKBV2v4U8i9W69hiYG6Ly65f9p34533J9XbiN6yQfiP3qgEZwn1pb6XMKJ8CkgM4Cx7RZCMucUDuVXq2",
  "key33": "3hSpxqTrKh62FdAA13g2i8ZT2PMjDRt4S9W8KLn2Bq9FrnuKevqvujcRMPZFkKqZQXcLR5BHBQXHi5iYeDWuN9GQ",
  "key34": "4R411ALrjArA2mXjoxjeyQtZhfxCZVZmwS46QoLQ7ZAGAxeZqDKmH9PTVpYXxFZPESDC91nA6Wica1vqqT7oPP3",
  "key35": "4AzBYHUUFJc2AH5QE2dLaPSFkf51yz3KcXPyzF7i2fVLECh9mSTCVhoGPbSGgebWXfAimkXyDwWjB1rS73FERy4X",
  "key36": "4ijJ2ajpPpeqTaY8jUuWXpN4gdfVZxLsud3Ra2DbPCVe1ZpPemmcHDi8JqjAKLYXpQu9EzA2KGVVzKkG2kydfFDB",
  "key37": "462KrxBmDA39GXASW2sTtB4tkyPV15mJsvZzD2XaWd7UK1u8DA57h4sCGxTAqSKEeo9SzkWqFoodcDQzNXW5HW3P",
  "key38": "24GEBuBQHZAQzoMRyLYjzzHtvRANzu4tLvfNP7igAmaHzPDYPyqJUgWy4J5iiRX9E8DiBc9d8zunVrYuTcbLgsvN",
  "key39": "4MKKjP4MzpUW1e6jaZq7iNntX1Y7XJHtQnzbsQkqKELPaV7tDwEX7KxfTWuFGUovEbtgG2uX8h2Fh4uZHVdzT8Q2",
  "key40": "5wXmK4Vt7PsJ4uVX4SSePYUnLhztE8PUewpXaUJRUtfXkdMBZ4zi8MbV4qNY9vCSovD6rzL28zY9XnfxfqFUg6jQ",
  "key41": "3NrjG6di52sbJLumaUKodbMdvoQCf9KzrYhFY43e8FiyN65kvoVAJNjtR46YfcjsLEAVTMCZgmQZEYEYFn9461Rk",
  "key42": "cnMktT5EUK4ccqGWMWzvqDc6FSXs3qCyj1zthDXmDTXV7b9DkeUSYkMZ8zhArzgXS7JX3tuGwhqAzE8GXFDhu9w",
  "key43": "2igKTXs3s54F9dttwPsrWrdY7eyMwuUkQHxByouamCv4TrnpBRsitSkVrC7LYSdW2LGAthK73k9EPadMx1h7Uk2C",
  "key44": "2JoKiY3YziANMeLiVKGeJ8QoncpQ3GjmJNwZhFD64eu41bsy2q5VGsfYCqNxUdt9tTDXvYJrcfN72vY55Wuxg2QL",
  "key45": "hNCk1z2PB7NveGGpjDSUeV7VYNbmz7qStsf2RKh7ND4qNKBoQodcnoDvG8RGZytU7j5gewzLxDzVPEHD8fraqeB",
  "key46": "2R6Wy3Q3rQz8bUV77V9tN5LDqVDHLobyyM8SXqLq8cHRXWjwugVG7BynJoaX7LB9LBLgrRvNYmZprpKqYr6SoLrG",
  "key47": "49eyhthv9CFbWWXjhoJbnUYonjXxbhQZX2FLPu4nUbv2ebampzNUjEzAiUGuNrCTj8CGFyzYxBWQ5mUWpJcBjK2L",
  "key48": "3ZNbJ1bGrvmJZRbndUdbnDB6DSM4DTxgtkUrdqZy7a8ExTdJNiFoZd8fpf8zNEib38b5V3bzSZWtBagd4puJui7u"
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
