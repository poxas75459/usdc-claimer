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
    "gtizKa1B6BMkeJJzRPAgpN9hbTy7bHVrPM89Wq7zF6HCvK4eHetA1HCHDFAH6mSjpgtPt9yd4LAV446cS8dwQSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8GJtEMPHq96XoFQ25QFgLwKqXHneTb2kjrphyBdeCuBgPrMFeaLon6RnEQ7NxQ2vLPmLhgSwYL2o1ghoSQ9sHt1",
  "key1": "5c7YQ9GuvUdaSKAKhFeazJcBKwCADMsw5nJ53Hso3Y92aSv2dryMCebvgbHhKFoyAhZ3ALgU58bRoXfag4PauZ9y",
  "key2": "5NFn7uz1VAi1vDVFJPAGwTMrYtpZTeRiQkjWbYsNbMBs5E1fdrBfz6cZDB4xmExcH7pi1fAfjZreTDVGveQvf6o",
  "key3": "3L9NM8UyUyXQpg5cxhmpAzHiLq3oXWQDrbxkAkHxbjNjRixyFXXcVreDQL6Guqhi1XDmrLC3ms2FuRfpLVnody8G",
  "key4": "CmsonwKpd3zZ6412Q3BaPb3jhgCsiZVHJopWpMkgBnZe6ViK1ma76F2QaMxwpUbTXUnGn1xyNRyPwVcHePSAG15",
  "key5": "23Da4yLJRxejx7NQgGunG9BBoAPyHdqnT22ExLzrK4RXxMDpLyrgzemTHhtiNKX8MBadeyGHzN5k8VXEHwwmjf5R",
  "key6": "5KnWhBpTpGnvxbPVEVbkWJS6BGtj9Kz4amkNuMTGwzHBtfFvjbBWtG8F8dZiUm8aoSP3rrCqHwravJ5QoBWjsffS",
  "key7": "2ZiHqQwy6tfome26KXTCPuXxTYmAp63axLrHfZZhSTH4jUd3yvt1Bozn3sykDqFnVRtbPxuNZH4GGQvFNSxaPMJC",
  "key8": "3CmJYZwf4JXWi9eDEFuTiXnUy7XJ6uQanx8QYBcyjUdrFHE9Y6kXbSqRqZz9YnoApfqWRb5Rhv6AGfycbhk6ddVm",
  "key9": "3Kqgeh3Pi4tdjWwTHde6kVJ4oGYTvDV89KhPHVAGA6YvCuKiwi17DDEWrUjjFhoJbPKCLjsUUuVgPJiiFfZ3jSCD",
  "key10": "36Bzaad6opGM5QtHMfWRHAi5wQNVspRsNxjuphmPpkdy7R9ReCLcLdxvm8nbwDR3SAVxWCWHXDmYKsxMvE3xAobX",
  "key11": "5g1sEkD372S3SKZwNyFMSKTxbyKkjTBCDtgXfjE24eEvh8z9sUK1VdGccyHYMmNpW9f6tdBZeVf3yunjsEXYZ4C9",
  "key12": "sfZzxJskWDQgvH3FMsKTqnUeFSiysvRRMkauzQPXMBtPsVNZnbFTPJ9kkeLE54RqrEQVHSyaYgHC1WkHKHeDKb9",
  "key13": "2jGDXNRVPnZmwiqbtNNfK5TJdpZC5mMJmzVXyAwyx77Nv3dZ9tD72eRZRFLRxo6HjuwWHSsZaqHJR7sjWrHwZnBr",
  "key14": "FwHtVAJmYTpbTKSMHB1uckoXDZbaR6GKSxebEPq4qYrDim622q7pw51TEVAMEw4KP8i4XeJ1jLYvnpLGgFFXSGh",
  "key15": "3CjCqNbvA85D94XEBoz6BG9tKp2KyFRTumjoKEQV67HagdrfNXFYQouZ6faH4k66emaS1Ut9wWR3BVQPJFu9kNLh",
  "key16": "2tq8gEfCCLVBu4Xcsd7fYrEX3gYUe2Bhc75sKpHstvTacqsjNDfEGDwtZSsaara1kiReRDwkbVnfbm4tP25ckes8",
  "key17": "252HzSnDCiXtPBYTcgxr9re7URupTjCH1hDDHoFr1gc9Su7sBeahmqqvLri932mYQuPLykRx56Nto7GxVd1QVAhk",
  "key18": "4o5zx4712LCPRyXhUYJ1z8xNW24ZeDKm4o4Mu62NgwcU5dVBtvcAWCdSK61gHeB1YE4ofnmK49zKnHDHm7MVojFe",
  "key19": "48gaJtN7X5oA1NLwHriGQXfB5umwHFantNyWLpwPu7SxeLRjsA7yeCtdADWywG41ajHnsVpMbkM7cFTQGqyyHQn5",
  "key20": "4YvjVzyhvwgAcsbkMWtKJj1j6kfN7VWeajLQAjxW8QVt2YLLuJkFkcxFNHSPGBWFajxfi2ntwwJS3LZMAQz8SfNA",
  "key21": "2YFuCynMT3bPuFdRUssGVAGJSnSZf9GNBWQVBER6WEN7sg5onXMsYkACNj1jPL7HEMgP4fV6jE1rNnJqsDkNGgrz",
  "key22": "4x7VrZ9nFWYi5eXJjiQmhZ6ypjY6Qkjzm8XhEiyV98d64dMkLVc2pZXwdjeibTU7CLo74a7UMTykv9DHxDxn81nA",
  "key23": "36gzamWtXwJJAwmD2Xvdfxn4nDm5zzRrg6GoTg8oZua4URmTpdaqNXALkr2bfL7Kw8bMzkjSJwY9Ch37GPBt2QhJ",
  "key24": "3biAsMzyenQrd1g49KnSv1esBmtRcK5Jqewh4ha114G6GmcXmq19zu4aKDGbM5WzDctViudFZAmaQ8JPcLiMg8oe",
  "key25": "sBEzw2x8fnTL1BJnGtu8U5yhM5wHR8pLX8wfPXCCnaLPewyJiX4dTGVU83RTNEEouJ7pMCYkXeBKWoHzgBCtTnJ",
  "key26": "JCLcNEMfYuqoSom84jfxEat4nEJemypgtBUfJPLhecmiUv2fbo1G7nyzsPsMVnCdyJtYfrUYH3DvQWxwkKahUYa",
  "key27": "6wNYj2Tj1WTzDDhAPi4VxwwSp3D7BKFHH32QbVxhd9qjbbtqtCj3eQDFw4pXgqZpqiyFRzPhMc5GqGVfDUncmGZ",
  "key28": "4AXMNLeYz5yb9ZbfRtdfZgmmQvxzPCrQsdP6A5shGTBvLaHFyUpow3k2BJseMr2cSHvMEkXg3qAp82MdaE6ETESa",
  "key29": "51LSm1CGQrirXdNp8dy1CgYx5QXcGjLzDzyRfNCtH6SH1Z3hJV467vxXj3BZ147LuWoAX6UzxgUYrkitNCvcApJT",
  "key30": "HX4wgQtGk9cYndx3o5fYgSGn3StQUE96NVj3a1annyEtx8CD4NWDy2DQsBWyCXoNbwCN2KRBB3RP6u4u5PqLMFg",
  "key31": "4dpH3WtNq7petuiG2WtWk1NJPYexb9cAm3Jyvrz6mwmXbEGaEim5DMmh14pRNQFLqC6q47qp4FqyMC9EgscHKp8Q",
  "key32": "WNNYYuDgoq595JzVKBoYRbx15ZaxKQfCLjYVRvqM5aCTQ3aoNZ4dCA4LMNVm5qSKqCCNVSv3zrcAC31c8Qrpyc9",
  "key33": "3WKPsM5bzkgfWkxcJKmcePsHMef7A1XMCeamieekZpKJTAN9pDvYAwEGnLvC2q8w6Lg6a2bYri3AwDZFuZhmpuUD",
  "key34": "5ZrdfMozR4KNC5vrHUxadq4NyWo1isdViT6YMKZxtLy1CPWqgDXBAJAAbKv9fVGt9YfRhemFZ5yrBxZXkL9aYbmY",
  "key35": "4oGXKCK8JkaHZeVGAgqeFPNdcg8hKWo8sat8brxvcYjW5q3Aqk7wnV2nbprRqB6DsJ2DrP53mqV482Va5S2j9m4h",
  "key36": "adb8N4qJj1e4VAcsjYw9eMN3FS2hohy689RwAjHqHV7rQbduHfjFkQSCNZscoP7EBYeJontU8XiM9cBrM5PqUqi",
  "key37": "61EFtxxhmCkr11qmm9sCwJHF11pxdTwjbSX8EAS9E6MFWQTE21Yo78uD4vDBrotkSG23jxgn3vYpAhRV7P5xgPai",
  "key38": "JxNbHQo6A9xN5FrAFJxy3gZY6JTmnuPLcZtRNXHiFv1wdQhug8cHrPb4pjYwzWhkQEhFb5xURSbdaXubDCgwT4A",
  "key39": "3FK196TK1ecEumw2dq6tGhDQqL4PopdzZcrEbAvGm4Tr6mmgK6sVWVcJe6Bdtx1Zmz8CjyjmRuCEUzHexo9K79ty",
  "key40": "3VthsfBppkBiatCrA6VZtgDfceUxq8ZzioG4CEgzyh1z9AsmBxYTgtXRcwSJrYQo9WmrpcEs6gJm3x9snV5WBoyf",
  "key41": "4akUpNXC9cSqWjsLHhrZeR9azL2mXJeDKtKkGANLHJoLD4MZPJH6a7RNnCsAhfweoLX7UkLiJLqjFY9fswKwHqpe",
  "key42": "2WThZwPw3UN5CVs1Vi3TCANSJ8Q4fnkBQRy7UJi7NxyqSUH8H8QmDmGiAxi7cuaqqR2zLUbjRgBouNHYiSjjExZp",
  "key43": "5veUkxxKqtw27isFiKgSW6x79DKx9svBB5QE24hpCso6oHpRoWz2zAJdSrm4XmH7q7hXBAkmbxS1M7xTJNWM8KU7",
  "key44": "4YY4yjy6pbqA2nw5pcHp1DxPybkghpfAjRN674iicHmAa2T2TLm9LQwc74Ut697ugHTFqJFCE9JCrpeUhFdSnq4Z",
  "key45": "5AiFWKZmxJEdx5JVQ7o9mfsvaAW46BSrJgB5eSumcCMmWmdBMNHEv2Zc7ZXGWt5THeKYUFtiwMBFZ1xfbUadXWhZ",
  "key46": "3L6GHnCDpo6rKowYm25bDHvYbUWGc9kNGhnFjAiKVD43bkZ72gpUvme8uPRnA9PtYpgJgitJiPB1Y912RiApNPKQ",
  "key47": "2jbMkSh8cNPRF8EhvEp3Uw8Ad5n9Y7xrNz4w7pqhg7444nbjtbeCwYmDNVf4oV7vCWvWVKa4xD8fwwCPdxjUfTrD",
  "key48": "3fwMLEPzrRGiakCvy6xTLFbhbtdnHSTXo1eEAcSrHsSZ5LhKXzM3GzQvB7Cw186t7hABGDGQkmHrKRpyk5uT5WUz",
  "key49": "VhKEXt192NnrVcSnmXFS3xa2YpQY5wCSwhx1kKPeKHMLtzGt8sDvXzkkHiryFfdCNuZcyYuxxzTTHjm4VjDGsKx"
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
