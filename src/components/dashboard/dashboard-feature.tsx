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
    "4WnhYxueKmthsgLky5Aj7JLvaUrqPmZoXwKVCd69d2tqvuXaMXAfMQxTYSPSGmY8ckFnkHBC8CZ9whpRGM7he3cQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NHWVJSLA83Uut58w94NYamenuQDXbNAmWEoZLpyPSAhJJk9qWPnBGgSnUQDXojPuxHmn6eY5Zky7d8N3hdn2NxT",
  "key1": "631dBhLCwJohs6kavb5zGRkwTdkWmipiakmSNsGxetqLw8292wrb3pD8C6zYquLUJ89bK6jj8MNCGjMpdBkifHuH",
  "key2": "2GBNLigJL3RFAJri7LXxFXufbcbrBhqv4rArNapopihRoqLRgainTTmq2JxNu6QkFNSFBJPTivyH14bhGoqNoRfL",
  "key3": "VGWZr4hjQ1S1c1UF7dHdJ5ky9ve9MDN19Qk6VAiHw6Rnmrv6kTev15yHj5Aa7S9DQguREV42iCUMUhpAMTpUVQn",
  "key4": "4JHtBpXqtwA68bTGQTuwfq363b4nvNapUAc2uhTjb71ZZ2a7pyhPu9abFKXc3twaDKuaUEM7KxRcZjzDHcBtuYya",
  "key5": "5y9EyFEUHtPBBLxcz3NGMVfahneVgxynCTqgCAk3xqeCoKp5gTQyRPFKWWnEnRRkq5iyvNcKmgcaUkMkRNvzgS3q",
  "key6": "4MZGaczp4hCuZ6QHYodVcJ39SG6Q5cFpZ974WGBqJ3HN6mmsg16z8V4gF8iTWyL6H3ZpwCHjCCSZwxsDD1XTakSp",
  "key7": "5eaR7LfdvpuWPX2yKHEcDVK63vJXYfeF3iSefsVbJQP36LbVM2ntnURRkAPNJhScvUmpca37Zs1231Le1kRp5TqS",
  "key8": "25YXvqN8dhHPTe5LDpukLsAepnDuYbhzFC1wgMwcxnbkXYmDxSdYoq3q3AzcFgB2d6y6ocTsULMmvfCKfJgDaBT7",
  "key9": "2eBesVmVDEnNdpEaGX5DuZQreTJ6NtsPftVM7P9EYo29EeaJwXgL8aaEwPshFczgRFwniDTjmobhq8yfovHa54Ks",
  "key10": "3U5iUZVSCDWCQGNueSDzRa54arn8GUZ76C8tMjYj5pJfgpv4pLFma8nWLrRjcqyUKg8Ee7PjBYTFxY77wdE9Dp9H",
  "key11": "2kXn2BfUk2Qcpd94BxXSqPaAhxeuP1n5jUVokmX8KfPcpDpG5XNpVGzKPzseEfMbuVPkzFweQPSuruLGhnfVWM88",
  "key12": "4BxiCbDpzwh48u8Mz7ZdsPuSt4BExZu6xtpL79UAEBicmbY2Ak1gez9rAkXZGJ4cJrhQuCYodz2ajDqEZakRPqLJ",
  "key13": "3Ug8FUsVYhkkZz8K8m3WydXkuB6hYkktd3SCHoDF5PrCNkFqrWRsXWXigqKKwccTr9LXyHachMth6cQzGV2WPsvq",
  "key14": "YC9GcNtbf22TwAWat5xEJtDLqj8PcEtSaxA8N6GwvTXra4vJBZGTvf6FxXKcjQ2HfaF3Ry5HUBSVb8eWmmnPnwt",
  "key15": "3oBmA3b6rNnGuH3Qkzx2U72b98xeE2UyEqQ7qCJKhCbXgVUKJizDSSiySzoh6RRsnAzohTEyPhq8VYKfZPovDVq2",
  "key16": "5Zu54gAdrXJVRju8TfdnV9Po9onYbMAHbS9rFhaGyGR7eqnhRVF5EY7akLL12gaHaP9wZLtLcHF8YU6CL3orRZMz",
  "key17": "3Ypwphe1ftbeeMoSpbGWFwiPzGVEv5aKWXYgLr82UMXKZF6LGu4Vvyh6ta29N6JFivmLuG12dZXCSo63vhqe4Yyx",
  "key18": "3MYsXpgk4haeutoSnmzU828V1SEjZioH68HGmr9sCaDmcXbhn64L5yNp3m8TpLVV76KY9dr3Cxb8gK6Loc1fBqka",
  "key19": "2E57wiSPEBqaKbMdyoytuguQJmUQrpkVau3dguEQToAaaLD6LcwWPaW49jXvw6jC3qh6zxTzoD644ikM8JotnNF4",
  "key20": "4nM3JdXBxZ2LPHPCpZBW2hrcNnvZx8iMDuxet9FmU9K1wmsysVUNAhZtyUjnn33BgyDARNTQ3J7xDXWVZ471xajn",
  "key21": "CJG8SATKZsos7GTzak7HqXb3f8TbX6wnBHeKo6Mjr2tfrCvNekoSwEh8k9Dr7WSbYThWokaD68QZoXVH9RfDAin",
  "key22": "3Lhqk9sRsnX763PY2pU7TqvPWHPvvWNyyX4DykkP1QZNGw91oKfg7Xvv28X4imZ3Ndf4cWS2hejiwKmrVXcSj6PP",
  "key23": "4qyhuDvWwwwbqbzW1MvdQvv91yMD5CFLQAm75SRVtUr89siT9zfNqeFjyM3KrJrEAcJ9Bs7KgGJf4ASrjr6Jsruo",
  "key24": "tFhAoK9WZrwKBtv2E3ePRfHhADQm5QuSefj7248YWJfzepBtHEUEnafCWPCtxQGrTXPRYyZjph3fmKk41rr83LX",
  "key25": "3RnxH8NoDAYMM5frcVUru5STyTexvMoPFME7uKup3VXtN68zWh6275yHQ4ZQ1TH9XNXxP5oqobHh4QirLE8dio3e",
  "key26": "5ioirzdgg7BMtZRCkMWWqpT2eMKzpSVk5U49WtShiZoguXkRErbKR6VauS8z8vbe2J9MryaodNcXM7di47W5X65S",
  "key27": "4XpPxWnzAmLnLEYgK2FpfiuaQk2Up3popCB2t3Vo8xQK5EXyDX3yuzBXeu75BM1di4mbbJdP5PbcrZ2htvufMZJJ",
  "key28": "3e24cMPqJK4H3uFvKAGjv73s7yJg2kpbhRaWUX6aQMip4JkPPQ8x2nmU3EFDcoLeSALnPdEuzXtEhkgxNefY9wJW",
  "key29": "63U1XRpseEdxTT8NAiMnEmQtsrNkNwnrr9sQfjVkGkRTxrkZFcW4pWpQWiSXknsBFMG8Qb95N6HaWGiK15LX3phq",
  "key30": "5E3UFz8HmHmfdhB8EzeKtWFFsKyhtMen9pYeZcJvtWQD1SHAtSrhAG22jYdBLuYkjtLqDZo6wHFwHbQ8yFJ9EC4A",
  "key31": "64zqH9NumBsSopnfVYb12xdYt9jJDbZFsCc93qX4bxG9bTGW3GarRSbzH6sJQrv55WEta1bvCxgXWwAH75dKBngN",
  "key32": "3q3NZ1KmrvvXa4gCysZAPg49C9epBNg8rPYTYruBnJY4GFW9XX567didamoBZoD5Pf327g6BU9JXarj6auHYn2RP",
  "key33": "44UtBeW8t556UReC7vNRt3MMgu5EQJuaZybsZYtyWuSxbED3DrP2NC4z3ypo4JwntJiQmyiF5E2Ptbyi8FBLtthH",
  "key34": "5vSFinwEGBtfHcWaoNvFjxr2iYD2yi8bdZCFGqZiDCeuZhbNs2Fsn4dkoejGppRgPModcp2cQy6PPwfWx95imqqX"
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
