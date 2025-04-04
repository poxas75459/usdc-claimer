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
    "dPfDVN1nkZ3vdwuYpqaEfQ6JHxtWy6VT2B3x9jFTFu1BXcVMhEE5b8FovEEenTHoQrDYyGBCCjNGXZHgyk4bwPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XhYsqaUAhsVVp2nPryWxCztDRVY5rMgZbBY8v1PDV1iFaup9E6DrTGmiJ8c98FKafQZeowWJUapDvuFvBtp2jeZ",
  "key1": "3dFzYf68JZkPRnTa1ZK9cFz9ugbeQwHWMmHHT2hh1ddzRxUFP5StnsKBbBNSyPu5RMWb3bSwiKEsc4f4RA5MtZKc",
  "key2": "5Lce5XFJWNpCwCBnpzz7cq4QAGPaiMHobCyvVyqT8dNzQJrNHebiWnVPPfCFiWc2eF9DFQvTzjBdC7yVVkDB2ubn",
  "key3": "4tRog4Zj221UbgowvfWb8EPDnj3TTcFD5yiSGYhtk4r8BF7YULqVVsghR9EAXgc7M5P1nHmGKbuoSyffX6yTk3Gk",
  "key4": "4No3m2knMWFzQgyFnFbPx7S2s8mibSAyqJhsSrYY52wybM6FWuc9tXoWXn6kXP34BuxJLm1Nvd8x2Y8i4mDCjkHv",
  "key5": "EArpBgnxxhLhSda2i9MkdnifSqvfhp9BBtrVkCSGqociNg6n3iwobPgagmcfiHBVQrzvfyaY2K8HAKyQkTSaa5G",
  "key6": "4CVx5S1JfW9dvurMtTNownoD5egBo4m3LQ46sUDFcW59G983ZktJD4doxes9Ma6uZNWBaqfvwgsy3bNk8Hhy9Jck",
  "key7": "28nv719T2FyL96pbSW8NoTzY158wZk8naCFXfwVnwq2tZ1bP9jchLZCYJkFCFXKWcg5wcjaNrdQeag99tky3B16r",
  "key8": "2foxDw35gj8SS51k8G8XY5Rj4WsjTLFC25hhFdfxDUC3QFzbit5pkDCfw7nbXhPFTRfSkXie9xScjbrR6qpJAzRJ",
  "key9": "4rRNwsPyWxzrEtq7PeQdkX2QEUfatuWrQehJ4qvkdh6w1dfq88JdSAPqXYwyUwa2RAgtzvxZ1LEwcrzdyY7aPLUv",
  "key10": "3kdhcvUgks8ApstMsSergmP61gJoDkoeq76oo9GtVxmHQBJcuWphgkFnf7vGmoe8s7R7WbrCVpgde9HqCGaQxGcp",
  "key11": "zb6uFV39t2XGNuYEaKo9Q8PFgV8gm4NANocWWpRTbi7Cnk21h671QcXi4Q2RByxGsG4zESKjwyTNoEToMEFxD7C",
  "key12": "614RKetXDnoYjxckgc3jhkoXAzxscvrqQ9ZRhKepvHeQkPbtjwsHo9UeQfeKK9cRCxFzEq2dUSGDYXuAMFL7jo2P",
  "key13": "65fonLG5RxQUmGXkJUvbg2bnudo2CjtrPSGFfiVPSJ16ZK3y7RikmRqwTvnxKCNnuUmjMeG7up5zb2kStFe7S9pT",
  "key14": "3gMXkSr9ekZu6DMUcvTgdLwsaMrbUv6ir5jfaaar3QgNrpTQSvoDcd4oQ63APS26sEuQz9p7sHYfPzZJ2NZC7ALa",
  "key15": "ug3CJFmEn1SExSJ5kmv4TTathFdc4U46Y6u2dDuzWYcHyxTtVEC1U2bmi1EMmMv8R3StpswwrXxjtAWRQgQnxJ7",
  "key16": "EWrmz1fJoC6JSaA52sGnitcR2ocKHLzQfgSR8fZMJdnq4uZppC36hcpAmNYq5x5Msv4zuaS6EZGPDdpMoGJiEfN",
  "key17": "3FBiMHnhupxh6B7iVMsEE7PAiYXnSEvD5GArsa7aZi4NR32CYcJpb9QYT4d7chCf93ZxGCefnBidmpZX5kgyuuzy",
  "key18": "23ycc7gvmK93MPW2zD87DGkYnEJqtUZq7quNzj8uiED21DysRaWdt7LLF81PnVLATgnfi5izaqgg1W2c8bL1ZWgH",
  "key19": "5WHpKbmMte8jQWjZXFZy7wQqci2Xs6WrC93pjXUR4RAQKFTRJaP4htPNdumewAMFwHKQA1dcin8hYHWCv8vFUZEk",
  "key20": "6RZUt2TwSmbU18h6yuFcAZ32HLtMhyjJvu4kYb8aQoUVtwR9DkKQgfxNVsL1eAVrr5asNQnuHsLYwp5sSsM3jCm",
  "key21": "2pvSwMwDwo9HGZthvR7zBFpyatCwT46QR1dxrVf94sFfVpAPyNWLL3MkZmhTRyDsdWTxuzbmLW66ASeAG8ZVh3dm",
  "key22": "4EyYEuDBW7J8eyS1vmPVDLbLdaMGVCGo6tVq6Ls5QmxCayqGnQNPRV9axP1pXStWjhB2P7VBDAmsBa1Zy6gGu3RZ",
  "key23": "4Hotweg47FxGgTQ5Acw2aR9kVPX5FDebEuK4bG3zhEsKYHVQ8C1fDAVkiWERjxgofXxAgpoq5ExpXrSGheBXj1rW",
  "key24": "heyda8tsr7jhmtc84FAzkpqXgvPZgUMnQ1KshcxMGhjfhXytZPncSJSrDCpTyUMKSn4MwjoK3bXRqKbkJbxgcHM",
  "key25": "5zzrdouzgW8jtKVBfBLGBYRpobWFXCP9pXEPw6oFdMejx5nrTEpcjhPNVCHJpgwrtmL7NG4z4fMeNy2aVEFQ2QXw",
  "key26": "koTbXxtG2ojEVj8BEQUV349LfbknNRRNQtntnyrgs8XSduaqfmjQdyKDJV9R2cK5apKuPZrtmNGgX2Vq3FG5DYi",
  "key27": "Q86oEP81vK4riMB5DjvoPZ3qFZVWi6TKnoLteKK2PipVavhGzCmtgbsiWtGMrz5h8CXNhnuQ4io6vpdhoE65ucX",
  "key28": "3kCyupypQnFekikTLQhuL6BhkPhiV2gqZGANy8djWExcV2Aic2QGmYMMLt4iBXt3z5cQN8Y6SjXXRgS2DQHwuqgV",
  "key29": "SwjPmSN2hbGAZqsncMYvryKfPNM6Yt1vmeecrKCxNmCYTom8wHDrYeoKCM45aMiPbnh1MQt2MaRdFPCc76WreBE",
  "key30": "3SYqriHZkKXudWuNHNDtCMD2RiC7JVnTnfP65hW7ZkyQRfs2RUSqVzJ2HV34NjTQDXwBCX4QczZn1oqWHZFhv3rB",
  "key31": "5hfugjZitPYH2GsJFwTqB1xsjfzSu1Np8WeQpyDjv5Pv1pi7u6mZFnQBmVZanDEsBdgxTT5wGRG2WrLdC6Bm2RJR",
  "key32": "4zcy8p5xDB5PzgyF8pw4yj9xuzrb3fy5sgJVcRx9bc6tnPmD9zsN7kjZp7t19kJ9TeCcd15M2LRCQP1N94ZHDJzD",
  "key33": "2aS2EwbSGJjAWjVG8gSDg6odoFDA1bwG8Fzx2AJ8VVBJ2uySPRu6bGbkiJhrwrEnLB1MVCHLKkyDy633FpjSUin2",
  "key34": "2mtWyYGwcstHFZFQBnFbX9gx8XpRPmp1p8vsQu3femfqfVouo1YMrkDtpwNCeim5wq6TFvnvtLDeouVFkTfuPH18",
  "key35": "2uYD15YMPMopPQLVYXYWmMLWPvnsyzfPxzC2BwhbWaosmJDiwMcfGALGhqjHKdANEv1TxkwQwJ78b1erQ7cHeYTN",
  "key36": "1YgBcyXpCfBVVN4C28K97sVf92uUgc1AtjXsKJ1GyBwYsuXYGsTA4PKXfPTbS8MU58JgiHeY4BgA32h8csm1hcb",
  "key37": "33zrvYZeMGGb1QwBhTdj6yHkpZupnVc5D6xW77nePv62FBqhtdXaAEqGY1jDr1j3UtZKDsUqaJvUzQdD5kVQMAwP",
  "key38": "CBeVa9ShEEMLWKiKPdbRqUY7MiHGL75grw6fM2qFUAgrpxPWoWx6ahDA9EGkhyR7bZfkBKPkLJdxcmWJzPa9uo4",
  "key39": "4wrpToQFNQXctdE1h7tp87FN9gqH4C3zrKtfDgCNe3xti9NKrsub9iCJ7L5uYeLyGffLjNqWpxxZHyXekmrMhWGB",
  "key40": "43AGxpKeXYMFH7NvsAPw1e5877Fqa93tWJnunmPdaTUujSkYiQHQQNRF8sCJC4XRGMvngthppvkaaRNEvRPU1niF",
  "key41": "2srTKCV3NA7Kne23t3VZbP9SyqjcbGmutfxKVN4PD7ARFdLoSp58fAYbG6nQBHrhHquVFcdPqUpG2rtinCPTMfbf",
  "key42": "4nWMPQj69qC7o1En4z4kxXhh3RfQBRnX2HcDcbC28U2oXzemA6u4j3MsKBtKejJTfvcffwuAjMzoj1nct3sDSy3a",
  "key43": "5rU5fijJdKhpiPCGvEeKgFiLqNsYNWcCVttJbT2vpVbRY9Sm42gcrxUMaxGpTdhqJy3uYWejqiRUxTHqVKXVGsd9",
  "key44": "WSdbMfVWhffQzyhMF3aVi1zvNwC2oS4ffoKKNnHLnxcURsLRouXsLiizsk5hzbCGRNbL89RTkiBRKqTQ7siTUK9"
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
