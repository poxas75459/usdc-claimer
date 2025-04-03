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
    "3GbQfyXDa3cKXz7o3SQJA5gM8Tsr8Zonpv515a4LDhiPF2icHM9dAR8C2r5ARqny4yASB49eL1G8NDK3ZZYHrcBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4isynULUGQFW7a5qQnT9C9GWfbYNJhSpU5zmeL8ejFmmkuqjFX9URSQ7Kty3CfqLWhzsRnotgu5WpgDqEAd3hjfT",
  "key1": "5LqpPzrEzujVCuZF3rhE9VSyJbmRpLtrNLBxFfAQbSoYN6BkUdKHmm62CyLpVUxjCCu5nGnGZkCNKuwavryWsHoJ",
  "key2": "8CTQMMdKrvYB84KXyTwx9hv5roxYRApkGr8HJtzig8RcRTYmX2GGiaG2gqiyom1i4cyWugXMQZCVWFeaFAAVLtb",
  "key3": "229mQdC5jV64XP9Vybb2Qvc1tTBw2gfM7Ris8o6HBdXm8KMGcGi91u7wYcPKfg8SQK4vjfs77AEmZb67EBVgcE5K",
  "key4": "cKfQhSHMP1nPfutQybu9CBPvBjtZAhgQPMNt82HhE3HXHoDS7MQTXYRfuiR68YfbsaLQvfd8vbrUjK2F5jt4UqK",
  "key5": "5AZgsZCiyJcoy7Rrs2pdGSz5Q8dYJWT68sKKNUpcMrWFv4V8vVE451fFix8bF61UkKLBYM6jbWFDMknFfmoB3Mre",
  "key6": "3Rp8x4H5Sj8fStezs9QgJV2KGE249F1Di5UBgU31pLF5GJYvCMJG2eSB2w41rhEUcrWtvqDXa2YPr7xKMAmEAY3G",
  "key7": "5y1Xuz8c3qKbnNzrvhPHxswgyrkz5z5QsP4rK4wRy3gpCaa2EkZ5oBujk1BTrUtBqj3n9afX7B3JS2hYUpVrwWME",
  "key8": "61fCryegNtTb5TwtXXe9jLYAWbo9oJBBLk9k6qHEUessgSRw9yRMNYzetbnuDXPqcmjZdsifNrZnQz3BpgNTThwR",
  "key9": "62k6jmfD9FkMNWEZYAm2utx6dTV7CKjkm5QKHoJrtUUqyaURGAkztcZUYDhajipwbXasR6WhyBi2hKZAiDuuBo6T",
  "key10": "XFvDYHRN3Dxr9FjXH8pfgzDwtJRL17NbS5Zo65rppMUqohe3jgcd2gLuCRF63z2D2gtymVZKpD3EmS8kP1d9YJn",
  "key11": "4fqyRrWZg9aUm9dBvdCBmkfhqShxypxN6Qcm7xVt5rrqWxXMpcJVedfH4oJTpNt2JxFGD5rCyTooZwP5i2MzxzSF",
  "key12": "2EWrofv3hTWiFZJnP51zPiCPUfWi1wzTGmZqzQinqWqeTwKPRrdM9KZCtbHHVcgbry5PGtjg8p1cyQDAn5uTVe1C",
  "key13": "4pVssuqLTt2ZfzV7BgVWYcVxyRffLFvKcAxpkQYf2FJrzAoBT56R55QywJdMXkdXX3PfMakgsoi3uGkHU6z8LrdH",
  "key14": "2U3eJjm3dRtbf1uyZLmZrbxxN8iLhc8PEtMkmhdysSX7r2dowaXY5FsdhNBfaXkbjfDSQXm5EirVnLtisgR6ADx3",
  "key15": "hxfoNnyMfrFJSqKxekhELScLZKJbLesQx6diyBKCygLpdrEy3twCySDrE7B15Bp6Gh1c2RNMJxh6nQ2G8SFY4Rf",
  "key16": "36m1juq657siTpMHr1MJfK3MZZTGweP2hwDuvz8wgVC3thAAUg8Y4jaUuesQGbKVC8z9dmqgDKPCWrcQqVdncvZb",
  "key17": "3nNrQ5rhqbVqnbxmWTqWURHtzpvmyYSM3v7NqUDNEbGbdJNZiDyEqMfqmGn5PWqvMfRzfRuNwjx915BpzZUH2x1c",
  "key18": "49MXkVefpLrfiUnqEp7dK77LHE4JNiqSKbEgGtbai7dqGf1x31Rznv5q17yYP8C8xRcBmhM2NyBinAVMhySNhq3Y",
  "key19": "27oMdsrqzQLwZ5DNQw5MCf5XCytjuj478XtCxtfEVcTJc3qNwL1AMMNn3bdTjdjdANtwVQtzBV6oEzULmeSz2a2D",
  "key20": "64TmFQtmuebA8g9CEWV615dq9csRjih8RqJPVjxymo6kgrQUPAgZyxu6QtvKfShLgEEB5Pmn6PjQt8mjZ6KNvAdk",
  "key21": "2q9jh6esR59MZ93uiFphj9hChvg7YG9a8Lztr5E6fx2dhPcUnuRyCXB1ERtj5oeF6MsX4x86Tv6NnZRstAnHU1CS",
  "key22": "5TJkAen6U4eBVdWMhkSMfQPonHHwyFXxgKwfafrADgaz67owrYTzqzyfUYRB9pdFspiXQW9DsdTnoa8EqW5yNMdJ",
  "key23": "4TNBUiKsySuvTupy5ZLP551UWGAYV8mkYoJxEuN9pLwpDLjAhYrUKPj697bpEPGGpexs6gkyeGUStv3nQkcicoC3",
  "key24": "5fosPBNNznp5unMdFZXKm7JkvPRZx2nYkq59zGgUgRhM8nLpuGQzHnRnFGgCdpXokZdTNhUH12EPNQ8BnDtbbkQ8",
  "key25": "5sdxNQUdUtDN599FGCitp64xKqgoPUCRgoececddvcf4NFZth7JMLmTVqXs2guf9EXWKR9rpmtYfbp5LHVx2s6Lj",
  "key26": "2dq8u2wUyFAmXuY9GV35WyCbxqn9JFNZ5RA2CA9ogqVgvgAGLTBQgyUej9a6Xd6aowCtJYUycBAmusGFaByB3mZ5",
  "key27": "2a433WPzEymKF1RuN4xfjbQchhaWxWZDrSpTJbX9FhrEbG3TSnC52yp3Nggxq4EsxfkSCzs7jULkiUfVpaj2MBKp",
  "key28": "5bX26mjcBqBGQvExBtbnv5ZwbBpHBc2ZgAnsGF1ff3QN87NyTmqMNSHC9H7UaVS83TmRu7ekje6gxgkcK9CHG9sm",
  "key29": "dhajnSbA6zcaaYd8jXeAejzwEeaVirMEqpTGHkU91d4ooUBjQ9Lztvn2PcPsJ4mgw6M6dotvXnbYGyVB6WyZRmd",
  "key30": "2nNFXGAkeqHgqNADPETwKPjpiLYYF8tgV2F8VChMnYoyLC8sYyTFiRDrRwEDQDaAU7JV2rHcU3ejx7xk3mPuP9Um",
  "key31": "2Z7WSi2hd9bKT94y84Gm7aNKBHjdV4ySvwxqZrswnUpisSwyZjSgxYLSeMLLnaVcLYUvR26vmWskEeStFGSHty7D",
  "key32": "4fP8Cma1oM321gpMgPseMda3TvgFbUP4qGvhPrEiqkyEAD21nWdxXPS7dWxGgh943Cd1brD7GjcEpYpx3xemPk8d"
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
