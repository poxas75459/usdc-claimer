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
    "3uxpqBHyHzRACYBKazs6JoRhX9hmr3fTY2UmYc9FLDZuZjYNwZG8ueCPxkDRupgxbGkCf4zGXwDwp6Fhv8sW2Q8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DZSjtWZeGfnc5rTeAbesKXTTMzgSxzgzfuA2R59CEBxXiB6dFL2c3zyQ5BGidRbpqdVSaGNNS6DUZGGnPifdG99",
  "key1": "4emMr7RLY9XuzhLDYCMmDTPXS8McvyjcdoCgAugKK125ouBBbvGqXxcP5tkuXJT4x7BGzVf3AJYDzq7HtDuzvtfc",
  "key2": "2Zh9n3E1aft5LSPqasUdYoUVhDvXjAyZz1qDu4zWm7Z6DJafRPhVYdA1URGkPezi5UZJE2g1fh37EKe1w1rM4EhB",
  "key3": "2SVL7XPPAdKAH4LcX8nYNAMjnyjE4buw6bS4Lemnf1d6brB51NN8MMpuzDBbSo1WinuFDKpLqqBgwkfY5VNSWbhD",
  "key4": "34dwwrVvirN4C5c7799D6mFULWz3wjTzUrQB4E4XSMEZ1yJrXubDHtS9sYMFdKmzUXNeKdczNTjSQun7hZwYUrVe",
  "key5": "4HWP53LyryLLohVc3q2QFvENr7QACdh46Hx2C79NoGWMZbGYbeUDuTxMkMc7cBQhkQkKHz56AeCaVhhKCXzCsoA1",
  "key6": "3sSrHEbMWTDvAk7UN6ExrbDmNshbSRTbmF4HxzhbdbF7HVo5mUefr6uxk68Qp2inakPQB69AZdMPZFjDQUJJFGYF",
  "key7": "4xyLrtFZUkSSPp7aFRseSCKgH4Ha1zw9tqCZgJTmFJQTjdFdAZoFr81A5RcvWD6fzBz7aYi9Lq9WDWsazD4PVkxg",
  "key8": "4zSuHi9ajuACcGd7Wmjj5a4WGqiSo9csZoi9yer3YkDLKhGtq3ozqFsNq5eLeCckoVDDbFJUPn8Z3fiNpjVsj4gw",
  "key9": "617fHBrJefA7XkpW5FRRL2ikr6j2JTQ1HVHY97JKva2kvNz4XGLYsgKBD48n6AU6RmYHg89gqGcqM1oPd2G5mbKV",
  "key10": "RnjVu24rYbVDmfis4dfWSVq164Xv8HGxiKBR9C9i8T41Uvg99SADuDXLugpffW1fH9V3BjmxXPypB6e62iXSpGb",
  "key11": "5iGs7oD9zjMWTXgiWx11PWpbTyRNU1yPfzkXsbwzsym8A6wsJ9KwXVz3CYqrdoUyDB8LrxVBMTFMeyP19qQ2pumG",
  "key12": "5smNNKNb9xRSymuXtRWnSbquu6iLNZhVaDwCkszTYuaVTtKXAR332pbDRyiSAG4e4DiRHfHgjoG8CUMufiGJvFGj",
  "key13": "53r8AbgtAWcP4UncXiQaevbZ3oKRWvFr7KeSbZWAdKHeq56e6omNVdM2rTD91UuJkCb4PeLDxnKRcYB68m6iL1Lc",
  "key14": "CAXSnVHrHSn1URHGmHNuyAgcvgmbUJ8rMSxNMWwva7FZe5K2dQUuvouTzbF9acQw5exKvRiUAb9gNY7g56HwYxX",
  "key15": "QxvDg9h8wsMuD5jpHp8NTHarZE498MysVmJFGh34sjS3TGbpJ6AbYwmbB4SG3S2UU3tYSo9vtAqrW1ZaBSWDeHp",
  "key16": "4zaxoDHenygo6zvfzq2ek3bepcjAC7xuL2arW81M8UhEouqzs8yniDuTRuEHnC5ucppwmjoVnLaKAedPqGWWbW9Q",
  "key17": "63w2Tv7yr9aLAq8eZy2Ei34C28QN65Pb5nEEibJrgtkKU6srt2EoVQMaDhWoPcTXiAe1MAUfCNwKks8uGTVatjvq",
  "key18": "3mp6Gk6DejzgQFMrbHXe1xXPoC9BJf6duocmx1WC8YvHt5muar4D65WuRRR6rBZBofMQU3PDt3rkaNNUtZ2N3jvv",
  "key19": "2feskHwBw2zvrodvosyFepwBEc3nUT35SzaygVTRwqVQDdw6MTWfk2W8ps7A8ZkEf9suYwdkzczRMG3Ep92Fxt48",
  "key20": "5bAByVpjuVnYRpbuBN4rSrfCiYYvr81w4x7prk8yD4qm6x3GWVdeyVKfP2XBFvw6BznL42HgMWZwVHQDKBkgU2re",
  "key21": "4DmyyDiu1BQRiu88y3gNcJGcHQpLm7BzyaJyH7VJU1jr119H5AghxdtnPuG6wuYPgCmAbAnGRV5MGzHs4frzLkgb",
  "key22": "4eutP6NGyzS8xVtxuXH4ccfopFYiyYEfLKbJCATrN3gU791q5THzaG2pqVcwbuAPyCxyRRMQPpD38rFTMMbkbhh5",
  "key23": "3spZLz3EZNTqaUCDiWStwNyCeTSJXN6nrC4wCgVFtyjWMEriaJsKLZ9tc2RqyrVdHXHS6hWwsjiL1t6JvB6eqgqb",
  "key24": "2UMti3nzLc49shropYkER2EkFd6nT4dxApUeeHNLrmBR2Lj5EjXuqy3Kr4bH1G6BLLN2X2ErodKUbDaEE7TcQuGP",
  "key25": "3CfFYwtvuJPKvtMnqTMFhzjm5pibpUh8Ci9UZV4dHDDhytfwu6BsD8judR3LUkEiyzDPYy3xzB5WBuHearJVf6x",
  "key26": "3i1ePdrzqBSywvQEv6yXqXH35mjAL6b8WtZ7LZBQuk4wHbi8Fo4mjuKXqktvx9hiAVUD9tHvdo2sFiTUQ9nfS8Vx",
  "key27": "3YoZwUe4UiwxrYuMBJuDs2d1MHNcn8STaFfg48ahuCnxaVCyfgaFV1m5aQYzH8xp2QeRzeD5vyazxtF26MeTogbG",
  "key28": "48PMp8P4UwMR4nc1romrPKNGDaif6zx4zrhTkWueAcD5RtosY8Cqg7o1bmU79EKxZmwLogSLqanrDrpy6MQ2aS4n",
  "key29": "5KCEHNurJLfqJXKs6XqgwR12ks86Ur9GrNeAwpepcXE9pzH1Jr4F3cT3mN1icTbrxmV4upQn3cphWgsMj4K9KP3L",
  "key30": "4d6MHNGxrhrYAWPTwaPiLyfeif8RwFXFSh7nzWagz9xL96N7ExoNxpz9tVB8k6LYpEz1eJ82NqDoDUyA45BFmj3f",
  "key31": "uFKfHNWdNc2BJwKpZcu77k2ULYQm3RCHVZupASA5K5PKJJKUFZGKRzsnUaiMVofCBMYho8xeoLm6gbopreDFeMF",
  "key32": "3VYoyoPuA46f8XddAQfHFZXVMW89RAizFcMhhf5srhAojYVhTN5n7f6LccC4CLcdgN34KvzdZFmACFJi7o1gsuy2",
  "key33": "2abBNzV2bd5hALaYLsW1V2BB5vBmzp6D6tmhsMhNKn4snP6jEBAt8qxznbTnHuWsTkCWmGqjeuXJxkqbbuNBdpaf",
  "key34": "31jwo4FR2M4phVXntJKLG5hHtXzh36U2MTyu2rHT6qMrcybZywYvD2UpiXKsMGGAoRCfETzRXzAdnq1vjzzUNKT3",
  "key35": "2rM4aVQmYwNVTspaBfyyopAzvj4RNACQ4M3NpihS9eYwVojtY4rYctt4QYDtVtXJq4kMDx8N8iEu7jpmULW6oWct",
  "key36": "2iuAZ9jLLVtAH1craSWK6zqVtHUVGC3wVCFnv5ZeFipGHFbSnTjEp5Miyq7mBcAAScRnUzeXEkaifXYmBFmLMUM4",
  "key37": "4SS5c7gPLV73dC6fF72cuffFgD1AaD322GVXANvjH6TPthPd4ZQsBvZRBnaMzrJmcKAfWwwrPd5yv7juvuweTBJD",
  "key38": "58HE9ZpDBwD4abnp1kGcD8TvHPnWovsirqrmESZkc2MCsaYRXRbWP53BrigYpYyuAKQrgYtkN6KpKy1v7hs9Dt44",
  "key39": "YYiz9pwb9nk5vkTo6f5HtL95DmADThKHGfDTLfksUYPorKAQ1RkBiTRdt2HXxupUPjs4pB6HXLGDyZdXFU8NJjv",
  "key40": "2jbbFHVPJp79sHUs8NGNVmV37zKNUS3kEuTsPiyUdcfNEc4msiHqmikZ8a8aMQ5stkBHp41Byn9boNeF8i6nDmWv",
  "key41": "2PrxZZkXK75KrJNCq79qZ5ucz3LjwNZf6FaSxfMtWxARYtHHHXyrxX9sttii5jFCG14gVRn4EuymYY3zHxUUDtze",
  "key42": "5K3cZP2z4oDL5vYqGb7cu6zRFBqeEkVaChFz9HYcYpMjKSmcra1RTHQr7GUbWjQ82EoAeo9a6L2EhdL8uVv9DRZ1"
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
