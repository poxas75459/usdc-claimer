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
    "4XXT9QCfr71PbsY3kQcsyw8wg727WJiCCnEM9fMfa9HBw3zSEYNpp6vzKmiDanXWH3upq7XSpXhXXTasanCaYmRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bp23vPgeet9NCHw6qkMXFL6KASamKvCgPfbQC8uoVqwQpZJ3GcTaSkUHkb1CTfgKbDPCJXcjAgERqiFn3iBqvW9",
  "key1": "3vqPRgnhs2iibeirR1mmwFGp26JpUcVFTXEXLvkGbYN3YTJerVpyGfJi8DHDen11LqZi2RDn1TwYHgUYK1mHuxYZ",
  "key2": "5rZpPG1GJCrBbumggBuDqJ11UxG5Pvks87tnfryiRqZkqoNKXkRrL4pLijK4AYpFi8LkZ9h4EeuFUnwRNor4carE",
  "key3": "39YiDVqHzmkwCFGTyg1arGhWc5TjXqNVqYjefSfXiJUjPPYH3JVTpCYGTEeu1eBiazPeYLFAqgRPhgcfr5H8K93L",
  "key4": "64VXuY2vtU6oycM15XbV3KcHeh9zLkdPmnvBri5x8wwKrCiHcko6U9wT8xaZs5oPrBGHXBWC3TTffc2BkstpAcJk",
  "key5": "3wSfpCzU1Sg5E6ER4aSFAeLKzA35FEVgMQmWqJmUtPSEuyz6B9cjwCDPujhk3NLbaYnzzqEKyAXVCpkXJSo62C6X",
  "key6": "4C5pqM9GxZxhm2N6Sk8YesriQ9vF6cJ8F5HQ98SxipRFDg2wwugzkNztqEWqxe44AKXxR8xptovTFQcpMHUNbFnJ",
  "key7": "3m2y1TkXUwJkar29Azq8LzL4kdQGDd8Sb5gYUqFM2dzfq9wnMfAB8PJZASvmp484etWRztE7Ve5rn1NjSACv764a",
  "key8": "44wz7HVFLtDXcHrnqDKBBTPAwdygR4BV1WUQB5MmzmDmUYDuKrCazH2GegZCrULLzavyfKdVWttYF1yn2QhRGh77",
  "key9": "4KM8gJYp44N4HGRXgbJPVmaCdP8nrVCRnPGb26wZvpFaLJT2vu5Z5K3gwzPZXE5zty7Ci4KVTjKyryKZsyTduEnF",
  "key10": "Fvopm8Gt2eFB4gXiqsXjLuAu9yWfg3t4DrtQe8pzyMv1VtjwCRD6HTcSMYKgKoZeGgqpKgqc6zDQV7H4ac8YXTk",
  "key11": "e4mA6acifQ6rkCuGw9wCsKXteEbrGVNFTEMUtnCxGCN4aYqmZ4dNGdbJ2Wj73FBogHQaTckrdAxztUQ5aj7jrXN",
  "key12": "EVKUAbLHE5ZKuAMoE7gZXRA6w3RvSF2UJw3GnQnS5Wt8dAYTi1pm7yynxiw8vgT81nmyZhirtAoEkaF9RsNHWQS",
  "key13": "3VYqJDAGQ4o2h8YfHghxaWm24ifmeLYkCqZ5NvZBZgTaqjzfYbtULDiG78XuyeUGeP1PXyGH689HTXqnRHJLbq3E",
  "key14": "4CsQmQdDaRtirUuiXfL2QCiET8aVyJFBA2ANGMDDyFnFEWDd4XgXNVAeaLVy1AGMsJZJnLSmwXZXg6WMsS8oj8Vh",
  "key15": "iexGzMz45wtBKre2HA77iGTuCE6APaANSsGRQwiESrHE7fLcqze3k1J6mBxNjkmY2FCnv1KhPyVpkrUNL73g6g7",
  "key16": "JLbLXcN97RcfjsMKYQaSG4t88Hvv7gxWSUNbPf4SBfbyAMVhyUbGg8XWkZ8ns4n1aGyeQoj6HuUYgF3H52rXjK6",
  "key17": "4BfPyBW3JAHf7HJxP8QvFVdekCv5gEpmihR9KUMFA2mYuH3Qo9cme6GKqkfWVeD8Bm9BncQBzYhi5YAmctx5a4kP",
  "key18": "4JHJbjPvtDBsPiRnYLrty83vtztcroaSq4gVkWWPAWyieS3ax2D61npCCrirt6jgqL6foApnY7fG8zDfPDnooaJP",
  "key19": "3a9A5UYAJ4KHb8yXboSbRnvMHzLUiVxVd1v1hYnQvLKmR4hJ1pz5SnkNHKmjg6Pk88EAk7CP3jGeWSWAVMGEQmYm",
  "key20": "4KXBCPjg66uiq5XmLCvVFAWAKoJmo9Pfs4KrssjCrnviJQwwxcgB4xoFWaCm8RW17tY8CUFfeaaiCASZmf8eavTU",
  "key21": "3fqmUxpeZfk4FpwvKq2QpZKH64cjkwCC2tDkLA4hicoSkHkUY9meerxgpyTcECKmpMNekRThJuQxtRk3NMCHNKW2",
  "key22": "4QFbPSq5p4EhdcYocj5PiRJk2BvAAqwrT84fqUeqoEUk2FjNuNxDD4VcXqXT9Gv3Qxmq2SPFcsWFgpBt9QmFj74q",
  "key23": "2kchVwnYEJKq117wzwTuyWpGfJFuGssnHcZhRuNtMBGamS9RqaMi3mX8uWicQJ8p2sAA1c5Jwc9TCBVLJD6GJ3cZ",
  "key24": "4WwiqG2F62L6Ddp35SvkGwEqXZzNKg6toG4CPXpTdR7EiNyruxxaxNSjTpzfrXBqGG2ZiRuih6k25fFWBK3UmXda",
  "key25": "5p7x6pf23GE4us7KoskWXfJA61irhRaMUDDGwmiT4VeHhJP7FPDPdDgz4ciJJGLxJqS1atiyR6dekJ1hVF5KM3ZF",
  "key26": "3icrid65FfPBv8bCngaJ31WQqaGq7RioCcYxJoy3YHv3oSX44bu2p5cZLD2gs3yiHd7ke5oSxbRdzWrBT9N7TvuQ",
  "key27": "41JeeQZEEzkv33LHe8y6fPWa8W36GHzuYP4XiwkRgfe9hips97LCnhjLHsXiFSEtvT7Ynz3fv4ktn29gEawQw8ob",
  "key28": "2ytAWJp37xwYjGSEiwnV833RqHzRZAn69Qb8WiN9tJ2G8Gp2drZh49PzL6EX1geDEN5uFD4kuc6Ct23GS5epHJ74",
  "key29": "3rkEBLrwVLbGUJEodBxzQZqZU3DEcKYggnfkjHt1R8cTn8nwjhjnSKZKHUvUqbGDH1YTee27fRBG6LLe8WBb83ys",
  "key30": "3KSg2guWoGTQt2Ncsc1ST8CRyn9FfkzLKk82jN2mH5tt8omZzM1wWLMf7aDDxASd1tb2KzKow5vdTJ51Nf4Cwmcr",
  "key31": "43dMVY9vxmU2zbki29iba1PBYaciooYcxgUFwCFtJRHGSZyZUEvTVVsw5NBvh7yAjzyQW17ExRzaw3dfCJ8oQsPL",
  "key32": "51mYnAQ9fA6cXc74yFQuzDDq2hDE2L7NkwjGF8csUpVNw5BN7fXDUUVunNGRNJEnG75TqbXG2ZwDZsU5yjxuY88w",
  "key33": "5P9J9cDAMGaS1AqvryYG31UNxfCh5J2dnrHuyN5gGbG7fvaHBENNFMdiFRaUERdyDfMtox1wNqrheJPrQZrzyAKm"
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
