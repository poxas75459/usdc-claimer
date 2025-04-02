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
    "2MQDyDSv7PAhyyzGR1nrFWz3TEFsgkb4YeW2jkRK8PUadzWMG9S1y16hqQRVKF5BqzfM4HhwZY8wsdnganQz12NV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Sirace6ctUGTr6JJ3ndWCPor5F8wxMRmzyjjA6LT6okoowM82U4xSiJj6mk7MKABsVngyexwc3XbSuKgHG4aCN",
  "key1": "3iXNUDER2DBXUbmhuQYiLCqqNrioHfuVUhBcC35wRpmFttyXTb2xh6BQ2jKRscocGjtQdZJpGieoJG8R9TgaKouV",
  "key2": "tmmYb1iJeuH4wNQ4ZZ5iAN7NoY1z28anxxmeJfvQzLjDGdZe1Xt9pt62PqoZpgJNUz4UsyDg1w31NMsdSR5FVgU",
  "key3": "2mw3D3AwPC7UZTbpEMxr9HEZ3ptW3H4A1i5KYsAfhivQd2NgoFToXkehiXxV8ijn8r2uk8Yc5MRinamHnS5EyDAc",
  "key4": "SfnN2D5XkprjmsbA8fDUCWVYiEbbpymgY3wBMdtbKmkYCWvDVEVrHHkySuiB4XCnTe6zoRBMbXJb6gexFf163nr",
  "key5": "5HFouFcDx11mAkUH92JTfRZaK75SoKKSzc8MDG9MMtCwwDHx3awQgAPTGtyDbwRjgfhcvKoDW5AHey7nE5Dn25C8",
  "key6": "4QtTnd7P1WKy8NB5Kqe4NFr2jU9JUH55ncgMLXakxr4AXRbQWTrzTAqRNP4eHU7ackqPATdtukT5yA15qhiGQrA8",
  "key7": "uzTE9ugyA3MtM5rApQSBFMZ8ox9bSueugTFPQj6vBm5DyNwPnhX1UijPVxW21t1KgfTmtzfRTXa26rB3fRy6mFM",
  "key8": "3Jge9fdco8miK6xhXqCF26v9wLJrHvc1FXZXD5SHkaDtiizup8g8Q4QPPb4fDHyhX5jR3br4ZUiq5GonZE9THyh6",
  "key9": "3LWPkEUNBSxHkeHX3CtHaEAVtLvNZwr2r9wqfbMZhELubQdHiFGN6GpjPGfSRMQf48AA3Z4DhrczSBmmC2TGwWZt",
  "key10": "44xFHjtZDdPZu5Ns2cXLm4W4WUEjHM8Revqihrr6HDwQx1DNAgGb2TeFEihyFwh8XyW7Sg2zY7GKfi9su9RczkPZ",
  "key11": "3EhV5quuwrkcVDvstofUunD7NVVBCUYKYgm34YztG1P8u2wg9U9ajDTUUvWGop1XF2pePMydp2BPNByBeuGYfdUU",
  "key12": "2oQVb7U7p1J9AHvPwfptEPCnnM7kDP8pMCWTd5tjpN9c13wpccoiF5gAewsUZ4DE77SXk5RppEGFBpTA2dUes527",
  "key13": "3TMJL4v7x8dZTeLuPGbhuL9nYH7PGnf9uE2gpQ68NFCfQzjVmoZsvD3mp8U3cgrRqARMvH19dpddu5Ebqhy1L1is",
  "key14": "4BxxNUhywmMWFNXzu4drfdYnNjzBgcK5CyaPY5GnUwK46YYzkFW7VCGAEgxnDUAXGG47RKTpVnq4WjCDF21hrdAL",
  "key15": "4oqdAzaReFnm3ZAy5TYvcPhh3yBLJ7jQc9CAwx2pvTXzwUoXBqphDCz6LMgSJZeoMGNb8adEQVqEbtXBDvswYyc5",
  "key16": "5ReyVMrQuFBdknkDjBLMTWFNAmJseGoMsZipZdbHENyiW2tBrmkFvEe6ffbMoxVg1fnktMkFx5RKB24PahD6qqBD",
  "key17": "ghgLT1QofEBh3XjTeHSPHQVGLoFq5r8sF6fQ4KiJ2vKvV5FoMv8dnQbfkGVBRCc91zA53pgxDWDMqSr4ooHmgRd",
  "key18": "fbvwaa9jE5VaSQUGd58zx1aw4bnXvEkpsz3sLdYfmagGdVtF2f9CKy34a23bGAWvff4NsfTj4U3nhaeEZm8QkXj",
  "key19": "37q2iYycUtzDBdTXMvBWJzfxf8Xb8W83qKPmoB6ZdALFYFFAdAJqt5uHGviUmVwvTd3Viktp5UnQjhGknrExLacn",
  "key20": "ssvQixdWANQ1aupfrCjFRY5wRdMm5RQmGT5NVFJ63nsGyKVJRV2JHU1AhNpENXiahkYSFFbXRxucmzwds877TCn",
  "key21": "2gZe89D7VR6ZZJ22vZot8u4h6QyLKWaAWS68PNT8AznaRoiFcQVtSPMMHd4vUSodpLDgWxST4PorsaLwDa6bGw7Z",
  "key22": "4Ydb4GcxsKCeDZm7qHXMZsMcBzoPgX4tb6CTY8VEHqKzSdLYfkQAmuyKZ1RUZ58eMG3rUqNtRwKqdoAkYbnMiEHY",
  "key23": "zMrBSQnJzszPQksYFrQsGiuAm1LzNyvSyrvQDg7bgANGcRdxaJP6RgQx3TgceazGPSP5jPBYSRpvKjtXD8a6z6E",
  "key24": "Aw8yKpg6yAcJi3URqiGB4xQvji8yA7wKGwrrZV8QjEAdgB4CogXu1UymJU6D8AbAmM119zY2rwKtrYn7aef19U5",
  "key25": "3nNaHEL52wvT9nxuCECXxrxzE4uphftPKVzUXvLrUQwffD1BALvGbb4tMGydpTcoR4uUKGSvGxL2gx9wHQK5NpYQ",
  "key26": "36LaFNqgPXPFgR8NC3Xv2GVHazQGHMT8LJhyEMtujLYaPSX3eMn9SFnWUMGhWVU8aa4aH2Ey9ALQHWFS1YPkaHf5",
  "key27": "59oMAtvY8qUwF7z7eVTwiSVaD4LM25WGimsr1Gbwzhh3MoCJxCFdSh6TPnadpH1ywb6zyywVu3DFKZfxMPkBKW89",
  "key28": "SCpVY2ghSRxHAqWTWJ67156mVHwZ5DqZebMsgpWGkTdjyCFmNHAN8F7kvgTFyh2prhJ7vnJUzb1oRSeokcz4WNb",
  "key29": "3WvnYg1DvYSuckTfiLdaWbmifjPCcnLYXQ2mTGiXp315n1ZGp8K5xgybuo1RUmTyjqBytQUgVVfXgSU3tQevqGMv",
  "key30": "5V6GBtnCi5wkSaXCva9b3uZHtiw9BRiwWNMNb396z1CyezRqGRqw9Ttva7wvoLsLmPyy9UBwhejw681JuhQJkGeJ",
  "key31": "2FNJw1XZo4jtPs9M9ViosiBBfnwiCHD83xgeUCZwkvfSqDAbmRqZDMbSNB1aL3VMRJNk9MtczD6DAD199C6T5Fgj"
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
