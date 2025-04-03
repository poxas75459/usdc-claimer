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
    "2drVM9ZtwhpUJsziCL3bg3Mf7uYYsG5rYdVpddvnhuqVAdBbjBJz7aQxPggU3a2ktTY85JhRYWNTJT8Jn5i7Ht4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bvmUaw8s9GhL5W48gnzo4cqLEu1HTvgk3EwH9o33fGfD9jsYU47TjjUuwsKCiEhZV5tU1JaQu1CngVDS221cvjK",
  "key1": "XJmBUYBZfDENG9HzccUkcHZT8NZZhKR3ivpjC7BxwEBSwNzEuBXcCyn22puAaJJSM9JxjzPrgaNTiKPJTk5UDD5",
  "key2": "gGw9oPAh6UW2XNbNYYEa78sQ7Bkj7mmjng6UQBTSc3S8csTQ3Tg349zXYRrHiTbQRiL6X1b2RAiF6gCWMt3N9ih",
  "key3": "4pDQy7n7sb8KFS6VjUD2ntKcmB8nCEYv2ULYbSXkZFfibsoNXJJ65kjkqDFgoQNEaracKJpG62fQ8XLXPH6UNg9b",
  "key4": "vJMUaaKPuMHhQwVU7QewYHDhYFYoPpaifeSQnr9RZoEzEzLdVv65Pzzbvo5oErMxpbL2BTXiUiTMJGXKVJa1Xex",
  "key5": "5A2RrkDsSQ4aeZzgxhq4e4jx1Zc5Qt4Lw2VK5Qa9g3mAHW6py6cZupbi6QrXZLo5ZDu8xq1MZY9tddVDWCNRNuar",
  "key6": "EuEAqAgh8MZQAYcUKd69xUmu6MvYwx8zNo1FVUW733MaHWNX2Z7zAb2PKJi73GLVf1n7potydyycyFDe7EgSkTR",
  "key7": "3cybSNfnKaCvsj1UZ3cCHRZ1fvE9Xmuf7TV8x6nLNvZHRpxUyagRMRGZTBRRwhmtfim7iZd9xSkPVVdDpAXcEUye",
  "key8": "4QJEjMXvrEuM9YLxSHLuCJz55muqhd7dEgrcv2jZbqANTSFJv6HgmHs51iaSiXWoiMN3CUoNuRyehEJGAYwmBuix",
  "key9": "3icvNnewQsu63ky88LLqzeTzGddhr5ptHyu8v2r9EeCBnGS8Q2bTVSisWSjanr3pRYSBfpUwYvkbvJoyMbvLPAke",
  "key10": "ANN9C7vdRpNqjSuRiH2EdxnddY3RaLf1QGz4XsXts12zV4gYkzrkYFiXDmAgXGjvxGgLqnfqJqJWG8Ar4upQfaZ",
  "key11": "cYveZnAZ8x6hszbcb2zyxVDSWT8eQRcjBy4oUdACCMNgEN3LpBCWEefS3MwVDs9iZY2Y1h97zfAwJijEdUN5TWN",
  "key12": "5VExqrV64Z498wA2dympY3TMu5EZ9y2CR6sop9xD8QxER16VLtVUoR8oCd3J3PnZGP4dAGFEUVm97vAhyTggoHnd",
  "key13": "5KAAJp8YvUi36D4bi1pAn7k3Xs32S5fmorMtBdcK2Dw9qfNcU7Z8rTDP2yqAMn9W9HnnCfvbfm8Nmt91ueBAmDLF",
  "key14": "3DAGYiEXL6eJaX6MaEvp8gWn2TggDTgYwbxQw7DZXH8ZYSuPUAZ9fn1rbWqqA6UdJ1xxNDHtBZZCbAizMsFaAPP5",
  "key15": "2z84QqANznnWnSrioQGVVA6PmozPYU8P5NtcxQaY8BdgnrJWsrhci3WLvfQpCNqP9fXWZuQhVczUidafxnPkbnT3",
  "key16": "NpjC4Kt6TQYL7L3BCEVMvJF6tfE9Q8WAg6Ho4xc8D8nWpz59jDeL27x9hWv91t9yuXPubHNjrHYqy832ZZakwhc",
  "key17": "R3ecdsCJoMA1QxxcPstWhBzYowj12eJaBC7v9gFfpw6Z59hSc1t21niTUdgivcb1qhVRfhPX8rVx3Jwtr1RYFwF",
  "key18": "5tV6hDAqPcEhaJhHCySFRzKC2aGd5g27XBnuMQwgdyiZSP3YDXFyE7R3qfnupqZs7ToYafuoux1YUAe8N5VqeyoH",
  "key19": "23rQvyRSRQs2v3YADQWvt2CX7ggHX8VGvmftDjFG6xqvHwBCBywpHhuu6APMuyaxUiiV6JTHYzZ93kfbJzWWvE1e",
  "key20": "2FHcownknHUN5X8nHATRN9ZVWcHxisDNF3k9TxqfVKivsqtqnr6TNxEbi1P7ZiRmktyrxv1y9yePsRzwk2f21NzL",
  "key21": "3J6jjS9cyFVbYxB4qFYThMvYQSv4BS52Wwez2j4qa1YYjvpiJtA63WHYupyTNjfG6BwqTZc9xW1fxTy8QTYeHwqV",
  "key22": "4Xpx4vaBmwEitBBeQciHRD2SXtSRLrKjta7LvD7n7VdPLHAqEmi1C84DJfXJFjkQazhBvShMDtzxy4fsoJXjA3bX",
  "key23": "2Pz8oxVDgAY3bFFL3REEx2LLWHT5Y3vAoGKEPzDMJVtFmwqwiLGKUFckT1pbtmtpjcLoX35ZJa6r9Jhjt7FjAmLh",
  "key24": "63azhT9stfajsr3fCd5JpzBAJzQXeqgTktsDtrQtYs3neYHmvm8MBQWmzb3pTz2Me1cYo9Ka4vutBeeXSyx57SWk",
  "key25": "5JWaLzfjNB82emdobtirDvLSZ7nuY9z2tNUzjT6DULcJdDF4aWEH8ME6DSvJx2t2cREQgDyxh7Xc4BZL9X499emV",
  "key26": "4trdbQop63HULZN8JVMBMNiVgeNpWH46CTJP27hdjKbpdAaKFNbCaCBJRWE9GBLffSBGqL9JDWExGwxQYJC2XssC",
  "key27": "4xg6Gaz6Fj9cPNRvenhcsNs14Zz9XPSzq13EgRV1vzJAhnC85iAk2FYSZrWDDhVhwUBHSJR5wnKuhCkv6UL2aFPP",
  "key28": "4dCBHd4G9j7puKJbsGCQjPxF6bCPzg1njJmM5sJ7bTY4swhnzsFGTRRyGUp8VXmAgAbBiEVWiDXqoEt4UBcMiZow",
  "key29": "2X76WMRXDUCZeA3k5xU1JfBZr2uh2imyvGbN5uboyyEvzK8f3TQxGBE8zuV2rXoT5nfjn1hPAVaJkFRp9vRP1xaA",
  "key30": "8E9XraPbzLeSLmYahvyWTZDu78PJmFPigmiiqLmbCcTJgy4tHSRXuni922Ywt2LobYK7p1bdz34EnrGAH5gYNUp",
  "key31": "315WLUWERKwAuuFqRfvKomvkhrfvTZ7R7M2Rz7nJTbnaneo79R1rssr2DDveTvQSBzbNtHympT3SuPrCkzbhiwkN",
  "key32": "RMqfHzL4GeZU8AsAa7NB24cudFvbZ4hTj44vL6rEJZooKEGraB8zNMGojjMz6HevXNnRgCoGRfLyfAQTLLneJPW",
  "key33": "MbQmxfz9F69TW4zVpgpsoby9YB6XKZhAYwCzXhT6RLD5MrnDLUEAQHrUWNygqKcuqbEvA3hDpnaTiPbKZeck28B",
  "key34": "332J9G6VqmiigCcnBXRAC6WyeLZUyzcSHJBW2LbyvXfke9Mjg4Mpxy2D7eYnjMXBKD6aEyDsL3hBPWqBiTbHczeW",
  "key35": "62D5YxgVcTVg1JPh7qR9DzivikAmNhcJpbkRk5p5arF1CeUdsgUhMVUMP62BcqdLxp2ez4UMY2uoEaRECczVCoUC",
  "key36": "4H81BUeoNQJ8SKi8VdHHHDgFgypPumpENeQQaJryrfQ1p6vQBDkhgqupt2PYfMUgKrsGH2h8b7LwBcdy4pVuvdHg",
  "key37": "5zN97sVXzargY8QL56MiJfDBv61FqmXPcQ1rJ4xxAKSPzMDuzo2HYDZSH4DRGD9wUz1dds9Rx3kf1QPSXdFhEest"
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
