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
    "5FkUfgVExCBAfZDkCUGWHSTjMLqYXBL3WdNuhy9H7xadJZvZJfwjZzMxKDeiMESKkdsdJZ4UsvC7tVfqmVu4e4et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3upSNMNqHmLCxaNpza9FXcAi11T7gXPdRvaPsJpU3GGFrmw1eBaaqBjc4wSGpfg9T7YvuKktG3f8wWFafWhaVQZE",
  "key1": "5idGQgvaxr56RBZmWeNBXQgKoauxKNxKwwpoHY3F5V9TGWrJBuXewCFV8A6b6Xnnx5JqgFYh7izZYHkWJhXD3uNE",
  "key2": "4btAbHBZmfFqM8KBVKUPKK83atLS6MK8D5mQvPeTJ3xgFsMrjhN4A6RXuAKprUJxvDzadmUTSHbHS5yQWufYVoJK",
  "key3": "4kkz64y9WM1fjc83w4QKXoXjTPjfRxJ7UZLSX2p8pNYovbK3TcLphCPiRb8cPpL3r8eByqj5dwG2xwWnApF979e9",
  "key4": "2kC6R9AorDQng8yKMreucraag45tm367YCUX9RqUqQ9cAMzVnmugbbVCmEXwnhS2eEJk1QSV7eRhWgpM75wTYpr2",
  "key5": "E2KYenFikF5jzEw3v9yGGcCNvBsU4Ck4eezaGXTiUkuzVLiatKbxVBMgFRihtLm1k61uhyT79yRvktEBA6scERr",
  "key6": "4Hp46iLxpSyNyCzb2kJELnZVqNYPfJMf9opbcseTbVgzSPVjiYZsVmtztNi8msVMrF2ZEkXnviPqomF7ra2P1aPt",
  "key7": "3voBdhvkapVQU1LjsJnbyps4CZG3Rcay3o8sDUfhSbvfHKuTbzQCQz72Zxp16vV4q3VyffGzQqyKz4n3SDcG5tBU",
  "key8": "8YMmuo6iuSzBUn7EtZ6KT93xmRpee5c8pBCfCeVavyiqTt4KuPxUweZKdrELeyUE8g4THiksiTdhzcEe7uquThT",
  "key9": "4tJugoXbGzsRU7zEQxKQ4tmZMfza51CvwwLMnUZ3YUrUzWAyHoCgf4S595pGhFCqUwcZaDd6MgUj5Zfx1SPgBALy",
  "key10": "ieCLNAP1tz82r6zJ4GynPsw3LxiA1rhZ9JAMX1NtGkcSbuDm7QC1VNU3v8X3eRXLjSdCjwe8KHuCjQwzLXHTsD7",
  "key11": "nnbDbeyQWzARDypik2ZZssKksC6KsUTQ61iWst14hfCQTAT8dLNtJQj9NvGbCn9boqMXDwEThmwgbZkvoHRkivR",
  "key12": "fUqFLiWCLidnkBEYznTEpuZMD9tDUpnWkZnQ2F27WRrZcgNSqgZQ9mW2RfgwFLtCjtmu2gU7CKkjKs51RMuzNbh",
  "key13": "5QfK9mGLoYL8vkpL3a6SQLMwcTjWcWNrSuh8m2ojU5d1ef8MzD5hgSUfzUJ69HcGN7DvpHzm2P35aGjXU5U6XnKj",
  "key14": "5PBNAf1yiC9jFEX221NJ3vaAWPfb7UqskGnAzAYS3wiA8b2wqpB3oVirBLdJDdkJVMULc3GoZsQY51mkPN3iBBo7",
  "key15": "27T7XT98G8ecBmsN7JDQZGKLeR9xZz7UA8bkqsDqDaon8HxScuRz8U4oLxALhvcozGKz5uK3m7RpqbbByS3cFoKs",
  "key16": "jHPXZrhMKmjrRyHDmutcZEPkRA9Mtn46DQjVDka6w8xyLK8Nng1UNa6mwjmxVXRjLyJRiMfwQk9vgDWpoc8Dve5",
  "key17": "4EyiBsy6P6PhHEYJyoyDLmfBf2cEm3p45vsvvRBeodEdZSZaXA2W8MV6Dhnyb32bVguzezNgdXg1exvU8JL62Jr7",
  "key18": "FbgXPGC4YEQcxj1XiTjKSedwNRANUCGZBwPyqufcwSTHWui3ZYwKhroqamLeh7LJgjcnNREGtfEmQ6nVJJgLmm2",
  "key19": "4SEEdR6DVhqVPN7FgDnYGBzZXfC1WA9bV1wYVa9yVZbQdYA4PZzvdRbq2RMjgoLTepUQPf8qHngcbmxxd7jTK13q",
  "key20": "2x3cxLxY7Nk4a1jsmPD7xvAbU15R58psMsf2Vnfu4atU5MNyXfQnyYp8TiP7Y6NDpYaN9Zffyc52sHGxJAEsu1jb",
  "key21": "ifxhhDBwrbgkQApx6Q3vLdyn3BB9eDUxaN4EPzTZ3Ubi5n8gAt9fzNRt7DYj4Fy4gM3Tt4T71ynNdGKDxWGewCX",
  "key22": "466FAtUacGz5qS2CY2ABvSgZvZhR3ZXiXTcNf2Gf67fsBMMMT8Ur8tsX6dk28vag2pHJzXeCZtHcmDAApNSTWbJD",
  "key23": "5z5KDiioQrTfVgFeEsEjUhibWV8tgM5D211kWaFqyNJeH3VWwX7txtUJUEEyjkG7nS2qXXEMnrvXBLpqoj4PnBQo",
  "key24": "4Vch6F3FzvM8kT5QzCW7JZ4A29zZqAi9e7u49g8vzYvJ7bSyJMRYQPAyufVT21arE1sgZjHKf7wY9V48egVkWZec",
  "key25": "5ZGQRmzAxJsfRDpzjXQrQ8aGBrvD1BfAU47KTgpoWXbWmymV7Exj4ccHQb8sBrF8cLEpi3cWMbp6vAmsGi3TAEyM",
  "key26": "5dr2fpCy1Rz5Zyc1Vu3jvSKf2TaddRia6yRZyh6wDD1wCGPGRCiqPk5bsq2uSjPQ5aR9pXMz7vmGrHWGfmCt7YzX",
  "key27": "5rL8kRCiZSons7Dzjr6ciYqqXJp7pN5QAxEPnVUKNS8YetqmrhDFF2kHfEoaewpZVG8xT7dAStHwD1BaYBeuMMBn",
  "key28": "39dJpqCKirrS9UsNXbL7e3rTiVETfRnD2okNhCkEr1qXTZupYrSkyiBZQ9daMLHknT5DdbYggbesvzLMhNLNFXih",
  "key29": "4t43WV2dMza2oLAskfV79HykXxnWkckW2bHnskBe4v6wULdpAYvhydRJuvMickvqq2S7LjuuQvoSEy3sqdckq8g2",
  "key30": "YYA6t1Ks17V4RYqhaX8jpN1K1DwCSkxZ36kuKDSHRvGLbS2VTupoAq5yqJ2a478Y7jdqAfCwcjmg6VVbCnpLbJ6",
  "key31": "2uSkxBr81kUzC288jSs8CtZht6Loiirt5sdFRzWhQWAW3AMjWA9ax4duv1x8nhqdHMeajoq4E8Zundkj49LJKUhe",
  "key32": "hhQewpsD1m2MABZa47ZjKjX7xmKzc3YYyK5KC5Jk9kM87D27w4QbPteuo9hvyS6vven7vX9PYThYkGjsqnCATru",
  "key33": "oykdLLayU1djSuQw7ab3ZvtqeVH35qQStrB2uUgNHqn2PdZDYPY2rCiELiMD7bL6xgcGSe4CLPo6cLAuMgj7BC4",
  "key34": "3veN9cpe8tapntVnDY9otCeusczbdUzj85mjn5fspG6EZUadwCHCKGgNCUkAjLx5VtpPwQTMhiiQ5HgM7J4fGZai",
  "key35": "4SssFPgmo28PFYWjp8u84xC47B2U6yTfj1fyqpe15ujaafFwf1f5XWpmUTExSAnPVSjeYmh81M6TMbMyvxmHr69v",
  "key36": "5NShZF33oh8DdQfJW72bzM89hMViidggeezhrukABUf4t8zEGGFqXtBfvaFcm2QhqZcK3gkfJLNJHNydZgd5mKQE",
  "key37": "2ETA6ZdttaQsawqK1xFyxyafcp54XzR9hRURjgyT7FXF836EEHAhM6VpH8aSyiPJZvQSTdukcxjVdrxyaXkprLx3",
  "key38": "2yXNg86vg6HBmpEL2U55zHf5XpQEootYpanhaW6XRkMiYZnKF43nYgeBPyDxJFSRtML9HscLEHNFpXz74btkYU5D"
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
