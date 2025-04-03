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
    "CMS6t2AEv1NXzYTPMNXm4nncFKpbvhk2cyA1z1HCvdtREDLHgkdFzhX9stY7wVot4v4neii8xvk3WdJaNsLbrfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4xABNPMKmARHzHYLuEnzoe8PLPLCjAsPRiHJrCiJ7k2S6Eks4nxPuMQTHRzwXpD1zXF5V7mdDKdJ9gqp7oXYK1",
  "key1": "34WzyTaaDaxD8VcXBngPmyHEfTQPSAETKVzQPZoKbwNryxcEQbSRsp3E8tozyjebVYvKFC1Tszb9ABj7LcvXfimk",
  "key2": "pQ5DG9TUgoJLDAiBL2K5n6v1bVQ7fn3UF5se4Qz5b6fLU7H3jbce33V3kbp5ELbdXjHZJQu3DUUmThvJKkdLKHm",
  "key3": "67ZLcQvF9ffWW35PSH9zzdmvbSpki56gAZyPoiehQV4EkVmwgh1whWtnjpRVhtwUF4X9X9rUNNF6mA34qPS9YrLv",
  "key4": "b6Nar3NenDo1JomzYTaFxFY4UUg9DDrjmBdtrdoQDRkEu82srTr5iaqVRAzbGMAtqxa78HayqMNesTuyEHTB2vt",
  "key5": "2MYLUgbNRqDnVRknCcaRmpDMFJDas51qv5A16yPR6EMgTqTPyCeskQdZkACHw5eRP9uEULPhdQVnmQ2F6UtshHt",
  "key6": "2T5Ukq3yvESNUrBQYfTKFN6aqH1VfpvaCcCYUeKoH5PSNtGG1LZbjWQtByRvkUiWQfNAnB2qquj8866vyEkPb7KF",
  "key7": "3vkD3mamQUCDLj9iCiXn4QcryCXcGnK18xSZ5PqhumfcC117zUz6UTQiw2PifEeg2nfdKJY4XYCh2YPph1Spszcx",
  "key8": "2yXBBbm2u7W6HcStAQfx3Uxm6aKCLYoQQD73osnj6LvuuHamy22FWBWBAz1suV1DqGxj8yNKiBUzeEXPuvq3Josa",
  "key9": "3RU3aAFQdEQHjTEQg1Rh8pdo5ocHHPXfbxhCmNo1QxoBa753tEeo9knVruqBb63vUMCuB7C6CFjVXwKd6KzbqC2F",
  "key10": "3UdjRW6hvco8L5M9pN2uxxK28L8ooQQzVDAXjVDujEUjPGi9Jqzvim4CWFM65dQMrAypoBfbcNsWcKY19oRsZD2T",
  "key11": "ZyhSvjReEJ6QVGQKQnr3AMyC6UecoCRRpbgjy32Wb52zbz1c3Sca2UsoNQCXy3eDrwLDe8Y8dvsF4SqfL6uv4wZ",
  "key12": "2umvnXyMKj3mhepWesmnMSe5jqLdH415239XRAApDUjZgBYA6eqTijeekrPT3sL3jJnfyaFVm8rde5yio8LsDAnq",
  "key13": "2qyFAZB3D8bBv11NDmUpaGbeaBY7CGkoXy5fCMnt5Gob7RmyogMoFyUns2Fm88y8Dvk7io1t9ZVBn7yjEZy5v1JD",
  "key14": "GYH45nQNHyRyDbM7SXWZKfzXsi84FxTvsfYekGfbYzEWek76XN6ZWcMbGBjZo8cPTrjniDvsi72g3z7yBzdfdp5",
  "key15": "2dw4QT1rqkptDi76DfYvUbWSyZcSqNgbMzbj55kVqqoKtcUU8hRQdGPkNdEG5AY7tFdQZk2v1XoQv6i1XMGsTk5r",
  "key16": "UKzgQbrwrV4pvFrZ9CbYVDR7o5T6idfiZYuMXc81TtHVgX8iZbeiv6XPKvqwrGkzSJktmZxkMHi7bytZHWR3PJo",
  "key17": "4PdtUeXGW8xes3rfqnfehGq9U2hJWMtswDKQW2Udx6Lf6HQ271PM5Dv8i9sQmjxE4r1VAYfoy8hR9ygR4WPrDSMd",
  "key18": "4TeZeaX5X4h3J9Lsf3rrRmYJik6fCtbf2QY1gZtjVaqZQbLAJPb98vuMxXKEKAC9NkqPZauBBdK8vLhX3RxjKrS",
  "key19": "29jrP9Lmh7vtSAUDbzYR2fkrtGXReL9BrM4G4fteoeETGtqKdc4VMtFUYWEhwfPxb82DXVYiow6WeZqYCJ3AYYuF",
  "key20": "9sLcbWbLQAnAA94URwfDU49wAfxpsTBmoK2wq65ixZkhTzdwkE2RA8AzV8pgtSFA9xbcLGhZ5i3EWS99ZkpjGDg",
  "key21": "2YTMNAdCBUm2VE8kQNxMTGeppgUVnZkWLuFGGZKzPWiCsQNAnv5xN5MfAZSXLv6mXTGwQz6nvrVrFioQR7fsse4f",
  "key22": "3VsN9gmnVyBFqXaTLcqH4gVc3ihJp26WfwBnfZovuEECGNa5cXNAf2W1xBqPgGrXwdVL6tjp5BKFfWB7duhUCCu3",
  "key23": "3GuQxYAgHM2o3oyGwknj58upJym5WsJTLWfh6j92wRv6KrvuLRcVcWwGv8FDufR2oDs8qaQed7MMqGAnMA169nBX",
  "key24": "3eUS3yKqMgNLaCXVsRpfCpRpbGDjk7zPm4wfVDkiaTr1WxGSK9aFx1iFdRsLyvSaQv2hMk3EU47dRrr9ygFVUKdJ",
  "key25": "bHk2uRHYpYpY9rxe6vjUL25pZiRxq2LgUYrLRVqqfzuLtDr8dRuZtFrXKgyW8AbxCtf9MCovX58eaPJyV8XiZaq",
  "key26": "5p19tr9GAec37HCrdedKHpVvwou6454Fvi4GVHpPkYEF5MVxjd4kJBEWpBKXCrzkGVMViN5aUzJJitG5LhGKxYe4",
  "key27": "4Q5PWDUP6xWE7S8Jxz9J8d3a3DBbBEFZM3gEXppnhPg4UJ24SycuZiPpoRaPQ3ByGEYVjR6u7NuULCzkKgRBRBj3",
  "key28": "5zuoNqFPUSuxcwp9q8LHjTYd3TfN1tXWszktQWQvTf6MRqUrepzDnwEGXuNB8Uijj6ygRgnj7YyJ8UioUr2x6S7i",
  "key29": "Ur7vTFUAPW6YKgzCRjLZkExZ7jWYnJbdfpPH4fxbUphtDfF1yXA8ZzKKuxETXcSbBdo58pvxfh6Co7jc4i5ThaZ",
  "key30": "pbV8CMNGGQUmQTAWgzayUws4WbhcCemaCkgm1r3hxx5XyX3EndjXj9ATTZriNpwnbZDYTupDvZiCyN1UxiYPZBk",
  "key31": "5wWmCHdPmu2wM8bUrj2YqzUTRAz2xEvD5fVzNiVjffqAje6SHk3MwRqPQYrQF6aghrb6KfPxNuGJKDtTE9SMT6Fx",
  "key32": "5LrhU4uFmt1ZaDyQ1dnuE1NMkZ7zfn8MBaGzkdMD97dG6YfH2HLHugZWfgsPPQeLXdueMWSMifhnot6sZ4Ahg4id",
  "key33": "3CFhYXiHbgisXJ8zbyJZQMeDGmkH4aqGTyXNK9i6m7WAVa79yDa1wNzMggJxg5LvSLAwPWjv5G2pRfUWrBZpCMRa"
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
