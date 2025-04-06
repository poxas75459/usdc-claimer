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
    "3VX5hphjJWvTWjU7tK2cGoNctzK1Se4AZiUbPhwnJ7VHGkKtqtnWVcxRqM1FxkeAH1N6fpKmfVohAom6PE4tTWH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qwivKfU51ZMuK5EWz3zPHxK3WXkSygq1tFNTaTBkgq5kK5Xf43UKT7ubL1qJR8LdtjcJ6hv8cZCKwg8dQioRKrK",
  "key1": "2hyuZ1SBb4njW5J9wZbFbMJKwBSgYYwjqxjg8wjxQYDqkHU57bmSyWZsdiLxDNZm1aSduUyuR9vwAQ6umStDukvH",
  "key2": "287tQo3m2qdR6vRtJKkZFuDSdegoxyVR8naLPBMhQBA9wfZfQShjZeXoQ4rpJUvuXs6pRDgJbQX6BWbXWHk1Ewow",
  "key3": "4Z78CjYssgsfvwEwzAvtVHN4AbzVUQRk7QncjCLR8XcciemMpoz8rCzw7vKQVzJvNc7K7aKa9NwotBsxTPoYqscR",
  "key4": "4RPFVxUVvGkQaQYRCQrtFVG9URAz5LHYVcb1thgvQEqAAQcczK1XUb9XbBHWUvDQLR33UmbDDEkccMRQexfXgvHf",
  "key5": "5J8H2GtB3nK8trhEi9BLQFracf2jR3Pj2E98ajpKRVcmgCxX7oMTjs5a6nt4ANMP8FHsj3TFJsfW72TKzgjgMJwQ",
  "key6": "2LCkcmgorFAUX9DBw5koiZwKGC4zwKeiGdD2cccVRkrH7hSUYnaPk6BVQGfeuMeJmVW4qCFgiaD92wzzHqtXofmQ",
  "key7": "4qo3F88jx6NUN4WeCvMqxr2eSw9fTEPbW8tVMebQBbfXbjBNsJovPE1CAKnFJg7WZRCXHkrfQFk6iByEmezJw9zB",
  "key8": "2gkGqeDGkW4UddSwToapJs7k4ciQ1y83uqjvvsQvMoehK32wcToiff52Kd3DCjnVtX17wiE54Dd6NNwmo3NpMRT5",
  "key9": "4EAsmrM25LAhB4NQGurNCRw7PcRvL1LqKerLS2RGcv7ny3vo2DGPPJabxQMC2NUXvg4PX1ueJrJ8p4GnTBFXVAP1",
  "key10": "5G2hgNG2hKjPbYgTghfqzimAS4muMbjwAeDqGP7wYMZibxvSvdVY8ocQddCXbkDoncAi2q3zyFVPWtkMjCZcXhtZ",
  "key11": "5iNNYmRrF5XFiKYATb4GCAkdEVidFBk9AmYrjkg58oAeLXe94R5iUnU3HSWt9hNrvxRdN1QF7dzpuyx5rtw9syyj",
  "key12": "5DzHECXkJrfpGnaXudLEKa3deMGYCHgtBKv4DJ8mghs1bNFrAa9wuGTRDJG63UcUNRFHyKDHZ6zaZC21xt8ye8ja",
  "key13": "4kqvsZx7Y2AaaPMqb43wiDzn8bkkGtSqVpiGo88VVzzCMGsm1kJ7wPiHAvdAwjsfxt3ZjwRnqLoRfVxeKYbR5FKK",
  "key14": "ih5KGcud3XALK3aUuooH6PNDbJDwB5LMtRxv7ZZ5uSAb76qEMrRxx2cLyEtkS44nr8ALBbdh85Youh1T9r7F79Q",
  "key15": "37QtrQtKAJsc3emBdMFYm3ZPxq4rQY9an27AbvJ3rPC3Z1oBE4yRj8H1yU86GzpWQq9hUmpqtUUeBMgS63ipn7HN",
  "key16": "toWYFnqhzSHWHssmEbgaPfrhB6MW22QX3fWMH7oGLVV3GYevKdnxNjmnjFJPaYjPdrpZduc1B5SSuYSB5yvWGFq",
  "key17": "5jiiTTrgYwBHeHwxzmHpEaM3xrEVmwHLVpfQ6WdxcSGmHeryZ3nkiHsPE44hxW3Xdwr8vuRcm3Pp8mtdpGR7Ba72",
  "key18": "3ZHNcdYF7w9j9j8uyyCaLfznQmwvoDy4AQ48VE3zS6QfMJmSznaengqrsUx2LU7tS48Xs3HxZHEXb7Zk7iJaoaaZ",
  "key19": "2dBb2YbHA9ksihygMejXpJG27tPtaAePdwm5DgNnBobFE91mz39EVEwV3obEgfGi3qkXrz9AkN9BXDucCyv8Jav6",
  "key20": "2Hv28uSyiYC3yTjVaWx3y1gsFuwHWaJZSEG76LX4zeE1ApSJAzRUxMcHUYgPvm2K1FZwTzwXpWPAWhkPn9jNnJXT",
  "key21": "4GoxC7tqYfjDPcuKvBiG5Zi2AdtCMz92DmruGcZMmpzuvVNuUKTBi6ruMG6BCmwAKnqbYoBeTLcRDLJ9VV4VGXzu",
  "key22": "61Dj9w9XLMcpEvHnRNYioZYuYmsiibkiFYnHs8L94GzNTvzVRBuyYowMjxRxz1L4WYULZSvVMjjEAAbA2Mm5sHJ5",
  "key23": "5wVPY2JwSJUTwW31v6weaaVu8jHjZ6oE8HaLZTsKH3jCbc9PCWieKFwtBJcXzhmtKwKAQBH86k7imEDnrUXdQtrz",
  "key24": "T4eycewpYfbVZAzMSKUXBJpKvdSS7Es9rzPgpZy1QFpSyGWZqBwNNnNV2LvWta3NP2u71vkppYnRdDahtcicrP4",
  "key25": "3cfszQY3zHiWynzv5oouMYdYRumAFmPWiPHVQnLDt2QD8QkuCtbFKeapr48t9hFu5UH2Ddyb8pSekTRMaoRH7nWS",
  "key26": "QZR7dWxJ3aRgiBWZxnFw7wNfYvrnjn3cpEUgtWDr71nTeverFFwbNnTaUz1FyKjkkUBZz5V9psEX4bLMCrjjhvE",
  "key27": "2VAPzpQa4qYzxqsHDfafbbaqmyQ7pwAGhE6v5NDJff7D2cLe45KzcZfL759TsqxvEVMqqR2yM7cDDwNwCGVsyoLw",
  "key28": "3tKheUXxTEVg23Xg2Xp95F4p68njWW4ZAXBqSGzqu1A9Vr49ogPg52nPa4h2D31gHc4HgTEiSTEaHRBayYjwo4i8",
  "key29": "4dJ92QoJJZhVt4pic7JoHf7xQ49tFUGHJHTmoDS1NLVX41uyGZru5deHPnK8Zsvy9q1ENz1QNEiuLSp7eqfBLKk",
  "key30": "W5t9h9uiaDeY7XTq4sJUozsMrj6HLdDg78ShZkmmk31Cwbc6DF6dhFj92uGnv9V17BqmYFyKy9yiPrNxe5awYEE",
  "key31": "51zpjCvQ1G8ckzrEPXLfNgshE33WuTowaU6zs7yHqFzaEwbRcKLW9rtMZV4wsBPkMFejjd5rMF8LmczGFV4UcMCR",
  "key32": "5uog6kcCx4tN2PUjpnBivc6qSenLWMwqFSBYDxgMt9LDQdLpFY2kGi3B7kq4rGNEhf2h9whKbUagnvbGUaYd3pJs",
  "key33": "4yiSpz5kPBYwwcvm6suy8Da1a8szwgDGZrbxMAURNWtjBWrAsiSyakm4UuR54KxQwTnRkXLmNV9dZqR5PxWtKpmm",
  "key34": "55osNVSSDnFY8GZE4ra5JhYd3QabtNo8nW9ddaGXrQmtFsC8ZTfq1CnUedVMLMgwVcqAg8kLkvYNyC2CqHcCF1kw",
  "key35": "ZGukgBwWhonTE8BFCeVrUThqXLcYKU4ayBiTcv8tagALerpiiGfSsgit6AcQGUnbc8gdAJbsK7wzBsugssgd6yE",
  "key36": "4GKYq3m12cXhV9P1r518S5oyMauna7aC2EyLWYNmwKgGmypF4YuvspUa4XG2fiMrsbijA2TpirCjvz9wccEaTpz5",
  "key37": "5Kp2H6VLA1xftzm2zYwa4wXUNrqEkSZF9ctY2Gv9LhwnnCVPVtHgUicBCXRdEXSNDgdrjioVwwz18byLLTaMZjin",
  "key38": "3p2VPYNipfvAiDq94V1HtQA26A6B28KZsjdspHQD4CYvmUXMJxDaLx9RZywqNvLppW7KB8wyQwUYHcD6xrcFq8EX",
  "key39": "2wyh4SvxNsm79vJ2pmwEtnFbw3c9bqNdUMpTYyLUr9XpzHiS3fVcNEBeZwY9D1fTK4Dt1yDDoUMAccz5yvdzvfXe",
  "key40": "3sSgCWDzvbEhg8ZdJMrWrqKG224aAX8riEDr5vEhtkUJVTxexSiB8twWkMjsR27hMJ9VM58iNZci3k4oe1Xxr4g9",
  "key41": "2uNXUPPdox7HtHLki4nA2LEuM2iK3CRU7YTpkYLFnHLkiYpktvSJMKZDW9CQGXY6KYH9pRDcGj7AnGmmwD6cfyc7",
  "key42": "435ACfnvGimNzSwCuEN43Vnw1G56nhYNjJ9mJrHUjHTp9eJdKvUn4g9raisMLYbDywzRjoyoS3XyYVByQbDAt7yd",
  "key43": "5ePfvyKZ4ynpwZvsH2oZdE3ERunUbM96XB4sTHTLa9EFVt5RJ2XbrNW76pzcksf77k5AXw9P9wejXyKkiAvYxQ6S",
  "key44": "4ia8hMa2JDTS1Fy5GDeYA8YCir8bqUPNvVdB3Yr4HTwwyf4i6XCs544PgDKjoz2QqLqkmkX8FirGpUengcvK7cnp",
  "key45": "5A4dWUAczWnwwc2dHSf6CoBQeAB1w8hqsv86RMo3xmYR7NsipBKajTeQDDoWASij1qDYqc9VF7E332ofZSwL5g98"
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
