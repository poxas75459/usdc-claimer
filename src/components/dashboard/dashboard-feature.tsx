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
    "3LPAMK5ARnaExiUk8MUGoCgNFXTbcpSfLercHaKLRfD4CtNc416zuY9kiJtGsN9Mz4dQXgUfScqUqP5jLgbodxXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gaazkP6Sn5PA247xdnj5sS73hdYiPnDNbc7KzpX9kiKSyA7TBagbvAUtwDeS5HhFiuAwzT3rcCr1HNFbSTw77b",
  "key1": "3WxA7pGrdPAeQ8NQmjfnDTR31BncPgBNBGMLPszqCrfDb9QzgosejWj1hQd4jXixo3hP4x3c45o77xihPEviDpae",
  "key2": "5ScfMCioEfbuXVXQohDF28DYjxULk4YzqxTnUGmbVZigeG3wdoVk7Mt2c7S8pktGdVyEWWye7JNThm3LyrKfJbPQ",
  "key3": "4gxi5otPpaJmEK8P6VZ43DT4G9xnUo1Ed2u5vhsEZMxNJFRLMTY1mUwE5Ztrj9uZ5p3E4wKfuZ4MnotMe6AajEuL",
  "key4": "69uDVgosggHUPGoe4Dt6euHkEXPCsW4iN9Eo2bETHBx1WJt1ypqXwGQBZapmxNJ2CSpAVb65T6HZP2RN6UYGzJg",
  "key5": "444dnqVzxUMhd5qgDq67WcbCu3dwqn5Y4TySuWQkzUB7wJrfMBsto6hLa1Ashuo8KZRWZkPhgFB3UncUpKgWDWxD",
  "key6": "HVn8tyKvPnDe28QtgKcAXVXdHwnJXpBt2SH6XWpeKRMpckKbFHVnwJGFm9qpdMnNLE3ngvy74go62zLrhJpTuur",
  "key7": "3CqaaPmKLXHcPggvfGuNCrAEBKBRFx4YB8Ld2nLCvfFzctFRxgehxfuHBwuQ3NXaRAo4PeoDVGFs13RCj8gjZUMA",
  "key8": "PZxjcmaACBoK1Lq6VLksmsrWXJnYDKENb2xC5AVnT4s3vNQu6eLwg8EM3irmDZXrspAUAUr2G54a5aYatYZv5zR",
  "key9": "27U889kHSe5bDa8YMHk6MrHqLLYkVedFXCVAgVir6edvcYhQKGSDszJpaDEcSg1fnRRzxUf3AKkxYaj7R88kHEfR",
  "key10": "5nLsHkdZ7yqiEB3gxdBTmDgT5CNcP6qg5sCvaWZ2BaYGxDipXaS3FeJg1wFQEUSpkBnqduVafrC2MkwaMXvSdw2s",
  "key11": "gqkUwQuaosjAgQMvm5qoQ3D4an6dy3chi8YjPC4pDSHTsBgsC2NkUfcoqiWYvJ2pCD3A5BCYGNnjrTNN8CFyQSf",
  "key12": "4utJtUwyeH6t6vB4Jy9rxiYKDHGS8LsePuHjnmeT1ZkJFEKcHAqNaNxzm94FVqRwS8unsm9UJQoJ9ffW1pGyFe3T",
  "key13": "65mj1EVLjnJUvD5uU2TLD6FpPSBxa5EuYez2YeAx2YCjjuqJH2RX8ZCbaVk6cvpb3eG6atB819TjnseJS9MP3fW1",
  "key14": "13qN43CgGh1qPKT4S2DgRGV6sE5Nc2nBZoG853YLsnqwewbDrbQ2SJTf9MVEkHW2pbvYW9EtiWJkBghHWQWoCN9",
  "key15": "4KBjLvi69HaMVWHNkTbyURAxT16zFoaZ1nyHr6GGDa9vchbmetpABMaVYT9dhfDC7crqCJ17kY9y85U4sbK2THPu",
  "key16": "2ibwS5fo1Lvhohq9d93SKjKHw7EKH76YBKMHAHEFwEpfCXZymq4wWbQndpxFvLXyq9uiERgvkYuUPwYkjrHdjy4n",
  "key17": "4xir3FByTBQBKRuqLDqUnsST3ctSmTTLo1qBycsr7rHfxXeRJGUBgyYjrLa1RbUgi5TFUwFABZPKz49YM7tqEjsa",
  "key18": "29BeJEa5KawcX3hiMEsx239QY6ihu6Ti1TADzzurL9YBwAYq9BH1pXBWr8suBuhZg18R896YY4LCmmWK9acM6ai7",
  "key19": "q2ZcEy7rpuYbVipEB1jUiF4nPyEMrZUTkk3AvECoiFEcHbGTDfqujQR9gm3E2myRbZX8ji5grp7xg8yw26EdPX9",
  "key20": "Cuncr6HPe8Rnp3iXNvRzLPYoyXQCvybR36zSGckXVtmncPDvao2eNjc7EboSjFUqAB6KhdE7Kb7X8GAYvDPHCuv",
  "key21": "3oamrz1TLh1mrq16GuuQVZybHZoh6eaNFypGiWeqHJYdfUc8pYWtztcvgxhbtw3sz6PTTs94R8PGEzyN99qZ3h7V",
  "key22": "c21SiFoTTqDFQ1vNV7RcJ97wpdW42n6KqJ4hAocvFvoyYSCUkCsSSS6RFK3Geyy6XtdFzcewDGJ9Fd9WvGeuDG6",
  "key23": "5n84ncGLndM4oPjXqZDv8mAqT92wWrqLBcqSMaWyr1CitHSAxR2ULdoL83QVF6i4iFdWpmgQbuGnbu8nZVKeBKtp",
  "key24": "2X2ht9hdo7TQZJ5n13CxpvbFxzBZNtHbgmgPeEfNeFTbboPbJdrWq7E5heiyqZ7k9DDhpXzo1MeoHsdyNmCEejr",
  "key25": "4zcwx3aah5mKaWbskjKZLtaNP1MnYSwNCX8xsuxPY7sfVbSxSLJmYTQm7kY8XYDhbWXc1VNbCEH3rWoW1M89Xb6p",
  "key26": "2JDKudwBXRE5uMU9bpVYe7mgPUUHCKAJJeBFGAPBQ4SVkdU1g13qehNTmfKk27YkkbrEZpqzWwdtbUbZHGCe1ePD",
  "key27": "34oMnCMnLcCiRVVHajyPz8LWmGF1Jdc1FfAxTXnwHVRc3UayCVcr1VVPU47HjqzU37mreer9qPitCQuWLKng2Qzj",
  "key28": "4i7pJUiZoYkrbiE87Mw9Z5edusBT2vRjAcu2VbQmFnytGwBK9t5EyRShH82VTBLkNGn6LKgs9QQL7zzVoo6mGuwi",
  "key29": "3jmcn6YoPQq6gHqTXWwF5Y1gb6NuCz5bwsEmTjaiA49ZbDzXhDZrzwPYLCy8aSqNwBfGfJy1dY4DzY1dhuJRTTJp",
  "key30": "5MjxP6kgMci8ZGWpjC9gbS35gP3poszvYy6MJPauhsYoNJJtpNSKPgpwsVhNa9Jti7kGhyZZZXHbBSJbFHvEaZmt",
  "key31": "2SUKJm2MKELneNFcF9GP5AJNMdaeFMuGam4whoNPh2NaotoSXgSK6UopQ49MeSeSEVGnmaHMMWMyZTVZ8RjSmg48",
  "key32": "2t7B8u1sVdALvkK17rSZXcxDAvsXDgduD1nHuhv3UvW55Dh9spkKGNMNAdddZ9nnP878oFDotAS3hJwwJQrsJa1Q",
  "key33": "57JdzFTztUiQY5cy7mjx5X3MUYr4NgN3RWVYta4LoovLxt2SvmhHfaH7xXbj5JYYgRizFyLTHMPJFhkJGFaxLZgd",
  "key34": "mADYe451iTgnoSGWo6wgu5GZbWU17rBWdokSHuyd8vh9xfVU9rMpQKLNsWDqiXxCfxqPXWQFZjEXHE5zeMryuug",
  "key35": "YeU9C6Df4Bp4cwFKEPRNitg2ELWDrVRCipyFyqiK3XcyozqiwEUcTa1fLorw5V6A7UXNXEniB6tMu2eNbY4W9bw",
  "key36": "ZPZWfE8BCzUEXNuDBgAW2LjAFzdvnLfPMF1CdTDZfrscr8d5YuwACa23opV5HMpwWkgC9cF89EnJPb4JfdEpxtj"
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
