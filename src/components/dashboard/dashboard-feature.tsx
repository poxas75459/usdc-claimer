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
    "367AHXPWaDvzJrVwAja8srzL3EZRs82m7RrnihHCWY97NFC8qck1mXF221dSoxYg8pK991RWZ7tdMnmNhVgttp6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vHdmHLwAcksiYXhkN3KurcjmU8M7kP49L2hejLTvJH1TgTvK9y2W8DLJT2DvTTLjmYa9UzsNMPHeANDjLBZYASE",
  "key1": "2en2os7onmCGC7TiDkqQninvJCc67uiY6oEugBk4dnZNACeCHrXaBgLySzaZeSYHcWRboDBQy63xD7TVHirXyzhx",
  "key2": "5dv8vqSPp2V23Wy3buATc765RU5yJ8XswUDh6wvsfb9rSYNYwdHrkpci86ZZ2SmeEDK3P7Ke9DzQ7JAMh2B8tXZD",
  "key3": "23pqSQ2FaP8Ka7zMpvhXhnUwwkdYtGHNmznnJ2sAVJTtTY3BeUG218EvhAxWo8cza5PJtnD8GDJYAJufdKatmYfk",
  "key4": "2z76igy7XbB1tKa9CfzwHWMd97d5UQxGAaw2xqFtA52wttzwtneN7jFbKSi3S4TamJRuPvC8vXT2VkujQZ38EEm7",
  "key5": "3iRcxNq7qsjWWEQm6B7KhCJS9wfxLEBChyHLNhABFTazu18NysahGPUvqpWUdVef48bmFzfD1LYHvgKfSD2FDUbR",
  "key6": "3tSHj6Mp6tvDciR8q8nGxU5nWVpmGEfypdp5WDsuuKQzzfca9WL6djny8aL6dTC8GCmVgYhnQMLnAV78UsGsWoUP",
  "key7": "5BZ1EvDXksxVz9WpR6iUtpo8baVoNCXLXnZmNebLMSxgP58Be1oic5EhSX4wgbwmQmLq4pkdZba3e1wUKEGni1az",
  "key8": "4c2ZfWNDF2yaSdcFZv9AutDpjJe7LVFkTXRj3pv6KbH5pt1YZEPb5LUhf7d6YzeNJd6kGzF5pXicsrFgMVXtd9M3",
  "key9": "mV9bbu6uGoeesHYaYrt9GSaMET5BfdD48YiM2xsqQWxzjTwXW3GWS2fAaosHhY4Zxis1aPG4uymp3p1LGcKShRS",
  "key10": "4sSzQV1AsDpDMjHf7A7a7dHSRDv8dN4ka1UxXtakwoxgZAfXsVtijGzootNjBo8B1bqyRwnNCT1R9pk7YJQrcbWf",
  "key11": "5tyNVtELBEwLgoHNQ81zxhmYxvRuabZ7SeGFKSKhqf7yWZrLX696cm8FcdRuuKj3tBKeeWxeSi8pXgx9jsQKtgtn",
  "key12": "4u81a96biiaTxmbat4GRthEJRitoTW9SoQAmwe26gSASNYyZxPsiAACPMF3a8yxWw65UiFyv6mUEKfykJa66ENpL",
  "key13": "VXX4HRZtF1cJb9fQYEK8RSPUubjCD73qNFKYPBr2menwiy5Q6ug6R39WuB6uEhmVjjyzosTU2zw65NJR56y5Xc9",
  "key14": "hfmD33LZfAmoKrMoPnnHV2yzcyGUz9JZttGbe3e5wa19eqgRf3ai4AaffGEcUHkqjRTRHNRU2rMZyDhqvDFUYSo",
  "key15": "5jxZ5uGSJdFnj16ytQucGX69b3ToFraQpgA2j84itTEhZBER6E2XYmae36Jjhe8fJLQCVCBH2hoVie9ffsAJB5rt",
  "key16": "XGAhPwwNfUbAKkwuoSMjmrH31LKuAJ1KEWa2Ro2qzPHnhTJhQvX2kEzHvZgVyi1avjtxZjwEhvKWHFWFbfNyvwE",
  "key17": "5dNdGYgw9eBubg12E9WeaszB2hSgyziceNkc155AAqw5YZuQjfQYQ3HibvTQ5ntBVXGqC73z3yQxWHkqDaiXXf7a",
  "key18": "4GuFY3xHRfviTz1t89uazApAs57UUqUGthJsqwPNHse2ydhZxvgnwNGTn3hnXg9S9bb2BEAb3P1S1n7CSSEusytd",
  "key19": "RH96sM4qh2c8ck9wp1G47ucmFV3JhQF43mj3zqNghZzzicibnCTQqojqQMVKqLUbfiNQspmAovbdzBs84S8gM2g",
  "key20": "3Qn8AKtsjLVfxQhqpp2Y8djTKnad8TmGnGYXpUgGaZfg2bkqoqk1yotR1FZ2rGG8HaEBak7aRWAjHixFUzDbFrxC",
  "key21": "45BymVGHNVoTBAu1tAUFLrT5Ke5SUzsJdzj219HyEWgVZLkNQFHVvo3SkDeeU7AwYQmK3kgMgpyrcsPThfNbY3zL",
  "key22": "4gkT7E76XRVLGkjP9SaQrx8gnCxXYaUXyWdf2eNBkckW1Cc4u4hrNBucAyeU3UU5cfSpEk5nLMjckX319wiqkPt5",
  "key23": "4vJB1g6SXA93BhLTccqe8QaDs9KQ4bak7mf1nr8998BFRT2SvTikSxxCzRGL3GP8cLr3yhnDucagwor8xYkeSwY9",
  "key24": "VehEU8pdcf36pVPbXVKcHE1b6pP6FZERQzDr4mLdGE9wRZryxqFz2JjXKQhKGYQgKQHcLZs5DcDQhBGLGXL7qkG",
  "key25": "4fssre4j1HwzA5o32Um5MnZ9kycG5a4VpMZSEXr7Jyhn6BBhkYbzkEQ2hGMeTSFV3y9tuwTFmrWQFHJxaEXd2aKt",
  "key26": "ZpuUfEmjAHo1jibKMZ1FLvYDDEFAVgcXyRhjabwhzwMt9ftDZygYqpCwTd62vafCMTH87Hnb7UVJHijZopYs5we",
  "key27": "37nZ5odTJK9o4nhDh9MtkxfkMbRDibBQh5zQkDNrq4n6exgNoAg63drWCRPwByaFH8VPTnswGWPdkFQ2UknBYmj2",
  "key28": "677f3c8AQB3YTXcLXwqihpDYG2whqU9MTjrein93Q22ZWS548EmE6t6vg8Zf4Gu468vAXzGYfAu2opbgxkdfpo3y",
  "key29": "4KUSJr6KC6HjBBAnjLqCD5Jw89nvQLmRZspe5qc1RrpeMYVXSJi9p4eLkvCS3ZmTs9gZKyVds9nhVUgTDYdQ5SjV",
  "key30": "5rS3nbLzVoCVmAvPo2pwezFaNTx4AQTLjwZXTBMgq3khq7mbaZukGmWRqGGQE6HRAcXgwhPXAWS24iB6ACHBipyj",
  "key31": "bCC1UMrZz6VbWGkQZsfLvobeHK7ACyz85c9fgZDNWRSNzvvrS1UuXHd9PQNUKKmyYNhGP9LPCbqad7eTQXKMZbK",
  "key32": "qa4haMTysNBunzYqVhK5zmE4iMSKgMcKtCzkCW7e8n93a642A7otPbQWjDBLzWRvs8jC555eanzX69i7r3aQPSH",
  "key33": "4jUM3zcAZcS56s2inWuNpCCr2Mz89iLLi9c432zEH684mhDuKDwTKUj6mdkqwVH1R6uEc3c7RJBFV29gbVUKf5ge",
  "key34": "2twZTw1hCHemqxqXzFcPEijpCBafRM34AKqwKxo75355bXCxNrJZwzDTtMLGFcrMMcgVSdgx7hzmzs2VcXKzgvTf",
  "key35": "5mjevXtEZensDXCbjhStZdzKm6ixWhdVgieTEgjXsuPigZoxcoZyxHehVNTZ39L1xtwv4cMSm9LJqM68agN4S9x9",
  "key36": "23mpHwChPabX2oUPtWcjLUNq94NcPUkkiyQ4DFnttVNFyYcTpkcLumLbtitRuQmYKbhGWhZHvNCxp3DY31TZGm2m",
  "key37": "5YePyreP5ueAbj1Q7882Tde1HfEnsFwc5Df6SvG1eJmcYihGKek3hWz6cTt8upAjbhfYNSLJuPUXkMMvD7VeUMsw",
  "key38": "4sgevbksQZ6NcjabPCGbT7NFM729ehzW4ErdL9yeozwmHqE8Yb2Fe4yiwQkHPFf3dgELWHxfyrMnQpFHSGFmjGv9",
  "key39": "2YeWwWRNxs3cQXZsVBSPMJDCG3ZKbzPEd5ZfFpcn4VoCXyVyH3UBazrVMgJhxtqr5DCydbR3EAnHkwcr5wx16CVp",
  "key40": "9gG39KTvJiB1F3HMie9bhpmJrbw8XTCpzJy8LqJsTDNXfT2FXhm3qZTTEsrDpvQJGr3Q729GQPvEGNPb71F9dmx",
  "key41": "23cAn3cqqsdp9FXRxwvZsWeggjYiNSVfdquGqcnfxP6LxfF3KnqjrhzJgHyHwbFef1VE2h45ANztYEYr8vV7WV6D"
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
