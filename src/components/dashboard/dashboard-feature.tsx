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
    "2vBCh2vMuyP1Lu2MicGjBQfKsUSy5Z6pprzcqyrxbfMqr82k5ikgGTUNMWD8iBzsbG35zgohweCT2KEeJfFT96xe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zJQtnuC2aqvcarwMmtf42MZGsz2qhkT52vbRjvahL4w5SStgvad9msPxtCqTcsXaJmXYx562E1PirpYPrphYcjS",
  "key1": "21XYNKAWrDZyAXBTdnoLt1ZbF8YTjdmQ3SmKi5Cs72HT4KFKSuBtbn4zUnZnF6HBLeLrnedHtvpBeC6BKALwRKFx",
  "key2": "4bw7WHNgx5hZgYqxuVXmUi86zdjWtknc4975LiBrNzWELJbrpGLP3fqZkedhiwZqoFNWsLhYyHfrZsDQ1E9iE3N8",
  "key3": "5Du5hBRaNHyf73ptrGinykERDLcZqs8LxcmicCzaY23EuxfF1dsgj1953Eo45xU8yEEsC94NELibGjEDbk4Dq7By",
  "key4": "4KgUgyC7SNjJaKo6rS2yVrgJZpCusZGX15dKbKBHMhqvEhoYUjm2UYyTLpkbkhbt5XuUQdjvamqWuDFE6hV6vXBE",
  "key5": "2ikwdoa76Ucnh5RuZ4BYRupu1MPJ2TGdxww6g3C85Rw5WU6sHGbAdsd3bsugJaKW3jhNCKZ24ckJ8yZiDcp86YUe",
  "key6": "52HR2zzHLvVvdiKrguuLAAJ18wKrwx2zPQZx7mSoLkFdG2diWFwp8SPRQp8mRw36W6FZrLs3ah6g8wQWGM9hXYcA",
  "key7": "2rHe75SdRNTfYGRHAkmpQfeD4cnTMX57DQ44i2V9L611JPCDNiyk4HeqgZbBz1B6kohZMHSAvNgjgQY6mB1P9QY1",
  "key8": "4XQb2cBdVTQDeJU1xx7YFXgCVNXCmGLen9YZtRqzDWFE8wMZ2v6uCaACTgxJ6NWUtX2EdWKfFdrBkomo8kTRcefo",
  "key9": "5stQ2B78pxn1xME5gy1BtXr4iWEatLuaDK2GcECqvCaVB5NKaX6ifpddt3Z12tg8GEwNVWhviABQgm5saz6M1bMn",
  "key10": "JXCXQRopWFuTRy1YQLuyBBeymEZ5z5CHDHaZwHFwpbtCTsqcfKseoqzWSPafwsRGZEPbzD1gkViT7WvFR2DmXMd",
  "key11": "252AjoCT9AqGkKeWkqPYXiCjKyXSfn4F2bmSdexHDft1tUbEbunpE2rr9ZXVzX6nLBHYxJgALtb66dAdrFM7d345",
  "key12": "5isTarhM7qyiGqs6vRKkN3xSD1TmCSgrLNsGREzUgBK38CoQbMCnjuFsXQbshLw34UHQNYEbo5w1WWVrVTp6QGJi",
  "key13": "3mhGCYcPV2CW3X12574m9V9qfzJj66pALvz8cxCQFxsWbxYniaDhqmtjE25bP2Z25B16rYJZdbbtJRAmwTBT4Efj",
  "key14": "3aTepixhhFEokWLEPiZ4NYLQPZLb6wAgfMLaJhem9uFEAFyK6QhoccgFRRCPqfqLjqc6DGrhpwwTpTcW2oNH4Gvz",
  "key15": "3PNBBGh59WYBJn1bZERXvnjcSEFxPRbEMK1hFqAssbTZrHjLdhGfHdM2UYni3gJPsFWdUZPqFShtUsCS5zCencLx",
  "key16": "5AAaQRq1DyyMTLjDuKboqniyZhEp5NM7wSfzFJUvJmmqFvnDjDVRGLs225QYujFkeTfuimKSZHMMkEz97g1Ftu7Q",
  "key17": "2qJ47q9i58pDCJAQBjR42Ms9FroJ54MLWadVJNrJhqDwZw4kPt7xSVvhguPHyQXCRvQk3ZnJvg1r3yaA43nHNRzr",
  "key18": "3qBoaXxf9Kxh2ouQ3kH82pTix6KJ8rf8pRLwLHArZfTNHZmYGpe7hTgUtGsvoGbf4wMmG3SsbjDEnutnD7XUUhp2",
  "key19": "28voPLEYGU8Lp7pSA7gYnP8Tg5bsaEyMhnGpSGGxeC3pbUN1PmJHPofyKgrA6vC73znEdye3uuZqNqVPqWxAG1s3",
  "key20": "212FaMPhm1S71FGnw1JiurU1ACqcuHEvHJQgnM3BeiT5jhbKwDviSHYuVbbtC95htFbdw8Tm3KrdHD6poWmNY7pG",
  "key21": "iPMMT17tsTuwx4vDH61ySMJkDQpsN15xL2FAvAriPpGtqmJyPoBhkDt6rvf9scvR325mbygYYzKUGofkdpgautq",
  "key22": "3ZAsSuvSAiaWZ1wTPvZRMEVTpjHU3wqTfCuUAeYa6bXmST1xWB59pxTkeYQppNFWrkBP27vLwdd9pDRUNDandZS3",
  "key23": "kiWkWLJ1g4kr4cXkajmid5hoUTRRTCRKYLqxzGAFjcikiSKKtDGCuVKNLztNiHhkVw2KqPR1cZACP2MuHMUgYLC",
  "key24": "xAUiNSngadHitk5bRLrDN3mQf61Fus38v5DaZVkfrPn5VaCAoHZZNJNvG23VYdXr3Xzuhqer73zmDkxrxTNzBbz",
  "key25": "9dzNhG3Zs5dA175EPQt8B3jH1e1U4ew6Dutmy9uUejgYZ1GDGKh8ZPS6yVVsCtLr8oGhJzyA7sidb42r2jWyUJA",
  "key26": "2FTTZwsAqFMFEYY5zkD6QwgDujt2ewrtNwrx6t2XzesNX25TTAyxAgCDL3sJEqkdoH4pupmC6KubehdQM6JqhAHt",
  "key27": "5uyvAckS4Kg13NTGXZ7kn4YQw7dXg9MPgpukGcGGFnEQaCb3Bgtsfo3PtaZDTQRxi29VBdbrkC5JwAxXXrYCRrV5",
  "key28": "5xxF7pUom34BmuULQrigF3PZiQ59AF2VWEMvbsXUxPn7i6aaSd7Xhuq34qkXu1LtU5hME3ufKuimVozAZkfjAZ8h",
  "key29": "5qyVoBiNv9kdDJuA4aNrvHrrpKNk271sV61Bkj8VVG5EaBj4PKEY9LKmuQZXfr5pRbnwGu2p5cEbC9aMFpyZnwRa",
  "key30": "95cEovmGKfRBFLQskxUmw2Xa3sxHZUVwRoFAmVvxryYpoyjKPoDnVGUS29uw1Bp2Y8PcsgMRcfaqzn68X1GQHVF",
  "key31": "4sFhhZBFybXw9WqcacAm6e7drrzpNDC9TePvmUjK7jaZv93syjyqUkpCj1ezzDrLVLGoy9RXMHtREbtm91oApH3C",
  "key32": "5bzxF743xokRofuEREdEPZDX3euooTQ3vreTk13vne4gyRU6C1iiBQYi7ekN3gRehVojV7H2BirGPJ9Xdtju3EQV",
  "key33": "4m7yhiy3aV5SqFpRTRu2x9PbWQHeMiqS4c4ua6nRLxgbcwv63koaepXGpNN9jaXebcDhY1xuD9ajS3SsZ7h6UzBA",
  "key34": "5aJvwnHJBADe6HtERHcm2FATvM4S7jn3Aqvbkb2hbi2DacC8TADsCJnRRH42ri9zzDZr5TAW6kGWUcRQTCNCyxoW",
  "key35": "2vN14uJamyqCKjT941czT6U6gun3kv3RX6DYcENkRB7Z7jrgCufjmwuihMTqYGPZbszwduf6auKnppvVJQDuciSJ",
  "key36": "3ePUjYnApmWt7cU6pUQynS7ra5HBafrNZdMd6z67tsVnA625wbPb7Yfpz1c99w9fw6Tcv4ni97oetNauNrW4xrv9",
  "key37": "26LSrLysy4fgE2v21aPDLQBNDuvZkU4P4Gz6GxXLLcr5uwXDXESybRBAZLX52NUmmE77N1pDBinRwE6t9TLGYoWb",
  "key38": "4xJjn5TjRLoqhv2RAuGWtpBm5zCNQN8nbH2CdePzD6jKBAhPwdDE3ckvZKQYJvJVF7cidohmFHN3bUVtqUonC5S4",
  "key39": "29B4W3i3oKDzcWXb3GnbB5CkP3aGjXpc1wax1yvbwyf1t4eNhHPKzqEMkNToteVFeq1gc71iGZjJBh2pWUi1Mb8Z",
  "key40": "5GbX531K1imNjUSKP3W3qPpSG1EcuFgNQ1nhHE94jUfsEctZ1gqHdqwar6DknBBMFGrUVFJiBoB5BB899vvhBqDJ"
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
