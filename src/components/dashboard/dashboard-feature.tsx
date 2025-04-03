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
    "mbrBfAy6H4PMHzHoSYgh9xEaMQ5BmfUmPiQXFhKXakb15arMEzeEQpVANJihMfRqbjvs2vYJ79U13vECRrCLSmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W7u2vbBshWX8VAVf98FgYSoTRBUqPQmghcWFEuPPyVZspfBuq3PkGpLegExV6QwSmxSrYxQyh1B1vrDXCEWUrUp",
  "key1": "4vvJBoE5ZgMuxiTKWfhnpRGLd53MZ664U6RKSyPaYUNT7pno7iWvFp5HNHp4mj2dmZAhHEDKCCgMdicbZyj2Fspb",
  "key2": "3Vc3U19FadNF7SzXiNV7ZgYGdjKGPZCeqnsFubXUzSzy7gAWsnCfqf1Lqn27BtQuSy9bs5VJpoc7yKQBa3U34Yb2",
  "key3": "3RiSsUUU31J1Pe6Qhs5pb4ni8yKyQtDVBiiWz2QvGYMo9r699wAghMVLUYjJdmL6Y8sTo7nCDS28cRj4RnFjCbRA",
  "key4": "4WGiLYVvXN9mAUSinu6RXyCKi24zzemBc4RMy8aVLhH6TrBXXtQBHVSrvgx1tDSo9AYDPuNQURU9bvoRigpeJqgi",
  "key5": "2MX27VT49FVgzyqy9ixiPoJt97j665em9tMqroukQ7yUXRff3p4WYNkiC4GwnnV66dqqwk8KWBo8TkAF9yaDqe6n",
  "key6": "4ffjWCnCdDfgEJTeWuM4vNoruRReT735suSaFjrdHSPsSJ9Mmqbqu697Nc74P7DFD88m7YsrguUMwDVBnn2pkabC",
  "key7": "4DwMZiXcJLq7xxgkUUPU8ymRaT4zLXUJZAkGkAUtdBygX8b4XJcqMyPM5okYYhHFW8hMM5ywPTQ3cydZ69isPAwt",
  "key8": "4QLtNsrCuVsaQ2DU4C4j5vgeGHBKWedtL2rKvL7h9yx33QMxvq8JTS5akNXr9xa3HhtkNeqCxUgKKhPTDWCJMwdP",
  "key9": "3nnSpZewdra6xayHap7TrWTEaRR9wexNPGpopgc6mTf35ZwytAxv3nJodn4UxLNQvNCkZWfjsnUvdLe2KfveKjZX",
  "key10": "4W6CmYYmX9iDdWtiCghWKxjPEnGVZiUEiWecZfD5ag7mvmoitTJJeUC8HitKUY3vUk16Jdpmi4g1WGKF5TVPaELj",
  "key11": "41HaZVZTLzoSemF4GefCdByjsz2pDWphRXQSZCx5VAjJbteteBS8LbWncKfEsML9tZFZn1ABLZoNh3h2NEoLt3Cp",
  "key12": "5YfgsxfvrZ4AYmPd3p7RfrdG1KWpoJndd27cLvD6PBK2ySr1Q6SjyWu6yb2EYFev6QGcfw6RK2a5XAeaSTqhkeWj",
  "key13": "55Bthgei3XXLd53a5rC6HxsHZGxprm2Dh1miBXENyeufBqs3WJ188gVtUzHFW8JDvrkZkfbEGUdpK8viyJ1TK4wb",
  "key14": "22iZi48rSDR6HyWVi63yfdS8LBb6V94AgtAtkqEMP64thtKKqcRXr34b4jv3YrZbnEfm1ZnLD6DomgF7UMHKM2Jk",
  "key15": "3vw9CdzgmmoaRsuMAJjKegSC2DfohRviVghhE7VLqC16cNtqVFtoXgGDsn7zX8RFBdLenTnusT5hmV5bTRaE1K93",
  "key16": "5hf37zRTF6RLuX6CytjemnNP9iW29bvELDfq3jQCsaV47oXhGB67PuRhCsiKc8y8gKuWvmKh34J5q1GZV18DwEWs",
  "key17": "2xuRjfP8t45E6sDERbtDeN4anZPy1fsy9ie7V3MQx1wbSLNp9LoVoi8u8FjFzaC8RcHBDfGNBogWEfAPUvpbUCxg",
  "key18": "2ga24KA5s3rPiAyLcJSjA4Dhz46eq76byTUmGFFKskvjELJeTyfAky8da6GDbDg6JF4GvAWFPexZtt7D71ispCMh",
  "key19": "67maTBx5ZBR8WW7mGzNcfyX5aJQLywJEvFF8rsvtZhvpt15FD9S8MzZjYGfR4qGQxEujGp8aUAQ62dnQv7b4dV8x",
  "key20": "32DfBBAEZBKwDSTVu3VFyjHdopvfXN5Wej8NEqfsGb39oZotFM88uY6QF8KpNRp2ee7ZbYEpT8oLMcoNWz7RM9wS",
  "key21": "42kCSc3cY3AsKSZcbPkt6ktZbSgtPmnkbdbeuAuTHbP8dCH7uAs6UCJ8eBAZVGMdnDr7cEhf3mudPAYm5NQNm4vc",
  "key22": "ZH5fxMmhq4yght7jidN1tRJfS53zjz7HvJsYzcAKAyEHsEWgtNht1CwKCWa5ccnTnAGf6BGW5id5sjFUYUTmiHm",
  "key23": "dWfK1bDcAWsK9Hqz4mfEVPnNPKWKXk715Te5oVFTTv38wdGvw2rVB1enzuP53nyydPjJjz9dHB5FH5jytgUF6ee",
  "key24": "suqBHNRTa9i7zeEEJLucqBdWu6TbHk1ivXeUjdAppa69XoWwwRZq5h1Y3398BeiaK2xEEdY5hs3mBDiDqdHMR4x",
  "key25": "3FPj7RUUEYpq8xjNiYyKPJMNEzJfBneVBCDikfPhkFBGpbZyPuqDjBPvSTr6edAEkYFUwXqNizkQWab6if9KNXvj",
  "key26": "3AAP4TPWDLC9a92VeTbynMRGQSKzP4haXY3W7nkyUV44Ft9eGQrEY1Jo3C1VmmujEk7zXKRQoyxJYuWPG4Wcy2Tx",
  "key27": "3fA3zVBo4di7QYXn2BDw2JpA1MgjM8NPb5Mca1UM6LziUkn83Rrmr9cLVGJKKmnm11tRDwTt1Q84BLKXzV4HjprM",
  "key28": "2WidVEvpQckTHZJNKjmHQcF5DB6WTaM8vbMD7xRc4MTreqnAkJLxumD6QepGBPtwbPoGZ2gz984gtzQQjuh4z4sD",
  "key29": "2f5rLgWcmfFciVMFipnKxVz4mGGbLMKto1xSuZwTNzqah68YccNMDroGBKsRp2o2WsYnrnbkhEJuyVcWPDDgJDPg",
  "key30": "5FReV6W34NeygBcJBna9iyoWBd5fjw9tHaefktgpjLqsTHVQm3kesfZ7ugKg5xUfjbXr6PmhytmnjEedTkbDJ9a7",
  "key31": "4pyeCFPjw7fmLYHjVwuX42Z48YHhT1m6G7XjtMsm2qzRbJvuNNPSnoPzfgW1giY3gWviAxhWQNQeASzBYhCWmAgN",
  "key32": "4TbfougP2Gg7pWBvBQ84dfVgbHohfTM94F6rKSgHLyvvqZ4uFK9Uaoh6cfYS8S9EgBXkCPHguk4B3WK9zEjEGa1Q",
  "key33": "3yuURyVR8WWei6wZ9nGttd6aqBSGSFn193Jcnw9AbM5DB4UyGmjZTgiTQZcbhdoDw1DQMSUK9VSU6HppeW7Ggsai",
  "key34": "3egBu8hLPjtqPZwDa3MyV9ig5KXzNMtt31MNYPz4gXVrjXKWBYXb2GNXtxrVawVQJKcKsVBXitQAwBNaoL4E8uRq",
  "key35": "5Di9uqR1VDWmhSieqwpsQocTBaNcDVGPwegF7WkFefVvCP9fG9mxLBYXZTUkKJcmTTc6w5DmHx8xz2ZWr43NUEua",
  "key36": "kc88VRc6Yca8ppEK7e4H71ZN87GxEZVUnp3NaJX9pbbDRLs3SHeRDtU2NoDSF1D93tJBBJiVEfijwf6T5qTs73F",
  "key37": "34A3faBZ1GQZiLGfT31x968AsqvNGxUkk47VQ3cBtLbVq1JUV31gpuGKWVL5W9GDqYZ7rve6eJZc4Cnnx5LbL2nA",
  "key38": "4em2xsmhp4XedQemJBGUL5ioT9ieWKRCeE5ALMvfuuCYSCTnRqwUHxBc7qGzuCGvaCgJ7E1sxSz4dKWtm9KPn987",
  "key39": "4z14JcEnCQeuB1cvXhu2J4CdVa71MymmrXfpmiuDS3WC9ZCQFGC5K3igWEzNLJ1jDcwxEqjh7zXzArMr5wpqLAMx",
  "key40": "5rQY3ifNmsaybMi8PNtNfvK94AuxPBWrbRGLSTb9Xkfu4EfFaxCv2P3ddLYVgQbYRCNffXPjhdAjz8YvrpVpZDDC",
  "key41": "4vRndqc9g2ZjvJStRGZcV6bavgG2niYEmAzTEF2WPqi4WKDbyekf4nqnfpKTVaFxWXFicfn4K4TrJsfc1ogVwd9W",
  "key42": "3gVgLRdGbwfzTmkV9vhCAHKKwnpXA6qLRDuhi28VQU4DUERG1Z4r7HWjSjVgXnRNcCsqmNWj3WVNHNUKS9X23bcq",
  "key43": "3hwJhCDBeJMnmumUxjwpykjLut1eES7KnezHUwWYBYaQmttY463F3wMA6jyv55LXtCaTCKqJvRhpj9zcSRFWba3q",
  "key44": "622yNt1tfYtfEWH15t5K2cfT86i2eLJUfNFcUzYPqrLWAEogRFGSo98xXeUb2eLKYsE75by8jP5KJyp6v2tHaPej"
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
