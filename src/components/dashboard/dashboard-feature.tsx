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
    "uZYq8bi6vgQs8gYKkGxGEyNcCqPcYL3uRSjLp54QGiPeh41gKynz8mmWm3VpStUNg4ArGBAojfKBMAJTas8RvJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WosTUPfUWqh5hGKVTg1fDy1Yj4Zjea1ZaiUyXkYjckfGv3yUb1sGE7dPtV9Gwwj6aGJDRDLmHmrB4TmQCvitw8Z",
  "key1": "2CFVohdaXXbM4g39B5wz3gNKBk2aB2iftgoCmEKZawAt7WVyps249y1okdS5FEz6neAKK8T6eRAb5mAyQpeUgL6E",
  "key2": "5AhgwoxkEh49sZjkaxo2J4TWD6SVNhUwYmVHDxrZ2jCFszXvsoRbQhiag4Bo3z2L4rmVerKv6f6LkHbWTZVKR2xU",
  "key3": "5y3pw1MP4CEZQKfL64ffeEs54PqtGBGuyyfbrzgshFF8N3kZ4B4nZhA2ZYz7U47LBo4qyvfbeLed7ufWZEvxDJBz",
  "key4": "NpMEeWYQGQbZAAbmhRAypPt6dnhswDSryd81TswnvWSHhUKyPKj2fHapg6yv71gKP4tDmZD1Dn5XRpfyywjAjkU",
  "key5": "uPeyT7gp7RWDfuJ1ASWkdLiH61Lrnjzw35Ko7LACVzzyJbNMMs8bkvLuwuUH2qHq6Ereum1TB3efuAQArt3yekU",
  "key6": "3dU82SfnxphddzjdgLCBfLdnCne4tez9UnsS8mkAyhAaHJcmURmyH5jzJX7vprXCK6BNsR3BCawocEsEbYEkFkMi",
  "key7": "2iHH6tAUtpN8uLFZcJmgbat7GwpkfV18enJ8ifv8oKvVNJ73R5kkoKxJKccm7hKPKQs4YWeUkKtGctyQ3C3iHaz",
  "key8": "LUVCr1LgzHXNfLNa3tmZJtCyqhS2xxXRXPNnB1jHeqrpa7xFKDhwiSkd98TvspXQKkcYmLdAQPvNjKojTFCbfnf",
  "key9": "256spufySskvUSomjs92uTiupKM4QqMKeLy5UKxug98NBSuTdZZTmA6tYAZdp7jYnjUmpmJJha6brW9YgsvhXLtP",
  "key10": "2dXUwVQxAed4MCfa3yzzRLpDZJFH8gjxVtWD4btG5rPadVS95R73EWg3pJF6GJopweC442inCp15zFo8g7q4jDHF",
  "key11": "3VZVXFgKUrVceWQYSunxqpRmHrLvR81VW2FwjtoCCnopaxPXcSvbCrABCXurKUTpfr5wEriC3RTQWAsDuMWbJ42U",
  "key12": "TyePHxDkam9jgrqfEWvECF6T6zG5SJjQBX4WW9uLy9hF9GpJ1bY9DLxEZ15B8wdo7DKMt5YgmUVWATztkX3r5hR",
  "key13": "a6vcoi18SKduZ7cAKCoLjwmrPXFstbMsGHZED1DxZZZmXq9gbwr3B68r7g3Mt7uwyKTqwhiYfK8quS5QxMrQq2E",
  "key14": "4HPqJsNdka2HWKA3W9x8NZngfeVkEneDShyWP1RmMXYCJG2Dm62iggkDt5QYtyCdoXqigT3kcp8WcpHtUcwawYvC",
  "key15": "63bLfPkcTVx8vNYXPa8Mm8EDJSKU48GejnQ5SBfdH1jjbcyyz6uywNW6mahxCZUjZiTkeePtbYbUV13ZTk769QfW",
  "key16": "4A6Ep3u5yWFkREyDwkQf2v4BeRsLtADDTsWfiJV6SzRfH2S9tHagQGrF9rV32NSqzpfEfXGMC2dcZkVJDMRT6epn",
  "key17": "3f9cwsqj3uKPC185MgENpnkoLzwAxJWFgora3ruQkUsoiCe6yMjk2txAoUpXNHvvvkusbtgDXTfoMo2kNBHrqjcg",
  "key18": "5p4B1QrHMNUD3iSwSYnYLyY6He7DUbopubWRbFoRyMZTBReUGrksvNHjayc1tHVnpiHk1qejSZur9HVa29NshzAb",
  "key19": "4U8Ub4gF6dfPiBvVAXr5epsVthihb1aX8nNRj5wfWJqfuazhvWfK8YSxg7hukRshHMjMqvhLPMc6oSVZaRLn82bm",
  "key20": "54hx6FTfZfCd9zNhxxhka1nRKU24MvykrqYhQ7ia98x2Snmuw25BidnLRnvPcgn1636CuyFLx3SgQirAjUnSyxaQ",
  "key21": "2eEWWuaUBk2f4aLUuHT1zEkE5FC4ptFvBDpn4yyMf9va9aJ9JySwxjSLdwrkYPpdEZeuPm3C39A42FcmEv2cgUVE",
  "key22": "5B2Akw5ZW1yZN4u5XP1seTvMciYB3PaKpZ3f2vdPhYN3xeoRHQx9VmN9hEhvc76jevpoc6oB4R6UoLGCmywNNizq",
  "key23": "66LWahDaBHea2XuffkU9N1eBFjSZkzwQ1wEKSCNpzXy2oKY2ELE6Hxgns9dq4s78KLcc74PahvC1hQ4RYACUpJ2o",
  "key24": "4YVoAZHypCe3Ji6XytpvVYmxBWJpDKXLvEqFwERroDp8PYxJ74nNr7MCy8AgQUaupM6eDiDafTQU9XEi52FBDLw1",
  "key25": "2EUPjnymy2x6opChwBhVTHwm9wpedeSjGNi1qCUrShe7B7Ebbxz5Y35T7Zuvw6mJZCaqUy4ZsqmKc3PjDSYmtx9X",
  "key26": "42SGocoM1maLDCwk9t7zMMDjNtymN2CNXuQjuVkc5yb4uMdqBViGRNjW1CUtM11qoCw9DARtZLZMEayKb3YpqPjA",
  "key27": "23Mq6zobTdhuqNBsTKYKfEmtRrNXrCvUvEU5foEYDnSafkduCLSoJi1CqwVyAQjp8hsULQtWtqPAyaisvHxH4tEx",
  "key28": "RMB6aPp3JGiNdWpVxu26WiNfBM6shGh1LjCgMmZ32CFvHExLBVDfNGsffX5iHai55gCQUQKa1sDDQyiHLNv6Xbm",
  "key29": "29KmEvsHsM33XFexbre3hbNamkDbWM7pk4yqnfvfN7tZvGkeNH5rqivsGqnKKKBZRjMe6pCJRQEzTTjUCiK5zfno",
  "key30": "4JRpSHd1MVcs7yyZ8vYD1ijGqG8AUfieF1GrQ98nbqg3Xp3dCFfLUeqCkq5f2cztdkcmfYPcogJsybWU8mXUuEp5",
  "key31": "NwrL2YdV13a9QWhebjVbeuKDwZp5K3g8tX3p2X67gFnm6YQpiQDDcXeAw5xFeLjQ51H6nssDJC4iZQrUidNQBjV",
  "key32": "4KeJZkVWZUDaFVTQhfqT5Eu4uZzip38ndL4neUnkvtGFoo6FZhfy8Vo3QsPQK5av1dm28vUEfX54DZfSQYCpLF35",
  "key33": "5UGvJUHaWH39UDpZbukJNSy2HsnEfMkrEQHEhNgvkDnhbPUKwPAhBZgYxcK3Cy7Lte7z4aP61MGjgy5MAyiXmPX6",
  "key34": "3GgXUpWftNJBjXwhWtZcJxufBvoqUi2TpT2BnAYyEfxDWgo4KGG9xLYTBwtSp5DLXZYjpFNBtTyG1jahtSu2N95L",
  "key35": "2RbQtvGZkZa69ba2pdMVbWSPXnkJD5X4cSSVqfBYDsuDJGX2LojcfS2ZLmh5aX7sv8KKkQSVnVA2p6SWvZshsKT6",
  "key36": "2g7u65efMa48HTyQZH2G66kXSDxACfH5pYUmwiJtYMqRJyuftPWHzZgKZuaw15pgRVpFT3jo3bDnBSK1DX828HNb",
  "key37": "SWAEpQMmxxxQYXYSvdpfcDPH8y1HcQr7yc17HPyasNGdTzt6bhtmVhD9Hr7qMAgucVNAS9n7xw5kmcJgxqvdQeu",
  "key38": "4qmuP5sCPeSfNKZ6hDzobD9N2cXNwdPvmeQCHsdc2MHMW2GRcb7PfTiw3HiERtCHwbyTEVYVnTzJNGxsyUaxxmvz",
  "key39": "2dGBWr3WYkKwTQQVJHxp8RfZ55hS6YrzJN93jh4iUZBCugfx6S1Z31iRBDEM1LNgCYWErkjXcPcsD3gjXpe6M47z",
  "key40": "4LUBWrFR6jyKgdpf2RrFKuyxDpNRAUKrs2y7Fx9iuigyKKPHXELwUumLNefWnnNTkrQasgyThLUbi7AWNAKrQAeh",
  "key41": "bZtrNby34cirFVFVfLtkKWoTrxNKNmNFtfPEixJKmi74gEZzrEyahAe9rCheHJbLYPCftz8ao9muW37oQznxF38",
  "key42": "n9F3yABiK5e6HHdtCqgkuieyvGqy32oCk7UuRVbq2qksG6BygAvTiisCVon6vCmWHqk6otJg4JyMjsXn8Etppwp"
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
