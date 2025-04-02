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
    "5NEf8LhRyAJwynmeABgN8gew9CdCQ4hYtVig4AnizYUMDKfbz46xvhhFgEC4YvHqdQyoSe8nK6fqotfVRfqxhZce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f378kWmg9HLvhk4AhbP2GfnjwDb481iPYzAqJ9mvZ5Uu2nfocJvn2DhWtmd2udzDCyvQubXYBKX7MeoXg1fdtt2",
  "key1": "Rh5xT1q2KrFsJb5RGQMnMtSjPnnC4HUoYnRrJgDJB5MwhQnMeRymmZP1NZHXT2R8LRYvDUpQkefZnQui1EgEsty",
  "key2": "4D42FEuM3GKBneowbFR6Rn4Agx5SiZFfLEwGXa9SJau3NszbnsKecsk5qLo6BCb5UJNX1awFAL7D63B3BzhCdqjf",
  "key3": "58Y9HHaaRg2Uz1KLajJNaJFT7XQE5TQTB3zzgMGht6c4hTpQfKqbZaTXxvFpQJ1FCjy1aWtPgQSWWcKGbgQpJVSt",
  "key4": "2tuqaJzLxx9FVqTNPBwiXyKU6148oWhmWc83mmWczi6ooaskA2jnGzvNcBJHy19Trn3DFcEYVa4GUcGJHrpmnjwF",
  "key5": "2tnZiNyzWi4HxUsQ24VGErWidPv589H5Eu6MD5R6MzhS6NFzA3JwT3BAcN6jwzvJNTJM7R7JHXyAkHoWXTEA7TNF",
  "key6": "2rYaponfe1mFNgx8kouAZjDzSfeXzLovC8381s3CsaXsqFUnYmGniMwFDwVnLP7Lgd6emwqMezTLuGAndqf7Aaf8",
  "key7": "38uf1YWr1vGkCQZ7jRYmGua2gKxrKq8twjMUzGRm3vwnYnwai7q13myrWwXmQNvQ4zCvwJ5gqYAMvYSUDVhAFtfr",
  "key8": "3sj11jAepBQB8qyUUM5TG2qERH4hu8xMwo8vfxLczCadVVVKnUk9HyStuPcrVYSsJZW7KL1wYVtZDH5FNZFzZKNv",
  "key9": "34YunXQT57tfadVLyA1i2UfnG69sAkNDz76WZQTdELPzk4L1gb3bXMg8dd2uLpDXcMnwtih7fe4qjkabGMYgLMyJ",
  "key10": "wkEMjfFGTZsk1fhbB7xzYRobZAr4vq8JJnb833r9qBtDKtuQHVhiNx22LwZVWcygHMcPubfMegeuBNqYsKhuqWC",
  "key11": "2NF1BaUYWz6UjV9GPgGmbRyFfxx9x8VVZKxaDty1WcXoU22o3Gy6akVXG4erWBSWYNKwB3J9UrQS33aAQTPRuPCE",
  "key12": "56M6SUknxyekC53fbuUv59vgAW167mVB2thgF2MHfQfpBJmU1oeQ1JaqCUeBbeJwUXf1nKLZ6Rg4RWUon2Gc4r8o",
  "key13": "Hu1UvG9d3jGejT1cqP8J1SmB51VQzNcKdUQe1E1zUCvyGLRreAGYkgB5Wpc25PzdH6F2CcLFk1P6cBPZ9F26TYh",
  "key14": "j2tamhnyBPwPUvH8pyYVTa5A8WM7178pUGyuc3PgSnmaxQvH5Nn2RwMqZ98PKW9DmGmxkSroTjVqfPiBaGoK3DX",
  "key15": "43RQwZA5oPsZ2P8bUkKLJwCLrAw3EzWG9S9aLQ2K3NF3vfo6rNzjC34u5DxJJYY9xDGbQ9MgajJYespXM9d5Cyr",
  "key16": "5hW9q5frfJuSNmRZk2Jqfvj7ad9T1wZJH8FSjSi64X9KftJ2Si53jHUnS9Be1U9HncRvG6o4sdrmGgae2ZHE1yyu",
  "key17": "3sQisYfL9uvoH5pH3ArXZri7pxuvgHgpBTgVTgQbwHctUbM6U2NeBew2LiJqME8EKiV26Nh12YZpk2HdMNZqWB35",
  "key18": "44V8h3X1VhCJTCPXJkj4ti9bxKbDTDUK6DzRPgu3ypCzPDeKmMyU8kVdz1itQVo4WeDHYZhHGLeMVnxYK73cYHSH",
  "key19": "cYLAceVSN2nvt6DTSdc2Vj9wPmo7et1cTTNtAqmARq3evkYzZsF4ojKYS26ZviYn5dVF4Rxub9prVhne8rCKioz",
  "key20": "52eB69y6XDGmneyBSMzzCpTJ1WbkLcsbZ4M6DNwEXpj4xzcSLaBcgHgC3xD6KMnWsV1x6zAZcsR2Qb79XqogGLVJ",
  "key21": "4HjecDGfEnjBrvwNBPJtV1eXdh2912GEzSsmNrUryx1tanQDfLtdFQ6sT9TGWAvjYCzeEbYjPnHXQK54zm1qvPaQ",
  "key22": "5hQPYWksvCebBE48SLmc3M2byeVqJUERUFzqkCrEzM4DZwcq2J5h5Vt4dkC8akHiWgjUoRbNGwSD74axiF6bsv7k",
  "key23": "CA12CoQwJGpN1EZtVvYJRU7jXHaHvF4uRSLmgSkbQheoNXdVKRtMzsarejUBeSN4BvJE7Fwm4aboKwofBS6N588",
  "key24": "5rqrX65jXpHmDEXq3rTxFDoCSZBuUNvEsziGDpa53yuvQxyubXRWAhQgFtzWSGnprTb6JzAURM4Qsv8vwHrVUvGW",
  "key25": "4syXVvKfrqQDnDATJLTUYP8KiqzXnUB4bDN6rdVo8AC3JoMVv9AojpZ8SVeDYKGKSSRsVGnwifnMQQdFRa1a9Jnq",
  "key26": "3vwbmAusQ8tAHW53MifxSbRX3y4poXfwoKRuBibPhUVBBVYsuuHxQ6Xn45hD35xLe8r6n8Wbw5xvwgCAW6so9ESd",
  "key27": "3uZBAaPNqN219Vr8tEmFngiHNrjWi2sDuE53sdkbzTg11s8kMathhJUQbUaVVNxxoh8FBvPCvbCTKvMCAs2RoN8a",
  "key28": "3gwL2V3SB4TT7TDP1AKLXPaXey8ufXyYdw8SGdCqZV1a25zAhCb5aZNsKJceVDBTNp2yiMcF1Gr2uD4dehzT6LKy",
  "key29": "5EuPkZ8HA3oG8JF9ZX3w4k99DAZ3BnsoHWKb7T2axtFj2xrm6Abb3vFDzH4vdQPvu5H9zaJUuxLdxpRf9Er6pGnC",
  "key30": "2qFTrQ2ihqQgTQVfo9Ci6tU4Z9itoJFTPm7pbUwGsp21DpidPYpz1T4fNbptRyPYisXpHowGKWtwPVrFnPgsA7cF",
  "key31": "yftmCRACJCSLiDoYei1bNJS46MCxyGRQPHYzd1uGamLWa4uvYZsQcWYTCAdbXaBYsEvpBEfNeZa5hsDRzFAPhB8",
  "key32": "5aBvmpY8YeZKurZFnKdZuhag1cHQRCQqy4WZ9ffD4FcH5mM1bB5fQ4SNYu6rnqVoF2qHQ3E4R8Kh2Xfj5Hep8BKX",
  "key33": "2SwKn2uoGyGd3LEgcQ7qG4icMjuKhVUketjXcZQS3hshGFnsqN2UUJErtefQ9annzUFLDbPeCGDiWcC8a3Zr2WCB"
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
