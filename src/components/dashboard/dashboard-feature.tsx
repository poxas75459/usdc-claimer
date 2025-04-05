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
    "vyUmEvEYaoiaNR5Bm86GxTKScLv7r2zCyNRR3X6dTmrxcWwFmMu72oksodPDZagpxJcUX71zwy6mfAPkJuCxpqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwkLxy1P5WPh1YRKKBwQXFhj4aBkq3W5HCBdDbWpHyx9Etz4tkMiLhVJzbrfPZvqDCqgMKQKB5yVez6ikmQENje",
  "key1": "4Xg1v6TmDKFj7e9U3bW7XjvbbXEZ4Tkk2dc828iy2zp8FsioFQm1Dd4PEUo4hb6ckYGJMhkfVWDcnT1AKVrni9zR",
  "key2": "4hpRsNufU2aWDFs6syRhFRha5AFATkZ8sBVG2ph9ahXm9CrogM7qJakCeNVpSUvY8NrrvMBtKTBbgTvZkuVF4whs",
  "key3": "3CFtj6v1MCStia7XZx5BDXXqhEAiDs86BmEEcawoQNzrtqweGzdaJHVghyzVbv1rxYZBx8C4sRtboUeDvEtNJhTC",
  "key4": "37fwbEiRKLjymgBU92zcVTo1SgsxzxzKDAkSw1Gt4rJWBHwn1xEoSMSwrTv6bbeGnJu5BySEom3QzeLTPSF5t3Ji",
  "key5": "46DuDWSqgMJsQCKD8NAWqhcC3vEexNHf5xkMmLDkXm1VmFZGQGGnhNfkruAMTCxJd8FCGXf4LST1XEdrxvNbirpQ",
  "key6": "45Et6Z2vStiAA5cuHt8y6MCPsZKGGE9h1Znfseu2DBEhAMGpALZNDA8veuicWGUPZjRGxdfw5ohjSbbgnjtTLLLa",
  "key7": "2HHCLWHzA4h1kQdPbz7aAKhzvxoB8AtfSkoPrzKQtLUFZ4owhFqQ22oErp9QLeUpkJE9zeU1JLL2qpbAN5Dk3bcT",
  "key8": "4t4LPaepjyMmT2ras3fmqGVCoxgQhGDaELkBg4B9BWKoGRWhaC8QosL8v4ZkgWjtSC4QEYqhfFbqgDPY3vJDUWdC",
  "key9": "5Vm1GXqjEb51dCg31wvSTKXKrBxThgLQYkeFfaN7Pfxvf1cUutrEfMRbZEw6UmDa7e49ue3ckfLtgpnXZbZkg34D",
  "key10": "3DSG22NkPR1R2xA1YjJef95cYqbPsKzgb69bdLYynAC53HBXmWBYmuxvt8jJHVfwUGXHC5YUiAX8JdsM5YE8FjDi",
  "key11": "5H3ED6QccnJCwv6nZFmJUCbqqUNee3H8qvJVMcK2XPjaiaayn8kbNnXRMyfLVdZPXA4Sjsovvu9SPFQQgx7SKcje",
  "key12": "pwxLa8LstGdgnbjAYwQxYe46NXA9DSvpvNCPydhSWLkZTo5BZQ2oAV5MhcAHduvwQwxaBHQxvabkZLKZXMYbh21",
  "key13": "58A5BCnFpVewfvaL2jTqtb9nbTR5xQm7zdYvncTtXRF6N5w6x6kZsaYKFHxTu5buSQTn2Y6SxzEMFSeXqnKqhkBo",
  "key14": "52zAYGuHBR69wZxHbZ34RjwocLbRsvb8dvbwSVydTRNXumhm34gnBpcVZRBynKVxXr2hXrPnF6xjGDkkbEd8yaEM",
  "key15": "3NngZ3xuLgSs1tuC8MQbzNzTYj5hBBhvi4WuFTP759kQu8G1SxwP6qCxZ4Cqf8Ko6frA27NpooxHzx1zc3W7kkBx",
  "key16": "3rmYMedT5yxXC9DE8fM1SqP6BpbpqngWdjyiSzgGbdgmPb7heRZmswvSkV3raeegCx4kMQB7MDfyAuyMTDGjL3Jx",
  "key17": "65qtZTnqYnFkJioo886zX9bf6zPmbhL5CnjiQFKRXFZLXkV6ur7cFeu2Q2BSQA1M3AQzmKPzUNtSjkuHh2U72a7J",
  "key18": "3MEJR3fSFUQY25PLErLxC3HAhVwvXsscREw1SuBjCWmBMLMqLoHaX6QQC3UoUjZM4VuMbvFEUSD7cRRAYVRWRaA4",
  "key19": "5wSmQQrUMcxv1So7VWqcQzZ4QAWVSwanpGTaG1yhFpLrYJk6ck66zb2t29wHkTJAF5mRFj9P3UdJV28D3GaB7gaJ",
  "key20": "4HkbYVtDQRZLpwsCvzBNSNAvXDadXLTczywFLAfjF9vWth5arFFQkqV5hkGvzxYBZ8VJoXPR5aLnRFgVJPqRmZes",
  "key21": "3cvVAwpj6NeSJN6c8vhtcNBnvGmLU8xTYNQJ6mN5ewhRLqVQKdM9nNNWRKF2zNYmRUDqEGaoxF1fWntGyZJeocCE",
  "key22": "3MTaWnjuTXsQCynojgH97V66vbkPVvavjt7rdE6sigHnuorAomKyhPRsRgarf9KYqHTt2Ht8wT43hEprXVGmfvRy",
  "key23": "2Fs18kQj4nVKdCCCjyKXFYJknGmdt9mVrmjyAKkEUWNcSMozBGbgRY6AGv5tkiYfbpDvVBnHmNCc8aXvLbX5nD4Z",
  "key24": "7ncubnNxFd8qEqmzmaUs5oLq4giVWqLNqCPakSfSBd8YRn5xB1js9SCNM86eX2mrY8ALyuuAtq8G6vc5ihQPpHL",
  "key25": "5swTfozVdfEgkY1wLes6iGrecXMGVU9vApF8ygtq8DPBq4qk1FeJSfDgzef6oHnGoz96i7WLjT5265AitU1eLSpR",
  "key26": "5aTsB7dBJWGd8K33jTN9qbUDeD6B4iLsxvxEF5RLGmChLy7NNhmErv7q7A2mohQcNj3otrdpgMgFpANeLPe6K4CN",
  "key27": "22Q5YN41XYf3euLbVciuZWP9SnvPmWvNp1WnPonLV1QhVVRMVLvRh7xJUpafqTuhn2r5wfxSN7W1dQW6tveYqvg3",
  "key28": "5UYtJtRJgxcnrJNS4w4S1iDH732ss7htdjUHkG4hqjH7aoB9FfEZUY7Ztg1UwsEtkzgC3rN8ybZMhBYyCpjvEq8H",
  "key29": "53JDsTHJYo7GeA3oxcpBQYufvracnpPnGoQo5C64EcNzDEKzS4jKPHAvsP8VpWdkZzu1bEdxwTM4Ve7fN35itzyt",
  "key30": "3JWnTC4z9nxGgPFuJaRxdubB5N5nsW66Px49xhSawt4RLDj8McUEwPh96wBWuh526oJ971JcjR7jfb1f3Ya3ScoE",
  "key31": "2kms4RnRQKfryYeFE45xCFDYY4q6Rz6AFVgPvWFtE5537tnJ9HcDJk3Y54SePPSk1WCv2nEuZ9VRKRciTgwVDkPk",
  "key32": "34Ja2zzCE2jb5fUdLMF3r8NR2rFnseJaeKTsoB2UP2FGEBDDnShNDYELqBSmKDCvzuSM6Ne4HyKkPVNkyByq516L",
  "key33": "4hXA1XZ8mYTVvn33EvaNVT1BdrbDxLjAAAQHqANreagkYJRX2bwV1cmTFunRPyn7rfzaTtXAkgcAMfWhzBeMfxYz",
  "key34": "2wSr9TKpb55pjo5BQAz6qD3s1ZJXoAVMB14uRa5biLmug1N4yqaBcYGT6QiivCwpGqMY82evHLWnJZ1JoRWpT65t",
  "key35": "4XrGwAVyX7dyQfZSxwEwutrTJf6isxBwvWfZayfSp7tzLVLPZc5L4WiDmDTYrZJFi2G3KY1zQ1PSpLA58QwuwzA5",
  "key36": "4C4Pve1ayZphgqshgEm7jTNcYWoVx9UZsLnCMxqV2NJ3ZEAcQ4Kikvx8sLCmFczNSk7BKFHNo9GAnvNA6Skv54Nk",
  "key37": "3AdVoYc16DJuTd6D6oYo7m8AZKiQcSyC9sLxYQaPG57JZcFJWTbquapN5WRF6HF6dKVjuGYuf765KQUiX8tge95h",
  "key38": "3YCR1zX5Rsg35q555xUbBMsbQ63E4ZEi71oDc5gM5CGzmcXWgH5Mi5xzC1rTGmt2KfH64kvnwGzgRgyzX2nBkdg6",
  "key39": "2g9kqWegbMeWf7hR4v7GWG24WAM1M2beJabNkjh79GaeLdHNmpf92EPhUF19iwrxkuSGwj6fxCvd4MSg261i2bBQ",
  "key40": "549EjJ7WhjJ5TVcyRhUUT2BfyLc35vwcKgjTcFUbtHgzZk5gBT6oJ2pPtsv1H22yUqAvg8F5gffT7Z6zjrwMQgDT",
  "key41": "3uJKY8qbDZPM28JTbLbmevMw2WynMaHmTWe8f9ckFeqGEmwz5ELMxrmrpbvYSH2mnpf9meAsRMfkchj1rnyyKSyY",
  "key42": "4ec1p8BD8JbhkA8UzkRjQjZgcFFoDVLk1Y61Fu8g165bx79pzfixiSidDrQLnDuRTHEnqkW9FAZB9JvjGe9Wcokj",
  "key43": "ChVo9ABXu5FmLSCFAvFfCHLJPSSVyzP6gKACkehC6xB4rDktV5DSvighNJv638qp7ixSi4tudSuLe9r9wGzEuNR",
  "key44": "52XKBHUgpLUKCiNhcLHutyzcnPk5LYTMNN9BNSSjxiaAervFg6tN6km3e6yMFqgNBzNkoJ4KBatrfXiVgDNhmc7e",
  "key45": "4Udq2vohRo1e8qs5QUHioCmo7CdQQyXfwWiKTnEjiR23LZTkJ3k8z4VAGub5kiBXCs9mPrdFxJnvGnhWuS9rpMdL",
  "key46": "2oet4bY2voZw3jbDnapvKAgcLHF3sPQ3xgadLeDVK283EUn2ookA6fHum9TDAUficTJrSwXiBNoPXSzGXv4rP7gG",
  "key47": "2RHZ1uHCaMCWsseEk5y5ZZ9w8KWwDTgbFHTU13mBACgeNZSrPFce84aefE5G9KfXacpY5P5KYLcax22kzbGyj8gs"
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
