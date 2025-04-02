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
    "3hkz4VJQyGTVHwJyj2yk1zkM34qjVCQpz9Y8uz6g2XHcokQKGBFobiWEM7SsqDCAtTmRUK3ac2MxfG3MDPTGR9pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKFMq63NuzFFC6TaSeU416GHknLZoFxu45LFueEBNfRo5hVzAMJSyAMQMdfVFPerdiv5o9mh4ou17MANx3N97xA",
  "key1": "3yHtrsxi7wKK6exhw5yPQgS1JwAfRAjEMW1cy8H8GF9F5dxaZkcJHwvhwyKkCVaNxmZ9maPGQsDYqCAbpsqqkSgK",
  "key2": "2ubrQxD5TV6Bf7Kt2Wd1ZamctpeKvKYC8GXFJvk59UBKtw4Fjk4eTQJsCg74ypnPt6EKE6ncHuPQ7kEMaUMxSsym",
  "key3": "1ZHHQvmHoj7Ky6yiBpvDkqYMVTfDYCYWynytxQpYHqiFfTqyXiHTxzGcPr5BhbMuXEcwz68M4g4V7FkgFq15wzo",
  "key4": "2QWvJS9ZSdBHuSbEATGeikpvT7X81SpRt4evBi8g1aK9BVr6DJjdxQtU8bxYeFtN17keYTDeQLnvAdnmYFLSABu2",
  "key5": "4TvkCcEGU1A3S147QQM6u2P75FXi3jJo7piRpBkA2Qhro7CMaYGEBW1Wz6ekNwpDM5GP8YpsUm2KVZSmvZE8XhiV",
  "key6": "5anAYB27J1anBRD8QLcNaL3xX9YrQU2tNdDegfek3oBBhJPQMcZg8HbumAVDWuREJBRFSAYTF5SzeceEdcnj5MSB",
  "key7": "2A2hHed58atXhvLH7DTpQrqm9VwPw9jv8MHVgpvj71Vw87eU6Vurnk13yqm1YYTfyd8v7qSrdWFarNWKQmFmwXcd",
  "key8": "LkS95nuMoajxvb9sNbPDCoXWbBtA26aouXmXmAyn3vFhh23dhbHj1JJUrqnCexrRRYBfaFSaF5fruMicp6w69VS",
  "key9": "52RpqB6uQ3UPF7kwDQxCCAVpzZjtLSucRkrCEY9aEkdQhoWec9pBXWc5PN34gCrywkSnNQQQ6ixGyRK3hvYcL9V9",
  "key10": "1y6ujry6vzcJjHQc64WhCtGRHuenu9d2KESozt2PAEkAgD1XdLKyxjTknyGUZnQy2q1QiHGnntyT2u8HyYXB8A4",
  "key11": "4nf64BPcyp2Jsi3RKzQGePdNmPoA5M8t8HeLrD6xN3Q8RbF2QjbqHwo3uZQunqATgP1ezhhyZN5rqAqvBMxmRrDi",
  "key12": "qUwUWgLSnJ8KhJCzQALgvZrvL3SVQ3YBRHLyHerpLLcjmACYvfsrA9pPFtiDDG7oUbPtCroy4DD6Eae6hKcjkpP",
  "key13": "HQdrtSZR3kC4fgZfLAzXm8kTSMjX7eWGrZatFfhwiibfSC8etPAm2b4BTNtcQxJxEXtghpUwtTMiNYdakyS7vd8",
  "key14": "5e2UE2mfTeofJVGFHLg2pChWsTRct6Kjzv1ywxjFAr1uqDPdkQrZQzas4RSScrZhjHux6PW1731SLRnvJPccVyPk",
  "key15": "38jDskiN1mGUBvK4KCprExsgtNWxXW549ZmWy1FPCkK1NwCva52gLD6zmXfd59VdSnh2DC94nQ8Q49d1uAhPthUg",
  "key16": "39F97hR3Yq5L39T3nTxDdsBEH9WbBwkH9WPfVkUWzT1CCjz9fSPcsvoTzRLQzVTuUXnEmFW8dGZ7PWR1WTNWUvZm",
  "key17": "2K4D8HcB6QpXtREaPkf8P4j7ixvqpJCyz7dNu83uz8qr9msREQ83so9HuaNePe2WTSXu21Y18spmTAKA1hmQgD9T",
  "key18": "54QFsffdwuzfkQhik8NdRDKStg79cfQbwNktRTzTjXaVUdWfzHGVeYzGndS3oS6eVy7yPY1TgUSiMN3b4auCskwR",
  "key19": "KYJpzDtTjqjtcNpRWZaBSvN6CXdCXYBY1GvkhSA3aSSMxYVmnR2DDUmgjmgBDFF5Y35C2rhgKHAGFjHkHEWquPB",
  "key20": "4A2rbPEpbP85ZVKTDa1S2QWF8VmAt9rS8PT1xqJFhPBoa21hJpRm6dDYGZgtmJbJhiRWbkc1MMo9byAHcDh7EU26",
  "key21": "5GRRQRAPsYys8BYFXGLKu3EYuJS2tTex1HzPSaqNYkGj3eVNPxLuYWJYUy2k9QvJuncSjk5bwAwqMe1q4Co1RM2A",
  "key22": "5TBguTY1b1kEZHXByDzRGpZfJyxD2VTAWW6XYAvAj8w9z5peQAHAP8tNkfZxDXmjFd5mFiQwcR8VrhKqqFgkL5xN",
  "key23": "4uDaRWGYfUwkVpsttu9Q5XRqEfLUKrzENU76S8T1cFivcNW62E7SjUeMtaefASVid5tUae3wpBPpemP89avJ9Ueq",
  "key24": "2gUm9wmp4VbpTTPdZJXZ467vG7zu21aXjBM8UbRtiJ46JxxzM89tqnf8HD4L6KquVCCKfR9uvzAu5yc8E7cgeFmr",
  "key25": "5S7DUFbNbdsBjMhdxhdi3FAtuRUSALn7nTFX6n8g1gXJ7GwuUkf2YDHw3QWN4NgEW6CsZMToxCe9S7RT2z6DSB77",
  "key26": "bKDA3fF2P5exupZ5duMYC8RjvMvwjCF3JtrNEnKUHvYc4C4Pva8q9nGQTJ5JA3hSKQJ97RdXj7XtyUYyKqCjNkL",
  "key27": "46KqqWALbvyx4WesFBuxn8apqYuVJPv1VjGutte5AJ86nvjs9Lz25mR4k9BBKmWwFq2R6TA7PSju3fG8mhn5AbF2",
  "key28": "4yhfAahUWXBfCMp5YJ3fuaPEyQ8ZddkES3dXCUsrfFHSC8Y5CXrZNC8tMkB8WAybfQQP9MPaw7SKRh45zxs861hV",
  "key29": "3LMTrRxDsbt7xM3hA6GHtcZKF9pxdwAfcqEtvBK1vPEghGXcsLRDjmQh9kBTwS5sFAmqpYMjDQcJNWK4ucsQhbir",
  "key30": "35M6dTGSPJoy4VqJLJbq3v11DmVpSK24qK8kH5U6zUtxax1PFXsVkfy67BhkkVwSndC9W6XLBFfeaswng3fSmPXj",
  "key31": "31SzCdiTjTEedb4SE9nSNJZcAMYaFwdycu7mWFkAbCxnUMRVVZa3m96ayeYPoUw4k36grTtxQok9LpnErwNjNTYt"
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
