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
    "4iwkmpjaEezEFLhHuH5pxKZ4sNjNjr34UdtrfznxFswoP1qMLcitwrdBjNGehwAFBireHPs6TCGYuG44S6MfzLBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9euKSLooAuvpnue3MnGpadLT3iZm8SvmrJh5HpHarKkXGTqQcbnwzjAvm6JVU9ZAy9YsS3hJqeAB9FPCFrWUJg",
  "key1": "5xJaayTfYigSWYP1ZSi3NkhdhecGem4aeVdVzv2RqZMJwNQoMtm1S5BZzBGadQ33hYBrvu5zoBaQ9a9Hky6cAYpU",
  "key2": "3S2ca222ecg4tcSUPsHMeVxPzKHvaFFHxbgwoQSduVHX17CnG8hFkEb1sZ8e7cTjfrx3pT3zXH8BnoTAQHBh6Q6j",
  "key3": "2NULaqamBPn8ZyzckafJGMnhs4zLhRRPj1JNrNhSXvzSwvcAEVcqh2BaKpQAVYpSFLoX36Qdg4NZKYnDs72YKymo",
  "key4": "3AXfxSaffopzjLMBS4ie3o13teuG6wrdTsU5T2z1aWXkyk4XW8mWPE4oXMYCvysEH6FY9i8zx9rnHQM4cCKxYipp",
  "key5": "3wtNrrsmyBffpAM4RG2svTrdbPx2c9F4ey5WKGySr6pzSUNiN5K2HfvRhAHr8ubMGLJ5zDzAJWa4Fwfrt2zXJxSY",
  "key6": "5BQo7Vp9wix8wwe5rPvTzzT2kDQU44KwxYSFAY1nrGHdo13pTCQ6ujm8x1GPo8Uhh8UZWkHAW5p4jHrRDiNaAUXz",
  "key7": "3jexRK8oQvRFpaNWxvW1RSYAyrBQXxT5EExSDhWcvX47CZTc7vyQG4aEcCne9A4A1S9gijcY1jrtAeX8m2xBY8Hd",
  "key8": "8BzLnocL7GiSxboWKRgvEGVKQyuxQhVeUddWeJBv8M5ksdtLPptiCZfWZvVst49BGhaTd6CGwyvmegv2nTYie3Q",
  "key9": "2yBQG5JEek7rq3S5fD6mvVAgEAA993iqDEgCidUF6fzT9hgjyZySTcAZdyeU7eNU2ckCJjpSoM4EDGFo5JJG2Sgs",
  "key10": "2ckmq5s4jqZp22HrhMF14kKAjqFMEFjzK6DZBX5Gr5Cuc1tn1fZE1BRuoaeHJffMDcU5jNUgGDaip7DpWffwKVSh",
  "key11": "3v2bEfFW9MmrJSu1uokYm4uyirM1xN4cwaeTmHaeG6ZZtrXcuisdXYhah4YWeG7r5uKLwwNWP1UzeG4Z9uW2JxPB",
  "key12": "5mKSPoaZ9dhiDbHugBRz6gBpm2fYjBpucjDWg2Qphx3YWdKSan6qURF39zX89JaHNBD7MwMxo7wKCND6zukP9XHZ",
  "key13": "3KSUgX97M1PJNNYuZ2B9zxAcA8w8YjAiVaQgPscvoenqCMhprn3VQrtWTSxavTSeXLMZ3hLPcfhrA2vikmteJHb8",
  "key14": "3UZuigsiTaFEWUU8dbvC5mVF834GZQvGtChKFvKqCTHHQJdSaw3M11RRTJJBE3h9ArMijtwvdU17MKxQ6HwpariH",
  "key15": "iAAvwdonZHWh4Tv5J2FD1BK7qiNjj5xs4b8aqtYhyrrLs8c4kb9rLSuz8Mzmph9GXPU9CqvyV5z37LGVgxYcC6u",
  "key16": "2tX4KTu6rTWFXKPsP8qVjTSSj1ZZtiuAMa1CZwqptjFj32ocY1kbqGJGk2X3JwVo2PLG5CNNcChBSMJbsEvW4VMp",
  "key17": "4ar42mDadTxrYrMEaQBVG69Ka6qNKaoPhBXtZzxxnyGQXomzbGRFKuydsRzYBEPrxgtoozyrNcXxhHHuEwT1SqdG",
  "key18": "5ijeks2cPtVy4D4LQMaVK7vWPiEWRP2BA5VMRxwm8TgVZTyrp5QH3bAhyfxcD2wb4dqVAnkpBEwNcxnqeiG2BpTK",
  "key19": "3n4ZSbqWck6ZUH6f7xciMxhNktXvs2HUqFccxoX7DSq7Be1nM5BWbSciHLUVwCc4NBpFnP7UhKZfuWVNftPEb2uL",
  "key20": "28huAN2HvmTggad6WUXPeqerR5quC3B7YCSaVZeKs7LpgfijgeaAfQdK99mfZ3nAmcyJPv7CspNghD4j3BqjGH8A",
  "key21": "DwCEewPMJTGLH7bpVYtTimMkAroVsrmn6ZpZgLBUDBKWXemtmDarKrA77DnLgXGUnSNaWjC6dNKcQiHozN5qGgS",
  "key22": "4ZXvv9nsd7WUVh38RfA2mRmk8DHZuhTm2FkEsUDc5wsoMCP1h64SqT9xx4Ccr4veHA5moBYm1pGWtbDwp3Bc11UQ",
  "key23": "2ZiFfqNEFoBNu6P9bp6NqSYN6DFUf31c5dL6wmXM2WnufZ6q67A2fKykcjsbKZZYYJMhPFTmRxMQcZXFeoc7fgxk",
  "key24": "42cXaS4MsrLrouABzYATNAYmbMyZCZNXozZQeCbPAVJ9VsvwKFhEAefiJN3ouGiiD6k7JcKN8eMQPasWvqypxbyL",
  "key25": "2ufufEZQiJJcdjF31M8TsMbpWG7SFRMRshMGzKcn89YvUf3Ed3d5G8j7stgNviCs66iMgX4ShG7WHk1J8K9T5azF",
  "key26": "41K3owEUoTFFkH5RCBtixpa66Yh3KqfMMTz3j3pqjskcu6RqxavzqcKTfoXTqFL8qJWze91wMPbmDECT3JVBZEjt",
  "key27": "5ZHHWe3MzrfTL1LrX4YdxykCF6MeEoB9mwuJBhgz3ffbiESJmifRcwWg2SmZ3huZpMwJ3cKBFrWu5bv9Nk9G2NWR",
  "key28": "39brUqJPvTZNAzCGnej6SyKztdS1gpECpuRskw3rJzJPrLCF1Q3sNmQ2JSkEjUp27i2rAVejFMzWkaW6Tw353jEh",
  "key29": "5QbdWHHUUkdCb8pJMzUpSENxUMkZyyxX3szA6fqyy3N6ceYNd3HR8zwrYmkFNbEwPJ47UwdeCqVWBgapsMXtEpU3"
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
