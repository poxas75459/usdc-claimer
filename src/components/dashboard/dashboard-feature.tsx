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
    "4iSg5FhVwaXxLtSsUMagTRmBLTfJQHqYvpFaBaaWqDr2TdEbbF6xXMn2JCpgnp2wk4vt9BxAQaz8XCCmjjNjWGdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L8pAJtxso2TXGVKSaNjp1yGJkF7f5kf9QrA1ChrZetCV38rKPwdZS9UCMh4vmf5Ag2TYS9qSHAoV1HtxtAEkHKA",
  "key1": "3sabf1Eed9DVJUxbucvt8ELy6NCV2KPvrWhtmucfzaS68Vkz4FN5Moz5eFeHgddFwMEs41h8uBGmcW4Bjyhze9c5",
  "key2": "3uWdyzJzDDJV2yPMakK9DVSizQNF3Lqu781cr4CLKxg8YZnNPAx1K8wifZbzMrRWJFhpmA7x36oMAU8tzu1R6AJr",
  "key3": "4rTa1Fm7iScquYKrZNnKzz56ev6jBGTi9phBq6BnB5gwa3TiP22zwLM4BkoX1Vykh7GtKsGzvGdUNBuVSVShzeiF",
  "key4": "3quxP6JESNdP2JreuyfSmpErSruBpqKCEqemL8XxN6AMZHZ2QDNwpCGu5zdfN9GMKs34H6KeiZVe7ft9ws7ma1xp",
  "key5": "3WGo4QmmuQM7BFRPmdD7yJeqen4r2GGCdwEuztWp5NEQHkL9FgGWeEfjHTsnaRjWukHquqCfpCoqHxtqkq6ixsLG",
  "key6": "vqgHD5ZyyXpdeuS4wFBCLXPbBqQ8yQY1FAAq9tyjX6248YmfyjMQYhSdDS8TTZTk29dquopbyajPbVsmgYLNYqL",
  "key7": "DhhDLXSkwFNMrN3P3qDCwYPe9cxQq7JdkLAW8nSeJT4XL2PNidpJqSCRF1oiq65DxsDBpSWgBnRi3ENNdLfF9QJ",
  "key8": "5FMZSNceykf4DJ5twimoAf73SJUfR7ekzZRmCLU5Jp4NdUShkZjf7FQREzQbAp2qr7tQvDhoCgYU3QR4YnEKvPSE",
  "key9": "21rEcUinCPwNXUu3G9h66uNCviG6vWfAHya9ZW6PvZ1HC9ebxibkji3Ps8ea5kvadJGPceLHvDF7Ho35oHGmMsQ7",
  "key10": "5gwQwNo72vV77A1Pr1Ts2k3udSHXtp9jbzGMwUN7SL2W2zHp3a7FGDAfeuicht4S6QsQ32XXKrWfyLTJF2apjUCR",
  "key11": "2MtXANcmqQNwgwRZZW43tM5KKQcG7LUzqtzn4VtEuLavrx3hnzyJJkEuQM1sQmyCFYaRKxoJiGa26oFPp3skLegY",
  "key12": "2fjDfUSK51vEFMNjZbRWMC7zPtpydTxK1ZD2aDh7PZNqXEVtmHskDjYyqwmorcYw1WKqqY4jRjjfg6UiJ6knKKyA",
  "key13": "46iiSpxKRN6HDmuRWn5k6bJ6ZDD58tAmC2v94LRRj9assLks5UbcV47MuQgJkK68jtG479W7CKKaeZsRWSU9HDXM",
  "key14": "5K4eKbeGMtMtrM82yUY6kJjYjGjQ3oJf7nWSG1KiQkm2yZZNfjN2mhtY94iWZT3bT2DXzMiKEBXbJyzUAia1gbW8",
  "key15": "4EVx2v2A1xSHVuANc1wWwMw1bFNscYnamsUWbtTgxWD1dnveYadXXdWqYbapgbp4iSHfFYRbJWW3KjKQRUzRXFs4",
  "key16": "2BSjZWNTdNT5bmg2D1CuV4UGt1zyd4kCNvEGrG1Hk836db8fxC1pDirstGLjzuxmnXQyPsFjA955TXdHxQMhBsaV",
  "key17": "4HXFuuhV4zNkvVQ49WYMitnjHeH8gacpmr9CgTjiQyj5PrQynzXAoWr7M48uiKR56G9z7adQEUwx6KaMfWCrt46C",
  "key18": "4dfDjnQQT3Q81XPXcLroTr5tVAiuP8TRAFbQgF966p9wxNijz61UYtCCCzKMbEAMTZVNv5aDvAD6v5LgzLHbYqfr",
  "key19": "5D5Dn9tvJgMkBL2e7zrZZr4v8HB5Yf2K3FArGjLFLtGsR6614mYCUPav4MXSUcVrKjzUXfLeB8p9Wc3DbTtx6R9c",
  "key20": "3erAbTxhWgSmSUWQHcUVohXz9r8axx6HJTzxatG1oh9jDwqV1WRRyT5KnLrGKuPbqmTQp3p8TZSM3mzMUNRkiPRN",
  "key21": "5KA2YNVoy1DoPMHXHvpxK6j2gTpSgURJx91BCgTQvNG1n8bSXCddCa36WaFAmJUfXPartEsHGvrA9QxrPNQvH8GF",
  "key22": "2SDu8Z853bKJUMRzRfNJ15i7pJxJA5xY66Qoefc5xFF7UAe8HPq8MTa82rg3DUK8Jnc9TLmVVbUbYyvwci9QwEq2",
  "key23": "kMoNG5H9v7xFZR8BgZkYcPWXWFLNF86yYMFZkU4avNKubm5AuyaXshMiFffr5CgLfsbhDqaR9zVTPfswc4Tu9Q8",
  "key24": "3tMYukyXMkHbNWsvSC3ufvnRPw2pe2to5EfUvuYGCkXZJDm7eYiLPHDDfefi3QKUXR5M3s4xA5ZH2TLkS9cQSS4L",
  "key25": "3cPCuGPiWgD1XPSG1AKzjWb1QAdtv8rofw3jgsZjtmdSe7QwzyqkSPvJssMhRE7QinSzBP33d65vFr2ZcuXh1JDn",
  "key26": "BCc2nwPcHPfVAnoYhDxYHshxKgt57U29ntRgyUYNQPuoSoBxAjMZXAhUZXEPRAJAxNRT9K7bq8ga7P4uoV3CG7D",
  "key27": "NpAHXiYSRPGSiqq4FvEwKUZRDJYKWTMYQzM2psWqMRgydUYwMk2LtDU4DQ9sRet1u9BteDGrb4p7PpGfybWk7PP",
  "key28": "31Fom4kcDGFNAi9kJ3n1gqADrBe8EWji4sFggeqockiEv8z6emgEiivPY3h1yXzsqbN1GFiiEXr64JaNDuSFi6EQ",
  "key29": "3oVa5Jv1UcBwnU2A9dW376nvGERzobbDyXYJaLuWQ1DZumAH8Z5MJcUcwsrSQu46NsHD9udBpXkGjWDRc6LmSL2S",
  "key30": "5JzNjDCTBsfNNQynLse3nnkRLZJKZR9AxLWpmp3wrKtLPN7ir3MP1jsr7RmTYtnWREdpEE27ksPPsG65R8TqmZPY",
  "key31": "2fxJnUY2UuEADyCp3FsUxyV1bzUsv6wFm8xfPFskH68QnhUQXWFLKxdfn1AocjgY3JyDZiN861hvssVEPqS99Ups",
  "key32": "Q3H7DS3zcqRZaXTZVkxXqNeDn4d4YsMwPWT45wMWH7Kyvo2mzkqF8MAfpeiGUcWAKPgkipBqWY8zhQjRy5yBkQm",
  "key33": "5Qh3FgHSiX1Bee1B8xCZCsmp8wxXMyLjM8N2DmxLbP5akbkLy2C3b2p1STov6x6FPRbs3N17a852qSqcuAtsinka",
  "key34": "5W5AMwx1h599eanHPMpetBh1j1RtqABzwB4enGdcSsi19qnwWkjM6pu4DZ3PSo7mSZKVxkXAXSPw9bEMsQcB2apL",
  "key35": "5BU2spEqn1k4sLZETdXmfdd8dBo2VFQM8fNk2QA6QZ1Mw1pfL5DgBsLMap8w53KXCAt3tT5Eaqk7CtN5YFhUWo6p",
  "key36": "2B2t6BWf29h3BJU5S1yQ2cTNkrLu24AxMTaR4MZ1js1ASioVXXpHvxtHEpAkNusCyQWdrSmA1jb2PExPhTstKjkP",
  "key37": "5djmqTbTp1g8FGS3TcGsrwfCmnharsoteNd7n2fToLe8aKtRhEMQtBKi3BnX9oNXjNcQ2gTP7fBugYPKNmGHKnTK",
  "key38": "236VXHFFSn1nRJBLmjvWT48zdCZhSFA5Z2wtxeF4efX8w4ogWjZLfdzW7HtLD8DujtVkYpJG1Bgts37dLPjPV3yP",
  "key39": "4R7gBraDe4kqDvexJqsKjYT3XVNkCWraBT1zMScoq3qaar63pc1V68sXDvixCuEXKymchfTpQBcBrqirMue4LrnK",
  "key40": "4yxjxQ9qcPvTvVH4gpHKJU2bBDUZZ4EayuhSbPaKPiB7Ffkxo6sXVns85knBVdi9dQsfhsMQj2QhmmmnzEaHeg9w",
  "key41": "38c8iaf7rz6uFwxT8L3oheLsanZC3gk3EkpJHuSEgU3RgcL1VNpkdiXu1CtvHoK7aiy9zoyUhsDaZVcaxLeKQkCQ",
  "key42": "4mGESPnWJ7Q1s5q1y9UdTJoVomMvja8yzYgh2SGzU7kKWMqw3QgzPNta52xNdd3qoievjh4Lwo85x591JcXbPgJw"
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
