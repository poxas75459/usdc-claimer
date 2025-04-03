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
    "VAnyK755b534qRybUDUARCy2mHp4EF4tB6k55DyfHkgomfhKuoxuZ7CVSXRnt7iWFtxsjY79fueMs8yoVWaqprq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iYhsxcH3fT1frFw8JfGDtmuTLKCywrCsPH2yRtWN7XaJCVVdBXb9Mq6AYz7W2bRra82u3szuFawNAFNoKU6zQKh",
  "key1": "2z3D2MT3pUEMBuBymdej5iNEpSLbBzfB1WNiVBWx9RSLECuUpWbZQUbDWeZemvf7aEzyR633iA9XGEpKfFRJ29tQ",
  "key2": "2G3evvmvyYW8cGDRsXF979Ds1jX8oZ7uMaigNgPuU5gfDqnD3YfZPbWqGrRAt9ZYAZENm85R7hGr437ZW6r2yqV",
  "key3": "jdqUXvj1Fgz31KKGgzBHAxPZRNebpKdjM1jQ1ekykvvKdJuRoBRi4PUvbHGmaH248zas6AqnTh5iiZr9PsEcEuh",
  "key4": "8ZyuHjZgmrBzv34URSRJom3hpsGHLMC8Qc948A1ncSAjYkLENv9oTrkMsezVxi67FUkUXBBVLEP6BjpwNf6g7Yd",
  "key5": "5NMRn5h7jsGZ7iHk4DEcBNwYmXuG4JdnCwiqMR19ksUWTMg33CzQ7qJT44RaJnv4L1qtuE6qth8HCQMLNb1egLNg",
  "key6": "2ESpjCWKehE4VMgcJijQtihS5KzCnQrgSQ5pS4ZLS4yBgAGt6DbcsXHrPiwTp1xLU1Z5WifXeT4iuYyWkZiDRoHs",
  "key7": "4saQC4PRRsdiu9yTGm3dm11EUSEWk9qvzPDwmv3Be4YKWZNM654xByDzLMHTUmiwyiJvHDj5ZZDo1Tf2SsjQZ8AA",
  "key8": "4sYCNwckT4PC2JnYM5czhUHQYTmircqmr1T3rMXG7RKhQeYGeTWkaAbBbrCtCnXDzAnyQ7mKJ5WLf3aXwyxXA3Lk",
  "key9": "4Pac6a1cJp9Hvtc3RoWRUJxfbiaDEmsTEDrYh52Ud6zMQXjXFY3rGrkocQ6DeWcscfW1Hrv6h2KugECrNHhVcqf7",
  "key10": "3h5pHYAfdQ8NDoSKokgB4ZYs3itjQ7iToBwBg7Z81KSU4biovUqbXfHHkMBMLt3WXX8WCCd2tTpHRTLtQJXK2ExC",
  "key11": "646MzqXnXwbqUUVrqS1EscGCnfyvAWUV4qWchLzoyDtx28Eih7Bep7mJpNDdxyZ14WW57tXQFY9LMVUNLFauYFaW",
  "key12": "2DA6BGowNprVFGnhTSNHimA7TLidyndZdJCJB7yr1RSod5jrxH8qBEfiF2QSHTzoFZHXhQbWjvSMJ7YCrWHHpCHh",
  "key13": "2QA4cH6qpb74t7eB9Bff7AHbe68YVfdY4dwhfbH112CeDk2CtvHEygeUr9yvgCtRpRbhbeDGZtRUxjV9qsBBE2VN",
  "key14": "q3rhqM1GHjAi4mXd44Sb6wRf6VguGP3MQS4XsA7VPT8EaAkECrcQe3i2UbDubELv9bApeXkKxf4tuKWr1KjhQVN",
  "key15": "5HqjfazqfR7mQ5fFGxwok82UnGKc3RT4Pk92vruzW1BbpUCz4555h844Be9pXW779UgTLMC7WR91oJWqtSjgmFag",
  "key16": "M6JdVs2Wsc33333ai83XWQxhSYkUBTpfSw1XmbrCJ6w3ozrP5WPjywzNdedM73F6hRWhuVFmyocBjTEjw8gJ4ZA",
  "key17": "5exfEbDhNvi3F7B6TLM4w615dDiobFLy1PCZmvWRNJPjPm49TGnbDtQVSFvMfndQpGLF1Sw2RE7MgFamE9iKQxdq",
  "key18": "3PyphGcyUEtYv35it4WqBXdKfZaJWT7f97p5HQKuAag19APYZZuJyYYPUB79uA2d6b6CXG4SkJKeg56Anxjp5aC3",
  "key19": "3jrum1r6L9RYWhFbjP57mNN2YFhnz9BqzQ1gjrC8d6cnvSZDHUCVwaBE7wLUHKatEKsMAiQoSXFw7JkNyw4f5G1b",
  "key20": "636rusWW2G1AjzXocWh9DUUk4euNXKeCGriojv2WPs2F9c4qe9KyWEdoFqq8AajDDtYYXqPBAosSz9AZPRK79GJL",
  "key21": "3BZrrrF7pAq2iKs87f6TUKXxrn2ayrff7c5oHVDyUq9KAXjpY1YVarFszXkiRqNW4rGwkxSKtWFd2gPtPgaPK8EU",
  "key22": "5NrDUor6qb83MSdVPBU3JeAbiZRywi7UJ1aNVDmm6jxFrB3PyYmnxAMWAhFDJ35MVtYQ4AbJ9m9j9cguSjHkTpCK",
  "key23": "53RH8oVC4aAY9We3vSTUnfR8APbP3b844utVptFFoqoWKqE1q1mSNiYD8ddApHBSsuPatDGB79E6kpsZweyjLjY3",
  "key24": "34V4fUESvegjnPeE11AjHNApDtyy5JKRKPr2XhQMdbTAtw2eDNkpJP7DK6uKQq17tCPbS8WF3z9bC8HJu5dEZp15",
  "key25": "r2pXpA2FPpSQE3Li3feqiizv4ETyS4Uxdh4JuEZghUA7SCNghnzHTn7cLePQSPj4MkPp3e8BdyEAz4TQebyhEqr",
  "key26": "3iqb9oJiaS3TdrvyBdrqQJVTpBPHY8Fp1d933YcxBWeRUvJMoBebvav8t6AFv9hw1r5GaFdrkd7sy2XPdQoPeoF5",
  "key27": "2jEy8UrmHXiQhYXAZoqNDk2YHAZ5UgiSnjwHnta4JGMqjv4uYQ7hcptNY7ryYDMYrmywS2c6dvX2qHbnzLWkT3Xh",
  "key28": "5BG7HfHRGXKLVgx1715JhYuBMqxoiLGKsULHMsApD2TTXg6zeSDgcnX64uA5i6kfr1w9zyrxxTdbfQYEY83bu81S",
  "key29": "5afVdk9t47N5gmdRJQkpQrDtUnMiMsaUBZdy8cdqvyWL4kmxEYFmncnRryLbBs2WKXNtZSkb5au5tvuJuFSDTRUg",
  "key30": "2Sbr5Be12PpLdrULu5UPKhBMeVH4YEedX3MKzmHigUL1Z3jNycrsYrUYJNAjFUogqj4vVj7anEnJBxVfdnJ1iv1i",
  "key31": "5bFYDjayFNPj2b5qHaNaR5YYciYukB6uodiDekXweGHwShWw4znjYw76aiHpC14dpuUNtd987vuyzGGw6qMxaQN7",
  "key32": "2Lt7Y5uFMqfbYQR1WEHLi5u3798cfJwNF1r3A2k41T3Ent77YSo4Gqxv8djvkwuPXGaXF3gx3NqA5ExCwAWn4e8V",
  "key33": "pmh71GyDj77HxgqLTBcdV3SyWVUfC4Vu1oJjJcxw5H9JUB7emS7tzBJBD1qEkVid3sXzyceQ68bMqqqvEcaR6gZ",
  "key34": "4WsQmA9TpVpWMpzitoNGHkayUztivptEdVUpyB9iaMUMYiYbhBF597geMdP7JZDTABz8jeCkWcYgggBSXHwWvVpw",
  "key35": "iZ7bfVJFCBYoDfBLrQLbGh8DiqzDBRjWF1qXob6uXPqK829dhXsBqycn7EV3A3wBHGhYqaVrDZUfSbhNLsCTEju",
  "key36": "2sxPgkhdFozprVpqsUZigFtmfo4Hqcdb2Tu9QpVmAuL468bytqwsNwq6KSqd1dtR3BZmJTm5fKpfAuenihBmjEci",
  "key37": "5shQmX6RKELGd8aCEkyjSGbma4sTf68QQyUQCWueKv6t3a5444PmpvFHby8teAK3NxdHjL72JZdbACx2rD2VJJ6b",
  "key38": "2hBe73h6Z2nmhoeWabQgSiWxjCFxzynaNn43LhsazwyaQE77qxoTCV8YHFeLfrWfDyK1gpBWqnSWZuH8pY49dZK4",
  "key39": "57xAUSZ2xeTSGX6gLsuFH2xf7pFRsitY2fF2ixSsBC1RWJX6YazU39fPqPjCaHU2o88mSpP8WsVjoy3swtSAtsDF",
  "key40": "358ftGmjqXzZrWNLHZHuR6bY8AqAYVkzAcSRs2k82wCrMYkZpoYDzXTvxnGi6femX5aX2xwAUGydQwWRnmpxhqyg",
  "key41": "5yxqpR94MxtAnrkjHapfkiqPzMdXjCfAuoZByijcykSbcHVWa5qiaCAgDUoA24qrRCcaMS8zb2qSVtcee5Zf3u4M",
  "key42": "3Z7BhwJrAzcHfgEEDtKk2Dty3sGNvfRdHwz9bqHirXrszL1uga9d7g6CKrF9a8C5xg9zBit9jRxfcqcuZhyu1cGA",
  "key43": "5Ex8uWWDyssX26bf4DwVPPghdR4nrGZuwVsJGBCptKAAuWcLnQKUXAqAPXLmfhhbnnUE9YSntEuQk6tc8qm6Rh9u",
  "key44": "3ggg9ratFqoZD2FGGXtqykgnzEyxvdk5J9UDjferKme62inCpXr2f1gnjqU756uFsCJFMuBzPRe5Nw8V82i2sF9w",
  "key45": "3pBeArhZPf7tbiFMMSD86tEZnZJAy8H1QhxVkF6LGyCFZBj98bqme6McD1nhJKocL2mLYdZwoUp95XTrVcsy2k3N",
  "key46": "4EcKffwPBw7NvZF9jwbLuqiBFAb5v1MPEABHaMcXJv3atd3irP9Bv9KGLxqeATWbFp7A3u8ypcPtCs8BCEojGefc"
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
