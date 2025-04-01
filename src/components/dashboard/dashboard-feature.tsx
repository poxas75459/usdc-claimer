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
    "3k8N6guJBsJezdkbX8msD7YxwCTEZnwS23qGi9pjFfDnFn85b7cy9bdnK1MLvnqU53B7wKcqzVqWd9MrnpwG1ycA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iRWzr9R94d59hJyVRq6aArgnvQmdYxNUT9MG7MBcHiYdTTPBPsayHBmxYYHk8bVy5AzGtboJPSnQTUnrEE6AocN",
  "key1": "2Kr86Q4UEPFifKoPyTgGQF9bieJCcTTJBB4sZn6aHu1W4bAv33J2xsbMGESggbEMQv6ifRjd5Gtn43cGFCMzFd6D",
  "key2": "2tfcrQNfcJnmpZCh1Kyb5zWoJQo8njufNAAfud3uxshGs9TRv6ExnqWtPkwVqRPhxFbYemvBsdjt2zKP8SHHHtS9",
  "key3": "31QaxREYcGKVrSwbw9qY24ZCth6bTmuJJB9LieQsGda1fLcuCbihkSJvM6PuztiyYXC9NDHuBjX7tBfH6BTzzAos",
  "key4": "2MsdH6Q8d2adgE3Dyh8M2bU3DSBhygwsX12E3TPP1sFjVcHMs1uSwK7HeuibkJjEw5mLwgoPrzi52sZJeRHVdZh3",
  "key5": "2e6prkyFQxG58xsJwcyCZKN2bs2FmbAPDRNz7grK5tU1nfzsVL9Dqp3tv7rYt1DzuQ8Ln7k6UgCoMZFoBQJGpsAW",
  "key6": "5M3xqQcSfa62SjZvWXjM2sYYwQtRjT52dmo8r4hX91YSA9tV7mxwjHyX8iZ1JVokxidFa6usbFLA3Mqfg2QYXegb",
  "key7": "ruQEtzvsrzu1QNWLgAirCzd47FSq8zt5zkTLU6wyyb2uVoWQYHuS33N83oGXgSrDcK8JC9sxBPhgoDmsQEx5oJP",
  "key8": "2MqHQb4RL3adANUKECy4kczEFHUaPCntnE9T1FF1ksUgeNJVRApC5v8FTCofFB4UzcLLgmigbSkZZeM644R3QLHa",
  "key9": "2HHVv7jqCcK1JxUrw5xf93ZktRRPD8ngD1EX2C9R76JRRNqzZzBAKzUhKDew3MgMxvHYeeGpqE4GCZZYvBqUsopc",
  "key10": "26o712b921REfeMPiQ7PdyErTBuNBEBHfjMXMZnc1QyT3L8562bPgsjepn2gEbEEiPT6kG6KQ1mLxLR7VobbA9TA",
  "key11": "KZcsoN4qzmQRB7mxnj4gEysh3yYiugnhpVcByqprvZ1SGGvyz5y4vZCsdNAUAMHCmeR71XnAwFqVvVc37CzSHNH",
  "key12": "4Eriyaf7yeWReEmSGdenR5hv51Lp6Q9UaMaVi6MwLnvziWPvo7QAHqa4L8cayzFKNdCcT6A68T9PbomEvRi5kfv",
  "key13": "4zALLVt6mJF7KUAHPu99TS8Zdpf7qEhknGUZLoukKYrTx5cvPsGcjWczFBA6KA12SbmKkQZhm6yQh2aDmqBw92hi",
  "key14": "5RDPPzt88msttChZsmVCGBHRKAi3Ya2abWa9wB3jSyzcpjwKbiTwtCBQQqGYh8LYTZmHiHR54m2FEZ59hqU8ZhtP",
  "key15": "5bGv8tusjeUx3b5JvoKB1N4Ca9D6R3J5YfB5MZDCN9Y3SDEoc6moQWZqXqog3f8ZLfnann5kqyo5ueRBCFpGPJdt",
  "key16": "4GmrJKfQ6GLQuXwuR7woqwnTLMBJVaNHk6JkxFAvDpJ6zya22noG6eBcoDRTTuuVZ4x3rQ7FCs4tYQEwft6Tq37J",
  "key17": "3kJntV9MzYNZ4b3ykneLeCNtD9AC5MsH7CqUBfqrTvcyGFtp8zxGEX5SzUvoRt1enGsxCYcWb3ik6YheWiZoUoNK",
  "key18": "53h6YtG9BBovRPoAETBtmmXnFjahpvUCo1EVKrgGMhco1cbBiz1vJ8eAMFh5zghjVmDWJk9gLTopqi47kfuHkBSr",
  "key19": "4Ej9tBJ9AHVTAp2nagNykfuSr97zJ1ry2GwqhLNCV1JE57jLPyAtiwL43DgHwF81cxoqm2t8EjadtwAfRPiGz2b5",
  "key20": "2ki2QcDAWm2aBo8M1qC6jyamqeo5iMZFCkGUCHJiNaJGbPFEph8THsuhmMJJC1hDpjhq1AnDgGYvZudW16BzeW5q",
  "key21": "3bdU49Du54s7kb31MSeqnDrRfEn7qD2r8JKM89KMytY9h6mKt7i8QPy7cQGeWgBBWbdYG2ddkmBmBkKoJ96EhRdB",
  "key22": "4hPDdRKi6XzuyypwzZAcv9Y5AAND1sZATNn2fuDQgTnpr4rwKkQQnNciAmpGmf5X5SSt7hDRd5sZH3hkNY5fUnE7",
  "key23": "5tAVgLiLr3xKvBVs5Fn33q4E6gbMQcp346mx7YCQYSu8TQnUCnTKkdcmcRk5rG5P5FkzqXW59nCCBnyQySyVYAxe",
  "key24": "4bHreREx4LbtsQpdPSZbTyhGkQ77mvBWk9QmdDPuzKky9H6EwVpiaqbxWB4iu3Ac7Wb4jVTNU5Ku8shSQpUvioFr",
  "key25": "5RP1EKJDinc74tFHGekqwb9cAHLuMGWxpvEG9sYcb2KtGQno7KPc162jm9M7gWAjFFv32hkrfC4DwqbFKkMeLcmT",
  "key26": "2f2K82KyMAABnoaYFCjKLEDZ2Hy49GGJbY6tZjrgzJao2ToAzSRM8NJiru86anX26bguXBUXAoPhPWAZzBYX5kCB",
  "key27": "3fLAvidszhZJaZPoAmPwkc82fmjjjYxdfW7Z3h4K7ZXBWZDZNc57WwQR5ojVDwxLSoF9GJpeFpBvEpyd1KL84WPX",
  "key28": "4nLUL9BZ4YMoJugV9cckFtJiB2rpRFq1CBXhycqKH2Pna9ok7nKkH2b1HbjBfVKaamac4sRLMPhK9buAnkDpxn65",
  "key29": "5gn53va4zyuAV4FxPLWc7gJJ2bDi1ivuGs9kYHSfqnRnMWsc9Liaez8BQ6viZnWmwqTLxMPQ7NsVNNbkpZ4PuUJ8",
  "key30": "2yBnBZExGZp5rnQUc9zGNJeikXfA3SiLPqq2WVmqBgYtR5yzBBYPFUaKi5PjwgTJj5iZEwkeczji5UoxvrnJMkG3",
  "key31": "48ae9TGStxgidFGJMp5JMDVY5BjViptWuTVPwH1oTSjzozh2wcWKuoLU24mP3B5sHwerjTzbXmd7GH1AgNQ6iZKN",
  "key32": "2fQ5NeAA1vF3H5HtFXdUFduYBzjWG1ZJ1ot5xjBoeDizN76PFGiWx9nMqJikYfJFZmRdQuefkJiMvRUxiRAzZ8xD",
  "key33": "3g2z8APsU8j9NrHop75PbSPYkpAi4K37c3HFjAUR44Eotcnjigss5vV4dNKHrx6vKTRuHyKZYvk2NFLGjsBv6ojU",
  "key34": "3z789LTnckWtpFYvwDaLu5QezsFxKwZH8Xo499ENoxizFi3w6fU2f1AEzC2KLwwuN1GWWTGQ12Z6uRhg9BDi4qcx",
  "key35": "5AJr5UBWBeeik8xPcmQC2MmsQGDDjQpmdVyAhVUxCNFhedTMZs1bMrVYhG6dzesHUt2JdVDaZVnMiN9cDaFfGisg",
  "key36": "QCWJd67yiiuLMRB2Hfxn6eLYkcCuoE8y7t2azbQXfdvBTGrg3i46oKG9pFEacBBL9jKvgm8NLBRvR1wNJu8dN78",
  "key37": "wJxM1so4wGJnvkL5N1kjCEMLRYB9NLGj91WcvwkYoVvvBEKwwmZNuj5ex8cW8c4LnaKWm5CLNv9FcoZQi1esLiC",
  "key38": "54xe2eafMfTu4bRC3eTAMoiujf6nVGTYZ5rMb9BrttsgH2njs1oiyDDHi5D3rXqANBYvhguCeRhn2KUYjtqtGS3L",
  "key39": "2UnpDgGG4QqZKfcbyhrntEhEvHMtKZaTcR6ABobu8cfp4zHynLjAdp4b78GAg7825h69z7khVe95Z7nJ4Wk77w9b"
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
