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
    "63QJHqFVcVfqWZAes2Zw1UrGLXgbsoBMz3VpsByTnqU4BdY9ukdEBNQe7MfFcuTuKByt57mLukmFXzNngZQJHqJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M1pxLNeq4KitoGHKHGnrTa5XDT4n5uRZp7iiRpx2YLnJKg3CC5cgbi9feVaL2FgL7Z479t4JvJzCjXWV5257M8z",
  "key1": "3fPNRpeR53Egs2Ez126igRsYqzdpCPDK7pvtBWfouiLeY1KrNtuAmbf2Qhi4u8vYLjJ5whv88Vm1MMD7i3hXnucE",
  "key2": "3HE7S4MHHsd43PwGQ9rwvU7UEhoMqt8QFdk7qzGMdfpHmeNSgyRHWHE7XgQD6RzH554GL16TKXZTLgowM2vgM44d",
  "key3": "2S4TtmprL8ApKie6rJMoZxHz64kH4hfXSw9b6dEwNrTN4SMdgnq4TZPqoYq2kRTz6CH2j9Y4pcHkXuXNfLo6dEKr",
  "key4": "2pUia1gxtGTAiyF3dvsv2KZCTsD6rJVEqE8bqjHSyheE592BBGLbESJG3cBzTWqGfsibWJsvoLfSFQmygzNHTjYN",
  "key5": "Rv2i46r5G7wb8enb49scwbBfBjHNe1KAYEi9E2jbRL2YkybpAq677CGHz3Q5km2ZUsos2JDZdMkSXZHF2xhPCXz",
  "key6": "5TWjNed1jUpd9nX6qM57sZeQ9j3G6mwBSFGDAZcuXmHSTfdKSpsJmYm6nJp6VfoFXYx8oa4BTruV6Mh5Zpife5Rn",
  "key7": "5uUzmXr8FdQQqyZkLsq4SmHCLhmvSF6JUPYXfCPYrxj8J1VDVPTFatMmcHokUHGibbNLCkqn9LUgvTD3jRBettAG",
  "key8": "4kWPRhs8sse6rg2HNEyLn3dtq5KCEvmawWwLctFjrkMyLmZFxsSBDuaRBnexX15nHRBLq9K5JAgBqs1xByzJcnXd",
  "key9": "4B9pN9vDRjBMEbQSmgKmqKqBzMtzkznDEbdyoFTimFe78UFKiDTCwB9yQsP2bT3vCHXUnrvVUsHqg6byzyxeLDeY",
  "key10": "299aMCErB5VdzHTWC2bBEfxkH3VgQZJsnmTM7J1zFEsdpXbN6rJLrXpeFrPWoAr6XYgSs4sHMqYbsDXK7iuZZxuA",
  "key11": "3qGU659sJKaZhAQqz7jKdjtjX4XwkiPzBuQZJPaV8vBZNmgH4GqFyLyatAeAjNvhKKe61cRuhxBhjys6CiKSaRCE",
  "key12": "39cm2ztt6qo1ax9n2S7BR7Hk39Vt9Nt9ooMVwpvLC2SiVPfe5j57r76jiNVrQ3gxca9qbHDYWzeoj4WL8uzBUfvQ",
  "key13": "5uRmctk1FhoVcj3hgpzJqZiMF1yZrb76n51our9KuFEFrhBYmf3N5EoruUqviYXaYyvgn82XTPpJ2mURRpXLEqqe",
  "key14": "R94g4kiRoFHB7bV4yQKitBw54NPZ9UygkMKEQzCGeKyKcWnvqQxZWRGbBeSBEp6XDJs9Xoc5x5uox2f3nNWFV82",
  "key15": "3RoxEbR1P9QwA4S7Hbx6XpkH2otsAMXa1jPmbhEjcWZ4Hw3ZQXQdx8QT17SYhJLxoLadZc262mjbyRXoLci3EjBh",
  "key16": "2WKKbm3HMXNwzb3MPD6g7kLfwBzmuxtcUdAi16VUigvHKn56yLV1oNCi2MJWCa8CdEGJZmVmdoJtybPP7G53B6pG",
  "key17": "3iFkx9oCpm28n1Q67kkcb2YwBhaWT9D5sLFvebg7Ac8233UxpHDgJxxExcSSyYRctSpMx9CD1HhFzX9Dg7FRU3YB",
  "key18": "3SvHJWxpCfymdCxaLejzE8PwscjVZyBoFZFhqezpkLXG5u41mRfDqHKHBZwiezETq2spy7M3oj1UPgucTZKgvW8S",
  "key19": "QP46T2GDdsi9QsJhVRHKGRTf1tkxpeyuAWsapdTVQpFckXABeJboTE6EKRAkstENbkUSZPJzEsLHJQt3J1jRkcs",
  "key20": "36YFuW8Kfv7jrhoA1vm53DD6AZesbieY2ySbg6hKVtPirgBnBJfxwfaMbmMUqCeXLRRgRpEbkQuWJEWowkaVdJue",
  "key21": "2Us3YyG6xADjhHHDRNVcE3HRmFbXCCuJGus82zRy1wUQDSvfg4qmPBgszxgC6wED8FK4NJ9144RRwnD2o9N5kCaV",
  "key22": "4bbemixizFsSivFoyujjsM6vqs57BgJwuFHSYfjM5myFs8VgxCyWSXvenw8paYMrVhgLTXrakC1QgbdFxRtwoh2U",
  "key23": "5awE8zVAhgiaE9YjFBwpeSYmUgd6CtixKfLiqDQv2TobeUm6azcXVMb5ecTXk4MDVEQmbwvYtCFj3GaykDrQfu5g",
  "key24": "4dkTuAJj27w32jkHvQySZaW2dtu1k1B6Ho8ynMoLzgcLoaNCL2888td1eu2twvAv26xus8c9oLTA5Q5gCzcerTd2",
  "key25": "5Eoy6dcJxoS46vqwYGzGFC4CK4wjQwo8sRQJdMFWBNzHaaEsc3rJAQGQmtkRZeWJ88urcNGqw1ukgFxVQUA3QeW",
  "key26": "3nHbnvHijn25kpWuStP63uGv7N6aazMLeNofs9HynTTh8dnz2ebvQBJHNwoVy9DCrswR4cGBYQaBEJP8FmAAcvxa",
  "key27": "5iFVEdn8DMd9ZAoNPNdcq2u1CpUxhFqowMViBqzrkG6aH45EkEH8CJAsSGtzFQL2eipEXQdfYN91N6EbgVHiTkhj",
  "key28": "32KETiMhDBrJyFFKZXqeK9J5YGfu5ofxLheo7YeF38UeroW3fCiqoc5eUyhdZwYbK8u2MbPRDktPemJxr8xLHQMW",
  "key29": "y1ZXyjaMDsY7ammeeuDHWj52FrYdtGUippd8Q1XMARTeAEkCwXYkeZ6hcRue3eMoU3ckxyeAnhxo76Ra5gQfrd9",
  "key30": "fVzzxdwLeHEZfdFUVGp8vtMeNo1L4EBPXuGTqj1SbFESiy6H7QU1pUMCih6bsHjKSyHEb7PthFuptFZMz8XXr91",
  "key31": "54cWYiFcXXsarywfJnt64bpBfwJnD4BcHiCvwR7PideiYgnEN1anMknnTp7PqDH8WgBADtfXCnXe4geksdAPKQZ3",
  "key32": "287hVTUjGzTvtYmeJzEZWHVrsE3ycZVF6ib14HL96vZ8hC5SDYhXBasNtqiFciMRLum3eZDhcje792ioNi3Ub4VU",
  "key33": "sjDecy3z3QN9Q2YBViVQJBgjiNuVQpgY4CdzLS65jCqrSwVUBovA3qYm5gKkVdozxLd6LbfJMY2oSNcfPKxzyNw",
  "key34": "kjZRmNan1TeVqJ8cBDuCg6Ut2k5VxAxaxk4fHh1ifWQokJkN9w7FRAdHkYFYM28QvVSiFJKh2PUUgXXdREYGqtv",
  "key35": "2E1wqfhiGSNCR2Q2xnqgkB8JftpNd25An6jdY82TjofdDipXaC3fPsPxGCnoLyCuDcw2B4HHp9Hr515CgCTV6YNz",
  "key36": "4bNdgwYzCK2GHiy5LcL7JeQF1i2chvKd7Bz71M67SpYDpD3u9pPKCqiy28vU1Bi2ZNxURqF4RSnUbisdt2WV1Gf4",
  "key37": "5h3K5xuFSHmyH1DHeiHEDS8NMaSFpzMVyvK3k2LvjkFdDKkPA2rSD6vWJfzL9vvkr3SQyDY9vwX3bkFhjmPcw9cz",
  "key38": "2gM2STvkU8KnTrfQLEs91XTWbRh2HnrcXLcH13MdNtM9KTKL7FB5Q635tMjRcV9t7AciZvupNdcEANjovH3o4VWn",
  "key39": "58tPHgRbHkf4kyEhJ2wXcjpAXumyMCQuzV5KbrJn7hhrRzLYTYzHo6xBtWr9AYjkRHFoTggZ4HUraFAPQxxyRjqG",
  "key40": "64kMUzMx1i5HmDvWd4pi6zhotLv4f7mXUEL6FKn4cy1ydEjbLbzSAyVMfq1XPhFtaxWEck41e3h2CRpcn46oAxwA",
  "key41": "5fdRAgddbuMiZLS9AKYoUM3mDfrwg3UTzs7iKkgtNZitbKpYLPKh1m5xysf468gKAqHTUrm1tdQRBZjCyKa7douy",
  "key42": "2eSWg4yT54DU7d5P5auFo8AT4wY3T6SSRqQfetXBvVPK2Wc7xEaFgte6q5tzptpKEgbbAR1urP6RqhWVSKR3Hgmj",
  "key43": "33FCob8mgqpgePST9qr8a18TW38BxRSrscasgHPTvwi9jz8x3tWqjirHSwxt9HtfMhjBhzJAp33uGzVtQVnafhBA",
  "key44": "2YMiocuhs648Vav8od14tVCiv53qryFP5wstRH8N9ed2BDyJmvpLZMvCYqkTFXNLuz9GycbA128qyW5DWkjD3jwH",
  "key45": "65xD3vPGGmVXXbo1T7qda4StAhbDBdFJbsu2KDWnYL4stNkikn1Y1LywhC7Q1PiSJfLVBS5FtKKooysufBDXebif"
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
