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
    "FGAiE8haNNs67SiQgk7e21svTAhHLK9LnWdFURm4LnccVdk8EfFYYWnmLjnzrBmEW8g1cwnXDhfSVjiLwNmTbYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLrfPoxAjwNqssNnXk8fF6T3z37g51JeDWfsy49vBVZdZc5Zwm9rTsnC2jcr3K1pw8et7X2YkZeiz4ZrRF7EHFN",
  "key1": "cd5DHySces3VvFBsKTcGck7jfyqTELzbYerDZH7Zahgfw1iFHTaJXWVwKKjAmcUPnvAdb6grVyV6rhSYyGqzxLx",
  "key2": "3YTijDnu98TNFmCdD9H7P94NDHTMfpNSW2NveVk4ujoR9DE1KQDoXuCjcbnYuQiJuDKca5394BQSasLH33LnxeYw",
  "key3": "2qkycfXXdh7UD8Qou3L8FW69Aq7QZ15BRbxQCgzYV29tAeFkor5P2hE4H3JvaRsXRwqDVH6b5FezDdfy9HgBbESD",
  "key4": "41o746YG2KJBXXASuQpH6kRqGJMWtP4Aetr7HBgWyTaypwMUzq2iv6E9W5cCXthxPw2wZT5g8H6wtuJxU5zgnvuw",
  "key5": "3yPfzxGt6GxMMkH8Eggkqm8zxxuRbYUBbLxQdAucnSj1qUNqrzw8bJk7VtHcDY7SkQAAoYdsJa1P23kNJrgZfinA",
  "key6": "4eSXKvxgHKoJjT4VVhezf5hHxWF71Cj82xVQWKt9VycefAG1g4ubthdcioVGbhrky1AKWUDNw6jbPPg185kwpySo",
  "key7": "dGK5qiKzsUQk7Zy42oX7kZzWVtSMrGZaZm38LzrEtohAX5hhVgVopN8puYaAFxtH6EBCM6LtwE1Zi8N8C7YcyqA",
  "key8": "4b3ZCWqrBqVf599r8GTbYF2YgWEyPPydfF4tmk5Jsy8WQMkvuuavvdDrEzAwm4evCA1tjv6cgba7JPxUcGMUQjkS",
  "key9": "5uzd1S1DMp6BnqheUYdehqkG5w9yDtAKobLi54mHQNjKATsJe4geeLVXaMJXvxMxYxyH6JqsPj7B5QgtyL1om9hn",
  "key10": "2nohTHKV9EgfZWb5YCgg9YQ7tWCKPoPrQhBRVyXbtS1GmUjPHgZNcyrgyADWF8Sxg8SHFsLn3uR3vLcon1pZjL9u",
  "key11": "5cs2hvABtMVuBZnz9N9iqjYm9jAKqqy6W1pVJWFJwrdhHREngyKczXipiS1GpQVrXnCvpmathpWCcMck83TetLma",
  "key12": "21JnqX7mcda1S6jPxL4znWxBSU79k48eukEWgLtZSzwEpQLx3B3BpPmE9BNeGrfG7vmk4oAe7jenDcH8xGNUh3Za",
  "key13": "2HjRVVQPeaUeVVeZkueLMpuzV1nFDbaCdVN35UvYEQRPp3k3LrjSmTBRiE7RYYnoVmeJebJ2WNitcqGSmFGa28aw",
  "key14": "3B2WxrE7DpBwcqWTbDhSPQBjuc7KGnGAywGMnuHqZ1LKYjSr5CZbwNcL4Ew7VPxPx9W8eWG9Xo3YcHEs52dLddVV",
  "key15": "3y5HofrQER3g4nEwwxChnwPGVFPEAessUwJpvDTapwQAFeR37R6mbqpa6h5mvHB6yntfJAyKjfD7BoWR2qMPZFp8",
  "key16": "3xdtptvFmcDg9RGsukoEGtBCCaKW2a6e1vrncb6xzSaX6nvtwC3AhMhFSAHMbZthgzDYbViMB5G67M21y5aBNFu5",
  "key17": "2nvDWQBQA959mDg9XNYykepjdvBCqu5QTsNzmTxjNuaHNS1W5gKRadQCgHKBUhgpLbYYdadSWg4dXapGFh46pFPL",
  "key18": "29KauMBioz22Z1R8pdaZ6UvdnioDujabg57NNAyXJBVbKw63VNttHVDKXSy9cvrGJN7Hgn2goyzivkoXd57mmNG6",
  "key19": "3z67ZDpSJsiNw3dvQG6KNAzaXhqYVxEQ5Dfau91JWdWET7a2QtVGGYPUYJcLTNXH6LJFbRtNtzrav8QYV7J5GQJS",
  "key20": "64cCSrzQGQXurKiJh5L1SXZojK7mdpvabZsw5uMgE1L5ekdnvVh3RJ2mixEZudPjht68Giq2nVehe9wpdtAwvLWn",
  "key21": "2bUWFwvt7m6rt6TAUkBiXNRQHE51ysKmkGbN5bXdAmezXgmaGvbpu2Zja3PaUi6kbroRV4e7qbpaqYo7SbAX9Hc8",
  "key22": "3dPNmNyZk1tpmVK6cnWJ4bnV3ZCDn4XTW2ZUzs2gskhp3mCoozu5Jo7HLC4cWVRMAJMNC4CjeDp5PFZ5XCiSV926",
  "key23": "2minD9kzQRtWJDJnLXdZkxoqqykSy8BNRd9s7AFWBgFrugcJT1QEvEwEMw74rXHEh1HyoAryiqeLQ3a4DRGcYism",
  "key24": "3ahKz9VnStTXhbLNeV4787ggog6T4zfTTKo6CgkgMGugqHvuWQpde8ZgJm6StqovQgit8WHP7n8zvVbasqhByeV2",
  "key25": "43MMZdam7UBxXbg6JfqvSN27imLFx2D8r19M6qmDKF7VHpuo3uUnPSshx5wkfby7dyJ2JQE6n9H9RxUb8WaK9MYX",
  "key26": "2puJCnZTgHwcwP99nmBk7s35wxDzbd5wkASB4fdfLTx4qo7RYaB3Hcwn3JwBryP9tsnpDA8TusqXQiWKN4HceB4F",
  "key27": "FcfuXwuLpzWNudwQeoUSH2vahmDuGKbwG5Cz1xSnjyXLMmeYZQkgAUQ4PKF8R2hh7G5vYfXKpc177p6ovR6mNPu",
  "key28": "2cNqEiCibu8ZKssbUULQn1mYRMFijwwqsSpa44Vr1MambTTBTkkSLJaidwmD31c1rgPx4imDc2LLVdqZR3mm9ZD3",
  "key29": "u1ZUpc7GesmgKCu2FDtJSXjuKKijB9Hu3Mw47pw9HUASCsYniStpCQa7ioeETAFK4RnLKi275MG8zk9fzdmxdRE",
  "key30": "3mTPzAjSDgBkJ3Ld8ytgSKSxutzDo5BCT2YpGRCdxZSdTKytbDnrustY8yKyPm3vm3YW1d29WYHzTbPdW9ZY7v2d",
  "key31": "5gp4o2jUB4kkm1pj3X1M9gq3C2JSVheceJM6Tq2vT4bMTa3m5nJqir3RyY12mkL14J1JG5ypz8w9xksi88ZwNrEv",
  "key32": "5dqo4JZ5vivWnnXhsr3BAfH6tqxrrHvyZMc4dkDrv1noJ8y7UW8k17WeHVehStRjCnXDpVAUvgbmPTfcZ8fBCEpZ",
  "key33": "4bJ147Xsjd94r7ixB9fUzejK3RdDHhsEA1kndi85sapX7SRYLSVBjWAWFejBTXmusTyLF6QmxnwcDMG14JsUgepf",
  "key34": "2A66xEsR5N3GKdexLv2iPGAEL5nyAA1gEQVGzXhH1ncJvgDj1Xa6xyMcQhERkTYmEDhZr6W2dqgSav4RvdjuAaTk",
  "key35": "2MH5PN5fQUUigfDxY7fsTTyYnhRAqzxKe19JsWHgbhEqHuGH5sZFFXQq1E45MRfapa2MtXifGF5NfPRycNjVaVHk",
  "key36": "64BHDa9AvB9ryqGfy2WjUFWFVBPWQZ52WbeGoSHeA4X1V5pw2ZJFVh7G5NYBwX9Ch5vXuXSmLzegGFMsVZegAxx",
  "key37": "2YorcPGwEiH1KpnddqusNVkyLutDiF7uu8uhYY3iDGouXdmBydxbv13ZHPn4CWCr1zHRPXG1GWDAfKNNCeeyByPu",
  "key38": "2B3anFe5mE51ZJ84a5HMGirQDccgDnNZ25ycFCXGD6zXu2a7CC8n2kvvBT9J1JduzfSChoRerbiWEKmBNKkrCXzA",
  "key39": "5YHCSfB7VK1QzQiw7xJ8Zpncm4ARUT1w7GAShNkE614NCtpjLZVusL91sofTczhzi2dp8KtjwvcGKSQGcAXqfrWJ"
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
