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
    "36JM41GjDiNV3dk4hphyG2wv7NDryVXQPkLtaX2CeocPL9xcQzJfJ3XLZHycG9ybY7hgfmCaNU53JKKxhFoXjXqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYDQdwPytVVAsEfNVUoh9usQT6xpzU7fT4AMn2KvRT6nDnxydTXxAmPWeprRByFyw9EP1e3yNnyif8Npk39PFXd",
  "key1": "1GP8prtR7bAqCkPgfq4uee2yncUXVgQUwKxfmTMVr13dgB3VZJm6wbJMMPihEjLXjPDeRFwSQZ7NB1Hv1NK4VuX",
  "key2": "4eLvZ43Wqef9EkmLJiVJTUBjebL7Qkayid3bNGteZwCW1P8tfA6kPjUP9FaHA7A5K4aDNqEfKUMfR95DfUafPn5s",
  "key3": "4Fpvf1kcPnqHF3j9W7ZFCNQMKVmp7SNquNgp2ZLuYsHgn4jpU5bvqRE8ffzFAaRCwX3HcaLX2gsJ51qRMGyytSPN",
  "key4": "2hfaJUf6TufbRTXwjopRmK1kMc6zBzcroXqzZccpDuqyMBYApkAgpj4eFgMjhvZFakiQKzRcFbe3YiB1yucFSmu",
  "key5": "3b2wTtmCTRufuaNsKx1moAYgTVYfwvUxmCe9cRZfR561LFDLpgaLAHJ88vpKe7zsquGHtC3dYys8GFj1okmsVkx2",
  "key6": "3peqwvC3CudXZ35afDNVSzaAVZNdZteAgAzXcmoFChVXAPcrTh8LuwSRCH1jC5r1CH1LvGB7xg3ZvHGkbU6zwJSb",
  "key7": "4qx3auyXU2vC2i7cYjUana7q8FfUaNVvkgEN7JhrjEzh8Cf6m2f7RzqoQzLFDbfDQMT4LEmiheoq382U5GeJcBDx",
  "key8": "3ngbmjwdMEJRtqt3Lv7eFgcLaGSdqZsN8x8zxEfV4LPnJDvh8D2tbeUid2rGXhQgdyUdogG96PB5X1hqUqfYULek",
  "key9": "4L9vxS5ZLg2TWtD74GMhxxToXPNwUNesT7Pd5GiRvocJ86aShgnrNHVtj9dpaiD4zCKfrp8SYoLQpLYeYSpQYr8u",
  "key10": "gDYn8x6uo2zKGwnwqcevWpEa1HobST8mchSebYAwuaB4C5eCesb3LpvVbnf6Kb6mpynenQC9Becu3NncVgcm6P1",
  "key11": "5oHD1fRxLiF6kYLo8a11kAMwfBWYkS2m1WQCFbVFmx2ZLGRvBv3ysALey63xPXQSNBzqL9FupcGG8omLFSsbvwQE",
  "key12": "2gDAh6pCfVyCKtaoS2YZbwMehyx8qWTtSbactC37T911D15JqydMPN8tJWmCwWmDnWqata9Bei3EK3FmHELYXE2J",
  "key13": "3SpPCrnzKnFvXeH3jm6ZPvgyLNEKcB8v74XL7pzrfVwEkmAYbYDKJniVXxzdGK5a3oeFR3sRrHWvNcCyAngi2TgY",
  "key14": "4ZaPCSmy2fbn8jaFE6ZMw3dRwgkYm4Zby2gnsogeqR3tgwUz3XZTcMgudF3rDUePCmhsFkhzMBAMAvXA4isEoVdr",
  "key15": "FHz4eCzyr1SZgLm5J1Ap1e1KnHEUmzbUtEFXDuJRHuCWqoCrLkmfvgXB75AvVyodyCjaDmDXZmcxcRrfJiPWH7n",
  "key16": "5waNkj2MHmWzT7WyUFUGmfCrw6CWFZutjvF3dR69tha9KkpTX4oc8nJEbn5rhx2EhJiHYhnKozJHWzfgagQFARWL",
  "key17": "2QQCZNADErq8zemkL4GLGogQjNdPPYYRBXMQSPgQFcENcsscrePKruzRZ2bVQF4Wkp7Ckja9tURfLFnGCe4eknM9",
  "key18": "knvsnjTED3msneQQGxjLHtXANaBfotJLm9DGaP2ZwJQ5TYBYe9YuNXNUG88Yx6curqrNsmJ8JJbQcFU1AaMfTfy",
  "key19": "4Dk91Apf6uKwcZFEaTEbM2BtK4Q92VC933AR4jt4GxwBpRHX8B8oyLNv4ZPaW2Ak8oat1MuP5nLeGqkCeMVvgvW5",
  "key20": "2zU3EYQ9dFhfS3tibfZBXKnHNc7csLso6x4TxVQjHXKCVYRsS5Rf3W6xYyvEtM8pjxeg54G1MYXSDsequW4kuuD4",
  "key21": "4W6hGxPMdFn2kvpHT3C7zcVNeW5w8q58BuPvbMnKZ8tFH5zLmorwKu8JEpbNjguF5aBZjAjLePFjnVk5w93XM4T1",
  "key22": "3va8HYUEv415YBoMWZiAChJXcVS5ASJmJhLh8h9XmxX5qrxMrAYJZ2ab5h8jp6bnRKR13TmasmJ3m4ApHCUNHLAJ",
  "key23": "55HAZMXtpUzFA74FXRBH1oVd11W4Yht4JqFGjj6Rm6TW69E9z3fSoka2Fic1FsVr4xTsX7MptDemZnVdrGZG6M9R",
  "key24": "piXeHYEhQqYhPXLZwCBBw7PP9WyMyK5bxmUf38Vb3L834qzDv3kTirMqYdmdZEqgpiHAzMvHo2tQtvfXfxkby4M",
  "key25": "3mKk8etoMYqvPxCYmeKDY8UWfKqdxAr7JFCFMUa14ctPDmF8QS1xCP8XHdiRwEu2vDD3e24QrWQW9zQLkej5BMny",
  "key26": "5wXGYw6q7AkAP8sNRBgYc5Yp2jH9JH8TASQAs678mS2W2fMFdxXS6ZubVoNe3gVCoNfR34AfbCN7iwdNdFyof45v",
  "key27": "3Ld1Gq5mnWn1MjRz6L7qLkAzipUNtwcmxeUtPhUAfgbykrpPDSjoFxj49Ym7BZ25PKDD2RjGoTC3wXFFN4qNvff",
  "key28": "5RsRiEhfooGx8b96K8stfC1AgE4cCnGco9rUg6D39RH9ckpT4a16JYdCrAEymy7kbpRitnVcTxxtW8aqw689NW7J",
  "key29": "2oKDSSpQL1ChyafbwnJwGRQe4hUAAXDRNRDZCGmNtmbFmXbusQhW4QzfdxffG4HyFfYmoGvtYQjSRRPjFbtkTjzj",
  "key30": "4KXbNBKbUqpVmiNcyKVorsWXqNvJzWSK9j2BjNtdjnw3NRAYzj7uybikfEAdENUMzXb6hrYbweP42HBp6vKoD2M6",
  "key31": "4Je6BDJEqRMyy9QRM9EuVzeY8KqBPgWSCQUPSi1X4TQr1J1AFe1AtJxJr4MYiu6C4tHDv8j5Z8J2YGMjL5dyMDgN",
  "key32": "4YhPtV5NhuYXZBMUcMPsESvbDwCPamXV3TShM7v4N2hbeBp3BUVdadSzQnA67JDxFhfTSHcPf61ohdWQ3kN48wik",
  "key33": "x6A2FzLBMmGiNszSE4wTwsJwRQZtovyGqb178EphrtnHwkqkcNy1m35TSmqHEqdXkAUp3FZo5pnUspNqaAvrPUV",
  "key34": "3CjM4gfXPBcxaYsBjMuvLtQfdZzRZnUCAZcExD6U7PaM1Tc4sNApy7buhJKsPd4HnbveuALwCwjA6tAic3Ft5RSP",
  "key35": "2KvdBKJRxqXiBYHNsYgHvyXBicmkZ5mxqWVk11uVkZhs8HfDhkp8FwV6wdgXDRfJpg3hLazBK2JzATonxSjSQnLf",
  "key36": "21JeiF7TfjZ6dQyhbJ2d7fU94s454B4NNny3dy38W59HG4zS4YhzMp6DK6deBnwX5CSoYuEMWhVqHFmgnTyhKC7T",
  "key37": "2xqKyVHH4iFS9jKGSx4VNdt1rG6CdKLBG1tSrA7Gea14UkW8GpKDRiZx8LNWVF98VXtTYMGxPRrLN5miBNyKFEdg",
  "key38": "4zPKvUBmFgTta4FRcWV9aUHsbpzyPaZbuZHR8cYDP4oZAY3EQEjBVEyFQe8v2roYyqizokEpSBwvp4YWdF7sTkDE",
  "key39": "63u3JXfozksyVncAeqShCFdyaX6hoJKEgHXNcnoNa8iLrHGoJQeQbyNNPeEDorsRWJcV7wCi1Z638693a16aXEAz",
  "key40": "dWMVnZnh5Rf7zgTYYhqhHmdPrFistasxV5V7BN28MK6NxV66rwmmdadVh1XGguxPrB99Eiq4HSQyvipkJpW831o",
  "key41": "4BAPczGWNo4JFRbNJNkk4TmFacrbcmCgbmocNZhmm8P9JWp1cCLwHVL69NswH98naZ5giMZMLqNLzToarD7ANHz2",
  "key42": "mAo6Tp6A3idXjQaJQejHKgtnxB4r3Csg96LVFFX24XQFFKG16NbCmXP3WhYfxuusQQBzAcZG7EWa99LmsNQ3yHv",
  "key43": "4Nsz2ayQrBYJ5QP9s3TByBPUvpu6tkQV1qyGrWFn5KBPds2WJoUBfvvjDeePvSS789rMUws5LBuZpZwtvABc2s9Q",
  "key44": "2hyZ24u1MTzYAGDB1jJo4bNFi9MvSRzBsiTV715kGkEY2Jfmw6qbK3yTVsGwTZrP3EW6u27Lhk7k8tTk1zMKEMwj",
  "key45": "7b8DE9s6aiSwQQMQUUzGg9Xt935a2LAa9hnBG8ziLoC4isUJRjaK1TSSvAn9REPB3ZMPaRqMF2VcaZDeR1YVYbS",
  "key46": "3xTKXYL6rmZ7RDfBgAUNSZpgPxYRzVBde38umNhe51oD4ybVSqPKpNoM7GcsS6t7tMXwaGJNFUWmBHTAjqMo5MyW",
  "key47": "2AnYkyVJfjvQjB9Vf9fYu9kE9WnHBYwt6B34Ftqm1WpJZHWRxUEDGWGW7KFhtdS73ZsSutQ3nCmXmz9TaRVZstuR"
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
