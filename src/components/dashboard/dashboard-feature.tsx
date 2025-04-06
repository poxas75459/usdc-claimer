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
    "4BbcadzpRrnDXQyp6TukLprCFTDuWD4FB2ShbZGAhZVFhcsGeP3f7cHkZff5ftzgek2ECecd84cuyZACDcf4KkuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BexqDCxFJZfRPHKdcrn8ZL9qRFnMbTF2pZKTsuCL2zKSHFRhcWCe3FbeWBzNzSQ1BWdc23mSBLismzujBzedMjo",
  "key1": "3XLesVowUHSAho1eHHJcyiPyRzUqjyfiPiRhAbdtoeXcW6Le5KeiCmLheTLT9oW7cqkg25bwgeCg6VvWPB9FYL33",
  "key2": "1Vpzfspj2uf1dwzPDaYcBH11wqXahr5ySeKrso2K4yEnxLQKRtMo73shcx7fXEiSe6zVdjMfUspCz2NZfYqHejU",
  "key3": "27XGu9kDhZex9Et4zwXmvXtVBFrr7eCYknpko3yj2pqvzyyrYWhpjSQSCuzhysF8MxCDEeJLjsc7LwFjy41WRQrP",
  "key4": "4J2zFxymPdifoYxVekotgKCqAwubb1JccT5so1bSD5yPK6aNwL2JKCEPbGncVkhWWuipxBMvqnGF2tzJGQkakzdq",
  "key5": "4TCvrRxuDQrfrDN5kSDUNAeUHuqpbWVdhjXsvHfwPbsbyR7EdahACTJ2Y2YGLFxFpBSVFMsv2DB9zYH2yyziv4o5",
  "key6": "2375sMvM1YaaPcAFLTmTseNvr5NdrP8jsjpWSE8H85Eh5YGiTuJDBWPzEzKkVBfmmnm81oqtUPrdNEh3koYtWVWo",
  "key7": "5pDmNpN72exqhGtcfWnZaCEBqrsJZtFcM3vJhByb8s8TTmkKsX4vTjVyFsD6vzxSTtWa1uiD7TpDHAD1HR3vGXaJ",
  "key8": "2vJzLWd4L1b1wGJ2rPGSWR8idYZHveYrMhpuvLibg2iX9hsYS7kF4ZSRtdxnBA3DnBkqiSHQCffiGUNoYWPRkupy",
  "key9": "5WRkAFyzwtwuv85HYttYWmGmrQdHhkkaZwo8dPEmoYFKjRnS6SuJB4iTsjPQayw5QAPAyWm3yynTVco9jyqfeYid",
  "key10": "2gybyBZzCENnKkhYU5u6po51qVjVmEDqBMjy1uR8fkSbWkiQ1N4k1reGzcBM9XAtkz8xkxzoh3x1roEKCEqUtcNK",
  "key11": "4HVHMsa42io8ZSFKztbbBXfTUkx99vV9gUJjuToPKJR4L2drFRFPfdAZfse4eXJPp5JizmxqgYU5gZpwV27ssoa6",
  "key12": "4LcbFpQQE7hxTDpVerZ9LR3NqWtw5XpvE7E5ueVKHig8wVX5C8jGHsZwNV4mWNNTd8HArg8bHUZRKqBfat1wP2L5",
  "key13": "mhMwRDx3mu2oiczkdum2Hm5uaUKdKezE3pwbesakTw8cA24647uMriaExmF8RmVg6XiMR5JXqX5TZZuQB39hk5d",
  "key14": "2BeRoTDNs1VCrdqXGYUJ2KktTEvf1X2nEZMD9i2H6Wz7ik9mkPeBHdCRfm6H7GUhUD5znqV1JEiMRSZXiuteR4Kp",
  "key15": "2abpqk6jiANA8zpwWvc65myCu2VLtCKGdeitRCs3zDEbj4oQ1AVyyG42FJQgQoxLwBmjkLDHppz71q6Dhe1iYGJY",
  "key16": "3QrzSTLmMi2Snzr3FPcsKz1hhjPkadeJYQabtDun8Q5sAL6jCtTYBUqQw4aWvMooSruY8rugQuj1AasQKkqMccS2",
  "key17": "2z2TJsgjFEJeeeQg4JFwcfAcJ9hpHruG4QEjW7ZZpwMRQBTGDjakdMhPcLhg8vm6E113u2nYitiFpRbvBA2bxMD9",
  "key18": "NVyMmpVZfipxpR8hiPinbhb5JSQ6PkAkFsZTKTxQGt39B2tro3Y2vsQ153Jt98bMYP9tPukgtsGV4rq7Nt53Uq9",
  "key19": "23HWNk5jHYiGqQFgcSQXzNuWfanp3HhEynKQ49oMkFVnf6k2RESRL5hERBqX5KqS3BkkFvALuFPf5AKb9SHWCJok",
  "key20": "3h4diWezDJFJ2NhTpNegTPHESodKeapm9Nr1sgT24LDCtUn2ooC2wZTXLemkUjrvPyyF5Nhy56vyaFBc69NuFAbv",
  "key21": "3JBZjb66T7z24ncZYmFbC6pPRabt7TaqMYZD4gXj3XNUh231wwsf9gY68zzJGPpfaETyoB3VoHkLakN2T5UaYhPB",
  "key22": "5JxHSjQN9RpTJKuYsRrG3t2XzaYQnXmoQRMoVKuC6irJbGhkDaBiQLkpGzHoPqTn5Lmtcc64YwCFyePGNoFk7xhv",
  "key23": "5y5dCkHSAQp8W9D9Bm3YX5iKSUckJwQ9HKBtBJBEMCqACt7awBvtCMjsawRXx7oMCbp4kAT2eRrNw7xnHWLYubYr",
  "key24": "3FDMGCzVURCdN2XsaXkFkEHEP8MhGu5UMcRiJBqYquGG9AsTzecQCHAEAPpLNBbgcE9P1oXjaRyiSfPf2kUhHiME",
  "key25": "NRxVQLPZAeu9GmciqPiSTPcVxNqCNpQcj97TWjgvCzJR2t87hTp78qYhDTLmv2BRwR2o499h26Zej2XS1ZkR7t7",
  "key26": "2r9CUWNcPwKcWticaQ9fm8MdwFBVqvyBCjtm5gMWuapnPVobys6ja3Bvn2ju6BbZChpVwJ7bzSA6tbASsnFtTv43",
  "key27": "28AuX9VeCmiUYZfQpfFBHtBjVepQEX69H7MUa5aXJPM8DDU18isBoi2ZdMUj3Yy6rjE66hZbNtxRwfPhuuy7ZUnz",
  "key28": "2ABEUBi8Dy3pciGXADbrECwDN1vMar76ExQBM8rqGFWAR7qyLvFeWesCwiJcWiL6V7LMjyzZuoLrHfmhJzvAH38U",
  "key29": "46ZhdXsgGUa9DdELEf5wgbTNsFfhHR3DXqxYetAL9HY9i7nwWyEAoaks6X63ziHhsjiwMZsyjLJTfQHqMbozqyzx",
  "key30": "HkTdVyQ7QbBigmET9WC9HmTXdd36XHVdEfHWuJ2wbKnhUQxF6j3qF7mGwNiTbU1Efj5MUC4e7nuvVvxmUWgcKTW"
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
