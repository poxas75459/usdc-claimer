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
    "5cGRMSzzo63MvqCsH2pL2HTWTR77LjHwgh1FhnJukny8239bT6wZ5ZCL16vAeydSZh6xRw4fgsuSWM3XUxEcDzpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cN6XueRGPY3prgCWfDBGg5s8KkFcaob7DW7Sbf1tjVd94c7MCiq6cwTvv13cnuD9sqnrsxcbrKPRo1M3YWRgwsb",
  "key1": "3XuTuvjHQDAvMAUYy9oiJ9berZe4jK51oAKd6AY1wv46YPrcWcF7tfpmW1f6ciZJMXXQgFKTyow35qcb9qixCm5f",
  "key2": "5bBWKX99Qw4fG8jB3Fqn4TiKch2Zb54RZMtMgrRo74yeZfnUPJVnpkx9v4hXnUJ392fekfszSSTZGLQAoy6PZcT4",
  "key3": "5u9kN4N4CKJjgYqhR5HDBk2oFwTNDNVgUmLvgZSTkoXz5bwW9Vck82DZCb6rdd9cpPcDBGUsE5wYP9ubiCcCRYVN",
  "key4": "2bq6dsXnYTJpGx9j9PyDsAMRQ6RdVJgXyoScFh96J2Y3v7BQa33tomuWbdTW9LKbpr3qpBt1xcgUE9fFAhaFtFST",
  "key5": "5rwoee67BWJW5uMmB8GVvYtUDPBQVufKN2kKrE2T7QhzjQmSv36t35YTqb33gAvrUn5akNjDZGjzSX4rjQVCL3zc",
  "key6": "yunSLvBDAeMbAuNZaYcmnsrF5Th9qKtm4LMKYiwUUYzJaRmpSpUvbYUXmyZuUhiHgD77QSEZ9ETgv15BmyBNjWn",
  "key7": "43D5eKxvT6XmopK77fzngbkVvMEda3T7pbPd8UBGycpJiW45Lw56ozQv8SFSTtYAu7mtuJGBkVku9cb9fWNmCEVM",
  "key8": "4huprVbMZaqBetgxoCeSUQ6Rqf6satYPmDormmyEaqEv9q9Q3UNSgKradoyCQ7EH36VnDMmrdVw9Etam4xHARZ1N",
  "key9": "5QEpLUDcXdtZYF7yxhGvTUeAn8RsiQ8US45DQpZpEvkMC3VdnesHmseG3AGpMeMeKgcUjdCYSv1FwPRnfHUwYTHN",
  "key10": "4WvyVHLg2B3SLvaRett6BVyCLdkZwyThkx73SLuGgyaV9PcnNms1bJwgdagsr4t9L23NEcgdMHmZmpHEYgQ69R9y",
  "key11": "3nnnMZfepmkPQAnA9bTxEiCQT9TEnGcDNLCqsWrZ82MRvLtajqKswL2eCAFGbNyfFpzuPbiczfd5CFJwfviUPsEz",
  "key12": "24yMEkXstEqTiXBiGRczoYknw7fJwSYMaCkeJCmxqPGk6NfB1kh2VuQvUD8aLRnXing6BiKkLDQrmeQxyHB2yvvh",
  "key13": "5QciEv26KUiMv5ED2oRdeCG7v6nT16oDMxi99ATQ38Pn9EYssU5fE1ZsG3qyqnQsYYGnznoCgaRR39iAc2QHqqrc",
  "key14": "2dNehZjDPefuySCrwBK9KU6qsJJRub49S9tzKjerGgbDnoPqLZypgAo8L41TXA2TMdQVr99FRZutVgCFqnxv4rXK",
  "key15": "DURNYNoJtNvhQagMKbpZU1ZyeMHm4zuSzRvBTbKxD3Xoypzize2vcpck6mN6y93fse5NVuaPVoNvp2rLs5xqkGy",
  "key16": "2ApGRxFEapVDKeYTnriDuQ6BaLJ95cYpnyLGgYeqzLqDPSMFAXY9iCAY2vh8PBVshjr1dNNd6bXvHHcTdkGzBG7e",
  "key17": "27mqZ1AcDKRGJsnu3WHAHA4jGmjsTTtPgzrVaUM1bw4FDs1tTjvnunj2scSt2TyPGNnv43xAcpciWL9YvbfoUCbk",
  "key18": "5nj1eQYAnigeVX96Qc1LPc3nSKADQ8APWkagHowesRK7BcPNY3rSXtR9ACMvXwm3am9P7MUXKaXVzX2ghBRGsGhx",
  "key19": "xJJxnhyVKqqysh9KGMbFEzxfrhtKqQTegtCUV4F6K6onfBXnHvumrLnw6s2V3hn1jxtNSvBrniBhixnzj4SfmM4",
  "key20": "2JidQGC27bGq6wmCwVxmf1fpJ5FzXNJtDaz7cRLXmwScugiWpp222s9AEAkAWzvaZjvHhddkjYXLeZ5JiPjZRHuW",
  "key21": "3t8VD5pxT5EKDAafjQsGbwrWD1DmYZy9otenAR9btkyALQ37pbzhbeHr9ouGV3UYe5FfZKYtVCs3UDcap4Qc1y3p",
  "key22": "RoDiDA8b3jWjZKsvAxkh3LzWdAoVU2biinKZDVhManzYwHhQCisoDFvNS9HPsafdKQFAwciJ7aZVL5AGKP98NXp",
  "key23": "3P78Y8asgbNkzo9a1aY9XK8tH3yAdxxhvips3q4rNb3qwThKgHz2eoSnShHtECmKjYh281QWprp7424PPmrLZqT",
  "key24": "3ooNrNV3ewETknMuBkF7fUmAqadhRNS4ZDzUGYCqAgbPmxK2HYvLmTyJF332uTWzCCJiEPDes89dwhAT9KKy51LX",
  "key25": "BfQFk8gLXgpgWRJsK3txdg7pxAKfgJ2rus1pYMhwz3DPTDcF5vMrPyDEMYXWpLocUhwtou1sxZFtYvBgwKFAtoj",
  "key26": "5fi8wm2qDCmBYh6qyN3g8uHWKvARfficHtmjvrhNYjR1S7XE59tFMcgpmEbpETU4KCfJ6xUCN8aauffTT7AYTVCr",
  "key27": "2eJWySPN99ofMVPxTFtM7fa64wfKJWq7mhUVzb5WsjhjdrMRkqPx6b8t4GLhZb5R9MbaUYNJoMo2415PfgvdTJUS",
  "key28": "43Vc1y7HuDuiu85ZkAaFB5BHy1Eqmb6kXnXG7GkBYpukxoY8EyTXfDiH2uaLZa7dNjfxbRoSwDHnzkkAPh67aT5P",
  "key29": "3ESkhVzHgNyV17zbRc2BYp62YSEY1VWTVjarDb38MGgrvsSmLct1uy9DG299notpyNACNmxsc6ots4DwG86dg2A2",
  "key30": "3eSizLm1XpBcpuGKMH8Hzjtt39VTig8CC6d1oxeAQrGJKFyrA5FajRKZzEdoUBhHtzLz2wuhM4aTApBGieLyNQiG",
  "key31": "jBhXaVDwqncgHuvtEGDbjnuhcLQhSqNXJcMxS4GMwh6MRkYTrys2xELbk1enTztzC1zyXxEVwobH8SaqAaMJFQh",
  "key32": "3px5tPxLCPLChhTqc3b2qivrLQCiMrpKSgGwGSmPtqGAqMtitFrMsvGh5TDusKDvHZmGwaxkMzWvGvXXDADCK3To",
  "key33": "4Qxn2WrGBQAZU16iNdSLj7VbmuuuEumAmLhWEigTP44dUFL7tXuENnCSNh95iLcKwGq5o772Be9NNpQeAG9ZNTAC",
  "key34": "4agD3YCJEYyTZrdo4Yuuuns4ijFNcwkZAka5Z4aH2p19VGVFmvBhzjrFFZC5o7LQUV7JDNsRoGMnCjWmQbd1ygKV",
  "key35": "4j8H3MAYRt5Y1ZRnRg9ARVanLRAKm69QzYkCrGpYfr5gUWwnErpxj8sux5ZU7Wa1PtZDC6jU83LvdqhRMbGejwoh",
  "key36": "52d4EERLwot9KC4D6mnf3bDyTgK5JSWR9qjvsvXzXwY6yVvMu3rjYJMmPTgkJSWAUG2xyTqgQJZXTADLjxNZ5Ajn",
  "key37": "5Jxzoy7t2KRPkiuxRaqH8mkEwSaF4QtKnZi9zY5eohtwJTJm81vx4MgRv2rWpHEv8rvzbDFA2NCorm1bKco8F7Sw"
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
