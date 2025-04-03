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
    "bLH5g883Xhqo2KjeTQX9JHPAjw5AgL2VMAvhnR4b6UdTv8CcSvmsrggU4t1UJ1SdX6JnkxA6VrdNypwte5FhcBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyceE3hGscxpLSEf9Yn19Uq9gCitSmsojwxFGMRkL1XsYUd7m4K7MaVvmwXC3zZJfdckSB9X4EoQjoYLSbmvjnk",
  "key1": "3q42GfJC6SkQtCUhPJ6KPJJ6LwBKEZLwircroWjrtrAkNHqMgtHeS1xXF1QKSXf15rY9bxhfcfFQXEYcgXuvjD4R",
  "key2": "3Du8VmgrcSLecJoScBRXurdb7tVpgAKnSwXdyaECDu3gCLki7CVoCddsvq4sdL6UXmGo4XWhMfw5qTmxtbKh59Co",
  "key3": "2GM8PyNAikS9u96uZRC12H8nWaVbavjLh75G48yaTXHqUErZ1qG3uodbHydV9Qxk25Gmxrjbkx3HfnQ7tzDog2uK",
  "key4": "5wSsEH8LqFXEfxXqDQZzX9Rh74fhjo6FFRRA1mmdrUFVaBTJFJCXuwkWvbZcuGxPkzDHhjT2rySUR43TfKJGi4JD",
  "key5": "5Jw5ZEgdX1yvRcXELYWoA4JqJ2kZ6vqLG7abQZ39uow2keoqBT7TZuKxhTwZfJWu2TaF4fDmG3HE9w4VZAVchynD",
  "key6": "vqXmPN4Pw1c6zfcPrs3rFzyS7ApfRRBrXpSTFqZSX4aJVTB32gCJgyrLFGujPScA6V4AcMeiELi7jdidyXJiKgD",
  "key7": "2mgvk4oNAteWvD4t8LAVS7Zo7soUngUiRFQSfuu1bpsNtZjPyuL2LMextS2ehB2uTahFzTLACkqWRp31Cce17w1Z",
  "key8": "otGCpt4n7DqqbMcQSYSbCQwHvR7NRi15pnLqKWKZZ6nVrnWR6CaHfL3xbNLSiwyexCo5VnYRQexVtoj3cmRc7D3",
  "key9": "4pV6915WJZXxpNhXPSmv4TuQ68rPCriyuLvupxJ9HfZnFaiFS37C92yUNBSEra3ofiSrXRWGjPHZBerZZfcqbQiB",
  "key10": "TS79vWkE5ScRqKtdtdUACMnUBKiVtgEhk7PuqrxMmAvPUksLV8GcKyQefF7xBdvL3os2w8KTfT7bBEuMudaseJK",
  "key11": "5yP4iYsw2Xhdf2cvrqmAy36Ht2FpoJhkz5yuJFzxzb6Ub76GDWrFgb2h3yDrFk9rBRtE3xF6K6q9mQDhpUgD9nvv",
  "key12": "3R2nAGDj9BdSpkHNHuc956ePf9ggxLfazfSNUMnufsFQLvZXPxtDuGvzNTDSSm5CY8CtdZvxsAsS5w1MCZVgpxKy",
  "key13": "58fjhwBEkiWJdZdq2B9a1a2ZjDDdtBLQ1qM8HpY7qVr2yCBDUQLf8JH4h2uo1S6kpBpe8LrKi4eRJqTN8XmqgHLo",
  "key14": "3Wdgm8qk2dQ8FVZRXh9Fw7eVUnUm4iqB8Nm8CzsKrN1RVVaWjBCaTTwHqX1biaFxAwgEKc1YKasMGgViRBNPCPZg",
  "key15": "44oSvmePCuCBCRSLV4r6SCyTYoEsew5dzkszr2V3n9ophxdoAo4ZgkVAM9ptiHENHn55BNqfnQSxHztkNhsoPUci",
  "key16": "4kZ6dUzDoE9iZQNBofmj81o2aNe4UKC8uT3uajrG5JueNaZ12EibfhqPUQWvGv4Ka5g9jxjij8HoHETsQgP2VbAC",
  "key17": "3T8DRVwh7qutmLgcY4Jj9j59bWqWMzkLJiPpinDJ4ixc8bamk4cAbKxcG5huKfyz3hXJe8SB2x3viw4sSDuHmKCs",
  "key18": "3wjYrSw5d8AYtMQwjJFpzCDBoMufVQEgkGbormGCTJsd5VmeuRspyXMHuVhWCnCutGQt1xhN1bpgGfxQ2dvfCAAE",
  "key19": "3efaEAJyGZn1zPGv1FiafduQ6Vtz69kaZ8C8AvoZapvoGJcNP9WenYSWxhApcPPp1No7k2jjeNUUSuNvkAQmS26u",
  "key20": "5zvSr4TUM8yHmZ35hs6HFhhgUnjrzSCNeDEzRxKUHZxcSBXhBsbNb8CuJfctYC9tqkhiJNyuX9WuhDUG5Cva41M",
  "key21": "2JMFXT6ZHG22wJZQZhepiGCuur7eKunVaDpNey6JzenMwgVkFoDmy4BYTWjqEGfCx57hQNQjs2rASZCTSh1WZ4Um",
  "key22": "wpQXiEQevp49HTcW3SJwMgUJKhdFjRHSyC8ZdMrSzxWs2d2wLcKBJpHCYVA4Cd7kyFCCGZvVrVmJAeQyMHBX2zt",
  "key23": "4YRSaaLx6dbVboQF227FwJ2CFN9ZhfqcLjMiUzNnEvC5Nz9df5UsfGcoHSS99naFZ4s4r5Bk51Adpaq9rwb8EJP3",
  "key24": "2M1pLFnrhBHC9ZcE9XVPjcXmte8qRc4x9VgusJ22xNbLfY3fTfGYvVt8rq6xQMzWGXLcQsGR8Quh32x7qzkXBfWX",
  "key25": "2qBuLbgi96nVmx4VZwACTiULA9QUbFWi9FwkadmomcVgBj3s2Fa1CnpkwDm81YJPFFVGmc51RAJD5kcwBqNkJ67F",
  "key26": "3tWmqDwLgvZDKWbDfDZPg2ZqVHSkBiuJr4dC32UANZh3aFzsyXazESS4VnCZogEharBHhiXMY7r3xXQ8xZoypgdx",
  "key27": "FDnAHXTV4WzmF4phQydNnUMvCmMHFTz7AnetSPMKZcuPaZ2TrKX4d9QCgmZbPK8ggbuhjRPa6nZUyEXcuxbScZD",
  "key28": "3e8kk8BfBJZEXjsmR7p6rWREUqDTMXRi5ohALhYnhZTKFwgMzuLTNQJpLTyYJSMrAN6m7s5pyMMY8zMGAEyStDVv",
  "key29": "4oZ4sS2M5aEsZgqS8TU6z46gPUrXmxAnw2kzJKqykrZkbYmNPq7sPBSs7336vg2UaWNbA1SDYNMaekgiKbdwssFf",
  "key30": "5RFv5JNNq6rRbtD8E9TxfVyAnTgw5tgKLBC6sJ7jrqJgxfq3H4Prmtn5VZk1JKxT2N3pSWSW7s2pLjQuAKj76FT",
  "key31": "4o6qKMgyJ39ZwcggjVqnYFxq2fcn8LTueMPaYPu3erf9R6zUKn8PEnwpMJBP3cYD6QxK3p6M4jBcyx6erMNynYR4",
  "key32": "5Ji3SAmWJZo33Uxo9iDywBQv9YHRZEFmdKZzUrR583xWT7WMeJY23HXq2znzUpaQQnwXdLWhh1m7SW6p6ZbwfxHL",
  "key33": "c2gM4FRutFxdYRTgzAJewjgwrK6Lpruw4HvGa1ayTmwpuMBgwrW7464w5iEMD6RnQq9YuEamSHX8M7dJrRwv2jB",
  "key34": "289AQNuFjCDCdYCt7pFaiTrqoPpv6QcEK9SYwpDytcTkWNvPqMnmeHk5Lzr4YByyqzRgzKTAzkg1m5ToyqhrEL6a",
  "key35": "d2U5fe2gEycdG6y8N31GDv6KDJkrCyLvwXkSKBRWbhKfNXGKDTfK4Ms1Ca7uKS6x4RbRMcJbcmpmGAagCXaCyMX",
  "key36": "4YrPBbiwsJD9iFDJB3M6pnKiWBQJNe1tCMsv7pkkJ1dmuKQdqkWiF1fScyy9gSTX8Zwcbm9gQoaViGxCbe8LdFnJ",
  "key37": "2bC4yuDKXEfdbLLDGzuxKNSyREH4kykoXArBSy7Ra9Vnaw5hARADmobjwS1jdVaxqMAfM9ybk8iyQUro7r3sBHaP",
  "key38": "5hG8nUVWGhaQq7BjJ8R9xjNizg3p5XPTHFuLtZ3WgkncWFNLcxay7ojib6qSPUFMVj2nKgDZyZ9Czu4fMghotLqq",
  "key39": "5p8PfzFQw3Mgq9WnoGzvpWDT1uojY4LDAjK1T5KP2tnR4iP1U9dYdh65aHDZxqimTpj4R4SANevyV2nj6RaBkkNp",
  "key40": "5NK2fbNiqcwKSUNBtb9m6GPTBVgr31dujj1qK2ZirxNwtdpC2Xwd1YG1k1tvkZatnufFrCMuh8T25ipMzpmjoyjG",
  "key41": "SMqiMwU2gy2k5sALdDkDobhjArQRk78WhkjTKryK1rqj2trwZU5YAHYnayn5Qm5LXi61TxT38Qt1yJbsvdDRbx9",
  "key42": "CeMYzAVTdeNdGb6ijkF6gXm9jHxcNtDiPGFMBhAYhvZCZ1ubAvJA9aSdXnzZCmJUviKoHdWZDsZgfzrPFoPLm6D",
  "key43": "2bHtDsznzN3ARWQU9EGbBTxRH1kdBTxackjeFYd7hCVH3KcgdAzJEvgwzu1pGV5xVrGYRALowjjFLFgA6s3ErK5g"
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
