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
    "127KUGyK3ZHwA6YFHLR1G3njd3JP5FHy72HB9jqBePiaxHZBEbKNSAwxFjboZgXDiicjojZhKzt2DQjX8XCRVFsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuyacaHscDCaLCdacfQJKzpeCNRQXtR4YSTMXqvRWVfV7orcJpYPA8Jcw5kfT4XCPwC6ZyGMykpFmvALRYNCGQK",
  "key1": "67MpFTL7s9ZvpRtmFo8VoEdFxUGnyMWbeCPagn8bGVaP2VdkNo5sbe5zNMX7VqUJYmU8N4YwoANHopHoq89rnqe6",
  "key2": "2HutMoy7AqhFbAyPwwaHDfmzZM7Gs8oY83i3MyNXjWCBJ11mGyKccRCBoKp1tt9BYFMwdJVQRMG2DMFQE79kevjY",
  "key3": "4HjGKBmzzmXGe8j1R3shygjs2PrGevFQ6FbzHYHtpSfETo8xGfPTQHmrvwnLc7aUPpmMyfcJWeJSXmihxViWBxZv",
  "key4": "3A5RYvkvoyqMdpKaqesKX3N9HpkTHqjKCkLXgc6gYVSV3aLj5uBcdxU5X8uKaw1ugMQjpbq5KkGh8H7Ecmt6SKMJ",
  "key5": "MPkdDLXtZWBp4kmaZPQxkVwX9vbQtgiexVQJ5srZ25RxzNfS7AWk5x3guD2NegDQ8nk2coccpyrGFD84Pet9kw4",
  "key6": "3HMe38B6PrAbme2vkk44qCYpTvAdbSYgVNyqK5bHB5wp3HUHMgUwsTmDWKKxCQ9Yp7vmwtEcG3t6bzu3DrDS7rSA",
  "key7": "42bocLC6x64KU8XqYq1K3v5Ghf5jAM2CRLuCLRyyJYP5VzERGdkKZBBfuWNouwPQWXssBQbUsELtozgaMqiW634w",
  "key8": "KKa5JWFat4sctVP9oy8BCQ9fcYkrfTMQcvYhSZgLPmxWwBhWUJUNaVAi1ksBMQJtWJamVTz5dvabGN6iS4kir9V",
  "key9": "2AidyizVDM25qGN8JHtJ1ysY7guuZ44oEJPaBjLYNyM6AQa3u1njQjggJj4xGbkUxT2AMvB9H1ZvkrHNWCtK3i9X",
  "key10": "4gSjUv7KS1pJXY7cXiHPmS66tduvy636ESeSpJnxGZbYQj3aqRSFFaBYwASDe2VsLgj7wKNxz235G1a7a1fFPCN5",
  "key11": "v1MfnsHQH668SRLCcu6oyXeSXDTuxams7BnFoKTaV8JagVXdxnFmPytWPJUM23vKePRZFyKCQfn4P3QHrbXhizJ",
  "key12": "3dqDLu7uXFcVyLzi9uZj3dzkEyauFDdgbUBUFqEPCzFWZ3XD8AnRhivJ3vj9naesxP2Jk4PZoQLRZggYFohUzeUc",
  "key13": "2SZpb2DPSVVpHBVGQ4E2qJbKjzknVHQfrUUQWAG3cqFMxBnEPQTx9c3fjNzHUgPtFtxZrtgU7JQ1BKwdyCCdMB8k",
  "key14": "3SGgP4Xk9SGeTkeLCRU7Dh4Mx3X5ukEKWExr2cvheaAsbgcPN6a6acZZtkuEhawzk9kdKxnRCGmf2pivcTKLZiZ",
  "key15": "45e1KKPSzykHkWuyFdBh6AyCvDnns6GmWjHad9Z7YiqQ7Bpvy5NwLzCLBLKzW7Eh5isLq9rSqrP5G11RGpXebmSQ",
  "key16": "4PDRWPyGAzFcvMYpuU7aYRsCPR4Ly54WbqRGWqADJo33xnMPHVB265peThzA4um5jfaAMWbXDw5GQMPMcPVNryeB",
  "key17": "5S3GMDUW3XvH9TK3tQuP866dAS8bu2bD6U9r6d4XVJ54UHQyKd1XarUMtv6KkGNufozN4sgZSGcxCq3TSe26onSC",
  "key18": "2Hg7RZES26ofbHnVnVzcF7MEPSauK4CTtLkF2C3TgUuZef1AvS3f9fu5EVBXtJPFwhAKD9KSKkdZS9urSpDeuaKu",
  "key19": "4dd2wJSjAdMAdJKHntukmYscHFWXeGspuGh4Th1aapaH7ybYq6MT4zCHTG2LcvUnJe4SD53cMyr4QpahQqgS5MpB",
  "key20": "4cJAQ9nkpqPMrXWwZjj3JF5uxYP61LJnpewfpSAHGTsrZsdedTQBDzxGvV5FtG8HtBtywJVXLnxHj4sUxBBkxpt1",
  "key21": "2pUJAuvZwLasSqMhzHv28uHxV5e8BBSoQrosrHYjkpYr4re3rgSiJ8dzBZAnfyua6ZQW2xCB9wYMFZme6XzfdWEg",
  "key22": "4EMkBzxHxK7hLURhypQ5U55AAzW3t2YTQcPFg4wYpeX9X8HtSujxiP3sBbNkipgKJMfvUkoAo54ZTMVmzAWgsk1i",
  "key23": "4fLvt1RwNhcKE9GDwxiBWEyotitEHTsUh2izBt39iBdjQs3ybpVYr912TTiuB4whnPU9PEH1t7BkDx5zhnBfiazC",
  "key24": "34g24gTzey9cjiyJGKZau8ipKLDjoLyFvC5RGSAxbBb48wkNKt5TF6Bd5U142qzLkH2HA5NhTGFTkM2xXVaCUmfW",
  "key25": "4fv9xzd99y2Pit8Tn9i15dFcPy4UovPUx9tEnfrbynXHF5NRGdcApY53Gj3GPEw8htr8gtiiRVYov5jwfmojw7fZ",
  "key26": "48CNJRTspoEtW5owfLbatuKe8eGV5nEg5qizVdWHu7vBbQU4arR9Tz59sCKnEYPPDKzmYzHygz17XnjusRBZQjMC",
  "key27": "22RJ9NRj9y2wLynKZUSdLX1QFsLXpUWzisUAKh1LdV6F8bt6e6VoQUJ3AZVuRmMz9eHn2ALrhpBTzGHq5dqDdMmy",
  "key28": "8wF5875R4JNyQyp5AWNjM2aaAos6UPZ11ocNfLe6CXciV79TqiNz9KZscaUP4zXCvoXpoPo559BotcMQhcQ3qVD",
  "key29": "637TY4C8dBc13pXqWmvvJtmVi4aVTb6fVe7fnV8iNiQWLH7PL1bTXH9RcSJ5MR2nPqApjCAQhGFTTvyWrGsSmkhZ",
  "key30": "2gcYa5BsTSSD6TiiTzt9QRwuRgCn2GM33fC9xnqDi9d9AYiPvzTd7vwCRKsYLBjnCpvbNh5R7UXiVEAuvxogLRzS",
  "key31": "4E3ozdo5XRE6GR22cJQdreuN29fZp5F4NmhBE3Q4kkCk7ZTTtdXqtFxMSHWWcwVKcX7jTLYsuZCaQKyaBUPfS4o4",
  "key32": "2WUedCAsfEwTTsAgR8xu2W24BWPDEk2AWccd5DTLqUMsFkehE7zxukojNRHXwdQEHj5zYcSs2GGLW7qN1jHCTGay",
  "key33": "3s1Py4P2fUuBRyanBiZtaV89fiUjbDcnWiijxu7yiaeK7bhP1cFvg39b3SX3mWoz5GaabXXLQgrgZ4WJX3g8PykF",
  "key34": "XWn9gjZZdDb4XBfdZZqBbpshRn8iwDhZzgKXjhRj8xtGGM1mks7xQ3ctvojqtzt5unQXWSK8axcGnRPn5XnCShb",
  "key35": "2xx4nMeH6jc4hkDA7zSCSp764wwA9R7UJC4Fy7XTkjBxfoZHjKp1nceww1TBuD647FPNWzvNi5xQFXXypRxgnXUY",
  "key36": "xaGd3teVXYL7UcyRf7mid43ZLkmc37hkmtEf4QSYnWGpddiftFwN6DquHX9aDSF4qW4yrwKGUND4vyA2dLxoKm4",
  "key37": "39nbdDdZz8tnx3wGh5EGeMszHtgonq2oFghX1ZQa1Nie977q4NKexq9VPg3GoGuEChE4ZQfEYh4tpgP7FL9YWoau"
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
