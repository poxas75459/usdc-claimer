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
    "2KZNJh2rwiEaxaswifhrEo2tQByFdxPWAeWk2LvmsrSESicqkcZ5BYH4Td33WVBhAxBwAkAdGJuqzJYtgB5v1Uh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQKbaWWLB489uFfp35GPk8LXFxhjS7QLZ2uyovwtxd1fS2pt5vmASqaZRshbS6LYviaUjHN59SrVkZ5SDUcno22",
  "key1": "2hUtRfC6T3UkCgXhBoebrQ2pAuPBLPUG74FLPrwbScGGsEmk7NLQxi9XaC6W1Cq5dz4YVXBvwjvF61HDry3WRpAQ",
  "key2": "5DRWvBMMm1PdpSTDvCYAhnHM6cEm3qCUfEVcEuPhM5oVyyFdu1o1xsEpwZjmXdGquB2DMk1Bw7mV66xnu1w2U1yx",
  "key3": "3XtrsWHXgpEZjJZ78oZtBBuzN4mQswQmk3fqHyjsvk6pugdFRy4p5bKzrn7vS9FnVEJrw8grWoKai9ufQmqzjDtU",
  "key4": "qonc3FXSPMn1sHrPe2RjFqLC35jC8JvZgK9nXm2tbtKCApYYGiWK7BBigPZiuNFWEuRj9kwqDEhwuCsoEGmDMEY",
  "key5": "4W49NyPueyDqtYEmQ7JJCTz7dFK79431sbAPVotif3xs7zk7CMqgwMoGj8w3R8FKrPcRUwhSWeW85LuYmzed9hon",
  "key6": "LYEZD2Bh3TrUtzZSWbpRQaBy9FdFfkbrJ7unG8PB36u8T3m2uYEn7azMd8vex7EivsxQtXYL89Q92BG6EzKtt4x",
  "key7": "Xnyp1F54n7Hkw4Teogc6ePrgSTs1CBGVg79f1GwRedDa7comYLvnq1izSXzgtCeJoNGhSZXagkysAAkdZ5cgV7b",
  "key8": "5zGU2oZ6sYTKNKsJzV4UbK57oJxTL52XPeHRd2kZ8w6VaohYVtNzq5QhmkaY2Z9dC1iZtDSZBdcK2qvsPk1jxG8s",
  "key9": "4hqwsJvF6NhhFTW7bmwDX32wJn8v3ict8984Fk8GTif9DVF1fUHR6eounj7gKM1E8HhMSQg1ysD41Yt6EQsyTt9z",
  "key10": "5X7rUSRKvVewAztPbWwrUJRWDartfkE5BK21GhZkBXw1rJ8fDpsmMkVfnp9kqSTnG4ZS1HpaCfqL9BWtEBjGn2dn",
  "key11": "3itFUqG9CCG2x4vLxiwnU855iJQS6zF1EnY3yYvtiMQ3U9JB6M7RuNrk1771miWNttSkvvy39kxU72dtGAf395WN",
  "key12": "4F7qmPWy52bUVwpCQdUqDAKQAk6VLCxnJUuEZTvsANjty6BU8CTKfdX3oYomCLWgnGx97EXFWzmQRZJwCBPTpB2V",
  "key13": "3UrbSdQJdURHDWAPN4cYQjuuVbrmQ4UaukhL5FfpGN9b2AVD45SF6cvG6pC3h4L7pqfvqmJJxDHhyNwwVuRWg32T",
  "key14": "4wNEG9A9hPowr6u1dEtuwxopdY9wZzipmZwowUtGEbDsAkKatLiHvxjwpVbkkU8qne66P2efbaSbdvYxfdmEPWkP",
  "key15": "3jRMMtCTNcTqfdvfHphqFW6AYuMww1oGYgKFVxWivM7w2okVT7ZD7n7MgFHdFQX2yQwfLWWf3YAZUsqAgHBFrg9B",
  "key16": "2dHqFiCoFGnkRCih3mY12xqUZ9vBxNjN1n3f4RXEfv18jqqyGqNPXkBZdux1jR4aSDFovA7gEKC1nM7yrVH8izuE",
  "key17": "31GqUb1xx7UmRPuz624LCVadem9AGzvZoohZXhntUsnLDoqdV1CEVazdyNMYWcs6X8Jx1JHCGvuqmSDsLLbu35fP",
  "key18": "5YGir5HqLarziJWdNWkqYve6pkuqKXHLsEmjytedLXzDRnmSnyMUgBBqc9wMiHQxM5rcuNSzXSEB4X1we8hBkzkT",
  "key19": "2RkBWtaRKKav598G9T7YtL1s7P5am3iujd8XD11Eiz2F8i3d9NwB7QYdWjDcscC1L1PMx6MsXsq2SvcHHTxS6zGU",
  "key20": "WG7zZL7SrJV2cnVTM56wZmzVT1SQhncn6wDobdUMf5qd6KoqQWvU9CJaXGK8GKVERC7vVpik9tv83jU8o2bgnhp",
  "key21": "5isoLwrHXyx26X5zHbTQfdinb5czmsk6BLj4Po68UM1Zhhhw3JE5gudWSuefFXJndFpJvFiz6as5gtJjW4RSEg6X",
  "key22": "45qwAFxgUmTfRcFhyK6Pty3SRg15SHcsckKy2JxwVCD3m7XcC47Z1Wx3rk7QQGskXM86A29s4rUBV83PaDDv3AVM",
  "key23": "2nWbkutTumMa3mBiTsd7LZ46H42dPhZNoYQWXnGEpbTsuYuGNwgJG45nhKAKkhk5RjuFfKJsBXok1YZuo6SkCsow",
  "key24": "5ravvi4Eg7yabLZDmcNqh1z5GG3Nf5HznM79gX5Zbw4kMcTWxMEXFXB5DJQ496GQu3A2MFr1zj48SE4m6Jy6hq2N",
  "key25": "4dELgCTR4UJvufbcGk9MEnphwBCmmRYtozHvvzVdKKjcT1BjAeC7FpsguGxcRU1TRLe8U6hzBZ9gW3T5bQaRnren",
  "key26": "2Kf7pVbqcpxJsE5yaBVXoXchEjZENCHf6GgL4peG4agQas9h6fXZC4ZQiKbPssPPM9HBvBXoYnCvmBP8Tqyf6rzs",
  "key27": "5zzbCNC3aHAZZbHAiQ13prgP8oRoUvkp89PvFynmktiSxfVeAwwWAh4kQ49coxgzdGVL97XzZ6qrAvrAH7JV2S8z",
  "key28": "124WnDNNCyBPyu6kW4vVAqP17zKfcQKhnGBvvCQRm3eeCJqeENrLEX6GLvd6V9nrkVKTmWHifwQ5odNhoY1W3mgn",
  "key29": "3P3B9qjPGK9JpmaqSDPsWdsU67y8SBM3YSLGNmGph1yvWhmxTKEv8V3y8yURMqg4hPeRWfbGc85xzBcYy52BzPw8",
  "key30": "5AbHgPEG6qrybwNcWoeuPfZpePSp8NxUDDHKybZUJjBp9BjSVHoW5mhkHANBatF3RbYvZfnCxC2WMh8AmUUa5RgF",
  "key31": "43ise1eKDcHn2Br2UG7jAygiVnyEtiKYHBCmsFftpyYvTtWo9pkWhhLB12VB4M37RBZzFpAT8RcGWTLvp8r4sNre",
  "key32": "4dKTQ3iK53j4R3zBgZnv3YddkNKVvnK64vgHCf4uDX6Q3iigkk6ZchHrb8DkNEQD6xzULKbL6d3DH1155MEcxFA6",
  "key33": "3Wuv2PniFixgCzxyWDoKfpGMSC8deCm2RvoaX7nWj5FKDTGJRq966jJgR3dHoHWsY4kg32dtREnyk5WPUPXsA5PP",
  "key34": "5h67j6FeY1urCAQUeAYFkvLYE9iCCQuaMQpHSD9Ug1ziT8LsX51TH96F5eVcUMUbPGchS526pAFQBrDE4HByDY8M",
  "key35": "H92Jz1a4cuxMUVSw6zsfZDjCDYQJKjSnrugKpTmtzqjAZLTxrSdMPCNN9LnFrQBarUdL3GRTNxemgEJhKKwHs1E",
  "key36": "4vnyq3wmfKoVvzpXakaMK98iNqU1X2dRJSup7pC36r5DjzWwZVfEiveV2Qc9sroQaYAgjFvf6YRW6hQpbjC6ua3r",
  "key37": "4NXP5r5HxtKUcLR7ZyuRfM4qX6hc7uhygorEnxviRtVKRJodbLTCghcjMXpTb7LbbB4eigEGJxJ1djyeKPzmcgBg",
  "key38": "3aW2qjC52LRVKtZk32aH4ay9biRm3MXgWRvzzHPsabFakTqSmTRWuLfpr7BWDGZsWwtusBGScWHXVxAzzTxQWuV8",
  "key39": "4ZnaMay9vKnppsJLV9YbhA2v6zu7hWrU3YTQaWgQwLuE6Q7Tx7fhYPRv1RQZpNbWs9dmWjtynG3NS2RLXWHc7ZBE",
  "key40": "2ASCo6JDiP22wqKtDbw6Nf6oDq9sJq9cxzGrLzwGfgUZvgEqaUmyuukN3zAPc815c6WpngbVo9Tis4XVf1kqPEw3",
  "key41": "36sXn5MHNwEv5kt4SrAnu69t7DqrTe76xHgUqUWNAgAVLMdCdWhNww9bxuPLQYpJ8uAfEBsTg61mH6vba6Uk6VB5",
  "key42": "5kiTefq513dU8m6DrmyaggQo5iZ4HBP3ZtacYirEx7bEf1PLU58ekG4fPFxdPpH1eP5McbDnfL9i1DRkSu1CG138"
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
