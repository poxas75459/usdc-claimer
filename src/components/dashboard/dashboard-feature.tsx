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
    "5KeysDLhu6Tzrc3tWuuMZ9r6No9ZK7uPUyEWB57zFN1HZSogasDWpfRHDCHLJxhorYpLn2vUomvmh9sRLMRPcoof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gUgH6W9FvznuKBvqGvRX6ywU9Y1tNSUfQiNjLxkBsP9JxX35qbracHg5BAzmVnAwg7Pneqjg4ba2gy5HrUf77Su",
  "key1": "3UKkJeeqCw976tArheT7rbtr1NsFyBGH56c3Hni3WpNjTpzb12yiAFgBf6sREW3dtZsNo7brWrnQGwFtm7FuX49R",
  "key2": "2eHyzaadhA1ng1444NkRjsJcgMjT3ouCSn3EVLGfRG616hpXVu3vzWGsYpHGHBZZn7iCCTsx4Sv3cKAemDHUagdQ",
  "key3": "4P1Lxz4iVnJ9wZj8ywgk9TYmXZm4Hd7kJxHV4UtKgxTR7oCD7KgectCR935jnNxmmxHjUjnQzwsnFYL3hiR7sWcQ",
  "key4": "5Rxc8WPXsxbDPFhaVrUiDGkt9cSy51RzR8YdMecCshmtKsS4Z6stdomK32rX6WWawiCfZ28bGe2dkM5ZtsGQRacu",
  "key5": "2o2vi442tQNWefLUuzvtW2d4nvxoC8Y1ibJqtyskCZMVgf3Z3pQmcr1T9ofs8GEpro7rBoJLni9iCUWgSwbVbwui",
  "key6": "2aSx5b3bpbGwLLE4eo4v79pdTtyryxyfYEXYffipmjVvKhuPwFSm2HrK6ifjUbseDT9xivYfGCs2tZtENYTyYLuA",
  "key7": "42XEgpri1vChdWyt63oqnjctprRSZ2js2oAYMeayN5mJK8u79YZeCh8doW3i9zPVzsEiWqLBBbvAaK42B4wKDgvJ",
  "key8": "3Ddb9Q5dYQaayF5NYEf8omBr7uAJ7RsxDKBXKrFwLE31xwaEofXUg5vh1fdrLyemvLhAkXR1D6oKb79vwRMPjEZm",
  "key9": "211tu3da4FN761CpAK7JMCaPRi7tkjj1811QydWrmePX8nwhSrexXVXSmAnh8oVMHgkYWcGVy5Cocb81ieTufk5x",
  "key10": "5YkUb12Xrwk9pKQpDq6dRyENUSu4fjnVkBUFdVapceTp1aU6jkPdeGXX1UwkvZcbv658bknXRS4fE6L4r5xrER4B",
  "key11": "4uaE6G7y6W5qyqGP7WkgaAfjsC8gbq6ZwmekUwWhGLwgqBthxyfFxKwzX6GxGPCZ5XuEHgvT3LdHuFqRyzokQzkt",
  "key12": "5ZzE96q9KynbFnsxxM9awv9ZteW4AzhjmXJiZEsfaU7J6hQsaSm4CnE6w9DsCQhEakGQfX1djGPpDrUwQvBLWbW",
  "key13": "3jpRzuhnquCGoz5ZgiDcvYVM65BWnadbULgZq232PoMD351i2CsqZ4tn3AJm8pE5AgQKDed4SUPDtCHr9pNMuLfA",
  "key14": "2mZSXRNkXYPNGUW3WKdbMftdLQMNhemi6MdBKJXxjvzkcoiL4RdL9kGTeFQGhNtWTdhM1xWxAyEEKhscH892ta2V",
  "key15": "2aEG75rwDN9LqSPjuKt2aYoiSUxSL8YMEFZ5zg2MofBs5tKfW1TsSKs7MhsPyraRtCsdb5tADwV7KYqtQ3ubYDs4",
  "key16": "2xZUw97MTZTjDWePyizxSstazyNqTtgDbCmeK9nVz6NPsLWZN8R5EjCSU6cptuSPgQ24xpy5zHzzqd2DEDg2hYiv",
  "key17": "5weEEvxvgHqUQ7J9BgvPHCbVY4Sj2FGvn76YDQerVU21YPknAoFzcBnBes43oCiunNigVbPMj8R8oA9ZKigEC4Gd",
  "key18": "QwvX1LL5MTTocdF8unmiXWTPp3jFXBX6NemboHgw6o73B3qe1txL25PnrnvyH1czFsp6SqLhTaNkGwwyBf1nVFA",
  "key19": "4rADVPgq6C9CJyyf2gyto6es3vcagfyFovoMMCQdmLoW4zECSV32BBQM7gwwUuZeLKxZ2nrFNiEg9fJ5CfAXfBbB",
  "key20": "54xTMsU3UVrDWTzUep9VSRfcWsGinsj1KYX1468P5okVAEX1CfoUjrEY6Kj65HrX7aqyR1v1kAzn66chuZTh9ZRU",
  "key21": "4FB69yWvhZaYuEVo9ZTobGki6wNZsuVyt7WUB4nSUieoDqAaYfCWQZ3M2SL9VBUBHGfLjC3Pm5bWVjVpe9jhJrfZ",
  "key22": "3vp1xKP6awqxhEJ9g2WKHBNxxBt54o2LuYE4JhkGifKTxfKeL8NBhjXof4YfpcKq3bRiGEKv4MjFRUQCqL4GJPwA",
  "key23": "5BqUsTv9UPmzxsQcHYoD7rtN81U65d6iXWFkwA6dKgTaQFBMeYbSfuoAvUHNca6sfDm4yte4QMY1tjUDyhKfkmED",
  "key24": "5Pvbe1xM3cqrQkeiGzEburFRrEzLQR6HLoxLCM5CF2CJyJqYtAbFSuQagdYRsCfTRAe4R1B7Q5KqfAGsWS3wYzZj",
  "key25": "4TAR7ecrAK2ioEdm3FPcqXYGHmPiBWPAF5FZNaV2uXfxsCQqKGed2pE6X79W3VWkZuWyBeNm8EwohTBzqfyT4b4K",
  "key26": "UQ75B5NqjfazyNP7eUrRLZWxcJhkrvTXeyPzazPZnE29qDFMzJYet5c7d2TJY3fGdWVu3bTn3UoHe6S62Paqvz6",
  "key27": "2iD8McXtdnhopMwu8Cm1N9cPciYRfzsKCM5tbxfnJxBF2B433DudReiBk9KQXWPGL9oQyVi1xu7CTjv7aF8KNkfL",
  "key28": "3kUrr4HJuLuxSk4gCc9VaEQQxn5HM5k1ufG12F6DSQ993pz1AzX6iaZsHVmH3UwA9wMm9eLbDMGTbrJoRFvV2wRu",
  "key29": "QSEmi5eXASeciYkd3RPFE7nGuQXEmj6NejTUe98BoKPJN38rt7YWduL3rR2HhjKfqFUseW36Ka6W1qfG6jfCaqg",
  "key30": "31W8pYd8zdGbsJ9JAgkHELUiQwmbiLGXE1166wvfXonj6SCMbWjefPPBmRMLNA5dRbTuXm7bFfmNu4BGECUzvamM",
  "key31": "5bZM9A44eKkfztSr7mTASJVzC8veVZNXcs1yVLyDD9ThLMX4DEE2GRVRPKZZFF1nXDhhmwVEVFMiLKCFYU7PqVDL",
  "key32": "2nfFgnEHkpkJKtqZPiAcJvRVQvudG9w5EYnBzEUvhw3uL2ghimn15yzugTZQremjj3Q73awY7XLcbMfkB6QfFhUe",
  "key33": "FpTYbToNuXWzGazNtSDX1jkXksRJhdtFjN5BEmNrvjNyxsh4acNHF6CCkbhtNBATBHMwU5YcC7QWZvbFesqj1Fj",
  "key34": "xcZuUGKdQM8PcpNuZ6m4vBmjmEiADo4vAAaLLwTW5FJ1KtJNc1g4q9sGdB498FGuze9oW1aeSeZnSjJm2mK2RVB",
  "key35": "5VD9ZDa1geaH4ebPNskyR7yXUn4FTHAUbyq63yNjyMEa7u7cJj4NDDgVNpuMx1XnJQu7DA9QaLdWMLxeM9W1jCEE",
  "key36": "3UXn6QapA6DB91354zCqpoDnpiKieyFbqayCaogC1sht54S33nh73jQApBXScsQPDxVAudEMZuMQSpBA63PvVgjs"
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
