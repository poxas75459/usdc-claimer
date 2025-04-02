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
    "4FFfdZYCUQeVP335jBHCfzWAUYGNxbTwufWo2yLspYqbQj5NzRaPUtCoP6mGELcpw8Qhw79oGAKAQK92VdnGD1wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zVaVMR4DPpNBb8KVgKK1FdttjTdLv6MQi3uGocWQKy8tK9pDr4yygV1b5RWxhnF97NeY9hEhUve6asZ9opJUDgp",
  "key1": "3hQaNwmhVCeraGUX2Ymcr3rv1FdHghPDuedSVPNfxXMBEzpPKoHLW4XwVqwteQM3t9i18yLFJtUXwwmmCh75g4dK",
  "key2": "iSY3YJ2sRRbKNv1SSZEjKLtKz1zrvtzaq2iDooFP31jYvJ4LWzADXJPmuVwb9B9YmaEWesdvKYfxUuds4F9LxBY",
  "key3": "62siyoYNFox6hnsPC8LnLfwb5LZt2jMXMaN6Jri3ubMhSG1eDJoFg2vQt7L74RfTB9GNk8oJvPHJeH4reSDRxj5i",
  "key4": "64trnVE4HUJ4PjsNvLBJLVU6qxC9Mvqhoanoe7Qby6r6nbbmYaDQt5mgBGCedUVpRCivFMo3E9hvui85stQdCt3w",
  "key5": "2QpPadqewDgp6XJ6GREffCU8T7oqLY6vo53VAw1YCNS2fF4QfBgQDaZfyVRB3UuwRARVnAEkgERy6UneioCm6hgV",
  "key6": "3bqKroLmRRNk6TS8YARWwW15ERoUP88UPYfWFZUBwCAxbUthuZrmWcsEZy1Rfs9PQ6ao29gyT3iuA6r1Ga9a18sE",
  "key7": "cKopRqqL63J8hbtZANvKhmggEAubafS3wBx3s9xHFxAhfjKbo3JvZyZjKHNP2jVCGjohtsHBT6KXXWKfutXz1TK",
  "key8": "4xsZokfCga6JRLCiDBAxChRNMbd1aPkVkVp6wP1MByGC4y9YrpZfM8Xr6GtEEE6ekmtZcBVuipsmnSWJsr3tjGeq",
  "key9": "4Y5NSo7aMaTdLEZaFSvnN9ksa5jyVXvwEwMZX8Yx67ta68WZQhoVVUcw5DrpZxX4qBo18wmmpY4nQYyPyZhbE5xN",
  "key10": "ykRwx4RqS31e3jCy1mnShEcbLgYq4yHr5XN6puFWoGeBwKxJiE9zjTvW6hoVCmPVvqrQPMannutCBcRRkJx9iJG",
  "key11": "37xZet9iNJ6mF2eFhDaSqh6hPesYkKDiYryWvJKYnozzUbbdbD2JChnFyR4iwNnZVCR99PDKaL35MkLh6DvvTHZD",
  "key12": "2WnmXjjSfszEAjm9SE5jsNz8eWt857AkD6U8bNVxijJqC39TirjLzJjr3f9X4QWP39itsuWaqtLTTk8KF9agai4U",
  "key13": "3txofbtrrLtXPznYByTE2ucZC95ttwLHo7VupD5Rq39wtHAAzTzKfuVTgnhyrsLUVd7BxG9jeN1pfSmqm4TFbniN",
  "key14": "2Uzkua8VwRDHVFD2QPc8CwUqt1KZ19KM2nozNLUHipEWNQF6XucKYsEdg8YpofqqjQqupR1PYnUZvEdZqvBhAMyj",
  "key15": "2VQNStyEQYeogAjWuZ6V2e3qjibArNTaHEP3FqfTdeJmeyuzuKMz3gksoBdSjmdTbKmK8Y6mFi83wxwNMa3y2iCV",
  "key16": "3DV5ELWHuvoUd9xcHHshvwXi7WZpwubEwgN6Z9g2MvTsryW8zTKPzXJZKEdK7SchQ6rbVtvcMBbu2yK84UpeDfvF",
  "key17": "3aWxKZF6xDXX6BJTUb3v73vSNr6itgjwzSRoNedNoxfzfs65FMaBCVfn1kSxarXqyfnBBXnZnqLeqpyAo8YcbYP5",
  "key18": "3pDnvzpqPb9mM34JUfWRfzisJWf5asfVVADu2moKe3HKyyKjqfqaMAWeKMzA7Y3F6UdGbaE8Ny7SHNVEswrtLhXv",
  "key19": "253RD9PmuAYAStgUo9S6N1a4fRKGGjU36GzhEu1sS3J9zV3z8MKNr8N9JbXHRcuh1qhVwXAjdxjbUnwTXkAsQZne",
  "key20": "3mXPkjBt1ZH424Y4TqqYa8CzXtSXeP9kRY55z6MPtarVzXUgQFwPNYuAUTzWtPLYombbAGXSkT2fbS1kWpw5pZPR",
  "key21": "sZgvi4zuRZhygoZ7i42gX2tPJB5ihjDvVtkHFEuRLRBDwAGpN1SrTrNddue11BuD88Nn4rG3B1Nik1bmZHUhw5w",
  "key22": "3cnpjFJrpvVBKRemtGVZbwqPPMoz2VurDEDHJXLeAWQiTevsG9EAwd4X5yeDLVn7iZzt3TBn6Q61rSVSU7UP14Gr",
  "key23": "5aHgFEJaCaauLBkhYiQueckqr2piGTYm7s1yvZ1PSPxCuo6qT3eGGwuZpMa2kw1YkJpbLdeeZNxHHjKBcMn3mQNP",
  "key24": "EM5MHRWFDQNJEHAZZaX7xfvsd7hwtw6PW9fQ2Mv38uMiFYwQmKwf6bhYgMUHyZqzpCcRosiDVZrZAUsgK1RAoYe",
  "key25": "5pREa2GqAiDw9VjzX7s7bKcMAovv7TisBsptwP13xKStMuYg2EeZEBzK1B5f9GGoD56r73t7em27Uo7eMzLcjpRP",
  "key26": "39ZwyGT1ZEgYkPAoH6zDWVfoUMtEbLRRj9KtMnudnWRw7S1eiq4Yb9aBy3HZ3Q5K11CKeu5Jy7on1xDmZyQcPos7",
  "key27": "f2cR7iCsJf9U4at86gHWQim3R9eiu6yLMrUnWSviuiu3STnf4irQ9sYecx8YwifKUsW4kpHeTeFe4Qc4qFTDqGw",
  "key28": "35eqF5Cw1SBDopzpisoeDcbL3vLqQT1ffz3KwfWRk2V2KLVioR7NFHC1rVGZMcjaY99EJxka3dEJNDaAGcGrCpc8",
  "key29": "4azJvhXsR54jHC1bX8PXxeX21dv2DYPb1BLRrk5CcJ8yicwTxejRUkycNKKvJhY5XScKG2twXCFYQuPNbyF11dZ3",
  "key30": "3KMKm8HGxyHsN7rZDGvDh5JkjUZ4ACxe3iB6poMCfRD4zAcgCMkUgKjznZvrLdnhKGucGgKwH766DNRhaNQpWVUk",
  "key31": "2LJ7jSMpEx3qokN68f56enuATJuXpYPeZBr5yFv9Xpw37cTpcyZpxW7iv41cweae6QvBmhBsoqkafmnHcKYxBwP6",
  "key32": "4uJ1c5hLUqPjXgu55YFSjbvR35ZNfCLUtteQxjhxkNbu5hsANoAdFspCdQ9WWeKkKbas9vTW5DDr3xSn2Y2bksRu",
  "key33": "3tFsQvLFeJLXsB5GmSB7d7qGowvgewYU7UAitRZTFkmoHRWDyBXRxiyzGnkE5NhvRxzYmjEbVk17RTGofB8ddoL7",
  "key34": "654YgDdLA8CsNGuwC2Jz3aegGqKheuP833XfDRR967LeDdPQdPQjSCz8PKLPqnvNmKpXX5d4PQSdcxd9G3uNtQ3B",
  "key35": "2gWVp7Bn2WF749famMxjmyscfYGNgPh6kPpJAgmKYLg8pAMq32QKzGjMEUAo9UUYHMApiPuFY8CYVUjigHWNjNxQ",
  "key36": "2XMmkNcyzqisAuHiwwQ95C5NKb5bSQqwjTBi5wKRyA3Yp8pjbTjQBULz2XBFtuwZ5iU14Amwv65ac4nigx8cEWVo",
  "key37": "22R6XjZHcsamECnaKpzyg82Keq3Hm4yyjBmrek9cUTe5NxM7Jcxer7RpYeXnxfceSa4rQk9ptn5xsYBiwZ5TKQaq",
  "key38": "3KwbRJqrCwbAzDdpZvqv9LCG3Kbj5GuXaNB4pCyaGdfJwwh9EBRE3zC5JG76Wnv5vHb9J2piU12nmvVgqXSRNH41",
  "key39": "2odMJbXEjTXpspemfPxypgWm9gAfEYv6KYxUFaBefpNKi9omZag3oCBaoHXqjpq9RkQG5d13BwxDTY4odwCbTP2L"
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
