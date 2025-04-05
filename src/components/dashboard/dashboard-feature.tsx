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
    "4BQC4N1dWyQai1xPzJFuyqif4xUALNPJSHn8BAjBC6wiT2KadJTg3r5aEEof5ZCrDScvNuWxMPMch7xaKLgBJufS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421Vc5LuVoYMiWxWHpGb6EAt5EkWHVyHAdX8oTqvrV65ZEf1AMtMj8prKQSPiME9znWbUFLnRx18PVkF4rK2wQrk",
  "key1": "Y8oMErKzcDUCLdHb1oY8Z2LfLJwB21ZvR9MeJHGwRgfFLScU2cHighGPjp7Y9X14CenzVM4JvaDenTbHN2zQB6Y",
  "key2": "FyMwc5aUZ5qShBAwz4Ma21vXBKS1ayd2rLdK6j3xMcHkpgbCxTgu3MSJoKPVsUgkxaKTsnHLci64kDqcyMzDaDB",
  "key3": "4YbKDpmZchHuvfoEroGxiXPQzWH5D8yXtvMFD8pf9tJZJAce7MyyDURP5MtNjdkS1L1pMU5fHwCh3N6Hxat7D5Qo",
  "key4": "3h9CYpG2KzxVSbDbNSUB9zJWY4PuPRRBKbJjXzvuB4qMhr63CT4qoXhK1kT99ph7DdjMBpyyue4sj5kWSTymi2Nr",
  "key5": "2Wi4QBj3ohYNJfxqjfrPn9cr2br8UoW1tuwC128NdwgxGG4gta9iVXcgFeW3qsqz6RnjjZQqRK7pPDGxNY9GidVC",
  "key6": "h6krYJfHa76V6RVhNX2XxUFt2DSXxeTtqjtbrgQ5xTh6NP73D92RybvX4mca6bUoyJeuyrzebZxXx3gyeTRAF9U",
  "key7": "57XV9EWwhWBnASrCPE7ExbjBG5NR6ZyUXBtETzD46GSsB86vYTQ5UuZ6nLEMudimxdanr5oBuwPaj79nXK9knrGz",
  "key8": "2aWumyxjeSBpmMsTbqzTbH5WbZRPKBPUVnJ5sE8SSUdRnfpZtNgvqqWJoEr5ar8B8bks67Xc78z4SKimonsf4qq9",
  "key9": "3zQKNWwA512vomJga7UsZxrJA6rCPsj6yfGhR86D5PwyQijyzwpxTSE3xtAa11xLEGVX9xMdZcQVTvRQW3i9yLZc",
  "key10": "3ehijHk4dSkNa1ogfRDZ16WzJPMiDuaLRDCGoyuMwBufwHzcPG4fZ682gS6kLhscgQUWdHUgeLCamb2MFLEeR4eN",
  "key11": "4SKeV8BDUbRtSQLd4nft8E2xbCk1n21G9ymdXD9wbnqww8QM7Q5yzr2paP2HvrZQrD8KjGRQCaw2htr1i7RkxvG4",
  "key12": "cATpCv1PidyU8VggMSqSFe9xeefaNW6CzGByVWDgjMaE2jHcZM3TAotodVpx7P4iPjfCece8yriB7aUPnszoi7g",
  "key13": "5gHSdvUAsp7Sa6TBgBMQtZCgPUUies9NgENs9vVUNhT8cKKKUSp3aQhL83F23ytwVzzNHXmGBaNPGZBziW84yXTq",
  "key14": "4PwqS5GEt1PetZG7FvvNHm3zyviCXwnvtTJ3RdNMBtTHkepVQRwq6q3sTvCyrdPeTQbhPvhVu1wpZBUPcYJmwLGX",
  "key15": "4gEnMNG1eF2NBVFRkzMmpedrQxrf8u2iDSsciiu9By1m6UJgz3xcjVDnLbPk8QrRsR9i7ajMGgW5zh8zbZJ4X138",
  "key16": "48bkA42GsjGZyeQn7FFUtZrBadB9UfTRMxvmPmpBCNbmHoCtTL9g8JdXEA6cWpPaGycozMfgSNfV1oEJiegmf99f",
  "key17": "4G1k6CnzsLP9D972cZqSaxwJE79kVxJJ5c5DrbD8cLc5zMaQrYHFKP9XrqjPFj9ZbRA4uFpCqgQ9kxqZfhjmQiaC",
  "key18": "611rR3bCeHpBC2kVeBRUJpcun73krSytTpdNXd6k5YZgZK89AWFShb5VPUakNJ1b6sFKEZR2r8R6sjYSxJzP1PVd",
  "key19": "2DSrCwkhoS9Lavmh6jdsqRaUm8LSW87JDMgZhPksQrQtv7BSKewaNVAYehuiXCqVw4iP3REjaksWsvFW2d8NrCyA",
  "key20": "25ykszGAEhhzGJdqNd8MHnj1shrLycZwuACoJ8eQ6XQTZBbN4qSvqxrkeWvhasR23EYL1ENvwvG4ePCaahX3QHQs",
  "key21": "21BDy6KnTQF7StmnjVxzXAi9sjL3cFQ7C44MkmMpMj3iXShuwypr6KnCYGa85246xARL1Zic7mWfSD2E7o736RYf",
  "key22": "npicHybHEG57W3rYSdUUdmKwnMQTLz8EZKZRmMaLZVRrcwibSq2J9MCqFwJN7BqbbrwmYAGxZ5eGqCXuFW6tfkv",
  "key23": "48uBTin9CPqAgs93uKHFv8MBY57Q2eUgEQMTyBQBCRmyrDSKNZRBdPh5JGYeo2JnWayAsVPh1yRqDSpiuyeL3P6E",
  "key24": "eESjwS34QjmbDi85SsfdUYSzZzNV5S53i16a9NcDn3yYzaZr1949LhfS5KA5FeEzeCtpE5Fd3PqDU7Az247zeMR",
  "key25": "42skpwe6U4eRgztnybXFGb3usSukMht8qnEQMXnypJg3xgANuqACJuDCH87LtHprn6KdgBcfVLrKPo5sBRoA2zL6",
  "key26": "2nRCKigQ8KM7YbS9cbY1MVx4S37Uyx5wh3qnHqVxwC2ia6ufGMCzc23YZSiH5pvfaGwsHmgJuHcvaCoas2QB8TR1",
  "key27": "3TLrKxv1QuRtWiHAP2krwJJwWmaQb7z35jmfbXCye81RNbKuu3QdZHzgq4ScR3pTtdpzDAGzY4ymcmvJA9NpLghq",
  "key28": "NU8BqhREJqStBAF9muc8eQ1GmnLpJPLNPuv4GNmd62SnQT4n4a5u9pa1xa4cuxRQ6mNSB3EpyKta9hnwuBmfPNq",
  "key29": "2wxNru1V2vEG2ouiWMRfACVBoXQ2c3GP5tHMRzLTi8Hx8vrXYV3QwsKs9jgPr4DTRrvkQw84T7Zgu2zUZ6DbbvBD",
  "key30": "2WUBXSkmWVs996SBYoSB3xxhUZS7VkQqCpC9BSZnF7RaZk46RHWBxmpgUyzV5UjkKLh2hvJ3jJmGPvGqbdTpwV4j",
  "key31": "3mGSK6kNxzzf8meJzqGvUDmTkZpwFmyxurbro2NXSpKsr5RCv8zMmVUzBVYN3cDJxc92EbDHDPnwFzr3Yx2tiQPF",
  "key32": "EoQjGPaBrEJWTDKJUr7wBSNXaa6hQNb9Tskf5dgT6hPuqLsTJqUud2XMYxFB5B7pqwpWRjJso8wzUbjKPUonmwz",
  "key33": "3zjQAzotJDomSo5K2aFYDM49rx8um3LzF2XQSfJRqxvvv28QgHyg5sGhdwuHhtBC1JDPyGbRVaiZfimXco7P4sBo",
  "key34": "3iEuuFgiG5D5grpuvzgzHHJUyJzhM7mP1uR59PmuXLkFzY1t6zL8BzX4wAkwXJq4VZTxFLhp9yZMHisWaBUjoBaX",
  "key35": "67Ah9zKNyGEYQAeR99SFGpbdrZ66Rz2yUEQDkDTmzg2Phy8xxdvoG1K8KE1hSU7WZ5NnqrWpgnKFZqTbBnY463ka",
  "key36": "3Kdh5FRgr1XHYDMk3T79RiXjZUsZ5S5Hq4eFY9yTjEERGcDNEhZqKhUu3TFVweoWEiLj7qPdfg1DiNqkeNMyrL8V",
  "key37": "3CwZKsKbbpSPftEvaC8TT32G7cda7SCSZJ4hPUeU698aWfZ9bAhw2g5YfWubyxVM8c978CLWLnBFr9uTUXiB5hcW",
  "key38": "5ERZUWK1Lw1feUQFP61qpibgMWUgqDiWN2VhbRAcpMqYcKVnikam7doGU5qCvs1Bk42fAFQdSZe4gHdicQo54QrT",
  "key39": "5tSD8TEkgiKBEEcof1mv4LgiDPGWT8iQcYdqZhbB86ZkxaUjfBX9XKjAgasCuinkzsVwSSJTvsS8wpv2vPKvWEoB",
  "key40": "4m7eQ7M5a9pyCAUUrsPxQuFH1f4ynWodqSSSsJbA3k8WDk7hgPryrLo8kdfow1jkTPPGgiDVwUjer2XUNienxH87"
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
