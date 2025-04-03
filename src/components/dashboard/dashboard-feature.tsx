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
    "3daU7rqKCBds877CAitPLE7jhKCZKQWox4D5CEso6YZanyY6bjaeaUF9rvtCnraewx3KEBEvReaLuwz2sKWHEeya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29pUoduYpbKCxTYZNsquknde7rd19hDZkgYzcF2wQidRLm4r4H4Bknw3r1oDAAWvcKjbCDjHCHXR2caxvv91GMbL",
  "key1": "8UoQWEkWDMD1zeuKDLekWyCP631eJP8vLvn4NaW1tbSvdXNATTiSNxF6oidyVFT65gGJYSLSmBGykdLVaMJP3qo",
  "key2": "5k8BJpQ1U2o8q58jTagbL3JB1CC4oYidisPQUadmT4UcdNE54FCE4XFddkBSKNDGpdjLmWBUWvdL4cuea6EYeCYU",
  "key3": "jkks4wPp5id9FxcD4dviiwwYqGBMDGRdwCGG8oyu3WNvX3eFU4oAovicvJTvXGmNF8cSKR5pyx3P4tMWuxfkMyj",
  "key4": "TviR87FkoZ145dHDwk1Gvo765zu2FRcS5e32qY8RmZgu5sSXDt49Fpdq2SL8za8PaACjNMBdhVwtAkCjFwHuYGQ",
  "key5": "31gxRqiYWe3Wj9kBRFgKM8UjghudEKci3AqQJakNyctgapAMzv6gNhEhErAp5Mn8esMG5VvRL6VweaRcE9hHgT2G",
  "key6": "qRnbZtWRnVy3CXpAnGcqhwrsJfwgYqbE2ySYjFeAgkKGb8eoceUZj7onBEekrDt5NSgDfHPB5LAmEqGTfUSftaT",
  "key7": "5KhBEmRqt6fNvcusC7iemsY6zFaSQgH8eBLM3foKcTfySWWhDaaujgvfETK23AQEhkmRoXW5ETjrPWYPGAYfhAUq",
  "key8": "3CVcJvUzyJ9bFR4ug5vZCqr1A6stUz7JAt7y5nDGYMQfht2eDmuFYxcis71jNpen77Gu4vePGFT1sZ3CKiqa1dVm",
  "key9": "aAo3PAMgXuZfKLVCWGJc2ZXQkD3eMTDbTkdujt4FdR1q8DNWe2L3xHRcMadM8j2hoogDsVUNsvCvsd22T9XpBbn",
  "key10": "4u7WdcAm4vU8kKtXaWvd7KQ5RmEhw5qZfyQywWQStD3kCHZxd9FacpYmexgL8WCuD3U8QKnWxwiRJ15Zy9KpGaFu",
  "key11": "4aUR43UQ2H7z73WQZjWGSwzb6ydNFg9gJW8esJaKztjqhjstYVU4uqQoS3apJx9pBrUUtT4bNoUCi9bMGof7B5wW",
  "key12": "52EfRZvSaCKVgVCnKvxqUgEgvf8y5qY3DpNc1R9Tm4bubjwed47gEmzh3PyBcXTRVkQFqkkHfysFg2hJHG1DgqXg",
  "key13": "2vnHA2RhLHAwhrGof66jQrouMFRLjoQnrTaMGyikktqQJDaLyzdhMnPDejC2gCf33srJuJjjLsp5gHpCVE6iQ3jU",
  "key14": "eQBRVk8jSLABA2Rfw5grmdYtPpu3n4VkDzaMFLSMSvnZFkWoixTZjZiZauUbvcBBbMNDdbE6dTjvzvrZsqBrNL6",
  "key15": "2gzj6ahBi65qHa83XXR7YEmhd2veVZc8uFjH9UoJ6vNv9bgesbpWABQAFBAb1tjz36yHWKa9gK3J3ywCZyELXZkF",
  "key16": "bPnXZ5CcR5DuZenXgu3aQyxV9PvCrXSgySVNP3kdohmshYgQavrry1Zy9B8cbhPVu2QA5W9EGLxAg7de8DHtriW",
  "key17": "3n2b4NjzVhhtm5K8dV977bpCqLB4aFAZ5HHwvy74UdnjoybyB3JP6gt6jmGLFLfXuxMm3NZB9hwEypmn9mnkXtbD",
  "key18": "5Wfp9MNjZJYcxWmbmHcaPq77Fb6sTtA4hGzQmkKjR7hvfodQSaA8w9TGccnwayTENfHqRznuJ8hG7syNz2iqZf8v",
  "key19": "4e99ddYjemNZixKgkx4DTkJNDu1co4bUXsy1WhUhgpuX19uSAmgFXRNc61m9NDYGPhMSH5F4JvyfgQ9apr7pQtpa",
  "key20": "2CKhhn9X3stGcpvHxJkrCnqyQmASVDDsc4M5AuunfrRxdywe2xaeVUJjehcKxpijQt7y8Gq593TkVDWbUM6qwooz",
  "key21": "4QJ6reaisK3rtiB2474BS9dWhZqSRjLo98uLpPjuRDya8ZaZMQgqdsuJyU5YtS9Zsz2c9HXpUZVCbWjokC5QCktV",
  "key22": "5g1SfwA2pco8KRwynrxbQyEPnZU8sJBzsQNFfexLpusVnXACFyboyorsjsikBE27toakruT6WjK5nwSNWQghtcXB",
  "key23": "5FUMbiZdzqejRE5iWRA84MWo2xeKMjdQSu3ejPXd7wt7W2dAxdmkExzh96y38NxSSx5PW9MmWnQvGBCU7ub4tVZf",
  "key24": "3YjmrR9QWw8NtecKFq6DFV2g1AKGkfwH21oxHV1Les3DS1ZaGm1Si5yWpYAvCCHR6cKQ1ChmrhRQCVPLKD3MnQdN",
  "key25": "3c2RotjgePhWTkGSXfqECaGqL7GNve9uMiTJTMSXs11tb97reyfkA8fk7K54rt5vcvR5oG3LQHsmkS1y4iQ5arox"
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
