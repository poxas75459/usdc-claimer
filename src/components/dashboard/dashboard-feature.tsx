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
    "HCZtupRMwtvV2mTW513KpWAj8FqYvS9CTUAkHVUi2rrzE8J4nnuvJBhTudXfrLHW9Bqe3zks9DKojoQNhvwig1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgbEFP5mgpKFpS434JkRP7FRYMgh2gUTdeuG3zxHTu2STezjfbi6yvMiu9pYqDnVEWpLqKQHaM4GESFYoqqe7dc",
  "key1": "2BXN5EpNDZQ8sY3rsootRCuMTNwGyDczPr3fxrx3tyaHphDmc5igHYpvJEB2q2pV3ZcwMk46xPBKvb2b7ZV6oMLc",
  "key2": "2cHLcAxRwkUC7hjQDCmdiL4Bmp8pU1ujG9YgNM9D85mDp6DEgZD2BuDipzMoFHj3BcQjfMKjZeWrjEBhprdZ9eLu",
  "key3": "5JXnTg9iUMHSsVXVUZhbiWMNdndf4pp1bEAgEtS4cNsf5UaJjp7swUkF6VLsm7fprdETAt8xs7ePjvviu42pMbkJ",
  "key4": "5ThW3iFp3CLmRmdP87ukVyWJyd9pSkp3pQbpSfnL5y2APa6rNhtDdnQJx2h4NncB5pDwhJ7N4X9tvz2qDPunWsCy",
  "key5": "5k6hwGVfrUc4czWRyK1DSjj2eRut3BtM24k4v8kWu9PvqJMWkACWdaUGMb82AybCMhGasnNmiCyjBBF52L6iWx1N",
  "key6": "4zCUT4TGXJrtYVTSGhSsdfv53ydneg5ik2cyPMrozjbAzeySkuuoC6neeeiRHrohXiuLdjnegHHtHY6ohtEHz5XK",
  "key7": "46futRaTyLFeSLVbr4CfcFcJHebYyH7UTHLU6xdcCFZn8z9AmVVcr4DLjNeaaFcVWtZ18WVSr2NddiVooVtwUtnC",
  "key8": "2AsKqF8WS1v7aJryTmptNK5fSDt7ftTkEK9M1rzB1gBCPyL972YrZbup6VM69PbbxFMLwQM2YhM6C6tQVmAaWEMi",
  "key9": "2FnKqZ1qcYN6g61Rtdq1f32mPCMA7erYVCKZbpK31mmm1YiYyg4zY6hMz9B4wwCHKhBKFY4PhmYcRwrPPi2wSQF1",
  "key10": "4YkeLUUpUikRcdAXYNEyvdKUWF18fKFWFz961SjGm3x5zhAT9PdGpPgsEvGTJvW7ff3d4onFBgJ1VsVtJyYFbzEj",
  "key11": "58HPcmQtqiTGoLF5cUjt8iF5Biphp8FdT88WUYgTCoeA1qoc1gnmbYhDhiDwuNTkSYqLtdNFYEw2qkGjfPkL1vPW",
  "key12": "2eLrD1Xy28kM47eLwP9uxmMKjaeKNisNWJHDVWVhGhYjr8es6KivSSwk3qNwM2LYBA8vJBe8WKmEsmDmJq26iSUN",
  "key13": "42VxNUU7VyneTdVFFsCprysjGetx5LjtvTwQz1qUP1wcq2Lwqq7AHWNLctRVsDC7Gw85tt2uycyzbnxfay3cmDRv",
  "key14": "4FgYdeU13XRvg3CCK1qZ2vQ5a1ffLjF73JJteF4ARETc4QxQ49DUevdVBdTNZc1ikYy17HAuUe7htThVPBvRoHj9",
  "key15": "V1aypWbeJRsRF3PyZ7LvZDPn6a3kJ8xiM64gK7Kx3PkZE8c6ATAdxpPjNmCneRfGrELWn9e5XPAoXN3XF6U7rji",
  "key16": "5UbFvUQs8WdESWdWViJuRgyMUWVFoQsxoYLvF1iq2Mc2zho4DMoK8nSA4ZihC5x8itaVQwgA7Y1nuMmfKL9cafH1",
  "key17": "3uykpEpmSGjqfCg2ThnPuM8Hwwq2DgjeGKm17nFgdY2ibguxKufwEEHUzwXnBR5v68W5ucTRpEwBdfSkobr6Ddku",
  "key18": "3qJrRgfL6PXbUwXFykufgbC8BTq3C3JvrZxMDaQYmhw7YtUMks1LUjdBAxfZKdapnN3ksRK5hKvPWNzB3qTvXPVm",
  "key19": "3hB5ci9D8ga3kNYEcFRhhnB7NHQsb9WabGQiJZR1vFhiC66HzAGBPvHXM2Xw6ys4S2ygdg8JeWvBbiz1aDXXu5EP",
  "key20": "4nGBEb9sGp662Hxv59AmRuubp1V6D68a5xTLkNjwq1kiMZiRfBNgrT5aas8LRj3Dri2kji8YW5R4Fqrs9EiF5y41",
  "key21": "3mnU5i8DBJNd7FLCcgeLPn9rekXzaqWe9ALJR4FVpSgfe6y9YtXUjbk8qr1Yay6UPk5239YxJX5QJK3mPR4adsLE",
  "key22": "3hPM7HCwKNpeNLgaUohsaikBHw9Ah6PxvdN6pdXXM25gJ2HwZAEEzTH1DkoE49vYy7YWnGddYVXV8qUru8iSV6Po",
  "key23": "m6jy2stzz1UcAonNBvbZU8hCQirWbmVL1V6QtsvnXobzfbRR7ZHuF84bHyvpR5YNzQ5Sxp6gsBgUirb2Q4mMaBM",
  "key24": "4DLZ381bCKWiXQ9MFrFhR87JikWrFiYkzg8pa5qMWHdyPcSKxz55oVYRBJ5s4TtAgYc5WQQHcxvBj1u2FFgwEnxS",
  "key25": "4ny6aoTzmKD2rsgasKeCCgENokvFy4p7nwnVXEX4BAhFQdR31k1bedQTGKGnQLhYNKxQbW3G32Jf1w4mjQv5ad3g",
  "key26": "552Kw1oPp1qVj4kG5rB69Xxp19fcnpmBNKzJevjX4DcZ3EUUFAF2WDi7zWzz8ZoiAsHnxYEnV2j87Scffr6sNUSz",
  "key27": "4QYrNt6cFsrCCxMBCLJ54rs8PjZEfbuq2ync3PicuAtyCwQrH41B2x3pgiVdWxajhzxr14bpvh5jjcAC5X2un9TR"
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
