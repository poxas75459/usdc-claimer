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
    "643SoM5URy4a6G3896SzGzR2gnNtoXR6pdaN6NZzKG3CtGMfPJx2HLko6YyGfEULrDaVNQnVXZhNhfTBaRMH1233"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmQ9uENXtF35m3Wt57famjgKdZXLwbPh2hQgJfmyaZfnchsnz8zq7YY2yj9ZPn4x9EnC3jiSeLtutJSwMw4793z",
  "key1": "53bEWiaBqLyyJdzKT3qMPMy9CjS5DuPYYhgghSzMJqK5zF7FrWfDEV8roTboDvDPzeZ7whbEwir14QLBN17VRryb",
  "key2": "3yJfecjWcuaiBU74us5mVp8VHmTb1oMAex1EKif1m3h9BSEHD1LoP1uVohs2dNzAifniqprmZUKV8hx4JdudqM8d",
  "key3": "2UhE7i2TGd8ifAy9WF4cSRNDsamDNmSb21MyPQU3eNg47H5Tp8dHfyGmpEXyXRYDBh9ZHuYjbn3BUFeDsL7hZHQ3",
  "key4": "5geRGHJ55Mxs3AA5kFAX8RkDEhuDLkZEsnLHT2DCnAQgG1iBir2RYiUaya31nE1oU8aD9moZUG5HnXxR1F5ZUJt4",
  "key5": "BkMysHA15b81mriMTPHkWM64A3K1FaT2MwRHTv3mdLAfPaVx1ChCNRsR8Pr2dztyu9TtrFXTiyatMkNN32bcTkX",
  "key6": "4Y75m2vE8emTkhxxCfdRVaov93pyY1ysz6u1iYnpXKSvQPtz6mMdtz7gYJtbJkBEBKfiX4Bg299YCTmxe5CVa1xM",
  "key7": "2MoF2zgBJUco7VXeCpocy4GPwmXZPEe33MmBeDNZx5byGo1dPhQUD9YkkWX8x6LXEoEZj1pH4Zq81cgxf3o3nxYV",
  "key8": "2BC7XFRoxQY2zWoZRrxJRkJrdkpWAjuS8UBbPRgMAqWpxZ6wtKdLL4dR8R4MgWUpitaBbnXAAYc5nWYg83rPV8ii",
  "key9": "3aA9Q5FECggTk7PWn7uL4pYNyTPMJvb4tJm9ckcySpNj95vz1bsm6tSCipyf7pL9uUMhKMgxHL7ekE1vP9rHC4ND",
  "key10": "2w6hRvKQmopZh2aoduP3XX5EaucAe5zzo1bM3EFNChncdaXAEvaEsMxjEVZGwRfTwbXnWtswvHTSSpebvMQ9iTL2",
  "key11": "3iNuNXQnU97g3QDZ3idccAcT3ruiCrWh9T4wK7kgcTacZjzZpY61Y4udQ1gRFQAposF2dcpzEdMRxtMoVXiExEpo",
  "key12": "2Pd3pDrEt8G9qAncsnx85Jqf2DkVECN5KaYMJrN5GbiKZszUEsiPBdSbEmNELHRocKDemcbVfPvx8RUD79KZyMfA",
  "key13": "vgZdAUWNAqEVaTUjWUZKfLwX7ccmfm94LcrmRPeRUWP7rK1YgbZ6gb8UfRNTUMpzA2m1vTM9oyNaCwtUKG5i5ye",
  "key14": "AidVLB4QZRKwxpiKfoquHYt1XZSeU84kMmN7DPUh5gfMFvKqJNuw6E7f4v4LRu7sQhufvfqMvuV6DqtXtQoifjF",
  "key15": "2rVvE8fJqgAbGLXTDhvEWsf4rT4zQmkaumTGJPPiugpGb7Ugmf2Zr4rDKUd5bm9CX7X9J9E12nmtVUgkqc7yXhxk",
  "key16": "5peA9y6suxLu8i2frmMoeQrJQVmMSgAsYw5KKEwsViK1HVSgwtLmEaZtjtVLjbHDpJ42k2eXRqWdbPoTdg7m6YnC",
  "key17": "5T9ozwx7iem3fWz3YG1yp5qwdw2ZbBHVxUkdLppff3ScVCfwM9PNwJWE8MEhpWC32gnN5DvHmjvkjRf8VNUi7npW",
  "key18": "5V9FshmMynnLyGnQStRikDjVrttR43aqP7iXZaPesVdfSjrwqLcbLACto7ji9qkkvrfj3r4HYgZ61HMhmSxWFXhN",
  "key19": "2Kw9x68j6PCdCwqTe8YpdP9N1LtnFf1dfifbVXFoMY8DAf7D9P4MSqMfjg9wadJ71oPNPYgE3Tmst3mgbfegu6fk",
  "key20": "47WMAvq35WWRkCMxhrLn3Q54TTmrNyeEHgwcqfa8ZbWWqcpfqqXgtYt5XVLSvU5hNQUt4gBnqeykThuEeiTxuEb3",
  "key21": "5yv9ePG41c6tjxLdj2DXFdR3BzF6AFNT8Cp24rHFfYspVgr9GHnhWhS9kPPiSzsS2Qq5XzczRhRgHD7G8tiAK8q6",
  "key22": "3QFdgVud6cZiS2hMR499NgXJ96hxyZdHAsCX2zWmuG1CgziG5eXNaR4PqzMk93Dye3Y9Nn4vk7Tmet47s18BFVMH",
  "key23": "62f9pi5XqaojBm89HdSdVyAJdWtKE6NwTHeY6eHM7q2WxuJdxZJYgt5dbbw8Q9yEAew5Z1vjT66VYRkkWU23twBG",
  "key24": "4r9DZbDvvmvgxH6nVJwEjAMkkqCAvQ7NBF4e9i5Dsqwmzk4F2YJzoDTxaNcC23HqaApiHvyrZUnbgi5VouJFJB6V",
  "key25": "5TLD53cVWXisTZBHR1fuW3dfRWptkuM92Zsuiw8uABjXinTCsAsTDeYpvMHwyNUjVR7TinzmhRzr4pPwCeqYnsVN",
  "key26": "DG6GM59McGZDP9Kbqr17Lm4dhZ15Zj5mHht6rRgPYKXNHbcJ57yabLmQgfbtBaYNyWx6yYSu2VZJD6nGyZYd22G",
  "key27": "3r785M1v8uwHKkpuxBVgkpLQq385ia7DAx45P9SbzTocBbY9t1RU6m9wZb78xUUkDbmrYx4QKzwVCS27A7sifM8R",
  "key28": "wfBun9b1LhEY1rRcyERXYTo1rcXnv8yBb3Xxz6WchCeaUV9CMHh32aStpJVEWYhWwKyP4oDPDHrAMixVnMgLhX2",
  "key29": "4mZgKumWRDPEgjfB7dRViSiq3GPjSo6wE9q7bLSkYiYkdUUWfGpQViqgKafcjP9tE2vKutdmBrdm2WT6nujvivQu",
  "key30": "3ggKWoiZqZ94D7Ljeh4u7GwimBywVdzQvGspZTpZfKJYhUogjvVEDZV7PUzhYVA1j6paftpzJ8SYWmffD4Mpzwte",
  "key31": "2LUxaYn3NtzwJB3Xm5ZWYCVim4SXHVAy5gcD7bhRWMmCaKEuh1SFCy7BjcPkyTN1cqXutSpy5b5dudTiNGCDYUur",
  "key32": "4RNaNxu1Qwdq9qtMB2gZEHtdj7xZAugHzJSEx6anbhZ68ALgMxAChQFBxRNBo3xgXp2Tgd1ix1hA8EmGryRfjG8P",
  "key33": "iMcBw8ByaSXaQVjpyfbx7PrmXGtaDYNTF9uo7oCcM7ssBXmXXegvb1momLLZjXJAv3GKjTv3j2d1pftX2ap9dRh",
  "key34": "395WKEq81N2rZJiLXrky54oxnSXt8JFfzTbunXZndzeifEDPsWGe5usU3Vxd1iZfa3Vn1XR7e1GWrEpWw6J5uk6m"
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
