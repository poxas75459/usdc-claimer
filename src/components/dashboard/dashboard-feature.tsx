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
    "5nDiubkfC8RwW24yB3sV4cqQJpKmmB6f98Z2jRpbNaUJv84KKN7vCeYq6Z4ADjouN8vDghb9nCsnQBFYbBRUYKq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L3pdKq1baGmd9QYYdVYsmsnGQDDxxJhwhskpdj37PcEPXdTK6NszwiEfJYBGLeWes6J8jn7XhT6TEqmvs6H8d5H",
  "key1": "5oystDB2a36pkbmcGZDX24DiLZSmg2R12RGEyJQqvwuE4hyetF83bjA2cZ9UC9krdCergEjrBJUynnxmyrF1NZUX",
  "key2": "HXGbJKXFcvax4Q5mtp17ZpUQFMuKS6xHbgD5tUBSA4WsTbXyVwYw5wLFyQSJVvJeYqCscXzDDJf92sdoM2LB7G3",
  "key3": "3fAVda9iq4ixA6drTMtQeWZC5ZsHrF4P4eZZtwbFidXgw3u2vokAqzgsB5FoC4CtLkw2dEqqNmuCr2inSL4VR1uc",
  "key4": "2PvcomJuY5zAJuoaRVnR6Dzm8ZzgVjbWShB9wMUF28xfDPRZGQEdLvZnMjZjnTzxWucKGaZYXAH75Qt5vjqrMcXV",
  "key5": "3P5Yieeo9J6B6Rw8e1uYXFXLHkcKAoYLcpwohphVyNYrs46PavsBNKJMioy99SFgxW2zDA77X5pBqAUWyVYRWBYt",
  "key6": "3pK76LufZT8puN9W36FhEXXzoz7SKD4fykZL6s2bBsuJaVcR6LFxG3hGkTqHtUzeuaAVxoXxwgedr8GM3zYV4A2Q",
  "key7": "2ASQvJh7AMzCZqeC2cgzw1XwTk4bGPz4YTnTYpGNwVoWrMwqjsC5iKKRqWeza47DMJii8rECZU7okfVYTNxCzMVF",
  "key8": "2mPZm3BfyYWZvrbzNMa2xpbTCpJcrYbAPBF5b7agaJZxmhMRLZQMZcRv1Xvk3batS7ZCxHu1VaLDGWZoaeUwhi71",
  "key9": "5zaFQoVbPtJkCxuQLutt9mAHJZCQ3YXiDB9hSdhKDrjx6yrBAW6otSyXPsinn9ER6gWH6RQig91SqW4TR7ULDaPU",
  "key10": "N8Kz5ZkiTXs7yjBTdhcxd86C6CRy8Lfwkg6yq6TWLwkzM8HDybPVxjr3UpXARh3JK3JKQiDQmSTjq9YVgzwoLqf",
  "key11": "4qnRPfRWxzUAwiY6Eax9WkSqJWKqxLJ6SGi7bRmag4UJ5BbrFRyXHLxaigD9r2sMriok2Ly7AqgoizsMsmwAZJtM",
  "key12": "4J6qGsNqmje6bHXd3fRsHTQmcfUvYc5QmPDrdrLx7nRhJXhvhzKhKSzkHqdWpwfwYtjM6ErM8N18gjYHRpWLsquo",
  "key13": "45bjurWDHLwoJkweMkFRbofxNcxxFu1eLC6wU2gft99yR6Jb97UCKLUFQWC1PLuRRd3BjUMJguCdNyRKnoWheJcn",
  "key14": "61xTatutgZDEhmmjLQacnnRKP6TznCSGT2DFKpoDGWDMtBDesL5jXrV28Xw6PLp1Bn9d64KCATubZf29xubE5k9w",
  "key15": "tm3X3eoLqqnVv9N7Zk9y4kkicNYGCczut8gJRaik61B1ka9HorzZVjDBofkNemAptAahdruhhgV1iJEvWLWerLT",
  "key16": "4m9PKLUc1uwcQFshhRn2pzGnfySyT1pJqx8jVnBC2URU7QjVyMAeYMPsN6HCuBUeVRsrYWN28sUz9EYh9irPuD2J",
  "key17": "4wJ4CPVTft9caExaZkXpgYoXRQPvXReeT6qyhDbXY73K1MHcEqp2Y1thzMxwevwUmMMpMH2jn8HM9pCfyr6ULZmZ",
  "key18": "42HB7S7YbHP2xssU1tc8NQnuKnvx8VqDMSvvgMH2iAKzG2Xujp8o3GaJ8ghtED3aDRnNAPdjKefDJ6Zrxiz7XiXt",
  "key19": "4r19s6Bjw6GDMkh6jZWCXEwkSFwKC26ZckHCAgjSPJrP3nPTWG11XSiNM9qeXJYAjhyWDt8BzFZ1S1114CnutTB2",
  "key20": "5ixK869N9d2bNsRHbHGYPA3RpDw6wTpHMC6r8uRmX6pXFFAA8Xiokb3hqzBTwyt5j18t18BKba5MjN89PSroekAh",
  "key21": "531VB7gyKXGwginnwrzTUBp2fgU2EoeFyuYFmj6Cw4VQGontvnS7ptUvehmPWGRqwvrLK6Cz95cSzhCQftnVC6vL",
  "key22": "3qAD2bHKBENYj1jqZyjm5AB7b8caWpTWZ8itvwqosbm2Uvi8BH1rJeWt8fwhH1QvjcFkgynqc8Mqoq7SQcVpbJB9",
  "key23": "541RtW6FCsiZ3AgnxhieEdMts4zj9hBTTBDvam8EgYnWww2z4JtA9bLNxxkREV82ygoXqcJNUXDWxcrLXtxziKT3",
  "key24": "3oTsH2WZMjmQuKVm3kjvFwX5PMLKaoBXrFM8f5xdcCregdGxH31Us6cLpMh28ESrMo4DPJLHT3LudtdzvzPWFsHX",
  "key25": "WMazzCGkuhHd3Af1hHFTrbvKD7Hye5NJUGxVX4fPgkgtqW2TGMvVmp1kRmaLGPAm4eBtfwcqgJ1JBKbHaSDx4zq",
  "key26": "3ZUfeUPTruGs7rzkBz9XnKFYamGKhewp18puhFY6WqY2nwkbodA5UZEnCJszBJmvLZrpuYhDfRGJmtrCh31ct2pe",
  "key27": "5yCvhTnqy85SQ3BEZ5epDbeUfnQLM4Yj22vSVACcYzi8SBhKTx3hFisX8jNxZypPo2SptF5jfiqqf87ujRwh3gQd",
  "key28": "uHXgoPDtvTvCDgSu5DXC1rKq599yMT89zXf5zWByTu2j89kfTq3TN5VQJgBgB1nYdhWPna7Sne6KjUzjYUbHQLB",
  "key29": "3LqWu9YsfLcrkCykh6w4Znhmj9b8Ds8EbCjomxQJhGpkWxzPvLqXNgA8omkFUASSTj52FYMbo8ZiFr6fm5doXBBb",
  "key30": "4CfySU3q6U3uXsiHwBm7StQodD74owj7x9WHneBvdHnVnUodp3XkSh8nFzTeMUtoUby4aEeoq8JeAsVBHXQzpvjX",
  "key31": "4Cq3ufBT55oSdXHKqcv3Yv7rUQh6eWTzGvh8QHKcurYwmUe2ZQWvpy4eeBvTj6xPJCHpPHXeHL3vQSwMB5FBZhr7",
  "key32": "3XBkoBmGZfxb6fQrPXdhmxVLUJHyh4gP74LvZvNhr5G3FDtX4ucqV9diddYxkBWmg5nXqcKAZGU7dDvGHHLnZjtz",
  "key33": "2MiFnqRwqLZcUs1DsZb9USq8tPd4k94RZGtS4CrCTeSV3E5A8nt9hwnAUatiMyzkeYwqNbkriojadrDo52qHdw9N",
  "key34": "2sGmv3XLjiZod6pV9DnNyBSxnZfUTHsHLbYwovaDV3zcZFBs5RMrZnJexcgHd2uHRiqGC6EatufJqSKWW6HKN4xf"
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
