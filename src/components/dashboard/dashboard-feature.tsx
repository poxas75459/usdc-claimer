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
    "4HRCGC9F9EHhYzZb8XnXaWB4C6u1ocZMVYBNoen8WL1SQpgUigarc3tHzVdWWgTdAGrqQ7XGjeSmYa6f6oR7Ybkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FBcyRS4Ckot37AcaLCMXB5e61SeApXQYEwkpqRv4vRZQ7VcvY27tvMTrHanKoQCcXry5xgCXXD677iKK6ZaXeiM",
  "key1": "rRReE4zNTZcUNFMJT27zenr2cMt1RgQFLCPoPj1VRho81NqNweiUPtMdJpGpranMjU6DjMCsWJoqd7jnWmBgLcK",
  "key2": "3xMjfuUkbkF4QmimpVJvHnr33fRjEdnD1Mup5Raa3oxUFzdMLzH3KmwWQFjbLYpcw5AtnJdNm4UoGtY9KDv1FkmX",
  "key3": "2eoXjPHNrPJqdgANEHNEvJFK624ZCPpmExyQSqw18BQYqLbruZmx98pLS3NTpzjVL1fQe44ufgZwfHsLUk1UVVau",
  "key4": "ftmrWpUkx4Mn9uXFKALVmbS3NsjWAUhDsFj2gvEE3wAibxSC3woKoYey7xMmhLa3R3jAqFJiowu5Gnr9G7vasKi",
  "key5": "27UieTQwav43pbtCfAikk9bP8nQi6D4M9KFLRmMKCRdjPfEB6fqCT3UQzKdq54w7Z2HC6nFEP8Pgf1zfUvb2HBWt",
  "key6": "2kBWKCwfmYNGRt2LuhpLtrZ2LEqtBmyAYt9E72A9NK2DMpDRb6JdLjJaKQR8PrG9iBki5CSVBD1oVAjCofrgb3Ye",
  "key7": "36fRV4SNSc5oC48w2e4Zc1PLiXLbgcgvho7q8hCSjG69PjYwN86RRPzDmBCQ1DpoVFyiQNB4gFJr5vu5x5jYrZqv",
  "key8": "Vcbr8t38oxDGNNmx1vnRkCt8mtmngsrbPbfQMgSnddiYPcCRkqiT9i79bZAyjuPnmG7xeDwjCfrQqxn2FVsMtRS",
  "key9": "5uJ1y1NoZxHwKkUUe6af251sMYqAqsztNpKqbvvtUZMYc1tBqwhbpZE7KX1EnTzg9PayY58XfNbgeQtLEvaHacqX",
  "key10": "3Kuq74c7SntBU5EaTeBqcM4ELMPfgdAvHBQLPt7DSdaw9bv8gFynKhjgJwG9q7gYgC2vcyDQjNni3Y17TUNf3C9i",
  "key11": "31dLo4qTAen5Sj51g1aitR2qmuXwy4S4guLEje2djEz1E1kqxinGzMXKfaT6g6xv6gPiU93Fig7aihxZNgrQyp5V",
  "key12": "4s6HTvh8UjiH9kQtYU3qiR3RCbtCDxNLUNGKuQNfdAvhNJwpgGgG9CGH1A3wfHb28yjiMoVRn6aqsZ93o3YHtrkj",
  "key13": "3wcaHbdXCP3tqztCTzokwWXCsCAXKTtE2neapj95Tsa3zQzhBEEExZ8zsvgUdZYi4w2hiMqb5NiwtkDDud2gbMLX",
  "key14": "4CEES45sgprLUw1ETz59gsGrDTJdibCN1be5AmrDBBKBPmkkE4j4BFHpyv2cqoSZkk7gPNztJQXrZRL2TSdJp2Qw",
  "key15": "HNhADiBCDssjHKZSt9oTAAjCuMk2zWcD5au4YjDLH76Auzxyr5Jp4m5oyz8amJUZzjWuKdkbRKjsSb6C5Av4mqv",
  "key16": "3TiyjDUysnaPR97HdesAcz9cHmrKtT7TSowLVWunm2LEtdVGUsxHWgCjpntoB3QLCdYkeRTw4fv9AgmHj8GDAjWW",
  "key17": "3sV4cfxeshoJPvhk8MKvmUbyuXwNTZMophYfvtxZu7VzRJmEZWRZsY293vaRUbm97PkfyAWqL2WbfMZMTTZ7RbM7",
  "key18": "2RB8uT8X8qoqqPpzt1QHJFa7qbqHqFfjHfdDJSdvSiZgqtVaAZt9DEKS1JRNsHz7UhTqTh3Nvmoc7piZ627sBpfc",
  "key19": "QNpu47vTNPZHqjC4x9yHUYWC6zRbLduWush3zXaeDWaYCPX8JMQ77bmPZGVAgsnUseTwk7neEr1cKsUgRiSoAof",
  "key20": "2BkFmgi4yLcsBX4xpq53ebmhbTMi4SohkJBxBnQrw9VALthJujBhJLfxjewtQ2dwTQWBzMpXTPt663EZn7KdYeRb",
  "key21": "563mSx5o7Bs7dQjNuRBPRohBSkcE9dsmjNFcP9vCukdRSJTVhDNiLuvU3bKz1pYjHXgnpqqSMZr2d13oMBf18ktt",
  "key22": "3L2ZtjjniJ7Q3Gg6YMPGM4HdmDrBXFZTU3F6FFYr2FrNWkVSyXaH16L5itNM5LfBsKkx8N9joaNcnJfPxw16rJhz",
  "key23": "3cAVumqU2eBf5yQ2oGuUNiyeuP1uhaDfcuwcAc85ZctMC5Cjz7YhUucLb1rFVYSyExDhommGagF6p4g5KKc2whmG",
  "key24": "47GCFH88Z8rZrUbTbozDH52PZBxw9EnvKYSyAaWeXuMC86qi6d9otJx83ZQWM6SjPYKp4FRwANQcH4PVDBoYNQsU",
  "key25": "9JgT4gqssA5KR85BPX4scmBevo6vKz7AZk4dco9XPvv3ps7uAcAPaeYL1ioZMnPagzmNo5KmKF55AKUELi8aST5",
  "key26": "jeSpjuwsR39uvBNHdBfAjZEkhAtkk1DYqSAJwUeXjRVnkJG18kZeP9AXZxvqULqZcBF1tHGQvFmSry2aj86w5Fk",
  "key27": "3FfeqSsBue275sq2nCoKEEcS3bvJZPJfkzefuwW8pfYxhA2r6WAwK337wniSh2YcLxH4WhwVoChY8sSBUB3zEdQd",
  "key28": "3taJUCexFBwXEze2YQzproYuDyn21AXACt4ynxDtzjAzcWHhQMG9iYeA1MSfBwnqp4FiivQTxTTbV3D491bmwsVC",
  "key29": "36bQmH4iNQvtEHYgUKLmyEhx7HkMkUffeYhWqcBNeRewoiRxrM4KcidM4CDS1V1neKnJYnEBQfFAt2XawPiPgAkd",
  "key30": "5CfEUsGt2A3XwYc8JigLS3M4nVBYiMm3D31qY6nuD9EMXNiS13ma6vJMTDZsRT1jKAkMoRg6B7KZt98XnchQku3a",
  "key31": "2Ww7mppCymVJMeKqEopru1kpb33R87Ces72WB3swTnFuSSYxgtgQixELhKLm4DbkHVr2z75ecvWU4RagJCCGmrXv",
  "key32": "4pfoo49JRs9rfEUvs3fVmd7ZsZL45PzFpwC7TrBYYF1xvoKsPd6PCm9NNGkjgeguTpDqxYRiRM3XQYCyY5iLQz5V",
  "key33": "4gVJD4UHHzdy6gVsPeQfgLQRCg2EPR2LAqDEnG2ea85ace4qi6i2VUWyuVSidAdxCJUF57Qhfbi5jgEurCvwDGvy",
  "key34": "4LPA2xnUxUWqiqaeSucLqxz247PnDGgW3oyjyJXf3RdA6zVe6J5f7nv5pSoZZ462jwbTPSKYP55tjz2UmfuWxkGy",
  "key35": "3D1jBFxF7FTe93AQTRCjiz8nGAWLBzKp4KPPpxLg5XScEE5YV4Kqw1ugdzk8cwNXJJUCvJn9Zg9dR1MXNvufBF7j",
  "key36": "4PBatpo4XhtyDbWY1BbSM3t69Vakut39t684RM31J7ei4GBLM29JAkHWRBJBivKBHGWLNfCdQvqLKTJLE5MTMq1F"
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
