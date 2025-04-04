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
    "3LMT8nua9TFUcFMhR5vuyGRu42s7gMnykGQ9uKATFA2QN4MPvNgByRuvdwDHHeAiPLTe1uptSmzVQpf4Scs4GJjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmTUdUYd66g6pyCTipprh8zibYJY16wCAFtTJBR3W3SRaZ7ioV3JPkAvbysgy6YUdwUEZsWkZCndq5hUk3WCZom",
  "key1": "54H3igpETGGQAoeRyWuM8ptMkVyiNnHV66r6LWSiWoNGbfrxfim3vrMnM9uX3iRJC1BQsumxmMnrZGZhctBmi1N5",
  "key2": "2EexPEsuA6wpY9rE5AgKmCyxh8j3NBqhX3VyQyJWH37PjErGezDLzXB4p6Wei92xHtzrcyqQZtFY5XKmX9T6Vydu",
  "key3": "3pJK2u4boR7ptm771tqc1FG5damcKk2H9f3Vnc7AURRxKmLEfCSBR3FRBLy12oUQmaiu3Ec3fNXAdNsSxJPjCT2d",
  "key4": "48L8ueX63cYjjiSDB7SLj2YvoYbrgqYxVtkXYP1to2sZD3zsyYhVv39AHAEDrz883ztaZ4KbZFjtgpks169FKh6u",
  "key5": "5oXJk7ezo6nC1b9Cs4j85Q3mRcRRcNEBf3cKrVbNLx3yh4E5s3vektdaNq9rxfhxTQHcegc7jJo1g2yGcAzGdYfe",
  "key6": "4fqwQcorzV1rB87oFUEJ6qtnRMnpMszY7hPxB9UVHutBUEFsxcC4uNhGfv84ygyttpsC1E7YvHS2kBnc33e1a5Tu",
  "key7": "5xc7zpoYjZiniX8T7b9tVhntWjzVygLzkJraQ6wtqyhgmFvUKYaGyEciZg1zQp1qVa8TCiEmB3K4t18pFumohP1W",
  "key8": "3pUMa84w8zpLKWZw9nie1SzYs9TtJBA2ZwVfYxKDHCqaq1skZgGtkutayx8xgpAuYnSzkor9tbMGr9C33HSyh4uS",
  "key9": "3R4VqcDGxv9qnrhJR5UUUyeTTwbxeJtPwQBMaDzjwERXtzL9Mh3rho12h2oyRNvMhUoRqKcr93G3cNFJhzAgEnRn",
  "key10": "Gs1HykPHdHgCyZz2MrLAPvKoJNUyS9TKAmFGc7bygg96WKJ1GtguP33FzbGBLi7PK4MHAcAgPXSaok6D88FFsPy",
  "key11": "66DxyVr5xquscEvhbnf4PDKADtjK9YjJKjPdGkwWxBkLiySkrFLNvYuNT8GZS1gfFLG7GHqAHotaX894G4oasvqR",
  "key12": "2umtSzZjw8bC5okshJaBVmfpmGbeMj3eA4hwSB4jrspeKFznq6RfjzsA6PEThcTctYYzsmK8KpLcWeW8M3k9CjFS",
  "key13": "5XFCFd7fKA5ZinXngd53mKA4nSSbGUhUogiBgR1UcMAMrTuxvdDUBuFZJnp4FwWLpMUX8oTAGBbuXiNAL3sFKaaC",
  "key14": "aD3bVPPhjvEsMxzjqtmuRz7PoEUYJB3sgJWhD1uwGB7YrjhaQgvaJ5e9yVaHmQA6MgxcWd6XNaTHVHeVndRzLNR",
  "key15": "5g5bxp6UBp7SfxXo8NNTKJ17PBPaxq8K1qbK9D9jQ8U51msQxMCYZurcSQZJd8yN9mGN4oRw2SwXBRgGsgmst54q",
  "key16": "2KbsMrM1adTwNeNuWfSnkWWdoaPdRejAamzCb7xHZFDkgEWFntkP9TKVgnpQE5wW8Nf6YrZWWdRfK6ByRLXjWjne",
  "key17": "34MNt2Zv6G1yy4xhXZgBk6rDrmkzbJruUU4HLz9uwcrhMGY7uXsyPBzNxdeFiLxQBxo7PV5FuL2r93i5Wct1sQvK",
  "key18": "5qhvvjiPAePUcefdccz9ZrCRQEiPk7uJj9Ky3FYg4qB3wndnqcZdrA5LtbpTfEKsy899LEwgXVH41RM5QbDSSixL",
  "key19": "5hqU6GLsRzjji8mxpqytLUt9cYHBiiY6BSTJohw4ZnTvcB5JY8h3kLJRnjJoLxub918C8MzKF8HaiJzVo2Wk2NyW",
  "key20": "2aUH8qHdk7S7MTUd7KjW89gLwB4XLfnT3G2YHiBfe22CMZ9Hc83Ux6JLDaYH3qi7hGqTZ7VmY7se7tz6CSHGqBzw",
  "key21": "oqU5uCpLLe1fWqV1bmfBpK1UmzVFWW17UdhX4NhJQ3GRn2MFXmxEBkn91HeyLB3EXgkfbeQBJnCqgEWVtZQU8d6",
  "key22": "5xUtQkUb84icmyBesimgTYnjfPH87xQDKPv13LzCYYHyQXSMFXevNhopcd7vwzbQNw1au6VD3dVw2Uhty3Fgi1dE",
  "key23": "yuFSLbywLvhPhyBUC3S61b96seKd8gY4YnXSjhFW2Frt9BtdaGmicLqSfdFkxcBUwDKTEsyYVxhv4S8WqXt5Tpf",
  "key24": "2RR9FqVKTdviPvWTnV2rECFbMSTpteNReNdar5bjkkksTV67JPgo1azmftqYWHjpjzZUCmNUkaQ3rFWq1iBLxG85",
  "key25": "3kM61gRGZWHCEDA3db3pueVWzfKcAA7Fm8hDGKBrPzpEUYk7EBpN6M4cs9b9ccDMpejb4QQfCq7Kkg9ahhQJ2d2x",
  "key26": "4wwBdQC9ERHi5go9NRdzWbvgyZfvN2boRypJ29jSmuZ5WqAXH3znkej9hnfrhw4iwsB95AAvDT1d6gT4KmbFr7KQ",
  "key27": "5wEDWsWg61zHdWh2HjSwjyUu4t5o2qtWmM3uBKJYEC7SgQMeRy2rBXYtdEHKCHxap3YdwZ2zTdySd5AXTVP1VJEc",
  "key28": "1pNbw7rpSLoEsXouTYfqxYPWgW9zCRCc3pUzBZyq3hnfW9aCza4C2DpEwGbUufhc5MgSdt3MCnPtTdmCPDU8Lxm",
  "key29": "34ERWF2QTT6Fdz2rhPhhBCMq9jh4N132kHUZ6xn7ANy8H7JVv1sTonNbnKkoRdJG68M6d6zcxQCtQBpYxmNPPoNA",
  "key30": "5BfsE7s5DXn8ATeGk1CguNhSWeTsEYCUUqKwpcXadXzPitCGj39jvXpvAJb3Whgf3cYJtZruQoqqyZAMxYR2wjhP",
  "key31": "XJMSVpHjWNDufHWgNdvQ7PGKkQ75gAAVoCCto7JaFmq2eicTV1ipC4NcPeHhf2UnmmDbc6g5w8x7htqEyvye8vs",
  "key32": "2Ap33dxjyb8ANU1TFgMWhpyh7NsF8iVrpiMvutwsHCxrhY5oweqxQ2YtWDmFR6e9RHQXKKYKbqpSmEogAN1TCiF1",
  "key33": "5Gws3RHxdTWimQkRt8jJ3ciJzynsLRYaCP74gZXXQd2pvnhBLPuZ4epi2gNvFVhVHCe1h1zFznpoatK7yy4He1dV",
  "key34": "5Z34aEyevXTP7REMyR5B8mSvtiCJovUiFiuWfAjpaC87SAUSunSMtXmfYbpwdhnuJGSMrK3H8GrJYff25om54edi",
  "key35": "54os1dxKu24hL4Q41QJ6Si6pgTzGxhfeTv1hq7yxSWunPJtCBwmxvAa7H5uQjo3mZ8KDCpeyZU1fsi19VaHX7Dkq",
  "key36": "3AhrDU1JsHVN1bNKyo2yMJaiRJDxgfiYbWn1e6e28HLQAc9Fij8bsLzuMPNw6btpw9e23P61fCbCxwnFCRxFr6cn",
  "key37": "4Qt9Xqvs6dDyPxJH5niyzCTnDe9LLUppT9srXabvKTg4n8xZXZQGcJ5wXp5MsjUzsN4vMwjjfS7XhL7pdCHFRWgy",
  "key38": "1b8DMmnwaeRdYQpnJgMyciP3q1yypWy4cxM4nTBtJe6PefBVLsYweMr2cafkkgknZG3iMRwrbWmgQEVixhgaKeD",
  "key39": "3eg5ThFbUuhZKjA6sopAjEkpWS6DFVAGSj5cUhjWjVozwYvUosBP4UbbJqGsXra3tHK3cWQHj7mD8npL48TGKLEL",
  "key40": "3SnX5Yt62HntzCJJKPVWiuRizriJQjpfophzNv71x6V1buk3NTvnG6916fCKCp6Go9FzRDs3DQoan2v5TtxtHVjn",
  "key41": "vZMqwULUokV1dA6SVRKNhhwfzqFCxaqxjDkV3cnjCvz42k6kpKnB8vaKeTUGzaYFvjBR8dPWe8K7mVMM4C51yQR",
  "key42": "3oQ9c5pgX7Zpeb7cXrmWHFd2rnVdcS6zsx6qfnF1mX1wX3jnzRJfysbcK6hMt7s73HHYjYk1aRMrUQZa7CvBWSAg",
  "key43": "5nzJVMjZ9rwTeDwB4FxKwCXfVQ5xMhMZeM5yLxTEVMVYb1BE8JKxaqrv1BgfYTU1tKfVxcWmGdzP7wy6D4hfSGJm",
  "key44": "2gMyGReDkhfrRF8oH4EURrkywnWtxRqeMFbFCq6zGqZdmfgBx3uGu2YfCoaahte3GyFmoQtmFsuLMg54KVVvqndS",
  "key45": "2zJJyM4D1s4jXqTPEfY5VFTXdjcHzEecbsQEWH5ntBpGLDYxAB5PwpyfJLMqjDGcCuTF62Jb47ZcSErqFk1LjZ9h",
  "key46": "5roQ8rMpszSRTefTajdwBMNqidFWJu4pHynBEmzfxjeoveee63UeokWGL9mQaoAAfm8BtXm1ZwkQF2FBpnVMw7Wn",
  "key47": "StjPELVvxPJ569FVwQjCpHEwABLgUMnLVF4ahEtDdKcCazkdLjobuMnXZwSBBCComcQjY6zSWo5wPrd3rEGMumq"
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
