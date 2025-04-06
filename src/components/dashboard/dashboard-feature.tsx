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
    "32YmzH4L51vtkzN8Uc1JC57LeNc1dhwTkG89fibaAZ4EiHboBD1VnprspwKB8rJuphuRHpxVGexhZkz7ovpzpS7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ULkuTeiRpRnkRNFZpUDBS9B6e8YmyCNSF32nyXKu3hU4qQBaGFGjZ8Bm2RLSGMYgcDJngNTP3X9n6X5fzJFW1QW",
  "key1": "3XYLt5rSGxd91Mr7g5Pm4XYSQMmZoXeFhGAEAYToyFFajckR2fN4Hbm2fe3hy1oJmjvdjXXXL18uEJUSfcznZwfS",
  "key2": "5cfLg9kwVxkCDEhpmCedGN61N2Qci1H3d9paAFW3SGf64bEW1ZBjnzd5wBbDWVSUWEqxqoFe74fmY7gLZpyksRpy",
  "key3": "Q5GtE1ae1gah3Mi87hDeAT9g45gu2s6bMqv4WgGjHfp3jZhoQtnZwoLVhhUSxVShX9ntr32fLxRiUmgVeN1tAeV",
  "key4": "4s2pAxX96YfDxxdiPZeDV6P58pX4KEcG1MH8Ya32qGKDK2wN5h158iWGw4a48LcHFi3EMf7yP8h5ueNhP2vu1fXZ",
  "key5": "sGRi8fEHdSEVYiUdvWV72MNuqYTJeap57hGvuLtMhGf2Sboz8nSdRjLFqBxHswLZRMaCXBSWwHdCqzHK7fESaPD",
  "key6": "5igfnhPbPgBL7oKW7FDYyVJkHH1byCwtDDodWeK2Q6vT7uUXWpmoiKKqTGvMmnY2a3xXtY6FeGzWhbTnZt3TTim8",
  "key7": "sdVFAuxHgfa72PZdEFLKacBzBpyrgvTjMcveuw8GahP1RLTTrgzVp2K4RvLAah91BWLF4E9SZx2A57MfAadjhmD",
  "key8": "2sBYikBr8Pq6VTnXnLf94Nr3FQ2gVp63adnk23AjH1xWpEpRUJAd9kNtX5aHovM1jRbg25U16ZYEWtMk6qcye7jf",
  "key9": "3DiXxHeBUfSdzdYoYrtM1dJ683uEpgLK9CqRwPEePcL4X1zK7pLvW9rp5DTZZ4gWTur2DNi5fiLEpNMi4eJXtvyh",
  "key10": "3S2HZvKAB5VoxDWKWyXVAQyykiAraF6B4eSheCcxYF9Rr2LptkoVJkqQcD5Kkg8fPUT9MW15XjWXZoFj1DmJZfkq",
  "key11": "kmnG7FbjxU5C7VTbo9KySa7Dt7LcL5iGVgHXTdx8hWayAxQN7rnxsHKT9zVqwpnJPHJ1sWshFQeDVWBf6ReTdf6",
  "key12": "3Ny9AfDQoTcboSv4EdYMcF3bZyyTaHT85E8gvUXNa57aTU8wiGEPoZzNJqMdwJQJpgLymY9wFHwG4Syu4Cqq1ZXE",
  "key13": "4EPtLb4ZSPo9aiVNT28WnuZk78kfFkqGgyHFw3aaQJioLPm1mjK2i48RkXzTwe1ZP124rf7danbGTeCnFDGZWMfh",
  "key14": "3d11jqegNxz1kkDvquP79KGTXagHWqNtt7KM4M5Vzfes4kAPfuJSk1mhXfvCoEC48b2xEjLXPyzTMpNK7PKTTucZ",
  "key15": "65Ts53uF3uP8EoAvWFS3oSSKoJpkV95FxVrSFuTgpHqb8XxqYdGfamB2Q3ZaxzpV81HYoYdgUSnVUFYBASbuvyvj",
  "key16": "496tstNn2pHfuCXeNP53YKdJKHzd3SZKzJhJmcYEdkCFfrMqmyp4RM7Y6zPs4Qo7GsA28nJ5W1nvNEFAn2gg8yag",
  "key17": "MDYaAxQsqguV4gNJ9tjhf1AE2YNbbdsBNYsuBMWivkuy2kA5AX2AVH1pKRPih1c3FwDT1WuKuEibnTBopVT3Jcf",
  "key18": "5W6zfLiq29qR18Nf2JfvcTmT11gJV8KmiAC7oCm8XqR6X4C5ChjLjYWrQ8kTjFou3MWoJtp8G6UNr826s7Eh4PM7",
  "key19": "3BTUUeEZWjxsSvT2bF65GteNV48vbHbLen9RW3VVSTLKDxdwGUrbbAQi6Xax2NihTjon3aes9szagvSqmhmh2bVs",
  "key20": "5ANVtgjmt3DTD57Kisn21Atx411Mz1QgVqJWKWcxFqWAXCcWCuq3YDpCFYWL4HsadZmhtrqcB2RyqPnDMgmaitUS",
  "key21": "PWJcCc5Sz4npVe7jU4rdoj8SQyD6SRbg4pzmJyWRWChW6ZmV5i1wfB7VhQtP7ShecWYfR42hiM67yMihGHfdozx",
  "key22": "2uo8pdaPTKiprtjDgxMsH2JeMrJ2xz4FnmKcXmguTw462cJa9Zf9XLt6hEEFqJh1Z7aQDYGh28ptV54w53EUJreE",
  "key23": "4Y2QTgduyNYcJcDYaMaNsDBxHT1D4SpjEF2V55ZMwoGzucndJSQt83gfodXuUvnKPyuQLBV6uUVfKh8kaEMBamYx",
  "key24": "3xdxEqsGdY4vwDhJGUBP7CTxAHMs2kjL3NoUWLFcrTypeeT3oboU8xe3SEjhhPUx33pCQSva1mFieRubF3PcwfDR",
  "key25": "5dBoc1PtYevsWa29iYhRNhkwZtmAw4kKSZB47uRjQEzTMpKduRr17QH3994ycBL4gQ6cCFt1wmpQpKrp48muSa39",
  "key26": "3JBJBEgxpPkS2socFX6EBaEi1gwULzAVkMKT9FjtQ6TfV8aqnG5ykn1yqRbro2cyk4TQeX5oRmX6DkRNdDXDJKUg",
  "key27": "r9eif2zJyUfSjrFEL2HavoFd4uNgriWrpBxVQeK91M5Pau4QyXSx4mdRggw3ZS3PnTBXWYYaHzwKUBkftAkrbYU",
  "key28": "5pQhGYx9tAV1mecubSRAU8dPZ8xp7CspdRGkPAtsYa8zendr7zMJpRsEScx5V56Bh426ELfdhQg5ByF8SrKjwebH",
  "key29": "215565aNdXuuddfKgwGwmELWK63S1Rq7aZ65FGkfMGHxvrixUm7VfqyLwABTES2HYiHq4SyovhpBy4H5vT1tZimL",
  "key30": "57JsbqhJHC1osLpqvgYJpkqTZixsLtePPBEkQ7wt5CY7VJ4LZ4gdp37fREjJ3T6m3cBKdAf8ZbBt6RJnKQvc8fdR",
  "key31": "2EFr7XgkiuDZX6n1Xi4v4unJeEsjkPnpvYxPuZ9yJ86HqeKARvufym931xuZcUSgodMfatTMAMVuco2dWEe2Krrq",
  "key32": "5DxU8HDpExum3M88SqKL3yVJZohsY6PV3FvKUmnUD7CQsFL9DKX9nhSNAzS5xDNcPJXNqqePM693f7NHzfGf8msJ"
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
