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
    "3X1xk8kE8R84HbkiYXE8bJiKGBcz6mG4SmUTumXzhxq6crY5XjLejxjiWpfbdE13PEEhZyFgktjKj3Gzmbbe1F7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DPSUvt2e3dtQVescEtCB9Ht8PY9izWgGBJuyoKiaXwJncHXongB7K1jvicBt5Qy4aPTp15CifCFsH1tf2MBBDaJ",
  "key1": "26rHqmg94cqcipt1vysrq8vzR3vaojcoifzmiFcHpdabrnQftZLgDuEa4puUX86FUy5L7MMu8SPEeLLzQT9ansiC",
  "key2": "4RtZLoiVvLCp33JT5uxQovVxSeSzbbcFbAH1KKc5RFs6G62Rqtvj85ge66y9a2ZRgngvuPGCTktxrSknnBmtX4zk",
  "key3": "3wznobJeHeHCNBAsjT3jEa23PiX82EWAguprDZMW7KFmC7TSiDZ65SEQyyiG4Ak7ZXfzm61tpQFhburxJ5HnpfV9",
  "key4": "2VdDz8ifbf3TNYHPVNLucdXspD5kZvYSZ17eT6wDGXL4rzUwPWmguefpVHHk4uPbE8n1QodhNz7kL1bYnqxBiu4b",
  "key5": "2AdwjcqivzgCQnBkMjjHZqnuc1CF2EFjP71FPCzNZrkduEnr5tZtuqvbDBpjehFhet2US8joBY8zgS2Jiymgdn2M",
  "key6": "2Nr6pp5SmPZz2yVQm75LVhyWA2tw538qUmFFWVE7ffFYuPjQ3UDYr4ZcucfFaf71sQTGiBTG5Ps5X3tHeB3N5jne",
  "key7": "5NtgVA4yMajyG8VZat1SzPsusuHBDwT4usqpjjvJMnrbWeHaPDYCkuWohCPKyE2XzmUSQYBdqEBGWNFCJEiq22j2",
  "key8": "32Z6QuzsBnGEzj9SNtwxjWhcD5KJXmxWDemQ6d2Nr9B1CZp29sQLnHdN2gymfnAfgJnFNyVJ2FveENopqox1q3Hs",
  "key9": "qQUE8yQFCV432wv7LQG3F6GFyGtJeX1g4LLSBfw468Q95HNUZLgarsRdC14mk12rJSPMWFePVbnctBM4oMc7rzE",
  "key10": "4QW8YSWcGjUdimC5fLqFTzJtiVr211ddC7YwUTbxRqhQFjzsxsAz8C6LFjZfEstQ59gD2YBqUPwEWqCxVVhJpXTj",
  "key11": "4ZkP5FWMAP6RbULZZfTjfbgGGZGbgRDEBVQBFQ7RHuhUo65Gp1NcfMjWFQ6bkmWbJaRcCP2w4Vo7mCxAMaTZKHqA",
  "key12": "3Q6qAbLCMqySPY93HEnBnwiTuUkzBKurjgojv4m92cfwoiorZGJAgHm1F6eiL67xci1PNGgptNhxYgvqwJR6WFaD",
  "key13": "2cihuxtVLnmQdUwLwfxKSfB8JY6yAF9JrhZZRGTSDkLYEtczeJebeC7VCrHU93G8Vr8ypYDzwDUmCZcuCfPRsL1J",
  "key14": "v9bgz9Emx7Wqv2T2h9sroVUBP65yyysE6su6KodNejkXSKpiw5gRWtpYTPcD7mEAwd6yDL5A3QubKzgbPvB4xw7",
  "key15": "3hRqWQL9jv2VCkZqYVJN8jMQSZAF666nX2oR7Lwb7VbkB4WCKmGAqLyb6Q3JLWUDwiqGVGUBqMCzFUE6aDUjJvjh",
  "key16": "3KU6gCC5CUKecPtKftFRqShaaT48ngrP2DdBmjz9jkephrW5HpQjqVEfymnR9gxtzjcmSqg2ykPYGMzjGNTi2WWS",
  "key17": "amawSo4WoB8QrgF7ySDXHo1BYAnzmjLHZ113PYGjDcsJj67WPFM2J6PY39HbKMhCpYAJ8ywzsmQiNXtZkDQp82h",
  "key18": "5u7GevhgzKdvGK1gFVCVMfVpQBE33b21rXSPmrJfJoXQdLG7XjMhe8khkpCVjLiiyRMeJZdkR89nA9ENyrhUEbXS",
  "key19": "3EJG6aNC83hc9tQh9LqmoFgfRk9pg1bcjQWKmNbKNKHMQvGz8yLvkMGAzGPV2kYMc1PnXVWC6UsX6xCiFBRttPmY",
  "key20": "37RK6ETQVXMk736igBieZPrWjeQ5HoN9uAtGiWDc7fwyxV98mnvFCfG9NhZ6XGoCpu9y3YDp3Nrp4bZDzmePYvx8",
  "key21": "5wZHt32t1PSXeLftC2HsXCEvqT9J4Wsxqs27vN2M53V3ni2pMwQQLhbbRo9AutzRPPYXFk4Q3BAjadAtYtmt7E83",
  "key22": "4G25TMHCoqoF4cfeVv63otGYYyhattDrqHYaPNNXbSegQ8AsZ5LdN4wBCyQnia3mTryxcofyzKtUvYd5n7UYPsZ2",
  "key23": "4aHUSx3ZffcA6ecugzNAg433J58n7RHC6V5JEZhmZykP5vT99MSpDmLKLLyZexomZkudxiiQ7Bge2hKJRXsyXJDC",
  "key24": "4SU7kF4FfzujNvYb4HoeqqUFFFa6gneVM8QsCHRbYjkQFMHEmDhhPiUA9pcSFUVEToBTYPHJ54bCDcCnb8tv8VXs",
  "key25": "xovdGYSWmcehkJGwhZMToXqoBVvhE8dN22rXZgBys8Av8ehD5tjhuavi4R7s6iEPmvcrMiS8gGmV6tPa55mHqU7",
  "key26": "4Vdw6z1EaKtZW2RXeJChykcjgb5Xnpuidp3Uzhtrhbbqo3szwvUHdRR5uRMfeB7z8DE8NWPc7riMtJ5pc86LYxTg",
  "key27": "47D42je4z92SxHqPZH5Ubg8YkhN136nKt9tNZgAfbHRhkNfQPSUtmSMTxES2uMWyKyJ4pvFPwLHM4HUhRfTfQMLJ",
  "key28": "5cm7hCGFiLidto2ESys3wPcNzJdGUZWQn1Y2fKKit4ZVD2gL9xZScxg4YuqaFNUzEaAYW5WBD5m6V3ftnFRMTDVT",
  "key29": "59WL2k9vtECNcDMWfsVvCdkrWec6S8Kre4A8MssVue6oqqYWJpE8mpoK7gJg1YTdhDytBNYzL2H78pqSZ4sApesV",
  "key30": "Vg6HCtiBRD7vG4mSzcEPdFJewBnCGin8ZTiBVmpcGbAWQ8GnveG86XhGRBPkS5QUG8PHUrAAnqycYH7E25TdpRu",
  "key31": "5QzsxSKtmYZGF5BGq8rZz87PkPjyUQBr1f2cMiE3tKCmV8aojWcCFvaqPzPHBaSddZHX9Vnk7F58aNEEwTMR8P4u",
  "key32": "4vqE72BRDXQubgLv1mXtpaTgftqRwBpKE8wiy7J5FBXAFWAFszVFU3raTnr87MRwWxTZhRF8JCkYb1AwkDrrfztz",
  "key33": "2eMDmaQWNZhckF9kM42wFAJtW9F2WYJ85YzJJyoz1TovWgeZeJHugmDWpFfb2bG8DYfpgKT1L5zStLvQmiq5oCFv",
  "key34": "42pcuGndrpDAY9vfbcGYWXLfFM1k7eEGqALk68KxmhMDXNyWDwffkbMi6B4nXAfViYJzrsfFEa6HHCZWb7KNF6Bh",
  "key35": "49upr2c7Gnnh1twbWZ3adDE8FdfwoxBkPF8QoxuJHW9sE6e7WUMCBM5Cwt6a6yzSVJJPmTLPwBuMTRT7Votr2tPP",
  "key36": "2S81VjuDtUgWHgUhhv2t8TGPLc2fAGd14M7QfjBErPwWMfCBRm8dg2pn6EfSXEd3y3VqVqy3eAXiWfqbnG7WFKPW",
  "key37": "2qNRwn8c3PY7yLufxh6ebi1Hmym6Z1FZb2ftSb2XSG1TgNBZjq2cWqNTsJNfHrkqhCNqRwD575X65QzLHMpenV6u",
  "key38": "47L6WosYtypJhAF8UtsCyZuk4eAXLWmhrqj1fTouE9c2DwkDppjgq7PYnHS1KDQ7MDhqmAxpSwiJPFDdRXwmXXKK",
  "key39": "2rqqvaeMfNaJJJNxKo91jeNtYieYNywWsfBmZcr5S2cse1C8Vo7aJ2GmHDL6f7omz6oehRF4p4ZguZ8bNHi4WHwG",
  "key40": "bTNwzi6wf23Q4wjwH5uxbMhzH36CFQGPoCMywn1VSkuSEXPqwwhcQ4FVPeVtyjEQRGZvT9kYtNwwpFDHqpmv7rD",
  "key41": "4QKpsnYRhbHeULgpuurFQnu3qAoXX4UETP3zhFHesJecY5oHpbW1vMErXkgwets1bmByaZi4DTFXknpLK6cR6t3v",
  "key42": "BB6yv4kp2EehS4KBvnwVwmL7i2Nveu3VGPXxpeermczyYmzHfWGjJmJwDMbWVsj5xA58ZghAjaowtXBsUeEs7nh",
  "key43": "561niBpFgmyZDzvQ6z7rqQYvULE81LjbAXeeHHV14GYMrHAXC5UNPNqxYLugbAd5VYkx5HG7XswCqQnzHre5x3Zs",
  "key44": "58Q7WdbrT6uFgbqCqhpkZfagQoQJ8i6UdhsxapqHLfvM53h5Nvku5VzZgi1HMSJMMo5wd4p6ZrcpE9nPXK7JuLwn",
  "key45": "2WGBRm2kNGFoebGqJuaKBwUrHLazwi2ecRb2nCM5GQ7S6D1qU5nZtShfNCoKTeV6zYLqRuacJ9CLs3vQbrh3dyEb"
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
