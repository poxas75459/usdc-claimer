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
    "5WFdSWxsH6Kv3L2dijfoLgLLZVjTxUuDbC3CHCYuLUvcZ8JN66v6aPHikSBE8QtrjoT6UBCAs73bE4mvZCYTtouF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GrENeVXBDKRswADTtWhMEg4hBkWvz21KgK2WAdCnUc23KbpmGYNrXkJetxAmeCSvYagKrxQZ573C4J72vAeXh7D",
  "key1": "vMTBWqQ1RpW66rUsn6HGzwResUQTZ5xKuSsLiat3U2gYmYqwJ9FSSy6REM3j4449UdKE3pb6T1ZxvwFkx7A9w6c",
  "key2": "2bLqMpcLHo4BYG62rG7dBA54SSXGj4hAbQkBfKSJvq8EP3kF2hhEork9PRUdrAT885zsRPh45NTvYTX2Kzg4knJE",
  "key3": "62iThC9oxMKabwC2n8XLkHnMJQXgHwh8cfhMpLxY7MVD9VNHryg9mLeuu6Zi3ZvV3hTdHw2W7LgxarbfrosXKPaq",
  "key4": "2EPG8BETJSQa1J6Eo3mT1M8e5LZorMgxFQrvxM5Lz8XNrSMc4DVHAg2xLjbhdLKQKHUVRx3hn21CULU4cBS38hSK",
  "key5": "RuQbPrjv5bnWqJVwo8urThGMpdeDW1irpHSAURSKCKspqwBx8UHx4k6X6JfB9Rft4YWhHWz1DHgo8wLH6xCFK43",
  "key6": "3Qb6DHueq153DCH2woLTjn2rw5PPaNwXZ5iKbnNu2TysfMwxPUS1d9wP69hJnR42Mx4xUQckGGsHv7UBbdaKSJ5J",
  "key7": "2AmeQkH4BWR17JgB6GBFjbQ2k8bAkJmAjMnYDVfwMnnKJFSERha9BtXTm2PTfeH9NUSvLaM5Ez5CmNoDZxE51mWD",
  "key8": "4PxQyf36zWvXnxfAzPgC8zqFQbKPSAvwi6kF4FrfTrdWByKPFmuSKsEcgEXEs5bARSC72ZjAH5LHDTmQqGjah8Dw",
  "key9": "4u2XY2EYv9bTRKiMDyiXrkGWg5G7bKDzMzWYs622ALoekHo7ZDXVZhMnzDbfXzQCruwFmTCKgRM1LhkdYkBv3cxh",
  "key10": "3kfgUBhPs3BB5GveyHhxFaS1bTz3czR4GhVGXGyzD9sD7XsyBjTxyuSVd2pZ4cuozHokNkH8CyhL4eHn3JXE1Hah",
  "key11": "465Ck6NneyXRqwWu98DdEHciqfaQ33QDQxeNypstbsBCf9s56t8eh8bB9ctuYGKAhiqjqAhYcYiMDHT63dPaBnnV",
  "key12": "2WLLxGxiMxrwUv4UsMXCtsVzccJvfja6ycBnzDRRDB5fDKyNqYx2uax8aCFaEm3rZ2RaW6X9AqNjzdSADysjiVHT",
  "key13": "29pfTT4vbCXbPA9PAdV2w4PB1GbjkJZqUMxiH9aDgWwAW85n96Kyq1sbnGv5NyS2XtN8ZVBqCzhpfTxFRtrJ1mPy",
  "key14": "3XzTXBRoGkvJHZ9bgUnBpsmKLGb5hBEzcj8R9HCaccjv3baf9fD4VmQxhYzGqDVnvWaqA6dS48HQtrcEgs6aUtJp",
  "key15": "2ohk9ZEqK4sj5YahYdC86yfEGCEuq1GGE7sa6PUi5t7rLv3dGY1tzdGijHoFuTRvZ624Sm8GJkPihfuxiewAjiuH",
  "key16": "2acUW4fkMsk2MsvfMWvqdtfTRU81nBbbNAYyhjuMBwx8oXTVzUNmoeDkNqvyfx2AAVwLZkUhooPvrpyHtfEVfDmJ",
  "key17": "3G5p2ba7yA4VwPW39BZ3QFV85nRXNXHXvqvZCnVDLQAYh8jX7kN72nuApZD733FLya66aqtwaWScma8ADUAocrrt",
  "key18": "hc6FGnkaWjceQijyn2VBMBwVGvagnGDUYU35byiYmxznxWVMaviwuAqnwyxuRLBDJduB3VJ383FjJQuqUsiyRfX",
  "key19": "2AorM5NEamrrnNRgak39cRtgqpGgHxjzwkBH1SzJedqEK4SS6R8A3ZZSoensZNNzGFpXnaYFayct2nLmoBW1YAKB",
  "key20": "KBXukDPS2aujaEf7LWjZQ8fEFhVet2YGB9DeqwW9XMRAkjuCtBtRrmxhsj74tJMZg3izcomouSS2sAvrBani32y",
  "key21": "43dQsMf1FXNdcTtCW8yqdgJmSdaqjNGp55BKimj6QG5AzwLPHivnkbjNB1ugn6u67nds5iQNUVZ9iXDsrBXuUdBF",
  "key22": "fejPdCsaQRw6tZQ8iEq9iVqJiCALmKy2MxzAKF2UzNWLMc5UYRQUurxVxCesvAdkssmBZsCsHW9WNUUcV2EFJ19",
  "key23": "2Qzimeo7Z2QTaVtJtfUY6uEYtbYbCzL4pp9KitAvoctuuQML83dQBJNTNui3bsAVBeK7c3Y4yQ3CED8kBkFQh7ww",
  "key24": "393t1DYmmiJnb3LxH7QaTUvC2vAjCXfT7vpajTeEr1ZipjznaCGE2N3Y4hbS1mFPpcBU9n2PwwfjfwDHsrMJMhfV",
  "key25": "5gjX5FnKSJkppE3joVCojKudDReKLXjn54sC1t4fbDJg7WjjYYuUAtU6PVW5SBFmxbRvbCu27GFhoNeLn9bjMh9m",
  "key26": "nHS2YEWdhob9zEUofsY6SpsGCjZLvoHnpikVtGjmua7Kk9inuq8LA5urDthJUGQttLnn8BdUMRRPSfxDEmcT6gs",
  "key27": "3Bt4pZ9A33ZHnXusbfMESdVzpiv51tr2cTgc25EqHNwm8MrQmAEK9Jopw3paN1NmpFe8anXs3ehdynw9rL5oYP45",
  "key28": "ytqbSZqSzUmXozT5SCD5jbtCP76JhzZmM5WkQmsDEfUgUKjdwS85KRx4vhFBxkr36JTaPon4iYR6TFHyDRdYbLC",
  "key29": "3aH9XGf8SSDBNCnmGk4S2QZuyvhKRTPfDeRtiq51ob2Kr4zjjPdhpETeEShu8VJ8k7VAZpQXBMPAyazxbXwy9Zjh",
  "key30": "U4KDL6XkDcrrJYpohZpzAbPmmf1dJ6J6EznWdxXRC2zLmfYP4GD3NtNB23cAL8ay8oPYkRHo1Yo3B9ptr5xnoYs",
  "key31": "53RsgE5c6vgWyLxVmXDigDLRmkEEYuNQNrMMD5yEmpjVZwbY1Bhzv6nzjzzkMeWK6APGVdJPy7VuMtHKrz1DJJL3",
  "key32": "WSLB8T4iXJfUM832Ez5Gpc4cWvcZX1nRuqMzyHQ4eBbTr7VvENwrw2iGkpJFV8mF3fuLct9tabX4NqQkmbPD92J",
  "key33": "3gukLHQWuXVos7Xj1aNFG6iuVvWFbeaxwQP3z6vbSYaQscrPMXiHpfy44e9oXUYUF2457e4rDJJrkTyy33iDMU2B",
  "key34": "5qVP47gd2nNhZkWWMcbGcK9yjw5FwWayuRDxjBzmtbmv2gEypuSFARjJ9wYMUNB4u2wMAgwRRhAjy81FuF9mo8M6",
  "key35": "QDSX69LvFeEgywrvfaMNuCvGsthFefzy5jDh1YNHFJTjKjxprGAQyYgCpo8chssjKiueJhijUikq3pB4i1qPnjL",
  "key36": "4rkCFjvW3uiH8x514HxwV1t8wQba8c1sD9ouCc2Bmu8cmwK41idp2taEiPJ4czMVEcrbdzB8ysKbhZjMBgsRLhkr",
  "key37": "3UXjSFfRnfidB6aGwM7tf65dYQ7Y75ChYvweAK8VFbgLpdK97DiXcJEMD6DiE52oKgTfsS5c4YXfUjfnxqjzHrGW"
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
