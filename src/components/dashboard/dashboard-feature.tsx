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
    "315VoWeUm7LefABr6nNVdSkPS4byZ4uM9R7r5FZZ1TJTB6C5LTMXBsqFK8wDM5h7eAwAYG8oD6XnZK6yBRjMUhCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DEf3BRMSMyQVH2y6kuuUV4jbdWo1efbLPSZeBgnX5zwFFLdaveFejteDu7Z3WqQnSPGYd8i9piBQ9QrR1KQ44Vd",
  "key1": "3eteNHKhWPz838MAW41FHQLRx7wHEayKsD3LgiB3CeturSQpsfGYi7zQ6wPgrUui6ZSGbfvpa9ToZ791HHZniBzP",
  "key2": "5tMVojJzGuk1H9ZUGpCvZVuQdjHPR1zSxd438kvF66nrMzZ8HiDn3tTX9q8Q4cG5L7MA4whzeKM7CPNK1ostMkWe",
  "key3": "34ZifNFwCvxJWH8KAH4r1WtdWjbuT5F4SHcmiHoSDvayj7XB6joouRekjVj2Mzip9YDoDxCFEdWcbNNivhdWBGRz",
  "key4": "2h2iiK9giv39368nUGXjX6gTLKvmPGjxbDzVgfHddd3oGx7jMtvWCqb3397wVgwY6bD7m7htxpxzTarZLFrMjMRP",
  "key5": "4zfL8jaNajw9V1HbqGGCTLcnaSD6Le9qWQ3zX5RPSG31Y7HzHSRidMQaJ97ZyAWJuX987gi7W7AnsetAHKaXhSP5",
  "key6": "2hhkAhqATCRQjncBHptmurWqYY6f8A83dyZRHkFLS149UeiMwYb9aSZhkXN1BSM94FQ3DuMCBGuaXjsZcK2nN5Xk",
  "key7": "2KP3EMYcqKYmk5sAd2kVw7DWb4prJSnLK28ri2d8Q9zsUF6hs4KLdX3t4UuiqpSFP6EBDfRpxoHz7QjzctXz3fN2",
  "key8": "Zs65i6RyHwmDBbetu2MyPHqDK7GXLJbrHLmjP3n6AEoe7ETyrtovV1aBtsbKpQdR7Nka5yQHQafswmwYasVcjHU",
  "key9": "4NAKsRsd6A7E4yJRhaS1eMERpzTdajfB93DPgXHXb5KxSeC7whow6EnmEedCGaNGXSTYe2ZaKKPCWHmtFNdrtXKb",
  "key10": "51vVVZDMNiXGomL5o4JsF1fdzrH2Eit6QA4ZXzE7DYwPj26URbnk5TGDYEPQeRYBJMxW2QorxGSxFM1LpajcXAJK",
  "key11": "MX6Acn4orzRU3XUFQcZBKbTqekcWAsnVCP2x9gH4aSQhnGNP6GkfFYc8xqEAMa8r8ryXXDKRBjkP6dTSoNuhj99",
  "key12": "5nRDfV5BthqTEiyiywdfd2GtBYuwtBZvH9CFWtsiaiBi7jGhkQWu9UMgcLtQiTYcnvrkF8KjQPQZt8t3F2fWccVY",
  "key13": "2A1Ec4nzJ6VkL25tNpAXR7F9f3mpH97kNPhwtcMi1Ebc6gzVyxuop6ikLbNMXz8DYqCGjCnRqHLrrzJrnAKWX8GC",
  "key14": "3RnP2jyq6Cy7q39fwxyU9sYEYQTth6mM5VQveZt4VSzaf24VGXnFzKnGHPunNcfFjcgNCsYmPnnAPQogzW7c4Fva",
  "key15": "42SKcTGKD2EcpDpP1Ls4qPhi6kNm8gBh5S8AA6BsWoJNFZmAdMXZbKRGFPDU1FoTX3c9Sy748dE18wLKcL4Wu3Ed",
  "key16": "5KVtosTq9jPPP6dF6n4fcgebw7NiywkMTQsCqukUygniJqA7cSpcSB31jwsmHGbiCnLdo7o8TZAnAHWYgcCSbukK",
  "key17": "4QXYfU9z8x4jjDqCM3cAV4kdU6Jov1TVbvKxzrLS9xEfsGUK1w18XsqWJQ1vYGoHhBGXEvo96zRL469wLjbeAxbW",
  "key18": "26NDaAXiK1deEYUhKyTwwGTKBEVkinjVSUh3S7YMKc7oLwEDP1sBBcC5ASzQ3ju6us7D9aP5zZEnahfDvwwfagVn",
  "key19": "2NbbKUbLTnbegEBq4x6tVdFcSD8AygSaFCN5b1irKiTFo5yhRm4F1pYwHtDdDcEL8VTrEuCvZwy4WDqZ5CSsp4TP",
  "key20": "g1D972Q3VADdT9NRTFVKwfRRf7dTxFjFV24QptyhdXLxnCdH7pw9ivgfkyx9dm3ZSJDRxS5ckdawhtkCStG5Y38",
  "key21": "hdkhUmjnqQRE5fcT1YiKZrJLcDM7EvUen7Yt2hLLKp8xJH64wD4dURGWaFm6DPtPrHnnDtzijraP77Xw2q88oEs",
  "key22": "4vRsuZYCKXYeJDQtyy7vi6CDs372kGbn6dQ3GnVFfCVDQeiDe81Ns5Z5ATs958LDAyhM5RpoZ2Bm4KDSWpocRock",
  "key23": "5dCim8j3GvCgCswj4KWY2LY8NRjgY8fc7yByd7yZU54nWjDakFhbXgrD2wknaDh5JUMibR5jh5ngN7b7DUewKW31",
  "key24": "3MwQbGnj49AnW4qH3QLUFitmzpfc7mWnTfTsQnUqDVtESdn4qqGeWwMVFMDmGkp2YQNYLakMUwxaWAjf6QZEocH5",
  "key25": "4bTvQKzfAhcX7ERtyaVZ8xYcbchJJA2pjF6ghwUYmGhgv1wwSCudXDBmuMCUowVH5Mrrh7k4uB8db25Qya6bFti",
  "key26": "2fa32Jrwsb57j9NwnDc92NpcqH7ANVnAYf1aFz1RUbScgCNFkrQUj4CpeV9fA9zT9KwyFcGDNCZakzxifmn4WEGL",
  "key27": "3djoqJkLt3ycRpYi2GKb7kBttv9GrXwKrfpn1vL1iWcK9UdmCeD77ZnYimG34vMLTsi7mKfGtcqBsDYFWDDU3nzV",
  "key28": "4qWkJ1dC8FafWkRo1y3JBAe9iBqJSSgBXXdhaMjgQ1zw9Zx5q3Uvi7TAJuiAyJARsisDKd4fDcmkw94SpaHexUZM",
  "key29": "4iin5nzg6iUqsVHo4N7KPXbhxoUfsNiY9jpiXQUtv1kCYevMi5HixR3PqDY12FEMCEqX5AUmnAPzX4RcYvXpungD",
  "key30": "5JXL8ScT6jBgXPKZCYJvEHSbjMQPujwgQ1LyK7pn8zEK34Z1YR7VH8a9MnChsFrkktUDLCusZKve9MifckDVhwCL",
  "key31": "4v5cEmkMoXsjGeZS9isFVPT7mnDcTySC265b4vQirnZLci4afBXJU5eJjb4mg3c1LgXJRfWgBeLYzuawoDVuF9wS",
  "key32": "2xz4Q2CM4UrjR4oHjuKB5gvNtMQqGKKEqTPpKhZFHBRVGmG6QokwMybzpawmVnvXKs4exGQnEN71U6x86DBF1iSf",
  "key33": "3ryh4irKhWuvXfgXwTuNB2TEpWEEFCSmsQy59PVkX1YMYVLmVYPwfA4AAQh81cXQc8vGNNxrShwrHBt7xXHcaq3h"
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
