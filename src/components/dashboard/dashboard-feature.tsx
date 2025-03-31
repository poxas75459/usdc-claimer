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
    "cas6436w8YTMML2rKFnifXpvoVMLjdqT27yDNuoLcxjCCETukYhu36NCrp147ZVqa7SSUQ9jmS1EZGB5RrCvaY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZ1B6pGK74JwXhtNFnnm4a9hxD7hU5oRafm5HWy1XQ1RLpah8Quqn93T7GfiRZgZYB8f8CXF531jGxmi2fLZyAW",
  "key1": "2aMmzfEc8tVmfwPqyCuVWDjVpLvxRiPpC6BKkn4ai6q2yvujfCwgdC7EDmQ9AsqeZZrtfRzbvQAmJMJE9cPHREL5",
  "key2": "4qmGPRDpWKn7Fg9Zf4qBEj4EH6oHb45BoD6w99sWtpirU8Xi6eJAFVe99XKrCsRLvUbZMnWHqKsvUUB8GZ9VH6Rr",
  "key3": "RHBqtAK8KAbdGwFuLv8g8WNa9RUXn7abo3AVg8ps67ZyDLPMPwB5NBSjJ7roKaH1NZDyFZAbhSh4HJocMEBmsa6",
  "key4": "325in52JmGhpuU5LMs2pQ8rY86RBajpuBNQfUv94HdiaKchpHqWhHkKWMkCfU54Wj9zo6a4jwzxxZSnRbJ3J3Pqk",
  "key5": "51313pP1EcF8VHqmPZbeccFoosc99XPQkKWCNHWwQTeLcJYHHcvMs4DdDpMDdQ7szZTA1K1BdPb5Trcx5WUY9vno",
  "key6": "55MhSZ2UWSx5F2Hbx8eLEovGEqonrrC4YusNQcXCRoJYQkYETBjBr9HF14ewVu2Nr4ZmsGz9ANGoqBuWnBRRTKgB",
  "key7": "HPWnSwht48Y1RHHhZVPUx1x1ERbmwNMPBv1txauPz5sygktH9bQYj3oQLM2NykoDtXm1Uxcz4X1WF59eCwkycTa",
  "key8": "432UJQobxUVVuCdjGCzDbvNqu2rQh9VdKE7vASsVp5GiLhHFYAaj18Q1ey8vNAWEv4YTxa7t3aGux4ZGR68HoW26",
  "key9": "4Mugfqsmf1e3pJJxCgpBNTjaeA3RjL5habFbfzNdtVuUypjCeoedykh8nTW5k5Duu7zrdrEoxeXUi1n4jiLxrp3J",
  "key10": "59HC6Vn6RvrP8JhR4jDuPw96q7ZbZ5vLBvL1qm6SrLs5rReMtRPYseB1xGbz3v9onSNchr2iMMYudYRphcaLCVFw",
  "key11": "4Bz2tWwfpWwWCTYe2CtJu3iDsJ6g6PLw1MSx7wrTiz64cPWzwhb9j32TjpGy6ehwmaPLqkquomF8dyryFCW8eikP",
  "key12": "3ceB9AtnXvPYbB1yiKgiMhsPiXNUohymhsRSiYktVYm6Td6tLskg7kiTnkc7Au59EwiyezDVbr5x5Chh5LJyaCCc",
  "key13": "3XiuT1TAXyRpxF9EGXX83aS9PE1KVXKruBpDhUDtuH2QCVyu5Np1Z5XY3KAQ7w4kzkXfHGE2WeBwiRdQot3LJgQU",
  "key14": "5dD5dCzvtRjvKBJL8ZNfrx5Gxs33iKNX71JACpEsYjMZKPRyqzfLoZwMBzsivHsJ2jngSQvbsCJY54YsczkbCawr",
  "key15": "2eLNtywfwtZt3x2unrYKPy4ZkQkrs6gtgVHPkH9kFz8r9PzAvFrwN23wKTGFaaGGWMcxurmVnL6hhwVuSK6B4wLK",
  "key16": "5d8KuhjBmnLnunN9NqdxgJgjstHoq4QS9MMnPMEUn74gGXubrooM1HbTrfirADZBf9xacLPXR6965iK5tLdKAapL",
  "key17": "mv9g6aHH9aDF6K1X8CnDPaW9bSGnUG79HMPAAWaY6DpJoyEcg1J3cVa49kjoqMwGNp7uognpoRnSKM8tENuYgTu",
  "key18": "46ddFfXUA765VRnAcp7RhJYH3iPr9MAk7mFeng7Zpcw6gUz9WP8L3SthKjqak621nzazLwESq2wP4JTpWRNBJbaK",
  "key19": "4kguFuP3U4Trvehc5kMqXtvMtSFtF4Jo2dFaoTskZbRctK9KzCAA8AXZiaHDYRCqP8tRELPcnYNRsoXB69DVvzdd",
  "key20": "3jHhdd74RhbRjSTz8eJ8yLr5GPQxzGsPnMACJysj5MHwCSRoupw7EWjPdmaXovEkwf9teAvBbUmP7fLENv3wPqnW",
  "key21": "3RT1UXgAYjECKZyuvoNgMcRMrGrS5TRC7rNjg6soZcvjC98mVixBp7Ai1ujEdGW8D9NpSznNfW2uUAM5by1Vjw8p",
  "key22": "4eJ4EGDgowMC5gpZ74CvQXZRipBTFYwGLCvwhBhXsoZeYBszXDBf7oK1NsZZkGt8VoNg7a59PTAWHkJZ2LRQeSmw",
  "key23": "yhSFYSGE8HtXJt11aRfmDecG2QqGryKhzqUqDmn9JUFFraZ7dswiQUCkL8wXAbzPWEkq5cJgru76JiBggkFZfY2",
  "key24": "33doazpP3JKpkR8XNvudBN4pMoTPW61gJNMKcK4LbheoR8TH9TB3dLDYpLEVc4TQjhCgz7jEkrybeADtMcdd4S1V",
  "key25": "5zuNGVVS99DTaCMNXy5pP2xyf3uWtZcfG3B3gTt2X4qSZYhruWtMumkwt9mXSZHoynntLABszJgYrrerxR2Sro7u",
  "key26": "5QXAse1QVy4KLYz1J5XFm8iYNjpJAUw25y8WnzVQPD3CtWqBzCHit8ubYKhxsCHccJ8A1y2mUxVJBdUqKHrrXvmu",
  "key27": "3i9ZVWN8hf84WQyJ4ZGAFB4eA4beNnKeJG8WuxFLNCKwHjn1xp3XfhYbKftE22fU5ZD1WimtupXAz3fqLxa9wmLd",
  "key28": "28ipvooQhdmnZTSwyTQvoGNkdzxdK83imvduj3x6HsZYSJADsjcx8tWgBkXiAQGXbDFXLHmjoGA2kDv43EBwvdY6",
  "key29": "5jQRuztcNiYDpHJL3d9vcYQHEBEXovBkgfechkfeKsgeXeFvJsjZLr8E8D3hidwGUHdGmBJkM1Nv8awnbuDBFCcU",
  "key30": "rGMfF2o4oPG5X1BC1CYhbMw5Nyt8bHwvKc3x7JcHfVXy4FXZSXw57yBoNMN62sNxwZnNHHR4fn4pFtBrg7MPRBz",
  "key31": "2vYxK3ZkryNQ1VqUmBm8igho7yWcqmRPE2cknd5Mpm9c1kZk1jhbMCs3yiToscZ63uv2gRQ9Y3ekHRM43e3kqpCk",
  "key32": "f5wSFtBwDNetsng1SSVEhvrajZRGdLbrUKd68AKftmgpYFYqzwNatmPWRJzpzFG73q8RKDVqKkyxXckNgN7b7kr",
  "key33": "55iUNBhjvrm3tzhZ3NHW4ebKZcwMMRNtqeHhbbGbDMoNbc7Leu3TTKvjbJWjRBE4BW2cpJBadX5nBEjrwPAY6MGB",
  "key34": "4EuvZaqxVzYDpvvZwWfob53XyvFBMPxqmarW7b2roV8uDgSfowQNbitTjF9YJqZn6r8Gy6hueyNZjn3tRgihYRpv",
  "key35": "5GAGC1bWDvqmbsp9VFj7aV9DtKemsA6tW98zAERWUbu8263CsBjvhzZkKiMtDpxWXrJiXWbmgsqDHAGdaA8hjZ1P",
  "key36": "bzrSvYZBSJZVovxEToMnEzz6612j1c74WzUEn2XXdN8mvMNy9NU9ZH3oKGmj3LRkPmRufxiatdWYLFtAKFKtzU9",
  "key37": "2Q44Maiy6tCrmYEKGCMNGwUZT6DEiaBYdk5c98JC66z8ZSFAjjy5prYZcEE69k6Byybh2Zy58oCtX9o1JvtojK1N",
  "key38": "2i144deCes1SEjRX1dkp7qGGY41yDDKkymBpReBKLYaPxcahw4EECjh8C5YSTWSWocppBdDZ3ncZkDjSVY8WmW7w",
  "key39": "3rSFn1P7p38EsmuZYPAR17aYvmaHU8hUf3DUwLGWsDMEcpxrE38bDRvapaX1m3YtGeA1RQDtGZAmBLESkkPwLg16",
  "key40": "3TvA9KTuz9GbCNjZ1DFHh5QACMYMfhXEfBfnQUg6NJFe66nFCnuiovXsgiqbRAh7anpmpfHAnq1brDz6A1B8Mxks",
  "key41": "PsHs2vxVbmgJsePEfRxCYdZBfnHi2cbKazLv5xQdekBCSWQL3PHD2Q8aAGy5qXwwuxb5J6WJUrtdAxHS9VhGxNk",
  "key42": "2Ko9YnQnZTDKWfSgTfxpXQdpP2MCTzN7KE6Gyx9jpW9i1BJG1axSJE6uJEXHPxi4q7VLjnzRLFbUqP758H8AP9pM",
  "key43": "2e4X1qdgqf5oC6fux2kGJMPSrWtCd4WFXhmzGjCd65DxXF6moia36TXmdxzUmiR9ZyvfZqXFCnRxWaGwtFSErgVK",
  "key44": "EP798NbBUn1wy8upRJJdc8vF3THns4jS18fyuhUmHZ4iEkyuG4iKivVLRv1GkszQqgEw7LrEvaoSVVtVvADe3xG",
  "key45": "5vf8p2f5LRDqdM21dirAeQKbbto3zJXWkF39CvT7aJgeHAoG4jz9GYF1qbPAM2TeQBo5NyvPMgY3uE1Nrqhp75VJ",
  "key46": "5h3tVJZtEx7ezp9d6vtBeGJABvcRypyDzZz4Fv8FfZxqyCc8fBvKoPhT4KgSEhA22kSPGwMoChvy6Qzb8dxfNxzA",
  "key47": "2YfPn1PntJ33EJKuCL7v9DC8H2q15LDzdvTHCdy7iyDMRrfn7Cv1UQ5FF9hs2d2NGgyJd2mjWhWpAA6AKoHVLbsM",
  "key48": "2BQfsoaXHn6hWdt8A1DFFb4hFqNjg84MsSxcmEnHJESuGpK3ay7DAUPWrYMbbQNkSPbRHXdMPzW2w68ZcTSHXLP4",
  "key49": "4UgQxPUSxH3j17gD7AmtbzyDT9nvnwtPeAMpmmejXPfwXTgdrrZuMMc63kXGuVJz3j5UkXPx38qh5GijXKH3F1wm"
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
