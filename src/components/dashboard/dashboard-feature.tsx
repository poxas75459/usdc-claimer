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
    "2yQvqqGYuUmMuzVUFHDfsPPhqCZ7Je3WjD2bKwHa2vvDU5Jmz4Bii5k3kKWbnAE6Z5cq7tuEErnA31Gtk9UXbcEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JsoSCyLdtBo9DBSWbhWPYBg71DwiCmAZM8yDDR1foyjkWRhrS8aMzUKtoapGgUMkrS33PyQsN3NFgM6mJfQBcoC",
  "key1": "4p1Ni5uPfCT8cmVaFXGdu1jgrvyQcaRV8fo9SksyQbHouhgBLWkaAQogyqf5dpaE5PokJto3VvELegNFs3i3giJv",
  "key2": "5fYhDhDK6nbxibLMX8XDchbudgXVWedaVs4Hs46EfanyatM3HsHwdPzv2kMoZFwBAcpzKfPSEVy5sW425HRJicoR",
  "key3": "2X8Tvvfveb7ZDfQnmfJuZrF134kZgAAUcpMn2PX8wycUZZ5kaY6j2nBStEPZq6uT6MMiRTtEdU7a37Sav7n8ypvr",
  "key4": "2rxTcU3QFBqV4Yi4r9u4m8cbn7oF2cAPnT7oVMPSRxq9xYucux57nGSHePGZ3AAFEBYV13JNrRuvkAo7zU44ftcs",
  "key5": "2KBGWVtbX3pXNfSw7DyMWtrt2h8B4n4JJkWSSyxJcjYX6cd4fban5f3QKJzu1cMTgWUW9V1jLDBpAH8PMHPT7e2H",
  "key6": "5E4bDMbFiAB7VvmgUhsnydvmKsFzJmQjtez1p8vn9oPzEqzYdrykt5Zeuk1xMGECgwYope97P7dQMG1PBtqHWSqP",
  "key7": "5zFcLDJ2eXc36e4vFBxTk6DT9KBBzQrgnC3BkyNGCMfaVYLqXx8Stmg6LJcqixryAh6RQETNNo5HFuQN6ormt235",
  "key8": "2274p2LjZS1J2CcpCe3WtivtdUtEkBCQWxzaqBvN7EL5Q2hrFy61KPaWMTewNRSwyiPefdVwEDxyVjHQ7qoWYNr6",
  "key9": "2KnEDXqHHLWiEDG2vNDfpv1WtBsSwanA9VUJwj55UcSRgryEsGdHWYwZZQ93Xwr6KqmrcNtcAkTMsc8w5ESPUa22",
  "key10": "4D36ZmD7c1gUQyJUapmTQA2YZc4Vcg9Fq6Yeuhy1ZYaWxz6eBxfQVCLxEaRDZKDBBbPNF5rXBPovj6mvA351ziBw",
  "key11": "5KneReHYU8jD1ojcaXeLVRVuNykVQYFz7WehuDJt3nF1ksxA2WDUXDgmucZiKyZ18snapitJ4c8vxkh9m7mRvifR",
  "key12": "3R1zr3kxuuosaBymVq4AQpQviJ3XWUFhh89VBz4Dx2QatHzEG7F4mqE6e5mwq7NyprU88vxyaDUi5tenRxx76mWf",
  "key13": "5qEbaPTScRa4qwjn8UUh4fyvYznNXXjon2GxAmCXfG1vCe8wYfsbk9FjR2y8SytKDZ2irVRRC5BrTYkQqx86Mf3P",
  "key14": "3YLg3wTBHJRjwTkzkNDXQWhRo6KG6AaPf7FaXWRpys9W5VqNa3bseYqX7yBGrmdReHLax37Sf5Dy1XY6hD2je7wW",
  "key15": "5DmEXWpP1rxoKQH85WnsCXSsmzJpx6MkVEsmWNTHUapCR7vc2zmEBmdyeJtwaatXfyd6tnP217i2khb4tRDZuJb1",
  "key16": "2vPKTt43eC5j3eXi2Kn5CZh1bAzaFo7qrCcYAw9pG71q2XXrG3z6yGepDgVdpWMrtUD7BQ8sYLAk1JQAoAjz9L8u",
  "key17": "22xx6xTLhfHMNUHnhb58TS7UVxa5artWbukbjzdgAeHTnxkXJzi9TVsb2hu5kLHHt4QyLxoy2rWwUb1CMfF2crJ7",
  "key18": "XRkSFzwgvM84b3Y6ryKiD4Pw9JqcKBgbffG4LJaEpvQVTQC4NMLDioovuDiZcBPw1nfCgpjuQpiuTjCUB4vqb79",
  "key19": "3zqzJu4VgqpUdx6Ejy9BXpS4pyb9yrFDubXCu6wLi37iHq77AhFtwV7GYxRp6LyShv5qREY6XqTURoe9y6Y7pJqU",
  "key20": "4j5ogyRtSTsjeYzY2RR4GFwr46aBZqHwhd2Fy9DYzZkS5ARtTCWak2i192SfboJ5aVHV6EzC2ot3CsUAQKvGmKQQ",
  "key21": "2tNTm4x6PSCiuxuVWeAQNsSLsxQRvG9qW28x8TVRjiWgp1LPXEe6Y9xGAARrQHeHuDJuQ1T4CSFpK2Db3EGWBhC",
  "key22": "4Yzxt86PTY74Gc4qMX7CGWncydojHZSUJof3LGoW8k1k8yEoE6RViEZuDfmAemvczNMsVJXNyELxWESC2rtTcoLp",
  "key23": "5JzQmj6uC5qUvje5sHwQ2Mhzxs9gibAVuxDfnQo998dTbYMirNtyvnRg4naD9GyuJbHFTQqkaD5wZPwtrawBG963",
  "key24": "2UuFyMvRN9QMzmoGU5tp1dbWn2BV7kD4ejiXjxNA6aDWwNrXS5PvxCBJe4vGJv2X1v1EC3LR6dzCfUjSAH7Uebsg",
  "key25": "5Lp9TrBSRCwq5y4QRdTdceVg1mrdLUYeVZ6rpqBnptkyuUscY8ha7iq3bwhEdaoZK2wYt3yxouyUu2ESs9UFwFKa",
  "key26": "41Z1SMSk5hAomuVdTc187q2ixzo3f7GTPpq86hZt7oJTnRboAS7CRpt7UhZcukDZD74YuLgMRTsitNHwtGD8MQYU",
  "key27": "674F2DBBoVaiEp7A1b6qeeqDGLbJBfnxkZeB47JfWPpFgDTQ6h3QYPbwRuDRLYwWjhXdnBkAsSryT1Vqk2qGbJfT",
  "key28": "2f3jtySku63ZD9m6oSQkhumEZGhxq98ABwsdMwdni9BR6wP4rxcEnnG7ekbhrSdeb9iZsDdGeDLcFBRWKtAsqpjb",
  "key29": "4qizhNnghFBhcCM2oyHMnLzvgfe9vbaEWdp3n8JLnCQsM6u1pJpkBqFN5ECqLYZv16uAeCFQqYLSU1ECNQBxLw5o",
  "key30": "Kv3MugiXhryQpU5FFc387KPCtwqJ8qjesc8z7Wuj2XW6nJ7K5viZezGGr3WkYXDxBbw7fa8rao8v8MGy8exBCsN",
  "key31": "2XidgkEaVb1JubtQLVwhWssTfYDsnTncx9GDfotzxEnVbW4Xxqpi2msyipVUrpYEC8gQ5gypNDPJzMHcbqxLHF55",
  "key32": "4QvEYbYdYhyk5pe6RZGYUeY9bd9tg8dkbcJDiwmnPScrzDxkDTKVs2oUMYnqVkBkNDpm8Wkv7k4mYzcQTNXtPfbT",
  "key33": "2P2xsZrjAXcJxGpNiTacntsbQokMXy6ZFRqYemwfJShZWS1HMop99d5XAkRFfoDAcp7YrE7JKnTTSQ5kTgFSnU4v",
  "key34": "6418MdTuPP1ga347LYhjE5831jzCk8MFH8Vz3cSLtp24DiBQVhsJV4YKA8pPvsciy3j1iVwaGF4bxL3zKC7cQ646",
  "key35": "2jvwpHxN67tgYSDeAyxmt2M1gHEsfdQb3e7e3q6VhUi2HBQ1r3McX6HEDeFhQjqD93Edu7G2Jm7VZDfNr7Rn7HQw",
  "key36": "4pyFZ74AUG8QT5KsByqSWD8NRh6FWTR1Q5T8cxEgxkuHcupM3WoPC4qagAQ2VMPXNF17JpSHAtTn6onXkqWmY5Hg",
  "key37": "4wf1L9CDoQuRGoFBGCxDHvVFw9o2EwBC1P86cdUVioKFj8zrdKBChFGY3PSSMsMmpVjq7NfbS2HbC5esZPpthZd",
  "key38": "4GgouXBzJRb3MZFbCyhb8hEyvtWTPkKX24HZVLQCkoqBFCHzJ4cEcFXajxfwXHJjASd8cRaoArLUyTF1j4QR7uLS",
  "key39": "UvbS3nd9mvCuYomgvrsnT28y11M7xuc9R7fFFv4AHfz3ebsGeMizxbu8ELp4etNMh1X7t2QFaza39PTS9nP6fHd",
  "key40": "4nacSE5bGi7Bg9kbXX1CtS8ncG8T4JjxAM2WkAyda9kwQkRMhW8DGWVB8eJQJoJCeH3BuEpUwzVagu95muZaXkrD"
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
