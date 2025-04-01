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
    "5N4vaeQrXa8oHE5dAN52NPrR5aFAvoU1EfwZK3BdUD7wHeP9ShHPwxqz2fb7eNWQQzUNeeqV64uPuoST4VsXKSuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26oSak3dY4cV9PTNtGAP8JJbFBcQh21J3APvjhh9KMNEKwXXRqJBs3fvMHwaNtTCsS2xSrux7XpJAycnbDHPUo2o",
  "key1": "2SmA91aA7PWiCN9aX2DBVSHsyoAiBMdDh4x5ZXAb3Xz9jdDuZGPie5yrN2T9gs5SJMG3BmMxhSvTikwj4a3exFV8",
  "key2": "3YpHHbspkX2e4TkTnVLNwF41ZProBfLT5Dd9jNHZncMMG3YfPenDk9YyWJQEk7xYnvYK7XjwAavjEEq7RScQ6ti1",
  "key3": "sXHgCB94JE9fcWhszeqrQJ196GcJboxdXj6gE5Fnc8razZohqFn9MXjnD2vveyyXuiiVwTJc6B8dDFAreXw6Yeu",
  "key4": "56HC75pgDKRnUfTbEk7tBX1QrgBi8SAdDTFFWgUnjzxuH1H8vNHoFiJaBRQAxaq5EGtQ75mwfnS4tSm2YmWmp9ce",
  "key5": "3nrSjpvQLTaxMJVYAZrVmxrwbteBdLTBqpqCAJVS1y1xw4gZpy5d2hNVkpS9epAbFdC6np5YT1xbcQjbFtdVNrbd",
  "key6": "4ShXgwrxvzC91Jgyv5926JyvAcf7ezAm82rTUUV9Tz4qdzVciC9CQ3TvWsvQuYfP2YCnHPD8ezSHorDtzwUT1tVJ",
  "key7": "54yonqE4z3Dbt6t1AzcocTVTWJiaUi8D6Fy3aSRxpHNE1s74wfniiB3hXVUdGPn4p3FvMCaAMeP1cPSmeq5RRcjx",
  "key8": "2FGsNTfoPUZUsV1HtQHY5c1Wm7YzJnLdb7gG7Bp2P9pccfKxYrzTD8WaRMmXTkaWQRbndDQyVahP5gD5XgqjLkeL",
  "key9": "5ELjyrbQQCJxeVLmSXHWnWjkKemTpgeZ8Y4BJiQTtkkLw1PHEQE1QdYpescgDJzhzW3fZ27GLDMADbMtBiQ91c1R",
  "key10": "354bhBEB8YCgdCEk5x5JmGH72Hy4dgwq81NgycsJ3t36k9SCvPm7LQZMY2LoyyMAXvzQQxvpoZehHh3QCwJUsTQs",
  "key11": "ZRmmSr92va3RmDb47SKXgNQGUuCnQjv12ND7qXyq4GqYqtuHmWyeAhqqBmH3fLjfZFtNyZomunYBWzo9wmRujH4",
  "key12": "5wvgmEwtY4DJmS6NQUHehxhs3YHBJV3GHxSHQq5Tjq9J2Mq4YAb5QW8T4ntUzo5viHUSZxoFYs4gVeNfXZ16jB2E",
  "key13": "5TTDaDuqczchH1jj2CtgRRT7X2HswDYwsADkR4cpiLsBvjuAkjQRxkd6fdTPubg1KzNmsZ6iM8EaSSNo3Ns15Lkv",
  "key14": "2g72j8iBfuxmPSHfcB4K5wmAmirWNHkcJidVq33fgEdWAZSseidBdfeBLWV5YGKrHX8ZPMRdRfT6ncKNiuRH3ALr",
  "key15": "4rYPP34SzMTwoAjrTimB92qhtzESg8EkiUJn8eVCTBJVAhPnS7QPNxUJkDSxqf2nTtaZv3yFkDFUKaMz5T51GKQE",
  "key16": "A24tn8bLCDc7b4VsYTtWje2XZQjvQTmBjDe4YBhaVqtK9Rs6mD4UX2AvZTnKjrLXXRQ8oNMJrMTzyvEf7GrQDQt",
  "key17": "3GAUnjb85qfzfpcqxmHfQg2r99VBmBppCwUAjKPCa8HWrATDfSprdCi4t8eoxUa7GrNMhBDdA6uJdRWyg3UQqKiG",
  "key18": "28hhPhEr4nAcjfxuCeu3swzKSBKtpgZkfednLjPyJGYaSXmtd43k5XbzQfQ7zPkKoBR5jkiHhx8yWRpG9EFzvQ5Z",
  "key19": "ptSk3aBaBGDRCjDmCqiznfTcCHrStirhJp11Dr2Mjc7j1LtS2xtXBFkXhoXZYjkqFvbYG6mJPs8kMNxySFgVHpa",
  "key20": "4sk9Qe97GWCbGpMxD27uJQnxAaf7GawARx6jmYoHS9WxX1Duqt21am5csxuQ6YT8mLnsK9uF6sxqSrWHpcLsGe1e",
  "key21": "2kVrzpwxb1LAPSbpHwfEUKd8v1oTyS72rTa7hJmZbfPMrLu65SLq1iDFMQJhaRBNM6fijK5QGDyUTQ5Bv2qKWYmk",
  "key22": "3GURd5gokXoZkSDbUerrk9oTAfTkbSzLe5zFnh3BPWvnpuiRg74hwmhcScYRPuaDie2WJw78e7EzPyDRUUArgAwp",
  "key23": "3H2iVTnZN31p5tYrY51bvobpoJ5TpaHova2t7kpgi9ciijr1yMvf1hy89eGvVmiGkWDhenRMGtDnMcUH9rQ84onx",
  "key24": "5cNoZ6gRJGzjkNbmW8g2A54W1VXxFtyRz8zK6JPLSTVqgg65NmX6yHCBL3KbxKJaMXiZBCJGfgZGZX1a452D8W83",
  "key25": "2mCH9oXLwQrBWhtPjCc3LrGTyqMFDgcXgC5BUDK1YtH9u6rm4Gqw2T4HFK67XyyrRdcWz7bVTsL8cXRX54nR1DBi",
  "key26": "4ge11qRtjkXjcK7EPtVzjsQGFPtg6xJyibtAAoUJ5HGeLDSLHuV7DZzwBctsrJtJpzLaf4JiD3NRkuCtyddWH5fn",
  "key27": "5TtMCiyX43oiPkayFsUoVCU3FYKZf6aCEAbJ6kYiwizw6ABUgA8u5e5p57dBc2B5VQPyTjR8YBvChLJGpWJFRNog",
  "key28": "57H7t9XMA2DqRSHDwy9oYeHnNrmKr7oXtqL1coBNbWRyrR8zVdMxnKH2F1BebB73FX8g8uXdvPMKzrL8SuYXwtxc",
  "key29": "2NAMR3AxQcVSJUQ1V1yY9h3GMBwPgq3xGktG3fhNodRsFg1TKmX49k4vfwLGZbfJvWWk4cTj5BhucMgRrkbMRozD",
  "key30": "9ZhngBXX2as46Lw58kvfXnQPW3ubRmqkiXFDuXsJXnz2yiuFV6MGDcKLk9QqApsNeJExi49Ci29oiQK7nEjnr9M",
  "key31": "2b8PqEKzMnt7F69F3DTY2g2h3G7Xw9URqQa5pmWubBoT8EUZWZsyq2TtgCf7X75vcweHw4fYX3mSbBrdm8h7mTT",
  "key32": "5gyjXb7VrUt78BZS4d6kFMqJaFGjHWLswFcQPsKGypwVhQC2XuD9APrwGkgUm66KkW8g6Ef59stouJpxCC4YmBF2",
  "key33": "3USFmUGGX1FLYQyPNJxfFSH5uv9RsEhJQik3ECAEZpXWFnki8Rez3Q9LNdwdY8v9wcRKSJ9MPkbtjzrXUCe7gsqc"
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
