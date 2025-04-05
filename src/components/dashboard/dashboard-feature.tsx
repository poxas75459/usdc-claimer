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
    "6EsLsc6QBebbbKhQGmPyF6k7HfZ5Kh2RTyRTEnGBFcBpX6KFppVZyqj1iHYt4WS11c2rp8KTEvFjTN1JVBVferR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VirU3ERynV3hG55Za1RrB2bLHSvpzq27txzAcMJLd4fK1zQmEZHLe9geTstTeRv3K5fj69KsCDSdwTz1eD9oDXq",
  "key1": "3UibKwmLhet39MS6XcvzvykfvMsY5atLDP7YME8L6aF2fWdpuMZfBf4A24NLYdWYMS6JHjvnsJHM373enUTcCe4A",
  "key2": "32o23ygoQKQy9RqFi2BhZntQuh4dzRdxw7dt4FBR7VnMnjUG26qNzRqxV3yL8HsKwTdNFrwuUS5e8bHBGREF6U1V",
  "key3": "NfmBk7sxU8fJgi86Wvzkg4WtK3GPsZvb73Kqok52rhMg5jqJ9e4X7qi2uSbPdGgQHcEsh7RhRwjcTbZE9u57e55",
  "key4": "3fneN31pQWpppqkMqhhhprz9eo4CHQMKBZv79KUveGZbf2qMRqZgsAo3jkzN15HUi4YjpWaDBqU2Y4XsiXCJPPMn",
  "key5": "WrmJpXLskE8LihRBSXbv5uQ3DetgHBihHSRxyaEnBAphhHuvNikDTgEwRxZjhT6RAprkk3u38g8FMutGSzgzzgJ",
  "key6": "aUguAkRtxAvSbCzwUNMhZKymFmmkunXkdiKHDQkJ6LKix8qXCRwKzh5fijqc8ba7pGKTEvZCi65ogs9Ezia5VxM",
  "key7": "nkXgzd7oPhqbSvr4bFwLv2t4NBhjjcPfsTRp7mXdfpw3hMv9deHob5oeCTGott5tuLS8RG7p33wqTYhQ4a5JD3b",
  "key8": "5o17uwhAD8uXiBEifgYhTH1iEoa5sioxgqK7TRAk9bCwQRBkUspx98NDtp5tbkFQAf5RfsDxCBT9gKCNTdnp7Y5P",
  "key9": "e3FqtrF7DnQN7j5LbkqBE7h2dw27LYvSXzbpQHJgXR6Swtpe1QuBZHpdHwYVdeTD287xoGrzMTRv5zUx3k2BbkD",
  "key10": "3vKinVmL8T9bPNX1zy1EkdYzy7L8N8mr6aNXEeDQ23BN4aXbDve2LNKqhwYG1tx5wXQhaQw6DLtVM43jD1vmGUpy",
  "key11": "z438rR5KmHGkmXgVRkAEBysaCKyXoQLinifSZb9krV41hpqmZnWwZ6D6cg1B3Xkyy8RrM4gxCqVgWAgN64Gv9mQ",
  "key12": "KLY9eZy9QG1bLjfYWZwz1QvV4ff7WbqMZa3grqwxJx1zoVojY7gPVEUXBcp4bdKGEViPR6j5bEpivG8pTDoYCnA",
  "key13": "2TeVHn1ZeVWqyRzCmF3B9ssxeErxFLNiu66bttNFJhiGZwYieTkeT9ShjJSJ91jPC75LUR4xsdG6KuqQFQR9rtKX",
  "key14": "3K33ahuKKVLtgQBjcBs5EHtYxE7tT279yYuvEuTuc6igDytjvvrGu7HQbwbnGePMrT3jUkSJTzAQ2c5SjmaeuJjz",
  "key15": "uQ14zsE3FsfUJGCqEtZSbTmGrhjabzRyzJzSYFfrcjup1iBWfrYVPbXS5EncWtDUWnvmdo56X5nwvKL9t8i4tP8",
  "key16": "3TkaWwaXvWSJ41onHaQSYYmuzJGB5ifNkLHrsBnRRL4hCGmtSzBmf8W4ds6aVGSbGqhJVQ5zHzi4eL57hXWNVw57",
  "key17": "5EMfkKe1rPtCjmxZpy6FLHUDpXfWAD9PPWLKDjnP6fbD11uD92NQWweinmJEWyrt2jCHvT46j33v83XQcAZAif1J",
  "key18": "4ovEn24k537dp7cigAkbg3trmeLJZLdDc3eFfKutcy7P5cNZ7mCmFnbzXnvsckcvYw83bg6QNB7CX29riCNnBpCm",
  "key19": "2MEQMHM3Yi93wy3VarnrZLmkAofNLA7aBLsM4RiKUi5iU35kQrEAguiMSavdBiie5ZjDr9tUKyXS1aU9dfNvy8Mg",
  "key20": "36Upf2yu4UBpiYaQ5DEZhMAtTmtNgS9Txe8H3y4AfHKSQqVKgHR5kydYvfSWKmocto9YgMkBKxTi969Zq5WYdoHi",
  "key21": "5QDLUFcDqkJQzTkuwRHCnwEzb5uzasozw81W9U3Jh2g8HVxzeAbqwMGRBbZezgZmGcLmbJ2pZZz3mJHccuuZqWwi",
  "key22": "4BHqoJgj39T281poxet7rFSkdC6ZvfdVf2tg99b3by3TpoaziEuUDwWRc9ZnQVHBWXjr1zT2h4rTsFj9dD63jvYj",
  "key23": "4b2pectPQHCaE1KfVBxs97bBdrFP4cimiJR93fYnjiZrYf5Sax8gqzDmcKtXBd3sgEaw6WQZUVZYg6g3RFNHAAni",
  "key24": "4yHcAjyHcJ5AN4tCzJCemGqhZ1r5uJtbrHdg6hczokf5u5Rswom8FpK29MP9EmdEUA9REGKz3nLYrtMYYWrsu8BU",
  "key25": "2vLTVRbzbXb7tQYh34SNBbdR8NnE8Do328afPXfC15nDTfR66s2XRYLtybZE3KEypkcqGVLKyuwxCauj1pYgN7v1",
  "key26": "4Jk8djocKSwK3bo7jLnfDPw6qKCCjpfqPyNSDpq1o162vZ59Hs5CtQJChpQTFivA8uPtUgJYVJRwXMaKmUP9G2LS",
  "key27": "xhtHHzF2rG4g3hvN9ozdf6GhTYY8XxD2Nwkok5g5E28cjXXCJWHkXox9PMzLeGAyTUy1751BGW2hPYdmLF5ZnuV",
  "key28": "2wJarX65HQHaXhjW3oWR3wVmAt43yxoH3sU69VGj2wskQKQtYuQPXQqdYy8DRcFTPV6TWx9MrRe7yHSCngonUWrp",
  "key29": "T1sQfyiSr3WEEzvBp7mWk9BdsTvckRzSPydCrhdXSc3sx1kwZXPY9NCt2dPYpFNtzE45kHQv9wpsAVUeiweCe3C",
  "key30": "2zNBMwu3j8pbh3aSGGnYE1Es95a2twPv1EGXpDmGHna6kBpBh3vaZRDswXwUWr98c6jdHi9vYjn3ykH5j4aYoxMA",
  "key31": "5WhVyAkBrBSrXmZVWV1f7PUyEqP15C4E3jKourMnbXPDsUuxpTWbXE8124W59pxVQuADHLtJmnAC7yPzmjv7rWhr",
  "key32": "35z37u47FHgjeUg3vf45rZyyS7ZYzwPzFSCbxSYTD93rjDDxtXt8LDb3zp65ByprJjbm6Yu1zWAgJzotU4CAn9ce",
  "key33": "54ZJZpTqCEtY4RQhnv4sUHWmtqDNYJCabZ9UFovjxQGJUGjSka5SYHmsB4T5yF7dBK7KPyRUsFgfEYow8NVtmsUk",
  "key34": "2NGUzrxmAnF3GG8XBxJ5JnU3E1kPA6WbNrQQYxmQych8HzoCJB8S2jqDhBHoruRfvDUh1DgbC3e7waQKVpMpxu6L",
  "key35": "4iz5nJ5KGPLv6mj65vWu8PUp6VZpMtF4fNAXnnzomNcb2hY5jsJmRGzTe8uv2yZeQww5izQQvzKY65yuPJozQq5m",
  "key36": "5CQzAVP5f8TfWgDi5KWuvBv5opJrRLFHKrbBJcub72YoCScKu5JN8rYBPaY6Mv6Hh35TwrXoSdfXdTczfw6q1JHy",
  "key37": "3ZUnTAtTZQtbPcWNuUZfHtH7M4DngjjxuwZCsu3kjbjkmNuJJU3VPBx2k2HBzfGAa5VwyzgQEDhQe5YNFdCk85m6",
  "key38": "1ErzAJPD7FdYNWxDCXjySdsnkvwPzGYHNFXAHzqHpyRyPRy49A4wcdgo9XxMA8vNnyY8mQoVaXwD3NYqZ8Tifsg",
  "key39": "4JPeoszRb3TD6dRpJ1P6BRXq7Qd5q7ZCmJJhuDjfXSaJWwpbPA5ZCtKPkPG9LYydZw9PMcUokYLAhwstxtXj6oPD",
  "key40": "649gwiEY8gVggWzoLewVF2PBtTX3J1F7eeyUFo2CJvmGCSh6JY9wMhmeQysdkNTeiwMo4rrfAwv8KCRmuL97e6hd",
  "key41": "HDG9yq1DyR3Qep3kAhWTnQg8tC8eRfRza6Rpt9cKvdkYXAXVZuXWVsRq8VN1kXBbVw7hrN4mQFuxuhBPkQWujs6",
  "key42": "3RkJu48K5NSVi9ib9CnQodztPgYDrctYQUHzQptcMPm9pNjcHw5nnaq6vTFYkoyEa6yDUqMhsgBLHU1f6PjB6dzh",
  "key43": "2aqJfR8my1Q2Q6YKQKjhNyn6WTTDUvUeCF7kdZ4fdpwhya2Stfp523vzT56AHmBUAERruu6DqjgbBVpLBpdyoYZW",
  "key44": "Va5RjMFBKnkQ872YXyAkNUSFFaVFeJNAXYfEfywodRqfdWibCGZj3Z8G5zREtz6czCDxA8ap66XZQkLKnqUe8co",
  "key45": "4VWXYceAAC6ouUfbC2SHUbaDXLWZbNSZyB8gHkachqT4mhLgndJUVRAW9deqaVy7aRDngbYd66vZASHEzaysiGip",
  "key46": "27MDvED38hifxKNgr4yn6dQ5H1DtAQirLDt78kFfhoiVzxCvBfQRSsr9hZvrWNtmBYd458BaCRiUMVNJYyjjDGXB",
  "key47": "3uhZ45jtTGVorUKq9BugcmH8Kt6X9SWqUBNWJ6ecu6bi327coTzKLUcUzKqqwTrav29WBLMjXuxts6eGnVvp7kkh",
  "key48": "8A3k3W9QcXDueLburw1EqehUCYq9UA3RDngmNYiYpAXMCFndZzSDitaTXQLXKTQVL9EGKZJ6WcnM4gKLPVK8r9E"
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
