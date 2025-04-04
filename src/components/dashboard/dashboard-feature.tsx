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
    "cT5NKUmFQKtifFqd8uDez8xi2nk8UFEfhhTDzW7dASG4r4N7q4DyENjY9aSLwCzCgmKTa9w19ACpT4GKNJBq8ZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5oXQSgBJKnkoB1kio9uy2hSi9k4rhdtsDiot8s4jKsTHKKQGFNzksREkyBb3VytXdTgWCjXfe7uRcz2Zbn5nn6",
  "key1": "bsoiWSLmYLEzp21QJbwKKqhHdoTVK3zUqYyfUtm5Z4KoZ6ERX943RbaBGfD1qF3nHBbRf9JBrjmFGK5KViF435c",
  "key2": "37L4uRSNxkW6Ln9cKuNm2nw8MoeDQhU2MbkP8bwPwHe3x1Gdt5qQh7bqFfAYWFKicXub5waciZhuRUmxkaACHQTi",
  "key3": "qMhuUsrg3EmxHoHhxdaVN6dVYrg16XRvPVCxfrj2zNrApGVS1kUpFnihFVp8SDqZDPr6pThNp7CDuVLafvTPb2u",
  "key4": "3aDK2Q8rDrXam1aFcBFNBaNdzHT3ytLqi6SKdhtY71iQrSjJJWr3Etuq4SdgHthYKmtyCFsxAX4rbXuz5F5heZax",
  "key5": "64sACjHCBN1Ww8kQPXjiQUEMqqSPKDnHiZrK9B8ppUR9VDJgBLLUjwrUBrnEWr4vbfACrTBMHgeGSm18yECSsSWJ",
  "key6": "4YecFV44HCs88SQ64aUuLriFS4QaYRMxFJCKTA1cRjw5xGo2ZRF4zE9qJPz3TNubDhaXTFAMqsvxDdZMn1V6Uhav",
  "key7": "4Rg6f6Q6eUHJeooeTfiAkD4qoxA9MN2TUr8bo5dWDzVEZvW29f5yzm3mVH7jC4YXFpGJr3pqH1sT28Q63HdYE2xK",
  "key8": "5EF5XAJHM6pTNfaWXSS4XZfeMBcZ5TLvkzekkD8BtPnhJ2uZTwrQTjAQTRQW6yz6G6RYJHa4mJGh5w2Xmz61CJmx",
  "key9": "BTbZ4TKzRPK7KFWhcCuKPw2vdfdSy4PfRq8ebKyr9xHsCCecPcz7pqYwP1MywQZ4aYgh12aetDq2gpK7mgVYwij",
  "key10": "2eALAUs1tet6WBEMqZ8pEBcmZqoFPkJUDQkQaQAW2bhjVrkgtpERtCwubz5RadVYnTBM8QTwCNHCt2fNm2Xsri4p",
  "key11": "4WaAWtzVPWKAfKo6jWBubjgsBz2UJL1GEVHtPf6o84Zhmg19DQyd5j16jaK41JbuG7ZbPawoSDUjZeTvUM51PjSx",
  "key12": "KG21bqobVyCxB3iRzTFn1EYUiYUNvs8n4UmxxNezJRw4D4mYdWmBGhp9aaXXwRSgWXfuhipf4DTW7dNHiFkPPUe",
  "key13": "41PMkAXEQ1kgpvbbvNmmduWneHfqDZ4XT8jdcXqSBfiVsE4cWmbvhCb7GXkb827Ke4NAunUAdoLcnkxq7CxUoD6d",
  "key14": "R6UM3mVjA9GudhmBpRGvKyvLhV8H3RtgHfz1jUP3ooY7XzPhZDa9f8BDKwqmQQAct2UTEUocMP7HjqhaJ6NaTU5",
  "key15": "yA1W7ygtWUBBZEBaGxYcerSp2Bk8hXhreJ8DT7sAn3kSUWgVdmmyvN5cDkg7EMrEfe9kKB4FTvtE8Kgq5r9vcSo",
  "key16": "5ptmaADBYzJqmVyEdoahwS5PFzY2hPe4GnREdVQ6UkSp2KDT3wBThmq2y7eSeyZZ7F7ReGXA86G57khgZDx3LaUp",
  "key17": "2yrQQDjLto7pg5xhVnfYvevAb64PWAqFkpDrZR8tLfqQPRayQzoSTeNBbQznELX7izrTt9buBRCf4xAc5jYRDiVE",
  "key18": "5K6qdgSTPn88tcDtsKMBa4rMtrsstcSb8kmGhW7rcvPX8YjAVj5FbNfi9Utx1qdNYkyyNwqdz8sT6jvpiCCMQbgn",
  "key19": "2ABXZ59asBQszJPSpeQ6fker2HQ4psNfVu1SnUUQJsDQKVMrG9cnRq1c9Kz9WhrFWMXV6MjETZoS2S2F5CKiPx8M",
  "key20": "4V4iv1WAFBWK6biUhdwwyEkgAwkh4XsFbcjXMXF6goLxLjFKmJhdjx4xjE6GnJ6oKFuX4RRnF2WAvfhpmpwiJhiA",
  "key21": "4JPDPuVPVFR1HNjj9TE5EvGfYm9rUiQkSdBqbuX7YyGZJrZdTTKyByBPT1iGt8Xu9HyYjUM726kyFxe9ju2X6Qsv",
  "key22": "zK2b69mYcYUdV7wa4AeUN7yX9SdzLHqCLUWK3wcUTYWRni2rX8KEwrLvyyQurWN4bVZbH1QStnqJnB2pmUTcHir",
  "key23": "5zvWNqXpUQJsi1NuTD4E16mAeuZm4B3puNCgGgvcWgMHLhqWxxWbm9AxkwGW7fHBH9TyUw7v31sMcTi9mC2zfPrC",
  "key24": "Xdhdbbah9y76KBtTraMMAuMzF9ApfXK7sbYVDwiusyAtntWmWoC6LZ4QUT448HSwySDeQiC2FjXwLjNjr4GLDo1",
  "key25": "2efrsHwpt8TiG2zMqFuQcPoYso1jYk1caAQuCmYaeSQUFCaJTPiWgoLmMaVVBhf5ZE1BQnxVDxcvv9TwJq2qMWLF",
  "key26": "ygoBV1yG4oqAXSDuLQau8bP65AmwARxQxWED7tLRvJAjph11usJG6wVFMviXGiwQVGQP14n9f13cM2CcoRJ52JZ",
  "key27": "4YGamAXThqEeeb9WACpDajaF8SphYqcxieYnQT6mwruvndAc85D8jReCdDDYstdxzxifupzSrqwVSVWihJfEK7wF",
  "key28": "2UPvaDWqhs5w49zAhAgz9MbthXWd8iU4qJeBfNfmnTZntyS4YVr18kQeJ6iFATG8uuw5JsTcdCobZxSz3NNYd66Z",
  "key29": "3SowFqoseDmaXh8dDEr1do2nkPWErX1DCLacxPDLKziNnRVjqQjg71fgyVTMq5DBvfcUUFpy82dNd6vjh4kCmvYb",
  "key30": "3yXoWre6scMwfRMwRWDWzzdACRyssXw9YpS23EvmLx1Xgx6HpbqVWawW1Tj5e2hZkrCTZHsNndSw5hvQEz2enWSW",
  "key31": "2kvtZS6zxFgRQ3qZWozzcPKf2DHeoDkXUfm1GieYED8C9XjPcbhSpumqKFsNR4UNS93LQCuzBK6D66s5DVA33GUH",
  "key32": "NQrBDX1osaJANaXWTZNBmWgsi7aeThvz2L96FNusRtjHyKVERta7njQngwDanGxGKaVtEqvgLpikVPDov8tdgSt",
  "key33": "5BHG8ZdgwR4oAmK2xSWcmZS9aHGJ4hEbYokEfHzddfVo5NqS4KdG3Tdnz7MPPCB5FZYRSuSKnLZUmeWrt48erM7V",
  "key34": "3zDrLzDeuLHD7WsTfx1wmFY6MEx7gvuJHmLmB5f2v2amR9wSKjsxxsmgfCcyHVfHFjHBqhU8AbuN6eBi7Ebd3uNJ",
  "key35": "4qF9dPmgSf692GPrm3bBZGUiYoqXm3zPQ2vxc3DKUGAiiCGbc9RderEXny8b3X5wyJDevG9cTz35Gyh3FbDYvFme",
  "key36": "3HwVpL7LwcXs4vSFjvVM4cR3iLGCFr6DG7x7K6APay3S2QyQNDg3VzwpXgFmSoQBDscdNkqMNy9w7m7RGxoXXkGD",
  "key37": "3aY4RKCEowmvHX1pEP3rSD1PCZwwvDUEpLbMHjmGknEo37BY1GEsZfKgoQctSWg5BkayQHiNJU5aXJzb6WoUUKR6",
  "key38": "mh9FRRLbCpc37UhDNzheGhmj6gqxewmTo6oTU3S9PvAYZKsUJ8DBQBDD2WJbLK3XvG4wAiK5FrKdwAk1xgFLn4W",
  "key39": "26WWFZejjN4YUUnppdFo76fX551TEV3HB7c742ybZ7NBfgMguYjmXu1BnzVpoCFHMLDvyo8B4mFXPK4Qjqo5W229"
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
