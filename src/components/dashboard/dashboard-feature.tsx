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
    "2puTpZmtDtpQMJdsyBjjF3wvzccD4Ue1GWoWvyXyVUaRzshMp53d2GQASzHjG14oGzqSEgn8jiMFsjsAqt5CuyhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vu6teyegHYvoSQ6ac6YspzM3nPv8R5nUm3oAageU2hUdX9K2mZPpSmvP6KrG9xd33aPfwypqvGQJp8PPHeFFgQd",
  "key1": "JsmxdXCHf9pA45snCGj6ummNwwdGJa6xw8rPVWV59x5pYxggy3RsRERgHk7PWvLiqNfbSqZCtat4fConzxm1JH4",
  "key2": "igVgVVa5yiEiGFd1g5w3H5EnPUu2ZEXVXxSEzvBrKx4RhmXW3Gjd7LxTiHBU3dV2SBFFNxsp7Jozr84HBT2QyVV",
  "key3": "pPxGTeYhxsTt1kSMGFAVGeDHZfQYx5ANTcNbNbM4nvGe1Nph62A5M6SjH5eNxXBwa3mkJbYRXsBwwrJgtpf4V6t",
  "key4": "34LWk7AcBB8vzrGUaHsyiNg16aR7UtvrcsV2ycq8ffnB3ii5XtLdwR5axVTAsEBW2bXE1ghxQyczHUxaC869Etrd",
  "key5": "4GgWqfMDYaLvesDJhauuAyfQWG9nYpcnCuqwZWRSH29focb1Z4rxeZB2BUiQaNtX5GjdHBTH9NWgZczncgdMuHFA",
  "key6": "2xbY2czeE8yK5g4Tivnb3zmyjZYjnLULfza9SsM4NiqhecLkLJfsZd5Xg51gUu3FbXwkyFFBYMeLcjv1Uq3jqWHR",
  "key7": "2JpZ2UFVEwJCuyKDufAUXDuXbpnowowWEdg2uqtRCs9TJVo8yyP41MBjCddCmWwWFVzdNoJtPRQVP1DyqbnFLywo",
  "key8": "4QsJE2Qg5mHTvdwPEMSDNQFWrxm9CanJnDrJGAgkoFNGRVodgaLUWxHCgzVMofNcUQeuhYV2UMvz6eVvyixRqFYj",
  "key9": "igx8zqfUKNqGTrY8nsx8tXFMYnxGbuzWujZrkRJP1sp4QTthtrFnUja4H9z75wp1ZibSNaj5wNHfMTWccMWULD2",
  "key10": "JXonp6MfMJBRRdhXQYN2Gk9d9Kk5MRcLtZpgQ85ZjSn7ZTXBEJd56Msum6EqqDUbMa4XY5PjcBA3GKbtfPJTtDQ",
  "key11": "2iwFKKy6UkBgAfW2Uj2qvupPM7uEYAh12N1W53pKK7niorGS1uaxaJDZDD5b2x4Z3TpbW9wAHMkb9ExNpNQMD2Bg",
  "key12": "2Py8zy5FbU3eLfj8Cp6mGfaJ5sW84p4ff316Yw9prVLrcXXWiLdPiJNSYuF8haoCsv9mkuZG1WZxQnc3gJceGG8u",
  "key13": "Vfy5WPe29rmMphRAFhmz9oRA2a3jpfgDTFcVANXe1Gw9DiCaQD5wJkK6Au1Pppiu8HchRumiocy9rwxS7YWFTrP",
  "key14": "5HdZadExkynix7XuNTBGsUVQ1s68fBmXnofEtZYH2VDzdctgutVDyn3sZrJrwHCfzHvXmYNG1bbmp8CHFe6D61jX",
  "key15": "5wdQG64sSyFPyxgjMKAbrSDkrbGawpRYDqVi87qpuc8j1XPUeEKoyw85AepHpzvBJZQJpDeu2sQw2yobqAaqHmpS",
  "key16": "56kPA3gpraKYXfkstbnZaeTsnEsohcHtnAwNmSAHnGs3WtMVeooo53sZVfGDdtcAqc4GGB1YMMj2kpsyKBteuMPN",
  "key17": "2Ehy9pChCwHKpEakLNxWbMUyJLELGh59NHr9ypvDy3eqimWa2aqNN2Qr7ndcZSWpZmcKD4pjHmLcBQwDiukUhu2c",
  "key18": "3UwHnxHDpLQ2ASsnNHLTsLKWZ4P8crxwcd6aD6eqWGZLxXs7JuQCuYrkQZ1N66vV72rUnkJG3B6sGEj5PFrAEPM1",
  "key19": "26p8JD7zopPMNhWMijCn8kExioAfrFd4fNRGoyosS84issJd46cRPECz92VzHTWRdk7QLnwJnSk6EiCJq2NBqEGJ",
  "key20": "5CUAE7iTmfZeig9e9F7St8XXPYVxYd8rPQwK9yzG7Y4MkmrUKRWnfTrJXxtsbPiM8k5ffL1AjYymbsHxZPgfCHw3",
  "key21": "2RqG9TdRdjxpxPoQxRVvgZRsSQKYMe1AoUXpfexCXaXGrfMVno7t4DK88UmrtextE3xDbwwFZ27MwQxKVPPQ4pk9",
  "key22": "2eeqbtLrZ1tHJVvmrvT1fH8sH7VuF2aXc76o2kdHhD2kY2wt4drbxQVBgSMWnXfXXAkQCfLUjoDAdKzpunNPEF1M",
  "key23": "3BX6KkMTvbQdC3w4SurPyNue71y2qVm2c3hGuCR8KpR3pJ2EmHJkG3YZRL7jprurw7cw9wfxV5CHteaAGuUp28C2",
  "key24": "4cqea6NF2aLWCCgNpJf8voeaySPjpe63dKrJiFEWsprEKqKzWz1jYgRvFWB4fw5eQQECvdKLcEaB7kEjNy7Bugbq",
  "key25": "3SLbBmKfbGj4FNBXVaVsHdVRsoj11msHMM21Wkyg9wZthm3VMzkvNCbWpjj21zHFUmuxwnRvjrnTCXGubjKiB76j",
  "key26": "5EtJDGkjDNhkW5fWWV9X9fTJyEWaFtK4wUrzYygV3xudSpmBtdM4RmoHKcBkoBGdiTZiUcCstg5vnwvgW8EJw4hr",
  "key27": "5BkQbXdVppSrMNiTb3dGj87xKdJuRZCzckVuewmW6PsbLuTsLBWEt6TXBhhud6HK5XyCTrGeWWcvbsMePYdbVH8c",
  "key28": "4Wjm1Lh1tddwVpDwg8mT4aAGaYJrj3YCQMthrLtU4RB2M63ssPEEqPmKXBPRGbNxwH9dJygzJdrQSLNky9BsYZXW",
  "key29": "3E44Jbp3J7m8ZjpbKAetqi9gwdLVWB3mWGG1JXvM6w2xDV3cuAqnNYV7bzkKMxEePyA21dc6TVs5XJ36NvdCJSwt",
  "key30": "35aUDZ4dvbrXmMXSTeM8YA3Lnn1Aw4gUzVpNvTx4iD9L16QYeFoQwcrfdrFRgnD1E7Kr1frowDzpLbNSrLjB2f1A",
  "key31": "35ya5JsXYbLf6F2KmcpiqyQEDcVeJjx5D8JWS1YwXRf7ZkMsLzUSmXSZgafKbFWbE67YevvoMPHRTWg7qVw8g9hB",
  "key32": "41SkHja7BbNUoYJ9DSrW99PAb8rkRpPSd2ntBkutHvMNwVpo6Y7KR5ZkoFCcAT77jCu7YRkbZEgfZCh8efRQMcWy",
  "key33": "5C2mwRGTPFJgMuJ9vggHEW2pFh2tZanrxP5sBDZBXJxx9Yc5RUt5cZ1qwQGbSERSipNoE8jZu5RdMvpx7j3TZBQB",
  "key34": "2CxqLaYw2rFKEUSEA96vxEJEnm2489qgySzCWzogeNdiLtfy3GgC1FSm6j3Ymp5tf7qiEyhgH5iASQX9prsKVAej",
  "key35": "2UoR8qXsTcRG1rwJrFjt4rC9EPhNQSVT9uKQJDThdQbm5ADtFaTQdnmdu2TkWGfrHcw9eBUnQbeQ9x4YfrH9x8RL",
  "key36": "2gBQ3iR4Lx1saj8cFaZsVyrgbECPe5i8WeKCmqFYxkP2iMACBSpBqe2Xz53b8j4irWiEDaKoUMNRxSjTY1T7tjXJ",
  "key37": "2wfpT1rffQ1evqgD1HhoW78tLQaKkdmigjzJuFbK7SYSQ9o6AddHJe5Lc3c3eorrs6YUiAyZAPqZU47YzsjyXnis",
  "key38": "2zN3px8dxNTy9HrhJjn42wNK5JKgdjTLtMwYJKeyBpFzm4exDaPT7LHDukiRtYBj7r9pHVkAZf2hcp6YiNeBfv6u",
  "key39": "5V6cDeGGMBDAJcjqN2yF5mZmNkGJVjsvJL1qDYtoqHPMUHWc9FyW9QHS52jB22WzHH1SyxFq9xfx8VHZVaBXaPvn",
  "key40": "3iPPhzw3RY6Ef78wNzrVPsn75npj7uPdTXLrCzqEUyywXeZtzTP1cMA7r41eUnHxr72quu2ZWLcXytsGagzDsLnt",
  "key41": "2RLd6qcvMRXo5RHwgrkXqB29QxhLmTCK8NU54W6CdXNFEsKgC1F9s7kn9xCZ9sVQ2dUchxdpxWZ4wiXJGQhzikh3",
  "key42": "2GdEhaarL4JGZWT5jVYpzeCWny7LH4kynDEUxZZxXnZj9NqwBBqm6pedH1N3mn3g7QGAdp5rkcrVeUgJYpNVmKri",
  "key43": "4QmmKv7TSMEBYCYVWaBPuRDKLsKZLXUEpfAAavJBVwE3Uo6izYyLpEL9ZqN31JubEo2TWK7uE4Qtfn56EekKgoKw"
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
