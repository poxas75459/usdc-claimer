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
    "EPQyABfngNs8dRjR7jJifmKi6V5vbnziPoPArznZfMXodfWhwPY49zB4n7odDLnkbDJsqZWmCs3Mn1uHvBDVGWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kiRJNUkXReTXSvwTwjAToX8dgURGRfCSXvjtmE2tnr6vHxhhwECyPUeB611TjzviT81TBtzXqu3LmPJJERxqFv3",
  "key1": "5Lm42QEGRhLBrSFPNW1PhV66GspbVZeKS2yW13d8n7FSppsW9NEUQV8iMALUdRkDmDtyyZhHTxwWPpLBtoir8Yjr",
  "key2": "4mUxj625NXZBgND1hLtZ5zGqm919ghRffazBhhEcKYBQ7kCfnfyeV8iZBYqcjN6xcGvrLppjHvkWS8FXge8hNVmH",
  "key3": "5cxbB67Ya65gXYZJjChkHwdj7yp2ui471FbLZTRi6HoKmgjeBVT9uW62bZ1TMrgN1znnuNT2QaqwVAAXUnWT2qCm",
  "key4": "295QAFUJxMPV9GfwkksqB2szqRJL94Er3WxEpDJuH521esTU95XTSLfunxj3ysFEB9JoEDaRXKqkmHDhJE5p3Dma",
  "key5": "4q3mhhsdCa1rcqV3UNEiAhuSAq2rwCtDxCJJRE7ndeEC81A6WTZiAyWhAWsVjJmh5VhDjjsqRtrXLttTtFgmAbnE",
  "key6": "3dxcqE1FZc2bC6iHTAWCd3JQY4ogf3kE4s6LoRf79i9Tsv9y7JDqY7garTJWnRk3cM38eTKoVWSvv8dtuVG9GeRA",
  "key7": "49JeKJWwv4v5szsxAKCe6pCDgrJZ3rNyEihBPfLzToDS1M2GPuYhbTFKYsyMh2XK7krA3i417Em6sJKTj912JP32",
  "key8": "5z9ivd4LRuUCJk4B66F5kWEuGikNCKYNVBuFGGNAjpcdK8Dzo1iJkk32ZjZmhCUA4jmWAr2ZU4B9YvcFrYMaUbJv",
  "key9": "4AW4NnR9ctVYiFpXc3VzQaCVCevs4rVN95JxNsqGxXEkuow37i35GLvb2TvxPLDHAhK55EBkDpLkRje5xDaSJ7dH",
  "key10": "ULSjYMcxFd9bAqQh4ZVY9RzJnVzMLNW5ttQ8WjGNHrJ9mxLaxVt7TwYqiS8Ei94XyipP9VZtkhW9HGbwNj7myxe",
  "key11": "2HocRZLN5S1LSGvgUoAiwDMjtfC8LUyi6bt3AaP7tTYWQ1JDQdActpus4Lw2RecubkXdKrg5dNCePmT9tTCuuJvK",
  "key12": "np6LWhSRTMuMwH8jhYzux5iqsKZAHrw1ubT84QN5zDsta9GvCJr2meENN4BabroS13e9HXfuLqp2tgM2eo4zG4E",
  "key13": "2g7JAQ15WNAMHkbXP26vKMDbmPbSEikFXCMdbFLPF3w8cSvJLF53saENfnaKLhRAhk4M9i4XTz3MGeSAX4HDQkK9",
  "key14": "5fJSuwZpvtTdCwJ5b3yHw9dZDk73CNZgUhZZbaF3mq8oFGyTLQr25HFi1FvTTZjDaQwdFMVssmW6W62T2fUYrWuw",
  "key15": "29sDukAxuhjobjP7b5NEV1442czVV9Ah58wadwF9QCgwKhUs3Xs4Xr8nYpfutRyxwnBmBu9C4Wjz2mUKVjNDe2Ww",
  "key16": "2nuXBZJxRnzUdLyJXHtX3wd6Gg1A2ThRHmD5xUNzGFLLgf4KkDWWpc2W88gR71GTK5s1btFVyexVJYL5ja9TKVUB",
  "key17": "3XW38GTZyis1ExvsDowL4sgqFHqL4boUEvfkvZm3onaC8JjSfi1rf83zCBWvCsiuX9mweDcHJfmbwdMW54EZ4dKR",
  "key18": "2RQyZ45kYEUHUuZVkhddcor6ApuUknCEasekvHMYNinqxKCMXMxJcPXgxQYZ3aFjuD4htG1nSYaFLRSNDVErbRh9",
  "key19": "3HdYq84C4qmLGwTTnBhBaM6okZZ1Z4gKCW3C1knbtmvWGqu8YSc5rpjbKpXDp7VYgmUvi2dTYvwQTZRxnKNnYkB2",
  "key20": "5cWKTun7FTsy8DyAq1SgGNHCNpvEbeY4pTDN3YfdXLXEbqGFK7A2Lg2QTjeV52Th3Xhwa7VCWbSGEfN5b79MifSB",
  "key21": "2EnSXE8f9xd3SGKXzAygnbEqnY7BszunJj9wdpcXcBSLT8sBd12j1bNjkJFrx7XYjnCjjzrJLDtm45tVxvQDQCWL",
  "key22": "3PtsDpTjGHGeJgRBGSpZ7TvhxhDGrNvuWRNkA3vS98iY8HVn6NC3arbpYJrCNpRr6PBZ1FiTHe2FtYxdtuT9YJnT",
  "key23": "37syc2M4xVoSExtLjuUnkFsqt99967i3b7n1XeinJC996dXAMWgYH8emiz3MGA6EMRv5soXEqyvUTJSRfMv7oHFU",
  "key24": "4bVKcoY7GbmpSPSAAm7q7mWWUFXDpy6m6kmoDfx1tCLnLucJSDuMAFGNXhG2MiJeSLian9Mphzef912ijdRk4rSx",
  "key25": "3K4cBd1N59Yfaj29jeEuhzeB5Zkxu8zDwwghaKYFcv34PMME2mnTyscF6a6W7QNP7SdK8TQimxQtu9LEiPyT4Arf",
  "key26": "3gjz5jw2gsszUWVt6hmwib7nJakwRiT3AZHVowLTuLDABdPjkmw3veiuTgvo43Fg8rEuRjRAsFGyawKsmeKD4sxo",
  "key27": "2FWjRmAEbpquULTzSTsjqj4o7NeidXcEiQA4guepMQNEd3gchG1UQvMsTcj9idjFbvPV3iXgWbwM4VWeG89gD5Bj",
  "key28": "5E2MrdZthDbcAhi4Z96MhshV3RB1XujbvjbU8afx7MiPQPnWsiPsqBEh26LvLyVjFsbS3QSNk5kbrWzDzwtdDNwJ",
  "key29": "46PUT8WtasPgxGZyv82obCRdr5W5CJy9ti3Xu3ymZwMdrfBPvpF6d6wq97K6LxUXHRkrv9Q4DAaaVqzW3RBPTqwM",
  "key30": "kFWe9UurZHyzLtvyUMbbKFXaT2siHEN6c9fqVjMqApW8h97QiEMmudKdbDYWAfz1CYrBT3U7BLW1Df7SUsxGbuw",
  "key31": "v1zRGAhNLG3kZcUudKZizqueY1Gg4f1YctEvHNUHcAdLu78SxdiyQTS2EUhyBreLRbsudnRiXHeYNjDkHKqAMtz",
  "key32": "5UyFijM2SvoPJhcVVmiHwsZDL6MmG2ns4vn7WVKWhLEjcDTHdwmJedznyyhXUcddWbBSkoqqg8b3e5c3bbKthGQh",
  "key33": "4F8KpadCu3pRFW41MzBWVnQWa4pBfKbsaQjTe3xWui8J3ta6UfwaLDHN5barak4qBHCghd6nzTNBuWCV5o1uwe8M",
  "key34": "3JK8j8cbo4oxpuLhWaSbiDzG5keWaxkBpXhtzR1sCKCGF3xfaxJaVjvJxfEXXfv3VHWrnKyvPsekEA16LRK826um",
  "key35": "5cYpHANeD3jSZ5mJjA5V44pk6FmP7KK9dCPMNt2hemXUYWZXVHCvTSWPjmTm5aap3TZ65qWXiswYgKdxxvdvBo8j",
  "key36": "488GVCqfM4PXeApSqw6vusPAA3Eqasc5Jb3E18WjzgDkReiZPCkWL3LD1eK3rRBkDQmg8uvavrub9n3n7KTpk8mh",
  "key37": "YkLUxGmG7KZcMQcYa2zw1qQZeTZc6r7ZzchPKW1FV1TBFYqVp73p2uxYFAd16H7LfFfKpkoT7hFDqvYK9z7LgY6",
  "key38": "38EWg8VZbwpQfGz2wxdCbc2qRuQVMnwUcfjKDCUhqR2xyiN4zDNVdBeRTmSh5cBmGrbCGuRo4Xw9dTCW27bPck1i",
  "key39": "4Ekr6tCa5UyihMsinDkTDEDMi2MSaTVVuQ2sdfMaqeratrqjJnZ724Cjj6mRigb3DQfrSXA2L7CJruAb4KqDmJ84",
  "key40": "3tZLHJkgxtt88wi2NXjtkJ88WjnF51vZL1fkDEvkxtKFWZGHjKqLxwSRjmnbM2KubRwjp6CEXCwnvag5qSKwCgPn",
  "key41": "21WgWZoR7RJpfNsyDhMhL2zAcUPvEUXynHqTWDJhAsu4pxsQbZukpz7uqcrQTzEhQkZhvpQJuPFL3mD8dqUckCQn",
  "key42": "569oN7u3zgjg4Qf9ZLvhibDhxL6RC6XUTCNohjesaFAWxWgY1wXoYBdVDYwkDAnEus69T9H5LWokNyW9rmPWByeL",
  "key43": "3GYv2m7MiYt6zechdGJvwEFDv6bwi1ZqiYNmr2rbLWLWfZZdoUC7qpKtWpukS9mosgb8TbrGLVM5hPLGf42Z7co5",
  "key44": "3TN972STqJfDf6MRqhjAVuDpqTLjNRiTXRDonzkeN7yADPtxS1NZFaq8UcwHi8sUVV5WKMhjFCbyXzgacgsDA45M",
  "key45": "521vgeQev7zjs9QTSsNmdGHqrmkhRrsVzgsCU45FmcCBzjdgtx8v8waPTjwJbEQDCoY6vCJNe5DghDpZ9tetiCCJ",
  "key46": "MNwguLSSQxcVoCUrMjUT4Tmxiv37Fcr9kLYaL8iPuNRpjg5wRCNwQQkEjEZjhXATEZZC9eyB69onfe8AeWFQB8M",
  "key47": "2e9b9THkPyY9WgHmsKEsJDEmqpV9oqsrfJyUSZc14i5ig1Xm1hRPk5Rzxw8ZnpMyjeuJpLepacRn4t2y9zZeefkF",
  "key48": "5yXMuj42ZL6vYwZocZnYMatSpeSwM9ewQWDnoTYBgfwjmPW1Yew4YHpe98TxNATQ1vH3qE9aj88vtwLXY5phC7Gr",
  "key49": "4aZQxvTrDFs4n1dySKE9AwRP327xMSvgaDxrbc7MskuPWFk5QmAXyBnkCwKA5JzvxnM24FT2W7KzsmNmBMxtpazq"
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
