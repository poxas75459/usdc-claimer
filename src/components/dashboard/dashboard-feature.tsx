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
    "4DpNWu1NWkMmtWsmHfN84smBqEBNyyCooPo6nAHS2xqcHt7X9MWxbjntGeY2czi7fCKWrPzZzFgJaHVPtfP49npL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PSGaxLL1RytVQeoEASn783CCfw9WT1qnKhFZsSsi9862YPYexp4V3oVHQwMPNXx7qGoXaAex5rrb2hV36yVpM3T",
  "key1": "2PrbouZcjNwHwqVoGKZkMFQ1RocBBbQaLRDdZR4xHZJb7wXq2kzgNREcYb8qqKSTx3JwK7Ki3JnrzqXd3m4sCGh3",
  "key2": "2Vr2gULxubpW8KtoyRHyUuB96pNxnJVYqb5b6aQXvGL2bBFsHRN31T9bAPkBiSRU4Fxhme5GMiYHzavqQENipoZm",
  "key3": "3DrB7qUvCV761hEtS7AmwjxBJRppDYjitHfyjavRamsuwcXACsQw388FfyU4bscHjL6f86NDKb4TBMA4vbdGAiqs",
  "key4": "5t78kkSH93tijazfjNBXFiDxUaQ87kHfkxPSMb6TSFhsAPHhyegUo344RHCcc8fLR9itP4Lp3A4mTovU3XsP4vJL",
  "key5": "3zw54irqfNZBunvU95LeDEe9DQjYcNuBaaAvpHaktMW2QyaMzWaiuULAFnVasJKGdSnVb2TCePRyaX16xiK4QjeE",
  "key6": "HvAeS3WuL4texzgEkfnfGksEoxBMt7guzucyjWZn8uo93fayNCu71TiYxRoKFy7kZiicCaeQNyXBi8KXbUECV54",
  "key7": "3SZoK6V9X55LvZ86aj3iZRnqWV4FoXqm2gXsoZFPVZLdoTrfn46FR82FPkBK5Cz5mmRsF3wAZF7WpQ3925n8E8LT",
  "key8": "4YTe2HZ6Ed47Mb1C49v9MT5jAsFcyoYLbKwFjMEh4YCAxvhrjPiAqrhTkNVRWa9ciyYwNzDhZ72pndavfe9v828C",
  "key9": "4y3T97N4jYgGs8DFciRyvwgi2TBWh1QZAYUzTcHA8VkQ8rB27dHFZ7whn1zo8gPzdPyKKQPfkgAHHAo2kc7V4h66",
  "key10": "246p5kHGt4NVwd91xAbeDYM4EZQshhsq9SqVFHecUkVPZgfC1rB7WswXCTKQirt7gtZUQNtyvAdtByVsHwVy8AeB",
  "key11": "4UxZZH8hWBMrfHGyP5M8Bd4rbccCHrukG7grWE5oTdmKDUUNMF6PaBxsdTfTPQoQwg72nfur8A5ueDXr2kjoUf14",
  "key12": "2HSWf1GAeYS8i2Q5PHwqoatMSVySzVk5QmGDNMX3S1JNt9RnxyHyBu8vGNYELSCv2KRkAJoZfzVqRpeGZW5DR1ZL",
  "key13": "5HchuwZyEE1nNqdsCRqiAGD4eNQzJRku4N8wUjSnYiQiVC6KdtDWwwj7p7zs4MB7uCmWqCqEKiqZYiQK6Ygk9X9",
  "key14": "2T8SSeSSmGoGzpndziRnkDdMo2Bj9RHipEufH1D8JPVcQiutCtvtBfRvsZsGweUneKSrjKHSS7hrrZmBq5apBCRY",
  "key15": "52CeLtHxqTZnUNmsQWm4kEJFfRajEC4F74FXs9wwj3eVwY5UkJTwcbSzfwikgCY1NXhaQXqMMogcbreAJc9AMwJT",
  "key16": "3X9yXUgqJr1jSGmENwWVBMTer5aRQigd81StGoVZYfKtPENjywgXUsEBMBfNbdiZeP6nRizpdbT5L6NcKnkPVYhE",
  "key17": "23MjZ5Jm8mNQHo9DesKhUfMJkFxXPmFGsYz8ijmJGZ51ByHRsK3uDe7bvExaWN6xGLW5FntrPXN9oK8ZNRGZq4CW",
  "key18": "4Q56gy8EZacJ7nRV2Afobqg5bZkLRyGDXzP5rENgzgc6PZqRrrjXmAg5Z8vrFjABHyLwrwAouvD9ieBveRcgvJnc",
  "key19": "5xDLMkS6StJCurstE3NDCAihKZnEbyrnZPUwTnyZji4aFCNQikPdBVDNwHVn1sDTNff3FpXXqoqUN36WXBhCHpy3",
  "key20": "Wv1xw4abqThuYjeRjG6ixXwASGDfxtLEhJDeaPsBE2H72fXZkqGANn6rfTAzKgLmxK2Lx99LNSegWNymdpyjGNs",
  "key21": "4J1DoUXrWhA88GobyPvw8KUkouJv3fbwW3eXhyXypyAJvGyA2zcdAik3jfeQh1wdmfcefWssucACd8ymWP2cLfgk",
  "key22": "2eTatsq5chid5oCY5hxbXz62dfjjfLRiqPq6sZ8yjjJdH29mwhuMv4Nn1cqYJqRx7j2X76aWPBa7SBcLcFnvqgCj",
  "key23": "5z8YQE3zYebimHsUTDRbLYco5CZyJYCK5P3T82M95uLuEocMe345UG3Ayw74UR2gPiY3dU2vffDkJJcWVaiaqfmc",
  "key24": "Z9uCQ7wW3kigVUYuokp5KQVMoECasCc2Herfb6Hp1TgbftWSmG58UVxq6Lb6yLAUdpu7rVvGJepJvgaiq5uanHj",
  "key25": "3kRkoqSR6tDxqN8SYFrXWpP6ywbYJJnAs62q5fwzpypZCDWy14wfAm8671vwwVkKS2WdmsZzvWiTG5XaS7xeu26J",
  "key26": "3becYSyGCL2UNAnFNgB5WXGXVtpDNrWyMTtx2ajUZMUNqNz18ddSpkpf1WPipZ4GnMVxxV6PgvqoPMfvA9zy6vsH",
  "key27": "27PU412tMNCr1WmngtDC6J92E4FnKq9bMeuDbcvHHG66doowTXqDCuVwmtovBsEvd7ksLRswDe7nrrs9L2jf5j1o",
  "key28": "5rjPpNnR1M7hY1DfVERKstHMdcFwwahYwd8uxq5YNVQjdx3KttELRiTp9jWKvLDF9bYfFb1i8kDpPzisvNzvghKV",
  "key29": "577fh5b8iqf8RRzmtootuoH4ZgkxPBWkiwWQ7YpmTwGSHMohjPvove4wyoQEKQ6Gci4NxFTPEHQKoYBcj661YVsc",
  "key30": "3dxH2yL1D8aCZC5nkL22dvLFPqk1L4skWYvt76eHbZJu4AHhpLauu2juR2QZgT5Vm1CswisdwVr1zpK5nmcj3tPB",
  "key31": "334GtxdydpABwz7KVezuspuonZe6YCFSThPz59YW5bVqp2emJxgVm5goyvewFJkoZUTMEGsUYBDDDQsqsEzRiMV6",
  "key32": "5ASfMLNksi6uwk1Q8rWK7GVSh7CqNCJ8x44rtYgKZ593KL8KsNFeKRjLKdTm9TaKW8op52fwBdWF2LdbvYjHdRRK"
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
