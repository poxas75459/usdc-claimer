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
    "2LvrLy8F3bshst6ehWwuhcPXyS3y6Ck3nQ7qBV4GCVoNyW2S5Tw7Gk2ejSVfgp3VXjfA4ip3qNKSBmXsoCkEiM8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eQBzV2PVXNkHFmTpiCsopEpmX2ieuWbxFt37JjYELS2pac7H4VFTyC4i8KMtL6nyGcexRUU9k4NYz53jXW13wVh",
  "key1": "23oHucck5hHoT7nW4KHixEZdXfXE8tvZ1w64iMhrgd7PY4wfKVWcQnPJD8UChpyaKCXbMVLhXvc9Wkw9d5HQx7k8",
  "key2": "wpbHdofMcSdALyfQpwVByGZzsyj6cNXZWE6orwhL1vsofUQyzpMAKhVqU98SMJuFoVF85SpjkjfkDPgGocvfC5j",
  "key3": "USFCvQ8qbMivtC7jruNCtmFM3i9KgxuqfrGhmvoiv42gMwbHKGTbwav3j5dWqBTW1m9PoZkrJbCbHYzQ661zofE",
  "key4": "3d93mieqw5kAt9yhaQje71CtPvtECW1Xg8wEceVSh6QtUi1JYqnVPnLeUBE5oZ867wZhqfV7ADwDpaPpFyx9yfqQ",
  "key5": "5wfxxHYvfWjcoUbKvV6qVjVQM2gpQWKhs7qrRiVzztyYCgFQqMDFmyoMvH14DUDwhoBPjY9638hWu7k5mz7eufJw",
  "key6": "2GUsRfSjyej3Zet6bQxUaF88goSy2BxNK3B14DBdcV2B556cyS3AHQxDcgqqJvK4zikAyE4qRyAkVVnyAHYF7QTE",
  "key7": "2E27DzVCwJJW1oNp7zX1xVFFGGKRUueFhRGqze5XGzy1YBw2ptHQrgmyWe5h9JJFX2rS4SvNPPUnwKzUVgb6FtqQ",
  "key8": "2TCcyHHDqwM4A1dVzggL7VUZCJ25QwcLXucU1zMRg9x41tRs9eqVGkcgUQFH9jxLfqR9PTzyBWdyMWeSEwX4Uwfz",
  "key9": "5vwz64A8UXBn4JnBNrwXTBsqkdChZDSnw1bD4pjoHy9DuJ2Cfq8ygSNa4NN3DYf1njXVJbfNkQp4bSqGCfhXmbJX",
  "key10": "41pf8grG8LUL3NU12Ffkz7uJ4Losx2Nb1ABJu2xzQVP7b14oMMM5mhoUJrx4TZXqVuNrW7PE3KofaGVNijzL5jWH",
  "key11": "5xeaQgJkgTzZsQaN3TZB17oZJpv8pk8HyLgHxw1FboHBffpNFza1abiHDk3xxx7MJB8F1xvDS5HbA8wVzyq4ocoH",
  "key12": "52PcwNVR9sfmSAbAfmd1kSa8UrX7zKTReF22MMvpYbyzRHDoTxzPAYJfvE56uY1LVYGdA9SFBTk9vnjvEuLireUm",
  "key13": "2DbpMdMigZfg4YLz8k7qX1SxYYPQnnK45mmwaeP6qxs373TZRkoktg9my71xkscZUaGQqEKanj5NxBm4nvnsqGF3",
  "key14": "5y1VwvxFh85A77aNGm61YnQYTPMdgz3XYW9TSkxC3Niby7KiAXRHouyvCyN7trqRkChJXbS7FT2x3bjuT7CerdwM",
  "key15": "uaFHjbAVvG2YnYNPhAXZR6gS4CxR977vek6duFZRynrHHbJzETHNYxJ9m3fCm3vGKoTEMqbu5J9faWYUMQzY1jZ",
  "key16": "5odgcMgUFzMLVoWp1FZNBQRdeiNW1v3XEi6iBzz4uPcZowNprpMFyziK9xYNbxBq9E2q8spd4KRsFTM2a4ZhFYb7",
  "key17": "2iSP4ZzthKjqaXmXJdqnYm9QLHiSvFtMxwzCA8SNqJ9ichveZzkjU3t8nNVNDtDEMtTviquBQ5kcU8dGYepwjszL",
  "key18": "5MwQB2cnEGYKCrqfk7A2gE67PQXJP7dbuDnpAtfPAVsfEEVhKbtHAzv4XJ6bYoH2jFF3LpbviXNzd69UpvjR6ND3",
  "key19": "2TCM3cYe7N8gGtsx9Hh1fUrdSqdzVEzE3m6ojz36oDLKq1dRJJtdLMu7kEPZ39kCJmZZ1mVgUyWFHuxJN7HhqZ2J",
  "key20": "2CTtugeptZ4H3AeXb4TQqmPTNd5pLMWng527rWF1ADFoauMS8mkJPKZosnBsYwR5i1kXYNjw2SwCof1odr7jR9GC",
  "key21": "5hPyiMeyUfPxM6fqowNQoRFFmwpbcqD3B9Ja5416zQjnXYfVNv563Q3KQ7UPhbLi7YuT9MazzMUYp1nTPj4bu2dC",
  "key22": "5q2VM6Lgf98X9zufiokdsMCsWpjj367K7Jci37pbFw4yFQX8Qa1rAaBiAT4CJ3Ud4tYEr1ijsg6iNZgUqq1gafqv",
  "key23": "EajfR6tGD9Ckb71oXsNce96dRuTS5RQDuTJRdobznv7s7sGsVk4EVFztx97JMUkyToVph5dPoaYB2iYE5bjcxDg",
  "key24": "42StLkBM36PeyYgb19bGE1fvCSWagbbK2BgQ32AZtx5N3RKZ75xskvfqpRYtjg1srNi555mKjQN9Hmf1s1JiNVFU",
  "key25": "2xYCC3DTgBLz86mcM4ybbkZPyixdq1QiBbvoMcJQasNe9xKZ9kVXFoTq9GkxwYm6Cx4XL3cw5WHn4yy9aXUb1LBv",
  "key26": "r6XfXK6goU5udY7YK5gNMKpbf9DgSEuArafjbzd7Sf6M8fqECpuiQan2GFaX14hpzxZXRBjJDxUeas5Y8p9zmMp",
  "key27": "2KDs5Jhz1Kr2ZAKDkjzWcERNtivUwo5mk1868tYCZoY3apkVvhKcQBYeMxRszNKVUCnZpwM5KPgYbXcktjFmHdBd",
  "key28": "5xyoCxTqW2Q4D41GSPgkTEhtnj23KQWeHzRbYEjbrNZEmku22gonrS5pUuHLLMvHya4rTbEoEr6LbyCCy973ahJ1",
  "key29": "5UZbRALrAkvdJPBge9fSK8xS4U1hTNkHRwVo1Fr4RNBHkEXsPC6CR1tRAYAwBmGWpUuPwXSN4Sa51iBBjhktZSTj",
  "key30": "4KBLtQErEJWimmDT9YSCqnsrmc9tzJS2GhhGRwmxt6EHqzvPhPwNjAmVKY93DbP3cqc1dLr8MHCBLejoc7CLybHC",
  "key31": "3yPAoA9m1MZY3EB2HpXHmD3XmH2vgrbUJxipuFSQEMudJJRQdDCoxEGM5xgV7PW555VbZvHfmT9vXNdooPxEqjET",
  "key32": "4T2dfbPmwWBzkmYPdxeDXUifnpBJBZvhse1g73dt7H6TNQjDAjssQaN6JAtrSsbpzJh7pRrHibWsxUNdVKDVyoi6",
  "key33": "5zepuekYa72CMM6UhBuDKdjuoLWaxmWRHdQ1HuXGwexNsQSjRc4fVHR812T9XpWt7ZFReM858RNecpadtbjdXUPQ",
  "key34": "3p9HRtRJ2XsvaiyHZiYMgCf3cXt2qEiHF7cHrfeZksqiGrGJzXzJxa42F5n1RFBPQLk7XQRinQrnjo3zLbWPZrEw",
  "key35": "3FPMSYtmHAnVKA2ukggiGPPzaP6yHJ8hvGNq8RL3siNvjyZCEMpZYNWK5yyDmqqCZ5hZUnjk78cZvNnsVLjAT9JY",
  "key36": "59rMRhqtP1E4nS4gCwCCrDj44ezHbf4AMXr8iUhZM7UY4WVoz1xi7c2mwMrjfa449EEncjsoYr59vA1qBMhuRHSi",
  "key37": "4sQffXvtBsaTtkeP2nWLsTTuXW4pQt4pFkfA5QN3wmALi5o7hhs5h672wGfmuNzhp5f38nhYGQ6sFkLz2iWC9tfp",
  "key38": "542QoBEu6yuyqEdToGDW3NSnizxpNtcBDEG5wn3CDm1YAVdvQVUUjHH79WQCsDXmLyiXetHZyV15fx91DiHEBvBW",
  "key39": "2wHY78KzwQaUEeh5ekY5tMecpLmm8jn25C9Cnf9q786iGHSUm1R93bjwvi78tEAcNLGufmXLTMMn5gUJLauKuJxK",
  "key40": "4A5VmH1nKGQNWRLMgerk7uS8ZDG1sSWTtiD8buZ7UgZ8wkyJ727rB3Fx8xvCJJc8BdYgYRJowV8Na8wGgVDU545S",
  "key41": "2CmvWqV2b57vvxWr5e4xJP8M8TTgx6WqHs789HJkfj46KwqzBUvXEKLjPeaWpDATvRvG3Sc8vgFjeLDGNtpUjYiQ",
  "key42": "4FqWcSKNrBiuNSGhUr5bk8CHHycNgKZxGdLJwHQsbi6sAsamQBVtH1xHK1oXUEhQNuKb381fFwuMkfHSbfZQzkpC",
  "key43": "3V6eXpnbxmxt5sebwcwty5jHLPCM4ACCHdhjXZE3Rp8Hua3KsJeTLdzpQQgBF8zPSquau9Nm2UEc4ghsUJ3xk3ZV"
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
