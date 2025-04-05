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
    "U973jBer5Q7ogarGcb4GYVYqcc3C4npHdmyEAv3ZUt6EkjGbh9y1LRVgNA9hn1msmTT339swcU5yRKpp9Yterr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27yeBWNKXPBpbVnzW7ow9kNhFmMNSUh9yf11d918m9hi8guebKjsh8yfGoQqXjX6SYeFDd7j8sj7ZqjVEV4CiNBz",
  "key1": "4eqDJK6MtggxFBYtWwun58PTzJxBsjCWb2v8NQ4a1k5VAETKtXCVfUu1ZgqN3sc3CjcUEq9DkqsREXnQRQwsHXgm",
  "key2": "soGLjPappKBXeweZMdpCqiAFjeqRGfRxsEt7vYttkfRo3yUxDcJLvuSFxsD9mi7phQ1oNeXqX6Rfvndkgi3udtZ",
  "key3": "2rBddjzT6FSvJ6FxU1zJoKaVzJAPbAc2ZnkqQMpe5v1ym7ErLpfW6ydCdZ2hh9nUeJo63zMMjZqhjEZhEJ2qLj2T",
  "key4": "4NvEMExszTNCMYZp5y9Ep9Rjt4LBxihei81GPzeML5pvNpWy8eYiVs55SdkuaD7t5GbrmuUztwWFGnL24PCvkEDW",
  "key5": "4MfMy6f7rYuMSLaGZEbzLAoDNp6JZvGsit8a3NiTuCqBw7z13d6TgoPqjJjnYXz8tF9iCSxs5PisGk6fmDBUEDgf",
  "key6": "9KtoDFVmVPfQozEtnZvVJ3hCptM6rmyQWgcwA4JYNFifwcT3Gcsswb1aYvgxhZEeAVU4mP8H3dvDaVXzvMMRFV7",
  "key7": "2BY7FGrw42mE5eNfvWAyUHi2BwLsyVNukvxCjZ77YLgVP8BjrSziTd6ey8YqrYGSh6Jqxt9e9N62vhuQrnorXygh",
  "key8": "4nqw8CjXVmRMzoxeH29ue9YDSc9454o5CyNBWwfvjpZLKsb6MKg5PkEPKS8VHTUBE7Fnji5htCuqJMNxcFXnbDDo",
  "key9": "zE9TU7GJetmXQRvy6HCrdkdT63n2btQDXVnADDxZNx4zdxriWH3MLPTBYzC95whd91L9RiXh2ynwauGGSfSR9HH",
  "key10": "4XV6Dsoa9RiJb9Q15shcqJHzFcxnkoq4hheG6SJAxNaCvwZAZuLALB35MzFdjGmfzhAxvFMD4mY9qwEA7Q3BvjPz",
  "key11": "H8zDotmEKLsm5UfAQCvtUg4VEcgxnTYHCHYTTduKVVD62RE77LgkVRcrLiegaZwnFfiNCBvTtrM8EsG55WckDgU",
  "key12": "2dckyELZDhXAs3fMBpa9QcL2kEvhB386sEEj5rWBpCw3Uyp2eCjb9yzu8RLBFXvsXZzGpCTX119SW1Hww3MGZ4W1",
  "key13": "4ACWBqvggSNMB8maNoVcCLSRMQT7rPUcU78EosGDUU7AM7mCjdpHgUvTTZiqC2Z455pWxt6FfuGgpMKtXD2nQcmM",
  "key14": "N5XbjF9ousm6qJ6P3G3Nx4yiD5RYxk2p46FCPNBu2suDu4SgYeGCBXXH41FnefgJQu5JjZxfGqTZN3TDRvzoKTk",
  "key15": "35LCZn9mNbS687Dg8xReaZECkLqFQfCgwhUc37VWhSGemEpYL9tHd9vKsMQQdkDkusjkxUSQYadddaFzXrA3ApnB",
  "key16": "3yh5TgnuvU4HkupvkYSxvmbzUxkDcjpbZazNRq68y5vHV6ZBsPKTkiukxxBQctn3AapjK69g5vmSLaFNpKSk789j",
  "key17": "5zp6rY4LPa6D3Ao7KqMWAtpVgid5uaeQYgBSSyUJDs4G96irEJBz7nC4frRX4MGVpMcamChfqeWbawKUEC5yEXDa",
  "key18": "v4w5Q9jJ6SfsQRA4jtfTMAVgQwECZv9L2WP3XV4TyqhDpP4qBYZm7966XUakN5ws7zRcfjfjznEY1efmk9miftV",
  "key19": "3H9j54TjKeHvrTn4cYmWPMniiWv3EyKYPeCFFESFrRgxRhrED145rJy2YjQYR3PEuasVRpH18RTK1XC97f8TEsa1",
  "key20": "21yLHDxuxMFQGX8KWEDJ48ZH9XzbJLm1Moa2Us7LhY9ZhMB1u52T9Jei2NQu3z29xEh6QN5LNPF8djC71PRbocV2",
  "key21": "3JYN84M8XQgvM4EkZrL2A6dfz99JR1FUQVaSggAzPvrx3GSK4v3SqJGo2mFsXvd5Y3dxojYaiePbk1Zz9TegAb6P",
  "key22": "5Mx1RWqjxGPfUVtbYLasMMNt3mFRvcd4pGdwKufNSuEK32urc2JCHK4vuF5tEFbzne8QfJ7yfLQtcoZ1d8Qid4DC",
  "key23": "2aSbTi9jpH4zzsc387MBwt7avbYfCJHyWkLeBhiRKXzUUP5eiFoiPpVYrSAoKqsUJhAhYeRhQrz7ynbNaSGKnVfs",
  "key24": "GrALBC8Ax9L3HnSKib12zCdoi15QYJyxYWL6Gk172U4qD9wNtQ8eCDia9FviCcnXfqCmBU7YDiaemMMZT2XwwAc",
  "key25": "51VAUomVVHthZfVs75FqnzE7QWYg41XedJj4ATAdZNz7WZNfbgyQyxpXFszLg2RVUZh79jNk5v2Nvkq44vQjC5GX",
  "key26": "jCTXHMaM4EEg1Vhip9iEbGP996c9XZ8Ky1xHqSPwT3fH4MSYibMtVYhHBCqMxr6onVf8o5JFZC7w3kwG4a6Cujg",
  "key27": "4M9QZLUfQSAqMtG1XGerRqyV4wnkdgrAGUHqcMr7RjnsxHCwbNeWUFsNWPEzVM9pMQ7JwhzQxRvXDGBw58zRhfZh",
  "key28": "3DDUWyicVMZJHcQVTNBvxZBsSiWhQNU9nnWy9wQwsgCEJqyWyecSLfJTfUAaMVRedj18d46w7xSjanwMMBx2niwS",
  "key29": "4QpEuJAQ1td7y9BbB7bw6GMtU3mkyE5XR8UgCj1GgZV4ZRe4VYRWXtrDeC9DL1nGGqHS7gWo97suoFmQcV9PDvGj",
  "key30": "5BysHaePPLzoZFy23UqifK4F3YWLkbwm1XGpRsDDv3L9e7izqbHU46JEFCaYBaSK8L1Bsc5M5Nta7fNiEa8LyUWB",
  "key31": "3MxXNhi3GDNQTou1r5dEjitS7tZkLxgk7SDHh8D5xt9QaRduK5YKLLAX2b4KXkkNBhZjkH22jdoy8f6h3VokgLEG",
  "key32": "2s3ck5VrWvi8o4Ne7FjW6XP5AXSw1e7YHkU54T7HTzF8FqeSVnjkZvv8wgxwRcRwFcod1aQ58BvtFkZLNUEJ2Dtj",
  "key33": "341F1rkh9eHi46FHnQVYUpC91vdCZjmzTsUBzuD6y2rf8vZGLqS5J4Gn3Buy13xW7jjumfUPCNw38NPHeUz9YevC",
  "key34": "5UGcWCnAKkLqZpEthN9NzwcA2tc6JguJMSyJpYUs9tGcmjFW94zvbNtFPvPtyf4aQRSaQZX8Tu16XW9e5VyH1cip",
  "key35": "2VM4KJHdjT7Z42E5WQ2oo4QGWUvgccmqLPwSTyt7PjgrsbyWSQacCtYR7u653Pac1ApwF2BJKiWXd734CbJDpCFc",
  "key36": "5LBYcfFmmNLHLEeAPpTDnbvZzT6oPiyTF2YRo8bHW4c6XxqDvERSVMwQ8p9bKm6cw1r3WR3cxHvPkAVZ3yKYWvbS",
  "key37": "5TjWEMs8ZbhEXi1pNynxNVutgZDYjdzX89n1pGntUrqWW6Tq4KDbaRGQxhzjsK1TyCgoJrPBP9H7wTZ2YDgD4sCR",
  "key38": "62yJcXSfiJXFPzuQ9Q99dU6MGAB5g6FqMYaVMSMZcrhJ6Y2bawLasncbeebKYiVJEPSjE1pX3bjAsyjBFu1jubpf",
  "key39": "QYUJD8Cv1oy5nuFbT4NfARQqjLP2y4r8rgDby9ktUMBfyXC7hCTVBFGERqEvBx1qfoRbsX18sHF2dWSUyxJx3QR",
  "key40": "4dSuDvUiAVXXh3uxPeBTfTPFJRyiQpJxsSAd2PnRXkUDqJ2MksV7G7hA18XEQXSnuBQ6qKCgc9uuEx3N9MBJX16N"
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
