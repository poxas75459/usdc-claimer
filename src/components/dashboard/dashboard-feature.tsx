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
    "5RckQ9fe7Ss9DxMwDBnLTquCSmNyj4JLYCNUR3fwR4GFy73Hq6JeJE5m1VVy56N9xhUxtm9a2fspkxwm7iBgL8Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EBLK1PCcNb6osWuav9oMHH2MC4ESzMzwDNGHL6aTpHbSNTSsATASdRW2Vw3QqwAC8NzDmAvpKnvpggxGqGZjhNd",
  "key1": "23kQnTmXtJ2b6HkCa3zbvnYrfhj8WiNaxi1VMxJuNyD4ztzzHis45i1Y8RP3hJSrdczxhwTUtcGupJwtzZid9s2M",
  "key2": "5k3hE96NJwJ2KP7JYcePC2UHG7P5KpvPCFq1CpYDRky4J3B2eB5MnEnzefThgi3ghH8smrLB1cGjRdmyhiRLXySU",
  "key3": "4XzCwTDiUDhX7fXf9aTqxxXGzHVxB7qU3VVLzSCAWdVKp2cqrQjGkaJqbZYb25vLb59wHWpdpQ8yauGP1GzfHDK",
  "key4": "2TrLqfeSzBKMMgb2CBLsMCVazALjghFiXoLJToKLvKWgiy9Ro7Y6ckVUEm2f2gqigtV8uAyTXnz3azv2waLudNz",
  "key5": "2spvcyZi4UbHWfSZuQSUXkAmfWWPuaXmae88yZwh8upxty9CCSpGGsBiumDfuutV9GC2j9g4HMFM1dPLAwrctT4B",
  "key6": "3LhFwCnTP2FaXyTd6eguryxJSnuDDw7kujUxTr8z658mU8YpurD9CwD79dzwMxaAEyoZ3uhpEhZmpktFsnUJkeeV",
  "key7": "3Gfi5HBDAu95PFB4uo1BFALnaTDKYhB3NbFT1vq59HoXwDWDtC1sGU7efkzN5crQx71gr7TPRNNvksDYMbTzB9Fh",
  "key8": "Z72Pu3zMWUP7sLVnR6FGM7XAqJpueARWhQRGCu7extGSPbDLdBSBe4NXsBhH3otwgjcUxrm7y25Mk1RY3PZSJwk",
  "key9": "YQJGcnvmZ9JDmeSbHEDmyF96zpJUt4wLebmUUD8nso9R7HiVQwW376eTw3ctDaChF2jJFxvas5jETnCcGH44UkG",
  "key10": "2SNWTBKE6KeQXCJ8kKwxmY7vG6j3nYevbA62bNHpuPNsVZMw1jQocMhSTgeSYLtWycRz11EQhiwg8ELWqnSa7wY7",
  "key11": "aQZGhjGacro1oeu9QBE7WTU6ouK7ztAVUeVmGQqGRxP97nqETGS51KyFdpe8PQXKWLkwNrCkXvUdabgq8VtDzhn",
  "key12": "2NzpvpZF8Umfo7N6rcbJXtVMhJYZVCCwE8AQkMwNzyC3oogqEtiB4KFL9jUZetz52oiBPf3g9RQA3P1RJUze3PZ",
  "key13": "4TtZisgPgwhWuYMkGLjirmRJqgNHhbP5awX4NznkzmJdcgSoHeL21rzYkaj4f5ZrJ1SPeC5Dr66Dr8R9L5Ls6MuS",
  "key14": "28aqkKwt4xvohpPngBLY8jGvyohTQi9gjXkhUCmgw9g2RS3Xgbz4XoB3YkPSNBPEvx1eH5YzF8x35ohpGdYU8r5Z",
  "key15": "TCskkDw2R1nzK4gUGB8koxCha19Zth26mqDpWKqqD87FYkqruNyJCkUjKgCd4VnD7TV1fMvJjaZ76CbJRKBKKC5",
  "key16": "5F6SWnj6R6fFpLoD9FhM5qRaE9BsYzDBm1gRLj4QtArc8K7RhKsunqMKgaKdCm3PPFzecRuKDwY8cyqv5J8Y9Lmn",
  "key17": "4ihsT7YGU19PJmUnngXBfvUqUsmawVrdbyUY2qgQH1Bf6aNReSGWq7UQC8Ri2gc4vKMWhtPV6iyTCKYZpJw74Aeg",
  "key18": "L88Q1VbXHdPux2o3Tg49WqA3t14sySMbKgxacHMFLpmrKxR2fTzRhMrzXSfWKvHAmY19Yikox8ForBpJSruhwFz",
  "key19": "2JgST3YfNBkiukMWcDpF6Cf99UUhyPknApFW9yfeqvnPgXRXX8GdiDYFqq8N69caPSPJqLYmkhZzc7zv5RPe5PWB",
  "key20": "bWrjFjaUVdDZ3PVPcFp8XxvtYB3zpLHsT3LqvULURJmJmhH1EmudZBynTXh6ELDdykhBkie2GUkNQ7ZpjeLSpVQ",
  "key21": "4mitktsppUx3hfPGkNZ4YChArS55yqnP1ukpodSuC9Ym1m6EwrseRvwNAzBzrLCb45cYLPePMx2UuzcYV4Vp2SLv",
  "key22": "3QjeT6jNBPMQ2oGMVexqyRSiSMGvVbskxbGw3kxmjFXRZL53w4bCML6AGp91LYLXnHe91mXnWxqZxv9gSM8ts8bq",
  "key23": "33g7anXYVefugrnK5K2kh7DjPYaY93FNXh9ja1BHN1ZaJgUHuCkzCtCQLrFJvgTJ3s7V1iAuaneZTSqtKFwxso8B",
  "key24": "3CasfhZp9sPSYYU4E14urWRde6r8hCX9f7ied18m78QHTmDBmdhKkFukAvxyX9iHQ3QJr1Bv8VoaFKcYa55tLxHs",
  "key25": "37NsYWiNwiu9o577VLNFSYo55BiFj9pATDqixWASSpxhd8AekXLrcXUKiNAPesfR6jjXLKLrJoDaia5kbpCLdBdr",
  "key26": "48Tq9K3acST1RCAWDhUdf2J6aqYKnyPaMRv2nLDZ8aMoQ2rxWDW3Rk1QwufvSipS47ABE56AedTDnxfB5WyvbyQ5",
  "key27": "62xs2YquMe8W75KAUbVBZW8317XhBi4wKsCKdi4uQhnZs1w9vZ8z8V199rpMLFkrjngtctqF464Cc8e7ZrD89vLb",
  "key28": "4mXPeNFKV9eAv82PJRcu6ADL28zZg3jD4azntJe7ArYNsrtA3AcucxJ6Lzn6Vahbexervi24L38xfczjyz4kasQ5"
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
