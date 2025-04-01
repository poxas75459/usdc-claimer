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
    "4vNQ2yf6UbXjHZFawYrh9JASxpx5ppfdFCrM8Mz8Zo63kbVXd2ENkn1TLMqDC3GRs3zKxeqe6WzsYtba9tvHGgro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qGKQ5YmrTJJFxoYY7XQ3DTZKmcgghichdZFJemBMaLqLhSma4b4Nn6H4jG7MFQVndYEvRh1mgmqVnQuq1CYo7Hu",
  "key1": "4NaFMCciGRYw5piabRnzJm5HWTxRubxhfwe8TMnHdoMJHBfocNbPw9bfmoNfUj2iyFFMHwD2rnpSSKhR68ScVM3T",
  "key2": "2b9oS787bCnQG5quXCvuo8HVs2HGpC6kGEPncqdHNnLMQeWfPzgeYX4W1fgYQcd7FDyg3mfc66r1UzBYqouU2fZc",
  "key3": "L1JatyVPTmgnoAieC5DYY7G5YtKrsf8oJNwGrjZWKDeco66YcDsWWSPToCdDNgCRpc8iiMVkur11eFaqWu1yGUd",
  "key4": "xtpwSePFXavLDaeCCGUibzAKgPkUQrKfzLCfLxR6RKTTzZArHhz1iDXaEVjW6BF7dHqu6kvGsZGS5iVvTtrgF8W",
  "key5": "3dsNTJPDVFAbVgqQLhDPpZ8y5sL21w721WhwLFLJ7nPwNDNvkGpx7nCi26HvavutU1cnREJkiXBa6amvsP5suwcC",
  "key6": "5Fmnnsy8grnHcqnRbNuPUM9bfYiHyeSjvzjXLWwPGRCRnsmt2wXrQ8QYAt1yPNTGrFBsXtstKWWHXdW3nqxMvupp",
  "key7": "3kzDJExNYSkWgA7kLmHhQAGa2ZeBD4nNvo1cHtjGx8T25QZbkwA93ZVUGEBaYMpjC8aLzJqBjCZyNX196VU5xLCG",
  "key8": "5RF2np9HoaNyWTv3E7LqTvaAgKbTp1q1PL6FjTvScUh1h19H31sVqsYNZBBGwAnooS14KgqsfDMehZ2kkk367fUH",
  "key9": "5wd6WwhFzeHy2iq9NNuR7mKngJxPirCHEp9pjEJVgcrRwQBvu4HN8y4rpC4frFsMNxY7gTrYM334fzoDctD5FXMU",
  "key10": "2hV9wViXgZDZTRuPrCEWmJRpGqumhksGT5EZScYDuwaoVufzrgBhZWbUeyCX79EGFuogfC6KJ6cjPyHCnaDy85DT",
  "key11": "4ZyQBepmysWmgUngjG8o6fhC9ZCeH4vRg3BH6HsX3zmyxE138HM9JnKFgz6YVMd6TjU5B5Nq9npDysfHVeFY2s5N",
  "key12": "azbQAyDJbSGhKYg3gyzGaG6sLcF65hBE3XCVRNJCcnsBDDrz9T1Xkb411NWFTwYQ8WNsjyZPC62jt7t6CuEaoYp",
  "key13": "3e1vSjy7qJa7rJpGt8L74QwDRaMn8VFArj4XBLE7YPZwo5jj2bG4PW2oLkVnvNfvxAYGFTGjbh2XEYX1VJHDoUNw",
  "key14": "3UAMz4ukveoPzBE8tb5zWH7AQdnA5VhEz69GgWtFEpYzDyJhrfZM9kdo4wYHY3oKZsoMM8xjc717GjGPDXNhKqDX",
  "key15": "5VUshPQ3SnBauyRmyPKLMvCJ9Zda3zhWTGoCx7L9YQMWjrS7Drzs6puJqjGi6bymHi5f1q7mjzZ6QMMqZ4fdT8NW",
  "key16": "5Qee7rUGo1iZuedE9FmHUk2XWFtc6jFk2YdkYPBmgC3fycttrHTTg4KE1tvPafcM4uVMEEk3TqirVV8T11JyYhX",
  "key17": "4zMDKyNsXciiBaNj7n9fEvYeGvhtaebQ6zxMmqwwbqpQ6khSWQ9MU8VHWWcyCTQcbE4eMnGYfCCnXXWp3Q3sBhkJ",
  "key18": "26wriibyU58GJUqngezzAkJAUYf5Jp9qAnUcnbJJ4txxi82TsLVfnLFW1X2Mn3F3Hek8FCBV3Wxta3LKm61HZAqv",
  "key19": "Kwux6329EL3vZP5mXUCPKxHkHvw6xvgXMFnNGo7uzuXg9oQ7sq93nEEpi1JyWaiwat2LaycCCy89RnWpaSioTbH",
  "key20": "Eb2s261mND4sj7hS4VjT2VB8zDQ81RoHs6XEWGLVtDHuwxWV2etBfCV31tYYpvtu7kqvJDrCbPPdYm2UGUFccvN",
  "key21": "DCwdrqqVu9Y6NiH7c5YxTMNagL8EVNPAdVmPUnjSQiDeLhKjxK5X8DqwxKwM3QdvS9PJUNsgVLSVU2nKH1AX1gW",
  "key22": "3qPpyUCTbz672pcSag8GM4bX4EntPKeKZnVYa3BcUE5h9HDTthutNTJdRPW4M1CvkG6DYvoKvzTPyZmA9j3LCaUz",
  "key23": "3URXUAS9j65HCgrhjV9axTJHP57GVjooBP9Kkyp2CBNhrApeoEX3Z7KM2ng1PJQDzNRwseDUrVB4btQuNLfqsaFo",
  "key24": "5RRXPK1KDhCsTLSESbFgukTgd6kxLC9Fd4DnRJymYjbj7CopWiu1Yuowgxhi6XxWq1SyC9Mk5oocR1tLYsP1CRZV",
  "key25": "52iEbzsck9vc4HUoo8oMntdtgFUemc7Kf2oUWy4VXjumhrZDhHRC3yzM4FLGHaaL8P1cCMCDrQinVVpJyVbxU9ge",
  "key26": "2eXa6yTFHUYHGQaQiqxxmF5VnZSv5XU7JwcgTmPFCRvq5kWHAYqfcLqbWixuBxPfwCJzYizaaACcu9PkTdWVpqrc",
  "key27": "5eHCyStVp5yW1v3MqwgjBtJBapiGSenRcdQ4jxoCtwuMB5sbFjfNjCHA9Md294p6aGHQNrGNKb4P8S4LSL4M5q4p",
  "key28": "54ZTHcLgZTbfjf8KTYiNskKQEWdPH35kRHW2gcieHvNU53aRJF4rfYCQBkcAQJhBcWTR2c3qApEKB42S1YHwxob5",
  "key29": "2oM9Vqjf9Ksd4E7Nr3g6vWpQUAozz6EWQ4ULTv15eE4puqsYi7CsW6azNeoUGEx7sHW7Xz26WEBPMNXkVbobgptV",
  "key30": "41VXzjeVGYWcNrFV9G3JQWa2sNNKS1astnRUEj15oCbdjgFdgSvsmx8eK4cXPBc69UQEygkDN4WZsQGAMedPWbQ7",
  "key31": "VtD6NvFiVUpkQWQvoYiVhu1PArNoskuJvt5jt5ZokRwfkCqafLtNF94Y75aJvT776TnZTVJsbbMCzToccVzeCG8",
  "key32": "34Nr2zG4KdPoJ1FhcwhmeoynMLmQvSKcThAwtkzHgX46Vug3NYr47yxmvyo4CogTmEc1LQX41HDLvsrcVfsbkiAd",
  "key33": "43V95VaqZg2E36sL5wBBvH1axfYVPC1VcUfnYuGZyqEPBYEMryZBKWUvW1t88UsypaQYaQEu3hjdU8CFdPYGT5YZ",
  "key34": "utqFf4RrqmPD7roDN4C6j69HSxZqvaGK1UPK1AqCp1S16viHFDfFbWMTzKPCjjgSqHUcbGP5tFQ5VWExmWvKyr6",
  "key35": "4ri9Vr2ZehMMvYg3h8622L5CAVX1pwUWALWnRePej5VLN7CphPbjUaynj6GafxyL28fCaagUimVie5hn2KAYJG6m",
  "key36": "3xbeC6TLmiDMEsFaaAB2cVMkg9uVhNKYPjeWdZx6amXb4ywdTUNbfT67Nyy8NhT1rTHQEPMEV5CcZnR8CVEpepgW",
  "key37": "5K95EuEXVPkfUinc6MC8eRPkUSFqvZzCByeAK7SnPAdrhW9n6MQ9Bx9oRWd1JKfnoZ4oH7nMC2CrU9ebfQqEBuHa",
  "key38": "2zEeEN5DQbL8PboLLs9bPRsXqL7cEjPsizRsnKijHw8iCb1jP1MfuEwBTud5o7Jce417qPNRS4B1TzNFG6praPtJ",
  "key39": "4KtK87gb1adSbhMWcKhatoC2U1xFheoThs9KBdrkTzxLKxam5AQ5b2VEv8ecMDuS47LqUZzfgdhmpvSQFvGQ43sS",
  "key40": "5KRfR9ippDGnhtiwywNdrE1hU7pkrCC6RBi3J1x4tpZCujkiGy7y4cgifa7jjN55SWyQ9MNhSQtgaRL2oGu6xaFn",
  "key41": "4eveu3dVUbDtLANKbNTe6wgWJKUgiE9btAAvb2LSMjAx6WNc6p22ZMmBgihu6XyAr3JLGd2LjjRz7STvdP764vKK",
  "key42": "3trc83KhmsvsYcKCSiorsv5zVJiD5KFUtyBNtdUMTBnegQUvVncyWBu2AMa83CTN4FvM8dfCfixYKbDiKtbP2R5z",
  "key43": "2L35Qnb9RtiMUu15NGM4VAa9shFxqWm4aNsPi5Ri2HvFq7EVqBJ6AGzgxnt15E8zZBjrNfLXw7PMcYru29EC7xG3",
  "key44": "3qpX7ccEVRbMyXjEuG1YyHoFFXf8PPvXRGqfqmffRvbm1YTTzr7eEJ5JfUu1GBDE4AtpWLDPBsZuorq9KtejjgRz",
  "key45": "KrJf5cMu1P6RCEjE3rSWuUfevkVEbUe7djD1qvtAnfhgaPmmiWzbr1bdGYbTT8JSkf8QqgzD7CCw2RiPWdUQscW",
  "key46": "3xztmoAPq3SPz3jJ1Exkpg6PEtAx4ukCsCY8r4SCTSpHrs34JDWipY83zNFyEyXMzrPq2V9rEDmG5hgKvgzx6Q6k",
  "key47": "5ffRLgsVDAYXhmUPYZPVHCMqBpbPRzhcqWibJ7uEMjztxz1VnPz3d5Y4LPcyJbsKpq6rhsFLXe8iLY2vd16isjK7",
  "key48": "XpbV6GfzXgkxmTzGpZXmwwLBD9udZW67EPNR8UQdZoz85WuHQ86F4RtWSyrq7E3XmRSHZgR5qj7ywXJqD3YENmT"
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
