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
    "zjYh7zHjzpxkPtmfAngHTzKB6ybji7BkmHXHKeSVJ4KM9qZnorrxZFbTAqqnRaRLNqv1sXAKWZxE7xqtuRN12ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39D5o81TGgAMBcFQyTR2b6XV2YxLvWgbt2WobPqgKWyeYw4SArCnge2samYXNZcAjMcRsFsLri54ri7s695Bcrsa",
  "key1": "3DzGoNaYxoBxDpAGM5itCUW8mBmRoEGHCGmPNfngX6DvMnT9Sqo6fDUFLGKd3upM6jmTFG4XoBWyP9hm4Spawv2R",
  "key2": "61grtYsXCgTXk6CCkeNtP17FCYQWgfCowJBQ1RkXacgfrUp7zrGAGbwaRX9c9oW68jRponhcPzCTQm7PupeuKY6T",
  "key3": "2bSEXV35KpU9RyaXGVvCtQGYdU2kg3vuuB1bXbw79n7GSxfQgyZaxhmkLWHFxySzkysW63NBXBR288oEzpretqsM",
  "key4": "2FSEQLbz4rs4VVmM3mvpNz6QU3HtirdcdgBX3YCwqeSQvmAWjDqY3NuMW3girbsKwHeJG18Yq9RuFqSuTffu1vba",
  "key5": "2oh9YZ1U85PBe3QDixahs9HeNbWotaeZoPapgbozjfoZBuwZSAZaAX8D2y9HpDYP3v4Uk9sL5TeGvMuMgbJVumSH",
  "key6": "4DF2Toy85PiSnsmju6giWVNtHqaTJA6gYQ6ix1MKFph3ZQ3pNg3G9PLZmuSytUPzDZ1tyzNQGGgAHtPBzcuyMtuN",
  "key7": "31bn67UDdDUpUpPBXcYd57pKmM7mLArdp5uQVe6UZ1JGBLMP8UYx6Up9xk33ypuPrRDS22TXVUWRhadPgWVp6S9w",
  "key8": "36gkwTexidPSKCCHLMmaHDGaqMYpVNwVELCtue4kedt3peuxThUoYAxjCEBr9cztbFriFrbGaBUss4kc7xwb4ncR",
  "key9": "3aF3oyBxvJoM7BGkKbB6LGU2P8SufyvqukNTd6UgSJDZJzXh6p7DPTqTrBoMooM8F86G8yKjKGGdgB6DmSZBVVzc",
  "key10": "2dxrvehcCeWUctpKVMYDDn3Mr4MuE7kkpVvtg6YEXnEnYFZcmLjkuyuZG2TVkrkDU6NbHjxTGhJ5ZGseHA4bYUht",
  "key11": "2BL2hYhZvLU7Pqqe3UYrs2TjRiidcraaMbM1JkoZzMFrHwnKops7wciRFNRSC9YJn6fhdqS1yH1MEAratqZdrj28",
  "key12": "4SfNBup6tdBbqQ58cZvs5M7Um7pXdgSk75HVrSky25kjGp8feNUJ4Lj76egVJPf77c6xYQ7d1Wh3QSRjZcpotQPA",
  "key13": "2hSUHSRydaaApKfs83pzvbFykqp9QXjJP5TT8HqdJ45eiZ8PaVbP4QnRwYaX6LfMeotz1HToLVfYnQjdpCKCP3eA",
  "key14": "37MpyndMehUwaqL191Fvz5N8jwzinVsp3p5CAHt8V868KvbRudxgLdkx4MrpeePEHj6LyWyseg14CGj67catwUsX",
  "key15": "5g4tp1W9EXr86nvd6jZkSfMqBvbU4oFWCNezqLdVJMmzbS4nTkAr42vraDqYFVWHVmxWtXsmqfFkeUAtbRBKvBQZ",
  "key16": "U5zkX8nswtSZp7tVYuBTmRRC5DVryKuunhVdFwHJZhQ71nf3dXavMjXiE9L9EYgPUNdybPZgNonDdbLv7yZSu17",
  "key17": "3kFf7ckEFTQQATUKqnANwgBwTgqVBccVNcx9x2GwoiEoFLmXgFbpsirogVaj1egu45T1nHkZhtb7dAMhKaTd1Uhi",
  "key18": "4g4kCQK66AL5HNSUQwdaSMjeUDCGH1SjT1sbMQbQPsF8yQ8fB5y4tVKzPKUr7cBLtmsVc7UJmu8w65nAHj4dQMcj",
  "key19": "FouB9dQuQJ1Jm4stWp5gYt2dSUD1AwQt158Wd1ukvQrJC5h5DA8KVKpBhFCEb3iuphMMfDgsvLKFQTyG9piTKHt",
  "key20": "45naAyb1uUKtVWYWZVibvKxBm1p66jJ4XXatqTiBhXoE9FdnwM6z2SgoZFJYQfCFKCDk1eXqZpPwH6Z6jC7CFRQu",
  "key21": "5vn8z6mT84zWEbiaREm3x6UuDCiQX7nchYoVwkNZi1g9k4jY8qLjVuJSDgtEV4DNXynGW4kQ39VcxYLs5ypV8NLZ",
  "key22": "5VZ7KrjeoAs4Kjk3kS158RqwpJpuukchypgaFyToX4GXibnJ8bU7SaLnUdCmHkNiNnG1S1DR2weAJnuJ1xBcZbq2",
  "key23": "2rf2NyDmD1sPGPwFPYeEDBjUHrBhZV7CJUKH7aD6W1fa7rR2hLUongwSb87xEKnGpgsY4XcTyQU59MsvdVn81rUR",
  "key24": "4pChni6CGD8EmZ8vtbLshFzb7r21N1Ex5puJLNm8TfgMJfY1db9KFL2Xt6zqi7h2Gafh2UzA8RfZpYAxKH37jCzZ",
  "key25": "2jbXXoHzsWJe8xVxft8JehAMjDw1mPoxUyHgdNepmCK51i5UqNabWrfRRSjEfzwEAY6J6cfD74vU3QC2yfrFA77H",
  "key26": "3B82LFicpsnJLyfiXA7jRLD99DWLwyaajrPAr67aqo4fYwENhp4bvrYrs5Yf6QcXKDXvFzsWjNUZMn2inVfsJShA",
  "key27": "DcaeJwP3w3rMBni4eEUCWcENqjwE3NuMG6V7ivKb65wD2vtDSWw8NevSytLvYm3zqjyVsGCbTatY8G56rz6sKf3",
  "key28": "2J8ht4jHLTmsLKxq9KNsLqbP5Peg2L1EMTYaHAGWG6fjgMHG6KgovEeyWNieDPRFBDgohxKUrjHkdZRy8UPxCXYd",
  "key29": "55Bm4jufBnBPrAHrYBR4xzqYgNrt6ksJZ9rh5NteusBkvvXv1E298UiBmNegDJPVxFSpj8TaNJSy9STxZijto1FK",
  "key30": "mzSFRBvriDNDfnHC8VNxx1CrMXBw28FnKZM9QVNonQ2ywo6KLoGSXeww6ukjG5eR5GqzKp41vDfzerBYFYaBHhz",
  "key31": "3pztCL3BMjCGSiCEiE3hDQMdEZ9ufuzifFdpNRCcsseYhUSbzeZhcg1bDs9wHQsKQGs9T2nBabyvwrupxMxzcM1H",
  "key32": "5wb19RKKQLr7EvzqBXELTHDDCzFq8MEcYK1B6b9EVWaUeFbGpfGf9xJxK19WmcrtvWmQQ5MhqYqcxCVPRKEhFCq2",
  "key33": "hvMJ4GsNjBc2mjej1kuxwdeGAfiD8TqdSTcBs3eTE5adPwE8QfAqNYxsR7vsrAF86f6b79zHuwFeiYxCpRrA95E",
  "key34": "2CurDpFZxjQjno1ws3qe7G8KZ6vkGqtcSrVBer5ptBPNREh6PawAkm1U9d6nKVdNWig8Tpnu7r3LjJXxJWz8Y2kU",
  "key35": "5dhbxSVXKNbCWSzUjRhqREMfQnJTz1CQWHKMMZJVFrJeKaTrohDbcfnXKrHsaYgvRHDYNt9SJFaPWApejPjA7umA",
  "key36": "5XzfoGp16V8gLHoKjKZBMaAhgeEVoLPzX8Beev57GDHWqkhffYFR4g46bqVWkv9Chd3htdvgaGhf2KTigZx3UnH5",
  "key37": "2w468w6XrmYwcgHav1T7W3Vbh1v3dam63FyyKVapDJvw5LymeuR3QnF2ziK936UVxvDUSGeREFZJ82gjCjYxgtVL",
  "key38": "6R8ejw4Fs7qExnaacZCDG8b6RmLL7ZYjcAphgmEKyokPkTfCLjJYvH3dm3YKvUi9msLmkiejKWFmG29qTpsW63C",
  "key39": "3wF7LQsq5BJFecy2pW5Rr6ZU3P9ZnuKPuGZbiadFzToxrWTwhHaro3dHxnkGYxochQFF1BTJ6SxgVgw9pYJ3mQv2",
  "key40": "3LMBQBuLZthqBAQ6kxVAidEMvRdyZKwS7rPTXGzD8eJXSBkND3maVAo7hZTmmqCrFUbT384GEzHh3DFziyimNnLB",
  "key41": "2WD1GKD17XPCRwTV4wdp4UoZS8i7M3SyW7RoSc5oHXjP1K6F4AvWGhNCYABUUyzFLU7Sw3NBaJGffkU2LzG5FekL",
  "key42": "zwwaoaR1ZiuJ2BJrxsevUJt8MNVrrtuVGis7tLmrmSQc6zqGd9AqUYsgV5jWCww69LSHwPtvr158JzFRocdeHQs",
  "key43": "3mDDpJHpXjQTPsP3sRqNqj9fDLZPTvMcJrxAT4QrmqoFoUsJQfFVLcbfK5aWGtujkSmPzpiiWUKyMS4Kq4XY4DDY",
  "key44": "n7rBcg7tGyC96jbjeDwsMGF9gAmqPEwmBcrSwzbbiGNmjY4vpUydWWqy9y4Cn62DsoZBevxT4LeCXAsBVPAPT6y",
  "key45": "2jBraDvRqRWRkrdQP4tbRiJPYXAt4B9RMaQdZa5LrVe14V6x1KZoE9jKbs1pgtWZrGkhmy9AoryDdCzPc4jD769Y",
  "key46": "524xP7UPysVaZbZoFf3Bg7tH5LuXj5iQGi5gzYbRm8VTmuF3qEVwt9ewVxwBvHJuMwJmW5rrqvqmY4mjJmX8jWS6",
  "key47": "75VQTjxUyJqTe6a3trrJC8s4NcAASWsACGDcRXHd1JRNRFeU645GEfA5YXmrkZbNdnDuima1CYE6yEDfAwQKi6j",
  "key48": "4MASYo98p7KbfgMNo6ph35yjpFgLVryEF1SirUiN6sFnfyMaprpeLFMFAXQa4NuD3JDvWtP3Pe5R5MwTHdq1BDfb"
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
