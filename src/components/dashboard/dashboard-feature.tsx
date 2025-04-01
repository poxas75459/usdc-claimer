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
    "36SSj7cbBWSrTW19tA7T5tDW4fnTYEPKMjuAqCWuLWbj4PuGJobvf3kZMfM25SoFJJHgbWH2zm2AqLq6wfRV71sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hivadyyhtkjXXNESJ1fQ2gUHFT5buzZr9VjH6NszSeJXvXsJywKuGqk6mv7nWH6Piy93iEggDW3EtPfdgTT5gmJ",
  "key1": "2fSXyDzLUmrriSEMfy1JsBX5Gzyfo9gfARZTFsqP2XQ7Xc9Ddn56qnM8UJ9qqUa3pdwV7kugSmRgMu8RgtEFg1p6",
  "key2": "4iauRAsvz9DXL2ssFLTbrrqRqdyhkRGNcsxprZinxzCmB7YeMKd3iZkBNin5612jvx4uQVYRTTKeuzq93cFgzYxd",
  "key3": "5tEXzgRgCPa5wot1LA1z2GYaKHdGrYzK1N8FTW1Pxm3dz4cMkNnEXwfd73jkucGhmv5NvveWtWG9CJREZpkP4CTy",
  "key4": "LHrcn8s61iHuaTSnR1SsawrLLNJhKraXDEYeMpcRnmxujHL5bgD5zAJ4Bww3uqPB5KFesw7LP4yBhsR53NDv54L",
  "key5": "4rcSi64vvkTx739TpUTxu8BDVvtLnXn4QBR9varTFMXt1N7rKvk2UviJ4Bg4UyBpZW2Goo9nRLdewHAGfb2USuWZ",
  "key6": "38KLYMSusdJ26yBH7Eey8h7cccZQyzWLieg7u5CJaWyFkutwThkWYPz8krMKHByg6rF57AzUYSDYxUniJ5KsRZx4",
  "key7": "5LHatLUiQQCyRYsH5K3Yr62srGcYqnHzDsJ5SRy4aFxykcX8JHvaMkeY6qBNppg83ar1GeJdhLDSsr7jbRw5VvvA",
  "key8": "NN4cLWaaj5sjA35WigXYWdPcYSLLBdpqRW22v9A51VfFQkCs1GJsZGL83msDPN4TAV5mAYfAoVpvqTnbHp2RAnU",
  "key9": "445B79gpHdUCFVsSmjyMoh3xQc5zgodZ54WC5vWCK8HHhY8FQptTBU9REtvqJQhmtYcZeGgpUkZbKsZKLVLxDQo8",
  "key10": "5KcAF9zkcUDX7VSXj7ziJTRc4fG3PdMAkJYyHwWf4ozj3sXfhT8jWc9qHnbjyY4ur1TBwEmb7rV8bhmsVP4qVTnh",
  "key11": "2mMitKRge4Wd4jwxHKDrKVDeS47kcksbcLn7Bwg1iUkUX32j2boar6hPQeEzvHBk4RjCh6D7cB6dvAcykfuddQAt",
  "key12": "qDQbgaeNVKAYDPNptfbXYaZaHbVKsy4KKyw2HsLnVf4jxxnSgbbcY9978XceGaXnbgYGvxpww1bD4XmgVsAKHQ9",
  "key13": "5Z84vtmv4GsxQELj2HVpHwjvTjmd1zZt8DTPr9QVNzESTyz4ELUx5HwK2UDfeZAQB3rnbtXmW7cfxsbYyKXLk2jN",
  "key14": "283d2WNfgcC8Kn311uhZdgGR1yFfn4jUmguoWENyPFBD6K2GsJkMAHCLPikqTW5mQDBQ94wBZTsqxXmF6i52tho5",
  "key15": "4y6GsntUVY5gNrFNpK1R5fxb8pwMrS1DddbHNbZmozjeLp5Y3otNqeeogFx5bsNKeatNUQcFMPUt5GZxSsP1vzAw",
  "key16": "43aGX4nG9h52aZfk5hdHreFqGAmuDDw3q5tFM89dLKSkxFnpqBptSrUT7iGa7whgE7T81VnNQYx1gBB5jXC6PGss",
  "key17": "4Q6ym9i3BDu6JPjagHT3c1cZb41Va31VsRCD1fRqog3WQXtvYscb4zs8PRprL2gs1927UhMuH4pt7pbwKTLqtxKy",
  "key18": "394Rq2wzUXwMNtS82hsRC61V2BkQuzANhTW6nKK9UsJB2R8B9AXrCUtF9A3hKKUBomR4MSJSmyyvF242stJhtrX1",
  "key19": "2gkmqkSUnV6ahvcaeWFXVGVj9CTq8ME6PZPvnconBFFFJ5q49U8XiWx9ENvjWugwUgQPZXS5EWpQYG2ewbto1qA",
  "key20": "p9wDTLY7DvDRAepBnCisE2ZdpX8pzRnaCZJGdaXrVscRKFKKjDFtiN3pw9B7hdEFUwnwBd57EqJsjXpE58vG29a",
  "key21": "L1Tr6saJn66GYZXTt5GyM1b6tH6KCJ17DmC3xeDPtTwqx4DuGmbrz1WbjjtEgAE7kwfPvPT9oGHPf9d4NAAq1XA",
  "key22": "BUdUy4JPD32CEjCXJ4ELJj7BF1PJD4iXzJZaviNNqea1jZMnc6Mo9Ys6fVB3JKZmgpbr5L1Z55avW8vSrpDoRBy",
  "key23": "4m1pBDouUvR6gd36FSZoK2CghYPXVYcVnMhffmLo9EZq7z275KWS5PicXcPncXp5dgRrmqZsF45xAW6DcuAbfT1Y",
  "key24": "32QzQGy3E9hyxShRXS91ha2bqJfKdjBBijJDWgtVe1X29sFjBNiabFUnsQCH8XiwJr2ZA6k1813DbERqpEbgeXsB",
  "key25": "5b5Dc9BeQekcTRSg5n3QWUegz4yW9L4dN2Gz4F3qf1iJCBf1r35L4AahE5Ymagj5kjTdW8PxWfJrnhG7QfRDqpGM",
  "key26": "23geBPD2NoWCSuV1mXpmHDBKwjhxYVJgUpQgHbYYSuoupp5w3vByqduNrxEFp5vfNxpBr1qrGRaszXvhkojo41wU",
  "key27": "4T3kXRpq2X4dotkZS6D8AtXkJ5aeQZNwdB1izSfvdoHeZfgeHwM3qRDCqqTVTt3TaxDoy53xdk7ywyxth23cW3ED",
  "key28": "2S3icyK4PDjgp8E6zvFzAMFHK52hV12wfqUZQXoRgKA4aTXFsdofuMnG4vFgQuXHq27WP1zXaFSf23UttGQqV9ct",
  "key29": "4Aybz7J19hrvJPYSxtFkfisYKmTpZVTkF3Rykd4kkcr9LdA1PsggGZmDjTWR6KgpKcGMQkcrdLt3dDD8R3UbvWCN"
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
