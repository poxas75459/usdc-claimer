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
    "5Gx9NYC4K4usbwK6oZejUWcx3Ns7uZvS3BHR8K1hZmjyZ8Hu2tHgNmmiG9WhNgjwJUpYVB2d6CnLynMs2ovpBauT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHamLXLXYZq2xwA94QguDFWGDEA3HgW79xcFuKqHvWVMpwuXCZXSexpeQLPqw6jW8cWF4kcP2viebEpkvV7LnAk",
  "key1": "wwaMFroCdSr94TdxJc5VQ2C8aXqT3N41njHLrGa7e7pzT8DGpti8jjdezWcxtCZ8bba26Ajz8FsnJMrsrjg4eGt",
  "key2": "SHcFVwUh77uHes7ad3v3D72cEKfuTqKKxb4XfXSwrPWESo427TwPBBHyoaFMTYLgrdoFzdCnwcDANH9Kxptvpnr",
  "key3": "2UPB7RsRqJYqFet9jjZD3xtgCV88Ngsfpr3LbxrtHu6WAosiBVSc9MHsLdyHYEBqSCUAXqfw2kvxhi7RKHYmc9YQ",
  "key4": "5RMjw4nR2NdgsRtHZgjsSqhauPcGzDDm8ZRW6G2hpTTVJGmK8NsFmQrHw3pM3mpdooszsqtwQ7LXeyzxWapMKzqx",
  "key5": "5A6ps8JA8xu2RKnAZazhnosxGh8EJj9aeFbiu2riY7QwdLJtXfsBLurFpyMgZKSraPZn1RHU4ygwMiawd9AzaMdD",
  "key6": "2YavXKtaScHYzyLCYXf3eK9Hhp6djARHNvdhf99kuLqb8eiy7Xq8eNwNZVBtdM3c1LER9obyK1nB7hJUju2EcdEk",
  "key7": "Hj37b93voDxer77mPE8QkRzSBMLGQwCK3N1Wf3nYSx39wrn2Rhp85QithGXo44FFhWDHfwqDq77hKjjQisz3wV6",
  "key8": "5VjEj3febs69oeJqCwh9dmRN6SwKunt8x7TnTEdGiQTsqweVeQur49weFHAtLYWtbnTHrb3wQaTd28DPJ5wbJQTU",
  "key9": "3fvwJ5vBWvn689HwAdZCCnMQAfW8s531q4Cas4fhVssAS77JaBPgUS6DR4AVGmP3HZtbSYrWbjtEKnusJGDD9mdK",
  "key10": "2ekjZqJZJJ7WLDA4QYZb4bwnxJdAscvyJVaSxXhQ2nr9j9jUZj1hUtR5X1Un2mcHhT57iqdZvwaPps1GUeem7Cy6",
  "key11": "JGKLoJ87zPnW1NCUhAEBBWGSF6FrJQ8je6YJ33DXhMjqi3wnYToettynKJZq3mukwGEifZEdswana3vXbuGhMid",
  "key12": "46tQ6c7LqxyrFUHT2zEg5bGNZ2R5Nbx2wUTcMMkyrM7KQhJT2jsxtquffEspt8QXtUvwtYJRFhxaHyC9DiJXoWnX",
  "key13": "5AScDi7snUsTSTAErPc4RvVLiX1jUKZ9J9iB3HFgdJZZUL1yMSDT99yMoTXmpPCnfdWL8oaNowuiCGnpyrk4VZiV",
  "key14": "dfW5P7zjtNnvMoxhkvDvMHi8M48ScMpLu98LMwRuy8pTEeVxMKaF62L19qatQw4aGeDFCwAXyGgv226tFLVQAkb",
  "key15": "32qwzWWtUPZqNmvQdigCyQ2wCvyYm6DojnYeuRYoQBuZvgVPCXVmnrMkymXPXb7pS914truSSD99Q5xL46GLyCNy",
  "key16": "2WfifdsAxTnZrvmjRotZ5feDE7C1w9i8FzXeNWtgCKAzyDhKPw1hfdZ4u7i34J7YQvq8NUT5475bG3rXJtMmbJqC",
  "key17": "2N6DrjMEiGnuYDcXCMu1ajsD761713ATn2GvdVJ2skPXAw1MWGdjYK3GrEhsnx3XQEAQJ8adH7htHwAWEd3Jf8AA",
  "key18": "35DDytKteNmoJpMAaUAuDf2iXrDHWtTyo88xH5YkURs5Ro2UQ7ZWAF12mveCwHcLWdZwkUPoSSjD7Ut1QudDXWzZ",
  "key19": "3fkETeSrkZnnLAtR6qwnnPwoiWwbcNcoVsuxYYUccL1xfyq9vBPRFoowX2iRV6aj8TghhfgJfVejo8XAgcfw7SEu",
  "key20": "3zLMjGBk4nZMfZUbs32Eezzzc33WxSxefzTyUcKvGTTuQXYLaC2rt1TrmMAfL4VZJxXSXhmheicRacdKEXaGG8bg",
  "key21": "5x9hKc1YeTYSe1hyzNCgkqftpND33f6Zs9VkcgQq6RqQFUVdrpfWCsqrWDfTF1fopWA9CntxhY2ejFQHAkAru5uh",
  "key22": "kigVFZdRJXmmrjS9n6pHVLLoCY4QJakSY2KTdGtg4nHXFz7LNZ4gXFd7pLFD9hZbQUmcYuUzhyzYmemcirpzXxV",
  "key23": "MoA5LybeGksf4554gAB2FpTsPSarxcP8gtTNbczLqpExFSnoBFywyWsaKPqfPYXHiZgBVGGva2S6pzLreTE4Qw4",
  "key24": "5UzEonkTLcefpntHjMbXv9AmM9XCw3zPjaJCyqs5ipgUSsEGpggUFLyiVi3uNLqwYXuYAgcbLno2MRZzUZQKhuth",
  "key25": "59oFEVzmFajNk46wzWPgWQtiJnFQNUX85LbMD9mdMsiSrefQqc5zvEyQct6CjokvrWUbSw42qvnuXgZCrguxZKvx",
  "key26": "kwPcHYcTs9PQum9RDPEV2Jij1af6vShSc5SWTz7zPiAyAy7tYsPQHqMsFiLSjyqtdJBhqB3GBgwLEsCMYsDb9ty",
  "key27": "5VDzLZcfq6Cx4CqLjE87TvRE7yLiyU35TzWokhUtMxMEPA5vVtMqwYwqPLBM1ZhMykhhkjq7nq1mTrZLv152pyhn",
  "key28": "4nKoFLmQcPmuJsFTXFcUpjx35abjdq9SAbzZKh6SsgZKggXLQ33QDv1Z6yZ9ALn8sBXmrFhbWnvMFroo27RpqUqf",
  "key29": "3QAdM1d2PQVV63eSL4Tpcz3QBF24FmSMRjgkQ2GNnaCYucLNZRHpFwEYdd8gZgc1ybhvp1vunFFmHLAwojU5moKg",
  "key30": "4bnJ2Fj6aemvCUGDoz4FaYvJihz2X29yqPW2Cba8aiiGbMUwGKX8NJ2vbstni2MXHxgfhrnfRWmVNzAZhiar6vGG",
  "key31": "3SXx8UaohHcwotGqAvTTA3zt8YbbkLCdSr9BRPxFd3jfwgjcLeWQ1rzgQ99cfPYgaSTko3F6fCykmEjzKLTe5swo"
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
