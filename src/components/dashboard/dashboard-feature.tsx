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
    "53adUFtrgMY5xvhiQiRtcpJeRh4pXawY3RFmDDsTpx2nyfNW6iyYsuT9tcDcKKiovabRveDWmYsCF28zzCesQzaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNrTAyfmZ8XNzN1fgZGaHGfnXEHbAoUfQDYegZX4xvd4ERJnyyrF3bzWWqCdV5EWB88xycrKY6AdJMWz53W5qSD",
  "key1": "5vN57ih5aHHh8rAP6pFEpRgc3DJeB8JYiTQhowx5gLoT9BFg4GV28iZiXUTHsF57Upp9Gv4eJuDuFYnkMovsLT1S",
  "key2": "4aLee3v2xAZHbFu4iJd8ZTnWNxijAf25LTw2yh6HuZno3VFpv5RDqEc3fFyppPQ4PbMnTmWkjKNjBxYgYJE628j4",
  "key3": "4wRzRWrMjhUPaMSeRgUB9Euh4WKyjiPWTSNT7HK7BNcUv6Gk1z8VG4i5G18sbmamSKpVNvXcZ4tdsQU5rXzN4Q7T",
  "key4": "3k7rZotJYizJ8WXVB1Kg3AbfvmQwm3TqjceuQorqMVKGoKyQpYSgtqYCDomuze8Moyy2ZusFv8Suxmgk7Z2NwBtx",
  "key5": "fQtjza6BtbdJPndcocmzAtLkF7z8PHrTdTfFsYmb1m3HXsRXFUytMjXNTNjj1TaroAcA7jBYvQfD88kMJ6fi9jt",
  "key6": "5itxCZyQ143Y6gTixZxPgT5HBxVe8PFzHzmNkHaob4LUYh3KzmrDiEo5i3TaVkgUetsHyVzw6V8TKWu1Up3foWBU",
  "key7": "sCW4wWW6U9A58QyqDSRjXXvRQbqp6k99uFksuH7EfyQuZqKKNaF59zrmPdjrmeeiipTzx5PoCbgs11Qrg6LbfJX",
  "key8": "3YSxUrxKc1JDPLrmyZq1mHbr8G3g17GJfqqmGoXEmd7jU2sxAVBQnztG9PUamzXG574iAvDsCryjLioBW9xy28sK",
  "key9": "55c6TQjbyPseHJWxemvp4DEcydJeMgfQyKouttveYeUzn2UDy2yUPVQaCtqFRUvzgvrfiNeYUD9k3iqNZCpgKPFx",
  "key10": "5tCEahk1wQYu1kXv9Eus5cT5kbaw9SMpqzykmqpT5kfdgyKqwRroXZ4AubD4x5wRhdmcCBhPT1Mg1knjy49dYcZ4",
  "key11": "41nERqKebTj94yvtPgBpLNHXcVx5y1hkjRfFEwwNfuxBQ8jCa2hbnY78eDaLg1ttWnFVjFkLEQbXLDhLSccz1Sse",
  "key12": "2LadcV1uiS88AizUhnsdH4rozWhGZamKUBXmNVVn2rHVwAdfSbFoJLynPDTWoSGraV2DjkhXf28rcSTXipdWL9s5",
  "key13": "3tomJSDssLt1z32A7UYRTDuKiBdF9gb78icHrpszFCSoBnCZkKevKaPEmGA2T4fqeu5f78BjCJdVgnWCTr8XEKVv",
  "key14": "Kxk4JtHhLYkUXeZK5vMheQzih5SQ5Hc5GMn7y3JrNjDtSNnk22QruiUdhGA5X3pTP3zUbuGCHj29SkoxTrbTicL",
  "key15": "43deUgUNU56AL9ih4apTK2RC6fcNeaipfoiEg4REXiEKWivSg1AHZK3NZxWfjZDkUFD4pb5onSGDSM3j8nbUZupN",
  "key16": "5sLjxjhpqRLfFWWWEbnazQ4wi67teqAcEbHEEWmaS79maG8ZEyYTbQB2yaeXqoCZiQqKR7D4Sg6gbC4WuCtJqfuQ",
  "key17": "39FJf6Uz92ri3mANZWbtRvjLYSevX1V5NgGHtxNrFd4TS9os2MW4T3VUgGVQdaeLaNAwEEHD61Lks6f1Yzq9uX2T",
  "key18": "3awDp5NoUeyAaUCKMmChasQ5kRXUwGzdLKnoveGNcf6nE5UrdhN3EGCrmK1i6W4AosVv1cCmMM1FtPp6J6orm3Ce",
  "key19": "B8XPFcRi6j2cPgWG4iFBwQEUiUctBAZdZozR42H7bMo48nqcg47nXkybj1QfeKpYBTspoej8v295aSD9fSc6AMG",
  "key20": "Vi52gymeqdZt3R2Wo2ervrYV9oN6DUkchEPhhgpQciTmmbMafg3P7YkWemLPP838iUo2JyFxuraiBsJ8H2RxmiH",
  "key21": "38GUxwmLe6jF2iKtNcFLMTZBQ4jZcdgzWWXXa2Tg5TqWY52CVvnwXJ9oEev1ZDEk8runDusEWTm28gabJo7veDge",
  "key22": "52btJjQGskcVJiMEuyZZEX8C35xad8jSMBftLRTQ9UHqfiky8MDyyEyYKupxCReVSmUVDEhkuTXuPEuGJk2AsMH2",
  "key23": "48fesjBS3jWh1wgXG7u8yt83hfRXC1MNBXUS4ahwCPpjPLZoK4yhre3WRtMvdZfaUj5i1FLtPLERL8HJy3tdWzT9",
  "key24": "4JQL7pWBQ8H74uuCnZMqEofQ7C59vPanDDbyCVeDEWwRYQF7A6qXDeVCzJPTiWGsxXxQDUiUj8mbkygCw9EehTjr",
  "key25": "24r4zCvfsckrqf1M3KhDd2j9k8g9C9vTqNQrk6ZYRr9kya9hxpJRid1uNEGjUEF1JXqA78c7HPJzTVXcCF8qM8jE",
  "key26": "C9VEDf5tTBx1wxVbNtjfrEYBcjVshGgTea5BLJaSfmYxooe1pK6w4HYE2V32jHpYeLvkp5KQrobX2YcXTR54kLX",
  "key27": "2QErrn7iBg7NjcTSVaZvJcpJJyHvjmb6vo4ttoBaZFqjc8jUXDm1UgAFNSYWjsMRUPAjwN9hvWNWsbor7JJM87EN",
  "key28": "4iHAvxQYL33QEBzmYfKwsxwMbsRKbbT4S8oKSfp7thSUw6gsAgvpxo5W9Z53yJuSJLMyst1e6quwGjHertXmzevE",
  "key29": "Mz1ZpZhn8YVFpUohMJhLQb4YUBy5Anhn9dsuM53RPSkzjyk9SyGQAb1Si1i3YEPmmnSZ8fjenaBLRawbZRfLzhK",
  "key30": "3paFJ1kXV64xnkERbwUAJz8yvQwF5jtDVrxXbmeBdkRCFbq3GDRaES9bmymv17ouiogFgBcr8rU4LdyAiHdh1hkm",
  "key31": "3aYeeQcNpqHWHcY1Lo9qtzPmrctXELXf233B1n9bQbBKqS5ZvAFNW9j25qHkPBXV8PhmFknoStwDuyHHcJ1p82Wf",
  "key32": "4csXxnxdPwNyBmHHqDCqhrFxioiFymWuURwLkjXPk57u9tYxpVWFCcJ6PPweRjnNVk6bNQ3R1y5dnnHUQevB7FLV",
  "key33": "Bt8Gw3c7BftXjXJzYcVuh1k7L9hd2uDfAH93UhiwHkzwuFMACX2WAjVS9282KmoR5BQWcnKMSKzARNkEsBqJLC8",
  "key34": "4KDk6zv1qTRD2vU2Q2XexSXqvkoK7AM3xXU4HqA68yWqLuqwQgYBpqrN3LpECi7Utg63HStLxS1QhsuYNDAApUcX",
  "key35": "29sYCj2EwWefA22oUfT85qJMxmBCyLD4M5pKsHZEJoFi6Fof7LQNWfNs6igWsWn5d5CZiYZdAZCv8baYUVjWAXho"
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
