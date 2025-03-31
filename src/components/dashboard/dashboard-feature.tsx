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
    "4crtL7fkA5F9C8okEop186HjoPq5FjmFVmKD1G3U7Xu9TqP9XfCEBMFxAMupNyP6fYApTMVprAHMJBVJkYGCA3Qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z6zJNpMFLk7tvnD5kZ1fAq9JnwEJVQ8a8zSQxQKUSGsGXfDWn9a5Sqemh4vdoAk7NmiJnGdKswaYZXwSZn4Yd3s",
  "key1": "4EBW86cRzki6x8aXpioKCh7y2ktoWEA3YiVQf4RhcJCcxZjNTrsfX31SrgHFDwQ45umj2Fjjqzn7WdxhFF2MWNx5",
  "key2": "4QzMaPAGiZjJt2XXS2bmfAMc49bEazpzaNEfosZwQLaTL4t6PWaW2YmTSjXqwFrqmb9Avqtk3p3D5MTeERMHLLY5",
  "key3": "PnqGkBtCByjNiVXfNFi6D6twvNBekQxbGj5DEMgxD2Ftisznh6vGS5hoKa6ACeoAY5T6DV4HBAoNcdoE2G2BZ2P",
  "key4": "4avC6xeKKZ1aFPbxcf2sAYbatyBZ1JrMEiRtKUZijAf8bgKwTdAZ8s5UP4j5WUMoS4gfNaUFo18K7LcWSJFngqdU",
  "key5": "4ggFqVnBwLuK3BDRSchEZEJcJnuUAzcnZdGx994KcwfsiJFRvgCNeR6ig6crLduqpqmtDkYjSZa1u7CTFPX5MQVY",
  "key6": "3oibUXf5zv8T2LSpBkRhrYBUyKbH4sGuuijUAkKhZRnwMrvbT8MtKUjDbyqHT75FGauSCupfNP2LSQujB3KmLSuw",
  "key7": "4bXXKpy52TRpTXfCHcNNaEaJuFh9xfVVFdKYCePnLktFnbLomMCfE8mPGtgQYkCfnFbW1os8KXGr6NVdgurQ9FYd",
  "key8": "2eABth4LQ8izizDMJHnUNVCFtGv3wwD325tZ4LkTmc9t9GgmXeFkisqJCNhgWQWHnCUsoZQS8BUsMyLDsxb6Xk5d",
  "key9": "3Jg393R7fEoRiHBNQBWMH4LzSiMWkDBUMwSK73fi7ntYU2NbYppJhHphEmQShxnjn4iXKG1QUUuZikMUPx37UC2v",
  "key10": "2NZNVMzNPQTMF74M83wUTvz24yYGNN9mi9ZdDLUuvHPFG7SsL9bS7MrUucAqdtNu9B8b71N5vEptafbU9uZuFECv",
  "key11": "Az1NoNhgA4ts3342U5D6K98LNcPzHL1yhcQbPxa9TaoapcQorXDf2xh4bzEGLH76eBmAHuDmVwLnEEtMeKgDvSY",
  "key12": "2dDYXWo996T94gbruSTeMJcevVjv7dLs7kzAqQT2n7jAbqKzVyg1TGVW7onjZyb3wQwvhB9iYG2kv6dqbAMtnXsV",
  "key13": "2A6rfnJg5kiT5r3XLoHGihu6rras1xxkEN3UNfViHQqBG6YUcHrLpMK6AhmGCKz7phCCedGk3tQoYjk91mqvR4AM",
  "key14": "3RDtN2JUsSxmsDJpnSAga8auXgVznErN4uV6NkxysAXJ4CfA2aSMXHhgZwbkzoTESmchysGACJW69XERVkdfCw8Q",
  "key15": "4Ph7yTkgkqtWgA8fzcS5949WpH5d9upvNSaJNF2hYoSEBZsnZDToCqwM9vCFaL96ScCzgXXBv3aMNN2EBZQMmbsw",
  "key16": "oa9onRBAijxz4RbrmCvLaRPgBkLWJYaw8GQr1fKpieu9wALhqB1oyiaXS6nkeCKb4FhY3UfVH5xRfFDXiRYWT17",
  "key17": "5iwfhoDBg4uc4pBzJruLAuvuRBCxqMHzutMPPN7hSHfnAa1pb3WUGgEvSDdvgbrUs6aWwxRRVHUQ7zDiKdEGEv57",
  "key18": "3S8Fhr2tanPn2RmBzyz3X5tMepXZSPu3coYR4v25yFN1NJwbbM1M3WXg7zN6wko92DS7hRzTPoCpVMS3KyYhTTzE",
  "key19": "5HQ4NZeKkaQ3zWjp2gfk8pysao5VPmsGtnRN2jmynbqdgCSVZLFUbtZrdbJRHqARXuRg9p7X5YJW5P73XXuxjYcT",
  "key20": "44vpe2isF1nhqj9amWZxWGLUjPHPEjUJ349Pk3N85CCwiGLr8g4AVoVdj4m57VAcFuSAK61Zueh2JCNjEbChjdai",
  "key21": "62pZ275R9wfS4RmXFPApBNqYBbeatY9pJaEa1VnqNvMKbBZTX7uBnp39e7KZ38QXwRrQjfH1y3RZZJ4aMb2F1FhR",
  "key22": "5Nf2PWdVYyXuMCxGgX81LX6mKe15knmkpHj76BfTiP2cddLNRAYbebdd8eF6r4EyGuJ5gomfJW98WidQ8AmiP587",
  "key23": "5QaEhCJLLSWrwz3HdqSaX9qthVYr9WhQJux38NLH4ULr6qQP6DiZNFF5u5xgmyoftt7KBB1xw1rUQ8ppnQJ9yDCN",
  "key24": "3knvo6BRHSv3qTP8KGi7Jrz8i7hvZuCiVVwDnR4sJxDtpQ4My55wshEFZYnWUynhDTvXetBzLL2ebHmJB96wftM4",
  "key25": "2rW778BMaQSWibWk9zVTs6idoVfcim5rdtjVeMPcjDPTZcwC22P1v9H9g8ytH898aUaspuVCFo58xqxsAGtGj5km",
  "key26": "5AZqLmLkNeHsFKvsjbMgLQoQLSEi1KdnaZDeCrJ3UGiMAZssHRRaXtTnGCa8H2iay3xXquEJZig6N9Dh8m5tAxXp",
  "key27": "5k1Y7DTk21ppSgmTyEH7aGP7GaspwWsVVvnyNe5zaRsoKzPZWNfqUwiEFc8x1ekxkE58Ea9cpEz1egCMo3uFZRdZ",
  "key28": "RdA24q8KUgrA6BrimtBuSy7vz1dSGmjs5pdrwZYTfe2nmcM9G5rMKw4sX3o7YLnfMBR5z4hR2ACv7xR4BsPYM3k",
  "key29": "Du5pwDfCxcv4VedJEKe5DdJ2CB57BTbzx8JrdRZJuaaZzKJtDYKTysXQ6DSc23WkGvfttPexhctpHQDkShQBbUx",
  "key30": "5yGu87teDmLUtmv1nabcg33fA2EFfqx4TTdZPtkZn2UBxfoPr4NzBMMg9Du1zewRVNBDesrLwE6SP4GB7KcHgLG4",
  "key31": "58mcq3Fo8kfdZp1Figw4t8YBuv3SWHU4fyLHYWqNNPpTDAHqbvj38HanLS3tathAohNkp2BxX8Xm43V3YgKi3sYB",
  "key32": "31ziXhDkJ9VHQ4Fb6Zk55zNk12waK8y5rfhGXkwGoMDicjFqhq4mXyq2RRUToqBcoHa1TJxYcCmnau65AU8kZ2Pb",
  "key33": "2Vy1FfpJg2urfF8f1Rxjup6EEQTYE4y5tcoEyK5AJiBsBqQ2DWocc5iS49veJMhsQWvWF8HtdqWUKU9SRbmX4uHk",
  "key34": "3iCKNhE3iPyCKwtTQMPMCT4jfqAeWhLVgFjVkm95pvxPQwJFDAAYMnwMLbXG3cR9kM9szSuT5pFXeYgiqHEifsc",
  "key35": "4De46tQpk4i8oqjKhLPFdTCVv7jVDbNdCa1jxn5JGegtXHhqej7gmggXCHUT4YCCqwtkyFR94Yc14NXGd4DnRbi8"
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
