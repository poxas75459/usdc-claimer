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
    "523DjK4AeKngA3WMFD4z18P6pGLVEFJtNzqj4qX6CCuboAxsJquqfatYAdqsfnQyhVXk4p2TxpBDir2nP1bs2dav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFghPCHfp16kRSr3tNWDghMy2P3sXopGjE6bU9GHei5tnBGYMAMEXVumEXFUWeR8h6UzFkPPYb7eJ8qrpi4pvj2",
  "key1": "63VLBsQJn3r1Te5Czq1uJ3evsJvdJBRUjYPLvvZLWMzZBWszWwwR32cGa1zBBsmQcaxWF85wfTfDRgEsmEM22aKe",
  "key2": "2hBdZ1sp1mMGkPGUYSVUbjSXtD8ThYRRV9KMJHpwdMRSvdMQmw99rWDuLvAyuHEdhijTrTZMQCTd5fvRcKxdMwmE",
  "key3": "2R83r7cqF3LGqu6vjTsJSh2v1n3HtGj5C1JvnP9aUMUwZ9GhGRyBfj4CvVYEkZvCqfSBMbu8CS64UsqJxAJ2dJqw",
  "key4": "2tUW9SzG15eV4TiF8nFoKPTKHm7nbBJmGifAL47hhWPa3xRufn26Lz3fKtvwgsfiP7nJmRy1b5LrGDn3PEKLtxbu",
  "key5": "5CzcYpZhP3sjBp6hTRpUEPGht52nK9wD1PvBvnTs4sdtznjD75MGdvvrkCpwVFYVPQNqQEiAStMFxEatsDNRSbJt",
  "key6": "3U34rBpf1gEEw9ji13ph3MYL3p4ZncEaUmxNy8MGTQexMPpwzgT7MRXTvCvUeAeVb5unQni2nF4uQzjcTToF2E1x",
  "key7": "2DJ9nsYvNUHEz7GXkpm3fkSnAAEAtadTDTVZ11wrGThM7TszctX2A9CBwwcgZTX2VQCjEaf21EPcWkoWo4JBWRSx",
  "key8": "3eX9oV3ZFtBngBtrneNHqA6nGcZ8quh8NUeNHjpS18TLep2FfzgofCDn6GJtwvRiSnmotAQUArBV8U77wcP7ZnoL",
  "key9": "i4Z9tT1uPZBtXmiYrNgqqgT848qyGwnsBJzLDgaRLAbrWeNXrafXiU8WTRo57yUAoEfMyGmyHy88QYrJm68cT8r",
  "key10": "2YApFGP33SuCTyysX4t7AVdXbDMqK8mm4dh1gajCrphn2A33KNthCFy2CNYJg9P1g2zerYs5TXZNTUmXGzpmHhGE",
  "key11": "5Cr4ZQY6KGU77jg4M7GaXe9oH5eXwrSpeN2TG8vACBsBBTAT5sQsGu6sE3pvLxANFDyBWNWz1XBwz3NZouvh7ccw",
  "key12": "AZL819ABdqduNsDMjXck8Ff9PBH9RpYbiGuztgggGPYYtmKzqURBogFfEkLkdEQGZfoZNooLncYLJebtzgapL3A",
  "key13": "4KPdkuzqBVYJr8E5XqeWcd49dexFKTxoeisZXUhM2WeN9zL7J8AFbcwUMTjbtuZtJNrU8RreAewrSEbNsN8BLPwM",
  "key14": "33KCw9WBDkK7qXWzgoTnywEPdLGAo4gpzi64WG7sX87Bov6Hvty582tYe2VHyNnXATqJXNvmztV97DUyqTrRh4jQ",
  "key15": "2N5ZGL7NUA1n1cKcutuERNqwBsXaQntNkSWvVFo8jEQAY2kp8AiewxVaYwY6gUvk15VnSbbvnjeEaPLWDKABkUAA",
  "key16": "SLjEMZaBXhjqoKakvobuEBXX6p1CFS2GcWfvpTK6FBCoatykzxuXvCX1ud2iwrnbqWWqaK1jtLU6KMhzLDEWA9n",
  "key17": "2EWgkGfrJDpBHwK8PSt5LarghX1iWosM8D2k5gaj5Ruoh9aMS2tKGkG65zRwPrgca5jU7PBEjjAE31H7hKaHJtnC",
  "key18": "5MmdLckUrrPQoc6nDSqorLkntgCN1oriqxATnFMuFTN8UMPekDbMMuyqpWsAvujk2S6u5X3VYV1qgCsfE92Gpqe5",
  "key19": "BfVbynWQc76A7gYAFda3Xwbsiq4c9ZmwYdMWMyAzQgnTJCPZ23iifqC8eygdTiNXiwZa2apGPTmKCUkAz4UGFTQ",
  "key20": "4D7JUdJZ8AoYPEtP4xj4ESV2kcbScn16rgV4SN5wU5ibPQgyM93NmYeaFSmuAb5Lnr8BVKj4w5jY9pfaqEo3kZ4o",
  "key21": "2bSzYZ1Dpi33eo1RuKhVJm1U6CQ1uJBbT9bNKWDP1wcN7jXWRCAoC5SbKPT5VwQyXSef1HbfdFv212JfMq7aUBKZ",
  "key22": "4a59QXqxqDyuM2ujAY3FinwQb5EBRdUmchsxis7mvMr1ccJAeT6jbhX2SDvgb3rHbeLXQGCjG6yaYRT6cGxZtzGU",
  "key23": "52uhfLpNqxC9DJp3sa9dqj1EDc4tv7W5gaVJ4ALVmZepSgma61byjSVd8mct8328JuZi4ungagGeCKt7aBweB6BT",
  "key24": "xaEuBetjfvCpxjRRyyGiLthcCzS8Mr3Zgm46UZ1sYDyVx64SVmWMybajM3twnB2rTwBW6eNtbWfLamHJynEvdes",
  "key25": "5UadJrhUvJC8RFEgUtgYxkvpViq1wQHhnHwoCMu5Vr1vp3NQgi76WN2oPg318NaKNesRbp8s7cuVWeRHHU9QXc6w",
  "key26": "5gqkBeYdbKh4ryx96m38WNYL4x9u5yUFZKhbNLGrTTuLeyMpgsY3vzB3cpF2mFc9BXe2x81vtwiAoUx4hD3b2ABC"
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
