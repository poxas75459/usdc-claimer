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
    "36rpSV1mSph1Yui514KPQCamPBTuYY579qAuADVboQSaKxtSDMCMENCYTjgsrQEfnJWMfLbgRcskBPN46Y5uHorX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1VV1dapBT46tk9Xt8ySYr1GByfCgj9ZAbu5erYjEqJJ1Z2JM5UM4LazGhXSzsDNS1SE1Smni6x8LiAukq7kRi4",
  "key1": "2mSkamKo1Pj6HepQLFXjwLiJFbWRHm2mqzWsgFT1zJ22r6RbaSfHj7t1HfzTitoKL6faxM1mGfb9ZPrw24UrzbE8",
  "key2": "5hTieGf1tpRUB4mLv65w55sbkxUzzP8AitWtz1GNoAvAnVzCp1izo2Wfo2kymszxQ925fyjPA2DRjXnhMUU7PnV8",
  "key3": "qLPJc1kAkUmAuT4fSgKdxYqxvgzjjQpHWFTGDmZdB2UUJppnqCU2s7VBryrwHTXhZjZVGwyLPrByeQhvW2Kdijq",
  "key4": "4GyACMG353SUvdK7TjwZfKEAHc1Xv5Z7pyWEVgNiSzGV3SQym6MRdyLzNxuH7phQnMd7tnbCPbJwijngryCBEh1t",
  "key5": "4pq2U9hSc2mF2azUaTYvHhmsqnbvuPHEC243Kepm48wDSm8nbHbCdNd27u6tpuUQ4J1awVR4swy1Hj23SGKs69eV",
  "key6": "3TzfRcb5PUDiDG6uBGybZGscPxbB38gGrMhvLMct3WiSoftjp1TEonUvwBhiJbf9gfc2Z63SBWe69dxnhv5S5wEH",
  "key7": "x45PDXNe7RczzfSaAkWDxRwGLX5FptmH96TVnv4oeDQVZRMnT29r2j6YEG7P1Wd3eDh3VMEs56PiCyo8PLHSL5J",
  "key8": "24QsZJZTN2hamERjdoVVibV3NaKwHjxmpzr6j9hNnHWrj9yaiGRb8KPGtiGc5xq87oJoFhmHEAg2Ae18Zn91Zjtg",
  "key9": "tJmXnAfeVyuzqB3tooTw4Hv3E4Pn2bi5os6T9hNztoPred8ipuZvGkvREg9xGQ5wnKEh35QBUg6NM14eHWbstgZ",
  "key10": "pgk61LVMYV9dcXQUvgy6ZN2w5LfhwCeGpTChJxSXdsYptVwqHR2o7a5psW7T3Yj5zMSTqRtfrLH6yxvpZZ6d3LE",
  "key11": "4Wt1WU7VSwLb875ztuDDocTHFYwQ7BieVJiBEq4kbw34jVd1JGVw558FCXFui5i5T9LRXSnexKDsDUW2GrMB3NF3",
  "key12": "3pvsL1TLV2WyXCxmiJevvhz9nsuqfHDjAwyGGb1X9MWxQseKUPQj1ijjH23GzvfZTH9ftTo8q67a8bQR97cVNAvz",
  "key13": "4rKzYh7DPFjF2CVR9Wd8kA9i8UUCvHGQ5moJLw5SmkoyLTnBMTxCaAqmvhrsCqkum8F2EKwrpGzYKQyRv1w931FT",
  "key14": "4bQVdueiMMnL2pypXPrC6ncyC9JLMMWTbRj8oEbvqanNyEPM4KxdWWkVbRD3Uxz4kJ9JJc3J9z953Q7Ko8t5Zvu",
  "key15": "prESb64KmwFDS3mNwFRz7DxTh2vRoU3xeGfdYJujYz8pqjonEztjBatUgR5SADLWkui3vG4ipTXeMXmbo2ETeZJ",
  "key16": "4v716s1HY6JfBiijhPd7qchXmRyoLKvXo1gtN6wL544NND89WBHnSXPj5FmU5cGBjXYa24ZCXAM4AR1UNSzrvzTP",
  "key17": "5nGTxtJTB5dU1HDv4BhsWhP9QzzRTfmDagw2WkoVXp9WkvYSUNSDWz1s6HHGLKG8ceBvAEYfKw1bUsmPcFEgZLce",
  "key18": "41dabezyaXMA7xSjUWmkBC6Z2AFHMkR2GuJsikCz7i95fMMsxSxbt5hYhgQCoMAydfUN7VgVPM7LStYrjETHAFJk",
  "key19": "43vj4DUqckysLYi5muazpaJoBsZhX9mhfMfwGFzTNH6e2JhKQYFjqB9n6DAe9D72rKuF4tAotu2HxSVmgVAz2W7q",
  "key20": "5VDbGNyamWSycHk4gtRzNiuErgVnvUVZU2y52s46atDDccXmB675Vs6GHow8V8g2bo7QfLH1iv1eFpJqxp6Fsn3b",
  "key21": "3kKFcgg2uG1uEuGi8v1CrwZERZBMSNg7gtC6VJkhC8MpWbis9sgfbgGudeGYGiFNSeagYeKQNd5zLAK1cp64TsF7",
  "key22": "5dktLVHjUc4kxe4azQLmDw2JgL55AaJjM8o2Ecg1ULGfrobwMFBwLDjuB4jtntH8iW6F17smqJFp317SqPC8N86U",
  "key23": "5LJeC4CVTkkgZkWeeLHFpbtP9Z6Boo8SxwkAjmRebqiH5EVG56Q2Y9JpZu7fg9jRRoqNZURU6u2pXGkvkrdN9C8P",
  "key24": "5fwDYWQgNVy9kTBzEj8q9yVHnAnxbrXGXrXFdNhrSGyHtGJnEv15YvMCgSyepe38QXaA1LdXLHGE9hd31X2ZMsqq",
  "key25": "4NgtfwYAo2Ebh3wDPTvfnn7v2qyeA5hfWGRqu7aPocXgVWsu2XUTBRGjMtCT4ZHGxRecF1BhPujTeebUL6ryv5Gx",
  "key26": "3m8C4fWgvKgCYAUa5dB8rivraUEZtU2SXPQREXyCtfeqfaMgbaFAAjHYYw7rYYd7tfMEeaMX6FpLxSvHWzURTRHu",
  "key27": "3Z3n28uFUtan3qs9EVY6EmmSiHLgrP3vAJgnYUvKaRHsTbmnjUgRk98hcZVknkNWncsARCtoaQ3KwLMRsKPekrCA",
  "key28": "2krDiT1CwPzgTibv2EKhLvkLtF7NEU9hJsVbvcbDJnMALcnvtsi5z3W5Z1ShRiCveG59TjjemgMHDVWZv3C2yzpZ",
  "key29": "3ojRSXdXdd1z4taT6357uc7f5RmnK9ogst3Gz18zkhsQoqkynCJJ3Qjw4x3VA2xT81U9UPB5A4sgwy6ahRgAuc9s"
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
