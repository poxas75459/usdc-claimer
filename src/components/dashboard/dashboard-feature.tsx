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
    "33TXpMd1ipr8zBZ5qBGGXCiuJzA676zQtV1hcni3BFotmstbJUgoc28zqkC8Q4YCMGHQ24uRQSBzJ6Kn5LXnMnyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZnBjyp7TL1w1NZWM2HSjWgzFsLAeS86nsjjUrv7RyQxnDQqeiq6B3NsdHeh9dShbjZdwEHtBCLmRSEy1fEUpsM",
  "key1": "4QktmLEpyUhWb5sQJ7ySnzLHaHa6kay1h2mpjfQ6HpsxpDTLg1dbUvMxEEVimzxq5ZJ6vzRNCHyRU3cNKrAkBtGB",
  "key2": "5oFLfYewH3D9D3TveqBfLpa3TXbr56vYsPiYDmYwWbUViN1PGQWyaFwH5HDHXX4uqHWGGxUCHqV79L5LfGFdwrbm",
  "key3": "2mDYnHJ6mbaWiWZJrrukLSZf8txUwH3SZPoNwavYhLjUG9qmKSdj2oiQbrV7r5pdVXWqSyTczi2UmkUAKPyMcE51",
  "key4": "5kmeJ9Gb4ctGhWUNQJW6ZmYmCSxhKWEpiJ7uaS2EjF2djC3J5s97Tt7U5LM8ZUBquEPrav9MfZeeGRdwQkLJpeqT",
  "key5": "4C8ktYTCLBFcsTTCfS2LdEYzeX8ieWtJeLFSXdgKux8QgwjxFSR94kz4ChY3qw42BbYax894kcW3BUBgPFFnTeKC",
  "key6": "4inx1w37cP7NikE3WNcLZvtq2AUgmwfJJT7v65gEacYyvjqKnX28czmi7YXwxfvi4mcUxjBHZLZDtiT37ygG3R89",
  "key7": "4B6Xmc8DWyU4mXPFLZwpQRkPepvYcUBrGgArHG19GXnQTcuUTFDDHxUMWwCPG5ftL9J5CmGUDyTJTHsTZoUPVcDH",
  "key8": "2tVqXCfsTSprJu5Jv4mB7jv7pDuEyUZHyNetHJpCjYiD96r2beU1ibz1nC2arhQZLuLARiLn5QNsLwrEXr5yvhXc",
  "key9": "5bDxpdfmo8dVjFmEuhRzzfAAXahc9bcAH4Yo3eS2M6DaMRRSbHUeUnrrx38TYxvgusdMxNkiHEfJ3KsxZKANU1sc",
  "key10": "5YDvDJXWZKPyfKAKaCss2wymXTZcWr2EkDNAjWVsux47aSkAgUrivwVgdWm62TxJSiG8VEBvDqcFUrSJbkmKUZS7",
  "key11": "65nqUq7yDcXGF99wtNGfo9LAh6rM54aNCTwUNuYpJCLZnbbUwvajGMrY3LaXVNMxsuNVKmES6iDZMhLtv4SLErS2",
  "key12": "5LBK9byGSiFXTofh1oa7bZ7v86VSqbm3b7PHPeU29Z4BfkL6SzpvdnqY79fjs17Gw8Ur1BCYMR6kwRrx2N3S3K5x",
  "key13": "3GkxMfhcLAqEK6RYTppvyC2zWnY4wPWcCgqrzXTonZQq6w4B1e8s7x768Bxd5gRpsycty94doGByYxAczDSxvwKb",
  "key14": "3rwdjeCjFncqP1Se4xfag7EGd6RoE4JFfBruTuezb42kCWGpMvUHeGvCgWviPFW5DmSBBp5j3PRt22fhNTK9rSG4",
  "key15": "2oGZF46PnrcXsyhAxTws6S8zX7kHQzb25KMtAWr3gWZfywaBJUaBYBQdAJiZDDuQw9qxEBuaUuXYkkXDzezn6iBh",
  "key16": "X5PBBwbXHVaLmrxnJhgYcXH5hxgRfCrN9tXpcc6cnAj15F8tCbudqye9pQDg6mYffA7cmJTV9SRjyAypyTVFfeG",
  "key17": "26A6W7tMYtEzR9Ksi5FHfoGwok6TC6SaR6L6kXsKSy7tUnbEjgZe4MY3yYhYxeYSuCqZHAFag2WFtXnsuLa9KbLx",
  "key18": "5B81o1QhY9VBi7V9hHc8JLad7yh8Nui18Mauj1JCYDJPYuuE3jtBRCoD8xdiN3YRGutdYD8WaTMFESbvYF89NAqn",
  "key19": "27KVR18mFV6f1kC4EmyUBDD9jYu9BdPd1uGo5LbDW8chsRgm7h8rpFoNJrqMd7ujyYXz1cwDR2MCCDsk5RPJwqA5",
  "key20": "DQprsxpPzbYc5P7JkeFV21m5Skmb9UWRX7nVYe5Ey7FpXwQKQ5FA4wyd2sHXTdR3sXh9GYRKn14bxvPLf7k4ToM",
  "key21": "5BEWdKrYXiTACXxbuhWrWjMEpYT3YDEoUmtkaYRsH1sGYxjtgFeAz25SDGYnr6uByS3osHi8Kcd13QJhaGxyCJe6",
  "key22": "nar3qbCeWhvnbXXWvSUB7h2epzYUEJpunhA4fr3QVmU9NJV1kSfkxGgZhEJtcEtydZmrYLRfVULcDSWzSzrkpyZ",
  "key23": "5WrwcpgbJEAALEcsQE9r3Grn8VN9fRGcMfXYygZ1k22r2iChUGr7ixsnP13NsPh78gUE2VNQfpNXNDM3jrdee5mi",
  "key24": "5MvhBD66SFjyRXRv68AJUbnX7QQWN5eifTTxHN4wLk5NyJxy6LaYsJ1X5VFmWcRz7e8b71rqeW5DNtChuUU9SGn5",
  "key25": "4btiimg6cuMe8uYnmbus25WXx7qg9UEHVcSYfmk2HDV1ETYhf5kksThY8qDrwL3qB7ZiwvVtqKyYqwoLDKYQ4dtx",
  "key26": "5g9QvY8ypMbxMTAKDasrdNkenZ9DbAPLASbqb658qafjXXsECfA5eMi7YM4K8AZbZovJjFuMN76cddwVpmGMuS8S",
  "key27": "5CMra99WzcJUxCvPNqFXG5HN9DCyH3E5r54nEqxHHMjiikKrHbATiviRWkZaTvXoU98ECBEVSMuLwrk3xX7LNSYb",
  "key28": "vsfsjyokJS9TFfHbTLBW4NyH272sym3GLjsNjbRkaXJC8p4syepipjCWMvEwVV1QGcjMbVwTER8VcAvm8T5NNvU",
  "key29": "3qqQHJCSMgkcxqQPKSBGKkGig18KtfDdLj74CKNqtkyqcCnN4V8Pu8YL1pXDvQXuEmbwJoCihVYvwTExyuyeWurp",
  "key30": "27kwPLWyN45PZvoncgiXrrrKfBLYkc7tHkeJAXcwZKZypCVQoaNMYkVXuaATEJo1AnLqT8WyjLd7ipnPgn8u4SiT",
  "key31": "dmnw2Y2e3ZyW8wiQLrMGKyUBqfwiLZQEXerfZBhYK1RFgBkcpDjiTXLgmUFwzgPC56Goo1VYA3DfiprMaHiYGHX",
  "key32": "3XbpsjwuLF1jaieSgCdea845LHa61RbDPCnn6zJwexaPZjzZCusqJPfC7ak6Us2CXuXGhbJVhrYxncDB7qKRa9Hr",
  "key33": "ttin9HgVUFkc3M8zgN1pjBHFme4zjSnxAgWujPv1cTZAxRS4utrrY9k2redmsytxaF9U6HpGVt7Mh5XnsSpoeBr",
  "key34": "4mruY1tpev5PUecdEHqHAGGCXZ6yDj8mifhuuMUDpuFPcxcCwrFk6ne9PvmPb8gTeTQv4ijmS4vWZNZtmcrYGd9A",
  "key35": "5ifZuLsQTy4wMTEXgmEEif4cxdADqxxkQareK5jh2oUeD7EsaTtmkUs6ByqGHMesWJBTM4GaYAnwqG5pxtfFnpY4"
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
