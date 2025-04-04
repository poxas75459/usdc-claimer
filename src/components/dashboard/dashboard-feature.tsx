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
    "4Z6VvnR7G4TwP2SuN5CaU7n6kP1LoEeF7EbPMtRZtfYiT5tPtJTrpBjDNRc2egdNL2aVVhy392ghvG4h26ZYGYQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMhBom4kYdgVXhSyF81GHCwkP9mioKUGb21R9zou7YMubwFwMj9viTfoEhrz7dsTuToimgFVZGBCCsnydM1CF8u",
  "key1": "2gCz3a3GHPPx9s7gTg5ExRzNtuGNB8wjuFBHB3tKJTWoSB2b1LmkFavSzyWoK747KRqq91x9GHLbvPYJhE7Fa6w1",
  "key2": "2S1c93PTD8t6vaxwF1uZrrCVYAaepcQ4yDuqEUqcFowCWkViwPnQmrbpkjM6d5MSXDjsUHGKuyLzkY3CQLLg9HLn",
  "key3": "5eMU5JBhSw8hHH3nDxV2ZmjcQbYRA5v1CGWiHMVb8mX8hz2EEKXZSvBFmMk8HeVyCkrv9DrU1y2gpq9dccFXusiQ",
  "key4": "4e7DFGcKAzYudqg3UxgFcszh1oWMzj7mWUJvmSuqwyRzXvk8vaK1SzsebeoBi7vVZoYisMSCZnLUKYfJg54hw94K",
  "key5": "2etNwCTAGyDymXzJcUzHRHXwpD7eiMFGjpuxFp3DEGh4JGa3NWo7Cvrv3X1Uq7GkG7TLrp74ZtsatiXVWR6JCmgq",
  "key6": "57naFpJJJLKHSLFaTikCStbfk5rsxphKw9smyQcfBKvSgEzMwPGiJHLsFif9FR8pfvx4586C63rmiWLs9mrvZapi",
  "key7": "SvchtKSnq1tvoeJWYB1e3pcCQF5SNwNFF65o8L6u1YqyPKLwT8ACFns63DQv23GQ7p34RMQbDBmbGfmmmvTQLqP",
  "key8": "4DDtjf4z9odrE32ogu3zuefmEFCws46ca7JoHeLZF22ZyWvHDpu4TyDEhreUGZufY1EqUJCoDtBKqYWTrTs52nmg",
  "key9": "4JDddQFWAAMYxtkReqtxXWTBM2aCYkxKH4d16ZkWU1UHro1LtY38uxYwBR1aBMyHLfYAetsrVLdq1yz5e53kCPkR",
  "key10": "7QmcYnF3FXY2pkQLFo9p4K1DA1sjmj1YtFD1dyZmFziBfecCfjGkj1TAaiPM917m5hk3uXy4ca87feShRYTdidi",
  "key11": "2okMSQGqRmZFFbnf7CqGufXizvdHDdVsLuv6j2gAWE8EGY1D6JLu8yrfGmBrrDUQJbbwDJGM24ggSvE5AiNWmbkZ",
  "key12": "5LtWTYYHVoToCHqREPF5ytAJ6j3V1yKgCRe1BwsPspzbnmbqk9aTHeQkS5sHyHn3dixLqhEFVUEhXCUoHJoHUgHj",
  "key13": "51GcudcCbNs2qoVfvfeCwmbDLGQfH5d35cDt3av3cNot9WrW8kYNtgNjbnCZ1oY9WTDzwFYfkW24RJkVRHgGC67U",
  "key14": "5N29VnTLYr8jg9x2S9yBUhDtYTHFHmh5dxoqEn1sGqkG3Jzha2ufWqHhBUo3coEbPDuYcYqRZ3ZKqZU3VvXLBNq3",
  "key15": "3E51WqPLkxs7a3EC3CdGkykeZzcBT8pGm41iVBTgcqbagUQ1HYSHwoebp4PoALGGJxcQr57QRNbaqzTbH5WdhmKM",
  "key16": "5wpXQ91hdU6dKzwqV4U49nn2r1ujPAvfGeWsK11PLBdPApkK65NRPXdUShqEpfT5dKkPmrWy4cbvW2y9v8wYRrXK",
  "key17": "2wDDm548vmZubxeYuNdfMh2Gs2sGEQdaexvXL2yJmy3umcRYnDj8LXoCyeLJpwvVCTKQZrAUDV8bXdvaVZq3bgmL",
  "key18": "4L51Gi4eo5YjwbVCab7LTWX68MW4nDP3rhaJeBgCQWEcoiACYh6reZReyQBS8BfpSRnsVGQoHJA9DaZaoKpMjTXs",
  "key19": "2oAxxqpZxZtLGnuYwyoy3oBdBmJFmY9bfZTSFtauUb4VCmuiMRhxGvxQhbDrXNeS128h9iaaT1kp87UHbgrJwSeJ",
  "key20": "5uhauoVfsudzdmDZ2LCbA2VLYveRW8dRniUD5h9RwGGDP7kcApkBBqk5jhnRbBEZByHYVa5RJZQdHJZZHytdmj8G",
  "key21": "4RFGBsnvG6Z1iG7b8WsmXqToAud42JDTHvdCgxY3THfwwJAuio8nqhFdnBajDB7ghPJa33r2cb2L4Pw4P3fNhpsY",
  "key22": "2bHkTFk6tph2WoAgyRbjnRBKnrHAU48ZvFXEk9v3wF7EECTBMEMub3EfBSUF8W9bdLSmKjote6onTYaX5538aXaD",
  "key23": "5rC8dn8cwkToUKadjGsDxtp3ESP93KFYuEMYc7rc2UUwYFAoyLccveUiVdQjGoDxEEDQ8ArVqDuQTdBbouqSmaFZ",
  "key24": "4ohwDFGhvYgtDorsQZGyhPURwCZBKRJKvMW7wS5F9eXzgntSYnhXmk6aUZ3Qfvmg1k2k69ZKzXi5734LhQ6pBFUV",
  "key25": "41vK452dyMDBT1oxhc6ZYixAXrD9vCJ422dtYiC25oRKkxkkEftCuNPDm7XQMNFnZ9Xeew2Sa59XAFxoN3MMNaP7",
  "key26": "5RVrBDPQci6Fbvsw25WeSHirsKh4bzgpo4fapmzRfeWERxWNnv8JtnW9JKjHy1kSsMkwMvCzhFCnfydnGXJn5b7A",
  "key27": "3kEtcB5pxT8nsoGsuVUuMvoVZiUbKFzuTTWiZh3C3gftyna26kvsm8Psd2ps6b57fVbUU5t1rbjxpV84CDoQD32D",
  "key28": "jMQqJYnF2qYz5R3j3L9wQtjwpDpgk46sCgfGTwHhv1VdPuSr51BkkTqraMqRgXiQGAagfQ2mZZe8VaRGCLQCwSQ",
  "key29": "HjPgcSbFtmhHXW5Er6jH5FeL4ARErXvriWkPcyhrXtVJRRgoW9kLW78Wkfb47fXCJRodmJhTNJnQYBcPU8ybq85",
  "key30": "27V2iFtHQ3YSyo885Vgv6cfC2gWJoggfvvgDsM9QWkSn7LGKjXjjyFZsC6yMEnAv1P9KKLP5hFuaBpydrjuQfGK2",
  "key31": "2KaAFSzRdb5FViDVEvzDLo9hnw9L6Ab9JsNjhmnG8FnTZRQWbF11shibpjsbCoBcSSLZJBj2Q7bVgPHH7TjEQtp8"
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
