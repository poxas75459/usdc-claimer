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
    "u8oB9C8Z55qWF4U7SMoFF8uPMFf9Y5g7qfcFHoExSx8m5iWbdxErn7LUkCzznsyufm7fZbAUxpvhxKW44KpyePn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xhhZfZztQEkDWGotCtKhchkGq7scUrrWRsF1k5RCjdFx2L2xE8zkSiUnDdzEyhMVGnFyR2Pk8DGipotrNR3RZX",
  "key1": "YG2RTR4xGnNB6785UBF5rGn4dYEjSx8gaZXdoTMCrnaeRHQTKfqJLEy9eCdUCRPTKecA77onHKL3d6PhLDzriju",
  "key2": "3ppHiXwv48qToaNbqLofLDjhBWGqCxGzjocpW2M13fkw6QGb8K6iwGajkwddBZJdcWSANW4vFoU83NUUcZwcgDL5",
  "key3": "5ebGjSqFGi5pbshVqSVph74afSJkLPqbYMggkBYtsWpAfEefayeKAo6LPRpCiexTVvwLVM7XgECRsDBUz4eXJVhJ",
  "key4": "2HRMyYoRH18NqnXSjmYjfvFECjm1QETYmLeGUn9fFFUgqun4BVaDD8gUvrqweggKPQTKziGxN82qhoZUaaMFd1L4",
  "key5": "3HzQGN2NNsPs29gxPwwRxk6sRaYbXpcNHaCw4gaHKFSpf3cSX9nfaByfw1Nch269dxsMDeLN25LSu9cGRZCzqjcj",
  "key6": "2MULdTeeaUsK4FrvrnvoBErB4bCcimr4H2W3CgbUyQkwFDFjCQXz6v1sgFKF5ggsCkKS8p4VRRszHy1f5e9AG6Xn",
  "key7": "3T1bymdxSDAr8PpRTCdZfbizwuRYZGsEErRRA2zjt8fUN87FwpdUcXYRintkSrUmbZWXoiHqM4z5TaosUmeAK111",
  "key8": "46STa87PxMXKD3kv43o9VFPCLKMheE5ezFKo78j5sbCNzgXFiWVhCXYsgfNptnGpAFuUd7RboyhgqknVk8oo38j9",
  "key9": "5XUKrdjPf2bg1voj5J5PaHkg5PHPRMZdqe7nfcf7k1jqv6DXHEspjeRmciRJ4y5gMD29GqJWzeAT4vJsijt2uJ6U",
  "key10": "4J167uR4T7mkNymLiSbnhdiGTX8nW8BbgW7UvEX8dhvcuaHw6AyvKXdAyzpLhkBSvXNFKLEAPBLYsCz1Mg9bHoe4",
  "key11": "AadjtVy1UUn5DXcUnsY6B3p4DsrHZ7gWDxz3jzZ1kJPWZ6YzmP9zaWKbUc2YtKarKFMAYoAxLRCNFzW6Xt2GMvG",
  "key12": "6hwMRxbAG4AuSaX25k5fjmE6Yzk2aYJsXLP9AJ3ZffPiiTxf7UbhEQbciQp1RkqKdxsyLBE4bjkLhBRKWKNZocJ",
  "key13": "64UYnEUPvcDhjeZ8oEGFKKM3nuo8zDvmmhNRn4mXd1eg3gQ7sQbsCWY6Da4wvzAJbHNoPrDk3ZBpc4waNmtf3AbY",
  "key14": "2rKvGng8LU7UEPeHbc7VLSBDjL37ZrNUHtsVKRJd4bZNELJrUTvtTvsTW74EubGMnCkz5danjUYfPb4dZWmXRJHp",
  "key15": "5hz8j6Y8aJnRLPirxA6NeVi4GHtrRvEqK9y4Uj9LWVGcLZW4jAhv8vG2qz2girKvNfPhx3M2tMJNCJKwztBjmhYN",
  "key16": "39jYsV5y7uDFhzq6zGYNScjTsFDqSKLdCssp8LoRvbJ8HGdCRhzk6QqZJfnGjB4PNeCDBHVJAfN5DK5K8Lbi346V",
  "key17": "gfPwC5JMDCzXa5LYCYqAAYzKVWA3dp29i2MtcgA5c1T4uuvWK6HJjQyMNPbq1LJF9Fw4gQYzQu8rAFbzxysYsSV",
  "key18": "3vVpLn52i2ZQaKAqqGuXFDpy2bKogV7kAuaaX8QCPwuk4AHiLBfkjXaq3DfEtfMWv5SfXRr7ucZnEgqKsC9XHwdD",
  "key19": "5aTgroaZ7HJjZeqrnRZUHqB8PMHrJQKQGsNdYbvy4CEC1N2S7ohcMipP1XoNdNFEHvUe2PZ1LYsHaDD3q91RXogG",
  "key20": "35YTAg11nn5n7ucD5s6TQPmRfH8F73mqinZg8ecEyrZeFqfRQzFAfv3ux1pbakdvB2xvbXyRfW4EDKszHC5vXUTi",
  "key21": "3E6XPe58wkJP4hKYjCy3yRdfkpGbeDVqLRmhDL4PKrsuxHoFfAtRNXqSbapX7YXzhocbBzF4i6NZcRSmYVv3o1pf",
  "key22": "8jtv3YA2UQBCn1JmqSWKcZ8nKirMQN1xdK8UCxTT3zpPPTkcrKZCknj5UvhV2x5Yk1co9KuV3XemsJ6WeSrrmg7",
  "key23": "3VAZrTnhRHQJQDdG19b2vUNqACtwo9DqwrrkfMr5fyPjUc1FPkvbuVzaUDwXYyHq7D3A5EmCK8HdD1H1GkqFvUPT",
  "key24": "4HjB1uqdSYZNLhTEHwWTJdSvunuV9bp21hAcHqA4DWu2gPujVbtedYN9nHS7wFWosYm7EaoHgMsxU2Z72xYRphrU"
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
