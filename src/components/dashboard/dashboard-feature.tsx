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
    "355beyeCrYawvBQw351BNSvHTj9yw9JWRf8EY8HUMHsaqxmhgk1qKwoGNRaQW4bNnJhWvUWnmt3eHxmKpQGzk7ZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qhUXE9n8FuGm7DzYQ5FSULAxCDuR3sZGKHLKSPTYBVC7axo3oUrnQQgcDA9asHZNAsXqAgL2CQmvH8uieSHynC4",
  "key1": "54edmAMPQXL4nPDQ7YGrnE5cHp48TYDCRiNqhzreAMpY2iTwVxwsoXAT3cZCCZWN2F9uLkmDXk8EhvMrKpU3gn52",
  "key2": "3nAUxJvWT7cgzYREZKFdhGddzW5JBeRkqX2Vp4gKWsj5wtA9eQKmEjindFnprGdnAZDFybmxZpCGbnxn2yhrefSX",
  "key3": "3YvVM7rcT2RYn3wyZiMpv7Mdcmzb73adbuPDJ7Xfk2FhtANCFWMwCEBvx6Uw6cSBw1rhu6QeJiwE4o6N7SAweaAX",
  "key4": "5GCiQkwLKgJwLNYp7giuADzSMwiBAaVnjSygKn3QAbRPRxzhum1KvjJg19CsuyJF35ntSEonxQGvnFZx5B7F5WMg",
  "key5": "4Pnh6bAafSQ5NRCmgquHP5RzKqsLtmareaMrzopybCtZzmYUWZYtTeHQfth9dUZg3oZWkn8ESsb9XPvdTxosJY2T",
  "key6": "5zKp5GBaJ9EAdR3Adc9LbE6iCZAizxe6fxCSoodh6ofdL72EmYqFyZvpnDrZDCPvVonAkk64qq6yfQjDgydAXJzN",
  "key7": "5Z1wPjXmhSfffgcSBookPsFs7yKbd9QdaSgVZywXHQyDD3BjncyQtJAhfrQa8srwiGeM8wsoVUjFkU8a7gxEJ6os",
  "key8": "5XrDnPFnW98W6UXQSJPm77rWNcD1n4UBajCzgtmFRjCsrcagBGRKfsuKPMUX4DCFGmQiV69Jff1YEHwhA6s6W21q",
  "key9": "3TY3GYT9bNbJCVWoX6uDpiJpV7JhLx1BrZDsG8yPnzUy9Z1eLUFeiuaCPxkENNrMKWjMxF2FhV4VeFQxXg72ffcG",
  "key10": "2UXuUzSLvbZE3YghZGKgCwEA2pV7LzdDxMkkxveyY5TAGYp1htoKJEgkBTHBBrPzAivUzgM8aG1oisRPLyeVBoHB",
  "key11": "4b6oonCC3mso49pcJmzJ2UMzn8PbGHMh6BYasDUg1uz7TrUJcUq19oEmHMnax23RW2MH3vZuSXKGUewMCiAuwYEJ",
  "key12": "qk9L9B6rUc7c65VaPaNXuvKnyRJSaPvevCotbzkdg6vigwMCWTdyGhuBeopgHg4Wt8AUme6Ymzr9ALsLHFKnV8W",
  "key13": "5zCVSXakDGb4tAvboiuYD1T16NuZssRudv1vMbRosoxuPrmYXwCXcW1idZiaGkKdiass6YStE4bx1t4gyDyz1e5s",
  "key14": "5HR5VytNMSCw94nJ4dtDQ5pxj8Wnv3STneBw5wWqs9e1PJBydbkkMnnnXmRYaBTiURFZvNh2QwswnG68xGtsZ2pt",
  "key15": "4n2uH5sV95cGo7GdiAZT2pK5doyVephLYdcNxEQ1AD3MLaEM8sPavYNkviUMC2N5hnkTtDRvG8LNYpXb1pz9Ygpq",
  "key16": "8bDscMsaH62nHCd7qvWGynscQu6ozsSQMdBbDGvZftFVHZtgsbiSefASUBKHPvpUpHV5f8rM5c3onNG2SFwVFHn",
  "key17": "3d7HN8UMozLTA5zSmNm2CCoMEUd4onJicnr7wcMuTtob8E5wpC6235m7UwJP6eipjRmVnF5tMy3SHikWDgWHyVG8",
  "key18": "2Em5tUjjSMxsE7GvEaEjVLir8mNkw9C1ms9Vk316AU9CZMeZV4nozPpEQdW7anaZjW3cgAZi3X2CzU1uBMzMQziF",
  "key19": "54nsd78yqDvmTDhcJmKqX7Rmhsw5Jh4Ph3AasSLJHiagXD6iMsJW2caNgW12jR3o8xWc9Yu36HrQ7tK2ePYejtJ8",
  "key20": "49nsqVF9hT9tgPDuSGqxfyBGZDC9V4bTmMnKFjYmQWxgWpxeYkeBha5bvi12zRyGc11VCAyrFN55uRjdQ6hW56Xz",
  "key21": "X6B5u7D3iSUqA7pSgXBQKMBgfoWFtfXS7asyrVxLP26wimkHggKMYh9xVAErmxuWVeB9yeQVJUBiaDF9gaXVXsv",
  "key22": "w5HKtQNoBkqkXBiaDYD9FQx79RSc7XaqmVDuwGYXNBXRP4gW9Rus1x3S13FH1nkbwXZGCVUiA335LbY5GLhzviG",
  "key23": "Zm36P1FgTuGp17qjigsJRcny2mv5Co4sGF5bkU2KBnvhFJPLesgzenntj6brDyMSb9L4Mb2RcddyNNdRtDkAzji",
  "key24": "3X7ZfHHK349um8kLXsAQCKAWdH6tGpqpgBrd1VQieZMdB9Vf1udttP3XdXyPC16FxbT5EWgNHEdzm2tgC4PM95FT",
  "key25": "kM4tAJ2YYkNxzVXUt6Rq89pRRWZWMF8AMokLiw5Jh2ar7zNcjpH7pTQmYV6iMSiBGfbgwH7o4aD3MH13BWLaQSG",
  "key26": "2S3UHEDYGgHkuRRMaiqWhW6T4GSeQr9445BQoVGbb8c7sVmcGn6yjjMZ24ewaWzLz67QREjK5KPjdkkG9PqG5azH",
  "key27": "3ovZAFTmRKQK477Gn969RRbR6YAny76YJQVDRfJ8CBPe1PGpeoGHFaSu4YPFPts2wpt4xFVXYcxM9TVFedwJpc9S",
  "key28": "3C7af2WhQR3UG14tuDH6gJtynsV34SAojGHYd1JT2BEjbnY8RiWT4m4pu6wQf258jJ3T825pkrpXwsifpKLJHv9i",
  "key29": "59qJ1hT9kTJV8ZBMGJBhPQgFuFJiUNgxFMJw2DbhLGnxcC9awijfYHfQit7Yr3fwvhBXJ6RQNxpwLY2jB7vr466t",
  "key30": "2CBaoB9o7iLDt2g3Pq8DveK3qh4zQ8pgbHxTvvNc1mgVsD5FXBmXqMrokJS6gbwEtky4gvvP6gRaWcTGF8BUsBWm",
  "key31": "541jJnnogLVQUCAU9ExvoLQNVqo6jD3FwYMNyjmTpM81rWcRAgHyMX5rx8YgQqr11uBPoSC6Z5hQZVtnYMy6gMgA",
  "key32": "2q2fLa6JPM2vLwpozgfHMmgaSTimTMHFfVgaFcSh7CD1HoLQPSJbxakYBjDXpjC1w6vodgTC7DdUKB13kCHjdjmt",
  "key33": "2kcDkx4yGj7CPCaxs8mVSa9jSqoZZhrwZUVxkJaqCHVjGjprBxFeKs64Zeo6kSiYWu8fRTi8ngwwqchtrqrVACBf",
  "key34": "31YXjW4mQpB2X6sYFCLpWFnsJCJcbNS2PdDnDDXxN15oEFfgQwNLEd7cFdzmtxM118RSq7ynuXc5ySRWH8A16vg6",
  "key35": "4FH9d3cXDKVrywkv22X28SJ7BHghtq5T3o8mqgwGpbesG4JSzD9FjCMzW191trLkx7DKH1eYhd3y532rWze34bZp",
  "key36": "36gVHW6qbB67XbthNTtmGpb4hCMEwPeNBvtj9A2KrXW9VdEzztsVfmu5JGCX61gZZmwBm8LaJ25AoFiYpUtwyDYD"
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
