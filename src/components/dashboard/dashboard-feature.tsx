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
    "6cWpYCfggQ4qmrha2Sjco2YrPhsFfmaTY1vVQv7LmvfqTJktRh8qZu1aeZvZpYS4Wf4UFB3Y9S8VfzGVB8e388u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CgWm77JuxcNFqJ2dcLboWpUd46rVeniJYzsPWFDb6LY5wzeny4GecB1vGRHokByktoMHFFbY5MGpiDFUt8tiT4C",
  "key1": "TTm4VF3LdHUeWQV2qFBiTVYAadN4b6inVo92BKKYWVyvY9oM9K14edL59p8EdAoPNUhpBVwZtVJiZBbsycjgy8X",
  "key2": "2N5ZTSUm3zGMvTSLxRbJMAYbFncXPi785P66nLv3PV8j8Se7JK8FefSjqkwxBLLS9pwohytbuU7wF2ATSWzigk5E",
  "key3": "3ZQkjh3yud7U3QnbtLodiui4jyfLbYZjdcazmqpatn3o3HJTkdbVmvspYqrMeAX6kQ3awZ14nfbbJnbrDT2wuPHS",
  "key4": "431Pf5w68CBhKQRg4dHJL4bkJcQjcXHjRSor8GDsUJmV42GcyaW5yMJiPL2jec91guaSZZeb79Tin1zL8yPK7jmG",
  "key5": "9QpCRSaKxNpFbUfoNa7iHXUcw6DSdH6r9nTKXtAhDVjKK7rZhZXDxVLBZpZq81LaXhGaoGLCfqAx1aCtmadLzKL",
  "key6": "XLD8yU1DSvwpF2f2UbKTC68naasjGeTNEV4b8TqsYPBAQ1xA5hGoLE7AcgbeiswsyDd2FjBjEmWA42zMMezBRat",
  "key7": "5N2mecZxoMdU8XfSczcap3jeV3EUudvaWUZmzGKkudNLa45CwsW3CLDhpZy61tErN2HXGYWJUAk8LokfMa6fMyr6",
  "key8": "2zLBauGP2BL1kE5mL5WXJQUjUdwthWe6SY3mPGdJ3hDN98Kbu6U6BuiQjnA8X2QXgMPvUGHPTTT4e45uPwf8WDX5",
  "key9": "2tJrvTKJ5TmCfKuy9TSi2YjEJdSNM1xfDoZaXoxW8btKfwyHUaX5rSisc2fNs2FKgfDiVFSBNuetYEFFjsKXLBCy",
  "key10": "3Ci1ZJfzq5PEW7HBguumeFNt73So4rc76safbpFv8S2H345sToAKvrcgq8BGPrTnALoRyasaPeazXM5bR5c4gJyt",
  "key11": "GMKYrJzWJfekH5N2xv7K1aKxoESb93eoXRmn7CWCfdPgRiUa1PAPFs4kXbRn3naL9m95QyxJ3ghQfFe9JTensZZ",
  "key12": "2RDpyauaLG27cFsBV2CA44NwM4c6E1UQPiUGKQXhBBrkMiGyHXpYadGhgmW5rSGy9Wx2eKn3yMQdHDR7ovdvAQzN",
  "key13": "4CtVCzSNzKvgRAUBix5RzsRo8nPucbDsFSmsoc2awEkfakFwevQnZ6tNLprkCcAt5G2ouQ3NvVvEYDfwVVBSNKXi",
  "key14": "4Y7YuYSoaqWQxvRySzXL1sFppUmCZYVW7mdV7uodFmpcVHqRDAkk9JiU1VokWRHDiPErRczneueDBhKrEs6GRMTG",
  "key15": "4Writ3zLEnLwB4GocNKx12A26yzRykuVrsmvpSt2H4aDWiYXV6rhXeDHnPnuuYLkdhyo2Nr61aw7WF9jMmaT8PKW",
  "key16": "412vuqUpYoM8wTczMp5GvEhhMbYgoCKNoAEc6bU8uQ75gB79c8eUTHXZf42XGbVLfz4VXMTFpL9uGvtZprhLUEeh",
  "key17": "3kadDVfWSGugLCJtnqLRGbWaxGEogvNcacpUNwku45M5vj5kCjpjhzHZyCRwTH7am9LUCXKeoe4xpvbMfJGjwLLe",
  "key18": "2SQTsTTcMWUT8qH5BjxDicaxRmCepdKn5ixvdBwdz2DjNLsYFEaKjSJFti3qHHdsGutBiudBut9MHqFvztnkCUWc",
  "key19": "RS7AemHNcwa1BBe5DtpUfeSJVX4rTZyeEca7R1rFYx3ggn6NViRn5M5QpSwuX8tKXd8oJi2oB6CiywnZ6H5Ba5W",
  "key20": "4fayQjMaJ5JfQX8vs42chc1Fvs69Yv1SLdvAc2kyC3vrdcpVZGs74ZgSx1TsPgnrvjTi9FzWq6YTxUgBDp6MJwx8",
  "key21": "w3kaNN3isaFc9F2cikssC1S8mtaXpbF6WZ5sdLw7BWkfeHw92wjqsiaA87Tprs8Mnto1HuoLfg8yUXk55B3RWoK",
  "key22": "ztSTyn3LdDEVih2uVmohmmtJQZ7jUipXU1Hn7CsNHzxzXtrPjDuJLe7T4J4UDaHtuF21r5TB4hCxXEGiKppiEpT",
  "key23": "3MD8T3BvLNao54Jo15rNx4489FFnQikZiVJLWnqTjsed4zG4LBrVJ5C6foajpVhoiCz3muYE8SYAB4ZG4qnKZq3J",
  "key24": "4HY1zH5kwz6N58ukrvDidSiti7LJ4UF7be7z6RhZfE42SizLBRDsrEeWazUksTnD2YoEoripivT1CZtJV1tiWoYn",
  "key25": "2ribYWTAceucM7sh57aq5gBUskNRosYdXwosWpf9FU6aVGXoWmc9xtcfnkWP14bQWuouLATGSx7Apg5gGjwwFQpa",
  "key26": "38vDefLv8mb3AV6io6WNHHsbfqy2WiZda5ZpVkVrG2CgzwcqPegEXXMhoV1i6QFgJL8vh3Ee4kwBX2u2AhTkKdWm",
  "key27": "3kMKLMt36XMmZvNn43qef92bP1NXF3c8FdcR7UbVsET8nDuK8B8Ccgz9RvEGC7wXqugDAZEs8tJ6mUeVKrSdGGpM",
  "key28": "5KNnjwZ8L2moVm37G7xS2DXC2zxVhxNkeujvucf8Cd49fnXScNBqHKNA91rrQXfBVQj6K6NuMG1BVBrMSa6mWPfR",
  "key29": "XstZT3pimxt58ybMA81WETfthm3tPo9PYtNoQfNFbTba3khwDHKoQcJBgGyX5mCVFni5bocpNEz6G5iuQfrRHxQ",
  "key30": "38THhiJv4Piq3sJgpHq1rY5xVKQmiWCGrXWGYs3HaLGNnu2htNrkwfUyThCqEP8Zv4qozwJYxhFtWnRvMqCnQR88",
  "key31": "U4DtkofKAtKigWW8zXRmZs7EMrkYCgEHc8vpLo1e5kESgcDG1eRk7GmpJYYkvrTKvmjMDvFJZb2UiFNFmV3DU4B",
  "key32": "2xXjda4VP8oEGpbxqVUi6HzAjpybuH8kiJrh7jSTKu7wtDowvduAekZ7dV8HZRwk4HhzdFmVBwCwYWpQNzEUHXSN",
  "key33": "3qL6N55V6H4bpayQHyg2ZKGZ1tFFZLNEdhLzpMuxXPcFUnqJwVjnSsXgkoZct3BTpfDkca6S9fqJwgRi5nzvouHt",
  "key34": "5g9MsWVmhDrkG2EZi4vwsUD1K8ocmiLgRp8kYscTj2fstxMooCFx3v5tQxezAbpUUim7qCKrH5CA8ETDeQUBoqdD",
  "key35": "4YMFCcizybwXZJwjsqBHoPVuNbdAwQCzC3ytcpaipYjRjWicLgSedrXy86vPRtWVGMcpcCftJbLn323urVzgziYx",
  "key36": "k8QU9jsPE8iUtNim41FxoTFjKkHGg4wRtKyPwGaCLw2TQhMWpnyDnPAFtRpwLHirVYwEpNYNGNFfxZbdXpHU5xM",
  "key37": "26dtE7BiAjhSKq2L2z6WmH3B8jPC6hoxLFeBBVk78kyaXgaNeJw6cp7VvJEuKR95KWG8cTx3wa2s1JYSpgLRsK5E",
  "key38": "zk9xX5dAs84ZZMeiSrd7H7c6YZrjJM4RMygq3bUJohdmvRUGTb5oDTY4PYNVjpQbhXhPFozLG6BtnjFKBtEPAvY"
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
