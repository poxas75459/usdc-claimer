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
    "2PVPUfxqGSoH84ttD2ksGCerajWSCzaHsRdrmNZE6zUdwidgJe7uQqEaXb5phCL2mNPnzVrAMRW59GAtq8spbf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fsLMpqw76w1oCTbakSNrVEXJELLcjUJHJJEXU5bUHfwgQBP2ZfiMrnebNFVwfDYfNnSUCFJxMMCAkcE4oxyzkXa",
  "key1": "K6f3JVQ4FHc5YEuNVG8YLWzZSjkoVaBPENbA5swPTuTr7KznM5KzwtDrW7WWNgWmF939MLtbKBaWufmSyRGzoNA",
  "key2": "BPrPNhrJQ32doZLJrxwvzG7n4FeTUXGtpWzyZMsDsGMxt9TqQdjD6EtHUm7iwQE4xHUBRa2FU8CDvwWRnCvj5t2",
  "key3": "4cutKU8JxCBRcEj6NCxxrkfzJgVAkbDL6jvGuxxqZEbiQLZJRZvHToFiwmh15kaKSdJhetWPbos4Qxo3HhB2GgkH",
  "key4": "2x1GsMqYuLCcQ6tvGV45FyCz5ZrG9ephQVTWqzEmkS19pVvEy63uDeccXWrqDSXnqrL3quanFXuvDvakziVgayna",
  "key5": "2ATKuwDRrGVRbW8cxbfYo7f8ZYq3uy4eiYBnzDqaPNyWLq7No92Fw8yUWYBFmL2s5cPSwvGAdX1PcuVYcp8DX8h5",
  "key6": "oZkemeRvFqLepspX8kccMBsHkh1DMjTJurNh4i2rFdHQC2JNK27bWvC2v3ywxD2oka39DJTZcMQKwruDeSn3WYM",
  "key7": "5FcdScMrDUJY691Q8VuToMSVLfaRbk3epFQyJCe3pXomomAtCdHdoWftPnw1mq9GGb5oxDPW3oaVcHovUX46etcM",
  "key8": "5RSfZWWP5ScwVtTRx9SVpcKTWNf6f6uKECo9r573yxnAhL9TRrWSND5c9he8tY1RiC5Sop9Xs3YAxEhxVHSMPcR4",
  "key9": "2Y7eZ5bmrKAFNBeCpfTJCwg8xUhfY9e6tXtWwgBpNJTBpkrFqsHMHvtA2dnYxogiK6W55xcwqdJ2umfXv6ZCyAqj",
  "key10": "3HjJ96ZkkSKhsphuqUcdaYuKtqgBfoHVmVwzvm2jVgER5dE1vo8FxfUpcXyaKz1FySfVU4KmARcD4SfxRawfATtQ",
  "key11": "5aL1kYb4yAMuPhpbspaDVdCjBDHZk2RQS4PPk65KwSXJjPZgyw8dLu36orDYks3G4R5APfGue78hkSE9nXeXjSFN",
  "key12": "4ktbd5nyzfxZnZZ7zsPbxWMvjn5Lr6UtsMPUPUgkNTpi6Cn7Rwz7E5FiPWLGtNSnqw3LoYJC85omcq1aYRGp864w",
  "key13": "3RVuqqveSC8hEzZmT9QDTedL138fSusgSfBzM9pygiY12333722pzcWRRPhaE76A2ZWdo5rkAwsBcm4CEedSHEMT",
  "key14": "4vuNQEuwhEGdUPaM7xgrK4SnAML3jFMAbp2RDzVvJYL66dJQonpjSdj4dDXWRKPmcd2t1pn2zqmGjz239sYn81rD",
  "key15": "3veiepWscBsrVEywDCs9hA87KzM3Fk8M6Mq7QKTXnrK8mnFbws7VW4cEpcwcBCBmMhYuZdgkwGQJqHst7jFKUn6H",
  "key16": "3SxC85kUnXDvfvKtUkDXvXRfccz6nWpsBVSEBSerZkT7PmdJeZvigavjogMidP8Tywp62mvLvJV8xJBvMqVJDqtc",
  "key17": "3R3UYGxj9ajmK4EB6AGT6PDonk72pnt6umx5ve1RW1HEDXosAvdwwnbKBDgx8mrLcALrQhX4M9BB5KBkZBKUJWa6",
  "key18": "45q4ndCdv57fG1vMdnSTxd3u6UhTaVKRymfETYYwP8CX2QwQ7av8eFMk1VrRcwbQGpX1DWkLcLVmEd8fFVLbFLxk",
  "key19": "5sU9vgrAC3SgP6TMcagQGjjV7diL2ZUQnzBxVeb4cQDEkQ7mW7xy9EY7MKGELbhr1QWNUkFn3YQdMPa9BEf3SwuQ",
  "key20": "5SFodjnZY1Ybx7eHzNJHTk2DVmxn6xSrn5JyXbGDtyqRJpGjn2EqTqzbY58VXZyJPeZ5pWRK5o29BpwAkv3mzz8C",
  "key21": "koEJTKaxo3n3S2gBV9RMYxXAVj9bfuvyahHpwJSyFMMbfGUDQgZkTDhJBy4Bh5LAwbXgwq7K5efVGHKU8XMCabq",
  "key22": "4xYAZkJxGVv7VKGuXzj5pqh5idRTEsvw8raPndnwwJ5CFC5Gyx4qASyKGan6oH522NmchN3jEKovAgYd7LU9fmi",
  "key23": "1rZznKdMyky9xhFpD2h1ZCuzw3SVTWiS8NmHWmXYAfeW6mkVtg5xKrRhbJZ9zoukoBfnJGgjThgBS8RLvpMFKBk",
  "key24": "4EatKNDyQVSqzFFo6LGCgy3r62PLSLxx4Fg9jJYFEdYXehutJR9KqGpsz7KDpnBYXVxcCKfPttTsD7Qt3PstSpdu",
  "key25": "2x3s83m4Yz2MHzsSDR9SpF6GCxUjKpGdnibByyZsfm8RkCb61xosGc3zd2iqa2usj1vSihd9za66Bk8bCps2T5cJ",
  "key26": "5LtvJhvA5Zdcp8UKhisGg3WMDbGfd8N4U9Ey9MXUfNV7xsgK45NXzAwY7bJA7eggiVa94nZ7BB83XXb7Cq1Q1Ztz",
  "key27": "opxVf1Uxncb83Lhx1wLromgcvGXiNqmzKZiKgy3e6BKduEAYwwi84GDkNYNNGtHXDDZZDTbREXd62ZoNLiKQgkn",
  "key28": "4nZFRv5DDs5ansPM4qUp65XzJqgJPFehiUZ77iHL9nXs2q2LcmsaQCirzRern1AALK6uvqdD7jeLzeaZ1SespoHS",
  "key29": "46SBriij7Hpuf2TjhwobqYJm2SdY4LLSZmMy7RVxieeJKvKVP8dKHVuQhEP1SdEbXqztmELTUqyhVjYzcB2etTuV",
  "key30": "5adQJ9At5um51udTsFUBY6Nat91fyUaypzJxLeUVFSwNT6zn3v3CzfQFrTeEeB4vMYHpHottW5gDUv3ExBmaVrHx"
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
