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
    "5Z8DyGuH8D9MGDS99Bb9tSiipkWicDWtfBCRcDJZGMNbpHw4mrxwVjQkjjntKBHwq8743TQB1Dcg5FQgqze1pdTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gF9o9U6bY2axRUFecyAfkNqE2cMV6AcgnmjRxSB5fdKHoaVFeHnX9es4zbPdLjYtQxYSDKcojtE6YHbEMiXxKYo",
  "key1": "zj1SFxaUBe4WwFfG748Lny8QY2JpPQ52GZQvqhugjTMpZDSSJhGd1gkwGtQr8odNwiBUsUybq4RnF4HXuNsK6w9",
  "key2": "2MCUSjZYBKiSLMYGFZD41uLJfqoD2vzLwq8LrXaHbVb37Y6Z8o5LaCXSdpjoWi1hs8ooDtyg8EmD7v8xU4EzbrYh",
  "key3": "4jq58rU7RWcZyhrzpsHfGo9URYtDfWVwssVP7bghResK4j9XdRWzXA1D8Q5cBbSPWwGCqp4FUz3EdMmXrgaYLqQQ",
  "key4": "qNZC6DjN6RgWYoX7ANv7JQeqS5BTUipyCrbhqkqMEe4P3yvJ8CZMtWQmvBrwXXEb9moss6Y9jYh3JQP8SsjmzAU",
  "key5": "4NPpL1JommyBmdAnFPK9zP8HLdZQGAH6bMWMk1mix1cWYAUwebBkfaeJisziQkZx2xpVrhsX3VvyettmQX8VTQAA",
  "key6": "3zXoPZRdHrQ8wje57XZw9MCgEx6ZiqjaGo7CcLXFTh1PMAihRHf8k9piNzPRWaLVPa19r1WZ2N1cJQCC6KuSVMjG",
  "key7": "5hsHLsQJbB6HbCjin5yo9zok7YyVmh7buRwwc6uqKxjVBK6UnUmSYk9UgfW4GfAbN5RuzrXRgzBga3syA4Q86qB7",
  "key8": "oRbCoFuAGVGNxS4hrH6mfdynm32MTpjyByK5rR8TZa9JvpqsDmKTGUxa3p1AdvxdWcijq732jifnmExJYtMfEEu",
  "key9": "29rzDWFanv2YiHB6kUUKFM3XzopGwsnpk1LrgxZYdw9H6kDVPTWRNeNYoRj8mU5igNWT3VjguafQbjFoh2fD3wUV",
  "key10": "4UHmUacKuSSKowR1384qzH6XUcCZiThc3RGCx3E8EjpKRKNBaWeihikJ6zj3jvvxG3iu1tQ1fzDzgRGBQWtMNunD",
  "key11": "5N2R3q3bjrQTwgAEJadyo3n1P5MiLVUspUMF4pTnUwewDNRaxkDQwTQF6MAysaNsYGWfMG89dA5eUqJ3SiHJ4a6P",
  "key12": "dcM7NkU73f7W78xp7u2imUuYr4uP9ErSPCwvafuyB2EDCbmgC2a8uzyVcdgW43wzuP9gVLEtsxqzhs25X9Nkmb1",
  "key13": "2sUyMTQHgxN1D5WRmGtwzAMxtwVWEMgdKV2S6pkLMoaNTATVpJhEww7exSrQW3qAGAdmF8dU2SnyTHp28HVzZSjd",
  "key14": "2U7aU91ZL3g2oyYGMYhN2rgiLY3w8vbxFAHzQCRidnkmbC6e5Durp29x8LwXyMqBtG3Uy4NTeWmhBrMJzGFTbnHX",
  "key15": "4jQC8dTg78RBxCbGRejQFjAJYJvTEz8pYGNkwx12WGv6yPg3zLPxHba9DHravdooYoYy1D9PLuaBae5FTCtgyApF",
  "key16": "t27diQsSkVJPy2iogXYNeg9sSUHKY4VyspBZVJUYJ361DwpyWp5pLnunqNuip23JerEpezMHLbxqpPHqCQHGc1r",
  "key17": "2Gdpbqx9w2mDLsJEJskoUbaw2Zr6nY2UyVAFkKR2NGEWcPbYq57ouFF3BKVQ9t7uWPcjTB9PWjJUt4cgc6qP7AyL",
  "key18": "3VgD7wk7RLuXfp2C1cQzGh1qw7BKSHLnD1gmyVSuqqL2gEMnS2zEzM6py4jYAU1ftLBHYhEYQjxhXdViwYQGGHrF",
  "key19": "3KZb64Y1awNQMK865uPzPjxCQmFgfVeGyfy9UUmcheh9ZdQEdQL1BshRdrc3WQDK7tmcsSSwD3afUJzbbtYkqyRr",
  "key20": "4jZnf6aVnFM2EnUETe3KFQJNK4FDHuQUgdUUYWs1kPAcVADv2icUiNNnPfHT8661YYtHPJtcYJyRW5Ha57jtoRrM",
  "key21": "63BUXfzTQb32wCz87mBrZhaAoFFnTCDF1s6YszeWVwtuwKQHWTppdgvZhTdvRdSMS7Y5QW26epfeK4qidY86Hxew",
  "key22": "45pFHSjB6UK8LWTyP8HpdiCesqzawCg9qaxbfNZocx3kj8LusTCkr4rqfSNaadkY5ErXboLpPtVZJHLHPPcBqahB",
  "key23": "48d1qqUBpxbuzZXKGuh5oLE8iucCFjBjPjRMtManZ6xL7Sz1UvzQpg5h9T2ujMheYAJRyreM5GyWxAsE2ZDaUBcd",
  "key24": "3frrgs8Jtd9vy37SRDi3V79kEajTSFRCuVzCn1Z8or1QzkBQkZ3o43DdzD1SCkQ1JfRx9FfZ5UrnqL1S9z8zAJ5H",
  "key25": "5mnB6wRtokrZJKU6z6JkPxb8qT9qsovEAdHBnuQXM538tBQd3hLc2jiaVLif2aW48zAeJT6k2JzcuoYqfMk6givx",
  "key26": "52LyEPdf1qa5VTLgBrkAGXU7ML8mVSPXBhfsvtfHCiJhRhVXmEotgz1C31aXRyGoAyZyMmJS2G7EG2rM5qVqFpRY",
  "key27": "666b9j6gPQJFD74VwAR1JFKvRD8gzAAxygNTfuyBRXShA5LWxH2JwFGKui8gJSXYZSEnDUGoL1mZycKjTKCc8y3B",
  "key28": "Lpn6R5f6BagcrYBaX9QaHK8XPvjhneB8jipc2EJuWQBUp2gAJ7o2xydZ8JEZAn6ENUdQ33L6dBD7uTgosUC8orS",
  "key29": "4Zt1gn94jHFb8k2RFEX9ktuQyhSz7347kmCZgPkTor8qorCZfZncjs1qQ4f3umi2JcQREsHUmXDv7Mp6tCQKucwm"
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
