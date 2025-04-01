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
    "Fpzz7nTtGhCFTaQXeBJpm1t18sPe6oi3Frw7P5AdchKaJcj5EHfGBPCa7m3eftNaA43diVVTSCaFUoc3vB7gMV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s6DX7Gc3fraRhSxMRR5DwwmzAwKJL37xvQFkgz1VctBqcWVuiB8EfZCYH9Q8Gzcy2LuAn25wxsjVndcugyCkjS3",
  "key1": "3ZeCTxrhjVmQvgtoeE1eErxZQMZxYkZY41tVQzQMThcZvW3jb5V6iEecjDV6aP98YEcn1bDKjqE6wN9W3aBrcHUs",
  "key2": "2eDhaoS7PYabwRkJsngLLRS5pHJ2rLwcqnZuAjwrQiHg4HNkNy81fmu8jFiGdjf8KkbMq9kANzZYenrpcgHffHzX",
  "key3": "5TDkVjXM6waTi5Awr8HasJr94qmCCxMEP3GKQSmibG3kKuTBbQL29hXQMD8w2S9ceFgLUymKj8Wig79p1PU2fjSq",
  "key4": "4u2xLh6Rf3dz1b5F8hseee3zuiFkDH3iKSSUdPxSfE8YnMpaa1gWpEfvqQDp21c6Ly6grUzz1sMG8bSZEGT5FfAn",
  "key5": "4EKUNjh7nqZipex7ZGSgpmqX8t3DkqrBjpuSNdK4Cva8WSU8fksxizqLgAWfKhwQSRrCesPbWbm8ATtCs8D3R9ci",
  "key6": "2RB91thY4fF74H2gioz32MuF3GfQq1sf4iZEJ7wPhugNwD8eLp8rvcJB5sTV69U5WG922qKuzkk3SMchgFA2FJxt",
  "key7": "iqURtCyP6sZcihi3AB5U6h66uyBY7Vh7S4MmJChbv28S9vmF99Pua51zKGX741gziK2tuw9tGXqFWtBoRPv8J1m",
  "key8": "3dhqJkXGnX7qmKhXfJP4Jcm4dczdKNKJ3kQRP6fqCq46XTACe2aBDo8N474wQtrZcq3wXYmEyxDEqR6uqLPuDcdF",
  "key9": "4NGPB4hRC4jPdUSk2rVigrcDpBwnF4qmPBP2TLi1AW5iP8pLGebn6qeRHb3eWZz9yRak6rsGnZUhcrykBWNdy7ZH",
  "key10": "AAYbknCkKp8aq5qtcDi6iMSYBFc7XW8AXcXG2p8Z4YavQjrtNxUXL8Uu9nyRxsbpwXFSncDR6vfs3sFv7NigPdg",
  "key11": "4LmWb39WL7YPcBcVs7sXKy7NcLL7iovP33NgNtPfRCmrpW1f31nWK9HjiL2uAznUk9WZo3NZZBhFEykVJNPsb8Qx",
  "key12": "ZFNFxH52yXYXBCVdaWJaXTJxWeJuts29Fp8yHRLFDRRe7EQLyyfnRCpw6PCvU8Q1z6nESGj33eXCEQ1zgwJ3PSR",
  "key13": "2PktTpjEGj81FSxsh9eDkpPptbhutJCrtdFgYjrxfxDpeCckcHUf3gMb5KGedmT9boqQm6wYBmq57HB9WgCPvwgQ",
  "key14": "z7LYfhmsEjDrMnMSP3JDmR2mYS3FUEYSwrySkyKz3TRt5LYKVVYmP1QMsiCpSXn4e8NeQaLuogTEyGCqxh6aQ9s",
  "key15": "3zNtiiGvgVkYwGsBbBJE15TJB452M3ZNhRhTCyUfNjrw8sFK2yy9EPZQZzrVLd9yt2xfKxT1ZFdw8hZhxDAJRfC2",
  "key16": "3dtynd3571fL6BgL2w637PZQNZE4dsBn48aZ7wSt1mZbbXAYhMZtTx9mSWu1LaQ8mMQBURQWMxpeYrVzh56Cajpc",
  "key17": "3LhyYe7uRfa6fEg3LpgdtrgiUgNotwGfbxguMjh9gzrosbb7Wh5Hx5scyVU9k2BXAD6BNwGWmACXUV6Xp33eWPi4",
  "key18": "2oo5vZ64PH4VQkWwZSYoJk5sLwb6UpXHoQwLJQXyoTKF9rfQSNEgx4gr6S2UDNPja516egqUsAU5uXZX9nLP55e2",
  "key19": "5LS89CiHLS3AjNCZjKWKq1EbPx8oXi62GSbLEUb7KcTZqAgxx5jJmUNqYZbwmkFpoXTioPW7fnfWhq6GTDfuMoEB",
  "key20": "5sd3cGDMcJPmwAVd8E5XrzbRVQsLbkgRMUzkT3gwiQpVWdFBE3HJPuHKsVManq3h7ZKbnrNYbcgFx7sUaWoiUNi",
  "key21": "3HrR2MAYR9FrHmxLtwk3zWvphPaafXbSf7qK3p9rT3Dp6h7n5mHFFa21j96kfNsK7wxaRs2v3DhXGRaMHmga44N2",
  "key22": "HjCiYueR2oqogJCvGT7jc7SEuHbFY2ZX8fdb4GsY15ZQV334eJx8fBXqqC1irVZavqTFaoxajv2SHMzEUYabpEJ",
  "key23": "bWm8Pkh4RVVCWWFb455BqmNeNiu2z2Mo6TZFNT1M8UfdAYs5curXhvNWJ3KhHofkY2isjfoFH4wFcprYgR4wbLv",
  "key24": "2oyBqCedzjkcFcWPgBAShJtZJUcDmT9LVL8tySo9oNGaAnCsc6P9c7Q7EnMgzxLWWZh6tr7bNqXVSxas6QSzjcHQ",
  "key25": "26at6fbM17SWrGmqsi1mqaG9FF6qPF7c9iVPSLefGEzHLPXLMi934TEkpt8cHFVHyvqEVRdNiQoKBgSEVtfiv5VD",
  "key26": "3PpYVtnVKMxvg7pFVkGr1QmwU6AQwd8qejfiPfgTyPs8z7x7uSpEXBTEZACBnFupB4cd88FH9DZRB7abwiUu9Umg",
  "key27": "2YLwPAfLjszviwUEsKThcWpLAUnExaP1vvbLNUzpmmgpBB47zA5K7K4YWb99VUNpT8kacTdmrG2RjUn3WXNyYPFs",
  "key28": "5gRK1v7KGxDxQD9cSV8wxBvSwxLdqTZCoh9FWCdJByhYpCayTyiHeU9QBD8mr5ovFpUzbYVMY6uhZ1dSVY4uGTBz",
  "key29": "2yYfMcxTfrvZdgSvvRS2ohsjVpPyubC6SkRHHFzEjrUJ2EKnZgf76z4S43QGLkHov9QumyFwZs6iVbdpuuEWtTXJ"
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
