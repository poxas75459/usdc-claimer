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
    "AmmKavGhVfFnQzwJRKtqcJUgj1cCRLWBcv4DrtgKM3vARodZxFLwSQc87nDg9uhRCJobQqU26Hb2Zm3cEj3Lvh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jyd7DdY5rHNQcYjzfPF6b7g4TKxmWutb1ANheiQcSsDKN8GH3YQGD4sPjezUZyj3VZXmdy5is8VoNBmie3Uhrno",
  "key1": "AeL2mVEPU1cMfagEU5bdcXxUvfH97ZeWbKLNzbvNABvhK3RfvvmbUxEGEGdo4Hjkk6ihpjmqF1z26k6JBQ5VrBa",
  "key2": "35EvW2J5sgC7V1GU7FXYvW99KEaLuuCF6r1iMKCVREUWdX2DRMJLHrjSz3SwPdVtjXpQ4VAwmVirrLQUrBRoCLwM",
  "key3": "24tYif6dtaJG6wP8LV9WfZJ9ToFgJYoUyZjdyaDrDPsCnDbC1kpFv1mDPzdJBgXyN6xJniRSAi1ukwpvL58ruUgJ",
  "key4": "oppU44pZqEaQ6eX4o8jTJjrwvhempuEM68KYVvWqFHdKqT11qJZ6wzKTGSzddExPpFtzNVkFrSiaukUx16aTMpi",
  "key5": "2a4FwgxhJNGzS7jekk5xDmQCGrV7ibv9zTvVw4LSchGcP8Y2z7yhiyie6WaLouTmEqsnrtGsKVzuCPz5WF4AjaZF",
  "key6": "2dp88q8VvJZcz1MaXK4fMpskMRF4WX1WZin5nQ8R4xTUuN7817QP7QjzAduPdo5Xm1uSjcMExqpNpfpip6JXDHnU",
  "key7": "41wKgrw1YHyejDgMubPj7dUZHMwc9ewFPbFevLMUWmFMRKVS2m2uTQMVnCNDLWGxQcdDprdxY2Mt1Tm727XpSNi7",
  "key8": "4384Wk1bfAM2w4a3iQMoRkmJu3mBHy2SKwU41zmmnZGBfUPQYDtXdzux9MS2wDLJDbgccQsUi9aj2J7YG8ad1pCt",
  "key9": "2J3BdtnoxhS3u5GKwcZFfjB1BE8QB9g1CpnGJEgfow7BpxtvE6CQy6EdiJwKQwHJM1h61zQa9ofcS4ShXgdCboF3",
  "key10": "3sPPBLXSCRcrJrmhCP9gufasDqTyRfTosgyq4D1HxjdvTmYp3gYXYjrrm7oJwn6fNzFkc7RBT7Nh21Jd456zAeVA",
  "key11": "5K4vNMtZQLBTSYk1oYAtsA2zZb5KTgTmWUew4axUYTKsnhrAFYHMhdyDNWsif4RM4NDZs29JmT8bdVkhqi2eC9iF",
  "key12": "5GTPgnhx13beJcQX4rhN2idvHg9dkhttoTkGan7u5wjrvSLrXQp4F7zwKbbaLDpM5KTjgHSfh88LpFQygXAC4wHr",
  "key13": "5Ze54kFRArsZWUyTE6BqpfxEca8v7taZPKP7ww8bdXcoAfb9dB4WnXRrK4nQmn9fEJ971EZ8ovzdSWU2MmcrxcEv",
  "key14": "5hHb5uri5CX1q5xEmiBmeNE1tdL1vW1pHs5FQx1xngZWgke87jx9st7ZygSZwhat4H38gZdRM7DqbLus45Tv29o",
  "key15": "2s6i9ukY2tPMvzX3CZTaYU38xCpWzXNA4A6ZWt1HoRWpmocZf98UMWyoG2WZotLr84cxYQAXFy5ptT2ZvAV3tNgB",
  "key16": "3bX1i7Bjq6XtSHuV6qthhEGykbZ6j5v2ykXiRVuhZHtv2sYScKpSZ478Bmy6NACayoNTdbjdd4qSouqrxWx295hd",
  "key17": "4dQuwhy8GVFTwZgE6z58MUEzCZK4Gs1H2YPGUERp2bc4kKiN7Z2nxFsrkJVM3homihzpYYNZuCEjweWxHV68b5D3",
  "key18": "4MvxiYZ6qMG3ggeiPTmPwfvMW3EV5J1jxq6VM8WnFrP6pQjFCo5nJkvUsXGBA9orwgck57vJ8XxiDokn6W5KGRzZ",
  "key19": "WzEHL1aqzF1BYP4oDwhh7CcU6Wr2iijBSBg1n8HNE9NXDgC24JgkfoHSp98WLFkhtTdwcN98EaGv7AsBE7CryUB",
  "key20": "2dpsUPeJ9pvrxen3BzRHxMVHQPiJJfu5kNWC1qCwVui9cYjNK96PPn5LDGLcN9WF9vMQjPvkMYXaCfEXSCzVQpc4",
  "key21": "3VHzgxS4KWNiF92SCxsWZLBKN3GKrNfMfEixQzBqrWEnNf824S9pzUrR1t1CGeSfbk33QzzUk8PuG78qUT5LuDBF",
  "key22": "3ZgXn9JPL2Pngus3oeRJd2tvY1bAcXrF88QbRB65NTitaqnfPNki6B1KJG61nAQRBNVdC1jFpCneyjEKsBk2MGJe",
  "key23": "2ysMj4EeBYLFGWh5y2PEyGVFGB1ZYLPsGs2tJ7hm9DvS31nw6s3kkFvkE75TniqYkhEZZ9LoCsEX72B72tV8aqjR",
  "key24": "4SbY1SYM85cX4AazQafY1PWzajzRXSgMt5HCK266me3PxMrtWeCNyPQsjav5jFtqWWrN2BSDSj5eTEdQSA6a4ug1",
  "key25": "3oFcf2CKC8pnQFm8qmRcyn6JcexnsbHx9D99dBYiMvjmwwX4GVLZU1JQ5wpETAE8uEua4V8BnHi7KBDdPKyfrQew",
  "key26": "52xb9TuW53zsd1L87Nt8cfYTsJJoieBGcWrfxAFXZnv3Ebu7KYqncJgj2vtwNWGCdKj2YYy8iEZiHvmJSNyxzKZv",
  "key27": "3ovhHRxsBwi8851zb6z7uJicEWKg6vvWdL2ucLXHGAoLo1NJQ1Cd7LWqbAEMDp4JJRZSpHmG7GmbuA5FjmfUWJPF",
  "key28": "5LWPzSgrfmQci3Ha5UAwFvEER9ja7DqZeYtvxeyZ5Dh75UXth8UpwawjqNctL177mZ4mxQ4cVvRdDuJwP6Tu8t1q",
  "key29": "BvUfCioR9zoBqwHeYFe9ooMEsgCuNE7qWJ3x5UsfXz3CyPRkfaXTDsXGWxK2XXQVCjntK6N2RJkfyt16D3JC3Gk",
  "key30": "2W39Qzmyf2fV8rKvyYniYVNTi6iRfZFJwx1mCv5WuQTpKgEgaWKJwp5p2MCKyZDUPxpQF8H3ZUAjc2pcaA666d44",
  "key31": "2qtDBNFrm9aJVUKY6MAX1i4fJtvbwVpyYcgt5Xi8T8Avdb17Rs38sgZ1yXunn6vCK5yvXHiaXBcJAAEDBGFe2xo4",
  "key32": "21AE6wYxM67LPm1umjaEf7MWMJ3E6mUpSosudkQwf9EC3TYerbMj4B52TBgyBEVFhR57bYyxBxMbyFBk5Y1AVUsb",
  "key33": "5SPVqS7NBXzNF7ZJCTYgBXXLtC7msdNJwkMuW8kYWbLKkUEQAtrCvbnfcRevUBArxoj6SVvoyFvPzuh25DzgmCAQ",
  "key34": "3bQsSf5XvZ5LzTFwHStr2zA7LCawvDZzcrNnyzNs4y8B22cLmWrHZaDzK5hNrNnvkMxJRJyxZ2ad4oRgwybWMNv8",
  "key35": "2ZjjWW9tKG23sMLQEDVNPakJPMkg2LUXEXTjy5Fva5TATqNFJmbr67pY8MbLZs8dQesgbwLR8Y83RQ4XkQhN7QPy",
  "key36": "2KBDNAeJR59hFX8UvC8tH4J72Gn5gkumDhExwTMY7VXfYVuB9Ja6y6wGFjf2G8a416De6VEZg7yaNKwULeJCBPSn",
  "key37": "54WspxZBAdb6VM6JWXjqsrDcFAfmgn1ZQjf7v4TGX5nT7UJ3YQ8P2Cx8Bzry3aXP5XkKey2aTvvGPWqXYJgNicuV",
  "key38": "3s74HeHE3XaLfC1dcoHAQyvWueaaWAaYq1CeqsiHLWVEV8UkjXvc7oXEB9Qr6ANGUy61d29cTYCsoub5jpD3MU8G"
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
