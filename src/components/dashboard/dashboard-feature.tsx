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
    "494YWcPAZrNLiPp97iMYBY2J8dBnkdQCiqZiqhq2RMHD3dp95WVoW8961kcGpY8mhP3f8R5i3aLDQY1mKrzkoote"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fyTBLji3C9djGceBAJXRN73c2upt8wFgdpdLnYLPGb7fYwWxjDfsnuLFCsq4BXQg1Tq6c47BfBpFahAL8Am9utd",
  "key1": "2FpxHUvs9EubEb3b8L4nsbx5Wym6wVJS8tbwFftBMHMtJ2mztpvSgW9xQGnybLt7KUzXXdz2pTa57aH4Hg1uEh6d",
  "key2": "2xWY5vwL8DxTCHRqoLaFBL5BbF49U9giYBGUgzBnhYrWGFEEdVwEGefDqEikoAtjGaCJn1sBcJehFecqWLAPPnSR",
  "key3": "Y77BHL4tuxW1vGYtAHPXekUURnFgqdnArqfnRrgUv4eHo7cxyNVUxP2sthxQ1xXhGPiurDHLJ2hGkxQDm3sRqtN",
  "key4": "5Xa4p9New1PwroyCo845X1GFZAz4f7zLitQuS6PksoUTdRKV3YkyjZgyF93wQ1VBPmY8bLvstgbJfkaMvebxxGb",
  "key5": "47RfYJtGJAzny3uovWuNVCCKxnFTLRYxR4eErbX6XRLJ7Uc4yijkct6z8xxJzQfw26gsj4XYnnzNN6UUi95FdvYY",
  "key6": "i3gDeKfRKJEUKLEz3oBfUVGYKvfAPZecQ79jttwRMaWn1JNyXv1ix1rbr1tVgCu9J4ACKDKKUZvXZnxMSz1xAgQ",
  "key7": "35HzRT34nSFZ1EhFR56dr5eww4ovuVXgWm42S4aXz2kEBmsH39sLVsuchtNKqePZHmYXGaYXsHSJGqVAmk916pu2",
  "key8": "M95ciRyJJuRhu8NNBrbBCCaU1AZAYS97bTre5YWj8kr3rb5YD124tKtC5E3yGCr62veJoRk4RPFTvYpvpiL3fvF",
  "key9": "2tz84q9ZhKvmBo6ZuwpbmQGJwQMaxE8RTs1pJPR1EwCB9g7HhbgiKF4LXtowF6FDRegfgr1AZTsdkpGr5FTsQTk9",
  "key10": "nxHzqvP4ZhGxe3pf99mUS4NfUwpu5DWXPAvuVwjMxa8A7YM65fRpTDktQCGVxL8ibWfeXMuncmkfUpdQ9qAmLUj",
  "key11": "4J8dDSrjtT7gviwRzP9qJX72WKaG9YksS4DfXuU4EhsGi2zXqKTaaVHMziiKaGYvKURyH8sG5m4dEYbjqA8PUC3G",
  "key12": "4AKhW2BnVjfXC6CEbYu7dfU9RykpbJrTABsY6XN85nbuRGLYkjkKj42DGXZYRAkjRzsswdcq1icnsAnUekZ5ko9e",
  "key13": "3L89BwiAf8uJKbHXDJSxcz9p9hXQeCL2CJ4558RiKwpEKnk51VBqCEsMLXtGxAGzUF3DuBxpEH9K8juGAohd8P3e",
  "key14": "oe16qpLvF8RkDos6vVsQgCFziDxbovRyAbwumGc5FkvLXgBmLytmgsRAjkReT6cC36pXn2HS5eiJjAb9CxVfMPW",
  "key15": "4EQNM2rbXB1vaP6vZddo27unM7uzhfBWSgJ1D8unYLYY3TS42ysEPjXp63w37c3HjAQBkqGSCquJ3hRd9d4vJPQq",
  "key16": "39sdrP3dm1Wg5W1fgqpRzuD8tXuDu48cy2Y8k8NVr2jxCjwPxnhjKtNVPNiMQpnH5ojrnH4xg7YVAn9C4p5gdY3Z",
  "key17": "52a6ZMi2TPRK84u32qbWebRsdZXo9sEpsnXJZgRt3PFK6UdeWmpfrnk1KggTqCcQKg6pgtmhkiZTZUJKspbj7uD1",
  "key18": "JMVzcMRyC9r1kPPAQwzzHrgACYL5jQK6yZrR57VqCsvPQztKjZqaHfP4r9VpHgXJUbduS9mbmKWPQaATLdv2VkT",
  "key19": "3q6YMA2nJ2X4MQSU1mLUNjfQecDAGbLbjsPyyUHVU78DfY26FkWkftjxvBds8FBGifpZrNvevvLW1Rfrf3uNDnMZ",
  "key20": "4S2L6hJA7aTnTQszAKV3JahannmrhUR8gCCHU3ha4sABuN2qFLixPb9gmjC1PBLCBHA19w6EtdGZWQgRZJgHJLto",
  "key21": "7C2TfzdvWXqCatY4M1PR5ENSmynW9EATu9rSWYvstyvAta2x6cqNPyxb17oHsayjKX4cRFd7zxL2ezNiumMRtiK",
  "key22": "WCbcJjf7jY2ybDyNg3nU1iGj35porHm1cEimBRxVexiFytwo9j6oDHNGvyDH8gJATnYdRhEngYoQ3CEFQqg4HRs",
  "key23": "61o9R8CTp29173Y6wjkjcJGwnqBCjKWY85y4Ufc1BjkAZ7ZqrTByNUGCPY6E2EUS24VhHYY2s9ze5GvofGox1VBj",
  "key24": "6X7F8aGxSxs8cA8AWKthgrSTFVrBUeKQX7h9v113zNjRBCwZARY28G4cHwJ4vNKy3yq2A4qocYj2zqoYc4nYZRa",
  "key25": "2PsP1Exrh1YqTLXupPT5sJsWZxZBuowUq86stX6FfNHxPHTiiBA8JSEDg8JP6BP5TGpfYTsuApiNEENkhL5yQfX4",
  "key26": "5S7VRfp8TwuiqD2jnXDwAXTF8LdFVzFWuDwMGWN8gUee5yp6ZEMh4r9bsYcxTNiHbo4qG5t5gt3TSUypcryDh8W1",
  "key27": "UKif7YxtXF6DwYj12d6gYH7ZYxRnEk5gAcHNPXJTgtgZNoMNJqs2PU8iD3m7xnsAoPK65GiZoXLq3E2cAN5ibLh",
  "key28": "5NsMxTuAaCsaTdK2bhZnCttfDn4CrvG9hkougHFp3fgt2gBKJ2Fg4nmE8yD2DP1v3vbitfHUxfYP6bZ3dXp6UDmA",
  "key29": "5SCz3tvomHvHXK2vr2qNu2TCy1VLprXUB9Da9ZqFevmSXfZmS6XZGPJZrFmJ4LSYkLzDEJN9Was7ruNHE9gSqZkd",
  "key30": "4YmLsaCposvRVkAym38pernncYuEYLDtDLnAiLc6p4oF73efiPqtXPwk2Asuuend2GnvPGVFd5FUpuih3jGwJZ92",
  "key31": "2FDLXBbhzmZZstcfBUffx7fstnSaTnydtmddeomD7W2DJHAFUcN6tBr5cGD6GnQvtSgtDkoJUYe4PrRjNdguScMx",
  "key32": "5xsCih9KFFwtkX4B7RgEnjJiDLCMPvjDGo6Bty1u4mjeTtpGwp9MCCXobbTEqET2S4hFhtP348YaT3NjXgiJepCR",
  "key33": "3xg2ndSVmTgtw9jFDNEBmbh77BnfB1USji4vzQkRBpQYFw4iQ34qMWiPJr2iNY5DDDVbcaevX7imM9sM9UQhLDdf",
  "key34": "2wwANipRoauFWhxj2jVbz3yHEehWD7oVbsyEP3U1YD4qB75JGyRgFNCPYJ4DaXy5JCNxdgYFRaYxgr2dDTHXqZM3",
  "key35": "2iG2o6LZNFCWSm8pv5SixBAWXAHrf1QCwHkuSwagwb8wk8kzDCpeq43AUicY5gfubL8T5q5d4eg27GshHkHEgU1f"
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
