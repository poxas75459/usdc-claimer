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
    "3MVXBauN8uy7MeKt95qQG34DxA65y9Qr9CMBhKxSGeKXrsfZ6Wq7iYnk3eb2ixsSVYdA6LYNNGhKKptUrnqtvZcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "taePqxknnrbTuPSKHdJBopZwebEfqtoHbK4R49XqoDAXDr8YQzVYuJC4Qzvh3ZXnWDxdMnAwbkF8c7E26h9obuK",
  "key1": "3VX5WwnKecEC67k3XkkURms9eYqr4GXtwXiXQZ24Fb5zAbf2nR86Bw478rjK44rNehc6HietNNgzg9f5hDzoToGs",
  "key2": "vMQXr5q2ZQXThNYTsf6sj7ZGZcgW3ypHzBRziNTwAkuKAvSoiGBnPTVtLyMG5cZjDbiD7e43ccp9ZnFB36PNSxi",
  "key3": "4khABU3e5Xp1cE9FgY1LoqUVAuNVeDXjRYQzaNHCdYJ3AgdWjoRnLjVkc41t6vPgs5JRni85jtSBxFoNFGNThkv7",
  "key4": "DfyKMbdPCMWJZQQ3Ru1zo3Eh3kwY1E1jky3zqNMdLNXq6EUBw2qEiWbvbqZHrUggvLVBPcUxkh87Bd6ynFDnGEE",
  "key5": "5byqiKCrencb2tR76PduPdjTSyvwVQrW8Uu9YucP36vaabuEkzaZuh6gXmzGRA5EXtae7FbMnR1MmXXEECCHHgVy",
  "key6": "cvJqkmuzojFhKviZ8zCzwZNS2hCjfJyn5qsuu5q7DMadBPfv4oEcot7yekBiASWoZ1dCkfsi7gpeCueE8ZdC7bw",
  "key7": "43oVCPSjrzt7ptUTrC6MrQCKRvsK3bPNpw17wrgKSLq5ebwoWByDmh7saH8CimdeCcoc1xmp3ixwtR9wtVgD1CV3",
  "key8": "3KAKPnNo7c8gTRztA3EQVteZAGBXmJtznMGjUpGQnn1DyriTWrLmMaonf73Swjp4VevY5DgHuz499wLdA1Lcmq9p",
  "key9": "5bzkPuQad9BuhSLcYFQ1nEqtHKoFAdQPMJFd7shXkg1QX794LE4RqFzztbPArkiiy35t5sHAywSyrG9m6fmyK68x",
  "key10": "25eJSE3antVQm5Ao36r9Z2nJtwXTZN62ZojdcJUSgDykTiEK3b2VSuuk9DFjuqZi4PttQyxhrFjk7FxJpdP6m6W4",
  "key11": "5DUrSxddSHXGXH4K5vJNbhFvof35yjkKxSUuMwtVHFQXWWyVVcnX2JgrJLR8N5obyFjCzQksHCAsh8AVAVDNqmfv",
  "key12": "4tp8cgQeNi4VfPJvEtKE6tWzqR1NcvMA6ZzQ9b77LYBweCTS9f5C39jfS9JqpeuypzWsUCeooBisBaooYGMtQQEc",
  "key13": "3RQwrkWxiwfAdtJroL14tUbfqYhz1VZjpwmXT54cjqJ9dccpc4dQpiX5AWfLHS95zGAChLeMQdmgS6CPT1DrvwTZ",
  "key14": "3XYL7h22kMNNJ2t9rBG4HnKg1VzwYzrJCtLYKawwVYaoAFSfF5wK8dZWbmJCmnEQQFQgLZqSgnveuWTt6MXwJjqf",
  "key15": "3zjmfUignzvtX7bMQFm3q2cmT34JRqAkQTFhZ6PcsMcQKYLG4bcGp4amr2eHSeyR9UJEGhwaw9sdU9xZuXpw7Hvj",
  "key16": "3jQgQPfPQc6CAn7CjLs6tobvU1oRoCC8aDrhniBpjCed9zGsozxKF2YaTT5UhdTXHAvPYb7YPamycMkc5Yo8fT4E",
  "key17": "5UymYdmtGor9yRB7fuwSEn1fgYkzSQBqF8Q5cP2kzDKjPBriENHvUqrtMpzP2g69v8CedNVsqtJrGsXGoa1bKF44",
  "key18": "51Meiz6hVV3JrpdWqvTsKhqx78tHr1Qw6Zbq55ocGpHGfP2oewKRZTk56V4KVsFazbMWAPHNGvFFzQriUEo7trqg",
  "key19": "5gewL3u71ccb5edGGUUDrkKnRDGKypJCbyhzbtHnRsMv3T6ohiKL9R4pUyYTeS56Na4NLe9aiJKmAQComw5RTzLx",
  "key20": "3tGcuc6bxT4qwfMUrH5ABcQ8B6vB6GhcBvfgDuHoFTeDezNRTedMENz7CQqCGAPH1p5VsGWCTRz1Ykc8StvXC2XT",
  "key21": "xJeKyuK782WqRfhexw7gQVU1LA4hHBeSwoqwfRfRC5GakDdNdYjYKGnCUa6QwvPJJrqBwG19sEG4kFFjWTpQCna",
  "key22": "452qEyz1L8habrnFYP2xYJLHr2qf9genRYHDsz2NHAxjfhMxRa3CJuKrn645YeTn5EezPb6LMATwoYqRiZXy4rr1",
  "key23": "4huWitA5ep1AYVkSa9NTjjEqm2q8ybK3wtf5U9KxE3i6NLkCwqsdhmUANCoG66YGvkKTnihCtqcEWHbtPMm4DSLY",
  "key24": "5nMZDZ43aWAkXffWptr9Y8pdykW6zLMaBACVb17WoAKHKoMQ6voW3GiFTNKXzg7xn9tss6YrR6vYPVkwJ9Qjchnn",
  "key25": "3xbmoJCucaStqzJk1AkDUByGpUPaLbUYN1fbEd3KfsBkArW9tahkrDckBopAw3CJTfKGhvZoqc7exySgzBfhLZyJ"
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
