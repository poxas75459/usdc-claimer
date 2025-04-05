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
    "66rQfNi468NcUkXtgNM9JbFfPJWGyAEnZUt5i5qwea7Uq9Ysdok74Mz1ih7P1jYXujDuEcWzC3E4g3YJamnhEZBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZrUSx6UtA16GcapwiG3PtV9a1utWVk6zNhgkwTzR59G18kNfbJ7bP426wUothvspV1sqCuYTVyKdcg2zofaXM3r",
  "key1": "5o638r8ytEw9ArCwLmSvrJ9T4vJ2ykbB63XgQQCbXmRN5JriujgG3zRLaZzVX6KHDbRKFtr8Yiy8RiWo5WJdNiHy",
  "key2": "3gBrjcijgss4SRkdjDaiKX7uX3yCVF7oKLDmKGeV8vgLcYvi5mvV9YsGTF63KcXReom8tEQZdVR1LuA9NnQpa1vz",
  "key3": "43qW7EqqVwdDdoVaBBqgKVD16CHDxFLzSGbvvyRdVP8ELcNZSqqZxMeyL5ygZ9iPzAD1jFNVn4hGebuHNvXA2QfH",
  "key4": "2hSfjTF5PTzd5oqRoBzqt3rMGbgXV7jLFePwntHv968oorMbZMJeo4SzTLzKg3kiYq9jDSNCRRmQBuXxNKvT61me",
  "key5": "3XgoBpkFzMCdk92Ki6ei9ZfiMK3Xxuxq9af9MtqH4zxs1Dgj4jkiHFvbNwEw8PWZr7mN1tmjckbdcP6Qw85vuMqr",
  "key6": "2b9M7o3jbcc4C1o8hJiXBfFGYk2iVSgTq4HzexxMsfAqp286Kj5t7PkYJ3x7gBftY3Ydbfa8gz7XVzC3uaXtZt1q",
  "key7": "2Ff1mv8nmJcVATYCTAadXKGtS8zgCz5GfRuQRNn254xy6rHfKCiBLQqCei4WvvwKBsUmG6rpXQHXXJ2gEDtw1GuD",
  "key8": "B3x2w8iy7yHPKrHjszx7wcgRxzxb7eYVQh6cfyDNcDL3rV5zCE9yvnXmTBNUjvFRfTMRtM4pVYQxV36Hnve7KSQ",
  "key9": "3yqn2ykzGwGwT8cpE6T2HF91fTw8uku7CzRnPHqwkJkAYWCbGwvEqzkZdEXcuvNA9tk1eoG6E8EzxPkoZkUG4TTx",
  "key10": "3SuacAkf3Mgx3zdoCZqjD9sW4zy8ZXpGnqqRNUeNTHEmdsA9RaxFyVGP2jtH42TQdQKT1FgiKs3icy2SdGt3dYm7",
  "key11": "3sKxTbWyrb7thqbas23QTobNArpHuiDchjDz7XtDAYUmpT5BE9JhAyhK48JntE2Lcq6cbvKqNNptQrJMUEYNkYV3",
  "key12": "CkqtZNx3oX9sSZ3b5znnL6m62U8kete4QEyncrrssfQ4kjrGgVo45P824YRoEzmk8ubrtxxeRCFxS212oUTsRRA",
  "key13": "2yBQuaWuWDcix6WonNtQNxckLWeKsR6VU86FZ23XSUXFhXjKqXZR32XbxJpsXD7ZjtefzujRZL3PCY2okevSRqsr",
  "key14": "4EYhKzsEG83vGXaozGETGQ9MmPLc459qTtiUncVh5wYyVDLnwZtZEY3oV3FQpSc7pW9o8Kzoc9cqgK26Fr7LBHTt",
  "key15": "36Lc2PZGDPgEcsueSpYv84Sc2agjrT3u6WFy8bXzuNerW9W8Gg7qZitTN14t3JcWpsbHDnbF1DxuQLizJL11m1A5",
  "key16": "4WAcF2wHVh5JkCSeK2n7kQRmzhyH9oUA9nW5FWTJfz9o9zn2VjxynvnRrhWqTxA5BYFC2peAXuvWN6RSUh1g3rSd",
  "key17": "5QqAmy78aJ1tVLeW8PGkPFJop5GUJe7QhGiFS4PmPpYXKrZNs1KwRqEecJnk4dJ7tmu8cuoTK2Goa5cDFMcT9c6d",
  "key18": "5QNTHzfimTSL5daq2mSE7qx8XZwWVwS3cP5oDPYSSHzNFGSF9q8qnnaTWEB2p2E6xxFpGkN4w4W6bKKStssDb7kh",
  "key19": "3CvSBa6oQNYdjPjmFfXZfKTV3CQvUy8PwGvD4rPWPTytFVaXctDndXrwqh5kc8JjJxxgJk7BgHB3RRr5GcEc5UYj",
  "key20": "4Knw6kY7pMXs7DXeH1UYN9hpJ6J2K1UFXYotG3oqeLHgXdATXnC3bcQgay9dK6YHgAbqf99YzyzzyuuHdCFpg6Lo",
  "key21": "4V5aft3VxMtAMedU1NAyJbc3ZYXX6eTMr6d8PZD2cKt2Gcnhd6drdnCAeUiZ9fpeZQT4qsGULvQxeDy9xafuYPjv",
  "key22": "57iBRzys4G51dqm1JseSJyooh4hAY5iVy3vpcrqhcxx4wrEAitTGyLMTceDCVSGwoLdvgcbvRoTGm4KjAm3hJAkb",
  "key23": "BpPFT9WGwzdH14HUpQRFvpd4J8oVr2HvRaKrj1pBb4wXvauF5xGBNiuHt2c8Qpb6TFgyVVkX8Yavw8npm9KDKUX",
  "key24": "3HwKgsUkwVgf82nhVnKKp1V97V8VBYyxHcKBDg5ucQefZ44SAW4b5c5tgzBMYxsdZ5nTiaXtDxGHjJ2hnCKvNuwX",
  "key25": "5dJTKYtZtkw5XhtLCPwL3BBJkAtDZjpXA4BZ1Qea5kRXtjjtCJU8rTo8qGtvc11mxgAPLpRg1yYNFUDTLsZ7QA8C",
  "key26": "JjVJtScCw2VXiU9y791UgTYmMjcBAdg1GSnQiAAFsicRUKK13RbLiSszDmJHutqs9kMbiRdLXFAb3qgRMCrKckV",
  "key27": "46NebkkuzNSMiQJbnExqn5PQxhiCdf2iuxwUbyuUhayYkjZo54AzEmNXdNKsez9HYR26fCAhnYABAidqNZT9M2m3",
  "key28": "FKKkVone6UmGJWXQmD5GpkCtNwkmiFBamsKAQc1PSwfre1E8u5D77qu93uJoSPZkKF1K1u3DPsLL1igoPzPfsqs",
  "key29": "vBRi83dCucMLgvgRjgN7wAhjEVYQFjpsRr8qTvPCfNvNbP6kNr7sxnViEf2NXTNRbSkEa7SWv1zQf19r5PWsmsT",
  "key30": "3gakyMsMo2GkaLMYG1foPUFzJR1YwVAuwdhKhZsKCza75SQfcujCbExtbLr69qVF1padg37hxtLtdG2dGff1ZLAE",
  "key31": "4MiTtT8kAxyLVxbXYau6JJtcMLUTLYoDBnf87MaEeGh9Y6Wfinr9GvpWu7AgXVmnESSgrUMxBZSdkPFhUV8mi3ge",
  "key32": "5TX2uQAQfACmgqusmt6DPbQGrudptaYNF2CjqW3jnDM48AFqD6YEW4UPCdnYWusGqBSGZbmnL6Sc5n9DnrKyTDrH",
  "key33": "2SjzFU6uomSiXbi4CSzWp11esWtbFAAjq91mkqgWW1SSDy5yACbkdaKmy2BW9qrHfQzLpwCNHiHkrLVx8r13YXXG",
  "key34": "26huWytE8RiGXzerUeNmdqzu9cnsaxV8QrMw7L3hQsdWEa2N9SEaDbxPM9RYVJxrTeNq3fToNLxaa5vdUz6g58fB",
  "key35": "zcU5m6AUnXwDRpvMN2uvuY9nutZZ7QW9yfxWb6tGNbv2LF8PY5b7xLLKzgxZ9txEfn68exBy2pgoaAm4gYNFYmi",
  "key36": "XmGpQpEsaHfZUMCQGz7rfZZZMzM4jRsZX8KThWqbtWzk85GpiUhPMzvoRu9x6ajgp5S6yfQur2Bjz8YsPwskooL",
  "key37": "5G8EUfG1SJGfafuZsnbHhpk7Ad1U216Ew1VD2SbC9bCbNwXS2NJaG1Q58XTTS94ReCSCsZskHiAj7fuxg14c5wJQ",
  "key38": "CaA7PTqjqAqUE7csmzSzeHYhxevYR67Ce6R8qYB8uHBiPeSeMW9EjzumRZvdpiiRdQ7Fwk8dqRvMjLc7kyG8EFe",
  "key39": "5fvz4SDTvca5J8GKZQGaXX26TCidfK2eZsMetAg2um85NLWNVUbkRQr6AaAw53UMU2hz2ZEg5oMKc2CUBMg2qucv",
  "key40": "3BkLsNSw4qCBmxXQv2NrR5SadUho3tv3ZsY5BLPcReiRobiXyZQegXjeuM2tQ9c9TjhNTqTMC9DvkoQM8uyCPcWb",
  "key41": "JSQhAMePdhx45NEYDWMzJJQJeTAfcBJb88nLyii6R4BCFT5x5FasKcYccAXRrdjoX4MwFPEPYnbNuNaNw7KavWp"
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
