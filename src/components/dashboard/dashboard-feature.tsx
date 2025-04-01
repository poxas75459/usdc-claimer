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
    "FA2bgCaH1eRLwa7P9aVq6xYL5HnpXLnjaWWT5NF4yeqChqFxzyT8v5BqkFJAerFW88Lk3uHycMRDfLj54uCNW5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C7Jp3zyCw7vQv3xmAQ2cDgfjPmTARZDYh1PZD9Bg94mgy4ZTiYTuJCCj8wwyuesRpUPASZ1FWPA7peJZULoanqr",
  "key1": "JykBD6fkVfbCX2DjeRByBsz969eKfwduUd7BRs6GHvnJJVCKpbAJ2JmsxEvjsFREonRvBKakXRs762HDg3RsXLj",
  "key2": "4Hnd698a89eaLkZVqc4RUyb8Uj5dvX6gXN4cpvrNyGscfHPLcjCNRqrdiLn9fQNt5proGCZq89h9F2YVdGASFM6T",
  "key3": "3CDXrkRhMMkanmG4W84VgURTNcwFe75ZZjJTHHCAomGWBHb4Kz7KY1kFLctWhCr3nRzhHhwNPFuPSiFJommexDkq",
  "key4": "34VrCJ4nCcCUfV1ML1g8hZqTwtn795VBeGy7fikxUxti3XY4jSWYruHxVfTwvgKdDgzrYE5u4ZpSk8SzV6mLYSNw",
  "key5": "5Vaxfqp9aXCjp2CZnNwP8PEMcH1R5e9gVYJHSzabkffgV4hmjUvz43Y2g2mmUD8y1G1oXgZhpoUQZD9uzghTJxNv",
  "key6": "g2ntvyApHjB7SDYvaHu2xjJLCyxqu68zy7rPiZZmxAy6SmGexZeGoTyCEKyWsC6byneZyji5SWCntjdFkzmD9Nb",
  "key7": "5GbvsAb5zLgMGSD5Su278Ujadv9uma8rG53sips7KiPBK8BKj7CtHAkzwUR4MvUjQBUWnLtgwLTAX2C7C9dRjkWB",
  "key8": "4fPBDsyuEQCUAqw1tV9yp7eAkFjrMPpxDbaAfyhAzJkh36F7vfqaGXWQMoYCFkygQsZGvNKFUThLQYTHE2HXr4sj",
  "key9": "4mtXEMsQJEyXJBsWFG5ZxeRb8QxMq8zNYuQW3Bc6B1WMCfZaJLrD7WaWopG1qsL3ja8KrmXAgb6pJ4qPmVoxzuPt",
  "key10": "2uN2vidLYjEHaDHo5CGLNwC2oAxjgH3dkxKcryUwB5upFbEAF8X3ZXQs86WoaU4QD1NFjGcY8H2wsXPCgi2c6cy6",
  "key11": "4amhS5Tmat6shHw9g8oXVuChkQk7KCccQqLNcYjdZPFuzEo8Ny9MiePLDrEC7yiofA4cdUd21Kk78vYqyBdQLMUW",
  "key12": "2cBWqc4dyJVUsRNtFVa8uD5Z9mVQe74kAGxSPVmuuGAzy4j9FPk95hrH96CV2ZnUP71MSmTp5wgJFg6zXShvoUnm",
  "key13": "4TGuTQ9wvkahirQjjAdBcqAZjziwXo1FS4nurK8Z11nnapDYXnUrmS2EZWtJbHQ3uDxwRZoNJQVF7ogDFarSj9dt",
  "key14": "5SWAhLcCg3hReqxcirtLwmwHJbLbk4ysQ4k6LVw2X3XNpWoKQfQhTZXWY4hq7HckNfKwAxwLeboU6oDqZembUHu7",
  "key15": "3eFFycnCPKbNudSLMDQvNFbNfEFECYNcaAto4yphWzDh4hGCHE85g9sRMMaa8tb5XPZakVztqZXtZNEVSHUz4P8g",
  "key16": "3hLTcViT4vqFWdHrsduWg3orPwo7nnYJoiJ4vSFhPzubuRS3epyVgEuLMVHcgY2mvs1BG5YLvmmLLT4z3wvkj3Tz",
  "key17": "3ZQQMmmd4iPPcvnNDhccYbyHDRGVdSakJBg8unJ7MCU4v25j8yChxAW8fcbJE9h45kW9YNJZcNbSSXz2P5GpbFLE",
  "key18": "2eCng8qLGcLkDphcbfxHvSqKxeBCDXiMCs58FGNaqURFQoNTaDaFWotA3nNraSFAtmmPLW5uVe6SgPgSFjJwtDZM",
  "key19": "4Ez1mHDSaCwoUCUyRG6Qcu8QrFrKrtnMtGGpxvQT9XQgQxkFSMnceZX98oubwoVa9a1vcktvrbbTRNYXGV25NvzP",
  "key20": "LssdtQytgCiPnknY4rpBAYBsfhcxTNXYN9MWdrRUCi86EmfCpZ7a8UeTtmcnGNQBzJVmmgxuthSP6BHNakhhjNa",
  "key21": "3rk9rrS6EzQGUvbhPEK6z4czDUJyHhMqtT6u7fm5suknHgbXPKCDR8dGibYbcs6i3Ky8xBZ8QfH9WEyM7cCkDQv3",
  "key22": "51DZR1Lsoxejpbd2BAhmBGMx78SaD1dGfLzzqZ9ge5JRv4SLKLDSKpqGFvmxQSU5CkEmUph9opn6YcMKrmwHCBgV",
  "key23": "4UfJzfhXN5SEg4RrxcCeHEFAQTSRXuX4F68MDxX941C1MB9vep6x5Jg5m6hNg8sXg5DMUkZmZN5akaLhn8Tqze2X",
  "key24": "49vRJgLSp4Yod5jQuwrUAzfpgpA4HJSwXbimVzZ6gg8Wf4o93ofMJq9tzkTyFF5E1iXn4o4kz4Aby14mz6XwrtFu",
  "key25": "VSNpN6ZsYrhgY7dwxgwJQhvJ6JTdJUjHaegaEevifwssfV1y2nskg49kfw4jAKtKYyZwjTLTzhacTvrTPmuPQyY",
  "key26": "Bq2Yytj8rKyA91oR8gVBYmNhDwpZtQFn5kDc4KM5KKa2Tp4u56g4gdK9SZ6NZDMzdKHtKoPzXb8FaK65hDaUbxx",
  "key27": "3NSSWt8zzB8wZPnBa8MXLV7gzPpWr6dmb6EyZ7HenxzfVgmqdGUZ16aBMgVBF4j7kFVWxeNUuEdqUJMRx9vLuUww",
  "key28": "XYETKA1LMNa8pKqxgRkBg16qyxnTkFoxCUnE9BpURXUdJq9bopHHb6qnwfkSoK5rWsyiZBYPTFhtwYxKUKZ3W5R",
  "key29": "3D9u8pwECcC81E4JSopijQYyoHNLQzq6EbG7Kk8hFZnuZ4sc1FA6WqynnDqXQKWfcTUjdaHSvChN38ohVqnCogo2",
  "key30": "ZsZ8Gn6rD3qoq1sYcdh8WYWXsCkDGjtCVT1EMxpLeozdqKjgfa9PjatM4GyYVXppWpPjYFMafhz8f24aeX3bM1n",
  "key31": "52Q5SPUFsYBrBb6TR7ua1PApi1XNUSgRCeqJxVYbGZTMYuuX2Hg4hQqLJeb8DsYrRNJYvfzmgJFvWDUUYv7KfWjC",
  "key32": "4jZ2xkfHEHWnbDkvVU8zCYfGKD11GwuqSqAQrUsuYKbMWzeqDCkkhLLTxYGmX732aYxoEWjdJym4sitNH84Fx3RV",
  "key33": "2zsdAvqBarXSxtYTZK8tHnkTxhQBu9tQNsFumh15qvUaXghMxf27hGW86ww55cesiCSJrGC6UuGT3Cgh7Sy25gBe",
  "key34": "3SHn3wsWZyKhcEgPeVpU1zXujVZUW9mKByNoB9uRtTMWCZJsrTmfjXpqEUr1gneBbhvSLPVBQPHXVgPd2BCdQ71t",
  "key35": "3mFHPAHDLVoTcW9LjdcoAxxXiXjj1T6oiGEthxNcsV8CAfwmWHiM77Tj8Rhy2JhHCt5RTXqFnTB7Vyf5DhjUWE8A",
  "key36": "Za1HvKrpzPrQtEhz59wK5LmqgPjGGkP9WiqL9CUuZSqhVDxQqUw3WZmD5brdz9BGxVTB3NZrvHs3WZT18grvsbY",
  "key37": "pjnpSpbQtVRTf9urLcv97K1vsF9wvexvRbsaZGjwGM3scdgcARoi1jCsEQM2XGYmaFroAvH6vYS1PWdQ6XNuTA9",
  "key38": "4GXixBU1UZmsMb1zEusHtRurozXopU8qMRL5UTcQh55nbq23HE33Q596pNBYp9wsgJ8re5UisqeF2VJPUoeXKsGs",
  "key39": "4ov4GhK9wYNoWHTzrND3bEcSuoZ3T4hgxCeDbwqz7qRUFKhRCCPqg4pUGz7NZAzaCz6Pxv6F9xiDoZgPwKFAdHPG",
  "key40": "4bC3JzvGnR83rCuiiWKi9bcKVZVi8kLwBoeAGuDbxjf5AZGdJBDuvd4iA87Tb1mnsRXPDvxiBJXy3KvEPcgAZ5ex",
  "key41": "2VsK3G7yAW6kAsSXZjKm4fcRYc4RufuMutJ4xQJNe9hf7xQvPJUDy3nsWqtVrSyGno8gvW5fQJxjj8jAgMXMgf4X",
  "key42": "beitup4u9QnbTiSxRHK1XRDGQSHRzX46U3M2T1NV99CHRhXpMFjmaDdthufLhoLE8mBeEjDNZvSAHh6ZWUK9BQE",
  "key43": "53YAoehYQd8afu921ogXrYbnDSnYMJNn9sjcSyrYLbyjvdVJWuJ5rX5BkB28eW7qr3yXynS4sVfre6PTmWUTTEoi",
  "key44": "2eshV5HgavibekdkbF4wsGQHauVtB6JwwZyH2i94ZKnaZjHXF7fpzwGod1TJC5SBmZoPkiFrWoH1FLdHTgfa4E1q"
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
