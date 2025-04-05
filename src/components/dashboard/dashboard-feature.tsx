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
    "3Fkeusoqgooa2rqE5PZtfM4TUMfs2RCEBdFJYdiHG9hU1YEnHt7yVPoGNNhm9MpMvyNavmPkKpacesWDTecHEoCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55UieByECeKuPWgAF3XT9g8wK8nfBsnU1YuHSgo7a9bcXYkuJrFUtAWvcPP3Uutn65taRogeZHZTAYGaMPmcQCKG",
  "key1": "4c5DjWdAVLjKEj4R69RtswoRHzRmC4DCtGsFCgJnDiEt9Z5w1CqzjJJwwyRX3ButxNACie98eaNF6MKiKcfXXRug",
  "key2": "51JKMV73eA4Nb3p4qdKRzuRc3ac5Mpp1xqJqd8BJo1D2mq4aN1cBv1AGVPiHVXuW72mxNFmgfB94fYTd1L8znRyd",
  "key3": "4Z3dmComB49MFEAmemGPSxgz4X3A3Rvoxc6RPjKxnXK1eFAN5PZjZ8LenBV2mv7vyjeYt75CYFBF6HEGrkuEmRqK",
  "key4": "2ZY3epYpLQr2GQzmFqGv6FcQsL4W2LYTQDuEuseCDEkMz25JZJHq4XtQ4bedq1DrBwj3MyzLHzDRUvPjBWAHN9Hj",
  "key5": "2Yasyf8RusLMmtCHjCscBicddzSSzv1YKDJ1cfsVTwUqwkVBjUTSbTuSycL5ipeB4jVjYSDJXR5BxWHLxD2JxWv6",
  "key6": "4V9kUn2t4yuipctT3BTJRW8Th853DdLCDU3puwSJPPPAZUiy9XZe3osywL6gHGtoi5kGNCCqSwfH9jrHU6HDAZpu",
  "key7": "3eQD9UnVGLJn4qVtRrvR8Aa8kFP9UHgs4Asf5Zv94dWBrdr95t52eA9ARXukbZT9D2RSXL1oR6LrQzVodmeZSYPa",
  "key8": "2DzXvkP1BjfA7XdUs2K1jB6dCbVwp4TpoRcXMTBA4pCS8ekekg4B4zTrCznWiLiLAHEwfBBGncbpmykpeuj6KGKS",
  "key9": "3A7J6Q4DzayNF9ruHiMmvuXf8c7wJAJ5gaKDWKBtvbEkGJgLmRf3Lf24JeT8791Y4ZNse59GFfYPXJaDjTwFNg5A",
  "key10": "5T2xcQYXS9JheZqaqskjM6Gv5tNZahRwPjDdc5qVVWfPVUqbfU9m2KhSeT3pYjQq1xKK1nmy4gVWy7bL4JjRqRmZ",
  "key11": "4Ybv4uj3BtMJ3RaipGhWYBoTuwswpQBbDynMemAgJR5rqdAWWSw6hHaQDaeinJVqxgbBjzCBDWrV95MDwEghTTrE",
  "key12": "3x9VFSLfVQZekcoG9ur2u9jD8BET2F19L4k468iHoidAgStvxdKy7JMd1PQ7RELUUERD8HgRWizwYzNDcsX416GZ",
  "key13": "25kBpqAm739KcpHTH2NyYG19ExxqZrsJG2vrpmvrALQ3LFW98hFHjQLNRFvBFNrHivfLSQdcVS4nBCiBozFJCXrj",
  "key14": "5jbWahvFcjt2C3QqnvrCbJg95SfKhfDBHHFAuA2xLtA437NJdFtXuUKM2W4PxQQyAcZRKWLzcFrJGz9imhBeb8dk",
  "key15": "4KVowi1y99Qorw2eMrqR4k2RWrXVR54NNFMc2xfBoxSLpXnQX5ojM6era1XH13Yki5HexXL6tmPvoYtHD3rRoWBK",
  "key16": "43AUY3RJxPfzzFU6jpopr4YqVexsgBrQh79YStBhRTzaDyhiL4LKqno8NGf8adBWa3VVBwH7M7WYE7yuWxL7j7tG",
  "key17": "4YzGeoNSxHVRQorNnCgrZKxVLKciAAJ8Cif17JKhpUWtCnVKKFCqcGMnuYTtkRDGRKxLJ3JcvaAKCKUiaeSbsVVZ",
  "key18": "4gvZzHYYaV1LRwA8j9JHhDHHLrQUaAT9G4n4NpoAvHLVgnBbLngZt95DxE5bH6hKVev4pH3WTorMB5XpjN1JXmnz",
  "key19": "5otdTaWM5p7QVDwYBb7dvcm1aNzYR5knwkwYYqh99WEyxwYkijF5nTSSgsXVyhPvqnox9VMFN5EMUa1wmkKnZU6v",
  "key20": "5gNas3tm8XTpimeCbMyvqnATgB5FAzrgJxkN271VUXuQT7gLKhgU3kmcJn9qyqqZGgG4MNZVSqAyUrY2d8v6d9ht",
  "key21": "4Bab8LtTmRr3yFZNAyNPfWzfv6NutqUD5sNGaVNJsKBKL9Dy1XGyyDJWNmYEnc115dDKcasLHdCytBYJYkgCCtUs",
  "key22": "2MzcGYzjHCS9KpE35FkcWo6RwwUwVCHNYJK9mwuHUq2eS2LzQ85LLM21f8xY4ZePSkT2o9trhyA1g3Y4UQrvQL7S",
  "key23": "Jm87494SSJrgwZGQmq8qbM4sEcAGMYX1qu2um7knDtGVvKcxWpNyf3QBuvN2gJSwZoQyPWXqUHXqdiZZufkYrnd",
  "key24": "39KkZNFCeCSza7UW5ifh1cajZbfxPSkDyrBXvqAVX8WbgEDpC6NUgUwxwJfnfocsJdEh5J1YJJMATNYXAioRrcwy",
  "key25": "39vYgoFE973vSdZu3yVqn9hKW78eMUsM6Mdh7rzVSX9HuKFMAU974Nsj1vRhqnxXQd4eWzehhnUT2yt6M49Pkwe4",
  "key26": "2JumRtrq58CRwt1zNwU7aZk2J3yAQn6aM2cFXt2TRKkDAPET6Cp98g4CaYeuXEm9RGPtubwKocgA5KY9PFPxgxja",
  "key27": "3H9ddnD2muAntc6XockhvwGFgPsdYP6FpsZk6yGHweqc1qEY1jyzWMa5okSkRFYFeAfQWwBVq4ZQFsGdWe7ipuah",
  "key28": "2KsLSX2U6BZPFwEk6Z9GhE3Ftdu1tbTHvrdfVGB2ZvAAdnM4vAZyY7N6yswwjo2yiQ3N9AnKcjUU4Phr71q3kNNm",
  "key29": "4YHTqC21N22xoifJoMFfV3zJj1HNR3oSnMz9HUDwUPbEUWYbuKcKPYoVQQoHzXgWkAavxjJhx1dbyaLcv2Tf7QRd",
  "key30": "2aRpt6ruHhCDmj3RDDgUBAUM4YqBxkbd6JXqnGrfaThLrZvWQBriMuWX8Z5vES26kyCC1GoRc9Nr3SzXeUwACz2q",
  "key31": "475k2hxNSxSUAfSRXYw1RLocEidpPCcHsWsWMeCXb5fjAC73zLcaSmY7qexQMMdZ69QvmrYeGSs6ZQc25D6zJRda",
  "key32": "3ombF3aZfyq7ixKLMrR2Cviu8BtvpXDVNTM4YEbgjMhjnWF535Jj4ErP46ZYDZmf1M9N7jWNchpeFytyu6H3W91k",
  "key33": "Ke3a4sHm8TysyF2Gxk5k95yHy1nvwym8nvtPynB8iLRawtVnbxowEKKFDSWSShrU7mWcCqFLtHBGRJEHjQh1Xsa",
  "key34": "3r4t6yP3UNqrsUfaBJYyVsQQmU89BNAtjSVrPSSD7wQDjqdL1y2dtcAz2fhz3rX3omxqAjPokaUZA7jLydQkZCba",
  "key35": "51gF3iQQPMSRR8P5iFZX8tT33MCFx2gcXSAjS3tc953TWGdY3rXvoH1nPbCTodUPLjcBjEQGgUF147tRp3Lgk4r3",
  "key36": "3Nsygd9KMVYYj8wvwGHGXKNEfdUyPhw9JBNKq9vhCY5oS9EQEm9VsY1LyApnUvUaS8Mo7qcTbPj4k1meJ3QNrCge",
  "key37": "2fWmEVz77D1HGjvwBvbfpvJ4Y3b3zLVZYPh6nCJh925CtiG1zvrEkrm3N2D52eeTXyQiaVmh4aHgGKHBjz7AAZEo",
  "key38": "XrpK2RxSghW9vnrH5apApJUYWodT6Fh5fYprhzsZQCocJaB3iEBJupbBs8N1JrvZr6aEsNSWV3skyoryzoEGKU1",
  "key39": "56rhFVdmtfpSWFkPgazx43LRrK1GUovEypbVcLjrzKs4WLB3S9EZQwpQMjNyWMrpDs4ymJTN7BRgY6s7ijMvxghk",
  "key40": "4uBb7k8BaagNXSXgo6meFyZHapsTNRGSMKCedq9DU5mYaQbMeRSeFhq8pTkzJoekqtwJL3F3iftV1H6uvuACKaR9",
  "key41": "5ajU9T6kXV3jsfj4eEmzYhQShPxCG5KTdrtyQzCQqMdGnYQ2H2BLoohSkgFN1FYkZdKGMEKnsdcQg6C7kPJER5W2",
  "key42": "3rYLLYCmjerHUaYhZN1czq3mCWvt15JmktD8WNRmeoPVQeK7b1bGj2A4MWEDpQsWZchhR4oDBxD8VZNfhXUiPXrm",
  "key43": "2ozCQL5VBKeWKbQadSen4eeF49oSardUqAY9D4E4mbhJ5HyWHKFPKM16xw2UUQ57YgtzpQ3k15tTPwM977HvR7CJ",
  "key44": "3szecSNyYgXaBcytQKCXYEJzbVmzmQsUZeSgXLtf2HGzJpJncKTBgYaMNXPEecMvohL6LpCWbBPRzXjog1zsJzJX",
  "key45": "2Psd6fTdbCzbBv7XmCe5dkbpiSTpgRjKiuJkUdXk9mHnrv1ZDo5iXXu2CPokD85pJ1VqKhAGcNT1FhcurbuoWF7R",
  "key46": "22fvTYk3cxNioisXQLKhejE5vEuSLDB9KVmVf2iAjQqpz5w9GVFZwYPk844QVGtUpD6PSfS6qJ4PAXTeoZAhPySQ",
  "key47": "2WwfFoKWPX8rKcUrdUAHy1fs1KC47X45y31Lt5Y6KFakAx16J7mLMt4ZNRLwBQmJQ3F4KzhPDhjAC4Npa4RAHCzp",
  "key48": "3VDEpjCGW5y2P7kSDYRVuFv7NEZtUF7brGjaRwpGAvw6ytiEGYrAfnc5UTYpgrgw9MTxN6y2mUikLWx5mpUGN8qy",
  "key49": "3hMRy3pU3ioqdSzBzzV5dTWRWejcCDPeKm2fmRVYWCAeaHjRtwUfzTM7VWzVFrB1MRkBG2gTAQAKuYE4C7Dq8zXM"
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
