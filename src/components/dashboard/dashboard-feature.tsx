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
    "5QERxoSo3D1L6Nr5YLRj87RC9Fr6Gxigi2Jp52de9qrBCuVmHKXxmF8y8iKA7ApTmDXWJG2N6QN8kNGSnLA48oKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SuDZErRyKHt9ik5DrjjqzTdEU3PyTdBTSANH5enVs6jupB8c9WhRkSunFyC5QMNBmBTmNqGdWCFzzxLP7GRxnt1",
  "key1": "3qCngyFNyskNECfsTqMid4ytZt4Bt43Apyg3X9cZHZh3o3iEXishi2KftkU7SSiVQUJTZekAoJSY1ApiwVUr3GQU",
  "key2": "4GdrygQvr9oqMMYZJUxuAnei1QHkMBc14eKc1rXcxNXafeHsevtu8HjMWA6UGURMGgxZgUTRuyyGD4C9KXatDFmz",
  "key3": "Vy9Ld7RHz2r7KLSsdKitHbtYcRo9YoeP4TKnwLLaK29So7VuGM2E5vLkM6d1QjkXZGawfcq8SGKh3Zvfr89GRGP",
  "key4": "38Aq6gmxAxwVTxGsjjHVyz898KGERGMSmArXDiwHWjoBaBrKB8AVc9QNaKg9Xk8CoM6aa1efxpsyahutHASsrg9x",
  "key5": "XU7EV7udG9fKEFymdnTKXdbg93B28326uZx2tR1n5GM9zT7Qnach4yXe8iSnLcgZJMFeRDas5UiBcjwUNARZ8LP",
  "key6": "49GWN3KgHg5iTCTYeTK6QBu9oQAHbGkBtLjVBrCiBezPoCC73fNGriiSs9TLwi8WYtgRkTX7GUUgZXQTy66i3EvH",
  "key7": "3diqhaEYaQTCwqskUbN3WncdZNCWdXh713B5E4bDKrgt1Em5y3hhroCixCn7nMm3Qj5NnQJCfEQ7f12yViazGvE4",
  "key8": "3tGtDuKYxM5ir5xtBY7aBNfNPEh1YNNcJnSpzii5okvh2zaznAoYRhAQkpjUfB739K19TBHXJfnPCfTkjj1ENR6q",
  "key9": "hVKi8n45U1415Z6kFkP5jKv9yhVULc5Xz9tHMX8LpuYJk8uDhLw5e12noeBiREmVgMvUSafvRJ9zoNuUr8U94k8",
  "key10": "2AnVzypHGCDmva3SJgW717kRmv177eDH8Dvj7Cdc7zyzH3j8r8AABrQKEUcRumFRYRM3kr8adYV3xCusjXXVWkn8",
  "key11": "3keYbZc6LNakLoUddoiFeYW4rZmYgkDScMZwiyyRNcCGuPNA5PNNbgdeN8VfMyPAzaevWGNArzY3bFmqzgCwAB9a",
  "key12": "21FKXM8ftvvgPb53qgw3VmosDVVAnb85igUunz2dML9ruGoG48Tgv6gbBAYcWYifVYJPPpLr1xBZUNwNDrMjFuGS",
  "key13": "UK2mXJeeYEpxhjBFNohjmnPbGcCjTHC9oDE52gsqWXeA2sAK7zQxN3GC4TeKUhpGwaNC5thLcfKX1ZqhaXZTwfh",
  "key14": "NiLRevHRaAK8LwxvxMEAVkPywoXAu7EvrWTtbHuAQLvnoe5kwTACmsTG4RaedfKWsLzJf7Xx8NNdSsgsEQvYYHJ",
  "key15": "3F7b9BTUExErfusBzQCaao3hqZnac7MdNY6b9ayZpLC8NoWDArddTLmdvUqpKEbv2JCBTbbwDtVVsFctshuz1gC7",
  "key16": "3aMWnx2Ps22T3yqS8NnNmL3RoSn9sM7Ksu1aTNDdAkt7TD4zQWhStA4WYeLSmajbyKfFajsZaae5fLKjfZuvqEmM",
  "key17": "39kTFLrUtCzW7PNgnzxX6EU4N74YJeQCTrYv7QFSB49JMX4aCVmX6bh8ch9GeRzjXe6Y9CkYrBQ4weZJQBTAzqsz",
  "key18": "3rNgEQkXcuBJK2rJY6SGCxoHpRzjLGfNnVvxPbxpQJkoCuUD6Ld3sKdWFktoYSAJ5V6jTD27rSjmBkVkHkeshYTH",
  "key19": "2VDbFgWHGwEdtFqKWQsK7FsrBwBxDvp3JQxSoUXo9fcbHTwFcweB85dBr4fsjKhD2HANmaMTAKEJUZfxsA9mJRaQ",
  "key20": "44rVhFp7innwkrsALGPZaQg52RG9KvrsEDhuZjCDiFSFDDoVEbV2DSm7t1vmnCmeZaCGkWeJyJsEd5LbaWsfXQoX",
  "key21": "5JQfhXA8Ejfo7MKY8qJGcZyXBEjgLhyBEqqVGE5W9FWTZvGpVroNGquzr6TsR5spkm3brdT3LN21gQ55m5bhiDxU",
  "key22": "MGyAoS5vMRNxZPJ6vj9SrQ7Wh6bpBPEHhM9hEkMozs2ohbzsm311M6BJK4qUyqxF2YzuvEdwbSLtJqyv4L1krmS",
  "key23": "2xRCnU79Sjy2FBb266vHEBgdHyE7pLAqdeY4oJDKHAL3qpisReK1c2naWVBLLSNdHVKyYtMfbJuGkmRZL6Vaq5Ri",
  "key24": "4mCUJ38X5ovsSaQ34YVpo8PnDFaSBtT4WLdgWsYNrfmZhE3LCVVZvkc4tVswcsbPVLMahVgjiFicN7h6vnnNNtJL",
  "key25": "4LjQeye57xECkxrvERbgY3TYgD7e7yhMM5yRZWHjkhzxeTZir7QSoMGjXeLGjHs56VWrKzET6nr3DFChrtkpGd47",
  "key26": "3qiKYeaqKcWVDqEUVeGdANAH3Z2ycmFrP8KM5nrRqjka3CPqrNj9nxFZwYJQWWKxAQSiE3EtspF26VpPkmcgpaD3",
  "key27": "2hvCzhzM8GrrKTQE3wcCMo5sQNg3mSpnecW8wowwMDo1y1Ukbv6wqYqAMQBCz1oMS6inxm3C2mWr79zHpVVqvHaH",
  "key28": "5YDv2jdxwCDqnnx6tNrnouLEw5pZHMbUBdgj5uAag3HWr7Xtvaf1VVU3dXRxqRqZhosFoWjWNJzAbvmwJpaocuAU",
  "key29": "GEmPRFpob1f3bqesjd544CzBbcePwKb4Bej6o3YVCvPtmqgqXiqykdq3qp8v6S8ksuutdzNyAdhGEwY8Mvon3J4",
  "key30": "2uv2eFiLQasBJng9hRovKrddfjdxnS9oqifJHMaRTYnaNZe1uE33TAFCjiKU1XHfZNN38acgZkJPKs9ozqTNJk5Q",
  "key31": "xnStFa3CfBHd53L6Z296iTvrn2DH7ggYJkYrkiBH2mqxKCQFRKDoMTAnYWoPX2E7k7fkoiKQpLKMAKudCJWN2yx",
  "key32": "4d2MS6T7Cj8N5QNfjsrmcFCwHqigH7gMFvWGNRbuh9NWTdz3aAyLGeHNH1Qic5Va5TpK8ycitA8Q8rbvaP6t43zM",
  "key33": "5Yh3oWVxHsWBsPmA7UfBupABSCQVM12sJtQTgoaYCLxoTpZVHTA4dW2eV94yfxaNQzjfTaxEjoBFVGkGEk2pLsJ4",
  "key34": "45euu1wFmZbsrurUc4xYhakfe5HYcm3m4WbheuL5gfSDKjqVEt1robKkunMCT8ms8qBGXzJ7yDktD3nfRVJ9YrkH",
  "key35": "3vqDNyJhXXiwwtCGydLJB99mJeqZgTUMputKn7WwzGswkwe3m2acTx3avhiqouXNuPmaoD1Ungjc6DXMUfEAvr93",
  "key36": "5RCLZ8P29wsaSijwB6tm8GeCYvQncdGaQW22kRDbH3GiGHdfaRG23iv3JQ1QqN3SuEtjtdnkJ8ku41Unb3J49eL9"
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
