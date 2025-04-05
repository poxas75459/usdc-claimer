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
    "4oUjmXgGuDnKbqSACmWb4vgNu2FQMebUi2hJqGGX22MhSRXrsh9uRZnHKgfomzCYMvacVRiomgLvkKQX8s1E4hL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iE2yWz6DdimfeQxjwZmtAmaXH3T2Nti2n7DJGpbhEvCYAHJ9yvJQsjntYD2MBchBmu4BRMkZK4k3YvDbbpvePBX",
  "key1": "37kCP2PfxwQi3zvPJUwcvCxAeEZdWLUe9LTKLv3TSsiDfWyRzo67ZJph4Ho7PusYKdgWbA4t2LXmSD1M4fTSC1uZ",
  "key2": "2qTUVfd7RktW9988LWUfRB51Mv6KUFfEax4yRk18XETuyrpDb4zwbqaJdZKranRQhNwCPnNARoRqVxNJUXLjiefM",
  "key3": "8vnPXpgKN8zko2iMnjvgydrUwMZAmWWgGJTCAEdcAahBmUSkDXrJ1hWgwDfWw8p6Hg3py7KEzUmGxprdJ7EJ5S7",
  "key4": "t6ybkMfdWysVyxocEZKGAspH5LRTfzTZ3VftXtYia9v2r7m8sNZUy9YiQGa5zzPvGN3LKYsPiktzBSJzJarsRhE",
  "key5": "5xpY3LDHyUB3xCNePMknMS4T14ZUWS6t4GWZCr9bFtm3pj51qVxEZV6iLtdFopvbYrCvMZbs3YHyRunrws5G4dY7",
  "key6": "2ARJFBGZeWc2RaqatrXRaNN7wi6D8e4cVkoxPYFdimXH23JTqGAjXkZRjJuTFD2akVfmY4zQBCVRUf4wARzkxT62",
  "key7": "323RBKyQ1biY7gDwuzdw4SWnmZpWDHpnhLuskR5MFeRC3vaAtYH6AhyNxxUjUZSBMzpzRjx4S67LvoShX8xopuvy",
  "key8": "57UZz5TKQNpbMb9u1SUYvJJDHK3bCkqtvtpG149vBkmuVvnhDkN5ZWeiL9XkBXM9NwgFo7GBpuqjFPxvELS1aCfx",
  "key9": "32G1LDQEfVYghHZ3MSh1hz3H1k8rHJXjQvYxVTYy1Hgc27u5TNsntYXfVwpoNcSqzeYYDAen4ZWXQtjCKfTtnj6w",
  "key10": "5NcZkjyJNHhQX4H5C6kD4ZBk3UtmqLAwKmyw3vvGToT3XiUiBnst82X5FHFYkDSSSdndUhyudH8LbYhPnQqcTjRp",
  "key11": "3EJySB1JoKfsnXXG4nvYSYJm7ohD4vm6bsrebXdBqtzbE9jEpDJ2DwWAQmYfwuuCQNmtw24y9f6DvA6gPHyyWPwk",
  "key12": "65zQB4vHRjwjjC6jxcS67D7zvidMHiSpPCtboLihr6YAsPJncmKa2FDnpg8bMhsmtpq8dF3faBKSYKe3612gmXPY",
  "key13": "5SyPQprefyTD84XJUBCvnwKrDycEDLRFBMzkYBBGxt7qYRtj6mtRLWJtJQdYZcDyfUhWc2YwuY3G5zWEbpYT9KFz",
  "key14": "571MwYiwrNxGFSDNGZ64P79nUwK2qyxTPVfTzY4QfGGriUdaWetRB4yHqoUiWeRCioTbp3MMH3krw6fNSiKLyL1Z",
  "key15": "LYzbQn71Vu5st5bmoPycrAtptMiJt6PjyDqWs5Zn8syzLdrMNkjhUEyQLDNZYvV8i7emALzesMxfAy3Zk4vfPZM",
  "key16": "3DdRZRkfHDTYngtDyX6afDQhMwSFFnkUdrnjsNjPiKwWsipvwRJTHkcyt6rA3sfdmbcKpJjAtZWk9XRhJGNxqLV",
  "key17": "2GFuyquUKk7spEVrUbbsCB2vbjX6REXDG41YQN246dpG1eidKAF47Y1d1FbBQ9DVhhTVhgC6D2GpjHPpkqC91TPZ",
  "key18": "5jjot55PpDoPfUuE4WLM5PDPSHLjyT2juM47gT4jNYWZ9yWEZ4gsDPA4EDjJnkkGGtxpipAS2ZWSASEq3jMTPYAC",
  "key19": "61wimjT3XB1BDh8vX3zs6aq52V2CU5UuX3YFn3WmjqbEoYvimyYVyVEnqXRA12gN8HpoK3yi2rWF1vZ7HTAbG4mn",
  "key20": "4ziBRSWFkDUtraitfWHZwhChKzPaFGHtgm2wCKQZmdNC7SDDaXLN88pLY8H6VNQuroaS25PDqssmd6QcJ3fNbzEb",
  "key21": "2frGMhnKotrZhum57F5fwn57LtCzswSjCXRD2Rc11bGJZrp3ndF6x2GaQQZLkcEiZiDHUaDqAEC5Wfj7bwsvS3U5",
  "key22": "4899QivTwA1SmsXZG3AujzD43Dxrs2DYz4zs5vzKUgmBsREzZVKWg4NL9ydQpDSgrnpwMPFDA6CNCjt9HycfLWJQ",
  "key23": "3qmMgkpJJ8BjEVG7Dk6ppdGJjpZLrJ6dnUmF3aevgdy3RXMU243fwrs67sdebmoMszsEGGv8PbY6FrCRzJsTSNSB",
  "key24": "3rJJY1jSsaXwmEK2XJrXGMGD2ZUVoyTpsco3gw3rAsP9JS9KW4ErH41QEUtQ6CobzbGiPz3x2aNCg6nB63TZy6Eh",
  "key25": "64P7wCGVZcsMaQ59GaVVdLiReHiZzx4RkSsR3pxfhYkAHDchCQZ929MaaTwwaYeBhTnzF4WUpV5WosjWv6QLKpC8",
  "key26": "5XRzCUJKB3k5wD5WBjn8AAHt1HAzEF6JLp4DP6J72WNZFy6R9y7bM3xcviGendc5ic3HBc7YdGFfrM3F8Z6TVeax",
  "key27": "5wsrssvsYStnVfk1rGwHigwhPUJ4BA8XPJD8YiCXz3CJhpKnk5a8XxCdpNBGetyvTniFYQbn34hWPVaw8WiK5SkP",
  "key28": "2EqPR2pgkkXXzLyH1a5duRu9Y3ZLdREpfcPJUD1Njuyj4aXvACs3q9yqCZL4ZoS7KFedHW5PB9qB4r9SHqg3mPME",
  "key29": "5zntnoUutXGC35fS3XSiooFbb9hRjRSUU4rwHr36bgJMBhXyazfz521Y56mLN9qGPYfHKE1R58WmdNgPZy3f6Bct",
  "key30": "5rN6Wq236ocNTcpMq9ceeBuivSQhWNVfxcd5o5QHU86uH5BEezvuU7uBu8NcRREXv8ANyuWmbgyHqP43ccpdRN6b",
  "key31": "3STHAg7rA19kz6f9WfjNHKx4uzmBgQzfEukenJu5S2evFzdTEe9JmVTyJFKvFKx6npSfdEciye8WBWx1rcvrBQg"
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
