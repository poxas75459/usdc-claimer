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
    "5oX57iXge2sQ85iuTLUUvMMhi1S6kY2iu2jEZMdH2X9EGTpgtYMLv3y1RDxidgDY2sAZU74diL9LvhTtaSeWQohw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLbz293f4b9SnaXxQEAfoutM5cuNBKkcsHJHJskbUc1TvAgBr6NMuwPcg2ztvYQmbzzu5Cajqu57CF2MhMX87dC",
  "key1": "MYXVCtbs8T3nKXxNYw4AsmvmeXRd8FwgtK1AupNuoYidt7DJGRnFmUFUWLz6wnyPo6etJxgVVEaGgaNYYu7qSKH",
  "key2": "58ZKJ1foHcTJMx8vswBWgBj8qtfkpZdYFR7WuHCQSXGb5N1P1XJSUBvuXZ8H7d9XAssMvvHxrnGSJDqdLUxMbp88",
  "key3": "V5FBh7FLwyRy3AkWt19dL4c2wXVDNtvAgzFfUKoUio3VhDaY9TcTwTqRZMbVskYXkvpzoUazTzPGgbRc2EV997g",
  "key4": "AoRHiQqUsQ26WYfNctbP58eUcwTeQXnrKSpbXG7KynDLCmeMnwMzaK3oJxUoXP3r8sN8CpQwt4T1iAiUd7GRPKU",
  "key5": "4fbbcAeGK8NLE5UJCc4NRQek69MH83feUqxAwq8F922TK3WzmD1Ln4nPRh7D4GmWrAPytzJL6gSzLmf8x6qkCUMX",
  "key6": "JPBNBUYEP7rzM4J9dkHGTxcBR7gmU8NcvynU1NS4sADn83aEswZsgMLRGqhBqE1vWQu99SCxv6Jdfa5xSMUdnc6",
  "key7": "5Ea1YkR6vvodbbqzv5AnyNQCHDp1vaX84pD1pY7qF8RyZydFSLm9HzHi2wRJXKZRbe1USMYLcVgvBVE337dYTbAT",
  "key8": "2rihyNHYe7hqn1aUSdzeRiRrhfUBCrdPFBBcH3R5E2FjBCdC2xXucqiTbsGENiCQxnCxqT9fDTUuv38iB5ukapzg",
  "key9": "4zY1kaDVc5WQ2orABhz538VTosa28DFimJPreAiJqhErF7AbxQsrNnEHphiB2ydFr3HuJGGN3QeCNKDjes4kRun1",
  "key10": "3p2usfGhjqvZqgMewrjWq6RxnCpU2ow5usZy5FGLE4kFn82cyTAzDeK8pZwLAE6ZebZznJbPCgCq77WndXoXYL78",
  "key11": "4Eo6XnC1nc1ckLk8iGBEav8HkHvLBSwDmwikBy9Yb2tHUicYcGtYTkiTUjkyGCrkmNyEt2ytDwtQpw41qdc28KMr",
  "key12": "x22aWJvfRUmVDPKH8bbsxN8tDCViauhWL1qfukoe7Th9P8ZxAZScTXuzGrJDzGW7RePTJYA4oXn2sYeVfHa2KaK",
  "key13": "2T97BptgzVLiYzXM5NsuJBhhiYc4jMKeDeU4vnk8qzx7nCWLykYWptvBcbUwLSWLJokC63a7Ep94a114QWBzoBT8",
  "key14": "3zuBtiQMa28uJpYCJoLWYZoRddpyGg1CHTXDPcF9RbpeKHDkajr39FsrqZASasgca93aiC9cPe37L3dQry8YdhsC",
  "key15": "5u5ncyTu2ecW4CXQirWm191yFYcfPMPshNCiKq8Qma6zUhqD9RJZ3B59g9hvDN82PRfMHqyYC3wsiv3aMMjXYWtA",
  "key16": "4kpQr4DbAjjbpKjD1WjkAEs6zwnWhQL1s5Yjku2A4ouadxC1DRK2bhQQXMgSXsfEcM6EF6XieAbNCcMTeao1dsDS",
  "key17": "36xRDTuz91kCgrC88LhYjZmQwfyVCqQHHSzbdTEVkzBGyyo8v2bGqhnjz9Mz3Qz6MJD9XNS44bm2YJUuQCYAPSp2",
  "key18": "5vTst2iX639dvbGjypURhZpURHp9AcS4ypux6nxrzeZBhg7h7L3Cvb3uy7mXo5JjqRKHh7ZGnBRYFhN4pB5voxgN",
  "key19": "2DBfcPMfycWmLAKmRJzR8XffDwYfwnVMQmp4RhtJ9ppTjwRLJ894ttXXihfFPmcrvJLaA4CFE6FK8HNM1vo4cuT7",
  "key20": "3ticfY15brFBDhrMCFjDZfFGK6vpD1qr5zpkxGLXf1ho6RyBcicUsdPquQdwAHTzEidnMuDpg33RezonhbbwtgS5",
  "key21": "4zfLYwZES6poE7ya1k8T1A2tzkaarTydPRyfzwENBDRX34pAZZPVpcsXp8thmWBFs1QBq6FBxeZ9bQzGMUkYD27h",
  "key22": "NKdcC2mEzfwgJnaGtPdoN82EoS1PvKtGt1z1qEjzcWWarjxiU7JDMP5SYFww4oa4hZFGm8AxJdLFi4H79FgVm6n",
  "key23": "3spfoqxG6vpR6sMx2NSrasMsCPD1HfoBhuvMqMHR7YEXhmdCbTnSfRCHapv8za8QgCtrjrwb6WntEGXvuta1JpoK",
  "key24": "3mLxJecrePiXYNMEBza9i4iZiHCFkCsXFHwxzPbXHKHQkk1B8Fk1Sq4wQwV68TxoHwKWXwFkastoAFpe7E33nQ3b",
  "key25": "5rxSKbjjpC7YbAwvsSNMxw6iBbWqAezbrGcke3p7eaFov2hdofDdtyBvZjo8AdXnV3qU1U8EoTYHtfLAH6jFyK3p",
  "key26": "3vjmgWrN8YLZYx1VUegmqAbkHYqxzERWFu9kH9hYqXpa3kQujnMD2RfMgzMRw5KMZndTZPGGCqaKr2sbzdo75yEA",
  "key27": "5b6sc18wjbnp39H3Bs6ToZhogwkEc7qpcqFXvMQwJxjHfVYqYhyAet9vkwSDNNa4DuvRxukcJTiZb9kPsmLG8pMb",
  "key28": "3ZJ66UAFBri3o5zqyZEFXHWQVgTPmvkGbMc26eQs3FD5AB5wNa81JFLgST2HJNejAVWV2JdAJNUBePwARrP4jHFG",
  "key29": "4KvFW8XshZ5DgqtB8116tu7k9tpcpWmq6TyxS5RhYn4CSRBoTZb3kGK8Rdx7YoWYDwPAaXRSba9c2NQU71hCDTST",
  "key30": "3fTZcXeEMu2N3oa2saALR3nH37Tko8XzFPDZJYcrsmzS23emeWCXvVbjDFWNRsyZqhjtQTAE7NAki9ZFKinUmoRQ",
  "key31": "iUAgadpvHmTiVqR1CPHbGEjRaTRP8xW2wnwhrhURwtTL56yoUgoCTq8g7aSgsrDhXc4P7BUwQMHmCP6C2nd3835",
  "key32": "MRqTZ5uiJVYFjEJgSp7JA7ozG5odKZ7VKRUXfheTkXjxU1dteo6TK1QL1v2Stp912w9eYbYGkNZeEvhGnR9vhXx",
  "key33": "5m93ZsEBMwpNBdueboF2GzDAi9Hxm4NFM6PmaZd7pYfuYRx1F8yFumpCC8mggGCef75z9aXWNK7hHbv2ekyt7pLP",
  "key34": "3PHdCup1Ae5UAg9o1JDAsy4JQtLmuDZYGBE1A6VkUqVXgju74hrmnP9AVM95LwnUaT8BiTinXYvqycL8LN646G1V",
  "key35": "5Hq3rVMx7T72DKRM4LZ5RU6FZ4qvcAa3uiEbkTApuX9yrHM2yxyENa7iUSX1BFxecxBswsrsvrwKopba1DeW3EqF",
  "key36": "UGpAsLCrS29beKbuhPQyGN2sUhwUoXPH1S4youw33xUJSdPDvMbYXw3rrTezQeCkfeEnFXXbfzZRUncpbtRVwEC",
  "key37": "5iW7CCd1kAZTT2ZCHSUFFJt8jELfGKL65NGZTNW94r4bh7Ljrz9eVFDfb2DqNDknXXLUfW5ADepujHsUEYavJrg7",
  "key38": "5x8Koqzivx4ExHnaeJkMuXqqGUiSnmnit4jnEaFuR5mWAaFi222CpUrTEG9CiGEa31DEDiEHkqSAtZ23aXMhzqhm",
  "key39": "5L9GS3fbqXi69BdZG57yohvFE3wA5nrwyLmMiRHwSaEVDQSpUkRLcz2bQmpFJjgggSLCXzvKm5R9RVvac4gQiXEJ",
  "key40": "3YvyxT4gnayCJGhhyA1aEjTbqhVTyMbCCxLZ4nGZsSUnAUCkeRjyGMQxjUgs3ariQWHn9LWXWT2c4h9DcynUPw3m"
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
