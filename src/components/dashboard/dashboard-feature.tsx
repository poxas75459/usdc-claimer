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
    "62gxYYTVJ69zUgHw6VhvU8GQX3RhekZWxxa9z4ASMpDAqreKCEjoJxru5tsb791VYoCt3vEi9UBr72GGTwKiedto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dNEtkq22xmUXE4hMnid8J9dMK2qCDfvGoLBiStFQ4GZ7n6663q1tkWqbCoy49uqEPxJVeFHKTEFdXYDAo7oG3X",
  "key1": "5QanWZn1jf3fXEGSbKvH83zkU7qx1dvPdaaGAcEwWhXURKHBNYymUQdRvUwM1PeYWyqAWd6KoYFYpcps3dLKuhSV",
  "key2": "61RhYx2XSJ9udhn4x9C7mUXVNk8H2U7pHrzwxDzgXaRJZ8gg4oj2FNmWBazZyXQn5w63VuJyqfqopZhdZARLuhLZ",
  "key3": "zsqe33qSwXdFEhjTkKLBQ7Z62MmKN6vAaekBXmgRhxmxzdhFfqbQQA7dwp9a8t7MQrMb7XheH6wY39y7JW4M5ea",
  "key4": "Qqoa9CLvbyQdTKtRazc3Kufhou82w295MUoDz4XY7HsxUpLUyFCDSJagK2y6MzJYHqxxjtEApJPcKBQxab2njQ6",
  "key5": "3eZYGKqYiVkPKWejFTq4k2G1vZpYVtkPovne8aErXtEyVWwHq3bPSBdeirVuD7CVPa2EkLtPCZS3ws1iqeAymwCS",
  "key6": "3NQ28KDDMtkdwEH8A7H2aMV6tcLST596nvQsrRkM4YXofEDVWtUoQMpHYevgDooA5BzM8bztmHsr5jWpcnAxR83C",
  "key7": "27CbrCdDRr26eJwcESDFGpFK7PrCyfcVYeytQj4t5oCVgD8b9XKd8cbGD8jc79972odBdfvzsttR7RRGNvibzjUq",
  "key8": "4GmjamRF1bV7ibcCyZjzKnhgWRDMcYbCRB28icT95qvNha3zHtZTqCbX55HydECK3cxiWfrwYJ3mXJiqjyWr2KnJ",
  "key9": "2MU7NbZY6bpcA3F2wNS87wKd1uZ5SPJFuhpBo4iaEfZF7gvddvJDFHvo5iuNuitoZdM6xkLvVN6ZmkwTHwWurjWB",
  "key10": "2iEtFwQZihukBSm6tqsxS1PvWkzXjCTQSjPEYuNm4FKnYTi1cbtbJbCgNqoh9VcquGgcpgG1McsEqFUj7NkcDgrd",
  "key11": "2aEb2xxzTipQFnM2dPLetDXfkyMkfJqEi1fBRRY8E4i1zPu2cTo9KgYqswTLUTCNCsxm49vfzEZqKk3hiA2be8hg",
  "key12": "c14cqGhgYG6tyVdGWMdoaSMVcttcDUmmF89cDi2zJvzxMSuYyBLM6zpw7e7X6ZTHkjpJui4epFH8DFhvWuQggvi",
  "key13": "3F6ot9n6LdZjb4UMx1HPcHdzsEUtUeyAvyG6MSbUoj41NBttL2ck2j6ys2jpAnXrb5wMkPAvB9CZnewXGdjTc7zA",
  "key14": "3pnakutcQixqMzZsr9x5HM7i6Xcb7H1cBU8Dk7x3EubcTkQGu4QnK9En8xMEJfmpG3m3qTUcCuQZeMKAnaQt2ymb",
  "key15": "2yXiwvooZNmAdNv43vukLTDxCWuiyLe5fePt57fD7ANCbh8MrYrZ4725YVwair8sv65wdorBeBTJR1AuaTHqiRbd",
  "key16": "532khwcYs6wxeKDWoiWZsmoKsntuHUSTaDKCRib8mugCfPoA2ZxH2i7anSBxmdLNYFHJc7MgnN1oDqttZvLwoRqS",
  "key17": "2fXbN3GxLjAQCZts7d7sTUUi89jYCWeUvjCncXw8JAhsHTQgsZTavEPPLTEtJjKxoDbnCB8uEfExSfHRVsBx7e8z",
  "key18": "25ibWW1q9Qp24Cgbu6BPserwBy4vpnbXkTXVkumZfRrTxHAxoms3mYbYam8GjonApSKhCwpH9tkEMPvECGojQCTV",
  "key19": "4YyYYFx1cgpYs2DUr431yYwtAfuSjAfM2bvf4hRxsbJkpmaGesxqsx8x5NRuNdUcCnxJBMfibTfJ21PvnYhfhtko",
  "key20": "5hiVaVMaECDb39gtEu9npJfQvK71rtNf5JQLJxViS7gqKMXzNkGTMZZoNUn8sPuT3kAMtPDh8SvqXapSJRE1hPTs",
  "key21": "3aZpjjvZUongzkHJDoHHFWTn7P4SUnQX1LN1Nysi9q82CcRnUmWoCtDSsa17gBsDUTxZaX2MrnCZ2mrqSetsCYMM",
  "key22": "2yD656L21nfdn8ES9Fowc2MrfVwDPCHhD6uCoPduWcLXtZCPPv5G5wHmUV6YhLpdC3u49CjfDe3TnZqo58ZtGN9f",
  "key23": "2ytbmzSFcKaXsrcucynJqgdwZBXrHXHZiFDuhttZmmxT2923o2Cqix8bTHrDmGeJajtYv3WhZGnefyEMtXo2tmhc",
  "key24": "3MdYWnYx8siQT8uXt1aPGzzrJvA72dmLwiiGQuEd8PX1fRamgiUNt7h7T7NFe3KAYUFNF71BZ5GBh8k1zhxT6ceG",
  "key25": "4J6JhX5dRTieUgsqrCWmSodKVYzFcHSREf6LjbRuqiBEqg2trjCobdnCYKcngE1Kn7UVkeQEJXzN5kZP2GejZGwM",
  "key26": "3mv79MRrCpyHp7VQV1s7c5NibM8NScxakw8LGM14oQzcCjTfeRVxRbmvj4VYPFNKi75DcQ9QFEgtWNMdCKHcqYb3",
  "key27": "5pCB7p9TNzFvX4PZWbK4X4DyPRHEmin9vLUDxeG4ATvG75pKBXaJpAXySuSKGQr76BFa9eoj7iNwcNiZdEpWkcSC",
  "key28": "4q35ATehy3qRn7gHsXtrxbQaYXtg89TZcxXZjQdUW9GCvAostF9ix5Y6EZQXsuZxzMEVDeaxM19wbEKvxMEP16k8",
  "key29": "5d1W68hbA37vdXEbmrd2M1JQHVnmM2Qn6moBHsCuep7U3EqVF56fp5AGkYjFBnEvWJEyvUJYBde8RJKPTmWtSk4D",
  "key30": "8ApGQ1MyAQXeZv5P9JhySnY3ofcQA9YdjE1qRhtFLh1RNjiUaCv3VgYAJ7D3iL4tCTcSssrYXrBspQVnUnRAwwJ",
  "key31": "21chrBSwcbNhMRPDNPxaHXFTgVwXRY4qqRLDs6SCjY14aQCsG2aJGvPkTGzTtzz9cYTmhvXPCcq97MbAcTf6Qsir",
  "key32": "4kyZbFzqwYjR2rHjdfe7PHeQAshiJXVrhEN47JPskhxXxKMJPyBQQBLgShMWxmDL8xWe4nxXBQ2qepNe59EQEJwH",
  "key33": "3k7jsveGsKXG4TKrmaLtzfTeuwXtYAcqWfHj1WY54XKLx8G3jz7ru7gqhabcEsaYiMeZKURQs79Yqz5XrAkcHEVs",
  "key34": "LbjdsPW4mJwqNBoQjQMkkf4ZNJPwhbUtSaVwooTE2U6GNUvJtHurpuZUrzEE5pVu3meoon7PHJGZPRktPPev1BF",
  "key35": "2kUSYMW3PLkSnwVhhLUV7YHjznmN3UPyXoe6FRoB6EmuqXnbfGxU4GsPNe3cbVSE6gSMFUViSXRGipUmz8FPzv6B",
  "key36": "5EN1vBN2zQJQDeLJqBHjneKC2ZTXAM1W3BSQ6dHLoEc2hfDcmpk1Nh4mSdFTCWdCg7avpFt3nxJD3MYvs2RXrEJE",
  "key37": "eh7abLwC5G7umejt1mdqbg2bc5kRinQ8rWGdawttKWicvyzwHJjHNpfyFTrBknYXb978ghhSEdj9EAiq1c7XYPi",
  "key38": "9rhPfi2dBwTM5FKDdKHpRj4q6kAJDhokgAk9VnuUV9LDsqUC2Gse4scnXCyBBK5gLo8eHzFBNsZYhopS2hb6Wkb",
  "key39": "4EuKLjTsxmWcgafCXzxPs2zP3iweB3aF4PHsPH87KkZEgvbRraANs9n6JeQwm1y9rvGkk13HGpGXfdvj5eVz8tsb",
  "key40": "5z1GA16MMg8MwGiG4KJrqSe4RhqpqGbBTuFnWs1dhfxwPmgE3kmowsA4BmzeQLPdKSz4QE17kLYh72u6oh66ENeJ",
  "key41": "4Ravx2v2nxoJaCRudAtFdP4pMUVR6HYUf6NruEHWbZSTP5x9Bnv8rQayeijUKfomTcpzfox13Pi9RV4VQu4bLiQx",
  "key42": "2vGCqDqXFNCS18nSXLXGoutxWiRQsQivAigT7K7CbZLg58rGQjW3oeLi4HXrzQAxborfwdrXbUyhCjQxWcKZboVY",
  "key43": "4EUCNrberC6k9Fi5mVjGFfnh5oaRpTLQ6Yt5XMJrmCnzgTfZZ38H5ZbWURdqVBPbdfRokV4wV35JHBi1nu4uicTW",
  "key44": "3P6Xjj6aqdYD7Jq1cD9uytH2TwtefpsWWeHx8ombEaWbC4cPUX36PGsHJS8EutRqXr93qcndGbXQ9fw7sLe27acs",
  "key45": "4kmZyfmWG8ThGkeiKSoaXvYWq5v99CreYy31Do2XfjRSCjDxJXEbGZDqN6GELGhjsyZSfWRR1vTqkzuU3wxmWThP",
  "key46": "3mXTToWTSNz1yGTZAJgJqehYUdhHbWFZvEHnXdDL4B3rjLWQnDrmKCKTvsJozDD4X2NeQyZKNCXsWQSE3aXoCqKW",
  "key47": "4m9jKQM95iSTLatCgxZni8HF3sHPdWp9yRtwZq1ANpWwbwHEcKrais8tjABqDxaCji8VdTJ792JXwtYFDzw44cLE",
  "key48": "2bMcUKZKqcpSf4DcHV8fvBmkSYG3QhxBWCVmvnPaicm4UB6uT9QHjUJMjVPpiUYxasHdx4ToSZeXYFg9ayEvTFQV",
  "key49": "4foQFZTDbcuzyxxc57LoMJXNivPGc4F1kbd2KuRZ2HnAwr8abfbJam4hatRnngLs3p18gCDQvKiqEshsp8NioUG"
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
