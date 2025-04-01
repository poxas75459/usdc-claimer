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
    "3zSeWZiDXqgwupCZAVJ4apKpSzRVAxQbuoZuffA52LFgbL7xFdZf4GFVEbt3oK8knfWpCCHCcCtZZ3MCAqBUaHHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66j1U97Xqc5QBW1Kt3tFdqnPvjy759J9xwK2qPpKWDKVA53BVyxT3yNDPaqKW54tqgfi1TCwjGSZjQvo5KvEPVW4",
  "key1": "2h8qVEbNPYQsxtCL24gpCUoDarB1B1Bmw8KJKTxPKkxqAPf7Cbf3PupeLJFiJtsreAGHQUkUZkDvmxpQpTznxgaG",
  "key2": "3B1dXmHdmK11UezTJHjnJ1Abq3EB1imPZwZuPwdtf474eDtrjyCfw9iKzeaT48Xcx6rRM7C9mrVgi8Vq8naCBhNX",
  "key3": "5a1tWnB5EgCsEJVqnb3k1PtVSgcLyr9svwqRThaumR23LRDrD2Pm5xYhQUWngTXmdN5FTaky6dEMb3wjowKtGJ3g",
  "key4": "5WD5bo7NvzjAATQgfHM5VDWH92VeNfsnBevdc7sYieWkajmjoCDqqDq2jMKBAzzuxt1HF4BPZfHWJ62Kk9ZuaKuA",
  "key5": "bNQGMmTbtMTaywRLwm83ZuepPRGjxjW8u4ipMoe2GFBmqnVedLUPhcw82eeCmp5G19bV11HiDrJEEaGicHDJPuJ",
  "key6": "4PwDCxUzVHdHKXPKqZUK5zD4JAmRsVEyeqnAtSMDhRk2aryYtgJXErgQca8T2CBADACh7JFRv3BExhx6rZkNnwE8",
  "key7": "4xQprfWjYnxPyh6nyk5Fowe9kt27fSmc3rbuD5mGNat2UiTWYFXovTBQDC5RnKuu7MrfCbJnKwf2zW63R2YxSUhp",
  "key8": "5EzWg3qs5yUHBvYErEjeMc5HNRsGqVVw5znQ2HJoBueZLwZvTqEgCkLSxQD5Eb8kxXiaG1m8S7HdcfUVEEUU1QDP",
  "key9": "oFBrGPvDDnW7yRUqG771BcfZF4qotxjFBDozZ5nAFdzxTyB32w8R4MBWHGKwWJjbrzqW9Td187ZqcbeDxg3xydR",
  "key10": "66dnBYhaCkW7ow65qM8HU9R9zCMqKLHyDb6sNjrnUhwd1w8bTdP9daZSsX9KukDAkAzyrqo2iqWseC8RPtfpSjs2",
  "key11": "3WonUJmZXKqzs27WPpvNjoSoa8PkyWytCq1SrZU4v88jsUgKTn2LMkacGzQLhnAAtLeT4gxQwWzF6wToryCUUdMf",
  "key12": "58YU7NUfN3mGDgkYMEymcqmWworterAp1fa46u2iZeWasQdDzPKEJTTi6W1CDtaAdgeKaTmRDq39YDGpabFnRF8h",
  "key13": "Jj4d59iut9SkmsWPzYJsktn3bGCX5oXDnkKQ3QpCWqpjQZsEEvFZJb6Rmu9MykLJHWj3vYtbsLvk5U28JMhYpXT",
  "key14": "2gsp96G9Mxd2budvkxngBR2DTr8rUh57a662dMHm7Fz9PCHWPisp3goNB7E3YKgUTX2RNoisUgfQU6aSbZUV3X6N",
  "key15": "4DrB3sr6fCZp2h8C6Ac5VfVRGogSX9WEL5gCs2DxEfWFpcJJHX6YHjynsnUT72JVZyFvgHSKu31cVxiaokiAm5kJ",
  "key16": "2ZzbkkixPwrjV8JiB7xYozKVSeRFSmiP99XiUhFdpZte5eZfyJj8jBYSpiqRp6ztxxyCG5pBWYMN2FMHvUJUSX4g",
  "key17": "4FWAMwmy6ZGzftDddZ2PmTvJnWURGsYq1DtcckyZ3yzvaKYnYznNUzArbw5HjALPgor4viypfuZhtSub8VvXuV3d",
  "key18": "577P6uFPuXkry9LrXYbxF565jyc28Mwba2cS7MW5u5kFSioiQSRC6ofdQ8mUdjm83bbMBT7vTh8dZuNjyZzYKCEc",
  "key19": "4MufRwuNVyBid9LqY5NBvc3V6BqNmm8GhzTM6cMi7T3zZaDuwA6LK1wFHaoMM8gXjWcbntQFV4qiSPodGozxW76Z",
  "key20": "29nNt3C6AkGttwsp6ncEfwaXL1DNRjHx1Sf6QHccuJ4j7x4qiNTd8ofoGB1et4tvySQC6xddgeFHqRhSLaKt6WDA",
  "key21": "18cLumGYR7VcygASNq4hSqm1tZBta6hTpFeKFjUwx2cupfPCYHs6RP9E8WgnJnBSXed2TZ2FDiEeAaAZv77aWXH",
  "key22": "33GhUZg4cPugqHPDVyu19Y12yFZS9xKQ9BiN4YTd5mRmmcefScRh9jhkSXgv5ivNNWgKwEHAFifuyBioR9hwMerY",
  "key23": "3JkmrbgA6PW5gMU6RnNdpBy2f9wENaKSUDWJxAGPw3Te4yE7NNWb5N91zTsryx4d6crPeYzd56E9KHz3AA8qQdso",
  "key24": "cFXRAVuxnJYXHoFV2JSjfRoBcFQAgyZWPFxuJpoaFPioMQ5QwpFaWEJqHBiw1z3ZFpqWNd2RyokHgc5L6wXdHFF",
  "key25": "4J525mM7bFAMqKuTuvUkRkiyZcAxAsaMvskYMViazgAfnbuhnVX42cEbEpdPji6gkGgtDCGevdGm1TroSkToEHaR",
  "key26": "2P6ZjbkbBjiiBMwmitaZiJBwFeGKHunWwsTmUZUz5q3SxCjxqq3o1MKpDcAMZnxSiFLbnbsjjJmNNQab5nguQnR9",
  "key27": "4LxwbhE7HNQrRW9ZhECDirVqthx3s1GeXDweafJ4ExNZQGTsMzTtpouNA2F6TbBYXLrHWQzBJr3Jvb9LkeJAAjEn",
  "key28": "2bD9qNr7WypKK1tvUJ9wGVF5roE56FSK6NwYm5hxK1HB3hT9m4R8kftLASm5Cvji8V4WesGKnnkHq3P1HVgMd3GQ",
  "key29": "vRnpkDBu8pqwJm5H6Ae51znrd71P5LsQSMviAg13gHgKkJbAaEtZ8oxjjeYs6Ux61D4tPAJ57AN7qKEzk5x3BKN",
  "key30": "4VgBhPBNtCcgUdQgmEN9A82cn1kjMhHwYVeZSySU3221Wkkgqxazk5PjNEroFUdpvniNTMeRDoxtAJ8CbdVEv6X3",
  "key31": "5H13oH3heLkyWdZHBJQLqEvXd4tnZBs3AVuAr8iyKmux6h68ZrNJUqz9ZyErAYvnSQHfaE8pe6DZf97c9F9BeVZr"
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
