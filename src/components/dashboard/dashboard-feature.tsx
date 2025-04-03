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
    "3aTws6RsfBCkGtZEcrAY4BLRzGD29LxwVfbhSb5adWcAh9di5HnUi3wa1WyWX464ykJTb94Gs3ebLFYrgaLXBVGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28GrDQkbzFUoXMfKRgtwmixPw2kQV5i2m93BZupFXx1jbZ3Q7c62osEYvv96GGANtNS2Gt4p9fLu9VGqtUZQg4hp",
  "key1": "5pBphZLJVuGxSzbjbZJAHD7saT3dT6RW8uWJDVwbkzrWGZqwUM3GotMVDEZYEJB6RTSgjwgfWxUQHTWQi5HQQ1du",
  "key2": "4CX8s9rPeNEjdqvfT863W9QGzAYLCosvHXsBkVpmqkTuxqEMfBKneA6CUaZWjnxmUJNEeae8gJu17KeuKxw3XPKu",
  "key3": "5bKKkcRtFuUy3HszWUBnQYYS8bh55XiDX9ctDP6Uau1bagxTRNTDG4sSXKswFVT7X1ZXxotyYKAJ2Vcg2DJLLGhe",
  "key4": "64mxA3qHefZnPAYLFNigFidfnY8qkUxjqx3qwo743wgQuL55eg8yk5aLZXPDNxqvEL442Cbrjr2ZMYPENuZCUps9",
  "key5": "4dMAKpWtoaV58eHYJvW54SKFJSztNNpMTeY18DA2absNfWtSHvdDSCEDyoATHuX5FBtaSGgBz2yqTaaNxeNhLVng",
  "key6": "2x8wqRpahEc3fQKmkTdHQXuG8wHUL9azZrWNYMUwKcm2x4P9CaxVDCAx2raYR153E4mNBPg95Nyr1fbmCJ5BGUr2",
  "key7": "5BgzrrZ9TJzvVzpH4x7y9EZm3Tjapwe9jRTpdngBX6VAkt8b5fvwq1ELEBT2woMT7fu26qFzU1AAyj9iiPxXCEVy",
  "key8": "nPVcD6cYVTbDMC6FZU8J4pQzzm8QeUQVZ7gLXq9LrMbTq4aRjm6SeCUzCGkeRKA2v51KjdZNVk1Xz8kUgmgY4Ac",
  "key9": "28rUuepexsRZcVHuz83gJNKuMupW7gbcrMnk6CCANAAMT2B4huTFmB4AzvLxcqaEoFRmNbsjpeg6xKLNgKijYa3W",
  "key10": "hPf9hmRTKGcxske4J438pzKmZhhhWEiCHSwS1u3wiZ4N8GskPiuT94jSCt3m7zKokrhoNzTU2ueEGbKtCJrts73",
  "key11": "4dtFKabEMM3PpGGx4wv7cJLjwZG3uX2U7RU8WioUSzX3qYFdTHPTgnoctk6ZUpPA4VH5PrFtMuHEfS1egLhRw5cX",
  "key12": "5DtidXU5dzmJBENSqycK3fwiV8G9y9d1yGfLgHmiQuRB2kA62nMJsN2x4cmJ7H3H9YmHwVPX6DCbTijSsvH19MXt",
  "key13": "3XB1E7tm69TGoC4RA9dTbTiS7UhCSCSaw1BFSK61SUaxWsbtcLYShScuWqmGV3KDq536HsxkjhtKTJwan1LZPZF6",
  "key14": "4bj1w9u2KA8J5hAeMyNqv6zHGUtX6Lu6CiYPuc39ZkRRXHGNGooPnxiETcfEivZApTCg6x6ttXJJELMbRtukkVKc",
  "key15": "K8GR6bZQGweBgdzc6DJWoHriNjGUnMTcHgC5wXPv2jbRVTwUTJvQGu8bFbtPuFHeg6MjsCBJArQGU2Ga3QkVDjX",
  "key16": "3CHCQFk7T15JuBTcnwKf6touP57HNgSCCcyS234K2NkAzyKzYYxoBcoFHa5eGRciyDFATrZrHR5S9N826UbEs9Qh",
  "key17": "3CMsRGPvyy6HsB2oKyw57z8eGtxAHkcD2o21uxSL24MNMxYhSjvTNkzNeFu8SPM2iijNEHaCuJQLgNHwqKxGCRuP",
  "key18": "5HXDDVwwZzyFUfGUYFYPqSJgmbVzkRiiwsTjWoFx4zFcZJrK7wv4V8Co2oTpRVzaiZgNR7YVgsY3fQJ7hWqDFxCZ",
  "key19": "v9fF6JMkDTfi8C3BCh2CyxCqx9d5jxo6fKn4Zdfw9Dd2m4nmYQ1UCxiy7YD1h8KVczRyREkeu33EfbHZseRyUHt",
  "key20": "4uL1DireazzYRwbohpoir5SNTqqfX8Ye1Qt5TG1F9QvpBd75Px2hnQTRW75rcbxYp9LVKaxbYr4jtkiqy5g1wLyY",
  "key21": "5CFcU33gRKrNExb6id42JjMGgRLRUtGjEQ7sr63jkbKLwTQvbS7CEkbtfytNhGW4kwv55uSEphYfvy5WxLvkvqaf",
  "key22": "4g2vqZkUhS6bSvTdKe1gzxizTuMEEii68xAbU9ywV4vG4ortJ6MHG3y4iSA9Nd3ytAEZ77cr5W1ABfXsVHdhaLSe",
  "key23": "fx2hpb85ZjJ6GJZMipRPSTxkbeAqyjd7YDaFFAqv3s5jNb85soxZp5nwS3wDPzDGp2294saBUQN6kXr8xBz7Mcf",
  "key24": "2FB5RfYQd7LTwAvnC4HzsCe7KPH7cDjqMKgsfnJDfpYJDW4RbYGZ5Ktyo3HXwNM5FzMrdRksEsjzTahGiwPryPAw",
  "key25": "1biKbtn5Ffc5Kp2hYMWpUmtmjbHoRsip8guge8iWCAxVMtsUCFXTj12Cz8Ht3iYE9uvDsdZ4qA8sm4oofw4gpYw",
  "key26": "3vf2XaZSU5aqZPPNKAACjoiCpVsEXTquYmPmWQxgm66moqRcY4W9MJvwjSy2DCnmBMgkUBj1Mr7jMohpAZZ1b2tD",
  "key27": "629HN4qLQGycvrNkFhC2PCXFLXBHSLZHGBWT6BGbKdMcLGNeT9DvTJtae5Z3oLZyBLDooDKSiwfigkEhEDaRcnZp",
  "key28": "2kcWBgp3q2hkeso2zAuxPM2RZZfipt4P5xLgacoxEYfjHx5DHDqfTM3ijC3n6HLdi6CFeK4s49aS6JD7hny1Nz4p"
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
