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
    "GjWvBRdH7aE4XubK2Hr9gjTkaAp8tJmcNjSKnTu27f5LoKJgDJNaUTNeit4cKhmtJyotdCBvB8vEGrr8oN1dDks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQL29QHg9kuWBjFoMVEf3JNaUE2d9qKVUYX4X6RJC5zkkacPAXqdf7u2C4PZNgd9JD4FcXSsA8nLYVSt7s4QUcn",
  "key1": "3nKH3vTqhh8nGHFPY66LXAXcdcGtaPqerzYdmi7QWfPjs5cgNHg4bAD1w3FuZzxXL1kpiknWkdqA8BrTVaddA6ny",
  "key2": "4gq8RvyEy9xdwBWcZ3gmd6KdQDpD7DXAzHHmujZyBrqe7irHnFQqahtmcJ6jsVcDQRwnFLJagmMhm2kYVZHH3iBi",
  "key3": "2NHG6akVMaXgJe6iaduP4x3a197qGZLKxE3mc1zDUUgWxbhhJFq8SsAX3YiE6CqZoyncr2voxiR8LJ753HYhfMvN",
  "key4": "2BV4tnUSsvovm9wN7fkxUHqMMCfTe7nmJDrRJmDk2FTNHQ9pgx8mePrdnUDsvLVxffE1XgHxRWCanAKbx48mAiFG",
  "key5": "2seKyZpUmrX2na3jzkdGn3vtZAbXXw4DygQVe5f4RFrkkkszpKYR74krwWZ5UgSZbVTGKe6rfFunuyaHLikoKG1n",
  "key6": "62pkcWh2A5pSqE8vemwqwZgHyANzp5PXAeuGZAZkyEBCs2pSax8HFz1hrAjPgEc14mc2162fM5UoQD5nM8SQu2qZ",
  "key7": "2EsDSK5oonvici5hi6xYi5sZQjPyhb4YThLbF42iDm8QJfJoPgqe2qUHfdfUqMnj1AskN3kWwZycUhCezKZM53kF",
  "key8": "xrEVkFDrQ7U9cg6TMro11PmKRxSSqXgHPXFEJJ4ioJxLkUZFsEXh5fe8QSobfH4ZnHzYbxMyKNYDMWw9VcY1b3T",
  "key9": "4vXp14GCQAjZMeExcsR6mCzYD5t22ghjGKpKNGGGV9E3Xs8u6wHn6X3QVH7pT3haeG1zn4gPsPfWads1wXqKTDYA",
  "key10": "2htoDzGM4ZJnjvUPZ1XdX5CV2J2X4EsFGrRxD3jRMia3oe3XmpL7qBXdszStBsNrx2WT57kbvdzypLpajL6EZU4m",
  "key11": "4eNH1EJnUuKZHCqRemjS4UJBVebi5ua9aJb1bobXzCUVfXGXg4qKYBFXS76FvM2tQ1PaeBaXatWCDkkvgBT5YPdG",
  "key12": "4BKh64Q9CB4tniajXFP8td2fccgSpzuqaPRTkDzoub67VcHcWi7uwgQCxZX8AQYPmZr8PtFPjMxfDdfgyJzj9r1d",
  "key13": "5jgSnoutpwSc32PpLxxB5GnQMvvnhLxR77vyCRznf48BtUYSuK1BtseHCCjb82S8yGYgVgsu3uRnKbcEiBqNwt4C",
  "key14": "2DLDTayguEATwPghV7ojBbgcPf3LjvX5ow6LMTz716uhqNe2WF896pDLYMZEEGbbMps1a6rWo6Mhkdaqe2zgJUuh",
  "key15": "62g2Arpmg938DdLus1vUqCjKDMFxCRTUJPsMdWFgBUGcNYAfY8RjFds4iuTbCKvxKinMdCXQuUSbBXriFdCyxPKz",
  "key16": "SqHUKRCSMx3Z3kYiuj5Cq8JRc6eVCyuAjSK4uxsGJCSqb6MNFz9Ce2DYBP915ctxgCwbDGGnT5RU7syd1Qxng56",
  "key17": "KHbqYVgdo9MSaKiqRnEZJecy1pcb2aZprXVc7oV6fyAdDaBJjzGGM8fkSAHgt1a8cA9vio3DgazLDwVXmAg6rXm",
  "key18": "YhzCTqHE4VUBrjFWwBTwXA66PnhJNAsSH7jVWxzaruFAtEevnqpaHxgkUfr3m1PZKoAHuCziMJHGTriqHmQ7cmz",
  "key19": "3mJppCdBKZNE78qbWwztd2uS7EmD78svdbtZzdq6FvXvHhE22oaCiTvTD7ybsUN7x5VUcj3XFqUo4ZkB5zh9nzPA",
  "key20": "38MDGuHocfrDCEHtipk857RD797NSppoEqGiACK4ntRi8M8BB6xGP6vE7b4EBsfJgJfmmjKMXR1zeWE7ANKkjQUP",
  "key21": "48T7CMUe4qrvKpXMj2F2sb8hK5ar5NGrjQGBCM7JiAEwgm5S1iDLiAWuhcqx6FRQR7gS3jHTZjLMeAzUnVNDBYXT",
  "key22": "3xDFbnkD1TXUf3wUso79Mm35j4zbLKyspL9D23psotSuybGq26Dwr6aEATY7AYvYB98sVjJkTuXLjnGGp1s54872",
  "key23": "asU9F3KCSkpcbdrsJTFQuuYqwzNn5MEGBZ6osZWLSEepbb6jwri9bNYjKGY422euvLqMAH3xVQjb9wAHowiGad4",
  "key24": "2YMHgrZ4zUqKL4z72M7e7NYY9D34SYVqShGDHBgL2CaTtF9Wna3y9VtiwceGT5oWAks3X4wrDJj7RABBBVZxzY94",
  "key25": "3qUR5yHU3SPNdSrcuJ7VcGAvbzepYAYqGCAsPrLWhyBeoZS8fsgnJmYazfd4QDCyPfSxbKat9DfwaLwLEGuoLwxv",
  "key26": "5UtWUkYsJ4wnFMVxeeHqdhNt95kgBDUc58KkA5CKLnbErScp5nDSuRoJmsah4fTCfUeBWLaoSoRYeh8uEri8PSSx",
  "key27": "28mBNXTf97iSc4r1qyofTR56GrcJB1F9MbHwYPtVPXVaLmcf9HpCPxuJqmKxjjd8k1pqH12ktHMmU7iVirRA8jeH",
  "key28": "4FSdsGHG8bHUi7sooreostqXLHzS2c6CQ7PjHGiTKcTXQZjSRk7m61VqcYBXemEj1PcUKSx14iQudBFJv3PraGhZ",
  "key29": "4Gq9jt5eHWe4JDqbop6yEntx5YaxoVbvUQLwzqvZaAdfkhdSZgXoh6KfCkfQbDJ7DNDM3y5XcJexTEyDUf5vjhQs",
  "key30": "4wC8R2DyRqAdjFRN4tNY5h1XjV3ttn4SWQCYpgaws8WyeBb6y7BL3W4VSW8zeRXqVJzxgqd9vx5FBZUP3jm9ahcd",
  "key31": "5YKAvpM5wtPcyA8kYQU1xBvqMjkot6vVQzWFsRQBWYrdDUtoZu5AHnjWJrjgDggC5zbtJ89FR3ToPHGzLXNnUjNS",
  "key32": "2ChbF6S3ehKKhxUiyfQrsmnt4UGNKDhNi1hKK5JC6W279FNVEL6DsvTCHk7AQwPn74uyHPHnS9QD3Q2jj7XKjiLK",
  "key33": "2ML2tbRV4xkn2RZXR2J2A8cHWJEBuSNqWV8cUDqCvvpWooX6qzQVCt3uj2ETnz3KS6TNQFQZDyQ7MWfm16rvn8kq",
  "key34": "3Pncwpbeia1EcKm4kstN5isPkqdrx9W1ceyeB9nRG6sSizBL8p1cCVXLWng6Bht2hrFjPyKH9Kv4BoF7cJkJJSeJ"
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
