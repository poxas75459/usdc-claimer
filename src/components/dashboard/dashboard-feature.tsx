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
    "4ZwZFMicANn3uc3e52FBCghj9VFxWP2RHer8FEczS5ycTvoYpamrWt5cGRRLzVnxx7PwtrTM1MrBk82hjiAFKpE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2odh5o6FgAG7H2Yw4vBFWvKsAHAR1pcfRzb22nhygS1fwX5X26Ft2bAJh43UfH9pQCoBHy1DygCNtDD9Y75MEZNX",
  "key1": "67NkpKbkNp36psATPRhNA1MpCQbNFUPsk7S6jUnj93oDBNK7ip6d1EPyoBtBwm9tyxmjYfbq4y8sj6jDjdSNKUg9",
  "key2": "2uknacKUFwH2sJXp1fcCaWWeqcWd1CtB4yBP9QT7YRDZeBUrzHoNNywG876KpgnihBds9CHbDv3ZmgWpZk3vx1Pr",
  "key3": "2vdCTEzshcPUfmpxC4nCfme5As8V4HP9KAT7oDtrfL6gYtMET5jqP8rwEaPJhtw441PfZV2BC2spAX17ANQ5QoXC",
  "key4": "4m4H9gXtZRv5pBDtrVoET74eb2q3xRdcnGs4nA9tWsqLVLKzGWotXbLAmpKvCeWM8mmcJGXeVasbSPD4ikVsXbbF",
  "key5": "NqEiu4KUE1vMcKnEcPa4paatiVW9sZTGqVX2DCKv9TUyMr7ibXTTDPnWRa2MXdLf5n8nenFNyF9QxbmXWeqUFB2",
  "key6": "4k1KneyEbVsWawAkMu4fQnEsgLwgM2ovh7Y5G8gqtkw9SJhKVtCJgksJ9uzykrBVQJPPJYSd4F6P4ZjiJSEAgjwv",
  "key7": "h4TCdZyNknUwg7D23NzNXMqPdVnWqtPSN5xYJy8JeyBER9ddmiZmkbTYEuanspYCgHvehUkSLPNnKPxoue1t53f",
  "key8": "Cjk3hNM6AA8cujpt7pggUoezYUgkv3JySTWyw3kmgqz3d71KDJKKhcZZ8YhPLhFfYjaEF4kFSBEg2MnqSv9PP2s",
  "key9": "2xrMM9bQuwr5b3aQUFyXm3jMPYEWX1dYMsoRBSJHeqQrFkrzRADNWwZw9xkjVKz5rDs8d6gFiuaKagRdz8YrzZKz",
  "key10": "37EruGuoNomikC5h9py3MTziQJcff6AkAhnw144FLtan5NCjzQV1ZkJHHq1CWqJnaeF4jrbrSw2gXE6TV1999qoH",
  "key11": "1KC2pEYoQWEFmLpYg1wZRkk9BLxv6XUkfWjHG561ANgschiHmJuLHiqHfQJ2FoQnLXekMM7K2mKmX8GShnUKTgq",
  "key12": "2RZsCC79BQcM9qm98A5tLBKpy2KeQzosMcyywuqDZbEfTR8auKL8XQD5TcsJaZjvznS1rF9GimGhUXAfzcnbUfD9",
  "key13": "24mdekwDJGELqBFbyXrwdZv2RHYQ1L9X3rEesRzoZXiiACNyNYcvYDeGQo4RCFus69vn2MNUXejEHZqSDuWNZ7vr",
  "key14": "646W2iTvZ6abaCphrf55P6DbfL2UQkttgZtrSbXX5BBoxc9Ms92DxvmvPaGqPetkWPpdN2vtfvprzAoBJETKC2iL",
  "key15": "AC3kf4Sb8cDgpCWVYuqMHdRXdZ2qabJy9KH9pV9Gnn21x9d7B1zXQTb9cSic1MmFsXd71k9A7BZtmoY9rQjMcnb",
  "key16": "SFUwpFtfPLfjSLrPgXUgmhrnE99S5D9eXUPdDQSVYE7p85tTqr2wysFTNzTkfRXB1xt5mAnDvtWvFbV9oXL3aro",
  "key17": "58DK7d3GKriFJKNqwsmn9kDQ8EzFgsZMd4kdC9GyM8jhH1cET7NB5kmkHG6nKWuN2L56Vg7RxGvkNrhfMM94hYz9",
  "key18": "49eWvDumU3RxfHavHCjmojaG6x1qFvxi32CFLJEtV7TrWb3rQjJXF4sNBnrnDyCEG9UZjieRPLes8D97dHNNrNfh",
  "key19": "5RHrtoqk2AcpGw2o14Y87UXxnLiTb3Ed4DU1X7wEKWSZ6q7y4vHswbQsuGaPcWGGzUnsZjziGabiDWz6qk6b7gcM",
  "key20": "2Mzfg46dkjsvK21SPJfmrzGgWApbTCcLeVmg9bWkk6kYPwTTJto3zKXNs9cVx1iN394d5PFwLk9whJfeG9nHMPak",
  "key21": "5c2MYvTqA8DrZrke3XQVSqKZn7Apgrn2q8pob5VjPvLKQjAqkAoPA1ZdH6MhDDB2aMB5vEp4u7F8PWE8K9AGB4jK",
  "key22": "2TPF8tCWWznvLYhdCgHm6t9s1UeZ7btnVfNyHHSw2td5pKDmtR3a3Mg1ZdhB5EZWCj5qoYZYM7zystQtmoArD19h",
  "key23": "4kKfvzbNCFRjYVxMBSZjesBWAJMgJx5GFFDrLi9SrLTkEfvtN3Pqg7AsjevLB5D9QrNsAabWUVRGt6zEiGDWVRc4",
  "key24": "hvVezQo3i1gMsPd9wHEs1ZXrk8AgEbk4ncLHznSAq2NumguwgFfDgXw4pAH1YoHXiMT3oCu4tgo7Q959kgbNejd",
  "key25": "3HMpKnFuchUusz3AXwHqeUZFNdteQxmxJXuj9M5EfR6aXh5R6Peirqdax79yisnLahF2fcfRphpYgXmsaZvp9n7R",
  "key26": "he6LfsVT93GAHhsguPr14HGQorobn7iXL4QQ9gvQXce8vqRBJCAVynva16FhqtaN3hMyVToRiBkhkU6cGaMr34N",
  "key27": "5SrR5ijnz2xa5dtZMoViDpSaWMQvxPE7VjpRyGY9ZFe4nuMetkAY4561GzKvBSBSN9gDsioEh1hRQbHsqFaJwzTz",
  "key28": "4kqKVnJFSaDDUcRzYWzL8dq1nMPRZgZ96owAK7i5Agj1fGJUnwkK5YRAfhdYi5cMkFqR5fvUduQWYRBMY9qPmzGQ",
  "key29": "2YNMBP1VNe8iRora81JvsYqhJ5eAvBQWA3258XHLf1CrSTAT7z6uqjMqVy1sQpd16Rt3dFJV2ja5ty8XjiynVqjg",
  "key30": "2jLw1s9z2RgptPbzQp5wnrHXk7Yu7q1rjqzS5ggH3BSrdnW4ckvLT9Y7omJzRJQooWhivkxqegxStAnsh22G5Emn",
  "key31": "5R9EMFSTXEV2HJfEW9oqFmdxVjwxmbfzV7WbhCJMuNNwS6AYfFXMq3KnedMDvYg3mbYcFBiGs1oLNQodj2YnypFj",
  "key32": "2njbsCvBhvgNTySHhH1w8SjBfpqtfYi4ufnu4xDGrAiJNuCXxrM1ottgMQ3vwHN9953MSzVfLPqWWkBnZiSVUPC9",
  "key33": "3m3LmLeN3ZdpvJhW4kBQGKTKyTW8gMbjeDTG8dK1nGeLkQAv9xJDvZEnNdpDWh7vSiXuyrb65uHjroKYSJgYDuUm",
  "key34": "Q5naidfECKc38STrmZnRvTYZMccAvKqp5fFCnVPL3M6ttRxHpoEJJnpgshy4YFt76iWKVHRTjvi8ks93octMmkN",
  "key35": "3uHS1gBEEJgpNWfE4NwPg8XX3aQfcCSUK3BowvSKzux2QbNECThsir27yGSJ3PA8NWthcb4kKupKya18dD6AH76T",
  "key36": "2a8mW5Y2Y14ynNAXcTdULUxqQwPCqyguRUwUYLMnjTNQvVMS3gqzNdG5PZoWKZMpEfmXfNzVHtMBPD5zJq4Hnd4o",
  "key37": "qdVJe6Grct9deifRZt9hZadSCy9nuocRaNYq7fSeRXJ2dB2zkFk5ou3HW45iU6NiFd5HfTkvyYnjtMwPC7Ckzgf",
  "key38": "5xZBjZQxBvYpMomKeT3QBjQQb75cEDij2S2aebHn4Qw3CWxmxbfRhHUXKEBAuBPatSLnQ5pjrRxiSyVysdkVz3RA",
  "key39": "4V6qQPTjkwjtyPveTCVAh3GY1j345Pxcftez8AgwsS8fSZQJhT7A89gMDTu5D7LeGAgihinDCqKFw4Z1ZdkVZMPR",
  "key40": "TvmQza299nE6EAqBtfXStoRiFaoTx3dQrJurPzKrME44V3qUgBDuwhBoEqLT5RYkkQ4SSZYf8ySJcxdJg3yHvzm",
  "key41": "62r12TSXoJkxgwDCTYx697eCK3z3RFXwGMycR6SwNBJis7HNvfCuYb5rhVyxvZGeAJQJkfo2otNA6mXnMJknSxr8",
  "key42": "53o2WrCuV66Pw5TCdAWBfT7QBiSP1hpWgciLBQD3mHx1BTDegWeEZqLrjR6G9GxtwLqWZL4eCYP5pUdxJv2H1WS1",
  "key43": "5wPhh3KWzV1t3KenUpAsqKD3WZxdGrvvWC9DLSxRNrfGBdWH8PECraLWLCWW4coAZgeSj9d9n5byEjYnPk2mkuVH",
  "key44": "4xDkqkQ7WRM4JHKRA9rC7uqxWaV1evkrPVRj8Zk6QHxTfF7f8xynuCerd7fxY2bC5hSswgLA3Ph9schEQpFpZGfV",
  "key45": "5c6SDxumuG7wZ9WQmz3c8wwxAqbJ4Q9a7JGuM8fNwwob2f3D8t2F3n1cH1BNtMvpJiB5jBSabNUNrJwiFUrnVaK9",
  "key46": "5ueZWsWrtV2SERtfCXLbc7K9MFJmjqhZ9Z8vVz2bqJC3F3kAZME5UWojr1LdGhfXZcjCsYz8ZuXQJfEVMjp8Yeu2",
  "key47": "3RU5uccUYx9i41yAT1bSV2zypkgEiUPVBSMzqaYDmpeNBGe87TjKmXkqRy4xByrLyRTTAR8z19pyPVMzD9RJakDD"
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
