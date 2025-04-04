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
    "5MmaqEhr2Wgq4c7BvxX5Zg6GQSYcr5eCaHYCHsDafZuGAB6TzY1SbJcwXrbeXwriy7Q9A4iDG3XrRK5DeopxuxU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LtK633yLEEhRbBc3q2mBQWUWBt89Ug7LLhxCnT4teQEhF2GU8EQPQJo1g5VCn616LZByUxRwoyR5PnBFShDBQV",
  "key1": "2FY1r87B2ZvvPCKUyvNS484WRwuHFrSsL5FvGaUuvmBAQbcNwQeUy41NFJtUBdexAtAZUjThsaZBr1MxYKFXyqid",
  "key2": "RwGo2WcX9Q5Z1f5ZJgpuDnqAy4nVC75vKxWrPEQANiMTSEKBMCXbeAVsbvyx54LLPjANW3Lobid3eVZ3gVAcodB",
  "key3": "2zSjofFtwcJ4Dc5tYjyK78CyhnZK9bu3gTNF7Jj8KnEJhczTCd5nDiqn6Ce1Lb9yWcLmK8AF6Bzcxve3GgKp4Kx6",
  "key4": "Y3Vn1cDbUCyi9ijt2gNnjSrNY9wSCUu5DMqxPDFGrJDAQVcadhiQwHQvKrmXy53PFbK8qhTxFkrp7YNLgWnqyZb",
  "key5": "5vd3aYmetPRZ8Fr1zyo4evCnj5mqtkdCZCmrwaFw9rdSpRH95UYtdWBKEc7vVwWkK2VVgPFxwyJYk4YbhgsAMsSX",
  "key6": "62mu6LaEx2tgkq8aw9UbpXRp6SdM9bsSZ12oEJ5srPRTcHJ5qHABFzUxg7obAbFd61n4S95HokCeswDfMJExoruR",
  "key7": "3q7bQRhE7DLs5cPZt1sgH5EBKKB3QexjgVfgU5x8LEA6Jo5rAiv5owRjkWtCYgKQVpQQK7Zek3Bb57Ln4rEbm5Ck",
  "key8": "uBaRzfSeQjXrG4CdGFvDNkfv238WJqbmRMdDkZVPyYXW4WwdWd4cPoJuqGf4Gg7QrESDVPU2PTkPC4WjJUFMF4p",
  "key9": "5NzHyZ6R467PbbGAYYpnGn5k9Rr9YtufxhaHva6dXv8imHJVotAtp2DXp8pQujbSUDk6vzL2o9W2urEkERGakC8Y",
  "key10": "24mCStKjJprQWKQxNmpAv6ov9YUjzRrbd4KFX1Zx9WuR8HraX68Nw3FdF693TfkbeKpWbGDrQM2sqoZCUczvELuB",
  "key11": "4351FDUs9RXsTJboSeyKxPfX7rPDjhhobPJZpxcyeCF4uko14f6bcSTL3hTSSiTqMhq52ohToRkzzK44HFtuthdT",
  "key12": "5vodVJ2wRiKapSrZCAtDB5qHgD35vdyNHoZE17fcek5aShbdebBpKmAPwtA3vmQa6s6RMQEriH4Zq3g26jYtoUGY",
  "key13": "3NpsXfWKHuu8DinU1mzuH2xTbup2zNX656xMZqL3LHT26P9Qp4w529bXtekLKZmC5dAHhBZMH7aZDxm9kavz4HHc",
  "key14": "58kiMUgLhdmkYHPMLAudR5A9a2MaAwD7p1GjGRQJE4G7u3buoXAGxgQ2WpT5H3Qub3Pktvy9iPFLk4gsu6aJMbqD",
  "key15": "2cTuqcadxj59ZNVNhv6GCWsGtJvmrFHJpdeRD6krFL7UryrBBjLfp2f8Ec9MSYQpLgnyX8VA2kdNzrZVGkpEKdbD",
  "key16": "4fiD54G6p3HfocA3Y4HomNEfRwxRJvaNMWUinrdKjy24ovEP7SpkyBvwLFX1rnhNJKmLWgs7RNs9Mp6UWYg7Nyvx",
  "key17": "5Jnrk9RADyR4LAxnyMLniiWxKdMWb3F6p85qYPaJpyL5ysHBRVRmt4YAwgA7whGQes97LhsFb7o3Z3bQSTn41wyz",
  "key18": "cyLsiXk3g7NXnKNhdL6qBYvrs5SJGgWw22nCHeUnjDM8qY28qCJFAuVkrJ57Eo7sTi4oAm4VJjfBBpos41KL6Pk",
  "key19": "YwRbo99CR8Vyqjfpr7wjU23gxUvdGoinx1M5zQSbVPyii8U9Nu8W8dpAGhYCqJVoFT4TgMu9U3QXUCHm1Jbjimg",
  "key20": "2uLsivy8kX7dtqm8FDpvzVK1Xm1zRYV7aYmrcGCNKnugVsUnGhCmhiUoB7KXCByNUAYsJfCu4FpyUYkWZeksp73V",
  "key21": "3zjAtfaRUuVyJUdMDRJHwKn5WG4pRB2ZjxBn9tpxB2hGtCkWcfJ9YcUfgnwJhQc8VUusfd1DfHTiJghtNybg1Xb6",
  "key22": "4zh1EuQ8exjMXZC8AzC3vm8JmCLZ8FKrgcLgAtDhB5uG7cXqVoWmko1rbsZWdyqUgAMAWRrpn7kmHiNYw6y4KaKY",
  "key23": "3uKKLQCLsjM6bmU5gMTmQxLpWsEucF4vayp1bWpHC1AC4uwC6iovwRSGk53ztaNMi2apyyugqueSKAhgj4aecPSt",
  "key24": "E882E9rUub4AbPuvGYsND4eXEQxUsnTWYoBq4bTia5zsQqzKDYRgosFKStdNTCAE1yr9zgYEKmHSCSrP2WPaLZc",
  "key25": "5Ntwq8Vu2Zsifr2mwmqMU4oVg3Sd9TdGhE9LCzeAWYjAma4jUiSF8XEgdzAHd8yQHpvZb42Bi5wD35v9KuwrN7gP",
  "key26": "2ENDnqnGfEnHmojutV5tKy9LKfiA4Wt3WqYzueWeHs8q6LkSq4e5eqQaMEeE9GQBLcYXU1Zo9ZqGAmyaxXGg4L3X"
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
