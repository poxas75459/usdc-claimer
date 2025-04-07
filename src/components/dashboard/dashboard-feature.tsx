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
    "gNdw8jfqfFtdP49ASTBfWxq5jXoZ2r5dxjz6rxQ1DSQJqERJv5Ee8mEoyGTS23vQHQj5zRHaBNF6KttGTwegRqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v4trYek2omumtWkzaFUzf2nU2bzbz23Q1VLrUqVdN4gqLqfqfNuww4kkpPe67b7xAbRLRTpc6oXGhboAn6N9r5T",
  "key1": "2GTRfkhsKESPJDLebpR2GCfJhyVaFRbeWjLDpEVsJUfH2d7nRUuWcK1u5DzxBWxo37kvRXEbs2yZNngNQi1wxQhK",
  "key2": "Wg1EWumdtPDQaqrDNBhyhYfQYaHFDTi6KLCjHMGWdaYfxLqxdppwgTwu8cHjjHTCQP6cesqj895EYfdKfZopmev",
  "key3": "2AzYvnALWXuvyWbvAEYEK8WrC5jG3pjoDDk5hJYWXyUTq44oMBjTAemCKpDD94TLQH4q6AtaUNC8VbDSEFmLSETp",
  "key4": "659gFeyXk86DxoyD3PUp5oeKTiapXXtgEynA8tDYencunt4EMyExWvH8JtomkdTeBh2emjjyHiUkLheTyWRgecu1",
  "key5": "4Yenb1j5iUDs7i9KL3fjHHMuiwqjDwvk1QcksQQUCrvEGK1DXnRPQHb7gNFUeUTKigEKU3Q7tu8rs9Vmt4i3mQWz",
  "key6": "5mfFMp1TzYvot6zG4XNieQf8y8FzLc3TvUCnamSirJf26gyCH7fScyzRMTKhSAtDhFnJCjV69dC3SoGb6U7tgUXj",
  "key7": "48Cxvoa6iZY243ttfS381LdT5eJaiGb5Pz12GRwMBtULFAVVRPdLBi1Jo4j8Um5Y3FYxEnXNur8XPRmmcTFMXte7",
  "key8": "5vYgmiU7X3i4RibyKMSGcBjc2WComkrAHczMEMGvkbv2JTrSsqCpGK7VDmh3CEpqeyKNX61REHehvxwuXqBidGyL",
  "key9": "2qa7NbR8zoERTNAcP5osF8Kcmuztr8NdnBKhTDRWdVE891JiJA1UH3D33YXcnJNz2u6srWFEaoNBGMX53n2cQTN2",
  "key10": "46hGuUBmSqsfAgbxE6mz6PbncKKJ4N7GKJr59VTRWRhp1LiE1RQJZ6Ym18njco38AEcJHkFKmkd2uETUBQYpGrzw",
  "key11": "ewqbNo61LdMzSopUWJxPsh3jocLLQVQsuD1vtT75ydjXZ9jbGrW5btGGvdT7QbDJnNFXHWR1uTsT4jQH1NEBzXH",
  "key12": "3Cn3CPvQdF4TDMWtmcHYh5pbajQcEwYekCU3o9FXYzm55qWJv3n5B7ZE5q2Gk94mRt2roxp1fqNYwrQSuPYZ1vTe",
  "key13": "3EAoDsD69JqkvXYWwWPqMCqBdEBJVyU7kb3ZohVZWkgfcfYXPi4cbmkE386aZXfAHXnkT9AZtfvXeasVmLAZEt2a",
  "key14": "pfyBoHgYrm29TwLikeLzijAdgjFcMdb5KXZV1PdKxhRQyuv5TyiWXqVn1KmfRT9iXFKBVa9EDkpqhGKuZERfXpy",
  "key15": "2Zvi9oeFGFtvEE4NN73k4urwYMZ4yh5SSXtY6GX4bYKn5BfqHUuRZkV7rvYBA9mHftvPd93p8H3BHdwHQ922sez5",
  "key16": "2NAiMKg5Nfz7ozF5MyXsHAEN28hPEptaQXor3qpXwHQG5STJjtCnBGo5qLMJGQFpzCnZMKDWiYt7XsxTGc41vHkT",
  "key17": "5Mv2ceN51G2y2rLLbcFy5EepaNUkU6BanpwLe1VGMWoD2Jy82L1ePALiY8433NeyC5YCXCwC2rRh8z1Z3vrXnima",
  "key18": "49RLX3kLeMc2xeF4SSULAVKD3e1GQ6Hg5gPHiXofdADhtekGCtBLk6iieJQoQnDFa3wCH4UAStuue6ghjdWocSdP",
  "key19": "44GfNRaUdEXjKAmra9SBPFX496qcUscugwLUq6Jwo9vdZYsPuRk2asmPGqTaYKwfUsUqZSvgdZ8eWpmamW8FnCfo",
  "key20": "2zth5nEnfnWkXEKsFW2EtaD4zRTB5EZeJXF3RVQ3nR9urym6uFzqKCjAY9q2p6WF6NDLnMMDTTM5zqAGZb2C2vP7",
  "key21": "63vrqUBnVeBkmrpAKaYbUn9YGoV1ykuSMAbgCZfbZxVtiERi98ifhXUTnuhCWFGut78ptEVR5TRDGyEb7sC1VQtm",
  "key22": "3NXmPjSgGVX6ybnK4Tpr9npTbVwiabujw8Gtn1hCQFsAZ2GkeEpHTDkz6mRTbFtQ4ZLn9TZrQ38mCbGfibxQivBg",
  "key23": "43BkvTkQKNoJCLpVkeSpGiL1Ua4QtfgLAogh57L7ti2GNBgR441xcyXpzMLsKs8gwHQL2BM7Yf8jgdXZuBPKR3dp",
  "key24": "3R2zgRWt3Q7weVqa1qM8C4KCGajnLNk3Czh15DoCRPoE4gzfRwgYm4Xr6VwvqZq3UqrTswBoYJ125Qtp45n2t2QF",
  "key25": "3W35mfXcxyMZSbCokFQUAi4qNBCLXCjmYr3pmDw1KpneHRtyCH6VLds14jS8gHgcuugksptFUzDStWLyrfTevqy8",
  "key26": "5EjHLZcF7VgJB1nY8ESw1dnssEtordJKoMyoyBxz16LWRRfAkbJjm62tndnVXd6GPz5sPdkjArhseL8LhzVprPDY",
  "key27": "53TE1N2pXvkAYZqLVd1rx1QK7W8eW1RQUwp24PfTfDdViT9o2V7pBcWRgec1CfhmZZQQ6JyP6onEfZQ15rUg3cQK",
  "key28": "2Bkie1frpDYVMqNViRAheFw39H7SSafxoFsN2urS4LVJ5uFgQBxsk7DqUJmMNKqdzWSeUtHRw3nxWMoC2igHFeDL",
  "key29": "4ypnUPToHybZswvyM1NumSVEZSbpyKUM4gyUMyntEXY2v3H8UXBn4F4GbvfBudKM7srhd6m1AAPKBdHgU8dDVp4p",
  "key30": "3Vj2y9svVFWfeWZ5c5BDvMrNNg6L4koif9GZapjt9YP5j7XDMp6DGtmcxFi5oXpwgXtqGsyUrGdZe3ffn7LzrtAg",
  "key31": "3LSYLW6PjPdPf5iREpctEYuWKqGM4bjw7xoWKrDDgHeQY4SCH5CkgmhPnrpmAG2FC4Qzgn3pasVf9gJYMZk6XDhx",
  "key32": "5ZkY6Mam3YujT3Jc8CBN29kmXjNBKiGXjogMjshBE8UxbAyHboQj7zcWVYKoh1NzQgxwZe4iH2uowTVHkkSHjg8h",
  "key33": "2vUtvcT2bWwHx8yfmeLfbB7bZDVyL8em1nZyYdcv7shvmDu74uPmYPk8EuQLL6CuobyLKQNRv9V92Lj2WLTSAc5J",
  "key34": "haGGMNRtjSaUgqh5gyGLzsKy5QSJLxg7p2JwcLuQmX6boYpAmfFRHDUfs79v9v4DpDJTJ9f2bAMdNFzPd9HUErG",
  "key35": "4i8hXt74mXfVxfy6WJtPWakRwqcP5TCo6A9DKDuxMSeH14s1qfFczXte8tF7huM5PJvX4hwvXJ6hctq23B9ytSvr",
  "key36": "5M6vR5BbqdeZkGRaXvXL1BKv8qhwpQz5bc6NCkqAG4p9z2p32c1RYadHzKirezPbPtcf3Qh2aScEU6kiiGg9LG2a",
  "key37": "5jJKqYK6y47xsjD1T7dwRUy5qtbKxzcKA6ekjK7fr815Ua7UJg63urpiDFcxBw4rMFVa7drut3rMr7chqU5EKkeZ",
  "key38": "39mV7x4Tmykeou3M4sc9r6JN6PBgsYAEtDRGBsUjyeEKy95C8r62jBE4moDA5KcjLFXAcSh33FZ3itPCurQuaf6W",
  "key39": "K4f8b7Rj4NBdbNg1iReh2YLAV3yyUYxJ4Y2YTN5ZYMFLhKjiJojsr82XW21AwK5YyWWD4wiw7TBNyZvU12ywuXj",
  "key40": "2YzpuypSot5kAzdDe2TUdSSLk6S4NH6SM19J1AdDSztJaySYFrp4aismuN5kuV9yioaRQLVedbhX7QP59kWnrm2t"
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
