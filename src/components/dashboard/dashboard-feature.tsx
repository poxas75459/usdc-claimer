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
    "2taamqCuMHxLZCedkft3PnAcS581X5w324SxkgxPEbnS2JWMwApRhWHxuDA6vDR5kQsgQeVCt9JFgCCx5L7rMjQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31eJXcv4TY9yJSycqWc1mmLvT9RrnumZ2o3gJugaJfnSSnkAMws5vKA7a1P9eBszvyU2EudfMhEpzEtwdwLBHNR1",
  "key1": "5v3sdkYypoLFPc5jDqwqRVe2LFuKhtWAXeQW9HWRMPfPUdpoz8HFKH5Lj6Evv6v5J6njsjoeHXv2aDfz6TKp4HgE",
  "key2": "2dLzvGGJtaYhy3tnYsahqiBMP8ji1hQQJzsNTQj9G8SfXipfJBA7W3TGtseZvd1QxCQ6fqbM58uQtUxJw1MsagkB",
  "key3": "3DHAxZQBbMqfZVUkS6TzCurGoUn82qTpSs3bh7XMTS7GfNKAjFjp8iwY8Lh725Pwio9k72jQ8zCLbKHMaJtJpd82",
  "key4": "5DXwEkkWgfBeq1PQmwuaGGW33aKuhRt6ZujQ7uEx8kMLefyut6o7QvcRQFhWPMLGjcEnnMmm2gVo2pw8w32akjXq",
  "key5": "4tYr11yW4R6N2xU3N4zDgsVrfsQwTbfMroe1VnhF7xugd98bxctWvCReH3Gf2DiMFkeoYybNUHQR5VWxPir9Yc9W",
  "key6": "54cKdv2XYc1CtrRVHFL4YtKHTbJrysqLihdrb4zgvj4QAekjeE2NXvWdWVDr52gyJnfy93A4kfQNJYpFwS24JjBm",
  "key7": "U8MACNjjmesbRTz6qzGBVbxqfvpx96vXttWDCHcCzVpSjofyG9WkeUwZzqbSy5CtsUB5kn4dFDnZJgGme4eethV",
  "key8": "1usTNnsGVzBAdvXoNX5snWwvMxZ211mZ7YoWcLWmGftrC6afiJKUwD6oeH7Fibz4naKCTzLdkkPGixqtFfvaP63",
  "key9": "cWrqgdSykQGUjoEbxrHR13sy5NLpyAAw8Cd78FLQpqJUWMBqYaZkqtZhW7XKcrgSY7hfgKdzLHpQqjP8CX9J9j7",
  "key10": "v8dRH4cvb3GBc4MiaX25gTbGnNkd2HYfkwh483gsBKtzf9xaY8yECzRygdyutjfdYJzGqxibxpaTTPTTi1Tsv4R",
  "key11": "5wLKKYuDeGBAjvANy22y3UynfDHoSnBwoz5SyFvdEALVXVbUUfbZyZDVNdMqoxZ7fLosNYwd5XUEhfd2qKcKzcgT",
  "key12": "4BUoeJjZHaUiPpvYpbEwdW5cNBDHBfs7iDNKgbosccJg1WdybqXFFnU3DJQGp4spBsYqJpcW7nCyLpfXeMLvGaja",
  "key13": "3Lhmu7yLmhBHGW9fqzdFznMEpvNipCWARsdrQreNJPNjdJnPdEs1rPxD5fviRL6ppoahKdBPjkZugxH4n57YbKXq",
  "key14": "5znVzhaTNrJZJaV89BqpJsn6E37snABRyYkKfM2BKuP4MnMkihryBizKHdvdMrX2yyhHu2UwFDPCFV5fWs9auqhL",
  "key15": "44P3hfoA5NCpi647zLzuD1EZELF3MZb5figpV3w2jWu1RPCdZ5QY9sv62PCVAsejsYzru3taNHXQZyJuSGJLdDCE",
  "key16": "2gBAU9t2bPXxp65nxKzaAdMNbPJoSrzBygLDXTVkjAxSSFM5YwUgqx9aHZGi9Nr4UaT4qNFgFnSj1MD8QcCeXC7i",
  "key17": "347N6t4RajEWVQYvdPuXamVAZcTRfHHAzY4hrnqrMgKkxsCDqK1Z5hHWEsmaF1ihem8ekPpWSMj2mNS9h64mTRWj",
  "key18": "2rgCNttSCuthVNg7wVSUDafCrZcawkXVTfTvMKJN5F2Ed9tP7wsR7bmRexUWPvRdhP6qh5M7Fao9BsfBj5gNYXZd",
  "key19": "5rdkUYqCYGYGQNWuNJYoN77yw2iypuM4WGShWWrKBm6d44PJPqiXjz1akNAYzi7QQ4LQy1Qg5ur7qx4C4kFCVKrB",
  "key20": "PDVoUdBANMewzPF9VvLgJ6ti9Qdc8Lf56AoFyo2dXUpRziepUdLsjhFrLcUnqdkbNNJzJXZN3PjZR82jyximT7A",
  "key21": "3FcMX3bXdsP8c9yw8SNFvyoLrgoCPDtvnWnLGFAcKSYize78ERTPsKANJhXYp4smFBT9bowaDkMufp2xLiZmRps8",
  "key22": "539fVPhVqwFpNsCbgqmUK7V2vWQfH11P8tjtYNPfNzPHMV3K3tVtoYzhvZPQGSbLyJDgmN4k1Pbo81MzNa4cdZJY",
  "key23": "5rj4jYV4UzvZicJ2snuZyhVvtCEFUr3xDu2PXjwJGLpiTHmdz6CdvLsry34vfFYsxZMfuWguhtNZBKLUuJXRggFh",
  "key24": "2CZnZvh8Hk9hfuhQsagEVHcpsEuEU4SkX9qeyf4HZdzr5iJLFhwV8s68u5E67gFagVXfxudc9tmBXzfxwH4GdUKS",
  "key25": "3YGwJiBZHFwKtC4qkM5MfPMyRZfVcX9h93koaFMuPsmun21yfuGuaoKtRHz5wQh9xc2YXxBgMPSfstptTx7CNVsR",
  "key26": "48dggJLMvCi5jhcznktkYjkd75z7MAhELRJXzC3wf1kUb3w669oLdhdSUaJjxdENHjBUc7SZvxTra7Ntchr5ZAcK",
  "key27": "27gu8bchZTirwvkD6AA3421TyV4TiM4GNfnAqURT6x1RHYvtRkJ3YowQYJEXKpGKerjiDNjffMBFFAGNthCKgEH6",
  "key28": "2Th4NAVfSg4AizpdZhvxQt8wJTKakuEBogwgSKtVEgCHKr8zsdkJRJZEsRyyrS7XcNv57xthEfH9ZQDY5nBC2wRs",
  "key29": "2FAAcUPaYUMDKTpnhVsdZ38YCNpHtoWkWa8VN1km3FnFYLB9VE5kE2fc2oypBGkMaBZeVXpdXmXDfkzjUN3VSeEt",
  "key30": "3xcMDszuLcGPBbUxHD9xUc7aBhq4m5Nrn6RdwERizhTMpbVFDicVPSZJSUGepwZWBiFpa2BVpjgBg2TURVsQj2L7",
  "key31": "NiGgXKQSXsWnSw4VJpy4DyE96zfrdhefeF3dM88Scf1eGr4JTfxkjyWwYCxLjt8P1FpMkP3KfonADURfh4FJsGs"
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
