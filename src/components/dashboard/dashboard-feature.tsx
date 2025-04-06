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
    "2jiKAuEh7zNRdpcyenabNb9TSDSoxNsr57zLBQUWpn7ZuRzFQgkC6xwv5Uw7onLnFzHiHhfNnSDN8THALNZK5Loc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33EvU5tyfvFc2kBBeDNefY68ojYbhernQeYzoFtcQqhSnxD9s1Lm3bQ4bCLo1YemnvDuwjLwFVJo7aFEzhSafHFC",
  "key1": "3BYmwFmGQTjodcebU9mvB9b1nBz9JpAbViL8uLczhtm7S5of5ov4Gzsu9A63RdKG3R9LJ3U1pDrKfeN42zwv2GSp",
  "key2": "5NhLB1KnZi3n5SQ9DzXMtZeL33m44XMBgFwLFXxwQVk7pJ7D7p1QLqvdu8DQqsUadMRWXGbCdjgTcUapUfhq5N7u",
  "key3": "42LkVCME58cP1DRcBCjNioPokJ9LHqLMQYwkFuLWXVZ15E51yK8PeMtbqzMtJDJEAiUFgfWnQsmYmoxGnH1AMjZp",
  "key4": "4u9DFT2Kr7rjYjrHB6wKKrTrGfS5ssDKLFf7oZXKoB6icz4cuDuUKCV6QBzKyHa5zP6fqMh7pZxQmmbxvdXLVYgQ",
  "key5": "3s4gwPn9rjJoQqaTQwuKDejnsZGiK4PM5wddn98sXL6Tcpk56RkoWZeZb97vSZDgBdB49MLXDiy3MPmuKRQHKeBT",
  "key6": "49TQDbDZqZAqKx1JzGfjBpqFf8hdVCTrYnPTfcvCFfeHK9DB2zugUnCGqBBhkTyQApvFdRDLieb24JLSBTQbNugV",
  "key7": "2Q7uzVTYUz2vxDUfU1h3STF99ynGzzJtqC6j7jKhZRrseDEUpPzR9C3N6M7zZkXmp75aiTtTbGhJX9q3thca5VQH",
  "key8": "38c2yokGMsxNw61Tf4hsdtsFXHDC56A9TaQW7CEXmwgCw3NpNLgoZgNmu2NV8SLKgpCL3R2MxTEWb57qFm6fyQyM",
  "key9": "2iQ5twqmcPu48YmXGzbke1kqAFKkJQVG8DEaJgFNVc5fKEa7xJUgNjs5wbR59rchGtbFzzohDFV8RCuuvuVGeFgr",
  "key10": "2oXguF18a5H2CRaM7zCRoQwKebQpZvq1YEnXBR5R1G6LBJYdrTa1AC3KD5RSXaJcEm4czg8kJ8VyidnZDtFoW9ue",
  "key11": "SmpQbz9X6APKbtUmJGzKRafhMd22CZyFdiYEUMPv9agPyNYVgSsKtxwwWx3iU8EQcY2AE626xjMKrvKKxSFmFYQ",
  "key12": "E7ETSMpMtBa8Rn5jVpQWBbzCaV1AQ318UgZdCi2vBE14DXz9QbkkZdWKVBK7WUuqmCWCVfmG9ApxkaYFZzfnsgG",
  "key13": "3y6rQQVE1rnfHTizuHieaV6zy1i6gukbKoUdDBEVMF1voBMqkgfSHU2CaqJLvmnAxSodE9cFVbDtf2rQdhpUv6Tv",
  "key14": "3S82Ka8YrUj6UiV7m9WZphsWFmLwwavPTYmx83Pc9MmTXd9JiDjJDsz85nhKZPyjHWSHvNzwtYsKDP29DGLuDK8R",
  "key15": "Ho7gdPWcLXiwMaA5H5YhRZ35kxPP4scXmfDwxXhV1JXH3rAWf4Cps4pKyJ97pXrZiPTGRKhSD6Pve49gVi56XdU",
  "key16": "5UupQy2qGycyeqDMJcnrs4fcSaviw6BjdsgCdpK5YaJw3cX8dLV3HYNX21B4uVXbjUSL81UjyccGGmC4LXyh9HHB",
  "key17": "5HEZ9LsGU9iH4vgx2qPrLyfgfLvG5JxXCMNgQvbkD7siMbw1sq455atoVnGxgQi4Np2muyjtXjqg9gyGo71AZyfb",
  "key18": "5bdL5xbPkxV6UhSLSRMsjEhUBHYN38uXss7tWYcYXRZnTEkbzNGEpbKyGiqPWytVfciKaVtZbm5iaSmFnGJgMinN",
  "key19": "5roo7JhbBz7haMZw1sKaDL7cUnhWkDbunUroCp3PVNKTFaAJADXNB8yx1z3cwug31wf6jrPSjSBJXVhetX5reTE5",
  "key20": "5bDDSoPUXj7z66PnhufRonBckD6PLChwBybFuEnpmr3JhBu7YrcQhrHDQZ3riYbJNnEMYUiJXYUzxxA15Qz2LjCL",
  "key21": "5XRRCAFUuqYkCvCCGNexsWUx3zNL4nDdptPvtJex384q2WfhYGFHvBot2vZ1u5DvYNKcurnNEHpKQK47VRL5kkLs",
  "key22": "4S1hsKm7xxcsjFgVnK5NGookuF8DHr6EheBeZyqELCn6TcN9jpjsP8GkC99kHrAiirDD2UwCqL6Zwu8peXqwvqRu",
  "key23": "5syURx6fpc7w3PDBKY7TiGPY7fs6rJ9EUPbS2VpzJdcJ5eKSdbZUbT3mKM5L5hKuUwEf4oBxUB7ygynkemZuiiwu",
  "key24": "4GBMURG4S1kJERQBD3MxpkZAZXiyeXcb1cQFwE2qhU9BDdwhrsU4E1RMADD3CuVyh6u2sUdnbcEhmrfwUdyUBXxD",
  "key25": "5yr4cNgjHP4gYC1GiBUcxYFLCF4uoShgG731PJm1cvF7t8FBcGZumVYxH2dFrBk46FPrECeTwjWbYCmFbNEApf97",
  "key26": "5B2JjzEoL1Lf44etsjHG56jRkuH4LA9BJS4m9AX1nuKKzWrj9feidnNU5RYJrU2KDUMMWEF3Q3g2yBUZ2yCXnNYg",
  "key27": "3aF1HabrMUDN9Tpqbs7xotPNazS8pwJdAjcqP9qF8ajKvtnsYdiSpNWB7DAvEVSKPRDv1BzEzHK3pieh6KLbThSp",
  "key28": "4yNYMh7bRRMCdNWqb5D3uVs9hMcJrwF6QZQ3hve8LuVd95w5ur3uQKhPkRWWgcZ2LLVETc1sKpUbPmSEgQ2RZUmT",
  "key29": "MgNbXuY1nQds9aqkNPeMoHUGULfXtoKUbsqaMWAwNCBQFGu1oB63qhVaC1XJNeY3TejJXeZ1SxWmk7pkdysy4VQ",
  "key30": "3M4VmrURPBmcgLXfNjdkWZa9WZaQtS8EcBWsogjPiE9peKKAzeBcHGPRMNT4Q9NgWwZfjpshpLgxj5bUZ8JXLrAa",
  "key31": "3VEoM33i6AeG5WqBPiuhEzMi8r8FpJmfmjHLbQdfXNpviisWyJZa8ckYbt2ccKR3QGsMBeLdn2oAgRNoQNoMaJCh",
  "key32": "4epSnA8J8moKcjmGRWciyk3PYsodgmHRX6RPwphSJGbmnYcPcQsjBjnWJW7H3U4eAo4iHSzmupwTUNDdXignnrU9",
  "key33": "4ENiXwjKdcCNCDwVjPiE9n5btdxYgmseAidDXUkizdX9bqYYbMpwE4ybccbYyu3VkeDvJjboovf4JRAfc4N3hm9v",
  "key34": "4WUEnrRVJdWKSP9fgNt854gJcqWQTzaxbTwCCSzkQzGZFHioKTYHZHfG2dMVprMBnCVzoxZLMtELsqq4659HAXbu",
  "key35": "4mr9SYsun1e58EybsXp7TrjsmuSmzDcnQsoSYKTJiL115AkYoY5S6y7Vcc5iGfAjQ1wcHv5f29FsqEMxPLxyHvtx",
  "key36": "5v1BxQgqER8EAsgtsKPucTzLTn8qMQW45DMA8cgfC11rfHSGP3RVzC5YXnr1u46uppebUfd3vHHaBm1XvsFQMtft",
  "key37": "2AgbuY3jW2cTLJEwEY9bM4z1sQodv25WyReSPdjG1v3pKRmTPtTiCsGcckaMuz1mxwgiVsDvsaJJpcHnns47oPkE",
  "key38": "5bx6681TsRDHqcTPDbcK54gBPJjk55pjUqe4m7YzDEEbjdUFSGZTS5hW5jzmZ9rCvA5jL9ZR9yBgkrocXhbVJkw6",
  "key39": "2sPvbHx8efsbsD4YwKwqChxxDULU4QQvxBLN2zX9vBKMTRMJfVm2egYETEYvNdVqwH1nNubQDnSCVyfvBdhQofzK",
  "key40": "2691xTTHB3uNZWeFM6XxL9jfjfm1PcngBazVUZ3GazSMj7HQ8kaxZ68em4vXZA9V3umXyqrdib5pK5aFQjBEAKFC"
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
