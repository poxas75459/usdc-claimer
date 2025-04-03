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
    "2sFtvbkcfECGXEjfZy5Wi8AdZa5yQUk5RYVXv3RDN91v9HkwRS2vigb19c9d6wuoMeKCSGoxuo7Nj984V27Dw6nQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haZu4TBZJHgYxsrRYPfeKm4qYE2CKyS9fnE7vEw5t8pMkonH1rSYeRUL7UcBtrerxVhhBWHZVDqefBYZ2kXTCc2",
  "key1": "BkQ412oRW5FJhbFNyMawKUR4mpG9brfZcaP1c84ENKzMDkmGzPRPGvs6eMPKddWntF27VnuDpx7p5k763xexMUY",
  "key2": "26sJadhsnSWdoGRSh8butWGhfsvA6YcMFmodab9TC8Xed55paAwc1gw58EZta9KAL7ay3cE4MhE9zw1Yy4EYi27Q",
  "key3": "57NYWxQaHYB3ni7LRp6PNtjC4Tw8NCZix9DRTuzLfd4yXJFUfiPWVGcMZu7HuKQcLf5UnpmbMVqphaoQxkzhbnFm",
  "key4": "jhMtSD6GcyXWvjRSBT5UFyVvt7SvVNJDTvG1K9S1bqbiJ4G1FFfwmSvma8e1jZZCpa9NTMjfhsT1YC1uZ8SeCde",
  "key5": "djsaDBM2FWgy5mSJtJtGX7FNSXsrvGsBrpAKCZ8piXrpuZgreLggEspeXQrUJRDoN3fEmzStSrDcP6HCRdVy8ZX",
  "key6": "4v18VqusgKVgx9a64g2tqciLJBWeZhxEiUY1Jy1Zs7gSEZtw3KEPfoFq4k87Q2YyGk559XWkCC4qMM3VRA1YnWXh",
  "key7": "4nHMLgeLjtH8HWdEWKbMbr2Fr7Gf1EUmguYokySYGuJ7vLs4NywPDsTQPPJVzDkZeZNkJcHk2XFr7zNk22HQwpuv",
  "key8": "46vwtgmD4Nngju9KbWKgLUatqxmaT6hfKcypooMx6dkKkEx3A6t3SMxraRJnA6nTQALqc1asKBdVk93Ss8U6i5fH",
  "key9": "3JLYXyy9yj8xzMs1UJv6TmBSjjCKERBKifYjkC7U4DhzntxqGHyfFqqkTpa5H5WSu7zkR59YwfrM7YBvshMbL5D",
  "key10": "2QGBhhFcN7V2U8wgP68NDuxK4tL2PCq6jJLhLMacixtCkAmwyjYxro2LhYcXDwnph1ndRTKszEhYHgFRpxGd3ToA",
  "key11": "1ML1CXbkQXwPgXrYqvo51er9shcxLhzS4P5ssU41eBLHJM11WVZSEhgyPt6Ahs1c8aRY2p5fCipy3aDjCvQEZeG",
  "key12": "5k8CVjrSd3HkKnhuG4pLPx5JZX2vDucdu1oU5gfdjb2eKSzogR6S7juD2Tgak9UkgXnG9a1YpJkMEpK67QVRgCDV",
  "key13": "2B64C6n6yxmHyTkNYHEW5esbadGwGpGq6jNY5K3r6Hne6sjYDDoEVWosoW7fReDtH5VPkMYKxGSFrwcBFmCUQ3ds",
  "key14": "361gWzSPXHHftVDf3JqvtG5K86cxubmZSEVKerdWvwiBVXDS9H8LMQ7AeCCB38qbvsTA4mzTaxe5RjyN6qBxLHzS",
  "key15": "2JvcirdU83kUnEjUU3o7K11k6GgtrnrjDcjFLYUNcEpkK2Q4iod4XzXtpNpi2L7UCVxahfkqKyf6F5Ar3btcvFTS",
  "key16": "3itGBJSasLxtGSX2hKi4wdDJUDrhpef6FzMpAvtyKG9hARaGgyb2xEcDeFnvTPdzk1Rwx78mdzfmRf48XgC5pfAA",
  "key17": "52gnCvvbphA4SWBFNBr9fVX7U7gMHoVD5d6cHwLgFWNnSMtM5dPTF9SZmmf3gaKp3SybcjS9CH3r2Xz3bqKGumxu",
  "key18": "2ciRCDo26to8GQVqcWGEXrP3nWRM2oc3wMdvRAYvtKyw2a7kM5nwnCyjkmUSyqziK4TPmFiMtqo1s9i7vbCKS9r",
  "key19": "iYFhL6rSeKo5jCrCQRJiYfFA686ce5hrpZfpyUYBhiZKPMaxEQTo9ZeZcCAdP7p2s1Rb7N2PvBoDKniysUUC6YG",
  "key20": "3bwkraJbHzXsbsiGosnbEZbAPaHqhiHgfiDkoKrxVdNekjLceaBz5Tqj8HWEowjidBJ7Hb8HancX7Af3DMjwv3L7",
  "key21": "39C2An9vDGKqaSKhfTpLThhutJ4HWysvTRLTzV8Vzo8jcCX4Js3Mk78hu4RAjqqcyZtjoegpedjnFXSacUuhQsoU",
  "key22": "q6uRkrKzNg3GgoQCEsf3hRmJ2AoLTazGbrrn1LJexeADG5xrPAGZW2LMSWYvq9v1dmcRpTEUJzKGTvKXB2DvUUV",
  "key23": "zminbEvQptjs9rnAp83FG44suL3ESBb1mQc7JzHqik2PttDZnaGyEDeiuQdaGSYtEHcgEftahTxY7FUiT5G5hrM",
  "key24": "57f1G1NfuDdbvc8vg48XbHcL9docUPVdQtoXQTYUZAo5ajuWNwaHSs74W5jeqEXUhqEDSfXEoe1Vt5YGNNovbUXK",
  "key25": "3oYCcUkRfe7FU6AkJpeVoCaBhw17Vy4gcxQFdzEv6Mq3tNxDsDPm2KacEGQRcFXS6Zue8j4L7kPwzv7BPLHwXThu",
  "key26": "322Kd67z2ZPeU5pTGFfKds1Vu3tMtWR9G4FckdLcrPoryVmAwMbNnFW4kuAZXzeFSaGQ2wJmNqtySqHU5fhcRJDq",
  "key27": "3ERNeA8NRC91DYxdaiKXLWdjqmDvnyFfpnvrqhQvG7pLHBK1mFBK1grTPjo2FRFLJCXkhkPNqhYUN6TyRJZc97S",
  "key28": "5hF3x5ejdDnPWriDdiZ6PoVumtY7CDv4wQ89vsZ5xyXYmDPTSAmELu875t3SHg5DFd9y9eG8t76FCyGYeCZMY3rR",
  "key29": "5i6CYNbUJshkzo29A73x6Gdx2TZeYtyB5KZWFL5673mqiyj3hdWGztWwMgH4dpHtp34KvfuhouFtmZzdL5MLJnhz",
  "key30": "2bvazsDVedX1d6eKNG2gw1zr8wSN1CH3bxmo2E3aQD5dRWGZR3rWJjr7iMRPJeQkm2cSipfv2cjG8NiUa6qmKQCw",
  "key31": "5GTcVDYX1pyTgTBV9ashFfHumgLMe6fPkYpibdzscQNG4D5CTCobNXSVFcn66gYZcmMzXs7eRSh93Gi8DgCxCLf4",
  "key32": "2JC9zZAmP6MoegwYsbXbenq8mMfBvAgKe3WAYzVDW4frj9vBaqts8JqHFH6mvxwMS6ta9tv5viLtq6dETNt2gyns",
  "key33": "Aq8xd7GDMzKnZDkdTRrdMxvhcxFU3q6EXJSYapmQb1KTTuCYpwFV5jJRkMYxfHrqGvqLuozRnuX5JtKKEEs9wgD",
  "key34": "3LMex8KxawSesk7NPFkTb2YTpkeA9hYuvcmFraCSogUPFcw42hSxTAdSmcRYr56n5JsJ6t1DrdwapAuy1vq1dNyx",
  "key35": "2bsouQ5w86wYLrWt22YXmnWXvjV3MWqD1y4QaZj3uZnyRzVu8KsLkeEEbfeaUPnASKPMQM1G9tCtZsxuHzzXavAr",
  "key36": "2UcLeirhXMyRvgQf73mBYGzbCbu4EYdDyUprZXXXvnYBCdrPfmycQhBBLskG45jU3gqMrrRpa3pr4qga73DUKjtj",
  "key37": "4RyiwzRUpBmuNUhTyE2KBgno51UXSmQgtA7iJVzQ1Mqu3McV7woqDioxfW9QAzBQbT4jvsrJM8K29EptCCvCKBud",
  "key38": "bAieVo4FxKHQFP93WXRkaH15BHop7Xnfb86frsVXLLdcHfVARjFSMt3dWKhMjaDhK4rFPJG5kn2YxuGCevoSvTU",
  "key39": "3hTrKx6LcJpEdtDYwnkr4JjrXnQDXaa5okUovQGdboCqtnNPnBCQTVfDEtyde2V9F22QptsbqLsiiPKk71Yd62Sc",
  "key40": "qc72FQwQNqX9LPfpZibX1oJNi7dGMn5Q9956Jqkdjm9XQu1gnYMNxmEoGLqWhE3HjdXZCEFtxBjgkH95m15AVJ3",
  "key41": "4BmzPBVrukPznmohzMHfL4hgn8xdGb53NtL4EdCGArdY4CzpxiaqsCazrbNKxKjnUAkeupAfNQiNdB97pswRftd9",
  "key42": "4i35nxAEAycHMegp4VRjEqZUNK2U7P4FaQ81yxgf42D3HBP4A15iZb3JQo8FFBvqtD63dZWozAbLVYz6fFJiB45h",
  "key43": "4kTgmu4XdacZJEFsMfABzzAExCisUWTHmvrNSpLnsxWdUVkw6Vox9k9QupR7d8Lg9Hg8CeWqJHppLavrQqQHmjCk",
  "key44": "5FNAU4FNz1YJMfbQDhnLM3Ej9i3zUAYvCXHtvoEekLxiyZV877MTVfESEs4DFvSg9gQY9v4XKViAssSo4JpWDJxu"
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
