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
    "4K5uAi5RGbH3MYNiGTDrMKmzHhAZhqniidXchhtazUJKSRCh3NT7H22jTn315AZsnbRiYuWXWsBngo2yW9bPdCWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r1TJU99jS4KagYuYah2Vc9TNaE4N5rhKmYtfD9YfRPHDu4dsF9n133hKdpmHH8rho8WuDd4GhAP34en8JMbWQVJ",
  "key1": "2PrUSnkaWv11Mqxr3ZWaye6tVtDk6QRJjsHmV1mLU1ttqNibVwmafmS3i2aMQMo16ZvabDRFaxivscpefPqvxWbE",
  "key2": "22xLV9gaMNMQnXYfRqo1ypmL6pf2xiYmHrMozKZwmr2Aewak96XQyxPa6SUBkiEEnbEV44d9Lm3CJbS7vJHF5kx5",
  "key3": "5Wv1BVdPfK87iWHa21nici44YtN7VcWG3z6YHvJFYAXpuf7cMnqDASSXHZf4cW2be4NxYW86Zr41waTkfc3Dhud6",
  "key4": "558b8EYm4LtVe5L6dETzfgkeigprxjEzNwkLt68RFGmcNuTsQHSBkMcwKyo1dpQjm7QKD2uEKJmY2LFu5RWrSrHg",
  "key5": "5oELtJkSsUdFQwrpb1sCvdA6E5x3W3GwSpkxuXrtWuUxUxTAa5mitRny4uXqLvSUh2A1qwyCUkyBGopVANUNCvqs",
  "key6": "5nAXALHVzfHBAf3iBqn1LWfBMWM9ZHj5QhKDifYaTrijD6Mqa9qt3Fxh7a3XDcTtbQ7K8v9DsKZJGCXr9N9x4ve6",
  "key7": "c6M7ccuGsXJgB58k1tnnEsUte66Rki9hLp7S7H2SeiMMFj9R1CDHDWJ4fDD7eKDHVAJXPepkK6r51bDdm4FH3Lm",
  "key8": "599DrXYhysjf7btKSdiWw8eSunU34bw8Vw7buCCSxzRKExTak9vdTqRMVDQdj6Kx2ZFsZVQRb4y3Kz4y6DqRbrfv",
  "key9": "2PurKrpqRjvKafW9qXmqis9q885j9qR9LDUsr6KUAw13iPs7PF1R8DKS5dv7SktZqWeFco43ya8eyieqfjfVvbEC",
  "key10": "4d58GBwzW8yUEdXdG7Uw1wzLSwQnPFrNvA7JhbUzKgkMcUYCVs5Z3xa9jgXhSJjuUqivYdFP9wgwgtqAhN2aESxq",
  "key11": "65Frzm4ZNzC8MghguxKTtdLnxfnn94SeqVcnq6jsayUZRaRG3j6Wdpp58rjvQGhAmfaobZCufYw2vQfxMWp7nSF7",
  "key12": "32zSXJa9JutezvZMpd3EUGnzsdXynQ6bo38mePq2uvvpVn2UjuJbvWffhe3FeruHjNpwPQ22eG1vzNfisikNuiJo",
  "key13": "3n4qa8NyD4fVBSStBNqsSoC9QeTRYaaQwJwsZpYmQkG333hzTDE7ndnhJ1kNm6SVkL36VC7H4VMCpFip7QPAxu2o",
  "key14": "WiKEiJAZBYCuVhzTRtYAtm12P2b9qortAFJnaVTg4D9V4GwsntPJ61iKkcVGkKG1u931k7WnkE9tRp2xrdR8wYw",
  "key15": "2LD47mVjb9x92mdUm2bEXNYvPvHgRMZauSDNWQDb8xfuTGqHJ7WVBoVpx4nSFd2HhxaHr5RyS5a9kuE5KUeY2m2H",
  "key16": "2hdrxygZyGZ8WLR5wnEFSE7742e9WiRzeRtnbtuU7DVYzfRHTWS7oVAjUucFv12rbbSuWGWgStR6m9BXp98FFyc",
  "key17": "5aAjqB5iGhm6TehUGuVbQ57EiSwgGpVu2DGLCeZ3N7JbiFkZgwkdWwFYwhqm361Xps9c21xY6ESaKvJkeCASyfcs",
  "key18": "2AsJRLcJPsmBgUGjkzEdEzsBaMpmiWfeaf7gNr7Q4TeXjBtWQG6q2a4KggT5Bx3wivovBTEDcpmHfuTJz4zcJPwX",
  "key19": "5qRkrf6BnpDpZH4wSgJv1txnRLHLHVeb45gddvpXpV58R5gWu6XSqaHwMRPpo88vaSKidkFmP9f1CtQ4x9bGHa3t",
  "key20": "3vWvLfWKAXAXdRcUmvPcsXV5sX3YdPtTs5PGCLRGQWFg7P8pa7xdxjc24zaF6L8PkUzrAbsFw9n6G674s5x1CbZc",
  "key21": "5gCKkkVXzZ6gqvyZGLuL5up9XPJgWFjXy9piQZzrPHYRSQUYimGdVZfK6xFDCq2QGsdh2NtfmAnZKF9HaXboaqGm",
  "key22": "35vpZhgDwiHV2VKjzD5GhfeF9trF2zpKkPzBi7WMndNBKPo6DjaVgkkcqv5g5W9QNNLi9tkfx2Fu3CtdEbofvk2s",
  "key23": "57rVZRQPUfS1WWuZWAiKe1HVTTVY7sCVXySj53AppD46dfTFD1N4A9rHsH1KBJchwpYEQg5z5TaWmprb8mfcNaFk",
  "key24": "2GUr5Zj2Sm2QCjdsYhAq9kzJY2bgd2kLymrR54dtmwScNU9yqXwCLZBEChEVF22gqFxacQGxYh1yTh65sB2659fP",
  "key25": "3qEFCijKidRQp5cThbb2FY7XLTF9T1U6qcG68rKRyWd6be3dUPi9ijgazrRvw1KTDbyb5Mw7bxLw8togLKKimBUX",
  "key26": "22VSV1Q42zcwyDy9Po6hCZ2zDB7AtfyvaLjJjVLacYjCx29VjQHusaDd4iSVHJuHtr3RLk71TNcewbJKaruYopAY",
  "key27": "4dhEqRfh6tUQ4Yob2tiRzhZaMgvn6ywD63rHzsZvny4wtFjK7LBjeZrtPVPvMrUyca263KPBgmawuV5ZeU1iXpnV",
  "key28": "BWqaduFb5Qvn1dhbNLaQHr5SgKfVL7ruQGiCH7rowyHYCLsQEPCSq9sMoyd7mKKf9TM1motRayAemCqCr9aggoq",
  "key29": "2D8ZwPjFkaEQwzSzK14HuvP5BkLE4twNd7GB7br8vvfjMhXcoouc6kzDJopjnAEJHmFuH9vTo9YURyGqDuCYrVoC",
  "key30": "5QepshaXLaucpL7ofMSRekBkuNjMYVaMjokeQBy2nCRZoFjZSSRk2b7pwpaN99XZ8ocgBdZMvwA13JmN5V3vtckf"
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
