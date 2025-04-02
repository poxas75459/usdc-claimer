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
    "4VMemWctP13YRmMpbpgxhQZizqvYrPEaQ9JesFgCgzLmgV8WWAgQgpjJb1YQfamk5JVS4imeSbnf3JK3MnLexPZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWBcHoCwYRjtw1e5bhf6J2emWGRCkapRkYt8cNbBkPgUotJAEePvm5e9Dqu4vzzxZ24tBFx3BibzQqAJPjmC148",
  "key1": "2xcmxHtPYwcfiYAJduYvqQCHhARTHSgmc4gvMatetXMH1KFRoXcKTnMQeQD2uYohnmnwYMHXxGUBxrwTz9xvQhLW",
  "key2": "3rDMULxX8WPncLNACsT9fiz8zAP5JJWUUztZgjpx5PgVgizeZ3PsT2QBP4q7DGbQg78K24AEYJufW2ku439zBJGo",
  "key3": "4cEGBWQccApBkQdD8WTSzpzY4Uu54MKMq4HWJw1JRkQAeLHZtyT1jJwEUibjNrmdZLV842TsWx2aXgpP74s3LnVa",
  "key4": "KrDs9UafP2PrGxYp5M9mhbePSfBFc5K3G6QwL4MDcewXVdtJH4uWeQjgzWvcEooMaxVDmQ7JpAL3MviHfndsQGR",
  "key5": "2Z4FLeGoFszJ2Vx8suSbxh2tWBSK32P9DnkBjDSfjXjVNAHh1rhJ7s5B86VKWo4v6KsQrGpyD9kN1pE8QBHeDBFV",
  "key6": "N7UH5QAJkUxPEGU1xUhJFYUfxiL6QbqksStSDQQgfWJv1oi9qqEpRfMjLgfV8XK4U6HBaG74CzyPHPwMXHXd1FC",
  "key7": "6WZsZ3XtuQ1XrCDYJZ2brGp2e12CnMQKUKB7MQ1JPJhyW6VTyLfeTeAnpVBwDosvezwyo9CPZeTNTwfVNGGECmw",
  "key8": "2XZ7KwsTdEwzWUQPBXCWWFYRXhB2gMZDszAue6fxMfTvhFCCbM5wJbdhaH83gk6GqfufPcEdHmzAGGUYy6ZWxFxJ",
  "key9": "5HehfcFntaPJFvU4yqcQkNm8psxSmNoRs5CnRgHRJw9nrscKrZ9UjYnaEWMQUQQ8wtxD4dzS9GHtUZDYwAhyEU5n",
  "key10": "rTasoYdsf5eVuN2KTdnbeGbjHzhqC3qFzK6BXQqtV79aZfvazVErvuuq6AYvuT3FRsVqr5xcAvU7BKLQpRi6xa6",
  "key11": "642KYNJssEgrQBPbaviMe4m7TFfkJd3uSnXFA2yUZ78xPMQN6pQ5XCcdHWH6JpsvbJuRq6jFWDEeeQefaBjL6RZR",
  "key12": "5qFgXf53CWNkwA3ag6rQH57L7w3hhDGpDR29TfWqLfrVe3ntRrSz3WJLmxGj6a4wSr7pcdmWzxGxRzCWY6FUFdJX",
  "key13": "39SCAuUPNe3aUCVaA36VLhHu1SpNrVmh6osiNLbjDgeBHTuryiW3xi7pgeUDEZpxWW325Md6CKXD5ndASU8cr2JA",
  "key14": "3mydjEjK1ny3Chf54XvCwy9K83z4hTFd9ttp9RFDS7A8eqzLSbfjmgNh19mmVVFTdXNQ2vt8TzkFAj4yasvej58D",
  "key15": "2VYTbUrFXnsccmKE2tbuaoo6ettFsFYzMR7aLqQsKmVzgjLCveqxEuaoeGpLgmKcxnZDEivo9Zg21h98bH3PUVpS",
  "key16": "edoEjbhBuLwjgUDSDvo9SP4CcEPiZiAJWoMLcy5WfAX2tDd8YqQfGauhJzTT2yNoEPUh2wSghk4y5zp4os2qBkG",
  "key17": "4sFoWVjK8ZnN6EKkp5YLQrbTfbc9ijMjE1Br3viDDgjnVXiwB14smKcYbo7hQwu3dy4p7hnvWUF3LCTV5QDWTQQT",
  "key18": "5YjMYc72zNLcxAWi8abNMkq7cPTyDgrs41PBpJ5UWPFbmmuQrbBdGwmTA8FPV7eaq2BJTR9t1WAAbAvZsV2QuG13",
  "key19": "5ABKG3Gzv12k9fSsbdDsZJGCvs3ru3ajDTHAAvrGiTovXzhfCwQTPhFaDjAdjEPS3u5acEY83t7Y9DRBF2L3c5ko",
  "key20": "Hs3K9asbRs3XkYkSA9EBkbquYkdmSC2kbknpF5Pz1JmfZ9Vnvys8S1WzMH74cxXAc8t2ApgEptMtZXfrA7KLvKd",
  "key21": "5qTLDeJjNpvNe4JfR4D4mHCcThUybDjDSKuXoRpEzS2zpvFaJrmRYyhEUohF7jLYB5ve25Xz3xeoHHuXx6DfjbnS",
  "key22": "5NAoBNpfRstGk6GXWWYjM1d74QfDDX5zjBB6hXMP5UTr9X5ANweUm1vR2VeQ55xLxmaerN1ye9hobKyaTMDrg3BC",
  "key23": "67ChJWEAUeHACRXczNaNChczzwfkT7jttj1h5rRd6C8dSCXV9kGgE9FNShK3L2mwGBnRhzPh9JnHAEUxF2Rnpx6J",
  "key24": "4tjeMSmasfMjWoLtvqaVbGgBkwpC5hS8wh4fqxre9nxdbedrdDGaEY24y5wSTAisa46jewtQi81bUtkzYuyFCp5b",
  "key25": "5roDLCRaxrYvnUsdVz9YBcHwzSB6EN1bRR3v1e3mMcBvcAgZZWLrgSDH23NsaFCwprivEhZnqY4GvrPfcAEiaAyX",
  "key26": "62BLfgCNMg77jVpHfhJ4ot6dhcrz3ajPu3HH1kKDMoMf27ihac7x3apa1fK7VFAQz6gPV82cw2e8CgLnBQsqEw1k",
  "key27": "32415KuvPwJ5YmFP6cCD7Z9jDYt48v9Pm6Rb1thVkM4B9wMXejxw44e5EXxbaqgyYMbDsVt2Hzb9A3g8F9GPFwAp",
  "key28": "CHqHdMzMvjmLS6Ka7qF7RSEY3qg4sD4CMj7AToF3WCWPtRcYwRhs6SUdLXQjzf2LTRhnQVGKBstcJY6Skf9bWXB",
  "key29": "38rJsu8D3SnwosKREvQadLmPfJ34M9aiSug3791HbTrf27spMSENHAXTwfikBUpJeGsJEFxjnnDXBi8FJmHzWDvP",
  "key30": "2QERpmyDgKY2j9YUPMokxxezXvm6VkL2GPCQQTp9x6f7oUsUBmGxJtfVXMVuufgxhRas6NWjcqoyi9ZJbX5Xk7W4",
  "key31": "4L4LvnNcXiLbdnFayBZajC6B4RuG6p8P8rpJ1tBGj9q7VCxNmBoHaH16gXzYrEkKtMXF8ZPtWg4VcksQpNEaEZuy",
  "key32": "2GzHKZbUnguD4QVNpMVDMaycbL2ukJma42bqfTkuYJLxkmsshbnX5omPWVvfxc5zgXGzzsudqitDkfzR15QJ7mXr",
  "key33": "MzARDbsoFLtW99onVmsZHn3e4RCRVRDfZVEC2KhAwCwQ8hjSUeXJCWYrJj4oTMtwHervLPcnqVqVxQ5GpkKvuco",
  "key34": "3NLB3Un3UcnS9SMt4BxFDR8YFVSgNApDH2zDezVgMHavoVwKbCMxsvTPZ9NioNYypwD5HeNSPrKZcQf8SX6DfVcd",
  "key35": "4ByBMf1MGZXRcEn4Yi68nFLTBkzmQAevhsLmBDNnS3d56mxs5tCNGwfb4eBwtWMc9D3WwWNfDdQJGp4m8g21EfzT",
  "key36": "2VAE5KNcCsSNcY56TgSjenghwsissqFQdwQreM31bR4ARfk2sokGv7dytkHZi5ktHGGUG6PFqn8jdhqMP2dVFi1X",
  "key37": "snwUPLxkHGs7ghK6e3LgbSTurLkk94V2F6Pb9jWMhsEu1mmbLXoq69QizBZBzTE56EYJgoVyEg22qdAu7XrKjx8",
  "key38": "5rnuBqHPiwhaEcjkaCPG8gVQV3zYUqh3J8RTWDb8eRgKfmmmvp5vft3JagrpfuNopAkPhKY7Qc3mEFeYsoxFdyJZ",
  "key39": "4C2yD7pd6duEBK7tFroqkuPX9E7BY6Ce89yWM6L42uJoAr7AaTcEmShzrKBeyqDqbJK9EjUij6byzak2EdH4KwtM",
  "key40": "54FaUtpd6xRDs8soYTKQKxG3RDn86ZJKm2xzac68XhCH1cnpF1ed8mEgaLQ1pqjKmFMnrCrPWrwBxS3PGkqb3rgM",
  "key41": "4ovqeUbNwvAu8D9zLDc8CCaKW6AnAqjg8sygFhscxKbAnynp6JLWasJ5Xiy1CWN63JZKmeUufjZBejYiV41eib4S",
  "key42": "5fWyigb64GihDejiJKdYmi8Z8hovYJ1JAJFUWvFwdLX8BPrHJGpqjNF9ZRdGQaS5uX2Z7zJ2fCVP6hjtqc775K3a",
  "key43": "egN2upHR3AMKq66Qx61Y9Tca6KUBJk96FooXcJmymJDtX73c9pUQVLB4BCeHS2mpnmW7qio31VPR6Y1GYNN9AB8"
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
