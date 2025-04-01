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
    "4efKw1XrYw8r1UqyJ5MuyvC8N5RnnvD6TED5Rwp4WGHVi2x5QbLfJCQn9qgdUHfBWcmuZuWMuUQyqqi8fdFpjeUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Giro34vdaAV7Ub3GwrM2xdccnvPgYJnbEqYrVxgDmYndvuxchZ3dMxM6aasniGoohmTmRcgQY8iRFSeaukf2DQ",
  "key1": "M3VmYxhJNCdKZcwNHfBC1ZxSzUW3XbV8XpFXef8cHcx9hxuHZ2dTmXA7bckz2CokCfe6m5JVkELEvsADZJEoQ77",
  "key2": "3oSY9WuN2xZCp2Y7okzG6c5yjf7Xi8Pg6RKmG3KT41rTGoUGCCHpbYuJJ7x4tjP6TC8bVcc3W8Hg1uSBF6DFXYFx",
  "key3": "4LBXbfNJ67CGib5Lac1mHSa6UKdvtwBFfnhorNgNM2K44uaZqPEbaDDEoG5VivzzLEjVhDL4ff22huaMd8m5ZBHc",
  "key4": "3vNYATaDRhuxkPdfzNbnwdmeQwRd749TjdAmmbUxVUsFcL8PxvuT6gLV6pJrhfo6QUWWW4xmqcHw9tAdadro74gW",
  "key5": "4eHPuVQBZAt7ZkwnmZFQLqMeeEp3UtM6tcmVfTy4bePtfyPFTTwGfcthdy7X8yp5ifdwFcYV8TX81NCSpEqX6rxe",
  "key6": "2VVQisNK8A5hAqrAR412Cuuvj3Gca52yvooqeGbV7RoXV7EBMcPhhqbBrs2v8JYrystCyMoBsfNDj4nYG2RnAtp",
  "key7": "3nRij33gDg3TKiGmarnLqW6qRTxr6QVz16dAMBA5vzq9Pj5Dm7GxSwsqT7jtR57dpFCNSmz3jhKpRaeg5v2Mwb6t",
  "key8": "SXD5N5jybpfcvWmPaP8y5eE5HyrJgd4QrkVkVNnSUpuVN7jkXG6PUk1z64BGtN2N7QZXFs9Ad7CjGWF77BYC9hQ",
  "key9": "2H6wf5ruMpWX9eASy2V3H2RAhQUjf8qenPPxWd9AGK4JZU9eMjdQVg2dzjGmguGmqxFdGemd1mzVVQH992eJGnbN",
  "key10": "53JsY8JT8caE5Be7meE7pWtszZ2o8pJPd52asTv3vMdJ7NmPeTUZzP8JEUz98jZaPpykoJdJ5SzbaxchF1FJBrWL",
  "key11": "5USyir88D5yonTUN2k3Nn6ks41Z2moKBv3PNphz8KgzWU8saWuh8cVULaoUduQWgpr6RyJ55HdTQA5CWz5SRmPhX",
  "key12": "5C6EY84f1pZchHtKKyJnNnsY9VWCf5MKp93v6kjC6ZJ1PA9azbgVtq7vmcAvGTP85wc4gfgz1DF8ut59TYiffbnq",
  "key13": "49uUDmHhJpSfuXKD7FjnpktzzQEkyH4GwemYsw9vBZSKdQyfvXKFn1TNjG6PLU3guTosujGAWc7nJKfk6WAZy2bv",
  "key14": "3f2gndbSesXZZhcveWsEJ76nVgS7bVq5dxsyL2fLi3XyCddfPhUdLb8o93fhCJNbQoqqspHr5krwhvuu3aU4FScr",
  "key15": "5AURK4p7kzHH3F2C6Lik6Jr62y5GodCAW4EDWQZP8yQXBhGmUUG21AqK5V7TZPcJFrMJ8mKLj2LtVcDUDkwwxM4q",
  "key16": "2bJsWMSn2ju8b7gsVpgR3Eo5Eg8KfB9KiWcsaVJisNCK9NoZpAL4NVZXExCfDGNv2EXtcEP2k6jeKkHFp2ojJ7te",
  "key17": "W6Ma5f5CsB9koGTwSnySMzbtmmRbt6hmrdogfR7DawWNx3J5VuBtJCmv9AknDPM8BqARTJkHgqeAKXgmNrSKW21",
  "key18": "4za6Zi1X7YgZUeeCwfFEUSZbqoJybZhWjbtGmRgqPYG6dM5NKRkAMYtocjVBNncw1QF2jrxue5iHRWiBNKdCZg61",
  "key19": "3DrHfKX5cTC3BHdoKUCHz9kuBhAgtoNCm4aTige5K7Qcys94D8jgtekJwdDSNjPgMjw6mNrAHXB8wQade32kwYGc",
  "key20": "4W53voFUYQsPyoWBh8TjL1n7Pp3ogBZLtABiJqUTJwHejZJvf3zkoeSoucQimbyCZmqJndqFtqDkjD4Z6Pvee5x6",
  "key21": "4CZbZ5pryR7t6xVTg6mKWfZC2Di7eK8vYyxdCQbgYCVwm3n1TZdnDnK8xdv8wC1d3jUp9EdRehL9rQ2BVuhM7AoQ",
  "key22": "4TCRCaiYTsgS4u4iajpQhdmNfQhHJVEGYN96fStkPscuRcMREbGa1e2pHdcNPx1foX1pabT7fhPc3HJ6pkmx9ZZW",
  "key23": "qo4SZ46tEiWwAqWzrrspaxWbF5UkgJhD7apGd3Eg18CWYfog35WeACjyS7A3EFmKLd2oWBRSEJVtTxHn3w4zBz1",
  "key24": "1Je1biZRcFCLzYpoRsG2DaRxSTGRnRuRo12bRNNjP4Fqt4XJtU2g32z74GowQQwyjhgQGBBtPfPq53ovoHazgwg",
  "key25": "FRT9uqQRZKksnCwWqAdts9KpDymNuMcFjrdNua7NJbVq9puUJp6rgPHyygxAW2xtF8b457VFkxG3wVVfAfef6gT",
  "key26": "5BThmDkWuXiprEZMm1T7f8knWnahVKvjmUNjdkhCeZaEWZgpPhbbVndYkQ68tEUp6HtMfS6rkZUtzCgkJus5UiaG",
  "key27": "2XbXMRU7KKCpSTB1mxxfWxFLtpuYbLMPDHazhFiUusfXR4bj3x2PwYkQa4NB2a4qWhHJ3jXhDiR5iiYVo9dwrfzC",
  "key28": "5hg8s4RGrzTN6oGZrX3p92DUg4tGZhTR9EM8VpydYKc5EHwabmVntvPkd4VpxHpZ9NutCfmZUUjtxVHpy8FQfkPk",
  "key29": "ePUjvLgRNfvZ9ctJfeufATpz4KKuJHvvVrHkH97JCiw5SgJ8kcwT2nFPw9wz3daYn7dPca5tByhKFsqUdw54kV9",
  "key30": "2foXvWV9bxwedQ6eSv16rcmSSApNCKKzG3XS5StMJ3uhvLrnFNgK977xRWa7VG7qC4WLVH1mujSTL7Twbv1yL48W",
  "key31": "2F2uWEbX8UR5FBTQHNzGvLacSkzE6JNPpmCGTPohBUopqxtwSNNfTY6shec6VN6YuzYa9oMeLgEr1eeLPExkawrz",
  "key32": "5jw9ynCaawZoi5QpwENaM8f2Yi5M2Dsukmq8ETNU1Wc33qKpbmRQKGDpuWj3LfsCCYvAQvLLMADbWrgxXts81tUu",
  "key33": "jCpQWtYXhZky6BUfdx4SDp4ZHLmi8Um2cMKPMoiQhNFQfpsXvwsBxfpv7VBrSMvbJR9uzxeTnMqkU4J73HcGNV6",
  "key34": "53BQgZdViYqfqM22f21RfMsw5SWcjozvscdxNTunPbLHWfAcKf4oTEhTQA8dx8YGPr5tP2uGV9atGW1yQQvSPMvV",
  "key35": "vsbU1rQYy5knxcXUXentkzd38dBwpSNcxFipSDpdDXgfWB1KLzXb75PZe1fde87cYJcKNiHbsrsT4wjEe4PjH9E",
  "key36": "Mfqe9ARUNDKyeA3jb7qQXcKhmfXQi6k65XvAq7ZLgbmcaVkoBHvDJ4pDvFdLmLnkaAGaALfZubpAHJzN2ndmY1T",
  "key37": "3c8wKSe7GHwkyQ7VGcUxYN6DkWtfnAPoVNLxZp713bmQttGXYPPNkoNHFTYtPYX8zMCDq2eBXypEZTTZvPNyq8h8",
  "key38": "4JXLdHpW9CVmUdoxb5EW9R3bBpRAEjjrM9wXdqD9i83yi7BUEHNvawqGQ6V3E3VMeZ61Xav12VjVVmeMCuLBgD8r",
  "key39": "2DVQK2DLeZwdDBza4NopCPpnJ3xQbCZKLe5yRoxiQZ4HN4jHuZWWGub6oNF8K6Dk4gdiiBhtYGbMHYNaCeQqXmoZ",
  "key40": "3YV3DdSKdCSMfzKB94LAQE6JQ6aRXrCQ6tJLy13VmYoCr3jWa7LekCY95hxtQFWGC2DqXDW5aXcB7DgXBwmWpzpQ",
  "key41": "3mQDpdCFfwrCPBWonEKb1mJxNitgxGej8hfdgGQT2q4xQGpoEqekiVe12NiSdFf4a9NPMy47kvYQgCsuGVdquWiw",
  "key42": "63CZqjdmWAJcap4MFFZKJJG7L1Y1s9TVPSWReSdBYeoWnRkBwk3hYrSwdeXkY5gAb2A33K1Kwy9JEow5K6ZrjJit",
  "key43": "4SSeW5ghBQzcaBzuZMu9JV3zFZdpftEHFYcBehKCadVPya2oSaDFyQmGvwVArhbnDiGJLBoQSZR5Vy5N32oaGvUm",
  "key44": "zhA2FBhf6E4hm9xTvkzxFbv1hN1NYhm19tdYzpV5tot5DuvBTZ5G9pcgpMN2SnWsVETUhnPyfWYwJ49DQESXuNW"
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
