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
    "ZwHqghiAB8Ctt3bykxYHaK1Rz46k8sTMMji9YjeDWDC385im9vGQA9Jq35Sya813b1YMsvLfASGPUgkBo817SVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41QkjMnXtF3EHpvWd5VLpGtXoBRHWRPmB4S73F3bgUVADacDawe2wKNPniRUa42vJD8i2Ny5mTauaFaWx632vDZE",
  "key1": "4mKTz6dHFiaJKmJSZ65eHinBAo1n5PvwQ8hWiCE2D4JQEmEg3jL3PbR4VhzCfV1B4KYeFGZu47K9qX1YmgjGjbA9",
  "key2": "9RbF2r6EJkQBwj1hUpZyW1cjwpi4MGLVH92bNgrXqwqb66sRqVZ7nh2XVQ4oVrVan2af41KCQUkVseDfs2GpRxW",
  "key3": "5eS5MQHwcENbrwxtjN5vXXoijn1P3gWHyDmHiVrPzKKdXmrsK6XJGCKYQkVrxZGVRNzMC4HnoxxorxkLDPogvsbR",
  "key4": "5UwE6eCkucUUThkv8hqo4BhW2qiRGUiSDrAWdtwpwCRFtC8D254JqHe5vq3j1RrzUmX66HyHQN7CK3xFasT13EaK",
  "key5": "32VZjggnvxEMtmgcp3nrkp2MxBCE5sLVGMTv7vzhfjWfpQSLcjYY4qCPm31nccgj88cG4ABgbuQWo4sYyUYsRj55",
  "key6": "A2vfowtuCBuzgTWF3x9VbA3ksrh2HihjYgq8movS8zedugeVpDVpmzmHRvgdLnNKPXs2mLVv2b4NwXGRkoKt7Nx",
  "key7": "4FQJHeMpQbbnKhR3jcRmagZjcDYNYYjWCxVxG9SKqsw1Hus8J4ETda94Gp6ZcgHRN6Cj1GMyYPZ2o6iZWcxSGMBE",
  "key8": "5uMGXR2VLXHJy3PsZ5xjqCZKCKkcCmfPjicH5ZuMbdHPs4ju4XiQHEY6XyVgEiyZxV46NpDqXmhrLFgs2jMsvNNT",
  "key9": "LWvb9f9dQjj84wtqnQffkaxwrFLJ2aC6FtzuViavEW8gutcfn95sKSAbFwwHLbKREGZ5WLCjwg6RZkxFzUQhje1",
  "key10": "2MkS5ToaF7BA6ycrDpMmsokv6vjrFKA78e5nazhCo9fkuYbxodJBJtVZ6AaGUwJy2U98V8QsDh8bfJLNdaS9NEn2",
  "key11": "3je6aYfKK3fx1xyWKfkC3gRxq8wqwzeRRmJSN87pcdEkV9TEztwjiYZhMibjnpjudWYnY254cNnv4LbmtvLbhgno",
  "key12": "3AJa9ZX2fbLNQumyEut8rkTyL1Quzw2CxnBmTph8UAz58QY6ArigZSw3cXpb9TD4wnEDkTQmeP7XAkv4U6nGkVJM",
  "key13": "4LnqRt32CT7hZGeNHj1x6AU8fPbdXDRXxZEYoeGidbqzaVdZ21JFBFCVCJ44jvZd5PRSwvPFcVtZ4AtAcezvoYFh",
  "key14": "4qnuhkypFGE6vkrQqfXnN4adSxovCuy8LCqGWpEAGbvQcQ26jVKRodUYGPHQeVpv6Wo6N8QVncYR7vNhGZsaQe63",
  "key15": "2BzuUVGSGJ6BqJnabD6vzj7M5CzM8EoTkqkgrkuScSgbYPmqLfvxD7XUC1Qif4HYjPoUiCfSmPhpXe82qovnf1g",
  "key16": "4r2miGo4wB4kUpCUzVzp1ztcZRwmtb68mw6FUFJAAHCZpmRshF73a3BQWd5ZtxtPzi12Mgk3QeeLfUN3KqLS2tMu",
  "key17": "4udyYyFbae7z4CcUKmoSaS3Z5a9JtQLbwrUot7CZZRVxW4UXiDBfQqPmGcvnKfTUEjrshfYqXWT4Sw5KGnFEHiCk",
  "key18": "pSYMMx5oWHgBAFokUpC5dHoyXLVF2KKE5bpAEfUmZVqdFzjGmfXA6mQwks8VmJGqFuLzRXuJiyyoBadwb2NC93c",
  "key19": "uGRr2MLWoZ49gJKDeRixGG3KGcmnXpD5yxLtEeimifbGm6tZRuQzt1XEtyyi19eVjPuP1k666hgNA8EU7Zokkxc",
  "key20": "3KBCs8j9PcKyZpjKy3eU4KP8eaRUDx3S1iqu2L9R8af1EzBgrWxFpJHSLVyjsHyfanSeUivFc2MPBMWGvRxQukux",
  "key21": "3U43coRLBphQrfDqaupqpFnWor6inRR94ViYjmTeLH26WqP4U3rDnFsm6TjRbgy3rPjX47oa5ntC8sBiM13nnMS1",
  "key22": "vSR6kX51XqychNc5k8v31h8kUUmNtTHV8utiQVEW1W2HjTityWFDdBnRNdpjPrFtcaVzLkXZEhna6Twet26gEG8",
  "key23": "4TjMDQY1jbU63qSB8AdCdZG3Ekbn92qJERhQhY7TJSsUBqBdWJhRJpiMBSYgL1efmBNYfaisJC4sVc8AvNPaREYQ",
  "key24": "RCTtEASRKyPJgjM7GjGmqMG1w48a8zofGaq6FqkDCykSxqqsCXdrCF5LVkKm45Wo1we72dNYd6FsSVHgX2jnBXu",
  "key25": "56hUPRkCDhZu7YorjAeWE4wQy8oBrhbouXhsbQdtNW6EqSoGMV4HeU5THXuwaUvcJp62EkMjZ8a22rndwVrB5CKG",
  "key26": "GZvMziRyEDgGeM6EC7taoX2VtmrzLgnbAjun9iYxdZa2mGtm1X8XcaVHkReMm7T9QW44JREnxZLcN7stnE3YMKs",
  "key27": "5ByW7XaH9Rzqfin9nRe3dHWBd1bLciJfqEEgi6ds7sEzsZYZbqaYjKj8CFCoRpux8L7bEJGqrbYhnb6rMZMcPXog",
  "key28": "5WziDjX3SFXZJnBrLdMHt9iosBT8qLqNtznJ6FSw8pNSjL5D3nzQFAfcjSDYhWh4Cu63gJjgD49ScciEZNRkqFWE",
  "key29": "hRNDnQYFq2w6D2CUQeoJ16q667ApuYwzF2xPx8u82gNfU6MnE7qxeNZhXqVB4rSYzg42i2F1kCvy8qyJaKMZQPo",
  "key30": "2VaTXAsjGqTsJGCJ492deXCw1JP3YXCbszePhYyQAviW6895zoTFerRXBSBDi8pPt3ycDNuNPge5vPapdMKwm4bL",
  "key31": "2bJmvwDGxMPBTPcdbdtM7ipQYEgkVQvpZY6TDSCdUTuEB5LtcQQYeuRSvown5VYRpQSeRCNwDjBHsVmnKtfYm53i",
  "key32": "2F9PhwHuPmK2kLssFjUH2h776S8z6PmyXETncuq9xSpKmDkHbizBwu9X6PgM7p3pQK9VnSJBYMWimsGPCbk1mWAa",
  "key33": "2um1vwuuD93vFXbsvucXbKkFNz16qF9GTDW7nhA12FezbW9DWbY2AsoxrposJ2xGd5PGPmYcDMchCfKwer5pPvBN",
  "key34": "4mMHr9QEVKv7vpakyW5Q4gdnWMopesDtJKX7tFDGnJpMWpGHu8GwUYLoeRWZKrUWBrAXYXFycM92oofyALGtCEh2",
  "key35": "222q9FwecjeEFJdu3jDReBTEBTurofXdR76RAosvem3dgc4WtXkGEkZ3RR8MjDfNrKcxyaX4eXyTP8NHSEDZBv4g",
  "key36": "BJeSp9xNLqWgqzYcAvru5zjz9ZeBQn1A5noDm1pVNDtooTjYRGGV6WkR8Ex9FQAC1HxtSD4DssZHpbCAZK1Bcd6"
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
