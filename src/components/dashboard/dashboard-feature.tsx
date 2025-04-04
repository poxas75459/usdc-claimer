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
    "3ou7cWE61CrYRZqnfhwwRpwm8knFacsasYKRBw5tqCosR5ah8UScEGNzXDr6PTYe9WGP5ZHZ7H14nYo5pdW71V1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nUcuToX4nwAgWBH19dugLSrojiABU4oeLnvbeK6tV3QnYnVBhPbxcrq13a9aM16es37fsem7PsfRG1vyiKsDSjv",
  "key1": "4LGrTnNLP1rJfkkNCRc7CGePhyQA6S3AjrCCG1dNiPsUCBnLDmbmPF4jPZy26PfXof2YEJpYiAgzdahu79kHaz2m",
  "key2": "cTxXty8Pw2V7GrQVE2ruNsDmeexZTUV3Wmt2xe6iNWfJVZGCrA911jtM6RiQjKB64yLfEr8BPqef6RZ5F7CAhrN",
  "key3": "4qVogdrUj3cajpHYFUFG3jQqqhyBkhXCAh2zhtTL4oVQ1oZVD4w9uaLZU3ZJ5fqNd7bffhxhzuwAAXxVCup7KAEU",
  "key4": "4BTBU8efx2X7SDrkEZWv1cZuxWVoHuf3NcRxB1VfCHVhTVY8b9v6bnhwL5gHQNKNPmEFLWczUZq3caiHvCntGhN7",
  "key5": "4LLmHv1Smcw81m3KJNeMx532eBFMcZKyLkqUfsVFi6zPyuPQ4ZCn4Cd19SZ6phPNeJHa72ngd3oyNNrHaUAPXRHr",
  "key6": "4jeg4ooCvLEawZWWCg3EgZLvU7fUPkHJQJZKqLA53orP8pVEPwzMcVaLM8g1fQrdqYDFFUPJ9sFsaeYt74KZZizm",
  "key7": "29zmobHDdF4yA48NhT7QfurcS9L7met1tJq5hUw6LuJ3h3CZAhr8S23VjfiPvqCo8jZXsLuw9Mx79jJxQRCQkYBm",
  "key8": "3TBtg4tTkbSoQTXX9n5qUbdRyxM93MTmRpkE6uBbDaPgfrab3PW489WQLHNWSdX1yHGkRRTFd7m4B6BQwvqP1uFF",
  "key9": "3GfzVZ8mExLUv9iQnsgTP7NZ78C1WSgJqSoN7h7AjU2tgjDNaJ684YR7qwLdqd9hgvo5ogPvVYB5LxPuJVSkPEij",
  "key10": "iXDQhXUWbyypPBTaixiLNhYgZ5YPrQJPuLV8xjh35BSobLJexFuNcnEhHXpFSYYyjNZkaAqre6FKtZmrdpsni8B",
  "key11": "2pLKToeFnkoTj8MikPzKgDhT1msJgXgDMbRtfXtB2ZRJiXrQFc8E6mT3Tfqv6xJH6ATbnyyvacRrjgvW1Qfb3izM",
  "key12": "28EjzphYUcc5k5svaf6fXP3QkQBUZ6ZeHrJB4YkWzPh1n1UBoU2T4iWoMdg9uz7ekXB9eGT2tZzZTfwTSHi8w48A",
  "key13": "6qgAo2PsinZQ71XrgpXiMxA7UMkrAGFbpvJHuTN1Lo4qCm2sDbH3WzwKxXGd65Dmf73nmDiY6JXJVAAxDqquXyB",
  "key14": "4QoagXutPR8KGmpVcBeLAiJLPhxavHacS6DvPXZCQrfTHbtsWBACgjjhM2gSibGrHp23ZmMnp4svfWjtjxNAPxeD",
  "key15": "3c6UcDS5TnqYdxRgKM6QNhc55cPA4Z5NhLf9Ai8cepoXQo925qnwr4B74vWpHccZw2ZUy9d8k5utx7ZZSygjqTcS",
  "key16": "2HEXdBSzThRwEnUwRtemsgqNS3yZa6LTZfPauV8mHej4c1UrjWmcoiHg3ta5aUaT8X54mHsjjsg7wJWt14a6sw24",
  "key17": "4tsZepecBkwJNqGwT2GVt1bDVkDrhKXqdSvYUH4YhBH8ZoLZPqbttE3g2UbfwTzPXgycSgB3SfQya9iwKVxoxjok",
  "key18": "5GbAxWRUu78ijAXLawjjKhvMhw6WLAeDBVZGc5rTdkzh8CBH32VWdTriCb4Hx4RcQtCsjvbpmu5RpqBcbRqRBTJc",
  "key19": "4xP4kuUtgdZtzmBKjTRRynebnYi63YjHqBM7pDezxLS2RhvM7zqGETK9QDVURXZ6Dga8YuEEjkxTKRx1VXhWuUTu",
  "key20": "4B4KPyo6vk3Stvsqz5uzXL18KSHR7UuVLegsM8AGXBdgJVZxdzpspsuSoS2UYk1tbp5mLXBreiQfVHDV5Exa7ip6",
  "key21": "4bs88wsHCthieZWz6P3ee3E4vnzgcmfok8Wz3GtLkw3NbLaw3eexU5CfmneTma7AGJahL1vVmp2WsuexZm1eKpBN",
  "key22": "2zRoFYzk6kEmMEsWQYUpCGXMtG9z9SEpPcLVC5PGnUMTQMTHGyeUtKrJXBeAZGuYPNTSzNQVNJ4CBBkjfLDbsmhr",
  "key23": "5xiVHAH7LEJuditoGHBHrv48pLuN5akDDB1TQNcz64QpCY6P2mbdhACSKDd9ogusPjfrfhyarDH76cWySbtEhg96",
  "key24": "3FEW7emkLouGDMgEzhUKpPYMygBs5ZALKu5rqgfx5Z8NMswEGxWF9X6ofvkNkRgXufuEVhREDXsPfuRkGyZdMs8k",
  "key25": "ZaH64wWUafv86yv3JboV5YoZG2knS7UkxU6V8FXS2iP3NzwXdYfrHatWhx1k9n63wdL4cCfQxTm9kPaVnnEr14y",
  "key26": "5QsF3qV6zRsyTgfrfaZMdFeLQ1frmADk71AN8Tw8TxZjisQxAY4kmfgcXNLPfz5NfRo1xJfEeQCVEbsiYrih2sU1",
  "key27": "4v4YzxDXotGQ4F2KBLKZsB7nAqRd2nNK63z8npw2WCFkEp7mxdFndLRBpBaP3XLpJbQ21dRy9Zv4D5tL8TZo2Gm6",
  "key28": "gC27dqS9BWFiJXj148YELSKQHVchjmcUnzEwwE2CYBgxJoHqATD8XSFEKFXSwkvWU96xw1stga2vN6v6HU9KeND",
  "key29": "2K6QQGYbFCdeBDTUfb2N4bmNDVFxKYruZmPgpHcs8npkkedK5UUazCAss7FGBre4RykpDr3bJhSKuRu8JuNx5mLe",
  "key30": "2fFjizohEkwg2sZu6LY8pdbQv2zY5qVDjPxorSGR4pmyZBgr2iRbj21v7Gg5uxnuDyqnwqG7zLFvsvqFgpHM1mw3",
  "key31": "5NMQPg8TUAa5Fgk6ySdNjiQQpkwHQ7f7KAWSPbZuhooJVzzpraszciWPm6QMoRKe8RmotPJndg3W4NVGmWNcG6xo",
  "key32": "4QgRuPmxHtT8HGGSgZtF177ekGoGYm3JBpdaxeiArv24xyxmTDV9eHdC2jL5t53aFpRc5ZGfK65rb3VpsdnmmMrR",
  "key33": "3igsneQ7etdzsovdeHpgY3VKMH4HKHnGNB9dbxiB4hF5EzohMeSkA2t6iQFwBmB6ncMQvaVqyUudxYmu6p5NsMJA",
  "key34": "2jRAHTX8XkSyTUN4DYjbuvydpPPfEJyyHPu1HTjjsjCEVEe6XFvWbkTdvtiJCg8MaNmocYaLyvQyMsPmGyAPUPXu",
  "key35": "3oQ8WvG8PjQmRvm42d8pqAnM65o2JcoTfrkv6VcpPdbpUPvMtDGiBw4t3q6RJpzMYaYFnK5JjidD2xhYDGsPjq9B",
  "key36": "48hu6M5yz2czZzeu4APm4pAkFCuffkXrU1MzB9X7CU9sTcTfRS4fiGw9oB1BcpeYcBpKMBhQT6QbA1xtKmT8iCad",
  "key37": "2q6ZEhHEGXRPb182vn2yr4cJE48FsWpMUHtETMyaYk2RGWrXjuPNnRoiNoi8D9n9EumqFHZ66Tb8HVXNChNLmDVs",
  "key38": "3nkCigfExaE4jep2C9zGhhBjbZ3mqSPriCjWUmsmyiRBYwhGf29QpZEom4w7Y7UmJXsu74KGUfujyb18JAtmp5R1",
  "key39": "3TLHcX5ufGH159kS2jF7N38CBVXmX5wNjYwGf1kf4TyCj4yzmKjb5xhP7CZgjD22M4bAkVVea5TNMq1sfUu6AgYL",
  "key40": "1G6APyn6CpDcRvdw32Cm8SNLfinnSQHDbZFrsFFSUnY32Fvjz91eYXbXGEKcUHa7BbHby4sW8hE8XqeyNhNw8xr",
  "key41": "ZeFzrxDi15nAwWJDinkMHiv57oNdSp9RjdobZaED6QT2fQxfjHUpkKdH2XUpZoayS3CzeiqgNxSz2eJzJjgJsjY",
  "key42": "4n3Nir86dEKNG19dq2r2QParMpSkUnf2z7VYcSFBJj2pFzsWxUPfBoDg6MyAYsYt9fydJt33hbsSEeGXFGzW2WxS",
  "key43": "2DnQqEPJrmwyrBfhmWqtYUMdBJYcamkgk9ab8SZnwVFhzjNDQYRpkpxx9X2YxQYgSxchHnFpjdLmBCyeqbZxhYnv",
  "key44": "2BsXPX84e6WjmZ3kFRrTH11UKXAuucWMkqaoykQ18GRAZoxuDnnLBCsX8MxT9Y5BqKeatnxoFES2vFMFsgLKYzvK",
  "key45": "2zsXFwEi2RHfE5EUVZrfkgymA1MXV7zB4L2cSU8qqgj3gT5VbPnXiUtDkL2zD1Khd2wcFFqbG8wJaFhvznFVDTrf",
  "key46": "57x5DF1QM6tHKVfMdjNow2DCwWtjqURnmsVsq68sWArBJ9gsq4uKsepYPYEuieLYSiKUmzz5YAKPQEM8z2arS2Za",
  "key47": "3rGMdGuc3RgKt4iRequ66GUeJHhebrLPgNr4FCFvyxWQS2QLNnvjiCCPNxMe72QiffaeCosLY743hEqLrscjDzpD",
  "key48": "64BgsVMj5Wy6gxKTHJVbyiXZqt8PZJCBXTiGjQqC1T5krq7gpMkTtdfYaeWcwzkzTXbrW9BsQob9N9zmzavBnvxF",
  "key49": "5uhaa5LyFrcoA3SrXXC9MdZVf7b8yM4zEeYN4sXoqNGGq4ehsF6XyZAYTJGjSNewp2dP3DT3y1cpGQ9oh3jjXmtG"
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
