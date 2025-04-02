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
    "5dQsyMysPNeXXM9kgZ8GqZGnDJVz7hEzu4atUoGdv1EkMSecCjvpfcSDrZanDrHdSRDn9bvB5FvP5BsHwXFApFib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i4AtCKXuEjsGHFuKVVtMGB474MMzLwxZ92ig7C52Tb7PgCFEknZ22sBib6LZGAXm94cWjVuLt1CU48325Rg8Tha",
  "key1": "31R8482tVia7wqUXCoatnCJFwU8MiQuMx9nNn763Jf8RMWoouZnPPwDV98F7dXo9RvYiefxtgEpBSBjdSKQuc4QA",
  "key2": "2Qf53VosXjcWBydvsRcX8hCMgcyap3LtADNuDvsYJycwHDcHfCV8pDr3UmA9Sa3Y1PgM3w3sYLwcX8jbwZeV1Ugr",
  "key3": "62DhNRpr4hj2m9WXVxTJSs4VLq6PgGH8oqbRUfk8K8VMuawG3eAWugUhsELdajFCR9WkLcmX1RgjWY59ii5XY1Sb",
  "key4": "EmWPtXZqH42Jk61M8kS8nVyJNM8gLcDTQARE5XFvFh3YS8AwsHUrjhirqR1NU22TndrpTJuZnmTdkhB3QL6KDg8",
  "key5": "54HM6hoCX2mG9hVw8QgsRSvAcF4HWvr68f7mkdVZmJG6AhCXKFQi469Kwsf11VxgPNgKwmKYNLbYUXCdfXUr9PJv",
  "key6": "2dW5SdPbnqvVeCYNoES3ZvRfPiHzucHBm9kiDtwpWFCCKHvNgCUVJdzXzdrUKbFY7PCuiWoCArvJHB6JSRxFDkbs",
  "key7": "5SVHsoPZSFD1XUMciGWkiNqGPrCru4fqCMJ28LRXDjsh7syRXPnyx3M68RVaxgjh9FqNboFzi2Q2hS4CSuG3TviW",
  "key8": "4FsNXQXJkRFRXqZqhFASbxooYSVrGSf9H47dW9jYu4DxLMvmSckzwMAboqqrFGNYFzhvF7Fs3rnnCJCVPCqYdgaD",
  "key9": "3U8rRH2UfbUtSvRtSbhqjQby6SQnd2Lobnnuvj3U9XKzyxX7bpRtvmmFHv1hghApAcxE1aXVHLooCr67XzmB5u4y",
  "key10": "3wD4bSTu4uQeeC36QQNQwdCaaYh4cX9nJx213nH3YawDfqhuYHcVXewkRGXFVUmqL4QobzV2yxd1GRKX6ktxGUN6",
  "key11": "3tPst7n55bKZiRxp6VUr3kqMLLUGJY1h3hnxM5S9rxeUApAiLM3drtWoDeyFYus6LfmNmfQX5CXYYoRCmNGq14YE",
  "key12": "2qmRifYuyXeLQBCJLsGa7aY2XdD5LfqUDc9XzJhD38DZ2WfLDAAds4HWr3jg65vrByofsAcnr2uxZz2N7jmyXWBi",
  "key13": "4fvb4ajksEebuM5MpuPHs8YjZSmTMNvBtAHGKYqAfLwSHUSRGohJUAFNbG5MsCZyXm52dg2qD5v4aq6tqy7FcxGx",
  "key14": "5KtQWx1ueqSTSPAg7dnj8KB61rGj9JpXx7G6sUZFTfbzEyp3VZKFG6vyv2p5VSmL9rXyTgpRupbXxbrMiGTXneSo",
  "key15": "2xHtjKdC4xaHRJJ4QWVFNJRV3vozK2weKhp7oArzMzeyNNrKAbQKQBzKPXEF2TwUD51SVnv2Vt2uBCFL9f36QukX",
  "key16": "SqwFLtD2McjrvWdnfMFSFpKRpo7DLrv4b3f1gTz7oR9fMUADCNsCMQ4Thbc9uzTQeX3nFNZ9rMMu69Y47vfuFbY",
  "key17": "FLCXUfvPaQdoPL1MJe2XfJ8qxKjubU8NA18SXrPYQ2TFGtpfKEgsJsqn3TyTR8qNk2PAYrnaHhHoxqoHFP9xygq",
  "key18": "2oUV41uTufcUX4uWQ6A8Q8XK6KWV2eMm2b2bkQ76qixqmPR6Ex1srhtti2NsaB2xR88zWxUvpah1ds6KkNzGR9ZA",
  "key19": "5uChKq32q9hh1SsGpwWV9GQAkonEXpBQQ1RUuqxb3QWFpsgBgQ5yrKMAz7CiKwqKc7b1Q7QmBh2tUps7YQ42Ks9M",
  "key20": "ySc8CvM3kjJ6LpAcr69xGY21jkDzw4TeagnzGJkxQX9Zdz588wYcKCruZqfYDy8xzE6ft8VA9MsWo1m76hzA1mA",
  "key21": "5Fp53jXrZT2ddN4ueP2ARyfQR9Tyfx6Nt67rNf2auhC6wvCTCSN5ddafXKZEpJfeGvMR1mGJjhXyDcwQozM3bGvH",
  "key22": "qphuUn1nx96QtjV7gbUYYT25wirLtXTircvjXi88FVonY6uATmzJhyu6E8yA1UnptUpBX6yQfGNeeVCyG8fYeSU",
  "key23": "3VzCw1nn3JR8B3m6kUmbfNAEvHBNov8JwxYtEBUN8VHsYxQHr2cDa1Y6PCVrMCvXFMzCFyUtX1JTqm1iiLBEwue1",
  "key24": "3bqEYXKhLqhYJ3KQL8Nh8iQcsXjq4EjuvLdGuRmMfZ6oBYpfr3ViRujTKKqUcR1f6uQgrJtUi2ZcXJRoEW6iyRiB",
  "key25": "7Cv4c376zAzbh6jveURo1nJaA8X7cX2LAXXA7FPVRTaDsxTqLzDSJDRARJLKvMpUVQdJGcPpc84fDJdTQa8wEVd",
  "key26": "2vCd1U9NA4N9ze1NComr7ZrKFKiLte16TSGZnxtdDwvpnhMr9hRQRBVNvkQL8qNkj8hSVNWu5GkrxFHBvKUSnh5c",
  "key27": "UbMpyPD5D1f1K2WwXzWrZrkGtegcXgf9ou1KZLTTg3471eqcDASP91boZARnmAj2FHZM2HVUKPX8Fj5LWv8q9bH",
  "key28": "93MZ4unnJ9gxrwQELdH9GqKcFhQydsYpoBiYzGjZkX2vU4AMFgtVeSypgzBNH2BJKJeCgJr3bWBXKmy2doyRVMj",
  "key29": "2rptg6CXjP6hbZmX1gfDChtiTwNvf2jkyEdYJLXvLaW2jXbczUN3NWjx76rf65gLBGF2cApn1tGGdvZWNP7qTvNg",
  "key30": "3oC33gYM1971ZjHs25J1YyjBykJP82rJM9b4yPG3rWpHW2NpL6QqD1GDtJsJgVGb6N8emu45FajymtnRkXm8zniN",
  "key31": "5Dr1XqFoMUs9Z94CRqiaFyKK5ZBDqYVHFm6DCQdtjCvWPLwc5LAm5YqAnKxgoZJCNTna6HRoo8peyx36GKxM9dwk",
  "key32": "rju5j8iqEzE45dBcFM9Zz8V9t1k2mVfVMUai3VpwnKa17PsjEWZi6DFrBcRRBJBjmZnXwLe7B1ztT6rFwGNSJWu",
  "key33": "21qkk4gRKtF6hDLp48zwyGYHrMwCDA6KCn3TcE9HAzxK5tfMFUauw5iaWyWqGVApYVV16394GfEB4YCbiL3kEt2u",
  "key34": "4GbxEdnZosYu1Q5HBJ3NKEePqvdTe83fH3tikwbC5myfNfVyex9YaCQwdm5e1h4Lpt7raFNeGnU92baK98yCEypm",
  "key35": "58eGtTkuqLWWVZGHqnnnzcqvZDfhpc41ZcEYXwX3NNjnKMSsmgDjCohv3oUS9c6NShWLhyCV5RiRvezjhmaxeSZF",
  "key36": "5nrCX2QVZYr4Ss5dbkGJwX5v8gypSaWJPK9w3DLusSpyL9Jp4yKJijqgEVrZoWBNgV8ytLwthwReesovcrhwghcU",
  "key37": "3z4qCVMVqMZgQdgNLBNoARCabz8Hn7FmFXPku5TGZbBEC3VyoDP9wJwUvYK9WebgSAkPHw7Gd6MkzvrAdUj1mb7A",
  "key38": "65mNN2EZhHtXHdg3CZfAMpHaj9fact1Poq8cVr9m5pRWmFesY35fu3YxEJMFt7QwPApYrfsjnEcdJqFKu6wLtLaY",
  "key39": "46Cr4xPvy9pDJ892xaiy3H945Bv8pEWMiK2jVK3bsJosZGG56qrZZQZFH7NRfgsh9yc21BovaJeVLSvnT1sKdevF"
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
