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
    "3dP4o6eEAooSG5RsHWrVzy7HMC1jHnwYKa2SFzGWsBBjJHFcWSNb6PmPp7NTqq7eromfE6t2kJFSFoUchN7AwLMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PEm4vUSWdME9tfcrRj9LWE4vu2PuA8hfe1xVKT15zhuQJjDjWjxxKZSbAGuh758Uic2LA7d2yUWrn58bNP3A4tz",
  "key1": "4ZUtc5mYXCBGSNZ7Xg1AJUZ8bYzQ9A8jdn7t2jccPnJAwCEqHd7XesL4UtQRAAL3YTbjLeZwUbhDzKdMjwMJLigj",
  "key2": "26MBK7kfykSJq5PNQL5u9eSRFsJCk2PjDXVFqz4PCaLS2qazz3Xoe3L6fj9ELNkBStEaYpkEiW2A4XuKAsNaPcEu",
  "key3": "53igBQre1HBTpkC8A16B4QbxxmwMz22j984uSCU2fNsNMyQpQgQVbZZrAfLqK1sNcp97Dn1XRHv79SDnsqoiDoxf",
  "key4": "4uGNV5EoipKtXTJbGA9dJDEGs1LDFZamzpMZeL6Y7junRqL2pF3sibZA9fV7iqBe2vjx2o7rHybPET5LawVpghXj",
  "key5": "5qZBzCREs3g82aUyAJNaPngDiHZQrYcGFk8L858jUDcDVyodgCHBLYT5CUQbQ3izyKxewmeX9SidYn51TmALts8U",
  "key6": "2TdFBXDd3MbHBVaVkPa8c1M2Qw2R2f3HGp1FsBrhQvVKitaYvnYwMbubJqT2NhnvXhPh4SsnQae6EY4qNktynvLC",
  "key7": "26kASEG2Q72EwSkadDDQWw7wc83rkCarVpgTP9SjDGkGdrd1yPh8p6Kk6qfoHqC76pXwG1Db7c5uieGfateNDk6P",
  "key8": "TST4XcxX2SrL7c6C5qN3hJyjg5bNfqEPoTEaG6yUUMYqgWMJXzM5h7dLFib2cfkigqCdYBhBbaji97uxdmCK8jA",
  "key9": "Czmr5F7zvCdpJX1nyGAuhsyvXjmNdPWZrCKNnzWizqpkC2XdjRQUcgnBcLpiE6ZpAmP23zSwQ9x5xBDdQQBY3Ku",
  "key10": "4K6vACXwGKkHNzHNwBLf8N356vtNhzYHwr37c7y3zs4bGESp9WBCPjAJDoXwcySnDPM342XwHqf3vkZj6PcynbUt",
  "key11": "41WcpAPNV6Y3Q43wyvUYzs5atxzQ6HdQDKG7BoJgivjSrw3HStyy6jTzm3BVuHpzjQRfA28rAaGzexxzKKQC2Jj9",
  "key12": "GJq52Ms6MdokwCCqiTXd6JP76wWdq9THkpmSyki9ZxSwBaSme4A1LxSLkAivwG9741n9SM26xUcgUxPR4Qom6fW",
  "key13": "4VzS5vET83kBV9meJwCyPaciE1QBvyPhbyft9Aphfnupwe1uQG2wt56ezWmuPhy9c6bsLnyJBto6fjotH1PzdUmg",
  "key14": "3juhuvpzaH6hHew1sRF7yBLgCvdCt7BsDm92VvgMym8MF5DnXeWwKVsttEYm2iKnWe92bZxrxijHSkM3kzaLcDCq",
  "key15": "2minKC5GJZus46ybBTQ6jqW4pVwfc88ZzYxx2pe7ea6EWFDC3dcmsc2BaWJpXseomdTBYa5ZEc8BBSjHj9cx1ofh",
  "key16": "3ba8rqpEQUAyCkDCsNcjbafy1cgvQvwiQAKrF7zw2nLL6wuQiAY8cwQ6bfBeH83waRzkjpE2zrD23XjaYVayfTBz",
  "key17": "gtmwdyqXwJQsbckhmWw4EXe4MV5Bc1J8hQKrYokRFGNqhxdvRybBbi9rBToKgYFzGg3JbT8DQsCTjjVjv9ZmwV1",
  "key18": "3TWFTw3Vw92xfpnktMPuLeuVVmbtGd3Aq2L4UGeLcV5EMWsn7suRPWzRYX7fbYEBghDohhhYbDsjNabbwbut76ko",
  "key19": "59fXNWU4WGB7qfZTLK3qYPgX8FikxPrVKxcPVjskiSv3zk8b3x9JgvwuYvWAYfTn1YqqFJJ61MUXK9q2X7hpsuM4",
  "key20": "3h4k1optLFsRTmz8YpLWazk1SDxqHPBvHr87BLdnzSrddkfUqYZtZuW4m34DdMGVRGgPfSfV9nzG2YTRRfewwdZE",
  "key21": "53bE1YVHAaCqgsVMLMKkXgkPYDvjiXgiqRhCfmKN4kbZTwpfEsnxqLrAetJfcC84LnKvopXVhGTrQo7aTKu59j8x",
  "key22": "4jLTct5pwYBgSogfYVUHEUGhCKeEHJZHXDjHpmKevLvZyELhfMKL1P6Bob5mMPSXtuFnaysgcvep6GPyEmBfdaPM",
  "key23": "yv9g7xgwDJv8TzV3ANCvzvDqMg4A4jxQ3qft39DUEqAsrHow4innqePU2wtaQrybtAcXX2XCqAEvhwVjNNYUqNm",
  "key24": "4KGpdEGNhSuEF3jPWoQsNWgGyGw6xsK2MqLv9CRDN1cVre9mgYkFAJmZgzTV7pYivWhyrFNENCvFJRM8H4PmQVDD",
  "key25": "4DQzRSGxJnNRzUPK3Efgej3UErwRJGSsAGWCJX7eVzbaVn42bEqvzCdiNYSMgxAv4QSDGirJFfynZyTPvAXBX3eh",
  "key26": "kiUzvgTuBJatCz48Ear6E6cN5ii8xCFfXHQNRthhNpGJ9umA3XXrmRFmgdDdAZdEft4LhJkC3BdVxhj5iifaV6D",
  "key27": "2BFDLy3um2fzVKp4WPhCkz8uGWwbJ3ZZsJTfaLMH3vMwKQALBSq6VDnof1JuYbytkU2viA2BVbM6RGNjsPwoj19R",
  "key28": "59MrA6K2xMzdrvqFhEYoRAfKZDz4kArCZQTRsGuJaPihW9PvneojRTaU3JBjXzztJoJTmgwhAsnHLziBAGtqnCt6",
  "key29": "2kDYMJSVNvCYyqKikRRxxz1famA9RRV3LBec44Hvzud5ZzpCF4jBB6Eupethib5RmxtxMZak93y2WvLQbFJUAE4v",
  "key30": "MaZryeeRcn2zeSEG1ejt6ZP3mwD7h1UYKstXzfZ5LnanY6oCyTw3Prg6uscGkdRYiJBfwJKaT94zKQiWQs8Kcbc",
  "key31": "5J28MQ1aHJ95MQHeuGFQsEcbCxYXRMkA7D9QfNwLfYP8PmypTAbknpLDasLR8jLEYrJ7bDYeVLDURMNpovptUue4",
  "key32": "2TTsGfEY6eNM62K7PQfVJ646BY2s2e9W1NAS3ZNf5cij55pQHDd95b3jMvCcpwE36rMk7Uy2y8twMqmpft8kQJ6R"
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
