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
    "5VJ9cfcvbLkZvhm16A5FZHE6tQAHKzpPVMMyefUvN4KYDEeuiYZqcp8Su3SFrhQaNTkiCvWVitg5SP8WtZgmMipb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EAK6FrJDpGEf9UET4xbEz3LC2qKRbSFciwQAj2yWBMNrVRTpF47hhkYNFQGw1o7hzaqJVcZjSSaJy25zBE3rt1c",
  "key1": "5wpzBfucBrUrEeLP6CQrmu6ALGu32W2Y8fiEEW3QpVvaoVsbhfk5ko2r7VWs8GHuyJinrgk2K8sMBFuQ2UCoi9tM",
  "key2": "s7FfLEiatyiBzZJ9Bs5BJknmRwuQUHo4o3UBrCJvtDwQoedgmVFKDm5sYzb5r2WVNcEToEu8G4LUv9kXqBL9sZK",
  "key3": "pNpwQixPbFcFjZxRdMmat4peBkZiNeRYpR5Xw84KSWMAfYbA4AhTMcUiNgDAWNxCuz3i9wbZ6MFstovRedgnqrM",
  "key4": "3qx9vye16VSJvenaBmoNohCsmpB3tzfzMCmG2pzQh4UG3gWhokQDL36EuFqfhgNeJEU7mcEF5vq8RvwGqmtb6fYA",
  "key5": "289DSo1DCLajnk63UuktBJg8j36n1yCc3xxLtNheSTJNf7MzAaChMPMTqTegrse5ts8rTRG9twXwVE1xJV26gg2d",
  "key6": "3gFQ8z6CRwcCxdsXiiJKaWEFDp1hyT3pYd4r3sGscubqiNsbcMxTKFPSn82JTawUpbwdfVZYf43Wh9TgwfhxLjeH",
  "key7": "5oyjhagXiHA8DYwbNHZYkuzXq2seXbcHEbWJGrsqbsYsXZSkY4YF8s297YuVEMPn94zK94YoRUPizQ7isK4pac6j",
  "key8": "2H85HXyFEXg2m1s3JyLVWuX7sXdqWyMMtRMq29LFNgLbrijX3PP1xr8rFhAW8RbhqPTemwsBjNq5z3jxkVrzdhGc",
  "key9": "63ePasQwDHHPqLBSzUhvFtUkSGburKh7uTcRDncZUSTSe1VeZXNkvSyBWmVGCrEXKYqG2PewduVihVxEB5wzVt9F",
  "key10": "5RoyjzcKnDBENBeGySZEZdRjvmq3t2K5WcTtpLM7nEP9aDjjM4BfyGUiDVwpMBFxD2VsJHPZ7VgQUXQsMH2VQVi9",
  "key11": "cEk5sMRvWVwdWifvKPQrTBgTgqsQr5mD3doeVdM13ddFNrx41o1S2fu2A4ekDuhXhxUmX7Bp1PbZnwMpcLCYDZQ",
  "key12": "54Rqr9qntQqrcSr1WeDjbcCE2xB8VrXtm8VHqHWwTkHajTGKGC29osafVWJRQdfqJYcfF5Eov3uUkoFJwRHDTe3Q",
  "key13": "37e7hiFBEDAXUzMc45wsAVCaMheXMBkqR35dgCFuY2utXmickEhi8auVaoCSQkwAGem5CKNggQX7oSEGtB9JGytc",
  "key14": "5szy4fZjhs8vYMyL5wFa176xGUyq7L6tcVBTcBn91sRfbJiqLUzmdGbkntS7U7WzSQSGWMocLmT5Y2a9bBhft7oF",
  "key15": "4nR7RgLUAMsGgqebHdXtNr5HQdWQpRvSGY6AmB5MgncM4Re4nS3ue9JTk88beZKQu2bmj4NF5S9FbPuCRPHk6vjy",
  "key16": "3njZg7qytGV1xM5E2CedhJmQPULQ1VcQsLaNTecp6JT8RRLV1SdLk47UZJ5LRpAMZJqnoEHGmmTju5oag2aRBNw3",
  "key17": "4Bms2dSprGAGs4AVrEKWivQ7bnoXg1uWixzkGWqKHEu83yXYXpZ7T82XDn42g5fSsnrnbwJdtMFceUaaseyrWmkL",
  "key18": "2gYqgtsPaWKk2bzFtpZfKMMX9VZfrBncSXQvLXR9hur3VFASDtvERNJeCirZpW6vYkEGtSk2seP4UnsH6MTxwUQx",
  "key19": "5NRjxZNjwiCH9BbQXLKxR9bqgnHinjJjCPzCJqvm2FKzNxfZAgNbbKCiLGqo9jzZqQ8ymb3ULACEw5gzHqo2443o",
  "key20": "2Y7iBA3XULHPLS4dbhyi6pEHknyL7zdcugRYDQc9eQpkXcB7TRejjz3YBTyuBUMyNmdaeTnmjTXFVAiS7VL2YHrX",
  "key21": "3bze4vU2LAcBCeSoWcE7tAPadwvjcMPG8t5VSQ6Xq2RhN79beDGQHEcVJhG8ddkyiPCBCxXrn3kS9YvVz6z4zoa8",
  "key22": "4cf1v7GJUahHoY8T2NjU5cV8npYyhHZCA3xgFgihFMzDwJdijF4MEBZK7fkL7cC3rFL9ok2cqooEcHR6MGp8oHc9",
  "key23": "5CTcf6DGEUX7Sucs5NeZny95MqupEMSr67eTzGzwfqDm16TQDy5mmGgT1tr6PVDDNfdCPi8ek8pqmBGa81Ud8kS5",
  "key24": "1fXNTijsnzSbwCB9BZC7RYoD7x3EdixLwiQ4fBiXbT8h9GtFpwzvU5p7xGhL5xQsN4Qx8tVpvCUiaKNV2tXJKer",
  "key25": "5KwfUT3T1k9sEbGuR6LBhvixJrasc8TS9mgpn4WiX2yuirJtnrQLVF3VL7RUsLqt6LRCYQQ9ngJhijzJMv19PFbH",
  "key26": "4vRyB3mPUppHPYyyVwoe5ukUCjn6kLLNfrEGNcbCzFL7a8TTT73oEpXf95WHvyyhST3y8PH3V2UAbL7FkPYvoSJk",
  "key27": "3CRRv95h3pZgoi4dmkMBjW49jzWjYfeV44YQQzbANVTc9nj6aPUpxEGq3viZG7T62nwd4y8qZiysme9kRo47Zj8e",
  "key28": "5hydnf6ZEmHVoyokUwnLS5v4YgJ19X6SBSNBgj9DJPeNuCBTrwpsbFqqFdvSapXCLkuYb5SMN2h3u8gouNGQNTwT",
  "key29": "4zU4VdHZscHXZgPYUv8gyrEbn2tYpeVDF3LNX18JssBMHWHCfMwKTrrPt3u6iSBoddPPW7ZoWXCRR6niLVtd6Ltk",
  "key30": "2VvAnUwaQ8mMESwNZknubxth3JTi3Gk98U8T3nEECsg4hPyMJYpt5fxsZMM52pjSRGWDsTQwGoxDpARgZkr96DFD",
  "key31": "5eoCZqaDQqftHSF6FcJaf4f2Xs51mM1xx7abrRzXvx9aiinePy8D4kdV3pkNdp7Uu63VECFWJRHgb7mvD5osJAXR",
  "key32": "2Ze7YXApBMPxgjNMLZbVwBcdJ2xxUTHFfCrBS3cjfdQDe5QUKJ5Y8wdMjdJTsiGJobGPSUaLyNnwei3fHZaZNXvc",
  "key33": "PY8ffpmcvb7Z8gnLeU16vjHF29yk7PbsQy5JypWWmQzxeCemVhJtG6TMFEzKbdxm91vbNXY8sToDd1xtCNNP5Rr",
  "key34": "2DexVRxEQe92cDKbegL1A3y6jH3WuMtafB9MiSQtzKLjZRJPJe2LmyPRtSvXQLjeWkRx3EAXdUQPY16NsTUqJC4N",
  "key35": "3UWrada1vz7QD4Qx1bLSffD3ezdv185ZAAcDJjNhsLX6rGh3n2SfAgkXWECzg27TnbRTi48zCEmziLdqRRFA1UQS"
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
