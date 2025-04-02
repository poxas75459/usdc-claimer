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
    "44Wx9fKoM98VMU79Pxccc7tootWa188YCfZWTCC67JRyePUtsMwSgs5Zc8s4ipJHs6ztrizbjTJXVu7bTrr9kGXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ax2S5kXtuF63TjjVMmnJDm4cKVaFWeHdfU2nPJDgHSG8B6YS7CS8oei5iGFLFWMyZZ2q1STakN53frmRbs7d3Qk",
  "key1": "3FD3NLLZkErQJQBNi54F1pr6Kjp7xzhAohvMNPNjjhRwAG7xxZebGBWBi38r1RtyDT2WQHfRdxAYXLjDCMhwdpRe",
  "key2": "3H6BT1CPmHxnVzQ8kFgoy6BtjpUjgpS1yiLmxYCWkLUNBGFoYVnq6mN2XEAgEJ5DjXWsX6iXQEZrDuCNaTorqhxe",
  "key3": "41yTUK7hc2bT1N9zUXxENN4dANUNCnJbxVcKvtK7xJyp6zZUeXijffBW9d4v96aHTe9Sxx1Wn2BW4j1nreVMyE8x",
  "key4": "2uzWgqqndxpeznck4ubMFKniQffqzHUqKncXpjUL43hPREowjVFd3Kzo82oH9qij72TYZMq6BJXZuZox5QNZ1SvW",
  "key5": "26g9HATaa7GtqrTqsTKGxYCPBGPFNuQ6BRJvHMxDwRhq3cwida4f5UyyU6NZf6aQwDzQNVxKYhgc5MnhSkS5XRuv",
  "key6": "2pcPZ5KMLfbtFEUWX9ZaLQtCnbLp5VfgWEXe6hRLWn77TUvo9JcMGe5tbaKTPihfDKCt7RZo6Tvrrz3rJyMqJUyt",
  "key7": "5zJYv7vA5tWNWDxXnsjqgvvt7GhrpctrhXZNNPbpZjCj1sa2z4jSW5GZng3BgExLLsxvNXn5At7avKGKVNQpGRjp",
  "key8": "59FYoSBAh6Jur58mN6yb29zjNsJRDosJka1piVe2gB2e8Ru5GcufnkUgdt8JDqC4hQAojhaVDGdGwv6YRKb2Unm1",
  "key9": "24ZNDxzEmXhpUgzgR1oUARrHk5J6KrXxcFXvVYb9hmWKwFt2Hwq2nUhpMF4HkGam82yk1zZxxEHGX5vaeupGby9x",
  "key10": "3G3vVGKWyoripKdBcnUqDyjeUksqxNMKYjNCnkMv4gU6TmGuKQJ4czMt73ThDCszvoiUd5bhtXF2JyziKWNnb1xK",
  "key11": "PHakpJs8tfaF8RFaCsshPCRkSpvPDV4J3pXHAG54HKS3S42oChucA4GmULQV7csgfJc6eD13WPtXfeka9DAGXkj",
  "key12": "8rz7yzX6MxJkt3hBpeXZ5NxVp8p9zUo5PrVbah3BfxyPM9LjjAzDu6ECd8RtRDUme9mJ6jiMT7bRiHQwqeJur6d",
  "key13": "55HUYvq3gi6eY8XosakBuR9ejjAoPnPt1VjQ2X1YQv3UjG3RtJkDN1z9ZXL9WHXbeQWn6CJnMsvM4zpBesEzN324",
  "key14": "g4fzpof7BZtbXesrDyAhTfutZFfe5kHgv2jL6QEHkSN7qG6rUhswWB9RJtjpTwgGfZVrHbs9gw1de1g2KktAVfd",
  "key15": "4NwtvgiNGzu71H33nP9BR8kCRjywh4q635tW471ygEAhidkeFWVFUQQziyWgw34y5DMqrvUWjH47rCv4Xs5pPPfq",
  "key16": "EZh1nBetBmBMsbnuHuNgazu5HErxP6JG9JswgZP6mK2EtRVUSp7ZS1WVyN6sFkGGKdz4VmG1sLCoiJNkHHXUUdf",
  "key17": "2Wg27eZYrJ3t8QoUk8MfgRsFBsqysULCi6x2JVrn4fbz5T5P5PPrtPNc8YFRAszXtF3ZD8U14onuWy7Khdr9tABk",
  "key18": "3rCoGkB6jhwowDSsdLMJNNeoGcLFzBsUUUYX9o6Yg3yyhDxDd8yBRb38dMf38xecbjCQGLYMT74513uM9rnboomY",
  "key19": "UzxfsTuiweKUzenpvzCoPR4CzN25fRKMduuXvxeG1EiwkJz7N8vQv7zzoXmnoeN54MRniyPRVzhwdZrgQocCHvk",
  "key20": "JZMWAGbn6fybcecRwoAB2JpnUKERTTetn2YUTWfQewwnSS5w32Uk3n9Ew4hECpobndu8BjQGxaCv2gkrW6xEmh8",
  "key21": "KYBYFs4ms64cugeaN1WZMzwR1mFTcWZWcAkrpKNyZP2tnF4cXzimmjrYT5vqT5WM6BsZ9Bvv7nUNjqeGZqS4rQ1",
  "key22": "kVdf6LaxLaRbmNZN1qmVvuPF1qu5Drw8Yqyp1DB7BnBNjtBxAatLNu8xf5SkcDfZjPRsVYgEZFXjzzHzsxhbd4D",
  "key23": "2mWBDYMBCHwtxFDnjr3PbcWEiBwuG2fkfwKazcdkLhrq3EeogFrASR7wvvpLPToTcL5jeRrW6GZ82kLkEPqruZMS",
  "key24": "2j24gQEkHoXiL799gc2wAxcCmBASiSG1Q65JAW4DtCkAWUvcVNbdjwmgvUv39N3f3GYuenR1HpCi8NHEJPxP3iM1",
  "key25": "4eRtdXDYqRKua7gAjEravb5f67w2pycxr4EprpMkX4PeveXZC8JGsw8CXcaax1n3wjSaoy6MaxE3oajD6iEb5g8a",
  "key26": "5aUsHVvLPhdvP8V3V4rg5x9UvMD2w6xh4C4ahS2TWS3XQUzPYwkshDx2FJxLhcUW8ndtLntr1DDtqD9BtPrRoMKc",
  "key27": "5Y2zCHMTT8xQStRQcMGWVngauvNfUFa5wFNMcsZYfxkNdeyqMAxhTbq7sK3MwNSRdqsAncLaJ7MrqEZYDvaCUeKN",
  "key28": "4ScrSVKkNhUhg8CGdtqgMhhQTzmMiBnvaXAaVndxhGq1GTLoq9oC4aES7ttNiYtvtfGHy345oMqsicZC48F4TMgh"
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
