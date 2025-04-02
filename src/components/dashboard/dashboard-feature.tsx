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
    "2FJBRnGkzBJb7D9LRMfVUPuMiyZv2FpJ6madDhqsP2xGuFLSPn1PX3UD9ZrwA3TVVNp9yds2HSJ4cbNZGX9tLiia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vc53AGpoLrBSf1RbrVpGbKTMrwEvUXmtAKqbLjEUjrA4SV6QNmLej13ij4TythurryiD6DwiVmftavdbh38TCpU",
  "key1": "3DD6aBsB9sSADpDpLBB1S55g2ngizfLJi8VxEC1HjDaVCZQttjkdC3qMYTVkjNcKh3aHreCdr3aLTQPhYdWKHhui",
  "key2": "2kSoCMXoGHMJMVTBD44oYTv3XAScd2w3Z74iYvj2gtULk6MkjWk6iN7EJbRfFvEk7b1RiFbWJnVwnCLJAjADg1jf",
  "key3": "3t2Z76UAjw4h9nNMPZVdLPThm6MRNtHQTH2x4pwJvPCPoKWofDKYPb9w1EpheWZTGVZPUy8SHfb53fwgM9F7qcFE",
  "key4": "inNAVX94oZj4iYYgRNV7qktCDCzRQrSM2Wk83hmFBZ1hq347yBwhBRhrn1GoYLXqTvxizaFr67N5fR5kqPR8e5G",
  "key5": "59XmdzzskQ9bnBu9PmifSrbF74xVMUxcinGS8uF2wSinMWsAZ7TVzsMjPSGKbF5xdvSqkygAwDkFgNTkaSnLcJCU",
  "key6": "oGgpyf9g4m3SYwh5T7C2qNtHaaDSy8jgSQrYNjxM1mdexeLdmBbYi9HGzzq1CP9T1GK3pW5u2aJsF9M95RKBi95",
  "key7": "4cWrNursN1KzzKBWPUpu9pQwLtkubsyLPtKJ51sm8wNs76du1qbdHonMuAryqGkwiRwrfXTtBZv8Driqw9Ay6p7U",
  "key8": "4qExCmvrVpMgUmoZ1VmwnfmKys3Q4izhB7bMhPELuQm6ecs9YvkEBXhRKqWkwhCJfAfNyRWDQQzWDFWQad1zguiD",
  "key9": "dqt6jyEQ3TYxoy5btVBcqZBFzMwd3XrLwbKs2A5rTfPjeyKKczqz61Zousnp7U2XnNeGsGNmLHHVeKgAd6JzVjF",
  "key10": "5vgwdnzi1soDgbh6j8UxNaXeLB7TXVHNNrGtWtwS34vQmWzyqfWZ529tqbLT3a6wX55MNBj78Bhnnq7c95E8r6EX",
  "key11": "2CER1Vn4fy8jMYzdjKA7iGtzd5YRQs1dubA7hoEuxFSWyvTc2PHVqJ69fvYkkwwbRPwt4CS96xDXJ1AkEi7KTU3X",
  "key12": "5nbwoSobCFYA1LmjVgD7i7ohqX2nmNxaChuLnCvN4ZHZ7eD75TiKZrZuJdPgMBMJCRiPkbz9mY4APXZAKMmrdHvv",
  "key13": "3rKxzTVRYzdYSRj6nQS19J3atgMmKAWFPqacb1JoRxEU6DLmfJvY6BWiX8Y3Q1WFuyhy7ENL4jPQmXBkasSbKBGX",
  "key14": "5KXX58aSFRcRy9gS9EWXXmuxG7xiVxnQn6WSHwmfCazFBwsZVLuBx2kP1vknFZxPU16RfutPBCPSpCeGtFYZ5gzG",
  "key15": "4Vg34MwVZJVaemk1FgNhtfWAavNYdb3TpL6mfFAjhGij7rkMfTPiwBpVnHCgAxfQ1GEkkN1ysuTXhwphhC8yGLTW",
  "key16": "3ArKnzf7oJHtDYa2MoyHqwHzaLqGsb2zTucAzCsVKgmpkp5EV9MUHyeyhT6WknkVEQf6R3hxSqab5ZVZupa66f3j",
  "key17": "5NDt76WWPz3kJgw3yQwxedh6XYM7djn15e6s5NwvAchTWYZswGQLA81DqjKGCM3RnR6v9H2oZGNqKkWpf2A437vb",
  "key18": "5T3yHnrJhsN5FGoKqQR2iDhrRkWLnWTwzkLRgKsAXk8syQ7i6J9C3GRG4cmbu8kDjriLGuPchqYTcfpiRu6NkwNJ",
  "key19": "2tvi2ce7Cb6VjpUDf3SVjBENdUMpgrRPhRuCAvfKXSECPqda1jAyPNcWkiLVfxgo92L8YyrMcdJ9f8b7QrFWRCVq",
  "key20": "451XLZHEK9HYkdAbHk6NfEfda5YwDWxZWvDzodiaDgX242fggAtwaGxSDMHdz8HTjKLTiL79nyC3P9jWpp46kKdv",
  "key21": "pSZqy5wMWL5WwHgVSkqzGPqJvQAJ2ZA8uT6iNcFJ551siJm3i5TBoo4VRZf5ysrs3LS26wLVeQSvfXMEmM4aqsY",
  "key22": "44AXEP4SYAM5xNpfAqW4VRUSa2EUi5oHRESjF19tyZWsPjCUbwhARe2zrNzGLEiNc1Toa4CnPLkoRZUfAEBUqVfm",
  "key23": "5F5mRqRB4on8t9PkgwZx7FASJs6MuEGD5EncDkYGP64gNSpMBqnypfrEssSR9kSHsu7RR3eFjqeLTxS3w9SGiiNN",
  "key24": "AjGCutdfPt7b4miQzkVAmGWWQzpQ9MPtTutAoPRAQenoQuotQbdjMobFJT99mPrzmk3aHzGyiwPmnTLJn1SyyQx",
  "key25": "3Xr43uP5VenbvH9ETWB37RcZGu6kK4afQ4mBumGwqF8HxZZFEL681ir9vGTeio9F3u9QBuBXXGLMLMSwCyktU71E",
  "key26": "Y2GtufsXoEKhLQNaT9eMoVnkAef8DoexbeDa5MBmVeWxt8frRM81LohmswiVeDurkRygqj87gTisdDXXYk9JxC1",
  "key27": "2wwivSsHtiAH4TsYXWVR2Z1CNRcgXKYYzUT4E1CfrDRPWVNe6E9BypCCaQfEP2L91vDBWxZSmaYFYMP36os36ES6",
  "key28": "3zw64XCzR6hS1eqLt9LxjwenAm6iYYKddRyx4tg1wAws5Nf8u3uq8u563sy1y8S8UL1saG2AQwuzqSwYh1XLEUL4",
  "key29": "2hwAzQrr2MjyLwCxqE9b7kUVkogD5rYT77xeBfqJeJ2NoamnSV8avDciDvUbZFZv1jgmjfpRpJZaUVmCrU7NJghP",
  "key30": "2dbZ4ZqeqwBJXuAnoVYQx3H3FWBvN4QxRoR2Ukd9Wum2YYnWR53bTZetWCqDHLUk6FdPamcNgwVXcoVqiQxgVo8E",
  "key31": "2WYmEPana6LZucD1zHsbo5TJbMWAHBqLrcLuYvYuPNNUqJuk9wvajSQiepnygroF4cFSfQWvMJ5xBYu1MEZyDxf1",
  "key32": "v5z8JwwiyPyHpzXMiCczqDkixvbde97RGZ4NDyjzdTDYPBSe92ammf3taKkTqi2EEomeoWwgKhk1YprFiZ6Zdoq",
  "key33": "67jLyE8gkLfPB1sVSz2zzSFJ3FGA7kMXRMs6vktkw66LTykkVV7aQsZZN8bAqdjm8NGJwKALBUgKDgdQVj5GitTs",
  "key34": "K7LymBHdJbmsFauoGFf3LBiqqZuX5r1v8XSfGQKbirFQ6BArMS3CJeUqL4fWYx8Y4ypfKfAU9nv64XGeuEnZqek",
  "key35": "28E5BohnE7kXt4kMZqJtpBt1DvMcujcY5Ev9jTqMZmGBEKs9gJXU9ejTH7x8fUd2YcmVz7wK4cMfCGJM2oz5SKu6",
  "key36": "NEte8wHwqsJe4r15Crx5MRZ2JJjPsiuEX1BLspGDm78nrJrknFrT43vhGscQgM3RGNEusMhpzo49VrJ58u6eq51",
  "key37": "2r58FWT9vWWF45WnaZtpN5d9vfuoSypq8aScvX77Q3rAwijtUtuwumJTrmu8L69zGZ8eQMVEP4MLqhcwbp1UKog",
  "key38": "5JcRjytmJyisqhZAXLWAi3gQjWmym8BXVoS4X3zWwsUo6eagpKyyQmbMn6orzyhkPKMAcdyurZH9Efc7K2bt477E",
  "key39": "pxg36z6VZUjz4XLZpXZWAJ5hNPfSb4xkmHar7WkSn49DmjaoJGgXpqJVDJm67eqAMXcckYSPNADkPucWxPj5XN2"
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
