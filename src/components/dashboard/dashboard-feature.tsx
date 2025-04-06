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
    "4pyhPbEVsUSYYkJhYFC66NjwRj56Yf7TRtSdQXEq7dUkv389j92ECUrBiq2UYZcMmL8n2r9HkqoEJi4645DPwx4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E78xYHDNakdDCc18r2mkGgXTgSKNgQ3fQMZH5wWjdx9SL95sn4jz16kzJnpGPoM9EGvZMxgHqX2GnA4n8iK8owz",
  "key1": "5UBbDgie63s2jhAiFb8XevZCXovYAGGMkxanq62TxLxzHxpNUbbgWbo2YCyyMNVg8M95sHDJfEKwh8NopzHaamrB",
  "key2": "3GA3nUnvVHRh56adPxYph2DWNhdE5XnzKbz9APJV4enAzqDxadgXSLUXLVeYP27313TAQPUj6yVKTf54Wm9RSYfW",
  "key3": "SpDC91uwLoudhiT3N5MfK6R1zmQS1nETZXfMRsVRi8TgX3WUEeL8U2oDqy7WQUVHwUr8yuhTwuY9EXKgn4ddPab",
  "key4": "2fRHpkiAK6f2aLqqadf7PjQXkhKMN2HkRLc9bWNYuJEGxuJ84xFGcWAEgf656ckMwjDvHLo67z2XYbhAgvGgUkWc",
  "key5": "53xnh4hsLGXHoKbMngzKcQvAFEbcXfoJuwEd2jBVh6uCY5Gx1sLL3ev9g7ZE3at2EpGeGW8iFferBVXMrjSWVprz",
  "key6": "3UvZiQ7itXqo7zSszuhZBNq6XNhTCtwPEksJxJwcompupUQsNVh6HMdARszXFRhk3vbALcbQ7SxdfHoTgMUErfKV",
  "key7": "61Pyb9VrhrtUdK5s3qKvs2D96Ejyua4BdK6TyJq58sQPnUvevybbu1djRCzBNFmcPjEMCc7P35UCdgbN3jupnCXz",
  "key8": "54fzCRknT3wsFQjfa3jZRqQSFtxjeZNgdJC6yhVcn1KJWB5G2mccMsJhdfssd62ZCFLKgJmazhvVh7CM3sVYSrKi",
  "key9": "oA9vnjYVZLajvWPYSSvapq4qgK9QjQJXnpaEBTy6zVkR5hewnfGXNZYX2T5UkjN3kheo8Y2wRJqSNNyBgNJR6rF",
  "key10": "4ZS8fwfurZgTzzhkY955uYEN5rGpjSxW4rH6iy9XH5NzbWFKHQVXDuAKnbQa5WhZkMgsRmXnFHq9riDZDEZxp8Cc",
  "key11": "pxfwNkJMuxQj1V5QerGnLW52auoVJEtZPyycjapr25R66dMsmZJJp6kMSJG9hApjJnZt42tc3hL9vY2ubi9EJnk",
  "key12": "3B9hafEZQE7pJz3eSck1RNP9AAWZKkKoDkLT19rfkZVJEMsqfWcH4mqAxuAbtHqCsUjsWMsWzWZKAHEgVgJayW8L",
  "key13": "3DQoPuzcfxdepoyfEzwp7usj4K3iMKhoADdQkZoQPDqMrhmeeZxdcmPHkXCW9mGkQmMY4MJVLb85hgfoyaisN9en",
  "key14": "5NMGv78iDdZv5fbq7jhUVGtPb3u8L3mSXD5iQKJtyHn3hYxwQUL3ATupMAdFRxgHq22ibSFa9sMiN96igZ3B3SfA",
  "key15": "23tKvnJxMchKD4MCAN2KvKgotjdRFFpAhFST9AGnwiEAu2FjRtkBTue4qPuH9c8gHGNr7vomQTbGpru3968GPi9Z",
  "key16": "qG9YwdRPCJeuUX8HWe2v1CkP8TU5v5mqCTrejwjBoafzbtKpcWmShBsudkiXv554me5WvoCoyAias1Q8rbCSfkf",
  "key17": "3g2rBmaWPqTos9LrDqXeuXPThTqcuvUsCzo9zLxUQngdytChgX2d1x1cdvnNzLKfs2uUk4XzDoS8AT7Bh9MV8s9L",
  "key18": "56zDaTFtXAcFB8YXQRhJmKnv424B9gWbG8hDpWL68nxDSCQvNdPAQbmE5V4DUSQf1uyms15Dm7fyvTUJQhAVAUHn",
  "key19": "5tLZdbcVtiQszcdDvFWB8q8Ukyy9bdcMtbmQD8DbfUypq688cgdtMmCjye1A6VHaCBXxfAAJuYjSzmirxZkLypbS",
  "key20": "3n6tXyRsQHosT4ksfX223iXtC9okgsVafENSiL9aNsY7o6FyVXTvtct2exyZvZp1npVM1RB52cvJwUvejjPKRq4K",
  "key21": "2vVHMjG4QipBHCXVVchrho2cjvZ8Yf2siP7p49JWu4YDqdmkQg9Bjz7Vq8uc8d53qqNcMLJAi8qBLRDbGYcrLXkf",
  "key22": "TPjPuwUudD9g33TZBjGQu3judHcMYaCqRoEqw1nVVjQV68LFUGwhszw788zuszXhgMMyLtuNj9NYmsHhXWVLaRS",
  "key23": "UXcN4c5Bj99PyPr6oq77n9yCzasXLprudsPJR1ziebQWXJDaSWWRP3vKVARMmGCTt83xcjDZLcxcoW7MnwBjXvZ",
  "key24": "63on7dzSr2WeM2mQBGjJZiKXbRrDTVHwWtMvHh6dVu6Tu7RKZZCgVpnvPRXjgQD48pKfK8hKaFX8WyqtnRaChSbG",
  "key25": "cz5EWDwdTG2NQCoj6UXBFu7NzVyQnpTjmjudZTHw7WpQ4m7qghoJhCj94tux5Mk7sxJa5rTEwfpiZrckhwmfECY",
  "key26": "3TMEAvd1jpKhMrJK3xKHwKZ6BGa9G4UwM35H98odC3t8ipw5zRDByn338xRpaLXU2uKffqzqf3BqVDKBKSBVcGHu",
  "key27": "Tr6FA8nhHu4aZL4FER6h2PuJ8STVGDPV4xKbS6bLUPvCK8KMXkMRVa9VN14vn9xXtUZsZsBPbtqsJ3Lk54ihu8f",
  "key28": "p4ozrFTMotS7fzgpzH7guga91PbVNixztvMVYkCrj23op2muTxBJ8deW8wRibwpQzLD3DSiJGXabpxwv6Hiytfm",
  "key29": "4nqAc9716qjaqdQYHtkY7vDpFPfA1fgHrZwmby7hUhyYn6fvkEvW1Ue6HvMcYJRLbhDd3v8Ga4QwU6d13Wvad3Vj",
  "key30": "5zTN43xYCLRpVEZrMEeXXChn1m2nhmrzmGpZqkvfU7sie8JB94CArUzqcesLsGr8RTGvnruQrzDTRdQTgchXjEgF",
  "key31": "3cv7YgrH9bPZjjUfMBmKhmmLi5Jw3R7UCNaskfy6oeDGtk6eP99eYz3Di2HNUctNR1zTLZimyPVrfJjXmLmHh8CU"
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
