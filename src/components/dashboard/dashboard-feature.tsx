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
    "35stpmCvGSBhAsZ6S2zjqoBUAjRMr9e7aW5yNF5F5dTNLe6aydREtQd8XVwaTMqvML8AriUpzVePxvTFxL67WQJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49key5EXCchhXcFrgGyPU9gmdjhjnzMLbBkVxStpwggr8SGU35CDtXJksBRHGwjnWvG27HJaPqrxuJammtqWt2N1",
  "key1": "ESsicMrZyXWLyGfyBQpxdV6fQ71Q7hq12ek8yic4ytRjVvEzfg3YrpDHLcetTBND9ghRuGuyYda4bK5wVP5S9yU",
  "key2": "J1eNTwbjiC1Cr9PwR6qxjj5KWYw5QxKUaprsgn8dUyVxmDxpbgMYsEn4rWMKoD64GGdygGSYZzdNZfR1h5EHtRc",
  "key3": "5DCYQ8JdztPwWcdX6xqjQSVXURVRigXqAf6eehbuMrdyJLqVgpARz93p3hEFhd7p661PnJbztYKKwwEfkvKBxSWN",
  "key4": "5W7or3AFgUpmZV7528mYeBqjpYQfb1SdhpU1edETHjWnTqVe6nGXyfkYbfY5RfJNcbfQNxinsKKGx6ddp8yskLPM",
  "key5": "4uheohuABFfDn5VYn6hMFX1nt1m2j7s747pHKvPskzx4tuutu3rkq6vURitMYboojBCqNcCy567J6EyBHVbCRWNa",
  "key6": "4BE7BP1g9FeXdrk6BZ7Qup41EkbSs45cNFvPJY4HRoPHqD2CdYTEtjHEZGBFoutnM5nSY1TASUwV86XTtRMhS7aA",
  "key7": "3K14oenva2DW2ag51XKqHuBeNddCm7t1iL1xEjbMXtqkacP54rs5gnjGEon4rKgVbxCmheu6inMwUVJRGSUEDJ4G",
  "key8": "5o9ecHVB8wvvU75MyVWtfY7pEwN78hMBqqMoBGsKwth4BmLyCgYFU3abEtjoh8qr2LuPzk2SzWqvioYLH1ZveTdx",
  "key9": "2JzGnX3NvLuurHHSzPW2Q3vwAwqrDCrPW2eHjwCeHvtXGzatr1fhsvemL9xfjcFWQamxxFHm11evAxRLJ7qaCLLm",
  "key10": "2T9aArASGDMJpYS4VVCzZT8HzRsvaBk5p5C7rD81KiozsyBYaeq5CDwRacvZPh7S41G5Jx5RZikGH3VxW9zgrwmL",
  "key11": "fe4nvAC3MwACrtKrBqHmAeNvY68mhYseAybeNfKqWt72aoK7DKGL57d8e4TY6FCxUzTzFaSTcgiUKWWRNMAy6G3",
  "key12": "2gPuy3eHPQaAxiJPxVSZjPmGSVHcpgtQwYptE7uenjJKEAwz2TK8ZbMHxSWTFdFGpeicMuW5wgNTrE15T4W4pmmw",
  "key13": "3RAmMxvYLWmeAX5Bsvw9KcA9HzTwabdVNZn4KpYNDHYCyVs4YaGDSgMzkyYyxCn2s47b9xxzi8TrqxcBhDUciJXv",
  "key14": "3zXx22YfZUS1htEB1p73qi3SGZbfb4FWqQh5HBihkRJhFtExfZL54hrHXhfLUeLBKPv9AC3wnJ8XfspDJC1BSWZW",
  "key15": "36uKQFJChqmZtvU5oXLH1m5onXJXvv24Z89yhGwVkC37Zco9UtZ9f1C165UDAon6xhug16BACzDUcCXVPtki8J17",
  "key16": "4u1otwSo8JuHm7pvr1GD3g2NQzbSZWeY4Twe1ajogewfknxRTwnPRNGTHtn1DpRnW7P7eXv4p5qX5k2feJR3j4L8",
  "key17": "YUFwjW7Vc63BkJLD2sJKnAvcNoziJa4owEMQH1odYNQW23ojVSrPWgq7tYf2YHKuhU8AabpgYLWqCUaETkb9QCb",
  "key18": "38mBeKexeVdQBcmThaTL3ixiZSdtGyLYLiPNGBw19MDJZ5rrNUcbuosLme2sRnKUpZLipV4quJx4rD2N76tNsivB",
  "key19": "477cZ7P5R17ThaASPyNEs1sNuqRZoeuFt25AVe3xSsdmypZeBQEHvNnBiBHWfxLaPXtWJ73LWZL37repB9NRWY8",
  "key20": "4BXSDAReHCkLM9NssCTiESxU1ZVyS5uCmjJsYMBTFFNssAHq6xXwC9qWVfn8kvGP2xNdHkqrsV6YchbeWcUNGedt",
  "key21": "22rf6oGdhCRVQSsDesxnJpsmHN4TrUEAgKEcy6eShTfp5zSQrSbiUA75a8SMufhQUdLJLGeu1HStvm9puZvgYDP9",
  "key22": "4MKXKpFh2BiaRyrFVJpffeejN9auE6uvuoCeLGPXAVi32obZrVuZ6qUfD6XZtqri1gjv4GRkN8H6hrPSUDEEyULK",
  "key23": "4EcPz4gWeZWNSx7q38MHCi1gdvPN4UxLF2o9NDUHGNvhoETt3kTcjiT9Ur8jDwV96dfRVLvSVusjUWwiYbjcpMh1",
  "key24": "u6vU2jtYR46YVLc9pJponufsk3USeiSA8TFGz98SiNRdPftXvAor6PbcGPoWxLFzS3Ta2UAHg3THuPJsHvu3rZi",
  "key25": "Kz3qHz7DPvxiLViu3TtB2JMxSaTuRfEsttipSXmaBmqpXW3Xf8Av5qMsjaEGW2dhhv7PmA2Roq6TpMYWLcXDUft",
  "key26": "5X3ZJDCKJRJhrotQRsnshm7tqjAHACpVn8sWgKxHbrMciEWhBMFz9jL6vYAXtvfKk2M1i3scjcedzv1HXUYTeAVC",
  "key27": "5See7JMFFmkxHECV2zodYFHoxQt1RU1RwfyTgSbRyDg8DsUE2BPJNK9AnQX8ATZfd4yRbvRvJqXSAC7VjBvA2cr6",
  "key28": "4Ag2BLhvjuJ614at9MiCNCi8fp5WuF5hh6hy4aEkuxnk5vyqN6nfKqNVdtvk3NdjhvawRnUAbGUGxkk7eBAw4JnC",
  "key29": "2BEPWHTXDu17Lr3yWh5JYrmpzr4i3wZn3Q8LAnRoymcCFUpxpSfu6S5US1YibnBkSMkezdpmVuMKvNw93Cdzdzhh",
  "key30": "2nJkdHkApeb6cA2KQp7xGz2x8FuQM8hGvWBUw9SgBwk3Qy22RKwyofU7iNcSPbnTiBddU9ZCH1iHnaGadGFwTPAP"
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
