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
    "2EZXyW9zMkT4WsUTKawL4y7knreAhV3EdKPfqPGm8YHJVa746CwkyMWGmvxJU6v7rRVGvGmHWqVG2S2w4E4xWN9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jL6sDZgXABUuHBAHfeKqfTRCQY3YNTyTpb3L6i6fAJroKRAdusCp4zzMJZvezjX25Zyi5FShQYRZ38ZKnW48Tqg",
  "key1": "2QzTYkZDhHynYeEwhFFFR9R1wkzuPjDnV7xGr9CAtT1MekwfXZU4qCzauXB7V2BrU23JJAAnwuNDwadetQ8fXJTB",
  "key2": "4knM5rtsxLwVEqWLTM5v12YrnjzAXxDJry8c2bG7qqTSBTabYWdRBRJPKHNC7LtmmkjyZDKkxvbyvMURM5xFGPij",
  "key3": "2cSah1gBTnvyC7s4qNsNh4KzMhk1MUU3n6wwTHVXELzqd35sBhsDvwPRjX9YXvtojz1EjwH9ADuqNQjE1eCCdU6C",
  "key4": "5CpUEMv4tW1dGfjQdpetdS3HiJnZakv2Hp1eWUyQ7DoK1v7xXGjjQKgrxB7d8K5WaAQ2CZRMYdHvqoomuFQ7SHa",
  "key5": "4gWEReLYoKHB2RYGktF6Zis91GTx2YT8WmuCK9Q1KtPFxR91EK9qDWJ35nxGPT2iT4c5mzzuTaCVQ4JSb1N2NHtM",
  "key6": "47fRYF9b8cWrK9FjonvKn1Mq7nWuBy28Xveok8tkbEnqzt1dDrZ8F1qSoqCF5z9N1n2jgKmbReRy2f3nEcAtPJC5",
  "key7": "4Cf9dUWCeMa4oT7cdzCY2Cb9N5D5GkerXbc5FjkW2MJdAypR9boxjmQCmiRTM9h9gV6N2faqKXPzXaDzG7kJcjrz",
  "key8": "4wEGGkb3nggSxG5rtJXvajtbHDWxqGKR3QpyhuMmKq5xFajNWKQ8WGSD7FbFp8huZw2hehLNHFrVuVi2ocje6VXQ",
  "key9": "4Dut6Rp6PbkUteASZfnZhk1MaQsgSHgeWPHRHU9YZjpz8h9v8kfxEGy7r3cK7qzAhQbKH8AwtDhTTQpbfKaV8SjK",
  "key10": "3tSbAbWjrvYDxNdCPPHGWdxFxfxv6HFnhFP6woXPHFDQdksPw8ued2yEz7hhpj3ijWMiGnBQ8LRnTNzLdkmz4D4o",
  "key11": "3GJ792Wgffmve9VLaMrs3shFzRZCmiMa8h8oyiKE595Qpj45hNHc5rqq2QP67HmGNLyAUJCm4327zmAEs3WJrqHB",
  "key12": "4ZaNZ59n748ABU4x6TtqsDcssqPdHvvHA7qhjdPfttqui5VVNRm35nHDLwkD8JfGGqEN43NRuBFWXMmK8S3QwgvV",
  "key13": "SvRpUwnhLG71qQRS8Ub2DJMrsw7ZmjBEn7UztRketq6FDph3N1ZyXxNYnVfY2qfwJV99mNursfeqTs7gFKTWuJu",
  "key14": "2QhVpHmpJAyJ4xpEp68D9jeYCQPvCYKvUDgX9LC6EQpgZPEwsfcYFhVSUsm4wLg89ks5pDrMWesy6f3ssUfnfc4E",
  "key15": "9eYkKUZDoED3fyEiXMK1J3B1R4CM59b7gK1t1u9CX2b6rfepQDREmgkjV3HX14C91exdt7W4KgCsfZU2oLAxBHu",
  "key16": "4b4yxddjLYmASveYjodsmBK59ewTwqpNmQFkN9faoAyQbq326KbeCfGUubYSpgLijyNoLqckeGL912zcvmeocPwv",
  "key17": "3ThLqeFd9cBc7q1C87YaUDAQkoN65msVRgcFM1F4nHLJFNBtgoyQS4SVZgS37wWRBTEjHy1A4xGUMyemMd383eb2",
  "key18": "UxR6ubebwz1WpdT1kpJ4bd8CMUFCJWHPPQCKLzdD36M6E5Hq8M1DaXNqLGqgFuHGsNpUJ117i8na7kD9LTbFmyA",
  "key19": "5w7ikwCNLKN6HcBsjvV1sZ7Q3CPFfCpVxQW2m6n4kUVYwGmCXYpwefTgjbt6UriZW2ameAhYc5ETqX3mWwN16eXi",
  "key20": "2LkTw3LMCwb5N8wNSqdac7yvaT6Uw94BjeYuZ9b7ix2RieH1ayEYBAZK2ffv87LWXL4BEsaToWhasc7N8HhCudGA",
  "key21": "3SVi6ZKpLJL7kyBpJ3fSkQVgPQEyUFoXo2XLAgc4YeoDsbKLeGyvkPZQx8786DaSYPQfNNwrKKmFZyKqYvD4hKEh",
  "key22": "3py7wEHio2Q2xJFz2Q1vTSLnrB3K4UYhk8RSCM3Y5Tg2VnNmNfoh6rwHYLXExZibMh1mxcWAnm9svFCsdFrBXdPs",
  "key23": "5UUwD9ypzPkpBFdaDERyb2gqpSG5kkajvQpwUMia9HNimxMJhA76PVnnMAi7iBatT4TTvzCs8GGC7TCjUKgvF8x5",
  "key24": "4UXEEJbrqtiWhGn2UxWoJ4DVaVMBRwKRbW4vAYpKNjSMYZ3JHHars6nYeCdxKpXvaJgc9GFFHgAagkNvHqLdC4vd",
  "key25": "5YbzLDy7ezA4j3T7oTSbrG3a4zF8G4BRGfNQKFJ7mXPQfCb1d49gS4JXG9WUq1rhu6AnRCuo8BRcW566uicqsgeG",
  "key26": "2kxDiPrT6fzH73WtoKywEeVjcE3LQRNvLKDDqh9KVmDZmAPcpTVzydWGd6ab2fHmhNS7kU67mF5x9Mc5PiBVVPem",
  "key27": "5Z41kmnddjkAHCpZbPTncgty5ypJy3sRTEokkpiCVFm8SezZua91Jpb4SR6mvsQQmk9SCdFfQUb948dZPhMm6sdV",
  "key28": "3UxoFXHvDxJiBtBrb6SFXaiJyQBhnPonQL9WiUQDKrDP7dgaNtDFgSvxwxBb1qD3R78YW7MTXhwTfpGmA6HpztfX",
  "key29": "62GYhH86VduWN3nL1pVGnXYRS47X83bv37rMetD4aPC6tvBWeZw5LYgqWAnFcULw9XbrqPSCucz9TGPvtD4kQSsV",
  "key30": "64xb9VbpSo1XeKXooxF7kFfkUQ1o6U2y7NPPudbrBPHHVRFPCuCx6LYjcLWeNzWDYNWhFwv3p9XFF29FX9nqRoTy",
  "key31": "5U99LMX9ZPtisvYxh17zJpUzfnxKu9ZraZyLW6FqXvjRFAWtgXNfUFW18bDedSn3nwEcQ8Kydu7443bccLdmiQbn",
  "key32": "4FaJFxQQVozH3JxP5urDyZiYjZH5hQSgZDq9Nrvbouhfv6j9LknmEDhiKCkFraAknLN9YxHz2DnhRX1HBA5Zub3",
  "key33": "3PVPZhYjQjguSb42bffNCg7kcpy6XjPzGQUoXxBek9aNTYAz21ug43ehsX5ArVM3SVPFYfG6J1Kzk3cgeyhJZGbX",
  "key34": "5dSV3ZrptHKmh3w2NQgbJzvBNPENezmyJS3JkwkAVXkBvWcYM4bCmkdAmyQUKwRoGR1N5T7YoR3hjhyq2bWeo487",
  "key35": "jcAzEbEP6swUBSsVHsctNg6qSCPGECqCL8F6LSRVabXUUV769Mwchu8DEFNRW6BdWEkh18TLXTusqUPvfhv731t",
  "key36": "3tRkNL1MjHess9emVFGwxYwwdpaKWJLGgJjjF1N2GJQkeNkemRYGp7TfvxY4KFS3UycHtMWSp76TfSM1EDQbobHM",
  "key37": "5Qzaacx7V6Hfm6vi6GCSijwcEdrCFwcggk4kZ5UuDQBSfmaucSaKScYhFCBT4TqWSUueshCMCXQQMPFDXnP5eTuP",
  "key38": "5uSuEtRKHv4LFxamkum4h2aXqV7XL7BY5697DAv7DTqFW5KxgEFHgrsGd1df6nKu5y2uQsNQmorXMfR3AY9EyrVx",
  "key39": "2vVGv6j12dYN4iTzLHGkCZ2oB5pkispVku78HMZ6oi1qZp2NbR3zDaZFrxVj5NwNuH4KqwTG529hkAcen6T27BEs",
  "key40": "2DaPC5iHfS88MMEuMxm46d2GUMpRtEhcnHMm6J6ACXVdJkUWKJyQEXU5XPTKsirEPNHcnzmf1afJv8kbnhFHSaTu",
  "key41": "2tHCYhWmmqgKMj6Cj1phekzwSVnexXSaY1gWC1yt7PAubQMMCsxcJLqLxfayHwZ7r6rfNCX96mVFQLFd3AcnFZyP",
  "key42": "rs3qmyYEBzUuzbgJmDJcZxi2uJ6C5EaL8SdYfRnAsCz48V2reJCpgBxoFQiSnUkAcFhoEnJC6fCvo3bgUXg3bcd"
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
