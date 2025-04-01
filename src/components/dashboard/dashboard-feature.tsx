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
    "qPuzV5z7vi7JmzoeHpvypBLwX9GkTkknwTjmkxbYnSDRscp5Jjp5W6B3j7M5zhnc2iQig8r8Bv6XJadVDJipkGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VwL1kQtRQgou49nkeVE1MTdk7ZgQWjrx1f6GPcjDGS1htzN4foTLHREMEbB3bEg7iyfqsxxgXgeJmJhfrDD3coU",
  "key1": "5ahjGD7ZBVohBFP18DmEULGbK2REuEsr2ra9AGZp2hUHcjc7XgBZXu2NN6mpAmFA3scLnHeUqQ63nPRrZqSvZfVN",
  "key2": "65dxMAghPi31jicp2ykQnShe6TwKSjuJFssML3mHkU1T8WcRTB9fEJ88H8JRM2Cu9noAHkgXaB3MFyMV45sxeyye",
  "key3": "4h7jCtRWnoZX2CQpXq6YBuAWw4unxbvLaDs8RM72BwDaZ3oL3atbLrCcwiQri5hLE9V3XmNesJR2U2MFbRPfcCEG",
  "key4": "4EznXuEVTwvzdSKmsZnLtBBxQd4sX3noqopkk74CgzNMmnWugcSageCwKDMdgJT1DECcuWvNa2FyN2a4yR6iidX3",
  "key5": "4tMCWs3c75Y67LESDeKg3QFTjUPiNaTLkEn4A5ZzHCFH3pnx3hDWtV76n9EupBDCCCKcSMxRGXuzf36PztUqLQFk",
  "key6": "29uCFzJLZXwquX48Fb7sV2PspGYpbyUaKfot4t6GwwN3gyVpeKCy5WZpNYhJ8fK7dH9r5K81AxvdVbHvaTCKGjzL",
  "key7": "t7Hw1M5swDDewpozyShL1xfj1kWuvVNzFD2Ni426AVvbG9qt9VkXk3XDgwE3uRYLVL4VHCvg5GKHs156yE8FKgt",
  "key8": "2H99oSqhsQYtG3WZqZPxS4FxUmg1qfnypvZofeTuoQj1kZpzaixRFcoGBnorpJC7dQLJCGyKecR2K9Y8kXeBUk9h",
  "key9": "WvCZkK6tNpuoyeUHHMAyiwXZecFGuhLgjm1tfd34ZvM3BNRQT9LLeburgBufKweRhghk7EVLizJePnrU1P3Seu1",
  "key10": "54BKVuVguDQwSrpD34rG7E6i7U1Q9tfKUFATqMVgwaLxJpEpjENPaXYAq2d1TjnUGiKwTcVwV3cWEc9BtHP9kmiU",
  "key11": "uUj4jQdfgGhi9dm9q9Ktw3fBkdMamNyaVRyYSoPTsE1GrEQset4LUhuoULgA1NN4chxu2TdZE7fxwaw1gnmYSwd",
  "key12": "2VixkxcfDvcH9hRHEiv5SpKN7FW47bcNKeALqoMQzHZHet6LnCmUZHiuNRpz9EomRZbmhRWGqHWyP4vaWEDtofgA",
  "key13": "5eMWoQSRictFSdzcu8J9CmVswFUzdUW6M9tadyk1mPbZcvAaE6iftH56dLcymWUsB1QQUkhzgVwCiAEpL4nsKJrc",
  "key14": "2uoWFfBMPG91f9Npi8rWR4VxehHLK8dMDFZeasRRtUM2wJ15ym7vZcnmPCbGEKC9Bj3xkPdW3rf5qivHv5RpWfJY",
  "key15": "51rHY69QMrLkExjSfrGUgd32p9i5MSKqVKKF1wbKy3XjD81LXjwp4H8M81cTuSERyoVVh34YpK4b59BedgBCjRWi",
  "key16": "zKfvaq2YNSnWim8x9AmnqT571qAK2RGW3kw9wyGCZppCABEGgjP9crQGB381xtfqtKiFwKrTccxUWtQ9baGgxsa",
  "key17": "A5AD3feaqJTtWQKRR6ryWjeosX4tzMGzbzCSaDkFDDqLFMKkUJ1Bcu1zwkkbXK1M7shkXNZFox1BeC4wEHDbmrR",
  "key18": "4MLBK96QBfbsUBGa6eijYFhuWxZ3VQRyzTft2YYwMbH8WjSnPMbjdrH6YweDQCHqayWKnhMeGD2ugjh59BPfSZ7E",
  "key19": "5eVoY4QABFoYEYjvVfE7ewK1KRMKCSRDpWv8n6nRpkMPg83gacvBxJ5H1f9WhrcqppSst43vxr4sLbtThtRexMtY",
  "key20": "hPVhBgvW8sq6qV57Xo6NtFaR9XP8xNpdhw8NJbVqQGPJj4pd1UQ7bPN2NdsjRnRdUYHqiNAzsF1xUy8eswUviTp",
  "key21": "3W1L7ZBeA8sDh5dcEW9s4Zq1trcf7HEoAyDn9Jyh4v3WpMvqoPDfLBucZzwmqERgcnbPpKa41dR97aDF4zf9oaWB",
  "key22": "5517w9N64ZPtaTmrwfDFAxs5BvDUiVxzxHj4TUUbhKTjUTKFk5h3KeV8eW7E1tftqhj6bT9FEnm3HFQWAhiZQzHx",
  "key23": "5xQJZaFvmyrcLW7CyGRDR8orNS6P8QjrS5vnxrFYiFGNZFk81gyBJmivQxMyD1HdXrtap4ZUfzKMnKaTnsRDnXy2",
  "key24": "5xqE1CVbTxJmaEtdXVKy5KwWLdEQx11AXyKrspEE5cSgYnfGNnWi3iUnBJVXFQBa1ViatS3S6FCX18S8xg4s8xaz",
  "key25": "2WYiT9FjEEvbkCs34QFSxLacnHTEPSJrj2g8paz9BuKv4UDBzSAQpsYbPGAWhWJXk15fr9N226dMRRAuggQD3Qbs",
  "key26": "2KEMMwsKGjT4wWQeNynJ1sEw1jnAZBqZcbhhiPuS3a6MERAoyoM21VWhT9Qu3vy6faq7x1vh3WVZmPHdMQaFrDzY",
  "key27": "2PThf4TH4aVqinvHZNX3ayhgrJSNBvVcodtLEbVRxgKoMrQDcAe3Fqtu31k1Ap3kWg7fNPiyWNfB752T4BXbGsPp",
  "key28": "4JfALqtm78RPDsPyRQ2AEouMWHkfPXaobiH9mk1whxPoCrFvaaK9kVtLpMVkU6W4F7tTEMHwfYfY23C4j3afukUc",
  "key29": "5RKhLjXU1EzhtmCfFS2jPCEzoWT8fktu8yKGodW4826m8RY4pJ4HG4vmzUQFZhVH9f2LyHQ6edNXEhdUv92sHu5P",
  "key30": "3tX9z6kzeYfmf7bYW788TzDa9eJYu46JheX1QQyYs9FCDXAEvqeVVa7VsKyYT2Gg5topgszeYbtSgKWg7jGRVevA",
  "key31": "5jUsLe9o8WM44d3SyX75mArmSrhkuSuYsZxmoVQdjMYFBywahibtsg7w1Vwax2cyU918v2nkJBuuNTqRMV95nfwa",
  "key32": "2XT3LcpDDUdw2mxdw3T2TJERdbsZNvRXbG8QMwymRK5vmLgBNtSDvnDRLe9NoWNcGYfnP6rgpRNc1QnuqcLnYPS9",
  "key33": "62iJ6esp233nmNwnCx7KGqMHUrhKLcBq51chgbLQqhg7U2inumnwd7Yefj5gkXDUT1dPgVtxf149QsvEMM6uifnH",
  "key34": "2E5VssCW1AnDdFvbsUbPbzyAKgqVoTVEKFNCB7NYJBPHm5U8cHbQyKb9hm14KoY7oCjTvBRJzqxw66KQVLsCMxn8",
  "key35": "2Erf4MeHKMq4Ruw4uqyiiS3UUkmdoMrKJjmtJCUWZRA7ba2ucSK8kfVXqidmdo8782q8TiZcVTqzMzY5VNVfsnVA",
  "key36": "xQh9Do1pGvdGYjbTN5nB1o7esDGXt2CZTyqEPG5whrzJqkyTbBzThavJTjQr2dmj82ejYbSwfpPMdCyQTUfX2sg",
  "key37": "3bjQ3QnRk3vFK26nm99NzvcbXRzCKZZDaDpEYuVLCe6zfudTzSkD9b89G9Rg5jjBRYpm3jqNUhTSrVnSmimVTdyq"
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
