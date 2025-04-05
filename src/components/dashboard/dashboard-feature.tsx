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
    "3oUh65K4UkMBJcj4FGzZ2aJHykWtBuEQbxyitLyYiXa3fDFUDszqD67LwCzjQJUcrViH6Kw7RmCucZYeBfwqLqZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QrsAp1SWJKcRk42669S3sWLnsJyFBa81pW4CkJsa95fwYQmvMM5vE1kV4vbqQvbc5R4TiX5kvxXpTLE85JKbvv",
  "key1": "2jL8Xrss26twiacFuxLF2BGyUG6iTqRuL5JN9QMCPWSAcVTwP2jXR9era9NGQ5if1hcgHDctpEUutVm5C5fUvyuP",
  "key2": "2239PDczqCUE9ZuraKBei61Ffm6UZ1hGc8Hh5Arxbs94z3iAMKDbVewSvLZorAayckERz2TsAVtfFz7y5QiWKMbY",
  "key3": "3mQaCcLAgdRvTrKFdMvhrqirnWYdTtb1s1w4xNFX3S1EFpm8UkeWKjXfRy4vcZ1Wx5FbxQvE6KV6K1451aXYwr4Y",
  "key4": "2iGmiXj4sbUbiNuHEa8zKgxKbYRVeApN3waBNYQrnhYNKXzYekG8gbUF9QxYpQNHtQyGJVCZn2DuLwX3EQnwxEXV",
  "key5": "4JmF9tfpCU2tfkXY2bBvnPwqS19eTGooLWSsBNkBnGqajqbUGySkcj8Lp4pqiP9xUPM5wEb1ngUvwfDGRcJ7TkZ8",
  "key6": "3GyYBP8WVZqxSRCsgrx8LNtVDXTwBk3QY6ak6EsanATQNE3yW2fsgR7Mh9Qrk7joYdHDLQonFMpcccxJ2YsC8dCe",
  "key7": "5E32nfzShPoA6tBERKKRG52jmYiPLnNQd2ytKhzibvt1Q4WoEoKnv16BTS3r19o9Bkmvy6LjafAxfqtxArfXfx94",
  "key8": "5aNFhyL2iHFx46qbYt8JUSNp1M7ZMme6z8DcQvhBLHx9jBoLhUmdo8NrzDH2t4vLwtEMKMsVqoNoJTmRQ796FAzE",
  "key9": "iX4xSV5i9CL5cfsZd54L5a55jFyoURQbnif1e12bCbsqibytAjgK7W74tHjTxNRytucHwPSn4KP8VFF1ztJAT7o",
  "key10": "4VxXYYC4vYNapJombcNFP1ieyuwxZBdBHRsxzLNimBBa4RxnbPeYdcyXdkpiwt2vQQRfsp7QWkRxiN2rnSatBJoH",
  "key11": "5eAV1hjqzGAYvpr94ZM52qRqf5SzCQdsaSN7qmqBNsexsVA72JtPKt9RjCGH59RRK9xapLAzTCDMahSQg7JqXjmD",
  "key12": "5RoRrRfDPgqkZPUgxYFW7oNHf3nD8EhcSKRQ6kx8HHVyx8fCrvggWEpx97HvQRojgA2Rhnewy7QzVQADYxgzjym7",
  "key13": "5sFujX5p7ew4fRpgKAAw8UGMivJVARW4poGNWZEKE59qgfTiCovwXXj3CLgezKRSVPqPRKW6xfzCv4NC8RCou9sv",
  "key14": "4rybxcPqpfQpsdRpvTp1Tnzasx8SyLGba321Unv8VgrndMoUURtvoEJBnAiHD3YphGZDvLCXeKUzg1Ua3Ly2PKTG",
  "key15": "5rVHAUcdWWmac9DD4FYQvABkB78Z6rMgtbU2drdZ6UEc8e6f2mmh5zo3y36g7cwTNkfEwPEvMtCwLnffRcjK5XdR",
  "key16": "4WXD3Ymq4NFYKBS7SDhgBfM6FxoVdhSCCSRTTpdTBHh4zGbwanZv6rEK5nNg8fs5G3JX69fLqEf4GmswC9ooZutk",
  "key17": "CfCKB3SgVPwddyxEUzpNKG3HEvdXHUymGA8UMRhSSDQWuJpF1xaP6FtrQtTvnFanqo42vcBFLh9jUoDQueu75gQ",
  "key18": "4X8rBtrWkjmV4pKmTD5W7uwFUiz6yUCu643S4xVX29HqiRaNx5TpWEJmXA6pckKaUEjr3psuCtYsFruY1hqCaQ3T",
  "key19": "5X7Sd6PJsnfn3mjs2vj1WNUVnWLd5oURfG6zF153XcgicCNavrQkzjM8B7AGAM1ZA3epUSzcfyNQY298cMt4zAKo",
  "key20": "27iKmzN2oUjZX6pqN2a9FFuU8D7DMNXM55459NrzxApi1gxiVrRj5vaRxDnJ3w5cwMj7hRh44feDuUmdoG38Pr7b",
  "key21": "28yZZW35KAhLnQTjkMowEXJKzcsuQ8LXSBvCFUDWBh7ewCyqs4BYMMhRMNaaTh5myVV6N97PipMcmo1rsy4kqRCJ",
  "key22": "3puHS5NY4AeuyB6aYMaMmSk1GJwKDGRuLkBBhcoTFxNxaGbAYsKTcLGLdT1BbRpsFxjfvaepLp6HfZgC8bNCmnMr",
  "key23": "4258iWcp1xy1tgTc6jTFTgBi7napw3dDTTcMdPynXQ6tezV5K9mEjq5pWbzzrATUUZdyHzeATfwGkCe1X3VRB5Vp",
  "key24": "jK8Ap2mJLzu4jQ3JyXU4Wctm87snupw8jV1N7oEoPfijBxyti1LxpptJKAnjs861k7TSdwVSqdhZiS599uo5srG",
  "key25": "2czsEGcVd39PsNNjeEamt3Ygn5qMevCrcJbgw8ffe7f1DqBKT662SZG8wrXCBLKRQQ6hcXPyGLobQu1rCZp1bAYq",
  "key26": "5Kaqj2ZtyJ7nVtYSpfYYfHbvpsi2uyF5n9tYjUHiAtfnqLmoYj7VtVouYeVJqoGXbWtmMuxGWzadYAxmn3xUQLo",
  "key27": "4mi6EUEnx4E3GSrTFmkHutnkMFEXrUM6XKPyDPTQ1QgUZCy8EyGYsnE6XmwRjKcD2DQp5iPc6BkhjwQ4f3gbF3bZ",
  "key28": "5bokENQNdiE4whSLaakNtUaSVuLHh16hyMTG53oNwFMBqX7LYbEtadBayvjgLSyiSC9Tq8a6RwDqq1bL9DLnPBQN",
  "key29": "4eG1kA8E66Wan4PFjqJy1z5ZsEh4YqbnXUJKx57ZCsGuWdLkjH79da9RJw8ENpmkUtQQdVEkzvkbxi3MBbvCy1Bm",
  "key30": "5RUaZ1niqjbBLfsXbzpZeuoPzek6LwqyMxeD2ckisoGhA5NP4M7GZuVidFYZcSj3Lbh2UeqjqvRHxhWwkwmG7Eh9"
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
