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
    "3DRi7SKgWxiEuUtcm3uWDQWtMghPnpTwUegotB3Yp6raU4mzE8Lis5th58TVYXJ3EsXPpRfBoWNpvXyyCopghZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yK8Xix4a2Crdb4XqKd7UwdREeuSuoF81jUJ8GkhynQNUQgHGVeFcF5Gs4seah7N43r1TEek5G2ZuhgKnp7CqjpY",
  "key1": "2crBHAN8o2hXEjF2tbNMyiZMdT7DxrxdTokK4ZbBbrapBvKKNgNjEc6BmEVU5gRMx2JJwnYvNuJKNXvYAKTc2rAj",
  "key2": "4Ghifek1c5jHjYoDctvME4m5Mpoi3titvc4i4rq4QVGvsb8kfi7yppzk31o9yxu1AKep9uFHqsSBK3egRTxnMDAL",
  "key3": "56s14Aana6LrUfGwNhBKYrqvyb4dq8zreVKSb7js3tQBr82ff8cHuKMXe689r1nDdTGXhLwuk5rPcy7DLu6etA55",
  "key4": "4JuFJiRgxPQ1Aw1Gzw1xxhSEtLkBMP2TsYhcnAQSoaGqx4rQCpKtw6Lp3yDTJq4cPk2SPg88sjfccs6tgpthep8a",
  "key5": "222oJt1TXnMMz7HZCWDQ8Hu5pf7cHmar5NRwn7bE4PsdNgoBSt7ojcaJH2K3zhvoPHpz7nyBkTkW1AAxL4zVnc2j",
  "key6": "5LrxvReAssABub3beupZqQxnRKBU3cno9Ebg2Qz84Y1kZ8phPrnvENGuy51Q8x7ANXLkj9vYJjyuBUqURep5QiWN",
  "key7": "3hKcktZtx3PtanE1cuswPUiKmsJeMQqtt1CnCosY348gFRs8Unyf1J4iVJSmYKRzajwwK4RgSTPZmaUoS7YtVM68",
  "key8": "2YKEGp61X8r6ZTLAb7G6usmxEEKStB1YXTgJgEWFETgoe14fXv11dLbJnhqdnUs3bnutMan5ji7Ce5PRC2HwFwz5",
  "key9": "53WnmvY6zUdqxpjn5fxZs7MvcQTzd3Fwg1hCy74AC9Y4vLax2XPERkuuUoyTeR5yBVRTo2kftJJxzuNRgHae7v9g",
  "key10": "2Uj4rWYEruxywRcnnSehQDh53haLnVZnZKAVL5QtZJTmie6C45nbScncebSgTedXpku8nUCzGCm6ezEY8Eth9eot",
  "key11": "4Q7nnuBEx6SyhaEULfU46r7i7hvLmuW61QeqDA7R1jMr14d88m1KtjnJLnK51QEWEyLrZiJDwZtmpX5oEk8Kvyh",
  "key12": "aKAthxVp6Rsgq8LqZYnAsjtdJhMXUzXZYxZ5hYU8WUYj5LihwSvcomtQdz3g1H8H2ArJmzHtnmPZZx5jSaAnxVu",
  "key13": "srNJDocHzpYB3U5VS7t2A6hFhnse85YpRQBSfas17hfgg5BAUypULB8wPDApiQZSRswBhywmMz5KZAeywCHDpAd",
  "key14": "4vWfgmKDxU6SBYg9PBq9ptpmkvMHgk35sFMBUrbbHH9UcxZPq2ji1cmSuEMtUdvyHd8KaSjJfTpHyAzcgE7cmCfy",
  "key15": "5nxo4tQ3Aj3QiRuoqU2mRsqKAPuMRk5C2eQUx3hW4RfWfeyArobKwxUS476vwDkvHWdNU5PGFhhwPDeKtEH4Gb2P",
  "key16": "53g72uoF6rm7yt9sYAQiyrjzUUPEbzZmBpxpqQcaJxXL1dmcKv1Mgjx4HAKk9ycwmkBC8QC9xQ2R1Voq6z1hEZiu",
  "key17": "49DwgejMNaCmkHfmoGvSbmUHb4jadTF8y8DmJc7Gsa1d2jzyjXTcHT7BuPT1edKXyvyjP4BTSi54buNA9KWucB2C",
  "key18": "48QFrbegaDCMx3miDiEfLCDVkA3vuuyomKDWKAYhDEArcJ2hRaAjCaaFS7dvCseD5x8EF8a7HCbG6mHbSRR13XM2",
  "key19": "3dXcQiNBzXcGsHYwvKFwzmSxQqoiXXerM5QRAfBJdCZuLmBbbmLgkxz25DwY5XtyJn2H6Lf1Hjz6J3ja6vsqPZ1H",
  "key20": "62WG2w9pHdQAfcJGhz5EgsxgaMj48PsUgCgaLqrxisN892iBqe3JDJBVczGo3Ry2URrvkWwwQjhYd7DCEM4f3kSM",
  "key21": "4pW7v1z8dNYajtHP3f6SyU6xpH4Ng5EqmvJkWW3c63mkDGvf8VceN8WxoeCZ2Tv9kwwBMuYA8LyboWBTJMvwE5KQ",
  "key22": "43DDwBTYenN1YEqKNk7LNdsNqg9VxFPYihYDz9ny9xYVprQvQbkTyFGkikb9Y6KicpPPjQY8iUdwXGD1WPkbXAfE",
  "key23": "5eaUkQN8f57SV4Ztw8WuNeHbcWVc4ZC8VGBYpFSGJ7WFEVHrkgyB9y7AjDQcHEWb1g3LVBGnMWTyxprWon6DWkqu",
  "key24": "2R58PrH7TYMwnAG6fVZpBZoFDfJ5xobsLC8AgxtP6LdTBmfvk6QiU3eZ7oNUPp3VFZhBKuytpxnCGbZH95mB5iHs",
  "key25": "DJkci8RTuZb7HxBtPWCc8moErGFGo45D6icJjFCWw146hTcSXcJmSQjyTwV51KXC1zZBsy1roZPNtL5aqQDZDCG",
  "key26": "55CrPGhh51iz8uYx7MtMqac2EbsR6Yash592wz4SkcqnV1eDSi2VRpcdPnEFbeT62bqE5S2Gr4TmKwUCSwQPk6j3",
  "key27": "64fc21mvW62jZTujyoNVs2ug2RGS1frybbPkRcpkXH1QYH6cLQjgwFQnsQWeNPyQ4x2xPwRJtBNsdb4pWU7mpNmy",
  "key28": "49FCtvQKVRG9QuMk2oZdxNWsxvQTbNDvb77gGsb6L6K36y2qwi91RVA8NffqKAEhFWJcpLT4qfVDNMA99pYsAu6T",
  "key29": "4obUUJnk67cKzjvbFVL39RKVHcUHfPt8Bs8gLVkpcgr5Gcshs8LUkdhRiQqpVVBWrRdtyUPKdpvdGgGz8iH4f8Tx"
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
