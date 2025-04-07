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
    "3r7D7QfweaCPhK3YG5K5yXDPsVkw9LaGXCMiSCPpP7scfwoTYNJG8uB6zvYfSZjExrE8vG7wsCeVcB17WEGhfLCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSSg2crvSkUktbPXPZzGWQmtdK11LQicH12jp2znLmJ6Nj5nq1coSeaKCaebf4YNjMBtPAkFz1A8x8f3TPHh7iB",
  "key1": "VQfg31xwEYywBLVLPGGFbgWTuEs6k8br7gux73jgfXHvoWU1AhpnhxRe3hTNbZgcUmK8nM9eNWFv9ZBup3cGJeA",
  "key2": "3JMWkJUxaMfsGXN7BKAGsmZ7rpaN1mbshaavqqLfgBZU84W4NJJUDP5iUZSm82itg6zkuYLpbmCrFAa6XepBPDKw",
  "key3": "JuQRvriUpapwJ3pruY2k2KXEYm7LpTkoKK46RvpaBGGDCZzX48syUz4FiCx7X6Gz3QAZugZLxwhrKsqnC1SfwpP",
  "key4": "414JA9o2uPNsukfUjzFGnimwHxq7qwkj99r4buonbD8qwr2cAnKw3evy2Jx7Wkcmp87MYuZ9PpcJfuDSANsVciwr",
  "key5": "3Ne212AP3a9kxcsxgDw2gF19qkeJ6ECbcECbbkJEMDZ4ZFJV7G4FxJAwtmyvqxnK9W1vKkvkyCghJUpBQdh5fTk5",
  "key6": "3AsCL3WLBkqguexqpM5toUfe4AwZWarQiyuSLua8j7DZjfHEDksVTm3VLsEQ3UAcwMkExaqsL9Pdvo2BenaHkqh5",
  "key7": "2yc9RErVwz1e9CLvQMDg3ntUCPRd1DAxCapF4ntkcSpe5CSujokFr7bstG27KmnDpfGkRiQo6nvjhSTQYebKAuFr",
  "key8": "4K5igxKJgX2fJFkf4x33nNtUxp6bFteKp7jeJEQ1jtj4uW8P7C9C5APr7bfGKMCgtebG4mcDCjVDUmgpbxr5pL7D",
  "key9": "4hyZJSsV6EhNkZbrpsZH6hLKCkRShGCerLXsJbyZ4Z4ZxiHfF5GKBtUtkxeJS7dCX7AmHRaDpf8nPVc8zXhV9pEf",
  "key10": "3Bhz5sUGBzfBAcEuZXoCXkVTq3MKBJv1fgcqi8s1jpHy7bHbzshMcFBxtBGdpVW21YSnJ1WEvgkishK3rF32znCk",
  "key11": "5FYgcLAat3At3Zpt7KRVr8ahLsMm4HArueyVAmhCzagqkd7w8xBQaiSy1ig2d2DarhUnVJermtGHKw7TJ6Z1BCY9",
  "key12": "FeSvAL1EYKjVoM7xrwJiuXsUVKMmCCSdktYjao3Tcsvwg6oQYgk9vYbUa7p3NyPzQA9AUmz3pQ3Dpd8vnrG7Wzc",
  "key13": "46BVvcXHjpmzAF4qxHxwTDhTL2tiHBLfRv7b54N8tyFX52MK2tuTvYM7y5KQ9yG2ohmgGpvMx66keHaowHeKNb1b",
  "key14": "25eXewhD9gdnfJGUDGeqpWuLkh4ujd5RYA5KrsR4L5cxkNuNMX4h2PRD9WQrCvfkHyjbcXncPCNGHNxF892TiTvS",
  "key15": "4sDHvrryAKacB1VeFuBHQZZUNVgzAtJ2dbC9w8f8s5JW4nbw5tfcRtDd2E2xCW6bCr9Zp83fjZ23G7rQRfjLTdUu",
  "key16": "fpZYeimutUqmtMx4dfx5SphsGP4kpvBsWEUQEs5vtK3kRSAFCkzMnmqSByrjscyBN1tqgXDZxjbf71QYpPLUWSt",
  "key17": "DpUqMDaBKV6nfS72nf1R3jmSNDaFTpUzHByQxnPVvWvyRbRVeA4oZdYRoHyyyKaXAPktrMfDdoEM3A2zQUZifKY",
  "key18": "2okXiATVF4hFqQEqkGaSBkKEyUY1hQpjRtiqE1XbwhY8Q4wAQEMTq5C8yyyVwKik5Mw4seAJDaZoPn1B1Nc7sBWF",
  "key19": "4oyntVzJasawFVRebrszsf3xAaAuHzdT8QVRJTDDTnxLZfw7Z46nL8NN5wzLppb9qMVWuk3nHy75g9bNWHeww9MS",
  "key20": "6oLtWWPMXMqyV9U88mb3rVynSHc2MEZ9Y8jeRH8n5N6TZHyLh4JxGVRY7C4pPC36YaDc6a34GAdwmVzYLkwc8nZ",
  "key21": "kNHh9jfAPHdhBTVJC2Ub24GgT5Q1WNyU1XC1sZwUJAikkDVNCVgpUhrnuGhdZkud1Nnc1s4gAKLoFUyeaUgiUvg",
  "key22": "27ESs2N9XXM2BKcX3PSFDZRmRuUhE4PLFcHGTXP4DspqUDt94vAk2VxWo361SbLZF7rb4JRyZvNM3ye52kbVUacR",
  "key23": "5Jnt72W1n14tMmihJx2pzLGyr9B3DkcibHzrV3z3ySYyLt3gtdXHQjhZ89bKwK2zk45FnMZAn4QwxY7kJTpUYUJE",
  "key24": "5UKKaKVQf8FgptP1M3tbVo35Mv1DLq6GYWxUPNL3o8gCTRqJ19nf1eSZQ38DviQ8GAkAhXVdgaEywZZNbLAjMrV6",
  "key25": "64Uw2zo2EbRzYd3YXGpLo1NQ4MK3edpEz6XoaMyBWogidxyVk7hyAyZWuZKHpC5bCZA2BjGrMwAHw5R7ePHupetc",
  "key26": "2ctwSUMcQhjsGW4whD4fVEFmQDZoYQHZP9ZVsv54xeTZkGsbdnawRfejDHkLMD1nCpveJ27AmRjK7CoBqVYX9z3Q",
  "key27": "5QZVtQmrLSqXLbU3aQQUpRJW6QJ72ftubYEmSVQyYgs1DhnWkDVDNHU7PJR18jtSCBmxdrBKFcTCqY5SvzQMm9k4",
  "key28": "4Tr5KPuY5aWmVHULgDpHRnZZFYa7zrjaZAPegV2uBsJy2WZ2jcDqCQ8hXSrqPnEvCYZbdkzn2FkLj6DnXnKDy4fC",
  "key29": "jhcNiMKeEcRmxz4s2Xaq2BgMeJvvVWiZUt9MveNteuRfeFfiihnV8DyEQRCeUJALyygzaczqUQWWdiSebHM2ANV",
  "key30": "5KRZ2mMmbvpixK9YccxcFK7xBN3Lb4MhMojVbuUgiscEdxwmDYEnYXvYaMg4kfL3nMNhzi8Md8VMkfA5gsaLZp7P",
  "key31": "47FPYgNqcmcJGTmiRzVfmzBy1G4h52kCfqn6ErGCHjpGzqxNrc8voaSANUD9CaUcX3kBf3gKJ61aXEgkn3riqNwG",
  "key32": "2T5WpTLrmYDhH7gLbEigsi8HVJ9tax7N22aKXYstit95eSdmUV3XMMYGvpPcq8KaJxTAM57WdxuuWuBVyLSjR88y",
  "key33": "3UVF6kze5zYkFcP3dg6JzCdR9hF6bYYq3H5DyW4xXWvPtGcZ9uRYkuSr3jR5Udo4ag6hoS5mv1AT3MumDUCQ6U4M",
  "key34": "DWDVfbD2xZ6qLqwKUZYRtNQgV6mzmmaf5iaYohWVzdJNWLxdNWAWfYoaKzSV4dmp7UR2CgwQ2BTHCsSCtwvjhz3",
  "key35": "4XwaiRjVxuLaQ6tg37HvCXZmYrUN46Woa4Aan6MiyQctUjLQGDhWd3xvwAhUcJXcb2aG68knmtehCBDam294jGiW"
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
