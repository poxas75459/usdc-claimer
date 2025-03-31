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
    "2TMTgtkK9JFdkaKx57821tZjm8tNLfPJNsAejFtPkcDRMoPpPk6C1L3oCDSmL2yeDaJbvJ5NjKNcVcb4Km7A6Dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41cUfRVwdhE4YLWfG7QuKTa9Eo8aiBE5f8Zzg6YodiZQVtdDdvKzczTxDDrFMrUmuG7GCuG5CMwaUo86j5vWGtxW",
  "key1": "3C27ZJ7o3U2LhtJzeTSUf3hwBHXQAcErHYbYzi1SgPwHUwrSBwUMHQEC5Lche2ipD8ugxEMvZuFruXASgZ18CYKJ",
  "key2": "4ZJGqJUbCTPmFiBSkyjamJZFgrAwFiBpyWHX5XtZwSAVZ8aUth9VeRG26CaC87dGZyLzSooybXiWVbaFoaeSBtDu",
  "key3": "JcvqtU8a3WmG95cdgrSSDJUNZdjhstvTMEMuoBntLDvTsRdZjrk725DAETyJegXXr5dVTobkHjQc2krv2xEY4rQ",
  "key4": "3iwqGqoQdKDWtUC2HUpdamocW4goxAPbu7rQwNf6caTVC1MJjJAaPSp4BtYApV5JBTVdiRcnNRPh87ND2i7xSbmR",
  "key5": "46STm17gTvRpKF8Gx7uq86MsU9TQmnkgq7QxuJqJDNY8KuoWAT7PvQTaMzdv7UbokkkJ2j2F1GpQTv5fQV7H8LSh",
  "key6": "4Tsawr6hCe5fekHBL3EGPetW6tTNW9gc6dQFZPXNGBHxKqpGHZSEZYDaC1Xzfyo6vTWg2GZKBwzWKL4LkdJLQaUu",
  "key7": "2XYf2qtBLzT8DjuWXANx9Z7RYB5P695VEcc2oFjurdG3d2P2TDV3tNphrUx5H4rkZemSBfERx69Ddu3BgLRWYthT",
  "key8": "64dMvHSYmXuKfhkAXXbommB47FNq6VHSfBLVbQNDKoSoJPoxpf6ihvEVJQgLuSgz2SDiaBgP2jCoV1WyRDLzrSZW",
  "key9": "5tg8feVsCQyM2HkpX5w5WFUbht7aNTAXKJA9KKetfdBHCFoRcSYLUgyrpfwFaDSaXduTjqUEuWnLGmXFikMjqAcX",
  "key10": "gHxToYdGt61da8p3KmNkUg75YxufXTk8j4ohTAPLqS8GiGQ8McZdukXf8kdj45tEiMfbrQbBzMcKq9a15SBK81J",
  "key11": "2qqv2mV7dWf6WJRmxXn3t1NiBVicNJoF9VKFFzFZo8uH88nkPEL2dChKEwd3gYm3xbfeL12YsHeyWuTazJKnMjAr",
  "key12": "vCuKwy9L7kEFxHDvWSuvdzdMdNimvpYmUSbY1eu9PchfJL1A6W72rLrFZuY9558uR4vH1Vjb2rjTPoKGxWeisgL",
  "key13": "2XrdZXB5NKcE4XFB7QtBWGmD8DcxuKEc2c34Tcj5Pjbsnuu6LbiqvfvRNNxc4jjaKhztUgC7M4gKj85gffodQ9mu",
  "key14": "26Vd7ngHqLPPHBwDnSWp287xHxByMNNBwp8oZ5r3GMsbpsyKbS9iCJntPi367PjdgL1UvFNEGz5S9V2DgZnDR5bb",
  "key15": "4397Tp4PFjQfizSyFwMphpB6EAa4kyhu5rrwjbiUHpMyokrXAdKnLe6pjBh5xVd23DL7bn9pHJ6QbwUfemiKXDAD",
  "key16": "mqnq2o4mH5xXtwXU6iefSpU3iufiYmjcYDjJw2HexwTxwdKjXxg7ymm2jTWr6fqeg8QueNgRa9eRJXStTRUqAEn",
  "key17": "5fMsJqJ84LPa5Gk1nezVgvbnjXGtCkKyc7XEA2TDFP3wWfkHmgTtcqunAL4yMYgJ6kVoZ2AmUiG1BKKNrZrpdMWd",
  "key18": "41whzUVPHYPLVkxoYAURfrE3Bik821X4k9mWQk6jhgP9CJBgzPKmFMCpx4w3wk61E3jm1kU1bR4ZEu2isEchnEQq",
  "key19": "4MP58FgwCToyzXXLNwEBFdWMhcUyH8uk55g6Jr1K7kDvVoLSKjxyw2kwbAXYAzZnrdKno1DN5GGUULBqRDkC1kf6",
  "key20": "2qdtFGKYYVSGNhfMWN46Nzi5D9TK2eXip7gPaBBUonLnpStqbzaBVwNp19Tw6up21vDTLDb8Z3dbnXEpn53yvsHc",
  "key21": "2nA9WDCRSADPU7NBCdnGbCpEnnhHui9WjhyHFKz1s1V6MDBXkAQNmjLfFCtgqbToSRhNzhPJ2kCEgCBBBqENiW9L",
  "key22": "3yUngyDExeY7n6zaxbXLx98vesYXubBdMSmoDRp4PwXqdEQctJtd6dFB35zyd6a4M1wkK3YYYFH6UHA8JfqoGc7b",
  "key23": "64nmjJYKqfCbHpLDJtd2tHPkY52ayNj7enCM2qxiT1hxiUp2wqNedXCz4TgUnj1GRfzfRVsFkQJADMScdXyExvsL",
  "key24": "43DSyfyG7g9nsmXvqgUVkehjMHAhWBem5316UKA1FoZTSuw1kEyPtz6r7VaftTC6zepHkzCUjuGLzS7JnfCG7e2p",
  "key25": "31chWVCbwpVKJ3gT1eycYrRaeGriMUQtiVWpbAXgi7eq5pnZpsa9jAQVGTx8EiAcLD4PnX9bf2tHW312UZw4oJXQ",
  "key26": "2DqCzEpfcvhGJ3pFSHRPZ8VqbtdoBASGGUK6KtmqtXZYiTJMvV1S9sLWeoqAgjFADuFvnA8uRD2NjXw95gRKUFZL",
  "key27": "2jYdFDwNTgqkCkqLeDxyX4zcy9GqvqLz9L2BgrF8gHRWyCZLv1uzKR6kYwYtnYUuzzMzcsSqpYZdxH7yFa98pHob",
  "key28": "5VV4BTNFYVYPqsvrzZnKhjbvoZCk45WvdEsmBS1qzKUK1K5G8Vujw3wXqA4KpH7vTCM2AgzibVMz9cRjc8ZpRqq1",
  "key29": "31aN8JTwxXivsJUzn2hiGhvnPu5bsi8EToCCDr7dby44mKC9N6J5io2zJsbuCWHnFu3tfy8YVXMXC3KBK5ezpR1o",
  "key30": "gyYvtnz49PWry1XuM4qxwuLrdWZwR6fKDjL437EbQP9atZumFVSNJ6dh4nwmviuFFc6rW4YGyxyQxyRGBT68BKT",
  "key31": "3zgSpujT2jsyXGQsMoCjuv9fCjcj3dKgS5kCqikkYBvGVqVqkCe6Hj6Dnz4YBK1VC6CihFugyJ8HC8UzNAvCrjxf",
  "key32": "3sNsagpRoAfwNUMKagpFXh1Mui1N5tV3dmdzuD8WdcXT4bBfrLAQDRtD1WLMDYhW38Hb9Hv5YcqdnXvZGbdcFvtU",
  "key33": "25sMDpFzvzjBShk13WADP9ywmpzWWQW4DvmR52WPKn1RqTqVs7P9cTwecgw4aVEzA1nY1uDMbtYBqezjHeBuzNqN",
  "key34": "5Jqq4LhHPZc8DQbRt61wimdoocDHVrnP4vT7dkoLAcG9cT9BmB4cg2zTYxi9qQ9Sf5Lc2p1fxFDcsy49QXQAHMc",
  "key35": "5Ehw7r2tZTQerDSkGtJMDNgxTHsyt8ZThaxuhxG4bCRW6iDKtabDGhCbcg5Dr31vt7ygkSVFF4Pi2iQFwZF3X2bc",
  "key36": "4WoTeVrNjv2X1Qd7NYwRoZQdom7RtQaqNoi3B4Q5p2xgx2sXMPrLwYvySXB9WGEKeix1t5pTqYjW1mgazFTkzQ2j",
  "key37": "xxFJ6KeRbS2jm9WfHHtUTaDQqWcqvfoFkvffL84QvmgoU2KMbJFtx9Bd5SN6zyFmmdnTH4KxnhChhabJ8azYTB2",
  "key38": "5WYAr5R9wjm7wTPkxH4cQydWKrJ7LtRRQirqoT47KXxuu9g9scPWaN4n9t7qcEiXkbu4QGDodMTyNJ41SP3QXYa8",
  "key39": "eSHsNXdpKMtUY673ovFALMxKQBvso6sgfSPVPJqy7xbfE47AvvEe69wKwEkGt6sNgcvEuQLdsuHAadsf5YKpDJd",
  "key40": "4nuzHsWSzqw621a9tp2cAWCWJpUXYSECuqTQxtESJbLaniM2qiCNzjWVcTS2AjRN87iT7vxhqurmH9TxfioZKbua",
  "key41": "4Vc6SKkWWbspZ7Nd9jtfs5Kh6qgbd4DxTMvEwhNQqn9oFYYckGvFaUf2KJMk5S1DjJwFCRNMuKwkQaqicj5PFFek",
  "key42": "2oLRwfcZeFis8qB949aU8Eczyz9G4HBPkLAVAdnatPktNhRAFV68T7UgmSuCW3RnnTum8ahFehcLr8AtsNcTJgLs",
  "key43": "Jca7fgMpi6wF5AJoLhAQ6yzZtfHgNcEgnMt68qVT52ZtjqhP5NUqEmymtAAVWE4Lm57kUT3hoqjvTGWLC6MtFAR",
  "key44": "HHmF8caerAzUXTfnA2P1CsncMxeUnPcZ9EBGV3xUQPo2muJ1g18J4eEj424odFt997JFj3B3ZgNaQEitrCafUgy",
  "key45": "4H6Yzg1fPun5ZcAxqE4c7u9LHpM287bD8VQp2eLY1atFVt85yaZvVin9ry3M4QSUWF6zEo9TCcPWyrcSpjC2TScW",
  "key46": "2wQyAEKoyNEbCdteqE6Fecek26mDJZ9ac2Bw5GtrKiELAJsH5TnQmSyU3pYxptXhSH3xyzf2hLupfTjABsVtya8V"
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
