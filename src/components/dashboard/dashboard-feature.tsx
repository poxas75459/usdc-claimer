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
    "3hyyLAsqeQHFaHxvuxLZPsrUcVaZa6JYaKvoXtG3LYamcTdTovyhddgDARGPmwWAxrFe1YJyoYMuQZ8kk85M7ZyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZQKzkG1WgcqK3D6keBobEhNBDtFPwCzUZjxnZ74C8wMNp55QLyHXKHw37pVpXHjJ39sv2PZfPPrHqB6oMDpMsv",
  "key1": "4j5DFW2YA5sgYQ9JYmdeTBFjD111apjo7nhELuWFrE22DtA7dzRzenKtgfmgxG6HnJ6Uc9j28v6LUFcw8RFuRvAc",
  "key2": "5awhDMRh9VGTFTgLkKBS32zJJmbJJSp6o2ZmtfhzJgU14PT1y4FyAmTdXrDQLuLzxyPSHvjpWQ7edALxkpX3EPp",
  "key3": "5no87UADhuQbFFAoChJGdk7U8D5E1MHXhcXfwcSMFd5gKD1k8kxzsQHBiFCpmB49cZPmdiGveBJizarWQo1nn1hu",
  "key4": "512EygFC1Z2peuySHsrbhe1nPLF8fcenL62WdHdjStBzhvfHyTPGRiRoBQDfZjQwb2Brqd8Qm7hQYQswYPV7eLiS",
  "key5": "5LxmQ3TWT3nCq3bzzZ2pWrPjMG1KUZ34v9RsmUrVmisidBsiHgrn5PkmoaYkiC75dwbTeeasbXJJLojJKW3bgtGy",
  "key6": "3m3ia5oTAJKZFqaSdchHpMzAiwi7wEf2aqK14cfkZ79cyFMsAxyDtiJn73Uq29WHU49cCydwV8NZACidwXvhQLaY",
  "key7": "2dkX2SoS2VYy7xdoHWg7WYCyyiFckPKCdvgPgo9YTJ9VtwSNczEB39UcDai95YEA55nCfpgmEF1r7VRZydh5P1PB",
  "key8": "AT8hTmBXArPjHvhdUq2A27v4cbpfBShF68o4L6R4K4qrf421BkoYdfYcLKnGV4RCxyhzK5DpWMVo6aNq4ivmam3",
  "key9": "36AhZRvSoKhAhkbejkz9PprRnSA9TQ3BtmMcnu76sCcQ5D3DCouZSPxQ4cU7Fxcka3FCBwBTAdqCrr2HMByVom6h",
  "key10": "5ooJgRt1stpDxKB18WE9GhPPQR63tiTPWBKsk1uwD9BneLPcPPZevfza9RfDJFyV59m8tFFgNgu4pfbgkNyZM7QC",
  "key11": "3iGT8Vc6gmWbK8BRBLhDdrNBuvA8K85YmVmPUXdyYrSDbt7gmohiHJrEYF5CLFhhgeejtBHVuiDULda1EU2L7Vjg",
  "key12": "ymEhs7jMGr7yfVk5L2qb4BUvyr5fmsivouDeV7rCmkBWnSaN4HecxcT3Yn2S4GhiegjE5k5j9opG9GAZinxiRJN",
  "key13": "62W5h8piMfwM4kPFoTWTLYjYp1swqBg9icTWaWxz5vVtq51bL9U4iLT9iGwz5NMgUy1mhJnSJs6RgCiQqfrMAHDd",
  "key14": "2Auy3ZJa2DVYUW7k19FPrQwAzwQKCu64bTQPWryb5FwWU1vzKHsaCJigBo9TSNdE13VuwSA8EVrSMErdf9DdzyTh",
  "key15": "HjXbb1iZSSBMpZYQWg5N8SRuDAX8k96UZzsRze5k1xfPFukfvXco1NEYRpQJx6qEky38FS8d5hAXDezh81jcvqH",
  "key16": "3jAc8rJyX3XMBurm5tKPRXFzKY4iLJgGizDRWCrWNK5VzwXZJYbkw84s1sydLkJjMFuQFUN3Vn27cAs1xd5WqiMJ",
  "key17": "4JejpRYs7mDDpMonN6hSi4vThfJpbu5iM75USdELTNZo3vCxDzpmRre8Zk7Qb7xvEBA2zYY8t3mKmwfcrPH67GgC",
  "key18": "5zZHnq7E3pkczN7gu7jkF7FaakEpLPbSgjW4WdFFuK8BvU4Ht41EMcLdBG9JntR9wdSNMThFgermbg35TAzaddiP",
  "key19": "5eLLQVMLVP5GDvxDm8M9ReunJFcMFB9XMMTd565fa1daJqscP1WZ2tzSm6YMPHgRq9fpp63pLKC3971SXqLaDSKr",
  "key20": "22uCgKwyeHiwLceNYdAzKEyjgvywVEtRdsP1G2zCQAp754Q69E5oNh421npN5nXngoZH7EhcpJgvaPucvkLLKQVz",
  "key21": "5LYTaYjDaft6Vdy8JpnSq5nDzxLXkmSG7vBRZQED2LjQZX3WgGtFoxQW4tYWHXbcHykmaBcGymsx5AoXhD2RD8Zi",
  "key22": "4xqst28uHVmwexf7u8KpKx5rQ596imCbKR4RmfSvdG76YGBSP2ds1hfif7ywoeUVivRghpKp4Ui1WkCxvgeab6Vw",
  "key23": "NgR69xQRNhKDwL98zDRd5AYhEp91Vfj61XYyxKQvvkhB3QEZdvMvhA5ByzmRtX1iE2pHFNaMhjMbbEkiYrzkHc6",
  "key24": "oUzvBS8U4jbqkt8fcTaokNN39uKzM1Lb9CTn2zYFAxU3ovSVUp3Xfuy1WGjk5fHT2zVH2mbFjaWWqpHJmiqrLv9",
  "key25": "hmyTdt2f16NLaGfKQnmzi1psAQb4Kaw9X3oCXYXhbb2qrj3sVuetGqvuGpomnHUDhEKKafGovab3jUZ6YnbwShS",
  "key26": "xVT3L1ywwNUBGP7BzMNgrtcRVTF6k7CTy1DM3Rnx3E8BhnChtXjaLVo54tGnpq7F3HMhaXgH32kjSyBFHqBQ7r6",
  "key27": "4JAbM533j2PDZfqvTixF8WZk7P5FqaWwBcarjwC6NjXpFhngEwynNKxJUEzezzG8Bk4iFaqfzAjVAQtjPnp8bAax",
  "key28": "Sj7x4BHYpQrFYuEjk8otJhvmafxRrvAe6Zd1aryQ5qh2ST5nKfeyxkN3SJUMe54dfjdF46GE3JgTtQ1wvYfrpW7",
  "key29": "4ujTP5vfbX8GbRGMgCFwJVoop4tQY5EPqo2PXwVwQ9MEGopbaZuCuu9NUz1Ljviv253JKdueUfXeLnntF3DiqHas",
  "key30": "2y72VRacdLK53FBukZkGrGJ3z5mmR6YsVeS1gxyWVkwEWpcp7y55mh1bQmqja42TpHqizNzf1RGpj9NHfRnFr2B6",
  "key31": "bShxhcRb5WpKuDDMfNdrmhvcqGVN4TiWH7SK2PhFmRt7Ba9TJxgJHu6SD6bzTTYc6fYNNk8MnMHkLtb63Cp59Gd",
  "key32": "5uYoeU3mie94WHEAzYcm3LmnbLBAG3eo5AQdKGSXsLiKaWcS1zLDtXd7Fr35FPdt3HgMmqiKz1x26cmgqm51CbHn",
  "key33": "4nhPvxMW2xM2wgvjKJr3AQgd9jvx72ZXXH7SUJG2kYfau49MnbPE4zBuhCj6Yptrjf9sLD4GjFtPedPufQk4FG56",
  "key34": "5fsRSaRpfoYBo52bUjPsULKDMbATAjz8rr6HCG2oiaoCB1P5RdXajZN5CD2TC72DJZ43VyNGAbqcmgbLGLb1yqDQ",
  "key35": "2vt3HRu8paQa3WT7b7Jb22FKRpKGpijjhDFrfRdg6dWHfhVsWfjGhNfjZxCVnAgreUV22FUrgwEHvY82q8wnNi1c",
  "key36": "49Air87sdXMezbE3fP3vbjaDkRTnEYveFBqLhEBn99nBHnqMnTrk4QPNEJsNr94BxVxRnR9kroVsYeysL4Ms4Jho",
  "key37": "2ahRttJZaPLbWcoYN5yPTHdAzMyrLrbK7oLEesWeFsHEhA7EPxvKkp3zHVep3jY23LtQrtTduZ8yu1hoaBcd1HEp",
  "key38": "5kcYgofyWLScji6XrerKp34nXHZMSvBMgRsC3zE8wxbVbS85i7sS1HCYoDrYd6Jaq8iDbTUKc4j3meN8bYwvUMQa",
  "key39": "4VXS6uP6BcigrJTUiGiPEJivBM9J5YzM26Qm3mXnX3hgZiC75rzHjfqJVkR9JcL1tdXxcLdVWPkSNvwgQuHBj9F2",
  "key40": "5fJS6iuudUYWsh9qWhT7NcGqsdDopE5BkxzDWT9JnarV7TAYJpCAdzsZUDeLGtCdvMGmuhYbMqbXmkMAa8SeB1oT",
  "key41": "3kMuWiFfGA4PHNCjyy6STxqc7fGs9K9iru2mUaJQZQJfM2SqEczG1w2GxCry9LV95eCeTZyHWibavp8rVvyXSrK2",
  "key42": "HHpqXRXrrCE63acrDZnFfqy3oAxKaaQzJnucaFb2a9dKk7Zqh3TQxeZbTus7PJQ73eR7Xj8mcq4Tx1xgSj3RpbP",
  "key43": "SJCykvjgp4JhAnqunTbnH6SMcWCtqLPBvSthRAQhz1x2ZpqZpzzg52NtkTV3n9Mt6W57ySVpis7VHv6xGPRLHdM",
  "key44": "2xbzNLjHQepFHnNQAW2rVi5n86mofgSPqMJNn2PRM7jeNQgowfoYxSrMJkhmqZWgM62HHMZZabidd8U369q7Vzt7",
  "key45": "3nY6aajJrvigceLagEw6TdFcRMPnbK3aat8dRM18pV89SKSKSvj7JsnApHBQ1CmKwFzZ9uqspo7sxRFGnPxHirBC",
  "key46": "4TnQmRA2vDv6KsAHjxG8QPZXePYhmywMW3yZUvetfiDzYj9mJyB5ajjb7srjth7QCASeCAEkvajjBE9R6Upy9tYR"
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
