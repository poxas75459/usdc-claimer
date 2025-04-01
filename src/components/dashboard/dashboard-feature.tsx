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
    "2jBKw391JCGCttdbkrN6N9Z8Xf1MadSAEdzEqqpzwdd4A9Kbsf4EMudzWHgcG4FmX2EhGAKNUrgvvSPXXRsbtSqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "njbDPnabnG1CsSXLHsqSy7u5pjB6J7kVTWWh7PQyqFh2LxuXXX73S1mYC42CiuffkgivD18WYNxCT9FKW9trK53",
  "key1": "4wJ6rvzBrHr96EiwRPs2j7RLyDp19HkDrWAGD2QjWstNiuFPqGD9HoCjefdYSkLxPAavdxGc5vpam14EaP7X8i92",
  "key2": "67a989p7EWn3F6QFt7qBuXt1nhtjyrErxkpKjfXKXDApr2npVEjFgVLXnSYDaQg2Bm41gZHW9BwJ1puMb4wPrsUj",
  "key3": "MFMAdLaBXsRqrfEh1jXaCDQRpYREUqKy6DKDYEPQE3TZJngFPDo2ANyyp2e1i2pb4sVCzf7f6U1FxVjigtyei6x",
  "key4": "2sVWqT7NaVGZErze4mDNmFKYo9dBh12NLEkDW1vaUM1k2w4xR5mejKBWr54RbirMxe5RpjqgtPU2FGgPWDXL96Vh",
  "key5": "2pP9avT3XeKzt3KyXM7gGtRkcsw2ThbubQkMF8pEJn9y12aA1AKye5zv25cHpwwYvfdbCVNxNcbrQoLcNJDydenv",
  "key6": "2tVbd9cZP5TjAyE5XPZrq1DMxRYm9hK5oWVXp5AAV8d8XU4WEiWmC9YhKKCgqTZmiX5Y9F3qCmQ87KYJ8mVvriLJ",
  "key7": "5DdmLw2irrh2ah82CkerWUfuZwXik6u6WocvJrWGcsHT47gR9yuViSXL9QVGh3yKpBpE49Yfv1SkJkHiFsQeGStw",
  "key8": "2SgpSMWYoNVjj15DYe2RPLn7MdUXhH3nsjpqX4AjJ9p4PJrxy6nkPRxfcuZZRpiUmad3PyY174AvCF2gW8fZ3TZ8",
  "key9": "5XnVgafAZtbkAxiMhkvTjDtmF5MS2dgZBLyr5Vxc56Xd1W769gzsKY82KQ6zg7g6RGv73xJu9HDquALEsBFqAyiC",
  "key10": "3fwRwb6iMoXn52xcmPvuF7W4GFz4AocVViP99e5nNHb19nqS19UMMMw4T7pa1iXQ8iZ7BfYPMWzG3x52G22yEAQb",
  "key11": "4EeeNgtdAMrVUXaQoSC7PfSEsMo76Yo7zvsW8DEXBsMYRc7c6d1qzHuZ4LTzDF9JpCrZVVA4LmwsG3btNdxRLSQq",
  "key12": "3n2mWYDuFWKMMN776VrL9UhF1u4NWGTs9rJQPP8EA8ACnRfMMLf1gQe9CpSUhfM4frhFei1JMKGhUSyUgMRvTqRB",
  "key13": "5d9aJ7SbL9Th7oYC2j3bxAQBRJef9qEXeendj2jSLqrkw44vsMyPQn4mqHrx3CTe5px4f56RYPBDA2T78Bd5kP4",
  "key14": "23NcpkESFCMCLSWi6i9XZoaN86bmE1W8JybSaWMxJeTnS93yJhzaPEyCdpJ92eZAT8eJLTiHk6U1h7PjHr6yLHNS",
  "key15": "48uEXb7zEZ39ikL8zv31D8fRypgikREaUyy2iqH2URo4YGvxzhavqiSUT2CuJ6WtphVJMoSRiJzd1LqviYsJ7Pyg",
  "key16": "2cYHNv7FuVUjx2ysXwmC9BNHT3ZPTuw97Qm1Ae7nQM7Md7Z9Jvop72ZTnjA8nMCYDLXCAoSN3n7FWH1SxdMGYx23",
  "key17": "fGiwtAwLS18KnX2c5s73HJDzJDv4mYCrNTLtn47SXkwJ2vQuJmvhoUQdtckSXGT9b9wqToiULKL9w9ZquUBkVKW",
  "key18": "5gCKDDC98apGCRn6Sc6LiL9YcTA4prHtJUYKSY1NzSJTL9ZCmB4RPvZW1pw7YyXu6hd62ytgQfqhLvQZhLByfAGG",
  "key19": "2bBLU7ghfYSw6LmfZd7kDbN4GwhtpUyzPVNLqkjbZXPjJnKnAz3wn8QHsyTfaFJZQKtuNwGweJPN3q8DZx542qRB",
  "key20": "5ZftDVGCCpR45juZqcgHFCmGqQg8QUR4AT18i7QGarw6t9Zr1b661yuQqbFfL1TU5HEbB33DjWBChHPDmEwYHKMY",
  "key21": "5e8hQ2UfbVCfqB3hrmr8L5MY78nwTmF6NWGfDD7cBy6iHhjMBmYu3swjdmLvsiBoQKRC4v6PEwaMZEXSFC3B3iy",
  "key22": "QtcaLeNoYhJtxVbW66Lm66A8BnjFZCA1FkD6byWYXgY4uiWdUPcpTqZfEL5m7F7TvmwV5e8EpPDxqQBknkvF9UA",
  "key23": "2yHuGR75Pvm748i4L8ZENboNbYLWt1UCkDsbi4BE1qtYVWsyusobRDLqkPNCevTcazodkT7zj7Xwkp1Wb1RH6Th1",
  "key24": "3DthBQQBmD3BXh5YeGqrTJjL4ztDsdRDMv29Pcbx86dMPmyyrtqC2LzTpXMoPxXUaV4d6aTNzkn9D3fKPN5djXqM",
  "key25": "3HeJ6byDEXZHmcbtxoTVm5qc8qZAGyxCYkmzigq53W6u3fVYvaC1YXn1e6MzmKLKY5UWx3nESNVexULrCjExsC16",
  "key26": "4VqVhkohHyiTtbdEYTfyiPfBoPUs6BqVWes6knUsK4qZBn7t6e37vTjoe8YvNcDMNrhiB87zmm2mRwVVMiSXrogQ",
  "key27": "3GmVjGRuZYQgowX36D8BCkfxeJJrxyohpf46VaFVBR4QKZvncL6ggZFMPF51C8KBg6URh2DvgX8JBw66vzCPtpg7",
  "key28": "27PQtfk1Yk2YEi9TEBtaqKnfpqnJ4VLmUZAwJC9ZP9CbHLeCg84KtHt6MTsDnyXiFfCduSWdME1YDVCQ3HNijTCF",
  "key29": "2vFTvAeDS3Ft31BGBneXjLjALxhvU1LP53gCdqAYXmgpkVG7SuB22gisvgyb4btEbGkMPPUbP5N568JqtyPsHDQd",
  "key30": "59pWnr8w1Aey46Wq4jh6q2ABbVUpmpHJ3QwrfujBMmcisaCEkckYQ8x9skbecFuU1374qtvMpP4FUSyWQw1Yqmpv",
  "key31": "2F61LeX6T2ieDcHdJzN3k1Fu8b6RdcWopwQYAZVhW9WPengL19jGzLKG8RaUdkx6MwnK5sHfRJZDDHMar8r6F8LW",
  "key32": "2pp1LpTzseBdduTxFkqBt25ifKc1c66HeTpUiVYzwRuPgjwDG3oVGit4bBoge3o5QzZW8R6wotSBZQcifnYQFTKM",
  "key33": "BBaaxjJiXdfDxznPLQ96iNraWqvH6Me1PmwHu5ZQF9zTm6qDaqDLty5MMWdRGjgCSJzQqKeMCNwcEL9H4wDRWAj",
  "key34": "oVypBhUkVZq77LfCHFKhMpxsxUmnakP7KoQC9HsBLzcySFJUusunk9H9fPamZTPkC5NHXV7YGUGac26VFzKeAxW",
  "key35": "5B3RCrR1cpbczW8pfBKhDJUqmBdXtyGZxnhG79mKmAHgouCKTRmjKBeMf2Sm253dQVS2iwKP8E88pKKrqo9z8q1R",
  "key36": "4UMrdN3rK2nQCJZhzLe6HZTA6kvTojNsxdnw7rf2cTtJYooQAVrqEMAmiN2bHSTDe7gv6zWUuZMxPekT417VD9T7"
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
