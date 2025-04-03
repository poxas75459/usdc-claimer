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
    "4Kw4NX4r8i2F614Py6SiZqMcWM2DbTpCiLC4ktrarTr2uVtuMQXwr94zfeDZ6zczsYTNfDb8qx69eVLLP19WRsek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ln7arQZYqCU2DRoisHjeo2ew7fcXtFWn37DejJNWrmWFSzE41uqNTYFnDdYiWMufdja6P5Uz9WzW9LCiTFJx8re",
  "key1": "3hXkWURxH78oNFHHfno2tBQwzkNb77MYXULZA3TydviNwkVxiTRauiNRwGxYrBEyGeMSDyKZNGnUjVPrTgXkFqwU",
  "key2": "5nACjA8MurjzQYuDqtHi5JXDh5zdFWzGxMwUQauv9Kcg3MS6PT1VmfxPuWAvYmzWsMsQ9PQrrKRkdDi9SbSP8Xr2",
  "key3": "4bZWgcTxK7Yvb2FBA5ZnMkV5mMaeRWr87AhiTcbj2T6QWKnzXkvJK1JWAwt3ofRzFtRioj4w4Xd4kF8Rxvtqfg2i",
  "key4": "ymdZQWCEoXjky5cNLv6jjpm1PtwtwwtM8Y6BNNBig7xPP1Kiuc6wHotR57zoAQBnV3CTUWWovBDZZSVNZs86aWY",
  "key5": "3CCUVPB316dMmjaCP6SmNt2PJ4ncUkcDHTc2x6TgTjFrbpFz6aFzoDKqi6G8C1KioBvQkbD4gbCrpDfpjxRhrPmP",
  "key6": "4DPyUSKBg5zFawVf3HAckz6v4AEKhcRkc9hm9w6JYoLmrKBGb9Z5vu8WJUZCKMLVforh4zC8StY23yBprnDVTaUz",
  "key7": "PZMF7YnrJQuk5t4KsxYd2MRZkcELKVeYKJ6kmN5vFMTqhTXFDDuR1m5xhQXtU8XrupQuVtNJzLUbgmw1L9vprAq",
  "key8": "39mYqHKwqH3uTbFCRy1QZHWRBjpHeSw9Q4kaXWShD95VSaWrg5Rumsfe1ZjmUG3KKcsLpDiWpFXhGem5c1qAd17y",
  "key9": "PArYeHJi5AderXLgnuQLEyaZv6fjT84zsWRMVuKA7vfJGyDHpZhdAji8yRCx27xwMM9rbDwYsYVgiEtLiMTTMx7",
  "key10": "2CYSNnWevKE78yZEmtQLU6ZV3H19JkRsnxJM3XL4gTeppsEF7vL2oGDM2fiGS4hKYiakZgzpfGHCLgF4LjTe7jTv",
  "key11": "58U46fBDGHGf69X4hgv3rzXWzEbZGaDcn8JaSvFrXSzza61KgQbNZ8yw5xavPCDBQedemGddYwr2Ht33URSguWPr",
  "key12": "5exWY69Qqi8G7y3wVcA226khjjeW35pqv5XBjARLLQeD9vRGp92DqySs39WUcmhTDf7sQB5ZzVxpVrdNy7cwV825",
  "key13": "32wkYwFBW2hDC3UNBkNNx1rgzSxRxbG6R5mZxGtshpYmyiPqfWy7FU3Kk1Z5q4uag8CxUoBuMYMagevxiC21cG2g",
  "key14": "4AGesh86uFzk3vRNjQZ4efd4xY28tAybC2hkfpB4hQpyuQM2Bdgo7vkqU3o6maaQFasHLDMje2pSY1QBEW8wXR1z",
  "key15": "5z3W6C2xGe7nZUbMJsES45ZWPKRUpJjhoUwhGqYhxLpR8ZLRTAZXpJtajq8U74JfeaZCaTNqyEwMoHSHnVMKhzbY",
  "key16": "2zgX694mT2Ub6GydFerpjCJGjtC8eDVaESAXAKTkmeRgkK68xE5frWomTYAugtCjy3tXik5BTwygrCsFX4eNr4BR",
  "key17": "4QMnuic6fez7vqBCbaTaRz5WtkyMDhFT1C9wUEHWvc3mZUqUsAiBXoYeWYuf2kfDuwysGcFm5rRdSykEtDWWJ8Cv",
  "key18": "4crBvQ5gDoeBk3sbLBeH97sDSXAERCR5TfEins5Hazusgc3SLq2pcPL2hGn5o3yqpxnJtX2nqRNT6yisEq7w5eXU",
  "key19": "4XGiEyLnYvTGMVTyRReMCtc1zyPU8rVaixvYDpPvUzHLGHDNLR682HKkcRzqcEDW8R762RAKMW4nGqY1Nhzraxwx",
  "key20": "3Yxqn5kurkVyJkPYz8LDU8Jdw6V5g9qc5z6TKCKUXz1WhGr2cu8US29C2z3R65mwCYD8GLppP2VmrsnFxzFJ9UDh",
  "key21": "3jcyQ6JAP5y96ozhkmpDmFE2kofa2ZGVprFHYAoaW6wodEk8pPYzV8LgprQScUbRgnP3zfkXBXmBCBFBAG62GVwU",
  "key22": "2dLaWSVDPttp9Td8wxZDRY3tkBfve1N3QKfdLVjAhgsTkEGFFwyuZ2jzG9zdzT2iTcRk1PMvFuPXHxh6aoXp172B",
  "key23": "5bMbmokPgaCEJfShYdm8eeePbozHuB7Tqv9KnumoYvKGdBxL8qF5uaWrC2Wty8NvWYCAHpiWVhXxZJikuyZoeRhF",
  "key24": "3kvR6e4C8qeXbeuhiUvw9E4MrJfV3YB4JoLBf7avKEF5ytEqojZ9wVz1syrQsWwo8JaNUjJEyASEX3SF3FxXSMgk",
  "key25": "upHLuXQtPW4bAUYXbX4Mhnpa7GbHA7sZrhPRzCgo8cSBkCvwLK7ArZqy6vmPi87eKixrsWjkREzpiHpmSmFKX8z",
  "key26": "WaKzj8jh57LfkxcPK3wkfbVHWXmMmt6eAF9bsjKmkMfug3Hj29DPPhJ2fpqzE4g2w5aSB4eSMJkkPEEmHqWdmvJ",
  "key27": "nXGLi8fjxMPTb2FRAXJCR3Xpp9LVvzx6djimmsVjr5Hsw2PC3B8N597FS9QsRXpQJuKmuJYAAQfqJZDmTfnY1Vd",
  "key28": "sAyNu9PVcr99gs7kvLgmEzq1CqpcuJxc37dZUGafkPaCxaXTUENttB2iFh38sfB9yGFTgHxg5tHvsuJKvw5HTKS",
  "key29": "4iLcViPWE14qnnqWCbzgZhrQK71ZKorTq31FYAYX5jqBicRQfRUqf5X13o8tuFBCEeJjwV7k2G4v3mKEGMJ5vNsn",
  "key30": "2pBhf5uotDcc62FfUJ8nbvctpHaTy9RRUwCszjf58RAYZVi4gSzNqR8JNxDBMTgxM1PsPnqKNHneu9zuyDJaZ75b",
  "key31": "3421cq7WVMPeeh9xQNGLAKTCoqx8eCndoa4WZYfKqK6hWvTZiL3RJ9XzUTPkAcfnfq7X2as5jNPp6TVHkUnWytw1",
  "key32": "ikV1TznbeY14UFc6LGMWVpASZ3CoQoaSRoxGp12YB2BqQCUgLA1BeX3yZ7cXVurE69UR94h2Sgx7WJGa5Rd6d5X",
  "key33": "4gRfCCrb1c9JwHnPzmZAyNJ757VXNn8ST1pmh9uX2sgk66FGmg4qptoUWRA1jJE9utiRKVBuUgPVQW2hNwTBYvzF"
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
