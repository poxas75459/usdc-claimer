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
    "4djBtYcAqPSnhVi5cmEGWYaxJM4EYdPF5oHJTi53fMee9djEqXduUe4awoXNVAD8p1sNPQJ9neKiYdaDZVhxhHBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eR7rfSKHPYhXVCnSfUk36f1bUyTHDgWknqjX8Wsv1u24LhW5vE3yv3Hub26fLKS38o5Kf7XoyAYPY4m9GT29Tbr",
  "key1": "4G65uuqUJNsoWpw7STX9KeqFscZarwntwhniGt6DLB83b2wY8BMrEcVART7TyRGXa3K9FDSchCfii7yRFAoCrRrY",
  "key2": "4x1YmBitd1qMKsWkRn2Jij9axxW5ASVC4DdD8JhhKiHJWZV1BHVH5QYKr8Vs2vpD2zxkEgU4whviu9BWyFkxabLW",
  "key3": "3aH1wim6xUBJPe2yuYX45YVqfHzpDtsd5Xeeky3cDsrdYMdtELRzT4hYHUJb3RTKRnBmEMKCUPV3CsokY1TDhkVy",
  "key4": "5SQSTwuu5QTfHn3GCYx2XcFYXyKR2nehsug6HGiwUU2Aq3zrx3FQPbVgt3hog7CUKFNz4tfyp4R4hwB9egjLRnG1",
  "key5": "SEKMMvbpmqKx3B8UJBB3ZcRwAdwDc9mHs6z5f9mH2PFxziC49iddd5drmg4B2VZkr9DiZMkuXQgBxv6oHFVczXe",
  "key6": "3f8Ni225NLmz7f4zFw5F3XMcZauZPsDH7DLbapi7MVA4Nz9aT1zLiMG2MBzEgnVajpsKyLKtcDW25PDVbyVfR4XC",
  "key7": "s7jHaSEry4sXzJrfa991UXXF1NvXWPnWuXGqX8sYsot6sb9eMRAAKuvncSjCWkUqhyGxZm9mgGKUYYZ3zuaq5nt",
  "key8": "3n8gXnToxwoGeQRTQbaoDmjPQnC6eM67f1fYKaERhuAc9rhQaeq6sUUr3YqqZj78PBciAsc9zSXrQvPbeuZTWZmZ",
  "key9": "53sTMahbkdNptshyvDQhwukgPJ4fVMJGeqAFJeVvwwrjgDYqiVadFqrtLhiDTHZvWMczKwY84q97gFsajgha94TA",
  "key10": "2BwG4Aa9H1V54EnogNbgosUcZem7XYCmmQ25bZh7UjtAQppLUHjGoLzTseAL8LnQnKY5EkjurVomPR1CP9NaecAS",
  "key11": "3UeTGsKiyzr2vwz3TRtgy5Q3ESrmtqg5ZMzpWJxfPe6CBHdRMebbtjNdYPKppqDUNi4X7y1FcCCzJ5hSzLbKNj8N",
  "key12": "5fm69HfLiDwHd8KGTorhkShiBzFmzNDpPzg5AHNeo6rqWRDwCca3XHXDzUyRKxwQwyfbNSgELXESrvKbPU4FGo9w",
  "key13": "3GRMZgF1EJcU5aGukoXGiYsmQpRAWpUvEewbFthzCPzX74ffZAp13zDN2vNmWkXJe6tHhZMGFjC9gCsDNQGBTg4P",
  "key14": "wFXG9SBBhp9Ck6LpyuPZLfCUHx8zgXTyq1UsrAGjNnbBLjbajkTA79gfhQQKkQLwpoD1XWBWpiTWgvfbVZBiZqs",
  "key15": "4XgmZKE5UgMusoFuAPYeCGzk3Wk7RGDu2mKNAqjs7XRVpJCN11HUgozQXeW4V6x1gkygPF7f14fxmVoLWDrreFtb",
  "key16": "2i75sXRFgGN9iPQu24rfRN3nbKQKuEBEUPf7ogoFeHSaeKAKnfsgsR6umd1VGzdoNz6aZRbA7dxUpHqKodVTJ4S1",
  "key17": "jfTBpqLJqbY8ak7B8CjWpyDPZpBMG7eKMG5CrunZJYznFkHwdi7V4Zfm9pEXp6pgARdATGf66cHPmvMnbKFrM8h",
  "key18": "2sv1ja7rNxwSUoJvGXEhyjGxV8KeapQTE5J2zj8M6hqbRopMECbzoVwvPmyG2ffDYTQTJukBpTm9NzGr1jRdX3nG",
  "key19": "3UFVJzFgzmV24WYT7V94caUMMSkeDfKGnGv9XYw7aZwV3ARrwEqRx8JwKTdLKiMmq8puE9DHzQdfg7YDwmfDBdvh",
  "key20": "3RVuqzusPcMDxVRmyVewT2JmVdsdNJ3zXmhNqkyUVB2UYXzvHPQ9SMQRsY2ujgBbTK9am7dj2Gg3sBvVoaFZj1xY",
  "key21": "vtnNuJTTUbbNhE5ZVtJZPb9nBGuoYGHsM1U2KWGZBUcFtxz2DpN3EqPCLH8zJ8rdUTGXGTGVJCKhTCb7HZU9ftp",
  "key22": "5UjrL6tKv94pBzee5yedUKKyZEjXjjMhAMKDNatgCbWgeaK2fJrNMgB59xv1tQdiPJKYAB7DGgmtGQPH2zGNDXxc",
  "key23": "4aDsFsU6JY79P1SFzxWNUVNRU88YueET8qVGz96o45Zn4Tu44rREbMR7oyLg4FLu63hKBEiXN77hzWFnGvrJjHcC",
  "key24": "4xhV5ArNQcGu8MWJmCkTqzpBmXssRddpRxP2e6QM1UUezDTejQeHKaysL9f6DZ8qLai5d7T5zCJtG5XFKj9DVnFf",
  "key25": "39ZZC56MRfSq6c7ZGaHAR7henwsd4krBVBvRWbN346w2wqUfxHKnWrRbuWURQna5KtDG2dquoK9gAf34oh3niXTT",
  "key26": "aLni1eAXdpdKFRShsAKMgMxTmQA48BiwJgo7zEM2teUaPEF63Mi1QAZC9jbGNM46ALYhXWe5pvhRQZRGmz1MEtp",
  "key27": "2u1ZNUUduSsbcjLGmNUMPSwi1BCjpsGRz63yGDwMrU3fpiMLarTX1pob8Efq9d1vEz6xsrfsveofzfQaKJ5wfS3H",
  "key28": "2PiRnUn3cEhqaxYjYSLcoeAccEmJgJjxGjbWgEfCT2RqKLLMwUyZu1aAH8B1UMWKiqNwCVVmoV9jiJtBKz6cuxKW",
  "key29": "2Vte2zP1QSWHrtYH8Saa1TX2jBUocyTZwmkX6J6PtFA45ZqezBQS3zCmzxrdYBGeXk1iTY1k7XUyAsArKP8UxpH4",
  "key30": "cuHfBzRjZ3apgCz4BKP9TnJnNkJGriNqkRAnEHv3jKtVGWToeNjEkfWAPNnHTAwZPJUoa4BCZZ3WjBTp9Lvr1ZF",
  "key31": "FmfhfZoDX4kkWGmjgieCp3juKhsrKGoV7PCZuttVwmqeJ8ATxzWFaKoXav9tV1V7zrtgresf9rzjxzEKvQNTh1a",
  "key32": "XvE4ebLMbCYaSNbTvtTQkuXZSv8gCQGKSiXym2r2E9QgRWtBedbMVfSDTiL7k9vUYWyDf62GZQPvbsdB6XSP8xs",
  "key33": "47EfAULwkJmZ55ZxgskGcDgbTC1SHVUSPehkyCxzri9zDvz2QdpJQqx2jdGWEBXt4BCUsJu6tsE4DfdpCNzFo5rq"
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
