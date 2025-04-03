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
    "4LEah7aWrr1M6RZ7XJfWCYbpsykfwhyNjMC7UgcAYyCQGsKApMrqzVNscvy5nCfRS5cV8NtfXNHBgaQrzUDMRPoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VRTmZTPT5cf2GX6aZFs1BZbpzb5mAs4mdPHvWHKWSMG5rqcEZ69TK7eDZDWaNA6Lnomou8UTBpDRQhZR6tcaqZ",
  "key1": "4Xz1tTFKNhZG64r3j8Zt1mUtNYCA5eBpF6JdUBoqFbGgor8geso8MtvV7n2iDJvCFR4a5XXCUxF7geQzrTY9ZJQ1",
  "key2": "4bSnvHGmb2S6eJUPk8NbvUYB4wR5VvmYy7ydRRpCc5SF2E6KkQuz65TvKdnYYgm8NxqsnAeUfAQ7UNw2powgk36K",
  "key3": "5BwDBrdc2QsgBeFyvec8U6YqccX794fp4iEa291UyQrjbPLyJi6S2XJF6ZKJMfCNp5n1QgRg6eKBrf5ySYscMQRd",
  "key4": "4SFGNcprBqpjxnwVRXkvGrZV35LregMKtfBMquC1wgEjw8Y9SdHPYhSZDsUyZT9rpZhBoMM7dJKkBXmsjVQXcPuB",
  "key5": "21dphSb58AMojZ5MqUn4yJZDeXGB3LVt6i7svKqgCU1Z9sesVxw3LhHACLLnNFJGWCEcoxqBMn1kt4S7MA6mqDvR",
  "key6": "3UoqaykG84rsLBNFFocHpYnk5fTv4W4V9Kcp24DdEVoF7PHiffoqJ8VZtV3xfmjWGjBiEste51WidTKxtqyjAgV6",
  "key7": "3ucksA7LcUZ4CFTxQm96uh1UaFfbDi2vC46LnhYtX3SzU93CqWeHhwSzxh8x3vyYhEmjY4H94q7BkgkyDL7HQQ23",
  "key8": "5PPATcLSoQnkcLZPjYXn4YuQnnMX6MvqhqfeATYUVfYz1eBm5z9ZMyaGfUpBHfvsSNLJs787zTTPjbjcAeYygPBd",
  "key9": "3WEW1nu3atxSMZCNRQeTFwz73srT59KosvC85zXbQbuoGr1zgW1kjeqwSNFQ4XKebVxLWP9tt66fe5CQE6FZhevS",
  "key10": "3gmW3Di5naGvvyaXu4vLX68aZbTUcGeLHGuwccmdeDyYbAprpmqxE3mbYBcCGtkgoZoxCmpTPuZJ5HwrkCKPB3Mv",
  "key11": "4L3X6H17Ns5i6AHZ2EkrYTpyJxjJuyF3nMPKxXF3QnEeUgHCDxA1gCYkFTR9NsFUJXQmPJfgCCWwGA53cwJaTddu",
  "key12": "54GkTPGZuaFkmALZZxQq1CZFFD15suZYWymhxDr1GhanQHUWeJR6g2xH9kifW6cvdCV6Vek7oHPQshQvtS8W83Ae",
  "key13": "25gqj6yWiiuNEyQA9LKeQ4dYpWbjceBzvmjDcnUy4pmPSiWCzHjXZMutTKuoNAbfcwUh1UupB9z8GAdmW1Vmr2xC",
  "key14": "2jDap98S9fP5c66H9eVER4KGL2616Fg8jzT7nPowsWvAsNxJwx85e87MLZeq7aG1azi7AcTbsd2MvuEArKNidRUo",
  "key15": "2bjjMxjT2AMdHW4K9nBVbgTwuxVLh4KBjnQabDAgtniT9es9sWULx1bxNchGP5djfpcinsrPvSzTbvFgkZvC1KJu",
  "key16": "35t3QqiT6eF8Sm29ZHJKw7VQDPFMKu8amHvVPJCUHQeWWHXqgY9qCvkPL27417bagfGGa8MAPx6q1MQTgtJGyXv5",
  "key17": "4v7RhZCwiXhy9wpPXjJeppDDHGJYfyfon3FYRPJjhPLPs3dksqU76ZTMMrvzU78YPP88V8di8wSwhWiBrVfHuEyj",
  "key18": "2Y7tJB39pAohzgJRNrP6Jt41A97o4pfK98Z3gFTxShNWLVXAMjx6z1jyNzYrmj3qpmNmrYRg98MAyVG3ccgLubZ4",
  "key19": "a5NDpZqEEfQ6S43Dk1dJ718Ej1rCrWzRcWvF2u5nbHx8UWDt3WSrqfWtU9esQ8UvKnCPASYyj8r2UAYzjYj2aQ4",
  "key20": "5P3551VDUq4mvjbjr6vPdqLDSubt2XktJsSKJ5JEgKvYFxQMFtsLwTrgaA2xR5d1WEV9YsqVCfsrbjDu25pMgXCR",
  "key21": "4FjEWaY85Muyoxe376bXwkjAqHpbSM1eaQvnHrFR2WfgmbfizqEfxX5MhVgPgGkiUm3U6jZ5PLJtMkkG6iRBYxhV",
  "key22": "4Vn2Evt9KbibGgrQLoXKv9KQMCf27RseVEHHi6bLEFJACDCkjhzrUDN8pSshhcR4B3CQBPvqA64R4Z85rgugDH1a",
  "key23": "4pnoYvTKfn2HWsywPSeA3Gwb3Dv9jxVpJxD9vY4Vw4Vt41TAvcVeq6UzfUfv8YSb6c4bGynNR1uzRHdV4tNTTFmx",
  "key24": "52wz4GnYUxrAao54Cb329ZZY2pVh2C6Vzmvk7CBacWr5WoqTtTTNKb56C6g91QGmh2Y25S6UixExgYQVCfxHR2AH",
  "key25": "2feKPaiDEXFMYdcxWRMqNAGj3MGMAWEiTq55Z6FJbn5bWKiggH87Q7WCTdk58D2XtmTeQprN22LiaccmVYcdPxdv",
  "key26": "4W2dfLa4rLE9KNNLfdS8KX4VpN9Uhx1M1LDHd36S78DF3fuPeJVDUH3nNT3BLUSfaJ1K6A35ZoQfv9KcJnmHozeY",
  "key27": "5ctnKtBvWcN8uZAE9ZKVo9e2oFZWWtrcLpUfdC2XUEC7jfzMucgGsUCpgwS9vP6rhCwCNhjHRoXKVpCKFXsypt8b",
  "key28": "3ub9WUi2AragDM1Xc8BU6qmjURK1YLPyCzGtHLf73P34f2nSMP7oBoND9ih51WZr7EunH4gWrNdDD4dqeMdwZ3wb",
  "key29": "5oW3StnpPdC9iSUNpQ6rBgeE73zXw6M91x1tP3KFJ2A9PYhDUTxMNhMHayPCG9UyNdAvQBqdn7wEyt5HkAQRpJBB",
  "key30": "46NyXdyM9MMLjDTQgDDcDHtGY1aJKyb7NAVyJqyUmcy7gYPgbxZummXuw3V95dV8DYCjD4ra2orNdXQ4iqPDv9dh",
  "key31": "3uzN2PMEGinfqoDUB2BgSmBcLgUT65rWSqcn4R9bRmzwNpN4McBUBtv1yUN21Ew9R6Qrm1nYBnMLZRG27C5XH4TC",
  "key32": "3qL5AUtZKq5PgmBcM59E1KU2Kr9WX9EshfcNXsh5L557bxh97i7G2cw9Aja6zJ1Hg3qu4pVmo59rDhApsYT5Pv2s",
  "key33": "47QcNwvbCuovbsXxjEscUd9S3ftEunTEYgWVx6R1RyiyVGDiEyRUXz5Gnq8xefCusdvV118vBrh8LvzvmxqU5QLh",
  "key34": "2aHijrw61hjJEwjGa31oovsvhCg46pko6wE3WykUYvwwPXoVXfaf6goTcCfbRWtXcpVmYD9mKFLAP6jffGRXTkwh",
  "key35": "TVZCqb3Q3MHpqumgNBQFnQhVHs7Dj8sAYpxx1DVVTkYgSYgHiLWrNrvvqWZXUaVPPypv57nrAQXWgb4EH3HzKuR",
  "key36": "4fcUV2u1EqTwpq8g6EXwGHiaQdXjYEfz3n5ERg3q6dQg4H9zszguwb9XY5o9SJ3zneeaMMCMhwKzPgyxg57NMt4d",
  "key37": "674f2ueYUobhxVh6tCAq9cz9x9NCJxn1ywY3Kz3u8iGUWuk62dKVjizBrPbKRbWbW1tcq8gVMZ1iK7xmRLbZYXLw",
  "key38": "4fPJ5yY4HiohexTrrad5ECdvFqb5rnxDYP94UrX2z6sbwLBmW2Da5j84MhmaGXYVPJjQYWfGnrvgh84e8PvKj3nC",
  "key39": "3mbNqiDfK51o18HuPS7dbmyJgmCXHx6HDdrgTS93J5WrDWmLEVMqaSJUsAuTzbA59qUhqoWQhvyjKP2SujMLr8Vh",
  "key40": "5o5LjNzjzGAZsauemkPGre6SyuXGw76kT1WudKpg5jQQtVWNfCvQkEP1DT4Z3MfQGRd7zPQS88eVHf8omj5EYY7",
  "key41": "3QAx1gL9VGZiH1VheowKuvFDMZsH2mYDceW3pmU2CbaLdVEaVTn56x3Epp9uTw7sncFEvby6NJy1MHwMREvH9JQt",
  "key42": "5sRnPrPiNnt7EsoKQbyXZmeUGgetjrZS8bEvrcNao39qmX1cCN6oudzCcZNBvXKkxHGas5z4VXMEaSwAiiHyMhD2",
  "key43": "3GuvM45GZ8nt6bGU9JubDDRiLZhx7BskxBbcD3L86rmApwUxjDyNiweSiKCirpsjMBiiL19qSuALpPGCmv369BM",
  "key44": "28ZM6s1dYvMM1Fvjv7HWhrVVcyDwNpuzZU14ta3UW94BiWMJwx7hUkkYHrTG36mJYvS6E8SA5gahjwKo2n2BvheH",
  "key45": "tQLn3eNFTUww9iuLAz9oHMcyhqy8D5xtq3fyvRpXQKXYftXPJvvjRf61kgfphTHngFGz1R4cagBbxXe4EkCECjB"
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
