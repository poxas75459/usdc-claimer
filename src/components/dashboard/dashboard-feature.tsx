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
    "3YJRZ4uKaLxzxLb7RASfV5ryuHiivcuAUZFyE8HEfxmRZXBfn7eF7jaf2ZRtEXJv2Pzx6qvFgb45hEHujTiVCsEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H86egQHZkX8PjHtcY1VTZVCm4hSonHKuXaF99D4UZaHLEFw9GFD3zjsg7TEjdEdF3Fzt1cGShYaGjTqce4juiGf",
  "key1": "2w14zQ8w9qc8mU8DhKmkmRQschR4xwqg9MkoYmL5UPLLKQ6QJhEwc15VRBEnmPJGK1534kvX3ajSNwfpirtfsPsw",
  "key2": "3zjs8h249gcfdKFb6h9RdXjVV3j3gER8rrwEDWxdaX5rG4U2rippE7wuxiJaVA4SDU7yp4DLAf97kP5UQxUB63Ws",
  "key3": "ackSHTT3fd2TjAckLbrLG3FEJwepWFbAhzNH8XtCEcwGNBGEUpXuwUkcWS8Czzvvn8sT7VYxtBJGLpw68opXbLR",
  "key4": "4aineuytGWgoMJ7NuvqjR3Khm7y7uFegKZtEyqALrSMR6geXDuSGiEZpg2K4zHscPYsw5CzfJHjRCWyZiHeXWM99",
  "key5": "3SDmX6HS9hM15JDeX4M8uDwVyU55rz1osPrf4jAfChAaZTwUB7zQR8LqzzV1BrZLL3tgc6CCpV6U4tDxY5JtXHjD",
  "key6": "2CYa4VH1cgwprykSvcX7N5kZYK3kWfcPqDD4JMLyCoM2VCXH4w7DKjYwfmMfhy7taSmZ2sKQH7xDd8CzmsitxprR",
  "key7": "2JbY9JcNcBVDBUYpGx6jH3TfwnFApeP4ZvW3y7rdFMPeFfUFj6Bbdz8dtzEa1xDmAfZddw1vy74PVCM7UsHwGEm1",
  "key8": "5efdi5f7x4f3r6HRJH8AmACYpufsibwhGx2tfafxkhVNv8R8r5XDLyA8yszGdR3kUp1SsX4SgL6hMGNwM22Yjaa8",
  "key9": "3uVN2vmxgEaJoNP9PFFp6xwhzyN1hHiW7FYcL5TkdVcjwMJxpdnWcmKjoTLHKNukU21uYSoDB1UpxKBaMHnaJSCk",
  "key10": "2d2pyFp9HsWCzvjeygK5HqQMSoVTr8NnfnZRdJ8bc4nwEL5aNQWnXw4k5Sxkr3H8E8SBTnZMaW26Z9de74LDcmhw",
  "key11": "458UjHMNhR4MZVmgLaAF9ctjzN1Eg7FXpJxGxEE4yzHeWtX6ZbHJN4GebQfdyuEXdcWUmngak8sVFVjokV86cwpN",
  "key12": "6DfbYvM9v1NzoDapSNDTg3VKj7BBcrm6EJRNSfG6Pvu5hTG1iuHpQmcBZEkTW7LWVCVzh51FKNVTmPVUv6VqQCP",
  "key13": "28yjorZwrh7qZiC5LpUcgEGt3PwqLyFjRknQL8AoiDucKHV3yjm8Vsy3w6LJozR6yWhsPbYM9J26wJakYBveDwsx",
  "key14": "EZwBk1sZ6CJEoMDWMKBy9QsXURYnkFdzCNAkrFMfQQ8xPbaZw7nAqdqZWDM8twiHecAc3KVtyi4TWgW2BhUqZMD",
  "key15": "52D6wghRAWf3gdLAp2UsvXDXLd9t6Nr1fMEgLRFjt3JGFor1fAPxySbahSstZTGVDDTE6ifLuPnP7SYHT8hkWuAG",
  "key16": "3GU9Pq6L5DU7zJQcXNCUghLUCqcSJ7geFqv45CyK397nyjbSRSUVQJjVvk3jnMCNe1mSuNfNiTpQYWx6D9MsR7dN",
  "key17": "ggCSUfhhk7RnFGeLT66H97VQ12jBWP7oufhoLbmLtFdkdUMBZuEpyYs6Qh5XJBduJ3MFiL23tc3Jh87A21m8DkR",
  "key18": "3RBtUykfbHxmSoE78hMWcRwE5LjqQ6n8DduKtUQERcJgg8Fvfmwj1PhsePXsePf5nQkwgZfqL524NmDazHUozFn5",
  "key19": "hBLCFYHyhfJTt2ULjcqxnD1h8Bh8C9W8kKtHK2ZbZ7RGW4xFqgXusZDzhPqFwjXLhXTTSRnhsKCWLvjYzxb1JmC",
  "key20": "5tXBYJv1pfGaAbcu875pb6Pyw3BPKf4Et33ruC1vmpJ4bJJ8fZtbuBHMuf5Yu9d6a6DQFm3MKfH6FobpchPCi27f",
  "key21": "5pZRGToqrkQqXkVtQiZSo2aMLoM9nbBPJH3mHo6R8S2qKUPnZjSBu26RtsqmvwzQnMr2gMaAwurAgdAh6RcwgQtW",
  "key22": "CqiTMCNgAZZGxyKW8KbxHQofaABg7E2z9Q7D8nmb43k8crhugLyWd6ub4HfcdSZXx9wGDXEQmT9kpy9aEKLq5WZ",
  "key23": "5VCK9dUVdQtRMusoDC4Ku8vCfUPV4miyZMxx4JmhRdVDGV2C4p5G83Z6BK6TqCWTse7WtCyGPpW237gXpyUWRjVn",
  "key24": "3Hz3bCp75uCHfrrY9N2aJPUhYfAL5puat4unN6K8g14336cHc1Tf6wdh18J1zQmm8rB54gHbvDFd9j4LqBh5pyfh",
  "key25": "4YXtD6EYTSdYS4kJqn2q69h7JN4EHx7RjeniwShCRMiD3j6vDvR2QwQPZ5rpFnmtyCoHPNvkLqzUvQEhCShSVgqY",
  "key26": "4VejYvE8uXU2LZ6BmP7s8BTD7CD6tfCB5aCyuZn9D8Lzpcx7NEUfU9xERWaAPLhH2wPC1cRYymbUFicBSYqbUjT3",
  "key27": "671vsfPmeau6Q8vSS59sNLJbQNaC6NrLuKH8UGJRHhnu1eQgpR1QtCa15uoh2ySDVgqDHaN1DSusrozXbh2otCSD",
  "key28": "2q61tGC5e1BNo2wRLwKotSapppRSTJDK26bFwJgLgFyswfFRL4r81CcSkALcKY9hWSmugvyFCe5qeiEc6Z6bEFCi",
  "key29": "5ENRSere7UuQJ5Tq5SiiVfP3NNNQLJmRxzAy4FWLsinQQzic14EkKNjQXXmSKJCfgKSnV2pnmUwMWdyYSG5BCFaC",
  "key30": "35r2ZJmBojnvY6bcaTsGcEYnmzzaQhxTKL7kCYwkD5AmwzRxq5UbT4ZVmjMbSYuVXkMekmcPfiNKpZgQj1EAZQZZ",
  "key31": "2q18Ac9WA3w78LKA944YQDLmC8d6rFrXMYab5u183YnHg7YYLyXg3SSWxyk8y72dQrvrGVxSjYwKsrdsceUv7Ng",
  "key32": "2JtEWy4miUptmeyNRWb8RRq3Eh2KkBXbSfwGS7p4y7gQn8mjWGQ7E9vgNegLvigPPPARdH2AgGX3XbTrmwXwpp68",
  "key33": "rmVjJUJEeGraBdEpufGmPMMeMdr8S2EsRonoeFdxg9CcUG5WTuvG3QT42Tjh2CrNUfE9jwaL3voLFmJjDujY6LT",
  "key34": "5N32PXUGv4XQmJg1rwrbwN5Ht77JvLjHPFSR9ScMDj9KqMhAxhmoe9GtFqeB381Jp1vQQiJr76wLepQWfNk9ztpd",
  "key35": "FgjoFvbxDDqTfHUHV8Qc41ee5AuYkcKteYBN5fCgedVoMx4tnV7XgnS6NevLtWtU9oREC7VX328gMNQNrd41CjB",
  "key36": "4gRMwiwBocAatyGUyunBp5iy8m7NuJB641L3SDWxbpycunonrqzPPp2jEWRWbTrgMoYb1tHBep1WXVy2oGoJdBs6",
  "key37": "3rzWSqzMpttUceAafGEyXfK3NJjsxox91C13HjXjFEbZ9i5yg9rbSh1ztZCB6PGYZW4MatEWY5JGGmCSrGwkFznC",
  "key38": "2aTKa9FkMfu5W8um3wjk2zzaEwVhDpz6tyG6VPQmgzn7jFAJ5GAqL1JLjKp7ptN1dhmovKhmgz6NYyb9vBF9jDMr"
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
