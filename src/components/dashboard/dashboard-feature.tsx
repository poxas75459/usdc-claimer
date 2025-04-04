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
    "2MgVkHPgRMbtCzKS9wEe4HfScNmu56a9etAn37ecuDaFMSCbR2uJWQsw5d1j9MSLQXQ9Fezk1YT9uQDcqzm9rkgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CA3axXUbwbZtXm4rwAB9b4QYszA3QVijQiMVWrpfb13CcXTvL64g8V44iXsYWyGzLaY5B9dYjvY812HsbXdX9iG",
  "key1": "67SUdv2M2LU3QuyNTVZHVmw9wDY9z7LnqZLdBQRv8xqXTwX994wcwuZXt6F7rJFLowbKnEK2hS6CJKSMZzZCPsgH",
  "key2": "36AT5QDWABzXx9KAA9Vot8MWtw1xKb533pXvBCMi5KLbhbDNyvGveqHxQMoB33vh4vy6sFwMbx1UzwNV1SVZeYhL",
  "key3": "5zpXVHA4wmChDCDLcbiZkdADaVjYaiqVXz1GP6txkTC3JqcveorJTJgLQeVFrM3RxPJxi7L5FWenKU13FqYaWYFR",
  "key4": "62aa7xYk5wWsECYjDUhWmdQsKzCKpix9GKL43Tt9EMCeB5XZHKRyZooPYgcVjqRyyRBHaUpxUho2TucA8FyP35ba",
  "key5": "3rAR4D7RsfY5FcrGdpM16iHxTe9hGYekajn7AdXUe7SK936SSieR6fBWUNS8ZTGpP67X2AhX581de93yNwZn2ipB",
  "key6": "27KPaHGRDXAHe9L4zU64qMekE2kigzNGqcPFrRa7esKd1gMxxnoRMfujLbLDJHxkpnoF5yinVsHqFSiVS6THSyRQ",
  "key7": "5MWncKwxn4Js5N7WSdvTmHgLs4LVUoPWuA7UVe5wNdUY3DLwYJoorbWycuCXTDYPGK2EpKW5xz2WT7Po8HwfvzWX",
  "key8": "22TkiV4EBXKDoXL9zYJwb8xyrpR5kRZXKqnnQ51WDg4NwPfTGpgAWWWDbSbLF6uVN95GJCbkD4ydtJMkeh38gxib",
  "key9": "KmZXx77gvNBqa1Pism7Qx9yys4JVX2tz1R7k3bGXN7J6ggeY4jT3AWXb9QVPtG8aa1W2hpryEWhEfBfU8oiBkWV",
  "key10": "2H3aGmAkiVvzTYji5Ec5rRUb7V32ykNzEzQVzMHzQoAujBgzXDMVBwvq6hbM2VUVPCt9Th2PceaX5Hc29ZZfPp3c",
  "key11": "3FEc4K3HAhLujeNP1jgvbRiE1nRWCziYQ3xqoJ3vxhvLHpact4Fvq8GLjXKbiF4dwojVhmarsUGn4kxikKorKazL",
  "key12": "2aF3Zn33pqaaQu2PQThnLBzjkxv7eKox4jvDtNuoD7McVrRAwE5T4eLjXen1bqJM4VVaaVdMRt3mFumTXWpjS1Eu",
  "key13": "5cXwUZge2J8BogAH4Gq9HLkB6GzH6NcasTDjsNtFPBT9FjyrdhtpEYXBUsnaUueJVi6i5K2qVD2qLcurKhauPE8R",
  "key14": "5zh4u1e6n2fVqh8DM3LXwMtBeRMXTtD5wMdQtgwbosXjAhY3jJDB1jp3Bm8xyWkMFwHH3nu9t2gcv5nQD23VRuAV",
  "key15": "5Sme5pagnur1qrWP914q2UMFUrmvZ6fWXHpUKDi59Zp7f8mYCYpgF6sKs1zt7Pybtsd9ABQYFN2LHdiJGwzKm6T",
  "key16": "4qJNwqmoDDDDqqHPxbquyi2gSmJf87wXx3ht2vpkuVQk9VhSr18Tp1sh1krSHvXp6NDjKPLEEp3D645TUcWzaig1",
  "key17": "5Hmri2XBqxec2kn8snREtS68Gotj5Ypt27MEBMbQd6rH57aYxPTa3vMBKvR3MHF2CYcMUHu8wPmhNFfayYkkfz6g",
  "key18": "5L4SZbpDsHpH7SK5NJSaQRyPHEWt5qjnqCn8qUdVJ2FX9GHFn499ZZfV2vSYGFRXyHhs2uuGawJQjprivouvRDL1",
  "key19": "2iZwx1fC4qUw3tvZ2KNGwUpznDQL3TWQRrQ6uJgmWLRXky58dugMVmzpcZqYmdXuSayBofaH7mq4rtkydLtLvYwh",
  "key20": "4uDrm6nMFVdZwEVGbu9jDZ2GBMT6sEZrZG8MCGCxzSwnQY8T3c6QFy4gBZgDSshYBUjdUSYi1LDrnR1eqLVEz4uc",
  "key21": "3o5uwnHfzNecRPA2hkTxrLWQJVpTAQHkq2MzbfjYSVVWHyJcENWAUVg8BNuHqShsakH7MfZFc29eovnV2LH8bSoi",
  "key22": "5GtsE5DdoDHDP6wP4PuUNYYkemnfRRt7JYxjbDHDgiNmtzXaPkQ71rND43PzswkkCrMAyePeQ4eKFKbgKxf6LshD",
  "key23": "rQ3opKTVj2rjg7bv1Wfu8o7HqcDKvFE2kHeadnaSthLF28GYJPF6eW81jMAYXjLyPUmDYpBiB3nZ58gpV4qxPnt",
  "key24": "3a96SvjaB25DEWiy8xdF4R2mcv8DCgmjadbUi769tR2SjxWsAwzHDqiEWXGFMxY1djE5fEH9jdXxJrzk74uugkua",
  "key25": "TVmpH7rWAbEWXLsn2xxrsp8nNp76Q3nKMUdrYGZEj4NDZ2rhAZz2MUU4Qw2z2hiK5EsQnU1pFpaD981QFjzRm5m",
  "key26": "54Ztw5naosGLNKoF4GpQZJxajY4G5LQw8UMKUwxtiacj72pY2sodseE5LTizA2NqWRY51VLcmin6NqJTCSjtTdX3",
  "key27": "34CDj1RDWKKLacqPdxnMEesgSk5MnAk5uZjQf7PUwu6YVAKwBJXZ8eHAk73f98UXEaWCJrtVDBRFECj5hN1WiHJb",
  "key28": "gcjhHBwA9CaHgi58anjYQo5THCa5u27iq1kdf8vNJ2VvdoQtmVeExC5HJhG3M9s72KZpACPGNEydC4vjxDZfANC",
  "key29": "Mb3VfdaqbPDCt9DpsYh76VtdNHb3MjWvzLVW2H7pxprNK9Gezft6WugRRrFJ3qbUtY72Lvpk1FTrjxNmFK6Tnn8",
  "key30": "65wJQ5c8EyA2Eh3HRwY4KssPXfkftxJ7wRpxReZbRfYnJdYVHDWqbbEc95YPzPNnyDXubqKgcKxHumEop4t8jnpZ",
  "key31": "3iiekEa89KWE6rjj2mNabyoi2BCDpo9FanuqhuACjQNedvUpc2rhH8tqzZi9PE43qDAHix8LVb4d5rSL5EcdjPyr"
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
