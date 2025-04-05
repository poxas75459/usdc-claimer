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
    "5dpUwwGce8cQfJc9ztCpLG3Bfpy3yjpJdN2z4uNkYxFHpu6iBPJccED6ycSNEasAY9n4xpeX9CQTVRyzTCXNDqgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SEQ5hTUbig1mJU5KE1W6F5nBQKacsSh5oabgcDFPn3fnL9iXbNZS6HJZveFwgdVbX9uX2h7SuwyPFu6FsDjmshm",
  "key1": "4eYgvRbnHwaT45PBAByjvDUtLGgtz2GJfFd9CQC59voqo6i5dT1rYjeLdRcfPc7w8ihtpk4vuQpryFZTe3CySske",
  "key2": "3iu461jzBEEVpWHzM8Pyhf9tigJQttd9GjY3dRdoMbHqWtirwj4vUAqzKs4iyuFnEbtd2QKXXeR5kR5DcbZCDQFk",
  "key3": "4i73BqrAo9L4iHGx7Z66zbVjbdVXFKsS9wzNYAdBhGRoc6RDbUA6ZQfgctw75vxgPKW2jKMCcS9xKpodzGq97K1M",
  "key4": "5Kg7qwCBF8seDMMGPQKakQmg7x8gp6UtNc48hYHccuSVmbJd8pQEVgsfGMjXgQseq8JeNkhF1sQ6hb3xXRM5fgUD",
  "key5": "3YSQHQFKnTq3oFqSKjG8gWXFayAJZx9SjVd9qRFkLvymPrAR3fkYqZ99ig4U9QrT1cRgLUzayfVjaCHj5unUwmq6",
  "key6": "2LKDMWKoGKW6F26pCi2fsh2Mt8Mm4Edu3gFYTocLeGoB6feoLjUmFSgTk6fnBkbR3WVQAUBAMvVKeAbXSuHf8Bw9",
  "key7": "3AqLUNNiSBDvR7N2378TxsUfUMwDySvFjy8xka186ifTWJjJ4goahWZhr6oSnwqfpUVbxcgMhN3mz7nvM4A3PyUE",
  "key8": "4JQuiXEZqiV5aqjmeU1b6xDbR1GpNZ1dUUad2Tj53eJZFo2MgeeheaMX8qjMR7J5UKeGdhzNEP25T6rygoYZAaqW",
  "key9": "5uAWPxdEZNCzBvDTxKXzg3dPDifB8rf9w61FXARCgYapWxrj4ScZ7hgkf8TJ2hioF4r9zgBVJSjetHjHnTA1KJfC",
  "key10": "68rQ4i6UyaJ4rGeCCCV7ENv3rMk2ZWefzTzLHh7d6YdH6bSfg7KZUhv5wTknTnz2bQHExHmA3uUevbM6SJTiUV4",
  "key11": "3Xk9tod9XZfSJZxKiwohmW8piXn3zYEcWLRqTsNnsLLAdVtxkHgiHYAe97DPxqUPPcCzQtpi8d4RTx3sRpPkK6pj",
  "key12": "3He3UHaxWYi9DaDUqi7qBJVzM82ouznBc1uHf5XUqh7mgCEevy9u9x6LgDa1dfJ2jXTtJufQ4UGteDxzukfzQCYg",
  "key13": "4gAZWiEuGutb4H6U1qBHd3BSa4eB4UctgptPV88iQb6HsCyS3ZXRxzzBD31vfxoHcrDQqoo9mEstjoEfuVfLrNdV",
  "key14": "5T3HeZeM9gzXxu1s3raUzn5yf4yxv8updpUAASnvbVYczUNTo5h1Xy66F8yts1dHwwKc6ziBebSQE5YwLDT2pwwj",
  "key15": "4krEW4mcV5aCTJbbNhDuPy6taTYtguvwoknHWWAEQ5nqnHvgnDHKuUADbcLe9gpNmthCYVgZgBHnp1vfQKDSFyJ3",
  "key16": "4ehPiNwyJ3DSjdgmmja4gS3vu7frb6isiDSUSyaLJvv4S7WkgyM5FxLbsh45m2vPxTAs1XCEQ2x6Xd9HHzqrjhkm",
  "key17": "fVuXbU7956uCZSBrWirTC1hANb1ZhV9KDzqNvd6N1LasD6sPMGCoSBy75DJCQaRR482arj6GEGeoGn4MLng6H1J",
  "key18": "33UahsP65UmZbSMW6qpuNndu7bJyjDNpQDJCqVttnz65Q8rPLrEdMWAcxpUtuVuT8JQ6FdHTp22hGdnfYc3tVu93",
  "key19": "5fYRzp88ECAiFML24qxXBz4o2Fw2RTEwb8NHCKbxjNbuhn1TbWHJAXMAtgor7S6fK3nXQcpZq9gs2Upe9XnUWZZj",
  "key20": "2QLzevESe3ig4v4Rkp1p2axedbSHhWYDGxJXCpYLS5eATRJqLCkrWBBaJqC4fPt1dsnAr5DHK56QYQoALBBQ9kVY",
  "key21": "YmPCzg9WjBkEFa8QjYoXBGD5QfSiWMuNJhTSkta5VCtMvNY2CuktSHNGMXBberzTketuggC1ZVLNkZ4nS45GzVR",
  "key22": "QuiE86uiwdtZYoDxPp6Dv2MPskKt8rT4L9tVThKiuWckFsdiDy5oetRK7xgfLrQzNgtogCPaYZnsNVKGiottLcc",
  "key23": "5pncCEjucXoxKSgJAhoh7b8waGkyG899VqJXpiULjR3cg5JT9ptwASEhF1ZHhhkPsf5iRKRYwCtBWbHBzqupEywj",
  "key24": "2fReGT2DtkuF7MFtae32RoXhzCvTDUHvsLxfAGAm6qkX8jVb841jckuENRVZYmcvb1c8epxss4Y5ezwhv4KqnxHX",
  "key25": "4KkB135TtWe3BZ2cAvq193rBNaWCS3KiUmi8ETMPeSu1K4wFPkzhiCxxzpiLjxhCLfuaYoSpsKQfu17qWProQMpt",
  "key26": "3MjnyrkFF4GpFfkQCiVq9VRAaBRuE7svT9sYSAEK3wWaqys3TRywNELT8kJDU5UCu7YexPBQqHSisCGbr7LgRQNB",
  "key27": "4MQreVobD9M48NzQhYUxwfxVcpRUkCeB2bgT3wcgwX5ipWKFNQbagATDiNeVsuPgTipb1K1bhLARB8qnKcML2JES",
  "key28": "4qVm5PTssXCUNqkP1eCE7FScNcpc6sZrDTCTucNq9UxFVkJD6XeVS2VpJkSgQBExiysfbB8AMxq7TVKpe1vGZe8e",
  "key29": "3bhzyUScBQjMcjdfVhrczGPQfoLvA37K4HZutNuHyha4CSoCP5cnuhRzXySWbY6eWD8wXHtdR6EaBybEx1J1PV7S",
  "key30": "VcHpc8Cy3V7z5PkYFf6W6rKypHZm7Nw2M4g948PbS9e3TFQzttatevdj8YCUa8G2CCqg4vuakrVTFuVpNj9R1Rk",
  "key31": "4Y3jthBqfvzeEmv9rRKrwFSEaXxe2D8y5LcjYckNcFqqRsgwyjN7tP7HCoHBzn7m2rraJGsu3kcJSMRRjhXmZuLc",
  "key32": "2YfYvFzHfWCQqQ9rZHTRmvxnpvc3pz9SPAtjKHx9Pnqo9ZNLrcjPJe3qEwMjG736EqniLZvaRy4JXm6mU9oZbJzg",
  "key33": "5xuuwtNfeXogLawKa1WM1FB5gwQibKRBA2rKXBF4sfaYt9MzTFmX5D6mYgJzF23xaZV5CKTHnU3Qzg4bkvjg4fqZ",
  "key34": "4Q52z4Ct7Xepy7CkviHHSXLRdp29RGz6htF9Nyu2LxcJ7PN9vkE6Fmu7fYs8qPMrgdd3K8X1ZaVzbsz5d2kDqSQf",
  "key35": "5Kd8Kycr2LYQx5KgTQLmWTwajEoLGFcZd66V7qN5hx2zUmBMDEya5HvdDDVhLe89eLyH6EiPEEynnSMSenUyyvQ",
  "key36": "4S3jP5UeJhEiqQwzRTCLhLBPyUhJ4TPxCwMBbUTQQBvUjDsR92RaEGrnAupGeyNb4ymaUUa3399FGZAxCRhVeF5d",
  "key37": "LHCpctcMiuAk28hxh1h5Sneoj3vD7VWQmaF5HqCTg3dwextYbYyLPTu5zZcp23S7SwbHB5ujWjrWjUBpiRUz9Xf",
  "key38": "4Ysbiy9T2UYR5o3qT7iy4VbRFm31zHtppVu5Jfv1QfPa6qQTr1E5onoAkW5aWwUNrtgyvpfTA8xoXcouMpNrUEZ4",
  "key39": "2J1WvKYN37T77Vv1eoFxw5vZpN6nTr2C6X3kbFnxSXtG7MNDTnXzPz9ninyza7VkrpSJ15SqDXPgboEjRtcVzfVo",
  "key40": "673fo1zsds7Ab58R2s242nQyBcYtjoYyB1YtfpcRnyrBs4tmbQLGbioYS9d6h5HCZszt6AwKXVRkUhVAD3jwLp8U",
  "key41": "5qrXLUhHuYm7NReJqt2ANyrSKtp5CnsT5ZGRaZyBLrjcstLj6X9NHxhVMNFLXPgwBowfuAad9pnWRKoodnR6VtUs",
  "key42": "5UErw8T5n2Fza4uLyyeA89ArfrjKnHwEP9DyVGKSYFQJKZ8cX1s8pruKNXcYW87VDjdiTUsojmAMRRCADNVCWwtN",
  "key43": "1KNj4Zmt72C8andSDUqqxU4mnuL51E5zZdEFVBVHHi7e1c5peCDqFfSfbnx8FQmm3ZQhm4YyrJHzE4qhgJVggKB",
  "key44": "5jPtP5TZSaK6MRtwC5W5sFDJVCoZhfeWskdHuHr6RsKXZxe19JAA16236uJbzwdAthgiRVyXJmo97XGKH6WWryEf",
  "key45": "5aRHmKcR5WmLDmuK5cmx1KP4rJjCEDrQi3K4pwk167hB5jTeRuuR4Yap7P2n18zepdinr8oHisDXfsnka9j7ZwRS",
  "key46": "2D2rTopXkJDUWBRrtx4QozGzFZywVXJLx9ypdaGjHskrPeZ13qEcufd1VdBE4fFBX17yKZizjdyy3GVhzsJ6vTaN",
  "key47": "23QkCtQCaACgWrHTKnCE6bW4EGPRijhGB7G6MpCuyy8iVMAtESkWYmdLDSFSLEUvQ2gFKQpwAL5JbSMQ3WZ6TGWo",
  "key48": "2wHX1RokKfLJ1NaJrSGSCLUwz3YuBPgf9zWYKY5pw9nhPrpU4EWvqy6zcvV1ucEzwLX4kvudkwFVex6pSx3FgFU7",
  "key49": "4W4XDUqFgLwUaNMxsGSzCJqmvojAR6uxsDUr5u8fJJuCLSkNioxwfUFhqyk9dMqi91Ypvrb2U67MSNhMvEpaqeZB"
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
