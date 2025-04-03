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
    "3UEHeEE3z9jsKicWL8ZJJ7BDy3dvpaY6KSkGNsaG8Vt5c1Rjb9hyurbu1k7oEBQeoERLFnZS79yJh4ih71i8u3ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W623TA1rntiJNYAiMH1oXr797YZBZ68QexM6BakeJfsxb65LhKmqH15uNSAyL4eusFsT61cLERuoKeqoJmAwVft",
  "key1": "Q7GFsGcq9vGEsSmzTZ2ajXEDLK7TGAN2V1k7mTv8mSHDicnAAC33FfUxjCidiyDHrr5drquqSXVY3jGXSUrFCYg",
  "key2": "5JJJPeE6QyfTA2kTzVhHvSqCaEB8Hr41F9rdYgRaQd4YXwQKimnxt7pKEwk9SJrojsSFYdxnahqAmhc3jwoHqEKB",
  "key3": "3GwtzAaYYMotEuw57FWfhSYfNHBgVG7SBfS6XQmBDAgYxaJHfwPXfRSrxpQmGSBxYbRnMySLsQ55YmDHxka8nQnM",
  "key4": "3UfrdK27uefJGupBhs8Ttv2sv2aYCEu9nxScudiuZDm1Fgtic2Pq3QZrRNpspC76rwsEgHwwLDVc6kFr6uNKzpAv",
  "key5": "3ZqhED1BzVctkdaasK6Pkm9DR4c7RX2dpae4JMfBLp8pJEygqsXhgSDd8GTs7MTQ4X1VaKCb2GxtxxUR69rTbE4",
  "key6": "5fmdg3VJprJRFmspbzaEEcWuff3hAUTTwteUCrh5BBMmAqMRgieWRc41aSQsnvemdJ5S9smxXSQBhv8pRFESoGxg",
  "key7": "DZKa8xJGcKYzWhAPfihFkzgYkwhyQsd817baqVREdg1c6KLLSvawbaagazgpKMuAxfyXxzFVeUrjtqYHx14mmxF",
  "key8": "EGxAq84btecLQhJWFsnLv7iteM8EvQhLvdS334y2Enjni9yX3H7eL4dwnEpL5BgbFebYrELCGvutk1ZrGZ5rzu8",
  "key9": "36SEbHkSL6uTJmkBgZFguX176seyW7NGsFb6EjUtTxgZffxDLhW3ic1WnCQncQhF3BMm5VCehH5X1x3wnxpn1UFp",
  "key10": "5PL74rvmsocRSwd2DAAAQw55j6A6RtYzUh8ST8CQsQsc1YWNrYLznhuy9Whe4gVnxdfExCPmqeHxiTfR2hzyNTQ4",
  "key11": "2H4MMogjP3wW2jEvp8esXqDyHccMb7v8Q9mkPdKWLzjiadbnhrLvS7rpjJSUm4hzPokrG2Kt5xkqvoEiWj8cHe4c",
  "key12": "3k2mceqFuuoT2YZbVr2LzxnjKP2jgsE1EutTPHhr2QdCx7nS9qUYNXWHzb8iNSfM1SLYVmqkSDPWYihQLWnLZQHi",
  "key13": "2RM3bPKJrZpMUKw2HcSxua7wvj515TgpNvKo4cLaANs5HvpzYZVKv4exhzfNEY1BuprBQnTCbDbgg6NhD4rpWfPt",
  "key14": "2DVjYVbASDKaNKPJT3Mmypw4LunxHt9hV6HTc2D34HT1Uxnv9GT5SXC5RcohPBDXL3vskwUibkH15z1RTka4ckS1",
  "key15": "2dvXTqp7Ndrtw4gnasrKuXVYGzuJBy8JV3eK3NDgxWGZ7iqg2G1xc3nfEcp9CARfJxYV3Ta3WV7PhdeNRRHXDqwP",
  "key16": "4h6knEnBC1nNE8yCJDMFACdAvGKGoWka2E6dgEwZRfeAL9BAHxS122zAYD8MmUcDWEHX7ihW46UViuKHUhtrxRq6",
  "key17": "23sZ1mbQW98b1w4iz7WTjCVXhQh1EKwncs9w75dxd9yCSLCEvoaGj4DJbjhaxwzfFe6337y6XCHULVFkNZnRvyXZ",
  "key18": "393erKFgAHbS2TYjxw27MWSQNQT1WGVguFkhvMj3xPFJp51WtLBXb7ka1nGPsBfK4THVQ6noDUiypGgdWUzgVwLG",
  "key19": "3pZVMdSMJN2ru76A7jwfZB98nT5czF7yXG3YmgP5XQow25AD7jXnznVc2Bg5cPxH9QBapkmvgoNuFBQs7bC1sRiX",
  "key20": "4C73mHy9GUjqqytSwVM6B2fy7Jubm2o118eFWsNaLR5vg4giSYW6AFBw6anBm6PQ65f5ZTU6sjbf3vABd7MKC3wx",
  "key21": "8BNENB9MQwzaMixurhiXVZwntPSRNkEHAKP3sYHgzApzBTPjZAgAqPdhDc54ubAzdtRKi73T6LwtsB7tHcgUhTR",
  "key22": "5HTmkL1yYwfTmjZiDa9xFFAGYNeSA3q38L38TPXBgPzAtTdqBocGu7QJ5Hbf1vbwfj4pLxQj4rMQozbdyCdAtXX7",
  "key23": "27bxDKvnSggSpSSz2HnZh7mr2zUE2wRnHc3e87Z4ruZU5soLoqX16wM7aVWP9fXTJc1qpcNkNtsrmz5VPdLpEexY",
  "key24": "2D7dvcFFccFL5bE4trrh2FbJbHVY8NUTJQWfGSD9xbBk9XK5aU387vK6zbVKFS7DGJySYfTkUPeB5mnY8BPnwWWy",
  "key25": "3v4oTCG5HYrwWTbXojB7BjvJ3YW9aZF4MP1qTfEtfe3ao7czDe7R2spySgyJpnF9hZRJv2zHGG9Y27d1TW4aacN2",
  "key26": "3GCQBA25TqL5RkiB51Buu8vDKPbsyDRf1ZEQ77fa5S835dREyXQnsQfD4aigdzixsA21RAuAeue8kJFht3C33XtK",
  "key27": "5kY77LZ4ZctQ6f5sNLLX5wx15GyFbh8UYiNNXNYsHbZaXgSrp92df1z1LbCyLryoDKTd4J1LLm7ei4xhgAGewxZG"
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
