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
    "5B8sqN2pTmzx87a5Z6376ZC9co42RjoDKXsQDBmX8TRqgpJ5hrNfCEG3q9tSMNKLYvCpz46DpuaAXvETFrbTuk2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dTdZtfmtdoaniyHybe5wp6rM1tqC22ChwMFPc4SUYxbc5cFNCidbVc8GQNtcJm6ytSe3uY1n3gZdwsKa9AJZD5u",
  "key1": "zXjEhT2VJQKpMbv7jrNyD8GLyiN3Hzw5dLN9AdfutcTJDc934YurwjVYaXDp46Nib2gJXKqKtybpbYRh5Kadu6w",
  "key2": "3EFd8LhTDzxrAMkZpZTTKf3bQsQJNrxh7Qu21XmBfJRV61hLTVcRaDaLXd7RDiLHzQ9A6MVyXk465joYzPPjSBwp",
  "key3": "5Zd3aorAJjxGHpXtSEwvxys2EuVkQ2sPUrFPpjPJM7iko9aNAZ146hKf5YM5AfYq1zntadgedLHd2Vn96unEhrsR",
  "key4": "563DePrbwNkkTT6fUR4FKLUdicf2A3Nco3NwqKxXHapv4F4X6sZpBkoq34BEkZSnpR3R3B9ABGepK9UNFNnMaw48",
  "key5": "3Z24rBx4eZjwZa2GDRVazc8RN1FMXTQUZgoTHGjyM6ziUcWZ7HthxMaWR5tXnGpa9tX7WREMLpH7dx7Qmj5h2aYV",
  "key6": "623wUpjsJuaKBkuPt8sLZj9FRMsYZYdVKubqc1KndKoYmZHhShEQGmun3tANTiREsafz7ye1tekL6ANKmn1pZrf",
  "key7": "67ZKs8oWbrLD5CLdUGcuU1LtDikjtSrfPZztwAhEH7i64JSVCGYqEFsYRZueeMy5DVLJyfxpFtgkpggEcVUcKpBj",
  "key8": "2PQ4p2X72gM61KrhoUUMHEioJ5y4DesdM28MAKGDyBMi9KPyyYMkjN1MbA2RNajj5bvbfzpjt35SgH8iNfzePKo6",
  "key9": "5XD1Cbo2bbpiTig22C7uV7TYetomo3gEBbYNa3Jbgfhg4QwuKgVmAFUV8Ah4HaCPtRwzpyGM9MhmJSaU1cye8TKV",
  "key10": "KTJqHpVjwegKMdnkViWgBHWuQA5rdNq2itNB59ZdHRhV57KKtVsaZRStpUhWkQRo3CP2dKH7s1rxKRRqhbPZpiB",
  "key11": "2HnMwQaB1QzMaivCduD4dQkLD9p5MoSgcENLqo5dBuUhiBzofcmjAjiiHnP94j5BiedLZXQGaiPrQQNGDxw2UW9y",
  "key12": "48HnXMiuisYK1aW5H9SCrJN4CfimUCzZi1oWVfhgkz81BttrExCJayCMba5biFZogtv8xkymG95Nn1DKokpyVLR9",
  "key13": "3mpPh5qgQaT8rCmtxs9jyhgWtWdNscTEimbgomncTCjZDnyUnBvCE17qzoy65mjT4aRTN8tNxe918ifHcyuFwLJD",
  "key14": "3Vfmx2yiF8FFy7mWtiS1STnU8RcBNTpbYUH3Kber1x8uyPaq2HR8oNdcvNyXMR2kaqRebCGRCJmgdBgvLAf4DDGq",
  "key15": "57wRM9pXJEDassT3bGEih3GEJbSDSxvcNWqpiYUwkn9U3bvM8htVbhVw8uX8J1ig29XqxukMYLukCuLcYXqqkvtJ",
  "key16": "5hzptjHTwespdC6h9YJ48buHHjgzKdU4eb2MyUqRnsjfJRGQAP9DSVe5k56r6DT7jY9EbGhdhY5HhY1vGuG32bLL",
  "key17": "3uLYFstnJ3HEbdX5xumrYJGjbkNivKAsFSyyzhTqCBc4M1d1tJUd6NUU1aEHv2orFawGXT6bgrYRYrraJQrFxz3M",
  "key18": "4gL7BkNwDcCRqG12grrjD2UbjhTX3kUPm4AuvyC3ByzLsXS84HrMGYGHofXE7Ch6fRhzLaeA6MLQy9uoz1moLdEy",
  "key19": "3qEEqkYMmoRy5UGLvvPaeHtfV6LXmh9yzsaqvGDpR1nVNqm9BxaCrTCqpMGRZRX5Fq3LYXXdd3fvYYvtt6Z8EtAZ",
  "key20": "2F3aoakRvPNqsYaVDkZTX4KXqN5MW2n9eWK4ompUFFXTwW67YnLnZsSQYXFb93kdKVEN7L3Xrs5Q5eQkP3zLeWqh",
  "key21": "vtn6eiNN46TBpXvCvBXWN8FX27P1hvxzr9ibtec9vM5or2giU2oratgNokxRHMYz9yqqLReGSifVMNmsheqHS67",
  "key22": "31aBMWjKJccAnfn1GPTomdeoqF4gzPBTyojKqKabphHnhXcaifdNY33s2z2EW5kXpm7e4df2WQxQy1JVDTt4Apea",
  "key23": "2jQuaPXNqKPyiksrnNzHdr9hgEWVpREnRPFrz18u4f3QpTBSZNuTVuQVbyAzmBEiKKYVsFQzTtFD5A4RZ8iaNvET",
  "key24": "FXwgFUM6UN6JKathqLRWgc1znFiEbZt3Ut9kxJkmqGjB17NMZ5utJvsbuswJ6xnRwhEzdfgt5xS87gR5AfDXQra",
  "key25": "5YzdhscCoHhEcYN78Vjap8UtPngJ9LpxH2QJRLFJg4EiyLvurUwf17iy78PFJwjhibJLwdbGw2KDkKbdt766frm3",
  "key26": "3LNCoxtav3jCeTigdtLYxXbiBHXkD4HoTg4DEfpSLtBueRznf1Mg36v78KxXtugsJm7zWr2CTsPMsBdRkVptHhf4",
  "key27": "JL7SjC2HRHbJADeRPVHETxhzmAs82vXbTbgKdinqK8mEzwfyb47dBTHqLzPqpj2cgzZt33iyisZLbtT9GRTp9ym",
  "key28": "H3osYc2C1qnLTnVv35Wkggm9nWmw4N4CbgmapzuDn9t4nVnPPm8pt2ZuWVr41qi7dj7uRUgz5N1yhYuTF9dUfD4",
  "key29": "36p5ve5EJmpiSQ97vF74HFAaM3FZ8fpYwv5mS1VPnKrEiwKYoidKJoDjgBTq6hCTSiJaHnL1sLiq46fFBCydoSyx",
  "key30": "3uqBB131y3Nn6uGhmT53u6exEcuB3EFxFvDLskTdtvh1PxehPWpKYrM2hZtkkRqXhXas2GLPWeEatfSMp8CkkjEA",
  "key31": "qznPLKkLfocu1qpr2gjteQJrMhbjkn3xspfV2wXej6uQJz8JbqjgFVAf4m5TsESGwacVE7V7wprZmGzKWVDerXn",
  "key32": "3yu9KuxUAM8J1PYnsH5AbJ5GWbEmkELpYCo8P48sAYJMXMRX2w9Jab26wdwCinuPoGAiggZML1PJRd9VKmkbCe2F",
  "key33": "4JgnEqULiY7JcafYtQGwgyT6zRb9QDpkwWdDmmB7tMeN5D3Ax3LzKsdtdR5HLfVVbP2Td1wsQFoXd9STagkys7qX",
  "key34": "5w5mcBdScAf7WaBh2sUjxdkBp4A29d1QKU5unwMeQbLZAbx2yNtHvne7ofSHgxaB5iyssbTb39cTEiXzMEh6KF7V"
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
