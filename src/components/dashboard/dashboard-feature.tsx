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
    "5GD8vcP48JR9zdzVcsCNpCbwif9xV2sD3fxxnFAZ5FggErBbDMCSNp4PTRoFKoNG4SM786FNDT32ek1B2MPfkjEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iU3K8JGDi3WL2BpSJsogYmARLMwLLkLNfQMm9wJoPKvqEJj4vXFjAoDRDPEEv9BtKWDAhYyHfAVsMfZQwTquDJw",
  "key1": "3nDa438s8LfFB9nAVrkbc5WqKLykrCpfT4WmJWf8wbBkVQKczznSNj1dSYAFykTKim9Vi5CPLZN4paceEnAVDcdV",
  "key2": "5RHvvwwNi9c1jtjQ5YWxbrGE5RbTxPuozCA1XR5cPGKasW6dAz1BfLoKcPSCxJTeM3LMDj2Dt551BEDBvi6QoNKk",
  "key3": "4iwMU1SmyVTD8Pectg1NN2JvYt5epnzXJZRaHHqCPnsM6ewgjar5hyQU8TsSoarggQTN7TXRr91zcrgyfPUVT5og",
  "key4": "3Vy5epa1inP4L5iApPYBvpEqx46yGaffLBvPaGozQXujqzM7KNeuBLuxhZ4zFGVYTNYmq4Zk3vVtyLUAevu6Q9Yd",
  "key5": "5TCzjfM5Gkij2kCizSoJBYuaACLHTdfK9QmVJsRQSZwijstK1ovSrhckVZwRb5r2s8aF7Hww8ZZmWETixHjQdDTA",
  "key6": "49Ajw5b1yfQBu8g7kyfFZLZMsJj4fajJyGde8tq4LeuAmCheBgWpZEj5VBdyco7FWLQ1DtrP1poJqqNgfAvutim1",
  "key7": "4a87AfecxczcKB3aNKPHeR8Xwr7ctTt16EpGvWB7FioEUS4jRyKaSMBftfYYDtNx4hbUFGMwuG9vgCePEJeFMUTU",
  "key8": "221HNFqvLfYNkXErM9UcKQggMbRNQsjePgpcvMBNjnkcoawM4Symxtc3z4ZRA3Z98UBdvBjT42LVXgFKSHxNnYwT",
  "key9": "3Mk61gnGSmtBAyNF7eshfsja9VgAcNRDx956BGNANfjQxFxEsdQogkTyxJ8A41bxww91Abrvq84HmQqdQ1uSkne1",
  "key10": "i1bYHVKwahH1Vo2AckJVuaKuBqBGvURGEP8rCdn8EdL89omXebsfuGhcKxwUP8HpaWJZgJWwDrHys32oHYLxciF",
  "key11": "5MDgSM8gg9XVTruSaGnaw6S7r2G76jnZSX5FB8HLwtjZCeJdyKFRpNyoY1yxBGRvRrK887gPdzGe3znBDfwEDbVP",
  "key12": "2h2ExSbFQy4mMLhFSre8VbPivyCPuCwpkQuyPgjmirx4jBKisF1ApfAr3GGe1P4xH6waxC8TEg1pgakEwgCGCGVP",
  "key13": "598YmR8JRQtki7qgbwZsTX6WmMdSPZx4q2s1C1CuBdmTwPUg9Z2krtVHH7g2Au5p5N4sw28uQyCjnPa6gCNhz13o",
  "key14": "2PXqGBBiH7GjycP5pcvzNzqo7UbzqeXVzimmCEVVzpUuVSYde5dt3DZXNnhtkR9pmLupNHodSoZwt83AfBqePoow",
  "key15": "51hL3krVau2pMAiJEcjao3rcyNpZmEnZbaUNQM2ZhFN34dvjGUWhXn4hb28pAJwXdb4XVCsEbaDxdNKBWCfhjhqv",
  "key16": "2m1gCLXxzqDne8kU3V3SDg3SyYrTB77UbVq5vro3r7aqQsru9ZRCDTX8Q5YbkrN7xtfKjyVshtEHTmYtFsRVPkkw",
  "key17": "CZxDcmMqWhT6KEusAXJRNwVqKsHreiV3gmBK3q8q5SwJwwtov2V4MsQrz7kF8ccXH7VAnQTdYCPK49tmJa6mGrm",
  "key18": "whFyapKVY34MGnRHiYcnDmw8KhRbZqZSHqY84GKFZ7q3KL6rU6pEVvVht75RgghVrSAZU3hTxLd5kmhNtvY5dqb",
  "key19": "3Un3o1ZjaPh7hgebnibMgmy4ZRpUrjnbx5VAm8Txv7Fjkf1GxdGHm8fLWFESShv8KBj8Dq6cGZ6G2jNjgQpkngwB",
  "key20": "5iMjDATfQ9SCpkbjmEcrw1MfUhuYTvbJy8nZR8Nj1eTAsuC4nn9cP2BPir33W1DTmQbLwLuq4SADyxuY6kmrfkj1",
  "key21": "3GQgBGRzs3sExKSY9pfxXpjdbHxC62TEKSRcMkYauPFf2GfeMv4xXBFFCrCtMXxwAc5z1q8ABpqQ9QMwPx29Ws2",
  "key22": "2MF492DZDEqur5WW4iYJgay8rVH4jAb2eLUcc1XSrgZkjcDKPRrkVHzYjDh8VWvJXwkCF4WoJpWkLzkA9kQsDvEr",
  "key23": "3vo5E5mHUUvBdA1rbSjVSw7WkSHT6i3PCA6GnYXWRW9V8tNz4e27iZzWPnTBdmuRQJsF4FjZ9NWQzi3WfoS3PeQV",
  "key24": "2fJsKLQFws4EQ5MvxPG5a5NRC8y6aBXqxvh5njP79t2ge1S6kdZF8rMnWX4bZHh47mXAbzBySwmBvDBs6fXv1NqH",
  "key25": "4y2ykkQjwVtkC4hvf2mPJXuBTm9DY3is7LEv37uqqHCQHaBJ1UNUrioGfqfgjNhmYosyQU1tfw7xdVwMQh1ikA4z",
  "key26": "4vZ36cAK2XUjXAiZJfSHYkpNgYQsQ85G57TTT1GpxVqCMKbepmic8NCSbfXSMiEhgawSy6Mx2iRaPGK2g4TwZ9ou",
  "key27": "2fGZ8GzQee7ktLExTMxPExoDN6zxeLyybTumshTZkVitNoGzm2PCRQ9wGBfQtU3m7NcPmu8KN21UE7KZMfPicz8d"
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
