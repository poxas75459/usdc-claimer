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
    "2KiS14GgRRy1yNXCc4x27g3wgSdQGoMkHicsL5ipg9Me2ngmrBHDqxZCRPp8jjrp6DN7198SG1dn3GAhjFXTDRjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zrtj5K3wgKBMEpkwkfUrvBvywfPoBLfhSAbmr4ZivmAmHToYGnZ3eRNSZVarovDKW3Cdi1L5t1p385WjenAkhfQ",
  "key1": "2fhtVyYKqYD4GmbM5vE5b8sMEEactxvvptXwHCY9RP5Y6zgaCY4wzhPc62KozjSqPPvMpZM1XatM1qA872TVdiCo",
  "key2": "5RTBKRozDebuWuUTDDexuLRYWGWiRErC9GF2GkS6F8tWsKWgfmxT8bSftjNtc5pbcqzYG5igFsPu3jxQz5XCpqkw",
  "key3": "KqJ857FDc978Cm8SarBMHc9uLZtCMmEXiWzHVmt1q7CVBfujFwtcsdxB48kEry2o5h7Pzd9cp26aKGHWeYWJgiZ",
  "key4": "VTYivp94iHXrgCYj7PTsXka4CTRMrb6jUmrqxArMGnz2x3nYFGPqdfQEpuYMhcnKv5AiL4CnUzs3QAFRZ3XoVDS",
  "key5": "5NVSe5Vq89fdtTcXc1y6mKwNNySTk9kXCerZ6bwYFGtE7ck87g84zyohLNisCXPddm1tBUvwLdFfxseBUoC8Z5H2",
  "key6": "4EshzUZyN2ETNzrup8bZ6KxeoskRdhKup4zE5g4ZhNc6cXcX7KwZX3nmsPbeVN8XT2xntiFpMcZjkbwyMAFrMK5U",
  "key7": "4pHgwodawTVSNvpQHWrZ4YF3Y92x2KhMFYWqUsnbBqX4CJtYy25H1idURFCCBHfG6Pjrp8U9h9LUfPNeY7rxMcdZ",
  "key8": "4YThoViNknxHa8fS6uw7uEY7VjTg1X7ivuLkmJTVZmt1djEQ3nL39JBACfUPHb8NHCXkRHkHdfjr9Jt6w5bjh2U3",
  "key9": "PMoAMZKMYcMBb9z3iKwarwUin9jDR5U3UxBBEwBPuuhr2dcYyuTTkYGfmi8h7S5D3qucd4mG9kjKsYYdamQujD5",
  "key10": "4FpL4KpTtH8pSH1Xd5hqEs4wQedAXnSkM4voPrjh8ok2EgckLg5Eug2uEPBqAWHuLKsH3xBX46wTiv8GoFP6YmTR",
  "key11": "64i5YQvTvta8j4SpNtMefbBA2gKZH1ZaYy1DdVQp25sonXmu9AjtSqVchbGGd49hrmDCvbQLFXihqdVizZjqyyc1",
  "key12": "487wMm9VmP6ue7Bv2Y7z9Rs1fRJPCPP4k2Upbr3MZmX79yQok2rFhKTaBfkL6BSiwccWUsJjDZbVXEDCpKiXjH1k",
  "key13": "4eu15RQKPjW3whbj6P4bj9jUiZVudp3KcCSRFbin7jTySkupXShM5w9FJwKDWTZbVrAae52ENYoDAbMPbqaRKZzn",
  "key14": "2TrGSj7cmckAgWRnfYGvSMTn2NjcJG4VVhxVsYYGcoqBiatwJL6XzZJCjPgVSZXp72bseatjRV2D6ZtCFJFazg5M",
  "key15": "hLWG57hQw6n4qVPMYg7hKVYAxE7Az2VuC4Fe783tkXRmg2S3ZVNP4yDxpAHoKcg1yEmbwPUP8LZWnu4GZk9vkoS",
  "key16": "4ZzaLmr4UXw7Rs2fbFtFUfriHVAcBMwCSZr6cpWok56im39oaMtBy88CdVuGNTvtE8r2oBq1FMPnvXpAubiJ44oR",
  "key17": "xZYvbZtmBpjvqHfwy9mYqr7G2fPPtJNJQtfgKpRRxSsU8qTQv9FyyaZ4vEn5PWia3RDr6LLk5i3qRAn5JMRhYhB",
  "key18": "2aBk3bXJi1H31u4K7SBjesCzbK87UzYVd7vppDZ7A5AC8zGyw27iH1vayjedve5fuuAuuMKSTjWxDP3F5JPGMZdz",
  "key19": "42LDNmiddsKyZgJNNN6BREnoBdpRfLVfkaJmVmGkXo96qUSrYTmdqFKvjkREJZ6pEsyDMvcKvwwCuwDA8xRKEuw5",
  "key20": "4pCTP1PW6kcVWR83abaaQ9jzz6LUh698DsC7ZTv65Kw6ic4VQNYFjnzpqA64XoQzWC4PAQF6UJEESLwmfeD72HDG",
  "key21": "2aymuPcH9vLa8fksSBka9mqZrb7Jo7BMin5p1prcawAXsr5aHEtuJfpGPzUz9bG3E42wUYRVZPNVGU4v4HGFRK5U",
  "key22": "3B9Ei5vGt2oBeCRCsLzFjEYFSGr6T7hXgWJox6MfcKGxoLrhV4rCyCEuaWoxoiQXYyxCVkVHehafeVtWsFSW9jWa",
  "key23": "2TKTVz6f3bCMbU4J2PF94o1efFhsjvG9Aw5gF61HAAbDKh9aMATbswCaQHvmNXMaPrLCQgkhJNtN1biuoYWqs5rM",
  "key24": "4iNwGHfPpSLar6m12hse8jTWjjJyKqjycF9QhpSn2vaVPmXNme2VeA3rLfi2a6ssF5PV2mkaS2YtWRNmPzjHKt1r",
  "key25": "4ZHkayuqFuzTkMktp6Jo59WnQbuAD7JWMhMqzCpKRgP9gsEXq3tw9LWnHKK4Tjd8RNoXAyk14F9ffXv94wQdBkX2",
  "key26": "3UCqCwUGjGPvY8MS3LFsABtPKk9QpN7mjXEUaASZV3qdmcdQg2x29xQqz3Nnvv7g7wcawzjCy5hN41Ae1kkDLedD",
  "key27": "BmAdeEkuoghatkNpMCqQNcSHrXRFdFy8N9mprqwQHpHQMbcg7WktMg81UUCeo2ng1kJcpPEKagvAXHLDhd151Em",
  "key28": "4sXs5prP5degH1EuPtnMvbe8Cy2jhiLzAqczfG9LCXaRmv4dk6VoD5np2d6HxYESMTH2pRPwSNWyw6zBm44poYtS",
  "key29": "2zv9sZi1MRB3ev4kc4Z3N5sEgvyi6rSgKNDWH5NtUPteqbkWhgthQ5dFyCNEeGMfUrnUe1XXpF6pDETE8uT4ggLq",
  "key30": "5S65anQqVdrjLWdAuyRgvb4kDskWe9rqYjv7SLMPtU7CEuBJf64qmiWhL1FZXSg4c4rHN6kgc6wDSQDsf3nAgJaP",
  "key31": "493dMRwDWqBGueXaGGBHeTFaLShG5sh9oiJCEnjPBYAiA2vwEBu7ZcmwhpheExWB8idr63BC33YJAnvif8uPbL7V",
  "key32": "2EEMYDxASru2CNeEsKX4niXrR5ZNsMia6tFWbWExJ1wMraxTjjwisdwdCnzhaofoEckF6U9krvJ2vrHnfkA5GPXK",
  "key33": "5AWEt2CFsmPHmaAcajiScMq3koc8baDuL4XoiGRt6fHphQwiCooHVDyY7WdEh8LZTkbABtFk5gRdEFFmpvieBXxp",
  "key34": "2gG76Z3AF9sMjYnQS6zo2kDp4E3dQdv5jvKvXVDDAm4zJrTG1EoQp7aeCtAyx1MaqecpXm8HhsC7ZajXzD6kGyen",
  "key35": "2J92mTsQ1zHAdqV7sArTmy9uoiVSk24HsmSBrwYX7v59b7rAuytVAxpRkpVmWrycoU7ACXPXiSQtFeR9Y15hatRr",
  "key36": "43QfLmvu6j8Bvvqg3bSiAckU9xByzJxDZbjAHMxsnjYVQsLUtohhRi1ecHvTYHCMmDnKvXFJcP8K1FZnbd7Cdp6e",
  "key37": "4PcToxi4m9yjUU4mKYYyPa6h1KcBKkM1T6fmbbqNR84nHMGKd2KATrHUzQEUrkSu3oVwNRQ7pKoy4eijikCfVnnZ",
  "key38": "raA6H76r5UqVUfnFqgDdyrmcf883drCTZagds2KmouqTRtW5si9XMPr6T2GpgUnztvxvM7z21xL9R4MrPYR1z7P",
  "key39": "29tikebAcWA2im134femHQXprnkhAgG2UJ89ero1jfPJxYnb2cnSYz16XdA7dNjhceYFAEz1WoMmjjCqzLaEVJyh",
  "key40": "5gyedKjYK12D5N7pRj84UPa1g5G3RzUZucjvoovNniDLTZbNBDDQXEAhAzDpX8y3hFg9tfHMeZrsFMyeATrr5wXq",
  "key41": "2RRh3nA93KmgvLorSapW9UwnTvK67djFoyGUAZKgnz3jSqT2YrB5CehmXvGHGVidvDhFhZfCzZ1Q77GYuU5EehzA",
  "key42": "5s3G5aQBNAng9rqeHbp3yHr2gmtR1rKGPE8vV1bkChAG8jMH7cUcGnbR6YQfjeL4bJCPgCmqSWDa6oxeZuZ58794",
  "key43": "3WYNDn6Tm7Jd83nvVmfT5eKHSe9vGogsgJUc8GbE4FUfwX1KxZ7Tg1kBvbi8W7xF57XX7n52vzxLnJMp1t5xBH4t",
  "key44": "hXXK38XqGms1T81ELrciZqRPrak9PbNRqXYW2YjVJVKrQXTbfXixuRWpQe6AA2PK9z7AdqSdcFMesASdAtEA8pH",
  "key45": "2TfMEsC28R7mLnYU9KVukxgZj8wQPpw5undsyW3zJSGT3A8cVSVQE1mpKypyseyuEz7vMvyTBKpRBzbaD6M7ZJoh"
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
