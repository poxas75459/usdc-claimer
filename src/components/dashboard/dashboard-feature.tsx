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
    "48hp3EkxuhpXE4Cyizf9jpXkTDmE9VtvhKP97uoixnUbzrCeJxSGiutpriWwjHVwXWtX5GQ2pBtWTeedPSjgcP7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GDASBRaMZyr5ekcHPmmj2s2nm6cyVhaJNv8UTYmiv8UDhqBu213CSTsZoDmECgREAviiP47ThetdieDYxPS9H8f",
  "key1": "4rhdLJ759fWdVtheS9WuxSnvFFkxRbXHyHrFdWTvQT5JtDpYdTmSLYBSXbJSvN5Bw8hf5GP5sS73mXKoPWjwzpb4",
  "key2": "4p32HCR4vZLUtAjDLFjpLusJsTrDhRWjZ6Un9C8uLs7cuAxAx2df4Ydo6KF5JYr92KaCHsFPnBP1qqRLa2aRyMqt",
  "key3": "54E1jmqMqXDZiXGxQPaRgrHyWjYfh1aTjcSyeUXHSfEFfCXy7EmC3kSgDk5789ZoAEh3VjSNwv2KZFe34cZmXRFE",
  "key4": "5oH9GCmq7xqoafAg3fRQ8YqHbohUsekAiGzT27TBqsojgFN5mmL8Y59r24aDUxfFBNrAA64Jrhj9VF7oTBRdh1A4",
  "key5": "uxWmPQ2DE6vzM9Jrrme2ihYefTUosCdcovu6FXc6Px2hCtGLLgGYZ4Pxz5jkDwzHiJAB6NFmXaDcfphsAve4Lzq",
  "key6": "2T46KMvweyQppSZDCZnYHnL5gqfz6BrBgf6FXjoSZA3stbpAUYqfvt3zWeWHsvHvVw7FAYyotEQurwLudjbUaaEn",
  "key7": "4Evf8w5ZXfe8aeFAXfP54zkoc7CuXhgkFS6t34B9NzYn3KaxCWknAbwHEy5vTYqCkYH8pe2yxvNnkhU4nBC2XQw6",
  "key8": "5jtucAVZsPWJYEmB4FkMbzNezCVNfNWdWMZLZ4eu3mMhpJgiEGEuEgeEiFZhkYWueBhQGt3HaeBZ5ymUMQRTej7F",
  "key9": "2SCrWWeqiCp7MgpK6P27ARRdoFnX29dC5gcBZCaycewYWuZ435nCLtsJrdXsFvAMZrXSpYVLLRJvK78VfxvZixbN",
  "key10": "3d8x4bDMcxFnNaH5pPd1nZKeuihs1Y1PHZDYM3BsuYBZuQFvj7xqzt4fwxBJAR9C1tM8fte9aEzyXJ7tZ3ZrNUhA",
  "key11": "67kKxy844sweiTVrPXa6sikGMhMLoBbHUaUc7vn3P6hWfGNs4jszF7FtVhhcwVUtgWamX6YChfA9d8bmEdJAfNLb",
  "key12": "2kGYHJwE6MqfK5BVpJGsmKXxw1t1fhiBzTZJD2qhLxrZXLo326aRDfPCxagH9T9vnHtNMb1aBv5y8yuFJUgnNSp2",
  "key13": "S9atyhprTW7haAZfZm6xKE1xFJtFMac7DaGpVRCiB4un1i9U9FQXf1f7DCpVWw6rmQkAv5TX73jKra5AjfjdHrx",
  "key14": "3n4gNZA9WkSGBMooV3B9ABbrU8H3iXhepYHE2xQn9G4ek18v2eHo5MNNqhmr6KXxLgQEhQmzQfceA267TJnmjBs2",
  "key15": "4VeiuLq74WdweTDh3qTvXLd1GSdkQGwGhbVbP2TzHa6LiqBAvJWskEV2W5QMR49PMrSK5mM35KJLobYW2oShLaW8",
  "key16": "36LedgZKL28uppCXpkPfQBXynMz2DFwjHz6LMuXCTY36myJHifY8xKuzrmsHhdUxCtgusNuMBf95nZN2xWHMMyE6",
  "key17": "4y9v1KGtuU8xUC2Qpt6AoDUVwVhKBPepgTprXzvfR4zQuy8oih6jqNzEaxjar6SadrqSJPTjM1Vtx5pBTQsgmzoS",
  "key18": "5yYqAXLbbHeVBEQFYq3tBWiJPean5SP5tNtXMSQqJ2jARRwmGEuRvqgqKBc6AKdnoNyG8NBgrbev1D1zAx2BhaCN",
  "key19": "3kuzW74eZ4caV7XykxzTuhYXvKXbxUDDK9MyWx7HYCptuhvMwb8WVbZPm3yGbDaMDAjK4RbeRscu5YFxWaGUGNhC",
  "key20": "2t2XnjMVSJHGEt21rttuTSzRGYT5KhbLrubCeMyqGDi7MHDPGzYHXa7B6cf2SyXbisD9nb6z4fERVtHdvcpEXzLK",
  "key21": "4UwdVW2FcCgxyoq3ECDs47GCn2T4BWDsYBoqZw6Cj2BaqQoGHZC96WVSpjJ7Z1c329M1ooG3vPr6udHNBg7X9tKi",
  "key22": "DgX3oyWrCXppSmJ7q9wuidcocvS42tXksivEVv7MV3X4jBiZWNQbHZFk8B3FFkmXo4L24tkviet6okrGZdWXvHD",
  "key23": "2gtBY85Nm1azJ2E1CqoYwC7DecCpqnZVkSKryJ3gYSN4kxUZnsiHA58dPA8DHt3ryNVERy6KcZSJpq79owmp5NiL",
  "key24": "2h8W1dvUYQLKNwMkqAHsVRhSDfVaJvvEMVAKKNpZJbb8CQXAMfJErfCTYHHgLcJUJeDU339jnFUaeyvwaLfiwYvb",
  "key25": "3xpEyN7sqtpHCUtwkDexLhq7Pynu2pVpDnVSK9RVTwsFVfRiZ162BFWyucSanQfcrbDKyqYjBHjzL84F8xCxFKx2",
  "key26": "416Wc4HtjHn5eVqPe8mhh4PmeEkEvKFN1skig1MidBsWvrPdRiGgy8Y9TChLqihfk16cBiUhfYnMTsVVnGUvPe24",
  "key27": "3pzMK9VyDXqjGAos8M7zocbrd4gRAG15Rdu1mE5vjvF1egvHvxKamXF7BqE1UqdZuUL8zFB8919QNg21AseraDAt"
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
