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
    "2whRyjURHtkMzEzmyC6ncbSZ8ht3bvhZ4v8n9sfiZcCjxqHW1r7PrUsgGDcoB9yefYXuC3gj9PgNwxWve2Pgrxor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpLPYRk7uFXnMwCNAu4NZuWu6n75tbrbghtKyCLV5Nwk37WL8SdFxGSA6sySwipzu8GVngsukVjg2s6nGQN6yYS",
  "key1": "5SeoxqfNNyoE8vGbcfD668aKDzdBKJ9wXH3kW48To6b2btuEDKgXMqwL7Cxuj28JnivmpEhviTX3P6pMBQimQEwU",
  "key2": "ateuQ1Kj3eQyc4r9fbNdyCoEPBroed3JzKdwFC1ET9BnLMLvxY5ZLZr2oxkrJEQyUqePsKfLuD6CFGyoiBy8xwv",
  "key3": "32t1V9JUi7JbK4d6XDyQo3L9U7DFPbbvugAWiAqbdFxStpigwmsrZx7ZWZvzfAbH774Vtfr1gkfjHonc1i9wuQ9n",
  "key4": "Cbrk8gHGFYKmErQwYtdNccTU633VjLRbue3c9YcH1QuqHSy5GZGpS6o6cwL2A9FWsNBFr2FDBskp8z3XcmBcUYk",
  "key5": "2Zdt3c3NjG58Gr7GjTmYJhwGhRPMobMfBoXrRR44SjigNgUpR7vhmC9C6fKStVTuPhfW38YHPdK2mt79mYUya61o",
  "key6": "3Ffcfw6vuohvH9YjyMYB5FhDjyXqW93hPjfGRmqyv7FTbEnkGjFUfPrYeFFizBihrd4wa8CDB95pmGMmK4qWHNyP",
  "key7": "3hDysUXuibJq8QDbKpjmqaBtQZpqBFR4kZTX1dUMJeWaCJuQhKVY2BzXwQw8o1qoZfL3rsV8VEjLLuJPLGBFtGSf",
  "key8": "56y8CqC6tsHsZZv5G8i4BXBwpovtFfKaB2sHp6BfaoJ6QTnigpFv525bqtMgn4yrzeGWL4D69JX7bHZWt4D8tmh1",
  "key9": "2qRQReFAwvL4DJGeeUTf71iXjoyHq6BorpSud9AMpvZik13mR8Lfyf2LpoFidoQruiMRYRGAwrQUwjsxjqNUPm4w",
  "key10": "4PdsQ83dgZHyQ28MVhNHqv6ziVoQsaUERBKEJWAwqa6QX99niu1wjMnBS3JEUC4PadD15dSq6dMEh75HJyeMXRSd",
  "key11": "2hCQX4wbjSZoWm43KDm3eJkg8QzKqF1bCi7feqYLDv5jf4g8Lgkow8EhjWyyo3962W3ps8mZfkaneRp8u4vgF2iF",
  "key12": "66RuZs3MydgwTdP8Ma19sYckRXtCW6xAou7GbMPN79dmhCAKxDv93dEY5gdvantvPGNw6xh96uiow2dSfJUEKBPt",
  "key13": "5p5hz814L1qR7LrM1v8bvXSALRtK5wgN8iJc53NZtrFmeeK9hornmd4QsZLDFfH9yZ4r9t8gNNjN5FJLcoMcuqmT",
  "key14": "558eN6XCVwiaDPKEPNPSMpniM9n1sEFhnNWFXALCfKeWK4pPJbrj7ZtzPhREZbjdJqry81JNt8G3o5SPiUiKNyer",
  "key15": "2URQUeJMJWeLc2ewUzsfLaNLyYEBNoac7r6Fa6id4owhk5bSfu1ueWAjqsJmFXNUyC22jrTw93UVZzrr3duo1YZq",
  "key16": "2WxSWpqBPen8KRxcTUFFdPuDkFgCy93Vxapn51ak6p4usBeLMF64V1Gpw1qp6W6ruHbPbuBAcw1wmd5oxxpdT1BP",
  "key17": "dCy2p4YakDXvN3jJTf1E4XwqWidXDbWZWSX6FZ3WZ3VwRSah1DR9HWi1nCtd7Nj9jupf3KwMYL64imDbxQSXvbe",
  "key18": "JRDbayy6khw8BM2XSzULQ3xMex7Dv7vUVddw6PGjdCmxZ4Er91fzCojMXTYsmtUbC6ZtMDoE11261TgQr3Roi3R",
  "key19": "2RY1iHvwjyQC3H3QJEu1r5wZG6eKTTV7C14jyU7d5LnFMMv6rmHrRjWkGSHStZG8sNyvazSkKjasE1Azzsj8fV7p",
  "key20": "4Fk9kPV3DCS1T8u927U9Mf7wasTJWiGEn93sn7eoV1iZzLdbHteb49zefC9trqRSFszcwGYr2mXGteRgsRFSogzT",
  "key21": "v92QXDh1ANvfQijRZ6diCsJc4hG8QJGFvrDRFrpRSRanKkCAnV6d7q4Bvea7ayeRf6XPuJcrWrQsDdcEtagknum",
  "key22": "41YoKxVRMK26qDvBG1kDvePsXUUnH7KNuzLrnvE6yugE8hP5zuNL8KsP8Nx9xFP3h2RfiijCHqF3NL5q76CBTYMA",
  "key23": "38vZHbTyoTXDeGWKRfbdQPJsofnvZp5GvFZzs7dWHpTyetUetR8X71y2qteMmPajNoA9RDzAc8ySs23qKBct9h6v",
  "key24": "re5pkBKDXa9WgruyABToCrWzU3ByhHDpSD6kXo6caxCiDhKNoD1NTsxkUeU2eEok6kz5LVwqjVZJuUWZX7UWbSi",
  "key25": "ouadGQcgoAPd45FCbj11djqa58RSze1WCkQZtkxANmNFhDLZu4nHMv5AT2M5egVb4AsBtGQLc2EVuYCCbyW3Yn5",
  "key26": "MnA5tFviwuqnkmXp511CKQQtVkzrms7wa5aVyoGJTBepaQse5f8hGqAbj4eTnxKz9eihADdPwm2ejZ62aVZYGR7"
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
