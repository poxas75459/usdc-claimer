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
    "4HQ3ExmoW6pcRdwP9ysLA1VzeKHzHWRv2YrDRy4UGU2Ybvt8RFrYs5mxPafwodKvuxTiNPaiuD4BJSDKbo4tyXXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PtaDdK1Qg3ggRXx1MvCcaw1mPhMf86XkfGCo5b1jBq7EJVpZoFVrbArxT2VSruU3rXUBSvXJtLw1Q65xvRx22Yn",
  "key1": "3AHYwubpFTMVJQN3fYpebJrK9Ck5Sxuj3tMEchALhLwBhBAZVE88N4ydSomPHjGVx46RfV8fjUFg3jLCCkYWTpiA",
  "key2": "5i4VRn8MR75f7uWSsAvGeXkMpeFbWeR2CgHtLTEjUi3jbZdwxvhAB7y7QoX3ekuuvqkDpHf2VtfMcYD4zTUQAEcV",
  "key3": "28g2tToF5YBJFBe1DNixzPKU1wGEXtAVCi4DWWs4RmkNqbhA6YLVxGaRCKx929vuUNtQANSNciLidFFQo6U5143p",
  "key4": "2eE1VzGGa1yXYEycD18kFgXL4uTyPm2AnL6TdP22pzS2nHifJ3Q5dZpKyyqZNP5WchaEfqxhAa2oMNHBLra7ZkBK",
  "key5": "4Hptmazt2GcB8Ktw8uuEyy6aqLRh1JSWnRGVNgeisi4qxTQbokMpLXa7JBpB9Gpcuye7DqnkkZLH9kLX587VScsg",
  "key6": "4WGEe3UpAhreQXyxFwmpfkjZ6VTNKSfffs5zA7gKBqM68bHa5ZEhHqGsqH6PJapAzywgjGKgxejFWiToMCny2yw3",
  "key7": "7FemT1n86o4Fs3iP6FDADqmTVqMDYYB62ShVTVSWAcbAgAJS23DW1MaGSHeBUqeUfKuGUXrjWVGh7mZuNqR8WxY",
  "key8": "3MQrobiuJ4meNU8rM9UUnZmDe9fBKNVW5E8xBBsSYEfsVQ5XRuLqMsFtbAVN5Yt7mGn9werz7U4cTo7vYbSnMuVe",
  "key9": "3VCQ2Re8mgzVUdKHThZMXCqnmvSqHA7bQR1CLLBHTzFQaEsp2AqFzEBBSz9WgA73GSRNkunKNSt9Y8nUbvumQr3p",
  "key10": "4Sj22syZLGwjJYrhjLMJYnuMKSkU7NYLkWQZs3LYwFTKggiNfADWPVpBfJmaa2yGtQqAFyQUmBBxBgd6GJWpqyjx",
  "key11": "5pwhXNG5J8WJfsaTpWfenBF6JVqoDnyPFUNQo1tv7wJasiRJtuYjG2DcUePF45gcxJMKmKkWSL7DqqdtiSW7KgYS",
  "key12": "247ds5rb59wxReBXrj5njkQhHf1TgR1QYctwghPJF8aoxqfMuUadV7BwYPcyRNSdpDhs3FmNVBVbgPLuuJQF76vk",
  "key13": "48vJ4K8HdcBwhydvdNXFP5VoLhwTMtUBuPYRaBLcT88eVhCRzpeAN4QyRch9GBVd5h6zE6csTZqeUTuKieL5aXq",
  "key14": "5sf5vxxuza36xZkbbmSGNPadMUdnc2QRk7MBdBJkEMAgaC5bdjApznqHwkgiFk9MDYHfnG8V9eJndH8iCNCVw87m",
  "key15": "FMMJPpdQr9Y1cyjXsRHJcNd9Xee6oFA2Cwj9WSc8Li8Mh7T24ccZehvMSphs4LQ2aerqLtXJ9QM1PVRwL5LaSt6",
  "key16": "61WtApEoRuoz8ijmtrMmJ3c7gSZAeKB1SFG82g6ar2Tuq1yJwMAKJvNT6rcCDibu7iRzEKb7p2xijXizMe5MFHu7",
  "key17": "zMCqoQGEMSaT5PfdCyzaJecDz6A2HKTKUF9Gaw9Te7Rrf9NTthAwmrcEv1Ws5DdcyFMjBhUDSCbVuJR6rVPBb85",
  "key18": "ummsPJFimQcVaetvcXkFcBXJ7uu38YCbA3qitBeSM8BjkE7ju5EQhzG3A4FbJuyDHVQxKmSfNDJ5NwZHj2SNKUu",
  "key19": "4TyYgJb3RrGWpAAZXN2ZGTd7RXDTvPLH8fWAoiTUv2g4Zupn9jwkBMiaMVD4jsHtyr71CZBtcbMtg7dTyzSz33am",
  "key20": "2qt82jSw9VrmzkGUKcgZEqWSeVCuku8jm8N8wi8Lokdfn4x7CvNhPuYHePKcxWQAqL17zTn9ZF9t7Q461gtWyXw3",
  "key21": "636Aun5TGuAgwyu18sEMzqpDGFT95QR4aZANybTqCA3EF8PjRCbbTdGB7SgWXL7RN29xCWKqN6hswRfhcPxNptfJ",
  "key22": "2NaUv7NhJNCKkL3vqzbVrTMHt14decPAzU83ynV8hvNVwE6pBnKDnZkR56oVyTv3x6SXkWoiA11cKtifbydwuYf5",
  "key23": "2FGqjkfwPdAmms3WD4XGWQUZ24oLPJUagPyrKoK3EYbw6Wh9RewvwR1TWRuUwWpNWBcvpsrnobQQYaGHr1jhsEjU",
  "key24": "5Chwcizdd6DDE8io6FMyuAZPMYuwrpKpP1SGn5i6yTZ7P8x6duza6RG22PHcW4JcxG7SHsQYZPd293EGHXae7WvX",
  "key25": "3SCiP8uwNaBW8m4XtpREHRcW6vp8JSJVMBFUw7LgxgGTjXSNzcAgLUwyLP2WvKpWs7cpSaF1qUsSXUEESbiP7kFC",
  "key26": "3FVMJ6dcwLscwTUjAvfZmgoBVHcKs5AsQrCgvs5LgzhptPpT97Cyfp8fBqTwZXHUoWbkhhzjheJfw8UviLiBGgn1",
  "key27": "24S3xSaCiVyW1TkcH7ULn1oos6r681uoiH7h5J8zYytELzgFJQ2LwbMcsop7rsLY7SGbnq7K7tXw3fggrBaqB4BS",
  "key28": "2hmDfFHvPLNpttpLNhm7QFqRLn8v9RstbHS5X1TfhRXjd7bvzZUeXAUnuYD4ywmCoBRv5YksavN6ZezmCtcJdXxL",
  "key29": "3n8rp4BVMCJcUP8RLSd1655tHcMTHMRpRNVVks67BgLYmst9apeWDCaaq4McrxFdVxd8hTQ6kk9UXFBMbVxHDdeU",
  "key30": "4yereS3ejcVJea8FwUwmTNdWJXLWbesJRSfQ4D8craUpRs3NbkHmcExgLwD78dp6SdTB9xUcFeMPcQdL4SF51tWV"
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
