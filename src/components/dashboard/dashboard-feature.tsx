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
    "5DdYHuFpjnRM2XehFES5HdNQEB4SzJW1jbUXGXQf44cEkUtVBp3VrAjRFA3jZygXuUvELoZ2Y7b3itY8tBc2FpdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CrJLVXVqaK2eo8fn4sMcPxMGrdmutE6LiVkpLZ7c7YBCX41vNRwPTqhxdbvtPPKnvp3HvyJUYR7aRV27npLaowt",
  "key1": "DDRb25woVBuCGhL8XP1eeMSGmsi5h2xdGvfwBXLBLYtvJtd65jjYVTf4d8Bt3rYHPxVbtjaMgZiEjhdrA5XEofF",
  "key2": "ijawvmvd2GHvArTdH5z3N8FZ6Ksa9qLALfNMX9bTpmUv4CcHzovd4y2Tn9zc7qxS2Ww2nJXkyLXqcn879nqLZK2",
  "key3": "4xiHiLFR5jHZ9Q2sEQdPDSCpgWHv7M6zNnHttGDhWeTSqAxDDgkB7kW12xHq7q2YaoTB2G7Ha1aWFf23Dd5Rbhx1",
  "key4": "3kbGwWbbdLM7wKXbmpbavZ19XbR9jggKhAmgFdz82vEzHUHiYygz5ybEUoVWXdrcSEVvgHtzfwmSvoVrbKBmZ3aH",
  "key5": "3bpzHiB4NM3wktDKZfvQSgfJpisDGXRHPrTWddVUYno2HuuLYrsD1WA9ha2mq1v8YQLd81To6VjpFT79jNFjWfMd",
  "key6": "smPzzXekFsPxQxxBcdRBoqfrEvQaMM5TCoZapYvfGxJAxFQYTjBDXVadPeszRUdJ4FxdZRLBnVXr4gzMRwTMxp8",
  "key7": "2ByxHnAVmGT3HtXc6rfaCnUsWaxJWW3TKtt3Erc2yMWnzWjkhnASyxm9EkjeUGeTYKgQ9MUNqBW115NJZwvFxYL4",
  "key8": "5WJLfJHHCxh7Y6AfiGGHcEpeMMTGbjemy4oUqWmycMZ8LhD2J4bkukBm4Qzv56u5bV4hD9VENfnLEUcXtPaQhyTx",
  "key9": "5NL1oe7EVhBiAs5GXNs1cnPTBkR7VrQ97GEPk8kx72Hs7qjLmt3tHodH38VyoM4pJsdXTwiNoc8CDUq6aKrBujoy",
  "key10": "2T2wyPHtbW2bG4UkQ6fubNmgFQy511xmPFew3EEVmrggM7xykRuobtmZScXKHW8ovbgemvk4StbZcmw6KFwm8tgB",
  "key11": "5VVykoiJdS2uuofvo3XjtvcDk5dMFTgNKTW5YbYC5RgmoWNNLX7Zsm95hMB2KCAmukv17Q1jENQTUd7k6oULgmcE",
  "key12": "5d96TuqPQxFkPJoaCoNLEvYDm5L2pSmZ2NimmMPFH3aerzBoog7QZa8c2dag5Za2TbXZDbZ4N37hh1STE992MEAR",
  "key13": "micBijcYc7wdyQhTgaYp1F8HRKkhhG9xtQeY6m42j7W5kWttVYTpJFx84UNMT8oqj1ZQssLdSrpYn1cwskrZHC8",
  "key14": "4nS1aYMNPfp9EaYgfEwGx4FcbpTUEHWMk35GBnTNMUe4D8izM4tXtTtJLXrdvrnmg3upfySaWnvkERre16UujYur",
  "key15": "Z6BcxdcWDocKs6PtZJy1fmwnzFg8Lz3K2QdaEJKQE9qrvBj8jjuW9DEkrqEXZVC1YyVKo3ZmsQdtWGbZHdAiA7P",
  "key16": "4faKCKeS8GLQoWxpD91kfYWzeWoZNQZ865R3e4UVaqKJDB26vRyxfdgbrKAqL72Cu14ZfCzzZGKaNvZ4rDLc8MW9",
  "key17": "3neUYTUuQdkyGWPsc1uNyMAcMUZ8FfgoSzVSPqBmsrzpWGJnuU7YodtRizgtkiaEhUQvFdJ4MRCoJKgQFXwEhHVW",
  "key18": "TXV8kmN1DAGjbmXAyPYqoKQxgK7gGM4Jbj8kFWpYgtm6NFJMGk1gaJbnHZ3vKSUneMeYoV5nUdzq9KjZbVJZDTH",
  "key19": "2f6mt9bzFaY9gaB8cStMR9SD4cpEnLPGLADNU3TV9gM9t2S1MghtaUN3EoLpUKgsn6kB3DUBf7MT9K6fpfb6MM53",
  "key20": "44JumLyXf2kzWqY7LyL9Yiw4EBJ2zYcH3Lhqc8DJ4trHUZ88LVxYe7dhGYwCfuGoi1ho7oXXvGHkBio3n9MzyL5y",
  "key21": "4JGsGEoH1NHXnxYgAdpDePcKrawZDVy3Y982LbwDpgaNqZ8HDEhkokXk9vZrSH3dhuTNCjpE5JQCq4NZzn6bc9b3",
  "key22": "381ZyCRabh2Ap1VbC6BznmpxLmTK4KNALnZuAKjxLVdMKJUdCEseJyQ9avqKWUAYmgWCmobuMx8JitrXLvN7Dffa",
  "key23": "5pAhUCyEqCEJm8646Htdf9aCAT7s3Jyrs48EsnKkq3z5eNCFDpoay8hr5emCcPJEnwLSbNFtEJTJcbXuocf42coJ",
  "key24": "4mNicTZWf449DeheRPxmAuDtLuWdmfwmebMZQvv2Aap8rE2ahLxb1HZnLgZEvEtVnbCnyUZMULjwACPZDHkM3qEh",
  "key25": "28arnMofQz1UYS318qXPuH3nKhdVbcoS9qnfSPJiGQ3M6MYcnb3xuyDFzPsijD7ciPdJgEEbqqtpWL79sB7SCH1u",
  "key26": "2XoX3eezKHhd3pLwmLgBvbhWsypbzTBe6znRoSK57EmKdvo2wb4owok4Rye2joMdMP5YgDX1Mz8VQALhzuAQnco4",
  "key27": "4iQZ19hXkV6YeNagfgscmUmhS8RHYDC12xWg66o1P4DJNM6AEX5SqaZT3Swa3Re3fTQCmBCzoNJNuAxkg4xkvEzP",
  "key28": "4rXBXkiRbqadNQ6pNvsA1vWxCMyXh9mNQ1Q38zHBnPx4UAtB15UrSFgFmb915xgBaYoyAQ6qCjKNiD9cYNHqfnR",
  "key29": "2mbHvqjj9CnCpQisHRsBFKfzE7HLK2EKJc1CHLK9TEmTiKEqTQ6NyaLx5Vkizxqq8zUJSwfyydUMXNivBMa5RYhW",
  "key30": "5RuhcwJkiB66rNtKWWUZPVSGqb57UHR1xqQ9z9TAh4RYC45uQCVqznNuM5Q84goqyxBz13deyeqazWT4X9b32UY",
  "key31": "4K85obCRTHfkVgG2Y4SKMQRmkuadtFerUXnADoi6igQjBHd6xHccPQajqHnxkCu2b85GaynP5JKCwpAkLUBcELsW",
  "key32": "4YkPKrU2LWPXBAWPQ1fdHydQM13EiGJF4o6JUyV18EU8vXeo5sbo8EGbB4q1DsbdmBKjtwDgQE3X2g3i98Xe3nz6",
  "key33": "AbxKikMGaPgKYdyUb4KF42YPACwrhyVJRqNPCoupEeupeLnmxjTZBpvPP2KUM3nn2KUee3fssmKnoM7dZwWCfbB",
  "key34": "4KDE4yoSjPPD5WSYMDZA1hPM8j7GsB6XHYZSVv1id55kDiZWeTepadHcFHFWJZENq4RPHQQ2FKHYMEnJYY46M15e",
  "key35": "24xpiXU3nhZZZ1rdTr1U9ATRQfYtdQdmz5Gn9Jn51m91ZU7qfDvrrC9wtGN7w3zUaZ4LdvUkdkmfPMEbxUwpsobX",
  "key36": "3Ec9guW1zKPrASLKXSBvAWwCH7pAszxHLkbpDovrLENYLryNh2phjrEbxE7LpyaCKZpivTh2FVxWzCjcPMjjmL8d",
  "key37": "2TpW6LUXsJvNPMXo2PnL2bfrB9tDtW9AoZ8cEEDMFj2iMmNf3rXzqenPbpx1hgFrnieRVv8nP1Pin1SF3nZSWBxC",
  "key38": "2FiqhFbKPV1SPWnBef6SYxgwW2TFZiywueQJgFrBEnkvF75A6LaYzkhPY2ZoKjjiwEfpKdgewNXKKnJa3rBmea75",
  "key39": "c1GVxMMpWRaPB4NA9qdrXwz6NdvXAtJR9zPyuv2pjZabwhinSJkA8j2wMekhqhZny87zKd91RpgsGET3oq6WgYm",
  "key40": "57ZcWiPWYB1tdeqH8UXvKhNrTB9SJFgihU3vjhRoDkZQAe4mjfTpd5gn1kYibrZAWgwUs3CtccwagX2erE6c3C9u",
  "key41": "2GJmREYu87RDdi5YG1Tr3jYWT5q8j41Zi3ynapYHJeuyEvpaWenVWY3G8bDMgNynC4nm85xYNCLQ5DvfnsV1iW1K",
  "key42": "4qntpKHiqAbmoukE55RGmjUTsBnwk192gqm5YApUCXYHf319PrapyYmwzpfv5ffinjLUrmsStoapXzwWMFoKsZWz",
  "key43": "vMK8UKzdKHQRBXEe581VExiqbWQcoeS2CHq9uGipXjdLzhe4QLao6EQs9pqJe3orrHjZQ9wPv7icwaLt66GoGVV",
  "key44": "3hifV4g8to4hsi11ZtJCdi9mw6WG17BzmR599PdA73nfdB6GV4MuJ15LewbE8Hx5fzQa7rE46MRVayaVeeqvtENi",
  "key45": "2e6VocfWDooGeMS6g4HHerYtL5r1UGDqwqNL9voe5qWuf6rCE2WwrqNtikLzcvmvdPtpC4wkQTdtzEBSHRxYHEEe",
  "key46": "KpuCEgmXJVcTMkXhamUe6xgxsBTShp185ofSMPp1k8uaYwhKpo9Gwz5EiAwUL923E1XcCoZhtHVzBA7vi3j4F3V"
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
