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
    "57tPCRbWYQX2Hmd2ziFdaai21qvMyPHgzZUBMtNJmjJWjWSnpWzouYgoP2RWF4PNhrwFaQ66aKnVeP7hNqraBWHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LHubKTCX71ngFhYqCrchB8YW2sCaC3tG7Y3aAXTyvtGP8AJLLZZxCooPN4xXGn5rvpPMHNWmVqUG73WFJhqSgpC",
  "key1": "2WsfCnSnASM5bE6mLqQ2cqA8P7McqaeDXKAco2y76bXmTC35jyKKfz2guopUHyEvdxSfdLuviU4t9aJto4NcY4UL",
  "key2": "wF8xFZc1ha94oqtU2nJnuqkZRhkcg9zLkZi6K4pR7gDfjMKwFQevWLTwzHozRj45GwYDudbxD8apk6ck4pdHkBt",
  "key3": "5QN2wDrWRAuMv7ahh9e5owKLJtdqh9EWvuJPed6uGPZ5WtSKhzsxk3qo9JibgBDdCKYtGzi4x6bU5b1uCMgctE2f",
  "key4": "3h1VphWvqUzx2w8Fq5FGvvW7Rz2UrRTLy62k18oeHSQ8QpxQPTemgaXwsWhTu34vEdg6rxxKMY2nKiRRQh2eAsYD",
  "key5": "5pko1Don53dt69fCGJfuweknrdhqjjknN8fepF8EFjq6KPBgfcqJsWzZcJ2Ud9DKNakDtaiExTR6agZBXexKLqub",
  "key6": "3yvRgY5TTRhZqMosQ7gfbXqFfR3rJJhREky92ps3tQVFadjuKvsAaRtrxDdjikkFu842SNEBkPW8D55mwasmhqkF",
  "key7": "5ZYxgpa6smEpUZ2mnbhe7yJuz8faM3WFA1kP6TwcEL4bmrdy9mq6F9aXa5XMRJwoVKBBg1VUhxH6LFMwWg6s5PjL",
  "key8": "5SnQcNuN7cMiQjXhdEmf1TQ3URHsjC6vjqgKuQ7VBachsJKn8DhSoaJG857FsXxpWKZT2qvJo1SnvWJRsSxRqaYP",
  "key9": "3gRgcihMtt1yggPFC1eXXhGUT7VtuNgSyNng8dEw3SRTvum81jty9JEgLj5zKzJubR4HAAdRxWXsXgekwVVPs1tJ",
  "key10": "2CqyFxxCAVTdC2RxeHuBdh1S6Wkf7GvceB2bWfCKYUSVA9VfJhi6h8EcrnB82E3oFqSvLmdwzbvWm28WMbrcpJR9",
  "key11": "2T1Rob8nECnmf1GkmRNSWqg4uxNmuah5FZq2ztaiQx1mPnYdegeP1XoX5LPkFaJ7GnawvZE2vGc86PTHvHwj1kW2",
  "key12": "4LRP5i9x67cDnAzvXvBbuMgoANy53ga3drHc6yM3NUH2oaJx6eLLUuZFomiBf6BmjPTpd7NmQsGq7rwi8vhwFL89",
  "key13": "5cJno36nwE4cgEMuS2wDASvhoV88NH8No4BD7MDkYSHMD3pcBu1joUA8fvcM6ELMbx5FodwY1Js1vjH91cJDeMsS",
  "key14": "2k3boStcnQ9hABXZAE4MuaZVWEy8r1NVUYUX649zGxZEBZyNVxE7Rj9QGsuDy4TknxSs5xnCVuALxjy9GZ7VrABo",
  "key15": "4YTW5t93MZxa9ib7XFf6RrbT7ocZu1MX1eYJhAb6RAXdqXfzFUXyme7EfXnHat1RJatULCyPP773gKBduvFWqJGB",
  "key16": "2rws3BwN9TFTUqhdhJTuMN47ijzhmxdNRWoSCVgxy3yEhrMFc8RJZyL17vtAktYLAvfZjePQorhBELy67jALxFu6",
  "key17": "27bvoVAANp59VqrR9YBD5F2jTNCFsZGRJ87JN3451e7cKxdRR7KHZe4JEdU31M6fJ8F4fBxtN7MRmZPzh4RJ1A5f",
  "key18": "4f7JVoZEN84jg4FcRtT864Fe1duzh6AQH7o7snr2hBLoQ1NvXqU1p6HZrLe8rFcGtutryicnnxj39Fx2bbxdr5Pq",
  "key19": "2BK9qUib2uS4SCeqjVXJbMF6UxcVfPhpMWRhQ2nyP4X3GidDb4n94G7BC3xdUrr5Fm14wfBcTEVKWYQsnr8uFiD6",
  "key20": "LhyksQ1fjUe3DWDjKrW18PueK6KHcZ3UWA1pQQtk4KeBJCyGeMfcD7zcne8jzzXAd1nY6JAJ21mFNz1fhoMNGEh",
  "key21": "62Jb2MTcQYHUTiC4FVXDBGa6WWmihchKZLgjwUfZZAnkHaJo1xsRagkLUvju7ZzUS6pmvZFD3dWiJEVaH2e2oCXf",
  "key22": "55Y8yRaRHENRB54cq7d9E5SCu25KyYjJes5KHT9WK9RQN5iJAyYkeVKutraD3Ln2EhpBRQ9hAkC9Z6DppXuyZi3H",
  "key23": "23MSQiLtPMy74pYxSpucY7S12tm58rLtqP5MgXEkzGCeTCKd4PpGxMLJ2gESCnLfCuHiVWymX4eQno4fvntmC2Ni",
  "key24": "5UioFWczFuw7fHTV1JEp6KzkKFCEY4v7XxTB4RaYZKZFC8a3oEhg3e9QD9UkLXaLQ7QL96iNfnqy6YKHFDZnjiNk",
  "key25": "4fAS8k3jHkd2f3Rd5TYWMMdPqcLrc7SPzXS2Hg49k7t5cP1dNqewXsFZLJZug8ivEaLcZY54ppwQU17vYRpKcXH5",
  "key26": "34bjp4f2qcCwAdZ1ZnppAz1ViGpdhDDhJtQLWihd6HSf7XE4qXHGoG78PJ7asi77QJLy58uXC43Sxb7d5wwbDVDi",
  "key27": "5Gv5G4s4ZQ2V7nqHs3iqNc9Y8ooSiKiqgaMAHt8eXPtXQ37UKZsvJQUCicsKK59WzBQjb9d1KcpdNo6mABPAtn9T",
  "key28": "31VqZRaE3t75mV9QuoifusGcBksGdKpobWfaUA8VvRfpSTkraFk1spKR39wmEQK3xe91SvHsgadTqRXxV4Kh38v5",
  "key29": "5axbHmqtupvuDyF1x1wB57zUbcfNYuQ25qHUYJmxfRFEiieinNKS4Mdrce8LPvKhqj6tvKFNsZtQeBSsrP6w1r4r",
  "key30": "5trVB79Gffpm4dzqk9krM87MFLwsTYPdRt8JutqvrL4ErwRvq4pMVNy2P339wu8NH3Qni8VG6qavX6rNwxMVy3yb",
  "key31": "5mCiRt83Q1MeCLt22wobPECV2hFdAKFGEEAYNUzZkF3eSC6bnjdCs8XCjDKJFPf3VUxDpmcseREX3A6yt3mQZvxw",
  "key32": "4YeRvAE7fJzJxtoM5cYwxn9crggpKBQNfiSuT17A2hgiwrfU9NCtHo8XWXcMD6huoNvftJn2pRgiN1MrRe43Zmt4",
  "key33": "mYNq2Pc7rNwor11CmqV4WFQNkdygoiAPJeosVvchxTjhBbmdnCjNiEu5ahqRD9ztKfANkHSt2gCwc4acfCQPk8r",
  "key34": "4UwA2Bo6q2c1zavMmt1G7yxtqRMNrnNkXis4yjXQ2ryCv66wGvFkrFy2vZCQS6vL7qynvMEfuvGJnrSatcRYFHnq",
  "key35": "PgVAmovvLe8hmj1wa9AY5MpuxX7o5k1SdH7uXHpSFagD5SeMAX6MxFSd97STDniYVfSEJAG9c91boJmFLWJtwsM",
  "key36": "3Zp3k1Qdj1GKV8Nrj8QFSFvw281c7EmMyghfz3p2b2osbLnosZRp5Cp8Q6vdCWiP9c83RL2AxJrUPibQJmSo41iG",
  "key37": "pqgtjJ56GbE77HXw2m2fZS4kdEKE5oBMaLK3cQEV5LqJU3CUKAqYXsdVcKZmDS6DUdg3WA5KBZqjphRSeurrDaC",
  "key38": "Z4o5Yffy2YRYzmDsXJ8UXeK25t4zymhBmVZb5cpR5ynrZVPMq8yXSPARPpjSjLAcRURaaDodoSA2jRQWXgjbBjW",
  "key39": "5kMek59hi2gAhmuvFUv6r5CVXXmm2oy3vML3tYdySjkTLitL3x7Ah9vX6VsQdd88DXsUQSXJ5enYdVJJnSD9qxNs",
  "key40": "4Vy68Th1ELv8FtiJnVDaku1TRcZKxyijLH8uvtA96TZFbupJk5Gt2CJtuKeBsWNgxbTarJGBaCvd1C6uJeyxiG3K",
  "key41": "5mHJyJa9RCMTP7kqA1qfLVRjNfUwFoMWuoaaZxQ3Gp5TDqEEGSjJC1QbGCgwNpbC84FyTyyQze5YCevSWk69jJoa",
  "key42": "4df8w1WFBWtk9eVzTcxvqGF7KtBFZNJSpsxkC54fzWoZajCenwKjiYns5CoghBBnqXXu5eJtezzBKBw1p2Hq2cyH",
  "key43": "5JB14TyH6ArbNEHgwGhWkvfrXwznZjLDfMhKm8PBi6b65NLqkpEWxDanMYfMioNMgEw4ftBCLpSop3H7XDKFJmUh",
  "key44": "31DjfpPCKx66LTyuVmzXS53wzCbbX5foyxMU9FwcbR1PNbeNKriMzHtimxxRBRdy5VBa2Dssi6Tt7GAKeXV7M9B1",
  "key45": "4VymYoXKTGqirYCUy3tsWu7QEbjM5r5ksp9eDwPNgxLLrYjymvFLjdEc1q7Tb8NTEzV79PYktkCfrH5LcZuUCvTt",
  "key46": "3UUnZ9P7bSjL6zXJ4wp4QaQK3jG9yYXWzJ58mm6KfHfPr5bLywoFcWTHc4RhPRpXdmbXKw9U69EYwyfZoPwDSmYy",
  "key47": "2LUq88xpQ1gYZV6Jp1Fdu1mjCRrbdSRQpSGyMMgrLuoUj8JmwtBkiYDYSMBpUqicJpAiGfRu4dWcS6bntgbaRQ52",
  "key48": "2tWGVou8esHyAvqwWPjynvTmeDRzGUZP1Ft4VgWco7uGoo5cUoYPD8jnqHw2qKo4ab7dTGUB7mqsqivLsoTpAVv9",
  "key49": "j8xNGi4rAGMph6FbZnnH4mvNmgts7PxFU4N1CaFPNGs7BjvuRn3MWFH8xp7xSEX1f9axy5w3rbAhDtzExAgSAqZ"
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
