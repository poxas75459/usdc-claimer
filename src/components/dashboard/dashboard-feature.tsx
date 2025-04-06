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
    "5pSQZ1TeVE9B7cYZnaXRRRx16Gs6tagrWeo3xq67aZDNjUCNXrz5F83Gv39cq3vLng8UfD3E92oBFwPG81gsnrxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wrrtxjvAFVE3JDYwkZ9m4uzvSdMgpkbsk1zTph5y5n3kGyHgynQY2vBt84aehA2j1NKGkQTKWaGSEBW1m6rq61P",
  "key1": "3bjc3pxnVLmKH1NFAqdCN4BtUQCgyqpLxL9E1rhHTEWLYig54osGrYYchgbF8oHu3HaWfgiivyziipLxNnMJQZMr",
  "key2": "2EwQz87WKDwV7JcaVtykLZeiri3HDrMFLhmRwRkHWToz5UqtKAVyHYBQjdxPYbJaEFZGB8xNHnSN2X5a5FNF5T1J",
  "key3": "3zNYvHgL8tfexiZmvgSxLhovL2XcxnB83GuPuPrMQhbwQP2RaJ6dQFz7bMn5cc66yAeTz2yMWsx4JD25Atcz3qqW",
  "key4": "5CtDB4jVuFJiVDaFRbcHvdoZtZK5wVYbi4oDrrmbHsnkUAkRbDPVxiV9hEEXjB7Lo4kik2kgWvbT4BZ2P9uMKc7f",
  "key5": "3qaUrw1S3oRM7mikhH7we5rELo2SUjrC96R1MipfDq6GNyiVQB4cFsGyCZuhKeGyqak5zGCpawRrw8SgkEyaoSrP",
  "key6": "5T8GhJ7dabGiRPUSpAL7N9y3EirSCtcs1fqyWoUNsfkNSVGV7YaaNMo17r6H9hJzpdX4eMFurEtTp5ogqDaW2Sn4",
  "key7": "4Vb8F6eMAKs3FoHFSdDarnGGUgvdkMWDLja8Zs8EMeGhx3KvS3ouC17ZKrqP1P1aES6o336SFcinSbJe8Zc4WnyN",
  "key8": "ySaUpJ2AezdYWXBTzujyWR75YLzXBGLr7CRyKfwDYeFfRQPSgWHd1hdDfeRhSJBh5wsJxXNb3rbaQQtWjLgKhvd",
  "key9": "5UcQfvapayt1CNvQvqXiYbSyeAR6pK5U31HgiSegZmE8eBNJk38W5VDRJsta9WBsr5VzYSdRwyALWsqQrYBEenwk",
  "key10": "2WwLawhCXRs2peLdaCu1C6U5DV4pb9NFJpVykSE1NYTwYq7r4XziVpPU5vAEkg4J61QuhWCnfsJC9VFYSh1h2obV",
  "key11": "5H1FhrPu9yLtjyVg1EQQ8LPtbubZoU4Bmt4VToiwWySyi5eSEiJbRjix2kntYeirJYx2o77TWjYbNL5Jdx7p8JDe",
  "key12": "3rXq97rxr6pPQSaSoby8z2TLEMLjeTqSSQMVkw7x4FLzjU1hCvKP6V7R6xFQxF96PZpddEaRsrgtVPZFGRCiGWZn",
  "key13": "vQfXbiqoc4sdsi841iVAySoWDQsoHKvmK8BLzuUHrQxjjPZM9yoosZeBvxTGLfR64GT2NDwCearpr8fMdhJZ1vg",
  "key14": "5Y5C9Gejy9KVPGjXnto4xQGvyBYsAB4nhv46rjbccMipAYvvspDGaYfvNX3vFBH3CvsCznejXoNaeAdHuW6FsVnV",
  "key15": "4D4BSTtF997Ex7YTH2kozVJPKNrbTy4ZqDjWpWcFxwG5DQ3GYaWdMrwFmLfRhPJ2gowWnaVeoddXJ1x1VVrzPrsF",
  "key16": "4qg7HTcjfcs3414LcKda1XmaibPtcsa7p5w2K1taCwG3SEFRJf7QCxVRgxyznFku7NtLBNcS9MvPhSFgBxWfJqzS",
  "key17": "56VPHhZcdMhgacAibzdeL3VZToAQVm8bNquDahd6pCmdXPEfJkYKkMqpmLjFxwMN68SjK3UwZbga22K3Cr9TP7LE",
  "key18": "3jznedUdi38FR86FEw3vmqxrqsSBXKy7XUeCvrc4pEhaNub89iLVby7uTkNw7gvK6kK4k4V9DRAY8s18KAAsaLi",
  "key19": "2LfgYmtZnLSNrE5aQpe87MFz6vjkW1f52N9ixkG2j7bMipCHX4k2icNgguABJPpSYfWNFAVFZMXzfhUm9dKJqdRZ",
  "key20": "qRyqXeuD3QfWCHeDtFepd32jrw3Y5yrNa7NqWyQjmJTDNchqCcn6VYMP8wnrB8UvkDYhSNMswiPmZZxX5zF9KDm",
  "key21": "3WvnBw3uVjydg3YXzkv4yiinG56msPnXxt52FTvrUJdiQQgYgg1Aka5ixy3ykbizk6ieRa4aDSmc5dyV5amna6SL",
  "key22": "3LrgBEQ3YiKqRjPj1M85HHCLnDNb68SYLnuLdeS2b8GGP1ABpwHmmcAVmmyj7CM9BM4quj2TvWoVb9vht7hiCEF3",
  "key23": "qMZNpfrsqgJiozexmVRbUBBAbT4WX1XCpKmZVorx4WtWyJXy2CKGVxXAUBBsh2boQ3akjntNjk7oyPPFQLkC7UD",
  "key24": "u572ZCF3VBBKoYaMVQVbHNaz7jEkzUkEVp3fdnWkQVDL3mY6R1ytqkP9R2TASciK7S63RXshZXFZbbzVrm58CSH",
  "key25": "4UZt7Jnz9eeu6GgabqSjcaxoKBtz7pv6P1m1hseRNkvebYTUW7Cw3DvMsrMUSqQSZUv3A1xC4itUtUvyQB4epbKn",
  "key26": "5cvYubhBz26DUikZ9DaaYVfMuqfJ5ZomG4mXQaR1v1EMijup6PcxoQiBw8H5MqEDbWvScMEqwKgBCJyzod9yoEeW",
  "key27": "xK929GxxBkuzycUi3GPZBhMBPLo9u9qWtmqhBaRQRsGAeKhvGT6izz3wBhFQapSqmfTSNueD9A72q7xyugNBR42",
  "key28": "3XpzQMJDwTWsnyp2yimAF7gWPPD89P4ApXdtGM3AgLSFCimhN2TJQNxSGj27nSBCAft7HkuE1FxBjpyw5Tmnym3y"
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
