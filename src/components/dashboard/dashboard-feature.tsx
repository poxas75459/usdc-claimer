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
    "Um6ziHoj7es99BWci6mjbMnqT9SLN2vzTqCsgtr7gaZSBJ1tSdz1gymRzW1ndjvGk8ZvmzBHeMXm7e7GDqiGAw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6rp1VmhoWfW36LVJcZNLJzT4zCbAUue4dgFWQQrebP6yB1ZvJW56QZfejZt46rrUx9uUuVKtYXXbYHfBTtBYCr",
  "key1": "QZ9cxqNX5z8eqbQKRMWNzAHeoQUCndAVYqppjdgCypaHELMpr8F3bXEghXBdJz685TkfqUx4QDfVBd6Dhmgiu7q",
  "key2": "5SM9R7iCSjAZoDoJVf1jv1GHkuYDGJ367rP2wHwtthDfrT2YLWaXXpCC5UL5jsYsjcnTiMyoz4Ke5iHn1rQbDCWe",
  "key3": "41QZboDKP33BbWjnLdhTs76HrSUGAK2ujMCFQCqhpSGePaqKaHXMQwvJqo46aN2Pzhkx3eaCzrnyMPJHTuE5EHY9",
  "key4": "EhpFNS7Vw3LKaxS12aL5teAqdnTD3Rn1gpSAJx1zX1TjTjUAYXjGu8ZdSgSa7VjGZjqXWwdJCDYsm2GqWrVx61m",
  "key5": "22RU36fEhHbaNLexhNdo3bDHni3uN6wFCt1Zz4ThaMRm2iPnLB8hcVmhVHqB9WdAZ8LurL1vPZ8DtUDtd8Ur8Di7",
  "key6": "5A88rhZrxTnVpQ2LaAGH1Y6umqFGXGWm9taNuKdf1nedNk2tDULmY46ixfJvpDVSYZL46wP5VffRXvLafSNikvgc",
  "key7": "4Pz8u6TUCMs9cZcTfCaZp5mwbdWjSSmSSYPpXQrzfAAXM6zxYAdJvdypUDnCRSPbcmNDfwj7zzURkK8338PYEXmS",
  "key8": "3D9C8PvsceuNN8WPMRroxE5WrLCiPKuLi9PR7j2sE9N8qWMxx1ZgsUyyBwrGFzopEcfYu9x1VEPRmzLtfDH3kxUQ",
  "key9": "4hKNQuEmw22yuaCLB9RQmRnZYxJ4wAk69Jp5rjDsHLbsV7tVDPHypuXeRdjjw5gnfidmA6hwPkYNpZ4beBtYXuzJ",
  "key10": "2NEGzBw3BBc7Hg8M7ft3ZkAJis8EGXwLuYLoWAmWVdArsDgtPUzm2moH2jptGmgXdfNKY6JAipVxhLSPZ3ZTjoXo",
  "key11": "2rA3Mi2gGSYhv71s5A8sd9BHST8gPQPdAc2o62kCvHzdCWMhcmixgaANvks1GBKnGWxyex9xbqCUU9st6LPBBHKn",
  "key12": "4VE4zrZ56K772AFmkgqFBMdF8izogThQxewkTUGbRH15s51EdzoZGLApjbuks4XhLqbXgNshCpvWjh5r5c7jHPgB",
  "key13": "fSEzMv5uVw2r6kB37fw87PNYC7QZ5wbu4Txo6NmdjC191JURTgfYgdxYTGqWvEXQYHZmutaQ87WBrjmqtspoRQs",
  "key14": "4CVHBRyC9NmJZHQAwoewYytmK2c3fdZX8AWNQRbNCXaiehvBD78B3rjrZRZqh5NmUJv62MwL4DpgfHir4GG397cH",
  "key15": "geJXypwUhgZov1RP5Nidx3BJW2xU7VPF4VP9DuR5uWRPcMj5S4VKPR3S1VVdhLiTE6b8FamEvxyfUZJyoPfQmxS",
  "key16": "9GBou7EiK3okyLADjaAMC4vXRcRBGo6HEu8XmgfrJcaUyujefcL2cy6QxkptehUJgYKG7GA4dVjQC6UZD8R31dA",
  "key17": "29Rx8MJHCH3uN4YiocEZ3S6VnoDmcNKY7JTN98o45zfm7fvnpbGqDucBDrGt2EojLPyiq2SCjs1RHG5qwkhgfGUH",
  "key18": "5bJBzcH7fQ8s3RzMNbVR1Cs2HBKuBQDoM4SzHi3xoupZCFKVDXkXaCwFpwPWAXwGZUZzaj4kHrjLnbCu7cjTC9WT",
  "key19": "66PXdtxG33fzoAGZXZh1w8p54hF7zwUwDbBZatdHzD2ZMz6iwiKbeSYBTkN4xq15hg8DHEt2ewBEhcnGHHrijWR9",
  "key20": "tY5n966bcpNSrqNmQsbPC5HmazDivh1rayBrgfpBCu89UnjcegfVumR1sz2WJFZYyvsdi9TRqeYBg2m5s1GnGY5",
  "key21": "4Cv7b4sGYzugxyiHYpXHbjbdt8CpWERqg9u5QQUECs8kyKwxio4zSJJVpHNW6GWbEiTMZtmrxPN4rto3nP18TsJb",
  "key22": "2g1BU2p9W6GTwwkf7xiGvgPnPZcFz5AHFQMGB8MkdW17ik5o2VYj8XMP2qPM5ZqZJCSSxcVcSDyxvPAsLUfT3uvX",
  "key23": "3vZmvJnXoEahY3Qjn1c8ETLzdEEpnJog7d3jchcF1aaLnqKxVqCKSVGKsrjo4DnKYjvdpfkPRERKoWyKCkXnbMH5",
  "key24": "v8ddosHQo6aZdoa1AMv3C5coS2VSj42bn5Dr91gQjBzRsE9SekVgkksiw53HQMdhME67TXMUkUVGBxj736rnrD5",
  "key25": "4SbEdXN5WAFYU9LRtisGtAu9yyyuhSWEEZAAfFtBRiXdMw63PZ7XhxmNdQRj6zreMSEfwR3uyWrY7QkPrPTm1nPt",
  "key26": "2ropyeYcmp12nxfe9FiFXL2GwTnVE73ixomm3UvraHACCC55v7DvHQXe4sfBoNA3zux3VLctSq2w2eUCvSVNbZBF",
  "key27": "E2ZS8zPXtJqVV2RoZeVauTy2XpPPWruFnzCAaYDR4RzBDNJsyUEB11i4Zf86BPjEAx3FALVPq8143Hwwtj5YEcr",
  "key28": "3bam3FcBWnWx7XtWYMi4u4CGYtESPPZ5dgPA5dtJg4NDftonU819c6yoPC4XxidVsCmXDoCU3LNw9LvtKU2uE8CE",
  "key29": "ksoDJRXM8GyjGddZ4xcUHCz7uZZK7KHGZxEDUau6WhrpvyggJnmsknMcM8jfCzqygD2grKngAqyUHPhbV26NCzT",
  "key30": "53KvdirGR62CwUncM1diEQcwV7ycwCvs4KBNst82y44cNRPRqXriu2oT7dPkhtdnrBSY8mK14VDWRy1uf1p8uBwr"
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
