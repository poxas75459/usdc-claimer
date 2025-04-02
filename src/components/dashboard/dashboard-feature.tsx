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
    "63VKVB3e4cWp4GAA17cRHyftcyEyygQhGj4Ybn231V2TMMqctoqERGjd1oZwcskMc969fJXPGzjffFJPgWtZegEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sXfJFDuS2PzxNX88SShqX7hZwNLvsHhzHrPCKH3BYfQzVZ45JvsCbBEnD74hwVCWmg2NyTe49qZcwte9krtj6Ln",
  "key1": "2nfrY7WRqFCSB92NXo6msRyRip4gcSB5kuEGGuYhkw5g4R2Sm26NZW1yShWQyjZ9EVyZ7fZ28r2pSuB19T3p83CG",
  "key2": "3mCGgZ1ZLg2avK49dUBoTFWpyrny86u2YcVCTsHA9y1k2ESDNiCoXocnhJUEtNNFQpuvmQe1cakBKhC5SYjEwVXS",
  "key3": "2yWjKRx9QWANak2hXPudauzhBXDpXWBz3NR1TWTkhy5KTY4igYrXTG31c3uMDBRLBVBmQUjhS5buVfZGQRMrgo7T",
  "key4": "3ZmNFQWbbHGLJNwRNhunSXMJSuE2F7SfacxNJnnuD6pBw6DH2iDK1G42CRHiNCeXFcLNHZPpaFzKWEF1c6uCsdsJ",
  "key5": "3KhpcaF9xZvMjPChTqTQuf29EUfYtcMWRoC74T2Unbmvf1imLdkXpB2ArqfsiQXRaB9Wr6nb6xWpuVxcStXEnwMa",
  "key6": "3zhS6YWe4WtdVWvUTFK1BKxiobW9LGRGFfkb3kBhEkAe4EtTf5yMWPzX5cc3mbHYTjg29rChhQ4baMHbCQG5hQwJ",
  "key7": "kLrsodu97w59U197P19JRm6BsZoHsArQ8MgpSsmvHZyptGd9p6o4n3vCKLMFHVQqwd2ZEXf26Z2EbjwGpdhrFFR",
  "key8": "56AxGWS8NeybpamhbGzBrUBpksAHcH84Nkk6MQvKdvAa9AXgWvqTawFCXXubKxUViH51TJYJsNFu1VQKq1nM5tZH",
  "key9": "3PWmoCMfLxnjjAgN3fFPTLk6qSq7EnoSkDw6NzmMzQdTzeqdAfyM2niJ5GrPmaDZbQB2RrwmdNrMJBQHxsFRRivm",
  "key10": "4UEC7q7fZ6RnkR3i78M9voKrqJ18Nw2UDiPsMkuk4u7GLxvSG8JScn75iVonMdV7UYCw9RuVXL2kmVmR2FHqPVM7",
  "key11": "4Nh6ohoQuHgm4734J4QuC6ZPuuyErDUsyQWjdnHQYkZoYWANNBNgq4YyqWbXaMCapvuQi9KE7A5qzuoHEr4Acyz5",
  "key12": "3ULVgsdmLCkhwf9FkEKiu3eECxx8gBdMEZkQAFc89vWWHDFzacet2EeMTF1RFrBuRHXaz6Ea75BHLxcM5duB2qdA",
  "key13": "4E8xECj8QNTBkNXboP9a6TBFPyaPwdTac279qZKrqydNm8x5DUwf5h8mpq8aDDqiKQ1Unntit8gajC1HJSTRR1pK",
  "key14": "3xJtmLFVvqxJGXbV2WkdvAdX74K3W85wFbepbpVYjqV3fpJPMaXXxSii3PZzHVhEcqySVQp8HLQeocCt3VnwuVz",
  "key15": "2HxcePVhSTUpcKZ3apE1VNcjvB3PxNuvckRNNm58MBnTTHTxBKfCGcj5EBdVR6qfb7HRiryz3GasWg8HNdXgUPKg",
  "key16": "5NDRxnveMmjbUNQ5LVG9TJNJ4ypgAgWiiYfwD4shCHv7S7DszAZP6VbXTtRwERAbYSTgMHYwyXwRv8H5TirfxfZB",
  "key17": "2xuKHcVg9xsvogsQrCGNcDZXUfEWunPxwPXaWU9wzCH2UokPi9SNn9zFKMYP99WAFucgN3ZLCwdEra7bXT1bxWeH",
  "key18": "5EQQF7SCqnYmmJFQJVtiTxjEXkHziHFWknbt1TmtkvrLput2ejydygDvbJniuAfsxYaLZQdy3JEDcy9Vu5mMdgDh",
  "key19": "qR4shQxxWvZBY2vW9QzpR8QCCe59FQsUQxcbAq3Ahw7iuAVf4Vi7goPmfrdtc53Zig36ArAFcSuMmBGZYvksoSX",
  "key20": "NiyWAdwkpn1bm7StGRwRgCh5u54HUKmtkPYXQUvPkJxa3j3g2wTEpAezw3SeMWnga5yC7Ap3mh3d7hBoufaFdLt",
  "key21": "3fra6RZskYVBBd9UR5kqFSfCjQ9CQiy6nrD5a5uEpKeYZvi25EuGaDkefxqshdR2a41oVYwXcYnV3qEc7cN7NgoT",
  "key22": "35QmcG9n6GtMukYkqSDfe3mKRYp9Pr1PUAd2v2GdMjKvAapQdZJ1eaxahuyzRZthTsbk8YXtnVxhdWZq2zJ8QEbY",
  "key23": "4dGMxc3sKcJonoqiDxGfo9Y3BuTmxhKVMdwuN19CJkNqQjGUZW4yQPeZ5Dp1tWKQQf4ZeVUtJUurigJsUoZDVfyJ",
  "key24": "3SPzFdFWgZ3QjB6XHMkoAPu68HH7FnXPHvbBikWQ92KajmSZpUFGA5fPHjdbgv4u2hcrjWSF3gYWPMtUtYYEpezR",
  "key25": "2NUKC4r2ioLB5ZpZwMBgZEPMUVGSx3xJkuF3mYdKp8vuh3ih18Necq5uKQMxFy7tPnrbWiTF9ZUE3g3WG2Enyfsb",
  "key26": "4pfT53TWJBFGCE5dzaKdkPazPfst3ZxtXjkrpNQsNdy1HnAiVQcZaF8rSN1e4hfiFGiqBg21WP21RVsYoVWkF1Ff",
  "key27": "5xSKTpP9hN21FB6s8QzR13NznghCinGYBH8EgiEaMd2VhtmPgnLQr3UdXtn5Momvnj6xNDJVDLyqjNmX2w6wd2pK",
  "key28": "3L9hLTpdyYTnX8GN6cLBSB22FFvAV4oqxQ6JoiAaT85EZemPMo6rZkCqpJVdiQqgvfYrNRCBGLnhP15GG5LPXEUt",
  "key29": "q76KPwrpgxaHtFvPQN6ypUGEJHafxxPy9dKZGYUwiXusfWKNoDj2q8fjGsFihLtKT5Z8GHpCL7ucso6HZNvBtMZ",
  "key30": "3CFNJeNr66rtzw8WyQF5PnchaFmqBJZBQyeaHRiTzQG26jPPnVsXnoKFh5N4iXjTK7dVbTLhcqp8R5CvqxxA1dsu",
  "key31": "hNfDkpJsknKg4WuaH3Ts1d5Djx7Hf2xKbUJyqysXYGZDECUCFsVnAMRqrzn3r6uxjDUrHHnaRjQHYjaFWMTev2J"
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
