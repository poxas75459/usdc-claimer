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
    "ZCdfZvR3xtQkmi5nNFURgSERkbFX6fDXR9uuCQXVecpF2p8H8fS3eqNZ2LreZeknsqV8xfmj8JaMBZcZV2QDEAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XtfojZGRYJxkGpSja72F5iPGbkjfFz59iHJgSEv1GeMEBvpT7YydC6pCXHAXQ55iXF1t7N2VBYSyahFDp154sBc",
  "key1": "69icuwcUSBY65t6ZJAtQZmmeMw69Uuc5FwQCKWhYZN5xPH1GkFwnecaNFb2BSzZKrg4tx23iaf18cH6L9Wic5E4",
  "key2": "5sFqM4gu5JEn9xGjBEMEzmKXeCfcvb5xNfua3XCuciVHoW9zqADGyV4vXh1ta7CnYY6ZLtsy8CXRcQRsun2mZ77h",
  "key3": "3RnfYTYU8JmNA4cQaaFgt56VBgfXZocAcp3d7SiQgevu42nNNSYSdPgqHP2hmRqsPAVuu5UaowVdR6NTW1YcvBS5",
  "key4": "4VLFkm2tXVfih8eps9Vo88tAGqo8bZu3qhFCGMcP2FSGLxy9tRTvKy6zx9vW6yauSwguFJfDCJ7r7ApdewgxCiF",
  "key5": "67fEHyFDpAWtwoC6HwzAFtGTxRUMRZ4LSzshyrsahFtdEo5id8D5CQpbnY6fr7YQEGNtGS1gRLJ57itREM9XMCNy",
  "key6": "2R7P93RywM9kkMnXfVXU8EuHrePpGXS2ehmKf2EXtMPd43r6fguZVrL4f5TL14JbcpNHaBFD5gqoN9XeCneVkCyL",
  "key7": "2QHD6JBeJRjtbQeSgsHGVqa7YCh8onxjMMBTjmjzLRAMy4EaHPAQX7hM9YdsfuCjqaC9ejQW5SCr66FWzUaV1bsv",
  "key8": "YSWKAHTTsk38VBif7KmZVbvx1AsADybaH53xf2JKK5dmmkjvcph2Vva4Xk3bDx6RQwxSenfnsJL89PfuPAfsFpE",
  "key9": "4aYLaEw6XdkAMgYGGTHvEjFvW6LFUsuKuoaPFypXb9BLfEvXyvis8NvKztfasDEKtzWRVPsaXTXs8qPYRmkTLgn9",
  "key10": "2A7CoN8vZVN4GY2HZJ3Cb7ynBoh1pwPtgUL59D7X71KSii7GRKCzwvk5KBJrfm86ATbmRtpWSedYXVujvvf2Y89X",
  "key11": "5UwKmg7yZGA3hHt6jjonswHDvPyG7XMy4xQP3HmpXuUrNzPcn4j1Ai41QxbpguMUUpGzjrDUtdckbxPuX1YAUbon",
  "key12": "4e8nJ5hahSephsm7zNDuitgaubL3gC73hM5QT6zUrEDKn4KY2Gij9JHE1cuZSx5iMdaq2kKVg55jsTQN3KKUupN8",
  "key13": "4q5K9yAkENXfZnNSP9NjEcKz6SpcdnFmwRYK3uqaXNNJoCeG5M9Kn4n3Low9TVbhshbDS4r1uFjGcLg36wtR5PJA",
  "key14": "BFdaJDkNXMcJi29FMQDPhjeua4X4DBPvouNMj2QfCHFRCvn8p6dZxp4rEqJYQeptdgWeyJLLDoavQkMALZvQEk2",
  "key15": "5E4t46b9qiiVwa7HAn6RpB55m8thGJ8tHuDC33U9xU19ZdT1f3z8iwmoJ7ryNoPLRkctkvKQxfsq2WKftKy5JhfG",
  "key16": "5e1Jjrq1ZcUXGo73NHyXdVPHMML9ZUDr4RXUbshDab5VAXm3Ff48DqfMJci4WcYSB8VZySh7RwFNypMavUpP54vF",
  "key17": "3QLfRmTxRM15qf5MRjkk2YPktjUvinjLJ4mkLB1Dnyf7fsC7PgziECnQhuFc1gZFzTthusfqTY3YHsyyvrLhrwyF",
  "key18": "3N2zKCxC9gyzkrZnWxTSkBDNfcQ4k6sLPRtBdekJmoomzrXNJyfgAVpYvnS1whAEyGzKj1jUS8kPVnZPQYFvv5FM",
  "key19": "2b2CiuWtNQAj12SRFX5rorkE7dcJfaShkABQTSmqVcxjkciF3K53juwU1YP3JRxz2FyXk5R9N13F4KPo9URGgqbG",
  "key20": "2YJWURzYg55u7aU8gC4zvgj4pyjhSG4wcxdVLASWTrr5E4eTfGMBw2AJ7MuUDxMVFoVrjSMYPDaeWGNAeKZf8oXF",
  "key21": "3FoDzdYCtq3cLUSvzTcB3ruBPxmb8fpcRqVBZbjUvxZiG4nU1DqmU6Z4aSpy1QpdS6EvaFjHtdR5pBK23gMkDW2H",
  "key22": "4mbCDmgKBk8qP6cCbEUGu7BSLUH1oX5m1BU3q9sVcs1e8nMxtnA3N5srRcxBReuYBzp4YGHxzrFQvHi7HRLPxA5r",
  "key23": "2naSr7tjLuGp1RsSG6SNvPVapCuLNRY3Uyjwvg78f5p39bmsieP1Bt91XQyXynRkc5kU13nibZoDUjsj2EeW5AvB",
  "key24": "45WgRbo45Y41gSQYsEgYF3vy9ycF55dbPQPx9FC6mzUsHdfPxdsHrJMyCWbiNN7rx5wPXU5d2Zu8pzGUaM5yRqNi",
  "key25": "53eAqLk6PWqwFvbQLeV27tM5co7RocHy3TLBqqKcMR5YWdRdTgjChSzTfDdcdsQC7AooV2JJU35srUffJjcBK3nY",
  "key26": "4k3TZFRqDpFZALmySsbdeV7YLLEE568VYHHKhfQX7ownZuxqZvVjtJMz2VjyMZgxuTn185QTnnBLWqyhh1WMrDUm",
  "key27": "ReKzfphRt9khqTdJx2KXpEKPJCEA8PXPprshA1mxqoLnAthWCYDMPZbmjRNDVVwMmeUMPmXHLndjg2FjrRCuU1G",
  "key28": "5uW41KZYv1ezzmDGeFttCk7pbgttMfzY3VJnuhMbrG8Ugwvn63rVjG3nXVTJzWyRLfKuB8z6pUQQSxxMpngZFXcQ",
  "key29": "3GFyx42dK7L5c9u8qJ9ANy3vqS9rCXYiBYh8kjw2pq3NfFsc1A8ViYHgrywDQRztbZa53UFiB6XsciUFYi2muxn3",
  "key30": "iHATPEL4xgKYgpHHpptNLBXP41WxfJWFM7uGRzgq5m3sTJpV9DD8Tkt1Dsuk7iV6hVrUTUkYQeeJzpzCHhy7jUJ",
  "key31": "2CLrhSUNJ7Cmp2uBSTd2XsfFFyQYEUKqJopZJxR5cy6TVJqsPCvGMwfP48SN8csWTfSyjc9PNPPUrLbNXDJ9Wyu9",
  "key32": "4spr9frMaMepevXQhc2PN2He8wMz2WXvYgMwNNhuJxCVrQwN5RKQqvUb9EQTBR6QSz4R2oq3Vauq8me1QkbvFAWX",
  "key33": "WGuGLy3XFz2tB9JUiwZ3SpxvmCQPAW3xQqccwFf2YBWBDrKpXGmT9Y22bBEST7kXnPNVcH82pxGVsrt8STFvV2c",
  "key34": "2WybQZbrtTKb9oZZu4DQzbsozg9Z1KsQU53SNJYmgcuvu1Zbkkd2r4q2A1fDGwB6jK7yCSr6K9HdJeV2heiPwToi",
  "key35": "4vbE6WMRWFK49yHcGQtA29RhbPUZnQ5F4RyEonZPkycGasbMBaMx3x6bQ4SzJFhiWCZwarAbt6QWPj8sfKPmpFe8",
  "key36": "4cu7pqJxa63KoigXZfHiQGyHnDGttrG3MSbmpb2oRQXwDDhCkdG9aAkC4C3nMdvJvYLzEDELXQJdNppYtwH19Lb1",
  "key37": "5ACaansXuW9PKfCHyrcKfhY4yX8w5AWTy2CxWFA4xhMjT8CtHqcqBRRzLAyTKhQEUhzZLChCJAcajCM1VyapwYye",
  "key38": "2kF3y6pc7XNs3nLb5yb6j8ipRhR3A5gPMpJBWK7gRvBtrAP2ka3mMESkCRcavpJwpXBLSjSYsLCP1UfDb9AhjJ5R",
  "key39": "2p7iBgBGwFCPUHwSASaGnUzvHAhYE3akNhBx9bQAT1o5JLw2VpEHgmV2mFX9zFZfG8d9tRR1cQRR2gQBbbbqyDxm",
  "key40": "5Wr151ia1ko164qtTtFmsAERFvoY4iCzJdDWFXBFeCmk17jiPmH2cP89a8Ur2MMeqWf8czsY2exoUqBsffgwGE4T",
  "key41": "24WWdwEwES1uZviHZFNJwXHFLmSQqL7HD9nKLV2MrBNPsLWx2ynf5ZRQYoR39kEGDvX2FGxhgb71VA8B8UtgxKLt",
  "key42": "BqHpLGp8Tw1ynpWWoRSJLwAA5wcpgf5gZkB1q8KUmd6mkJVgCfNLmU7rpLMcxQS3WQRA4ifjAXwrzdyT1nJQLMB",
  "key43": "4UMCVhBULripVyyskwjARNku13G1R2qYvxByTmiZPBQ1Lqp7EsUHGYBXEebyua4F6xmczFyN2PBQjeviAp8Ziuwg",
  "key44": "gSvKHCLTscAyAnHs4C3J5SSje4w8opWN6DuTZbZjKxrkjeBM2aJbrKWJntWaC5C2Pw6MTNJzM6gF3zdbMTE9gzA",
  "key45": "38ZDZv5RgxB7ReD1x9kvsEeeu2mkSYMpF9SpLHpQr22pKywx82VJxquKZJ6G1VzKCAWg6c8jSJxdvSDn9C8DpyxG",
  "key46": "5FHruKwzPBjGQc49usSVJgdumgx3TK655qUNteEM6MZvmqLqyTfxVWT39wJx4jvgAXnZMaiVpkjiEUXfxasiigaA",
  "key47": "3AqdJPQJ9u9D6QkuAGCdtRBeWwXPvKt4PNYxUGd5ZrS3gHaZhdrsWv1fgm1X7qkFZJoqmHv9pj5b841LszSAWxpj",
  "key48": "4CDdS5h6fZAG6LBjoHkByMfEDMxwrYvvpaSYwZ19oUCtf14PVMsXZrnuBXTYNLHjNQoQEF8JBat2vKq3c61WnzxV"
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
