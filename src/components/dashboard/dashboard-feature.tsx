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
    "2fZBBoUisvpRvSBLxWhwoyWP3U6KzCtXuNLnq2ezbBGsjYsg1pM1y3u958TtN2KDCCF57Rej4tuR64BqhX8EoCVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X7V5N7zNSNaLqwVbvxqtNypsZrtwShkd4SBaKSQwDzvqurFEyumcdEZaN7CoNuEqPrPxh4cnFauPxa92zDEwC6p",
  "key1": "2outHXqSbSDJoLuzsHydmFqWH7YYZWqFTfsEEFwSUKveduhChwbX2CXrayMy1c47FmQ3FtqMFJfP6Rx7YPJLUgr3",
  "key2": "2rEeytJK3Ttz9zJ2ur5GXTjhex2pN9q92v14idCXpKLzJZYFBVBnaCehG9ceSZ4mzCXPvEWE9e3dV4DuKgakC1Ho",
  "key3": "1rGRauDb2QxZDRt89rLeScax1JBzKGZmijFnYGrwUTWEfuwFwF6BtNCBTeQ1EfB7KEQebgC7W8eax8gtNXh2T7x",
  "key4": "5XQth5vkQtVFteLDACAJeep1R2F1Usw7kCExnRzJPTXZMVafhtJzmR6xWYEw7MuLw2aiw7VYE4zmNbqo3aHJdpjx",
  "key5": "4zx6XWPftxEo9YWeqByRiJKvGmmtChGdRZw2teEcq88r3uCoU6XpVeE4soQyK4Qa4H2wcAw1bZkwLYpi9Xgbbzu8",
  "key6": "4hSzXrdjGY3hQ3EgDpqUFTfdHjqzTe28LZHjonaRnJC72CaCXWRjvtcfMsRuEG4v8sqEgR3hjJ5VjMf4226Sikvt",
  "key7": "2ryXc7FPEgKA5SLU6tdkT9MAkQkCRWvCiGS2HmWPcGJGmHTFniqbkR1L1oub4mHYbsCGRVqBCeintyjxMbXm4zaq",
  "key8": "m67ViCbJ1rUJfetmKXRPMwazzB6rEoywo3KWGBJywJkRug5vpnfLRmNWF1UgtMYq8RxRgwrgy2Jf1EvDSS7aaUJ",
  "key9": "4g3G6s8mRQtEQx79n8crULJuHkAeuQqidGwRYnViszX98sF2QFKcDUWpfiNvtdLBh8NTiRA6xag92KT1gG9rqD98",
  "key10": "YyfGo8Ftmyb2QpAjwTkqQ6yTw17QbHJNSYNet29tv5642Zmb3YWFGQDWycpPgC38EVZtuA64fEYQmp8CYwbE1at",
  "key11": "mkhHCU3y2XMjJRrJyTrxFbbUUCcguiCzSBLgfjUJXPerdKLZNyYQ6AurQsBg6457GTABwgVLTQPpZnJxLxEBy4N",
  "key12": "3fpw79bfjGfAKR3oBjWpfsUchopzanSU1gokdWHLudD5oc4afcvDswPdc5xPW2oMkuQj95fc4WgavFvDLQBgi7v7",
  "key13": "396njhfHCSYMWhmECaGfU6ueAM91yX6QEyiTZCViV425EiSe2p334DFHiPNHTKhvgdY5gEfF7HytiwjtRjsWgkFy",
  "key14": "4gksodyen9ByoPoDyEf5VpKwj5Ukfr5GW3a5awThTWUV4dTUgKzPHbn7bD4BiSpgcJFRHUNn8YdYHmNrBFLncNEb",
  "key15": "4d5jk1YQ9ZpXiLq4wSV1Ye7ZVEtUaya5c9DDSUX6EH2sATtNYbRLZtroF3m4AGA7z2t8FgnQsouCcaMDVdAJaLzq",
  "key16": "3ooh4SRUpqw3MaNbNPyG4s81dihU9CSQANGUskznSoTDK62mRMANK5GRU3xsG7LrQsNQ7eSTqv1gYJJqZc7H931P",
  "key17": "3XFrydnd3fxHRSzVYn3chGzWoXDSFX9orBtUi7m1W7LMzGwmVWiAM2r5h5vFPXA7pe71MPcL3vUvZGRaC3AyLD1L",
  "key18": "2Um3M3JR6HMx4NrptWX5YfGUJBxvWT8N91ECmpXG7RT2NmFdsANau6SQtBJqAxctDSzPJN6AR4pntSx9q2TrMnTv",
  "key19": "3Mz29zSDgBFCUfZQmEotF9SKu6Uiagxmd5TjzpaeDP48iLQpcXVJ8ckTheeHNrxVXotBJUVW2sccdVsGCdH7fuCG",
  "key20": "4f1sXUqQD8LYTuKJCWq1Bhb9AEeVFrAQV4EEgNwuZ3EZ8kWwWT7bUz2GoAS4anr6YgYUJWYbm3xwNKsKNKy5MG55",
  "key21": "4qWzSsofU1wHpUWQQXDKPQrM6asEZFmL7xATWJxupFL7Th6eZ3to6PKSTfoQxaFQcji9nXLiHzjTtrvpyP6siFwi",
  "key22": "32cMTopEmiAFMCdHpMPQbdx4Cesoy9dB1NRphFf2uSAcPTfHoX45RejKvxtCqfTDAxW379Q9bLz9D5zPKMAyStvg",
  "key23": "xV2H6ZYVtFpbPKDdgL2PgAq7q8JA7zQjy7wSJCoCzcKqWa4dz2jkuEHgnecSXaWC9zAE8DyefaWCeMBBwXHygeA",
  "key24": "9jquTiQWq39ERM2JAYgYYqMTygkiasPATH2muxajzTAncNkfwvUWmhs6m2JbUaxLCVetk22owfyPnFcW5T8fYnd",
  "key25": "scHeZ8ML1DLNBh6ckVzRDfiFsqBgSHfqJTcHq1Hx2F2SvRvXPJxC8Qgn7FT7YBWG8ASu4huTqZXHE1zEbZ5EGK8",
  "key26": "VcUUm2EPgSuFSVJuYQxXMjwHhBgoGQYVJj5fLFEv91m9S3mrUNmWS7QAB4HxNKWmBWH1rxVimeusw5ZSzJffMFL",
  "key27": "5MDW2HjnaPLsKc9yMSb5HekZU8v1bx4eTPqv37dHTgXYifWsqQtK4WwochzmQFhNBpBg1uiYhFQhxfxKgQB65HNF",
  "key28": "2DnAh4upcAwQdK5iES69h8SquT1eyg5CuUt55o1Hkz1pkZ6v54aAuEpq7VFjPQ3BN6y2bdoxXNX2SgY6HtMsP6Jo",
  "key29": "2NYR1SB9e3tZ4ftAa58fWbcyQkHEH5WYVCCooApvX7jRy3sABk8f1VDufc7PR8mSUY4T4eKKvccL24p2jnHx9jKh",
  "key30": "58b4LhHj2PANwvzKhegRTD8BE2HbeTPVuSGETcaYNS56oE6knSfawoZSGUetZgHBuug42kteke2oLeNgd6fYkpsP",
  "key31": "21dGfjBhB9ZqBJ4vRr9dVNJqh8w7YCZTt43rApPwxW1wRJuk7MZGSjWR6PEpbbcjQ977dwXJf2T4TqFCbr1XehTR",
  "key32": "2inw4rN6HE83KXZAod3kZoRZieq6KsYBMJcJ6n8w421gTksoj8ggAM9tNczLatwpJgd6yRB3bsCHhWH4VXEV5rRc",
  "key33": "R63bSCDutWhosGRoyVbxxybBpofG4Yh7rCXSAvchv87YuBUhqetaW37LaRt3sGLZAm742H8VYwHcFGXz1oYoMQz",
  "key34": "4ZUQVuR5pN85rSigmJhuJ8LUr48wDaC9Vuif8dfmPECDSASgreXVyYRun4psyXWLhvUbpqcz97nyPL1ztY8cgBsZ",
  "key35": "59t8j4K3B3uQiEUB9peYBZFvVRjJiEacnH9tjLEYGE3uiTW9rbZvd46eQSxGDDzSwicqUkoCR1jNhx627yBswT1R",
  "key36": "48tGBpPk3UntttvGyws4BSPjcEtQy7CHz83QxTdjes7Jyy3T2KeV2nZAYXcB5pzscbcuJhAfCR4APzb2ntGW9eFs",
  "key37": "4KsVPcAXCKbdnDusy52srn3Rg8JmLQ9BDZ7MV4R6LQkQs2yoSudfESx1o1yG1H1gv6PDNApiz9wiCVXyoN3eQaxr",
  "key38": "MNBa2X2XN6MhKjA5epznjXGUztNLh9w2VmAGUsG17iWB2fyLKMF314gr4YTRaxw4Tm7muFTLZLTcfnaMYCGkJ44",
  "key39": "7UzV457wyeQeUz1yRrx9hJakCXppXP3ECA2mjhKAsyjmz9q9yTaog3A3mbhCGAZiECS2vdZNpyw9iKERrfLRr1P",
  "key40": "5NQe7xUTYaNQMjftrZd3hCgxaNb193ecLTCfTTXYWfVGQHDQAJ3gESgt5ua1zQ4g9DJ1LVqZJfUzbSNLnwL2XkaR",
  "key41": "4MQGjtmYSqdRuYumcajwbiBFGfNdPUAmLyn1UbMdmoVEYTyutwaNiYMG9yZAutXwcn2dYUVYRVZjh1eB8Pj7bMbL",
  "key42": "vUyCgtcHT5dVi4HYfkWwvgujbQxnv7u7h3AdGSxiYAzWCcUL5pfuguJHAG3SFsW9fkmEQ9tbuYNNNgk7QPip7mB",
  "key43": "3azaQa5dLDEGMKdXDwaifMqd2MAjDJMaysF3NU4nywHf6N1NMN3s1zSNYnyUwbb9yfJNYgXirJd13gL5CtVLuccH",
  "key44": "3s98gVih2moV2WpKTBiJKvtHSnNHJGHre1P6FzHAJmuJuQ6FHes9q5nU4TcQ4AzzTuiTJZ5xzKYC6UaqCBZHi5Hi",
  "key45": "r5i7otoKNeETpmF3PXKCFjS59y4uvxmheQT2Td1Zb7KykmYCjpy4zSkGWA8pWLDVfF9T5k5yvJtLccnpdSC1oRt",
  "key46": "3yf9KwYKvdMG9dFsS9xPxPgFJh67e8BPqptYgjGFzUESECZpm5S27oe2k764EUJkFrJjXp3Uam245ff4xcvEusyk",
  "key47": "3rWGqbCc8XgjcCxCCyzUk5jAjemULazqSe9fHfEQUUCSyX5xWMk57jmRdbngrBPdQQRdYcdJt9TkfabjodcgS8Eq"
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
