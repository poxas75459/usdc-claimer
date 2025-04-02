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
    "3PeGGyXum4aKXr9czQBEcphp67Uxg1pPRRNiociaRRCxTKPA8QQ9ZPee9yCVZZC2r7o2RBvUyac86HUdPGjDehCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gCW27eTJWwNyiCJbR4ovUocb4zeBZHGvY7k6e4y9ThSZ9Kh7weybi4SSzeyH1sz4zgSmT4D9nmMae1xLe5YxMMK",
  "key1": "5uCS8gB1vWK4EvhgT59SYxavRzXvw8o3Hp5vWdNsMkwvV2cwpz4uj5qNoSr1B3qahqmhS3eFP3rMoDryWSz7NSfA",
  "key2": "4pq9b954eM3zAAiX42NKhczUxSP8iRjgBYZQd6RqQqa6yNViLLaJgVXahdFxQg1EtDQmYPmgFuHwSZGxLGJashxx",
  "key3": "3y1soBUzmHm3A1KBNB1eRzAv9YfzScvcHu3gpzdD4KWu2nDUnMxuFGjZ6tSmf6G1EzXAdoTViFcoybPQhgeNdUEi",
  "key4": "5JdgmoWCG6JbDTG46En86deK8cQxEgbetQR2baqJedyL3PTtfV6u7SgpD6wEz1BPCSycA73bCGCrjaDjbQSC3xqf",
  "key5": "3ARYHRZGescdFXqrsedo6NhGTmqwEZLhu5WcQ5m1CQUEUDFcH9a5WYsvqEoyaV5yzedUnBd3Ngi7CaeNfkn3qf4h",
  "key6": "3fDsr5AXhKru3PSA3v6ixxrqFKAKwJ4BS4Mo9SV6DahyB3cNy6hYPpnPL3ghL1zGJPBWEYpPJzXDjnDCnScdhrmq",
  "key7": "2gGJLmTdYUDYQ44pQZbVp2hwrqynnauh1aZ6ryex2nW8aGhcc6H4dp41oTdBPbJbB6Fy4LGPYFgJsrjbTg42ZsJz",
  "key8": "4fZ7KYtmRUitBMdNTXP25CxwPdT7HCLsC1kkPXKBFc1gotFUdsXfAYtRU1jsAZxW11MiEtrVNRNPmHwPXx67d56s",
  "key9": "22i4yKk3TQ3DRqZ5LztHwzCExWPtHvbiY3RxdLXeTiFA5rq5MdeQe44Nm4hyn5eNPs6NE6yyUCGPQTyNqaAuggvT",
  "key10": "4fLL9aHrbNs569o1pFh3ujQSDBMmwJssq6LeixJPUfJ6uuZ5m4JSDqrQ8VkTNw5LezBN3naH3XYR8fFnzCHF7KCv",
  "key11": "4sgnXsQxT6fGcCg6vJqXDNKKN78MnvVFbtzD1S7bbdtUsgwYiqXJGs3HVV9FtYsYWkKGMcyXzfJ3MtoJaELat7AG",
  "key12": "2oTAj5zbhpSU9WbZcCwmYtcZ3Pj4iQuH83xHv6ZbAGwFVoaJsvBSS9af9UvKg1zBrQYGevpsshZ9tuc8WB7YnSN4",
  "key13": "59H3iHCBvUxYxKjT8tQBwZoiRp3DEP4GqjRDVkRAa52iNbogwVri8NY1fRK9VQpRDqAB8JXQHicK1wyNbCYg22uH",
  "key14": "4j49GQ8AL3Cm3NS4VqSk4KB1VjvLdHqCd3jTBqg6HbWhmdT4SFpCEWZdjkRrtR7Vui4vhFMTScQmdThS8Tpq7v4L",
  "key15": "2eipEX6f5oXBzVouZk1J362KpyEFYFF85opoNbHcHTsSScjdrYYnNHWCM8eGQzpVBBeBRmCanmPg1iyeCyroLZ9J",
  "key16": "2cZtGdZZigVwK5LTxnWUHdbCAD8E6FYDNrjRnLHEF9EyUmtCtmimcgB1C9dpUSAEFTkx4Q3dPqajwVbxo6DPCZz6",
  "key17": "5Cp4w1TynAGfjMwFqWxXSCr8Si25NaszCrXSkj68PtaPrT2fPe6d5sVtJrYteHkjt7oUYnb74wE7gZrjNQWMmpa",
  "key18": "3e6qPprwn5uba3SWdjGwk7hnzzSVCqux2TRmTWoQqsGUJZwtpz3EAR5H6efSxxC3LQAMFQirb4cUCmzkDxcKLGf8",
  "key19": "8t6JpCt98bnkho54mVkZ63LJ8ci66SWnJvy2Ddx2MBZGYHwuxDfPktCHjeXLYew92KRumuyrzgYjGsW8PQhCnh4",
  "key20": "65tw65GnqQvuwCCuwSvQb2zKMFgae73TNYN3neP4smVBxRoRra8zHjXWeAbwPhDuES35REaVj7UVei12BTRkc14m",
  "key21": "2r3xLwRkfrX7PoLMUDUnExAtgpa32hGGWnidNzr5q6tP1Tq4Gdy5nNrWSKtQL9fGqBpY4zJ93tPHspT1ToVRynnN",
  "key22": "3PinFFXB93tvVAg51kRBsEcCerHw2xUUt9h3je3ffsy9AGiPfJrwGSkp5PPwwZp4CVbrPzbLMncA5kaxEFCyuFZ2",
  "key23": "24vngThvSWYoobTzCCdDk2d3RUzokswKXLSriMSkQmCz2ehYVHb3jNuPYzFgkDcmcBKzH5uwnRRazPpUXugegz8S",
  "key24": "3UnRZW2rW2UmupX5pcK8LfAJMH2ei9JmDUHwwQjik4VN3XqqvHRq88CoZsVha7WEtojfMqBi4Av2kNsRPhM7d6mt",
  "key25": "4Ut3KebyQG3XLQRihML4Bd856vtrtxfV7P9v7JZyMyFYDaXEFKWNbKRRQQoffc6gMTYFcuM9Ds2vdV6PWmCnBk1N",
  "key26": "iKRshbC5N7pXxxZ38qGAN64k9vhhWCRkmaySUeAXca23TvYjEpVR5irgEUo3i2bqtXpRSnkJyrMD9XnK5WAqBqD",
  "key27": "5hVwfWkfP3CzrNUxNAvmNDaazxfxUvEsXtykqLkBSoMGjpD3gPGFzfZVhN3DCv5XUMZLEyyR8q2iZH7EhKGHmv9G",
  "key28": "3h1YMGWqQknD6TL4vaCKThThhXM9wBH4Dp7YUS2mpBnRrZjbs2UYNRdPWr6BPC52MKTu9xW6VUyo8jn5srcjcQJD",
  "key29": "2xz5caYybaBgQKzEZqbai18n5SwRFEraqWTkNY6vo4th35M4doGqv4PMBg7tWwntj4jJ9We6zo3NsD9wWAWpw1Zz",
  "key30": "3zDiyCxbufqm2F2WUc31ErQ7jHVqwtQbUykwrv5phxNyz38UAQXk59XsjpCTNUpfqpd7L7Fq7NoCED1eLWi8L5H",
  "key31": "5JEtFAmqtE6eRVqSRcWSjjhCsHgWzV9FhpUpswDwuh7GJihPUJomsnq52ufMmiE1EBEBgXxPrMahoisrrZNx8z74",
  "key32": "5zcFRCwVkve1yCqZdiYhik4k9TapBfwGcAXEKMXjzd3mQewpGWWPPMpwUGsERZzSPYXtERxKktcLsDbQHEUBjuTC",
  "key33": "2fHR6HTgcJ5X5LEzSCDQeRjVFmD8H7Dm69n8e3BBpRbGi3Zku2wio53JxnHqGpxqJZgub7xU9qjUU1YMz2ckc3u9",
  "key34": "3RTAWpnmZ5PYn4YAEFw4pMAofLqWENw66VRx75VCP8tVxxrwWj9SNap7bD2ERuX4QY5QsbaVd6LPaSdtp4WGVW4G",
  "key35": "5rqDszd7YNQPneM8NVH9qrKBb7CqsH4KrR8jtWBhxpQqhT17xuWDQ5xnkh7JeeXKyeNxsEoKauHJSGEgKPL9wEN9",
  "key36": "2gGAk9NkvYwinGxLRXJyMSeyVdjBvzgm7rGTWVbCRyDHpK4i7fvJasvvNn8te7ngg4srWgAkVPrJ595dFB3G4Y8a",
  "key37": "sNduDH6Qc4zeoxBMYeYQ9g5HA9Z4NcdxhdfSodpiHfDed4JVTSVKVw5mHWryFi8Ej4bBgjXvykmhYMSVLG9in3k",
  "key38": "22QfETRmDBwhqFpMPsZ4ig3kaXPGTcEEzCdVDdQSwhbqLQgFHJy63eNi78rjj3QJbrdU8BDQUt4xeD2ay4Gv95NM",
  "key39": "51FhXdBH97S9mRQxYGz5AuoJ4mrsHpfkLvQCdtRpDuj6fv8vTtipfnjygTmbYHWnYd6Ld9HVF21mnn94QowthheC",
  "key40": "myXKBCLvUZJU2hNJUohpm6vMXJS5abz2XuWeZYKef3piN276d3xVQ4YRaPc52W8E64a8BzoJN1uMvm6NB66hJDu",
  "key41": "2J9JsLJEP3L34PDDu2d8u4XS53XfcRZGpijYbxxWRbwAXZyP6Q6pVb3uTSpnfjpRMJ8NB9KBXEpKCbrSw2fAwguu",
  "key42": "2E9Hz52qGtjoqAFPz83wZGMWNgSxUm5RoA4wuiPSBZa2W9CL9xuHTRaenp1WKWdvZdG66iBSNPDJJh9yCD831r3m",
  "key43": "5TAFaRCca3gdnEGnWHhz4t8de98nhb6h3umNz7dEcw8Mx6qtk6auApAbHFYtuhLtCXLXnV8uiqM2wHkno47j8wB4",
  "key44": "63siQ74RB1yn8YZttHwWvgT9UFPiFS6fMF9qvasyYutLhZDqdvprf6eo8T1SNCcRYANN1JP8bWczNtsoqk7AgtWM",
  "key45": "wBJiNyLXrQka2kDQGXBSQgSbBhr28zuB9JovFGYaoNfXMbdyogG9AjbEGToNGa7EpvHK8A8CujoU4baAAJVNUMq",
  "key46": "5m7dCRaYTHgHBWLc7JaSneo4FUA7MHe85H9pDYyu5ARykb2j6hFhwnDT6AmAK5RAEuL1GYZCwyK8ZASFoLfAJnzK",
  "key47": "DHPpHgk8gEZPjSvKAiAaQ2MxyFqjRdjRYryqDeRTY47MwFatiZwEEXZs6MmW2AnziryoyHRrQPEVf5ffR63KUUE",
  "key48": "5QrP2R7B4649b8VYhxVVj7ZUy2aGMW6RDj2uXA3uPxHp87CYkjbsGKeoPypbXoPagwJRZCh9uJbqtkbufVxkHWVa",
  "key49": "3jMJzwxi7HkcwVnE5jiQazGLpe9b3QZfzMK5Wp36zBZscsUfJbhFxvirFn1QmkChyhVTvk3o81EGiXRQZH57iUES"
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
