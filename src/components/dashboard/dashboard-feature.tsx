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
    "5GnfKod4VyvCw6wZ1Gx4fgh7i3VdW8iEX32pC76nHxFGbmNKZecb6gLe7UqTiHtuTGxayqMym7d39AvtraMDW9Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q7mcCirPLqh9h2S54KefXiWAVbYst8ha32ohBjgMDCUN2L95WcHPct8P5ijEcqnPY76UbHwkaw1SpizLmjgPzjG",
  "key1": "ShR56ZCMy9vwzGv8sKEUdQZKZiSsaRHjVUS1UK6iNczqw9pwq5iKa115fhCCD35ANS8G9kxyQnD8LwPDj2KxKBh",
  "key2": "5iFzaDAx37kwYME7AnzTwY8YZ9a6iRhmZ45ScqfCHrM89rMMqHqGcHf3UXEDysxuHf1bTbvMEdFuLvJY1bzNGo9d",
  "key3": "5NzqjXzJTqVDMZzDdJ984CTSWVEtWPVsrPV976fpQcJ2VBvhviKKWuKc7nGPpvFgifnmDMLAjnfusLweH4CHA8Fm",
  "key4": "wBC8ZiMatrY4XJY3JNyyL4q35QvT72ttzEdekWzucB7TEf56zQBNyaia5dBPDAzTjzmcJ8ssn3TewGqK98xvxjU",
  "key5": "2L7LveWuVo85GfKvwmHpughNPy6X5P9ajfiwmQHKjyuZUSRLdVWa2p15GgXUddpd3yLkxhgpHsV2p5cj27hCDNeS",
  "key6": "suKCj56L2DL8JkEe7BccrrR4tW5fjvpHh9vfe4KmsXmBLfFX1GPpqY7kK2BteeQtqnVjSwqdCEtz8XwEPwmkaJh",
  "key7": "2ZUZRnasUxKEVVDQVCc5wqb48iWgJHJ1iXTJrhzcnpGTqah5KxDhqHeBP6sgioSNzfiD4DU4JkVyvYa5fttg8UJ3",
  "key8": "4dfk7G9pMuduqpVQhnkyabdv4Xm6B2bxKvK2TVm5KJYF96SXfYdqxMUwFemqWg4dUXQerEysHm96tQrxC64cLb7c",
  "key9": "4T9zwPWeyj1wn4nBWzVhXn2WnuQvDi63hBrPEvBLbLrfj9ohAY8gKgdN2NpBUGuWvfYMxyWuctZ3J66cZMEGvTRQ",
  "key10": "3hT5kWLChB7Pv6fxESh4MJxaMvLKyP5U6AbXRv5bxsek3hyRjXfdHggkzH1naWV7q4xJvDkWuj6zxKnznFJD9SxJ",
  "key11": "qxEc92vUegN4KbbE7SdQBNBMvz1bFuigL2mWx2GQrdxpMDBRimowBuSnzksKividAqedrjyJXKQG8xxikpx3GGf",
  "key12": "3ZDEm8ggndME9yruCaFT5cCHkG1P5xhAQSwQbt2AH7kXx5U1jcJ4QTC7RiDQ3qf4rfpT1bWaoeRdUioSg2v5Y3Jv",
  "key13": "Um2vbZZYDFyGXKeJ6UKo5bJenZKmQDHfeiTScLfkNEyjU3dAGY7wkWrttmGESvHYgQ5gUkU9bkY49Cgkt1sKMLp",
  "key14": "4o3MMA61K5GAoJnb7w7qj3uVGTYxUzHFSNPYbQfRrdccuq14Fc6b2EWgQR1DEVsR2eAVtML2vU9N3vfEqNXigXH8",
  "key15": "52sQLML3inVxZZQ1kjRAkvvC8zKkiYJAwJyiuSF64SsDevEaVaSzAfn5iZ4pTgxEMMfQNLcdfmUoDDSg8NE6zjtY",
  "key16": "mwHbzVYxiRdSxjoQvXbnrkaHs9kk4C1gJb9iqnAjLhgf3SS1ftT36pfdKBD7PqBAXXP8dJkDKfWUdLE8yLxJnLt",
  "key17": "3bH2mFrBuGCGnU7QXcqVTmEUEheLX6GPhQnR3yqrFcjmJwRtaHvr6etKWjWf3gkRApi3aAgaewstSGGQyzGWBXPo",
  "key18": "3q8cEixJYjpM7HRXkWVGahwxDBfxfm28BT4cqHdjArB58N9BBPJFwVVsv9C8Z5ebDEyFMd1FicPzf31Zvztu3SXK",
  "key19": "55d7rjWZLic5tgwsRPKe717gtkDLd6rMtYrnMJbwzm53eJLSX78MkfRCwEWSgjJ2PoJzHfrf68aQVpZXNxijfBQh",
  "key20": "23EFRoV5DehAfNdbNkQGd4UyAgXqUQLcPw746osyqR7aZB6mcYm1ZCzzWHKt1hnwuD2vWQ7tGfKZ33sjJrm8PK3y",
  "key21": "4vLieyqtD3utU6KYtvqu5bAYUZdPertG2M8vi9Dn8ZCNe4hN74D9TJKiq7eECWgemMvhRzNjPm5fw3K4aFD3enWB",
  "key22": "fZKaEVB7i19kfyRZdzT4jZwojkyFzV3wCEnCXLBZ8RjYi2SaVQazeFxUaiNX3sRxx4FTQSbBsGPqL99QRPkSBFu",
  "key23": "3k3kZL54rh2Sw2myv5TkFe1YBeRrf55imgpbkfEEn8UNEquZi21HU3atVaEH4LCp43JiUwGeurM95HU8zZRJpcFs",
  "key24": "2XDmkVuF9q1pJYdak2oz6o5sgeXaZ3N6eLie4EDdvQGuXW25wMKxRsSHHSTxtwVTQ59gpa41rRQYWEwRRVjq3E7w",
  "key25": "4snj5VNSRtD4T7Z7JPPAL9Ts1XRMy7QkezuLxEnN3yMiqHSrWjbUiLnLcu9yZUftuKPsiThfHdaHj3JjTX7SM8gK",
  "key26": "3dSgPyUYd4x2RaPmpDpathxmWg2jKqJXQz1x7uUtUEcPYcXPFQ9kvU6dYShiFdD9gpiia8ySiK2EfYCMZB6WAEXP",
  "key27": "4eg4wY5RjiVXq4s72XqTwSLyRUcqUwzSe75q6zotwYiQcwStU1rg7PNU8wPNG447CNq9EaSvmfCfypJPSWbBw8Bc",
  "key28": "p3UQUnTTDemcstxydQpNY7AsE1aZH7XvxB6yMr6k9sermvEpnV33aibdeHw7YnkA2jW6NibXZtTVpZuaCfKtWFS",
  "key29": "4mrmyC8HLwgrMvAM9hiTDYqnL3y8YAV1KnatHfa1KqvAWHx5FbRHe2FoPBRkFo9CZBVfSRDewFenXuas4TzevfNG",
  "key30": "3p6uPu37Qg25fWzk49kdx1AFs3GvXdBy7fHxhfA5AZ7NhA48w5Fmc8LFXiXbqPLYo2XM4fNMPimZcfxsB3BvFXXX",
  "key31": "5CsS8T3cecVTZN25aw9tBtNjhaacXzzczhicho6sDtfm58KSh39QnSqooUYmeUosJuyHnFrUfdBJqVaqn2gpFgGV",
  "key32": "2CHvDkfwNGS2LbopFEPcZpUKEmLBhdZ787YTzQxdp5a1b2NKtcPafndfBcDbcDHwbasmCFuV7mMknmTPMAvXqook",
  "key33": "3c3iBkwK2y453aZ8SMsJSQtTgP6Z9hvBV2P7rMX3mkR9VRvw6hFQxM7jwyDGDxukDUCtqHDmVNYriuVn6tarEzSu",
  "key34": "55b5PJ8kZjU94ezfqEQVHdbjEecQxgq14jDo2f7t11NhuXKeBFKvQJrEDkS6WGxx3YS83PjGwF4N9jvaoi7sEN4",
  "key35": "3QE1vdcD6NEvQb8mQYakVzFjVhs2j7iDJaYjCHd6ZsiBzaT8Xc5SZzHUR8ZATM2GriapAmoHpnzcwZFyTLKzJVLC",
  "key36": "4nDSg7MxXmFKuYzNUC2ogCRX5pBK9js8TaQhgcXSHshmH66y3rHRR1L4ZuontYSz7kjWiEZ43XfvSeEhhzghMF1v",
  "key37": "eSxRedHieTgHwMZEHSM9QWAUuK6AeVzHCAL1CKapweyh2EqBnGaifpf5AHr2tpgu7g7zZCMoiwwS4daiThG1sxi"
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
