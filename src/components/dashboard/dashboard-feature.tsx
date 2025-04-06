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
    "3u6z5CpDmU2kRsNHYmjqJ7iYrUnrq7SEnr5EM94xsRsfiEivPSKhfrT3HmdiwVTd2fKF7PMikwnbnjuqWPEW1Bnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kFssPUryfhKaA71AhnwRLYALjATTXL4uhbbDKxrKeeYSZwxs1kbsNm47hq2rbTXoQfVqm5b6AYZjgGQmbH7sEEv",
  "key1": "56WnGP3PrRgvwQh2xUHGCT7XEDbDYUty8DAorEd8AoQYXKihTHhVrG82YmBBfzx1YwnqmxyF3fpphp78X5EFwHs8",
  "key2": "46VwjyEXjd2meNAJr2XJVx7Dp4pNfqs7DTAYkHW3XEc1pJXEVLRRm3ArFqQH186nFgAuYw9zW18zWvr3gJPzybq7",
  "key3": "4QHWnXwbTFgqtLv6yBYUpd6TYy2EF87MuBHmUaetsgZjfXeoX3dfzMTGPTMfiqot5fPoedbam79hPHDucRGvstTF",
  "key4": "3kaXVQCibMZTUSKxLewrufEjEhb69GDw2vDzaf7XQvLxEnFbbBvyTzD8Z3Fx5qqmZmQtKUCa7k5i7VKdBGm4gjNe",
  "key5": "3Br1vj1B4gPWSzauv2vTzt2PXCLn996asVXrE4ts9bM1gE8iLLeVyXHR66KRiRn5t2BjqqqKMZMZkoCaQXWxZjvi",
  "key6": "kYd7F36X7Bpk4ukNB3daCc35fs5vnqdSwNq8KUPZ8r36A2UAQ6MQ2uynJyyh3heaKwKsYJiMgdZe8qeMtwiAZLR",
  "key7": "27koF96V8HxpxRxi4bL7c4QQ19Cc5YJwj7AonT3WXgYoWhcdWXYYTxt2gsaYEcxAxxocvuPPVH5hbJJWRoR31zzw",
  "key8": "Hk4ymntaLjSQoZDSu6HC7fqNWBCmLmPYfGqfHE9VeDcCx58PjMrzFVUNVe2KAQ14U6xx6QGxbnoDgtNtaAjdkcw",
  "key9": "4dVdi2xCKAAtjfeEDyEaitSGHVmRJcMNXWiFn4vPg18sQMtTYPYfewA3SKqbYZw76hSK9VVd39RiuftLdhNHCzoE",
  "key10": "WcEYKXMcghrNXKmuAy6SNaVz2AFF61XLFbLb9FheAJuJsRAobyj5phumaqcHf1gF45zrstW87DLpW8bLkpYpXUe",
  "key11": "2EaiYZcqim7y2okjDxjQimV2vLFc7goRaDNKAWf4TgBsr6DkXK8QTy5jGzPkZxJbCB8r1QZpA6SgKeG9CzVQfGnb",
  "key12": "4JvizX3nxtvwxveJEYe2pEzF1jPfVN66JJ6DYiXNoTVtH3BazKSVAxH7E8v5L1ozgjkZca3X1CdtudtzmzJpmRKK",
  "key13": "317xWFBNBoMTCeMA6sXSTvY8xPeDERXWj7uWLK97Sjmzxft2L4C3XS3dJ7hDSSn4Ze5ree46GxSJnBBmdhMfVc6z",
  "key14": "4EkLo9RQDnL8YWDoaPGRBm4i8HTcXYsQRMoGRxhcqduvSLoy8ba8AcffSN8Ffd6j7rYrmViqduXJXtmKRzwjHFqN",
  "key15": "3qTST2Htxt1VtvkVcXrZSmfYuFcbB5zMCCTdnYm9MbmkuNEdTPSGAsREDc9S1Hitnmvr98TsSGDZMdwSS2MNDsCT",
  "key16": "3BoMCdkyj1jyTVHvXez7HGQj1yCpPcoLaonuashh9yhfob1hpTRzh9tSQpxmhUFLHbx7ACRkSVCkQTZ7HpCai8NW",
  "key17": "4vzDfe9WB9pbqRn8vwMjTB4R2CNsMuPquAuTUN8QrNNMoXWi4zkfHzbUnso2YSHPU3Qd8ki4AqUCb93X8CJwf2ae",
  "key18": "63nThAw2QqTfphikmapKKxAEw1fFj5WnCWXHdpXQbT34erNi7zdw7kGX2uZ346zTdxiDUFQharVuejPFpNnBMFH2",
  "key19": "4edekc56p7q3QrSeicU8p2uhGUz7S2irGsiPvdkgfs1ZSj4opjJe2BkuLpxWqEk4VMSgRKqw45KgBk7T6EWbXveV",
  "key20": "2ZkWNVpXYZivEBrqstBfSQLKTcofTwQV3QLeMBpDwUh69s29fFSmKmtzfNBhJM423xqoxfJN12gYGRw1DH5fGZat",
  "key21": "2ZxeZKY5EKL64LymLJdoyUjhUBkwTyJoXqTW45Bz3Us15HZzLF6CGnRKT3Fq5uBbfa5oBZKaTDZFsxKxpkrY2vBg",
  "key22": "5ca9iXvNeUWFttToKa7Wqch5ynuRhptFxbczR6k8rG2wtMAo7yjBMeQfqnEemo1EANYxee6CufgXyuzqgJgzPSWH",
  "key23": "5zTJzQRnXH3ngiWvrhdt5J6gqpFBjALYS598XzqppfLBgDxUQTbiAwh8zqLLJNEmYkJkNPBzJZfF3YiKnsTfG3b1",
  "key24": "2HQvzuS3ZAc9aVFMwBEDmAYAqXsZmG3tCpjpYc8NaEhce1tcvpjUSvPYW4ps6KijGh4HG4GyxifLKCcdHvWXikXu"
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
