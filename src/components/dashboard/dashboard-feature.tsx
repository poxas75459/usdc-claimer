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
    "3pkSvTPnWAt4w4hQvkf1tUyv8v5PxnUt766GoGNxmBi9rtStB8ZmhCCzxSa9CVCegJM2jXSLKQfMCiWEihaMTK1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCEqQaaxRNUihmeFf42ucpscEMVWrWbXzUtRSD11vYZHom9fBe2Bzp9jvsx2jKtFMAMPUNaxd4ZKEDNuwxivF4x",
  "key1": "5vzQyVF9B5SbytwTfJiRQrSbKUoUAyoMZjEhRkTohqNkniVTi6dkYYvSqv5kpCfrB5rrenTJNZbQHQCR1vnAfKZj",
  "key2": "EEV75XL3EBsDyvUoaYtGLfA6bK3zuNQU8NeDB8GhvCFjAdhZ2NBkd3VGHQYJm3PBSxPuHw8jCGS7Zr2UuY5xBAH",
  "key3": "4GdqpugMafeYSw27fPHaoRfXAHxqoqknSGxUqhpthn5pM9ABRaZKuN4a7XVf2PH9ad7NeC9yYqCsuU4f8U76iMTn",
  "key4": "3mJYmtSVVxTiy8YnUhLGwv7ZZuzwt3naYd5LFdUkd6ce9FuhfZBpWEfxoEeBBzjdaS1UptM75S1Hvw1fFdiJUjWV",
  "key5": "6aifCujiEKWZkvhwTKeJ5oezLwnvV2jmzrE5nKd7XHRvmNBrCtZQ4fQqR9of3SBDiZP8PzwybYZTpofjtMLopSf",
  "key6": "w24vKyu9CER39uqEiWFxbzSVRajPYyccpx9LNniMtgiN91H9WyhF1JeMuAWN8n7mRQa8UJyPKgvifzEAi5t6YMq",
  "key7": "hGKbG7bbDS7GNWdKfk8Ndc1nhtk2qRyTtdTkhLmRwXTkXsFWmhtrKKGTAUkRcroCBxCtZcg2Z9G6ueuCPSsZmbj",
  "key8": "2HT4mzb4mysoUhUPAn7dXy33TzPEMgT4GxcZ6pCy4HYbbwfQM3EL26B5GHcH6puvJKL8JzLoZnt1Gj9mcXDoDErj",
  "key9": "4SiLzL5EQLTtdoFchkHi8ceWBKLxVk57KZvWaByciXVufieL2TmJ6PLUm2EPCL11Ngr2KVoEMqNuc1SKtFp4jvKL",
  "key10": "4gj5DgofwT8uSJBCTjgQkdaaUEv2wotLUgBNZsgThRig9TDaPRby3aTJzUd2DcjZh8bTZAk6srmnwqLTv3WdfmaY",
  "key11": "2ampKusxzXWzzZT4FtzgBN6LSmWH6JCW5Z5zZPNvPaQdcwQRpg7FysvP7H3TRQa3SKUVG9BAvdCzMLLxERaELoPA",
  "key12": "2VVSerpYcXdHCU7FookeqkHLdXkNeJYYVFeMyNtLrRRyrEuwF4KXqLFDbuF98RDRdAt2iaYoE2jXiWqW2i61vF8z",
  "key13": "4RvtFjtWeJkLFe4jWuZKmq8CzgDAoZybEs8NYtE5TWavW3DjmTK2We9417RjZNpxqANKdTf1y3iXbHXsXm1EFWwR",
  "key14": "5eTnVS7yWUEkT1xKhnn3ExJEUdT8utNbVkU1ee54Q9rSSpVeDzhM1efu2SGv8L7ZqWAKwUa61ct1XRKduiTv5Pci",
  "key15": "2P2DcgQHLeDA86fJzyKRxESA3t4uWeLabcgm3LHocrzi8bweaUth1fEgErcoqxWaaufa7NqRmp3NxQg9mAA1WYB8",
  "key16": "3e2nCnntCqZzuZ2gbuddtMBvyc9QbnQs4CtwwwqgfPzxQoVqguN2w9J6CGMKg3oBfemJYSrABgUW39o6wjBz8mie",
  "key17": "MnqTC3Hb3qn45NAhN19nZLvjxpidhCAvYKioKjQ4hVEu4yYj4cbo6CKMtUzKEFEPDLbZ1bkJFvX6utYiVZYkcJd",
  "key18": "4vvuZxWn65Mu5yZUN5M7pAy92AxrdTUXs9maFb1MNPijiEhiyZFDiXnC7z25azDShCd4Q6i36hi1Bs8Ugx1PwaSt",
  "key19": "gQHrqWULBY1DZnLaBBMyvpT9j1xGmodzUjDrpVToZte168n8zWw52oiqDC1hjjd9VRd11svsYZYxpU8oj5FHewu",
  "key20": "3sSBEJoqTUEAc9zZX2fttp8cPVrcxTHkLkx3kVzcnwTswFmQKicZcjZtoULWAPkdPnpXTgoCeAWs21pTGU7apmiw",
  "key21": "22G6M39Qqdy1Y7nJJYMm9qdkN5EUNaZ8C7nPzZAccig7qZDev1GX4DTKKVv4FCbj7ZKUtZG7avkH1FLwmtEpfAcU",
  "key22": "5oVWTR72LsSvx8Va5Uq4ag6YPyU9WVx6yR3SkRoUJbnACNnqTQrtHA8kymwcvzDHykPuVexG46anYG19JHtCoyVH",
  "key23": "624wys49rJTT948FXgh6VYjLriFhGYPGH5nEmZ3BJrLjw1QYBFakR666tnbp5x1PRxCJrqCuM5yUN5wcYTkeHdB8",
  "key24": "revBZdH9Lcn5Kd8w3aB615PPMfVEdqGyvSoSb9gUGPrdK6YEDMT48rB1QEfqhipHjujhaxegcHwTgDDPnAcABXX",
  "key25": "481NKayByHGECR1g6Lg3EVLwvchhRuDGmXkWKqg8gpxcUooFnh7dgQCemiEBwYzhYv7YWLtgAeRLzu9iVadiyD9D",
  "key26": "27HsFBiQ6DTfnvJVddkt8Y5ykJ3aythwDYDn3o24V5LVeBusrE2B1bzBbuAppHUZ2j74H3gA8rCMiBhXfVgXfNhb",
  "key27": "63Ps9BNNR6ksZ2y1xf5WiT6wpfh8n8eSpmQm5T6CTcUpBywam7SuDRqBgnWtbxFF8sEZWt8unxkt3nS7vZTtEKsa",
  "key28": "4fEf5V6qudKUa5QHH44Az5Gi7cVZSCaurJd967Bj3buC9mh8RyB4th3sXP2nVarifCKvQacN3HKjnbXrq1Ybcv2o",
  "key29": "3VXFf5j5uD7hQLbf72rXNCj1x98zVt5xJmCa2ErsJdvHYxLRz5eGaMDTVWJphjpRRunqgpBXnAnuG7oRAQqKseRY",
  "key30": "tEpXGVQaFidmi4NiqS2mGVTbHEkq2p1hUuJu3om9af3o369hQNDZZzLamkWszSZgR3eoKB2PzuuXYv1Td9rE1mf",
  "key31": "2Wxt41RvKnd4yULnroZYjki7Cw7ReQ6NhVWN4c5hXyEtsURN8BhxKEruP8Q6mLjDrp45b5ZqqZ5vjn3RpxBCvSfJ",
  "key32": "2Jmyi7JhcfN4KiCtnux9xGCExUHbUXZoFk9MuGAU6G8gSJ6yjSJhNLoTNZtSaWN4z6ktR8at9JvNeZNrqy4t5ZbH",
  "key33": "2zeftHvLCyeUxc1XYpWYL5ayDhkqz3r7LeuqKmjStN1Xte5WTxLQQvHQiuGzoS53fHvMF6ZZK5xgcPd5pnrEJG7P",
  "key34": "2pPuNNri3tKp6WgVJRXkEGQamtHynJKvv8qW2APdNuUL4v31fgA8p4jkbYZF1sTMRahKJMxshEKqrHqb1T58or22",
  "key35": "3tFbyVg25RJY167fkVihv8ANmT5BSqRttGjw5AnvHwRXZZ1UAGQbkM5fkYhFVPeRdFx8ULDH1F2MgM2oKyCnBjbS",
  "key36": "4j3M2LLLuLX4AMj3jZMp8Ft3Axr5iRkWvFDnqHLDuXAELV1FCYoPuZJcT1QzZU2WQNA6VBnmiEo4hfmvF8Gu9c1",
  "key37": "4NWNSVHn5dubZUtawxhQE7PLrBzpgcE7qF1NcurDuCwNWkCH4kzJ5XP98auPwXTMWp3H9WfK9utuny7q9TdyNLsR",
  "key38": "2TSvLqRWVFK3qHTMRkeFUYtEgEX8BMY6nt42UEa7asB8qfnJ9Ef8SBR7W7ULF1cgBWLbHKFRvF68veyxo6GznPrm",
  "key39": "5iCKagMxft3miR42ZbNvSNZThfLBnkGduTpc48tuy3rykXAjGcaEyd8uiWn9a4taS3EJ73wca6N8HyLFY4kErr8g",
  "key40": "yyURotvDp3sLyNARLKEy8CHwVvu475NZpYhf9QG2vZdzfTje3RxDa4F2e85cVpbbZoeQExQz3YUNzAH8BHNv3ET",
  "key41": "3QhhGLhHDtTGbkSfENhwt1GXA7PyaE4K5Tw2ree2qCmqXzDTFT1q9ghBtGkM4w8tRr1SjXW1Mbjt8qe6XPVe2oB7"
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
