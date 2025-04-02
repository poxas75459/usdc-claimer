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
    "5paN5i1FqWw9xdCRfG9c1mE75FD3qWKT944oYrWrJYyw3Aq62SfFbQJ9vzXuMvSk78i3kVf9CvvhVrLmYy7cJrYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVBFez2UNjrLBRvHU1BRiJE2BEzpee4n1N37eDcZVcqgJPN9mg9V6c3XSQzmUWchc2cWCJy2fSdzGsrG1Xg3oCU",
  "key1": "4bCDPzso2NkaNVDqrYGFRtyMmg7R5h7TrEKFtYs6zp58UfJVmJuf3xGfTxP4dhVWWWY1HEv69dVwXzvTZXeyTJrG",
  "key2": "5wTwmU8Wp6XSsNWunWjtdnTscSv1daCSXU4xSqzPrdxXf81BR4HRLBWkfox7ox42d5bAhWKH96pBKkAjdY6PHbXL",
  "key3": "49Mfqd2djikoW8KfBABp77781n8mhVpF8SBc5Se5WQvitHSnP8Du4aDuxaGk1xnEYx81iUiETTz8Mjsb7PvEN4wN",
  "key4": "4M63gXNxHRe3egizn8in8J7AymUsWvyVLqUaxXE1Y1qwHK1TQC4KnxFX8xm2W1eeAXEy7si4bRReocERJMquL3yW",
  "key5": "5HJhnCcYyGGg2xfhd9yesAgQ1yFpjdP2uiaiwbwt7jrQdpAyHNt1q74yMCxSwr5NRJ6nncEJzk5kx7TnzZB15bYo",
  "key6": "apZz2sXdGDVMwQZ3RUwfYjWY9xHWkgUrJbsyGgfYjjCNuKUgsXT6UZZCSoGV8SKMCZeCRS6FMZZ14wqttY3kgUr",
  "key7": "3UxuRvrvaqNwhgi5f4C9FkmgGp9e7wKv488jNLjYZGtQQqJJhiBXHfDEw1Cp3Gk6EFM2QZ4P6nktSSofzja92hYv",
  "key8": "56QDAj4oPPmeBJsXzZnkCMUEuEqBm7bmWFj7D4PyUdXYJq4Mnfr2ZoZrhkokZcX6U6k4Y5q7vFRa5LPk1RHgbRDv",
  "key9": "2Aujx3ULvHEVA4BFZyJ1dohGV1rc6iVzNXe6YBjubZKMK6D9QMoYvMuk7mPAKFgxVUNAonmL2LY9655tGN8kQEap",
  "key10": "Ez2Ss1hmcFUqgEBWHEMBLMztuXKmvA8yccXLa7nUayL522xR3xxyUtvtDFG165PYxyKxCVWkzTkc2wpCMkexcXF",
  "key11": "u3njXdWccbLNVc3wQVaidbPajKZYkgMKDFfEjfPWqhbf6XQEb26c2QRsGpaNoSAvL2dcs9BUSwWk9pUcxxnuUCG",
  "key12": "hP1sgNNbLVaq1UVKnHqZTn5ndsPceg62w2wpn8ysyrmTDYcc2vN5EyPDz7DiAte2eedWv4evdWKXbmKn8YnKmbD",
  "key13": "EYsKBbhX6JbVCfeD7mdpdxugmHDCGnvcRmksJWMnr98ydQuPY7Tb8eXqtoXPG8AYdxVeGDSaH6usUSSjsyHwhoc",
  "key14": "3WKGjaiH2z6w2YP7JrvV3B8qEsxshGmredDw2k7JfF2MQjeNEY4vd3VHrxF3ZviNfbumKi7eL3rDYtPYBER6CHo2",
  "key15": "21jbPQH7tBgveprXSpbsrnURJVZNZ6HMWfvAXc5RdbNByptxkJXkuCZfuwdQjkFxZ5W9Mo53MsjpYHvJ5Uif2E7f",
  "key16": "ZJzmC65sCur5V952k6jBJPu3fBHiSo15peP8Vxx9855QZ4TrqCM3amy85Njg9hJ7HbUKe39DpyT3aMABYw8ApCJ",
  "key17": "5qirBG9DNwxBuHc8YSJxvWPA68sk2rochEFitgiFvsDxiXxYCaXK9Fev1YHSofmZedxHEEzJnvbm51nvdx6DQqDc",
  "key18": "3CP4t5QPTqnjCmwREQsVkcSTx8myfeaoKbpfVsL2BCfRwFYdWzwUPA2uq8fZ9RMFPcAkfv7ugHiNWTQgagqCJfC8",
  "key19": "5mveiaEn91LcjfeYxaAejh3dEXTNYLBxfZkSCFQgA7PPqUTpmSx2C4PsxvKaP6PNoF5uwi6EJ84qqP2RZmF8CAy2",
  "key20": "5sx93FCgQmdPWrDMyG7PK53fppmBPSpJNkr9V6XajJuDpJ28ngo5kV8HHJU2DGxB1U2VQi1bbNPRK9HLBuwR3vy1",
  "key21": "48HJP14uhKCYU9sxqUX3Sa26DPAeg3QZmMVTrWJF4VEagBJDhzqA33rn9s4PcEc8zQ3SeGM32jsPXpy9HhCmVyPh",
  "key22": "52Q8GUHiL5hEpLpZSm1FE1sXLuKp1vsXfSRQ2qMFCrSrRAgfvw4CGnUiK2Mnt5LwhtWWDoE3vneTwJks1kXqhMs6",
  "key23": "5QVJbYEwE1qLuYHZmV2Fk1d8k6nJBRgNPKHogLyjEn4TfMBWvmgqGmnFFgu5Ef2kNcB1ddmrcdKDYwRJjUbTUgjn",
  "key24": "5iZ1K9a3zPi5PrS4oFhNfx1DMQ6pyzfi1AqzUrMycjsLtJwgHXnc48Dq7cHqwpQXYLrmpoEbttsyYYLj3k5cdWXF",
  "key25": "SGS773J1XDwoiRKhCQ5aHNjd5LwNirXLwRQBnjU5gFX1HKnbYf8FTN2Cn49fNsHDaZFHVZAHv3PfoszepzM5McW",
  "key26": "2vvsnireGm2qpjhXBUZwBsUXgtfw2HApG6RbVEayR9bEjfXAGk2bJjQBb6UDbMui3kydmHXuNud1Tjf7whh2eEyk",
  "key27": "v8SDuBTM3umZf3ddKXviFufyCLy8XHjbH79Yz49uZE2iPfjs7MeScD3xDGYSsVGFFK6gNGJE6fouH5nFXvhYPJ1"
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
