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
    "2uRTuWLQ7UyxNnnuBdZiCev9frActqNU9KPm1BPRxgLmN8iNfaiPQE3zU96D7WgUucb9bhhKDj8gjCKKD3JDPtwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EcXmJRmTa3SSz1dh9su9tJTFpAz3Wt6p5wEaxwauChAkQfEzYHdYMptXCyDfn1ooSvQ6hReW1sdWSK5DJREsWpB",
  "key1": "2Ep7mxsnyJfp2DSnHPjH1sxm389nD4YksC77ajyn3tpq1Atp6ZhtdRG6AGftTCvR4dj6ZHGPgbZSk2eKwDLHyx6y",
  "key2": "5JV2rKvckLsXQSkjVAQAa9vuuN8TnToeTqFnPEDrqeLQ1b91ZCj7w7vVAeNvW7xrbnpYfhTgyPwCoTRWGuXafQHK",
  "key3": "2bvYhFMr713dgPCuu3K38WoQHX5mGTtuhWZvvWkzf12Vv3yfhjgsPQ9yMjPCrnEhy7SW6gzjtS3UYkXwycyfWyzJ",
  "key4": "fVvn9SSff1HTzcxvcELYcurQKZ8DBpxp4naDQqT68uWnRQUSDridLNRhwMHDKok4sfP9kdDWd89zhgpCa3J1UHt",
  "key5": "2xRsvEw41FWuzfhUSeGp2WPro9yv5eeGkKFWz1UMqzUUu4CeAEyCeQihWdjYZPuqJa6X7hCpU4nyDPebpdwnmjmx",
  "key6": "657jSnqkr9csA4XSDD2253NcVwmcwcV2h4P2Asy4vwvCf7TR4LAKdYK2k6YJL2bezttJYcHjGnucSbxgYMwDqbVY",
  "key7": "2jRCpMukArRTTqjqZkTM4ivdwX3fGqwYPFTMAqchNyei6PxSYQVTDVN2pW9fFPEFfVdngf6oHYTnihZshYn2ZZvF",
  "key8": "2F6PsCc2oW41WyQiQwXu2Xf9gP22epReRpTPPWrM5f54w5bWmh2vaUWxAojnWMacWYF1Wku8QTS6reU76Mi1fTLA",
  "key9": "iY5T2auc75aGU7AeaRUVM9WBXW8rZj7kvPKyKbttkeqfyGerKCkZ78cneLxgLaCWSeN6bu6PtRcWZJ57piJybSW",
  "key10": "6g9MDoV7Vj7UAxGcDSAspUBnVdQT9aMYw8AYs2ShNeM2muMrJKiTmJbti1dWgMFzqHufZx3FtNGmynfDzNUhE7A",
  "key11": "oYVe4FoyWgiCMPF1rdVU2hyMZFH5Kx1m1FB9xHr3nuRtUdHo1WZRyNqYrYCrqUneVwbkPD26wZBvBkCCfUYAFwj",
  "key12": "y3K17LgzNf5kgxBbuZ6JtCscnsRjatgvtvC6KRCJbvW5t1ocBEJu2NvQAYAQpJ2boihPzLQiQ4Ydg3A3PBWNZZY",
  "key13": "4oeWJGCskyCJ45KknHTQGf5bdQQTtdVwbCyKXUUV3n8iUvKPPBwprRXawn5tyDEbiBwSi1KvmNvSTYaGxUhqfx8e",
  "key14": "bVcJQXVmg4K4dhbhXsB7QDQyJHnm5Cpk2QtCjXSiXxy9GyCpt5ByPgX2ZFq1N2KR2J3TxtoP8Sr9vSe3anRrrFU",
  "key15": "2Ff6cefVNqYvm9UWyTWMqWSfsutrbnTxpCqZWFqqB2yWMcV8s8FmL87qNFT7rpvQ1CjsamHBCzL2xXBAhL9Th3hU",
  "key16": "3s1MpyuB7d5tSMNg4F7hxFDRzbUmpvEP5VXV1MZN59o9vwdJaGM5Ytq2LpkMmoLor9TTKmS5BNNudPRuow7p5k7j",
  "key17": "5ikmfBDj6zxCpr8ucnDaAkg4Q2vwPW1yfhyGWbTo7yDoPqVnH6XUN7oV5pYbk9pUkhsVtPeqnuKdUhMVvSbAp2jJ",
  "key18": "3n6f866sVzdt1mdrW99Fqf6Q6pATsXQrXHmcmpaU8aZZ8qcAvJjyHz6hc74216ePeaNRcP2NcDUd9Hh9iyVWge5j",
  "key19": "9FPsbSZdxFcgAgo87JNPifAidP6ZZG9ApTXJMwkPTEPLTKagMPNHAh9vvMkPnbr3ystPsanZt5MuzqPZoGbJxKV",
  "key20": "59z188CM8xSvUHjq4RmGoJQB8DDxF9KCcpH5YVzinADRmACdLk7RNqLn8odg1B6JCAPJp2G1mGctDHMSzvZq4hzv",
  "key21": "gnFy4Q53kdN4XoAR8kkkW2S7XGbXRszwHTZvqkCioEZYfc61pt9r57EXQtxiReCSQ4VALzgeZPkHN2mQq5iR5rG",
  "key22": "2KhWFJsFmTcwoDdti6JS7ZFeLkKjompqYFo7qREbxeRG3gzHaf8SEXtdY5d1tZhRjEAM5YQdXZj2yhNWPCgG4VXu",
  "key23": "27tEu3rMW23Dr9rYqbwH2gSsdZfNwcJFAosG5saFXp311fHgd2hp8R77LmfRup91WAiwq2LbL5HufD3DP2YkNwz7",
  "key24": "3yZioMbyiYTJRGkkq8DdHaDeSZx5h5rBKhKfEE8sLh4qoGdr1ZSuAfhmPSUzCtV4mBi7DdmeMfzW8TzXNANMUhhF"
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
