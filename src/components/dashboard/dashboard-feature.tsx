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
    "3GSUvxR5PBmnd8rHSkk11Vw7c7jianxQQMxpRJnV14BJoK5sRf9ptMdbPCN6vS2y9QmAMJD5qo1raMisbVg9B492"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMdWT7uyS8fF2xzsR9Rr92inViYFZa925kLkQaEtctZ3pfCZm897jJXTqs9bbnzjb5v5VVFu8QhMqCWpE5anAGS",
  "key1": "2Yx18cRTDRQZVcTJSthHz3Tfp9eNeA2yTeAnWQ6JtBKfQFRhcWw6hwphetAkHpBA5qKKEtKSve6BVbUvShdwoP2d",
  "key2": "4hA8mWbCndAgY5MHWhc1Zycrw6HsP3iJ9JGyME9Vi9wiT3C4xMHAkNh8NV2fTQxaMxW3DAXCzgWufudPRRfTt3qu",
  "key3": "2Rm7in4LJPyc3T7ZZg8tccsYTjZnhm19X3JTSP9CYWHaXrXwknTXviQZHGnFj3cksWmEU5emzxMeRpyaAX7MMJnp",
  "key4": "42bZjCHVKGbE1Fm8n6heCMH2oUFw4S6KtTxeQREahCVUrLSda1DTQDzBRSjqGzudM4GXhRKPupuwojfRs9Lk9XC9",
  "key5": "hjSQFNgEPsdhaBkXiw3j98HTuVBP96F7gQgp8wc1x8sdaNk6SJXTyKc8RwLs4KhpSrCZy5utJMa7xDKe7tSpE3L",
  "key6": "2PMQFepv2udH73o2spx4henYYAbCDrisFkCbRetLHqYBuBYXjKVYVsA2Toxem6EEzownHCuYjHNysRNEQ1nJXq1t",
  "key7": "QMgkkYJLZjVCrFGMyMwBcQPFaJi1uS5J4xAigwoj35YKiy1zTLHZjXyi4HEaRn7tqnzmESNBCZdGW2mKffftgVd",
  "key8": "4qiuYmCi6RS9jwHwQSyPtxrZmUGhx8daYj31AjRcKzAujVipn3AKbYnunPSmVyLE7BU9T4nBVqjeBYcGBJyY1pAW",
  "key9": "VVDgJBHqkgK9mxmCfRG8armrjdqoqRxjkKoznHDq4zj476sBsEG4omLbMvyDUxmznFjN6mBNKNf4HTgGLrPvWVn",
  "key10": "53D4qZ2i6k4x8ajP3wDtHX2MKCiz97HnJ92r7MvQ3LBf3oG7AxEyFptphJD1zUvRQhTTUPpxUYUpQq1PmMvzfbFT",
  "key11": "4bcDysDgJaZEtHUbNJLw4EoXxRaGGaw7fVBkJDiXJetVoANUKpYfdzwUEEbpdeTnFstBwiiRWbtRXe99USUr2GwE",
  "key12": "d92ACnvEJBkaEwcXu9D184etvpEUt16rSLJBEMAJHcn4T5APY2qso7sNUK7NbHB2WwLgjK7awdSFuBMKHBkWQvp",
  "key13": "2kBvGHf6Z9M1578ZveUCGK8GobP7Ddc1h4ZNmGoZBXx32HNz9USKwgCXNg8sn2Xzikr1eiRX2tbqKP7UZBaiDqdx",
  "key14": "2XqkvayicX5sjVU78QRxQm3WnbNhX6xJxjR8cfPaCgpUk9p8VMrEc1CKNLh9ZXnyaABXk65F1XS8kmSzmgoLnmdr",
  "key15": "2yQjnKkmh4BBeDWZrZhjnwXYz4f1bZLtJcGHMGrRtvQiDEzHJtpRdFTdqKo1TfjqZzJwcCGZcnpneGs1dWwJ5hL3",
  "key16": "5BaTKoUH8KwjZT5FKirSxaEkn6u4XZDQ7sERRB1PLUgGMNMpVQKMKW6YWoHBZMW45GRktSqurFQQQKUKqXCaJqDZ",
  "key17": "63NWRznhaqCj71n5B3XQsfMaS1DvR6fBBWEAv4ysGsCt41uEKu6iyCmAV85KX4nYf7AxUxCdLHKM3GXNpxSMTwCT",
  "key18": "3Pa6xwBf6DmiQaG3iSCtng1Dof8xPWHP7iChXs1werRrvtwMNj69JYnMfgkyzZtMSqCBfpiBLmtcaRJhZvk9qPTz",
  "key19": "kSsxe9dVRm3fpdYSdq5ZTU5w3KWLQ6fHq3wPsGhDv68f2ySzWkRiwJBgfzcc77pHBzPbw5TeyVKYXYwjwG3XcrQ",
  "key20": "2bAUmtUdy7HMS4APfvhyuBxSyfxrSWWfEJVdvysYoqVBdgN9b7pmK8DiV4gbKkkpQ1nAYdKyjXWVxSJxFJWT1MrW",
  "key21": "23ynAzEQj2vHckPJfDJHXExo48WM1ChHMGNptkLjouvUqaAkjvTc2uf3nsBVZtCxKtZhGgA9adiJT4FmZdx6dFio",
  "key22": "5hwZRvkZu2Y6sj7qf1WuZ2uHDzJDJGo6Xn7VVbuBSaXzKbaGxEJM66m1rrbWiXdH52acfczezVCVxRK25JBjfhe7",
  "key23": "5Z5GncHdbi6adUotmyKgzentHiS6XBwiLs6jroDawJpCfJKe5Ndx5YwTyW3pCn5caV1ZBQafHHhxfApATyeyfToq",
  "key24": "4yBEEVYwf5rDxrH8wNqvzwmgMcxxng7iwChPnBbBgsjHxxWx69bfdgE198Afki2zDZQ4RdiLB4Rz13H3zUi2XJzZ",
  "key25": "22h9vCJnGufGkgK1zP7yCYfH78y42B7vxRbvJzzbJ6KtSpmcbopXgFUXUYgWBnsZo4e9axMbGr1zfQzXXGtFCJ3Z",
  "key26": "4swWjMbPF2sGCXGkpJWVCWFT1XMDhktHyUAmYZimeGARLZu587v65qzGBb41NmWXGHndEYqdSgrMQZ7dJaGRNyxg",
  "key27": "3wTDbsYDqutXigYrREfZrJAavQsWaq6Amst23j8MYgQFzqytP67XhMW9EB9tc8rRZ5eFzEZ1vniib39LRReGyikb",
  "key28": "5NgNrvNFtnmrCh2StaJ68eHEVLFmkP5wu4A8nQ8bf8SAu8BKkQvuGRR5WzsWHvtggz7MgBhETR67xKYLnofdFZx4",
  "key29": "27VvGMRoKjA9s5FsRispLP6NrHeAUihHkcMb19TFLUJejXBNV4DX1VcS1Kuz1oE1hfr62CVqZ4LiteYeRTyfPxaf",
  "key30": "2favmXCnVUosvBE9uDmTxTBPxse1KSAcyn34E8iPtndN2RtibR11L3qP6uGogqi39VXqxmygKy7bnedZdXaSv5UL",
  "key31": "5pFAhbRcHVNQqsTVACtMjibCbhWCs655zzCDLMcvvFRqEVrqia6kz9J2Z3rrNfyivEJLq6fWSFjiQBheHtbzHGXE",
  "key32": "3m3UJFC9fVBC2bsatQnEW9H4Hcjsc5ZfvhBTKk14ETvU2JTwzFD2KDDsXxBtFPZCxyp6m9xUnyo85Hst8jY6APHE",
  "key33": "hF7t3ygiyWiySctE6WxH5fGoTcwcXsRXgq1bXW557R2tPVcu2wr9ufxVTgBoBAszC2bzGM62jLfUiY6ZgDnqTxA",
  "key34": "4cP4tAF6zTaBMxs3YaM4X2SfBfhhzdQgqG89LA2FhbBgMSA8fngY86enBhDS3byiigTmN8H45fYLEm7SzVTwYQVc",
  "key35": "59QQxy9k4g2iTrk5whnaJ23rQirxHsBAv71314vjCxN2KgyLZfWEd5ANvor8YZkXoA7kvcQnvVSPFBNgfYDopk3x",
  "key36": "4jbbhYavRxciH6ty3SZERX8AU1RnxEkaRurkcXePDjUaqCtUmNeKCnhVdCrcfkGCDeRv99NneBckHWrRHCQVR7Tu",
  "key37": "4tDrZqRoE2E4ib9GrPWtSfjCHNLVgpUXmwdT37z8aJf3WPzEwiRneo7RD9et465zULbFeLCzaE1i5DjtFr7Usoc3",
  "key38": "4R4qzQBvA4RhkcHUNGT2TySjrA5Ki7UHkZA8dWzLGn49FeiUgahARWcBM9ujpTfbs5pgJEfQ2ofKGxn7zmDoxpqV",
  "key39": "5gsrHMtxpcfxZmqfD4zD3vXEvpQRpQ86TMcTz5KoJH7KMPxYDNNpb6VpoSqiaLtJoGV51oajRq8GpHS3tu9tu5Ry"
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
