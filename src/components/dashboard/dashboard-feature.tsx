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
    "Pi5q2PFkduUvVZZ7voJCtvkagDT9gQz6izHT4Fe5v3ZDXheGSAArVTU1Cq7tJXSnK123NvNgDX4u23DNBPCKjnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jucexnP3yzU4nLo2XFgss7hqSBYnnxteyVcRNqsasonNrhxEZwMi9n6qfGu8CDQkPFaezbmtwCWQdokyd5HQ6z2",
  "key1": "2meTuAkRnbXofTNcHvAz9h7uV6k74XhUdHfJf2yQhx66hhVcpiSZxjaRf6FEMFkqBExv8hVKSCP6Vsskx931T6fQ",
  "key2": "3eCogXsCsCwFwBwGtYncynAG4rhARwLP1x1niPvJkRbSTqruga5z8aX2aW9Eih9NJXxs129iSNVJpzbJgtw3iZCQ",
  "key3": "2QEhF2ANBPmq3oPq8gRYDP5a7uzSG1LjSZCKxF6m8FjdJvfFo2UDvFpZV24rRxL9EdGmJVP1iJgyUV2zBBrqoDLH",
  "key4": "4rBCWZ36hSx6XhvYiSAB5ud59tcJcSnkDkiMDYhAprAeFKeNPyXBKdQcERTpNyMQgxxmwDWtYnxyXAZmjLausCpM",
  "key5": "5xd9PMcte66YTcKnXsKZVoTfd9viTnUtptFKWGZnAbxNhW9KpLCwa9j5eD1TD2qfz2nGPkfbLvKo6Q9teo2vid5u",
  "key6": "3z9uvGSnT82wcbPfDUrotxiGbG7Z7tNvCTvwTfCdgCA6zuy8JHtyAmBAV4595YgCP6XjQkhfXdK4k1KniiRBfKxy",
  "key7": "3kcBu2Y4GR6HeFfSwSRQo7pMCok7M5S6scaL3hYy1FvyLHy7EGpjdzSdwSLJC9LEPhUPset3Ba6FfahoM38vSSZU",
  "key8": "a3sokTLhiAsdWF7KqYtHuYwN6YCafFuVmCHwg9GorRnYpDRHyMxwT3B9qzAwYaZNYcJ8NXB43mwhCAcDtDp5otp",
  "key9": "5QWxDniKNeGA1gDCtCbREjpBCxQRbTK929bM3Le7FGXnQ4B6SXMT2qdEfkiLzn4eFFype9rfZoHfEoFxm4MJ47ci",
  "key10": "3jbVFy7wLXXsk5CaS7aJUqYbLhjBVprdMBuWhQuDaCijtjUBjKn3y7wC5XoLh4FG9FK3BXF6VzZi4iwZrMYa1Mjr",
  "key11": "43CZVJwhbTkvnkfSW8YFLVaDF6yQx27njRLb9w9oD3FxFxa22gk7gCDf7atqQciFbjRx4BLrmBNjgGKVeQu3L6cw",
  "key12": "2LrfNFbKvX2az9f22i9KWypUMxbF1CLhtFe8SQDjG2jJGnvHbhb6fUTT6frbG9iiVi6usCv1ijscfdC35FyXnidF",
  "key13": "R4npvjNMP6i4PSvSYkkpTMgQorrXYEmkKfuYAJYoTeSubKuaJcFkNMu34TyStoUk5ap17eeCVKEWFYzeror2fum",
  "key14": "3q9VmNUxKgBTm9dnDLwNSXtJMFuv7NQFGSrHSkdyBEiKLRaDJGJDzexYMykt97AqeqLzzBzXMCpdevkAbwAybiGG",
  "key15": "2HJZG2VKQkRCGBSE8sChAoAo5TjN95XQ5WZWXg6YQMjHPWco2WiiJbKDNjw8D73hjnDGZjGAa7xMCHAAaN2AHTbZ",
  "key16": "58hD9i8qWYRiBJqAf4zYsgca5LyReSedtynMbnzUpPZ9BNM1vEiB88jp9YSPyhqpnAekzQoz73yu25mHjSXKGV9Z",
  "key17": "333JWJcwfAHgAUtKn3pZt47tLjYkAFSLzku7LAAQtYjtJgeqarxcamChCsB79Ay2QwDtjbJR73ab6jrcnWE8jE6",
  "key18": "4icfCYbuUQjeAZwGem9zQCS7tjQaNbZQ4XSNd3MtJZx4LZCZZwZJjaiN9ZTDjRrknwGFXMd9xJJ7x8wXRcNNoHKP",
  "key19": "4TZkJ3CbAKesnJHs8SBQ3Mq6nqEMFj1sY9HmNwocfAEpQD1TT7pEH2MS49q9GtBoquCDoVCaa2TrHMQCXWLUJQ3E",
  "key20": "3yM3hnUk9JQNE5iB96aK1WCyBke4FBBBdvWSxHDg7Gv9U6BP1nDMGsoUmsZ2De697FBs1CqiSoYQTmxBmgPPbrp8",
  "key21": "JQo5LVd5DqT1GP5xzbHy4f2o3AxxYKcLJybnEZ1gC65reNDoGhJS9YwK8fsaSRkThGy22iiSbuk5GpZYE9hLrTq",
  "key22": "3n6U2kyzLwLZNHoLgQUixyP7toZzrzmJjjQxdb9rGgyqFdXZFfirVb1vQXW3X8jkhCc2mKdAdMUuei2VXEXWcP7F",
  "key23": "2nQhfQjB8YaVc6np6z9oaNRvr8w9HZVhqKbbDJeRv8LQt31erBTumhrtzSuKaokiXahUv3gBozgPBm1kzuDhnSx2",
  "key24": "5niesUTMMzzf7f4aLZeiFQZWgcXGDrM5m2LQAbEMExEv8dDvSXMsMGx4Jz4rsVtwookQzy4Uj6Jeos1pWqTixYmr"
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
