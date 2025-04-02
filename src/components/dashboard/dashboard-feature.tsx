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
    "25bfdipdSfaEwbXnL7VzBiJvuq2effqWqXXSqz7x6sC6AoWWSND2P6sYg5K6GfC6iupchBUf1Gra1kv6X5xJPtEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfiwevPH981p8wKGNVDsUoYNzjwrLjTj6V7Ug5cU7mQ7bdbXC2wDeWqC3Gt66K8iArumT97jQqrN9Kzqfb7yEnv",
  "key1": "3E6xic7iJsHFFxtSj5FwukeeqvTKm7GwQutEKN7NTgSa9bBz3XRfoNdy8SwtzaUW6dpCEf7QbhHPumvZ2CAPXopG",
  "key2": "4DnXtksE8CuXYktyvHUxdM2yfj5yvCsfigsnwfj9CwTyqh6z7wBBBXCN9cT4S7wvFQ5Fsk1C13uMc34ukcrmaDFW",
  "key3": "4nDZNcjjodt611xBKCtweKrcix195UtGZbDm1oyQHSXf2VDsrt4qoF5kjv4oMWTwuUJsLdmEbNJnKMkcBxLS35Ce",
  "key4": "D6GvuCMLXQayxNyKec6JGSaEs3kXhQsNuAwdpXF942fUqoHHusGFeQLF2Ks2A6qZVmSCLbYS9hgFzwMpPPoobg1",
  "key5": "3F7KcENxUrY1rNgpwDdgCqCwtwYjwkgKyYznb4MGm8fQwdf2ydkHGEVM7Wsh7a8R23buAA8d6LhRTFksDfSSuje5",
  "key6": "4LWWqYk4m4zQn4RC76b9gLkikNjMZ1VLLRtNksf75ZVXZMUnyW3TRUUUevyZZQfaedR1sCHgq3gjSnRCQvGUKnrB",
  "key7": "2pYkkTLD1e3VeiETtczJpd5gjudVgSYC7ZHQpuNNaHLFmhRWE3KsB6AtNHBnzk4dHEj7TnWeRAXk1bkKUkja3hqJ",
  "key8": "5PwcZyFpYYArXCvp4iSbKR1jYVdXBMuUou4UduzqNzB5TymnB35Qk2CLFwfvqigVWwnwcrzKwSVd2xcy1H6tTxZX",
  "key9": "js22qCuNC2wuEUqHWN17aUnVNsGy9Vjxx5FMuvK6HK4Aa9y73U1nY9FQ7ZM6EjgpmH7sdYAi5r39Q7Jz1zynm15",
  "key10": "4CQrhzZud3fshR77LoLSibJt47LQiRRxMVq1bpFNMP99gaJsbMybbTVCXM8bAbrwgKPApkJZydpC4aF3AvA3sxnR",
  "key11": "5KeucPaXZqCV6DypjfpHHzLntfi2zKnSUnZauoKrzwFdQWu2JnRb9DEeuxRkvMgPqJC7URmL3pynwbwK2tnhke11",
  "key12": "3ivwVydff2KATNyoyTZwimQbuyYkVqMN2FhhzJCP3zkSMfo9iPzU7PWqkpUVrncFjvdUUBwQmYphxZ3nruAUFQyH",
  "key13": "gQrHAX5yqZhJcZxzL8SyJCnKWTYYWWTSBwbVoURowgXW5U9feqhRhTB5UAFZ7J4uMcL31aFc9cKhM4nze2HgeiY",
  "key14": "3EkCWTbCrdSzeaR96rpNVieY657sz4FBrqfCLPpj17Z6XhuBP3KzLFt7JLQyp4JQjv7KveuVD6ecMU7PLeaW4YxE",
  "key15": "2RSE5yF51cFKAKqLU3TmUod8CiNiv3Xer9Mss77XrjZvTd8yUwfpx6BrYFLWkZcgystBJnn5Xr9g9mbKivkSQ5xB",
  "key16": "CGvU7KfSev7KcPjhrHBAYeVj9DXT1rX6mRf7hJv8ZTvrwc3QZ4dUq6YmboNjEsQUSrUT83CUpTZQ7odVqVgWUrz",
  "key17": "5YK7hCcSrxFcReGc9NjD8aBdy17pewjqAUD5p9ebsAHbPaHY5eJv5HKgHddCXU5neM3zbodzDdhiRVPjBMV2o6v7",
  "key18": "5sUoRWxv4agJfvmWpYhTmDTsRRE8ZuoEqcvxk4WC2LJwfmT4xVA6veBSHuCjYbfwtXqw7KWzg4LWLDAkJn2BU3MY",
  "key19": "4akuqe8U1b4S2Kx6GPbJAXn7mc5iMnbMegKosegDRhhTJFjosbZhuTjkY7HFQoN455TENBFByJ7NgCD3SXtJL9DN",
  "key20": "24RtbEV6xXsJCBqnwRW8yKbUGV7SjCvXejRwn99dxEMxvLr3ExfoHiaGu497CGpWqhqQ8YNeyS3maFbWXPNyYSdn",
  "key21": "3FdVvaUrVbxyE4YB1Nyud3UeWnZGuTA6UZsDmM6E5iBMf3cFFGppKKjvb8JkoYL1qHaihsoAFQEA1a9Vv9ERQrDQ",
  "key22": "4oNrASw7oiN58ttyc1qYAHDYyJ4ZGzaxzoXVSybmSwm94QkqtPqbkqhYRRidKGv6KDyHwgriDQJjVjQMhXb4VnsY",
  "key23": "48vNN5fPufFcRXSVpkfmYWQpCX1uvW3JyB89PfSN4jxTkM1kjVTBmkFcUvQhbPVaPUPuXBgn5m1cVdxJSWbpvHQe",
  "key24": "4FWRfnUCFpr5MWUnDwuWHVxpdtZRUZJbqnfqJR8BRgM5tWbJcwfAwkF7RUokgQvH2MCh113RzNZh5TP75tTqNe81",
  "key25": "4icdjtzJTajLECZMzx4ajhCN3gLnwvTzH8jGe11xsCLBVFDZr2GEFxhtkqqBooD4aMbxbwKR3qr6idajUDvz2GGT",
  "key26": "3VVTygn6abMVrhmEegRVg8zBaYivQxeSiJ7skaZeEPFRqBUnPyMti6XhpZ9ZFzNAKE8mcD9RsLSGNigjzp53a5Wn",
  "key27": "2MnKaGFCHfbEjT4FUBfjYvp65Ci6DksfPG4CX5KXyCCgKobUQXrAUdYtbLk8JZDPArSv62avDP5behtukgze44W6",
  "key28": "KorKZNcacLwAA6XzX6FZL7aL4Pgk6N8tVoHsqFnCt3N11rUAm78Mp6t7Tc7pAMMvoTcSkbvP1ZULDvEPjGEeDKy",
  "key29": "35mMfTKAY5qCpNYpA3VqUN4m9shSAcwggXe4TkhsoLtZdHucxgzQuV6VEJSJDd7KT3Bh92KnHB6fX19VK3pdf5xM",
  "key30": "Pu7oUQwh47NWNsncWp7ApXcFDh6fuSwmViH4DpFCH7BfZcco4gzZn6wD487DBC5BAmmHQRWcRXMa2v8v3xgyVRY",
  "key31": "jT6s352TcPEbSUvsfUL2iBCuDc75YFJ4T8MXTYfp7EM2WeEaeWSUiUSvm33RsvWsBmWwk9LVKSg4x1dGuC5b5Nu",
  "key32": "4A8nEKMZVyszywaNu7AkWjg3tnC3RjhFfK7kGAKnBRH1MxqTNAeBAs4YG2n8Gpune2dYZ3T2cpKsVh1WtQuBoRSt",
  "key33": "4o4ppwm18mHRnYsysSK5t1YfmVUmT2JqUmLdXmH1k1kGCK9vp1weWcVfpRz2Gc4SNqiVCYuSRfc7HFeSYcwPaz9S"
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
