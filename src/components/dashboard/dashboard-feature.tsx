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
    "3LsVcetf54oJLfwi2L3uUPCvGhnbsCPXScxXNGdLX2SRRMjuggcDoMg27bC2CzpmKWyrn3Baj1LwA13N4tcY6oiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEF3y5WgVmh9HMjqzXJrdnRQ7x2sidxWpRVLJ61xxdsUn4gQtQwQo6MExKF3PdArDx37fWq9bfQa8PEitomo7c9",
  "key1": "5yh6En1DwYEEyz9DpQMLP72BqaasYzD9FprdkFyKvVXLFG7xxvVsko5KYrEstZeUoMhZdAkDimNazaW6zN2i1uqd",
  "key2": "4ot87DD6RLSQiHqzDcH6gsodmj1v44ehfFxkKTmcG8rJq9aDvkuwZSxHXM7q6ZjjwgJzZ2U2LBpHcLKqYUUzKkFJ",
  "key3": "ENaDCWNbg4p5FgRXFzBgebvfmQkBma2yDkWpaLu2vSTTPJ6AJWSgJXwSomnMFWvccaxZJHcwkJxPquyEhb9bVqF",
  "key4": "2DRb3P2Ug7yaary3DehYpDLxyD7xtzXCRsHtbMcyn2XVr8QZpCfhvAyuxybJuToo1b4Wm6Ena9zjoz89LfCtiR1n",
  "key5": "26Ewp18inDPWw2wydnByAM4erVQ6nwA4MqFFa3WEUokFNvUSfnK78iCEcSTv7XMJFkwktnv2YdMbcjmj4yqZe2TP",
  "key6": "2bTJwtKNFjdzuiHETuvvnKLmqS37CLKDhVKUeZLVGvJDrfLYxySsYv23cZY6Stvw7157GjfNuXHnXPJzaCQSn2pF",
  "key7": "3TU7me7LLacmV27Fxpk9Bei6rzf8fCxTTLEjZt2L6gfYFDfZuf677G99ovY2H67a5rM2ENRXfXURx7TZruvWSG5V",
  "key8": "5T91yRmqGpRyV19LUY7z2Fxigr9VKXXjNtxSJF3x5nJve8xQWQyaxt8VxTAhmnCnpGcosJ9dtRKdjmNrggoBQPyN",
  "key9": "59aXb6CiLkLRuUgzDbPUvYmjZ1fQ9XCVJJJhvT9DfAV2ajMRNSpAASfwBecekZ3pPdhFBueHt4XkPDkFYunvjfuX",
  "key10": "3QYnJjTMDm4yuSsQKv7cDzk4SfdUvBJ791gJyJfdhzyL8zASTHbRoheNNXUGvfKNsEhX2uS6NChoDeyEg4jEmCvA",
  "key11": "3SLVGA1vG49D9N1JqJcHuJTVZrCD61N3rf7RnmD5uAjpPoX5TH74td6MJDuEpPC643jt1h5LQuNwYEwc5tEtS4iT",
  "key12": "552ohvV3ztyq22WxwXJhV72btBKgsZSCMXQAXGiQKnRDJUfWC4Dw6ru8cYDxpuVyzijnJcYGnKRv9kZtV4Usd6RK",
  "key13": "5MgqXWvrgg4UEvd5hkyYyon27fGQNGX62zJEfutqS2syygrfusYpB8wARLJSAGbgmmmBkzokHKvJGdUcTFMx4Awp",
  "key14": "3YKiovzjfT541AYV4Nambmzzg5EqrA7fywuHjX3PUJ6q3QKuW9yW9U2vz4FBm9EEhmmzYDgxNuR4udFgKPDiYihC",
  "key15": "2r2einYSCMRp2qZStbGeDA26cbAGbusgCkrfoCWno3A1ruBsEpShqhNcUf5LTkcmarWRZVmwHzUop7NqTjfZxEdH",
  "key16": "46uwNA8MN69qwqsBUSbTRRABKdnkNAKCnEPP2begbEHNCZ71D26bdwXsv35gTEujN6vse4PZcb53gWA4e5xQnVXa",
  "key17": "3koiUDp3jso5BULv4pVyMXAWXKN5h51JZ99dy3XeJx5L6Zhm2xocZp4Uu4nrZHFiyNkYwXRBFsAKSMcqeKbDQ4eq",
  "key18": "28qyS8JpoJAojjCKt8e5xsGfm4BxyoBbq3nXYKuu4GZ3DctW4wHLph9XvpqGcwdCwJ7yHpnNdkZZAhz4g5CaYdfh",
  "key19": "4QSTzE8ie3b7KM3AgJ8MFqRkyrxzYnhnxjg4zFeTn8mtHTdaxQkdi6e75xbAwUr9L3A2Jk3K7EcFunXynGyRfPU5",
  "key20": "2vBjYw98WnDXcDSqwA3Jo7djK2u4Tgb1Hh3BXTZuTS8j2jJ8CJ8DJUqkkgMvpm4BzsTCyCf6UTooUNFBbNKP7Yia",
  "key21": "5qvdjRTER9QgA9fiobWwJT4JJo9WHBwizirKhRdEuV6pnNFehRQnLWnKNRvgcfGpngMuVifuGyJaVP1zSVMnndvC",
  "key22": "P75EHQZ9hfhSCLxtH8Wgr6CK69cTASA1X3j1GsZKGitP9hVokvu6WvtaWKXQCxYvapzWGSe5oGrLnPkwn4LkvL2",
  "key23": "4mQcSHiQjP3AAMhgwRJ4N8Jue8qWUfHka8NuJJPy5hiEGSkRutrHxx8LVzFQb3xzjQN3pW3yaDJ7kpzRgd5tEiHq",
  "key24": "5C6J18v8jzWgDaTP8ekfmqcjZ2ty4G1B7NDiU6RdodX2Wk3KpMtGsNQAd57ZscsdAozdH7RAjbkcsDoriaCJYEap",
  "key25": "34EFcu1XXtRfM7AdSerSDfkqszpjBh8K1ABwcL379fjZ3hs6tGusJPK7vsxMxfZMyGy7sBFeDzjonEA21F5qAF2U",
  "key26": "4qLTDyVSopp4hM3cZQc6MUX5g4ozgFSjKxRRbnPo44rBk7Eu7cgtPgQNYK15S156crJcNmq5UigSPGVUjzyJAJro",
  "key27": "21txxHJvDrVuWkfeEELs5wNVUMuoSerDNM9ab6UdcRCVSzggWsTah7Zd1dG735YpisuApDmoDenkz9RfdPEsP2cJ",
  "key28": "3o4XvnaHCk3pPqAX6SS1JJe9Bx9P8WHJVnyHcNLqCp3aVXQgzZzMDvHgU41ne3xBRC4sZmN8Uvmf5Hs2XUoid2qc",
  "key29": "2eWLqAyxWNDJm6jsZ6fmAujJ5yRow3A7CQnCG5Pxbjei5cqgk4kWsSvNpGhg2QuWctfooo59FM3eNErZzyuWU1m9",
  "key30": "5xfUHhBRx8YxaWjLcm3CixLXofvKcenPp597XqXitL97jNx7mmQ1Y4ibHVRUhpgq9riXnwqFe2UFAGn5x5zayfmW",
  "key31": "2NYJzZufVKJZBNJiB6cxjA1LaNBeUNc8F4mhvQSWxJS9SXCn5WY6QkavcGWvbozEj5uHnnM7PZ8v483kw9jZsz3r",
  "key32": "4bsGuemtMQhYg5B8PgopCv4Vru31qy1H75hUbwgJ2dy8TydvEnZ5JZb7ux4z5DUfck3dH1FFykuMfeJuJW49ZXZk",
  "key33": "5sjzDWYc6uFCu71nXZ4EUJCZTcGStcBmBcdhpt5KBe9HnjS7YGj8sighG8NASrpPAtwwSL6UXh1uJXjwk9keQwXc",
  "key34": "3MFRE7VdkkryZpUXXhWbkpGkEk7kMPGi8cuoSgvxRXc9oXM26AfPQfmg95kc5Mv3DaLJfifMJvZ3jxot3NtXpmxG",
  "key35": "2jgczD8zYDWnmfwKJQDLn3S4GD5f5EG5DDFUY57dt85gdsACez6kdfhZi8rc55j7oeoXkMD2RCMAPMkG1DnnANmW",
  "key36": "2s77GFHBKVLWMNDFvnPqzp7uaiMcWEofkS8jwGrYfuBBNwwyDuA914HCGHvuavDqR1mp6JTinwX1xqf7jZq2Ppjj",
  "key37": "4Qhio3oUTcr8F45zz5kFMCAJudruP3SFemNHhpCG6eHdEdWCUffvxhSZCXbSQHExzTEQp8L5pgLDfn3XpPGAEvu6",
  "key38": "3RYNyHnnfCGbYiiy47UESUdpmdAvE7XiUB6C9Rw353R2MoPY4A88CCvX7kaSLHDbA9TC6ZhKewBp91dqioBbqdSR",
  "key39": "p8xxsUkShyYmq4Tw2kgt1nQ9bJ9hdKxDhC9ZyvsAprNh4WYap4PHGytYaESpwpdrKtXJPrc1JE3UKKQUgZq3rnz",
  "key40": "4CWdXxPiqHJmmK9tQAgR6bTGkW6RcgqxGAcuphufWxxxdZzztgiEk8zqpcRPfiLzKwWjea3oXpt2dp2aW6MYCFyz",
  "key41": "229rTkQJyu4pUM12DQnPrbHFYh56L2vZuZ4LEzkbUZdrcgupSKoCB7UJekZDgL21wtDy7E92K6G86aYRvs1d3AQH",
  "key42": "g78UNosh8gLxZpdmnNbjXoEfmZbMW4evBvJSSA2RoKvVVFodJWmpfkDy1T68QGwz86Mfe35wYgbZQ92Jt1k7KQg",
  "key43": "4xqSPBMXnWaZJrLSbFrJSvRiCxaTDxAayYPBRkGnusEpQNPx54PYXrTbFagQt9MAeHaYP9YUZg5VEXRA6ifFf7EP",
  "key44": "3b4xTYMvbZMusSJbBmfqTnf6v9dXb9ujTH9fZcXkAr4ergs7TUt4Qo4g7kApRevu1XxzJWDLJS67tk23EHqkBzWd"
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
