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
    "261PdHShpXZuVAAkuAo6UcbshFeQyv7hVe5LHLvhdHNrXTENwPrEfjrwTcW9Aog3EtpgfGevH29LgfC1Ltje44C7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ShU2ffxhShze1rzd6UtxRwJNNV6vYBKtTJbXnoR1sWb8VGp4uDpqA2NcJiWZE43yzc3hHkHmUW9gczULxdq5YSi",
  "key1": "Y6iDdP4LwpDGbRMiy2H84WFc2oYMJW2MQJzcbwhSr4D5r9GFmrGwuMfNbbvnPTkaUBX1Lq6j1s1MdZvCv8y25os",
  "key2": "gSEwQ9xgUhtnzgAMAzZwYtSe2BQnmW9bsNhcdqgMZUYm7NSjuRtSv9bLYerqyfUyULR5JB1VagjKfoFXVnLmate",
  "key3": "2NWdd2GqWpVzsxtbTqbuEcEkqC1EusLmZ3Mmp6THxMXevmZxGbaq6QrQCopY6PgVtah2rDCu28TCDduVco2vmx4U",
  "key4": "5rMCT3NLvYTEucMKcwoG4Q6swxyFL6grHx8G19jLeTE7TGUedqeKZ6GC1tmeKtoi4AX6QX4SPedykGDwtXQhTmzC",
  "key5": "2dEfmP5xDDc9sp27N1nNtQ9dVoRWrvhFyKh5QPRQugq6dNVAcZvYgNU946uJG4Dp9RQPiNduh6kaYQLqYbeBwv2w",
  "key6": "5TEHYMHEAJtdGHzDYR2BP2X5X95GESnvdYzs9xy2dvKT7QZASzPBrTGE67gi7JZSbcsN9VmHiMJYuiuNdT8Vmvp8",
  "key7": "MUWbE3KrBbjpqLqxhU36fnfVQW8CkMxMbRmxwuDV3vzJob8hx1yCgV83k9oaeqpEd3N4ZUT4JfUYPAMjF37VuMd",
  "key8": "2zv5hMDNYmsTQ42cyo63CF3ipBqtGF8BWUqCcvoe3mswxkYJV6TjRrQ41rhZUWGTgP2xKe42qfrTZEGGkfz2QUpx",
  "key9": "3uysdoZxBXD8GFjbSqN5muKDt8fhYsXsojTGXG3fu8fLhq9CKTAEnPzNdN48P9Wak9duG7KJBmisxBW1scbkDA1y",
  "key10": "2dBeCUhaipuUE1rorKA1B24aVg4DrLaSxFMvPW6rEWk4m86GU4kQfdN2K3AdhZQM1wWWtF2SHJF3kG3jbBP6zZyW",
  "key11": "55ym5n9shTm4XugVm84zVCamjMSDqrLML2BKVbSdEvQHvegaLyowYZgLtkctQroEfHR8gx7A9nwN8MZp4FaYbB1U",
  "key12": "23zUcj19pyG7onei7aPSH6b8Rqngk9ntwpEg9Hy88QfPYVBCZv8EE2F8F8U7w751jsJj81tL6WpnoajpxcR1aH6B",
  "key13": "2wupxevJoTdmxztkHuvr1nqJBHXF5Db1uhXuT7jvxFDNj9eJKx2MP8DK7NrJ1RDxZyLzuA98LUuwRoXPc7XtS68b",
  "key14": "2WJY9aqUVqTnAJ3mmyigw5dmJZVPkFQzvxCF8vZKa2bayWGv8zs69CjUiS2xB5pLrg9XXeBUBkNiaV54ak1aiXZ3",
  "key15": "4jFocDXQVXpoaDFJQ3hm9VtLQ2X7FKkBUqDd7FL9y3uDJ44nRm2JQzs18UAQYY2GvLxtPgYYWCgFmcgzRPVqtK8V",
  "key16": "wwCLBKttXqtdKdAAkFV1SGQjjywXri4zMc2hp5uUZYW3FDdBYthTiCu29ddtrft6BfViNkQyJzPhKwXiAmKtYbX",
  "key17": "4vkZX7R9gRuiQnx5ezNn1u5U7u5sHqLPrk7gs8bjWYZ5YsKe8FKvhBmJHrwBr8UpBX9rBGCFSyvnnUeagzQe2mkK",
  "key18": "45w4vfTouE2NXkY4vDL9JCdcxR1eMqESDEMiE9FPtiKCqfwXhRMRkKqe2nx1FCbJkvBj9ujmQ1ypvMGzfDBD33mR",
  "key19": "DDivQr1kCPG3z2UZHCmu9nKNkTReMMYwPw4HLJGLnrYAypoRMCYTTVzaTJvJtjPgGF7FHnJobD1hKBACdPL68Wq",
  "key20": "4MkUrz65Y1rSeoHoP9qZguwjh9V4BeJMSpuH21t7Vgfy8ai2T2xcKPRDevzMkUanWiWccR62EiRb9Pftymeya7P2",
  "key21": "zUQcgMJyg58HnVKzpdycfEEWGTXTtNhPQfjMsCesL3wtH9RTwGTgypgUguNfwJiopaDUevV14uQdBqFbmzbCSHd",
  "key22": "3QJWbHqgAvs1KNNzRfVxBvq7GMwP4tp2jWZX4M88gHS126bQYajWoQcoA8U8uh3LdbYTVxiiUqoj56G7QdQL8wTs",
  "key23": "Jht7NEFjREHkXXkcxvqaocRYxauADT2fjL9C8sPdbXSY3BbiYvBiL8UdHP9W3w1wCxHJqKcUbL6NC9jqkAYfcWo",
  "key24": "62iVgVGsiShtHWN8WsQyNaQDbE5qGja49uMKMtTZe91fPAEwismkXhrJn6YH962qZTtM4nwB2sQ2hjYJxfHpNj6v",
  "key25": "3nqXwRNyQWritE2em3tiVQeXz8LTUuRHeLCEbQrPR9RtuyaJXouRVNXEB28pEbRQ7Pb7QAJTuQJ2iU3AuMuAeDto",
  "key26": "5XBkk1Bux3j8V6GMHxzaVW9rRKKj5UKpMu7sMGyyc1BZ2Y2FstzoMaou515oWTdRZT8uvR62WxkY9kXQvkHWBVbU",
  "key27": "4T9RYNhQCpCBP9cyt3KSyWbuFQr1aiQmv7GoATHaGACiaXcN3bsqjzgboaH894bV4GGsPjAP66s5D4C8ELtTRPFJ",
  "key28": "67cN7YEh4ejQWn4FUHbnPs4grZJZsr3NfNCb9bk6jR6aHU9ESgQiEJreJkMEErtxPW4P97oge3a5Dti4YmkX74X9",
  "key29": "5nDbtb64CFdSvh3rREDw4JfFWp6gmA3Kd6QpQJYKEmvMH4FLzaSWY9S6LaasqtMsUBFQ6ZBAbNj2RxQYBwBeWS7a",
  "key30": "5GXL6pP3B8aEXcxHurZnLVYGWKfzjaYqbYcpS4Cva2DoZ3Pb3KU3D79qSVDvpu1maXx8U88mpPPbEL49KLgj7jWP",
  "key31": "3ih76iPaDQ83u6D6ZWFzza8i7feQNrFZtj4t3Fu4WZuR88ctgs5bQ6n4rXiYx4noiYyXGSK3SmRta37Gmyk3ZZCR",
  "key32": "32pCz7AFXm7ag27WsTDNCvUh6Z6DRaWUMhurEJ6cweH65C6QSxRQtZBMaiHoHEfL43BvzBBCUVkrxgJRj3bGGKuz",
  "key33": "2Pnmtk82cbGFu4AANHsk8MCXjiP6zE2oHW65VM2mYwwkYJsCy5fB7QE4ag7WuCMJixdosVSF3sFSbveiEdYna3j5",
  "key34": "4YW6FGRRryFPDDcBYnLE3w5CSUACsHAL7c41v4r66LH1MM7ZaMfC7SdmuUVAwTaSYiYEkY74rRFnmwQtGAFjXdp7",
  "key35": "3XPYABFu6FDc7T1RBKb6GZog6NgkFF6ueDwJ6nYRXFBbrtEhFxDV1LLNTkj6faBemrmxBbGrvFm15WNfAPnwPTNs",
  "key36": "TCWJKpzgtwDbLHrauFkjq5RdMihXH5Fyqa6bo2WWAAan5YLTdDshv4xHLrhNpjAJSyojMg4uTZXNXkvxy15kwgn",
  "key37": "2f1XFauV6KCJy8wPYMzGMyE3FzPWkw3yv5k6oCaU9xtm3qDJ5U4qRCT2y8A8RBF22GtsVXCWV6k4y4z2jVcnxyw2",
  "key38": "49BRYab1yUAgf9Rx24FjTBJboUceWaARHBiDDZX3xNTivDuTSVHxX3kB2vr66Xb84WFwTSfZtzxMmnmTNAF3H1Se",
  "key39": "4Fk5HfWK5zzLFhijNv41RCfYCB8sYf2m7HChsjBKTQb4kDhYjYYjSpuwcheoT8fHTvunv68m1yGUr9gw36He8ahz",
  "key40": "55g1t2Ghv2kJHAznMFjPpnBBt9JL4FUhux8FjiJz4d7vwmYgDixcxAxjDD57uG5fUF63LCDhxxuxkXAT2S1FAuWb",
  "key41": "2caiy51mz13EZjoehHV1zVZfQYur22HYLL8k2Ab5XjXfUrVfeuLmidHLWbfCLLwepkLhj5SZpbNJ67CD2khyEu3W",
  "key42": "2T9dkhGVUayeGBP5jF2Hdsmzx9L7a4Yn8DcBBFi6gQTnHiebQtG2PmdUgMNYyvTdfzBG27v1ZWM9yeLDvmARw5Tw",
  "key43": "2GZJ4mwJxY2BgvG22ccTLRuB16vaPAJ4TKWBBX6g7xQvdRr8NKbzCQruWC7eeXo6xZ9cT2t1Yqk4noXoYQdSrWM",
  "key44": "KptQU382kqDGS7zYR9W6Mtx3p7QC869kC7B8kJhqeP7A3wDe5VtUXCF8RmB6pDkLdZexzq4ARjvmTHGxPsBJV5v"
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
