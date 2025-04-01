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
    "ety8kofhk1566CrLrXwp15gELLTAKKkzVoRMATpESiKh6z8D4Sd4F4FasrR4dvkqWkJBvk3CjUkgmeEnt8b5eE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdu97cGdoTtGy6qGEgJHKhJj6NJJmdmKwZGQW24XxiwF3Woqv9s2CbpX8tTMgrmN2ngFwv5VC4NgwQqNAQS9gZp",
  "key1": "2zU5kAbXSu93MKFF3sp62rJzYkWebNtFMfsBkdsdbdL5aBKpoButdx3g4cpk51nYfo1Zn6MJuXiPCk5DA14KsqAz",
  "key2": "3NuF8cdsLYKtuKmUpRXAb7CQc8nyHLZ836epvMdYL5jFEMtD1zd9moJh4gqoUaf7m8NriaEZV8SMPVc8X2kj4t1t",
  "key3": "1fDwRX5oWNcBHnVFq4mcJrjfLRDbHuoAsm7VbphFS3FQK8t65oxpMSQUirvv6jNUfwRSJjXXk6uhFg7wNZzgWvJ",
  "key4": "2AVzRKqo47hSmpkh1CTVrf3N1ZYCs2Ht6r4SSg6fF7t1c46fUHT7JdmiR8DffQq4CYEW1SFiVbuXtDsp6ktqgxp1",
  "key5": "3jtA3arbCG9V2B1jcsy1LUwrwwkK2v4maVn7KeYmHtz9TtLomWp5Xd2YoBiLQSFzEqTE9GJFy8CHWAMMFnvYSmBx",
  "key6": "4zAPb1tkzueyDQiHr12TD1VM5XZEZXekNJjuMcBKPmAcEsWBYSzHnvk1XC4vn6cta5w7k85gP3Bsew8KU3Wu8Eex",
  "key7": "5kq6FWUw618cnSdoMiDwSxzDqyDPp6TEHqFnYjiQBhWfy2yWmJybb4xm4thWCLeCTjgUTMUrmnhTaVHR89kmaYct",
  "key8": "2QD4FVgbFBLUnHKuCbuexdmxpQ4cJBznyA9atqmnLhxV6Ku4Xp7a9rurNRprsSZtJ7YwJvotG1k8U9FCq7fWSohD",
  "key9": "2NXnzjaD3zuWDXNvss1qHKW9BhftpdWVE9o6EeGY3hz6b4pT9DgQnJZCm8LbMYBCWHPzkbgbKxh1HBYRq5q62HqV",
  "key10": "5qfRLPj55q2hVTkdd1aR4B827w9oaiHxqevDs48oMfSkqsvmXgWoyLaRGoFcpM5zqGBj6vmVYdJixrdm7o8dzEwx",
  "key11": "4KmkjBRR8Spsc8CJruduwDGnZGpiFDcXygx5w5XRAEn8eqeaZuooQNpskSJZJB1oTVHod341zUYEnd5hXqakHbvW",
  "key12": "4rGjFgxDMvSG5TyzRnQuHq6F4Jh82aHv5sdu2wsNsBQvV29BVtYEUBVzYSrntNMqTtPUeZWXVkJ9ya54iVYFjHbu",
  "key13": "23CCmfGA4zvdMoC3UeqxwdqBd3zGdG9Av9QNoEu4tUFQcFuZxd63xiW2owN9Lh4h5AeS1kqQUR9eWhYHLNVCe3JE",
  "key14": "gTERu9nx5WHhUcz5qA38kyNJZxJvjyph7AmRzCq5BRQkXJy5mVq9ZNNSvGLzZ28B9didySqAoQeQY2LaXKiD72Q",
  "key15": "32MsR66QX4hS74jB9RfFt7p4UH5u5d6MFCGNxvtSuhYC8o9mLNqZiXK5fRm8e3PKzUrBhWNDp2kQwWchHw4u5Kk4",
  "key16": "2bSRFyS7Q4mYYwdqwAkJtwqCfQ9WB3qxoGqZBhkFcLQ6vyuJkhywibfRnicKSwy6xqzN9f4ived9ezQQbH3yMXf6",
  "key17": "4rXBYfL2mc4zWqiYHouWaKqpv61rdBFBGSrmQ9A1GcMCEQDgyZoVGhKTGQAQAw9VsGq78eWwVgx7wrLb2ScYgcXP",
  "key18": "5q3DaR5da9LFnkbLTUUvokoS7ZZWy58xiy8fx37eGCjJJY4si8KkJvsQZS5zns1WoyYJieKndHwyskm6mWvk2oHS",
  "key19": "4cw3WcTjCEtDcHmVdRduTtbQtT3NUY9Y981EBS5w288vfcrYNaUAPiboiLbwrW7iYUb2JyCgVe8dt4YQU2GqvSrk",
  "key20": "2E8cDHVKbnJCAyJXgSFPzXBiTd4c5GotsNjd2Jw8FWSS3ah9FWGMnxYTjp6fSJiM38a1tJxHuKMGJsdp7oqFLXJC",
  "key21": "4SQECesZSK9JM2SrrBHc82uA2Tx5WUt9BUffGznTcpUr3oJksFneehq5adAouctGHsQLeJiprkHhk73r1tCetLi6",
  "key22": "2S2WreChKfDacHcQZ2LYMATFPVfFxUVYVwHHGusUn9kQbrcpqpGFdruLjYDstcMV23LCmnGqxNQcQp9SLm2PhGZn",
  "key23": "2rS2DK2i8y2rAhZFbMozJB5s2qkBmWqkbGj17iBwqKohLZ4BZiGBeDUnWWmyJW35jfXJk4oLxYwYXqpubPy9qEoq",
  "key24": "4igCjsnyjAZFiTij8KNiJjU4GX2L6fUGGz11GuXmz65VE8UEpqQh6DjN2UNb2P1aodzQ4zMrPdQF83noKfXShCJo",
  "key25": "3Aj15GZF1vasLm1sF3N8UhkqoLWnu4ysHCuwDDZ1yg7P2qR2p7pocmaVqV6RaSgXSQajmEfzXmdBrnnaavBA8Sw1",
  "key26": "zApMoSkxYAbLp6vZbXLBwBRnMV7SsKQ9jFiCyPFk8TwsEzVooTo5sbDuPw3n4ho5DQBkHfiKTzoBbmR3FVhs8hv",
  "key27": "ZpEUo94hEPoajKBiRZy13Ed35htgPGQg3NV42vz3v3v1pJr3kC7eRpoduf88LZizEZYywrvN7hygTqdjvsfM1U9",
  "key28": "5GVPFxa7bZT44dBpmY45fCZUUnUKhx3LorF64xcJYsXNB9WBzKvNyaYBr5DquYApCqSTKHD1LX3PxooocsTaDp1N",
  "key29": "5iv2sTMhcCpLv6PHR3v99q4sAXR6FkqwDHP1u71ErRU2feDaRPZ1zuRDrzuSitXdYenpiq1PazV2Z8ZU65UARtYg",
  "key30": "vtud8pxjJRJ7idnuhAzx9KWxdpbikkCUBW8HJzbDwBkmsnYrLWyFLv9i7oy4Ax7yB5YjZbAr6jNrCy5ZnPzi3pc",
  "key31": "4FVFrjr7xRD36AbyXVoUHF47VL7F8w918yGjPckxrZd4F4f2obRWPRipdEr9eqqVq2KUSVjqofDADBfPb6AZUJke",
  "key32": "4BsXjz9a4WLEVvJdiZNHhxo93JCPaGMTcQYTJ4Q4odgaXL47w6FoU5GVpzhrvMFaxELW5ad4rvnNSgkXtmAMQh3j",
  "key33": "2u6PjWR5dLdqadQgcDYqkm9pFFogv8i6jzevo9r1PAtWjjF2gTRRjFYtYXKd8rpUkirqoMGtnwVKE2uPqgrwTHSf",
  "key34": "4Q7n427f369tt9Ue1kGBrCxXwWW6gUtTJtAtEw6J933GDV14na7FwdqJb6sNM774evBi3udqNt9qaEuYnde49AU6",
  "key35": "3mE7kM9YdH1L3LgQK3UKsFWfGT2dTXiQBD55HBkiwXTes2NAW2UtU8hZwYrxFvLgi6WMh9yBJ7af8Kz73M1Qi4pN",
  "key36": "3EyGib4eRQz5SyNhnKhzsH7D1QgEnZ3NBP7MTRKAxzxU77bvs2ESjgtzZ8PghrKvBbG313eFvkLdHUb7a876py48",
  "key37": "3sWyg5jPzjn7Xy7E6hXk1P9RE4x2ec73cYosfkqMQaox7hdBKvoP82B76JfsdzeyVykTfQf82dnc1tEMrCxaPnP7",
  "key38": "2dcXn8TYohSd7efQ14M7Jw7HKujeWWxbPxDcQT4pUvrJRhybtGCdUVZpbvomUA9e8Qke3a5EmX9cCkm1fExPKykq",
  "key39": "24Qw9QKJ2Zz5C9YeDMN6np2xd7r1KoZu9MQM6KZ7GyJApxzimYjtEMsWPWWApwzpJMRiSqaznDhEfPmA1se4q6CE",
  "key40": "dgagosYsJoyHXdAVs5n9DDgVC1tXtewAM92exoFK7UfwjPuVRcxBNzAaPRSidpTCF771kWfEQVtmiEDqjxcdWVH"
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
