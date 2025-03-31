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
    "4etaGpy9buJpxMxC5R1YLvwYTpQEkhjqpqJGCusqPqD7jdoTbUUAWxcQJw8wHFH9gCbjrVhMSgceyVDCnwofopND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "357ofAPHzkL6ZCQmexPWQorFpwxdBKPCxG8rkDReQRYgCECP9t9Yum73j18JxsQkJvMN8Cv1nymQPY9iwwf4VA9h",
  "key1": "kC4ZNDoYzo7uZEonbqrFnsP6o7ybEaXHuVpN9BK5A5eP3shDK8jKswurd74BGDmwjwrrKotyJ6P1XKk8bC7isgQ",
  "key2": "tmSJKXj6BdSpgVxFcw7fZDbopZiXwhUKDi88Fn4ExxXR9xM1swc3N3Xi8Cr5fHctTqVjkDGEsLb4rqC3cJfcWvL",
  "key3": "5jY2KwpgY2WLzFzXNJDWpYQJrLHiGZ99ppLR3UHQCQGWTzs5SswG3nz3o4Dq9227HkWsoXrMSpZFudosKKWSKFgd",
  "key4": "rc1w44wyE8vfTfsQHMQpNGBSXVdMFvVofJyoT5bzfFbJFg3V4rBNNytREBbLJ4fs5NsMSAoEkwsGQ69aWxtK1bU",
  "key5": "5ZdLdrays6bDNqfXMc4eKJsLNyczKG2mcFnU7GGMpuTDBCYHkn5VG4uHHuu7CkGZLgxJUBYfWW5s29auSrDv1YX",
  "key6": "4Rd2rB2xkwLyGzUhNM7GP77Z5hoFVLLx51TVxCbUSDcSHTjYpSyJKbst54sSBiuvTfe4jJ9YJZ7vRwQpL5DVGeTQ",
  "key7": "4ZqWNYFRZj8wEpbBeQdVesADDd1LeenKUBemQ9xWjkvoaN4CzxUVLARCmrVKEvgYJEdTDJhbsYV6RNx8nbHEuyde",
  "key8": "5uv5bpCqbGwxhN5u8rmqbKobHqmdDhDZsadBLDmMFKbEi4tCDAqKwXGhGA32baZQb4667rPzTpmtwEJe1NNZ5r8H",
  "key9": "ocj2hw1R21CLQkKfS5UdXarrrCKGiQrqa9qFGzLz1cwoWRnFYWWrn3BPJCDHpa9CXNLCk1ELttQ3MjGZS8Xn3kw",
  "key10": "Q7PKKJwFGaZq4xgfSsr7XavhNdBDGpwsb3gFLRhMoapfTsWfjuwtWNcqrN8iN8xUVvkga9bm1kdpeJDMWRWCUFC",
  "key11": "gkyKGtH1Vxcpq73shcpv13f2Fwu8nTderBi9Z816azpabbRNGBSL78X5smnBjswEGqkiDxMuFKQT6815w44JJeg",
  "key12": "2X4zLSJoGeDgm5BeTpohHfwnBVqCN8GVXbQpcXT6cLPj9CdkB5F4DHRj176pdgLhj5URQNBMmjfREpPLEhLPYyiL",
  "key13": "Kn3vcRrnqxvgC7tZNCJMFZRSV3C659hFZKruGprXTm6oWQRRMqZqaoKLJ1QmLK7Ph42VmnpoaRcdSUF36QCBMtX",
  "key14": "uSeX4e7UvirF6eP7mtnt99yzaCVEL4ADxDgxXmRRyd249Vsk9mmWU1rvL5Zf4mTtdySAchQujkmxUzeyzSzWv1s",
  "key15": "5XzjvKiwvKR4Cs5DM1oC5HzELX3hFtNdKc4D64JXbpUMgFg1eAXSaUhrxvw6JV9HfcNmywoK42SoyBE3FvzEBqWw",
  "key16": "5esqH6GbYpBZGvGGpPXf2oNNfcewjFZ3aMW964XDTSava3gTT2CW17cAu85HpmZTXMDRn1zppp9r9i8tNADrmKXf",
  "key17": "3rbvBHeNhy8MugrUA9vG4qjkgCRhsQXJZdRjjGPXohDJ4mDCrzKB8acyLD7qV4ryzvgdRYtvrUhdqVdmpcmLvhAG",
  "key18": "5wYAAURmqi2tKhvCPiPzinERaieaz274JYRU2MZ8iKTV2pHotejf3BFquejUsvLJAroxoATzE8tsATkBFMoEjZJU",
  "key19": "3ZB2VSXrqkJAgMehFHocnQByYmrfAoiGavmPhCPZfkPX1vtZN8jrjum6Jb8GrfyyvCF4gNSy3xuSNrxPT5Xspii9",
  "key20": "33U1sgvHjsGebTg9wkt7mu7bF79SYhA3FEPn5By7hmur2W5SM8GckM6UbFi31LkWtbdn3Ny1Y4XjdZDpKpbSzv8n",
  "key21": "443T4j5hLE8yLsWS5GW7sYmYXjg7V1W87Atwvb5yR2w6Ja8Ji5CzFy7FWTt9KYcro8BMg6PBJJW6PuM5eH7jGMAU",
  "key22": "3Ln1EkHZ6S4nZagGp8HXabToLmNYw34CTsGx1jS98Sctz9uHSzoSGuVcBvkbiSsMD4AG8Rt85v6aueTzXUkuc9xh",
  "key23": "2N7DhSzPqsQpe2AFHWxC9QZQDTKy77vdr2qTDNixQrdMkbwriV3tfddbiQwxRHcJRgPtSv53fDHY91vWcKgq259o",
  "key24": "2kbR1RJkdE8yUyqxHMxMn38VrzXHUNUiLRGtBEjtvsmDMr3JkhTGVSu1ryi6CWT41T3wdXMN3pvP3gTyzxwPg9hZ",
  "key25": "3pwq5GWqKxZLpQ6gAmqvrPSdjbALfKV1FKoeN3FNAS8wgkx2FgPKbzfqGMeao9D6jvXJLASR6KWmU7mhPF8ksrjb",
  "key26": "99bAXhzfkVr9arKeNP1Fg6f8KSy4hLvju4MmGD5ctArYkhfh5BLj3YioukB7e1PDqezfKH6UTLY1Pc9kGbVN3sX",
  "key27": "3v6D4LGXEiHv8KhHABMVfjFpbf1ChRsiV3uuQNebuWEDNjmdX9VdDEgvXTdCDqfuqAbfVvyh5TyTHH8DD7SFmFmd",
  "key28": "2yRmm5pNgKNgvVQaPEKhgGx6cDRWYLNnFVBQdWupaSfw6ubVV4tdoTY1Z9ydTnGeRiDCgVaYrvtBGoBxoUuRBbJc",
  "key29": "3rQWefvn8bjGqqQVDPVuxBoKUTzKqtyyeEUqL4t42Weg4rYjYHnEcid22Zyjw7tRKpeySFcJkFtCg9bFg2FCNddv",
  "key30": "2bbLtXttdE8VZsjAnMFHcKxAqYJbZNitX1BXh3dQ7rTjdPadAgtibjpiyCGNDezAyypdTXkc127Nj95CZdefX7jF",
  "key31": "4en1aXuS6YVxWw5rQwGuJxBRqwE1EumNxqc1eqUhs36xEPQrXZ13d9DB636LMDWiMjrzV6ejCrwwqXAYQouVcgKt"
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
