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
    "65d7BpvGrU6GyXvKmKVYunTDXYQ7RDghJqVuVvuQ14r83eUWqruGuiLxPLtYrnH1DoL21ivoBifQzBNjEVHYGcYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rWMS4wgX1heGsrZZ2pVH4e3iJQxNdFRK9MTFdSg6FFNi39W6fAvqn4qQu3oBD38BP4Y8isqpJJWDHauNVNaLcF7",
  "key1": "52r4HxXVQNrZPAiYcX5Y9YLhzaS3ePo4ymHUtVMmEpwnrpa9Ffyc5CoLZdYVsi3jCA6XXfdt671p3s5ZYGJXENG",
  "key2": "3Gt7Zm8RpkxVbj5qWwSkHskks9oDEWZjXzzD7hn2hV3VSj636AdZcQ6Zw7iUjtYYcsJyGws2D2AzhVG3dQ9yLJhi",
  "key3": "WW8XdNbcUqjTgkggnzcBzs6dx5gEfNMg27qu4CTy37E35barhiS2hTVDbTkyi8XZThzS7dT8RhymuzpHJChmaHX",
  "key4": "3tHX579f4rFZLMbKfEHSY2wPVWctQEMHoNgmwzo9DBceeN7o2RHRQNYRRcc8YehCcPzJX8AzEuJ4kzg47GNQVJ5r",
  "key5": "3W4sZxbJwxyRYqRrQ128SuQm5znwgnJZEHngeJsem3jM349ka9842SGuBvAEQusPVAzsUvwbWTz86XbvGV7FYSFf",
  "key6": "66iJE16s8ZYfhnqPRt7Uw5wYkUYDgvgLE5SY3a5FV2GqFbAZ7ArizbqZKsf9jrBLcVpDGNh9sPeXdiT7rKL1TGwe",
  "key7": "2x65ncu6JhQcdLZDRWAdSti3KaGgN4Ce3iLysrT6dBfrrmbBwYvNWvTBiZu3qBtUtModZWEuWAuJHLW5EXyrPFeG",
  "key8": "38Prn8QmKjkdV3UVRGpPGaLE8GABCHQTSErpih8vSfYbK3Ygd9mNdgqQ6gnKqm6EeG67Jx3XetwPLP8ttASVfoPQ",
  "key9": "5WhmKgKYPvQde2FVZ7KmmVKWTWAAzn3h8YDAEdpRddG1iG779nFwZ87BP1DoYotDKr8BQRdQfWjvUSh7Pb8hSsrL",
  "key10": "3DZWZEbnDM6hJkrP4iPZfQbtD7rwHNhfZnfdUuKnffGwBPbQ2HyyhkqABuzK2YQ5az6cv74BC8mfokiDek9BnmVB",
  "key11": "5iUygRqPCQ2PkkSuJbWHnVnZpouQMURzbZZo6XkAKh3wDX1uLhGXNErqNPbhhFeMwUezeFCwByXuDbNb5iYcEWe1",
  "key12": "3ADCWncjhKsoo9gYkVvEkUaKXDqbvmjqp8ms1fgJBtFyfE4QjfZZbXvAWscyZby7jyQK8PnX8ymHWLRKWuai8wYP",
  "key13": "cXwLqrvYaVHqbcpeH7bTFAXEc8aHthkRZdjzkvYvXkuEK7ZYyzciZ4FyxhN7yMwR9G9Wivry4BiSLCtUWARveuZ",
  "key14": "Zm1NoskjHMvuorMDPQbEuiDWyGsmxdHEyoHLb5Qv8PWXytZKVB2eG3S7oKQ6HjzjNqV6ErQKLZeRxqWiWFHFV86",
  "key15": "3J3gDdPR4Xc3mPAsJF6prd68xZE1Vw7s9FJPDf3zEUD1cZqyZyeVo3P9UA7PLavUovaGabwTqebQEW6WLmbkh2dU",
  "key16": "3nMt4VENfVgx8U3gJhfW2Hv5AXgQ726UQR7gzvHwUNJRKrokoFAr4CcobsUodCeGbP6D8BotBT94meSuCc21RLgs",
  "key17": "4Zvkmj1YWymSnGHbKTR9xG9EmntGnqU26HRA6m7U5z91Ebv2ahSRAy5fomVUTudv6HBkTJkB6U5zRVucpvBxfqco",
  "key18": "5Yrx3XQ45NF8fMYTNHoeSQTNCDGyNkSuPkmmJ4cHpdJReLTQXFgMKBA5FmHrf6XzgCx8g6ttyo9ZFaBE6yoQa4vj",
  "key19": "247H7SP6A71N4DE9DcWQwMAvsGZ5JaMyb2v4fqLTf4yt7CuMpwWFTirVA9tDqmdtxYxcRNas5bscUZHrJqk67Zpd",
  "key20": "3piz7iEdWqbwXBkfRfBMJtM4CCmUHPH5LahNWK1158Nyctus96aDkJfsJ7auYpWqAReERZFkLerzVnDpZNyCXzd3",
  "key21": "XDpuwtAcVrU7pMzKSMDuHxUfQN3ZZdbUTx2Pa13iGjHDya1nD5m8fZf2cEadc8nQmEmyyoLZ4shSyMSer7RRwJW",
  "key22": "2Thp7mYAWq6e6XZUGUN5RBuHC32wV6R4zP3g28GrMXQYh7qYABQorLfhfz6oQZEXzLPdgRSiW4eDK8VhHWabt4gb",
  "key23": "r7Kp2raRVxurzXw8Sf1KdgU6nCWicxYYP5nFHMaQ8KGJjSTnHuNYdy3NiRJG6nNVAYKcpj92ALaB79Y5HuEm5nt",
  "key24": "2Q8CzAbrnEU1oRJHX9SouyRzwxBy7BzFbbq4ErTTD2TeBRSyJERdhKxUxPpWrhLdEouofh6u7BxSXhUmGjPjhd2j",
  "key25": "5BzPGJt5jrmQuhrNNLPKX8Z8sbE6iD982zQjBcTmGtPUyTHKDTkMXDyiLGY2wCcBGBLLjZkRpPwQpUpw7LxYamtu",
  "key26": "4We6nLGpQMCHhBDSE6Yq3bsuaBVFQaiRZR97ZqcjNWzKUGPSUSNbrfmcC5ZjZtdgZZurzqCujZK5jcRk41iotwUr",
  "key27": "4nW4e21xFULKu6Vh99LKDYmvabYSrKaQngTjmoyEAyApMdLuispgDA7UdXp6ejSTG8zTCmTSukMAoSyMqayvL2LW",
  "key28": "4fWs5QpxmcFH3Gm9goAQtAWwQESfGWgsVvAKZB6h5EAH6gTpeCu57kiJfaZ5MLLcJCwhtBRqU7T9DJ3rt3CPN2R3",
  "key29": "QMo9qehSKHKjHcN1zkW5b58aUS7sgpZ1mzBXzE5jXukCNxkUmjGhSXZGUsEo7ebtKhRqFNjQUm2VmReeszLev3Z",
  "key30": "4ncC95U74fgFxN9LnWaFdv6CZhKyPoSNMrnR13Y64XgmyVFRoAkibvaPihBzFT6FMuQLJzhbQXkCSawYZ7PKhyk9",
  "key31": "3nAhroKFCP25cUnAxVDgF8H79rX3wEt7xPUL4mkNHKc1SWn7jNBYbHReNZKSWmCPoEzy2PZhgcKKRqLo2Lpv1mhn",
  "key32": "3H7WuaPp6rS3NXtrF3UCxKWfRpqqN3hBFGqyD7Bxv1MADp1FhexCzwJkDYXqqZmAT278SGNRqdPknRHiLaFfd84G",
  "key33": "2F8yUPBphCiVK88TqMZdh2NdcKDkxG1oDNcigXahpR5bL4p1kBxMgNeDyxvBMty7cTxKKFaRxPeSBaw2cxYXHHEf",
  "key34": "2RdvPA5vpvAUoT7CuC9ht4821kQUAePNbshX9cNxicYEniHvTQPxdghPqnbm1RxF37a69ni2bvZdY47xw5VNWUHP",
  "key35": "AtJ1oMkKWT12ZRQxYoU73rPs4XzoTo5bM2y3smq3YkKHkTE6xEdwNHTyBwWhXYVW8qQCChWmydmHsKz78hdP96s",
  "key36": "2Bv1i9SzTyfYHCgcCVfGQPtFHdxTjxy8ecqofZKKT4svDBQRv8Wf3sF4wVdNY8vUhZju8ops5UK8rS7uXWU5Pnvz",
  "key37": "3hwb3RqBj6TYXgfebhKZPyLUirb7GTe8hCTQezL7hmjLe9MuHNkNgtpYyd5HX17GLT2JZPBJ1QEpcr6JijMj3owd",
  "key38": "5ZqQvP77v8v2rTeJZGrEHAS4EmHHEmyfjqj4LGNoF4dP3spoeS9FKJZ7g2jGDzVV9edCi8Xqce4aGLn8fXy9WmLL",
  "key39": "4Lea5kEKT9Wk5Xnn5FdaY2qS8qgzRZjWqhUzmWe1D5SkLwjdB7qkcZRdLsiVupBf2WAfmcKx3GcmAdeb7MByP5bY",
  "key40": "21Fu9tNdMj7siYb4X7B34Erw1sb1nPHMfLzBJNAPVphwK5Sc8cMJayTp2kDXxHNLXiza9x5XZCaCCQDPmDPmboca",
  "key41": "5godsfaswGz1WFnob1QK4kd9jY8K4sHanFHDxvfWH3EqTMAPQzgXGFdkCnSWqKna8Us11JkQKDW9rBcgeu12V6wA",
  "key42": "2yhQVX16FuHRPFLYu5FbTnY69QTTjpxnDjgDtbgPem2gf2mbbAYngKvBB6dwV7rCixWUWSW2TMZNN5Ro9KkqPANq",
  "key43": "4y156vFkmYg9EArUbSMTu2SGDacYiQbYsH7JkK9HY4qMpo8qPhBx7tQGgHjU1wV3qv1yYEM8bCN1bMB2oaqN1iEc",
  "key44": "4ZK785FvFW1cLfKBxQxoC2hVmfRG5MtPBqQqWfv3ECJvdnqVBrqaq4mKp5dRFa2ZG7PNJpjzTDBhKDsHhgFctFak",
  "key45": "5TY8DqLupBtf8q6nV4BdABHYTy76n9YpLt18FGp89ZaTfBHtjXPeps1h6bZ2D7rRA9N1tYNW549ao77r9xBBjiK2",
  "key46": "4nJzMzU4FoGwyeVDt4XJFg1vmrL1bH4xQSTwR23vVaw44Dvv8DPeKhmXCwDk1Kr4rDdiZLj46LCBonYMCsSEEqa8"
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
