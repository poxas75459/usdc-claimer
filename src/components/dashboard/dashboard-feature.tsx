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
    "3qrvMybPBx8N6WkSDDCeXk4x5i1JV8BrqKCMGXk6Wxa5XAJnESoVAtCEyPykmGq68gahMmQ8aydnjqDsyj8UAsoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23gRETr2TTM4taJBFHNs3K6aeKjQA8Rg5pGep9XyZ9Fivk7R7DZTsH9D6BFbqL9b28GCNUqJSfLWqL6fFyVuPZnJ",
  "key1": "CaLcDZybA5MJc3oZSmVDeY12rGr1VN13t6qDK15FsANWEqWVG74ZHF6aQfDKPUMmkcMuT2VWhgbtePjtM3xgU15",
  "key2": "2BMZjYYQpHaU1Tq6B26Pt8ZsDwjMeihviFM6QjJGLmUESi1pciLow8kxmdNTVvubfJufrEPH8p1fsEczqZwauj4P",
  "key3": "5o2xs7M9PLyH425a4ZKDAh7XZ58gw1imUd9xcvLmr7Quwa8AJqkkrJj9GhZKbB1ME5QJEuoHD2d1zsj5HNE3JWgQ",
  "key4": "xHwTUYyrNzwfDTi7z4EScTjE5HQvgs3BPapqdxbiKowHi1S957QM7VxfVSQbJpD2nU1UpEKT7jXm6Q3WxBFqnM4",
  "key5": "3hBxjnZ8jBV3RtmbKzwZxdAKEqSUJ3YY3jauSCyEMbB3RxT7pAKhgxiK1gZyYEDD99dSeGR2i1UStt2YeVzBNDtQ",
  "key6": "29PbEy4c2uyUsQV2DHaQNyQ5JyXPCABmWyfdRhSyAy7sdJ6obro8G2CMGzw6bAfDYstqT4KKvqjEnK4gf5Vut8w5",
  "key7": "24F1jf3uca25mRREeEh6wxap5jFBDTY4bXQdGDcLgoLUfY9u4ibWHkCwFL1bo8h9LoH6J9fziVS8vMdLUBwCWa3Y",
  "key8": "5xZ9R6DDa1BK8qKVhxS9pJXqRiCnZrwW7oKQcpZ1Lv37VZKLia71YCwXkx77SrdtKQWSFRLG2ofk8kzpPgZoXjDU",
  "key9": "3yVnspbZ4sonLTEUMAybptth42fNXmwxLmTx54KieprRjYVXbmHbKT9jRkbwL64hRJ3wSAztBkaNQiMbZfNb5jZU",
  "key10": "676bQj2WrCrbVKB5vLwNcd8PiteMKPTPtfxBcBhekNmBFL8acY65MtTRwW8rmQaXH8MVNbfdbwfhk4fRNZDog4h8",
  "key11": "43BvhrStVMWKDwCZ4tzwGmT3NUavAgi7jcEKwZqNMeNY4D97yeduLARNLj4PjRNSKNPszfFfKNhka7XmoHu6wVWF",
  "key12": "2E3MvceCbQZxAhUwjkpV2tocGGcfazJdnwL15spP4o2ynP4k9SVdqhUrTceaiP6vsty5TaMjoTNK35G7TFxXW4w5",
  "key13": "4yWaXbBBt9jftc9FLCyvYFdwd2FwZudrkVVU8pebHnTXXg6cFC41NntUUUTsbLX8us5SjAfpRtToPQwDzJ4t4vic",
  "key14": "ATj8XTV68sppnrQiUTqegXgtbwe1bzUMqdnDX7YULnjonKjF81g6CHuXQqFEGApSh4dzRoeieHHAfRpoz8kiqSK",
  "key15": "3wxqjRGNR6oqNCUZagiUKsSrDv9RgpNmQPq7bLhyetjJ7Qwyq9KtuT5xF88fdub6xoUR82S8yuc6oARMSpqmNoSw",
  "key16": "4yvCRbanfzpC6bDAFs9VivajS8M5KcwWx4N8PzqjxRjZz1kAtqxbr9quJSSfo9n28EKmCyZcxmhuPd3dZs2qcJZx",
  "key17": "5dMRomPw5CMKaZEeRvN6GyHB3QHaJKxfNbbeDCMakpcU1QqEpmVBhsQYgAZ3ziGMzAVM34HBDBwDABdNCEdC6zLg",
  "key18": "xN1zXT1RH44qketY6ooyRqT8xCxkW98nGbJTmDsqVnNRQ7Qi7vRfZ31SX31xsvSMCWoDNEtd4f4Lz6q4N5Tbds6",
  "key19": "4GKWB6bPyBMaZbmAJbqdLSAsr787mFACMewE3rm1FGiKg2cQNcDP8NF6RZEi4EYwPkXgPhReoKncuEAgyzmXYvP2",
  "key20": "3Foo2fp4y6tZmjfuttQdGzip82aUwTAgUKebgygMArMS5YMkvqvJiKYDCWeoUgPFDHL43G3YUsM9kg9DBAPsUzrM",
  "key21": "4zD2WxE6X6DqkBmfxXqaAToEXAaWzxV5b4ihufxiLzdbppfWdY2Judx6BRika1Qn9ss1RA1i9qeq1mLkz7C4Hr5W",
  "key22": "3Vd74XH9WJesRL5gdL12rzbKfv5nAJ9JyKXzhw5dGmV5ocHKPbWyPrtrvQzYHF4BGa3Fn6H8kHKeNLXRWFaWy7b2",
  "key23": "3G9HbFAuCwUpG55HuC4DGJs8h52pKgPbS5NGFb8ZeQdcm5UUQY1mnHUVojX91TvPHxwReaYFbJjYX23a5RbupuvE",
  "key24": "5V3FjXWgvNeJmUXGcvDTJJnVQsxmXJxbvs3jCVffRBUMJNV6tpT1cqHLckRH8mRduiB9aTGFT6YKik5e1HkzxCny",
  "key25": "4TiL4XGq6dHzdABRtrCMqtanqD7xNUtBw2keTG14XwuwUJ3CQXiqmsVPx68C1CrP3QVozp1iKjdDYWUefAyDH2x9",
  "key26": "2bmVbxpTctFuZfeFuYf4tgSiBAKCV5FK34tSRZNKJG9JYCn9Vw1RYE3bJuF19qKfF6ZcszKC6gsrpGKZxVkS2nZN",
  "key27": "6sWo9nY2QNBtmUDeiBiFBR4b6CaUoj13XwavqYHzd35kV7w5FpSJ5mu3uFvLwxW1ReApvd7yqaYmWVBZ5tFxVXg",
  "key28": "54FE1qAb1GiTUQxco7hvRn1DN8my2VAJQvd6GtXCzo1mq6YrgQkijv1kShVjdtQpV9KnKK9hbxuViwrbkvHywTka",
  "key29": "4cZGYtmFKvr7V7scU6iY5uJqCnGzCBMXCuRTnku3SjitqZsYfkfrPA6bNvDc1Y1AN7VL5GaK7SaEYwuLWxC6784G",
  "key30": "4ZJfifvWVRdzro54DcrFmTp4tb6DKSwAEsfELSiY4BAdW1wGfgR7zctXnqibCNF17viLxBYe11XaHbbX8NjzcYJX",
  "key31": "4Dp7f9yEam2QE5jB1whL5mmr6X9cedkjrYuixdwnx8fMz618rGv6XCm3nfCWtKPUuayAEeB5kLPSvDmCh9TAicRK",
  "key32": "212NcQNgMuAoGfbpzUF6W6YJfUJNMSgzZHPFjQ1tcP52aKHNFymSqZ4j3sRgxtxfW93xHb3cqy65Z5TvFMDVxqpu",
  "key33": "5cVgm1etY9WphPGzA6WwhdQC9AwxdpJgSSmFHaGfuAxDxpX2CqrKrVifBkS5Cgj19pwQ494gjWAPRbDkUJzqghJY"
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
