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
    "2pUTDsYDHmz2x55N58fHjsfhYwMya1NXai4iJ7xnMkzw5JxdfY2JRAQZzBiG7ygtja7V6y9pPYrxVHVjsDRsDVFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67QG7DWCDdA8RYoHf7E26Kaeo9GgkwFrntaY84jqYnogcBgQkBcTKCp6E3y3mqCu4sVoLZPYgZbfBkKhnW27poqp",
  "key1": "28ykHRZeJhNkz1zv7uivuw36Vs2UsFdKg2i3JU1ykUJZZnt8Gn2ekWU4YBSVJauYfJxuFKVznJjbLLtRvgyrAxYR",
  "key2": "4AdS56RkYyxpnHiYjnNfX5HrpKTaRmNe4U2NZtpK2tiimWwTvJaRkoq645j3LtFQytxCTmR2guarf5GaGX5LPxyS",
  "key3": "5s2PaTZchm3E1NjW9hHczV3i47QaD9jPfaP6WbrdcMud1zcraRXXX6E8wBkQRRvUmteJop1awgrxBWJq4gRoBVMh",
  "key4": "5x3CxSipA4a9CB3x3Ejp3JMgqx1bUFMC4oQJBp5oRUUvaDtQJeR1TNff4py2qCJWYa43XyhBnEivwJng5ShWNZdV",
  "key5": "2HQJi4yxJ3JBCKLexhxwEXFV8PUdLDx7pfiQVWJ45NbxX5N26JEJC97DtYUxz3mUtfzq51gHNKCHPeNmGoFy5PJJ",
  "key6": "2iVDdMMiFcrbmdLSNDpckx6oyVhdQkUay2M3oWtxyoix7X5Whq5i7vjKbkckSdQdP596zgJqDnfJPiuK6HMxLEm",
  "key7": "3QsHzSnUaobZPotSFKzmon8XQn2iDKBGCTVwogmX3JNMvJ8WbJ8NmYS8XXk8JSq5fAMGYdMye7dikBfrTQqPTuDz",
  "key8": "5YEe9wQuXyjg5rz7ZbEgH4DChcwWe54Yo4LDCpsWoVatRwfEWkYZTzzphcVZywYpzaJncPN64mwRozsGFL5Ljw3i",
  "key9": "3eRP5J4c2ufgb1rfmUuphgGKywD5sihuFvaBrXTHqxXLvkZFWkSdBfhXgVsv6kwcG3YE31Pm2msF4o4S5zn45YEE",
  "key10": "4yDb4QPKexWmNZtSuXdpKV7Gv1JH4UnFKrhWT7Q2NTzQP8B8d81VQSuX5nKCspyzBLZV2dQfWE6cqgwDfwdxgSLm",
  "key11": "3vFTw2ZgGbKStUy64WwBQkfSye9WgnN2cm9QoJPAKtLvJm4zuFMWjxe4LJ14hxuThkKcz5QLbN7MDShkfsaFjquG",
  "key12": "2C8PCCLWJyGCMqzmbySWu25NfkypGdLBdX3p2aYMV3hGdXxUUA8Tije21tkvvcyRHqU7dCQeWJUNqjzMpTmjbkRG",
  "key13": "36LGwR1BbXzcenTDgwAhEne6cBwBXDSm4HXfodeAUQERAk5ZpeCWTSM5VQkaXgbNNN2qnQDKpryxJpkuNvmArtJ3",
  "key14": "4SDVmiisBPGcv4Gs9NAbH8eq6Sp7HfeYYMbFtvaqQLosU9vxDFM9S3R2BELbiggPbYDoshzxC8HQnMvMGwEsu8i8",
  "key15": "M3tJhHaXNjgJibAUqp3djY4t7WWY1rd6BH2BzJNvmrfoVpmjaL1ciT4LiRqdwfZXbPKKJuE2pp4m6CpqFuqfFmw",
  "key16": "3Rv9ip9Ed3FLBPuVmP2m1zXNHboApCndQkYW8817DH7tk8ahH4PGUX3gtfnVA2EhUTNRj9MkBkGePM8STZi9Xhhw",
  "key17": "4yBwbrpgQc7emoGeDsLRw7pDWbwocjtkvtKwVo5PZG2RqvNnUh7GHv7V2ELp5tFzN7YZhBCr2ZKKgtgqrnmw9x8b",
  "key18": "4Zdg4JnZQ5hMjAD8LWBLrFkv5n4XCoybA4CFxsYz897766cQ52ySfBq81jJskd12NsLvjanZProGcTXX2cCxpu1M",
  "key19": "56ccSB2GZ3vfuQ8PYLeVGuTr3N3KZd7TJcdbH2jp2WohKjAti6L1utsULQanm89kBFXmqzTteD76rD3ctyM2bQzH",
  "key20": "5yMzEmhRyQGm8EDUJvbPHWpA6UdgNxBdjpJnqieJWrioLFK7x48ZgZGc4Hs6WH9urRWPBK9mf5HaKgQ8axbihdJm",
  "key21": "4DAYzm3ZCAwejDMq1TSBPTBbsghnTxdr9niXmtptxBiuVbkgCiDtfLCW7WPKpResd7focAn13Fx4XtCB9n6P5DiW",
  "key22": "ti3Acepf3CJn4QriL8CuzJy6BcYaBUjqjC19Rs7sPSC35QgLvfNVQWnRTjq6nhoknfK5mS8jbMhPtRVr6xQ2ANR",
  "key23": "2tuP93AJ8zq3kdor91PgLaoQQeEbsaygyqaVW2fNHpGp3tKNrCnsvvexkzyyv9ZGx4AaYvWHxBowoNuxRockFAaG",
  "key24": "2kaonsjYoEVxfL836w9Mih1in7LDJyzSfB9kcEuj5TQ4qH8uS2EjurecokokQe7qiAjxHpSZe6v2nFQaLhPNV5Ht",
  "key25": "L5sEohK7kQaNuZdUV19LZBL7tjLB5SBanu4X12rHwpkSH8WuKiN2u7ZVjc8mDyd5t6VJesZboeukoi19uQzJcP3",
  "key26": "3y3H4u83CCuyNCXuxgk56CLvMMkTuNuz6TjTAS2dgNKRZv61UXau6Ae7GAG9JxdaRVdScawczYyT1tJUNV9DbXn7",
  "key27": "5HKKSUfKujqxUXXPZqSh7UpiqpWt24ps5vNrjWfoEe9DfBaXAVU2SMKfuUUq98Y789duboNBoHxciZdycvfZDKvz",
  "key28": "39gKxPrzsjoHD8ZdZ8Ex6rCnmCvYJ1pJQrBsnnExEUxC3VDU33itFdfrgZmXytexG2Y5drkV7Kkyg4qTjdMNeaoq",
  "key29": "4NuHNAJweJigdhHnZ5AJyXyErj9YqfBYz7xbVS3zBtkjXhPW5Vn92MhDYPrcgciKd6xYvhZ87zoEz8Wq5WmQLFmQ",
  "key30": "45krkPbddYGc53jWt78cDdJ2kEqcVkHdhigmugysHmGLbJp6H1mXiyGdAY2PgYKggbpnRQKSYidVXhCcbSXHAHgY",
  "key31": "41zm8Bx2yzXBsjNtAagx2UfX3gd9mn4zdFgFPRbsceuWBG9BypYGtVKcpJPgotYtvZvo2dqEky76FEyZ3EA7SjRY",
  "key32": "5PebHSoCNSEHyS5vGLSznhbqZgaEWUkrwu9fewhyaozmJkGMpjzbQG6S1Ff72imZTPFZvtu1UT1xSYJgribjz3he",
  "key33": "4Kgy1XCdxZAGjiqf2ufUQ7wV8byGrgB3YmR4ytbr74cYAydK364ZfDmFnkusLE4GzP3DP6DziGg4UPYQnWZQ8h2y",
  "key34": "2Kws5Gt2DhSuFfDWVVXntDAQ9oQSjoMbiQiQU6jBKnGgojLDExEbJwunPj8GiyyEoiLVA2cwxTT4fTQKHXTMqHkd",
  "key35": "36uTx1eTj1imEi9gKESNVfbbDzrwha3tjphSH8jNgMf9zNXNorxfpBetTFT3iaNeNkDYPrb66HGD2vU1CHpbVDKv",
  "key36": "57hWwnNHD7ujyGuCq622qSudDySo8efEB4bHnjknEvMHSsQr8A9uRa7T2g3NRejH8Yiw6yiwb9Cor2vroNrS6Sob",
  "key37": "42gFUSRZUjEt3yCAVNupferpUBZD2YrbES6pWBPExgyPg9rFE28eWy8MKCiB8FYLH3ienN1D3YxmGRj7xZZ3n8ua",
  "key38": "2T781X7fX6ksu6RxNGsg4XNBBg9tjDQM9CPqVtNjiAoaLWC2qXDEZrRWRZsuP6itJFk1RJtiCoC4JFSimtzAkbMD",
  "key39": "4sbJrfeKB6MvR7HFm5Lb3v1nea4BSxwTKpzTJT9AeZyBGRktwv5MD9omoJu7PkLbTyCR8LNWFa8vCkswvuhZ4sfn",
  "key40": "2GFxC96KrZFZPje2SxrAgEET5uhr2SApnrLGthX3VtHt38Nneo3qoCpHTEw4urEktfTGNH65TjuKp7dAD4SpB7ti",
  "key41": "5puUA98NJysZrHevenSNMTJxeT9nY47jCKvokZXqFT5fivs5u9PHjS5uyxbCPPgnTEHb6jpLn62uUdze7ctbzyyF",
  "key42": "3fxRH4aJT5JgjaemUYNJfwkFxmuVFXQP4eK5aixcMKzupaAboDGeHhieARZPzQhjoqKzMZKZAYFCWRBKhSSFGFNA",
  "key43": "2xm1UXyexbJ2CQcZG7znfDJdF5NiMt63K5ErGqBBUnru6qEYHVitzWjysmva3ryrUMSZ5q5fZwgXJyBkuvYsNaf1",
  "key44": "BgaEbNB3mSxDu9WDjPhvtn2jiSkSVtG5L7bKRpnTUT3MNjqDBtvzKb5qtKtyTx6cfq4JsnNt2KfzqdQU6Qv9FVj",
  "key45": "PfMxeA2EWjiRY2dbMjVpw5VG3M4Ap8aJY4TvL5PYQoHZuw3vLHZsLqBL5oMmonUzpmVEVZhrbghsL4wYVTZzZis"
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
