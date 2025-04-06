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
    "2a4cCGw3fCW37rQ8yX38iBdjcRTVNhKKMP8ssm4TbXJU5fdG6PSmyDF3tdAqsjXWcmCKJJPGNxgxg36ecDYyFkS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o5YDa1iQfd4nZdWuBViHFHBLkdrMYR7dffGgociD9rU6yS5VoQuPqDuzFJ7PpNhDPgAKVARiQhQf2kLifoZWo6c",
  "key1": "2TCMsYjsrDV3uW3nGnYt5FDn1wJ2noAdU5LpP1Gp8cREMik5d5xNC3xuawEdALbTUTMJK4WUWF612jv5vYD7mwEd",
  "key2": "5WykVbzziNncdjkexf4ciyAcJorwsqBrMHvCf51tJdRgCKUFnKwZTa1gfBzdG6bkxJFUtvweHpcTtu1ogn1rq3PX",
  "key3": "2t77gk3MsXEpy6HTpLEba5wrkDDN4tpMc6GNUoZUXZ6822VFZbHjUUhLLpXjNLvuU47MvFGxgJK5FFgekGTXkJ8Z",
  "key4": "32zNUg58vRa8g3DwFx8CrXatca521t5b5j6iXUTPkDhfKfDxP2i1U1PEKS6rFxEhgjDEEitwcnTAv2wu3RKEJTaf",
  "key5": "5MF9sgX3A3cHy6rQucaa8GQZszfbKQcPJZeJsh3LAmnu4GaUgHBdZwrxrBYRCgrdoN6mu4g9dyWhrx4QPLqGrZa2",
  "key6": "3F18Z4uF2qRf8AiEh9MfV3g861bmZAxJTiFDdByEznBrwJWpkWHJCGKyJSkoCvqoyrRbjnCmAvfgxAZewB932bbs",
  "key7": "4bWjvjQUWyXWaqb8nM4hmuAEszinUixhSDy7e865hEeUZ7Dj3k3vmE7gEWkc1VNQtAajmpdKmr27xxS43D179qcw",
  "key8": "5q6KY4Wy84gVVkmAtgucaRsK4w2qY1xV1kspptJfzyoBAckii7Ez6FgVKRjTLHGaMVnnnZWAY1x28bd6ux53qa1m",
  "key9": "njN75Yryzw76riJqcSFgey72DhxYwtH4BdshE8azZpU1HeErFA1dCxhzaW7gCFcLDb9uxXD1oNdVaRunPEQSund",
  "key10": "BvFMPG5DbGwvxJ2iJZMSaZ424EQJcqWTGF4j4rNoLSzTbjfutVm2bhae8RCF2z72iMA1TiwruFLHvKiNqFfuoB3",
  "key11": "3BKcX5eov3yhkmWaGPkmkwMp7iNxNaMBLKN6HbctRf5grZsFsDJGd4K1mUcTq8jbAwUeGtYyZzVmekWu6oa2e9RD",
  "key12": "3VAcPfk5y6EDzpygCNCq1bNXKFJvqCEXVB6SMEde4eaAx5eDhT96KCRPxyGtapc4pGYa8ErPrFMMz7FGFSrdZWma",
  "key13": "27r2sLR9oRupQUZmbsfRB3Gvg68dFoKe2r9xP12prQu42E8HqgeKL2QS9WfzpuWiZbChbqvwQXQAmJ5CJdGRbjJU",
  "key14": "5Jf7M1wWVPPpm6Hp2HV77y3v5tZJxKzpa4mGJwPF1cR8aV4mtkkHN26S2RYVF4XwvLRjDLKfUCKYSrMdKaiU12LC",
  "key15": "3mPFxfLYswUyFSaJzLfMvufiNf8cZHVd58ayBRWsoJARUvzy4fhSWeQFodDa4jmcEUnqAmMEaMcYbwBhHABTRuu2",
  "key16": "2B47fgKFGjy2HZ9FJPTPg8Lhs1idGnhQjHPaUnJAMQRwWjFS9rxZvMczfP9hSizgnJSzyV1wVr5GCKEybTY4ZvFh",
  "key17": "5ug88gsTK82auh3F7QWRJU5gs98T4gkEDxJgy9qnQGy4TZ6Qx78x3bj1DmLTdz7AwXujN2ngQewFjRL3jjdtfQ6z",
  "key18": "5YCyQNdx67gKg2mcQdKKFAsKVd7T5sx928JqTboeNinU5UJKMpKP29YsgsoibtXRVr6igDxbAaXnq2WEE6oL4JCi",
  "key19": "2tco27rQ4PsnDd5aC8Vwtrz5rcpj1dtQNvhZyH4UbzdFa3mXvHs6M4X2AU86vs9sowvqUwKokkCwpWbSisdXPhH",
  "key20": "4PHZgJTWQLpeGvvaakUYUZMkdKjB5QRdQ4ECVki84pmR58EZhJRF62gcuib2xK6yR7giKs8Nw3ZjTNK9gCdmwots",
  "key21": "2cfeAEmB9kJUYd4LnQqyqGP6XAFEbiu3Xbz9ARwnMgPSQmf8qreZHf8AhbnLQMthRn5RuhxGhJd32wGQX54zQPTN",
  "key22": "5pm7L4xzR54KPbGgLz2BrJNnspfVihxGgMFBn1XiDtC542827iRRJT9ffhBJkZKojpHJ16kezvSXXv3PjJykVLpi",
  "key23": "3BrMJdgiiEjKmDkHhS5u2viekZ7d56kfUtdxHm8b5Y91GdWhfSZukirdCuQvnjnFbzhWQPAhqcKbJrbG3MvB1kPM",
  "key24": "4fU5n8DUMkXQFBDgnasxhSJBytb9Gdg5QVstwg4YTio4SBV68Yqit9tn7E9XGmcHHy72zaBWqhKUE26VQtPtstdt",
  "key25": "3kZoQjgouytcSbYBJFWH1JMZ5KWcTTThy5cLatUPbyNndzCT5pQhYQYHaJyWgirnfYK2vSVSdqv2LNQFibXuSggQ",
  "key26": "YBuKZ2EV12GX77yyNfovXmFD6BChnhaPmfYKV5Roj981CGH4L4E4NhP2wjvYKyXiPeNuwVBD3aroKWTCQAuDb8x",
  "key27": "2Q6Pzg7xuJKUfaCqGcy4yn64dHRFSVMCrpVnNDZ6umYkw2RLGAfMUG6bg3FTyFG6oXHmT1cmmKQChJoz2sBJBNb",
  "key28": "5s6p8GQEyBELFWMYHqXW3QJJrUMoDvR5t9qaTR2kA73D4jj7Z54v6No2iNrPG7Ufqd7xwogt6JfgLx6XJJhJozw4",
  "key29": "3ZcsmY58RCXxGwdyeutERfDj5QxZdkwbpg93EvkE6yroGFxN5ktPyQwamzXmd3FRSjU7MozpQbNKTbscugaisxhE",
  "key30": "4DZzzYgg4cA6GMMBiyD9gyL1vrPVHWcPq2nx4uJnniKKS2nKMNS7K9kiYnyAqS2pQ2iWxZZgtSy73QBrhzEorJwH",
  "key31": "oJ39nVvACYDXVkUsvFgGDLjPxy4ScGcDocnLCTNQU9mtWyD8LG9fM6ugkzU8ZaA17i7B3jLeSiG3p7tvYK1XneX",
  "key32": "3dfqqxZUCrjrYkm5hzoxae2fcwDnCMyVqGZYWDvnLtrhiVZCwgj8rwWVvHq2L5qkVEZaCGVrf5vpHsWJSxUKgSQN"
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
