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
    "3JfTHwcbDLanXzjjY6WPQN4amNC4nmaukDSkWqGMKpRCJ1Xa7U7pLX4kjNuLVbEvhxYQRMvCar5sHQ9PQQyCUkMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46i2Pzd6jEZAb58iknP2oaRAMY9wKVesKKdwobucPSC7N3rhTBAXKYVabMZ5sZYN1hbT2idLRY1Ubi5FxXmHGnWZ",
  "key1": "56r5ikEyTr6gyV8KCEMaexTmL7itvV4zp17dcnFecLA9FAPTYDqvYdKcSrTweeiQqBTLTrScuThLFYTaz48gptYj",
  "key2": "45ZAZAGsx1fWoDr7KP44B5PoYGR7UAP67zERMZ6zU1by2EhdhPi6WTW8nKvRC38DHUpM1e2wcevkHs8z16FeqNxj",
  "key3": "62rYcxt6GJJ3atnFfHwVpX3dtd3pJ16zCgEaA6S6FS9mqPpeh9ChbWHwKHWnK9h69tsyAgrgmqzKJXsWDrYmmrX5",
  "key4": "439WNAwhjCzESCXjDrZWWZs8czPGCeTj4fymcGjryLDka5gQ8w21nQPybRtT73ijT8spEXHmGYkEdt9wCyayFp3",
  "key5": "62CY1KPNzjS1iEu2p8DvFAZEvNjaxEex6A4Pzb8jrR5PBzdmscYybJ4oiV9Gxh2VPr5rsiWUBLYGpXEcvynnfdEA",
  "key6": "535qEUc8yqni4tM6nLPPoDJim6PsM1Er7UbrRmQFfsqyRcXQWJF7i7xTHNquJ7ALKsEH1LvnqHVLbGZ2ANDWTFLM",
  "key7": "5n2Xr7AmPeA3jzKPJnLsNX96cZKxawc8JU8gfQsj34S9m8izvyA1LbuzvkuGZYVZyarGSXR24CZX1jPu8RbE4s4s",
  "key8": "55yKxj4ka7QVdgpLBhfw58cHQsU7YVFFggVKv4MVqcPMKviUKVZJfBuhgfeDef3DovNvtCU7ugHahHHcL4mznyCw",
  "key9": "36oKeN18rPqnXYh3ZJ9pnFBEMmZRfia1AGELEQHivRPp2brH9TMim8ZxZ9EMYvnmeH2oh5JNUnAjcz8MXwX5Xktb",
  "key10": "2jZe7QcVj1xRCUkVLouHFDik6cuZrF3GmGwdtBC4P2NYZCkYsTV1E1qC3Cu63aSLcgxtj5wLeiW2n8bmAzq6piYT",
  "key11": "6T21Ytjf7mAiERokK7huVd327Xnv25qfwmH5QLrS4VBNrSG6iYK6phRYhKBGnenXpPpzyrBzc9kdJUHHV7DRVdz",
  "key12": "Fsg9pi6FBBNbzvvo26b9vecAcQ1t1KnGExBs3t6kEwMaSzjCnSxmb6FwbsuQuemXdD4WwG1Y9rMVebZEMoeKfev",
  "key13": "5syNEeeFgmekep4VQM25wFKzD1MijtZPuWS1p6kex5ivZiNYMRwBMKJyrXdSoC2sahbt9ifri4yKy2m3uzAbhfkf",
  "key14": "4YJS4iJsgtdqW1d4dphTxVnKDnShiaMSRcAXxPQSE8wze1KVgrWcA8ABRBP8uDVibhgdbqWgSSiUj64PsCwmecov",
  "key15": "29xgEs8TGQNsfGBtzxMFN8H6ry5QwKT8neoM83D5LtbP4gipocATzRVEQTKCsQGipjG3XqqtVe4okNhmKqQskqg6",
  "key16": "3g5zq1e3KHB8FXnGj34DLZ6Cwved8YU4ARxrPjGrroLY5ycntSxetqNwV1mbT4GjAzNRGhu846BGSSDe9sXDLrg8",
  "key17": "58ZMvK6tBbBVWzUQryTgdUPWiArtKF6duEMFuzPEPMNFGQ3yLeKtKcPouEiQJnwFvhS7aqS6PTjvWPwNmPfP2mG1",
  "key18": "4WBTQcpezryn5Tvqnfy6tf1xcuYBxCLaGNWv8MvkoZ63UXgof5bG7o6Zh1LNpz3KCoQDahmZqPe4vijnKraP7FUa",
  "key19": "5ofddPZ5MoHg8ft4m3Ki46DXGrUBvSVQ7kLfXpGxznzN6tBrxTjpU6eVH4BXFXj1Gxn8ScGG6ctooXi4th69gYuu",
  "key20": "53HAXBhwrHb5oLzk6JD8KoUU7fsFHfPNJoiqgJD837xQ7pYZPKu7hZ6hYs5sswnEuZUJf47S2Xnq8jpctNkAiTe4",
  "key21": "237vXCCtifdCFT4EdScwM6bCS6HeUfes9dFkpRUVCBJhxC3ehByNW3hqCebQMmpMVxTLME9pURcD684ozqi7QUZg",
  "key22": "3cZG5quVbTxnWHVzVyhLSB352n5xnwiKSRmxfEb97YB6y7Dxp7YyvsvjYFrxMWQ5rWZjmBoTvb8HeBpsp7PLCEVE",
  "key23": "HreeqQnuymbNzkwj3jXWn9FqK8Z2UpCGJ1CtEu4wHmBE3HhEb8cQ5p2h7AxpmQTTDkjisNRHsHmKrWG8of5bgep",
  "key24": "4U2cWQenkWZFwbrEVfwBpXsnNHjd4F7GZTnUHwc5u6J9afWEUHtm1qoNfUbAUhJ5PpTtAByRGWMQYHA9gqUc4Eyi",
  "key25": "4vjwvDaqrRGG1sySsjVHRSdLDZHr4mdvozXJs8y6cUYZUHXT2hnVKG3BwiqQbLv7AURgWGywioHxFTwi8yg8H9nU"
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
