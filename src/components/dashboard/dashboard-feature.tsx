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
    "2tPxMCAPQFd2Ar4q5o5movDipH7iUZwYACm99x5MqnjLpXRbxv42WEzyJSpE51fYxiAdYP2WugRAda6ezoyAG8jG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X55A1pLZgPrBGoHkd9mLtVu2VnDvFnZokDZJL8Y7FbWHUoj3o4VrA8kRja5J8nbkym6YcTYmacVJYi1MUheCYMo",
  "key1": "4h5BQAST8THvfrtjyZVF4Zr3SASF3CagyrY42F5be1sUchUfbW1HTSkKTDxNv2T7r1dfZUVYvnLxS2t61Lk7GRQM",
  "key2": "3QnCLL1CrDoHbSjkY6TPMmUrq6BcF3DscsHrjp88Wz31QiGmYtRfKqN4QT5ReA1T3CmsPep1jdKz3nQQxvdnjXpZ",
  "key3": "H2toiLavDrwAt5HFGgCjeMndGGs8uzD78yaWMEtZCWwdM8Bbw5bBMHAvqWC9LCdZoZqc7jJmjQuMCNL2bFkLQ33",
  "key4": "2RUPTikUc9T6w11LyLwjqwinjS7QPxLzrMjHuWuQs3Bnp6YCACXk2E3Whts6K84KE1WLZxYhv1zFpRPsLbztJpau",
  "key5": "3612JCv49tGbxY7nLUN5SfJzAAmbnahCf89TqdvuxytkruEK6enmmQD5MwRfBreNL2dMQKU9usLkhoys2WgLi1ZQ",
  "key6": "4VMQXoarP8RKftP5pyj7hzT4qYdvw96Yo2uy73eCA8J2RsjS7Qsgd4yEdisQ6teQc4bL6fwLeMp3dRG3mymPsqwK",
  "key7": "NKs7mP4MGXDyhWSCJToCBHoJJagJ1MvTZDgppLpwJew9y6H3JE8qtgXpVQ67R2q8Lx7yAkNraWJusUvW2TjJJ4Z",
  "key8": "2pK2zXZDUGpHbmvTdtSAUxmaYBNGz8hcHzU49sDLNE7TiUB6dDjzW9K5m7hha3MxQY3oumb5Q5TJ2CDwohru26cs",
  "key9": "5oweGmNPf6iPA8AkdAX7FPc75YXuMdgzhtzuZ8yCUkU7m8fiYyjqeyp8iwNAkz2VwTotU8SD4Me5pK72brhH2BMn",
  "key10": "2SvbvnzTpBynDTK7ogeBvE9Ue9gBDQiyvRqmK7NC7G3NLLoChjypDqUUCnrDtLefuyfGG3o1m6catxXcbRFtnpM4",
  "key11": "3P87XGytH6RJobVVZWEU7Uf2vUMHjswavXfv3dUNRp5J1v7Be7GMpsANCvLmh1usLo1U8vtaHvn3uwaJpBB3BB8J",
  "key12": "5Tnb42MQ3uLaV1C1tNjP29qpeboFC4gMLENurKKYJvDR96YV2dhaN2dWiavcS7gu8bYA6bjU9UX1acWd61Z1FvYN",
  "key13": "5uSZFTe2LvoyLwemsZtpyhXzZK3LQQPE8bbhayBys5AKmtbVnzmrGmgmnXPkmywzM4EDRjjKeXkfyPgK1o7Ug22U",
  "key14": "52XkVA3sMHogrLq8nDQKwNzAsgq2TxRjV1QvH6bqxrvBUDHNLemTmi64HcJdBj3mbiTHodSJTY5vH34vGwpkNRoQ",
  "key15": "64rc3ugxnvP3fAsZyMntxcds24UBYEnZo5q1YDdVNizubWb3Bu7nwcaia3zVZbhxm37UM3x2Xif5AfJVwR9cULND",
  "key16": "3d9SHZhngmNs6K2PYA6FRKFKvrCryfJVVqwMsK4BDmktuXbA5bwNtWf3J7HytSZ9qsCuAs3MxCHoYMSbCXGVWchq",
  "key17": "2LE4GRhGReyjeW4yq9fDJn5ggTujgGyNoaFq2FEtnEoVhHW2Y95aPuEgymVwmGaLJeerfrQeBHsorrRevoeCLuGp",
  "key18": "2RYXdAjMesNcBZqXu4Zh1rUtHveg5aydU5vD66PpabMQHo1g9PNAp8eRqQFKTxfzEFbWnHzR4uWjL27b8j1xKW9K",
  "key19": "2GtyLMz1sxYUg6R6u1g2eDCLLeUbXGguCYtBgD2uBEcBSg3w9xbkfiW1JggCUUgdMZ2MgPJWHQF9wBJpZ63CPhqD",
  "key20": "3daSc4ei2DGZMYoDK8VfM2XwRnvtGL576J3aJw9fjVrhhCnpjQ9h86MHMVcMsZfN39x256aSARVrBeKtVZvAL3b5",
  "key21": "2DcgcywG8y4N9aQ5cbyAMe2QwpnyMqnfU8pntJwEup8es2XkGsvJkB2xHV7BBMrHD1sSUT7tKvJjgTHzWPWXUgid",
  "key22": "c9mvhsLrT6CNFk13j7BPgGnaxDbwwKnexhASTyt137Wb9jCqh1TEJeFq47KcThScdnrsLeuDtpQtJCKsYCmwAJ7",
  "key23": "5VmnKQfEaPZHWTaQPExQXhKCMcHawnFuS1QuL4k2KA6bLNyP67kghQnqcbejTHu1t24CghmbwtGgsiZ3qk5uzz1T",
  "key24": "3enH1A5iYfoV2gkak43RcJWVCCGM91DsXniCK7dvWUkxJTZHwmQLof7qg57f8iQbe4AJ1uMqnXtn5VsdK7BBAHvJ",
  "key25": "2PKsDTMEdTwTvXeHQ2npMAPeZfp7qb1GuPox9AMai4Lraj77NaoBaGSXtPgVgmMviJ9B47hbTcLLpbAZu4TjY8SR",
  "key26": "1n1NoKNLUTyxQHM6RR4o77UKGBdQ4RfbjvnmS3Ljp6y1vSdh3v1eKuZ6TxttV3LhXCCXdfnnQySKWbAULEtBDYz",
  "key27": "2BDgmA9SC83zXXah71LhugoKjWyXhk549T1EBTSZb2GmvYXP2umyYLcqtJPy6oMnGgxQ5WPVBD7QuzmiXHNakKd7",
  "key28": "o1eHWf77CwxVjheNwf6aeooA5BnN1PTq486qchCLbv7cNTXs282qa7mjq8FQpTMbTU3Y8WdYHGN2zsHC66Sh6v5",
  "key29": "2dFGjamse9ZrbX4vSPEfG1hJ9bqWXuFewK9QsPqErpqhcSh1o5WJ6RzeWyozvhk3EQ3A7avxxhooiyQmWSSnsbzw",
  "key30": "3PAZrKRBdUy9XQG5uQHr6wxq5McjKKWoHgrb96Y5wmcuhUkJaVWUh8MN1UJDTXz51rogpPb2aj5mabav3J25ebuF",
  "key31": "3eUPuTeqxaSXEN1vi48xufpThs6hpsGtg6iJK5mm24CaJfPvS6DBtGqh3AkH1hZTUYgCZ5ridNNW1T4xVhY7jvQ7",
  "key32": "N6SKKGJcLY4bEABEtaPpULrZpiPeLnrXTPUbsucMwGTvtWzq3H8UTJjp2tdaFUzktrgjCvJSVQ3PmL2hSTF8C5y",
  "key33": "3pizbFSFYcMH5ZwwNKQSk9cF9D8Zbh8LLZWZo8KoSDKNMRb6fzf6k8HYcHqPCNspVU7s8h6RvvowVa2FB2L1XQM9",
  "key34": "2h7ikbSkHTHcJvr2XoNXa1xks462MYHsZPJnZFQ9HaGxPbHEuU9DmxCSKsSCt5D2X7iDEVkVNTLtF9NGYoeY9uv3",
  "key35": "46URZqV2kw65wrGKmmiqxhBwAQmBGvrhF5mWmdkHCf644nL1rRdidzqYNqa1nK4YejzmHt4eG1zT3qDDQUDNgQJr",
  "key36": "2PU45mMqMbr8SWcYRctQnwL35qakAczm2mNiAtien4bLxUXqqJsv2X6LK93frdSvJzKQ48cAHkq3z76JqjBAufDz"
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
