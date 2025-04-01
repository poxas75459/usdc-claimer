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
    "3jUySDHKVruL9b6zK2KdMfygdoqCWAp8zXueMdErrGVEtcgiehKWE5YPFX29v6oJHiefGNp4RFapa4Yw9ErUppYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yyQtuhLxFLRrHpTzfCYTj28Y6djpHDFt8X3N9Ga1nEVpF7VgGWGF2UGNCdvpW6Ym9hJgT4G3Me5ckehkTZbJVFN",
  "key1": "fvPTaM1qKfHusBWfetEgndfWouhhJ6mpgmPgSqnjY7Yj5AeAfMLcfRGfX2mEFeQQfeCvyuCQ9JYAZBi2PdRgBZE",
  "key2": "63JRbgZZH57FyTJWBN6hrBHCitB6peRdeGrDpvkCbZ4bZQtVHTmCU4iSniYT6gN8F8GED2F8Jexiqx4JWwCgXSWE",
  "key3": "5RhmC5oXrqu3pBeefMkyetFhw9pEs6f87GXYr5UFbhUaVpytSnUjnvw6y4532CeQR52WfWnkKCQJE94ducndwVu2",
  "key4": "3JFQoxBJxbEWHsMDY4zeFwiRtBYfnoSnSbPHdSJ6KdUgVLgFJ9ZsspTTzwSJo7U4moSFxWDvAs99i7Pa8s1zT1ce",
  "key5": "268WR9AZsgk2S8gifb49bGtt3RXKfbNFYqH5Jgv6P1QTo9schtAja3bxnbKHiyc55S1kSY6XFV9nKZu23isd5csM",
  "key6": "5jWhLwWhhDhBEpoyF2rH8EnxLwg93JRhYz4a7WwABXjvkJ1T922H6HL1pTy4bC5FDTwKaNdFLDZ2vT8aQRM4xq6u",
  "key7": "4kKdVSjXKb64YEwxixxkdYNmP7UmisFVsyydxARcynGptfoxjaYFmypq3Q9RFPuxPfj9cvQo5tCEkLbaKmTGP3CR",
  "key8": "2N7LRUncYyCT89gop6cAwr53T7AMaX6VhC8Bsmp354qFd8qgt8pL4FVGgfmo9m41NQAnPejxwiJ6sa3RhAyUGhKb",
  "key9": "HxQhvDzniR219RLUR1N8yGew5tN2A5B18767VRefAPqUN3zRcFZW3RxwinEbrBw55emBd4dzjipL9hfBmkQTqK8",
  "key10": "4bTRWBKNbRHcVCoWkyT3DJV61kSFMRvd3Xz3C1tfK9kLPqgRpR12EKtqm8DPqmtN3qGjwb4Y7x9rEEn9VeXRq192",
  "key11": "34RJp9wsXcinHSnicNjeS3bnfTdKy7YHi8q1b5DQsKxKfBADnKzvK9Va6SWbY46xkfQDzkMX4eCVVMuahCMkTwXq",
  "key12": "3nXasYAkKDXeZbwFSJqZEhVMBunDUcqJ7voYuYJ1PToXzutBiDGeFymWywDHySzbKQV78dQJQ3kJoat3AWhw2pbV",
  "key13": "2k7RP5ui2TE9f94bsazpfpLL5kCzdFLKWVaFbENR42SAwB4KjJjXN18xqkK9Awp3LRkfzvp4KpR54yNSWa8oq2oe",
  "key14": "4hAdnqassyG29HZ98VN7k1KZHeqoK4CegTnFsvH3oLDjt8MPXy2TDKuMTuQkpTC5M21r7RyYMQp82v6k7sfzzeaP",
  "key15": "46zV8iJrYdNC6LYt6r2hwxjzAaxJHNquFS9dZ4Ex8rzNin9c9raZMD3e83dFncZ2EL16NZ13aLDgKGSNZA4VQxRg",
  "key16": "5nHyUh4H5HMgrCkN3VzCgza4URjQJypsZtuYxBhHcJeNb6fEu5mUuNT1YFpDs38U2WDfVGFQEag5Pb9YJX9KUBHw",
  "key17": "3UBjMk3JQ5M1DafKBRHZSYyHZMnav1mbKHgKBBksDxivE5ckJbUw7m2hGiLFQ8WWfcUueTHii8Ea3MNQfqAy9RrD",
  "key18": "4AvHos6Jx5fwy84imvyvkRCAt3BvNDfY5BpGvTGds3Tv1YjsBhCS9WQ6aKcmHzuJV7bWGWTrkepcCkMjEJ1CQVAW",
  "key19": "2QFxqSFEz5VgGkQ5GyrmCT97wyjwEPcVcb7TsFUNJ6DDjCdU6kxGm33tCEbpAN8T2x2Awprj3JjDtLxHnAx1KhPh",
  "key20": "5smonXsPCscxgQZrZyQPaSRvn9FMrALrSXRjcUDnafPbu9FvgnFUw9Q9B6mLg2wtk7uiHByPkYR1qVBE6h4ZjtJJ",
  "key21": "3PNA9cBCS645KsKeKJKkbDKZ9Fmxfyjm3AyeSnEeUjWk6PSSjQdCDewmACcDTnVaLP8BB9V9XDt7wyAs71NjT8j5",
  "key22": "5JWfvv5v5p2JPrqv3QD6Y415WgRHeDBC8yHGUKXxnYbaEtHaadifUKrs4XN1yTognKWmXoMSKYdStfkV5EAaG4b8",
  "key23": "2AJhPb1Zf8BPHxzF1TMXM4dDWqYaDGRDA1EwhfjyRbQRNDU1FNQjGr2XAjRvS61HK8GmWCypAafMaB6JFL2jvpbz",
  "key24": "4akTEcHZv24gqLuAb7uP9rDU2Bx8ueTDK6MJuLbKRFjWE3mK1vA6ofrce2ak1SXRhvBPruXGHYTgPEXWhMTX6Dp1",
  "key25": "5GXF31XwL1rsJFBxCGKLHuFT6PPdipXW4UoNq4NY8FKBQAZgPCZWh2cNxU4vpvJnasVzMncW9rekgUyCasHceZt5",
  "key26": "3VL2nCEstJdnVzcVUBUv7TEnJaDoJxu8zjfeWzDeXL7YG3dVcqKPBNiaCkTLxB2qNTweGJyYYS5Ti9rzxPoW4xpa",
  "key27": "QDvAiT3WHp3mERD9BC1n2BAUKc3KU7wug7Cfx65iVr8vhxinJdnjCb6Yjjpja8Heco6pTxJJ7LnM68QS1moD3wm",
  "key28": "39mysvYJG7iTd8SScDdRQwfLEsiZ9YfohsCsD2CrUJVoKc34Ur6MLU2aj7KHHJxfWETrczXHH2HZaJGD3sNamkGN",
  "key29": "v1CaQqSJiw5yGjHERqGUzsKkVnzsitKq7kvW6zWDQQWsCd8wd3JNPNgsu5VaGH3kwtu1i6V99bxY6eNWK8csiFw",
  "key30": "3vRnkGJ8iDnBSPxRQCor5WinzKXKgpoFjqV5mSYoxTuUwSG5gxoFpBfYg2U8JdTNzapQz2VM7ibCFc3vJTs36sm",
  "key31": "5zoqsSucGW91uCDLVu9x8y59gpAu81Txb7Td7f4LWMnMBjyPa8WbJbZ8teWDkYcn4BeA9XFGxHoBTVpBFfvVg6FN",
  "key32": "qfqtoga7mFAEj2AJMD1VP4FTsDypLwNSZa2b3Bt46YLShi17WmWYreEq5wMbYhKNGBmHuzDcxkWsG2xvDDLmJ78",
  "key33": "5wGVqR49tzsFWGjADhoyWdVs2rgGWprRzwNSa3xzg134QLPq3eVKSGpKpaw64SoK9HXe6aoXQfHqwnLx2irGAXHP",
  "key34": "4eTDaeDigyz6EzafvSPBcENzagwwMt7KKb3JhoTZktNZ4XTpVeoGFjx5r6d9t9e2wDBDL6wprxafYmnMEdW7DqZE",
  "key35": "31sKf6gp5wZRfQGaAdu3TRfbY2sGrvFJY1o3NSP5bavVncoSpaz4myvdDT3MWBxnC3ssLSXqw3KgUHX4fcEprnhc",
  "key36": "33xeUnKRRGJHTdH8K1LsGsyzXWJwfkWJcHszXKXyYB4iePPhruL2gzDnFZSfWcBjvK7YgSPbonayBVZLyKVAud9",
  "key37": "55giMqJnKymAe7CZcpNghkqCQ3B3zTMbz7sLRtZ3uasyDGNu5Aai6W6phFP2eWHfcok39XwJ9kZj8uPgBFQHwgJR",
  "key38": "2MhXYV8eG6V8zaU95uo31QbQE26K9UM68BZrx7J25qsTAg7bjcetGYWRYJXrcq3bome9w3aGzugVjnrDsikS7nPG",
  "key39": "KbW8vEtWzzzMrdvhfjkfjtYGEjcHVjomywPQfyad337FKGievNpwQFEwX2GtBpr5FUzwb7voUkBmkkGz1ov1xHh",
  "key40": "4uhoScazNAuiLFrYD9Qg1gySXdydjHivmAeMhTvorUCANcdxTWEtMebQzeiZYyPTQcoNArdubgTp86YmEkYoUCtW",
  "key41": "bqXnr7PZzdo3y5krckv4ZrKeB36cSSppm93d93zUQ17JKHmD8W5S3tTGjWN85AXLUaAMh2TKr9c9ZEYr6PuHz1x",
  "key42": "3YwogTfLBxFQywekqdrejrR8x2kPPA3bRiLW9hTNzeMvEpkfEFUMgTAMHYM6DBBeah8jvA6mGwM2YSLUaQgZ3BW7",
  "key43": "4iMVUqQuDWw7WjY5qJCUQqdawcj3iPjusKSfyzHKex5t4Ju8JGq9yw8SigxZJLwxdZ6X8e7sTGH5cMSfSgQTC7Ng",
  "key44": "4qF7H12kKGEpNg8yE5AcG9AUFKL6QaDqitFJDQw29mcoLBTt1ne2p68fqVyd4GV7Sge1LsE3BPRmZAvFVSGwuwGB",
  "key45": "52nbxuNjCChgbYrNM967jxwMxPhCjy3ZQE4wyi3FUDhN3u78jTCYf3FruvV827ssb6nPVJhVz8Fc4UF8Nxg9b7i3",
  "key46": "KuD9nNGqDBdR2JuWNpG1Rg9xoqr6rTGLdyNxEsR7oBSkS5fVsQ4jwWXL6eAyUJmnuZU2f8oGvsnNT4k6H74yA9L",
  "key47": "2AZuBbRPxXjsfUW5WZYz2iXfxvxm8wMBXrzHRaN5END38WTCUYkyMfiLYJFeVnGVSJ8dCR4oELgeDFR77kE26rFK",
  "key48": "3inHXoPtH1WZbSXgxPTakJEViCvjnrAWVMQ8Ej14tRguwn5vu2ThzT2zBfYocLY2Fk92UVh3mMURymHUirUWauD"
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
