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
    "3oAcM8dYGvrFkJ1uknvQ9C33WEu5pRGwcMLkTcSLV6zvwuDktVDLoFYSSYgz2FrV8gaeUHNuvfEuMg7qGHQUFs1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htj6xxA66kPAqYxFkWiYef8Tnt8HsKq8pVR4sWjKyziFRHi8WZb3TKQZnMHZvwSUPqg9hYnSjHgZTqDZbSJ2axQ",
  "key1": "4c5KGVq3kM31Nxag9RogpnrJzuQkfzqRe6qzBmYVgekjd1ggFpyRtzpJom31SWf35PtBHZEwzKqGsPg1SxMQjC5W",
  "key2": "3EpbyWaazgYsXuVEUiqcH8wqfuqZ7S1zgt9XBAZzDz9gvtW2kmC2zkcazt93APw13CQ8kbrN4MHWvBkPEH2LmBpx",
  "key3": "5Lk2pRTvKjHe7uCPTcDDJQky4PzEfwH6yJz4Bd4GhRWYReHLmpDDkHakKQ9QuAEEQ8qFEkHH2Rjdgr7UMKseVr23",
  "key4": "3xTLxV4GJjSxoHdK1PzBJafFp3YxYMvgJJrYBLxhsReCepWLMtmBTW2czDRS4FgmWnZ6AxbVZz7egEEuzHnQPuL7",
  "key5": "2Musm5ub3pmtxAiJL9Zys6ckPuLxbE4fdVwzMn4abCxTfjSVGtQj6AkjpNbMZfYHSDfAjm1EfcrzrqTRErFEj8DS",
  "key6": "1287uCDQBxA3Zqyw8VucKopxYhHtir39ZsJTkwSyfsHwUWCBqdNsiaRhCr6vWKckVZ8eHgnjcVKCeNBpUWJ67yWj",
  "key7": "2tzja8ERPxa5o2MURJgJnCmgX6sySEHbMMbo4v14PFKypRWVgD8YTYPRUwVSrU4HusPPQXidWMkvcGzzJcdx58x",
  "key8": "4PrDzaYcscfsfwv8FAcFcQhZYatKCpicAkDR9CGp8Xpz7RgX1rBqLCnocBBum8fYoezt4y6iWYqB9TWZhMsgmZmz",
  "key9": "SB2B52bz8wM44Vt6qxJaBANc7ewBQY7w7hEKv2BgU1J3648YNnY9pZpdGwSieGz7cU65qMKeEnFhUNSH8R1nN3X",
  "key10": "Qw9TCgz6QnQRu3LQEzqmCrNGEBKcyHjsLPtTuk1o7X6DfQ48iSa3JLVPmXnNTmUmthkBiSo8hbPfUbc4pqHMvfz",
  "key11": "5jUJz169JLdSEFBTQhHbCAg8YKNQNosNJRvmgCF6Ah975ZRLoqSbxBeNMHs62zUxEr85P8ZAa4nCz1uUr6kxEoYC",
  "key12": "hufYADia4HvqedRZLkWv4xEgwhzQuUWGBU2Kp596C94MRdq3Z4ucCRq7VCsQQCTSgpfLyVFGkQznP9Zrx8WqaHi",
  "key13": "2CHDj8tq5j581LAfASxecFay9RTCAwpfuTgByDnsjLwq8jLtRFxmUGhsjFmNW68dSxw6BbNMzokjAwTajQmAQFJ3",
  "key14": "6gFVCtBHouKB2crTmCcs1NaaLPfXhwaTbaKmSggQcJf5JaHRooBqxHtKcW2VLh38vMdTedjfBGzbKv3rP9qswnW",
  "key15": "57b73yY5qP4DPFniRBvFnzjM7TPqjSw1sZroh6Bc1EkuGPPQmYxsG8VSHjJApznR9ALHjw8Qb7fRc51T2QM5Amr9",
  "key16": "5FDTbQEP6PrzTuKzBtVQ4n4x7bHqjf7soSWuePbUfdH4hyPZg42PaDFiPPPPipxKcqPwM4CEwjJN6VPizxRDHT9Y",
  "key17": "55Ea48MogVJvcyTyWV82qaj5XVPhvpRJL7p4PSNmJ6ARqz6fU7jbHyKnjm6WcCebn7pUnRMPT84UMrgv2bXWeJx5",
  "key18": "4vnRKAYc2dydJHTvRSfnzZTckoeNWMzWt2aX9JbRnEjLpe4Z1n4ymSYnAH8o1mmqnMjjv8y8ktgVcZsmYiHrM7u5",
  "key19": "2Qr159twBUudeEJDeC8MjSLXmvbf8MKboD6L2BoNen3fGzwtVfoN1yptHVC9wF8Cur4mpThcWTtXRMdbRV8yKdi5",
  "key20": "AMrBieqoRr9oEicpdHtyKfsJdtzrGJHqdut6dR93QHwW5fGq9FqFQ5GkbuyekTKH1LW32i8tvDu46uJfixZAAFA",
  "key21": "3wkxCs52567MubfKi5rak1TFX9AW293urBfcnkrhiRaMHFymVq2xw1WWugtoSJt9yKQSvLyvVKc5f8zMPmYBz1MX",
  "key22": "36fKTk8A3p18uomqEppdQbE52R5KPmpAJW6K6BYqwuLCV6sZiqLj6B87sZ7hnrxuNyijRbckVvn2aVa48Hd3UpVA",
  "key23": "56CyqSNiqScbek9T6cc5iZzT5FsjknT7uLoBmESTubwSpNigMf842ceBwPndUxdmLLpVXhvZF2qVBUybbJdMC3SY",
  "key24": "5MVfpVRSWoUuwZxYL3tdsqV6NTPi8uUcaTjQn2HVs3eQVLYehQzcEsiM9REUQMeVLJYTNcbtj7dyF2SMSf5L6ak5",
  "key25": "3hombitRunSKoevbD4sc8gXDpRWFth31vYRdyUJCnXA39gK3rF2ZRp9u3SNLwJNgzJBs89dRBLRExxTc8dChh9js",
  "key26": "3WEFVL9Yteh4V726sQkYfNp8n3EDDjR4tdW9atwfvHgrbBP59f2CULdPVrDYV3wnfprRYzcpfqBvQtxSEYJkjvYR",
  "key27": "3j9qgbewiJUohMvHnbivdiAy2WEgyadEBc3xDAmY8YE3dRPZCXwsDKct3jZdoSEVcsDE6a2iELTR9CuET9u8fFCG"
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
