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
    "33VRnAE6VkJ2SfqPzniWYwkAF8bhyjCiJ6jrKu6SWc65AarzTcTrurfxKu34LniDsm39Dx9ffTqcYK8toPrEWgnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CW87yCTXdMHCmwpogVqL8RLphpBbtTwJs2ehC8kPGrtiipDBAwH8FuNK5Pr9EqiDfe6Kt1U3tW5J7rCXTmMUrZz",
  "key1": "2Lsn1kTGXTC1RbGizAWbjG7FcRKJzrAnur9jRFDYM8dResPhkESbCMcnsPLK6KFykzAh4yvtiuSjNetb5UcQEpNP",
  "key2": "SrfvaNSeM9YUaVoMDavCHQACoYAxUyd2zSRQo4pge4LqKYp9M9cifby9hVbTo3JFPqxSK9KC9sArzaaBvw4RUZb",
  "key3": "2rXvk7S8Rz7GbKH6hbT3EomF6zQa7XCXTqEua8TUWLHTuBBZN1a52VrHPcbh7PpNzgEmkccPcT1Q2ri4BG2n5xSu",
  "key4": "2d4hXZ6ZXSuDGGt5Sxfjd8hsdvv35R5K7PuMEFehq34CaafebeBZjWDg7Bqsm5iap4TeEPqcvt9MUEx6NCBpc27F",
  "key5": "3HJYvy8eTNhhM7WXaTuydngTNMVBtezXneyz2VFcMGhkbQxZC2aAAyhqiURzKWujn7AaQceTWGtfNepDq8KsWXtC",
  "key6": "2WYjjjhqw2hWhbHNJpQ2yLCa58j8LRzRR7t7kt4hRQJtjCrNPqTaz9wd5H2JypLxC5cMk4rzssCRn1a2KnCt3NGu",
  "key7": "4keCr1VmLiMFQk5hoB1Wzqg1zL5KkuXytLcXFgRcXBDj6Ld4Dv3JYqhzZdX5YvBApAbYdvRjQzSUfZLCE4UPzwmT",
  "key8": "3BZYV9iDL57F6HiRnkr9KPVqDwnQEUn3nyfX3dbz2zQUJqYwHfym33pXwxR8g6cNSyv7HbgCvuanDmZNpkenFKxM",
  "key9": "3cN9ypvSM9Q5d7ntMGkQ2zHKuMVJw1Wy8fCm66R8hVqcxjY4Tq7C7eBiuT7BgT1hxXXi8nVT8BfRcSqXev6G6NXA",
  "key10": "2PWD4bJhTRZaCGYC3Bi4Z1Yv9JpNRHKZikNWKd46AWqMHe1eN5rKY6ASwTtA2a7uAxstwyZrwSS8nyJ6drL9KhqM",
  "key11": "XHjULsMqZLXXqg5n6K5EMxmgNmwVH7Q6wYAtk6YGcmoVY1niRnB43ysghiuwvajxtiNWmGajgBGkvG37xpYffAp",
  "key12": "4a3pUjui5QcPQfS263NGSUSUKy6qZSsKujPAMY62SywU1QdozRFpUFZSXwpPhTm9jMFhWoabaKyD1BPec68PAaRp",
  "key13": "31RBrpMgEQNnUgGG24UTnR4795nBEVmRVTT3PpLmWve53HrrsMQRkmGnNV9dP57Uto3NWkv2vsZrdDyBBfkLh2EG",
  "key14": "5srv7zu5eRw1RiXuy6qW6FXABD7Qsue9nmZprKfQ4qB7f385wK1cRZvX1wUWnW4hJP16498uPGnmgSYHqHu2SQ2J",
  "key15": "3BN6UKBwmyQMnKtPj5iTmWHcw61NrR4PudJHr96Tx4hHrTtec5Y3mzgsZqHN7CripmtyvM3P15kCwbmJpdSPRRdt",
  "key16": "JBjLA1CWVtv9tJeggozgVSs6tSQdBeJ1ffwjSS4LQQbaKRA1tQ6xNA1VhKqyMBsn49Z5x1GMWiJPnnDzxSX2LP2",
  "key17": "beJvrNo4RgW5YV4U3ENCP28zkgxdcEeQ7EiPTme5mNsKtnFCuWJVf9Pqoe8PF8fLFW23bJMXpFHFWDGoHfvTjEg",
  "key18": "2ZVfqB3QyTidQn8hxLT9mCwb2XZV4vjhfJiEX2sFhhrTwgxfkjCtWvBKbzc2zrQwsqK28HKTQx8DCme91yB8PTCL",
  "key19": "2Z2Z1n97bx5TMQYgAxCFHVAEtwmbLxcCs8pS592tvTHUmbgWkMvGGynjxaDR1qhhBtkJtph392RrRHLdJE4RGkZj",
  "key20": "v9Tm22zwtpkHYeFvZ8tvZjjQZBWtWnsaesRTx5iKfMM7mdGP3KiEXxMLRguqapo7AMh4jCk1gDzqEHjUcvs7hWh",
  "key21": "2eFduuyGk2BLeSEG3uiKyneuZS8ayqutWKeXeEwb3hQyGjbwbBYHotsSBxLB2PvQ6M4tUTncvvvNvr2P4LWNCtFG",
  "key22": "voJaE2StBCUo6Qy1ERJNCNR87uipiLzZPitUy7L2jSo5J55VxWjxBjL1bBGqU8cqdayWhaW4k5qi3oSEfRk2NvU",
  "key23": "3Do2fUqsEb2aMydDuhCNnKr6gA2ocsirAfyLNZ8Hp72JYQnKTDZGymmCWogVL3xQXxT3cZJxjbyUKDxNwyFHp46x",
  "key24": "vxxsszTFMtTJ3UAhxwjh3GBqZ5jtX62MXTqGodGcwvm8Yg9CMgSQx2zwd6R9NRqaMMutcR13zZLQuPFDreRaLe9",
  "key25": "6jbZojj9FgPiPeksnkghCmpTyyoeV6ruLV8jcQVXin347uWY5mWgQgSTEU62DC4ut4PMCvhgsGTiy2neB6Gfc5Z",
  "key26": "2R47DGBQgJ2UJbiESUge2qKbfEgSRv9fZa4X7k3YFxw7Vx3kRQLfZzECbHhrKB9Li5pWuUnpMJ515dkJNJKnXJXm",
  "key27": "3UEZoq7qrW58LSBfoMp7UDeXztwCkaqonyeRmJHScTTVsdYsKPnL9gNhzoPEcxkEj8hgh8AWYt7mFjJbaR9VyE72",
  "key28": "fEjbi3bNguktEXde7TDEyVsUmpsDDTWBUzDNRHRR4fotBic4BP6T6o1T17j6z8V9NqnHcXZW72LhdZvusYdZqUL",
  "key29": "47b7yccrgK1sUvTygcK2utWgkXXBkrVy9PhigLPKenhBh5jViSJHkaXDpssp8e4oxEnYVqddNmTTj9GYTMizmXfz",
  "key30": "5JFydfwP6WXYwTZ3eZKXSigFSjspY2BXB3AxPdy3qRhJUgDurs6rnqpykA43tcFMq8xNrQbhXCXHkAQu94Fi3WVG",
  "key31": "4mX4UzJWbb8fhkhLTodMSsGtZmBJ3YMLDzgjLuFhDbo8qVBhCEMj5smM3Ve4R9ESB8pxP9Wenu2AVNHepKRgF6Lv",
  "key32": "4woaKBa9LGQUGsgMMPUyjjv9gpFW6WVqUJJQSNPGKs5qNzmoWgY3Bzgn9LKGxfZziz3HL9YJ1upAPB6MVPjcHhy9",
  "key33": "MtEawucSNLp4DW5oJiNp3aYsKZGaLAaNvYXrHXd7uAZ78AmK2mbDYsVLgpgv2WJMg59yfSWt1Q7pkWQwdH3Yait",
  "key34": "5K7rVsBWH5XqzNZi4P8n3FEmR3sJVwBPY3nNqJyG2bzCkTLWscTiAysBbRRPcxbSSqwZCVxvrqyG4MiwzdhcjvYe",
  "key35": "2WxCecmERVWmoGibyWxLEjBjx3BytGTC45sS3XnbBEYkV3f7f8ZNv6BnhsTVD8U1tenXxctL6v3yxotYdNXczjXc",
  "key36": "2uuUNzqzncbuKKwQ19mPNrRd2d61WocSS28Q9zkv2JDHA4DpyxUpESZV4LXzDKvwXm7NtbzFUoBZ1H2QXYLT3a72",
  "key37": "2xg1VutzAXCMoFrbysrVcpUGAXJu1ARhS4eANzJbmEwvdZr8ZfDpwq1at1XxcwufyW1pF89mFSrPPytJArCJSnEE"
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
