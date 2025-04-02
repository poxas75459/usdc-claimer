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
    "21ZUchwTWNsbdw3WMAT8mVmu6yv8z2UmVr1ZpFC1yVwPjy9VJtw8BgGXEMyXYKbanAp6Zf1Gq6M7Zd4aWpcYRtzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RoiXWccypd8m29xzDzU2funCFRbLhUYN5JdZU6Ctv7yeyrXM8XULgtw5fsATKuzEFq1rYd8RF6CXPkmBQp1yqos",
  "key1": "2q2tVADXCD4o22EftAvG5uN2QGjZwDTPWDHb7RkAyWMHBmHM7pqXWc1J1PhVVQmHj9j8r3pR2zym2wUXnxcR9JYj",
  "key2": "3YSayyPafWbW6SmYi5YAX4fwgtPk3RwPWVbh13GBNut4y34r3cJx8gRsn4EMvUg5QHFVgUmUsT3WDdBHXdRHmeEW",
  "key3": "4PzKDXxKj4qp4BMbd44VPgJNbygFi9SdVkcQzoYui4FejY6L5AdXG7ZTxLECbeV9kKcZVmb4bBbQ2WYSSxs36wpq",
  "key4": "29HN15gvLt9JXBRP9CeZeN6VwWRVEBmM75AAiqDytPgVVryZ95kXZWydWzTGERHq8nDuVScvpqbWhC1WGeoTJjM4",
  "key5": "4EUq3eeHY8UUr7CfVL5Sm2JbgZGd1nfqStQERLuNZwUqAANT48TcHNAfJadcxFRiCCAcT169TgXNgqQiF389tSCP",
  "key6": "2pKss3VZHNGJKpJSFSiLRddanKD6eWYo8JfsCKYwPprJ7sWGHVCG4kVbth99mVxbBM1R116rHcH4SJ3zBqvJrvCw",
  "key7": "2opVioD3HUYzxhhmkPd7hKVesAhxwHEf8xd5YTTxAeyNQYYEh26gejBFXiPxpPmwQnhiLxfYk6McUqy6Zi1LKhsf",
  "key8": "4xbSAWC3rD95vqKtJTkgXzrzLCVJDiHG7GrWpGdcMfE4ksGM9QQ3zHZFEKVA5ZcaJFZCgSoF3bsxG9g3FoFMhMcc",
  "key9": "5t5qoURedDa2XNiPirDd3oeBDXcadA6VHfuSaqki8csAuZCeo5dgrvzocQFrN2URUMj3y1ZY2pbVq7Pr9yHqVE26",
  "key10": "4VpzNWKREVCFsVWYCs6YTBRk5iYHuo2kJ9PXXVr51Bn6fY2i3QqkAscziZM4wh6kCETTqmykkZAcSjamLKkZoM9L",
  "key11": "3zqfMkUhqztc8GQJPQaXygWm54ke35xJvDjBXck7aimhhkJMctG1GCZ5HHc1M6eVLBgsxNweTs33rAYDFnpwmRYa",
  "key12": "4FHchpEvDS79ctwtoyt6MDYu9ZFsZH2eqkw7w1UWzpo4kyMLJq7xnArQhcMiFnZ8iywGKzb2rL11z9JVe5heowFr",
  "key13": "2erRfK2tG2hSq68eDqXahsx4u4wxb4vhVs9XntidEBmDDGBosApnDeE5nTRpripnU1aF51GgMsoCMJwEnoG7UsHv",
  "key14": "3MnvEe4TeKUkciJjBBP65Ku3Cya8oBbsfNU9M5rosBdrrQNqoM2YmEFCHEm91f85JeJ3mvSuSefZ9E4Ehny8VP9y",
  "key15": "Jhso49NDQhf9WKX3JpqMavdkTTmxX53M1zbJ1awscFmyaPaYn9qmh4xnecPV7GQDUyXeAuKE7eDmFP8a5qPQKTN",
  "key16": "3cQGSyV3Lk8XjFfiuHNyH94mCkm2AXudzgk2r89b9SNhrbwFnzUL4J32afHS5X8qi1dcpsX84eRHX6hxbMPcZAQE",
  "key17": "26fTdefKC5ZHEc9Zax6wUpDtaLu7BkWFfdzc9AktcU6UZ2nHm8eXdmN5ETA2d6czJDe74KC9LUZnDupka7udbdZL",
  "key18": "5E4XPXDQPzMbHi4KUUDdmpJsERqsGSAyJ7Wdxj5xDFXWoLiaYCsPeE2M3yBkFWKGT3dkQsnExqzNs2Efnq7ePufJ",
  "key19": "4eSt35wiwvjXQjsXCwV78HYMdnb7kSmrdxRm3AvYBpHKipC3QiGB5g5NbkBRpRP7G6LYe43SDgzMzsNBGD9uKt6N",
  "key20": "iKL3TJZ5pZr8eatgSfR3H5gn23ZiXWQgagAmpEFEFFTEXBdZ4qRqy5rudeT9Pgj7FULUQToTNmg66gk9yGQBQPh",
  "key21": "5cPBWbAgUpfYrqf2n8KFhtfh7bLJ9oYMnoJoKPBsy5EepZgYTkX2LwHYvbzw3UA3PiAmaBkXjCUiX3WqfozVb8BG",
  "key22": "47yV6iJAAETPi3qyJwUjLmg8PAuLG7Y6sj7fmD74sZMGaoFv3JycBwKCCEKGs1CuL421pegiK8QEpQxmBC2mC91c",
  "key23": "5t5grrEupFtDB9MKbGuS2svD11YnBip6Ya1ziXr5DA21j7YxpeTVcMhGXYqruHbsr7TM7NfZmvkgRNicGJbuXDyQ",
  "key24": "538J9DETsVT43jQPTDFVFe5roa4jaTxKtkiZ2Wbma5n3SxwMgWgRQ31EPVuhU3Msmb2LK1RTXr154dWrEM6QHRsA",
  "key25": "3uBZopPCjTMJvUs5TALBRX3dz7ujVqxeDTYbETfr5MyMvSZz81B94VLg4wjCah7PcZt5ZLgQDtwsyDpjMedW8RAY",
  "key26": "DwoP6eWXdcb65pxErCdDdHZLyocBKMbdthPWQsqjVZmAFpdYg9BWpDTDXLeFrc4Hr7UBJmGuH3Vdvv4oNaWc4Dh",
  "key27": "5uU52PC8wUXpj2CNP9ZKN4zHiX32fdKJaf3c8rgiUs7o2PCJPC56orY2osxppSsihTWKKeknyW67xKoKV7N322uw",
  "key28": "52Qs9hT1fWHRWDGJNCMp8VRUj2v6CzNxjixMqXjhRVwh2QSFagjS88yfjHSyYGtjvGasUSywRNZ17E5k2ffyiQDh",
  "key29": "78xaUi7PctstesstX6GMhHhRSNJrVFtcLRpKLA47XvJjXJdC1DRf2PFfjm3RGnXBSScHgaXXmePELauP1wDS2SY",
  "key30": "4hQn1tFt9Z6wNxYJLcaCKzFkmUQG8aTNyhtqqAUCUvtRd8x1AncS3DzFxqZBVjdTcp7UQK8PCVek6thZXavQFacH",
  "key31": "2uV92kMtPHRJHEwmE6zcTUpVCx4d2ygVr7uaGENiVdSqQ815F2TRQAqfS4r3sRTCWtq3N3VF6PpQZCpjMdXns7a2",
  "key32": "rAh376KEpogBhqwpYYbGc2vbRS71sqoqrWf16FUf39zVwanJBZMPpDeWaghfcuFUvHMBWr4DZvB8EZXdWjwu7bd",
  "key33": "4UFP74fkHkBVBiWoAbdusYegjMjBdoPvsyHqETRrPBG1WNvHo1rjy2kT4djj2dcPXKFvQAmY4swUqLoRFXjLbUKh",
  "key34": "zcA9sqm8A1Yy1q6inhE6UGpE9W97ajG2jwrxKcH8Mjnw1arFJ3bsTzm6YFnYF3Mt67W63XBPeVQTtcjchTSmu8Q"
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
