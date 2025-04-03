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
    "481TWLPATXh1QtsDYSzox4QcgTcA6MsydirQdsnUQGhxgNtc6ihieda5NS2ptdCFQW1frBSs3wXx5hyxevnt5yhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DjW5XTzZG5N2C4Un25WhaqavDzyW7qY4jSsJQ3mFsKuoAfRR7edaHwybtsqp8yfGtJbMjir9FcASKkZPdRWLakT",
  "key1": "2xu9KmU4hE2bV9Tg7GPeZi4ju4ZLTZ2CJUSATNoiZADh8YMEBGB1UXh8JHxaL9VLL7zJUZP3upF8xpkocrWj7pT4",
  "key2": "5BQfc9b6Wdokm5sdsPxqiAhThjzzpFwHPXzHpVyriYBDL3pxmzs2HzXYyR9oDnP1h4b26LPbPYvA8ZySQs7rcH3g",
  "key3": "CRUFByR7DdwS2UdG3oYzosGVhFmyj1riAD32LQyoxWXwm8H1S3DGbMaVKVJzUdxN6EWz48aFsULGLCHrgz8tqot",
  "key4": "3SHCAizVhYH7yjDA5bD4XGJKV3w7h3Gjr5oLWBSg9wL5t4H2aa7je1P3FRMZL7WkGaFXJmPhGt6bhGYFKZaz3ZwB",
  "key5": "2AYvxuh8erJdnQJzTLePtYUfzpCCeNhwqxLWdRjeqFmT2K7Eac9VsCiTdocCo4Pf1VvXFjBDXgghpdfXXCsMKQZ7",
  "key6": "52QS5Aw2dm8Ly4fDcK43U9CLtrDQWAHPNeKEP18jGwfpLEHfF5nSZqPZQ1iCVC1mpAH6ZV56bK6NHwMBNoDVWqt7",
  "key7": "9AyQXqQirZ14vV9KPbCfnj72jkyP1hfrpqQb2xQ5UQnqDvBcpnDRYti1v3VdV4UDiftbw556vagHnqsQhCF9c9B",
  "key8": "2dpqMN8SwF99Ui2gfNXheoybDtJTbwf8ycRHscRYkzFcRW4TS2PDCW6xKsuag1EoX55CVBFE2ArkWJCYKcax2mv4",
  "key9": "2m1DVz2NYV3XSXYDBsFYKRDa5KXFfjzUmYD3Nm1bg5aJZr1q85WCPAqNdQyEPeLBDMcGMxyfj6v1Pk11hrXZ5quu",
  "key10": "3qWBg9KidSwBDBNvX6RcUbSbgJskjsQgzacYYLSwzR8hM2GEc5Gwj1pfLLEH17mfCJ1pEoRGvjaNqhJxcpnqaEtJ",
  "key11": "5RPsiHKdNiTswiHroSCjyqgWRUyqDok1PZwijUms5kLJ3cZKNNEi3T2aU9MyjnVHeLgtW26fNKYwDMdQRsDgG4Ga",
  "key12": "2aPEwg99DCjS2dNU6ea8NxaATPEJg22vj3B6prfyAyvBQCyMDFTtWwy5k4iQkZiaBXfyVahFg6b1YRU7pwV85ogE",
  "key13": "377CkJQkN6R9FxyaafMQVKZV3xhHX4pMe4CMgYTdXAbESzLqysV8Ju21oVHFjYxnC5CKzgZaZzuNnAxmg5m4zFG5",
  "key14": "5Qy4jtTfZu4n1Hg2Xzkmb8PmNsTocaBSsC38UV5RLHpDAyn7cqDFhz6oAnsFdXkZEWm8M3EQJ4NTAAAtnhhZmZ1j",
  "key15": "63y15s39QmHbktTpubj97LxQpzcyCsurtWA9aK42zdAnAGAdwwPQJA8EiZ1CxZJQDbMLdbe9nsicN5m3Pmw9KUgs",
  "key16": "5DzNUe2mX8XmWeCsQKjMb7q2dqJY5K8YNShv5bXqL81v4EFxQX78EDAF9HiVJAUawDrUWx6iERyiT9Vg1EpbK6eX",
  "key17": "3nGGyoqwfFAEwZr4SWVCWFjBh4NByP2QrZnLbq5M92RjzqXSd5xeRNGPzJarLkGBuSuA5fhfggxkNuaj36cn8TxV",
  "key18": "4uKT9bWe39LsJs1hMqWEvmgtJUfEWZ81bE1S9dhP53iFpL7wvMd2iQNWLi7NttZPQ6i6T86S2WkEtaLMZiJ2xUz",
  "key19": "44PK5YYLDwEnp93vdxE73iBHr8DmXpAoc2zVr981PFfGaQ7DjneP5muaUfU6xNJKzNo9E9Rt8u5E888VqK22bW2P",
  "key20": "2ZHFWZEfpb5sZ5PThkAu5cktMnrT6BFA7p5C1fC2AKQEoFUfBCemSnXtXX9K5MZPeR9HSYyfS5J8WDkBfFRF1UV4",
  "key21": "3ACiXWj14nGQcRjmjvrDCf4hDHC4S76DvXxZ3SFrFHvfCpWhC6FjJqpqk94uYr5eKho4yjviRzghoUM71UYFyQfp",
  "key22": "3ty5AoNkyYZwHdKaGzknkeanHXhbddJLfkqD1tdJuHW3QeXBUzWnpBE9kjK3igtWiQMmSXcsFMNqTBcekaq1yjQj",
  "key23": "54MhBwppR7PWFwgBRwvpb6fe1iAW2kHsW7ScUGwN9F8UyPd7pM99RktZtwKWXYoK9xhWcSonVM2eoEyFycfyeyBx",
  "key24": "5gCki9YrNYkuwwKRrtLRPT2ZSBXpYYb9SzfbT5Xv2XX1DZ2BuqrWQVZYQpZoz8nSVSATaRxLv6aiKxG44cW6bHam",
  "key25": "3cZsQNYCDjMWogTPdMruRd5qzfW3Jxg2PhhsmW6jmxA916AN5jnfGvChwyttosfWbtre35EHQqMLrcq3SWC8Ag9p",
  "key26": "5gXeMBjhn1kCFxjJgFozYhmPTarY2D8bjAzHQz8RUP38ar9uUTvFF1mCbuUHzuBt6KbhPfbz2SqQVYaHux3T9KCg",
  "key27": "5K46AhmounjmKKkSg9f9C6U93vJCKmqsYs8yhFZChTDWeSUBFdPjB4EUhxJENQRfdtgvHByqUwRVvTkJ5Zc7FrjZ",
  "key28": "4GnnGg14xBLpKNoNiKHckXAbE2Ah3eo5v2DpWponCgMjL6bUBP4g6mNvRQuWN7NCQKtK7uxryiEmi1bChE4HsEA",
  "key29": "3mgJjxqFGgdtHnK2F7Q4eSXnZb52soSsjyPNt7swV2ui1aiHHNvvQfF5w6moFjgZjngDKZWXq6pP82b8KzU6VDpz",
  "key30": "4LrofcCjh6cZ6NqRxbtxsiHXUhyxkPJCthgKk7rmrHYq5YRvC1WfFucFUggwxam9FuXocWdDrtvi8ctjS3qCNVMR"
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
