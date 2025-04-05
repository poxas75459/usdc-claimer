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
    "hE8gN5uqmwSBL8HfveBx7xuJM7JCyAoEvXgbywmTcDjHapjK1j4AJF5phpKHETkMQE2mYnpvuZwgPWxqYQivEwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BwygNZNo4K7oeXXmwhTp6WttjMUwJ6dK9kiBW86LUgfaxvWUgwKKPxa4Wy4zhokdTuvZs1tgm4yrPqXfU2W4ht8",
  "key1": "GvCEjpcSvScdLN94nyKqyvbQMFjNt8LREw3TaesEwzJApGbsNtFwVBtZb3f7AWw4DkfbpY2hGQFDoFNA9XGKPSn",
  "key2": "2mP6AycmqUp8b58xW2hbJt6iq8FZKphB6nfPnJqBjGnjQPWeB9aTPDnNSEC6TuQes1WwTMjwkEzwPpf4JhL5siP2",
  "key3": "5Cd5d8Q4gEpG2PUQ7nZYXiTHL1U1FhVsHR4JXUY4TwirbFEGwc8ZzQB58BWUjGDZMkd1GqdifxAVsuqvJQ51XrAW",
  "key4": "3CttLoBY8xuJsz2QAtxXT4Nix5yahMsaZSJTpgCiCNxPcy6wUF6zbczwbzTD5y11Y3tFYajzosPZjGRofBk6RMtU",
  "key5": "8DtXfU6cUZEfBwLqyAxT17UxwdpwKfiVKShUPC5Bex927ZqJUXd5Yzv4FZYMkiQmG7MjbsbF7ocVdGmJdhgGXFo",
  "key6": "2ZknaakeWEweBavMekeT1Gm5yW5FqZPKYYJMxH7PgBgbZsAgiZjwWDgeZXRnyc8ZAWSuoJfJ4MKwPcdnMaQmbcTt",
  "key7": "37wHQR1pzrvBRbbRTP7PfFTaZmgSAk2idSKotTLy57wfDZ48KKUh1XaUoHYZXTYgWL4XeSkbvxSbqB3Gg4DsqyPF",
  "key8": "3Zp9KFFo4ErqfNyEE2Rgu7TRQY72XjzGW6e8eSyHBLE1nnWdr9H3nLAzv6hnemo5qZPEx7wgWgUtbFrVRzX9M4jk",
  "key9": "vjRiVW7YCNzqPZZK5DZz1vBfU3nD4aJgXrvdzEp9AeEsgE7fLQhZgpCH4GNwBefySxKNgDPVT5xmTauLStBHGea",
  "key10": "56sdXp5dWK2mVmbQP3FdCEm9FRWKhWLPiKmPe5qRa6BjNdaj9yQQxR2ALeRfCXnKtGx3JdctaSgPKrV5K9Au9L3D",
  "key11": "5AGzjz6szxYBXp6bbVXmmobXKRSqy1gLG8uDrLrLmQn9DDvPv7NKDqw3sfQhutuHY9s8ehsb45zTW8cRquxAA8Z6",
  "key12": "4havSvGRSR4cL9SRFqcBg6wEEKnEnyTn47n5rFHnw1oEZTY63M1ioVmP2m8mdKU3Ds3Bq9jib13XYxJrm2WDmdVT",
  "key13": "5NEAzWozXLZgNG958n1KpLZh4psgQkw9iMnZU8TUASErMSLQHRtAZFYDNbfy4FqK5sCuVkcM2Fid2kNGEY77r6nB",
  "key14": "kfq38JFbYJUjxrUhY3iRc3LSpBHKpnUQ5GVjovHJnvYug1Dt9bAVb6qSADDwkGcKehx9BfSytDB3u5K3syKvCs7",
  "key15": "5NeaR2MRDfTQ546yanju5PxfikC6fSMyTP8bvbeDA3ag7tEBg6Nv1foQ5ZtKj15c1A3RqSDGdmYdQC14tsgJTf17",
  "key16": "4UAimKVS1PifNr72QGkw44zjdRHMhyAri7k2VQxuxEsxAjeG3n56C8UfGJxxXvFsk7pQyUsuXrSHKdpxSamLWfiv",
  "key17": "3VgeBRtgQjTKikK8grydJ1wqGRRMSG9ebZHs4kCNBt9i89SqWKTrL6yggXjAQVtCrovHzFjAdgpXyPEcYPc7FnGX",
  "key18": "4B8r73LCYRf7Wq6y2uvjKrRSstUVAgRRxxvoJqAhECPjFzUT8y5gpmHSa1dU9D7QoBR5ccXS7hZhbDJHdUMeJ2t2",
  "key19": "5QyZBzbCYhyhpdAF8ScK5ErTGPQ4FgXb9bRgmH6fUAfGQYpAwp2h26SBxfi4FBgZBJmjoBqmSV2ybJAgA8H3kDsq",
  "key20": "3mjfkKCjfM3Jf1YSVFaEA65foaJXtEdU4tZktEpZFXWmqyJu4BtjbePxoS5uP5RNhhFHPt38J4xUtC9GikRZ8QMe",
  "key21": "2WvGa2sNoF7NmUrsBUNxQGt6gjV8VuXB4ZaRZKP7AeV8pQVnuvPZSjC8xkc2HjZxsqiHybppjJPHK1MepNtWsNxU",
  "key22": "5CJb7D17Ddcg9AqniHJeykaNCzTnzZfUfDs2CwjBTJeR2936XQsmo4MdFTffbDRJvBb6Mo7LXHGuG1fV1tLnyxym",
  "key23": "2SCzvhWwK7vzom5HKqJNnqggPJz9PYdHKqpbKEufPmv3bRViCgzZT8sxUGRPH5v1rbFXuoDjjeBhWLytRMdj3523",
  "key24": "2ASmWKaLCF3Po8a3o7GQjZP1SBdfRxqhBUtiZP6JDEC5wwSWYtBiHzP4WDDQB8ie3iB6mz82TwxoRrh5tuzuiB8E",
  "key25": "4yD2q3EA4pdetUVMHX6ZUn2EDgQATYv4qvWuVWkhycUiJtJSpzQsLKCRLS8XhM9u4VwxUjK4aUDeN2KsLLbEqoT9",
  "key26": "bYq2hP3y3ZvBzyxXYbYAJ4Ms9nntmH6gGcA8PWXQ7a2N7NR7gxtNjU9VB2mLh1ViiYRYAdAWqEQsyBTcSLCBxvW",
  "key27": "5b4Ey4KBqff6Sc8611oi7jwsBnQGkKKQstUjgvntc27ZrkykbaAw7PhS72qTonCjXGHmP6C6JTq8Jg5mTH4Hp5za",
  "key28": "5TJ8zSBUauFQHJR5D1tHCszSXZ71ckkpWWxzvhAh2Yw7NM1gKqowgErJvwUVfkrB84Fq2wU7eqTKn6pCa7VqoF2q",
  "key29": "29DNTRoyyHYoh4NvZdTvPcq9N1A5LLpsqEgZNZ8NGdedwcxvS6hQLs8SFNYwXK6WVBHuQnyhu83iWevZwbXpKd7g",
  "key30": "2WghxMwtPd2z2DanXmqqRT5SRSXzefPqvKjvg575b5T9ZDJ7CYoq7NyFR1hSoq8BLofyFgNzxwpXah25vPm4x9r9",
  "key31": "33Su4aDpCKJwbpdmsMHV5WkrKpHyh98reGRPGRzU2p1yfgw9SAuYzxHwQNp5ULWCebhXz48tLhmE3ve8gtGqTCr9",
  "key32": "4CDuTs3MuA9CFTEkjoC6DcqaUGFRRB4wkSPo474CLsrNZ4Uqk1RejVwdoudPNQMfXbMMenZu1L86fLFfcDDnqAU2",
  "key33": "2XkEjJ7gdppxMQMoAjVi39yQLuAirxSGkx9X7Tc8vt551dw6VjiNuNqumACcSxUkpY5FZHvWExzFcEhuvm2NNFAT",
  "key34": "3BMePG3QknekF2539WmWj7Nhz6fuWoU9uiAvJ7zgt8i8nRKGpGQn2hf31EFugitXugwDkeqiWaCDTmLYPxXHKZRr",
  "key35": "24PpKVTfFrcThRVxQfBLZtD4si9yUDDP2yLeh34hrZZYhNXCwR7P7Xs26C58nsgVeJEQSbWgA5BAAkhdnfCyQHK8",
  "key36": "4YT4vpJsDAxjKjGhhYvbDporTVVcthF5GM76ZtsD5y2F9v5KTnqqsdapwz6auB25KWdiUhjWFH3kLuFm41961KW8",
  "key37": "3F2EWLrLsCfGqrepN7esZgL7HFgrbbQyTkJG88pVn99pVp69w6fDeaSSXt7WkcPP7PfF5Vh7zcpdKt49Qz7nGReU",
  "key38": "5zu66aY6F1wsDweCANiT6ST9cjABMkZPBhDLPNtPB2XcXqTLFUmvyDtByyZaCucYSvarrHK6ZuseLbjA2FHqdmCe",
  "key39": "34yqALz76uyDQMaDbQULQbcyB3sBXTNTZ4PztPnhXiWx5hbspDwb8XD7sYX7s5vFzn1BQME7MLbxYdpA3ANuwT3g",
  "key40": "5qJ8BFFj1HYHXSYU9sRMZK6rFV9MHdtkw948FZ8hmsmdSU9mMwKUfvXdGKs76EyhvSBSjoBp4ZdGSTrLjpDt7JZf",
  "key41": "5bppa75qsAYcCJA7baip2BFnFK17HHV5ECwA13pTCckjDrWvKuFsBk2V1TnfGF5dLzVNMnS8X5XTDTp6yQnfMB1p",
  "key42": "XkE87CXt2234nkKU8hyZ8VC6JL7AbiQsVrGoHSUZhhbWuNd64vpMm9jyJoBvG7SZA3riUgrgQQHFwwgMtbbBhJf",
  "key43": "5zZZKjPbndPKbRam1WwfTHnXxccssWKAK3EjAb64jpDVuWMrjXQXcZBZESKJDuJ8ZKPVHE1rTDGQ8fernTBTrNUv",
  "key44": "nLzAunJtJY4npc2bGZRJHnQBQmLYK6pxc5L62qN9KCWvdwWoo6Y1ajtdqzSPpDRD4GWz6fkBNBUNXMYuj1KbHZ6",
  "key45": "2GjMNtVbwb8SEb9JqhYBsbw2qjJkCSK4nKgn3xUVMoLyS9NiYVhvcqJjC9qdW67UxRYwGyvqu9FMu6RJYwCBMyuZ",
  "key46": "2Me6ypmpBnojbUnkYBthUBjpa5EArBdAc8zH9GSQGXyjsqqhEoecxFR9T61r6GZaKja6xbX99gprAE2bficD6hZ6"
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
