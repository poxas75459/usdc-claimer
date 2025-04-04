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
    "RXiNLEECSj6wXJfccFurGPhviP3R4FaZn5vEjSGBYdeMr6TA5v8TtaQY2q83VDe5mdrjcRkjuDi1kzMGwgxdnpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YYb73xDeZdPtDaSvyxG2xgzfoxmzK3qUACZ8e2JWTUt93Ax825Hb9ZX7ACDBQVUVthMkniU4T3o17icGQv3ereR",
  "key1": "25tXZcyrYFWKHRbtotgHCZiN3zkH82dqnTEp28Lio3BKLZsk1wZSpkZGynAvtaYG7qhFvFtTX5dw9vbwLAv1gp9e",
  "key2": "6qb7iiJaEgzbGdadfWWLUazvtbYexmVasSKHmDEWwJyASsw7DJtpV4DbD9pssuPVDeH3RoSf6JuSiv7LX6cxPU7",
  "key3": "53kfrjjhn4MZoxNZkeGNUWjEm6hWeE116RMQx9myR1vfYKQyaPxP9kQwMAP4DvsmQEySp5x1qZ6rF81AyS1bJnq6",
  "key4": "5jWVnp5toaKLDZt5q83E7SJJU4spYXbSmVZKbdvxdosDmgSBRH9HXsQEPPT9tkspXKk3sT4mFjEkTcMiXBvh117r",
  "key5": "3sm6VBXoRjffWyDHCPcKQXa5M6Kj9tD7712XD9z7zV61HVFPHPPN9fXWffTUEkiDBWqNWwaSxpcmEX6NP4UqEVgZ",
  "key6": "5E9jkBYKkGuw9ofamBDGKYUayPPwXM3Nwhc7jGB5sYTgdZ8EjxyTjTsYtFyYkYePvGPWzrugcjWTy4MuBN2zJhtL",
  "key7": "3rT3GPHZymkoAfBydMzmUDnAqzr5vqJETtQFS3YjvQ98R5r9P8ojArj7emidqizCNYHg28yr2PYF3bcatLE8KqKV",
  "key8": "E89UoUcSv9nM3mjtG8k69U412iMFdnM1AjCeJa1CBP3xbSAZQvsNct9tMLrrZRbLBaCJSRabE7WUJSFGHw3BqET",
  "key9": "5WwnKUpemrNYzubuiUMVckh9E3iSSEvzQciqUFMtkuzhEyb2aadXiLJauuWYf4W4yx2hA5qxV5StdZrFaTA2QVqE",
  "key10": "2BfQXfFmiEL1UBR4LpDJwx1dSyf6dKK1DisStHjRQn9tQbjcD9sJ5oPdmm5M6YY6tdBipeKTt4LEkgFzbcwxkScs",
  "key11": "2JLEVqNgXGKHPXX8pRUdkTUdhypi2jyPGCxF6Bp1U6xeFXMLBr6ei7ZmVHJfWKg5S7G29w2ntwhW8yTypeVkDcE9",
  "key12": "35qNeLic7eVe4uTZJNEH1QbWPomEkj6Xn3PpfMK8YqMhxbsEqiHwzLFxZtZT3TuEqZPtYU7LycfYEeyfHkTsyUzw",
  "key13": "5T5y2nVhq7WBqSgjRKLnMhjs8uREyt5R31NCD2XioKcjqVmP28d3efN6wU3pteEJGcU2BLM6T2xFkSsiy9AHAoVt",
  "key14": "5Qtcyfuh7R49Nei7HitCHaLMVuZQnQZcHdh2EsUxxqtcVzM9y4HhZHsDPYfuAHpzzxXB5GjyPWQwn86Kan6vPzgE",
  "key15": "vXF2zPG2fsNPhecnANFcsx9wwFkNzu5BhUwsqoUhkPqsjHNGkPHggLUMtbZ4EeGoNKXSp3Tq6fEQWg9HWcrkU8b",
  "key16": "Q9Yqn1EuHX9iQNRuyUYaQ3iLmZgJmAZZ1mhV5ZyUA4XgtYX985Qmwjk9Q2TXnToWf8RXQTiqerRDLmp1ewAinxh",
  "key17": "xJewWrRyZTGD8LSRHqS4vJqLPEMY9tEvZS6AB91bRGHrRXMFqn1Z5wnnSprS1UPAc8hdPxBYGd4XjZZWZew49Ba",
  "key18": "2bnHSTqqqAaPSbC3aLasNYR4w8fA15Fk3E9zkf5WsEV4dJkTxrFovpLFDJfdxtseZZM3ECSQtdoaoNmHBrAt8mWM",
  "key19": "2AKY9Th3LNS3vj7t7DfwhHiFEFfSyF436ypsQxXHRJiLCWuAYFUhhwK9hypvnQkRJVCexoTVQYS2iiNK4aEeNYZc",
  "key20": "2oGS5vyYRhW1xddC6RLuSV1UiuV5HrynGvBmSApvPzzZt6tBjj3UgueeaFiBrBeExy4sJ8ZyXUcM1X6fGjRbM3ma",
  "key21": "4XzYf4eUwgsNty4gSCdYB1vXjV7gjJmtXTzuMK6AA9EYqUD7dTr28NvnuZAisrYFrw61dFAXEMTR35ZJHRt8huGB",
  "key22": "5hRxaxkR4PoNp74n6srMsCchHAxcsxbLQd63rpnaaKsz99caQS212UysnQjRaTt8rNHfst67ALPbeuqE5mJrapkx",
  "key23": "3DBrAnM58qfoEDGsQLwYCdEweAM2Jc7uv9GNuC3FPqb3PNMg6FhSm2jKgffADrADab1BzJL6eCnMcHYDYUsWDW7d",
  "key24": "6LJvmhiBokK4ADF7f16NkmbdKa7gVu9zvYFg2ZW2ng8XE9crsTm83NRriQkU5UPyo8AqTsxe1HHezRi8dqHoLVY",
  "key25": "5UHo664mjTzYvECC2duBy7Ui7q8b1o3nNkA3WhzaqN9wdaS2BUngH36oNe2NyK38bD5JwJdbssts2HjKo9Heqy13",
  "key26": "3SX7PZZPcscwXHKeHatjVjLt9JeFiQhqSvGMAaZHy3obb3kZwZjrXGFV29WXS5pYWpSA5PWDZ4PYxJpjqMbJC7N3",
  "key27": "5EMdL3QU7xXCov9R51Bzwg9BsP2r6cQPvoZa1HyAopBuKsy5wcsFFqfUqgNnS9c9esZHAEGCqaMkYWRjY71suYwZ",
  "key28": "2t9pXHm8vxdmeAmUERGDRoQBJ9AKYRg3EigcbR8qgaz9WHpdVJaUHPYty4coqfY8gxRJUCsvnE1539bzck9DJkPr",
  "key29": "3Mz9JKeRhh2S51aBr5EukpC1GZKgqpTXNMyakYyihzhNnJegrkZkd6NSfcN5GYAWUtVM3ry7rkeYSEB1CxRDYTPL",
  "key30": "7i2TZGzWhBFSNvrdYADrVceFTUg1J6oi1vRBAmYwr1CLdqpnWwwoJF3eL3oAeZeLvhQMx3owiuT6KjuDLo4sodL",
  "key31": "rrNFMVU6qAvu57Qcavs21cwp76E5nBUwooy1V4DxkhxjcuRKc3nUvVYsED662Nh25cYatkEthHknhYDW3Qv71EC",
  "key32": "4c3XnekFC4adZYK2x1qU1ig6hVipg9bshvqAUocoWKiGP8ZWf564UZEiGiQKjiqmbGaY4HmPWBieXwZZb1JeMMsq",
  "key33": "LZHGBCzZ47GAkzgswbkNX4ua1KHLZS4QrvjKMLrJDvD25MBpeZhAYyVQJSC41bLqKKgqp7LwheEtQ5mtCC1dytA",
  "key34": "5VwxqvCqRs3LTR9mKsnoxPXNAUBYchLdS3y4DgJPDgX3Vn927EEhPaJ2gkcKf68jgufbDQr31v98Ub8MDnSaGCtV",
  "key35": "2EjkgnLvWLCF24iUmhy53c5QrETC46V8wzRrLtDbMDfAQgpjrUqvRVqQuaSV7DoKntEzj9K956tDHDa1hkLRtBge",
  "key36": "5meERiEhQnQAMcteS2YCZaxRNYT75xLUbuopwHokeH6WeUyWW1uaUGai26uaXowaGDJJNuWKahpwJfaNzGGshC5z",
  "key37": "YYkTa6WZf5RDYsfnRxjqGwGXar5metEecTB2iKe6wCLGN5F3iDjjsTfE9rcQ1gqto1a66LJayNVvWHvWsHz3KNo",
  "key38": "UsVETtSb2MUwbpsaG1U7n32dnbjVRVMwC5c9ZXwvWJyguw9YhzKaeVhN2sJLLJbXn7AivjpKAVoYT8rD4FFoVSm",
  "key39": "3vAFcfdBDCYP43bFm3bggMRC7tfcVcV3x1JKqFSA2UNj4rU41mZXggobsgW3VNQDWLHkmctLeDqDhdaZvUtj4vjh",
  "key40": "2ZZFDWRVESMegEqZ4tL2mrb9mLRVUtxS3xxHAxBqg9GF2mam4iT2oFZ5274YTBPEvfRxMzYuK792kgBUECjPNHDa",
  "key41": "2VP9Dh6qAyBJMSjAWKN7RQjrRFJARbxKsHLigALcFFF3v4Mi1QnXZQS3UTaKaByFMxYbveNcFugsNL4cmc1drtaJ",
  "key42": "5yWEhsFjYSAEqGFmhhc6xkimgLLVmYc9kPamJWTUbsXzEvQHnsUfTpCZ3KCW1fMTFZsvwcXv6DXsa3FZyqasWXH4",
  "key43": "3ARnCB2kNKTSBRDi4MVZFbTvy6yzEHZtoRxSWvHU7AvNay12NJmfGi6Dn8ejgdKDH9CgZLs5vY88q18hjg2pKCaq",
  "key44": "HQshLfiqMRxT3UMXSAh8WjstV2uwaVSM3L6raBHurLBuwXk6FNQ2vwYYSA1m2WW1Hs1f5XQDte8MfcRqGy8uCst",
  "key45": "2QJkLpTNkAmqMeQ7NqQoRuXDZ86GFWqGxi3FbSJGdyshgN5AdKNYPdZsHH7aNtxM6qjfGvzniqUsGRD335rGNUPe",
  "key46": "2fKanfigCmKfpUFhdsNTyXw6eUGuWMkU9aiXDktVpU4PXpAMKskVs7bZVKMfw1GsyxjMTtNxgb2eP2M5dRt1uChQ"
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
