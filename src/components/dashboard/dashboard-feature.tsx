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
    "3978aF6PwFCMdtAfT9nQ96oeFSQvxAM3kFEjAzRshJTa3K89VdBkDnbJGR8pFoox3pZE3VovGiLLxfyypXLfHp5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MYAqgvJFh2EwrtB5y2hdrZdKXxXgXhcmRDG3p4HMoFrERU7PSsvrHJzpQUdgU2aSAguTf7E1HuFXERApVswP4qv",
  "key1": "3rUujcwgxjohrW7AGSFJTLx6ZhfcGxabxdCcbdWaPGew5Qg55ucdZHVuHEicKLofbcexEdZWNu6pUUZKqWq8RDNi",
  "key2": "5LvZYGmwquhShqYLUoQYagDD7Dzy9q8gvZg7MvTadmEKsxhinUGgTZ5wBVtVJq4ApVhPh1YgSoCZhGQtEMQqMWyZ",
  "key3": "5qVnebRVd6rBdJdJjpjs3zWVpgCm776WbGmVCr8TeuUPMcMFmsdwcyBs9VibgUuApMXF8kv6hzv9xxHwMRFQVG5y",
  "key4": "5nLMuWD3WaKAwpyJP7vZpMapF39ErFgYWortuA5AK58hBiX4n4sYM67NDeWF1u2CgAj715P2CG4GhrApy3P1nJFp",
  "key5": "5G5K5Te5Z2uLK3dU4RRwJ68oAQgGVV9pQyAosmHZWLv5rz9R8PSwD1JjrpGLxckxPBDMeUj5cfJoZBN3EKq6zDpR",
  "key6": "47hoSU9bEAn5nNLXENA1n9tL1eWRV81E8Ui4f8V5tCCicAs1aXdzynVo4focC3Q1nsocEtaWkuAKffjMVMUmU3B8",
  "key7": "383NQ2ZXSkasc6etzRSFBVNwvbWJiiyF4Nzb8NvzTfYfBDdK2Crwm5daGUzW6K7CAosX7sWincjmLLJiLRae9826",
  "key8": "4X8RUaiFzJwvy4YNyY3rMAH1vfABVw7oLu3M6nQphbsDy1GYX1EC8GyVe7eDai9GwTdbKoYfFZZ2DrmCnowweFEB",
  "key9": "5B29s7u91taDUwSyc92fYuxSz3yW8uu43WwCEkYNDogJjNKnKt42kmRYNq5YV1baMy5Z5wjgsboS8tVf7U9BHxgB",
  "key10": "3984ETGmpWqHFD78hQj9t8G8ofE5YskhBBEG1T23dKef9gkrqcesYCpZYL39n5e9gvsB6jhcSZ4gsWLj5vCw8iHF",
  "key11": "2GCQE2XMYBn2CeLhU3LvhWnRDKkPBFC43aXXdKghDHfdHJ7yWS3j3M2QsC36836r653vEpsw1iDZWeksgU5NN1FB",
  "key12": "4m2VpNTrWEBd5X7pVgoS8c2jZ1SBwi9rhtegfC6y5Z8qymswRjoaBQpRqPT4PhbmQxxCQEU769beTB13CPJnCSpe",
  "key13": "65DvzZkwqkPpFghFiYgcxiQQ7XfBidzHBKgcet9ATNnsRJXfxSxeewHjmDatC9JW92yzzEzPkyKJ6uRP4L6NDQvY",
  "key14": "62iuBGF2YjyN3ptNJdyTo7zMmN21Vx1EPtvjt8qi4B2mCvXyTJBRhcVV8f3QxNKcrAhoKPiw1XwLHJCpaugcB7da",
  "key15": "5f6zPWx4KVKXcaFHXNmikZfoqDZeyP7sfQb3Sv9aaecMZiBpUxmZTWtVVi3k2acMtkuhTFKtYcTWebxAxhQFFaJ1",
  "key16": "59oo9ZvYp7MaSSPYJLmNuq7b28f5fHhJsUfkekCpcppsG212BC5d3Yhpf28FS6yqQTzs5Ls1JmTnHAfzZjQioSR4",
  "key17": "3zCme2E689XeeFLLrsHzGizbobfeCRq6o9v5ozZKLWnhPtZXLp4aYERL9SYwgCrQQZ89687xmyxSKGfk6UA1ZNET",
  "key18": "CScGvvpgLbRe5s7Nzyqns6WTZNT3MFgG536WTHggmHfP2xYokFEhD5q47aMRP8sTGwcP6jiNjThg3XhPaKjneyY",
  "key19": "2hr42JPvpNJSZhsVgUgA5qaYb59cm5NGpbmw2fpZ65BSoTKGa6Y3W3EZoHMLUAZ6NF6A2cENiy5uPo6vG8pLSvxT",
  "key20": "3qzrHzPnLWonZMT9TjVNTnQoYELG8tMA74U97fuRQuXT4VFo1AvMH278sXSfaAAZ8N9YtrMTiWvHcG7oTWxwWuwd",
  "key21": "2CmeQ9bbXfsPkgAKhkzypPjbgTctQxwwLHB3cWMnWRwqtLhBgSqz9J94JWYrSKBfiNBF5ewhBLH6rNEiPJu1wwq",
  "key22": "2c5bpQfvMFTcrXNAhBCm93ehLsdXFDNiUY8zaoFm9eQDTbGiPEsnUpD7fRTNh8RhL1kdhMGqd4KLrRbkNdFhDd7F",
  "key23": "2g8BSqNnuLM3hkmQ7QWwZ9ZcaDm8wmqbpHYojCFQiHVgir8pw2YJE57qte5Xh6aUPznuQEoSDBvxRgiXFMzbB5LM",
  "key24": "xZdik7JqNn9DFGPudq5afQiWfDChwfujaV5dZ8A1QMDuTG5rJTCmwGKLqzXeMQtRLMti2Z3fZNLBhK9ptgKuvH4",
  "key25": "27nzPngXB45y45rH62fgodMDV4sgxUeJwc2NxMRngTDLtriHRk8mYtAqUPAdQXxRgGYyHYP3kqZ4E68dty1hDKMi",
  "key26": "4juPJq9qgE9xFvKKrLnGAf44SYUYp25Z7LTUi8JZzCSTEh5mHSb2rsp2SrrVhCqAxwtSsnB9qS27zkRoLvUDm8SG",
  "key27": "4Ey8jP5MjYXQkxcuanJcUv4AbdNynZnwVsmbsFraDQpHTdXkTAK345LzqDembWQc6JHSGNgKW3nKZyrk7uuFfZB5",
  "key28": "3HpidY8gQ9SNPwUfzEDPpAkyezKpVL1VTtU94TCJ4fWqJEAnh3NQitPK3oKwcawvaVnymg5H7wNcn9uDMYAPzasd",
  "key29": "XBBaHBEC5F2PRfNwCCL4BRwE9Kt5Yf4nqqBUko7cskNhRXuTiihRUoYrLyRouUE6abNJpiHe1CqXMVWeA52AXRA",
  "key30": "3GyazLHGQ4SxhuybFB13ZNyMgbtkg1UQDJu2pgWXsTf7Qu6pGoMqujuBpC4vqqmcLAkhwPuZ9gR6s9EwwyPy8x3Q",
  "key31": "5o9GqKwAYj1TAWoi5yA2u7RuA6geZPf2GRriSnN9XnPPuPBMbVfgMYrwsHN2borsbjk39nFvB8iXx6ApjcnwpfrJ",
  "key32": "4EjoPZexYoCPvUbnMzwavF8T3aoL46423eytH9HjPwQLVDZFE13yHmYB7wM1JcvzDaEmfFVdcCCss3JLM8MAgDmR",
  "key33": "4aQS3xTJfd86o8Fdtc1DTAFyKrQ215qVvobNkdXvMKgSUJLueiDcQVm8Usj3m2Yj7vZSyXAgsaun9WF7GRkhU2Yb",
  "key34": "5yjE6EbueaSJTjjkxiLJR6gXcNF3uzgfb5H883p1smLUsJKerg7x86Ume9Jc163skQFKPCT2ZyFGKDWJM4YWYRmw",
  "key35": "2udQsf1VTqUmykBXaXZUqH9nMUwfLYz5E1sFyftpMjG6uR3tVD4Dw4pBytk9jrqgtSPxapDYWoLde7jXq5i79qSM",
  "key36": "2uyYNjyuTmQL9QxG14EkfB98vdp2pzjYzzSwPzViMnVnDq7o3DokWZxvVorWPL8aj4RwCjqdZr1mN8rtRqrhSeL2",
  "key37": "5zf8CHcztnacCJrjwrfEJBDRDqdod866aKXNDzf3YihmecPSURGppzcA8jKdZLXBncpgBTsY289P7xjjhn78Ctys",
  "key38": "4U5TmYqRi45Fuz9DGrkL9b1nmZ2HtT7FCwCLG13yYeGw4rPDrr6SgoBx5S4hRXqDfHn6rD1FYJxrqk5ZCYb53wPY"
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
