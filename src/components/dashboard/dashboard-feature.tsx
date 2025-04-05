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
    "4fhrE3vnMVAwzBS7Sp9okCkZWxDezW1Fa8j5rzwZ9CiXBfvS3ghqcUXM45oN91gnVWKdnLBYhb85rnJQeWpq7BQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u1u9sBtT1s6fvNg6zoqfTWHvRnr5WbnzmrXckKTiXSzBdb8aU1sExK96ctJntGAwa4SsMAR527Dxwiq9agrERwe",
  "key1": "2AxTXvLHKegmAYNDMouBLT9UUgMfLYXWLJmkZZ5D9FJ1PGCebe7Tb3DuikTEFPpFXjtL63jmf2VkCi8pomE6pihB",
  "key2": "5rxtE8tavuNpA6GrdUj8yi5CGA2oXzC9S7u44uvxBagPzS5szf3P7Wa7n2MyaDxt7FymKKRTtWyuJZnx4L2mzMM5",
  "key3": "3FfpS4555m772iAZymmMbTJwqJu5FQQWdMGhWg29ae5txGVBvh24oTgC4XnKvUbTCHfWiV9RuP5fe3kzQo2DYy9N",
  "key4": "3CT2nF1rLDUFm9jpBbwMpSy1xwKCM9uCE7tNVHZ6ZJw6zPhhao2y67XHDi9EdjmfJRNFGroCVaR1ZZemDnSS1k2w",
  "key5": "4ykd6fWAY1toQz7KCvJ82jvbY1EdJnNZ874sedm1tG5yeSAKDW88P3LEMJ7AVFD7vJHxaXo2A9x3EvrNKm3B1CSg",
  "key6": "2FEDKpJR3CegELQtgWJCcSTTXXzFME1g7DumtCXikdzBadyZ7hshrCD5DN3ctGsRbLYonKcq2NiJrLaHupBGPRUg",
  "key7": "f8RwFDdCTMQ31GmtriFa3iFABvXCJNZhLm2uwUpgnWL6MRihe2S2CdCEZngc1478rsTm4mGL9fwRKubt5JzgAcP",
  "key8": "2NcX13sypgijM5wZ4UWwTy2HqhMCDSkgDHLfB2Fcc6FsZVi4QWfWjTGuHGA1a2pGqRqQL5t9iz6WGtJmaghWruos",
  "key9": "4AmciMxYKMsjWRrUgfSEFYoTKn3XdX7gBN53vKqZfzCXbhWpjXnmnTguYhJfKyRqzsBPzHLXbLUYU2mT7a2NaDxZ",
  "key10": "26D7b4c9ETjHf1xzFcWgq5Boky23Tf6UnrgmBunD1xPQzdqXfRxUKk1sqsxsdZbSoogEcj9tvLhyyovQf4rC2CuE",
  "key11": "2bL4x7BtppvWg6BXYVUCEEiiR3Es1aoCdxZE2Scf62c8TSYhGoB9PugL333QD59Ptg4MWgxrSWmUbHA6uuh4ikxK",
  "key12": "3UnA7eXSM2S96rkpeh1mv3P8X48nBoM1e1oRoy9dpXSNtKoNaQ75g8FiLdhGjSRewEJFLLRAKU5787rmAQLkqCYE",
  "key13": "2azXhp3yUKe53ndWUDNv5KpWdrganeTY1jUeiFP132cvLYrgaq6qWZ1ebFDUummXaYR1MmY4cYcoMUgNHDTjM8pQ",
  "key14": "2RyLpAYRyurTZXemzhdZ2cNttWidup9jZcfn2qLni92LnXdYP7Q8YewBszF7wdiVgxiTFqXDcRVRSZvFCCyZ45Hp",
  "key15": "3FuoBWnAutrW7FfJcTayx4ePBfL5TiWt1YrJfMWzn3YVB1AwekbATPZFPHNL6k92z1chQQSrBG6c8K828Sknfjgj",
  "key16": "2KdwDBpNWvyvXP1QWA5bYQCXPziLo1vG8L6aqE7CKrqXJGu3K4QU2YZt6A45FW4kiawBryiUQU6sueWXLEvvZYDp",
  "key17": "3iMKiXCfF1JMKHmheN2hJ4VXV8Z3GEZsgiX6vvsbhPgGNJ34Vdyx642kkAv72WTKGxkC2tvH8GFMiVki3QFct9iq",
  "key18": "36Wt7Kh8hHkKZ79tD7i5kp4AfZ8vSyTpgjz1A4kvr5qcRtRZRe6f9F9FBYsr6KQeBY6mWgYS7o2wph3xWWqSwoME",
  "key19": "ncJnirVEPhFDytDTHVbbT8MM9aZ4c7Gh1mgFQh6Q8UAG7J3yr1dquZE8H4vMPPkNfsVT3cYqaH6MVFvxRAyQbY5",
  "key20": "4wbSa8XRqeqadZYEomkVPJYWviQis7DwmTJgLQBE4cW5RvuWvWPJnM6VXg71AjsbwKwqZYppncJwDpmrsyXY8DxV",
  "key21": "47KhY9ZAiG2rminsibqihzQvAYCNZ4nfqaubwAcmHmJHNQfB9ZbqnBTDPzyK4LQKW9fbmMKqW9ctfxb2KjVgk5WB",
  "key22": "21aMMeN45XhvbF6tXkFYK8HZYvAtriPwUhHj12nUG4SVjpASmpsDwXb1NC4PigQCEigB6ZJsFkUybVqCANcxu6KD",
  "key23": "3R8Wm5RjcMtwEJ3XAYVQzWf4GSmJmAxsGu9eRBqGkMeQF7t8stLvH14rnPcF5gXemZyGMxY5JBkf8JLXaQxxcm6B",
  "key24": "Wf5AXp8ApJaZd6PHpmgmqWVVhFtZZoWidaSeHF3ghoctGH9sAfuyResud9Gpvu7tAuXty4Ms521nyLXcSYYjNNH",
  "key25": "2kDU3J6uLerpqcF6bAdqLoFnBbHxGc4UGJXGbSkfpSsnBuSGZFFqHwhxGARZRF7AwGDAZJMLopLMx5F6bpQa9RBi",
  "key26": "2NfZQBHcWyMPmt4PvaE3jpiYLcHFthkEiNViTRrcQbtLGqqsopLr9YgNPWg9sWbdFJDBNRomZa4SPB1Qj4ovpjjQ",
  "key27": "4CZKfyqATxFtFqBmT6NTEQ3KVce3RFCM94i9kknfcqHhwJ7Zt3JcgYT8FuCcQpHvfZRqbZJBg3eJxtQ2B2ETQgLa",
  "key28": "3736gm4aS5tgPoJQEo2oAr1XN1UGTUMLqV1UT327MtygNGVBaSYi88hCqYH4BN3B65rktc9gkQDN9V3bG6pFNZwQ"
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
