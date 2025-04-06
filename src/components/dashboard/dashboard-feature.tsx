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
    "kLuFcg6U7ozWfYhH6fw4KZTvmR5av2VEV4p9nAwox746rigFs3ctKmKZEVunpxSLo1TigTdmbh1iQTt9GDGyxxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppqkdBpNk2B7hJhNJXh23xo4nSkGE9ySNaJoFzov3KJdihicymKZUx5Wkc1v4NZUcrbbtgRm7myneYyczBRuGHS",
  "key1": "4dHExVWteC9Ut5DUNvWv7BhKCUrmQ1UupPGVcq5Rgn97aYkGzcsebQmvUCWJeoNJ44t1Z1yCEJJL1Uy7EXmPsQC5",
  "key2": "5hbbtLgU9uSCaAzk4sHuNoeiZnL43HaDQkQ7i3upnfaXQLXQ6B8oZ9teiZjET68yzR7GNe8YPcrtp9dKNr4zQu3A",
  "key3": "ZD6jo6McTtPuFPcBt685tUjRQhoNr9vKrd9Dae7F9zYVts3VgRShLKCSh7PdTUPy4r9c9Zt5obuxxsDStSz8jLN",
  "key4": "22FuRU1W7cj5GtkbXjzfyz6GQAz3PkiAf18qL6h41gMqG94DHizEVjpqzR3AeMgEVRzss61qFzstroWYEpP8tXqX",
  "key5": "E5pkwz5tJD22F51aJrFHq9A8wMcq996nnfgR1bZtj366AbeRqnRGb2623wmrct6yGKjpDrkMDqRWH61piztaCWj",
  "key6": "2p1TkwiuHyGNdnzSrFhGuQJ2XXBW1aCnvLXe64uBaLDnuF8Su5DoSVx2UoUHUBRnR6xKiRwfLpuu6iWh6x2inBFz",
  "key7": "2C63FdyxHxrHPFAGV1CVjg6YGJkScgpQBSWrzHDcwk7HcCiJtEz7th3XvSDSaE3BFPz6umegAj4LhRrDBELFKkmJ",
  "key8": "3vzdzXA6qcgadtPr3MgHh5ex1kZK2SfpPKM4fRvLkioBT5W5pDmyhBc9qhvwSFeoJd186VbRhQzpRDS2AQyU5hEH",
  "key9": "USsEH6UEKxWuKk334y1m8pB7AFyduBgqTRH8EZdpTkkhhQYBZ5jFffup1Lc5fyHopRm6xScwDnXXosoQKniNmMK",
  "key10": "5q4ZTAaXyyTdFfXnX6eQN91DwZ3CHs26iXu3GcuAESsZ8BBdnRSTs4bj2FapP9Xk2KTNpVxVsUmZEKEo34ZdH1fn",
  "key11": "4dG4nhxmNgewXcfu7VCJikowBhrwpsw6rVQcK3SkQGbKNXNh3stXzoPx6XRy16UbdbFTEDCDPriR7CMV8PDQPPiJ",
  "key12": "5jitZR3sqHiUCEByJ4PmZWNQqTGG9pbeW7rs2oVAt5tkDhZZbAsVLPHKP3F1Lq2hy3KFfVPcSD6xap25YZMwoF7b",
  "key13": "4XoqWHG2c5VJxe7yZDWSCHjVokwVhXmdNkydwTFMuXCqZnXqafSFLv9LKJX9Mt4iLzYZvXDqWq8BLYSCiWpTHW64",
  "key14": "2SqQvCbnS1SH4BexEXgozYCWr8zWMgbcnqpHzxyeipRii6WoMNJDDKkjsCdqJf1BR1nYSe44WifJ4rWjQW5nG9vD",
  "key15": "4WVUfTwCG4jNGEXvwhekFTGKxGSDhDDzPueGie1FoTrvWvCF3p3CmerKLRr4mfBc2LA555RkDx7XbQDQa94Bq6w8",
  "key16": "2SvRnU9yokES7mKxqUfPgsTDprhJ841Etirfw7xZWNRHX9nxHbYQxXmH5SUqEbSoNGReiLfRu1DVykwyWGdg87ab",
  "key17": "2EKT38w2n3ohbWKC92ojZBjUFMdxhTJV9xtripecxooxGb45EoDP1gC7MmhD8tBufP5R6PZeXskF4HDD71EdtvUM",
  "key18": "4PdiEdkGU3JzKAWeXMgD8LU2soWD7Nc1FfEbuThNkUtpYr9ywaH2QFP6nzg8ZHXtcrxACVHFCYH1CHKX316raLqC",
  "key19": "3rRZyHzjmymDzr83JhNNVc2a1Apc7LhV8zxqmMyga1ppSWmZsFn1Z231rdWkVmQRndJxmhLY9QS7vJTNWZ57LhVP",
  "key20": "3CTg2UuVUguPDmsCiw7sveRbGFFpNfFR4apFvELvuYT9ks4sqQQ5AJ1W9mnFecZUsw2Y8DqNG9exGnpxgSmWXGfT",
  "key21": "3br4JCBzRh6sgFqxsrQnKqJbbF68Ci3PYDVfPgLauvJo4zefpCjtrxmBKEAr9uXMGSDsKoVAinTPdk1vE1FLkikd",
  "key22": "Szp4Kd2bhr49E931rfHuBP5wnNWsfb2bs3KYFQXKHkfJLj2bcUpdT2JYtDkCxRQ751MCoF2qZ24dBLPrFr2pviR",
  "key23": "4g2yJUwSiSTr1NBj19gFXMzi5SXbUgpMSmwuD9L7g37UcsoaPsHW1h9XWXoRu1Wcx12PtMNzyJVKuhcs4GhagHXA",
  "key24": "4Hb5561Kns61DtGP5CuwCjTFUA2R2jZnt341nw49s6etnv9UG5HHmbrq7yQiampAcSVqCjVgmuQf3UwQUtsqGqEG",
  "key25": "5ezkqCpsxcooxTBZnk3BjU7essQvtC96NahiZ7KH6GCkhrw2vzS47WLz5kNjjDUqVNFT1AXPN31CoFDQ5jtew1hm",
  "key26": "2JqNGJiF1AJdpxs328rXLk9oWgS4AYjVmAhoWhhgPQcvtEnJA3NCq9C4ByETrh1q2RvTgLvpxcLYa4pBMfxTmfVJ",
  "key27": "5EL5qKiVBiZWovevtPsVHKGZNrPu7ykTPj1ZP9vr6yvJtaAjnojQBsoJBALoK47pjMMqVZVEFEUdmRJLFS1wgVHs",
  "key28": "21VHJtHJdyCcbCCPNcENWbNeWLQvkDd1faDwGhoCwWP55Nm4xT6s7YpcS96U2rPEiGdCzFWFSvhQqzGKj4VPd32X",
  "key29": "2ysAQHGwn4Whu15vcgEi9nGQHFXvKVyiXrgNX2hxPsDx8KuotFrJVQN14nJHNjrDpwo4cQQ3PdCsH5AGp9xUJkLa",
  "key30": "4QDMsKTjYggqhBhVPYrcA9jxK2PBJAzXuJdVZh4AW19WyvPYVU4iPBTkCWziLVhdP5swt2X5Vp93P4nTrbneCS8k"
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
