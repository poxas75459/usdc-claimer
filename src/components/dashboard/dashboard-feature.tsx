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
    "2frkuWkRW5Ft8abbh6eRvGRaP7EZfKDVU7k3x9aY4Ff8qriF38mB4V7nWgoKHjbx19oFbEbu27vC8vgX3NAL89om"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FfwcZjebCAf8LHKt1ii3ToX4XoSUFXbYRAz1M99utB3a9WvrsbFeCvye874HZLR6xPJzx8krNSm4dm1dTmkyHx4",
  "key1": "8SkPWpT34mfZyD7KUu66sfVCH5MJP8FHRvu2yqWt1my3J7kqFroKM3bHpJryxeKMdQqa7S2hbm9o88Akv71D29i",
  "key2": "X5qcvjGJUDRgkgXijB1FEsSa61beQQ5Fv1f93f4zqRrf7ab4ZxkrASUp49Y4344SHH1tTPJumHAMXSfKYE2stSh",
  "key3": "3BUdXBu9uyU6seLEjpoh2BsWyTd4g826cw76vyxvYL5uq4oESpUrwotvm7cwzAFSXwe1RaMe2dUViXNf9vm2ixwb",
  "key4": "4qtmUogDV2emsntdAZouab6Vu3uxWTr22YM3VRYehL9MwYdob61ZC5jLBdnrVdmP1oAjxhtmmnqm3zR9ZRbxGah",
  "key5": "5ZKtSnT8BqhQRo1UbbL5C8s94NyECutgj2TTvATrDgr6EyWskqsQkreoTbvEDUdNKsRCM4CcMyWBsvwxKyi6DGeA",
  "key6": "2ZnTKyqB7HYYiwwUAXNrsvmSeq2zVLnVUP7iirHwV2hm2wEz1M99XDHbmP9X81wnLYnvo99VTyupB43E7yt8TuGe",
  "key7": "5jiRrCPpvNheYgw9KddGCMrWGSZnqgRiB5PH6iHrxBVjuMw4wSehhdqdWAZ7JzUxhU8qC4gLsMiJoxVZUq9eFS1H",
  "key8": "4Nowxw7mfpTaLrW5ytE9BWiGSsPWCfU6uJvpYFaQJZEZh8ZKLV78wLDC7y1cMLBxDn2ziaRvNSHmPo9Sg7d1soDU",
  "key9": "fyWZC2kd8yhS33Vv3qKS8MbPk1JbtqLozJZKDqDEPRgvbM8RVKAkKpVhKzGMZsC8Bu9GdtW5wBEJQAAxnnHGTK1",
  "key10": "3ZSmGqhBjTMRkDbt9jJ8xtFH7caGNtCH1NYNVubGczvSNA3gAfktQQY3AyNsEwG8us11ZMqKaNbGzV62RT7wCk3J",
  "key11": "4UrADKzExtPQm4EcsCneaSNn4JpR53WsADGvdpaiGYt8KTgwAr5YxBLZpRLZteEvbZPbaGgEYsaHp5a5JrWXDahD",
  "key12": "233fJfxUDxAvvJFuw6GGD4TE6tC6VdiYkMCRW358qyYaeJypWwEs7qVvjMfspY7unHgy1HRyNczwxCmhdBtP4rqi",
  "key13": "EnjEEpsZL6ysLvQ86Cqqq11efgeedPfsaSD6LdetuQgiNS4GUvntZKVUoRMBf4AGNvNivgN87weotJK1XG5kqoS",
  "key14": "2HPjdZAdKEbQmef617vUu6JoPs3igW42WLf4vfKYN8zsCPgZn6HLFxjmvWDF2MTbMWZUuKTQ5x5dKcSBNSB5sBjM",
  "key15": "3Cx7U2ByfJdApk8GWFhVS2nRr65M3bKtRLQHB8RHMPbDcM5TprhvLx4fuQfx9PP8FEDtumzw3NBXuMQxtR3zEacS",
  "key16": "4kvMvSXwdvuciiB81AeJy8kqt93CqHBnqCVWgk7hqDaqtMHHHdijg4y6jJZzmDnSCueKN9sATgwvHW3ESdXkiSAk",
  "key17": "yVRrNarfqCjxGxZ8i1aF2bNVpYn5qJGeKvJ2fZ1UVTBmrFgCTTTTaJJqDWJcZ4p5VKA55sFCc2m7JfWDd7iiXbN",
  "key18": "56Nz4bHCJF7c4sssRj3FTvNHG5ySrngwM7gbUQV4mTToZutko5hAwEkhAATVdJB8nVtEYCF97GEhRQ2M38EStLj7",
  "key19": "3PV9FPhdUGoAMf636zikrMrnwUoBcB9NHL6P7gZBMoScoLTC2TE7C1sVga4zxrsiHRuG1rJk61SpVjQn88qY5i8Q",
  "key20": "4hTpPp1p4hjoC3JjDu6e8sW9Z3WinhZ1umDxwHnmmAc7HbS15RS1WYfm5eNW4r59t7qmhwQK4BNR7AhMta24aXWr",
  "key21": "5JA26EDNXaJt5vLdEFx6w7a96M443A765zu2AjLztTMgxF13Z161M73ucavkQKDBg4dBpv8hZHYQMsZQsvJJsrYx",
  "key22": "4wc6BTUGQi4vtvRhbkCDrL4DBVoeysMGuXQxDPwVS8XuEXRZim7PL6HFTd8D44J6RNDfUNW8jsi2A9pQWspGkkR6",
  "key23": "2kHEyUojKtJqPjPSX8jsMLz1bnWbcRQbV13i8gga8Ff2BDDmLMJFvHVtEjFZqSvtA6sfusrKvNfNXEPhfJqeV94h",
  "key24": "4w1vHXvQyveQ2JKXkzxZ6UY4vLnC6tgTnTKMNxNWYjcqu1QnpzUmJk3AfzbmPseP34JtV5D1Hm3JMKnRUa5VvBRT",
  "key25": "5VE1sc9Xr8VE6C1VYsqm6BXNqzHrcr9mL8jtisVijtPGDhkb93UeiDPmMLus3yzff6L4iGyATFLCW5YaXsMtKhrg",
  "key26": "u3NGkRCcviNnKwXofxVwZM7W616iP1RW1W7vTAHCy716GJChF4Gv2Nr2vaTDKriZKo4XxAjfT4Le5uz9XcaQ7TY",
  "key27": "3sGoaYZMxNe9HfczrKxKYd3JJU4fWQq1LSb2n3Cp11Kmuk5iH3cgBLiL4YSXmXGb2AjdJPgGfBo8NSVE3JM7oPdr",
  "key28": "GwJguQ9Fc9924cqQgiZc9V4pgUPoC1jwgADRSnN9BHbbeuLL7V2UdD1bWexg6Z2b8eLu14tbrkEkyoDMpLv7Ene"
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
