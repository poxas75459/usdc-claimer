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
    "63C9pejVeRc87tWGukAkvU6AuyNaE7bugWiZNpd4BLDYTMw7YkXgKZvt36T6aY3W71MVBEBL6WLiAR6YnZ5wWVjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMSRbaCXTH9XAVBR1H3DbEPU42dHUe1yHVQnkcCyPk2aGhMpfeNmPBPYD2o1aetHKMgvd61b39fpdcXKj1DbDUn",
  "key1": "4KX9cs6FAiLEmccsA8Nfx2jiRMiWr9fdGC8z99YpsF6Ykz6uSxSyTDRQBZgYukbojcu6fohRgxbhhk8yMgEpdZwU",
  "key2": "4j8WYd6ggELAekcNvgrgEjwmbvw8brxUNbiLX5187feh4Dm7U52jt2S9TFMMY7nWRN23hh9AZpHCcyXGHhUDWEx3",
  "key3": "3MEHmgWEjMoqhwQYApRW335rdr2C42bCGJRXUrHgmnQtx5W5mNrbDutEm1NDwRXD1dMwT7hFZs9gKff6Z5aoMkvC",
  "key4": "37kFsVs2Lpn5gcqageiT3vjX5gMDgG1SKr6aKz8wi8NDvTaVkYaL2xcxGYCA8A1UM9HfJM3Gb4jQoRBNCiaQTxpg",
  "key5": "4r2dtEQF2iZBK3JfH2JNGD3cGsZk7yRqhn8pwLQzhh838WkbvXebGQw8AjMf35sCdxrVaY1zYkWPwXxM1dHH3YXE",
  "key6": "oZxsUPAFbLQNBb377Sq8Jv9d5HFGj4qR11ZaLQFAUuapLzj7fGWzErsquK9MmSbKEQaeCRBZY2qBRrri3sdWA1m",
  "key7": "2SPhVCwZQpfP3x8XjnbPWHUTac3LJYuMdnbZoT3Yi4P68W2XiBvxYRiY97tjUoQaEUvtQ2N39CBeTuRXvB8ye3mA",
  "key8": "3JTXg4LKotJ7nwx17znPgKKBUv3XVDeQDuYxKRTqGHH9qNMwnBWBxgkzft1YjYExQ1gcovYg9RwU5rNntsLCxmqk",
  "key9": "hAuS3NbjKFMNEX96rCzCszzRUh9pnQfzvpjVaN7MQkskXdHUVDZ9oQxMP9KQbKxpKSmYaVsdgq3nV1wePeeSxWd",
  "key10": "4go5TQ5H4N97utJxA5m66pH4mLKAw1eomL4JKArkf3DJBAPHXJYuKhtx456DSH1pgdMQfhXRSKHrqw7AbC81Q4Cg",
  "key11": "37UqMjLTMqq3GnzFk1gEVfRvJXDDPGo1v3MsuNxnBtNxUApnJoyrXqWtPgP88hdaGXsuC6h8cAmmDHrRnGmCgV45",
  "key12": "cfVVTQ5WyrBKDpL2zW4FpdLknkt5TpmX3gJkF9pziepRu1URroTozbc8KZNGogQDBLqL7V6gh4XX5Y1Xnn8ALoU",
  "key13": "4LKoJmRNA1ADks8pt1teBhghXcPfRCTDjvF6VgcdqcPhchPhm9MkMnQprKrBdkRXZKpjqaEwSUSy2wYpoG8NHC1h",
  "key14": "3CFKYcYpsLKVsxhYZPUSUmzLEyhKizt5FQdoPdu5FSwoY49KBWugQzmV4uKGqLAq43cMzAyyCvCVfqvpsjkbAW6S",
  "key15": "8kPaoh2mn7fm28PPBjXChHtnYyiFxecCcBQHbJLuuddEauJzkQw2uFn4Qd2Fx3YGvVqHHgvu9yfMpUkVpuoZ2ew",
  "key16": "3rX6kxXrXVLqzJ8a1G9AFnwqGd8fPdJTXaF3sBYveNcNuB1CTPqrXxG1qW6ezhjAxUYuXHa8CKGbDFei8Nho3tdy",
  "key17": "4FcNRCo8h2iAX6aUV678NhNBxd9d7Nwwx7orPEZ6xFChZzeuDMWb9TBodfzgRxRfT9FWLMeBcp8YqxytZx6bFD3t",
  "key18": "oNUVmwszddjdMrdZjjZ1ue2usGX2H9Ejfjzu23U4ws1Ypzd9HVSLbYw6sPCoW7rJcPa9865BpUXTipRoqinyBvo",
  "key19": "drvtdRdEWfKdCekEUKNsaAxzEDeM79dYYwE2EisEBzJvcRsXY6cjaTVqRBWTVpWsrLYg4b9Ej42Ma7DcKL4FnAG",
  "key20": "4neAT7xztJz3uPvLrwavUBvnHpyPsYnv2bWc9EiDou6L6ha92ofMA7nCMnLzLRBt87fs9YQX26A8gvZLkm1LvgR9",
  "key21": "3ubK8fCigg5ABBzSD8U1TUWe6Z5h9f2RccvUtp5VeVdtTNdNezhRG7ga9v4V8wzTRkorFofAtxmk1cGLptQtSs2E",
  "key22": "To4zQQ2JtoA6brWSfs2k96pezCeeCYQwWuGebqcoRsqQMbDP5TGgwpRY83be2Ji1aWpw9zPtDxwQrK7b38EK3YZ",
  "key23": "4bFXAkXmHXcJQnvabmwK2x5DxsCujy13vPvcJB3cx9mr2vbQ7FnQjvvzTbsutouTetbHScYyqvhcgYGiapLuuuEf",
  "key24": "2CEpYmRyJMp1AwYVJg6SmMq7pJgP9UujwQs6x2Xw2SBS2usejKPFXfmZzHZZHgDbAQjccxKwZmNYojdasoLg35gC",
  "key25": "2x4uxzs6pt42gyBqd6hBb6HKroRkkQwTXdqricbesm5yVUKPnrdoWjByk2WYnXQppfu5SVpNHyUfGJVLvmZWcxY6",
  "key26": "4TPUMmNyVU2tqucgTFcrts2baCUtQGskwgtgk795CdYEt2zDwQ94qmSYnRgCc1ukDhYAViZZ16cpoaux5vxjiuvm",
  "key27": "cHCvi9k9pR1FEvWfxc9nNcLmy5fh1PzxgTf3CoK9p3d4VaztonxxSztVGr6QjdNhHgAVeFY2vN9LrEKJJxfG1p7",
  "key28": "3yN3sF5Ntn3YrvkXfVC5b4ENrEDKZ7AGGbs8Yrm71Ge1DiL7n23ZKAsLv73ay1xBNCH6fcjWC8cRLFGHRTpq8sEX",
  "key29": "RCYjZLtDjav8nzekM69h3XHTJx99p663HBNaAZE5tHedG1mj8q32J87MbjuX9zY16jP3w4HZf9yRGqrtsKbdTw6",
  "key30": "uMRgXa9x7sPMkab2tZaxXQ6ke22gBooYkfe3Cm5jthNCwMLbhVuautFAFM4tvAWePacC8xgE9kn8PpnNZWpW7NQ",
  "key31": "62cwHu2tVFmkr46fi9hP3PGnK1KRJZ5pfo4ZRAYRmxE4xx93BpQZ3aBwMrpCuHG3P8HMn3MWf2Nq4mP1EsHkyi5B",
  "key32": "3RfJy5RA9yqVFkKiMksodL9UuiWJ83SSP1KvFLR56mmB49iqEmzXynHaDZasmRAmHk7wjUg7z6LeKpAzSF1ccFUc",
  "key33": "2Lyb3btKPx2DfUi8dtJgVNFXvbKkBJvKFRfYfo4kTpTfDfmkE6vPtc6a3j3vBGa5A8czZqCaVjfeZ3Uzk4vyPrvZ",
  "key34": "452r8i61oJKRfn7zCU6QiLrqiS5dGtZnCFX7tgvtWaz1vwNq5E5mLhaCHdDTvjuLnvtEyjtsQtV9Z1JVJSSy6Jib",
  "key35": "5iHLppmVk4y75Q7yBHk2BsesbkjoWK7aNNVyNqYQdm3Kjexu7ePtAvL4kYtjGqGU76MrBLt8vWApBeCQ72CxY2Vb",
  "key36": "28PT12R1NDnCKTSd2KX9U19esjYXTGzBg8cW6en96Nd3fnycBcGbJaasZNheQJc1g2CDfnGvQjsjfSRZNwkvRc6p",
  "key37": "4vrPQ9pu2DhTGih7Q8cLrvVbt3DFPyvKsMz9qPVgaaEx7Rhjf4Qs8qHAggXtP566saEhiLmHwLBrFhA1EZ9G19PG",
  "key38": "2eoBnh3kuSFv2FJTaKQs3LUmDZbmT1Afh8oecZ39q3hGmEyXx5LYY8Zku7xXVTqzC6KY5tkpKMd5n8eUdQf6jHJk",
  "key39": "3LfPV2PHanfojQGT1Snd5vHNGAHXyQVwRfzUHMKwao7MN83S3Th48VmxyL2aFwPJSy2xhYGhFhu9oxv1JuxQrC1u"
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
