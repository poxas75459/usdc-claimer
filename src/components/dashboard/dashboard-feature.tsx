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
    "4XYmnShFNnhqWEG4FKEVTECxLPea7ZfeVLEC5SRCden64Zmt91mKbdsHqKi212yRhjAbodHmWRhYf5Yp7tdNTSzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUCBCPpmpApgwttWuUBWKUnwjjm8ts7QV8c7YSiosSh658X7wK5c6R8vrndmgrZmWVxwJXEdG8VLTsftq7PKuST",
  "key1": "63x5FGtFXKmHKppTogr7YC2JhjCvGaQ1VqrC8v7iz1n8su7sFV1ER25XvkY6zKe182LTXKpyyvVwpCBXFyzKxRiP",
  "key2": "QwcVW2Vm7ombXESJU4Ls8qdVDZC4Q8Gn6aQmNn8kedaxRTifz6X8FHAAyzc1385mp7JuGA3T2TeSyz8XEpdybrM",
  "key3": "5VfkP99JNUyE4K6BDUvE4sYWS7xeJ4GSLtjug9y1iXAdei6UaRYoBrv8HonX1EUiDDpZLzHfQmYXTXm7dZtEoKD3",
  "key4": "3y8ExSphaGXjdzZJY9gfNBLpFGFae4uMRPuKnJQbiEE7zxPZmTVZY6aVouHRKeGZAnEcUpaWYuxbQJ5iswgb7NTQ",
  "key5": "WUBuDRCqzZbGqVWf5hVW7ry4r5FZKxWpVjpJzdozuKWLu17U2Y8FuE9nppxajdo5GJcWJoDRaaGwUtJCkcQNyKi",
  "key6": "532AfD4XCm6sW4mKdJAAByDwNVJM16iiFwL3HzpKVRAShHg2TbUvhDj9tPRpZLPKsnot6ixW61FpgbvqhNDsEkfx",
  "key7": "XFnueAU1hSHKECHDPVwUnTUHCkmAVqwTva3oCgdWf1J9A6SfABVeUKRBGVrvWF3rYDszR52NnBSSxLgffqoyPx2",
  "key8": "aDmwqyzUm9aHHguRqAyg8xjYSia5KFsHoBSW8wtxryoRA7mqfFw1uMAudxmASHAyoeZrCkgc2HVy5QosaSu2cQM",
  "key9": "3BJNKf7YpnPWqcgHAkMyeqMAAfMT8Z9NRt3jxcaJBSZjZx9yANbM2UbaKweCgvTPauzBXnmPdEcHwvv1fsPc9Tf2",
  "key10": "5fEJfagdgoCCkacRRLDjMzVqxVdFQvYfVp1FNLqYNXckknJcVhWTyRkB4BPVtExZQ2b7hba5KjSBQeYehF9ugsWA",
  "key11": "tEzQ28ZVqfMVgPEXszRpMhJ7HZnsJVtk1A4oQLEsMV9rznN5dkk3W3wk4naiYFznydrY9mqhjMuxAMESe7VQbYV",
  "key12": "2oH6M8aXhA9JibnumgKX1LyKS57QUvtDZqbAwU21Rrehi4vPqSSkCLpAzQ4ym3XCPTx4yiygxEjLHXdw8N3NEWVU",
  "key13": "4LgCkGwFrn5V2KxUdAq3Nz8bqJc1mTbWL8W8bALUCRgRBfaAQm7Vp2w6ARD6eMDULWHvfrqnbccJRYpQ1bwdcjLx",
  "key14": "PXzTSXE3kNS86yDNatzu4Fx2wMjh8t3QXESuTQMf1TipWdwTTqjPTzqScncAJXy6AwdJPn5Ds3629dCMC47ZmYW",
  "key15": "2k6tbC4KXUgT9dsK3B7ziYeMjRqkRUTGPzk9N4vocPSGENGtJNG6q5sqEcnAKs317yoG83w7pCepxyueQq5MCk2L",
  "key16": "2XCHqkpeR3sAMfQyF8ZWRtPNbwxiFNt2cUsdDqFCMNUXSwbCxpQfbhyHvJpdK4Ux8sdyd1djBpJcs4k3irJXfHv5",
  "key17": "5NCwzVsWXWmwc8FXvR5ucHAuXqd5MHfMne78pp8VSckAjq7PDRNva3LgvibHfusA2XyCwKiQzUzwDnWUpM7TuFmj",
  "key18": "3H31dXiDTBWkNfyHHUQeH9F9SzEobBFG4XcrRD5wGSRYsqVeDnMbhsqAvBvwFMswmFKKQJJ7TFb82BnYLK64zBKF",
  "key19": "655aUAwgyFsnw3jvV4oswhe9tZLRkbnUjenYNFUKoL6hEXkfJ1idwT8x8U4GehsBa6yQuENJXht3w975ofTNbSkM",
  "key20": "3CdGcPoH2Lv9azEkaTwjrPQwUdwHQGZK6irK2rax3sHipaK5RNSUSZdFheJthabXpL2CXofeM35MJcVctFpcvYZN",
  "key21": "5VArwLtourddjDPipCAcvGCQxNhi7DfQwkB8Wk2hPUvQU6Mhwrwoz7KZEgVpM5WCyo6daEDAYCxNCj85U4iTJ4Gi",
  "key22": "5sJqP6SXUwcYZw4mdBfUBybWQqE11NnQ6Eu5YFBfSvTJftuH9UtGXQyRBRajUWhGzfK8fYBZMb82EusqeDHuH1ov",
  "key23": "nU1t8SHQ5UPWDvCH7Qfd9yHnjW9fM6jo4TiDVjABzY8PgHcuD2TP24VPSk2oEopdUVzK59yCdmc73HiQymzFGmF",
  "key24": "44KpSp5QajCqawwHBF4n3ARna9qzMsw6uCg8HMVk9wy2YYwbBbAMTszSM1Umc3LDNTkAiayeKgR49K8emA34PKsu",
  "key25": "49N3Yjum7YaD1rAgbaMeoh6344B551RrbGemiGJsfPrNCYLJkdwB8W4xUc5n2yVk7zozUjUwhHV1SuSHECEKa57N",
  "key26": "3CsLuPZokczBgp6r4giHHBP4xx5VTWabS89Qd7NQNnXkq4SmABHtWjAfoniYvJHQzYwQvJa139uFFeTvbgr3ZpX7",
  "key27": "2U4Gfvk3zknqHmmzDDoqjbjkSNWo7zoqyRjx7BMPPghACju6N7qgVyqqgGBV8tagnz1nykgqxhW9YxWRjijt4sCb",
  "key28": "4DiR75Zyf8wrAQ472zPhjSEwYEBCNFNMWqCvWNh9dip8SPPcdAcGxEdsngoiihQHv466dHCjPaFjmirgUpEvpdWG",
  "key29": "5sKXAapMxFkrvcCYKJtBxAL6vZ4rwzysoiukDjQXRCPgc5JSW2utxZRSL7UHHPoAhN8qqxgEB7M8RHmwMpzMbKJW",
  "key30": "QPZmQmfnvzHMJ8H3RoKi9VQQeEWVJUue3VYXgSbD7pYLYyHFtF4UGvHBqwiEXwPn25mMgnxe6R5DZddmLt87MYm",
  "key31": "2f7yTYB7g18ja3sVFWVWhjxB8XMPNrG9jgU5KKNYyNKrfEPyhu5h29sjeEiRCG6TBk5gybgv7n5t2V6bG78MT2Yg",
  "key32": "54N6gB9FPcY9j7RhJufs8YG4hg5TCTfn5rWPLRJj4BQBZWZvaAsmLmnR7uVMNUgVW2ucRHjsKn1BEta9Q29xRSXn",
  "key33": "4D8WFx51GFyxHCwYXEygWTzuTMHv2zabDNHJsTcyWTi5oesjNohx7BeFGQzN2Jc61jc5dn91gutpVtAqux7AURqd",
  "key34": "4rTSeFC9raAyN8MYh3e1sD5HkqKLuCeekcuqhPBtLsfw6ugr18rKuKSapfcXwUXqStzDKhRE2xwMjUJhsM3MPXU1"
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
