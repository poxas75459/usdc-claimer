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
    "5kfmLYhKkv5zUb3rL1W9mJwQ63ABuW9JgGtDBgjPnkLGVQEQSbRCQD8A3ePo9x4RtnzLzCeYYDa5cWuR9VVa2AJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AuvvzskyD7ehAyGjiLHG7X2ufMrAZEM1RSRqyG2RehU7dyMb3TWR6RspjsHrJLPFP4ngXyF7t56KhQuWnFGk7ZU",
  "key1": "5XH6AdWYU2LB8ZsbQqxc5qyYrdXmyVKEPC8Wqw4XwNToUUq5NdQsnGZkKLEHJavDLbbQk5hrD7HrjVKUfrvq7to8",
  "key2": "5QQnuWNn6XhccCqH2hRm39cDeEfzHVwLESFrsPsDa8CFxTTLaQkG19ZsBhKuGdK9MaoJS5THnd2uCLYA1sG6EaJz",
  "key3": "rKsZcBM1Ehgfi1ZcuLUkrKCLwMTpdepyFF2qMy9g6dpezvaqGDDgUBmZnddTFEC9rnamkAu9oLUQivjW9oh5sin",
  "key4": "4c1ALY45bV8cbYCU8bRtwQWU6VrcxFF75mCGbX4GHU19JS7BRset8wo9vhHrRRhHpEoN2mZF4p3zcMyQzxC5U5hq",
  "key5": "59ZXuh9cJbiLds5BD8cf2FamtSMnxCikikzrw1he36yfEumxVRfGZyRF1681Hu4Qke2EmMpe9MceV25utyLX3YJm",
  "key6": "52DyGST1Xh26M3Jr8L8vwjmsJKFQhCMsDQ4qfqqG55ecSExsJM3PtvGxs2X4yhXvQVxPRpNs6xtCDqGYqchVdwJd",
  "key7": "4fmQxHhcJJF3QCbEefXwK47hYZhrLC2Ph93JvS2zhmp57Ymtdz9xob2YF4xcwh6hhGidn2oKqwJKZph4DFrVDWCV",
  "key8": "caM6ycAkR2Xk738KkL4puEwKgVxWGGhSvchzUHzPxkgcvJhAqnJKM235kpZ8rzdKRGcUvQ1iBcfo52cMEq3ppbL",
  "key9": "4y8gRQGTxTRysxeAXm1WLzkrqoewrjKLX9UkZAoGF49GvGDzdok93jHSmwpCwvCAc5HRyB8Sawmm6VFCJtZ4THk",
  "key10": "3Ybi1rq6McGTHmxwtF713is88zXPTEZpqbR31NHAC6dcoPBkTXwNPBF6UaPivkJ419CMs5c9KZZgRqSUyegk4tjn",
  "key11": "3bjSZqLshjG4GeUAiKnp7J8fThvPuixzp7Kfg2mpBYSKpqTcNJfKorXMGzqwwkLumdsnoJUiMygpUt37xs6cEkmx",
  "key12": "BBjvdR63X7uSra1Xa6icMeYsz4mZqYzt5xxPcurqwNhsGQW54D7QSHDDReeDUUZzgKYGc4yVEwjW7NCxFNhzFjg",
  "key13": "5NpCzvrAAsG5LrBe8CP4z5rLg55xpcFnuVqaZ22wu8socHPdD6D2rqwLCkYHFksfzVcLM5C172Kr3WHiigoxphog",
  "key14": "vkEGkXWjSvkQ71aDJsNcvGXqNCp9GXRfUwJN63564RAGk7uQhLdVhSQCN7BE2ea2znKu8XdcKY7fnVdBsUwBhze",
  "key15": "57phNKWJo174p7iRGxZGHTUQZudLfW7nNKrCaRq9jyDMhcsBKBKW3FSn45invj6N1C6fukikUJxD83Dj9NhsLgUh",
  "key16": "67Rv8qUBvxfHYjExSriAezvvgF4zvvo8Gp2wBsKhEdYRFBAvgdUrucEfWkUXAxNJ9Hd6bm849GBQRqLUxoB9FPJS",
  "key17": "2vjzJgQFU4UwiBwVWtMuaBR85KU1QcRA8kDU43Qdsor113gKfTivZLXBWhXoWsUXUUkK25WogVZrcrbuogDrdia7",
  "key18": "2DFse55ST9sExBp9YRtnAPmu2xSJmJFt1Qi47NkNv31N5wdpHW38VPy981pbMDjSUg1G8ogUQ4GSXPTsagBBimhG",
  "key19": "37tcFwDHFhEMdGRMFsn14dbztWSUwQHwKu4Rg642PgYBUxcVH7L1sBWJ9jbB9Tv5GppKfoMDV72FgK6akVRtXjZy",
  "key20": "3XNpzvbmafgnpSGiXCxafVb19enpvYG6sfhPAFzF5eS3xSnxnc9fkY2q9DcXcdpWWfxWxz91WXvn1B6aX7QwdqGi",
  "key21": "2pvVnLSDK3t1nc1j3e4NgkwYdNYY48WJAJRU8RevKiU3WCxGRkgQz3ErbShjnBLa5rsc3ViaHLbwSnQ3RgJrKqGb",
  "key22": "4VSV5qXmvV2T8zL413kWhnM6m3ma5dtXRrFDgf2r86YRb4scsctnZSMbCBGb6BmJ4Tgh1qdA1FhGwVUKDbnKRw7g",
  "key23": "2AvGPK3z2hJysiFkWmN3onXatJrUo22k8G1vubkCzaj2EyZqWhRT9Zq3RoUWo1d1UnmnXyQFFrBbYVBg4yZHxLzp",
  "key24": "2jyvaQWB1qC5KeHxeshXr7cm9kM5XHMsbdz4BDhscYXaU82dfHhJjwWPND89RjKAm7yG2NNSgMMPyRqHJ2ZpS8k3",
  "key25": "52ak9EsGNByNrmVe4jhBTb6uKNJGnVSt3a12G63VCoRfoJVjYiVoBQ9xPcNurgzvLZHRqqNtjuzR7idE4Rn8ceR3",
  "key26": "4eX78EKWcrdkoZ1weGhEUKqmNc8SKBPBVoDQv7EKfUX48VHr8qMj2EGUsM2NB5m7X6gqwj2wRsV99BMRRGRPLcMb",
  "key27": "EtrX175vZVRy25N3fDwV8t3fxdEdijWuE84H7HuMeFxG9S3sNV7mikA43AnSNBgqq1N4ownjR5kDkhCqhiQQVoz",
  "key28": "4DFnU8XEj7o8WGv9a8gj6DFx1EATpzGUddKB1o4pow1uQCpv7omoyqxnSngyxS59Bq1NeydmXQsMhrM4Gvu2tspw",
  "key29": "3u8CzEx8hCfuWJULd21rEfojtcTqQJw7gi3G7EDLTQMBV3YMQPSYhNd9dXxgMoBGAwiMGBe4P7yHt7jfTVhqCbJx",
  "key30": "52LMLrCMw78U5KoYi99HezgaaS8aHaN6sHW1pAftq8vxPP1XUye6tFwBuMfupTCKKKwDhmoVcVZs1tgfT4voFjuB",
  "key31": "x4vMRNyZqr9CcvxgDiaArwAprYKpLHtiah3QvA8UZ2WZeNXpJs1QudF3qDhUq3B8fpiCXwqAF4VX8uWPe13kXJm",
  "key32": "GktFhPGyWW1T4gnjPPWpJQ2FU7twhXZdaKDMDXBybxiso68kMi5dXyRjL5xSHwWT5crJ4yH75Pp9aZtLxksXakx",
  "key33": "5RR3Ynu4QsCdxBhoET586Vf12EFQ1VsAeUCxaxtJSrMf6q6xiozi2bhzT411ZnUk3Yg3rkYnCmnjMqpvkdm4AxMm",
  "key34": "o5LU7ZUAm9haRvtCcnToSjxYpZLuBsMeRaYcznmN1AC5WghGkafDfCethAxnRRWhzA9q9whsoSi3qHVSgWHs2Bz",
  "key35": "ErZuMh9XG3Jf3rVAYr78cchtuDWBWu7tcB4urM3jUcAUohuYujcmD9xC3iB8roqBuFzFNkeBKa1GceARWdureCq",
  "key36": "2FnBTZCZyCgXarbGcKj9CxRJok4fm9xw3fTTFB913PcesAouzou9f4YGXN34RDEkgRcS2w3TT1GktdwaYjss5iM4",
  "key37": "5FQdtxvziXsXuYHAiK7QCQuD5yYXc3uVpkGoGUzg1yWnxR8ERiLbMPBuF2m4A23hWuAnUKvJUBarZxUgWQ4eM5VY",
  "key38": "2xgsbFekfGBqQJx89GKE8tQWsfNmxvxTtYFqt4Rj79tBWezreig8xKYSgLjXSTNdZVXdARZRYkegBnsN9C8dqAmG"
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
