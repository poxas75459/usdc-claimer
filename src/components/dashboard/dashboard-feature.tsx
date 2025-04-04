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
    "4P3T8TEpUba4ztEiGpgC9aaRdn1fwHkhJnzBZGBsdCNUV21iyHJfDa4sd85Dx4CqDfGguAZhPuG4MCMLbS3SVgYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwZQSoYpUww3ae3wCSxhAZKH5b1QU8YUGiyJTfbGJBEwYAcYo8QgUuzdpCV6JzX91LQ6EdiDAnrUmXFhunESfCL",
  "key1": "9Rte3ofryuhJZKMTTmrEYssHB1cmqgobJBUB5qNo38oPCKSkwi7Zcz8p8BzHQznoDE2Jmm65t1PncVPaaFsCtYn",
  "key2": "5DmaCvZuGMCtDjV2CrWuXzrUeQbEJ7ruAXSmWdfPHrzQPCdZ4wnZbNDEKPbtE6NaKNqE7dgnVKc3UwNfQmLSPw5X",
  "key3": "4AjeHebVdtCCFnkwFJnAjQWpCtkxiiFzgp7sLG1o2YS6aPaSJytp1j8U2SdMhqupwfKuy5JzviNwA2yQW2Cz7Uqv",
  "key4": "5hbLo9pagTvTq6f1r6wS9WGGy6nqdvQB5YhEz1upEVnafhMA8NpwtDY1yxAkTx8TPvvmkimptMvjhbb8Ha1Xebv6",
  "key5": "22u4LuAqeTcgBPbpeFMuvTAJCez32gppCkvYAUrjHNG6dtaEa2GiSXcsyRjt8D4FYyvkAcrS4NqWknA1LCruRWH5",
  "key6": "3PMWxSTRXiRhPf5t3jXjajULEFFBbmdDehqEKojJiereZXioLrj5uNBn6mh4cZNRiMesoBh9Fra8e9ywwANBHjWi",
  "key7": "4sq1A9PFuRm3e84nNS37zyvAv1VW9SH2MzteZfh3hvoeNJcuyCiCMGoduhZ75YgEo96ZYf2v6htcBFNnztmp46dq",
  "key8": "RTbA14GoGKnqhqkokntyXsFM1JoPrRn4VfLqPiaai3SpLNE4LDAqCxUUyPb5LBRKTtJiiakXouTgA6ZcJ4hRKnu",
  "key9": "5KAbukzTkJKJu4bN7WJA6nmL1tVKJqTBy2S22RkfXA7DeyfBxe4MXeEZ6F7V9ku2j9RvmwD43sFQv2cVcQp9Xx8U",
  "key10": "4dgJjZ1fdYyjP9p7sVUkMDLs3eVznSYkaMwUhsecQ2WSAeKqWQ7YrcDUtsuN6ryueKtsPan97sGvx6hErTc3xmEJ",
  "key11": "388aEBbFq7Ewet7tiXAx1TBKvZNayk88qLTcvUK5Y5M47s49yqcbwZtjBjt3XKtAQLqfb4XWCcjC1DDwxbzh97qj",
  "key12": "m6eTWHyPkXbV8EC3mVeJkLHphLGwLrccWptSJQUsBceFujMgN8RrzuzVgY3joSAJoLxW9VH4RrCtsNmiZhBWt1G",
  "key13": "4pixdnabC4QgYUPyNetzxgxsYQKqcH8TJHFkKHeKDs1Kwu3CZGX4YQaBomHxSTJspJVEX77Nap5RRvBVRx3vsRN2",
  "key14": "3WHZo9px7xjSLcxC3kzsFAACChzvMKrb2JChGd61B7yMhLyxy5n4AQ5dCqVtBNSraHG7R5UxBz8AXQZxWJcBRuLK",
  "key15": "4UAoT3Rg4cjz18GmgrTfp5SBBaodU8s6V5Yfi3z1vhsr2PD8gFHfZS5z6rFfsjaWDo8haBbBXFdCcrDfcSWajjkn",
  "key16": "26qoX1w9pqJUbN6xSDHuQPd1iiE4bi6PFVJW8ZtdzkXsLKGjbGLrnXXfw3DYGVQZ6F1norMtWu19p4FzBDY1phJA",
  "key17": "5R978y4Q19zP4pAAkAvjJPqSqS9XTvy79nZ73cgMS3Pp6aeewq8eEquZ9Kata7zMm2kSbc45vMQEEH9LL3d2uAzX",
  "key18": "57Z7b4xRPEqFFt3RFQumdbhGbkrbCLAMxkYFL1E9yDFMkTczp5F8ZFVqENCmYqLSRfMoBCAjWmxeVodtKtPzVCDD",
  "key19": "3War7hFoA7Pq7Z129JxgdgXa86cVSGDJikgyKaoJe9Sb3zn19CwVFAssNmwyxAVnbJ4LWo8N6LnTF87321vsbEnn",
  "key20": "1XXk678NCEMXRMeCW7hR8QtrBS1uUxBDvmEmKbcLkiPXcSg519XT2ncFLsgqwzyJPEjLMWsjMNnQHMTmt8xPTj7",
  "key21": "5VCcAsa17MC16ukgVk35vpPD5FHpk6ttoUr5gXkgCkVBLrCEz82895CiXY9HErJy4J5fxmBr2pRCs1aQTPkBm6Jt",
  "key22": "5JqgKiBLTm29j4C3yyRhAnYKSAkkqxVu9cks6GGWsaUe95WfhABKbq63XbwdKXXMNNJsERe57PC2u8DnARdDda5o",
  "key23": "5W2mNefuXVqeHtprCuFRqSVVQZbs6T9xWT7kiX51kdXyAf2NeXyciSww3wAyf5DW8L6ytq8kxai8tdvYbTvgRUcN",
  "key24": "4ToXTFnwUbnMRLfeyQ2y17SyiMwxnCAV5cYtsFykRkWadd4wSfKo391A5F5V3m9MJKHPGe4umKfYJr95sYT4QenK",
  "key25": "3CzZ11MttF884AsYo7cwyEuFRojMTnkZnhqa51sqD4hJEYm7BfR7nwGbL4i4JgmCrYaXmSdHmqKDPvqdw5ZyLFiJ",
  "key26": "2CV1F6dajSZ72Jki22VXvtzsi6PKY3LNNcdGmBH9Be28JRDNBSr4271rG7qcYVWMVCCAc9hbraf1n6p7kDKuuXoU",
  "key27": "3DGo5LDSsYVAARYT6ComomSyj6XHkPif5zZpKaVXRqtiqaamkPFybMqksaEzspbVBR8afka5Q4s5MkSU8AAGQeMd",
  "key28": "2fSpdUD21JJt6t7CzQfrc5dAmtA5xKByyTGJjAquVHQvsSgsFVohiyguRjRJsWjkn3ZDvGQ26bMm6FNw9ZbPyTS3",
  "key29": "5SSwcraFmV7GRsCgRV4bqHuZ1Y5ZDfuu534PYSUq4LroBqqWqZ2My4saoyhsAsYjNd6ZdRLj8uCULtmQBLZjJDo3",
  "key30": "1cUfxP5Rh9VsZJHAbKDPjcN86pRUUNyTEXJfR2iLRzMdadG7m19hVM9bnMP2bZmQrnbi6vwJSVz67fihriFKdeV",
  "key31": "253b2kWhA5HWDwVKSVxBn277kWSsVbYsoLpoVefYTrErhnq9ir8zRwdftqDKwKeEpukTVuDTaB6CEA1Ysq5pMYCo",
  "key32": "Wpcauc3wfXCnQ17jqQFZZqWZSdu8YaawdqUXHYGYhh9NPkr6U7H3ScawctBiquofaG5japy3kJpPoAygkgQxr4C",
  "key33": "5nsFVVW4W87rgLdAc5bVP7MX3akYRd2xki6uxH9KNK9fQv1UtEuNpXqj8jm5DKDqwxiYT8k1bukpi9K7oi4RLWsr",
  "key34": "5ahdrmddaoxuuctftAt1suk54hJTYjQZcuvud1nwPFjAsRSLg6AmBbZkaPFx783RodBFxJAAu89mBXC324n9nCyF",
  "key35": "3TtEFyZToLCNRLS4B6XcZ5EWKoVpGavD7GH3uRQrpXXDVR8uziMjFaVbZDziAW8hkoA2KdJ5om5eU5mSYo2ZTzpK",
  "key36": "5pLYs2MKeMsvdmEsgma7u2vdHybx23UEg3R7p8yvCLHuuJozDbVTfr137BK4SvPjC2nZvqAcxVNYpHjnYRRJciFu",
  "key37": "2T1XLmuBE1e97eXjv83LnTjcz8XmcP7ceiwxJn5egSc7qJxxcgWK6R99r54TNoZyx2t5KefcrG7GNYPBf2q9rqzo",
  "key38": "w5eoLVqmUuqU1U91E7iL72wLXwCH7iE1oymuHkQVQHxTVGrPW8UG5rgT9QMxqonpZSmWGY8KoSY7G6WnD8KsWX8",
  "key39": "2QKNKZiVSZnypDQVTn146UMFkGpvxWLpJNDbui7s1F3LMFLFo4uHfAAghRFmAsatLhWEdzfL35QzxbGPB1ojHkBH",
  "key40": "4ziZvcNeqvRent1HGPji4kp2Fnf5T7QqQ8bBNnSfKBGEhQfZGuFq5NnsGinycQMTXAEtdYN7Bnyt4EBd9CJPCKy1",
  "key41": "3MaEcYPrFFY8CYQ9jU4ADq573zjVTqzw74SPAX99KUftSqSaj5xD85WUdS9iGN4AWo3pu3pcevZnpvGzXZwC3SaA",
  "key42": "s28Dgu4dNmKNmKYzi1nRGYyevLouDfV5ThPsC1U1xdWDSB4hXTx6VkhY1LfBZoowm8a45N2uEpKkmoUqwqcrBrf",
  "key43": "3bY8TrH6cuQSRXhecyhvdQmWwaZUakoHTebCpHzxtbPt5qKfHKVQgZnJHuJbgh6vJ16gxXxnTg2hkNvbC8RjjArU",
  "key44": "2vwqR35XgWipnhSm67TotE3Zno5qXWkYtNp8urFMdinMAajcz6L7jhV636gn2L4jrbKiuYLSAmMQfbQCUEveHa5B",
  "key45": "4TaAXVH39WGYwn6pTFand5jxmo7gWw8mYdhwrBxy1eqFw5tLJkYrwfz8KsS1xkqHk8pkfvbPvMRk1kFAyaQirxgz",
  "key46": "4eXkzf5oYZEpnHoiyXPD8KwQ1L21mTEnud3atoRCUxECA9Yp1SeHeKeHJTcyqvkDRUu7MY6mhAwAPnCWJ6zsiXeF",
  "key47": "44Fr35NVeKyDqadCU5FuAoCg1L2BEb87RFVAYtPYfAsdQcoh2VJLbaMZt7BbQTLBwAzQ1tX1DvpF9DhE7vjMaJ1p",
  "key48": "2Mgyymw4vCiXUAue1hs7WvEti67hVuoRdnD6PNGPqh6BtoHzzk4pNJtcqbju5hMta6jjD49M6KB4TenAN5TEFU41",
  "key49": "3McRTX3Z7otG9ikTEPvpedVud3Z3rz4sUp53ZdJDdgUf38PAeSsPznFt4Y4jVd7KTXzJZiLSAXCayYvUgdkMv9zz"
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
