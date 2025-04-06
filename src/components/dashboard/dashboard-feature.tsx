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
    "47cdJHjp4ctKbCZHviqnaPBeueaBKqHPKodf2c6ijgM3aZqg5PJkAXeV7uURi1uqabokbddkYZ36NwYuJuTV96Ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAqb8YzcJKDHxPfydsZ1pQ2DMgKY5ERHUeVmCm3NoWQJjHBjANuHAD2LMTXT8oSMKbrMSojU8q9Nzc2bMRDXkZo",
  "key1": "3J5fJ4AfwB38YkBMc2t87hKfsXetRfwhBgmX4pRFVEZvexBuoq448fwH4Z7TyqFA4bYkLctWVKpqNuPF1qPhYaWb",
  "key2": "66CFNiGCKL7NddqsKx8N7tWfpnVgVydYmfz9uLh3TwMp7VFQR964Pp2bCQ1xwHRSpX3A5aUcK5BxJwt5sZkXKgCc",
  "key3": "37jzB9EwTJtaeKMhecbNyXHLCEwHmyMRvvakaodwUfnKCydWgs6chjqaJpgDkUafMZ9gD6Q4x4pTxzsJ7xXbgffc",
  "key4": "5rchdse1KGLKpX7mk9X1UZGwmsGXjLNeu8iNUevb2qt7qitomyQG58AfmcsrQmf1DjmWMkRrS11jCgiAkJZ1HCs6",
  "key5": "2LsjbVyxZQYVLdGyrBBdPTvGC7bDw2jtyuv8WCsbRumGoxDPui6mkK54QuaAKCthrsm4DU16rsQy91UaZv5pBbTo",
  "key6": "486nTh82zYxHtJ9dQyxbndBNbZZAi7WrvtmGEiFuFTdEkKEqEKQBretNPUAgzJiWJfbDYzqKeESrAWN9WSSostxa",
  "key7": "3riXWqBbEB6r4eg4Lctk87ksiqoFif4jMD6EQXRd7DGEjiLWgJwn1x7w8NoB3dUURNKvqFT4ztm6re72ud2yiLrL",
  "key8": "4HGPev6LokvbjV441hrHvGe3NbcaBSurjhvMqkAXQfjdahRbAsDEMqoG51WCUFb4JTnMxabJMinEsEbtdfSgkSd1",
  "key9": "3WvPz7VwqtdYQQwsn2SN9ayVMqBMgBp6qmmiYUxAJ8bSvh9SZ2HVt6b9CSaZeoKAyfJ3cuwaighQQ1v6Ce1o1weg",
  "key10": "2bN3CLp6ezEQi3Gy7ZMDFnRijiL3rU6iuJzpqGqT25XLvXFgraxLu6wyxS5RVZ5v1Uh5ioobPqXWntcXVgPjUchk",
  "key11": "3SwaYUJUaYvW2vmV4ELbaj6shMmMAURvaj55kjFxM9wTYPi7k7z67g7WNosJwZ943uWfM5io7tXEPzcVqv8ceG2o",
  "key12": "3ZKD1QH9c3wjWECtf4eyh1jcjZTcPMCDv7eG64chRnqzv7TikmVZqMnH6FTxRJdgiHophpBXMJC25nAnSaoBjNGy",
  "key13": "2rRiwGbrvJ1PUodW2QBYUJcVr2eNX72ZLNwvctmFECiC1NUcrwqHmmDikbEWHY5gkChNFGMJMBy8Wqv1iiXcDWAk",
  "key14": "Kjk2WEim4UZtGqaBUUHJyAyuzkZtt8rjCGokZPM7cjVXFsGtx5EPqZxRByWKmdYJik4MWvMtkew3GofeMjenhWc",
  "key15": "5erLt3yoKzvTScdhf1Vh5xhAmMPXjBiioq1NVSCpePeHYqbWT9wQngYA98WpdSQvtHpQZ9w8nVvfYsfFvx4HeW4j",
  "key16": "4Bs4eykRAxk39mE5UgWjQTVXKsWiRF8HgUiEPEk8DDupqZggS4BYrZg7KgHWK8hiHyyjE7LHkZLX9V6nLbgUFTpe",
  "key17": "2Q6WjQtjPPa8rc2YAQdXLa8FgwFKGgKwAi5ExBAvCAStUkP1hgF9b1aBozPNKwyhy1cM7FQ4Pbes3UqZtTamJfhu",
  "key18": "64BzgYvAVNg5QGduGJeyLJagfuztRUHA97NL8ESj43qU2D5sNovxmUdjyZLJb7ks5i1FJzPSGg8d9SAV5MhPdt5C",
  "key19": "44J6wNoaC7SHLLZE1wWkxB4o6e9kmyeddZMbRAobixBehQwnYBRkk9sk13gppaaFF7YVBJc2snjw3Ee7Xm8R24LN",
  "key20": "3Ji4ytEfB8VzfaTRsWZmzEtKArrEvCEBPSVBvnDT9b1buKedG5QuwXEVbsmXrhn7xMpVtmU58JvS4iC48MfkKMn9",
  "key21": "4SECBHqYja93nZmjbrg2E9r4XQu7CuSL4ecodmiyZcbgYk7voxKEsQAht7BKfKGCVL9742zrFPbPMVuv3cjYtqde",
  "key22": "25DwAsQYiNoKfunQhUmnwverJ7U4i1gnSaibfjh6hNkapS4S3SehxotVr315iKJoy9V83fJTEvnrkHafr41jYmWR",
  "key23": "SptjvPc7CeMxaFLxUMvv3DYWR4neWBgp6zAo2p2y1njCHyDu3wGY2U7Pc7DzWm9UXYoLcAjnhXbV98W3tRTkLJn",
  "key24": "5CaERtQRW6m2grQvNnFGQ5ADDLatamjuumMqjksby15aqS5uXWG1MwbcQ5NGM4r4AsH56uZFtuoY93YxLaNWKsUs",
  "key25": "5vA166jmUogGyfggDLV7ZB6XAcHVwqd1JWwuehXyyNGUk3Prypnqgiom5NoGoF4Va6fCQT7cSC2BAYW4YnhQhC3V",
  "key26": "2omuuNAydcyUyyJMdWwy83XyQ97538sjM36GYPFcy3JtGMS8GXext5xEemwZCf4VNzyLXDyTH1aAmYQAGLjFwu95",
  "key27": "61cK7msmCJKnkDXP2SApE5R3VQqRG7e1H1a9v2aYQomQoGNEWdGbX4bLcb43J2yLuEmQkqLrJgHNexP2BPsZ3Fzh",
  "key28": "3rN2Xh8KU7Q2xwjGB2MTwj2j9RuYnQYdUQUujaQmXQeuaXsPiXx1o5uPKrRWfUXgDQEd5m3UupsZ7ckCpmpTA2Vm",
  "key29": "3vahHXEeUFHKELJuCdhvZk3ijHxKTrHJkqg2sDm46MppiULPRvgUG8T6kTSTQmTkoDZqrGCc9oboigx7Ypku5BJv",
  "key30": "4aU3yGndEHQjygb2aPasnNWaGTpptq2MDX1VjaaN3pEUpNaGq6QbsLC6ixa7iubyK1mQwZgRDCwngYdq8BVjAP8k",
  "key31": "V6np1s84A7kFMAJUuCu1nSBEDW3TbLcatvE1S6Nz1vwiJctfqFwCiZRnEsuwYJV3uxarnxb4h6wt1SD8UYViqUJ",
  "key32": "5bvsGTXPoZ2a4kkUsAe9RtnAp7Szjicd33yxJHda3nLDJUo6udZo1HN8RCV2vXJEkCYdr3hVAyoNwsJg41sGm4wV"
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
