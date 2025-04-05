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
    "3Bm3Lnsf8xgrRnv28KrWb4yKn6hW7ZWa8PSisWrMeDgMrUgURJ5CPJgerDxNMfGppA2T37WxzwtqWHku7bfnKoFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KkcWXu3FjCXhTDBbdnPLmijyMSNn35aRBWprVahVKhiR1FxPPmEAf3TQ2k4VWSXw1JN8uvPApN4iwBBTNKzfMvd",
  "key1": "4B63jRmfd6TzrT66cLA1Gfwfum9xzL4FaPBMXrxnb7fUnrtxwenamNBmy7mTGiHfQKDWQcmAg5ndW2JUoXtXWthu",
  "key2": "2kU2a96U4xsrUi8p7wQU5swKkLMyhJSomTrQR28cbk3UBFMjkVQwRwZAZxCRmqeHYzBFiQiMKUbhT5gX2mQ68WJC",
  "key3": "4ks1Kc6xAZccZ2Y1etfoHS97figTgxoi38Qo7yyh2yXvFrNqaatMg9MhsMyP3XHCbDuCsqzBgEHoz3DkP6hZfiqY",
  "key4": "2nLKBbSBDQMSoMzWtCmwzuVj7wiJhwZ6dWpn4m4jDVncMgoWK81xyJXUZiQnHeBRnNQ5juVboUf7HUvAAN88muJ7",
  "key5": "5nQi9jcnToeH9ym14SfrQtXjUi2yPgkufCdvYWNQiNJgdtybMvx63VKsZGrKZGGZbrhXrFKC4DzzRFZ6ek73NrGT",
  "key6": "qiL9vu37Bj3H5QTNHkYUDx6pTAgHhngXk2uCETaznAUceePGeN6NQVf6p6KUokCfuLeLsEraP8oEmcausbmL13k",
  "key7": "2VDamfhJx6oTKLzwV5qy2PpR1UXTJF9RcWveFSZhbPsR1NjBw6zrzMPioX6aNvJ7UfzREuMTohajP3rDoEV6SukR",
  "key8": "5Acfz9EEPivkY6roKA4ZV9zxYuDAMjhz3zu1umhLKYKq7pC15K7Beb2Bm9zSGE7cxuzpivVsc6egUsvLPg4hDYGR",
  "key9": "567Bwzrg9jFDBWjRxztMy2PoCLSiLGMoiiN2jgzfXJbUAcXP2zPC7wKNbm5xVx3VrMBuVDttdnG6iACestWyozN6",
  "key10": "5b93BZb3smBYJUL7WF7ex94MULd36jXTBYZx4J5p1GriMCjM6CzwbPzzz6L5Hc2FM25pbEDzy3Rnixi8YYGoWwce",
  "key11": "3mwQMkinURXvy1Fy2WAWC7ZhCvKq5afFRsP2Krqeka9DgSH7NksBThsocVyqyWeuJiyCe1cjGLSenznKqFRssXSb",
  "key12": "2zjzctcHcykhFNNtiANK6fAUyNTV1iZNUzMHWa1w4H7hMudznkg3C3mkdC4xtWAJyordwT3BnWVkmdC2RipFaHRS",
  "key13": "5vDvHrMr9Yi9MZcizSUfTrtA93YpgG97tpR3g69sqw1mttpxLPWs7RtcrYyY7FYK6T44YBFa38nH5k3u5NMRLrYo",
  "key14": "4UXPrboEBYT2KLtrPFMbSTqKCUEkJqR6wm8fmEncDq3GXnNqEGbNh1xz6rrDkaWM39wkf3oyHNGrWGDJXe83fz3y",
  "key15": "fC6MZKhyzZwvykxHp6B1oVNoosLW4LPvxo7TDJAiKXZfkwjBz3YbWaFyTsaT1SrqHb973dGZkhDGSgsbCgJ1ySQ",
  "key16": "5sdKgidHRM2ZESpd36PtJA3yzSXiAqyigZHuBz8t3qaCJVzGyVMXDBaVbna3AupwjK4yULUnbFokZHzD5MCiW3mQ",
  "key17": "5fG2nqGmTGvEVs7ZJJvMTFcCVLB6n1jzGgUEG9SzBDdSQEWa4wHy7Qn2RxiaTAGBYqz6Urg8C2G7XAo4hHjktyxF",
  "key18": "4DqpYG1uP8ncoE5JG3adcRct5vxM3M6aBUJEow2Mkt3miZfPi9NTrqeGtiXF3w3ZSjWsrtT3WcsVUPbvbj1owqPA",
  "key19": "uUyqZTA9X3rvp12AAXv3WgeUQL2omD3QhXPgrKAwJNVzb9aGF4vp4kjdvM9V3Ydow3Zt1z5R7mo2tmB9vYQsm19",
  "key20": "qe2kHV2a5JCrekVTeW9EHbJegRwi5orFRVi6r6DEjveJADPMkDvvHCr5q45qBZyQQcyrFV22zR6zxaVzLF9tSJ4",
  "key21": "3EPaSxz2BjmJkD4NJDdjyaZBbWZ1XNqNcBzMKcZ3chZhgjGZhuvc3ZRE24VKie7REM43HxWVURGuTDZqPpcFEWiL",
  "key22": "5WCt4PgucVqAgNLbiGUx8muMh8zTUXtjZqWK2FCnpmRYbkMgESsAzypyNN7kPSZaKMmdzvRxLCkmiZKNmvsYGFS",
  "key23": "xEuocpAqoQ8FawwMsoPcey6pthw8JatFgU3LjoorxY2TNAjxPPDQrmcChtYnAqy8MM3Z2SKwr3cuqPiCLv6iWt1",
  "key24": "48Mq7m7GSo8DJbZZ4dpPBQBdAF9SBqGxAZg8zbFRG6sSxzeem6wkDyQ8UK1MoiCURtyQJaxJ3icpfNvSBqpVNkfj",
  "key25": "kGUVYsU1us8npaqsnBhimJikxRiSYypHeUMDsuercRK2CWNDKNVYgZ7iHLdFxhH8brXTjG5FtKibnQZcn6aGjBr",
  "key26": "64YfD4tz8399tctvBNRYW1queux4EnJLc46Sg63VA35LLWGt3c3e8nwKd2r8Nx1usgKMqtRvKMXVZGVnKbPyvXr1",
  "key27": "3mZLFotYnWqhotr4UvuFBVSbo3GkfXfDjWZktUHvacS6s9gSVri92Nc1SBY5MdzTQGTxvjCLjXEjmR98TDNpW53v",
  "key28": "3TeC3JPpEL45N5QA71eMrEj9VG4BdLicTBcCoDoFEj2B59qJ8oaxz5EQXf2Ni7bsv6R1aEZasNNcLqvfdy1uD72d",
  "key29": "2SCMouCeUnHmDZVfeVK9L3nkiTUg5yeLbfsGK3kyJ6KnnUsLZ1eW6is5Y5RdBApZoWveEVWtz35gruZKEmD2CjLR",
  "key30": "3CPNKWjCL41W29X6g3cGRDdD6PUFE9dcHcFLYAvKyoFUyksbnpe6etTQq16sDKNmnpf5cvid8oLzcM2RXm7NMDHU",
  "key31": "3esXdKBsmwShmUbQ4oRFmRWGnh7EFgPDVhAdFPJXcAG8Y8Xasy1rJzf1vXwiEbnnyENeT28NPLB8PQxjvVZ34ZaZ",
  "key32": "juu5xEQJP1XGPdVCn4f6pbKFsH5UUSU9avp6HCmjp8Mstj2k1jPNmjRJuR3R5SK9WL97qM2gkCokN5DXH3hwH44"
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
