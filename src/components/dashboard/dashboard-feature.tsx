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
    "3nzXo3BY5u1eo3vQxDUYAwb7pAaJsiq1SH4zbkXfSDWmXqJKquPjzBmbVpKMu2E6cdypdff8MN4yiQdDxF43Hih6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vGaVoEaB2HGWEmPvDzTfLdspRxF2Ca8L4hCLv5L6XpaG6qxsxctekukJQ5kmL6xrCo34QUKz9ULe3ochxzAWAn2",
  "key1": "3sTfoVJeFbrTGSQAHpQwpPyfboqJ3MvUWdqFgjbMbN8GbjeKrGKXbv8AfgzaWetRZzAV87asxRRkPGS9KsjUJ3T2",
  "key2": "3uQmE6yJV5KyBi58e2jGHbNvTv9FkSG58s4TeFgcXNzH33jYcUtsXN8LTc7fbRK5FvaBz7Nv9X6aZfRi8vNE49bR",
  "key3": "3mTAjbTrYexZaqnVa8J77aCC8c7t45m3fhD7yUArX1GCDrWWHfQJwGfTA6hifp7VqKf1oYpeKpoaeBX6maDMwtWz",
  "key4": "RP7k8FV65HuYA2eQB8Gypqgz2Ta9URAYxD4UYPEqgvGEPkcpMCxrcncPK6BdJTsAjGJY1fm6YgDcaVNDv7k6Rk7",
  "key5": "5cBPiKmhXh1XHS5adjgkzsC14qaQ33i2xSYzcaYNBHPLAaFPEzDeADAor3dUCu4kG4rk1zziLRqWtbCwnXp3dPmm",
  "key6": "2am14WcrTwtAAcJUBaLZUMBwh9UXzyhyp5oSAz4vtnRPqtgAhwws8Wg2KqyFvPkyXmchZFeK11kmeGkHL21WquxK",
  "key7": "56jJd4Gah3VUUBXCLQVwBghGf3jrSysFvfP8PZsYxDXfJkuydPX8QJDNB93uFg5PQH3GaUQJ36LkKzThKoUbgCRM",
  "key8": "2E45DaFnaNzYKJcqq4AXL1kSNa6QPGbMsWih5cyUBtidxJ7bX6nP9n5WKS1z7hbK8HrWsAnbza2PQnPZsfzP7APF",
  "key9": "5GHfVr6Mk39iauAu6MvJQXeKJvd6PMceQbkD4DVbSqsbfrs7XtEKziehVdMNZdDoj8z1DnKe1QxCf3wjwRTZq7Eq",
  "key10": "2QkcHUCEGSR1UzUPEryoUg3a65P2CRPxaE9gDeyNnqgYqbeQQxY8aLtxupRHvDfkCmTGTPJgNAetyVKRMGTYAkpb",
  "key11": "5W7yBoYQUXTeGcE3Bj6xcskgTFB6qjyvwZ1YKWsjr4fr8M1QTDJaaPTJWDBdKnH6eiBBCgfzCsPuyBWAEUBM2QV",
  "key12": "51YMz1Fmb5iDUmmNvuiaHp8UaPg3KjeA2pPpSukzEnRhaBqjfivTadfKBN3B8xA2pXy2Bdz6wkhPHo3Mx9gJNUXk",
  "key13": "mJqrdneZNbCScZKewYeKUPSz8EnQdZ4TngzW39b5m1idRXBbGEJQ9V9pPJuRWwS26RCJohDySbHJusJHyHQGMvv",
  "key14": "5v2qTN2bS5EWMxEbisfZB9iGibFBD3x9ctotcZQLQ1VEhChhqBEz7cisHCPiQBQrCqpdEgpC4LgMJjbhnJbapkWB",
  "key15": "64DUXgSwBRgBDXcuv86jV8S52C7PET5PnJQVKnyv8twxSFpt3pKE8PErAaa6WMApVQ647ou2g5rVrjiiMjsU9QYP",
  "key16": "4nmy9w8R7RVtYvGyBsx9bv4927nNJkP6SzTvEq3bo7FYKiGTvZq49yigmeKhRwiGwDkXuEB3a9Q6CZaiMonjivTP",
  "key17": "2c3JonfxiYRtcUqg58nuBDkseo11kZu392akVTKtDgug39RVWhTSmH2wpqRJdTrQKQEMK24bbfrg2aBw1bz3bpNH",
  "key18": "S3QHbYguT6hoaUpHGQbgFJva8JNb6uL9T8ZvxXvYzf1uQt3u8mCiC89xk6zrJZG6aghd12R8BY58jtTMyMGFdut",
  "key19": "35D3z7LB5pW5eB65fJRhz7Yh8icRuN8GpoKe5eWC7BMc5wvHApqJw9juD3AuioDAEk1J8bZjKSkP2nSJWZmFmxyY",
  "key20": "56id24oZsBFwupynw2j1mrzLuHp4AcEwzc8Jxk5rCk98AzF3AaDybuZy5sjTn4NVptnh4Hnerftutdn7SFvpafz4",
  "key21": "3NfgEPTetfqiRt6bBznQAwFJ6m2BM43hp9JPnzShFFT8n2WDPmejNDe3jkvxAkNPJwWaHw8mVnyroouQnoefAJUY",
  "key22": "4EjzS2Y6yyedUppfQxCDQi2AK1KvwujocyyrwhrwdUJWu4XWMziBEUGou6NnMCEjMNUk8cb6CQWUPSJWL9ynkqhe",
  "key23": "52m5VZ7b7ANSN439jL7zAMmwxofz3NFaqdgk6yU3wXCrsGy46PoR7WARWqFrvox5rHKeChgTCdv6eg4sBKrDKDQh",
  "key24": "499Q2nMdEv3Nzrrh2U6QomWJKCausP9wn3NyRWCaMMdg7e1tXJeR78dejuyR5XVcyh5SyEMNg36uvcD6ciRL1qRz",
  "key25": "6umifhCLNX1uVZ88bbZpeLfpJz3Vauk24S3fk21a8HML5i5dwgP84SHzbrnP8RQWVa8MMdHpfZUesu9LLF8s3as",
  "key26": "2akQg1btPyY3TmZGwP9Y1HQHBNmam1h4E1TFv77aNYhhU21gtUQxEHXruiVwLTywRxmbNxG1vSR5GKACpK6VC7Ui",
  "key27": "3JTnLB8Lcibx8tCLNHus7thwW9zGaBXavsPU3E4PhRwAga28t5v4hPXW3ECshKnxBBR1H6GYrXhu89aUH4CEHJvd",
  "key28": "2CEr7zoviKeRhJKQYF2sRnCt8wZruyAyPAX1yQg9J4odfGUYSHgGrKJdnsA3oJE5b8xqZWkgicJnKx5fiWzCS9f1"
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
