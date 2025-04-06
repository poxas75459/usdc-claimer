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
    "2XwGqu4jAuvm8occVzF4hSYNVZMAHhLr7BdrvMDwMTj9K4uJqAbWh3u2SckDoxK7c48kcndyKk8XKGtVEvcB5dHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HoePEuvWmN7JD31LA4vzUR1bV172GD4Ndkyn9Fu527ntm7EYY7Pmac5PVmZb2twRR5zdLjJ2y14T5k1mrjoi458",
  "key1": "2oB2Co9UuxCRCd1F2W6CccsEBicQpp1RuZqdUoeRs8h7vtTGG5u4kFyunqd3surN7ux7nwFsgMrNri1hJdt9zF3P",
  "key2": "3NyHhiW2hZN9eCKpAqNXwAM3mMPqdPp17KzUc775Kv2atXLoT7GHLit8QCvqnDpsxbweewaHEXTtQ6qc4dK9Zcwa",
  "key3": "31dbqixRGvBGi1MSBWAS6R62ivBJ2ua8Ha8gj5CJEEuxTbtHKaCapbiCv1V7u5WHNWCaDSjGccE386qGbcLwtDzk",
  "key4": "5UDjScBCP36PxozDtGW1HreWFPgW68ANMkeUYZbNnq174sX3Et34iNkkFgw1TVzm6KwuLhA3FwYTPS4TWx2mWbtK",
  "key5": "63U3rtj7vBmTMADMqLpbrhszdbShZGvntUqDKA8oGKqAUPU67uma5LweEfrWmfBxphEBycu9TT2HF955EsWJq4bg",
  "key6": "285p3w5ddfm78Mewop7W5CFj3KCvnoZvMn2eVGmFUWY7b9wQJ17qBv4Ru8HjETNJYmEgabFeNkEeFa7cZccDDYNd",
  "key7": "4eVQG4RqVN4mLVUdbRezHKwuKJabFoFTmcoSN5V7BQd2n2zvAAeMvsgt8LYWoDiQJDSWXo42oY12moo37ZHk7yQm",
  "key8": "5gb8Cq7VMzcuKoEnuNUXcPd9WVgNTx6KakJ6MpjKqqBxtbFqEMX4ZjHc4k3Z2VzvU4XTB9gHd6uYiFP82hRW1LUM",
  "key9": "5TajpTChqB3m1PDeDhT7dFtEm3f33PXUCofMxWc9PmivrjaoymjSR4qtRdhPRUZzULLnV3hg6pARAsa42MXkT3qG",
  "key10": "66M5kERPq78TkU6LPbH5oPMAMKX5uP4CJsxuPWShdQNgj996bHboZ7hYaDM8dCUJnyxe16DYoRs54WVhZ3R1cVa2",
  "key11": "3zrHdYJv17p2JEZQCXuHFCsPc67HoxRNaq9gPuxZbUW728yY4ScLTRLiwmogKBe4Y3ZiwtqLuKYjH8ytEgnjWiMP",
  "key12": "sJaA6L9Bx1H7KUZTwDMLSXJKsoC1fkmREPrzZL1CzrNizC32dKRRbu1BCceT5fSctpENRQLpbXLvVhKuJdyTpUE",
  "key13": "4j7ZC4S6PRZs6wq4CCGgS9BgXs9Xhy8gphgFeoVSnXLAYVhU6Cm2bnJCz7HUtd8Tzg6tTLogT7xkfMnEHQPMwH6E",
  "key14": "2ewmWmish7s1q67aJizN1puJpjz7AjfCHUPhqsZ58Xu5bFgeX7GpFQdtZBrt3mm8Pwhf6yZTKa2Vvx8iqVq4G6Dz",
  "key15": "3Vow79ATKsBy1Bt4cWdQkZ4wJUgaHyMe7sbD7AFjBYGRbewT5LHuLhaTdiX9GKEakyfcn8to7fSkgdyqRkLpvHWb",
  "key16": "3Wjyd2sD3cdfHUQGehiGdjgysUU8FnBzULgsjL24DvAJchsC8gLvYXhMH98pGkpCfvUBX65FtN3jC4WBk5T68MBW",
  "key17": "3zWUdJyMXrcy6jLVu2R76tSxtjHZwsa4p6CcKXUQNHXHtnVJ5XhnQ6a7wVTYk4pcqaFiwfqcjEcgDkvwgAWZVEF6",
  "key18": "4iY7VXBDpiHALPjfY8y4GpnwfWrK18wUxrv1VfeWdogF6Pm73QuWKwEbanP8tAYg52a9mFosfUKoe4hvMkMU4D9T",
  "key19": "BpJX8uQBShs3cjcpboeSHmktuhKKC3L2LztB9JRauvw21ADCuRk2AQjtQjwvTtmuc9Ubq7d7bEJJ2hdtNfPR8Tf",
  "key20": "66WpTQjBjkqyyatVZn1ukNPuGWwWKgcQEL8C6YStLv92MGpvomSPevF8UDviBTPotreA3vxyMwe5xS7TuHaNNWY9",
  "key21": "katjRGYHWVC59Nv7wa5eFrmrNxMg4dK9cQQ149ngxMmPbHCCVj3Lh7ZhYuNf35B4Ja9FdHc1Kcwr2KVLN95jw91",
  "key22": "A9hZNLpmo39VcrgXGEk8cQoqAMspVxuE5oNBcQcfKtC6gCZCEr6HKttqRWMSJHm1nCPZWxPkmHiKdyYAaqHqew4",
  "key23": "sffmKhrwmfKNHVvpPK54QuJp2n7ZxcUsvxSJzcr6KPGmhJt8G1URAh2Jh3ph43W8p5zppAFTkDBeTL5DA39R7bF",
  "key24": "2MFKucikoawnfjTzGFQ5f8z5MhcHka6jfxyA8us9E8ziaATbfq9EQKi9X96HXPViUfb8LwNvQNHE3uX4NZH5tX4k",
  "key25": "3zdphk6YrMaudLiBnYAGskGtncHMpHnVWnNZGQFbqwCggZtJzcegmvsNrD1mV8HWSuHnkPpbsSdUiFffdboAR4Pf",
  "key26": "3UHEp2ZMNWXeuEVVTUdySPBbU69BnVLHrRGBRSdgyaMD3A1HqhGHJTBARKU2swBNhg4fb6mheLEAftGXnCi2XAQX",
  "key27": "h7TLJppdEuUzLrfogFnNXi2rgAJrUusNUqfXTvuua87KtJFKXY5g2ZwC35LKsN7nXYDSzu2PGaNbkwyTU2kCM2o",
  "key28": "eTrVwvFExwXT7gCKKFnAUp6uKX32UESQjXshyVStmoXvrrkWdVZQnsrvqfmirr1QJv9M2fJGALjpiqzrveUirZS",
  "key29": "xkQQFdwaR6zHPopX3orm9AeY4VD6afX1jaRRc2RiZsNsZi16fSYmRJisfYWKERJLcqiZinGNNAoTeRTtdh9tENU",
  "key30": "64SCacNUMiD8aqN5aAXERdowixFvvPm8MKXkNYf57161ACA9izRBmR5Xv2QFPzNzLGRkbN7AZ61m4ePmoPE8MiXV",
  "key31": "RgwmkYjHnRQbgC6jmajDF9MWroCrPapDtLZrBaQeu69Kx4B3JLuSHESG2pVqogqArQ5DhTSTbTAmasXpujXiFqd",
  "key32": "3hfLQyRraLbTCujxqN5v8WZ7b3peg8Lx4aofgX5TZW7q3kqY6vguzpnyrwMsXUwddUcAmyUrCaEUj5TzCGhW2HXJ",
  "key33": "2mKizrgCayHxZeQFgMEJqoK6PKSufCmGYav5i7JT74GUM9pwxiCVYcw23EUbZARoKcZnUJk3qRjh9gA1KEcCD3gY",
  "key34": "2RF5Sm1mxWMfW9FjJktJyV4ADrxWT358ymin6YuyNZqSvVr7cFWEASHd3ZDm3qZJWy3DnU7oYJ16XywRBeb59NXW",
  "key35": "4oix3vKrfKfV4apuHDcn3DcdKLhZE9QgNfFWAnHudBrbKpXJSTQNrhoWQh3Gvk91FgtNQzsaPDqdgSycywY8oMdR",
  "key36": "5MyGv5UvxCb3ZvxXupQDGgxYfGDQVBvF7EKCb3X4vZJYPoNAwcKPw5aBhrnJFRwguqnhrHqpdiLN6wqDdPDN16ik",
  "key37": "3ar5y3rYoXbZmqv2UM98ysjj4b6Wkz6JuTZvxr9LqD7eYdkZ2ZbNs1zYdy5hsGWCnF1q316FyhTzyxYoUuHSRsAG",
  "key38": "2VQ32NqMcVJo7mxchzJxExgzn5727qkBykmb2SVaGYARGKEh9dgvtzUynTAcXKZuK49VKZCr4Ki3D1okA3PvvtnR",
  "key39": "5EgMmhMiR4nCKrLV9t4M3t6u4XMEseVEiVN95HG355tF1EzYYfoNgLStJNBqDYtA6fBQ3xDNQ4HwNTUjNYAqLWQV",
  "key40": "4dfYU75Jrt3goiFgiHet33WfS6YiWswkfiTQQHYzkAQHHpaeALw5YXQxmgTubukySdrM47W4QfaVWwzGDGaRDAkx",
  "key41": "4ZYPJdKYfafpeueWPxNyMQQ2op64ssx7qpjf9wXWipQwzqsTda3sX1gBm2GFd7ntgiMy28YQ8PGfhJEBRTgT2X72",
  "key42": "LCAYuafrLYta327iQPmR5ZtUERQKLeSAWSASerqxQxaHMH4JRG3Rxp254SrcDmWcf6NHfU4YwCHBrq9oBVvu5oD",
  "key43": "2NebhnYAnSBQHUZ5cY2YzR2P1TwpRQRq1udCouqzPxrLMzuaiYMHMQdsTTAu2Ut6PkcnH3Wa3rYji6DS2iMmFVeA"
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
