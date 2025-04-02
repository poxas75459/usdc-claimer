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
    "4ZHuARANqfYHCQhwpky4PCND2c9rfS5vt954tRcYfL2RNPio3Ak3vdhEoFfH94bdKgw3tnWTaCKYqr8xvXiPXyut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iYjJ5FVKtLdtrqsAodkjfdEmdQFZdHvcnBPQ1xY8nhyptp7ActPSyqjx7gs5UCdpPts7JJTM8TJKWPjD56nT3Yt",
  "key1": "7PV5WJkP1C4AnBwJBJhPuTxVXVDxx88v7sMRQLc5zCxZ5kwF3vfQW1h3dWCFa76f86MpFFLrJCBwTFKnoeEfF3R",
  "key2": "52i2XLRerQUzcDvetRCKzTfVGJXWUfRcuqHAcGDiGsmiSuWbmUeAVkLoyevy5XBCDq8MRGCSqGYd2CkktPXyEvr8",
  "key3": "51NhC8T3ihniZy2kgF8TuXBdHUEdasJdPSSMPqUkKBB9zsMnnnvmkh5J2Mde5C3fwSNEcVYUhoZoR62u9soBMajY",
  "key4": "5knxuJFkBqrNFJA6KLyrZH3q2vFpNaoKX7WpxqV8ffHSFLpc1WeBc76rfWxvTHmHhNQbcBhisvEf8rb52tbh7ohT",
  "key5": "o19ipmbftiisNLY1SPhXvjDRCXauKL9NbSsMzmc7PBZ89Yz7n2Y5727YNwzKKonnAEbn1EPmLFiyGy3ZrkhYqyF",
  "key6": "2Mb3VytiEjhaKuy9PyeDMBraWZij5sjDJjar7GUuN92e3d2Y4sXHvMoe1XMnVuSNT4GX8iq2pPB2bvJHfEUq78v4",
  "key7": "GMBY3LHxRCK6H8BpDJRrXTXQ8jnpzE5A4yYuJ1rqv4WoQk3ULDnVhrEXsqA2SVZjJgU3DYYxC35e6SnfsWUUn56",
  "key8": "3mL3rxo2Ab2MUsYUfNL9ihKFnup2n8nkvF2PtWAVdPAQDsVZ9qfAotmByZxHqoZqUCpGjAtgJyKc6iJjtJfHxjEG",
  "key9": "uwztCK3nFM6WdKdTgLjAn85VhJN7d1chg3GKFts5wp8uJiy3wUJXXhpj3hooDEckePktvjFtkFMokMB1Ta2sk76",
  "key10": "5AZL5fPMgFfpXdPAKA2x2wXiXG1TeRwaVb62k2eX7oukNdmH3GQgYuXQiJHQ837pDHcVyFjofzGMUR8Pe5V1FMuC",
  "key11": "2JGEm9B41CTjXmwLkA614xoTYc9vhjQxqWna1AtkKECmmDKTd5KmTQWUuriUWEvfoX57GigVCaecEfHmxaA3z6Hw",
  "key12": "APjmB9KLAcoHRYXNp59xd6tU3ee74DCMWmYq1vtGTqBRPz9v3GqycpQPvYQQRczEDGUTayC34YYp827t5uxbDZN",
  "key13": "2eNon9668yzwSrZ6JLmoBueEFDCHof2ueyF4fkd2mYz7c1QWepUxPjfLtAwdUaFyBy5mJooKCKY5ycfcS6DNwhC8",
  "key14": "eswYxRnuBiRCMxRQwVPyvVvTi56ndQPoebwjZspnAPMNa7v8s6J5x1NtqnjoouMzFevVnNZ9EHMS3h8MNSVhE8e",
  "key15": "4KdEuPTYkrJ17ahGbKsXpmTct6xpAquZdAK8NFSU4rQVfRZ6ar74FmtLYuehfdnMj738h1MT6qZCWvWWkTeup7WQ",
  "key16": "XWRwFmyGWeJKygPUL3659Sd8NCZvjtaMVX3szuvLgvcp7q2qWz3jof9H9HXNHchmxEZUHUj4ooTF5cNupsYEeiR",
  "key17": "E2pa4zKt6BEGBRDMRDQi4EBKi9BS3PqeakBzNHic1fgfMk9Ah3hvNBizrQXqaV5kPbJcMJCsvzCBw9tMPJQ68HQ",
  "key18": "2tk2oiHyMADr9REGk143hAE6DKmobEFJQUHQ3zoJRBCEdV6RBCf41BHwz522G69hcaGcRrEJpQycDsVQZaTtHWUY",
  "key19": "2UA7zZgxuvDn2U4rBgS5WyX9CtLgy545pZ4QxbpY6ivr84cudHKBqAyddzF7zG3KECzoTqVw23oab1XFDytUtTPc",
  "key20": "4S2ZjtQARVU9ZWNcPbv8NNRkrEwZ3ZuHx5rYC3YJhL53JPTthJ3esEjfkV9vZeMKiCQw3aFMZ8xab1KjAfo8XtcH",
  "key21": "4LW4WoBrgVSTb5ndt93YR3AYfNvAcdYrHvckpbQreTLvr2mLG9U9o4sPJeQBD1FQ2YFAumCGY1KSb5F7323GiXDK",
  "key22": "2fj37xbwkgM3yRinwUdvLuL5CSQtumfx5hBqYGcnpZAcyjfBwvNTLmKSqTaTd52keSiRjng5cCvzox7Gg1wiazKi",
  "key23": "2aNiFttfCLVVYh7uiw4y3CWEz3zM64xAKk6921cYMXn2kucCQQ6b4T6T9ePLrxffUQdYX8d8jqQV57wsZokR2YsZ",
  "key24": "jk5KHRQXfxUb2XpquAeYWPp7djeRbUocKddT9uijtTnNc3wQJWTqC5Nxm3jZPfrzE55wwZvavZZgz7DGRFLry7M",
  "key25": "2V1FWhFYCapDikaotDsDkCYKusugpahwzowxoYFvjWUypLAaYbyRwg7HZ6XFVKk6ydV3gpemiEmZ1AQzb69ME1th",
  "key26": "5LQAHqNN57rhLtXD72SXz6SwWYE3qWZ1ijUfMG9xPacgGJx5WWbqfZvgz5jdEgLhZZ1dNntxYiqe76o1nuaXbNBY",
  "key27": "2pud1SqJcTMySjzf1RACW2NjWpsoSzPzzbTmp3vYswNEZgWZdP4mdPrtHS9ko3RtFnYVruooU63GGZU83zUk4jDW",
  "key28": "5QuybBpUVS7pUx7Xk28Ls1GeyrgG8TBn8oFf4X3JQbvfF7gGjD69MqVhBJBaaFr6vjJQRuQimHuoqWbPdgCkdZ12",
  "key29": "2GM8Dbo1XvoVkYM4UiTrFFNUC13YA6dKJBzXynpBGtSim8AvXreYWXDapYGSk4ucDDsAj9p79m8o7BjCqi8MFvGQ",
  "key30": "3hJWs12fefDVrabaYBrehS2YPyTucpZcZMLfY3JXLGvXbqnx858GiExFjBFYKBLYBgbRGetWtFfub3uhv6De2P3x",
  "key31": "h4zApEizXe16bWXHmkfbrGpeWgDkWfjSMnCkxWvuyqzrAf6BsK486wYBnS66PEqLRkFv5hvzjoWVe22KiQT9uCB",
  "key32": "59CPYWtHRmR6jChjAHNkJaLfUGKMfWzgpzA3YfixN2kVBNvJnxPFgRSjGn86LRbfsyYFSpvBdsbzLyagjKkNhsRt",
  "key33": "3dR7G6rKATZAcJD2M4h5SYernsZYBsoqAix27W7sodcSNs5BoMb2z8LvctwSayyRRLBbq2DjZhomW2jaRxMZHWSy",
  "key34": "3zsWWYveEiJ7TVEQRTdWP1bhyEu6bcg8oViK82M7kDgfSsoaxmr3bvj8Asy4V7P2yi9L1PtnaFSaZwPBfU2HVfXP",
  "key35": "4QyBhG3AwgugTaDYtywTGYiLZ1n75YqtzQwMwLCSmSo5WFydBSkT3fUdzLUq25kgCnQ97KzJrgtmxg3RmEqweoJM",
  "key36": "5uwa7MgEyzbksJBN4ZsKeU33eKuvD1ZDxQcbkr7SwQpFySs4xsA5Lv6LPTp3bWJF8sJpxT6m15wFmyRozgfHVCVm"
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
