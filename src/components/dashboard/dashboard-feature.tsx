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
    "d7CsX2KzkTG8R4Nf4fJuWCwDYpUcJzubiekTofHRjmkNNP3TcnQJYsCH2VrP1PsizttUDTtDZyouDkZiNqdCHu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ioSMXRAkoZzD2EbqhqSBhkWEBmxzN3MeXsDKugd8qm1uTUy5v7wL2DC19oecnvoubJTX1oXknW2NbVrzo5xVZ8C",
  "key1": "4GSKP928UqVqBKzay8Snk9DoU9CXVqNkz1wp2C3stt97TJ5evwdZXujMvUgr8mW18rd7xfu66pNiu172wFAFrhaz",
  "key2": "5j4ST6zpfu1EgEjXismRTcQLkvFakon1gP1r1WKyJ4RN4VUQ31kBxjFNvdzJsgV8UB7kxf8ow7qrT9xLm27isaNv",
  "key3": "3eia5gKccG1GweHMGkYmuXYDNagmHpqGiVGxWL11aeNZPdCKCzp7HkwFEvXT34bKNSQfrwyAhR7XcCsTp93KV8kP",
  "key4": "cWJkEdyYJHjpGxfLCDcqZ6SjBgBGbBizMdehuwXWM8SVpodwsPQhA4jRKhP6wTQoJhh3obpfvMXQpcfGmNqt6n4",
  "key5": "5DLq57yHGKDGrZcifnkRjsCWBEVqtDFwhJee5Fpe15qL7mKTjZFkzrPKPkGKTFrJGmLAXoomTef8yyPu76td2x9A",
  "key6": "25AD5gXMtp3W2Bjqyy4zr4pPhiqpNfabvacYtVMZ2GYFkpUTy5LjsgF7AuTkbPr5gsmtdzNxtoUpVqR7CRozPGGT",
  "key7": "44STJ8SjkALxQ54WM1a1yFpr8W71WVYQ2twcwFauM6L8ifaY3eKMSuugLYhdURSMsNB3EXtYfAApBgAdmAVzzuNZ",
  "key8": "4SuLvEsCBt8UAj5thfMPsDF2CiurMK82o7VGqMCTdHkVz4cHPBrYNdnBX4X5T1GjiE32p66jYUTfoXwEJvzbm93y",
  "key9": "4MSZHcFX8dosJLNo8g7r58hrDk94FQYNFu3Zf8kufCZ4Zdr1pnPxAHvbKzzhWvHZYVNBJv4pkGxiTwSTKyrmGut",
  "key10": "2cJTrH4vtpVPnntd6wsYe2Fa87192vqKykiiWr9UTjkJtshAAFeTZ3yCqSaoTsQiuXezYmZtzw6qL1QSkNk8rxCp",
  "key11": "2HwtXyiof8qpEU1q3CK26npgTgyknTMXE59New7jYbNB9zysiiAHGKLPXijGmJvYdUVVkva8MkQ5rwNVyNHMWM7F",
  "key12": "5TAj4fckN65FsA95xw9VBLpv7xxXVcDdn9xyrhuSAZWKMZx1vfJpLwuoaX9B1kKh43Ze2m6aXRTMGx8DWkPMuwL6",
  "key13": "5akgSrqWBGcTXLQ1QxmimVANuoRcP6KQXLgwrx5ch86Bp3tcqRgU7xnnUxyALSRxrQKoRX6G7gCZDXtZ3icMqpzQ",
  "key14": "5uyg1eHaC7R7RAk2DaoFY28hpASku6zNPzskKa672MyLDcqf17RRGUHQX9HrkYPHxeRbgKp43fbT7wzhub9F5MtZ",
  "key15": "URX5Ma3upMSdoobipiRLWcJYmTLGQUFKoUVez7ZdUoFaVYdW2Ry14UpBeZ55NDB7htH27RjuU5XbMBZoVWzVGCe",
  "key16": "5Tho5zzuRUhiZvL1UDFomSJ4rbpKNfrDEc5Q6BZsmG2ynmzhw52KF7kQwqz8aKHyvBKGsdA3KLbPbNEqXy48UnPN",
  "key17": "29NsVNroEbsx8doQKBnYA61WBig6csYVMiNKYycmQ3TM2DMgWGecpmuRL39Pg79duzc5XM1QrjSUXBsCc1fVrUVt",
  "key18": "4T9mPPxFbGKFA9pDUCZmy2zQeGRHbEPpAEgjoLf4Hj2Yjn2QB63g3A87BSNzWFdn3Tntm117S9Ux64krtFLdbN7R",
  "key19": "2JYpd43Spj52ovSCDtcdjEbJWsa7o4vWXVk6ZicEfXC9sxLy9bJxgMiowsz7PhgQzb6TKRdwpHDx3KzrC2RRM5Wv",
  "key20": "DgWMCouNK7HtqAqWruRGJ4Yag6yf3ihWP9BFTxFsLQE2ZD9anR5ovetA4ooKjhKizskFHKp1zCsZfrpruS44pFG",
  "key21": "oj8NiAPs6nyj1YZ92fXnXwKtC4hnhuUcXnEbLHMtvz9a6Eu2BMLNGPhBzwxnbZVRtddp7PCGijW9xD9g2DG8FYr",
  "key22": "4w1gUoRbUmGqwRUHwFtWnHJprNSjjbUCfsMUPUZUG12iqEoJNFZLne8spTZg8ri6kKujpgYkDiThzJqDQykxp947",
  "key23": "3iy7vT71Pq6n3r6tU5CDMwyees11Sw7fG7WmPgLo85fBpDNpSBiCB7exZMBqr4XSMPDuCT3drszST6C8rWMo8iaY",
  "key24": "EcMKgk9HnVpyLtEHXHy3Lxhj5PBVJbobUkxtMkkGDQxUCuqDM14AFF9EdqcHqDW7yUreRXTR9o9rhn1DfWrF3ZN",
  "key25": "3RQSWQiPE8521segrFgsh66ECcQmqxpxYPUap1VPtj1zvyev55qH9G14iBsR1XqZzY9x5WxM9JFjtLigJUxrzLnR",
  "key26": "4QrhUVwCAr5R3Nnik6twt32dqb7NfY3QoKXaYHcTnmbjqJMA6ux9mt19gykmt1x3g7AcQx12XmZwpG6W77GiDAcC",
  "key27": "2rjkYchMicN8QsTEkGKSpek1Jy6qc4ZCti8rxyrNiWUbKxNUT1SCn2th3wizRgE5VCJNpVa7iv5HhbUk8uWZ6DXC",
  "key28": "2Pu719aVvWyU5AvhXGNfSfQkgyc36Bh2kN4a6ttcxaaD7Wk7i4ysb8TmHcZgjZR7GNZvn1XjPsWPmBTiXCdFdS94",
  "key29": "2EubXku2sKqFxqKfXwgmRopkMoVRXAhuj9n6YKdcfJPUvF32SJ9moxcj54bjNuNoSiyfWpPXSQpd1weHD77myjDi",
  "key30": "mskPtgeyZDtBNH7CLD31DcT7rRyjvQeKQ8FXD8tgaxxbZqVF5SdMnWDh2sXDPwn8PXfXyVf9r9DnuwSip95p7Hu",
  "key31": "uacdbBKp2aYxGsdKB9uaDwXLcuUtUfHp6rQ94YXEwfCmEwKZaJFFHJKxhABi7cd2v6Pp9QoAibpXg5G7aRTLi6U",
  "key32": "24cTXMun4wSF55gX3y5VWLxpwk4SyUuzWJdg9iPVeQmDg47L7TTsYyFxchMDofuiu5acoZm9uXogKn5yUkeWDZPU",
  "key33": "31WGGcjbpKAPZCFZQmLRSesWWurpDoH7pW4A9nXGRZXc3sKV9vad2soJ7G3D2CxizjL9QiartRXSCzauJYFoMEnd",
  "key34": "5RU4RD7rEzKT5qTdRcAAMVE6SNVjuUJ1V2aSaRe2skkfTxwAd1zSi4tFixeqYU1eSNaRvL2syNco9tvUbaQSA19r",
  "key35": "j7EjnvxWyLdTp5iZqXt9ZyULwK86MnnwHaFij7fAK76M2VFKpYxFV5PC9C78uBGkjcuEPaUXmCxoPDQNTabP3ji",
  "key36": "4VhfvLUTLUZjKcBwLSx1MY4dtHyuVo2xR5cbT11RWwzNoHmtHmHs1Gg8MStXYs97iX4NtdW6KbwcABvwVZCYWGuz",
  "key37": "48bBEC1uXWZqM2XjkiyeeeC4T2Q67r7CcFSFhKjVM3ERz5qvSHo51HxNVSmdXAawX32gFpJnPrkfJbZMDGqKG3gk",
  "key38": "4ChXB2TmUHCnxrDmd7YzReDRB7eYqXsEt4dhfcxXB2CwAozDU5EtQqFKqRXP2T198cBPVSdNv4x8cptKV8uiTfeS"
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
