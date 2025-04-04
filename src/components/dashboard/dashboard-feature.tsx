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
    "35n1TBECjQiZQnWt61gPHvw8bWB3hsfut9wLPRZdRUn7GcwPsoAe7wX4kC4chiCH5dUtDRFxxDoQfJCBf9jG7dQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oNSgHdcpSK9k1wC3nR7YF3u7yq8ZLequMgiiZa9FoqCVPJ9HGpBZb12hhzqR7fco912KpVvg7X7mRMRv9jzYDL4",
  "key1": "3CbhwWeHnjhBffbMbE9BzhdFUwvxgWQjtZwxfjP5utFKG8H6Bii46yXaxLq88Vbc2fhip6uShUHXPnHcVJySZiFm",
  "key2": "2TfBLXn9L5T59CjueSCFDJWvFxZcbDwhF7cn5zCbh2sLDdH9GLtXppKQJgDFnBfELr6HJq2o9H1tKtdUcbkYgmwH",
  "key3": "3nWxh3AGtw1yH6FJDEQ62Jxs9sgtD8Kg3xmrvUvXxVjTMKYJU1evtm7oR3JNss4KGifEpSL5RWhGo2s2fNTBJmMS",
  "key4": "3tjXx555yPKijJvBzmapTBgWoccm77umRoYKkyTFBYbMAEKpaySBxxgP6ui23zewDpxCnyuMb8UHAJxbXPMsBL9P",
  "key5": "7bNZan22HRXPdoHD7L8gBqotW3FcCVqRX7TxsARBnPB9PPW3gEuXbNsSkF3TzbtiVEi8RYKM5qrGNXsjamtxc6z",
  "key6": "5X2cUSAkKBeysN5CPV9RTFjKhJMYiEPMGrae3ysbH8K8wEY2xqnqksPsLDh9dbbkE14P6812gajJNi8AfHAvCoDf",
  "key7": "599dN22nvm3EzSjDU3krKVbZPhnH2UmEyUGCbdjKEmyBWsAJzpbJ5wxLJvAP3ABdmwcsja9neF9Lbvx7SRdRVZ4u",
  "key8": "4QyhJ2dT1gsn8D8fVLArMAFpFpgzrzkZnKkmLHo7EtsRedkgHrqezBQkTW1QooZWrB16VRCwPciLkGvYf3hj6Qfq",
  "key9": "5K8vNuwV36hNFuqLswcjPCe6YvJHi6h1wWNY366PLHZJhKBJZrVpb5DfacaEkP8k9HHvueEnWFbnkGaboTH7JAVL",
  "key10": "5PCN97RPfpUn4BbHdcPuBH5tnnVtBrhcADrN3vX1pvz4MN3twiiRZ1XnpXszK2gzKkq6Uu1ACBzMouqkfiSX4H8V",
  "key11": "599A1qrbXctA9ov2QwV5Fuowp39ny8t1ECVUShsQ7LLL9baH71ZzczwL5j9ac4wFH3kk258QYEBa8NKuTuQQnSn6",
  "key12": "22gxASE3Yu3LiSadBDznr5bkSBoKTtFXNJST22knAaFPYuUE3MThJk8QgT1J75otMvZttgqqmZMVSN2HLRjytq5N",
  "key13": "3NVFJhr87EEE7mZbpryTv5PFCYyVgkq5M12JzL3UUtDQKToboZbUjJPHySsxuvpnSWPUuQt1VbK2E23LE3HjLMfq",
  "key14": "26js4AQ1JywiSbNRJZE2hLFzvdNJ7MXmoxtmUm8BiQix7SLUEvFQjGjWNhtVztVL6whH1oCCWEnukhRAENDqRGCt",
  "key15": "5NYnQHqiVnpm8bHA7Yhdud3N1fXoeTm2Y2A8ibV4N9Hp7BbFnjdrA6aB4M8oaFX9ojbSnd6UCp2L9rfeKW6ZQERi",
  "key16": "4ZTeSpMzgCnmYmLSnru5Z6uyRaP21XLLv165Wsn1wsphN4xHn8qJJJXYz8wgVNF9BdoBAKWPu1M12vBGgqs8ta4w",
  "key17": "5RApzcjm1PGzMvKxhbEhFybRmXsfWVMYAzMFenhabguxsqARpcpsH3vvGr45eT9bMRACkvcB8RvGJPB6GfKMTaqt",
  "key18": "4CCzBFMR89TkEE46K6JAzmdh7vLh7rcFBByp8swbP2uHWKyTf2GKANZaz4vujdnWHTNEU9Fbeztxk56xF5dhZTTD",
  "key19": "4bu6s2rbFei9BFfeGVCyJpcDoVR8f6c53Vq3ndigwqdX8FTPWR1oQdZFL7pbyBqqGU32rpHSZe1S67PYWn2xEnYZ",
  "key20": "5ELQmHwKuBQmEx9wbq8YCHJpYaXhoLRYBPEPmscREESXGy56tPizEhHqHaE5roYyfMRCR2gCtm1bH13w5L345mHk",
  "key21": "5HK2s1GnYAqdjxn7pp9yuxcu18ArrM6n2nt6aidEdRmmDYErYCwUpVT67PmM6TFEQ5bUqNKjSUWjeqhE9peJQbG",
  "key22": "UFdwp9wWJYKTkw1ARbNQAqaeNd84TeotNcjAy2RkZWH5HLFPr1HwoWvT5XRHcAKMGeo28tc1Kxr3CgUsRQiag87",
  "key23": "sushTu8wGhJhUms5PFnEwVcUvgb5k5QXb49RekyimzuNkRZZtSdDY9c9C4hoMxRbhDvEjkJ9M5X61f4rEU3uVt7",
  "key24": "2AMeRRaGfNSywvaEXbvpzjxJgR5kewXqUkhV8fpbPaX5YszS7QdMrqRE74LuzMqPxoeACsmsMnQfWCksf32kFQrU",
  "key25": "999ZnM8LoVCRZJ1TxLqgDuWKmLGcW2GLbKFmHTzSBx8FLyXvf868LyrGfwuHdARkU6wKVJsKzir1jCBrsKZ95JU",
  "key26": "WM4oXc2eCNjefM491Lz7x7r6cpzM8ahdMUuuFmsQkc1HdeqTtA5GJ7XqWQXvrVUcpht2PGwJt2esPdUVYmtPPP5",
  "key27": "4HWD4ft6fEUx58SXxdZ1CCtGQuhHb9iaPGFhwRFJqghFUrMN2UhRxBSU7CCDN1H9Q3Rwq2p6gSASjn8xm92kSAgJ",
  "key28": "RV4QqqHxxmgTFrndk38JZ2fCPbAQCgznXscmsMFvKnzm8EoeTLeYb4wrLxRCEyieFHUVKK6GyuxX5J6koTdL7eR",
  "key29": "4vL2zYqpsvNcv7CaQzvrQ8t8T7h9ko6SuenMcNT6A8Rz9ZNggJqj1Fm5G6Xw9srLdRqpSLJNFyRhrXBAjH8BKjcu",
  "key30": "5udYkrhL2rmTS4uCjWT2TUoNkHq3J4adjwTi2rrHoCvSLeM9DT7RqYZGrCu7BLjZ528J1UEUF4qt1R1iyEiE54Y2",
  "key31": "56S6yVBX5pKsUMx7LkgVqxUBrPY3AA1XhbRUqAqSFauLmXur4ktJy5yoa5NJPNWADVz6coWEbBEkvnpVpfs3r5if",
  "key32": "5YkyH84cbPLH7n6PDb7X27dtc2WdCc23pfXvUMicnVM9fso3R7Cmvav769xHKZpnbhF45M4d1oNi3wBD8heeYooA"
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
