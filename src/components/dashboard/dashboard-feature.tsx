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
    "4a6A25uhG3uGechL9d5vP4UiixFvJ9LoH47HXTSoQTd6ZCqp51pX2Pv9Gm3CzgVKFsKvWQ4fqo5vGjzDyUfGLuzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pxwUN3wZvfGSPjCszT2o9GyfsE9esX1HbgS9gECcJ23P1JSQgyhmxgN7dUF4xVWGgpfoxc9Faho2vut5Jg5AZUr",
  "key1": "XEhpFUSiGGo3d3f1CoXmQSirpu5bFtmJ5nqBqWpikxSpWbS185osAkmZSfy3DHQCusnhrH2Pzx2JcF3W6uynK5p",
  "key2": "2Lx7XJra1HskaypDeUAYu1k4MxEB1T79HajrreMKJQB2RZcaiPzknUP2zZEQnprDFGeCmNVeXqh7X7TpBMhm73NX",
  "key3": "3N3dQcdFv1uBsNQY7xSxzFeZbPEEdt8MYyS8CosFa24xDCHT2mN8gY2siqoKiqibGzS6vkShegokLRxJoeJ5tLAC",
  "key4": "2B99k1owZAB6CxvXVDEcRfdjA27sH9rZ2pLjoezq3iLqZM5LCybKby5syXbKVnfrTRJteLRnVUTAxjt4B2KYoV9L",
  "key5": "4HC8Rb1gaYMX5ooksEk17YwDFbec1KHctLL9mcPc8gxAVSXyYtWKFQUB8nJwMDWZ6JKr3fmKx5i8vRjGZPordLmA",
  "key6": "45zuWgYzqHhWEuWgPpzMALv5TazfznHSfh9TNevgDxuFGzUgZYV9Y11bDSic46FPw8XEXGxvy4VN7GKXKo2QWCBh",
  "key7": "2EkWXBcRkLUStz6rMj5cdmaF56ynLYcB4TEqjNWJLr357B6NwoE45ngbXnXonV43A6VLAU8Wb2ELQrGVZG6Ds3fF",
  "key8": "JG7HrLV2NGwNAR6Jja2m2uPKJBKoTq7DRDfTSoK7Lc2Kss2N1kjQFaZKEkJiXAU6JK6FeGhhXATSCZyYTCD37n4",
  "key9": "4oX2q3HaQdD2u5WKD9sjFZ3vatJYJ6MUDaR7Y4SpRi2Zt2VHabj1U3yGbJfr89QEfsp3MVU38KcZGfZi5w1QtAwL",
  "key10": "5D4DegzYSW1MSmdTNAoFmgBTezN6v6nSYpU4UAYXuXhgkUxiBuYpTEYdrg1gbrWR4Bwmv4Z6aagWbhPWdFfC6Ycd",
  "key11": "3UQ7S1qp28dbYfg4J2zuQFjvGaPL6Bd33c1iTfjUQyXzf2doBWW3tGjbe9N6Yzac8uaF89dFNoKypntXp2HHfQTC",
  "key12": "yjdGGjWU9s1nEsNPGZbjxeRbRPHCmjocYMzpCgFd3Xw5xZsnunn3S1ExByrNKYqQBD1mgYwcCP7PwPCwnFNzTjE",
  "key13": "3dkGWAerABuLw99gGL1cnA2aYt3xBuddjucfisZ76XSwG3jAtDvzBHGMXPCjnygYicBuDMtbGVHWn52e87AftPgN",
  "key14": "5fyqkJzkDzwH1LVpxeHnjMAbLtTzPGj7eLw6W1KRLTwcyXrgseTidaFtCFwSJfkjkfu3yn3ubFBfpBPNXbWEmcL8",
  "key15": "4ZqAeeyFACB2wFCeuqtmbpSE2m1BTGm6krnAVwQmJjqEVGd8Fu3hmQU2K1Tdy3QvYuczMoJVAtk39ik7cWb8rzBz",
  "key16": "BXXk4oGqbqNEMfyiZ1HL22Dq5QHeVwvuWKkhnhDukYKP9SUJMjArCPZxFz8wtLrQEfnN2gGCqw1bAnWrWZjoqoN",
  "key17": "3ouWnL42dbAj7s4xJKrAUzY9NMWGS2amtg7gjN6mfvrivhZQVfP41rBp8mhrvi5kzuED51ywDYnYp3JLKmB2Hzgd",
  "key18": "5cRGwo6QEmsVptuVS9g8LTU2pq5AHoSgjt3fbw85PnrL917oLpndFCkXiwwrqDq5PEfhGKYoaMeMXsgzPXAoxhhn",
  "key19": "2izvFUtAncMatEzAvSgeqcJKkZ4LVUziTYjU6fYzB7xiuu4Z8FfXmniEMvVZ29AzjUVy5o9abTJ1dKW7oztdyask",
  "key20": "5Qjs9oYbhmXd5X5962D7kfPrhunrSrJAdpZYL1zDVpUsLvaUKMyxkmEetQncXusHvMvHcW4GN2Lh6p4debDK127E",
  "key21": "ZJBdwQ3Ua5hyosGqLg3hB3j4587cMxBASenMArxFcqFijwFu5aey1MHzit6fsBkwPj9vLTSdCvtuiQA4XaXH97u",
  "key22": "5DJ7JvZmK8iGcD9DH9TjNTi1cHynQsvbuovKeL4TkYEE4dDAXoNS7GQcb5ZmDxDhCKBeN6GJ3NeJvu7gJvdWjzGV",
  "key23": "3gAaKwthuMtkF9iEp65ng1Cc4TQoEeJ5tRZa4aq5BzNh5ihEbG8TMY2s97EwTXvWadtHjAWxR2rMAm3aW5hYD3nm",
  "key24": "33fbcTFseG22fsLXBZCTJyrjFg28pPTCzF6WqWVmfZwzURC6xZ9e67x1DPQCmTL5agt9qWZrmCTDWSZtVQgzb8Eg",
  "key25": "2jn6Rr1LtKtsqJD8n4zkwWr9wVyaHwi5aLDQSopLwnotMKCXYBUjs35YxKLwJ2gFz1oLsmmbcPiPdhASJzaF26SU",
  "key26": "3nbyK2JBycRoMvvoV4pnwE7Qt4YC63r6Kw1gUnrR2t23psyCckrvmaB2FSH49AgL3vjpXConGvFn3S9e9cD2hji2",
  "key27": "4NDX6rx3nkAVCYHPjoECt6M6FT44whoT5jdT437vFtqfQqmkaytYxH4FXaeguvL3QBmZ8v13zaETpGCPUS1VmLFR",
  "key28": "3XuJCaxMA1h1Y8q7x79KfjJgaG7pzDBqQXi3WC5ibu6JuiCAtZoRtSDEJsMHbasTZtcNKS4Le96nE4Bs5oofjSpi",
  "key29": "4mrn99jihvzo1Qjov5teYhB3xREyRqeVc3RNSEXULkqvzH1pSd3FgS6RHmvtHtUXezBgbPjESDYjDovSu3X9gM7Q",
  "key30": "3vqBJuG8KWXLBN9fYGGycNmRJPnCvFuhwrr38PqMQuPNZdgFNULqqKfpUhFxZPXz2zR2A9NM2v5pQQMXMaze2Y6m",
  "key31": "2PS3BdhUeNEJwo1s1ZzbdcJjg8CQJ4yUofuEXTfF4CoMajAEqrbfG8NR15hyhHNGNSkn6hjA6s9dDR3CJsR84Vyw",
  "key32": "wV7RvugumjzAtVQe3PSLQiJrU5yhnm9Mcsrs8RJ32caRXigLGKCZJKZ92R8BY4B9p1KXMVHpZyv8i55Mrefntsq",
  "key33": "3i2Di8wLKPcvXaYRBehYMXSeTXYjZaDsrLNrvYUR6echxvGQBAKH7xBPD2C9wJ3eVaDGrLTb7ZfHLjwMGKDp3R9n",
  "key34": "4xkWCRKBudn4vYzeKF6UmfazdLp6eF8jNewd9HA7KWokmYiNn7ZR3m3CE6qJyfqE5WDaCTE14v4QWxvft5phV1uw",
  "key35": "53D3qZAMHoBDSZthqH72WLBQZqdkU2h45wSNdTpJYfvRL9GDscj9WvnnPTf3fuvcwh4ieAQfcRYECeydZFm44e3i",
  "key36": "4yXRNi5XJkCzTxj7qnViiYARfJwGhiaFjaSSVydPSsHUmRPMcd5wSKzbYPostYgRmhqaAh7y9WXpMNMwdodfuBuN"
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
