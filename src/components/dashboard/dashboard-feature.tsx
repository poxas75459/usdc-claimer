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
    "Sem9mG4VWQKR45hYrb8Rxe1JP6cBTBbJV2ET3RLLnyh7C6fSHBHmqyDiUuih2jgnm5dzMrsmiLpx21sgPCV1qon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YugHjnPVA2vdMm7wYdM1iCJTRgkXX4AQG3Bg239S83cEiAoC6BjGhTheCzTgiL53cdU9xNp4115FrtNZf1jCH1U",
  "key1": "41vtzoKLxjYEz8MfXp4se7ieL5eMzNUPLU9H3ts6MNSosA3acm9hUqGAkQYMmgV4doiJLa4cZPapkmDT1jPjgcWi",
  "key2": "3gqexC2uEjyXbYEiwUXp6z7uBE989dECT3uuwkyWPjjnM1XyZ8WWe9HVWHAR6VsNn6jq4ZV82rj2HyQ1SxJgUMM3",
  "key3": "4NLtcmo1rbkueHujJJetf4AkxvXcwb5FEH77BMLRhPNv9cyCreMA1sSyoxaDxeiQvBKNh2w7KAYVVboyWYPP8jr1",
  "key4": "4LW2Kcs1D2jwtcVLf6U1eJKao4R38UPdvmCgyhMTzPwRgZAack2vTY1mDEjTX6XtE5zvzVqwLe7deAjA6tMYXUHs",
  "key5": "jv7YX9dRLkBvGKVQ7z9MAa8J6cPYCgCcSfRW6X9tFeP973kZNkyaPLdZcx7A2Y6b2ausH3vwy6vFRyhUiEGnYnU",
  "key6": "2Mj5YsPrSiJHCuCDEZihs8D6T7URdE1mGRSgoft3D4vhD5MnQkiRoXJFu7pHB76tUwHoUoRjz3t3a8eSZQjnUNw",
  "key7": "3MRzC16YxjRFgeVp4MwCBUNYu63BqPEEQmefJ5JTbwrU2LymVAEawnXKFBnfGsQQBFZj87dx8zMkNsZymmBbXmZd",
  "key8": "2euPyC35nDbeYecbi6UgFMRwEDuJJq6WiUcS19DRZpEChHAmeYds6rFDwrtZLarCvLUznCpZA4nowp127kh9U6XG",
  "key9": "4ZRcTicy7Xo32DMwKNNSxmqiXy6M7nbyANjSubTDFgUJvGQEK5wqmeFheH9oiYx3sqouF5zza1RLGUGLg5Et4NN6",
  "key10": "2kbe5hxvsHnMAPkdL1DHu1r5sW7a9VaYhACL5P24zSAp2jgMQV8w4MpXtrwjnwHwxceCnBEW5xH6cAyjzPwmx37M",
  "key11": "5EmkuN2h3ff8G4JcKfwyJMmDDTprjMPSfxd7U81tTMVT1eRLGwQkT1qE7CwTedoAG7dinhmgQFEmxnngaaFPwLSh",
  "key12": "462wd1yXX4P5TjoSadh1bW3a8nYJWrnp4yBLXm4WgC6VuPJFcDXwbURYGUfgaW3nbaSuPz8gj4FUa1qq29uRnNiV",
  "key13": "4Kz9dYDnoEXh5bAMqDvw8XRJERqiBLqeJXgeqGUjyuXM3YZYQi5nKPFQK8PxZitgb4RYoF5jjZUAwQE8FCtbxCB7",
  "key14": "gRaYRnVd6ne1bP3nVEXnaNekAkVNyQvckABVv5ur4NqJqhK7Wk5GndQFbGp3GieC7bB3xVqDf5V3SzvH4sEcExt",
  "key15": "2uEgkqM9CwvC7xrfmCxqvsKCi7tkvJepKx6sJRidjgRjBvxGmg2ovDdXYJxHQwNRDp2WszrRwVQjqZ3xoE9F1Dfc",
  "key16": "2RxrEYGdrGGECJHN9KexfFP4uZbsDVzGhJEvr5277iBdvpNedEgWQQm6qKAtk9fLi8Tr7vyFeE8yACjEWHpiogRm",
  "key17": "sSkCBhSPW21ffqFU7KMfhcgying18PS5kmf1a9MRe3Q6z2DGipcfi7XfoX9CzWA4ZeW1Yyyz7RMYCmJoYk3MGng",
  "key18": "5zPr8B3AagLVt5a29EC1EUhDNCa9hDTJgD157DEmDznH53pxvMdVMG6gacDZmAeZkicMpsSNmaYkKP7NmTD1NfJ2",
  "key19": "2G5t5D45GGUpPXA7NYuqR98AZKLSi7ZjDXYnUzpZ9NJeRmjYGa7obAbs3Xc95s2ZPmiBabdLewkiewzmrd1U6cY5",
  "key20": "4vmJEWTCjVAwESaXNd5mbz1wWpCQgHpcLy2ZFpCLNxxkWpDYTJfo43kaHEeW5uHjqfopDNcKFxYR9kPe9rgmkkav",
  "key21": "3P4ueFoB7hwbzvZ5qy7Z7tKQ2vcNSU8kxAnqdA1ceXieymJSp8uViYbdw4qwL8UckJkztt7JuR6FipyA8Jy5kDpr",
  "key22": "Z34Lt6ho1yh5MYnir1RgjL55aAg9moov8YmtapT7pPAHYejreTc6cLxjUSTpfY2Lp2dhLFk3oiAaF1hCcsmShsM",
  "key23": "5JU7YG5n8LoxBJ5QkdhwkFUveJUt4iss2JyhymJYjA8Ad5N6o5CZdoZif6qRuZtwzmEw4uXbPtQZTGKKxCUtAsQT",
  "key24": "4BWXC4FzzzkPzyvdrB1iQ6GxQrARRtdtqSAS9qFJ5KAuhid8kGxfUrjxeVJvDo43DBuPHwFw6cswofH63JFASz48",
  "key25": "2vHyNSWA1tqNY8uLFMZHyrBisxZNWX3hFJSGwtVn1ixPni81LKCojVSLfd6L3tjSaJHsP91p4WRVHeYskYwKWbnB",
  "key26": "tXyppTzBbubLgedQFMVS2qJTDBUQzrMgHDuMmkzq6dwVPrS7DgHJ79KmL1ghqVwVydgGGJ6B3nqANVM7YaRMLiL",
  "key27": "n3rCUbe8at5KkfZbvAfrGzGVaRBTVwhVNoiHoxZ3YPB8uGseiXfo9K94mfa7Zm4wFxQpnfG9UuCXoac49tLU3km",
  "key28": "4qaxxMTfPGcEjXKAq34BaTtSA3tvayabv8v58pzDifWfsnUeu8JuWtosLsk5uRmsNeZeDLts973StTxDm89cmfWt",
  "key29": "4CbLDsbHyehvGp1bkfz9Zrruor2QPcwhLaaC7jKA9kGvMsB6mBrmcLGGcTUx5YstECqZPua7zaLgZdrPjMQVAafc",
  "key30": "2cbnzQBhjnafHgyhkP4XEtZahdS41yQGus7kS2vN6h9hjqYrT1cNVo5cdcShJzXr4wWgQ7MZ9L3nA1CmS9xcJ94y",
  "key31": "5gUGP11F2V4nopJh7DAEYwnNFX4mmvNt7hBfbX1fthGtXdkk4vS9WQGLyo5LcRAYkdinSHku588YvdJQq6aaE6Fn",
  "key32": "4RRjFmA1ovZEML7jCVPj3SF1Gdex6GcwD8ZrAB74JQoSawkw9AypBpPByUt44BC36i1MLTEyKbTsaXV8aFh5FND5",
  "key33": "3tDUvANDpSAqmP73FsS75v7zNc7NTTPYMafYt5h47b9NQRUbnoWSHvthbcPZrMvoHUYyL731tYFis7fSwnxog7cs",
  "key34": "3y9nfkcueMioMmcgSbwNqdKQcTA2tuPmgUp9Aac2Ub2bSeRPChsvxwgJXygFynVpy7QSyfwjDgMoPS87Gi1atUj1",
  "key35": "4MvC3iFbrHizw51p1nT5HaoXhpsPx5agTcYozG6rgWGDQtf2DNUYNvHok1je4YNyBz1PF5Xtsgtfs9n9gG7Mi7kd",
  "key36": "VAixbf1eZohJp62kU6PPH7DPUDAcPAdmQTTuo7N6TRunDeFLthgAWL1cXnLmFc13UdqHeq655bBLynYJeMF9DRy",
  "key37": "88etjyaXRNi77b7JByehst5dhm3DkLZfjbt4qKW1QNjcXQBjzJQvjY5fkcVuWn3K12YZ67YQ17Cbqh99BrCfnvM"
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
