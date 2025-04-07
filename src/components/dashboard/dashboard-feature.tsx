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
    "2phWeAiWe3X1ijtGu4759wSbU6a7arm6ggX4Vk7KFMYYYd3CTgf36PNzycJayp3rv3D1cA5SfgZbWYV6hGCrXXyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgaeGg567n74vBY8tyJ4ohasbqECDkxpntRzK7SSBGsTx8wqocVciwGvEsw3ZAoz5wiFuVUePQWphpAGjT4Ps8o",
  "key1": "5BxYxJMv2DC62ko5dRZRxzgEUHvffpr8j9dhzRWjCLpHkbRCnDthQpDZHVMVqWwZyXT3fyY4sFwkHFCZBETAPR9z",
  "key2": "4K3C2qDh54X13aEbzxZeeANTg7AEHPy7ru4HuWpGtGsCBbSH3gCfNQ6aTgPy6Que3D1rcpEPsce5KmEUD2C4Ey7H",
  "key3": "4zyuCwW2ndo83RMNwnHfsUDtiBdmh5ZZJLo83oAkPAsYZAv94rUm29GudYRwLcE1KrTdswnJDAmhwKb9ziubD54n",
  "key4": "2ZnVzuh9gN3VnJd8Dyc5ZNzmdnS5G5cUzstCunneYZsenfQTLyTn79LNZUsXn4JZwuGWNgSRX9hjn8iMVDTMhoQ6",
  "key5": "57A9sBm3dXmd1tYgrXrmUwTwpGKX1FUR8VF1X4KZdeGvtnvA2uV46xVXdwh6EzG3nUkZs8DPRUeGfmrTiKGXnhPx",
  "key6": "3xkLCHRuxnE2FvfXAT5HnFpWLZeYEfQ5VD1Z6hMa8onTnWHJWTpt5NZgNM3TA1B8JmfHz4H5uFpKedBCUJgSE9bc",
  "key7": "4yqUaWib4JFC2hW4YX9UpBLiNT6CbBWMP8v3oMvpCqsamiXvSMDhunNFBjjXCxNECyhzGRXwvfSFoZZ9Ua9TE6XA",
  "key8": "355g9FDYHAuvGTzB8GWbhAK547aYKBptQdgQZQHhLNyghjDEafdTXmb8NZayPiia41EfZaZKvM5AUz6tZYVGYBji",
  "key9": "2o4oPJJN1BCmfmcvs84os6tjWGbFNSySLrwD7Cq57tP49W87jPhRy14tV3LVdZjXJC6ETe3h6KZv15Jdp11evsCf",
  "key10": "3SciVLw45nHGF5DnP6myDz4R6FBJ4F5U9kGT8rUn55ziL5fEeTo4U8U78k1mc1VaYeYhmxkY5YP2JMeySv5apFWZ",
  "key11": "hhLGeFSWDGmrTfCDHk4pFtdNDCTEfLejeACin4AeSe6rdK5JipvBvNWtWyguXbXTrwixH9LPLWJJUfXqe2Jpxiz",
  "key12": "41RQcKtmTwBovYAtHZG2TzEsX8WUM17CTqbv251inpWuNEcFPA3XtkwMNMPoPVMJJSRvZcQLZPKxqC1oDpN6KgTo",
  "key13": "61imvFRaBsgdmUrkB6dPBnDGpgvzBe5x89UkEC8PtSxb2pNVBguKnALNZjFjuHRnagfXKSwpWuC6mPzjsqnHLBZp",
  "key14": "5aa3YMVxuZKS3xvx2oAiPWeebaQ7w7M9n7jpArz3PiGD1UeNuppsx2ivpatFLp1EfcE9Umg19q7UvgE6hHi13aV5",
  "key15": "3vs9kW1MigveDzfR84s9mr9w3jEHPhnZdRWy8vChm8P95Ts2mZXjKWtAKWdHeY9iN1PzxY3pG7pwQ8FNN3gRT9sd",
  "key16": "rxxv9FKLF82TjL2hHZCeNRxjCbiWyBHV5KvgG5SJpHtsZ7T97xgUJH6tzzP9EKCukzGyFEra8FGySvTW1hRz1jq",
  "key17": "imv1AxqPVr9pFnMLXzguXjwWv3bPryyHHN2iyLt5ddfJrkw9STxwoVEPS7gTyaTXyGCbJNc8XS8dTBMtXjBgPdz",
  "key18": "4En9qxsPw1SC8i6DdxhS6auC2hYEgoZBqQ6GHmovNCAcqA64eZvGuHeEzjhrGQrBEe6Y1EQaUxVUxtFjjyJqYUEr",
  "key19": "3wgHu8DcM9sLt663MDxY3ZVA97Dk9Ek7V1WzQ7sipE3jBNixs9Jtg7hFmRHYRULGXr5ne5rPn4QG9Uj5yekzYtPE",
  "key20": "4U7ybbAUYFzMbFnKPwBuw3i4KkQB76JRxkCjd95QksZusr564AfupzvSYnbud5AGzgHkip2M7SgE4X3LoSPBpzHW",
  "key21": "2R5rWstcU8HLq3aDp6fcks9Z8fFj4YiCHtZUxCaEaBdW6LZ7h1m6VUnLZLju7xb5UhqgZtxbLVGXGm21cA92t6Rc",
  "key22": "G9ZFRtT9k3CZPakhudUi4t41ohMuSXV1A5e9W5Y2kTVcTW4Z4DQghLciiP3Gxs2uMdhh36baCSgQLLJFByKB1gm",
  "key23": "4mdz1KRv6sREFYuHwxy6dABiFzAtSy72nZm6vDrki2ySm66aBxHM8HBYQh2N7um75E4GLh2j3ohueouqJg4zMn8D",
  "key24": "2UrQ63iS3TLtqKgNUerEC1jSKXRDYqNsCMtKtsax3VAsuCcZFvJb7oJbF6Kbbi9fDwvrmFbrCZWscmm4adr72coy",
  "key25": "5t5jsD8P5Tz37bcib3LN76DeC5HLoSJ7m8HVtSM7ZPBWxxinzUpiwsLNZkK9AV2QH7i6Gk3HqmPDmtKdLa6WcbmZ",
  "key26": "2EDyqL53U63Prd1bWsc7YsLEo67qzGxzSzJNwHJuGsNKx4z6HSSRAwmatrAnxKeZzUw8msiWKdyMmcXJBoTAHbF7",
  "key27": "5hcWKwfEhNYSyme9XSZNbWuiiTuwTDgdMmZmo8qJYd7aTFQj1GUPGJEWRMBE11XrVRoWz67gZsTGjtYpGLZLtQwp",
  "key28": "51kittAGMATaoj7nq8Q3MrgXa8VE5exQ8xek6VYAqDxeQzQQxiScQzdpa37b3piuU8FJ1yuzWsCQ2SRyLfycaxxw",
  "key29": "tWd6KYestvapeQbaYUdgirfbnTbQpgpaka1C5GmUEd6PY1bHkEGt3WQPx7fTQR5t1Rwd3osmnp3ydNvgDtV83Th",
  "key30": "MJtj2aL27D28t51TupdcmdMd6ZSYHfkJn3sg7kJst4D23ZUmCdKNd1U9ZHTHQEbajDqnvVBT6V1rJxpqBXFRSfL",
  "key31": "vRqooH8tpe1J5iUKPP791EtGYSBNp1n9MCXXX5vqn7WL9ZbzvjHV78woiVpH9AK9UpcuDnLd44m9o54zbE9doKj",
  "key32": "4FnBZKLy4L2poHXyjU4yC15VG2yN7TdEheabRkS9oGn5P4f2cPH4oV1pbYuzzTrvE5ix1rTmgYcPk8CwHGTi7Do6",
  "key33": "2vzfN5yAtGyEW3HzHnaTAb6fqGsa7wP5VoDzFL7PMoPHJcYTK29qoXmBRKv2iEisDCNJw4rVTYJ5o7AnLQm2EpUu",
  "key34": "4Aedxni6geDEWwntxGzj896CG5VAZX1MMD6eXaDMyPhScXWjyJifT9kCVSQtV4JGmyD6QE67R7sfx49sM7vYio49",
  "key35": "3d2P6SVUS6xq5qhGc16xirYeebvq7isstNDDFtuj3JjVNaPLn69C52CXjptx179tPiNBdvtGHSdKkLSqhB4nTL4k",
  "key36": "Xw6HV1oAMato1sF6cLn2UPmXo6FbfTMMC7goTJj9swEKPQWcCKardebvSnXchXGbGmkqyzJ4AqMRAT7fgMvPeFF",
  "key37": "367yb5JFbgPwaXHWJJcPHwHm7fqftZTan5ijAKMTKNixJWPuXwaEzKqmSmPJMLa7fH7QEVXBMihF8d76uo9piYrg",
  "key38": "5WLupjQpXvpgDeJnLRGiFABsyt9KTHeZHw9WhnGWEJb8fRES7cbgtZQ2A516JuU4oPxwBnhwEw9SqLcs2tiPhfu8",
  "key39": "3MgtxMr7pAftkZSQxyRvLBCzgoshTLsJ3rfpX4rxYr58kYi7LvKgXaTbcM2yZ2avMxRLw1EEsU14QwUaB7kD8gJ1"
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
