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
    "59RJPD3VZn7CDtX9dnUppDAw8VKF3W8JzRRABHpqXhbySD16qLk2Qua8tDr8UkT4LZwSLCLwsDn9NQuxXDTp4f98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2oNhGCuFHF5DhRrAYpfz7N5iDeWr7bXoZ2tfiuh63bTrdvAynaDJPeitqeGQoDSh6FLgMYjQLtEayuSKG2f4Yd",
  "key1": "4oUv6QMwRSV17e36YCSnjBSAVU6oBdiMLUT1ZHMcg5BFUuq5vEkMgfzg298x213xL37Knq48E8i4VqJPdN7bJuDt",
  "key2": "2zu6MnRxtceXFxXaAJkMESH1BsmNwBcaRsrDp7XCnLQUvERoamUuzcQwz1HidN7GyEVGr7Tie7WkLt17cYiW3CNk",
  "key3": "4SzQfdaicZqjUgPLkf7VHusVPwhKJGXrXcAamSeFbKGxK64GTrAQJjBY2tdkvbYYx2bcAkynbF22BCHZTsx12rkf",
  "key4": "3hw6tiE142sfr3bVoPfzckfGVjgjVFutz7mVCavrhZsYEyfm2Mp51qP5HEHrVu6tQWzwjBXqrRAsPD7TCr6NQhUW",
  "key5": "5oo2xcRsEgTjKHphpdU5iHhxnhSG8ZW9kgSyGni2hv8mUDknnSUW7vYpMFZjhjnN1B1CUYjL8FuCfVJ4iiGEMakr",
  "key6": "yeSLvzdzLnhTuBd7jzrhAed7q8cGuK8CbE1k6TwZq9b5wBc3n3pJQDzUuUWoTvabCVfyNaEwjZuXW3h66FcSaS6",
  "key7": "5sDXhCy1k21Syc5ve5ThEzkgBWzn55p7K9gegpMgsCc9c7Bm528MpqaQ1dWh4wGRVzZ6fGPbe2o39rzpyipmL6Fp",
  "key8": "2kGT8rTRvuZC8QXh1uhMC6aHzER6xcWo3GnUBDa4gPVymDVbDTaV8Wmp4y97ewSANGz5brvC2fd68QQnFJbsAPeH",
  "key9": "3EjBdsdMW1j6KVvT8FcgVUrzQUR8Ur2ETh33RuF4fJKguqS5KoQwQYcoqK6gX64gXPJmVJGg9QfWaX2MFP69UFm8",
  "key10": "2azQkGHibxAM5JH5mY9Uc1UEEAMq2MP7fLKoUgHNoef2m8nRLHiE1pzwhDaDVkkdFDJY22iQpRBtTL3bp6WBd9Yh",
  "key11": "5TKj8NLmAsTnpCrLi2Bz42KWjViEXsSVfhEhsoGKDUKyWvyqXjr8tMkNqXVTj9ieudoCKABxuSi9AqHooeZBSRna",
  "key12": "2oX5C1dZLiXnFHAt7i3auc8pWHrxBcK5zVrRvjuQumvTCxNx32MHUH6YKi8f9xQrXrBVb5N3HGGvzccyr9N4vq3d",
  "key13": "5vafLCRWyVLfTwwzD7SNaTPSFmke2WjWE5RDhBVRhshd9HcphuUpnctvrRCD5aHPfBAGZj4DG7RVDGoeoetJzmTp",
  "key14": "2Z9MxAczCSr7S1rCQCQo6vaGmwKWAepNbmj2E363a6R1P23T9VikkofP6tDaddiuQxuvqtbZf3xGRogLeq44nTd5",
  "key15": "yqLJage3tnYFov9c3P56v22vB7XPhAL8ApcRzJFArg3v9AwZBdf2XVa15tn3UTUVtJ6NbB8fCTDjkkPqai41nim",
  "key16": "3jtyHajYn5Q9GeZ9xkaidzieJnnwfY9xKi3aC8FmQnBhKQb94m3RTV4eNtZ6qbed2GNg32DSn7FD211FssHRucWS",
  "key17": "UKkEQnJbf5NMaEnfP8ihj9U9nvcWEeGjqZYENgvhNabqEc5VDkWBAsiayC9rTyDrEeJxFu6HQNXHADBv3BaGkXD",
  "key18": "DM7VhNLnpVcNu5Gjfxdd8Pwwngwu6WR5Y5kYwDJny114NLh8JNrp3jEbQBurXYBCm3coJqtXGDVg5YPCQMa73en",
  "key19": "56MCFsZshismg1NG1vscExpTX3JJouJjbazJCg2q9wd2NohPCqNs418VjXGswmozsCAKKBvQ5v8moPzp5HCqNHFb",
  "key20": "48YpjfEs3u6kxMddPrggpRqmyS5KPWUJqyrr9fnED76CCvHZV3vnxhVVQmyiKN7G7vwXx8qVuFq7ZNPwptwXnsND",
  "key21": "4Ji2EYfg2QUzGYAcF1vGvRCrYm53juTfy3RG6aL2uLL51BH9VQkywss1c5PPE8iomWVX3cqJ1FYyXWg6LnVR5tk8",
  "key22": "szbtBWXXcLvLsDpp26rxL3DkZMkKssAWQcJCM2m5ppGtbZkH3iWMX5ZLZiNvuRHaMhJwhE5F9qnppSqpiBkq4r8",
  "key23": "5xncjBK29A98iqV4TpJTss3pR6DDt3kZc2f8EF2SCTPBMzt3qpNMjPfowvCkUZyg7LX6QiibGR3WusyqwKfEQRGC",
  "key24": "5Gj9xkQCzSpKHr3nqNLvgrdZK3rfoSjh6e8NrNNvhFAKgPXvznMBnnytas2fQpzv9jz7H8xePLm4ZNyRk1oe8b26",
  "key25": "2NW5Qo6Uc64jRfFdyJ88ZSGe2o2TVBGwLNGAisK4vBjYr6qyTojjqfq7racWM3ybXBmCTy4yXzjgM469Sqjwy25n",
  "key26": "5kro3exs7o4R2yf7RwY241t4vBUVEAVZTPZDigLFSEN9KY3oqXScvW6xqRdGZmMH7MGW9JCdN6TugK933XVtzXEh",
  "key27": "XrAVn2wdgf8aBxrSE5fQBV3SjfFCYrHJzWKAi7uRKKWqwxA2xsLxo5GA42ohHzXfW1adi7cywASNVX6PJxpbj82",
  "key28": "4A4hwmTYNYmCzjk9XkCu4TwLbtt77Trv9p9BuPDSFaCq6d2BfqbPkyMt8eK3QT1nfTwt73AVBy3CyqzHCvr8AfN1",
  "key29": "2jxwqcrTxfQgDFKrqeDjUaHvYa9jAm6Rpv4MYnN2uAac17SaXCuUcf6Mw25VjHwGEHBnHqTZoYLNA9mq4och7ave",
  "key30": "3m7BFWQLxKc7rZE5gzXXdreP1GZDR8emaszaTDDUxNRiQxAbe6U72trL3XDQcmqCmYggadLMiv9MFzzxmPdveJUx"
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
