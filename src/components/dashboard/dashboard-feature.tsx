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
    "5UJiAiRrrzzeq7jxgmFQYU2xaKYfAn39WQbGLwKxmjGP2y3GwQVx4QMxURfee473z5cNaoD53Gv2JKt2pZhMhwtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UrC3DpPZgquSzunQee18fuuqFo3HxYqNz7yM5gQquo5QnQSW2vAYpwbXgVrzU5hTtQrfEs2mq7mzk1qtehuv7xR",
  "key1": "2DZqV8kQgacRdBb1Dbn2WJWNyh7uYUxjUgaHgaYUqe7gfbD6EQ4kUC4UziXHxbpKMNqV2oeSGi6V8exXe8mpd61z",
  "key2": "X6cZgpaHDJoG8iwXcrap4EH2CbZAFbTj5yo1f9nuxxdTqTpgMu3PXuBJ9dgzH1SDjkPDttzrLJqoaVmevpNxRwa",
  "key3": "3GLX1P1oqouJJvWTfy53X1yV28zYUne6Qw8T2dmsWJckjVAodW4Rv1RwfxBPQHVP1A4MhNRs7nVZKeHFJSCF1W4X",
  "key4": "424XsBPH7XUZppVaCc7cSCe4Zx6jvKfDH9AqiecfRehhEczawrYNyzUcfZoUUz6G8uwmHQeEuYRDWzgaWYoQPWP6",
  "key5": "64AnBHM3Fx7ztCd2jaC3GG2yaK5xnNHMUQjaeJDgKH1zapNJ7S9TbDNrAXArFC8oMtEbeCuhXADk3ugtWo6wHWRA",
  "key6": "5XszupGnfkZEzznGqnY7z3RGxpUxTg72BaGsykdzDi1ud8eT1BqouKjG29EvZs17m3xVipHkuo7L7giw2RE4L54s",
  "key7": "3KSkX7TLUD3VvR8v4gxWY4E5QPosWMi8ny1LW9UcaUshMMRE7WQhm1Avo3VQrBFpBMSLDj6v9DAT3S4WHytug5Zd",
  "key8": "42oP9G8UKbavKUdWpf6NFVWW7SPcmVEDa2SCSRqqpYYX6LfCFU33yTm39v2Ptmd88MEDit2M7HRCZhTnt5SHtpXH",
  "key9": "3hkhqLRbJYGueP5MmfqbvzGuZs5cUuTW1hoDcgF3zERNGY4a6At2ZDnFsb1oUxqizd2fGMAzcK5buG46vfHjT7gA",
  "key10": "tz9mptCFSo8BUbsd4gBt9n9tTK6JkuJNJzHPboEkhMeTD2Yk6kVnafBGk9GBcrqgHtJ5sMLZ3UoNQd8tqqxpxJj",
  "key11": "39nAAjux3juJCiA3zAGSU5vSEr2RmrMyPEbocirMEuD1cuwFsCEcAztq1TfXcYEmizMyFQnjgNmVU6YtbTUn4bCx",
  "key12": "5MYAxBE8wj12Jbgf5hiisKk9duDv1SknsM33KVyNC2kjmmNR4GHJGATMWPFyDYYUXwFvFThdrUhQaEhmuVHdonup",
  "key13": "4A93oqDiDehboPUvjrFLzBidLUpgd4PeeFe7CC8fpKiCewttZFAo1L1mE8stZzFbpkN2o1QFLDVvXHQfYEETATb2",
  "key14": "2MxFFDjFYwWvNindPhWQrfd9c9hZLxUfsC9HxtoYEa7b5KwCbfDFfXUc24DKjFS8PJwwmkWmzrxbNKNmw4v3dxWE",
  "key15": "29qNcPDWzW8vd7Bz6rA9GsXAD5vA8bDzuRiRAgLpKWfwJNXpcytX1Q2GkG2Gqj9Pfc7vdWRLeNDXz2zQMisDEY6H",
  "key16": "5nouXmMYqLJaQfjsWzxDTq4Zs7Ar3b7Y8evx4WzcMDdENSAyyueEDjCf7cuxCNnt66homkwVhevBRMF33y7zuVoF",
  "key17": "kEMKQV6KHGqFd9uf9mTFZWAr7gtgmqRNGb1DNdUbdwRwsowV4qqXdGvdih561h5Pv6jwf1Laeqk7V7yRkXKe5C6",
  "key18": "3Feogo6CKdWERBdVPGryo2621gHvBW3WBh38Ny3JYxB6XGoDPp6yyceEUrbWqdUE8LKpNbP6MVKciWpwLy7is6Ld",
  "key19": "5GQXUGPxUimE7fAu4C6X44kRVbYKQUfTra5cDnqcYhiH8nExm6Laaf1NwkiqcphEDf1N2CGsYj8gfu7XJNc6i8Pj",
  "key20": "2UVqe7CkmbvNHFYSxCuR8ynJ4ervYZnvJSd7pxg1mqUXBvoHcpQrRDbHjt8KPesMCLRFCyqQLtzcu1eBSMmztqY7",
  "key21": "3iXNmcJo2jqMcu21LrWrMWVdssZrSrmygEWwrNJv4j4rN63FsSDJaLPRXGaseDKzz3dUghWmmyHfBksD5FSn8x82",
  "key22": "2YYrM7dPr3jW2eMkMhgGnNGF7vqWMfrfuiBbGs1vGUKZjaZwMSBqz9MFyD1Rq7zbHgafc9kcHttM5LUFXebwNevo",
  "key23": "2F5mRhNLgUFxAdHzWyzVB4zjNqBNKEqkwXd2sUVnVRXwQMsKAem3MKRZTmi1JCgAcdnN83Uam3rWDhP9Xzz7qpFx",
  "key24": "5BjUdvRjtB1pybzMWQmiYLtejBxgfQGqLw8kpUNPsy5pQPb1EQZCMyGz1wafzupN5YTvPTv284AfPEZG7u9Fk7RY",
  "key25": "2hZGA8RLi8km6w16MB9dVDnDKPvLaJnX84FJT1c22WTobHsinsoPLahXJ47u2QZ2wvTGRXj41k64ufpsixZfcahQ",
  "key26": "2uL2v3RpDa2GWnVSwN4vUpq5x3mvsv2f9FZjutZgpRNy95VxVeHyN426BmqiSwH1orNQbU97ppiQxMuM7APNmy5e",
  "key27": "4FtkDa8jGCEDTdjzd3AzCy3EzgDcFTSjEoQAybZpKJbBHC1h5hd73TqnqQJr4FRVPZDdFj3GZ9iJ1vmDVRb1prE9",
  "key28": "2DteLdh9SRSLQbzG3bNktmfGFr4J7WmdFDXDpEuKGQgRxUBA8qeg3DStDLFNNAzHRdQfJx242S5kEE363tax163k",
  "key29": "44rUehAgCWJPZysqC1Stiz9s2YQMwAruAa32F7bo2fXaLGGaaXqF1iM2Gawif1zUbtzLsYcp6cKfXNSL4PCSSvk3",
  "key30": "3DeR619iBNLBgncV7fSTwEBP7EQoGsAdoXrBsZDY3t6mpn5hkYE32XPv1N2UiwQrjWUu33i9LrHLo8uSvxTWNu8H",
  "key31": "4PpZXX3CyywryNtSTU3FQn33djaiMrxndWyhjxGysVm1AuLCptkDYNT2thanzSdMiR1SkdV65ZwECJE2b4tbZaWN",
  "key32": "5rMF6DuSm3dGqaUdpapK4CTBPVoD56LWThN5rUpZHVYstP3sYtCxiU5cTDyL24KwkKACx2WbzsroGEZov2XEzu4c",
  "key33": "2uWhmxZiX1NrEZq7m8278na1BzWxe868JL1xCVFUQU62TuQVJwK9RCzvDpZhYVyG7DHvf6jPtMFP1pAuy4umofJZ",
  "key34": "47cupm3cdWSvvZVBgJeMzpbJ7t8xuxW4Uks79FqxEGDfDwNBijA54iEQcRkKA6UFNGsZdeCVkkeE8FW5WmaCKVUW",
  "key35": "kF1HVyqX9NjkDaWvk783HAyynTwS4FASDGB9usLKykMdSwaBrp71TR7g71rsuoKDztxC1GUoAzpDeWEeyjSHy3Y",
  "key36": "61VowMKFbueMb4jocR7CpPqp5S2xTYkV6qJcLUCkup5WLusm661QzA73DS1Ybzzcpsv6oSi13DknWeiBdqnazhMG",
  "key37": "2ncKwmjaoT24B4Vo3qLjdcG56MJg4BK5nwZog3PCjEgDB4rrf9VKrZSjxXj927WAgKtZy77vtoaxfH4J6QU4ziWo",
  "key38": "2m91s6SJeqFpEL1hCPodsEZoQDCE5EX11bwJGZZWkEQ7cy4nD1vkRRY69eXwm6YLQLyHH3HSmnxmVuAG56DEoDpC",
  "key39": "2XH3AuPNXtCr1m7XaTDHLXr4Nyk6s6vPDdtpWSKA95e1btZHsYFiokStMshmeZ63vnR1F2WRvG1om81y1mHuiniW",
  "key40": "5gW5WqCTmjKJEGaBoqN93tKj45Mj6dwYZBWYSGTa481uBGDCRU9FCGBgkxKJJRvHo7YpGtHPrGCcnWpZBbGVPoqP",
  "key41": "5XSGMVmscqEJUoQhcnmFCHgpKx665ohYE3PaVyeokNGYGTCNyGaVr5JAFCKUzyAyoKpyxoxqagBbpRuJAZsS1fr",
  "key42": "3YTAREmjEQ38UZ4xoeKzL8Gt4GqYFU1h7c9WR3fAAFSdx29XKG8uc4c2Wa7mmxrcKataCWwPSH6s1P3P2PWxaLA8",
  "key43": "3yLLb84ZQtVJtnRN6WVRHMPvjGnMHPKuoGDP8jz96jT3PqfkdJrYEsmc2pgPutBHWn6RVRUsMbNTRmusAhHiViNZ"
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
