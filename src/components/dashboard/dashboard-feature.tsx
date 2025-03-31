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
    "3VzfqXx1tzSwaXWDgBtbP6uKv2B5E2e2LdshJ38c4Ami3z9p4eChsyyEwVGu6FqSBETpSWLW5cnCuMoLvreRxjtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oFRyKYjXUtMPSF7tGWUCxworVmLaF5kFdXwhHkTNM5vXcnUP3GiyEHjYkKT3n3Lqqnp1KaLW6GJTqYyhiXjpBts",
  "key1": "2j1hxtNSJFF8YU8MiZZZY8DY8itULTxUkNGjWL9AzjUYqPQ7CbDCYwjyZmzURrH43JpCsh3mHpJaBzCEFKJoMsek",
  "key2": "412jVm6bQFSxjvrFyesmXvAszohbnxkH9kptnzrvNqZEAK1Bta9Pc2TSjARDPyDdwjvgUYj2C6tdoXnkywnQ1a5R",
  "key3": "2ujPTBxN46N1mgxwbRrEMyaxK2MRiaEiY7kk27z5PB6VJZaH4Nuq2PPrg32nyG2TDyp63JSrbeTXXonvBveYLzuM",
  "key4": "5hN7KuvcsjZkmGMdrDTdvnJyMQtcJgykprq2G9S7cQGeMN6EU9Td4Dy4DzpxvWK9fh1argeWaF6NUH47BdhRQPaW",
  "key5": "QhrehH5uyPLJfPUqQVuRbR5CfQPjMT4xxHjGAawcAk3qNMHFfY4McCU2oZq7ygQesLyihvosMTss5eDJRK6QVXA",
  "key6": "biP6JoRx3oP2Mr2mAxcemTpX8ZSdMAPt1EgjpCcusFtcTExTpQkwCyPEkarVu8mudaHvY5rwTQgnCHtjtAZ2H2m",
  "key7": "3Vvh7VozVQEEUZBXPxG6i51UwpGtrYrbk1RJfL6fk3Sucr3ttrhQ9ZPA3bnHTnSYsBBraCJiBuF4xhooi2yvUVdg",
  "key8": "5tEejnR8UCtzxYS8N8smnaAB8J6H3vT6GVbt9rqMPCWXZXi1bzgY8DoAix2Q3HoYiyxtrN8tjZJo6CcuJPQaxkC2",
  "key9": "2Ja2DfrkGrFB4i9FYURq2wTiF5twVDcD6oFwCUtHEmQfTrJqutDm83wXqhiTs8X6BZ98WBctw7zH38U7NnH4tn6y",
  "key10": "2neJzUuRDhrSjicQQ17MJa5BG3v8jRrhCJzVWbCnA3YRcyARB26V8dSjBvGD4mnkBeAKxdz4BmPQpyK1jdcJHFor",
  "key11": "4DEZtJgwBcLxdFAqHy2yR8jbcF7v8pYzveYXYy8q1pJbAPMHmCkRVNu5RP9ukcGsnrQFKaEaLdGsqgJc6YWBZCnM",
  "key12": "2oL2QB3ggvu6y8ioXKGcdJaD8JnJXgo1eox1QkFBpAP9kbisRiTEdJvnT1yAc9Dj8YwAhpDtGvig9tGjYdXSeK8v",
  "key13": "41enK8NDJAkZXWcu5PhZ7GhMiSirdngBWPqX6Mx5TMNrs8Ad8n2Bw8DBoU7ccEFPoBkuwg8AnpfirjBGiJrawruQ",
  "key14": "39RQQXfrc8F7NVKFg36nWA7WWAVDxMKHUBeMGiqsHeFjkbRmpNrsBBbqmnbeXbNN2YnYafoiRcvPvswpxowm9kiv",
  "key15": "3pwZb8m9HXNvp8YnJUJwrvFHixADykEFsq1r8Z1HHaZCdVmMP5CWqnhjCANMSKdJgBprHhgxVFL1EddfkzAajPVS",
  "key16": "3PsnAbEYTaUdUCDaKzaLaeENXBMo53rEGa14iH3hwb3DWRqfM3bHjkTouFm6q1QqHvKF3Jsw76oZAn8vJuCiLCWW",
  "key17": "4pUHnfarDGVdPP78uGk2qfgr64TVTXqHz1DtnnkyW7iJ4UhvHAiv9s4LpF8FH5G2nTc42Qh4camMYjJfTZkyL9mt",
  "key18": "5MB1Bicv2vPaHyAKAxby4M9KAybmZfCqF9yrysEhGMsC8vGaV2F3zmd9MMwvkuJUufkUQ17GCgVqvsRtubY7iQ3F",
  "key19": "2iFgBZSbwNsv5WAzxEDRBLYarX3j7cvX2AwzvEZJC25HiK8mtC2oWTy6h22i9S7hzADsRsHZgwqq4K4rXuwhJHii",
  "key20": "2dRE1ACnsqzuPsbw55fwcL5iq7tFaPi8CqqxZy5UnJ2cHp3PyM4QB3G8erWunzeAjpSTe9BctESbwuQVXo9ZDmFW",
  "key21": "3bfNKCKaA9dV8gwRjfuV5bPBv5uR3CxsECL5CrkdsNRQv4w6S7Y8XztdWQUVx5muEmgFT3cwNMKaF5NMMonEbC9j",
  "key22": "3LFhZgyuDZAtxodQ2BTWu3Df9fCEgVhijg7jHRctims1RHRW2pccJbwKqjfkcJvqfoJ39HcoNkHewH3dEHf9pSpS",
  "key23": "3wdGAofAuwf1Nc24es8GWJr4UEkXZkcDXtyyDuMjuQ4ckHwao2uEaN2Ha7t6Kmz1ccmksVtb7MMQ4TDA2cTh2AaP",
  "key24": "dXHpCczEHAzJ2vGTU5KuhmKoYXj82crJhcjsN2KWxKKX6RVjNGFnfwRoZZnSWrwPi6jsRKsh6or5rv9oyJ9q3DF",
  "key25": "4acVd8rWC4yj8DLJM4ZT5ueAhKjnCRECrPUhpFu1HSP6u2dSwU5iUY1JBYmuaZytrDDczDDZ2eEwzne9Ywto1gaP",
  "key26": "2eDQjfzaGrN5GB9irYudrzadDLVjKazZrhAagVdYQH9cUJwhLEPcsWo8L69wnHJnsp4CQR5VR3avVjXtcSy4rv3x",
  "key27": "4bLRmNCPNc63wWmR7HVfndtrEsUiWsYdgVJNCbH75gdVLDGzkioy7UJKBG8HkaTy9YX4hCRJAAFiHRkaP81Bdu2r",
  "key28": "4b6QB8Z6rtXhUcGJjvyXziVontB5v4BmcKmEu1hqhHuyoGjoGiyDBENetwRQUoZGEj6JZqW16CP5m96uPkrVzXMj",
  "key29": "4EvxZy45aT3nZfxN7AbnHWKPwUc9Xp3QYfA6hJYRboGJE9ddugQg3jtD9PUmbw4bdu35WTEDiugN8yKKWnMUc1Zq",
  "key30": "5AQc9wxasbkaSuUrruvryWDxCvMWHiJm2CpL44a36WKfoksJrgufNyu8Xu4Nm4R2ANoaYUXjzr1ie5WPrYGEP1L2",
  "key31": "33iFURkPpktpg9jMt7Bv873MwLUhucL1Z7j97k7ZqkJfiTEr4kJpX5PHbRFAi3stzBwJGSxj3tuhA5wpkPsEP5C8",
  "key32": "DDM8zdnmKPdD7HQTW5Qw6MmZUzpNpBq8xjaj7Qd1Fxx6bJquM7JQhvtScnQ51rjm4yJSf2AsBLLQR2HRVh7ykmn",
  "key33": "2zs7FtNnerJEdoQR7g4PEvB1fSdE7dr7q3Lx6ruH1TXpV3i2wLAePETZkX1Ldt5YRZJRMp3SmaTCoE5m54ViWEQA",
  "key34": "PsjRkPcHDohbq5STWFpg2q4MBxfh75QnvFgad2L1dmUa2YBfdcfw59wXoVKJMqFxz3paDPxTosrW7vd9Q5mKRfM",
  "key35": "4RduYeaaDV4CAde6LtksVjJJV4MJTaB7z3DRsDXXtzRb7YMYxQobSxpXyK4Ce17zY9hHii7Tmpo3gwsNMRhYovHm",
  "key36": "3yt4b3GGBHM6vNqZbEkio4EXrY46mWW33CkZwYSEZ61pbSBkVsYuSS2r3h9pGt2B5Qzij1re1GcpKGu79oyRu2J6",
  "key37": "3qdtYchKinqNrCyL46uqbqMRFXSgSBE9d1XpqW97JTBt3jUSpejnBPQX7n3EmXPJzKPW7UiojQybBGuxnbHNs4Gh",
  "key38": "2bok6TZ1Xi8k1Z5s22gKLsRZJtfnXK8AE6cRxNFSyDoLZZpBzGGBaNkJv8wRgpiSUG6d2U5oPwLQtsyU2QeBV2u5",
  "key39": "2HPdwhoNUgME7i8q28LvJYHVVoMmoCrv3dUAFqJrPdzHFwVi7c3yS1yZaPBuRFjT3vae8vB6HfgXrR65poTLKZJ2",
  "key40": "1T4d9RZPG9nKJQo7kNjR6EWWra3TCrdZWNw3bxxcwHpVGx9kNjuFnu1rN6VASt8EB6hVAqj91atRhs5mjCLRGPX",
  "key41": "3ZBC714E1pGQccVqRkHyGjwA9Fsdy2NwRE21nZwTfxAnzzQ4uW1CH1KpmSzq1NU6ajreU2PXant7z6JfSZpteeje",
  "key42": "2iGLKvZeY1vtshUwpQ53V4ifkHdZuRBdyzgjhxQpobPasEY5dC2kiVNSBwWBvH8W5riN62cN8nKDSRt2p113BVun",
  "key43": "NyuWfPtV4cXv9nwAcQT7kjetLDYqpH91xpoyUBGFaBz2PohVTXDGuX6jfyXAB8ss9ZovgyWTizHJPra9Rz6EB9q",
  "key44": "C2K7KXBPhStN5wjKZTbs1kuhatsQatE5DeSLiXdJ4dueMeiEaF4mcTKS6vaUGVGY5MTcWg2vUXnNcRmhNfAHioh",
  "key45": "5orkaTRZCkBYhnmHCsTzk66sTtaQc5FxTAaMStahtASewNCSAauZYgW9DTNnB7nx5xrtrQHWxt38WrGT2cMccf9X",
  "key46": "4SDjkukDr7MWSxhrMKfhe9aXWPuFZD2xhCtUTDR5LgR6Kg1m21wZFhPMnUGXLi6WtajaukmRQ8CPmDuuMgjzrkz2"
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
