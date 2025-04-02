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
    "2Eai5iLkYRNJfmTMTLywPui2oj7z6ZuTekSFM369cUp6h9ASsP65nk42Fa1YB9gioE5rhE5BFnaigpRFuV4TowFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZke1TuMVqyHPQmXZbjTmW46o8wzKJxoC7B4Nmvor8qKLTcUm4VFv7FSaJyQosGvzSHkxhEMWv2z4SykxsyX69h",
  "key1": "5W9bwHCqTsQRgUXMPbe927YkL6wt9qsaErCByJ1RjeWiXVX6GLz2Z5zQ3NHqwrivZJu3NCcdq9HEHt25mTCvVGSR",
  "key2": "2f46ouzm4xWRhF2uGUSX1HmDUhwQcwJCAqJJ8YM2MGxiXhNrJnRjW4QZZ5g95Uk8g4uFaVtRuz4M8fNxFjsdUF9o",
  "key3": "5EtvpgM7fAnAZdhkZbGqwA3iDVHHiJSVr4BSp8yUz9UUJYRe3sWNzqkgGMdjqgnsGhTXijf5PdqWPJq143a8vYvU",
  "key4": "65dxJA2Y4FHZQSCpAy5wgNAaWsgVdGkGqrgA1gDwRmu4BANjynCy8qjkpoPmSnxsNYH3ZNFPDTkZZdANHfEoAWX3",
  "key5": "Aa5cWW8bHbMSbWecyHcPTUPfy9Dz4N6EFPAqPyhpfWg98fLPBM6mEjaKWwQxayVQa3jLYugeHnKdv7qdfNCHHH3",
  "key6": "51S9bzXaGdVSZ4P5EsA8YJiFeFXGZG1WsrmJVUn65ycGUdPcTuSK8EdrGaanmkAMqapvPiwdgVV3Vxx3CvFKq6og",
  "key7": "5rhPkUxDLzZT7ccfQSdT2Tg5mibXJXbNgaCntMQSf6TU69n6UuVxBi9cFrWe5udr3uKJfqNUgHg4Q3z3tN9nMufj",
  "key8": "3XBGTqYjLtPH5nxbJYm4FQxn9ReR18xf3vi5oTjtQHmG3hwmtXpMQ3uE11rhiqTmv4tBv8PYGRxDKUh8sXdhj8FP",
  "key9": "4FZwCfErxKVn5VaDM745smzQUwmtQs1WY6XvD1YwQkG6CBjdCvaALdcM7HVx4r4YYrk9YMmopF8XTv4mdk9XCHtt",
  "key10": "2ZDL8fzLYDSGRJBJwC61pQpT7APg8ddYMjorWvhgv5rgFZWURa9rCfr3adDbN7hAMjVD313VZgX1fL4RRggmEpRF",
  "key11": "2FjRQFYTnEyasTSmGJ7ZBxLyYvh641eN4dpCjVbNWByqZQ8jTcV5XfZR8hKAJvTeLVBzhkwiTtvWrP8Fg4D11qAi",
  "key12": "49mnyCGJAACoUaWYKYPnSpC1Y5KYibkgnx3LWws5CESMy8MdarnuYjrCzHpPDiH936wqkM3W5pT3oCxxbxQRkNMq",
  "key13": "4SbYmH7ynJgYLb9R967PHFawhWo72bpJfLXfcmqfzao5sgPT2HcjKuYzxkYt3GYo4zESBDLPUs3SyBi5vQhKUvgm",
  "key14": "4oD563WZ1yzKJYKD38uPhaneEq6672LmPJRv5wvdA8jQtQ4Kb5F84zkyW1wRgLpwiYpYxKL5VGRfN2BHVfmwCrLA",
  "key15": "27zGzANS5BzVK1Z2UbKeu7oi8pcMrxye7bWkyb7X7yUwBCvhrh6p4iL3BQSFSwJjdL4zvsRwQ8hJzEAcv6bGycKy",
  "key16": "2GHoKsg9F7ggwkZc8mU9aoHhLRCkCShygCkXXqBx9WGQPH3CovfWfeKhjsA93XZokPeRNGGvrokujZaB1i9c6Rhg",
  "key17": "26P8y8rpbT5nRUWD7DhkRg3fz7sn8D8WWHBSZ1STnhVBN5wLQfjoqvyJsD35iUHyjJBpH2wDBsiTXuL1NYbGNSct",
  "key18": "oaGe4zm1DozvMKpyi711hR4xNHJ5ULEdTN76zVBzF2M6jFDPgRmXnZ9fFR6eHSX5JDoc76wwHqj6okVGLdizUz4",
  "key19": "658NLBqDcSBKx93Lq3ijGAK4QjjwjiSf1jdGcnPmDiBGVZQGptU6Y3fFNuK9uadTi7NSpDL43ktcQCFUxnQkLCGr",
  "key20": "3LWSvb25YNAJyBm6EpnVvts63RRUUuoaX2oNT847HVLZ57SnxDTQowxLB3EswQE4oA1KKviaGPoZkR97Fq5wdkdi",
  "key21": "4FunyStcSC2ByUuDPJzeAbgeFuqYDYjGGhcnunYe1C9RYmCfSFGnNjpxQkbYmYpbViAhfCTkZA8C27oU4Gce1dmv",
  "key22": "4hB3nG58HaxBrAYKR8tngxWbwohFyuGkdHERFdjrxty9AbfBeveh6XnZqrdGzAyqLBEjWoYEjQeMU6rCZ4gEoXLE",
  "key23": "3AMqyYFJXrXLdQ1HTCBv1Uu5Cvmgx4djdTWKiHFPYwSqf8bsbMsHhfK2mT2kpp44r8uVAuwStAzfFnLBARy4wYdy",
  "key24": "4TfuNRPDkSsP94sJF9ByLyqxjVaj78KuPbjggGsUW9NKfZ9X6AEPBhwaHqorv5ojT3QcuY37x9P97R3L6mTn8p2M",
  "key25": "56dXw12GB2J6jSaXBVREuyTMd16PtV9wvcYLX7DEcGGirScjHdrH1f3Ze3F3f1KrDPgTicvZo6eRWL74gB3zUXNu",
  "key26": "3CCkeNv6GXxgdUptbLWRosSX8E813gTadHvAcg3fUSwHwXKDKM3Y1ZkBfoxXcjkehR3VuEeM9rMrpauvrF6ZugKP",
  "key27": "6511mdNWdmyix2Nc1dzvVSWazWXq9ZFjoAEcYuEmmdrQvKYZ72cAnn9iBtEdE9WKATNefjEPKKYxn37si6dXKzKF",
  "key28": "59fnqbAF11wvLs4Bu426M3Ynwmx6tUwP1tXgEugAvFV3qfEsijGUsVQWrD8sdyDRyyb93YjDwRwSWRrFB3iYgXUq",
  "key29": "2kaFkuNoWGwheGmksNi4uTBshtmLXeNZXJbVhsTogqvnk77L2gr66hdk8ahovGp3NoUdqreHSHDWDYSrLD44jWFN",
  "key30": "B7TtTXuCxbwqJHA18nHnKamtnoqjbZAENQk6mBTKDAZ1f16sRPH8DR3kqadQnH46WMgHZSs3rRbJwxhjZ2U1k1Q",
  "key31": "5Xr1VqKq4DCd3Y8bfN5CsY6xSZH9PTXGcbbqp2mzmXdv38Pmzxt9WPFohpTnumGBPw4f8r7PBBZZ3w2GaazFC2xN"
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
