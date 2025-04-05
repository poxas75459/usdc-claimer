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
    "2LD6YGfqTWa3mCcCFXcjhgpFo6ZzuANLd6CYUp2kTGTzFidf8RS9bTbt5QkaT5ypjNjs3AVxEna6Jnnz8HQDBTTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zAf6dHkGZNeLYeC9c4HBcGVGxYFcD8yLBn6E4wNGjGKVGxMVyyyQqTmz1zVVFUVCU2KeUuAj9dAMoAhboyWviGS",
  "key1": "2koSgHjYeRBZDotrwFXmSmTGbKdvgdhVN7hQ1rreaWFJmnd2vdhuQQX2cs8L8QhCA1pZJXY1m6b5dcCqmJiAfFkC",
  "key2": "hTgE8DDK5Ma3w1eNcuH3VECZgLHqDqiQtUqdL82AQdU3RWwB5Kvg4Z9DfiCnKG8TY65suYaizV7WbEsGJ2ZpZdr",
  "key3": "4HxxcJwk3u46HrWURnMj7RDNit9LbMdw7AnQ8L2nTsDFbNgAo3QyN4mJT8i5ri7ZVRUtMvFGHeNhds83zY8zzGJN",
  "key4": "4TddmVBUGCj16rT9N3ydDY7H5naQeUAKb1HLpmsT8oPrxxwHT3ZQ8t7wuUcww2EzQEnoZuuS3fXKRPNkWBiFjatB",
  "key5": "owLgYK3r8nLWGYDpvK5npD3FVfPQWJhuVxL7zKBUFZGWUmy68xJS36Vtk8pX66ZAi4SMUoaqu1iVmznr6kpijfU",
  "key6": "2v5au9EP8ycKfz92GCfhNtENhZX4ZgZ4zqVnnKLiosSm4HX716bFTzzyKpzLcqugEqYCPEXhEfJ2HsFBgjhW6oxn",
  "key7": "3TE4S1hQWmyUTxhNAY7r1qNi6ZHisAHecoTJuLmVHUnWDQJJFppxFT8GN3tLrdaz6PEiMdnFQwTNfnFL2zQW5iKU",
  "key8": "4jovZcAAh9JB1P2ygPYGyXAp1T9wk1LQNwmpf78fs16tq3jPPSHsJMG7kLRnb25vS45WT7M22ADkGoGE1G3JJYJQ",
  "key9": "4yC3gZJJRj3ErfNtSAsVMsR78eMUbdoXysCZowsJDHA1DbhE6ZFAqtd8kj3L8mgc1L3o5JjyZ6uLjchewmJDSsGo",
  "key10": "DPz6ymfdqTysnLyiWh9M55HN9yinKSFRfFnLcuV9GMvENnYt7gvxcBcgfmoPLazwLMqcpYQvioprJAzE3S5MmAk",
  "key11": "2mV4PtrJQnB2D4ykHcA34Tzgvo34JTTMtqY7nMvYDcUArQt8o4T9v3zyYRwc2WuYws5HC2dG59pfM8nri6nPptY8",
  "key12": "2ugq3DhshE6UhvWN2tCNoweSZufzXzUdix1d21WyngkA3iu91xfAiJiiLXTG2wmNnfp7DPV4bJFppZnqbNSLLW1C",
  "key13": "5bRzsTAbEkfAfNKESNUFQTW2YkeUgShRiRb9B6bEeD8byGhE1K9AcRWskRCCW9GJShSyNBBc2BLLot1Y4T4mppsx",
  "key14": "2VAe3VAsdbn7BGQq8CCpAJVqpx9MNCjGyhXdHfVHc3qsscX3hTjLQ8gsJoLCJtJqB8sdi9HbADWfbwosvPLPexAA",
  "key15": "5P2DCkrvbkHNA1XvypzgYhfSdaECJSyTS9upWPjCdWeDJgFh9DWiNYBpfbmNt7nTwZAfMQMGiqoCmA8DYr9CJXzB",
  "key16": "ExpGLcBStp7nsZhM8dTDXXtAGPHg8AaDZyYY8eUmvLminXwQjaUnF6QZ5nF3GqKaPSc46rvwTJNYykoRNAumzYM",
  "key17": "2PN8BjBNYhJaxs6yA12xXQkQs8pVwz7RabKaaSpfQdF2xhpsbraUcDzhWhMRJ4dijE96XZhSbTyhnk2EaoUcDueU",
  "key18": "3ggeg96TDzUnNZpXN4oa6YmNPmJ73qTS9tdb17JDUxW6dZx3xmYEM9hCmDaFXu9JJ4zhRru3aBgPKdtsDkNmaDSY",
  "key19": "3XAeqz9P3Qmorw95pnhZ9Eh1SquhgAhRdH59zSFcxC5gScwAheP964DCFP5aYcUmUcpaPi4JC39sZLab1nXFKEnq",
  "key20": "2SgU41byHrEX2zFESor5TYnmztcJ99XEr3pRGCrYPiQWtcaYU3Ta1N4b6UBiEDKDLgko8ox1eDHnDh3yUo41Y6gB",
  "key21": "CoPjrL4Fgu7XsqZwWMMjEKdemWFtUvXpceQA7H6aGQKyu2r4kQGChrDH1JDBkh4adXrim9fEjs5sCQ7BJjsdHBv",
  "key22": "2ziBhfGyHxuFUMi7AcXW39TV5t6XckPppkAnAXEJW26e6gFPPaiu15Dwcp4u5BXqmVUbtqQLPE7otBmFtQKpwsMw",
  "key23": "3QzSpRhrMVFsktmL9UeBmf7Q4cUpuqpwqvxzZNQriPv76VG9BuAsCFPpVpFKcP9Yk2XgLqsEH8ivHEWCUcL4FWPd",
  "key24": "4Fiku8PehETSQpNCCncC6Zx7PdKHS8iBKAHR5ByVzoySRdSsTFjSXedr9ciBGtZhVb8WnwDipPW6BYRnLiNqRxCN",
  "key25": "2Kx1yMEogL921haaK8q6FKuZg4iWRCSM6BfvYZ1RHYs1TNHvg1RxMM9pEPAvck69ATKrZKpLrLmGBPths4429hQL",
  "key26": "2RaeHXtaN4TCfZYwezoeby2wrnDUSNuWBAH21PasWqSdE3JTcmxUZNGWHC1uYDtTVkZ18hdhuppqp66X4cAtkopi",
  "key27": "5cQAwFgBcume6wPL9zb14p3fDnnH4Bk1t5HDjQcwVhd4ZDFQmQ63tru4oUBdaPNRPfdMU4ETu7cTrCqHK2hS8srQ",
  "key28": "4pCZrX7FLYJGWYVUPUjHJc9cGRJV1pxghn83vmQs6FZdF9GnKJUkN26qL4GbqDJ1od3914xMoFc4NFKTXdbyAB7G",
  "key29": "5gU4ECnX3KZouYcTQ3iFYsxThF48TeKqXuW8uRd78ZT5yJ1eJGCzPet2RU4eaf9sJzVLnCpbBwNrKD66Atyh9gnL"
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
