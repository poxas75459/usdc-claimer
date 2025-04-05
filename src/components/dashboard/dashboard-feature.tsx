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
    "589N2HqWoETR8jG444jMTu5i4zu9A5Kv8m4S5JAoziapsgtJ8PK2KJfRnYVfyR6bG9aGxpGd6eLsv2paQmTi7irN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hMPvT5ZCc8GYAADSjBkWdga8iMXWdr6FabHG2SFniQZMSiy1YULJNqc9MDbSL7RXgCve55PC1htzMSgXXSUbEzu",
  "key1": "3LpooNyCDSnRSFXGSC8eNKyzfmcnggyMpgJdnpRXioqJ3u1jFwccjzC73n4i83aSXAMJPdCQpXbgsdMHyzkq9xjH",
  "key2": "4dhcdVKxkKit9H3DduYk2eDY3MyTRCUiPFPZhxTdtF8ftSKMD92dUryNHeJA41jRrYjC1kzJwTVq8qciyNEWbGJ7",
  "key3": "21MKfJe4bZAHqGf1mEhFuFLnBg5KSSnSGS6vDQMJUqgkynRKbkQxtmKEAwzmeT4pTxf4wNhANwwyGA5JHP8aTrqH",
  "key4": "4JEoHvGa6QavBmTXYr3aMcVE2uQ4nqyAUmXzTxC1DgCRPcRqn5rpzhpvpV7VDX5oFq8GcDKjabBH25hCnFHpaF7d",
  "key5": "2nN5FPNm5rtN1Cg6cxPshBhX6xUS4XC5sLjyg1YVgPG8iwAX1Thbdp8UpgsFkxMoPmKAPfkfrEkCaH8uQYK9re1U",
  "key6": "5iwkHZHpWWraHQifZbRfdMKxwG3At3M4bNCLLyFpZEKiRLSC3X5R2Hw1dPFdQQbeDUYqyaRWYiXKdWLPpT95XNi4",
  "key7": "3ULB88bKS21tVLLrMf36hyxvnvewZ6zcjgeBhNn8M6rF3HAyhkYmYGHKZB6dQD93QVJh7mTUtrAoRC6g5o8VehGT",
  "key8": "3bHuPkYyFp7AgqPW3Pfo3LduoRBwb4LzoiJu5TJSEtWf2mziGFrMRbmQ2opqedetEyWkFvPSKwwLBETW2pv64ppc",
  "key9": "5Yzy8d3iXpeupBf75TUMgiUKrJzknATHvSVxUNfMvTj4HqpLJcXDksSpVzDJKukeYqp5xzmPCgrPALJ9mDkc6Xy1",
  "key10": "3zudtEPDxmMxMGFRiR8KXRPWUm1rqbKmi9q8aWxp4EFg5aXN9VV6MnwWzwUNVChrWjfXABz4cbMQrF3F2TKPsgob",
  "key11": "GkjyAFjmznePZ5Hv8BgmasAZwvyfLNM8zr4NA7LYeqe1Ww5raNARUVGXVddVQq4HghghxRhCjapoCdthEMnEt63",
  "key12": "5sXTaLpMhGBqtwH7UVupGgZbeFg8JqbNBCgMNrfnQmjHLyqawoUoEbrPLiJsMUgjDhpEvZo73Bs2YFNYjyUyrkNX",
  "key13": "5S48hDhLPrw894MmtDquYbR3iipN4xYrzkb8eaNGArWXp6yNdaEhgL4g17UGywjpwUBCbFwSZq8cYqpCDcoUJTR9",
  "key14": "3S5VteRc7AKGywwW7uJ6qCiuQkju63PL2BUX9D45nQ1v84psyKj759HXdWVNEfPuJDueNe7D59EEZQ75wQfHi1H5",
  "key15": "3VbTSZEeZKWhiPC4kF9Wz8VcpSHKeZmwM3bjKChUkHeNCXJFEdDsDWuq2PQGnthATm5bD8sYMvdM6yNeyqFH2DTB",
  "key16": "s93XeBeBe7WhZ717jQsx95GyVGZppezziPCBKapzRGBx6x3RUwSaRrNrroJLakEi5mWmtM3mYULTifvfofxZBXC",
  "key17": "4X6Xxv1W3JetWnwFA7Sv6LYiKWGYXW3hAUFr8MoXALruPJPJuZGS9coQEDd3uGnAzkTEauiLUrcQJ4RU7i9ik1zX",
  "key18": "21GYJkQdhvdmoVkThueUfuK5SqniKsnwRp6rBQSL66kYachMMEZAtPnBYNBFX6rgpWyhGe6pE65UBkEUNwEW2v5v",
  "key19": "4b3V2saNa8dvhwiwoWBNGmN6sa9HzYn8gdjBDzkJW5ai7subfzytqawx1y6GL7W8AVFPVzXgy6bfZDp3LUTuh4ks",
  "key20": "2PmjAxN44fnYHiQzFTrv9AL8scJ5recYxz4K3P43Pgc3KXELdzu23cH4MYUbvyXC3TcVCnKuj8AhSoYqWzp6BsXG",
  "key21": "3qRNm2JXG4v7W4ZnSKkJPXm1Wif8xFwnh1zVsaMtsNPchiFGGJ5suJ5pivJxPhZo5HtErpqT9WKkkfcrDu6KgMFS",
  "key22": "nsHunFWxhqewGdVMszi5F5aZ7ff9FFCcn2RYB97PfSqbBw8K5irKFGcrA8sTFe1m1zcrorvn5RAV55imJsnxb8d",
  "key23": "3yVBpXwdVpjL5iX5s4f1HAMVx8itxxw1zoT2VgzZE3xupWtCjmEgv6cmVtkx1Nh5GmzbFzUdzUBuHWWa1fVHVRZz",
  "key24": "2xVyufGrw9TpHGw1JWFvi9RFspXNdxMR9HsawRbtBkK1k5Csjn31eJs4aMKgyXxX4coyV2xDCtFb4Md3aJVbekBC",
  "key25": "439Ro9esA2qp5rVyKXMi5yBCqeEeiiyi2DdXRdLwshjT4LHM4Cyfir8cYfaXVBaQmRLg1C5Ej5apfYcLdGi5Gpyn",
  "key26": "5dFPVeTz7CXpWbs7TAf1jqvDvTK5hbT8HtDmPGtdoGyuKHDB28ndMNL1ficePpcxVcUJVUQqppyY6xhxPBvRZvaL",
  "key27": "2jAts4dApJusGJJNf9ZbiKXmvLDbzJzYX5awcztuNBUCRkJntLAqUEDzsZYSoQpQ3SyKwnVM7aNSvjCUqaRMtH43",
  "key28": "5rpw5tfyGsgShu7WmKocaaVjwHkukxyFeM4PjebsFEz3Gezhzez7wdRziHmnTNMMiXPu2jFdskXuxJkNUTGekhMX",
  "key29": "3SZgdf8EcipKV4mZPEvMsyYwuzVzvdg5htNE3LNQMs1tUA6ishtow9CS9adAikLXemswWEBoZJboA4dh44RvnHEs",
  "key30": "3iHWZHPGsWtycwfWpaHMpeSTzV1fL43jVa6AzMRPvQRv2vCXGEi8mRQB9imATtbzJmyWUSVn6pMtkFvEmv7bAbCK",
  "key31": "48nS6AzMdyRgTLJdmY9FmbjBUGrrHZFKzPR2bB6MJY8QDnbD2Jkm4JwswTR5fiC53WmyThTL9uk3SCAMQsWhZuYB",
  "key32": "25j7AFxoN8M3zbjJe5eVVBcEg738h7jQtmm19uuHXx7XdgyhSgwrGEYtUQuDp4c69RWGeUywAKLgErP2thMnyLSV",
  "key33": "4DfVxuWWAZEUxxT7pxGn2QxyS3aKGRjXtM1aTCDcxGXaPhWwTrLUHsT9r33aqvLA3A5CuFfviJ5uojCuzRLtjzzf",
  "key34": "5TwMkm65fRF7GYSKZ6b7pj9i1cLXVbcfCLENn3Yby9tkPMpef6z6bEnagY9E1vHnhYatgow2DJdeKzSrwQNxdLjP",
  "key35": "ri8y31VV1CAMiaPdfCUFnSeAJTjxhtR8qevcx4yJxFdxPZNJNJFdSsqYu6m4rhtmoiq8DJiDpqkJDC2tQcCzCCv",
  "key36": "31FP9V3H3g99AJeTgREL41Re12Lm2HF5mq8Gm7oBQEn2dVysgapFavCQQhbwmN6WnrSiKS7uTNETutQj9tULsw3o",
  "key37": "J2LVMTpGwrn4jNEEX4ecfxM8PoM9WEdScnPTxbFk4N5EuGp9n5XDRPQmwWcnoqqYMX1yR8thmJqmSCRwh15JH6W",
  "key38": "2yA77frENbF1utySq3kDQXBgyMDdaPe5PhYp4ZkXvcv8uyAWgCzsXLvjAVwADx7QL59gnZtnDxtrWrHHzR6CLHc3",
  "key39": "51T2NDitC6yt9p8PtZCbiCSR6d5Gt1H3aWi6HU9xDCoH2oeoN6BJmMb1x8tAmPUeaqFVUNeKw1eNZ4x4nVDgXAtw",
  "key40": "4EB3vw7LaadAcAynbtr2BwdvXRDrbQbYLpuvZpVzZNuoCLxyuCvVHHvPPH5s1mEd16BpTVV5iddpvEVWjVqNHHbE",
  "key41": "4dhVHZJtx6D62ww2dtD7CXj7H4MevXrrhUdYGk51d1CHeZReLobDWfQV8E4cF6Suojyb3hhvedChoiB6cG4GQo6d",
  "key42": "2WSoyfLtfzYK5j59BJKoo2yzvnra1H8PMr9zVN33zV3LiP9DFwJBN89cLX718wwwDZdMcJBVEW4tHdHE9FX7n1Qk"
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
