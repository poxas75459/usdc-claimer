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
    "9rQ4gaWviTutuaREerSpba1CQfo5tPukwXKJZsVgdy8jXnEACjV8De1DiSFjyDNNu8AJnGTsESKTNxG7cfE7HnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhQYse4y8pR8y59aRKK7dqExfhwB1LVXgB2RLy4RLhgHcFc9UjmXmDDbZNgAVddJHgcuFBFs9NXK2G9AUvuj12D",
  "key1": "3sRNAhSqqLSZRe3yyrbwrTaVVUXZi6tqySBxNomPVqXH4qseDbefRjYaxEUKsAxM2PugBtmCxE4jsXWHEbNo95sL",
  "key2": "F8Ru8ncVXfQfoLWTzxGNDGsSpYh8nJ4x5GNF4nuxhXSM8yzxirt4QVjj2kk4awwG73JFh1wDTfm5MQf9cGDP4Hj",
  "key3": "2XgiEY54zWAf7p3cmZ8Qc8iuhEkSRQV3TPn4dC2MWDQcsTSA8jPYgfgZdwDekeUCZPP3tmu2SFQi597ZgRTVK9ER",
  "key4": "2ixatBFFzfftgo2w4ocmUPrfKEPmp2ikfGUKSyyo9qVd49zS6zfB4mbAMA6PDASiJ2rXaUaFbvYVqboNCQPkCXy4",
  "key5": "4k1BZS93tFjKMG8BRZ3DYVAUBQhvdLdBiXwPSirbXHo2iqa5DRFFFx7VQqff5AHBv3yoQABhBABewv5g3UkF4eiS",
  "key6": "5SfL7kVbpnwyWEUmsHELLMoa7pC13FGKb3f94xYDjuPHah7TwQ43EPFwBze98KwUdUro3BWtceePmK3jzyBaQbCJ",
  "key7": "5akVeagZKZst2FFKgu3x61StzK7x3LU4FcfknL5moaFiFa9VKaS2snWouS5c8T86E3jQJ9F7iqnft5XVEwBFHJq1",
  "key8": "2DU7hvr2iuiSrtWfPVMKGnGbNGg1fqsH1ijUbR9sHUhJyzDjXio8vP6iXW1mhhAHqMBofrxfXHLBEUT4Zy3mvyXR",
  "key9": "4wg6iCraoFjhTr9qLZvxn7JJPHzUkLyF4rkM22r1qm2twEyT29JgJHx5BWfTi1QFh5vv8TJJmJzAjji6u3697xhs",
  "key10": "iS4fF7MXMTbMRHMHa9DuBYUCYE2SMiMdyLHNhNsCDQSm14rDq8couzg7DMAo8sPZMCJHAtFpVxbJ3cJ6j41Dijf",
  "key11": "2wA7YV6GmvBmE9dwVtWUN2oSQHPtJ1GJMCTeXJZteaU5McwBsGhv59mQnUgN6xTwzSmHscoayLwyBhPdSQVsfBPj",
  "key12": "spZgP5PufnEPmkZKEZPSyQY7sNpbGKt8DsdvWQimQXu4kjtWuiZp1TwtqDbbFjrq2QB9iqfFLCmNroLia7VZ2D1",
  "key13": "3e1cVdXyrfbk1wPKFKqTPQXGKEviHWkSP9JCV9NZBwKMhNQzHqqhWRhAHp2NYtcAH95KxuTT5rAYe4VGH4GUXPFM",
  "key14": "2sZhKtpQb9tSVVDqneVYtjAwjXfuN1pCfk1PcWEvM78TQT6g71e9zE2rMjJzGqrZnDSTeyEuLuz8bc3yEUBEyGR3",
  "key15": "3FcfcSftbb2JgtqLbMh2sgHvnS4i35Te8RS831bmuYY6N5amgTwg3LbFXD2G1sym1isp2DaatsqWpdM1MJF5iizP",
  "key16": "5V5ctPBHCixzt9jpsBwBEkCg3AS2hPRriF2rvPMDeyUPFvq8UPpWLaRQFMwhD3NtrWDrrBCdwLY2B3i2PoWBfBs2",
  "key17": "4tRZ4Ds1Dh1QDQunpnMdZWdNLoaKr2HtnFCRfevnmeU3EZWkbDtDV7mytQmNqdobDWdRf5dmcG9yHNUh12QX4c4s",
  "key18": "3HeSZZkJre7paQtMZ6M5e3Q5uqm4gQJEsJjpZndXe2yoxxNtC3xuBNk8BGFjvqsk4ujB3bZCh8S46U6eN3hpBq4S",
  "key19": "4Qk4QRCFAAQXc8ChYG1nybofjEacTmrfYGBmwNsrRn3RZJqtrpqG8eEM1FKkb4sGSPvXe3vPgzj1PKwGLS4MEaHq",
  "key20": "4mmo9Cdq76Bh1dzmxmP1d2nn9CMYXH7qiBSp31n1kg52TJ7PeMuNw9YhDvDRC7j4R7N5rtRbP1pMWySkkWzPcPQm",
  "key21": "4F4yq5YT1WC4JCJLe8G94wYNC6qQJSpCYxbsvBrN6xQusqAdsCvEUKVHAXGNgY6vjPQmZtypDCm1SbXofTbz2BUu",
  "key22": "5FxpFmFt9A3319tEzuiMvSqjuCJmESi8CbDR3sYgrz9zW63FMECobMakwm3anWdeCPrmsX6KAM2UWQNc6SzeBRwi",
  "key23": "35wNuyn6D4UkCQEV9K2Y8Z8eUd7cvh8zv2kK7urMZEpMiUPKLKUzaBxHBVkLky1ETiCz2anDW4E3ThRQJFfkQi8v",
  "key24": "3orYpQAUwWrKSa7dKE5vgGPKqVhutYhP92Voo1NHQGrBa7s1HjPkBcnHbpqEJn23nUiMHB7U5Hfj9yWqohXAiunG",
  "key25": "4sbdfMH5voJKEgi2aEmSdVbvbaKRPFgJWyzMxtLJ5L7sHJbN8sd4KPgL3Vznytwske17e652bmKiujZ8K3mG9QkK",
  "key26": "4r8qwwe9pCuzngafNsPtBcywYX5k4xnuBo8i69qGuezA5HJfcMQm4hsNBvn6fjpvyuHecK93AZJr4PKUeLLjjPoE",
  "key27": "4VZkLuWtgTN3SMt8MLanv7tfZJhbLBoCuUiUMvP2eSp9Q2GSXvHvsL97SN6WV6ppBKftPhtxbzcUmp2UEmH5by3S",
  "key28": "5b58XWQFAAGQkE4KGLDdR6XfKd2me4JUn1dfXpdSLbi3d4abbnJacfTt51FmCvj9DkepK31dFscGKMXppiv5EHdP",
  "key29": "3z2GGNh4LWthGKuDijYt5ZWR531x21dL2ghUNnxgZAK5NEG4kz2ma138MdG4tvBChW84yQPKeGZPKun7TwdatBW8",
  "key30": "MqP7hmfp3m9K3gU8AaBGvQUWrFxo7HnMBE1xgGMwtRn3mQRaQBedbHF5dhQh4FKXutBnkzfHwh6yvnG6Q4iJfcT"
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
