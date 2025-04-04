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
    "3NKSVkAB3wUsNu9bEXMJ3Yj8Rg2uAw8NUucLTZYWs63CdACUkkB1tRgftdP1CG8EPqfR1cZ5vPDuZ1NZcFRw2s7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5JUjBzmvNx52nAgcn1pSrimAnxr1W8tFiXfH1J5wnWaXPHjYmZxFRxuVwGXaBdQXGJJWHH6DyvxwZPMqrRd7Ha",
  "key1": "dkpofPKiKsEHMt4zQPuKtxTpnGEAPezw999TfKqtB554FkQ15goKPZJ6SBqp3KjidiZDAY86SLckkpb5HbARMgA",
  "key2": "2NkFccWxitVBuuE2oSFSSC2mvpwAPeWxuvvoTnYjPE2QrxrUNaXqyDHWNv37kN76UvN58dLnd7J6jqxAACiH6ppV",
  "key3": "5E2GCfnX4iy8c7ZALjZSKLQUZew3f3KbU7c9QHh5iaUNVZygHewWfK5WF9djpiSXYsRnn5yhxfNF9MVFuDrXk5LJ",
  "key4": "5DyrvqGJ54V1uf2EfHnTm2hKyZHnE6XtgRVCkc23JQvv61HiCsGaHo7HLm6L5CQdLY1y8MCiRGQLXRfJVHqo7Amp",
  "key5": "3xDCgxGVe4MyjfQ4acHtu6RA7PwicEQxuFkMaN8VduRrtGVxRgW8oWhqiJm25Z2rkfbx1ckRXBdWLUk6NQGGSFnU",
  "key6": "mRNmSwyvG8m3ao6CEA8iMHjQozGJKR22n47p1GfvSyuXERCzfzwKGTdL8s6KWLJ1W1soJZoa1kbo7ttHTeXt4TQ",
  "key7": "tq6xTH3kcjWq6tYwDvbvo1fq6TYi6zut5qi1hwxxXpptUFGssKqsjBWWNUd5FwUB77U4nt7hA3Yh7tDwLUoU4xW",
  "key8": "wYyTPp62u66K18wZbxFbmFnQgoPMcJBDAbMaybFYpbhiYTYQYpghRJLKyfAc1CxA3b88X8CYG4DkVdu8Q2nueKH",
  "key9": "32ewipsNF1K7gM1NAgQnfaupG6KZ4H5D31QWU3pubGPvSLFSufnYN1pau1epHBAksJQCq9HDG4aa5pHtSeRH5UHs",
  "key10": "3s5657Ch89AkygNtMXVCdxw5Yug9LB1QbmFgfVCC84tkiEezeYUCPzgRqCadKK2w1EyXA2R2XaH8CqKkojpPGKqg",
  "key11": "2HVwb5VeVfmPGjbmkYMwaffhVFswmGCwScYsV1HKiP3W7rWfwpMjYnfBee842MqZBpxL8sSrY1FUFguj3NePaUYh",
  "key12": "611R3ssu1aH6FeLmtyoyYEY3nFsZcZF6wYck8rPsgLFQce4MHeo7vMaqsu6CQKifeZK4e8Ltr4SmWJjaqgNryA52",
  "key13": "2ZZMzPrcuJVzyGP7kXSiJLTizamrKhnnJxcouqqemZnZkUSen4yD5wQm4iKmVqyKvBrD29yYbWco8duBDy12k32D",
  "key14": "5cZQ6oztiMGmXFhmrL7BXuZr4nzSukaQBGyS2i3gzSTgoPADFFoNmouwKmQnWUcNWvGM4xXmio1bzUHsSFsGmCgW",
  "key15": "52RtKYvkzaE3Wt49jHC3jQELGLNFyyAE6ECKGKhQ11GnH5aBF7r996tmqLcyuT5pDutGuHAkZfgkiHKgVSE2PX1V",
  "key16": "51UUc8hFy92nBn86duXnYPmmGW9PNpSQyrUEfu9YcD6Q7py7mjhi3BAB2Y5xDSXGDW28p93omsh6Vdd6FbkLv6cX",
  "key17": "3ugfphi6vyH2J2B81vnUaVQLUw1z1gQQKpidvKpk1W8RVVLA9StAhSJjXrAGcPT2Xn1J49suWZEQgG8kxFuy7eoY",
  "key18": "3SS4ZcKAMHyXZjSoWAjo3TX5Bo2MDPUizvQbEGZxBdFG5B9F9Bmg2NADgX1wXD29G6NFGJTX3r5rLm4gmcxDiG7J",
  "key19": "3XWJpzXAc7XyiG9PjzdbjAwmdN7wnNebTee1xtaxqftqfo6xkr5YUHHr3BQmZMcZJQbSSpncA1F1tZzZPBaXgKw2",
  "key20": "4NPo5JhKoYfegr3rDX1JxLMkdmfVH2fxfFHFmg9ek7CnjnpDGhJGzfcD91qPEo4q33xACmdZmyJ2BA8isjj5djcm",
  "key21": "4JDDL2tjD8jaEhLn8Sczrf3xqpGGcP5xdbyLPAvpQc6Xkf9RpncsbaaDz8RtVBU1127qvem7CSrvgeBVhb1Dvw92",
  "key22": "BnWWdCFCgv5VwV2xX4T7xZyst7m9KuHogqT6JFM2W8HdDyvkVdJRrJ4AzbfFxw15oB1CMjK6LukM9HXUmfjuuTL",
  "key23": "bG7xKVKGBniNEye6N9kEd7jLeWEofZwVcPbJJf6ahLHmi1HhivkKRkPBarGi3vuMnFodYEE9JM7jhprpsMByscu",
  "key24": "2sxUPYwXwUt8ajovmjeWM9wkkDqeyun8KLcDE33xBCLtSZ7XFNEzaJHNSvfAskKX7dZhaF2uAVV9Fgu7WbxdYi22",
  "key25": "pW1MwkrEfsWAaa6ETKbyzbr2zY2zdTmp3gRoDvokSGbGVJ84xEcszu6KRCwytyJFc5q7eXoZw35t7vRq5GvPvWB",
  "key26": "28e7iuNN2k4sB2dxFD8ScA9sgWJPgEmnqPR71Xa1iKRxTxZd8GCaHJwVXmUreLxLvefe1ZJLQogSSVE2FhfLoTCK",
  "key27": "5y3L17FTa4dsdtrS2BcHS69AYcwLJWUtuwrLgucsxYrvdgXSAbd5eiDB3dVj3p3KSA3R9Q43hGQMphwyrwwHxz9C",
  "key28": "3hFDCF2b5jK1Kqa2V5nUYZ66TkiQAENf6MzuD2V14Dd3vrkSp93zHMN6pisLcGL3Y3xdAyQp8PWKNuk61HbQPizj",
  "key29": "2mZHF72KqGbfgyGgbxi5Dpf8sBYZskpuaPpoJD8pQNMogTTAyziAU3boYZusUFJkoFzpjSdpXZQANnSvQyBV8yAw",
  "key30": "5u7qxDRvCXK5JZ9b6yt2RfuuEbnxB4bfbZktxGzpUqVUKBMMrHih8dcUQ9Si87TJcEE27Y3NKKyQ2V3rGBQPjR2X",
  "key31": "2MFrofRjDeCymVZxk9vCbimKcUAmrL4sVqszYaETgvxPrZZqET8f948AZR6nBX6gbg9X87JpggK9vBzsui4Nf4p",
  "key32": "5os2d4iqpvRo3ghqeRG5ncCvt6hpByhDomaLPSk3GAnhyPQ1Gh355wnQQqp3SUDffp2oqzznWKdAo9qjW4Mjr2e3",
  "key33": "3RssukU6wsomucge97Uv3UfNrVUrHpjcm2HVLrrVnveR2BJrCGd37ZK6UnvHF1YqN3kRNXxcRpZiS9EwFFQ95SaW",
  "key34": "5sEg2h2GHZNfetqz9EFL4Wvw96Xs4Tqz4ptxekYHpMenJbxdnwJu6Tw3q8APt6PSZj8tX7JHkzHNrcrkCMbtZ8yg",
  "key35": "2WsM7jxfdEfQp4ihM25xbzJynWAVarztZk4dq7d7Kn58XH1fvSZqrPvT2kfiKMVoGsSkojcbG3rdtAzQuBAHGpi1",
  "key36": "2KqQ2ZaVUZnkS8QjeKPurANaoUvxBTrpjTG7B3qop2wAex6jFbDKBdNLVj6vYfsHL4psYcw9has8bjY5xDahqEvf",
  "key37": "g1fMRgGK6dJw1A5cAhsNkB3WMkpTTUT8eZKvuWNEebydMCB7WrXN2P1EJShv2tnKgBxh3MNhuifsiV1agLz3MDK",
  "key38": "5XpjpE7cznanpFZR3mgrCaJpwPuTwEyD3nvaDJdQM2kgx2WWJv47vG81dohURCnt9Ksw6sNYQ98WnoEYKNLMpTp3",
  "key39": "pzomNixEJR4JQhqfqLGZ4yYULc8fUMQfDm7XLU9Z7yp8E4s9exgrTFWefMK1PA7kHUYs6w5gkmb53bxgb2Rhtho",
  "key40": "47MZZXGPEMGQCQBHvKaEPcEUDH2MCB7uaQQKznjPDmxzrxKPs4W8XLa8boNq2QyH4BxvnHWaRQng99N8kqv38jPG",
  "key41": "4yNFxahnMYiy9RVu99GcWu91RZurNfVv1FDBpHDv4C6E3Kg2yE63qDucYCNUr9AY87UVhMnBTUEXFisMgdvS26vQ",
  "key42": "3tddAEknpiCGcfxSwniLHbAmxiTz4eopvyzTbqFnkVFsRBRf3WqEeu3QzXbd1tDHJTouE24iiB6vnA2WB8pwwRPz",
  "key43": "51NtbygxfBQG1wWDaCiQFp1wUygrNdAkwk9L4yWEnnxg5hSw6GygraQfLrSF4SJ1AMXDgU1gVaLUrKesNW4rQSR4",
  "key44": "4oUgBVCmoPfyUqXmrYWiCv87k94Q7KXFmuKJ4aHjXVzHweNfXTNeAwEdAvTDggDK8YDPCLtBx9u5zFU84CdbPbyA",
  "key45": "3NBeaP1MKJZw3bzwNFp8UJwJpZF9mHuvAXuZMjaD5PqqPTL7hVef5E5WN7wweFGeMDFCNzoP2CvmB673w7mKECuP",
  "key46": "3RhdtiPiA6jWhpTSTz2C2e8CkGgUn83xStMDgtg1Y332RVC3ipVnvuoXu3WUgJzwstsGvzUTWGLapURxyAhd1D6G",
  "key47": "3BwZyZLoP37vUX7PMea8m1VFbKtfLEmNL6r1AuEVuFbgpgabzqCcny535YJu3rL43SNdWFiUG3tUXpqGbPorxNJ7",
  "key48": "3goMe3JfgdetRqUQKjPP1uqVYxXHeMcDZZ64qVRvzdep2PfM9RKG9R83RJct1AJ8qB7kMJrsyuumcU1b9xsBXDdM",
  "key49": "2wVFQ3yehEf9N22zwsVtURbhNn9Aukbc5hcip9oLaK13vpNXSK3T1xen7e2KGFQWiQ53HfwhSan2y93hR4DtyiRj"
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
