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
    "4b6oz9yecvDmQZxbt7uG25vXKyRYCmFYk2ixa6TVvAqDcvESzu3johETpce52XkyCKXfsKxUdaED4g9ugknQg8Eg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a2hfC8jeo8t36P3xwwvNd3ukhkkpge44pcBJGJK2ukSaK9sPR9yNNcmsMSRV9MqfcbLoLspYMYqBYTjSi8iQ8bU",
  "key1": "4YVDiteXxdCAD3BHLSEMprHGgfUk9CYucVhKJYrgpRvHsk11Knw7TZLio98PyHLkor1WKyarsnCwC89QUBbvR1gE",
  "key2": "5fWHnfkoimeYYqAb1b4sBxDNMxueTktgkKj2pHGn4mSVzfEktN8V9vS7YUqtySK83pjWdsKha5HxyvV2tm8YyRZB",
  "key3": "5SwTp7GG8v4Fr6rVJJALs4boWSnDh4V5ZqySRtjmE5uQ7Jdoe78DqVbgxLT7NVmyp3WUG78N5dJ9E5Xha1EcNNNx",
  "key4": "22ecWFccG4xUJ2AvefikZCjGYUC6K9FTXnx2hcWeH4QGc53qtqxYRFp2NNFPz5WLE2cBYYcLQeADct5yXoQFbeGf",
  "key5": "PGyJfHTPwDU1fyeNSvvdfVtx2jykwxm6fNFqw5tMFVUgo1v8hGuXRQT5jhe6kZNeUZFdbkSphpLMy81CqvW9zEg",
  "key6": "5Qh5rvk9WgXm4qBAZF22Ty9XgGnhAkCbnpc6JSDXSREwEco8rFtpF4PKGEzCzNqxoBVr5SKdUgPYSYR1it2ZJwWo",
  "key7": "4xHzEURxcUimZQ54GCsYFxdyiSUDegUAee5Q58rTzkuwu6XkYFPYTeiGv2gsRpUYsPkCEkuLQjripdzTJtDwdR49",
  "key8": "59jcpYrer7FgRSgPnFvuHp6BgufvTqm5oQhyG2uhweL73x5h6afYwASZqQCWtNH6vP3rVH2G2EhNY2Xv35k3mkC1",
  "key9": "35stLLvYBepuVk1SJ7BiS7s7CrCTMgQAVAm3M32as9doo28cvt6KC21J2jkAr2zqqWuCWEJEudPof5aXh47nN1J1",
  "key10": "5gd4sMbAP64CUHmEiMc9a1BgdE35LJfYqUMP1bUZEXqEfzU9oym46rDE8bDSmEz92AP5C94KjhSddjCpMAv1arVw",
  "key11": "5xPq1dm7jfsGZZQpsUywpVkDEAezQPnvMAwCjPpLCbWnRzSP9J3hSN3cdVRqa5VBpDRrcgw2hQqzWR3KzYrfFPBp",
  "key12": "3LS5ptLmn98wiDb19E9JYcR4MFGyYQCmsJ9vxiz7QRg8YCyyYFa2d7zmy3X446ySGGAEqf4R8M6BAU1mVpYm4XSL",
  "key13": "4hJXFFXJ2JFeq4Fu3YDet1ZUUBKw4SmhVgbLX3QwBkxW6xJbap66WuPDcqMhuVYhTV7eXYSYEgurkrnqjy11BmZe",
  "key14": "5yWF8fuDugrbPW7cbARQFLj5uUpCPPmKAThzj9Cv4eXDVagnP1jxGcugTeB1LHPKG8StQCatofLXjv2DL2VWG8ym",
  "key15": "FcyUCtKu7s7srNJK5BeQDGPJYUaeHpT9uF5WB7EB3BCvxArcg8CM7YW7c9SXJfye8EtkeJCATMvxrPysTgotXrF",
  "key16": "2CwhZ4t5tjC9sRpLa2rbHDLsSXEMLkHWf1mTvb7cR2eRonRtUdMmrmaukEQYMsaMUPUcpR7xSFnfpguLDzGZ86XY",
  "key17": "3esn7zRnLD2EnKTChK4dsH4dhL5wmHafpfZxMfb78cFcPVREerPPve1w8MmKQvPkYVjjCQJjgkMdJtpKr5m6yktd",
  "key18": "3qjvFunfY6rtfft3Ydx3Gmwm1iNt9pMgSkKGAYbWPQFgkTpLHoxB4KZFSXguBNyU9M2rG5XJNfKpwKcUFVkio9Vk",
  "key19": "5LH2QsQaWfcUUsn9EWDEqymXnjTmcrHzqNDY4GiQo2bwGq9E8fNMWPkeAc2m2DbkUSKohooUGLFTvgDgbqGcdKkS",
  "key20": "dPSfj7bQeLpLdkMxnNPNTvcTxu3q8NcvfQvdT8LQyCLbCTk4nHdAbRGtSF6RPwnSAtdoLW54Bs1BKGHvv5mVGxT",
  "key21": "5Va255Nr359JSJRXTzRfLuoriFAjiJ6HUExx8pqkb79mcSkU1kwvrqW2DdfUS42y9XiJnv6epsybxcwFSD3NDWQU",
  "key22": "35dmGkeWqkN7i5VCHvLHam2jskuNq3wT66J6x1N3VzDtNgJa9GM8mbTDX8Rn2SUdP98V51DuTFekQJyKnmsoPNkA",
  "key23": "9gECpsjQB1ppTNLtkQvHZhDcVnq4Ka4AHiFQX3s2wqvgsGvNx4CtSa6aVj42fKyrRmiSFefjpr213orMBt8tdhY",
  "key24": "MU5H4gLCp4GFQgBG8xL5bSBBQgee87fKrMXEag5CkME9Yr8JJXAsYq1aJD8hx2BpzWd1UpynfbWph6UP2p6mNJ6",
  "key25": "4efj2PPEMCkHHxFpQgdTBUiYi1c7soDyqap84jRwgDM8GcuQa9TsWMmc5muoJopcnjXLZUSN3uwK4cWQFHKM229J",
  "key26": "4uKdvNEhaLmhfT4AqBbuFkkHNC2chaEBrNwtPiUmggRvzNEtDA6jkrrGvq5uaGE2gz7ESbDGxuAVvkizhXFCPFJr",
  "key27": "4A2chLQxkrpzUP1u57PDabKv1YKGhHPsrVzjRtES2nwRnXE6UeeS42dzCd4V4Nd7WBzxg5dhd5jHQFD51MKdDiBB",
  "key28": "3FjBgmr6tk4CwutEjwi9k3QMenpMenuEJR3FtFAyfDqU2pmVAtWjGry1u2B8seCxPwUQvKnA4XkoYDqup3SAxNqB",
  "key29": "4CYSwVQSQQq57FiByyLk8maowXkTcC6UMdHURaN5d3hNpPFBb3SEtuWkaw4fUercB8LPdoMZcU6XQriXpz2nE2u3",
  "key30": "2gwA2iMqg5RnSELBm9BU7dAvwmd4bu5Y94LexsdqxwgqxJckKYMvfd1eELSJg6LEq9cynZk3Ry6boipM9oBY1Sus",
  "key31": "3MF7PgBuhH7ZcFMcEiM3jq5ynvyUqN3L7RWt8VJt6R25ek3Euvq8BNsqU8JCwN7f44w9vPyw7z7HPvM2WbMea7oh",
  "key32": "43irwhWYDTamxHp63DCQ3gyg1nHiKW1LRUdx6QaqqB8XMnrcFRU6v2rq2AkpEEC9BUBtDeeDhCPRj8g59UMmmhoy",
  "key33": "5ZYrkMmeSGX86aUF3GeE6UAKxp3qrcuHFDUs1cpCGTGWX9mWC9gLgKUu6xtoSNYDwfw9yBErLNiaYp9BSYhge1xb",
  "key34": "3furG9GtPmCUjcGYAXNBuEsjMDrxFz3PeHmiaogiX1iDEksHvgdvT81UtZ1XHaK6PCG7WapTcHRPZR1cHJcDowye",
  "key35": "3i9VXurLYFgahbejx3rXHut8M8Rh5P28nWN5GCT4wM9hTt8iwvQcBkLuFizvBLMCsHd5HxfbJK9pix9unhqk6KGk",
  "key36": "3gu4V6xCcz3tQhfEfTcugM7sYU5aGdDYd8f7A4UyyHLR3Eb1P2Ld8A9iPuvAi8oX7fh4dCJwBXASKep99jPXNBcT",
  "key37": "3AhJSFH5UgtWCWY733ND57387oEVBzsRQziDpvVurbKxN2gE74MYPs1jaGJmKhsaLoHWTRS9gzmLpZqMq6qAC2CZ",
  "key38": "2PC9Fgg6DWDawGcemdBxzr9ELgWVxgCzs9jJS8jZycmDcR2E6SCsppFUqd9gFBn8drXQzGz1yddBxUpend15Mr1d"
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
