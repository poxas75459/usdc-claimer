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
    "5r25X1N2gr1wTB84SGuoFnYKU3LXL3pU8Ez1qN45x9NsUdfcSFBL7QyoGknVFv5aZrZdSC1dNs8Jtfy5vfrezENu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MTcnRQmTRBbrT7u7SndiRQzLtx6SQ1PVKT5Sdbr3VfkeZDACpqc33jT6Xm8uEwsjbKUyfp7RVbmumJLK1FmqtXr",
  "key1": "51HQdiQQ2NMLyap6ZKJ3sHpD8ptfRxXMX5cQnELtNLVzkpPpXDcPZHFTcWjErFaR573ZLdcc8GP4FUoXMBiow3Wh",
  "key2": "47hsMFzanRowjeZmwYnWxxXB7r1uYuFbwVpGDGYBsUtwtiSikysdJ6HqKQi7a7r9sze3ZAd7GuCNK6E6KK5Hp1S6",
  "key3": "hjFq5MgH7qfkzEKr63vC4YB2AFtN1bN9dvRDL27hUwEfwUAvr9NKzL8t9mEYkVAcj9MwLxUGnAsNREXPQ4CQwPZ",
  "key4": "5nhe5EYoPqhksqMy8HJkvskGPnGJfeDsk75f5hJ6H5GFhkCW39NcqPrk6DaS5CpNykyCyJhoJ6XX12Yeu9wryY78",
  "key5": "3dGFxSxjzKPzAVY7aw75LBLrDZdHrxt3vvkeBNtv6Rsu5HdLQhafwMMHjpueVXTfh2ndiRSJJKTZgo7nRFek5qTT",
  "key6": "Di8WYQyCyDC58XomyteyfzKJ7yxdSfLbDhyyL2ffxHm9dYVikqfvWwXPpNWt9dY3zqqtbQyso9UucjxixQq75ny",
  "key7": "5qwaHP2g331Bb7P15AVnuBStciyBXZAxPsJtxjED7h1HudLDsaaiw63pZWNVhMQuXWscXF57qrKCvMZqdPY3okL4",
  "key8": "4h94ASjc4JxnDKPRE1QtxXYsCjwsxW8HXvxfvgBhrzQ81J9xXLUuMso4FGTebqX52E3VddPTq1Fzkqcd6QbgY4ku",
  "key9": "ygBVRs4uweHWzWvDfzDBeFSHoeijhBdt7Tz9SpFksZJxgMG3WiPks2gXqaZfDuqZFr5vZPu4k31QZ9dFHavd2iZ",
  "key10": "3jXrUuGgj88DSAvd9LDWEQxyx7w5R6BKNwHbLTucnodVCvkiEePEv1A8LHyrUxK7JwrWiw3A5HeapbtS5wEWzMPF",
  "key11": "3ZTWPbGixDwUr1TDGUSnhvT3myMRuRgruAh1fVR8bEZwHPQ13vzn7iaqExbdnnFiE43jLP9T6xZ2cjqLfKKTXdZX",
  "key12": "5VMRRtjHTGN2uuytMpZQQuR18vUqdAfFHnUh5hicQ6pFKVDgBKoWmTCoWUmwJ4madCrvcpUDEHbXB8reuWvNYYqF",
  "key13": "miQfKUSg4vEaXvAkoKDZjq3sRSif9hayAfXNgXN8f94H8Sxqq3x5duU1dYSKsiUARcmxrnhWDBR5uq9cBQz7idv",
  "key14": "44Lh5cgaodBF8bp8B4y87Z5j4DAiiWPHkxMwGBjHAarnqusHzrt4U9DZZeKZDNFjEvu5nfeNqC3oegjcTtkpDnEA",
  "key15": "3Eh36nrPoHG2rvvshBrxDMaQ4QvtMMNBbMzUvL4aym5znsK8z4iVGLFEY3eq7cskNjK4GxD5fLJvTovMK5Ks8zav",
  "key16": "2K2a32ircieAq8b7up7PCuLs9qJbD8CcPjBYnoZQ5eQskW2EdkWC7A65ZUffSg9Av3G26VXMZQSQ5P7FgCGPADwY",
  "key17": "4pXNWczEpBdidgpVtXktbNCLmroKSP4j7r7o5SQevF7Vsf4TsS2pENZQpD2WGqXb8eH8hkmu7DSk36pHDqNAy8v5",
  "key18": "3UZ22s526EeBeqSasEWSYcAvq8JjWJ62Xf3xJoXqjaK7cM2NzZZcT7mpDTGWbMbrjZnRKHDHP62fAFXQhbRR9fXc",
  "key19": "4kdgyCE3aXvDEDvhaSF44zNnhDzJKr82XjuWAz6K9drgdUppMDevpnzdptNPscUqG1frHvKkALrvGzXwbYnSFAoG",
  "key20": "5G52ZGA5QgSHwukLdEVXXSZDozPA8nkEXMDNjRSL7NjK2ytt1Yz4SfNM98PnQ2xDi8aAw1unaJnewL5YxR5mxNyb",
  "key21": "5SnudFGEfQZG8EPLXdNiAaxMBszjwSPQdZkx9mb7UW14ipLWRgF2CMc5aQZUjp4sRvFgpvEsbQ9tB3GxceRCT7CY",
  "key22": "57iCNA8CGYGmUZCZZg3ktM5LvTvufjyw1kotaFSKhEZC1Q4xkorX433Vvb7eBFmqQmj7kWYhCovV1B7GomUmeAHx",
  "key23": "3AVmHhAdm5c2R2F9aXHw1Z7g9MCxYWoQ5CgCwiieJ7nVor6sBYBtSWvxAD1PFL6jLru7eqB4SHwZhrGqLpu4kAKX",
  "key24": "3W1Jctwtk1iqMRFez42wcsnxdbrcpzcHCStituKfCBj8iTcG5WPAVw7ouPKhZUaap3iaLywnawgvqYNbZBrh5gWm",
  "key25": "2TAAsM16MGPCq7GnPJ7rZ3WCU2CxazoAX9ucnZ4txjA8JVwBZRueSizAARoocpmQ87HrDiPasovzeK4Sw67ebY1A",
  "key26": "2Quqdt3pz2LwJZXkWqnbd1Cf8FVeX7pHrYxs7ZpJAtVB3PikUqiFU9SALCn8dfW8jUkAoRZ26mLMzSycCaPZBC8d",
  "key27": "gRZnxGh75KRyQGAN4zi1CAhRLgUt1RiBuAzNbMY7gjXGtvdw1mzrXzrfxE9YZTqzSa26UaYGzqnAbwRrU7Qxjq2",
  "key28": "F6M8hgSM5rg75yisGzZJ8ewdNo1t4dwuyjy8uiMj3J3FvVGPjpkPssnzu723DBmmVC7sXNBwhBUxoNq8wmykVh2"
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
