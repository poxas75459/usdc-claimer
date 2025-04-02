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
    "4uzokHTi5mXtaoFeeMBV3vHPM5UdBNnjcvyFiaVfBcFChYvmZXQtM46BuvzikAggNaqwQG4knbeozHCvvqbdyDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UgvvdphNgx8AoyjqPCckwPw27bDrop1Kpsdx5UnqaVREoRDcmtAYD1gxNYPxuUkQB5TcGf9xyB34mQWSbkuWaBB",
  "key1": "2YyG5epDVNh1RpQN5ecfqDh3bZQbACnVaVMBYResvquS9QHz2exAN5DdHaTSne5KvPnvr1N3txmeBWn9gEiCF7gE",
  "key2": "dfoEV4b3PNk5rwrS6BKr5Xh9EHaQdig7QdrKvrKPXT3dYP5VusDYKVQahFgiuWFCXSvTorCr7VfyV6ecPqKmfm5",
  "key3": "3EJBhZfxJVUGBfoWUtTECuJSvXEBxhJF2sDvu9raXvQrFsj6cnjxDngqq727NmJLmfzw9FUccUu8iZBWbTCxCJso",
  "key4": "5n6cdy51dZ3mM7p1LdBQcAauff6w4Xwq8nvVGHBdMvyJae169SRrE3RX3Hk357G24f56xyRzqJYoMP7R2dwaSvsN",
  "key5": "3YCgV4zADzvr8QtMYZ9cRZnE3EKGWKFhgaHic3nUrhW6vHwQZtmMqDRBSEap5Xvo4ed3EdiQMnWEu8UU4cWn9dRT",
  "key6": "gL98igxJp5ibabBQpGRcobr7fGshicj7UBGyKKD1QcZU2RWRNMjKEQ2H9cRZoGZXy3aNMm8w6Gu415wSM8jWDxJ",
  "key7": "2m84XjgigCwwSxEUqns2uT1rcbfBjkuJdEszQcmUJ2i1QESeUiRpcrQPNBQLtRoD8jzyxFEraP5VD2Pv3tyiLW9P",
  "key8": "CCWuewn8pkP8yn5LaDeEesC1ZTb789sN9jurcTpBhGTm5veQT6cSkfmai4VCMpjQHBm3ZE3kjgAnYcBd2YrgrsT",
  "key9": "3uejHZhPraZCPxrrWaVeTrJJ3wwczgkfpkJrQdFByoxLrvZbwHjWrj1XcVFhtLGfRWP7jbcC9DNcdk5ZXeJbQwzo",
  "key10": "23emvbj8mXeZi67jYEJ353U3M8LBsAyd2VZSb9bEfv7Rc86jhvSvzQhRzBxcsAHw5R6LcQFYAeWfHjhmUeg99ZQW",
  "key11": "4mCADtmvgjiwhUU1v28GkYVXAokb9MNUNCLduBkGpxjVgudF21M54rMdz9Fub2hDn2aRMaUGPqiQxjCnrDVtsNE1",
  "key12": "2RcneYpDF3SfKW2qAmGGa2DWGaRDuL5rWmwZfZJ4iKmxZ8bsJQtwGdKb6gUd7MEX6iwpMp4NkWKX87qeBjfRfszX",
  "key13": "49qAVuRCNfBaSyf5ubaaCDaGjTcv4U8H5ioGSGcGbJaHYB4m9ubuDwqb3eyRLmVrzkmxZ6sYYdzpnbVhrdCR1KC1",
  "key14": "3HVPdoUndNY7LmY2mrLpcD8LNkmwsYC6BdpgZ9VwhSt5Nn7nD7CYVtfusTURUMDTcocG4ryWJPkvZGrXmR9p8m1f",
  "key15": "4Cu6pBBLEnizC9MJVsT72nvoBq16mbPakmB11gVmm9bEbwutMAVaF2ZV8QdWj8Rctyo9JtAf4in7YtmqsE78DLo6",
  "key16": "64K1LQjhRujBBmeiA3U8WH7dhXuYz8bjnGkNx4hJC5zi3aKRYT6Zjj1rBKiH3dD3f9gHKLmP7Z6rsi46nuw5aehd",
  "key17": "3YtQSJue479FXp62tUkyJ5hzgoNiMewdy3o7DjTESL4tKUpWt8VZiQ71NRrUekworcfbiZDK47iX5cfNbBikLodA",
  "key18": "mT5i2SLfaPioPWkYBKKjf5Fqce3j9o9qzdeePvPxwpr1c4XRvmdwZaZ5pcXZiX4Qfjgip8KciTahRvnef5xgKXh",
  "key19": "5TTR7xZxrLAUhhR5vJF8bBapjG11yiEirfQr9sPjkRGSUaNGCtKrdVLXgEMK9SAxfmqC5sdwS7KENagQsau7Mrp5",
  "key20": "7A4tZZAEHpZSzDbZQobhtmFUui9zLzwk7Hs3Moc3RujyU5k7mMfc48K3wk5L7RLe7WRiksWqj85LG6KA4BXfjDj",
  "key21": "xf9KanPaJdehqpqpFJrWYVcZ2gwBGouJxQfVDozrUQF4ig2xMmLKcXbFSmqnSZL1zX5MF2bNsea2fJi2NUzQ3Y7",
  "key22": "4KtRQqqH3nwpjVRqGihoP7ru4QrZP4cXGthUoEtAU8FKtA6v5xirX4sBgCv5TX6DMHMgNfuLqfXAPJZNtkVbCbiM",
  "key23": "3vYsP5fbgZQGoNAtafSqKRJLW6AkfHCLdYaAVfeoYwRfQuyarZpxzbw8NjnzrfyTk4fxXExBrq5WcTo4curPkPs9",
  "key24": "4GtvCE8jKop8K5aEwtYDt1zDFHp2me6LdAmifwm3C91SpWnN69tYSt8kuWZcJghGMuCQ7aCN2C4C9qVGhJ51kLng",
  "key25": "5VDySDvDQpuAwoFprNuzaAhAyKacKyq4KzLMXUjy1KVyLQsEgoUNaBjrfEY5cQKvnfTQEZnnT8m6WXjxb55Buika",
  "key26": "4F2yR7xeWYFkLNFkQuBwb6dW8DRfxrpEwbRLw6wjiMwZMgvEhtCGzP8QgrUyyYZfXMBgop8wDScoK24RCdpUoSGf",
  "key27": "2E1TGNgq2xEFRJqmLm4dADFZriPieLmyQiV6vmF8nMANX44oVRi6DqEYCMyqeZyn5UQbUx4Fkx619cYzsFgcKUgt",
  "key28": "26mwThL5vXCUQGXJkkBaKzfNk5S7kcZrywjDvvgHsjJEDMTPLb9WedLxfHvA5imikDUC78vxqvryGCJhLFgMqwje",
  "key29": "4iHwsVWhbe7seswzsyw4bfqDAgNL3fCcB6wgS1FXxZHDuuYkRMbooVohWetLLF4h5YeDRYEi9JKpea7j2BRBCAGr",
  "key30": "3ytMkDNhBofr74uD4AQWmhidps8gmjmkpZkCdNu7FDvFpiwhPhRDra8JP1mAUKM9FUmgxys6mjNXCAnkZMG3K2sP",
  "key31": "gFK3G1NLNpNzBU9pwdPdDqiFNFdbc9PiRAHhgTuzDPZAxnzjvcWci3qC5FqB86Y77Frj1XP1hhxL8Cyoe1aVowC",
  "key32": "rXUp99yyxqu1SbTrsYwYcktPZNCw5BZPu1JXVovG4Wo6WvokrP7L8N142C4hoNcm3EHEYmJi4GM3oXvWnRwRFb9",
  "key33": "2SwBayEQQ1TSCXETSDZD5j62RRPtiAS17ouzK3jYdrgsA18cN1FX6U2B5jvFopAyWWTq1HPtEZ6Xm4Fo1GXoQKPq",
  "key34": "2GrBtqeYjiWkkytQeuimaYMSsgFYRWC53My8dKov57UgPGNxEBcgTtdAvApkupBT94mMWFLzG5JyKviGyzFo6j6J",
  "key35": "2H1s1ZAYCPeF6GQDRdvtCWNjFG4cUDjFQzytUashNkPYQTp9vMBRxBNuBoR86cxABCtJHxgUpM4x9CcxpvDejxmr",
  "key36": "2gkg8Jf6sWkUSHTpMUh2upXyxUu7AW9rrLNEatSDMH8fRf3r9EYakwfxMWEmm5uPeVZAegXue92Z5k52VtmeKG3z",
  "key37": "xDoXUvsD2SMR4YbtvKemYD3fLpe8qPJcRrtrMCBmRYoBoM6no6RjMi538mKnc3EzWc8T5bPhEWdVWuYCHrnktno",
  "key38": "4VpKbQmQKa3HaTkqiC3f4iCZ8LPkjpoPp56JYzAGWr7KmRYrkBrLtNFxR2N6o37Eixixo8CnvcT4BhRBA4AEHwjU",
  "key39": "4vbq9585Wp6DmemXLcPhwimTLedf34uSgaGmm3foxPAaVZeckJSXuqX2P4vYSdczhsrnuMyrUDRjfFQ3nkBfs5xY"
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
