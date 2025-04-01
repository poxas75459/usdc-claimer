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
    "7GrAS4jmncuqsA3ntQtEfqzKkrPxzsuiHu71ZYZAxMz6k2uYZbA51D5nF1UX1hAxcudxbqv6KLQYAFTJQ6nxQWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fox9p5m2GnuG8UCipYKrAq7w9xtToYSBNykEysWqPQSQJRdMxuPtx8LzMqnXujj2g8apY1Z5DHWshXRu1wQbYxu",
  "key1": "4XqaiLkxv6TiAZKFShnEMX5kFCnNcGQh1X541uRMahpjjpnYbDFoEmoKPuyEqbCMY3EaGAQBon2RhxBVTh5WeYRb",
  "key2": "4H1uFXAwHxYijcwoF4vSLWYjGhhP6D7Wn4B7Zep4LWTLZPo8QWpbRzkDEiAu52woKf8oF47zbAPkwvtAHhH85CQz",
  "key3": "4n3X7HzWxPaUqvGM5hEB34dBwB1fUzXimYE8y21Nd9HNwUK3ymBaBCRmtiG3SiArj6zd7a1zKJf8ZFjfhuWvNsh",
  "key4": "5xgnfbeYqAyz43FhjHDBeDMgToYcLtco3Lym3fc6opAj7FZK3aZPDLod6V8u8boX3HU2rZgKMroNbENAbC2aX8FD",
  "key5": "2b9zeHFatCUEihDYXz2kJNHtJL7o7ujz6mHMjc1LsJownMBYGtB3mjoU5f6pHJ463nEfiJnL8JXabvkpD4LZTHkW",
  "key6": "gVgGir5GCVzyDRpZBXnc1jXLxA3q8JTwLSj2QwvyLHgM5H6YmEJWDYvy852XoLea1AGCDgowGtQDPkBFPKjKa2Q",
  "key7": "415kR4VmcHCpGnTAbArD2U7QBoqXuEssKa4RcUf1umiUTte5tZzZ8ZiSjqY1LLtEQZmfkyRqiP8EfqV6s7sijWnt",
  "key8": "2S5nhoF74kCHTBcyQs56PeP3M7ENuTqE1kXRHrDHRtYEYxFLiTxrrLjQG18ZtaMRArTHXzNY2ZDzqAgy8zsNKTRh",
  "key9": "ni5VfScFsJgumDraqVLVAs4wmEy2rRAwD6fBFAYWPHbMSMw2CKiu1i3ejCV4BHLmfSu6QckjVRswnbyuYB4ztjy",
  "key10": "2SEGFY6PLC4tfGkhMBpuWkRSsPDGk29aaois18d7tuV7AJtrLAPGPyTk59sPh6FxQX8QkFJh3uzUNk2eD5oKgyLN",
  "key11": "5Wfd5YAXGG3ZgSzECYEVWDoeg6JvQyopLYUc9ZNbu7qVnLKDnsaf9ssDZveFeAvfbV3bRPgTLWqbugF6bdgwcnF3",
  "key12": "5QcNchPHAFcgqnq4BdW9dpSvW6DmNPES9YDRNVYpQ8NytqdKdCWhBvbSsvBXFfQZ3m48mpk9b7wpz8AEN611GEeD",
  "key13": "EEFZai6HCzSJALpykN9CYREjbGjvVx9Ak4Rs4C6wHPbiDfwpLqjkZsH7Ba1v8d4GDL7mZYDgGoHqvLzg2N9hFa8",
  "key14": "ohZYZBunmewDKt2H9EN48DwdB9cokepoqxEkp6EF4ctZigELepHjRCtKWSd3PTjdEyEPFmFsrRvZzPYALRovYYX",
  "key15": "XVCSTqx5GT1tCtCY5k92HQyfBAYTCPB2Juzd7EHNX9QE6iywm871sqX4DeAb8CqbhpdWgofU4BizJXwksLQthWx",
  "key16": "2CsYeMFdu3vVqnXwbVDC1Ukr6HiojxBYDPHKr7buBftfrRnYJUMJGexicsQHB3oUJ7cxQUyw66rCVeFJFACFVyPp",
  "key17": "5zCXZJYB2k6e1QQZjrSMsshGzKpg9NYfJvR7ujr2EMB3Y4nVCzXfcNSCbf8pBq1KwBzS4JN9csbFvBA8YyHYjkxZ",
  "key18": "5noGedAVUc6jZoGaJqJHyKasfrjpi1Zb2JdZgUYWK3vRK9HtCxtgbohaeawSwG1CbYi5aXUBL5mC3uAnZDsoggum",
  "key19": "5ZCHbUMAjfh2WuAAa4ZCNCxoTAZqfukxCLP9nnEcLCM9F4psfDdEbrgjVRP45vDtRuMwtaXRiMJYq2oATFdP6oRt",
  "key20": "5p4LFVT2AkztLZWKhS57Ws5UvkdHkULkGjvrVGuAk4vcCmGXyTuCjUjYVRDH9gA9ZYu2pt6742LPhPLNWH7SKZUH",
  "key21": "2uimiwZF4Ka6PA3BctVpgVi9HDfK8PE4mEoN8o2AbPoDYxbywtb6LUHo4pqaPmjvuupWF14cFkXBCzAscqPMiQx7",
  "key22": "25RoqCf1TfdyfQsoXW872xZDMyP2S9Arvh11Q4cb4yUxkkPfDghwucpQ6bQ3sWQV7TK2DErngm5WkbcfGimYDkg9",
  "key23": "4hFHES2AgxiZF1h5ZeyifjjABhf25JgTnUGRSVVqht29uGJ8giCTogmNN1YQJzVmV5i2ZwaaapKxY9Pp5pEDk1tg",
  "key24": "5NziiDy1LBq5hWNHbYe6mpE8H1kUgAF2R9yziHZSBSs2rmcQqbL4x3Hy4bAj4te6LXAU9c2jEhtqN1EaSGPi9Tnx",
  "key25": "DNxVLgjjSCsdcaTHxGkc82ypqHU2ehjzqiv3jR5FtkRpip2VcwWzGbE6JGoN7Btaq41ZWUchucfsDrU7PqSm44r",
  "key26": "45Vgv6VqqjDrJj3hA8KEJEK2A32N3yMWsw7h1euMF9qrmPNNb6uWHaKwrQCs839sdcCMXP42Pzkssui4gfBnjivs",
  "key27": "2H1hizCfJGxN9FxTUorTQDyw1hh1Dr8kjmrrZX6vNc7TvowbzeCnWcBRggzNc1v5gaMLei9jn65fit9hxwyM5ysB",
  "key28": "3Y4AwU8R1GhCfGCwNsvpePTUUAo4UWrkNh8NR6PK4NUjrZNRa43mwVRCGEUbJVMX1Tv1gTaHNQRNoJJphsDLSHEs"
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
