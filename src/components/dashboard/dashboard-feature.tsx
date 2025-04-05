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
    "5gcDeDT2ragQsNLVii6EPoEViofaqMscfN5FpyAf875Y8EAZBeHswmqm32UX52BVyGrH4FsdGsZMJv2mgz6mBxo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "346sD8XK7baoYFSjpCQmpXNG2Ex8gGQHmyFm7wG3WdsZ7aZ7xmB7s942UZ3FEjjhDLnJje2neKQsYhFAYE7recAn",
  "key1": "5jFvzicPRecmTTnE5j5SrcXAEjpLuZNKnJcJtPGknMccm949LQgp9bcDNZrd9iu33BFCnMDpwx2fgEvMZVDLLkmR",
  "key2": "2rbWpqh6aYfobD8WyT5PwDmtqvfumuUn65QdbgR9hdnf9va59DjNvMfDNeySbhHcMQMJLzbnt6L7cgNGX4bA558T",
  "key3": "3qg9ck6XEfjpKpJA5egF6fuzTncm94g38roaoPupGsrLv9pt6XNurncgfZzUhcQjR7v1qXbNYKf96peBKNYUNEKk",
  "key4": "5DMaosDj5hUZx7EsasoFK9PwVGZqhkCcHgahRT5M8thePH1eTf9gf7p32gdJdtU7jCiy2x6wqXPYfEMoXWreGJDz",
  "key5": "5XT3pSD5QnZQGPnu7vV54Uy7C1HsKHpfVC1ZnMu2aQKMNhtD5YK9ZU3asqWwu25gcUhMyUUNPE6vticpM8NRNdh3",
  "key6": "2cdBuZYV6wMmTh1rXCUGRKPKyYiDxoTaQfFyU1Yf1W71tuNhKfyHCas5pB2ZqauDY4sSSFgFfbMd8aaFtK46Tmy5",
  "key7": "Fw69feoTQuNKAXQjKEsQh5Vm1Tnp4phuhd4WJx8qScpqJjdLhXgVQmmjN5Cc2TtFdiL3umDSjuCbjwNPLEHQ1S6",
  "key8": "2wdbdMpL5XeBVJLKCKYnuUxkTyrD6j1zmuQDzSZvR5QfnbUZHHrUPPAbThuzgStaevTiEzBm4wWwVinNpVEd6qYd",
  "key9": "634xcmVKCUdGw2hLkUNTLQU36wXXUkaAsg3ChXYqhr3QFsDSpvURJCEptnwwjkRiQ9JVATa72jQf55odBm34UBaz",
  "key10": "43s6K5paxyxy5A7MEnCS27TEr5TPjnqjkk9fosM2KfX91GfkKiWSzvy5TJoBjurAP9NuvxjqCAbiL9h9U5dGWvoC",
  "key11": "29QZaJXDxmW345mhTXYqETF1mT1MrocV4kGNE5RgU1SwrXgWhNJPcXsyBFXjKVz5XWic7MCRbHecFi9UV2UZzuDg",
  "key12": "95o1gc4qpGj9hALhiwGLsxmBvCxxGPYQ9CHGrmTpWJm42ZmGGZ2UxB9Fx1gan6zuEqs6oywTcZhdxpYXLC6ZKLD",
  "key13": "2H2uKLcZ3KJ18PDckZtzxgJPxHWu1uJhbpVTZ3NHw1ik2ipbzKdqkv1TrgRuEGmChvaXDcNBMwbGVsnxWXG8vGep",
  "key14": "aB6LPQv1Js3gLjoHcx6Jy6tqZquXeb9Gfuf5vfCfexoVTfPPQ1HFzUEGfo4bCdgJXPunHhEoe211phTS8iYmxps",
  "key15": "5VHLLahfm5HhnHr9t73FvLenE5bk35jK7unDfJWgM66auFLkHfKkp9uN9KMf8LioENXum7peEt5bXCWSFKNVJoKs",
  "key16": "3gayLNa8xyN5FYbPqVkDghEWrZAFq9Ab2uUapGBSo5DSimY2graM2j4nz859AnuCN29jQrUcd1ZSz5kiiBrET2Vo",
  "key17": "2mWjX3CH7cPzM6UDfgqmTdg2BUhuoSKb9TToFqbUD5mn2r6wbvh5WbtvHPWNMNJLVtZkpQQ3oWbBDVWCk8813hoE",
  "key18": "422WtuwpQgk9X4aeynYQ21oVMvAVmGfwfNpRer2W9adugJ3aRxgXYLFr5gu1VHPLr6aiAHzGyLU36Qd1rtGTCPue",
  "key19": "2wXPQHzsiw2uDveS1erRync5a8TRG5VQEVXDGebiHyHBjLRR3szseENPc7B1G9Nx9PFn5mGkDY1JrYpv24cVLq4v",
  "key20": "4oL7M7XkKzj26QYq3rJAFzDwHAtYtCGhG3waVP5LGryb2kwW4VRjyroFRwKFUUZLaRmvqRdeqCuF8kYevvoP78zv",
  "key21": "5nwjUL11HMkzisMbsmWWiScX2b1cp9HbnJ6waRpEWBcmRUu8CsFTUn34X4mki5yNih7n3EUjSLdWAskjCUjsMpzU",
  "key22": "FcvRozWELB24HaS4thSRM8Kjv6vhfS4sDxbEPNREe5Y35ERyyHwx8V3QyQgukJVYZM3ZkihRUEeVQa7F8KppPAT",
  "key23": "3H6ZQWVoz2d7Jtcw22fmCjPJoNqNoyZk1Gx8dPow42L9R9PxWKLyf6LiPkdfP9fEYefXrrb2o8bqBZTrWnKhDq8L",
  "key24": "2APEckFtic7ox33SaesSEtBZf7coYhCSVGur6oFf7fcYudKP58ErPnAyui9BvRdYnerXT6zEDMNAaoBi3FarGjqA",
  "key25": "58BMfk8sd7z132Tdw2CosZXea6JxZMU9ZPdVAG1GnosJMEJBDY6FcZfxDHz7AhvCRmySB1q6erGHwmuZ6EBAmGvy",
  "key26": "5vbLkbzr8kcZKJU12nLMJVQGnWqyMhE9bPcjptNmjkE8mQCjB5i7fqGF5Wemv5FavyKeL4uSAnQe4YjqP4jqdzRM",
  "key27": "2Pk2VhyiAs9jGVphWiSP6Fv7XnfdPmzR3FADnPEEi79BzKuHd3zDmtemAVD5dTafZ5zbuRcbRSawQoWD7jY15yZY",
  "key28": "LZuvjuoUWqLubEvEvpkZTibMkwCBQ1oQHbMXHF1N49m4u2dyqkdCM9YjVPwVw2TYzWDPoc5Th5ENj8gcUYcPBq8",
  "key29": "5gcC2oGgaPBeFYwLSrhHTmc2Va9nJRmrCtY9T3cPJmfaPt28zBApkvT2kEr9J7HQBQScUQZtdYeKZuNP1C5MjBRb",
  "key30": "3W9QdeodwmoJ5VJLS6hStyxxCCDXvS6W2ELxWkCypKtqEzY1wiscpjgK4pUzd6XHHpBwdCRDiqq4pHAjWFoF2hKU",
  "key31": "5rDUiccNoimMZoEKMF9Sn3m2U6qRQ9VLXt6nfqCHjRJ6iebeur3nb2wnUvug3c1cidbgAgcZREYWXgzijpeaqQdR",
  "key32": "4DS3fuVGTPQFrjKHFHBd3zdE4Ci9uqAc9mZPrb2d43hXaodftpFPp1WYF5qYCF13SVj8Jacuk8A7KvysfcaPqZVt",
  "key33": "BpbCK2ucJ1d3Hr9hd1WU3LakyWH5EapugttoE99XmWn2Gi1PBuCAZgvecigpymUTnPr6ZGGvxR8xs9Gsa3sE3Jp",
  "key34": "48yh5gxqU32PUwc8D6ihacD59vXpoxpgzXRES4SN3kr6hapAGMcMr8tpEwt62rpPhFpU1wL8HXoctoVQmh73y4KL",
  "key35": "4SeXXpTNatavALboikkkAJgWtmybVb3pSSTTrov7vnVmfRtdcbZXCrg8a6XtMTPhFjQ8HuXP3U3eWcovPbqXWZe7",
  "key36": "QHt4RJxByWDA79Eb1WxTdcJLEa9MYfvz6uVCbGEn7SiWjSNtQadK2Q1HMiVaTESJhoatiWWoQN3uTKJ5AJSDjvs",
  "key37": "4YQhAdZVpTcopoevZuW4Zzh89J5wH6jM1nQ8UVRkY8ecTjKGHs6bQb5GEoqQS2a16qbzbv7jTzvZtqDMqZ4g6Cfk",
  "key38": "4L3DXkuCo3utDRbUvJMWBrweWKTfaBzc6i2AAEk6D1v2pBpWVjnbYNjxXKjN5YjsNkariX4M65R47o97Qepffp6p",
  "key39": "5ZoMENDpkrepqRYRKQbRZPRnoUid8QHqWvjSGTtfMBEXTGjRtDPweJPGxmisj2z9bWP7f3iKP5pxzz1kehVQqa1K",
  "key40": "D3egmqep5Da2eSUat7TCr59fRdJj9981ejtxwHiWAL7Tz7iWaKx19Jd3j8vXqT6ZrB2UTJwyTYVZrc4gQDM5s8V",
  "key41": "1sX7wBwMWser5P9sERkRQ6BkmUAmC9rVDZhgVTiSDPqAfnG8fxMbNZTssrFW57oDJJVdkRUTvt9hSA3XACSr526",
  "key42": "529Wwic8MBnn657eE3u5R9g5ZfXJg959B9fAkN4N1xyQb25b5YxVu82NPHx677qJaaUWSkwpLWjakEAW4Y41VThX",
  "key43": "5x731HqXpLLQZUP7eBr56Z2eAVtXuJ1NQk8y7NiFCjjxzG3VHrfpf988jNYCT5FzGR67HHcQ4YagMvPUUKHdkwF8",
  "key44": "2rjHcHHF6bLZQKvmRyHKc7AEkQTFEG894RgxfxzxgrGrYg5xaiG1bWPQ64HsBqDDUfmUJsNYfDkWfZ1snmuiwZ88",
  "key45": "3T2qqRNtp6R3Z8zTEp2zXJ42GBJBUptptt5YMnQYjJFnND6BkmnhFBD9oF9LyeK6uN547QnYP51d1top6ToSZ9pg",
  "key46": "27sFF3DaRDTyiroD1ij28xhMa9fJGLMFfVxuuEXMsiyFdMf6QJieVtnT83xo6LDt9MpZymp9hLEZUin8EnPt4Jfj"
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
