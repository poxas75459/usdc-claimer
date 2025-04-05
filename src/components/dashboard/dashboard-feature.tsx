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
    "5tFSGFuMSgwXr8B5sPx132tQD11Ek1S5r6vsCeXddW3LTkkv8Bqw2tCXbKbKDY5xuUqweJo4kwJ1rmBqgaAKpwf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWjWJxwLz4aQZGKZNUxpUT6W7LEh2UJsXRrthYuKciwcaiia6sJTLsgDA55ojAExtjhoJDsx2bfRjgNUL7q2e8r",
  "key1": "4dvyLhLzeR5ny4y5XR854cFChAZrdd84LwWZmX2V5jQpHM1wAGobmqYSQYvekWgSaNdFhgnm4J4CK3bLbRGJdPgZ",
  "key2": "2ZuXuYRf6P9RHVMLnLp416q8XooyLGs6TYAHuEVkfcc6oKES7WdG9Knj2B4KLjPtfSWj67AXmLBNM27NuViDRWVm",
  "key3": "28J2VWrSf5gjkTiacPKA2WsBfPX5kwbUbrvS4FcijvtXQy8C3dmQqErMsv1pZPZDDYRxuaBPq4BsE6yh94coq3ie",
  "key4": "2TjRTLXrcifYuAkoWTGeWpgyiMKdPnehGfskemiffkAhzdcDmdHPdLNP9EiXVi6ppznuVhRtYRypDxPTG2mTw2ra",
  "key5": "5Kgzyz8Xr3vTW4oPB65VCN1e5vGcRUzm7yTxMVGt4uxASjhEnt1YVrXZh86GUjxVMqVAndDctRABtgpQRsjDe1mN",
  "key6": "3NEccuDiQqSektTJwAX6fEj8wAWnXbBPwMDX4izqvf9kHdFKcPu8oCWXGiMvif2nw2YzCPyHAcmqTDHSNHwV6EXs",
  "key7": "2FBwNKWRcT3W9fkR3vUoZ7kssbXFKpiaX6Zi1g6tAfJtthp3xbWbX4DWATFi4e7vxiJ86FF6oV25dBQoMBQyPXmu",
  "key8": "4y5FkEZb1LKj8Kq5nTWidJwEuiSFdZprjvgLW7wud7zLrbU5Q34jtdWHRwKCu7vLCD7BGHHLimxMexn9WWqkWhki",
  "key9": "4oRsHy6rLfEVCks91Nb6jUTxDR6K4KLTQgBM3MCRt3rDUT7SsFjg5xEpA9smvcrCGHDWivDxV1pUD2qSUHrVbdjr",
  "key10": "2pUgYAfGyai8YDodfztKE5yCzRw4vf1CGc8WtdJKDaqaGHL6s72ZJpBSwEDSPCWitdJZiV3LsfE5wjT3QKC6bmMw",
  "key11": "5NF9xMBCkQTo8DxULGaRTX4a2mTQD18suJ2Z4FqSUXUwo6EDMFXmifc1kGxS15sQeH89P3wiXtt8GQmYEyaR8z3y",
  "key12": "4W67D4znPPCVLLdid6G6CqSBk1wDewAMPdyFdrTweD23fSgxCKPJw1md985wjnCovjLGXscSKMdoyBbqY2EyWXvA",
  "key13": "2R8y2DzNSj5xQNVqVHDpC3NzmSPiw8WekpW3e1jR5fxCpb8yNfxHft4mtHvUkyi3XX2JfLoXrHtav35YG9LUxoQr",
  "key14": "4afdRdGjLsPiBQUfEPfpmWUedNFx5jbxkwyDJYEF2WwaPWZhy7HS1NeGqQBRWp2mgQhMkQBtWGNGFM5uNUBgpbhJ",
  "key15": "2qa9wZBamW1MUNRQML7FUiquBJRvkhX72BdcqGryxpmgHCvB23zNDzoMFfxV1R141vPzZ8LntpS7MfFamL4Kg4t4",
  "key16": "3Z4b5H6bvSsCmWppYZ8jT1Cd3u7zMBLUjFmCV84cn3yARmiSQPP8SifibvsPfbXwBCPHXXpFmiJJTiVGVdLoQJmt",
  "key17": "4tJMoqyLRoe9LovCHdxcRBfHLMea4pFErvC4hBuK59vRud9Asy2P1mzsKNkrXo1zNYy5e5SDHLou2xRgfamFu9RN",
  "key18": "pCPH8skQ4j9jtpVQ6ukcJpUL7WJKQvVLDrbYUhjgP5x9ES9rpaQS4msBaPD28uAdFhaeY3ycNpBMkGQDrCTDJNi",
  "key19": "35WvaauTTTKo4Q9PSBQ33qonWC5DXhNDsLjehW7GByzkUrHjAoJgBJF4jQ6kbaaGXRrZ9i3XZoHNoJugh4jsJTNA",
  "key20": "3SSkpzx5CkTZHagaJfz4pZoVYQo9ETGRxRAKVUN9YT3FY3FnAUcvtNaoU2xChTt5TK3QPmrDrcgLLw3rJnZLGDx3",
  "key21": "3qkvCVzrFNGuLYzwHbqhwBuqtSLACEqyqthfqRQAdCn8heGSKvphJoBAz2XLjxqKP5CRfTEqKGS8xbckP2XVSAjs",
  "key22": "13VZjxkTQgum14eKZFTUBTwcqTQzp7zAczn2qYpoVR5DojL5vCXhTf9JQR8HQ9NHEDxge4Q2jzpy9FRazePyLkJ",
  "key23": "2Myb33fKKQ7Qzdz3MAHUhxwA7BHatiwJo4SQAC1dd31pKMAKdMB7AFnSB9iGfy6CWRG6VrNa7PBXxMDh5tvgQ8FZ",
  "key24": "5VK3cb6QnzNbbwx8njSYMCMSnVsCc2Pawydki8J2zDaghsJLpuA44Q5a3smqBKtoWWN1RApYCTor1Q63F99FRP42",
  "key25": "2GHkjkt19nCAbFZA5osyRB8zFnQ41p9n68XndHSdTgTrVd8vSgfbe8CJSNsiRnuciCMLnS7FWYhd4SXFPz8KhwLd",
  "key26": "2Ve6baMN1aL3nmnE5VCedtk8GuYMJcT8RoCqZDtsNQPWz5hfMKDiE5J6zyotpeCWqY85LMR1cpbpzBfaWXZ1xCL7",
  "key27": "qfQQJq41wpZ8ZeFJ7rZG92bpr6HpVzT9ktAybgMTfKrj5vwZCedhyS8oD92uNNxoo81VuTxn17QvFR5RLqz8ubA",
  "key28": "46GJt5yRyoBtpmaPBraMXBAioqKYftBzA1ebkPNgtsmZ8jd75JnrhA7SEfuZ5q8RuBVopY9zRWUCxzm3zVABiiHS",
  "key29": "3ec3dmCyS9pNTCnbXYXs7k18258nBLhqV3QyEgjJKpFrj7w39Z2U9h3Mw26bC8qobMYDH2ubhacPMXWqP3LRdL4F",
  "key30": "D2zgrReU36emfzTs7ogDJnXDtZkjc4daqRWeiEPeynUkXx51y4YnFWfbJGM8iPgt3Z4T6f88VvHJDEbH6R9McC1",
  "key31": "4BphqxXeHkELLPoSMKwCCd2ouMdbQkWYaErur4QruaiBG2eRtqdc9jfq59NG7eGSbpy7CqiZey3TDKyjWZZLVy5t",
  "key32": "26STqsDA5V2k2mZ51rZUCkxak5f7YvWWRLcNan95Qu2AdkbbtWuKpyCHnQ4utb3UFqq11FzLnCCK58rwBbzJwBim",
  "key33": "2G7F4wsufDVyXthydGMVUtu9Tfjf4JW3ssF5e2VsMcQ1JgEQEG1LSBeAc7Tcce2TzAm8X2UV7vwa5XjPgqoDyLxP",
  "key34": "3w4ZeYh71uwrsyFVaypfV6Az3CWRKqF9XSWm4amAibctdhwe1D3r9g1Aaxuj2YkAMcM3NxkvVzdAdjxc7uYsXBbk",
  "key35": "2KEtYqmi8q6qqUQSMbCWF3tjnV6cexMJACkL2898nipikLSvsKmfR9fUVRwiRHtzEaVq4Py4Crqp8JMnQcu4KqqB",
  "key36": "2f3g2w4j72YeFu2cJM5ZrR2vWcFmLqJ7YERbCe7FtkUq4Dxa8CgZEzb1JmPbcTVurNYaXdhL8es1kPLHXUnSjVDD",
  "key37": "2agGM2kcVpn1oUaAmGjdqgcGxT1Yow6zxDcaazTkwExUtZpuXRYShKSUPF278wnqyJ4zhnXkryqWxdf4dDwJzB2X",
  "key38": "2Paxf38ReekDKQ2FQMJ3bsqTCvMVG1qAMbd3R3vMrtYMFxHZV96Mn7nSTQkr5gbQALWmQJdaCb4MWs6QVAQBkVQt",
  "key39": "3yriFPYQDXqYzSsQDhgCjcd9m7GbeKJymx3wpG2CPBz6sBPpbs1PfEm8o9WXCayZ27v7L8fbgXrGUi9ar5gh6xCx",
  "key40": "4qatSH6RC2iQsBHigZ2t7Cap1mshZzMrxEMuGKzgLY3sf6s7VtK64p9ygunuf2nM5kCi8q6PiwsK8W3poUGoH8sg",
  "key41": "wnxzKTui3P4yQk6ymHmnzE8Qqp5sBzXsefu38BeJ8gDLRifcZxuw2GbQ4UTjZf24YtdjeKoY7RrU1WdKsKJQ36c",
  "key42": "5x9TLkmifscvbNromnNLYDjj71uac3i8YSzA1fvsMhj6HUh1Mxr7bTHnXZnEjXtqDZ3mcZmGwoqohBmrygaSNZUu",
  "key43": "UxbzUAXuaXptukiUnwBaUbuxmQGvwrZArVKXbuGLuM4Q2No3b6i1WYVaz6AThszSXG3ijhH54Xyke532yjr9UPN",
  "key44": "67FDMAehHWQ3iba8jozGgteLwpfQG1gmJ5yk5J9DzswX8rNuYqqZDTSMGVk5Eu8Jx8TZdUzyyFhNe15LCkZjAkof"
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
