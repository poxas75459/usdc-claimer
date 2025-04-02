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
    "3ET363WriuufBs6r5pdwcTSvoPnUTUW4wz5ASUvFD3heCiKc8sCfhEhCvswGva2SX4xAS2bgnKgkYnEtYSGtGVwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7wbuPPVMkJj7GR9bVxtKPLt2SK4hHxGFXRbiMj4xNZi37yAvdmPQduH581vyYSZesCZXpJQtBgAvuaxjDrcPVe",
  "key1": "4fBjRGEygxZ6efbXLHwMwopXyJJqo8t6u4yogLSYB2jqvZebtmdcX1eYc4RthkgYsQSqucB2nERg8PhZpepuVSTm",
  "key2": "a6DYX6Xmq7monkJMnr4r1uTtHoHjzV1TmsmtrSMRKiXLydefsbQGuMVh1GyL8dvLsn2RZpq8wmmJqARkHegGErK",
  "key3": "3QznCDfq6Wb3w3EeccJobbfeF9UTpna3M15XwohDhciZ2riT6QiwQu31JJKVCn3ocGL7UgAnXsTey71U81hcHKud",
  "key4": "3Ypf5kSaZyuJMpmsMD7vsgZARvzRYtYhfaH1NezqmrFL4XbnKZ7zWawidozuZf7djjh5Zk5FKMjqR7DmKHcczhYv",
  "key5": "k4W1wXbvP8y6ojFNsrkuV4b4t7p99saVfvXHskVCq3im8p5GGhSPk4eGpaGLp7jC9Uk2T8h9LcHAkVyZTfC58KH",
  "key6": "4T7eM8dgoeLdqyViG6GVJGGWzi9ML8VQaRRsDkGTJDZog3CKpCvkqh5SajQGFjgjFbKy9u4LnGWRo35NadYgzfen",
  "key7": "2yCER52MjhXKXtbUBXPrtUftPJDoXBfubUWWrxNLDEnwcSHAiTDHek9ip5hp5aRmwb3kHJuown7dsmXUvaUJNdYh",
  "key8": "2vYZ1piVMrRoiyWapYYbG2PS7HKy21TK3bAZqZm8p1CNsmC4Gy5Po3Q1RA8FLDHSFLSjt2AJRUhG4HQWKqAmwq94",
  "key9": "29mYNSqpsDuAw7JcmsFGNXwxNut2pjepxyeFFvh9gQKZ2jCZ6sysUPftztfwk45eVuZbt22CLBRiPDxN8EXWjE8a",
  "key10": "4fuGmRYN4vnu5AVbRMBzocqxue8QDnLMDSdHZbpLy5RhyyrWLYh7cHW4i5EfDpRibGitvDASNbjDPGV8Za1FqydL",
  "key11": "3BhHizbViv643yQ8TnvoCeYwSu3b3bmt3CcDe4BMydukLADbLwugNTaEzBnbNvKPWk1ZPCSPQv7xGdZcFdSHgwUS",
  "key12": "5pCNWsjYM5mVfqzwSaVpRTV1eDzKaAdqBmr3AFfScvKxKspZhw8AH1KcgeSB3MA4jSavYgMsbK75WpjKRAQf4aHq",
  "key13": "279aV3dmSL2BZ3H8vqX3HqC4PxNmkppN14x5RzWmV3qehZCed2zMjJCRgjNf6UEFWfpTV3TuCW6mSiDkb9riLNER",
  "key14": "4XPTRZWYhgGn1HxVV9TJMxj1Tuzpgydf6YhbQEMuwVMB8SWuWz68k2MpvWZh1mNTFez5y2JemAfpRoNko4qZ4aGz",
  "key15": "5z7mzwKq5fxkKQHh3DuN6vYkBGiGHNafvj1ww86qCCr5k2Qmfsoym8nrvhHiZhxGZ6ekmqeBrdDtCvVYzpUqEfEu",
  "key16": "4fb8Bb4FkzgqMeUAuV1FWR7HyKx7sHkBouBfPJUQrYkNyadixPTrxgNxC15fNyk271vNoNcaxfKSKu3uGxGFnVj1",
  "key17": "4tL5s8Z3x6fzJr5znhoTvRdhTCAhgeMcYvPGGB9fw4MTNK34nomu8e4gh45S7po4BRMzmE3f1pkQ8LiVMb8buKPw",
  "key18": "35gMWgGfbTFTGc98D3GFDAPFeLGBzbAhdvZ8T2uq6odbYZofCZ2dcxcj8US9SssSkNMvqLkC2Rh5dtwPpYccSZU6",
  "key19": "3xGDhf1i9WCmLqKjXyo4X1XBEa7XKm5XLEFPU8pVY21SiYz4kVKTmFwF8GaqHrNLx58xrc5vgPFqhrvQJqCWUPis",
  "key20": "25637nHZa6Q1BjeYi7rQr2rqcSrr6TS2HtNQgNqF9eQReTc15bHPoaqLEcJTeZmH4zHUtYUs51YMjwgUbi6DwtRM",
  "key21": "b4pjaowihNxDZ7AbgqiTQLvz5RtRNtprEghcWT3RMnf2TKt12Nk32fTetRJNDPK2zQCcDyYzQ1JRnzh4UdKfBVg",
  "key22": "4EQ9GGvbDBuDWuJKjHY7HoFr6CajWU2pFf9EzNkxTytUDs3EwZW17LgF7zHtjSnC1VwAFJpSYH2xKSVfWRrSnMnC",
  "key23": "43GTrzLADy4rMnxUCgcSksujsKWTSmZ5U4sNTt3756FXHjvsREZLR6VndggjA3eHHqo93KGtViU2ZsTmpTvTTLTB",
  "key24": "4VWA4vcKJiTsviy7u5pWLC4kMaHeYM5cUnJJKKdbHCMa4ALbL4nkuGPi4p6HH5rcMLHqjbpo76ikcvwKmVmi2wzs",
  "key25": "3eAwPpiTHhdLtKYh1W13Jsh8CRFyKis7DNZCTfPcFoAGNixGoAeBiFNmRFvgKzgQxXdfe3VDUzxQSdUY8SNc2R2Q",
  "key26": "5czMsTFHqwDRU1gfVWvFvoSa9qEtuXodhmiGZtFfSfc2xD1b7W1e6Uhrb49VZxuYP3moMbzhFnVTKKReZiqS9pkp",
  "key27": "tw5mkRzoZEBSotc1sohDhov6tMsqsyYnv3dcgtkrtVdrrYBqcGtmD1pkeXRVUbURmbB1Gm7WLv5TFUqmba1r1yn",
  "key28": "4BtvUdw4UskEuanQ8U8GzYzvuZpVSFZQYkJPEQXe81K2Cv2YrJFXLMHBC6cYtkemb1ePDGNXosqLtyb4k48EYXJh",
  "key29": "64fahyjRf7kJ8kfxQH71zS3dmAp2MDUxmeJgNTYaZndNpWz6prTXYRMdby2j2r4BrLBWixS1ETgT6WpZihiSoh7C",
  "key30": "4qYuMF8Z8ZmkhV1WABfQJk7cjBQNiNpSjLRrBCCJydNvchobcvkzicVH2dWReqgfKUt9h4KGt83Ht4ZFgJe3j9iZ",
  "key31": "5QPLX3JEEXetyCeiPsCYVbL492AjooXBPU5gSx2CnLa81yWG6ffAwciPgUQK5C5rtgcaTMFu68ANsNSRH6TAhg8Y",
  "key32": "4LFMuRgQGYNpVRsnbTmXFAWTPVb8M7Vd7bLhAnEm9y6buk4uAqqBsroq3Jide9kH1emtgct8JPwrNeFGSBuNCSR7",
  "key33": "xm9WotPSHmb2SWCCYnsfQKwnZH9hbB8hiNCeiHsmATo7bTjeHafAy2v9UVJSio1fNNPvh6nprQhzD3U6Vp9WYYm",
  "key34": "5ryypLhDNoEZNSZfiVQH1C93y4e5NN7mujmPDuswcqyhfFBQtynBXzBJkPY2YEGdXBiGTQw7sPJyeu7SvRFsMkX7",
  "key35": "2JevKDJrbsjxAFoVCBwA5ocGJkppyDdryekXmnXLVGZJSKzgtYhBzxHrbaryWdSq7c8Jqi13jn3KafCt2xcef1Rh",
  "key36": "5jyYACzyswaLBSXWWLGNi59iPu9SPSwRPe2BjHp689cwdhu9Gv5WwVYtXoTvGSqCsFjMqSmxouBb91D7wvemGDud",
  "key37": "4cYCSMRktQCfLE3k3L4zUooQzMZKjvEJuYfQnuGFtFJmkVzwkYfQhUZ1io9TiiDa6DFdvLqY6RVuJh4j6rY9GGHX",
  "key38": "2nZRWTKzXPzL6gFufFYmNkeTzD3DfJEykdubDsaWFJFAhyDfva6LduSqy3vJYUcMTh7Wo2qEvNBoVYojZ1EefQZF"
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
