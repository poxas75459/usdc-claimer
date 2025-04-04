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
    "63kBdgUehFDoXeoR4TpA7AkDX7N5g8xmXqeg5HBXizWNAxj7mUaUc5MdnDDL925WEXqipfzx1hMrRpGuRio5gVZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQVM1upJmJsWBq2RYjLUyr7xzxSVsYqcv2Rt3jUQewAKvPbkoCd9w31zLBEHcZpvne2gMrbF6Fc3czvM2H2v6TA",
  "key1": "3k6S8Vow2qKEN8nissnk5yuWHVMAbLpY3qGrn3vgyzhDL5U88GB8p4Ea8JKFBvtewHMjp8of24FUTmyKUNuGEVXn",
  "key2": "4DVPMZEEfBAyC7tCJ14X6t39bfyMH3DuzeSnBmPpWTmEQyb3iwzKnPPr9LGGRAs5XajnTMUNCZE45PMYCYpsrNjc",
  "key3": "217NAHkSiM4JmbPKyuSkcF6PrRX6uK4aBu733W2mpezqgndJYmgrGfpiAf1aJGDJ7ST9Apy7phNMm5USqoyWifVG",
  "key4": "3cDEWRwuDuM3dVLjdKmZRpeB6D3WQFQHVWZLuWYAviH6m8ecvWoegRX7oLeZMvkttB7q5udTPePPP9NZozRivKMx",
  "key5": "3ek5V4VNPcfEBYdxQRw4G9USk2K4DwGPA7czcWScrtgyUF2hnnHt1nMATAzj6UCL7zGjbbmhe8rU7BPt6ST5uRVa",
  "key6": "5GmAGGuP431ubKyUARdcmsamEjECcMuqwKSDe2xxT69UpQXphEkeFaybAknHbs71WaguYQxPWZeK1gSva5pgtuaw",
  "key7": "3DM9ripCzj2w81wYwAgmgGnpAX2KULjBLw9gTKdDy8iPNmWVUkKWBD7RCL9F1zNiPCaXifT4eW6qqzBjKW28yV2b",
  "key8": "hfxRSeQmMVuDDheqbyKosUJZTmMLvbsCCtjRp71KkoAvcQrBT44V34VYnUncm9dZFzRJx1hZkMKU9MjRtqhuUKH",
  "key9": "3PjaMRELD9spq2rzT8iC7Q1RwWoVRd9sGp8DLWJP5a8B73yVZWHfwFfEcXRqsCFZyAFHWbxuKrrGYUSSvkQvNNEv",
  "key10": "4y8ckrmC3cPy2kxWyMqzgZWJRJrL85mr7NFd8BTVUa65Tz8LYfSPA9pdiNjcszLazP8A3Aejn1BF6dMdqC2GKLcs",
  "key11": "jWgRexWA2V4WX5xPTHtHgcvjiZ3q9gvcwPqHjDczSk3184vGv6M3E5MuLZ37LJsJpXBu6j241fWySKRfGYPkdzj",
  "key12": "95B78MvsTSrW7yL1SCXrhQ7antG3KiLWDkfogg2ijPWF5gvw1ic6xLYUA7egPGaTVgyxUCzE9hA6cjWcCJdx8RV",
  "key13": "4QkCNBWPg932b6sd58x3hxUsr7zpfWXjZtWJkBmt1kMPZrs4SxAL6BU8iuyYtFxt8NK7aRy5ina9MmNUmti9qZk4",
  "key14": "5X4TPht1v9EAgsFj3aUpQo9yFwPevYPf8nrriLvEG9wSkB2YYyRKA29y3y2ELRGp8UZr8ZpdGUUkqAEqH2W4Vf4j",
  "key15": "3PVaXDKh7q5CRGdpLeXx7rHUoR3R9Fe8MpDstX46ZsHpMmfi5gM61TpcFNM69eaD63y1feEhRyAP7pZ36AqAubui",
  "key16": "RZkZy4LrzHz7PCNYKC1mwJmaVCpEnjqBcB98M8HddT9j9NXmkB5ZT8RqJQ42uWFjpfYy7K4iPyb4fLoaFecyHE3",
  "key17": "51oDsrroNkcsw1KeasXEjEemLkcnuhxK9Yh7e3YqXePf8QXMGaUjew2NaqQzN8hKCvvg1Xfc9nkwLhcvw11u4LHF",
  "key18": "4VkJZBguNBZKsMN8yZktEE8AhdWo3JYpQktTURgb8R7PnqiqVHfsR5LDWquLmnjHCVEwVt5MzBniWs3UigeGxu9r",
  "key19": "5MT5noKNVW1ht7K33o7cxFrFmgPM4ZHyNMXYKANCFJd9kkSWoADrkCAvWX9vPAjY47WTJm8fHow81pQLD6JC9yy4",
  "key20": "3vyxManu1PaMYhDgFK9KMtYtXVUHB2steKd9NLR1Wdd4Zb5uHagWZNaPPocsTqqbnWFaHHUHoKDzqibtvWuw5atZ",
  "key21": "28LcJSZ7nYorSQctKsaxePEAnwLuSR4E3XEhwNREMcAUwyFKJh3HGqiEotAKSdrca6HKQscNk369S7juG7UD86H2",
  "key22": "27PBUckETjPtDjiRmcseyUWgTCdCoXA2VJKGb3reXFMZawX8SaXzP8omeBrRLYcFUkgPnW4xAshBczhcUs9MZzat",
  "key23": "3Lctr9mgrYJLkuvramExz9wvKL3qvBasRShWShUqoTjGhvkKUTi6jdUTGKbYmZzkDL8LzB46QYPNqvhqkMXrHd77",
  "key24": "5VZPqqHA4tdbFem6upXiNTEw8V7iqykhB3AcpWiphpi9zcr7srf4xLvvH63hCR6fwQZUiUqoQQDhRWTNfabcLRke",
  "key25": "3z3sPBrXDGxu4ayud6ULgsajCuemJmJmC8phkc8dmKhUQCKFD6yauRwDqHbcKM3P6gAb6ZLYAQd5cV6T2TzPLv5t",
  "key26": "3vovk9w4sbJZm8nhJEK714jt3Aa177UMM2DGH1o5Tr6nT5nEgbCtpejD3BptHwLqiifZw9jxdE7ywGrFo7VBkzXA",
  "key27": "5uMedxFS8Drct3jVwJcAGjaU4t1CfsMQjYtrCKvXPwJhg3C9mZ5CLVANzTvpKrWKiYjudMvMpNhhxd7DAeNCcXsD",
  "key28": "3qJmeUzrNSyDQJXMaXzYQhBG2jC3ZTudkYfHLdPB11LXhmVgVTbaGTpTvXBrJ5dgy2BtvvGE6MUF638HbjQ7uV9W"
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
