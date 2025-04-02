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
    "4exDKWngNP4WTLqaXzvLvNpJAg4MzGUhMUZuqscZxufuaTVG6VmwbVgdaTi6yLybVyhvgLTw4GjLLqjs2N1MnjqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dsKxPu6uuBWcRMozPTr2RhydFzkp2w4VxDjdXcLLirRioo5GaVhh8qAZSoYRLpYt83bPDAfe6PTqoCSvH2bfVzM",
  "key1": "47GjAZwwWNaNTCUHqsEEcMeBBvGnRjRJi4NNhPW9YWNjgVvyigrktaK7oYzH4QmrXtGiW5esM3YwWSG3SUzbUQU7",
  "key2": "5oRBz9PvBci2zUP3eTtVJWYra1NNsURrd29gWXAGPTsJ3SWLPZVyTjAN8UxQ2p5tzKL2q4cC3z4LpzSB6RLouphk",
  "key3": "23SkWqRRVR6c2W94eFvgz9YXC6Vq8CCPYMkrjWTUBuTw8YqUpAFiiysB4fnyAHd8j2ywjzC41ETk9RpmVCscQEGi",
  "key4": "2y4jVD5VJSfxcuhqUxq4NtazSpLCXBXfAkjnE8ot2F2dt4bhZU6LjaC2zpxrdndGYucbU6DVUTevxSJKqF7vKNHn",
  "key5": "2RQcmvYGcKt7MpC6KZ4PZiK8JdReZH5FLeWxQkKm89VMrcVZ9KSJkN5N5z2qAcwhNkjnXAzpYma4Y5iZQHzzp734",
  "key6": "5qMnTMkWEaWUBBpkK1M9X486TZzr2isaiV2t8zcSu292LS1fpXFWqiPmXcD1sV47m9pLZVKBNFWesWugjyTxVFHK",
  "key7": "42EfwV7GL5NWsKyFC6MhM2xZY4zrTH6kSrgeJuG5QrRRsgWL8ScbQhM6etfHe9bSqKPAGhs4XaWUnWEi2BSt8Zkv",
  "key8": "2xBYH45oUDUd5nz7gnPjGoJz2yFQK1V6JWFyT8HAmK9mPUpAbHH93Lp4W3uS8nwjDyuJZsjEoHuUR1Tfpxs6hPgu",
  "key9": "Z97SLdEaokhqyVU9LLZXorrPAFzu2WvZXEFSZ4csUu4DCfAvtodHC5YbixgodtHfA3fSQedma8X3zLaU6TLizkp",
  "key10": "52uzVhy8M2c8aMCWgrKMEihHyUKiaMoj4RkTF7RYkyrseES888b1FKf4yt7TgfWCdfdAwa78cfxnn7Ckz6c5upMp",
  "key11": "y8MnYrVwzJhgqjKmds6ktmzAWWWMawoM83cvsAhcmQAm8kFe9WTp9X9qKC9fCb2yoPtmBQY2xrNGw7mdViCYw9W",
  "key12": "xsBEhQ4vEaUokHNtA2pVfGYfwXnVWHdaZ1BzmL9m1X6zvqQeZAeUdfyUYymewmu5dpugRHtLnb5qAdWJmDSAiRu",
  "key13": "3X4iFgiYCPph4T4zrh5WiRjrYwp2F3bB9ch7UypjL73uuxfNy9PKb2Aw7i1tVYVnA4Tf46tQwrVC1d8XWpcLRR4f",
  "key14": "4uAtRk33p8Fd4HZ9kAHSar43iasqdoezU94HbifeW3y1kn2nFEFJQkU7Fpb47ARKykK8wt8vFVWP94MTr54bj8x5",
  "key15": "2V3bEQnLchVLTuL8447eunSx1ghzkwTxV2BsqwAVXm8UJjc8xSzUifF63ihKWgxbeyNfCdzrzNdWcA1E46EdUgVM",
  "key16": "23oShgrh15t8oT8iiqcjMsexkQVWaKvuVpyvakecQJrwSVqd9q8Js7ZPLAi5Qx9JkSouxdd19hN9vsGvCj13NkJ2",
  "key17": "34hRrr7CpZTQLcAaGmyS6gBkQf8HwZyEnjB2Zjf5b6bbKA32MS9Mc6godhwwJsbZWUe1Beqh9QV7qTF7GG9iabcq",
  "key18": "78TAuihMsXSPqQvi1iKJBQtbpM44wf6SeivG5JdX5aHkXUwk5t9dEjuU3nEXQPvzTPi2QTYoD55peMLRfebK6tq",
  "key19": "3f3LZbczjEtc4mXMx4wns4hyM7GZfBARmCCkEq2XcDV28tV6xbro8vsCdHPE2SGYXh3B4JKakoMbyTqzLUhRDY3t",
  "key20": "5biNAexvQoXP8b3PS7wS4iJencuZPnS6R3aEhaM2kJx5vtsARM591Dj1fCRDJPYi4dFQBv49ALmKEjpGUZJQFwzA",
  "key21": "3dzo6pUnXVRwq8gfxTdsXhSJ6tEpxs2qJTdKoCFyuRzg1vzVdzufwbT2K1ttbmudUbMx4p9ajyc2vg2pqYqkjytW",
  "key22": "4CRhdBMP3CKTrJRNxnPx7hdFtHG7kDdKUZAT1zwBeZgLitpKEGozMNs2an3uCEEUpa8n4cs3TpCFYcKAg9nsQ1bb",
  "key23": "CRniEMMhtKU5jbq9URKhF2nBebp4C6P75Mr6AugyN2D1HBYu4o5dvAeDRqhHi6UHF6jqGpurwZvT7thxWpL7666",
  "key24": "5WL3yoRkGvqxwpB9kwLpAiABtRFVoc1qm8ViY1HDZCw3gzjN9mHGGiamYJLbRFZhjkk15B7t2L3mhhHh4c5BM9hW",
  "key25": "3HFQrtbK7DPLAXwBup4f8Tom4raHqsJZQnnjSLKxzf5tXiVNwZegW1dLBbSrVhimQ1r2mxzG7RvWUT4cWpdBWDi5",
  "key26": "4TLQw2vbVGYJKHQWdCAqqud6xArudpFNggCkFXARBqBoxU3wachLstNCH6cfhGTGTJryTZNAVdR79sKVe9CDEkdV",
  "key27": "2d8uio99afqpiA22FJC55TLobMprg6RYnK1y2N6VPgaRF9X6udFnuK3oQYCL5PLU9fsuXLvexz6NJqPqoka5fGR5",
  "key28": "5sU2ASpBH2CPDtRV1YK9S1s1nfNZyFxRVGqAG9xokxTWw3XvtHmmpCy1qecP3fEJdmoNix4K4r5GGZaeNsn3HxGB",
  "key29": "67Lz9MvW9ekBRbcGPhAMXArKRwtP1cuco1eDESw267Rr2pq5E7JZAwqJgB74jRCngmTLvhpbLXNAeTu2gThYADsS",
  "key30": "2LXeCoEncyDy6eg191K2gVdUQWeE1zxsvaiTTGEwjK2bsxKoqK7g8vD9YbsLctAsVLPCY1WLjSMfRSzxMPpNPjFE",
  "key31": "3KKep6AeahPgVfgJszctyNFbx3kQ7uVkCdYfVCZacwxYXsvm3iMtHeAue4MiciNGGEHWszQoNqiw5Z1FU8dJqxsf",
  "key32": "KfznomwJRPff7jsrTy1ixWxf1rceECYLx9m2yTnpsauxW66NuFDzBkX8uYRXvsYcjHGgLEGEC11boZxBeF193SU",
  "key33": "5i5Kp6FQ7iBGW2aY9XHHYvC6uf3hPAipyf7XzxCBWD3tnqwwBpicn8pVihGtMFbqpXkaRSbJ7rVY7LAqmi7dERUh",
  "key34": "35c9Y6L2nVCMYXPRGB9j39NsjMwkXoZfCZG7FZ4WEs9hqCG8Sm1Nq4VR952FGsxd5QAV7Re3uELg4L2cvpJnwG6E",
  "key35": "5Z4tC5uXQPWDJHfuLvc99e9aJCJ1VKqWYDW6TjJFGcWjEaEWTtuDCkJyzvAgjA8aV2Ec7aCGQ6PDLiMH7nDZqZz5",
  "key36": "3oCno7WQ3pjFZMEr4y41rSA4ZLfQ8NoeJs31KeRwP1RUqnL6Pk483rWTqdScAVCb7BiRwsM7CAXrD2vHPfmGTVyd",
  "key37": "43ZanXmr3VAsbnpGSFQDiBvkzwwW73vqzazjaSFTwLPfn8DidCpUgoqv78SAaXm3xNr948vk9vkbt6aH5i2RGdXk",
  "key38": "2N2JDJUBDRnx4ffNYWzQ8NrhMtXy3WyjtZtRjvSJZTZuKAjRftMBaY3wUEUUqJZDNSDbmdFtpz8QFaEGQvV7Hvth",
  "key39": "3WhNrPwgBE8C3tA3D9m8xWR5Xh2H5dnzynKkHygFaJ8CuyfgymzeSE7uh9JsUnwbgngJKJJhtAa9QmdK2njzW78A",
  "key40": "2sEaVpqboGXcx353hvhdiQwdivHrn8ZnL19a4nL7HY4vw4gmbS4mh8TmjV7NpXd2kkxzZKJkXjY2Kt5dQ5Mr5uE1",
  "key41": "3HYxmmgaXChrw2PYCdivPDkgpAJaFt5wUqGBFRmvhmDMNbms1885ZbFbGP2SWsvcKmnn4uPDwJpinjXRFUYccVUv",
  "key42": "36J9FaHGAbfK5BJyb5VM68mRRZduPpHJpcLyD3QpvKzxXL7AyHpgZ5NvPjBozTE9Jiba4XfBPwueCPvAZNVwy7sP",
  "key43": "3dDGhB3Coiv6ekfMKcc8vjXZqyRaSgu6o82YSeMKTp1HToYwAVCXoYukpYbrr7nprX1jeA4RbvMd96WCXKc5h3W2",
  "key44": "2thXigvTLzE83wzrcPbA8afxf7jreUZpa5o3rtCV6U2sgcfY5jgsVY7v6o8WzUTqsns7xoe6PH73BVGmjTmagKJM",
  "key45": "56ZYyts2HrSs7NwcUebqjUa7pZugfAxUy8e7XZD3Yaaq6N2wyA8cEUED6k3gG8dEYuZ8pjGondJ8iMbvcrmKvb4P",
  "key46": "6jX17h75vrc9tsvJAdTjYhiDWMDuJgfJxXiC1F3LVoF5NjEDbzWXke5UrckTUSX2cPyC7hwCGugRuXthZZhVWBM",
  "key47": "df8FBsSm2n8o1cRGhYRuKFWwBoU4FcgLQLcLBc3qmu3iwSrcU4z1fZfsbJQhVBUF5zKvJFQoWy98tibFS7vN9js",
  "key48": "mb36EnvWGktkXwhYXyVFHngBhLQ1XZjWpqodnLdgRH3zsFcrQKpGtmhdShcBarFqSmygoeCFuV8VVrJX7zmZERY",
  "key49": "2RhvPtkDonGvoGoxgD9tr3iRDgDsSMoPJ5pBjSNMo4eqj8XVLkqJi6aLYmeKLL1d6rAcdyn3ffgPmjzrfNCH39r2"
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
