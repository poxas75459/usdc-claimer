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
    "2TL2nM5m3HUVavByu9UVJTP5DjbmFqbZYNW2RyLyAC66RKd53YwPZRPi7Y6kpNY4CnNZuXgNyQpcNgqBSP6WKN4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i2Q22VTX1f3HZep2dnqGBNKRaM5s56gdnezJ8yZBGBhBmvYkGdFJavEGtwzY8tTLqAqVbwcgZQchmeEn7gUJXQP",
  "key1": "2svXDG8qghzXdtMazaRwMaWzQtUCxgchS6MXZMJQ2VTLR5bk4h1qNMbF4cswk3A33FYpzCwp9RSdfWKLWSgKdVAq",
  "key2": "4U8HUj4t4hGnepnqoMsYCz6JpMTWQvVJn458fuwABd1EPrmfJmsmsJHH96KtJ2VHGCJ6iSnfdpK3T24KVm7CTCCL",
  "key3": "51HtqQ6UVKwYm6ZVWQ7bQvYNjbqgUT6n5zxABEt78WFqLPvUtSkjdHdwSfrYrixVpFXnjXAcVkbVeLU952sW9MVV",
  "key4": "3hNVG2oRq7hQDEsc7iV5fW32Ra7wXZwfpiNN8jc99bsEMqXY1hqk6RHpCtmQn2GMQtuXSw8Dg42MsyWLigwYrDUm",
  "key5": "LMxUN6vP7fJAWeVpE97rsv8wz7rux5vrmaATUAUncRWjQ3EtdhH3MbwxVeeN4HpMioKZPn4uJ3zQJKucsZwWyPb",
  "key6": "2TkcFK1d7JdnNjPyczqtPfNJrPeVk4A6kQA3uTAaGLTg9wpckRZHbEvhJVP5LXjxWFpkwSYMtTAh2HXciRhyYFsX",
  "key7": "5z1seVQkwqy9Y11uWbFs2jpBLFpgx5gzRkvCa4V7qE5Urms6RzNrYgGKSzfFpWNyr1kQrLRzjphN2pDMBMFactow",
  "key8": "2qRMDm6tZQ2gQN4FdqaaqAtYA6oe1hmDAQTuiiuSvWjVRdEqXz6Z6B8awFhyoN4zW5pSNfw9ZAKtpPjKz81iuLJm",
  "key9": "z4reeeSG3RhE2J3Qhhy2aRzpvrer5UGKQrFikPbmkz6Uqe59yCy6xHd3ihG3XPHiubjnnqQForH67vHys7jsPAn",
  "key10": "EnPnf68fbpM9VNbw2gwqnSVUxYH6NUBZyUe37CmD4D9ondFVsMWNpG3w6942ywBVJ5WDTk6Y2KLFgVwu4nAjUH1",
  "key11": "4BZngGF8UedjtXPMkMxUWdPZnY9JGiL17jpdVriwbNX5etawj5KAXTnmx23SbgJGwiyaWvRBFX8bpHX9mgk3H5kq",
  "key12": "4o3kcBPcpiGtKg6H9HFLrxTMavWRpULVEnN6bMj6RThGJhcZXZw9ptf5MioJDQWEZ39eGA8CTMdYjwdmTu2A8R12",
  "key13": "64Br8oFfN6LV4LR2v8kp8m9jgbqrTqg7FGS6fVGDDeuPkj9iqJiFU71czJaLpSNxcQ8jFQdPTEodPpwbquc2b7JU",
  "key14": "3bNq1sfwvHk4dz5CadfbePwq32WVnx9UdUEhWmf4dGQeMAkPyWGnF5ex9BgR2yfpt9aPxr8VjmHDAtqSyxY1xJgb",
  "key15": "4g9sSDph2yohrxHDqB79ZFi6hj1ZmokrvaBmjKnAJdAPC2ipvwfmfRwNGE3tupdqn5pnRLURD6U95kDw1AR48RxC",
  "key16": "5gC9bRrTwTwySs7qRCjRXKx9euJ6okadrvAs16zjdeqqDx3GgQ5f64YYPdP7iynLqikJajgqLUHXqdTRmQu1StEf",
  "key17": "4wf4L5U3eqPMiJP6AM3uevyYa1gwDfpSwz57Ptpu5nK2k8eXKkJkoUEWkh6ZJ3w1y3aAhLdULwpuJE3yeZqPL45E",
  "key18": "GKtWQueMBeiQB6Gz7uiUqXtwVLHiF1h1VWY48ahtqmuNeBincePsub6y2BKC85asyhyn3QVazyTPJkH9X9tJtfx",
  "key19": "EsH8UkWpjh3QVAS1HEWFqhWQu4xrTgsW6Vz7K6SS2UmoWnFLfREWG9JTAvv7HovCs7N1v3Uqd3sULQcKVUVS8no",
  "key20": "22q1bDkP4bXksxWbnqKbjyn1d7Pp1x8UP8Z4hAWstENt53G22oYHEKDvRvLppZgkhQk4h2hkqK2jJhSPtq9TZyqK",
  "key21": "2q4m9HEo1kw2w96oD8wvM76UzpqGxyFLqzrMjPHDWUZW46fBZEzteajfnFGkGQS3j15dqhYst6LucnfZesvZf9zZ",
  "key22": "5EK2FRLVpfN9JQ8aiFjXx8X9tuAo8wBYTiAzMKEGp6adcjt5VAnSQ5jPsUQbf8WEtUqyBVNXoHTn7wdZBbL3pRLw",
  "key23": "389vXeZqxsF6FUXwfk9ppuXAeydrHWAvRrE727cQcJd6FYwiwJTGXu9CauTTyM7RrMWcxdCKJBg3uown7DtfDsc3",
  "key24": "3GwBXdUgCtFhEwocanXFqpDwhuFFcwebxB64mPam8LuiCrRpEwjVeQQhdsRUw1kJeeHC5Qfj27DsdPhAmT85r4Nf",
  "key25": "2DsEapAg6nzZKZDDamRRVwwT9xHTPyKXjzz32v35Pk4gjK7AVovFkFwEvSufPnLitcAhyQLkXhh6yxVutGe5ACeG",
  "key26": "2XuAK7C1RA18RGXCotkSNCXEsFyhvf4snLCqtPw6M5WGZViWuJsfYyZwpCTwTp4tGXvcberZ9itqz8RfGFBSwhik"
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
