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
    "4j8XZwgtHwDysZbhjsgcuZqEE7a1qKeogAD2FbGdyGdrFK618MkW8haN8wuSWdAJTAFSPZaJ3UhDkVnVCa94dw2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yyEBD8vwbN9i3dDe4BfU8AvBX2unXzAJt4nsVJDhS68SpZDtqMnBv6Rf7mMdfedaHKfkeJdu1cZbNParFziS6xV",
  "key1": "22Bz8u6mf935tV9UMwDUcx2xneJ34pSS1UiQDKSnUeeTeVcWogZLc2ZeSRsexDwHPpwumaYEf91oD84yh28BGPUY",
  "key2": "5deCebhmv9juvhFB1sk5ThRkrvyGNvoSXy1WTGjDNxvFg9ocgyVvJD85Nt8hrC9KBhT1X354DBLx9Wmm5MKkXdPq",
  "key3": "4vSXAv5HqZhuMS4CUseHaErwjsoKkmhHU9yCiT1NbzMscEjAeNSxk7Bazc1NedGDgtNAYzjqGDFou5uPHQ9F88Ln",
  "key4": "4k4tyv1Boc4bZXrMadTz2EDiqKHwBJ4garK7juMQwd1foSbnfivLEURx4h2t7osK8E9gseP7YKFHCxEBFNARPBxX",
  "key5": "3fZd7yhqPRLsyUMP9TExU5R4ZVhugNPT3AadJRwjjPcyLkrurSHgi5EE7mNBjNU68AuHG6aK7bNCqDdvYv21doVx",
  "key6": "4G7aRUV1T2LB7jDDaVbCTU9xcmDcpLWxtetCaTvoKX9ykTLVfutTfuWwYFjq9zQVZLBxLGQFxMa87qgnk75DvK5g",
  "key7": "2VW4mg2qPgG3so56UJEUWyTrCxpXUYebgEiXyLbCX53XhSXXCaNiAHaAxmp7DKGvsQgYdGDsKVVUuhWjbi7ifQyT",
  "key8": "4URbQCZSVUCrTBXrPAkd1XCPAJtBDPk3GNRKq2twDpPEZpup9b4Hvti5FoKuZroW7gGsq95oSitRBuMVNnosWFNq",
  "key9": "2uCH57CTYPKcAFiYFf4XRabSLuPZ6yPG1iYMkuC9FohGgUey4y6zQpvZkCTgJ9LTczDsiwFNcaKk4W1u537cQF69",
  "key10": "2efA82cktSV4fC3jR9kET6RPq7mSmQDAr3JxzT13gFPVQeMXsUuUGSxaejFJsqUK6dUBCVw3UuPGgi1eNAfzUMnT",
  "key11": "2UNLxbPuTmmFhqWbpC46g1Wu1U9iCaRM62Rsd3ksfx7ajrW9eQhBuFx3K8VBo8oMEvyBNbeJ8hPZgvTK7vGNxudj",
  "key12": "22whCUijYThn3KJJT8tcbDs5QRZTAibiVu1TUuJAdHNZv9ZcVqhE5AMXmMSWpq6HHUPttZDFtAWQKryNxgGiDPeB",
  "key13": "3zXUxomGc9fhu5HZqvsuY4PMMUwHfiipw16D1i9sZvRoj3Vp1axi1BVC2ad8czkGc6FCJvwEpEyJySKgptHaJeJu",
  "key14": "jbuTvUquNfeHfg6wzsGBfrUyAMwcwS1F7v3W3mb3PsRZySXK5iV1ysb6DbPQqWGPDfZNRjfKD2G6mbDtweRoAT8",
  "key15": "2n5htC4QyMXPcGDaGaJRcj8d9Ue4G8AJPAajEqssF1Jmf3H5PUqe3fsSVgbLYazguXJfF43m9CvwDisuDzLdVN7R",
  "key16": "38NefAy59FPRQjmrY1BZsgpYKmVeLZcAcXXqdh9Vvzir8jmFp6pMc3qTY1SpmQKwGkUx6FLhjkA6JprYXFMekyS7",
  "key17": "4VnS53817GAUmFL1cxa8Sv9CvV2prAnp6RsHdHEovwh1eiPxJy4cRLXxihsUanoqenCGcFbbmGh4xgAKNWrnvcy4",
  "key18": "2v4T4LN11MSfTLgtBYQ5nonhn5DRCfk4cK8rBj4LeX9rim3gyNMZ7x3p7WJRu7XcoQeyWJX1mcTBRYNvfkVQBFiZ",
  "key19": "4Gsi5BvWDsTcFuv6QF5oDLBVrtt3T4TwePwQLHNVAGk9U27MagpDbvDJMjvLmhp7HVcB8YyQiFdjUg7xJ3d5niUi",
  "key20": "46DH8g9uQ1jKoS9AnexEdeDMPbzVGtGmG3dSuXFbB5W1ePAqXed5EKtPHkJpsRXdMsmtfBkM6YyLxFrpdQYHCNE7",
  "key21": "5Zoi6RMeRq6S3rMXkR2McgQZgcE878Lg7U64SwNjsGFTKiHVBcB8uhjVs7TjdHTCmzMHKeJak2KoxkzPNCgXfJCS",
  "key22": "4UFE8i3yZGhu954JqUvh2PcCHk5EVoKrNbxKZh9qgprmzba4uWiRgkTuuYGjYhUe2suKvoAPf3zEepCuQWEmYUqn",
  "key23": "kqP3mbUZveCzLEq6L6EyuWC3M4cghDCyRB8ZU5EGAxpdmSgTmAJYXwjuT9RDwS5PhVsGbUpVaiYFCwFGcL4Ct94",
  "key24": "46WkSkm8Rmbt12rs3ECXfUdPHPHjuABAh2mxfAPuZ24EqjVhC265axjsoEJbjzepduv7McGCyjP1sWmbJgVBN7rX",
  "key25": "4NRsHExeXqEgcjBFwR2xRA6AaWq7er1LNh1CjiSHTLTkgyUGsd6PSLrQBiyXFobz769N6rjhVQ44X9eZZhtxXu66",
  "key26": "66QyCuaiJRKsBXh9f3mMV7oCjdM9ADc9d1UVeidNEST1oFoCwWwquTPT9n4myaq3HUsVmtDpM9XfPG3eKzBpbKup",
  "key27": "2ABJzAD8TqGvKF1GktfnhshwhiUz6WDQFDc8FBfWgpCeMTsbLG8khKojPvPfHKpAkJetfPy8N5am5WyBuSHcNpwx",
  "key28": "323vnH2QHdAcZVBVGmbRkj9cw6VU4n6k18CybQKfNjG1R6wh6aqf1q3Sif5BCZBKXYym9BDK6HTqns5aysf8MaNa",
  "key29": "32fYgPNnoZ3UJcHLcfQyDDcXX6XD3xV3vRYFjqiu8WxJHsDNtE72F7xrCYyqfQRGDcBoFKVAZRnhWHr5q2nm5Pmm",
  "key30": "5LP97NJHk8zV4PsWK1dmnMPxDUwTTR8gLSL9LGdv2imun4BktfQUDC4vYybSeUhmkcYjeHjiFyvMZj3pPWY9Ac95",
  "key31": "3McY8ifGbs7qwKuWZxE4mW2qvanp2BxwZYCYpQQeFJoUvYhPa7HdYhRR5iamm2Ywx3pxwUYsEzT5HAEW3D3FhqGn",
  "key32": "2hG8GbsVak9WRgfck6wYh54Vq8KN8UDjvvmP3wcxcESqCdoq5EW24uNrRyiDscwHDfe8WR7V2yn9gtg6cbSSkkxS"
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
