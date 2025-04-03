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
    "32wLFYvvX7Tq2E3yeN2rLgnCcDxa1quonVixKAPnik2RnmtEZ72TbwyEHfCXHFpM87TuuaBqkE4pMUuDUkh6GzzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GsUX8QGZekAeknrHzbnWE7qGneQoX2JjbqFxARZKTx3xzHZmU6KCin76CuCN3LY8BNQjMFcqKnSCGHeeRLh7z2r",
  "key1": "4pw6M213TP8Tw4gwmwiYgf2F6YBpbvYpVE4fFvRiP9QCweWiPSZ8NUUxGaz6FR8yNNjsLkpKD6vohsLj3gWfdeg",
  "key2": "2WUYwxmJCVhQFsDadoaDSjj9qdvBqgK3Pm8gviN2zk3TLjPmbzE8eT8jGyZsbxz3hu9B48pFqLnHY4N94BoJGWXd",
  "key3": "4fjkizxwDDRaCmNGAmXH1X1ACJpL7i42hYC2cVGJY6t9ZkdRZr11Dxq6oEiy4DuFsuzhcaT6eWH9mGcYoFExi6YF",
  "key4": "4o5CPScgNPE2FT1V7cKt5Su5mtUrzAy6AuTdCdns1fYkwxCnmPbG24gfCkD9ey7zR9kThzWGTcYdBJANySfcRTnY",
  "key5": "5x376PrFr6sFxoiaioBH84wa76x4PxXYznWmAviwbPUHVCCKXFEx4MHr38fUrVY16FPtkpGSEk6Skhe9GaoyXPKD",
  "key6": "5RT6aF6vaSSW6eu4h62Smqpad64YGduWjxCy3UrWksFbkWv9V5TeQFnmy5cowwfo4HyhL8DneNBGSA5GMyEezND4",
  "key7": "3FBXV9uU2KwG6n9C4QEvHhVazXbyQZUVdSHJ6zPSsQQmvQ3QNuixxrDk3zvZjL5TT4uk2uk3qdUJT9e3se4XniTD",
  "key8": "2D37mNaBG3QRqxpFBPs7v8jB9nBYyUKhweYvDHZ7zcH8KBzbar9wq9f6vckf8tx1Un1p1fvCu2oNcJTiXTbJdxdK",
  "key9": "3XWBsiFrYUVVgY6AwXPJHHBLGzj72iQ8epN9FC4vHAY2qPzTRjgvsRvomA3EfHqSoo5i5MCjSTj6S94ju5tLR5F",
  "key10": "kpBqos22rnYhoCaVv2Tcj38z4T7UfBzsyMe7re4EkBPwgcWPAs75KfATBpZ1gS8zSfRmbGCbpYqvap2EBCZwQdJ",
  "key11": "2fyGXZGY13k5qL69yw2mDLxsM3kungv1C5eAby4vmh8oc5sA8grrYVUoKcCMsZkFeYVUtZZzXcj1TvMTw5Rzhkkq",
  "key12": "32vEt9NNRVwpBaXPbtULSyAt8wEejdBGyYorb3n48ZDR3xACoRAuv22EeLhZKSLU5MkYcsejcuLbxSr8PNkVBgZB",
  "key13": "4T5x7ZQooD2HE8hDMmzfnZg3nqDzSMvF5xjCkfyyLGqwzbfKFt2mthYjBCG6W6PMKMPQoxfNny4KMCVwQfy2PwHY",
  "key14": "5sFqyxWp4KFVoTJeUvd7yaVRhP12XzZD4gCpYvVWGaubVZ2Xjot8kQEjFcnpiwDwhyc3Hs3jomN8WcfPa6BC66bc",
  "key15": "3Jpt8LxrsvAEtsgd3qc9kudd1cxZy2u8rFk7TMYuraVL45pQtHCLxsmg7fN7Nk4MFzBx4LqZf2fhw7RShgaRo9zX",
  "key16": "2nHp94pWgeJeUPZeFYPNZ6GAFue4fYBhSmak5LkrN39bsDVnYBrvBwgWPYibfHZqiCGyBJUx94VEh6wJMSC2cNc1",
  "key17": "5ywVy7L9JCFEYWVxFbHiJ56txkzX6wtFeUqhizwJEKwtH3NgP3tiLBtSSe3WXv7uKv8W84xsa7wPLnVkcS8hYWQz",
  "key18": "4Qm9Y94i4mYcaW7SNFXMNkrtDk8Pw2krbmkUX3baVBn4vwzAurLK72xAVRRnv4YX1cT3sbqHYNKywCmKEandGiC3",
  "key19": "3TZZg8Vx45HtXQc8va9F8MBFF2YNcjXjnFHsCgAZTo7HJuzQD15HXNpM7PUBPQZfyqipYjcLrND5AK3ta4hYK1a7",
  "key20": "pcoMDeQ9e1XtfDtQcQLmw4AkuSo3C2NQe3G9Gr6tMTqpdVKbbrDVmm8kz92K4T2izcCWi642WhnQWSNT6XXoDgu",
  "key21": "5jW1Mn36VJAKXyxkoDhb6CSYveSqoNTt9vQDAHt57uKDYrqjDNVYxzHjtruY8dECxx7y6RkDETBQVrrUjfrjezwY",
  "key22": "3zKkNbLFD6s6Q8hFMsqkbQd6Pr5Q3WndGefRJC17FBDTuFxq3LT5hzqYvTu9TbDXtKuKuuCEtqxLZe5UvQ834AZj",
  "key23": "33jUrAQVecw3tAxcSyLAz2z5WQUuT3qfzSDtfogG4zKiHACRTfVEwLEfcRfLJz8azDCkHxvrhisu2Lwo2UDs1a2j",
  "key24": "4s1Ry56gsA5ndUggCGC1U4fUsp2iANj4GDd2ea5bE8Qk5t4igNYT6o3aJUyow3xQ6LZHZyWueGADLWDafLYopSeR",
  "key25": "2Ak1LCr3hLRtya6gg282HfWfbXtraexK4gPHSSVR4dJiukoekwdQcGGWkPqXLiekMvPByUmJLmGafjqVgUkbQHHM",
  "key26": "2fyxUC5N1DHHLGoaDGwqHAxnvtbHW7Y1P4gcM1WCRXjjkdYAVPsqbVeQkDnRZVzHqqeJrA9i7CNzhfUArzspT8wX",
  "key27": "3ZnKkE5ecKTBggd2mj4YKi1dYhLAp1G5wecz2HG4wUT9iDhsjKS9UoFdWZpdut9DiiET8Yjqzs4fud93iNvHBuTB",
  "key28": "4SxE1oNoX2a4LwNmwdRKD9aNLrdqPCCaJgGHTY7AHUTbFB6pqF1qvmVo2Rf6BhPXbde8NF9qnpAUh58ShX23ckNM"
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
