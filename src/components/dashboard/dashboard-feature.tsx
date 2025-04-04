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
    "5o4Xtn637tUVfFw8mR9nBQhcieYsvqVG4dscqdTyHPYW1b27rggFLZFgu7mkeao6o5kaJjqM4U677Gf2Yc2FZNGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JU27qvMbwhRS2e8nCWcwaYzeBBLweCBskQQEfxJSQPwRfbqX7aSZHfyQXi42Hma3n5MRUANsH1ymkBPFfqz1PA",
  "key1": "3oTxzarFdC8heSQdwU31iPXZkWN3RCDAtD5cmV4MrfQu5NWZ1btyJ7tBH1gJWNhvBipCHwPitdBVp4ZLZyX5N9g6",
  "key2": "35jtBsE8KTTRUCDVPafgDe6vksbJ5E3u9H6K7qMRjDE6QR36LVHtrfRFqXV5xa48dT5h7Rn4x2DiX7Y8cCNYviCD",
  "key3": "2Svxmj6UBzhxSDgRizYm4BsrVrVAqRU3jnB86abf5dR9Xnhb8mTrpg5rTDxALPB1YKCLhpppBE5psMTwnvzAwTEE",
  "key4": "51GS995Ffj4eTAgHs8WXnw8zYcm8bpKwAVhrw4yn2Yska8eNnfLiP7a57wvt783dbEzsK9eEZyKCYsXHkTQ9h1yi",
  "key5": "sSQWWRnA3MPrrNELQdpXpUVBPLpo2pgqtm6xv9fMkNvsxi1x53hx45sM1cJwVpuJLQVqmAvH7TacqLsP4yGKpwC",
  "key6": "64aR3mKndCev9rZnvUAnrbifDbhAcGt6Q42AQbtKLzgbhgxPTukerGm3WaQ26tJqhkiGD1e6gHsVSFBouXSFpF6B",
  "key7": "iZTxuoPtdSEr6Yqks7Zy5vdiJ88a5CUDCuomstDyutNigWRmEoG1ytf8YZiN1sEixZjP5HxVty8yZhvU4j6bB6e",
  "key8": "24R5UwD8Gb7C4WJbW63mLt7wpKD3Ch5mjjNxCyskyigy2AQAKyy7FhE7dZtD1xwmHHz3UfLXi5So8A2yZgH7jK4w",
  "key9": "5bfwnzxA5uQcPe6oqJMCaJgzxLUiz82vNm4DVFRw7YjDMKkNN6xkA4ERyipWug8J31t6sJuV5T9VrXtfuivCxfHC",
  "key10": "4VZsxA4KMWnmeKv16mUMfZe9rRCea6gSLG1nf54fyWZspcpNRtRq36m6ftCxu4F5yXGoyMGfkcVeGXmFFJxhRQrm",
  "key11": "3n9f3ZdtutougekPDzSBcRHU6rfV5gu7L6Y5j2F8q2WbQDdbd2BctovNAbwpUdymM3t7iSU3A64JUj5DkTbRrQDq",
  "key12": "25Bf8foaEKT9GW4KgjnGVSzBEa9bFSoSMQXb2epNXvKB96KLWkvCnwoPuocbtHoi1gLyzFwLv9eAJbVyc7ve2tBH",
  "key13": "3vMXz1UJRcVgx1BPFsp8tJidQC9Cu6W9Zj8L1ZwVUkodQaizwqUUfvD67AWjvTCaXGWvgUVXoNz6qMH5v5Et1jpQ",
  "key14": "5g69mPQrMbqcGriDXQRc5292yRfrNrXrJLNPpjs7f5c2AswhDkojs7aKnZEryUTeUSay9f95wYxEqRb1Q49NytZ3",
  "key15": "25NsxHfvBvVqb2uAATid9W4VrUBWt3HkZFKmm7i7RncK6K3v8PFztKEh8EFt6cCjkQEBAcDsaxBGfTGT1fVR4Ugt",
  "key16": "2V295bxhKwQezyXbU12ynGaJAWVvcE68TUdyXkTCVD17hK7C2ZaXt64vf3Cu28UAi5pWmgiuCMV7bEytjdHUH8bZ",
  "key17": "3GaHCtdcsSZctp9epbcXHbba9ti9RC1LWpMUxfy33rcKGPScwRU4hN7ff3nkJ5uqC61yPsbYMrwEHTt1VyoVE2ZG",
  "key18": "GdupjpKQB7Ra5qXWETUtBqRjJdJJeeDCXif2wtDHmJs8ASYpxKTPwpcBUCLe5kLLnSkpN1RQbjeAV2VEpVcSsp7",
  "key19": "27kVa1qJcx3zv5MyN5xAUD2QbgoisjYjNB7E8TxhT3DCXt8YW9hkLbGnz6UyaD647saoEqYfkBcFau28Gbn3rSPw",
  "key20": "2L3pjSZfWxdW5gAUq7X6prdePm25zuJA3NfphsSYxPMSwVpD6NEZNVs9cvhARoMJvh362omKXTQoLAp76E5oWren",
  "key21": "3JVhjqRdVZS2EyYgkaETHFZavSE8ronhu8SKF3g6GqgkHWDwdgE6Q9VwpRXMp5c8LoXgjTbCBGqc6iMBVvA7k2tS",
  "key22": "5iyYkXdFsWjmjmK6EZ5naXBCAFqZ96JvyLnbWzj2fkn1TGGEbSMdxEHv7JpZCEYZuUMDy8EpDtoWtyPrYJs8GhyF",
  "key23": "2AkWJ32Q555LqhQE9c4C6XkbD1XU5d9YAfsa4gHuJxun767JDkzqy5zQhu5m45ubcsS3TYsBZtoYVvxTk4nX9KxZ",
  "key24": "5rJfrUzV6VbAAgFN6fq35CQ78HuQMCNUCfUFqg3zxnURE4b1g93B7C1K8aakJHmy7h1tjvSMiDr7xXfcyGfE6Ws2",
  "key25": "AhH78z2gmEr1yuY9tWeh8CZmvVM1r8hxCLrrrXrbMFwBzvDhnjRq6T8A3L57y1inpH86P8CDwqqr6GJfPPRNYwk",
  "key26": "52khNenc27XmcGxiiA9ruLQy6qokVfrLqUJWY2HRgKxRk9DjDhZpcLYtes4ZsEZs86NGQbRS1bSsxfND7jzLb5Fo",
  "key27": "2GCYwJkzvkSYNNCYzpakM6tZD2amj3JQrEHQtoqxm22ezJAf6g7FpxckLJnNuXn99ZfRy7nn8bMrPZEhYuahxA8K",
  "key28": "42MmURVJR8ZGYcSPTFGPchDob9ZpnS3m4eVga6aVLPYczDu3TZ72GrLLWbauLMP6WS7KA16qtEwXQr42XBRCS3wX",
  "key29": "3B9C9kHd7uZWDJrLw7Ao1Zm2yZzHueTjnAHnusycdpZt9SHTffm9jqnAPACebtNwRphmb2dgx4Z1jsuKnBx5BLN3",
  "key30": "2gjcJ1LWfqr9AA2bb4wfQP8ceF8L3VyLMEmHpHLEHpve1pMcP4nJTiUem7cuUfJkxW7tgxbCKWE9SihwQXr9dXwc",
  "key31": "VBmamXhp3VF1a3FWFRAGBQxzJXTnKVJbc8WpVLJbXNEG1GfESoqY7YaVytjuoAdNbgcirvyLPzrkzhXYNjWb3jF",
  "key32": "2koTum1YTbN9rLQD7kQYT6VhSc1jsTUKaycEhaQiiLCEjn4yGrfzVv1jv2kUo8EJMC4MB7dvNQkfH5m4PJArzhHq",
  "key33": "43Ggiu2vEd8SjS9oYsauwV3XQByJxCR5XVfhC3wh5oR5zvgKYC177XxrgRQ84dshFEXVPA7KJzR12T1sJmnajPiH",
  "key34": "2DRSJmYVVQTtqjZa5FJR5HsqTRJdcb7mvnHhcK3GNpKQLP97ckfVcm4MEdkAJEo4DutuwNH7M1NaqYQT3PhpDSCR",
  "key35": "2ujkdpBD9TG6AweuCFhqpHhCr6ExB8AE5RwPcYLLFQcvNTspTi6eFMGWsBKCa5odKzxqiThR22r5r4ES4nuruFp2",
  "key36": "FEecf5Tk4Rfsp3ERm4uQMrqzG8BEfJEZBYShJagLo68hGaYHZ7ihwQKRbkmsNGetVFdEt5uyEym9pxEmGoY499Z",
  "key37": "2U3hMkREX2wR9m56E446XaakQETZ5iydp9x8VK7CPrAXdBsrvVVD2bpfVfDdiwDoLEbZS7626D47WzxWoE7iZXX1",
  "key38": "232F9ETvopa7KYQQCKMFxTb76BTUzt4KBMipQNMb1KzZHbdUvo8URU2tuMVQxwv86tJipSKa8zCycrNc6UdNsGhu",
  "key39": "5XNgwTbZNHqvooAWKrkPG7K6X2oL8d3ZKNs7Ljnice2UzMAxmMMn183KDsC9txspLTnNuHEum5oYcRohGoppQ647"
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
