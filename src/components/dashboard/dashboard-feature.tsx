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
    "2RwibBTLSwzQ1CCSLXCE1V1Ug6D22sAejMkCXH3SU6MKe2JEvedJfyL6niVGWazVbd5sFgRd4eardjCTkHUoSpXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PrVt7bbopC3DZiterVKY883H7AvG4qcjPXPVsqGzMcuaD1U7CuEJAjkxczT7SuC4QPuV3nE7yCNgWp8wyRZ3yyp",
  "key1": "4izWKJzo2cb891v3YFcM4aF3fuUymF5i4hSPM4NaeECc4k9WpUzfKg9bMw1HydtQQyQkYghRCaVbLShYjfwtX3tn",
  "key2": "43ZpMsBxbfUm6rn9pTbE4y2bkd8HhNmXahdR9yX4fkPuRZyxhGrTDNccf8A9h8iRsnHneWt3MgqHBvEMXbZzWc5f",
  "key3": "3DsBTiB6qy16tBoBVsa9UePH8snAXpjJYvkiXEsRSiWyZoqCi9LXRQWSHtco6vVeRBRbvdCYtMfMy3jLocSzqcon",
  "key4": "5x1r527T43r7BHELikUDHs1qMuVdhktLf8UqZb2i2B72usX5yXbRNcCx1cB6tL7jGLWaeUXg8F94XbNXJYgtVcnL",
  "key5": "2QqGp2aZqoqSTRHahs5XqRoJNcnbbBtG6TqVzmmfL1QtkwaxtYCmSvKADF4XU2HT4xcBubgyNDUJE34SgEHMBM3U",
  "key6": "45U1BvEEZL6DRY4fzw9tNJTBHfkSKMMmcFKBzqDtHfvHzwSsy64XQ8QerdHBsVyRTL5cmcfsVDyeDuYXD1JmbRp4",
  "key7": "2iZB2Fx5Qj6JLyDuxEdPUeqp9tFGTU2qTezpPxWHkfcQELE2NEAQzMdTV9qWp7KgmrFv5jDKxJHxn1NT8c4RiiY7",
  "key8": "2rnuXDj38WqMicL3A9s7mNuGGi5mwAjoJCZJs5i4gYw2UtDidugF3K9kHmzeHKho9SvfdJyJq7UCwiMPDZjYfDL5",
  "key9": "GTn9NknDbSq6oDL5GSbKJhQf8zAsXEKZqFsRUGTQ7rybRQKumMMNhb1H2wE1VQeqVGSDhJky7UexWv6E3Hz42jJ",
  "key10": "4ZqWwbuNGxxEUR1EaJYVHahThBBrC9wbxewKYcxyWB82qTBtf91XiuVJdnRSwZwvqtGtuKmFizsVoGkYeS99CLQg",
  "key11": "3miwaMn4cUQ8B8dqBBxg7iSPBdi7R221k6BUDBVciC8tk7CSWvW1Djc6aDL9HFsGF2EfduLAFbXkKTrtZefiu3gJ",
  "key12": "5vc5AWjw69FNq855fnj8q3CVswkVSFhrvhBdxPK9nfNip9cWuzmuzKnEYXCrMk8TTwmFgLYipbxMAcpxNnNDC94B",
  "key13": "CQLqLAfBLxiH5df35w3kYGWECjhqwPrcFv15FRtodc4M5rcumYnQpJRZZqaawz3T1vne9xi4AADfsbUETET7BTn",
  "key14": "5hPzUbjYmesN6yCkcXNkCT3SiACE36i1mjX8CznYBqrPs7ecGaiCNoQJ8zAtHjH4UHcjzriyQThfmoq24X5hdSfn",
  "key15": "61azzjtwWARLXCXM1ceLCa1bB2oZWDwkc6UNNThqmQreLuWfrxzivPoE8z8wpmqPwxRY1LQcNGvEsuBd8mquetMu",
  "key16": "2CssKG31bEJidHQqu4zVe7EFJhzYriUrpsLJhhy2hPCrs8c1aG13BHTioAzC3u341TBUgPANQotqtHAAmG9y9QzY",
  "key17": "2swWwsoVjyAftL3VwHJG54wxwibiQRmAmR4GFez5aLSxNB6ofom1iuFRjVZ1zydDZPtfKs7U4VucQDdFs3mXdvoj",
  "key18": "2Ckf57s5gVhLwKxqpdhyK3cX58t7pdwEeMi778ygQy4H3pQiBfGGVikdS3H32Pggu2WMZC663CVpxRYBvWRQSmmY",
  "key19": "4CYb3wwhq8AWkCVP5T4J2wvB7A4Vvarj8k3xQn9fRhnFdjnBJvubpvJoVLvtzrmee8e3KAW3bG78EFp65RzjHvFc",
  "key20": "2E8ezVpp5MftxuRohn7wRnvaZw7gnGTxkuYsQrKUaqpYxUPwgjXcNuoJJkzgFhhC35YgcCxw8aGW81GuRwrgAA8B",
  "key21": "3fqZjJtpTJqcsJbmSLN7YgA1EJHXDxgAEmqcnJMmieKymy5y8swDPiBvX5365K5h8prkuZkGDZWdGhgMWwX3gtso",
  "key22": "41hej7akBR7Gi7N5EPEa9FD38o4odc1aovt29AaVJ7cSNctVN1anC8fTvNLEmjbyHLzW8es52TPRRhbDBhVgrxLf",
  "key23": "3WoqgJLzJGmTF21qr8skbPxLxGpWYVCL9xVdpJREkyt74htNVt8YdG2KC3XostVQUxXcH1i7xQPRm9kRTaWmPznC",
  "key24": "3THbd9jQgQ3it8jjQrpHmygLWxjUDEmgVSf7eJeCycftHq9qXaRnaD9PLGYeTTBDDjFpPXPJJRvujjcDA2bzNiY6",
  "key25": "wLMekBxnGoQ2WPMmFuv7ewcRkVmosrxTDpnj8Xzsv9G3oVUk4qc6LmeGJDoENcecm2qSvfUa2Qi8DJacirePK1f",
  "key26": "3oQtni72je1FdGwjDVX3dtkZwWDmc6RthyVimPRfv6Dk8Jh2QvW6wn4Ks3QudGacEchqDXQuEBb7xaqZaD58iw1Y",
  "key27": "4pVkhUUQgTLoceuR9wBsc5SjnANGJfJyKL9tzpiQzDeTCybu6hz1QdC4LaWA5Feu4eeQSdAQYt7Z4ENh9AYZTd8p",
  "key28": "3CkwCveVU3yr7UQJ848gQysfJVCGNMTxH4NWuKhwm74wr6GQHcBa3fakKgdX1SF3od3CabKbPbGnHfV7RxCTDPyv",
  "key29": "2nFdRuh869JFnCuQqYvfVwY2i1NB9y4N2sMZnoAh6iWNKenCyoENsD9vxrSkguXtaCPSZu6EFKVAesVMiEYVApKg",
  "key30": "2ubDbf2jpTb3HkLvoUVFDE5xpKDAVksN85iJNZoiACnmfsHFHV4nADD36wTTpsjG4gVLmDco1MqjLQb6AQ6Ch6cp"
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
