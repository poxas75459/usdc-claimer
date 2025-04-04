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
    "4qCqPcnNECT3L2KM9tDrSEMg2tWNUg1mcT8j91YGNmjafYYr9Lj69YMhGmifzSUoB8n1KyZNg2Q1T3YFBKqVE5uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dm5U2Zq34cQprenDMRcCxj6yLKSCppJ9zuGWNv5pipkjq5YYQBbgfoohYWY53ZacCpdGzuiLG8h4vYr25hMD2DX",
  "key1": "2CfAX6snn9gda5wd6nYnVUKSE7xbgd3SFzGSn6g1JgoZctsZKhoHDeDWdoqjDNACoXViJ4JFKMYew2LTz8k9updv",
  "key2": "4pYTce8nDJGNiy2xfpiSRJt4CLzDrm7jmeEwVFx9beSAFzpqUzqKJpjZYxn2J58ALuDuXerfd2DexSZNrRowomZr",
  "key3": "2FdMYFYmidjux7Q1PVhXp7DZiDivUST6u57PNB2DcEQhDBSaHVvUwV1aR81SHYQEm5Y89WgM3s2HJikxtXZfPYhX",
  "key4": "23bPsK3qY99UeZscq9GVyvYPcmsTZiikZXqWmCJPgzBQX1nQT4jMtgfsKmquk1WxweZcGgTjDitLryq3MCW3aQXe",
  "key5": "5AWyVQEGaUqGZ3ZThajjmGwizjuWUgcEVY5kNWWHyYPFdmmEANoLNWQ7URrVGapnimbooYtYKgeh1GTxgysNUu35",
  "key6": "36DWdZAVSLoS7yMcSEdr2sVffLgd5e951cwvk8NKoRVXTppybt7ny5HXMcV2hwKvvyRT9TLq79NYGNdFhV2u7EcS",
  "key7": "xptguxLtwxBf7dkTY7RFaWXyi2uFP7VwdpD6KYEgaDPbxwVbARxMuHb9Dk23s3HfoaJaBxBQNRRmWb31gjMc6k9",
  "key8": "3T2zQjHY9yP1tF473yRtuHVyyZVW8TpwAKtC4t4cAbcw8Mhcc6sH2ncHBpDAZgfk26b6japRq6CriYnkaChdEac2",
  "key9": "4LckfhoVYrjxYmcX9XrhVZE9JSuLyX8VREwEbndevRzQLSyMqfYj3YTF4uU2wD4sSVhwTxzG6Pmc2Zg8PWrjvAig",
  "key10": "5MqG1uBR1U7tL5sq5CCcjktoA2NFQQhBrMA8ECHGzTAQKpKQhYr8pPCxxsdLMsrzvWHtCdV7MxmXqhqcNeC9ytDJ",
  "key11": "2quxdTbTpFz3STf9E2zc6sM8QmkEG25RT1q3a538XaGukmk34JjQQaqFgFDeDv8xdx7kpxTZMMw3vdLUz6yAT7r6",
  "key12": "5jXtUc3peuGfjdcXxkXRPi41H7pRnqZFeqgttZUAqGSTv1GVmox9QHKJJK5NdjBPbFrRTv6upSrTffd6WgtdbXjF",
  "key13": "7fitcUtrrJfPDBRYPrdKde9jNjMVLpdPVe2qRGKGTmzTjqGSXz22NHDnpaUkR5VJhz3pB838R3NfLgf8TDvLDHN",
  "key14": "3onSSRwkERQUbidPm5nXLA1ccMWcjV5UPGXCuwArG5rRGRt8bc8VUSjMgBWkqYpz3PzbqDkTHDs7dw85kZFMWY4C",
  "key15": "WeGxxYRCK9jg1RXWd7SnNSuNyABW3xbwoBRRMcUhcXxyspaVhFo9mWe2rnGV7bWp4bdWHLhfQejvad2UjphFs4i",
  "key16": "2EbcGYH9WbE5GTpkmDeVzZMyszNaN7qhMSaNmsPRSFm625DMoymrWMLxoku773Frd3NUL9LaaaZepGho3TCM8rFR",
  "key17": "2i6SLC6fMvBjTQ9njGYQBpE1GeGBJrUgxH1Q8yjDc9qpza4GfuHBbMJHqeH6XRbmSBj5wnn7397HGBUAMbmjYwtb",
  "key18": "5nxXdgtyv1wh9hA67biEnXbm6Vb2t5gPYKgogDvywC4yMDfQbZJGFi9jZndUX7u85n7GnYRQxw4A3yvziMSNBXPQ",
  "key19": "5pgRtaYePMtUCCx5GuPvyyKbMwN3JvRJiQdauzDawQhMwawgCzwPw7RN1aZUU4TTm2uUmByfQtpEVEVDWj4EVNow",
  "key20": "Boh33MJPF3PxeLwbSN1YrRtgL72wVhfzfkss7vXWX7PV77amtrPjTdyrHMSGdV9rEFw2VpGR1KNmZDLhwt4xbp3",
  "key21": "4WK2YD5VY79p9ggeaBcGBmnxyAM1ogZCv1qJ2opdLKEs3W59xxEpBbC5NYtUmNaZFR1cpqzgpCLmXErDSJhTaJd6",
  "key22": "4BLUo5B9ZzoS7LRLB6m9DkQc5QQUYdfB5DQBRncuBaXvwQ8aekCpPvveP1vwV2fxq79ftn9m19d9ETQr2g8zKDrc",
  "key23": "58rSD8mgDCoJaJnUNYemqAQEGsSMKz829RcCMHnanc5uvP1BABwU7Ezu8JSvA72W66SQtV1MS23REccCqYwwE6uk",
  "key24": "638RBbV7nPL8NNQeEZYezffVgn8i4qcN2JF75FERDvdF13a85nkd3dMyKQ9UFNSjxWVzHwawg2nfqrPvrbEymH2m",
  "key25": "5y2TnxA431Bv4ZqSQFZGX7TihhMqYKrzS5tXkmfucM6AQuPnFx55XyCUSeu78B9c9LPYLXYnqL2mmnqXRo4fsdyT",
  "key26": "RxZE8tF1n4s92keFhSgixRm52P6E7c42FqQky9U92KYPkeqjdujCohj59EZiHSNvMpKB43CoqzzeM8cCJj2ND9B",
  "key27": "ecEd9CU992oeRFi4C5aaHYGyQdtiZW6jwkeyPxVczvkkgzk7eUhpdpm2CnUdHo6qJ1yk2YdM1QMB464Hc4dfzqZ",
  "key28": "2M6xjoVfRPxnJsGxLh3pgBN5BXKo9dVjVHP97hNhjFXnvrQa3QFN7CXkxJ3LWWG2MT5LTy9pX8kpx19x9o4aT6PU",
  "key29": "2NndPNTPCSwsZ6NMRhEKRY33T5SEtvAMumyWPRiJmySmPWL53N4GiHtNswZcHCJLyNJ6SZE3YszrGntrNTex4jUZ",
  "key30": "Y4QGyvpM19ewhhAXDRxPdJJ1DFANSuWthPmkpiN7siK7yAJ3Dn7WczNabnV6UE53durWfbqq1kr6fZbpywjpmrV",
  "key31": "66BYBLZwKsCbHSwQZjfdsWnqFeUjcfw7d5anW2Y1p7LCnpHf3sRVk55zdsz9K4LjqLDo2WLZsUBqDqKCeg2pUGMu"
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
