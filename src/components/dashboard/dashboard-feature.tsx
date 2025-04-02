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
    "3eCkCWFyhVodw2tfivTPvNiSp6AgU25PB8YmEmy1DQaqw5xrXfvFZmKyCAzQhGRGFXx5kMvfUqrPVfTWxb8T9rYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9fJA695xFv2nf2cqyqs6NUozW3ok1Cw5y5hnxTMQYnSU2YMRRyvJg8pJfceUSrmub3L6DLFL7zd51JXx8EnV5H",
  "key1": "55Qa692FE1v7SHZi1HAEv7QLK7Tweh3CPw7wLneWLKBmeWnJQWW5uCbYz28R26jnvp9HhmTcQPWbYSYgcZ8b3J7b",
  "key2": "65aQpg3TVdSX3riDG24wB8STYQso7vYod6Eis2VnVNbYZcHp1StvyndsYHj7QJcxbbv1Dbf59wEnxptLmUvVXTiW",
  "key3": "KU5CJmwWruNheYB54hfrveBbmTbeDaZBxzxbKMXimiodzHfe6G7LvsRmvAaZT6zAWhgAwWQRwTYzZyM61MaLpMu",
  "key4": "PoWv7U4F3esCJzsfUjJJ8QDvGv5KNWqeiMtHd4hZFDiNZPChq4ohE6LrEMaeSagKRQfKHSbF81swLvWUU7FhbqB",
  "key5": "46b1o6JoQgvuiTjpY1ArQjrB9Ejc9ahB3EbUpZHSrPEMqUBFE5PctbEBTVYztbTXTw5D4LneP6JXdmqeyXxanRC2",
  "key6": "5q8GQtCuSHaH8uWUPTrweiyad5yG6vcAvuMo8m8t2mkGxGSU8E5mNCFtNVACM1k1xAc4erjdRQywVTLgEqVR1LGx",
  "key7": "2rE14HgAXccETivSXhrnZ59CqzfRgy4rEK8HFg2BBHnKWYM5oEHUHS2GCcgVpJL35Q4kCm7tvU564nwG5stv4fXY",
  "key8": "37ZEr8kTgjcWkGrEd9zRbRGwenUbVrtg35sGxWvCHN9TeumeKwbsug4W9GSu1LeXnLqYxEH3vbHphkgJDXpzHEda",
  "key9": "4Vb3jn7y4iz6dy9nLx8ahJAh3r26UZzNfjRhTdEeiHx6thDydxbXxH8fg5zL2cYFYiV1tjtuE7ASo5YxgovHy3px",
  "key10": "3JikxgQaBBFHU6B5Vk5ow5D2XtrVcfeXbiumWGT5RzTspQc2NJ1AhfxXVKHgA9YXXwzZ2N3oZ3CNVnDD2Bh6jZYc",
  "key11": "5eVLPuaW3ZaHT2j1bYs7MFzKkT3Ty3VncJRoVLo2oVG4CXX2XEM6hcYCWSionKrPPia9xiNpfBC83F8gDCfhN1mq",
  "key12": "3k2x9E7cYcsEcXzfd5pAQ5pzrBX6Rs8aGTCMid1TWtfD2UQqyRYHKqGjcJd7SdAiZcU1S7ZkNdVd9gfvmwZdxzVd",
  "key13": "4o3pysSis5ZkPVuXDP4jysAVty3B1HQ58QuAwqTVNS47MauAAcefaWkocPjYDo41Ge2TmUeg8kfwH4RkhGdFbxWe",
  "key14": "63G6mVZU4ugmztiQCtvWeu3Pq2fpLjbVJNrcKpcD3HmFD5Jg3daTyCGy6FSvpdHAEV1gLgGT7CjEF85aMEKZP9Tw",
  "key15": "43nhLxN7Ny8amedjHB6FCX8VrHrcxPLH73qpM2WoJUPmsZdGj2eXt7zo8XRW9L7LwMdVwPKt3vNhDaYqwMCVgiJM",
  "key16": "GdbuwUdig5wmvqRZ5CTpQutMZBQK7ow4kULtb4RozwuYtX2JEx2SVRZGXqWoh2KoXj8kNm6LkdCAgZsKmA4DiZb",
  "key17": "4iSUKhPGwinsPo2g8ts7PwRJkGYM2bJLafLYKNTQMzT7jWmsKb5i6rUX163ecY5wyvTjbJLUZtoqkQ3Uaxh5sjxv",
  "key18": "3ybmmxUkQrV2tRrzKNjVpTPLf9oFh88363bqRUekoBhNt2vvxAX7XeQNFHokDs6AxQV1tLKvgEjvKpPi2ZbvRayd",
  "key19": "4Xu3xNAJiyghz12WU6PjoH3XbaSVJFogkDi65PSwH4aC1oCBhjWzs2ed3xqY4vh2nNMkSFswYTPoeBAWPQhwo1U4",
  "key20": "4Mz5trEPxwx5hGSmZUxPPannFRUa9Ya6STAm2pkBtmPBLxap1MjczhQn7fUTi4DRbGd6xK3BTXMh3ypEZVbPm1PB",
  "key21": "KRBxiwfkut7Wa7iTCxe7rRXAQNofYrYs9MQHLHyvFiPwdEy4hGBjTbi587iu2v6bXEnPHDhqkF4bsMY9KLDUDNV",
  "key22": "3psj25xXwJPAJxm61TyV3pvbhWyJQ6ZaY8JgzdxPuknQzjUdVMqwDrjGt9JfZN4LjzRfp9gQZfNXtiok28cSnrKc",
  "key23": "5dYScChTJXJZxyKwEPJZmp6g7fSKd756DfZy6eckweTuyPBtM53mywcQLckC1cFNeFAaUVhoYEVL76VPZ1ajnEMa",
  "key24": "2eLz8unv4JnjxWd36sjjFGbN7DmZH6q8g6ZygRd3b9vpBE6ub4k5uV6HszRn91tABTjCPg6LXBvvygGKFK9GwGCD",
  "key25": "2PD3wT2FT7vCxbWLxhDNf8iN1ycUDprNYYgUYhVY4Su1FKVoJJ7YzwPd8ZWBGexSytwkBeh88h2dPYUbuC1p83S2",
  "key26": "3TnMU9Pk25PxADEZH9k6xxKhNNZDXS6yuVKJJLh9CtNud38NJvz1UayzPKncv1MLXjCgyfAN7rzW9VpL3q9UtbWf",
  "key27": "29cjj7JEjGc7MTxNUf93AEdD75U7bqgmn4u4c6gDawvBZfkCWVWP8a1yWJ835cGiARXL3sKPPuNNCLqt7HAXfpkZ",
  "key28": "4YgaDjMzgiub5qg3BdoZiAC1ZvKwZRy4VynspFThauvGtVTKnzoB2A7256ugq4adD5PtpKkrsJThSm9yk7HkfYKM",
  "key29": "23P2sifvVeVtk9rVu5pDPb499YXEP3YqbjGFCqxgXCPBRVXKZtRPuQtez1XAEbvtiKYkgK7mn7druJrVbutowLoH",
  "key30": "3Jv26CU5Y56uLhetBP2t2RBNZg6hNwuxkUYnTNPLMD7sE7pcGr7rUegosWepwqwbTGFHZ2kScJpZt6197RqiW5dc",
  "key31": "4vXeoCCVKdCh9K3GmY2H81sZdUrzwahtAXEVVeEuq81jLxNsJPWR2A5ZCzvWE38VtVTMfMCHHZLisPjtHtCC3vb3",
  "key32": "5U7H5W6zrFNkTV6GFpfFMi6iXv48AWrdggRpazf6j97sk6GH96Ha1kUzBnDBTtDdfoBvUe7p4rLipnkqdoKLDomH",
  "key33": "4PmchCrFcLKkUTUUqgidoHT2zX3DPfwZXyuUEM89pxe8QUmD9rpyj1xZoQcypPNnZbGLfMG9NCnLieDSiZ3xWyVR",
  "key34": "2Y4sqfqPRtropHZhsqrMzvfy38pXqUeHspTASC9vj3km8CMM9NshEwcXnJeiDrpXDFdhTpgztX5byVWvkVPoraia",
  "key35": "2YBQUGwyi2DoKjj44TENS5fgBMezmbKyW7CFg6B9Pd3jud6L7z2MaQEW4kk5aFWSdEwYaPMywfk5bES9dobmHVRU",
  "key36": "2E2XG3KTPtjqqnr9tRAsMwCoLco91rQ4RZsunbfY3ocq83RTkcSXaN6YgM14YUFUc3UNJMS2AFpkMVNZyaMvGKie",
  "key37": "38QJoXyDSWW2539YYU2ATbP7vFFfB9X4m513rYnNX5djYyRFTGJkQ3aYCtJbY7wpmSPuE4t84NFNcdJLLvG5cpHi",
  "key38": "2MddPYyoGt388395LFW8JRwtpHcdUC6NPZKbVH3uULXjLbzGDxuzVEU9PWSZJMQ2df4xQYVkwda2cw7BekgNfy1J",
  "key39": "2KXoj5ELASUiDSYHHKSNMnxNYiGTAbDHucdnCMCLQ6iBU6RcPn2uFF5SyksomNXrcu5eVuECNjZYM1emZaPdypyG",
  "key40": "2y1ix3K26bG9eBVZzDDE9rmLwo32i8srFFrcbEwWST5MQysb3SJTLLU9CWcpJH26uEaMGrXZXnjsbNGR3AK2miSq",
  "key41": "2iLqnj5e8BwjbD4mS1XUdZ3FM4ER39JWJkpHk8DLVEQD3dfuVy2k8ZaX2Q7Tnw4erVSJVcfh1fxgz6HRHuy9pQuw",
  "key42": "4vUE5PEHnGxwG97U59nb3ZguuiekEcYmG5q5WaNRnTvWT32SLoH6YgoQcYjYdagqSD4tJTjdmiJMQrrJ3n64XhUu",
  "key43": "4naAGK7GPA3erCy4DRxGWPLY7bDmN34dUqbUgnw9n4vHp8VCYzuuVjdLbFcbwC51iCZ5d87KaGtWNWbFoBM2ep2M",
  "key44": "2ynYG5Ywnf3pNjmT92sYTD8JZngzza3bgQERThS6msohQqkmwyjqW1ehDjnEnXgBE631behZJnTLA6j2WqwS8H7S"
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
