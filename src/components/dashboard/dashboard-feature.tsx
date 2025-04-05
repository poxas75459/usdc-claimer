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
    "31WC1Rvv1kJ7nAnSqcy1txFQ3sr9frVQTe3y9FGxAH9oRVxfLWAAHeHoQNK2E5dfoh9RQnoPhjw59d6KAqi79YHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YaYBgZCFLmq2exxqf2PbUWvJbZfobv2dNdoQ4VCJ78Uf8Nvg6MScC11FSA9Cf2jxQEzBoY5FtJ3i7YJBd8xtfj7",
  "key1": "4p4qAkM8BFb9gSxdiPqh1LBVjbn4TADWZMnXcfT7GTfwKJzjPdivsP2ppzzhv4JoxyEgNngN7tfGJ5sCXv2uvB5d",
  "key2": "4RtQP7bRtWNMwHaQkRnKW54gMxG8mH4j4DHFWSBrWjHAUwyHQt2j71D9QSJjqKbiJFopFeRRuRaCCK5CbzrPCNqC",
  "key3": "31hBT6bHhuywE7vi7tcj2m4uzDSXMTEF6Y5j2cPuf94iQdkLKBgu1JMtzJh3fDUk32XAaUYYp4rsko6GP8mdGsjS",
  "key4": "fbJd5fipdVW1g4CWUmbKJyuXx1rfqKgqJQcf8q7d9iQ3XSMsRKkUcd428tfoyX3ZtbAsu2FTrFBvopJULho2ZwB",
  "key5": "5E4foLvCNH42vSuRvqkrrQJK4krfguaJVq2Y1CzLWkmogoK5kmjF4wnDkMnL8YNmHuxe7SBjHAcjrWj7AZNYs4nP",
  "key6": "5p5xGhHELth6RjAVpQAauabfFjrfRcgZEsGjv8MjzRkYj6VoDe72NVDriEaEMngpCTKe8zvMyhYF21XS8RC3cTyB",
  "key7": "5Mczr3ZiTDnbvvxhWHp3geFDU9AseerDGB1faBbfRTQHByR4i4CWPxaBzyEt5KBs4CgGDbvzmqoqYpJasKLcqHJJ",
  "key8": "4xvfMmcQPc6ufBXuN3xBpYmPSKw7jkV6hrqWqPBugv1RhwE8Yj8n6rC8CtXJMnBmCmRFkngtKCkG7FRfgLrs7p3i",
  "key9": "2J8f2zVUGpYShQ5BH3jM9n76qzvE1G5CY3SefmzdisVUBUiQMCADvoT3s7Tf2ckKP3dD23fcyyYNnrhYa1KDhCs1",
  "key10": "32AfqrZcvhC5dDjX28DbBx9jGNJHMbWz7BgjEAfiRn9PXmAw5hBCEm1LU1KmatiubL4vBM36X12wZXHAs3bFBsqo",
  "key11": "5QUBVbWKRAMoysY1KkwWx7RkhWt3aA9LTTVnFWkwbMtGecwzdsm6LfAaKQnZGC7pvWi971JV4xTYyRX1wZ8UJe4k",
  "key12": "4JWE6KofttRo4pfXy22mVVmLcNDRMAB41Y2A1cne9awU5E2XJX5fGUzeJpenjr9SUUmdst7G8BK7SqVfVuAqyTu7",
  "key13": "4CUHNC8UqdayNUjrrYguD4xPwjJGgA6YseVZxT4kGzm9H7mzojMWvXePAGAzxqWW532FaCEVwuhLDPpXH2BkWzBa",
  "key14": "ni9qhQ3ayerD5r3hHekWqg9ZMuFu4heNQwcZuVtKCW5ceJP4ZEfAVxPcAUtz48FKet6tcGTM5W9DbZT9PeCenKT",
  "key15": "59KBpPZJvm9KRd8GsnCKhkC6zsnrwgkAEua7uATcGcJxHVP2BDtnZBV7EKH3sC5p8AzDH88hvtPMEe8PpumujPR",
  "key16": "6Ah2UGyEnc3UEYXyopEaaazAxXV5MPceZxxA2UkiBrrku1Zrovuqu3HMp9TXcy6ff9xZi7kPWJkNswXSqG6jacS",
  "key17": "3PbZggQb3kBTBTVbryXaaTpH71awaA7zJzTfzP6R9zNTGa3Bd5jvNVmqhooMdBa36jLAcCNb4XyvmkWXxWqzFu55",
  "key18": "51Zk9ChuuPth3skyDxFrkBZwVknbShJNzZeiq8bFVBJJYciYsbvzeM3F4KKvGVRKuNiUZE6iLA2VrFi47rJauwvU",
  "key19": "5YRTkAz1iewfTzjCNkRwkeBzSzDVqxSc4iZEVwA2DCZsEeRX2YWCGKV2aCUHUb9n2bZVWJYfg9X82rZpKc3pMSZp",
  "key20": "2EaZ4MN4Hb3aeHzQ5Kx9eTDZxYR6LTojRdRRhCWUc63Zf1LPPTX616PsymPDewFD3e7uCP9LX3UcShTh8VZkzMa1",
  "key21": "3rWs18AGiHQdshWC6BXdUk5ehJvA12ekWd9Fg3dxQR6WDbxuwfVjpE8BtwG9rJ7BSpccUr7J5j2LgiwEBxXDexyg",
  "key22": "35vjqqda7PyFpdYaz4NYZswgRR7wrtwapXBU7NEFvqfou3z2vbrz98cHBY6pfwcAc8PEqkpUHb7HFdYt352W1hA1",
  "key23": "36MCkdjDqPo5c4CKdKxjRZExvGVcUVrRApvoH1daVZJTcuZiY2ffkPvbiEQje3kXzMysBNGAE7EVjPpCHSh3DdTz",
  "key24": "5pZ7nS8DavNvdxDre2mcNZP8PPNcUqjoyKRQo1CVyAJ7sXM86dxgGZZD1DUeaDRhWu7CtANNjDYU9rhUnRMkcbZR",
  "key25": "3ogeRkzRFF49QMxbSEf1koqdetPRBTPw91h6uo7K3LcnaEwCBqbqEGMvETCdTG8m35Eu6TZXTyaTWaWpmXKpAG1V",
  "key26": "4wBLQpqjxsKTfwBzDGusY67aPA1pjwGwkcWru2KyXADN1iUY8Y274AuavyJP3FdRSjKsqv2dwSnVB3HoQmgLU7Hy",
  "key27": "5p9YsQ2phxx2r7YZMocoM4vfC6Q9J4HQZnBQkFv2UXAXs5gtebjXm11NuyuMerUrp1A5W6VeNQxDVpLNbF7LHfEZ",
  "key28": "Yi7ffqpyqxF9LYY3TGi9nknoXhQgen22HvbsaXmoimpTz4NJxp47dDbyMpUQtYvhkWnJ7ZMWygyRbMzkZzxwdkr",
  "key29": "2cJhiFNNCkRxmXETiLEC2HtAwFofmAjSvrBiyao154YmgJ2CbKNu8NFa8mAah6wYgrEmQcVAHnjvatwNgpxZAVA4",
  "key30": "nD9PkBsfXwiAz1pPM2meDJdgKmic4cAZwvCX5CRvmudQJyycdWK4rnTEuzqYvQjbvdFe3KviQQ4k85d6SwerDwy",
  "key31": "2UR87UgRXmSRHUzQwVE1drGdsdDkxSduCMPdG9tYnrPX1VPiQUgt7DLARmTR7qq97HB5515ixWwESfaUKLMCEg7i",
  "key32": "qsV6wx89S3sqfpz4vpnLCL1moof8PCJLs4uuJ62ZLcnprUaUdhFmjiWEY3Utr19A7yHWECBEDr3UjKd4RoCLvHy",
  "key33": "3rAShfNebEndefU7RKo1qzVtBEk2vSdChBCxXNcbgcd4fPwFfz8YCWLYSwPGfqEZ9BxAyEFVphoZXJKBJr4qJA7e",
  "key34": "27mm8Gkb2GTgoypdHDQu24FuokEDHtYqhmx2tYtDxs4S29uPaZc9aP7AN1yiWUuPwQRrQCHn2Bm2aZgWnXrYZBMY",
  "key35": "4XMR5awhCAHumXHJMSDCmAUMZeEuk2PZ7xKCkUBcuPvgHruFrb2kymhtzzEvREbHApruZAmZr7HMtPbkANcntDNC",
  "key36": "6666KMDFNN5jrUzAdhNo1BQPb6kkNYLjp3VpPHhwgiBWLnZ1DtBdYyxPQFRnfeUkAqCBcafkBZLWVhWahU5rty7x",
  "key37": "3ofDkt1mVHZuWvCqHyAScuoYEsW5WX219CtBU26zsDTru3tGN89fdrxRCPcXm4ep6CeXpPQCAyiAiE5g5c2AZ6B3",
  "key38": "3dPzuMJyMFEbQfSAmLF8rxrNVDg2PxEtfUQL5ufMLywSUMNbif9a4rvU2pCLbeUboirtdEqWuQmWWe33XMKAt9DN",
  "key39": "2N9eiaUpAfMMx5AWHQATXtoQHGoNeSqBaPeaReMxMs1jkBsJK6HrkFBMPdQ7DozKAssgF1nEDd2uDE2RskLaf29V",
  "key40": "Fv8Dko5vKHfxNZRSX7otQ4UDroWMFRhJcg7Vu7uaGa7XWWuX3eDUcN9W5xPDLh4BqUWrCiu1jMjx5txKUucTprR",
  "key41": "4VSk1FqtsC11rVmvCNZDzurPCzgJu5KH1MzGScEGwfbupTa4B3K4po63sofdsXomrtnheNS8QyKNaQkRV13usVhs",
  "key42": "4LGPgKJ1jreGSALduDF2B8EzjU2wNoe5feKkFY2aQ5XwFCuXdGPPWngLuawdhsnwbrAQRDUUs7jyCSiRJvjYZsSu",
  "key43": "4JYnHi2kpKV51MuaHdmgG4uHjqyDu7q1XiP9zbwcFgRPpnsTL4YLTWF4B8BhWXuZ5SoN6SGVjK7WSsHtHmqeaoKa",
  "key44": "67Sn5ZaXaR26NH7KXtaHXTTmyTDW9ThincZ2bD3qTLbA4oMizud8jE4tBfCRbKRsBCU8Sb3WhUrgGapHhNTSUkZ8",
  "key45": "9TsZVCFC87VTJFAEuhzdxhnmp2yGvyLnGSX8gRyjURtxeNGK5P8W7NVBjrB5nwF9xGSzvTaJ8SVz7XUwdPAiec1",
  "key46": "3duBY2cPmowmsz7UfoumXP3Sh1oxwkhik7c2zMcDBfd1ht8dnNgS3paWyCAUN8k3zSrdGUN3fJ6W2QK3chyfGEbh",
  "key47": "66Z2uSixbmQstXwgKChJiQAzbAdMQfa4hcCyhWhCmCtgtxMHLRkhfPsmZrhAqaAeuRaLGjEhgNvUsmZwhggU7k2D"
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
