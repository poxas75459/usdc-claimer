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
    "53n984ETvqQ2RGDVfKBzq7f4MJyfwaS1PSDxxQCUpGtYSnJzduGoCVeLm8B11zq7cTZET5AHQwEjhu61GLnYrTh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQjGGXprkAR6RLTiPAD2LydoYZpVrpfWcgEkZwt2T2zCbDD1sJXGBKCJWCGPKcUjFM5sYqStbbxTnnoKUMj3o1L",
  "key1": "Ge6VArPDgQeuyARirUQzsZL9nzPKZik9cm4jxbwZxYjKmULYAzson9SfmNsJfWAV1hesrekBQpneMfHKv8V8UHu",
  "key2": "XMuDhmt6ZqDDuP9KdPXuwZUKqw9r3CJwDJz9m8gPx3bh69kJb9vhtaeoYVquyPGb7DWFGj3C3e6Ch9rAP2LgbDp",
  "key3": "2qJw5RdM5xWy3zJ4EVDAnSmTJQ42osaiVJrzYSUJNabrkkUi1T3sW7JAnfTnPMnkiJwg5p6Layc5H65CaNpz25YZ",
  "key4": "2oDY6BUu5e99qiHwNyLZHqxoMB4xgzTUS5ffDV58DXnjk88cRL7j41ozemQrUQ7aEvQ93CoXEeBLPgdzRJLkWpyA",
  "key5": "2U3RtsyG2no1DPjsAyrKR8swcRgwiM7WcfD9jpCV5HVC7QPSfZJwrJFByQSPetX3tqgPCPpeiL4WGBeptASce5mE",
  "key6": "2JoCbiUBDX2V5q1yegT5Md1osJrHbexH3uxcKyztjc1Mwr8zFcUXoV6bmMYNeN9Wr83gzeoJjuTtohc6jCLCTWEG",
  "key7": "2Fv2ES4AzHN3Z2Fe6qzxNCXUkTVbPYX55RPrJjKCp1RDpPDzbnkb5Psj8DMe5ErA2KkbcZZ9H1jD5wauW4CEprnb",
  "key8": "5cooCmnjS1ufLShpDWraPhbboPrXxbEygQgW9quN6ydPmF8sM3DhM7iFQy4x8n2dkqmwKi9aUTmwV2SGpvJmfM7f",
  "key9": "3B4cbPNCceAneFBWLK5HRdaVeLAiW86ugBQY8m5ArWiAMaR9D86TUhTvfWP1GN4ah8EyNUyxbCkKejVKRNTcRDxR",
  "key10": "2xf8i4yyfn2hC3um6GTYRDThWdX86HDeeHgv9ABpSb2VhWXG84UKNmMM3shDUiBvrKdwVeBNiNxuozTEYS5sr8V7",
  "key11": "2u7FxW68vaPhSiZzRXqyb5WmJyLiR1UfnWd1kv42dNmDt5BfrS7CkmdwZyXHQ6jSixtMAYP8nv8oyaNb2fdabwUo",
  "key12": "4RShD8L8Xgdxi1fwzHwSUGu4juH9j7xbn5CijHawFrVrdYSobgiztuWb2GWovhHtG5h2nXUpMebFDWRLxU9vr6eg",
  "key13": "5EHFhdC4igrybV1QgsugDpLb6516rKNLB4BxxtDXGrMprYzc5ZJ3zjSUARYogy5SK3iMWskEg8q1Epn1kAvZ4K9h",
  "key14": "2eXqX1g1DQfamirpnd6iiuVxSVehAqTQwtzampo698E8VNJZxjsAUedNLLYPFav32fb9ZsawVqGRafciagUwYCRa",
  "key15": "3TNpuQ52rjHwigN4NByAM2yR932xjJdyGvW6YVTWpX5VWrsXmXBujENkgG8sG8hjFs7XmkEeby4xYzTv2hdV4vGj",
  "key16": "2YX6x7mFYUQpWHWQwXwSCh7xKEkYvxQGmiiVc2CrKmDuLDmVdE2YBrakk7PjY4GmJXp8pysB3d4saQ3FRHF3ZVuK",
  "key17": "4ezinpVDqFwUgvJDB3h1pC2aKbJzGq2Qq96HPPkn3TqiufNa8vX1qYByoMMwS5YVxLxXEBtERiyhSnRMykd1PDka",
  "key18": "puK6M84RinWKY8CJdYhcUKffXGBvB9ZCPZ6hznKGsMNdbo6sqHomPUHpsEdmBHfpUa1RPXKMeQYX3nzHK4d3U5e",
  "key19": "PXJ9SeFuR8PG1x2qAw9wbT8dNZnsZWiSBerjAs5UnVFfE638xRkK8ZCpLdP2GHRC8fRujFh9DMPaPZkKgVXdTUX",
  "key20": "2DfsVTuLLT9iyKdAiwohuNxeHdQcPzSFYudNaAYU9GiXSqMYdR3U6yuWPeCfFDrH6dKDnkbhUHHVJAdMxbuoPJbK",
  "key21": "EPf5LfNeWqpPn3XdU5R8axoeb8vr95UgHyuNaUDkgAKp1zZUqKVB1UGDsvWMNjBAT28RzjHXEgWVL55pzUZdnmr",
  "key22": "57yJppKpbnMfmEvCSG3DVPQBpA16owXmwySRab4JTPPeC8y7zb8ndRkeTmMNbufbNB9QheoZt15YD3tQrtvgRfWL",
  "key23": "bp13Fo2TonRekoq87gu3VjpR4XiCLPy7qmQCT1Tst47ubVREQHTv8p3m5nM7KrbCpHREP1zs6AFmaLsBgFc2P9w",
  "key24": "2mFzvXxjvU2Q4iQ3H44N8HnonXSqnBvt98msJA1JqGoKA3LX5pLixNre8qJox4j7qqmtdGtyhq7Bfq5a1xhyaMHc",
  "key25": "Yk5hkXyjsJvgVRpNa8CfgiB65jssUbZ65KFu3tUVW3t8RsnxXpoCwPQCwECKopzLgw9w4QegWFqZM79ZWQPLhRD",
  "key26": "2sQb4HUfZ6hYsB9ZUuSCwF3iZwnXfQsitdkocJPyoUMaymGUoc9V7EQwiuzVuaLQJqzBnj2FTXbychEz89X2UWQo",
  "key27": "3NWMnWXcq4j4dEXBkm36qYtiuEZBoYyihiBmEGyge2rQvrt35VNkvfKKyNvwHqpzj71x2sPKo123ovcrDv4hNqP4",
  "key28": "3EG3TEKNeFmxQBtuGkMa7HjidcFGdKKAsmzFRaLi3JAL6Qdq1gDSHyrf2xjKtdVpfsZvRFWCknRn6WeJjY7KfMhi",
  "key29": "3qjkJCEqupmuSGHmh5pYf6kY9BdL1Ecnm5Ks8tMspMFgCXdcuV6Wgi3GiqZbX1veNtZkDixgaiGxcwZCruL4WRwu",
  "key30": "3ysEntbf5Po3xZ4iDgA28MxTnnXiPvwkUzztRF133oF2pxzRHDrhJU5ypVXyE8VjhN5knv88UTKKMwiKAdhqySsr"
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
