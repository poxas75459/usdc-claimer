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
    "375f59ZQUdUsT77YYZHD3GDcK9i4ZFzvdV7yhuidxP9sBUtdFSYnK652mxr9BxcKTjg3JeXRCCxr1Ni6Sg5v5p1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CTDRykYLRgncvyWuLLraMD8CysBYzfY51bA8YFpwtKXJ9iLGBheUYjhL8JNHy7Yiv3aZydCbYkxmCuqM7bJSQGU",
  "key1": "2oHcNVMypmmThz4hDcdjHgJUcrUdsA9FCDwnen2LJ3XVX3Mr5ep9taktnLL6g3uYXna1JcjbzqkLwfH9DKGrS5UL",
  "key2": "5irqtmG7sS5KWNwHTQtAH769CjauXpKroPtqrnLVpAe9wo2Uc25wZdyS7FmcnjuQvkejRju7Nz932ddZXNk5MWDg",
  "key3": "4LXKpBaaPXpp4QEhXMhCysKG4fcCVoHd2Qjqky2kWWmW75A1dmkE3TZW5rj7qK32KeThhrqmsPGRRQ6FW9NMSe6w",
  "key4": "Stk3nSDPxEKNtJXBoAsvSahYeQBEsqyyi4aRZQivYBQUDYAXSLSt3oW6CHvEEcX25ynWqdVY8UrayNHn6WCNsH1",
  "key5": "2BDYtAqhp9f56tMP7HbP2YkBKD5msoMH9dMVfx5SX9tpHLJ3t5v4MR9iQwLPu1qRpdH5rCDBPoQZj6tuTR7xK5SV",
  "key6": "5JmwKzRiEMSHhGSo7M3Dyyv2wdF1MHmB7u6hMyjXhUfuY21XUMGfGRjxPnoga4Zqn3Vwxbh5kRnZp6ff7xJszpuZ",
  "key7": "5pQUZSYV5e8ChnbM4AfBe4H6Kbh8JonAS7Wb5wH5hxRm5qyKqUzdLdz2xBe6MVq671wt9tX6TcBFjmhcDsZp8cXG",
  "key8": "5CQ6mBzdKVuc6rDVBz4FM1bPYMiiYMmKNCU2dRXFer8wzHKJwmpLGDPTtus1GxydzwKFewofPTSQLiaQxgQmSgH7",
  "key9": "5vxuoNgppKd44JX1MxGzQsHyT7G3mEt3pBRmFK4yFtSTqFUyMQJ8XwLmAEUdKAsX8fjV1XCAdSoLxzRba5X7o7w8",
  "key10": "5Gz1EeLxoNScCze5RrjBrMUPH5oyuDX3UTrgzauV2dTLLWxNSzMvnAo6ZDtVg4LVzXixJSGZFzsBX29xB6b3Pd7y",
  "key11": "5eX6sbT6wm2jUW7DgyVSJX9Atzyg4Vgr49J6Jgk1MxRiPVLPvfdn9kiwAMUQjnvWevh8MNgza6PVRrbZ1scceMxn",
  "key12": "3em1Yau18wXU6ED9QFhuTjL2GL9VUJ6wDJxhhS3axpaZtRQNZvWfjQJSrHSWNg1tiv4tXXfEJzfPtXBwPesVrPGK",
  "key13": "5PXiSEqCTH6eoJs3EKkifJWLku2aQgxEMrzUdjRGGzjATAn5DVWJi3vfsj6ba2KYoR5LhzTyYfGqHVua2pJ7U7sQ",
  "key14": "5e6nEDyLbyhA6MDaEqPq8ZaZvWKpg66TW7RCr19yk4fyiCc5aRdFpTwD1KW73kmJ3PxMXczSafedaKNK4ocJbkL4",
  "key15": "5CUKHgM5wj8ha89JxzNLbjTstBdy65pPFsrk6HtRccFoFGJZELRD8fvRAnMLFQFgQAL5fC83ocKT31ahihBRDsBX",
  "key16": "3sxGmkaMNgKwmD1pntSfT24mN2shzb8vHdCuKv4xKiz3mykE4QWBdUAbg8GvcemhmJACpzhQpRdPMxBJZR3hAF7b",
  "key17": "aLj9nE74w3KNXp4AQtSDVbZ4dSnX22YKCve8tTsiRh4g9BDJnEAq266r2boUxu4uCJoCQHVcAKtEqnF1Mh8TeuQ",
  "key18": "asGcetojECZ2iBYFfYDLqd4fHz49uRqVNmW9XqiN7xELM9v7FYN3pqhUYr2chDTqELGSqdXZ6682ATkNdKGQmFL",
  "key19": "4xsHAXwKsdYMuhTrP9a5YYRCTGSjxKDx2bDR2TwrzQBu82PyYtB3wpJC8R9Bew3i8zz6avA9AjAdpa55hyFBL2it",
  "key20": "Z8skCMCx5GqLHkqaEQfXEESq8oXMjv2YsFVNufQ6veKNhW42jAeC4dfvygRVTuzMeRXKmqsR5NkdALtzk4LaCgH",
  "key21": "3KByySb6GtsAjmQHMg1PpwPBWrr7RyaeVFoSuRxNqVMpRoxAR5efvdvHCd3i3bxhz8Svdd4Qb2BW5q6wKswdtAcN",
  "key22": "3oMQ2JNJxX61JYBRSVnfpcmvGjSpfrYNEqXbumE4uoRVjWpiF7E81457ErX2HtcADkL3uoTpYfPmm85GzPPXpBHs",
  "key23": "5C6YC8zrkEVCyth4xxRNQsF42PffqjeSn57EcmLESojZYMEWR67ehfs2h7CUJnsb37cz8GeB4RQRj1q8eZbeW9AZ",
  "key24": "er2igKkbm2wRQAqvSwbPB8JGvXQ11VkidTTQRcYZdwvhBRJDi8CkFnKAvReB2qXbufTdV1SEFRHpfwbQCw2S53c",
  "key25": "cyj7Smj9qkA2bjDwYyYWDBLdcqFq4v8Em2xf5NBtj8Y1jTPJCWJdG1ieh9xvgJda9C2N3p7Ka3c75rfvmiAvgkT",
  "key26": "59S1oEPVJFiwN97pK3p4ggAgGZutrbL4VPQMnwGiSPKx8PUFd7JXi8jWjtyHhz7x7TViLaH59UNe622ByAftJieb",
  "key27": "sAsFfMceuEUUSGSPHBPD1QP2ZPktvz1pC5JG5nVkQEHgyfSV2ETz9x8yCbs9W6W3c9DphN8qYbYtqTFi5qENmWT",
  "key28": "2KHPeoc3FiAMMV62oree4ZFKRKgDy3swahxEkURdHwWuPsTvLcwFu1VBK5KZU9od4RaXKw2U3cYFDGoJtu3KY9BF",
  "key29": "4hooiZgFJxsNsLnwejy9JXuA59C4wMSSMjyMWUyJsJQTvNG5hgKuxbAc4mjxHfbgfyc57RGcYZgxHDbzWBFR4rxd",
  "key30": "5FmAmcNJsbxWkVHNV9QmUmG944sDgfqBcCpQoFeNdJ5TbwQZ1SnV2DBUr5EkxCzo3jVRb3E4RomMazD7hnmiqPNy",
  "key31": "3C8eQDbXDmQuErzyDF2BUi2ysYoy7WKDCSpyE93bjbXcET9urDsos2o2Wp92TGFvzYE5r8d6i2LtfEpUPD743JQQ",
  "key32": "5iqAP13zwhyKPk2yy5ugDsLJuxS3XX2uBSSWrz1aYjxfor7srw1cMstXUatqkiwiwDddjMztWcYYazuu55HfDaah",
  "key33": "5L7xvB7gsqegAaELVayvMDcVSicE1cR2K6JECrWGPo5a4TfKJECUvRQSAF9WporhGoxfqivPihrdS2CfD4VkTZsn",
  "key34": "3MCWBEwpSP1FDWt6xjQVWYCCUwftjwEjeuidKf5mZ22HpMd4RADcA54qd9nVzXBVnz3Lv3w7P1zzrugLnPZpfFJW",
  "key35": "3tiEBvjk2GPrEj3aUTuGU4bH28pKVi5en8H1jZkmFq1eUGBG7PsopnGF6uiV8fYtsYbFGtJafrDqbm2Es8dFfyLx",
  "key36": "3Jksnw6rTrxcJaf8S31fNRayraS4KNfP742BETYcnvR8g5o4PHTLaawvKWjYTgtAqkwYfUHYuqvh8rztgcKshXmX",
  "key37": "4oJAhdYyR7sE9FpqaNUBsFDz5r6WnFRjHVPfTYhzpMfL16Qb34wuZcxEB4EvU1YwEfNKuwFZhtDJKgyvBv5GHR3d",
  "key38": "61wUomXMi5dMSQcuygZPKAFpxPDbqJwH8i7MrUrkRnbBCKfJ6byF8iRKCgXYax44iCxstWk1cU6YrqZwaAUSkffT",
  "key39": "MCWvZ2hnpJQ1DBgW8NBc2C22bJPAZW75QRnc9wvhoze2qmcu8etVC1cYhMWQthSJTPZHUi7ZLzHu41GdB47LP5Y"
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
