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
    "2CacBg8r67WUhAQRdyRKikC1wUZy78RAQ6sdwBdiWqiPwPmUSXu4fu9DXgpYx7LnabTKQHQGnEDqei8WTkkyuBnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bXJpcASDCtHSZPpZmo27tapBCYwHAPAft1D1C7bZ6fEWoXqUFDGgj3XS12Y9qE5nEKsAgqCMSDHEQx1NngTQoo1",
  "key1": "NFmRXDAFC9zVZLJWNL1o4yEVH7ARtUZPorjNhzUTg87AdsVJK4WibyjvMpVoHKwEJft8usVDB9q4BvBkrQi4CKo",
  "key2": "4RuiUGnr4zqxaBhCZiK8Pc5YJYsimTTzoj2F8Ny1roJiSxmdk5nuKacwn5YjPgKwgqMx2YcWBtgeWsMiy8htjGGa",
  "key3": "V7tWu2vzh36tr5nWRsBEy77Vm7sqNb7Q1f2hhqDfvDUjgVXCQc5uQnuf2Z8z3nBr5gN7FoBioZbsZR85QQSadfP",
  "key4": "2DAR7WyALehoKKFVmUPVcB3FdgKvczxro6TkKyVEJ8qXSLzx2VD2SRCnfS9KDQV4C3Mi5NBZR5BKhbmptHk6EvBU",
  "key5": "5A1epDi6HYS79FYURxwnLPWmeuVkeCvRkCzmbn8bRuZDBC7QypyW7CHdJ5mapeKkpeugi1vJifsmEL2mRnZ8PDLN",
  "key6": "61ujgBRsTN7PUu52253YeEy59fc1Z8JJFCZvyK9VsAYfZiHc1Y58TTeyRvRXQNJ3iTKaJgGhdSNgvcJ8aMhR9uoM",
  "key7": "2GECkB7D6w9JmgF1ycLwaUKDwKamVy5JdXx2cYX6M4NnbQsuXq8rdv19EcriFam9EejXQ32FZwoywYT1YVyixvoR",
  "key8": "2sfUpAiLdo6kKTXxLVFFnAXK5PoNxCsHfz8vdNHZMLhJWdsFixisthij2iMbe2r9awRv7D5FvHfWAbhyeRRLjdvi",
  "key9": "2WnFjLKuGAWfLASQFtHBDJPt6vpDxi5JCcPBoQT4dkZ3GcTYMHN9Pozwa1DKXCnyTXRjftXB8siapCL6UzZusgk",
  "key10": "5d4bdkAQYBhjWTmMob7eayye68JvXVya6rNaAeuJVzBpxdSpzrjATLQJmKnyJjZYBZgqiYwXSFrVz7r6rhxKShjf",
  "key11": "49B7pGzbztdFzYKQsG1wuseu48mGU33VMRCNUVYvQF6jYA54sr8uZewm57SdzYc9Mq2Vjpe4JRXrv6yNVcFioPuy",
  "key12": "5TGwmRUWJ1aZK94Ba2Lxs3hKFc4umJ3vrCHGZoZnSGdpqpACrcDnyST359tkRKM5Ln1Lsdq2yZho7Et3dcqo92fv",
  "key13": "2fkd7JtHyQvpz8Vtjy4jAuSV8Upj1TjvSvwkCgsYVftcs28bkVLovDsZSrYfvgih2j1dpTxjDhThWDA8F1YZYc4w",
  "key14": "GoRvegG6T2426hkcmq4Je9BygdME4iJeqD2wi9EgwZMhZE5GaFGDgUphtzsXF8gttoLutBYkFZcfUHyfCpDAtgr",
  "key15": "2J4v5gLtjoK4Ye4tA5ijSGX2r3N9gBwU1MLKfuxZ5S5eLBovdo9pDwiJyoe5po8DP6Yde4RugNsw6bDbtG7EAn1Q",
  "key16": "2ganbWazSC3Vae2ihtD3knbpUqAjpnkZt3ErN6kA89MtToY1LZUjEF1PRbLWphzRwNuXaDkM6L7sqSuoy2zpiP7F",
  "key17": "RLsL59WFR4oZkTmu4qx4AGasaVVHSF5w59KCAn8yMiRV32Gncj5mct4yn62qmWy7L88E4H9Zq37vMsuUNM4YXws",
  "key18": "2Qrd4XGeuW9PMC85A1m4YamTVBt9qjVEVKRjv2UtsiMYVR97jebUGYW35TBxLPi328wvYut78ZyWu7tZVsvYE8Hp",
  "key19": "2MXpMxYwgHzDSApY7naVYuvaNHbZYSjpx9bSYMFNKQAPRdXYmByLyKkrHVQnedCgibk6A8tSWML1rdJ2qmYsKEYw",
  "key20": "3rBnFFoqVaLU9HWQwwRwW4DHmfevVwJh7E6NgQvwcgmGK4rssMoR5o1zicGqftYQCBLLNFkC7WopZUCm3UAcRTb5",
  "key21": "4KDEjunPumswjdDTW8sceiTpwMLqgmNdpo29WVLXxDnCCjeu7LNNwxpgaAssLNoqX2fbn66t4fhspUeWwC3r2JD7",
  "key22": "faMTpUUN9GqfgsdMiN4nFv1Zpa5cr1VqXKaJXZMKEv3BYK4EB3YTBqxnA3n8CTLvKHpgoagLfzVz5Zfd8ignnCw",
  "key23": "3uVhmXaquwf3MVzHBaqmtVn52KWEFrGqj1ZQddmP17HJqx4qQV4X2GPPWvQ9Tp55n6HwAZZD7tNPTngDgaHoofct",
  "key24": "3hBBXW3wkGpAG98iE2jmndX3yNGb8iQT2HrcpAm8Tb7ttA78RtdbHcE3sMk4dLj7u9g8VpA82W7mFfHZREkX6w5C",
  "key25": "4v35a97VFVLqf9myvh9q8vV42otjXeJBkahS39BKEPg9JbPUJMZ7bb84ariVuuNzjdPAfMWH9ZFMD75n6jJaPb3x",
  "key26": "3U93nEpnaG8R2EAzc9xwa76tAoUEGDW38rn7FffBB1KnL7X5HCjLy9iJATY9APgMDenq34UxRawP7TXxhkZPobf3",
  "key27": "5yiFcTdXxEPKzSjR6Jut7dd2gnk8ovcya33eK7TJirwPUphNPDr6YWpbYfpGf8z7M4sffKQfsNJCaJynEBscBsra",
  "key28": "Hgrq8nbocKwv7LcXwNCgxHsJSwDbb98G44nJpkYiVC5mVPMwiofqwcUh2busWvDV1Pdh2LoitQmbQjWx6fFeQLb",
  "key29": "37P9zQXsEh3RYnq5v6aN3d3Yf8WMUV2UZ2FLRnNRt92y22QEsfxnJ4cMNsrBxmniidysrNoqMervhHpLXQzNYVns",
  "key30": "55kL2JipAYe3igDLGYCce7AQrXjn27hEgB8NeaMDDThx25nvkNaQasucSVWfMU9G7BdbQV9vsG9pjV2uJsTHy21q",
  "key31": "64LSNpEvUohR5UdDdUgoEoxNGzQQbgi86s6UCTnn7bSHNmN8HiR8gvbgZyp4nYwoN4r8QnAbBRHeMxViNKxKBFhD",
  "key32": "2X6utKpyEHqFB1MaswXfEmZ22GVvRi7obMx5k138nhr1kH7s6VkixbuEo3JZRHKm23vK6hHyhbmEtaB6B9mqjsMq",
  "key33": "46FnUxzJviLQdGPTYhX4H763kqgurWhe314cDfppZaxM4c8GrUeNMZw5zThZfsndPiW8YYztFmZdVCTJmtpdMLjh",
  "key34": "Hjpj7zEmvTaWYKiLa2c1qMkXJe4S8Mu1nRePEewUBTmirD3mrpAGWY7BSDRRoT9YLJD6ALEDUYwyicaN5jYrmab",
  "key35": "5rzAM3vS3sDPXwySDR54JGacTrZKMpJ7h8Fa5i2x3NBAMB9zzBckGwXvdub53mNpj8xQUyxgeWotRab67mEcR4LC",
  "key36": "2xXrTH7fJxwjE9YAxAvFhZQ6gWBziDRUABDdQ5bSeqyqXEBHDNGt2RhwXv54HhmVH9WdcyrnBx7HFBpLtayq5HPw",
  "key37": "3ryUMW3AkpSmUeCqVeRT6iaMvCkfinaxbnyqfZSfXpqiraqMzL24Xxw31MTVMtobzLk2AL4ukTDTWmZZ2TKborsb",
  "key38": "R8Fts4MLkVL6tRY4y5YdCLzHJMpR27s9AzrCfyweK2CFJPYuhZvkxunPMebw3BihzSdobZS1KmYc1iahFiPBqBt",
  "key39": "2PdGTPCfoqPPRaysPzabbLU9ieLjn5xKVoP9MtUbpEFLL6Fhi6UqS5ur8iVU7VFJvcq4LaewmyoaDcYNzjX5WYXE",
  "key40": "3vBZEcjNGkcsBU1bEG7dEJ8t5TWy3ryGxu9oAJdq8Zhz9Lr9Me5yzwkCgmEF2VY4GvLpdkXQ87J81pf2XUsuXGUB",
  "key41": "2h4imRMpPz4yyRz2JSVGu4zFdK3pSTEC3YdFo87FnH2ub9oFrQZJKLBGVJnKLF48Nbt3DKPk3LML84WdtRzDmo4T",
  "key42": "21UQoPBYSyc5AnM9U3gSsyWY56kNeDaAPqvYhFEzkGTeNjXbo8PiNaaBNGw8BunVztnHSmfsPA1eaSTqFJ49DZss",
  "key43": "MMQsPPPmnQ5HLmNcRHbFtF93Xrkrc1YLdw1Ri93JUJpxULXqpoJUJV7nVzsyNckqMVuy8ACtHfCtkB8g32mSEzT",
  "key44": "2UGwyxfR5Rb6aGFYTb7914LULZYPco1EK7wEBAWwBAyumWJyiPhUPYv9hVtsQiWsBMatX2dUAm8RJ3MaqRm87bH2"
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
