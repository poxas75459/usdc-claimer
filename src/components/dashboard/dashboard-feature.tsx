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
    "2BbrQm2YY5fPkYErjZhAvmYHwzCEGLhsGzTZHuB6VeVaAzpvtaQZWtiqxa6UaHVyBdeMRJAg7vVfgFCACbfiMkWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oaW5DvvcM7HTjz3TsmW1UnobyE1MYqDCwbTjZ9nSrCyRZirg4kxPYEbhGdQ2jJ73jFCnV9yMXDruiZLz6PoKPY",
  "key1": "2XPM1pHFRjrn1onRkQsevqf1VxWqP1y359nENMKMy2aeJMKCuQavYpBnTUHennqsuu1VcqvJHnE6sdFCgRefjowa",
  "key2": "e1XXqxPZvALyaNrcA9xwLA8NSTnvLPveeQjxWbsXgdEhYbVhsAw36g3aPXAVNvRHJWHQ5GLsMG8W6z3tTBrf2Ag",
  "key3": "61F5T5gWPuSAc88SUU6A1aorEb5a3NDoGgou5m4hwUw4W3RucsZqG2yhAxymioqtLg1XyWmk3rcd6EQVBJNPmz3k",
  "key4": "53PSyP4xnMVqtNcvePHNAC5BJ1naYWgT9BA52muEoKFUduEi694swMbAxTpnCqJUqp4XaK3LYGc5Ygf8YBAhoCWS",
  "key5": "3sSaj51Cy91kfEb7P3Kdxpq7ZbY3jwUWMzCLyCPrYPJZcwEhj1iEncMrzWPpnUbnzWpmqnzBj3yUehVnnLxXMnSK",
  "key6": "5AftCoajUwUQ6xzdcykLSeU6wK2zViryGUZwXJiqxz223pUZPGdjBPSgw78Mnns7AnBnmwVJwJc9aAiW7tLHeUG6",
  "key7": "2SroDz3gRCwj3fehsy7KQPK77fTdB6kA6WKd7fx85ZNAFMC8QunkCBrgXA8g7TuKGZeU24g3xuzGKDmP4ekY52w7",
  "key8": "5SynANtedWSeCPHzhz88a8NtEZVNPadA3pGMfr6TRjfoUyo9UaLTgjokbZWtKbwVZVsgw767WKGjvLv6nEdNcR9k",
  "key9": "2xWdArJ3uRSsa569FcVz71CQpB7nGavhaHPDRCJo6ezVruxs472BEcvJwUZsAz8LsoVDpRedUd124B2Tuv88HsaM",
  "key10": "2WvhPNa6ZMUGuXJ2z7Xmyctuvb3NrUwAgXL9YQJbzYM4f6tnChoxPGdSbWzrcJQL1XoC8yCAEg2EcpAANBbPbc9f",
  "key11": "GYHvfrKrbvgfmF7BEU6ZBHiWGSqpYuCxbuESaj3modKJhK5Tcy6QjNwWkrEmqmRSSxxSmo3sEgjAoEH6YjgVkNP",
  "key12": "4ckk3t9Ax6Tsbtd51iAZo3hgVhAo5wMFuAknuMWTvC7n1ZMgGARE4AZs3Dm8NbYs85m87b317sGJYk5QYyRrR6xV",
  "key13": "42jnNfdASTmKAgj93T5hTScWLzFuuH3CZTj2qsHYqVPQRSR5Mbiq8Whs3jVmBVfvPeJHyXHfLKoWTdRMG4ZE5afK",
  "key14": "3Jgv6f3zcYFcwJfwCbKwZhK9J2tsZSFjRgupXLXtgNXmLpwuTVQVb6KqXMbHYyiJfYaDVoPSctZy2wJZ1B45xYyp",
  "key15": "2XrgZbQCEbCoUTsfZhbcRmc8bYbyduRva6KL2EUMs7HeSFppbsQmChhH7tF8h5g691XfS6Hh2WBtc4JT93tmkWvt",
  "key16": "5L6viKVDw9n79hhdRdafg1JozjAJNs6kxpUfumByuJkTjrYRwijVpUG9xcDDrxCkCevBMRSngRwinCrsrtqKgNL2",
  "key17": "Fjd2Er2N3v544yi85L5wsiRHzrFdUnTuZvesPJHbHsN1ev2DyvYtdzuH63tvjCsjrZUwiVx4cuYRvhjViRz3vL1",
  "key18": "5eSEEG1m8tgTHHf5nZ9xhMBKGpjApu8pC7GBnmLNSKzREAVqHg7AsFSpDmHrKhPnGQtQv2Xm4i1MewPhHFH4wxNZ",
  "key19": "FXvtetkBKV99vYK5UDu3HBQi69KMGNM3yFKYdJE4jmGaLJgE56pnzVTPKhW7WS2v9p5KFuqPkvwd7pKXG8Pg5nX",
  "key20": "22m3xxPFfGzgV8XVzsXFqKkh9hPT9aX1dJ9G3ks4gN2CmeymVveFqCjjLjcKLHJmky74KhSzPDceNLAvfW9AbiMU",
  "key21": "4viVZuQ8KciaDP2iRpV7Z4ivEM7fjqvZwtqK7TdYDxb71wXPwLqkqYzAJEYfKA4DiyZ4HsjcoPhpUTfty1b9bQXg",
  "key22": "3v2edpy3N5hMeRTUYcJHKh5FMf4unm7TXqoE7qFszJoB4WfmNfvf57tXhbyXmXLarDx35dTYPRKxsVHjBW5QundV",
  "key23": "2UdukPHxjLMDy2msByYmmohH5gAmQKEiDxZSazUNikZMFeXej2qryJp5Ry5i32FkvMUUx37rUmoTSLm3ipEM5LWM",
  "key24": "41gvp7qYrTzt2Qk5VLofPVnwGosfNw8nf41kakmyZNxuAyrs3zbRcRLVMXsYu8RWHY5uwwHun4Q3vbc4EFGLjhZM",
  "key25": "4oXfGnfMJXfCC5J3nnPVaZuG1G3LrGQGkNAxbUVuek3kySWTVLwZacGg91GCv9FvXW3TkN8pKUWqBp4pNeeJ4rL1",
  "key26": "FEBb1UxPiag5kCfusDEPefJcxYTdnALcdbqtNQsuaMcWhR7nqpz4nH6jYzMQHFzz6EfYQ4MrEuxhCe8EZJPETRn",
  "key27": "4iQfHQp2MTuWKKuE8EQ26WrzH6fYkTMFv5wRTHwLHK2Y9b3VXgPyXN71tfGFF1zVV46mqPfNARW1MKD9xTrzNJff",
  "key28": "2dshcsc8T8fB13VenCrRfKSviyHFTpCNJUAr5ZvcJEvknLefLVgYrvSrTQHnki8Q7RB9VBHeykj2hbxkKS4BHVte",
  "key29": "2w6fnE517V7hbqTy8WkXU9trtdVdrQFQjgQPh3dvFjV16Qtz3X6VzatN1vzsaPtn8NzvnPcb8v2QNVENFYYyc6hP",
  "key30": "hFDvmuqiz8zAwsojnMerq726KvP9Ci1JJADGK7Ri6j2sj8aeVS6WqsECdQRXTCmNLxm2k8S4wPLgdNukZLe3a5H",
  "key31": "3Vpw5yD9F4CtVXpdZoxoUW5MF1xUGVnYHWYPpks8MdDUtECPtFJg1XgkNkXub65jLkRX8PJQN8vfTXWQzQ2c8Huy",
  "key32": "4tVotDaxGLRYKx6CPzf8TbB67eZfMFyfYfbEmLD9skqNHDhMcwu9Kk4rGnegMKMwpci52HQns1mD9ojqyvEjShSc",
  "key33": "MYPqcuJJ5n4dTent6YVu9mGFKoTaxFavyFrTwsXSTpCiApFnu1x2qTHSdqBC2rSAxDi83DDPgyNEUUkkSUSaRuw",
  "key34": "3Edb8owoYbKHBDiHRqcAN8rJn1xUSFuVMiCNp8wpYxSTnGBUA2dk3pcqo2JtvTaCxYoHZFsucgp3uyhVqZyf97uc",
  "key35": "3URpSwWMwiycy1dZHrzoWFsXL1yQzgmV2WJAaWc9rDcwDfLG53AZcG2Xsq7kExLwqpsiQ3BLafMPVLFEHisZLpDi",
  "key36": "5NQoiRufiNKcA8QErnYEWJyrtiN3gdDPku1Vx1meb9BMGu1bHoADX3iYHB14UutieR9tSRXsg9fehbqhDVR6Yox9",
  "key37": "5BxhJHx7uhD59Bi26jaG3MBcUcC9o7cnhgcmLUAjdKsPhgZ7Eq6DAkbDw19AfU19W26fiWj7iy9p1pXaza6aCbdV",
  "key38": "2VE2cZZTzXRhWGcLhxcRQ1Ex6uUAh2gWnGHzZoVmowmyRhKfiusswnKCR41tj1UiTZ6mNsu1NZJBcjX4r9ptEmCA",
  "key39": "4jTVMEbbQYwbDUyELvJiyuCVkyGTedKcgwATtnzVYD6o8knRbXpuHUnfot9Wq9FccB3jSwYaXL7XrxaWfzWowskX",
  "key40": "4pzPz76HbeREtcGfbqUYgh12BBGYz3Y8GxbDxpqijf73BcBpSn2h7u7RjzXcHQ9qXUQ75c9RDJjPjAxjWHrmA9Mg",
  "key41": "3rPUtXX2GJpgB6Dy2qqcf2Em8dje1NZxfnc7hJ9qMYhEP52Wg21vFyyKyeAow9PQbtPx19MqYz9HiJjjuXgK5t8B",
  "key42": "3GCxVwxxzCQ5c46V5NWPTGQbNgK79jvYyS59Ke4VbWngAyRefiNeG2FwazyMoL3deKTw63B7zwPvsyPmPjHV9C2y",
  "key43": "bPPeCmBRVinR3gWTWK4MMtaJk4HPLycqLQvzMmpFYVAfmMLELtWoeu3WHV1DA196BkfdnrkYraGuBfWf438Asur",
  "key44": "4Da4kieaS7eTtWq3kzAA4ivZR3ovUF1TGxQKsVqZiGi43zMnJDMCyEDQSLHR7UScv2HjVKUifn8C97ReuDSAYxrP",
  "key45": "8sT9vNMaFGNE8g9sFWVmxwCgj5uBpUdvb9tKo6fvXbg85Ug74BEcz3FUoe1y6zKPdy4M2X95r9upuQieEMd7bLA"
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
