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
    "5V7ivXWthftkAzoZnVSHmFfdnfd99LjWnPd72Ko9Z4zWFGbCmeL2tFoW5Z3whjQE3HnxcinY3j3X894QLizh48qC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wjqnR8sxqTzbmWYUaVTrr6dfrCGwQFaT1SSNaCou7b8hqjfa8vf8QzUEyyMYJi5cqD2PbB2CcSDqzMQh7QS1bGQ",
  "key1": "QHnuYVDx21RD1xJx2ZaqgdDCMZzGUNfUoY87FN6HeMEzuemcW6GnNJPDrmi4kSiv6mnbTfHqpWEh9jH8W8TqcY7",
  "key2": "5xfK1nbzwRLDpNFPKSrtFwJgyz4rsnSPJ6jfx7yAmgJcVrN4HQLy6Ea5JjkBRM8wzDfpC1ogeiWsVg8jNrfjkvzB",
  "key3": "5RRnxeykUv6gmUYsPjiiUXWy2Bpm7fsf1EiK8ZpK1P1d1Nbbz3zbFAhjiCmR16mfZM5yR8FNKFCshDG87Xa7YfKX",
  "key4": "agvJGG49JHY2gKpFJsDPk86ALoQUfyoMvdpdDQWDi5co9EYzdtiCJ5EBauBL57zqGSADytF76sUuNhkA5QXfhND",
  "key5": "vN1EMqLReFWiUPXZfzz5veRZZ5oBGN2YLRSnra37wssnmzUNtDioFJ9wFaJsCDWRHzSYYUzRxpYDDJd8vUgz4BG",
  "key6": "3Q9g3Q2kX81CZK8XUUeeURaNKbifpBTpyTd4puSExEu7T28HPpQhpi4oLEYKeEGbXzG8bo3JCEbsBq1CGwMsTLub",
  "key7": "2JJMbRdFHpAoWBcdmcsUM5M4p4eMiFHJk76No1VCzphvatcWFjkp5uytVeRZ7Y9NAu5NEfVuirmjf82zfK8ydhhW",
  "key8": "Wt4NFhYU9KjGwrkdSNDdXhBL4jtwVPNsf38A3TU2EcLiUt2SEcJffDKTmXbYfrrpnE4FkZg5YxtGuEiFRhX6BFx",
  "key9": "2BJGMx7fXagof52YnBrRKFUqTTy2Q2rHgcgoHrEPz6H3c2atzKS8VF2U8gNZQWYy8PVkMZk9kW5LcczxtLwxQL5x",
  "key10": "3SkjsmEM9wucAzJAn7onYhCcCqPJ8SD55JuCy3aBTtW7abbcJmJ1efTFih3ZzehWVedmTT4cBJkhba4xQeXDXgw8",
  "key11": "2vc6uLG92JiZH2GFHvEEH5P5AXr5CNjsnfEbUyhMj4V2LdeqCtedgjwjjtxBNV87869k3URz4DLKhKMjtqFjyVEj",
  "key12": "5VQi5CvPbZcvodsV3oVDuQAVYwr4ijXAgc979aQrPNBYhFbP7WLcCh4QJcYfW9JLDPk61knQeFZLYTK6cY4gn83n",
  "key13": "SNrkDqo6Eh7EzG6dAfq35AthfZofYiUWNiWjBQyEQ2bZcCCTj4TnTJWxJ9V4kWMW45TAGosGq9co2crLGehQH6q",
  "key14": "38yP1UQpkq11zV64Cakd4kNVd6296R9iqAXUeupWJkazZJs2RsM1RqC6KY8t6sihu58rkecFNeRfx7CiyH4R1wVn",
  "key15": "dju8PJy3MYWM5QAhmn4MQ94EkAFojYtp72SFPq1ZMQSFbUbTneLx4p2ibuY3zJD6DPzs9TXGUFhUaHMihtuf79t",
  "key16": "3GQr24QLabuHBE7fYTyu6C6z1aoBPAMSm5wQoXPTeWcqQvHYvRVyuHvXA7L8zaAQ1iRyu6zgghg9oeCvhBpXyx6k",
  "key17": "XzHDNQ87mzv6cbfiAJPCYoE3b1QYgTfuaw9T36DXXz8QdyNp5m1nvTPSnrW3wVAt3Bfz2JBKMwF7ScFc5ygFTsf",
  "key18": "4NqwqBoUBbchUxiGGxA5UQtyZGTdc8Ne2nfKb3sdDbwLUEJYQtJ3xLNRDJkFpfxnNtzw8rMcaS2PKYEydQZHLPy3",
  "key19": "5TNreZoxQjwpsRQKtH5kBjJ4enXBtQgVD7c9SwVGY1d9wTQpZhf2oPMgoFaSgCEBGht9hFGE5eDYTaHF1WHXmK9i",
  "key20": "3KxGckpFfzMz9mRfyRLfWZyo135qwXSqbTspHwS5fvd7ShQv8p2Vup45HAMm6GLi9k37HrjcakYBC94B75Z6EnN2",
  "key21": "5CnZMQpGcGQi7zxJXKjc6SbC7b73Pzkc6dcc5Pnhy9uoFRmdcr65LcBZXNmND7kHEjZk5bJBAuZTHALSQCZrzqLP",
  "key22": "5covn7TTgBFbmNZJes6jA3YhzdaY4eUm11GUq5Gf9eN6hMXsXSLWC5e1gipxmCkvcjL36VdcxzaWy6fpomhLHtB1",
  "key23": "2XVde6d8oFu3MYyjKVCdWKWpAkuC9Tc3PamXVK3nWJfsh5Rz2hdphfaEpGbvDRM2m7E6mcA9EqMhmanSymgFDQao",
  "key24": "66diqYhqPKrUb5qALuL7ADTXWNVjHqE8rXY1gnXn7ot1QcP3fufnJpV4xo6sX458UV8uQBMbgp9gXLj5YqW19U22",
  "key25": "4u8tt8f2pxmytQsBXHifWG5gAQdhofhRXtqqSktNxB6VvofSrMzDzxV8rkMxHPVCg3KryUJTFMqXhkpSnoL5bdcc",
  "key26": "57pHWNdRUrhNoECmNtxj5kNk6DXC1MwZMusY4Q3e98VeHpnbrMLGQmY897H9DYu37gjR51eLcRWh2pfELvLnm7Fc",
  "key27": "5JtDY5cJuQG3vLVxazqrwrZtYNm2K58EWYFQzWEA5EAoHY5UoYdcdx4LFiuD2WWqkjs7vsCMLVpH1UcUifWNwRLu",
  "key28": "3yLYsN1sLBvPJ4zKePYUM9NQWeijYQx5yLRQB7nBCKs7RfpoTb3Lwh4PkUmouB6N7oJACMQVSvyF8Ga4EfWBDf5q",
  "key29": "2Z7DHkUeuCkfuxbkEpHqQVbYYH2sKJSX9oQqu8HUE4ooJPiJfehGhGjEg7i8dTTgB47V1kDSr5WMT6r8HdVof8Hm",
  "key30": "4dcSgphjQnUA3sHR5iB7X171hkC7Ltn8x7FYYfiouSZAyTeGUjzftLCesBjMFHzPqjtN6Ht4wZjhWEARUwxfW7UF",
  "key31": "5QNUZepK5jwKD9DshcB9ei8ptMssKxrTJ3soVzppszZKNy1mcH2HJBeFE62tHwF8pWj8RHNEGMbmCYfvQvJ5ZNaF",
  "key32": "2QaPS4t2BAJvLVmNYvWLRYK8v5zATWQbn7UenrNEKf59M1YhbWoKX8j8uQjHsbqJLpSXnc2xV8Xy5hGenRrQP7t3",
  "key33": "fMBKBqh221CXuoL7mcMjsfr8PuVkSxbdtwCfkFHcH9zrY8qemxhjBQjBv6cEhnKFtJbrmFEhnRvzQPaE7aYwYWU",
  "key34": "3PBK1jxgfFYhWvq3Rf8P9NeqHf2qmhXVaZSr4rhZFp16P4iYetD9tnj5DgTyVuwr4P9REqtwcxnLG2KvGySJ7zD3",
  "key35": "3HZZdvrwECLLB1KUeFEB9U4c9g8bbkmfHX8NvcPJ9PPYoNXCjrh8rMBqPA8vGPfFxogn3agwJaRtbbkrNq4S189M",
  "key36": "4RQhvXkovaAkcXw8kWYGXmDf1tGfM8TPWhpF7XFZXPmqhLEndPDpvoenJwcnBon9AF3n395JBUwXvU1YxqtUqwRc",
  "key37": "5DjECPdSocEbN5BGogJAQws8crG11DNAeHphzbA4YSMiDQLK8Yg2XuYpsLRmGiwLWWXqWwkfahr3Rv5gZLskCea6"
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
