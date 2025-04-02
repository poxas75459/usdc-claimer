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
    "3oWSp626MkaWBbV6H2Srk69y4VqQBZYAzrCVAcexv1223usWGvMFWKf7wTAkvBPi1aejgSwtupJcvSZypVNozijf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXXUCUGUM2K7Vc3i14zyBzTQegQPm92fP2fydY2kwki9k1SqgyNyubFF1Sz84FHLVSKf3zTkiatmXvw8rGw1CqJ",
  "key1": "37N3ccbU9x1KAQ6tgyDPXVcZczLUBeuuWQtE9h5NgWHd8f5zSTB215Bn4vyZsfBhbi4CuFmgJbRFRMWjQ5SYRAm5",
  "key2": "5KJHNC14Fbz3P1j1WRwYjEbMJbWKRWYM41u299pDe2Bm5Zg6m5Uv6j18qJ9UctXU44do22mU8AQY3LydC2eTKXC6",
  "key3": "5dySNAMTZhxNx2iHV1FEYnuJZNzmticGWFfRCo6D4YcrjimZP6TQfFy2YRDqkgR2dVc7cQ9ib5KEZGAoj2fcGp1c",
  "key4": "3uJi9Ubr8yVoh5RGd6mcLVny1ZYFPve9fzxBLYjaqomCbW7m7F4ntfzY6X1qmK2H4tMsmnCwhvZbMCPKD9xdDXeV",
  "key5": "4YCgSTXuuJDPrFj3ZKjYwpvaQ9ok9gNpnYZS3Pe39KAFp6XHs8dQ4ksuiUWX14557GGuyXHEc7CJdfytotmv5uLM",
  "key6": "4dt49jEZgRtdu9a9hxnghaS1pyk2UsWhb17awjBUcxHZ7iKoXxiNMrT5oTDnQ26pXDyBZ9zZcwd3qhPnjESFCEdP",
  "key7": "4bzHrM2kP9mt6AaA9FmYXGaXsUXnDeH2qEEKU4UsMVeeQXJfRnqg5up3j51UuSR7totvzoXzS6Cfp1LJqygMFES8",
  "key8": "3iTp392Dyv7538ZQXhcXE3x9RvCdpYdJomqTwcBztH1iZ61zjtRrSsvU4qV3GUT1BEiwPHjmzN1VUt5VyZgCsWBD",
  "key9": "2Y1ShufE9P1C5NtPsxF41gbuNj29eQd2ficyi36C4RyRaJLhJrtoRFkFM2M7UMiaohRB797rivcVaT4gW2MGPJTv",
  "key10": "4DMSrvwhi2QoD8udorhwqiaee1xStjvmcX5EbdvKT6UvEAqL55D7PmKjBKWD6bjrrKzM3y2U7pTnbXHnTnt6MjtS",
  "key11": "ix12xJ88rhGfy2NmhYPX4TMvJN7sdEwCXHsp47b9HVGhsGu5V24R7gUto6T55xFFr5zD8DAM4sw4Z98S38ogXcW",
  "key12": "L9115ss28ZHfCzGZ4SoRvpra68nC5WHzjuW4vumkjzxax26aLMnYfGQ14G3ueK8bXTf8nQPrfZqwRAGJAKN5kgJ",
  "key13": "21AnuCJ41Ruk78HPQ3ZvBDPx8UfqVn9XEKUBkxqh8e2bVxJMp9p9fUEyed6ifrpfxAtRfM8uEArBCGxULmJb77dP",
  "key14": "rKJaqvHjamteAPgHpip7mwnfE1zzNfyD9gU6zWDgMhT6Tru5PGq9yR7uPZdg43ghGJwZsJtPh3PzMpxCMypi3ZU",
  "key15": "5xzuzN3aQHykmYRdSevbimosu6wLfr6zdCkfq7DPH8JbkH3WyZ8wkSwPQDsCxhZHNPuFdgjNccKDfZYrdfn2Hadp",
  "key16": "4HQaWpE72X8oH7rc7HbGKbStDDU57r1dacR9PvMNHait4vacYFoiQZ53VhHMco6wiabFvcFKboTkh6EGfxssi42d",
  "key17": "m2ZCT5EhxbW71zXo4MeeYHT9ufpjpwz3oHUK6HbP8kMSoU4s3SSuDNCQupUnxVnJrUPfHAyzgM2JSuBQad1UJ5g",
  "key18": "4ryhqTmRkNUxCrfgjiwjHNGaK9sbYeT8mkzCn65QfQW6kL2i63qnEiA6HHBr7GD5zt6WUmwbMSVqbDFLjrJAkGz8",
  "key19": "3m7SCDERd4mZNF9M75YM69ZRaYCk1PerusRmQkXwvtQFUDfbZjUeHrpPe7rTopeGEzkzNFnLJi9V5V4ojjzDiezR",
  "key20": "21335hB5238g7u5x92w8VZJ24XCFf8AyPX793zgP5ACuGcmZmSgR2WsLNki4KtPUHaVhZh9tY2X736HWHgrFVf1y",
  "key21": "d48HPSe7CmECkZx8EmX8EqHC1T2TPm1od5QWhsS6uFrAyRcB7Gv5LpPyrPzSf12EyKuH5DzcrJ6kihDDnRFvTu8",
  "key22": "4GdL4csqJBowp49JpCM9hCZbmdvhyk4eQ4i4RFN54aeVk7YTsiy2bccXB2yhzdhekQPyjQ1JsGSuXsi84wZpUXuo",
  "key23": "4LN2M7tFEuKxa2HsZEVk9xm39mtKoQ3qspQhCUHPvK43mo9VGRRPRUeT5ppx3yN2TPsiDLw4No8hfY93cxhL8eqv",
  "key24": "3F1G8mwu9Hs1wr5ZWFnN2P8CnGrZ9dZdBtEfFSUWK9brDxHgyGyecvE7ex2cp99Bq2LC3A2XKqmjmF4bm8p85sXi",
  "key25": "3NErRB6M7sLKmSvGKSqgAxcmnuwSLjS1LHctML7jcu5iFvQjU8eujSZXp8eBaD1wpqVcsXEzUT5GRpCgHEQdtsQw",
  "key26": "4EgZooxnKE5GfUFrguYY2zF39G2T3eGyfKUcE7ciWmgPjxXnU69ajPCeM7pkgSNj85yuKo8QWFEn3Vwaug1PMGAn",
  "key27": "2dwUA5CmVpmhDztH8vTEiLJKzdjm8vDozALqoiZoH1pZZBCrkfAcuFApFJ57UEuN5FKQnHci3UZvjhdDJ78JUhZL",
  "key28": "3Lhxiv6uV4TSXKhowdzfrMxf4YbSjUtXdbe2RfMmfnVk2tX3Ln4oKKeLaw6QySdrfdMCQUL97mb3VvRptGDB2vM1",
  "key29": "4VqWTxy3CgW9JCo6Ntv7Y8bkERYnyztebkxe2n2E2DFJf8Rda2N2wFUDQ6oAXK4Bseczd3YkkmWxFB8tiWAhzgTn",
  "key30": "2c1jErmo45Znr4LpVR2sgbuV2bKE9L9kq6TadqZLjnQ6ggvXoK5dQK17Je7RkwmEnwVmw1XAaPZSJyRD44PyBtf1",
  "key31": "3qpTTZP9mv1q8keJcwQuXhbChqg8pDHyw4c4vw32k8TRHMKwS3GVzVrM6MhcARQvKRRsy5RLHcUEDQvjQHByj2DW",
  "key32": "3e5XE53bUHjLjwdypvg85epxP2ouovJPBMqnrttDLg3qU3SS5MgiPdtBbsBodobC92ZQyDLYQVwuwpvADcEzdx5A",
  "key33": "3sbK7mV5nrmq5VWRRwKb2mDpZ5PVjddG8a9Xx7fgrBx73eBfvt6fKB8mF8hwpbTsfBZ7FL8T38DdG2dDzpBvAyRj",
  "key34": "2aDF9tJT94gdyfK2JuNghZ7H5RKYJzpLqkfL4n67ZTqCuBbLQ7z3GzXb8bpiKw8rc2DdsypajDzws2gy6yEeNdMw",
  "key35": "4AvYniz62Dx8Zi2mWNCGn4MrbFW5rcFuqQz4vuWQfwc3vKjCqWqQURvZXj2T7X9NWPghiuFdKqKF7Snd3QGMgonz",
  "key36": "37U2uuNUgNnuWEwGcDA3oSoVaqGJQKUrxnpEYDrB7Qg4MmFa2Rv2dP3u1iKRxurUvit6isUfaWVLyp4Ziae1syP6",
  "key37": "5wjkdzCmnDxrBQAHrWSDSgAgpBNYe5ATN5wsKZXvzFebj1TaTJuNpR18p15Waa2Xe7XF83DWePtjT2DLGN5K5G3A",
  "key38": "5r8kPVqWBYbQZUz6JQ4pUMnCeFKMRVPb63UUTJxM4SiAVtSPouDRxuTLv8Xhi4SrHtA7mHoDwc4E23zTbm3qbRWP",
  "key39": "NF2XoKVqBoGDBPxwmQCxtaJVbxfo4NVDQ3zJbAW5GjVmmPU9Da96aE2keTNS8sZfTSE1btcGUm4YxqkzkwdoQK3",
  "key40": "2A2sHg4reb25UqbPMzU7Pq2T35QEU6aULFSyHejKywReevxWoaCutujm3xjEZ3iqK8ZDbCv6qjcNojDmwc8y3mqA"
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
