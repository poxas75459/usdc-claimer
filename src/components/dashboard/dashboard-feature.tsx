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
    "2qLV851T78prQCsCKABeNEE7QdgvjhPTf8sqwtGvXAQ7njtGziCJzVjyusTg75p1eZ8BH57CAP4BguD4qfuQd6ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56y3FMDPGm1sL2D47fqAputjAyckkMgqJkkjzTHZbothTVEDuVVjC8Cp6C5VEF7P3ECG5qy9FPGYRrprDtJx4Txr",
  "key1": "5ix1i6ynkLMu9VyzzRzv6QjF56o85p2h1wFHH1KK94q85f9zU62Wer5MZ7pNHCpkcbAxS4JAaBdyF4wovHkpsQ6r",
  "key2": "2ZiwCg5gdQ5xffJ2zqy9e5hsu97XBEDfLHKXkCMQtrugtzEkKySERmYA1ERszNFFwDrpqkw5i4o3QUpeTRL1JFxq",
  "key3": "C3euzu4Wx9TPKCcSvijAVKycCCNyVuEq7tS3FYLoLFmGKjGrywR6UKrzvNKTX6idRGfEQ6uFbpzAmZKecVL9cwL",
  "key4": "51brTraehxdX78VfWXuGnsciBF5THFgSFXn8i5MXdcJb8N3wMbvPXNn37rcXRJrT899zxXsy7nbX7LDabHNA3Agw",
  "key5": "2prZMkcmCF8ETfR9hc2EhXdBBzCXwpYbmgiSamZAEJZHJ7wFbo3SSVk93F9qieuE28RjNEPA8SEk2kknyMB73zhZ",
  "key6": "4G2SwJn9gj7DdgKypzKyVsiHCU69zVKc3EerAZ6ijrBHStyjhdTHV4f4iwKspmcWEbE1yKY5r1tnQ7GA2gGNjVRa",
  "key7": "2UsEi1R7wQkKcvxzwYMrhfMN7AsxDW4EfZSv3XKFFLQtYGYkZoyNxtR1nexxAyKbuMhxMzsFuJRoSJuPpTpA3sGU",
  "key8": "x8ypdgbP3x95ydFdzZwaWDWDLWF8Wsozm8eEUgcYaDUR48zFoqMSMUXD2a5MYw4roq57isZahJ7y1aGpWrNCQaj",
  "key9": "5ZK1WHPZzxJ8DZWG6F8tpZtusdTWFMVXnjbMonmsYBdA1FXHtisF1C3snZV1ftHo3xDDjatEWnjHbjj5bajfnZJQ",
  "key10": "5iD3cYx3gi5sA7iU7vrebyz62rNMCySjWRkZLWwW6YmMRzEfBTvMFiuaeeAWsX9a2HFxJDwmGeYnWarnxV2sMipf",
  "key11": "2d41teS6diqvFiC5Vk4GqgP8itsXVDY5CLa3ZroiifUkW2jcm5ErUVefR6Cboz4MBRdPQYgymo3s84wfFodHAtun",
  "key12": "LqNuDjHu3oEfpcDNweL8oaCAadCaA1jNNt6oKaDFfLGLEkhxVUpCNYJtyrPsXvWejKxNQvZ2vxn2FeCGvdb2ht2",
  "key13": "2oGMXBU6mwemWHH1fnDQUVs2Eb8yqNFVJiuPurrBRJirjrRTkXF3JDNZGmgvQtAP5m8VvCbhJryDyK6DZkmw1Up2",
  "key14": "2zQf7YTEfxdm7ve7gVB3mbb3zYqg87EftpnFX6ypm9x99DjMFHvXiZ9ZbFLL1FSgZw628UFWFnqfSaSa2r8wv48U",
  "key15": "2qjCaZ2JnRZQWXSk4yTNtSt4BUAYhGCdSPAbCi3NujCCsjsn36ZbtzALWchnfaLSpDKmZMV7wGQHDB6TFschdNEM",
  "key16": "5vwVomw5QNcZx6uUyTsHdRNmaTz7GUwHxPn7e5D54KBD5n3jDKQrjfED1qV6geDfymtQG5AqtQv4yWvBAiybwaQi",
  "key17": "4ty6QqeUFfHJbwRH577NU9q1JQ4h76VWDUWsaPJV7Y2WRHiXeY1YGFdBGBSHPCZhmLGDjE93nY3oAL1SNhUkRD8d",
  "key18": "5XQhRrHprDzXjZ3odgpd3k2RVXFbyspz1Be6nMiQgC5xgg7LMRQJ4ieVusjZT2KYQEcgh8x6e98egUU8uwcguXrT",
  "key19": "2Yp7P9oq5EGkKLkonaBjsEx4Gk86ezyeoj8Qe7jaoab1jycVcJ2TdKCqnjgnnW9wKZ4MXddhEBp1nbs2thLN5t8Y",
  "key20": "2Q5TyzuArz6AuS1hLAxR8ma2FbaUJymdGwswPH9MvWFY5qd4cXs3gefNLjv2E8c2kF96ShLiLgc5bxbBKmUxoSLq",
  "key21": "41ybQWDD32cSMRiGRSFso4oqViLsinTL4ffexmubSFfMZDiG9eZTti3mBMr9Yfqnnqj3MmKkuauejo85ZqeDrSXX",
  "key22": "5eNbasf2VUfrgP4yn5sQLmnFd4cbabqBoeWpQ8EKMsfPzYvHjvHprK5q7gxbDKPGWZofvTGSXRMFEqjjNMmsYp7J",
  "key23": "7dDdk3kWx685o5io872EY8GMVtSDbQMa5j9bTN424M7btYBbGm5gpKQ3thMz4ddTiUG9mLQ1xxQ2YgGh22P4aqD",
  "key24": "5t9N53Zfi4DmHp3C7qqhT7jKCL2qwJMnZeBbdqTFft1UDzf5Z8M3onqE9tZf7Fv4LzwT73Quww6PSuPCN5SbZKq6",
  "key25": "3Bk9ei1r1vD3cnAG7uzmU3onCrUWaUckpzqooRE1Sjdkt5DiMZfhRbUBv4zqD2nYMfr8FLUpNA7SJ7i77A2p8jkM",
  "key26": "28GpuBX9LvXzY5rCbDKhtybc2wu4QPLHsrHbttJKiWME4TaDCYKvY8XLoZRdgB5vjhyJCBrm3D8rCsv6ginQY8Uc",
  "key27": "56cvDERUgattUGzEcE64X3zzLtiq82nAvbrfZAsqrB4e3oEbSykhU7VV3vBitGwwUB5U6WwUuoRpKtrPaxPKfGq1",
  "key28": "4AHuwUUNdbwFHtyfS5DxrJeoDxKN3Pb5qvMPpQiJVmPTvWeND5KgdboaZp1AKH8GNfzL6EWHXjuv3EZbPqQqHEnD",
  "key29": "5bHsBhw8Mq2ygvwa8nddUYzdURV7uW4i4uUXunXDZcVTKXfvZmmpWhozLW3gyoQg6PHFs21fRuVSkossUkQRMArV"
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
