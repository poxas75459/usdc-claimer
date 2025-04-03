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
    "2gL17ay2tbkea79GxHDx5ZxcXTuJFhQ6LdqQ7rKXUDYvfV47sbqyMy56TmQj7k1o4eAmSceRoaV74nh2LFFH4EgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f1TxF2XjPHQntTjhoU5N46EWv3wSE1Vi3NKbzSbTUbfEdF4ynKPspnJFKen5NurFy6xPRktbWVL3tXY7grhc6LX",
  "key1": "2uj1c3uHEgfXh39bmnz99tVgydPgRhvwTEJZq5VEc5xFGbnKYsXCjX3k9h9jJu9qmUCP4C7qJBQiKQ8VGYuPX83B",
  "key2": "3crH7VD9yXaENYAJB2a7WEHdAHHdE6sMp1CnRUUyfzVHiEULUvYcAxbcgSSYVMNkfdRoeK6QzeF6J5nMQBbD9A7D",
  "key3": "2YJWeaWnBKNryPazyYEF4WQ59vnpqQaadx3KU2Xw9Rpyzq6EbKv3NhytktWqcE9CEh7769pfrZHaZQqrrGx6jPpD",
  "key4": "5r8EpkUhrhnWArhmarcEKw2ihKm99vyfpyps5hjgHvG7ZSook6jciXE1395gdna1W6nThAiDhq9nuqDZiJwXu6nR",
  "key5": "2jwAjFUGvVaEPiTNtXnHXBDbkHLSWSnmw4BxnwPyDi4CFG1PmxQXn6tjN4c8h1TVro9jDB9uodG7qKwsehj85WD9",
  "key6": "2h5DzvAQgAZUYpDHVXWnN4fLq3H7atfJmjYjz8dN9E2YajxvGVjGZ2dJ1fj6eQR8QuTjbH3iWuRdHVARaadR4wwm",
  "key7": "4Dj7bfgc2aDcX7mKQMvkBow6MrDN2ZBFnbeHbruaWd7LDv6Pv7X9B17eZfgBpFPFoZ4GP1W5cEm3MHzc397x39Sa",
  "key8": "S78Roz1mGkVizHX2UHm6NWZTs22detFfaaM6rYH67NKpziP9ye3c6VyHZhkJEBnDVCMes6p898C4Qzx83JuFyoa",
  "key9": "5uNL25tBHsfvLYBzrKkKnucTjKoGxiTxpJLvbE65DEu7deTi8uD5fJ7MpKTU5QgBB5FjrmDHD8p6exVLmH59sXPm",
  "key10": "34CC4RfWrwtzbvcXCXgLfmBrzf2J1X4hZMPg8rkyjGfFsJSVRE67hMapT4itVneBiwGLECcq3LTnzZo9ELYa9nqN",
  "key11": "4TS4T6XMefaoTzvDX2EMhKhu2QAp2athHZbkmcUTURV2Ah6wNFRmwL1MwRZMkYQAnxZLHCZWQWSVWiLf9866MU9a",
  "key12": "VX6qL1vtReBLkc5SU95Kcw8D9e8omMcK1AqYco2E4QMyjB25pJc6i5fLiwyLExMRPYWEdWEpPfEq2ubcaJ43m2E",
  "key13": "2ST5qai6EycyCPfSiforWfsndb47ZmSHa4E7gKKfPkipJhTDRtDhw5VQofzJT99dKuDQcmf2pNigNMa4Pf5vddZX",
  "key14": "4ABcguReAxdWaoe7NttswVKBCjiYDstBoK7uDCuh2kDodYynvAwdBxfnyadywFyaerooaDoLbGysHtsQtTFrHxV4",
  "key15": "3yuaCvWFHpoPpHUh5YHSfua3uaXq4t9NykeUBQAjVmwQcN7HQTXdG6hHiu7YAUpjdTr4iAEUqyWv3YsrnCtj3txp",
  "key16": "4Rsnd8EF8umAXEfj7yVUVwxCyGaV87yaeytbXEhTK7vXLKXTqdmSfReSdcZinqevmxyudfmkBU4VdL9ZMNrWrktq",
  "key17": "3Bn7jLiYtoXFJAWVWYmtKNntxWqqBTY7DE8Ac3xcgsSE8LVp6DqKEz5XgDBzhL3EZuPdyZBTP3JnNXRzjcm3NJSM",
  "key18": "2imqPqHrLSoqyPRGxWZXt1GxWDjakAfbRfs1FqU5fGqp53oPDxpcd7Zh93BLZZNSH7NhCWujvhhewAABR5E9ahPW",
  "key19": "3RmQHnGC8VJv2GRbvT5veTiCoLMjGnLUa6kDTFubaT72CsgzcTZ5jZtU5RRSWDDFgJ1mUWMGPAbD7oivaqbVVb82",
  "key20": "2DdWwxhj7bdDwXd1kDjjE91h5XqmRYficVEmJs7ay5Y4JsaTaNkHoGWNVff2AGGHALNUNSSkSsSaF8dMdr6ZASo3",
  "key21": "4Do6MJRexSjxE8PY8hX8dPywS6Lr1xJRMtAXaiFume2eXoCfZdWf46S9HygD26tTY1Jr91k3vojZJr5xhFKFfm7D",
  "key22": "L7e4qAVjg6Q12SuyYyyW73iHmEqbXYPFeHbgAVknpErtjfX2DbjCJgvNH58eJtmuntX8BoaKEa3jxESgYXwDDtT",
  "key23": "3r4uJNJYvKnWjur7dAM6V4pG9JDYeyHgjKvLjxJyUKUonpLVTA2HMBZfSiWByhYYmUbGHiYpPkAcKYeJkQKMMKFL",
  "key24": "35XagG7ZhmfheAPSzDKFpM5tNLA9ibHMTyDjErEhkXph8mEKu6DE8u16dNGtQaHftQ4vtFquWmRgxEZxgd2WJoD2",
  "key25": "4ofWZW1QktQ9zoxXUd8DbGWX7RtsvGPcZmY5ame3juPBiAaSbxXVJnj7FnsnyNsaNtAB2eaWxE7D8YHc6wePpYPf",
  "key26": "4QhBwKd6g2yb8DuapP1UQiuAm6yPKL2QqMJxHmi9u3vJ6HwNFVLjdTPo7nrmPEYgT1DoXvLpP35bbm3ttcBYe12o",
  "key27": "2f8G1JbtYwWn72g2oYzofucFbW5XZf6hDr7bdczVNzH4FZB8CCvimHHxWrdTcDmxwtUNotzCRD1cKByfaa46ym3z",
  "key28": "2CwjDVnBvk8zqv3Z4N4cC6uuyE3HLk6X9PiFVprKtwwYz94gWoHD3TnUtC7pMiNqj2upGXL5rA3WJNfruCk2jv6P",
  "key29": "4L18VwefGhT9f1fY7JvAPN7Vt8uoZ7xeubFNobKvwQBLiZx9Do69yjuyRfG9eoEjgpvPHfX2Z4hsioYGYamUqzeB",
  "key30": "4o7sihdc6uEAcgqpFHKRn3DW74sgcaCKDh32cbUVKVckQD1kvK2gqHKrCTs43SKLGCfqx4piwp6L5TrX2ty25Y6v",
  "key31": "2unrYbcXTppvgGDYBatsXsjynZiUjAmbdwrCeq8txaQomfTaBrhhgpQpMdAqwZ6MyZwPUZPSJ7VDKb25cyi5XHLC",
  "key32": "5Fxp5EFK97QfrJG9UjHHo65yArjBaeAcakPcFtT8uSEPNtaEnqpZNwWhic11i5vJ3VvaREXxJWmcxex74Yx7QuVf",
  "key33": "5xBpufVBtDuDkkw56iTAz2nL6YNPvfdDxufVfz3EnTetS4vmWzAonZAq1kXMnu5Q68sa9JueL8f6uAkCgAU83RS6",
  "key34": "41GgmDYgXAM2d5csAED3qFRr3FxXrK4fKuac4BrZsjyndXT1PiS64v9uM7S1kZsKU1TP2B3Dv4JZVcevHchkm9ro",
  "key35": "5dLsc3HENJ8xQE7h2aGz8nWJzCZvNT73S96AE3mdvb9DMJ3qXLDsrNJ4yY7DohATNTEvz4qdbGUUkqa5yA36BSQi",
  "key36": "53BNrKp6iggdUWDBteK5WxxXLmJ7sLcd8LqpLwUp3dJC7YzFLbbsnQgWZFcQV1xkkJALAXMpkPLusmfK3eQi5mhg",
  "key37": "4WUQDTS5PiQsfZq7Lzxuhn8NNhJyWHaGe5G2NopirKMaJhaXV3tn3yoYGehR9gXdxYaCgFUcNWNM6HhPfbYn6jgU",
  "key38": "6dqVPSNqkz2DyA4pVUpLSA3vNjasKvVZqcgpS4YbYgvKFKsfN2eWnyBSnFWvL9nxWHz2N4fVqxtwNvdPTsNWjnR"
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
