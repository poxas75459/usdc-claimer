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
    "ru5By8Sworf3Ch9niGss3pdXhMZDhyeiAcKWe1PDAkvWScF8HrqkVfidhtoxdxkokGY1NrWrofSjbEXohSSSib1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4snaLijNZqrW1N4yoG5gr8cFTqBwtFLs7wba66a8vAt9GX3UAq4rju6crt6kYiMsg1t71jPeySMQEmuQFBYqJKCT",
  "key1": "34GhBLu1V4RQtrMaYV9VAks7c7BzUr2Qncj74kegspzuCztiKuzKY2zuHEryrpJkDnY82KrhVSNHfgKJzTK1XJcC",
  "key2": "2ekFF6yM4QGLXZ5ejfLvrG5CZkAieseRguR85GtUpMbL6T6m4LWdvJpvnCkHTD9dGvdjv3G5R8MnigwLkE368prB",
  "key3": "349868SDrvgq5WnoCTGi3FnzJYUjUusiyNqBuVCoTr75EvNhN71wqrC3P7TSuMojwPRUGn4nwsMSbxpFEBwNf74d",
  "key4": "59XEpgxJeURhPi1WRdi5WGcXp1Kfmu9eCDUJY1vz5BEwb5XHLFqCZEqS7udpSiSaaAU7z4SZZJAKXKaM6g5Fp7sC",
  "key5": "4wSV9GeEN2RqkjMdEMxkiDVV6r1QCMEDeVFaRNBmLT4KNiH7pLGnD5z6nYukk7g8X6JA3d82tMgNo6n2Ez5kEhZv",
  "key6": "5GKX9BvfmnVUwBaZnWd3EZRgrkq7hA3ZwYNPNs83AregvvwbkSV5WdXpxwFi6UnDnF8CtFPG2nGXcsoEmAUsWC3U",
  "key7": "22y2s22jMgQkPGV99X8sNMFWDbHrzJqstXfdtNS8wg25SamM3Q7YbTMKmCv4LPWKLEzacTD9Rspbr83JvQydsmR4",
  "key8": "5pKx7745imuepHya7w19Q8f8V7TD5EkJ7Feqn2c66XbePqBMaUX3G589X9v3xbxXHKLSQjrHFxmQ14eFhAR2mhsp",
  "key9": "M9ySB8ebYWR3E7hFdwaE4HoQYMJ2xqgLvXNE7MXwjq15s2r4dbHvtTLd9qyqtQFyxbKQ3Q25W8F8gqpZKpsH7ce",
  "key10": "4fLcNgx1jKGeSSPAcgNYKNRHQ74f7TdjTY5J3KCFMio5juM5RfqGNKUQGLL6Ph221pUA1moq7JhrvZYaDwUA2qwm",
  "key11": "US3KH1swMyniPAfRYnj2fRWuRtZkrq3buVjXR6QKfUmj362e4RtYuisAoEq7dcXAx36n9rkyLtrNVGd83qHSDUb",
  "key12": "tcLudjsdRurjVFcnxduqKQsS6UgphGGWFaoMi8Ktzvj8En56RdYYLgahXn4HkZ2KBU1M4CFBQ3c2itKLD6oFGWN",
  "key13": "4rKHLxcHBS4a1jfubq6AU6xw5fScEbvvM7CUDj1fKXjzRuXK4mD8EhRjPWJ3mMd3esQswnobf5gb7wttb5LoqycD",
  "key14": "5m1xiVURk8CE9bPZuXdmXWhiQoadMGq8idx6XjPLS7DK3FffsVqENtowG2xBiU2Pgf2MzEhDwjWc9GWNRq4QJZv4",
  "key15": "4amZC661CBgMHw8Y5M4jQgPzk7bbvPaqKcbvLiKXzKgoLh6dv1JtXzVVjsKpGLXSoZj1hUtgUBrHU9PkngmwT7Bv",
  "key16": "5y1vE3pDX3HkBE7rkqEDV9An4W1UVxbtwvcGeDTYtic1AaBpkipxF9Z2qTbKH8trmFGpQVMri4Sy1KoiAyHo5NnH",
  "key17": "4w7DBjBTmcejq6PGkHcowjvCvSNTPmC94ZVjYcoBnf51pwpga9iog1wky719sXas4B5yLiRLdaHNVn8LJuCsYUgQ",
  "key18": "34Mp8yEgmBZzKsZjca4mG5S7LM59KDqNVACjWkybLZQSHztMygr2FDVZVrPhR3romz3fLxiy95WhcJz5d5XQjsK",
  "key19": "6vSK9QxYmQW2TTDRZoGihFo5Wn8iFWZUibecyNBYFBaZd3SEwaus88cP2pnJW4tCpskPFSmA4mVFKNz9KVHvkNz",
  "key20": "5mYYo5G4FeQ9dzP88nwrCJQDRW4xf9ciQtvz4iKopNvVGRQf5YV2y6rFXwWbomKcLAYB722PMQxWJbMkPkyVNm7s",
  "key21": "3SfUNaA3tKZ8iMTeiSiEa7jJskJHf5mdCU7fAj6Wi7rGwevus1dRNQNv1LFmd5sby6xPNVjfkxLPNnBNBX9bvrdB",
  "key22": "4RX3bDytXg4ed8YunEQV8q3DZYT8RTEvUmbrkD4ZZJfATkjZUMEq1QwkZfTAi845YL8ir6cEtf1ehPMSC9Qxm9r3",
  "key23": "2rTBLMRyjzvXedvuXZvdk9aZsV5qTWL24aarcsyA8c37DB1XpRFMBHLHRrKGwYS4Ctu5aFX5CTrGxEkuxXUMNDAD",
  "key24": "3qSm1AG2tM26rrVm4Ada9k2yS1xCvnLPk53dnvafVfaBcesrDzig4zBt5DDT7r1HxXEacxrtxFgJUuQmm1J8A8Qg",
  "key25": "mH7hUCGLyyR8CC7JCijURqQxiiHZRWNiRcDbKKcgqVCKDX7eMNfLq37snevzqzg47TawTbkJ3pYjLjcNEZyfWmD",
  "key26": "4NM4VwgYUngVwAaCe4dD8b6TG7oGrR4YZWbnD1YL6B3jMv5oVY48U9wiyyws7BAFqtnWqckQJYB9wVLnMsRfyMVX",
  "key27": "2w5NhMnLCPvWCUd2WRGpVM7AY75rNrjhRroaMkxG8cFbPYNt9SvrCeCsGKqiUew9wwxPmTJJkvyADLtnbfGSAipY",
  "key28": "2sUjz1KYXxwEUhhjA4ZYgp2d3c4s9JyxTX7gi7bMzmyW3AvbvetmQt3twWVXueg3vas7teZY83uGQxz29h7zYRdL",
  "key29": "3UEYMp6XGwPKB5EtL3keJP9CEEscoPSMrG6URa6rJDegDnteeENVbzfuCeW4nBwJdmxpjv3PftCZC7UX2DbT2NrU",
  "key30": "4PJ7PYiWXMjgWVH43FEE3ctVYAh1vxhxCLfM9UQkFjeCsoHcHsEZvoCxzBS6dGSUNs92CQvkmudXeMPh4HK5W1L2",
  "key31": "3m3LQjsDPkuSfAiLX67Z3P8MGhVqkSEafhxQuXTgFk24vJwsgAPsRpMHpfKSi3AzTtLkTojtYuKNeUKzkroYbMsm",
  "key32": "9NbXyMfXHySRa7mGWDeeVWsYkxq9YLBwaJHfMe2TDL4VtTCZ5iqjXDHJBYEJkX1fhMwZHYewXuCg4YbLqmVQZKA"
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
