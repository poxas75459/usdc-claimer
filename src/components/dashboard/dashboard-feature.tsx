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
    "566gqi45ZtwLMw77zxaTcvSfiFo7AnXeDvCWPr6QgSMefjLp7WVD67HAiwn2akW1t2up3esEECfAduS1WaaDNTsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3VyacLzgwT7u9ByYd99yVbL1oH5vLF3J4b3xqcPYLtRJgoqiCvvt9TscF4n9JhhrC2XHz4nECtGho6g6QwGgpD",
  "key1": "4xsoGF8XkqzuzXA1YUJEehCfnCDq6RETqKh9Th1Qn85ZQKKFXk6fzuLzL7wireFCmMFMvV1LF5kdbLX79y949CTT",
  "key2": "25qX1EiykW7uPmWe2Dd2E88R9rtpX6Z2rZ9aSDdgV8nWETCiUnQ9cwfZgphHqWGQpHyFxv5paGnHH4zK7s4Wa7Fz",
  "key3": "2BaCfFMb5vugnnKAqRL6yV7ksKCjG6NXgh3rqh66uy87FjZkcaPJHYsdwJKzPHvstSFAJ7m6dEqYN79eaoJvBacR",
  "key4": "5MUjq7c8CEfF1RfVMq9bAKnd5SCnNVptxHQiJXx8cLnGE5J9PxMG97zKS1ToLyDHocbeXjvmkD3S17ZSUGMwo5qk",
  "key5": "4MLNxu4d6oq7LSEAhhF9asLEnDLY1bJHLzzV8aQ43wU2xgfbWjZUFzdLg7N2bYCnkZ91zaaGnhCdsnmVaEC4VB1w",
  "key6": "3yYFDDAjDc7tVeQ5muCbtXTWJwRLykWtx1crypSuemUWUty3K9YdkUq7NqTMwag5i8idUUJnzwj83EoABJq8dbF1",
  "key7": "3adA9nD5ov4v1PjisesqM51XaoS4d6sgrDCxnY46oSJk8iGDXsHEh6GBJs2Er3ozkNPrPhqqgCVMWsudzgEeuXFu",
  "key8": "4ts7E4xn7bnNH2SA5zqbZuQGLApeLkzGs7cQmkN5veqHX5qvBZJHUG6FwXH7Q76MU2npxfBBzMu3XYzuvZcz44S5",
  "key9": "4eu137HxYwXpaKc9tquJr5BQ79ft7FZYxfovbaMZNkHFmGXaHUcik7MNJs3ZPNBvchaQzUfiCSKEJ16zBntzHQbC",
  "key10": "2CtenZ1udTGejQQMMLBzMuCFSY9Er7BAJcTthLLLaWynjeyeEm7NHUrB1wp7sSLbWCs98WSYNXEJKNtgfWR1enAe",
  "key11": "4ktyUgxBUzeFaTHPKrdxfY1dQaR4YFK3gQFK23dQF1XUEYBJktMF6LG57byXbk4QCh4bD2hxmaLD5TJDhdhGWxG5",
  "key12": "2Z9HQ2qSxSKYtecn3kewvgq6FkbtDqtd1YHzTzfxkLcx6T19i5Qw5qqskkHRi6sk2LpKuHZv4QtQeoZHLxXuCktb",
  "key13": "52gKgTo6ZNvGbnv5eAp6XyhTR3kMPqqos1cKg3a9v1ZAu4Kpb4qGaWr3vKP7ShBVbyFoa6JbJr3ZhJESAeLoE4Ff",
  "key14": "5kzxN6RXknebtW4DgQybXjZ5aFeqqZkmb7LAvJTUso1UkXGckKFGvYoeKTNXRqcHG4ZrensmcYvphtU3KbLfYSmo",
  "key15": "49fPXTo8HM3HBi9DBsiNMoKBouJ4MDr4t8vZTDzB5rfSNM8b3Dn8ByEMwfgPAyec8SMhZAsjgBBSwUFyny4mAL52",
  "key16": "4MvkS6b67XoKkserv4coEnh54soH4muqfibC7w9chK21CWH6GPX8rkJinQE4B8PpXsuTq3v9jQuyWFCaqCbZrEde",
  "key17": "5im9LSPMFQUQU1UvHwco4ezfRq3PZwrz8wCNHYrdYQkz93aY5qy32Eejuqiax5t7s6ynnef6Y2dVEBkLZFKwES2j",
  "key18": "2gBwsgG1wHnUb7tzZ9Rj1eJNYPub5GwHCQ3yd2d7HibR67gTRdbvdeCMh6D3zmuAEN3JHgEvHCtsCQE6kgrDZn4e",
  "key19": "2BRkaiwX89YH9FAi5srjkcVe5YD4i3j5UMrLZWP4LuzLzpTBDQoZr5JR9oLFC5id3FPcGF6CUsDUNNvXASGxWFAf",
  "key20": "31g2ZwB2L2iHPefqJrG2sYkeqp5N5xeBPFztSrKYs9gYndPH9XDGYsBU6ZUCTLojkQJz3HtdR1AZo4DHfXVmgFpd",
  "key21": "23VFCM7GddZMSJMhHEWcgCEdYJKrqVW2dgkUP7vTTtnASh3cYwk8VfFSmSyh2fBbKubmS3PBjPNg7SwraySd4KN8",
  "key22": "s3cQHENeaqMKnidhr3SgeQaBiMxMQjfNfTHaPX24dTmPSz9Tk5ujreMr9xK2t4fqTZwCi64FKoztTR8EBT51Nc5",
  "key23": "3TDKnM6uyoQsjweKGbdiTA5TyqgQPFgMtXK5JDwGHeqhRF9TKbw3YjkGfhxurktymg7puGZCZWN78NYrFWVovd5U",
  "key24": "YMwyR9pdCgtMXsRnB2G2bGBoC75HDov9s2B49oD2xTCe3fBw65Dtio2HfHzLB5pbZicNogNCwRmir4AzWf4qzdU",
  "key25": "2yWbE98daJJ7sUZzYVHNNUFrTFy2rMUUmMRxNGSgqykA4Htrqe6DWzYZkA2hYQ2WeZocsdS3GbotjJuJQZSQt5Bw",
  "key26": "DcuxMQWFkFkv64bxVYGhXaF9p8ZkY3FaKS9AHSsXDeMTYiuWZTz3mEbiyz7sEWXshbywHh1kZ6QBTMd71ndp5rq",
  "key27": "3jBdw2ibexRJyoioKbvFdRNzqG9RNzYHN8jtACyN9Gj6XN9GJJYf1ajPQLcNLgywHMbBdrCKQf1BwGQC96d6XGt5",
  "key28": "4KxkLxJTS6NK6Wx64834iAUtMK9B3usFwgoDWmy5zBZTEV2edC64WoapoZACtsBrAEejEu9PyXP43NDzAaMm6GT",
  "key29": "gg6JrkrUjwuvAEU3SJ1cyPzKT4CD4bm1PK6t2fozKh4VRaad9Ba6R69FU1j992JKx7NYkhfhDaWWNbyBAyffcef",
  "key30": "5Fb7PE8dHvn92zAjEy8K9LMp2KGnT6Suxbc5QxU1E1PYZq3BEPH95jkx2zD5Nu3s9jx741yzFMeubF4ksoBxLGw9",
  "key31": "47gtgACs8Cfo9msUWtSato3dMT6zboFTpP8tRnGdz4rvwcvWYKStetvptdDvmBbo331ReSUTV2WSMbEiXLNDAJVP",
  "key32": "38R5JpthqyJHy5RxYqsDVGVickZRN2KRszhsfzZ3zk8BkMbrScScFFR5XyT7SQqFmMYiD5Cp3BKMtidTmAsFfk7u",
  "key33": "59zaoVMJjduALtc2JZG1iQYSjyUfJW4aGYp3DVHwjoXKWkwsigBKnGpHbX4wH35uRznNMbo8b9prgrE4FZRvHGjx",
  "key34": "5m1SLUQgp38heDS8aYExe4ZRSWqYgdWQeJRku8yiYZNcGr21u1KDJZbPBttj4K9TjCGsURQgkFaSUhcFCbxfpAhx",
  "key35": "3MviTVzKzCiTcwSN3y3deg3UamXAepDtqQviaNgKCKSSg3Y5wdtaYR6WwtJcpiDiGYyZNEQvgS7dDnTYM2ME1sDT",
  "key36": "3ENYkPFw1uK8NmPJu6x92qDV53MziqMrwzv38mcyjoYdbxZSKM2k2rf15CSWr64io8C6hZSJfkJyVz62uhKRpExv",
  "key37": "4apXnu8Ev66gD72V6cwMoSRqfy7mKHQQkVXXN8W9h1PKQHHCxJ68pBX3s47Pn3a9ycKt16u7RiWS18FaVYXrL2FP",
  "key38": "5joMNRya4TWz6tZXW5HD1ytvYRyfEviyCPnPCHASXJ5fbDCbqcJChWVh3oTuATrmmEBG5GHis7SMHWU8dNMHDKvS",
  "key39": "4tAKwXExwxYGkgpRDq5PVaJwZNSG9FsNFtEEPKoNpokdEpks8oUDBa5D257ug3qPUVwJWyPR2bksefVr1Wcz8pEq",
  "key40": "5pLhomb6iNNKt64PY1HgnBESK8qGGtN7TCAEco8c3S2dC6RxAP1qjnVJN36EZzrR22YkjvF63X6JiKtHdRJj4Zi1"
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
